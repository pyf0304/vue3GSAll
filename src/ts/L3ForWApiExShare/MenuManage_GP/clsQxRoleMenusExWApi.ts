/**
 * 角色菜单(QxRoleMenus)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年01月02日.
 * 注意:该类必须与调用界面处于同一个包,否则调用不成功!
 **/
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import { ObjectAssign, GetSortExpressInfo, GetObjKeys } from '@/ts/PubFun/clsCommFunc4Web';
import {
  QxRoleMenus_GetObjLstCache,
  QxRoleMenus_GetObjLstAsync,
  QxRoleMenus_SortFunByKey,
} from '@/ts/L3ForWApi/MenuManage_GP/clsQxRoleMenusWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxRoleMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusEN';
import { clsQxRoleMenusENEx } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusENEx';
import {
  QxPrjMenus_func,
  QxPrjMenus_funcKey,
} from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
import { QxRoles_func, QxRoles_funcKey } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { clsQxRolesEN } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
import {
  QxPrjMenuSet_func,
  QxPrjMenuSet_funcKey,
} from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenuSetWApi';
import { clsQxPrjMenuSetEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenuSetEN';
import { QxProjects_func, QxProjects_funcKey } from '@/ts/L3ForWApi/PrjManage/clsQxProjectsWApi';
import { clsQxProjectsEN } from '@/ts/L0Entity/PrjManage/clsQxProjectsEN';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';
import { GetWebApiUrl_GP, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

export const qxRoleMenusExController = 'QxRoleMenusExApi';
export const qxRoleMenusEx_ConstructorName = 'qxRoleMenusEx';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 **/
export function QxRoleMenusEx_GetWebApiUrl(strController: string, strAction: string): string {
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
 * @param objQxRoleMenusENS:源对象
 * @returns 目标对象=>clsQxRoleMenusEN:objQxRoleMenusENT
 **/
export function QxRoleMenusEx_CopyToEx(objQxRoleMenusENS: clsQxRoleMenusEN): clsQxRoleMenusENEx {
  const strThisFuncName = QxRoleMenusEx_CopyToEx.name;
  const objQxRoleMenusENT = new clsQxRoleMenusENEx();
  try {
    ObjectAssign(objQxRoleMenusENT, objQxRoleMenusENS);
    return objQxRoleMenusENT;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000067)Copy表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    return objQxRoleMenusENT;
  }
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerCache)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxRoleMenusEx_GetObjExLstByPagerCache(
  objPagerPara: stuPagerPara,
  strQxPrjId: string,
): Promise<Array<clsQxRoleMenusENEx>> {
  const strThisFuncName = 'GetObjLstByPagerCache';
  const arrQxRoleMenusObjLst = await QxRoleMenus_GetObjLstCache(strQxPrjId);
  const arrQxRoleMenusExObjLst = arrQxRoleMenusObjLst.map(QxRoleMenusEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxRoleMenusEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxRoleMenusExObjLst) {
      await QxRoleMenusEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxRoleMenusExObjLst.length == 0) return arrQxRoleMenusExObjLst;
  let arrQxRoleMenusSel: Array<clsQxRoleMenusENEx> = arrQxRoleMenusExObjLst;
  const objCond = JSON.parse(objPagerPara.whereCond);
  const objQxRoleMenusCond = new clsQxRoleMenusENEx();
  ObjectAssign(objQxRoleMenusCond, objCond);
  let dicFldComparisonOp: { [index: string]: string } = {};
  if (objCond.sfFldComparisonOp != '') {
    dicFldComparisonOp = JSON.parse(objCond.sfFldComparisonOp);
  }
  //console.log("clsQxRoleMenusWApi->GetObjLstByPagerCache->dicFldComparisonOp:");
  //console.log(dicFldComparisonOp);
  try {
    const sstrKeys = GetObjKeys(objCond);
    //console.log(sstrKeys);
    for (const strKey of sstrKeys) {
      if (Object.prototype.hasOwnProperty.call(dicFldComparisonOp, strKey) == false) continue;
      arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) != null);
      const strComparisonOp = dicFldComparisonOp[strKey];
      const strValue = objQxRoleMenusCond.GetFldValue(strKey);
      const strType = typeof strValue;
      switch (strType) {
        case 'string':
          if (strValue == null) continue;
          if (strValue == '') continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString() == strValue.toString(),
            );
          } else if (strComparisonOp == 'like') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().indexOf(strValue.toString()) != -1,
            );
          } else if (strComparisonOp == 'length greater') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length > Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not greater') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length <= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length not less') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length >= Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length less') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length < Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'length equal') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => x.GetFldValue(strKey).toString().length == Number(strValue.toString()),
            );
          } else if (strComparisonOp == 'in') {
            const arrValues = strValue.split(',');
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter(
              (x) => arrValues.indexOf(x.GetFldValue(strKey).toString()) != -1,
            );
          }
          break;
        case 'boolean':
          if (strValue == null) continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          }
          break;
        case 'number':
          if (Number(strValue) == 0) continue;
          if (strComparisonOp == '=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) == strValue);
          } else if (strComparisonOp == '>=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) >= strValue);
          } else if (strComparisonOp == '<=') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          } else if (strComparisonOp == '>') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) > strValue);
          } else if (strComparisonOp == '<') {
            arrQxRoleMenusSel = arrQxRoleMenusSel.filter((x) => x.GetFldValue(strKey) <= strValue);
          }
          break;
      }
    }
    if (arrQxRoleMenusSel.length == 0) return arrQxRoleMenusSel;
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxRoleMenusSel = arrQxRoleMenusSel.sort(
        QxRoleMenusEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxRoleMenusSel = arrQxRoleMenusSel.sort(objPagerPara.sortFun);
    }
    arrQxRoleMenusSel = arrQxRoleMenusSel.slice(intStart, intEnd);
    return arrQxRoleMenusSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxRoleMenusENEx>();
}

/**
 * 根据分页条件从缓存中获取分页对象列表,只获取一页.
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetObjExLstByPagerAsync)
 * @param objPagerPara:分页参数结构
 * @returns 对象列表
 */
export async function QxRoleMenusEx_GetObjExLstByPagerAsync(
  objPagerPara: stuPagerPara,
): Promise<Array<clsQxRoleMenusENEx>> {
  const strThisFuncName = 'GetObjExLstByPagerAsync';
  const arrQxRoleMenusObjLst = await QxRoleMenus_GetObjLstAsync(objPagerPara.whereCond);
  const arrQxRoleMenusExObjLst = arrQxRoleMenusObjLst.map(QxRoleMenusEx_CopyToEx);
  const objSortInfo = GetSortExpressInfo(objPagerPara);
  if (
    IsNullOrEmpty(objSortInfo.SortFld) == false &&
    clsQxRoleMenusEN.AttributeName.indexOf(objSortInfo.SortFld) == -1
  ) {
    for (const objInFor of arrQxRoleMenusExObjLst) {
      await QxRoleMenusEx_FuncMapByFldName(objSortInfo.SortFld, objInFor);
    }
  }
  if (arrQxRoleMenusExObjLst.length == 0) return arrQxRoleMenusExObjLst;
  let arrQxRoleMenusSel: Array<clsQxRoleMenusENEx> = arrQxRoleMenusExObjLst;
  try {
    let intStart: number = objPagerPara.pageSize * (objPagerPara.pageIndex - 1);
    if (intStart <= 0) intStart = 0;
    const intEnd = intStart + objPagerPara.pageSize;
    if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
      const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
      let strSortType = 'asc';
      const strSortFld = sstrSplit[0];
      if (sstrSplit.length > 1) strSortType = sstrSplit[1];
      arrQxRoleMenusSel = arrQxRoleMenusSel.sort(
        QxRoleMenusEx_SortFunByKey(strSortFld, strSortType),
      );
    } else {
      //如果排序字段名[OrderBy]为空,就调用排序函数
      arrQxRoleMenusSel = arrQxRoleMenusSel.sort(objPagerPara.sortFun);
    }
    arrQxRoleMenusSel = arrQxRoleMenusSel.slice(intStart, intEnd);
    return arrQxRoleMenusSel;
  } catch (e) {
    const strMsg = Format(
      '错误:[{0}]. \n根据条件:[{1}]获取分页对象列表不成功!(In {2}.{3})',
      e,
      objPagerPara.whereCond,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    throw new Error(strMsg);
  }
  return new Array<clsQxRoleMenusENEx>();
}

/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapMenuName(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMapMenuName.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.menuName) == true) {
      const QxPrjMenusMenuId = objQxRoleMenus.menuId;
      const QxPrjMenusMenuName = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_MenuName,
        QxPrjMenusMenuId,
        objQxRoleMenus.qxPrjId,
      );
      objQxRoleMenus.menuName = QxPrjMenusMenuName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000403)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapRoleName(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMapRoleName.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.roleName) == true) {
      const QxUserRolesRoleId = objQxRoleMenus.roleId;
      const QxUserRolesRoleName = await QxRoles_func(
        clsQxRolesEN.con_RoleId,
        clsQxRolesEN.con_RoleName,
        QxUserRolesRoleId,
        clsSysPara4WebApi.currSelPrjId,
      );
      objQxRoleMenus.roleName = QxUserRolesRoleName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000312)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapMenuSetName(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMapMenuSetName.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.menuSetName) == true) {
      const QxPrjMenusMenuId = objQxRoleMenus.menuId;
      const QxPrjMenusMenuSetId = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_MenuSetId,
        QxPrjMenusMenuId,
        objQxRoleMenus.qxPrjId,
      );
      const QxPrjMenuSetMenuSetId = QxPrjMenusMenuSetId;
      const QxPrjMenuSetMenuSetName = await QxPrjMenuSet_func(
        clsQxPrjMenuSetEN.con_MenuSetId,
        clsQxPrjMenuSetEN.con_MenuSetName,
        QxPrjMenuSetMenuSetId,
      );
      objQxRoleMenus.menuSetName = QxPrjMenuSetMenuSetName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000404)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapOrderNum(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMapOrderNum.name;
  try {
    if (objQxRoleMenus.orderNum == 0) {
      const QxPrjMenusMenuId = objQxRoleMenus.menuId;
      const QxPrjMenusOrderNum = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_OrderNum,
        QxPrjMenusMenuId,
        objQxRoleMenus.qxPrjId,
      );
      objQxRoleMenus.orderNum = QxPrjMenusOrderNum;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000324)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapInUse(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMapInUse.name;
  try {
    const QxPrjMenusMenuId = objQxRoleMenus.menuId;
    const QxPrjMenusInUse = await QxPrjMenus_func(
      clsQxPrjMenusEN.con_MenuId,
      clsQxPrjMenusEN.con_InUse,
      QxPrjMenusMenuId,
      objQxRoleMenus.qxPrjId,
    );
    objQxRoleMenus.inUse = QxPrjMenusInUse;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000406)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapIsLeafNode(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMapIsLeafNode.name;
  try {
    const QxPrjMenusMenuId = objQxRoleMenus.menuId;
    const QxPrjMenusIsLeafNode = await QxPrjMenus_func(
      clsQxPrjMenusEN.con_MenuId,
      clsQxPrjMenusEN.con_IsLeafNode,
      QxPrjMenusMenuId,
      objQxRoleMenus.qxPrjId,
    );
    objQxRoleMenus.isLeafNode = QxPrjMenusIsLeafNode;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000407)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapPageDispModeId(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMapPageDispModeId.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.pageDispModeId) == true) {
      const QxPrjMenusMenuId = objQxRoleMenus.menuId;
      const QxPrjMenusPageDispModeId = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_PageDispModeId,
        QxPrjMenusMenuId,
        objQxRoleMenus.qxPrjId,
      );
      objQxRoleMenus.pageDispModeId = QxPrjMenusPageDispModeId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000408)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapUpMenuId(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMapUpMenuId.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.upMenuId) == true) {
      const QxPrjMenusMenuId = objQxRoleMenus.menuId;
      const QxPrjMenusUpMenuId = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_UpMenuId,
        QxPrjMenusMenuId,
        objQxRoleMenus.qxPrjId,
      );
      objQxRoleMenus.upMenuId = QxPrjMenusUpMenuId;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000409)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapLinkFile(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMapLinkFile.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.linkFile) == true) {
      const QxPrjMenusMenuId = objQxRoleMenus.menuId;
      const QxPrjMenusLinkFile = await QxPrjMenus_func(
        clsQxPrjMenusEN.con_MenuId,
        clsQxPrjMenusEN.con_LinkFile,
        QxPrjMenusMenuId,
        objQxRoleMenus.qxPrjId,
      );
      objQxRoleMenus.linkFile = QxPrjMenusLinkFile;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000410)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapPrjName(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMapPrjName.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.prjName) == true) {
      const QxProjectsQxPrjId = objQxRoleMenus.qxPrjId;
      const QxProjectsPrjName = await QxProjects_func(
        clsQxProjectsEN.con_QxPrjId,
        clsQxProjectsEN.con_PrjName,
        QxProjectsQxPrjId,
      );
      objQxRoleMenus.prjName = QxProjectsPrjName;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000286)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
  }
}

/**
 * 排序函数。根据关键字字段的值进行比较
 * 作者:pyf
 * 日期:2024-01-02
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_SortFunByKey)
 * @param a:比较的第1个对象
 * @param  b:比较的第1个对象
 * @returns 返回两个对象比较的结果
 */
export function QxRoleMenusEx_SortFunByKey(strKey: string, AscOrDesc: string) {
  if (AscOrDesc == 'Asc' || AscOrDesc == '') {
    switch (strKey) {
      case clsQxRoleMenusENEx.con_MenuName:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return a.menuName.localeCompare(b.menuName);
        };
      case clsQxRoleMenusENEx.con_RoleName:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return a.roleName.localeCompare(b.roleName);
        };
      case clsQxRoleMenusENEx.con_MenuSetName:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return a.menuSetName.localeCompare(b.menuSetName);
        };
      case clsQxRoleMenusENEx.con_OrderNum:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return a.orderNum - b.orderNum;
        };
      case clsQxRoleMenusENEx.con_InUse:
        return (a: clsQxRoleMenusENEx) => {
          if (a.inUse == true) return 1;
          else return -1;
        };
      case clsQxRoleMenusENEx.con_IsLeafNode:
        return (a: clsQxRoleMenusENEx) => {
          if (a.isLeafNode == true) return 1;
          else return -1;
        };
      case clsQxRoleMenusENEx.con_PageDispModeId:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return a.pageDispModeId.localeCompare(b.pageDispModeId);
        };
      case clsQxRoleMenusENEx.con_UpMenuId:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return a.upMenuId.localeCompare(b.upMenuId);
        };
      case clsQxRoleMenusENEx.con_LinkFile:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return a.linkFile.localeCompare(b.linkFile);
        };
      case clsQxRoleMenusENEx.con_PrjName:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return a.prjName.localeCompare(b.prjName);
        };
      default:
        return QxRoleMenus_SortFunByKey(strKey, AscOrDesc);
    }
  } else {
    switch (strKey) {
      case clsQxRoleMenusENEx.con_MenuName:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return b.menuName.localeCompare(a.menuName);
        };
      case clsQxRoleMenusENEx.con_RoleName:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return b.roleName.localeCompare(a.roleName);
        };
      case clsQxRoleMenusENEx.con_MenuSetName:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return b.menuSetName.localeCompare(a.menuSetName);
        };
      case clsQxRoleMenusENEx.con_OrderNum:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return b.orderNum - a.orderNum;
        };
      case clsQxRoleMenusENEx.con_InUse:
        return (b: clsQxRoleMenusENEx) => {
          if (b.inUse == true) return 1;
          else return -1;
        };
      case clsQxRoleMenusENEx.con_IsLeafNode:
        return (b: clsQxRoleMenusENEx) => {
          if (b.isLeafNode == true) return 1;
          else return -1;
        };
      case clsQxRoleMenusENEx.con_PageDispModeId:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return b.pageDispModeId.localeCompare(a.pageDispModeId);
        };
      case clsQxRoleMenusENEx.con_UpMenuId:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return b.upMenuId.localeCompare(a.upMenuId);
        };
      case clsQxRoleMenusENEx.con_LinkFile:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return b.linkFile.localeCompare(a.linkFile);
        };
      case clsQxRoleMenusENEx.con_PrjName:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return b.prjName.localeCompare(a.prjName);
        };
      default:
        return QxRoleMenus_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-01-02
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapByFldName)
 * @param strFldName:扩展字段名
 * @param  obj{0}Ex:需要转换的对象
 * @returns 针对扩展字段名对转换对象进行函数映射
 */
export function QxRoleMenusEx_FuncMapByFldName(
  strFldName: string,
  objQxRoleMenusEx: clsQxRoleMenusENEx,
) {
  const strThisFuncName = QxRoleMenusEx_FuncMapByFldName.name;
  let strMsg = '';
  //如果是本表中字段,不需要映射
  const arrFldName = clsQxRoleMenusEN.AttributeName;
  if (arrFldName.indexOf(strFldName) > -1) return;
  //针对扩展字段进行映射
  switch (strFldName) {
    case clsQxRoleMenusENEx.con_MenuName:
      return QxRoleMenusEx_FuncMapMenuName(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_RoleName:
      return QxRoleMenusEx_FuncMapRoleName(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_MenuSetName:
      return QxRoleMenusEx_FuncMapMenuSetName(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_OrderNum:
      return QxRoleMenusEx_FuncMapOrderNum(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_InUse:
      return QxRoleMenusEx_FuncMapInUse(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_IsLeafNode:
      return QxRoleMenusEx_FuncMapIsLeafNode(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_PageDispModeId:
      return QxRoleMenusEx_FuncMapPageDispModeId(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_UpMenuId:
      return QxRoleMenusEx_FuncMapUpMenuId(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_LinkFile:
      return QxRoleMenusEx_FuncMapLinkFile(objQxRoleMenusEx);
    case clsQxRoleMenusENEx.con_PrjName:
      return QxRoleMenusEx_FuncMapPrjName(objQxRoleMenusEx);
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
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapKeyMenuName(
  objQxRoleMenus: clsQxRoleMenusENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRoleMenusEx_FuncMapKeyMenuName.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.menuName) == true) return [];
    const QxPrjMenusMenuName = objQxRoleMenus.menuName;
    const arrMenuId = await QxPrjMenus_funcKey(
      clsQxPrjMenusEN.con_MenuName,
      QxPrjMenusMenuName,
      objQxRoleMenus.qxPrjId,
      enumComparisonOp.Like_03,
    );
    return arrMenuId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000403)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapKeyRoleName(
  objQxRoleMenus: clsQxRoleMenusENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRoleMenusEx_FuncMapKeyRoleName.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.roleName) == true) return [];
    const QxUserRolesRoleName = objQxRoleMenus.roleName;
    const arrRoleId = await QxRoles_funcKey(
      clsQxRolesEN.con_RoleName,
      QxUserRolesRoleName,
      enumComparisonOp.Like_03,
      clsSysPara4WebApi.currSelPrjId,
    );
    return arrRoleId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000312)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapKeyMenuSetName(
  objQxRoleMenus: clsQxRoleMenusENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRoleMenusEx_FuncMapKeyMenuSetName.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.menuSetName) == true) return [];
    const QxPrjMenuSetMenuSetName = objQxRoleMenus.menuSetName;
    const arrMenuSetId = await QxPrjMenuSet_funcKey(
      clsQxPrjMenuSetEN.con_MenuSetName,
      QxPrjMenuSetMenuSetName,
      enumComparisonOp.Like_03,
    );
    const strMenuSetIdLst = arrMenuSetId;
    const arrMenuId = await QxPrjMenus_funcKey(
      clsQxPrjMenusEN.con_MenuSetId,
      strMenuSetIdLst,
      objQxRoleMenus.qxPrjId,
      enumComparisonOp.In_04,
    );
    return arrMenuId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000404)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapKeyOrderNum(
  objQxRoleMenus: clsQxRoleMenusENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRoleMenusEx_FuncMapKeyOrderNum.name;
  try {
    if (objQxRoleMenus.orderNum == 0) return [];
    const QxPrjMenusOrderNum = objQxRoleMenus.orderNum;
    const arrMenuId = await QxPrjMenus_funcKey(
      clsQxPrjMenusEN.con_OrderNum,
      QxPrjMenusOrderNum,
      objQxRoleMenus.qxPrjId,
      enumComparisonOp.Like_03,
    );
    return arrMenuId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000324)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapKeyInUse(
  objQxRoleMenus: clsQxRoleMenusENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRoleMenusEx_FuncMapKeyInUse.name;
  try {
    const QxPrjMenusInUse = objQxRoleMenus.inUse;
    const arrMenuId = await QxPrjMenus_funcKey(
      clsQxPrjMenusEN.con_InUse,
      QxPrjMenusInUse,
      objQxRoleMenus.qxPrjId,
      enumComparisonOp.Like_03,
    );
    return arrMenuId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000406)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapKeyIsLeafNode(
  objQxRoleMenus: clsQxRoleMenusENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRoleMenusEx_FuncMapKeyIsLeafNode.name;
  try {
    const QxPrjMenusIsLeafNode = objQxRoleMenus.isLeafNode;
    const arrMenuId = await QxPrjMenus_funcKey(
      clsQxPrjMenusEN.con_IsLeafNode,
      QxPrjMenusIsLeafNode,
      objQxRoleMenus.qxPrjId,
      enumComparisonOp.Like_03,
    );
    return arrMenuId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000407)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapKeyPageDispModeId(
  objQxRoleMenus: clsQxRoleMenusENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRoleMenusEx_FuncMapKeyPageDispModeId.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.pageDispModeId) == true) return [];
    const QxPrjMenusPageDispModeId = objQxRoleMenus.pageDispModeId;
    const arrMenuId = await QxPrjMenus_funcKey(
      clsQxPrjMenusEN.con_PageDispModeId,
      QxPrjMenusPageDispModeId,
      objQxRoleMenus.qxPrjId,
      enumComparisonOp.Like_03,
    );
    return arrMenuId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000408)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapKeyUpMenuId(
  objQxRoleMenus: clsQxRoleMenusENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRoleMenusEx_FuncMapKeyUpMenuId.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.upMenuId) == true) return [];
    const QxPrjMenusUpMenuId = objQxRoleMenus.upMenuId;
    const arrMenuId = await QxPrjMenus_funcKey(
      clsQxPrjMenusEN.con_UpMenuId,
      QxPrjMenusUpMenuId,
      objQxRoleMenus.qxPrjId,
      enumComparisonOp.Like_03,
    );
    return arrMenuId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000409)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapKeyLinkFile(
  objQxRoleMenus: clsQxRoleMenusENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRoleMenusEx_FuncMapKeyLinkFile.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.linkFile) == true) return [];
    const QxPrjMenusLinkFile = objQxRoleMenus.linkFile;
    const arrMenuId = await QxPrjMenus_funcKey(
      clsQxPrjMenusEN.con_LinkFile,
      QxPrjMenusLinkFile,
      objQxRoleMenus.qxPrjId,
      enumComparisonOp.Like_03,
    );
    return arrMenuId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000410)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}
/**
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMapKey)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapKeyPrjName(
  objQxRoleMenus: clsQxRoleMenusENEx,
): Promise<Array<string>> {
  const strThisFuncName = QxRoleMenusEx_FuncMapKeyPrjName.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.prjName) == true) return [];
    const QxProjectsPrjName = objQxRoleMenus.prjName;
    const arrQxPrjId = await QxProjects_funcKey(
      clsQxProjectsEN.con_PrjName,
      QxProjectsPrjName,
      enumComparisonOp.Like_03,
    );
    return arrQxPrjId;
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000286)函数映射表对象数据出错,{0}.(in {1}.{2})',
      e,
      qxRoleMenusEx_ConstructorName,
      strThisFuncName,
    );
    console.error(strMsg);
    alert(strMsg);
    throw strMsg;
  }
}

/**
 * 根据关键字获取相应记录的对象
 * (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjByKeyIdAsync)
 * @param lngmId:关键字
 * @returns 对象
 **/
export async function QxRoleMenusEx_GetObjLstByMenuIdAndPrjId(
  strMenuId: string,
  strQxPrjId: string,
): Promise<Array<clsQxRoleMenusEN>> {
  const strThisFuncName = 'GetObjLstByMenuIdAndPrjId';
  try {
    if (strMenuId == '') {
      const strMsg = Format(
        '参数:[strMenuId]不能为空!(In clsQxRoleMenusExWApi.GetObjLstByMenuIdAndPrjId)',
      );
      console.error(strMsg);
      throw strMsg;
    }
    if (strQxPrjId == '') {
      const strMsg = Format(
        '参数:[strQxPrjId]不能为空!(In clsQxRoleMenusExWApi.GetObjLstByMenuIdAndPrjId)',
      );
      console.error(strMsg);
      throw strMsg;
    }
    const strWhere = `${clsQxRoleMenusEN.con_MenuId} = '${strMenuId}' and ${clsQxRoleMenusEN.con_QxPrjId} = '${strQxPrjId}'`;
    //console.log(returnObj);
    const arrObjLst = await QxRoleMenus_GetObjLstAsync(strWhere);
    return arrObjLst;
  } catch (error: any) {
    console.error(error);
    const strMsg = `获取对象列表时出错。${error}`;
    throw strMsg;
  }
}

export async function QxRoleMenusEx_GetObjLstByCmPrjId(
  strCmPrjId: string,
): Promise<Array<clsQxRoleMenusEN>> {
  const strThisFuncName = 'GetObjLstByMenuIdAndPrjId';
  try {
    if (strCmPrjId == '') {
      const strMsg = Format(
        '参数:[strCmPrjId]不能为空!(In clsQxRoleMenusExWApi.QxRoleMenusEx_GetObjLstByCmPrjId)',
      );
      console.error(strMsg);
      throw strMsg;
    }
    const strWhere = ` ${clsQxRoleMenusEN.con_CmPrjId} = '${strCmPrjId}'`;
    //console.log(returnObj);
    const arrObjLst = await QxRoleMenus_GetObjLstAsync(strWhere);
    return arrObjLst;
  } catch (error: any) {
    console.error(error);
    const strMsg = `获取对象列表时出错。${error}`;
    throw strMsg;
  }
}

export async function QxRoleMenusEx_GetMenuIdLstByCmPrjId(
  strQxPrjId: string,
  strCmPrjId: string,
): Promise<Array<string>> {
  const strThisFuncName = 'GetObjLstByMenuIdAndPrjId';
  try {
    if (strCmPrjId == '') {
      const strMsg = Format(
        '参数:[strCmPrjId]不能为空!(In clsQxRoleMenusExWApi.QxRoleMenusEx_GetObjLstByCmPrjId)',
      );
      console.error(strMsg);
      throw strMsg;
    }

    //console.log(returnObj);
    const arrObjLst = await QxRoleMenus_GetObjLstCache(strQxPrjId);
    const arrObjLst_Sel = arrObjLst.filter((x) => x.cmPrjId == strCmPrjId);
    return arrObjLst_Sel.map((x) => x.menuId);
  } catch (error: any) {
    console.error(error);
    const strMsg = `获取对象列表时出错。${error}`;
    throw strMsg;
  }
}

/**
 * 删除角色菜单
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strRoleId: 角色Id
 * @param strMenuSetId: 菜单集Id
 * @param strMenuId: 菜单Id
 * @returns 获取的相应对象列表
 */
export async function QxRoleMenusEx_Delete(
  strRoleId: string,
  strMenuSetId: string,
  strMenuId: string,
): Promise<boolean> {
  const strThisFuncName = QxRoleMenusEx_Delete.name;
  const strAction = 'Delete';
  const strUrl = GetWebApiUrl_GP(qxRoleMenusExController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strRoleId,
      strMenuSetId,
      strMenuId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
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
        qxRoleMenusEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        qxRoleMenusEx_ConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
