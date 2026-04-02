/**
 * 类名:clsSexWApi
 * 表名:Sex(01120103)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:23
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
 * 性别(Sex)
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
import { clsSexEN } from '@/ts/L0Entity/SysPara/clsSexEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const sex_Controller = 'SexApi';
export const sex_ConstructorName = 'sex';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdSex:关键字
 * @returns 对象
 **/
export async function Sex_GetObjByIdSexAsync(strIdSex: string): Promise<clsSexEN | null> {
  const strThisFuncName = 'GetObjByIdSexAsync';

  if (IsNullOrEmpty(strIdSex) == true) {
    const strMsg = Format('参数:[strIdSex]不能为空!(In clsSexWApi.GetObjByIdSexAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSex.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSex]的长度:[{0}]不正确!(clsSexWApi.GetObjByIdSexAsync)',
      strIdSex.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdSex';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdSex,
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
      const objSex = Sex_GetObjFromJsonObj(returnObj);
      return objSex;
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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
 * @param strIdSex:所给的关键字
 * @returns 对象
 */
export async function Sex_GetObjByIdSexCache(strIdSex: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByIdSexCache';

  if (IsNullOrEmpty(strIdSex) == true) {
    const strMsg = Format('参数:[strIdSex]不能为空!(In clsSexWApi.GetObjByIdSexCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSex.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSex]的长度:[{0}]不正确!(clsSexWApi.GetObjByIdSexCache)',
      strIdSex.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSexObjLstCache = await Sex_GetObjLstCache();
  try {
    const arrSexSel = arrSexObjLstCache.filter((x) => x.idSex == strIdSex);
    let objSex: clsSexEN;
    if (arrSexSel.length > 0) {
      objSex = arrSexSel[0];
      return objSex;
    } else {
      if (bolTryAsyncOnce == true) {
        const objSexConst = await Sex_GetObjByIdSexAsync(strIdSex);
        if (objSexConst != null) {
          Sex_ReFreshThisCache();
          return objSexConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdSex,
      sex_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdSex:所给的关键字
 * @returns 对象
 */
export async function Sex_GetObjByIdSexlocalStorage(strIdSex: string) {
  const strThisFuncName = 'GetObjByIdSexlocalStorage';

  if (IsNullOrEmpty(strIdSex) == true) {
    const strMsg = Format('参数:[strIdSex]不能为空!(In clsSexWApi.GetObjByIdSexlocalStorage)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSex.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSex]的长度:[{0}]不正确!(clsSexWApi.GetObjByIdSexlocalStorage)',
      strIdSex.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsSexEN._CurrTabName, strIdSex);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objSexCache: clsSexEN = JSON.parse(strTempObj);
    return objSexCache;
  }
  try {
    const objSex = await Sex_GetObjByIdSexAsync(strIdSex);
    if (objSex != null) {
      localStorage.setItem(strKey, JSON.stringify(objSex));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objSex;
    }
    return objSex;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdSex,
      sex_ConstructorName,
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
 * @param objSex:所给的对象
 * @returns 对象
 */
export async function Sex_UpdateObjInLstCache(objSex: clsSexEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrSexObjLstCache = await Sex_GetObjLstCache();
    const obj = arrSexObjLstCache.find((x) => x.idSex == objSex.idSex);
    if (obj != null) {
      objSex.idSex = obj.idSex;
      ObjectAssign(obj, objSex);
    } else {
      arrSexObjLstCache.push(objSex);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      sex_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdSex:所给的关键字
 * @returns 对象
 */
export async function Sex_GetNameByIdSexCache(strIdSex: string) {
  if (IsNullOrEmpty(strIdSex) == true) {
    const strMsg = Format('参数:[strIdSex]不能为空!(In clsSexWApi.GetNameByIdSexCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdSex.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdSex]的长度:[{0}]不正确!(clsSexWApi.GetNameByIdSexCache)',
      strIdSex.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSexObjLstCache = await Sex_GetObjLstCache();
  if (arrSexObjLstCache == null) return '';
  try {
    const arrSexSel = arrSexObjLstCache.filter((x) => x.idSex == strIdSex);
    let objSex: clsSexEN;
    if (arrSexSel.length > 0) {
      objSex = arrSexSel[0];
      return objSex.sexDesc;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdSex,
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
export async function Sex_func(strInFldName: string, strOutFldName: string, strInValue: string) {
  //const strThisFuncName = "func";

  if (strInFldName != clsSexEN.con_IdSex) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsSexEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsSexEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdSex = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objSex = await Sex_GetObjByIdSexCache(strIdSex);
  if (objSex == null) return '';
  if (objSex.GetFldValue(strOutFldName) == null) return '';
  return objSex.GetFldValue(strOutFldName).toString();
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
export function Sex_SortFunDefa(a: clsSexEN, b: clsSexEN): number {
  return a.idSex.localeCompare(b.idSex);
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
export function Sex_SortFunDefa2Fld(a: clsSexEN, b: clsSexEN): number {
  if (a.sexID == b.sexID) return a.sexDesc.localeCompare(b.sexDesc);
  else return a.sexID.localeCompare(b.sexID);
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
export function Sex_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSexEN.con_IdSex:
        return (a: clsSexEN, b: clsSexEN) => {
          return a.idSex.localeCompare(b.idSex);
        };
      case clsSexEN.con_SexID:
        return (a: clsSexEN, b: clsSexEN) => {
          if (a.sexID == null) return -1;
          if (b.sexID == null) return 1;
          return a.sexID.localeCompare(b.sexID);
        };
      case clsSexEN.con_SexDesc:
        return (a: clsSexEN, b: clsSexEN) => {
          if (a.sexDesc == null) return -1;
          if (b.sexDesc == null) return 1;
          return a.sexDesc.localeCompare(b.sexDesc);
        };
      case clsSexEN.con_SexDescEn:
        return (a: clsSexEN, b: clsSexEN) => {
          if (a.sexDescEn == null) return -1;
          if (b.sexDescEn == null) return 1;
          return a.sexDescEn.localeCompare(b.sexDescEn);
        };
      case clsSexEN.con_ModifyDate:
        return (a: clsSexEN, b: clsSexEN) => {
          if (a.modifyDate == null) return -1;
          if (b.modifyDate == null) return 1;
          return a.modifyDate.localeCompare(b.modifyDate);
        };
      case clsSexEN.con_ModifyUserId:
        return (a: clsSexEN, b: clsSexEN) => {
          if (a.modifyUserId == null) return -1;
          if (b.modifyUserId == null) return 1;
          return a.modifyUserId.localeCompare(b.modifyUserId);
        };
      case clsSexEN.con_Memo:
        return (a: clsSexEN, b: clsSexEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Sex]中不存在!(in ${sex_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSexEN.con_IdSex:
        return (a: clsSexEN, b: clsSexEN) => {
          return b.idSex.localeCompare(a.idSex);
        };
      case clsSexEN.con_SexID:
        return (a: clsSexEN, b: clsSexEN) => {
          if (b.sexID == null) return -1;
          if (a.sexID == null) return 1;
          return b.sexID.localeCompare(a.sexID);
        };
      case clsSexEN.con_SexDesc:
        return (a: clsSexEN, b: clsSexEN) => {
          if (b.sexDesc == null) return -1;
          if (a.sexDesc == null) return 1;
          return b.sexDesc.localeCompare(a.sexDesc);
        };
      case clsSexEN.con_SexDescEn:
        return (a: clsSexEN, b: clsSexEN) => {
          if (b.sexDescEn == null) return -1;
          if (a.sexDescEn == null) return 1;
          return b.sexDescEn.localeCompare(a.sexDescEn);
        };
      case clsSexEN.con_ModifyDate:
        return (a: clsSexEN, b: clsSexEN) => {
          if (b.modifyDate == null) return -1;
          if (a.modifyDate == null) return 1;
          return b.modifyDate.localeCompare(a.modifyDate);
        };
      case clsSexEN.con_ModifyUserId:
        return (a: clsSexEN, b: clsSexEN) => {
          if (b.modifyUserId == null) return -1;
          if (a.modifyUserId == null) return 1;
          return b.modifyUserId.localeCompare(a.modifyUserId);
        };
      case clsSexEN.con_Memo:
        return (a: clsSexEN, b: clsSexEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[Sex]中不存在!(in ${sex_ConstructorName}.${strThisFuncName})`;
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
export async function Sex_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSexEN.con_IdSex:
      return (obj: clsSexEN) => {
        return obj.idSex === value;
      };
    case clsSexEN.con_SexID:
      return (obj: clsSexEN) => {
        return obj.sexID === value;
      };
    case clsSexEN.con_SexDesc:
      return (obj: clsSexEN) => {
        return obj.sexDesc === value;
      };
    case clsSexEN.con_SexDescEn:
      return (obj: clsSexEN) => {
        return obj.sexDescEn === value;
      };
    case clsSexEN.con_ModifyDate:
      return (obj: clsSexEN) => {
        return obj.modifyDate === value;
      };
    case clsSexEN.con_ModifyUserId:
      return (obj: clsSexEN) => {
        return obj.modifyUserId === value;
      };
    case clsSexEN.con_Memo:
      return (obj: clsSexEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[Sex]中不存在!(in ${sex_ConstructorName}.${strThisFuncName})`;
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
export async function Sex_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsSexEN.con_IdSex) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrSex = await Sex_GetObjLstCache();
  if (arrSex == null) return [];
  let arrSexSel = arrSex;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrSexSel = arrSexSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrSexSel = arrSexSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrSexSel = arrSexSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrSexSel.length == 0) return [];
  return arrSexSel.map((x) => x.idSex);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function Sex_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
export async function Sex_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
export async function Sex_GetFirstObjAsync(strWhereCond: string): Promise<clsSexEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

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
      const objSex = Sex_GetObjFromJsonObj(returnObj);
      return objSex;
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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
export async function Sex_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSexEN._CurrTabName;
  if (IsNullOrEmpty(clsSexEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSexEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrSexExObjLstCache: Array<clsSexEN> = CacheHelper.Get(strKey);
    const arrSexObjLstT = Sex_GetObjLstByJSONObjLst(arrSexExObjLstCache);
    return arrSexObjLstT;
  }
  try {
    const arrSexExObjLst = await Sex_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrSexExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSexExObjLst.length,
    );
    console.log(strInfo);
    return arrSexExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sex_ConstructorName,
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
export async function Sex_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSexEN._CurrTabName;
  if (IsNullOrEmpty(clsSexEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSexEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSexExObjLstCache: Array<clsSexEN> = JSON.parse(strTempObjLst);
    const arrSexObjLstT = Sex_GetObjLstByJSONObjLst(arrSexExObjLstCache);
    return arrSexObjLstT;
  }
  try {
    const arrSexExObjLst = await Sex_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrSexExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSexExObjLst.length,
    );
    console.log(strInfo);
    return arrSexExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sex_ConstructorName,
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
export async function Sex_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSexEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSexObjLstCache: Array<clsSexEN> = JSON.parse(strTempObjLst);
    return arrSexObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function Sex_GetObjLstAsync(strWhereCond: string): Promise<Array<clsSexEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

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
          sex_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Sex_GetObjLstByJSONObjLst(returnObjLst);
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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
export async function Sex_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSexEN._CurrTabName;
  if (IsNullOrEmpty(clsSexEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSexEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSexExObjLstCache: Array<clsSexEN> = JSON.parse(strTempObjLst);
    const arrSexObjLstT = Sex_GetObjLstByJSONObjLst(arrSexExObjLstCache);
    return arrSexObjLstT;
  }
  try {
    const arrSexExObjLst = await Sex_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrSexExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSexExObjLst.length,
    );
    console.log(strInfo);
    return arrSexExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sex_ConstructorName,
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
export async function Sex_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSexEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSexObjLstCache: Array<clsSexEN> = JSON.parse(strTempObjLst);
    return arrSexObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function Sex_GetObjLstCache(): Promise<Array<clsSexEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrSexObjLstCache;
  switch (clsSexEN.CacheModeId) {
    case '04': //sessionStorage
      arrSexObjLstCache = await Sex_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrSexObjLstCache = await Sex_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrSexObjLstCache = await Sex_GetObjLstClientCache();
      break;
    default:
      arrSexObjLstCache = await Sex_GetObjLstClientCache();
      break;
  }
  return arrSexObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function Sex_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrSexObjLstCache;
  switch (clsSexEN.CacheModeId) {
    case '04': //sessionStorage
      arrSexObjLstCache = await Sex_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrSexObjLstCache = await Sex_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrSexObjLstCache = null;
      break;
    default:
      arrSexObjLstCache = null;
      break;
  }
  return arrSexObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdSexCond:条件对象
 * @returns 对象列表子集
 */
export async function Sex_GetSubObjLstCache(objSexCond: clsSexEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrSexObjLstCache = await Sex_GetObjLstCache();
  let arrSexSel = arrSexObjLstCache;
  if (objSexCond.sfFldComparisonOp == null || objSexCond.sfFldComparisonOp == '') return arrSexSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objSexCond.sfFldComparisonOp);
  //console.log("clsSexWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSexCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSexCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrSexSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSexCond),
      sex_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSexEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdSex:关键字列表
 * @returns 对象列表
 **/
export async function Sex_GetObjLstByIdSexLstAsync(
  arrIdSex: Array<string>,
): Promise<Array<clsSexEN>> {
  const strThisFuncName = 'GetObjLstByIdSexLstAsync';
  const strAction = 'GetObjLstByIdSexLst';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdSex, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sex_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Sex_GetObjLstByJSONObjLst(returnObjLst);
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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
 * @param arrstrIdSexLst:关键字列表
 * @returns 对象列表
 */
export async function Sex_GetObjLstByIdSexLstCache(arrIdSexLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByIdSexLstCache';
  try {
    const arrSexObjLstCache = await Sex_GetObjLstCache();
    const arrSexSel = arrSexObjLstCache.filter((x) => arrIdSexLst.indexOf(x.idSex) > -1);
    return arrSexSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdSexLst.join(','),
      sex_ConstructorName,
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
export async function Sex_GetTopObjLstAsync(objTopPara: stuTopPara): Promise<Array<clsSexEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

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
          sex_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Sex_GetObjLstByJSONObjLst(returnObjLst);
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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
export async function Sex_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSexEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

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
          sex_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Sex_GetObjLstByJSONObjLst(returnObjLst);
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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
export async function Sex_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsSexEN>();
  const arrSexObjLstCache = await Sex_GetObjLstCache();
  if (arrSexObjLstCache.length == 0) return arrSexObjLstCache;
  let arrSexSel = arrSexObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objSexCond = new clsSexEN();
  ObjectAssign(objSexCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsSexWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSexCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSexSel = arrSexSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrSexSel.length == 0) return arrSexSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSexSel = arrSexSel.sort(Sex_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSexSel = arrSexSel.sort(objPagerPara.sortFun);
    }
    arrSexSel = arrSexSel.slice(intStart, intEnd);
    return arrSexSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sex_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSexEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function Sex_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSexEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSexEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

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
          sex_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = Sex_GetObjLstByJSONObjLst(returnObjLst);
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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
 * @param strIdSex:关键字
 * @returns 获取删除的结果
 **/
export async function Sex_DelRecordAsync(strIdSex: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sex_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdSex);

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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
 * @param arrIdSex:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function Sex_DelSexsAsync(arrIdSex: Array<string>): Promise<number> {
  const strThisFuncName = 'DelSexsAsync';
  const strAction = 'DelSexs';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdSex, config);
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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
export async function Sex_DelSexsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelSexsByCondAsync';
  const strAction = 'DelSexsByCond';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
 * @param objSexEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Sex_AddNewRecordAsync(objSexEN: clsSexEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objSexEN.idSex === null || objSexEN.idSex === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objSexEN);
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSexEN, config);
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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
 * @param objSexEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function Sex_AddNewRecordWithMaxIdAsync(objSexEN: clsSexEN): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSexEN, config);
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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
 * @param objSexEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function Sex_AddNewRecordWithReturnKeyAsync(objSexEN: clsSexEN): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSexEN, config);
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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
 * @param objSexEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function Sex_UpdateRecordAsync(objSexEN: clsSexEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSexEN.sfUpdFldSetStr === undefined ||
    objSexEN.sfUpdFldSetStr === null ||
    objSexEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objSexEN.idSex);
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSexEN, config);
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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
 * @param objSexEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function Sex_UpdateWithConditionAsync(
  objSexEN: clsSexEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSexEN.sfUpdFldSetStr === undefined ||
    objSexEN.sfUpdFldSetStr === null ||
    objSexEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format('对象(关键字: {0})的【修改字段集】为空,不能修改!', objSexEN.idSex);
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sex_Controller, strAction);
  objSexEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSexEN, config);
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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
 * @param objstrIdSexCond:条件对象
 * @returns 对象列表子集
 */
export async function Sex_IsExistRecordCache(objSexCond: clsSexEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrSexObjLstCache = await Sex_GetObjLstCache();
  if (arrSexObjLstCache == null) return false;
  let arrSexSel = arrSexObjLstCache;
  if (objSexCond.sfFldComparisonOp == null || objSexCond.sfFldComparisonOp == '')
    return arrSexSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objSexCond.sfFldComparisonOp);
  //console.log("clsSexWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSexCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSexCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrSexSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objSexCond),
      sex_ConstructorName,
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
export async function Sex_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
 * @param strIdSex:所给的关键字
 * @returns 对象
 */
export async function Sex_IsExistCache(strIdSex: string) {
  const strThisFuncName = 'IsExistCache';
  const arrSexObjLstCache = await Sex_GetObjLstCache();
  if (arrSexObjLstCache == null) return false;
  try {
    const arrSexSel = arrSexObjLstCache.filter((x) => x.idSex == strIdSex);
    if (arrSexSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdSex,
      sex_ConstructorName,
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
 * @param strIdSex:关键字
 * @returns 是否存在?存在返回True
 **/
export async function Sex_IsExistAsync(strIdSex: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdSex,
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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
export async function Sex_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
 * @param objSexCond:条件对象
 * @returns 对象列表记录数
 */
export async function Sex_GetRecCountByCondCache(objSexCond: clsSexEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrSexObjLstCache = await Sex_GetObjLstCache();
  if (arrSexObjLstCache == null) return 0;
  let arrSexSel = arrSexObjLstCache;
  if (objSexCond.sfFldComparisonOp == null || objSexCond.sfFldComparisonOp == '')
    return arrSexSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(objSexCond.sfFldComparisonOp);
  //console.log("clsSexWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSexCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSexCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSexSel = arrSexSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSexSel = arrSexSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSexSel = arrSexSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrSexSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSexCond),
      sex_ConstructorName,
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
export async function Sex_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sex_Controller, strAction);

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
        sex_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sex_ConstructorName,
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
export function Sex_GetWebApiUrl(strController: string, strAction: string): string {
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
export function Sex_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsSexEN._CurrTabName;
  switch (clsSexEN.CacheModeId) {
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
export function Sex_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsSexEN._CurrTabName;
    switch (clsSexEN.CacheModeId) {
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
export async function Sex_BindDdl_id_SexInDivCache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_id_SexInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_id_SexInDivCache");
  const arrObjLstSel = await Sex_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsSexEN.con_IdSex,
    clsSexEN.con_SexDesc,
    '性别',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Sex_CheckPropertyNew(pobjSexEN: clsSexEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjSexEN.idSex) == false && GetStrLen(pobjSexEN.idSex) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[性别流水号(idSex)]的长度不能超过4(In 性别(Sex))!值:$(pobjSexEN.idSex)(clsSexBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSexEN.sexID) == false && GetStrLen(pobjSexEN.sexID) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[性别ID(sexID)]的长度不能超过4(In 性别(Sex))!值:$(pobjSexEN.sexID)(clsSexBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSexEN.sexDesc) == false && GetStrLen(pobjSexEN.sexDesc) > 10) {
    throw new Error(
      '(errid:Watl000413)字段[性别名称(sexDesc)]的长度不能超过10(In 性别(Sex))!值:$(pobjSexEN.sexDesc)(clsSexBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSexEN.sexDescEn) == false && GetStrLen(pobjSexEN.sexDescEn) > 10) {
    throw new Error(
      '(errid:Watl000413)字段[SexDesc_EN(sexDescEn)]的长度不能超过10(In 性别(Sex))!值:$(pobjSexEN.sexDescEn)(clsSexBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSexEN.modifyDate) == false && GetStrLen(pobjSexEN.modifyDate) > 20) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 性别(Sex))!值:$(pobjSexEN.modifyDate)(clsSexBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSexEN.modifyUserId) == false && GetStrLen(pobjSexEN.modifyUserId) > 18) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 性别(Sex))!值:$(pobjSexEN.modifyUserId)(clsSexBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjSexEN.memo) == false && GetStrLen(pobjSexEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 性别(Sex))!值:$(pobjSexEN.memo)(clsSexBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSexEN.idSex) == false &&
    undefined !== pobjSexEN.idSex &&
    tzDataType.isString(pobjSexEN.idSex) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[性别流水号(idSex)]的值:[$(pobjSexEN.idSex)], 非法,应该为字符型(In 性别(Sex))!(clsSexBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSexEN.sexID) == false &&
    undefined !== pobjSexEN.sexID &&
    tzDataType.isString(pobjSexEN.sexID) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[性别ID(sexID)]的值:[$(pobjSexEN.sexID)], 非法,应该为字符型(In 性别(Sex))!(clsSexBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSexEN.sexDesc) == false &&
    undefined !== pobjSexEN.sexDesc &&
    tzDataType.isString(pobjSexEN.sexDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[性别名称(sexDesc)]的值:[$(pobjSexEN.sexDesc)], 非法,应该为字符型(In 性别(Sex))!(clsSexBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSexEN.sexDescEn) == false &&
    undefined !== pobjSexEN.sexDescEn &&
    tzDataType.isString(pobjSexEN.sexDescEn) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[SexDesc_EN(sexDescEn)]的值:[$(pobjSexEN.sexDescEn)], 非法,应该为字符型(In 性别(Sex))!(clsSexBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSexEN.modifyDate) == false &&
    undefined !== pobjSexEN.modifyDate &&
    tzDataType.isString(pobjSexEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjSexEN.modifyDate)], 非法,应该为字符型(In 性别(Sex))!(clsSexBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSexEN.modifyUserId) == false &&
    undefined !== pobjSexEN.modifyUserId &&
    tzDataType.isString(pobjSexEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjSexEN.modifyUserId)], 非法,应该为字符型(In 性别(Sex))!(clsSexBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSexEN.memo) == false &&
    undefined !== pobjSexEN.memo &&
    tzDataType.isString(pobjSexEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjSexEN.memo)], 非法,应该为字符型(In 性别(Sex))!(clsSexBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function Sex_CheckProperty4Update(pobjSexEN: clsSexEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjSexEN.idSex) == false && GetStrLen(pobjSexEN.idSex) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[性别流水号(idSex)]的长度不能超过4(In 性别(Sex))!值:$(pobjSexEN.idSex)(clsSexBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSexEN.sexID) == false && GetStrLen(pobjSexEN.sexID) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[性别ID(sexID)]的长度不能超过4(In 性别(Sex))!值:$(pobjSexEN.sexID)(clsSexBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSexEN.sexDesc) == false && GetStrLen(pobjSexEN.sexDesc) > 10) {
    throw new Error(
      '(errid:Watl000416)字段[性别名称(sexDesc)]的长度不能超过10(In 性别(Sex))!值:$(pobjSexEN.sexDesc)(clsSexBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSexEN.sexDescEn) == false && GetStrLen(pobjSexEN.sexDescEn) > 10) {
    throw new Error(
      '(errid:Watl000416)字段[SexDesc_EN(sexDescEn)]的长度不能超过10(In 性别(Sex))!值:$(pobjSexEN.sexDescEn)(clsSexBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSexEN.modifyDate) == false && GetStrLen(pobjSexEN.modifyDate) > 20) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 性别(Sex))!值:$(pobjSexEN.modifyDate)(clsSexBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSexEN.modifyUserId) == false && GetStrLen(pobjSexEN.modifyUserId) > 18) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 性别(Sex))!值:$(pobjSexEN.modifyUserId)(clsSexBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjSexEN.memo) == false && GetStrLen(pobjSexEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 性别(Sex))!值:$(pobjSexEN.memo)(clsSexBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSexEN.idSex) == false &&
    undefined !== pobjSexEN.idSex &&
    tzDataType.isString(pobjSexEN.idSex) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[性别流水号(idSex)]的值:[$(pobjSexEN.idSex)], 非法,应该为字符型(In 性别(Sex))!(clsSexBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSexEN.sexID) == false &&
    undefined !== pobjSexEN.sexID &&
    tzDataType.isString(pobjSexEN.sexID) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[性别ID(sexID)]的值:[$(pobjSexEN.sexID)], 非法,应该为字符型(In 性别(Sex))!(clsSexBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSexEN.sexDesc) == false &&
    undefined !== pobjSexEN.sexDesc &&
    tzDataType.isString(pobjSexEN.sexDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[性别名称(sexDesc)]的值:[$(pobjSexEN.sexDesc)], 非法,应该为字符型(In 性别(Sex))!(clsSexBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSexEN.sexDescEn) == false &&
    undefined !== pobjSexEN.sexDescEn &&
    tzDataType.isString(pobjSexEN.sexDescEn) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[SexDesc_EN(sexDescEn)]的值:[$(pobjSexEN.sexDescEn)], 非法,应该为字符型(In 性别(Sex))!(clsSexBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSexEN.modifyDate) == false &&
    undefined !== pobjSexEN.modifyDate &&
    tzDataType.isString(pobjSexEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjSexEN.modifyDate)], 非法,应该为字符型(In 性别(Sex))!(clsSexBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSexEN.modifyUserId) == false &&
    undefined !== pobjSexEN.modifyUserId &&
    tzDataType.isString(pobjSexEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjSexEN.modifyUserId)], 非法,应该为字符型(In 性别(Sex))!(clsSexBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSexEN.memo) == false &&
    undefined !== pobjSexEN.memo &&
    tzDataType.isString(pobjSexEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjSexEN.memo)], 非法,应该为字符型(In 性别(Sex))!(clsSexBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjSexEN.idSex) === true) {
    throw new Error(
      '(errid:Watl000064)字段[性别流水号]不能为空(In 性别)!(clsSexBL:CheckProperty4Update)',
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
export function Sex_GetJSONStrByObj(pobjSexEN: clsSexEN): string {
  pobjSexEN.sfUpdFldSetStr = pobjSexEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSexEN);
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
export function Sex_GetObjLstByJSONStr(strJSON: string): Array<clsSexEN> {
  let arrSexObjLst = new Array<clsSexEN>();
  if (strJSON === '') {
    return arrSexObjLst;
  }
  try {
    arrSexObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSexObjLst;
  }
  return arrSexObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSexObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function Sex_GetObjLstByJSONObjLst(arrSexObjLstS: Array<clsSexEN>): Array<clsSexEN> {
  const arrSexObjLst = new Array<clsSexEN>();
  for (const objInFor of arrSexObjLstS) {
    const obj1 = Sex_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSexObjLst.push(obj1);
  }
  return arrSexObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function Sex_GetObjByJSONStr(strJSON: string): clsSexEN {
  let pobjSexEN = new clsSexEN();
  if (strJSON === '') {
    return pobjSexEN;
  }
  try {
    pobjSexEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSexEN;
  }
  return pobjSexEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function Sex_GetCombineCondition(objSexCond: clsSexEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(objSexCond.dicFldComparisonOp, clsSexEN.con_IdSex) == true
  ) {
    const strComparisonOpIdSex: string = objSexCond.dicFldComparisonOp[clsSexEN.con_IdSex];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSexEN.con_IdSex,
      objSexCond.idSex,
      strComparisonOpIdSex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objSexCond.dicFldComparisonOp, clsSexEN.con_SexID) == true
  ) {
    const strComparisonOpSexID: string = objSexCond.dicFldComparisonOp[clsSexEN.con_SexID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSexEN.con_SexID,
      objSexCond.sexID,
      strComparisonOpSexID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objSexCond.dicFldComparisonOp, clsSexEN.con_SexDesc) ==
    true
  ) {
    const strComparisonOpSexDesc: string = objSexCond.dicFldComparisonOp[clsSexEN.con_SexDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSexEN.con_SexDesc,
      objSexCond.sexDesc,
      strComparisonOpSexDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objSexCond.dicFldComparisonOp, clsSexEN.con_SexDescEn) ==
    true
  ) {
    const strComparisonOpSexDescEn: string = objSexCond.dicFldComparisonOp[clsSexEN.con_SexDescEn];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSexEN.con_SexDescEn,
      objSexCond.sexDescEn,
      strComparisonOpSexDescEn,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objSexCond.dicFldComparisonOp, clsSexEN.con_ModifyDate) ==
    true
  ) {
    const strComparisonOpModifyDate: string =
      objSexCond.dicFldComparisonOp[clsSexEN.con_ModifyDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSexEN.con_ModifyDate,
      objSexCond.modifyDate,
      strComparisonOpModifyDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSexCond.dicFldComparisonOp,
      clsSexEN.con_ModifyUserId,
    ) == true
  ) {
    const strComparisonOpModifyUserId: string =
      objSexCond.dicFldComparisonOp[clsSexEN.con_ModifyUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSexEN.con_ModifyUserId,
      objSexCond.modifyUserId,
      strComparisonOpModifyUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(objSexCond.dicFldComparisonOp, clsSexEN.con_Memo) == true
  ) {
    const strComparisonOpMemo: string = objSexCond.dicFldComparisonOp[clsSexEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSexEN.con_Memo,
      objSexCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSexENS:源对象
 * @param objSexENT:目标对象
 */
export function Sex_CopyObjTo(objSexENS: clsSexEN, objSexENT: clsSexEN): void {
  objSexENT.idSex = objSexENS.idSex; //性别流水号
  objSexENT.sexID = objSexENS.sexID; //性别ID
  objSexENT.sexDesc = objSexENS.sexDesc; //性别名称
  objSexENT.sexDescEn = objSexENS.sexDescEn; //SexDesc_EN
  objSexENT.modifyDate = objSexENS.modifyDate; //修改日期
  objSexENT.modifyUserId = objSexENS.modifyUserId; //修改人
  objSexENT.memo = objSexENS.memo; //备注
  objSexENT.sfUpdFldSetStr = objSexENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSexENS:源对象
 * @param objSexENT:目标对象
 */
export function Sex_GetObjFromJsonObj(objSexENS: clsSexEN): clsSexEN {
  const objSexENT: clsSexEN = new clsSexEN();
  ObjectAssign(objSexENT, objSexENS);
  return objSexENT;
}
