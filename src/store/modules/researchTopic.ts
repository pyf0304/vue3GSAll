import { clsResearchTopic } from '@/ts/L0Entity/GradEduTopic/clsResearchTopic';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import { ResearchTopic_GetObjByTopicIdAsync } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface researchTopicSimEN {
//   TopicId: string;
//   topicName: string;
// }

export function ResearchTopicEx_CopyTo(objResearchTopicENS: clsResearchTopicEN): clsResearchTopic {
  const strThisFuncName = ResearchTopicEx_CopyTo.name;
  const objResearchTopicENT = new clsResearchTopic();
  try {
    ObjectAssign(objResearchTopicENT, objResearchTopicENS);
    return objResearchTopicENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objResearchTopicENT;
  }
}
// 定义 TabsState
export interface ResearchTopicState {
  researchTopicLst: clsResearchTopic[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useResearchTopicStore = defineStore({
  id: 'ResearchTopic',

  state(): ResearchTopicState {
    return {
      researchTopicLst: [],
    };
  },

  actions: {
    async getTopicName(strTopicId: string): Promise<string> {
      if (strTopicId == '') return '';
      if (strTopicId == null) return '';
      const objResearchTopic0 = this.researchTopicLst.find((x) => x.topicId === strTopicId);
      if (objResearchTopic0 != null && objResearchTopic0 != undefined)
        return objResearchTopic0.topicName;
      let objResearchTopicEN = await ResearchTopic_GetObjByTopicIdAsync(strTopicId);
      if (objResearchTopicEN == null) {
        const strMsg = `TopicId=${strTopicId} 的ResearchTopic中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objResearchTopic = ResearchTopicEx_CopyTo(objResearchTopicEN);
      this.researchTopicLst.push(objResearchTopic);
      return objResearchTopic.topicName;
    },

    async getIdCurrEduCls(strTopicId: string): Promise<string> {
      if (strTopicId == '') return '';
      if (strTopicId == null) return '';
      const objResearchTopic0 = this.researchTopicLst.find((x) => x.topicId === strTopicId);
      if (objResearchTopic0 != null && objResearchTopic0 != undefined)
        return objResearchTopic0.idCurrEduCls;
      let objResearchTopicEN = await ResearchTopic_GetObjByTopicIdAsync(strTopicId);
      if (objResearchTopicEN == null) {
        const strMsg = `TopicId=${strTopicId} 的ResearchTopic中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objResearchTopic = ResearchTopicEx_CopyTo(objResearchTopicEN);
      this.researchTopicLst.push(objResearchTopic);
      return objResearchTopic.idCurrEduCls;
    },

    async getObj(strTopicId: string): Promise<clsResearchTopic | null> {
      if (strTopicId == '') return null;
      if (strTopicId == null) return null;
      const objResearchTopic0 = this.researchTopicLst.find((x) => x.topicId === strTopicId);
      if (objResearchTopic0 != null && objResearchTopic0 != undefined) return objResearchTopic0;

      let objResearchTopicEN = await ResearchTopic_GetObjByTopicIdAsync(strTopicId);
      if (objResearchTopicEN == null) {
        const strMsg = `TopicId=${strTopicId} 的ResearchTopic中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objResearchTopic = ResearchTopicEx_CopyTo(objResearchTopicEN);
      this.researchTopicLst.push(objResearchTopic);
      return objResearchTopic;
    },

    getTopicIdLstByTopicName(strTopicName: string, strComparisonOp: enumComparisonOp): string[] {
      let arrUser;
      let arrTopicId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.researchTopicLst.filter((x) => x.topicName === strTopicName);
          arrTopicId = arrUser.map((x) => x.topicId);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.researchTopicLst.filter((x) => x.topicName.indexOf(strTopicName) > -1);
          arrTopicId = arrUser.map((x) => x.topicId);
          break;
      }
      return arrTopicId;
    },

    getTopicIdLstByIdCurrEduCls(
      strIdCurrEduCls: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrresearchTopic;
      let arrTopicId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrresearchTopic = this.researchTopicLst.filter(
            (x) => x.idCurrEduCls === strIdCurrEduCls,
          );
          arrTopicId = arrresearchTopic.map((x) => x.topicId);
          break;
      }
      return arrTopicId;
    },
    getTopicIdLstByIdCurrEduClsLst(
      arrIdCurrEduCls: Array<string>,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrresearchTopic;
      let arrTopicId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.In_04:
          arrresearchTopic = this.researchTopicLst.filter(
            (x) => arrIdCurrEduCls.indexOf(x.idCurrEduCls) > -1,
          );
          arrTopicId = arrresearchTopic.map((x) => x.topicId);
          break;
      }
      return arrTopicId;
    },
    async getFieldValue(strTopicId: string, strOutFldName: string): Promise<string> {
      let objResearchTopic = this.researchTopicLst.find((x) => x.topicId === strTopicId);
      if (objResearchTopic == null) {
        const objResearchTopicEN = await ResearchTopic_GetObjByTopicIdAsync(strTopicId);
        if (objResearchTopicEN == null) return '';
        objResearchTopic = ResearchTopicEx_CopyTo(objResearchTopicEN);
        this.researchTopicLst.push(objResearchTopic);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clsResearchTopicEN.con_TopicId:
          return objResearchTopic.topicId;
        case clsResearchTopicEN.con_TopicName:
          return objResearchTopic.topicName;
        case clsResearchTopicEN.con_IdCurrEduCls:
          return objResearchTopic.idCurrEduCls;
        // case clsResearchTopicEN.con_CollegeName:
        //   return objResearchTopic.collegeName;
        // case clsResearchTopicEN.con_IdXzMajor:
        //   return objResearchTopic.idXzMajor;
        // case clsResearchTopicEN.con_MajorName:
        //   return objResearchTopic.majorName;
        // case clsResearchTopicEN.con_HeadPic:
        //   return objResearchTopic.headPic;
        // case clsResearchTopicEN.con_IsGSresearchTopic:
        //   return objResearchTopic.isGSresearchTopic.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[ResearchTopic]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

export const researchTopicStore = useResearchTopicStore();
