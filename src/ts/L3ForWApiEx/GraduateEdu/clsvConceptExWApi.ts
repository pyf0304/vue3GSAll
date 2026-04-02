/*-- -- -- -- -- -- -- -- -- -- --
类名:clsvConceptWApi
表名:vConcept(01120619)
生成代码版本:2020.04.24.1
生成日期:2020/04/25 09:43:23
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

/// <summary>
/// vConcept(vConcept)
/// (AutoGCLib.WA_Access4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2020年04月25日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

//import * as QQ from "q";
import axios from 'axios';
import { clsvConceptEN } from '@/ts/L0Entity/GradEduTopic/clsvConceptEN';
import {
  BindDdl_ObjLst,
  GetObjKeys,
  GetSortExpressInfo,
  ObjectAssign,
} from '@/ts/PubFun/clsCommFunc4Web';

import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import {
  vConcept_FilterFunByKey,
  vConcept_GetObjLstByJSONObjLst,
  vConcept_GetObjLstCache,
  vConcept_GetObjLstAsync,
  vConcept_SortFunByKey,
} from '@/ts/L3ForWApi/GradEduTopic/clsvConceptWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Dictionary } from '@/ts/PubFun/tzDictionary';

import { clsvConceptENEx } from '@/ts/L0Entity/GradEduTopic/clsvConceptENEx';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
export const vConceptEx_Controller = 'vConceptExApi';
export const vConceptEx_ConstructorName = 'vConceptEx';

//public static cacheModeId = "02"; //客户端缓存

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vConceptEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objvConceptENS:源对象
 * @returns 目标对象=>clsvConceptEN:objvConceptENT
 **/
export function vConceptEx_CopyToEx(objvConceptENS: clsvConceptEN): clsvConceptENEx {
  const strThisFuncName = vConceptEx_CopyToEx.name;
  const objvConceptENT = new clsvConceptENEx();
  try {
    ObjectAssign(objvConceptENT, objvConceptENS);
    return objvConceptENT;
  } catch (e:any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vConceptEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvConceptENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vConceptEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strIdCurrEducls: string,
): Promise<Array<clsvConceptENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrvConceptObjLst = await vConcept_GetObjLstCache(strIdCurrEducls);
  const arrvConceptExObjLst = arrvConceptObjLst.map(vConceptEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvConceptExObjLst) {
      await vConceptEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvConceptExObjLst.length == 0) return arrvConceptExObjLst;
  let arrvConcept_Sel: Array<clsvConceptENEx> = arrvConceptExObjLst;
  const obj_Cond = JSON.parse(objPagerPara.whereCond);
  const objvConcept_Cond = new clsvConceptENEx();
  ObjectAssign(objvConcept_Cond, obj_Cond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (obj_Cond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(obj_Cond.sfFldComparisonOp);
  }
  //console.log("clsvConceptWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(obj_Cond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrvConcept_Sel = arrvConcept_Sel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objvConcept_Cond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrvConcept_Sel = arrvConcept_Sel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrvConcept_Sel = arrvConcept_Sel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrvConcept_Sel = arrvConcept_Sel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrvConcept_Sel = arrvConcept_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrvConcept_Sel = arrvConcept_Sel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrvConcept_Sel = arrvConcept_Sel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrvConcept_Sel = arrvConcept_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrvConcept_Sel = arrvConcept_Sel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrvConcept_Sel = arrvConcept_Sel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrvConcept_Sel.length == 0) return arrvConcept_Sel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvConcept_Sel = arrvConcept_Sel.sort(vConceptEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvConcept_Sel = arrvConcept_Sel.sort(objPagerPara.sortFun);
    }
    arrvConcept_Sel = arrvConcept_Sel.slice(intStart, intEnd);
    return arrvConcept_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vConceptEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvConceptENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vConceptEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvConceptENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvConceptObjLst = await vConcept_GetObjLstAsync(objPagerPara.whereCond);
  const arrvConceptExObjLst = arrvConceptObjLst.map(vConceptEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvConceptExObjLst) {
      await vConceptEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvConceptExObjLst.length == 0) return arrvConceptExObjLst;
  let arrvConcept_Sel: Array<clsvConceptENEx> = arrvConceptExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvConcept_Sel = arrvConcept_Sel.sort(vConceptEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvConcept_Sel = arrvConcept_Sel.sort(objPagerPara.sortFun);
    }
    arrvConcept_Sel = arrvConcept_Sel.slice(intStart, intEnd);
    return arrvConcept_Sel;
  } catch (e:any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vConceptEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvConceptENEx>();
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
export function vConceptEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  // const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      default:
        return vConcept_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      default:
        return vConcept_SortFunByKey(strKey, AscOrDesc);
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
export function vConceptEx_FuncMapByFldName(strFldName: string, objvConceptEx: clsvConceptENEx) {
  const strThisFuncName = vConceptEx_FuncMapByFldName.name;
  console.log(objvConceptEx);
  let strMsg = '';
  //如果是本表中字段，不需要映射
  const arrFldName = clsvConceptEN.AttributeName;
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
export async function vConceptEx_FilterFunByKey(strKey: string, value: any) {
  // const strThisFuncName = 'FilterFunByKey';
  // const strMsg = '';
  switch (strKey) {
    default:
      return vConcept_FilterFunByKey(strKey, value);
  }
}

/// <summary>
/// 获取论文中的用户数量
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function vConceptEx_GetConceptUserObjLstAsync(
  strWhereCond: string,
): Promise<Array<clsvConceptEN>> {
  const strThisFuncName = 'GetConceptUserObjLstAsync';
  const strAction = 'GetConceptUserObjLst';
  const strUrl = vConceptEx_GetWebApiUrl(vConceptEx_Controller, strAction);
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
          vConceptEx_Controller,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      const arrObjLst = vConcept_GetObjLstByJSONObjLst(returnObjLst);
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
        vConceptEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        vConceptEx_Controller,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

//从概念表中得到用户数据
/// <summary>
/// 绑定基于Web的下拉框
/// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
/// </summary>
/// <param name = "objDDL">需要绑定当前表的下拉框</param>
export async function vConceptEx_BindDdl_UserIdInvConcept_Cache(strDdlName: string) {
  const objDdl = document.getElementById(strDdlName);
  if (objDdl == null) {
    const strMsg = `下拉框：${strDdlName} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }
  //为数据源于表的下拉框设置内容
  console.log('开始：BindDdl_UserIdInvConcept_Cache');
  const arrvConcept: Array<clsvConceptEN> = await vConcept_GetObjLstCache(
    clsPubLocalStorage.idCurrEduCls,
  );
  let arrObjLst_Sel: Array<clsUsersEN> = arrvConcept.map(vConceptEx_GetUsersByvConcept);
  arrObjLst_Sel = vConceptEx_uniq(arrObjLst_Sel);
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
export function vConceptEx_uniq(arr: Array<clsUsersEN>): Array<clsUsersEN> {
  const arrObjLst_New: Array<clsUsersEN> = new Array<clsUsersEN>();
  for (const x of arr) {
    if (vConceptEx_IsExist(arrObjLst_New, x) == false) {
      arrObjLst_New.push(x);
    }
  }
  return arrObjLst_New;
}

export function vConceptEx_IsExist(arr: Array<clsUsersEN>, key: clsUsersEN) {
  const arr_Sel = arr.filter((x) => x.userId == key.userId);
  if (arr_Sel.length > 0) return true;
  return false;
}

export function vConceptEx_GetUsersByvConcept(objvConcept: clsvConceptEN): clsUsersEN {
  const objUsers: clsUsersEN = new clsUsersEN();
  objUsers.userId = objvConcept.updUser;
  //objUsers.userName = objvConcept.userName;
  return objUsers;
}
