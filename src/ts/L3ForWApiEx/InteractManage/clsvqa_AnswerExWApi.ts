/// <summary>
/// 论文读写表(qa_Answer)
/// (AutoGCLib.WA_Access4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2020年01月02日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

//import * as QQ from "q";
import axios from 'axios';
import { clsvqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsvqa_AnswerEN';
import { Dictionary } from '@/ts/PubFun/tzDictionary';

import { clsvqa_AnswerENEx } from '@/ts/L0Entity/InteractManage/clsvqa_AnswerENEx';
import {
  vqa_Answer_FilterFunByKey,
  vqa_Answer_GetObjLstAsync,
  vqa_Answer_GetObjLstByJSONObjLst,
  vqa_Answer_GetObjLstCache,
  vqa_Answer_SortFunByKey,
} from '@/ts/L3ForWApi/InteractManage/clsvqa_AnswerWApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const vqa_AnswerEx_Controller = 'vqa_AnswerExApi';
export const vqa_AnswerEx_ConstructorName = 'vqa_AnswerEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vqa_AnswerEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvqa_AnswerENS:源对象
 * @returns 目标对象=>clsvqa_AnswerEN:objvqa_AnswerENT
 **/
export function vqa_AnswerEx_CopyToEx(objvqa_AnswerENS: clsvqa_AnswerEN): clsvqa_AnswerENEx {
  const strThisFuncName = vqa_AnswerEx_CopyToEx.name;
  const objvqa_AnswerENT = new clsvqa_AnswerENEx();
  try {
    ObjectAssign(objvqa_AnswerENT, objvqa_AnswerENS);
    return objvqa_AnswerENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vqa_AnswerEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvqa_AnswerENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vqa_AnswerEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strTopicId: string,
): Promise<Array<clsvqa_AnswerENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrvqa_AnswerObjLst = await vqa_Answer_GetObjLstCache(strTopicId);
  const arrvqa_AnswerExObjLst = arrvqa_AnswerObjLst.map(vqa_AnswerEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvqa_AnswerExObjLst) {
      await vqa_AnswerEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvqa_AnswerExObjLst.length == 0) return arrvqa_AnswerExObjLst;
  let arrvqa_Answer_Sel: Array<clsvqa_AnswerENEx> = arrvqa_AnswerExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objvqa_Answer_Cond = new clsvqa_AnswerENEx();
  ObjectAssign(objvqa_Answer_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsvqa_AnswerWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvqa_Answer_Sel = arrvqa_Answer_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvqa_Answer_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvqa_Answer_Sel = arrvqa_Answer_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvqa_Answer_Sel = arrvqa_Answer_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrvqa_Answer_Sel = arrvqa_Answer_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvqa_Answer_Sel = arrvqa_Answer_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvqa_Answer_Sel = arrvqa_Answer_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvqa_Answer_Sel = arrvqa_Answer_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvqa_Answer_Sel = arrvqa_Answer_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvqa_Answer_Sel = arrvqa_Answer_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvqa_Answer_Sel = arrvqa_Answer_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvqa_Answer_Sel.length == 0) return arrvqa_Answer_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvqa_Answer_Sel = arrvqa_Answer_Sel.sort(
        vqa_AnswerEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvqa_Answer_Sel = arrvqa_Answer_Sel.sort(objPagerPara.sortFun);
    }
    arrvqa_Answer_Sel = arrvqa_Answer_Sel.slice(intStart, intEnd);
    return arrvqa_Answer_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vqa_AnswerEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvqa_AnswerENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vqa_AnswerEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvqa_AnswerENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvqa_AnswerExObjLst = await vqa_Answer_GetObjLstAsync(objPagerPara.whereCond);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvqa_AnswerExObjLst) {
      await vqa_AnswerEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvqa_AnswerExObjLst.length == 0) return arrvqa_AnswerExObjLst;
  let arrvqa_Answer_Sel: Array<clsvqa_AnswerENEx> = arrvqa_AnswerExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvqa_Answer_Sel = arrvqa_Answer_Sel.sort(
        vqa_AnswerEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvqa_Answer_Sel = arrvqa_Answer_Sel.sort(objPagerPara.sortFun);
    }
    arrvqa_Answer_Sel = arrvqa_Answer_Sel.slice(intStart, intEnd);
    return arrvqa_Answer_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vqa_AnswerEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvqa_AnswerENEx>();
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
export function vqa_AnswerEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vqa_Answer_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vqa_Answer_SortFunByKey(strKey, AscOrDesc);
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
export function vqa_AnswerEx_FuncMapByFldName(
  strFldName: string,
  objvqa_AnswerEx: clsvqa_AnswerENEx,
) {
  const strThisFuncName = vqa_AnswerEx_FuncMapByFldName.name;
  console.log(objvqa_AnswerEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvqa_AnswerEN.AttributeName;
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
export async function vqa_AnswerEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return vqa_Answer_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 获取论文中的用户数量
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function vqa_AnswerEx_Getvqa_AnswerTopicIdNumObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvqa_AnswerEN>> {
  const strThisFuncName = 'AnswerTopicIdNumObjLstAsync';
  const strAction = 'Getvqa_AnswerTopicIdNumObjLst';
  const strUrl = vqa_AnswerEx_GetWebApiUrl(vqa_AnswerEx_Controller, strAction);
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
          vqa_AnswerEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vqa_Answer_GetObjLstByJSONObjLst(returnObjLst);
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
        vqa_AnswerEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vqa_AnswerEx_Controller,
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
/// 获取论文中的用户数量
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function vqa_AnswerEx_Getvqa_AnswerUserNumObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvqa_AnswerEN>> {
  const strThisFuncName = 'Getvqa_AnswerUserNumObjLstAsync';
  const strAction = 'Getvqa_AnswerUserNumObjLst';
  const strUrl = vqa_AnswerEx_GetWebApiUrl(vqa_AnswerEx_Controller, strAction);
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
          vqa_AnswerEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vqa_Answer_GetObjLstByJSONObjLst(returnObjLst);
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
        vqa_AnswerEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vqa_AnswerEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
