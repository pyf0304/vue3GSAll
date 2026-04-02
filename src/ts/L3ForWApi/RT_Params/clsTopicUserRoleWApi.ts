/**
 * 类名:clsTopicUserRoleWApi
 * 表名:TopicUserRole(01120590)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:48:37
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
 * 主题用户角色(TopicUserRole)
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
import { clsTopicUserRoleEN } from '@/ts/L0Entity/RT_Params/clsTopicUserRoleEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const topicUserRole_Controller = 'TopicUserRoleApi';
export const topicUserRole_ConstructorName = 'topicUserRole';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTopicUserRoleId:关键字
 * @returns 对象
 **/
export async function TopicUserRole_GetObjByTopicUserRoleIdAsync(
  strTopicUserRoleId: string,
): Promise<clsTopicUserRoleEN | null> {
  const strThisFuncName = 'GetObjByTopicUserRoleIdAsync';

  if (IsNullOrEmpty(strTopicUserRoleId) == true) {
    const strMsg = Format(
      '参数:[strTopicUserRoleId]不能为空!(In clsTopicUserRoleWApi.GetObjByTopicUserRoleIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicUserRoleId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strTopicUserRoleId]的长度:[{0}]不正确!(clsTopicUserRoleWApi.GetObjByTopicUserRoleIdAsync)',
      strTopicUserRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTopicUserRoleId';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTopicUserRoleId,
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
      const objTopicUserRole = TopicUserRole_GetObjFromJsonObj(returnObj);
      return objTopicUserRole;
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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
 * @param strTopicUserRoleId:所给的关键字
 * @returns 对象
 */
export async function TopicUserRole_GetObjByTopicUserRoleIdCache(
  strTopicUserRoleId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTopicUserRoleIdCache';

  if (IsNullOrEmpty(strTopicUserRoleId) == true) {
    const strMsg = Format(
      '参数:[strTopicUserRoleId]不能为空!(In clsTopicUserRoleWApi.GetObjByTopicUserRoleIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicUserRoleId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strTopicUserRoleId]的长度:[{0}]不正确!(clsTopicUserRoleWApi.GetObjByTopicUserRoleIdCache)',
      strTopicUserRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstCache();
  try {
    const arrTopicUserRoleSel = arrTopicUserRoleObjLstCache.filter(
      (x) => x.topicUserRoleId == strTopicUserRoleId,
    );
    let objTopicUserRole: clsTopicUserRoleEN;
    if (arrTopicUserRoleSel.length > 0) {
      objTopicUserRole = arrTopicUserRoleSel[0];
      return objTopicUserRole;
    } else {
      if (bolTryAsyncOnce == true) {
        const objTopicUserRoleConst = await TopicUserRole_GetObjByTopicUserRoleIdAsync(
          strTopicUserRoleId,
        );
        if (objTopicUserRoleConst != null) {
          TopicUserRole_ReFreshThisCache();
          return objTopicUserRoleConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTopicUserRoleId,
      topicUserRole_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strTopicUserRoleId:所给的关键字
 * @returns 对象
 */
export async function TopicUserRole_GetObjByTopicUserRoleIdlocalStorage(
  strTopicUserRoleId: string,
) {
  const strThisFuncName = 'GetObjByTopicUserRoleIdlocalStorage';

  if (IsNullOrEmpty(strTopicUserRoleId) == true) {
    const strMsg = Format(
      '参数:[strTopicUserRoleId]不能为空!(In clsTopicUserRoleWApi.GetObjByTopicUserRoleIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicUserRoleId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strTopicUserRoleId]的长度:[{0}]不正确!(clsTopicUserRoleWApi.GetObjByTopicUserRoleIdlocalStorage)',
      strTopicUserRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsTopicUserRoleEN._CurrTabName, strTopicUserRoleId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objTopicUserRoleCache: clsTopicUserRoleEN = JSON.parse(strTempObj);
    return objTopicUserRoleCache;
  }
  try {
    const objTopicUserRole = await TopicUserRole_GetObjByTopicUserRoleIdAsync(strTopicUserRoleId);
    if (objTopicUserRole != null) {
      localStorage.setItem(strKey, JSON.stringify(objTopicUserRole));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objTopicUserRole;
    }
    return objTopicUserRole;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTopicUserRoleId,
      topicUserRole_ConstructorName,
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
 * @param objTopicUserRole:所给的对象
 * @returns 对象
 */
export async function TopicUserRole_UpdateObjInLstCache(objTopicUserRole: clsTopicUserRoleEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstCache();
    const obj = arrTopicUserRoleObjLstCache.find(
      (x) => x.topicUserRoleId == objTopicUserRole.topicUserRoleId,
    );
    if (obj != null) {
      objTopicUserRole.topicUserRoleId = obj.topicUserRoleId;
      ObjectAssign(obj, objTopicUserRole);
    } else {
      arrTopicUserRoleObjLstCache.push(objTopicUserRole);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      topicUserRole_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 根据关键字获取相关对象的名称属性, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetNameByKeyIdCache)
 * @param strTopicUserRoleId:所给的关键字
 * @returns 对象
 */
export async function TopicUserRole_GetNameByTopicUserRoleIdCache(strTopicUserRoleId: string) {
  if (IsNullOrEmpty(strTopicUserRoleId) == true) {
    const strMsg = Format(
      '参数:[strTopicUserRoleId]不能为空!(In clsTopicUserRoleWApi.GetNameByTopicUserRoleIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicUserRoleId.length != 4) {
    const strMsg = Format(
      '缓存分类变量:[strTopicUserRoleId]的长度:[{0}]不正确!(clsTopicUserRoleWApi.GetNameByTopicUserRoleIdCache)',
      strTopicUserRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstCache();
  if (arrTopicUserRoleObjLstCache == null) return '';
  try {
    const arrTopicUserRoleSel = arrTopicUserRoleObjLstCache.filter(
      (x) => x.topicUserRoleId == strTopicUserRoleId,
    );
    let objTopicUserRole: clsTopicUserRoleEN;
    if (arrTopicUserRoleSel.length > 0) {
      objTopicUserRole = arrTopicUserRoleSel[0];
      return objTopicUserRole.topicUserRoleName;
    } else {
      return '';
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象名称属性不成功!',
      e,
      strTopicUserRoleId,
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
export async function TopicUserRole_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsTopicUserRoleEN.con_TopicUserRoleId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsTopicUserRoleEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsTopicUserRoleEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTopicUserRoleId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objTopicUserRole = await TopicUserRole_GetObjByTopicUserRoleIdCache(strTopicUserRoleId);
  if (objTopicUserRole == null) return '';
  if (objTopicUserRole.GetFldValue(strOutFldName) == null) return '';
  return objTopicUserRole.GetFldValue(strOutFldName).toString();
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
export function TopicUserRole_SortFunDefa(a: clsTopicUserRoleEN, b: clsTopicUserRoleEN): number {
  return a.topicUserRoleId.localeCompare(b.topicUserRoleId);
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
export function TopicUserRole_SortFunDefa2Fld(
  a: clsTopicUserRoleEN,
  b: clsTopicUserRoleEN,
): number {
  if (a.topicUserRoleName == b.topicUserRoleName)
    return a.topicUserRoleENName.localeCompare(b.topicUserRoleENName);
  else return a.topicUserRoleName.localeCompare(b.topicUserRoleName);
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
export function TopicUserRole_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsTopicUserRoleEN.con_TopicUserRoleId:
        return (a: clsTopicUserRoleEN, b: clsTopicUserRoleEN) => {
          return a.topicUserRoleId.localeCompare(b.topicUserRoleId);
        };
      case clsTopicUserRoleEN.con_TopicUserRoleName:
        return (a: clsTopicUserRoleEN, b: clsTopicUserRoleEN) => {
          return a.topicUserRoleName.localeCompare(b.topicUserRoleName);
        };
      case clsTopicUserRoleEN.con_TopicUserRoleENName:
        return (a: clsTopicUserRoleEN, b: clsTopicUserRoleEN) => {
          if (a.topicUserRoleENName == null) return -1;
          if (b.topicUserRoleENName == null) return 1;
          return a.topicUserRoleENName.localeCompare(b.topicUserRoleENName);
        };
      case clsTopicUserRoleEN.con_UpdUserId:
        return (a: clsTopicUserRoleEN, b: clsTopicUserRoleEN) => {
          return a.updUserId.localeCompare(b.updUserId);
        };
      case clsTopicUserRoleEN.con_UpdDate:
        return (a: clsTopicUserRoleEN, b: clsTopicUserRoleEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsTopicUserRoleEN.con_Memo:
        return (a: clsTopicUserRoleEN, b: clsTopicUserRoleEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TopicUserRole]中不存在!(in ${topicUserRole_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsTopicUserRoleEN.con_TopicUserRoleId:
        return (a: clsTopicUserRoleEN, b: clsTopicUserRoleEN) => {
          return b.topicUserRoleId.localeCompare(a.topicUserRoleId);
        };
      case clsTopicUserRoleEN.con_TopicUserRoleName:
        return (a: clsTopicUserRoleEN, b: clsTopicUserRoleEN) => {
          return b.topicUserRoleName.localeCompare(a.topicUserRoleName);
        };
      case clsTopicUserRoleEN.con_TopicUserRoleENName:
        return (a: clsTopicUserRoleEN, b: clsTopicUserRoleEN) => {
          if (b.topicUserRoleENName == null) return -1;
          if (a.topicUserRoleENName == null) return 1;
          return b.topicUserRoleENName.localeCompare(a.topicUserRoleENName);
        };
      case clsTopicUserRoleEN.con_UpdUserId:
        return (a: clsTopicUserRoleEN, b: clsTopicUserRoleEN) => {
          return b.updUserId.localeCompare(a.updUserId);
        };
      case clsTopicUserRoleEN.con_UpdDate:
        return (a: clsTopicUserRoleEN, b: clsTopicUserRoleEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsTopicUserRoleEN.con_Memo:
        return (a: clsTopicUserRoleEN, b: clsTopicUserRoleEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[TopicUserRole]中不存在!(in ${topicUserRole_ConstructorName}.${strThisFuncName})`;
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
export async function TopicUserRole_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsTopicUserRoleEN.con_TopicUserRoleId:
      return (obj: clsTopicUserRoleEN) => {
        return obj.topicUserRoleId === value;
      };
    case clsTopicUserRoleEN.con_TopicUserRoleName:
      return (obj: clsTopicUserRoleEN) => {
        return obj.topicUserRoleName === value;
      };
    case clsTopicUserRoleEN.con_TopicUserRoleENName:
      return (obj: clsTopicUserRoleEN) => {
        return obj.topicUserRoleENName === value;
      };
    case clsTopicUserRoleEN.con_UpdUserId:
      return (obj: clsTopicUserRoleEN) => {
        return obj.updUserId === value;
      };
    case clsTopicUserRoleEN.con_UpdDate:
      return (obj: clsTopicUserRoleEN) => {
        return obj.updDate === value;
      };
    case clsTopicUserRoleEN.con_Memo:
      return (obj: clsTopicUserRoleEN) => {
        return obj.memo === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[TopicUserRole]中不存在!(in ${topicUserRole_ConstructorName}.${strThisFuncName})`;
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
export async function TopicUserRole_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsTopicUserRoleEN.con_TopicUserRoleId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrTopicUserRole = await TopicUserRole_GetObjLstCache();
  if (arrTopicUserRole == null) return [];
  let arrTopicUserRoleSel = arrTopicUserRole;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrTopicUserRoleSel.length == 0) return [];
  return arrTopicUserRoleSel.map((x) => x.topicUserRoleId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function TopicUserRole_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
export async function TopicUserRole_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
export async function TopicUserRole_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsTopicUserRoleEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

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
      const objTopicUserRole = TopicUserRole_GetObjFromJsonObj(returnObj);
      return objTopicUserRole;
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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
export async function TopicUserRole_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsTopicUserRoleEN._CurrTabName;
  if (IsNullOrEmpty(clsTopicUserRoleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTopicUserRoleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrTopicUserRoleExObjLstCache: Array<clsTopicUserRoleEN> = CacheHelper.Get(strKey);
    const arrTopicUserRoleObjLstT = TopicUserRole_GetObjLstByJSONObjLst(
      arrTopicUserRoleExObjLstCache,
    );
    return arrTopicUserRoleObjLstT;
  }
  try {
    const arrTopicUserRoleExObjLst = await TopicUserRole_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrTopicUserRoleExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTopicUserRoleExObjLst.length,
    );
    console.log(strInfo);
    return arrTopicUserRoleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      topicUserRole_ConstructorName,
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
export async function TopicUserRole_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsTopicUserRoleEN._CurrTabName;
  if (IsNullOrEmpty(clsTopicUserRoleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTopicUserRoleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrTopicUserRoleExObjLstCache: Array<clsTopicUserRoleEN> = JSON.parse(strTempObjLst);
    const arrTopicUserRoleObjLstT = TopicUserRole_GetObjLstByJSONObjLst(
      arrTopicUserRoleExObjLstCache,
    );
    return arrTopicUserRoleObjLstT;
  }
  try {
    const arrTopicUserRoleExObjLst = await TopicUserRole_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrTopicUserRoleExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTopicUserRoleExObjLst.length,
    );
    console.log(strInfo);
    return arrTopicUserRoleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      topicUserRole_ConstructorName,
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
export async function TopicUserRole_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsTopicUserRoleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrTopicUserRoleObjLstCache: Array<clsTopicUserRoleEN> = JSON.parse(strTempObjLst);
    return arrTopicUserRoleObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function TopicUserRole_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsTopicUserRoleEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

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
          topicUserRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TopicUserRole_GetObjLstByJSONObjLst(returnObjLst);
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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
export async function TopicUserRole_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsTopicUserRoleEN._CurrTabName;
  if (IsNullOrEmpty(clsTopicUserRoleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsTopicUserRoleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrTopicUserRoleExObjLstCache: Array<clsTopicUserRoleEN> = JSON.parse(strTempObjLst);
    const arrTopicUserRoleObjLstT = TopicUserRole_GetObjLstByJSONObjLst(
      arrTopicUserRoleExObjLstCache,
    );
    return arrTopicUserRoleObjLstT;
  }
  try {
    const arrTopicUserRoleExObjLst = await TopicUserRole_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrTopicUserRoleExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrTopicUserRoleExObjLst.length,
    );
    console.log(strInfo);
    return arrTopicUserRoleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      topicUserRole_ConstructorName,
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
export async function TopicUserRole_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsTopicUserRoleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrTopicUserRoleObjLstCache: Array<clsTopicUserRoleEN> = JSON.parse(strTempObjLst);
    return arrTopicUserRoleObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TopicUserRole_GetObjLstCache(): Promise<Array<clsTopicUserRoleEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrTopicUserRoleObjLstCache;
  switch (clsTopicUserRoleEN.CacheModeId) {
    case '04': //sessionStorage
      arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstClientCache();
      break;
    default:
      arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstClientCache();
      break;
  }
  return arrTopicUserRoleObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function TopicUserRole_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrTopicUserRoleObjLstCache;
  switch (clsTopicUserRoleEN.CacheModeId) {
    case '04': //sessionStorage
      arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrTopicUserRoleObjLstCache = null;
      break;
    default:
      arrTopicUserRoleObjLstCache = null;
      break;
  }
  return arrTopicUserRoleObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTopicUserRoleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function TopicUserRole_GetSubObjLstCache(objTopicUserRoleCond: clsTopicUserRoleEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstCache();
  let arrTopicUserRoleSel = arrTopicUserRoleObjLstCache;
  if (
    objTopicUserRoleCond.sfFldComparisonOp == null ||
    objTopicUserRoleCond.sfFldComparisonOp == ''
  )
    return arrTopicUserRoleSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objTopicUserRoleCond.sfFldComparisonOp,
  );
  //console.log("clsTopicUserRoleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objTopicUserRoleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrTopicUserRoleSel = arrTopicUserRoleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objTopicUserRoleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrTopicUserRoleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objTopicUserRoleCond),
      topicUserRole_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTopicUserRoleEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTopicUserRoleId:关键字列表
 * @returns 对象列表
 **/
export async function TopicUserRole_GetObjLstByTopicUserRoleIdLstAsync(
  arrTopicUserRoleId: Array<string>,
): Promise<Array<clsTopicUserRoleEN>> {
  const strThisFuncName = 'GetObjLstByTopicUserRoleIdLstAsync';
  const strAction = 'GetObjLstByTopicUserRoleIdLst';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTopicUserRoleId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          topicUserRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TopicUserRole_GetObjLstByJSONObjLst(returnObjLst);
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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
 * @param arrstrTopicUserRoleIdLst:关键字列表
 * @returns 对象列表
 */
export async function TopicUserRole_GetObjLstByTopicUserRoleIdLstCache(
  arrTopicUserRoleIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByTopicUserRoleIdLstCache';
  try {
    const arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstCache();
    const arrTopicUserRoleSel = arrTopicUserRoleObjLstCache.filter(
      (x) => arrTopicUserRoleIdLst.indexOf(x.topicUserRoleId) > -1,
    );
    return arrTopicUserRoleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTopicUserRoleIdLst.join(','),
      topicUserRole_ConstructorName,
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
export async function TopicUserRole_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsTopicUserRoleEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

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
          topicUserRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TopicUserRole_GetObjLstByJSONObjLst(returnObjLst);
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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
export async function TopicUserRole_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsTopicUserRoleEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

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
          topicUserRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TopicUserRole_GetObjLstByJSONObjLst(returnObjLst);
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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
export async function TopicUserRole_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsTopicUserRoleEN>();
  const arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstCache();
  if (arrTopicUserRoleObjLstCache.length == 0) return arrTopicUserRoleObjLstCache;
  let arrTopicUserRoleSel = arrTopicUserRoleObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objTopicUserRoleCond = new clsTopicUserRoleEN();
  ObjectAssign(objTopicUserRoleCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsTopicUserRoleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrTopicUserRoleSel = arrTopicUserRoleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objTopicUserRoleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrTopicUserRoleSel.length == 0) return arrTopicUserRoleSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrTopicUserRoleSel = arrTopicUserRoleSel.sort(
        TopicUserRole_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrTopicUserRoleSel = arrTopicUserRoleSel.sort(objPagerPara.sortFun);
    }
    arrTopicUserRoleSel = arrTopicUserRoleSel.slice(intStart, intEnd);
    return arrTopicUserRoleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      topicUserRole_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsTopicUserRoleEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function TopicUserRole_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsTopicUserRoleEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsTopicUserRoleEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

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
          topicUserRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = TopicUserRole_GetObjLstByJSONObjLst(returnObjLst);
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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
 * @param strTopicUserRoleId:关键字
 * @returns 获取删除的结果
 **/
export async function TopicUserRole_DelRecordAsync(strTopicUserRoleId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strTopicUserRoleId);

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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
 * @param arrTopicUserRoleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function TopicUserRole_DelTopicUserRolesAsync(
  arrTopicUserRoleId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelTopicUserRolesAsync';
  const strAction = 'DelTopicUserRoles';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTopicUserRoleId, config);
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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
export async function TopicUserRole_DelTopicUserRolesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelTopicUserRolesByCondAsync';
  const strAction = 'DelTopicUserRolesByCond';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
 * @param objTopicUserRoleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TopicUserRole_AddNewRecordAsync(
  objTopicUserRoleEN: clsTopicUserRoleEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objTopicUserRoleEN);
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopicUserRoleEN, config);
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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
 * @param objTopicUserRoleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function TopicUserRole_AddNewRecordWithMaxIdAsync(
  objTopicUserRoleEN: clsTopicUserRoleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopicUserRoleEN, config);
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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
 * @param objTopicUserRoleEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function TopicUserRole_AddNewRecordWithReturnKeyAsync(
  objTopicUserRoleEN: clsTopicUserRoleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopicUserRoleEN, config);
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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
 * @param objTopicUserRoleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function TopicUserRole_UpdateRecordAsync(
  objTopicUserRoleEN: clsTopicUserRoleEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objTopicUserRoleEN.sfUpdFldSetStr === undefined ||
    objTopicUserRoleEN.sfUpdFldSetStr === null ||
    objTopicUserRoleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTopicUserRoleEN.topicUserRoleId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopicUserRoleEN, config);
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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
 * @param objTopicUserRoleEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function TopicUserRole_UpdateWithConditionAsync(
  objTopicUserRoleEN: clsTopicUserRoleEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objTopicUserRoleEN.sfUpdFldSetStr === undefined ||
    objTopicUserRoleEN.sfUpdFldSetStr === null ||
    objTopicUserRoleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objTopicUserRoleEN.topicUserRoleId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);
  objTopicUserRoleEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objTopicUserRoleEN, config);
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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
 * @param objstrTopicUserRoleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function TopicUserRole_IsExistRecordCache(objTopicUserRoleCond: clsTopicUserRoleEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstCache();
  if (arrTopicUserRoleObjLstCache == null) return false;
  let arrTopicUserRoleSel = arrTopicUserRoleObjLstCache;
  if (
    objTopicUserRoleCond.sfFldComparisonOp == null ||
    objTopicUserRoleCond.sfFldComparisonOp == ''
  )
    return arrTopicUserRoleSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objTopicUserRoleCond.sfFldComparisonOp,
  );
  //console.log("clsTopicUserRoleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objTopicUserRoleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objTopicUserRoleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrTopicUserRoleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objTopicUserRoleCond),
      topicUserRole_ConstructorName,
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
export async function TopicUserRole_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
 * @param strTopicUserRoleId:所给的关键字
 * @returns 对象
 */
export async function TopicUserRole_IsExistCache(strTopicUserRoleId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstCache();
  if (arrTopicUserRoleObjLstCache == null) return false;
  try {
    const arrTopicUserRoleSel = arrTopicUserRoleObjLstCache.filter(
      (x) => x.topicUserRoleId == strTopicUserRoleId,
    );
    if (arrTopicUserRoleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTopicUserRoleId,
      topicUserRole_ConstructorName,
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
 * @param strTopicUserRoleId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function TopicUserRole_IsExistAsync(strTopicUserRoleId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTopicUserRoleId,
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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
export async function TopicUserRole_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
 * @param objTopicUserRoleCond:条件对象
 * @returns 对象列表记录数
 */
export async function TopicUserRole_GetRecCountByCondCache(
  objTopicUserRoleCond: clsTopicUserRoleEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrTopicUserRoleObjLstCache = await TopicUserRole_GetObjLstCache();
  if (arrTopicUserRoleObjLstCache == null) return 0;
  let arrTopicUserRoleSel = arrTopicUserRoleObjLstCache;
  if (
    objTopicUserRoleCond.sfFldComparisonOp == null ||
    objTopicUserRoleCond.sfFldComparisonOp == ''
  )
    return arrTopicUserRoleSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objTopicUserRoleCond.sfFldComparisonOp,
  );
  //console.log("clsTopicUserRoleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objTopicUserRoleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrTopicUserRoleSel = arrTopicUserRoleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objTopicUserRoleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrTopicUserRoleSel = arrTopicUserRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrTopicUserRoleSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objTopicUserRoleCond),
      topicUserRole_ConstructorName,
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
export async function TopicUserRole_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
export async function TopicUserRole_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(topicUserRole_Controller, strAction);

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
        topicUserRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        topicUserRole_ConstructorName,
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
export function TopicUserRole_GetWebApiUrl(strController: string, strAction: string): string {
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
export function TopicUserRole_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsTopicUserRoleEN._CurrTabName;
  switch (clsTopicUserRoleEN.CacheModeId) {
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
export function TopicUserRole_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsTopicUserRoleEN._CurrTabName;
    switch (clsTopicUserRoleEN.CacheModeId) {
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
export async function TopicUserRole_Cache(objDiv: HTMLDivElement, strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = Format('下拉框：{0} 不存在!(In )', strDdlName);
    alert(strMsg);
    console.error(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  //console.log("开始：Cache");
  const arrObjLstSel = await TopicUserRole_GetObjLstCache();
  if (arrObjLstSel == null) return;
  BindDdl_ObjLstInDivObj(
    objDiv,
    strDdlName,
    arrObjLstSel,
    clsTopicUserRoleEN.con_TopicUserRoleId,
    clsTopicUserRoleEN.con_TopicUserRoleName,
    '主题用户角色',
  );
}

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TopicUserRole_CheckPropertyNew(pobjTopicUserRoleEN: clsTopicUserRoleEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjTopicUserRoleEN.topicUserRoleName) === true) {
    throw new Error(
      '(errid:Watl000411)字段[主题用户角色]不能为空(In 主题用户角色)!(clsTopicUserRoleBL:CheckPropertyNew0)',
    );
  }
  if (IsNullOrEmpty(pobjTopicUserRoleEN.updUserId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[修改用户Id]不能为空(In 主题用户角色)!(clsTopicUserRoleBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.topicUserRoleId) == false &&
    GetStrLen(pobjTopicUserRoleEN.topicUserRoleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主键Id(topicUserRoleId)]的长度不能超过4(In 主题用户角色(TopicUserRole))!值:$(pobjTopicUserRoleEN.topicUserRoleId)(clsTopicUserRoleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.topicUserRoleName) == false &&
    GetStrLen(pobjTopicUserRoleEN.topicUserRoleName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主题用户角色(topicUserRoleName)]的长度不能超过100(In 主题用户角色(TopicUserRole))!值:$(pobjTopicUserRoleEN.topicUserRoleName)(clsTopicUserRoleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.topicUserRoleENName) == false &&
    GetStrLen(pobjTopicUserRoleEN.topicUserRoleENName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主题用户角色英文名(topicUserRoleENName)]的长度不能超过100(In 主题用户角色(TopicUserRole))!值:$(pobjTopicUserRoleEN.topicUserRoleENName)(clsTopicUserRoleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.updUserId) == false &&
    GetStrLen(pobjTopicUserRoleEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改用户Id(updUserId)]的长度不能超过20(In 主题用户角色(TopicUserRole))!值:$(pobjTopicUserRoleEN.updUserId)(clsTopicUserRoleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.updDate) == false &&
    GetStrLen(pobjTopicUserRoleEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 主题用户角色(TopicUserRole))!值:$(pobjTopicUserRoleEN.updDate)(clsTopicUserRoleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.memo) == false &&
    GetStrLen(pobjTopicUserRoleEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 主题用户角色(TopicUserRole))!值:$(pobjTopicUserRoleEN.memo)(clsTopicUserRoleBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.topicUserRoleId) == false &&
    undefined !== pobjTopicUserRoleEN.topicUserRoleId &&
    tzDataType.isString(pobjTopicUserRoleEN.topicUserRoleId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主键Id(topicUserRoleId)]的值:[$(pobjTopicUserRoleEN.topicUserRoleId)], 非法,应该为字符型(In 主题用户角色(TopicUserRole))!(clsTopicUserRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.topicUserRoleName) == false &&
    undefined !== pobjTopicUserRoleEN.topicUserRoleName &&
    tzDataType.isString(pobjTopicUserRoleEN.topicUserRoleName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题用户角色(topicUserRoleName)]的值:[$(pobjTopicUserRoleEN.topicUserRoleName)], 非法,应该为字符型(In 主题用户角色(TopicUserRole))!(clsTopicUserRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.topicUserRoleENName) == false &&
    undefined !== pobjTopicUserRoleEN.topicUserRoleENName &&
    tzDataType.isString(pobjTopicUserRoleEN.topicUserRoleENName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题用户角色英文名(topicUserRoleENName)]的值:[$(pobjTopicUserRoleEN.topicUserRoleENName)], 非法,应该为字符型(In 主题用户角色(TopicUserRole))!(clsTopicUserRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.updUserId) == false &&
    undefined !== pobjTopicUserRoleEN.updUserId &&
    tzDataType.isString(pobjTopicUserRoleEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改用户Id(updUserId)]的值:[$(pobjTopicUserRoleEN.updUserId)], 非法,应该为字符型(In 主题用户角色(TopicUserRole))!(clsTopicUserRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.updDate) == false &&
    undefined !== pobjTopicUserRoleEN.updDate &&
    tzDataType.isString(pobjTopicUserRoleEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjTopicUserRoleEN.updDate)], 非法,应该为字符型(In 主题用户角色(TopicUserRole))!(clsTopicUserRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.memo) == false &&
    undefined !== pobjTopicUserRoleEN.memo &&
    tzDataType.isString(pobjTopicUserRoleEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjTopicUserRoleEN.memo)], 非法,应该为字符型(In 主题用户角色(TopicUserRole))!(clsTopicUserRoleBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function TopicUserRole_CheckProperty4Update(pobjTopicUserRoleEN: clsTopicUserRoleEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.topicUserRoleId) == false &&
    GetStrLen(pobjTopicUserRoleEN.topicUserRoleId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主键Id(topicUserRoleId)]的长度不能超过4(In 主题用户角色(TopicUserRole))!值:$(pobjTopicUserRoleEN.topicUserRoleId)(clsTopicUserRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.topicUserRoleName) == false &&
    GetStrLen(pobjTopicUserRoleEN.topicUserRoleName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主题用户角色(topicUserRoleName)]的长度不能超过100(In 主题用户角色(TopicUserRole))!值:$(pobjTopicUserRoleEN.topicUserRoleName)(clsTopicUserRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.topicUserRoleENName) == false &&
    GetStrLen(pobjTopicUserRoleEN.topicUserRoleENName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主题用户角色英文名(topicUserRoleENName)]的长度不能超过100(In 主题用户角色(TopicUserRole))!值:$(pobjTopicUserRoleEN.topicUserRoleENName)(clsTopicUserRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.updUserId) == false &&
    GetStrLen(pobjTopicUserRoleEN.updUserId) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改用户Id(updUserId)]的长度不能超过20(In 主题用户角色(TopicUserRole))!值:$(pobjTopicUserRoleEN.updUserId)(clsTopicUserRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.updDate) == false &&
    GetStrLen(pobjTopicUserRoleEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 主题用户角色(TopicUserRole))!值:$(pobjTopicUserRoleEN.updDate)(clsTopicUserRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.memo) == false &&
    GetStrLen(pobjTopicUserRoleEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 主题用户角色(TopicUserRole))!值:$(pobjTopicUserRoleEN.memo)(clsTopicUserRoleBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.topicUserRoleId) == false &&
    undefined !== pobjTopicUserRoleEN.topicUserRoleId &&
    tzDataType.isString(pobjTopicUserRoleEN.topicUserRoleId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主键Id(topicUserRoleId)]的值:[$(pobjTopicUserRoleEN.topicUserRoleId)], 非法,应该为字符型(In 主题用户角色(TopicUserRole))!(clsTopicUserRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.topicUserRoleName) == false &&
    undefined !== pobjTopicUserRoleEN.topicUserRoleName &&
    tzDataType.isString(pobjTopicUserRoleEN.topicUserRoleName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题用户角色(topicUserRoleName)]的值:[$(pobjTopicUserRoleEN.topicUserRoleName)], 非法,应该为字符型(In 主题用户角色(TopicUserRole))!(clsTopicUserRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.topicUserRoleENName) == false &&
    undefined !== pobjTopicUserRoleEN.topicUserRoleENName &&
    tzDataType.isString(pobjTopicUserRoleEN.topicUserRoleENName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题用户角色英文名(topicUserRoleENName)]的值:[$(pobjTopicUserRoleEN.topicUserRoleENName)], 非法,应该为字符型(In 主题用户角色(TopicUserRole))!(clsTopicUserRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.updUserId) == false &&
    undefined !== pobjTopicUserRoleEN.updUserId &&
    tzDataType.isString(pobjTopicUserRoleEN.updUserId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改用户Id(updUserId)]的值:[$(pobjTopicUserRoleEN.updUserId)], 非法,应该为字符型(In 主题用户角色(TopicUserRole))!(clsTopicUserRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.updDate) == false &&
    undefined !== pobjTopicUserRoleEN.updDate &&
    tzDataType.isString(pobjTopicUserRoleEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjTopicUserRoleEN.updDate)], 非法,应该为字符型(In 主题用户角色(TopicUserRole))!(clsTopicUserRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjTopicUserRoleEN.memo) == false &&
    undefined !== pobjTopicUserRoleEN.memo &&
    tzDataType.isString(pobjTopicUserRoleEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjTopicUserRoleEN.memo)], 非法,应该为字符型(In 主题用户角色(TopicUserRole))!(clsTopicUserRoleBL:CheckProperty4Update)',
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
export function TopicUserRole_GetJSONStrByObj(pobjTopicUserRoleEN: clsTopicUserRoleEN): string {
  pobjTopicUserRoleEN.sfUpdFldSetStr = pobjTopicUserRoleEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjTopicUserRoleEN);
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
export function TopicUserRole_GetObjLstByJSONStr(strJSON: string): Array<clsTopicUserRoleEN> {
  let arrTopicUserRoleObjLst = new Array<clsTopicUserRoleEN>();
  if (strJSON === '') {
    return arrTopicUserRoleObjLst;
  }
  try {
    arrTopicUserRoleObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrTopicUserRoleObjLst;
  }
  return arrTopicUserRoleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrTopicUserRoleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function TopicUserRole_GetObjLstByJSONObjLst(
  arrTopicUserRoleObjLstS: Array<clsTopicUserRoleEN>,
): Array<clsTopicUserRoleEN> {
  const arrTopicUserRoleObjLst = new Array<clsTopicUserRoleEN>();
  for (const objInFor of arrTopicUserRoleObjLstS) {
    const obj1 = TopicUserRole_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrTopicUserRoleObjLst.push(obj1);
  }
  return arrTopicUserRoleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function TopicUserRole_GetObjByJSONStr(strJSON: string): clsTopicUserRoleEN {
  let pobjTopicUserRoleEN = new clsTopicUserRoleEN();
  if (strJSON === '') {
    return pobjTopicUserRoleEN;
  }
  try {
    pobjTopicUserRoleEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjTopicUserRoleEN;
  }
  return pobjTopicUserRoleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function TopicUserRole_GetCombineCondition(
  objTopicUserRoleCond: clsTopicUserRoleEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objTopicUserRoleCond.dicFldComparisonOp,
      clsTopicUserRoleEN.con_TopicUserRoleId,
    ) == true
  ) {
    const strComparisonOpTopicUserRoleId: string =
      objTopicUserRoleCond.dicFldComparisonOp[clsTopicUserRoleEN.con_TopicUserRoleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTopicUserRoleEN.con_TopicUserRoleId,
      objTopicUserRoleCond.topicUserRoleId,
      strComparisonOpTopicUserRoleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTopicUserRoleCond.dicFldComparisonOp,
      clsTopicUserRoleEN.con_TopicUserRoleName,
    ) == true
  ) {
    const strComparisonOpTopicUserRoleName: string =
      objTopicUserRoleCond.dicFldComparisonOp[clsTopicUserRoleEN.con_TopicUserRoleName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTopicUserRoleEN.con_TopicUserRoleName,
      objTopicUserRoleCond.topicUserRoleName,
      strComparisonOpTopicUserRoleName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTopicUserRoleCond.dicFldComparisonOp,
      clsTopicUserRoleEN.con_TopicUserRoleENName,
    ) == true
  ) {
    const strComparisonOpTopicUserRoleENName: string =
      objTopicUserRoleCond.dicFldComparisonOp[clsTopicUserRoleEN.con_TopicUserRoleENName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTopicUserRoleEN.con_TopicUserRoleENName,
      objTopicUserRoleCond.topicUserRoleENName,
      strComparisonOpTopicUserRoleENName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTopicUserRoleCond.dicFldComparisonOp,
      clsTopicUserRoleEN.con_UpdUserId,
    ) == true
  ) {
    const strComparisonOpUpdUserId: string =
      objTopicUserRoleCond.dicFldComparisonOp[clsTopicUserRoleEN.con_UpdUserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTopicUserRoleEN.con_UpdUserId,
      objTopicUserRoleCond.updUserId,
      strComparisonOpUpdUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTopicUserRoleCond.dicFldComparisonOp,
      clsTopicUserRoleEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objTopicUserRoleCond.dicFldComparisonOp[clsTopicUserRoleEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTopicUserRoleEN.con_UpdDate,
      objTopicUserRoleCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objTopicUserRoleCond.dicFldComparisonOp,
      clsTopicUserRoleEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objTopicUserRoleCond.dicFldComparisonOp[clsTopicUserRoleEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsTopicUserRoleEN.con_Memo,
      objTopicUserRoleCond.memo,
      strComparisonOpMemo,
    );
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TopicUserRole(主题用户角色),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTopicUserRoleId: 主键Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TopicUserRole_GetUniCondStr(objTopicUserRoleEN: clsTopicUserRoleEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TopicUserRoleId = '{0}'", objTopicUserRoleEN.topicUserRoleId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--TopicUserRole(主题用户角色),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTopicUserRoleId: 主键Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function TopicUserRole_GetUniCondStr4Update(objTopicUserRoleEN: clsTopicUserRoleEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TopicUserRoleId <> '{0}'", objTopicUserRoleEN.topicUserRoleId);
  strWhereCond += Format(" and TopicUserRoleId = '{0}'", objTopicUserRoleEN.topicUserRoleId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objTopicUserRoleENS:源对象
 * @param objTopicUserRoleENT:目标对象
 */
export function TopicUserRole_CopyObjTo(
  objTopicUserRoleENS: clsTopicUserRoleEN,
  objTopicUserRoleENT: clsTopicUserRoleEN,
): void {
  objTopicUserRoleENT.topicUserRoleId = objTopicUserRoleENS.topicUserRoleId; //主键Id
  objTopicUserRoleENT.topicUserRoleName = objTopicUserRoleENS.topicUserRoleName; //主题用户角色
  objTopicUserRoleENT.topicUserRoleENName = objTopicUserRoleENS.topicUserRoleENName; //主题用户角色英文名
  objTopicUserRoleENT.updUserId = objTopicUserRoleENS.updUserId; //修改用户Id
  objTopicUserRoleENT.updDate = objTopicUserRoleENS.updDate; //修改日期
  objTopicUserRoleENT.memo = objTopicUserRoleENS.memo; //备注
  objTopicUserRoleENT.sfUpdFldSetStr = objTopicUserRoleENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objTopicUserRoleENS:源对象
 * @param objTopicUserRoleENT:目标对象
 */
export function TopicUserRole_GetObjFromJsonObj(
  objTopicUserRoleENS: clsTopicUserRoleEN,
): clsTopicUserRoleEN {
  const objTopicUserRoleENT: clsTopicUserRoleEN = new clsTopicUserRoleEN();
  ObjectAssign(objTopicUserRoleENT, objTopicUserRoleENS);
  return objTopicUserRoleENT;
}
