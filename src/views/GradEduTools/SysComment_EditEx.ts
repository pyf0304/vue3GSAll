import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsSysCommentEN';
import { SysCommentEx_AddNewRecordExAsync } from '@/ts/L3ForWApiExShare/GraduateEdu/clsSysCommentExWApi';
import { GetInputValueInDivObj, GetTextAreaValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { SysComment_Edit } from '@/viewsBase/GradEduTools/SysComment_Edit';
import { SysComment_GetMaxStrIdAsync } from '@/ts/L3ForWApi/GradEduTools/clsSysCommentWApi';
import { userStore } from '@/store/modulesShare/user';

/* SysComment_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class SysComment_EditEx extends SysComment_Edit {
  public static parentId = '';
  public static tableKey = '';

  public static commentTypeId = '';
  public static user = '';
  public static pubParentId = '';
  public static scoreType = '';
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: SysComment_EditEx = <SysComment_EditEx>(
      SysComment_Edit.GetPageEditObj('SysComment_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'SysComment_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'AddAppraise':
        objPage.btnAddNewRecordWithMaxId_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'SysComment_EditEx.btn_Click');

        break;
    }
  }
  public async btnSubmit_Click() {
    const strThisFuncName = this.btnSubmit_Click.name;
    const strCommandText: string = this.btnSubmitSysComment;
    try {
      let returnBool = false;
      // let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitSysComment = '确认添加';
          this.btnCancelSysComment = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          returnBool = await this.SubmitAppraise_Click();
          // if (this.opType == 'AddWithMaxId') {
          //   returnKeyId = await this.AddNewRecordWithMaxIdSave();
          //   if (IsNullOrEmpty(returnKeyId) == false) {
          //     if (SysComment_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
          //       this.HideDialog_SysComment();
          //     this.iShowList.BindGvCache(clsSysCommentEN._CurrTabName, returnKeyId);
          //   }
          // } else {

          if (returnBool == true) {
            //strIdCurrEduclsstrInfo: string = `添加成功!`;
            ////
            ////显示信息框
            //alert(strInfo);
            this.HideDialog_SysComment();
            $('#btnOKUpdAppraise').attr('disabled', 'false');
            this.iShowList.BindGvCache(clsSysCommentEN._CurrTabName, '');
            // this.iShowList.BindGvCache(clsSysCommentEN._CurrTabName, this.keyId);
            message.success('评论成功!');
          } else {
            const strInfo = `添加系统评论失败!`;
            console.error(strInfo);
            //
            //显示信息框
            alert(strInfo);
            this.HideDialog_SysComment();
            $('#btnOKUpdAppraise').attr('disabled', 'false');
          }

          $('#J_PostBtn').attr('disabled', 'false');
          $('#btnOKUpdAppraise').attr('disabled', 'false');

          // }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In SysComment_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (SysComment_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              SysComment_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGvCache(clsSysCommentEN._CurrTabName, this.keyId);
          }
          break;
        default:
          strMsg = Format(
            'strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())',
            strCommandText,
          );
          console.error(strMsg);
          alert(strMsg);
          break;
      }
    } catch (e: any) {
      const strMsg = Format(
        '(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
        strCommandText,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 添加评论内容
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 */
  public async SubmitAppraise_Click(): Promise<boolean> {
    const divName = this.getDivName();
    if (divName == null) return false;
    const strAppraiseContent = GetTextAreaValueInDivObj(divName, 'txtAppraiseContent');

    const strUserId = userStore.getUserId;
    const strRoleId = userStore.getRoleId;
    if (SysComment_EditEx.parentId == '') SysComment_EditEx.parentId = 'root';
    const objSysCommentEN: clsSysCommentEN = new clsSysCommentEN();
    //this.PutDataToSysCommentClass(objSysCommentEN);
    objSysCommentEN.SetTableKey(SysComment_EditEx.tableKey);
    objSysCommentEN.SetCommentTypeId(SysComment_EditEx.commentTypeId);
    objSysCommentEN.SetParentId(SysComment_EditEx.parentId);
    objSysCommentEN.SetPubParentId(SysComment_EditEx.pubParentId);
    objSysCommentEN.SetUserId(SysComment_EditEx.user); //被评论用户
    objSysCommentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);

    if (strRoleId == '00620003') {
      objSysCommentEN.SetScoreType('1');
    } else {
      objSysCommentEN.SetScoreType('2');
    }

    //判断分值类型，分别赋值
    let strvalue = '';
    let strScore = '';
    if (SysComment_EditEx.scoreType == '3') {
      strvalue = GetInputValueInDivObj(divName, 'txtScoreNum');
      strScore = strvalue;
    } else {
      strvalue = GetInputValueInDivObj(divName, 'hidScoreNum');
      strScore = strvalue;
    }

    //判断是否有打分
    if (strvalue != '' && strvalue != undefined) {
      //获取值转化分数

      //判断内容是否输入
      if (strAppraiseContent != '') {
        objSysCommentEN.SetComment(strAppraiseContent); // 评议内容
        objSysCommentEN.SetScore(parseFloat(strScore)); // 打分
        objSysCommentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
        objSysCommentEN.SetUpdUser(strUserId); // 修改用户Id
        try {
          const returnBool = await SysCommentEx_AddNewRecordExAsync(objSysCommentEN);

          return returnBool; //一定要有一个返回值，否则会出错！
        } catch (e: any) {
          $('#J_PostBtn').attr('disabled', 'false');
          $('#btnOKUpdAppraise').attr('disabled', 'false');
          console.error('catch(e)=');
          console.error(e);
          const strMsg = `添加评论不成功,${e}.`;
          alert(strMsg);
        }
      } else {
        $('#J_PostBtn').attr('disabled', 'false');
        $('#btnOKUpdAppraise').attr('disabled', 'false');
        message.info('请输入评语!');

        return false;
      }
    } else {
      $('#J_PostBtn').attr('disabled', 'false');
      $('#btnOKUpdAppraise').attr('disabled', 'false');

      message.info('请输入评分!');

      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  /**
   * 清除用户自定义控件中,所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    // this.commentId = '';
    // this.comment = '';
    // this.score = 0;
    // this.commentTypeId = '';
    // this.scoreType = '';
    // this.parentId = '';
    // this.tableKey = '';
    // this.updUser = '';
    // this.updDate = '';
    // this.memo = '';
  }
  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    const strThisFuncName = this.AddNewRecordWithMaxId.name;
    this.Clear();

    //this.commentId = await SysComment_GetMaxStrIdAsync();
    try {
      const returnString = await SysComment_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表SysComment的最大关键字为空,不成功,请检查!');
        //显示信息框
        alert(strInfo);
      } else {
        this.keyId = returnString;
      }
    } catch (e: any) {
      const strMsg = Format(
        '获取表关键字的最大值不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
}
