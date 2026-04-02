import axios from 'axios';
import { clsvTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN';
import {
  BindDdl_ObjLst,
  BindDdl_ObjLst_V,
  GetObjKeys,
  GetSortExpressInfo,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';

import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  vTopicObjective_FilterFunByKey,
  vTopicObjective_GetObjLstAsync,
  vTopicObjective_GetObjLstByJSONObjLst,
  vTopicObjective_GetObjLstCache,
  vTopicObjective_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduTopic/clsvTopicObjectiveWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Dictionary } from '@/ts/PubFun/tzDictionary';

import { clsvTopicObjectiveENEx } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveENEx';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const vTopicObjectiveEx_Controller = 'vTopicObjectiveExApi';
export const vTopicObjectiveEx_ConstructorName = 'vTopicObjectiveEx';

//public static cacheModeId = "02"; //客户端缓存

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vTopicObjectiveEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvTopicObjectiveENS:源对象
 * @returns 目标对象=>clsvTopicObjectiveEN:objvTopicObjectiveENT
 **/
export function vTopicObjectiveEx_CopyToEx(
  objvTopicObjectiveENS: clsvTopicObjectiveEN,
): clsvTopicObjectiveENEx {
  const strThisFuncName = vTopicObjectiveEx_CopyToEx.name;
  const objvTopicObjectiveENT = new clsvTopicObjectiveENEx();
  try {
    ObjectAssign(objvTopicObjectiveENT, objvTopicObjectiveENS);
    return objvTopicObjectiveENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vTopicObjectiveEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvTopicObjectiveENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vTopicObjectiveEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
): Promise<Array<clsvTopicObjectiveENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrvTopicObjectiveObjLst = await vTopicObjective_GetObjLstCache(strIdCurrEducls);
  const arrvTopicObjectiveExObjLst = arrvTopicObjectiveObjLst.map(vTopicObjectiveEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvTopicObjectiveExObjLst) {
      await vTopicObjectiveEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvTopicObjectiveExObjLst.length == 0) return arrvTopicObjectiveExObjLst;
  let arrvTopicObjective_Sel: Array<clsvTopicObjectiveENEx> = arrvTopicObjectiveExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objvTopicObjective_Cond = new clsvTopicObjectiveENEx();
  ObjectAssign(objvTopicObjective_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsvTopicObjectiveWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvTopicObjective_Sel = arrvTopicObjective_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvTopicObjective_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvTopicObjective_Sel = arrvTopicObjective_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvTopicObjective_Sel = arrvTopicObjective_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrvTopicObjective_Sel = arrvTopicObjective_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvTopicObjective_Sel = arrvTopicObjective_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvTopicObjective_Sel = arrvTopicObjective_Sel.filter(
              (x) => x.GetFldValue(strKey) == strValue,
            );
          } else if (strComparisonOp == '>=') {
            arrvTopicObjective_Sel = arrvTopicObjective_Sel.filter(
              (x) => x.GetFldValue(strKey) >= strValue,
            );
          } else if (strComparisonOp == '<=') {
            arrvTopicObjective_Sel = arrvTopicObjective_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          } else if (strComparisonOp == '>') {
            arrvTopicObjective_Sel = arrvTopicObjective_Sel.filter(
              (x) => x.GetFldValue(strKey) > strValue,
            );
          } else if (strComparisonOp == '<') {
            arrvTopicObjective_Sel = arrvTopicObjective_Sel.filter(
              (x) => x.GetFldValue(strKey) <= strValue,
            );
          }
          break;
      }
    }
    if (arrvTopicObjective_Sel.length == 0) return arrvTopicObjective_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvTopicObjective_Sel = arrvTopicObjective_Sel.sort(
        vTopicObjectiveEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvTopicObjective_Sel = arrvTopicObjective_Sel.sort(objPagerPara.sortFun);
    }
    arrvTopicObjective_Sel = arrvTopicObjective_Sel.slice(intStart, intEnd);
    return arrvTopicObjective_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vTopicObjectiveEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvTopicObjectiveENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vTopicObjectiveEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvTopicObjectiveENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvTopicObjectiveObjLst = await vTopicObjective_GetObjLstAsync(objPagerPara.whereCond);
  const arrvTopicObjectiveExObjLst = arrvTopicObjectiveObjLst.map(vTopicObjectiveEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvTopicObjectiveExObjLst) {
      await vTopicObjectiveEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvTopicObjectiveExObjLst.length == 0) return arrvTopicObjectiveExObjLst;
  let arrvTopicObjective_Sel: Array<clsvTopicObjectiveENEx> = arrvTopicObjectiveExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvTopicObjective_Sel = arrvTopicObjective_Sel.sort(
        vTopicObjectiveEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvTopicObjective_Sel = arrvTopicObjective_Sel.sort(objPagerPara.sortFun);
    }
    arrvTopicObjective_Sel = arrvTopicObjective_Sel.slice(intStart, intEnd);
    return arrvTopicObjective_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vTopicObjectiveEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvTopicObjectiveENEx>();
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
export function vTopicObjectiveEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vTopicObjective_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vTopicObjective_SortFunByKey(strKey, AscOrDesc);
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
export function vTopicObjectiveEx_FuncMapByFldName(
  strFldName: string,
  objvTopicObjectiveEx: clsvTopicObjectiveENEx,
) {
  const strThisFuncName = vTopicObjectiveEx_FuncMapByFldName.name;
  console.log(objvTopicObjectiveEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvTopicObjectiveEN.AttributeName;
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
export async function vTopicObjectiveEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return vTopicObjective_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 获取论文中的用户数量
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function vTopicObjectiveEx_GetTopicObjectiveUserObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvTopicObjectiveEN>> {
  const strThisFuncName = 'GetTopicObjectiveUserObjLstAsync';
  const strAction = 'GetTopicObjectiveUserObjLst';
  const strUrl = vTopicObjectiveEx_GetWebApiUrl(vTopicObjectiveEx_Controller, strAction);
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
          vTopicObjectiveEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vTopicObjective_GetObjLstByJSONObjLst(returnObjLst);
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
        vTopicObjectiveEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vTopicObjectiveEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

//从客观事实表中得到用户数据
/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
/// </summary>
export async function vTopicObjectiveEx_BindDdl_UserIdInvTopicObjectiveFact_Cache(
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  console.log('开始：BindDdl_UserIdInvConcept_Cache');
  const arrvConcept: Array<clsvTopicObjectiveEN> = await vTopicObjective_GetObjLstAsync('1=1');

  //获取客观事实
  let arrvclsvTopicObjectiveEN: Array<clsvTopicObjectiveEN> = new Array<clsvTopicObjectiveEN>();
  arrvclsvTopicObjectiveEN = arrvConcept.filter((x) => x.objectiveType == '01'); //客观事实；

  let arrObjLst_Sel: Array<clsUsersEN> = arrvclsvTopicObjectiveEN.map(
    vTopicObjectiveEx_GetUsersByvobjvTopicObjective,
  );
  arrObjLst_Sel = vTopicObjectiveEx_uniq(arrObjLst_Sel);
  console.log(arrObjLst_Sel);
  arrObjLst_Sel = arrObjLst_Sel.sort((x) => x.GetFldValue(clsUsersEN.con_UserName));
  BindDdl_ObjLst(
    strDdlName,
    arrObjLst_Sel,
    clsUsersEN.con_UserId,
    clsUsersEN.con_UserName,
    '编辑用户',
  );
}

//从客观数据表中得到用户数据
/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
export async function vTopicObjectiveEx_BindDdl_UserIdInvTopicObjectiveBasis_Cache(
  strDdlName: string,
) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }
  console.log('开始：BindDdl_UserIdInvConcept_Cache');
  const arrvObjList: Array<clsvTopicObjectiveEN> = await vTopicObjective_GetObjLstCache(
    clsPubLocalStorage.idCurrEduCls,
  );

  //获取客观数据
  let arrvclsvTopicObjectiveEN: Array<clsvTopicObjectiveEN> = new Array<clsvTopicObjectiveEN>();
  arrvclsvTopicObjectiveEN = arrvObjList.filter((x) => x.objectiveType == '02'); //客观数据；

  const arrUserId_Set: Set<string> = new Set(arrvclsvTopicObjectiveEN.map((x) => x.updUser));
  console.log(arrUserId_Set);
  
  const strWhere_User = '1=1';
  const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

  let arrUsersList_Sel: Array<clsvUsersSimEN> = arrUsers.filter((x) => arrUserId_Set.has(x.userId));
  console.log(arrUsersList_Sel);
  arrUsersList_Sel = arrUsersList_Sel.sort((x) => x.GetFldValue(clsvUsersSimEN.con_UserName));
  BindDdl_ObjLst_V(
    strDdlName,
    arrUsersList_Sel,
    clsvUsersSimEN.con_UserId,
    clsvUsersSimEN.con_UserName,
    '编辑用户',
  );
}
export function vTopicObjectiveEx_uniq(arr: Array<clsUsersEN>): Array<clsUsersEN> {
  const arrObjLst_New: Array<clsUsersEN> = new Array<clsUsersEN>();
  for (const x of arr) {
    if (vTopicObjectiveEx_IsExist(arrObjLst_New, x) == false) {
      arrObjLst_New.push(x);
    }
  }
  return arrObjLst_New;
}

export function vTopicObjectiveEx_IsExist(arr: Array<clsUsersEN>, key: clsUsersEN) {
  const arr_Sel = arr.filter((x) => x.userId == key.userId);
  if (arr_Sel.length > 0) return true;
  return false;
}

export function vTopicObjectiveEx_GetUsersByvobjvTopicObjective(
  objvTopicObjective: clsvTopicObjectiveEN,
): clsUsersEN {
  const objUsers: clsUsersEN = new clsUsersEN();
  objUsers.userId = objvTopicObjective.updUser;
  // objUsers.userName = objvTopicObjective.userName;
  return objUsers;
}
