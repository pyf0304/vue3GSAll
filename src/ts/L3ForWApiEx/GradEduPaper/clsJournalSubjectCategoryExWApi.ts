/*-- -- -- -- -- -- -- -- -- -- --
类名:clsJournalSubjectCategoryExWApi
表名:JournalSubjectCategory(01120931)
生成代码版本:2021.06.19.1
生成日期:2021/06/20 00:38:48
生成者:pyf
生成服务器IP:103.116.76.183
工程名称:问卷调查
工程ID:0112
相关数据库:103.116.76.183,9433EduHigh_Jsie
PrjDataBaseId:0170
模块中文名:研培论文
模块英文名:GradEduPaper
框架-层名:WA_访问扩展层(WA_AccessEx)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/

/// <summary>
/// 期刊学科门类(JournalSubjectCategory)
/// (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
/// </summary>
/**
 * Created by pyf on 2021年06月20日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

//import * as QQ from "q";
import axios from 'axios';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  JournalSubjectCategory_FilterFunByKey,
  JournalSubjectCategory_GetObjLstAsync,
  JournalSubjectCategory_GetObjLstCache,
  JournalSubjectCategory_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduPaper/clsJournalSubjectCategoryWApi';
import { clsJournalSubjectCategoryEN } from '@/ts/L0Entity/GradEduPaper/clsJournalSubjectCategoryEN';
import { clsJournalSubjectCategoryENEx } from '@/ts/L0Entity/GradEduPaper/clsJournalSubjectCategoryENEx';
import { Dictionary } from '@/ts/PubFun/tzDictionary';

import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const journalSubjectCategoryEx_Controller = 'JournalSubjectCategoryExApi';
export const journalSubjectCategoryEx_ConstructorName = 'journalSubjectCategoryEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function JournalSubjectCategoryEx_GetWebApiUrl(
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
 * @param objJournalSubjectCategoryENS:源对象
 * @returns 目标对象=>clsJournalSubjectCategoryEN:objJournalSubjectCategoryENT
 **/
export function JournalSubjectCategoryEx_CopyToEx(
  objJournalSubjectCategoryENS: clsJournalSubjectCategoryEN,
): clsJournalSubjectCategoryENEx {
  const strThisFuncName = JournalSubjectCategoryEx_CopyToEx.name;
  const objJournalSubjectCategoryENT = new clsJournalSubjectCategoryENEx();
  try {
    ObjectAssign(objJournalSubjectCategoryENT, objJournalSubjectCategoryENS);
    return objJournalSubjectCategoryENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      journalSubjectCategoryEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objJournalSubjectCategoryENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function JournalSubjectCategoryEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsJournalSubjectCategoryENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrJournalSubjectCategoryObjLst = await JournalSubjectCategory_GetObjLstCache();
  const arrJournalSubjectCategoryExObjLst = arrJournalSubjectCategoryObjLst.map(
    JournalSubjectCategoryEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsJournalSubjectCategoryEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrJournalSubjectCategoryExObjLst) {
      await JournalSubjectCategoryEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrJournalSubjectCategoryExObjLst.length == 0) return arrJournalSubjectCategoryExObjLst;
  let arrJournalSubjectCategorySel: Array<clsJournalSubjectCategoryENEx> =
    arrJournalSubjectCategoryExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objJournalSubjectCategoryCond = new clsJournalSubjectCategoryENEx();
  ObjectAssign(objJournalSubjectCategoryCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsJournalSubjectCategoryWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objJournalSubjectCategoryCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrJournalSubjectCategorySel.length == 0) return arrJournalSubjectCategorySel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.sort(
        JournalSubjectCategoryEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.sort(objPagerPara.sortFun);
    }
    arrJournalSubjectCategorySel = arrJournalSubjectCategorySel.slice(intStart, intEnd);
    return arrJournalSubjectCategorySel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      journalSubjectCategoryEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsJournalSubjectCategoryENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function JournalSubjectCategoryEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsJournalSubjectCategoryENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrJournalSubjectCategoryObjLst = await JournalSubjectCategory_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const arrJournalSubjectCategoryExObjLst = arrJournalSubjectCategoryObjLst.map(
    JournalSubjectCategoryEx_CopyToEx,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrJournalSubjectCategoryExObjLst) {
      await JournalSubjectCategoryEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrJournalSubjectCategoryExObjLst.length == 0) return arrJournalSubjectCategoryExObjLst;
  let arrJournalSubjectCategory_Sel: Array<clsJournalSubjectCategoryENEx> =
    arrJournalSubjectCategoryExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrJournalSubjectCategory_Sel = arrJournalSubjectCategory_Sel.sort(
        JournalSubjectCategoryEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrJournalSubjectCategory_Sel = arrJournalSubjectCategory_Sel.sort(objPagerPara.sortFun);
    }
    arrJournalSubjectCategory_Sel = arrJournalSubjectCategory_Sel.slice(intStart, intEnd);
    return arrJournalSubjectCategory_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      journalSubjectCategoryEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsJournalSubjectCategoryENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2022-11-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function JournalSubjectCategoryEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return JournalSubjectCategory_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return JournalSubjectCategory_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2022-11-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function JournalSubjectCategoryEx_FuncMapByFldName(
  strFldName: string,
  objJournalSubjectCategoryEx: clsJournalSubjectCategoryENEx,
) {
  const strThisFuncName = JournalSubjectCategoryEx_FuncMapByFldName.name;
  console.log(objJournalSubjectCategoryEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsJournalSubjectCategoryEN.AttributeName;
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
 * 日期:2022-11-05
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function JournalSubjectCategoryEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return JournalSubjectCategory_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 导入Excel数据
/// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
/// </summary>
/// <param name = "strCsv">Csv格式的Excel数据</param>
/// <param name = "strUserId">用户Id</param>
/// <returns>获取的相应对象列表</returns>
export async function JournalSubjectCategoryEx_ImportDataFromCsv(
  strCsv: string,
  strUserId: string,
): Promise<number> {
  const strThisFuncName = '';
  const strAction = 'ImportDataFromCsv';
  const strUrl = JournalSubjectCategoryEx_GetWebApiUrl(
    journalSubjectCategoryEx_Controller,
    strAction,
  );
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
        journalSubjectCategoryEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        journalSubjectCategoryEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
