import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { SysScoreWeight_Edit } from '@/viewsBase/GradEduTools/SysScoreWeight_Edit';
/* SysScoreWeight_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class SysScoreWeight_EditEx extends SysScoreWeight_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: SysScoreWeight_EditEx = <SysScoreWeight_EditEx>(
      SysScoreWeight_Edit.GetPageEditObj('SysScoreWeight_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'SysScoreWeight_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'SysScoreWeight_EditEx.btn_Click');

        break;
    }
  }
}
