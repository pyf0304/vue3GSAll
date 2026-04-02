import $ from 'jquery';
import { message } from '@/utils/myMessage';
// import {
//   PaperSubViewpointEx_AddNewRecordWithReturnKeyAsyncEx,
//   PaperSubViewpointEx_UpdateRecordAsyncEx,
// } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperSubViewpointExWApi';
import { File_IsHasImgFile, File_UploadImgFile, clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { PaperSubViewpoint_Edit } from '@/viewsBase/GradEduPaper/PaperSubViewpoint_Edit';
import { clsPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubViewpointEN';
import { enumSubViewpointType } from '@/ts/L0Entity/RT_Params/clsSubViewpointTypeEN';
import { PaperSubAttachment_DelPaperSubAttachmentsByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubAttachmentWApi';
import {
  PaperSubViewpoint_CheckProperty4Update,
  PaperSubViewpoint_GetObjBySubViewpointIdAsync,
  PaperSubViewpoint_GetUniCondStr,
  PaperSubViewpoint_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubViewpointWApi';
import { SubViewpointType_GetFirstObjAsync } from '@/ts/L3ForWApi/RT_Params/clsSubViewpointTypeWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetButtonHtmlInDivObj,
  GetInputValueInDivObj,
  SetButtonHtmlInDivObj,
  SetInputValueInDivObj,
  ShowDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { get_pdfPageNum } from '@/ts/FunClass/clsPubFun4Pdf';
import {
  PaperSubViewpointEx_AddNewRecordWithReturnKeyAsyncEx,
  PaperSubViewpointEx_UpdateRecordAsyncEx,
} from '@/ts/L3ForWApiEx/GraduateEdu/clsPaperSubViewpointExWApi';
import { stuPdfData } from '@/ts/PubFun/stuPdfData';
import { enumgs_Share } from '@/ts/L0Entity/RT_Params/clsgs_ShareEN';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { Ref } from 'vue';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { UploadResponseData } from '@/ts/FunClass/UploadResponseData';
import { PaperSubAttachmentEx_AddPaperSubViewpointAttachment } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperSubAttachmentExWApi';
import { userStore } from '@/store/modulesShare/user';

// bb.ts
let fullName: string;
let workUnit0: string;
let major0: string;
let achievement0: string;
let nationality0: string;
let conclusion0: string;
let levelId0: string;
let operationTypeId0: string;

export const updateProps = (
  fullName1: string,
  workUnit1: string,
  major1: string,
  achievement1: string,
  nationality1: string,
  conclusion1: string,
  levelId1: string,
  operationTypeId1: string,
) => {
  fullName = fullName1;
  workUnit0 = workUnit1;
  major0 = major1;
  achievement0 = achievement1;
  nationality0 = nationality1;
  conclusion0 = conclusion1;
  levelId0 = levelId1;
  operationTypeId0 = operationTypeId1;
  // 在这里使用 myProp1 和 myProp2 进行你的操作
};

/*
 * PaperSubViewpoint_EditEx 的摘要说明。其中Q代表查询,U代表修改
 */
export class PaperSubViewpoint_EditEx extends PaperSubViewpoint_Edit {
  public static uploadResponseData: UploadResponseData = new UploadResponseData();
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static EditKnowledgeTypeIdRef: Ref<any>;
  // public static divEditKnowledgeTypeId: HTMLDivElement;
  public static times4TestShowDialogV2 = 0;
  // public static IsHasFile: () => Promise<boolean>;
  public pdfData: stuPdfData = stuPdfData.InitObj;
  public mySubViewpointTypeId = '';
  public myExplainTypeId = '';
  public myAttitudesId = '';
  public paperId2 = '';
  public static mySelectedFile: any;
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    let objPage;
    switch (strCommandName) {
      case 'Submit': //提交
        objPage = <PaperSubViewpoint_EditEx>(
          PaperSubViewpoint_Edit.GetPageEditObj('PaperSubViewpoint_EditEx')
        );
        if (objPage == null) {
          const strMsg = `当前编辑页面没有按关键字:'PaperSubViewpoint_EditEx'初始化过，请检查！`;
          alert(strMsg);
          console.error(strMsg);
          return;
        }

        objPage.mySubmit('Update');
        break;
      case 'Submit_Dialog': //提交
        objPage = <PaperSubViewpoint_EditEx>(
          PaperSubViewpoint_Edit.GetPageEditObj('PaperSubViewpoint_EditEx')
        );
        if (objPage == null) {
          const strMsg = `当前编辑页面没有按关键字:'PaperSubViewpoint_EditEx'初始化过，请检查！`;
          alert(strMsg);
          console.error(strMsg);
          return;
        }

        objPage.mySubmit_Dialog('Update');
        break;

      case 'SubmitKT': //提交
        objPage = <PaperSubViewpoint_EditEx>(
          PaperSubViewpoint_Edit.GetPageEditObj('UpdateKnowledgeTypeId')
        );
        if (objPage == null) {
          const strMsg = `当前编辑页面没有按关键字:'UpdateKnowledgeTypeId'初始化过，请检查！`;
          alert(strMsg);
          console.error(strMsg);
          return;
        }

        objPage.btnSubmitKT_Click();
        break;

      case 'SubmitSubViewpoint':
        objPage = <PaperSubViewpoint_EditEx>(
          PaperSubViewpoint_Edit.GetPageEditObj('PaperSubViewpoint_EditEx')
        );
        if (objPage == null) {
          const strMsg = `当前编辑页面没有按关键字:'PaperSubViewpoint_EditEx'初始化过，请检查！`;
          alert(strMsg);
          console.error(strMsg);
          return;
        }

        objPage.SubmitSubViewpoint(strKeyId);
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PaperSubViewpoint_EditEx.btn_Click');

        break;
    }
  }
  public async SubmitSubViewpoint(pstrOp: string) {
    // PaperSubViewpoint_EditEx.btnEdit_Click('SubmitSubViewpoint', '');
    const divName = this.divEdit;
    console.error('已经进入mySubmit', pstrOp);
    const strUserInfo = userStore.getUserId;
    if (strUserInfo == '') {
      $('#btnSubmitPaperSubViewpoint').attr('disabled', 'false');
      alert('用户session丢失，请重新登录！');
      return;
    }
    if ($('#ddlShareId').val() == '' || $('#ddlShareId').val() == '0') {
      message.warning('分享不能为空!');
      return;
    }
    //GetPaperRWId();
    //调用附件验证；
    // const bolIsExist = await File_IsHasImgFile(divName);
    // console.error('bolIsExist:', bolIsExist);
    // if (bolIsExist == false) {
    //   console.error('进入：objPage.mySubmit();');

    this.mySubmit(pstrOp);
    // }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   <param name = "pobjPaperSubViewpointEN">数据传输的目的类对象</param>
 */
  public async PutDataToPaperSubViewpointClass(pobjPaperSubViewpointEN: clsPaperSubViewpointEN) {
    const divName = this.divEdit;
    pobjPaperSubViewpointEN.SetPaperRWId(clsPrivateSessionStorage.paperRWId); // 论文读写Id
    pobjPaperSubViewpointEN.SetSubViewpointId(this.keyId);
    if (this.topicId == '') {
      pobjPaperSubViewpointEN.SetTopicId('00000000');
    } else {
      pobjPaperSubViewpointEN.SetTopicId(this.topicId);
    }
    const strPaperId = this.paperId;
    pobjPaperSubViewpointEN.SetPaperId(strPaperId); //论文Id
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(this.topicId);

    pobjPaperSubViewpointEN.SetIdCurrEduCls(strIdCurrEduCls); //论文Id
    pobjPaperSubViewpointEN.SetUserId(userStore.getUserId); //论文Id
    pobjPaperSubViewpointEN.SetShareId(this.shareId); //论文Id
    pobjPaperSubViewpointEN.SetAttitudesId(this.attitudesId); //论文Id

    pobjPaperSubViewpointEN.SetSectionId(this.sectionId); //节
    pobjPaperSubViewpointEN.SetSubViewpointTypeId(this.subViewpointTypeId); // 类型Id
    pobjPaperSubViewpointEN.SetgsKnowledgeTypeId(this.gsKnowledgeTypeId); // 类型Id
    pobjPaperSubViewpointEN.SetRWTitle(this.rWTitle); // 读写标题

    pobjPaperSubViewpointEN.SetSubViewpointContent(this.subViewpointContent); // 详情内容
    pobjPaperSubViewpointEN.SetExplainTypeId(this.explainTypeId); // 说明类型Id
    pobjPaperSubViewpointEN.SetExplainContent(this.explainContent); // 说明内容
    pobjPaperSubViewpointEN.SetIsPublic(this.isPublic); // 是否公开
    pobjPaperSubViewpointEN.SetLiteratureSourcesId(this.literatureSourcesId); // 文献来源

    pobjPaperSubViewpointEN.SetOperationTypeId(this.operationTypeId); // 操作类型ID
    pobjPaperSubViewpointEN.SetLevelId(this.levelId); // 级别Id
    pobjPaperSubViewpointEN.SetConclusion(this.conclusion); // 结论
    pobjPaperSubViewpointEN.SetNationality(this.nationality); // 国籍
    pobjPaperSubViewpointEN.SetAchievement(this.achievement); // 成就
    pobjPaperSubViewpointEN.SetMajor(this.major); // 专业
    pobjPaperSubViewpointEN.SetWorkUnit(this.workUnit); // 工作单位

    pobjPaperSubViewpointEN.SetPageNumber(this.pdfData.pdfPageNum); // 页码
    pobjPaperSubViewpointEN.SetPaperPageNum(this.pdfPageNum);
    pobjPaperSubViewpointEN.SetPdfContent(this.pdfData.selectText); // Pdf内容
    // pobjPaperSubViewpointEN.SetPdfPageNum(this.pdfData.pdfPageNum); // Pdf页码
    pobjPaperSubViewpointEN.SetselectSpanRange(this.pdfData.selectSpanRange); // Pdf页码

    if (this.orderNum == 0) {
      pobjPaperSubViewpointEN.SetOrderNum(30);
    } else {
      pobjPaperSubViewpointEN.SetOrderNum(this.orderNum); // 序号
    }

    pobjPaperSubViewpointEN.SetUpdUser(userStore.getUserId); // 修改用户Id

    //pobjPaperSubViewpointEN.SetUpdUser(userStore.getUserId;// 修改用户Id
    pobjPaperSubViewpointEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0)); // 修改日期
    pobjPaperSubViewpointEN.SetMemo(this.memo); // 备注
    switch (this.gsKnowledgeTypeId) {
      case enumgs_KnowledgeType.PersonalOpinion_01:
        break;
      case enumgs_KnowledgeType.ExpertOpinion_02:
        break;
      case enumgs_KnowledgeType.Concept_03:
        break;
      case enumgs_KnowledgeType.ObjectiveFact_04:
        break;
      case enumgs_KnowledgeType.ObjectiveData_05:
        break;
      case enumgs_KnowledgeType.Skill_06:
        break;
      case enumgs_KnowledgeType.SocialRelationships_07:
        pobjPaperSubViewpointEN.SetSubViewpointContent(fullName); // 详情内容
        break;
    }
  }

  public async PutDataToPaperSubViewpointClassKT(pobjPaperSubViewpointEN: clsPaperSubViewpointEN) {
    pobjPaperSubViewpointEN.SetSubViewpointId(this.keyId);
    pobjPaperSubViewpointEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //论文Id
    pobjPaperSubViewpointEN.SetShareId(this.shareId); //论文Id
    pobjPaperSubViewpointEN.SetgsKnowledgeTypeId(this.gsKnowledgeTypeId); // 类型Id
    pobjPaperSubViewpointEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    //pobjPaperSubViewpointEN.SetUpdUser(userStore.getUserId;// 修改用户Id
    pobjPaperSubViewpointEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjPaperSubViewpointEN.SetMemo(this.memo); // 备注
  }
  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjPaperSubViewpointEN">表实体类对象</param>
   **/
  public async GetDataFromPaperSubViewpointClass(pobjPaperSubViewpointEN: clsPaperSubViewpointEN) {
    // const divName = this.divEdit;
    // this.paperRWId = pobjPaperSubViewpointEN.paperRWId; // 论文读写Id
    this.sectionId = pobjPaperSubViewpointEN.sectionId; // 节Id
    this.subViewpointTypeId = pobjPaperSubViewpointEN.subViewpointTypeId; // 类型Id
    this.gsKnowledgeTypeId = pobjPaperSubViewpointEN.gsKnowledgeTypeId; // 类型Id
    this.rWTitle = pobjPaperSubViewpointEN.rWTitle; // 读写标题
    this.subViewpointContent = pobjPaperSubViewpointEN.subViewpointContent; // 详情内容
    this.explainTypeId = pobjPaperSubViewpointEN.explainTypeId; // 说明类型Id
    this.explainContent = pobjPaperSubViewpointEN.explainContent; // 说明内容
    this.isPublic = pobjPaperSubViewpointEN.isPublic; // 是否公开
    this.literatureSourcesId = pobjPaperSubViewpointEN.literatureSourcesId; // 文献来源
    this.pageNumber = pobjPaperSubViewpointEN.pageNumber; // 页码
    this.orderNum = pobjPaperSubViewpointEN.orderNum; // 序号
    // this.updDate = pobjPaperSubViewpointEN.updDate; // 修改日期
    this.memo = pobjPaperSubViewpointEN.memo; // 备注
    // this.subViewpointId = pobjPaperSubViewpointEN.subViewpointId; // 子观点Id
    // this.userId = pobjPaperSubViewpointEN.userId; // 用户ID
    // this.paperLineNum = pobjPaperSubViewpointEN.paperLineNum; // 论文行号
    // this.paperPageNum = pobjPaperSubViewpointEN.paperPageNum; // 论文页码
    // this.appraiseCount = pobjPaperSubViewpointEN.appraiseCount; // 评论数
    // this.okCount = pobjPaperSubViewpointEN.okCount; // 点赞统计
    // this.score = pobjPaperSubViewpointEN.score; // 评分
    // this.stuScore = pobjPaperSubViewpointEN.stuScore; // 学生平均分
    // this.teaScore = pobjPaperSubViewpointEN.teaScore; // 教师评分
    // this.createDate = pobjPaperSubViewpointEN.createDate; // 建立日期
    this.shareId = pobjPaperSubViewpointEN.shareId; // 分享Id
    // this.updUser = pobjPaperSubViewpointEN.updUser; // 修改人
    this.attitudesId = pobjPaperSubViewpointEN.attitudesId; // 态度Id
  }

  public async GetDataFromKnowledgeTypeId(pobjPaperSubViewpointEN: clsPaperSubViewpointEN) {
    this.gsKnowledgeTypeId = pobjPaperSubViewpointEN.gsKnowledgeTypeId; // 类型Id
    this.subViewpointContent = pobjPaperSubViewpointEN.subViewpointContent; // 详情内容
    this.explainContent = pobjPaperSubViewpointEN.explainContent; // 说明内容
    this.shareId = pobjPaperSubViewpointEN.shareId; // 分享Id
  }
  public Clear() {
    //this.paperRWId = "";
    $('#ddlSectionId option[0]').attr('selected', 'true');
    $('#ddlSubViewpointTypeId option[0]').attr('selected', 'true');
    //this.rWTitle = "";
    this.subViewpointContent = '';
    $('#ddlExplainTypeId option[0]').attr('selected', 'true');
    this.explainContent = '';
    this.isPublic = false;
    this.literatureSourcesId = '';
    this.pageNumber = 0;
    this.orderNum = 0;
    // this.Uploadfile = '';
    //this.updUser = "";
    //this.updDate = "";
    this.memo = '';
    $('#hdnFileOne').val('');
    $('#hdnFileTwo').val('');
    $('#hdnFileThree').val('');
  }

  /*
   * 设置上传文件
   */
  public set Uploadfile(value: string) {
    const divName = this.divEdit;
    SetInputValueInDivObj(divName, 'txtUploadfile', value);
  }
  /*
   * 获取上传文件
   */
  public get Uploadfile(): string {
    const divName = this.divEdit;
    return GetInputValueInDivObj(divName, 'txtUploadfile');
  }

  /* 为插入记录做准备工作
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
  */
  public async AddNewRecord() {
    this.btnSubmitPaperSubViewpoint = '确认添加';
    this.btnCancelPaperSubViewpoint = '取消添加';
    this.Clear();
    // const hidSubViewpointTypeId = GetInputValueInDivObj(
    //   this.divEdit,
    //   'hidSubViewpointTypeId',
    // );
    if (IsNullOrEmpty(this.pdfData.selectText) == false) {
      this.subViewpointContent = this.pdfData.selectText;
    }
    if (this.mySubViewpointTypeId != '') {
      this.subViewpointTypeId = this.mySubViewpointTypeId;
    }
    if (this.myExplainTypeId != '') {
      this.explainTypeId = this.myExplainTypeId;
    }
    if (this.myAttitudesId != '') {
      this.attitudesId = this.myAttitudesId;
    }
    this.shareId = enumgs_Share.FullPublic_03;
    //wucPaperSubViewpointB1.subViewpointId = clsPaperSubViewpointBL.GetMaxStrId_S();
  }

  /*
   * 在数据表里修改记录
   */
  public async btnUpdateRecordInTab_ClickBak(strKeyId: number) {
    this.opType = 'Update';
    if (strKeyId == 0) {
      alert('请选择需要修改的记录！');
      return;
    }
    this.Clear();
    const lngKeyId = strKeyId;
    this.UpdateRecord(lngKeyId);
  }

  /** 修改记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnUpdateRecord_Click)
   **/
  public async btnUpdateRecord_Click(strKeyId: number) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (strKeyId == 0) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    $('#div_PaperDetail').hide();
    $('#divQuery').hide();
    $('#div_SubViewpointList').hide();
    $('#divEditRegion').show();
    ShowDivObj(this.divEdit);
    try {
      this.opType = 'Update';
      this.keyId = strKeyId;
      // const bolIsSuccess = await this.ShowDialog_PaperSubViewpoint(this.opType);
      // if (bolIsSuccess == false) return;

      this.btnSubmitPaperSubViewpoint = '确认修改';
      this.btnCancelPaperSubViewpoint = '取消修改';

      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();

      const update = await this.UpdateRecord(strKeyId);
      if (update == false) {
        const strMsg = Format('在修改记录时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
    } catch (e: any) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnUpdateRecordDialog_Click(strKeyId: number) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (strKeyId == 0) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    // $('#div_PaperDetail').hide();
    // $('#divQuery').hide();
    // $('#div_SubViewpointList').hide();
    // $('#divEditRegion').show();
    // ShowDivObj(this.divEdit);
    try {
      this.opType = 'Update';
      this.keyId = strKeyId;
      const bolIsSuccess = await this.ShowDialog_PaperSubViewpoint(this.opType);
      if (bolIsSuccess == false) return;

      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();

      const update = await this.UpdateRecord(strKeyId);
      if (update == false) {
        const strMsg = Format('在修改记录时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
    } catch (e: any) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_KnowledgeTypeId(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_KnowledgeTypeId.name;
    if (PaperSubViewpoint_EditEx.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (PaperSubViewpoint_EditEx.EditKnowledgeTypeIdRef == null) {
        const strMsg = Format(
          '当前编辑区的EditRef为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await PaperSubViewpoint_EditEx.EditKnowledgeTypeIdRef.value.showDialog();
    }
    this.divEdit = PaperSubViewpoint_EditEx.EditKnowledgeTypeIdRef.value.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (PaperSubViewpoint_EditEx.times4TestShowDialogV2 < 2) {
        PaperSubViewpoint_EditEx.times4TestShowDialogV2++;
        setTimeout(() => {
          this.ShowDialog_KnowledgeTypeId(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      PaperSubViewpoint_EditEx.times4TestShowDialogV2 = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitPaperSubViewpointV2 = '确认添加';
      this.btnCancelPaperSubViewpointV2 = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitPaperSubViewpointV2 = '确认修改';
      this.btnCancelPaperSubViewpointV2 = '取消修改';
    }
    return true;
  }
  public async btnUpdateKnowledgeTypeId_Click(strKeyId: number) {
    const strThisFuncName = this.btnUpdateKnowledgeTypeId_Click.name;
    if (strKeyId == 0) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    try {
      this.opType = 'Update';
      this.keyId = strKeyId;
      const bolIsSuccess = await this.ShowDialog_KnowledgeTypeId(this.opType);
      if (bolIsSuccess == false) return;

      this.btnSubmitPaperSubViewpointV2 = '确认修改';
      this.btnCancelPaperSubViewpointV2 = '取消修改';

      await this.SetDdl_gsKnowledgeTypeIdInDiv();
      await gs_Share_BindDdl_ShareIdInDivCache(this.divEdit, 'ddlShareId');
      const update = await this.UpdateKnowledgeTypeId(strKeyId);
      if (update == false) {
        const strMsg = Format('在修改记录时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
    } catch (e: any) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strSubViewpointId: number): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strSubViewpointId;
    try {
      const objPaperSubViewpointEN = await PaperSubViewpoint_GetObjBySubViewpointIdAsync(
        strSubViewpointId,
      );
      if (objPaperSubViewpointEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      PaperSubViewpoint_EditEx.vuebtn_Click(
        'setKnowledgeTypeId',
        objPaperSubViewpointEN.gsKnowledgeTypeId,
      );
      await this.GetDataFromPaperSubViewpointClass(objPaperSubViewpointEN);
      console.log('完成UpdateRecord!');
      return true;
    } catch (e: any) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  public async UpdateKnowledgeTypeId(strSubViewpointId: number): Promise<boolean> {
    const strThisFuncName = this.UpdateKnowledgeTypeId.name;
    this.keyId = strSubViewpointId;
    try {
      const objPaperSubViewpointEN = await PaperSubViewpoint_GetObjBySubViewpointIdAsync(
        strSubViewpointId,
      );
      if (objPaperSubViewpointEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromKnowledgeTypeId(objPaperSubViewpointEN);
      console.log('完成UpdateRecord!');
      return true;
    } catch (e: any) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }
  /** 函数功能:为编辑区绑定下拉框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
   **/
  public async BindDdl4EditRegionInDiv() {
    // const divName = this.divEdit;
    //const strThisFuncName = this.BindDdl4EditRegionInDiv.name;
    // 在此处放置用户代码以初始化页面

    let strPaperId = this.paperId;
    if (strPaperId == '') {
      strPaperId = clsPrivateSessionStorage.paperId;
    }
    //const strPaperId = PaperSubViewpoint_Edit.PaperId_Static;
    if (strPaperId != '') {
      await this.SetDdl_SectionIdInDiv(strPaperId); //编辑区域
    }
    await this.SetDdl_SubViewpointTypeIdInDiv(); //编辑区域

    await this.SetDdl_gsKnowledgeTypeIdInDiv();

    await this.SetDdl_ExplainTypeIdInDiv(); //编辑区域

    await this.SetDdl_ShareIdInDiv(); //编辑区域

    await this.SetDdl_AttitudesIdInDiv(); //编辑区域
  }
  /**添加 */
  public async btnAddNewRecord_Click() {
    this.opType = 'Add';
    $('#ddlExplainTypeId').val('01');

    //$('#hidSubViewpointTypeId').val(strKeyId);

    //ShowDialog('Add');
    $('#div_PaperDetail').hide();
    $('#divQuery').hide();
    $('#div_SubViewpointList').hide();
    $('#divEditRegion').show();
    ShowDivObj(this.divEdit);
    try {
      if (IsNullOrEmpty(this.subViewpointTypeId) == true)
        this.subViewpointTypeId = enumSubViewpointType.QuestioningProcess_00000001;
      await this.selectTitle_Click();
      this.Clear();
      await this.BindDdl4EditRegionInDiv();
      await this.AddNewRecord();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  public async selectTitle_Click() {
    const strThisFuncName = this.selectTitle_Click.name;
    try {
      const strWhereCond = ` subViewpointTypeId='${this.subViewpointTypeId}'`;
      const objSubViewpointType = await SubViewpointType_GetFirstObjAsync(strWhereCond);
      if (objSubViewpointType == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      this.rWTitle = objSubViewpointType.defaTitle;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取记录不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
  public async btnSubmit_Click() {
    // const divName = this.divEdit;

    const strCommandText: string = this.btnSubmitPaperSubViewpoint;
    let returnStr;
    let returnBool;
    try {
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          returnStr = await this.AddNewRecordSaves();

          if (returnStr > 0) {
            // this.HideDialog_PaperSubViewpoint();
            // HideDivObj(this.divEdit);
            $('#divEditRegion').hide();

            this.iShowList.BindGvCache(clsPaperSubViewpointEN._CurrTabName, '');
            message.success('添加记录成功！');
          }

          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          if (returnBool == true) {
            // this.HideDialog_PaperSubViewpoint();
            $('#divEditRegion').hide();

            this.iShowList.BindGvCache(clsPaperSubViewpointEN._CurrTabName, '');
          }

          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnSubmit_Click');

          break;
      }
      if (returnBool == true) {
        $('#div_PaperDetail').show();
        $('#divQuery').show();
        $('#div_SubViewpointList').show();
        $('#divEditRegion').hide();
        $('#btnSubmit_PaperSubViewpoint').attr('disabled', 'false');
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnSubmit_Dialog_Click() {
    // const divName = this.divEdit;

    const strCommandText: string = this.btnSubmitPaperSubViewpoint_Dialog;
    let returnStr;
    let returnBool;
    try {
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          returnStr = await this.AddNewRecordSaves();

          if (returnStr > 0) {
            this.HideDialog_PaperSubViewpoint();

            this.iShowList.BindGvCache(clsPaperSubViewpointEN._CurrTabName, this.gsKnowledgeTypeId);
            message.success('添加记录成功！');
          }

          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          if (returnBool == true) {
            this.HideDialog_PaperSubViewpoint();

            this.iShowList.BindGvCache(clsPaperSubViewpointEN._CurrTabName, this.gsKnowledgeTypeId);
          }

          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnSubmit_Click');

          break;
      }
      if (returnBool == true) {
        $('#div_PaperDetail').show();
        $('#divQuery').show();
        $('#div_SubViewpointList').show();
        $('#divEditRegion').hide();
        $('#btnSubmit_PaperSubViewpoint').attr('disabled', 'false');
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async btnSubmitKT_Click() {
    // const divName = this.divEdit;

    const strCommandText: string = this.btnSubmitPaperSubViewpointV2;
    let returnStr;
    let returnBool;
    try {
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          returnStr = await this.AddNewRecordSaves();

          if (returnStr > 0) {
            // this.HideDialog_PaperSubViewpoint();
            // HideDivObj(this.divEdit);
            $('#divEditRegion').hide();

            this.iShowList.BindGvCache(clsPaperSubViewpointEN._CurrTabName, '');
            message.success('添加记录成功！');
          }

          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSaveKT();
          if (returnBool == true) {
            this.HideDialog_PaperSubViewpointKT();

            this.iShowList.BindGvCache(clsPaperSubViewpointEN._CurrTabName, '');
          }

          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnSubmit_Click');

          break;
      }
      if (returnBool == true) {
        $('#div_PaperDetail').show();
        $('#divQuery').show();
        $('#div_SubViewpointList').show();
        $('#divEditRegion').hide();
        $('#btnSubmit_PaperSubViewpoint').attr('disabled', 'false');
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public HideDialog_PaperSubViewpointKT() {
    if (PaperSubViewpoint_EditEx.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      PaperSubViewpoint_EditEx.EditKnowledgeTypeIdRef.value.hideDialog();
    }
  }
  /* 添加新记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 */
  public async AddNewRecordSaves(): Promise<number> {
    const divName = this.divEdit;
    //
    const objPaperSubViewpointEN: clsPaperSubViewpointEN = new clsPaperSubViewpointEN();
    await this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);
    try {
      if (IsNullOrEmpty(objPaperSubViewpointEN.paperRWId) == true)
        objPaperSubViewpointEN.paperRWId = '00000000';
      //const responseText2 = await PaperSubViewpoint_AddNewRecordAsync(objPaperSubViewpointEN);
      const strUniCondition = PaperSubViewpoint_GetUniCondStr(objPaperSubViewpointEN);
      const bolIsExist = await PaperSubViewpoint_IsExistRecordAsync(strUniCondition);
      if (bolIsExist == true) {
        const strMsg = `详情内容:[${objPaperSubViewpointEN.subViewpointContent}]已经存在，不能再添加！`;
        alert(strMsg);
        return 0; //一定要有一个返回值，否则会出错！
      }
      const returnKey = await PaperSubViewpointEx_AddNewRecordWithReturnKeyAsyncEx(
        objPaperSubViewpointEN,
      );
      const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
        clsPrivateSessionStorage.topicIdInTree,
      );
      const strSubViewpointId = Number(returnKey);
      if (strSubViewpointId != 0) {
        //存放主键；
        $('#hidKeyId').val(strSubViewpointId);

        //判断是否有返回的附件路径值
        if (PaperSubViewpoint_EditEx.uploadResponseData.imgFilePathOne != '') {
          const returnBool_AddPaperAttach =
            await PaperSubAttachmentEx_AddPaperSubViewpointAttachment(
              strSubViewpointId,
              strIdCurrEduCls,
              PaperSubViewpoint_EditEx.uploadResponseData,
            );
          return strSubViewpointId;
        }

        //this.Clear();
        return strSubViewpointId; //一定要有一个返回值，否则会出错！
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      this.Clear();
      return 0;
    }
    return 0; //一定要有一个返回值，否则会出错！
  }

  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateRecordSave(): Promise<boolean> {
    const divName = this.divEdit;
    const strThisFuncName = this.UpdateRecordSave.name;

    const objPaperSubViewpointEN: clsPaperSubViewpointEN = new clsPaperSubViewpointEN();
    objPaperSubViewpointEN.SetSubViewpointId(this.keyId);
    await this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);
    objPaperSubViewpointEN.subViewpointId = this.keyId;
    objPaperSubViewpointEN.sfUpdFldSetStr = objPaperSubViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objPaperSubViewpointEN.subViewpointId == 0 ||
      objPaperSubViewpointEN.subViewpointId == undefined
    ) {
      const strMsg = Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
      console.error(strMsg);
      throw strMsg;
    }
    try {
      PaperSubViewpoint_CheckProperty4Update(objPaperSubViewpointEN);
    } catch (e: any) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }

    try {
      const returnBool = await PaperSubViewpointEx_UpdateRecordAsyncEx(objPaperSubViewpointEN);
      if (returnBool == true) {
        //存放主键;
        this.keyId = objPaperSubViewpointEN.subViewpointId;
        //得到相关论文附件地址，判断是否为空 只要有一个不为空都执行附件清除功能；
        if (PaperSubViewpoint_EditEx.uploadResponseData.isHasFile == true) {
          //根据Id删除附件
          const strwhere = `subViewpointId ='${objPaperSubViewpointEN.subViewpointId}'`;
          this.DelRecordByWhere(strwhere);
        }
        const strInfo = `修改记录成功!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `修改记录不成功!`;
        //显示信息框
        alert(strInfo);
        return false;
      }
      console.log('完成UpdateRecordSave');
      return true;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  public async UpdateRecordSaveKT(): Promise<boolean> {
    const divName = this.divEdit;
    const strThisFuncName = this.UpdateRecordSaveKT.name;

    const objPaperSubViewpointEN: clsPaperSubViewpointEN = new clsPaperSubViewpointEN();
    objPaperSubViewpointEN.SetSubViewpointId(this.keyId);
    await this.PutDataToPaperSubViewpointClassKT(objPaperSubViewpointEN);
    objPaperSubViewpointEN.subViewpointId = this.keyId;
    objPaperSubViewpointEN.sfUpdFldSetStr = objPaperSubViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objPaperSubViewpointEN.subViewpointId == 0 ||
      objPaperSubViewpointEN.subViewpointId == undefined
    ) {
      const strMsg = Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
      console.error(strMsg);
      throw strMsg;
    }
    try {
      PaperSubViewpoint_CheckProperty4Update(objPaperSubViewpointEN);
    } catch (e: any) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }

    try {
      const returnBool = await PaperSubViewpointEx_UpdateRecordAsyncEx(objPaperSubViewpointEN);
      if (returnBool == true) {
        //存放主键;
        $('#hidKeyId').val(objPaperSubViewpointEN.subViewpointId);
        //得到相关论文附件地址，判断是否为空 只要有一个不为空都执行附件清除功能；

        const strInfo = `修改记录成功!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `修改记录不成功!`;
        //显示信息框
        alert(strInfo);
        return false;
      }
      console.log('完成UpdateRecordSave');
      return true;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 
 根据关键字删除记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecordByWhere(strWhere: string) {
    try {
      const returnInt: number = await PaperSubAttachment_DelPaperSubAttachmentsByCondAsync(
        strWhere,
      );
      if (returnInt > 0) {
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
      } else {
        // const strInfo = `删除记录不成功!`;
        //显示信息框
        //alert(strInfo);
      }
      const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
        clsPrivateSessionStorage.topicIdInTree,
      );
      const strSubViewpointId = this.keyId;
      //在修改时候，不管是否有附件数据被清除； 都需要执行附件添加功能
      //判断是否有返回的附件路径值
      if (PaperSubViewpoint_EditEx.uploadResponseData.imgFilePathOne != '') {
        const returnBool_AddPaperAttach = await PaperSubAttachmentEx_AddPaperSubViewpointAttachment(
          strSubViewpointId,
          strIdCurrEduCls,
          PaperSubViewpoint_EditEx.uploadResponseData,
        );
        return strSubViewpointId;
      }

      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:系统生成的Change事件函数
     (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass9_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   */
  public async ddlSubViewpointTypeId_SelectedIndexChanged() {
    // const strThisFuncName = this.ddlSubViewpointTypeId_SelectedIndexChanged.name;
    /*alert('请在扩展层:PaperSubViewpoint_EditExEx中重写该函数！');*/
    const strSubViewpointTypeId = this.subViewpointTypeId;
    if (IsNullOrEmpty(strSubViewpointTypeId) == false) this.selectTitle_Click();
  }

  /*
 提交编辑
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_mySubmit)
*/
  public async mySubmit(pstrOp: string) {
    const divName = this.divEdit;

    const bolIsExist = await File_IsHasImgFile(divName);
    if (bolIsExist == true) {
      let strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir;
      let strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_PaperSubViewpoint;
      const currHostname = window.location.hostname;

      if (currHostname == 'localhost') {
        strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir_Local;
      }
      if (this.literatureTypeId == '05') {
        strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_ReadTrainingSubViewpoint;
      }
      // const divName = this.refDivEdit;
      const responseData = await File_UploadImgFile(
        strUploadWebMainDir,
        strUploadWebSubDir,
        PaperSubViewpoint_EditEx.mySelectedFile,
      );
      PaperSubViewpoint_EditEx.uploadResponseData = responseData;
    }
    console.error('bolIsExist:', bolIsExist);

    this.btnSubmit_Click();
  }
  public async mySubmit_Dialog(pstrOp: string) {
    const divName = this.divEdit;

    const bolIsExist = await File_IsHasImgFile(divName);
    if (bolIsExist == true) {
      let strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir;
      let strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_PaperSubViewpoint;
      const currHostname = window.location.hostname;

      if (currHostname == 'localhost') {
        strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir_Local;
      }
      if (this.literatureTypeId == '05') {
        strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_ReadTrainingSubViewpoint;
      }
      // const divName = this.refDivEdit;
      const responseData = await File_UploadImgFile(
        strUploadWebMainDir,
        strUploadWebSubDir,
        PaperSubViewpoint_EditEx.mySelectedFile,
      );
      if (responseData == false) {
        return;
      }
      PaperSubViewpoint_EditEx.uploadResponseData = responseData;
    }
    console.error('bolIsExist:', bolIsExist);

    this.btnSubmit_Dialog_Click();
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitPaperSubViewpoint(): string {
    const strValue = GetButtonHtmlInDivObj(this.divEdit, 'btnSubmitPaperSubViewpoint');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitPaperSubViewpoint(value: string) {
    SetButtonHtmlInDivObj(this.divEdit, 'btnSubmitPaperSubViewpoint', value);
  }

  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   **/
  public set btnCancelPaperSubViewpoint(value: string) {
    SetButtonHtmlInDivObj(this.divEdit, 'btnCancelPaperSubViewpoint', value);
  }

  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   **/
  public set btnCancelPaperSubViewpoint_Dialog(value: string) {
    PaperSubViewpoint_Edit.EditObj.SetButtonText('btnCancelPaperSubViewpoint', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitPaperSubViewpoint_Dialog(): string {
    const strValue = PaperSubViewpoint_Edit.EditObj.GetButtonText('btnSubmitPaperSubViewpoint');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitPaperSubViewpoint_Dialog(value: string) {
    PaperSubViewpoint_Edit.EditObj.SetButtonText('btnSubmitPaperSubViewpoint', value);
  }

  /*
   * Pdf页码
   */
  public get pdfPageNum(): number {
    //return $("#hidPdfPageNum").val();
    // return GetInputValueInDivObj(divName, 'iframe_qaPdf').contents().find('#hidPdfPageNum');
    const strValue = get_pdfPageNum('iframe_qaPdf');
    return strValue;
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitPaperSubViewpointV2(): string {
    const strValue = PaperSubViewpoint_EditEx.EditKnowledgeTypeIdRef.value.GetButtonText(
      'btnSubmitPaperSubViewpoint',
    );
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitPaperSubViewpointV2(value: string) {
    PaperSubViewpoint_EditEx.EditKnowledgeTypeIdRef.value.SetButtonText(
      'btnSubmitPaperSubViewpoint',
      value,
    );
  }

  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   **/
  public set btnCancelPaperSubViewpointV2(value: string) {
    PaperSubViewpoint_EditEx.EditKnowledgeTypeIdRef.value.SetButtonText(
      'btnCancelPaperSubViewpoint',
      value,
    );
  }
  public get topicId(): string {
    return PaperSubViewpoint_EditEx.GetPropValue('topicId');
  }

  public get paperId(): string {
    return PaperSubViewpoint_EditEx.GetPropValue('paperId');
  }

  public get literatureTypeId(): string {
    return PaperSubViewpoint_EditEx.GetPropValue('literatureTypeId');
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_PaperSubViewpoint(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_PaperSubViewpoint.name;
    if (PaperSubViewpoint_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (PaperSubViewpoint_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditRef为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await PaperSubViewpoint_Edit.EditObj.showDialog();
    }
    this.divEdit = PaperSubViewpoint_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (PaperSubViewpoint_Edit.times4TestShowDialog < 2) {
        PaperSubViewpoint_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_PaperSubViewpoint(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      PaperSubViewpoint_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitPaperSubViewpoint_Dialog = '确认添加';
      this.btnCancelPaperSubViewpoint_Dialog = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitPaperSubViewpoint_Dialog = '确认修改';
      this.btnCancelPaperSubViewpoint_Dialog = '取消修改';
    }
    return true;
  }
  public get operationTypeId11(): string {
    return PaperSubViewpoint_EditEx.GetPropValue('operationTypeId');
  }
  public get levelId(): string {
    return PaperSubViewpoint_EditEx.GetPropValue('levelId');
  }
  public get conclusion(): string {
    return PaperSubViewpoint_EditEx.GetPropValue('conclusion');
  }
}
