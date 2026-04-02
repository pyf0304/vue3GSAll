import { clsQxRolePotenceRela } from '@/ts/L0Entity/PotenceMan/clsQxRolePotenceRela';
import { clsQxRolePotenceRelaEN } from '@/ts/L0Entity/PotenceMan/clsQxRolePotenceRelaEN';
import { QxPrjPotence_GetObjLstByPotenceIdLstCache } from '@/ts/L3ForWApi/PotenceMan/clsQxPrjPotenceWApi';

import { QxRoles_GetObjLstCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { QxPrjPotenceEx_GetPotenceIdByPotenceName } from '@/ts/L3ForWApiExShare/PotenceMan/clsQxPrjPotenceExWApi';
import {
  QxRolePotenceRelaEx_GetObjLstByPotenceIdAndPrjId,
  QxRolePotenceRelaEx_GetObjLstByPrjId,
} from '@/ts/L3ForWApiExShare/PotenceMan/clsQxRolePotenceRelaExWApi';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { defineStore } from 'pinia';

export function QxRolePotenceRelaEx_CopyTo(
  objQxRolePotenceRelaENS: clsQxRolePotenceRelaEN,
): clsQxRolePotenceRela {
  const strThisFuncName = QxRolePotenceRelaEx_CopyTo.name;
  const objQxRolePotenceRelaENT = new clsQxRolePotenceRela();
  try {
    ObjectAssign(objQxRolePotenceRelaENT, objQxRolePotenceRelaENS);
    return objQxRolePotenceRelaENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objQxRolePotenceRelaENT;
  }
}

export interface potenceRoleNames {
  potenceId: string;
  prjId: string;
  roleNames: string;
  roleIds: string;
}

// export interface roleMenuNames {
//   roleId: string;
//   potenceNames: string;
//   potenceIds: string;
// }
// 定义 TabsState
export interface QxRolePotenceRelaState {
  qxRolePotenceRelaLst: clsQxRolePotenceRela[];
  potenceRoleNamesLst: potenceRoleNames[];
  // roleMenuNamesLst: roleMenuNames[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useQxRolePotenceRelaStore = defineStore({
  id: 'QxRolePotenceRela',

  state(): QxRolePotenceRelaState {
    return {
      qxRolePotenceRelaLst: [],
      potenceRoleNamesLst: [],
      // roleMenuNamesLst: [],
    };
  },

  actions: {
    async getRoleNamesBak(
      strPotenceId: string,
      strCmPrjId: string,
      strQxPrjId: string,
    ): Promise<string> {
      if (strPotenceId == '') return '';
      if (strPotenceId == null) return '';
      if (strQxPrjId == '') return '';
      if (strQxPrjId == null) return '';
      const objRoleNames = this.potenceRoleNamesLst.find(
        (x) => x.potenceId === strPotenceId && x.prjId === strQxPrjId,
      );
      if (objRoleNames != null) return objRoleNames.roleNames;

      let arrRoleMenus = this.qxRolePotenceRelaLst.filter(
        (x) => x.potenceId === strPotenceId && x.qxPrjId === strQxPrjId,
      );
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRolePotenceRelaEx_GetObjLstByPotenceIdAndPrjId(
          strPotenceId,
          strQxPrjId,
        );
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            potenceId: strPotenceId,
            prjId: strQxPrjId,
            cmPrjId: '',
            roleIds: '',
            roleNames: '',
          };
          this.potenceRoleNamesLst.push(objmenuRoleNames0);
          return '';
        }
        arrRoleMenus = arrObjLst.map(QxRolePotenceRelaEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.qxRolePotenceRelaLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter((x) => arrRoleIds.indexOf(x.roleId) > -1);
      const arrRoleNames = arrQxRolesCache_Sel.map((x) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objmenuRoleNames = {
        potenceId: strPotenceId,
        prjId: strQxPrjId,
        cmPrjId: strCmPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.potenceRoleNamesLst.push(objmenuRoleNames);
      return strRoleNames;
    },

    delRoleNamesByPotenceId(strPotenceId: string): boolean {
      if (strPotenceId == '') return true;
      if (strPotenceId == null) return true;

      let intIndex = this.potenceRoleNamesLst.findIndex((x) => x.potenceId === strPotenceId);

      this.potenceRoleNamesLst = this.potenceRoleNamesLst.filter(
        (item) => item.potenceId !== strPotenceId,
      );

      if (intIndex > -1) {
        console.log(`权限Id:${strPotenceId}在角色权限列表中已经移除！`);
      } else {
        console.error(`权限Id:${strPotenceId}在角色权限列表中不存在！`);
        return false;
      }

      intIndex = this.qxRolePotenceRelaLst.findIndex((x) => x.potenceId === strPotenceId);

      this.qxRolePotenceRelaLst = this.qxRolePotenceRelaLst.filter(
        (item) => item.potenceId !== strPotenceId,
      );

      if (intIndex > -1) {
        console.log(`权限Id:${strPotenceId}在角色权限列表中已经移除！`);
        return true;
      } else {
        console.error(`权限Id:${strPotenceId}在角色权限列表中不存在！`);
        return false;
      }
    },
    async getRoleNames(strPotenceId: string, strQxPrjId: string): Promise<string> {
      if (strPotenceId == '') return '';
      if (strPotenceId == null) return '';

      const objRoleNames = this.potenceRoleNamesLst.find((x) => x.potenceId === strPotenceId);
      if (objRoleNames != null) return objRoleNames.roleNames;

      let arrRoleMenus = this.qxRolePotenceRelaLst.filter((x) => x.potenceId === strPotenceId);

      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRolePotenceRelaEx_GetObjLstByPotenceIdAndPrjId(
          strPotenceId,
          strQxPrjId,
        );
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            potenceId: strPotenceId,
            prjId: '',

            roleIds: '',
            roleNames: '',
          };
          this.potenceRoleNamesLst.push(objmenuRoleNames0);
          return '';
        }
        arrRoleMenus = arrObjLst.map(QxRolePotenceRelaEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.qxRolePotenceRelaLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter((x) => arrRoleIds.indexOf(x.roleId) > -1);
      const arrRoleNames = arrQxRolesCache_Sel.map((x) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objmenuRoleNames = {
        potenceId: strPotenceId,
        prjId: strQxPrjId,

        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.potenceRoleNamesLst.push(objmenuRoleNames);
      return strRoleNames;
    },
    async getRoleNamesWithDelButton(
      strPotenceId: string,
      strCmPrjId: string,
      strQxPrjId: string,
    ): Promise<string> {
      if (strPotenceId == '') return '';
      if (strPotenceId == null) return '';
      if (strQxPrjId == '') return '';
      if (strQxPrjId == null) return '';
      const objRoleNames = this.potenceRoleNamesLst.find(
        (x) => x.potenceId === strPotenceId && x.prjId === strQxPrjId,
      );
      if (objRoleNames != null) return objRoleNames.roleNames;

      let arrRoleMenus = this.qxRolePotenceRelaLst.filter(
        (x) => x.potenceId === strPotenceId && x.qxPrjId === strQxPrjId,
      );
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRolePotenceRelaEx_GetObjLstByPotenceIdAndPrjId(
          strPotenceId,
          strQxPrjId,
        );
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            potenceId: strPotenceId,
            prjId: strQxPrjId,
            cmPrjId: strCmPrjId,
            roleIds: '',
            roleNames: '',
          };
          this.potenceRoleNamesLst.push(objmenuRoleNames0);
          return '';
        }
        arrRoleMenus = arrObjLst.map(QxRolePotenceRelaEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.qxRolePotenceRelaLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter((x) => arrRoleIds.indexOf(x.roleId) > -1);
      const arrRoleNames = arrQxRolesCache_Sel.map((x) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objmenuRoleNames = {
        potenceId: strPotenceId,
        prjId: strQxPrjId,
        cmPrjId: strCmPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.potenceRoleNamesLst.push(objmenuRoleNames);
      return strRoleNames;
    },
    delPotenceId(strPotenceId: string, strQxPrjId: string): boolean {
      if (strPotenceId == null) return true;
      if (strPotenceId == '') return true;
      const intIndex = this.potenceRoleNamesLst.findIndex((x) => x.potenceId === strPotenceId);

      this.potenceRoleNamesLst = this.potenceRoleNamesLst.filter(
        (item) => item.potenceId !== strPotenceId,
      );
      this.qxRolePotenceRelaLst = this.qxRolePotenceRelaLst.filter(
        (item) => item.potenceId !== strPotenceId,
      );

      if (intIndex > -1) {
        console.log(`菜单Id:${strPotenceId}在菜单角色关系列表中已经移除！`);
        return true;
      } else {
        console.error(`菜单Id:${strPotenceId}在菜单角色关系列表中不存在！`);
        return false;
      }
    },
    async getRoleIds(strPotenceId: string, strQxPrjId: string): Promise<Array<string>> {
      if (strPotenceId == '') return [];
      if (strPotenceId == null) return [];
      if (strQxPrjId == '') return [];
      if (strQxPrjId == null) return [];

      let arrRoleMenus = this.qxRolePotenceRelaLst.filter((x) => x.potenceId === strPotenceId);
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRolePotenceRelaEx_GetObjLstByPotenceIdAndPrjId(
          strPotenceId,
          strQxPrjId,
        );
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            potenceId: strPotenceId,
            prjId: strQxPrjId,

            roleIds: '',
            roleNames: '',
          };
          this.potenceRoleNamesLst.push(objmenuRoleNames0);
          return [];
        }
        arrRoleMenus = arrObjLst
          .filter((x) => x.potenceId == strPotenceId)
          .map(QxRolePotenceRelaEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.qxRolePotenceRelaLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter((x) => arrRoleIds.indexOf(x.roleId) > -1);
      const arrRoleNames = arrQxRolesCache_Sel.map((x) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objmenuRoleNames = {
        potenceId: strPotenceId,
        prjId: strQxPrjId,

        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.potenceRoleNamesLst.push(objmenuRoleNames);

      return arrRoleIds;
    },

    async getRoleIdsByPotenceName(
      strPotenceName: string,
      strQxPrjId: string,
    ): Promise<Array<string>> {
      if (strPotenceName == '') return [];
      if (strPotenceName == null) return [];
      if (strQxPrjId == '') return [];
      if (strQxPrjId == null) return [];

      const strPotenceId = await QxPrjPotenceEx_GetPotenceIdByPotenceName(
        strPotenceName,
        strQxPrjId,
      );
      let arrRoleMenus = this.qxRolePotenceRelaLst.filter((x) => x.potenceId === strPotenceId);
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRolePotenceRelaEx_GetObjLstByPotenceIdAndPrjId(
          strPotenceId,
          strQxPrjId,
        );
        if (arrObjLst.length == 0) {
          const objmenuRoleNames0 = {
            potenceId: strPotenceId,
            prjId: strQxPrjId,

            roleIds: '',
            roleNames: '',
          };
          this.potenceRoleNamesLst.push(objmenuRoleNames0);
          return [];
        }
        arrRoleMenus = arrObjLst
          .filter((x) => x.potenceId == strPotenceId)
          .map(QxRolePotenceRelaEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.qxRolePotenceRelaLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter((x) => arrRoleIds.indexOf(x.roleId) > -1);
      const arrRoleNames = arrQxRolesCache_Sel.map((x) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objmenuRoleNames = {
        potenceId: strPotenceId,
        prjId: strQxPrjId,

        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.potenceRoleNamesLst.push(objmenuRoleNames);

      return arrRoleIds;
    },
    async getPotenceIdsByPrjId(strPrjId: string): Promise<Array<string>> {
      if (strPrjId == '') return [];
      if (strPrjId == null) return [];

      const qxRolePotenceRelaLstSel = this.qxRolePotenceRelaLst.filter(
        (x) => x.qxPrjId === strPrjId,
      );
      if (qxRolePotenceRelaLstSel.length > 0) {
        const arr = qxRolePotenceRelaLstSel.map((x) => x.potenceId);
        return arr;
      }

      let arrObjLst = await QxRolePotenceRelaEx_GetObjLstByPrjId(strPrjId);
      if (arrObjLst.length == 0) {
        return [];
      }
      for (const objQxRolePotenceRelaEN of arrObjLst) {
        const obj = QxRolePotenceRelaEx_CopyTo(objQxRolePotenceRelaEN);
        qxRolePotenceRelaLstSel.push(obj);
      }
      const arr = arrObjLst.map((x) => x.potenceId);
      return arr;
    },
    async getPotenceNamesByPrjId(strRoleId: string, strQxPrjId: string): Promise<Array<string>> {
      if (strQxPrjId == '') return [];
      if (strQxPrjId == null) return [];

      const qxRolePotenceRelaLstSel = this.qxRolePotenceRelaLst.filter(
        (x) => x.qxPrjId === strQxPrjId && x.roleId == strRoleId,
      );
      if (qxRolePotenceRelaLstSel.length > 0) {
        const arrPotenceId = qxRolePotenceRelaLstSel.map((x) => x.potenceId);
        const arrQxPrjPotence = await QxPrjPotence_GetObjLstByPotenceIdLstCache(
          arrPotenceId,
          strQxPrjId,
        );
        const arrMenuNames = arrQxPrjPotence.map((x) => x.potenceName);
        return arrMenuNames;
      }

      let arrObjLst = await QxRolePotenceRelaEx_GetObjLstByPrjId(strQxPrjId);
      if (arrObjLst.length == 0) {
        return [];
      }
      for (const objQxRolePotenceRelaEN of arrObjLst) {
        const obj = QxRolePotenceRelaEx_CopyTo(objQxRolePotenceRelaEN);
        qxRolePotenceRelaLstSel.push(obj);
      }
      const arrPotenceId = arrObjLst.filter((x) => x.roleId == strRoleId).map((x) => x.potenceId);
      const arrQxPrjPotence = await QxPrjPotence_GetObjLstByPotenceIdLstCache(
        arrPotenceId,
        strQxPrjId,
      );
      const arrMenuNames = arrQxPrjPotence.map((x) => x.potenceName);
      return arrMenuNames;
    },

    async getPotenceIdsByRoleId(strRoleId: string, strQxPrjId: string): Promise<Array<string>> {
      if (strQxPrjId == '') return [];
      if (strQxPrjId == null) return [];

      const qxRolePotenceRelaLstSel = this.qxRolePotenceRelaLst.filter(
        (x) => x.qxPrjId === strQxPrjId && x.roleId == strRoleId,
      );
      if (qxRolePotenceRelaLstSel.length > 0) {
        const arr = qxRolePotenceRelaLstSel.map((x) => x.potenceId);
        return arr;
      }

      let arrObjLst = await QxRolePotenceRelaEx_GetObjLstByPrjId(strQxPrjId);
      if (arrObjLst.length == 0) {
        return [];
      }

      if (arrObjLst.length == 0) {
        return [];
      }
      arrObjLst = arrObjLst.filter((x) => x.roleId == strRoleId);
      if (arrObjLst.length == 0) {
        return [];
      }
      for (const objQxRolePotenceRelaEN of arrObjLst) {
        const obj = QxRolePotenceRelaEx_CopyTo(objQxRolePotenceRelaEN);
        qxRolePotenceRelaLstSel.push(obj);
      }
      const arr = arrObjLst.map((x) => x.potenceId);
      return arr;
    },

    delPotenceIdsByRoleId(strRoleId: string): boolean {
      if (strRoleId == '') return true;
      if (strRoleId == null) return true;

      const intIndex = this.qxRolePotenceRelaLst.findIndex((item) => item.roleId != strRoleId);

      this.qxRolePotenceRelaLst = this.qxRolePotenceRelaLst.filter(
        (item) => item.roleId != strRoleId,
      );

      if (intIndex > -1) {
        console.log(`角色Id:${strRoleId}在角色权限列表中已经移除！`);
        return true;
      } else {
        console.error(`角色Id:${strRoleId}在角色权限列表中不存在！`);
        return false;
      }
    },
    async getObjLst(
      strPotenceId: string,
      strQxPrjId: string,
    ): Promise<Array<clsQxRolePotenceRela> | null> {
      if (strPotenceId == '') return null;
      if (strPotenceId == null) return null;
      if (strQxPrjId == '') return null;
      if (strQxPrjId == null) return null;

      let arrRoleMenus = this.qxRolePotenceRelaLst.filter(
        (x) => x.potenceId === strPotenceId && x.qxPrjId === strQxPrjId,
      );
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await QxRolePotenceRelaEx_GetObjLstByPotenceIdAndPrjId(
          strPotenceId,
          strQxPrjId,
        );
        if (arrObjLst.length == 0) {
          return null;
        }
        arrRoleMenus = arrObjLst.map(QxRolePotenceRelaEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.qxRolePotenceRelaLst.push(x);
        });
      }

      return arrRoleMenus;
    },
  },
});

export const qxRolePotenceRelaStore = useQxRolePotenceRelaStore();
