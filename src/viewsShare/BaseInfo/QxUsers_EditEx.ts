//import $ from "jquery";
import { XzGradeBaseEx_BindDdl_idGradeBaseInDivCache } from '@/ts/L3ForWApiExShare/SysPara/clsvXzGradeBaseExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { message } from '@/utils/myMessage';
import { QxUsers_Edit } from '@/viewsBase/BaseInfo/QxUsers_Edit';
/* QxUsers_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class QxUsers_EditEx extends QxUsers_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: QxUsers_EditEx = <QxUsers_EditEx>QxUsers_Edit.GetPageEditObj('QxUsers_EditEx');
    if (objPage == null) {
      const strMsg = `从预存编辑类获取关键字:[QxUsers_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！`;
      console.error(strMsg);
      message.warning(strMsg);
      return;
    }
    let strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPage.btnUpdateRecord_Click(strKeyId);
        }
        break;
      default:
        strMsg = Format(
          '命令:{0}, 关键字: {1}, 在函数({2}.{3})中没有被处理!',
          strCommandName,
          strKeyId,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SetDdl_IdGradeBaseInDiv() {
    await XzGradeBaseEx_BindDdl_idGradeBaseInDivCache(this.divEdit, 'ddlIdGradeBase'); //
  }
}
