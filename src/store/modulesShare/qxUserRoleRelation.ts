import { clsQxUserRoleRelation } from '@/ts/L0Entity/UsersRight/clsQxUserRoleRelation';
import { QxRoles_GetObjLstCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';

import {
  QxUserRoleRelationEx_CopyTo,
  QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId,
} from '@/ts/L3ForWApiExShare/UsersRight/clsQxUserRoleRelationExWApi';

import { defineStore } from 'pinia';
export interface userRoleNames {
  userId: string;
  prjId: string;
  roleNames: string;
  roleIds: string;
}
// 定义 TabsState
export interface QxUserRoleRelationState {
  userRoleRelationLst: clsQxUserRoleRelation[];
  userRoleNamesLst: userRoleNames[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useQxUserRoleRelationStore = defineStore({
  id: 'QxUserRoleRelation',

  state(): QxUserRoleRelationState {
    return {
      userRoleRelationLst: [],
      userRoleNamesLst: [],
    };
  },

  actions: {
    async getRoleNames(strUserId: string, strQxPrjId: string): Promise<string> {
      if (strUserId == '') return '';
      if (strUserId == null) return '';
      if (strQxPrjId == '') return '';
      if (strQxPrjId == null) return '';
      const objRoleNames = this.userRoleNamesLst.find(
        (x) => x.userId === strUserId && x.prjId === strQxPrjId,
      );
      if (objRoleNames != null) return objRoleNames.roleNames;

      let arrObjUserRoles = this.userRoleRelationLst.filter(
        (x) => x.userId === strUserId && x.qxPrjId === strQxPrjId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId(strUserId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objUserRoleNames0 = {
            userId: strUserId,
            prjId: strQxPrjId,
            roleIds: '',
            roleNames: '',
          };
          this.userRoleNamesLst.push(objUserRoleNames0);
          return '';
        }
        arrObjUserRoles = arrObjLst.map(QxUserRoleRelationEx_CopyTo);
        arrObjUserRoles.forEach((x) => {
          this.userRoleRelationLst.push(x);
        });
      }

      const arrRoleIds = arrObjUserRoles.map((x) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter((x) => arrRoleIds.indexOf(x.roleId) > -1);
      const arrRoleNames = arrQxRolesCache_Sel.map((x) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objUserRoleNames = {
        userId: strUserId,
        prjId: strQxPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.userRoleNamesLst.push(objUserRoleNames);
      return strRoleNames;
    },
    async getRoleNamesWithDelButton(strUserId: string, strQxPrjId: string): Promise<string> {
      if (strUserId == '') return '';
      if (strUserId == null) return '';
      if (strQxPrjId == '') return '';
      if (strQxPrjId == null) return '';
      const objRoleNames = this.userRoleNamesLst.find(
        (x) => x.userId === strUserId && x.prjId === strQxPrjId,
      );
      if (objRoleNames != null) return objRoleNames.roleNames;

      let arrObjUserRoles = this.userRoleRelationLst.filter(
        (x) => x.userId === strUserId && x.qxPrjId === strQxPrjId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId(strUserId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objUserRoleNames0 = {
            userId: strUserId,
            prjId: strQxPrjId,
            roleIds: '',
            roleNames: '',
          };
          this.userRoleNamesLst.push(objUserRoleNames0);
          return '';
        }
        arrObjUserRoles = arrObjLst.map(QxUserRoleRelationEx_CopyTo);
        arrObjUserRoles.forEach((x) => {
          this.userRoleRelationLst.push(x);
        });
      }

      const arrRoleIds = arrObjUserRoles.map((x) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter((x) => arrRoleIds.indexOf(x.roleId) > -1);
      const arrRoleNames = arrQxRolesCache_Sel.map((x) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objUserRoleNames = {
        userId: strUserId,
        prjId: strQxPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.userRoleNamesLst.push(objUserRoleNames);
      return strRoleNames;
    },
    delUser(strUserId: string, strQxPrjId: string): boolean {
      if (strUserId == null) return true;
      if (strUserId == '') return true;
      if (strQxPrjId == null) return true;
      if (strQxPrjId == '') return true;
      const intIndex = this.userRoleNamesLst.findIndex(
        (x) => x.userId === strUserId && x.prjId === strQxPrjId,
      );

      this.userRoleNamesLst = this.userRoleNamesLst.filter((item) => item.userId !== strUserId);
      this.userRoleRelationLst = this.userRoleRelationLst.filter(
        (item) => item.userId !== strUserId,
      );

      if (intIndex > -1) {
        console.log(`用户Id:${strUserId}在用户角色关系列表中已经移除！`);
        return true;
      }
      {
        console.error(`用户Id:${strUserId}在用户角色关系列表中不存在！`);
        return false;
      }
    },
    async getRoleIds(strUserId: string, strQxPrjId: string): Promise<Array<string>> {
      if (strUserId == '') return [];
      if (strUserId == null) return [];
      if (strQxPrjId == '') return [];
      if (strQxPrjId == null) return [];
      const objRoleNames = this.userRoleNamesLst.find(
        (x) => x.userId === strUserId && x.prjId === strQxPrjId,
      );
      if (objRoleNames != null) {
        const arr = objRoleNames.roleIds.split(',');
        return arr;
      }

      let arrObjUserRoles = this.userRoleRelationLst.filter(
        (x) => x.userId === strUserId && x.qxPrjId === strQxPrjId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId(strUserId, strQxPrjId);
        if (arrObjLst.length == 0) {
          const objUserRoleNames0 = {
            userId: strUserId,
            prjId: strQxPrjId,
            roleIds: '',
            roleNames: '',
          };
          this.userRoleNamesLst.push(objUserRoleNames0);
          return [];
        }
        arrObjUserRoles = arrObjLst.map(QxUserRoleRelationEx_CopyTo);
        arrObjUserRoles.forEach((x) => {
          this.userRoleRelationLst.push(x);
        });
      }

      const arrRoleIds = arrObjUserRoles.map((x) => x.roleId);
      const arrQxRolesCache = await QxRoles_GetObjLstCache(strQxPrjId);
      const arrQxRolesCache_Sel = arrQxRolesCache.filter((x) => arrRoleIds.indexOf(x.roleId) > -1);
      const arrRoleNames = arrQxRolesCache_Sel.map((x) => x.roleName);
      const strRoleNames = arrRoleNames.join(',');
      const strRoleIds = arrRoleIds.join(',');

      const objUserRoleNames = {
        userId: strUserId,
        prjId: strQxPrjId,
        roleIds: strRoleIds,
        roleNames: strRoleNames,
      };
      this.userRoleNamesLst.push(objUserRoleNames);

      return arrRoleIds;
    },
    async getObjLst(
      strUserId: string,
      strQxPrjId: string,
    ): Promise<Array<clsQxUserRoleRelation> | null> {
      if (strUserId == '') return null;
      if (strUserId == null) return null;
      if (strQxPrjId == '') return null;
      if (strQxPrjId == null) return null;

      let arrObjUserRoles = this.userRoleRelationLst.filter(
        (x) => x.userId === strUserId && x.qxPrjId === strQxPrjId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId(strUserId, strQxPrjId);
        if (arrObjLst.length == 0) {
          return null;
        }
        arrObjUserRoles = arrObjLst.map(QxUserRoleRelationEx_CopyTo);
        arrObjUserRoles.forEach((x) => {
          this.userRoleRelationLst.push(x);
        });
      }

      return arrObjUserRoles;
    },
  },
});

export const userRoleRelationStore = useQxUserRoleRelationStore();
