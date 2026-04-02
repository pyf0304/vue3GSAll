/**
 * 类名:clsvSysScoreWeightWApi
 * 表名:vSysScoreWeight(01120630)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:46:30
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
 * v系统分数权重表(vSysScoreWeight)
 * (AutoGCLib.WA_Access4TypeScript:GeneCode)
 * Created by pyf on 2023年11月08日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import {
  GetObjKeys,
  GetExceptionStr,
  myShowErrorMsg,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsvSysScoreWeightEN } from '@/ts/L0Entity/GradEduTools/clsvSysScoreWeightEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vSysScoreWeight_Controller = 'vSysScoreWeightApi';
export const vSysScoreWeight_ConstructorName = 'vSysScoreWeight';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strScoreWeightId:关键字
 * @returns 对象
 **/
export async function vSysScoreWeight_GetObjByScoreWeightIdAsync(
  strScoreWeightId: string,
): Promise<clsvSysScoreWeightEN | null> {
  const strThisFuncName = 'GetObjByScoreWeightIdAsync';

  if (IsNullOrEmpty(strScoreWeightId) == true) {
    const strMsg = Format(
      '参数:[strScoreWeightId]不能为空!(In clsvSysScoreWeightWApi.GetObjByScoreWeightIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strScoreWeightId.length != 1) {
    const strMsg = Format(
      '缓存分类变量:[strScoreWeightId]的长度:[{0}]不正确!(clsvSysScoreWeightWApi.GetObjByScoreWeightIdAsync)',
      strScoreWeightId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByScoreWeightId';
  const strUrl = GetWebApiUrl(vSysScoreWeight_Controller, strAction);

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
      const objvSysScoreWeight = vSysScoreWeight_GetObjFromJsonObj(returnObj);
      return objvSysScoreWeight;
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
        vSysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_GetObjByScoreWeightIdCache(
  strScoreWeightId: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByScoreWeightIdCache';

  if (IsNullOrEmpty(strScoreWeightId) == true) {
    const strMsg = Format(
      '参数:[strScoreWeightId]不能为空!(In clsvSysScoreWeightWApi.GetObjByScoreWeightIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strScoreWeightId.length != 1) {
    const strMsg = Format(
      '缓存分类变量:[strScoreWeightId]的长度:[{0}]不正确!(clsvSysScoreWeightWApi.GetObjByScoreWeightIdCache)',
      strScoreWeightId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvSysScoreWeightObjLstCache = await vSysScoreWeight_GetObjLstCache();
  try {
    const arrvSysScoreWeightSel = arrvSysScoreWeightObjLstCache.filter(
      (x) => x.scoreWeightId == strScoreWeightId,
    );
    let objvSysScoreWeight: clsvSysScoreWeightEN;
    if (arrvSysScoreWeightSel.length > 0) {
      objvSysScoreWeight = arrvSysScoreWeightSel[0];
      return objvSysScoreWeight;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvSysScoreWeightConst = await vSysScoreWeight_GetObjByScoreWeightIdAsync(
          strScoreWeightId,
        );
        if (objvSysScoreWeightConst != null) {
          vSysScoreWeight_ReFreshThisCache();
          return objvSysScoreWeightConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strScoreWeightId,
      vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_GetObjByScoreWeightIdlocalStorage(strScoreWeightId: string) {
  const strThisFuncName = 'GetObjByScoreWeightIdlocalStorage';

  if (IsNullOrEmpty(strScoreWeightId) == true) {
    const strMsg = Format(
      '参数:[strScoreWeightId]不能为空!(In clsvSysScoreWeightWApi.GetObjByScoreWeightIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strScoreWeightId.length != 1) {
    const strMsg = Format(
      '缓存分类变量:[strScoreWeightId]的长度:[{0}]不正确!(clsvSysScoreWeightWApi.GetObjByScoreWeightIdlocalStorage)',
      strScoreWeightId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvSysScoreWeightEN._CurrTabName, strScoreWeightId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvSysScoreWeightCache: clsvSysScoreWeightEN = JSON.parse(strTempObj);
    return objvSysScoreWeightCache;
  }
  try {
    const objvSysScoreWeight = await vSysScoreWeight_GetObjByScoreWeightIdAsync(strScoreWeightId);
    if (objvSysScoreWeight != null) {
      localStorage.setItem(strKey, JSON.stringify(objvSysScoreWeight));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvSysScoreWeight;
    }
    return objvSysScoreWeight;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strScoreWeightId,
      vSysScoreWeight_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return;
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
export async function vSysScoreWeight_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  if (strInFldName != clsvSysScoreWeightEN.con_ScoreWeightId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvSysScoreWeightEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvSysScoreWeightEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strScoreWeightId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvSysScoreWeight = await vSysScoreWeight_GetObjByScoreWeightIdCache(strScoreWeightId);
  if (objvSysScoreWeight == null) return '';
  if (objvSysScoreWeight.GetFldValue(strOutFldName) == null) return '';
  return objvSysScoreWeight.GetFldValue(strOutFldName).toString();
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
export function vSysScoreWeight_SortFunDefa(
  a: clsvSysScoreWeightEN,
  b: clsvSysScoreWeightEN,
): number {
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
export function vSysScoreWeight_SortFunDefa2Fld(
  a: clsvSysScoreWeightEN,
  b: clsvSysScoreWeightEN,
): number {
  if (a.scoreWeightValue == b.scoreWeightValue) return a.updDate.localeCompare(b.updDate);
  else return a.scoreWeightValue.localeCompare(b.scoreWeightValue);
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
export function vSysScoreWeight_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvSysScoreWeightEN.con_ScoreWeightId:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          return a.scoreWeightId.localeCompare(b.scoreWeightId);
        };
      case clsvSysScoreWeightEN.con_ScoreWeightValue:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          return a.scoreWeightValue.localeCompare(b.scoreWeightValue);
        };
      case clsvSysScoreWeightEN.con_IsPublic:
        return (a: clsvSysScoreWeightEN) => {
          if (a.isPublic == true) return 1;
          else return -1;
        };
      case clsvSysScoreWeightEN.con_UpdDate:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvSysScoreWeightEN.con_UpdUser:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvSysScoreWeightEN.con_Memo:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvSysScoreWeightEN.con_ScoreTypeId:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (a.scoreTypeId == null) return -1;
          if (b.scoreTypeId == null) return 1;
          return a.scoreTypeId.localeCompare(b.scoreTypeId);
        };
      case clsvSysScoreWeightEN.con_ScoreTypeName:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (a.scoreTypeName == null) return -1;
          if (b.scoreTypeName == null) return 1;
          return a.scoreTypeName.localeCompare(b.scoreTypeName);
        };
      case clsvSysScoreWeightEN.con_OnlyId:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (a.onlyId == null) return -1;
          if (b.onlyId == null) return 1;
          return a.onlyId.localeCompare(b.onlyId);
        };
      case clsvSysScoreWeightEN.con_IdCurrEduCls:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvSysScoreWeightEN.con_CurrEduClsId:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          return a.currEduClsId.localeCompare(b.currEduClsId);
        };
      case clsvSysScoreWeightEN.con_EduClsName:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (a.eduClsName == null) return -1;
          if (b.eduClsName == null) return 1;
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vSysScoreWeight]中不存在!(in ${vSysScoreWeight_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvSysScoreWeightEN.con_ScoreWeightId:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          return b.scoreWeightId.localeCompare(a.scoreWeightId);
        };
      case clsvSysScoreWeightEN.con_ScoreWeightValue:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          return b.scoreWeightValue.localeCompare(a.scoreWeightValue);
        };
      case clsvSysScoreWeightEN.con_IsPublic:
        return (b: clsvSysScoreWeightEN) => {
          if (b.isPublic == true) return 1;
          else return -1;
        };
      case clsvSysScoreWeightEN.con_UpdDate:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvSysScoreWeightEN.con_UpdUser:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvSysScoreWeightEN.con_Memo:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvSysScoreWeightEN.con_ScoreTypeId:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (b.scoreTypeId == null) return -1;
          if (a.scoreTypeId == null) return 1;
          return b.scoreTypeId.localeCompare(a.scoreTypeId);
        };
      case clsvSysScoreWeightEN.con_ScoreTypeName:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (b.scoreTypeName == null) return -1;
          if (a.scoreTypeName == null) return 1;
          return b.scoreTypeName.localeCompare(a.scoreTypeName);
        };
      case clsvSysScoreWeightEN.con_OnlyId:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (b.onlyId == null) return -1;
          if (a.onlyId == null) return 1;
          return b.onlyId.localeCompare(a.onlyId);
        };
      case clsvSysScoreWeightEN.con_IdCurrEduCls:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvSysScoreWeightEN.con_CurrEduClsId:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          return b.currEduClsId.localeCompare(a.currEduClsId);
        };
      case clsvSysScoreWeightEN.con_EduClsName:
        return (a: clsvSysScoreWeightEN, b: clsvSysScoreWeightEN) => {
          if (b.eduClsName == null) return -1;
          if (a.eduClsName == null) return 1;
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vSysScoreWeight]中不存在!(in ${vSysScoreWeight_ConstructorName}.${strThisFuncName})`;
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
export async function vSysScoreWeight_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvSysScoreWeightEN.con_ScoreWeightId:
      return (obj: clsvSysScoreWeightEN) => {
        return obj.scoreWeightId === value;
      };
    case clsvSysScoreWeightEN.con_ScoreWeightValue:
      return (obj: clsvSysScoreWeightEN) => {
        return obj.scoreWeightValue === value;
      };
    case clsvSysScoreWeightEN.con_IsPublic:
      return (obj: clsvSysScoreWeightEN) => {
        return obj.isPublic === value;
      };
    case clsvSysScoreWeightEN.con_UpdDate:
      return (obj: clsvSysScoreWeightEN) => {
        return obj.updDate === value;
      };
    case clsvSysScoreWeightEN.con_UpdUser:
      return (obj: clsvSysScoreWeightEN) => {
        return obj.updUser === value;
      };
    case clsvSysScoreWeightEN.con_Memo:
      return (obj: clsvSysScoreWeightEN) => {
        return obj.memo === value;
      };
    case clsvSysScoreWeightEN.con_ScoreTypeId:
      return (obj: clsvSysScoreWeightEN) => {
        return obj.scoreTypeId === value;
      };
    case clsvSysScoreWeightEN.con_ScoreTypeName:
      return (obj: clsvSysScoreWeightEN) => {
        return obj.scoreTypeName === value;
      };
    case clsvSysScoreWeightEN.con_OnlyId:
      return (obj: clsvSysScoreWeightEN) => {
        return obj.onlyId === value;
      };
    case clsvSysScoreWeightEN.con_IdCurrEduCls:
      return (obj: clsvSysScoreWeightEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvSysScoreWeightEN.con_CurrEduClsId:
      return (obj: clsvSysScoreWeightEN) => {
        return obj.currEduClsId === value;
      };
    case clsvSysScoreWeightEN.con_EduClsName:
      return (obj: clsvSysScoreWeightEN) => {
        return obj.eduClsName === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vSysScoreWeight]中不存在!(in ${vSysScoreWeight_ConstructorName}.${strThisFuncName})`;
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
export async function vSysScoreWeight_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (strInFldName == clsvSysScoreWeightEN.con_ScoreWeightId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvSysScoreWeight = await vSysScoreWeight_GetObjLstCache();
  if (arrvSysScoreWeight == null) return [];
  let arrvSysScoreWeightSel = arrvSysScoreWeight;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvSysScoreWeightSel.length == 0) return [];
  return arrvSysScoreWeightSel.map((x) => x.scoreWeightId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vSysScoreWeight_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vSysScoreWeight_Controller, strAction);

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
        vSysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vSysScoreWeight_Controller, strAction);

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
        vSysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvSysScoreWeightEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vSysScoreWeight_Controller, strAction);

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
      const objvSysScoreWeight = vSysScoreWeight_GetObjFromJsonObj(returnObj);
      return objvSysScoreWeight;
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
        vSysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_GetObjLstClientCache() {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvSysScoreWeightEN._CurrTabName;
  if (IsNullOrEmpty(clsvSysScoreWeightEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSysScoreWeightEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvSysScoreWeightExObjLstCache: Array<clsvSysScoreWeightEN> = CacheHelper.Get(strKey);
    const arrvSysScoreWeightObjLstT = vSysScoreWeight_GetObjLstByJSONObjLst(
      arrvSysScoreWeightExObjLstCache,
    );
    return arrvSysScoreWeightObjLstT;
  }
  try {
    const arrvSysScoreWeightExObjLst = await vSysScoreWeight_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrvSysScoreWeightExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSysScoreWeightExObjLst.length,
    );
    console.log(strInfo);
    return arrvSysScoreWeightExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_GetObjLstlocalStorage() {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvSysScoreWeightEN._CurrTabName;
  if (IsNullOrEmpty(clsvSysScoreWeightEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSysScoreWeightEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvSysScoreWeightExObjLstCache: Array<clsvSysScoreWeightEN> = JSON.parse(strTempObjLst);
    const arrvSysScoreWeightObjLstT = vSysScoreWeight_GetObjLstByJSONObjLst(
      arrvSysScoreWeightExObjLstCache,
    );
    return arrvSysScoreWeightObjLstT;
  }
  try {
    const arrvSysScoreWeightExObjLst = await vSysScoreWeight_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrvSysScoreWeightExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSysScoreWeightExObjLst.length,
    );
    console.log(strInfo);
    return arrvSysScoreWeightExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_GetObjLstlocalStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvSysScoreWeightEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvSysScoreWeightObjLstCache: Array<clsvSysScoreWeightEN> = JSON.parse(strTempObjLst);
    return arrvSysScoreWeightObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vSysScoreWeight_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvSysScoreWeightEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vSysScoreWeight_Controller, strAction);

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
          vSysScoreWeight_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysScoreWeight_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_GetObjLstsessionStorage() {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  const strKey = clsvSysScoreWeightEN._CurrTabName;
  if (IsNullOrEmpty(clsvSysScoreWeightEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvSysScoreWeightEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvSysScoreWeightExObjLstCache: Array<clsvSysScoreWeightEN> = JSON.parse(strTempObjLst);
    const arrvSysScoreWeightObjLstT = vSysScoreWeight_GetObjLstByJSONObjLst(
      arrvSysScoreWeightExObjLstCache,
    );
    return arrvSysScoreWeightObjLstT;
  }
  try {
    const arrvSysScoreWeightExObjLst = await vSysScoreWeight_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrvSysScoreWeightExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvSysScoreWeightExObjLst.length,
    );
    console.log(strInfo);
    return arrvSysScoreWeightExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_GetObjLstsessionStoragePureCache() {
  //初始化列表缓存
  const strKey = clsvSysScoreWeightEN._CurrTabName;
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvSysScoreWeightObjLstCache: Array<clsvSysScoreWeightEN> = JSON.parse(strTempObjLst);
    return arrvSysScoreWeightObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vSysScoreWeight_GetObjLstCache(): Promise<Array<clsvSysScoreWeightEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  let arrvSysScoreWeightObjLstCache;
  switch (clsvSysScoreWeightEN.CacheModeId) {
    case '04': //sessionStorage
      arrvSysScoreWeightObjLstCache = await vSysScoreWeight_GetObjLstsessionStorage();
      break;
    case '03': //localStorage
      arrvSysScoreWeightObjLstCache = await vSysScoreWeight_GetObjLstlocalStorage();
      break;
    case '02': //ClientCache
      arrvSysScoreWeightObjLstCache = await vSysScoreWeight_GetObjLstClientCache();
      break;
    default:
      arrvSysScoreWeightObjLstCache = await vSysScoreWeight_GetObjLstClientCache();
      break;
  }
  return arrvSysScoreWeightObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vSysScoreWeight_GetObjLstPureCache() {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvSysScoreWeightObjLstCache;
  switch (clsvSysScoreWeightEN.CacheModeId) {
    case '04': //sessionStorage
      arrvSysScoreWeightObjLstCache = await vSysScoreWeight_GetObjLstsessionStoragePureCache();
      break;
    case '03': //localStorage
      arrvSysScoreWeightObjLstCache = await vSysScoreWeight_GetObjLstlocalStoragePureCache();
      break;
    case '02': //ClientCache
      arrvSysScoreWeightObjLstCache = null;
      break;
    default:
      arrvSysScoreWeightObjLstCache = null;
      break;
  }
  return arrvSysScoreWeightObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrScoreWeightIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vSysScoreWeight_GetSubObjLstCache(
  objvSysScoreWeightCond: clsvSysScoreWeightEN,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvSysScoreWeightObjLstCache = await vSysScoreWeight_GetObjLstCache();
  let arrvSysScoreWeightSel = arrvSysScoreWeightObjLstCache;
  if (
    objvSysScoreWeightCond.sfFldComparisonOp == null ||
    objvSysScoreWeightCond.sfFldComparisonOp == ''
  )
    return arrvSysScoreWeightSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSysScoreWeightCond.sfFldComparisonOp,
  );
  //console.log("clsvSysScoreWeightWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSysScoreWeightCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysScoreWeightCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvSysScoreWeightSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvSysScoreWeightCond),
      vSysScoreWeight_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvSysScoreWeightEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrScoreWeightId:关键字列表
 * @returns 对象列表
 **/
export async function vSysScoreWeight_GetObjLstByScoreWeightIdLstAsync(
  arrScoreWeightId: Array<string>,
): Promise<Array<clsvSysScoreWeightEN>> {
  const strThisFuncName = 'GetObjLstByScoreWeightIdLstAsync';
  const strAction = 'GetObjLstByScoreWeightIdLst';
  const strUrl = GetWebApiUrl(vSysScoreWeight_Controller, strAction);

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
          vSysScoreWeight_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysScoreWeight_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_GetObjLstByScoreWeightIdLstCache(
  arrScoreWeightIdLst: Array<string>,
) {
  const strThisFuncName = 'GetObjLstByScoreWeightIdLstCache';
  try {
    const arrvSysScoreWeightObjLstCache = await vSysScoreWeight_GetObjLstCache();
    const arrvSysScoreWeightSel = arrvSysScoreWeightObjLstCache.filter(
      (x) => arrScoreWeightIdLst.indexOf(x.scoreWeightId) > -1,
    );
    return arrvSysScoreWeightSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrScoreWeightIdLst.join(','),
      vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvSysScoreWeightEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vSysScoreWeight_Controller, strAction);

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
          vSysScoreWeight_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysScoreWeight_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvSysScoreWeightEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vSysScoreWeight_Controller, strAction);

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
          vSysScoreWeight_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysScoreWeight_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_GetObjLstByPagerCache(objPagerPara: stuPagerPara) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvSysScoreWeightEN>();
  const arrvSysScoreWeightObjLstCache = await vSysScoreWeight_GetObjLstCache();
  if (arrvSysScoreWeightObjLstCache.length == 0) return arrvSysScoreWeightObjLstCache;
  let arrvSysScoreWeightSel = arrvSysScoreWeightObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvSysScoreWeightCond = new clsvSysScoreWeightEN();
  ObjectAssign(objvSysScoreWeightCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvSysScoreWeightWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysScoreWeightCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvSysScoreWeightSel.length == 0) return arrvSysScoreWeightSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvSysScoreWeightSel = arrvSysScoreWeightSel.sort(
        vSysScoreWeight_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvSysScoreWeightSel = arrvSysScoreWeightSel.sort(objPagerPara.sortFun);
    }
    arrvSysScoreWeightSel = arrvSysScoreWeightSel.slice(intStart, intEnd);
    return arrvSysScoreWeightSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vSysScoreWeight_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvSysScoreWeightEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vSysScoreWeight_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvSysScoreWeightEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvSysScoreWeightEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vSysScoreWeight_Controller, strAction);

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
          vSysScoreWeight_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysScoreWeight_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_IsExistRecordCache(
  objvSysScoreWeightCond: clsvSysScoreWeightEN,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvSysScoreWeightObjLstCache = await vSysScoreWeight_GetObjLstCache();
  if (arrvSysScoreWeightObjLstCache == null) return false;
  let arrvSysScoreWeightSel = arrvSysScoreWeightObjLstCache;
  if (
    objvSysScoreWeightCond.sfFldComparisonOp == null ||
    objvSysScoreWeightCond.sfFldComparisonOp == ''
  )
    return arrvSysScoreWeightSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSysScoreWeightCond.sfFldComparisonOp,
  );
  //console.log("clsvSysScoreWeightWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSysScoreWeightCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysScoreWeightCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvSysScoreWeightSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvSysScoreWeightCond),
      vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vSysScoreWeight_Controller, strAction);

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
        vSysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_IsExistCache(strScoreWeightId: string) {
  const strThisFuncName = 'IsExistCache';
  const arrvSysScoreWeightObjLstCache = await vSysScoreWeight_GetObjLstCache();
  if (arrvSysScoreWeightObjLstCache == null) return false;
  try {
    const arrvSysScoreWeightSel = arrvSysScoreWeightObjLstCache.filter(
      (x) => x.scoreWeightId == strScoreWeightId,
    );
    if (arrvSysScoreWeightSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strScoreWeightId,
      vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_IsExistAsync(strScoreWeightId: string): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vSysScoreWeight_Controller, strAction);

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
        vSysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreWeight_ConstructorName,
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
export async function vSysScoreWeight_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vSysScoreWeight_Controller, strAction);

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
        vSysScoreWeight_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vSysScoreWeight_ConstructorName,
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
 * @param objvSysScoreWeightCond:条件对象
 * @returns 对象列表记录数
 */
export async function vSysScoreWeight_GetRecCountByCondCache(
  objvSysScoreWeightCond: clsvSysScoreWeightEN,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvSysScoreWeightObjLstCache = await vSysScoreWeight_GetObjLstCache();
  if (arrvSysScoreWeightObjLstCache == null) return 0;
  let arrvSysScoreWeightSel = arrvSysScoreWeightObjLstCache;
  if (
    objvSysScoreWeightCond.sfFldComparisonOp == null ||
    objvSysScoreWeightCond.sfFldComparisonOp == ''
  )
    return arrvSysScoreWeightSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvSysScoreWeightCond.sfFldComparisonOp,
  );
  //console.log("clsvSysScoreWeightWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvSysScoreWeightCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysScoreWeightCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvSysScoreWeightSel = arrvSysScoreWeightSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvSysScoreWeightSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvSysScoreWeightCond),
      vSysScoreWeight_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function vSysScoreWeight_GetWebApiUrl(strController: string, strAction: string): string {
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
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function vSysScoreWeight_ReFreshThisCache(): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = clsvSysScoreWeightEN._CurrTabName;
    switch (clsvSysScoreWeightEN.CacheModeId) {
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
 * 把一个对象转化为一个JSON串
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getJSONStrByRecObj)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vSysScoreWeight_GetJSONStrByObj(
  pobjvSysScoreWeightEN: clsvSysScoreWeightEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvSysScoreWeightEN);
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
export function vSysScoreWeight_GetObjLstByJSONStr(strJSON: string): Array<clsvSysScoreWeightEN> {
  let arrvSysScoreWeightObjLst = new Array<clsvSysScoreWeightEN>();
  if (strJSON === '') {
    return arrvSysScoreWeightObjLst;
  }
  try {
    arrvSysScoreWeightObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvSysScoreWeightObjLst;
  }
  return arrvSysScoreWeightObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvSysScoreWeightObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vSysScoreWeight_GetObjLstByJSONObjLst(
  arrvSysScoreWeightObjLstS: Array<clsvSysScoreWeightEN>,
): Array<clsvSysScoreWeightEN> {
  const arrvSysScoreWeightObjLst = new Array<clsvSysScoreWeightEN>();
  for (const objInFor of arrvSysScoreWeightObjLstS) {
    const obj1 = vSysScoreWeight_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvSysScoreWeightObjLst.push(obj1);
  }
  return arrvSysScoreWeightObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vSysScoreWeight_GetObjByJSONStr(strJSON: string): clsvSysScoreWeightEN {
  let pobjvSysScoreWeightEN = new clsvSysScoreWeightEN();
  if (strJSON === '') {
    return pobjvSysScoreWeightEN;
  }
  try {
    pobjvSysScoreWeightEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvSysScoreWeightEN;
  }
  return pobjvSysScoreWeightEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vSysScoreWeight_GetCombineCondition(
  objvSysScoreWeightCond: clsvSysScoreWeightEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreWeightCond.dicFldComparisonOp,
      clsvSysScoreWeightEN.con_ScoreWeightId,
    ) == true
  ) {
    const strComparisonOpScoreWeightId: string =
      objvSysScoreWeightCond.dicFldComparisonOp[clsvSysScoreWeightEN.con_ScoreWeightId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreWeightEN.con_ScoreWeightId,
      objvSysScoreWeightCond.scoreWeightId,
      strComparisonOpScoreWeightId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreWeightCond.dicFldComparisonOp,
      clsvSysScoreWeightEN.con_ScoreWeightValue,
    ) == true
  ) {
    const strComparisonOpScoreWeightValue: string =
      objvSysScoreWeightCond.dicFldComparisonOp[clsvSysScoreWeightEN.con_ScoreWeightValue];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreWeightEN.con_ScoreWeightValue,
      objvSysScoreWeightCond.scoreWeightValue,
      strComparisonOpScoreWeightValue,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreWeightCond.dicFldComparisonOp,
      clsvSysScoreWeightEN.con_IsPublic,
    ) == true
  ) {
    if (objvSysScoreWeightCond.isPublic == true) {
      strWhereCond += Format(" And {0} = '1'", clsvSysScoreWeightEN.con_IsPublic);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsvSysScoreWeightEN.con_IsPublic);
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreWeightCond.dicFldComparisonOp,
      clsvSysScoreWeightEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvSysScoreWeightCond.dicFldComparisonOp[clsvSysScoreWeightEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreWeightEN.con_UpdDate,
      objvSysScoreWeightCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreWeightCond.dicFldComparisonOp,
      clsvSysScoreWeightEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvSysScoreWeightCond.dicFldComparisonOp[clsvSysScoreWeightEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreWeightEN.con_UpdUser,
      objvSysScoreWeightCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreWeightCond.dicFldComparisonOp,
      clsvSysScoreWeightEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvSysScoreWeightCond.dicFldComparisonOp[clsvSysScoreWeightEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreWeightEN.con_Memo,
      objvSysScoreWeightCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreWeightCond.dicFldComparisonOp,
      clsvSysScoreWeightEN.con_ScoreTypeId,
    ) == true
  ) {
    const strComparisonOpScoreTypeId: string =
      objvSysScoreWeightCond.dicFldComparisonOp[clsvSysScoreWeightEN.con_ScoreTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreWeightEN.con_ScoreTypeId,
      objvSysScoreWeightCond.scoreTypeId,
      strComparisonOpScoreTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreWeightCond.dicFldComparisonOp,
      clsvSysScoreWeightEN.con_ScoreTypeName,
    ) == true
  ) {
    const strComparisonOpScoreTypeName: string =
      objvSysScoreWeightCond.dicFldComparisonOp[clsvSysScoreWeightEN.con_ScoreTypeName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreWeightEN.con_ScoreTypeName,
      objvSysScoreWeightCond.scoreTypeName,
      strComparisonOpScoreTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreWeightCond.dicFldComparisonOp,
      clsvSysScoreWeightEN.con_OnlyId,
    ) == true
  ) {
    const strComparisonOpOnlyId: string =
      objvSysScoreWeightCond.dicFldComparisonOp[clsvSysScoreWeightEN.con_OnlyId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreWeightEN.con_OnlyId,
      objvSysScoreWeightCond.onlyId,
      strComparisonOpOnlyId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreWeightCond.dicFldComparisonOp,
      clsvSysScoreWeightEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvSysScoreWeightCond.dicFldComparisonOp[clsvSysScoreWeightEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreWeightEN.con_IdCurrEduCls,
      objvSysScoreWeightCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreWeightCond.dicFldComparisonOp,
      clsvSysScoreWeightEN.con_CurrEduClsId,
    ) == true
  ) {
    const strComparisonOpCurrEduClsId: string =
      objvSysScoreWeightCond.dicFldComparisonOp[clsvSysScoreWeightEN.con_CurrEduClsId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreWeightEN.con_CurrEduClsId,
      objvSysScoreWeightCond.currEduClsId,
      strComparisonOpCurrEduClsId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvSysScoreWeightCond.dicFldComparisonOp,
      clsvSysScoreWeightEN.con_EduClsName,
    ) == true
  ) {
    const strComparisonOpEduClsName: string =
      objvSysScoreWeightCond.dicFldComparisonOp[clsvSysScoreWeightEN.con_EduClsName];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvSysScoreWeightEN.con_EduClsName,
      objvSysScoreWeightCond.eduClsName,
      strComparisonOpEduClsName,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvSysScoreWeightENS:源对象
 * @param objvSysScoreWeightENT:目标对象
 */
export function vSysScoreWeight_CopyObjTo(
  objvSysScoreWeightENS: clsvSysScoreWeightEN,
  objvSysScoreWeightENT: clsvSysScoreWeightEN,
): void {
  objvSysScoreWeightENT.scoreWeightId = objvSysScoreWeightENS.scoreWeightId; //分数权重Id
  objvSysScoreWeightENT.scoreWeightValue = objvSysScoreWeightENS.scoreWeightValue; //分数权重值
  objvSysScoreWeightENT.isPublic = objvSysScoreWeightENS.isPublic; //是否公开
  objvSysScoreWeightENT.updDate = objvSysScoreWeightENS.updDate; //修改日期
  objvSysScoreWeightENT.updUser = objvSysScoreWeightENS.updUser; //修改人
  objvSysScoreWeightENT.memo = objvSysScoreWeightENS.memo; //备注
  objvSysScoreWeightENT.scoreTypeId = objvSysScoreWeightENS.scoreTypeId; //分数类型Id
  objvSysScoreWeightENT.scoreTypeName = objvSysScoreWeightENS.scoreTypeName; //分数类型名称
  objvSysScoreWeightENT.onlyId = objvSysScoreWeightENS.onlyId; //OnlyId
  objvSysScoreWeightENT.idCurrEduCls = objvSysScoreWeightENS.idCurrEduCls; //教学班流水号
  objvSysScoreWeightENT.currEduClsId = objvSysScoreWeightENS.currEduClsId; //教学班Id
  objvSysScoreWeightENT.eduClsName = objvSysScoreWeightENS.eduClsName; //教学班名
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvSysScoreWeightENS:源对象
 * @param objvSysScoreWeightENT:目标对象
 */
export function vSysScoreWeight_GetObjFromJsonObj(
  objvSysScoreWeightENS: clsvSysScoreWeightEN,
): clsvSysScoreWeightEN {
  const objvSysScoreWeightENT: clsvSysScoreWeightEN = new clsvSysScoreWeightEN();
  ObjectAssign(objvSysScoreWeightENT, objvSysScoreWeightENS);
  return objvSysScoreWeightENT;
}
