import { clsCurrEduClsTeacher } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacher';
import { clsCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherEN';

import {
  CurrEduClsTeacherEx_GetObjListByIdCurrEduCls,
  CurrEduClsTeacherEx_GetObjListByIdTeacher,
} from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsTeacherExWApi';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { defineStore } from 'pinia';

export function CurrEduClsTeacherEx_CopyTo(
  objCurrEduClsTeacherENS: clsCurrEduClsTeacherEN,
): clsCurrEduClsTeacher {
  const strThisFuncName = CurrEduClsTeacherEx_CopyTo.name;
  const objCurrEduClsTeacherENT = new clsCurrEduClsTeacher();
  try {
    ObjectAssign(objCurrEduClsTeacherENT, objCurrEduClsTeacherENS);
    return objCurrEduClsTeacherENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objCurrEduClsTeacherENT;
  }
}

// export interface roleMenuNames {
//   idCurrEduCls: string;
//   potenceNames: string;
//   idTeachers: string;
// }
// 定义 TabsState
export interface CurrEduClsTeacherState {
  currEduClsTeacherLst: clsCurrEduClsTeacher[];

  // roleMenuNamesLst: roleMenuNames[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useCurrEduClsTeacherStore = defineStore({
  id: 'CurrEduClsTeacher',

  state(): CurrEduClsTeacherState {
    return {
      currEduClsTeacherLst: [],

      // roleMenuNamesLst: [],
    };
  },

  actions: {
    delRoleNamesByIdTeacher(strIdTeacher: string): boolean {
      if (strIdTeacher == '') return true;
      if (strIdTeacher == null) return true;

      const intIndex = this.currEduClsTeacherLst.findIndex((x) => x.idTeacher === strIdTeacher);

      this.currEduClsTeacherLst = this.currEduClsTeacherLst.filter(
        (item) => item.idTeacher !== strIdTeacher,
      );

      if (intIndex > -1) {
        console.log(`idTeacher:${strIdTeacher}在教学班教师列表中已经移除！`);
        return true;
      } else {
        console.error(`idTeacher:${strIdTeacher}在教学班教师列表中不存在！`);
        return false;
      }
    },
    async getObjLst(strIdTeacher: string): Promise<Array<clsCurrEduClsTeacher> | null> {
      if (strIdTeacher == '') return null;
      if (strIdTeacher == null) return null;

      let arrCurrEduClsTeacher = this.currEduClsTeacherLst.filter(
        (x) => x.idTeacher === strIdTeacher,
      );

      if (arrCurrEduClsTeacher.length == 0) {
        let arrObjLst = await CurrEduClsTeacherEx_GetObjListByIdTeacher(strIdTeacher);
        if (arrObjLst == null || arrObjLst.length == 0) {
          return null;
        }
        arrCurrEduClsTeacher = arrObjLst.map(CurrEduClsTeacherEx_CopyTo);
        arrCurrEduClsTeacher.forEach((x) => {
          this.currEduClsTeacherLst.push(x);
        });
      }

      return arrCurrEduClsTeacher;
    },

    delIdTeacher(strIdTeacher: string, strQxPrjId: string): boolean {
      if (strIdTeacher == null) return true;
      if (strIdTeacher == '') return true;
      const intIndex = this.currEduClsTeacherLst.findIndex((x) => x.idTeacher === strIdTeacher);

      this.currEduClsTeacherLst = this.currEduClsTeacherLst.filter(
        (item) => item.idTeacher !== strIdTeacher,
      );

      if (intIndex > -1) {
        console.log(`IdTeacher:${strIdTeacher}在教学班教师关系列表中已经移除！`);
        return true;
      } else {
        console.error(`IdTeacher:${strIdTeacher}在教学班教师关系列表中不存在！`);
        return false;
      }
    },
    async getIdCurrEduClss(strIdTeacher: string, strQxPrjId: string): Promise<Array<string>> {
      if (strIdTeacher == '') return [];
      if (strIdTeacher == null) return [];
      if (strQxPrjId == '') return [];
      if (strQxPrjId == null) return [];

      let arrCurrEduClsTeacher = this.currEduClsTeacherLst.filter(
        (x) => x.idTeacher === strIdTeacher,
      );
      if (arrCurrEduClsTeacher.length == 0) {
        let arrObjLst = await CurrEduClsTeacherEx_GetObjListByIdTeacher(strIdTeacher);
        if (arrObjLst == null || arrObjLst.length == 0) {
          return [];
        }
        arrCurrEduClsTeacher = arrObjLst
          .filter((x) => x.idTeacher == strIdTeacher)
          .map(CurrEduClsTeacherEx_CopyTo);
        arrCurrEduClsTeacher.forEach((x) => {
          this.currEduClsTeacherLst.push(x);
        });
      }

      const arrIdCurrEduClss = arrCurrEduClsTeacher.map((x) => x.idCurrEduCls);

      return arrIdCurrEduClss;
    },

    async getIdTeachersByIdCurrEduCls(strIdCurrEduCls: string): Promise<Array<string>> {
      if (strIdCurrEduCls == '') return [];
      if (strIdCurrEduCls == null) return [];

      const currEduClsTeacherLstSel = this.currEduClsTeacherLst.filter(
        (x) => x.idCurrEduCls == strIdCurrEduCls,
      );
      if (currEduClsTeacherLstSel.length > 0) {
        const arr = currEduClsTeacherLstSel.map((x) => x.idTeacher);
        return arr;
      }

      let arrObjLst = await CurrEduClsTeacherEx_GetObjListByIdCurrEduCls(strIdCurrEduCls);
      if (arrObjLst == null || arrObjLst.length == 0) {
        return [];
      }

      for (const objCurrEduClsTeacherEN of arrObjLst) {
        const obj = CurrEduClsTeacherEx_CopyTo(objCurrEduClsTeacherEN);
        currEduClsTeacherLstSel.push(obj);
      }
      const arr = arrObjLst.map((x) => x.idTeacher);
      return arr;
    },

    delIdTeachersByIdCurrEduCls(strIdCurrEduCls: string): boolean {
      if (strIdCurrEduCls == '') return true;
      if (strIdCurrEduCls == null) return true;

      const intIndex = this.currEduClsTeacherLst.findIndex(
        (item) => item.idCurrEduCls != strIdCurrEduCls,
      );

      this.currEduClsTeacherLst = this.currEduClsTeacherLst.filter(
        (item) => item.idCurrEduCls != strIdCurrEduCls,
      );

      if (intIndex > -1) {
        console.log(`strIdCurrEduCls:${strIdCurrEduCls}在教学班教师列表中已经移除！`);
        return true;
      } else {
        console.error(`strIdCurrEduCls:${strIdCurrEduCls}在教学班教师列表中不存在！`);
        return false;
      }
    },
  },
});

export const currEduClsTeacherStore = useCurrEduClsTeacherStore();
