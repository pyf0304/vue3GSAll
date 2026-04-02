import { clsSection } from '@/ts/L0Entity/GradEduPaper/clsSection';
import { clsSectionEN } from '@/ts/L0Entity/GradEduPaper/clsSectionEN';
import { SectionEx_GetObjListByPaperId } from '@/ts/L3ForWApiEx/GradEduPaper/clsSectionExWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { defineStore } from 'pinia';

export function SectionEx_CopyTo(objSectionENS: clsSectionEN): clsSection {
  const strThisFuncName = SectionEx_CopyTo.name;
  const objSectionENT = new clsSection();
  try {
    ObjectAssign(objSectionENT, objSectionENS);
    return objSectionENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objSectionENT;
  }
}

// 定义 TabsState
export interface SectionState {
  sectionLst: clsSection[];
}

// 定义 ModuleA mutations
export const useSectionStore = defineStore({
  id: 'Section',

  state(): SectionState {
    return {
      sectionLst: [],
    };
  },

  actions: {
    async getObjLst(strPaperId: string): Promise<Array<clsSection> | null> {
      if (strPaperId == '') return null;
      if (strPaperId == null) return null;

      let arrSection = this.sectionLst.filter((x) => x.paperId === strPaperId);

      if (arrSection.length == 0) {
        let arrObjLst = await SectionEx_GetObjListByPaperId(strPaperId);
        if (arrObjLst == null || arrObjLst.length == 0) {
          return null;
        }
        arrSection = arrObjLst.map(SectionEx_CopyTo);
        arrSection.forEach((x) => {
          this.sectionLst.push(x);
        });
      }

      return arrSection;
    },

    delObj(strSectionId: string): boolean {
      if (strSectionId == null) return true;
      if (strSectionId == '') return true;
      const intIndex = this.sectionLst.findIndex((x) => x.sectionId === strSectionId);

      this.sectionLst = this.sectionLst.filter((item) => item.sectionId !== strSectionId);

      if (intIndex > -1) {
        console.log(`SectionId:${strSectionId}在教学班教师关系列表中已经移除！`);
        return true;
      } else {
        console.error(`SectionId:${strSectionId}在教学班教师关系列表中不存在！`);
        return false;
      }
    },
    async getSectionIds(strPaperId: string): Promise<Array<string>> {
      if (strPaperId == '') return [];
      if (strPaperId == null) return [];

      let arrSection = this.sectionLst.filter((x) => x.paperId === strPaperId);
      if (arrSection.length == 0) {
        let arrObjLst = await SectionEx_GetObjListByPaperId(strPaperId);
        if (arrObjLst == null || arrObjLst.length == 0) {
          return [];
        }
        arrSection = arrObjLst.filter((x) => x.paperId == strPaperId).map(SectionEx_CopyTo);
        arrSection.forEach((x) => {
          this.sectionLst.push(x);
        });
      }

      const arrSectionIds = arrSection.map((x) => x.sectionId);

      return arrSectionIds;
    },

    delObjLstByPaperId(strPaperId: string): boolean {
      if (strPaperId == '') return true;
      if (strPaperId == null) return true;

      const intIndex = this.sectionLst.findIndex((item) => item.paperId != strPaperId);

      this.sectionLst = this.sectionLst.filter((item) => item.paperId != strPaperId);

      if (intIndex > -1) {
        console.log(`strPaperId:${strPaperId}在教学班教师列表中已经移除！`);
        return true;
      } else {
        console.error(`strPaperId:${strPaperId}在教学班教师列表中不存在！`);
        return false;
      }
    },
  },
});

export const sectionStore = useSectionStore();
