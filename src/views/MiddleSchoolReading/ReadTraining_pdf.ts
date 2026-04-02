import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { PaperSubViewpoint_EditEx } from '../GradEduPaper/PaperSubViewpoint_EditEx';
import {
  PaperEx_CopyToEx,
  PaperEx_FuncMapByFldName,
  PaperEx_ReFreshThisCacheByIdCurrEduCls,
} from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import {
  vPaperSubViewpointEx_DetailShow,
  vPaperSubViewpointEx_GetSubViewpointTypeNumObjLstAsync,
} from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSubViewpointExWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { clsPubFun4Web, doDownLoad, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { PaperSubViewpointCRUD } from '@/viewsBase/GradEduPaper/PaperSubViewpointCRUD';
import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { clsPaperDownloadLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperDownloadLogEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';
import { clsPaperSubAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachmentEN';
import { clsPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubViewpointEN';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { clsExplainTypeEN } from '@/ts/L0Entity/RT_Params/clsExplainTypeEN';
import { clsSubViewpointTypeEN } from '@/ts/L0Entity/RT_Params/clsSubViewpointTypeEN';
import {
  PaperAttachment_GetFirstObjAsync,
  PaperAttachment_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import { PaperDownloadLog_AddNewRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperDownloadLogWApi';
import {
  PaperSubAttachment_DelPaperSubAttachmentsByCondAsync,
  PaperSubAttachment_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubAttachmentWApi';
import {
  PaperSubViewpoint_DelRecordAsync,
  PaperSubViewpoint_DownMoveAsync,
  PaperSubViewpoint_GetRecCountByCondAsync,
  PaperSubViewpoint_ReOrderAsync,
  PaperSubViewpoint_UpdateRecordAsync,
  PaperSubViewpoint_UpMoveAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubViewpointWApi';
import {
  Paper_GetFirstObjAsync,
  Paper_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { Section_BindDdl_SectionIdByPaperIdInDivCache } from '@/ts/L3ForWApi/GradEduPaper/clsSectionWApi';
import { vPaperSubViewpoint_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { SysComment_IsExistRecordAsync } from '@/ts/L3ForWApi/GradEduTools/clsSysCommentWApi';
import {
  SysVote_AddNewRecordAsync,
  SysVote_GetObjLstAsync,
  SysVote_GetRecCountByCondAsync,
  SysVote_IsExistRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import { ExplainType_GetObjLstCache } from '@/ts/L3ForWApi/RT_Params/clsExplainTypeWApi';
import { SubViewpointType_GetObjLstCache } from '@/ts/L3ForWApi/RT_Params/clsSubViewpointTypeWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetAddressAndPort, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetButtonObjLstInDivObj,
  GetDivObjInDivObj,
  GetTBodyObjInDivObj,
  getTrObjLstInDivObj,
  SetSpanHtmlInDivObj,
  GetButtonObjLstInDivObjN,
  GetAObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import {
  get_pdfContent,
  get_pdfPageNum,
  pdf_LocationPdfPageNum,
  pdf_SetClientType,
  set_page_top,
  set_pdfContent,
  set_pdfPageNum,
} from '@/ts/FunClass/clsPubFun4Pdf';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import {
  ViewpointLikeLog_AddNewRecordAsync,
  ViewpointLikeLog_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsViewpointLikeLogWApi';
import { clsViewpointLikeLogEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointLikeLogEN';
import { CommQuestionAnswer } from '@/views/InteractManage/CommQuestionAnswer';
import {
  CurrEduClsEx_Bind_EduClsStuList,
  CurrEduClsEx_Bind_EduClsTeaList,
  CurrEduClsEx_GetCourseIdByIdCurrEduCls,
} from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsExWApi';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import enumSubViewPointTabs from '@/ts/FunClass/enumSubViewPointTabs';
import { UploadResponseData } from '@/ts/FunClass/UploadResponseData';
import { PaperSubAttachmentEx_AddPaperSubViewpointAttachment } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperSubAttachmentExWApi';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare let window: any;
/* PaperSubViewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ReadTraining_pdf extends PaperSubViewpointCRUD implements IShowList {
  public static uploadResponseData: UploadResponseData = new UploadResponseData();
  public static vuebtn_Click: (strCommandName: string, strKeyId: string) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static paperId = '';
  public static questionsId = '';
  public static SetPaperQaPara: (
    strPaperId: string,
    strIdCurrEducls: string,
    strQuestionsId: string,
    strPushId: string,
  ) => void;
  public static SetTeaQaPara: (
    strPaperId: string,
    strIdCurrEducls: string,
    strQuestionsId: string,
    strTopicId: string,
  ) => void;

  public static SetTeaTestQaPara: (
    strPaperId: string,
    strIdCurrEducls: string,
    strQuestionsId: string,
    strTopicId: string,
  ) => void;

  public static SetPaperTagsPara: (strPaperId: string, strIdCurrEducls: string) => void;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvPaperSubViewpointBy: string = "subViewpointId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 50;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    this.BindGv_vPaperSubViewpoint();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vPaperSubViewpoint':
      case 'PaperSubViewpoint':
        //this.BindGv_vPaperSubViewpointCache();;
        $('#div_SubViewpointList').show();
        $('#divEditRegion').hide();
        this.BindGv_vPaperSubViewpoint();
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public btnCancel_Click() {
    $('#div_PaperDetail').show();
    $('#divQuery').show();
    $('#div_SubViewpointList').show();
    $('#divEditRegion').hide();
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const strTabId = strKeyId;

    let objPage: ReadTraining_pdf;
    let objPageEdit;
    if (PaperSubViewpointCRUD.objPageCRUD == null) {
      PaperSubViewpointCRUD.objPageCRUD = new ReadTraining_pdf(divLayout);
      objPage = <ReadTraining_pdf>PaperSubViewpointCRUD.objPageCRUD;
    } else {
      objPage = <ReadTraining_pdf>PaperSubViewpointCRUD.objPageCRUD;
    }
    let arrKeyIds: Array<string> = [];
    if (objPage.divList != null) {
      arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
      strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    }
    // const pstrOp = strKeyId;
    // let strUserInfo;

    let arr;
    let strMsg;
    let intPageNum;
    let strExplainContent;
    CommQuestionAnswer.ShortComment = 'J_ShortComment_Tea';
    switch (strCommandName) {
      case 'UpdatePaperPageNum':
        arr = strKeyId.split('|');
        if (arr.length < 2) {
          strMsg = `在执行btnUpdateQa_Answer_Click过程中，参数数目不正确！`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        intPageNum = Number(arr[0]);
        strExplainContent = arr[1];

        pdf_LocationPdfPageNum(intPageNum, strExplainContent);

        $('#hidExplainContent').val(strExplainContent);

        if (intPageNum != 0) {
          objPage.btnUpdatePaperPageNum_Click();
        }

        break;
      case 'DelSubViewPoint':
        objPage.btnDelRecordInTab_Click(Number(strKeyId));
        break;
      case 'mySubmit':
        /*
         * 提交编辑
         */

        // strUserInfo = userStore.getUserId; // GetInputValueInDivObj(divName, 'hidUserInfo');
        // if (strUserInfo != '') {
        //   if ($('#ddlShareId').val() == '' || $('#ddlShareId').val() == '0') {
        //     message.warning('分享不能为空!');
        //   } else {
        //     objPageEdit.mySubmit(pstrOp);
        //   }
        // } else {
        //   $('#btnSubmitPaperSubViewpoint').attr('disabled', 'false');
        //   alert('用户session丢失，请重新登录！');
        // }

        break;
      case 'Cancel':
        objPage.btnCancel_Click();
        break;
      case 'changeTab':
        switch (strTabId) {
          case 'Paper_SubViewpoint': //查询记录
            CommQuestionAnswer.currQuestionsId = '';
            CommQuestionAnswer.questionsId = '';
            objPage.li_PaperMenu_Click();
            break;

          case 'Paper_QA': //查询记录
            CommQuestionAnswer.currQuestionsId = '';
            CommQuestionAnswer.questionsId = '';
            objPage.li_PaperMenu_Click();
            break;
          case 'Paper_Tags': //查询记录
            CommQuestionAnswer.currQuestionsId = '';
            CommQuestionAnswer.questionsId = '';
            objPage.li_PaperMenu_Click();
            break;
          case 'Tea_QA': //查询记录
            CommQuestionAnswer.currQuestionsId = '';
            CommQuestionAnswer.questionsId = '';
            CommQuestionAnswer.ShortComment = 'J_ShortComment_Tea';
            objPage.li_PaperMenu_Click();
            break;
          case 'TeaTest_QA': //查询记录
            CommQuestionAnswer.currQuestionsId = '';
            CommQuestionAnswer.questionsId = '';
            CommQuestionAnswer.ShortComment = 'J_ShortComment_TeaTest';
            objPage.li_PaperMenu_Click();
            break;
        }
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new PaperSubViewpoint_EditEx('PaperSubViewpoint_EditEx', objPage);
        objPageEdit.myExplainTypeId = '01';
        objPageEdit.myAttitudesId = '01';
        objPageEdit.divName4Edit = 'divEditRegion';
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'AddNewRecordBySubType': //添加记录
        // $('#ddlSubViewpointTypeId').val(strKeyId);
        // $('#ddlExplainTypeId').val('01');

        // $('#hidSubViewpointTypeId').val(strKeyId);

        //ShowDialog('Add');
        $('#div_PaperDetail').hide();
        $('#divQuery').hide();
        $('#div_SubViewpointList').hide();
        $('#divEditRegion').show();
        objPageEdit = new PaperSubViewpoint_EditEx('PaperSubViewpoint_EditEx', objPage);
        objPageEdit.mySubViewpointTypeId = strKeyId;
        objPageEdit.myExplainTypeId = '01';
        objPageEdit.myAttitudesId = '01';

        objPageEdit.divName4Edit = 'divEditRegion';
        objPageEdit.btnAddNewRecord_Click();
        break;

      case 'UpdateSubViewPoint':
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        $('#div_PaperDetail').hide();
        $('#divQuery').hide();
        $('#div_SubViewpointList').hide();
        $('#divEditRegion').show();
        objPageEdit = new PaperSubViewpoint_EditEx('PaperSubViewpoint_EditEx', objPage);

        if (strCommandName == 'UpdateRecordInTab') {
          objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPageEdit.btnUpdateRecord_Click(Number(strKeyId));
        }
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(Number(strKeyId));
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ReadTraining_pdf.btn_Click');

        break;
    }
  }

  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        $('#hidUserId').val(userStore.getUserId);
        $('#hidRoleId').val(userStore.getRoleId);

        //1、为下拉框设置数据源,绑定列表数据

        if (clsPubLocalStorage.idCurrEduCls == '') {
          $('#hidIdCurrEduCls').val(clsPubLocalStorage.idCurrEduCls);
        }

        const strPaperId = clsPrivateSessionStorage.paperId;
        await Section_BindDdl_SectionIdByPaperIdInDivCache(
          this.divLayout,
          'ddlSectionId_q',
          strPaperId,
        );
        await Section_BindDdl_SectionIdByPaperIdInDivCache(
          this.divLayout,
          'ddlSectionId',
          strPaperId,
        );

        await this.BindDdl_SubViewpointTypeId('ddlSubViewpointTypeId_q');
        //const ddl_ExplainTypeId_q = await this.BindDdl_ExplainTypeId("ddlExplainTypeId_q");
        await this.BindDdl_SubViewpointTypeId('ddlSubViewpointTypeId');

        await this.BindDdl_ExplainTypeId('ddlExplainTypeId');

        PaperSubViewpointCRUD.sortvPaperSubViewpointBy = 'subViewpointTypeName Asc';

        const strRoleId = userStore.getRoleId;
        //判断角色
        //学生
        if (strRoleId == '00620003') {
          if (clsPrivateSessionStorage.topicIdInTree != '') {
            $('#liTeaTest_QA').show();
          } else {
            $('#liTeaTest_QA').hide();
          }
        } else {
          $('#liTeaTest_QA').show();
        }
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //绑定pdf_Ifame
        await this.BindPdf();

        await this.li_PaperMenu_Click();

        //tbody();

        // 判断角色
        // 管理员
        if (
          userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
          userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
          await CurrEduClsEx_Bind_EduClsTeaList(
            this.divLayout,
            ReadTraining_pdf.EduCls_Click,
            'spnEduClsName_Head_MiddleSchool',
          );
        }
        //老师
        else if (userStore.getRoleId == '00620002') {
          await CurrEduClsEx_Bind_EduClsTeaList(
            this.divLayout,
            ReadTraining_pdf.EduCls_Click,
            'spnEduClsName_Head',
          );
        }
        //学生
        else {
          await CurrEduClsEx_Bind_EduClsStuList(
            this.divLayout,
            ReadTraining_pdf.EduCls_Click,
            'spnEduClsName_Head_MiddleSchool',
          );
        }

        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async li_PaperMenu_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //如果是点击了树菜单、或者是刷新，那么需要做样式控制；
    //首先要去掉ul下 li a 样式
    $('#tabMenu li a').removeClass();
    $('#tabMenu li a').addClass('nav-link');

    $('#Paper_SubViewpoint').removeClass();
    $('#divPaper_QA').removeClass();
    $('#Paper_Tags').removeClass();
    $('#Tea_QA').removeClass();

    // $('#Paper_SubViewpoint').addClass('tab-pane fade');
    // $('#divPaper_QA').addClass('tab-pane fade');
    // $('#Paper_Tags').addClass('tab-pane fade');
    // $('#Tea_QA').addClass('tab-pane fade');

    //判断根据序号显示不同的数据源
    // const strnum = GetInputValueInDivObj(divName, 'h1idTabNum');
    const activeTabId = ReadTraining_pdf.GetPropValue('activeTabId');
    switch (activeTabId) {
      case enumSubViewPointTabs.Paper_SubViewpoint: // (strnum == '1') {
        //$("#liUser").addClass("active");
        $('#liPaper_SubViewpoint a').addClass('active');

        $('#Paper_SubViewpoint').addClass('active show');

        //主题用户关系；
        //论文摘要
        await this.Bind_PaperContent();
        //绑定论文子观点
        await this.BindGv_vPaperSubViewpoint();
        break;
      case enumSubViewPointTabs.Paper_QA: //  } else if (strnum == '2') {
        $('#liPaper_QA a').addClass('active');

        $('#divPaper_QA').addClass('active show');

        //主题论文关系；
        await this.Bind_Paper_QA();
        // $('#iframe_qaPdf').contents().find('#hid1IsQA_Tags').val(1);
        setTimeout(function () {
          pdf_SetClientType('QA');
        }, 1000);
        break;
      case enumSubViewPointTabs.Paper_Tags: //  } else if (strnum == '3') {
        $('#liPaper_Tags a').addClass('active');

        $('#Paper_Tags').addClass('active show');

        //主题论文关系；
        await this.Bind_Paper_Tags();
        setTimeout(function () {
          pdf_SetClientType('Tags');
        }, 1000);
        break;
      case enumSubViewPointTabs.Tea_QA: //    } else if (strnum == '4') {
        $('#liTea_QA a').addClass('active');

        $('#Tea_QA').addClass('active show');
        //主题论文关系；
        await this.Bind_Tea_QA();
        break;
      case enumSubViewPointTabs.TeaTest_QA: //    } else if (strnum == '5') {
        $('#liTeaTest_QA a').addClass('active');

        $('#TeaTest_QA').addClass('active show');
        //主题论文关系；
        await this.Bind_TeaTest_QA();
        break;
      default:
        await this.Bind_PaperContent();
        break;
    }
  }
  public CalcIframeHeight(): number {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return 0;
    const viewportHeight = window.innerHeight;

    const divHead = GetDivObjInDivObj(objLayOut, 'divHead');

    const divHead_H = divHead?.clientHeight || 0; // 使用 clientHeight 获取高度
    // console.log('divHead_H:', divHead_H);
    const divContent = GetDivObjInDivObj(objLayOut, 'divContent');
    const divContent_H = viewportHeight - divHead_H;
    divContent.style.height = `${divContent_H}px`;
    return divContent_H;
  }
  //绑定pdf_Ifame
  public async BindPdf() {
    try {
      //clsPrjInfoEN objPrjInfo = clsPrjInfoBL.GetObjByPrjID_Cache(strPrjId);

      const strPaperId = clsPrivateSessionStorage.paperId;

      const strWhereCond = ` 1=1 and paperId ='${strPaperId}'`;
      const responseText = await PaperAttachment_GetFirstObjAsync(strWhereCond);
      const objPaperAttachment = <clsPaperAttachmentEN>responseText;

      const divContent_H = this.CalcIframeHeight();
      console.log('divContent_H:', divContent_H);
      const currHostname = window.location.hostname;
      const pathName = clsSysPara4WebApi.spVirtualDirectory; // window.location.pathname;

      const currPort = window.location.port;
      console.log('currHostname:', currHostname);
      let strhtml = '';
      if (currHostname == 'localhost') {
        if (objPaperAttachment != null) {
          const strfilepath = `http://${currHostname}:${currPort}${pathName}${objPaperAttachment.filePath}`;
          console.log(strfilepath);
          //strhtml = `<iframe id='iframe_qaPdf' scrolling='auto' src='${strfilepath}' style="width:100%; height:${divContent_H}px; "></iframe>`;
          strhtml = `<iframe id='iframe_qaPdf' scrolling='auto' src='${pathName}pdf/qaPdf.html?zoom=1.1&file=${strfilepath}' style="width:100%; height:${divContent_H}px; "></iframe>`;
        } else {
          const strfilepath = `http://localhost:8090${pathName}pdffiles/AAA.pdf`;
          strhtml = `<iframe id='iframe_qaPdf' scrolling='auto' src='${strfilepath}' style="width:100%; height:${divContent_H}px;"></iframe>`;
        }
      } else {
        if (objPaperAttachment != null) {
          const strfilepath = GetAddressAndPort() + objPaperAttachment.filePath;
          strhtml = `<iframe id='iframe_qaPdf' scrolling='auto' src='${pathName}pdf/qaPdf.html?zoom=1.1&file=${strfilepath}' style="width:100%; height:${divContent_H}px; "></iframe>`;
        } else {
          const strfilepath = `http://localhost:8090${pathName}pdffiles/AAA.pdf`;
          strhtml = `<iframe id='iframe_qaPdf' scrolling='auto' src='${pathName}pdf/qaPdf.html?zoom=1.1&file=${strfilepath}' style="width:100%; height:${divContent_H}px;"></iframe>`;
        }
      }
      $('#leftPart').html(strhtml);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //绑定Paper_QA
  public async Bind_Paper_QA() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      const strPaperId = clsPrivateSessionStorage.paperId;
      const strQuestionsId = ReadTraining_pdf.questionsId;
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      const strPushId = GetInputValueInDivObj(divName, 'hidPushId');
      ReadTraining_pdf.SetPaperQaPara(strPaperId, strIdCurrEducls, strQuestionsId, strPushId);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //绑定Paper_Tags
  public async Bind_Paper_Tags() {
    try {
      const strPaperId = clsPrivateSessionStorage.paperId;
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      ReadTraining_pdf.SetPaperTagsPara(strPaperId, strIdCurrEducls);
      // const strhtml = `<iframe id='iframe_Paper_Tags'  frameborder='no' border='0' marginwidth='0' marginheight='0' scrolling='auto' allowtransparency='yes'  src='../InteractManage/Paper_Tags?paperId=${strPaperId}&idCurrEduCls=${strIdCurrEducls}' style='height:100%;width:100%; height:730px;'></iframe>`;
      // $('#Paper_Tags').html(strhtml);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //绑定Tea_QA
  public async Bind_Tea_QA() {
    try {
      const strPaperId = clsPrivateSessionStorage.paperId;
      const strQuestionsId = ReadTraining_pdf.questionsId;
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      ReadTraining_pdf.SetTeaQaPara(strPaperId, strIdCurrEducls, strQuestionsId, strTopicId);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //绑定Bind_TeaTest_QA
  public async Bind_TeaTest_QA() {
    try {
      const strPaperId = clsPrivateSessionStorage.paperId;
      const strQuestionsId = ReadTraining_pdf.questionsId;
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      ReadTraining_pdf.SetTeaTestQaPara(strPaperId, strIdCurrEducls, strQuestionsId, strTopicId);
      // let varLink = '';
      // if (strQuestionsId != '') {
      //   varLink = `../InteractManage/TeaTest_QA?paperId=${strPaperId}&idCurrEduCls=${strIdCurrEducls}&questionsId=${strQuestionsId}`;
      // } else {
      //   if (strTopicId != '') {
      //     varLink = `../InteractManage/TeaTest_QA?paperId=${strPaperId}&idCurrEduCls=${strIdCurrEducls}&topicId=${strTopicId}`;
      //   } else {
      //     varLink = `../InteractManage/TeaTest_QA?paperId=${strPaperId}&idCurrEduCls=${strIdCurrEducls}`;
      //   }
      // }
      // const strhtml = `<iframe id='iframe_TeaTest_QA' frameborder='no' border='0' marginwidth='0' marginheight='0' scrolling='auto' allowtransparency='yes' src='${varLink}' style='height:100%;width:100%; min-height:700px;'></iframe>`;
      // $('#TeaTest_QA').html(strhtml);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 为下拉框获取数据,从表:[SubViewpointType]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_SubViewpointTypeId(ddlSubViewpointTypeId: string, strWhereCond = '1 =1') {
    // console.log(strWhereCond);
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlSubViewpointTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlSubViewpointTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      //const responseText = SubViewpointType_GetObjLstAsync(strWhereCond).then((jsonData) => {
      const arrSubViewpointTypeObjLst = await SubViewpointType_GetObjLstCache();
      BindDdl_ObjLst(
        ddlSubViewpointTypeId,
        arrSubViewpointTypeObjLst,
        clsSubViewpointTypeEN.con_SubViewpointTypeId,
        clsSubViewpointTypeEN.con_SubViewpointTypeName,
        '子观点类型',
      );
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /// <summary>
  /// 为下拉框获取数据,从表:[ExplainType]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_ExplainTypeId(ddlExplainTypeId: string, strWhereCond = '1 =1') {
    // console.log(strWhereCond);
    const objDdl = document.getElementById(ddlExplainTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlExplainTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      //const responseText = ExplainType_GetObjLstAsync(strWhereCond).then((jsonData) => {
      const arrExplainTypeObjLst = await ExplainType_GetObjLstCache();
      BindDdl_ObjLst(
        ddlExplainTypeId,
        arrExplainTypeObjLst,
        clsExplainTypeEN.con_ExplainTypeId,
        clsExplainTypeEN.con_ExplainTypeName,
        '说明类型',
      );
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async Bind_PaperContent() {
    const strThisFuncName = this.Bind_PaperContent.name;

    //strWhereCond = " paperId = " + strPaperId;
    //const objvPaperReadWrite: clsvPaperReadWriteEN = new clsvPaperReadWriteEN;

    //const responseObjLst = await vPaperReadWrite_GetFirstObjAsync(strWhereCond).then((jsonData) => {
    //    objvPaperReadWrite = <clsvPaperReadWriteEN>jsonData;
    //});

    const strPaperId = clsPrivateSessionStorage.paperId;

    //const objvPaper: clsPaperEN = null;
    //objvPaper_Cond.SetCondFldValue(clsPaperEN.con_PaperId, strPaperId, "=");
    //const objvPaper: clsPaperEN = await vPaper_GetObjByPaperId_Cache(strPaperId, strIdCurrEducls);
    const objPaperEN = await Paper_GetFirstObjAsync(`paperId='${strPaperId}'`);
    if (objPaperEN == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objPaperENEx = PaperEx_CopyToEx(objPaperEN);
    PaperEx_FuncMapByFldName(clsPaperENEx.con_UpdUserName, objPaperENEx);
    PaperEx_FuncMapByFldName(clsPaperENEx.con_PaperTypeName, objPaperENEx);

    let strhtml = '';

    try {
      const strTitle = `${objPaperENEx.paperTitle}(作者:${objPaperENEx.author}-提交者:${objPaperENEx.updUserName})`;

      $('#spanPaperContent').html(strTitle);

      strhtml = '';
      //for (let i = 0; i < arrPaperExObjLst.length; i++) {

      strhtml += '<div class="main-w1 fl" ><dl class="detail-list dbpage" ><dd>';

      if (objPaperENEx.paperTypeId == '02') {
        strhtml += `<h6><a href="../GradEduEx/PaperDetail?paperId=${objPaperENEx.paperId}">${objPaperENEx.paperTitle}(${objPaperENEx.paperTypeName})</a></h6>`;
      } else {
        //自研论文
        strhtml += `<h6><a href="../GradEduEx/PaperDetail?paperId=${objPaperENEx.paperId}">${objPaperENEx.paperTitle}</a></h6>`;
      }

      strhtml += `<div class="baseinfo"><span><a href="javascript:void(0)">${objPaperENEx.author}</a></span><span><a href="javascript:void(0)">${objPaperENEx.literatureSources}</a></span>`;
      strhtml += `<span>${objPaperENEx.periodical}</span><em>${objPaperENEx.keyword}</em></div>`;
      strhtml += `<div class="abstract">${objPaperENEx.paperContent}</div>`;

      strhtml += '<div class="opts"><ul class="opts-count">';
      //const objUser = arrUsers.find(x => x.userId == objvPaper.updUser);
      //if (objUser != null) {
      //    strhtml += '<li>论文读写者:<em>' + objUser.userName + '</em></li>';
      //}
      strhtml += `<li>论文提交者:<em>${objPaperENEx.updUserName}</em></li>`;
      //strhtml += '<li>观点数:<em>' + pobjvPaperReadWriteEN.subVCount + '</em></li><li>教师分:<em>' + pobjvPaperReadWriteEN.teaCount + '</em></li>';

      strhtml += '<ul class="opts-btn">';
      // o1nclick=btnDownLoadFile_Click()
      if (objPaperENEx.attachmentCount > 0) {
        strhtml += `<li>${objPaperENEx.downloadCount}<a id="btnDownLoadFile" class="downloadlink icon-notlogged" href="javascript:void(0)" ><i></i><b>点击下载</b></a></li>`;
      } else {
        strhtml +=
          '<li><a id="btnDownLoadFile" class="downloadlink icon-notlogged_" href="javascript:void(0)" title="暂无下载文件"><i></i><b>无下载文件</b></a></li>';
      }

      strhtml += '</ul></div>';
      strhtml += '</dd></dl></div>';
      //}

      $('#tabwucPaperReadWrite').html(strhtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 
 根据关键字删除记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecordByWhere(strWhere: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);

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
      const strSubViewpointId = GetInputValueInDivObjN(divName, 'hidKeyId');
      const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
        clsPrivateSessionStorage.topicIdInTree,
      );
      //在修改时候，不管是否有附件数据被清除； 都需要执行附件添加功能
      //判断是否有返回的附件路径值
      //判断是否有返回的附件路径值
      if ((ReadTraining_pdf.uploadResponseData.isHasFile = true)) {
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

  //同步子观点到论文表
  public async SynSubV(strSubViewpointId: number) {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.SynSubV.name;

    const strPaperId = clsPrivateSessionStorage.paperId;
    //添加记录的同时并记录论文读写的教师评价数
    const strWhereCond = ` paperId='${strPaperId}'`;
    const intSubVCount = await PaperSubViewpoint_GetRecCountByCondAsync(strWhereCond);

    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strPaperId);
    objPaperEN.SetSubVCount(intSubVCount);

    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    const responseText = await Paper_UpdateRecordAsync(objPaperEN);
    const returnBool = !!responseText;
    if (returnBool == true) {
      console.log('统计论文子观点数量成功！');
      //刷新缓存
      PaperEx_ReFreshThisCacheByIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    } else {
      console.log('统计论文子观点数量失败！');
    }
    //添加记录的同时并记录论文读写的教师评价数

    //添加成功后把数据同步到总表
    // const strSubViewpointId = GetInputValueInDivObj(divName, 'hidKeyId');
    const returnBool2 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
      strSubViewpointId.toString(),
      '03',
      '1',
      clsPubLocalStorage.idCurrEduCls,
    );

    if (returnBool2 == true) {
      console.log('论文子观点数据总表同步成功；');
    } else {
      console.log('论文子观点数据总表同步失败；');
    }
  }

  public CombinevPaperSubViewpointCondition2(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.subViewpointTypeId_q != '' && this.subViewpointTypeId_q != '0') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_SubViewpointTypeId} = '${this.subViewpointTypeId_q}'`;
      }

      strWhereCond += ' order by orderNum Asc';
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperSubViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombinevPaperSubViewpointCondition3(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1=1 ';

    const strPaperId = clsPrivateSessionStorage.paperId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.sectionId_q != '' && this.sectionId_q != '0') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_SectionId} = '${this.sectionId_q}'`;
      }
      //if (strPaperRWId != "") {
      //    strWhereCond += ` And ${clsPaperReadWriteEN.con_PaperRWId} = '${strPaperRWId}'`;
      //}
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_PaperId} = '${strPaperId}'`;
      }

      if (this.subViewpointTypeId_q != '' && this.subViewpointTypeId_q != '0') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_SubViewpointTypeId} = '${this.subViewpointTypeId_q}'`;
      }

      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      if (
        strRoleId == enumQxRoles.System_Admin_00620001 ||
        strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        //$("#btnDelRecord").show();
      } else if (strRoleId == '00620002') {
        //可以查看所有；
      } else {
        if (this.readWriteTypeId == '01') {
          strWhereCond += ` And updUser = '${strUserId}'`;
        }

        //学生00620003
        //只能查看自己的数据；或公开的数据；
        //strWhereCond += ` And ${clsvSubViewpointEN.con_UpdUser} = '${strUserId}'`;

        //strWhereCond += ` And updUser = '${objvUserRoleRelation.userId}'`;
      }

      //if (this.ExplainTypeId_q != "" && this.ExplainTypeId_q != "0") {
      //    strWhereCond += ` And ${clsvPaperSubViewpointEN.con_ExplainTypeId} = '${this.ExplainTypeId_q}'`;
      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperSubViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombinevPaperSubViewpointCondition4(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const divName = this.getDivName(enumDivType.LayOut_01);

    const strPaperId = clsPrivateSessionStorage.paperId;
    const strUserId = userStore.getUserId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.sectionId_q != '' && this.sectionId_q != '0') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_SectionId} = '${this.sectionId_q}'`;
      }
      //if (strPaperRWId != "") {
      //    strWhereCond += ` And ${clsPaperReadWriteEN.con_PaperRWId} = '${strPaperRWId}'`;
      //}
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_PaperId} = '${strPaperId}'`;
      }

      if (this.readWriteTypeId == '01') {
        strWhereCond += ` And updUser = '${strUserId}'`;
      }

      strWhereCond += ' order by orderNum Asc';
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperSubViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //public CombinevPaperSubViewpointCondition5(): string {
  //    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //    //例如 1 = 1 && userName = '张三'
  //    strWhereCond: string = " 1 = 1 ";
  //    return strWhereCond;
  //}
  public async BindGv_vPaperSubViewpoint() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    const strUserId = userStore.getUserId;

    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

    const strWhereCond2 = this.CombinevPaperSubViewpointCondition3();
    let strWhereCond3 = this.CombinevPaperSubViewpointCondition3();
    if (GetInputValueInDivObj(divName, 'hidSortPsv') == '1') {
      strWhereCond3 += ' order by paperPageNum Asc';
    } else {
      strWhereCond3 += ' order by updDate Desc';
    }
    //strWhereCond3 += this.CombinevPaperSubViewpointCondition3();
    // const strWhereCond4 = this.CombinevPaperSubViewpointCondition4();

    const strPaperId = clsPrivateSessionStorage.paperId;
    const strWhere_Attachment = ` 1=1 and ${clsPaperSubAttachmentEN.con_SubViewpointId} in (select ${clsPaperSubAttachmentEN.con_SubViewpointId} From ${clsPaperSubViewpointEN._CurrTabName} where PaperId ='${strPaperId}')`;

    const strWhereCond6 = ` 1 =1 and updUser='${strUserId}' and voteTypeId='02' `;
    const strVoteType = '02';
    // const strPubParentId = this.questionsId;

    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    // const arrSectionObjLst: Array<clsSectionEN> = [];

    let arrvPaperSubVTypeNumObjLst: Array<clsvPaperSubViewpointEN> = [];

    let arrvPaperSubViewpointObjLst: Array<clsvPaperSubViewpointEN> = [];

    let arrvPaperSubViewpointObjLst2: Array<clsvPaperSubViewpointEN> = [];

    try {
      //const responseText1 = Section_GetObjLstAsync(strWhereCond4).then((jsonData) => {
      //    arrSectionObjLst = <Array<clsSectionEN>>jsonData;

      //});

      arrvPaperSubVTypeNumObjLst = await vPaperSubViewpointEx_GetSubViewpointTypeNumObjLstAsync(
        strWhereCond2,
      );

      arrvPaperSubViewpointObjLst2 = await vPaperSubViewpoint_GetObjLstAsync(strWhereCond3);

      //const responseRecCount6 = await vPaperSubViewpointLikeLog_GetObjLstAsync(strWhereCond6).then((jsonData) => {
      //    arrvPaperSubViewpointLikeLogObjLst = <Array<clsvPaperSubViewpointLikeLogEN>>jsonData;
      //});
      //const responseRecCount7 = await vSysVote_GetObjLstAsync(strWhereCond6).then((jsonData) => {
      //    arrvPaperSubViewpointLikeLogObjLst = <Array<clsvSysVoteEN>>jsonData;
      //});

      //获取用户缓存数据
      const strWhere_User = '1=1';

      let strhtml = '';
      let cateid = 0;
      let cateid_ = 0;
      let intJ = 0;
      const fid = '';
      for (let j = 0; j < arrvPaperSubVTypeNumObjLst.length; j++) {
        cateid++;
        intJ++;
        // strIdCurrEduclsfid = 0;
        const strsubTypeId = arrvPaperSubVTypeNumObjLst[j].subViewpointTypeId;
        //先创建子模块类型

        strhtml += `<tr cate-id="${cateid}" fid="${fid}"><td>`;

        strhtml += `<div style="float:left;font-size:22px;font-weight:bold;">${intJ}.${arrvPaperSubVTypeNumObjLst[j].subViewpointTypeName}</div>`;
        strhtml += `<span style="float:left;" class="badge text-bg-info" id="SubVTypeCount">${arrvPaperSubVTypeNumObjLst[j].memo}</span>`;

        strhtml += '<div style="float:right;">';

        if (this.readWriteTypeId == '01') {
          if (GetInputValueInDivObj(divName, 'hidIsSubmit') != 'true') {
            // o1nclick=btnAddNewRecord_Click("${strsubTypeId}")
            strhtml += `<button id="btnAddNewRecordBySubType" keyId="${strsubTypeId}" title="添加子观点" class="layui-btn layui-btn-info layui-btn-xs" >添加<i class="layui-icon"></i></button>`;
          }
        }
        strhtml += '</div>';
        strhtml += '</td></tr>';
        //<td>' + cateid + ' </td>
        //strhtml += '<td class="td-manage"></td>';

        //子类型数据

        cateid_ = cateid;
        let intK = 0;

        arrvPaperSubViewpointObjLst = arrvPaperSubViewpointObjLst2.filter(
          (x) => x.subViewpointTypeId == strsubTypeId,
        );

        for (let k = 0; k < arrvPaperSubViewpointObjLst.length; k++) {
          const objvPaperSubViewpoint = arrvPaperSubViewpointObjLst[k];

          //先判断子模块类型数据ID和子观点知否匹配；
          //if (strsubTypeId == objvPaperSubViewpoint.subViewpointTypeId) {
          cateid++;
          intK++;
          const strKeyId = `${objvPaperSubViewpoint.paperPageNum}|${objvPaperSubViewpoint.explainContent}`;
          strhtml += `<tr id="trbtnUpdatePaperPageNum" keyId ="${strKeyId}" cate-id="${cateid}" fid="${cateid_}" ><td>`;
          const strDetailShow = await vPaperSubViewpointEx_DetailShow(
            objvPaperSubViewpoint,
            intK,
            this.readWriteTypeId,
            strVoteType,
          );
          strhtml += strDetailShow;

          strhtml += '</td></tr>';

          //strhtml += '<td class="td-manage"></td>';
        }
      }
      //拼接；
      $('#tbList').html(strhtml);

      const tbList = GetTBodyObjInDivObj(this.divLayout, 'tbList');
      tbList.innerHTML = strhtml;
      if (arrvPaperSubViewpointObjLst.length > 0) {
        this.SetEventForTbList();
      }
      //调用拼接方法
      //this.GetHtmlByDataSource();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public SetEventForTbList() {
    {
      const arrAAddVote = GetAObjLstInDivObj(this.divLayout, 'btnAddVote');
      for (const btnAddVote of arrAAddVote) {
        if (btnAddVote != null) {
          const strKeyId = btnAddVote.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = { strSubViewpointId: arr[0], updUser: arr[1] };

          (function (objData: any) {
            btnAddVote.onclick = function () {
              ReadTraining_pdf.vuebtn_Click('AddVote', objData);
            };
          })(objData);
        }
      }
    }

    {
      const arrBtnSysComment = GetButtonObjLstInDivObjN(this.divLayout, 'btnSysComment');
      for (const btnSysComment of arrBtnSysComment) {
        if (btnSysComment != null) {
          const strKeyId = btnSysComment.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 4) continue;
          const objData = { keyId: arr[0], type: arr[1], user: arr[2], pubParentId: arr[3] };

          (function (objData: any) {
            btnSysComment.onclick = function () {
              ReadTraining_pdf.vuebtn_Click('SysComment', objData);
            };
          })(objData);
        }
      }
    }
    {
      const arrBtnDelSubViewPoint = GetButtonObjLstInDivObj(this.divLayout, 'btnDelSubViewPoint');
      for (const btnDelSubViewPoint of arrBtnDelSubViewPoint) {
        if (btnDelSubViewPoint != null) {
          const strKeyId = btnDelSubViewPoint.getAttribute('keyid');
          if (strKeyId != null) {
            (function (strKeyId: string) {
              btnDelSubViewPoint.onclick = function () {
                ReadTraining_pdf.vuebtn_Click('DelSubViewPoint', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }
    //console.log('btnDelSubViewPoint:', btnDelSubViewPoint);
    {
      const arrBtnUpdateSubViewPoint = GetButtonObjLstInDivObj(
        this.divLayout,
        'btnUpdateSubViewPoint',
      );
      for (const btnUpdateSubViewPoint of arrBtnUpdateSubViewPoint) {
        if (btnUpdateSubViewPoint != null) {
          const strKeyId = btnUpdateSubViewPoint.getAttribute('keyid');
          if (strKeyId != null) {
            (function (strKeyId: string) {
              btnUpdateSubViewPoint.onclick = function () {
                ReadTraining_pdf.vuebtn_Click('UpdateSubViewPoint', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }
    {
      const arrTrbtnUpdatePaperPageNum = getTrObjLstInDivObj(
        this.divLayout,
        'trbtnUpdatePaperPageNum',
      );
      for (const trbtnUpdatePaperPageNum of arrTrbtnUpdatePaperPageNum) {
        if (trbtnUpdatePaperPageNum != null) {
          const strKeyId = trbtnUpdatePaperPageNum.getAttribute('keyid');
          if (strKeyId != null) {
            (function (strKeyId: string) {
              trbtnUpdatePaperPageNum.onclick = function () {
                ReadTraining_pdf.vuebtn_Click('UpdatePaperPageNum', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }

    {
      const arrBtnAddNewRecordBySubType = GetButtonObjLstInDivObj(
        this.divLayout,
        'btnAddNewRecordBySubType',
      );
      for (const btnAddNewRecordBySubType of arrBtnAddNewRecordBySubType) {
        if (btnAddNewRecordBySubType != null) {
          const strKeyId = btnAddNewRecordBySubType.getAttribute('keyid');
          if (strKeyId != null) {
            (function (strKeyId: string) {
              btnAddNewRecordBySubType.onclick = function () {
                ReadTraining_pdf.vuebtn_Click('AddNewRecordBySubType', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }
  }
  /*查询*/
  public async btnQueryEx_Click() {
    try {
      await this.BindGv_vPaperSubViewpoint();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*
   重序
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
   */
  public async btnReOrder_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (this.PreCheck4Order() == false) return;
    const strSubViewpointTypeId: string = GetInputValueInDivObj(divName, 'hidSubViewpointTypeId');
    const strPaperRWId: string = clsPrivateSessionStorage.paperRWId;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        subViewpointTypeId: strSubViewpointTypeId,
        paperRWId: strPaperRWId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await PaperSubViewpoint_ReOrderAsync(objOrderByData);
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
      alert(strMsg);
      return;
    }
    await this.BindGv_vPaperSubViewpoint();
  }

  /*
    上移
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
    */
  public async btnUpMove_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (GetInputValueInDivObj(divName, 'hidOrderNum') == '0') {
      await this.btnReOrder_Click();
    }
    if (this.PreCheck4Order() == false) return;
    const strSubViewpointTypeId: string = GetInputValueInDivObj(divName, 'hidSubViewpointTypeId');
    const strPaperRWId: string = clsPrivateSessionStorage.paperRWId;
    const arrKeyIds = GetInputValueInDivObj(divName, 'hidKeyId') as any;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        subViewpointTypeId: strSubViewpointTypeId,
        paperRWId: strPaperRWId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await PaperSubViewpoint_UpMoveAsync(objOrderByData);
    } catch (e: any) {
      const strMsg = `上1移记录出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await this.BindGv_vPaperSubViewpoint();

    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    //arrKeyIds.forEach((e) => clsCommonFunc4Web.SetCkechedItem4KeyId(strListDiv, e));
  }

  /*
    下移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
    */
  public async btnDownMove_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (GetInputValueInDivObj(divName, 'hidOrderNum') == '0') {
      await this.btnReOrder_Click();
    }
    if (this.PreCheck4Order() == false) return;
    const strSubViewpointTypeId: string = GetInputValueInDivObj(divName, 'hidSubViewpointTypeId');
    const strPaperRWId: string = clsPrivateSessionStorage.paperRWId;
    const arrKeyIds = GetInputValueInDivObj(divName, 'hidKeyId') as any;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        subViewpointTypeId: strSubViewpointTypeId,
        paperRWId: strPaperRWId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await PaperSubViewpoint_DownMoveAsync(objOrderByData);
    } catch (e: any) {
      const strMsg = `下移记录出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await this.BindGv_vPaperSubViewpoint();
    //await this.BindGv_vPaperSubViewpoint();
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    //arrKeyIds.forEach((e) => clsCommonFunc4Web.SetCkechedItem4KeyId(strListDiv, e));
  }

  /* 在数据表里修改排序记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecordInTab_Click)
  */
  public async btnUpdateOrderNum_Click(strKeyId: number, strOrderNum: number) {
    const strThisFuncName = this.btnUpdateOrderNum_Click.name;
    //const lngKeyId = Number(strKeyId);

    const objPaperSubViewpointEN: clsPaperSubViewpointEN = new clsPaperSubViewpointEN();
    objPaperSubViewpointEN.SetSubViewpointId(strKeyId);
    objPaperSubViewpointEN.SetOrderNum(Number($(`#${strOrderNum}`).val()));
    objPaperSubViewpointEN.sfUpdFldSetStr = objPaperSubViewpointEN.updFldString; //设置哪些字段被修改(脏字段)

    if (
      objPaperSubViewpointEN.subViewpointId == 0 ||
      objPaperSubViewpointEN.subViewpointId == undefined
    ) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await PaperSubViewpoint_UpdateRecordAsync(objPaperSubViewpointEN);
      if (returnBool == true) {
        //strIdCurrEduclsstrInfo: string = `修改排序号成功!`;
        //
        ////显示信息框
        //alert(strInfo);
        this.BindGv_vPaperSubViewpoint();
      } else {
        //strIdCurrEduclsstrInfo: string = `修改排序号不成功!`;
        //
        ////显示信息框
        //alert(strInfo);
        //console.log("完成UpdateRecordSave");
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
    }
  }

  //添加的时候默认选择类型名称不需要了
  //public async selectTitle_Click() {

  //    try {

  //        const objSubViewpointType: clsSubViewpointTypeEN;
  //        strWhereCond = " subViewpointTypeId='" + this.subViewpointTypeId + "'";
  //        this.recCount = await SubViewpointType_GetFirstObjAsync(strWhereCond).then((jsonData) => {
  //            objSubViewpointType = <clsSubViewpointTypeEN>jsonData;
  //            this.rWTitle = objSubViewpointType.defaTitle;

  //        });
  //    }
  //    catch (e:any) {
  //        console.error('catch(e)=');
  //        console.error(e);
  //        strIdCurrEduclsstrMsg: string = `获取记录不成功,${e}.`;
  //        alert(strMsg);
  //    }
  //}

  //添加点赞
  public async btnAddVote_Click(strSubViewpointId: number, strUserId: string) {
    const strThisFuncName = this.btnAddVote_Click.name;

    //this.DivName = "divAddNewRecordSave";
    const objSysVoteEN: clsSysVoteEN = new clsSysVoteEN();
    objSysVoteEN.SetTableKey(strSubViewpointId.toString());
    objSysVoteEN.SetVoteTypeId('02');
    objSysVoteEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objSysVoteEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    objSysVoteEN.SetLikedUserId(strUserId); //被点赞用户
    objSysVoteEN.SetPubParentId(clsPrivateSessionStorage.paperId);
    objSysVoteEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);

    const strWhereCond = ` 1 =1 and updUser='${userStore.getUserId}' and tableKey='${strSubViewpointId}'`;
    try {
      const responseText = await SysVote_IsExistRecordAsync(strWhereCond);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `您已经点赞过这条论文了，请给其他论文点赞一下吧！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await SysVote_AddNewRecordAsync(objSysVoteEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1=1 and voteTypeId='02' and tableKey='${strSubViewpointId}'`;
        const intVoteCount = await SysVote_GetRecCountByCondAsync(strWhereCond2);

        const objPaperSubViewpointEN: clsPaperSubViewpointEN = new clsPaperSubViewpointEN();
        objPaperSubViewpointEN.SetSubViewpointId(strSubViewpointId);
        objPaperSubViewpointEN.SetOkCount(intVoteCount);

        objPaperSubViewpointEN.sfUpdFldSetStr = objPaperSubViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
        if (
          objPaperSubViewpointEN.subViewpointId == 0 ||
          objPaperSubViewpointEN.subViewpointId == undefined
        ) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        PaperSubViewpoint_UpdateRecordAsync(objPaperSubViewpointEN).then((jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == true) {
            //await this.BindGv_vPaper();

            this.BindGv_vPaperSubViewpoint();
          } else {
            const strInfo = `点赞不成功!`;
            alert(strInfo);
            console.log('点赞不成功');
          }
        });
      } else {
        const strInfo = `点赞不成功!`;

        //显示信息框
        alert(strInfo);
        //this.DetailRecord();
        //this.BindGv_vPaperSubViewpoint();
      }

      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `点赞不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  //是否显示
  public async btnIsDisplay_Click() {
    if (this.IsDisplay == '显示论文') {
      this.IsDisplay = '隐藏论文';
      $('#tabwucPaperReadWrite').show();
    } else if (this.IsDisplay == '隐藏论文') {
      this.IsDisplay = '显示论文';
      $('#tabwucPaperReadWrite').hide();
    }
  }

  /* 
    在数据表里删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   */
  public async btnDelRecordInTab_Click(strKeyId: number) {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      if (strKeyId == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      //添加成功后把数据同步到总表
      const strSubViewpointId = strKeyId; // GetInputValueInDivObj(divName, 'hidKeyId');

      //删除前先查询是否有评论数据，如果存在则提示必须先删除评论数据才能执行子观点删除；
      const strWhere = `1=1 And commentTypeId='02' And tableKey='${strSubViewpointId}'`;
      let returnBool3 = await SysComment_IsExistRecordAsync(strWhere);

      if (returnBool3 == true) {
        console.log('子观点数据存在评论不可删除');
        alert('请先删除该子观点评论数据！');
        return '';
      } else {
        returnBool3 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
          strSubViewpointId.toString(),
          '03',
          '3',
          clsPubLocalStorage.idCurrEduCls,
        );

        if (returnBool3 == true) {
          console.log('论文子观点数据总表删除成功；');
        } else {
          console.log('论文子观点数据总表删除失败；');
        }

        const lngKeyId = Number(strKeyId);
        await this.DelRecord(lngKeyId);
      }

      await this.BindGv_vPaperSubViewpoint();
      await this.SynSubV(Number(strKeyId));
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  /* 
    根据关键字删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   */
  public async DelRecord(strSubViewpointId: number) {
    try {
      const returnInt = await PaperSubViewpoint_DelRecordAsync(strSubViewpointId);
      if (returnInt > 0) {
        //删除子观点时，需要同时去删除附件；
        //根据Id删除附件
        const strwhere = `subViewpointId ='${strSubViewpointId}'`;
        this.DelAttactmentRecordByWhere(strwhere);

        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
根据关键字删除记录 附件
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelAttactmentRecordByWhere(strWhere: string) {
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

      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //下载文件
  public btnDownLoadFile_Click() {
    this.GetPaperAttachmentRecord();
    this.btnAddDownload_Click();
  }

  public GetPaperAttachmentRecord() {
    const strPapeId = clsPrivateSessionStorage.paperId;

    const strWhereCond = ` ${clsPaperAttachmentEN.con_PaperId} = '${strPapeId}'`;
    let arrPaperAttachmentObjLst: Array<clsPaperAttachmentEN> = [];
    try {
      PaperAttachment_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrPaperAttachmentObjLst = <Array<clsPaperAttachmentEN>>jsonData;
        for (let i = 0; i < arrPaperAttachmentObjLst.length; i++) {
          const strfilepath = GetAddressAndPort() + arrPaperAttachmentObjLst[i].filePath;
          doDownLoad(strfilepath, arrPaperAttachmentObjLst[i].paperAttachmentName);
        }
      });
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  //添加下载量
  public async btnAddDownload_Click() {
    //this.DivName = "divAddNewRecordSave";
    const objPaperDownloadLogEN: clsPaperDownloadLogEN = new clsPaperDownloadLogEN();

    objPaperDownloadLogEN.SetPaperId(clsPrivateSessionStorage.paperId);
    objPaperDownloadLogEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objPaperDownloadLogEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    // const strWhereCond = ` 1 =1 and updUser='${objPaperDownloadLogEN.updUser}' and paperId=${objPaperDownloadLogEN.paperId}`;
    try {
      //const responseText = await PaperDownloadLog_IsExistRecordAsync(strWhereCond);
      //strIdCurrEduclsbolIsExist: boolean = responseText;
      //if (bolIsExist == true) {
      //    //strIdCurrEduclsstrMsg: string = `您已经收藏过这条论文了！`;
      //    //alert(strMsg);
      //    return responseText;//一定要有一个返回值，否则会出错！
      //}

      const responseText2 = await PaperDownloadLog_AddNewRecordAsync(objPaperDownloadLogEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        //strIdCurrEduclsstrInfo: string = `收藏成功!`;
        //
        ////显示信息框
        //alert(strInfo);
        //this.BindGv_vPaperSubViewpoint();
      } else {
        const strInfo = `添加下载量不成功!`;

        //显示信息框
        alert(strInfo);
        //this.BindGv_vPaperSubViewpoint();
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加下载量不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  /// <summary>
  /// 把Html控件集合转换成Array列表
  /// (AutoGCLib.WA_ViewUTScriptCS_TS4TypeScript:Gen_WApi_Ts_GetArray)
  /// </summary>
  /// <returns></returns>
  public GetArray(arr: any): Array<HTMLElement> {
    const arrLst: Array<HTMLElement> = new Array<HTMLElement>();
    for (let i = 0; i < arr.length; i++) {
      const chk: HTMLElement = arr[i]; // as HTMLElement;
      arrLst.push(chk);
    }
    return arrLst;
  }

  //添加高亮
  public btnUpdatePaperPageNum_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    this.RemoveSelect();
    const objLst = document.getElementsByTagName('span');
    //strIdCurrEduclsstrStartName: string = "400%";
    const arrElement: Array<HTMLElement> = this.GetArray(objLst) as Array<HTMLElement>;
    //let arrSpan
    const arrFind: Array<HTMLSpanElement> = arrElement as Array<HTMLSpanElement>;
    //let arrFind: Array<HTMLSpanElement> = arrSpan.filter(x => x.id.indexOf(strStartName) > -1);

    const arrWord: Array<string> = arrFind.map((x) => x.innerText);

    let strWord = arrWord.join('');
    const intWord = strWord.indexOf('400%');
    strWord = strWord.substring(intWord);

    const strFindText = GetInputValueInDivObj(divName, 'hidExplainContent');
    let intStart = strWord.indexOf(strFindText);
    if (intStart > -1) {
      let strInnerText = arrFind[intStart].innerText;
      let strCurrWord = strWord.substring(0, 1);
      // const intWordIndex = 0;
      const bolFind = false;
      let intCompareIndex = 0;
      while (bolFind == false) {
        strInnerText = arrFind[intStart + intCompareIndex].innerText;
        strCurrWord = strFindText.substring(intCompareIndex, intCompareIndex + 1);
        console.log(`${strInnerText}--${strCurrWord}`);
        if (strInnerText == strCurrWord) {
          intCompareIndex++;
          if (intCompareIndex >= strFindText.length) break;
          continue;
        } else {
          intStart++;
          intCompareIndex = 0;
          if (intStart > arrFind.length - 2) {
            break;
          }
        }

        //                intStart++;
      }
      const intLen = strFindText.length;
      const intEnd = intStart + intLen;
      const arrSpan_Sel: Array<HTMLSpanElement> = arrFind.slice(intStart, intEnd);
      arrSpan_Sel.forEach((x) => {
        const strWord = x.innerText;
        const objSpan_New: HTMLSpanElement = document.createElement('span');
        objSpan_New.className = 'text-span';
        objSpan_New.innerText = strWord;
        x.innerHTML = '';
        x.appendChild(objSpan_New);
      });
    }
    //let divResult: HTMLDivElement = document.getElementById("divResult") as HTMLDivElement;

    //divResult.innerText = strWord;
  }

  //清除高亮
  public RemoveSelect() {
    const objLst = document.getElementsByTagName('span');
    //strIdCurrEduclsstrStartName: string = "divEditFldComparison";
    const arrElement: Array<HTMLElement> = this.GetArray(objLst) as Array<HTMLElement>;
    const arrSpan: Array<HTMLSpanElement> = arrElement as Array<HTMLSpanElement>;
    const arrSpan_Sel: Array<HTMLSpanElement> = arrSpan.filter((x) => x.className == 'text-span');

    arrSpan_Sel.forEach((x) => {
      const strWord = x.innerText;
      const objSpan_Parent = x.parentNode as HTMLSpanElement;
      objSpan_Parent.innerHTML = strWord;
    });
  }

  /*
   * 设置上传文件
   */
  public set Uploadfile(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtUploadfile', value);
  }
  /*
   * 获取上传文件
   */
  public get Uploadfile(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUploadfile');
  }

  // /*
  //* 设置页码
  //*/
  // public set paperPageNum(value: number) {
  //     $("#txtPaperPageNum").val(value);
  // }
  // /*
  // * 获取页码
  // */
  // public get paperPageNum(): number {
  //     return $("#txtPaperPageNum").val();
  // }

  // /*
  //* 设置行号
  //*/
  // public set PaperLineNum(value: number) {
  //     $("#txtPaperLineNum").val(value);
  // }
  // /*
  // * 获取行号
  // */
  // public get PaperLineNum(): number {
  //     return $("#txtPaperLineNum").val();
  // }

  /*
   * 设置是否隐藏显示
   */
  public set IsDisplay(value: string) {
    $('#btnIsDisplay').html(value);
  }
  /*
   * 获取是否隐藏显示
   */
  public get IsDisplay(): string {
    return $('#btnIsDisplay').html();
  }

  /*
   * 分享
   */
  public set shareId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlShareId', value);
  }
  /*
   * 分享
   */
  public get shareId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlShareId');
  }
  /*
   * 观点态度
   */
  public set attitudesId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlAttitudesId', value);
  }
  /*
   * 观点态度Id
   */
  public get attitudesId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlAttitudesId');
  }

  /******************************************************************iFrame子页面控件******************************************************/

  /*
   * Pdf内容
   */
  public set pdfContent(value: string) {
    //$("#hidPdfContent").val(value);

    set_pdfContent('iframe_qaPdf', 'hidPdfContent', value);
  }
  /*
   * Pdf内容
   */
  public get pdfContent(): string {
    //return $("#hidPdfContent").val();

    return get_pdfContent('iframe_qaPdf', 'hidPdfContent');
  }

  /*
   * Pdf页码
   */
  public set pdfPageNum(value: number) {
    //$("#hidPdfPageNum").val(value);
    // SetInputValueInDivObj(divName, 'iframe_qaPdf').contents().find('#hidPdfPageNum', value);
    set_pdfPageNum('iframe_qaPdf', 'hidPdfPageNum', value);
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

  /*
   * PdfTop
   */
  public set page_top(value: number) {
    //$("#hidPdfPageNum").val(value);
    // SetInputValueInDivObj(divName, 'iframe_qaPdf').contents().find('#page_top', value);
    set_page_top('iframe_qaPdf', 'page_top', value);
  }
  /*
   * PdfTop
   */
  public get page_top(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //return $("#hidPdfPageNum").val();
    const strValue = GetInputValueInDivObjN(divName, 'page_top');
    // return GetInputValueInDivObj(divName, 'iframe_qaPdf').contents().find('#page_top');
    return strValue;
  }

  /*
   * page_cache
   */
  public set page_cache(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //$("#hidPdfPageNum").val(value);
    //  SetInputValueInDivObj(divName, 'iframe_qaPdf').contents().find('#page_cache', value);
    SetInputValueInDivObj(divName, 'page_cache', value);
  }
  /*
   * page_cache
   */
  public get page_cache(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //return $("#hidPdfPageNum").val();
    // return GetInputValueInDivObj(divName, 'iframe_qaPdf').contents().find('#page_cache');
    const strValue = GetInputValueInDivObj(divName, 'page_cache');
    return strValue;
  }

  /*
   * pdf_zoom
   */
  public set pdf_zoom(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //$("#hidPdfPageNum").val(value);
    // SetInputValueInDivObj(divName, 'iframe_qaPdf').contents().find('#pdf_zoom', value);
    SetInputValueInDivObj(divName, 'pdf_zoom', value);
  }
  /*
   * pdf_zoom
   */
  public get pdf_zoom(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //return $("#hidPdfPageNum").val();
    // return GetInputValueInDivObj(divName, 'iframe_qaPdf').contents().find('#pdf_zoom');
    const strValue = GetInputValueInDivObj(divName, 'pdf_zoom');
    return strValue;
  }

  /*
   * pdfDiv_top
   */
  public set pdfDiv_top(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //$("#hidPdfPageNum").val(value);
    // SetInputValueInDivObj(divName, 'iframe_qaPdf').contents().find('#pdfDiv_top', value);
    SetInputValueInDivObj(divName, 'pdfDiv_top', value);
  }
  /*
   * pdfDiv_top
   */
  public get pdfDiv_top(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //return $("#hidPdfPageNum").val();
    // return GetInputValueInDivObj(divName, 'iframe_qaPdf').contents().find('#pdfDiv_top');
    const strValue = GetInputValueInDivObj(divName, 'pdfDiv_top');
    return strValue;
  }

  /*
   * pdfDiv_left
   */
  public set PdfPageCache(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //$("#hidPdfPageNum").val(value);
    //    SetInputValueInDivObj(divName, 'iframe_qaPdf').contents().find('#pdfDiv_left', value);
    SetInputValueInDivObj(divName, 'pdfDiv_left', value);
  }
  /*
   * page_cache
   */
  public get pdfDiv_left(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //return $("#hidPdfPageNum").val();
    // return GetInputValueInDivObj(divName, 'iframe_qaPdf').contents().find('#pdfDiv_left');
    const strValue = GetInputValueInDivObj(divName, 'pdfDiv_left');
    return strValue;
  }

  /*
   * 教学班ID
   */
  public set IdCurrEduCls(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidIdCurrEduCls', value);
  }
  /*
   * 教学班
   */
  public get IdCurrEduCls(): string {
    return clsPubLocalStorage.idCurrEduCls;
  }
  public get readWriteTypeId(): string {
    return ReadTraining_pdf.GetPropValue('readWriteTypeId');
  }
  /**
   * 这是pyf自己添加进去的
   * @returns
   */
  public async btnAddLikeLog_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //this.DivName = "divAddNewRecordSave";
    const objViewpointLikeLogEN: clsViewpointLikeLogEN = new clsViewpointLikeLogEN();

    //this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);

    objViewpointLikeLogEN.SetViewpointId(GetInputValueInDivObj(divName, 'hidViewpointId'));
    objViewpointLikeLogEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objViewpointLikeLogEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
    const strWhereCond = ` 1 =1 and updUser='${objViewpointLikeLogEN.updUserId}' and viewpointId=${objViewpointLikeLogEN.viewpointId}`;
    try {
      const responseText = await ViewpointLikeLog_IsExistRecordAsync(strWhereCond);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `您已经点赞过这条观点了，请给其他观点点赞一下吧！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await ViewpointLikeLog_AddNewRecordAsync(objViewpointLikeLogEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        // await this.BindGv_AllTopicRela();
      } else {
        const strInfo = `点赞不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `点赞不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }
  //教学班教师
  public static async EduCls_Click(
    divLayout: HTMLDivElement,
    strIdCurrEduCls: string,
    strEduName: string,
    strTypeID: string,
  ) {
    //$("#hidIdCurrEduCls").val(strkey);

    SetSpanHtmlInDivObj(divLayout, 'spnEduClsName', strEduName);
    const strCourseId = await CurrEduClsEx_GetCourseIdByIdCurrEduCls(strIdCurrEduCls);
    if (IsNullOrEmpty(strCourseId) == false) {
      clsPubLocalStorage.courseId = strCourseId;
    }
    clsPubLocalStorage.idCurrEduCls = strIdCurrEduCls;
    clsPubLocalStorage.eduClsTypeId = strTypeID;
    clsPubLocalStorage.eduClsName = strEduName;

    // $('#Paper_iframe')[0].contentWindow.btnQuery_Click();
    const iframeElement = $('#Paper_iframe')[0] as HTMLIFrameElement;
    if (iframeElement != null) {
      if (iframeElement.contentWindow != null)
        (iframeElement.contentWindow as any).btnQuery_Click();
    }
    message.success('已切换教学班！');
  }
}
