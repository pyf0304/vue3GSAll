//import $ from "jquery";
import { CmPrjIdUserIdRelaEx_AddUserId } from './clsCmPrjIdUserIdRelaExWApi';
import {
  vUsersSim_GetObjByUserIdAsync,
  vUsersSim_GetObjLstAsync,
  vUsersSim_SortFunByKey,
  vUsersSim_FilterFunByKey,
} from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';

import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsvUsersSimENEx } from '@/ts/L0Entity/UserManage/clsvUsersSimENEx';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { GetSortExpressInfo, ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsvUsersSim } from '@/ts/L0Entity/UserManage/clsvUsersSim';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { clsvQxUsersSim } from '@/ts/L0Entity/UserManage_GP/clsvQxUsersSim';

export const vUsersSimEx_Controller = 'vUsersSimExApi';
export const vUsersSimEx_ConstructorName = 'vUsersSimEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function vUsersSimEx_GetWebApiUrl(strController: string, strAction: string): string {
  //   const strThisFuncName = 'GetWebApiUrl';
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
 * @param objvUsersSimENS:源对象
 * @returns 目标对象=>clsvUsersSimEN:objvUsersSimENT
 **/
export function vUsersSimEx_CopyToEx(objvUsersSimENS: clsvUsersSimEN): clsvUsersSimENEx {
  const strThisFuncName = vUsersSimEx_CopyToEx.name;
  const objvUsersSimENT = new clsvUsersSimENEx();
  try {
    ObjectAssign(objvUsersSimENT, objvUsersSimENS);
    return objvUsersSimENT;
  } catch (e: any) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      vUsersSimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objvUsersSimENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表，只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function vUsersSimEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsvUsersSimENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrvUsersSimObjLst = await vUsersSim_GetObjLstAsync(objPagerPara.whereCond);
  const arrvUsersSimExObjLst = arrvUsersSimObjLst.map(vUsersSimEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (IsNullOrEmpty(objSortInfo.SortFld) == false) {
    for (const objInFor of arrvUsersSimExObjLst) {
      await vUsersSimEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrvUsersSimExObjLst.length == 0) return arrvUsersSimExObjLst;
  let arrvUsersSim_Sel: Array<clsvUsersSimENEx> = arrvUsersSimExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrvUsersSim_Sel = arrvUsersSim_Sel.sort(vUsersSimEx_SortFunByKey(strSortFld, strSortType));
    } else {
      //如果排序字段名[OrderBy]为空，就调用排序函数
      arrvUsersSim_Sel = arrvUsersSim_Sel.sort(objPagerPara.sortFun);
    }
    arrvUsersSim_Sel = arrvUsersSim_Sel.slice(intStart, intEnd);
    return arrvUsersSim_Sel;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      vUsersSimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsvUsersSimENEx>();
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2023-02-25
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function vUsersSimEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  //   const strThisFuncName = 'SortFunByKey';
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsvUsersSimENEx.con_CmPrjId:
        return (a: clsvUsersSimENEx, b: clsvUsersSimENEx) => {
          return a.cmPrjId.localeCompare(b.cmPrjId);
        };
      default:
        return vUsersSim_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsvUsersSimENEx.con_CmPrjId:
        return (a: clsvUsersSimENEx, b: clsvUsersSimENEx) => {
          return b.cmPrjId.localeCompare(a.cmPrjId);
        };
      default:
        return vUsersSim_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2023-02-25
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function vUsersSimEx_FuncMapByFldName(strFldName: string, objvUsersSimEx: clsvUsersSimENEx) {
  const strThisFuncName = vUsersSimEx_FuncMapByFldName.name;
  let strMsg = '';
  console.log(objvUsersSimEx);
  //如果是本表中字段，不需要映射
  const arrFldName = clsvUsersSimEN.AttributeName;
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
 * 日期:2023-02-25
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FilterFunByKey)
 * @param strKey:比较的关键字段名称
 * @param value:给定值
 * @returns 返回对象的字段值是否等于给定值
 */
export async function vUsersSimEx_FilterFunByKey(strKey: string, value: any) {
  //   const strThisFuncName = 'FilterFunByKey';
  //   const strMsg = '';
  switch (strKey) {
    case clsvUsersSimENEx.con_CmPrjId:
      return (obj: clsvUsersSimENEx) => {
        return obj.cmPrjId === value;
      };
    default:
      return vUsersSim_FilterFunByKey(strKey, value);
  }
}

/**
* 映射函数。根据表映射把输入字段值，映射成输出字段值
* 作者:pyf
* 日期:2023-02-25
* (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_func)
* @param strInFldName:输入字段名
* @param strOutFldName:输出字段名
* @param strInValue:输入字段值
@param strCmPrjId:缓存的分类字段
* @returns 返回一个输出字段值
*/
export async function vUsersSimEx_func(
  strInFldName: string,
  strOutFldName: string,
  strInValue: string,
) {
  //const strThisFuncName = "func";

  //if (IsNullOrEmpty(strCmPrjId_C) == true) {
  //    const strMsg = Format("参数:[strCmPrjId_C]不能为空！(In func)");
  //    console.error(strMsg);
  //    throw (strMsg);
  //}
  //if (strCmPrjId_C.length != 6) {
  //    const strMsg = Format("缓存分类变量:[strCmPrjId_C]的长度:[{0}]不正确！", strCmPrjId_C.length);
  //    console.error(strMsg);
  //    throw (strMsg);
  //}

  if (strInFldName != clsvUsersSimEN.con_UserId) {
    const strMsg = Format('输入字段名:[{0}]不正确!', strInFldName);
    console.error(strMsg);
    throw new Error(strMsg);
  }
  if (clsvUsersSimEN.AttributeName.indexOf(strOutFldName) == -1) {
    const strMsg = Format(
      '输出字段名:[{0}]不正确，不在输出字段范围之内!({1})',
      strOutFldName,
      clsvUsersSimEN.AttributeName.join(','),
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  const strUserId = strInValue;
  if (IsNullOrEmpty(strInValue) == true) {
    return '';
  }
  const strFldValue = await vQxUsersSimStore.getFieldValue(strUserId, strOutFldName);

  return strFldValue;
}

/**
 * 根据关键字获取相关对象, 从缓存中获取.
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyId_Cache)
 * @param strUserId:所给的关键字
 * @returns 对象
 */
export async function vUsersSimEx_GetObjByUserIdCache(
  strUserId: string,
): Promise<clsvQxUsersSim | null> {
  const strThisFuncName = 'GetObjByUserId_Cache';

  if (IsNullOrEmpty(strUserId) == true) {
    const strMsg = Format('参数:[strUserId]不能为空！(In GetObjByUserId_Cache)');
    console.error(strMsg);
    throw strMsg;
  }
  try {
    let objvUsersSim = await vQxUsersSimStore.getObj(strUserId);
    return objvUsersSim;
  } catch (e: any) {
    const strMsg = Format(
      '错误:[{0}]. \n根据关键字:[{1}]获取相应的对象不成功!(in {2}.{3})',
      e,
      strUserId,
      vUsersSimEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
  }
  return null;
}
