import { MessagePushCRUDEx } from './MessagePushCRUDEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { MessagePush_Detail } from '@/viewsBase/NewsAnn/MessagePush_Detail';
// import { MessagePush_Detail } from '@/viewsBase/NewsAnn/MessagePush_Detail';

/* MessagePush_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class MessagePush_DetailEx extends MessagePush_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnDetail_Click.name;
    const objMessagePushCRUD: MessagePushCRUDEx = new MessagePushCRUDEx();
    const objPage: MessagePush_DetailEx = new MessagePush_DetailEx(objMessagePushCRUD);
    console.log(objPage);
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'MessagePush_DetailExEx.btn_Click');

        break;
    }
  }
}
