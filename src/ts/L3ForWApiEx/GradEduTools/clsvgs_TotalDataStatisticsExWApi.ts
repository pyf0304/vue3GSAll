//import * as QQ from "q";

import axios from 'axios';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  vgs_TotalDataStatistics_FilterFunByKey,
  vgs_TotalDataStatistics_GetObjLstAsync,
  vgs_TotalDataStatistics_GetObjLstByJSONObjLst,
  vgs_TotalDataStatistics_GetObjLstCache,
  vgs_TotalDataStatistics_GetObjLstClientCache,
  vgs_TotalDataStatistics_GetObjLstlocalStorage,
  vgs_TotalDataStatistics_GetObjLstsessionStorage,
  vgs_TotalDataStatistics_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduTools/clsvgs_TotalDataStatisticsWApi';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Dictionary } from '@/ts/PubFun/tzDictionary';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsvgs_TotalDataStatisticsEN } from '@/ts/L0Entity/GradEduTools/clsvgs_TotalDataStatisticsEN';
import { clsvgs_TotalDataStatisticsENEx } from '@/ts/L0Entity/GradEduTools/clsvgs_TotalDataStatisticsENEx';
export const vgs_TotalDataStatisticsEx_Controller = 'vgs_TotalDataStatisticsExApi';
export const vgs_TotalDataStatisticsEx_ConstructorName = 'vgs_TotalDataStatisticsEx';

//public static cacheModeId = "02"; //客户端缓存

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vgs_TotalDataStatisticsEx_GetWebApiUrl(
  strController: string,
  strAction: string,
): string {
  // const strThisFuncName = 'GetWebApiUrl';
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
 * 把同一个类的对象,复制到另一个对象
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
 * @param objvgs_TotalDataStatisticsENS:源对象
 * @returns 目标对象=>clsvgs_TotalDataStatisticsEN:objvgs_TotalDataStatisticsENT
 **/
export function vgs_TotalDataStatisticsEx_CopyToEx(
  objvgs_TotalDataStatisticsENS: clsvgs_TotalDataStatisticsEN,
): clsvgs_TotalDataStatisticsENEx {
  const strThisFuncName = vgs_TotalDataStatisticsEx_CopyToEx.name;
  const objvgs_TotalDataStatisticsENT = new clsvgs_TotalDataStatisticsENEx();
  try {
    ObjectAssign(objvgs_TotalDataStatisticsENT, objvgs_TotalDataStatisticsENS);
    return objvgs_TotalDataStatisticsENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vgs_TotalDataStatisticsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvgs_TotalDataStatisticsENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vgs_TotalDataStatisticsEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
): Promise<Array<clsvgs_TotalDataStatisticsENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrvgs_TotalDataStatisticsObjLst = await vgs_TotalDataStatistics_GetObjLstCache(
    strIdCurrEducls,
  );
  const arrvgs_TotalDataStatisticsExObjLst = arrvgs_TotalDataStatisticsObjLst.map(
    vgs_TotalDataStatisticsEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvgs_TotalDataStatisticsExObjLst) {
      await vgs_TotalDataStatisticsEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvgs_TotalDataStatisticsExObjLst.length == 0) return arrvgs_TotalDataStatisticsExObjLst;
  let arrvgs_TotalDataStatistics_Sel: Array<clsvgs_TotalDataStatisticsENEx> =
    arrvgs_TotalDataStatisticsExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objvgs_TotalDataStatistics_Cond = new clsvgs_TotalDataStatisticsENEx();
  ObjectAssign(objvgs_TotalDataStatistics_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsvgs_TotalDataStatisticsWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_TotalDataStatistics_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvgs_TotalDataStatistics_Sel.length == 0) return arrvgs_TotalDataStatistics_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.sort(
        vgs_TotalDataStatisticsEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.sort(objPagerPara.sortFun);
    }
    arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.slice(intStart, intEnd);
    return arrvgs_TotalDataStatistics_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vgs_TotalDataStatisticsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_TotalDataStatisticsENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vgs_TotalDataStatisticsEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvgs_TotalDataStatisticsENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvgs_TotalDataStatisticsExObjLst = await vgs_TotalDataStatistics_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvgs_TotalDataStatisticsExObjLst) {
      await vgs_TotalDataStatisticsEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvgs_TotalDataStatisticsExObjLst.length == 0) return arrvgs_TotalDataStatisticsExObjLst;
  let arrvgs_TotalDataStatistics_Sel: Array<clsvgs_TotalDataStatisticsENEx> =
    arrvgs_TotalDataStatisticsExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.sort(
        vgs_TotalDataStatisticsEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.sort(objPagerPara.sortFun);
    }
    arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.slice(intStart, intEnd);
    return arrvgs_TotalDataStatistics_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vgs_TotalDataStatisticsEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvgs_TotalDataStatisticsENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-02
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vgs_TotalDataStatisticsEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vgs_TotalDataStatistics_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vgs_TotalDataStatistics_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-02
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vgs_TotalDataStatisticsEx_FuncMapByFldName(
  strFldName: string,
  objvgs_TotalDataStatisticsEx: clsvgs_TotalDataStatisticsENEx,
) {
  const strThisFuncName = vgs_TotalDataStatisticsEx_FuncMapByFldName.name;
  console.log(objvgs_TotalDataStatisticsEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvgs_TotalDataStatisticsEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在！(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2022-11-02
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vgs_TotalDataStatisticsEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return vgs_TotalDataStatistics_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstClientCache)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function vgs_TotalDataStatisticsEx_GetObjLstClientCache(strIdCurrEducls: string) {
  //初始化列表缓存
  let strWhereCond = '1=1';

  strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;
  const strKey = `${clsvgs_TotalDataStatisticsEN._CurrTabName}_${strIdCurrEducls}`;
  if (strKey == '') {
    console.log('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrvgs_TotalDataStatisticsObjLst_Cache: Array<clsvgs_TotalDataStatisticsEN> =
      CacheHelper.Get(strKey);
    return arrvgs_TotalDataStatisticsObjLst_Cache;
  }
  try {
    //const responseText = await vgs_TotalDataStatistics_GetObjLstAsync(strWhereCond);
    const responseText = await vgs_TotalDataStatisticsEx_GetUserNumObjLstAsync(strWhereCond);

    const arrvgs_TotalDataStatisticsObjLst: Array<clsvgs_TotalDataStatisticsEN> = <
      Array<clsvgs_TotalDataStatisticsEN>
    >responseText;
    CacheHelper.Add(strKey, arrvgs_TotalDataStatisticsObjLst);
    const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrvgs_TotalDataStatisticsObjLst.length}!`;
    console.log(strInfo);
    return arrvgs_TotalDataStatisticsObjLst;
  } catch (e:any) {
    console.log('GetObjLstCachee');
    console.error(e);
    const strMsg = `从本地缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
    throw strMsg;
  }
}

/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function vgs_TotalDataStatisticsEx_GetObjLstCache(strIdCurrEducls: string) {
  let arrvgs_TotalDataStatisticsObjLst_Cache: Array<clsvgs_TotalDataStatisticsEN>;
  switch (clsvgs_TotalDataStatisticsEN.CacheModeId) {
    case '04': //sessionStorage
      arrvgs_TotalDataStatisticsObjLst_Cache =
        await vgs_TotalDataStatistics_GetObjLstsessionStorage(strIdCurrEducls);
      break;
    case '03': //localStorage
      arrvgs_TotalDataStatisticsObjLst_Cache = await vgs_TotalDataStatistics_GetObjLstlocalStorage(
        strIdCurrEducls,
      );
      break;
    case '02': //ClientCache
      arrvgs_TotalDataStatisticsObjLst_Cache = await vgs_TotalDataStatistics_GetObjLstClientCache(
        strIdCurrEducls,
      );
      break;
    default:
      arrvgs_TotalDataStatisticsObjLst_Cache = await vgs_TotalDataStatistics_GetObjLstClientCache(
        strIdCurrEducls,
      );
      break;
  }
  return arrvgs_TotalDataStatisticsObjLst_Cache;
}
/// <summary>
/// 根据条件对象, 从缓存的对象列表中获取子集.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
/// </summary>
/// <param name = "objstrTotalDataId_Cond">条件对象</param>
/// <returns>对象列表子集</returns>
export async function vgs_TotalDataStatisticsEx_GetUserNumSubObjLst_Cache(
  objvgs_TotalDataStatistics_Cond: clsvgs_TotalDataStatisticsEN,
  strIdCurrEducls: string,
) {
  const arrvgs_TotalDataStatisticsObjLst_Cache: Array<clsvgs_TotalDataStatisticsEN> =
    await vgs_TotalDataStatisticsEx_GetObjLstCache(strIdCurrEducls);
  let arrvgs_TotalDataStatistics_Sel: Array<clsvgs_TotalDataStatisticsEN> =
    arrvgs_TotalDataStatisticsObjLst_Cache;
  if (
    objvgs_TotalDataStatistics_Cond.sfFldComparisonOp == null ||
    objvgs_TotalDataStatistics_Cond.sfFldComparisonOp == ''
  )
    return arrvgs_TotalDataStatistics_Sel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_TotalDataStatistics_Cond.sfFldComparisonOp,
  );
  //console.log("clsvgs_TotalDataStatisticsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_TotalDataStatistics_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_TotalDataStatistics_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (strValue == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_TotalDataStatistics_Sel;
  } catch (e:any) {
    const strMsg = `错误:[${e}]. \n根据条件:[${JSON.stringify(
      objvgs_TotalDataStatistics_Cond,
    )}]缓存对象列表中获取子集对象不成功!`;
    throw new Error(strMsg);
  }
  return new Array<clsvgs_TotalDataStatisticsEN>();
}

/// <summary>
/// 用户统计
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function vgs_TotalDataStatisticsEx_GetUserNumObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvgs_TotalDataStatisticsEN>> {
  const strThisFuncName = 'GetUserNumObjLstAsync';
  const strAction = 'GetUserNumObjLst';
  const strUrl = vgs_TotalDataStatisticsEx_GetWebApiUrl(
    vgs_TotalDataStatisticsEx_Controller,
    strAction,
  );
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: { strWhereCond },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vgs_TotalDataStatisticsEx_Controller,
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatisticsEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatisticsEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstClientCache)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function vgs_TotalDataStatisticsEx_GetWeekNumObjLst_ClientCache(
  strIdCurrEducls: string,
) {
  //初始化列表缓存
  let strWhereCond = '1=1';

  strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;
  const strKey = `${clsvgs_TotalDataStatisticsEN._CurrTabName}_${strIdCurrEducls}`;
  if (strKey == '') {
    console.log('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrvgs_TotalDataStatisticsObjLst_Cache: Array<clsvgs_TotalDataStatisticsEN> =
      CacheHelper.Get(strKey);
    return arrvgs_TotalDataStatisticsObjLst_Cache;
  }
  try {
    //const responseText = await vgs_TotalDataStatistics_GetObjLstAsync(strWhereCond);
    const responseText = await vgs_TotalDataStatisticsEx_GetWeekNumObjLstAsync(strWhereCond);

    const arrvgs_TotalDataStatisticsObjLst: Array<clsvgs_TotalDataStatisticsEN> = <
      Array<clsvgs_TotalDataStatisticsEN>
    >responseText;
    CacheHelper.Add(strKey, arrvgs_TotalDataStatisticsObjLst);
    const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrvgs_TotalDataStatisticsObjLst.length}!`;
    console.log(strInfo);
    return arrvgs_TotalDataStatisticsObjLst;
  } catch (e:any) {
    console.log('GetObjLstCachee');
    console.error(e);
    const strMsg = `从本地缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
    throw strMsg;
  }
}
/// <summary>
/// 根据条件对象, 从缓存的对象列表中获取子集.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
/// </summary>
/// <param name = "objstrTotalDataId_Cond">条件对象</param>
/// <returns>对象列表子集</returns>
export async function vgs_TotalDataStatisticsEx_GetWeekNumSubObjLst_Cache(
  objvgs_TotalDataStatistics_Cond: clsvgs_TotalDataStatisticsEN,
  strIdCurrEducls: string,
) {
  const arrvgs_TotalDataStatisticsObjLst_Cache: Array<clsvgs_TotalDataStatisticsEN> =
    await vgs_TotalDataStatisticsEx_GetWeekNumObjLst_ClientCache(strIdCurrEducls);
  let arrvgs_TotalDataStatistics_Sel: Array<clsvgs_TotalDataStatisticsEN> =
    arrvgs_TotalDataStatisticsObjLst_Cache;
  if (
    objvgs_TotalDataStatistics_Cond.sfFldComparisonOp == null ||
    objvgs_TotalDataStatistics_Cond.sfFldComparisonOp == ''
  )
    return arrvgs_TotalDataStatistics_Sel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_TotalDataStatistics_Cond.sfFldComparisonOp,
  );
  //console.log("clsvgs_TotalDataStatisticsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_TotalDataStatistics_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_TotalDataStatistics_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (strValue == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_TotalDataStatistics_Sel;
  } catch (e:any) {
    const strMsg = `错误:[${e}]. \n根据条件:[${JSON.stringify(
      objvgs_TotalDataStatistics_Cond,
    )}]缓存对象列表中获取子集对象不成功!`;
    throw new Error(strMsg);
  }
  return new Array<clsvgs_TotalDataStatisticsEN>();
}
/// <summary>
/// 周期统计
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function vgs_TotalDataStatisticsEx_GetWeekNumObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvgs_TotalDataStatisticsEN>> {
  const strThisFuncName = 'GetWeekNumObjLstAsync';
  const strAction = 'GetWeekNumObjLst';
  const strUrl = vgs_TotalDataStatisticsEx_GetWebApiUrl(
    vgs_TotalDataStatisticsEx_Controller,
    strAction,
  );
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: { strWhereCond },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vgs_TotalDataStatisticsEx_Controller,
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatisticsEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatisticsEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstClientCache)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function vgs_TotalDataStatisticsEx_GetWeekAVGTeaScoreObjLst_ClientCache(
  strIdCurrEducls: string,
) {
  //初始化列表缓存
  let strWhereCond = '1=1';

  strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;
  const strKey = `${clsvgs_TotalDataStatisticsEN._CurrTabName}_${strIdCurrEducls}`;
  if (strKey == '') {
    console.log('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrvgs_TotalDataStatisticsObjLst_Cache: Array<clsvgs_TotalDataStatisticsEN> =
      CacheHelper.Get(strKey);
    return arrvgs_TotalDataStatisticsObjLst_Cache;
  }
  try {
    //const responseText = await vgs_TotalDataStatistics_GetObjLstAsync(strWhereCond);
    const responseText = await vgs_TotalDataStatisticsEx_GetWeekAVGTeaScoreObjLstAsync(
      strWhereCond,
    );

    const arrvgs_TotalDataStatisticsObjLst: Array<clsvgs_TotalDataStatisticsEN> = <
      Array<clsvgs_TotalDataStatisticsEN>
    >responseText;
    CacheHelper.Add(strKey, arrvgs_TotalDataStatisticsObjLst);
    const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrvgs_TotalDataStatisticsObjLst.length}!`;
    console.log(strInfo);
    return arrvgs_TotalDataStatisticsObjLst;
  } catch (e:any) {
    console.log('GetObjLstCachee');
    console.error(e);
    const strMsg = `从本地缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
    throw strMsg;
  }
}
/// <summary>
/// 根据条件对象, 从缓存的对象列表中获取子集.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
/// </summary>
/// <param name = "objstrTotalDataId_Cond">条件对象</param>
/// <returns>对象列表子集</returns>
export async function vgs_TotalDataStatisticsEx_GetWeekAVGTeaScoreSubObjLst_Cache(
  objvgs_TotalDataStatistics_Cond: clsvgs_TotalDataStatisticsEN,
  strIdCurrEducls: string,
) {
  const arrvgs_TotalDataStatisticsObjLst_Cache: Array<clsvgs_TotalDataStatisticsEN> =
    await vgs_TotalDataStatisticsEx_GetWeekAVGTeaScoreObjLst_ClientCache(strIdCurrEducls);
  let arrvgs_TotalDataStatistics_Sel: Array<clsvgs_TotalDataStatisticsEN> =
    arrvgs_TotalDataStatisticsObjLst_Cache;
  if (
    objvgs_TotalDataStatistics_Cond.sfFldComparisonOp == null ||
    objvgs_TotalDataStatistics_Cond.sfFldComparisonOp == ''
  )
    return arrvgs_TotalDataStatistics_Sel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_TotalDataStatistics_Cond.sfFldComparisonOp,
  );
  //console.log("clsvgs_TotalDataStatisticsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_TotalDataStatistics_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_TotalDataStatistics_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (strValue == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_TotalDataStatistics_Sel;
  } catch (e:any) {
    const strMsg = `错误:[${e}]. \n根据条件:[${JSON.stringify(
      objvgs_TotalDataStatistics_Cond,
    )}]缓存对象列表中获取子集对象不成功!`;
    throw new Error(strMsg);
  }
  return new Array<clsvgs_TotalDataStatisticsEN>();
}
/// <summary>
/// 获取教学班周教师打分平均分
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function vgs_TotalDataStatisticsEx_GetWeekAVGTeaScoreObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvgs_TotalDataStatisticsEN>> {
  const strThisFuncName = 'GetWeekAVGTeaScoreObjLstAsync';
  const strAction = 'GetWeekAVGTeaScoreObjLst';
  const strUrl = vgs_TotalDataStatisticsEx_GetWebApiUrl(
    vgs_TotalDataStatisticsEx_Controller,
    strAction,
  );
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: { strWhereCond },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vgs_TotalDataStatisticsEx_Controller,
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatisticsEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatisticsEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstClientCache)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function vgs_TotalDataStatisticsEx_GetUser_WeekNumObjLst_ClientCache(
  strIdCurrEducls: string,
) {
  //初始化列表缓存
  let strWhereCond = '1=1';

  strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;
  const strKey = `${clsvgs_TotalDataStatisticsEN._CurrTabName}_${strIdCurrEducls}`;
  if (strKey == '') {
    console.log('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrvgs_TotalDataStatisticsObjLst_Cache: Array<clsvgs_TotalDataStatisticsEN> =
      CacheHelper.Get(strKey);
    return arrvgs_TotalDataStatisticsObjLst_Cache;
  }
  try {
    //const responseText = await vgs_TotalDataStatistics_GetObjLstAsync(strWhereCond);
    const responseText = await vgs_TotalDataStatisticsEx_GetUser_WeekNumObjLstAsync(strWhereCond);

    const arrvgs_TotalDataStatisticsObjLst: Array<clsvgs_TotalDataStatisticsEN> = <
      Array<clsvgs_TotalDataStatisticsEN>
    >responseText;
    CacheHelper.Add(strKey, arrvgs_TotalDataStatisticsObjLst);
    const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrvgs_TotalDataStatisticsObjLst.length}!`;
    console.log(strInfo);
    return arrvgs_TotalDataStatisticsObjLst;
  } catch (e:any) {
    console.log('GetObjLstCachee');
    console.error(e);
    const strMsg = `从本地缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
    throw strMsg;
  }
}
/// <summary>
/// 根据条件对象, 从缓存的对象列表中获取子集.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
/// </summary>
/// <param name = "objstrTotalDataId_Cond">条件对象</param>
/// <returns>对象列表子集</returns>
export async function vgs_TotalDataStatisticsEx_GetUser_WeekNumSubObjLst_Cache(
  objvgs_TotalDataStatistics_Cond: clsvgs_TotalDataStatisticsEN,
  strIdCurrEducls: string,
) {
  const arrvgs_TotalDataStatisticsObjLst_Cache: Array<clsvgs_TotalDataStatisticsEN> =
    await vgs_TotalDataStatisticsEx_GetUser_WeekNumObjLst_ClientCache(strIdCurrEducls);
  let arrvgs_TotalDataStatistics_Sel: Array<clsvgs_TotalDataStatisticsEN> =
    arrvgs_TotalDataStatisticsObjLst_Cache;
  if (
    objvgs_TotalDataStatistics_Cond.sfFldComparisonOp == null ||
    objvgs_TotalDataStatistics_Cond.sfFldComparisonOp == ''
  )
    return arrvgs_TotalDataStatistics_Sel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvgs_TotalDataStatistics_Cond.sfFldComparisonOp,
  );
  //console.log("clsvgs_TotalDataStatisticsWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvgs_TotalDataStatistics_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvgs_TotalDataStatistics_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (strValue == 0) continue;
          if (strComparisonOp == '=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvgs_TotalDataStatistics_Sel = arrvgs_TotalDataStatistics_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrvgs_TotalDataStatistics_Sel;
  } catch (e:any) {
    const strMsg = `错误:[${e}]. \n根据条件:[${JSON.stringify(
      objvgs_TotalDataStatistics_Cond,
    )}]缓存对象列表中获取子集对象不成功!`;
    throw new Error(strMsg);
  }
  return new Array<clsvgs_TotalDataStatisticsEN>();
}

/// <summary>
/// 周期用户统计
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function vgs_TotalDataStatisticsEx_GetUser_WeekNumObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvgs_TotalDataStatisticsEN>> {
  const strThisFuncName = 'GetUser_WeekNumObjLstAsync';
  const strAction = 'GetUser_WeekNumObjLst';
  const strUrl = vgs_TotalDataStatisticsEx_GetWebApiUrl(
    vgs_TotalDataStatisticsEx_Controller,
    strAction,
  );
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: { strWhereCond },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vgs_TotalDataStatisticsEx_Controller,
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatisticsEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vgs_TotalDataStatisticsEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
