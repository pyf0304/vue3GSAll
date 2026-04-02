/*-- -- -- -- -- -- -- -- -- -- --
类名:clsqa_AnswerWApi
表名:qa_Answer(01120641)
生成代码版本:2020.09.24.1
生成日期:2020/10/27 15:11:53
生成者:yy
生成服务器IP:192.168.1.10
工程名称:问卷调查
工程ID:0112
相关数据库:103.116.76.183,9433EduHigh_Jsie
PrjDataBaseId:0170
模块中文名:互动管理
模块英文名:InteractManage
框架-层名:WA_访问层(WA_Access)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/

/// <summary>
/// 答疑回答(qa_Answer)
/// (AutoGCLib.WA_Access4TypeScript:GeneCode)
/// </summary>
/**
 * Created by yy on 2020年10月27日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

//import * as QQ from "q";
import axios from 'axios';
import {
  gs_AnswerCount_FilterFunByKey,
  gs_AnswerCount_GetObjLstByJSONObjLst,
  gs_AnswerCount_GetObjLstClientCache,
  gs_AnswerCount_GetObjLstlocalStorage,
  gs_AnswerCount_GetObjLstsessionStorage,
  gs_AnswerCount_GetObjLstAsync,
  gs_AnswerCount_GetObjLstCache,
  gs_AnswerCount_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduTools/clsgs_AnswerCountWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsgs_AnswerCountEN } from '@/ts/L0Entity/GradEduTools/clsgs_AnswerCountEN';
import { CacheHelper } from '@/ts/PubFun/CacheHelper';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Dictionary } from '@/ts/PubFun/tzDictionary';

import { clsgs_AnswerCountENEx } from '@/ts/L0Entity/GradEduTools/clsgs_AnswerCountENEx';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const gs_AnswerCountEx_Controller = 'gs_AnswerCountExApi';
export const gs_AnswerCountEx_ConstructorName = 'gs_AnswerCountEx';

//public static cacheModeId = "02"; //客户端缓存
/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function gs_AnswerCountEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objgs_AnswerCountENS:源对象
 * @returns 目标对象=>clsgs_AnswerCountEN:objgs_AnswerCountENT
 **/
export function gs_AnswerCountEx_CopyToEx(
  objgs_AnswerCountENS: clsgs_AnswerCountEN,
): clsgs_AnswerCountENEx {
  const strThisFuncName = gs_AnswerCountEx_CopyToEx.name;
  const objgs_AnswerCountENT = new clsgs_AnswerCountENEx();
  try {
    ObjectAssign(objgs_AnswerCountENT, objgs_AnswerCountENS);
    return objgs_AnswerCountENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      gs_AnswerCountEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objgs_AnswerCountENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_AnswerCountEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
): Promise<Array<clsgs_AnswerCountENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrgs_AnswerCountObjLst = await gs_AnswerCount_GetObjLstCache(strIdCurrEducls);
  const arrgs_AnswerCountExObjLst = arrgs_AnswerCountObjLst.map(gs_AnswerCountEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrgs_AnswerCountExObjLst) {
      await gs_AnswerCountEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_AnswerCountExObjLst.length == 0) return arrgs_AnswerCountExObjLst;
  let arrgs_AnswerCount_Sel: Array<clsgs_AnswerCountENEx> = arrgs_AnswerCountExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objgs_AnswerCount_Cond = new clsgs_AnswerCountENEx();
  ObjectAssign(objgs_AnswerCount_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsgs_AnswerCountWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_AnswerCount_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrgs_AnswerCount_Sel.length == 0) return arrgs_AnswerCount_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.sort(
        gs_AnswerCountEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.sort(objPagerPara.sortFun);
    }
    arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.slice(intStart, intEnd);
    return arrgs_AnswerCount_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_AnswerCountEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  //return new Array<clsgs_AnswerCountENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function gs_AnswerCountEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsgs_AnswerCountENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrgs_AnswerCountExObjLst = await gs_AnswerCount_GetObjLstAsync(objPagerPara.whereCond);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrgs_AnswerCountExObjLst) {
      await gs_AnswerCountEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrgs_AnswerCountExObjLst.length == 0) return arrgs_AnswerCountExObjLst;
  let arrgs_AnswerCount_Sel: Array<clsgs_AnswerCountENEx> = arrgs_AnswerCountExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.sort(
        gs_AnswerCountEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.sort(objPagerPara.sortFun);
    }
    arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.slice(intStart, intEnd);
    return arrgs_AnswerCount_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      gs_AnswerCountEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  //return new Array<clsgs_AnswerCountENEx>();
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
export function gs_AnswerCountEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return gs_AnswerCount_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return gs_AnswerCount_SortFunByKey(strKey, AscOrDesc);
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
export function gs_AnswerCountEx_FuncMapByFldName(
  strFldName: string,
  objgs_AnswerCountEx: clsgs_AnswerCountENEx,
) {
  const strThisFuncName = gs_AnswerCountEx_FuncMapByFldName.name;
  console.log(objgs_AnswerCountEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsgs_AnswerCountEN.AttributeName;
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
export async function gs_AnswerCountEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return gs_AnswerCount_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 调用WebApi来添加记录，数据传递使用JSON串
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithMaxIdAsync)
/// </summary>
/// <param name = "objgs_AnswerCountEN">需要添加的对象</param>
/// <returns>获取相应的记录的对象</returns>
export async function gs_AnswerCountEx_AddNewRecordWithMaxIdAsync(
  objgs_AnswerCountEN: clsgs_AnswerCountEN,
): Promise<string> {
  const strThisFuncName = '';
  // const strMsg = '';
  const strAction = 'AddNewRecordWithMaxId';
  //strIdCurrEduclsstrJSON = JSON.stringify(objgs_AnswerCountEN_Sim);
  const strUrl = gs_AnswerCountEx_GetWebApiUrl(gs_AnswerCountEx_Controller, strAction);
  try {
    const response = await axios.post(strUrl, objgs_AnswerCountEN);
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
        '网络错误！访问地址:{0}不成功！(in {1}.{2})',
        strUrl,
        gs_AnswerCountEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        gs_AnswerCountEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function gs_AnswerCountEx_GetAnswerCountByTableAsync(
  strIdCurrEduCls: string,
  updUser: string,
): Promise<boolean> {
  const strThisFuncName = '';
  const strAction = 'GetAnswerCountByTable';
  const strUrl = gs_AnswerCountEx_GetWebApiUrl(gs_AnswerCountEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();

  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: {
        strIdCurrEduCls,
        updUser,
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
        gs_AnswerCountEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        gs_AnswerCountEx_Controller,
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
export async function gs_AnswerCountEx_GetObjLstClientCache(strIdCurrEducls: string) {
  //初始化列表缓存
  let strWhereCond = '1=1';

  strWhereCond = `idCurrEduCls='${strIdCurrEducls}'`;
  const strKey = `${clsgs_AnswerCountEN._CurrTabName}_${strIdCurrEducls}`;
  if (strKey == '') {
    console.log('关键字为空！不正确');
    throw new Error('关键字为空！不正确');
  }
  if (CacheHelper.Exsits(strKey)) {
    //缓存存在，直接返回
    const arrgs_AnswerCountObjLst_Cache: Array<clsgs_AnswerCountEN> = CacheHelper.Get(strKey);
    return arrgs_AnswerCountObjLst_Cache;
  }
  try {
    const responseText = await gs_AnswerCountEx_GetAnswerCountNumObjLstAsync(strWhereCond);
    const arrgs_AnswerCountObjLst: Array<clsgs_AnswerCountEN> = <Array<clsgs_AnswerCountEN>>(
      responseText
    );
    CacheHelper.Add(strKey, arrgs_AnswerCountObjLst);
    const strInfo = `Key:[${strKey}]的缓存已经建立，对象列表数：${arrgs_AnswerCountObjLst.length}!`;
    console.log(strInfo);
    return arrgs_AnswerCountObjLst;
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
export async function gs_AnswerCountEx_GetObjLstCache(strIdCurrEducls: string) {
  let arrgs_AnswerCountObjLst_Cache: Array<clsgs_AnswerCountEN>;
  switch (clsgs_AnswerCountEN.CacheModeId) {
    case '04': //sessionStorage
      arrgs_AnswerCountObjLst_Cache = await gs_AnswerCount_GetObjLstsessionStorage(strIdCurrEducls);
      break;
    case '03': //localStorage
      arrgs_AnswerCountObjLst_Cache = await gs_AnswerCount_GetObjLstlocalStorage(strIdCurrEducls);
      break;
    case '02': //ClientCache
      arrgs_AnswerCountObjLst_Cache = await gs_AnswerCount_GetObjLstClientCache(strIdCurrEducls);
      break;
    default:
      arrgs_AnswerCountObjLst_Cache = await gs_AnswerCount_GetObjLstClientCache(strIdCurrEducls);
      break;
  }
  return arrgs_AnswerCountObjLst_Cache;
}
/// <summary>
/// 根据条件对象, 从缓存的对象列表中获取子集.
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetSubObjLstCache)
/// </summary>
/// <param name = "objstrAnswerCountId_Cond">条件对象</param>
/// <returns>对象列表子集</returns>
export async function gs_AnswerCountEx_GetSubObjLstCache(
  objgs_AnswerCount_Cond: clsgs_AnswerCountEN,
  strIdCurrEducls: string,
) {
  const arrgs_AnswerCountObjLst_Cache: Array<clsgs_AnswerCountEN> =
    await gs_AnswerCountEx_GetObjLstCache(strIdCurrEducls);
  let arrgs_AnswerCount_Sel: Array<clsgs_AnswerCountEN> = arrgs_AnswerCountObjLst_Cache;
  if (
    objgs_AnswerCount_Cond.sfFldComparisonOp == null ||
    objgs_AnswerCount_Cond.sfFldComparisonOp == ''
  )
    return arrgs_AnswerCount_Sel;
  const dicFldComparisonOp: { [index: string]: string } = JSON.parse(
    objgs_AnswerCount_Cond.sfFldComparisonOp,
  );
  //console.log("clsgs_AnswerCountWApi->GetSubObjLstCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objgs_AnswerCount_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objgs_AnswerCount_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (strValue == 0) continue;
          if (strComparisonOp == '=') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrgs_AnswerCount_Sel = arrgs_AnswerCount_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    return arrgs_AnswerCount_Sel;
  } catch (e:any) {
    const strMsg = `错误:[${e}]. \n根据条件:[${JSON.stringify(
      objgs_AnswerCount_Cond,
    )}]缓存对象列表中获取子集对象不成功!`;
    throw new Error(strMsg);
  }
  //return new Array<clsgs_AnswerCountEN>();
}

/// <summary>
/// 获取论文中的用户数量
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function gs_AnswerCountEx_GetAnswerCountNumObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_AnswerCountEN>> {
  const strThisFuncName = 'GetAnswerCountNumObjLstAsync';
  const strAction = 'GetAnswerCountNumObjLst';
  const strUrl = gs_AnswerCountEx_GetWebApiUrl(gs_AnswerCountEx_Controller, strAction);
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
          gs_AnswerCountEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_AnswerCount_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_AnswerCountEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        gs_AnswerCountEx_Controller,
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
/// 获取讨论回答的周数量
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function gs_AnswerCountEx_GetWeekAnswerCountNumObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsgs_AnswerCountEN>> {
  const strThisFuncName = 'GetWeekAnswerCountNumObjLstAsync';
  const strAction = 'GetWeekAnswerCountNumObjLst';
  const strUrl = gs_AnswerCountEx_GetWebApiUrl(gs_AnswerCountEx_Controller, strAction);
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
          gs_AnswerCountEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = gs_AnswerCount_GetObjLstByJSONObjLst(returnObjLst);
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
        gs_AnswerCountEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        gs_AnswerCountEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
