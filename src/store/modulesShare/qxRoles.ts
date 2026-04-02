import { clsQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRoles';
import { clsQxRolesEN } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

import { QxRoles_GetObjByRoleIdAsync } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface userSimEN {
//   roleId: string;
//   roleName: string;
// }

export function qxRolesEx_CopyTo(objqxRolesENS: clsQxRolesEN): clsQxRoles {
  const strThisFuncName = qxRolesEx_CopyTo.name;
  const objqxRolesENT = new clsQxRoles();
  try {
    ObjectAssign(objqxRolesENT, objqxRolesENS);
    return objqxRolesENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objqxRolesENT;
  }
}
// 定义 TabsState
export interface qxRolesState {
  userLst: clsQxRoles[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useQxRolesStore = defineStore({
  id: 'QxRoles',

  state(): qxRolesState {
    return {
      userLst: [],
    };
  },

  actions: {
    async getRoleName(strRoleId: string): Promise<string> {
      if (strRoleId == '') return '';
      if (strRoleId == null) return '';
      const objUser = this.userLst.find((x) => x.roleId === strRoleId);
      if (objUser != null && objUser != undefined) return objUser.roleName;
      let objQxRolesEN = await QxRoles_GetObjByRoleIdAsync(strRoleId);
      if (objQxRolesEN == null) {
        const strMsg = `RoleId=${strRoleId} 的QxRoles中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objQxRoles = qxRolesEx_CopyTo(objQxRolesEN);
      this.userLst.push(objQxRoles);
      return objQxRoles.roleName;
    },

    async getObj(strRoleId: string): Promise<clsQxRoles | null> {
      if (strRoleId == '') return null;
      if (strRoleId == null) return null;
      const objUser = this.userLst.find((x) => x.roleId === strRoleId);
      if (objUser != null && objUser != undefined) return objUser;

      let objQxRolesEN = await QxRoles_GetObjByRoleIdAsync(strRoleId);
      if (objQxRolesEN == null) {
        const strMsg = `RoleId=${strRoleId} 的QxRoles中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objQxRoles = qxRolesEx_CopyTo(objQxRolesEN);
      this.userLst.push(objQxRoles);
      return objQxRoles;
    },
    getRoleIdLstByRoleName(strRoleName: string, strComparisonOp: enumComparisonOp): string[] {
      let arrUser;
      let arrRoleId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.userLst.filter((x) => x.roleName === strRoleName);
          arrRoleId = arrUser.map((x) => x.roleId);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.userLst.filter((x) => x.roleName.indexOf(strRoleName) > -1);
          arrRoleId = arrUser.map((x) => x.roleId);
          break;
      }
      return arrRoleId;
    },

    async getFieldValue(strRoleId: string, strOutFldName: string): Promise<string> {
      let objQxRoles = this.userLst.find((x) => x.roleId === strRoleId);
      if (objQxRoles == null) {
        const objQxRolesEN = await QxRoles_GetObjByRoleIdAsync(strRoleId);
        if (objQxRolesEN == null) return '';
        objQxRoles = qxRolesEx_CopyTo(objQxRolesEN);
        this.userLst.push(objQxRoles);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clsQxRolesEN.con_RoleId:
          return objQxRoles.roleId;
        case clsQxRolesEN.con_RoleName:
          return objQxRoles.roleName;

        // case clsQxRolesEN.con_CollegeName:
        //   return objQxRoles.collegeName;
        // case clsQxRolesEN.con_IdXzMajor:
        //   return objQxRoles.idXzMajor;
        // case clsQxRolesEN.con_MajorName:
        //   return objQxRoles.majorName;
        // case clsQxRolesEN.con_HeadPic:
        //   return objQxRoles.headPic;
        // case clsQxRolesEN.con_IsGSuser:
        //   return objQxRoles.isGSuser.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[qxRoles]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

export const qxRolesStore = useQxRolesStore();
