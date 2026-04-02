/**
 * 类名:clsRsEthnicWApi
 * 表名:RsEthnic(01120105)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/27 02:43:51
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
 * 民族(RsEthnic)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年12月27日.
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
import { clsRsEthnicEN } from '@/ts/L0Entity/SysPara/clsRsEthnicEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const rsEthnic_Controller = 'RsEthnicApi';
export const rsEthnic_ConstructorName = 'rsEthnic';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdEthnic:关键字
 * @returns 对象
 **/
export async function RsEthnic_GetObjByIdEthnicAsync(
  strIdEthnic: string,
): Promise<clsRsEthnicEN | null> {
  const strThisFuncName = 'GetObjByIdEthnicAsync';

  if (IsNullOrEmpty(strIdEthnic) == true) {
    const strMsg = Format('参数:[strIdEthnic]不能为空!(In clsRsEthnicWApi.GetObjByIdEthnicAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdEthnic.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdEthnic]的长度:[{0}]不正确!(clsRsEthnicWApi.GetObjByIdEthnicAsync)',
      strIdEthnic.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdEthnic';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdEthnic,
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
      const objRsEthnic = RsEthnic_GetObjFromJsonObj(returnObj);
      return objRsEthnic;
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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
 * @param strIdEthnic:所给的关键字
 * @returns 对象
 */
export async function RsEthnic_GetObjByIdEthnicCache(strIdEthnic: string, bolTryAsyncOnce = true) {
  const strThisFuncName = 'GetObjByIdEthnicCache';

  if (IsNullOrEmpty(strIdEthnic) == true) {
    const strMsg = Format('参数:[strIdEthnic]不能为空!(In clsRsEthnicWApi.GetObjByIdEthnicCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdEthnic.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdEthnic]的长度:[{0}]不正确!(clsRsEthnicWApi.GetObjByIdEthnicCache)',
      strIdEthnic.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrRsEthnicObjLstCache = await RsEthnic_GetObjLstCache();
  try {
    const arrRsEthnicSel = arrRsEthnicObjLstCache.filter((x) => x.idEthnic == strIdEthnic);
    let objRsEthnic: clsRsEthnicEN;
    if (arrRsEthnicSel.length > 0) {
      objRsEthnic = arrRsEthnicSel[0];
      return objRsEthnic;
    } else {
      if (bolTryAsyncOnce == true) {
        const objRsEthnicConst = await RsEthnic_GetObjByIdEthnicAsync(strIdEthnic);
        if (objRsEthnicConst != null) {
          RsEthnic_ReFreshThisCache();
          return objRsEthnicConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdEthnic,
      rsEthnic_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdEthnic:所给的关键字
 * @returns 对象
 */
export async function RsEthnic_GetObjByIdEthniclocalStorage(strIdEthnic: string) {
  const strThisFuncName = 'GetObjByIdEthniclocalStorage';

  if (IsNullOrEmpty(strIdEthnic) == true) {
    const strMsg = Format(
      '参数:[strIdEthnic]不能为空!(In clsRsEthnicWApi.GetObjByIdEthniclocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdEthnic.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdEthnic]的长度:[{0}]不正确!(clsRsEthnicWApi.GetObjByIdEthniclocalStorage)',
      strIdEthnic.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsRsEthnicEN._CurrTabName, strIdEthnic);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objRsEthnicCache: clsRsEthnicEN = JSON.parse(strTempObj);
    return objRsEthnicCache;
  }
  try {
    const objRsEthnic = await RsEthnic_GetObjByIdEthnicAsync(strIdEthnic);
    if (objRsEthnic != null) {
      localStorage.setItem(strKey, JSON.stringify(objRsEthnic));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objRsEthnic;
    }
    return objRsEthnic;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdEthnic,
      rsEthnic_ConstructorName,
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
 * @param objRsEthnic:所给的对象
 * @returns 对象
 */
export async function RsEthnic_UpdateObjInLstCache(objRsEthnic: clsRsEthnicEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrRsEthnicObjLstCache = await RsEthnic_GetObjLstCache();
    const obj = arrRsEthnicObjLstCache.find((x) => x.idEthnic == objRsEthnic.idEthnic);
    if (obj != null) {
      objRsEthnic.idEthnic = obj.idEthnic;
      ObjectAssign(obj, objRsEthnic);
    } else {
      arrRsEthnicObjLstCache.push(objRsEthnic);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      rsEthnic_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdEthnic:所给的关键字
 * @returns 对象
 */
export async function RsEthnic_GetNameByIdEthnicCache(strIdEthnic: string) {
  if (IsNullOrEmpty(strIdEthnic) == true) {
    const strMsg = Format('参数:[strIdEthnic]不能为空!(In clsRsEthnicWApi.GetNameByIdEthnicCache)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdEthnic.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdEthnic]的长度:[{0}]不正确!(clsRsEthnicWApi.GetNameByIdEthnicCache)',
      strIdEthnic.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrRsEthnicObjLstCache = await RsEthnic_GetObjLstCache();
  if (arrRsEthnicObjLstCache == null) return '';
  try {
    const arrRsEthnicSel = arrRsEthnicObjLstCache.filter((x) => x.idEthnic == strIdEthnic);
    let objRsEthnic: clsRsEthnicEN;
    if (arrRsEthnicSel.length > 0) {
      objRsEthnic = arrRsEthnicSel[0];
      return objRsEthnic.ethnicName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdEthnic,
    );
    console.error(strMsg);
    alert(strMsg);
  }
  return '';
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
 * @param strInFldName:输入字段名
 * @param strOutFldName:输出字段名
 * @param strInValue:输入字段值
 * @returns 返回一个输出字段值
 */
export async function RsEthnic_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsRsEthnicEN.con_IdEthnic) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsRsEthnicEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsRsEthnicEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdEthnic = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objRsEthnic = await RsEthnic_GetObjByIdEthnicCache(strIdEthnic);
  if (objRsEthnic == null) return '';
  if (objRsEthnic.GetFldValue(strOutFldName) == null) return '';
  return objRsEthnic.GetFldValue(strOutFldName).toString();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function RsEthnic_SortFunDefa(a: clsRsEthnicEN, b: clsRsEthnicEN): number {
  return a.idEthnic.localeCompare(b.idEthnic);
}
/**
 * 排序函数。根据表对象中随机两个字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFun)
 * @param  a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function RsEthnic_SortFunDefa2Fld(a: clsRsEthnicEN, b: clsRsEthnicEN): number {
  if (a.ethnicId == b.ethnicId) return a.ethnicName.localeCompare(b.ethnicName);
  else return a.ethnicId.localeCompare(b.ethnicId);
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function RsEthnic_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsRsEthnicEN.con_IdEthnic:
        return (a: clsRsEthnicEN, b: clsRsEthnicEN) => {
          return a.idEthnic.localeCompare(b.idEthnic);
        };
      case clsRsEthnicEN.con_EthnicId:
        return (a: clsRsEthnicEN, b: clsRsEthnicEN) => {
          return a.ethnicId.localeCompare(b.ethnicId);
        };
      case clsRsEthnicEN.con_EthnicName:
        return (a: clsRsEthnicEN, b: clsRsEthnicEN) => {
          return a.ethnicName.localeCompare(b.ethnicName);
        };
      case clsRsEthnicEN.con_ModifyDate:
        return (a: clsRsEthnicEN, b: clsRsEthnicEN) => {
          if (a.modifyDate == null) return -1;
          if (b.modifyDate == null) return 1;
          return a.modifyDate.localeCompare(b.modifyDate);
        };
      case clsRsEthnicEN.con_ModifyUserId:
        return (a: clsRsEthnicEN, b: clsRsEthnicEN) => {
          if (a.modifyUserId == null) return -1;
          if (b.modifyUserId == null) return 1;
          return a.modifyUserId.localeCompare(b.modifyUserId);
        };
      case clsRsEthnicEN.con_Memo:
        return (a: clsRsEthnicEN, b: clsRsEthnicEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[RsEthnic]中不存在!(in ${rsEthnic_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsRsEthnicEN.con_IdEthnic:
        return (a: clsRsEthnicEN, b: clsRsEthnicEN) => {
          return b.idEthnic.localeCompare(a.idEthnic);
        };
      case clsRsEthnicEN.con_EthnicId:
        return (a: clsRsEthnicEN, b: clsRsEthnicEN) => {
          return b.ethnicId.localeCompare(a.ethnicId);
        };
      case clsRsEthnicEN.con_EthnicName:
        return (a: clsRsEthnicEN, b: clsRsEthnicEN) => {
          return b.ethnicName.localeCompare(a.ethnicName);
        };
      case clsRsEthnicEN.con_ModifyDate:
        return (a: clsRsEthnicEN, b: clsRsEthnicEN) => {
          if (b.modifyDate == null) return -1;
          if (a.modifyDate == null) return 1;
          return b.modifyDate.localeCompare(a.modifyDate);
        };
      case clsRsEthnicEN.con_ModifyUserId:
        return (a: clsRsEthnicEN, b: clsRsEthnicEN) => {
          if (b.modifyUserId == null) return -1;
          if (a.modifyUserId == null) return 1;
          return b.modifyUserId.localeCompare(a.modifyUserId);
        };
      case clsRsEthnicEN.con_Memo:
        return (a: clsRsEthnicEN, b: clsRsEthnicEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[RsEthnic]中不存在!(in ${rsEthnic_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较,返回是否相等
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function RsEthnic_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsRsEthnicEN.con_IdEthnic:
      return (obj: clsRsEthnicEN) => {
        return obj.idEthnic === value;
      };
    case clsRsEthnicEN.con_EthnicId:
      return (obj: clsRsEthnicEN) => {
        return obj.ethnicId === value;
      };
    case clsRsEthnicEN.con_EthnicName:
      return (obj: clsRsEthnicEN) => {
        return obj.ethnicName === value;
      };
    case clsRsEthnicEN.con_ModifyDate:
      return (obj: clsRsEthnicEN) => {
        return obj.modifyDate === value;
      };
    case clsRsEthnicEN.con_ModifyUserId:
      return (obj: clsRsEthnicEN) => {
        return obj.modifyUserId === value;
      };
    case clsRsEthnicEN.con_Memo:
      return (obj: clsRsEthnicEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[RsEthnic]中不存在!(in ${rsEthnic_ConstructorName}.${strThisFuncName})`;
      console.error(strMsg);
      break;
  }
}

/**
 * 映射函数。根据表映射把输入字段值,映射成输出字段值
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funcKey)
 * @param strInFldName:输入字段名
 * @param strInValue:输入字段值
 * @param strComparisonOp:比较操作符
 * @returns 返回一个关键字值列表
 */
export async function RsEthnic_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsRsEthnicEN.con_IdEthnic) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrRsEthnic = await RsEthnic_GetObjLstCache();
  if (arrRsEthnic == null) return [];
  let arrRsEthnicSel = arrRsEthnic;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrRsEthnicSel = arrRsEthnicSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrRsEthnicSel = arrRsEthnicSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrRsEthnicSel = arrRsEthnicSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrRsEthnicSel.length == 0) return [];
  return arrRsEthnicSel.map((x) => x.idEthnic);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function RsEthnic_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
export async function RsEthnic_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
export async function RsEthnic_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsRsEthnicEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

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
      const objRsEthnic = RsEthnic_GetObjFromJsonObj(returnObj);
      return objRsEthnic;
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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
export async function RsEthnic_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRsEthnicEN._CurrTabName;
  if (IsNullOrEmpty(clsRsEthnicEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRsEthnicEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrRsEthnicExObjLstCache: Array<clsRsEthnicEN> = CacheHelper.Get(strKey);
    const arrRsEthnicObjLstT = RsEthnic_GetObjLstByJSONObjLst(arrRsEthnicExObjLstCache);
    return arrRsEthnicObjLstT;
  }
  try {
    const arrRsEthnicExObjLst = await RsEthnic_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrRsEthnicExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRsEthnicExObjLst.length,
    );
    console.log(strInfo);
    return arrRsEthnicExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rsEthnic_ConstructorName,
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
export async function RsEthnic_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRsEthnicEN._CurrTabName;
  if (IsNullOrEmpty(clsRsEthnicEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRsEthnicEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrRsEthnicExObjLstCache: Array<clsRsEthnicEN> = JSON.parse(strTempObjLst);
    const arrRsEthnicObjLstT = RsEthnic_GetObjLstByJSONObjLst(arrRsEthnicExObjLstCache);
    return arrRsEthnicObjLstT;
  }
  try {
    const arrRsEthnicExObjLst = await RsEthnic_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrRsEthnicExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRsEthnicExObjLst.length,
    );
    console.log(strInfo);
    return arrRsEthnicExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rsEthnic_ConstructorName,
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
export async function RsEthnic_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsRsEthnicEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrRsEthnicObjLstCache: Array<clsRsEthnicEN> = JSON.parse(strTempObjLst);
    return arrRsEthnicObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function RsEthnic_GetObjLstAsync(strWhereCond: string): Promise<Array<clsRsEthnicEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

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
          rsEthnic_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RsEthnic_GetObjLstByJSONObjLst(returnObjLst);
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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
export async function RsEthnic_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsRsEthnicEN._CurrTabName;
  if (IsNullOrEmpty(clsRsEthnicEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsRsEthnicEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrRsEthnicExObjLstCache: Array<clsRsEthnicEN> = JSON.parse(strTempObjLst);
    const arrRsEthnicObjLstT = RsEthnic_GetObjLstByJSONObjLst(arrRsEthnicExObjLstCache);
    return arrRsEthnicObjLstT;
  }
  try {
    const arrRsEthnicExObjLst = await RsEthnic_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrRsEthnicExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrRsEthnicExObjLst.length,
    );
    console.log(strInfo);
    return arrRsEthnicExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      rsEthnic_ConstructorName,
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
export async function RsEthnic_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsRsEthnicEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrRsEthnicObjLstCache: Array<clsRsEthnicEN> = JSON.parse(strTempObjLst);
    return arrRsEthnicObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function RsEthnic_GetObjLstCache(): Promise<Array<clsRsEthnicEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrRsEthnicObjLstCache;
  switch (clsRsEthnicEN.CacheModeId) {
    case '04': //sessionStorage
      arrRsEthnicObjLstCache = await RsEthnic_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrRsEthnicObjLstCache = await RsEthnic_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrRsEthnicObjLstCache = await RsEthnic_GetObjLstClientCache();
      break;
    default:
      arrRsEthnicObjLstCache = await RsEthnic_GetObjLstClientCache();
      break;
  }
  return arrRsEthnicObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function RsEthnic_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrRsEthnicObjLstCache;
  switch (clsRsEthnicEN.CacheModeId) {
    case '04': //sessionStorage
      arrRsEthnicObjLstCache = await RsEthnic_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrRsEthnicObjLstCache = await RsEthnic_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrRsEthnicObjLstCache = null;
      break;
    default:
      arrRsEthnicObjLstCache = null;
      break;
  }
  return arrRsEthnicObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdEthnicCond:条件对象
 * @returns 对象列表子集
 */
export async function RsEthnic_GetSubObjLstCache(objRsEthnicCond: clsRsEthnicEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrRsEthnicObjLstCache = await RsEthnic_GetObjLstCache();
  let arrRsEthnicSel = arrRsEthnicObjLstCache;
  if (objRsEthnicCond.sfFldComparisonOp == null || objRsEthnicCond.sfFldComparisonOp == '')
    return arrRsEthnicSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRsEthnicCond.sfFldComparisonOp,
  );
  //console.log("clsRsEthnicWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRsEthnicCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRsEthnicCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrRsEthnicSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objRsEthnicCond),
      rsEthnic_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRsEthnicEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdEthnic:关键字列表
 * @returns 对象列表
 **/
export async function RsEthnic_GetObjLstByIdEthnicLstAsync(
  arrIdEthnic: Array<string>,
): Promise<Array<clsRsEthnicEN>> {
  const strThisFuncName = 'GetObjLstByIdEthnicLstAsync';
  const strAction = 'GetObjLstByIdEthnicLst';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdEthnic, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          rsEthnic_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RsEthnic_GetObjLstByJSONObjLst(returnObjLst);
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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
 * @param arrstrIdEthnicLst:关键字列表
 * @returns 对象列表
 */
export async function RsEthnic_GetObjLstByIdEthnicLstCache(arrIdEthnicLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByIdEthnicLstCache';
  try {
    const arrRsEthnicObjLstCache = await RsEthnic_GetObjLstCache();
    const arrRsEthnicSel = arrRsEthnicObjLstCache.filter(
      (x) => arrIdEthnicLst.indexOf(x.idEthnic) > -1,
    );
    return arrRsEthnicSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdEthnicLst.join(','),
      rsEthnic_ConstructorName,
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
export async function RsEthnic_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsRsEthnicEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

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
          rsEthnic_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RsEthnic_GetObjLstByJSONObjLst(returnObjLst);
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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
export async function RsEthnic_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsRsEthnicEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

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
          rsEthnic_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RsEthnic_GetObjLstByJSONObjLst(returnObjLst);
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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
export async function RsEthnic_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsRsEthnicEN>();
  const arrRsEthnicObjLstCache = await RsEthnic_GetObjLstCache();
  if (arrRsEthnicObjLstCache.length == 0) return arrRsEthnicObjLstCache;
  let arrRsEthnicSel = arrRsEthnicObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objRsEthnicCond = new clsRsEthnicEN();
  ObjectAssign(objRsEthnicCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsRsEthnicWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRsEthnicCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrRsEthnicSel.length == 0) return arrRsEthnicSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrRsEthnicSel = arrRsEthnicSel.sort(RsEthnic_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrRsEthnicSel = arrRsEthnicSel.sort(objPagerPara.sortFun);
    }
    arrRsEthnicSel = arrRsEthnicSel.slice(intStart, intEnd);
    return arrRsEthnicSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      rsEthnic_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRsEthnicEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function RsEthnic_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsRsEthnicEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsRsEthnicEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

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
          rsEthnic_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = RsEthnic_GetObjLstByJSONObjLst(returnObjLst);
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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
 * @param strIdEthnic:关键字
 * @returns 获取删除的结果
 **/
export async function RsEthnic_DelRecordAsync(strIdEthnic: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdEthnic);

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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
 * @param arrIdEthnic:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function RsEthnic_DelRsEthnicsAsync(arrIdEthnic: Array<string>): Promise<number> {
  const strThisFuncName = 'DelRsEthnicsAsync';
  const strAction = 'DelRsEthnics';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdEthnic, config);
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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
export async function RsEthnic_DelRsEthnicsByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelRsEthnicsByCondAsync';
  const strAction = 'DelRsEthnicsByCond';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
 * @param objRsEthnicEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RsEthnic_AddNewRecordAsync(objRsEthnicEN: clsRsEthnicEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objRsEthnicEN.idEthnic === null || objRsEthnicEN.idEthnic === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objRsEthnicEN);
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRsEthnicEN, config);
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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
 * @param objRsEthnicEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function RsEthnic_AddNewRecordWithMaxIdAsync(
  objRsEthnicEN: clsRsEthnicEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRsEthnicEN, config);
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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
 * @param objRsEthnicEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function RsEthnic_AddNewRecordWithReturnKeyAsync(
  objRsEthnicEN: clsRsEthnicEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRsEthnicEN, config);
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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
 * @param objRsEthnicEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function RsEthnic_UpdateRecordAsync(objRsEthnicEN: clsRsEthnicEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objRsEthnicEN.sfUpdFldSetStr === undefined ||
    objRsEthnicEN.sfUpdFldSetStr === null ||
    objRsEthnicEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objRsEthnicEN.idEthnic,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRsEthnicEN, config);
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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
 * @param objRsEthnicEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function RsEthnic_UpdateWithConditionAsync(
  objRsEthnicEN: clsRsEthnicEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objRsEthnicEN.sfUpdFldSetStr === undefined ||
    objRsEthnicEN.sfUpdFldSetStr === null ||
    objRsEthnicEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objRsEthnicEN.idEthnic,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);
  objRsEthnicEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objRsEthnicEN, config);
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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
 * @param objstrIdEthnicCond:条件对象
 * @returns 对象列表子集
 */
export async function RsEthnic_IsExistRecordCache(objRsEthnicCond: clsRsEthnicEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrRsEthnicObjLstCache = await RsEthnic_GetObjLstCache();
  if (arrRsEthnicObjLstCache == null) return false;
  let arrRsEthnicSel = arrRsEthnicObjLstCache;
  if (objRsEthnicCond.sfFldComparisonOp == null || objRsEthnicCond.sfFldComparisonOp == '')
    return arrRsEthnicSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRsEthnicCond.sfFldComparisonOp,
  );
  //console.log("clsRsEthnicWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRsEthnicCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRsEthnicCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrRsEthnicSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objRsEthnicCond),
      rsEthnic_ConstructorName,
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
export async function RsEthnic_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
 * @param strIdEthnic:所给的关键字
 * @returns 对象
 */
export async function RsEthnic_IsExistCache(strIdEthnic: string) {
  const strThisFuncName = 'IsExistCache';
  const arrRsEthnicObjLstCache = await RsEthnic_GetObjLstCache();
  if (arrRsEthnicObjLstCache == null) return false;
  try {
    const arrRsEthnicSel = arrRsEthnicObjLstCache.filter((x) => x.idEthnic == strIdEthnic);
    if (arrRsEthnicSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdEthnic,
      rsEthnic_ConstructorName,
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
 * @param strIdEthnic:关键字
 * @returns 是否存在?存在返回True
 **/
export async function RsEthnic_IsExistAsync(strIdEthnic: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdEthnic,
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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
export async function RsEthnic_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
 * @param objRsEthnicCond:条件对象
 * @returns 对象列表记录数
 */
export async function RsEthnic_GetRecCountByCondCache(objRsEthnicCond: clsRsEthnicEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrRsEthnicObjLstCache = await RsEthnic_GetObjLstCache();
  if (arrRsEthnicObjLstCache == null) return 0;
  let arrRsEthnicSel = arrRsEthnicObjLstCache;
  if (objRsEthnicCond.sfFldComparisonOp == null || objRsEthnicCond.sfFldComparisonOp == '')
    return arrRsEthnicSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objRsEthnicCond.sfFldComparisonOp,
  );
  //console.log("clsRsEthnicWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objRsEthnicCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRsEthnicCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrRsEthnicSel = arrRsEthnicSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRsEthnicSel = arrRsEthnicSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrRsEthnicSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objRsEthnicCond),
      rsEthnic_ConstructorName,
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
export async function RsEthnic_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(rsEthnic_Controller, strAction);

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
        rsEthnic_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        rsEthnic_ConstructorName,
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
export function RsEthnic_GetWebApiUrl(strController: string, strAction: string): string {
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
export function RsEthnic_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');
  console.trace(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsRsEthnicEN._CurrTabName;
  switch (clsRsEthnicEN.CacheModeId) {
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
export function RsEthnic_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsRsEthnicEN._CurrTabName;
    switch (clsRsEthnicEN.CacheModeId) {
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
    console.trace(strMsg);
  } else {
    const strMsg = Format('刷新缓存已经关闭。');
    console.trace(strMsg);
  }
}

/**
 * 绑定基于Web的下拉框,在某一层下的下拉框
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunctionInDiv)
 * @param objDDL:需要绑定当前表的下拉框

*/
export async function RsEthnic_BindDdl_IdEthnicInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_IdEthnicInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_IdEthnicInDivCache");
  const arrObjLstSel = await RsEthnic_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsRsEthnicEN.con_IdEthnic,
    clsRsEthnicEN.con_EthnicName,
    '民族',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function RsEthnic_CheckPropertyNew(pobjRsEthnicEN: clsRsEthnicEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjRsEthnicEN.ethnicId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[民族Id]不能为空(In 民族)!(clsRsEthnicBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjRsEthnicEN.ethnicName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[民族名称]不能为空(In 民族)!(clsRsEthnicBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjRsEthnicEN.idEthnic) == false && GetStrLen(pobjRsEthnicEN.idEthnic) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[民族流水号(idEthnic)]的长度不能超过4(In 民族(RsEthnic))!值:$(pobjRsEthnicEN.idEthnic)(clsRsEthnicBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjRsEthnicEN.ethnicId) == false && GetStrLen(pobjRsEthnicEN.ethnicId) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[民族Id(ethnicId)]的长度不能超过4(In 民族(RsEthnic))!值:$(pobjRsEthnicEN.ethnicId)(clsRsEthnicBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.ethnicName) == false &&
    GetStrLen(pobjRsEthnicEN.ethnicName) > 30
  ) {
    throw new Error(
      '(errid:Watl000413)字段[民族名称(ethnicName)]的长度不能超过30(In 民族(RsEthnic))!值:$(pobjRsEthnicEN.ethnicName)(clsRsEthnicBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.modifyDate) == false &&
    GetStrLen(pobjRsEthnicEN.modifyDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 民族(RsEthnic))!值:$(pobjRsEthnicEN.modifyDate)(clsRsEthnicBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.modifyUserId) == false &&
    GetStrLen(pobjRsEthnicEN.modifyUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 民族(RsEthnic))!值:$(pobjRsEthnicEN.modifyUserId)(clsRsEthnicBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjRsEthnicEN.memo) == false && GetStrLen(pobjRsEthnicEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 民族(RsEthnic))!值:$(pobjRsEthnicEN.memo)(clsRsEthnicBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjRsEthnicEN.idEthnic) == false &&
    undefined !== pobjRsEthnicEN.idEthnic &&
    tzDataType.isString(pobjRsEthnicEN.idEthnic) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[民族流水号(idEthnic)]的值:[$(pobjRsEthnicEN.idEthnic)], 非法,应该为字符型(In 民族(RsEthnic))!(clsRsEthnicBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.ethnicId) == false &&
    undefined !== pobjRsEthnicEN.ethnicId &&
    tzDataType.isString(pobjRsEthnicEN.ethnicId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[民族Id(ethnicId)]的值:[$(pobjRsEthnicEN.ethnicId)], 非法,应该为字符型(In 民族(RsEthnic))!(clsRsEthnicBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.ethnicName) == false &&
    undefined !== pobjRsEthnicEN.ethnicName &&
    tzDataType.isString(pobjRsEthnicEN.ethnicName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[民族名称(ethnicName)]的值:[$(pobjRsEthnicEN.ethnicName)], 非法,应该为字符型(In 民族(RsEthnic))!(clsRsEthnicBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.modifyDate) == false &&
    undefined !== pobjRsEthnicEN.modifyDate &&
    tzDataType.isString(pobjRsEthnicEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjRsEthnicEN.modifyDate)], 非法,应该为字符型(In 民族(RsEthnic))!(clsRsEthnicBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.modifyUserId) == false &&
    undefined !== pobjRsEthnicEN.modifyUserId &&
    tzDataType.isString(pobjRsEthnicEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjRsEthnicEN.modifyUserId)], 非法,应该为字符型(In 民族(RsEthnic))!(clsRsEthnicBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.memo) == false &&
    undefined !== pobjRsEthnicEN.memo &&
    tzDataType.isString(pobjRsEthnicEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjRsEthnicEN.memo)], 非法,应该为字符型(In 民族(RsEthnic))!(clsRsEthnicBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function RsEthnic_CheckProperty4Update(pobjRsEthnicEN: clsRsEthnicEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (IsNullOrEmpty(pobjRsEthnicEN.idEthnic) == false && GetStrLen(pobjRsEthnicEN.idEthnic) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[民族流水号(idEthnic)]的长度不能超过4(In 民族(RsEthnic))!值:$(pobjRsEthnicEN.idEthnic)(clsRsEthnicBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjRsEthnicEN.ethnicId) == false && GetStrLen(pobjRsEthnicEN.ethnicId) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[民族Id(ethnicId)]的长度不能超过4(In 民族(RsEthnic))!值:$(pobjRsEthnicEN.ethnicId)(clsRsEthnicBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.ethnicName) == false &&
    GetStrLen(pobjRsEthnicEN.ethnicName) > 30
  ) {
    throw new Error(
      '(errid:Watl000416)字段[民族名称(ethnicName)]的长度不能超过30(In 民族(RsEthnic))!值:$(pobjRsEthnicEN.ethnicName)(clsRsEthnicBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.modifyDate) == false &&
    GetStrLen(pobjRsEthnicEN.modifyDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 民族(RsEthnic))!值:$(pobjRsEthnicEN.modifyDate)(clsRsEthnicBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.modifyUserId) == false &&
    GetStrLen(pobjRsEthnicEN.modifyUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 民族(RsEthnic))!值:$(pobjRsEthnicEN.modifyUserId)(clsRsEthnicBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjRsEthnicEN.memo) == false && GetStrLen(pobjRsEthnicEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 民族(RsEthnic))!值:$(pobjRsEthnicEN.memo)(clsRsEthnicBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjRsEthnicEN.idEthnic) == false &&
    undefined !== pobjRsEthnicEN.idEthnic &&
    tzDataType.isString(pobjRsEthnicEN.idEthnic) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[民族流水号(idEthnic)]的值:[$(pobjRsEthnicEN.idEthnic)], 非法,应该为字符型(In 民族(RsEthnic))!(clsRsEthnicBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.ethnicId) == false &&
    undefined !== pobjRsEthnicEN.ethnicId &&
    tzDataType.isString(pobjRsEthnicEN.ethnicId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[民族Id(ethnicId)]的值:[$(pobjRsEthnicEN.ethnicId)], 非法,应该为字符型(In 民族(RsEthnic))!(clsRsEthnicBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.ethnicName) == false &&
    undefined !== pobjRsEthnicEN.ethnicName &&
    tzDataType.isString(pobjRsEthnicEN.ethnicName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[民族名称(ethnicName)]的值:[$(pobjRsEthnicEN.ethnicName)], 非法,应该为字符型(In 民族(RsEthnic))!(clsRsEthnicBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.modifyDate) == false &&
    undefined !== pobjRsEthnicEN.modifyDate &&
    tzDataType.isString(pobjRsEthnicEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjRsEthnicEN.modifyDate)], 非法,应该为字符型(In 民族(RsEthnic))!(clsRsEthnicBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.modifyUserId) == false &&
    undefined !== pobjRsEthnicEN.modifyUserId &&
    tzDataType.isString(pobjRsEthnicEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjRsEthnicEN.modifyUserId)], 非法,应该为字符型(In 民族(RsEthnic))!(clsRsEthnicBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjRsEthnicEN.memo) == false &&
    undefined !== pobjRsEthnicEN.memo &&
    tzDataType.isString(pobjRsEthnicEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjRsEthnicEN.memo)], 非法,应该为字符型(In 民族(RsEthnic))!(clsRsEthnicBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjRsEthnicEN.idEthnic) === true) {
    throw new Error(
      '(errid:Watl000064)字段[民族流水号]不能为空(In 民族)!(clsRsEthnicBL:CheckProperty4Update)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!
}

/**
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function RsEthnic_GetJSONStrByObj(pobjRsEthnicEN: clsRsEthnicEN): string {
  pobjRsEthnicEN.sfUpdFldSetStr = pobjRsEthnicEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjRsEthnicEN);
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
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象列表
 */
export function RsEthnic_GetObjLstByJSONStr(strJSON: string): Array<clsRsEthnicEN> {
  let arrRsEthnicObjLst = new Array<clsRsEthnicEN>();
  if (strJSON === '') {
    return arrRsEthnicObjLst;
  }
  try {
    arrRsEthnicObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrRsEthnicObjLst;
  }
  return arrRsEthnicObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrRsEthnicObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function RsEthnic_GetObjLstByJSONObjLst(
  arrRsEthnicObjLstS: Array<clsRsEthnicEN>,
): Array<clsRsEthnicEN> {
  const arrRsEthnicObjLst = new Array<clsRsEthnicEN>();
  for (const objInFor of arrRsEthnicObjLstS) {
    const obj1 = RsEthnic_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrRsEthnicObjLst.push(obj1);
  }
  return arrRsEthnicObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-12-27
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function RsEthnic_GetObjByJSONStr(strJSON: string): clsRsEthnicEN {
  let pobjRsEthnicEN = new clsRsEthnicEN();
  if (strJSON === '') {
    return pobjRsEthnicEN;
  }
  try {
    pobjRsEthnicEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjRsEthnicEN;
  }
  return pobjRsEthnicEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function RsEthnic_GetCombineCondition(objRsEthnicCond: clsRsEthnicEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objRsEthnicCond.dicFldComparisonOp,
      clsRsEthnicEN.con_IdEthnic,
    ) == true
  ) {
    const strComparisonOpIdEthnic: string =
      objRsEthnicCond.dicFldComparisonOp[clsRsEthnicEN.con_IdEthnic];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRsEthnicEN.con_IdEthnic,
      objRsEthnicCond.idEthnic,
      strComparisonOpIdEthnic,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRsEthnicCond.dicFldComparisonOp,
      clsRsEthnicEN.con_EthnicId,
    ) == true
  ) {
    const strComparisonOpEthnicId: string =
      objRsEthnicCond.dicFldComparisonOp[clsRsEthnicEN.con_EthnicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRsEthnicEN.con_EthnicId,
      objRsEthnicCond.ethnicId,
      strComparisonOpEthnicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRsEthnicCond.dicFldComparisonOp,
      clsRsEthnicEN.con_EthnicName,
    ) == true
  ) {
    const strComparisonOpEthnicName: string =
      objRsEthnicCond.dicFldComparisonOp[clsRsEthnicEN.con_EthnicName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRsEthnicEN.con_EthnicName,
      objRsEthnicCond.ethnicName,
      strComparisonOpEthnicName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRsEthnicCond.dicFldComparisonOp,
      clsRsEthnicEN.con_ModifyDate,
    ) == true
  ) {
    const strComparisonOpModifyDate: string =
      objRsEthnicCond.dicFldComparisonOp[clsRsEthnicEN.con_ModifyDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRsEthnicEN.con_ModifyDate,
      objRsEthnicCond.modifyDate,
      strComparisonOpModifyDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRsEthnicCond.dicFldComparisonOp,
      clsRsEthnicEN.con_ModifyUserId,
    ) == true
  ) {
    const strComparisonOpModifyUserId: string =
      objRsEthnicCond.dicFldComparisonOp[clsRsEthnicEN.con_ModifyUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRsEthnicEN.con_ModifyUserId,
      objRsEthnicCond.modifyUserId,
      strComparisonOpModifyUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objRsEthnicCond.dicFldComparisonOp,
      clsRsEthnicEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objRsEthnicCond.dicFldComparisonOp[clsRsEthnicEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsRsEthnicEN.con_Memo,
      objRsEthnicCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objRsEthnicENS:源对象
 * @param objRsEthnicENT:目标对象
 */
export function RsEthnic_CopyObjTo(
  objRsEthnicENS: clsRsEthnicEN,
  objRsEthnicENT: clsRsEthnicEN,
): void {
  objRsEthnicENT.idEthnic = objRsEthnicENS.idEthnic; //民族流水号
  objRsEthnicENT.ethnicId = objRsEthnicENS.ethnicId; //民族Id
  objRsEthnicENT.ethnicName = objRsEthnicENS.ethnicName; //民族名称
  objRsEthnicENT.modifyDate = objRsEthnicENS.modifyDate; //修改日期
  objRsEthnicENT.modifyUserId = objRsEthnicENS.modifyUserId; //修改人
  objRsEthnicENT.memo = objRsEthnicENS.memo; //备注
  objRsEthnicENT.sfUpdFldSetStr = objRsEthnicENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objRsEthnicENS:源对象
 * @param objRsEthnicENT:目标对象
 */
export function RsEthnic_GetObjFromJsonObj(objRsEthnicENS: clsRsEthnicEN): clsRsEthnicEN {
  const objRsEthnicENT: clsRsEthnicEN = new clsRsEthnicEN();
  ObjectAssign(objRsEthnicENT, objRsEthnicENS);
  return objRsEthnicENT;
}
