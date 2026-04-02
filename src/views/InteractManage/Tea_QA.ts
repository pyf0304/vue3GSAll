import { Ref } from 'vue';
import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsPublicParagraph } from '@/ts/FunClass/clsPublicParagraph';
import { gs_AnswerCountEx_AddNewRecordWithMaxIdAsync } from '@/ts/L3ForWApiEx/GradEduTools/clsgs_AnswerCountExWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import {
  qa_AnswerEx_DelRecordAsyncEx,
  qa_AnswerEx_GetQuestionIdAnswerTypeIdByAnswerIdAsyncEx,
} from '@/ts/L3ForWApiEx/InteractManage/clsqa_AnswerExWApi';
import {
  vqa_AnswerEx_Getvqa_AnswerTopicIdNumObjLstAsync,
  vqa_AnswerEx_Getvqa_AnswerUserNumObjLstAsync,
} from '@/ts/L3ForWApiEx/InteractManage/clsvqa_AnswerExWApi';
import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import { clsvCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsgs_AnswerCountEN } from '@/ts/L0Entity/GradEduTools/clsgs_AnswerCountEN';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { clsqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsqa_AnswerEN';
import { clsqa_AnswerVerEN } from '@/ts/L0Entity/InteractManage/clsqa_AnswerVerEN';
import { clsqa_PushEN } from '@/ts/L0Entity/InteractManage/clsqa_PushEN';
import { clsqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsqa_QuestionsEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { clsvqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsvqa_AnswerEN';
import { clsvqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsvqa_QuestionsEN';
import { vCurrEduClsStu_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import { vCurrEduClsTeacher_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import { Paper_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { gs_AnswerCount_Delgs_AnswerCountsByCondAsync } from '@/ts/L3ForWApi/GradEduTools/clsgs_AnswerCountWApi';
import {
  vRTUserRela_GetFirstObjAsync,
  vRTUserRela_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import {
  qa_AnswerVer_AddNewRecordAsync,
  qa_AnswerVer_GetFirstObjAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_AnswerVerWApi';
import {
  qa_Answer_AddNewRecordWithReturnKeyAsync,
  qa_Answer_GetRecCountByCondAsync,
  qa_Answer_UpdateRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_AnswerWApi';
import {
  qa_Push_AddNewRecordAsync,
  qa_Push_UpdateRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_PushWApi';
import {
  qa_Questions_DelRecordAsync,
  qa_Questions_DownMoveAsync,
  qa_Questions_GetFirstObjAsync,
  qa_Questions_GetObjByQuestionsIdAsync,
  qa_Questions_GetObjLstAsync,
  qa_Questions_GetRecCountByCondAsync,
  qa_Questions_ReFreshCache,
  qa_Questions_ReOrderAsync,
  qa_Questions_UpdateRecordAsync,
  qa_Questions_UpMoveAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_QuestionsWApi';
import {
  SysVote_AddNewRecordAsync,
  SysVote_GetObjLstAsync,
  SysVote_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import {
  vqa_Answer_GetObjLstAsync,
  vqa_Answer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/InteractManage/clsvqa_AnswerWApi';
import {
  vqa_Questions_GetObjLstAsync,
  vqa_Questions_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/InteractManage/clsvqa_QuestionsWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetB_Empty,
  GetCheckedKeyIdsInDivObj,
  GetDiv_Empty,
  GetFirstCheckedKeyIdInDivObj,
  GetI_Empty,
  GetImg_Empty,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetLabel_Empty,
  GetP_Empty,
  GetSpan_Empty,
  GetTextAreaObjInDivObj,
  GetTextAreaValueInDivObj,
  GetTh_Empty,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetTextAreaValueInDivObj,
  ShowDivInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  get_page_cache,
  get_page_top,
  get_pdfContent,
  get_pdfDiv_left,
  get_pdfDiv_top,
  get_pdfPageNum,
  get_pdf_zoom,
  set_page_cache,
  set_page_top,
  set_pdfContent,
  set_pdfDiv_left,
  set_pdfDiv_top,
  set_pdfPageNum,
  set_pdf_zoom,
} from '@/ts/FunClass/clsPubFun4Pdf';
import { qa_Questions_EditEx } from '@/views/InteractManage/qa_Questions_EditEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { qa_Answer_EditEx } from '@/views/InteractManage/qa_Answer_EditEx';
import { SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
import enumAnswerType, { Type_AnswerType } from '@/ts/PubFun/enumAnswerType';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { qa_Answer_Edit } from '@/viewsBase/InteractManage/qa_Answer_Edit';
import { userStore } from '@/store/modulesShare/user';
import { sysVoteStore } from '@/store/modules/sysVote';

declare function startCompare(): void; //比较段落
// declare function setTextboxio(): void;

declare function atOthers(strStuName: string, strTeaName: string): void;
declare function LayercClose(): void;
declare let window: any;
/* spaqa_QuestionsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Tea_QA implements IShowList {
  // public static questionsId = '';
  public static answerTypeId = enumAnswerType.None_00;
  public static answerContent = '';
  public static parentId = '';
  public static vuebtn_Click: (strCommandName: string, strKeyId: string) => void;

  public static GetPropValue: (strPropName: string) => string;
  public static EditObj: any;
  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divLayout: HTMLDivElement; //界面布局的层对象
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvqa_QuestionsBy: string = "questionsId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
  }
  async BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';

    let strAnswerId = strPara;
    let strQuestionId;
    let strAnswerTypeId: enumAnswerType;
    switch (strType) {
      case 'vPaperSubViewpoint':
        alert('该类没有绑定该函数：[this.BindGv_vPaperSubViewpoint_Cache]！');
        //this.BindGv_vPaperSubViewpointCache();;
        break;

      case clsqa_QuestionsEN._CurrTabName:
        await this.btnReOrder_Click();
        await this.Showdiv_Questions();
        break;

      case clsqa_AnswerEN._CurrTabName:
        strAnswerId = strPara;
        [strQuestionId, strAnswerTypeId] =
          await qa_AnswerEx_GetQuestionIdAnswerTypeIdByAnswerIdAsyncEx(strAnswerId);
        await this.SynAnswer(strQuestionId, strAnswerTypeId);
        await Tea_QA.btnShowAnswer_Click(this.questionsId, 0, '', enumCommentOrder.AllComment_01);
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    console.log(strCommandName, strKeyId);
    const strTabId = strKeyId;
    const objPage = new Tea_QA();
    const objLayOut = objPage.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strPaperId = strKeyId;
    // CommQuestionAnswer.vuebtn_Click = Tea_QA.btn_Click;
    console.log(objPage);
    if (Tea_QA.divDataLst != null) {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(Tea_QA.divDataLst);
      console.log(arrKeyIds);
      strKeyId = GetFirstCheckedKeyIdInDivObj(Tea_QA.divDataLst);
    }
    const qa_PaperId = ''; //待定
    const strQuestionsId = Tea_QA.GetPropValue('questionsId');
    let strMsg;
    let strAnswerId;
    let strUserId;
    let arr;

    let intPdfPageNum;
    let strPdfContent;
    let pdfDiv_top;
    let pdfDiv_left;
    let objQa_questions;
    let objQa_Answer;
    let strAnswerTypeId: Type_AnswerType;
    switch (strCommandName) {
      case 'changeTab':
        if (strQuestionsId == '') {
          strMsg = `请选择一个题目！`;
          message.info(strMsg);
          return;
        }

        switch (strTabId) {
          case 'liAnswer': // '问题回答'
            strAnswerTypeId = '01';
            Tea_QA.answerTypeId = strAnswerTypeId;

            $('#div_qa_Questions').css({ height: '300px' });
            //$("#div_qa_Answer").css({ "height": "100%" });
            $('#AllQA').html('全部回答');
            $('#MyQA').html('我的回答');
            $('#NewQA').html('最新回答');
            $('#btnAddAnswer').show();
            $('#btnAddAnswer').html('我来回答');

            HideDivInDivObj(Tea_QA.divLayout, 'DiscussEdit');

            objPage.Bind_Show3List(strQuestionsId, strAnswerTypeId, enumCommentOrder.AllComment_01);
            break;

          case 'liDiscuss2': // '组内讨论区'
            strAnswerTypeId = '03';
            Tea_QA.answerTypeId = strAnswerTypeId;

            $('#div_qa_Questions').css({ height: '100px' });
            //$("#div_qa_Answer").css({ "height": "510px" });

            ShowDivInDivObj(Tea_QA.divLayout, 'DiscussEdit');
            $('#btnAddAnswer').hide();

            $('#AllQA').html('全部讨论');
            $('#MyQA').html('我的讨论');
            $('#NewQA').html('最新讨论');
            //$('#btnAddAnswer').show();
            $('#btnAddAnswer').html('参与讨论');
            //objPage.btnShowDiscuss_Click();

            objPage.Bind_Show3List(strQuestionsId, strAnswerTypeId, enumCommentOrder.AllComment_01);
            break;
          case 'liAnswer2': //'小组推荐答案'
            strAnswerTypeId = '04';
            Tea_QA.answerTypeId = strAnswerTypeId;

            $('#div_qa_Questions').css({ height: '300px' });
            //$("#div_qa_Answer").css({ "height": "100%" });
            $('#AllQA').html('全部回答');
            $('#MyQA').html('我的回答');
            $('#NewQA').html('最新回答');
            //$('#btnAddAnswer').html("我来回答");
            $('#btnAddAnswer').hide();
            HideDivInDivObj(Tea_QA.divLayout, 'DiscussEdit');

            objPage.Bind_Show3List(strQuestionsId, strAnswerTypeId, enumCommentOrder.AllComment_01);
            break;
          case 'liDiscuss': //'组间讨论区'
            strAnswerTypeId = '02';
            Tea_QA.answerTypeId = strAnswerTypeId;

            $('#div_qa_Questions').css({ height: '100px' });
            //$("#div_qa_Answer").css({ "height": "510px" });

            ShowDivInDivObj(Tea_QA.divLayout, 'DiscussEdit');
            $('#btnAddAnswer').hide();

            $('#AllQA').html('全部讨论');
            $('#MyQA').html('我的讨论');
            $('#NewQA').html('最新讨论');
            //$('#btnAddAnswer').show();
            $('#btnAddAnswer').html('参与讨论');
            //objPage.btnShowDiscuss_Click();

            objPage.Bind_Show3List(strQuestionsId, strAnswerTypeId, enumCommentOrder.AllComment_01);

            break;
        }
        break;
      case 'SysComment':
        arr = strKeyId.split('|');
        if (arr.length != 3) {
          strMsg = `在执行btnSysComment_Click过程中，参数数目不正确！`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        strAnswerId = arr[0];
        strUserId = arr[1];
        // strQuestionsId = arr[2];
        objPage.SysComment(strAnswerId, strUserId, arr[2]);
        break;
      case 'SearchParentV':
        strAnswerId = strKeyId;
        objPage.SearchParentV(strAnswerId);
        break;
      case 'ShowAnswer':
        arr = strKeyId.split('|');

        if (arr.length != 3) {
          strMsg = `在执行btnShowAnswer_Click过程中，参数数目不正确！`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        // strQuestionsId = arr[0];
        intPdfPageNum = Number(arr[1]);
        strPdfContent = arr[2];
        Tea_QA.btnShowAnswer_Click(
          arr[0],
          intPdfPageNum,
          strPdfContent,
          enumCommentOrder.AllComment_01,
        );
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        clsPrivateSessionStorage.questionsTypeId = '02';
        objQa_questions = new qa_Questions_EditEx('qa_Questions_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        objQa_questions.questionsTypeId = '02';
        console.log(objQa_questions);
        Tea_QA.EditObj.btnqa_Questions_Edit_Click(strCommandName, strKeyId);
        break;

      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        clsPrivateSessionStorage.questionsTypeId = '02';
        objQa_questions = new qa_Questions_EditEx('qa_Questions_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        objQa_questions.questionsTypeId = '02';
        console.log(objQa_questions);
        Tea_QA.EditObj.btnqa_Questions_Edit_Click(strCommandName, strKeyId);
        break;
      case 'DelQuestions':
        objPage.btnDelQuestions_Click(strKeyId);
        break;
      case 'SwitchPaper':
        SetHidPaperId(objLayOut, strPaperId);
        $('#hidqa_PaperId').val(qa_PaperId);

        // objPage.BindPdf();
        break;

      case 'SwitchPaper_Tags':
        SetHidPaperId(objLayOut, strPaperId);

        // objPage.BindPdf();
        break;

      case 'AddTags':
        pdfDiv_top = $('#iframe_qaPdf', parent.document).contents().find('#pdfDiv_top').val() ?? '';
        pdfDiv_left =
          $('#iframe_qaPdf', parent.document).contents().find('#pdfDiv_left').val() ?? '';
        $('#pdfDiv_top').val(pdfDiv_top);
        $('#pdfDiv_left').val(pdfDiv_left);

        $('#txtTagsContent').val('');
        $('#myModalLabel').html('添加标注');
        $('#btnOKUpd3').html('添加标注');

        $('#div_Tags').hide();
        $('#div_qa_Welcome').hide();
        $('#divEditTagsRegion').show();
        break;
      case 'UpdateTags':
        $('#txtTagsContent').val('');
        //ShowDialog('Update');
        $('#div_Tags').hide();
        $('#div_qa_Welcome').hide();
        $('#divEditTagsRegion').show();

        $('#myModalLabel').html('修改标注');
        $('#btnOKUpd3').html('修改标注');

        // objPage.btnUpdateTags_Click(strKey);
        qa_Questions_EditEx.btnEdit_Click(strCommandName, '');
        break;
      case 'UpdateQa_Answer':
        // HideDivInDivObj(TeaTest_QA.divLayout, 'div_qa_Answer');
        $('#divEditAnswerRegion').show();
        $('#hidIsRecommend').val();
        // const objPage = new TeaTest_QA();
        // objPage.btnUpdateQa_Answer_Click(strKey, strTopicId);
        // console.log(strKey, strTopicId);
        clsPrivateSessionStorage.questionsTypeId = '03';
        qa_Answer_EditEx.parentId = 'root';
        this.answerTypeId = '01';

        objQa_Answer = new qa_Answer_EditEx('qa_Answer_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        objQa_Answer.questionsId = strQuestionsId;
        objQa_Answer.answerTypeId = '01';
        console.log(objQa_Answer);
        Tea_QA.EditObj.btnqa_Answer_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateAnswer': //
        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        $('#divEditAnswerRegion').show();
        qa_Questions_EditEx.btnEdit_Click('UpdateAnswer', strKeyId);
        break;
      case 'DelAnswer':
        objPage.btnDelAnswer_Click(strKeyId);
        break;
      case 'ReplyAnswer': //
        qa_Questions_EditEx.parentId = strKeyId;
        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        $('#divEditAnswerRegion').show();
        qa_Questions_EditEx.btnEdit_Click('AddNewAnswer', '');
        break;

      case 'AddNewAnswer': //
        if (strQuestionsId == '') {
          strMsg = `请选择问题后再添加答案！`;

          alert(strMsg);
          return;
        }
        // HideDivInDivObj(objLayOut, 'div_qa_Answer');
        // Tea_QA.questionsId = CommQuestionAnswer.questionsId;
        $('#divEditAnswerRegion').show();
        qa_Answer_Edit.strPageDispModeId = enumPageDispMode.PopupBox_01;
        // qa_Questions_EditEx.btnEdit_Click('AddNewAnswer', '');
        clsPrivateSessionStorage.questionsTypeId = '03';
        qa_Answer_EditEx.parentId = 'root';
        this.answerTypeId = '01';

        objQa_Answer = new qa_Answer_EditEx('qa_Answer_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        objQa_Answer.questionsId = strQuestionsId;
        objQa_Answer.answerTypeId = '01';
        console.log(objQa_Answer);
        Tea_QA.EditObj.btnqa_Answer_Edit_Click(strCommandName, strKeyId);
        break;
      case 'SubmitQa_Answer': //
        objPage.btnSubmitQa_Answer_Click(strKeyId);
        break;
      case 'OKUpd1':
      case 'QuestionsSubmit':
        qa_Questions_EditEx.btnEdit_Click(strCommandName, '');
        break;

      case 'UpdateQuestions': //
        $('#div_qa_Welcome').hide();
        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        // $('#divEditQuestionsRegion').show();
        clsPrivateSessionStorage.questionsTypeId = '02';
        objQa_questions = new qa_Questions_EditEx('qa_Questions_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objQa_questions);
        Tea_QA.EditObj.btnqa_Questions_Edit_Click(strCommandName, strKeyId);
        qa_Questions_EditEx.btnEdit_Click(strCommandName, strKeyId);
        break;
      case 'AddNewQuestions': //
        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        $('#divEditAnswerRegion').hide();
        $('#divEditQuestionsRegion').show();

        qa_Questions_EditEx.btnEdit_Click(strCommandName, strKeyId);

        // objPage.btnQuery_Click();
        break;
      case 'Query': //查询记录
        // objPage.btnQuery_Click();
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要复制的记录！');
        //   return;
        // }
        //objPage.btnCopyRecord_Click();
        break;

      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        // if (arrKeyIds.length == 0) {
        //   alert(`请选择需要删除的${objPage.thisTabName}记录！`);
        //   return;
        // }
        // objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        // objPage.btnDelRecordInTab_Click(strKeyId);
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'Tea_QA.btn_Click');

        break;
    }
  }
  public async PageLoad(strCommentOrder: enumCommentOrder) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //显示当前评论的观点

        await this.Showdiv_Questions();

        //评论列表
        //const gvResult2 = await this.btnShowAppraise_Click();
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

  //显示回答、讨论等绑定列表
  public async Bind_Show3List(
    strQuestionId: string,
    strAnswerTypeId: enumAnswerType,
    strCommentOrder: enumCommentOrder,
  ) {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    switch (strAnswerTypeId) {
      case enumAnswerType.QuestionAnswer_01:
        await Tea_QA.btnShowAnswer_Click(strQuestionId, 0, '', strCommentOrder);
        break;
      case enumAnswerType.GroupDiscussionArea_02:
        await this.btnShowDiscuss_Click(strCommentOrder);
        break;
      case enumAnswerType.AnswersRecommendedByTheGroup_03:
        await this.btnShowGroupDiscuss_Click(strCommentOrder);
        break;
      case enumAnswerType.InterGroupDiscussionArea_04:
        await this.btnShowRecommendAnswer_Click(strCommentOrder);
        break;
      default:
        break;
    }
  }
  public async BindDiv_Questions(
    div_qa_Questions: HTMLDivElement,
    arrvqa_QuestionsObjLst: Array<clsvqa_QuestionsEN>,
  ) {
    try {
      // 使用动态导入加载函数代码块
      const { CommQuestionAnswer } = await import('./CommQuestionAnswer');
      // console.error('CommQuestionAnswer');
      // 调用加载的函数

      const objPage = new CommQuestionAnswer();

      await objPage.BindDiv_Questions(
        Tea_QA.vuebtn_Click,
        Tea_QA.divLayout,
        div_qa_Questions,
        arrvqa_QuestionsObjLst,
      );
    } catch (error) {
      console.error('加载函数:[CommQuestionAnswer]时出现错误:', error);
    }
  }
  //绑定提问数据
  public async Showdiv_Questions() {
    const divName = this.getDivName(enumDivType.LayOut_01);

    const strWhereCond = `1=1 and questionsTypeId='02' and paperId='${clsPrivateSessionStorage.paperId}' order by orderNum Asc`;
    // const strUserId = userStore.getUserId;
    let arrvqa_QuestionsObjLst: Array<clsvqa_QuestionsEN> = [];
    try {
      arrvqa_QuestionsObjLst = await vqa_Questions_GetObjLstAsync(strWhereCond);

      const div_qa_Questions = GetDivObjInDivObj(divName, 'div_qa_Questions');

      this.BindDiv_Questions(div_qa_Questions, arrvqa_QuestionsObjLst);

      if (this.questionsId != '') {
        const objQuestions = arrvqa_QuestionsObjLst.find((x) => x.questionsId == this.questionsId);
        if (objQuestions != null) {
          Tea_QA.btnShowAnswer_Click(
            this.questionsId,
            objQuestions.pdfPageNum,
            objQuestions.pdfContent,
            enumCommentOrder.AllComment_01,
          );
        }
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //显示pdf标注
  public async Showdiv_PdfQuestions() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strWhereCond = `1=1 and questionsTypeId='02' and paperId='${clsPrivateSessionStorage.paperId}' order by updDate Asc`;

    let arrqa_QuestionsObjLst: Array<clsqa_QuestionsEN> = [];

    try {
      await qa_Questions_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrqa_QuestionsObjLst = <Array<clsqa_QuestionsEN>>jsonData;
      });

      //$(".QuestionsCss").remove();
      $('#iframe_qaPdf', parent.document).contents().find('.QuestionsCss').remove();
      for (let i = 0; i < arrqa_QuestionsObjLst.length; i++) {
        const strPdfPageNum = arrqa_QuestionsObjLst[i].pdfPageNum;
        const strQuestionsId = arrqa_QuestionsObjLst[i].questionsId;
        const strQuestionsContent = arrqa_QuestionsObjLst[i].questionsContent;

        //如果zoom是auto的那么就默认赋值110
        let Currpdf_zoom = 0;
        if (GetInputValueInDivObj(divName, 'pdf_zoom') == 'auto') {
          Currpdf_zoom = 110;
        } else {
          Currpdf_zoom = Number(GetInputValueInDivObj(divName, 'pdf_zoom'));
        }

        let Datapdf_zoom = 0;
        if (arrqa_QuestionsObjLst[i].pdfZoom == 'auto') {
          Datapdf_zoom = 110;
        } else {
          Datapdf_zoom = Number(arrqa_QuestionsObjLst[i].pdfZoom);
        }

        //strIdCurrEduclsDatapdf_zoom: number = Number(objgs_Tags.pdfZoom);
        let strPdfDivTop = Number(arrqa_QuestionsObjLst[i].pdfDivTop);
        let strPdfDivLet = Number(arrqa_QuestionsObjLst[i].pdfDivLet);

        if (Currpdf_zoom > Datapdf_zoom) {
          let ZoomValue = Currpdf_zoom - Datapdf_zoom;
          ZoomValue = ZoomValue - ZoomValue / 10;
          //获得换算后的top值
          strPdfDivTop = strPdfDivTop + strPdfDivTop * (ZoomValue / 100);
          //获得换算后的top值
          strPdfDivLet = strPdfDivLet + strPdfDivLet * (ZoomValue / 100);

          strPdfDivTop = strPdfDivTop - 20; //补充值，为了标记放置在文字的上面
        } else if (Currpdf_zoom < Datapdf_zoom) {
          let ZoomValue = Datapdf_zoom - Currpdf_zoom;
          ZoomValue = ZoomValue + ZoomValue / 10;
          //获得换算后的top值
          strPdfDivTop = strPdfDivTop - strPdfDivTop * (ZoomValue / 100);
          //获得换算后的top值
          strPdfDivLet = strPdfDivLet - strPdfDivLet * (ZoomValue / 100);

          strPdfDivTop = strPdfDivTop - 20; //补充值，为了标记放置在文字的上面
        } else {
          strPdfDivTop = strPdfDivTop - 20; //补充值，为了标记放置在文字的上面
        }

        //strIdCurrEduclspdfPage = document.getElementsByClassName("page");
        // const pdfPage =
        //   window.parent.frames['iframe_qaPdf'].contentDocument.getElementsByClassName('page');

        const pdfIframe = window.parent.frames['iframe_qaPdf'];
        if (pdfIframe == null) return;
        const pdfPageDoc = pdfIframe.contentDocument;
        if (pdfPageDoc == null) return;
        const pdfPage = pdfPageDoc.getElementsByClassName('page');
        if (pdfPage == null) return;

        for (let j = 0; j <= pdfPage.length; j++) {
          if (strPdfPageNum == 0) continue;
          if (strPdfPageNum == j) {
            //strIdCurrEduclsdiv = document.createElement("img");
            //div.innerText = strTagsContent;

            //div.style.left = strPdfDivLet + "px";
            //div.style.top = strPdfDivTop + "px";
            //div.style.position = "absolute";
            //div.title = strTagsContent;
            //div.style.zIndex = "999";
            //div.id = strQuestionsId;
            //div.src = "@/assets/images/QA.png";
            //div.setAttribute("onclick", "btnUpdateTags_Click('" + strQuestionsId + "')");

            const div = document.createElement('a');

            //div.innerText = strTagsContent;
            //div.href = "#Q" + strQuestionsId;
            div.className = 'QuestionsCss';
            div.style.left = `${strPdfDivLet}px`;
            div.style.top = `${strPdfDivTop}px`;
            div.style.position = 'absolute';
            div.style.zIndex = '999';
            div.title = strQuestionsContent;
            div.id = strQuestionsId;
            //div.className = "layui-icon layui-icon-survey";//答疑图标
            //if (arrqa_QuestionsObjLst[i].updUser == strUserId) {
            //    div.setAttribute("onclick", "btnUpdateQuestions_Click('" + strQuestionsId + "')");
            //}
            div.setAttribute('onclick', `btnIndexesQuestions_Click('${strQuestionsId}')`);
            //vari = document.createElement("i");
            //vari.className = "layui-icon layuilayui-icon-reply-fill";
            ////vari.className = "layui-icon";
            //vari.style.color = "#1E9FFF";
            //vari.style.fontSize = "30px";
            //vari.style.lineHeight = "32px";
            //vari.innerText = "&#xe60f";

            const vari = document.createElement('img');
            vari.style.height = '24px';
            vari.style.width = '24px';

            vari.src = '/images/QA.png';

            div.appendChild(vari);

            pdfPage[j - 1].appendChild(div);
          }
        }
      }

      console.log('完成Showdiv_PdfQuestions绑定!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //public static uniq(arr: Array<clsvqa_QuestionsEN>): Array<clsvqa_QuestionsEN> {
  //    let arrObjLst_New: Array<clsvqa_QuestionsEN> = new Array<clsvqa_QuestionsEN>();
  //    for (let x of arr) {
  //        if (Pdf_QA.IsExist(arrObjLst_New, x) == false) {
  //            arrObjLst_New.push(x);
  //        }
  //    }
  //    return arrObjLst_New;
  //}

  //public static IsExist(arr: Array<clsvqa_QuestionsEN>, key: clsvqa_QuestionsEN) {
  //    let arr_Sel = arr.filter(x => x.pdfPageNum == key.pdfPageNum);
  //    if (arr_Sel.length > 0) return true;
  //    return false;
  //}

  //public static GetvPdfpageNumByvqa_Questions(objvqa_Questions: clsvqa_QuestionsEN): clsvqa_QuestionsEN {
  //    const objvqa_Questions: clsvqa_QuestionsEN = new clsvqa_QuestionsEN();
  //    objvqa_Questions.questionsId = objvqa_Questions.questionsId;
  //    objvqa_Questions.pdfPageNum = objvqa_Questions.pdfPageNum;
  //    return objvqa_Questions;
  //}
  public static async btnShowAnswer_Click(
    strQuestionsId: string,
    intPdfPageNum: number,
    strPdfContent: string,
    strCommentOrder: enumCommentOrder,
  ) {
    try {
      // 使用动态导入加载函数代码块
      const { CommQuestionAnswer } = await import('./CommQuestionAnswer');
      // console.error('CommQuestionAnswer');

      const divShowAnswer = GetDivObjInDivObj(Tea_QA.divLayout, CommQuestionAnswer.ShortComment);
      await CommQuestionAnswer.btnShowAnswer_Click(
        Tea_QA.vuebtn_Click,
        Tea_QA.divLayout,
        divShowAnswer,
        strQuestionsId,
        intPdfPageNum,
        strPdfContent,
        strCommentOrder,
      );
    } catch (error) {
      console.error('加载函数:[CommQuestionAnswer]时出现错误:', error);
    }
  }

  //绑定答案数据

  //绑定组间讨论区
  public async btnShowDiscuss_Click(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //绑定答案数据
    let arrvqa_AnswerObjLst1: Array<clsvqa_AnswerEN> = [];
    //strIdCurrEduclsarrvqa_AnswerObjLst1_1: Array<clsvqa_AnswerEN> = [];
    //strIdCurrEduclsarrvqa_AnswerObjLst1_2: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst2: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst3: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerUserNumObjLst: Array<clsvqa_AnswerEN> = [];
    let arrvRTUserRelaLst: Array<clsvRTUserRelaEN> = [];
    let arrvqa_AnswerNumObjLst1: Array<clsvqa_AnswerEN> = [];

    let strWhereCond1 = '';
    let strWhereCond2 = '';

    const strUserId = userStore.getUserId;

    //主题用户关系列表
    //objvRTUserRela: clsvRTUserRelaEN = new clsvRTUserRelaEN;

    //strIdCurrEduclsarrvRTUserRela0: Array<clsvRTUserRelaEN> = [];
    //strIdCurrEduclsarrvRTUserRela: Array<clsvRTUserRelaEN> = [];
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部评论
        strWhereCond1 = ` parentId='root' and answerTypeId='02' and  questionsId='${this.questionsId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and answerTypeId='02' and  questionsId='${this.questionsId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人评论
        strWhereCond1 = ` parentId='root' and answerTypeId='02' and  questionsId='${this.questionsId}' and updUser='${strUserId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and answerTypeId='02' and  questionsId='${this.questionsId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新评论
        strWhereCond1 = ` parentId='root' and answerTypeId='02' and  questionsId='${this.questionsId}' order by updDate Desc`;
        strWhereCond2 = ` parentId<>'root' and answerTypeId='02' and  questionsId='${this.questionsId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    try {
      //获取用户缓存数据
      const strWhere_User = '1=1';
      const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

      arrvqa_AnswerObjLst1 = await vqa_Answer_GetObjLstAsync(strWhereCond1);
      arrvqa_AnswerObjLst2 = await vqa_Answer_GetObjLstAsync(strWhereCond2);

      // const strVateWhereCond = ` 1 =1 and updUser='${strUserId}' and voteTypeId='12' and pubParentId='${this.questionsId}'`;
      const strVoteType = '12';
      const strPubParentId = this.questionsId;
      const strUserId = userStore.getUserId;

      const strWhereCond4 = ` answerTypeId='02' and  questionsId='${this.questionsId}'`;
      await vqa_AnswerEx_Getvqa_AnswerUserNumObjLstAsync(strWhereCond4).then((jsonData) => {
        arrvqa_AnswerUserNumObjLst = <Array<clsvqa_AnswerEN>>jsonData;
      });

      let strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId == '') strTopicId = '00000000';
      let strWhereCond5 = `topicId ='${strTopicId}'`;
      await vRTUserRela_GetObjLstAsync(strWhereCond5).then((jsonData) => {
        arrvRTUserRelaLst = <Array<clsvRTUserRelaEN>>jsonData;
      });

      strWhereCond5 = ` answerTypeId='02' and questionsId='${this.questionsId}' and topicId<>'00000000' `;

      await vqa_AnswerEx_Getvqa_AnswerTopicIdNumObjLstAsync(strWhereCond5).then((jsonData) => {
        arrvqa_AnswerNumObjLst1 = <Array<clsvqa_AnswerEN>>jsonData;
      });

      if (arrvqa_AnswerNumObjLst1.length > 0) {
        let arrTopicId = '';
        for (let i = 0; i < arrvqa_AnswerNumObjLst1.length; i++) {
          arrTopicId += `${arrvqa_AnswerNumObjLst1[i].topicId},`;
        }
        arrTopicId = arrTopicId.substring(0, arrTopicId.length - 1);

        const strWhereCond6 = `topicId in(${arrTopicId}) order by topicId Asc`;

        await vRTUserRela_GetObjLstAsync(strWhereCond6).then((jsonData) => {
          arrvRTUserRelaLst = <Array<clsvRTUserRelaEN>>jsonData;
        });
      }

      const strQWhereCond = `questionsId='${this.questionsId}'`;
      const objqa_Questions = await qa_Questions_GetFirstObjAsync(strQWhereCond);
      if (objqa_Questions != null) {
        //$('#Questions_Name').html(objqa_Questions.questionsContent);
        $('#answerCount').html(objqa_Questions.answerCount.toString());
        $('#discussCount').html(objqa_Questions.discussCount.toString());
        $('#groupDiscussCount').html(objqa_Questions.groupDiscussCount.toString());
      }

      let strhtml = '';
      let varNum = 0;

      if (arrvqa_AnswerUserNumObjLst.length > 0) {
        strhtml += '<div style="text-align:left; width:99%;margin:8px;">';
        strhtml += '<p class="text-primary float-left">参与讨论用户：</p>';
        for (let k = 0; k < arrvqa_AnswerUserNumObjLst.length; k++) {
          if (arrvqa_AnswerUserNumObjLst.length > 0) {
            strhtml += `${arrvqa_AnswerUserNumObjLst[k].userName}<span class="badge badge-pill badge-primary">${arrvqa_AnswerUserNumObjLst[k].memo}</span>&nbsp;&nbsp;`;
          }
        }
        strhtml += '</div>';
      }
      //   const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      // J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrvqa_AnswerObjLst1.length; i++) {
        const objvQa_Answer = arrvqa_AnswerObjLst1[i];
        varNum++;
        strhtml += '<div class="comment" >';

        //头像
        let strUserheadPic = '';
        const objUser = arrUsers.find((x) => x.userId == objvQa_Answer.updUser);
        if (objUser != null) {
          if (objUser.headPic != '') {
            const strheadPic = `/${objUser.headPic}`;
            strUserheadPic += `<div class="common-avatar J_User" ><img src="${strheadPic}" width="100%" height="100%"></div>`;
          } else {
            strUserheadPic +=
              '<div class="common-avatar J_User" ><img src="/UploadFiles/UserheadPic/n-avator-bg.png" width="100%" height="100%"></div>';
          }
        } else {
          strUserheadPic +=
            '<div class="common-avatar J_User" ><img src="/UploadFiles/UserheadPic/n-avator-bg.png" width="100%" height="100%"></div>';
        }
        strhtml += strUserheadPic;

        strhtml += '<div class="comment-block">';
        //if ($("#hidQuestionsUser").val() == objvQa_Answer.updUser) {
        //    strhtml += '<p class="comment-user" ><span class="comment-username J_User" style="color:red;" > 题主：' + objvQa_Answer.userName + '</span>';
        //} else {
        //    strhtml += '<p class="comment-user" ><span class="comment-username J_User" >' + objvQa_Answer.userName + '</span>';
        //}

        const objvRTUserRela = arrvRTUserRelaLst.find((x) => x.userId == objvQa_Answer.updUser);
        if (objvRTUserRela != null) {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:${objvRTUserRela.colorCode}">${objvQa_Answer.userName}</span>`;
        } else {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
        }

        strhtml += `<span class="comment-time">${objvQa_Answer.updDate}</span>`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment-username J_User">${varNum}楼</span></p>`;
        //strhtml += '<div class="comment-content J_CommentContent">评分：' + arrvPaperAppraiseObjLst[i].AppraiseScore + '</div>';
        //if (objvQa_Answer.isRecommend == true) {
        //    strhtml += '<div class="comment-content J_CommentContent">' + objvQa_Answer.answerContent + '<span style="color:red;">(小组推荐回答)</span></div>';
        //} else { }
        strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;

        //回复区

        arrvqa_AnswerObjLst3 = arrvqa_AnswerObjLst2.filter(
          (x) => x.parentId == objvQa_Answer.answerId,
        );
        if (arrvqa_AnswerObjLst3.length > 0) {
          strhtml += '<div class="reply J_ReplyBlock">';
          for (let j = 0; j < arrvqa_AnswerObjLst3.length; j++) {
            const objvqa_Answer = arrvqa_AnswerObjLst3[j];
            strhtml += '<div class="reply-block">';

            strhtml += '<div class="reply-content">';
            if (GetInputValueInDivObj(divName, 'hidQuestionsUser') == objvqa_Answer.updUser) {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" style="color:red;"> 题主(${objvqa_Answer.userName})</b>：</span>`;
            } else {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User">${objvqa_Answer.userName}</b>：</span>`;
            }
            strhtml += `${objvqa_Answer.answerContent}</div>`;
            strhtml += '<div class="reply-operate reply-operate--hot">';
            //if (objvqa_Answer.scoreType == "2") {
            //    strhtml += '<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分:<i>' + objvqa_Answer.score + '</i></span>';
            //} else {
            //    strhtml += '<span class="J_Vote reply-operate-item reply-up">学生评分:<i>' + objvqa_Answer.score + '</i></span>';
            //}
            const objLike = sysVoteStore.getObj(strVoteType, strUserId, objvqa_Answer.answerId);
            if (objLike == null) {
              strhtml += `<span class="J_Vote reply-operate-item reply-up" onclick=btnAddVote_Click("${objvqa_Answer.answerId}","${objvqa_Answer.updUser}")>赞<i>${objvqa_Answer.voteCount}</i></span >`;
            } else {
              strhtml += `<span class="J_Vote reply-operate-item reply-up operate-visited" >已赞<i>${objvqa_Answer.voteCount}</i></span >`;
            }
            //strhtml += '<i class="reply-dot">·</i><span class="J_Reply reply-operate-item"  onclick=btnReplyAnswer_Click("' + objvqa_Answer.answerId + '")>回复</span>';

            strhtml += `<i class="reply-dot">·</i><span>${objvqa_Answer.updDate}</span>`;
            if (strUserId == objvqa_Answer.updUser) {
              strhtml += '<i class="reply-dot reply-operate-report" >·</i>';
              strhtml += `<span class="reply-operate-item reply-operate-report J_ReplyReport" onclick=btnDelAnswer_Click("${objvqa_Answer.answerId}")>删除5</span>`;
            }
            strhtml += '</div>';
            strhtml += '</div>';
          }
          strhtml += '</div>';
        }
        ///评论区
        strhtml += '<div class="comment-operate J_CommentOperate clearfix">';
        //if (objvQa_Answer.scoreType == "2") {
        //    strhtml += '<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分:<i>' + objvQa_Answer.score + '</i></span>';
        //} else {
        //    strhtml += '<span class="J_Vote reply-operate-item reply-up">学生评分:<i>' + objvQa_Answer.score + '</i></span>';
        //}
        const objLike = sysVoteStore.getObj(strVoteType, strUserId, objvQa_Answer.answerId);
        if (objLike == null) {
          strhtml += `<span class="J_Vote comment-operate-item comment-operate-up" onclick=btnAddVote_Click("${objvQa_Answer.answerId}","${objvQa_Answer.updUser}")>赞<i>${objvQa_Answer.voteCount}</i></span>`;
        } else {
          strhtml += `<span class="J_Vote comment-operate-item comment-operate-up operate-visited">已赞<i>${objvQa_Answer.voteCount}</i></span>`;
        }
        strhtml += `<span class="J_Reply comment-operate-item comment-operate-reply" id="J_Reply${objvQa_Answer.answerId}" onclick=btnReplyDiscuss_Click("${objvQa_Answer.answerId}","${objvQa_Answer.userName}")>回复</span>`;
        strhtml += '</div>';

        if (strUserId == objvQa_Answer.updUser) {
          //strhtml += '<div class="J_Report comment-report" id="J_Report6673850347411436155" onclick=btnUpdateAnswer_Click("' + objvQa_Answer.answerId + '")>修改</div>';
          strhtml += `<div class="J_Report comment-report" onclick=btnDelAnswer_Click("${objvQa_Answer.answerId}")>删除6</div>`;
        }
        strhtml += '</div></div>';
      }

      $('#J_ShortComment_Discuss').html(strhtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取数据不成功,${e}.`;
      alert(strMsg);
    }
  }

  //绑定组内讨论区
  public async btnShowGroupDiscuss_Click(strCommentOrder: enumCommentOrder) {
    if (this.questionsId == '') return;
    const divName = this.getDivName(enumDivType.LayOut_01);
    //绑定答案数据
    let arrvqa_AnswerObjLst1: Array<clsvqa_AnswerEN> = [];
    //strIdCurrEduclsarrvqa_AnswerObjLst1_1: Array<clsvqa_AnswerEN> = [];
    //strIdCurrEduclsarrvqa_AnswerObjLst1_2: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst2: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst3: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerUserNumObjLst: Array<clsvqa_AnswerEN> = [];
    let arrvRTUserRelaLst: Array<clsvRTUserRelaEN> = [];

    let strWhereCond1 = '';
    let strWhereCond2 = '';

    const strUserId = userStore.getUserId;

    let strTopicId = clsPrivateSessionStorage.topicIdInTree;
    if (strTopicId == '') strTopicId = '00000000';
    //主题用户关系列表
    //objvRTUserRela: clsvRTUserRelaEN = new clsvRTUserRelaEN;

    //strIdCurrEduclsarrvRTUserRela0: Array<clsvRTUserRelaEN> = [];
    //strIdCurrEduclsarrvRTUserRela: Array<clsvRTUserRelaEN> = [];

    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部评论
        strWhereCond1 = ` parentId='root' and answerTypeId='03' and  questionsId='${this.questionsId}' and  topicId='${strTopicId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and answerTypeId='03' and  questionsId='${this.questionsId}'and  topicId='${strTopicId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人评论
        strWhereCond1 = ` parentId='root' and answerTypeId='03' and  questionsId='${this.questionsId}' and  topicId='${strTopicId}' and updUser='${strUserId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and answerTypeId='03' and  questionsId='${this.questionsId}' and  topicId='${strTopicId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新评论
        strWhereCond1 = ` parentId='root' and answerTypeId='03' and  questionsId='${this.questionsId}' and  topicId='${strTopicId}' order by updDate Desc`;
        strWhereCond2 = ` parentId<>'root' and answerTypeId='03' and  questionsId='${this.questionsId}' and  topicId='${strTopicId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        strWhereCond1 = ` parentId='root' and answerTypeId='03' and  questionsId='${this.questionsId}' and  topicId='${strTopicId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and answerTypeId='03' and  questionsId='${this.questionsId}'and  topicId='${strTopicId}' order by updDate Asc`;

        break;
    }
    // const strVateWhereCond = ` 1 =1 and updUser='${strUserId}' and voteTypeId='12' and pubParentId='${this.questionsId}'`;
    const strVoteType = '12';
    const strPubParentId = this.questionsId;

    const strQWhereCond = `questionsId='${this.questionsId}'`;
    try {
      //获取用户缓存数据
      const strWhere_User = '1=1';
      const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

      arrvqa_AnswerObjLst1 = await vqa_Answer_GetObjLstAsync(strWhereCond1);
      arrvqa_AnswerObjLst2 = await vqa_Answer_GetObjLstAsync(strWhereCond2);

      const strWhereCond4 = ` answerTypeId='03' and  questionsId='${this.questionsId}'`;
      arrvqa_AnswerUserNumObjLst = await vqa_AnswerEx_Getvqa_AnswerUserNumObjLstAsync(
        strWhereCond4,
      );

      let strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId == '') strTopicId = '00000000';
      const strWhereCond5 = `topicId ='${strTopicId}'`;
      await vRTUserRela_GetObjLstAsync(strWhereCond5).then((jsonData) => {
        arrvRTUserRelaLst = <Array<clsvRTUserRelaEN>>jsonData;
      });

      const objqa_Questions = await qa_Questions_GetFirstObjAsync(strQWhereCond);
      if (objqa_Questions != null) {
        //$('#Questions_Name').html(objqa_Questions.questionsContent);
        $('#answerCount').html(objqa_Questions.answerCount.toString());
        $('#discussCount').html(objqa_Questions.discussCount.toString());
        $('#groupDiscussCount').html(objqa_Questions.groupDiscussCount.toString());
      }

      let strhtml = '';
      let varNum = 0;
      strhtml += '<div style="text-align:left; width:99%;margin:8px;">';

      strhtml += '<p class="text-primary float-left">参与讨论用户：</p>';
      for (let k = 0; k < arrvqa_AnswerUserNumObjLst.length; k++) {
        if (arrvqa_AnswerUserNumObjLst.length > 0) {
          strhtml += `${arrvqa_AnswerUserNumObjLst[k].userName}<span class="badge badge-pill badge-primary">${arrvqa_AnswerUserNumObjLst[k].memo}</span>&nbsp;&nbsp;`;
        }
      }
      strhtml += '</div>';
      //   const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      // J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrvqa_AnswerObjLst1.length; i++) {
        const objvQa_Answer = arrvqa_AnswerObjLst1[i];
        varNum++;
        strhtml += '<div class="comment" >';
        //头像
        let strUserheadPic = '';
        const objUser = arrUsers.find((x) => x.userId == objvQa_Answer.updUser);
        if (objUser != null) {
          if (objUser.headPic != '') {
            const strheadPic = `/${objUser.headPic}`;
            strUserheadPic += `<div class="common-avatar J_User" ><img src="${strheadPic}" width="100%" height="100%"></div>`;
          } else {
            strUserheadPic +=
              '<div class="common-avatar J_User" ><img src="/UploadFiles/UserheadPic/n-avator-bg.png" width="100%" height="100%"></div>';
          }
        } else {
          strUserheadPic +=
            '<div class="common-avatar J_User" ><img src="/UploadFiles/UserheadPic/n-avator-bg.png" width="100%" height="100%"></div>';
        }
        strhtml += strUserheadPic;

        strhtml += '<div class="comment-block">';
        //if ($("#hidQuestionsUser").val() == objvQa_Answer.updUser) {
        //    strhtml += '<p class="comment-user" ><span class="comment-username J_User" style="color:red;" > 题主：' + objvQa_Answer.userName + '</span>';
        //} else {
        //    strhtml += '<p class="comment-user" ><span class="comment-username J_User" >' + objvQa_Answer.userName + '</span>';
        //}
        const objvRTUserRela = arrvRTUserRelaLst.find((x) => x.userId == objvQa_Answer.updUser);
        if (objvRTUserRela != null) {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:${objvRTUserRela.colorCode}">${objvQa_Answer.userName}</span>`;
        } else {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
        }
        strhtml += `<span class="comment-time">${objvQa_Answer.updDate}</span>`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment-username J_User">${varNum}楼</span></p>`;
        //strhtml += '<div class="comment-content J_CommentContent">评分：' + arrvPaperAppraiseObjLst[i].AppraiseScore + '</div>';
        //if (objvQa_Answer.isRecommend == true) {
        //    strhtml += '<div class="comment-content J_CommentContent">' + objvQa_Answer.answerContent + '<span style="color:red;">(小组推荐回答)</span></div>';
        //} else { }
        strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;

        //回复区

        arrvqa_AnswerObjLst3 = arrvqa_AnswerObjLst2.filter(
          (x) => x.parentId == objvQa_Answer.answerId,
        );
        if (arrvqa_AnswerObjLst3.length > 0) {
          strhtml += '<div class="reply J_ReplyBlock">';
          for (let j = 0; j < arrvqa_AnswerObjLst3.length; j++) {
            const objvqa_Answer = arrvqa_AnswerObjLst3[j];
            strhtml += '<div class="reply-block">';

            strhtml += '<div class="reply-content">';
            if (GetInputValueInDivObj(divName, 'hidQuestionsUser') == objvqa_Answer.updUser) {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" style="color:red;"> 题主(${objvqa_Answer.userName})</b>：</span>`;
            } else {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User">${objvqa_Answer.userName}</b>：</span>`;
            }
            strhtml += `${objvqa_Answer.answerContent}</div>`;
            strhtml += '<div class="reply-operate reply-operate--hot">';
            //if (objvqa_Answer.scoreType == "2") {
            //    strhtml += '<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分:<i>' + objvqa_Answer.score + '</i></span>';
            //} else {
            //    strhtml += '<span class="J_Vote reply-operate-item reply-up">学生评分:<i>' + objvqa_Answer.score + '</i></span>';
            //}
            const objLike = sysVoteStore.getObj(strVoteType, strUserId, objvqa_Answer.answerId);
            if (objLike == null) {
              strhtml += `<span class="J_Vote reply-operate-item reply-up" onclick=btnAddVote_Click("${objvqa_Answer.answerId}","${objvqa_Answer.updUser}")>赞<i>${objvqa_Answer.voteCount}</i></span >`;
            } else {
              strhtml += `<span class="J_Vote reply-operate-item reply-up operate-visited" >已赞<i>${objvqa_Answer.voteCount}</i></span >`;
            }
            //strhtml += '<i class="reply-dot">·</i><span class="J_Reply reply-operate-item"  onclick=btnReplyAnswer_Click("' + objvqa_Answer.answerId + '")>回复</span>';

            strhtml += `<i class="reply-dot">·</i><span>${objvqa_Answer.updDate}</span>`;
            if (strUserId == objvqa_Answer.updUser) {
              strhtml += '<i class="reply-dot reply-operate-report" >·</i>';
              strhtml += `<span class="reply-operate-item reply-operate-report J_ReplyReport" onclick=btnDelAnswer_Click("${objvqa_Answer.answerId}")>删除7</span>`;
            }
            strhtml += '</div>';
            strhtml += '</div>';
          }
          strhtml += '</div>';
        }
        ///评论区
        strhtml += '<div class="comment-operate J_CommentOperate clearfix">';
        //if (objvQa_Answer.scoreType == "2") {
        //    strhtml += '<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分:<i>' + objvQa_Answer.score + '</i></span>';
        //} else {
        //    strhtml += '<span class="J_Vote reply-operate-item reply-up">学生评分:<i>' + objvQa_Answer.score + '</i></span>';
        //}
        const objLike = sysVoteStore.getObj(strVoteType, strUserId, objvQa_Answer.answerId);
        if (objLike == null) {
          strhtml += `<span class="J_Vote comment-operate-item comment-operate-up" onclick=btnAddVote_Click("${objvQa_Answer.answerId}","${objvQa_Answer.updUser}")>赞<i>${objvQa_Answer.voteCount}</i></span>`;
        } else {
          strhtml += `<span class="J_Vote comment-operate-item comment-operate-up operate-visited">已赞<i>${objvQa_Answer.voteCount}</i></span>`;
        }
        strhtml += `<span class="J_Reply comment-operate-item comment-operate-reply" id="J_Reply${objvQa_Answer.answerId}" onclick=btnReplyDiscuss_Click("${objvQa_Answer.answerId}","${objvQa_Answer.userName}")>回复</span>`;
        strhtml += '</div>';

        if (strUserId == objvQa_Answer.updUser) {
          //strhtml += '<div class="J_Report comment-report" id="J_Report6673850347411436155" onclick=btnUpdateAnswer_Click("' + objvQa_Answer.answerId + '")>修改</div>';
          strhtml += `<div class="J_Report comment-report" onclick=btnDelAnswer_Click("${objvQa_Answer.answerId}")>删除8</div>`;
        }
        strhtml += '</div></div>';
      }

      $('#J_ShortComment_Discuss2').html(strhtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取数据不成功,${e}.`;
      alert(strMsg);
    }
  }

  //推荐回答
  public async btnShowRecommendAnswer_Click(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //对pdf添加高亮
    // this.btnUpdatePaperPageNum_Click(this.hidPdfContent);

    //绑定答案数据
    let arrvqa_AnswerNumObjLst1: Array<clsvqa_AnswerEN> = [];
    // const arrvqa_AnswerNumObjLst2: Array<clsvqa_AnswerEN> = [];

    let arrvqa_AnswerObjLst1: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst1_1: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst1_2: Array<clsvqa_AnswerEN> = [];

    let arrvqa_AnswerObjLst2: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst3: Array<clsvqa_AnswerEN> = [];

    let strWhereCond1 = '';
    let strWhereCond2 = '';

    const strUserId = userStore.getUserId;

    //主题用户关系列表
    //objvRTUserRela: clsvRTUserRelaEN = new clsvRTUserRelaEN;

    // let arrvRTUserRela0: Array<clsvRTUserRelaEN> = [];
    let arrvRTUserRela1: Array<clsvRTUserRelaEN> = [];
    // const arrvRTUserRela2: Array<clsvRTUserRelaEN> = [];
    //主题用户关系 用来显示小组推荐答案色码块标志；
    let arrRTUserRelaObjLst: Array<clsvRTUserRelaEN> = [];
    let arrvRTUserRela0;
    let arrvRTUserRela0_1: Array<clsvRTUserRelaEN> = [];
    let arrvRTUserRela0_2: Array<clsvRTUserRelaEN> = [];
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部评论
        strWhereCond1 = ` parentId='root' and isRecommend=1 and answerTypeId='01' and  questionsId='${this.questionsId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and answerTypeId='01' and  questionsId='${this.questionsId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人评论
        strWhereCond1 = ` parentId='root' and isRecommend=1 and answerTypeId='01' and  questionsId='${this.questionsId}' and updUser='${strUserId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and answerTypeId='01' and  questionsId='${this.questionsId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新评论
        strWhereCond1 = ` parentId='root' and isRecommend=1 and answerTypeId='01' and  questionsId='${this.questionsId}' order by updDate Desc`;
        strWhereCond2 = ` parentId<>'root' and answerTypeId='01' and  questionsId='${this.questionsId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        strWhereCond1 = ` parentId='root' and isRecommend=1 and answerTypeId='01' and  questionsId='${this.questionsId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and answerTypeId='01' and  questionsId='${this.questionsId}' order by updDate Asc`;

        break;
    }
    // const strVateWhereCond = ` 1 =1 and updUser='${strUserId}' and voteTypeId='12' and pubParentId='${this.questionsId}'`;
    const strVoteType = '12';
    const strPubParentId = this.questionsId;

    const strQWhereCond = `questionsId='${this.questionsId}'`;
    try {
      //获取用户缓存数据
      const strWhere_User = '1=1';
      const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

      arrvqa_AnswerObjLst1 = await vqa_Answer_GetObjLstAsync(strWhereCond1);
      await vqa_Answer_GetObjLstAsync(strWhereCond2).then((jsonData) => {
        arrvqa_AnswerObjLst2 = <Array<clsvqa_AnswerEN>>jsonData;
      });

      const objqa_Questions = await qa_Questions_GetFirstObjAsync(strQWhereCond);
      if (objqa_Questions != null) {
        //$('#Questions_Name').html(objqa_Questions.questionsContent);
        $('#answerCount').html(objqa_Questions.answerCount.toString());
        $('#discussCount').html(objqa_Questions.discussCount.toString());
        $('#groupDiscussCount').html(objqa_Questions.groupDiscussCount.toString());
      }

      let strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId == '') strTopicId = '00000000';
      if (strTopicId != '') {
        const strWhereCond3 = `topicId ='${strTopicId}'`;

        //判断角色
        //不等于学生，其他角色都可以添加问题

        const strWhereCond4 = ` questionsId='${this.questionsId}' and topicId<>'00000000' `;

        arrvqa_AnswerNumObjLst1 = await vqa_AnswerEx_Getvqa_AnswerTopicIdNumObjLstAsync(
          strWhereCond4,
        );

        if (arrvqa_AnswerNumObjLst1.length > 0) {
          let arrTopicId = '';
          for (let i = 0; i < arrvqa_AnswerNumObjLst1.length; i++) {
            arrTopicId += `${arrvqa_AnswerNumObjLst1[i].topicId},`;
          }
          arrTopicId = arrTopicId.substring(0, arrTopicId.length - 1);
          const strWhereCond5 = `topicId in(${arrTopicId}) order by topicId Asc`;
          arrvRTUserRela0 = await vRTUserRela_GetObjLstAsync(strWhereCond5);
        }

        arrvRTUserRela0_1 = await vRTUserRela_GetObjLstAsync(strWhereCond3);
      }

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment2 = GetDivObjInDivObj(divName, 'J_ShortComment2');
      J_ShortComment2.innerHTML = '';
      if (arrvqa_AnswerObjLst1.length == 0) {
        const spnWarming = GetSpan_Empty('text-warning');
        const objQuestions = await qa_Questions_GetObjByQuestionsIdAsync(this.questionsId);
        if (objQuestions == null) {
          spnWarming.innerHTML = '当前没有选择题目！';
        } else {
          spnWarming.innerHTML = `当前题目:${objQuestions.questionsContent}没有推荐的答案！`;
        }
        J_ShortComment2.appendChild(spnWarming);
        return;
      }
      for (let i = 0; i < arrvqa_AnswerObjLst1.length; i++) {
        const objvQa_Answer = arrvqa_AnswerObjLst1[i];
        //头像
        const divUserheadPic = GetDiv_Empty('common-avatar J_User');
        const imgUser = GetImg_Empty('');
        imgUser.width = 30;
        imgUser.height = 30;

        let strUserheadPic = '';
        const objUser = arrUsers.find((x) => x.userId == objvQa_Answer.updUser);
        if (objUser != null) {
          if (objUser.headPic != '') {
            const strheadPic = `/${objUser.headPic}`;
            strUserheadPic += `<div class="common-avatar J_User" ><img src="${strheadPic}" width="100%" height="100%"></div>`;
            imgUser.src = strheadPic;
          } else {
            strUserheadPic +=
              '<div class="common-avatar J_User" ><img src="/UploadFiles/UserheadPic/n-avator-bg.png" width="100%" height="100%"></div>';
            imgUser.src = '/UploadFiles/UserheadPic/n-avator-bg.png';
          }
        } else {
          strUserheadPic +=
            '<div class="common-avatar J_User" ><img src="/UploadFiles/UserheadPic/n-avator-bg.png" width="100%" height="100%"></div>';
          imgUser.src = '/UploadFiles/UserheadPic/n-avator-bg.png';
        }
        divUserheadPic.appendChild(imgUser);
        J_ShortComment2.appendChild(divUserheadPic);

        //1.判断答案是否提交 ，没提交则显示自己的 并且可以编辑；
        if (objvQa_Answer.isSubmit == true) {
          varNum++;
          strhtml += '<div class="comment" >';
          const divComment_isSubmit = GetDiv_Empty('comment');
          //根据循环的答案得到主题ID，通过主题ID过滤得到当前主题用户关系列表，同时需要判断只有小组答案 才显示色码块；
          if (objvQa_Answer.isRecommend == true && arrvRTUserRela0 != null) {
            arrRTUserRelaObjLst = arrvRTUserRela0.filter((x) => x.topicId == objvQa_Answer.topicId);
            //循环数据源
            strhtml += '<div><th colspan="2">';
            const div1 = GetDiv_Empty('');
            const th1 = GetTh_Empty('');
            th1.colSpan = 2;
            for (let y = 0; y < arrRTUserRelaObjLst.length; y++) {
              const strUserName = arrRTUserRelaObjLst[y].userName;
              const strColorCode = arrRTUserRelaObjLst[y].colorCode;
              //得到显示用户的色码块
              strhtml += `<label style="background: ${strColorCode}">&nbsp;&nbsp;&nbsp;&nbsp;</label>&nbsp;&nbsp;<span>${strUserName}</span>&nbsp;&nbsp;&nbsp;`;
              const label1 = GetLabel_Empty('');
              label1.style.background = strColorCode;
              label1.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;';
              const spnUserName = GetSpan_Empty('ml-3 mr-3');
              spnUserName.innerText = strUserName;
              th1.appendChild(label1);
              th1.appendChild(spnUserName);
            }
            strhtml += '</th></div>';
            div1.appendChild(th1);
            divComment_isSubmit.appendChild(div1);
          }

          //头像
          strhtml += strUserheadPic;

          strhtml += '<div class="comment-block">';
          const divComment_block = GetDiv_Empty('comment-block');
          //给用户上色
          const p1 = GetP_Empty('comment-user');
          const spn1 = GetSpan_Empty('comment-username J_User');

          if (arrvqa_AnswerNumObjLst1.length > 0) {
            if (objvQa_Answer.topicId != '' && arrvRTUserRela0 != null) {
              arrvRTUserRela1 = arrvRTUserRela0.filter((x) => x.topicId == objvQa_Answer.topicId);
              const objvRTUserRela = arrvRTUserRela1.find((x) => x.userId == objvQa_Answer.updUser);
              if (objvRTUserRela != null) {
                if (objvQa_Answer.isRecommend == true) {
                  strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:#800080;font-weight:bold;">小组推荐回答(${objvRTUserRela.topicName})</span>`;
                  spn1.style.color = '#800080';
                  spn1.style.fontWeight = 'bold';
                  spn1.innerHTML = `小组推荐回答(${objvRTUserRela.topicName})`;
                } else {
                  strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:${objvRTUserRela.colorCode};">${objvQa_Answer.userName}(${objvRTUserRela.topicName})</span>`;
                  spn1.style.color = objvRTUserRela.colorCode;
                  spn1.innerHTML = `${objvQa_Answer.userName}(${objvRTUserRela.topicName})`;
                }
                p1.appendChild(spn1);
              } else {
                strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
                spn1.innerHTML = objvQa_Answer.userName;
                p1.appendChild(spn1);
              }
            } else {
              strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
              spn1.innerHTML = objvQa_Answer.userName;
              p1.appendChild(spn1);
            }
          } else {
            strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
            spn1.innerHTML = objvQa_Answer.userName;
            p1.appendChild(spn1);
          }
          strhtml += `<span class="comment-time">${objvQa_Answer.updDate}</span>`;
          {
            const spn2 = GetSpan_Empty('comment-time');
            spn2.innerHTML = objvQa_Answer.updDate;
            p1.appendChild(spn2);
          }
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment-username J_User">${varNum}楼</span></p>`;
          {
            const spn3 = GetSpan_Empty('comment-username J_User');
            spn3.innerHTML = `${varNum}楼`;
            p1.appendChild(spn3);
          }
          divComment_block.appendChild(p1);
          //给内容上色
          //给用户上色
          const divComment_content = GetDiv_Empty('comment-content J_CommentContent');
          divComment_content.innerHTML = objvQa_Answer.answerContent;
          if (arrvqa_AnswerNumObjLst1.length > 0) {
            if (objvQa_Answer.topicId != '' && arrvRTUserRela0 != null) {
              arrvRTUserRela1 = arrvRTUserRela0.filter((x) => x.topicId == objvQa_Answer.topicId);
              const objvRTUserRela = arrvRTUserRela1.find((x) => x.userId == objvQa_Answer.updUser);
              if (objvRTUserRela != null) {
                strhtml += `<div class="comment-content J_CommentContent"  style="color:${objvRTUserRela.colorCode};">${objvQa_Answer.answerContent}</div>`;
                divComment_content.style.color = objvRTUserRela.colorCode;
              } else {
                strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
              }
            } else {
              strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
            }
          } else {
            strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
          }
          divComment_block.appendChild(divComment_content);

          //回复区

          arrvqa_AnswerObjLst3 = arrvqa_AnswerObjLst2.filter(
            (x) => x.parentId == objvQa_Answer.answerId,
          );
          if (arrvqa_AnswerObjLst3.length > 0) {
            strhtml += '<div class="reply J_ReplyBlock">';
            const divReply = GetDiv_Empty('reply J_ReplyBlock');

            for (let j = 0; j < arrvqa_AnswerObjLst3.length; j++) {
              const objvQa_AnswerJ = arrvqa_AnswerObjLst3[j];

              strhtml += '<div class="reply-block">';
              const divReply_block = GetDiv_Empty('reply-block');
              strhtml += '<div class="reply-content">';
              const divReply_content = GetDiv_Empty('reply-content');

              const spnReply_User = GetSpan_Empty('reply-user');
              const b1 = GetB_Empty('reply-user-nick J_User');
              if (GetInputValueInDivObj(divName, 'hidQuestionsUser') == objvQa_AnswerJ.updUser) {
                strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" style="color:red;"> 题主(${objvQa_AnswerJ.userName})</b>：</span>`;
                b1.innerHTML = `题主(${objvQa_AnswerJ.userName})`;
                b1.style.color = 'red';
              } else {
                strhtml += `<span class="reply-user"><b class="reply-user-nick J_User">${objvQa_AnswerJ.userName}</b>：</span>`;
                b1.innerHTML = `题主(${objvQa_AnswerJ.userName})`;
              }
              spnReply_User.appendChild(b1);
              divReply_content.appendChild(spnReply_User);

              strhtml += `${objvQa_AnswerJ.answerContent}</div>`;
              const spnAnswerContent = GetSpan_Empty('');
              spnAnswerContent.innerHTML = objvQa_AnswerJ.answerContent;
              divReply_content.appendChild(spnAnswerContent);

              strhtml += '<div class="reply-operate reply-operate--hot">';
              const divReply_operate = GetDiv_Empty('reply-operate reply-operate--hot');

              const spnReply_operate_item = GetSpan_Empty('J_Vote reply-operate-item reply-up');
              const objLike = sysVoteStore.getObj(strVoteType, strUserId, objvQa_AnswerJ.answerId);
              if (objLike == null) {
                strhtml += `<span class="J_Vote reply-operate-item reply-up" onclick=btnAddVote_Click("${objvQa_AnswerJ.answerId}","${objvQa_AnswerJ.updUser}")>赞<i>${objvQa_AnswerJ.voteCount}</i></span >`;
                spnReply_operate_item.innerHTML = `赞<i>${objvQa_AnswerJ.voteCount}</i>`;
                (function (strAnswerId, strUpdUser) {
                  spnReply_operate_item.onclick = function () {
                    Tea_QA.vuebtn_Click('AddVote', `${strAnswerId}|${strUpdUser}`);
                  };
                })(objvQa_AnswerJ.answerId, objvQa_AnswerJ.updUser);
              } else {
                strhtml += `<span class="J_Vote reply-operate-item reply-up operate-visited" >已赞<i>${objvQa_AnswerJ.voteCount}</i></span >`;
                spnReply_operate_item.innerHTML = `已赞<i>${objvQa_AnswerJ.voteCount}</i>`;
              }
              divReply_operate.appendChild(spnReply_operate_item);

              strhtml += `<i class="reply-dot">·</i><span>${objvQa_AnswerJ.updDate}</span>`;
              {
                const i1 = GetI_Empty('reply-dot');
                i1.innerHTML = '·';
                const spnReply_Dot = GetSpan_Empty('');
                spnReply_Dot.innerHTML = objvQa_AnswerJ.updDate;

                divReply_operate.appendChild(i1);
                divReply_operate.appendChild(spnReply_Dot);
              }

              if (strUserId == objvQa_AnswerJ.updUser) {
                strhtml += '<i class="reply-dot reply-operate-report" >·</i>';
                strhtml += `<span class="reply-operate-item reply-operate-report J_ReplyReport" onclick=btnDelAnswer_Click("${objvQa_AnswerJ.answerId}")>删除9</span>`;
                {
                  const i2 = GetI_Empty('reply-dot reply-operate-report');
                  i2.innerHTML = '·';
                  const spnReply_operate_item2 = GetSpan_Empty(
                    'reply-operate-item reply-operate-report J_ReplyReport',
                  );
                  spnReply_operate_item2.innerHTML = '删除2';
                  (function (strAnswerId: string) {
                    spnReply_operate_item2.onclick = function () {
                      Tea_QA.vuebtn_Click('DelAnswer', strAnswerId);
                    };
                  })(objvQa_AnswerJ.answerId);
                  divReply_operate.appendChild(i2);
                  divReply_operate.appendChild(spnReply_operate_item2);
                }
                divReply.appendChild(divReply_operate);
              }
              strhtml += '</div>';
              divReply_content.appendChild(divReply_operate);

              strhtml += '</div>';
              divReply_block.appendChild(divReply_content);
            }
            strhtml += '</div>';
          }
          ///评论区
          strhtml += '<div class="comment-operate J_CommentOperate clearfix">';
          const divComment_operate = GetDiv_Empty('comment-operate J_CommentOperate clearfix');

          const spnComment_Operate_item = GetSpan_Empty(
            'J_Vote comment-operate-item comment-operate-up',
          );
          const objLike = sysVoteStore.getObj(strVoteType, strUserId, objvQa_Answer.answerId);
          if (objLike == null) {
            strhtml += `<span class="J_Vote comment-operate-item comment-operate-up" onclick=btnAddVote_Click("${objvQa_Answer.answerId}","${objvQa_Answer.updUser}")>赞<i>${objvQa_Answer.voteCount}</i></span>`;
            spnComment_Operate_item.innerHTML = `赞<i>${objvQa_Answer.voteCount}</i>`;
            (function (strAnswerId: string) {
              spnComment_Operate_item.onclick = function () {
                Tea_QA.vuebtn_Click('AddVote', strAnswerId);
              };
            })(objvQa_Answer.answerId);
          } else {
            strhtml += `<span class="J_Vote comment-operate-item comment-operate-up operate-visited">已赞<i>${objvQa_Answer.voteCount}</i></span>`;
            spnComment_Operate_item.className =
              'J_Vote comment-operate-item comment-operate-up operate-visited';
            spnComment_Operate_item.innerHTML = `已赞<i>${objvQa_Answer.voteCount}</i>`;
          }
          divComment_operate.appendChild(spnComment_Operate_item);

          strhtml += `<span class="J_Reply comment-operate-item comment-operate-reply" id="J_Reply" onclick=btnReplyAnswer_Click("${objvQa_Answer.answerId}")>回复</span>`;
          {
            const spnComment_Operate_item2 = GetSpan_Empty(
              'J_Reply comment-operate-item comment-operate-reply',
            );
            spnComment_Operate_item2.id = 'J_Reply';
            spnComment_Operate_item2.innerHTML = '回复';
            (function (strAnswerId: string) {
              spnComment_Operate_item2.onclick = function () {
                Tea_QA.vuebtn_Click('ReplyAnswer', strAnswerId);
              };
            })(objvQa_Answer.answerId);
            divComment_operate.appendChild(spnComment_Operate_item2);
          }

          strhtml += '</div>';
          divComment_block.appendChild(divComment_operate);

          if (strTopicId != '') {
            arrvqa_AnswerObjLst1_1 = arrvqa_AnswerObjLst1.filter((x) => x.topicId == strTopicId);
            if (arrvqa_AnswerObjLst1_1.length > 0) {
              arrvqa_AnswerObjLst1_2 = arrvqa_AnswerObjLst1_1.filter((x) => x.isRecommend == true);

              if (arrvqa_AnswerObjLst1_2.length == 0) {
                arrvRTUserRela0_2 = arrvRTUserRela0_1.filter(
                  (x) => x.userId == objvQa_Answer.updUser,
                );
                if (arrvRTUserRela0_2.length > 0) {
                  const objvRTUserRela = arrvRTUserRela0_1.find((x) => x.topicUserRoleId == '0002');
                  if (objvRTUserRela != null) {
                    if (objvRTUserRela.userId == strUserId) {
                      if (objvQa_Answer.isRecommend != true) {
                        strhtml += `<div class="J_Report comment-report" style="right:50px;" id="J_Report6673850347411436155" onclick=btnUpdateAnswer_Click("${objvQa_Answer.answerId}","${objvQa_Answer.topicId}")>小组推荐</div>`;
                        const divComment_report = GetDiv_Empty('J_Report comment-report');
                        divComment_report.innerHTML = '小组推荐';
                        divComment_report.id = 'J_Report6673850347411436155';
                        (function (strAnswerId, strTopicId) {
                          divComment_report.onclick = function () {
                            Tea_QA.vuebtn_Click('UpdateAnswer', `${strAnswerId}|${strTopicId}`);
                          };
                        })(objvQa_Answer.answerId, objvQa_Answer.topicId);
                        divComment_block.appendChild(divComment_report);
                      }
                    }
                  }
                }
              }
            }
          }
          if (strUserId == objvQa_Answer.updUser) {
            strhtml += `<div class="J_Report comment-report" onclick=btnDelAnswer_Click("${objvQa_Answer.answerId}")>删除3</div>`;
            {
              const divDelete = GetDiv_Empty('J_Report comment-report');
              const spnDelAnswer = GetSpan_Empty('');

              spnDelAnswer.innerHTML = '删除11';
              (function (strAnswerId: string) {
                spnDelAnswer.onclick = function () {
                  Tea_QA.vuebtn_Click('DelAnswer', strAnswerId);
                };
              })(objvQa_Answer.answerId);
              const spnUpdAnswer = GetSpan_Empty('');

              spnUpdAnswer.innerHTML = '修改';
              (function (strAnswerId: string, strTopicId: string) {
                spnUpdAnswer.onclick = function () {
                  Tea_QA.vuebtn_Click('UpdAnswer', `${strAnswerId}|${strTopicId}`);
                };
              })(objvQa_Answer.answerId, objvQa_Answer.topicId);
              divDelete.appendChild(spnDelAnswer);
              divDelete.appendChild(spnUpdAnswer);

              divComment_block.appendChild(divDelete);
            }
          }
          //历史记录
          strhtml += `<div class="J_Report comment-report" style="right:150px;" onclick=SearchParentV("${objvQa_Answer.answerId}")>历史版本</div>`;
          {
            const divSearchParentV = GetDiv_Empty('J_Report comment-report');
            divSearchParentV.innerHTML = '历史版本2';
            divSearchParentV.style.right = '150px';
            (function (strAnswerId: string) {
              divSearchParentV.onclick = function () {
                Tea_QA.vuebtn_Click('SearchParentV', strAnswerId);
              };
            })(objvQa_Answer.answerId);
            divComment_block.appendChild(divSearchParentV);
          }

          strhtml += '</div></div>';
          divComment_isSubmit.appendChild(divComment_block);
          J_ShortComment2.appendChild(divComment_isSubmit);
        } else {
          //如果是小组推荐答案，那么成员都可以看见；
          if (objvQa_Answer.isRecommend == true) {
            if (objvQa_Answer.topicId != '' && arrvRTUserRela0 != null) {
              arrvRTUserRela1 = arrvRTUserRela0.filter((x) => x.topicId == objvQa_Answer.topicId);
              //如果当前用户包含在主题用户关系表中，那么则内容可见；
              const objvRTUserRela = arrvRTUserRela1.find((x) => x.userId == strUserId);
              if (objvRTUserRela != null) {
                strhtml += '<div class="comment" >';
                const divComment_NotIsSubmit = GetDiv_Empty('comment');
                //头像
                strhtml += strUserheadPic;

                strhtml += '<div class="comment-block">';
                const divComment_block = GetDiv_Empty('comment-block');

                const p1 = GetP_Empty('comment-user');
                const spn1 = GetSpan_Empty('comment-username J_User');
                ////给用户上色

                if (arrvqa_AnswerNumObjLst1.length > 0) {
                  if (objvQa_Answer.topicId != '') {
                    arrvRTUserRela1 = arrvRTUserRela0.filter(
                      (x) => x.topicId == objvQa_Answer.topicId,
                    );
                    const objvRTUserRela = arrvRTUserRela1.find(
                      (x) => x.userId == objvQa_Answer.updUser,
                    );
                    if (objvRTUserRela != null) {
                      if (objvQa_Answer.isRecommend == true) {
                        strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:#800080;font-weight:bold;">小组推荐回答(${objvRTUserRela.topicName})</span>`;
                        spn1.style.color = '#800080';
                        spn1.style.fontWeight = 'bold';
                        spn1.innerHTML = `小组推荐回答(${objvRTUserRela.topicName})`;
                      } else {
                        strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:${objvRTUserRela.colorCode};">${objvQa_Answer.userName}(${objvRTUserRela.topicName})</span>`;
                        spn1.style.color = objvRTUserRela.colorCode;
                        spn1.innerHTML = `${objvQa_Answer.userName}(${objvRTUserRela.topicName})`;
                      }
                      p1.appendChild(spn1);
                    } else {
                      strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
                      spn1.innerHTML = objvQa_Answer.userName;
                      p1.appendChild(spn1);
                    }
                  } else {
                    strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
                    spn1.innerHTML = objvQa_Answer.userName;
                    p1.appendChild(spn1);
                  }
                } else {
                  strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
                  spn1.innerHTML = objvQa_Answer.userName;
                  p1.appendChild(spn1);
                }

                strhtml += `<span class="comment-time">${objvQa_Answer.updDate}</span>`;
                {
                  const spn2 = GetSpan_Empty('comment-time');
                  spn2.innerHTML = objvQa_Answer.updDate;
                  p1.appendChild(spn2);
                }

                strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;</p>';
                divComment_block.appendChild(p1);

                ////给内容上色
                ////给用户上色
                const divComment_content = GetDiv_Empty('comment-content J_CommentContent');
                divComment_content.innerHTML = objvQa_Answer.answerContent;
                if (arrvqa_AnswerNumObjLst1.length > 0) {
                  if (objvQa_Answer.topicId != '') {
                    arrvRTUserRela1 = arrvRTUserRela0.filter(
                      (x) => x.topicId == objvQa_Answer.topicId,
                    );
                    const objvRTUserRela = arrvRTUserRela1.find(
                      (x) => x.userId == objvQa_Answer.updUser,
                    );
                    if (objvRTUserRela != null) {
                      strhtml += `<div class="comment-content J_CommentContent"  style="color:${objvRTUserRela.colorCode};">${objvQa_Answer.answerContent}</div>`;
                      divComment_content.style.color = objvRTUserRela.colorCode;
                    } else {
                      strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
                    }
                  } else {
                    strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
                  }
                } else {
                  strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
                }
                divComment_block.appendChild(divComment_content);

                strhtml += `<div class="J_Report comment-report" style="right:100px;" id="J_Report6673850347411436155" onclick=btnSubmitQa_Answer_Click("${objvQa_Answer.answerId}")>提交</div>`;
                {
                  const divSubmit = GetDiv_Empty('J_Report comment-report');
                  divSubmit.style.right = '100px';
                  divSubmit.id = 'J_Report6673850347411436155';
                  divSubmit.innerHTML = '提交';
                  (function (strAnswerId: string) {
                    divSubmit.onclick = function () {
                      Tea_QA.vuebtn_Click('SubmitQa_Answer', strAnswerId);
                    };
                  })(objvQa_Answer.answerId);
                  divComment_block.appendChild(divSubmit);
                }

                strhtml += `<div class="J_Report comment-report" style="right:50px;" id="J_Report6673850347411436155" onclick=btnUpdateQa_Answer_Click("${objvQa_Answer.answerId}","${objvQa_Answer.topicId}")>修改</div>`;
                {
                  const divUpdate = GetDiv_Empty('J_Report comment-report');
                  divUpdate.style.right = '50px';
                  divUpdate.id = 'J_Report6673850347411436156';
                  divUpdate.innerHTML = '修改';
                  (function (strAnswerId, strTopicId) {
                    divUpdate.onclick = function () {
                      Tea_QA.vuebtn_Click('UpdateQa_Answer', `${strAnswerId}|${strTopicId}`);
                    };
                  })(objvQa_Answer.answerId, objvQa_Answer.topicId);
                  divComment_block.appendChild(divUpdate);
                }

                strhtml += `<div class="J_Report comment-report" onclick=btnDelAnswer_Click("${objvQa_Answer.answerId}")>删除10</div>`;
                {
                  const divDelete = GetDiv_Empty('J_Report comment-report');
                  divDelete.innerHTML = '删除3';
                  (function (strAnswerId: string) {
                    divDelete.onclick = function () {
                      Tea_QA.vuebtn_Click('DelAnswer', strAnswerId);
                    };
                  })(objvQa_Answer.answerId);
                  divComment_block.appendChild(divDelete);
                }
                divComment_NotIsSubmit.appendChild(divComment_block);
                J_ShortComment2.appendChild(divComment_NotIsSubmit);
              }
            }
          } else {
            //如果不是小组答案，且没有提交的数据，那么只能自己看自己的
            if (strUserId == objvQa_Answer.updUser) {
              strhtml += '<div class="comment" >';
              const divComment = GetDiv_Empty('comment');
              //头像
              strhtml += strUserheadPic;

              strhtml += '<div class="comment-block">';
              const divComment_block = GetDiv_Empty('comment-block');

              ////给用户上色
              const p1 = GetP_Empty('comment-user');

              if (arrvqa_AnswerNumObjLst1.length > 0) {
                if (objvQa_Answer.topicId != '' && arrvRTUserRela0 != null) {
                  arrvRTUserRela1 = arrvRTUserRela0.filter(
                    (x) => x.topicId == objvQa_Answer.topicId,
                  );
                  const objvRTUserRela = arrvRTUserRela1.find(
                    (x) => x.userId == objvQa_Answer.updUser,
                  );
                  if (objvRTUserRela != null) {
                    if (arrvqa_AnswerObjLst1[i].isRecommend == true) {
                      strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:#800080;font-weight:bold;">小组推荐回答(${objvRTUserRela.topicName})</span>`;
                      {
                        const spn1 = GetSpan_Empty('comment-username J_User');
                        spn1.style.color = '#800080';
                        spn1.style.fontWeight = 'bold';
                        spn1.innerHTML = `小组推荐回答(${objvRTUserRela.topicName})`;
                        p1.appendChild(spn1);
                      }
                    } else {
                      strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:${objvRTUserRela.colorCode};">${objvQa_Answer.userName}(${objvRTUserRela.topicName})</span>`;
                      {
                        const spn1 = GetSpan_Empty('comment-username J_User');
                        spn1.style.color = objvRTUserRela.colorCode;
                        spn1.innerHTML = `${objvQa_Answer.userName}(${objvRTUserRela.topicName})`;
                        p1.appendChild(spn1);
                      }
                    }
                  } else {
                    strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
                    {
                      const spn1 = GetSpan_Empty('comment-username J_User');
                      spn1.innerHTML = objvQa_Answer.userName;
                      p1.appendChild(spn1);
                    }
                  }
                } else {
                  strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
                  {
                    const spn1 = GetSpan_Empty('comment-username J_User');
                    spn1.innerHTML = objvQa_Answer.userName;
                    p1.appendChild(spn1);
                  }
                }
              } else {
                strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
                {
                  const spn1 = GetSpan_Empty('comment-username J_User');
                  spn1.innerHTML = objvQa_Answer.userName;
                  p1.appendChild(spn1);
                }
              }

              strhtml += `<span class="comment-time">${objvQa_Answer.updDate}</span>`;
              {
                const spn2 = GetSpan_Empty('comment-time');
                spn2.innerHTML = objvQa_Answer.updDate;
                p1.appendChild(spn2);
              }

              strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;</p>';
              divComment_block.appendChild(p1);
              ////给内容上色
              ////给用户上色
              const divComment_content = GetDiv_Empty('comment-content J_CommentContent');
              divComment_content.innerHTML = objvQa_Answer.answerContent;
              if (arrvqa_AnswerNumObjLst1.length > 0) {
                if (objvQa_Answer.topicId != '' && arrvRTUserRela0 != null) {
                  arrvRTUserRela1 = arrvRTUserRela0.filter(
                    (x) => x.topicId == objvQa_Answer.topicId,
                  );
                  const objvRTUserRela = arrvRTUserRela1.find(
                    (x) => x.userId == objvQa_Answer.updUser,
                  );
                  if (objvRTUserRela != null) {
                    strhtml += `<div class="comment-content J_CommentContent"  style="color:${objvRTUserRela.colorCode};">${objvQa_Answer.answerContent}</div>`;
                    divComment_content.style.color = objvRTUserRela.colorCode;
                  } else {
                    strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
                  }
                } else {
                  strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
                }
              } else {
                strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
              }
              divComment_block.appendChild(divComment_content);

              if (strTopicId != '') {
                arrvqa_AnswerObjLst1_1 = arrvqa_AnswerObjLst1.filter(
                  (x) => x.topicId == strTopicId,
                );
                if (arrvqa_AnswerObjLst1_1.length > 0) {
                  arrvqa_AnswerObjLst1_2 = arrvqa_AnswerObjLst1_1.filter(
                    (x) => x.isRecommend == true,
                  );

                  if (arrvqa_AnswerObjLst1_2.length == 0) {
                    arrvRTUserRela0_2 = arrvRTUserRela0_1.filter(
                      (x) => x.userId == objvQa_Answer.updUser,
                    );
                    if (arrvRTUserRela0_2.length > 0) {
                      const objvRTUserRela = arrvRTUserRela0_1.find(
                        (x) => x.topicUserRoleId == '0002',
                      );
                      if (objvRTUserRela != null) {
                        if (objvRTUserRela.userId == strUserId) {
                          if (arrvqa_AnswerObjLst1[i].isRecommend != true) {
                            strhtml += `<div class="J_Report comment-report" style="right:150px;" id="J_Report6673850347411436155" onclick=btnUpdateAnswer_Click("${objvQa_Answer.answerId}","${objvQa_Answer.topicId}")>小组推荐</div>`;
                            const divComment_report = GetDiv_Empty('J_Report comment-report');
                            divComment_report.innerHTML = '小组推荐';
                            divComment_report.id = 'J_Report6673850347411436155';
                            (function (strAnswerId, strTopicId) {
                              divComment_report.onclick = function () {
                                Tea_QA.vuebtn_Click('UpdateAnswer', `${strAnswerId}|${strTopicId}`);
                              };
                            })(objvQa_Answer.answerId, objvQa_Answer.topicId);
                            divComment_block.appendChild(divComment_report);
                          }
                        }
                      }
                    }
                  }
                }
              }

              strhtml += `<div class="J_Report comment-report" style="right:100px;" id="J_Report6673850347411436155" onclick=btnSubmitQa_Answer_Click("${objvQa_Answer.answerId}")>提交</div>`;
              {
                const divSubmit = GetDiv_Empty('J_Report comment-report');
                divSubmit.style.right = '100px';
                divSubmit.id = 'J_Report6673850347411436155';
                divSubmit.innerHTML = '提交';
                (function (strAnswerId: string) {
                  divSubmit.onclick = function () {
                    Tea_QA.vuebtn_Click('SubmitQa_Answer', strAnswerId);
                  };
                })(objvQa_Answer.answerId);
                divComment_block.appendChild(divSubmit);
              }

              strhtml += `<div class="J_Report comment-report" style="right:50px;" id="J_Report6673850347411436155" onclick=btnUpdateQa_Answer_Click("${objvQa_Answer.answerId}","${objvQa_Answer.topicId}")>修改</div>`;
              {
                const divUpdate = GetDiv_Empty('J_Report comment-report');
                divUpdate.style.right = '50px';
                divUpdate.id = 'J_Report6673850347411436156';
                divUpdate.innerHTML = '修改';
                (function (strAnswerId, strTopicId) {
                  divUpdate.onclick = function () {
                    Tea_QA.vuebtn_Click('UpdateQa_Answer', `${strAnswerId}|${strTopicId}`);
                  };
                })(objvQa_Answer.answerId, objvQa_Answer.topicId);
                divComment_block.appendChild(divUpdate);
              }

              strhtml += `<div class="J_Report comment-report" onclick=btnDelAnswer_Click("${objvQa_Answer.answerId}")>删除4</div>`;
              {
                const divDelete = GetDiv_Empty('J_Report comment-report');
                // divDelete.style.right = '100px';
                // divDelete.id = 'J_Report6673850347411436155';
                divDelete.innerHTML = '删除1';
                (function (strAnswerId: string) {
                  divDelete.onclick = function () {
                    Tea_QA.vuebtn_Click('DelAnswer', strAnswerId);
                  };
                })(objvQa_Answer.answerId);
                divComment_block.appendChild(divDelete);
              }
              divComment.appendChild(divComment_block);
              J_ShortComment2.appendChild(divComment);
            }
          }

          strhtml += '</div></div>';
        }
      }
      console.log(strhtml);
      // $('#J_ShortComment2').html(strhtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取数据不成功,${e}.`;
      alert(strMsg);
    }
  }

  //添加高亮
  public btnUpdatePaperPageNum_Click(strFindText: string) {
    this.RemoveSelect();
    //const objLst = document.getElementsByTagName("span");
    const objLst =
      window.parent.frames['iframe_qaPdf'].contentDocument.getElementsByTagName('span');
    //strIdCurrEduclsstrStartName: string = "400%";
    const arrElement: Array<HTMLElement> = this.GetArray(objLst) as Array<HTMLElement>;
    //let arrSpan
    const arrFind: Array<HTMLSpanElement> = arrElement as Array<HTMLSpanElement>;
    //let arrFind: Array<HTMLSpanElement> = arrSpan.filter(x => x.id.indexOf(strStartName) > -1);

    const arrWord: Array<string> = arrFind.map((x) => x.innerText);

    let strWord = arrWord.join('');
    const intWord = strWord.indexOf('400%');
    strWord = strWord.substring(intWord);

    //let strFindText = GetInputValueInDivObj(divName, 'hidExplainContent');
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
      }
      const intLen = strFindText.length;
      const intEnd = intStart + intLen;
      const arrSpan_Sel: Array<HTMLSpanElement> = arrFind.slice(intStart, intEnd);
      arrSpan_Sel.forEach((x) => {
        const strWord = x.innerText;
        //const objSpan_New: HTMLSpanElement = document.createElement("span");
        const objSpan_New: HTMLSpanElement =
          window.parent.frames['iframe_qaPdf'].contentDocument.createElement('span');
        objSpan_New.className = 'text-span';
        objSpan_New.innerText = strWord;
        x.innerHTML = '';
        x.appendChild(objSpan_New);
      });
    }
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
  //清除高亮
  public RemoveSelect() {
    //const objLst = document.getElementsByTagName("span");
    const objLst =
      window.parent.frames['iframe_qaPdf'].contentDocument.getElementsByTagName('span');
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

  ///添加问题推送
  public async AddNewqa_Push() {
    try {
      let strJson = clsPubSessionStorage.GetUserLst();
      const JsonLent: number = strJson.length;
      strJson = strJson.substring(0, JsonLent - 1);
      console.log(strJson);
      // const strUses = eval(`[${strJson}]`);

      const strWhereCond = ` idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}' order by stuName Asc`;
      const arrCurrEduClsStuObjLst: Array<clsvCurrEduClsStuEN> =
        await vCurrEduClsStu_GetObjLstAsync(strWhereCond);

      //把存入的数组拿出来循环并添加到推送表
      for (let i = 0; i < arrCurrEduClsStuObjLst.length; i++) {
        const strUserId = arrCurrEduClsStuObjLst[i].stuId;
        const objqa_PushEN: clsqa_PushEN = new clsqa_PushEN();
        objqa_PushEN.SetQuestionsId(this.questionsId);
        objqa_PushEN.SetReceiveUser(strUserId);
        objqa_PushEN.SetIsReceive(false);
        objqa_PushEN.SetIsRequestReply(true); // 是否要求回复
        objqa_PushEN.SetUpdDate(clsPubFun4Web.getNowDate());
        objqa_PushEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班Id
        const responseText = await qa_Push_AddNewRecordAsync(objqa_PushEN);
        console.log(responseText);
      }
      //添加完以后清空用户数组字符串
      //strIdCurrEduclsstrKey: string = "UserLst";
      //sessionStorage.removeItem(strKey);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `推送记录添加不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjqa_QuestionsEN">数据传输的目的类对象</param>
  */
  public PutDataToqa_QuestionsClass(pobjqa_QuestionsEN: clsqa_QuestionsEN) {
    pobjqa_QuestionsEN.SetPaperId(clsPrivateSessionStorage.paperId);
    pobjqa_QuestionsEN.SetQaPaperId('00000000');
    pobjqa_QuestionsEN.SetQuestionsTypeId('02');
    pobjqa_QuestionsEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班Id

    pobjqa_QuestionsEN.SetQuestionsContent(this.questionsContent); // 提问内容
    pobjqa_QuestionsEN.SetPdfContent(this.pdfContent); // Pdf内容
    pobjqa_QuestionsEN.SetPdfPageNum(this.pdfPageNum); // Pdf页码
    pobjqa_QuestionsEN.SetOrderNum(this.orderNum); // 序号

    pobjqa_QuestionsEN.SetPdfPageNumIn(this.page_cache);
    pobjqa_QuestionsEN.SetPdfPageTop(this.page_top);
    pobjqa_QuestionsEN.SetPdfZoom(this.pdf_zoom);
    let pdfDiv_top = this.pdfDiv_top;
    pdfDiv_top = pdfDiv_top.substring(0, pdfDiv_top.length - 2);
    let pdfDiv_left = this.pdfDiv_left;
    pdfDiv_left = pdfDiv_left.substring(0, pdfDiv_left.length - 2);

    pobjqa_QuestionsEN.SetPdfDivTop(pdfDiv_top);
    pobjqa_QuestionsEN.SetPdfDivLet(pdfDiv_left);

    pobjqa_QuestionsEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjqa_QuestionsEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
  }

  /* 函数功能:把类对象的属性内容显示到界面上
   注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
    如果在设置数据库时,就应该一级字段在前,二级字段在后
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
    <param name = "pobjqa_QuestionsEN">表实体类对象</param>
  */
  public GetDataFromqa_QuestionsClass(pobjqa_QuestionsEN: clsqa_QuestionsEN) {
    this.questionsContent = pobjqa_QuestionsEN.questionsContent; // 提问内容
    this.pdfContent = pobjqa_QuestionsEN.pdfContent; // Pdf内容
    this.pdfPageNum = pobjqa_QuestionsEN.pdfPageNum; // Pdf页码
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

  public static async btnDelQuestions_Click_pyf(strKeyId: string) {
    const objPage = new Tea_QA();
    objPage.btnDelQuestions_Click(strKeyId);
  }
  /* 
    在数据表里删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   */
  public async btnDelQuestions_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的记录！`);
        return '';
      }

      //删除问题的时候需要查看一下是否有答案，如果有不能删除
      const strWhereCond = ` questionsId='${strKeyId}'`;
      const intAnswerCount = await qa_Answer_GetRecCountByCondAsync(strWhereCond);
      if (intAnswerCount > 0) {
        message.info('该问题下面已经有回答了，所以不能删除哦！');
        return '';
      } else {
        await this.DelRecord1(strKeyId);
        await this.btnReOrder_Click();
        await this.Showdiv_Questions();
        await this.Showdiv_PdfQuestions();
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
    删除问题
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   */
  public async DelRecord1(strQuestionsId: string) {
    try {
      const responseText = await qa_Questions_DelRecordAsync(strQuestionsId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        await this.SynQuestions();
        const strInfo = `删除记录成功!`;
        //显示信息框
        //alert(strInfo);
        message.success(strInfo);
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

  //添加删除问题的时候统计问题数据量到论文答疑表
  public async SynQuestions() {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.SynQuestions.name;

    const strPaperId = clsPrivateSessionStorage.paperId;

    //添加记录的同时并记录论文读写的教师评价数
    const strWhereCond = ` questionsTypeId='02' and paperId='${strPaperId}'`;
    const intQuestionsCount = await vqa_Questions_GetRecCountByCondAsync(strWhereCond);

    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strPaperId);
    objPaperEN.SetTeaQCount(intQuestionsCount);

    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    const responseText = await Paper_UpdateRecordAsync(objPaperEN);
    const returnBool = !!responseText;
    if (returnBool == true) {
      //刷新缓存
      console.log('添加问题数量成功！');
    } else {
      console.log('添加问题数量失败！');
    }
    //添加记录的同时并记录论文读写的教师评价数
  }

  /*************************************************回答相关的模块********************************************************/

  //获取当前登录用户的色码在该主题下
  public async GetLoginUserColorCode(strTopicId: string) {
    //主题用户关系
    // const arrRTUserRelaObjLst: Array<clsvRTUserRelaEN> = [];

    const strUserId = userStore.getUserId;
    $('#hidUserId').val(strUserId);
    ////获取缓存色码表；
    //strIdCurrEduclsarrGs_ColorObjLst: Array<clsgs_ColorEN> = [];
    ////获取色码数据
    //const responseObjLst3 = await gs_Color_GetObjLstCache().then((jsonData) => {
    //    arrGs_ColorObjLst = <Array<clsgs_ColorEN>>jsonData;

    //});
    const strWhereCondUser = ` 1=1 And ${clsvRTUserRelaEN.con_TopicId} = '${strTopicId}' And ${clsvRTUserRelaEN.con_UserId} ='${strUserId}'`;
    //根据当前登录人和主题Id 查询用户排序号，根据排序号 得到色码对应色块；
    await vRTUserRela_GetFirstObjAsync(strWhereCondUser).then((jsonData) => {
      const objRtUsersEN: clsvRTUserRelaEN = <clsvRTUserRelaEN>jsonData;
      //通过用户的编号，获取色码表对应的编号色码
      //strIdCurrEduclsObjgs_Color = arrGs_ColorObjLst.find(x => x.userNo == objRtUsersEN.orderNum);

      if (objRtUsersEN != null) {
        $('#hidColorCode').val(objRtUsersEN.colorCode);
        ////这里用固定背景色；
        //$("#hidColorCode").val(objRtUsersEN.userBgColor);
      }
    });
  }

  //提交答案
  public async btnSubmitQa_Answer_Click(strAnswerId: string) {
    const strThisFuncName = this.btnSubmitQa_Answer_Click.name;

    this.answerId = strAnswerId;

    try {
      const objqa_AnswerEN: clsqa_AnswerEN = new clsqa_AnswerEN();
      objqa_AnswerEN.SetAnswerId(strAnswerId);
      objqa_AnswerEN.SetIsSubmit(true);

      objqa_AnswerEN.sfUpdFldSetStr = objqa_AnswerEN.updFldString; //设置哪些字段被修改(脏字段)
      if (objqa_AnswerEN.answerId == '' || objqa_AnswerEN.answerId == undefined) {
        throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
      }
      let returnBool = true;
      qa_Answer_UpdateRecordAsync(objqa_AnswerEN).then((jsonData) => {
        returnBool = jsonData;
      });
      if (returnBool == true) {
        //const gvResult = await this.btnShowAnswer_Click();

        const strInfo = `提交成功!`;
        message.success(strInfo);
        console.log('提交成功');
        //this.btnShowAnswer_Click();
        const [strQuestionId, strAnswerTypeId] =
          await qa_AnswerEx_GetQuestionIdAnswerTypeIdByAnswerIdAsyncEx(strAnswerId);
        await this.SynAnswer(strQuestionId, strAnswerTypeId);
        await this.Bind_Show3List(strQuestionId, strAnswerTypeId, enumCommentOrder.AllComment_01);
      } else {
        const strInfo = `提交失败!`;
        //alert(strInfo);
        message.success(strInfo);
        console.log('提交失败');
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  //添加历史版本
  public async AddVersionRecordSave() {
    const objqa_AnswerVerEN: clsqa_AnswerVerEN = new clsqa_AnswerVerEN();
    objqa_AnswerVerEN.SetAnswerId(this.answerId);
    this.PutDataToqa_AnswerVClass(objqa_AnswerVerEN);

    try {
      const responseText2 = await qa_AnswerVer_AddNewRecordAsync(objqa_AnswerVerEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        console.log('添加历史版本成功');
        return true;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加版本记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }

  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjConceptEN">数据传输的目的类对象</param>
  */
  public PutDataToqa_AnswerVClass(pobjqa_AnswerVerEN: clsqa_AnswerVerEN) {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    const strUserId = userStore.getUserId;
    pobjqa_AnswerVerEN.SetQuestionsId(this.questionsId); //问题ID

    pobjqa_AnswerVerEN.SetIsRecommend(true);
    let strTopicId = clsPrivateSessionStorage.topicIdInTree;
    if (strTopicId == '') strTopicId = '00000000';
    if (strTopicId != '') {
      pobjqa_AnswerVerEN.SetTopicId(strTopicId);
    }
    //pobjqa_AnswerEN.SetParentId("root";//父节点
    pobjqa_AnswerVerEN.SetAnswerTypeId(Tea_QA.answerTypeId); //回答类型Id
    pobjqa_AnswerVerEN.SetParentId(Tea_QA.parentId); //父节点
    pobjqa_AnswerVerEN.SetAnswerContent(this.answerContent); // 答案内容
    pobjqa_AnswerVerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjqa_AnswerVerEN.SetUpdUser(strUserId); // 修改用户Id
    //是否提交
    pobjqa_AnswerVerEN.SetIsSubmit(this.isSubmit);
  }

  /* 如果是被邀请回答的问题，回答完以后会更新推送表内的信息
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async btnUpdQA_Push_Click(pushId: number) {
    const strThisFuncName = this.btnUpdQA_Push_Click.name;

    const objqa_PushEN: clsqa_PushEN = new clsqa_PushEN();
    objqa_PushEN.SetPushId(pushId);
    objqa_PushEN.SetIsReceive(true);
    objqa_PushEN.SetIsReply(true);
    objqa_PushEN.SetReplyDate(clsPubFun4Web.getNowDate());
    objqa_PushEN.SetReceiveDate(clsPubFun4Web.getNowDate());
    objqa_PushEN.sfUpdFldSetStr = objqa_PushEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objqa_PushEN.pushId == 0 || objqa_PushEN.pushId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await qa_Push_UpdateRecordAsync(objqa_PushEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        message.success('当前邀请已经回复！');
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

  /**添加讨论*/
  public async DiscussSubmit_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    const objqa_AnswerEN: clsqa_AnswerEN = new clsqa_AnswerEN();
    if (Tea_QA.parentId == '') Tea_QA.parentId = 'root';
    const strDiscussContent = GetTextAreaValueInDivObj(divName, 'txtDiscussContent');
    if (strDiscussContent == '') {
      message.warning('请输入发布内容！');
      return;
    }
    objqa_AnswerEN.SetQuestionsId(this.questionsId); //问题ID
    let strTopicId = clsPrivateSessionStorage.topicIdInTree;
    if (strTopicId == '') strTopicId = '00000000';
    objqa_AnswerEN.SetTopicId(strTopicId);
    objqa_AnswerEN.SetAnswerTypeId(Tea_QA.answerTypeId); //回答类型Id
    objqa_AnswerEN.SetParentId(Tea_QA.parentId); //父节点
    //objqa_AnswerEN.SetParentId("root";//父节点
    objqa_AnswerEN.SetAnswerContent(strDiscussContent); // 讨论内容

    objqa_AnswerEN.SetUpdUser(userStore.getUserId); // 修改人
    objqa_AnswerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    //是否提交
    objqa_AnswerEN.SetIsSubmit(true);
    try {
      const strAnswerId = await qa_Answer_AddNewRecordWithReturnKeyAsync(objqa_AnswerEN);

      //存放隐藏控件，用用于历史版本添加；
      this.answerId = strAnswerId;

      //const returnBool: boolean = !!responseText2;
      if (strAnswerId != '') {
        //if (returnBool == true) {
        Tea_QA.answerContent = strDiscussContent;
        const [strQuestionId, strAnswerTypeId] =
          await qa_AnswerEx_GetQuestionIdAnswerTypeIdByAnswerIdAsyncEx(strAnswerId);
        await this.SynAnswer(strQuestionId, strAnswerTypeId);
        await this.AddNewRecordWithMaxIdSave3();

        await this.Bind_Show3List(strQuestionId, strAnswerTypeId, enumCommentOrder.AllComment_01);
        let strInfo = '';
        if (Tea_QA.parentId == 'root') {
          strInfo = `发布成功!`;
        } else {
          strInfo = `回复成功!`;
          $('#btnDiscussSubmit').html('发布');
          const txtDiscussContent = GetTextAreaObjInDivObj(divName, 'txtDiscussContent');
          txtDiscussContent.placeholder = '请输入讨论内容';
        }

        SetTextAreaValueInDivObj(divName, 'txtDiscussContent', '');
        message.success(strInfo);
        //div滚动条显示在最底层
        this.DiscussListOrderby();
        //alert(strInfo);
        return true;
      } else {
        const strInfo = `发布不成功!`;

        //显示信息框
        alert(strInfo);
        return false;
      }
      //return responseText2;//一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `发布不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 修改记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async UpdateRecordSave2() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    const strThisFuncName = this.UpdateRecordSave2.name;

    //
    const objqa_AnswerEN: clsqa_AnswerEN = new clsqa_AnswerEN();
    objqa_AnswerEN.SetAnswerId(this.answerId);
    $('#hidAnswerId').val(this.answerId);
    // let strHisToryUserId = '';
    //判断如果是小组数据修改，那么就比对数据
    if (GetInputValueInDivObj(divName, 'hidIsRecommend') != '') {
      //修改段落，那么首先需要查询该段落的最后一条历史记录，得到段落数据，然后取出来与当前段落数据比较，返回更改的段落数据
      const strWhereCond2 = ` 1=1 and answerId=${this.answerId} order by AnswerVId desc `;
      // intVersionCount = await qa_AnswerVer_GetRecCountByCondAsync(strWhereCond2);
      await qa_AnswerVer_GetFirstObjAsync(strWhereCond2).then((jsonData) => {
        const objqa_AnswerVerEN: clsqa_AnswerVerEN = <clsqa_AnswerVerEN>jsonData;

        if (objqa_AnswerVerEN != null) {
          //需要去标签的更改数据存放
          $('#inpLeft').val(objqa_AnswerVerEN.answerContent);
          //存放老的带标签的数据不更改
          $('#inpOldData').val(objqa_AnswerVerEN.answerContent);
          // const strHisToryUserId = objqa_AnswerVerEN.updUser;
        }
      });
      //调用比较方法
      startCompare();

      //返回比对后的字符串数据；
      const strInputNewContent = GetTextAreaValueInDivObj(divName, 'txtAnswerContent');
      const strNew = GetInputValueInDivObj(divName, 'inpRight');
      const strNewTextContent = clsPublicParagraph.GetNewStringList(strInputNewContent, strNew);
      //把得到新的数据存入编辑控件
      SetTextAreaValueInDivObj(divName, 'txtAnswerContent', strNewTextContent);
    }

    await this.PutDataToqa_AnswerClass(objqa_AnswerEN);

    objqa_AnswerEN.sfUpdFldSetStr = objqa_AnswerEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objqa_AnswerEN.answerId == '' || objqa_AnswerEN.answerId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await qa_Answer_UpdateRecordAsync(objqa_AnswerEN);
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

  //根据老的标签字符串，格式化后，循环数据存放对象列表；
  public AddArrayByString(strText: string): Array<clsPublicParagraph> {
    //用来记录是标签开始，还是结束；
    // let Ismark = false;
    let strTextValue = ''; //用来接收循环的数据组合；
    //声明一个临时对象列表
    const arrObjLst: Array<clsPublicParagraph> = new Array<clsPublicParagraph>();
    //循环标签字符串，这里循环的是老的标签数据；
    for (let i = 0; i < strText.length; i++) {
      //首先判断标签符号是否是<
      if (strText[i] == '<') {
        //判断临时数据是否为"" ;为空则说明数据已经被处理，是起始数据；不为空，则说明是标签中间内容部分
        if (strTextValue != '') {
          //不等于空，则说明是标签内容部分，结束，那么需要插入到对象列表；
          const objPublicParagraph = new clsPublicParagraph();
          objPublicParagraph.TextValue = strTextValue; //把数据存放到对象；
          objPublicParagraph.IsTag = false;

          arrObjLst.push(objPublicParagraph);

          //清空临时变量数据；
          strTextValue = '';

          //将数据插入对象列表后，更改为true，因为是标签
          // Ismark = true;
          //将字符存放到临时数据 ，进行组合
          strTextValue += strText[i];
        } else {
          //等于空，说明是开始，
          // Ismark = true;
          //将字符存放到临时数据 ，进行组合
          strTextValue += strText[i];
        }
      } else if (strText[i] == '>') {
        //如果是结束标签；那么ismark改为false；把临时数据存入对象，清空临时数据存放

        const objPublicParagraph = new clsPublicParagraph();
        objPublicParagraph.TextValue = strTextValue; //把数据存放到对象；
        objPublicParagraph.IsTag = true;

        arrObjLst.push(objPublicParagraph);

        // Ismark = false;
        strTextValue = '';
      } else {
        //不是<>标签，那么字符继续组合存放
        strTextValue += strText[i];

        ////判断ismark是否为true or false；为true说明还在循环标签 未结束；
        //if(Ismark == true)
        //{
        //    //那么字符继续组合存放
        //    strTextValue += strText[i];
        //}
        //else {
        //    //如果为false，那么则判断 不是标签了，是正常内容；
        //    strTextValue += strText[i];
        //}
      }
    }
    return arrObjLst;
  }

  /* 删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   */
  public async btnDelAnswer_Click(strAnswerId: string) {
    try {
      //先删除总表数据信息
      // strIdCurrEduclsstrAnswerId = GetInputValueInDivObj(divName, 'hidAnswerId');
      const returnBool6 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
        strAnswerId,
        '11',
        '3',
        clsPubLocalStorage.idCurrEduCls,
      );

      if (returnBool6 == true) {
        console.log('论文子观点数据总表同步成功；');
      } else {
        console.log('论文子观点数据总表同步失败；');
      }

      const [strQuestionId, strAnswerTypeId] =
        await qa_AnswerEx_GetQuestionIdAnswerTypeIdByAnswerIdAsyncEx(strAnswerId);
      await this.DelRecord2(strAnswerId);

      await this.Bind_Show3List(this.questionsId, strAnswerTypeId, enumCommentOrder.AllComment_01);
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
  public async DelRecord2(strAnswerId: string) {
    try {
      const returnInt = await qa_AnswerEx_DelRecordAsyncEx(strAnswerId);

      if (returnInt > 0) {
        await gs_AnswerCount_Delgs_AnswerCountsByCondAsync(`answerId='${strAnswerId}'`);
        const [strQuestionId, strAnswerTypeId] =
          await qa_AnswerEx_GetQuestionIdAnswerTypeIdByAnswerIdAsyncEx(strAnswerId);
        await this.SynAnswer(this.questionsId, strAnswerTypeId);
        const strInfo = `删除记录成功!`;
        //显示信息框
        message.success(strInfo);
        //alert(strInfo);
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

  public async PutDataToqa_AnswerClass(pobjqa_AnswerEN: clsqa_AnswerEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    pobjqa_AnswerEN.SetQuestionsId(this.questionsId); //问题ID
    if (GetInputValueInDivObj(divName, 'hidIsRecommend') != '') {
      pobjqa_AnswerEN.SetIsRecommend(true);
    }
    let strTopicId = clsPrivateSessionStorage.topicIdInTree;
    if (strTopicId == '') strTopicId = '00000000';
    if (strTopicId != '') {
      pobjqa_AnswerEN.SetTopicId(strTopicId);
    }
    //pobjqa_AnswerEN.SetParentId("root";//父节点
    pobjqa_AnswerEN.SetAnswerTypeId(Tea_QA.answerTypeId); //回答类型Id
    pobjqa_AnswerEN.SetParentId(Tea_QA.parentId); //父节点
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);

    pobjqa_AnswerEN.SetIdCurrEduCls(strIdCurrEduCls); //教学班Id
    pobjqa_AnswerEN.SetAnswerContent(this.answerContent); // 答案内容

    pobjqa_AnswerEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjqa_AnswerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    //是否提交
    pobjqa_AnswerEN.SetIsSubmit(this.isSubmit);
  }

  //添加删除答案的时候统计问题数据量到问题表和论文答疑表
  public async SynAnswer(strQuestionsId: string, strAnswerTypeId: enumAnswerType) {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.SynAnswer.name;

    //添加记录的同时并记录论文读写的教师评价数

    let strWhereCond = ` questionsId='${strQuestionsId}' and answerTypeId='${strAnswerTypeId}'`;
    if (strAnswerTypeId == '01') {
      strWhereCond += ' and isSubmit=1';
    }

    const intAnswerCount2 = await vqa_Answer_GetRecCountByCondAsync(strWhereCond);

    const objqa_QuestionsEN: clsqa_QuestionsEN = new clsqa_QuestionsEN();
    objqa_QuestionsEN.SetQuestionsId(strQuestionsId);
    if (strAnswerTypeId == '01') {
      objqa_QuestionsEN.SetAnswerCount(intAnswerCount2);
    } else if (strAnswerTypeId == '02') {
      objqa_QuestionsEN.SetDiscussCount(intAnswerCount2);
    } else {
      objqa_QuestionsEN.SetGroupDiscussCount(intAnswerCount2);
    }

    objqa_QuestionsEN.sfUpdFldSetStr = objqa_QuestionsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objqa_QuestionsEN.questionsId == '' || objqa_QuestionsEN.questionsId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    const responseText2 = await qa_Questions_UpdateRecordAsync(objqa_QuestionsEN);
    const returnBool2 = !!responseText2;
    if (returnBool2 == true) {
      //刷新缓存
      console.log('添加答案数量到答疑表成功！');
    } else {
      console.log('添加答案数量到答疑表失败！');
    }
    //添加记录的同时并记录论文读写的教师评价数
  }

  ////////////////////////////////////////////////////////////记录回答数，便于统计周////////////////////////////////////////////////////////////
  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
  */
  public async AddNewRecordWithMaxIdSave3() {
    //
    const objgs_AnswerCountEN: clsgs_AnswerCountEN = new clsgs_AnswerCountEN();
    await this.PutDataTogs_AnswerCountClass(objgs_AnswerCountEN);
    try {
      const responseText2 = await gs_AnswerCountEx_AddNewRecordWithMaxIdAsync(objgs_AnswerCountEN);
      const strAnswerCountId: string = responseText2;
      if (strAnswerCountId != '') {
        const strInfo = `添加回答统计记录数成功!`;

        //显示信息框
        console.log(strInfo);
        //message.success(strInfo);
        //alert(strInfo);
        return true;
      } else {
        const strInfo = `添加回答统计记录数不成功!`;

        //显示信息框
        console.log(strInfo);
        //alert(strInfo);
        return false;
      }
      //return responseText2;//一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加回答统计记录数不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  public async PutDataTogs_AnswerCountClass(pobjgs_AnswerCountEN: clsgs_AnswerCountEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);

    const strPaperId = clsPrivateSessionStorage.paperId;
    pobjgs_AnswerCountEN.SetPaperId(strPaperId); //论文ID
    pobjgs_AnswerCountEN.SetQuestionsId(this.questionsId); //问题ID
    if (GetInputValueInDivObj(divName, 'hidIsRecommend') != '') {
      pobjgs_AnswerCountEN.SetIsRecommend(true);
    }
    let strTopicId = clsPrivateSessionStorage.topicIdInTree;
    if (strTopicId == '') strTopicId = '00000000';
    if (strTopicId != '') {
      pobjgs_AnswerCountEN.SetTopicId(strTopicId);
    }
    //pobjgs_AnswerCountEN.SetParentId("root";//父节点
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);

    pobjgs_AnswerCountEN.SetIdCurrEduCls(strIdCurrEduCls); //教学班ID
    pobjgs_AnswerCountEN.SetAnswerId(this.answerId);
    pobjgs_AnswerCountEN.SetAnswerTypeId(Tea_QA.answerTypeId); //回答类型Id
    //pobjgs_AnswerCountEN.SetParentId($("#hidParentId").val();//父节点

    pobjgs_AnswerCountEN.SetAnswerContent(Tea_QA.answerContent); // 答案内容

    pobjgs_AnswerCountEN.SetDataUser(userStore.getUserId); // 修改人
    pobjgs_AnswerCountEN.SetUserName(userStore.getUserName); // 修改人

    pobjgs_AnswerCountEN.SetDataAddDate(clsPubFun4Web.getNowDate()); // 修改日期

    pobjgs_AnswerCountEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjgs_AnswerCountEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    //是否提交
    //pobjgs_AnswerCountEN.SetIsSubmit(this.isSubmit;
  }

  /////////////////////////////////////////////////////////点赞——邀请其他人/////////////////////////////////////////////////////

  /**
   * 添加点赞
   * @param strAnswerId
   * @param strUserId
   */
  public async btnAddVote_Click(strAnswerId: string, strUserId: string) {
    const strThisFuncName = this.btnAddVote_Click.name;

    //this.DivName = "divAddNewRecordSave";
    const objSysVoteEN: clsSysVoteEN = new clsSysVoteEN();

    //this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);

    objSysVoteEN.SetTableKey(strAnswerId);
    objSysVoteEN.SetVoteTypeId('12');
    objSysVoteEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objSysVoteEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    objSysVoteEN.SetLikedUserId(strUserId); //被点赞用户
    objSysVoteEN.SetPubParentId(this.questionsId);
    objSysVoteEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班Id

    //strWhereCond = " 1 =1 and updUser='" + userStore.getUserId + "' and tableKey=" + strAnswerId;
    try {
      //const responseText = await SysVote_IsExistRecordAsync(strWhereCond);
      //strIdCurrEduclsbolIsExist: boolean = responseText;
      //if (bolIsExist == true) {
      //    strIdCurrEduclsstrMsg: string = `您已经点赞过这条论文了，请给其他论文点赞一下吧！`;
      //    alert(strMsg);
      //    return responseText;//一定要有一个返回值，否则会出错！
      //}

      const returnBool = await SysVote_AddNewRecordAsync(objSysVoteEN);

      if (returnBool == true) {
        const strWhereCond2 = ` 1=1 and voteTypeId='12' and tableKey='${strAnswerId}'`;
        const intVoteCount = await SysVote_GetRecCountByCondAsync(strWhereCond2);

        const objqa_AnswerEN: clsqa_AnswerEN = new clsqa_AnswerEN();
        objqa_AnswerEN.SetAnswerId(strAnswerId);
        objqa_AnswerEN.SetVoteCount(intVoteCount);

        objqa_AnswerEN.sfUpdFldSetStr = objqa_AnswerEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objqa_AnswerEN.answerId == '' || objqa_AnswerEN.answerId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        qa_Answer_UpdateRecordAsync(objqa_AnswerEN).then(async (jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == true) {
            //const gvResult = await this.btnShowAnswer_Click();
            const strInfo = `已点赞!`;
            message.success(strInfo);
            console.log('已点赞');
            const [strQuestionId, strAnswerTypeId] =
              await qa_AnswerEx_GetQuestionIdAnswerTypeIdByAnswerIdAsyncEx(strAnswerId);
            this.Bind_Show3List(strQuestionId, strAnswerTypeId, enumCommentOrder.AllComment_01);
          } else {
            const strInfo = `点赞不成功!`;
            //alert(strInfo);
            message.success(strInfo);
            console.log('点赞不成功');
          }
        });
      } else {
        const strInfo = `点赞不成功!`;

        //显示信息框
        //alert(strInfo);
        message.success(strInfo);
        //this.DetailRecord();
        //this.BindGv_vPaperSubViewpoint();
      }

      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `点赞不成功,${e}.`;
      //alert(strMsg);
      message.success(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  //邀请其他人
  public async InviteOthers_Click() {
    const strWhereCond = `1=1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;

    //const objqa_Questions: clsqa_QuestionsEN = null;
    let arrvCurrEduClsStuObjLst: Array<clsvCurrEduClsStuEN> = [];
    let arrvCurrEduClsTeacherObjLst: Array<clsvCurrEduClsTeacherEN> = [];

    try {
      await vCurrEduClsStu_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrvCurrEduClsStuObjLst = <Array<clsvCurrEduClsStuEN>>jsonData;
      });
      await vCurrEduClsTeacher_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrvCurrEduClsTeacherObjLst = <Array<clsvCurrEduClsTeacherEN>>jsonData;
      });

      let strhtml1 = '';

      strhtml1 += '<ul>';
      let j = 0;
      for (let i = 0; i < arrvCurrEduClsStuObjLst.length; i++) {
        j++;
        strhtml1 += `<li class="btn-2">&nbsp;&nbsp;&nbsp;<span class="rowtit color3">${j}.</span>`;

        strhtml1 += `<a href="javascript:void(0)" onclick=btnAtUserName_Click("${arrvCurrEduClsStuObjLst[i].stuId}","${arrvCurrEduClsStuObjLst[i].stuName}")>[${arrvCurrEduClsStuObjLst[i].stuName}]</a>`;

        strhtml1 += '</li>';
      }
      strhtml1 += '</ul>';

      let strhtml2 = '';
      strhtml2 += '<ul class="artlist">';
      let k = 0;
      for (let i = 0; i < arrvCurrEduClsTeacherObjLst.length; i++) {
        k++;
        strhtml2 += `<li class="btn-2">&nbsp;&nbsp;&nbsp;<span class="rowtit color3">${k}.</span>`;
        strhtml2 += `<a href="javascript:void(0)" onclick=btnAtUserName_Click("${arrvCurrEduClsTeacherObjLst[i].teacherId}","${arrvCurrEduClsTeacherObjLst[i].teacherName}")>[${arrvCurrEduClsTeacherObjLst[i].teacherName}]</a>`;
        strhtml2 += '</li>';
      }
      strhtml2 += '</ul>';

      //strhtml3 = "内容1";
      //strhtml4 = "内容2";

      atOthers(strhtml1, strhtml2);
      //atOthers(strhtml3, strhtml4);
      //拼接；

      console.log('完成教学班教师和学生的信息绑定!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取教学班学生和教师的数据不成功,${e}.`;
      alert(strMsg);
    }
  }

  //at其他人
  public async btnAtUserName_Click(strKey: string, strName: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const key = GetInputValueInDivObjN(divName, 'hidInviteKey');
    if (key == 1) {
      // const varContentLen = this.questionsContent.length;
      // const area1 = this.questionsContent.substring(0, varContentLen);
      //@内容后附加空格标识
      const area2 = `@${strName} `;
      //strIdCurrEduclsarea3 = objString.substring(cursorPosition, getLength(objString) - cursorPosition);

      //更新textarea的value值
      this.questionsContent = this.questionsContent + area2;
    } else {
      // const varContentLen = this.answerContent.length;
      // const area1 = this.answerContent.substring(0, varContentLen);
      //@内容后附加空格标识
      const area2 = `@${strName} `;
      //strIdCurrEduclsarea3 = objString.substring(cursorPosition, getLength(objString) - cursorPosition);

      //更新textarea的value值
      this.answerContent = this.answerContent + area2;
    }
    //objUsers: stuUserLoginInfo = new stuUserLoginInfo();
    //objUsers.userId = strKey;
    //objUsers.userName = strName;
    //strJson = JSON.stringify(objUsers);
    if (clsPubSessionStorage.GetUserLst() != '') {
      const strJson = `${clsPubSessionStorage.GetUserLst()}'${strKey}',`;
      clsPubSessionStorage.SetUserLst(strJson);
    } else {
      const strJson = `'${strKey}',`;
      clsPubSessionStorage.SetUserLst(strJson);
    }

    LayercClose();
  }

  //////////////////////////////////////////////////问题表的重序、上移、下移///////////////////////////////////////////////

  /*
重序
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
*/
  public async btnReOrder_Click() {
    const objPage = new Tea_QA();
    // const divName = objPage.getDivName(enumDivType.LayOut_01);
    // if (this.PreCheck4Order() == false) return;
    const strQuestionsTypeId = '02';
    const strPaperId: string = clsPrivateSessionStorage.paperId;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        questionsTypeId: strQuestionsTypeId,
        paperId: strPaperId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await qa_Questions_ReOrderAsync(objOrderByData);
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
      alert(strMsg);
      return;
    }
    await objPage.Showdiv_Questions();
  }

  /*
    上移
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
    */
  public static async btnUpMove_Click(strQuestionsId: string, intOrderNum: number) {
    const objPage = new Tea_QA();
    // const divName = objPage.getDivName(enumDivType.LayOut_01);
    // if (GetInputValueInDivObjN(divName, 'hidOrderNum') == 0) {
    if (intOrderNum == 0) {
      await objPage.btnReOrder_Click();
    }
    //  if (this.PreCheck4Order() == false) return;
    const strQuestionsTypeId = '02';
    const strPaperId = clsPrivateSessionStorage.paperId;
    const arrKeyIds = [strQuestionsId]; // GetInputValueInDivObj(divName, 'hidKeyId') as any;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        questionsTypeId: strQuestionsTypeId,
        paperId: strPaperId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await qa_Questions_UpMoveAsync(objOrderByData);
      await qa_Questions_ReFreshCache();
    } catch (e: any) {
      const strMsg = `上1移记录出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await objPage.Showdiv_Questions();

    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    //arrKeyIds.forEach((e) => clsCommonFunc4Web.SetCkechedItem4KeyId(strListDiv, e));
  }

  /*
    下移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
    */
  public static async btnDownMove_Click(strQuestionsId: string, intOrderNum: number) {
    const objPage = new Tea_QA();
    const divName = objPage.getDivName(enumDivType.LayOut_01);
    // if (GetInputValueInDivObjN(divName, 'hidOrderNum') == 0) {
    if (intOrderNum == 0) {
      await objPage.btnReOrder_Click();
    }

    //  if (this.PreCheck4Order() == false) return;
    const strQuestionsTypeId = '02';
    const strPaperId = clsPrivateSessionStorage.paperId;
    const arrKeyIds = [strQuestionsId]; // GetInputValueInDivObj(divName, 'hidKeyId') as any;
    //先获取该节点段落最大段落数，如果和排序号相等，那么则是最后一条数据
    const orderNum = GetInputValueInDivObjN(divName, 'hidOrderNum');
    const strWhere = ` 1=1 And paperId='${strPaperId}' And questionsTypeId='${strQuestionsTypeId}'`;
    const intCount = await qa_Questions_GetRecCountByCondAsync(strWhere);
    if (intCount == orderNum) {
      const strMsg = `该记录已经是最后一条记录`;
      alert(strMsg);
      return;
    } else {
      try {
        const objOrderByData: clsOrderByData = new clsOrderByData();
        objOrderByData.KeyIdLst = arrKeyIds;
        const jsonObject = {
          questionsTypeId: strQuestionsTypeId,
          paperId: strPaperId,
        };
        const jsonStr: string = JSON.stringify(jsonObject);
        objOrderByData.ClassificationFieldValueLst = jsonStr;
        await qa_Questions_DownMoveAsync(objOrderByData);
        await qa_Questions_ReFreshCache();
      } catch (e: any) {
        const strMsg = `下移记录出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      await objPage.Showdiv_Questions();
    }

    //await this.BindGv_vPaperSubViewpoint();
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    //arrKeyIds.forEach((e) => clsCommonFunc4Web.SetCkechedItem4KeyId(strListDiv, e));
  }

  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  //public TagsClear() {
  //    this.tagsContent = "";
  //}
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

  /*
   * 设置取消按钮的标题
   */
  public set btnCancel2(value: string) {
    $('#btnCancel2').html(value);
  }
  /*
   * 设置确定按钮的标题
   */
  public set btnOKUpd2(value: string) {
    $('#btnOKUpd2').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnOKUpd2(): string {
    return $('#btnOKUpd2').html();
  }

  // /*
  // * 设置确定按钮的标题
  //*/
  // public set btnOKUpd3(value: string) {
  //     $("#btnOKUpd3").html(value);
  // }
  // /*
  // * 获取按钮的标题
  //*/
  // public get btnOKUpd3(): string {
  //     return $("#btnOKUpd3").html();
  // }
  /*
   * 序号
   */
  public set orderNum(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtOrderNum', value);
  }
  /*
   * 序号
   */
  public get orderNum(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'txtOrderNum');
  }

  //  /*
  // * Pdf内容
  //*/
  //  public set pdfContent(value: string) {
  //      $("#hidPdfContent").val(value);
  //  }
  //  /*
  //  * Pdf内容
  // */
  //  public get pdfContent(): string {
  //      return $("#hidPdfContent").val();
  //  }

  //  /*
  //  * Pdf页码
  // */
  //  public set pdfPageNum(value: number) {
  //      $("#hidPdfPageNum").val(value);
  //  }
  //  /*
  //  * Pdf页码
  // */
  //  public get pdfPageNum(): number {
  //      return $("#hidPdfPageNum").val();
  //  }

  /*
   * 提问内容
   */
  public set questionsContent(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtQuestionsContent', value);
  }
  /*
   * 提问内容
   */
  public get questionsContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtQuestionsContent');
  }

  /*
   * 答案内容
   */
  public set answerContent(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    SetTextAreaValueInDivObj(divName, 'txtAnswerContent', value);
  }
  /*
   * 答案内容
   */
  public get answerContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return '';
    return GetTextAreaValueInDivObj(divName, 'txtAnswerContent');
  }

  /*
   * 设置操作类型：Add||Update||Detail
   */
  public set opType(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidOpType', value);
  }
  /*
   * 设置操作类型：Add||Update||Detail
   */
  public get opType(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidOpType');
  }

  // /*
  // * 设置关键字的值
  //*/hidPdfContent
  // public set tagsId(value: string) {
  //     $("#hidTagsId").val(value);
  // }
  // /*
  // * 设置关键字的值
  //*/
  // public get tagsId(): string {
  //     return $("#hidTagsId").val();
  // }

  /*
   * 设置关键字的值
   */
  public set hidPdfContent(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidPdfContent', value);
  }
  /*
   * 设置关键字的值
   */
  public get hidPdfContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidPdfContent');
  }

  /*
   * 设置关键字的值
   */
  public set answerId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidAnswerId', value);
  }
  /*
   * 设置关键字的值
   */
  public get answerId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidAnswerId');
  }

  /*
   * 是否要求回复
   */
  public set isRequestReply(value: boolean) {
    $('#chkIsRequestReply').attr('checked', value.toString());
  }
  /*
   * 是否要求回复
   */
  public get isRequestReply(): boolean {
    return $('#chkIsRequestReply').prop('checked');
  }
  /*
   * 是否提交
   */
  public set isSubmit(value: boolean) {
    $('#chkIsSubmit').attr('checked', value.toString());
  }
  /*
   * 是否提交
   */
  public get isSubmit(): boolean {
    return $('#chkIsSubmit').prop('checked');
  }

  // /*
  // * pdf标注内容
  //*/
  // public set tagsContent(value: string) {
  //     $("#txtTagsContent").val(value);
  // }
  // /*
  // * pdf标注内容
  //*/
  // public get tagsContent(): string {
  //     return $("#txtTagsContent").val();
  // }

  /******************************************************************iFrame子页面控件******************************************************/

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

  /*
   * pdfDiv_top
   */
  public set pdfDiv_top(value: string) {
    //$("#hidPdfPageNum").val(value);
    //$("#iframe_qaPdf").contents().find("#pdfDiv_top").val(value);
    set_pdfDiv_top('pdfDiv_top', value);
  }
  /*
   * pdfDiv_top
   */
  public get pdfDiv_top(): string {
    //return $("#hidPdfPageNum").val();
    //return $("#iframe_qaPdf").contents().find("#pdfDiv_top").val();
    return get_pdfDiv_top('pdfDiv_top');
  }

  /*
   * pdfDiv_left
   */
  public set pdfDiv_left(value: string) {
    //$("#hidPdfPageNum").val(value);
    //$("#iframe_qaPdf").contents().find("#pdfDiv_left").val(value);
    set_pdfDiv_left('pdfDiv_left', value);
  }
  /*
   * page_cache
   */
  public get pdfDiv_left(): string {
    //return $("#hidPdfPageNum").val();
    //return $("#iframe_qaPdf").contents().find("#pdfDiv_left").val();
    return get_pdfDiv_left('pdfDiv_left');
  }
  /**
   * 获取div对象，根据不同的div类型
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_GetDivName)
   **/
  public getDivName(strDivType: enumDivType): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    let divName;
    let divTypeName;
    let strMsg;
    switch (strDivType) {
      case enumDivType.LayOut_01:
        divName = Tea_QA.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = Tea_QA.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = Tea_QA.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = Tea_QA.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = Tea_QA.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = Tea_QA.divPager;
        divTypeName = 'divPager';
        break;
      default:
        strMsg = `获取div对象时，DivType =${strDivType}没有被处理，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return null;
        break;
    }
    if (divName == null) {
      strMsg = `当前${divTypeName}层(div)对象为空，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
      return null;
    }
    return divName;
  }

  public async SearchParentV(strAnswerId: string) {
    try {
      // 使用动态导入加载函数代码块
      const { CommQuestionAnswer } = await import('./CommQuestionAnswer');
      // console.error('CommQuestionAnswer');
      // 调用加载的函数
      CommQuestionAnswer.divLayout = Tea_QA.divLayout;
      const objPage = new CommQuestionAnswer();
      // const objLayOut = objPage.getDivName(enumDivType.LayOut_01);
      // if (objLayOut == null) return;

      await objPage.SearchParentV(strAnswerId);
    } catch (error) {
      console.error('加载函数:[CommQuestionAnswer]时出现错误:', error);
    }
  }

  public async SysComment(strAnswerId: string, strUserId: string, strQuestionsId: string) {
    try {
      // 使用动态导入加载函数代码块
      const { CommQuestionAnswer } = await import('./CommQuestionAnswer');
      // console.error('CommQuestionAnswer');
      // 调用加载的函数
      CommQuestionAnswer.divLayout = Tea_QA.divLayout;
      const objPage = new CommQuestionAnswer();
      // const objLayOut = objPage.getDivName(enumDivType.LayOut_01);
      // if (objLayOut == null) return;

      await objPage.SysComment(strAnswerId, strUserId, strQuestionsId);
    } catch (error) {
      console.error('加载函数:[CommQuestionAnswer]时出现错误:', error);
    }
  }
  public async DiscussListOrderby() {
    const divscll = document.getElementById('J_ShortComment_Discuss2') as HTMLDivElement;
    divscll.scrollTop = divscll.scrollHeight;
  }
  public get questionsId(): string {
    return Tea_QA.GetPropValue('questionsId');
  }
}
