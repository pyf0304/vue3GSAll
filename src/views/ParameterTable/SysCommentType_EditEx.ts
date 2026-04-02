import { SysCommentType_Edit } from '@/viewsBase/RT_Params/SysCommentType_Edit';
import { clsSysCommentTypeEN } from '@/ts/L0Entity/RT_Params/clsSysCommentTypeEN';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { HideDivInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
declare let window: any;
/* SysCommentType_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class SysCommentType_EditEx extends SysCommentType_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: SysCommentType_EditEx = <SysCommentType_EditEx>(
      SysCommentType_Edit.GetPageEditObj('SysCommentType_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'SysCommentType_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'SysCommentType_EditEx.btn_Click');

        break;
    }
  }
  /* 为插入记录做准备工作
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
*/
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    this.btnSubmitSysCommentType = '确认添加';
    this.btnCancelSysCommentType = '取消添加';
    this.Clear();
    //去掉提交按钮不可用状态
    $('#btnOKUpd').attr('disabled', 'false');
    //wucSysCommentTypeB1.commentTypeId = clsSysCommentTypeBL.GetMaxStrId_S();
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
 */
  public async btnOKUpd_Click() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmitSysCommentType;
    try {
      //判断session是否失效
      if (userStore.getUserId != '') {
        switch (strCommandText) {
          case '添加':
            await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,
            if (this.opType == 'AddWithMaxId') {
              await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
                const returnBool2: string = jsonData;
                if (IsNullOrEmpty(returnBool2) == false) {
                  this.HideDialog_SysCommentType();
                  this.iShowList.BindGv(clsSysCommentTypeEN._CurrTabName, '');
                }
              });
            } else {
              await this.AddNewRecordSave().then((jsonData) => {
                const returnBool: boolean = jsonData;
                if (returnBool == true) {
                  this.HideDialog_SysCommentType();
                  this.iShowList.BindGv(clsSysCommentTypeEN._CurrTabName, '');
                }
              });
            }
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            await this.UpdateRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              let strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
              strInfo += '(In SysCommentTypeCRUD.btnOKUpd_Click)';

              //显示信息框
              console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                this.HideDialog_SysCommentType();
                this.iShowList.BindGv(clsSysCommentTypeEN._CurrTabName, '');
              }
            });
            break;
          default:
            AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

            break;
        }
      } else {
        alert('登录超时，请重新登录');
        reLogin();
      }
      HideDivInDivObj(divName, 'divLoading');
      //防止重复提交
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
}
