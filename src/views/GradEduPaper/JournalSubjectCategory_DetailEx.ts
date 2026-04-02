import { JournalSubjectCategoryCRUDEx } from './JournalSubjectCategoryCRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { JournalSubjectCategory_Detail } from '@/viewsBase/GradEduPaper/JournalSubjectCategory_Detail';

/* JournalSubjectCategory_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class JournalSubjectCategory_DetailEx extends JournalSubjectCategory_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnDetail_Click.name;
    const objJournalSubjectCategoryCRUD: JournalSubjectCategoryCRUDEx =
      new JournalSubjectCategoryCRUDEx();
    const objPage: JournalSubjectCategory_DetailEx = new JournalSubjectCategory_DetailEx(
      objJournalSubjectCategoryCRUD,
    );
    console.log(objPage);
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'JournalSubjectCategory_DetailExEx.btn_Click');

        break;
    }
  }
}
