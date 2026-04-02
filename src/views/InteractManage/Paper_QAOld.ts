import { Ref } from 'vue';
import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { qa_AnswerEx_DelRecordAsyncEx } from '@/ts/L3ForWApiEx/InteractManage/clsqa_AnswerExWApi';
import { vqa_QuestionsEx_GetPageNumObjLstAsync } from '@/ts/L3ForWApiEx/InteractManage/clsvqa_QuestionsExWApi';
import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import { clsvCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsqa_AnswerEN';
import { clsqa_PushEN } from '@/ts/L0Entity/InteractManage/clsqa_PushEN';
import { clsqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsqa_QuestionsEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { clsvqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsvqa_AnswerEN';
import { clsvqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsvqa_QuestionsEN';
import { vCurrEduClsStu_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import { vCurrEduClsTeacher_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import { Paper_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import {
  qa_Answer_AddNewRecordWithReturnKeyAsync,
  qa_Answer_GetObjByAnswerIdAsync,
  qa_Answer_GetRecCountByCondAsync,
  qa_Answer_UpdateRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_AnswerWApi';
import {
  qa_Push_AddNewRecordAsync,
  qa_Push_UpdateRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_PushWApi';
import {
  qa_Questions_AddNewRecordWithReturnKeyAsync,
  qa_Questions_DelRecordAsync,
  qa_Questions_GetFirstObjAsync,
  qa_Questions_GetObjByQuestionsIdAsync,
  qa_Questions_GetObjLstAsync,
  qa_Questions_UpdateRecordAsync,
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
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  HideDivInDivObj,
  SetInputValueInDivObj,
  ShowDivInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
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
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
import { userStore } from '@/store/modulesShare/user';
import { sysVoteStore } from '@/store/modules/sysVote';

declare function btnShowAnswer_Click(strKey: string, pageNum: number, pdfContent: string): void;

declare function atOthers(strStuName: string, strTeaName: string): void;
declare function LayercClose(): void;
declare let window: any;
/* spaqa_QuestionsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Paper_QAOld {
  public static questionsId = '';
  public static EditRef: Ref<any>;
  public static divLayout: HTMLDivElement;
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象
  public static times4TestShowDialog = 0;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvqa_QuestionsBy: string = "questionsId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  public async PageLoad() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
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
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    console.log(strCommandName, strKeyId);
  }
  //绑定提问数据
  public async Showdiv_Questions() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strWhereCond1 = `1=1 and questionsTypeId='01' and paperId='${clsPrivateSessionStorage.paperId}'`;
    const strWhereCond = `1=1 and questionsTypeId='01' and paperId='${clsPrivateSessionStorage.paperId}' order by updDate Asc`;
    const strUserId = userStore.getUserId;
    //const objqa_Questions: clsqa_QuestionsEN = null;
    let arrvqa_QuestionsObjLst0: Array<clsvqa_QuestionsEN> = [];
    let arrvqa_QuestionsObjLst: Array<clsvqa_QuestionsEN> = [];
    let arrvqa_PdfPageNumObjLst: Array<clsvqa_QuestionsEN> = [];
    try {
      await vqa_QuestionsEx_GetPageNumObjLstAsync(strWhereCond1).then((jsonData) => {
        arrvqa_PdfPageNumObjLst = <Array<clsvqa_QuestionsEN>>jsonData;
      });
      await vqa_Questions_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrvqa_QuestionsObjLst0 = <Array<clsvqa_QuestionsEN>>jsonData;
      });

      let strhtml = '';
      strhtml += '<div class="info" id="infoPaper_QA">';
      for (let j = 0; j < arrvqa_PdfPageNumObjLst.length; j++) {
        arrvqa_QuestionsObjLst = arrvqa_QuestionsObjLst0.filter(
          (x) => x.pdfPageNum == arrvqa_PdfPageNumObjLst[j].pdfPageNum,
        );

        strhtml += '<div class="title btn-2">';
        strhtml += `<a href="javascript:void(0)" title="当前pdf论文上的第几页一共有几个问题">第${arrvqa_PdfPageNumObjLst[j].pdfPageNum}页上的${arrvqa_QuestionsObjLst.length}个答疑</a>`;
        //strhtml += '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加问题" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btnAddNewQuestions_Click();> <i class="layui-icon" ></i>添加问题</button></div>';
        strhtml += '</div><ul class="artlist">';

        let k = 0;
        for (let i = 0; i < arrvqa_QuestionsObjLst.length; i++) {
          k++;
          strhtml += '<li>';

          strhtml += `<div id="Q${arrvqa_QuestionsObjLst[i].questionsId}" style="text-align:left; float:left; width:60%;">`;
          strhtml += `<span class="rowtit color1">${k}.</span>`;
          //strhtml += '&nbsp;<span class="rowtit color3">[' + arrvqa_QuestionsObjLst[i].pdfPageNum + ']</span>';

          strhtml += `<span class="title btn-4"><a href="javascript:void(0)" onclick=btnShowAnswer_Click("${arrvqa_QuestionsObjLst[i].questionsId}",${arrvqa_QuestionsObjLst[i].pdfPageNum},"${arrvqa_QuestionsObjLst[i].pdfContent}"); class="abstract-text">${arrvqa_QuestionsObjLst[i].questionsContent}</a></span>`;
          strhtml += `&nbsp;<span style="font-style:italic;" class="rowtit color2" title="第${arrvqa_QuestionsObjLst[i].pdfPageNum}页标记">P${arrvqa_QuestionsObjLst[i].pdfPageNum}</span>`;
          strhtml += `&nbsp;<span class="rowtit color3">[${arrvqa_QuestionsObjLst[i].answerCount}]</span>`;
          strhtml += '</div>';

          strhtml += '<div style="text-align:right; float:right; width:39%;">';
          if (arrvqa_QuestionsObjLst[i].updUser == strUserId) {
            //编辑
            strhtml += `<button title="编辑问题" class="btn btn-info btn-sm" onclick=btnUpdateQuestions_Click("${arrvqa_QuestionsObjLst[i].questionsId}")>${clsIcon.faPenToSquare}</button>`;
            //删除
            strhtml += `<button title="删除问题" class="btn-danger btn btn-sm" onclick=btnDelQuestions_Click("${arrvqa_QuestionsObjLst[i].questionsId}") href="javascript:;">${clsIcon.faTrash}</button>`;
          }

          //strhtml += '<span class="rowtit color5">[提问用户]：</span>' + arrvqa_QuestionsObjLst[i].userName + '&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[提问时间]：</span>' + arrvqa_QuestionsObjLst[i].updDate;

          let strUpdDate = arrvqa_QuestionsObjLst[i].updDate;
          strUpdDate = strUpdDate.substring(2, strUpdDate.length - 11);

          strhtml += `&nbsp;<span class="rowtit color4">${arrvqa_QuestionsObjLst[i].userName}/${strUpdDate}</span>&nbsp;&nbsp;`;
          strhtml += '</div>';
          strhtml += '</li>';
          //strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div>';
          //strhtml += '<li> <div style="border-bottom: 1px solid #eee;"></div></li>';
        }
        strhtml += '</ul>';
      }
      strhtml += '</div>';

      //拼接；
      // $('#div_qa_Questions').html(strhtml);
      const div_qa_Questions = GetDivObjInDivObj(divName, 'div_qa_Questions');
      div_qa_Questions.innerHTML = strhtml;

      const strQuestionsId = Paper_QAOld.questionsId;
      if (strQuestionsId != '') {
        const objQuestions = arrvqa_QuestionsObjLst0.find((x) => x.questionsId == strQuestionsId);
        if (objQuestions != null) {
          btnShowAnswer_Click(strQuestionsId, objQuestions.pdfPageNum, objQuestions.pdfContent);
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
            //strIdCurrEduclsdiv = document.createElement("img");
            //div.innerText = strTagsContent;

            //div.style.left = strPdfDivLet + "px";
            //div.style.top = strPdfDivTop + "px";
            //div.style.position = "absolute";
            //div.title = strTagsContent;
            //div.style.zIndex = "999";
            //div.id = strQuestionsId;
            //div.src = "/images/QA.png";
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
    const strQuestionsId = Paper_QAOld.questionsId;
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部评论
        strWhereCond1 = ` parentId='root' and  questionsId='${strQuestionsId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  questionsId='${strQuestionsId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人评论
        strWhereCond1 = ` parentId='root' and  questionsId='${strQuestionsId}' and updUser='${strUserId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  questionsId='${strQuestionsId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新评论
        strWhereCond1 = ` parentId='root' and  questionsId='${strQuestionsId}' order by updDate Desc`;
        strWhereCond2 = ` parentId<>'root' and  questionsId='${strQuestionsId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }
    // const strVateWhereCond = ` 1 =1 and updUser='${strUserId}' and voteTypeId='12' and pubParentId='${strQuestionsId}'`;
    const strVoteType = '12';
    const strPubParentId = strQuestionsId;

    const strQWhereCond = `questionsId='${strQuestionsId}'`;
    try {
      arrvqa_AnswerObjLst1 = await vqa_Answer_GetObjLstAsync(strWhereCond1);
      arrvqa_AnswerObjLst2 = await vqa_Answer_GetObjLstAsync(strWhereCond2);

      const objqa_Questions = await qa_Questions_GetFirstObjAsync(strQWhereCond);
      if (objqa_Questions != null) {
        $('#Questions_Name').html(objqa_Questions.questionsContent);
      }
      let strhtml = '';
      let varNum = 0;
      //   const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      // J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrvqa_AnswerObjLst1.length; i++) {
        const objvqa_Answer = arrvqa_AnswerObjLst1[i];
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
            strhtml += '<div class="reply-block">';

            strhtml += '<div class="reply-content">';
            if (
              GetInputValueInDivObj(divName, 'hidQuestionsUser') == arrvqa_AnswerObjLst3[j].updUser
            ) {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" style="color:red;"> 题主(${arrvqa_AnswerObjLst3[j].userName})</b>：</span>`;
            } else {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User">${arrvqa_AnswerObjLst3[j].userName}</b>：</span>`;
            }
            strhtml += `${arrvqa_AnswerObjLst3[j].answerContent}</div>`;

            strhtml += '<div class="reply-operate reply-operate--hot">';
            //if (arrvqa_AnswerObjLst3[j].scoreType == "2") {
            //    strhtml += '<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分:<i>' + arrvqa_AnswerObjLst3[j].score + '</i></span>';
            //} else {
            //    strhtml += '<span class="J_Vote reply-operate-item reply-up">学生评分:<i>' + arrvqa_AnswerObjLst3[j].score + '</i></span>';
            //}
            const objLike = sysVoteStore.getObj(
              strVoteType,
              strUserId,
              arrvqa_AnswerObjLst3[j].answerId,
            );
            if (objLike == null) {
              strhtml += `<span class="J_Vote reply-operate-item reply-up" onclick=btnAddVote_Click("${arrvqa_AnswerObjLst3[j].answerId}","${arrvqa_AnswerObjLst3[j].updUser}")>赞<i>${arrvqa_AnswerObjLst3[j].voteCount}</i></span >`;
            } else {
              strhtml += `<span class="J_Vote reply-operate-item reply-up operate-visited" >已赞<i>${arrvqa_AnswerObjLst3[j].voteCount}</i></span >`;
            }
            //strhtml += '<i class="reply-dot">·</i><span class="J_Reply reply-operate-item"  onclick=btnReplyAnswer_Click("' + arrvqa_AnswerObjLst3[j].answerId + '")>回复</span>';

            strhtml += `<i class="reply-dot">·</i><span>${arrvqa_AnswerObjLst3[j].updDate}</span>`;
            if (strUserId == arrvqa_AnswerObjLst3[j].updUser) {
              strhtml += '<i class="reply-dot reply-operate-report" >·</i>';
              strhtml += `<span class="reply-operate-item reply-operate-report J_ReplyReport" onclick=btnDelAnswer_Click("${arrvqa_AnswerObjLst3[j].answerId}")>删除</span>`;
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
          strhtml += `<span class="J_Vote comment-operate-item comment-operate-up" onclick=btnAddVote_Click("${objvqa_Answer.answerId}","${objvqa_Answer.updUser}")>赞<i>${objvqa_Answer.voteCount}</i></span>`;
        } else {
          strhtml += `<span class="J_Vote comment-operate-item comment-operate-up operate-visited">已赞<i>${objvqa_Answer.voteCount}</i></span>`;
        }
        strhtml += `<span class="J_Reply comment-operate-item comment-operate-reply" id="J_Reply" onclick=btnReplyAnswer_Click("${objvqa_Answer.answerId}")>回复</span>`;
        strhtml += '</div>';

        if (strUserId == objvqa_Answer.updUser) {
          //strhtml += '<div class="J_Report comment-report" id="J_Report6673850347411436155" onclick=btnUpdateAnswer_Click("' + objvqa_Answer.answerId + '")>修改</div>';
          strhtml += `<div class="J_Report comment-report" onclick=btnDelAnswer_Click("${objvqa_Answer.answerId}")>删除</div>`;
        }
        strhtml += '</div></div>';
      }
      //$("#J_ShortComment").append(strhtml);
      $('#J_ShortComment').html(strhtml);
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

  /* 修改问题
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
    <param name = "sender">参数列表</param>
  */
  public async btnUpdateQuestions_Click(strQuestionsId: string) {
    this.btnOKUpd1 = '确认修改';
    this.btnCancel1 = '取消修改';
    Paper_QAOld.questionsId = strQuestionsId;
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

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnOKUpd1_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
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

          await this.AddNewRecordWithMaxIdSave1().then((jsonData) => {
            returnBool2 = jsonData;
          });
          if (returnBool2 == true) {
            //同步问题数量信息
            await this.SynQuestions();
            $('#divEditQuestionsRegion').hide();
            $('#div_qa_Welcome').show();
            if (clsPubSessionStorage.GetUserLst() != '') {
              await this.AddNewqa_Push();
            }
            await this.Showdiv_Questions();
            await this.Showdiv_PdfQuestions();
          }

          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,

          await this.UpdateRecordSave1().then((jsonData) => {
            returnBool3 = jsonData;
            strInfo = returnBool3 ? '问题修改成功！' : '问题修改不成功！';
            //strInfo += "(In qa_QuestionsCRUD.btnOKUpd_Click)";

            //显示信息框
            console.log(strInfo);
          });

          if (returnBool3 == true) {
            message.success(strInfo);

            $('#divEditQuestionsRegion').hide();
            ShowDivInDivObj(objLayOut, 'div_qa_Answer');
            await this.Showdiv_Questions();
            await this.Showdiv_PdfQuestions();
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
  public async AddNewRecordWithMaxIdSave1() {
    //
    const objqa_QuestionsEN: clsqa_QuestionsEN = new clsqa_QuestionsEN();
    objqa_QuestionsEN.SetCreateDate(clsPubFun4Web.getNowDate()); // 修改日期
    this.PutDataToqa_QuestionsClass(objqa_QuestionsEN);

    try {
      //const responseText2 = await qa_Questions_AddNewRecordWithMaxIdAsync(objqa_QuestionsEN);
      const responseText2 = await qa_Questions_AddNewRecordWithReturnKeyAsync(objqa_QuestionsEN);

      const strQuestionsId: string = responseText2;

      //const returnBool: boolean = !!responseText2;
      if (strQuestionsId != '') {
        Paper_QAOld.questionsId = strQuestionsId;
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

  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateRecordSave1() {
    const strThisFuncName = this.UpdateRecordSave1.name;

    //
    const objqa_QuestionsEN: clsqa_QuestionsEN = new clsqa_QuestionsEN();
    objqa_QuestionsEN.SetQuestionsId(Paper_QAOld.questionsId);
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

  ///添加问题推送
  public async AddNewqa_Push() {
    try {
      let strJson = clsPubSessionStorage.GetUserLst();
      const JsonLent: number = strJson.length;
      strJson = strJson.substring(0, JsonLent - 1);
      console.log(strJson);
      const strUses = eval(`[${strJson}]`);
      //把存入的数组拿出来循环并添加到推送表
      for (let i = 0; i < strUses.length; i++) {
        const strUserId = strUses[i];
        const objqa_PushEN: clsqa_PushEN = new clsqa_PushEN();
        objqa_PushEN.SetQuestionsId(Paper_QAOld.questionsId);
        objqa_PushEN.SetReceiveUser(strUserId);
        objqa_PushEN.SetIsReceive(false);
        objqa_PushEN.SetIsRequestReply(this.isRequestReply); // 是否要求回复
        objqa_PushEN.SetUpdDate(clsPubFun4Web.getNowDate());
        objqa_PushEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班Id
        const responseText = await qa_Push_AddNewRecordAsync(objqa_PushEN);
        console.log(responseText);
      }
      //添加完以后清空用户数组字符串
      const strKey = 'UserLst';
      sessionStorage.removeItem(strKey);
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
    pobjqa_QuestionsEN.SetQuestionsTypeId('01');
    pobjqa_QuestionsEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjqa_QuestionsEN.SetQuestionsContent(this.questionsContent); // 提问内容
    pobjqa_QuestionsEN.SetPdfContent(this.pdfContent); // Pdf内容
    pobjqa_QuestionsEN.SetPdfPageNum(this.pdfPageNum); // Pdf页码
    pobjqa_QuestionsEN.SetOrderNum(this.orderNum); // 序号

    pobjqa_QuestionsEN.SetPdfPageNumIn(this.page_cache);
    pobjqa_QuestionsEN.SetPdfPageTop(this.page_top);
    pobjqa_QuestionsEN.SetPdfZoom(this.pdf_zoom);
    let pdfDiv_top1 = this.pdfDiv_top;
    pdfDiv_top1 = pdfDiv_top1.substring(0, pdfDiv_top1.length - 2);
    let pdfDiv_left = this.pdfDiv_left;
    pdfDiv_left = pdfDiv_left.substring(0, pdfDiv_left.length - 2);

    pobjqa_QuestionsEN.SetPdfDivTop(pdfDiv_top1);
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

  /*************************************************回答相关的模块********************************************************/
  /* 添加答案
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecordWithMaxId_Click)
   */
  public async btnAddNewAnswer_Click() {
    this.opType = 'AddWithMaxId';
    try {
      this.btnOKUpd2 = '确认添加';
      this.btnCancel2 = '取消添加';
      this.answerContent = '';
      //const responseText = this.AddNewRecordWithMaxId();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 修改答案
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async btnUpdateAnswer_Click(strAnswerId: string) {
    this.btnOKUpd2 = '确认修改';
    this.btnCancel2 = '取消修改';
    this.answerId = strAnswerId;
    try {
      const responseText = await qa_Answer_GetObjByAnswerIdAsync(strAnswerId);
      const objqa_AnswerEN: clsqa_AnswerEN = <clsqa_AnswerEN>responseText;
      this.answerContent = objqa_AnswerEN.answerContent;
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
  public async btnOKUpd2_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    const strCommandText: string = this.btnOKUpd2;
    try {
      const strAnswerId = GetInputValueInDivObj(objLayOut, 'hidAnswerId');
      let returnBool6;
      let returnBool2 = true;
      switch (strCommandText) {
        case '添加':
          //const responseText1 = await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,

          returnBool2 = await this.AddNewRecordWithMaxIdSave2();

          if (returnBool2 == true) {
            ShowDivInDivObj(objLayOut, 'div_qa_Answer');
            $('#divEditAnswerRegion').hide();
            this.btnShowAnswer_Click(enumCommentOrder.AllComment_01);
            if (GetInputValueInDivObj(objLayOut, 'hidPushId') != '') {
              await this.btnUpdQA_Push_Click(GetInputValueInDivObjN(objLayOut, 'hidPushId'));
            }
          }
          //更新总表3个参数 主键、子表类型、页面操作类型；
          //$("#hidAnswerId").val(strAnswerId);

          returnBool6 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
            strAnswerId,
            '11',
            '1',
            clsPubLocalStorage.idCurrEduCls,
          );

          if (returnBool6 == true) {
            console.log('论文子观点数据总表同步成功；');
          } else {
            console.log('论文子观点数据总表同步失败；');
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          await this.UpdateRecordSave2().then((jsonData) => {
            const returnBool: boolean = jsonData;
            const strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
            //strInfo += "(In qa_AnswerCRUD.btnOKUpd_Click)";

            //显示信息框
            console.log(strInfo);

            if (returnBool == true) {
              message.success(strInfo);
              ShowDivInDivObj(objLayOut, 'div_qa_Answer');
              $('#divEditAnswerRegion').hide();
              this.btnShowAnswer_Click(enumCommentOrder.AllComment_01);
            } else {
              alert(strInfo);
            }
          });

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

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   */
  public async AddNewRecordWithMaxIdSave2() {
    //
    const objqa_AnswerEN: clsqa_AnswerEN = new clsqa_AnswerEN();
    objqa_AnswerEN.SetCreateDate(clsPubFun4Web.getNowDate()); // 修改日期
    this.PutDataToqa_AnswerClass(objqa_AnswerEN);
    try {
      //const responseText2 = await qa_Answer_AddNewRecordWithMaxIdAsync(objqa_AnswerEN);
      const responseText2 = await qa_Answer_AddNewRecordWithReturnKeyAsync(objqa_AnswerEN);
      //const returnBool: boolean = !!responseText2;
      const strAnswerId: string = responseText2;
      $('#hidAnswerId').val(strAnswerId);
      //const returnBool: boolean = !!responseText2;
      if (strAnswerId != '') {
        //if (returnBool == true) {
        await this.SynAnswer();
        const strInfo = `添加回答成功!`;

        //显示信息框
        message.success(strInfo);
        //alert(strInfo);
        return true;
      } else {
        const strInfo = `添加回答不成功!`;

        //显示信息框
        alert(strInfo);
        return false;
      }
      //return responseText2;//一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加回答不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 修改记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async UpdateRecordSave2() {
    const strThisFuncName = this.UpdateRecordSave2.name;
    //
    const objqa_AnswerEN: clsqa_AnswerEN = new clsqa_AnswerEN();
    objqa_AnswerEN.SetAnswerId(this.answerId);
    $('#hidAnswerId').val(this.answerId);
    this.PutDataToqa_AnswerClass(objqa_AnswerEN);

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
  public PutDataToqa_AnswerClass(pobjqa_AnswerEN: clsqa_AnswerEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    pobjqa_AnswerEN.SetQuestionsId(Paper_QAOld.questionsId); //问题ID
    //pobjqa_AnswerEN.SetParentId("root";//父节点
    // pobjqa_AnswerEN.SetParentId(qa_Answer_EditEx.parentId); //父节点
    pobjqa_AnswerEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjqa_AnswerEN.SetAnswerContent(this.answerContent); // 答案内容
    pobjqa_AnswerEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjqa_AnswerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
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
    const strWhereCond = ` questionsId='${Paper_QAOld.questionsId}'`;
    const intAnswerCount2 = await vqa_Answer_GetRecCountByCondAsync(strWhereCond);

    const objqa_QuestionsEN: clsqa_QuestionsEN = new clsqa_QuestionsEN();
    objqa_QuestionsEN.SetQuestionsId(Paper_QAOld.questionsId);
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
    objSysVoteEN.SetPubParentId(Paper_QAOld.questionsId);
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
            //const gvResult = await this.btnShowAnswer_Click();
            const strInfo = `已点赞!`;
            message.success(strInfo);
            console.log('已点赞');
            this.btnShowAnswer_Click(enumCommentOrder.AllComment_01);
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

      return responseText2; //一定要有一个返回值，否则会出错！
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
    // const strUserId = userStore.getUserId;

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
    if (divName == null) return;

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
    SetInputValueInDivObj(divName, 'txtAnswerContent', value);
  }
  /*
   * 答案内容
   */
  public get answerContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtAnswerContent');
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
    // const divName = this.getDivName(enumDivType.LayOut_01);
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
    set_pdfDiv_top('pdfDiv_top', value);
    //$("#iframe_qaPdf", parent.document).contents().find("#pdfDiv_top").val(value);
  }
  /*
   * pdfDiv_top
   */
  public get pdfDiv_top(): string {
    return get_pdfDiv_top('pdfDiv_top');
    //return $("#iframe_qaPdf").contents().find("#pdfDiv_top").val();
    //return $("#iframe_qaPdf", parent.document).contents().find("#pdfDiv_top").val();
  }

  /*
   * pdfDiv_left
   */
  public set pdfDiv_left(value: string) {
    set_pdfDiv_left('pdfDiv_left', value);
    //$("#iframe_qaPdf").contents().find("#pdfDiv_left").val(value);
    //$("#iframe_qaPdf", parent.document).contents().find("#pdfDiv_left").val(value);
  }
  /*
   * pdfDiv_left
   */
  public get pdfDiv_left(): string {
    return get_pdfDiv_left('pdfDiv_left');
    //return $("#iframe_qaPdf").contents().find("#pdfDiv_left").val();
    //return $("#iframe_qaPdf", parent.document).contents().find("#pdfDiv_left").val();
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
        divName = Paper_QAOld.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = Paper_QAOld.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = Paper_QAOld.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = Paper_QAOld.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = Paper_QAOld.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = Paper_QAOld.divPager;
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
}
