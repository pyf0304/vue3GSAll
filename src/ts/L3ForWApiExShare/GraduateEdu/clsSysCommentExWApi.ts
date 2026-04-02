/*-- -- -- -- -- -- -- -- -- -- --
类名:clsSysCommentWApi
表名:SysComment(01120622)
生成代码版本:2020.04.08.1
生成日期:2020/04/16 19:58:06
生成者:
生成服务器IP:192.168.1.10
工程名称:问卷调查
工程ID:0112
相关数据库:tzar.tpddns.cn,19433EduHigh_Jsie
PrjDataBaseId:0122
模块中文名:研究生培养
模块英文名:GraduateEdu
框架-层名:WA_访问层(WA_Access)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == ==
*/
//import * as QQ from "q";
import axios from 'axios';
import { clsSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsSysCommentEN';

import { clsSysScoreSummaryEN } from '@/ts/L0Entity/GradEduTools/clsSysScoreSummaryEN';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Dictionary } from '@/ts/PubFun/tzDictionary';

import { clsSysCommentENEx } from '@/ts/L0Entity/GradEduTools/clsSysCommentENEx';
import {
  SysComment_FilterFunByKey,
  SysComment_GetObjLstAsync,
  SysComment_GetObjLstCache,
  SysComment_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduTools/clsSysCommentWApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const sysCommentEx_Controller = 'SysCommentExApi';
export const sysCommentEx_ConstructorName = 'sysCommentEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function SysCommentEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objSysCommentENS:源对象
 * @returns 目标对象=>clsSysCommentEN:objSysCommentENT
 **/
export function SysCommentEx_CopyToEx(objSysCommentENS: clsSysCommentEN): clsSysCommentENEx {
  const strThisFuncName = SysCommentEx_CopyToEx.name;
  const objSysCommentENT = new clsSysCommentENEx();
  try {
    ObjectAssign(objSysCommentENT, objSysCommentENS);
    return objSysCommentENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      sysCommentEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objSysCommentENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function SysCommentEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
): Promise<Array<clsSysCommentENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrSysCommentObjLst = await SysComment_GetObjLstCache(strIdCurrEducls);
  const arrSysCommentExObjLst = arrSysCommentObjLst.map(SysCommentEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrSysCommentExObjLst) {
      await SysCommentEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrSysCommentExObjLst.length == 0) return arrSysCommentExObjLst;
  let arrSysComment_Sel: Array<clsSysCommentENEx> = arrSysCommentExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objSysComment_Cond = new clsSysCommentENEx();
  ObjectAssign(objSysComment_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsSysCommentWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrSysComment_Sel = arrSysComment_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objSysComment_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrSysComment_Sel = arrSysComment_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrSysComment_Sel = arrSysComment_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrSysComment_Sel = arrSysComment_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrSysComment_Sel = arrSysComment_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrSysComment_Sel = arrSysComment_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrSysComment_Sel = arrSysComment_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrSysComment_Sel = arrSysComment_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrSysComment_Sel = arrSysComment_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrSysComment_Sel = arrSysComment_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrSysComment_Sel.length == 0) return arrSysComment_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSysComment_Sel = arrSysComment_Sel.sort(
        SysCommentEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrSysComment_Sel = arrSysComment_Sel.sort(objPagerPara.sortFun);
    }
    arrSysComment_Sel = arrSysComment_Sel.slice(intStart, intEnd);
    return arrSysComment_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sysCommentEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSysCommentENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function SysCommentEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsSysCommentENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrSysCommentExObjLst = await SysComment_GetObjLstAsync(objPagerPara.whereCond);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrSysCommentExObjLst) {
      await SysCommentEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrSysCommentExObjLst.length == 0) return arrSysCommentExObjLst;
  let arrSysComment_Sel: Array<clsSysCommentENEx> = arrSysCommentExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrSysComment_Sel = arrSysComment_Sel.sort(
        SysCommentEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrSysComment_Sel = arrSysComment_Sel.sort(objPagerPara.sortFun);
    }
    arrSysComment_Sel = arrSysComment_Sel.slice(intStart, intEnd);
    return arrSysComment_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      sysCommentEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsSysCommentENEx>();
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
export function SysCommentEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return SysComment_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return SysComment_SortFunByKey(strKey, AscOrDesc);
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
export function SysCommentEx_FuncMapByFldName(
  strFldName: string,
  objSysCommentEx: clsSysCommentENEx,
) {
  const strThisFuncName = SysCommentEx_FuncMapByFldName.name;
  console.log(objSysCommentEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsSysCommentEN.AttributeName;
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
export async function SysCommentEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // let strMsg = '';
  switch (strKey) {
    default:
      return SysComment_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 调用WebApi来添加记录，数据传递使用JSON串
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
/// </summary>
/// <param name = "objSysCommentEN">需要添加的对象</param>
/// <returns>获取相应的记录的对象</returns>
export async function SysCommentEx_AddNewRecordExAsync(
  objSysCommentEN: clsSysCommentEN,
): Promise<boolean> {
  const strThisFuncName = '';

  const strAction = 'AddNewRecordEx';
  //if (objSysCommentEN.commentId === null || objSysCommentEN.commentId === "") {
  //    strMsg = "需要的对象的关键字为空，不能添加!";
  //    throw strMsg;
  //}
  //strIdCurrEduclsstrJSON = JSON.stringify(objSysCommentEN_Sim);
  const strUrl = SysCommentEx_GetWebApiUrl(sysCommentEx_Controller, strAction);
  try {
    const response = await axios.post(strUrl, objSysCommentEN);
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
        sysCommentEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sysCommentEx_Controller,
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
/// 根据条件获取相应的记录对象列表
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>返回的第一条记录的关键字值</returns>
export async function SysCommentEx_GetTotalRevalidationAsync(TeaUserId: string): Promise<boolean> {
  const strThisFuncName = '';
  const strAction = 'GetStuTotalRevalidation';
  const strUrl = SysCommentEx_GetWebApiUrl(sysCommentEx_Controller, strAction);

  try {
    const response = await axios.get(strUrl, {
      params: { updUserId: TeaUserId },
    });
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
        sysCommentEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sysCommentEx_Controller,
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
/// 调用WebApi来删除记录
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
/// </summary>
/// <param name = "strCommentId">关键字</param>
/// <returns>获取删除的结果</returns>
export async function SysCommentEx_DelRecordAsync(strCommentId: string): Promise<number> {
  const strThisFuncName = '';
  const strAction = 'DelRecordEx';
  let strUrl = SysCommentEx_GetWebApiUrl(sysCommentEx_Controller, strAction);
  
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strCommentId', strCommentId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  strUrl = Format('{0}?Id={1}', strUrl, strCommentId);
  try {
    const response = await axios.delete(strUrl);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        sysCommentEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sysCommentEx_Controller,
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
/// 修改评论内的教学班周
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>是否存在记录？</returns>
export async function SysCommentEx_UpdateCommentWeekAsync(
  strIdCurrEduCls: string,
  updUser: string,
): Promise<boolean> {
  const strThisFuncName = '';
  const strAction = 'UpdateCommentWeek';
  const strUrl = SysCommentEx_GetWebApiUrl(sysCommentEx_Controller, strAction);

  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: {
        strIdCurrEduCls,
        strUpdUser: updUser,
      },
    });
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
        sysCommentEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sysCommentEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

//教师操作 评论、讨论打分 添加 或修改； PageType 判断添加、修改； scoreTypeId 判断是讨论 ，还是评价、updUserId操作人；
export async function SysCommentEx_AddOrUpdateSysScoreSummaryAsync(
  objSysScoreSummaryEN: clsSysScoreSummaryEN,
): Promise<boolean> {
  const strThisFuncName = '';

  const strAction = 'AddOrUpdateSysScoreSummary';
  //if (objSysCommentEN.commentId === null || objSysCommentEN.commentId === "") {
  //    strMsg = "需要的对象的关键字为空，不能添加!";
  //    throw strMsg;
  //}
  //strIdCurrEduclsstrJSON = JSON.stringify(objSysCommentEN_Sim);
  const strUrl = SysCommentEx_GetWebApiUrl(sysCommentEx_Controller, strAction);
  try {
    const response = await axios.post(strUrl, objSysScoreSummaryEN);
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
        sysCommentEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sysCommentEx_Controller,
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
/// 刷新缓存.把当前表的缓存以及该表相关视图的缓存清空.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshCache)
/// </summary>
export function SysCommentEx_ReFreshCache(): void {
  const strMsg = `刷新缓存成功！(${clsStackTrace.GetCurrClassFunctionByLevel(
    3,
  )}->${clsStackTrace.GetCurrClassFunctionByLevel(2)}->${clsStackTrace.GetCurrClassFunction()})`;
  console.log(strMsg);
  // 静态的对象列表,用于清空相关缓存,针对记录较少,作为参数表可以使用
  const strKey: string = clsSysCommentEN._CurrTabName;
  switch (clsSysCommentEN.CacheModeId) {
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
}

/// <summary>
/// 刷新本类中的缓存.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_ReFreshThisCache)
/// </summary>
export function SysCommentEx_ReFreshThisCache(): void {
  let strMsg = '';
  if (clsSysPara4WebApi.spSetRefreshCacheOn == true) {
    const strKey: string = clsSysCommentEN._CurrTabName;
    switch (clsSysCommentEN.CacheModeId) {
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
    (strMsg = `刷新缓存成功！(${clsStackTrace.GetCurrClassFunctionByLevel(
      3,
    )}->${clsStackTrace.GetCurrClassFunctionByLevel(2)}->${clsStackTrace.GetCurrClassFunction()})`),
      console.log(strMsg);
  } else {
    strMsg = `刷新缓存已经关闭。(clsSysPara4WebApi.spSetRefreshCacheOn == false)(${clsStackTrace.GetCurrClassFunctionByLevel(
      3,
    )}->${clsStackTrace.GetCurrClassFunctionByLevel(2)}->${clsStackTrace.GetCurrClassFunction()})`;
    console.log(strMsg);
  }
}
