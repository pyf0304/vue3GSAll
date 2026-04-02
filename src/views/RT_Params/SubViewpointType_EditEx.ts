import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsSubViewpointTypeWApiEx } from '@/ts/L3ForWApiEx/GraduateEdu/clsSubViewpointTypeWApiEx';
import { SubViewpointType_Edit } from '@/viewsBase/RT_Params/SubViewpointType_Edit';
import { clsSubViewpointTypeEN } from '@/ts/L0Entity/RT_Params/clsSubViewpointTypeEN';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { userStore } from '@/store/modulesShare/user';
/* SubViewpointType_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class SubViewpointType_EditEx extends SubViewpointType_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: SubViewpointType_EditEx = <SubViewpointType_EditEx>(
      SubViewpointType_Edit.GetPageEditObj('SubViewpointType_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'SubViewpointType_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'SubViewpointType_EditEx.btn_Click');

        break;
    }
  }

  //添加数据事件
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
  public async btnOKUpd_Click() {
    const strCommandText: string = this.btnSubmitSubViewpointType;
    try {
      //这是一个单表的插入的代码,由于逻辑层太简单,
      //就把逻辑层合并到控制层,
      const returnBool = await this.AddNewRecordSave();
      if (returnBool == true) {
        //HideDialog();
        this.Clear();
        window.location.href = '#pageOne';
        //去掉主页动态标签防止缓存问题；
        $('#SubviewPointType li').not(':first').remove();
        this.iShowList.BindGv(clsSubViewpointTypeEN._CurrTabName, returnBool.toString());
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  /* 添加新记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
  */
  public async AddNewRecordSave() {
    const objSubViewpointTypeEN: clsSubViewpointTypeEN = new clsSubViewpointTypeEN();
    this.PutDataToSubViewpointTypeClass(objSubViewpointTypeEN);
    try {
      //const responseText = await SubViewpointType_IsExistAsync(objSubViewpointTypeEN.subViewpointTypeId);
      //strIdCurrEduclsbolIsExist: boolean = responseText;
      //if (bolIsExist == true) {
      //    strIdCurrEduclsstrMsg: string = `添加记录时，关键字：${objSubViewpointTypeEN.subViewpointTypeId}已经存在！`;
      //    alert(strMsg);
      //    return responseText;//一定要有一个返回值，否则会出错！
      //}
      //const responseText2 = await SubViewpointType_AddNewRecordAsync(objSubViewpointTypeEN);
      const responseText2 = await clsSubViewpointTypeWApiEx.AddNewRecordAsyncEx(
        objSubViewpointTypeEN,
      );
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
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjSubViewpointTypeEN">数据传输的目的类对象</param>
  */
  public async PutDataToSubViewpointTypeClass(pobjSubViewpointTypeEN: clsSubViewpointTypeEN) {
    //pobjSubViewpointTypeEN.subViewpointTypeId = this.subViewpointTypeId;// 类型Id
    pobjSubViewpointTypeEN.subViewpointTypeName = this.subViewpointTypeName; // 类型名称
    pobjSubViewpointTypeEN.SetOrderNum(1); // this.arrSubViewpointTypeObjLstCount++;// 序号
    pobjSubViewpointTypeEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjSubViewpointTypeEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
    pobjSubViewpointTypeEN.SetMemo(this.memo); // 备注
  }
}
