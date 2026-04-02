import { qa_PaperCRUDEx } from './qa_PaperCRUDEx';
import { qa_Paper_Detail } from '@/viewsBase/InteractManage/qa_Paper_Detail';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

/* qa_Paper_DetailEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class qa_Paper_DetailEx extends qa_Paper_Detail {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
 **/
  public btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnDetail_Click.name;
    const objqa_PaperCRUD: qa_PaperCRUDEx = new qa_PaperCRUDEx();
    const objPage: qa_Paper_DetailEx = new qa_Paper_DetailEx(objqa_PaperCRUD);
    console.log(objPage);
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'qa_Paper_DetailExEx.btn_Click');

        break;
    }
  }
}
