/**
 * 类名:clsSysScoreWeightWApi
 * 表名:SysScoreWeight(01120629)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:27
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培设置(GradEduTools)
 * 框架-层名:WA_访问层(TS)(WA_Access)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 系统分数权重表(SysScoreWeight)
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
import { clsSysScoreWeightEN } from '@/ts/L0Entity/GradEduTools/clsSysScoreWeightEN';
import { vSysScoreWeight_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduTools/clsvSysScoreWeightWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const sysScoreWeight_Controller = 'SysScoreWeightApi';
export const sysScoreWeight_ConstructorName = 'sysScoreWeight';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strScoreWeightId:关键字
 * @returns 对象
 **/
export async function SysScoreWeight_GetObjByScoreWeightIdAsync(
  strScoreWeightId: string,
): Promise<clsSysScoreWeightEN | null> {
  const strThisFuncName = 'GetObjByScoreWeightIdAsync';

  if (IsNullOrEmpty(strScoreWeightId) == true) {
    const strMsg = Format(
      '参数:[strScoreWeightId]不能为空!(In clsSysScoreWeightWApi.GetObjByScoreWeightIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strScoreWeightId.length != 1) {
    const strMsg = Format(
      '缓存分类变量:[strScoreWeightId]的长度:[{0}]不正确!(clsSysScoreWeightWApi.GetObjByScoreWeightIdAsync)',
      strScoreWeightId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByScoreWeightId';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strScoreWeightId,
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
      const objSysScoreWeight = SysScoreWeight_GetObjFromJsonObj(returnObj);
      return objSysScoreWeight;
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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
 * @param strScoreWeightId:所给的关键字
 * @returns 对象
 */
export async function SysScoreWeight_GetObjByScoreWeightIdCache(
  strScoreWeightId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByScoreWeightIdCache';

  if (IsNullOrEmpty(strScoreWeightId) == true) {
    const strMsg = Format(
      '参数:[strScoreWeightId]不能为空!(In clsSysScoreWeightWApi.GetObjByScoreWeightIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strScoreWeightId.length != 1) {
    const strMsg = Format(
      '缓存分类变量:[strScoreWeightId]的长度:[{0}]不正确!(clsSysScoreWeightWApi.GetObjByScoreWeightIdCache)',
      strScoreWeightId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrSysScoreWeightObjLstCache = await SysScoreWeight_GetObjLstCache();
  try {
    const arrSysScoreWeightSel = arrSysScoreWeightObjLstCache.filter(
      (x) => x.scoreWeightId == strScoreWeightId,
    );
    let objSysScoreWeight: clsSysScoreWeightEN;
    if (arrSysScoreWeightSel.length > 0) {
      objSysScoreWeight = arrSysScoreWeightSel[0];
      return objSysScoreWeight;
    } else {
      if (bolTryAsyncOnce == true) {
        const objSysScoreWeightConst = await SysScoreWeight_GetObjByScoreWeightIdAsync(
          strScoreWeightId,
        );
        if (objSysScoreWeightConst != null) {
          SysScoreWeight_ReFreshThisCache();
          return objSysScoreWeightConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strScoreWeightId,
      sysScoreWeight_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strScoreWeightId:所给的关键字
 * @returns 对象
 */
export async function SysScoreWeight_GetObjByScoreWeightIdlocalStorage(strScoreWeightId: string) {
  const strThisFuncName = 'GetObjByScoreWeightIdlocalStorage';

  if (IsNullOrEmpty(strScoreWeightId) == true) {
    const strMsg = Format(
      '参数:[strScoreWeightId]不能为空!(In clsSysScoreWeightWApi.GetObjByScoreWeightIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strScoreWeightId.length != 1) {
    const strMsg = Format(
      '缓存分类变量:[strScoreWeightId]的长度:[{0}]不正确!(clsSysScoreWeightWApi.GetObjByScoreWeightIdlocalStorage)',
      strScoreWeightId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsSysScoreWeightEN._CurrTabName, strScoreWeightId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objSysScoreWeightCache: clsSysScoreWeightEN = JSON.parse(strTempObj);
    return objSysScoreWeightCache;
  }
  try {
    const objSysScoreWeight = await SysScoreWeight_GetObjByScoreWeightIdAsync(strScoreWeightId);
    if (objSysScoreWeight != null) {
      localStorage.setItem(strKey, JSON.stringify(objSysScoreWeight));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objSysScoreWeight;
    }
    return objSysScoreWeight;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strScoreWeightId,
      sysScoreWeight_ConstructorName,
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
 * @param objSysScoreWeight:所给的对象
 * @returns 对象
 */
export async function SysScoreWeight_UpdateObjInLstCache(objSysScoreWeight: clsSysScoreWeightEN) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrSysScoreWeightObjLstCache = await SysScoreWeight_GetObjLstCache();
    const obj = arrSysScoreWeightObjLstCache.find(
      (x) => x.scoreWeightId == objSysScoreWeight.scoreWeightId,
    );
    if (obj != null) {
      objSysScoreWeight.scoreWeightId = obj.scoreWeightId;
      ObjectAssign(obj, objSysScoreWeight);
    } else {
      arrSysScoreWeightObjLstCache.push(objSysScoreWeight);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsSysScoreWeightEN.con_ScoreWeightId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsSysScoreWeightEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsSysScoreWeightEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strScoreWeightId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objSysScoreWeight = await SysScoreWeight_GetObjByScoreWeightIdCache(strScoreWeightId);
  if (objSysScoreWeight == null) return '';
  if (objSysScoreWeight.GetFldValue(strOutFldName) == null) return '';
  return objSysScoreWeight.GetFldValue(strOutFldName).toString();
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
export function SysScoreWeight_SortFunDefa(a: clsSysScoreWeightEN, b: clsSysScoreWeightEN): number {
  return a.scoreWeightId.localeCompare(b.scoreWeightId);
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
export function SysScoreWeight_SortFunDefa2Fld(
  a: clsSysScoreWeightEN,
  b: clsSysScoreWeightEN,
): number {
  if (a.memo == b.memo) return a.scoreTypeId.localeCompare(b.scoreTypeId);
  else return a.memo.localeCompare(b.memo);
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
export function SysScoreWeight_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSysScoreWeightEN.con_ScoreWeightId:
        return (a: clsSysScoreWeightEN, b: clsSysScoreWeightEN) => {
          return a.scoreWeightId.localeCompare(b.scoreWeightId);
        };
      case clsSysScoreWeightEN.con_Memo:
        return (a: clsSysScoreWeightEN, b: clsSysScoreWeightEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsSysScoreWeightEN.con_IsPublic:
        return (a: clsSysScoreWeightEN) => {
          if (a.isPublic == true) return 1;
          else return -1;
        };
      case clsSysScoreWeightEN.con_ScoreTypeId:
        return (a: clsSysScoreWeightEN, b: clsSysScoreWeightEN) => {
          if (a.scoreTypeId == null) return -1;
          if (b.scoreTypeId == null) return 1;
          return a.scoreTypeId.localeCompare(b.scoreTypeId);
        };
      case clsSysScoreWeightEN.con_ScoreWeightValue:
        return (a: clsSysScoreWeightEN, b: clsSysScoreWeightEN) => {
          return a.scoreWeightValue.localeCompare(b.scoreWeightValue);
        };
      case clsSysScoreWeightEN.con_UpdDate:
        return (a: clsSysScoreWeightEN, b: clsSysScoreWeightEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsSysScoreWeightEN.con_UpdUser:
        return (a: clsSysScoreWeightEN, b: clsSysScoreWeightEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsSysScoreWeightEN.con_IdCurrEduCls:
        return (a: clsSysScoreWeightEN, b: clsSysScoreWeightEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SysScoreWeight]中不存在!(in ${sysScoreWeight_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSysScoreWeightEN.con_ScoreWeightId:
        return (a: clsSysScoreWeightEN, b: clsSysScoreWeightEN) => {
          return b.scoreWeightId.localeCompare(a.scoreWeightId);
        };
      case clsSysScoreWeightEN.con_Memo:
        return (a: clsSysScoreWeightEN, b: clsSysScoreWeightEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsSysScoreWeightEN.con_IsPublic:
        return (b: clsSysScoreWeightEN) => {
          if (b.isPublic == true) return 1;
          else return -1;
        };
      case clsSysScoreWeightEN.con_ScoreTypeId:
        return (a: clsSysScoreWeightEN, b: clsSysScoreWeightEN) => {
          if (b.scoreTypeId == null) return -1;
          if (a.scoreTypeId == null) return 1;
          return b.scoreTypeId.localeCompare(a.scoreTypeId);
        };
      case clsSysScoreWeightEN.con_ScoreWeightValue:
        return (a: clsSysScoreWeightEN, b: clsSysScoreWeightEN) => {
          return b.scoreWeightValue.localeCompare(a.scoreWeightValue);
        };
      case clsSysScoreWeightEN.con_UpdDate:
        return (a: clsSysScoreWeightEN, b: clsSysScoreWeightEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsSysScoreWeightEN.con_UpdUser:
        return (a: clsSysScoreWeightEN, b: clsSysScoreWeightEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsSysScoreWeightEN.con_IdCurrEduCls:
        return (a: clsSysScoreWeightEN, b: clsSysScoreWeightEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SysScoreWeight]中不存在!(in ${sysScoreWeight_ConstructorName}.${strThisFuncName})`;
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
export async function SysScoreWeight_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSysScoreWeightEN.con_ScoreWeightId:
      return (obj: clsSysScoreWeightEN) => {
        return obj.scoreWeightId === value;
      };
    case clsSysScoreWeightEN.con_Memo:
      return (obj: clsSysScoreWeightEN) => {
        return obj.memo === value;
      };
    case clsSysScoreWeightEN.con_IsPublic:
      return (obj: clsSysScoreWeightEN) => {
        return obj.isPublic === value;
      };
    case clsSysScoreWeightEN.con_ScoreTypeId:
      return (obj: clsSysScoreWeightEN) => {
        return obj.scoreTypeId === value;
      };
    case clsSysScoreWeightEN.con_ScoreWeightValue:
      return (obj: clsSysScoreWeightEN) => {
        return obj.scoreWeightValue === value;
      };
    case clsSysScoreWeightEN.con_UpdDate:
      return (obj: clsSysScoreWeightEN) => {
        return obj.updDate === value;
      };
    case clsSysScoreWeightEN.con_UpdUser:
      return (obj: clsSysScoreWeightEN) => {
        return obj.updUser === value;
      };
    case clsSysScoreWeightEN.con_IdCurrEduCls:
      return (obj: clsSysScoreWeightEN) => {
        return obj.idCurrEduCls === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SysScoreWeight]中不存在!(in ${sysScoreWeight_ConstructorName}.${strThisFuncName})`;
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
export async function SysScoreWeight_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsSysScoreWeightEN.con_ScoreWeightId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrSysScoreWeight = await SysScoreWeight_GetObjLstCache();
  if (arrSysScoreWeight == null) return [];
  let arrSysScoreWeightSel = arrSysScoreWeight;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrSysScoreWeightSel.length == 0) return [];
  return arrSysScoreWeightSel.map((x) => x.scoreWeightId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SysScoreWeight_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSysScoreWeightEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

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
      const objSysScoreWeight = SysScoreWeight_GetObjFromJsonObj(returnObj);
      return objSysScoreWeight;
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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSysScoreWeightEN._CurrTabName;
  if (IsNullOrEmpty(clsSysScoreWeightEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysScoreWeightEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrSysScoreWeightExObjLstCache: Array<clsSysScoreWeightEN> = CacheHelper.Get(strKey);
    const arrSysScoreWeightObjLstT = SysScoreWeight_GetObjLstByJSONObjLst(
      arrSysScoreWeightExObjLstCache,
    );
    return arrSysScoreWeightObjLstT;
  }
  try {
    const arrSysScoreWeightExObjLst = await SysScoreWeight_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrSysScoreWeightExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysScoreWeightExObjLst.length,
    );
    console.log(strInfo);
    return arrSysScoreWeightExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSysScoreWeightEN._CurrTabName;
  if (IsNullOrEmpty(clsSysScoreWeightEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysScoreWeightEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSysScoreWeightExObjLstCache: Array<clsSysScoreWeightEN> = JSON.parse(strTempObjLst);
    const arrSysScoreWeightObjLstT = SysScoreWeight_GetObjLstByJSONObjLst(
      arrSysScoreWeightExObjLstCache,
    );
    return arrSysScoreWeightObjLstT;
  }
  try {
    const arrSysScoreWeightExObjLst = await SysScoreWeight_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrSysScoreWeightExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysScoreWeightExObjLst.length,
    );
    console.log(strInfo);
    return arrSysScoreWeightExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSysScoreWeightEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSysScoreWeightObjLstCache: Array<clsSysScoreWeightEN> = JSON.parse(strTempObjLst);
    return arrSysScoreWeightObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SysScoreWeight_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSysScoreWeightEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

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
          sysScoreWeight_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreWeight_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsSysScoreWeightEN._CurrTabName;
  if (IsNullOrEmpty(clsSysScoreWeightEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysScoreWeightEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSysScoreWeightExObjLstCache: Array<clsSysScoreWeightEN> = JSON.parse(strTempObjLst);
    const arrSysScoreWeightObjLstT = SysScoreWeight_GetObjLstByJSONObjLst(
      arrSysScoreWeightExObjLstCache,
    );
    return arrSysScoreWeightObjLstT;
  }
  try {
    const arrSysScoreWeightExObjLst = await SysScoreWeight_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrSysScoreWeightExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysScoreWeightExObjLst.length,
    );
    console.log(strInfo);
    return arrSysScoreWeightExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsSysScoreWeightEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSysScoreWeightObjLstCache: Array<clsSysScoreWeightEN> = JSON.parse(strTempObjLst);
    return arrSysScoreWeightObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SysScoreWeight_GetObjLstCache(): Promise<Array<clsSysScoreWeightEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrSysScoreWeightObjLstCache;
  switch (clsSysScoreWeightEN.CacheModeId) {
    case '04': //sessionStorage
      arrSysScoreWeightObjLstCache = await SysScoreWeight_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrSysScoreWeightObjLstCache = await SysScoreWeight_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrSysScoreWeightObjLstCache = await SysScoreWeight_GetObjLstClientCache();
      break;
    default:
      arrSysScoreWeightObjLstCache = await SysScoreWeight_GetObjLstClientCache();
      break;
  }
  return arrSysScoreWeightObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SysScoreWeight_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrSysScoreWeightObjLstCache;
  switch (clsSysScoreWeightEN.CacheModeId) {
    case '04': //sessionStorage
      arrSysScoreWeightObjLstCache = await SysScoreWeight_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrSysScoreWeightObjLstCache = await SysScoreWeight_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrSysScoreWeightObjLstCache = null;
      break;
    default:
      arrSysScoreWeightObjLstCache = null;
      break;
  }
  return arrSysScoreWeightObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrScoreWeightIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SysScoreWeight_GetSubObjLstCache(objSysScoreWeightCond: clsSysScoreWeightEN) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrSysScoreWeightObjLstCache = await SysScoreWeight_GetObjLstCache();
  let arrSysScoreWeightSel = arrSysScoreWeightObjLstCache;
  if (
    objSysScoreWeightCond.sfFldComparisonOp == null ||
    objSysScoreWeightCond.sfFldComparisonOp == ''
  )
    return arrSysScoreWeightSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysScoreWeightCond.sfFldComparisonOp,
  );
  //console.log("clsSysScoreWeightWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysScoreWeightCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysScoreWeightSel = arrSysScoreWeightSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysScoreWeightCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSysScoreWeightSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSysScoreWeightCond),
      sysScoreWeight_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSysScoreWeightEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrScoreWeightId:关键字列表
 * @returns 对象列表
 **/
export async function SysScoreWeight_GetObjLstByScoreWeightIdLstAsync(
  arrScoreWeightId: Array<string>,
): Promise<Array<clsSysScoreWeightEN>> {
  const strThisFuncName = 'GetObjLstByScoreWeightIdLstAsync';
  const strAction = 'GetObjLstByScoreWeightIdLst';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrScoreWeightId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sysScoreWeight_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreWeight_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
 * @param arrstrScoreWeightIdLst:关键字列表
 * @returns 对象列表
 */
export async function SysScoreWeight_GetObjLstByScoreWeightIdLstCache(
  arrScoreWeightIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByScoreWeightIdLstCache';
  try {
    const arrSysScoreWeightObjLstCache = await SysScoreWeight_GetObjLstCache();
    const arrSysScoreWeightSel = arrSysScoreWeightObjLstCache.filter(
      (x) => arrScoreWeightIdLst.indexOf(x.scoreWeightId) > -1,
    );
    return arrSysScoreWeightSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrScoreWeightIdLst.join(','),
      sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSysScoreWeightEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

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
          sysScoreWeight_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreWeight_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSysScoreWeightEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

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
          sysScoreWeight_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreWeight_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsSysScoreWeightEN>();
  const arrSysScoreWeightObjLstCache = await SysScoreWeight_GetObjLstCache();
  if (arrSysScoreWeightObjLstCache.length == 0) return arrSysScoreWeightObjLstCache;
  let arrSysScoreWeightSel = arrSysScoreWeightObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objSysScoreWeightCond = new clsSysScoreWeightEN();
  ObjectAssign(objSysScoreWeightCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsSysScoreWeightWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysScoreWeightSel = arrSysScoreWeightSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysScoreWeightCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSysScoreWeightSel.length == 0) return arrSysScoreWeightSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSysScoreWeightSel = arrSysScoreWeightSel.sort(
        SysScoreWeight_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSysScoreWeightSel = arrSysScoreWeightSel.sort(objPagerPara.sortFun);
    }
    arrSysScoreWeightSel = arrSysScoreWeightSel.slice(intStart, intEnd);
    return arrSysScoreWeightSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sysScoreWeight_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSysScoreWeightEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SysScoreWeight_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSysScoreWeightEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSysScoreWeightEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

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
          sysScoreWeight_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreWeight_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
 * @param strScoreWeightId:关键字
 * @returns 获取删除的结果
 **/
export async function SysScoreWeight_DelRecordAsync(strScoreWeightId: string): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strScoreWeightId);

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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
 * @param arrScoreWeightId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SysScoreWeight_DelSysScoreWeightsAsync(
  arrScoreWeightId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelSysScoreWeightsAsync';
  const strAction = 'DelSysScoreWeights';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrScoreWeightId, config);
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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_DelSysScoreWeightsByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelSysScoreWeightsByCondAsync';
  const strAction = 'DelSysScoreWeightsByCond';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
 * @param objSysScoreWeightEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SysScoreWeight_AddNewRecordAsync(
  objSysScoreWeightEN: clsSysScoreWeightEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  if (objSysScoreWeightEN.scoreWeightId === null || objSysScoreWeightEN.scoreWeightId === '') {
    const strMsg = '需要的对象的关键字为空,不能添加!';
    throw strMsg;
  }
  //var strJSON = JSON.stringify(objSysScoreWeightEN);
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysScoreWeightEN, config);
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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
 * @param objSysScoreWeightEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SysScoreWeight_AddNewRecordWithMaxIdAsync(
  objSysScoreWeightEN: clsSysScoreWeightEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithMaxIdAsync';
  const strAction = 'AddNewRecordWithMaxId';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysScoreWeightEN, config);
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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
 * @param objSysScoreWeightEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SysScoreWeight_AddNewRecordWithReturnKeyAsync(
  objSysScoreWeightEN: clsSysScoreWeightEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysScoreWeightEN, config);
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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
 * @param objSysScoreWeightEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SysScoreWeight_UpdateRecordAsync(
  objSysScoreWeightEN: clsSysScoreWeightEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSysScoreWeightEN.sfUpdFldSetStr === undefined ||
    objSysScoreWeightEN.sfUpdFldSetStr === null ||
    objSysScoreWeightEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSysScoreWeightEN.scoreWeightId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysScoreWeightEN, config);
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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
 * @param objSysScoreWeightEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SysScoreWeight_UpdateWithConditionAsync(
  objSysScoreWeightEN: clsSysScoreWeightEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSysScoreWeightEN.sfUpdFldSetStr === undefined ||
    objSysScoreWeightEN.sfUpdFldSetStr === null ||
    objSysScoreWeightEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSysScoreWeightEN.scoreWeightId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);
  objSysScoreWeightEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysScoreWeightEN, config);
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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
 * @param objstrScoreWeightIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SysScoreWeight_IsExistRecordCache(
  objSysScoreWeightCond: clsSysScoreWeightEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrSysScoreWeightObjLstCache = await SysScoreWeight_GetObjLstCache();
  if (arrSysScoreWeightObjLstCache == null) return false;
  let arrSysScoreWeightSel = arrSysScoreWeightObjLstCache;
  if (
    objSysScoreWeightCond.sfFldComparisonOp == null ||
    objSysScoreWeightCond.sfFldComparisonOp == ''
  )
    return arrSysScoreWeightSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysScoreWeightCond.sfFldComparisonOp,
  );
  //console.log("clsSysScoreWeightWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysScoreWeightCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysScoreWeightCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSysScoreWeightSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objSysScoreWeightCond),
      sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
 * @param strScoreWeightId:所给的关键字
 * @returns 对象
 */
export async function SysScoreWeight_IsExistCache(strScoreWeightId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrSysScoreWeightObjLstCache = await SysScoreWeight_GetObjLstCache();
  if (arrSysScoreWeightObjLstCache == null) return false;
  try {
    const arrSysScoreWeightSel = arrSysScoreWeightObjLstCache.filter(
      (x) => x.scoreWeightId == strScoreWeightId,
    );
    if (arrSysScoreWeightSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strScoreWeightId,
      sysScoreWeight_ConstructorName,
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
 * @param strScoreWeightId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SysScoreWeight_IsExistAsync(strScoreWeightId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strScoreWeightId,
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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
 * @param objSysScoreWeightCond:条件对象
 * @returns 对象列表记录数
 */
export async function SysScoreWeight_GetRecCountByCondCache(
  objSysScoreWeightCond: clsSysScoreWeightEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrSysScoreWeightObjLstCache = await SysScoreWeight_GetObjLstCache();
  if (arrSysScoreWeightObjLstCache == null) return 0;
  let arrSysScoreWeightSel = arrSysScoreWeightObjLstCache;
  if (
    objSysScoreWeightCond.sfFldComparisonOp == null ||
    objSysScoreWeightCond.sfFldComparisonOp == ''
  )
    return arrSysScoreWeightSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysScoreWeightCond.sfFldComparisonOp,
  );
  //console.log("clsSysScoreWeightWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysScoreWeightCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysScoreWeightSel = arrSysScoreWeightSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysScoreWeightCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSysScoreWeightSel = arrSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSysScoreWeightSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSysScoreWeightCond),
      sysScoreWeight_ConstructorName,
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
export async function SysScoreWeight_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sysScoreWeight_Controller, strAction);

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
        sysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreWeight_ConstructorName,
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
export function SysScoreWeight_GetWebApiUrl(strController: string, strAction: string): string {
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
export function SysScoreWeight_ReFreshCache(): void {
  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = clsSysScoreWeightEN._CurrTabName;
  switch (clsSysScoreWeightEN.CacheModeId) {
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
  vSysScoreWeight_ReFreshThisCache();
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function SysScoreWeight_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsSysScoreWeightEN._CurrTabName;
    switch (clsSysScoreWeightEN.CacheModeId) {
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
export function SysScoreWeight_CheckPropertyNew(pobjSysScoreWeightEN: clsSysScoreWeightEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjSysScoreWeightEN.scoreWeightValue) === true) {
    throw new Error(
      '(errid:Watl000411)字段[分数权重值]不能为空(In 系统分数权重表)!(clsSysScoreWeightBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.scoreWeightId) == false &&
    GetStrLen(pobjSysScoreWeightEN.scoreWeightId) > 1
  ) {
    throw new Error(
      '(errid:Watl000413)字段[分数权重Id(scoreWeightId)]的长度不能超过1(In 系统分数权重表(SysScoreWeight))!值:$(pobjSysScoreWeightEN.scoreWeightId)(clsSysScoreWeightBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.memo) == false &&
    GetStrLen(pobjSysScoreWeightEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 系统分数权重表(SysScoreWeight))!值:$(pobjSysScoreWeightEN.memo)(clsSysScoreWeightBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.scoreTypeId) == false &&
    GetStrLen(pobjSysScoreWeightEN.scoreTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[分数类型Id(scoreTypeId)]的长度不能超过4(In 系统分数权重表(SysScoreWeight))!值:$(pobjSysScoreWeightEN.scoreTypeId)(clsSysScoreWeightBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.scoreWeightValue) == false &&
    GetStrLen(pobjSysScoreWeightEN.scoreWeightValue) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[分数权重值(scoreWeightValue)]的长度不能超过20(In 系统分数权重表(SysScoreWeight))!值:$(pobjSysScoreWeightEN.scoreWeightValue)(clsSysScoreWeightBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.updDate) == false &&
    GetStrLen(pobjSysScoreWeightEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 系统分数权重表(SysScoreWeight))!值:$(pobjSysScoreWeightEN.updDate)(clsSysScoreWeightBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.updUser) == false &&
    GetStrLen(pobjSysScoreWeightEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 系统分数权重表(SysScoreWeight))!值:$(pobjSysScoreWeightEN.updUser)(clsSysScoreWeightBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.idCurrEduCls) == false &&
    GetStrLen(pobjSysScoreWeightEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 系统分数权重表(SysScoreWeight))!值:$(pobjSysScoreWeightEN.idCurrEduCls)(clsSysScoreWeightBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.scoreWeightId) == false &&
    undefined !== pobjSysScoreWeightEN.scoreWeightId &&
    tzDataType.isString(pobjSysScoreWeightEN.scoreWeightId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[分数权重Id(scoreWeightId)]的值:[$(pobjSysScoreWeightEN.scoreWeightId)], 非法,应该为字符型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.memo) == false &&
    undefined !== pobjSysScoreWeightEN.memo &&
    tzDataType.isString(pobjSysScoreWeightEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjSysScoreWeightEN.memo)], 非法,应该为字符型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjSysScoreWeightEN.isPublic &&
    undefined !== pobjSysScoreWeightEN.isPublic &&
    tzDataType.isBoolean(pobjSysScoreWeightEN.isPublic) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否公开(isPublic)]的值:[$(pobjSysScoreWeightEN.isPublic)], 非法,应该为布尔型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.scoreTypeId) == false &&
    undefined !== pobjSysScoreWeightEN.scoreTypeId &&
    tzDataType.isString(pobjSysScoreWeightEN.scoreTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[分数类型Id(scoreTypeId)]的值:[$(pobjSysScoreWeightEN.scoreTypeId)], 非法,应该为字符型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.scoreWeightValue) == false &&
    undefined !== pobjSysScoreWeightEN.scoreWeightValue &&
    tzDataType.isString(pobjSysScoreWeightEN.scoreWeightValue) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[分数权重值(scoreWeightValue)]的值:[$(pobjSysScoreWeightEN.scoreWeightValue)], 非法,应该为字符型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.updDate) == false &&
    undefined !== pobjSysScoreWeightEN.updDate &&
    tzDataType.isString(pobjSysScoreWeightEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjSysScoreWeightEN.updDate)], 非法,应该为字符型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.updUser) == false &&
    undefined !== pobjSysScoreWeightEN.updUser &&
    tzDataType.isString(pobjSysScoreWeightEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjSysScoreWeightEN.updUser)], 非法,应该为字符型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.idCurrEduCls) == false &&
    undefined !== pobjSysScoreWeightEN.idCurrEduCls &&
    tzDataType.isString(pobjSysScoreWeightEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjSysScoreWeightEN.idCurrEduCls)], 非法,应该为字符型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SysScoreWeight_CheckProperty4Update(pobjSysScoreWeightEN: clsSysScoreWeightEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.scoreWeightId) == false &&
    GetStrLen(pobjSysScoreWeightEN.scoreWeightId) > 1
  ) {
    throw new Error(
      '(errid:Watl000416)字段[分数权重Id(scoreWeightId)]的长度不能超过1(In 系统分数权重表(SysScoreWeight))!值:$(pobjSysScoreWeightEN.scoreWeightId)(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.memo) == false &&
    GetStrLen(pobjSysScoreWeightEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 系统分数权重表(SysScoreWeight))!值:$(pobjSysScoreWeightEN.memo)(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.scoreTypeId) == false &&
    GetStrLen(pobjSysScoreWeightEN.scoreTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[分数类型Id(scoreTypeId)]的长度不能超过4(In 系统分数权重表(SysScoreWeight))!值:$(pobjSysScoreWeightEN.scoreTypeId)(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.scoreWeightValue) == false &&
    GetStrLen(pobjSysScoreWeightEN.scoreWeightValue) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[分数权重值(scoreWeightValue)]的长度不能超过20(In 系统分数权重表(SysScoreWeight))!值:$(pobjSysScoreWeightEN.scoreWeightValue)(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.updDate) == false &&
    GetStrLen(pobjSysScoreWeightEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 系统分数权重表(SysScoreWeight))!值:$(pobjSysScoreWeightEN.updDate)(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.updUser) == false &&
    GetStrLen(pobjSysScoreWeightEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 系统分数权重表(SysScoreWeight))!值:$(pobjSysScoreWeightEN.updUser)(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.idCurrEduCls) == false &&
    GetStrLen(pobjSysScoreWeightEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 系统分数权重表(SysScoreWeight))!值:$(pobjSysScoreWeightEN.idCurrEduCls)(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.scoreWeightId) == false &&
    undefined !== pobjSysScoreWeightEN.scoreWeightId &&
    tzDataType.isString(pobjSysScoreWeightEN.scoreWeightId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[分数权重Id(scoreWeightId)]的值:[$(pobjSysScoreWeightEN.scoreWeightId)], 非法,应该为字符型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.memo) == false &&
    undefined !== pobjSysScoreWeightEN.memo &&
    tzDataType.isString(pobjSysScoreWeightEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjSysScoreWeightEN.memo)], 非法,应该为字符型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjSysScoreWeightEN.isPublic &&
    undefined !== pobjSysScoreWeightEN.isPublic &&
    tzDataType.isBoolean(pobjSysScoreWeightEN.isPublic) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否公开(isPublic)]的值:[$(pobjSysScoreWeightEN.isPublic)], 非法,应该为布尔型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.scoreTypeId) == false &&
    undefined !== pobjSysScoreWeightEN.scoreTypeId &&
    tzDataType.isString(pobjSysScoreWeightEN.scoreTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[分数类型Id(scoreTypeId)]的值:[$(pobjSysScoreWeightEN.scoreTypeId)], 非法,应该为字符型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.scoreWeightValue) == false &&
    undefined !== pobjSysScoreWeightEN.scoreWeightValue &&
    tzDataType.isString(pobjSysScoreWeightEN.scoreWeightValue) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[分数权重值(scoreWeightValue)]的值:[$(pobjSysScoreWeightEN.scoreWeightValue)], 非法,应该为字符型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.updDate) == false &&
    undefined !== pobjSysScoreWeightEN.updDate &&
    tzDataType.isString(pobjSysScoreWeightEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjSysScoreWeightEN.updDate)], 非法,应该为字符型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.updUser) == false &&
    undefined !== pobjSysScoreWeightEN.updUser &&
    tzDataType.isString(pobjSysScoreWeightEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjSysScoreWeightEN.updUser)], 非法,应该为字符型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreWeightEN.idCurrEduCls) == false &&
    undefined !== pobjSysScoreWeightEN.idCurrEduCls &&
    tzDataType.isString(pobjSysScoreWeightEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjSysScoreWeightEN.idCurrEduCls)], 非法,应该为字符型(In 系统分数权重表(SysScoreWeight))!(clsSysScoreWeightBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (IsNullOrEmpty(pobjSysScoreWeightEN.scoreWeightId) === true) {
    throw new Error(
      '(errid:Watl000064)字段[分数权重Id]不能为空(In 系统分数权重表)!(clsSysScoreWeightBL:CheckProperty4Update)',
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
export function SysScoreWeight_GetJSONStrByObj(pobjSysScoreWeightEN: clsSysScoreWeightEN): string {
  pobjSysScoreWeightEN.sfUpdFldSetStr = pobjSysScoreWeightEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSysScoreWeightEN);
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
export function SysScoreWeight_GetObjLstByJSONStr(strJSON: string): Array<clsSysScoreWeightEN> {
  let arrSysScoreWeightObjLst = new Array<clsSysScoreWeightEN>();
  if (strJSON === '') {
    return arrSysScoreWeightObjLst;
  }
  try {
    arrSysScoreWeightObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSysScoreWeightObjLst;
  }
  return arrSysScoreWeightObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSysScoreWeightObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SysScoreWeight_GetObjLstByJSONObjLst(
  arrSysScoreWeightObjLstS: Array<clsSysScoreWeightEN>,
): Array<clsSysScoreWeightEN> {
  const arrSysScoreWeightObjLst = new Array<clsSysScoreWeightEN>();
  for (const objInFor of arrSysScoreWeightObjLstS) {
    const obj1 = SysScoreWeight_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSysScoreWeightObjLst.push(obj1);
  }
  return arrSysScoreWeightObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SysScoreWeight_GetObjByJSONStr(strJSON: string): clsSysScoreWeightEN {
  let pobjSysScoreWeightEN = new clsSysScoreWeightEN();
  if (strJSON === '') {
    return pobjSysScoreWeightEN;
  }
  try {
    pobjSysScoreWeightEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSysScoreWeightEN;
  }
  return pobjSysScoreWeightEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SysScoreWeight_GetCombineCondition(
  objSysScoreWeightCond: clsSysScoreWeightEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreWeightCond.dicFldComparisonOp,
      clsSysScoreWeightEN.con_ScoreWeightId,
    ) == true
  ) {
    const strComparisonOpScoreWeightId: string =
      objSysScoreWeightCond.dicFldComparisonOp[clsSysScoreWeightEN.con_ScoreWeightId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreWeightEN.con_ScoreWeightId,
      objSysScoreWeightCond.scoreWeightId,
      strComparisonOpScoreWeightId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreWeightCond.dicFldComparisonOp,
      clsSysScoreWeightEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objSysScoreWeightCond.dicFldComparisonOp[clsSysScoreWeightEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreWeightEN.con_Memo,
      objSysScoreWeightCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreWeightCond.dicFldComparisonOp,
      clsSysScoreWeightEN.con_IsPublic,
    ) == true
  ) {
    if (objSysScoreWeightCond.isPublic == true) {
      strWhereCond += Format(" And {0} = '1'", clsSysScoreWeightEN.con_IsPublic);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsSysScoreWeightEN.con_IsPublic);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreWeightCond.dicFldComparisonOp,
      clsSysScoreWeightEN.con_ScoreTypeId,
    ) == true
  ) {
    const strComparisonOpScoreTypeId: string =
      objSysScoreWeightCond.dicFldComparisonOp[clsSysScoreWeightEN.con_ScoreTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreWeightEN.con_ScoreTypeId,
      objSysScoreWeightCond.scoreTypeId,
      strComparisonOpScoreTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreWeightCond.dicFldComparisonOp,
      clsSysScoreWeightEN.con_ScoreWeightValue,
    ) == true
  ) {
    const strComparisonOpScoreWeightValue: string =
      objSysScoreWeightCond.dicFldComparisonOp[clsSysScoreWeightEN.con_ScoreWeightValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreWeightEN.con_ScoreWeightValue,
      objSysScoreWeightCond.scoreWeightValue,
      strComparisonOpScoreWeightValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreWeightCond.dicFldComparisonOp,
      clsSysScoreWeightEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objSysScoreWeightCond.dicFldComparisonOp[clsSysScoreWeightEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreWeightEN.con_UpdDate,
      objSysScoreWeightCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreWeightCond.dicFldComparisonOp,
      clsSysScoreWeightEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objSysScoreWeightCond.dicFldComparisonOp[clsSysScoreWeightEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreWeightEN.con_UpdUser,
      objSysScoreWeightCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreWeightCond.dicFldComparisonOp,
      clsSysScoreWeightEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objSysScoreWeightCond.dicFldComparisonOp[clsSysScoreWeightEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreWeightEN.con_IdCurrEduCls,
      objSysScoreWeightCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSysScoreWeightENS:源对象
 * @param objSysScoreWeightENT:目标对象
 */
export function SysScoreWeight_CopyObjTo(
  objSysScoreWeightENS: clsSysScoreWeightEN,
  objSysScoreWeightENT: clsSysScoreWeightEN,
): void {
  objSysScoreWeightENT.scoreWeightId = objSysScoreWeightENS.scoreWeightId; //分数权重Id
  objSysScoreWeightENT.memo = objSysScoreWeightENS.memo; //备注
  objSysScoreWeightENT.isPublic = objSysScoreWeightENS.isPublic; //是否公开
  objSysScoreWeightENT.scoreTypeId = objSysScoreWeightENS.scoreTypeId; //分数类型Id
  objSysScoreWeightENT.scoreWeightValue = objSysScoreWeightENS.scoreWeightValue; //分数权重值
  objSysScoreWeightENT.updDate = objSysScoreWeightENS.updDate; //修改日期
  objSysScoreWeightENT.updUser = objSysScoreWeightENS.updUser; //修改人
  objSysScoreWeightENT.idCurrEduCls = objSysScoreWeightENS.idCurrEduCls; //教学班流水号
  objSysScoreWeightENT.sfUpdFldSetStr = objSysScoreWeightENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSysScoreWeightENS:源对象
 * @param objSysScoreWeightENT:目标对象
 */
export function SysScoreWeight_GetObjFromJsonObj(
  objSysScoreWeightENS: clsSysScoreWeightEN,
): clsSysScoreWeightEN {
  const objSysScoreWeightENT: clsSysScoreWeightEN = new clsSysScoreWeightEN();
  ObjectAssign(objSysScoreWeightENT, objSysScoreWeightENS);
  return objSysScoreWeightENT;
}
