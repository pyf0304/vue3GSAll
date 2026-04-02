import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsqa_QuestionsEN';
import {
  qa_Questions_AddNewRecordWithReturnKeyAsync,
  qa_Questions_GetMaxStrIdAsync,
  qa_Questions_GetObjByQuestionsIdAsync,
  qa_Questions_UpdateRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_QuestionsWApi';
import {
  GetInputValueInDivObj,
  HideButtonInDivObj,
  HideSelectInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { Format } from '@/ts/PubFun/clsString';
import { qa_Questions_Edit } from '@/viewsBase/InteractManage/qa_Questions_Edit';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { qa_QuestionsEx_BindDdl_QuestionsIdInDiv } from '@/ts/L3ForWApiEx/InteractManage/clsqa_QuestionsExWApi';
import { get_pdfPageNum } from '@/ts/FunClass/clsPubFun4Pdf';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { stuPdfData } from '@/ts/PubFun/stuPdfData';
import { userStore } from '@/store/modulesShare/user';
/* qa_Questions_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class qa_Questions_EditEx extends qa_Questions_Edit {
  public questionsTypeId = '';
  public pdfData: stuPdfData = stuPdfData.InitObj;
  public myPdfPageNum = 0;
  public static parentId = '';
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: qa_Questions_EditEx = <qa_Questions_EditEx>(
      qa_Questions_Edit.GetPageEditObj('qa_Questions_EditEx')
    );
    if (objPage == null) {
      const strMsg = `从预存编辑类获取对象为空，请在调用编辑类(父类)的定义一下！`;
      console.error(strMsg);
      message.warning(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'UpdateQuestions': //添加记录使用最大关键字
        objPage.btnUpdateRecord_Click(strKeyId);
        break;
      case 'QuestionsSubmit':
        objPage.btnOKUpd1_Click();
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'qa_Questions_EditEx.btn_Click');

        break;
    }
  }

  /** 函数功能:为编辑区绑定下拉框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
   **/
  public async BindDdl4EditRegionInDiv() {
    const objLayOut = this.getDivName();
    if (objLayOut == null) return;
    if (this.questionsTypeId == '') {
      HideSelectInDivObj(objLayOut, 'ddlQuestionsContent');
      return;
    }
    await qa_QuestionsEx_BindDdl_QuestionsIdInDiv(
      objLayOut,
      'ddlQuestionsContent',
      this.questionsTypeId,
    );
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_qa_Questions(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.AddNewRecordWithMaxId();
    } catch (e: any) {
      const strMsg = Format(
        '添加新记录初始化不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public Clear() {
    this.questionsContent = '';
    // this.pdfContent = '';
    // this.pdfPageNum = 0;
    // this.orderNum = 0;
    // this.memo = '';
  }
  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_ClickInP() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_ClickInP.name;
    try {
      this.opType = 'AddWithMaxId';
      this.btnOKUpd1 = '确认添加';
      this.btnCancel1 = '取消添加';
      this.myPdfPageNum = get_pdfPageNum('iframe_qaPdf');
      // await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.AddNewRecordWithMaxId();
    } catch (e: any) {
      const strMsg = Format(
        '添加新记录初始化不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    const strThisFuncName = this.AddNewRecordWithMaxId.name;
    this.Clear();

    //this.questionsId = await qa_Questions_GetMaxStrIdAsync();
    try {
      const returnString = await qa_Questions_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表qa_Questions的最大关键字为空,不成功,请检查!');
        //显示信息框
        alert(strInfo);
      } else {
        this.keyId = returnString;
      }
    } catch (e: any) {
      const strMsg = Format(
        '获取表关键字的最大值不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 添加问题
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecordWithMaxId_Click)
   */
  public async btnAddNewQuestions_Click() {
    this.opType = 'AddWithMaxId';
    try {
      this.btnOKUpd1 = '确认添加';
      this.btnCancel1 = '取消添加';
      this.Clear1();
      //const responseText = this.AddNewRecordWithMaxId();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
   * 设置取消按钮的标题
   */
  public set btnCancel1(value: string) {
    $('#btnCancel1').html(value);
  }

  /*
   * 设置确定按钮的标题
   */
  public set btnOKUpd1(value: string) {
    $('#btnOKUpd1').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnOKUpd1(): string {
    return $('#btnOKUpd1').html();
  }
  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear1() {
    this.questionsContent = '';
    this.pdfContent = '';
    this.pdfPageNum = 0;
    this.orderNum = 0;
  }

  /* 修改问题
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
    <param name = "sender">参数列表</param>
  */
  public async btnUpdateQuestions_Click(strQuestionsId: string) {
    this.btnOKUpd1 = '确认修改';
    this.btnCancel1 = '取消修改';
    this.questionsId = strQuestionsId;
    try {
      const responseText = await qa_Questions_GetObjByQuestionsIdAsync(strQuestionsId);
      const objqa_QuestionsEN: clsqa_QuestionsEN = <clsqa_QuestionsEN>responseText;
      this.GetDataFromqa_QuestionsClass(objqa_QuestionsEN);
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
   * 设置关键字的值
   */
  public set questionsId(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidQuestionsId', value);
  }
  /*
   * 设置关键字的值
   */
  public get questionsId(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'hidQuestionsId');
  }
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnOKUpd1_Click() {
    const strCommandText: string = this.btnOKUpd1;
    try {
      let returnBool3 = true;
      let strInfo = '';
      let returnBool2 = true;

      switch (strCommandText) {
        case '添加':
          //const responseText1 = await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          returnBool2 = await this.AddNewRecordWithMaxIdSave1();
          if (returnBool2 == true) {
            //同步问题数量信息
            this.iShowList.BindGvCache(clsqa_QuestionsEN._CurrTabName, '');
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool3 = await this.UpdateRecordSave1();
          strInfo = returnBool3 ? '问题修改成功！' : '问题修改不成功！';

          //显示信息框
          console.log(strInfo);

          if (returnBool3 == true) {
            message.success(strInfo);
            this.iShowList.BindGvCache(clsqa_QuestionsEN._CurrTabName, '');
          } else {
            alert(strInfo);
          }
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
  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateRecordSave1() {
    const strThisFuncName = this.UpdateRecordSave1.name;

    //
    const objqa_QuestionsEN: clsqa_QuestionsEN = new clsqa_QuestionsEN();
    objqa_QuestionsEN.SetQuestionsId(this.questionsId);
    this.PutDataToqa_QuestionsClass(objqa_QuestionsEN);
    objqa_QuestionsEN.sfUpdFldSetStr = objqa_QuestionsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objqa_QuestionsEN.questionsId == '' || objqa_QuestionsEN.questionsId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await qa_Questions_UpdateRecordAsync(objqa_QuestionsEN);
      const returnBool = !!responseText;

      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   */
  public async AddNewRecordWithMaxIdSave1() {
    //
    const objqa_QuestionsEN: clsqa_QuestionsEN = new clsqa_QuestionsEN();
    objqa_QuestionsEN.SetCreateDate(clsPubFun4Web.getNowDate()); // 修改日期
    this.PutDataToqa_QuestionsClass(objqa_QuestionsEN);

    try {
      //const responseText2 = await qa_Questions_AddNewRecordWithMaxIdAsync(objqa_QuestionsEN);
      const strQuestionsId = await qa_Questions_AddNewRecordWithReturnKeyAsync(objqa_QuestionsEN);

      //const returnBool: boolean = !!responseText2;
      if (strQuestionsId != '') {
        this.keyId = strQuestionsId;
        const strInfo = `添加问题成功!`;

        //显示信息框
        message.success(strInfo);
        //alert(strInfo);
        return true;
      } else {
        const strInfo = `添加问题不成功!`;

        //显示信息框
        alert(strInfo);
        return false;
      }
      //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  //----------------------------

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  // public async btnOKUpd1_Click() {
  //   const strCommandText: string = this.btnOKUpd1;
  //   try {
  //     let returnBool2 = true;
  //     let returnBool3 = true;
  //     let strInfo = '';
  //     switch (strCommandText) {
  //       case '添加':
  //         //const responseText1 = await this.AddNewRecord();
  //         break;
  //       case '确认添加':
  //         //这是一个单表的插入的代码,由于逻辑层太简单,
  //         //就把逻辑层合并到控制层,

  //         returnBool2 = await this.AddNewRecordWithMaxIdSave1();
  //         if (returnBool2 == true) {
  //           //同步问题数量信息
  //           await this.SynQuestions();
  //           $('#divEditQuestionsRegion').hide();
  //           $('#div_qa_Welcome').show();
  //           //if (clsPubSessionStorage.GetUserLst() != "") {
  //           //const responseText2_3 = await this.AddNewqa_Push();//推送方法
  //           //}
  //           await this.btnReOrder_Click();
  //           await this.Showdiv_Questions();
  //           //const responseText2_5 = await this.Showdiv_PdfQuestions();
  //         }

  //         break;
  //       case '确认修改':
  //         //这是一个单表的修改的代码,由于逻辑层太简单,

  //         returnBool3 = await this.UpdateRecordSave1();
  //         strInfo = returnBool3 ? '问题修改成功！' : '问题修改不成功！';
  //         //strInfo += "(In qa_QuestionsCRUD.btnOKUpd_Click)";

  //         //显示信息框
  //         console.log(strInfo);

  //         if (returnBool3 == true) {
  //           message.success(strInfo);

  //           $('#divEditQuestionsRegion').hide();
  //           ShowDivInDivObj(objLayOut, 'div_qa_Answer');
  //           await this.Showdiv_Questions();
  //           //const responseText3_3 = await this.Showdiv_PdfQuestions();
  //         } else {
  //           alert(strInfo);
  //         }
  //         break;
  //       default:
  //         AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

  //         break;
  //     }
  //   } catch (e:any) {
  //     const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
  //     alert(strMsg);
  //   }
  // }

  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  // public async UpdateRecordSave1() {
  //   const strThisFuncName = this.UpdateRecordSave1.name;

  //   //
  //   const objqa_QuestionsEN: clsqa_QuestionsEN = new clsqa_QuestionsEN();
  //   objqa_QuestionsEN.SetQuestionsId(this.questionsId);
  //   this.PutDataToqa_QuestionsClass(objqa_QuestionsEN);
  //   objqa_QuestionsEN.sfUpdFldSetStr = objqa_QuestionsEN.updFldString; //设置哪些字段被修改(脏字段)
  //   if (objqa_QuestionsEN.questionsId == '' || objqa_QuestionsEN.questionsId == undefined) {
  //     throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
  //   }
  //   try {
  //     const responseText = await qa_Questions_UpdateRecordAsync(objqa_QuestionsEN);
  //     const returnBool = !!responseText;

  //     return returnBool;
  //   } catch (e:any) {
  //     console.error('catch(e)=');
  //     console.error(e);
  //     const strMsg = `修改记录不成功,${e}.`;
  //     alert(strMsg);
  //     return false;
  //   }
  // }
  //============================
  /** 函数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjqa_QuestionsEN">数据传输的目的类对象</param>
   **/
  public async PutDataToqa_QuestionsClass(pobjqa_QuestionsEN: clsqa_QuestionsEN) {
    pobjqa_QuestionsEN.SetQuestionsContent(this.questionsContent); // 提问内容
    pobjqa_QuestionsEN.SetPaperId(clsPrivateSessionStorage.paperId);
    pobjqa_QuestionsEN.SetQuestionsTypeId(this.questionsTypeId);

    pobjqa_QuestionsEN.SetPdfContent(this.pdfData.selectText); // Pdf内容
    pobjqa_QuestionsEN.SetPdfPageNum(this.pdfData.pdfPageNum); // Pdf页码
    // pobjqa_QuestionsEN.SetOrderNum(this.orderNum); // 序号
    pobjqa_QuestionsEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjqa_QuestionsEN.SetUserId(userStore.getUserId); // 修改人
    pobjqa_QuestionsEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0)); // 修改人

    // pobjqa_QuestionsEN.SetMemo(this.memo); // 备注
  }
  public async GetDataFromqa_QuestionsClass(pobjqa_QuestionsEN: clsqa_QuestionsEN) {
    this.questionsContent = pobjqa_QuestionsEN.questionsContent; // 提问内容
    this.pdfData.selectText = pobjqa_QuestionsEN.pdfContent; // Pdf内容
    this.pdfData.pdfPageNum = pobjqa_QuestionsEN.pdfPageNum; // Pdf页码
    // this.orderNum = pobjqa_QuestionsEN.orderNum; // 序号
    // this.memo = pobjqa_QuestionsEN.memo; // 备注
  }
  /**
   * Pdf页码 (Used In Clear())
   **/
  public set pdfPageNum(value: number) {
    SetInputValueInDivObj(
      this.divEdit,
      'txtPdfPageNum',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * Pdf页码 (Used In PutDataToClass())
   **/
  public get pdfPageNum(): number {
    const intValue = get_pdfPageNum('iframe_qaPdf');
    return intValue;
  }
  // /**
  //  * Pdf内容 (Used In Clear())
  //  **/
  // public set pdfContent(value: string) {
  //   SetInputValueInDivObj(this.divEdit, 'txtPdfContent', value);
  // }
  // /**
  //  * Pdf内容 (Used In PutDataToClass())
  //  **/
  // public get pdfContent(): string {
  //   const strValue = GetInputValueInDivObj(this.divEdit, 'txtPdfContent');
  //   if (strValue == undefined) return '';
  //   else return strValue.toString();
  // }
}
