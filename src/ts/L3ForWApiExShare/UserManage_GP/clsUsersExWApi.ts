//import * as QQ from "q";
import { Storage } from '@/utils/Storage';
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import { clsUsersENEx } from '@/ts/L0Entity/UserManage/clsUsersENEx';
import {
  Users_FilterFunByKey,
  Users_GetObjLstAsync,
  Users_GetObjLstCache,
  Users_SortFunByKey,
} from '@/ts/L3ForWApi/UserManage/clsUsersWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { stuRangePara } from '@/ts/PubFun/stuRangePara';
import { stuTopPara } from '@/ts/PubFun/stuTopPara';
import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { GetObjKeys, GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { XzClg_func } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { clsXzClgEN } from '@/ts/L0Entity/UserManage/clsXzClgEN';
import { XzMajor_func } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { UserState_func } from '@/ts/L3ForWApi/SysPara/clsUserStateWApi';
import { clsUserStateEN } from '@/ts/L0Entity/SysPara/clsUserStateEN';
import { XzGradeBase_func } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { clsXzGradeBaseEN } from '@/ts/L0Entity/SysPara/clsXzGradeBaseEN';

import { userRoleRelationStore } from '@/store/modulesShare/qxUserRoleRelation';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsQxUserIdentityEN } from '@/ts/L0Entity/UserManage/clsQxUserIdentityEN';
import { QxUserIdentity_func } from '@/ts/L3ForWApi/UserManage/clsQxUserIdentityWApi';

export const usersEx_Controller = 'UsersExApi';
export const usersEx_ConstructorName = 'usersEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function UsersEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objUsersENS:源对象
 * @returns 目标对象=>clsUsersEN:objUsersENT
 **/
export function UsersEx_CopyToEx(objUsersENS: clsUsersEN): clsUsersENEx {
  const strThisFuncName = UsersEx_CopyToEx.name;
  const objUsersENT = new clsUsersENEx();
  try {
    ObjectAssign(objUsersENT, objUsersENS);
    return objUsersENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objUsersENT;
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
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function UsersEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUsersENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrUsersObjLst = await Users_GetObjLstAsync(objPagerPara.whereCond);
  const arrUsersExObjLst = arrUsersObjLst.map(UsersEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsUsersEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrUsersExObjLst) {
      await UsersEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrUsersExObjLst.length == 0) return arrUsersExObjLst;
  let arrUsersSel: Array<clsUsersENEx> = arrUsersExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUsersSel = arrUsersSel.sort(UsersEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrUsersSel = arrUsersSel.sort(objPagerPara.sortFun);
    }
    arrUsersSel = arrUsersSel.slice(intStart, intEnd);
    return arrUsersSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUsersENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function UsersEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUsersENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrUsersObjLst = await Users_GetObjLstCache();
  const arrUsersExObjLst = arrUsersObjLst.map(UsersEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsUsersEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrUsersExObjLst) {
      await UsersEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrUsersExObjLst.length == 0) return arrUsersExObjLst;
  let arrUsersSel: Array<clsUsersENEx> = arrUsersExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objUsersCond = new clsUsersENEx();
  ObjectAssign(objUsersCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsUsersWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objUsersCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrUsersSel = arrUsersSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrUsersSel = arrUsersSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrUsersSel = arrUsersSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrUsersSel.length == 0) return arrUsersSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrUsersSel = arrUsersSel.sort(UsersEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrUsersSel = arrUsersSel.sort(objPagerPara.sortFun);
    }
    arrUsersSel = arrUsersSel.slice(intStart, intEnd);
    return arrUsersSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsUsersENEx>();
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
export function UsersEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsUsersENEx.con_CollegeName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return a.collegeName.localeCompare(b.collegeName);
        };
      case clsUsersENEx.con_MajorName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return a.majorName.localeCompare(b.majorName);
        };
      case clsUsersENEx.con_UserStateName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return a.userStateName.localeCompare(b.userStateName);
        };
      case clsUsersENEx.con_GradeBaseName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return a.gradeBaseName.localeCompare(b.gradeBaseName);
        };
      case clsUsersENEx.con_IdentityDesc:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return a.identityDesc.localeCompare(b.identityDesc);
        };
      case clsUsersENEx.con_RoleNames:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return a.roleNames.localeCompare(b.roleNames);
        };

      case clsUsersENEx.con_DateTimeSim:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
        };
      default:
        return Users_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsUsersENEx.con_CollegeName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return b.collegeName.localeCompare(a.collegeName);
        };
      case clsUsersENEx.con_MajorName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return b.majorName.localeCompare(a.majorName);
        };
      case clsUsersENEx.con_UserStateName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return b.userStateName.localeCompare(a.userStateName);
        };
      case clsUsersENEx.con_GradeBaseName:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return b.gradeBaseName.localeCompare(a.gradeBaseName);
        };
      case clsUsersENEx.con_IdentityDesc:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return b.identityDesc.localeCompare(a.identityDesc);
        };
      case clsUsersENEx.con_RoleNames:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return b.roleNames.localeCompare(a.roleNames);
        };
      case clsUsersENEx.con_DateTimeSim:
        return (a: clsUsersENEx, b: clsUsersENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      default:
        return Users_SortFunByKey(strKey, AscOrDesc);
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

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:潘以锋
 * 日期:00-00-00
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function UsersEx_FuncMapByFldName(strFldName: string, objUsersEx: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsUsersEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsUsersENEx.con_CollegeName:
      return UsersEx_FuncMapCollegeName(objUsersEx);
    case clsUsersENEx.con_MajorName:
      return UsersEx_FuncMapMajorName(objUsersEx);
    case clsUsersENEx.con_UserStateName:
      return UsersEx_FuncMapUserStateName(objUsersEx);
    case clsUsersENEx.con_GradeBaseName:
      return UsersEx_FuncMapGradeBaseName(objUsersEx);
    case clsUsersENEx.con_IdentityDesc:
      return UsersEx_FuncMapIdentityDesc(objUsersEx);
    case clsUsersENEx.con_RoleNames:
      return UsersEx_FuncMapRoleNames(objUsersEx);
    case clsUsersENEx.con_DateTimeSim:
      return UsersEx_FuncMapDateTimeSim(objUsersEx);
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
 * 过滤函数。根据关键字字段的值与给定值进行比较，返回是否相等
 * 作者:pyf
 * 日期:2022-11-02
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function UsersEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return Users_FilterFunByKey(strKey, value);
  }
}

/**
 * 根据关键字获取相应的记录的对象
 *  "strUserId">关键字</param>
 * 获取相应对象
 **/
export async function UsersEx_GetObjByUserIdAsync(strUserId: string): Promise<clsUsersEN> {
  const strAction = 'GetObjByUserId';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('userId', strUserId);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'GET',
      dataType: 'json',
      data: strData,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/**
 * 根据关键字获取相应的记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId)
 * </summary>
 * <param name = "strUserId">关键字</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>获取相应对象</returns>
 **/
export async function UsersEx_GetObjByUserId(
  strUserId: string,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  const strAction = 'GetObjByUserId';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('userId', strUserId);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  $.ajax({
    url: strUrl,
    method: 'GET',
    dataType: 'json',
    data: strData,
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/**
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
 * </summary>
 * <param name = "strWhereCond">条件</param>
 * <returns>返回的第一条记录的关键字值</returns>
 **/
export async function UsersEx_GetFirstIDAsync(strWhereCond: string): Promise<string> {
  const strAction = 'GetFirstID';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'GET',
      dataType: 'json',
      data: strData,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/*
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstId)
 * </summary>
 * <param name = "strWhereCond">条件</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>返回的第一条记录的关键字值</returns>
 **/
export async function UsersEx_GetFirstID(
  strWhereCond: string,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  const strAction = 'GetFirstID';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  $.ajax({
    url: strUrl,
    method: 'GET',
    dataType: 'json',
    data: strData,
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/** <summary>
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObjAsync)
 * </summary>
 * <param name = "strWhereCond">条件</param>
 * <returns>获取的相应对象</returns>
 **/
export async function UsersEx_GetFirstObjAsync(strWhereCond: string): Promise<clsUsersEN> {
  const strAction = 'GetFirstObj';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'GET',
      dataType: 'json',
      data: strData,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/*
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstObj)
 * </summary>
 * <param name = "strWhereCond">条件</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>获取的相应对象</returns>
 **/
export async function UsersEx_GetFirstObj(
  strWhereCond: string,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  const strAction = 'GetFirstObj';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  $.ajax({
    url: strUrl,
    method: 'GET',
    dataType: 'json',
    data: strData,
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/*
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
 * </summary>
 * <param name = "strWhereCond">条件</param>
 * <returns>获取的相应对象列表</returns>
 **/
export async function UsersEx_GetObjLstAsync(strWhereCond: string): Promise<Array<clsUsersEN>> {
  const strAction = 'GetObjLst';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'GET',
      dataType: 'json',
      data: strData,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/*
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByKeyLstAsync)
 * </summary>
 * <param name = "strWhereCond">条件</param>
 * <returns>获取的相应对象列表</returns>
 **/
export async function UsersEx_GetObjLstByUserIdLstAsync(
  arrUserId: Array<string>,
): Promise<Array<clsUsersEN>> {
  const strAction = 'GetObjLstByUserIdLst';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  // const mapParam: Dictionary = new Dictionary();
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'POST',
      dataType: 'json',
      data: { '': arrUserId },
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/*
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLst)
 * </summary>
 * <param name = "strWhereCond">条件</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>获取的相应对象列表</returns>
 **/
export async function UsersEx_GetObjLst(
  strWhereCond: string,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  const strAction = 'GetObjLst';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  $.ajax({
    url: strUrl,
    method: 'GET',
    dataType: 'json',
    data: strData,
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/*
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLstAsync)
 * </summary>
 * <param name = "objTopPara">获取顶部对象列表的参数对象</param>
 * <returns>获取的相应对象列表</returns>
 **/
export async function UsersEx_GetTopObjLstAsync(
  objTopPara: stuTopPara,
): Promise<Array<clsUsersEN>> {
  const strAction = 'GetTopObjLst';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  // const mapParam: Dictionary = stuTopPara.GetMapParam(objTopPara);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'POST',
      dataType: 'json',
      data: objTopPara,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/*
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetTopObjLst)
 * </summary>
 * <param name = "strWhereCond">给定条件</param>
 * <param name = "intTopSize">顶部记录数</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>获取的相应对象列表</returns>
 **/
export async function UsersEx_GetTopObjLst(
  strWhereCond: string,
  intTopSize: number,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  const strAction = 'GetTopObjLst';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  mapParam.add('intTopSize', intTopSize);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  $.ajax({
    url: strUrl,
    method: 'GET',
    dataType: 'json',
    data: strData,
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/* <summary>
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRangeAsync)
 * </summary>
 * <param name = "objRangePara">根据范围获取对象列表的参数对象</param>
 * <returns>获取的相应记录对象列表</returns>
 **/
export async function UsersEx_GetObjLstByRangeAsync(
  objRangePara: stuRangePara,
): Promise<Array<clsUsersEN>> {
  const strAction = 'GetObjLstByRange';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  // const mapParam: Dictionary = stuRangePara.GetMapParam(objRangePara);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'POST',
      dataType: 'json',
      data: objRangePara,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/* <summary>
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByRange)
 * </summary>
 * <param name = "intMinNum">最小记录号</param>
 * <param name = "intMaxNum">最大记录号</param>
 * <param name = "strWhereCond">给定条件</param>
 * <param name = "strOrderBy">排序方式</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>获取的相应记录对象列表</returns>
 **/
export async function UsersEx_GetObjLstByRange(
  intMinNum: number,
  intMaxNum: number,
  strWhereCond: string,
  strOrderBy = '',
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  const strAction = 'GetObjLstByRange';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('intMinNum', intMinNum);
  mapParam.add('intMaxNum', intMaxNum);
  mapParam.add('strWhereCond', strWhereCond);
  mapParam.add('strOrderBy', strOrderBy);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  $.ajax({
    url: strUrl,
    method: 'GET',
    dataType: 'json',
    data: strData,
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/* <summary>
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPagerAsync)
 * </summary>
 * <param name = "objPagerPara">分页获取对象列表的参数对象</param>
 * <returns>获取的相应记录对象列表</returns>
 **/
export async function UsersEx_GetObjLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsUsersEN>> {
  const strAction = 'GetObjLstByPager';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  // const mapParam: Dictionary = stuPagerPara.GetMapParam(objPagerPara);
  // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'POST',
      dataType: 'json',
      data: objPagerPara,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/* <summary>
 * 根据条件获取相应的记录对象列表
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstByPager)
 * </summary>
 * <param name = "intPageIndex">页序号</param>
 * <param name = "intPageSize">每页记录数</param>
 * <param name = "strWhereCond">给定条件</param>
 * <param name = "strOrderBy">排序方式</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>获取的相应记录对象列表</returns>
 **/
export async function UsersEx_GetObjLstByPager(
  intPageIndex: number,
  intPageSize: number,
  strWhereCond: string,
  strOrderBy = '',
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  const strAction = 'GetObjLstByPager';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('intPageIndex', intPageIndex);
  mapParam.add('intPageSize', intPageSize);
  mapParam.add('strWhereCond', strWhereCond);
  mapParam.add('strOrderBy', strOrderBy);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  $.ajax({
    url: strUrl,
    method: 'GET',
    dataType: 'json',
    data: strData,
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/* <summary>
 * 调用WebApi来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecordAsync)
 * </summary>
 * <param name = "strUserId">关键字</param>
 * <returns>获取删除的结果</returns>
 **/
export async function UsersEx_DelRecordAsync(strUserId: string): Promise<number> {
  const strThisFuncName = '';
  const strAction = 'DelRecord';
  let strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);

  strUrl = Format('{0}?Id={1}', strUrl, strUserId);
  try {
    const response = await axios.delete(strUrl, {
      params: { Id: strUserId },
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
        usersEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        usersEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/* <summary>
 * 调用WebApi来删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelRecord)
 * </summary>
 * <param name = "strUserId">关键字</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>获取删除的结果</returns>
 **/
export async function UsersEx_DelRecord(strUserId: string) {
  const strThisFuncName = '';
  const strAction = 'DelRecord';
  let strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  strUrl = Format('{0}?Id={1}', strUrl, strUserId);
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
        usersEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        usersEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

/* <summary>
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordAsync)
 * </summary>
 * <param name = "arrUserId">关键字列表</param>
 * <returns>实际删除记录的个数</returns>
 **/
export async function UsersEx_DelUserssAsync(arrUserId: Array<string>): Promise<number> {
  const strAction = 'DelUserss';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'POST',
      dataType: 'json',
      data: { '': arrUserId },
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/* <summary>
 * 根据关键字列表删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecord)
 * </summary>
 * <param name = "arrUserId">关键字列表</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>实际删除记录的个数</returns>
 **/
export async function UsersEx_DelUserss(
  arrUserId: Array<string>,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  const strAction = 'DelUserss';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  $.ajax({
    url: strUrl,
    method: 'POST',
    dataType: 'json',
    data: { '': arrUserId },
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/* <summary>
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCondAsync)
 * </summary>
 * <returns>实际删除记录的个数</returns>
 **/
export async function UsersEx_DelUserssByCondAsync(strWhereCond: string): Promise<number> {
  const strAction = 'DelUserssByCond';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'POST',
      dataType: 'json',
      data: { '': strWhereCond },
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/* <summary>
 * 根据条件删除记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_DelMultiRecordByCond)
 * </summary>
 * <returns>实际删除记录的个数</returns>
 **/
export async function UsersEx_DelUserssByCond(
  strWhereCond: string,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  const strAction = 'DelUserssByCond';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  $.ajax({
    url: strUrl,
    method: 'POST',
    dataType: 'json',
    data: { '': strWhereCond },
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/* <summary>
 * 调用WebApi来添加记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
 * </summary>
 * <param name = "objUsersEN">需要添加的对象</param>
 * <returns>获取相应的记录的对象</returns>
 **/
export async function UsersEx_AddNewRecordAsync(objUsersEN: clsUsersEN): Promise<boolean> {
  let strMsg = '';
  const strAction = 'AddNewRecord';
  if (objUsersEN.userId === null || objUsersEN.userId === '') {
    strMsg = '需要的对象的关键字为空，不能添加!';
    throw strMsg;
  }
  //strIdCurrEduclsstrJSON = JSON.stringify(objUsersEN_Sim);
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'POST',
      dataType: 'json',
      data: objUsersEN,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/* <summary>
 * 调用WebApi来添加记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecord)
 * </summary>
 * <param name = "objUsersEN">需要添加的对象</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>获取相应的记录的对象</returns>
 **/
export async function UsersEx_AddNewRecord(
  objUsersEN: clsUsersEN,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  let strMsg = '';
  const strAction = 'AddNewRecord';
  if (objUsersEN.userId === null || objUsersEN.userId === '') {
    strMsg = '需要的对象的关键字为空，不能添加!';
    throw strMsg;
  }

  //strIdCurrEduclsstrJSON = JSON.stringify(objUsersEN);
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  $.ajax({
    url: strUrl,
    method: 'POST',
    dataType: 'json',
    data: objUsersEN,
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/* <summary>
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKeyAsync)
 * </summary>
 * <param name = "objUsersEN">需要添加的表对象</param>
 * <returns>返回新添加记录的关键字</returns>
 **/
export async function UsersEx_AddNewRecordWithReturnKeyAsync(
  objUsersEN: clsUsersEN,
): Promise<string> {
  const strAction = 'AddNewRecordWithReturnKey';
  if (objUsersEN.userId === null || objUsersEN.userId === '') {
    const strMsg = '需要的对象的关键字为空，不能添加!';
    throw new Error(strMsg);
  }

  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'POST',
      dataType: 'json',
      data: objUsersEN,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/* <summary>
 * 把表对象添加到数据库中,并且返回该记录的关键字(针对Identity关键字)
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordWithReturnKey)
 * </summary>
 * <param name = "objUsersEN">需要添加的表对象</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>返回新添加记录的关键字</returns>
 **/
export async function UsersEx_AddNewRecordWithReturnKey(
  objUsersEN: clsUsersEN,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  const strAction = 'AddNewRecordWithReturnKey';
  if (objUsersEN.userId === null || objUsersEN.userId === '') {
    const strMsg = '需要的对象的关键字为空，不能添加!';
    throw new Error(strMsg);
  }

  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  $.ajax({
    url: strUrl,
    method: 'POST',
    dataType: 'json',
    data: objUsersEN,
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/* <summary>
 * 调用WebApi来修改记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordAsync)
 * </summary>
 * <param name = "objUsersEN">需要添加的对象</param>
 * <returns>获取修改是否成功？</returns>
 **/
export async function UsersEx_UpdateRecordAsync(objUsersEN: clsUsersEN): Promise<boolean> {
  let strMsg = '';
  const strAction = 'UpdateRecord';
  if (objUsersEN.sfUpdFldSetStr === null || objUsersEN.sfUpdFldSetStr === '') {
    strMsg = `对象(关键字: ${objUsersEN.userId})的【修改字段集】为空，不能修改!`;
    throw strMsg;
  }
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'POST',
      dataType: 'json',
      data: objUsersEN,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/* <summary>
 * 调用WebApi来修改记录，数据传递使用JSON串
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecord)
 * </summary>
 * <param name = "objUsersEN">需要添加的对象</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>获取修改是否成功？</returns>
 **/
export async function UsersEx_UpdateRecord(
  objUsersEN: clsUsersEN,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  let strMsg = '';
  const strAction = 'UpdateRecord';
  if (objUsersEN.sfUpdFldSetStr === null || objUsersEN.sfUpdFldSetStr === '') {
    strMsg = `对象(关键字: ${objUsersEN.userId})的【修改字段集】为空，不能修改!`;
    throw strMsg;
  }
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  $.ajax({
    url: strUrl,
    method: 'POST',
    dataType: 'json',
    data: objUsersEN,
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/* <summary>
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordWithConditionAsync)
 * </summary>
 * <param name = "objUsersEN">需要修改的对象</param>
 * <param name = "strWhereCond">条件串</param>
 * <returns>返回的第一条记录的关键字值</returns>
 **/
export async function UsersEx_UpdateRecordWithConditionAsync(
  objUsersEN: clsUsersEN,
  strWhereCond: string,
): Promise<boolean> {
  const strAction = 'UpdateRecordWithCondition';
  if (objUsersEN.sfUpdFldSetStr === null || objUsersEN.sfUpdFldSetStr === '') {
    const strMsg = `对象(关键字: ${objUsersEN.userId})的【修改字段集】为空，不能修改!`;
    throw new Error(strMsg);
  }
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'POST',
      dataType: 'json',
      data: strData,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/* <summary>
 * 根据条件来修改记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_UpdateRecordWithCondition)
 * </summary>
 * <param name = "objUsersEN">需要修改的对象</param>
 * <param name = "strWhereCond">条件串</param>
 * <returns>返回的第一条记录的关键字值</returns>
 **/
export async function UsersEx_UpdateRecordWithCondition(
  objUsersEN: clsUsersEN,
  strWhereCond: string,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  const strAction = 'UpdateRecordWithCondition';
  if (objUsersEN.sfUpdFldSetStr === null || objUsersEN.sfUpdFldSetStr === '') {
    const strMsg = `对象(关键字: ${objUsersEN.userId})的【修改字段集】为空，不能修改!`;
    throw new Error(strMsg);
  }

  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  $.ajax({
    url: strUrl,
    method: 'POST',
    dataType: 'json',
    data: {
      objUsersEN,
      strWhereCond,
    },
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/* <summary>
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
 * </summary>
 * <param name = "strWhereCond">条件</param>
 * <returns>是否存在记录？</returns>
 **/
export async function UsersEx_IsExistRecordAsync(strWhereCond: string): Promise<boolean> {
  const strAction = 'IsExistRecord';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'GET',
      dataType: 'json',
      data: strData,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/* <summary>
 * 根据条件获取是否存在相应的记录？
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecord)
 * </summary>
 * <param name = "strWhereCond">条件</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>是否存在记录？</returns>
 **/
export async function UsersEx_IsExistRecord(
  strWhereCond: string,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  const strAction = 'IsExistRecord';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  $.ajax({
    url: strUrl,
    method: 'GET',
    dataType: 'json',
    data: strData,
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/* <summary>
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistAsync)
 * </summary>
 * <param name = "strUserId">关键字</param>
 * <returns>是否存在?存在返回True</returns>
 **/
export async function UsersEx_IsExistAsync(strUserId: string): Promise<boolean> {
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('userId', strUserId);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'GET',
      dataType: 'json',
      data: strData,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/* <summary>
 * 根据关键字判断是否存在记录
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExist)
 * </summary>
 * <param name = "strUserId">关键字</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>是否存在?存在返回True</returns>
 **/
export async function UsersEx_IsExist(
  strUserId: string,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  //检测记录是否存在
  const strAction = 'IsExist';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('userId', strUserId);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  $.ajax({
    url: strUrl,
    method: 'GET',
    dataType: 'json',
    data: strData,
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/* <summary>
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funGetRecCountByCondAsync)
 * </summary>
 * <param name = "strWhereCond">条件</param>
 * <returns>获取某一条件的记录数</returns>
 **/
export async function UsersEx_GetRecCountByCondAsync(strWhereCond: string): Promise<number> {
  const strAction = 'GetRecCountByCond';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'GET',
      dataType: 'json',
      data: strData,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/* <summary>
 * 获取某一条件的记录数
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_funGetRecCountByCond)
 * </summary>
 * <param name = "strWhereCond">条件</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>获取某一条件的记录数</returns>
 **/
export async function UsersEx_GetRecCountByCond(
  strWhereCond: string,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  const strAction = 'GetRecCountByCond';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strWhereCond', strWhereCond);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  $.ajax({
    url: strUrl,
    method: 'GET',
    dataType: 'json',
    data: strData,
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/* <summary>
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdAsync)
 * </summary>
 * <returns>获取表的最大关键字</returns>
 **/
export async function UsersEx_GetMaxStrIdAsync(): Promise<string> {
  const strAction = 'GetMaxStrId';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'GET',
      dataType: 'json',
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/* <summary>
 * 获取表的最大关键字
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrId)
 * </summary>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>获取表的最大关键字</returns>
 **/
export async function UsersEx_GetMaxStrId(cb: (json: any) => void, errorCb: (json: any) => void) {
  const strAction = 'GetMaxStrId';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  $.ajax({
    url: strUrl,
    method: 'GET',
    dataType: 'json',
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/* <summary>
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefixAsync)
 * </summary>
 * <param name = "mapParam">参数列表</param>
 * <returns>获取当前表关键字值的最大值</returns>
 **/
export async function UsersEx_GetMaxStrIdByPrefixAsync(strPrefix: string): Promise<string> {
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strPrefix', strPrefix);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: strUrl,
      method: 'GET',
      dataType: 'json',
      data: strData,
      success(data) {
        resolve(data);
      },
      error: (e: any) => {
        console.error(e);
        // const strErrMsg = decodeURIComponent(e.responseText);
        reject(e);
      },
    });
  });
}

/* <summary>
 * 根据前缀获取当前表关键字值的最大值,再加1,避免重复
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetMaxStrIdByPrefix)
 * </summary>
 * <param name = "mapParam">参数列表</param>
 * <param name = "cb">CallBack函数，用于显示正确结果数据</param>
 * <param name = "errorCb">CallBack函数，用于显示错误信息</param>
 * <returns>获取当前表关键字值的最大值</returns>
 **/
export async function UsersEx_GetMaxStrIdByPrefix(
  strPrefix: string,
  cb: (json: any) => void,
  errorCb: (json: any) => void,
) {
  const strAction = 'GetMaxStrIdByPrefix';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const mapParam: Dictionary = new Dictionary();
  mapParam.add('strPrefix', strPrefix);
  const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
  $.ajax({
    url: strUrl,
    method: 'GET',
    dataType: 'json',
    data: strData,
    success(data) {
      cb(data);
    },
    error: (e: any) => {
      console.error(e);
      const strErrMsg = decodeURIComponent(e.responseText);
      errorCb(strErrMsg);
    },
  });
}

/**
 * 注册用户
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param objUsersEN: 用户对象
 * @param strDefaIdCurrEduCls: 默认教学班Id
 * @param spIsAutoAudit4Register: 是否自动审核注册
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function UsersEx_RegisterUser(
  objUsersEN: clsUsersEN,
  strDefaIdCurrEduCls: string,
  spIsAutoAudit4Register: boolean,
  strOpUser: string,
): Promise<any> {
  const strThisFuncName = UsersEx_RegisterUser.name;
  const strAction = 'RegisterUser';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      objUsersEN,
      strDefaIdCurrEduCls,
      spIsAutoAudit4Register,
      strOpUser,
    },
  };
  try {
    const response = await axios.post(strUrl, objUsersEN);
    const data = response.data;
    if (data.errorId == 0) {
      const objReturn = { returnBool: data.returnBool, returnInfo: data.returnInfo };
      return objReturn;
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
        usersEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        usersEx_ConstructorName,
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
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapCollegeName(objUsers: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapCollegeName.name;
  try {
    if (IsNullOrEmpty(objUsers.collegeName) == true) {
      const XzClgidXzCollege = objUsers.idXzCollege;
      const XzClgCollegeName = await XzClg_func(
        clsXzClgEN.con_IdXzCollege,
        clsXzClgEN.con_CollegeName,
        XzClgidXzCollege,
        clsSysPara4WebApi.spIdSchool,
      );
      objUsers.collegeName = XzClgCollegeName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000442)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapMajorName(objUsers: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapMajorName.name;
  try {
    if (IsNullOrEmpty(objUsers.majorName) == true) {
      const XzMajoridXzMajor = objUsers.idXzMajor;
      const XzMajorMajorName = await XzMajor_func(
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        XzMajoridXzMajor,
      );
      objUsers.majorName = XzMajorMajorName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000426)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapUserStateName(objUsers: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapUserStateName.name;
  try {
    if (IsNullOrEmpty(objUsers.userStateName) == true) {
      const UserStateUserStateId = objUsers.userStateId;
      const UserStateUserStateName = await UserState_func(
        clsUserStateEN.con_UserStateId,
        clsUserStateEN.con_UserStateName,
        UserStateUserStateId,
      );
      objUsers.userStateName = UserStateUserStateName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000473)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapGradeBaseName(objUsers: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapGradeBaseName.name;
  try {
    if (IsNullOrEmpty(objUsers.gradeBaseName) == true) {
      const XzGradeBaseidGradeBase = objUsers.idGradeBase;
      const XzGradeBaseGradeBaseName = await XzGradeBase_func(
        clsXzGradeBaseEN.con_IdGradeBase,
        clsXzGradeBaseEN.con_GradeBaseName,
        XzGradeBaseidGradeBase,
      );
      objUsers.gradeBaseName = XzGradeBaseGradeBaseName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000457)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapIdentityDesc(objUsers: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapIdentityDesc.name;
  try {
    if (IsNullOrEmpty(objUsers.identityDesc) == true) {
      const UserIdentityIdentityID = objUsers.identityId;
      const UserIdentityIdentityDesc = await QxUserIdentity_func(
        clsQxUserIdentityEN.con_IdentityId,
        clsQxUserIdentityEN.con_IdentityDesc,
        UserIdentityIdentityID,
      );
      objUsers.identityDesc = UserIdentityIdentityDesc;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000475)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function UsersEx_FuncMapRoleNames(objQxUsers: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapRoleNames.name;
  try {
    if (IsNullOrEmpty(objQxUsers.roleNames) == true) {
      const strPrjId = clsSysPara4WebApi.currSelPrjId;
      const strRoleNames = await userRoleRelationStore.getRoleNames(objQxUsers.userId, strPrjId);
      objQxUsers.roleNames = strRoleNames;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000469)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objUsersS:源对象
 **/
export async function UsersEx_FuncMapDateTimeSim(objUsers: clsUsersENEx) {
  const strThisFuncName = UsersEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objUsers.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objUsers.updDate);
      objUsers.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      usersEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 同步用户到学生和平台
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param arrUserId: 用户列表
 * @param strIdSchool: 学校Id
 * @param strOpUser: 操作用户
 * @returns 获取的相应对象列表
 */
export async function UsersEx_SynchUsersToStudentAndPlatform(
  arrUserId: Array<string>,
  strIdSchool: string,
  strOpUser: string,
) {
  const strThisFuncName = UsersEx_SynchUsersToStudentAndPlatform.name;
  const strAction = 'SynchUsersToStudentAndPlatform';
  const strUrl = UsersEx_GetWebApiUrl(usersEx_Controller, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    params: {
      arrUserId,
      strIdSchool,
      strOpUser,
    },
  };
  const requestData = {
    arrUserId, // 字符串数组
    strIdSchool, // 字符串参数
    strOpUser, // 字符串参数
  };
  try {
    // axios
    //   .post(strUrl, JSON.stringify(requestData), {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data); // 处理成功的响应
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error); // 处理错误
    //   });

    //   const response = await axios.post(strUrl, requestData, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    const response = await axios.post(strUrl, JSON.stringify(requestData), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // const response = await axios.post(strUrl, config);

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
        usersEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        usersEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
