import { clsStudentInfo } from '@/ts/L0Entity/UserManage/clsStudentInfo';
import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
import { StudentInfo_GetObjByIdStudentInfoAsync } from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';
import { StudentInfoEx_GetObjByStuId } from '@/ts/L3ForWApiExShare/UserManage_GP/clsStudentInfoExWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { enumComparisonOp } from '@/ts/PubFun/enumComparisonOp';

import { defineStore } from 'pinia';
// export interface studentInfoSimEN {
//   IdStudentInfo: string;
//   stuName: string;
// }

export function StudentInfoEx_CopyTo(objStudentInfoENS: clsStudentInfoEN): clsStudentInfo {
  const strThisFuncName = StudentInfoEx_CopyTo.name;
  const objStudentInfoENT = new clsStudentInfo();
  try {
    ObjectAssign(objStudentInfoENT, objStudentInfoENS);
    return objStudentInfoENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objStudentInfoENT;
  }
}
// 定义 TabsState
export interface StudentInfoState {
  studentInfoLst: clsStudentInfo[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useStudentInfoStore = defineStore({
  id: 'StudentInfo',

  state(): StudentInfoState {
    return {
      studentInfoLst: [],
    };
  },

  actions: {
    async getStuName(strIdStudentInfo: string): Promise<string> {
      if (strIdStudentInfo == '') return '';
      if (strIdStudentInfo == null) return '';
      const objStudentInfo0 = this.studentInfoLst.find((x) => x.idStudentInfo === strIdStudentInfo);
      if (objStudentInfo0 != null && objStudentInfo0 != undefined) return objStudentInfo0.stuName;
      let objStudentInfoEN = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStudentInfo);
      if (objStudentInfoEN == null) {
        const strMsg = `IdStudentInfo=${strIdStudentInfo} 的StudentInfo中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objStudentInfo = StudentInfoEx_CopyTo(objStudentInfoEN);
      this.studentInfoLst.push(objStudentInfo);
      return objStudentInfo.stuName;
    },
    async getStuId(strIdStudentInfo: string): Promise<string> {
      if (strIdStudentInfo == '') return '';
      if (strIdStudentInfo == null) return '';
      const objStudentInfo0 = this.studentInfoLst.find((x) => x.idStudentInfo === strIdStudentInfo);
      if (objStudentInfo0 != null && objStudentInfo0 != undefined) return objStudentInfo0.stuId;
      let objStudentInfoEN = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStudentInfo);
      if (objStudentInfoEN == null) {
        const strMsg = `IdStudentInfo=${strIdStudentInfo} 的StudentInfo中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objStudentInfo = StudentInfoEx_CopyTo(objStudentInfoEN);
      this.studentInfoLst.push(objStudentInfo);
      return objStudentInfo.stuId;
    },
    async getIdXzCollege(strIdStudentInfo: string): Promise<string> {
      if (strIdStudentInfo == '') return '';
      if (strIdStudentInfo == null) return '';
      const objStudentInfo0 = this.studentInfoLst.find((x) => x.idStudentInfo === strIdStudentInfo);
      if (objStudentInfo0 != null && objStudentInfo0 != undefined)
        return objStudentInfo0.idXzCollege;
      let objStudentInfoEN = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStudentInfo);
      if (objStudentInfoEN == null) {
        const strMsg = `IdStudentInfo=${strIdStudentInfo} 的StudentInfo中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objStudentInfo = StudentInfoEx_CopyTo(objStudentInfoEN);
      this.studentInfoLst.push(objStudentInfo);
      return objStudentInfo.idXzCollege;
    },
    async getIdXzMajor(strIdStudentInfo: string): Promise<string> {
      if (strIdStudentInfo == '') return '';
      if (strIdStudentInfo == null) return '';
      const objStudentInfo0 = this.studentInfoLst.find((x) => x.idStudentInfo === strIdStudentInfo);
      if (objStudentInfo0 != null && objStudentInfo0 != undefined) return objStudentInfo0.idXzMajor;
      let objStudentInfoEN = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStudentInfo);
      if (objStudentInfoEN == null) {
        const strMsg = `IdStudentInfo=${strIdStudentInfo} 的StudentInfo中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objStudentInfo = StudentInfoEx_CopyTo(objStudentInfoEN);
      this.studentInfoLst.push(objStudentInfo);
      return objStudentInfo.idXzMajor;
    },

    async getIdXzMajorByStuId(strStuId: string): Promise<string> {
      if (strStuId == '') return '';
      if (strStuId == null) return '';
      const strIdStudentInfo = await this.getIdStudentInfoByStuId(strStuId);
      if (strIdStudentInfo == '') {
        const strMsg = `学号:${strStuId}在学生表中不存在！`;
        console.error(strMsg);
        alert(strMsg);
        return '';
      }
      const objStudentInfo0 = this.studentInfoLst.find((x) => x.idStudentInfo === strIdStudentInfo);
      if (objStudentInfo0 != null && objStudentInfo0 != undefined) return objStudentInfo0.idXzMajor;
      let objStudentInfoEN = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStudentInfo);
      if (objStudentInfoEN == null) {
        const strMsg = `IdStudentInfo=${strIdStudentInfo} 的StudentInfo中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objStudentInfo = StudentInfoEx_CopyTo(objStudentInfoEN);
      this.studentInfoLst.push(objStudentInfo);
      return objStudentInfo.idXzMajor;
    },
    async getObj(strIdStudentInfo: string): Promise<clsStudentInfo | null> {
      if (strIdStudentInfo == '') return null;
      if (strIdStudentInfo == null) return null;
      const objStudentInfo0 = this.studentInfoLst.find((x) => x.idStudentInfo === strIdStudentInfo);
      if (objStudentInfo0 != null && objStudentInfo0 != undefined) return objStudentInfo0;

      let objStudentInfoEN = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStudentInfo);
      if (objStudentInfoEN == null) {
        const strMsg = `IdStudentInfo=${strIdStudentInfo} 的StudentInfo中不存在，请检查！`;
        console.error(strMsg);
        return null;
      }
      const objStudentInfo = StudentInfoEx_CopyTo(objStudentInfoEN);
      this.studentInfoLst.push(objStudentInfo);
      return objStudentInfo;
    },

    getIdStudentInfoLstByStuName(strStuName: string, strComparisonOp: enumComparisonOp): string[] {
      let arrUser;
      let arrIdStudentInfo: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrUser = this.studentInfoLst.filter((x) => x.stuName === strStuName);
          arrIdStudentInfo = arrUser.map((x) => x.idStudentInfo);
          break;
        case enumComparisonOp.Like_03:
          arrUser = this.studentInfoLst.filter((x) => x.stuName.indexOf(strStuName) > -1);
          arrIdStudentInfo = arrUser.map((x) => x.idStudentInfo);
          break;
      }
      return arrIdStudentInfo;
    },

    getIdStudentInfoLstByStuId(strStuId: string, strComparisonOp: enumComparisonOp): string[] {
      let arrstudentInfo;
      let arrIdStudentInfo: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrstudentInfo = this.studentInfoLst.filter((x) => x.stuName === strStuId);
          arrIdStudentInfo = arrstudentInfo.map((x) => x.idStudentInfo);
          break;
        case enumComparisonOp.Like_03:
          arrstudentInfo = this.studentInfoLst.filter((x) => x.stuName.indexOf(strStuId) > -1);
          arrIdStudentInfo = arrstudentInfo.map((x) => x.idStudentInfo);
          break;
      }
      return arrIdStudentInfo;
    },
    async getIdStudentInfoByStuId(strStuId: string): Promise<string> {
      const objstudentInfo = this.studentInfoLst.find((x) => x.stuId === strStuId);
      if (objstudentInfo != null) return objstudentInfo.idStudentInfo;

      let objStudentInfoEN = await StudentInfoEx_GetObjByStuId(strStuId);
      if (objStudentInfoEN == null) {
        const strMsg = `IdStu=${strStuId} 在StudentInfo表中不存在，请检查！`;
        console.error(strMsg);
        return '';
      }
      const objStudentInfo = StudentInfoEx_CopyTo(objStudentInfoEN);
      this.studentInfoLst.push(objStudentInfo);

      return objStudentInfo.idStudentInfo;
    },
    getIdStudentInfoLstByIdXzCollege(
      strIdXzCollege: string,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrstudentInfo;
      let arrIdStudentInfo: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.Equal_01:
          arrstudentInfo = this.studentInfoLst.filter((x) => x.idXzCollege === strIdXzCollege);
          arrIdStudentInfo = arrstudentInfo.map((x) => x.idStudentInfo);
          break;
      }
      return arrIdStudentInfo;
    },
    getIdStudentInfoLstByIdXzCollegeLst(
      arrIdXzCollege: Array<string>,
      strComparisonOp: enumComparisonOp,
    ): string[] {
      let arrstudentInfo;
      let arrIdStudentInfo: string[] = [];
      switch (strComparisonOp) {
        case enumComparisonOp.In_04:
          arrstudentInfo = this.studentInfoLst.filter(
            (x) => arrIdXzCollege.indexOf(x.idXzCollege) > -1,
          );
          arrIdStudentInfo = arrstudentInfo.map((x) => x.idStudentInfo);
          break;
      }
      return arrIdStudentInfo;
    },
    async getFieldValue(strIdStudentInfo: string, strOutFldName: string): Promise<string> {
      let objStudentInfo = this.studentInfoLst.find((x) => x.idStudentInfo === strIdStudentInfo);
      if (objStudentInfo == null) {
        const objStudentInfoEN = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStudentInfo);
        if (objStudentInfoEN == null) return '';
        objStudentInfo = StudentInfoEx_CopyTo(objStudentInfoEN);
        this.studentInfoLst.push(objStudentInfo);
      }

      let strMsg = '';
      switch (strOutFldName) {
        case clsStudentInfoEN.con_StuId:
          return objStudentInfo.stuId;
        case clsStudentInfoEN.con_IdStudentInfo:
          return objStudentInfo.idStudentInfo;
        case clsStudentInfoEN.con_StuName:
          return objStudentInfo.stuName;
        case clsStudentInfoEN.con_IdXzCollege:
          return objStudentInfo.idXzCollege;
        // case clsStudentInfoEN.con_CollegeName:
        //   return objStudentInfo.collegeName;
        // case clsStudentInfoEN.con_IdXzMajor:
        //   return objStudentInfo.idXzMajor;
        // case clsStudentInfoEN.con_MajorName:
        //   return objStudentInfo.majorName;
        // case clsStudentInfoEN.con_HeadPic:
        //   return objStudentInfo.headPic;
        // case clsStudentInfoEN.con_IsGSstudentInfo:
        //   return objStudentInfo.isGSstudentInfo.toString();

        default:
          strMsg = `字段名:[${strOutFldName}]在表对象:[StudentInfo]中不存在!`;
          console.error(strMsg);
          return '';
      }
    },
  },
});

export const studentInfoStore = useStudentInfoStore();
