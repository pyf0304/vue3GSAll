/// (AutoGCLib.WA_Access4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2019年12月25日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

//import * as QQ from "q";
import axios from 'axios';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsgs_TobeStudiedProblemEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TobeStudiedProblemEN';
import { clsgs_TobeStudiedProblemENEx } from '@/ts/L0Entity/GradEduTopic/clsgs_TobeStudiedProblemENEx';
import {
  gs_TobeStudiedProblem_FilterFunByKey,
  gs_TobeStudiedProblem_GetObjLstAsync,
  gs_TobeStudiedProblem_GetObjLstByJSONObjLst,
  gs_TobeStudiedProblem_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_TobeStudiedProblemWApi';
import { Dictionary } from '@/ts/PubFun/tzDictionary';

import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const gs_TobeStudiedProblemEx_Controller = 'gs_TobeStudiedProblemExApi';
export const gs_TobeStudiedProblemEx_ConstructorName = 'gs_TobeStudiedProblemEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function gs_TobeStudiedProblemEx_GetWebApiUrl(
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
 * @param objgs_TobeStudiedProblemENS:源对象
 * @returns 目标对象=>clsgs_TobeStudiedProblemEN:objgs_TobeStudiedProblemENT
 **/
export function gs_TobeStudiedProblemEx_CopyToEx(
  objgs_TobeStudiedProblemENS: clsgs_TobeStudiedProblemEN,
): clsgs_TobeStudiedProblemENEx {
  const strThisFuncName = gs_TobeStudiedProblemEx_CopyToEx.name;
  const objgs_TobeStudiedProblemENT = new clsgs_TobeStudiedProblemENEx();
  try {
    ObjectAssign(objgs_TobeStudiedProblemENT, objgs_TobeStudiedProblemENS);
    return objgs_TobeStudiedProblemENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_TobeStudiedProblemEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objgs_TobeStudiedProblemENT;
  }
}
//该表在前台TypeScript中，不需要使用Cache;

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_TobeStudiedProblemEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_TobeStudiedProblemENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrgs_TobeStudiedProblemExObjLst = await gs_TobeStudiedProblem_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrgs_TobeStudiedProblemExObjLst) {
      await gs_TobeStudiedProblemEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_TobeStudiedProblemExObjLst.length == 0) return arrgs_TobeStudiedProblemExObjLst;
  let arrgs_TobeStudiedProblem_Sel: Array<clsgs_TobeStudiedProblemENEx> =
    arrgs_TobeStudiedProblemExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_TobeStudiedProblem_Sel = arrgs_TobeStudiedProblem_Sel.sort(
        gs_TobeStudiedProblemEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrgs_TobeStudiedProblem_Sel = arrgs_TobeStudiedProblem_Sel.sort(objPagerPara.sortFun);
    }
    arrgs_TobeStudiedProblem_Sel = arrgs_TobeStudiedProblem_Sel.slice(intStart, intEnd);
    return arrgs_TobeStudiedProblem_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_TobeStudiedProblemEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsgs_TobeStudiedProblemENEx>();
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
export function gs_TobeStudiedProblemEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return gs_TobeStudiedProblem_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return gs_TobeStudiedProblem_SortFunByKey(strKey, AscOrDesc);
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
export function gs_TobeStudiedProblemEx_FuncMapByFldName(
  strFldName: string,
  objgs_TobeStudiedProblemEx: clsgs_TobeStudiedProblemENEx,
) {
  const strThisFuncName = gs_TobeStudiedProblemEx_FuncMapByFldName.name;
  console.log(objgs_TobeStudiedProblemEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsgs_TobeStudiedProblemEN.AttributeName;
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
export async function gs_TobeStudiedProblemEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return gs_TobeStudiedProblem_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 获取会议年数量
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function gs_TobeStudiedProblemEx_GetProblemYearNumObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_TobeStudiedProblemEN>> {
  const strThisFuncName = 'GetProblemYearNumObjLstAsync';
  const strAction = 'GetProblemYearNumObjLst';
  const strUrl = gs_TobeStudiedProblemEx_GetWebApiUrl(
    gs_TobeStudiedProblemEx_Controller,
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
          gs_TobeStudiedProblemEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TobeStudiedProblem_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TobeStudiedProblemEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblemEx_Controller,
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
/// 获取会议月份数量
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function gs_TobeStudiedProblemEx_GetProblemMonthNumObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_TobeStudiedProblemEN>> {
  const strThisFuncName = 'GetProblemMonthNumObjLstAsync';
  const strAction = 'GetProblemMonthNumObjLst';
  const strUrl = gs_TobeStudiedProblemEx_GetWebApiUrl(
    gs_TobeStudiedProblemEx_Controller,
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
          gs_TobeStudiedProblemEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TobeStudiedProblem_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TobeStudiedProblemEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblemEx_Controller,
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
/// 获取会议日期数量
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function gs_TobeStudiedProblemEx_GetProblemDateNumObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_TobeStudiedProblemEN>> {
  const strThisFuncName = 'GetProblemDateNumObjLstAsync';
  const strAction = 'GetProblemDateNumObjLst';
  const strUrl = gs_TobeStudiedProblemEx_GetWebApiUrl(
    gs_TobeStudiedProblemEx_Controller,
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
          gs_TobeStudiedProblemEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_TobeStudiedProblem_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_TobeStudiedProblemEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        gs_TobeStudiedProblemEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
