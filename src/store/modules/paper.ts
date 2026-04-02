

import { clsPaper } from '@/ts/L0Entity/GradEduPaper/clsPaper';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { Paper_GetObjByPaperIdAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface userSimEN {
//   paperId: string;
//   paperId: string;
// }

export function paperEx_CopyTo(objpaperENS: clsPaperEN): clsPaper {
  const strThisFuncName = paperEx_CopyTo.name;
  const objpaperENT = new clsPaper();
  try {
    ObjectAssign(objpaperENT, objpaperENS);
    return objpaperENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objpaperENT;
  }
}
// 定义 TabsState
export interface paperState {
  userLst: clsPaper[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usePaperStore = defineStore({
  id: 'Paper',

  state(): paperState {
    return {
      userLst: [],
    };
  },

  actions: {
    async getPaperTitle(strPaperId: string): Promise<string> {
      if (strPaperId == '') return '';
      if (strPaperId == null) return '';
      const objUser = this.userLst.find((x) => x.paperId === strPaperId);
      if (objUser != null && objUser != undefined) return objUser.paperTitle;
      let objPaperEN = await Paper_GetObjByPaperIdAsync(strPaperId);
      if (objPaperEN == null) {
        const strMsg = `PaperId=${strPaperId} 的Paper中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objPaper = paperEx_CopyTo(objPaperEN);
      this.userLst.push(objPaper);
      return objPaper.paperTitle;
    },
    async getAuthor(strPaperId: string): Promise<string> {
      if (strPaperId == '') return '';
      if (strPaperId == null) return '';
      const objUser = this.userLst.find((x) => x.paperId === strPaperId);
      if (objUser != null && objUser != undefined) return objUser.author;
      let objPaperEN = await Paper_GetObjByPaperIdAsync(strPaperId);
      if (objPaperEN == null) {
        const strMsg = `PaperId=${strPaperId} 的Paper中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objPaper = paperEx_CopyTo(objPaperEN);
      this.userLst.push(objPaper);
      return objPaper.author;
    },
    async getObj(strPaperId: string): Promise<clsPaper | null> {
      if (strPaperId == '') return null;
      if (strPaperId == null) return null;
      const objUser = this.userLst.find((x) => x.paperId === strPaperId);
      if (objUser != null && objUser != undefined) return objUser;

      let objPaperEN = await Paper_GetObjByPaperIdAsync(strPaperId);
      if (objPaperEN == null) {
        const strMsg = `PaperId=${strPaperId} 的Paper中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objPaper = paperEx_CopyTo(objPaperEN);
      this.userLst.push(objPaper);
      return objPaper;
    },
    getPaperIdLstByPaperTitle(strPaperTitle: string, strComparisonOp: enumComparisonOp): string[] {
      let arrUser;
      let arrPaperId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.userLst.filter((x) => x.paperId === strPaperTitle);
          arrPaperId = arrUser.map((x) => x.paperId);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.userLst.filter((x) => x.paperId.indexOf(strPaperTitle) > -1);
          arrPaperId = arrUser.map((x) => x.paperId);
          break;
      }
      return arrPaperId;
    },

    async getFieldValue(strPaperId: string, strOutFldName: string): Promise<string> {
      let objPaper = this.userLst.find((x) => x.paperId === strPaperId);
      if (objPaper == null) {
        const objPaperEN = await Paper_GetObjByPaperIdAsync(strPaperId);
        if (objPaperEN == null) return '';
        objPaper = paperEx_CopyTo(objPaperEN);
        this.userLst.push(objPaper);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clsPaperEN.con_PaperId:
          return objPaper.paperId;
        case clsPaperEN.con_PaperTitle:
          return objPaper.paperId;

        // case clsPaperEN.con_CollegeName:
        //   return objPaper.collegeName;
        // case clsPaperEN.con_IdXzMajor:
        //   return objPaper.idXzMajor;
        // case clsPaperEN.con_MajorName:
        //   return objPaper.majorName;
        // case clsPaperEN.con_HeadPic:
        //   return objPaper.headPic;
        // case clsPaperEN.con_IsGSuser:
        //   return objPaper.isGSuser.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[paper]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

export const paperStore = usePaperStore();
