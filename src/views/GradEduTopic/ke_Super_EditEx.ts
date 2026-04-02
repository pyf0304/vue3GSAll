import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { ke_Super_Edit } from '@/viewsBase/GradEduTopic/ke_Super_Edit';
/* ke_Super_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class ke_Super_EditEx extends ke_Super_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: ke_Super_EditEx = <ke_Super_EditEx>(
      ke_Super_Edit.GetPageEditObj('ke_Super_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'ke_Super_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ke_Super_EditEx.btn_Click');

        break;
    }
  }
}
