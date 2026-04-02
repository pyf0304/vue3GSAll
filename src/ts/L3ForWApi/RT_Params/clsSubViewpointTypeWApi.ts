/**
 * 类名:clsSubViewpointTypeWApi
 * 表名:SubViewpointType(01120533)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:38
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
 * 子观点类型表(SubViewpointType)
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
import { clsSubViewpointTypeEN } from '@/ts/L0Entity/RT_Params/clsSubViewpointTypeEN';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const subViewpointType_Controller = 'SubViewpointTypeApi';
export const subViewpointType_ConstructorName = 'subViewpointType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strSubViewpointTypeId:关键字
 * @returns 对象
 **/
export async function SubViewpointType_GetObjBySubViewpointTypeIdAsync(
  strSubViewpointTypeId: string,
): Promise<clsSubViewpointTypeEN | null> {
  const strThisFuncName = 'GetObjBySubViewpointTypeIdAsync';

  if (IsNullOrEmpty(strSubViewpointTypeId) == true) {
    const strMsg = Format(
      '参数:[strSubViewpointTypeId]不能为空!(In clsSubViewpointTypeWApi.GetObjBySubViewpointTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSubViewpointTypeId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strSubViewpointTypeId]的长度:[{0}]不正确!(clsSubViewpointTypeWApi.GetObjBySubViewpointTypeIdAsync)',
      strSubViewpointTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBySubViewpointTypeId';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSubViewpointTypeId,
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
      const objSubViewpointType = SubViewpointType_GetObjFromJsonObj(returnObj);
      return objSubViewpointType;
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * @param strSubViewpointTypeId:所给的关键字
 * @returns 对象
 */
export async function SubViewpointType_GetObjBySubViewpointTypeIdCache(
  strSubViewpointTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBySubViewpointTypeIdCache';

  if (IsNullOrEmpty(strSubViewpointTypeId) == true) {
    const strMsg = Format(
      '参数:[strSubViewpointTypeId]不能为空!(In clsSubViewpointTypeWApi.GetObjBySubViewpointTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSubViewpointTypeId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strSubViewpointTypeId]的长度:[{0}]不正确!(clsSubViewpointTypeWApi.GetObjBySubViewpointTypeIdCache)',
      strSubViewpointTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstCache();
  try {
    const arrSubViewpointTypeSel = arrSubViewpointTypeObjLstCache.filter(
      (x) => x.subViewpointTypeId == strSubViewpointTypeId,
    );
    let objSubViewpointType: clsSubViewpointTypeEN;
    if (arrSubViewpointTypeSel.length > 0) {
      objSubViewpointType = arrSubViewpointTypeSel[0];
      return objSubViewpointType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objSubViewpointTypeConst = await SubViewpointType_GetObjBySubViewpointTypeIdAsync(
          strSubViewpointTypeId,
        );
        if (objSubViewpointTypeConst != null) {
          SubViewpointType_ReFreshThisCache();
          return objSubViewpointTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSubViewpointTypeId,
      subViewpointType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strSubViewpointTypeId:所给的关键字
 * @returns 对象
 */
export async function SubViewpointType_GetObjBySubViewpointTypeIdlocalStorage(
  strSubViewpointTypeId: string,
) {
  const strThisFuncName = 'GetObjBySubViewpointTypeIdlocalStorage';

  if (IsNullOrEmpty(strSubViewpointTypeId) == true) {
    const strMsg = Format(
      '参数:[strSubViewpointTypeId]不能为空!(In clsSubViewpointTypeWApi.GetObjBySubViewpointTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSubViewpointTypeId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strSubViewpointTypeId]的长度:[{0}]不正确!(clsSubViewpointTypeWApi.GetObjBySubViewpointTypeIdlocalStorage)',
      strSubViewpointTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsSubViewpointTypeEN._CurrTabName, strSubViewpointTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objSubViewpointTypeCache: clsSubViewpointTypeEN = JSON.parse(strTempObj);
    return objSubViewpointTypeCache;
  }
  try {
    const objSubViewpointType = await SubViewpointType_GetObjBySubViewpointTypeIdAsync(
      strSubViewpointTypeId,
    );
    if (objSubViewpointType != null) {
      localStorage.setItem(strKey, JSON.stringify(objSubViewpointType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objSubViewpointType;
    }
    return objSubViewpointType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strSubViewpointTypeId,
      subViewpointType_ConstructorName,
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
 * @param objSubViewpointType:所给的对象
 * @returns 对象
 */
export async function SubViewpointType_UpdateObjInLstCache(
  objSubViewpointType: clsSubViewpointTypeEN,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstCache();
    const obj = arrSubViewpointTypeObjLstCache.find(
      (x) => x.subViewpointTypeName == objSubViewpointType.subViewpointTypeName,
    );
    if (obj != null) {
      objSubViewpointType.subViewpointTypeId = obj.subViewpointTypeId;
      ObjectAssign(obj, objSubViewpointType);
    } else {
      arrSubViewpointTypeObjLstCache.push(objSubViewpointType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      subViewpointType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strSubViewpointTypeId:所给的关键字
 * @returns 对象
 */
export async function SubViewpointType_GetNameBySubViewpointTypeIdCache(
  strSubViewpointTypeId: string,
) {
  if (IsNullOrEmpty(strSubViewpointTypeId) == true) {
    const strMsg = Format(
      '参数:[strSubViewpointTypeId]不能为空!(In clsSubViewpointTypeWApi.GetNameBySubViewpointTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strSubViewpointTypeId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strSubViewpointTypeId]的长度:[{0}]不正确!(clsSubViewpointTypeWApi.GetNameBySubViewpointTypeIdCache)',
      strSubViewpointTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstCache();
  if (arrSubViewpointTypeObjLstCache == null) return '';
  try {
    const arrSubViewpointTypeSel = arrSubViewpointTypeObjLstCache.filter(
      (x) => x.subViewpointTypeId == strSubViewpointTypeId,
    );
    let objSubViewpointType: clsSubViewpointTypeEN;
    if (arrSubViewpointTypeSel.length > 0) {
      objSubViewpointType = arrSubViewpointTypeSel[0];
      return objSubViewpointType.subViewpointTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strSubViewpointTypeId,
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
export async function SubViewpointType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsSubViewpointTypeEN.con_SubViewpointTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsSubViewpointTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsSubViewpointTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strSubViewpointTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objSubViewpointType = await SubViewpointType_GetObjBySubViewpointTypeIdCache(
    strSubViewpointTypeId,
  );
  if (objSubViewpointType == null) return '';
  if (objSubViewpointType.GetFldValue(strOutFldName) == null) return '';
  return objSubViewpointType.GetFldValue(strOutFldName).toString();
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
export function SubViewpointType_SortFunDefa(
  a: clsSubViewpointTypeEN,
  b: clsSubViewpointTypeEN,
): number {
  return a.subViewpointTypeId.localeCompare(b.subViewpointTypeId);
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
export function SubViewpointType_SortFunDefa2Fld(
  a: clsSubViewpointTypeEN,
  b: clsSubViewpointTypeEN,
): number {
  if (a.subViewpointTypeName == b.subViewpointTypeName)
    return a.subViewpointTypeENName.localeCompare(b.subViewpointTypeENName);
  else return a.subViewpointTypeName.localeCompare(b.subViewpointTypeName);
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
export function SubViewpointType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSubViewpointTypeEN.con_SubViewpointTypeId:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          return a.subViewpointTypeId.localeCompare(b.subViewpointTypeId);
        };
      case clsSubViewpointTypeEN.con_SubViewpointTypeName:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          if (a.subViewpointTypeName == null) return -1;
          if (b.subViewpointTypeName == null) return 1;
          return a.subViewpointTypeName.localeCompare(b.subViewpointTypeName);
        };
      case clsSubViewpointTypeEN.con_SubViewpointTypeENName:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          if (a.subViewpointTypeENName == null) return -1;
          if (b.subViewpointTypeENName == null) return 1;
          return a.subViewpointTypeENName.localeCompare(b.subViewpointTypeENName);
        };
      case clsSubViewpointTypeEN.con_DefaTitle:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          if (a.defaTitle == null) return -1;
          if (b.defaTitle == null) return 1;
          return a.defaTitle.localeCompare(b.defaTitle);
        };
      case clsSubViewpointTypeEN.con_OrderNum:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          return a.orderNum - b.orderNum;
        };
      case clsSubViewpointTypeEN.con_UpdDate:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsSubViewpointTypeEN.con_UpdUserId:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          if (a.updUserId == null) return -1;
          if (b.updUserId == null) return 1;
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsSubViewpointTypeEN.con_Memo:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SubViewpointType]中不存在!(in ${subViewpointType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSubViewpointTypeEN.con_SubViewpointTypeId:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          return b.subViewpointTypeId.localeCompare(a.subViewpointTypeId);
        };
      case clsSubViewpointTypeEN.con_SubViewpointTypeName:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          if (b.subViewpointTypeName == null) return -1;
          if (a.subViewpointTypeName == null) return 1;
          return b.subViewpointTypeName.localeCompare(a.subViewpointTypeName);
        };
      case clsSubViewpointTypeEN.con_SubViewpointTypeENName:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          if (b.subViewpointTypeENName == null) return -1;
          if (a.subViewpointTypeENName == null) return 1;
          return b.subViewpointTypeENName.localeCompare(a.subViewpointTypeENName);
        };
      case clsSubViewpointTypeEN.con_DefaTitle:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          if (b.defaTitle == null) return -1;
          if (a.defaTitle == null) return 1;
          return b.defaTitle.localeCompare(a.defaTitle);
        };
      case clsSubViewpointTypeEN.con_OrderNum:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          return b.orderNum - a.orderNum;
        };
      case clsSubViewpointTypeEN.con_UpdDate:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsSubViewpointTypeEN.con_UpdUserId:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          if (b.updUserId == null) return -1;
          if (a.updUserId == null) return 1;
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsSubViewpointTypeEN.con_Memo:
        return (a: clsSubViewpointTypeEN, b: clsSubViewpointTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SubViewpointType]中不存在!(in ${subViewpointType_ConstructorName}.${strThisFuncName})`;
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
export async function SubViewpointType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSubViewpointTypeEN.con_SubViewpointTypeId:
      return (obj: clsSubViewpointTypeEN) => {
        return obj.subViewpointTypeId === value;
      };
    case clsSubViewpointTypeEN.con_SubViewpointTypeName:
      return (obj: clsSubViewpointTypeEN) => {
        return obj.subViewpointTypeName === value;
      };
    case clsSubViewpointTypeEN.con_SubViewpointTypeENName:
      return (obj: clsSubViewpointTypeEN) => {
        return obj.subViewpointTypeENName === value;
      };
    case clsSubViewpointTypeEN.con_DefaTitle:
      return (obj: clsSubViewpointTypeEN) => {
        return obj.defaTitle === value;
      };
    case clsSubViewpointTypeEN.con_OrderNum:
      return (obj: clsSubViewpointTypeEN) => {
        return obj.orderNum === value;
      };
    case clsSubViewpointTypeEN.con_UpdDate:
      return (obj: clsSubViewpointTypeEN) => {
        return obj.updDate === value;
      };
    case clsSubViewpointTypeEN.con_UpdUserId:
      return (obj: clsSubViewpointTypeEN) => {
        return obj.updUserId === value;
      };
    case clsSubViewpointTypeEN.con_Memo:
      return (obj: clsSubViewpointTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SubViewpointType]中不存在!(in ${subViewpointType_ConstructorName}.${strThisFuncName})`;
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
export async function SubViewpointType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsSubViewpointTypeEN.con_SubViewpointTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrSubViewpointType = await SubViewpointType_GetObjLstCache();
  if (arrSubViewpointType == null) return [];
  let arrSubViewpointTypeSel = arrSubViewpointType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrSubViewpointTypeSel.length == 0) return [];
  return arrSubViewpointTypeSel.map((x) => x.subViewpointTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SubViewpointType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
export async function SubViewpointType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
export async function SubViewpointType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSubViewpointTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

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
      const objSubViewpointType = SubViewpointType_GetObjFromJsonObj(returnObj);
      return objSubViewpointType;
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
export async function SubViewpointType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSubViewpointTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSubViewpointTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSubViewpointTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrSubViewpointTypeExObjLstCache: Array<clsSubViewpointTypeEN> = CacheHelper.Get(strKey);
    const arrSubViewpointTypeObjLstT = SubViewpointType_GetObjLstByJSONObjLst(
      arrSubViewpointTypeExObjLstCache,
    );
    return arrSubViewpointTypeObjLstT;
  }
  try {
    const arrSubViewpointTypeExObjLst = await SubViewpointType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrSubViewpointTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSubViewpointTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSubViewpointTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      subViewpointType_ConstructorName,
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
export async function SubViewpointType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSubViewpointTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSubViewpointTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSubViewpointTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSubViewpointTypeExObjLstCache: Array<clsSubViewpointTypeEN> =
      JSON.parse(strTempObjLst);
    const arrSubViewpointTypeObjLstT = SubViewpointType_GetObjLstByJSONObjLst(
      arrSubViewpointTypeExObjLstCache,
    );
    return arrSubViewpointTypeObjLstT;
  }
  try {
    const arrSubViewpointTypeExObjLst = await SubViewpointType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrSubViewpointTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSubViewpointTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSubViewpointTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      subViewpointType_ConstructorName,
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
export async function SubViewpointType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSubViewpointTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSubViewpointTypeObjLstCache: Array<clsSubViewpointTypeEN> = JSON.parse(strTempObjLst);
    return arrSubViewpointTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SubViewpointType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSubViewpointTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

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
          subViewpointType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SubViewpointType_GetObjLstByJSONObjLst(returnObjLst);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
export async function SubViewpointType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSubViewpointTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsSubViewpointTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSubViewpointTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSubViewpointTypeExObjLstCache: Array<clsSubViewpointTypeEN> =
      JSON.parse(strTempObjLst);
    const arrSubViewpointTypeObjLstT = SubViewpointType_GetObjLstByJSONObjLst(
      arrSubViewpointTypeExObjLstCache,
    );
    return arrSubViewpointTypeObjLstT;
  }
  try {
    const arrSubViewpointTypeExObjLst = await SubViewpointType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrSubViewpointTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSubViewpointTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrSubViewpointTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      subViewpointType_ConstructorName,
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
export async function SubViewpointType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSubViewpointTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSubViewpointTypeObjLstCache: Array<clsSubViewpointTypeEN> = JSON.parse(strTempObjLst);
    return arrSubViewpointTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SubViewpointType_GetObjLstCache(): Promise<Array<clsSubViewpointTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrSubViewpointTypeObjLstCache;
  switch (clsSubViewpointTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstClientCache();
      break;
    default:
      arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstClientCache();
      break;
  }
  return arrSubViewpointTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SubViewpointType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrSubViewpointTypeObjLstCache;
  switch (clsSubViewpointTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrSubViewpointTypeObjLstCache = null;
      break;
    default:
      arrSubViewpointTypeObjLstCache = null;
      break;
  }
  return arrSubViewpointTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrSubViewpointTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SubViewpointType_GetSubObjLstCache(
  objSubViewpointTypeCond: clsSubViewpointTypeEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstCache();
  let arrSubViewpointTypeSel = arrSubViewpointTypeObjLstCache;
  if (
    objSubViewpointTypeCond.sfFldComparisonOp == null ||
    objSubViewpointTypeCond.sfFldComparisonOp == ''
  )
    return arrSubViewpointTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSubViewpointTypeCond.sfFldComparisonOp,
  );
  //console.log("clsSubViewpointTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSubViewpointTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSubViewpointTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSubViewpointTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSubViewpointTypeCond),
      subViewpointType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSubViewpointTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrSubViewpointTypeId:关键字列表
 * @returns 对象列表
 **/
export async function SubViewpointType_GetObjLstBySubViewpointTypeIdLstAsync(
  arrSubViewpointTypeId: Array<string>,
): Promise<Array<clsSubViewpointTypeEN>> {
  const strThisFuncName = 'GetObjLstBySubViewpointTypeIdLstAsync';
  const strAction = 'GetObjLstBySubViewpointTypeIdLst';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSubViewpointTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          subViewpointType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SubViewpointType_GetObjLstByJSONObjLst(returnObjLst);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * @param arrstrSubViewpointTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function SubViewpointType_GetObjLstBySubViewpointTypeIdLstCache(
  arrSubViewpointTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstBySubViewpointTypeIdLstCache';
  try {
    const arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstCache();
    const arrSubViewpointTypeSel = arrSubViewpointTypeObjLstCache.filter(
      (x) => arrSubViewpointTypeIdLst.indexOf(x.subViewpointTypeId) > -1,
    );
    return arrSubViewpointTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrSubViewpointTypeIdLst.join(','),
      subViewpointType_ConstructorName,
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
export async function SubViewpointType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSubViewpointTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

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
          subViewpointType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SubViewpointType_GetObjLstByJSONObjLst(returnObjLst);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
export async function SubViewpointType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSubViewpointTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

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
          subViewpointType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SubViewpointType_GetObjLstByJSONObjLst(returnObjLst);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
export async function SubViewpointType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsSubViewpointTypeEN>();
  const arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstCache();
  if (arrSubViewpointTypeObjLstCache.length == 0) return arrSubViewpointTypeObjLstCache;
  let arrSubViewpointTypeSel = arrSubViewpointTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objSubViewpointTypeCond = new clsSubViewpointTypeEN();
  ObjectAssign(objSubViewpointTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsSubViewpointTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSubViewpointTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSubViewpointTypeSel.length == 0) return arrSubViewpointTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSubViewpointTypeSel = arrSubViewpointTypeSel.sort(
        SubViewpointType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSubViewpointTypeSel = arrSubViewpointTypeSel.sort(objPagerPara.sortFun);
    }
    arrSubViewpointTypeSel = arrSubViewpointTypeSel.slice(intStart, intEnd);
    return arrSubViewpointTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      subViewpointType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSubViewpointTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SubViewpointType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSubViewpointTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSubViewpointTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

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
          subViewpointType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SubViewpointType_GetObjLstByJSONObjLst(returnObjLst);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * @param strSubViewpointTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function SubViewpointType_DelRecordAsync(
  strSubViewpointTypeId: string,
): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strSubViewpointTypeId);

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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * @param arrSubViewpointTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SubViewpointType_DelSubViewpointTypesAsync(
  arrSubViewpointTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelSubViewpointTypesAsync';
  const strAction = 'DelSubViewpointTypes';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrSubViewpointTypeId, config);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
export async function SubViewpointType_DelSubViewpointTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelSubViewpointTypesByCondAsync';
  const strAction = 'DelSubViewpointTypesByCond';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * @param objSubViewpointTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SubViewpointType_AddNewRecordAsync(
  objSubViewpointTypeEN: clsSubViewpointTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objSubViewpointTypeEN);
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSubViewpointTypeEN, config);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * @param objSubViewpointTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SubViewpointType_AddNewRecordWithMaxIdAsync(
  objSubViewpointTypeEN: clsSubViewpointTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSubViewpointTypeEN, config);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * 把所给的关键字列表相关的记录移顶
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoTopAsync)
 * @param objSubViewpointTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SubViewpointType_GoTopAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoTopAsync';
  let strMsg = '';
  const strAction = 'GoTop';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置顶时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * 把所给的关键字列表相关的记录上移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpMoveAsync)
 * @param objSubViewpointTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SubViewpointType_UpMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'UpMoveAsync';
  let strMsg = '';
  const strAction = 'UpMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表上移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objSubViewpointTypeEN);
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * 把所给的关键字列表相关的记录下移
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DownMoveAsync)
 * @param objSubViewpointTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SubViewpointType_DownMoveAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'DownMoveAsync';
  let strMsg = '';
  const strAction = 'DownMove';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表下移时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objSubViewpointTypeEN);
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * 把所给的关键字列表相关的记录移底
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GoBottomAsync)
 * @param objSubViewpointTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SubViewpointType_GoBottomAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'GoBottomAsync';
  let strMsg = '';
  const strAction = 'GoBottom';
  if (objOrderByData.KeyIdLst.length == 0) {
    strMsg = '根据关键字列表置底时,给定的关键字值列表不能为空!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objSubViewpointTypeEN);
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * 把列表记录重序
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReOrderAsync)
 * @param objSubViewpointTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SubViewpointType_ReOrderAsync(
  objOrderByData: clsOrderByData,
): Promise<boolean> {
  const strThisFuncName = 'ReOrderAsync';
  const strAction = 'ReOrder';
  //var strJSON = JSON.stringify(objSubViewpointTypeEN);
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objOrderByData, config);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * @param objSubViewpointTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SubViewpointType_AddNewRecordWithReturnKeyAsync(
  objSubViewpointTypeEN: clsSubViewpointTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSubViewpointTypeEN, config);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * @param objSubViewpointTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SubViewpointType_UpdateRecordAsync(
  objSubViewpointTypeEN: clsSubViewpointTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSubViewpointTypeEN.sfUpdFldSetStr === undefined ||
    objSubViewpointTypeEN.sfUpdFldSetStr === null ||
    objSubViewpointTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSubViewpointTypeEN.subViewpointTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSubViewpointTypeEN, config);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * @param objSubViewpointTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SubViewpointType_UpdateWithConditionAsync(
  objSubViewpointTypeEN: clsSubViewpointTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSubViewpointTypeEN.sfUpdFldSetStr === undefined ||
    objSubViewpointTypeEN.sfUpdFldSetStr === null ||
    objSubViewpointTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSubViewpointTypeEN.subViewpointTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);
  objSubViewpointTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSubViewpointTypeEN, config);
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * @param objstrSubViewpointTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SubViewpointType_IsExistRecordCache(
  objSubViewpointTypeCond: clsSubViewpointTypeEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstCache();
  if (arrSubViewpointTypeObjLstCache == null) return false;
  let arrSubViewpointTypeSel = arrSubViewpointTypeObjLstCache;
  if (
    objSubViewpointTypeCond.sfFldComparisonOp == null ||
    objSubViewpointTypeCond.sfFldComparisonOp == ''
  )
    return arrSubViewpointTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSubViewpointTypeCond.sfFldComparisonOp,
  );
  //console.log("clsSubViewpointTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSubViewpointTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSubViewpointTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSubViewpointTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objSubViewpointTypeCond),
      subViewpointType_ConstructorName,
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
export async function SubViewpointType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * @param strSubViewpointTypeId:所给的关键字
 * @returns 对象
 */
export async function SubViewpointType_IsExistCache(strSubViewpointTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstCache();
  if (arrSubViewpointTypeObjLstCache == null) return false;
  try {
    const arrSubViewpointTypeSel = arrSubViewpointTypeObjLstCache.filter(
      (x) => x.subViewpointTypeId == strSubViewpointTypeId,
    );
    if (arrSubViewpointTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strSubViewpointTypeId,
      subViewpointType_ConstructorName,
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
 * @param strSubViewpointTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SubViewpointType_IsExistAsync(
  strSubViewpointTypeId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strSubViewpointTypeId,
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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
export async function SubViewpointType_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
 * @param objSubViewpointTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function SubViewpointType_GetRecCountByCondCache(
  objSubViewpointTypeCond: clsSubViewpointTypeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrSubViewpointTypeObjLstCache = await SubViewpointType_GetObjLstCache();
  if (arrSubViewpointTypeObjLstCache == null) return 0;
  let arrSubViewpointTypeSel = arrSubViewpointTypeObjLstCache;
  if (
    objSubViewpointTypeCond.sfFldComparisonOp == null ||
    objSubViewpointTypeCond.sfFldComparisonOp == ''
  )
    return arrSubViewpointTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSubViewpointTypeCond.sfFldComparisonOp,
  );
  //console.log("clsSubViewpointTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSubViewpointTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSubViewpointTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSubViewpointTypeSel = arrSubViewpointTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSubViewpointTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSubViewpointTypeCond),
      subViewpointType_ConstructorName,
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
export async function SubViewpointType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
export async function SubViewpointType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(subViewpointType_Controller, strAction);

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
        subViewpointType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        subViewpointType_ConstructorName,
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
export function SubViewpointType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function SubViewpointType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsSubViewpointTypeEN._CurrTabName;
  switch (clsSubViewpointTypeEN.CacheModeId) {
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
export function SubViewpointType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsSubViewpointTypeEN._CurrTabName;
    switch (clsSubViewpointTypeEN.CacheModeId) {
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
export async function SubViewpointType_BindDdl_SubViewpointTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_SubViewpointTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_SubViewpointTypeIdInDivCache");
  const arrObjLstSel = await SubViewpointType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsSubViewpointTypeEN.con_SubViewpointTypeId,
    clsSubViewpointTypeEN.con_SubViewpointTypeName,
    '子观点类型表',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SubViewpointType_CheckPropertyNew(pobjSubViewpointTypeEN: clsSubViewpointTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.subViewpointTypeId) == false &&
    GetStrLen(pobjSubViewpointTypeEN.subViewpointTypeId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[类型Id(subViewpointTypeId)]的长度不能超过8(In 子观点类型表(SubViewpointType))!值:$(pobjSubViewpointTypeEN.subViewpointTypeId)(clsSubViewpointTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.subViewpointTypeName) == false &&
    GetStrLen(pobjSubViewpointTypeEN.subViewpointTypeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[类型名称(subViewpointTypeName)]的长度不能超过50(In 子观点类型表(SubViewpointType))!值:$(pobjSubViewpointTypeEN.subViewpointTypeName)(clsSubViewpointTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.subViewpointTypeENName) == false &&
    GetStrLen(pobjSubViewpointTypeEN.subViewpointTypeENName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[类型英文名(subViewpointTypeENName)]的长度不能超过100(In 子观点类型表(SubViewpointType))!值:$(pobjSubViewpointTypeEN.subViewpointTypeENName)(clsSubViewpointTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.defaTitle) == false &&
    GetStrLen(pobjSubViewpointTypeEN.defaTitle) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[默认标题(defaTitle)]的长度不能超过20(In 子观点类型表(SubViewpointType))!值:$(pobjSubViewpointTypeEN.defaTitle)(clsSubViewpointTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.updDate) == false &&
    GetStrLen(pobjSubViewpointTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 子观点类型表(SubViewpointType))!值:$(pobjSubViewpointTypeEN.updDate)(clsSubViewpointTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.updUserId) == false &&
    GetStrLen(pobjSubViewpointTypeEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 子观点类型表(SubViewpointType))!值:$(pobjSubViewpointTypeEN.updUserId)(clsSubViewpointTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.memo) == false &&
    GetStrLen(pobjSubViewpointTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 子观点类型表(SubViewpointType))!值:$(pobjSubViewpointTypeEN.memo)(clsSubViewpointTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.subViewpointTypeId) == false &&
    undefined !== pobjSubViewpointTypeEN.subViewpointTypeId &&
    tzDataType.isString(pobjSubViewpointTypeEN.subViewpointTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类型Id(subViewpointTypeId)]的值:[$(pobjSubViewpointTypeEN.subViewpointTypeId)], 非法,应该为字符型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.subViewpointTypeName) == false &&
    undefined !== pobjSubViewpointTypeEN.subViewpointTypeName &&
    tzDataType.isString(pobjSubViewpointTypeEN.subViewpointTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类型名称(subViewpointTypeName)]的值:[$(pobjSubViewpointTypeEN.subViewpointTypeName)], 非法,应该为字符型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.subViewpointTypeENName) == false &&
    undefined !== pobjSubViewpointTypeEN.subViewpointTypeENName &&
    tzDataType.isString(pobjSubViewpointTypeEN.subViewpointTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[类型英文名(subViewpointTypeENName)]的值:[$(pobjSubViewpointTypeEN.subViewpointTypeENName)], 非法,应该为字符型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.defaTitle) == false &&
    undefined !== pobjSubViewpointTypeEN.defaTitle &&
    tzDataType.isString(pobjSubViewpointTypeEN.defaTitle) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[默认标题(defaTitle)]的值:[$(pobjSubViewpointTypeEN.defaTitle)], 非法,应该为字符型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjSubViewpointTypeEN.orderNum &&
    undefined !== pobjSubViewpointTypeEN.orderNum &&
    tzDataType.isNumber(pobjSubViewpointTypeEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[序号(orderNum)]的值:[$(pobjSubViewpointTypeEN.orderNum)], 非法,应该为数值型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.updDate) == false &&
    undefined !== pobjSubViewpointTypeEN.updDate &&
    tzDataType.isString(pobjSubViewpointTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjSubViewpointTypeEN.updDate)], 非法,应该为字符型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.updUserId) == false &&
    undefined !== pobjSubViewpointTypeEN.updUserId &&
    tzDataType.isString(pobjSubViewpointTypeEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjSubViewpointTypeEN.updUserId)], 非法,应该为字符型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.memo) == false &&
    undefined !== pobjSubViewpointTypeEN.memo &&
    tzDataType.isString(pobjSubViewpointTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjSubViewpointTypeEN.memo)], 非法,应该为字符型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SubViewpointType_CheckProperty4Update(
  pobjSubViewpointTypeEN: clsSubViewpointTypeEN,
) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.subViewpointTypeId) == false &&
    GetStrLen(pobjSubViewpointTypeEN.subViewpointTypeId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[类型Id(subViewpointTypeId)]的长度不能超过8(In 子观点类型表(SubViewpointType))!值:$(pobjSubViewpointTypeEN.subViewpointTypeId)(clsSubViewpointTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.subViewpointTypeName) == false &&
    GetStrLen(pobjSubViewpointTypeEN.subViewpointTypeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[类型名称(subViewpointTypeName)]的长度不能超过50(In 子观点类型表(SubViewpointType))!值:$(pobjSubViewpointTypeEN.subViewpointTypeName)(clsSubViewpointTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.subViewpointTypeENName) == false &&
    GetStrLen(pobjSubViewpointTypeEN.subViewpointTypeENName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[类型英文名(subViewpointTypeENName)]的长度不能超过100(In 子观点类型表(SubViewpointType))!值:$(pobjSubViewpointTypeEN.subViewpointTypeENName)(clsSubViewpointTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.defaTitle) == false &&
    GetStrLen(pobjSubViewpointTypeEN.defaTitle) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[默认标题(defaTitle)]的长度不能超过20(In 子观点类型表(SubViewpointType))!值:$(pobjSubViewpointTypeEN.defaTitle)(clsSubViewpointTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.updDate) == false &&
    GetStrLen(pobjSubViewpointTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 子观点类型表(SubViewpointType))!值:$(pobjSubViewpointTypeEN.updDate)(clsSubViewpointTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.updUserId) == false &&
    GetStrLen(pobjSubViewpointTypeEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 子观点类型表(SubViewpointType))!值:$(pobjSubViewpointTypeEN.updUserId)(clsSubViewpointTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.memo) == false &&
    GetStrLen(pobjSubViewpointTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 子观点类型表(SubViewpointType))!值:$(pobjSubViewpointTypeEN.memo)(clsSubViewpointTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.subViewpointTypeId) == false &&
    undefined !== pobjSubViewpointTypeEN.subViewpointTypeId &&
    tzDataType.isString(pobjSubViewpointTypeEN.subViewpointTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类型Id(subViewpointTypeId)]的值:[$(pobjSubViewpointTypeEN.subViewpointTypeId)], 非法,应该为字符型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.subViewpointTypeName) == false &&
    undefined !== pobjSubViewpointTypeEN.subViewpointTypeName &&
    tzDataType.isString(pobjSubViewpointTypeEN.subViewpointTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类型名称(subViewpointTypeName)]的值:[$(pobjSubViewpointTypeEN.subViewpointTypeName)], 非法,应该为字符型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.subViewpointTypeENName) == false &&
    undefined !== pobjSubViewpointTypeEN.subViewpointTypeENName &&
    tzDataType.isString(pobjSubViewpointTypeEN.subViewpointTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[类型英文名(subViewpointTypeENName)]的值:[$(pobjSubViewpointTypeEN.subViewpointTypeENName)], 非法,应该为字符型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.defaTitle) == false &&
    undefined !== pobjSubViewpointTypeEN.defaTitle &&
    tzDataType.isString(pobjSubViewpointTypeEN.defaTitle) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[默认标题(defaTitle)]的值:[$(pobjSubViewpointTypeEN.defaTitle)], 非法,应该为字符型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjSubViewpointTypeEN.orderNum &&
    undefined !== pobjSubViewpointTypeEN.orderNum &&
    tzDataType.isNumber(pobjSubViewpointTypeEN.orderNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[序号(orderNum)]的值:[$(pobjSubViewpointTypeEN.orderNum)], 非法,应该为数值型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.updDate) == false &&
    undefined !== pobjSubViewpointTypeEN.updDate &&
    tzDataType.isString(pobjSubViewpointTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjSubViewpointTypeEN.updDate)], 非法,应该为字符型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.updUserId) == false &&
    undefined !== pobjSubViewpointTypeEN.updUserId &&
    tzDataType.isString(pobjSubViewpointTypeEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjSubViewpointTypeEN.updUserId)], 非法,应该为字符型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSubViewpointTypeEN.memo) == false &&
    undefined !== pobjSubViewpointTypeEN.memo &&
    tzDataType.isString(pobjSubViewpointTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjSubViewpointTypeEN.memo)], 非法,应该为字符型(In 子观点类型表(SubViewpointType))!(clsSubViewpointTypeBL:CheckProperty4Update)',
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
export function SubViewpointType_GetJSONStrByObj(
  pobjSubViewpointTypeEN: clsSubViewpointTypeEN,
): string {
  pobjSubViewpointTypeEN.sfUpdFldSetStr = pobjSubViewpointTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSubViewpointTypeEN);
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
export function SubViewpointType_GetObjLstByJSONStr(strJSON: string): Array<clsSubViewpointTypeEN> {
  let arrSubViewpointTypeObjLst = new Array<clsSubViewpointTypeEN>();
  if (strJSON === '') {
    return arrSubViewpointTypeObjLst;
  }
  try {
    arrSubViewpointTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSubViewpointTypeObjLst;
  }
  return arrSubViewpointTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSubViewpointTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SubViewpointType_GetObjLstByJSONObjLst(
  arrSubViewpointTypeObjLstS: Array<clsSubViewpointTypeEN>,
): Array<clsSubViewpointTypeEN> {
  const arrSubViewpointTypeObjLst = new Array<clsSubViewpointTypeEN>();
  for (const objInFor of arrSubViewpointTypeObjLstS) {
    const obj1 = SubViewpointType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSubViewpointTypeObjLst.push(obj1);
  }
  return arrSubViewpointTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SubViewpointType_GetObjByJSONStr(strJSON: string): clsSubViewpointTypeEN {
  let pobjSubViewpointTypeEN = new clsSubViewpointTypeEN();
  if (strJSON === '') {
    return pobjSubViewpointTypeEN;
  }
  try {
    pobjSubViewpointTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSubViewpointTypeEN;
  }
  return pobjSubViewpointTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SubViewpointType_GetCombineCondition(
  objSubViewpointTypeCond: clsSubViewpointTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSubViewpointTypeCond.dicFldComparisonOp,
      clsSubViewpointTypeEN.con_SubViewpointTypeId,
    ) == true
  ) {
    const strComparisonOpSubViewpointTypeId: string =
      objSubViewpointTypeCond.dicFldComparisonOp[clsSubViewpointTypeEN.con_SubViewpointTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSubViewpointTypeEN.con_SubViewpointTypeId,
      objSubViewpointTypeCond.subViewpointTypeId,
      strComparisonOpSubViewpointTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSubViewpointTypeCond.dicFldComparisonOp,
      clsSubViewpointTypeEN.con_SubViewpointTypeName,
    ) == true
  ) {
    const strComparisonOpSubViewpointTypeName: string =
      objSubViewpointTypeCond.dicFldComparisonOp[clsSubViewpointTypeEN.con_SubViewpointTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSubViewpointTypeEN.con_SubViewpointTypeName,
      objSubViewpointTypeCond.subViewpointTypeName,
      strComparisonOpSubViewpointTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSubViewpointTypeCond.dicFldComparisonOp,
      clsSubViewpointTypeEN.con_SubViewpointTypeENName,
    ) == true
  ) {
    const strComparisonOpSubViewpointTypeENName: string =
      objSubViewpointTypeCond.dicFldComparisonOp[clsSubViewpointTypeEN.con_SubViewpointTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSubViewpointTypeEN.con_SubViewpointTypeENName,
      objSubViewpointTypeCond.subViewpointTypeENName,
      strComparisonOpSubViewpointTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSubViewpointTypeCond.dicFldComparisonOp,
      clsSubViewpointTypeEN.con_DefaTitle,
    ) == true
  ) {
    const strComparisonOpDefaTitle: string =
      objSubViewpointTypeCond.dicFldComparisonOp[clsSubViewpointTypeEN.con_DefaTitle];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSubViewpointTypeEN.con_DefaTitle,
      objSubViewpointTypeCond.defaTitle,
      strComparisonOpDefaTitle,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSubViewpointTypeCond.dicFldComparisonOp,
      clsSubViewpointTypeEN.con_OrderNum,
    ) == true
  ) {
    const strComparisonOpOrderNum: string =
      objSubViewpointTypeCond.dicFldComparisonOp[clsSubViewpointTypeEN.con_OrderNum];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsSubViewpointTypeEN.con_OrderNum,
      objSubViewpointTypeCond.orderNum,
      strComparisonOpOrderNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSubViewpointTypeCond.dicFldComparisonOp,
      clsSubViewpointTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objSubViewpointTypeCond.dicFldComparisonOp[clsSubViewpointTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSubViewpointTypeEN.con_UpdDate,
      objSubViewpointTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSubViewpointTypeCond.dicFldComparisonOp,
      clsSubViewpointTypeEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objSubViewpointTypeCond.dicFldComparisonOp[clsSubViewpointTypeEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSubViewpointTypeEN.con_UpdUserId,
      objSubViewpointTypeCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSubViewpointTypeCond.dicFldComparisonOp,
      clsSubViewpointTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objSubViewpointTypeCond.dicFldComparisonOp[clsSubViewpointTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSubViewpointTypeEN.con_Memo,
      objSubViewpointTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--SubViewpointType(子观点类型表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strSubViewpointTypeName: 类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function SubViewpointType_GetUniCondStr(
  objSubViewpointTypeEN: clsSubViewpointTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and SubViewpointTypeName = '{0}'",
    objSubViewpointTypeEN.subViewpointTypeName,
  );
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--SubViewpointType(子观点类型表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strSubViewpointTypeName: 类型名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function SubViewpointType_GetUniCondStr4Update(
  objSubViewpointTypeEN: clsSubViewpointTypeEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(
    " and SubViewpointTypeId <> '{0}'",
    objSubViewpointTypeEN.subViewpointTypeId,
  );
  strWhereCond += Format(
    " and SubViewpointTypeName = '{0}'",
    objSubViewpointTypeEN.subViewpointTypeName,
  );
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSubViewpointTypeENS:源对象
 * @param objSubViewpointTypeENT:目标对象
 */
export function SubViewpointType_CopyObjTo(
  objSubViewpointTypeENS: clsSubViewpointTypeEN,
  objSubViewpointTypeENT: clsSubViewpointTypeEN,
): void {
  objSubViewpointTypeENT.subViewpointTypeId = objSubViewpointTypeENS.subViewpointTypeId; //类型Id
  objSubViewpointTypeENT.subViewpointTypeName = objSubViewpointTypeENS.subViewpointTypeName; //类型名称
  objSubViewpointTypeENT.subViewpointTypeENName = objSubViewpointTypeENS.subViewpointTypeENName; //类型英文名
  objSubViewpointTypeENT.defaTitle = objSubViewpointTypeENS.defaTitle; //默认标题
  objSubViewpointTypeENT.orderNum = objSubViewpointTypeENS.orderNum; //序号
  objSubViewpointTypeENT.updDate = objSubViewpointTypeENS.updDate; //修改日期
  objSubViewpointTypeENT.updUserId = objSubViewpointTypeENS.updUserId; //修改用户Id
  objSubViewpointTypeENT.memo = objSubViewpointTypeENS.memo; //备注
  objSubViewpointTypeENT.sfUpdFldSetStr = objSubViewpointTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSubViewpointTypeENS:源对象
 * @param objSubViewpointTypeENT:目标对象
 */
export function SubViewpointType_GetObjFromJsonObj(
  objSubViewpointTypeENS: clsSubViewpointTypeEN,
): clsSubViewpointTypeEN {
  const objSubViewpointTypeENT: clsSubViewpointTypeEN = new clsSubViewpointTypeEN();
  ObjectAssign(objSubViewpointTypeENT, objSubViewpointTypeENS);
  return objSubViewpointTypeENT;
}
