import { Format } from '@/ts/PubFun/clsString';
// import $ from 'jquery';
// declare let window: any;
/// <summary>
/// WApiTaskType_UT_TS 的摘要说明。其中Q代表查询,U代表修改
/// (AutoGCLib.WA_ViewUTScriptCS_TS4TypeScript:GeneCode)
/// </summary>
export class Login {
  public static EditObj: any;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  /// <summary>
  /// 根据关键字列表获取相应的记录对象的列表
  /// (AutoGCLib.WA_ViewUTScriptCS_TS4TypeScript:Gen_WApi_Ts_btnClickGetObjLstByKeyLst)
  /// </summary>
  /// <param name = "sender">事件发送者</param>
  /// <returns></returns>
  public static async btnLogin_Click() {
    const divName = Login.getDivName();
    if (divName == null) return;
    // const strUserId: string = GetInputValueInDivObj(divName, 'txtUserId');
    // const strPassword: string = GetInputValueInDivObj(divName, 'txtPassword');

    try {
      //const responseText = await TaskType_GetObjLstByTaskTypeIdLstAsync(arrTaskTypeId);
      //strIdCurrEduclsarrTaskTypeObjLst : Array<clsTaskTypeEN> = < Array<clsTaskTypeEN>>responseText;
      //strIdCurrEduclsstrInfo: string = `根据关键字列表:[${strKeyIdLst}]共获取对象列表数：${arrTaskTypeObjLst.length}!`;
      //$('#lblResult15').val(strInfo);
      ////显示信息框
      //alert(strInfo);
      //this.BindTab_TaskType("divResult15", arrTaskTypeObjLst);
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public static getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    Login.divEdit = Login.EditObj.$refs.refDivEdit;
    if (Login.divEdit == null) {
      if (Login.times4TestShowDialog < 2) {
        Login.times4TestShowDialog++;
        setTimeout(() => {
          this.getDivName();
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
      return null;
    } else {
      Login.times4TestShowDialog = 0;
    }
    return Login.divEdit;
  }
}
