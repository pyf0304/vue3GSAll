import axios from 'axios';
import {
  vViewpoint_FilterFunByKey,
  vViewpoint_GetObjLstAsync,
  vViewpoint_GetObjLstByJSONObjLst,
  vViewpoint_GetObjLstCache,
  vViewpoint_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduTopic/clsvViewpointWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsvViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvViewpointEN';

import { clsvViewpointENEx } from '@/ts/L0Entity/GradEduTopic/clsvViewpointENEx';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

export const vViewpointEx_Controller = 'vViewpointExApi';
export const vViewpointEx_ConstructorName = 'vViewpointEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vViewpointEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvViewpointENS:源对象
 * @returns 目标对象=>clsvViewpointEN:objvViewpointENT
 **/
export function vViewpointEx_CopyToEx(objvViewpointENS: clsvViewpointEN): clsvViewpointENEx {
  const strThisFuncName = vViewpointEx_CopyToEx.name;
  const objvViewpointENT = new clsvViewpointENEx();
  try {
    ObjectAssign(objvViewpointENT, objvViewpointENS);
    return objvViewpointENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vViewpointEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvViewpointENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vViewpointEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
): Promise<Array<clsvViewpointENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrvViewpointObjLst = await vViewpoint_GetObjLstCache(strIdCurrEducls);
  const arrvViewpointExObjLst = arrvViewpointObjLst.map(vViewpointEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvViewpointExObjLst) {
      await vViewpointEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvViewpointExObjLst.length == 0) return arrvViewpointExObjLst;
  let arrvViewpoint_Sel: Array<clsvViewpointENEx> = arrvViewpointExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objvViewpoint_Cond = new clsvViewpointENEx();
  ObjectAssign(objvViewpoint_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsvViewpointWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvViewpoint_Sel = arrvViewpoint_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvViewpoint_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvViewpoint_Sel = arrvViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvViewpoint_Sel = arrvViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrvViewpoint_Sel = arrvViewpoint_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvViewpoint_Sel = arrvViewpoint_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvViewpoint_Sel = arrvViewpoint_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvViewpoint_Sel = arrvViewpoint_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvViewpoint_Sel = arrvViewpoint_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvViewpoint_Sel = arrvViewpoint_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvViewpoint_Sel = arrvViewpoint_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvViewpoint_Sel.length == 0) return arrvViewpoint_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvViewpoint_Sel = arrvViewpoint_Sel.sort(
        vViewpointEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvViewpoint_Sel = arrvViewpoint_Sel.sort(objPagerPara.sortFun);
    }
    arrvViewpoint_Sel = arrvViewpoint_Sel.slice(intStart, intEnd);
    return arrvViewpoint_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vViewpointEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvViewpointENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vViewpointEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvViewpointENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvViewpointObjLst = await vViewpoint_GetObjLstAsync(objPagerPara.whereCond);
  const arrvViewpointExObjLst = arrvViewpointObjLst.map(vViewpointEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvViewpointExObjLst) {
      await vViewpointEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvViewpointExObjLst.length == 0) return arrvViewpointExObjLst;
  let arrvViewpoint_Sel: Array<clsvViewpointENEx> = arrvViewpointExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvViewpoint_Sel = arrvViewpoint_Sel.sort(
        vViewpointEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvViewpoint_Sel = arrvViewpoint_Sel.sort(objPagerPara.sortFun);
    }
    arrvViewpoint_Sel = arrvViewpoint_Sel.slice(intStart, intEnd);
    return arrvViewpoint_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vViewpointEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvViewpointENEx>();
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
export function vViewpointEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vViewpoint_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vViewpoint_SortFunByKey(strKey, AscOrDesc);
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
export function vViewpointEx_FuncMapByFldName(
  strFldName: string,
  objvViewpointEx: clsvViewpointENEx,
) {
  const strThisFuncName = vViewpointEx_FuncMapByFldName.name;
  console.log(objvViewpointEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvViewpointEN.AttributeName;
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
export async function vViewpointEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return vViewpoint_FilterFunByKey(strKey, value);
  }
}

export async function vViewpointEx_GetAllVNumObjLstAsync(
  strPaperId: string,
): Promise<Array<clsvViewpointEN>> {
  const strThisFuncName = 'GetAllVNumObjLstAsync';
  const strAction = 'GetAllVNumObjLst';
  const strUrl = vViewpointEx_GetWebApiUrl(vViewpointEx_Controller, strAction);

  try {
    const response = await axios.get(strUrl, {
      params: { strPaperId },
    });
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          vViewpointEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vViewpoint_GetObjLstByJSONObjLst(returnObjLst);
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
        vViewpointEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vViewpointEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
