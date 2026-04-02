import { clsQxRoleMenus } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenus';
import { clsQxRoleMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusEN';
import { QxPrjMenus_GetObjLstByMenuIdLstCache } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import { QxRoles_GetObjLstCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';

import {
  QxRoleMenusEx_GetObjLstByCmPrjId,
  QxRoleMenusEx_GetObjLstByMenuIdAndPrjId,
} from '@/ts/L3ForWApiExShare/MenuManage_GP/clsQxRoleMenusExWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { defineStore } from 'pinia';

export function QxRoleMenusEx_CopyTo(objQxRoleMenusENS: clsQxRoleMenusEN): clsQxRoleMenus {
  const strThisFuncName = QxRoleMenusEx_CopyTo.name;
  const objQxRoleMenusENT = new clsQxRoleMenus();
  try {
    ObjectAssign(objQxRoleMenusENT, objQxRoleMenusENS);
    return objQxRoleMenusENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objQxRoleMenusENT;
  }
}

export interface menuRoleNames {
  menuId: string;
  prjId: string;
  cmPrjId: string;
  roleNames: string;
  roleIds: string;
}

// export interface roleMenuNames {
//   roleId: string;
//   menuSetId: string;
//   cmPrjId: string;
//   menuNames: string;
//   menuIds: string;
// }
// 定义 TabsState
export interface QxRoleMenusState {
  menuRoleRelationLst: clsQxRoleMenus[];
  menuRoleNamesLst: menuRoleNames[];
  // roleMenuNamesLst: roleMenuNames[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useQxRoleMenusStore = defineStore({
  id: 'QxRoleMenus',

  state(): QxRoleMenusState {
    return {
      menuRoleRelationLst: [],
      menuRoleNamesLst: [],
      // roleMenuNamesLst: [],
    };
  },

  actions: {
    async getRoleNamesBak(
      strMenuId: string,
      strCmPrjId: string,
      strQxPrjId: string,
    ): Promise<string> {
      if (strMenuId == '') return '';
      if (strMenuId == null) return '';
      if (strQxPrjId == '') return '';
      if (strQxPrjId == null) return '';
      const objRoleNames = this.menuRoleNamesLst.find(
        (x) => x.menuId === strMenuId && x.prjId === strQxPrjId,
      );
      if (objRoleNames != null) return objRoleNames.roleNames;

      let arrRoleMenus = this.menuRoleRelationLst.filter(
        (x) => x.menuId === strMenuId && x.qxPrjId === strQxPrjId,
      );
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuIdAndPrjId(strMenuId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            menuId: strMenuId,
            prjId: strQxPrjId,
            cmPrjId: '',
            roleIds: '',
            roleNames: '',
          };
          this.menuRoleNamesLst.push(objmenuRoleNames0);
          return '';
        }
        arrRoleMenus = arrObjLst.filter((x) => x.cmPrjId == strCmPrjId).map(QxRoleMenusEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.menuRoleRelationLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter((x) => arrRoleIds.indexOf(x.roleId) > -1);
      const arrRoleNames = arrQxRolesCache_Sel.map((x) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objmenuRoleNames = {
        menuId: strMenuId,
        prjId: strQxPrjId,
        cmPrjId: strCmPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.menuRoleNamesLst.push(objmenuRoleNames);
      return strRoleNames;
    },

    delRoleNamesByMenuId(strMenuId: string): boolean {
      if (strMenuId == '') return true;
      if (strMenuId == null) return true;

      let intIndex = this.menuRoleNamesLst.findIndex((x) => x.menuId === strMenuId);

      this.menuRoleNamesLst = this.menuRoleNamesLst.filter((item) => item.menuId !== strMenuId);

      if (intIndex > -1) {
        console.log(`用户Id:${strMenuId}在角色菜单列表中已经移除！`);
      } else {
        console.error(`用户Id:${strMenuId}在角色菜单列表中不存在！`);
        return false;
      }

      intIndex = this.menuRoleRelationLst.findIndex((x) => x.menuId === strMenuId);

      this.menuRoleRelationLst = this.menuRoleRelationLst.filter(
        (item) => item.menuId !== strMenuId,
      );

      if (intIndex > -1) {
        console.log(`用户Id:${strMenuId}在角色菜单列表中已经移除！`);
        return true;
      } else {
        console.error(`用户Id:${strMenuId}在角色菜单列表中不存在！`);
        return false;
      }
    },
    async getRoleNames(strMenuId: string, strCmPrjId: string, strQxPrjId: string): Promise<string> {
      if (strMenuId == '') return '';
      if (strMenuId == null) return '';
      if (strCmPrjId == '') return '';
      if (strCmPrjId == null) return '';
      const objRoleNames = this.menuRoleNamesLst.find(
        (x) => x.menuId === strMenuId && x.cmPrjId === strCmPrjId,
      );
      if (objRoleNames != null) return objRoleNames.roleNames;

      let arrRoleMenus = this.menuRoleRelationLst.filter(
        (x) => x.menuId === strMenuId && x.cmPrjId === strCmPrjId,
      );

      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuIdAndPrjId(strMenuId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            menuId: strMenuId,
            prjId: '',
            cmPrjId: strCmPrjId,
            roleIds: '',
            roleNames: '',
          };
          this.menuRoleNamesLst.push(objmenuRoleNames0);
          return '';
        }
        arrRoleMenus = arrObjLst.filter((x) => x.cmPrjId == strCmPrjId).map(QxRoleMenusEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.menuRoleRelationLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter((x) => arrRoleIds.indexOf(x.roleId) > -1);
      const arrRoleNames = arrQxRolesCache_Sel.map((x) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objmenuRoleNames = {
        menuId: strMenuId,
        prjId: strQxPrjId,
        cmPrjId: strCmPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.menuRoleNamesLst.push(objmenuRoleNames);
      return strRoleNames;
    },
    async getRoleNamesWithDelButton(
      strMenuId: string,
      strCmPrjId: string,
      strQxPrjId: string,
    ): Promise<string> {
      if (strMenuId == '') return '';
      if (strMenuId == null) return '';
      if (strQxPrjId == '') return '';
      if (strQxPrjId == null) return '';
      const objRoleNames = this.menuRoleNamesLst.find(
        (x) => x.menuId === strMenuId && x.prjId === strQxPrjId,
      );
      if (objRoleNames != null) return objRoleNames.roleNames;

      let arrRoleMenus = this.menuRoleRelationLst.filter(
        (x) => x.menuId === strMenuId && x.qxPrjId === strQxPrjId,
      );
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuIdAndPrjId(strMenuId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            menuId: strMenuId,
            prjId: strQxPrjId,
            cmPrjId: strCmPrjId,
            roleIds: '',
            roleNames: '',
          };
          this.menuRoleNamesLst.push(objmenuRoleNames0);
          return '';
        }
        arrRoleMenus = arrObjLst.filter((x) => x.cmPrjId == strCmPrjId).map(QxRoleMenusEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.menuRoleRelationLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter((x) => arrRoleIds.indexOf(x.roleId) > -1);
      const arrRoleNames = arrQxRolesCache_Sel.map((x) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objmenuRoleNames = {
        menuId: strMenuId,
        prjId: strQxPrjId,
        cmPrjId: strCmPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.menuRoleNamesLst.push(objmenuRoleNames);
      return strRoleNames;
    },
    delMenuId(strMenuId: string, strQxPrjId: string): boolean {
      if (strMenuId == null) return true;
      if (strMenuId == '') return true;
      const intIndex = this.menuRoleNamesLst.findIndex((x) => x.menuId === strMenuId);

      this.menuRoleNamesLst = this.menuRoleNamesLst.filter((item) => item.menuId !== strMenuId);
      this.menuRoleRelationLst = this.menuRoleRelationLst.filter(
        (item) => item.menuId !== strMenuId,
      );

      if (intIndex > -1) {
        console.log(`菜单Id:${strMenuId}在菜单角色关系列表中已经移除！`);
        return true;
      } else {
        console.error(`菜单Id:${strMenuId}在菜单角色关系列表中不存在！`);
        return false;
      }
    },
    async getRoleIds(
      strMenuId: string,
      strMenuSetId: string,
      strCmPrjId: string,
      strQxPrjId: string,
    ): Promise<Array<string>> {
      if (strMenuId == '') return [];
      if (strMenuId == null) return [];
      if (strQxPrjId == '') return [];
      if (strQxPrjId == null) return [];

      let arrRoleMenus = this.menuRoleRelationLst.filter(
        (x) => x.menuId === strMenuId && x.menuSetId === strMenuSetId && x.cmPrjId === strCmPrjId,
      );
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuIdAndPrjId(strMenuId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            menuId: strMenuId,
            prjId: strQxPrjId,
            cmPrjId: strCmPrjId,
            roleIds: '',
            roleNames: '',
          };
          this.menuRoleNamesLst.push(objmenuRoleNames0);
          return [];
        }
        arrRoleMenus = arrObjLst
          .filter(
            (x) => x.menuSetId === strMenuSetId && x.menuId == strMenuId && x.cmPrjId == strCmPrjId,
          )
          .map(QxRoleMenusEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.menuRoleRelationLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter((x) => arrRoleIds.indexOf(x.roleId) > -1);
      const arrRoleNames = arrQxRolesCache_Sel.map((x) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objmenuRoleNames = {
        menuId: strMenuId,
        prjId: strQxPrjId,
        cmPrjId: strCmPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.menuRoleNamesLst.push(objmenuRoleNames);

      return arrRoleIds;
    },
    async getMenuIdsByCmPrjId(strCmPrjId: string): Promise<Array<string>> {
      if (strCmPrjId == '') return [];
      if (strCmPrjId == null) return [];

      const menuRoleRelationLstSel = this.menuRoleRelationLst.filter(
        (x) => x.cmPrjId === strCmPrjId,
      );
      if (menuRoleRelationLstSel.length > 0) {
        const arr = menuRoleRelationLstSel.map((x) => x.menuId);
        return arr;
      }

      let arrObjLst = await QxRoleMenusEx_GetObjLstByCmPrjId(strCmPrjId);
      if (arrObjLst.length == 0) {
        return [];
      }
      for (const objQxRoleMenusEN of arrObjLst) {
        const obj = QxRoleMenusEx_CopyTo(objQxRoleMenusEN);
        menuRoleRelationLstSel.push(obj);
      }
      const arr = arrObjLst.map((x) => x.menuId);
      return arr;
    },
    async getMenuNamesByCmPrjId(
      strRoleId: string,
      strMenuSetId: string,
      strCmPrjId: string,
      strQxPrjId: string,
    ): Promise<Array<string>> {
      if (strCmPrjId == '') return [];
      if (strCmPrjId == null) return [];

      const menuRoleRelationLstSel = this.menuRoleRelationLst.filter(
        (x) => x.cmPrjId === strCmPrjId && x.roleId == strRoleId && x.menuSetId == strMenuSetId,
      );
      if (menuRoleRelationLstSel.length > 0) {
        const arrMenuId = menuRoleRelationLstSel.map((x) => x.menuId);
        const arrQxPrjMenus = await QxPrjMenus_GetObjLstByMenuIdLstCache(arrMenuId, strQxPrjId);
        const arrMenuNames = arrQxPrjMenus.map((x) => x.menuName);
        return arrMenuNames;
      }

      let arrObjLst = await QxRoleMenusEx_GetObjLstByCmPrjId(strCmPrjId);
      if (arrObjLst.length == 0) {
        return [];
      }
      for (const objQxRoleMenusEN of arrObjLst) {
        const obj = QxRoleMenusEx_CopyTo(objQxRoleMenusEN);
        menuRoleRelationLstSel.push(obj);
      }
      const arrMenuId = arrObjLst
        .filter((x) => x.roleId == strRoleId && x.menuSetId == strMenuSetId)
        .map((x) => x.menuId);
      const arrQxPrjMenus = await QxPrjMenus_GetObjLstByMenuIdLstCache(arrMenuId, strQxPrjId);
      const arrMenuNames = arrQxPrjMenus.map((x) => x.menuName);
      return arrMenuNames;
    },

    async getUpMenuNamesByCmPrjId(
      strRoleId: string,
      strMenuSetId: string,
      strCmPrjId: string,
      strQxPrjId: string,
    ): Promise<Array<string>> {
      if (strCmPrjId == '') return [];
      if (strCmPrjId == null) return [];

      const menuRoleRelationLstSel = this.menuRoleRelationLst.filter(
        (x) => x.cmPrjId === strCmPrjId && x.roleId == strRoleId && x.menuSetId == strMenuSetId,
      );
      if (menuRoleRelationLstSel.length > 0) {
        const arrMenuId = menuRoleRelationLstSel.map((x) => x.menuId);
        const arrQxPrjMenus = await QxPrjMenus_GetObjLstByMenuIdLstCache(arrMenuId, strQxPrjId);
        const arrMenuNames = arrQxPrjMenus.map((x) => x.menuName);
        return arrMenuNames;
      }

      let arrObjLst = await QxRoleMenusEx_GetObjLstByCmPrjId(strCmPrjId);
      if (arrObjLst.length == 0) {
        return [];
      }
      for (const objQxRoleMenusEN of arrObjLst) {
        const obj = QxRoleMenusEx_CopyTo(objQxRoleMenusEN);
        menuRoleRelationLstSel.push(obj);
      }
      const arrMenuId = arrObjLst
        .filter((x) => x.roleId == strRoleId && x.menuSetId == strMenuSetId)
        .map((x) => x.menuId);
      const arrQxPrjMenus = await QxPrjMenus_GetObjLstByMenuIdLstCache(arrMenuId, strQxPrjId);
      const arrUpMenuNames = arrQxPrjMenus
        .filter((x) => x.upMenuId == '00000000')
        .map((x) => x.menuName);
      return arrUpMenuNames;
    },
    async getMenuIdsByMenuSetId(strMenuSetId: string, strCmPrjId: string): Promise<Array<string>> {
      if (strCmPrjId == '') return [];
      if (strCmPrjId == null) return [];

      const menuRoleRelationLstSel = this.menuRoleRelationLst.filter(
        (x) => x.cmPrjId === strCmPrjId && x.menuSetId == strMenuSetId,
      );
      if (menuRoleRelationLstSel.length > 0) {
        const arr = menuRoleRelationLstSel.map((x) => x.menuId);
        return arr;
      }

      let arrObjLst = await QxRoleMenusEx_GetObjLstByCmPrjId(strCmPrjId);
      if (arrObjLst.length == 0) {
        return [];
      }
      arrObjLst = arrObjLst.filter((x) => x.menuSetId == strMenuSetId);
      if (arrObjLst.length == 0) {
        return [];
      }
      for (const objQxRoleMenusEN of arrObjLst) {
        const obj = QxRoleMenusEx_CopyTo(objQxRoleMenusEN);
        menuRoleRelationLstSel.push(obj);
      }
      const arr = arrObjLst.map((x) => x.menuId);
      return arr;
    },

    async getMenuIdsByRoleId(
      strRoleId: string,
      strMenuSetId: string,
      strCmPrjId: string,
    ): Promise<Array<string>> {
      if (strCmPrjId == '') return [];
      if (strCmPrjId == null) return [];

      const menuRoleRelationLstSel = this.menuRoleRelationLst.filter(
        (x) => x.cmPrjId === strCmPrjId && x.menuSetId == strMenuSetId && x.roleId == strRoleId,
      );
      if (menuRoleRelationLstSel.length > 0) {
        const arr = menuRoleRelationLstSel.map((x) => x.menuId);
        return arr;
      }

      let arrObjLst = await QxRoleMenusEx_GetObjLstByCmPrjId(strCmPrjId);
      if (arrObjLst.length == 0) {
        return [];
      }
      arrObjLst = arrObjLst.filter((x) => x.menuSetId == strMenuSetId);
      if (arrObjLst.length == 0) {
        return [];
      }
      arrObjLst = arrObjLst.filter((x) => x.roleId == strRoleId);
      if (arrObjLst.length == 0) {
        return [];
      }
      for (const objQxRoleMenusEN of arrObjLst) {
        const obj = QxRoleMenusEx_CopyTo(objQxRoleMenusEN);
        menuRoleRelationLstSel.push(obj);
      }
      const arr = arrObjLst.map((x) => x.menuId);
      return arr;
    },

    delMenuIdsByRoleId(strRoleId: string): boolean {
      if (strRoleId == '') return true;
      if (strRoleId == null) return true;

      const intIndex = this.menuRoleRelationLst.findIndex((item) => item.roleId != strRoleId);

      this.menuRoleRelationLst = this.menuRoleRelationLst.filter(
        (item) => item.roleId != strRoleId,
      );

      if (intIndex > -1) {
        console.log(`角色Id:${strRoleId}在角色菜单列表中已经移除！`);
        return true;
      } else {
        console.error(`角色Id:${strRoleId}在角色菜单列表中不存在！`);
        return false;
      }
    },
    async getObjLst(strMenuId: string, strQxPrjId: string): Promise<Array<clsQxRoleMenus> | null> {
      if (strMenuId == '') return null;
      if (strMenuId == null) return null;
      if (strQxPrjId == '') return null;
      if (strQxPrjId == null) return null;

      let arrRoleMenus = this.menuRoleRelationLst.filter(
        (x) => x.menuId === strMenuId && x.qxPrjId === strQxPrjId,
      );
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRoleMenusEx_GetObjLstByMenuIdAndPrjId(strMenuId, strQxPrjId);
        if (arrObjLst.length == 0) {
          return null;
        }
        arrRoleMenus = arrObjLst.map(QxRoleMenusEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.menuRoleRelationLst.push(x);
        });
      }

      return arrRoleMenus;
    },
  },
});

export const qxRoleMenusStore = useQxRoleMenusStore();
