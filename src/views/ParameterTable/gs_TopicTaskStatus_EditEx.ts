import { gs_TopicTaskStatus_Edit } from '@/viewsBase/RT_Params/gs_TopicTaskStatus_Edit';
import { clsgs_TopicTaskStatusEN } from '@/ts/L0Entity/RT_Params/clsgs_TopicTaskStatusEN';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { userStore } from '@/store/modulesShare/user';
/* gs_TopicTaskStatus_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_TopicTaskStatus_EditEx extends gs_TopicTaskStatus_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: gs_TopicTaskStatus_EditEx = <gs_TopicTaskStatus_EditEx>(
      gs_TopicTaskStatus_Edit.GetPageEditObj('gs_TopicTaskStatus_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_TopicTaskStatus_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_TopicTaskStatus_EditEx.btn_Click');

        break;
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjgs_TopicTaskStatusEN">数据传输的目的类对象</param>
*/
  public async PutDataTogs_TopicTaskStatusClass(pobjgs_TopicTaskStatusEN: clsgs_TopicTaskStatusEN) {
    pobjgs_TopicTaskStatusEN.SetStatusId(this.statusId); // 状态Id
    pobjgs_TopicTaskStatusEN.SetStatusName(this.statusName); // 状态名称
    pobjgs_TopicTaskStatusEN.SetUpdUser(userStore.getUserId); // 修改人
  }
}
