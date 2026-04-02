import { qa_QuestionsCRUDEx } from './qa_QuestionsCRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { qa_Questions_Detail } from '@/viewsBase/InteractManage/qa_Questions_Detail';

/* qa_Questions_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class qa_Questions_DetailEx extends qa_Questions_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnDetail_Click.name;
    const objqa_QuestionsCRUD: qa_QuestionsCRUDEx = new qa_QuestionsCRUDEx();
    const objPage: qa_Questions_DetailEx = new qa_Questions_DetailEx(objqa_QuestionsCRUD);
    console.log(objPage);
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'qa_Questions_DetailExEx.btn_Click');

        break;
    }
  }
}
