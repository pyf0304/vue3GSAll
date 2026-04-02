import { clsRTUserRela } from '@/ts/L0Entity/GradEduTopic/clsRTUserRela';
import { clsRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaEN';
import { gs_Color_GetObjByColorIdCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ColorWApi';
import {
  RTUserRelaEx_GetObjByTopicIdAndUserId,
  RTUserRelaEx_GetObjLstByTopicId,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsRTUserRelaExWApi';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { defineStore } from 'pinia';

export function RTUserRelaEx_CopyTo(objRTUserRelaENS: clsRTUserRelaEN): clsRTUserRela {
  const strThisFuncName = RTUserRelaEx_CopyTo.name;
  const objRTUserRelaENT = new clsRTUserRela();
  try {
    ObjectAssign(objRTUserRelaENT, objRTUserRelaENS);
    return objRTUserRelaENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objRTUserRelaENT;
  }
}

// export interface roleMenuNames {
//   userId: string;
//   menuSetId: string;
//   topicId: string;
//   menuNames: string;
//   userIds: string;
// }
// 定义 TabsState
export interface RTUserRelaState {
  rtUserRelaLst: clsRTUserRela[];

  // roleMenuNamesLst: roleMenuNames[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useRTUserRelaStore = defineStore({
  id: 'RTUserRela',

  state(): RTUserRelaState {
    return {
      rtUserRelaLst: [],

      // roleMenuNamesLst: [],
    };
  },

  actions: {
    async getObj(strUserId: string, strTopicId: string): Promise<clsRTUserRela | null> {
      if (strUserId == '') return null;
      if (strUserId == null) return null;
      const objUser = this.rtUserRelaLst.find(
        (x) => x.userId === strUserId && x.topicId == strTopicId,
      );
      if (objUser != null && objUser != undefined) return objUser;

      let objRTUserRelaEN = await RTUserRelaEx_GetObjByTopicIdAndUserId(strTopicId, strUserId);
      if (objRTUserRelaEN == null) {
        if (objRTUserRelaEN == null) {
          const strMsg = `UserId=${strUserId} ,TopicId=${strTopicId} 的RTUserRela中不存在，请检查！`;
          console.error(strMsg);
          return null;
        }
      }
      const objRTUserRela = RTUserRelaEx_CopyTo(objRTUserRelaEN);
      this.rtUserRelaLst.push(objRTUserRela);
      return objRTUserRela;
    },
    async getColorId(strUserId: string, strTopicId: string): Promise<string> {
      if (strUserId == '') return '';
      if (strUserId == null) return '';

      const objRoleNames = this.rtUserRelaLst.find(
        (x) => x.userId === strUserId && x.topicId === strTopicId,
      );
      if (objRoleNames != null) {
        return objRoleNames.colorId;
      }

      let objRTUserRelaEN = await RTUserRelaEx_GetObjByTopicIdAndUserId(strTopicId, strUserId);
      if (objRTUserRelaEN == null) {
        if (objRTUserRelaEN == null) {
          const strMsg = `UserId=${strUserId} ,TopicId=${strTopicId} 的RTUserRela中不存在，请检查！`;
          console.error(strMsg);
          return '';
        }
      }
      const objRTUserRela = RTUserRelaEx_CopyTo(objRTUserRelaEN);
      this.rtUserRelaLst.push(objRTUserRela);
      return objRTUserRela.colorId;
    },
    async getColorCode(strUserId: string, strTopicId: string): Promise<string> {
      if (strUserId == '') return '';
      if (strUserId == null) return '';

      const objRoleNames = this.rtUserRelaLst.find(
        (x) => x.userId === strUserId && x.topicId === strTopicId,
      );
      if (objRoleNames != null) {
        const strColorId = objRoleNames.colorId;
        if (strColorId == '') return '';
        const objGs_Color = await gs_Color_GetObjByColorIdCache(strColorId);
        if (objGs_Color == null) return '';
        return objGs_Color.colorCode;
      }

      let objRTUserRelaEN = await RTUserRelaEx_GetObjByTopicIdAndUserId(strTopicId, strUserId);
      if (objRTUserRelaEN == null) {
        if (objRTUserRelaEN == null) {
          const strMsg = `UserId=${strUserId} ,TopicId=${strTopicId} 的RTUserRela中不存在，请检查！`;
          console.error(strMsg);
          return '';
        }
      }
      const objRTUserRela = RTUserRelaEx_CopyTo(objRTUserRelaEN);
      this.rtUserRelaLst.push(objRTUserRela);

      const strColorId = objRTUserRela.colorId;
      if (strColorId == '') return '';
      const objGs_Color = await gs_Color_GetObjByColorIdCache(strColorId);
      if (objGs_Color == null) return '';
      return objGs_Color.colorCode;
    },
    delObj(strUserId: string, strTopicId: string): boolean {
      if (strUserId == null) return true;
      if (strUserId == '') return true;
      const intIndex = this.rtUserRelaLst.findIndex(
        (x) => !(x.userId == strUserId && x.topicId == strTopicId),
      );

      this.rtUserRelaLst = this.rtUserRelaLst.filter(
        (item) => !(item.userId == strUserId && item.topicId == strTopicId),
      );

      if (intIndex > -1) {
        console.log(`菜单Id:${strUserId},TopicId=${strTopicId}在菜单角色关系列表中已经移除！`);
        return true;
      } else {
        console.error(`菜单Id:${strUserId},TopicId=${strTopicId}在菜单角色关系列表中不存在！`);
        return false;
      }
    },
    async getUserIds(strTopicId: string): Promise<Array<string>> {
      if (strTopicId == '') return [];
      if (strTopicId == null) return [];

      let arrRoleMenus = this.rtUserRelaLst.filter((x) => x.topicId === strTopicId);
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await RTUserRelaEx_GetObjLstByTopicId(strTopicId);
        arrRoleMenus = arrObjLst.map(RTUserRelaEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.rtUserRelaLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x) => x.userId);

      return arrRoleIds;
    },

    async getObjLst(strTopicId: string): Promise<Array<clsRTUserRela> | null> {
      if (strTopicId == '') return null;
      if (strTopicId == null) return null;

      let arrRoleMenus = this.rtUserRelaLst.filter((x) => x.topicId === strTopicId);
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await RTUserRelaEx_GetObjLstByTopicId(strTopicId);
        if (arrObjLst.length == 0) {
          return null;
        }
        arrRoleMenus = arrObjLst.map(RTUserRelaEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.rtUserRelaLst.push(x);
        });
      }

      return arrRoleMenus;
    },
  },
});

export const rtUserRelaStore = useRTUserRelaStore();
