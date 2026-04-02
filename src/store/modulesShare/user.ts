import { defineStore } from 'pinia';
// import { useWsStore } from './ws';
import type { RouteRecordRaw } from 'vue-router';
import { store } from '@/store';
// import { login } from '@/api/login';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';

import { UserType, UserTypeMap } from '@/store/modules/types/userType';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { enumQxUserRoles } from '@/ts/L0Entity/UserManage/clsQxUserRolesEN';
import { StudentInfoEx_GetObjByStuId } from '@/ts/L3ForWApiExShare/UserManage_GP/clsStudentInfoExWApi';
import { XzMajor_GetNameByIdXzMajorCache } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';

import { QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId } from '@/ts/L3ForWApiExShare/UsersRight/clsQxUserRoleRelationExWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  QxRoles_GetNameByRoleIdCache,
  QxRoles_GetObjByRoleIdCache,
  QxRoles_GetObjLstByRoleIdLstCache,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { TeacherInfoEx_GetObjByTeacherId } from '@/ts/L3ForWApiExShare/BaseInfo/clsTeacherInfoExWApi';
import { clsQxUserRoleRelationEN } from '@/ts/L0Entity/UsersRight/clsQxUserRoleRelationEN';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

interface UserState {
  token: string;
  userId: string;
  userName: string;
  roleId: string;
  roleName: string;
  idXzMajor: string;
  majorName: string;
  avatar: string;
  menuSetId: string;
  // like [ 'sys:user:add', 'sys:user:update' ]
  perms: string[];
  menus: RouteRecordRaw[];
  userInfo: Partial<API.AdminUserInfo>;
  roleIds: string[];
  roleNames: string[];
  userType: UserType; //用户类型分中学、大学
}
const userInfo = Storage.getV2('userInfo');
export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: Storage.get(ACCESS_TOKEN_KEY, null),
    userId: userInfo == null ? '' : userInfo.userId, //'amdin',
    userName: userInfo == null ? '' : userInfo.userName, //'amdin',
    roleId: userInfo == null ? '' : userInfo.roleId,
    roleName: userInfo == null ? '' : userInfo.roleName,
    idXzMajor: userInfo == null ? '' : userInfo.idXzMajor,
    majorName: userInfo == null ? '' : userInfo.majorName,
    avatar: userInfo == null ? '' : userInfo.avatar,
    menuSetId: userInfo == null ? '' : userInfo.menuSetId,

    perms: [],
    menus: [],
    userInfo: {},
    roleIds: userInfo == null ? [] : userInfo.roleIds,
    roleNames: userInfo == null ? [] : userInfo.roleNames,
    userType: userInfo == null ? '' : userInfo.userType, // UserTypeMap.university,
  }),
  getters: {
    getToken(): string {
      return this.token;
    },
    getAvatar(): string {
      return this.avatar;
    },
    getUserName(): string {
      return this.userName;
    },
    getUserId(): string {
      return this.userId;
    },
    getRoleId(): string {
      return this.roleId;
    },
    getRoleName(): string {
      return this.roleName;
    },
    getMenuSetId(): string {
      return this.menuSetId;
    },
    getMajorName(): string {
      return this.majorName ?? '无';
    },
    getIdXzMajor(): string {
      return this.idXzMajor ?? '';
    },
    getUserType(): UserType {
      return this.userType;
    },

    getPerms(): string[] {
      return this.perms;
    },
    getRoleIds(): string[] {
      return this.roleIds;
    },
    getRoleNames(): string[] {
      return this.roleNames;
    },
  },
  actions: {
    /** 清空token及用户信息 */
    resetToken() {
      this.avatar = this.token = this.userId = '';
      this.perms = [];
      this.menus = [];
      this.userInfo = {};
      Storage.clear();
    },
    /** 登录成功保存token */
    setToken(token: string) {
      this.token = token ?? '';
      const ex = 7 * 24 * 60 * 60 * 1000;
      Storage.setV2(ACCESS_TOKEN_KEY, this.token, ex);
    },

    setRoleId(strRoleId: string) {
      this.roleId = strRoleId;
      Storage.setV2('userInfo', this);
    },
    setMenuSetId(strMenuSetId: string) {
      this.menuSetId = strMenuSetId;
      Storage.setV2('userInfo', this);
    },
    setRoleName(strRoleName: string) {
      this.roleName = strRoleName;
      Storage.setV2('userInfo', this);
    },
    setUserType(strUserType: UserType) {
      this.userType = strUserType;
      Storage.setV2('userInfo', this);
    },
    /** 登录 */
    // async login(params: API.LoginParams) {
    //   try {
    //     const { data } = await login(params);
    //     this.setToken(data.token);
    //     return this.afterLogin();
    //   } catch (error) {
    //     return Promise.reject(error);
    //   }
    // },
    /** 登录成功之后, 获取用户信息以及生成权限路由 */
    async afterLogin(arrUserRoleRelation: Array<clsQxUserRoleRelationEN>) {
      try {
        // const wsStore = useWsStore();

        this.userId = arrUserRoleRelation[0].userId;
        this.roleId = arrUserRoleRelation[0].roleId;

        const strUserName = await vQxUsersSimStore.getUserName(this.userId);
        const strRoleName = await QxRoles_GetNameByRoleIdCache(
          this.roleId,
          clsSysPara4WebApi.currSelPrjId,
        );
        this.userName = strUserName;

        this.roleName = strRoleName;
        const arrRoleIds = arrUserRoleRelation.map((x) => x.roleId);
        const arrQxRoles = await QxRoles_GetObjLstByRoleIdLstCache(
          arrRoleIds,
          clsSysPara4WebApi.currSelPrjId,
        );
        const arrRoleNames = arrQxRoles.map((x) => x.roleName);
        this.roleIds = arrRoleIds;
        this.roleNames = arrRoleNames;
        if (this.roleId == enumQxUserRoles.Regular_Student_00620003) {
          const objStudent = await StudentInfoEx_GetObjByStuId(this.userId);
          if (objStudent != null) {
            this.idXzMajor = objStudent.idXzMajor;
            if (objStudent.idXzMajor.length > 0) {
              const strMajorName = await XzMajor_GetNameByIdXzMajorCache(this.idXzMajor);
              this.majorName = strMajorName;
            }
          } else {
            this.idXzMajor = '';
            this.majorName = '';
          }
        } else if (
          this.roleId == enumQxUserRoles.System_Admin_00620001 ||
          this.roleId == enumQxUserRoles.Regular_Teacher_00620002
        ) {
          try {
            const objTeacher = await TeacherInfoEx_GetObjByTeacherId(this.userId);
            if (objTeacher != null) {
              this.idXzMajor = objTeacher.idXzMajor;
              if (objTeacher.idXzMajor.length > 0) {
                const strMajorName = await XzMajor_GetNameByIdXzMajorCache(this.idXzMajor);
                this.majorName = strMajorName;
              }
            } else {
              this.idXzMajor = '';

              this.majorName = '';
            }
          } catch (e) {
            console.error(e);
          }
        }
        // if (userStore.getUserId != '') {
        //   if (userStore.getUserId != arrUserRoleRelation[0].userId) {
        //     userStore.getUserId = arrUserRoleRelation[0].userId;
        //     const strKey = 'idCurrEduCls';
        //     localStorage.removeItem(strKey);
        //   }
        // } else {
        //   userStore.getUserId = arrUserRoleRelation[0].userId;
        // }

        const objQxRoles = await QxRoles_GetObjByRoleIdCache(
          this.roleId,
          arrUserRoleRelation[0].qxPrjId,
        );
        if (objQxRoles != null) {
          if (objQxRoles.userType == UserTypeMap.middle_School) {
            this.userType = UserTypeMap.middle_School;
          } else if (objQxRoles.userType == UserTypeMap.university) {
            this.userType = UserTypeMap.university;
          }
        }
        Storage.setV2('userInfo', this);
        // const userInfo = await getInfo();
        // const { perms, menus } = await permmenu();
        // const [userInfo, { perms, menus }] = await Promise.all([
        //   getInfo(),
        //   permmenu(),
        // ]);
        // this.perms = perms;
        // this.name = userInfo.name;
        // this.avatar = userInfo.headImg;
        // this.userInfo = userInfo;
        // 生成路由
        // const generatorResult = await generatorDynamicRouter(menus);
        // this.menus = generatorResult.menus.filter((item) => !item.meta?.hideInMenu);
        // !wsStore.client && wsStore.initSocket();

        // return { menus, perms, userInfo };
      } catch (error) {
        return Promise.reject(error);
        // return this.logout();
      }
    },
    async getRoleIdLst(strUserId: string): Promise<string[]> {
      try {
        // const wsStore = useWsStore();

        const arrQxUserRoleRelations = await QxUserRoleRelationEx_GetObjLstByUserIdAndPrjId(
          strUserId,
          clsSysPara4WebApi.currSelPrjId,
        );

        const arrRoleIds = arrQxUserRoleRelations.map((x) => x.roleId);
        const arrRoleNames = new Array<string>();
        for (const strRoleId of arrRoleIds) {
          const strRoleName = await QxRoles_GetNameByRoleIdCache(
            strRoleId,
            clsSysPara4WebApi.currSelPrjId,
          );
          arrRoleNames.push(strRoleName);
        }
        this.roleIds = arrRoleIds;
        this.roleNames = arrRoleNames;
        console.log(arrRoleIds, arrRoleNames);
        Storage.setV2('userInfo', this);
        return this.roleIds;
        // return { menus, perms, userInfo };
      } catch (error) {
        return Promise.reject(error);
        // return this.logout();
      }
    },
    /** 登出 */
    async logout() {
      this.userId = '';
      Storage.setV2('userInfo', this);
      // await logout();
      // const wsStore = useWsStore();
      // wsStore.closeSocket();
      this.resetToken();
      // resetRouter();
    },
  },
});

// 在组件setup函数外使用
export function useUserStoreWithOut() {
  return useUserStore(store);
}

export const userStore = useUserStore();
