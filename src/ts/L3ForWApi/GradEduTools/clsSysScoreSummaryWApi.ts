/**
 * 类名:clsSysScoreSummaryWApi
 * 表名:SysScoreSummary(01120628)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:12
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
 * 系统分数汇总表(SysScoreSummary)
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
import { clsSysScoreSummaryEN } from '@/ts/L0Entity/GradEduTools/clsSysScoreSummaryEN';
import { vSysScoreSummary_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduTools/clsvSysScoreSummaryWApi';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const sysScoreSummary_Controller = 'SysScoreSummaryApi';
export const sysScoreSummary_ConstructorName = 'sysScoreSummary';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function SysScoreSummary_GetObjBymIdAsync(
  lngmId: number,
): Promise<clsSysScoreSummaryEN | null> {
  const strThisFuncName = 'GetObjBymIdAsync';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsSysScoreSummaryWApi.GetObjBymIdAsync)');
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjBymId';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
      const objSysScoreSummary = SysScoreSummary_GetObjFromJsonObj(returnObj);
      return objSysScoreSummary;
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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function SysScoreSummary_GetObjBymIdCache(
  lngmId: number,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjBymIdCache';

  if (lngmId == 0) {
    const strMsg = Format('参数:[lngmId]不能为空!(In clsSysScoreSummaryWApi.GetObjBymIdCache)');
    console.error(strMsg);
    throw strMsg;
  }
  const arrSysScoreSummaryObjLstCache = await SysScoreSummary_GetObjLstCache(strIdCurrEduCls);
  try {
    const arrSysScoreSummarySel = arrSysScoreSummaryObjLstCache.filter((x) => x.mId == lngmId);
    let objSysScoreSummary: clsSysScoreSummaryEN;
    if (arrSysScoreSummarySel.length > 0) {
      objSysScoreSummary = arrSysScoreSummarySel[0];
      return objSysScoreSummary;
    } else {
      if (bolTryAsyncOnce == true) {
        const objSysScoreSummaryConst = await SysScoreSummary_GetObjBymIdAsync(lngmId);
        if (objSysScoreSummaryConst != null) {
          SysScoreSummary_ReFreshThisCache(strIdCurrEduCls);
          return objSysScoreSummaryConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      sysScoreSummary_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function SysScoreSummary_GetObjBymIdlocalStorage(lngmId: number) {
  const strThisFuncName = 'GetObjBymIdlocalStorage';

  if (lngmId == 0) {
    const strMsg = Format(
      '参数:[lngmId]不能为空!(In clsSysScoreSummaryWApi.GetObjBymIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsSysScoreSummaryEN._CurrTabName, lngmId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objSysScoreSummaryCache: clsSysScoreSummaryEN = JSON.parse(strTempObj);
    return objSysScoreSummaryCache;
  }
  try {
    const objSysScoreSummary = await SysScoreSummary_GetObjBymIdAsync(lngmId);
    if (objSysScoreSummary != null) {
      localStorage.setItem(strKey, JSON.stringify(objSysScoreSummary));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objSysScoreSummary;
    }
    return objSysScoreSummary;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      lngmId,
      sysScoreSummary_ConstructorName,
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
 * @param objSysScoreSummary:所给的对象
 * @returns 对象
 */
export async function SysScoreSummary_UpdateObjInLstCache(
  objSysScoreSummary: clsSysScoreSummaryEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'UpdateObjInLstCache';
  try {
    const arrSysScoreSummaryObjLstCache = await SysScoreSummary_GetObjLstCache(strIdCurrEduCls);
    const obj = arrSysScoreSummaryObjLstCache.find(
      (x) => x.mId == objSysScoreSummary.mId && x.userId == objSysScoreSummary.userId,
    );
    if (obj != null) {
      objSysScoreSummary.mId = obj.mId;
      ObjectAssign(obj, objSysScoreSummary);
    } else {
      arrSysScoreSummaryObjLstCache.push(objSysScoreSummary);
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n在列表中修改对象不成功!(in {1}.{2})',
      e,
      sysScoreSummary_ConstructorName,
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function SysScoreSummary_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format('参数:[strIdCurrEduClsClassfy]不能为空!(In clsSysScoreSummaryWApi.func)');
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsSysScoreSummaryWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsSysScoreSummaryEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsSysScoreSummaryEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsSysScoreSummaryEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const lngmId = Number(strInValue);
  if (lngmId == 0) {
    return '';
  }
  const objSysScoreSummary = await SysScoreSummary_GetObjBymIdCache(lngmId, strIdCurrEduClsClassfy);
  if (objSysScoreSummary == null) return '';
  if (objSysScoreSummary.GetFldValue(strOutFldName) == null) return '';
  return objSysScoreSummary.GetFldValue(strOutFldName).toString();
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
export function SysScoreSummary_SortFunDefa(
  a: clsSysScoreSummaryEN,
  b: clsSysScoreSummaryEN,
): number {
  return a.mId - b.mId;
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
export function SysScoreSummary_SortFunDefa2Fld(
  a: clsSysScoreSummaryEN,
  b: clsSysScoreSummaryEN,
): number {
  if (a.userId == b.userId) return a.schoolYear.localeCompare(b.schoolYear);
  else return a.userId.localeCompare(b.userId);
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
export function SysScoreSummary_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsSysScoreSummaryEN.con_mId:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          return a.mId - b.mId;
        };
      case clsSysScoreSummaryEN.con_UserId:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          return a.userId.localeCompare(b.userId);
        };
      case clsSysScoreSummaryEN.con_SchoolYear:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          if (a.schoolYear == null) return -1;
          if (b.schoolYear == null) return 1;
          return a.schoolYear.localeCompare(b.schoolYear);
        };
      case clsSysScoreSummaryEN.con_UpdDate:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsSysScoreSummaryEN.con_Memo:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsSysScoreSummaryEN.con_ScoreTypeId:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          if (a.scoreTypeId == null) return -1;
          if (b.scoreTypeId == null) return 1;
          return a.scoreTypeId.localeCompare(b.scoreTypeId);
        };
      case clsSysScoreSummaryEN.con_UpdUser:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsSysScoreSummaryEN.con_Score:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          return a.score - b.score;
        };
      case clsSysScoreSummaryEN.con_IdCurrEduCls:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          if (a.idCurrEduCls == null) return -1;
          if (b.idCurrEduCls == null) return 1;
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsSysScoreSummaryEN.con_IsSubmit:
        return (a: clsSysScoreSummaryEN) => {
          if (a.isSubmit == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SysScoreSummary]中不存在!(in ${sysScoreSummary_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsSysScoreSummaryEN.con_mId:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          return b.mId - a.mId;
        };
      case clsSysScoreSummaryEN.con_UserId:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          return b.userId.localeCompare(a.userId);
        };
      case clsSysScoreSummaryEN.con_SchoolYear:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          if (b.schoolYear == null) return -1;
          if (a.schoolYear == null) return 1;
          return b.schoolYear.localeCompare(a.schoolYear);
        };
      case clsSysScoreSummaryEN.con_UpdDate:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsSysScoreSummaryEN.con_Memo:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsSysScoreSummaryEN.con_ScoreTypeId:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          if (b.scoreTypeId == null) return -1;
          if (a.scoreTypeId == null) return 1;
          return b.scoreTypeId.localeCompare(a.scoreTypeId);
        };
      case clsSysScoreSummaryEN.con_UpdUser:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsSysScoreSummaryEN.con_Score:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          return b.score - a.score;
        };
      case clsSysScoreSummaryEN.con_IdCurrEduCls:
        return (a: clsSysScoreSummaryEN, b: clsSysScoreSummaryEN) => {
          if (b.idCurrEduCls == null) return -1;
          if (a.idCurrEduCls == null) return 1;
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsSysScoreSummaryEN.con_IsSubmit:
        return (b: clsSysScoreSummaryEN) => {
          if (b.isSubmit == true) return 1;
          else return -1;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[SysScoreSummary]中不存在!(in ${sysScoreSummary_ConstructorName}.${strThisFuncName})`;
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
export async function SysScoreSummary_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsSysScoreSummaryEN.con_mId:
      return (obj: clsSysScoreSummaryEN) => {
        return obj.mId === value;
      };
    case clsSysScoreSummaryEN.con_UserId:
      return (obj: clsSysScoreSummaryEN) => {
        return obj.userId === value;
      };
    case clsSysScoreSummaryEN.con_SchoolYear:
      return (obj: clsSysScoreSummaryEN) => {
        return obj.schoolYear === value;
      };
    case clsSysScoreSummaryEN.con_UpdDate:
      return (obj: clsSysScoreSummaryEN) => {
        return obj.updDate === value;
      };
    case clsSysScoreSummaryEN.con_Memo:
      return (obj: clsSysScoreSummaryEN) => {
        return obj.memo === value;
      };
    case clsSysScoreSummaryEN.con_ScoreTypeId:
      return (obj: clsSysScoreSummaryEN) => {
        return obj.scoreTypeId === value;
      };
    case clsSysScoreSummaryEN.con_UpdUser:
      return (obj: clsSysScoreSummaryEN) => {
        return obj.updUser === value;
      };
    case clsSysScoreSummaryEN.con_Score:
      return (obj: clsSysScoreSummaryEN) => {
        return obj.score === value;
      };
    case clsSysScoreSummaryEN.con_IdCurrEduCls:
      return (obj: clsSysScoreSummaryEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsSysScoreSummaryEN.con_IsSubmit:
      return (obj: clsSysScoreSummaryEN) => {
        return obj.isSubmit === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[SysScoreSummary]中不存在!(in ${sysScoreSummary_ConstructorName}.${strThisFuncName})`;
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个关键字值列表
*/
export async function SysScoreSummary_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<number>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsSysScoreSummaryWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsSysScoreSummaryWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsSysScoreSummaryEN.con_mId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (Number(strInValue) == 0) {
    return [];
  }
  const arrSysScoreSummary = await SysScoreSummary_GetObjLstCache(strIdCurrEduClsClassfy);
  if (arrSysScoreSummary == null) return [];
  let arrSysScoreSummarySel = arrSysScoreSummary;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrSysScoreSummarySel.length == 0) return [];
  return arrSysScoreSummarySel.map((x) => x.mId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function SysScoreSummary_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
export async function SysScoreSummary_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
export async function SysScoreSummary_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsSysScoreSummaryEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

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
      const objSysScoreSummary = SysScoreSummary_GetObjFromJsonObj(returnObj);
      return objSysScoreSummary;
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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
export async function SysScoreSummary_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsSysScoreSummaryEN.WhereFormat) == false) {
    strWhereCond = Format(clsSysScoreSummaryEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsSysScoreSummaryEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsSysScoreSummaryEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysScoreSummaryEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrSysScoreSummaryExObjLstCache: Array<clsSysScoreSummaryEN> = CacheHelper.Get(strKey);
    const arrSysScoreSummaryObjLstT = SysScoreSummary_GetObjLstByJSONObjLst(
      arrSysScoreSummaryExObjLstCache,
    );
    return arrSysScoreSummaryObjLstT;
  }
  try {
    const arrSysScoreSummaryExObjLst = await SysScoreSummary_GetObjLstAsync(strWhereCond);
    CacheHelper.Add(strKey, arrSysScoreSummaryExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysScoreSummaryExObjLst.length,
    );
    console.log(strInfo);
    return arrSysScoreSummaryExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysScoreSummary_ConstructorName,
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
export async function SysScoreSummary_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsSysScoreSummaryEN.WhereFormat) == false) {
    strWhereCond = Format(clsSysScoreSummaryEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsSysScoreSummaryEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsSysScoreSummaryEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsSysScoreSummaryEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysScoreSummaryEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSysScoreSummaryExObjLstCache: Array<clsSysScoreSummaryEN> = JSON.parse(strTempObjLst);
    const arrSysScoreSummaryObjLstT = SysScoreSummary_GetObjLstByJSONObjLst(
      arrSysScoreSummaryExObjLstCache,
    );
    return arrSysScoreSummaryObjLstT;
  }
  try {
    const arrSysScoreSummaryExObjLst = await SysScoreSummary_GetObjLstAsync(strWhereCond);
    localStorage.setItem(strKey, JSON.stringify(arrSysScoreSummaryExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysScoreSummaryExObjLst.length,
    );
    console.log(strInfo);
    return arrSysScoreSummaryExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysScoreSummary_ConstructorName,
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
export async function SysScoreSummary_GetObjLstlocalStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsSysScoreSummaryEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrSysScoreSummaryObjLstCache: Array<clsSysScoreSummaryEN> = JSON.parse(strTempObjLst);
    return arrSysScoreSummaryObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function SysScoreSummary_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsSysScoreSummaryEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

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
          sysScoreSummary_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreSummary_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
export async function SysScoreSummary_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsSysScoreSummaryEN.WhereFormat) == false) {
    strWhereCond = Format(clsSysScoreSummaryEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("{0}='{1}'", clsSysScoreSummaryEN.con_IdCurrEduCls, strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsSysScoreSummaryEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsSysScoreSummaryEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsSysScoreSummaryEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSysScoreSummaryExObjLstCache: Array<clsSysScoreSummaryEN> = JSON.parse(strTempObjLst);
    const arrSysScoreSummaryObjLstT = SysScoreSummary_GetObjLstByJSONObjLst(
      arrSysScoreSummaryExObjLstCache,
    );
    return arrSysScoreSummaryObjLstT;
  }
  try {
    const arrSysScoreSummaryExObjLst = await SysScoreSummary_GetObjLstAsync(strWhereCond);
    sessionStorage.setItem(strKey, JSON.stringify(arrSysScoreSummaryExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrSysScoreSummaryExObjLst.length,
    );
    console.log(strInfo);
    return arrSysScoreSummaryExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      sysScoreSummary_ConstructorName,
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
export async function SysScoreSummary_GetObjLstsessionStoragePureCache(strIdCurrEduCls: string) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsSysScoreSummaryEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrSysScoreSummaryObjLstCache: Array<clsSysScoreSummaryEN> = JSON.parse(strTempObjLst);
    return arrSysScoreSummaryObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SysScoreSummary_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsSysScoreSummaryEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsSysScoreSummaryWApi.SysScoreSummary_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsSysScoreSummaryWApi.SysScoreSummary_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrSysScoreSummaryObjLstCache;
  switch (clsSysScoreSummaryEN.CacheModeId) {
    case '04': //sessionStorage
      arrSysScoreSummaryObjLstCache = await SysScoreSummary_GetObjLstsessionStorage(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrSysScoreSummaryObjLstCache = await SysScoreSummary_GetObjLstlocalStorage(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrSysScoreSummaryObjLstCache = await SysScoreSummary_GetObjLstClientCache(strIdCurrEduCls);
      break;
    default:
      arrSysScoreSummaryObjLstCache = await SysScoreSummary_GetObjLstClientCache(strIdCurrEduCls);
      break;
  }
  return arrSysScoreSummaryObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function SysScoreSummary_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrSysScoreSummaryObjLstCache;
  switch (clsSysScoreSummaryEN.CacheModeId) {
    case '04': //sessionStorage
      arrSysScoreSummaryObjLstCache = await SysScoreSummary_GetObjLstsessionStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrSysScoreSummaryObjLstCache = await SysScoreSummary_GetObjLstlocalStoragePureCache(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrSysScoreSummaryObjLstCache = null;
      break;
    default:
      arrSysScoreSummaryObjLstCache = null;
      break;
  }
  return arrSysScoreSummaryObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SysScoreSummary_GetSubObjLstCache(
  objSysScoreSummaryCond: clsSysScoreSummaryEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrSysScoreSummaryObjLstCache = await SysScoreSummary_GetObjLstCache(strIdCurrEduCls);
  let arrSysScoreSummarySel = arrSysScoreSummaryObjLstCache;
  if (
    objSysScoreSummaryCond.sfFldComparisonOp == null ||
    objSysScoreSummaryCond.sfFldComparisonOp == ''
  )
    return arrSysScoreSummarySel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysScoreSummaryCond.sfFldComparisonOp,
  );
  //console.log("clsSysScoreSummaryWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysScoreSummaryCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysScoreSummarySel = arrSysScoreSummarySel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysScoreSummaryCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSysScoreSummarySel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSysScoreSummaryCond),
      sysScoreSummary_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSysScoreSummaryEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrmId:关键字列表
 * @returns 对象列表
 **/
export async function SysScoreSummary_GetObjLstBymIdLstAsync(
  arrmId: Array<string>,
): Promise<Array<clsSysScoreSummaryEN>> {
  const strThisFuncName = 'GetObjLstBymIdLstAsync';
  const strAction = 'GetObjLstBymIdLst';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sysScoreSummary_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreSummary_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
 * @param arrlngmIdLst:关键字列表
 * @returns 对象列表
 */
export async function SysScoreSummary_GetObjLstBymIdLstCache(
  arrmIdLst: Array<number>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstBymIdLstCache';
  try {
    const arrSysScoreSummaryObjLstCache = await SysScoreSummary_GetObjLstCache(strIdCurrEduCls);
    const arrSysScoreSummarySel = arrSysScoreSummaryObjLstCache.filter(
      (x) => arrmIdLst.indexOf(x.mId) > -1,
    );
    return arrSysScoreSummarySel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrmIdLst.join(','),
      sysScoreSummary_ConstructorName,
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
export async function SysScoreSummary_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsSysScoreSummaryEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

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
          sysScoreSummary_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreSummary_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
export async function SysScoreSummary_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsSysScoreSummaryEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

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
          sysScoreSummary_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreSummary_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
export async function SysScoreSummary_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsSysScoreSummaryEN>();
  const arrSysScoreSummaryObjLstCache = await SysScoreSummary_GetObjLstCache(strIdCurrEduCls);
  if (arrSysScoreSummaryObjLstCache.length == 0) return arrSysScoreSummaryObjLstCache;
  let arrSysScoreSummarySel = arrSysScoreSummaryObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objSysScoreSummaryCond = new clsSysScoreSummaryEN();
  ObjectAssign(objSysScoreSummaryCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsSysScoreSummaryWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysScoreSummarySel = arrSysScoreSummarySel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysScoreSummaryCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSysScoreSummarySel.length == 0) return arrSysScoreSummarySel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSysScoreSummarySel = arrSysScoreSummarySel.sort(
        SysScoreSummary_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrSysScoreSummarySel = arrSysScoreSummarySel.sort(objPagerPara.sortFun);
    }
    arrSysScoreSummarySel = arrSysScoreSummarySel.slice(intStart, intEnd);
    return arrSysScoreSummarySel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sysScoreSummary_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSysScoreSummaryEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function SysScoreSummary_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSysScoreSummaryEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsSysScoreSummaryEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

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
          sysScoreSummary_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = SysScoreSummary_GetObjLstByJSONObjLst(returnObjLst);
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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 获取删除的结果
 **/
export async function SysScoreSummary_DelRecordAsync(lngmId: number): Promise<number> {
  const strThisFuncName = 'DelRecordAsync';
  const strAction = 'DelRecord';
  let strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, lngmId);

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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
 * @param arrmId:关键字列表
 * @returns 实际删除记录的个数
 **/
export async function SysScoreSummary_DelSysScoreSummarysAsync(
  arrmId: Array<string>,
): Promise<number> {
  const strThisFuncName = 'DelSysScoreSummarysAsync';
  const strAction = 'DelSysScoreSummarys';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrmId, config);
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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
export async function SysScoreSummary_DelSysScoreSummarysByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'DelSysScoreSummarysByCondAsync';
  const strAction = 'DelSysScoreSummarysByCond';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
 * @param objSysScoreSummaryEN:需要添加的对象
 * @returns 获取相应的记录的对象
 **/
export async function SysScoreSummary_AddNewRecordAsync(
  objSysScoreSummaryEN: clsSysScoreSummaryEN,
): Promise<boolean> {
  const strThisFuncName = 'AddNewRecordAsync';
  const strAction = 'AddNewRecord';
  //var strJSON = JSON.stringify(objSysScoreSummaryEN);
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysScoreSummaryEN, config);
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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
/* 数据类型不是字符型,不可以最大关键字的方式添加记录。*/

/**
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字和自增关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * @param objSysScoreSummaryEN:需要添加的表对象
 * @returns 返回新添加记录的关键字
 **/
export async function SysScoreSummary_AddNewRecordWithReturnKeyAsync(
  objSysScoreSummaryEN: clsSysScoreSummaryEN,
): Promise<string> {
  const strThisFuncName = 'AddNewRecordWithReturnKeyAsync';
  const strAction = 'AddNewRecordWithReturnKey';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysScoreSummaryEN, config);
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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
 * @param objSysScoreSummaryEN:需要添加的对象
 * @returns 获取修改是否成功？
 **/
export async function SysScoreSummary_UpdateRecordAsync(
  objSysScoreSummaryEN: clsSysScoreSummaryEN,
): Promise<boolean> {
  const strThisFuncName = 'UpdateRecordAsync';
  const strAction = 'UpdateRecord';
  if (
    objSysScoreSummaryEN.sfUpdFldSetStr === undefined ||
    objSysScoreSummaryEN.sfUpdFldSetStr === null ||
    objSysScoreSummaryEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSysScoreSummaryEN.mId,
    );
    throw strMsg;
  }
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysScoreSummaryEN, config);
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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
 * @param objSysScoreSummaryEN:需要修改的对象
 * @param strWhereCond:条件串
 * @returns 返回的第一条记录的关键字值
 **/
export async function SysScoreSummary_UpdateWithConditionAsync(
  objSysScoreSummaryEN: clsSysScoreSummaryEN,
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'UpdateWithConditionAsync';
  const strAction = 'UpdateWithCondition';
  if (
    objSysScoreSummaryEN.sfUpdFldSetStr === undefined ||
    objSysScoreSummaryEN.sfUpdFldSetStr === null ||
    objSysScoreSummaryEN.sfUpdFldSetStr === ''
  ) {
    const strMsg = Format(
      '对象(关键字: {0})的【修改字段集】为空,不能修改!',
      objSysScoreSummaryEN.mId,
    );
    throw new Error(strMsg);
  }
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);
  objSysScoreSummaryEN.whereCond = strWhereCond;

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, objSysScoreSummaryEN, config);
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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
 * @param objlngmIdCond:条件对象
 * @returns 对象列表子集
 */
export async function SysScoreSummary_IsExistRecordCache(
  objSysScoreSummaryCond: clsSysScoreSummaryEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrSysScoreSummaryObjLstCache = await SysScoreSummary_GetObjLstCache(strIdCurrEduCls);
  if (arrSysScoreSummaryObjLstCache == null) return false;
  let arrSysScoreSummarySel = arrSysScoreSummaryObjLstCache;
  if (
    objSysScoreSummaryCond.sfFldComparisonOp == null ||
    objSysScoreSummaryCond.sfFldComparisonOp == ''
  )
    return arrSysScoreSummarySel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysScoreSummaryCond.sfFldComparisonOp,
  );
  //console.log("clsSysScoreSummaryWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysScoreSummaryCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysScoreSummaryCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrSysScoreSummarySel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objSysScoreSummaryCond),
      sysScoreSummary_ConstructorName,
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
export async function SysScoreSummary_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
 * @param lngmId:所给的关键字
 * @returns 对象
 */
export async function SysScoreSummary_IsExistCache(lngmId: number, strIdCurrEduCls: string) {
  const strThisFuncName = 'IsExistCache';
  const arrSysScoreSummaryObjLstCache = await SysScoreSummary_GetObjLstCache(strIdCurrEduCls);
  if (arrSysScoreSummaryObjLstCache == null) return false;
  try {
    const arrSysScoreSummarySel = arrSysScoreSummaryObjLstCache.filter((x) => x.mId == lngmId);
    if (arrSysScoreSummarySel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      lngmId,
      sysScoreSummary_ConstructorName,
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
 * @param lngmId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function SysScoreSummary_IsExistAsync(lngmId: number): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      lngmId,
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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
export async function SysScoreSummary_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
 * @param objSysScoreSummaryCond:条件对象
 * @returns 对象列表记录数
 */
export async function SysScoreSummary_GetRecCountByCondCache(
  objSysScoreSummaryCond: clsSysScoreSummaryEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrSysScoreSummaryObjLstCache = await SysScoreSummary_GetObjLstCache(strIdCurrEduCls);
  if (arrSysScoreSummaryObjLstCache == null) return 0;
  let arrSysScoreSummarySel = arrSysScoreSummaryObjLstCache;
  if (
    objSysScoreSummaryCond.sfFldComparisonOp == null ||
    objSysScoreSummaryCond.sfFldComparisonOp == ''
  )
    return arrSysScoreSummarySel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objSysScoreSummaryCond.sfFldComparisonOp,
  );
  //console.log("clsSysScoreSummaryWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objSysScoreSummaryCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysScoreSummarySel = arrSysScoreSummarySel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysScoreSummaryCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrSysScoreSummarySel = arrSysScoreSummarySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrSysScoreSummarySel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objSysScoreSummaryCond),
      sysScoreSummary_ConstructorName,
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
export async function SysScoreSummary_GetMaxStrIdByPrefix(strPrefix: string) {
  const strThisFuncName = 'GetMaxStrIdByPrefix';
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = GetWebApiUrl(sysScoreSummary_Controller, strAction);

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
        sysScoreSummary_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        sysScoreSummary_ConstructorName,
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
export function SysScoreSummary_GetWebApiUrl(strController: string, strAction: string): string {
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
export function SysScoreSummary_ReFreshCache(strIdCurrEduCls: string): void {
  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空!(In clsSysScoreSummaryWApi.clsSysScoreSummaryWApi.ReFreshCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(clsSysScoreSummaryWApi.clsSysScoreSummaryWApi.ReFreshCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  const strMsg: string = Format('刷新缓存成功!');

  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey = Format('{0}_{1}', clsSysScoreSummaryEN._CurrTabName, strIdCurrEduCls);
  switch (clsSysScoreSummaryEN.CacheModeId) {
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
  vSysScoreSummary_ReFreshThisCache(strIdCurrEduCls);
}

/**
 * 刷新本类中的缓存.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
 **/
export function SysScoreSummary_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsSysScoreSummaryEN._CurrTabName, strIdCurrEduCls);
    switch (clsSysScoreSummaryEN.CacheModeId) {
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
export function SysScoreSummary_CheckPropertyNew(pobjSysScoreSummaryEN: clsSysScoreSummaryEN) {
  //检查字段非空, 即数据表要求非常非空的字段,不能为空!
  if (IsNullOrEmpty(pobjSysScoreSummaryEN.userId) === true) {
    throw new Error(
      '(errid:Watl000411)字段[用户ID]不能为空(In 系统分数汇总表)!(clsSysScoreSummaryBL:CheckPropertyNew0)',
    );
  }
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.userId) == false &&
    GetStrLen(pobjSysScoreSummaryEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000413)字段[用户ID(userId)]的长度不能超过18(In 系统分数汇总表(SysScoreSummary))!值:$(pobjSysScoreSummaryEN.userId)(clsSysScoreSummaryBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.schoolYear) == false &&
    GetStrLen(pobjSysScoreSummaryEN.schoolYear) > 10
  ) {
    throw new Error(
      '(errid:Watl000413)字段[学年(schoolYear)]的长度不能超过10(In 系统分数汇总表(SysScoreSummary))!值:$(pobjSysScoreSummaryEN.schoolYear)(clsSysScoreSummaryBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.updDate) == false &&
    GetStrLen(pobjSysScoreSummaryEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改日期(updDate)]的长度不能超过20(In 系统分数汇总表(SysScoreSummary))!值:$(pobjSysScoreSummaryEN.updDate)(clsSysScoreSummaryBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.memo) == false &&
    GetStrLen(pobjSysScoreSummaryEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000413)字段[备注(memo)]的长度不能超过1000(In 系统分数汇总表(SysScoreSummary))!值:$(pobjSysScoreSummaryEN.memo)(clsSysScoreSummaryBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.scoreTypeId) == false &&
    GetStrLen(pobjSysScoreSummaryEN.scoreTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000413)字段[分数类型Id(scoreTypeId)]的长度不能超过4(In 系统分数汇总表(SysScoreSummary))!值:$(pobjSysScoreSummaryEN.scoreTypeId)(clsSysScoreSummaryBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.updUser) == false &&
    GetStrLen(pobjSysScoreSummaryEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000413)字段[修改人(updUser)]的长度不能超过20(In 系统分数汇总表(SysScoreSummary))!值:$(pobjSysScoreSummaryEN.updUser)(clsSysScoreSummaryBL:CheckPropertyNew)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.idCurrEduCls) == false &&
    GetStrLen(pobjSysScoreSummaryEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000413)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 系统分数汇总表(SysScoreSummary))!值:$(pobjSysScoreSummaryEN.idCurrEduCls)(clsSysScoreSummaryBL:CheckPropertyNew)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjSysScoreSummaryEN.mId &&
    undefined !== pobjSysScoreSummaryEN.mId &&
    tzDataType.isNumber(pobjSysScoreSummaryEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[mId(mId)]的值:[$(pobjSysScoreSummaryEN.mId)], 非法,应该为数值型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.userId) == false &&
    undefined !== pobjSysScoreSummaryEN.userId &&
    tzDataType.isString(pobjSysScoreSummaryEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[用户ID(userId)]的值:[$(pobjSysScoreSummaryEN.userId)], 非法,应该为字符型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.schoolYear) == false &&
    undefined !== pobjSysScoreSummaryEN.schoolYear &&
    tzDataType.isString(pobjSysScoreSummaryEN.schoolYear) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[学年(schoolYear)]的值:[$(pobjSysScoreSummaryEN.schoolYear)], 非法,应该为字符型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.updDate) == false &&
    undefined !== pobjSysScoreSummaryEN.updDate &&
    tzDataType.isString(pobjSysScoreSummaryEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改日期(updDate)]的值:[$(pobjSysScoreSummaryEN.updDate)], 非法,应该为字符型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.memo) == false &&
    undefined !== pobjSysScoreSummaryEN.memo &&
    tzDataType.isString(pobjSysScoreSummaryEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[备注(memo)]的值:[$(pobjSysScoreSummaryEN.memo)], 非法,应该为字符型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.scoreTypeId) == false &&
    undefined !== pobjSysScoreSummaryEN.scoreTypeId &&
    tzDataType.isString(pobjSysScoreSummaryEN.scoreTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[分数类型Id(scoreTypeId)]的值:[$(pobjSysScoreSummaryEN.scoreTypeId)], 非法,应该为字符型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.updUser) == false &&
    undefined !== pobjSysScoreSummaryEN.updUser &&
    tzDataType.isString(pobjSysScoreSummaryEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[修改人(updUser)]的值:[$(pobjSysScoreSummaryEN.updUser)], 非法,应该为字符型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjSysScoreSummaryEN.score &&
    undefined !== pobjSysScoreSummaryEN.score &&
    tzDataType.isNumber(pobjSysScoreSummaryEN.score) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[评分(score)]的值:[$(pobjSysScoreSummaryEN.score)], 非法,应该为数值型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckPropertyNew0)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.idCurrEduCls) == false &&
    undefined !== pobjSysScoreSummaryEN.idCurrEduCls &&
    tzDataType.isString(pobjSysScoreSummaryEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjSysScoreSummaryEN.idCurrEduCls)], 非法,应该为字符型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckPropertyNew0)',
    );
  }
  if (
    null != pobjSysScoreSummaryEN.isSubmit &&
    undefined !== pobjSysScoreSummaryEN.isSubmit &&
    tzDataType.isBoolean(pobjSysScoreSummaryEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000414)字段[是否提交(isSubmit)]的值:[$(pobjSysScoreSummaryEN.isSubmit)], 非法,应该为布尔型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckPropertyNew0)',
    );
  }
  //检查外键, 作为外键应该和主键的字段长度是一样的, 若不一样,即非法!

  //设置说明该对象已经检查过了,后面不需要再检查,即非法!
}
/**
 * 专业针对修改记录,检查对象字段值是否合法,1)检查字段值长度是否超长,如果出错就抛出错误.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CheckPropertyNew)
 */
export function SysScoreSummary_CheckProperty4Update(pobjSysScoreSummaryEN: clsSysScoreSummaryEN) {
  //检查字段长度, 若字符型字段长度超出规定的长度,即非法!
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.userId) == false &&
    GetStrLen(pobjSysScoreSummaryEN.userId) > 18
  ) {
    throw new Error(
      '(errid:Watl000416)字段[用户ID(userId)]的长度不能超过18(In 系统分数汇总表(SysScoreSummary))!值:$(pobjSysScoreSummaryEN.userId)(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.schoolYear) == false &&
    GetStrLen(pobjSysScoreSummaryEN.schoolYear) > 10
  ) {
    throw new Error(
      '(errid:Watl000416)字段[学年(schoolYear)]的长度不能超过10(In 系统分数汇总表(SysScoreSummary))!值:$(pobjSysScoreSummaryEN.schoolYear)(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.updDate) == false &&
    GetStrLen(pobjSysScoreSummaryEN.updDate) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改日期(updDate)]的长度不能超过20(In 系统分数汇总表(SysScoreSummary))!值:$(pobjSysScoreSummaryEN.updDate)(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.memo) == false &&
    GetStrLen(pobjSysScoreSummaryEN.memo) > 1000
  ) {
    throw new Error(
      '(errid:Watl000416)字段[备注(memo)]的长度不能超过1000(In 系统分数汇总表(SysScoreSummary))!值:$(pobjSysScoreSummaryEN.memo)(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.scoreTypeId) == false &&
    GetStrLen(pobjSysScoreSummaryEN.scoreTypeId) > 4
  ) {
    throw new Error(
      '(errid:Watl000416)字段[分数类型Id(scoreTypeId)]的长度不能超过4(In 系统分数汇总表(SysScoreSummary))!值:$(pobjSysScoreSummaryEN.scoreTypeId)(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.updUser) == false &&
    GetStrLen(pobjSysScoreSummaryEN.updUser) > 20
  ) {
    throw new Error(
      '(errid:Watl000416)字段[修改人(updUser)]的长度不能超过20(In 系统分数汇总表(SysScoreSummary))!值:$(pobjSysScoreSummaryEN.updUser)(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.idCurrEduCls) == false &&
    GetStrLen(pobjSysScoreSummaryEN.idCurrEduCls) > 8
  ) {
    throw new Error(
      '(errid:Watl000416)字段[教学班流水号(idCurrEduCls)]的长度不能超过8(In 系统分数汇总表(SysScoreSummary))!值:$(pobjSysScoreSummaryEN.idCurrEduCls)(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  //检查字段的数据类型是否正确
  if (
    null != pobjSysScoreSummaryEN.mId &&
    undefined !== pobjSysScoreSummaryEN.mId &&
    tzDataType.isNumber(pobjSysScoreSummaryEN.mId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[mId(mId)]的值:[$(pobjSysScoreSummaryEN.mId)], 非法,应该为数值型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.userId) == false &&
    undefined !== pobjSysScoreSummaryEN.userId &&
    tzDataType.isString(pobjSysScoreSummaryEN.userId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[用户ID(userId)]的值:[$(pobjSysScoreSummaryEN.userId)], 非法,应该为字符型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.schoolYear) == false &&
    undefined !== pobjSysScoreSummaryEN.schoolYear &&
    tzDataType.isString(pobjSysScoreSummaryEN.schoolYear) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[学年(schoolYear)]的值:[$(pobjSysScoreSummaryEN.schoolYear)], 非法,应该为字符型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.updDate) == false &&
    undefined !== pobjSysScoreSummaryEN.updDate &&
    tzDataType.isString(pobjSysScoreSummaryEN.updDate) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改日期(updDate)]的值:[$(pobjSysScoreSummaryEN.updDate)], 非法,应该为字符型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.memo) == false &&
    undefined !== pobjSysScoreSummaryEN.memo &&
    tzDataType.isString(pobjSysScoreSummaryEN.memo) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[备注(memo)]的值:[$(pobjSysScoreSummaryEN.memo)], 非法,应该为字符型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.scoreTypeId) == false &&
    undefined !== pobjSysScoreSummaryEN.scoreTypeId &&
    tzDataType.isString(pobjSysScoreSummaryEN.scoreTypeId) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[分数类型Id(scoreTypeId)]的值:[$(pobjSysScoreSummaryEN.scoreTypeId)], 非法,应该为字符型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.updUser) == false &&
    undefined !== pobjSysScoreSummaryEN.updUser &&
    tzDataType.isString(pobjSysScoreSummaryEN.updUser) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[修改人(updUser)]的值:[$(pobjSysScoreSummaryEN.updUser)], 非法,应该为字符型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjSysScoreSummaryEN.score &&
    undefined !== pobjSysScoreSummaryEN.score &&
    tzDataType.isNumber(pobjSysScoreSummaryEN.score) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[评分(score)]的值:[$(pobjSysScoreSummaryEN.score)], 非法,应该为数值型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    IsNullOrEmpty(pobjSysScoreSummaryEN.idCurrEduCls) == false &&
    undefined !== pobjSysScoreSummaryEN.idCurrEduCls &&
    tzDataType.isString(pobjSysScoreSummaryEN.idCurrEduCls) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[教学班流水号(idCurrEduCls)]的值:[$(pobjSysScoreSummaryEN.idCurrEduCls)], 非法,应该为字符型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  if (
    null != pobjSysScoreSummaryEN.isSubmit &&
    undefined !== pobjSysScoreSummaryEN.isSubmit &&
    tzDataType.isBoolean(pobjSysScoreSummaryEN.isSubmit) === false
  ) {
    throw new Error(
      '(errid:Watl000417)字段[是否提交(isSubmit)]的值:[$(pobjSysScoreSummaryEN.isSubmit)], 非法,应该为布尔型(In 系统分数汇总表(SysScoreSummary))!(clsSysScoreSummaryBL:CheckProperty4Update)',
    );
  }
  //检查主键是否为Null或者空!
  if (
    null === pobjSysScoreSummaryEN.mId ||
    (pobjSysScoreSummaryEN.mId != null && pobjSysScoreSummaryEN.mId.toString() === '')
  ) {
    throw new Error(
      '(errid:Watl000064)字段[mId]不能为空(In 系统分数汇总表)!(clsSysScoreSummaryBL:CheckProperty4Update)',
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
export function SysScoreSummary_GetJSONStrByObj(
  pobjSysScoreSummaryEN: clsSysScoreSummaryEN,
): string {
  pobjSysScoreSummaryEN.sfUpdFldSetStr = pobjSysScoreSummaryEN.updFldString;
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjSysScoreSummaryEN);
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
export function SysScoreSummary_GetObjLstByJSONStr(strJSON: string): Array<clsSysScoreSummaryEN> {
  let arrSysScoreSummaryObjLst = new Array<clsSysScoreSummaryEN>();
  if (strJSON === '') {
    return arrSysScoreSummaryObjLst;
  }
  try {
    arrSysScoreSummaryObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrSysScoreSummaryObjLst;
  }
  return arrSysScoreSummaryObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrSysScoreSummaryObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function SysScoreSummary_GetObjLstByJSONObjLst(
  arrSysScoreSummaryObjLstS: Array<clsSysScoreSummaryEN>,
): Array<clsSysScoreSummaryEN> {
  const arrSysScoreSummaryObjLst = new Array<clsSysScoreSummaryEN>();
  for (const objInFor of arrSysScoreSummaryObjLstS) {
    const obj1 = SysScoreSummary_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrSysScoreSummaryObjLst.push(obj1);
  }
  return arrSysScoreSummaryObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function SysScoreSummary_GetObjByJSONStr(strJSON: string): clsSysScoreSummaryEN {
  let pobjSysScoreSummaryEN = new clsSysScoreSummaryEN();
  if (strJSON === '') {
    return pobjSysScoreSummaryEN;
  }
  try {
    pobjSysScoreSummaryEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjSysScoreSummaryEN;
  }
  return pobjSysScoreSummaryEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function SysScoreSummary_GetCombineCondition(
  objSysScoreSummaryCond: clsSysScoreSummaryEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreSummaryCond.dicFldComparisonOp,
      clsSysScoreSummaryEN.con_mId,
    ) == true
  ) {
    const strComparisonOpmId: string =
      objSysScoreSummaryCond.dicFldComparisonOp[clsSysScoreSummaryEN.con_mId];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsSysScoreSummaryEN.con_mId,
      objSysScoreSummaryCond.mId,
      strComparisonOpmId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreSummaryCond.dicFldComparisonOp,
      clsSysScoreSummaryEN.con_UserId,
    ) == true
  ) {
    const strComparisonOpUserId: string =
      objSysScoreSummaryCond.dicFldComparisonOp[clsSysScoreSummaryEN.con_UserId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreSummaryEN.con_UserId,
      objSysScoreSummaryCond.userId,
      strComparisonOpUserId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreSummaryCond.dicFldComparisonOp,
      clsSysScoreSummaryEN.con_SchoolYear,
    ) == true
  ) {
    const strComparisonOpSchoolYear: string =
      objSysScoreSummaryCond.dicFldComparisonOp[clsSysScoreSummaryEN.con_SchoolYear];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreSummaryEN.con_SchoolYear,
      objSysScoreSummaryCond.schoolYear,
      strComparisonOpSchoolYear,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreSummaryCond.dicFldComparisonOp,
      clsSysScoreSummaryEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objSysScoreSummaryCond.dicFldComparisonOp[clsSysScoreSummaryEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreSummaryEN.con_UpdDate,
      objSysScoreSummaryCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreSummaryCond.dicFldComparisonOp,
      clsSysScoreSummaryEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objSysScoreSummaryCond.dicFldComparisonOp[clsSysScoreSummaryEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreSummaryEN.con_Memo,
      objSysScoreSummaryCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreSummaryCond.dicFldComparisonOp,
      clsSysScoreSummaryEN.con_ScoreTypeId,
    ) == true
  ) {
    const strComparisonOpScoreTypeId: string =
      objSysScoreSummaryCond.dicFldComparisonOp[clsSysScoreSummaryEN.con_ScoreTypeId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreSummaryEN.con_ScoreTypeId,
      objSysScoreSummaryCond.scoreTypeId,
      strComparisonOpScoreTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreSummaryCond.dicFldComparisonOp,
      clsSysScoreSummaryEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objSysScoreSummaryCond.dicFldComparisonOp[clsSysScoreSummaryEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreSummaryEN.con_UpdUser,
      objSysScoreSummaryCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreSummaryCond.dicFldComparisonOp,
      clsSysScoreSummaryEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objSysScoreSummaryCond.dicFldComparisonOp[clsSysScoreSummaryEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsSysScoreSummaryEN.con_Score,
      objSysScoreSummaryCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreSummaryCond.dicFldComparisonOp,
      clsSysScoreSummaryEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objSysScoreSummaryCond.dicFldComparisonOp[clsSysScoreSummaryEN.con_IdCurrEduCls];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsSysScoreSummaryEN.con_IdCurrEduCls,
      objSysScoreSummaryCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objSysScoreSummaryCond.dicFldComparisonOp,
      clsSysScoreSummaryEN.con_IsSubmit,
    ) == true
  ) {
    if (objSysScoreSummaryCond.isSubmit == true) {
      strWhereCond += Format(" And {0} = '1'", clsSysScoreSummaryEN.con_IsSubmit);
    } else {
      strWhereCond += Format(" And {0} = '0'", clsSysScoreSummaryEN.con_IsSubmit);
    }
  }
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--SysScoreSummary(系统分数汇总表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString)
 * @param lngmId: mId(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function SysScoreSummary_GetUniCondStr(objSysScoreSummaryEN: clsSysScoreSummaryEN): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId = '{0}'", objSysScoreSummaryEN.mId);
  strWhereCond += Format(" and UserId = '{0}'", objSysScoreSummaryEN.userId);
  return strWhereCond;
}

/**
 *获取唯一性条件串(Uniqueness)--SysScoreSummary(系统分数汇总表),根据唯一约束条件来生成
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetUniquenessConditionString4Update)
 * @param lngmId: mId(要求唯一的字段)
 * @param strUserId: 用户ID(要求唯一的字段)
 * @returns 条件串(strWhereCond)
 **/
export function SysScoreSummary_GetUniCondStr4Update(
  objSysScoreSummaryEN: clsSysScoreSummaryEN,
): string {
  let strWhereCond = ' 1 = 1 ';
  strWhereCond += Format(" and mId <> '{0}'", objSysScoreSummaryEN.mId);
  strWhereCond += Format(" and mId = '{0}'", objSysScoreSummaryEN.mId);
  strWhereCond += Format(" and UserId = '{0}'", objSysScoreSummaryEN.userId);
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objSysScoreSummaryENS:源对象
 * @param objSysScoreSummaryENT:目标对象
 */
export function SysScoreSummary_CopyObjTo(
  objSysScoreSummaryENS: clsSysScoreSummaryEN,
  objSysScoreSummaryENT: clsSysScoreSummaryEN,
): void {
  objSysScoreSummaryENT.mId = objSysScoreSummaryENS.mId; //mId
  objSysScoreSummaryENT.userId = objSysScoreSummaryENS.userId; //用户ID
  objSysScoreSummaryENT.schoolYear = objSysScoreSummaryENS.schoolYear; //学年
  objSysScoreSummaryENT.updDate = objSysScoreSummaryENS.updDate; //修改日期
  objSysScoreSummaryENT.memo = objSysScoreSummaryENS.memo; //备注
  objSysScoreSummaryENT.scoreTypeId = objSysScoreSummaryENS.scoreTypeId; //分数类型Id
  objSysScoreSummaryENT.updUser = objSysScoreSummaryENS.updUser; //修改人
  objSysScoreSummaryENT.score = objSysScoreSummaryENS.score; //评分
  objSysScoreSummaryENT.idCurrEduCls = objSysScoreSummaryENS.idCurrEduCls; //教学班流水号
  objSysScoreSummaryENT.isSubmit = objSysScoreSummaryENS.isSubmit; //是否提交
  objSysScoreSummaryENT.sfUpdFldSetStr = objSysScoreSummaryENS.updFldString; //sfUpdFldSetStr
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objSysScoreSummaryENS:源对象
 * @param objSysScoreSummaryENT:目标对象
 */
export function SysScoreSummary_GetObjFromJsonObj(
  objSysScoreSummaryENS: clsSysScoreSummaryEN,
): clsSysScoreSummaryEN {
  const objSysScoreSummaryENT: clsSysScoreSummaryEN = new clsSysScoreSummaryEN();
  ObjectAssign(objSysScoreSummaryENT, objSysScoreSummaryENS);
  return objSysScoreSummaryENT;
}
