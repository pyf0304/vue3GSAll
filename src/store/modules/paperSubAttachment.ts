import { clsPaperSubAttachment } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachment';
import { clsPaperSubAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachmentEN';
import { PaperSubAttachmentEx_GetObjLstBySubViewpointId } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperSubAttachmentExWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { defineStore } from 'pinia';

export function PaperSubAttachmentEx_CopyTo(
  objPaperSubAttachmentENS: clsPaperSubAttachmentEN,
): clsPaperSubAttachment {
  const strThisFuncName = PaperSubAttachmentEx_CopyTo.name;
  const objPaperSubAttachmentENT = new clsPaperSubAttachment();
  try {
    ObjectAssign(objPaperSubAttachmentENT, objPaperSubAttachmentENS);
    return objPaperSubAttachmentENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objPaperSubAttachmentENT;
  }
}

// 定义 TabsState
export interface PaperSubAttachmentState {
  paperSubAttachmentLst: clsPaperSubAttachment[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const usePaperSubAttachmentStore = defineStore({
  id: 'PaperSubAttachment',

  state(): PaperSubAttachmentState {
    return {
      paperSubAttachmentLst: [],
    };
  },

  actions: {
    async getFilePaths(strSubViewpointId: number): Promise<Array<string>> {
      if (strSubViewpointId == 0) return [];
      if (strSubViewpointId == null) return [];

      let arrObjUserRoles = this.paperSubAttachmentLst.filter(
        (x) => x.subViewpointId === strSubViewpointId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await PaperSubAttachmentEx_GetObjLstBySubViewpointId(strSubViewpointId);
        if (arrObjLst.length == 0) {
          return [];
        }
        arrObjUserRoles = arrObjLst.map(PaperSubAttachmentEx_CopyTo);
        arrObjUserRoles.forEach((x) => {
          this.paperSubAttachmentLst.push(x);
        });
      }

      const arrFilePaths = arrObjUserRoles.map((x) => x.filePath);

      return arrFilePaths;
    },

    delObj(strSubViewpointId: number): boolean {
      if (strSubViewpointId == null) return true;
      if (strSubViewpointId == 0) return true;

      const intIndex = this.paperSubAttachmentLst.findIndex(
        (x) => x.subViewpointId === strSubViewpointId,
      );

      this.paperSubAttachmentLst = this.paperSubAttachmentLst.filter(
        (item) => item.subViewpointId !== strSubViewpointId,
      );

      if (intIndex > -1) {
        console.log(`SubViewpointId:${strSubViewpointId}在论文附件列表中已经移除！`);
        return true;
      }
      {
        console.error(`SubViewpointId:${strSubViewpointId}在论文附件列表中不存在！`);
        return false;
      }
    },
    async getObjLst(strSubViewpointId: number): Promise<Array<clsPaperSubAttachment> | null> {
      if (strSubViewpointId == 0) return null;
      if (strSubViewpointId == null) return null;

      let arrObjUserRoles = this.paperSubAttachmentLst.filter(
        (x) => x.subViewpointId === strSubViewpointId,
      );
      if (arrObjUserRoles.length == 0) {
        let arrObjLst = await PaperSubAttachmentEx_GetObjLstBySubViewpointId(strSubViewpointId);
        if (arrObjLst.length == 0) {
          return null;
        }
        arrObjUserRoles = arrObjLst.map(PaperSubAttachmentEx_CopyTo);
        arrObjUserRoles.forEach((x) => {
          this.paperSubAttachmentLst.push(x);
        });
      }

      return arrObjUserRoles;
    },
  },
});

export const paperSubAttachmentStore = usePaperSubAttachmentStore();
