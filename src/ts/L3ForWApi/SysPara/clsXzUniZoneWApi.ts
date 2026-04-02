/**
 * 类名:clsXzUniZoneWApi
 * 表名:XzUniZone(01120095)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:31
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
 * 校区(XzUniZone)
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
import { clsXzUniZoneEN } from '@/ts/L0Entity/SysPara/clsXzUniZoneEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const xzUniZone_Controller = 'XzUniZoneApi';
export const xzUniZone_ConstructorName = 'xzUniZone';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdUniZone:关键字
 * @returns 对象
 **/
export async function XzUniZone_GetObjByIdUniZoneAsync(
  strIdUniZone: string,
): Promise<clsXzUniZoneEN | null> {
  const strThisFuncName = 'GetObjByIdUniZoneAsync';

  if (IsNullOrEmpty(strIdUniZone) == true) {
    const strMsg = Format(
      '参数:[strIdUniZone]不能为空!(In clsXzUniZoneWApi.GetObjByIdUniZoneAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdUniZone.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdUniZone]的长度:[{0}]不正确!(clsXzUniZoneWApi.GetObjByIdUniZoneAsync)',
      strIdUniZone.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdUniZone';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdUniZone,
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
      const objXzUniZone = XzUniZone_GetObjFromJsonObj(returnObj);
      return objXzUniZone;
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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
 * @param strIdUniZone:所给的关键字
 * @returns 对象
 */
export async function XzUniZone_GetObjByIdUniZoneCache(
  strIdUniZone: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByIdUniZoneCache';

  if (IsNullOrEmpty(strIdUniZone) == true) {
    const strMsg = Format(
      '参数:[strIdUniZone]不能为空!(In clsXzUniZoneWApi.GetObjByIdUniZoneCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdUniZone.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdUniZone]的长度:[{0}]不正确!(clsXzUniZoneWApi.GetObjByIdUniZoneCache)',
      strIdUniZone.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstCache();
  try {
    const arrXzUniZoneSel = arrXzUniZoneObjLstCache.filter((x) => x.idUniZone == strIdUniZone);
    let objXzUniZone: clsXzUniZoneEN;
    if (arrXzUniZoneSel.length > 0) {
      objXzUniZone = arrXzUniZoneSel[0];
      return objXzUniZone;
    } else {
      if (bolTryAsyncOnce == true) {
        const objXzUniZoneConst = await XzUniZone_GetObjByIdUniZoneAsync(strIdUniZone);
        if (objXzUniZoneConst != null) {
          XzUniZone_ReFreshThisCache();
          return objXzUniZoneConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdUniZone,
      xzUniZone_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdUniZone:所给的关键字
 * @returns 对象
 */
export async function XzUniZone_GetObjByIdUniZonelocalStorage(strIdUniZone: string) {
  const strThisFuncName = 'GetObjByIdUniZonelocalStorage';

  if (IsNullOrEmpty(strIdUniZone) == true) {
    const strMsg = Format(
      '参数:[strIdUniZone]不能为空!(In clsXzUniZoneWApi.GetObjByIdUniZonelocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdUniZone.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdUniZone]的长度:[{0}]不正确!(clsXzUniZoneWApi.GetObjByIdUniZonelocalStorage)',
      strIdUniZone.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsXzUniZoneEN._CurrTabName, strIdUniZone);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objXzUniZoneCache: clsXzUniZoneEN = JSON.parse(strTempObj);
    return objXzUniZoneCache;
  }
  try {
    const objXzUniZone = await XzUniZone_GetObjByIdUniZoneAsync(strIdUniZone);
    if (objXzUniZone != null) {
      localStorage.setItem(strKey, JSON.stringify(objXzUniZone));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objXzUniZone;
    }
    return objXzUniZone;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdUniZone,
      xzUniZone_ConstructorName,
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
 * @param objXzUniZone:所给的对象
 * @returns 对象
 */
export async function XzUniZone_UpdateObjInLstCache(objXzUniZone: clsXzUniZoneEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstCache();
    const obj = arrXzUniZoneObjLstCache.find((x) => x.idUniZone == objXzUniZone.idUniZone);
    if (obj != null) {
      objXzUniZone.idUniZone = obj.idUniZone;
      ObjectAssign(obj, objXzUniZone);
    } else {
      arrXzUniZoneObjLstCache.push(objXzUniZone);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      xzUniZone_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdUniZone:所给的关键字
 * @returns 对象
 */
export async function XzUniZone_GetNameByIdUniZoneCache(strIdUniZone: string) {
  if (IsNullOrEmpty(strIdUniZone) == true) {
    const strMsg = Format(
      '参数:[strIdUniZone]不能为空!(In clsXzUniZoneWApi.GetNameByIdUniZoneCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdUniZone.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strIdUniZone]的长度:[{0}]不正确!(clsXzUniZoneWApi.GetNameByIdUniZoneCache)',
      strIdUniZone.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstCache();
  if (arrXzUniZoneObjLstCache == null) return '';
  try {
    const arrXzUniZoneSel = arrXzUniZoneObjLstCache.filter((x) => x.idUniZone == strIdUniZone);
    let objXzUniZone: clsXzUniZoneEN;
    if (arrXzUniZoneSel.length > 0) {
      objXzUniZone = arrXzUniZoneSel[0];
      return objXzUniZone.uniZoneDesc;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdUniZone,
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
export async function XzUniZone_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsXzUniZoneEN.con_IdUniZone) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsXzUniZoneEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsXzUniZoneEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdUniZone = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objXzUniZone = await XzUniZone_GetObjByIdUniZoneCache(strIdUniZone);
  if (objXzUniZone == null) return '';
  if (objXzUniZone.GetFldValue(strOutFldName) == null) return '';
  return objXzUniZone.GetFldValue(strOutFldName).toString();
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
export function XzUniZone_SortFunDefa(a: clsXzUniZoneEN, b: clsXzUniZoneEN): number {
  return a.idUniZone.localeCompare(b.idUniZone);
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
export function XzUniZone_SortFunDefa2Fld(a: clsXzUniZoneEN, b: clsXzUniZoneEN): number {
  if (a.uniZoneID == b.uniZoneID) return a.uniZoneDesc.localeCompare(b.uniZoneDesc);
  else return a.uniZoneID.localeCompare(b.uniZoneID);
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
export function XzUniZone_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsXzUniZoneEN.con_IdUniZone:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          return a.idUniZone.localeCompare(b.idUniZone);
        };
      case clsXzUniZoneEN.con_UniZoneID:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (a.uniZoneID == null) return -1;
          if (b.uniZoneID == null) return 1;
          return a.uniZoneID.localeCompare(b.uniZoneID);
        };
      case clsXzUniZoneEN.con_UniZoneDesc:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (a.uniZoneDesc == null) return -1;
          if (b.uniZoneDesc == null) return 1;
          return a.uniZoneDesc.localeCompare(b.uniZoneDesc);
        };
      case clsXzUniZoneEN.con_UniZoneDescA:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (a.uniZoneDescA == null) return -1;
          if (b.uniZoneDescA == null) return 1;
          return a.uniZoneDescA.localeCompare(b.uniZoneDescA);
        };
      case clsXzUniZoneEN.con_IdSchool:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (a.idSchool == null) return -1;
          if (b.idSchool == null) return 1;
          return a.idSchool.localeCompare(b.idSchool);
        };
      case clsXzUniZoneEN.con_IdUni:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (a.idUni == null) return -1;
          if (b.idUni == null) return 1;
          return a.idUni.localeCompare(b.idUni);
        };
      case clsXzUniZoneEN.con_ModifyUserId:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (a.modifyUserId == null) return -1;
          if (b.modifyUserId == null) return 1;
          return a.modifyUserId.localeCompare(b.modifyUserId);
        };
      case clsXzUniZoneEN.con_ModifyDate:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (a.modifyDate == null) return -1;
          if (b.modifyDate == null) return 1;
          return a.modifyDate.localeCompare(b.modifyDate);
        };
      case clsXzUniZoneEN.con_Memo:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzUniZone]中不存在!(in ${xzUniZone_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsXzUniZoneEN.con_IdUniZone:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          return b.idUniZone.localeCompare(a.idUniZone);
        };
      case clsXzUniZoneEN.con_UniZoneID:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (b.uniZoneID == null) return -1;
          if (a.uniZoneID == null) return 1;
          return b.uniZoneID.localeCompare(a.uniZoneID);
        };
      case clsXzUniZoneEN.con_UniZoneDesc:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (b.uniZoneDesc == null) return -1;
          if (a.uniZoneDesc == null) return 1;
          return b.uniZoneDesc.localeCompare(a.uniZoneDesc);
        };
      case clsXzUniZoneEN.con_UniZoneDescA:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (b.uniZoneDescA == null) return -1;
          if (a.uniZoneDescA == null) return 1;
          return b.uniZoneDescA.localeCompare(a.uniZoneDescA);
        };
      case clsXzUniZoneEN.con_IdSchool:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (b.idSchool == null) return -1;
          if (a.idSchool == null) return 1;
          return b.idSchool.localeCompare(a.idSchool);
        };
      case clsXzUniZoneEN.con_IdUni:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (b.idUni == null) return -1;
          if (a.idUni == null) return 1;
          return b.idUni.localeCompare(a.idUni);
        };
      case clsXzUniZoneEN.con_ModifyUserId:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (b.modifyUserId == null) return -1;
          if (a.modifyUserId == null) return 1;
          return b.modifyUserId.localeCompare(a.modifyUserId);
        };
      case clsXzUniZoneEN.con_ModifyDate:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (b.modifyDate == null) return -1;
          if (a.modifyDate == null) return 1;
          return b.modifyDate.localeCompare(a.modifyDate);
        };
      case clsXzUniZoneEN.con_Memo:
        return (a: clsXzUniZoneEN, b: clsXzUniZoneEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzUniZone]中不存在!(in ${xzUniZone_ConstructorName}.${strThisFuncName})`;
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
export async function XzUniZone_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsXzUniZoneEN.con_IdUniZone:
      return (obj: clsXzUniZoneEN) => {
        return obj.idUniZone === value;
      };
    case clsXzUniZoneEN.con_UniZoneID:
      return (obj: clsXzUniZoneEN) => {
        return obj.uniZoneID === value;
      };
    case clsXzUniZoneEN.con_UniZoneDesc:
      return (obj: clsXzUniZoneEN) => {
        return obj.uniZoneDesc === value;
      };
    case clsXzUniZoneEN.con_UniZoneDescA:
      return (obj: clsXzUniZoneEN) => {
        return obj.uniZoneDescA === value;
      };
    case clsXzUniZoneEN.con_IdSchool:
      return (obj: clsXzUniZoneEN) => {
        return obj.idSchool === value;
      };
    case clsXzUniZoneEN.con_IdUni:
      return (obj: clsXzUniZoneEN) => {
        return obj.idUni === value;
      };
    case clsXzUniZoneEN.con_ModifyUserId:
      return (obj: clsXzUniZoneEN) => {
        return obj.modifyUserId === value;
      };
    case clsXzUniZoneEN.con_ModifyDate:
      return (obj: clsXzUniZoneEN) => {
        return obj.modifyDate === value;
      };
    case clsXzUniZoneEN.con_Memo:
      return (obj: clsXzUniZoneEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[XzUniZone]中不存在!(in ${xzUniZone_ConstructorName}.${strThisFuncName})`;
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
export async function XzUniZone_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsXzUniZoneEN.con_IdUniZone) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrXzUniZone = await XzUniZone_GetObjLstCache();
  if (arrXzUniZone == null) return [];
  let arrXzUniZoneSel = arrXzUniZone;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrXzUniZoneSel = arrXzUniZoneSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrXzUniZoneSel = arrXzUniZoneSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrXzUniZoneSel = arrXzUniZoneSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrXzUniZoneSel = arrXzUniZoneSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrXzUniZoneSel = arrXzUniZoneSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrXzUniZoneSel = arrXzUniZoneSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrXzUniZoneSel = arrXzUniZoneSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrXzUniZoneSel = arrXzUniZoneSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrXzUniZoneSel.length == 0) return [];
  return arrXzUniZoneSel.map((x) => x.idUniZone);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzUniZone_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
export async function XzUniZone_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
export async function XzUniZone_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsXzUniZoneEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

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
      const objXzUniZone = XzUniZone_GetObjFromJsonObj(returnObj);
      return objXzUniZone;
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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
export async function XzUniZone_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzUniZoneEN._CurrTabName;
  if (IsNullOrEmpty(clsXzUniZoneEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzUniZoneEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrXzUniZoneExObjLstCache: Array<clsXzUniZoneEN> = CacheHelper.Get(strKey);
    const arrXzUniZoneObjLstT = XzUniZone_GetObjLstByJSONObjLst(arrXzUniZoneExObjLstCache);
    return arrXzUniZoneObjLstT;
  }
  try {
    const arrXzUniZoneExObjLst = await XzUniZone_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrXzUniZoneExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzUniZoneExObjLst.length,
    );
    console.log(strInfo);
    return arrXzUniZoneExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzUniZone_ConstructorName,
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
export async function XzUniZone_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzUniZoneEN._CurrTabName;
  if (IsNullOrEmpty(clsXzUniZoneEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzUniZoneEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzUniZoneExObjLstCache: Array<clsXzUniZoneEN> = JSON.parse(strTempObjLst);
    const arrXzUniZoneObjLstT = XzUniZone_GetObjLstByJSONObjLst(arrXzUniZoneExObjLstCache);
    return arrXzUniZoneObjLstT;
  }
  try {
    const arrXzUniZoneExObjLst = await XzUniZone_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrXzUniZoneExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzUniZoneExObjLst.length,
    );
    console.log(strInfo);
    return arrXzUniZoneExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzUniZone_ConstructorName,
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
export async function XzUniZone_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzUniZoneEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzUniZoneObjLstCache: Array<clsXzUniZoneEN> = JSON.parse(strTempObjLst);
    return arrXzUniZoneObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function XzUniZone_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsXzUniZoneEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

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
          xzUniZone_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzUniZone_GetObjLstByJSONObjLst(returnObjLst);
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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
export async function XzUniZone_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzUniZoneEN._CurrTabName;
  if (IsNullOrEmpty(clsXzUniZoneEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzUniZoneEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzUniZoneExObjLstCache: Array<clsXzUniZoneEN> = JSON.parse(strTempObjLst);
    const arrXzUniZoneObjLstT = XzUniZone_GetObjLstByJSONObjLst(arrXzUniZoneExObjLstCache);
    return arrXzUniZoneObjLstT;
  }
  try {
    const arrXzUniZoneExObjLst = await XzUniZone_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrXzUniZoneExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzUniZoneExObjLst.length,
    );
    console.log(strInfo);
    return arrXzUniZoneExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzUniZone_ConstructorName,
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
export async function XzUniZone_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzUniZoneEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzUniZoneObjLstCache: Array<clsXzUniZoneEN> = JSON.parse(strTempObjLst);
    return arrXzUniZoneObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzUniZone_GetObjLstCache(): Promise<Array<clsXzUniZoneEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrXzUniZoneObjLstCache;
  switch (clsXzUniZoneEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstClientCache();
      break;
    default:
      arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstClientCache();
      break;
  }
  return arrXzUniZoneObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzUniZone_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrXzUniZoneObjLstCache;
  switch (clsXzUniZoneEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrXzUniZoneObjLstCache = null;
      break;
    default:
      arrXzUniZoneObjLstCache = null;
      break;
  }
  return arrXzUniZoneObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdUniZoneCond:条件对象
 * @returns 对象列表子集
 */
export async function XzUniZone_GetSubObjLstCache(objXzUniZoneCond: clsXzUniZoneEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstCache();
  let arrXzUniZoneSel = arrXzUniZoneObjLstCache;
  if (objXzUniZoneCond.sfFldComparisonOp == null || objXzUniZoneCond.sfFldComparisonOp == '')
    return arrXzUniZoneSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzUniZoneCond.sfFldComparisonOp,
  );
  //console.log("clsXzUniZoneWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzUniZoneCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzUniZoneCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrXzUniZoneSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzUniZoneCond),
      xzUniZone_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzUniZoneEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdUniZone:关键字列表
 * @returns 对象列表
 **/
export async function XzUniZone_GetObjLstByIdUniZoneLstAsync(
  arrIdUniZone: Array<string>,
): Promise<Array<clsXzUniZoneEN>> {
  const strThisFuncName = 'GetObjLstByIdUniZoneLstAsync';
  const strAction = 'GetObjLstByIdUniZoneLst';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdUniZone, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          xzUniZone_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzUniZone_GetObjLstByJSONObjLst(returnObjLst);
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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
 * @param arrstrIdUniZoneLst:关键字列表
 * @returns 对象列表
 */
export async function XzUniZone_GetObjLstByIdUniZoneLstCache(arrIdUniZoneLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByIdUniZoneLstCache';
  try {
    const arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstCache();
    const arrXzUniZoneSel = arrXzUniZoneObjLstCache.filter(
      (x) => arrIdUniZoneLst.indexOf(x.idUniZone) > -1,
    );
    return arrXzUniZoneSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdUniZoneLst.join(','),
      xzUniZone_ConstructorName,
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
export async function XzUniZone_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsXzUniZoneEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

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
          xzUniZone_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzUniZone_GetObjLstByJSONObjLst(returnObjLst);
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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
export async function XzUniZone_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsXzUniZoneEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

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
          xzUniZone_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzUniZone_GetObjLstByJSONObjLst(returnObjLst);
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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
export async function XzUniZone_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzUniZoneEN>();
  const arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstCache();
  if (arrXzUniZoneObjLstCache.length == 0) return arrXzUniZoneObjLstCache;
  let arrXzUniZoneSel = arrXzUniZoneObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objXzUniZoneCond = new clsXzUniZoneEN();
  ObjectAssign(objXzUniZoneCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsXzUniZoneWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzUniZoneCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrXzUniZoneSel.length == 0) return arrXzUniZoneSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzUniZoneSel = arrXzUniZoneSel.sort(XzUniZone_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzUniZoneSel = arrXzUniZoneSel.sort(objPagerPara.sortFun);
    }
    arrXzUniZoneSel = arrXzUniZoneSel.slice(intStart, intEnd);
    return arrXzUniZoneSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzUniZone_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzUniZoneEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function XzUniZone_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzUniZoneEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzUniZoneEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

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
          xzUniZone_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzUniZone_GetObjLstByJSONObjLst(returnObjLst);
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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
 * @param strIdUniZone:关键字
 * @returns 获取删除的结果
 **/
export async function XzUniZone_DelRecordAsync(strIdUniZone: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdUniZone);

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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
 * @param arrIdUniZone:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function XzUniZone_DelXzUniZonesAsync(arrIdUniZone: Array<string>): Promise<number> {
  const strThisFuncName = 'DelXzUniZonesAsync';
  const strAction = 'DelXzUniZones';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdUniZone, config);
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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
export async function XzUniZone_DelXzUniZonesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelXzUniZonesByCondAsync';
  const strAction = 'DelXzUniZonesByCond';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
 * @param objXzUniZoneEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzUniZone_AddNewRecordAsync(
  objXzUniZoneEN: clsXzUniZoneEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objXzUniZoneEN.idUniZone === null || objXzUniZoneEN.idUniZone === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objXzUniZoneEN);
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzUniZoneEN, config);
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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
 * @param objXzUniZoneEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzUniZone_AddNewRecordWithMaxIdAsync(
  objXzUniZoneEN: clsXzUniZoneEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzUniZoneEN, config);
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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
 * @param objXzUniZoneEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function XzUniZone_AddNewRecordWithReturnKeyAsync(
  objXzUniZoneEN: clsXzUniZoneEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzUniZoneEN, config);
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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
 * @param objXzUniZoneEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function XzUniZone_UpdateRecordAsync(
  objXzUniZoneEN: clsXzUniZoneEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objXzUniZoneEN.sfUpdFldSetStr === undefined ||
    objXzUniZoneEN.sfUpdFldSetStr === null ||
    objXzUniZoneEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzUniZoneEN.idUniZone,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzUniZoneEN, config);
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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
 * @param objXzUniZoneEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzUniZone_UpdateWithConditionAsync(
  objXzUniZoneEN: clsXzUniZoneEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objXzUniZoneEN.sfUpdFldSetStr === undefined ||
    objXzUniZoneEN.sfUpdFldSetStr === null ||
    objXzUniZoneEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzUniZoneEN.idUniZone,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);
  objXzUniZoneEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzUniZoneEN, config);
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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
 * @param objstrIdUniZoneCond:条件对象
 * @returns 对象列表子集
 */
export async function XzUniZone_IsExistRecordCache(objXzUniZoneCond: clsXzUniZoneEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstCache();
  if (arrXzUniZoneObjLstCache == null) return false;
  let arrXzUniZoneSel = arrXzUniZoneObjLstCache;
  if (objXzUniZoneCond.sfFldComparisonOp == null || objXzUniZoneCond.sfFldComparisonOp == '')
    return arrXzUniZoneSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzUniZoneCond.sfFldComparisonOp,
  );
  //console.log("clsXzUniZoneWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzUniZoneCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzUniZoneCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrXzUniZoneSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objXzUniZoneCond),
      xzUniZone_ConstructorName,
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
export async function XzUniZone_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
 * @param strIdUniZone:所给的关键字
 * @returns 对象
 */
export async function XzUniZone_IsExistCache(strIdUniZone: string) {
  const strThisFuncName = 'IsExistCache';
  const arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstCache();
  if (arrXzUniZoneObjLstCache == null) return false;
  try {
    const arrXzUniZoneSel = arrXzUniZoneObjLstCache.filter((x) => x.idUniZone == strIdUniZone);
    if (arrXzUniZoneSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdUniZone,
      xzUniZone_ConstructorName,
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
 * @param strIdUniZone:关键字
 * @returns 是否存在?存在返回True
 **/
export async function XzUniZone_IsExistAsync(strIdUniZone: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdUniZone,
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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
export async function XzUniZone_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
 * @param objXzUniZoneCond:条件对象
 * @returns 对象列表记录数
 */
export async function XzUniZone_GetRecCountByCondCache(objXzUniZoneCond: clsXzUniZoneEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrXzUniZoneObjLstCache = await XzUniZone_GetObjLstCache();
  if (arrXzUniZoneObjLstCache == null) return 0;
  let arrXzUniZoneSel = arrXzUniZoneObjLstCache;
  if (objXzUniZoneCond.sfFldComparisonOp == null || objXzUniZoneCond.sfFldComparisonOp == '')
    return arrXzUniZoneSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzUniZoneCond.sfFldComparisonOp,
  );
  //console.log("clsXzUniZoneWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzUniZoneCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzUniZoneCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzUniZoneSel = arrXzUniZoneSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzUniZoneSel = arrXzUniZoneSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrXzUniZoneSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzUniZoneCond),
      xzUniZone_ConstructorName,
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
export async function XzUniZone_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(xzUniZone_Controller, strAction);

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
        xzUniZone_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzUniZone_ConstructorName,
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
export function XzUniZone_GetWebApiUrl(strController: string, strAction: string): string {
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
export function XzUniZone_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsXzUniZoneEN._CurrTabName;
  switch (clsXzUniZoneEN.CacheModeId) {
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
export function XzUniZone_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsXzUniZoneEN._CurrTabName;
    switch (clsXzUniZoneEN.CacheModeId) {
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
export async function XzUniZone_Cache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In )', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：Cache");
  const arrObjLstSel = await XzUniZone_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsXzUniZoneEN.con_IdUniZone,
    clsXzUniZoneEN.con_UniZoneDesc,
    '校区',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzUniZone_CheckPropertyNew(pobjXzUniZoneEN: clsXzUniZoneEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.idUniZone) == false &&
    GetStrLen(pobjXzUniZoneEN.idUniZone) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[校区流水号(idUniZone)]的长度不能超过4(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.idUniZone)(clsXzUniZoneBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.uniZoneID) == false &&
    GetStrLen(pobjXzUniZoneEN.uniZoneID) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[校区编号(uniZoneID)]的长度不能超过4(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.uniZoneID)(clsXzUniZoneBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.uniZoneDesc) == false &&
    GetStrLen(pobjXzUniZoneEN.uniZoneDesc) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[校区名称(uniZoneDesc)]的长度不能超过20(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.uniZoneDesc)(clsXzUniZoneBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.uniZoneDescA) == false &&
    GetStrLen(pobjXzUniZoneEN.uniZoneDescA) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[UniZoneDescA(uniZoneDescA)]的长度不能超过20(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.uniZoneDescA)(clsXzUniZoneBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjXzUniZoneEN.idSchool) == false && GetStrLen(pobjXzUniZoneEN.idSchool) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[学校流水号(idSchool)]的长度不能超过4(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.idSchool)(clsXzUniZoneBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjXzUniZoneEN.idUni) == false && GetStrLen(pobjXzUniZoneEN.idUni) > 4) {
    throw new Error(
      '(errid:Watl000413)字段[id_Uni(idUni)]的长度不能超过4(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.idUni)(clsXzUniZoneBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.modifyUserId) == false &&
    GetStrLen(pobjXzUniZoneEN.modifyUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.modifyUserId)(clsXzUniZoneBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.modifyDate) == false &&
    GetStrLen(pobjXzUniZoneEN.modifyDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.modifyDate)(clsXzUniZoneBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjXzUniZoneEN.memo) == false && GetStrLen(pobjXzUniZoneEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.memo)(clsXzUniZoneBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.idUniZone) == false &&
    undefined !== pobjXzUniZoneEN.idUniZone &&
    tzDataType.isString(pobjXzUniZoneEN.idUniZone) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[校区流水号(idUniZone)]的值:[$(pobjXzUniZoneEN.idUniZone)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.uniZoneID) == false &&
    undefined !== pobjXzUniZoneEN.uniZoneID &&
    tzDataType.isString(pobjXzUniZoneEN.uniZoneID) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[校区编号(uniZoneID)]的值:[$(pobjXzUniZoneEN.uniZoneID)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.uniZoneDesc) == false &&
    undefined !== pobjXzUniZoneEN.uniZoneDesc &&
    tzDataType.isString(pobjXzUniZoneEN.uniZoneDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[校区名称(uniZoneDesc)]的值:[$(pobjXzUniZoneEN.uniZoneDesc)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.uniZoneDescA) == false &&
    undefined !== pobjXzUniZoneEN.uniZoneDescA &&
    tzDataType.isString(pobjXzUniZoneEN.uniZoneDescA) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[UniZoneDescA(uniZoneDescA)]的值:[$(pobjXzUniZoneEN.uniZoneDescA)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.idSchool) == false &&
    undefined !== pobjXzUniZoneEN.idSchool &&
    tzDataType.isString(pobjXzUniZoneEN.idSchool) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学校流水号(idSchool)]的值:[$(pobjXzUniZoneEN.idSchool)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.idUni) == false &&
    undefined !== pobjXzUniZoneEN.idUni &&
    tzDataType.isString(pobjXzUniZoneEN.idUni) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[id_Uni(idUni)]的值:[$(pobjXzUniZoneEN.idUni)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.modifyUserId) == false &&
    undefined !== pobjXzUniZoneEN.modifyUserId &&
    tzDataType.isString(pobjXzUniZoneEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjXzUniZoneEN.modifyUserId)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.modifyDate) == false &&
    undefined !== pobjXzUniZoneEN.modifyDate &&
    tzDataType.isString(pobjXzUniZoneEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjXzUniZoneEN.modifyDate)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.memo) == false &&
    undefined !== pobjXzUniZoneEN.memo &&
    tzDataType.isString(pobjXzUniZoneEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjXzUniZoneEN.memo)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzUniZone_CheckProperty4Update(pobjXzUniZoneEN: clsXzUniZoneEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.idUniZone) == false &&
    GetStrLen(pobjXzUniZoneEN.idUniZone) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[校区流水号(idUniZone)]的长度不能超过4(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.idUniZone)(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.uniZoneID) == false &&
    GetStrLen(pobjXzUniZoneEN.uniZoneID) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[校区编号(uniZoneID)]的长度不能超过4(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.uniZoneID)(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.uniZoneDesc) == false &&
    GetStrLen(pobjXzUniZoneEN.uniZoneDesc) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[校区名称(uniZoneDesc)]的长度不能超过20(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.uniZoneDesc)(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.uniZoneDescA) == false &&
    GetStrLen(pobjXzUniZoneEN.uniZoneDescA) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[UniZoneDescA(uniZoneDescA)]的长度不能超过20(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.uniZoneDescA)(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjXzUniZoneEN.idSchool) == false && GetStrLen(pobjXzUniZoneEN.idSchool) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[学校流水号(idSchool)]的长度不能超过4(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.idSchool)(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjXzUniZoneEN.idUni) == false && GetStrLen(pobjXzUniZoneEN.idUni) > 4) {
    throw new Error(
      '(errid:Watl000416)字段[id_Uni(idUni)]的长度不能超过4(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.idUni)(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.modifyUserId) == false &&
    GetStrLen(pobjXzUniZoneEN.modifyUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.modifyUserId)(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.modifyDate) == false &&
    GetStrLen(pobjXzUniZoneEN.modifyDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.modifyDate)(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjXzUniZoneEN.memo) == false && GetStrLen(pobjXzUniZoneEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 校区(XzUniZone))!值:$(pobjXzUniZoneEN.memo)(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.idUniZone) == false &&
    undefined !== pobjXzUniZoneEN.idUniZone &&
    tzDataType.isString(pobjXzUniZoneEN.idUniZone) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[校区流水号(idUniZone)]的值:[$(pobjXzUniZoneEN.idUniZone)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.uniZoneID) == false &&
    undefined !== pobjXzUniZoneEN.uniZoneID &&
    tzDataType.isString(pobjXzUniZoneEN.uniZoneID) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[校区编号(uniZoneID)]的值:[$(pobjXzUniZoneEN.uniZoneID)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.uniZoneDesc) == false &&
    undefined !== pobjXzUniZoneEN.uniZoneDesc &&
    tzDataType.isString(pobjXzUniZoneEN.uniZoneDesc) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[校区名称(uniZoneDesc)]的值:[$(pobjXzUniZoneEN.uniZoneDesc)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.uniZoneDescA) == false &&
    undefined !== pobjXzUniZoneEN.uniZoneDescA &&
    tzDataType.isString(pobjXzUniZoneEN.uniZoneDescA) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[UniZoneDescA(uniZoneDescA)]的值:[$(pobjXzUniZoneEN.uniZoneDescA)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.idSchool) == false &&
    undefined !== pobjXzUniZoneEN.idSchool &&
    tzDataType.isString(pobjXzUniZoneEN.idSchool) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学校流水号(idSchool)]的值:[$(pobjXzUniZoneEN.idSchool)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.idUni) == false &&
    undefined !== pobjXzUniZoneEN.idUni &&
    tzDataType.isString(pobjXzUniZoneEN.idUni) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[id_Uni(idUni)]的值:[$(pobjXzUniZoneEN.idUni)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.modifyUserId) == false &&
    undefined !== pobjXzUniZoneEN.modifyUserId &&
    tzDataType.isString(pobjXzUniZoneEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjXzUniZoneEN.modifyUserId)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.modifyDate) == false &&
    undefined !== pobjXzUniZoneEN.modifyDate &&
    tzDataType.isString(pobjXzUniZoneEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjXzUniZoneEN.modifyDate)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzUniZoneEN.memo) == false &&
    undefined !== pobjXzUniZoneEN.memo &&
    tzDataType.isString(pobjXzUniZoneEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjXzUniZoneEN.memo)], 非法,应该为字符型(In 校区(XzUniZone))!(clsXzUniZoneBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjXzUniZoneEN.idUniZone) === true) {
    throw new Error(
      '(errid:Watl000064)字段[校区流水号]不能为空(In 校区)!(clsXzUniZoneBL:CheckProperty4Update)',
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
export function XzUniZone_GetJSONStrByObj(pobjXzUniZoneEN: clsXzUniZoneEN): string {
  pobjXzUniZoneEN.sfUpdFldSetStr = pobjXzUniZoneEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjXzUniZoneEN);
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
export function XzUniZone_GetObjLstByJSONStr(strJSON: string): Array<clsXzUniZoneEN> {
  let arrXzUniZoneObjLst = new Array<clsXzUniZoneEN>();
  if (strJSON === '') {
    return arrXzUniZoneObjLst;
  }
  try {
    arrXzUniZoneObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrXzUniZoneObjLst;
  }
  return arrXzUniZoneObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrXzUniZoneObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function XzUniZone_GetObjLstByJSONObjLst(
  arrXzUniZoneObjLstS: Array<clsXzUniZoneEN>,
): Array<clsXzUniZoneEN> {
  const arrXzUniZoneObjLst = new Array<clsXzUniZoneEN>();
  for (const objInFor of arrXzUniZoneObjLstS) {
    const obj1 = XzUniZone_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrXzUniZoneObjLst.push(obj1);
  }
  return arrXzUniZoneObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function XzUniZone_GetObjByJSONStr(strJSON: string): clsXzUniZoneEN {
  let pobjXzUniZoneEN = new clsXzUniZoneEN();
  if (strJSON === '') {
    return pobjXzUniZoneEN;
  }
  try {
    pobjXzUniZoneEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjXzUniZoneEN;
  }
  return pobjXzUniZoneEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function XzUniZone_GetCombineCondition(objXzUniZoneCond: clsXzUniZoneEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objXzUniZoneCond.dicFldComparisonOp,
      clsXzUniZoneEN.con_IdUniZone,
    ) == true
  ) {
    const strComparisonOpIdUniZone: string =
      objXzUniZoneCond.dicFldComparisonOp[clsXzUniZoneEN.con_IdUniZone];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzUniZoneEN.con_IdUniZone,
      objXzUniZoneCond.idUniZone,
      strComparisonOpIdUniZone,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzUniZoneCond.dicFldComparisonOp,
      clsXzUniZoneEN.con_UniZoneID,
    ) == true
  ) {
    const strComparisonOpUniZoneID: string =
      objXzUniZoneCond.dicFldComparisonOp[clsXzUniZoneEN.con_UniZoneID];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzUniZoneEN.con_UniZoneID,
      objXzUniZoneCond.uniZoneID,
      strComparisonOpUniZoneID,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzUniZoneCond.dicFldComparisonOp,
      clsXzUniZoneEN.con_UniZoneDesc,
    ) == true
  ) {
    const strComparisonOpUniZoneDesc: string =
      objXzUniZoneCond.dicFldComparisonOp[clsXzUniZoneEN.con_UniZoneDesc];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzUniZoneEN.con_UniZoneDesc,
      objXzUniZoneCond.uniZoneDesc,
      strComparisonOpUniZoneDesc,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzUniZoneCond.dicFldComparisonOp,
      clsXzUniZoneEN.con_UniZoneDescA,
    ) == true
  ) {
    const strComparisonOpUniZoneDescA: string =
      objXzUniZoneCond.dicFldComparisonOp[clsXzUniZoneEN.con_UniZoneDescA];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzUniZoneEN.con_UniZoneDescA,
      objXzUniZoneCond.uniZoneDescA,
      strComparisonOpUniZoneDescA,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzUniZoneCond.dicFldComparisonOp,
      clsXzUniZoneEN.con_IdSchool,
    ) == true
  ) {
    const strComparisonOpIdSchool: string =
      objXzUniZoneCond.dicFldComparisonOp[clsXzUniZoneEN.con_IdSchool];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzUniZoneEN.con_IdSchool,
      objXzUniZoneCond.idSchool,
      strComparisonOpIdSchool,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzUniZoneCond.dicFldComparisonOp,
      clsXzUniZoneEN.con_IdUni,
    ) == true
  ) {
    const strComparisonOpIdUni: string =
      objXzUniZoneCond.dicFldComparisonOp[clsXzUniZoneEN.con_IdUni];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzUniZoneEN.con_IdUni,
      objXzUniZoneCond.idUni,
      strComparisonOpIdUni,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzUniZoneCond.dicFldComparisonOp,
      clsXzUniZoneEN.con_ModifyUserId,
    ) == true
  ) {
    const strComparisonOpModifyUserId: string =
      objXzUniZoneCond.dicFldComparisonOp[clsXzUniZoneEN.con_ModifyUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzUniZoneEN.con_ModifyUserId,
      objXzUniZoneCond.modifyUserId,
      strComparisonOpModifyUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzUniZoneCond.dicFldComparisonOp,
      clsXzUniZoneEN.con_ModifyDate,
    ) == true
  ) {
    const strComparisonOpModifyDate: string =
      objXzUniZoneCond.dicFldComparisonOp[clsXzUniZoneEN.con_ModifyDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzUniZoneEN.con_ModifyDate,
      objXzUniZoneCond.modifyDate,
      strComparisonOpModifyDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzUniZoneCond.dicFldComparisonOp,
      clsXzUniZoneEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objXzUniZoneCond.dicFldComparisonOp[clsXzUniZoneEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzUniZoneEN.con_Memo,
      objXzUniZoneCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objXzUniZoneENS:源对象
 * @param objXzUniZoneENT:目标对象
 */
export function XzUniZone_CopyObjTo(
  objXzUniZoneENS: clsXzUniZoneEN,
  objXzUniZoneENT: clsXzUniZoneEN,
): void {
  objXzUniZoneENT.idUniZone = objXzUniZoneENS.idUniZone; //校区流水号
  objXzUniZoneENT.uniZoneID = objXzUniZoneENS.uniZoneID; //校区编号
  objXzUniZoneENT.uniZoneDesc = objXzUniZoneENS.uniZoneDesc; //校区名称
  objXzUniZoneENT.uniZoneDescA = objXzUniZoneENS.uniZoneDescA; //UniZoneDescA
  objXzUniZoneENT.idSchool = objXzUniZoneENS.idSchool; //学校流水号
  objXzUniZoneENT.idUni = objXzUniZoneENS.idUni; //id_Uni
  objXzUniZoneENT.modifyUserId = objXzUniZoneENS.modifyUserId; //修改人
  objXzUniZoneENT.modifyDate = objXzUniZoneENS.modifyDate; //修改日期
  objXzUniZoneENT.memo = objXzUniZoneENS.memo; //备注
  objXzUniZoneENT.sfUpdFldSetStr = objXzUniZoneENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objXzUniZoneENS:源对象
 * @param objXzUniZoneENT:目标对象
 */
export function XzUniZone_GetObjFromJsonObj(objXzUniZoneENS: clsXzUniZoneEN): clsXzUniZoneEN {
  const objXzUniZoneENT: clsXzUniZoneEN = new clsXzUniZoneEN();
  ObjectAssign(objXzUniZoneENT, objXzUniZoneENS);
  return objXzUniZoneENT;
}
