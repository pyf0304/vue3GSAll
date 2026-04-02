/**
 * 类名:clsgs_TopicRoleWApi
 * 表名:gs_TopicRole(01120869)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:47:42
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 主题权限表(gs_TopicRole)
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
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsgs_TopicRoleEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TopicRoleEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const gs_TopicRole_Controller = 'gs_TopicRoleApi';
export const gs_TopicRole_ConstructorName = 'gs_TopicRole';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTopicRoleId:关键字
 * @returns 对象
 **/
export async function gs_TopicRole_GetObjByTopicRoleIdAsync(
  strTopicRoleId: string,
): Promise<clsgs_TopicRoleEN | null> {
  const strThisFuncName = 'GetObjByTopicRoleIdAsync';

  if (IsNullOrEmpty(strTopicRoleId) == true) {
    const strMsg = Format(
      '参数:[strTopicRoleId]不能为空!(In clsgs_TopicRoleWApi.GetObjByTopicRoleIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicRoleId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strTopicRoleId]的长度:[{0}]不正确!(clsgs_TopicRoleWApi.GetObjByTopicRoleIdAsync)',
      strTopicRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTopicRoleId';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTopicRoleId,
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
      const objgs_TopicRole = gs_TopicRole_GetObjFromJsonObj(returnObj);
      return objgs_TopicRole;
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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
 * @param strTopicRoleId:所给的关键字
 * @returns 对象
 */
export async function gs_TopicRole_GetObjByTopicRoleIdCache(
  strTopicRoleId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTopicRoleIdCache';

  if (IsNullOrEmpty(strTopicRoleId) == true) {
    const strMsg = Format(
      '参数:[strTopicRoleId]不能为空!(In clsgs_TopicRoleWApi.GetObjByTopicRoleIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicRoleId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strTopicRoleId]的长度:[{0}]不正确!(clsgs_TopicRoleWApi.GetObjByTopicRoleIdCache)',
      strTopicRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrgs_TopicRoleObjLstCache = await gs_TopicRole_GetObjLstCache();
  try {
    const arrgs_TopicRoleSel = arrgs_TopicRoleObjLstCache.filter(
      (x) => x.topicRoleId == strTopicRoleId,
    );
    let objgs_TopicRole: clsgs_TopicRoleEN;
    if (arrgs_TopicRoleSel.length > 0) {
      objgs_TopicRole = arrgs_TopicRoleSel[0];
      return objgs_TopicRole;
    } else {
      if (bolTryAsyncOnce == true) {
        const objgs_TopicRoleConst = await gs_TopicRole_GetObjByTopicRoleIdAsync(strTopicRoleId);
        if (objgs_TopicRoleConst != null) {
          gs_TopicRole_ReFreshThisCache();
          return objgs_TopicRoleConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTopicRoleId,
      gs_TopicRole_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strTopicRoleId:所给的关键字
 * @returns 对象
 */
export async function gs_TopicRole_GetObjByTopicRoleIdlocalStorage(strTopicRoleId: string) {
  const strThisFuncName = 'GetObjByTopicRoleIdlocalStorage';

  if (IsNullOrEmpty(strTopicRoleId) == true) {
    const strMsg = Format(
      '参数:[strTopicRoleId]不能为空!(In clsgs_TopicRoleWApi.GetObjByTopicRoleIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTopicRoleId.length != 10) {
    const strMsg = Format(
      '缓存分类变量:[strTopicRoleId]的长度:[{0}]不正确!(clsgs_TopicRoleWApi.GetObjByTopicRoleIdlocalStorage)',
      strTopicRoleId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsgs_TopicRoleEN._CurrTabName, strTopicRoleId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objgs_TopicRoleCache: clsgs_TopicRoleEN = JSON.parse(strTempObj);
    return objgs_TopicRoleCache;
  }
  try {
    const objgs_TopicRole = await gs_TopicRole_GetObjByTopicRoleIdAsync(strTopicRoleId);
    if (objgs_TopicRole != null) {
      localStorage.setItem(strKey, JSON.stringify(objgs_TopicRole));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objgs_TopicRole;
    }
    return objgs_TopicRole;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTopicRoleId,
      gs_TopicRole_ConstructorName,
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
 * @param objgs_TopicRole:所给的对象
 * @returns 对象
 */
export async function gs_TopicRole_UpdateObjInLstCache(objgs_TopicRole: clsgs_TopicRoleEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrgs_TopicRoleObjLstCache = await gs_TopicRole_GetObjLstCache();
    const obj = arrgs_TopicRoleObjLstCache.find(
      (x) => x.topicRoleId == objgs_TopicRole.topicRoleId,
    );
    if (obj != null) {
      objgs_TopicRole.topicRoleId = obj.topicRoleId;
      ObjectAssign(obj, objgs_TopicRole);
    } else {
      arrgs_TopicRoleObjLstCache.push(objgs_TopicRole);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      gs_TopicRole_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/*该表没有名称字段,不能生成此函数!*/

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
export async function gs_TopicRole_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsgs_TopicRoleEN.con_TopicRoleId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsgs_TopicRoleEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsgs_TopicRoleEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTopicRoleId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objgs_TopicRole = await gs_TopicRole_GetObjByTopicRoleIdCache(strTopicRoleId);
  if (objgs_TopicRole == null) return '';
  if (objgs_TopicRole.GetFldValue(strOutFldName) == null) return '';
  return objgs_TopicRole.GetFldValue(strOutFldName).toString();
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
export function gs_TopicRole_SortFunDefa(a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN): number {
  return a.topicRoleId.localeCompare(b.topicRoleId);
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
export function gs_TopicRole_SortFunDefa2Fld(a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN): number {
  if (a.topicId == b.topicId) return a.menuNum.localeCompare(b.menuNum);
  else return a.topicId.localeCompare(b.topicId);
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
export function gs_TopicRole_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsgs_TopicRoleEN.con_TopicRoleId:
        return (a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN) => {
          return a.topicRoleId.localeCompare(b.topicRoleId);
        };
      case clsgs_TopicRoleEN.con_TopicId:
        return (a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN) => {
          if (a.topicId == null) return -1;
          if (b.topicId == null) return 1;
          return a.topicId.localeCompare(b.topicId);
        };
      case clsgs_TopicRoleEN.con_MenuNum:
        return (a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN) => {
          if (a.menuNum == null) return -1;
          if (b.menuNum == null) return 1;
          return a.menuNum.localeCompare(b.menuNum);
        };
      case clsgs_TopicRoleEN.con_MenuName:
        return (a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN) => {
          if (a.menuName == null) return -1;
          if (b.menuName == null) return 1;
          return a.menuName.localeCompare(b.menuName);
        };
      case clsgs_TopicRoleEN.con_MenuIsHide:
        return (a: clsgs_TopicRoleEN) => {
          if (a.menuIsHide == true) return 1;
          else return -1;
        };
      case clsgs_TopicRoleEN.con_UpdDate:
        return (a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsgs_TopicRoleEN.con_UpdUser:
        return (a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsgs_TopicRoleEN.con_Memo:
        return (a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsgs_TopicRoleEN.con_IsDefault:
        return (a: clsgs_TopicRoleEN) => {
          if (a.isDefault == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_TopicRole]中不存在!(in ${gs_TopicRole_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsgs_TopicRoleEN.con_TopicRoleId:
        return (a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN) => {
          return b.topicRoleId.localeCompare(a.topicRoleId);
        };
      case clsgs_TopicRoleEN.con_TopicId:
        return (a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN) => {
          if (b.topicId == null) return -1;
          if (a.topicId == null) return 1;
          return b.topicId.localeCompare(a.topicId);
        };
      case clsgs_TopicRoleEN.con_MenuNum:
        return (a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN) => {
          if (b.menuNum == null) return -1;
          if (a.menuNum == null) return 1;
          return b.menuNum.localeCompare(a.menuNum);
        };
      case clsgs_TopicRoleEN.con_MenuName:
        return (a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN) => {
          if (b.menuName == null) return -1;
          if (a.menuName == null) return 1;
          return b.menuName.localeCompare(a.menuName);
        };
      case clsgs_TopicRoleEN.con_MenuIsHide:
        return (b: clsgs_TopicRoleEN) => {
          if (b.menuIsHide == true) return 1;
          else return -1;
        };
      case clsgs_TopicRoleEN.con_UpdDate:
        return (a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsgs_TopicRoleEN.con_UpdUser:
        return (a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsgs_TopicRoleEN.con_Memo:
        return (a: clsgs_TopicRoleEN, b: clsgs_TopicRoleEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsgs_TopicRoleEN.con_IsDefault:
        return (b: clsgs_TopicRoleEN) => {
          if (b.isDefault == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[gs_TopicRole]中不存在!(in ${gs_TopicRole_ConstructorName}.${strThisFuncName})`;
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
export async function gs_TopicRole_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsgs_TopicRoleEN.con_TopicRoleId:
      return (obj: clsgs_TopicRoleEN) => {
        return obj.topicRoleId === value;
      };
    case clsgs_TopicRoleEN.con_TopicId:
      return (obj: clsgs_TopicRoleEN) => {
        return obj.topicId === value;
      };
    case clsgs_TopicRoleEN.con_MenuNum:
      return (obj: clsgs_TopicRoleEN) => {
        return obj.menuNum === value;
      };
    case clsgs_TopicRoleEN.con_MenuName:
      return (obj: clsgs_TopicRoleEN) => {
        return obj.menuName === value;
      };
    case clsgs_TopicRoleEN.con_MenuIsHide:
      return (obj: clsgs_TopicRoleEN) => {
        return obj.menuIsHide === value;
      };
    case clsgs_TopicRoleEN.con_UpdDate:
      return (obj: clsgs_TopicRoleEN) => {
        return obj.updDate === value;
      };
    case clsgs_TopicRoleEN.con_UpdUser:
      return (obj: clsgs_TopicRoleEN) => {
        return obj.updUser === value;
      };
    case clsgs_TopicRoleEN.con_Memo:
      return (obj: clsgs_TopicRoleEN) => {
        return obj.memo === value;
      };
    case clsgs_TopicRoleEN.con_IsDefault:
      return (obj: clsgs_TopicRoleEN) => {
        return obj.isDefault === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[gs_TopicRole]中不存在!(in ${gs_TopicRole_ConstructorName}.${strThisFuncName})`;
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
export async function gs_TopicRole_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsgs_TopicRoleEN.con_TopicRoleId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrgs_TopicRole = await gs_TopicRole_GetObjLstCache();
  if (arrgs_TopicRole == null) return [];
  let arrgs_TopicRoleSel = arrgs_TopicRole;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrgs_TopicRoleSel.length == 0) return [];
  return arrgs_TopicRoleSel.map((x) => x.topicRoleId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_TopicRole_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsgs_TopicRoleEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

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
      const objgs_TopicRole = gs_TopicRole_GetObjFromJsonObj(returnObj);
      return objgs_TopicRole;
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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_TopicRoleEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_TopicRoleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_TopicRoleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrgs_TopicRoleExObjLstCache: Array<clsgs_TopicRoleEN> = CacheHelper.Get(strKey);
    const arrgs_TopicRoleObjLstT = gs_TopicRole_GetObjLstByJSONObjLst(arrgs_TopicRoleExObjLstCache);
    return arrgs_TopicRoleObjLstT;
  }
  try {
    const arrgs_TopicRoleExObjLst = await gs_TopicRole_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrgs_TopicRoleExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_TopicRoleExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_TopicRoleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_TopicRoleEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_TopicRoleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_TopicRoleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_TopicRoleExObjLstCache: Array<clsgs_TopicRoleEN> = JSON.parse(strTempObjLst);
    const arrgs_TopicRoleObjLstT = gs_TopicRole_GetObjLstByJSONObjLst(arrgs_TopicRoleExObjLstCache);
    return arrgs_TopicRoleObjLstT;
  }
  try {
    const arrgs_TopicRoleExObjLst = await gs_TopicRole_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrgs_TopicRoleExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_TopicRoleExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_TopicRoleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_TopicRoleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrgs_TopicRoleObjLstCache: Array<clsgs_TopicRoleEN> = JSON.parse(strTempObjLst);
    return arrgs_TopicRoleObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function gs_TopicRole_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_TopicRoleEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

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
          gs_TopicRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TopicRole_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsgs_TopicRoleEN._CurrTabName;
  if (IsNullOrEmpty(clsgs_TopicRoleEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsgs_TopicRoleEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_TopicRoleExObjLstCache: Array<clsgs_TopicRoleEN> = JSON.parse(strTempObjLst);
    const arrgs_TopicRoleObjLstT = gs_TopicRole_GetObjLstByJSONObjLst(arrgs_TopicRoleExObjLstCache);
    return arrgs_TopicRoleObjLstT;
  }
  try {
    const arrgs_TopicRoleExObjLst = await gs_TopicRole_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrgs_TopicRoleExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrgs_TopicRoleExObjLst.length,
    );
    console.log(strInfo);
    return arrgs_TopicRoleExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsgs_TopicRoleEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrgs_TopicRoleObjLstCache: Array<clsgs_TopicRoleEN> = JSON.parse(strTempObjLst);
    return arrgs_TopicRoleObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_TopicRole_GetObjLstCache(): Promise<Array<clsgs_TopicRoleEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrgs_TopicRoleObjLstCache;
  switch (clsgs_TopicRoleEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_TopicRoleObjLstCache = await gs_TopicRole_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrgs_TopicRoleObjLstCache = await gs_TopicRole_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrgs_TopicRoleObjLstCache = await gs_TopicRole_GetObjLstClientCache();
      break;
    default:
      arrgs_TopicRoleObjLstCache = await gs_TopicRole_GetObjLstClientCache();
      break;
  }
  return arrgs_TopicRoleObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function gs_TopicRole_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrgs_TopicRoleObjLstCache;
  switch (clsgs_TopicRoleEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_TopicRoleObjLstCache = await gs_TopicRole_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrgs_TopicRoleObjLstCache = await gs_TopicRole_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrgs_TopicRoleObjLstCache = null;
      break;
    default:
      arrgs_TopicRoleObjLstCache = null;
      break;
  }
  return arrgs_TopicRoleObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTopicRoleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_TopicRole_GetSubObjLstCache(objgs_TopicRoleCond: clsgs_TopicRoleEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrgs_TopicRoleObjLstCache = await gs_TopicRole_GetObjLstCache();
  let arrgs_TopicRoleSel = arrgs_TopicRoleObjLstCache;
  if (objgs_TopicRoleCond.sfFldComparisonOp == null || objgs_TopicRoleCond.sfFldComparisonOp == '')
    return arrgs_TopicRoleSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_TopicRoleCond.sfFldComparisonOp,
  );
  //console.log("clsgs_TopicRoleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_TopicRoleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_TopicRoleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_TopicRoleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_TopicRoleCond),
      gs_TopicRole_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_TopicRoleEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTopicRoleId:关键字列表
 * @returns 对象列表
 **/
export async function gs_TopicRole_GetObjLstByTopicRoleIdLstAsync(
  arrTopicRoleId: Array<string>,
): Promise<Array<clsgs_TopicRoleEN>> {
  const strThisFuncName = 'GetObjLstByTopicRoleIdLstAsync';
  const strAction = 'GetObjLstByTopicRoleIdLst';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTopicRoleId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          gs_TopicRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TopicRole_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
 * @param arrstrTopicRoleIdLst:关键字列表
 * @returns 对象列表
 */
export async function gs_TopicRole_GetObjLstByTopicRoleIdLstCache(
  arrTopicRoleIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByTopicRoleIdLstCache';
  try {
    const arrgs_TopicRoleObjLstCache = await gs_TopicRole_GetObjLstCache();
    const arrgs_TopicRoleSel = arrgs_TopicRoleObjLstCache.filter(
      (x) => arrTopicRoleIdLst.indexOf(x.topicRoleId) > -1,
    );
    return arrgs_TopicRoleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTopicRoleIdLst.join(','),
      gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsgs_TopicRoleEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

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
          gs_TopicRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TopicRole_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsgs_TopicRoleEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

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
          gs_TopicRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TopicRole_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_TopicRoleEN>();
  const arrgs_TopicRoleObjLstCache = await gs_TopicRole_GetObjLstCache();
  if (arrgs_TopicRoleObjLstCache.length == 0) return arrgs_TopicRoleObjLstCache;
  let arrgs_TopicRoleSel = arrgs_TopicRoleObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objgs_TopicRoleCond = new clsgs_TopicRoleEN();
  ObjectAssign(objgs_TopicRoleCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsgs_TopicRoleWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_TopicRoleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_TopicRoleSel.length == 0) return arrgs_TopicRoleSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_TopicRoleSel = arrgs_TopicRoleSel.sort(
        gs_TopicRole_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrgs_TopicRoleSel = arrgs_TopicRoleSel.sort(objPagerPara.sortFun);
    }
    arrgs_TopicRoleSel = arrgs_TopicRoleSel.slice(intStart, intEnd);
    return arrgs_TopicRoleSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_TopicRole_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_TopicRoleEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function gs_TopicRole_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_TopicRoleEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsgs_TopicRoleEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

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
          gs_TopicRole_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TopicRole_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
 * @param strTopicRoleId:关键字
 * @returns 获取删除的结果
 **/
export async function gs_TopicRole_DelRecordAsync(strTopicRoleId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strTopicRoleId);

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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
 * @param arrTopicRoleId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function gs_TopicRole_Delgs_TopicRolesAsync(
  arrTopicRoleId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'Delgs_TopicRolesAsync';
  const strAction = 'Delgs_TopicRoles';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTopicRoleId, config);
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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_Delgs_TopicRolesByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'Delgs_TopicRolesByCondAsync';
  const strAction = 'Delgs_TopicRolesByCond';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
 * @param objgs_TopicRoleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_TopicRole_AddNewRecordAsync(
  objgs_TopicRoleEN: clsgs_TopicRoleEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objgs_TopicRoleEN);
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TopicRoleEN, config);
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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
 * @param objgs_TopicRoleEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function gs_TopicRole_AddNewRecordWithMaxIdAsync(
  objgs_TopicRoleEN: clsgs_TopicRoleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TopicRoleEN, config);
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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
 * @param objgs_TopicRoleEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function gs_TopicRole_AddNewRecordWithReturnKeyAsync(
  objgs_TopicRoleEN: clsgs_TopicRoleEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TopicRoleEN, config);
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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
 * @param objgs_TopicRoleEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function gs_TopicRole_UpdateRecordAsync(
  objgs_TopicRoleEN: clsgs_TopicRoleEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objgs_TopicRoleEN.sfUpdFldSetStr === undefined ||
    objgs_TopicRoleEN.sfUpdFldSetStr === null ||
    objgs_TopicRoleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_TopicRoleEN.topicRoleId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TopicRoleEN, config);
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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
 * @param objgs_TopicRoleEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function gs_TopicRole_UpdateWithConditionAsync(
  objgs_TopicRoleEN: clsgs_TopicRoleEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objgs_TopicRoleEN.sfUpdFldSetStr === undefined ||
    objgs_TopicRoleEN.sfUpdFldSetStr === null ||
    objgs_TopicRoleEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objgs_TopicRoleEN.topicRoleId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);
  objgs_TopicRoleEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objgs_TopicRoleEN, config);
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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
 * @param objstrTopicRoleIdCond:条件对象
 * @returns 对象列表子集
 */
export async function gs_TopicRole_IsExistRecordCache(objgs_TopicRoleCond: clsgs_TopicRoleEN) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrgs_TopicRoleObjLstCache = await gs_TopicRole_GetObjLstCache();
  if (arrgs_TopicRoleObjLstCache == null) return false;
  let arrgs_TopicRoleSel = arrgs_TopicRoleObjLstCache;
  if (objgs_TopicRoleCond.sfFldComparisonOp == null || objgs_TopicRoleCond.sfFldComparisonOp == '')
    return arrgs_TopicRoleSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_TopicRoleCond.sfFldComparisonOp,
  );
  //console.log("clsgs_TopicRoleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_TopicRoleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_TopicRoleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_TopicRoleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objgs_TopicRoleCond),
      gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
 * @param strTopicRoleId:所给的关键字
 * @returns 对象
 */
export async function gs_TopicRole_IsExistCache(strTopicRoleId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrgs_TopicRoleObjLstCache = await gs_TopicRole_GetObjLstCache();
  if (arrgs_TopicRoleObjLstCache == null) return false;
  try {
    const arrgs_TopicRoleSel = arrgs_TopicRoleObjLstCache.filter(
      (x) => x.topicRoleId == strTopicRoleId,
    );
    if (arrgs_TopicRoleSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTopicRoleId,
      gs_TopicRole_ConstructorName,
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
 * @param strTopicRoleId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function gs_TopicRole_IsExistAsync(strTopicRoleId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTopicRoleId,
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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
 * @param objgs_TopicRoleCond:条件对象
 * @returns 对象列表记录数
 */
export async function gs_TopicRole_GetRecCountByCondCache(objgs_TopicRoleCond: clsgs_TopicRoleEN) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrgs_TopicRoleObjLstCache = await gs_TopicRole_GetObjLstCache();
  if (arrgs_TopicRoleObjLstCache == null) return 0;
  let arrgs_TopicRoleSel = arrgs_TopicRoleObjLstCache;
  if (objgs_TopicRoleCond.sfFldComparisonOp == null || objgs_TopicRoleCond.sfFldComparisonOp == '')
    return arrgs_TopicRoleSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_TopicRoleCond.sfFldComparisonOp,
  );
  //console.log("clsgs_TopicRoleWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_TopicRoleCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_TopicRoleCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrgs_TopicRoleSel = arrgs_TopicRoleSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_TopicRoleSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objgs_TopicRoleCond),
      gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_GetMaxStrIdAsync(): Promise<string> {
  const strThisFuncName = 'GetMaxStrIdAsync';
  const strAction = 'GetMaxStrId';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
export async function gs_TopicRole_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(gs_TopicRole_Controller, strAction);

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
        gs_TopicRole_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        gs_TopicRole_ConstructorName,
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
export function gs_TopicRole_GetWebApiUrl(strController: string, strAction: string): string {
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
export function gs_TopicRole_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsgs_TopicRoleEN._CurrTabName;
  switch (clsgs_TopicRoleEN.CacheModeId) {
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
export function gs_TopicRole_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsgs_TopicRoleEN._CurrTabName;
    switch (clsgs_TopicRoleEN.CacheModeId) {
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
/* 该表的下拉框功能没有设置,不需要生成下拉框绑定函数。*/

/**
 * 检查对象字段值是否合法,1)检查是否可空;2)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_TopicRole_CheckPropertyNew(pobjgs_TopicRoleEN: clsgs_TopicRoleEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.topicRoleId) == false &&
    GetStrLen(pobjgs_TopicRoleEN.topicRoleId) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主题权限Id(topicRoleId)]的长度不能超过10(In 主题权限表(gs_TopicRole))!值:$(pobjgs_TopicRoleEN.topicRoleId)(clsgs_TopicRoleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.topicId) == false &&
    GetStrLen(pobjgs_TopicRoleEN.topicId) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[主题Id(topicId)]的长度不能超过8(In 主题权限表(gs_TopicRole))!值:$(pobjgs_TopicRoleEN.topicId)(clsgs_TopicRoleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.menuNum) == false &&
    GetStrLen(pobjgs_TopicRoleEN.menuNum) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[菜单编号(menuNum)]的长度不能超过10(In 主题权限表(gs_TopicRole))!值:$(pobjgs_TopicRoleEN.menuNum)(clsgs_TopicRoleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.menuName) == false &&
    GetStrLen(pobjgs_TopicRoleEN.menuName) > 100
  ) {
    throw new Error(
      '(errid:Watl000413)字段[菜单名称(menuName)]的长度不能超过100(In 主题权限表(gs_TopicRole))!值:$(pobjgs_TopicRoleEN.menuName)(clsgs_TopicRoleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.updDate) == false &&
    GetStrLen(pobjgs_TopicRoleEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 主题权限表(gs_TopicRole))!值:$(pobjgs_TopicRoleEN.updDate)(clsgs_TopicRoleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.updUser) == false &&
    GetStrLen(pobjgs_TopicRoleEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 主题权限表(gs_TopicRole))!值:$(pobjgs_TopicRoleEN.updUser)(clsgs_TopicRoleBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.memo) == false &&
    GetStrLen(pobjgs_TopicRoleEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 主题权限表(gs_TopicRole))!值:$(pobjgs_TopicRoleEN.memo)(clsgs_TopicRoleBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.topicRoleId) == false &&
    undefined !== pobjgs_TopicRoleEN.topicRoleId &&
    tzDataType.isString(pobjgs_TopicRoleEN.topicRoleId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题权限Id(topicRoleId)]的值:[$(pobjgs_TopicRoleEN.topicRoleId)], 非法,应该为字符型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.topicId) == false &&
    undefined !== pobjgs_TopicRoleEN.topicId &&
    tzDataType.isString(pobjgs_TopicRoleEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[主题Id(topicId)]的值:[$(pobjgs_TopicRoleEN.topicId)], 非法,应该为字符型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.menuNum) == false &&
    undefined !== pobjgs_TopicRoleEN.menuNum &&
    tzDataType.isString(pobjgs_TopicRoleEN.menuNum) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[菜单编号(menuNum)]的值:[$(pobjgs_TopicRoleEN.menuNum)], 非法,应该为字符型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.menuName) == false &&
    undefined !== pobjgs_TopicRoleEN.menuName &&
    tzDataType.isString(pobjgs_TopicRoleEN.menuName) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[菜单名称(menuName)]的值:[$(pobjgs_TopicRoleEN.menuName)], 非法,应该为字符型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_TopicRoleEN.menuIsHide &&
    undefined !== pobjgs_TopicRoleEN.menuIsHide &&
    tzDataType.isBoolean(pobjgs_TopicRoleEN.menuIsHide) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[菜单是否隐藏(menuIsHide)]的值:[$(pobjgs_TopicRoleEN.menuIsHide)], 非法,应该为布尔型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.updDate) == false &&
    undefined !== pobjgs_TopicRoleEN.updDate &&
    tzDataType.isString(pobjgs_TopicRoleEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjgs_TopicRoleEN.updDate)], 非法,应该为字符型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.updUser) == false &&
    undefined !== pobjgs_TopicRoleEN.updUser &&
    tzDataType.isString(pobjgs_TopicRoleEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjgs_TopicRoleEN.updUser)], 非法,应该为字符型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.memo) == false &&
    undefined !== pobjgs_TopicRoleEN.memo &&
    tzDataType.isString(pobjgs_TopicRoleEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjgs_TopicRoleEN.memo)], 非法,应该为字符型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjgs_TopicRoleEN.isDefault &&
    undefined !== pobjgs_TopicRoleEN.isDefault &&
    tzDataType.isBoolean(pobjgs_TopicRoleEN.isDefault) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否默认(isDefault)]的值:[$(pobjgs_TopicRoleEN.isDefault)], 非法,应该为布尔型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function gs_TopicRole_CheckProperty4Update(pobjgs_TopicRoleEN: clsgs_TopicRoleEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.topicRoleId) == false &&
    GetStrLen(pobjgs_TopicRoleEN.topicRoleId) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主题权限Id(topicRoleId)]的长度不能超过10(In 主题权限表(gs_TopicRole))!值:$(pobjgs_TopicRoleEN.topicRoleId)(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.topicId) == false &&
    GetStrLen(pobjgs_TopicRoleEN.topicId) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[主题Id(topicId)]的长度不能超过8(In 主题权限表(gs_TopicRole))!值:$(pobjgs_TopicRoleEN.topicId)(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.menuNum) == false &&
    GetStrLen(pobjgs_TopicRoleEN.menuNum) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[菜单编号(menuNum)]的长度不能超过10(In 主题权限表(gs_TopicRole))!值:$(pobjgs_TopicRoleEN.menuNum)(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.menuName) == false &&
    GetStrLen(pobjgs_TopicRoleEN.menuName) > 100
  ) {
    throw new Error(
      '(errid:Watl000416)字段[菜单名称(menuName)]的长度不能超过100(In 主题权限表(gs_TopicRole))!值:$(pobjgs_TopicRoleEN.menuName)(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.updDate) == false &&
    GetStrLen(pobjgs_TopicRoleEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 主题权限表(gs_TopicRole))!值:$(pobjgs_TopicRoleEN.updDate)(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.updUser) == false &&
    GetStrLen(pobjgs_TopicRoleEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 主题权限表(gs_TopicRole))!值:$(pobjgs_TopicRoleEN.updUser)(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.memo) == false &&
    GetStrLen(pobjgs_TopicRoleEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 主题权限表(gs_TopicRole))!值:$(pobjgs_TopicRoleEN.memo)(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.topicRoleId) == false &&
    undefined !== pobjgs_TopicRoleEN.topicRoleId &&
    tzDataType.isString(pobjgs_TopicRoleEN.topicRoleId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题权限Id(topicRoleId)]的值:[$(pobjgs_TopicRoleEN.topicRoleId)], 非法,应该为字符型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.topicId) == false &&
    undefined !== pobjgs_TopicRoleEN.topicId &&
    tzDataType.isString(pobjgs_TopicRoleEN.topicId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[主题Id(topicId)]的值:[$(pobjgs_TopicRoleEN.topicId)], 非法,应该为字符型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.menuNum) == false &&
    undefined !== pobjgs_TopicRoleEN.menuNum &&
    tzDataType.isString(pobjgs_TopicRoleEN.menuNum) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[菜单编号(menuNum)]的值:[$(pobjgs_TopicRoleEN.menuNum)], 非法,应该为字符型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.menuName) == false &&
    undefined !== pobjgs_TopicRoleEN.menuName &&
    tzDataType.isString(pobjgs_TopicRoleEN.menuName) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[菜单名称(menuName)]的值:[$(pobjgs_TopicRoleEN.menuName)], 非法,应该为字符型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_TopicRoleEN.menuIsHide &&
    undefined !== pobjgs_TopicRoleEN.menuIsHide &&
    tzDataType.isBoolean(pobjgs_TopicRoleEN.menuIsHide) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[菜单是否隐藏(menuIsHide)]的值:[$(pobjgs_TopicRoleEN.menuIsHide)], 非法,应该为布尔型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.updDate) == false &&
    undefined !== pobjgs_TopicRoleEN.updDate &&
    tzDataType.isString(pobjgs_TopicRoleEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjgs_TopicRoleEN.updDate)], 非法,应该为字符型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.updUser) == false &&
    undefined !== pobjgs_TopicRoleEN.updUser &&
    tzDataType.isString(pobjgs_TopicRoleEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjgs_TopicRoleEN.updUser)], 非法,应该为字符型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjgs_TopicRoleEN.memo) == false &&
    undefined !== pobjgs_TopicRoleEN.memo &&
    tzDataType.isString(pobjgs_TopicRoleEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjgs_TopicRoleEN.memo)], 非法,应该为字符型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjgs_TopicRoleEN.isDefault &&
    undefined !== pobjgs_TopicRoleEN.isDefault &&
    tzDataType.isBoolean(pobjgs_TopicRoleEN.isDefault) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否默认(isDefault)]的值:[$(pobjgs_TopicRoleEN.isDefault)], 非法,应该为布尔型(In 主题权限表(gs_TopicRole))!(clsgs_TopicRoleBL:CheckProperty4Update)',
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
export function gs_TopicRole_GetJSONStrByObj(pobjgs_TopicRoleEN: clsgs_TopicRoleEN): string {
  pobjgs_TopicRoleEN.sfUpdFldSetStr = pobjgs_TopicRoleEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjgs_TopicRoleEN);
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
export function gs_TopicRole_GetObjLstByJSONStr(strJSON: string): Array<clsgs_TopicRoleEN> {
  let arrgs_TopicRoleObjLst = new Array<clsgs_TopicRoleEN>();
  if (strJSON === '') {
    return arrgs_TopicRoleObjLst;
  }
  try {
    arrgs_TopicRoleObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrgs_TopicRoleObjLst;
  }
  return arrgs_TopicRoleObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrgs_TopicRoleObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function gs_TopicRole_GetObjLstByJSONObjLst(
  arrgs_TopicRoleObjLstS: Array<clsgs_TopicRoleEN>,
): Array<clsgs_TopicRoleEN> {
  const arrgs_TopicRoleObjLst = new Array<clsgs_TopicRoleEN>();
  for (const objInFor of arrgs_TopicRoleObjLstS) {
    const obj1 = gs_TopicRole_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrgs_TopicRoleObjLst.push(obj1);
  }
  return arrgs_TopicRoleObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function gs_TopicRole_GetObjByJSONStr(strJSON: string): clsgs_TopicRoleEN {
  let pobjgs_TopicRoleEN = new clsgs_TopicRoleEN();
  if (strJSON === '') {
    return pobjgs_TopicRoleEN;
  }
  try {
    pobjgs_TopicRoleEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjgs_TopicRoleEN;
  }
  return pobjgs_TopicRoleEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function gs_TopicRole_GetCombineCondition(objgs_TopicRoleCond: clsgs_TopicRoleEN): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TopicRoleCond.dicFldComparisonOp,
      clsgs_TopicRoleEN.con_TopicRoleId,
    ) == true
  ) {
    const strComparisonOpTopicRoleId: string =
      objgs_TopicRoleCond.dicFldComparisonOp[clsgs_TopicRoleEN.con_TopicRoleId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TopicRoleEN.con_TopicRoleId,
      objgs_TopicRoleCond.topicRoleId,
      strComparisonOpTopicRoleId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TopicRoleCond.dicFldComparisonOp,
      clsgs_TopicRoleEN.con_TopicId,
    ) == true
  ) {
    const strComparisonOpTopicId: string =
      objgs_TopicRoleCond.dicFldComparisonOp[clsgs_TopicRoleEN.con_TopicId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TopicRoleEN.con_TopicId,
      objgs_TopicRoleCond.topicId,
      strComparisonOpTopicId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TopicRoleCond.dicFldComparisonOp,
      clsgs_TopicRoleEN.con_MenuNum,
    ) == true
  ) {
    const strComparisonOpMenuNum: string =
      objgs_TopicRoleCond.dicFldComparisonOp[clsgs_TopicRoleEN.con_MenuNum];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TopicRoleEN.con_MenuNum,
      objgs_TopicRoleCond.menuNum,
      strComparisonOpMenuNum,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TopicRoleCond.dicFldComparisonOp,
      clsgs_TopicRoleEN.con_MenuName,
    ) == true
  ) {
    const strComparisonOpMenuName: string =
      objgs_TopicRoleCond.dicFldComparisonOp[clsgs_TopicRoleEN.con_MenuName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TopicRoleEN.con_MenuName,
      objgs_TopicRoleCond.menuName,
      strComparisonOpMenuName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TopicRoleCond.dicFldComparisonOp,
      clsgs_TopicRoleEN.con_MenuIsHide,
    ) == true
  ) {
    if (objgs_TopicRoleCond.menuIsHide == true) {
      strWhereCond += Format(" And {0} = '1'", clsgs_TopicRoleEN.con_MenuIsHide);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsgs_TopicRoleEN.con_MenuIsHide);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TopicRoleCond.dicFldComparisonOp,
      clsgs_TopicRoleEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objgs_TopicRoleCond.dicFldComparisonOp[clsgs_TopicRoleEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TopicRoleEN.con_UpdDate,
      objgs_TopicRoleCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TopicRoleCond.dicFldComparisonOp,
      clsgs_TopicRoleEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objgs_TopicRoleCond.dicFldComparisonOp[clsgs_TopicRoleEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TopicRoleEN.con_UpdUser,
      objgs_TopicRoleCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TopicRoleCond.dicFldComparisonOp,
      clsgs_TopicRoleEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objgs_TopicRoleCond.dicFldComparisonOp[clsgs_TopicRoleEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsgs_TopicRoleEN.con_Memo,
      objgs_TopicRoleCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objgs_TopicRoleCond.dicFldComparisonOp,
      clsgs_TopicRoleEN.con_IsDefault,
    ) == true
  ) {
    if (objgs_TopicRoleCond.isDefault == true) {
      strWhereCond += Format(" And {0} = '1'", clsgs_TopicRoleEN.con_IsDefault);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsgs_TopicRoleEN.con_IsDefault);
    }
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_TopicRole(主题权限表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param strTopicRoleId: 主题权限Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_TopicRole_GetUniCondStr(objgs_TopicRoleEN: clsgs_TopicRoleEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TopicRoleId = '{0}'", objgs_TopicRoleEN.topicRoleId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--gs_TopicRole(主题权限表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param strTopicRoleId: 主题权限Id(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function gs_TopicRole_GetUniCondStr4Update(objgs_TopicRoleEN: clsgs_TopicRoleEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and TopicRoleId <> '{0}'", objgs_TopicRoleEN.topicRoleId);
  strWhereCond += Format(" and TopicRoleId = '{0}'", objgs_TopicRoleEN.topicRoleId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objgs_TopicRoleENS:源对象
 * @param objgs_TopicRoleENT:目标对象
 */
export function gs_TopicRole_CopyObjTo(
  objgs_TopicRoleENS: clsgs_TopicRoleEN,
  objgs_TopicRoleENT: clsgs_TopicRoleEN,
): void {
  objgs_TopicRoleENT.topicRoleId = objgs_TopicRoleENS.topicRoleId; //主题权限Id
  objgs_TopicRoleENT.topicId = objgs_TopicRoleENS.topicId; //主题Id
  objgs_TopicRoleENT.menuNum = objgs_TopicRoleENS.menuNum; //菜单编号
  objgs_TopicRoleENT.menuName = objgs_TopicRoleENS.menuName; //菜单名称
  objgs_TopicRoleENT.menuIsHide = objgs_TopicRoleENS.menuIsHide; //菜单是否隐藏
  objgs_TopicRoleENT.updDate = objgs_TopicRoleENS.updDate; //修改日期
  objgs_TopicRoleENT.updUser = objgs_TopicRoleENS.updUser; //修改人
  objgs_TopicRoleENT.memo = objgs_TopicRoleENS.memo; //备注
  objgs_TopicRoleENT.isDefault = objgs_TopicRoleENS.isDefault; //是否默认
  objgs_TopicRoleENT.sfUpdFldSetStr = objgs_TopicRoleENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objgs_TopicRoleENS:源对象
 * @param objgs_TopicRoleENT:目标对象
 */
export function gs_TopicRole_GetObjFromJsonObj(
  objgs_TopicRoleENS: clsgs_TopicRoleEN,
): clsgs_TopicRoleEN {
  const objgs_TopicRoleENT: clsgs_TopicRoleEN = new clsgs_TopicRoleEN();
  ObjectAssign(objgs_TopicRoleENT, objgs_TopicRoleENS);
  return objgs_TopicRoleENT;
}
