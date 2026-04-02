/*-- -- -- -- -- -- -- -- -- -- --
类名:clsgs_KnowledgesLogicRelaExWApi
表名:gs_KnowledgesLogicRela(01120870)
生成代码版本:2021.01.26.1
生成日期:2021/01/26 23:47:45
生成者:lyl
生成服务器IP:103.116.76.183
工程名称:问卷调查
工程ID:0112
相关数据库:103.116.76.183,9433EduHigh_Jsie
PrjDataBaseId:0170
模块中文名:知识点相关
模块英文名:Knowledges
框架-层名:WA_访问扩展层(WA_AccessEx)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/

/// <summary>
/// 知识点逻辑关系表(gs_KnowledgesLogicRela)
/// (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
/// </summary>
/**
 * Created by lyl on 2021年01月26日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

import axios from 'axios';
//import * as QQ from "q";
import { clsgs_KnowledgesLogicRelaEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicRelaEN';

import { clsgs_KnowledgesLogicRelaENEx } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesLogicRelaENEx';
import {
  gs_KnowledgesLogicRela_FilterFunByKey,
  gs_KnowledgesLogicRela_GetObjLstAsync,
  gs_KnowledgesLogicRela_GetObjLstCache,
  gs_KnowledgesLogicRela_SortFunByKey,
} from '@/ts/L3ForWApi/Knowledges/clsgs_KnowledgesLogicRelaWApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const gs_KnowledgesLogicRelaEx_Controller = 'gs_KnowledgesLogicRelaExApi';
export const gs_KnowledgesLogicRelaEx_ConstructorName = 'gs_KnowledgesLogicRelaEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function gs_KnowledgesLogicRelaEx_GetWebApiUrl(
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
 * @param objgs_KnowledgesLogicRelaENS:源对象
 * @returns 目标对象=>clsgs_KnowledgesLogicRelaEN:objgs_KnowledgesLogicRelaENT
 **/
export function gs_KnowledgesLogicRelaEx_CopyToEx(
  objgs_KnowledgesLogicRelaENS: clsgs_KnowledgesLogicRelaEN,
): clsgs_KnowledgesLogicRelaENEx {
  const strThisFuncName = gs_KnowledgesLogicRelaEx_CopyToEx.name;
  const objgs_KnowledgesLogicRelaENT = new clsgs_KnowledgesLogicRelaENEx();
  try {
    ObjectAssign(objgs_KnowledgesLogicRelaENT, objgs_KnowledgesLogicRelaENS);
    return objgs_KnowledgesLogicRelaENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_KnowledgesLogicRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objgs_KnowledgesLogicRelaENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_KnowledgesLogicRelaEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strKnowledgeGraphId: string,
): Promise<Array<clsgs_KnowledgesLogicRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrgs_KnowledgesLogicRelaObjLst = await gs_KnowledgesLogicRela_GetObjLstCache(
    strKnowledgeGraphId,
  );
  const arrgs_KnowledgesLogicRelaExObjLst = arrgs_KnowledgesLogicRelaObjLst.map(
    gs_KnowledgesLogicRelaEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrgs_KnowledgesLogicRelaExObjLst) {
      await gs_KnowledgesLogicRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_KnowledgesLogicRelaExObjLst.length == 0) return arrgs_KnowledgesLogicRelaExObjLst;
  let arrgs_KnowledgesLogicRela_Sel: Array<clsgs_KnowledgesLogicRelaENEx> =
    arrgs_KnowledgesLogicRelaExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objgs_KnowledgesLogicRela_Cond = new clsgs_KnowledgesLogicRelaENEx();
  ObjectAssign(objgs_KnowledgesLogicRela_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsgs_KnowledgesLogicRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_KnowledgesLogicRela_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_KnowledgesLogicRela_Sel.length == 0) return arrgs_KnowledgesLogicRela_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.sort(
        gs_KnowledgesLogicRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.sort(objPagerPara.sortFun);
    }
    arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.slice(intStart, intEnd);
    return arrgs_KnowledgesLogicRela_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_KnowledgesLogicRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_KnowledgesLogicRelaENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_KnowledgesLogicRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_KnowledgesLogicRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrgs_KnowledgesLogicRelaObjLst = await gs_KnowledgesLogicRela_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrgs_KnowledgesLogicRelaExObjLst = arrgs_KnowledgesLogicRelaObjLst.map(
    gs_KnowledgesLogicRelaEx_CopyToEx,
  );

  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrgs_KnowledgesLogicRelaExObjLst) {
      await gs_KnowledgesLogicRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_KnowledgesLogicRelaExObjLst.length == 0) return arrgs_KnowledgesLogicRelaExObjLst;
  let arrgs_KnowledgesLogicRela_Sel: Array<clsgs_KnowledgesLogicRelaENEx> =
    arrgs_KnowledgesLogicRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.sort(
        gs_KnowledgesLogicRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.sort(objPagerPara.sortFun);
    }
    arrgs_KnowledgesLogicRela_Sel = arrgs_KnowledgesLogicRela_Sel.slice(intStart, intEnd);
    return arrgs_KnowledgesLogicRela_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_KnowledgesLogicRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_KnowledgesLogicRelaENEx>();
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
export function gs_KnowledgesLogicRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return gs_KnowledgesLogicRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return gs_KnowledgesLogicRela_SortFunByKey(strKey, AscOrDesc);
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
export function gs_KnowledgesLogicRelaEx_FuncMapByFldName(
  strFldName: string,
  objgs_KnowledgesLogicRelaEx: clsgs_KnowledgesLogicRelaENEx,
) {
  const strThisFuncName = gs_KnowledgesLogicRelaEx_FuncMapByFldName.name;
  console.log(objgs_KnowledgesLogicRelaEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsgs_KnowledgesLogicRelaEN.AttributeName;
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
export async function gs_KnowledgesLogicRelaEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return gs_KnowledgesLogicRela_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 调用WebApi来添加记录，数据传递使用JSON串
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
/// </summary>
/// <param name = "objgs_UserRelaEN">需要添加的对象</param>
/// <returns>获取相应的记录的对象</returns>
//public static AddNewRecordAsync(arrgs_UserRelaPosition :Array<clsgs_UserRelaPositionEN>): Promise<boolean> {
export async function gs_KnowledgesLogicRelaEx_AddNewRecordAsync(
  strJSON: string,
): Promise<boolean> {
  const strThisFuncName = '';

  const strAction = 'AddNewRecord';

  const strUrl = gs_KnowledgesLogicRelaEx_GetWebApiUrl(
    gs_KnowledgesLogicRelaEx_Controller,
    strAction,
  );
  try {
    const response = await axios.post(strUrl, strJSON);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRelaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        gs_KnowledgesLogicRelaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
