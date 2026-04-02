import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { clsqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsqa_QuestionsEN';
import { clsvqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsvqa_AnswerEN';
import { clsvqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsvqa_QuestionsEN';
import {
  SysVote_AddNewRecordAsync,
  SysVote_GetObjLstAsync,
  SysVote_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import {
  qa_Questions_DelRecordAsync,
  qa_Questions_GetFirstObjAsync,
  qa_Questions_GetObjLstAsync,
  qa_Questions_UpdateRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_QuestionsWApi';
import {
  vqa_Answer_GetObjLstAsync,
  vqa_Answer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/InteractManage/clsvqa_AnswerWApi';
import {
  vqa_Questions_GetObjLstAsync,
  vqa_Questions_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/InteractManage/clsvqa_QuestionsWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { qa_AnswerEx_DelRecordAsyncEx } from '@/ts/L3ForWApiEx/InteractManage/clsqa_AnswerExWApi';
import { vqa_QuestionsEx_GetPageNumObjLstAsync } from '@/ts/L3ForWApiEx/InteractManage/clsvqa_QuestionsExWApi';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSpanObjLstInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  ShowDivInDivObj,
  GetAObjLstInDivObj,
  GetDivObjInDivObj,
  getDivObjLstInDivObj,
  GetButtonObjLstInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { qa_Push_EditEx } from '@/views/InteractManage/qa_Push_EditEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { Paper_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import {
  qa_Answer_GetRecCountByCondAsync,
  qa_Answer_UpdateRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_AnswerWApi';
import { qa_Answer_EditEx } from '@/views/InteractManage/qa_Answer_EditEx';
import { qa_Questions_EditEx } from '@/views/InteractManage/qa_Questions_EditEx';
import {
  get_pdf_zoom,
  pdf_ClearHighLightText,
  pdf_SetClientType,
  set_pdf_zoom,
} from '@/ts/FunClass/clsPubFun4Pdf';
import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import { clsvCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherEN';
import { vCurrEduClsStu_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import { vCurrEduClsTeacher_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import { clsqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsqa_AnswerEN';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { qa_Questions_Edit } from '@/viewsBase/InteractManage/qa_Questions_Edit';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { DateTime_GetDateTimeSim6 } from '@/ts/PubFun/clsDateTime';
import { qa_Answer_Edit } from '@/viewsBase/InteractManage/qa_Answer_Edit';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
import { userStore } from '@/store/modulesShare/user';
import { sysVoteStore } from '@/store/modules/sysVote';

// declare function btnShowAnswer_Click(strKey: string, pageNum: number, pdfContent: string): void;
declare let window: any;
declare function LayercClose(): void;
declare function atOthers(strStuName: string, strTeaName: string): void;
export class PaperQAA implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: string) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static questionTypeId = '';

  public static divLayout: HTMLDivElement;
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象

  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
  }
  async BindGvCache(strType: string, strPara: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    console.log('strPara', strPara);
    let strMsg = '';
    let returnBool6;
    let objQa_Push_EditEx;

    const strAnswerId = strPara;
    switch (strType) {
      case 'qa_Answer':
        await this.SynAnswer();
        this.btnShowAnswer_Click(enumCommentOrder.AllComment_01);

        if (GetInputValueInDivObj(objLayOut, 'hidPushId') != '') {
          objQa_Push_EditEx = new qa_Push_EditEx('qa_Push_EditEx', this);
          await objQa_Push_EditEx.btnUpdQA_Push_Click(
            GetInputValueInDivObjN(objLayOut, 'hidPushId'),
          );
        }
        ShowDivInDivObj(objLayOut, 'div_qa_Answer');
        HideDivInDivObj(objLayOut, 'divEditAnswerRegion');
        returnBool6 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
          strAnswerId,
          '11',
          '2',
          clsPubLocalStorage.idCurrEduCls,
        );

        if (returnBool6 == true) {
          console.log('论文子观点数据总表同步成功；');
        } else {
          console.log('论文子观点数据总表同步失败；');
        }

        //this.BindGv_vqa_AnswerCache();;
        break;
      case clsqa_QuestionsEN._CurrTabName:
        await this.SynQuestions();
        $('#divEditQuestionsRegion').hide();
        $('#div_qa_Welcome').show();
        if (clsPubSessionStorage.GetUserLst() != '') {
          objQa_Push_EditEx = new qa_Push_EditEx('qa_Push_EditEx', this);
          await objQa_Push_EditEx.AddNewRecord(); //.AddNewqa_Push();
        }
        await this.Showdiv_Questions();
        await this.Showdiv_PdfQuestions();
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async PageLoad(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    pdf_SetClientType('QA');
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //显示当前评论的观点

        await this.Showdiv_Questions();

        //评论列表
        //const gvResult2 = await this.btnShowAppraise_Click();
        HideDivInDivObj(divName, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public static btn_Click(strCommandName: string, strKeyId: any, divLayout: HTMLDivElement) {
    const objPage = new PaperQAA();
    let objPageEdit_Question;
    let objPageEdit_Answer;
    const objLayOut = objPage.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    console.log(strCommandName, strKeyId);
    // let arrKeyIds;
    if (PaperQAA.divDataLst != null) {
      // arrKeyIds = GetCheckedKeyIdsInDivObj(PaperQAA.divDataLst);
      strKeyId = GetFirstCheckedKeyIdInDivObj(PaperQAA.divDataLst);
    }
    const strName = ''; //待定
    // const UserId = ''; //待定
    let strMsg;
    let arr;
    const strQuestionsId = PaperQAA.GetPropValue('questionsId');
    let strAnswerId;
    let strUserId;
    // let intPdfPageNum;
    // let strPdfContent;
    switch (strCommandName) {
      case 'AtUserName_Click':
        objPage.btnAtUserName_Click(strKeyId, strName);
        break;
      case 'InviteOthers':
        $('#hidInviteKey').val(strKeyId);
        //message.info('hi，功能还在搭建中....');
        objPage.InviteOthers_Click();
        break;
      case 'AddVote':
        arr = strKeyId.split('|');

        if (arr.length != 2) {
          strMsg = `在执行btnAddVote_Click过程中，参数数目不正确！`;
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        strAnswerId = arr[0];
        strUserId = arr[1];
        objPage.btnAddVote_Click(strAnswerId, strUserId);
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
        // intPdfPageNum = arr[1];
        // strPdfContent = arr[2];

        objPage.btnShowAnswer_Click(enumCommentOrder.AllComment_01);
        break;
      case 'AnswerSubmit':
        qa_Answer_EditEx.btnEdit_Click(strCommandName, '', divLayout);
        break;
      case 'UpdateAnswerInP': //
        qa_Answer_Edit.strPageDispModeId = enumPageDispMode.Left_04;
        objPageEdit_Answer = new qa_Answer_EditEx('qa_Answer_EditEx', objPage);
        // objPageEdit_Answer.questionsTypeId = '01';
        // objPageEdit_Answer.myPdfContent = strKeyId;
        objPageEdit_Answer.divName4Edit = 'divEditRegion';
        objPageEdit_Answer.answerTypeId = '01';
        objPageEdit_Answer.questionsId = strQuestionsId;
        qa_Answer_EditEx.parentId = 'root';

        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        ShowDivInDivObj(this.divLayout, 'divEditAnswerRegion');
        qa_Answer_EditEx.btnEdit_Click('UpdateAnswerInP', strKeyId, divLayout);
        break;

      case 'ReplyAnswer': //
        qa_Answer_Edit.strPageDispModeId = enumPageDispMode.Left_04;
        qa_Answer_EditEx.parentId = strKeyId;
        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        ShowDivInDivObj(this.divLayout, 'divEditAnswerRegion');
        objPageEdit_Answer = new qa_Answer_EditEx('qa_Answer_EditEx', objPage);
        // objPageEdit_Answer.questionsTypeId = '01';
        objPageEdit_Answer.answerTypeId = '01';
        objPageEdit_Answer.questionsId = strQuestionsId;

        qa_Answer_EditEx.btnEdit_Click('ReplyAnswerInP', '', divLayout);
        break;

      case 'AddNewAnswer': //
        qa_Answer_Edit.strPageDispModeId = enumPageDispMode.Left_04;
        objPageEdit_Answer = new qa_Answer_EditEx('qa_Answer_EditEx', objPage);
        objPageEdit_Answer.divEdit = divLayout;
        // objPageEdit_Answer.questionsTypeId = '01';
        // objPageEdit_Answer.myPdfContent = strKeyId;
        objPageEdit_Answer.divName4Edit = 'divEditRegion';
        objPageEdit_Answer.answerTypeId = '01';
        objPageEdit_Answer.questionsId = strQuestionsId;
        qa_Answer_EditEx.parentId = 'root';

        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        ShowDivInDivObj(this.divLayout, 'divEditAnswerRegion');
        qa_Answer_EditEx.btnEdit_Click('AddNewAnswerInP', '', divLayout);
        break;
      case 'DelAnswer':
        objPage.btnDelAnswer_Click(strKeyId);
        break;
      case 'OKUpd1':
      case 'QuestionsSubmit':
        qa_Questions_EditEx.btnEdit_Click(strCommandName, '');
        break;
      case 'DelQuestions': //删除记录
        objPage.btnDelQuestions_Click(strKeyId);
        break;
      case 'UpdateQuestions': //
        $('#div_qa_Welcome').hide();
        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        $('#divEditQuestionsRegion').show();
        qa_Questions_EditEx.btnEdit_Click(strCommandName, strKeyId);
        break;
      case 'AddQuestion':
        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        HideDivInDivObj(objLayOut, 'divEditAnswerRegion');
        $('#divEditQuestionsRegion').show();
        qa_Questions_Edit.strPageDispModeId = enumPageDispMode.Left_04;
        objPageEdit_Question = new qa_Questions_EditEx('qa_Questions_EditEx', objPage);
        objPageEdit_Question.divEdit = divLayout;
        objPageEdit_Question.questionsTypeId = '01';
        objPageEdit_Question.pdfData = strKeyId;
        objPageEdit_Question.divName4Edit = 'divEditRegion';
        objPageEdit_Question.btnAddNewRecordWithMaxId_ClickInP();
        break;
      case 'AddNewQuestions': //
        HideDivInDivObj(objLayOut, 'div_qa_Answer');
        HideDivInDivObj(objLayOut, 'divEditAnswerRegion');
        $('#divEditQuestionsRegion').show();

        objPageEdit_Question = new qa_Questions_EditEx('qa_Questions_EditEx', objPage);
        objPageEdit_Question.divName4Edit = 'divEditRegion';
        objPageEdit_Question.btnAddNewRecord_Click();

        // qa_Questions_EditEx.btnEdit_Click(strCommandName, strKeyId);

        // objPage.btnQuery_Click();
        break;
      case 'Query': //查询记录
        // objPage.btnQuery_Click();
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PaperQAA.btn_Click');

        break;
    }
  }
  //绑定提问数据
  public async Showdiv_QuestionsBak() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    pdf_ClearHighLightText();
    const strWhereCond1 = `1=1 and questionsTypeId='01' and paperId='${clsPrivateSessionStorage.paperId}'`;
    const strWhereCond = `1=1 and questionsTypeId='01' and paperId='${clsPrivateSessionStorage.paperId}' order by updDate Asc`;
    const strUserId = userStore.getUserId;
    //const objqa_Questions: clsqa_QuestionsEN = null;
    let arrvqa_QuestionsObjLst0: Array<clsvqa_QuestionsEN> = [];
    let arrvqa_QuestionsObjLst: Array<clsvqa_QuestionsEN> = [];
    let arrvqa_PdfPageNumObjLst: Array<clsvqa_QuestionsEN> = [];
    try {
      arrvqa_PdfPageNumObjLst = await vqa_QuestionsEx_GetPageNumObjLstAsync(strWhereCond1);
      arrvqa_QuestionsObjLst0 = await vqa_Questions_GetObjLstAsync(strWhereCond);

      let strhtml = '';
      strhtml += '<div class="info" id="infoPaper_QA">';
      strhtml += '<table>';

      for (let j = 0; j < arrvqa_PdfPageNumObjLst.length; j++) {
        arrvqa_QuestionsObjLst = arrvqa_QuestionsObjLst0.filter(
          (x) => x.pdfPageNum == arrvqa_PdfPageNumObjLst[j].pdfPageNum,
        );

        strhtml += '<tr class="title btn-2">';
        strhtml += `<a href="javascript:void(0)" title="当前pdf论文上的第几页一共有几个问题">第${arrvqa_PdfPageNumObjLst[j].pdfPageNum}页上的${arrvqa_QuestionsObjLst.length}个答疑</a>`;
        //strhtml += '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加问题" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btnAddNewQuestions_Click();> <i class="layui-icon" ></i>添加问题</button></div>';
        strhtml += '</tr><ul class="artlist">';

        let k = 0;
        for (let i = 0; i < arrvqa_QuestionsObjLst.length; i++) {
          const objvqa_Questions = arrvqa_QuestionsObjLst[i];
          k++;
          strhtml += '<li>';

          strhtml += `<div id="Q${objvqa_Questions.questionsId}" style="text-align:left; float:left; width:60%;">`;
          strhtml += `<span class="rowtit color1">${k}.</span>`;
          //strhtml += '&nbsp;<span class="rowtit color3">[' + objvqa_Questions.pdfPageNum + ']</span>';
          const strKeyId = `${objvqa_Questions.questionsId}|${objvqa_Questions.pdfPageNum}|${objvqa_Questions.pdfContent}`;
          //          strhtml += `<span class="title btn-4"><a id="btnShowAnswer" keyId="${strKeyId}" href="javascript:void(0)" onclick=btnShowAnswer_Click("${objvqa_Questions.questionsId}",${objvqa_Questions.pdfPageNum},"${objvqa_Questions.pdfContent}"); class="abstract-text">${objvqa_Questions.questionsContent}</a></span>`;
          strhtml += `<span class="title btn-4"><a id="aBtnShowAnswer" keyId="${strKeyId}" href="javascript:void(0)" class="abstract-text">${objvqa_Questions.questionsContent}</a></span>`;
          strhtml += `&nbsp;<span style="font-style:italic;" class="rowtit color2" title="第${objvqa_Questions.pdfPageNum}页标记">P${objvqa_Questions.pdfPageNum}</span>`;
          strhtml += `&nbsp;<span class="rowtit color3">[${objvqa_Questions.answerCount}]</span>`;
          strhtml += '</div>';

          strhtml += '<div style="text-align:right; float:right; width:39%;">';
          if (objvqa_Questions.updUser == strUserId) {
            //编辑
            strhtml += `<button id="btnUpdateQuestions" keyId="${objvqa_Questions.questionsId}" title="编辑问题" class="btn btn-info btn-sm" onclick=btnUpdateQuestions_Click("${objvqa_Questions.questionsId}")>${clsIcon.faPenToSquare}</button>`;
            //删除
            strhtml += `<button id="btnDelQuestions" keyId="${objvqa_Questions.questionsId}" title="删除问题" class="btn-danger btn btn-sm" onclick=btnDelQuestions_Click("${objvqa_Questions.questionsId}") href="javascript:;">${clsIcon.faTrash}</button>`;
          }

          //strhtml += '<span class="rowtit color5">[提问用户]：</span>' + objvqa_Questions.userName + '&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[提问时间]：</span>' + objvqa_Questions.updDate;

          const strUpdDate = DateTime_GetDateTimeSim6(objvqa_Questions.updDate);
          // strUpdDate = strUpdDate.substring(2, strUpdDate.length - 11);

          strhtml += `&nbsp;<span class="rowtit color4">${
            objvqa_Questions.userName ?? ''
          }/${strUpdDate}</span>&nbsp;&nbsp;`;
          strhtml += '</div>';
          strhtml += '</li>';
          //strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div>';
          //strhtml += '<li> <div style="border-bottom: 1px solid #eee;"></div></li>';
        }
        strhtml += '</ul>';
      }
      strhtml += '</table>';
      strhtml += '</div>';

      //拼接；
      // $('#div_qa_Questions').html(strhtml);
      const div_qa_Questions = GetDivObjInDivObj(divName, 'div_qa_Questions');
      div_qa_Questions.innerHTML = strhtml;
      if (arrvqa_PdfPageNumObjLst.length > 0) {
        this.SetEventForQuestions();
      }

      ShowDivInDivObj(divName, 'div_qa_Questions');

      if (this.questionsId != '') {
        const objQuestions = arrvqa_QuestionsObjLst0.find((x) => x.questionsId == this.questionsId);
        if (objQuestions != null) {
          const strKeyId = `${this.questionsId}|${objQuestions.pdfPageNum}|${objQuestions.pdfContent}`;
          PaperQAA.vuebtn_Click('ShowAnswer', strKeyId);
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

  public async Showdiv_Questions() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    pdf_ClearHighLightText();
    const strWhereCond1 = `1=1 and questionsTypeId='01' and paperId='${clsPrivateSessionStorage.paperId}'`;
    const strWhereCond = `1=1 and questionsTypeId='01' and paperId='${clsPrivateSessionStorage.paperId}' order by updDate Asc`;
    const strUserId = userStore.getUserId;
    //const objqa_Questions: clsqa_QuestionsEN = null;
    let arrvqa_QuestionsObjLst0: Array<clsvqa_QuestionsEN> = [];
    let arrvqa_QuestionsObjLst: Array<clsvqa_QuestionsEN> = [];
    let arrvqa_PdfPageNumObjLst: Array<clsvqa_QuestionsEN> = [];
    try {
      arrvqa_PdfPageNumObjLst = await vqa_QuestionsEx_GetPageNumObjLstAsync(strWhereCond1);
      arrvqa_QuestionsObjLst0 = await vqa_Questions_GetObjLstAsync(strWhereCond);

      let strhtml = '';
      strhtml += '<div class="info" id="infoPaper_QA">';
      strhtml += '<table class="artlist custom-table">';

      for (let j = 0; j < arrvqa_PdfPageNumObjLst.length; j++) {
        arrvqa_QuestionsObjLst = arrvqa_QuestionsObjLst0.filter(
          (x) => x.pdfPageNum == arrvqa_PdfPageNumObjLst[j].pdfPageNum,
        );

        strhtml += '<tr class="title btn-2">';
        strhtml += '<td colspan="3" class="mb-5">';
        strhtml += `<a href="javascript:void(0)" class="mb-5" title="当前pdf论文上的第几页一共有几个问题">第${arrvqa_PdfPageNumObjLst[j].pdfPageNum}页上的${arrvqa_QuestionsObjLst.length}个答疑</a>`;
        //strhtml += '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加问题" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btnAddNewQuestions_Click();> <i class="layui-icon" ></i>添加问题</button></div>';
        strhtml += `</td>`;
        strhtml += '</tr>';

        let k = 0;
        for (let i = 0; i < arrvqa_QuestionsObjLst.length; i++) {
          const objvqa_Questions = arrvqa_QuestionsObjLst[i];
          k++;

          strhtml += `<tr id="Q${objvqa_Questions.questionsId}" class="custom-tr title mt-2" style="text-align:left; ">`;
          strhtml += `<td style="width: 15px; vertical-align: top">`;
          strhtml += `<span class="rowtit color1">${k}.</span>`;
          strhtml += `</td>`;
          strhtml += `<td style="text-align: left; width: 74%">`;

          const strKeyId = `${objvqa_Questions.questionsId}|${objvqa_Questions.pdfPageNum}|${objvqa_Questions.pdfContent}`;
          //          strhtml += `<span class="title btn-4"><a id="btnShowAnswer" keyId="${strKeyId}" href="javascript:void(0)" onclick=btnShowAnswer_Click("${objvqa_Questions.questionsId}",${objvqa_Questions.pdfPageNum},"${objvqa_Questions.pdfContent}"); class="abstract-text">${objvqa_Questions.questionsContent}</a></span>`;
          strhtml += `<span class="text title btn-4"><a id="aBtnShowAnswer" keyId="${strKeyId}" href="javascript:void(0)" class="abstract-text">${objvqa_Questions.questionsContent}</a></span>`;
          strhtml += `&nbsp;<span style="font-style:italic;" class="brackets rowtit color2" title="第${objvqa_Questions.pdfPageNum}页标记">P${objvqa_Questions.pdfPageNum}</span>`;
          strhtml += `&nbsp;<span class="brackets rowtit color3">[${objvqa_Questions.answerCount}]</span>`;
          strhtml += '</td>';

          strhtml += '<td style="text-align:right;  width:23%; vertical-align: top;">';
          if (objvqa_Questions.updUser == strUserId) {
            //编辑
            strhtml += `<button id="btnUpdateQuestions" keyId="${objvqa_Questions.questionsId}" title="编辑问题" class="btn btn-info btn-sm" onclick=btnUpdateQuestions_Click("${objvqa_Questions.questionsId}")>${clsIcon.faPenToSquare}</button>`;
            //删除
            strhtml += `<button id="btnDelQuestions" keyId="${objvqa_Questions.questionsId}" title="删除问题" class="btn-danger btn btn-sm" onclick=btnDelQuestions_Click("${objvqa_Questions.questionsId}") href="javascript:;">${clsIcon.faTrash}</button>`;
          }

          //strhtml += '<span class="rowtit color5">[提问用户]：</span>' + objvqa_Questions.userName + '&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[提问时间]：</span>' + objvqa_Questions.updDate;

          const strUpdDate = DateTime_GetDateTimeSim6(objvqa_Questions.updDate);
          // strUpdDate = strUpdDate.substring(2, strUpdDate.length - 11);

          strhtml += `<span class="rowtit color4">${
            objvqa_Questions.userName ?? ''
          }/${strUpdDate}</span>&nbsp;&nbsp;`;
          strhtml += '</td>';
          strhtml += '</tr>';
          // strhtml += '<tr class="spacer"><td>&nbsp;&nbsp;</td></tr>';
        }
      }
      strhtml += '</table>';
      strhtml += '</div>';

      //拼接；
      // $('#div_qa_Questions').html(strhtml);
      const div_qa_Questions = GetDivObjInDivObj(divName, 'div_qa_Questions');
      div_qa_Questions.innerHTML = strhtml;
      if (arrvqa_PdfPageNumObjLst.length > 0) {
        this.SetEventForQuestions();
      }

      ShowDivInDivObj(divName, 'div_qa_Questions');

      if (this.questionsId != '') {
        const objQuestions = arrvqa_QuestionsObjLst0.find((x) => x.questionsId == this.questionsId);
        if (objQuestions != null) {
          const strKeyId = `${this.questionsId}|${objQuestions.pdfPageNum}|${objQuestions.pdfContent}`;
          PaperQAA.vuebtn_Click('ShowAnswer', strKeyId);
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
  // public static ClearHighLightText() {
  //   const iframeElement = $('#iframe_qaPdf')[0] as HTMLIFrameElement;
  //   if (iframeElement == null) return;
  //   if (iframeElement.contentWindow == null) return;
  //   (iframeElement.contentWindow as any).ClearHighLightText();
  // }
  public SetEventForQuestions() {
    {
      const arrBtnDelSubViewPoint = GetAObjLstInDivObj(PaperQAA.divLayout, 'aBtnShowAnswer');
      for (const aBtnShowAnswer of arrBtnDelSubViewPoint) {
        if (aBtnShowAnswer != null) {
          const strKeyId = aBtnShowAnswer.getAttribute('keyid');
          if (strKeyId != null) {
            (function (strKeyId: string) {
              aBtnShowAnswer.onclick = function () {
                PaperQAA.vuebtn_Click('ShowAnswer', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }
    //console.log('btnDelSubViewPoint:', btnDelSubViewPoint);
    {
      const arrBtnUpdateQuestions = GetButtonObjLstInDivObjN(
        PaperQAA.divLayout,
        'btnUpdateQuestions',
      );
      for (const btnUpdateQuestions of arrBtnUpdateQuestions) {
        if (btnUpdateQuestions != null) {
          const strKeyId = btnUpdateQuestions.getAttribute('keyid');
          if (strKeyId != null) {
            (function (strKeyId: string) {
              btnUpdateQuestions.onclick = function () {
                PaperQAA.vuebtn_Click('UpdateQuestions', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }

    {
      const arrBtnDelQuestions = GetButtonObjLstInDivObjN(PaperQAA.divLayout, 'btnDelQuestions');
      for (const btnDelQuestions of arrBtnDelQuestions) {
        if (btnDelQuestions != null) {
          const strKeyId = btnDelQuestions.getAttribute('keyid');
          if (strKeyId != null) {
            (function (strKeyId: string) {
              btnDelQuestions.onclick = function () {
                PaperQAA.vuebtn_Click('DelQuestions', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }
  }
  //绑定答案数据并对pdf添加高亮
  public async btnShowAnswer_Click(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    //对pdf添加高亮
    //this.btnUpdatePaperPageNum_Click(this.hidPdfContent);

    //绑定答案数据
    let arrvqa_AnswerObjLst1: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst2: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst3: Array<clsvqa_AnswerEN> = [];

    let strWhereCond1 = '';
    let strWhereCond2 = '';

    const strUserId = userStore.getUserId;

    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部评论
        strWhereCond1 = ` parentId='root' and  questionsId='${this.questionsId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  questionsId='${this.questionsId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人评论
        strWhereCond1 = ` parentId='root' and  questionsId='${this.questionsId}' and updUser='${strUserId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  questionsId='${this.questionsId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新评论
        strWhereCond1 = ` parentId='root' and  questionsId='${this.questionsId}' order by updDate Desc`;
        strWhereCond2 = ` parentId<>'root' and  questionsId='${this.questionsId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        strWhereCond1 = ` parentId='root' and  questionsId='${this.questionsId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  questionsId='${this.questionsId}' order by updDate Asc`;

        break;
    }
    // const strVateWhereCond = ` 1 =1 and updUser='${strUserId}' and voteTypeId='12' and pubParentId='${this.questionsId}'`;
    const strVoteType = '12';
    const strPubParentId = this.questionsId;

    const strQWhereCond = `questionsId='${this.questionsId}'`;
    try {
      arrvqa_AnswerObjLst1 = await vqa_Answer_GetObjLstAsync(strWhereCond1);
      arrvqa_AnswerObjLst2 = await vqa_Answer_GetObjLstAsync(strWhereCond2);

      const objqa_Questions = await qa_Questions_GetFirstObjAsync(strQWhereCond);
      if (objqa_Questions != null) {
        $('#Questions_Name').html(`问题:${objqa_Questions.questionsContent}`);
      }
      let strhtml = '';
      let varNum = 0;
      //   const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      // J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrvqa_AnswerObjLst1.length; i++) {
        const objvqa_Answer = arrvqa_AnswerObjLst1[i];
        objvqa_Answer.userName = await vQxUsersSimStore.getUserName(objvqa_Answer.updUser);
        varNum++;
        strhtml += '<div class="comment" >';
        strhtml +=
          '<div class="common-avatar J_User" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block">';
        if (GetInputValueInDivObj(divName, 'hidQuestionsUser') == objvqa_Answer.updUser) {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:red;" > 题主：${objvqa_Answer.userName}</span>`;
        } else {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvqa_Answer.userName}</span>`;
        }
        strhtml += `<span class="comment-time">${objvqa_Answer.updDate}</span>`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment-username J_User">${varNum}楼</span></p>`;
        //strhtml += '<div class="comment-content J_CommentContent">评分：' + arrvPaperAppraiseObjLst[i].AppraiseScore + '</div>';
        strhtml += `<div class="comment-content J_CommentContent">${objvqa_Answer.answerContent}</div>`;

        //回复区

        arrvqa_AnswerObjLst3 = arrvqa_AnswerObjLst2.filter(
          (x) => x.parentId == objvqa_Answer.answerId,
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

            const objLike = sysVoteStore.getObj(strVoteType, strUserId, objvqa_Answer.answerId);
            if (objLike == null) {
              const strKeyId = `${objvqa_Answer.answerId}|${objvqa_Answer.updUser}`;
              strhtml += `<span id="spnbtnAddVote_Click" keyId="${strKeyId}" class="J_Vote reply-operate-item reply-up" )>赞<i>${objvqa_Answer.voteCount}</i></span >`;
            } else {
              strhtml += `<span class="J_Vote reply-operate-item reply-up operate-visited" >已赞<i>${objvqa_Answer.voteCount}</i></span >`;
            }
            //strhtml += '<i class="reply-dot">·</i><span class="J_Reply reply-operate-item"  onclick=btnReplyAnswer_Click("' + objvqa_Answer.answerId + '")>回复</span>';

            strhtml += `<i class="reply-dot">·</i><span>${objvqa_Answer.updDate}</span>`;
            if (strUserId == objvqa_Answer.updUser) {
              strhtml += '<i class="reply-dot reply-operate-report" >·</i>';
              const strKeyId = `${objvqa_Answer.answerId}|${objvqa_Answer.topicId}`;
              strhtml += `<span id="spnbtnUpdAnswer" keyId="${strKeyId}" class="reply-operate-item reply-operate-report J_ReplyReport" )>修改</span>`;

              strhtml += '<i class="reply-dot reply-operate-report" >·</i>';
              strhtml += `<span id="spnbtnDelAnswer" keyId="${objvqa_Answer.answerId}" class="reply-operate-item reply-operate-report J_ReplyReport" )>删除</span>`;
            }
            strhtml += '</div>';

            strhtml += '</div>';
          }
          strhtml += '</div>';
        }
        ///评论区
        strhtml += '<div class="comment-operate J_CommentOperate clearfix">';
        //if (objvqa_Answer.scoreType == "2") {
        //    strhtml += '<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分:<i>' + objvqa_Answer.score + '</i></span>';
        //} else {
        //    strhtml += '<span class="J_Vote reply-operate-item reply-up">学生评分:<i>' + objvqa_Answer.score + '</i></span>';
        //}
        const objLike = sysVoteStore.getObj(strVoteType, strUserId, objvqa_Answer.answerId);
        if (objLike == null) {
          const strKeyId = `${objvqa_Answer.answerId}|${objvqa_Answer.updUser}`;
          strhtml += `<span id="spnbtnAddVote" keyId="${strKeyId}" class="J_Vote comment-operate-item comment-operate-up" )>赞<i>${objvqa_Answer.voteCount}</i></span>`;
        } else {
          strhtml += `<span class="J_Vote comment-operate-item comment-operate-up operate-visited">已赞<i>${objvqa_Answer.voteCount}</i></span>`;
        }
        strhtml += `<span id="spnbtnReplyAnswer" keyId="${objvqa_Answer.answerId}" class="J_Reply comment-operate-item comment-operate-reply" id="J_Reply" )>回复</span>`;
        strhtml += '</div>';

        if (strUserId == objvqa_Answer.updUser) {
          //strhtml += '<div class="J_Report comment-report" id="J_Report6673850347411436155" onclick=btnUpdateAnswer_Click("' + objvqa_Answer.answerId + '")>修改</div>';
          const strKeyId = `${objvqa_Answer.answerId}|${objvqa_Answer.topicId}`;
          strhtml += `<div  class="J_Report comment-report" )><span id="spnbtnUpdAnswer" keyId="${strKeyId}">修改</span> <span id="spnbtnDelAnswer" keyId="${objvqa_Answer.answerId}">删除</span></div>`;
        }
        strhtml += '</div></div>';
      }
      //$("#J_ShortComment").append(strhtml);
      $('#J_ShortComment').html(strhtml);
      if (arrvqa_AnswerObjLst1.length > 0) {
        this.SetEventForAnswer();
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取数据不成功,${e}.`;
      alert(strMsg);
    }
  }

  public SetEventForAnswer() {
    {
      const arrdivbtnDelAnswer = getDivObjLstInDivObj(PaperQAA.divLayout, 'divbtnDelAnswer');
      for (const divbtnDelAnswer of arrdivbtnDelAnswer) {
        if (divbtnDelAnswer != null) {
          const strKeyId = divbtnDelAnswer.getAttribute('keyid');
          if (strKeyId != null) {
            (function (strKeyId: string) {
              divbtnDelAnswer.onclick = function () {
                PaperQAA.vuebtn_Click('DelAnswer', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }
    {
      const arrdivbtnUpdAnswer = getDivObjLstInDivObj(PaperQAA.divLayout, 'divbtnUpdAnswer');
      for (const divbtnUpdAnswer of arrdivbtnUpdAnswer) {
        if (divbtnUpdAnswer != null) {
          const strKeyId = divbtnUpdAnswer.getAttribute('keyid');
          if (strKeyId != null) {
            (function (strKeyId: string) {
              divbtnUpdAnswer.onclick = function () {
                PaperQAA.vuebtn_Click('UpdateAnswerInP', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }
    //console.log('btnDelSubViewPoint:', btnDelSubViewPoint);
    {
      const arrspnbtnReplyAnswer = GetSpanObjLstInDivObj(PaperQAA.divLayout, 'spnbtnReplyAnswer');
      for (const spnbtnReplyAnswer of arrspnbtnReplyAnswer) {
        if (spnbtnReplyAnswer != null) {
          const strKeyId = spnbtnReplyAnswer.getAttribute('keyid');
          if (strKeyId != null) {
            (function (strKeyId: string) {
              spnbtnReplyAnswer.onclick = function () {
                PaperQAA.vuebtn_Click('ReplyAnswer', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }

    {
      const arrspnbtnAddVote = GetSpanObjLstInDivObj(PaperQAA.divLayout, 'spnbtnAddVote');
      for (const spnbtnAddVote of arrspnbtnAddVote) {
        if (spnbtnAddVote != null) {
          const strKeyId = spnbtnAddVote.getAttribute('keyid');
          if (strKeyId != null) {
            (function (strKeyId: string) {
              spnbtnAddVote.onclick = function () {
                PaperQAA.vuebtn_Click('AddVote', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }

    {
      const arrspnbtnDelAnswer = GetSpanObjLstInDivObj(PaperQAA.divLayout, 'spnbtnDelAnswer');
      for (const spnbtnDelAnswer of arrspnbtnDelAnswer) {
        if (spnbtnDelAnswer != null) {
          const strKeyId = spnbtnDelAnswer.getAttribute('keyid');
          if (strKeyId != null) {
            (function (strKeyId: string) {
              spnbtnDelAnswer.onclick = function () {
                PaperQAA.vuebtn_Click('DelAnswer', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }
    {
      const arrspnbtnUpdAnswer = GetSpanObjLstInDivObj(PaperQAA.divLayout, 'spnbtnUpdAnswer');
      for (const spnbtnUpdAnswer of arrspnbtnUpdAnswer) {
        if (spnbtnUpdAnswer != null) {
          const strKeyId = spnbtnUpdAnswer.getAttribute('keyid');

          if (strKeyId == null) continue;

          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          // const objData = { keyId: arr[0], type: arr[1] };
          // (function (objData: any) {
          //   btnSysComment.onclick = function () {
          //     PaperAttention.vuebtn_Click('SysComment', objData);
          //   };
          // })(objData);

          if (strKeyId != null) {
            (function (strKeyId: string) {
              spnbtnUpdAnswer.onclick = function () {
                PaperQAA.vuebtn_Click('UpdateAnswerInP', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }
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
        divName = PaperQAA.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = PaperQAA.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = PaperQAA.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = PaperQAA.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = PaperQAA.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = PaperQAA.divPager;
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

  //添加删除答案的时候统计问题数据量到问题表和论文答疑表
  public async SynAnswer() {
    const strThisFuncName = this.SynAnswer.name;
    //strIdCurrEduclsstrqa_PaperId = $("#hidqa_PaperId").val();

    //添加记录的同时并记录论文读写的教师评价数
    //strWhereCond = " qaPaperId=" + strqa_PaperId;
    //intAnswerCount1 = await vqa_Answer_GetRecCountByCondAsync(strWhereCond);

    //const objqa_PaperEN: clsqa_PaperEN = new clsqa_PaperEN();
    //objqa_PaperEN.SetQaPaperId(strqa_PaperId;
    //objqa_PaperEN.SetAnswerCount(intAnswerCount1;

    //objqa_PaperEN.sfUpdFldSetStr = objqa_PaperEN.updFldString;//设置哪些字段被修改(脏字段)
    //if (objqa_PaperEN.qaPaperId == "" || objqa_PaperEN.qaPaperId == undefined) {
    //     throw Format("关键字不能为空!(in {0}.{1})", this.constructor.name, strThisFuncName);
    //}

    //const responseText1 = await qa_Paper_UpdateRecordAsync(objqa_PaperEN);
    //const returnBool1: boolean = !!responseText1;
    //if (returnBool1 == true) {
    //    //刷新缓存
    //    console.log("添加答案数量到答疑表成功！");
    //}
    //else {

    //    console.log("添加答案数量到答疑表失败！");
    //}
    //添加记录的同时并记录论文读写的教师评价数
    const strWhereCond = ` questionsId='${this.questionsId}'`;
    const intAnswerCount2 = await vqa_Answer_GetRecCountByCondAsync(strWhereCond);

    const objqa_QuestionsEN: clsqa_QuestionsEN = new clsqa_QuestionsEN();
    objqa_QuestionsEN.SetQuestionsId(this.questionsId);
    objqa_QuestionsEN.SetAnswerCount(intAnswerCount2);

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
  /* 
   根据关键字删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
  */
  public async DelRecord2(strAnswerId: string) {
    try {
      //const responseText = await qa_Answer_DelRecordAsync(strAnswerId);
      const responseText = await qa_AnswerEx_DelRecordAsyncEx(strAnswerId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        await this.SynAnswer();
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

  /* 删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   */
  public async btnDelAnswer_Click(strAnswerId: string) {
    try {
      await this.DelRecord2(strAnswerId);
      await this.btnShowAnswer_Click(enumCommentOrder.AllComment_01);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
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
  //添加删除问题的时候统计问题数据量到论文答疑表
  public async SynQuestions() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strThisFuncName = this.SynQuestions.name;
    const strPaperId = clsPrivateSessionStorage.paperId;

    //添加记录的同时并记录论文读写的教师评价数
    const strWhereCond = ` questionsTypeId='01' and paperId='${strPaperId}'`;
    const intQuestionsCount = await vqa_Questions_GetRecCountByCondAsync(strWhereCond);

    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strPaperId);
    objPaperEN.SetPaperQCount(intQuestionsCount);

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
  //显示pdf标注
  public async Showdiv_PdfQuestions() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strWhereCond = `1=1 and questionsTypeId='01' and paperId='${clsPrivateSessionStorage.paperId}' order by updDate Asc`;

    // const strUserId = userStore.getUserId;
    //const objqa_Questions: clsqa_QuestionsEN = null;
    // const arrqa_QuestionsObjLst0: Array<clsqa_QuestionsEN> = [];
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
        if (this.pdf_zoom == 'auto') {
          Currpdf_zoom = 110;
        } else {
          Currpdf_zoom = Number(this.pdf_zoom);
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
        const pdfPage =
          window.parent.frames['iframe_qaPdf'].contentDocument.getElementsByClassName('page');

        for (let j = 0; j <= pdfPage.length; j++) {
          if (strPdfPageNum == 0) continue;
          if (strPdfPageNum == j) {
            const div = document.createElement('a');

            div.className = 'QuestionsCss';
            div.style.left = `${strPdfDivLet}px`;
            div.style.top = `${strPdfDivTop}px`;
            div.style.position = 'absolute';
            div.style.zIndex = '999';
            div.title = strQuestionsContent;
            div.id = strQuestionsId;
            div.setAttribute('onclick', `btnIndexesQuestions_Click('${strQuestionsId}')`);

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
        //alert("该问题下面已经有回答了，所以不能删除哦！");
        message.info('该问题下面已经有回答了，所以不能删除哦！');
        return '';
      } else {
        await this.DelRecord1(strKeyId);
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
        message.info(strInfo);
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
  //at其他人
  public async btnAtUserName_Click(strKey: string, strName: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const key = GetInputValueInDivObjN(divName, 'hidInviteKey');
    if (key == 1) {
      //@内容后附加空格标识
      const area2 = `@${strName} `;

      //更新textarea的value值
      this.questionsContent = this.questionsContent + area2;
    } else {
      //@内容后附加空格标识
      const area2 = `@${strName} `;

      //更新textarea的value值
      this.answerContent = this.answerContent + area2;
    }

    if (clsPubSessionStorage.GetUserLst() != '') {
      const strJson = `${clsPubSessionStorage.GetUserLst()}'${strKey}',`;
      clsPubSessionStorage.SetUserLst(strJson);
    } else {
      const strJson = `'${strKey}',`;
      clsPubSessionStorage.SetUserLst(strJson);
    }

    LayercClose();
  }

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
   * 答案内容
   */
  public set answerContent(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtAnswerContent', value);
  }
  /*
   * 答案内容
   */
  public get answerContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtAnswerContent');
  }
  //邀请其他人
  public async InviteOthers_Click() {
    const strWhereCond = `1=1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;

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
        const objvCurrEduClsStu = arrvCurrEduClsStuObjLst[i];
        j++;
        strhtml1 += `<li class="btn-2">&nbsp;&nbsp;&nbsp;<span class="rowtit color3">${j}.</span>`;

        strhtml1 += `<a href="javascript:void(0)" onclick=btnAtUserName_Click("${objvCurrEduClsStu.stuId}","${objvCurrEduClsStu.stuName}")>[${objvCurrEduClsStu.stuName}]</a>`;

        strhtml1 += '</li>';
      }
      strhtml1 += '</ul>';

      let strhtml2 = '';
      strhtml2 += '<ul class="artlist">';
      let k = 0;
      for (let i = 0; i < arrvCurrEduClsTeacherObjLst.length; i++) {
        const objvCurrEduClsTeacher = arrvCurrEduClsTeacherObjLst[i];
        k++;
        strhtml2 += `<li class="btn-2">&nbsp;&nbsp;&nbsp;<span class="rowtit color3">${k}.</span>`;
        strhtml2 += `<a href="javascript:void(0)" onclick=btnAtUserName_Click("${objvCurrEduClsTeacher.teacherId}","${objvCurrEduClsTeacher.teacherName}")>[${objvCurrEduClsTeacher.teacherName}]</a>`;
        strhtml2 += '</li>';
      }
      strhtml2 += '</ul>';

      atOthers(strhtml1, strhtml2);
      //拼接；

      console.log('完成教学班教师和学生的信息绑定!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取教学班学生和教师的数据不成功,${e}.`;
      alert(strMsg);
    }
  }
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

    try {
      const responseText2 = await SysVote_AddNewRecordAsync(objSysVoteEN);
      const returnBool = !!responseText2;
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
        qa_Answer_UpdateRecordAsync(objqa_AnswerEN).then((jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == true) {
            const strInfo = `已点赞!`;
            message.success(strInfo);
            console.log('已点赞');
            this.btnShowAnswer_Click(enumCommentOrder.AllComment_01);
          } else {
            const strInfo = `点赞不成功!`;

            message.warning(strInfo);
            console.log('点赞不成功');
          }
        });
      } else {
        const strInfo = `点赞不成功!`;
        //显示信息框
        message.warning(strInfo);
      }

      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `点赞不成功,${e}.`;
      //alert(strMsg);
      message.warning(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }
  public get questionsId(): string {
    return PaperQAA.GetPropValue('questionsId');
  }
}
