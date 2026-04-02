import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { gs_UserConfig_Edit } from '@/viewsBase/ExamMan/gs_UserConfig_Edit';
/* gs_UserConfig_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_UserConfig_EditEx extends gs_UserConfig_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;

    const objPage: gs_UserConfig_EditEx = <gs_UserConfig_EditEx>(
      gs_UserConfig_Edit.GetPageEditObj('gs_UserConfig_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_UserConfig_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_UserConfig_EditEx.btn_Click');

        break;
    }
  }
}
