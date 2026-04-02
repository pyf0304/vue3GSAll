import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { ExplainType_Edit } from '@/viewsBase/RT_Params/ExplainType_Edit';
import { clsExplainTypeEN } from '@/ts/L0Entity/RT_Params/clsExplainTypeEN';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { userStore } from '@/store/modulesShare/user';
/* ExplainType_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class ExplainType_EditEx extends ExplainType_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: ExplainType_EditEx = <ExplainType_EditEx>(
      ExplainType_Edit.GetPageEditObj('ExplainType_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'ExplainType_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ExplainType_EditEx.btn_Click');

        break;
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjExplainTypeEN">数据传输的目的类对象</param>
  */
  public async PutDataToExplainTypeClass(pobjExplainTypeEN: clsExplainTypeEN) {
    pobjExplainTypeEN.SetExplainTypeId(this.explainTypeId); // 说明类型Id
    pobjExplainTypeEN.SetExplainTypeName(this.explainTypeName); // 说明类型名
    pobjExplainTypeEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjExplainTypeEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
    pobjExplainTypeEN.SetMemo(this.memo); // 备注
  }
}
