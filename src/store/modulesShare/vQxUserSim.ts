import { userRoleRelationStore } from '@/store/modulesShare/qxUserRoleRelation';
import { studentInfoStore } from '@/store/modulesShare/studentInfo';
import { teacherInfoStore } from '@/store/modulesShare/teacherInfo';
import { enumQxUserRoles } from '@/ts/L0Entity/UserManage/clsQxUserRolesEN';
import { clsvQxUsersSim } from '@/ts/L0Entity/UserManage_GP/clsvQxUsersSim';
import { clsvQxUsersSimEN } from '@/ts/L0Entity/UserManage_GP/clsvQxUsersSimEN';
import { QxUsers_GetObjByUserIdAsync, QxUsers_UpdateRecordAsync } from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi';

import {
  Users_GetObjByUserIdAsync,
  Users_UpdateRecordAsync,
} from '@/ts/L3ForWApi/UserManage/clsUsersWApi';

import { vQxUsersSim_GetObjByUserIdAsync } from '@/ts/L3ForWApi/UserManage_GP/clsvQxUsersSimWApi';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface userSimEN {
//   userId: string;
//   userName: string;
// }

export function vQxUsersSimEx_CopyTo(objvQxUsersSimENS: clsvQxUsersSimEN): clsvQxUsersSim {
  const strThisFuncName = vQxUsersSimEx_CopyTo.name;
  const objvQxUsersSimENT = new clsvQxUsersSim();
  try {
    ObjectAssign(objvQxUsersSimENT, objvQxUsersSimENS);
    return objvQxUsersSimENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objvQxUsersSimENT;
  }
}
// 定义 TabsState
export interface vQxUsersSimState {
  userLst: clsvQxUsersSim[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usevQxUsersSimStore = defineStore({
  id: 'vUserSim',

  state(): vQxUsersSimState {
    return {
      userLst: [],
    };
  },

  actions: {
    async getUserName(strUserId: string): Promise<string> {
      if (strUserId == '') return '';
      if (strUserId == null) return '';
      const objUser = this.userLst.find((x) => x.userId === strUserId);
      if (objUser != null && objUser != undefined) return objUser.userName;
      let objvUserSimEN = await vQxUsersSim_GetObjByUserIdAsync(strUserId);
      if (objvUserSimEN == null) {
        const objUserEN = await QxUsers_GetObjByUserIdAsync(strUserId);
        if (objUserEN != null) {
          objUserEN.SetUserId(strUserId);
          objUserEN.SetUserStateId('01');
          await QxUsers_UpdateRecordAsync(objUserEN);
          objvUserSimEN = await vQxUsersSim_GetObjByUserIdAsync(strUserId);
          if (objvUserSimEN == null) {
            const strMsg = `UserId=${strUserId} 的vUserSim中不存在，请检查！`;
            console.error(strMsg);
            return '';
          }
        } else {
          const strMsg = `UserId=${strUserId} 的vUserSim中不存在，请检查！`;
          console.error(strMsg);
          return '';
        }
      }
      const objvUserSim = vQxUsersSimEx_CopyTo(objvUserSimEN);
      this.userLst.push(objvUserSim);
      return objvUserSim.userName;
    },
    /** 登录成功之后, 获取用户信息以及生成权限路由 */
    async getIdXzMajor(strUserId: string, strPrjId: string): Promise<string> {
      // const wsStore = useWsStore();
      const arrRoleIds = await userRoleRelationStore.getRoleIds(strUserId, strPrjId);
      let strIdXzMajor = '';
      if (arrRoleIds.indexOf(enumQxUserRoles.Regular_Student_00620003) > -1) {
        strIdXzMajor = await studentInfoStore.getIdXzMajorByStuId(strUserId);
        return strIdXzMajor;
      } else if (
        arrRoleIds.indexOf(enumQxUserRoles.System_Admin_00620001) > -1 ||
        arrRoleIds.indexOf(enumQxUserRoles.Regular_Teacher_00620002) > -1
      ) {
        try {
          return await teacherInfoStore.getIdXzMajorByTeacherId(strUserId);
        } catch (e) {
          console.error(e);
          return '';
        }
      }
      return '';
      // Storage.set('userInfo', this);
    },
    async getObj(strUserId: string): Promise<clsvQxUsersSim | null> {
      if (strUserId == '') return null;
      if (strUserId == null) return null;
      const objUser = this.userLst.find((x) => x.userId === strUserId);
      if (objUser != null && objUser != undefined) return objUser;

      let objvUserSimEN = await vQxUsersSim_GetObjByUserIdAsync(strUserId);
      if (objvUserSimEN == null) {
        const objUserEN = await Users_GetObjByUserIdAsync(strUserId);
        if (objUserEN != null) {
          objUserEN.SetUserId(strUserId);
          objUserEN.SetUserStateId('01');
          await Users_UpdateRecordAsync(objUserEN);
          objvUserSimEN = await vQxUsersSim_GetObjByUserIdAsync(strUserId);
          if (objvUserSimEN == null) {
            const strMsg = `UserId=${strUserId} 的vUserSim中不存在，请检查！`;
            console.error(strMsg);
            return null;
          }
        } else {
          const strMsg = `UserId=${strUserId} 的vUserSim中不存在，请检查！`;
          console.error(strMsg);
          return null;
        }
      }
      const objvUserSim = vQxUsersSimEx_CopyTo(objvUserSimEN);
      this.userLst.push(objvUserSim);
      return objvUserSim;
    },
    getUserIdLstByUserName(strUserName: string, strComparisonOp: enumComparisonOp): string[] {
      let arrUser;
      let arrUserId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.userLst.filter((x) => x.userName === strUserName);
          arrUserId = arrUser.map((x) => x.userId);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.userLst.filter((x) => x.userName.indexOf(strUserName) > -1);
          arrUserId = arrUser.map((x) => x.userId);
          break;
      }
      return arrUserId;
    },

    async getFieldValue(strUserId: string, strOutFldName: string): Promise<string> {
      let objvUserSim = this.userLst.find((x) => x.userId === strUserId);
      if (objvUserSim == null) {
        const objvUserSimEN = await vQxUsersSim_GetObjByUserIdAsync(strUserId);
        if (objvUserSimEN == null) return '';
        objvUserSim = vQxUsersSimEx_CopyTo(objvUserSimEN);
        this.userLst.push(objvUserSim);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clsvQxUsersSimEN.con_UserId:
          return objvUserSim.userId;
        case clsvQxUsersSimEN.con_UserName:
          return objvUserSim.userName;
        case clsvQxUsersSimEN.con_IdXzCollege:
          return objvUserSim.idXzCollege;
        // case clsvQxUsersSimEN.con_CollegeName:
        //   return objvUserSim.collegeName;
        // case clsvQxUsersSimEN.con_IdXzMajor:
        //   return objvUserSim.idXzMajor;
        // case clsvQxUsersSimEN.con_MajorName:
        //   return objvUserSim.majorName;
        // case clsvQxUsersSimEN.con_HeadPic:
        //   return objvUserSim.headPic;
        // case clsvQxUsersSimEN.con_IsGSuser:
        //   return objvUserSim.isGSuser.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[vQxUsersSim]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

export const vQxUsersSimStore = usevQxUsersSimStore();
