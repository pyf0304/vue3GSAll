/**
 * 类名:clsUserTypeWApi
 * 表名:UserType(01120309)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:51:18
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:用户管理(UserManage)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 用户类型(UserType)
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
import { clsUserTypeEN } from '@/ts/L0Entity/UserManage/clsUserTypeEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const userType_Controller = 'UserTypeApi';
export const userType_ConstructorName = 'userType';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strUserTypeId:关键字
 * @returns 对象
 **/
export async function UserType_GetObjByUserTypeIdAsync(
  strUserTypeId: string,
): Promise<clsUserTypeEN | null> {
  const strThisFuncName = 'GetObjByUserTypeIdAsync';

  if (IsNullOrEmpty(strUserTypeId) == true) {
    const strMsg = Format(
      '参数:[strUserTypeId]不能为空!(In clsUserTypeWApi.GetObjByUserTypeIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strUserTypeId]的长度:[{0}]不正确!(clsUserTypeWApi.GetObjByUserTypeIdAsync)',
      strUserTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByUserTypeId';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserTypeId,
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
      const objUserType = UserType_GetObjFromJsonObj(returnObj);
      return objUserType;
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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
 * @param strUserTypeId:所给的关键字
 * @returns 对象
 */
export async function UserType_GetObjByUserTypeIdCache(
  strUserTypeId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByUserTypeIdCache';

  if (IsNullOrEmpty(strUserTypeId) == true) {
    const strMsg = Format(
      '参数:[strUserTypeId]不能为空!(In clsUserTypeWApi.GetObjByUserTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strUserTypeId]的长度:[{0}]不正确!(clsUserTypeWApi.GetObjByUserTypeIdCache)',
      strUserTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrUserTypeObjLstCache = await UserType_GetObjLstCache();
  try {
    const arrUserTypeSel = arrUserTypeObjLstCache.filter((x) => x.userTypeId == strUserTypeId);
    let objUserType: clsUserTypeEN;
    if (arrUserTypeSel.length > 0) {
      objUserType = arrUserTypeSel[0];
      return objUserType;
    } else {
      if (bolTryAsyncOnce == true) {
        const objUserTypeConst = await UserType_GetObjByUserTypeIdAsync(strUserTypeId);
        if (objUserTypeConst != null) {
          UserType_ReFreshThisCache();
          return objUserTypeConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserTypeId,
      userType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strUserTypeId:所给的关键字
 * @returns 对象
 */
export async function UserType_GetObjByUserTypeIdlocalStorage(strUserTypeId: string) {
  const strThisFuncName = 'GetObjByUserTypeIdlocalStorage';

  if (IsNullOrEmpty(strUserTypeId) == true) {
    const strMsg = Format(
      '参数:[strUserTypeId]不能为空!(In clsUserTypeWApi.GetObjByUserTypeIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strUserTypeId]的长度:[{0}]不正确!(clsUserTypeWApi.GetObjByUserTypeIdlocalStorage)',
      strUserTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsUserTypeEN._CurrTabName, strUserTypeId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objUserTypeCache: clsUserTypeEN = JSON.parse(strTempObj);
    return objUserTypeCache;
  }
  try {
    const objUserType = await UserType_GetObjByUserTypeIdAsync(strUserTypeId);
    if (objUserType != null) {
      localStorage.setItem(strKey, JSON.stringify(objUserType));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objUserType;
    }
    return objUserType;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserTypeId,
      userType_ConstructorName,
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
 * @param objUserType:所给的对象
 * @returns 对象
 */
export async function UserType_UpdateObjInLstCache(objUserType: clsUserTypeEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrUserTypeObjLstCache = await UserType_GetObjLstCache();
    const obj = arrUserTypeObjLstCache.find((x) => x.userTypeId == objUserType.userTypeId);
    if (obj != null) {
      objUserType.userTypeId = obj.userTypeId;
      ObjectAssign(obj, objUserType);
    } else {
      arrUserTypeObjLstCache.push(objUserType);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      userType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strUserTypeId:所给的关键字
 * @returns 对象
 */
export async function UserType_GetNameByUserTypeIdCache(strUserTypeId: string) {
  if (IsNullOrEmpty(strUserTypeId) == true) {
    const strMsg = Format(
      '参数:[strUserTypeId]不能为空!(In clsUserTypeWApi.GetNameByUserTypeIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strUserTypeId.length != 2) {
    const strMsg = Format(
      '缓存分类变量:[strUserTypeId]的长度:[{0}]不正确!(clsUserTypeWApi.GetNameByUserTypeIdCache)',
      strUserTypeId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrUserTypeObjLstCache = await UserType_GetObjLstCache();
  if (arrUserTypeObjLstCache == null) return '';
  try {
    const arrUserTypeSel = arrUserTypeObjLstCache.filter((x) => x.userTypeId == strUserTypeId);
    let objUserType: clsUserTypeEN;
    if (arrUserTypeSel.length > 0) {
      objUserType = arrUserTypeSel[0];
      return objUserType.userTypeName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strUserTypeId,
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
export async function UserType_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsUserTypeEN.con_UserTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsUserTypeEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsUserTypeEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strUserTypeId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objUserType = await UserType_GetObjByUserTypeIdCache(strUserTypeId);
  if (objUserType == null) return '';
  if (objUserType.GetFldValue(strOutFldName) == null) return '';
  return objUserType.GetFldValue(strOutFldName).toString();
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
export function UserType_SortFunDefa(a: clsUserTypeEN, b: clsUserTypeEN): number {
  return a.userTypeId.localeCompare(b.userTypeId);
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
export function UserType_SortFunDefa2Fld(a: clsUserTypeEN, b: clsUserTypeEN): number {
  if (a.userTypeName == b.userTypeName) return a.userTypeNameSim.localeCompare(b.userTypeNameSim);
  else return a.userTypeName.localeCompare(b.userTypeName);
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
export function UserType_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUserTypeEN.con_UserTypeId:
        return (a: clsUserTypeEN, b: clsUserTypeEN) => {
          return a.userTypeId.localeCompare(b.userTypeId);
        };
      case clsUserTypeEN.con_UserTypeName:
        return (a: clsUserTypeEN, b: clsUserTypeEN) => {
          return a.userTypeName.localeCompare(b.userTypeName);
        };
      case clsUserTypeEN.con_UserTypeNameSim:
        return (a: clsUserTypeEN, b: clsUserTypeEN) => {
          return a.userTypeNameSim.localeCompare(b.userTypeNameSim);
        };
      case clsUserTypeEN.con_Memo:
        return (a: clsUserTypeEN, b: clsUserTypeEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserType]中不存在!(in ${userType_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsUserTypeEN.con_UserTypeId:
        return (a: clsUserTypeEN, b: clsUserTypeEN) => {
          return b.userTypeId.localeCompare(a.userTypeId);
        };
      case clsUserTypeEN.con_UserTypeName:
        return (a: clsUserTypeEN, b: clsUserTypeEN) => {
          return b.userTypeName.localeCompare(a.userTypeName);
        };
      case clsUserTypeEN.con_UserTypeNameSim:
        return (a: clsUserTypeEN, b: clsUserTypeEN) => {
          return b.userTypeNameSim.localeCompare(a.userTypeNameSim);
        };
      case clsUserTypeEN.con_Memo:
        return (a: clsUserTypeEN, b: clsUserTypeEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[UserType]中不存在!(in ${userType_ConstructorName}.${strThisFuncName})`;
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
export async function UserType_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsUserTypeEN.con_UserTypeId:
      return (obj: clsUserTypeEN) => {
        return obj.userTypeId === value;
      };
    case clsUserTypeEN.con_UserTypeName:
      return (obj: clsUserTypeEN) => {
        return obj.userTypeName === value;
      };
    case clsUserTypeEN.con_UserTypeNameSim:
      return (obj: clsUserTypeEN) => {
        return obj.userTypeNameSim === value;
      };
    case clsUserTypeEN.con_Memo:
      return (obj: clsUserTypeEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[UserType]中不存在!(in ${userType_ConstructorName}.${strThisFuncName})`;
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
export async function UserType_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsUserTypeEN.con_UserTypeId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrUserType = await UserType_GetObjLstCache();
  if (arrUserType == null) return [];
  let arrUserTypeSel = arrUserType;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrUserTypeSel = arrUserTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrUserTypeSel = arrUserTypeSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrUserTypeSel = arrUserTypeSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strInFldName) == strInValue);
          break;
        case enumComparisonOp.NotEqual_02:
          arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strInFldName) != strInValue);
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strInFldName) >= strInValue);
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strInFldName) > strInValue);
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strInFldName) <= strInValue);
          break;
      }
      break;
  }
  if (arrUserTypeSel.length == 0) return [];
  return arrUserTypeSel.map((x) => x.userTypeId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserType_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
export async function UserType_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
export async function UserType_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsUserTypeEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

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
      const objUserType = UserType_GetObjFromJsonObj(returnObj);
      return objUserType;
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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
export async function UserType_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsUserTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsUserTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrUserTypeExObjLstCache: Array<clsUserTypeEN> = CacheHelper.Get(strKey);
    const arrUserTypeObjLstT = UserType_GetObjLstByJSONObjLst(arrUserTypeExObjLstCache);
    return arrUserTypeObjLstT;
  }
  try {
    const arrUserTypeExObjLst = await UserType_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrUserTypeExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrUserTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userType_ConstructorName,
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
export async function UserType_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsUserTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsUserTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrUserTypeExObjLstCache: Array<clsUserTypeEN> = JSON.parse(strTempObjLst);
    const arrUserTypeObjLstT = UserType_GetObjLstByJSONObjLst(arrUserTypeExObjLstCache);
    return arrUserTypeObjLstT;
  }
  try {
    const arrUserTypeExObjLst = await UserType_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrUserTypeExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrUserTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userType_ConstructorName,
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
export async function UserType_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsUserTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrUserTypeObjLstCache: Array<clsUserTypeEN> = JSON.parse(strTempObjLst);
    return arrUserTypeObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function UserType_GetObjLstAsync(strWhereCond: string): Promise<Array<clsUserTypeEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

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
          userType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserType_GetObjLstByJSONObjLst(returnObjLst);
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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
export async function UserType_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsUserTypeEN._CurrTabName;
  if (IsNullOrEmpty(clsUserTypeEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsUserTypeEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrUserTypeExObjLstCache: Array<clsUserTypeEN> = JSON.parse(strTempObjLst);
    const arrUserTypeObjLstT = UserType_GetObjLstByJSONObjLst(arrUserTypeExObjLstCache);
    return arrUserTypeObjLstT;
  }
  try {
    const arrUserTypeExObjLst = await UserType_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrUserTypeExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrUserTypeExObjLst.length,
    );
    console.log(strInfo);
    return arrUserTypeExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      userType_ConstructorName,
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
export async function UserType_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsUserTypeEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrUserTypeObjLstCache: Array<clsUserTypeEN> = JSON.parse(strTempObjLst);
    return arrUserTypeObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserType_GetObjLstCache(): Promise<Array<clsUserTypeEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrUserTypeObjLstCache;
  switch (clsUserTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrUserTypeObjLstCache = await UserType_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrUserTypeObjLstCache = await UserType_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrUserTypeObjLstCache = await UserType_GetObjLstClientCache();
      break;
    default:
      arrUserTypeObjLstCache = await UserType_GetObjLstClientCache();
      break;
  }
  return arrUserTypeObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function UserType_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrUserTypeObjLstCache;
  switch (clsUserTypeEN.CacheModeId) {
    case '04': //sessionStorage
      arrUserTypeObjLstCache = await UserType_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrUserTypeObjLstCache = await UserType_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrUserTypeObjLstCache = null;
      break;
    default:
      arrUserTypeObjLstCache = null;
      break;
  }
  return arrUserTypeObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrUserTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function UserType_GetSubObjLstCache(objUserTypeCond: clsUserTypeEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrUserTypeObjLstCache = await UserType_GetObjLstCache();
  let arrUserTypeSel = arrUserTypeObjLstCache;
  if (objUserTypeCond.sfFldComparisonOp == null || objUserTypeCond.sfFldComparisonOp == '')
    return arrUserTypeSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUserTypeCond.sfFldComparisonOp,
  );
  //console.log("clsUserTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUserTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrUserTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objUserTypeCond),
      userType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserTypeEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrUserTypeId:关键字列表
 * @returns 对象列表
 **/
export async function UserType_GetObjLstByUserTypeIdLstAsync(
  arrUserTypeId: Array<string>,
): Promise<Array<clsUserTypeEN>> {
  const strThisFuncName = 'GetObjLstByUserTypeIdLstAsync';
  const strAction = 'GetObjLstByUserTypeIdLst';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrUserTypeId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          userType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserType_GetObjLstByJSONObjLst(returnObjLst);
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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
 * @param arrstrUserTypeIdLst:关键字列表
 * @returns 对象列表
 */
export async function UserType_GetObjLstByUserTypeIdLstCache(arrUserTypeIdLst: Array<string>) {
  const strThisFuncName = 'GetObjLstByUserTypeIdLstCache';
  try {
    const arrUserTypeObjLstCache = await UserType_GetObjLstCache();
    const arrUserTypeSel = arrUserTypeObjLstCache.filter(
      (x) => arrUserTypeIdLst.indexOf(x.userTypeId) > -1,
    );
    return arrUserTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrUserTypeIdLst.join(','),
      userType_ConstructorName,
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
export async function UserType_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsUserTypeEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

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
          userType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserType_GetObjLstByJSONObjLst(returnObjLst);
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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
export async function UserType_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsUserTypeEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

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
          userType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserType_GetObjLstByJSONObjLst(returnObjLst);
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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
export async function UserType_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserTypeEN>();
  const arrUserTypeObjLstCache = await UserType_GetObjLstCache();
  if (arrUserTypeObjLstCache.length == 0) return arrUserTypeObjLstCache;
  let arrUserTypeSel = arrUserTypeObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objUserTypeCond = new clsUserTypeEN();
  ObjectAssign(objUserTypeCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsUserTypeWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrUserTypeSel.length == 0) return arrUserTypeSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUserTypeSel = arrUserTypeSel.sort(UserType_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrUserTypeSel = arrUserTypeSel.sort(objPagerPara.sortFun);
    }
    arrUserTypeSel = arrUserTypeSel.slice(intStart, intEnd);
    return arrUserTypeSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      userType_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUserTypeEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function UserType_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUserTypeEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsUserTypeEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

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
          userType_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = UserType_GetObjLstByJSONObjLst(returnObjLst);
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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
 * @param strUserTypeId:关键字
 * @returns 获取删除的结果
 **/
export async function UserType_DelRecordAsync(strUserTypeId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(userType_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strUserTypeId);

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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
 * @param arrUserTypeId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function UserType_DelUserTypesAsync(arrUserTypeId: Array<string>): Promise<number> {
  const strThisFuncName = 'DelUserTypesAsync';
  const strAction = 'DelUserTypes';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrUserTypeId, config);
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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
export async function UserType_DelUserTypesByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'DelUserTypesByCondAsync';
  const strAction = 'DelUserTypesByCond';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
 * @param objUserTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserType_AddNewRecordAsync(objUserTypeEN: clsUserTypeEN): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objUserTypeEN.userTypeId === null || objUserTypeEN.userTypeId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objUserTypeEN);
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserTypeEN, config);
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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
 * @param objUserTypeEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function UserType_AddNewRecordWithMaxIdAsync(
  objUserTypeEN: clsUserTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserTypeEN, config);
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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
 * @param objUserTypeEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function UserType_AddNewRecordWithReturnKeyAsync(
  objUserTypeEN: clsUserTypeEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserTypeEN, config);
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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
 * @param objUserTypeEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function UserType_UpdateRecordAsync(objUserTypeEN: clsUserTypeEN): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objUserTypeEN.sfUpdFldSetStr === undefined ||
    objUserTypeEN.sfUpdFldSetStr === null ||
    objUserTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objUserTypeEN.userTypeId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserTypeEN, config);
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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
 * @param objUserTypeEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function UserType_UpdateWithConditionAsync(
  objUserTypeEN: clsUserTypeEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objUserTypeEN.sfUpdFldSetStr === undefined ||
    objUserTypeEN.sfUpdFldSetStr === null ||
    objUserTypeEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objUserTypeEN.userTypeId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(userType_Controller, strAction);
  objUserTypeEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objUserTypeEN, config);
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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
 * @param objstrUserTypeIdCond:条件对象
 * @returns 对象列表子集
 */
export async function UserType_IsExistRecordCache(objUserTypeCond: clsUserTypeEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrUserTypeObjLstCache = await UserType_GetObjLstCache();
  if (arrUserTypeObjLstCache == null) return false;
  let arrUserTypeSel = arrUserTypeObjLstCache;
  if (objUserTypeCond.sfFldComparisonOp == null || objUserTypeCond.sfFldComparisonOp == '')
    return arrUserTypeSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUserTypeCond.sfFldComparisonOp,
  );
  //console.log("clsUserTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUserTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrUserTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objUserTypeCond),
      userType_ConstructorName,
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
export async function UserType_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
 * @param strUserTypeId:所给的关键字
 * @returns 对象
 */
export async function UserType_IsExistCache(strUserTypeId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrUserTypeObjLstCache = await UserType_GetObjLstCache();
  if (arrUserTypeObjLstCache == null) return false;
  try {
    const arrUserTypeSel = arrUserTypeObjLstCache.filter((x) => x.userTypeId == strUserTypeId);
    if (arrUserTypeSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strUserTypeId,
      userType_ConstructorName,
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
 * @param strUserTypeId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function UserType_IsExistAsync(strUserTypeId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strUserTypeId,
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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
export async function UserType_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
 * @param objUserTypeCond:条件对象
 * @returns 对象列表记录数
 */
export async function UserType_GetRecCountByCondCache(objUserTypeCond: clsUserTypeEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrUserTypeObjLstCache = await UserType_GetObjLstCache();
  if (arrUserTypeObjLstCache == null) return 0;
  let arrUserTypeSel = arrUserTypeObjLstCache;
  if (objUserTypeCond.sfFldComparisonOp == null || objUserTypeCond.sfFldComparisonOp == '')
    return arrUserTypeSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objUserTypeCond.sfFldComparisonOp,
  );
  //console.log("clsUserTypeWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objUserTypeCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUserTypeCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrUserTypeSel = arrUserTypeSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUserTypeSel = arrUserTypeSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrUserTypeSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objUserTypeCond),
      userType_ConstructorName,
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
export async function UserType_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(userType_Controller, strAction);

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
        userType_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        userType_ConstructorName,
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
export function UserType_GetWebApiUrl(strController: string, strAction: string): string {
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
export function UserType_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsUserTypeEN._CurrTabName;
  switch (clsUserTypeEN.CacheModeId) {
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
export function UserType_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsUserTypeEN._CurrTabName;
    switch (clsUserTypeEN.CacheModeId) {
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
export async function UserType_BindDdl_UserTypeIdInDivCache(
  objDiv: HTMLDivElement,
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In BindDdl_UserTypeIdInDiv)', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：BindDdl_UserTypeIdInDivCache");
  const arrObjLstSel = await UserType_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsUserTypeEN.con_UserTypeId,
    clsUserTypeEN.con_UserTypeName,
    '用户类型',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserType_CheckPropertyNew(pobjUserTypeEN: clsUserTypeEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjUserTypeEN.userTypeName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[用户类型名称]不能为空(In 用户类型)!(clsUserTypeBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjUserTypeEN.userTypeNameSim) === true) {
    throw new Error(
      '(errid:Watl000411)字段[用户类型名_Sim]不能为空(In 用户类型)!(clsUserTypeBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjUserTypeEN.userTypeId) == false &&
    GetStrLen(pobjUserTypeEN.userTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户类型Id(userTypeId)]的长度不能超过2(In 用户类型(UserType))!值:$(pobjUserTypeEN.userTypeId)(clsUserTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserTypeEN.userTypeName) == false &&
    GetStrLen(pobjUserTypeEN.userTypeName) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户类型名称(userTypeName)]的长度不能超过20(In 用户类型(UserType))!值:$(pobjUserTypeEN.userTypeName)(clsUserTypeBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserTypeEN.userTypeNameSim) == false &&
    GetStrLen(pobjUserTypeEN.userTypeNameSim) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户类型名_Sim(userTypeNameSim)]的长度不能超过20(In 用户类型(UserType))!值:$(pobjUserTypeEN.userTypeNameSim)(clsUserTypeBL:CheckPropertyNew)',
    );
  }
  if (IsNullOrEmpty(pobjUserTypeEN.memo) == false && GetStrLen(pobjUserTypeEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 用户类型(UserType))!值:$(pobjUserTypeEN.memo)(clsUserTypeBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjUserTypeEN.userTypeId) == false &&
    undefined !== pobjUserTypeEN.userTypeId &&
    tzDataType.isString(pobjUserTypeEN.userTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户类型Id(userTypeId)]的值:[$(pobjUserTypeEN.userTypeId)], 非法,应该为字符型(In 用户类型(UserType))!(clsUserTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserTypeEN.userTypeName) == false &&
    undefined !== pobjUserTypeEN.userTypeName &&
    tzDataType.isString(pobjUserTypeEN.userTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户类型名称(userTypeName)]的值:[$(pobjUserTypeEN.userTypeName)], 非法,应该为字符型(In 用户类型(UserType))!(clsUserTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserTypeEN.userTypeNameSim) == false &&
    undefined !== pobjUserTypeEN.userTypeNameSim &&
    tzDataType.isString(pobjUserTypeEN.userTypeNameSim) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户类型名_Sim(userTypeNameSim)]的值:[$(pobjUserTypeEN.userTypeNameSim)], 非法,应该为字符型(In 用户类型(UserType))!(clsUserTypeBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserTypeEN.memo) == false &&
    undefined !== pobjUserTypeEN.memo &&
    tzDataType.isString(pobjUserTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjUserTypeEN.memo)], 非法,应该为字符型(In 用户类型(UserType))!(clsUserTypeBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function UserType_CheckProperty4Update(pobjUserTypeEN: clsUserTypeEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjUserTypeEN.userTypeId) == false &&
    GetStrLen(pobjUserTypeEN.userTypeId) > 2
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户类型Id(userTypeId)]的长度不能超过2(In 用户类型(UserType))!值:$(pobjUserTypeEN.userTypeId)(clsUserTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserTypeEN.userTypeName) == false &&
    GetStrLen(pobjUserTypeEN.userTypeName) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户类型名称(userTypeName)]的长度不能超过20(In 用户类型(UserType))!值:$(pobjUserTypeEN.userTypeName)(clsUserTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserTypeEN.userTypeNameSim) == false &&
    GetStrLen(pobjUserTypeEN.userTypeNameSim) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户类型名_Sim(userTypeNameSim)]的长度不能超过20(In 用户类型(UserType))!值:$(pobjUserTypeEN.userTypeNameSim)(clsUserTypeBL:CheckProperty4Update)',
    );
  }
  if (IsNullOrEmpty(pobjUserTypeEN.memo) == false && GetStrLen(pobjUserTypeEN.memo) > 1000) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 用户类型(UserType))!值:$(pobjUserTypeEN.memo)(clsUserTypeBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjUserTypeEN.userTypeId) == false &&
    undefined !== pobjUserTypeEN.userTypeId &&
    tzDataType.isString(pobjUserTypeEN.userTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户类型Id(userTypeId)]的值:[$(pobjUserTypeEN.userTypeId)], 非法,应该为字符型(In 用户类型(UserType))!(clsUserTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserTypeEN.userTypeName) == false &&
    undefined !== pobjUserTypeEN.userTypeName &&
    tzDataType.isString(pobjUserTypeEN.userTypeName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户类型名称(userTypeName)]的值:[$(pobjUserTypeEN.userTypeName)], 非法,应该为字符型(In 用户类型(UserType))!(clsUserTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserTypeEN.userTypeNameSim) == false &&
    undefined !== pobjUserTypeEN.userTypeNameSim &&
    tzDataType.isString(pobjUserTypeEN.userTypeNameSim) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户类型名_Sim(userTypeNameSim)]的值:[$(pobjUserTypeEN.userTypeNameSim)], 非法,应该为字符型(In 用户类型(UserType))!(clsUserTypeBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjUserTypeEN.memo) == false &&
    undefined !== pobjUserTypeEN.memo &&
    tzDataType.isString(pobjUserTypeEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjUserTypeEN.memo)], 非法,应该为字符型(In 用户类型(UserType))!(clsUserTypeBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    IsNullOrEmpty(pobjUserTypeEN.userTypeId) === true ||
    pobjUserTypeEN.userTypeId.toString() === '0'
  ) {
    throw new Error(
      '(errid:Watl000064)字段[用户类型Id]不能为空(In 用户类型)!(clsUserTypeBL:CheckProperty4Update)',
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
export function UserType_GetJSONStrByObj(pobjUserTypeEN: clsUserTypeEN): string {
  pobjUserTypeEN.sfUpdFldSetStr = pobjUserTypeEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjUserTypeEN);
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
export function UserType_GetObjLstByJSONStr(strJSON: string): Array<clsUserTypeEN> {
  let arrUserTypeObjLst = new Array<clsUserTypeEN>();
  if (strJSON === '') {
    return arrUserTypeObjLst;
  }
  try {
    arrUserTypeObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrUserTypeObjLst;
  }
  return arrUserTypeObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrUserTypeObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function UserType_GetObjLstByJSONObjLst(
  arrUserTypeObjLstS: Array<clsUserTypeEN>,
): Array<clsUserTypeEN> {
  const arrUserTypeObjLst = new Array<clsUserTypeEN>();
  for (const objInFor of arrUserTypeObjLstS) {
    const obj1 = UserType_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrUserTypeObjLst.push(obj1);
  }
  return arrUserTypeObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function UserType_GetObjByJSONStr(strJSON: string): clsUserTypeEN {
  let pobjUserTypeEN = new clsUserTypeEN();
  if (strJSON === '') {
    return pobjUserTypeEN;
  }
  try {
    pobjUserTypeEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjUserTypeEN;
  }
  return pobjUserTypeEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function UserType_GetCombineCondition(objUserTypeCond: clsUserTypeEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objUserTypeCond.dicFldComparisonOp,
      clsUserTypeEN.con_UserTypeId,
    ) == true
  ) {
    const strComparisonOpUserTypeId: string =
      objUserTypeCond.dicFldComparisonOp[clsUserTypeEN.con_UserTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserTypeEN.con_UserTypeId,
      objUserTypeCond.userTypeId,
      strComparisonOpUserTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserTypeCond.dicFldComparisonOp,
      clsUserTypeEN.con_UserTypeName,
    ) == true
  ) {
    const strComparisonOpUserTypeName: string =
      objUserTypeCond.dicFldComparisonOp[clsUserTypeEN.con_UserTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserTypeEN.con_UserTypeName,
      objUserTypeCond.userTypeName,
      strComparisonOpUserTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserTypeCond.dicFldComparisonOp,
      clsUserTypeEN.con_UserTypeNameSim,
    ) == true
  ) {
    const strComparisonOpUserTypeNameSim: string =
      objUserTypeCond.dicFldComparisonOp[clsUserTypeEN.con_UserTypeNameSim];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserTypeEN.con_UserTypeNameSim,
      objUserTypeCond.userTypeNameSim,
      strComparisonOpUserTypeNameSim,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objUserTypeCond.dicFldComparisonOp,
      clsUserTypeEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string = objUserTypeCond.dicFldComparisonOp[clsUserTypeEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsUserTypeEN.con_Memo,
      objUserTypeCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objUserTypeENS:源对象
 * @param objUserTypeENT:目标对象
 */
export function UserType_CopyObjTo(
  objUserTypeENS: clsUserTypeEN,
  objUserTypeENT: clsUserTypeEN,
): void {
  objUserTypeENT.userTypeId = objUserTypeENS.userTypeId; //用户类型Id
  objUserTypeENT.userTypeName = objUserTypeENS.userTypeName; //用户类型名称
  objUserTypeENT.userTypeNameSim = objUserTypeENS.userTypeNameSim; //用户类型名_Sim
  objUserTypeENT.memo = objUserTypeENS.memo; //备注
  objUserTypeENT.sfUpdFldSetStr = objUserTypeENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objUserTypeENS:源对象
 * @param objUserTypeENT:目标对象
 */
export function UserType_GetObjFromJsonObj(objUserTypeENS: clsUserTypeEN): clsUserTypeEN {
  const objUserTypeENT: clsUserTypeEN = new clsUserTypeEN();
  ObjectAssign(objUserTypeENT, objUserTypeENS);
  return objUserTypeENT;
}
