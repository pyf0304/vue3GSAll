/// <summary>
/// 子观点表(PaperSubViewpoint)
/// (AutoGCLib.WA_Access4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2020年01月15日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

//import * as QQ from "q";
import axios from 'axios';
import { clsPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubViewpointEN';
import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { clsPaperSubViewpointENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperSubViewpointENEx';
import {
  PaperSubViewpoint_FilterFunByKey,
  PaperSubViewpoint_GetObjLstAsync,
  PaperSubViewpoint_GetObjLstCache,
  PaperSubViewpoint_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubViewpointWApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const paperSubViewpointEx_Controller = 'PaperSubViewpointExApi';
export const paperSubViewpointEx_ConstructorName = 'paperSubViewpointEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function PaperSubViewpointEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objPaperSubViewpointENS:源对象
 * @returns 目标对象=>clsPaperSubViewpointEN:objPaperSubViewpointENT
 **/
export function PaperSubViewpointEx_CopyToEx(
  objPaperSubViewpointENS: clsPaperSubViewpointEN,
): clsPaperSubViewpointENEx {
  const strThisFuncName = PaperSubViewpointEx_CopyToEx.name;
  const objPaperSubViewpointENT = new clsPaperSubViewpointENEx();
  try {
    ObjectAssign(objPaperSubViewpointENT, objPaperSubViewpointENS);
    return objPaperSubViewpointENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      paperSubViewpointEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objPaperSubViewpointENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PaperSubViewpointEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
): Promise<Array<clsPaperSubViewpointENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrPaperSubViewpointObjLst = await PaperSubViewpoint_GetObjLstCache(strIdCurrEducls);
  const arrPaperSubViewpointExObjLst = arrPaperSubViewpointObjLst.map(PaperSubViewpointEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrPaperSubViewpointExObjLst) {
      await PaperSubViewpointEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrPaperSubViewpointExObjLst.length == 0) return arrPaperSubViewpointExObjLst;
  let arrPaperSubViewpoint_Sel: Array<clsPaperSubViewpointENEx> = arrPaperSubViewpointExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objPaperSubViewpoint_Cond = new clsPaperSubViewpointENEx();
  ObjectAssign(objPaperSubViewpoint_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsPaperSubViewpointWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.filter(
        (x) => x.GetFldValue(strKey) != null,
      );
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objPaperSubViewpoint_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrPaperSubViewpoint_Sel.length == 0) return arrPaperSubViewpoint_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.sort(
        PaperSubViewpointEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.sort(objPagerPara.sortFun);
    }
    arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.slice(intStart, intEnd);
    return arrPaperSubViewpoint_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      paperSubViewpointEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperSubViewpointENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function PaperSubViewpointEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsPaperSubViewpointENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrPaperSubViewpointExObjLst = await PaperSubViewpoint_GetObjLstAsync(
    objPagerPara.whereCond,
  );
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrPaperSubViewpointExObjLst) {
      await PaperSubViewpointEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrPaperSubViewpointExObjLst.length == 0) return arrPaperSubViewpointExObjLst;
  let arrPaperSubViewpoint_Sel: Array<clsPaperSubViewpointENEx> = arrPaperSubViewpointExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.sort(
        PaperSubViewpointEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.sort(objPagerPara.sortFun);
    }
    arrPaperSubViewpoint_Sel = arrPaperSubViewpoint_Sel.slice(intStart, intEnd);
    return arrPaperSubViewpoint_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      paperSubViewpointEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsPaperSubViewpointENEx>();
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
export function PaperSubViewpointEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return PaperSubViewpoint_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return PaperSubViewpoint_SortFunByKey(strKey, AscOrDesc);
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
export function PaperSubViewpointEx_FuncMapByFldName(
  strFldName: string,
  objPaperSubViewpointEx: clsPaperSubViewpointENEx,
) {
  const strThisFuncName = PaperSubViewpointEx_FuncMapByFldName.name;
  console.log(objPaperSubViewpointEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsPaperSubViewpointEN.AttributeName;
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
export async function PaperSubViewpointEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // let strMsg = '';
  switch (strKey) {
    default:
      return PaperSubViewpoint_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 调用WebApi来添加记录，数据传递使用JSON串
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
/// </summary>
/// <param name = "objPaperSubViewpointEN">需要添加的对象</param>
/// <returns>获取相应的记录的对象</returns>
export async function PaperSubViewpointEx_AddNewRecordAsyncEx(
  objPaperSubViewpointEN: clsPaperSubViewpointEN,
): Promise<boolean> {
  const strThisFuncName = '';
  // const strMsg = '';
  const strAction = 'AddNewRecordEx';
  console.error('AddNewRecordAsyncEx');
  //strIdCurrEduclsstrJSON = JSON.stringify(objPaperSubViewpointEN_Sim);
  const strUrl = PaperSubViewpointEx_GetWebApiUrl(paperSubViewpointEx_Controller, strAction);
  try {
    const response = await axios.post(strUrl, objPaperSubViewpointEN);
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
        paperSubViewpointEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        paperSubViewpointEx_Controller,
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
/// 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字)
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
/// </summary>
/// <param name = "objPaperSubViewpointEN">需要添加的表对象</param>
/// <returns>返回新添加记录的关键字</returns>
export async function PaperSubViewpointEx_AddNewRecordWithReturnKeyAsyncEx(
  objPaperSubViewpointEN: clsPaperSubViewpointEN,
): Promise<string> {
  const strThisFuncName = '';
  const strAction = 'AddNewRecordWithReturnKeyEx';
  // console.error('AddNewRecordWithReturnKeyAsyncEx');
  //if (objPaperSubViewpointEN.subViewpointId === null || objPaperSubViewpointEN.subViewpointId === 0)
  //{
  //strIdCurrEduclsstrMsg = "需要的对象的关键字为空，不能添加!";
  //throw new Error(strMsg);
  //}
  const strUrl = PaperSubViewpointEx_GetWebApiUrl(paperSubViewpointEx_Controller, strAction);
  try {
    const response = await axios.post(strUrl, objPaperSubViewpointEN);
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
        paperSubViewpointEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        paperSubViewpointEx_Controller,
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
/// 调用WebApi来修改记录，数据传递使用JSON串
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
/// </summary>
/// <param name = "objPaperSubViewpointEN">需要添加的对象</param>
/// <returns>获取修改是否成功？</returns>
export async function PaperSubViewpointEx_UpdateRecordAsyncEx(
  objPaperSubViewpointEN: clsPaperSubViewpointEN,
): Promise<boolean> {
  const strThisFuncName = '';
  let strMsg = '';
  const strAction = 'UpdateRecordEx';
  if (
    objPaperSubViewpointEN.sfUpdFldSetStr === null ||
    objPaperSubViewpointEN.sfUpdFldSetStr === ''
  ) {
    strMsg = `对象(关键字: ${objPaperSubViewpointEN.subViewpointId})的【修改字段集】为空，不能修改!`;
    throw strMsg;
  }
  const strUrl = PaperSubViewpointEx_GetWebApiUrl(paperSubViewpointEx_Controller, strAction);
  try {
    const response = await axios.post(strUrl, objPaperSubViewpointEN);
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
        paperSubViewpointEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        paperSubViewpointEx_Controller,
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
/// <param name = "lngSubViewpointId">关键字</param>
/// <returns>获取删除的结果</returns>
export async function PaperSubViewpointEx_DelRecordAsyncEx(
  strSubViewpointId: number,
): Promise<number> {
  const strThisFuncName = '';
  const strAction = 'DelRecordEx';
  let strUrl = PaperSubViewpointEx_GetWebApiUrl(paperSubViewpointEx_Controller, strAction);
  
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strSubViewpointId', strSubViewpointId);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  strUrl = Format('{0}?Id={1}', strUrl, strSubViewpointId);
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
        paperSubViewpointEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        paperSubViewpointEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
