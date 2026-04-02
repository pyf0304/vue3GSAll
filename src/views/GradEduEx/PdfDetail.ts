//import * as QQ from "q";
import { Ref } from 'vue';
import $ from 'jquery';
import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { PaperAttachment_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import { Format } from '@/ts/PubFun/clsString';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';

/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PdfDetail {
  public static EditRef: Ref<any>;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public async PageLoad() {
    const divName = this.getDivName();
    if (divName == null) return;
    // 在此处放置用户代码以初始化页面
    const strKeyId = clsPrivateSessionStorage.paperId;

    let objPaperAttachment: clsPaperAttachmentEN;

    try {
      const strWhereCond = ` 1=1 and paperId ='${strKeyId}'`;
      const responseText = await PaperAttachment_GetFirstObjAsync(strWhereCond);
      objPaperAttachment = <clsPaperAttachmentEN>responseText;

      if (objPaperAttachment != null) {
        const strfilepath = GetAddressAndPort() + objPaperAttachment.filePath;
        let strhtml = '';
        strhtml = `<iframe src='../GradEduEx/Pdf?file=${strfilepath}' style="height:100%;width:99%; min-height:750px;"></iframe>`;
        $('#div_pdf').html(strhtml);
      } else {
        let strhtml = '';
        strhtml =
          '<iframe src=\'../GradEduEx/Pdf\' style="height:100%;width:99%; min-height:750px;"></iframe>';
        $('#div_pdf').html(strhtml);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    PdfDetail.divEdit = PdfDetail.EditObj.$refs.refDivEdit;
    if (PdfDetail.divEdit == null) {
      if (PdfDetail.times4TestShowDialog < 2) {
        PdfDetail.times4TestShowDialog++;
        setTimeout(() => {
          this.getDivName();
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
      return null;
    } else {
      PdfDetail.times4TestShowDialog = 0;
    }
    return PdfDetail.divEdit;
  }
}
