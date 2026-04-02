/**
 * 类名:clsvgs_TotalDataStatisticsWApi
 * 表名:vgs_TotalDataStatistics(01120682)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:50:18
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
 * 总数据统计视图(vgs_TotalDataStatistics)
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
import { clsvgs_TotalDataStatisticsEN } from '@/ts/L0Entity/GradEduTools/clsvgs_TotalDataStatisticsEN';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vgs_TotalDataStatistics_Controller = 'vgs_TotalDataStatisticsApi';
export const vgs_TotalDataStatistics_ConstructorName = 'vgs_TotalDataStatistics';

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param strTotalDataId:关键字
 * @returns 对象
 **/
export async function vgs_TotalDataStatistics_GetObjByTotalDataIdAsync(
  strTotalDataId: string,
): Promise<clsvgs_TotalDataStatisticsEN | null> {
  const strThisFuncName = 'GetObjByTotalDataIdAsync';

  if (IsNullOrEmpty(strTotalDataId) == true) {
    const strMsg = Format(
      '参数:[strTotalDataId]不能为空!(In clsvgs_TotalDataStatisticsWApi.GetObjByTotalDataIdAsync)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTotalDataId.length != 12) {
    const strMsg = Format(
      '缓存分类变量:[strTotalDataId]的长度:[{0}]不正确!(clsvgs_TotalDataStatisticsWApi.GetObjByTotalDataIdAsync)',
      strTotalDataId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strAction = 'GetObjByTotalDataId';
  const strUrl = GetWebApiUrl(vgs_TotalDataStatistics_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTotalDataId,
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
      const objvgs_TotalDataStatistics = vgs_TotalDataStatistics_GetObjFromJsonObj(returnObj);
      return objvgs_TotalDataStatistics;
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
        vgs_TotalDataStatistics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatistics_ConstructorName,
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
 * @param strTotalDataId:所给的关键字
 * @returns 对象
 */
export async function vgs_TotalDataStatistics_GetObjByTotalDataIdCache(
  strTotalDataId: string,
  strIdCurrEduCls: string,
  bolTryAsyncOnce = true,
) {
  const strThisFuncName = 'GetObjByTotalDataIdCache';

  if (IsNullOrEmpty(strTotalDataId) == true) {
    const strMsg = Format(
      '参数:[strTotalDataId]不能为空!(In clsvgs_TotalDataStatisticsWApi.GetObjByTotalDataIdCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTotalDataId.length != 12) {
    const strMsg = Format(
      '缓存分类变量:[strTotalDataId]的长度:[{0}]不正确!(clsvgs_TotalDataStatisticsWApi.GetObjByTotalDataIdCache)',
      strTotalDataId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const arrvgs_TotalDataStatisticsObjLstCache = await vgs_TotalDataStatistics_GetObjLstCache(
    strIdCurrEduCls,
  );
  try {
    const arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsObjLstCache.filter(
      (x) => x.totalDataId == strTotalDataId,
    );
    let objvgs_TotalDataStatistics: clsvgs_TotalDataStatisticsEN;
    if (arrvgs_TotalDataStatisticsSel.length > 0) {
      objvgs_TotalDataStatistics = arrvgs_TotalDataStatisticsSel[0];
      return objvgs_TotalDataStatistics;
    } else {
      if (bolTryAsyncOnce == true) {
        const objvgs_TotalDataStatisticsConst =
          await vgs_TotalDataStatistics_GetObjByTotalDataIdAsync(strTotalDataId);
        if (objvgs_TotalDataStatisticsConst != null) {
          vgs_TotalDataStatistics_ReFreshThisCache(strIdCurrEduCls);
          return objvgs_TotalDataStatisticsConst;
        }
      }
      return null;
    }
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTotalDataId,
      vgs_TotalDataStatistics_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}

/**
 * 根据关键字获取相关对象, 从localStorage缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_localStorage)
 * @param strTotalDataId:所给的关键字
 * @returns 对象
 */
export async function vgs_TotalDataStatistics_GetObjByTotalDataIdlocalStorage(
  strTotalDataId: string,
) {
  const strThisFuncName = 'GetObjByTotalDataIdlocalStorage';

  if (IsNullOrEmpty(strTotalDataId) == true) {
    const strMsg = Format(
      '参数:[strTotalDataId]不能为空!(In clsvgs_TotalDataStatisticsWApi.GetObjByTotalDataIdlocalStorage)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strTotalDataId.length != 12) {
    const strMsg = Format(
      '缓存分类变量:[strTotalDataId]的长度:[{0}]不正确!(clsvgs_TotalDataStatisticsWApi.GetObjByTotalDataIdlocalStorage)',
      strTotalDataId.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strKey = Format('{0}_{1}', clsvgs_TotalDataStatisticsEN._CurrTabName, strTotalDataId);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObj = localStorage.getItem(strKey) as string;
    const objvgs_TotalDataStatisticsCache: clsvgs_TotalDataStatisticsEN = JSON.parse(strTempObj);
    return objvgs_TotalDataStatisticsCache;
  }
  try {
    const objvgs_TotalDataStatistics = await vgs_TotalDataStatistics_GetObjByTotalDataIdAsync(
      strTotalDataId,
    );
    if (objvgs_TotalDataStatistics != null) {
      localStorage.setItem(strKey, JSON.stringify(objvgs_TotalDataStatistics));
      const strInfo = Format('Key:[${ strKey}]的缓存已经建立!');
      console.log(strInfo);
      return objvgs_TotalDataStatistics;
    }
    return objvgs_TotalDataStatistics;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strTotalDataId,
      vgs_TotalDataStatistics_ConstructorName,
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
 @param strIdCurrEduCls:缓存的分类字段
 * @returns 返回一个输出字段值
*/
export async function vgs_TotalDataStatistics_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
  strIdCurrEduClsClassfy: string,
) {
  //const strThisFuncName = "func";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsvgs_TotalDataStatisticsWApi.func)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvgs_TotalDataStatisticsWApi.func)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName != clsvgs_TotalDataStatisticsEN.con_TotalDataId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvgs_TotalDataStatisticsEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确,不在输出字段范围之内!({1})',
      strOutFldName,
      clsvgs_TotalDataStatisticsEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strTotalDataId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const objvgs_TotalDataStatistics = await vgs_TotalDataStatistics_GetObjByTotalDataIdCache(
    strTotalDataId,
    strIdCurrEduClsClassfy,
  );
  if (objvgs_TotalDataStatistics == null) return '';
  if (objvgs_TotalDataStatistics.GetFldValue(strOutFldName) == null) return '';
  return objvgs_TotalDataStatistics.GetFldValue(strOutFldName).toString();
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
export function vgs_TotalDataStatistics_SortFunDefa(
  a: clsvgs_TotalDataStatisticsEN,
  b: clsvgs_TotalDataStatisticsEN,
): number {
  return a.totalDataId.localeCompare(b.totalDataId);
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
export function vgs_TotalDataStatistics_SortFunDefa2Fld(
  a: clsvgs_TotalDataStatisticsEN,
  b: clsvgs_TotalDataStatisticsEN,
): number {
  if (a.idCurrEduCls == b.idCurrEduCls) return a.eduClsName.localeCompare(b.eduClsName);
  else return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
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
export function vgs_TotalDataStatistics_SortFunByKey(strKey: string, AscOrDesc: string) {
  const strThisFuncName = 'SortFunByKey';
  let strMsg = '';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvgs_TotalDataStatisticsEN.con_TotalDataId:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return a.totalDataId.localeCompare(b.totalDataId);
        };
      case clsvgs_TotalDataStatisticsEN.con_IdCurrEduCls:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return a.idCurrEduCls.localeCompare(b.idCurrEduCls);
        };
      case clsvgs_TotalDataStatisticsEN.con_EduClsName:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (a.eduClsName == null) return -1;
          if (b.eduClsName == null) return 1;
          return a.eduClsName.localeCompare(b.eduClsName);
        };
      case clsvgs_TotalDataStatisticsEN.con_SchoolYear:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (a.schoolYear == null) return -1;
          if (b.schoolYear == null) return 1;
          return a.schoolYear.localeCompare(b.schoolYear);
        };
      case clsvgs_TotalDataStatisticsEN.con_TotalDataTypeId:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return a.totalDataTypeId.localeCompare(b.totalDataTypeId);
        };
      case clsvgs_TotalDataStatisticsEN.con_SchoolTerm:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (a.schoolTerm == null) return -1;
          if (b.schoolTerm == null) return 1;
          return a.schoolTerm.localeCompare(b.schoolTerm);
        };
      case clsvgs_TotalDataStatisticsEN.con_TableKey:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (a.tableKey == null) return -1;
          if (b.tableKey == null) return 1;
          return a.tableKey.localeCompare(b.tableKey);
        };
      case clsvgs_TotalDataStatisticsEN.con_DataUser:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (a.dataUser == null) return -1;
          if (b.dataUser == null) return 1;
          return a.dataUser.localeCompare(b.dataUser);
        };
      case clsvgs_TotalDataStatisticsEN.con_DataAddDate:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (a.dataAddDate == null) return -1;
          if (b.dataAddDate == null) return 1;
          return a.dataAddDate.localeCompare(b.dataAddDate);
        };
      case clsvgs_TotalDataStatisticsEN.con_DataTable:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (a.dataTable == null) return -1;
          if (b.dataTable == null) return 1;
          return a.dataTable.localeCompare(b.dataTable);
        };
      case clsvgs_TotalDataStatisticsEN.con_Month:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return a.month - b.month;
        };
      case clsvgs_TotalDataStatisticsEN.con_DataTableId:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (a.dataTableId == null) return -1;
          if (b.dataTableId == null) return 1;
          return a.dataTableId.localeCompare(b.dataTableId);
        };
      case clsvgs_TotalDataStatisticsEN.con_Week:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return a.week - b.week;
        };
      case clsvgs_TotalDataStatisticsEN.con_UpdDate:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (a.updDate == null) return -1;
          if (b.updDate == null) return 1;
          return a.updDate.localeCompare(b.updDate);
        };
      case clsvgs_TotalDataStatisticsEN.con_UpdUser:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (a.updUser == null) return -1;
          if (b.updUser == null) return 1;
          return a.updUser.localeCompare(b.updUser);
        };
      case clsvgs_TotalDataStatisticsEN.con_Memo:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (a.memo == null) return -1;
          if (b.memo == null) return 1;
          return a.memo.localeCompare(b.memo);
        };
      case clsvgs_TotalDataStatisticsEN.con_Score:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return a.score - b.score;
        };
      case clsvgs_TotalDataStatisticsEN.con_TeaScore:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return a.teaScore - b.teaScore;
        };
      case clsvgs_TotalDataStatisticsEN.con_WeekTimeRange:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (a.weekTimeRange == null) return -1;
          if (b.weekTimeRange == null) return 1;
          return a.weekTimeRange.localeCompare(b.weekTimeRange);
        };
      case clsvgs_TotalDataStatisticsEN.con_OnlyId:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (a.onlyId == null) return -1;
          if (b.onlyId == null) return 1;
          return a.onlyId.localeCompare(b.onlyId);
        };
      case clsvgs_TotalDataStatisticsEN.con_TotalDataTypeName:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (a.totalDataTypeName == null) return -1;
          if (b.totalDataTypeName == null) return 1;
          return a.totalDataTypeName.localeCompare(b.totalDataTypeName);
        };
      case clsvgs_TotalDataStatisticsEN.con_StuScore:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return a.stuScore - b.stuScore;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vgs_TotalDataStatistics]中不存在!(in ${vgs_TotalDataStatistics_ConstructorName}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  } else {
    switch (strKey) {
      case clsvgs_TotalDataStatisticsEN.con_TotalDataId:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return b.totalDataId.localeCompare(a.totalDataId);
        };
      case clsvgs_TotalDataStatisticsEN.con_IdCurrEduCls:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return b.idCurrEduCls.localeCompare(a.idCurrEduCls);
        };
      case clsvgs_TotalDataStatisticsEN.con_EduClsName:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (b.eduClsName == null) return -1;
          if (a.eduClsName == null) return 1;
          return b.eduClsName.localeCompare(a.eduClsName);
        };
      case clsvgs_TotalDataStatisticsEN.con_SchoolYear:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (b.schoolYear == null) return -1;
          if (a.schoolYear == null) return 1;
          return b.schoolYear.localeCompare(a.schoolYear);
        };
      case clsvgs_TotalDataStatisticsEN.con_TotalDataTypeId:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return b.totalDataTypeId.localeCompare(a.totalDataTypeId);
        };
      case clsvgs_TotalDataStatisticsEN.con_SchoolTerm:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (b.schoolTerm == null) return -1;
          if (a.schoolTerm == null) return 1;
          return b.schoolTerm.localeCompare(a.schoolTerm);
        };
      case clsvgs_TotalDataStatisticsEN.con_TableKey:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (b.tableKey == null) return -1;
          if (a.tableKey == null) return 1;
          return b.tableKey.localeCompare(a.tableKey);
        };
      case clsvgs_TotalDataStatisticsEN.con_DataUser:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (b.dataUser == null) return -1;
          if (a.dataUser == null) return 1;
          return b.dataUser.localeCompare(a.dataUser);
        };
      case clsvgs_TotalDataStatisticsEN.con_DataAddDate:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (b.dataAddDate == null) return -1;
          if (a.dataAddDate == null) return 1;
          return b.dataAddDate.localeCompare(a.dataAddDate);
        };
      case clsvgs_TotalDataStatisticsEN.con_DataTable:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (b.dataTable == null) return -1;
          if (a.dataTable == null) return 1;
          return b.dataTable.localeCompare(a.dataTable);
        };
      case clsvgs_TotalDataStatisticsEN.con_Month:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return b.month - a.month;
        };
      case clsvgs_TotalDataStatisticsEN.con_DataTableId:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (b.dataTableId == null) return -1;
          if (a.dataTableId == null) return 1;
          return b.dataTableId.localeCompare(a.dataTableId);
        };
      case clsvgs_TotalDataStatisticsEN.con_Week:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return b.week - a.week;
        };
      case clsvgs_TotalDataStatisticsEN.con_UpdDate:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (b.updDate == null) return -1;
          if (a.updDate == null) return 1;
          return b.updDate.localeCompare(a.updDate);
        };
      case clsvgs_TotalDataStatisticsEN.con_UpdUser:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (b.updUser == null) return -1;
          if (a.updUser == null) return 1;
          return b.updUser.localeCompare(a.updUser);
        };
      case clsvgs_TotalDataStatisticsEN.con_Memo:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (b.memo == null) return -1;
          if (a.memo == null) return 1;
          return b.memo.localeCompare(a.memo);
        };
      case clsvgs_TotalDataStatisticsEN.con_Score:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return b.score - a.score;
        };
      case clsvgs_TotalDataStatisticsEN.con_TeaScore:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return b.teaScore - a.teaScore;
        };
      case clsvgs_TotalDataStatisticsEN.con_WeekTimeRange:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (b.weekTimeRange == null) return -1;
          if (a.weekTimeRange == null) return 1;
          return b.weekTimeRange.localeCompare(a.weekTimeRange);
        };
      case clsvgs_TotalDataStatisticsEN.con_OnlyId:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (b.onlyId == null) return -1;
          if (a.onlyId == null) return 1;
          return b.onlyId.localeCompare(a.onlyId);
        };
      case clsvgs_TotalDataStatisticsEN.con_TotalDataTypeName:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          if (b.totalDataTypeName == null) return -1;
          if (a.totalDataTypeName == null) return 1;
          return b.totalDataTypeName.localeCompare(a.totalDataTypeName);
        };
      case clsvgs_TotalDataStatisticsEN.con_StuScore:
        return (a: clsvgs_TotalDataStatisticsEN, b: clsvgs_TotalDataStatisticsEN) => {
          return b.stuScore - a.stuScore;
        };
      default:
        strMsg = `字段名:[${strKey}]在表对象:[vgs_TotalDataStatistics]中不存在!(in ${vgs_TotalDataStatistics_ConstructorName}.${strThisFuncName})`;
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
export async function vgs_TotalDataStatistics_FilterFunByKey(strKey: string, value: any) {
  const strThisFuncName = 'FilterFunByKey';
  let strMsg = '';
  switch (strKey) {
    case clsvgs_TotalDataStatisticsEN.con_TotalDataId:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.totalDataId === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_IdCurrEduCls:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.idCurrEduCls === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_EduClsName:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.eduClsName === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_SchoolYear:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.schoolYear === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_TotalDataTypeId:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.totalDataTypeId === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_SchoolTerm:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.schoolTerm === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_TableKey:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.tableKey === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_DataUser:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.dataUser === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_DataAddDate:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.dataAddDate === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_DataTable:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.dataTable === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_Month:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.month === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_DataTableId:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.dataTableId === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_Week:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.week === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_UpdDate:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.updDate === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_UpdUser:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.updUser === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_Memo:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.memo === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_Score:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.score === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_TeaScore:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.teaScore === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_WeekTimeRange:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.weekTimeRange === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_OnlyId:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.onlyId === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_TotalDataTypeName:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.totalDataTypeName === value;
      };
    case clsvgs_TotalDataStatisticsEN.con_StuScore:
      return (obj: clsvgs_TotalDataStatisticsEN) => {
        return obj.stuScore === value;
      };
    default:
      strMsg = `字段名:[${strKey}]在表对象:[vgs_TotalDataStatistics]中不存在!(in ${vgs_TotalDataStatistics_ConstructorName}.${strThisFuncName})`;
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
export async function vgs_TotalDataStatistics_funcKey(
  strInFldName: string,
  strInValue: any,
  strComparisonOp: string,
  strIdCurrEduClsClassfy: string,
): Promise<Array<string>> {
  //const strThisFuncName = "funcKey";

  if (IsNullOrEmpty(strIdCurrEduClsClassfy) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduClsClassfy]不能为空!(In clsvgs_TotalDataStatisticsWApi.funcKey)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduClsClassfy.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduClsClassfy]的长度:[{0}]不正确!(clsvgs_TotalDataStatisticsWApi.funcKey)',
      strIdCurrEduClsClassfy.length,
    );
    console.error(strMsg);
    throw strMsg;
  }

  if (strInFldName == clsvgs_TotalDataStatisticsEN.con_TotalDataId) {
    const strMsg = Format('输入字段名:[{0}]不正确, 不能为关键字段!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (IsNullOrEmpty(strInValue) == true) {
    return [];
  }
  const arrvgs_TotalDataStatistics = await vgs_TotalDataStatistics_GetObjLstCache(
    strIdCurrEduClsClassfy,
  );
  if (arrvgs_TotalDataStatistics == null) return [];
  let arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatistics;
  const strType = typeof strInValue;
  let arrValues: string[];
  switch (strType) {
    case 'string':
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01: // " = "
          arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString() == strInValue.toString(),
          );
          break;
        case enumComparisonOp.Like_03:
          arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
            (x) => x.GetFldValue(strInFldName).toString().indexOf(strInValue.toString()) != -1,
          );
          break;
        case enumComparisonOp.In_04:
          arrValues = strInValue.split(',');
          arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
            (x) => arrValues.indexOf(x.GetFldValue(strInFldName).toString()) != -1,
          );
          break;
      }
      break;
    case 'boolean':
      if (strInValue == null) return [];
      if (strComparisonOp == enumComparisonOp.Equal_01) {
        arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
          (x) => x.GetFldValue(strInFldName) == strInValue,
        );
      }
      break;
    case 'number':
      if (Number(strInValue) == 0) return [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
            (x) => x.GetFldValue(strInFldName) == strInValue,
          );
          break;
        case enumComparisonOp.NotEqual_02:
          arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
            (x) => x.GetFldValue(strInFldName) != strInValue,
          );
          break;
        case enumComparisonOp.NotLessThan_05: //" >= ":
          arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
            (x) => x.GetFldValue(strInFldName) >= strInValue,
          );
          break;
        case enumComparisonOp.NotGreaterThan_06: //" <= ":
          arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
        case enumComparisonOp.GreaterThan_07: //" > ":
          arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
            (x) => x.GetFldValue(strInFldName) > strInValue,
          );
          break;
        case enumComparisonOp.LessThan_08: //" < ":
          arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
            (x) => x.GetFldValue(strInFldName) <= strInValue,
          );
          break;
      }
      break;
  }
  if (arrvgs_TotalDataStatisticsSel.length == 0) return [];
  return arrvgs_TotalDataStatisticsSel.map((x) => x.totalDataId);
}

/**
 * 根据条件获取满足条件的第一条记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * @param strWhereCond:条件
 * @returns 返回的第一条记录的关键字值
 **/
export async function vgs_TotalDataStatistics_GetFirstIDAsync(
  strWhereCond: string,
): Promise<string> {
  const strThisFuncName = 'GetFirstIDAsync';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vgs_TotalDataStatistics_Controller, strAction);

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
        vgs_TotalDataStatistics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatistics_ConstructorName,
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
export async function vgs_TotalDataStatistics_GetFirstID(strWhereCond: string) {
  const strThisFuncName = 'GetFirstID';
  const strAction = 'GetFirstID';
  const strUrl = GetWebApiUrl(vgs_TotalDataStatistics_Controller, strAction);

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
        vgs_TotalDataStatistics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatistics_ConstructorName,
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
export async function vgs_TotalDataStatistics_GetFirstObjAsync(
  strWhereCond: string,
): Promise<clsvgs_TotalDataStatisticsEN | null> {
  const strThisFuncName = 'GetFirstObjAsync';
  const strAction = 'GetFirstObj';
  const strUrl = GetWebApiUrl(vgs_TotalDataStatistics_Controller, strAction);

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
      const objvgs_TotalDataStatistics = vgs_TotalDataStatistics_GetObjFromJsonObj(returnObj);
      return objvgs_TotalDataStatistics;
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
        vgs_TotalDataStatistics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatistics_ConstructorName,
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
export async function vgs_TotalDataStatistics_GetObjLstClientCache(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstClientCache';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvgs_TotalDataStatisticsEN.WhereFormat) == false) {
    strWhereCond = Format(clsvgs_TotalDataStatisticsEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format("IdCurrEduCls='{0}'", strIdCurrEduCls);
  }
  const strKey = Format('{0}_{1}', clsvgs_TotalDataStatisticsEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvgs_TotalDataStatisticsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_TotalDataStatisticsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在,直接返回
    const arrvgs_TotalDataStatisticsExObjLstCache: Array<clsvgs_TotalDataStatisticsEN> =
      CacheHelper.Get(strKey);
    const arrvgs_TotalDataStatisticsObjLstT = vgs_TotalDataStatistics_GetObjLstByJSONObjLst(
      arrvgs_TotalDataStatisticsExObjLstCache,
    );
    return arrvgs_TotalDataStatisticsObjLstT;
  }
  try {
    const arrvgs_TotalDataStatisticsExObjLst = await vgs_TotalDataStatistics_GetObjLstAsync(
      strWhereCond,
    );
    CacheHelper.Add(strKey, arrvgs_TotalDataStatisticsExObjLst);
    const strInfo = Format(
      '[ClientCache]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_TotalDataStatisticsExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_TotalDataStatisticsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_TotalDataStatistics_ConstructorName,
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
export async function vgs_TotalDataStatistics_GetObjLstlocalStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstlocalStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvgs_TotalDataStatisticsEN.WhereFormat) == false) {
    strWhereCond = Format(clsvgs_TotalDataStatisticsEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format(
      "{0}='{1}'",
      clsvgs_TotalDataStatisticsEN.con_IdCurrEduCls,
      strIdCurrEduCls,
    );
  }
  const strKey = Format('{0}_{1}', clsvgs_TotalDataStatisticsEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvgs_TotalDataStatisticsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_TotalDataStatisticsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvgs_TotalDataStatisticsExObjLstCache: Array<clsvgs_TotalDataStatisticsEN> =
      JSON.parse(strTempObjLst);
    const arrvgs_TotalDataStatisticsObjLstT = vgs_TotalDataStatistics_GetObjLstByJSONObjLst(
      arrvgs_TotalDataStatisticsExObjLstCache,
    );
    return arrvgs_TotalDataStatisticsObjLstT;
  }
  try {
    const arrvgs_TotalDataStatisticsExObjLst = await vgs_TotalDataStatistics_GetObjLstAsync(
      strWhereCond,
    );
    localStorage.setItem(strKey, JSON.stringify(arrvgs_TotalDataStatisticsExObjLst));
    const strInfo = Format(
      '[localStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_TotalDataStatisticsExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_TotalDataStatisticsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从本地缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_TotalDataStatistics_ConstructorName,
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
export async function vgs_TotalDataStatistics_GetObjLstlocalStoragePureCache(
  strIdCurrEduCls: string,
) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvgs_TotalDataStatisticsEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvgs_TotalDataStatisticsObjLstCache: Array<clsvgs_TotalDataStatisticsEN> =
      JSON.parse(strTempObjLst);
    return arrvgs_TotalDataStatisticsObjLstCache;
  } else return null;
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * @param strWhereCond:条件
 * @returns 获取的相应对象列表
 **/
export async function vgs_TotalDataStatistics_GetObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvgs_TotalDataStatisticsEN>> {
  const strThisFuncName = 'GetObjLstAsync';
  const strAction = 'GetObjLst';
  const strUrl = GetWebApiUrl(vgs_TotalDataStatistics_Controller, strAction);

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
          vgs_TotalDataStatistics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_TotalDataStatistics_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_TotalDataStatistics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatistics_ConstructorName,
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
export async function vgs_TotalDataStatistics_GetObjLstsessionStorage(strIdCurrEduCls: string) {
  const strThisFuncName = 'GetObjLstsessionStorage';
  //初始化列表缓存
  let strWhereCond = '1=1';
  if (IsNullOrEmpty(clsvgs_TotalDataStatisticsEN.WhereFormat) == false) {
    strWhereCond = Format(clsvgs_TotalDataStatisticsEN.WhereFormat, strIdCurrEduCls);
  } else {
    strWhereCond = Format(
      "{0}='{1}'",
      clsvgs_TotalDataStatisticsEN.con_IdCurrEduCls,
      strIdCurrEduCls,
    );
  }
  const strKey = Format('{0}_{1}', clsvgs_TotalDataStatisticsEN._CurrTabName, strIdCurrEduCls);
  if (IsNullOrEmpty(clsvgs_TotalDataStatisticsEN.CacheAddiCondition) == false) {
    strWhereCond += Format(' and {0}', clsvgs_TotalDataStatisticsEN.CacheAddiCondition);
  }
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvgs_TotalDataStatisticsExObjLstCache: Array<clsvgs_TotalDataStatisticsEN> =
      JSON.parse(strTempObjLst);
    const arrvgs_TotalDataStatisticsObjLstT = vgs_TotalDataStatistics_GetObjLstByJSONObjLst(
      arrvgs_TotalDataStatisticsExObjLstCache,
    );
    return arrvgs_TotalDataStatisticsObjLstT;
  }
  try {
    const arrvgs_TotalDataStatisticsExObjLst = await vgs_TotalDataStatistics_GetObjLstAsync(
      strWhereCond,
    );
    sessionStorage.setItem(strKey, JSON.stringify(arrvgs_TotalDataStatisticsExObjLst));
    const strInfo = Format(
      '[sessionStorage]Key:[{0}]的缓存已经建立,对象列表数：{1}!',
      strKey,
      arrvgs_TotalDataStatisticsExObjLst.length,
    );
    console.log(strInfo);
    return arrvgs_TotalDataStatisticsExObjLst;
  } catch (e) {
    const strMsg = Format(
      '从缓存中获取所有对象列表出错. \n服务器错误：{0}.(in {1}.{2})',
      e,
      vgs_TotalDataStatistics_ConstructorName,
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
export async function vgs_TotalDataStatistics_GetObjLstsessionStoragePureCache(
  strIdCurrEduCls: string,
) {
  //初始化列表缓存
  const strKey = Format('{0}_{1}', clsvgs_TotalDataStatisticsEN._CurrTabName, strIdCurrEduCls);
  if (strKey == '') {
    console.error('关键字为空!不正确');
    throw new Error('关键字为空!不正确');
  }
  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在,直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvgs_TotalDataStatisticsObjLstCache: Array<clsvgs_TotalDataStatisticsEN> =
      JSON.parse(strTempObjLst);
    return arrvgs_TotalDataStatisticsObjLstCache;
  } else return null;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vgs_TotalDataStatistics_GetObjLstCache(
  strIdCurrEduCls: string,
): Promise<Array<clsvgs_TotalDataStatisticsEN>> {
  //const strThisFuncName = "GetObjLst_Cache";

  if (IsNullOrEmpty(strIdCurrEduCls) == true) {
    const strMsg = Format(
      '参数:[strIdCurrEduCls]不能为空！(In clsvgs_TotalDataStatisticsWApi.vgs_TotalDataStatistics_GetObjLstCache)',
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (strIdCurrEduCls.length != 8) {
    const strMsg = Format(
      '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确！(clsvgs_TotalDataStatisticsWApi.vgs_TotalDataStatistics_GetObjLstCache)',
      strIdCurrEduCls.length,
    );
    console.error(strMsg);
    throw strMsg;
  }
  let arrvgs_TotalDataStatisticsObjLstCache;
  switch (clsvgs_TotalDataStatisticsEN.CacheModeId) {
    case '04': //sessionStorage
      arrvgs_TotalDataStatisticsObjLstCache = await vgs_TotalDataStatistics_GetObjLstsessionStorage(
        strIdCurrEduCls,
      );
      break;
    case '03': //localStorage
      arrvgs_TotalDataStatisticsObjLstCache = await vgs_TotalDataStatistics_GetObjLstlocalStorage(
        strIdCurrEduCls,
      );
      break;
    case '02': //ClientCache
      arrvgs_TotalDataStatisticsObjLstCache = await vgs_TotalDataStatistics_GetObjLstClientCache(
        strIdCurrEduCls,
      );
      break;
    default:
      arrvgs_TotalDataStatisticsObjLstCache = await vgs_TotalDataStatistics_GetObjLstClientCache(
        strIdCurrEduCls,
      );
      break;
  }
  return arrvgs_TotalDataStatisticsObjLstCache;
}

/**
 * 获取本地缓存中的对象列表,是整个表中的全部记录,也可是表中某缓存分类的全部记录.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst_PureCacheAsync)
 * @returns 从本地缓存中获取的对象列表
 **/
export async function vgs_TotalDataStatistics_GetObjLstPureCache(strIdCurrEduCls: string) {
  //const strThisFuncName = "GetObjLstPureCache";
  let arrvgs_TotalDataStatisticsObjLstCache;
  switch (clsvgs_TotalDataStatisticsEN.CacheModeId) {
    case '04': //sessionStorage
      arrvgs_TotalDataStatisticsObjLstCache =
        await vgs_TotalDataStatistics_GetObjLstsessionStoragePureCache(strIdCurrEduCls);
      break;
    case '03': //localStorage
      arrvgs_TotalDataStatisticsObjLstCache =
        await vgs_TotalDataStatistics_GetObjLstlocalStoragePureCache(strIdCurrEduCls);
      break;
    case '02': //ClientCache
      arrvgs_TotalDataStatisticsObjLstCache = null;
      break;
    default:
      arrvgs_TotalDataStatisticsObjLstCache = null;
      break;
  }
  return arrvgs_TotalDataStatisticsObjLstCache;
}

/**
 * 根据条件对象, 从缓存的对象列表中获取子集.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
 * @param objstrTotalDataIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vgs_TotalDataStatistics_GetSubObjLstCache(
  objvgs_TotalDataStatisticsCond: clsvgs_TotalDataStatisticsEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetSubObjLstCache';
  const arrvgs_TotalDataStatisticsObjLstCache = await vgs_TotalDataStatistics_GetObjLstCache(
    strIdCurrEduCls,
  );
  let arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsObjLstCache;
  if (
    objvgs_TotalDataStatisticsCond.sfFldComparisonOp == null ||
    objvgs_TotalDataStatisticsCond.sfFldComparisonOp == ''
  )
    return arrvgs_TotalDataStatisticsSel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_TotalDataStatisticsCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_TotalDataStatisticsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_TotalDataStatisticsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_TotalDataStatisticsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_TotalDataStatisticsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]缓存对象列表中获取子集对象不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvgs_TotalDataStatisticsCond),
      vgs_TotalDataStatistics_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_TotalDataStatisticsEN>();
}

/**
 * 根据关键字列表获取相关对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * @param arrTotalDataId:关键字列表
 * @returns 对象列表
 **/
export async function vgs_TotalDataStatistics_GetObjLstByTotalDataIdLstAsync(
  arrTotalDataId: Array<string>,
): Promise<Array<clsvgs_TotalDataStatisticsEN>> {
  const strThisFuncName = 'GetObjLstByTotalDataIdLstAsync';
  const strAction = 'GetObjLstByTotalDataIdLst';
  const strUrl = GetWebApiUrl(vgs_TotalDataStatistics_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const response = await axios.post(strUrl, arrTotalDataId, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vgs_TotalDataStatistics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_TotalDataStatistics_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_TotalDataStatistics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatistics_ConstructorName,
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
 * @param arrstrTotalDataIdLst:关键字列表
 * @returns 对象列表
 */
export async function vgs_TotalDataStatistics_GetObjLstByTotalDataIdLstCache(
  arrTotalDataIdLst: Array<string>,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByTotalDataIdLstCache';
  try {
    const arrvgs_TotalDataStatisticsObjLstCache = await vgs_TotalDataStatistics_GetObjLstCache(
      strIdCurrEduCls,
    );
    const arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsObjLstCache.filter(
      (x) => arrTotalDataIdLst.indexOf(x.totalDataId) > -1,
    );
    return arrvgs_TotalDataStatisticsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取对象列表不成功!(in {2}.{3})',
      e,
      arrTotalDataIdLst.join(','),
      vgs_TotalDataStatistics_ConstructorName,
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
export async function vgs_TotalDataStatistics_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsvgs_TotalDataStatisticsEN>> {
  const strThisFuncName = 'GetTopObjLstAsync';
  const strAction = 'GetTopObjLst';
  const strUrl = GetWebApiUrl(vgs_TotalDataStatistics_Controller, strAction);

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
          vgs_TotalDataStatistics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_TotalDataStatistics_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_TotalDataStatistics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatistics_ConstructorName,
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
export async function vgs_TotalDataStatistics_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsvgs_TotalDataStatisticsEN>> {
  const strThisFuncName = 'GetObjLstByRangeAsync';
  const strAction = 'GetObjLstByRange';
  const strUrl = GetWebApiUrl(vgs_TotalDataStatistics_Controller, strAction);

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
          vgs_TotalDataStatistics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_TotalDataStatistics_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_TotalDataStatistics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatistics_ConstructorName,
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
export async function vgs_TotalDataStatistics_GetObjLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetObjLstByPagerCache';
  if (objPagerPara.pageIndex == 0) return new Array<clsvgs_TotalDataStatisticsEN>();
  const arrvgs_TotalDataStatisticsObjLstCache = await vgs_TotalDataStatistics_GetObjLstCache(
    strIdCurrEduCls,
  );
  if (arrvgs_TotalDataStatisticsObjLstCache.length == 0)
    return arrvgs_TotalDataStatisticsObjLstCache;
  let arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsObjLstCache;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objvgs_TotalDataStatisticsCond = new clsvgs_TotalDataStatisticsEN();
  ObjectAssign(objvgs_TotalDataStatisticsCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsvgs_TotalDataStatisticsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_TotalDataStatisticsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvgs_TotalDataStatisticsSel.length == 0) return arrvgs_TotalDataStatisticsSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.sort(
        vgs_TotalDataStatistics_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.sort(objPagerPara.sortFun);
    }
    arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.slice(intStart, intEnd);
    return arrvgs_TotalDataStatisticsSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vgs_TotalDataStatistics_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_TotalDataStatisticsEN>();
}

/**
 * 根据分页条件获取相应的记录对象列表,只获取一页
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * @param objPagerPara:分页获取对象列表的参数对象
 * @returns 获取的相应记录对象列表
 **/
export async function vgs_TotalDataStatistics_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvgs_TotalDataStatisticsEN>> {
  const strThisFuncName = 'GetObjLstByPagerAsync';
  if (objPagerPara.pageIndex == 0) return new Array<clsvgs_TotalDataStatisticsEN>();
  const strAction = 'GetObjLstByPager';
  const strUrl = GetWebApiUrl(vgs_TotalDataStatistics_Controller, strAction);

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
          vgs_TotalDataStatistics_ConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vgs_TotalDataStatistics_GetObjLstByJSONObjLst(returnObjLst);
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
        vgs_TotalDataStatistics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatistics_ConstructorName,
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
 * @param objstrTotalDataIdCond:条件对象
 * @returns 对象列表子集
 */
export async function vgs_TotalDataStatistics_IsExistRecordCache(
  objvgs_TotalDataStatisticsCond: clsvgs_TotalDataStatisticsEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistRecordCache';
  const arrvgs_TotalDataStatisticsObjLstCache = await vgs_TotalDataStatistics_GetObjLstCache(
    strIdCurrEduCls,
  );
  if (arrvgs_TotalDataStatisticsObjLstCache == null) return false;
  let arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsObjLstCache;
  if (
    objvgs_TotalDataStatisticsCond.sfFldComparisonOp == null ||
    objvgs_TotalDataStatisticsCond.sfFldComparisonOp == ''
  )
    return arrvgs_TotalDataStatisticsSel.length > 0 ? true : false;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_TotalDataStatisticsCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_TotalDataStatisticsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_TotalDataStatisticsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_TotalDataStatisticsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvgs_TotalDataStatisticsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据条件:[{0}]判断是否存在不成功!(in {1}.{2})',
      JSON.stringify(objvgs_TotalDataStatisticsCond),
      vgs_TotalDataStatistics_ConstructorName,
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
export async function vgs_TotalDataStatistics_IsExistRecordAsync(
  strWhereCond: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistRecordAsync';
  const strAction = 'IsExistRecord';
  const strUrl = GetWebApiUrl(vgs_TotalDataStatistics_Controller, strAction);

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
        vgs_TotalDataStatistics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatistics_ConstructorName,
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
 * @param strTotalDataId:所给的关键字
 * @returns 对象
 */
export async function vgs_TotalDataStatistics_IsExistCache(
  strTotalDataId: string,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'IsExistCache';
  const arrvgs_TotalDataStatisticsObjLstCache = await vgs_TotalDataStatistics_GetObjLstCache(
    strIdCurrEduCls,
  );
  if (arrvgs_TotalDataStatisticsObjLstCache == null) return false;
  try {
    const arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsObjLstCache.filter(
      (x) => x.totalDataId == strTotalDataId,
    );
    if (arrvgs_TotalDataStatisticsSel.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    const strMsg = Format(
      '根据关键字:[{0}]判断是否存在不成功!(in {1}.{2})',
      strTotalDataId,
      vgs_TotalDataStatistics_ConstructorName,
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
 * @param strTotalDataId:关键字
 * @returns 是否存在?存在返回True
 **/
export async function vgs_TotalDataStatistics_IsExistAsync(
  strTotalDataId: string,
): Promise<boolean> {
  const strThisFuncName = 'IsExistAsync';
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = GetWebApiUrl(vgs_TotalDataStatistics_Controller, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTotalDataId,
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
        vgs_TotalDataStatistics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatistics_ConstructorName,
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
export async function vgs_TotalDataStatistics_GetRecCountByCondAsync(
  strWhereCond: string,
): Promise<number> {
  const strThisFuncName = 'GetRecCountByCondAsync';
  const strAction = 'GetRecCountByCond';
  const strUrl = GetWebApiUrl(vgs_TotalDataStatistics_Controller, strAction);

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
        vgs_TotalDataStatistics_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误!访问地址:{0}可能不存在!(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatistics_ConstructorName,
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
 * @param objvgs_TotalDataStatisticsCond:条件对象
 * @returns 对象列表记录数
 */
export async function vgs_TotalDataStatistics_GetRecCountByCondCache(
  objvgs_TotalDataStatisticsCond: clsvgs_TotalDataStatisticsEN,
  strIdCurrEduCls: string,
) {
  const strThisFuncName = 'GetRecCountByCondCache';
  const arrvgs_TotalDataStatisticsObjLstCache = await vgs_TotalDataStatistics_GetObjLstCache(
    strIdCurrEduCls,
  );
  if (arrvgs_TotalDataStatisticsObjLstCache == null) return 0;
  let arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsObjLstCache;
  if (
    objvgs_TotalDataStatisticsCond.sfFldComparisonOp == null ||
    objvgs_TotalDataStatisticsCond.sfFldComparisonOp == ''
  )
    return arrvgs_TotalDataStatisticsSel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_TotalDataStatisticsCond.sfFldComparisonOp,
  );
  //console.log("clsvgs_TotalDataStatisticsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_TotalDataStatisticsCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_TotalDataStatisticsCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.toString().split(',');
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_TotalDataStatisticsSel = arrvgs_TotalDataStatisticsSel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_TotalDataStatisticsSel.length;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]从缓存对象列表中获取记录数不成功!(in {2}.{3})',
      e,
      JSON.stringify(objvgs_TotalDataStatisticsCond),
      vgs_TotalDataStatistics_ConstructorName,
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
export function vgs_TotalDataStatistics_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
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
export function vgs_TotalDataStatistics_ReFreshThisCache(strIdCurrEduCls: string): void {
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = Format('{0}_{1}', clsvgs_TotalDataStatisticsEN._CurrTabName, strIdCurrEduCls);
    switch (clsvgs_TotalDataStatisticsEN.CacheModeId) {
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
export function vgs_TotalDataStatistics_GetJSONStrByObj(
  pobjvgs_TotalDataStatisticsEN: clsvgs_TotalDataStatisticsEN,
): string {
  let strJson = '';
  try {
    strJson = JSON.stringify(pobjvgs_TotalDataStatisticsEN);
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
export function vgs_TotalDataStatistics_GetObjLstByJSONStr(
  strJSON: string,
): Array<clsvgs_TotalDataStatisticsEN> {
  let arrvgs_TotalDataStatisticsObjLst = new Array<clsvgs_TotalDataStatisticsEN>();
  if (strJSON === '') {
    return arrvgs_TotalDataStatisticsObjLst;
  }
  try {
    arrvgs_TotalDataStatisticsObjLst = JSON.parse(strJSON);
  } catch (objException) {
    return arrvgs_TotalDataStatisticsObjLst;
  }
  return arrvgs_TotalDataStatisticsObjLst;
}

/**
 * 把一个JSON对象列表转化为一个实体对象列表
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getObjLstByJSONObjLst)
 * @param arrvgs_TotalDataStatisticsObjLstS:需要转化的JSON对象列表
 * @returns 返回一个生成的对象列表
 */
export function vgs_TotalDataStatistics_GetObjLstByJSONObjLst(
  arrvgs_TotalDataStatisticsObjLstS: Array<clsvgs_TotalDataStatisticsEN>,
): Array<clsvgs_TotalDataStatisticsEN> {
  const arrvgs_TotalDataStatisticsObjLst = new Array<clsvgs_TotalDataStatisticsEN>();
  for (const objInFor of arrvgs_TotalDataStatisticsObjLstS) {
    const obj1 = vgs_TotalDataStatistics_GetObjFromJsonObj(objInFor);
    if (obj1 == null) continue;
    arrvgs_TotalDataStatisticsObjLst.push(obj1);
  }
  return arrvgs_TotalDataStatisticsObjLst;
}

/**
 * 把一个JSON串转化为一个对象
 * 作者:pyf
 * 日期:2023-11-08
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_getRecObjByJSONStr)
 * @param strJSON:需要转化的JSON串
 * @returns 返回一个生成的对象
 */
export function vgs_TotalDataStatistics_GetObjByJSONStr(
  strJSON: string,
): clsvgs_TotalDataStatisticsEN {
  let pobjvgs_TotalDataStatisticsEN = new clsvgs_TotalDataStatisticsEN();
  if (strJSON === '') {
    return pobjvgs_TotalDataStatisticsEN;
  }
  try {
    pobjvgs_TotalDataStatisticsEN = JSON.parse(strJSON);
  } catch (objException) {
    return pobjvgs_TotalDataStatisticsEN;
  }
  return pobjvgs_TotalDataStatisticsEN;
}

/**
 * 根据条件对象中的字段内容组合成一个条件串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CombineConditionByCondObj)
 * @returns 条件串(strWhereCond)
 */
export function vgs_TotalDataStatistics_GetCombineCondition(
  objvgs_TotalDataStatisticsCond: clsvgs_TotalDataStatisticsEN,
): string {
  //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //例如 1 = 1 && UserName = '张三'
  let strWhereCond = ' 1 = 1 ';
  //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_TotalDataId,
    ) == true
  ) {
    const strComparisonOpTotalDataId: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[
        clsvgs_TotalDataStatisticsEN.con_TotalDataId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_TotalDataId,
      objvgs_TotalDataStatisticsCond.totalDataId,
      strComparisonOpTotalDataId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_IdCurrEduCls,
    ) == true
  ) {
    const strComparisonOpIdCurrEduCls: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[
        clsvgs_TotalDataStatisticsEN.con_IdCurrEduCls
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_IdCurrEduCls,
      objvgs_TotalDataStatisticsCond.idCurrEduCls,
      strComparisonOpIdCurrEduCls,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_EduClsName,
    ) == true
  ) {
    const strComparisonOpEduClsName: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[
        clsvgs_TotalDataStatisticsEN.con_EduClsName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_EduClsName,
      objvgs_TotalDataStatisticsCond.eduClsName,
      strComparisonOpEduClsName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_SchoolYear,
    ) == true
  ) {
    const strComparisonOpSchoolYear: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[
        clsvgs_TotalDataStatisticsEN.con_SchoolYear
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_SchoolYear,
      objvgs_TotalDataStatisticsCond.schoolYear,
      strComparisonOpSchoolYear,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_TotalDataTypeId,
    ) == true
  ) {
    const strComparisonOpTotalDataTypeId: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[
        clsvgs_TotalDataStatisticsEN.con_TotalDataTypeId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_TotalDataTypeId,
      objvgs_TotalDataStatisticsCond.totalDataTypeId,
      strComparisonOpTotalDataTypeId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_SchoolTerm,
    ) == true
  ) {
    const strComparisonOpSchoolTerm: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[
        clsvgs_TotalDataStatisticsEN.con_SchoolTerm
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_SchoolTerm,
      objvgs_TotalDataStatisticsCond.schoolTerm,
      strComparisonOpSchoolTerm,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_TableKey,
    ) == true
  ) {
    const strComparisonOpTableKey: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[clsvgs_TotalDataStatisticsEN.con_TableKey];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_TableKey,
      objvgs_TotalDataStatisticsCond.tableKey,
      strComparisonOpTableKey,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_DataUser,
    ) == true
  ) {
    const strComparisonOpDataUser: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[clsvgs_TotalDataStatisticsEN.con_DataUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_DataUser,
      objvgs_TotalDataStatisticsCond.dataUser,
      strComparisonOpDataUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_DataAddDate,
    ) == true
  ) {
    const strComparisonOpDataAddDate: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[
        clsvgs_TotalDataStatisticsEN.con_DataAddDate
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_DataAddDate,
      objvgs_TotalDataStatisticsCond.dataAddDate,
      strComparisonOpDataAddDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_DataTable,
    ) == true
  ) {
    const strComparisonOpDataTable: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[clsvgs_TotalDataStatisticsEN.con_DataTable];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_DataTable,
      objvgs_TotalDataStatisticsCond.dataTable,
      strComparisonOpDataTable,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_Month,
    ) == true
  ) {
    const strComparisonOpMonth: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[clsvgs_TotalDataStatisticsEN.con_Month];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_TotalDataStatisticsEN.con_Month,
      objvgs_TotalDataStatisticsCond.month,
      strComparisonOpMonth,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_DataTableId,
    ) == true
  ) {
    const strComparisonOpDataTableId: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[
        clsvgs_TotalDataStatisticsEN.con_DataTableId
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_DataTableId,
      objvgs_TotalDataStatisticsCond.dataTableId,
      strComparisonOpDataTableId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_Week,
    ) == true
  ) {
    const strComparisonOpWeek: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[clsvgs_TotalDataStatisticsEN.con_Week];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_TotalDataStatisticsEN.con_Week,
      objvgs_TotalDataStatisticsCond.week,
      strComparisonOpWeek,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_UpdDate,
    ) == true
  ) {
    const strComparisonOpUpdDate: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[clsvgs_TotalDataStatisticsEN.con_UpdDate];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_UpdDate,
      objvgs_TotalDataStatisticsCond.updDate,
      strComparisonOpUpdDate,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_UpdUser,
    ) == true
  ) {
    const strComparisonOpUpdUser: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[clsvgs_TotalDataStatisticsEN.con_UpdUser];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_UpdUser,
      objvgs_TotalDataStatisticsCond.updUser,
      strComparisonOpUpdUser,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_Memo,
    ) == true
  ) {
    const strComparisonOpMemo: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[clsvgs_TotalDataStatisticsEN.con_Memo];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_Memo,
      objvgs_TotalDataStatisticsCond.memo,
      strComparisonOpMemo,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_Score,
    ) == true
  ) {
    const strComparisonOpScore: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[clsvgs_TotalDataStatisticsEN.con_Score];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_TotalDataStatisticsEN.con_Score,
      objvgs_TotalDataStatisticsCond.score,
      strComparisonOpScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_TeaScore,
    ) == true
  ) {
    const strComparisonOpTeaScore: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[clsvgs_TotalDataStatisticsEN.con_TeaScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_TotalDataStatisticsEN.con_TeaScore,
      objvgs_TotalDataStatisticsCond.teaScore,
      strComparisonOpTeaScore,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_WeekTimeRange,
    ) == true
  ) {
    const strComparisonOpWeekTimeRange: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[
        clsvgs_TotalDataStatisticsEN.con_WeekTimeRange
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_WeekTimeRange,
      objvgs_TotalDataStatisticsCond.weekTimeRange,
      strComparisonOpWeekTimeRange,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_OnlyId,
    ) == true
  ) {
    const strComparisonOpOnlyId: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[clsvgs_TotalDataStatisticsEN.con_OnlyId];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_OnlyId,
      objvgs_TotalDataStatisticsCond.onlyId,
      strComparisonOpOnlyId,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_TotalDataTypeName,
    ) == true
  ) {
    const strComparisonOpTotalDataTypeName: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[
        clsvgs_TotalDataStatisticsEN.con_TotalDataTypeName
      ];
    strWhereCond += Format(
      " And {0} {2} '{1}'",
      clsvgs_TotalDataStatisticsEN.con_TotalDataTypeName,
      objvgs_TotalDataStatisticsCond.totalDataTypeName,
      strComparisonOpTotalDataTypeName,
    );
  }
  if (
    Object.prototype.hasOwnProperty.call(
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp,
      clsvgs_TotalDataStatisticsEN.con_StuScore,
    ) == true
  ) {
    const strComparisonOpStuScore: string =
      objvgs_TotalDataStatisticsCond.dicFldComparisonOp[clsvgs_TotalDataStatisticsEN.con_StuScore];
    strWhereCond += Format(
      ' And {0} {2} {1}',
      clsvgs_TotalDataStatisticsEN.con_StuScore,
      objvgs_TotalDataStatisticsCond.stuScore,
      strComparisonOpStuScore,
    );
  }
  return strWhereCond;
}

/**
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_CopyObjTo)
 * @param objvgs_TotalDataStatisticsENS:源对象
 * @param objvgs_TotalDataStatisticsENT:目标对象
 */
export function vgs_TotalDataStatistics_CopyObjTo(
  objvgs_TotalDataStatisticsENS: clsvgs_TotalDataStatisticsEN,
  objvgs_TotalDataStatisticsENT: clsvgs_TotalDataStatisticsEN,
): void {
  objvgs_TotalDataStatisticsENT.totalDataId = objvgs_TotalDataStatisticsENS.totalDataId; //TotalDataId
  objvgs_TotalDataStatisticsENT.idCurrEduCls = objvgs_TotalDataStatisticsENS.idCurrEduCls; //教学班流水号
  objvgs_TotalDataStatisticsENT.eduClsName = objvgs_TotalDataStatisticsENS.eduClsName; //教学班名
  objvgs_TotalDataStatisticsENT.schoolYear = objvgs_TotalDataStatisticsENS.schoolYear; //学年
  objvgs_TotalDataStatisticsENT.totalDataTypeId = objvgs_TotalDataStatisticsENS.totalDataTypeId; //总数据类型Id
  objvgs_TotalDataStatisticsENT.schoolTerm = objvgs_TotalDataStatisticsENS.schoolTerm; //学期
  objvgs_TotalDataStatisticsENT.tableKey = objvgs_TotalDataStatisticsENS.tableKey; //表主键
  objvgs_TotalDataStatisticsENT.dataUser = objvgs_TotalDataStatisticsENS.dataUser; //数据用户
  objvgs_TotalDataStatisticsENT.dataAddDate = objvgs_TotalDataStatisticsENS.dataAddDate; //数据添加日期
  objvgs_TotalDataStatisticsENT.dataTable = objvgs_TotalDataStatisticsENS.dataTable; //数据表
  objvgs_TotalDataStatisticsENT.month = objvgs_TotalDataStatisticsENS.month; //月
  objvgs_TotalDataStatisticsENT.dataTableId = objvgs_TotalDataStatisticsENS.dataTableId; //数据表Id
  objvgs_TotalDataStatisticsENT.week = objvgs_TotalDataStatisticsENS.week; //周
  objvgs_TotalDataStatisticsENT.updDate = objvgs_TotalDataStatisticsENS.updDate; //修改日期
  objvgs_TotalDataStatisticsENT.updUser = objvgs_TotalDataStatisticsENS.updUser; //修改人
  objvgs_TotalDataStatisticsENT.memo = objvgs_TotalDataStatisticsENS.memo; //备注
  objvgs_TotalDataStatisticsENT.score = objvgs_TotalDataStatisticsENS.score; //评分
  objvgs_TotalDataStatisticsENT.teaScore = objvgs_TotalDataStatisticsENS.teaScore; //教师评分
  objvgs_TotalDataStatisticsENT.weekTimeRange = objvgs_TotalDataStatisticsENS.weekTimeRange; //WeekTimeRange
  objvgs_TotalDataStatisticsENT.onlyId = objvgs_TotalDataStatisticsENS.onlyId; //OnlyId
  objvgs_TotalDataStatisticsENT.totalDataTypeName = objvgs_TotalDataStatisticsENS.totalDataTypeName; //总数据类型名称
  objvgs_TotalDataStatisticsENT.stuScore = objvgs_TotalDataStatisticsENS.stuScore; //学生平均分
}

/**
 * 把一个JSON的对象,复制到另一个实体对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4BL_Ts_GetObjFromJsonObj)
 * @param objvgs_TotalDataStatisticsENS:源对象
 * @param objvgs_TotalDataStatisticsENT:目标对象
 */
export function vgs_TotalDataStatistics_GetObjFromJsonObj(
  objvgs_TotalDataStatisticsENS: clsvgs_TotalDataStatisticsEN,
): clsvgs_TotalDataStatisticsEN {
  const objvgs_TotalDataStatisticsENT: clsvgs_TotalDataStatisticsEN =
    new clsvgs_TotalDataStatisticsEN();
  ObjectAssign(objvgs_TotalDataStatisticsENT, objvgs_TotalDataStatisticsENS);
  return objvgs_TotalDataStatisticsENT;
}
