/**
 * 类名:DiscussionType_EditEx(界面:DiscussionTypeCRUD)
 * 表名:DiscussionType(01120589)
 * 版本:2023.08.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/26 11:12:36
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培参数(RT_Params)
 * 框架-层名:Vue_编辑区后台Ex_TS(TS)(Vue_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { userStore } from '@/store/modulesShare/user';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsDiscussionTypeEN } from '@/ts/L0Entity/RT_Params/clsDiscussionTypeEN';
import { AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { DiscussionType_Edit } from '@/viewsBase/RT_Params/DiscussionType_Edit';
/* DiscussionType_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class DiscussionType_EditEx extends DiscussionType_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: DiscussionType_EditEx = <DiscussionType_EditEx>(
      DiscussionType_Edit.GetPageEditObj('DiscussionType_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'DiscussionType_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
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

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnOKUpd_Click() {
    const strCommandText: string = this.btnSubmitDiscussionType;
    try {
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,

          await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
            const returnBool2: string = jsonData;
            if (IsNullOrEmpty(returnBool2) == false) {
              this.HideDialog_DiscussionType();
              this.iShowList.BindGv(clsDiscussionTypeEN._CurrTabName, '');
            }
          });
          // if (this.opType == "AddWithMaxId") {}
          //else {
          //    const responseText2 = await this.AddNewRecordSave().then((jsonData) => {
          //        const returnBool: boolean = jsonData;
          //        if (returnBool == true) {
          //            HideDialog();
          //            this.BindGv_DiscussionType();
          //        }
          //    });
          //}
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          await this.UpdateRecordSave().then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == true) {
              this.HideDialog_DiscussionType();
              this.iShowList.BindGv(clsDiscussionTypeEN._CurrTabName, '');
            }
          });
          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

          break;
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
       (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
       <param name = "pobjDiscussionTypeEN">数据传输的目的类对象</param>
     */
  public async PutDataToDiscussionTypeClass(pobjDiscussionTypeEN: clsDiscussionTypeEN) {
    pobjDiscussionTypeEN.SetDiscussionTypeName(this.discussionTypeName); // 讨论类型名称
    pobjDiscussionTypeEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjDiscussionTypeEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjDiscussionTypeEN.SetMemo(this.memo); // 备注
  }
}
