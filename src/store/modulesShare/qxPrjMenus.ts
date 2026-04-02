import { clsQxPrjMenus } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenus';
import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
import { QxPrjMenus_GetObjByMenuIdAsync } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface qxPrjMenusSimEN {
//   MenuId: string;
//   menuName: string;
// }

export function QxPrjMenusEx_CopyTo(objQxPrjMenusENS: clsQxPrjMenusEN): clsQxPrjMenus {
  const strThisFuncName = QxPrjMenusEx_CopyTo.name;
  const objQxPrjMenusENT = new clsQxPrjMenus();
  try {
    ObjectAssign(objQxPrjMenusENT, objQxPrjMenusENS);
    return objQxPrjMenusENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objQxPrjMenusENT;
  }
}
// 定义 TabsState
export interface QxPrjMenusState {
  qxPrjMenusLst: clsQxPrjMenus[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useQxPrjMenusStore = defineStore({
  id: 'QxPrjMenus',

  state(): QxPrjMenusState {
    return {
      qxPrjMenusLst: [],
    };
  },

  actions: {
    async getMenuName(strMenuId: string): Promise<string> {
      if (strMenuId == '') return '';
      if (strMenuId == null) return '';
      const objQxPrjMenus0 = this.qxPrjMenusLst.find((x) => x.menuId === strMenuId);
      if (objQxPrjMenus0 != null && objQxPrjMenus0 != undefined) return objQxPrjMenus0.menuName;
      let objQxPrjMenusEN = await QxPrjMenus_GetObjByMenuIdAsync(strMenuId);
      if (objQxPrjMenusEN == null) {
        const strMsg = `MenuId=${strMenuId} 的QxPrjMenus中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objQxPrjMenus = QxPrjMenusEx_CopyTo(objQxPrjMenusEN);
      this.qxPrjMenusLst.push(objQxPrjMenus);
      return objQxPrjMenus.menuName;
    },

    async getOrderNum(strMenuId: string): Promise<number> {
      if (strMenuId == '') return 0;
      if (strMenuId == null) return 0;
      const objQxPrjMenus0 = this.qxPrjMenusLst.find((x) => x.menuId === strMenuId);
      if (objQxPrjMenus0 != null && objQxPrjMenus0 != undefined) return objQxPrjMenus0.orderNum;
      let objQxPrjMenusEN = await QxPrjMenus_GetObjByMenuIdAsync(strMenuId);
      if (objQxPrjMenusEN == null) {
        const strMsg = `MenuId=${strMenuId} 的QxPrjMenus中不存在，请检查！`;
        console.error(strMsg);
        return 0;
      }
      const objQxPrjMenus = QxPrjMenusEx_CopyTo(objQxPrjMenusEN);
      this.qxPrjMenusLst.push(objQxPrjMenus);
      return objQxPrjMenus.orderNum;
    },

    async getQxPrjId(strMenuId: string): Promise<string> {
      if (strMenuId == '') return '';
      if (strMenuId == null) return '';
      const objQxPrjMenus0 = this.qxPrjMenusLst.find((x) => x.menuId === strMenuId);
      if (objQxPrjMenus0 != null && objQxPrjMenus0 != undefined) return objQxPrjMenus0.qxPrjId;
      let objQxPrjMenusEN = await QxPrjMenus_GetObjByMenuIdAsync(strMenuId);
      if (objQxPrjMenusEN == null) {
        const strMsg = `MenuId=${strMenuId} 的QxPrjMenus中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objQxPrjMenus = QxPrjMenusEx_CopyTo(objQxPrjMenusEN);
      this.qxPrjMenusLst.push(objQxPrjMenus);
      return objQxPrjMenus.qxPrjId;
    },
    async getUpMenuId(strMenuId: string): Promise<string> {
      if (strMenuId == '') return '';
      if (strMenuId == null) return '';
      const objQxPrjMenus0 = this.qxPrjMenusLst.find((x) => x.menuId === strMenuId);
      if (objQxPrjMenus0 != null && objQxPrjMenus0 != undefined) return objQxPrjMenus0.upMenuId;
      let objQxPrjMenusEN = await QxPrjMenus_GetObjByMenuIdAsync(strMenuId);
      if (objQxPrjMenusEN == null) {
        const strMsg = `MenuId=${strMenuId} 的QxPrjMenus中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objQxPrjMenus = QxPrjMenusEx_CopyTo(objQxPrjMenusEN);
      this.qxPrjMenusLst.push(objQxPrjMenus);
      return objQxPrjMenus.upMenuId;
    },
    async getObj(strMenuId: string): Promise<clsQxPrjMenus | null> {
      if (strMenuId == '') return null;
      if (strMenuId == null) return null;
      const objQxPrjMenus0 = this.qxPrjMenusLst.find((x) => x.menuId === strMenuId);
      if (objQxPrjMenus0 != null && objQxPrjMenus0 != undefined) return objQxPrjMenus0;

      let objQxPrjMenusEN = await QxPrjMenus_GetObjByMenuIdAsync(strMenuId);
      if (objQxPrjMenusEN == null) {
        const strMsg = `MenuId=${strMenuId} 的QxPrjMenus中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objQxPrjMenus = QxPrjMenusEx_CopyTo(objQxPrjMenusEN);
      this.qxPrjMenusLst.push(objQxPrjMenus);
      return objQxPrjMenus;
    },

    getMenuIdLstByMenuName(strMenuName: string, strComparisonOp: enumComparisonOp): string[] {
      let arrUser;
      let arrMenuId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.qxPrjMenusLst.filter((x) => x.menuName === strMenuName);
          arrMenuId = arrUser.map((x) => x.menuId);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.qxPrjMenusLst.filter((x) => x.menuName.indexOf(strMenuName) > -1);
          arrMenuId = arrUser.map((x) => x.menuId);
          break;
      }
      return arrMenuId;
    },

    getSubMenuIdLst(strMenuId: string): string[] {
      const qxPrjMenusLst_Sel = this.qxPrjMenusLst.filter((x) => x.upMenuId === strMenuId);
      const arrMenuId = qxPrjMenusLst_Sel.map((x) => x.menuId);
      return arrMenuId;
    },
    getMenuIdLstByQxPrjId(strQxPrjId: string, strComparisonOp: enumComparisonOp): string[] {
      let arrqxPrjMenus;
      let arrMenuId: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrqxPrjMenus = this.qxPrjMenusLst.filter((x) => x.qxPrjId === strQxPrjId);
          arrMenuId = arrqxPrjMenus.map((x) => x.menuId);
          break;
      }
      return arrMenuId;
    },

    delObj(strMenuId: string): boolean {
      if (strMenuId == null) return true;
      if (strMenuId == '') return true;
      const intIndex = this.qxPrjMenusLst.findIndex((x) => !(x.menuId == strMenuId));

      this.qxPrjMenusLst = this.qxPrjMenusLst.filter((item) => !(item.menuId == strMenuId));

      if (intIndex > -1) {
        console.log(`MenuId:${strMenuId}在QxPrjMenus中已经移除！`);
        return true;
      } else {
        console.error(`MenuId:${strMenuId}在QxPrjMenus中不存在！`);
        return false;
      }
    },

    async getFieldValue(strMenuId: string, strOutFldName: string): Promise<string> {
      let objQxPrjMenus = this.qxPrjMenusLst.find((x) => x.menuId === strMenuId);
      if (objQxPrjMenus == null) {
        const objQxPrjMenusEN = await QxPrjMenus_GetObjByMenuIdAsync(strMenuId);
        if (objQxPrjMenusEN == null) return '';
        objQxPrjMenus = QxPrjMenusEx_CopyTo(objQxPrjMenusEN);
        this.qxPrjMenusLst.push(objQxPrjMenus);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clsQxPrjMenusEN.con_QxPrjId:
          return objQxPrjMenus.qxPrjId;
        case clsQxPrjMenusEN.con_MenuId:
          return objQxPrjMenus.menuId;
        case clsQxPrjMenusEN.con_MenuName:
          return objQxPrjMenus.menuName;
        case clsQxPrjMenusEN.con_QxPrjId:
          return objQxPrjMenus.qxPrjId;
        // case clsQxPrjMenusEN.con_CollegeName:
        //   return objQxPrjMenus.collegeName;
        // case clsQxPrjMenusEN.con_IdXzMajor:
        //   return objQxPrjMenus.idXzMajor;
        // case clsQxPrjMenusEN.con_MajorName:
        //   return objQxPrjMenus.majorName;
        // case clsQxPrjMenusEN.con_HeadPic:
        //   return objQxPrjMenus.headPic;
        // case clsQxPrjMenusEN.con_IsGSqxPrjMenus:
        //   return objQxPrjMenus.isGSqxPrjMenus.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[QxPrjMenus]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

export const qxPrjMenusStore = useQxPrjMenusStore();
