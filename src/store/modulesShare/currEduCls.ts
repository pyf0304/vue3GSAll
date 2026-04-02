
import { clsCurrEduCls } from '@/ts/L0Entity/DailyRunning/clsCurrEduCls';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import { CurrEduCls_GetObjByIdCurrEduClsAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { CurrEduClsEx_GetObjByCurrEduClsId } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsExWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface currEduClsSimEN {
//   IdCurrEduCls: string;
//   eduClsName: string;
// }

export function CurrEduClsEx_CopyTo(objCurrEduClsENS: clsCurrEduClsEN): clsCurrEduCls {
  const strThisFuncName = CurrEduClsEx_CopyTo.name;
  const objCurrEduClsENT = new clsCurrEduCls();
  try {
    ObjectAssign(objCurrEduClsENT, objCurrEduClsENS);
    return objCurrEduClsENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objCurrEduClsENT;
  }
}
// 定义 TabsState
export interface CurrEduClsState {
  currEduClsLst: clsCurrEduCls[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useCurrEduClsStore = defineStore({
  id: 'CurrEduCls',

  state(): CurrEduClsState {
    return {
      currEduClsLst: [],
    };
  },

  actions: {
    async getEduClsName(strIdCurrEduCls: string): Promise<string> {
      if (strIdCurrEduCls == '') return '';
      if (strIdCurrEduCls == null) return '';
      const objCurrEduCls0 = this.currEduClsLst.find((x) => x.idCurrEduCls === strIdCurrEduCls);
      if (objCurrEduCls0 != null && objCurrEduCls0 != undefined) return objCurrEduCls0.eduClsName;
      let objCurrEduClsEN = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
      if (objCurrEduClsEN == null) {
        const strMsg = `IdCurrEduCls=${strIdCurrEduCls} 的CurrEduCls中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objCurrEduCls = CurrEduClsEx_CopyTo(objCurrEduClsEN);
      this.currEduClsLst.push(objCurrEduCls);
      return objCurrEduCls.eduClsName;
    },
    async getCurrEduClsId(strIdCurrEduCls: string): Promise<string> {
      if (strIdCurrEduCls == '') return '';
      if (strIdCurrEduCls == null) return '';
      const objCurrEduCls0 = this.currEduClsLst.find((x) => x.idCurrEduCls === strIdCurrEduCls);
      if (objCurrEduCls0 != null && objCurrEduCls0 != undefined) return objCurrEduCls0.currEduClsId;
      let objCurrEduClsEN = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
      if (objCurrEduClsEN == null) {
        const strMsg = `IdCurrEduCls=${strIdCurrEduCls} 的CurrEduCls中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objCurrEduCls = CurrEduClsEx_CopyTo(objCurrEduClsEN);
      this.currEduClsLst.push(objCurrEduCls);
      return objCurrEduCls.currEduClsId;
    },
    async getIdXzCollege(strIdCurrEduCls: string): Promise<string> {
      if (strIdCurrEduCls == '') return '';
      if (strIdCurrEduCls == null) return '';
      const objCurrEduCls0 = this.currEduClsLst.find((x) => x.idCurrEduCls === strIdCurrEduCls);
      if (objCurrEduCls0 != null && objCurrEduCls0 != undefined)
        return objCurrEduCls0.idXzCollege;
      let objCurrEduClsEN = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
      if (objCurrEduClsEN == null) {
        const strMsg = `IdCurrEduCls=${strIdCurrEduCls} 的CurrEduCls中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objCurrEduCls = CurrEduClsEx_CopyTo(objCurrEduClsEN);
      this.currEduClsLst.push(objCurrEduCls);
      return objCurrEduCls.idXzCollege;
    },
    async getIdXzMajor(strIdCurrEduCls: string): Promise<string> {
      if (strIdCurrEduCls == '') return '';
      if (strIdCurrEduCls == null) return '';
      const objCurrEduCls0 = this.currEduClsLst.find((x) => x.idCurrEduCls === strIdCurrEduCls);
      if (objCurrEduCls0 != null && objCurrEduCls0 != undefined) return objCurrEduCls0.idXzMajor;
      let objCurrEduClsEN = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
      if (objCurrEduClsEN == null) {
        const strMsg = `IdCurrEduCls=${strIdCurrEduCls} 的CurrEduCls中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objCurrEduCls = CurrEduClsEx_CopyTo(objCurrEduClsEN);
      this.currEduClsLst.push(objCurrEduCls);
      return objCurrEduCls.idXzMajor;
    },

    async getIdXzMajorByCurrEduClsId(strCurrEduClsId: string): Promise<string> {
      if (strCurrEduClsId == '') return '';
      if (strCurrEduClsId == null) return '';
      const strIdCurrEduCls = await this.getIdCurrEduClsByCurrEduClsId(strCurrEduClsId);
      if (strIdCurrEduCls == '') {
        const strMsg = `学号:${strCurrEduClsId}在学生表中不存在！`;
        console.error(strMsg);
        alert(strMsg);
        return '';
      }
      const objCurrEduCls0 = this.currEduClsLst.find((x) => x.idCurrEduCls === strIdCurrEduCls);
      if (objCurrEduCls0 != null && objCurrEduCls0 != undefined) return objCurrEduCls0.idXzMajor;
      let objCurrEduClsEN = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
      if (objCurrEduClsEN == null) {
        const strMsg = `IdCurrEduCls=${strIdCurrEduCls} 的CurrEduCls中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objCurrEduCls = CurrEduClsEx_CopyTo(objCurrEduClsEN);
      this.currEduClsLst.push(objCurrEduCls);
      return objCurrEduCls.idXzMajor;
    },
    async getObj(strIdCurrEduCls: string): Promise<clsCurrEduCls | null> {
      if (strIdCurrEduCls == '') return null;
      if (strIdCurrEduCls == null) return null;
      const objCurrEduCls0 = this.currEduClsLst.find((x) => x.idCurrEduCls === strIdCurrEduCls);
      if (objCurrEduCls0 != null && objCurrEduCls0 != undefined) return objCurrEduCls0;

      let objCurrEduClsEN = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
      if (objCurrEduClsEN == null) {
        const strMsg = `IdCurrEduCls=${strIdCurrEduCls} 的CurrEduCls中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objCurrEduCls = CurrEduClsEx_CopyTo(objCurrEduClsEN);
      this.currEduClsLst.push(objCurrEduCls);
      return objCurrEduCls;
    },

    getIdCurrEduClsLstByEduClsName(strEduClsName: string, strComparisonOp: enumComparisonOp): string[] {
      let arrUser;
      let arrIdCurrEduCls: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.currEduClsLst.filter((x) => x.eduClsName === strEduClsName);
          arrIdCurrEduCls = arrUser.map((x) => x.idCurrEduCls);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.currEduClsLst.filter((x) => x.eduClsName.indexOf(strEduClsName) > -1);
          arrIdCurrEduCls = arrUser.map((x) => x.idCurrEduCls);
          break;
      }
      return arrIdCurrEduCls;
    },

    getIdCurrEduClsLstByCurrEduClsId(strCurrEduClsId: string, strComparisonOp: enumComparisonOp): string[] {
      let arrcurrEduCls;
      let arrIdCurrEduCls: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrcurrEduCls = this.currEduClsLst.filter((x) => x.eduClsName === strCurrEduClsId);
          arrIdCurrEduCls = arrcurrEduCls.map((x) => x.idCurrEduCls);
          break;
        case enumComparisonOp.Like_03:
          arrcurrEduCls = this.currEduClsLst.filter((x) => x.eduClsName.indexOf(strCurrEduClsId) > -1);
          arrIdCurrEduCls = arrcurrEduCls.map((x) => x.idCurrEduCls);
          break;
      }
      return arrIdCurrEduCls;
    },
    async getIdCurrEduClsByCurrEduClsId(strCurrEduClsId: string): Promise<string> {
      const objcurrEduCls = this.currEduClsLst.find((x) => x.currEduClsId === strCurrEduClsId);
      if (objcurrEduCls != null) return objcurrEduCls.idCurrEduCls;

      let objCurrEduClsEN = await CurrEduClsEx_GetObjByCurrEduClsId(strCurrEduClsId);
      if (objCurrEduClsEN == null) {
        const strMsg = `IdStu=${strCurrEduClsId} 在CurrEduCls表中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objCurrEduCls = CurrEduClsEx_CopyTo(objCurrEduClsEN);
      this.currEduClsLst.push(objCurrEduCls);

      return objCurrEduCls.idCurrEduCls;
    },
    getIdCurrEduClsLstByIdXzCollege(
      strIdXzCollege: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrcurrEduCls;
      let arrIdCurrEduCls: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrcurrEduCls = this.currEduClsLst.filter((x) => x.idXzCollege === strIdXzCollege);
          arrIdCurrEduCls = arrcurrEduCls.map((x) => x.idCurrEduCls);
          break;
      }
      return arrIdCurrEduCls;
    },
    getIdCurrEduClsLstByIdXzCollegeLst(
      arrIdXzCollege: Array<string>,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrcurrEduCls;
      let arrIdCurrEduCls: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.In_04:
          arrcurrEduCls = this.currEduClsLst.filter(
            (x) => arrIdXzCollege.indexOf(x.idXzCollege) > -1,
          );
          arrIdCurrEduCls = arrcurrEduCls.map((x) => x.idCurrEduCls);
          break;
      }
      return arrIdCurrEduCls;
    },
    
    delObj(strIdCurrEduCls: string): boolean {
      if (strIdCurrEduCls == null) return true;
      if (strIdCurrEduCls == '') return true;
      const intIndex = this.currEduClsLst.findIndex((x) => !(x.idCurrEduCls == strIdCurrEduCls));

      this.currEduClsLst = this.currEduClsLst.filter((item) => !(item.idCurrEduCls == strIdCurrEduCls));

      if (intIndex > -1) {
        console.log(`IdCurrEduCls:${strIdCurrEduCls}在CurrEduCls中已经移除！`);
        return true;
      } else {
        console.error(`IdCurrEduCls:${strIdCurrEduCls}在CurrEduCls中不存在！`);
        return false;
      }
    },

    async getFieldValue(strIdCurrEduCls: string, strOutFldName: string): Promise<string> {
      let objCurrEduCls = this.currEduClsLst.find((x) => x.idCurrEduCls === strIdCurrEduCls);
      if (objCurrEduCls == null) {
        const objCurrEduClsEN = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
        if (objCurrEduClsEN == null) return '';
        objCurrEduCls = CurrEduClsEx_CopyTo(objCurrEduClsEN);
        this.currEduClsLst.push(objCurrEduCls);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clsCurrEduClsEN.con_CurrEduClsId:
          return objCurrEduCls.currEduClsId;
        case clsCurrEduClsEN.con_IdCurrEduCls:
          return objCurrEduCls.idCurrEduCls;
        case clsCurrEduClsEN.con_EduClsName:
          return objCurrEduCls.eduClsName;
        case clsCurrEduClsEN.con_IdXzCollege:
          return objCurrEduCls.idXzCollege;
        // case clsCurrEduClsEN.con_CollegeName:
        //   return objCurrEduCls.collegeName;
        // case clsCurrEduClsEN.con_IdXzMajor:
        //   return objCurrEduCls.idXzMajor;
        // case clsCurrEduClsEN.con_MajorName:
        //   return objCurrEduCls.majorName;
        // case clsCurrEduClsEN.con_HeadPic:
        //   return objCurrEduCls.headPic;
        // case clsCurrEduClsEN.con_IsGScurrEduCls:
        //   return objCurrEduCls.isGScurrEduCls.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[CurrEduCls]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

export const currEduClsStore = useCurrEduClsStore();
