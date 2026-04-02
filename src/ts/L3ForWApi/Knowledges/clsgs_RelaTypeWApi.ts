/**
 * 类名:clsgs_RelaTypeWApi
 * 表名:gs_RelaType(01120871)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:45:31
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 知识点关系类型表(gs_RelaType)
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
import { clsgs_RelaTypeEN } from '@/ts/L0Entity/Knowledges/clsgs_RelaTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gs_RelaType_Controller = 'gs_RelaTypeApi';
export const gs_RelaType_ConstructorName = 'gs_RelaType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strRelaTypeId:关键字
 * @returns 对象
 **/
export async function gs_RelaType_GetObjByRelaTypeIdAsync(
  strRelaTypeId: string,
): Promise<clsgs_RelaTypeEN | null> {
  const strThisFuncName = 'GetObjByRelaTypeIdAsync';

  if (IsNullOrEmpty(strRelaTypeId) == true) {
    const strMsg = Format(
      '参数:[strRelaTypeId]不能为空!(In clsgs_RelaTypeWApi.GetObjByRelaTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRelaTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strRelaTypeId]的长度:[{0}]不正确!(clsgs_RelaTypeWApi.GetObjByRelaTypeIdAsync)',
      strRelaTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByRelaTypeId';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRelaTypeId,
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
      const objgs_RelaType = gs_RelaType_GetObjFromJsonObj(returnObj);
      return objgs_RelaType;
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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
 * @param strRelaTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_RelaType_GetObjByRelaTypeIdCache(
  strRelaTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByRelaTypeIdCache';

  if (IsNullOrEmpty(strRelaTypeId) == true) {
    const strMsg = Format(
      '参数:[strRelaTypeId]不能为空!(In clsgs_RelaTypeWApi.GetObjByRelaTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRelaTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strRelaTypeId]的长度:[{0}]不正确!(clsgs_RelaTypeWApi.GetObjByRelaTypeIdCache)',
      strRelaTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstCache();
  try {
    const arrgs_RelaTypeSel = arrgs_RelaTypeObjLstCache.filter(
      (x) => x.relaTypeId == strRelaTypeId,
    );
    let objgs_RelaType: clsgs_RelaTypeEN;
    if (arrgs_RelaTypeSel.length > 0) {
      objgs_RelaType = arrgs_RelaTypeSel[0];
      return objgs_RelaType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objgs_RelaTypeConst = await gs_RelaType_GetObjByRelaTypeIdAsync(strRelaTypeId);
        if (objgs_RelaTypeConst != null) {
          gs_RelaType_ReFreshThisCache();
          return objgs_RelaTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRelaTypeId,
      gs_RelaType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strRelaTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_RelaType_GetObjByRelaTypeIdlocalStorage(strRelaTypeId: string) {
  const strThisFuncName = 'GetObjByRelaTypeIdlocalStorage';

  if (IsNullOrEmpty(strRelaTypeId) == true) {
    const strMsg = Format(
      '参数:[strRelaTypeId]不能为空!(In clsgs_RelaTypeWApi.GetObjByRelaTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRelaTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strRelaTypeId]的长度:[{0}]不正确!(clsgs_RelaTypeWApi.GetObjByRelaTypeIdlocalStorage)',
      strRelaTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsgs_RelaTypeEN._CurrTabName, strRelaTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objgs_RelaTypeCache: clsgs_RelaTypeEN = JSON.parse(strTempObj);
    return objgs_RelaTypeCache;
  }
  try {
    const objgs_RelaType = await gs_RelaType_GetObjByRelaTypeIdAsync(strRelaTypeId);
    if (objgs_RelaType != null) {
      localStorage.setItem(strKey, JSON.stringify(objgs_RelaType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objgs_RelaType;
    }
    return objgs_RelaType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strRelaTypeId,
      gs_RelaType_ConstructorName,
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
 * @param objgs_RelaType:所给的对象
 * @returns 对象
 */
export async function gs_RelaType_UpdateObjInLstCache(objgs_RelaType: clsgs_RelaTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstCache();
    const obj = arrgs_RelaTypeObjLstCache.find(
      (x) => x.relaTypeName == objgs_RelaType.relaTypeName,
    );
    if (obj != null) {
      objgs_RelaType.relaTypeId = obj.relaTypeId;
      ObjectAssign(obj, objgs_RelaType);
    } else {
      arrgs_RelaTypeObjLstCache.push(objgs_RelaType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gs_RelaType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strRelaTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_RelaType_GetNameByRelaTypeIdCache(strRelaTypeId: string) {
  if (IsNullOrEmpty(strRelaTypeId) == true) {
    const strMsg = Format(
      '参数:[strRelaTypeId]不能为空!(In clsgs_RelaTypeWApi.GetNameByRelaTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strRelaTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strRelaTypeId]的长度:[{0}]不正确!(clsgs_RelaTypeWApi.GetNameByRelaTypeIdCache)',
      strRelaTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstCache();
  if (arrgs_RelaTypeObjLstCache == null) return '';
  try {
    const arrgs_RelaTypeSel = arrgs_RelaTypeObjLstCache.filter(
      (x) => x.relaTypeId == strRelaTypeId,
    );
    let objgs_RelaType: clsgs_RelaTypeEN;
    if (arrgs_RelaTypeSel.length > 0) {
      objgs_RelaType = arrgs_RelaTypeSel[0];
      return objgs_RelaType.relaTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strRelaTypeId,
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
export async function gs_RelaType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsgs_RelaTypeEN.con_RelaTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsgs_RelaTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsgs_RelaTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strRelaTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objgs_RelaType = await gs_RelaType_GetObjByRelaTypeIdCache(strRelaTypeId);
  if (objgs_RelaType == null) return '';
  if (objgs_RelaType.GetFldValue(strOutFldName) == null) return '';
  return objgs_RelaType.GetFldValue(strOutFldName).toString();
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
export function gs_RelaType_SortFunDefa(a: clsgs_RelaTypeEN, b: clsgs_RelaTypeEN): number {
  return a.relaTypeId.localeCompare(b.relaTypeId);
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
export function gs_RelaType_SortFunDefa2Fld(a: clsgs_RelaTypeEN, b: clsgs_RelaTypeEN): number {
  if (a.relaTypeName == b.relaTypeName) return a.relaTypeENName.localeCompare(b.relaTypeENName);
  else return a.relaTypeName.localeCompare(b.relaTypeName);
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
export function gs_RelaType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_RelaTypeEN.con_RelaTypeId:
        return (a: clsgs_RelaTypeEN, b: clsgs_RelaTypeEN) => {
          return a.relaTypeId.localeCompare(b.relaTypeId);
        };
      case clsgs_RelaTypeEN.con_RelaTypeName:
        return (a: clsgs_RelaTypeEN, b: clsgs_RelaTypeEN) => {
          return a.relaTypeName.localeCompare(b.relaTypeName);
        };
      case clsgs_RelaTypeEN.con_RelaTypeENName:
        return (a: clsgs_RelaTypeEN, b: clsgs_RelaTypeEN) => {
          return a.relaTypeENName.localeCompare(b.relaTypeENName);
        };
      case clsgs_RelaTypeEN.con_UpdDate:
        return (a: clsgs_RelaTypeEN, b: clsgs_RelaTypeEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsgs_RelaTypeEN.con_Memo:
        return (a: clsgs_RelaTypeEN, b: clsgs_RelaTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsgs_RelaTypeEN.con_UpdUser:
        return (a: clsgs_RelaTypeEN, b: clsgs_RelaTypeEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_RelaType]中不存在!(in ${gs_RelaType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsgs_RelaTypeEN.con_RelaTypeId:
        return (a: clsgs_RelaTypeEN, b: clsgs_RelaTypeEN) => {
          return b.relaTypeId.localeCompare(a.relaTypeId);
        };
      case clsgs_RelaTypeEN.con_RelaTypeName:
        return (a: clsgs_RelaTypeEN, b: clsgs_RelaTypeEN) => {
          return b.relaTypeName.localeCompare(a.relaTypeName);
        };
      case clsgs_RelaTypeEN.con_RelaTypeENName:
        return (a: clsgs_RelaTypeEN, b: clsgs_RelaTypeEN) => {
          return b.relaTypeENName.localeCompare(a.relaTypeENName);
        };
      case clsgs_RelaTypeEN.con_UpdDate:
        return (a: clsgs_RelaTypeEN, b: clsgs_RelaTypeEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsgs_RelaTypeEN.con_Memo:
        return (a: clsgs_RelaTypeEN, b: clsgs_RelaTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsgs_RelaTypeEN.con_UpdUser:
        return (a: clsgs_RelaTypeEN, b: clsgs_RelaTypeEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_RelaType]中不存在!(in ${gs_RelaType_ConstructorName}.${strThisFuncName})`;
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
export async function gs_RelaType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_RelaTypeEN.con_RelaTypeId:
      return (obj: clsgs_RelaTypeEN) => {
        return obj.relaTypeId === value;
      };
    case clsgs_RelaTypeEN.con_RelaTypeName:
      return (obj: clsgs_RelaTypeEN) => {
        return obj.relaTypeName === value;
      };
    case clsgs_RelaTypeEN.con_RelaTypeENName:
      return (obj: clsgs_RelaTypeEN) => {
        return obj.relaTypeENName === value;
      };
    case clsgs_RelaTypeEN.con_UpdDate:
      return (obj: clsgs_RelaTypeEN) => {
        return obj.updDate === value;
      };
    case clsgs_RelaTypeEN.con_Memo:
      return (obj: clsgs_RelaTypeEN) => {
        return obj.memo === value;
      };
    case clsgs_RelaTypeEN.con_UpdUser:
      return (obj: clsgs_RelaTypeEN) => {
        return obj.updUser === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[gs_RelaType]中不存在!(in ${gs_RelaType_ConstructorName}.${strThisFuncName})`;
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
export async function gs_RelaType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsgs_RelaTypeEN.con_RelaTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrgs_RelaType = await gs_RelaType_GetObjLstCache();
  if (arrgs_RelaType == null) return [];
  let arrgs_RelaTypeSel = arrgs_RelaType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrgs_RelaTypeSel.length == 0) return [];
  return arrgs_RelaTypeSel.map((x) => x.relaTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_RelaType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
export async function gs_RelaType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
export async function gs_RelaType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsgs_RelaTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

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
      const objgs_RelaType = gs_RelaType_GetObjFromJsonObj(returnObj);
      return objgs_RelaType;
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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
export async function gs_RelaType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_RelaTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_RelaTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_RelaTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrgs_RelaTypeExObjLstCache: Array<clsgs_RelaTypeEN> = CacheHelper.Get(strKey);
    const arrgs_RelaTypeObjLstT = gs_RelaType_GetObjLstByJSONObjLst(arrgs_RelaTypeExObjLstCache);
    return arrgs_RelaTypeObjLstT;
  }
  try {
    const arrgs_RelaTypeExObjLst = await gs_RelaType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrgs_RelaTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_RelaTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_RelaTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_RelaType_ConstructorName,
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
export async function gs_RelaType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_RelaTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_RelaTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_RelaTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_RelaTypeExObjLstCache: Array<clsgs_RelaTypeEN> = JSON.parse(strTempObjLst);
    const arrgs_RelaTypeObjLstT = gs_RelaType_GetObjLstByJSONObjLst(arrgs_RelaTypeExObjLstCache);
    return arrgs_RelaTypeObjLstT;
  }
  try {
    const arrgs_RelaTypeExObjLst = await gs_RelaType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrgs_RelaTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_RelaTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_RelaTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_RelaType_ConstructorName,
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
export async function gs_RelaType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_RelaTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_RelaTypeObjLstCache: Array<clsgs_RelaTypeEN> = JSON.parse(strTempObjLst);
    return arrgs_RelaTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function gs_RelaType_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_RelaTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

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
          gs_RelaType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_RelaType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
export async function gs_RelaType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_RelaTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_RelaTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_RelaTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_RelaTypeExObjLstCache: Array<clsgs_RelaTypeEN> = JSON.parse(strTempObjLst);
    const arrgs_RelaTypeObjLstT = gs_RelaType_GetObjLstByJSONObjLst(arrgs_RelaTypeExObjLstCache);
    return arrgs_RelaTypeObjLstT;
  }
  try {
    const arrgs_RelaTypeExObjLst = await gs_RelaType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrgs_RelaTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_RelaTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_RelaTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_RelaType_ConstructorName,
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
export async function gs_RelaType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_RelaTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_RelaTypeObjLstCache: Array<clsgs_RelaTypeEN> = JSON.parse(strTempObjLst);
    return arrgs_RelaTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_RelaType_GetObjLstCache(): Promise<Array<clsgs_RelaTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrgs_RelaTypeObjLstCache;
  switch (clsgs_RelaTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstClientCache();
      break;
    default:
      arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstClientCache();
      break;
  }
  return arrgs_RelaTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_RelaType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrgs_RelaTypeObjLstCache;
  switch (clsgs_RelaTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrgs_RelaTypeObjLstCache = null;
      break;
    default:
      arrgs_RelaTypeObjLstCache = null;
      break;
  }
  return arrgs_RelaTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrRelaTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_RelaType_GetSubObjLstCache(objgs_RelaTypeCond: clsgs_RelaTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstCache();
  let arrgs_RelaTypeSel = arrgs_RelaTypeObjLstCache;
  if (objgs_RelaTypeCond.sfFldComparisonOp == null || objgs_RelaTypeCond.sfFldComparisonOp == '')
    return arrgs_RelaTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_RelaTypeCond.sfFldComparisonOp,
  );
  //console.log("clsgs_RelaTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_RelaTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_RelaTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrgs_RelaTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_RelaTypeCond),
      gs_RelaType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_RelaTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrRelaTypeId:关键字列表
 * @returns 对象列表
 **/
export async function gs_RelaType_GetObjLstByRelaTypeIdLstAsync(
  arrRelaTypeId: Array<string>,
): Promise<Array<clsgs_RelaTypeEN>> {
  const strThisFuncName = 'GetObjLstByRelaTypeIdLstAsync';
  const strAction = 'GetObjLstByRelaTypeIdLst';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRelaTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_RelaType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_RelaType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
 * @param arrstrRelaTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function gs_RelaType_GetObjLstByRelaTypeIdLstCache(arrRelaTypeIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByRelaTypeIdLstCache';
  try {
    const arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstCache();
    const arrgs_RelaTypeSel = arrgs_RelaTypeObjLstCache.filter(
      (x) => arrRelaTypeIdLst.indexOf(x.relaTypeId) > -1,
    );
    return arrgs_RelaTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrRelaTypeIdLst.join(','),
      gs_RelaType_ConstructorName,
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
export async function gs_RelaType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsgs_RelaTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

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
          gs_RelaType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_RelaType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
export async function gs_RelaType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsgs_RelaTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

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
          gs_RelaType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_RelaType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
export async function gs_RelaType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_RelaTypeEN>();
  const arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstCache();
  if (arrgs_RelaTypeObjLstCache.length == 0) return arrgs_RelaTypeObjLstCache;
  let arrgs_RelaTypeSel = arrgs_RelaTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_RelaTypeCond = new clsgs_RelaTypeEN();
  ObjectAssign(objgs_RelaTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_RelaTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_RelaTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrgs_RelaTypeSel.length == 0) return arrgs_RelaTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_RelaTypeSel = arrgs_RelaTypeSel.sort(gs_RelaType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_RelaTypeSel = arrgs_RelaTypeSel.sort(objPagerPara.sortFun);
    }
    arrgs_RelaTypeSel = arrgs_RelaTypeSel.slice(intStart, intEnd);
    return arrgs_RelaTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_RelaType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_RelaTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_RelaType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_RelaTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_RelaTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

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
          gs_RelaType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_RelaType_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
 * @param strRelaTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function gs_RelaType_DelRecordAsync(strRelaTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strRelaTypeId);

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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
 * @param arrRelaTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function gs_RelaType_Delgs_RelaTypesAsync(
  arrRelaTypeId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delgs_RelaTypesAsync';
  const strAction = 'Delgs_RelaTypes';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrRelaTypeId, config);
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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
export async function gs_RelaType_Delgs_RelaTypesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delgs_RelaTypesByCondAsync';
  const strAction = 'Delgs_RelaTypesByCond';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
 * @param objgs_RelaTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_RelaType_AddNewRecordAsync(
  objgs_RelaTypeEN: clsgs_RelaTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objgs_RelaTypeEN);
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_RelaTypeEN, config);
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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
 * @param objgs_RelaTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_RelaType_AddNewRecordWithMaxIdAsync(
  objgs_RelaTypeEN: clsgs_RelaTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_RelaTypeEN, config);
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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
 * @param objgs_RelaTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function gs_RelaType_AddNewRecordWithReturnKeyAsync(
  objgs_RelaTypeEN: clsgs_RelaTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_RelaTypeEN, config);
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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
 * @param objgs_RelaTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function gs_RelaType_UpdateRecordAsync(
  objgs_RelaTypeEN: clsgs_RelaTypeEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objgs_RelaTypeEN.sfUpdFldSetStr === undefined ||
    objgs_RelaTypeEN.sfUpdFldSetStr === null ||
    objgs_RelaTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_RelaTypeEN.relaTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_RelaTypeEN, config);
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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
 * @param objgs_RelaTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_RelaType_UpdateWithConditionAsync(
  objgs_RelaTypeEN: clsgs_RelaTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objgs_RelaTypeEN.sfUpdFldSetStr === undefined ||
    objgs_RelaTypeEN.sfUpdFldSetStr === null ||
    objgs_RelaTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_RelaTypeEN.relaTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);
  objgs_RelaTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_RelaTypeEN, config);
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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
 * @param objstrRelaTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_RelaType_IsExistRecordCache(objgs_RelaTypeCond: clsgs_RelaTypeEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstCache();
  if (arrgs_RelaTypeObjLstCache == null) return false;
  let arrgs_RelaTypeSel = arrgs_RelaTypeObjLstCache;
  if (objgs_RelaTypeCond.sfFldComparisonOp == null || objgs_RelaTypeCond.sfFldComparisonOp == '')
    return arrgs_RelaTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_RelaTypeCond.sfFldComparisonOp,
  );
  //console.log("clsgs_RelaTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_RelaTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_RelaTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrgs_RelaTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objgs_RelaTypeCond),
      gs_RelaType_ConstructorName,
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
export async function gs_RelaType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
 * @param strRelaTypeId:所给的关键字
 * @returns 对象
 */
export async function gs_RelaType_IsExistCache(strRelaTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstCache();
  if (arrgs_RelaTypeObjLstCache == null) return false;
  try {
    const arrgs_RelaTypeSel = arrgs_RelaTypeObjLstCache.filter(
      (x) => x.relaTypeId == strRelaTypeId,
    );
    if (arrgs_RelaTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strRelaTypeId,
      gs_RelaType_ConstructorName,
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
 * @param strRelaTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function gs_RelaType_IsExistAsync(strRelaTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRelaTypeId,
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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
export async function gs_RelaType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
 * @param objgs_RelaTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function gs_RelaType_GetRecCountByCondCache(objgs_RelaTypeCond: clsgs_RelaTypeEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrgs_RelaTypeObjLstCache = await gs_RelaType_GetObjLstCache();
  if (arrgs_RelaTypeObjLstCache == null) return 0;
  let arrgs_RelaTypeSel = arrgs_RelaTypeObjLstCache;
  if (objgs_RelaTypeCond.sfFldComparisonOp == null || objgs_RelaTypeCond.sfFldComparisonOp == '')
    return arrgs_RelaTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_RelaTypeCond.sfFldComparisonOp,
  );
  //console.log("clsgs_RelaTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_RelaTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_RelaTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrgs_RelaTypeSel = arrgs_RelaTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrgs_RelaTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_RelaTypeCond),
      gs_RelaType_ConstructorName,
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
export async function gs_RelaType_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
export async function gs_RelaType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gs_RelaType_Controller, strAction);

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
        gs_RelaType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_RelaType_ConstructorName,
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
export function gs_RelaType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function gs_RelaType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsgs_RelaTypeEN._CurrTabName;
  switch (clsgs_RelaTypeEN.CacheModeId) {
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
export function gs_RelaType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsgs_RelaTypeEN._CurrTabName;
    switch (clsgs_RelaTypeEN.CacheModeId) {
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
export async function gs_RelaType_Cache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In )', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：Cache");
  const arrObjLstSel = await gs_RelaType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsgs_RelaTypeEN.con_RelaTypeId,
    clsgs_RelaTypeEN.con_RelaTypeName,
    '知识点关系类型表',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_RelaType_CheckPropertyNew(pobjgs_RelaTypeEN: clsgs_RelaTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjgs_RelaTypeEN.relaTypeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[关系类型名]不能为空(In 知识点关系类型表)!(clsgs_RelaTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.relaTypeENName) === true ||
    pobjgs_RelaTypeEN.relaTypeENName.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[关系类型英文名]不能为空(In 知识点关系类型表)!(clsgs_RelaTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.relaTypeId) == false &&
    GetStrLen(pobjgs_RelaTypeEN.relaTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[关系类型Id(relaTypeId)]的长度不能超过2(In 知识点关系类型表(gs_RelaType))!值:$(pobjgs_RelaTypeEN.relaTypeId)(clsgs_RelaTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.relaTypeName) == false &&
    GetStrLen(pobjgs_RelaTypeEN.relaTypeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[关系类型名(relaTypeName)]的长度不能超过50(In 知识点关系类型表(gs_RelaType))!值:$(pobjgs_RelaTypeEN.relaTypeName)(clsgs_RelaTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.relaTypeENName) == false &&
    GetStrLen(pobjgs_RelaTypeEN.relaTypeENName) > 50
  ) {
    throw new Error(
      '(errid:Watl000413)字段[关系类型英文名(relaTypeENName)]的长度不能超过50(In 知识点关系类型表(gs_RelaType))!值:$(pobjgs_RelaTypeEN.relaTypeENName)(clsgs_RelaTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.updDate) == false &&
    GetStrLen(pobjgs_RelaTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 知识点关系类型表(gs_RelaType))!值:$(pobjgs_RelaTypeEN.updDate)(clsgs_RelaTypeBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjgs_RelaTypeEN.memo) == false && GetStrLen(pobjgs_RelaTypeEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 知识点关系类型表(gs_RelaType))!值:$(pobjgs_RelaTypeEN.memo)(clsgs_RelaTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.updUser) == false &&
    GetStrLen(pobjgs_RelaTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 知识点关系类型表(gs_RelaType))!值:$(pobjgs_RelaTypeEN.updUser)(clsgs_RelaTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.relaTypeId) == false &&
    undefined !== pobjgs_RelaTypeEN.relaTypeId &&
    tzDataType.isString(pobjgs_RelaTypeEN.relaTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[关系类型Id(relaTypeId)]的值:[$(pobjgs_RelaTypeEN.relaTypeId)], 非法,应该为字符型(In 知识点关系类型表(gs_RelaType))!(clsgs_RelaTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.relaTypeName) == false &&
    undefined !== pobjgs_RelaTypeEN.relaTypeName &&
    tzDataType.isString(pobjgs_RelaTypeEN.relaTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[关系类型名(relaTypeName)]的值:[$(pobjgs_RelaTypeEN.relaTypeName)], 非法,应该为字符型(In 知识点关系类型表(gs_RelaType))!(clsgs_RelaTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.relaTypeENName) == false &&
    undefined !== pobjgs_RelaTypeEN.relaTypeENName &&
    tzDataType.isString(pobjgs_RelaTypeEN.relaTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[关系类型英文名(relaTypeENName)]的值:[$(pobjgs_RelaTypeEN.relaTypeENName)], 非法,应该为字符型(In 知识点关系类型表(gs_RelaType))!(clsgs_RelaTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.updDate) == false &&
    undefined !== pobjgs_RelaTypeEN.updDate &&
    tzDataType.isString(pobjgs_RelaTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_RelaTypeEN.updDate)], 非法,应该为字符型(In 知识点关系类型表(gs_RelaType))!(clsgs_RelaTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.memo) == false &&
    undefined !== pobjgs_RelaTypeEN.memo &&
    tzDataType.isString(pobjgs_RelaTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_RelaTypeEN.memo)], 非法,应该为字符型(In 知识点关系类型表(gs_RelaType))!(clsgs_RelaTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.updUser) == false &&
    undefined !== pobjgs_RelaTypeEN.updUser &&
    tzDataType.isString(pobjgs_RelaTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_RelaTypeEN.updUser)], 非法,应该为字符型(In 知识点关系类型表(gs_RelaType))!(clsgs_RelaTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_RelaType_CheckProperty4Update(pobjgs_RelaTypeEN: clsgs_RelaTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.relaTypeId) == false &&
    GetStrLen(pobjgs_RelaTypeEN.relaTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[关系类型Id(relaTypeId)]的长度不能超过2(In 知识点关系类型表(gs_RelaType))!值:$(pobjgs_RelaTypeEN.relaTypeId)(clsgs_RelaTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.relaTypeName) == false &&
    GetStrLen(pobjgs_RelaTypeEN.relaTypeName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[关系类型名(relaTypeName)]的长度不能超过50(In 知识点关系类型表(gs_RelaType))!值:$(pobjgs_RelaTypeEN.relaTypeName)(clsgs_RelaTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.relaTypeENName) == false &&
    GetStrLen(pobjgs_RelaTypeEN.relaTypeENName) > 50
  ) {
    throw new Error(
      '(errid:Watl000416)字段[关系类型英文名(relaTypeENName)]的长度不能超过50(In 知识点关系类型表(gs_RelaType))!值:$(pobjgs_RelaTypeEN.relaTypeENName)(clsgs_RelaTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.updDate) == false &&
    GetStrLen(pobjgs_RelaTypeEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 知识点关系类型表(gs_RelaType))!值:$(pobjgs_RelaTypeEN.updDate)(clsgs_RelaTypeBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjgs_RelaTypeEN.memo) == false && GetStrLen(pobjgs_RelaTypeEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 知识点关系类型表(gs_RelaType))!值:$(pobjgs_RelaTypeEN.memo)(clsgs_RelaTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.updUser) == false &&
    GetStrLen(pobjgs_RelaTypeEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 知识点关系类型表(gs_RelaType))!值:$(pobjgs_RelaTypeEN.updUser)(clsgs_RelaTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.relaTypeId) == false &&
    undefined !== pobjgs_RelaTypeEN.relaTypeId &&
    tzDataType.isString(pobjgs_RelaTypeEN.relaTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[关系类型Id(relaTypeId)]的值:[$(pobjgs_RelaTypeEN.relaTypeId)], 非法,应该为字符型(In 知识点关系类型表(gs_RelaType))!(clsgs_RelaTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.relaTypeName) == false &&
    undefined !== pobjgs_RelaTypeEN.relaTypeName &&
    tzDataType.isString(pobjgs_RelaTypeEN.relaTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[关系类型名(relaTypeName)]的值:[$(pobjgs_RelaTypeEN.relaTypeName)], 非法,应该为字符型(In 知识点关系类型表(gs_RelaType))!(clsgs_RelaTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.relaTypeENName) == false &&
    undefined !== pobjgs_RelaTypeEN.relaTypeENName &&
    tzDataType.isString(pobjgs_RelaTypeEN.relaTypeENName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[关系类型英文名(relaTypeENName)]的值:[$(pobjgs_RelaTypeEN.relaTypeENName)], 非法,应该为字符型(In 知识点关系类型表(gs_RelaType))!(clsgs_RelaTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.updDate) == false &&
    undefined !== pobjgs_RelaTypeEN.updDate &&
    tzDataType.isString(pobjgs_RelaTypeEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_RelaTypeEN.updDate)], 非法,应该为字符型(In 知识点关系类型表(gs_RelaType))!(clsgs_RelaTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.memo) == false &&
    undefined !== pobjgs_RelaTypeEN.memo &&
    tzDataType.isString(pobjgs_RelaTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_RelaTypeEN.memo)], 非法,应该为字符型(In 知识点关系类型表(gs_RelaType))!(clsgs_RelaTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_RelaTypeEN.updUser) == false &&
    undefined !== pobjgs_RelaTypeEN.updUser &&
    tzDataType.isString(pobjgs_RelaTypeEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_RelaTypeEN.updUser)], 非法,应该为字符型(In 知识点关系类型表(gs_RelaType))!(clsgs_RelaTypeBL:CheckProperty4Update)',
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
export function gs_RelaType_GetJSONStrByObj(pobjgs_RelaTypeEN: clsgs_RelaTypeEN): string {
  pobjgs_RelaTypeEN.sfUpdFldSetStr = pobjgs_RelaTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjgs_RelaTypeEN);
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
export function gs_RelaType_GetObjLstByJSONStr(strJSON: string): Array<clsgs_RelaTypeEN> {
  let arrgs_RelaTypeObjLst = new Array<clsgs_RelaTypeEN>();
  if (strJSON === '') {
    return arrgs_RelaTypeObjLst;
  }
  try {
    arrgs_RelaTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrgs_RelaTypeObjLst;
  }
  return arrgs_RelaTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_RelaTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function gs_RelaType_GetObjLstByJSONObjLst(
  arrgs_RelaTypeObjLstS: Array<clsgs_RelaTypeEN>,
): Array<clsgs_RelaTypeEN> {
  const arrgs_RelaTypeObjLst = new Array<clsgs_RelaTypeEN>();
  for (const objInFor of arrgs_RelaTypeObjLstS) {
    const obj1 = gs_RelaType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrgs_RelaTypeObjLst.push(obj1);
  }
  return arrgs_RelaTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_RelaType_GetObjByJSONStr(strJSON: string): clsgs_RelaTypeEN {
  let pobjgs_RelaTypeEN = new clsgs_RelaTypeEN();
  if (strJSON === '') {
    return pobjgs_RelaTypeEN;
  }
  try {
    pobjgs_RelaTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjgs_RelaTypeEN;
  }
  return pobjgs_RelaTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function gs_RelaType_GetCombineCondition(objgs_RelaTypeCond: clsgs_RelaTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_RelaTypeCond.dicFldComparisonOp,
      clsgs_RelaTypeEN.con_RelaTypeId,
    ) == true
  ) {
    const strComparisonOpRelaTypeId: string =
      objgs_RelaTypeCond.dicFldComparisonOp[clsgs_RelaTypeEN.con_RelaTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_RelaTypeEN.con_RelaTypeId,
      objgs_RelaTypeCond.relaTypeId,
      strComparisonOpRelaTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_RelaTypeCond.dicFldComparisonOp,
      clsgs_RelaTypeEN.con_RelaTypeName,
    ) == true
  ) {
    const strComparisonOpRelaTypeName: string =
      objgs_RelaTypeCond.dicFldComparisonOp[clsgs_RelaTypeEN.con_RelaTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_RelaTypeEN.con_RelaTypeName,
      objgs_RelaTypeCond.relaTypeName,
      strComparisonOpRelaTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_RelaTypeCond.dicFldComparisonOp,
      clsgs_RelaTypeEN.con_RelaTypeENName,
    ) == true
  ) {
    const strComparisonOpRelaTypeENName: string =
      objgs_RelaTypeCond.dicFldComparisonOp[clsgs_RelaTypeEN.con_RelaTypeENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_RelaTypeEN.con_RelaTypeENName,
      objgs_RelaTypeCond.relaTypeENName,
      strComparisonOpRelaTypeENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_RelaTypeCond.dicFldComparisonOp,
      clsgs_RelaTypeEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objgs_RelaTypeCond.dicFldComparisonOp[clsgs_RelaTypeEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_RelaTypeEN.con_UpdDate,
      objgs_RelaTypeCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_RelaTypeCond.dicFldComparisonOp,
      clsgs_RelaTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objgs_RelaTypeCond.dicFldComparisonOp[clsgs_RelaTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_RelaTypeEN.con_Memo,
      objgs_RelaTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_RelaTypeCond.dicFldComparisonOp,
      clsgs_RelaTypeEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objgs_RelaTypeCond.dicFldComparisonOp[clsgs_RelaTypeEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_RelaTypeEN.con_UpdUser,
      objgs_RelaTypeCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_RelaType(知识点关系类型表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strRelaTypeName: 关系类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_RelaType_GetUniCondStr(objgs_RelaTypeEN: clsgs_RelaTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RelaTypeName = '{0}'", objgs_RelaTypeEN.relaTypeName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_RelaType(知识点关系类型表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strRelaTypeName: 关系类型名(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_RelaType_GetUniCondStr4Update(objgs_RelaTypeEN: clsgs_RelaTypeEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and RelaTypeId <> '{0}'", objgs_RelaTypeEN.relaTypeId);
  strWhereCond += Format(" and RelaTypeName = '{0}'", objgs_RelaTypeEN.relaTypeName);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_RelaTypeENS:源对象
 * @param objgs_RelaTypeENT:目标对象
 */
export function gs_RelaType_CopyObjTo(
  objgs_RelaTypeENS: clsgs_RelaTypeEN,
  objgs_RelaTypeENT: clsgs_RelaTypeEN,
): void {
  objgs_RelaTypeENT.relaTypeId = objgs_RelaTypeENS.relaTypeId; //关系类型Id
  objgs_RelaTypeENT.relaTypeName = objgs_RelaTypeENS.relaTypeName; //关系类型名
  objgs_RelaTypeENT.relaTypeENName = objgs_RelaTypeENS.relaTypeENName; //关系类型英文名
  objgs_RelaTypeENT.updDate = objgs_RelaTypeENS.updDate; //修改日期
  objgs_RelaTypeENT.memo = objgs_RelaTypeENS.memo; //备注
  objgs_RelaTypeENT.updUser = objgs_RelaTypeENS.updUser; //修改人
  objgs_RelaTypeENT.sfUpdFldSetStr = objgs_RelaTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_RelaTypeENS:源对象
 * @param objgs_RelaTypeENT:目标对象
 */
export function gs_RelaType_GetObjFromJsonObj(
  objgs_RelaTypeENS: clsgs_RelaTypeEN,
): clsgs_RelaTypeEN {
  const objgs_RelaTypeENT: clsgs_RelaTypeEN = new clsgs_RelaTypeEN();
  ObjectAssign(objgs_RelaTypeENT, objgs_RelaTypeENS);
  return objgs_RelaTypeENT;
}
