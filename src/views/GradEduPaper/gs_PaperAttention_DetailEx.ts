import { gs_PaperAttentionCRUDEx } from './gs_PaperAttentionCRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { gs_PaperAttention_Detail } from '@/viewsBase/GradEduPaper/gs_PaperAttention_Detail';

/* gs_PaperAttention_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PaperAttention_DetailEx extends gs_PaperAttention_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnDetail_Click.name;
    const objgs_PaperAttentionCRUD: gs_PaperAttentionCRUDEx = new gs_PaperAttentionCRUDEx();
    const objPage: gs_PaperAttention_DetailEx = new gs_PaperAttention_DetailEx(
      objgs_PaperAttentionCRUD,
    );
    console.log(objPage);
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_PaperAttention_DetailExEx.btn_Click');

        break;
    }
  }
}
