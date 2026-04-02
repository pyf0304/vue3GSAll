import { gs_VpClassificationStore } from '@/store/modules/gs_VpClassification';
import { researchTopicStore } from '@/store/modules/researchTopic';
import { clsgs_VpClassificationRela } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationRela';
import { clsgs_VpClassificationRelaEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationRelaEN';
import { gs_VpClassificationRela_GetObjByKeyLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationRelaWApi';
import {
  gs_VpClassificationRelaEx_GetObjLstByClassificationId,
  gs_VpClassificationRelaEx_GetObjLstByTopicId,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsgs_VpClassificationRelaExWApi';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { defineStore } from 'pinia';

export function gs_VpClassificationRelaEx_CopyTo(
  objgs_VpClassificationRelaENS: clsgs_VpClassificationRelaEN,
): clsgs_VpClassificationRela {
  const strThisFuncName = gs_VpClassificationRelaEx_CopyTo.name;
  const objgs_VpClassificationRelaENT = new clsgs_VpClassificationRela();
  try {
    ObjectAssign(objgs_VpClassificationRelaENT, objgs_VpClassificationRelaENS);
    return objgs_VpClassificationRelaENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objgs_VpClassificationRelaENT;
  }
}

// export interface roleMenuNames {
//   classificationId: string;
//   menuSetId: string;
//   topicId: string;
//   menuNames: string;
//   classificationIds: string;
// }
// 定义 TabsState
export interface gs_VpClassificationRelaState {
  gs_VpClassificationRelaLst: clsgs_VpClassificationRela[];

  // roleMenuNamesLst: roleMenuNames[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usegs_VpClassificationRelaStore = defineStore({
  id: 'gs_VpClassificationRela',

  state(): gs_VpClassificationRelaState {
    return {
      gs_VpClassificationRelaLst: [],

      // roleMenuNamesLst: [],
    };
  },

  actions: {
    async getObj(
      strClassificationId: number,
      strTopicId: string,
    ): Promise<clsgs_VpClassificationRela | null> {
      if (strClassificationId == 0) return null;
      if (strClassificationId == null) return null;
      const objUser = this.gs_VpClassificationRelaLst.find(
        (x) => x.classificationId === strClassificationId && x.topicId == strTopicId,
      );
      if (objUser != null && objUser != undefined) return objUser;

      let objgs_VpClassificationRelaEN = await gs_VpClassificationRela_GetObjByKeyLstAsync(
        strClassificationId,
        strTopicId,
      );
      if (objgs_VpClassificationRelaEN == null) {
        if (objgs_VpClassificationRelaEN == null) {
          const strMsg = `ClassificationId=${strClassificationId} ,TopicId=${strTopicId} 的gs_VpClassificationRela中不存在，请检查！`;
          console.error(strMsg);
          return null;
        }
      }
      const objgs_VpClassificationRela = gs_VpClassificationRelaEx_CopyTo(
        objgs_VpClassificationRelaEN,
      );
      this.gs_VpClassificationRelaLst.push(objgs_VpClassificationRela);
      return objgs_VpClassificationRela;
    },
    async getClassificationName(strClassificationId: number, strTopicId: string): Promise<string> {
      if (strClassificationId == 0) return '';
      if (strClassificationId == null) return '';
      if (strTopicId == '') return '';
      if (strTopicId == null) return '';

      const objTopicNames = this.gs_VpClassificationRelaLst.find(
        (x) => x.classificationId === strClassificationId && x.topicId === strTopicId,
      );
      if (objTopicNames != null) {
        const strClassificationName = await gs_VpClassificationStore.getClassificationName(
          strClassificationId,
        );
        return strClassificationName;
      }

      let objgs_VpClassificationRelaEN = await gs_VpClassificationRela_GetObjByKeyLstAsync(
        strClassificationId,
        strTopicId,
      );
      if (objgs_VpClassificationRelaEN == null) {
        if (objgs_VpClassificationRelaEN == null) {
          const strMsg = `ClassificationId=${strClassificationId} ,TopicId=${strTopicId} 的gs_VpClassificationRela中不存在，请检查！`;
          console.error(strMsg);
          return '';
        }
      }
      const objgs_VpClassificationRela = gs_VpClassificationRelaEx_CopyTo(
        objgs_VpClassificationRelaEN,
      );
      this.gs_VpClassificationRelaLst.push(objgs_VpClassificationRela);
      const strClassificationName = await gs_VpClassificationStore.getClassificationName(
        strClassificationId,
      );
      return strClassificationName;
    },

    delObj(strClassificationId: number, strTopicId: string): boolean {
      if (strClassificationId == null) return true;
      if (strClassificationId == 0) return true;
      const intIndex = this.gs_VpClassificationRelaLst.findIndex(
        (x) => !(x.classificationId == strClassificationId && x.topicId == strTopicId),
      );

      this.gs_VpClassificationRelaLst = this.gs_VpClassificationRelaLst.filter(
        (item) => !(item.classificationId == strClassificationId && item.topicId == strTopicId),
      );

      if (intIndex > -1) {
        console.log(
          `菜单Id:${strClassificationId},TopicId=${strTopicId}在菜单角色关系列表中已经移除！`,
        );
        return true;
      } else {
        console.error(
          `菜单Id:${strClassificationId},TopicId=${strTopicId}在菜单角色关系列表中不存在！`,
        );
        return false;
      }
    },

    async getTopicNames(strClassificationId: number): Promise<Array<string>> {
      if (strClassificationId == null) return [];
      if (strClassificationId == 0) return [];

      let arrObjUserRoles = this.gs_VpClassificationRelaLst.filter(
        (x) => x.classificationId === strClassificationId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await gs_VpClassificationRelaEx_GetObjLstByClassificationId(
          strClassificationId,
        );
        if (arrObjLst.length == 0) {
          return [];
        }
        arrObjUserRoles = arrObjLst.map(gs_VpClassificationRelaEx_CopyTo);
        arrObjUserRoles.forEach((x) => {
          this.gs_VpClassificationRelaLst.push(x);
        });
      }
      const arrTopicNames = new Array<string>();
      const arrTopicIds = arrObjUserRoles.map((x) => x.topicId);
      for (const strTopicId of arrTopicIds) {
        const strTopicName = await researchTopicStore.getTopicName(strTopicId);
        arrTopicNames.push(strTopicName);
      }
      return arrTopicNames;
    },

    async getClassificationIds(strTopicId: string): Promise<Array<number>> {
      if (strTopicId == '') return [];
      if (strTopicId == null) return [];

      let arrRoleMenus = this.gs_VpClassificationRelaLst.filter((x) => x.topicId === strTopicId);
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await gs_VpClassificationRelaEx_GetObjLstByTopicId(strTopicId);
        arrRoleMenus = arrObjLst.map(gs_VpClassificationRelaEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.gs_VpClassificationRelaLst.push(x);
        });
      }

      const arrRoleIds = arrRoleMenus.map((x) => x.classificationId);

      return arrRoleIds;
    },

    async getObjLst(strTopicId: string): Promise<Array<clsgs_VpClassificationRela> | null> {
      if (strTopicId == '') return null;
      if (strTopicId == null) return null;

      let arrRoleMenus = this.gs_VpClassificationRelaLst.filter((x) => x.topicId === strTopicId);
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await gs_VpClassificationRelaEx_GetObjLstByTopicId(strTopicId);
        if (arrObjLst.length == 0) {
          return null;
        }
        arrRoleMenus = arrObjLst.map(gs_VpClassificationRelaEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.gs_VpClassificationRelaLst.push(x);
        });
      }

      return arrRoleMenus;
    },
  },
});

export const gs_VpClassificationRelaStore = usegs_VpClassificationRelaStore();
