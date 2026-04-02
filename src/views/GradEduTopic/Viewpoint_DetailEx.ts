import { ViewpointCRUDEx } from './ViewpointCRUDEx';
import { Viewpoint_Detail } from '@/viewsBase/GradEduTopic/Viewpoint_Detail';
import { vViewpoint_GetObjByViewpointIdAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvViewpointWApi';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

/* Viewpoint_DetailEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:GeneCode)
*/
export class Viewpoint_DetailEx extends Viewpoint_Detail {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_DetailCSEx_TS4TypeScript:Gen_WApi_TS_btnDetail_Click)
    **/
  public btnDetail_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnDetail_Click.name;
    const objViewpointCRUD: ViewpointCRUDEx = new ViewpointCRUDEx();
    const objPage: Viewpoint_DetailEx = new Viewpoint_DetailEx(objViewpointCRUD);
    console.log(objPage);
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ////objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'Viewpoint_DetailExEx.btn_Click');

        break;
    }
  }

  /* 根据关键字获取相应的记录的对象
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
  <param name = "sender">参数列表</param>
*/
  public async DetailRecord(strViewpointId: string): Promise<boolean> {
    const strThisFuncName = this.DetailRecord.name;
    this.keyId = strViewpointId;

    try {
      const objvViewpointEN = await vViewpoint_GetObjByViewpointIdAsync(strViewpointId);
      if (objvViewpointEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      //数据显示
      $('#txtViewpointNameDetail').html(objvViewpointEN.viewpointName);
      $('#txtViewpointTypeNameDetail').html(objvViewpointEN.viewpointTypeName);
      $('#txtViewpointContentDetail').html(objvViewpointEN.viewpointContent);
      $('#txtReasonDetail').html(objvViewpointEN.reason);
      $('#txtSourceDetail').html(objvViewpointEN.source);
      $('#txtMemoDetail').html(objvViewpointEN.memo);
    } catch (e:any) {
      console.error(e);
      const strMsg = `当前无数据获取失败,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }
  /* 在数据表里修改记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecordInTab_Click)
*/
  public async btnDetailRecordInTab_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要的记录！');
      return '';
    }
    this.DetailRecord(strKeyId);
  }
}
