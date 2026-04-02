import axios from 'axios';
import { clsRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaEN';

import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { clsRTUserRelaENEx } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaENEx';
import { clsgs_ColorEN } from '@/ts/L0Entity/RT_Params/clsgs_ColorEN';
import { clsTopicUserRoleEN } from '@/ts/L0Entity/RT_Params/clsTopicUserRoleEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { XzClg_func } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { XzMajor_func } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import {
  RTUserRela_AddNewRecordAsync,
  RTUserRela_FilterFunByKey,
  RTUserRela_GetFirstObjAsync,
  RTUserRela_GetObjLstAsync,
  RTUserRela_GetObjLstCache,
  RTUserRela_ReFreshCache,
  RTUserRela_SortFunByKey,
  RTUserRela_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTUserRelaWApi';
import { gs_Color_func } from '@/ts/L3ForWApi/RT_Params/clsgs_ColorWApi';
import { TopicUserRole_func } from '@/ts/L3ForWApi/RT_Params/clsTopicUserRoleWApi';

import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { vUsersSimEx_func } from '@/ts/L3ForWApiExShare/UserManage_GP/clsvUsersSimExWApi';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
export const rTUserRelaEx_Controller = 'RTUserRelaExApi';
export const rTUserRelaEx_ConstructorName = 'rTUserRelaEx';
//public static cacheModeId = "05"; //未知
/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function RTUserRelaEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objRTUserRelaENS:源对象
 * @returns 目标对象=>clsRTUserRelaEN:objRTUserRelaENT
 **/
export function RTUserRelaEx_CopyToEx(objRTUserRelaENS: clsRTUserRelaEN): clsRTUserRelaENEx {
  const strThisFuncName = RTUserRelaEx_CopyToEx.name;
  const objRTUserRelaENT = new clsRTUserRelaENEx();
  try {
    ObjectAssign(objRTUserRelaENT, objRTUserRelaENS);
    return objRTUserRelaENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      rTUserRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objRTUserRelaENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function RTUserRelaEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strTopicId: string,
): Promise<Array<clsRTUserRelaENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrRTUserRelaObjLst = await RTUserRelaEx_GetObjLstByTopicId(strTopicId);
  const arrRTUserRelaExObjLst = arrRTUserRelaObjLst.map(RTUserRelaEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrRTUserRelaExObjLst) {
      await RTUserRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrRTUserRelaExObjLst.length == 0) return arrRTUserRelaExObjLst;
  let arrRTUserRela_Sel: Array<clsRTUserRelaENEx> = arrRTUserRelaExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objRTUserRela_Cond = new clsRTUserRelaENEx();
  ObjectAssign(objRTUserRela_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsRTUserRelaWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrRTUserRela_Sel = arrRTUserRela_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objRTUserRela_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrRTUserRela_Sel = arrRTUserRela_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrRTUserRela_Sel = arrRTUserRela_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrRTUserRela_Sel = arrRTUserRela_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrRTUserRela_Sel = arrRTUserRela_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrRTUserRela_Sel = arrRTUserRela_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrRTUserRela_Sel = arrRTUserRela_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrRTUserRela_Sel = arrRTUserRela_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrRTUserRela_Sel = arrRTUserRela_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrRTUserRela_Sel = arrRTUserRela_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrRTUserRela_Sel.length == 0) return arrRTUserRela_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrRTUserRela_Sel = arrRTUserRela_Sel.sort(
        RTUserRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrRTUserRela_Sel = arrRTUserRela_Sel.sort(objPagerPara.sortFun);
    }
    arrRTUserRela_Sel = arrRTUserRela_Sel.slice(intStart, intEnd);
    return arrRTUserRela_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      rTUserRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRTUserRelaENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function RTUserRelaEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsRTUserRelaENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrRTUserRelaObjLst = await RTUserRela_GetObjLstAsync(objPagerPara.whereCond);
  const arrRTUserRelaExObjLst = arrRTUserRelaObjLst.map(RTUserRelaEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrRTUserRelaExObjLst) {
      await RTUserRelaEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrRTUserRelaExObjLst.length == 0) return arrRTUserRelaExObjLst;
  let arrRTUserRela_Sel: Array<clsRTUserRelaENEx> = arrRTUserRelaExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrRTUserRela_Sel = arrRTUserRela_Sel.sort(
        RTUserRelaEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrRTUserRela_Sel = arrRTUserRela_Sel.sort(objPagerPara.sortFun);
    }
    arrRTUserRela_Sel = arrRTUserRela_Sel.slice(intStart, intEnd);
    return arrRTUserRela_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      rTUserRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsRTUserRelaENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function RTUserRelaEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsRTUserRelaENEx.con_ColorCode:
        return (a: clsRTUserRelaENEx, b: clsRTUserRelaENEx) => {
          return a.colorCode.localeCompare(b.colorCode);
        };
      case clsRTUserRelaENEx.con_CollegeName:
        return (a: clsRTUserRelaENEx, b: clsRTUserRelaENEx) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsRTUserRelaENEx.con_UserName:
        return (a: clsRTUserRelaENEx, b: clsRTUserRelaENEx) => {
          return a.userName.localeCompare(b.userName);
        };
      case clsRTUserRelaENEx.con_MajorName:
        return (a: clsRTUserRelaENEx, b: clsRTUserRelaENEx) => {
          return a.majorName.localeCompare(b.majorName);
        };
      case clsRTUserRelaENEx.con_TopicUserRoleName:
        return (a: clsRTUserRelaENEx, b: clsRTUserRelaENEx) => {
          return a.topicUserRoleName.localeCompare(b.topicUserRoleName);
        };
      default:
        return RTUserRela_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsRTUserRelaENEx.con_ColorCode:
        return (a: clsRTUserRelaENEx, b: clsRTUserRelaENEx) => {
          return b.colorCode.localeCompare(a.colorCode);
        };
      case clsRTUserRelaENEx.con_CollegeName:
        return (a: clsRTUserRelaENEx, b: clsRTUserRelaENEx) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsRTUserRelaENEx.con_UserName:
        return (a: clsRTUserRelaENEx, b: clsRTUserRelaENEx) => {
          return b.userName.localeCompare(a.userName);
        };
      case clsRTUserRelaENEx.con_MajorName:
        return (a: clsRTUserRelaENEx, b: clsRTUserRelaENEx) => {
          return b.majorName.localeCompare(a.majorName);
        };
      case clsRTUserRelaENEx.con_TopicUserRoleName:
        return (a: clsRTUserRelaENEx, b: clsRTUserRelaENEx) => {
          return b.topicUserRoleName.localeCompare(a.topicUserRoleName);
        };
      default:
        return RTUserRela_SortFunByKey(strKey, AscOrDesc);
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
export function RTUserRelaEx_FuncMapByFldName(
  strFldName: string,
  objRTUserRelaEx: clsRTUserRelaENEx,
) {
  const strThisFuncName = RTUserRelaEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsRTUserRelaEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsRTUserRelaENEx.con_ColorCode:
      return RTUserRelaEx_FuncMap_ColorCode(objRTUserRelaEx);
    case clsRTUserRelaENEx.con_CollegeName:
      return RTUserRelaEx_FuncMap_CollegeName(objRTUserRelaEx);
    case clsRTUserRelaENEx.con_UserName:
      return RTUserRelaEx_FuncMap_UserName(objRTUserRelaEx);
    case clsRTUserRelaENEx.con_MajorName:
      return RTUserRelaEx_FuncMap_MajorName(objRTUserRelaEx);
    case clsRTUserRelaENEx.con_TopicUserRoleName:
      return RTUserRelaEx_FuncMap_TopicUserRoleName(objRTUserRelaEx);
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
export async function RTUserRelaEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return RTUserRela_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 根据条件获取相应的记录对象列表
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>返回的第一条记录的关键字值</returns>
export async function RTUserRelaEx_UpdateTypeTableHtmlAsync(
  OldCodeColor: string,
  NewCodeColor: string,
  userId: string,
): Promise<boolean> {
  const strThisFuncName = '';
  const strAction = 'UpdateTypeTableHtml';
  const strUrl = RTUserRelaEx_GetWebApiUrl(rTUserRelaEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();

  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  try {
    const response = await axios.get(strUrl, {
      params: {
        OldCodeColor,
        NewCodeColor,
        userId,
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
        rTUserRelaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        rTUserRelaEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objRTUserRelaS:源对象
 **/
export async function RTUserRelaEx_FuncMap_ColorCode(objRTUserRela: clsRTUserRelaENEx) {
  const strThisFuncName = RTUserRelaEx_FuncMap_ColorCode.name;
  try {
    if (IsNullOrEmpty(objRTUserRela.colorCode) == true) {
      const gs_Color_ColorId = objRTUserRela.colorId;
      const gs_Color_ColorCode = await gs_Color_func(
        clsgs_ColorEN.con_ColorId,
        clsgs_ColorEN.con_ColorCode,
        gs_Color_ColorId,
      );
      objRTUserRela.colorCode = gs_Color_ColorCode;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000274)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      rTUserRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objRTUserRelaS:源对象
 **/
export async function RTUserRelaEx_FuncMap_CollegeName(objRTUserRela: clsRTUserRelaENEx) {
  const strThisFuncName = RTUserRelaEx_FuncMap_CollegeName.name;
  try {
    if (IsNullOrEmpty(objRTUserRela.collegeName) == true) {
      const vUsersSim_UserId = objRTUserRela.userId;
      const vUsersSim_idXzCollege = await vUsersSimEx_func(
        clsvUsersSimEN.con_UserId,
        clsvUsersSimEN.con_IdXzCollege,
        vUsersSim_UserId,
      );
      const XzClg_idXzCollege = vUsersSim_idXzCollege;
      const XzClg_CollegeName = await XzClg_func(
        clsXzClgEN.con_IdXzCollege,
        clsXzClgEN.con_CollegeName,
        XzClg_idXzCollege,
        clsSysPara4WebApi.spIdSchool,
      );
      objRTUserRela.collegeName = XzClg_CollegeName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000214)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      rTUserRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objRTUserRelaS:源对象
 **/
export async function RTUserRelaEx_FuncMap_UserName(objRTUserRela: clsRTUserRelaENEx) {
  const strThisFuncName = RTUserRelaEx_FuncMap_UserName.name;
  try {
    if (IsNullOrEmpty(objRTUserRela.userName) == true) {
      const vUsersSim_UserId = objRTUserRela.userId;
      const vUsersSim_UserName = await vUsersSimEx_func(
        clsvUsersSimEN.con_UserId,
        clsvUsersSimEN.con_UserName,
        vUsersSim_UserId,
      );
      objRTUserRela.userName = vUsersSim_UserName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000166)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      rTUserRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objRTUserRelaS:源对象
 **/
export async function RTUserRelaEx_FuncMap_MajorName(objRTUserRela: clsRTUserRelaENEx) {
  const strThisFuncName = RTUserRelaEx_FuncMap_MajorName.name;
  try {
    if (IsNullOrEmpty(objRTUserRela.majorName) == true) {
      const vUsersSim_UserId = objRTUserRela.userId;
      const vUsersSim_idXzMajor = await vQxUsersSimStore.getIdXzMajor(
        vUsersSim_UserId,
        clsSysPara4WebApi.currSelPrjId,
      );
      if (vUsersSim_idXzMajor == '') {
        objRTUserRela.majorName = '';
        return;
      }

      const XzMajor_idXzMajor = vUsersSim_idXzMajor;
      const XzMajor_MajorName = await XzMajor_func(
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        XzMajor_idXzMajor,
      );
      objRTUserRela.majorName = XzMajor_MajorName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000204)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      rTUserRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objRTUserRelaS:源对象
 **/
export async function RTUserRelaEx_FuncMap_TopicUserRoleName(objRTUserRela: clsRTUserRelaENEx) {
  const strThisFuncName = RTUserRelaEx_FuncMap_TopicUserRoleName.name;
  try {
    if (IsNullOrEmpty(objRTUserRela.topicUserRoleName) == true) {
      const TopicUserRole_TopicUserRoleId = objRTUserRela.topicUserRoleId;
      const TopicUserRole_TopicUserRoleName = await TopicUserRole_func(
        clsTopicUserRoleEN.con_TopicUserRoleId,
        clsTopicUserRoleEN.con_TopicUserRoleName,
        TopicUserRole_TopicUserRoleId,
      );
      objRTUserRela.topicUserRoleName = TopicUserRole_TopicUserRoleName;
    }
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000275)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      rTUserRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function RTUserRelaEx_AddUserId(
  strTopicId: string,
  strUserId: string,
  strTopicUserRoleId: string,
  strIdCurrEduCls: string,
) {
  // const strThisFuncName = 'RTUserRelaEx_AddUserId';
  // const strMsg = '';
  const obj = new clsRTUserRelaEN();
  obj.topicId = strTopicId;
  obj.topicUserRoleId = strTopicUserRoleId;
  obj.idCurrEduCls = strIdCurrEduCls;

  obj.userId = strUserId;
  obj.updUser = strUserId;
  obj.updDate = clsDateTime.getTodayDateTimeStr(0);
  try {
    const bolIsResult = await RTUserRela_AddNewRecordAsync(obj);
    if (bolIsResult == true) {
      RTUserRela_ReFreshCache(strTopicId);
    }
  } catch (e: any) {
    console.error(e);
  }
}

export async function RTUserRelaEx_UpdateLastVisitedDate(
  strTopicId: string,
  strUserId: string,
): Promise<boolean> {
  const strThisFuncName = RTUserRelaEx_UpdateLastVisitedDate.name;

  const arr = await RTUserRela_GetObjLstCache(strUserId);
  const objRTUserRela = arr.find((x) => x.topicId == strTopicId);

  if (objRTUserRela == null) {
    const strMsg = Format(
      '根据TopicId:[{0}], UserId:[{1}]获取相应的记录的对象为空.(in {2}.{3})',
      strTopicId,
      strUserId,
      rTUserRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return false;
  }

  objRTUserRela.SetLastVisitedDate(clsDateTime.getTodayDateTimeStr(0));
  objRTUserRela.SetmId(objRTUserRela.mId);
  const bolIsSuccess = await RTUserRela_UpdateRecordAsync(objRTUserRela);
  RTUserRela_ReFreshCache(strUserId);
  return bolIsSuccess;
}

export async function RTUserRelaEx_GetLastVisitedDate(
  strTopicId: string,
  strUserId: string,
): Promise<string> {
  const strThisFuncName = RTUserRelaEx_GetLastVisitedDate.name;

  const arr = await RTUserRela_GetObjLstCache(strUserId);
  const objRTUserRela = arr.find((x) => x.topicId == strTopicId);
  if (objRTUserRela == null) {
    const strMsg = Format(
      '根据TopicId:[{0}], UserId:[{1}]获取相应的记录的对象为空.(in {2}.{3})',
      strTopicId,
      strUserId,
      rTUserRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    // alert(strMsg);
    return '';
  }
  return objRTUserRela.lastVisitedDate;
}

export async function RTUserRelaEx_GetTopicIdLstByUserId(
  strUserId: string,
): Promise<Array<string>> {
  // const strThisFuncName = RTUserRelaEx_GetTopicIdLstByUserId.name;

  const arr = await RTUserRela_GetObjLstCache(strUserId);
  const arrTopicId = arr.map((x) => x.topicId);
  return arrTopicId;
}

export async function RTUserRelaEx_GetObjLstByTopicId(
  strTopicId: string,
): Promise<Array<clsRTUserRelaEN>> {
  // const strThisFuncName = RTUserRelaEx_GetTopicIdLstByUserId.name;
  const strWhere = `${clsRTUserRelaEN.con_TopicId} = '${strTopicId}'`;
  const arrRTUserRela = await RTUserRela_GetObjLstAsync(strWhere);

  return arrRTUserRela;
}

export async function RTUserRelaEx_GetObjByTopicIdAndUserId(
  strTopicId: string,
  strUserId: string,
): Promise<clsRTUserRelaEN | null> {
  const strThisFuncName = RTUserRelaEx_GetObjByTopicIdAndUserId.name;

  const arr = await RTUserRela_GetObjLstCache(strUserId);
  const objRTUserRela = arr.find((x) => x.topicId == strTopicId);
  if (objRTUserRela == null) {
    const strMsg = Format(
      '根据TopicId:[{0}], UserId:[{1}]获取相应的记录的对象为空.(in {2}.{3})',
      strTopicId,
      strUserId,
      rTUserRelaEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    // alert(strMsg);
    return null;
  }
  return objRTUserRela;
}
