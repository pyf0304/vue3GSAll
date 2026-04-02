import axios from 'axios';
import {
  vSysScoreSummary_FilterFunByKey,
  vSysScoreSummary_GetObjLstAsync,
  vSysScoreSummary_GetObjLstByJSONObjLst,
  vSysScoreSummary_GetObjLstCache,
  vSysScoreSummary_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduTools/clsvSysScoreSummaryWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsvSysScoreSummaryEN } from '@/ts/L0Entity/GradEduTools/clsvSysScoreSummaryEN';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { Dictionary } from '@/ts/PubFun/tzDictionary';

import { clsvSysScoreSummaryENEx } from '@/ts/L0Entity/GradEduTools/clsvSysScoreSummaryENEx';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
export const vSysScoreSummaryEx_Controller = 'vSysScoreSummaryExApi';
export const vSysScoreSummaryEx_ConstructorName = 'vSysScoreSummaryEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vSysScoreSummaryEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvSysScoreSummaryENS:源对象
 * @returns 目标对象=>clsvSysScoreSummaryEN:objvSysScoreSummaryENT
 **/
export function vSysScoreSummaryEx_CopyToEx(
  objvSysScoreSummaryENS: clsvSysScoreSummaryEN,
): clsvSysScoreSummaryENEx {
  const strThisFuncName = vSysScoreSummaryEx_CopyToEx.name;
  const objvSysScoreSummaryENT = new clsvSysScoreSummaryENEx();
  try {
    ObjectAssign(objvSysScoreSummaryENT, objvSysScoreSummaryENS);
    return objvSysScoreSummaryENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vSysScoreSummaryEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvSysScoreSummaryENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vSysScoreSummaryEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
): Promise<Array<clsvSysScoreSummaryENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrvSysScoreSummaryObjLst = await vSysScoreSummary_GetObjLstCache(strIdCurrEducls);
  const arrvSysScoreSummaryExObjLst = arrvSysScoreSummaryObjLst.map(vSysScoreSummaryEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvSysScoreSummaryExObjLst) {
      await vSysScoreSummaryEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvSysScoreSummaryExObjLst.length == 0) return arrvSysScoreSummaryExObjLst;
  let arrvSysScoreSummary_Sel: Array<clsvSysScoreSummaryENEx> = arrvSysScoreSummaryExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objvSysScoreSummary_Cond = new clsvSysScoreSummaryENEx();
  ObjectAssign(objvSysScoreSummary_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsvSysScoreSummaryWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvSysScoreSummary_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvSysScoreSummary_Sel.length == 0) return arrvSysScoreSummary_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.sort(
        vSysScoreSummaryEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.sort(objPagerPara.sortFun);
    }
    arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.slice(intStart, intEnd);
    return arrvSysScoreSummary_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vSysScoreSummaryEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvSysScoreSummaryENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vSysScoreSummaryEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvSysScoreSummaryENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvSysScoreSummaryExObjLst = await vSysScoreSummary_GetObjLstAsync(objPagerPara.whereCond);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvSysScoreSummaryExObjLst) {
      await vSysScoreSummaryEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvSysScoreSummaryExObjLst.length == 0) return arrvSysScoreSummaryExObjLst;
  let arrvSysScoreSummary_Sel: Array<clsvSysScoreSummaryENEx> = arrvSysScoreSummaryExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.sort(
        vSysScoreSummaryEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.sort(objPagerPara.sortFun);
    }
    arrvSysScoreSummary_Sel = arrvSysScoreSummary_Sel.slice(intStart, intEnd);
    return arrvSysScoreSummary_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vSysScoreSummaryEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvSysScoreSummaryENEx>();
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
export function vSysScoreSummaryEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vSysScoreSummary_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vSysScoreSummary_SortFunByKey(strKey, AscOrDesc);
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
export function vSysScoreSummaryEx_FuncMapByFldName(
  strFldName: string,
  objvSysScoreSummaryEx: clsvSysScoreSummaryENEx,
) {
  const strThisFuncName = vSysScoreSummaryEx_FuncMapByFldName.name;
  console.log(objvSysScoreSummaryEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvSysScoreSummaryEN.AttributeName;
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
export async function vSysScoreSummaryEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return vSysScoreSummary_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 获取论文中的用户数量
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function vSysScoreSummaryEx_GetUserNumObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvSysScoreSummaryEN>> {
  const strThisFuncName = 'GetUserNumObjLstAsync';
  const strAction = 'GetUserNumObjLst';
  const strUrl = vSysScoreSummaryEx_GetWebApiUrl(vSysScoreSummaryEx_Controller, strAction);
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
          vSysScoreSummaryEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vSysScoreSummary_GetObjLstByJSONObjLst(returnObjLst);
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
        vSysScoreSummaryEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vSysScoreSummaryEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
