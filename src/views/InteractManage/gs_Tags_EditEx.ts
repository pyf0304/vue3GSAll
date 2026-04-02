import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import {
  get_page_cache,
  get_page_top,
  get_pdfContent,
  get_pdfPageNum,
  get_pdf_zoom,
  set_page_cache,
  set_page_top,
  set_pdfContent,
  set_pdfPageNum,
  set_pdf_zoom,
} from '@/ts/FunClass/clsPubFun4Pdf';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsgs_TagsEN } from '@/ts/L0Entity/InteractManage/clsgs_TagsEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import {
  gs_Tags_AddNewRecordWithReturnKeyAsync,
  gs_Tags_GetMaxStrIdAsync,
  gs_Tags_GetObjByTagsIdAsync,
  gs_Tags_UpdateRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsgs_TagsWApi';
import {
  LiteratureType_BindDdl_LiteratureTypeIdInDivCache,
  LiteratureType_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { PaperEduClsRelaEx_BindDdl_PaperIdByIdCurrEduClsInDivCache } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperEduClsRelaExWApi';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  SetInputValueInDivObj,
  SetSpanHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { gs_Tags_Edit } from '@/viewsBase/InteractManage/gs_Tags_Edit';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsgs_TagsTypeEN } from '@/ts/L0Entity/GradEduTools/clsgs_TagsTypeEN';
import { gs_TagsType_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsgs_TagsTypeWApi';
import { stuPdfData } from '@/ts/PubFun/stuPdfData';
import { userStore } from '@/store/modulesShare/user';

// declare function btnCancel3_Click(): void;
/* gs_Tags_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_Tags_EditEx extends gs_Tags_Edit {
  public static vuebtn_Click: (strCommandName: string, data: any) => any;
  public pdfData: stuPdfData = stuPdfData.InitObj;
  public static answerTypeId = '';
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: gs_Tags_EditEx = <gs_Tags_EditEx>gs_Tags_Edit.GetPageEditObj('gs_Tags_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_Tags_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'UpdateTags':
        $('#txtTagsContent').val('');
        //ShowDialog('Update');
        $('#div_Tags').hide();
        $('#div_qa_Welcome').hide();
        $('#divEditTagsRegion').show();

        $('#myModalLabel').html('修改标注');
        $('#btnSubmitgs_Tags').html('修改标注');

        objPage.btnUpdateTags_Click(strKeyId);
        break;
      case 'TagsSubmit':
        objPage.btnOKUpd3_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_Tags_EditEx.btn_Click');

        break;
    }
  }
  public async SetDdl_PaperIdInDiv(IdCurrEduCls: string) {
    const divName = this.getDivName();
    if (divName == null) return;
    await PaperEduClsRelaEx_BindDdl_PaperIdByIdCurrEduClsInDivCache(
      divName,
      'ddlPaperId',
      IdCurrEduCls,
    ); //
  }
  //public async SetDdl_PaperIdInDiv(strIdCurrEducls: string) {
  //    //定义条件字段
  //    await PaperEx_BindDdl_PaperIdInDivByIdCurrEduCls_Cache(divName, "ddlPaperId", strIdCurrEducls);//编辑区域
  //}
  //-------------------------------------
  /* 函数功能:为编辑区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
   */
  public async BindDdl4EditRegion() {
    // 在此处放置用户代码以初始化页面
    const divName = this.getDivName();
    if (divName == null) return;
    await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId'); //用户查询区域
    await LiteratureType_BindDdl_LiteratureTypeIdInDivCache(divName, 'ddlLiteratureTypeId');
    await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');
  }

  public async BindDdl_LiteratureTypeId_Cache(
    ddlLiteratureTypeId: string,
    objLiteratureType_Cond: clsLiteratureTypeEN,
  ) {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      let arrObjLst_Sel: Array<clsLiteratureTypeEN> = await LiteratureType_GetSubObjLstCache(
        objLiteratureType_Cond,
      );
      arrObjLst_Sel = arrObjLst_Sel.sort((x) =>
        x.GetFldValue(clsLiteratureTypeEN.con_LiteratureTypeId),
      );
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrObjLst_Sel,
        clsLiteratureTypeEN.con_LiteratureTypeId,
        clsLiteratureTypeEN.con_LiteratureTypeName,
        '文献类型',
      );
      console.log('完成BindDdl_LiteratureTypeId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //==========================================

  /* 修改答案
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async btnUpdateTags_Click(strTagsId: string) {
    this.keyId = strTagsId;
    try {
      const responseText = await gs_Tags_GetObjByTagsIdAsync(strTagsId);
      const objgs_TagsEN: clsgs_TagsEN = <clsgs_TagsEN>responseText;
      this.tagsContent = objgs_TagsEN.tagsContent;
      this.btnSubmitgs_Tags = '修改标注';
      this.btnCancelgs_Tags = '取消修改';
      $('#ddlTagsTypeId').val(objgs_TagsEN.tagsTypeId);
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 函数功能:把界面上的属性数据传到类对象中
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   <param name = "pobjgs_TagsEN">数据传输的目的类对象</param>
 */
  public async PutDataTogs_TagsClass(pobjgs_TagsEN: clsgs_TagsEN) {
    const divName = this.getDivName();
    if (divName == null) return;
    pobjgs_TagsEN.SetPaperId(clsPrivateSessionStorage.paperId);
    pobjgs_TagsEN.SetTagsContent(this.tagsContent); // 提问内容
    pobjgs_TagsEN.SetPdfContent(this.pdfData.selectText); // Pdf内容
    pobjgs_TagsEN.SetPdfPageNum(this.pdfData.pdfPageNum); // Pdf页码
    pobjgs_TagsEN.SetselectSpanRange(this.pdfData.selectSpanRange); // Pdf页码

    pobjgs_TagsEN.SetTagsTypeId(GetSelectValueInDivObj(divName, 'ddlTagsTypeId'));

    pobjgs_TagsEN.SetPdfPageNumIn(this.page_cache);
    pobjgs_TagsEN.SetPdfPageTop(this.page_top);
    pobjgs_TagsEN.SetPdfZoom(this.pdf_zoom);

    let pdfDiv_top = this.pdfData.pdfDivTop;
    pdfDiv_top = pdfDiv_top.substring(0, pdfDiv_top.length - 2);
    let pdfDiv_left = this.pdfData.pdfDivLeft;
    pdfDiv_left = pdfDiv_left.substring(0, pdfDiv_left.length - 2);

    pobjgs_TagsEN.SetPdfDivTop(pdfDiv_top);
    pobjgs_TagsEN.SetPdfDivLet(pdfDiv_left);

    //pobjgs_TagsEN.SetOrderNum(this.orderNum;// 序号
    pobjgs_TagsEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班Id// 教学班Id
    pobjgs_TagsEN.SetShareId('02'); // 分享
    pobjgs_TagsEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjgs_TagsEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
  }

  /*
   * pdfDiv_top
   */
  public set pdfDiv_top(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'pdfDiv_top', value);
    //$("#iframe_qaPdf").contents().find("#pdfDiv_top").val(value);
    //$("#iframe_qaPdf", parent.document).contents().find("#pdfDiv_top").val(value);
  }
  /*
   * pdfDiv_top
   */
  public get pdfDiv_top(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'pdfDiv_top');
    //return $("#iframe_qaPdf").contents().find("#pdfDiv_top").val();
    //return $("#iframe_qaPdf", parent.document).contents().find("#pdfDiv_top").val();
  }

  /*
   * pdfDiv_left
   */
  public set pdfDiv_left(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'pdfDiv_left', value);
    //$("#iframe_qaPdf").contents().find("#pdfDiv_left").val(value);
    //$("#iframe_qaPdf", parent.document).contents().find("#pdfDiv_left").val(value);
  }
  /*
   * pdfDiv_left
   */
  public get pdfDiv_left(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'pdfDiv_left');
    //return $("#iframe_qaPdf").contents().find("#pdfDiv_left").val();
    //return $("#iframe_qaPdf", parent.document).contents().find("#pdfDiv_left").val();
  }

  /*
   * Pdf内容
   */
  public set pdfContent(value: string) {
    //$("#hidPdfContent").val(value);
    //$("#iframe_qaPdf").contents().find("#hidPdfContent").val(value);
    //$(window.parent.$("#iframe_qaPdf")).contents().find("#hidPdfContent").val(value);
    set_pdfContent('iframe_qaPdf', 'hidPdfContent', value);
  }
  /*
   * Pdf内容
   */
  public get pdfContent(): string {
    //return $("#hidPdfContent").val();
    //return $("#iframe_qaPdf").contents().find("#hidPdfContent").val();
    return get_pdfContent('iframe_qaPdf', 'hidPdfContent');
  }

  /*
   * Pdf页码
   */
  public set pdfPageNum(value: number) {
    //$("#hidPdfPageNum").val(value);
    //$("#iframe_qaPdf").contents().find("#hidPdfPageNum").val(value);
    set_pdfPageNum('iframe_qaPdf', 'hidPdfPageNum', value);
  }
  /*
   * Pdf页码
   */
  public get pdfPageNum(): number {
    //return $("#hidPdfPageNum").val();
    //return $("#iframe_qaPdf").contents().find("#hidPdfPageNum").val();
    return get_pdfPageNum('iframe_qaPdf');
  }

  /*
   * PdfTop
   */
  public set page_top(value: number) {
    //$("#hidPdfPageNum").val(value);
    //$("#iframe_qaPdf").contents().find("#page_top").val(value);
    set_page_top('iframe_qaPdf', 'page_top', value);
  }
  /*
   * PdfTop
   */
  public get page_top(): number {
    //return $("#hidPdfPageNum").val();
    //return $("#iframe_qaPdf").contents().find("#page_top").val();
    return get_page_top('iframe_qaPdf', 'page_top');
  }

  /*
   * page_cache
   */
  public set page_cache(value: string) {
    //$("#hidPdfPageNum").val(value);
    //$("#iframe_qaPdf").contents().find("#page_cache").val(value);
    set_page_cache('iframe_qaPdf', 'page_cache', value);
  }
  /*
   * page_cache
   */
  public get page_cache(): string {
    //return $("#hidPdfPageNum").val();
    //return $("#iframe_qaPdf").contents().find("#page_cache").val();
    return get_page_cache('iframe_qaPdf', 'page_cache');
  }

  /*
   * pdf_zoom
   */
  public set pdf_zoom(value: string) {
    //$("#hidPdfPageNum").val(value);
    //$("#iframe_qaPdf").contents().find("#pdf_zoom").val(value);
    set_pdf_zoom('iframe_qaPdf', 'pdf_zoom', value);
  }
  /*
   * pdf_zoom
   */
  public get pdf_zoom(): string {
    //return $("#hidPdfPageNum").val();
    //return $("#iframe_qaPdf").contents().find("#pdf_zoom").val();
    return get_pdf_zoom('iframe_qaPdf', 'pdf_zoom');
  }
  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateRecordSave3() {
    const objLayOut = this.getDivName();
    if (objLayOut == null) return false;
    const strThisFuncName = this.UpdateRecordSave3.name;
    //
    const objgs_TagsEN: clsgs_TagsEN = new clsgs_TagsEN();
    objgs_TagsEN.SetTagsId(this.keyId);

    //this.PutDataTogs_TagsClass(objgs_TagsEN);
    objgs_TagsEN.SetTagsContent(this.tagsContent); // 提问内容
    objgs_TagsEN.SetTagsTypeId(GetSelectValueInDivObj(objLayOut, 'ddlTagsTypeId'));
    objgs_TagsEN.SetUpdUser(userStore.getUserId); // 修改人
    objgs_TagsEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期

    objgs_TagsEN.sfUpdFldSetStr = objgs_TagsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objgs_TagsEN.tagsId == '' || objgs_TagsEN.tagsId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await gs_Tags_UpdateRecordAsync(objgs_TagsEN);
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
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
  public async btnOKUpd3_Click() {
    const strCommandText: string = this.btnSubmitgs_Tags;
    try {
      let returnBool3 = true;
      let strInfo = '';
      let returnKey;
      switch (strCommandText) {
        case '添加':
          //const responseText1 = await this.AddNewRecord();
          break;
        case '添加标注':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,

          returnKey = await this.AddNewRecordWithMaxIdSave3();

          if (returnKey.length > 0) {
            this.iShowList.BindGvCache(clsgs_TagsEN._CurrTabName, '');
          }
          break;
        case '修改标注':
          //这是一个单表的修改的代码,由于逻辑层太简单,

          returnBool3 = await this.UpdateRecordSave3();
          strInfo = returnBool3 ? '修改成功！' : '修改不成功！';
          //strInfo += "(In qa_AnswerCRUD.btnOKUpd_Click)";

          //显示信息框
          console.log(strInfo);

          if (returnBool3 == true) {
            message.success(strInfo);

            this.iShowList.BindGvCache(clsgs_TagsEN._CurrTabName, '');
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

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
     */
  public async AddNewRecordWithMaxIdSave3(): Promise<string> {
    //
    const objgs_TagsEN: clsgs_TagsEN = new clsgs_TagsEN();

    this.PutDataTogs_TagsClass(objgs_TagsEN);

    try {
      //const responseText2 = await gs_Tags_AddNewRecordWithMaxIdAsync(objgs_TagsEN);
      const strTagsId = await gs_Tags_AddNewRecordWithReturnKeyAsync(objgs_TagsEN);

      //const returnBool: boolean = !!responseText2;
      if (strTagsId != '') {
        this.keyId = strTagsId;
        const strInfo = `添加标注成功!`;

        //显示信息框
        message.success(strInfo);
        //alert(strInfo);
        return strTagsId;
      } else {
        const strInfo = `添加标注不成功!`;

        //显示信息框
        alert(strInfo);
        return '';
      }
      //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return '';
    }
  }

  /*
   * 设置关键字的值
   */
  public set questionsId(value: string) {
    const objLayOut = this.getDivName();
    if (objLayOut == null) return;
    SetInputValueInDivObj(objLayOut, 'hidQuestionsId', value);
  }
  /*
   * 设置关键字的值
   */
  public get questionsId(): string {
    const objLayOut = this.getDivName();

    return GetInputValueInDivObj(objLayOut, 'hidQuestionsId');
  }

  /*
   * 设置确定按钮的标题
   */
  public set btnSubmitgs_Tags(value: string) {
    // $('#btnSubmitgs_Tags').html(value);
    const data = {
      buttonId: 'btnSubmitgs_Tags',
      newValue: value,
    };
    gs_Tags_EditEx.vuebtn_Click('SetButtonText', data);
  }
  /*
   * 获取按钮的标题
   */
  public get btnSubmitgs_Tags(): string {
    const data = {
      buttonId: 'btnSubmitgs_Tags',
    };
    return gs_Tags_EditEx.vuebtn_Click('GetButtonText', data);
  }
  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   **/
  public set btnCancelgs_Tags(value: string) {
    // gs_Tags_Edit.EditObj.SetButtonText('btnCancelgs_Tags', value);

    const data = {
      buttonId: 'btnCancelgs_Tags',
      newValue: value,
    };
    gs_Tags_EditEx.vuebtn_Click('SetButtonText', data);
  }
  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      this.btnSubmitgs_Tags = '添加标注';
      this.btnCancelgs_Tags = '取消添加';
      SetSpanHtmlInDivObj(this.divEdit, 'spnPdfContent', this.pdfData.selectText);
      // const bolIsSuccess = await this.ShowDialog_gs_Tags(this.opType);
      // if (bolIsSuccess == false) return;
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
  /** 函数功能:为编辑区绑定下拉框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
   **/
  public async BindDdl4EditRegionInDiv() {
    // const CourseIdStatic = clsPubLocalStorage.courseId; //静态变量;//静态变量
    // const IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls; //静态变量;//静态变量
    // await this.SetDdl_IdCurrEduClsInDiv(CourseIdStatic); //编辑区域
    // await this.SetDdl_PaperIdInDiv(IdCurrEduClsStatic); //编辑区域
    // await this.BindDdl_gs_TagsType_Cache('ddlTagsTypeId');
    await this.SetDdl_TagsTypeIdInDiv();
  }
  //绑定标注下拉框
  public async BindDdl_gs_TagsType_Cache(ddlTagsTypeId: string) {
    const strWhereCond = ' 1=1 ';
    const objDdl = document.getElementById(ddlTagsTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlTagsTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      const arrObjLst_Sel: Array<clsgs_TagsTypeEN> = await gs_TagsType_GetObjLstAsync(strWhereCond);

      BindDdl_ObjLst(
        ddlTagsTypeId,
        arrObjLst_Sel,
        clsgs_TagsTypeEN.con_TagsTypeId,
        clsgs_TagsTypeEN.con_TagsTypeName,
        '标注类型',
      );
    } catch (e: any) {
      const strMsg = `根据条件获取标记类型的下拉框不成功,${e}.`;
      alert(strMsg);
    }
  }
  /**
   * 清除用户自定义控件中,所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    // this.tagsId = '';
    this.tagsContent = '';
    this.pdfContent = '';
    this.pdfPageNum = 0;
    // this.voteCount = 0;
    // this.orderNum = 0;
    // this.updUser = '';
    // this.updDate = '';
    // this.pdfLineNum = 0;
    // this.pdfX = '';
    // this.pdfY = '';
    // this.memo = '';
    // ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdCurrEduCls');
    // ClearSelectValueByIdInDivObj(this.divEdit, 'ddlPaperId');
    // this.shareId = '';
    // this.pdfPageNumIn = '';
    // this.pdfPageTop = 0;
    // this.pdfDivLet = '';
    // this.pdfDivTop = '';
    // this.pdfZoom = '';
    this.tagsTypeId = '';
  }
  public async AddNewRecordWithMaxId() {
    const strThisFuncName = this.AddNewRecordWithMaxId.name;
    this.Clear();

    //this.tagsId = await gs_Tags_GetMaxStrIdAsync();
    try {
      const returnString = await gs_Tags_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表gs_Tags的最大关键字为空,不成功,请检查!');
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
}
