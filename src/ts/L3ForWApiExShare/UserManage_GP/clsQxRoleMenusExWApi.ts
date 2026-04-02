/**
 * 类名:clsQxRoleMenusExWApi
 * 表名:QxRoleMenus(00140007)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/06 23:08:22
 * 生成者:pyf
 * 生成服务器IP:
 工程名称:统一平台(0014)
 CM工程:统一平台Spa(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:WA_访问扩展层(TS)(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
   *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 角色菜单(QxRoleMenus)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2024年01月06日.
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
import { clsDateTime } from '@/ts/PubFun/clsDateTime';

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
        objQxRoleMenus.qxPrjId,
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
 * 把一个扩展类的部分属性进行函数转换
 * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_FuncMap)
 * @param objQxRoleMenusS:源对象
 **/
export async function QxRoleMenusEx_FuncMapDateTimeSim(objQxRoleMenus: clsQxRoleMenusENEx) {
  const strThisFuncName = QxRoleMenusEx_FuncMapDateTimeSim.name;
  try {
    if (IsNullOrEmpty(objQxRoleMenus.dateTimeSim) == true) {
      const CommonDataNodeDateTimeSim = clsDateTime.GetDateTime_Sim(objQxRoleMenus.updDate);
      objQxRoleMenus.dateTimeSim = CommonDataNodeDateTimeSim;
    }
  } catch (e) {
    const strMsg = Format(
      '(errid:Watl000476)函数映射表对象数据出错,{0}.(in {1}.{2})',
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
 * 日期:2024-01-06
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
      case clsQxRoleMenusENEx.con_DateTimeSim:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return a.dateTimeSim.localeCompare(b.dateTimeSim);
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
      case clsQxRoleMenusENEx.con_DateTimeSim:
        return (a: clsQxRoleMenusENEx, b: clsQxRoleMenusENEx) => {
          return b.dateTimeSim.localeCompare(a.dateTimeSim);
        };
      default:
        return QxRoleMenus_SortFunByKey(strKey, AscOrDesc);
    }
  }
}

/**
 * 根据扩展字段名去调用相应的映射函数
 * 作者:pyf
 * 日期:2024-01-06
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
    case clsQxRoleMenusENEx.con_DateTimeSim:
      return QxRoleMenusEx_FuncMapDateTimeSim(objQxRoleMenusEx);
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
      objQxRoleMenus.qxPrjId,
      enumComparisonOp.Like_03,
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
 * 为角色设置菜单
 * (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCodeV2)
 * @param strPrjId: 工程Id
 * @param strCmPrjId: Cm工程Id
 * @param strMenuSetId: 菜单集Id
 * @param strRoleId: 角色Id
 * @param strMenuId: 菜单Id
 * @param strOpUserId: 操作用户Id
 * @returns 获取的相应对象列表
 */
export async function QxRoleMenusEx_SetRoleMenu(
  strPrjId: string,
  strCmPrjId: string,
  strMenuSetId: string,
  strRoleId: string,
  strMenuId: string,
  strOpUserId: string,
): Promise<boolean> {
  const strThisFuncName = QxRoleMenusEx_SetRoleMenu.name;
  const strAction = 'SetRoleMenu';
  const strUrl = GetWebApiUrl_GP(qxRoleMenusExController, strAction);
  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strPrjId,
      strCmPrjId,
      strMenuSetId,
      strRoleId,
      strMenuId,
      strOpUserId,
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
