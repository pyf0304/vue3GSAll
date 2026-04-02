/**
 * 类名:CacheUseState_EditEx(界面:CacheUseStateCRUD)
 * 表名:CacheUseState(00050566)
 * 版本:2023.06.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/06/25 12:31:46
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:系统设置(SystemSet)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { AccessBtnEditClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { CacheUseState_Edit } from '@/viewsBase/SystemSet/CacheUseState_Edit';
/* CacheUseState_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class CacheUseState_EditEx extends CacheUseState_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage = CacheUseState_Edit.objPageEdit;

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
          const strMsg = '请选择需要修改的记录！';
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
        AccessBtnEditClickDefault(
          strCommandName,
          strKeyId,
          Format('{0}.{1}', this.constructor.name, strThisFuncName),
        );

        break;
    }
  }
}
