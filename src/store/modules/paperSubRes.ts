
import { clsPaperSubRes } from '@/ts/L0Entity/GradEduPaper/clsPaperSubRes';
import { clsPaperSubResEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubResEN';
import { PaperSubRes_GetObjByPaperSubResIdAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubResWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface paperSubResSimEN {
//   PaperSubResId: string;
//   paperSubResName: string;
// }

export function PaperSubResEx_CopyTo(objPaperSubResENS: clsPaperSubResEN): clsPaperSubRes {
  const strThisFuncName = PaperSubResEx_CopyTo.name;
  const objPaperSubResENT = new clsPaperSubRes();
  try {
    ObjectAssign(objPaperSubResENT, objPaperSubResENS);
    return objPaperSubResENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objPaperSubResENT;
  }
}
// 定义 TabsState
export interface PaperSubResState {
  paperSubResLst: clsPaperSubRes[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usePaperSubResStore = defineStore({
  id: 'PaperSubRes',

  state(): PaperSubResState {
    return {
      paperSubResLst: [],
    };
  },

  actions: {
    async getPaperSubResName(strPaperSubResId: number): Promise<string> {
      if (strPaperSubResId == 0) return '';
      if (strPaperSubResId == null) return '';
      const objPaperSubRes0 = this.paperSubResLst.find((x) => x.paperSubResId === strPaperSubResId);
      if (objPaperSubRes0 != null && objPaperSubRes0 != undefined)
        return objPaperSubRes0.paperSubResName;
      let objPaperSubResEN = await PaperSubRes_GetObjByPaperSubResIdAsync(strPaperSubResId);
      if (objPaperSubResEN == null) {
        const strMsg = `PaperSubResId=${strPaperSubResId} 的PaperSubRes中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objPaperSubRes = PaperSubResEx_CopyTo(objPaperSubResEN);
      this.paperSubResLst.push(objPaperSubRes);
      return objPaperSubRes.paperSubResName;
    },

    async getIdCurrEduCls(strPaperSubResId: number): Promise<string> {
      if (strPaperSubResId == 0) return '';
      if (strPaperSubResId == null) return '';
      const objPaperSubRes0 = this.paperSubResLst.find((x) => x.paperSubResId === strPaperSubResId);
      if (objPaperSubRes0 != null && objPaperSubRes0 != undefined)
        return objPaperSubRes0.idCurrEduCls;
      let objPaperSubResEN = await PaperSubRes_GetObjByPaperSubResIdAsync(strPaperSubResId);
      if (objPaperSubResEN == null) {
        const strMsg = `PaperSubResId=${strPaperSubResId} 的PaperSubRes中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objPaperSubRes = PaperSubResEx_CopyTo(objPaperSubResEN);
      this.paperSubResLst.push(objPaperSubRes);
      return objPaperSubRes.idCurrEduCls;
    },

    async getObj(strPaperSubResId: number): Promise<clsPaperSubRes | null> {
      if (strPaperSubResId == 0) return null;
      if (strPaperSubResId == null) return null;
      const objPaperSubRes0 = this.paperSubResLst.find((x) => x.paperSubResId === strPaperSubResId);
      if (objPaperSubRes0 != null && objPaperSubRes0 != undefined) return objPaperSubRes0;

      let objPaperSubResEN = await PaperSubRes_GetObjByPaperSubResIdAsync(strPaperSubResId);
      if (objPaperSubResEN == null) {
        const strMsg = `PaperSubResId=${strPaperSubResId} 的PaperSubRes中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objPaperSubRes = PaperSubResEx_CopyTo(objPaperSubResEN);
      this.paperSubResLst.push(objPaperSubRes);
      return objPaperSubRes;
    },

    delObj(strClassificationId: number): boolean {
      if (strClassificationId == null) return true;
      if (strClassificationId == 0) return true;
      const intIndex = this.paperSubResLst.findIndex(
        (x) => !(x.paperSubResId == strClassificationId),
      );

      this.paperSubResLst = this.paperSubResLst.filter(
        (item) => !(item.paperSubResId == strClassificationId),
      );

      if (intIndex > -1) {
        console.log(`论文子资源Id:${strClassificationId}在论文子资源关系列表中已经移除！`);
        return true;
      } else {
        console.error(`论文子资源Id:${strClassificationId}在论文子资源关系列表中不存在！`);
        return false;
      }
    },
    getPaperSubResIdLstByPaperSubResName(
      strPaperSubResName: string,
      strComparisonOp: enumComparisonOp,
    ): number[] {
      let arrUser;
      let arrPaperSubResId: number[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.paperSubResLst.filter((x) => x.paperSubResName === strPaperSubResName);
          arrPaperSubResId = arrUser.map((x) => x.paperSubResId);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.paperSubResLst.filter(
            (x) => x.paperSubResName.indexOf(strPaperSubResName) > -1,
          );
          arrPaperSubResId = arrUser.map((x) => x.paperSubResId);
          break;
      }
      return arrPaperSubResId;
    },

    getPaperSubResIdLstByIdCurrEduCls(
      strIdCurrEduCls: string,
      strComparisonOp: enumComparisonOp,
    ): number[] {
      let arrpaperSubRes;
      let arrPaperSubResId: number[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrpaperSubRes = this.paperSubResLst.filter((x) => x.idCurrEduCls === strIdCurrEduCls);
          arrPaperSubResId = arrpaperSubRes.map((x) => x.paperSubResId);
          break;
      }
      return arrPaperSubResId;
    },
    getPaperSubResIdLstByIdCurrEduClsLst(
      arrIdCurrEduCls: Array<string>,
      strComparisonOp: enumComparisonOp,
    ): number[] {
      let arrpaperSubRes;
      let arrPaperSubResId: number[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.In_04:
          arrpaperSubRes = this.paperSubResLst.filter(
            (x) => arrIdCurrEduCls.indexOf(x.idCurrEduCls) > -1,
          );
          arrPaperSubResId = arrpaperSubRes.map((x) => x.paperSubResId);
          break;
      }
      return arrPaperSubResId;
    },
    async getFieldValue(strPaperSubResId: number, strOutFldName: string): Promise<string> {
      let objPaperSubRes = this.paperSubResLst.find((x) => x.paperSubResId === strPaperSubResId);
      if (objPaperSubRes == null) {
        const objPaperSubResEN = await PaperSubRes_GetObjByPaperSubResIdAsync(strPaperSubResId);
        if (objPaperSubResEN == null) return '';
        objPaperSubRes = PaperSubResEx_CopyTo(objPaperSubResEN);
        this.paperSubResLst.push(objPaperSubRes);
      }

      let strMsg = '';
      switch (strOutFldName) {
        // case clsPaperSubResEN.con_PaperSubResId:
        //   return objPaperSubRes.paperSubResId;
        case clsPaperSubResEN.con_PaperSubResName:
          return objPaperSubRes.paperSubResName;
        case clsPaperSubResEN.con_IdCurrEduCls:
          return objPaperSubRes.idCurrEduCls;
        // case clsPaperSubResEN.con_CollegeName:
        //   return objPaperSubRes.collegeName;
        // case clsPaperSubResEN.con_IdXzMajor:
        //   return objPaperSubRes.idXzMajor;
        // case clsPaperSubResEN.con_MajorName:
        //   return objPaperSubRes.majorName;
        // case clsPaperSubResEN.con_HeadPic:
        //   return objPaperSubRes.headPic;
        // case clsPaperSubResEN.con_IsGSpaperSubRes:
        //   return objPaperSubRes.isGSpaperSubRes.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[PaperSubRes]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

export const paperSubResStore = usePaperSubResStore();
