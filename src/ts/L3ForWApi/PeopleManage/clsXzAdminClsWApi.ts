/**
 * 类名:clsXzAdminClsWApi
 * 表名:XzAdminCls(01120194)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:43:41
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
 * 行政班(XzAdminCls)
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
import { clsXzAdminClsEN } from '@/ts/L0Entity/PeopleManage/clsXzAdminClsEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const xzAdminCls_Controller = 'XzAdminClsApi';
export const xzAdminCls_ConstructorName = 'xzAdminCls';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strIdAdminCls:关键字
 * @returns 对象
 **/
export async function XzAdminCls_GetObjByIdAdminClsAsync(
  strIdAdminCls: string,
): Promise<clsXzAdminClsEN | null> {
  const strThisFuncName = 'GetObjByIdAdminClsAsync';

  if (IsNullOrEmpty(strIdAdminCls) == true) {
    const strMsg = Format(
      '参数:[strIdAdminCls]不能为空!(In clsXzAdminClsWApi.GetObjByIdAdminClsAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdAdminCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdAdminCls]的长度:[{0}]不正确!(clsXzAdminClsWApi.GetObjByIdAdminClsAsync)',
      strIdAdminCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByIdAdminCls';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdAdminCls,
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
      const objXzAdminCls = XzAdminCls_GetObjFromJsonObj(returnObj);
      return objXzAdminCls;
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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
 * @param strIdAdminCls:所给的关键字
 * @returns 对象
 */
export async function XzAdminCls_GetObjByIdAdminClsCache(
  strIdAdminCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByIdAdminClsCache';

  if (IsNullOrEmpty(strIdAdminCls) == true) {
    const strMsg = Format(
      '参数:[strIdAdminCls]不能为空!(In clsXzAdminClsWApi.GetObjByIdAdminClsCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdAdminCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdAdminCls]的长度:[{0}]不正确!(clsXzAdminClsWApi.GetObjByIdAdminClsCache)',
      strIdAdminCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstCache();
  try {
    const arrXzAdminClsSel = arrXzAdminClsObjLstCache.filter((x) => x.idAdminCls == strIdAdminCls);
    let objXzAdminCls: clsXzAdminClsEN;
    if (arrXzAdminClsSel.length > 0) {
      objXzAdminCls = arrXzAdminClsSel[0];
      return objXzAdminCls;
    } else {
      if (bolTryAsyncOnce == true) {
        const objXzAdminClsConst = await XzAdminCls_GetObjByIdAdminClsAsync(strIdAdminCls);
        if (objXzAdminClsConst != null) {
          XzAdminCls_ReFreshThisCache();
          return objXzAdminClsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdAdminCls,
      xzAdminCls_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strIdAdminCls:所给的关键字
 * @returns 对象
 */
export async function XzAdminCls_GetObjByIdAdminClslocalStorage(strIdAdminCls: string) {
  const strThisFuncName = 'GetObjByIdAdminClslocalStorage';

  if (IsNullOrEmpty(strIdAdminCls) == true) {
    const strMsg = Format(
      '参数:[strIdAdminCls]不能为空!(In clsXzAdminClsWApi.GetObjByIdAdminClslocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdAdminCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdAdminCls]的长度:[{0}]不正确!(clsXzAdminClsWApi.GetObjByIdAdminClslocalStorage)',
      strIdAdminCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsXzAdminClsEN._CurrTabName, strIdAdminCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objXzAdminClsCache: clsXzAdminClsEN = JSON.parse(strTempObj);
    return objXzAdminClsCache;
  }
  try {
    const objXzAdminCls = await XzAdminCls_GetObjByIdAdminClsAsync(strIdAdminCls);
    if (objXzAdminCls != null) {
      localStorage.setItem(strKey, JSON.stringify(objXzAdminCls));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objXzAdminCls;
    }
    return objXzAdminCls;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strIdAdminCls,
      xzAdminCls_ConstructorName,
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
 * @param objXzAdminCls:所给的对象
 * @returns 对象
 */
export async function XzAdminCls_UpdateObjInLstCache(objXzAdminCls: clsXzAdminClsEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstCache();
    const obj = arrXzAdminClsObjLstCache.find((x) => x.adminClsName == objXzAdminCls.adminClsName);
    if (obj != null) {
      objXzAdminCls.idAdminCls = obj.idAdminCls;
      ObjectAssign(obj, objXzAdminCls);
    } else {
      arrXzAdminClsObjLstCache.push(objXzAdminCls);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      xzAdminCls_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strIdAdminCls:所给的关键字
 * @returns 对象
 */
export async function XzAdminCls_GetNameByIdAdminClsCache(strIdAdminCls: string) {
  if (IsNullOrEmpty(strIdAdminCls) == true) {
    const strMsg = Format(
      '参数:[strIdAdminCls]不能为空!(In clsXzAdminClsWApi.GetNameByIdAdminClsCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdAdminCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdAdminCls]的长度:[{0}]不正确!(clsXzAdminClsWApi.GetNameByIdAdminClsCache)',
      strIdAdminCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstCache();
  if (arrXzAdminClsObjLstCache == null) return '';
  try {
    const arrXzAdminClsSel = arrXzAdminClsObjLstCache.filter((x) => x.idAdminCls == strIdAdminCls);
    let objXzAdminCls: clsXzAdminClsEN;
    if (arrXzAdminClsSel.length > 0) {
      objXzAdminCls = arrXzAdminClsSel[0];
      return objXzAdminCls.adminClsName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strIdAdminCls,
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
export async function XzAdminCls_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsXzAdminClsEN.con_IdAdminCls) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsXzAdminClsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsXzAdminClsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strIdAdminCls = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objXzAdminCls = await XzAdminCls_GetObjByIdAdminClsCache(strIdAdminCls);
  if (objXzAdminCls == null) return '';
  if (objXzAdminCls.GetFldValue(strOutFldName) == null) return '';
  return objXzAdminCls.GetFldValue(strOutFldName).toString();
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
export function XzAdminCls_SortFunDefa(a: clsXzAdminClsEN, b: clsXzAdminClsEN): number {
  return a.idAdminCls.localeCompare(b.idAdminCls);
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
export function XzAdminCls_SortFunDefa2Fld(a: clsXzAdminClsEN, b: clsXzAdminClsEN): number {
  if (a.adminClsName == b.adminClsName) return a.idXzMajor.localeCompare(b.idXzMajor);
  else return a.adminClsName.localeCompare(b.adminClsName);
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
export function XzAdminCls_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsXzAdminClsEN.con_IdAdminCls:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          return a.idAdminCls.localeCompare(b.idAdminCls);
        };
      case clsXzAdminClsEN.con_AdminClsName:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          if (a.adminClsName == null) return -1;
          if (b.adminClsName == null) return 1;
          return a.adminClsName.localeCompare(b.adminClsName);
        };
      case clsXzAdminClsEN.con_IdXzMajor:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          return a.idXzMajor.localeCompare(b.idXzMajor);
        };
      case clsXzAdminClsEN.con_IdXzCollege:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          return a.idXzCollege.localeCompare(b.idXzCollege);
        };
      case clsXzAdminClsEN.con_IdUniZone:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          if (a.idUniZone == null) return -1;
          if (b.idUniZone == null) return 1;
          return a.idUniZone.localeCompare(b.idUniZone);
        };
      case clsXzAdminClsEN.con_CurrentStuQty:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          return a.currentStuQty - b.currentStuQty;
        };
      case clsXzAdminClsEN.con_IdGradeBase:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          return a.idGradeBase.localeCompare(b.idGradeBase);
        };
      case clsXzAdminClsEN.con_AdminClsId:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          if (a.adminClsId == null) return -1;
          if (b.adminClsId == null) return 1;
          return a.adminClsId.localeCompare(b.adminClsId);
        };
      case clsXzAdminClsEN.con_IdAdminClsType:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          if (a.idAdminClsType == null) return -1;
          if (b.idAdminClsType == null) return 1;
          return a.idAdminClsType.localeCompare(b.idAdminClsType);
        };
      case clsXzAdminClsEN.con_AdminClsIndex:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          return a.adminClsIndex - b.adminClsIndex;
        };
      case clsXzAdminClsEN.con_Memo:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsXzAdminClsEN.con_ModifyUserId:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          if (a.modifyUserId == null) return -1;
          if (b.modifyUserId == null) return 1;
          return a.modifyUserId.localeCompare(b.modifyUserId);
        };
      case clsXzAdminClsEN.con_ModifyDate:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          if (a.modifyDate == null) return -1;
          if (b.modifyDate == null) return 1;
          return a.modifyDate.localeCompare(b.modifyDate);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzAdminCls]中不存在!(in ${xzAdminCls_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsXzAdminClsEN.con_IdAdminCls:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          return b.idAdminCls.localeCompare(a.idAdminCls);
        };
      case clsXzAdminClsEN.con_AdminClsName:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          if (b.adminClsName == null) return -1;
          if (a.adminClsName == null) return 1;
          return b.adminClsName.localeCompare(a.adminClsName);
        };
      case clsXzAdminClsEN.con_IdXzMajor:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          return b.idXzMajor.localeCompare(a.idXzMajor);
        };
      case clsXzAdminClsEN.con_IdXzCollege:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          return b.idXzCollege.localeCompare(a.idXzCollege);
        };
      case clsXzAdminClsEN.con_IdUniZone:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          if (b.idUniZone == null) return -1;
          if (a.idUniZone == null) return 1;
          return b.idUniZone.localeCompare(a.idUniZone);
        };
      case clsXzAdminClsEN.con_CurrentStuQty:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          return b.currentStuQty - a.currentStuQty;
        };
      case clsXzAdminClsEN.con_IdGradeBase:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          return b.idGradeBase.localeCompare(a.idGradeBase);
        };
      case clsXzAdminClsEN.con_AdminClsId:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          if (b.adminClsId == null) return -1;
          if (a.adminClsId == null) return 1;
          return b.adminClsId.localeCompare(a.adminClsId);
        };
      case clsXzAdminClsEN.con_IdAdminClsType:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          if (b.idAdminClsType == null) return -1;
          if (a.idAdminClsType == null) return 1;
          return b.idAdminClsType.localeCompare(a.idAdminClsType);
        };
      case clsXzAdminClsEN.con_AdminClsIndex:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          return b.adminClsIndex - a.adminClsIndex;
        };
      case clsXzAdminClsEN.con_Memo:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsXzAdminClsEN.con_ModifyUserId:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          if (b.modifyUserId == null) return -1;
          if (a.modifyUserId == null) return 1;
          return b.modifyUserId.localeCompare(a.modifyUserId);
        };
      case clsXzAdminClsEN.con_ModifyDate:
        return (a: clsXzAdminClsEN, b: clsXzAdminClsEN) => {
          if (b.modifyDate == null) return -1;
          if (a.modifyDate == null) return 1;
          return b.modifyDate.localeCompare(a.modifyDate);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[XzAdminCls]中不存在!(in ${xzAdminCls_ConstructorName}.${strThisFuncName})`;
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
export async function XzAdminCls_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsXzAdminClsEN.con_IdAdminCls:
      return (obj: clsXzAdminClsEN) => {
        return obj.idAdminCls === value;
      };
    case clsXzAdminClsEN.con_AdminClsName:
      return (obj: clsXzAdminClsEN) => {
        return obj.adminClsName === value;
      };
    case clsXzAdminClsEN.con_IdXzMajor:
      return (obj: clsXzAdminClsEN) => {
        return obj.idXzMajor === value;
      };
    case clsXzAdminClsEN.con_IdXzCollege:
      return (obj: clsXzAdminClsEN) => {
        return obj.idXzCollege === value;
      };
    case clsXzAdminClsEN.con_IdUniZone:
      return (obj: clsXzAdminClsEN) => {
        return obj.idUniZone === value;
      };
    case clsXzAdminClsEN.con_CurrentStuQty:
      return (obj: clsXzAdminClsEN) => {
        return obj.currentStuQty === value;
      };
    case clsXzAdminClsEN.con_IdGradeBase:
      return (obj: clsXzAdminClsEN) => {
        return obj.idGradeBase === value;
      };
    case clsXzAdminClsEN.con_AdminClsId:
      return (obj: clsXzAdminClsEN) => {
        return obj.adminClsId === value;
      };
    case clsXzAdminClsEN.con_IdAdminClsType:
      return (obj: clsXzAdminClsEN) => {
        return obj.idAdminClsType === value;
      };
    case clsXzAdminClsEN.con_AdminClsIndex:
      return (obj: clsXzAdminClsEN) => {
        return obj.adminClsIndex === value;
      };
    case clsXzAdminClsEN.con_Memo:
      return (obj: clsXzAdminClsEN) => {
        return obj.memo === value;
      };
    case clsXzAdminClsEN.con_ModifyUserId:
      return (obj: clsXzAdminClsEN) => {
        return obj.modifyUserId === value;
      };
    case clsXzAdminClsEN.con_ModifyDate:
      return (obj: clsXzAdminClsEN) => {
        return obj.modifyDate === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[XzAdminCls]中不存在!(in ${xzAdminCls_ConstructorName}.${strThisFuncName})`;
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
export async function XzAdminCls_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsXzAdminClsEN.con_IdAdminCls) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrXzAdminCls = await XzAdminCls_GetObjLstCache();
  if (arrXzAdminCls == null) return [];
  let arrXzAdminClsSel = arrXzAdminCls;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrXzAdminClsSel = arrXzAdminClsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrXzAdminClsSel = arrXzAdminClsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrXzAdminClsSel = arrXzAdminClsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrXzAdminClsSel = arrXzAdminClsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrXzAdminClsSel = arrXzAdminClsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrXzAdminClsSel = arrXzAdminClsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrXzAdminClsSel = arrXzAdminClsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrXzAdminClsSel = arrXzAdminClsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrXzAdminClsSel = arrXzAdminClsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrXzAdminClsSel = arrXzAdminClsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrXzAdminClsSel.length == 0) return [];
  return arrXzAdminClsSel.map((x) => x.idAdminCls);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzAdminCls_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
export async function XzAdminCls_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
export async function XzAdminCls_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsXzAdminClsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

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
      const objXzAdminCls = XzAdminCls_GetObjFromJsonObj(returnObj);
      return objXzAdminCls;
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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
export async function XzAdminCls_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzAdminClsEN._CurrTabName;
  if (IsNullOrEmpty(clsXzAdminClsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzAdminClsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrXzAdminClsExObjLstCache: Array<clsXzAdminClsEN> = CacheHelper.Get(strKey);
    const arrXzAdminClsObjLstT = XzAdminCls_GetObjLstByJSONObjLst(arrXzAdminClsExObjLstCache);
    return arrXzAdminClsObjLstT;
  }
  try {
    const arrXzAdminClsExObjLst = await XzAdminCls_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrXzAdminClsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzAdminClsExObjLst.length,
    );
    console.log(strInfo);
    return arrXzAdminClsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzAdminCls_ConstructorName,
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
export async function XzAdminCls_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzAdminClsEN._CurrTabName;
  if (IsNullOrEmpty(clsXzAdminClsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzAdminClsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzAdminClsExObjLstCache: Array<clsXzAdminClsEN> = JSON.parse(strTempObjLst);
    const arrXzAdminClsObjLstT = XzAdminCls_GetObjLstByJSONObjLst(arrXzAdminClsExObjLstCache);
    return arrXzAdminClsObjLstT;
  }
  try {
    const arrXzAdminClsExObjLst = await XzAdminCls_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrXzAdminClsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzAdminClsExObjLst.length,
    );
    console.log(strInfo);
    return arrXzAdminClsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzAdminCls_ConstructorName,
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
export async function XzAdminCls_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzAdminClsEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrXzAdminClsObjLstCache: Array<clsXzAdminClsEN> = JSON.parse(strTempObjLst);
    return arrXzAdminClsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function XzAdminCls_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsXzAdminClsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

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
          xzAdminCls_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzAdminCls_GetObjLstByJSONObjLst(returnObjLst);
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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
export async function XzAdminCls_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsXzAdminClsEN._CurrTabName;
  if (IsNullOrEmpty(clsXzAdminClsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsXzAdminClsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzAdminClsExObjLstCache: Array<clsXzAdminClsEN> = JSON.parse(strTempObjLst);
    const arrXzAdminClsObjLstT = XzAdminCls_GetObjLstByJSONObjLst(arrXzAdminClsExObjLstCache);
    return arrXzAdminClsObjLstT;
  }
  try {
    const arrXzAdminClsExObjLst = await XzAdminCls_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrXzAdminClsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrXzAdminClsExObjLst.length,
    );
    console.log(strInfo);
    return arrXzAdminClsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      xzAdminCls_ConstructorName,
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
export async function XzAdminCls_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsXzAdminClsEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrXzAdminClsObjLstCache: Array<clsXzAdminClsEN> = JSON.parse(strTempObjLst);
    return arrXzAdminClsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzAdminCls_GetObjLstCache(): Promise<Array<clsXzAdminClsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrXzAdminClsObjLstCache;
  switch (clsXzAdminClsEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstClientCache();
      break;
    default:
      arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstClientCache();
      break;
  }
  return arrXzAdminClsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function XzAdminCls_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrXzAdminClsObjLstCache;
  switch (clsXzAdminClsEN.CacheModeId) {
    case '04': //sessionStorage
      arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrXzAdminClsObjLstCache = null;
      break;
    default:
      arrXzAdminClsObjLstCache = null;
      break;
  }
  return arrXzAdminClsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrIdAdminClsCond:条件对象
 * @returns 对象列表子集
 */
export async function XzAdminCls_GetSubObjLstCache(objXzAdminClsCond: clsXzAdminClsEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstCache();
  let arrXzAdminClsSel = arrXzAdminClsObjLstCache;
  if (objXzAdminClsCond.sfFldComparisonOp == null || objXzAdminClsCond.sfFldComparisonOp == '')
    return arrXzAdminClsSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzAdminClsCond.sfFldComparisonOp,
  );
  //console.log("clsXzAdminClsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzAdminClsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzAdminClsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrXzAdminClsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzAdminClsCond),
      xzAdminCls_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzAdminClsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrIdAdminCls:关键字列表
 * @returns 对象列表
 **/
export async function XzAdminCls_GetObjLstByIdAdminClsLstAsync(
  arrIdAdminCls: Array<string>,
): Promise<Array<clsXzAdminClsEN>> {
  const strThisFuncName = 'GetObjLstByIdAdminClsLstAsync';
  const strAction = 'GetObjLstByIdAdminClsLst';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdAdminCls, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          xzAdminCls_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzAdminCls_GetObjLstByJSONObjLst(returnObjLst);
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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
 * @param arrstrIdAdminClsLst:关键字列表
 * @returns 对象列表
 */
export async function XzAdminCls_GetObjLstByIdAdminClsLstCache(arrIdAdminClsLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByIdAdminClsLstCache';
  try {
    const arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstCache();
    const arrXzAdminClsSel = arrXzAdminClsObjLstCache.filter(
      (x) => arrIdAdminClsLst.indexOf(x.idAdminCls) > -1,
    );
    return arrXzAdminClsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrIdAdminClsLst.join(','),
      xzAdminCls_ConstructorName,
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
export async function XzAdminCls_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsXzAdminClsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

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
          xzAdminCls_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzAdminCls_GetObjLstByJSONObjLst(returnObjLst);
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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
export async function XzAdminCls_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsXzAdminClsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

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
          xzAdminCls_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzAdminCls_GetObjLstByJSONObjLst(returnObjLst);
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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
export async function XzAdminCls_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzAdminClsEN>();
  const arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstCache();
  if (arrXzAdminClsObjLstCache.length == 0) return arrXzAdminClsObjLstCache;
  let arrXzAdminClsSel = arrXzAdminClsObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objXzAdminClsCond = new clsXzAdminClsEN();
  ObjectAssign(objXzAdminClsCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsXzAdminClsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzAdminClsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrXzAdminClsSel.length == 0) return arrXzAdminClsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrXzAdminClsSel = arrXzAdminClsSel.sort(XzAdminCls_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrXzAdminClsSel = arrXzAdminClsSel.sort(objPagerPara.sortFun);
    }
    arrXzAdminClsSel = arrXzAdminClsSel.slice(intStart, intEnd);
    return arrXzAdminClsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      xzAdminCls_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsXzAdminClsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function XzAdminCls_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsXzAdminClsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsXzAdminClsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

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
          xzAdminCls_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = XzAdminCls_GetObjLstByJSONObjLst(returnObjLst);
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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
 * @param strIdAdminCls:关键字
 * @returns 获取删除的结果
 **/
export async function XzAdminCls_DelRecordAsync(strIdAdminCls: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strIdAdminCls);

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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
 * @param arrIdAdminCls:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function XzAdminCls_DelXzAdminClssAsync(
  arrIdAdminCls: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelXzAdminClssAsync';
  const strAction = 'DelXzAdminClss';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrIdAdminCls, config);
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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
export async function XzAdminCls_DelXzAdminClssByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelXzAdminClssByCondAsync';
  const strAction = 'DelXzAdminClssByCond';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
 * @param objXzAdminClsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzAdminCls_AddNewRecordAsync(
  objXzAdminClsEN: clsXzAdminClsEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objXzAdminClsEN);
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzAdminClsEN, config);
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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
 * @param objXzAdminClsEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function XzAdminCls_AddNewRecordWithMaxIdAsync(
  objXzAdminClsEN: clsXzAdminClsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzAdminClsEN, config);
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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
 * @param objXzAdminClsEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function XzAdminCls_AddNewRecordWithReturnKeyAsync(
  objXzAdminClsEN: clsXzAdminClsEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzAdminClsEN, config);
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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
 * @param objXzAdminClsEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function XzAdminCls_UpdateRecordAsync(
  objXzAdminClsEN: clsXzAdminClsEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objXzAdminClsEN.sfUpdFldSetStr === undefined ||
    objXzAdminClsEN.sfUpdFldSetStr === null ||
    objXzAdminClsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzAdminClsEN.idAdminCls,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzAdminClsEN, config);
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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
 * @param objXzAdminClsEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function XzAdminCls_UpdateWithConditionAsync(
  objXzAdminClsEN: clsXzAdminClsEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objXzAdminClsEN.sfUpdFldSetStr === undefined ||
    objXzAdminClsEN.sfUpdFldSetStr === null ||
    objXzAdminClsEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objXzAdminClsEN.idAdminCls,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);
  objXzAdminClsEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objXzAdminClsEN, config);
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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
 * @param objstrIdAdminClsCond:条件对象
 * @returns 对象列表子集
 */
export async function XzAdminCls_IsExistRecordCache(objXzAdminClsCond: clsXzAdminClsEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstCache();
  if (arrXzAdminClsObjLstCache == null) return false;
  let arrXzAdminClsSel = arrXzAdminClsObjLstCache;
  if (objXzAdminClsCond.sfFldComparisonOp == null || objXzAdminClsCond.sfFldComparisonOp == '')
    return arrXzAdminClsSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzAdminClsCond.sfFldComparisonOp,
  );
  //console.log("clsXzAdminClsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzAdminClsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzAdminClsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrXzAdminClsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objXzAdminClsCond),
      xzAdminCls_ConstructorName,
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
export async function XzAdminCls_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
 * @param strIdAdminCls:所给的关键字
 * @returns 对象
 */
export async function XzAdminCls_IsExistCache(strIdAdminCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstCache();
  if (arrXzAdminClsObjLstCache == null) return false;
  try {
    const arrXzAdminClsSel = arrXzAdminClsObjLstCache.filter((x) => x.idAdminCls == strIdAdminCls);
    if (arrXzAdminClsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strIdAdminCls,
      xzAdminCls_ConstructorName,
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
 * @param strIdAdminCls:关键字
 * @returns 是否存在?存在返回True
 **/
export async function XzAdminCls_IsExistAsync(strIdAdminCls: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strIdAdminCls,
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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
export async function XzAdminCls_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
 * @param objXzAdminClsCond:条件对象
 * @returns 对象列表记录数
 */
export async function XzAdminCls_GetRecCountByCondCache(objXzAdminClsCond: clsXzAdminClsEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrXzAdminClsObjLstCache = await XzAdminCls_GetObjLstCache();
  if (arrXzAdminClsObjLstCache == null) return 0;
  let arrXzAdminClsSel = arrXzAdminClsObjLstCache;
  if (objXzAdminClsCond.sfFldComparisonOp == null || objXzAdminClsCond.sfFldComparisonOp == '')
    return arrXzAdminClsSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objXzAdminClsCond.sfFldComparisonOp,
  );
  //console.log("clsXzAdminClsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objXzAdminClsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objXzAdminClsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrXzAdminClsSel = arrXzAdminClsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrXzAdminClsSel = arrXzAdminClsSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrXzAdminClsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objXzAdminClsCond),
      xzAdminCls_ConstructorName,
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
export async function XzAdminCls_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
export async function XzAdminCls_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(xzAdminCls_Controller, strAction);

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
        xzAdminCls_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        xzAdminCls_ConstructorName,
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
export function XzAdminCls_GetWebApiUrl(strController: string, strAction: string): string {
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
export function XzAdminCls_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsXzAdminClsEN._CurrTabName;
  switch (clsXzAdminClsEN.CacheModeId) {
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
export function XzAdminCls_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsXzAdminClsEN._CurrTabName;
    switch (clsXzAdminClsEN.CacheModeId) {
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
export async function XzAdminCls_BindDdl_id_AdminClsInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_id_AdminClsInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_id_AdminClsInDivCache");
  const arrObjLstSel = await XzAdminCls_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsXzAdminClsEN.con_IdAdminCls,
    clsXzAdminClsEN.con_AdminClsName,
    '行政班',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzAdminCls_CheckPropertyNew(pobjXzAdminClsEN: clsXzAdminClsEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idXzMajor) === true ||
    pobjXzAdminClsEN.idXzMajor.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[专业流水号]不能为空(In 行政班)!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idXzCollege) === true ||
    pobjXzAdminClsEN.idXzCollege.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[学院流水号]不能为空(In 行政班)!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idGradeBase) === true ||
    pobjXzAdminClsEN.idGradeBase.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000411)字段[年级流水号]不能为空(In 行政班)!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idAdminCls) == false &&
    GetStrLen(pobjXzAdminClsEN.idAdminCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[行政班流水号(idAdminCls)]的长度不能超过8(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.idAdminCls)(clsXzAdminClsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.adminClsName) == false &&
    GetStrLen(pobjXzAdminClsEN.adminClsName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[行政班名称(adminClsName)]的长度不能超过100(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.adminClsName)(clsXzAdminClsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idXzMajor) == false &&
    GetStrLen(pobjXzAdminClsEN.idXzMajor) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[专业流水号(idXzMajor)]的长度不能超过8(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.idXzMajor)(clsXzAdminClsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idXzCollege) == false &&
    GetStrLen(pobjXzAdminClsEN.idXzCollege) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学院流水号(idXzCollege)]的长度不能超过4(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.idXzCollege)(clsXzAdminClsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idUniZone) == false &&
    GetStrLen(pobjXzAdminClsEN.idUniZone) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[校区流水号(idUniZone)]的长度不能超过4(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.idUniZone)(clsXzAdminClsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idGradeBase) == false &&
    GetStrLen(pobjXzAdminClsEN.idGradeBase) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[年级流水号(idGradeBase)]的长度不能超过4(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.idGradeBase)(clsXzAdminClsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.adminClsId) == false &&
    GetStrLen(pobjXzAdminClsEN.adminClsId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[行政班代号(adminClsId)]的长度不能超过8(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.adminClsId)(clsXzAdminClsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idAdminClsType) == false &&
    GetStrLen(pobjXzAdminClsEN.idAdminClsType) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[行政班级类型流水号(idAdminClsType)]的长度不能超过4(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.idAdminClsType)(clsXzAdminClsBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjXzAdminClsEN.memo) == false && GetStrLen(pobjXzAdminClsEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.memo)(clsXzAdminClsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.modifyUserId) == false &&
    GetStrLen(pobjXzAdminClsEN.modifyUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(modifyUserId)]的长度不能超过18(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.modifyUserId)(clsXzAdminClsBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.modifyDate) == false &&
    GetStrLen(pobjXzAdminClsEN.modifyDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(modifyDate)]的长度不能超过20(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.modifyDate)(clsXzAdminClsBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idAdminCls) == false &&
    undefined !== pobjXzAdminClsEN.idAdminCls &&
    tzDataType.isString(pobjXzAdminClsEN.idAdminCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[行政班流水号(idAdminCls)]的值:[$(pobjXzAdminClsEN.idAdminCls)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.adminClsName) == false &&
    undefined !== pobjXzAdminClsEN.adminClsName &&
    tzDataType.isString(pobjXzAdminClsEN.adminClsName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[行政班名称(adminClsName)]的值:[$(pobjXzAdminClsEN.adminClsName)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idXzMajor) == false &&
    undefined !== pobjXzAdminClsEN.idXzMajor &&
    tzDataType.isString(pobjXzAdminClsEN.idXzMajor) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[专业流水号(idXzMajor)]的值:[$(pobjXzAdminClsEN.idXzMajor)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idXzCollege) == false &&
    undefined !== pobjXzAdminClsEN.idXzCollege &&
    tzDataType.isString(pobjXzAdminClsEN.idXzCollege) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学院流水号(idXzCollege)]的值:[$(pobjXzAdminClsEN.idXzCollege)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idUniZone) == false &&
    undefined !== pobjXzAdminClsEN.idUniZone &&
    tzDataType.isString(pobjXzAdminClsEN.idUniZone) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[校区流水号(idUniZone)]的值:[$(pobjXzAdminClsEN.idUniZone)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjXzAdminClsEN.currentStuQty &&
    undefined !== pobjXzAdminClsEN.currentStuQty &&
    tzDataType.isNumber(pobjXzAdminClsEN.currentStuQty) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[当前学生数(currentStuQty)]的值:[$(pobjXzAdminClsEN.currentStuQty)], 非法,应该为数值型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idGradeBase) == false &&
    undefined !== pobjXzAdminClsEN.idGradeBase &&
    tzDataType.isString(pobjXzAdminClsEN.idGradeBase) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[年级流水号(idGradeBase)]的值:[$(pobjXzAdminClsEN.idGradeBase)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.adminClsId) == false &&
    undefined !== pobjXzAdminClsEN.adminClsId &&
    tzDataType.isString(pobjXzAdminClsEN.adminClsId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[行政班代号(adminClsId)]的值:[$(pobjXzAdminClsEN.adminClsId)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idAdminClsType) == false &&
    undefined !== pobjXzAdminClsEN.idAdminClsType &&
    tzDataType.isString(pobjXzAdminClsEN.idAdminClsType) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[行政班级类型流水号(idAdminClsType)]的值:[$(pobjXzAdminClsEN.idAdminClsType)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjXzAdminClsEN.adminClsIndex &&
    undefined !== pobjXzAdminClsEN.adminClsIndex &&
    tzDataType.isNumber(pobjXzAdminClsEN.adminClsIndex) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[AdminClsIndex(adminClsIndex)]的值:[$(pobjXzAdminClsEN.adminClsIndex)], 非法,应该为数值型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.memo) == false &&
    undefined !== pobjXzAdminClsEN.memo &&
    tzDataType.isString(pobjXzAdminClsEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjXzAdminClsEN.memo)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.modifyUserId) == false &&
    undefined !== pobjXzAdminClsEN.modifyUserId &&
    tzDataType.isString(pobjXzAdminClsEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(modifyUserId)]的值:[$(pobjXzAdminClsEN.modifyUserId)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.modifyDate) == false &&
    undefined !== pobjXzAdminClsEN.modifyDate &&
    tzDataType.isString(pobjXzAdminClsEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(modifyDate)]的值:[$(pobjXzAdminClsEN.modifyDate)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function XzAdminCls_CheckProperty4Update(pobjXzAdminClsEN: clsXzAdminClsEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idAdminCls) == false &&
    GetStrLen(pobjXzAdminClsEN.idAdminCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[行政班流水号(idAdminCls)]的长度不能超过8(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.idAdminCls)(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.adminClsName) == false &&
    GetStrLen(pobjXzAdminClsEN.adminClsName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[行政班名称(adminClsName)]的长度不能超过100(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.adminClsName)(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idXzMajor) == false &&
    GetStrLen(pobjXzAdminClsEN.idXzMajor) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[专业流水号(idXzMajor)]的长度不能超过8(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.idXzMajor)(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idXzCollege) == false &&
    GetStrLen(pobjXzAdminClsEN.idXzCollege) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学院流水号(idXzCollege)]的长度不能超过4(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.idXzCollege)(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idUniZone) == false &&
    GetStrLen(pobjXzAdminClsEN.idUniZone) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[校区流水号(idUniZone)]的长度不能超过4(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.idUniZone)(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idGradeBase) == false &&
    GetStrLen(pobjXzAdminClsEN.idGradeBase) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[年级流水号(idGradeBase)]的长度不能超过4(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.idGradeBase)(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.adminClsId) == false &&
    GetStrLen(pobjXzAdminClsEN.adminClsId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[行政班代号(adminClsId)]的长度不能超过8(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.adminClsId)(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idAdminClsType) == false &&
    GetStrLen(pobjXzAdminClsEN.idAdminClsType) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[行政班级类型流水号(idAdminClsType)]的长度不能超过4(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.idAdminClsType)(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjXzAdminClsEN.memo) == false && GetStrLen(pobjXzAdminClsEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.memo)(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.modifyUserId) == false &&
    GetStrLen(pobjXzAdminClsEN.modifyUserId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(modifyUserId)]的长度不能超过18(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.modifyUserId)(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.modifyDate) == false &&
    GetStrLen(pobjXzAdminClsEN.modifyDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(modifyDate)]的长度不能超过20(In 行政班(XzAdminCls))!值:$(pobjXzAdminClsEN.modifyDate)(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idAdminCls) == false &&
    undefined !== pobjXzAdminClsEN.idAdminCls &&
    tzDataType.isString(pobjXzAdminClsEN.idAdminCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[行政班流水号(idAdminCls)]的值:[$(pobjXzAdminClsEN.idAdminCls)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.adminClsName) == false &&
    undefined !== pobjXzAdminClsEN.adminClsName &&
    tzDataType.isString(pobjXzAdminClsEN.adminClsName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[行政班名称(adminClsName)]的值:[$(pobjXzAdminClsEN.adminClsName)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idXzMajor) == false &&
    undefined !== pobjXzAdminClsEN.idXzMajor &&
    tzDataType.isString(pobjXzAdminClsEN.idXzMajor) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[专业流水号(idXzMajor)]的值:[$(pobjXzAdminClsEN.idXzMajor)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idXzCollege) == false &&
    undefined !== pobjXzAdminClsEN.idXzCollege &&
    tzDataType.isString(pobjXzAdminClsEN.idXzCollege) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学院流水号(idXzCollege)]的值:[$(pobjXzAdminClsEN.idXzCollege)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idUniZone) == false &&
    undefined !== pobjXzAdminClsEN.idUniZone &&
    tzDataType.isString(pobjXzAdminClsEN.idUniZone) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[校区流水号(idUniZone)]的值:[$(pobjXzAdminClsEN.idUniZone)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjXzAdminClsEN.currentStuQty &&
    undefined !== pobjXzAdminClsEN.currentStuQty &&
    tzDataType.isNumber(pobjXzAdminClsEN.currentStuQty) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[当前学生数(currentStuQty)]的值:[$(pobjXzAdminClsEN.currentStuQty)], 非法,应该为数值型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idGradeBase) == false &&
    undefined !== pobjXzAdminClsEN.idGradeBase &&
    tzDataType.isString(pobjXzAdminClsEN.idGradeBase) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[年级流水号(idGradeBase)]的值:[$(pobjXzAdminClsEN.idGradeBase)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.adminClsId) == false &&
    undefined !== pobjXzAdminClsEN.adminClsId &&
    tzDataType.isString(pobjXzAdminClsEN.adminClsId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[行政班代号(adminClsId)]的值:[$(pobjXzAdminClsEN.adminClsId)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.idAdminClsType) == false &&
    undefined !== pobjXzAdminClsEN.idAdminClsType &&
    tzDataType.isString(pobjXzAdminClsEN.idAdminClsType) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[行政班级类型流水号(idAdminClsType)]的值:[$(pobjXzAdminClsEN.idAdminClsType)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjXzAdminClsEN.adminClsIndex &&
    undefined !== pobjXzAdminClsEN.adminClsIndex &&
    tzDataType.isNumber(pobjXzAdminClsEN.adminClsIndex) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[AdminClsIndex(adminClsIndex)]的值:[$(pobjXzAdminClsEN.adminClsIndex)], 非法,应该为数值型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.memo) == false &&
    undefined !== pobjXzAdminClsEN.memo &&
    tzDataType.isString(pobjXzAdminClsEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjXzAdminClsEN.memo)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.modifyUserId) == false &&
    undefined !== pobjXzAdminClsEN.modifyUserId &&
    tzDataType.isString(pobjXzAdminClsEN.modifyUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(modifyUserId)]的值:[$(pobjXzAdminClsEN.modifyUserId)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjXzAdminClsEN.modifyDate) == false &&
    undefined !== pobjXzAdminClsEN.modifyDate &&
    tzDataType.isString(pobjXzAdminClsEN.modifyDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(modifyDate)]的值:[$(pobjXzAdminClsEN.modifyDate)], 非法,应该为字符型(In 行政班(XzAdminCls))!(clsXzAdminClsBL:CheckProperty4Update)',
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
export function XzAdminCls_GetJSONStrByObj(pobjXzAdminClsEN: clsXzAdminClsEN): string {
  pobjXzAdminClsEN.sfUpdFldSetStr = pobjXzAdminClsEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjXzAdminClsEN);
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
export function XzAdminCls_GetObjLstByJSONStr(strJSON: string): Array<clsXzAdminClsEN> {
  let arrXzAdminClsObjLst = new Array<clsXzAdminClsEN>();
  if (strJSON === '') {
    return arrXzAdminClsObjLst;
  }
  try {
    arrXzAdminClsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrXzAdminClsObjLst;
  }
  return arrXzAdminClsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrXzAdminClsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function XzAdminCls_GetObjLstByJSONObjLst(
  arrXzAdminClsObjLstS: Array<clsXzAdminClsEN>,
): Array<clsXzAdminClsEN> {
  const arrXzAdminClsObjLst = new Array<clsXzAdminClsEN>();
  for (const objInFor of arrXzAdminClsObjLstS) {
    const obj1 = XzAdminCls_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrXzAdminClsObjLst.push(obj1);
  }
  return arrXzAdminClsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function XzAdminCls_GetObjByJSONStr(strJSON: string): clsXzAdminClsEN {
  let pobjXzAdminClsEN = new clsXzAdminClsEN();
  if (strJSON === '') {
    return pobjXzAdminClsEN;
  }
  try {
    pobjXzAdminClsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjXzAdminClsEN;
  }
  return pobjXzAdminClsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function XzAdminCls_GetCombineCondition(objXzAdminClsCond: clsXzAdminClsEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsCond.dicFldComparisonOp,
      clsXzAdminClsEN.con_IdAdminCls,
    ) == true
  ) {
    const strComparisonOpIdAdminCls: string =
      objXzAdminClsCond.dicFldComparisonOp[clsXzAdminClsEN.con_IdAdminCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsEN.con_IdAdminCls,
      objXzAdminClsCond.idAdminCls,
      strComparisonOpIdAdminCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsCond.dicFldComparisonOp,
      clsXzAdminClsEN.con_AdminClsName,
    ) == true
  ) {
    const strComparisonOpAdminClsName: string =
      objXzAdminClsCond.dicFldComparisonOp[clsXzAdminClsEN.con_AdminClsName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsEN.con_AdminClsName,
      objXzAdminClsCond.adminClsName,
      strComparisonOpAdminClsName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsCond.dicFldComparisonOp,
      clsXzAdminClsEN.con_IdXzMajor,
    ) == true
  ) {
    const strComparisonOpIdXzMajor: string =
      objXzAdminClsCond.dicFldComparisonOp[clsXzAdminClsEN.con_IdXzMajor];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsEN.con_IdXzMajor,
      objXzAdminClsCond.idXzMajor,
      strComparisonOpIdXzMajor,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsCond.dicFldComparisonOp,
      clsXzAdminClsEN.con_IdXzCollege,
    ) == true
  ) {
    const strComparisonOpIdXzCollege: string =
      objXzAdminClsCond.dicFldComparisonOp[clsXzAdminClsEN.con_IdXzCollege];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsEN.con_IdXzCollege,
      objXzAdminClsCond.idXzCollege,
      strComparisonOpIdXzCollege,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsCond.dicFldComparisonOp,
      clsXzAdminClsEN.con_IdUniZone,
    ) == true
  ) {
    const strComparisonOpIdUniZone: string =
      objXzAdminClsCond.dicFldComparisonOp[clsXzAdminClsEN.con_IdUniZone];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsEN.con_IdUniZone,
      objXzAdminClsCond.idUniZone,
      strComparisonOpIdUniZone,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsCond.dicFldComparisonOp,
      clsXzAdminClsEN.con_CurrentStuQty,
    ) == true
  ) {
    const strComparisonOpCurrentStuQty: string =
      objXzAdminClsCond.dicFldComparisonOp[clsXzAdminClsEN.con_CurrentStuQty];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsXzAdminClsEN.con_CurrentStuQty,
      objXzAdminClsCond.currentStuQty,
      strComparisonOpCurrentStuQty,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsCond.dicFldComparisonOp,
      clsXzAdminClsEN.con_IdGradeBase,
    ) == true
  ) {
    const strComparisonOpIdGradeBase: string =
      objXzAdminClsCond.dicFldComparisonOp[clsXzAdminClsEN.con_IdGradeBase];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsEN.con_IdGradeBase,
      objXzAdminClsCond.idGradeBase,
      strComparisonOpIdGradeBase,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsCond.dicFldComparisonOp,
      clsXzAdminClsEN.con_AdminClsId,
    ) == true
  ) {
    const strComparisonOpAdminClsId: string =
      objXzAdminClsCond.dicFldComparisonOp[clsXzAdminClsEN.con_AdminClsId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsEN.con_AdminClsId,
      objXzAdminClsCond.adminClsId,
      strComparisonOpAdminClsId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsCond.dicFldComparisonOp,
      clsXzAdminClsEN.con_IdAdminClsType,
    ) == true
  ) {
    const strComparisonOpIdAdminClsType: string =
      objXzAdminClsCond.dicFldComparisonOp[clsXzAdminClsEN.con_IdAdminClsType];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsEN.con_IdAdminClsType,
      objXzAdminClsCond.idAdminClsType,
      strComparisonOpIdAdminClsType,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsCond.dicFldComparisonOp,
      clsXzAdminClsEN.con_AdminClsIndex,
    ) == true
  ) {
    const strComparisonOpAdminClsIndex: string =
      objXzAdminClsCond.dicFldComparisonOp[clsXzAdminClsEN.con_AdminClsIndex];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsXzAdminClsEN.con_AdminClsIndex,
      objXzAdminClsCond.adminClsIndex,
      strComparisonOpAdminClsIndex,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsCond.dicFldComparisonOp,
      clsXzAdminClsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objXzAdminClsCond.dicFldComparisonOp[clsXzAdminClsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsEN.con_Memo,
      objXzAdminClsCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsCond.dicFldComparisonOp,
      clsXzAdminClsEN.con_ModifyUserId,
    ) == true
  ) {
    const strComparisonOpModifyUserId: string =
      objXzAdminClsCond.dicFldComparisonOp[clsXzAdminClsEN.con_ModifyUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsEN.con_ModifyUserId,
      objXzAdminClsCond.modifyUserId,
      strComparisonOpModifyUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objXzAdminClsCond.dicFldComparisonOp,
      clsXzAdminClsEN.con_ModifyDate,
    ) == true
  ) {
    const strComparisonOpModifyDate: string =
      objXzAdminClsCond.dicFldComparisonOp[clsXzAdminClsEN.con_ModifyDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsXzAdminClsEN.con_ModifyDate,
      objXzAdminClsCond.modifyDate,
      strComparisonOpModifyDate,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--XzAdminCls(行政班),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strAdminClsName: 行政班名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function XzAdminCls_GetUniCondStr(objXzAdminClsEN: clsXzAdminClsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and AdminClsName = '{0}'", objXzAdminClsEN.adminClsName);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--XzAdminCls(行政班),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strAdminClsName: 行政班名称(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function XzAdminCls_GetUniCondStr4Update(objXzAdminClsEN: clsXzAdminClsEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and IdAdminCls <> '{0}'", objXzAdminClsEN.idAdminCls);
  strWhereCond += Format(" and AdminClsName = '{0}'", objXzAdminClsEN.adminClsName);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objXzAdminClsENS:源对象
 * @param objXzAdminClsENT:目标对象
 */
export function XzAdminCls_CopyObjTo(
  objXzAdminClsENS: clsXzAdminClsEN,
  objXzAdminClsENT: clsXzAdminClsEN,
): void {
  objXzAdminClsENT.idAdminCls = objXzAdminClsENS.idAdminCls; //行政班流水号
  objXzAdminClsENT.adminClsName = objXzAdminClsENS.adminClsName; //行政班名称
  objXzAdminClsENT.idXzMajor = objXzAdminClsENS.idXzMajor; //专业流水号
  objXzAdminClsENT.idXzCollege = objXzAdminClsENS.idXzCollege; //学院流水号
  objXzAdminClsENT.idUniZone = objXzAdminClsENS.idUniZone; //校区流水号
  objXzAdminClsENT.currentStuQty = objXzAdminClsENS.currentStuQty; //当前学生数
  objXzAdminClsENT.idGradeBase = objXzAdminClsENS.idGradeBase; //年级流水号
  objXzAdminClsENT.adminClsId = objXzAdminClsENS.adminClsId; //行政班代号
  objXzAdminClsENT.idAdminClsType = objXzAdminClsENS.idAdminClsType; //行政班级类型流水号
  objXzAdminClsENT.adminClsIndex = objXzAdminClsENS.adminClsIndex; //AdminClsIndex
  objXzAdminClsENT.memo = objXzAdminClsENS.memo; //备注
  objXzAdminClsENT.modifyUserId = objXzAdminClsENS.modifyUserId; //修改人
  objXzAdminClsENT.modifyDate = objXzAdminClsENS.modifyDate; //修改日期
  objXzAdminClsENT.sfUpdFldSetStr = objXzAdminClsENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objXzAdminClsENS:源对象
 * @param objXzAdminClsENT:目标对象
 */
export function XzAdminCls_GetObjFromJsonObj(objXzAdminClsENS: clsXzAdminClsEN): clsXzAdminClsEN {
  const objXzAdminClsENT: clsXzAdminClsEN = new clsXzAdminClsEN();
  ObjectAssign(objXzAdminClsENT, objXzAdminClsENS);
  return objXzAdminClsENT;
}
