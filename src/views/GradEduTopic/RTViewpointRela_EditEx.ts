import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { RTViewpointRela_Edit } from '@/viewsBase/GradEduTopic/RTViewpointRela_Edit';
import { clsRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointRelaEN';
import { clsvRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointRelaEN';
import { vRTViewpointRela_GetObjBymIdAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointRelaWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { userStore } from '@/store/modulesShare/user';
/* RTViewpointRela_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class RTViewpointRela_EditEx extends RTViewpointRela_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: RTViewpointRela_EditEx = <RTViewpointRela_EditEx>(
      RTViewpointRela_Edit.GetPageEditObj('RTViewpointRela_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'RTViewpointRela_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'RTViewpointRela_EditEx.btn_Click');

        break;
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjRTViewpointRelaEN">数据传输的目的类对象</param>
  */
  public async PutDataToRTViewpointRelaClass(pobjRTViewpointRelaEN: clsRTViewpointRelaEN) {
    pobjRTViewpointRelaEN.SetTopicId(this.topicId); // 主题编号
    pobjRTViewpointRelaEN.SetViewpointId(this.viewpointId); // 观点Id
    pobjRTViewpointRelaEN.SetProposePeople(this.proposePeople); // 提出人
    pobjRTViewpointRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTViewpointRelaEN.SetUpdUser(userStore.getUserId); // 修改用户Id// 修改用户Id
    pobjRTViewpointRelaEN.SetMemo(this.memo); // 备注
  }
  /* 根据关键字获取相应的记录的对象
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
 <param name = "sender">参数列表</param>
*/
  public async RtViewpointRelaDetailRecord(lngmId: number) {
    this.keyId = lngmId.toString();

    try {
      const objvRTViewpointRelaEN = await vRTViewpointRela_GetObjBymIdAsync(lngmId);
      if (objvRTViewpointRelaEN == null) return;
      // //显示当前数据；
      $('#txtTopicNameDetail').html(objvRTViewpointRelaEN.topicName);
      $('#txtTopicContentDetail').html(objvRTViewpointRelaEN.topicContent);

      $('#txtViewpointNameDetail').html(objvRTViewpointRelaEN.viewpointName);
      $('#txtViewpointTypeNameDetail').html(objvRTViewpointRelaEN.viewpointTypeName);
      $('#txtViewpointContentDetail').html(objvRTViewpointRelaEN.viewpointContent);
      $('#txtReasonDetail').html(objvRTViewpointRelaEN.reason);
      $('#txtSourceDetail').html(objvRTViewpointRelaEN.source);
    } catch (e: any) {
      console.error(e);
      const strMsg = `当前无数据获取失败,${e}.`;
      alert(strMsg);
    }
  }

  public btnDetailInTab_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要查看的记录！');
      return;
    }
    const lngKeyId = Number(strKeyId);
    this.RtViewpointRelaDetailRecord(lngKeyId);
  }
}
