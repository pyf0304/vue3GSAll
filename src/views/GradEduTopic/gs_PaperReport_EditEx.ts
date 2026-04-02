import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { gs_PaperReport_Edit } from '@/viewsBase/GradEduTopic/gs_PaperReport_Edit';
import { clsgs_PaperReportEN } from '@/ts/L0Entity/GradEduTopic/clsgs_PaperReportEN';
import { clsvRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN';
import {
  gs_PaperReport_AddNewRecordWithMaxIdAsync,
  gs_PaperReport_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_PaperReportWApi';
import { vRTPaperRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTPaperRelaWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { BindDdl_ObjLst_V } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  ClearSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  HideDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { userStore } from '@/store/modulesShare/user';

// declare let window: any;
/* gs_PaperReport_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PaperReport_EditEx extends gs_PaperReport_Edit {
  public static GetPropValue: (strPropName: string) => string;
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: gs_PaperReport_EditEx = <gs_PaperReport_EditEx>(
      gs_PaperReport_Edit.GetPageEditObj('gs_PaperReport_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_PaperReport_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;

      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_PaperReport_EditEx.btn_Click');

        break;
    }
  }
  public Clear() {
    this.reportId = '';
    this.updDate = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlPaperId');
    this.reportContent = '';
    this.reportUser = '';
    this.reportDate = '';
    // this.updUser = '';
    this.pDFUrl = '';
    this.pPTUrl = '';
    this.memo = '';
  }
  /* 为插入记录做准备工作
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
  */
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    this.btnSubmitgs_PaperReport = '确认添加';
    this.btnCancelgs_PaperReport = '取消添加';
    this.Clear();
    this.reportDate = clsPubFun4Web.getNowDate_ymd();
    //wucgs_PaperReportB1.reportId = clsgs_PaperReportBL.GetMaxStrId_S();
  }

  /// <summary>
  /// 设置绑定下拉框，针对字段:[paperId]
  /// (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS)
  /// </summary>
  public async SetDdl_PaperId(strIdCurrEducls: string) {
    console.log(strIdCurrEducls);
    //const objPaper_Cond: clsPaperEN = new clsPaperEN();//编辑区域
    ////定义条件字段
    ////strIdCurrEducls = "";//定义条件字段
    //const ddlPaperId = await Paper_BindDdl_PaperId_Cache("ddlPaperId", objPaper_Cond, strIdCurrEducls);//编辑区域
    await this.BindDdl_PaperId('ddlPaperId');
  }

  //专业下拉框绑定
  public async BindDdl_PaperId(ddlPaperId: string) {
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strWhereCond = ` topicId= ${strTopicId}`;

    const objDdl = document.getElementById(ddlPaperId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlPaperId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrvRTPaperRelaObjLst: Array<clsvRTPaperRelaEN> = await vRTPaperRela_GetObjLstAsync(
        strWhereCond,
      );
      BindDdl_ObjLst_V(
        ddlPaperId,
        arrvRTPaperRelaObjLst,
        clsvRTPaperRelaEN.con_PaperId,
        clsvRTPaperRelaEN.con_PaperTitle,
        '主题相关论文',
      );
      console.log('完成BindDdl_UserId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async PutDataTogs_PaperReportClass(pobjgs_PaperReportEN: clsgs_PaperReportEN) {
    const divName = this.getDivName();
    //pobjgs_PaperReportEN.reportId = this.reportId;// 会议Id
    //getTextboxio();
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
      clsPrivateSessionStorage.topicIdInTree,
    );
    pobjgs_PaperReportEN.SetIdCurrEduCls(strIdCurrEduCls);
    pobjgs_PaperReportEN.SetTopicId(clsPrivateSessionStorage.topicIdInTree); // 主题编号
    pobjgs_PaperReportEN.SetIsSubmit(false); // 是否提交
    pobjgs_PaperReportEN.SetReportContent(this.reportContent); // 会议内容
    pobjgs_PaperReportEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjgs_PaperReportEN.SetReportUser(GetInputValueInDivObj(divName, 'txtReportUser')); // 参会者
    pobjgs_PaperReportEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjgs_PaperReportEN.SetPaperId(this.paperId); // 论文Id

    pobjgs_PaperReportEN.SetPPTUrl(GetInputValueInDivObj(divName, 'hidppt')); // PPT
    pobjgs_PaperReportEN.SetPDFUrl(GetInputValueInDivObj(divName, 'hidpdf')); // PDF

    const strYmd = clsPubFun4Web.getNowDate_ymd();
    if (this.reportDate == '') {
      pobjgs_PaperReportEN.SetReportDate(strYmd); // 会议日期
    } else {
      pobjgs_PaperReportEN.SetReportDate(this.reportDate); // 会议日期
    }
    const objDateTime = new clsDateTime(this.reportDate);
    pobjgs_PaperReportEN.SetYear(objDateTime.year.toString());
    pobjgs_PaperReportEN.SetMonth(objDateTime.month.toString());
    pobjgs_PaperReportEN.SetMemo(this.memo); // 备注
  }

  /* 函数功能:把类对象的属性内容显示到界面上
    注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
     如果在设置数据库时,就应该一级字段在前,二级字段在后
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
     <param name = "pobjgs_PaperReportEN">表实体类对象</param>
   */
  public async GetDataFromgs_PaperReportClass(pobjgs_PaperReportEN: clsgs_PaperReportEN) {
    this.reportId = pobjgs_PaperReportEN.reportId; // 会议Id
    //this.topicId = pobjgs_PaperReportEN.topicId;// 主题编号
    //this.isSubmit = pobjgs_PaperReportEN.isSubmit;// 是否提交
    this.reportContent = pobjgs_PaperReportEN.reportContent; // 会议内容
    $('#txtReportUser').val(pobjgs_PaperReportEN.reportUser); // 参会者
    this.paperId = pobjgs_PaperReportEN.paperId;
    $('#hidppt').val(pobjgs_PaperReportEN.pPTUrl); // PPT
    $('#hidpdf').val(pobjgs_PaperReportEN.pDFUrl); // PDF
    this.reportDate = pobjgs_PaperReportEN.reportDate; // 会议日期
    this.memo = pobjgs_PaperReportEN.memo; // 备注
    //setTextboxio();
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnSubmit_Click() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmitgs_PaperReport;

    try {
      let returnBool;
      let strReportId;
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          //if (this.opType == "AddWithMaxId") {
          //    //const responseText3 = await this.AddNewRecordWithMaxIdSave().then((jsonData)=>{
          //    //const returnBool2: boolean = jsonData;
          //    //if (returnBool2 == true)
          //    //{
          //    //HideDialog_gs_PaperReport();
          //    //this.iShowList.BindGvCache(clsgs_PaperReportEN._CurrTabName);
          //    //}
          //    //});
          //}
          //else {

          strReportId = await this.AddNewRecordWithMaxIdSave();
          if (strReportId != '') {
            this.HideDialog_gs_PaperReport();
            this.iShowList.BindGv(clsgs_PaperReportEN._CurrTabName, '');
            //alert("添加历史版本出问题！");
          }
          //}
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          if (returnBool == true) {
            $('#hidReportId').val(this.keyId);
            const strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
            //strInfo += "(In gs_PaperReport_Edit.btnSubmit_Click)";
            //显示信息框
            console.log(strInfo);
            //alert(strInfo);
            message.success(strInfo);
            // HideDivInDivObj(divName, 'divLoading');

            this.HideDialog_gs_PaperReport();
            this.iShowList.BindGv(clsgs_PaperReportEN._CurrTabName, '');
          }
          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnSubmit_Click');

          break;
      }
    } catch (e: any) {
      $('#btnSubmit_gs_PaperReport').attr('disabled', 'false');
      // HideDivInDivObj(divName, 'divLoading');
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
  */
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const divName = this.getDivName();
    if (divName == null) return '';

    const objgs_PaperReportEN: clsgs_PaperReportEN = new clsgs_PaperReportEN();
    await this.PutDataTogs_PaperReportClass(objgs_PaperReportEN);
    try {
      const responseKeyId = await gs_PaperReport_AddNewRecordWithMaxIdAsync(objgs_PaperReportEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //gs_PaperReport_ReFreshCache();
        const strInfo = `添加记录成功!`;
        //
        //显示信息框
        //alert(strInfo);
        message.success(strInfo);
        // HideDivInDivObj(divName, 'divLoading');
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      throw strMsg;
    }
    return ''; //一定要有一个返回值，否则会出错！
  }

  /* 修改记录
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   */
  public async UpdateRecordSave() {
    const strThisFuncName = this.UpdateRecordSave.name;

    //
    const objgs_PaperReportEN: clsgs_PaperReportEN = new clsgs_PaperReportEN();
    objgs_PaperReportEN.reportId = this.keyId;
    await this.PutDataTogs_PaperReportClass(objgs_PaperReportEN);
    objgs_PaperReportEN.sfUpdFldSetStr = objgs_PaperReportEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objgs_PaperReportEN.reportId == '' || objgs_PaperReportEN.reportId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await gs_PaperReport_UpdateRecordAsync(objgs_PaperReportEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        //gs_PaperReport_ReFreshCache();
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
}
