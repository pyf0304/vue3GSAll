import { clsgs_VpClassification } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassification';
import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';
import { gs_VpClassification_GetObjByClassificationIdAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationWApi';
import { gs_VpClassificationEx_GetObjByName } from '@/ts/L3ForWApiEx/GradEduTopic/clsgs_VpClassificationExWApi';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { defineStore } from 'pinia';

export function gs_VpClassificationEx_CopyTo(
  objgs_VpClassificationENS: clsgs_VpClassificationEN,
): clsgs_VpClassification {
  const strThisFuncName = gs_VpClassificationEx_CopyTo.name;
  const objgs_VpClassificationENT = new clsgs_VpClassification();
  try {
    ObjectAssign(objgs_VpClassificationENT, objgs_VpClassificationENS);
    return objgs_VpClassificationENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objgs_VpClassificationENT;
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
export interface gs_VpClassificationState {
  gs_VpClassificationLst: clsgs_VpClassification[];

  // roleMenuNamesLst: roleMenuNames[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usegs_VpClassificationStore = defineStore({
  id: 'gs_VpClassification',

  state(): gs_VpClassificationState {
    return {
      gs_VpClassificationLst: [],

      // roleMenuNamesLst: [],
    };
  },

  actions: {
    async getObj(strClassificationId: number): Promise<clsgs_VpClassification | null> {
      if (strClassificationId == 0) return null;
      if (strClassificationId == null) return null;
      const objUser = this.gs_VpClassificationLst.find(
        (x) => x.classificationId === strClassificationId,
      );
      if (objUser != null && objUser != undefined) return objUser;

      let objgs_VpClassificationEN = await gs_VpClassification_GetObjByClassificationIdAsync(
        strClassificationId,
      );
      if (objgs_VpClassificationEN == null) {
        if (objgs_VpClassificationEN == null) {
          const strMsg = `ClassificationId=${strClassificationId}  的gs_VpClassification中不存在，请检查！`;
          console.error(strMsg);
          return null;
        }
      }
      const objgs_VpClassification = gs_VpClassificationEx_CopyTo(objgs_VpClassificationEN);
      this.gs_VpClassificationLst.push(objgs_VpClassification);
      return objgs_VpClassification;
    },
    async getObjByName(strClassificationName: string): Promise<clsgs_VpClassification | null> {
      if (strClassificationName == '') return null;
      if (strClassificationName == null) return null;
      const objUser = this.gs_VpClassificationLst.find(
        (x) => x.classificationName === strClassificationName,
      );
      if (objUser != null && objUser != undefined) return objUser;

      let objgs_VpClassificationEN = await gs_VpClassificationEx_GetObjByName(
        strClassificationName,
      );
      if (objgs_VpClassificationEN == null) {
        if (objgs_VpClassificationEN == null) {
          const strMsg = `ClassificationName=${strClassificationName}  的gs_VpClassification中不存在，请检查！`;
          console.error(strMsg);
          return null;
        }
      }
      const objgs_VpClassification = gs_VpClassificationEx_CopyTo(objgs_VpClassificationEN);
      this.gs_VpClassificationLst.push(objgs_VpClassification);
      return objgs_VpClassification;
    },
    async getClassificationName(strClassificationId: number): Promise<string> {
      if (strClassificationId == 0) return '';
      if (strClassificationId == null) return '';

      const objRoleNames = this.gs_VpClassificationLst.find(
        (x) => x.classificationId === strClassificationId,
      );
      if (objRoleNames != null) {
        return objRoleNames.classificationName;
      }

      let objgs_VpClassificationEN = await gs_VpClassification_GetObjByClassificationIdAsync(
        strClassificationId,
      );
      if (objgs_VpClassificationEN == null) {
        if (objgs_VpClassificationEN == null) {
          const strMsg = `ClassificationId=${strClassificationId}  的gs_VpClassification中不存在，请检查！`;
          console.error(strMsg);
          return '';
        }
      }
      const objgs_VpClassification = gs_VpClassificationEx_CopyTo(objgs_VpClassificationEN);
      this.gs_VpClassificationLst.push(objgs_VpClassification);
      return objgs_VpClassification.classificationName;
    },

    delObj(strClassificationId: number): boolean {
      if (strClassificationId == null) return true;
      if (strClassificationId == 0) return true;
      const intIndex = this.gs_VpClassificationLst.findIndex(
        (x) => !(x.classificationId == strClassificationId),
      );

      this.gs_VpClassificationLst = this.gs_VpClassificationLst.filter(
        (item) => !(item.classificationId == strClassificationId),
      );

      if (intIndex > -1) {
        console.log(`分类Id:${strClassificationId}在菜单角色关系列表中已经移除！`);
        return true;
      } else {
        console.error(`分类Id:${strClassificationId}在菜单角色关系列表中不存在！`);
        return false;
      }
    },
  },
});

export const gs_VpClassificationStore = usegs_VpClassificationStore();
