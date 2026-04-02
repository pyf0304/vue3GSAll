import { JournalSubject_Edit } from '@/viewsBase/GradEduPaper/JournalSubject_Edit';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
// import $ from 'jquery';
/* JournalSubject_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class JournalSubject_EditEx extends JournalSubject_Edit {
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: JournalSubject_EditEx = <JournalSubject_EditEx>(
      JournalSubject_Edit.GetPageEditObj('JournalSubject_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'JournalSubject_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'JournalSubject_EditEx.btn_Click');

        break;
    }
  }
}
