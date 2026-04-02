import { gs_PaperVerCRUDEx } from './gs_PaperVerCRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { gs_PaperVer_Detail } from '@/viewsBase/GradEduPaper/gs_PaperVer_Detail';

/* gs_PaperVer_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PaperVer_DetailEx extends gs_PaperVer_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnDetail_Click.name;
    const objgs_PaperVerCRUD: gs_PaperVerCRUDEx = new gs_PaperVerCRUDEx();
    const objPage: gs_PaperVer_DetailEx = new gs_PaperVer_DetailEx(objgs_PaperVerCRUD);
    console.log(objPage);
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_PaperVer_DetailExEx.btn_Click');

        break;
    }
  }
}
