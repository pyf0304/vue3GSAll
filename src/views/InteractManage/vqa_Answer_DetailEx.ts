import { qa_AnswerCRUDEx } from './qa_AnswerCRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { vqa_Answer_Detail } from '@/viewsBase/InteractManage/vqa_Answer_Detail';

/* vqa_Answer_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class vqa_Answer_DetailEx extends vqa_Answer_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnDetail_Click.name;
    const objqa_AnswerCRUD: qa_AnswerCRUDEx = new qa_AnswerCRUDEx();
    const objPage: vqa_Answer_DetailEx = new vqa_Answer_DetailEx(objqa_AnswerCRUD);
    console.log(objPage);
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'vqa_Answer_DetailExEx.btn_Click');

        break;
    }
  }
}
