/// <summary>
/// 期刊学科(JournalSubject)
/// (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
/// </summary>
/**
 * Created by pyf on 2021年06月20日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

import axios from 'axios';
//import * as QQ from "q";
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  JournalSubject_FilterFunByKey,
  JournalSubject_GetObjLstAsync,
  JournalSubject_GetObjLstCache,
  JournalSubject_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduPaper/clsJournalSubjectWApi';
import { clsJournalSubjectEN } from '@/ts/L0Entity/GradEduPaper/clsJournalSubjectEN';
import { clsJournalSubjectENEx } from '@/ts/L0Entity/GradEduPaper/clsJournalSubjectENEx';
import { Dictionary } from '@/ts/PubFun/tzDictionary';
//import * as QQ from "q";

import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsJournalSubjectCategoryEN } from '@/ts/L0Entity/GradEduPaper/clsJournalSubjectCategoryEN';
import { JournalSubjectCategory_func } from '@/ts/L3ForWApi/GradEduPaper/clsJournalSubjectCategoryWApi';
export const journalSubjectEx_Controller = 'JournalSubjectExApi';
export const journalSubjectEx_ConstructorName = 'journalSubjectEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function JournalSubjectEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objJournalSubjectENS:源对象
 * @returns 目标对象=>clsJournalSubjectEN:objJournalSubjectENT
 **/
export function JournalSubjectEx_CopyToEx(
  objJournalSubjectENS: clsJournalSubjectEN,
): clsJournalSubjectENEx {
  const strThisFuncName = JournalSubjectEx_CopyToEx.name;
  const objJournalSubjectENT = new clsJournalSubjectENEx();
  try {
    ObjectAssign(objJournalSubjectENT, objJournalSubjectENS);
    return objJournalSubjectENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      journalSubjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objJournalSubjectENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function JournalSubjectEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsJournalSubjectENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrJournalSubjectObjLst = await JournalSubject_GetObjLstCache();
  const arrJournalSubjectExObjLst = arrJournalSubjectObjLst.map(JournalSubjectEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrJournalSubjectExObjLst) {
      await JournalSubjectEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrJournalSubjectExObjLst.length == 0) return arrJournalSubjectExObjLst;
  let arrJournalSubject_Sel: Array<clsJournalSubjectENEx> = arrJournalSubjectExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objJournalSubject_Cond = new clsJournalSubjectENEx();
  ObjectAssign(objJournalSubject_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsJournalSubjectWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrJournalSubject_Sel = arrJournalSubject_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objJournalSubject_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrJournalSubject_Sel = arrJournalSubject_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrJournalSubject_Sel = arrJournalSubject_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrJournalSubject_Sel = arrJournalSubject_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrJournalSubject_Sel = arrJournalSubject_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrJournalSubject_Sel = arrJournalSubject_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrJournalSubject_Sel = arrJournalSubject_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrJournalSubject_Sel = arrJournalSubject_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrJournalSubject_Sel = arrJournalSubject_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrJournalSubject_Sel = arrJournalSubject_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrJournalSubject_Sel.length == 0) return arrJournalSubject_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrJournalSubject_Sel = arrJournalSubject_Sel.sort(
        JournalSubjectEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrJournalSubject_Sel = arrJournalSubject_Sel.sort(objPagerPara.sortFun);
    }
    arrJournalSubject_Sel = arrJournalSubject_Sel.slice(intStart, intEnd);
    return arrJournalSubject_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      journalSubjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsJournalSubjectENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function JournalSubjectEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsJournalSubjectENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrJournalSubjectObjLst = await JournalSubject_GetObjLstAsync(objPagerPara.whereCond);
  const arrJournalSubjectExObjLst = arrJournalSubjectObjLst.map(JournalSubjectEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrJournalSubjectExObjLst) {
      await JournalSubjectEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrJournalSubjectExObjLst.length == 0) return arrJournalSubjectExObjLst;
  let arrJournalSubject_Sel: Array<clsJournalSubjectENEx> = arrJournalSubjectExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrJournalSubject_Sel = arrJournalSubject_Sel.sort(
        JournalSubjectEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrJournalSubject_Sel = arrJournalSubject_Sel.sort(objPagerPara.sortFun);
    }
    arrJournalSubject_Sel = arrJournalSubject_Sel.slice(intStart, intEnd);
    return arrJournalSubject_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      journalSubjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsJournalSubjectENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-03
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function JournalSubjectEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsJournalSubjectENEx.con_JournalSubjectCategoryName:
        return (a: clsJournalSubjectENEx, b: clsJournalSubjectENEx) => {
          return a.journalSubjectCategoryName.localeCompare(b.journalSubjectCategoryName);
        };
      default:
        return JournalSubject_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsJournalSubjectENEx.con_JournalSubjectCategoryName:
        return (a: clsJournalSubjectENEx, b: clsJournalSubjectENEx) => {
          return b.journalSubjectCategoryName.localeCompare(a.journalSubjectCategoryName);
        };
      default:
        return JournalSubject_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function JournalSubjectEx_FuncMapByFldName(
  strFldName: string,
  objJournalSubjectEx: clsJournalSubjectENEx,
) {
  const strThisFuncName = JournalSubjectEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsJournalSubjectEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsJournalSubjectENEx.con_JournalSubjectCategoryName:
      return JournalSubjectEx_FuncMapJournalSubjectCategoryName(objJournalSubjectEx);
    default:
      strMsg = Format(
        '扩展字段:[{0}]在字段值函数映射中不存在!(in {1})',
        strFldName,
        strThisFuncName,
      );
      console.error(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objJournalSubjectS:源对象
 **/
export async function JournalSubjectEx_FuncMapJournalSubjectCategoryName(
  objJournalSubject: clsJournalSubjectENEx,
) {
  const strThisFuncName = JournalSubjectEx_FuncMapJournalSubjectCategoryName.name;
  try {
    if (IsNullOrEmpty(objJournalSubject.journalSubjectCategoryName) == true) {
      const JournalSubjectCategoryJournalSubjectCategoryId =
        objJournalSubject.journalSubjectCategoryId;
      const JournalSubjectCategoryJournalSubjectCategoryName = await JournalSubjectCategory_func(
        clsJournalSubjectCategoryEN.con_JournalSubjectCategoryId,
        clsJournalSubjectCategoryEN.con_JournalSubjectCategoryName,
        JournalSubjectCategoryJournalSubjectCategoryId,
      );
      objJournalSubject.journalSubjectCategoryName =
        JournalSubjectCategoryJournalSubjectCategoryName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000446)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      journalSubjectEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2022-11-03
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function JournalSubjectEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    case clsJournalSubjectENEx.con_JournalSubjectCategoryName:
      return (obj: clsJournalSubjectENEx) => {
        return obj.journalSubjectCategoryName === value;
      };
    default:
      return JournalSubject_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 导入Excel数据
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strCsv">Csv格式的Excel数据</param>
/// <param name = "strUserId">用户Id</param>
/// <returns>获取的相应对象列表</returns>
export async function JournalSubjectEx_ImportDataFromCsv(
  strCsv: string,
  strUserId: string,
): Promise<number> {
  const strThisFuncName = '';
  const strAction = 'ImportDataFromCsv';
  const strUrl = JournalSubjectEx_GetWebApiUrl(journalSubjectEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strCsv', strCsv);
  mapParam.add('strUserId', strUserId);
  // const objExcelData: stuExcelData = {
  //   Csv: strCsv,
  //   userId: strUserId,
  //   Id_Grade: '',
  //   bolRound: false,
  // };
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: {
        strCsv,
        strUserId,
      },
    });
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
        journalSubjectEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        journalSubjectEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
