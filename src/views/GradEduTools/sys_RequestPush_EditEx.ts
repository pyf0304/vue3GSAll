import { sys_RequestPush_Edit } from '@/viewsBase/GradEduTools/sys_RequestPush_Edit';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

// import $ from 'jquery';
// declare let window: any;
/* sys_RequestPush_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class sys_RequestPush_EditEx extends sys_RequestPush_Edit {
  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: sys_RequestPush_EditEx = <sys_RequestPush_EditEx>(
      sys_RequestPush_Edit.GetPageEditObj('sys_RequestPush_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'sys_RequestPush_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;

      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'sys_RequestPush_EditEx.btn_Click');

        break;
    }
  }
}
