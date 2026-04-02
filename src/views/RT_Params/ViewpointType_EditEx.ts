import { ViewpointType_Edit } from '@/viewsBase/RT_Params/ViewpointType_Edit';
import { clsViewpointTypeEN } from '@/ts/L0Entity/RT_Params/clsViewpointTypeEN';
import { ViewpointType_AddNewRecordAsync } from '@/ts/L3ForWApi/RT_Params/clsViewpointTypeWApi';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
/* ViewpointType_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class ViewpointType_EditEx extends ViewpointType_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: ViewpointType_EditEx = <ViewpointType_EditEx>(
      ViewpointType_Edit.GetPageEditObj('ViewpointType_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'ViewpointType_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ViewpointType_EditEx.btn_Click');

        break;
    }
  }
  /* 添加新记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
  */
  public async AddNewRecordSave() {


    const objViewpointTypeEN: clsViewpointTypeEN = new clsViewpointTypeEN();
    this.PutDataToViewpointTypeClass(objViewpointTypeEN);
    try {

      const responseText2 = await ViewpointType_AddNewRecordAsync(objViewpointTypeEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }
}
