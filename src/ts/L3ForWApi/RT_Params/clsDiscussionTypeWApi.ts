/**
 * 类名:clsDiscussionTypeWApi
 * 表名:DiscussionType(01120589)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:18
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
 * 讨论类型表(DiscussionType)
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
import { clsDiscussionTypeEN } from '@/ts/L0Entity/RT_Params/clsDiscussionTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const discussionType_Controller = 'DiscussionTypeApi';
export const discussionType_ConstructorName = 'discussionType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strDiscussionTypeId:关键字
 * @returns 对象
 **/
export async function DiscussionType_GetObjByDiscussionTypeIdAsync(
  strDiscussionTypeId: string,
): Promise<clsDiscussionTypeEN | null> {
  const strThisFuncName = 'GetObjByDiscussionTypeIdAsync';

  if (IsNullOrEmpty(strDiscussionTypeId) == true) {
    const strMsg = Format(
      '参数:[strDiscussionTypeId]不能为空!(In clsDiscussionTypeWApi.GetObjByDiscussionTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDiscussionTypeId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDiscussionTypeId]的长度:[{0}]不正确!(clsDiscussionTypeWApi.GetObjByDiscussionTypeIdAsync)',
      strDiscussionTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByDiscussionTypeId';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDiscussionTypeId,
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
      const objDiscussionType = DiscussionType_GetObjFromJsonObj(returnObj);
      return objDiscussionType;
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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
 * @param strDiscussionTypeId:所给的关键字
 * @returns 对象
 */
export async function DiscussionType_GetObjByDiscussionTypeIdCache(
  strDiscussionTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByDiscussionTypeIdCache';

  if (IsNullOrEmpty(strDiscussionTypeId) == true) {
    const strMsg = Format(
      '参数:[strDiscussionTypeId]不能为空!(In clsDiscussionTypeWApi.GetObjByDiscussionTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDiscussionTypeId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDiscussionTypeId]的长度:[{0}]不正确!(clsDiscussionTypeWApi.GetObjByDiscussionTypeIdCache)',
      strDiscussionTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstCache();
  try {
    const arrDiscussionTypeSel = arrDiscussionTypeObjLstCache.filter(
      (x) => x.discussionTypeId == strDiscussionTypeId,
    );
    let objDiscussionType: clsDiscussionTypeEN;
    if (arrDiscussionTypeSel.length > 0) {
      objDiscussionType = arrDiscussionTypeSel[0];
      return objDiscussionType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objDiscussionTypeConst = await DiscussionType_GetObjByDiscussionTypeIdAsync(
          strDiscussionTypeId,
        );
        if (objDiscussionTypeConst != null) {
          DiscussionType_ReFreshThisCache();
          return objDiscussionTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDiscussionTypeId,
      discussionType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strDiscussionTypeId:所给的关键字
 * @returns 对象
 */
export async function DiscussionType_GetObjByDiscussionTypeIdlocalStorage(
  strDiscussionTypeId: string,
) {
  const strThisFuncName = 'GetObjByDiscussionTypeIdlocalStorage';

  if (IsNullOrEmpty(strDiscussionTypeId) == true) {
    const strMsg = Format(
      '参数:[strDiscussionTypeId]不能为空!(In clsDiscussionTypeWApi.GetObjByDiscussionTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDiscussionTypeId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDiscussionTypeId]的长度:[{0}]不正确!(clsDiscussionTypeWApi.GetObjByDiscussionTypeIdlocalStorage)',
      strDiscussionTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsDiscussionTypeEN._CurrTabName, strDiscussionTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objDiscussionTypeCache: clsDiscussionTypeEN = JSON.parse(strTempObj);
    return objDiscussionTypeCache;
  }
  try {
    const objDiscussionType = await DiscussionType_GetObjByDiscussionTypeIdAsync(
      strDiscussionTypeId,
    );
    if (objDiscussionType != null) {
      localStorage.setItem(strKey, JSON.stringify(objDiscussionType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objDiscussionType;
    }
    return objDiscussionType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strDiscussionTypeId,
      discussionType_ConstructorName,
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
 * @param objDiscussionType:所给的对象
 * @returns 对象
 */
export async function DiscussionType_UpdateObjInLstCache(objDiscussionType: clsDiscussionTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstCache();
    const obj = arrDiscussionTypeObjLstCache.find(
      (x) => x.discussionTypeId == objDiscussionType.discussionTypeId,
    );
    if (obj != null) {
      objDiscussionType.discussionTypeId = obj.discussionTypeId;
      ObjectAssign(obj, objDiscussionType);
    } else {
      arrDiscussionTypeObjLstCache.push(objDiscussionType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      discussionType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strDiscussionTypeId:所给的关键字
 * @returns 对象
 */
export async function DiscussionType_GetNameByDiscussionTypeIdCache(strDiscussionTypeId: string) {
  if (IsNullOrEmpty(strDiscussionTypeId) == true) {
    const strMsg = Format(
      '参数:[strDiscussionTypeId]不能为空!(In clsDiscussionTypeWApi.GetNameByDiscussionTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strDiscussionTypeId.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strDiscussionTypeId]的长度:[{0}]不正确!(clsDiscussionTypeWApi.GetNameByDiscussionTypeIdCache)',
      strDiscussionTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstCache();
  if (arrDiscussionTypeObjLstCache == null) return '';
  try {
    const arrDiscussionTypeSel = arrDiscussionTypeObjLstCache.filter(
      (x) => x.discussionTypeId == strDiscussionTypeId,
    );
    let objDiscussionType: clsDiscussionTypeEN;
    if (arrDiscussionTypeSel.length > 0) {
      objDiscussionType = arrDiscussionTypeSel[0];
      return objDiscussionType.discussionTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strDiscussionTypeId,
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
export async function DiscussionType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsDiscussionTypeEN.con_DiscussionTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsDiscussionTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsDiscussionTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strDiscussionTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objDiscussionType = await DiscussionType_GetObjByDiscussionTypeIdCache(strDiscussionTypeId);
  if (objDiscussionType == null) return '';
  if (objDiscussionType.GetFldValue(strOutFldName) == null) return '';
  return objDiscussionType.GetFldValue(strOutFldName).toString();
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
export function DiscussionType_SortFunDefa(a: clsDiscussionTypeEN, b: clsDiscussionTypeEN): number {
  return a.discussionTypeId.localeCompare(b.discussionTypeId);
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
export function DiscussionType_SortFunDefa2Fld(
  a: clsDiscussionTypeEN,
  b: clsDiscussionTypeEN,
): number {
  if (a.discussionTypeName == b.discussionTypeName) return a.updDate.localeCompare(b.updDate);
  else return a.discussionTypeName.localeCompare(b.discussionTypeName);
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
export function DiscussionType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsDiscussionTypeEN.con_DiscussionTypeId:
        return (a: clsDiscussionTypeEN, b: clsDiscussionTypeEN) => {
          return a.discussionTypeId.localeCompare(b.discussionTypeId);
        };
      case clsDiscussionTypeEN.con_DiscussionTypeName:
        return (a: clsDiscussionTypeEN, b: clsDiscussionTypeEN) => {
          if (a.discussionTypeName == null) return -1;
          if (b.discussionTypeName == null) return 1;
          return a.discussionTypeName.localeCompare(b.discussionTypeName);
        };
      case clsDiscussionTypeEN.con_UpdDate:
        return (a: clsDiscussionTypeEN, b: clsDiscussionTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsDiscussionTypeEN.con_UpdUser:
        return (a: clsDiscussionTypeEN, b: clsDiscussionTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsDiscussionTypeEN.con_Memo:
        return (a: clsDiscussionTypeEN, b: clsDiscussionTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DiscussionType]中不存在!(in ${discussionType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsDiscussionTypeEN.con_DiscussionTypeId:
        return (a: clsDiscussionTypeEN, b: clsDiscussionTypeEN) => {
          return b.discussionTypeId.localeCompare(a.discussionTypeId);
        };
      case clsDiscussionTypeEN.con_DiscussionTypeName:
        return (a: clsDiscussionTypeEN, b: clsDiscussionTypeEN) => {
          if (b.discussionTypeName == null) return -1;
          if (a.discussionTypeName == null) return 1;
          return b.discussionTypeName.localeCompare(a.discussionTypeName);
        };
      case clsDiscussionTypeEN.con_UpdDate:
        return (a: clsDiscussionTypeEN, b: clsDiscussionTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsDiscussionTypeEN.con_UpdUser:
        return (a: clsDiscussionTypeEN, b: clsDiscussionTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsDiscussionTypeEN.con_Memo:
        return (a: clsDiscussionTypeEN, b: clsDiscussionTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[DiscussionType]中不存在!(in ${discussionType_ConstructorName}.${strThisFuncName})`;
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
export async function DiscussionType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsDiscussionTypeEN.con_DiscussionTypeId:
      return (obj: clsDiscussionTypeEN) => {
        return obj.discussionTypeId === value;
      };
    case clsDiscussionTypeEN.con_DiscussionTypeName:
      return (obj: clsDiscussionTypeEN) => {
        return obj.discussionTypeName === value;
      };
    case clsDiscussionTypeEN.con_UpdDate:
      return (obj: clsDiscussionTypeEN) => {
        return obj.updDate === value;
      };
    case clsDiscussionTypeEN.con_UpdUser:
      return (obj: clsDiscussionTypeEN) => {
        return obj.updUser === value;
      };
    case clsDiscussionTypeEN.con_Memo:
      return (obj: clsDiscussionTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[DiscussionType]中不存在!(in ${discussionType_ConstructorName}.${strThisFuncName})`;
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
export async function DiscussionType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsDiscussionTypeEN.con_DiscussionTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrDiscussionType = await DiscussionType_GetObjLstCache();
  if (arrDiscussionType == null) return [];
  let arrDiscussionTypeSel = arrDiscussionType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrDiscussionTypeSel.length == 0) return [];
  return arrDiscussionTypeSel.map((x) => x.discussionTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function DiscussionType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
export async function DiscussionType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
export async function DiscussionType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsDiscussionTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

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
      const objDiscussionType = DiscussionType_GetObjFromJsonObj(returnObj);
      return objDiscussionType;
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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
export async function DiscussionType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDiscussionTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsDiscussionTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDiscussionTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrDiscussionTypeExObjLstCache: Array<clsDiscussionTypeEN> = CacheHelper.Get(strKey);
    const arrDiscussionTypeObjLstT = DiscussionType_GetObjLstByJSONObjLst(
      arrDiscussionTypeExObjLstCache,
    );
    return arrDiscussionTypeObjLstT;
  }
  try {
    const arrDiscussionTypeExObjLst = await DiscussionType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrDiscussionTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDiscussionTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrDiscussionTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      discussionType_ConstructorName,
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
export async function DiscussionType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDiscussionTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsDiscussionTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDiscussionTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDiscussionTypeExObjLstCache: Array<clsDiscussionTypeEN> = JSON.parse(strTempObjLst);
    const arrDiscussionTypeObjLstT = DiscussionType_GetObjLstByJSONObjLst(
      arrDiscussionTypeExObjLstCache,
    );
    return arrDiscussionTypeObjLstT;
  }
  try {
    const arrDiscussionTypeExObjLst = await DiscussionType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrDiscussionTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDiscussionTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrDiscussionTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      discussionType_ConstructorName,
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
export async function DiscussionType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsDiscussionTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrDiscussionTypeObjLstCache: Array<clsDiscussionTypeEN> = JSON.parse(strTempObjLst);
    return arrDiscussionTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function DiscussionType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsDiscussionTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

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
          discussionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DiscussionType_GetObjLstByJSONObjLst(returnObjLst);
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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
export async function DiscussionType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsDiscussionTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsDiscussionTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsDiscussionTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDiscussionTypeExObjLstCache: Array<clsDiscussionTypeEN> = JSON.parse(strTempObjLst);
    const arrDiscussionTypeObjLstT = DiscussionType_GetObjLstByJSONObjLst(
      arrDiscussionTypeExObjLstCache,
    );
    return arrDiscussionTypeObjLstT;
  }
  try {
    const arrDiscussionTypeExObjLst = await DiscussionType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrDiscussionTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrDiscussionTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrDiscussionTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      discussionType_ConstructorName,
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
export async function DiscussionType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsDiscussionTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrDiscussionTypeObjLstCache: Array<clsDiscussionTypeEN> = JSON.parse(strTempObjLst);
    return arrDiscussionTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DiscussionType_GetObjLstCache(): Promise<Array<clsDiscussionTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrDiscussionTypeObjLstCache;
  switch (clsDiscussionTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstClientCache();
      break;
    default:
      arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstClientCache();
      break;
  }
  return arrDiscussionTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function DiscussionType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrDiscussionTypeObjLstCache;
  switch (clsDiscussionTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrDiscussionTypeObjLstCache = null;
      break;
    default:
      arrDiscussionTypeObjLstCache = null;
      break;
  }
  return arrDiscussionTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrDiscussionTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DiscussionType_GetSubObjLstCache(objDiscussionTypeCond: clsDiscussionTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstCache();
  let arrDiscussionTypeSel = arrDiscussionTypeObjLstCache;
  if (
    objDiscussionTypeCond.sfFldComparisonOp == null ||
    objDiscussionTypeCond.sfFldComparisonOp == ''
  )
    return arrDiscussionTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDiscussionTypeCond.sfFldComparisonOp,
  );
  //console.log("clsDiscussionTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDiscussionTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDiscussionTypeSel = arrDiscussionTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDiscussionTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDiscussionTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDiscussionTypeCond),
      discussionType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDiscussionTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrDiscussionTypeId:关键字列表
 * @returns 对象列表
 **/
export async function DiscussionType_GetObjLstByDiscussionTypeIdLstAsync(
  arrDiscussionTypeId: Array<string>,
): Promise<Array<clsDiscussionTypeEN>> {
  const strThisFuncName = 'GetObjLstByDiscussionTypeIdLstAsync';
  const strAction = 'GetObjLstByDiscussionTypeIdLst';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDiscussionTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          discussionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DiscussionType_GetObjLstByJSONObjLst(returnObjLst);
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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
 * @param arrstrDiscussionTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function DiscussionType_GetObjLstByDiscussionTypeIdLstCache(
  arrDiscussionTypeIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByDiscussionTypeIdLstCache';
  try {
    const arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstCache();
    const arrDiscussionTypeSel = arrDiscussionTypeObjLstCache.filter(
      (x) => arrDiscussionTypeIdLst.indexOf(x.discussionTypeId) > -1,
    );
    return arrDiscussionTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrDiscussionTypeIdLst.join(','),
      discussionType_ConstructorName,
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
export async function DiscussionType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsDiscussionTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

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
          discussionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DiscussionType_GetObjLstByJSONObjLst(returnObjLst);
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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
export async function DiscussionType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsDiscussionTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

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
          discussionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DiscussionType_GetObjLstByJSONObjLst(returnObjLst);
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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
export async function DiscussionType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsDiscussionTypeEN>();
  const arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstCache();
  if (arrDiscussionTypeObjLstCache.length == 0) return arrDiscussionTypeObjLstCache;
  let arrDiscussionTypeSel = arrDiscussionTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objDiscussionTypeCond = new clsDiscussionTypeEN();
  ObjectAssign(objDiscussionTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsDiscussionTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDiscussionTypeSel = arrDiscussionTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDiscussionTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDiscussionTypeSel.length == 0) return arrDiscussionTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrDiscussionTypeSel = arrDiscussionTypeSel.sort(
        DiscussionType_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrDiscussionTypeSel = arrDiscussionTypeSel.sort(objPagerPara.sortFun);
    }
    arrDiscussionTypeSel = arrDiscussionTypeSel.slice(intStart, intEnd);
    return arrDiscussionTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      discussionType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsDiscussionTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function DiscussionType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsDiscussionTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsDiscussionTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

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
          discussionType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = DiscussionType_GetObjLstByJSONObjLst(returnObjLst);
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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
 * @param strDiscussionTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function DiscussionType_DelRecordAsync(strDiscussionTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(discussionType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strDiscussionTypeId);

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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
 * @param arrDiscussionTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function DiscussionType_DelDiscussionTypesAsync(
  arrDiscussionTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelDiscussionTypesAsync';
  const strAction = 'DelDiscussionTypes';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrDiscussionTypeId, config);
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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
export async function DiscussionType_DelDiscussionTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelDiscussionTypesByCondAsync';
  const strAction = 'DelDiscussionTypesByCond';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
 * @param objDiscussionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DiscussionType_AddNewRecordAsync(
  objDiscussionTypeEN: clsDiscussionTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (
    objDiscussionTypeEN.discussionTypeId === null ||
    objDiscussionTypeEN.discussionTypeId === ''
  ) {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objDiscussionTypeEN);
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDiscussionTypeEN, config);
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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
 * @param objDiscussionTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function DiscussionType_AddNewRecordWithMaxIdAsync(
  objDiscussionTypeEN: clsDiscussionTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDiscussionTypeEN, config);
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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
 * @param objDiscussionTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function DiscussionType_AddNewRecordWithReturnKeyAsync(
  objDiscussionTypeEN: clsDiscussionTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDiscussionTypeEN, config);
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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
 * @param objDiscussionTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function DiscussionType_UpdateRecordAsync(
  objDiscussionTypeEN: clsDiscussionTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objDiscussionTypeEN.sfUpdFldSetStr === undefined ||
    objDiscussionTypeEN.sfUpdFldSetStr === null ||
    objDiscussionTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDiscussionTypeEN.discussionTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDiscussionTypeEN, config);
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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
 * @param objDiscussionTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function DiscussionType_UpdateWithConditionAsync(
  objDiscussionTypeEN: clsDiscussionTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objDiscussionTypeEN.sfUpdFldSetStr === undefined ||
    objDiscussionTypeEN.sfUpdFldSetStr === null ||
    objDiscussionTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objDiscussionTypeEN.discussionTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);
  objDiscussionTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objDiscussionTypeEN, config);
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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
 * @param objstrDiscussionTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function DiscussionType_IsExistRecordCache(
  objDiscussionTypeCond: clsDiscussionTypeEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstCache();
  if (arrDiscussionTypeObjLstCache == null) return false;
  let arrDiscussionTypeSel = arrDiscussionTypeObjLstCache;
  if (
    objDiscussionTypeCond.sfFldComparisonOp == null ||
    objDiscussionTypeCond.sfFldComparisonOp == ''
  )
    return arrDiscussionTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDiscussionTypeCond.sfFldComparisonOp,
  );
  //console.log("clsDiscussionTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDiscussionTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDiscussionTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrDiscussionTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objDiscussionTypeCond),
      discussionType_ConstructorName,
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
export async function DiscussionType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
 * @param strDiscussionTypeId:所给的关键字
 * @returns 对象
 */
export async function DiscussionType_IsExistCache(strDiscussionTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstCache();
  if (arrDiscussionTypeObjLstCache == null) return false;
  try {
    const arrDiscussionTypeSel = arrDiscussionTypeObjLstCache.filter(
      (x) => x.discussionTypeId == strDiscussionTypeId,
    );
    if (arrDiscussionTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strDiscussionTypeId,
      discussionType_ConstructorName,
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
 * @param strDiscussionTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function DiscussionType_IsExistAsync(strDiscussionTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strDiscussionTypeId,
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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
export async function DiscussionType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
 * @param objDiscussionTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function DiscussionType_GetRecCountByCondCache(
  objDiscussionTypeCond: clsDiscussionTypeEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrDiscussionTypeObjLstCache = await DiscussionType_GetObjLstCache();
  if (arrDiscussionTypeObjLstCache == null) return 0;
  let arrDiscussionTypeSel = arrDiscussionTypeObjLstCache;
  if (
    objDiscussionTypeCond.sfFldComparisonOp == null ||
    objDiscussionTypeCond.sfFldComparisonOp == ''
  )
    return arrDiscussionTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objDiscussionTypeCond.sfFldComparisonOp,
  );
  //console.log("clsDiscussionTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objDiscussionTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrDiscussionTypeSel = arrDiscussionTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objDiscussionTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrDiscussionTypeSel = arrDiscussionTypeSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrDiscussionTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objDiscussionTypeCond),
      discussionType_ConstructorName,
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
export async function DiscussionType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(discussionType_Controller, strAction);

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
        discussionType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        discussionType_ConstructorName,
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
export function DiscussionType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function DiscussionType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsDiscussionTypeEN._CurrTabName;
  switch (clsDiscussionTypeEN.CacheModeId) {
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
export function DiscussionType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsDiscussionTypeEN._CurrTabName;
    switch (clsDiscussionTypeEN.CacheModeId) {
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
export async function DiscussionType_BindDdl_DiscussionTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_DiscussionTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_DiscussionTypeIdInDivCache");
  const arrObjLstSel = await DiscussionType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsDiscussionTypeEN.con_DiscussionTypeId,
    clsDiscussionTypeEN.con_DiscussionTypeName,
    '讨论类型表',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DiscussionType_CheckPropertyNew(pobjDiscussionTypeEN: clsDiscussionTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.discussionTypeId) == false &&
    GetStrLen(pobjDiscussionTypeEN.discussionTypeId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[讨论类型Id(discussionTypeId)]的长度不能超过8(In 讨论类型表(DiscussionType))!值:$(pobjDiscussionTypeEN.discussionTypeId)(clsDiscussionTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.discussionTypeName) == false &&
    GetStrLen(pobjDiscussionTypeEN.discussionTypeName) > 200
  ) {
    throw new Error(
      '(errid:Watl000413)字段[讨论类型名称(discussionTypeName)]的长度不能超过200(In 讨论类型表(DiscussionType))!值:$(pobjDiscussionTypeEN.discussionTypeName)(clsDiscussionTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.updDate) == false &&
    GetStrLen(pobjDiscussionTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 讨论类型表(DiscussionType))!值:$(pobjDiscussionTypeEN.updDate)(clsDiscussionTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.updUser) == false &&
    GetStrLen(pobjDiscussionTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 讨论类型表(DiscussionType))!值:$(pobjDiscussionTypeEN.updUser)(clsDiscussionTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.memo) == false &&
    GetStrLen(pobjDiscussionTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 讨论类型表(DiscussionType))!值:$(pobjDiscussionTypeEN.memo)(clsDiscussionTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.discussionTypeId) == false &&
    undefined !== pobjDiscussionTypeEN.discussionTypeId &&
    tzDataType.isString(pobjDiscussionTypeEN.discussionTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[讨论类型Id(discussionTypeId)]的值:[$(pobjDiscussionTypeEN.discussionTypeId)], 非法,应该为字符型(In 讨论类型表(DiscussionType))!(clsDiscussionTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.discussionTypeName) == false &&
    undefined !== pobjDiscussionTypeEN.discussionTypeName &&
    tzDataType.isString(pobjDiscussionTypeEN.discussionTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[讨论类型名称(discussionTypeName)]的值:[$(pobjDiscussionTypeEN.discussionTypeName)], 非法,应该为字符型(In 讨论类型表(DiscussionType))!(clsDiscussionTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.updDate) == false &&
    undefined !== pobjDiscussionTypeEN.updDate &&
    tzDataType.isString(pobjDiscussionTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjDiscussionTypeEN.updDate)], 非法,应该为字符型(In 讨论类型表(DiscussionType))!(clsDiscussionTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.updUser) == false &&
    undefined !== pobjDiscussionTypeEN.updUser &&
    tzDataType.isString(pobjDiscussionTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjDiscussionTypeEN.updUser)], 非法,应该为字符型(In 讨论类型表(DiscussionType))!(clsDiscussionTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.memo) == false &&
    undefined !== pobjDiscussionTypeEN.memo &&
    tzDataType.isString(pobjDiscussionTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjDiscussionTypeEN.memo)], 非法,应该为字符型(In 讨论类型表(DiscussionType))!(clsDiscussionTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function DiscussionType_CheckProperty4Update(pobjDiscussionTypeEN: clsDiscussionTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.discussionTypeId) == false &&
    GetStrLen(pobjDiscussionTypeEN.discussionTypeId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[讨论类型Id(discussionTypeId)]的长度不能超过8(In 讨论类型表(DiscussionType))!值:$(pobjDiscussionTypeEN.discussionTypeId)(clsDiscussionTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.discussionTypeName) == false &&
    GetStrLen(pobjDiscussionTypeEN.discussionTypeName) > 200
  ) {
    throw new Error(
      '(errid:Watl000416)字段[讨论类型名称(discussionTypeName)]的长度不能超过200(In 讨论类型表(DiscussionType))!值:$(pobjDiscussionTypeEN.discussionTypeName)(clsDiscussionTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.updDate) == false &&
    GetStrLen(pobjDiscussionTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 讨论类型表(DiscussionType))!值:$(pobjDiscussionTypeEN.updDate)(clsDiscussionTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.updUser) == false &&
    GetStrLen(pobjDiscussionTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 讨论类型表(DiscussionType))!值:$(pobjDiscussionTypeEN.updUser)(clsDiscussionTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.memo) == false &&
    GetStrLen(pobjDiscussionTypeEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 讨论类型表(DiscussionType))!值:$(pobjDiscussionTypeEN.memo)(clsDiscussionTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.discussionTypeId) == false &&
    undefined !== pobjDiscussionTypeEN.discussionTypeId &&
    tzDataType.isString(pobjDiscussionTypeEN.discussionTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[讨论类型Id(discussionTypeId)]的值:[$(pobjDiscussionTypeEN.discussionTypeId)], 非法,应该为字符型(In 讨论类型表(DiscussionType))!(clsDiscussionTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.discussionTypeName) == false &&
    undefined !== pobjDiscussionTypeEN.discussionTypeName &&
    tzDataType.isString(pobjDiscussionTypeEN.discussionTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[讨论类型名称(discussionTypeName)]的值:[$(pobjDiscussionTypeEN.discussionTypeName)], 非法,应该为字符型(In 讨论类型表(DiscussionType))!(clsDiscussionTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.updDate) == false &&
    undefined !== pobjDiscussionTypeEN.updDate &&
    tzDataType.isString(pobjDiscussionTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjDiscussionTypeEN.updDate)], 非法,应该为字符型(In 讨论类型表(DiscussionType))!(clsDiscussionTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.updUser) == false &&
    undefined !== pobjDiscussionTypeEN.updUser &&
    tzDataType.isString(pobjDiscussionTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjDiscussionTypeEN.updUser)], 非法,应该为字符型(In 讨论类型表(DiscussionType))!(clsDiscussionTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.memo) == false &&
    undefined !== pobjDiscussionTypeEN.memo &&
    tzDataType.isString(pobjDiscussionTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjDiscussionTypeEN.memo)], 非法,应该为字符型(In 讨论类型表(DiscussionType))!(clsDiscussionTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjDiscussionTypeEN.discussionTypeId) === true ||
    pobjDiscussionTypeEN.discussionTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[讨论类型Id]不能为空(In 讨论类型表)!(clsDiscussionTypeBL:CheckProperty4Update)',
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
export function DiscussionType_GetJSONStrByObj(pobjDiscussionTypeEN: clsDiscussionTypeEN): string {
  pobjDiscussionTypeEN.sfUpdFldSetStr = pobjDiscussionTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjDiscussionTypeEN);
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
export function DiscussionType_GetObjLstByJSONStr(strJSON: string): Array<clsDiscussionTypeEN> {
  let arrDiscussionTypeObjLst = new Array<clsDiscussionTypeEN>();
  if (strJSON === '') {
    return arrDiscussionTypeObjLst;
  }
  try {
    arrDiscussionTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrDiscussionTypeObjLst;
  }
  return arrDiscussionTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrDiscussionTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function DiscussionType_GetObjLstByJSONObjLst(
  arrDiscussionTypeObjLstS: Array<clsDiscussionTypeEN>,
): Array<clsDiscussionTypeEN> {
  const arrDiscussionTypeObjLst = new Array<clsDiscussionTypeEN>();
  for (const objInFor of arrDiscussionTypeObjLstS) {
    const obj1 = DiscussionType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrDiscussionTypeObjLst.push(obj1);
  }
  return arrDiscussionTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function DiscussionType_GetObjByJSONStr(strJSON: string): clsDiscussionTypeEN {
  let pobjDiscussionTypeEN = new clsDiscussionTypeEN();
  if (strJSON === '') {
    return pobjDiscussionTypeEN;
  }
  try {
    pobjDiscussionTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjDiscussionTypeEN;
  }
  return pobjDiscussionTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function DiscussionType_GetCombineCondition(
  objDiscussionTypeCond: clsDiscussionTypeEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTypeCond.dicFldComparisonOp,
      clsDiscussionTypeEN.con_DiscussionTypeId,
    ) == true
  ) {
    const strComparisonOpDiscussionTypeId: string =
      objDiscussionTypeCond.dicFldComparisonOp[clsDiscussionTypeEN.con_DiscussionTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDiscussionTypeEN.con_DiscussionTypeId,
      objDiscussionTypeCond.discussionTypeId,
      strComparisonOpDiscussionTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTypeCond.dicFldComparisonOp,
      clsDiscussionTypeEN.con_DiscussionTypeName,
    ) == true
  ) {
    const strComparisonOpDiscussionTypeName: string =
      objDiscussionTypeCond.dicFldComparisonOp[clsDiscussionTypeEN.con_DiscussionTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDiscussionTypeEN.con_DiscussionTypeName,
      objDiscussionTypeCond.discussionTypeName,
      strComparisonOpDiscussionTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTypeCond.dicFldComparisonOp,
      clsDiscussionTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objDiscussionTypeCond.dicFldComparisonOp[clsDiscussionTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDiscussionTypeEN.con_UpdDate,
      objDiscussionTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTypeCond.dicFldComparisonOp,
      clsDiscussionTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objDiscussionTypeCond.dicFldComparisonOp[clsDiscussionTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDiscussionTypeEN.con_UpdUser,
      objDiscussionTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objDiscussionTypeCond.dicFldComparisonOp,
      clsDiscussionTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objDiscussionTypeCond.dicFldComparisonOp[clsDiscussionTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsDiscussionTypeEN.con_Memo,
      objDiscussionTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objDiscussionTypeENS:源对象
 * @param objDiscussionTypeENT:目标对象
 */
export function DiscussionType_CopyObjTo(
  objDiscussionTypeENS: clsDiscussionTypeEN,
  objDiscussionTypeENT: clsDiscussionTypeEN,
): void {
  objDiscussionTypeENT.discussionTypeId = objDiscussionTypeENS.discussionTypeId; //讨论类型Id
  objDiscussionTypeENT.discussionTypeName = objDiscussionTypeENS.discussionTypeName; //讨论类型名称
  objDiscussionTypeENT.updDate = objDiscussionTypeENS.updDate; //修改日期
  objDiscussionTypeENT.updUser = objDiscussionTypeENS.updUser; //修改人
  objDiscussionTypeENT.memo = objDiscussionTypeENS.memo; //备注
  objDiscussionTypeENT.sfUpdFldSetStr = objDiscussionTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objDiscussionTypeENS:源对象
 * @param objDiscussionTypeENT:目标对象
 */
export function DiscussionType_GetObjFromJsonObj(
  objDiscussionTypeENS: clsDiscussionTypeEN,
): clsDiscussionTypeEN {
  const objDiscussionTypeENT: clsDiscussionTypeEN = new clsDiscussionTypeEN();
  ObjectAssign(objDiscussionTypeENT, objDiscussionTypeENS);
  return objDiscussionTypeENT;
}
