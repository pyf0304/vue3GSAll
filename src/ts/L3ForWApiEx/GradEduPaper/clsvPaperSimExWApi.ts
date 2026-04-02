/// <summary>
/// 论文简化视图(vPaperSim)
/// (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
/// </summary>
/**
 * Created by pyf on 2021年06月11日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

import axios from 'axios';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  vPaperSim_FilterFunByKey,
  vPaperSim_GetObjLstAsync,
  vPaperSim_GetObjLstByJSONObjLst,
  vPaperSim_GetObjLstCache,
  vPaperSim_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSimWApi';
import { clsvPaperSimEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSimEN';
import { clsvPaperSimENEx } from '@/ts/L0Entity/GradEduPaper/clsvPaperSimENEx';
//import * as QQ from "q";

import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const vPaperSimEx_Controller = 'vPaperSimExApi';
export const vPaperSimEx_ConstructorName = 'vPaperSimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vPaperSimEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvPaperSimENS:源对象
 * @returns 目标对象=>clsvPaperSimEN:objvPaperSimENT
 **/
export function vPaperSimEx_CopyToEx(objvPaperSimENS: clsvPaperSimEN): clsvPaperSimENEx {
  const strThisFuncName = vPaperSimEx_CopyToEx.name;
  const objvPaperSimENT = new clsvPaperSimENEx();
  try {
    ObjectAssign(objvPaperSimENT, objvPaperSimENS);
    return objvPaperSimENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vPaperSimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvPaperSimENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vPaperSimEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPaperSimENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrvPaperSimObjLst = await vPaperSim_GetObjLstCache();
  const arrvPaperSimExObjLst = arrvPaperSimObjLst.map(vPaperSimEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvPaperSimExObjLst) {
      await vPaperSimEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvPaperSimExObjLst.length == 0) return arrvPaperSimExObjLst;
  let arrvPaperSim_Sel: Array<clsvPaperSimENEx> = arrvPaperSimExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objvPaperSim_Cond = new clsvPaperSimENEx();
  ObjectAssign(objvPaperSim_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsvPaperSimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPaperSim_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvPaperSim_Sel.length == 0) return arrvPaperSim_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPaperSim_Sel = arrvPaperSim_Sel.sort(vPaperSimEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvPaperSim_Sel = arrvPaperSim_Sel.sort(objPagerPara.sortFun);
    }
    arrvPaperSim_Sel = arrvPaperSim_Sel.slice(intStart, intEnd);
    return arrvPaperSim_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPaperSimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPaperSimENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vPaperSimEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvPaperSimENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvPaperSimExObjLst = await vPaperSim_GetObjLstAsync(objPagerPara.whereCond);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvPaperSimExObjLst) {
      await vPaperSimEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvPaperSimExObjLst.length == 0) return arrvPaperSimExObjLst;
  let arrvPaperSim_Sel: Array<clsvPaperSimENEx> = arrvPaperSimExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvPaperSim_Sel = arrvPaperSim_Sel.sort(vPaperSimEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvPaperSim_Sel = arrvPaperSim_Sel.sort(objPagerPara.sortFun);
    }
    arrvPaperSim_Sel = arrvPaperSim_Sel.slice(intStart, intEnd);
    return arrvPaperSim_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vPaperSimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPaperSimENEx>();
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
export function vPaperSimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vPaperSim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vPaperSim_SortFunByKey(strKey, AscOrDesc);
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
export function vPaperSimEx_FuncMapByFldName(strFldName: string, objvPaperSimEx: clsvPaperSimENEx) {
  const strThisFuncName = vPaperSimEx_FuncMapByFldName.name;
  console.log(objvPaperSimEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvPaperSimEN.AttributeName;
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
export async function vPaperSimEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return vPaperSim_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 根据教学班获取对象列表，用对象列表表示
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strIdCurrEduCls">教学班流水号</param>
/// <returns>获取的相应对象列表</returns>
export async function vPaperSimEx_GetObjLstByIdCurrEduCls(
  strIdCurrEduCls: string,
): Promise<Array<clsvPaperSimEN>> {
  const strThisFuncName = 'GetObjLstByIdCurrEduCls';
  const strAction = 'GetObjLstByIdCurrEduCls';
  const strUrl = vPaperSimEx_GetWebApiUrl(vPaperSimEx_Controller, strAction);

  try {
    const response = await axios.get(strUrl, {
      params: { strIdCurrEduCls },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vPaperSimEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vPaperSim_GetObjLstByJSONObjLst(returnObjLst);
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
        vPaperSimEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vPaperSimEx_Controller,
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
/// 根据关键字获取相关对象, 从缓存中获取.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_Cache)
/// </summary>
/// <param name = "strPaperId">所给的关键字</param>
/// <returns>对象</returns>
export async function vPaperSimEx_GetObjByPaperId_Cache(
  strPaperId: string,
  strIdCurrEducls: string,
) {
  const arrvPaperSimObjLst_Cache: Array<clsvPaperSimEN> =
    await vPaperSimEx_GetObjLstByIdCurrEduCls_Cache(strIdCurrEducls);
  const obj: clsvPaperSimEN = new clsvPaperSimEN();
  try {
    const arrvPaperSim_Sel: Array<clsvPaperSimEN> = arrvPaperSimObjLst_Cache.filter(
      (x) => x.paperId == strPaperId,
    );
    let objvPaperSim: clsvPaperSimEN;
    if (arrvPaperSim_Sel.length > 0) {
      objvPaperSim = arrvPaperSim_Sel[0];
      return objvPaperSim;
    } else {
      return obj;
    }
  } catch (e:any) {
    const strMsg = `错误:[${e}]. \n根据关键字:[${strPaperId}]获取相应的对象不成功!`;
    console.error(strMsg);
    alert(strMsg);
  }
  return obj;
}

/// <summary>
/// 刷新本类中的缓存.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
/// </summary>
export async function vPaperSimEx_ReFreshThisCacheByIdCurrEduCls(strIdCurrEducls: string) {
  let strMsg = '';
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey = `${clsvPaperSimEN._CurrTabName}_${strIdCurrEducls}`;
    switch (clsvPaperSimEN.CacheModeId) {
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
    (strMsg = `刷新缓存成功！`), 
  } else {
    strMsg = `刷新缓存已经关闭。`;
    
  }
}

/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstCacheAsync)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function vPaperSimEx_GetObjLstByIdCurrEduCls_Cache(strIdCurrEducls: string) {
  let arrvPaperSimObjLst_Cache: Array<clsvPaperSimEN>;
  switch (clsvPaperSimEN.CacheModeId) {
    case '04': //sessionStorage
      arrvPaperSimObjLst_Cache = await vPaperSimEx_GetObjLstByIdCurrEduCls_sessionStorage(
        strIdCurrEducls,
      );
      break;
    case '03': //localStorage
      arrvPaperSimObjLst_Cache = await vPaperSimEx_GetObjLstByIdCurrEduCls_localStorage(
        strIdCurrEducls,
      );
      break;
    case '02': //ClientCache
      arrvPaperSimObjLst_Cache = await vPaperSimEx_GetObjLstByIdCurrEduCls_ClientCache(
        strIdCurrEducls,
      );
      break;
    default:
      arrvPaperSimObjLst_Cache = await vPaperSimEx_GetObjLstByIdCurrEduCls_ClientCache(
        strIdCurrEducls,
      );
      break;
  }
  return arrvPaperSimObjLst_Cache;
}

/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstClientCache)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function vPaperSimEx_GetObjLstByIdCurrEduCls_ClientCache(strIdCurrEducls: string) {
  //初始化列表缓存
  // let strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;
  const strKey = `${clsvPaperSimEN._CurrTabName}_${strIdCurrEducls}`;
  if (strKey == '') {
    console.log('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrvPaperSimObjLst_Cache: Array<clsvPaperSimEN> = CacheHelper.Get(strKey);
    return arrvPaperSimObjLst_Cache;
  }
  try {
    const responseText = await vPaperSimEx_GetObjLstByIdCurrEduCls(strIdCurrEducls);
    const arrvPaperSimObjLst: Array<clsvPaperSimEN> = <Array<clsvPaperSimEN>>responseText;
    CacheHelper.Add(strKey, arrvPaperSimObjLst);
    const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrvPaperSimObjLst.length}!`;
    console.log(strInfo);
    return arrvPaperSimObjLst;
  } catch (e:any) {
    const strMsg = `从本地缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
    console.error(strMsg);
    throw strMsg;
  }
}

/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstlocalStorage)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function vPaperSimEx_GetObjLstByIdCurrEduCls_localStorage(strIdCurrEducls: string) {
  //初始化列表缓存
  // let strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;
  const strKey = `${clsvPaperSimEN._CurrTabName}_${strIdCurrEducls}`;
  if (strKey == '') {
    console.log('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = localStorage.getItem(strKey) as string;
    const arrvPaperSimObjLst_Cache: Array<clsvPaperSimEN> = JSON.parse(strTempObjLst);
    return arrvPaperSimObjLst_Cache;
  }
  try {
    const responseText = await vPaperSimEx_GetObjLstByIdCurrEduCls(strIdCurrEducls);
    const arrvPaperSimObjLst: Array<clsvPaperSimEN> = <Array<clsvPaperSimEN>>responseText;
    localStorage.setItem(strKey, JSON.stringify(arrvPaperSimObjLst));
    const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrvPaperSimObjLst.length}!`;
    console.log(strInfo);
    return arrvPaperSimObjLst;
  } catch (e:any) {
    const strMsg = `从本地缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
    console.error(strMsg);
    throw strMsg;
  }
}
/// <summary>
/// 获取本地缓存中的对象列表，是整个表中的全部记录，也可是表中某缓存分类的全部记录.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstsessionStorage)
/// </summary>
/// <returns>从本地缓存中获取的对象列表</returns>
export async function vPaperSimEx_GetObjLstByIdCurrEduCls_sessionStorage(strIdCurrEducls: string) {
  //初始化列表缓存
  // let strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;
  const strKey = `${clsvPaperSimEN._CurrTabName}_${strIdCurrEducls}`;
  if (strKey == '') {
    console.log('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }

  if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
    //缓存存在，直接返回
    const strTempObjLst: string = sessionStorage.getItem(strKey) as string;
    const arrvPaperSimObjLst_Cache: Array<clsvPaperSimEN> = JSON.parse(strTempObjLst);
    return arrvPaperSimObjLst_Cache;
  }
  try {
    const responseText = await vPaperSimEx_GetObjLstByIdCurrEduCls(strIdCurrEducls);
    const arrvPaperSimObjLst: Array<clsvPaperSimEN> = <Array<clsvPaperSimEN>>responseText;
    sessionStorage.setItem(strKey, JSON.stringify(arrvPaperSimObjLst));
    const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrvPaperSimObjLst.length}!`;
    console.log(strInfo);
    return arrvPaperSimObjLst;
  } catch (e:any) {
    const strMsg = `从缓存中获取所有对象列表出错. \n服务器错误：${e}.`;
    console.error(strMsg);
    throw strMsg;
  }
}

/// <summary>
/// 根据条件对象, 从缓存的对象列表中获取子集.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
/// </summary>
/// <param name = "objstrSubViewpointId_Cond">条件对象</param>
/// <returns>对象列表子集</returns>
export async function vPaperSimEx_GetSubObjLstByIdCurrEduCls_Cache(
  objvPaperSim_Cond: clsvPaperSimEN,
  strIdCurrEducls: string,
) {
  const arrvPaperSimObjLst_Cache: Array<clsvPaperSimEN> =
    await vPaperSimEx_GetObjLstByIdCurrEduCls_Cache(strIdCurrEducls);
  let arrvPaperSim_Sel: Array<clsvPaperSimEN> = arrvPaperSimObjLst_Cache;
  if (objvPaperSim_Cond.sfFldComparisonOp == null || objvPaperSim_Cond.sfFldComparisonOp == '')
    return arrvPaperSim_Sel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPaperSim_Cond.sfFldComparisonOp,
  );
  //console.log("clsvPaperSimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPaperSim_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPaperSim_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (strValue == 0) continue;
          if (strComparisonOp == '=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvPaperSim_Sel;
  } catch (e:any) {
    const strMsg = `错误:[${e}]. \n根据条件:[${JSON.stringify(
      objvPaperSim_Cond,
    )}]缓存对象列表中获取子集对象不成功!`;
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPaperSimEN>();
}

/// <summary>
/// 根据条件对象, 从缓存的对象列表中获取记录数.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetRecCountByCondCache)
/// </summary>
/// <param name = "objvPaperSim_Cond">条件对象</param>
/// <returns>对象列表记录数</returns>
export async function vPaperSimEx_GetRecCountByCondByIdCurrEduCls_Cache(
  objvPaperSim_Cond: clsvPaperSimEN,
  strIdCurrEducls: string,
) {
  const arrvPaperSimObjLst_Cache: Array<clsvPaperSimEN> =
    await vPaperSimEx_GetObjLstByIdCurrEduCls_Cache(strIdCurrEducls);
  let arrvPaperSim_Sel: Array<clsvPaperSimEN> = arrvPaperSimObjLst_Cache;
  if (objvPaperSim_Cond.sfFldComparisonOp == null || objvPaperSim_Cond.sfFldComparisonOp == '')
    return arrvPaperSim_Sel.length;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objvPaperSim_Cond.sfFldComparisonOp,
  );
  //console.log("clsvPaperSimWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objvPaperSim_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvPaperSim_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (strValue == 0) continue;
          if (strComparisonOp == '=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    return arrvPaperSim_Sel.length;
  } catch (e:any) {
    const strMsg = `错误:[${e}]. \n根据条件:[${JSON.stringify(
      objvPaperSim_Cond,
    )}]从缓存对象列表中获取记录数不成功!`;
    console.error(strMsg);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return 0;
}

/// <summary>
/// 从缓存中获取分页对象列表.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerCache)
/// </summary>
/// <param name = "objPagerPara">分页参数结构</param>
/// <returns>对象列表</returns>
export async function vPaperSimEx_GetObjLstByPagerByIdCurrEduCls_Cache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
) {
  const arrvPaperSimObjLst_Cache: Array<clsvPaperSimEN> =
    await vPaperSimEx_GetObjLstByIdCurrEduCls_Cache(strIdCurrEducls);
  if (arrvPaperSimObjLst_Cache.length == 0) return arrvPaperSimObjLst_Cache;
  let arrvPaperSim_Sel: Array<clsvPaperSimEN> = arrvPaperSimObjLst_Cache;
  const obj_Cond: clsvPaperSimEN = JSON.parse(objPagerPara.whereCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsvPaperSimWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = obj_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (strValue == 0) continue;
          if (strComparisonOp == '=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvPaperSim_Sel.length == 0) return arrvPaperSim_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      //                console.log(arrvPaperSim_Sel);
      const objFirst = arrvPaperSim_Sel[0]; //第一个对象
      const strSortValue = objFirst.GetFldValue(strSortFld); //第一个对象排序字段值
      const strSortFldType = typeof strSortValue; //排序字段值的数据类型
      //console.log("排序字段的数据类型: " + strSortFldType);
      switch (strSortFldType) {
        case 'string':
          if (strSortType.toLowerCase() == 'asc') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.sort((x, y) =>
              x.GetFldValue(strSortFld).localeCompare(y.GetFldValue(strSortFld)),
            );
          } else {
            arrvPaperSim_Sel = arrvPaperSim_Sel.sort((x, y) =>
              y.GetFldValue(strSortFld).localeCompare(x.GetFldValue(strSortFld)),
            );
          }
          break;
        case 'number':
        case 'boolean':
          if (strSortType.toLowerCase() == 'asc') {
            arrvPaperSim_Sel = arrvPaperSim_Sel.sort(
              (x, y) => x.GetFldValue(strSortFld) - y.GetFldValue(strSortFld),
            );
          } else {
            arrvPaperSim_Sel = arrvPaperSim_Sel.sort(
              (x, y) => y.GetFldValue(strSortFld) - x.GetFldValue(strSortFld),
            );
          }
          break;
      }
    } else {
      //如果排序字段名[orderBy]为空，就调用排序函数
      arrvPaperSim_Sel = arrvPaperSim_Sel.sort(objPagerPara.sortFun);
    }
    arrvPaperSim_Sel = arrvPaperSim_Sel.slice(intStart, intEnd);
    return arrvPaperSim_Sel;
  } catch (e:any) {
    const strMsg = `错误:[${e}]. \n根据条件:[${objPagerPara.whereCond}]获取分页对象列表不成功!(In vPaperSim_GetObjLstByPagerCache)`;
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvPaperSimEN>();
}
