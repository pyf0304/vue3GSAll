import { Ref } from 'vue';
import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import { clsvCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherEN';
import { clsgs_TagsTypeEN } from '@/ts/L0Entity/GradEduTools/clsgs_TagsTypeEN';
import { clsvgs_RTqa_PaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvgs_RTqa_PaperRelaEN';
import { clsgs_TagsEN } from '@/ts/L0Entity/InteractManage/clsgs_TagsEN';
import { clsqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsqa_AnswerEN';
import { clsqa_PaperEN } from '@/ts/L0Entity/InteractManage/clsqa_PaperEN';
import { clsqa_PushEN } from '@/ts/L0Entity/InteractManage/clsqa_PushEN';
import { clsqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsqa_QuestionsEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { clsvqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsvqa_AnswerEN';
import { clsvqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsvqa_QuestionsEN';
import { vCurrEduClsStu_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import { vCurrEduClsTeacher_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import { PaperAttachment_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import { gs_TagsType_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsgs_TagsTypeWApi';
import {
  vgs_RTqa_PaperRela_GetFirstObjAsync,
  vgs_RTqa_PaperRela_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvgs_RTqa_PaperRelaWApi';
import {
  gs_Tags_AddNewRecordWithReturnKeyAsync,
  gs_Tags_DelRecordAsync,
  gs_Tags_GetObjByTagsIdAsync,
  gs_Tags_GetObjLstAsync,
  gs_Tags_UpdateRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsgs_TagsWApi';
import {
  qa_Answer_DelRecordAsync,
  qa_Answer_GetObjByAnswerIdAsync,
  qa_Answer_GetRecCountByCondAsync,
  qa_Answer_UpdateRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_AnswerWApi';
import { qa_Paper_UpdateRecordAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_PaperWApi';
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
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPubSessionStorage } from '@/ts/PubFun/clsPubSessionStorage';
import { Format } from '@/ts/PubFun/clsString';

import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
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
import { SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { sysVoteStore } from '@/store/modules/sysVote';

declare function btnShowAnswer_Click(strKey: string, pageNum: number, pdfContent: string): void;

declare function atOthers(strStuName: string, strTeaName: string): void;
declare function LayercClose(): void;

declare function HideDialog(): void;
declare let window: any;
/* spaqa_QuestionsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Pdf_QA_Topic {
  public static questionsId = '';
  public static parentId = '';
  public static EditRef: Ref<any>;
  public static divEdit: HTMLDivElement;
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
    const divName = this.getDivName();
    if (divName == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //绑定pdf_Ifame
        await this.BindPdf();
        //显示当前评论的观点
        await this.Bind_TagsList();
        await this.Showdiv_Questions();

        await this.BindDdl_gs_TagsType_Cache('ddlTagsTypeId');
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

  //绑定pdf_Ifame
  public async BindPdf() {
    const divName = this.getDivName();
    try {
      //clsPrjInfoEN objPrjInfo = clsPrjInfoBL.GetObjByPrjID_Cache(strPrjId);

      let strPaperId = clsPrivateSessionStorage.paperId;
      if (strPaperId == '') {
        const strWhereCond1 = `1=1 and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
        await vgs_RTqa_PaperRela_GetFirstObjAsync(strWhereCond1).then((jsonData) => {
          const objvgs_RTqa_PaperRela: clsvgs_RTqa_PaperRelaEN = <clsvgs_RTqa_PaperRelaEN>jsonData;
          strPaperId = objvgs_RTqa_PaperRela.paperId;
          SetHidPaperId(divName, strPaperId);
        });
      }
      //论文Id

      const strWhereCond = ` 1=1 and paperId ='${strPaperId}'`;
      const objPaperAttachment = await PaperAttachment_GetFirstObjAsync(strWhereCond);

      let strhtml = '';
      if (objPaperAttachment != null) {
        const strfilepath = GetAddressAndPort() + objPaperAttachment.filePath;
        strhtml = `<iframe id='iframe_qaPdf' src='../InteractManage/qaPdf?zoom=1.1&file=${strfilepath}' style="height:100%;width:99%; min-height:700px;"></iframe>`;
      } else {
        strhtml =
          "<iframe id='iframe_qaPdf' src='../InteractManage/qaPdf?zoom=1.1' style=\"height:100%;width:99%; min-height:700px;\"></iframe>";
      }

      $('#leftPart').html(strhtml);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
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

  //绑定提问数据
  public async Showdiv_Questions() {
    const divName = this.getDivName();
    let arrvgs_RTqa_PaperRelaObjLst: Array<clsvgs_RTqa_PaperRelaEN> = [];

    const strUserId = userStore.getUserId;

    let arrvqa_QuestionsObjLst0: Array<clsvqa_QuestionsEN> = [];
    let arrvqa_QuestionsObjLst: Array<clsvqa_QuestionsEN> = [];

    // let arrvqa_PdfPageNumObjLst0: Array<clsvqa_QuestionsEN> = [];

    try {
      const strWhereCond1 = `1=1 and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
      await vgs_RTqa_PaperRela_GetObjLstAsync(strWhereCond1).then((jsonData) => {
        arrvgs_RTqa_PaperRelaObjLst = <Array<clsvgs_RTqa_PaperRelaEN>>jsonData;
      });

      let arrqa_PaperId = '';
      for (let i = 0; i < arrvgs_RTqa_PaperRelaObjLst.length; i++) {
        arrqa_PaperId += `${arrvgs_RTqa_PaperRelaObjLst[i].qaPaperId},`;
      }
      arrqa_PaperId = arrqa_PaperId.substring(0, arrqa_PaperId.length - 1);

      // const strWhereCond2 = `1=1 and qaPaperId in(${arrqa_PaperId})`;
      // arrvqa_PdfPageNumObjLst0 = await vqa_QuestionsEx_GetPageNumObjLstAsync(strWhereCond2);

      const strWhereCond3 = `1=1 and qaPaperId in(${arrqa_PaperId}) order by pdfPageNum Asc`;
      //strWhereCond3 = "1=1 and qaPaperId='" + $("#hidqa_PaperId").val() + "' order by updDate Asc";
      await vqa_Questions_GetObjLstAsync(strWhereCond3).then((jsonData) => {
        arrvqa_QuestionsObjLst0 = <Array<clsvqa_QuestionsEN>>jsonData;
      });

      let strhtml = '';
      strhtml += '<div class="info" id="infoSubViewpoint">';

      for (let i = 0; i < arrvgs_RTqa_PaperRelaObjLst.length; i++) {
        strhtml += '<div class="title btn-1">';
        strhtml += `<a href="javascript:void(0)" title="${arrvgs_RTqa_PaperRelaObjLst[i].paperTitle}" onclick=btnSwitchPaper_Click("${arrvgs_RTqa_PaperRelaObjLst[i].paperId}","${arrvgs_RTqa_PaperRelaObjLst[i].qaPaperId}")>[论文]、${arrvgs_RTqa_PaperRelaObjLst[i].paperTitle}</a>`;
        strhtml += '</div>';

        // arrvqa_PdfPageNumObjLst = arrvqa_PdfPageNumObjLst0.filter(
        //   (x) => x.qaPaperId == arrvgs_RTqa_PaperRelaObjLst[i].qaPaperId,
        // );
        arrvqa_QuestionsObjLst = arrvqa_QuestionsObjLst0.filter(
          (x) => x.qaPaperId == arrvgs_RTqa_PaperRelaObjLst[i].qaPaperId,
        );

        strhtml += '<ul class="artlist">';

        let v = 0;
        for (let k = 0; k < arrvqa_QuestionsObjLst.length; k++) {
          v++;
          //strIdCurrEduclsstrQuestionsId = arrvqa_QuestionsObjLst[k].questionsId;
          strhtml += '<li>';

          strhtml += `<div id="Q${arrvqa_QuestionsObjLst[i].questionsId}"  style="text-align:left; float:left; width:60%;">`;
          strhtml += `<span class="rowtit color1">${v}.</span>`;
          //strhtml += '&nbsp;<span class="rowtit color3">[' + arrvqa_QuestionsObjLst[k].pdfPageNum + ']</span>';

          strhtml += `<span class="title btn-4"><a href="javascript:void(0)" onclick=btnShowAnswer_Click("${arrvgs_RTqa_PaperRelaObjLst[i].paperId}","${arrvgs_RTqa_PaperRelaObjLst[i].qaPaperId}","${arrvqa_QuestionsObjLst[k].questionsId}",${arrvqa_QuestionsObjLst[k].pdfPageNum},"${arrvqa_QuestionsObjLst[k].pdfContent}"); class="abstract-text">${arrvqa_QuestionsObjLst[k].questionsContent}</a></span>`;
          strhtml += `&nbsp;<span style="font-style:italic;" class="rowtit color2" title="第${arrvqa_QuestionsObjLst[k].pdfPageNum}页标记">P${arrvqa_QuestionsObjLst[k].pdfPageNum}</span>`;
          strhtml += `&nbsp;<span class="rowtit color3">[${arrvqa_QuestionsObjLst[k].answerCount}]</span>`;
          strhtml += '</div>';

          strhtml += '<div style="text-align:right; float:right; width:39%;">';
          if (arrvqa_QuestionsObjLst[k].updUser == strUserId) {
            //编辑
            strhtml += `<button title="编辑问题" class="btn btn-info btn-sm" onclick=btnUpdateQuestions_Click("${arrvqa_QuestionsObjLst[k].questionsId}")>${clsIcon.faPenToSquare}</button>`;
            //删除
            strhtml += `<button title="删除问题" class="btn btn-danger btn-sm" onclick=btnDelQuestions_Click("${arrvqa_QuestionsObjLst[k].questionsId}") href="javascript:;">${clsIcon.faTrash}</button>`;
          }

          //strhtml += '<span class="rowtit color5">[提问用户]：</span>' + arrvqa_QuestionsObjLst[i].userName + '&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[提问时间]：</span>' + arrvqa_QuestionsObjLst[i].updDate;

          let strUpdDate = arrvqa_QuestionsObjLst[k].updDate;
          strUpdDate = strUpdDate.substring(2, strUpdDate.length - 11);

          strhtml += `&nbsp;<span class="rowtit color4">${arrvqa_QuestionsObjLst[k].userName}/${strUpdDate}</span>&nbsp;&nbsp;`;
          strhtml += '</div>';
          strhtml += '</li>';
          //strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div>';
          //strhtml += '<li> <div style="border-bottom: 1px solid #eee;"></div></li>';
        }
        strhtml += '</ul>';
        //}
      }

      strhtml += '</div>';

      //拼接；
      // $('#div_qa_Questions').html(strhtml);
      const div_qa_Questions = GetDivObjInDivObj(divName, 'div_qa_Questions');
      div_qa_Questions.innerHTML = strhtml;

      const strQuestionsId = Pdf_QA_Topic.questionsId;
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
    const divName = this.getDivName();
    const strWhereCond = `1=1 and qaPaperId='${GetInputValueInDivObj(
      divName,
      'hidqa_PaperId',
    )}' order by updDate Asc`;

    const strUserId = userStore.getUserId;
    //const objqa_Questions: clsqa_QuestionsEN = null;
    // const arrqa_QuestionsObjLst0: Array<clsqa_QuestionsEN> = [];
    let arrqa_QuestionsObjLst: Array<clsqa_QuestionsEN> = [];

    try {
      await qa_Questions_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrqa_QuestionsObjLst = <Array<clsqa_QuestionsEN>>jsonData;
      });

      //$(".QuestionsCss").remove();
      $('#iframe_qaPdf').contents().find('.QuestionsCss').remove();
      for (let i = 0; i < arrqa_QuestionsObjLst.length; i++) {
        const strPdfPageNum = arrqa_QuestionsObjLst[i].pdfPageNum;
        const strQuestionsId = arrqa_QuestionsObjLst[i].questionsId;
        //strIdCurrEduclsstrPdfDivTop: number = Number(arrqa_QuestionsObjLst[i].pdfDivTop) - 20;
        //strIdCurrEduclsstrPdfDivLet: number = Number(arrqa_QuestionsObjLst[i].pdfDivLet);
        const strQuestionsContent = arrqa_QuestionsObjLst[i].questionsContent;

        //strUpdUser = arrqa_QuestionsObjLst[i].updUser;

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

        //$("#iframe_qaPdf")[0].contentWindow.SetQALertTop(strPdfPageNum, strQuestionsId, strPdfDivTop, strPdfDivLet, strQuestionsContent, strUpdUser, strUserId);

        const pdfPage =
          window.frames['iframe_qaPdf'].contentDocument.getElementsByClassName('page');

        for (let j = 0; j <= pdfPage.length; j++) {
          if (strPdfPageNum == 0) continue;
          if (strPdfPageNum == j) {
            const div = document.createElement('a');

            //div.innerText = strTagsContent;
            div.href = 'javascript:void(0)';
            div.className = 'QuestionsCss';
            div.style.left = `${strPdfDivLet}px`;
            div.style.top = `${strPdfDivTop}px`;
            div.style.position = 'absolute';
            div.style.zIndex = '999';
            div.title = strQuestionsContent;
            div.id = strQuestionsId;
            //div.className = "layui-icon layui-icon-survey";//答疑图标
            if (arrqa_QuestionsObjLst[i].updUser == strUserId) {
              div.setAttribute('onclick', `btnUpdateQuestions_Click('${strQuestionsId}')`);
            }

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
    const divName = this.getDivName();
    //对pdf添加高亮
    this.btnUpdatePaperPageNum_Click(this.hidPdfContent);

    //绑定答案数据
    let arrvqa_AnswerObjLst1: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst2: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst3: Array<clsvqa_AnswerEN> = [];

    let strWhereCond1 = '';
    let strWhereCond2 = '';

    const strUserId = userStore.getUserId;
    const strQuestionsId = Pdf_QA_Topic.questionsId;
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
    const strVateWhereCond = ` 1 =1 and updUser='${strUserId}' and voteTypeId='12' and pubParentId='${strQuestionsId}'`;

    const strVoteType = '12';
    const strPubParentId = strQuestionsId;

    const strQWhereCond = `questionsId='${strQuestionsId}'`;
    try {
      await vqa_Answer_GetObjLstAsync(strWhereCond1).then((jsonData) => {
        arrvqa_AnswerObjLst1 = <Array<clsvqa_AnswerEN>>jsonData;
      });
      await vqa_Answer_GetObjLstAsync(strWhereCond2).then((jsonData) => {
        arrvqa_AnswerObjLst2 = <Array<clsvqa_AnswerEN>>jsonData;
      });

      const objqa_Questions = await qa_Questions_GetFirstObjAsync(strQWhereCond);
      if (objqa_Questions != null) {
        $('#Questions_Name').html(objqa_Questions.questionsContent);
      }
      let strhtml = '';
      let varNum = 0;
      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';
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
      J_ShortComment.innerHTML = strhtml;
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

    const objLst = window.frames['iframe_qaPdf'].contentDocument.getElementsByTagName('span');

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
          window.frames['iframe_qaPdf'].contentDocument.createElement('span');

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
    const objLst = window.frames['iframe_qaPdf'].contentDocument.getElementsByTagName('span');
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
    Pdf_QA_Topic.questionsId = strQuestionsId;
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
    const objLayOut = this.getDivName();
    if (objLayOut == null) return;
    const strCommandText: string = this.btnOKUpd1;
    try {
      let returnBool2 = true;
      let returnBool3 = true;
      let strInfo = '';
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

          returnBool3 = await this.UpdateRecordSave1();
          strInfo = returnBool3 ? '问题修改成功！' : '问题修改不成功！';
          //strInfo += "(In qa_QuestionsCRUD.btnOKUpd_Click)";

          //显示信息框
          console.log(strInfo);

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

    this.PutDataToqa_QuestionsClass(objqa_QuestionsEN);

    try {
      //const responseText2 = await qa_Questions_AddNewRecordWithMaxIdAsync(objqa_QuestionsEN);
      const responseText2 = await qa_Questions_AddNewRecordWithReturnKeyAsync(objqa_QuestionsEN);

      const strQuestionsId: string = responseText2;

      //const returnBool: boolean = !!responseText2;
      if (strQuestionsId != '') {
        Pdf_QA_Topic.questionsId = strQuestionsId;
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
    objqa_QuestionsEN.SetQuestionsId(Pdf_QA_Topic.questionsId);
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
        objqa_PushEN.SetQuestionsId(Pdf_QA_Topic.questionsId);
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
    const divName = this.getDivName();
    pobjqa_QuestionsEN.SetQaPaperId(GetInputValueInDivObj(divName, 'hidqa_PaperId'));
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
    //this.pdfContent = pobjqa_QuestionsEN.pdfContent;// Pdf内容
    //this.pdfPageNum = pobjqa_QuestionsEN.pdfPageNum;// Pdf页码
  }

  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear1() {
    this.questionsContent = '';
    //this.pdfContent = "";
    //this.pdfPageNum = 0;
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
    const divName = this.getDivName();
    const strThisFuncName = this.SynQuestions.name;

    const strqa_PaperId = GetInputValueInDivObj(divName, 'hidqa_PaperId');

    //添加记录的同时并记录论文读写的教师评价数
    const strWhereCond = ` qaPaperId=${strqa_PaperId}`;
    const intQuestionsCount = await vqa_Questions_GetRecCountByCondAsync(strWhereCond);

    const objqa_PaperEN: clsqa_PaperEN = new clsqa_PaperEN();
    objqa_PaperEN.SetQaPaperId(strqa_PaperId);
    objqa_PaperEN.SetQuestionsCount(intQuestionsCount);

    objqa_PaperEN.sfUpdFldSetStr = objqa_PaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objqa_PaperEN.qaPaperId == '' || objqa_PaperEN.qaPaperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    const responseText = await qa_Paper_UpdateRecordAsync(objqa_PaperEN);
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
      const responseText = await qa_Answer_DelRecordAsync(strAnswerId);
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

  //添加删除答案的时候统计问题数据量到问题表和论文答疑表
  public async SynAnswer() {
    const divName = this.getDivName();
    const strThisFuncName = this.SynAnswer.name;

    const strqa_PaperId = GetInputValueInDivObj(divName, 'hidqa_PaperId');

    //添加记录的同时并记录论文读写的教师评价数
    let strWhereCond = ` qaPaperId=${strqa_PaperId}`;
    const intAnswerCount1 = await vqa_Answer_GetRecCountByCondAsync(strWhereCond);

    const objqa_PaperEN: clsqa_PaperEN = new clsqa_PaperEN();
    objqa_PaperEN.SetQaPaperId(strqa_PaperId);
    objqa_PaperEN.SetAnswerCount(intAnswerCount1);

    objqa_PaperEN.sfUpdFldSetStr = objqa_PaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objqa_PaperEN.qaPaperId == '' || objqa_PaperEN.qaPaperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    const responseText1 = await qa_Paper_UpdateRecordAsync(objqa_PaperEN);
    const returnBool1 = !!responseText1;
    if (returnBool1 == true) {
      //刷新缓存
      console.log('添加答案数量到答疑表成功！');
    } else {
      console.log('添加答案数量到答疑表失败！');
    }
    //添加记录的同时并记录论文读写的教师评价数
    strWhereCond = ` questionsId='${Pdf_QA_Topic.questionsId}'`;
    const intAnswerCount2 = await vqa_Answer_GetRecCountByCondAsync(strWhereCond);

    const objqa_QuestionsEN: clsqa_QuestionsEN = new clsqa_QuestionsEN();
    objqa_QuestionsEN.SetQuestionsId(Pdf_QA_Topic.questionsId);
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
    objSysVoteEN.SetPubParentId(Pdf_QA_Topic.questionsId);
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
    const divName = this.getDivName();
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

  //public async txtQuestionsSubstring_Click(Cursor: number) {
  //    strIdCurrEduclstextContent = $("#txtQuestionsContent").val();
  //    if (textContent.value.substring(0, Cursor).charAt(Cursor - 1) === '@') {
  //        // 判断最后一个字符是否为@
  //        InviteOthers_Click(1);
  //    } else {
  //        //selectuser.style.display = 'none';
  //    }

  //}

  ////////////////////////////////////////////////////////标注维护/////////////////////////////////////////////////////////

  //绑定提问数据
  public async Bind_TagsList() {
    let arrvgs_RTqa_PaperRelaObjLst: Array<clsvgs_RTqa_PaperRelaEN> = [];

    const strUserId = userStore.getUserId;

    let arrgs_TagsObjLst0: Array<clsgs_TagsEN> = [];
    let arrgs_TagsObjLst1: Array<clsgs_TagsEN> = [];
    let arrgs_TagsObjLst2: Array<clsgs_TagsEN> = [];
    let arrgs_TagsTypeObjLst: Array<clsgs_TagsTypeEN> = [];

    try {
      const strWhereCond1 = `1=1 and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
      await vgs_RTqa_PaperRela_GetObjLstAsync(strWhereCond1).then((jsonData) => {
        arrvgs_RTqa_PaperRelaObjLst = <Array<clsvgs_RTqa_PaperRelaEN>>jsonData;
      });

      let arrPaperId = '';
      for (let i = 0; i < arrvgs_RTqa_PaperRelaObjLst.length; i++) {
        arrPaperId += `${arrvgs_RTqa_PaperRelaObjLst[i].paperId},`;
      }
      arrPaperId = arrPaperId.substring(0, arrPaperId.length - 1);

      //获取用户缓存数据
      const strWhere_User = '1=1';

      //获取标注数据
      //strWhereCond2 = "1=1 and paperId='" + $("#hidPaperId").val() + "' order by updDate Asc";
      const strWhereCond2 = `1=1 and paperId in(${arrPaperId}) order by updDate Asc`;
      await gs_Tags_GetObjLstAsync(strWhereCond2).then((jsonData) => {
        arrgs_TagsObjLst0 = <Array<clsgs_TagsEN>>jsonData;
      });
      await gs_TagsType_GetObjLstAsync('1=1').then((jsonData) => {
        arrgs_TagsTypeObjLst = <Array<clsgs_TagsTypeEN>>jsonData;
      });

      if (arrvgs_RTqa_PaperRelaObjLst.length > 0) {
        $('#list_Tags').show();
        let strhtml = '';
        strhtml += '<div class="info" id="infoTages">';
        strhtml += '<div class="title btn-4">';
        strhtml += '<a href="javascript:void(0)" title="pdf标注">pdf标注</a>';
        strhtml += '</div>';

        for (let i = 0; i < arrvgs_RTqa_PaperRelaObjLst.length; i++) {
          strhtml += '<div class="title btn-1">';
          strhtml += `<a href="javascript:void(0)" title="${arrvgs_RTqa_PaperRelaObjLst[i].paperTitle}" onclick=btnSwitchPaper_Tags_Click("${arrvgs_RTqa_PaperRelaObjLst[i].paperId}")>[论文]、${arrvgs_RTqa_PaperRelaObjLst[i].paperTitle}</a>`;
          strhtml += '</div>';

          strhtml += '<ul class="artlist">';
          arrgs_TagsObjLst1 = arrgs_TagsObjLst0.filter(
            (x) => x.paperId == arrvgs_RTqa_PaperRelaObjLst[i].paperId,
          );
          let v = 0;
          for (let j = 0; j < arrgs_TagsObjLst1.length; j++) {
            v++;
            const strTagsId = arrgs_TagsObjLst1[j].tagsId;
            strhtml += '<li>';

            strhtml += `<div id="T${strTagsId}"  style="text-align:left; float:left; width:65%;">`;
            strhtml += `<span class="rowtit color2">${v}.</span>`;
            const objTagsType = arrgs_TagsTypeObjLst.find(
              (x) => x.tagsTypeId == arrgs_TagsObjLst1[j].tagsTypeId,
            );
            if (objTagsType != null) {
              strhtml += `<span class="rowtit color4">[${objTagsType.tagsTypeName}]</span>`;
            }

            strhtml += `<span class="title btn-2"><a href="javascript:void(0)" onclick=btnShowTags_Click("${arrvgs_RTqa_PaperRelaObjLst[i].paperId}","${strTagsId}",${arrgs_TagsObjLst1[j].pdfPageNum},"${arrgs_TagsObjLst1[j].pdfContent}"); class="abstract-text">${arrgs_TagsObjLst1[j].tagsContent}</a></span>`;
            strhtml += `&nbsp;<span  style="font-style:italic;" class="rowtit color3" title="第${arrgs_TagsObjLst1[j].pdfPageNum}页标记">P${arrgs_TagsObjLst1[j].pdfPageNum}</span>`;
            strhtml += '</div>';

            strhtml += '<div style="text-align:right; float:right; width:34%;">';
            if (arrgs_TagsObjLst1[j].updUser == strUserId) {
              //编辑
              strhtml += `<button title="编辑标注" class="btn btn-info btn-sm" onclick=btnUpdateTags_Click("${strTagsId}")>${clsIcon.faPenToSquare}</button>`;
              //删除
              strhtml += `<button title="删除标注" class="btn btn-danger btn-sm" onclick=btnDelTags_Click("${strTagsId}") href="javascript:;">${clsIcon.faTrash}</button>`;
            }
            const strUserName = await vQxUsersSimStore.getUserName(arrgs_TagsObjLst1[j].updUser);
            if (strUserName != '') {
              let strUpdDate = arrgs_TagsObjLst1[j].updDate;
              strUpdDate = strUpdDate.substring(2, strUpdDate.length - 11);

              strhtml += `&nbsp;<span class="rowtit color4">${strUserName}/${strUpdDate}</span>&nbsp;&nbsp;`;

              //strhtml += '&nbsp;&nbsp;&nbsp;(' + objUser.userName + '&nbsp;/&nbsp;' + arrgs_TagsObjLst[j].updDate + ')&nbsp;&nbsp;&nbsp;';
            }
            strhtml += '</div>';

            strhtml += '</li>';
            //strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div>';
            //strhtml += '<li> <div style="border-bottom: 1px solid #eee;"></div></li>';
          }
          strhtml += '<li>';
          strhtml += '<div style="text-align:left; float:left; width:99%;">';
          for (let k = 0; k < arrgs_TagsTypeObjLst.length; k++) {
            arrgs_TagsObjLst2 = arrgs_TagsObjLst1.filter(
              (x) => x.tagsTypeId == arrgs_TagsTypeObjLst[k].tagsTypeId,
            );
            if (arrgs_TagsObjLst2.length > 0) {
              strhtml += `${arrgs_TagsTypeObjLst[k].tagsTypeName}:${arrgs_TagsObjLst2.length}个标注;&nbsp;`;
            }
          }
          strhtml += '</div>';
          strhtml += '</li>';
          strhtml += '</ul>';
        }

        strhtml += '</div>';

        //拼接；
        $('#list_Tags').html(strhtml);
      } else {
        $('#list_Tags').hide();
      }
      console.log('完成BindGv_gs_Tags!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //显示pdf标注
  public async Showdiv_PdfTags() {
    const divName = this.getDivName();
    const strWhereCond = `1=1 and paperId='${clsPrivateSessionStorage.paperId}'`;

    const strUserId = userStore.getUserId;
    //const objqa_Questions: clsqa_QuestionsEN = null;
    // const arrgs_TagsObjLst0: Array<clsgs_TagsEN> = [];
    let arrgs_TagsObjLst: Array<clsgs_TagsEN> = [];

    try {
      await gs_Tags_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrgs_TagsObjLst = <Array<clsgs_TagsEN>>jsonData;
      });

      //strhtml = "";
      //strIdCurrEduclsstrPdfDivTop_Left = "";
      //$("#pdfdivTop_Left div").remove();

      //arrgs_TagsObjLst = arrgs_TagsObjLst0.filter(x => x.pdfPageNum = this.pdfPageNum);

      //$(".TagsCss").remove();
      $('#iframe_qaPdf').contents().find('.TagsCss').remove();
      for (let i = 0; i < arrgs_TagsObjLst.length; i++) {
        const objgs_Tags = arrgs_TagsObjLst[i];
        //strIdCurrEduclsstrPdfDivTop_Left = "";
        //strPdfDivTop_Left += '<div id="' + objgs_Tags.tagsId + '" style="height: 50px; width: 200px; position: absolute; top:' + objgs_Tags.pdfDivTop + '; left: ' + objgs_Tags.pdfDivLet + '; background-color: gray" title="' + objgs_Tags.tagsContent + '">';
        //strPdfDivTop_Left += objgs_Tags.tagsContent;
        //strPdfDivTop_Left += '</div>';

        const strPdfPageNum = objgs_Tags.pdfPageNum;
        const strTagsId = objgs_Tags.tagsId;
        //strIdCurrEduclsstrPdfDivTop: number = Number(objgs_Tags.pdfDivTop) - 20;
        //strIdCurrEduclsstrPdfDivLet: number = Number(objgs_Tags.pdfDivLet);
        const strTagsContent = objgs_Tags.tagsContent;

        //strUpdUser = objgs_Tags.updUser;

        //如果zoom是auto的那么就默认赋值110
        let Currpdf_zoom = 0;
        if (GetInputValueInDivObj(divName, 'pdf_zoom') == 'auto') {
          Currpdf_zoom = 110;
        } else {
          Currpdf_zoom = Number(GetInputValueInDivObj(divName, 'pdf_zoom'));
        }

        let Datapdf_zoom = 0;
        if (objgs_Tags.pdfZoom == 'auto') {
          Datapdf_zoom = 110;
        } else {
          Datapdf_zoom = Number(objgs_Tags.pdfZoom);
        }

        //strIdCurrEduclsDatapdf_zoom: number = Number(objgs_Tags.pdfZoom);
        let strPdfDivTop = Number(objgs_Tags.pdfDivTop);
        let strPdfDivLet = Number(objgs_Tags.pdfDivLet);

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

        //SetDivLertTop(objgs_Tags.pdfPageNum, strPdfDivTop_Left);
        //SetDivLertTop(strPdfPageNum, strTagsId, strPdfDivTop, strPdfDivLet, strTagsContent);

        //$("#iframe_qaPdf")[0].contentWindow.SetTagsLertTop(strPdfPageNum, strTagsId, strPdfDivTop, strPdfDivLet, strTagsContent, strUpdUser, strUserId);

        const pdfPage =
          window.frames['iframe_qaPdf'].contentDocument.getElementsByClassName('page');

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
            //div.id = strTagsId;
            //div.src = "/images/001_50.png";
            //div.setAttribute("onclick", "btnUpdateTags_Click('" + strTagsId + "')");

            const div = document.createElement('a');

            //div.innerText = strTagsContent;
            div.className = 'TagsCss';
            div.href = 'javascript:void(0)';
            div.style.left = `${strPdfDivLet}px`;
            div.style.top = `${strPdfDivTop}px`;
            div.style.position = 'absolute';
            div.style.zIndex = '999';
            div.title = strTagsContent;
            div.id = strTagsId;
            //div.className = "layui-icon layui-icon-survey";//答疑图标
            if (objgs_Tags.updUser == strUserId) {
              div.setAttribute('onclick', `btnUpdateTags_Click('${strTagsId}')`);
            }

            //vari = document.createElement("i");
            //vari.className = "layui-icon layuilayui-icon-reply-fill";
            ////vari.className = "layui-icon";
            //vari.style.color = "#1E9FFF";
            //vari.style.fontSize = "30px";
            //vari.style.lineHeight = "32px";
            //vari.innerText = "&#xe60f";

            const vari = document.createElement('img');
            vari.style.lineHeight = '32px';
            vari.src = '/images/001_50.png';

            div.appendChild(vari);

            pdfPage[j - 1].appendChild(div);
          }
        }
      }
      //strhtml += '</div>';

      //拼接；
      //$("#pdfdivTop_Left").append(strPdfDivTop_Left);

      //strIdCurrEduclsClassArtlist = document.getElementsByClassName("artlist");
      //strIdCurrEduclstxtFontSizeNum = document.getElementById("txtFontSizeNum");
      //j;
      //for (let j = 0; j < ClassArtlist.length; j++) {
      //    ClassArtlist[i].style.fontSize = txtFontSizeNum.value + "px";

      //}

      //$(".textLayer").append(strPdfDivTop_Left);

      console.log('完成strPdfDivTop_Left绑定!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
  public async btnOKUpd3_Click() {
    const strCommandText: string = this.btnOKUpd3;
    try {
      let returnBool3 = true;
      let strInfo = '';
      let returnBool2 = true;
      switch (strCommandText) {
        case '添加':
          //const responseText1 = await this.AddNewRecord();
          break;
        case '添加标注':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,

          returnBool2 = await this.AddNewRecordWithMaxIdSave3();

          if (returnBool2 == true) {
            HideDialog();

            await this.Bind_TagsList();
            await this.Showdiv_PdfTags();
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
            HideDialog();
            await this.Bind_TagsList();
            await this.Showdiv_PdfTags();
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
  public async AddNewRecordWithMaxIdSave3() {
    //
    const objgs_TagsEN: clsgs_TagsEN = new clsgs_TagsEN();

    this.PutDataTogs_TagsClass(objgs_TagsEN);

    try {
      //const responseText2 = await gs_Tags_AddNewRecordWithMaxIdAsync(objgs_TagsEN);
      const responseText2 = await gs_Tags_AddNewRecordWithReturnKeyAsync(objgs_TagsEN);

      const strQuestionsId: string = responseText2;

      //const returnBool: boolean = !!responseText2;
      if (strQuestionsId != '') {
        Pdf_QA_Topic.questionsId = strQuestionsId;
        const strInfo = `添加标注成功!`;

        //显示信息框
        message.success(strInfo);
        //alert(strInfo);
        return true;
      } else {
        const strInfo = `添加标注不成功!`;

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
  public async UpdateRecordSave3() {
    const divName = this.getDivName();
    const strThisFuncName = this.UpdateRecordSave3.name;

    //
    const objgs_TagsEN: clsgs_TagsEN = new clsgs_TagsEN();
    objgs_TagsEN.SetTagsId(this.tagsId);

    //this.PutDataTogs_TagsClass(objgs_TagsEN);
    objgs_TagsEN.SetTagsContent(this.tagsContent); // 提问内容
    objgs_TagsEN.SetTagsTypeId(GetSelectValueInDivObj(divName, 'ddlTagsTypeId'));
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

  /* 函数功能:把界面上的属性数据传到类对象中
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   <param name = "pobjgs_TagsEN">数据传输的目的类对象</param>
 */
  public PutDataTogs_TagsClass(pobjgs_TagsEN: clsgs_TagsEN) {
    const divName = this.getDivName();
    pobjgs_TagsEN.SetPaperId(clsPrivateSessionStorage.paperId);
    pobjgs_TagsEN.SetTagsContent(this.tagsContent); // 提问内容
    pobjgs_TagsEN.SetPdfContent(this.pdfContent); // Pdf内容
    pobjgs_TagsEN.SetPdfPageNum(this.pdfPageNum); // Pdf页码
    pobjgs_TagsEN.SetTagsTypeId(GetSelectValueInDivObj(divName, 'ddlTagsTypeId'));

    pobjgs_TagsEN.SetPdfPageNumIn(this.page_cache);
    pobjgs_TagsEN.SetPdfPageTop(this.page_top);
    pobjgs_TagsEN.SetPdfZoom(this.pdf_zoom);

    let pdfDiv_top = this.pdfDiv_top;
    pdfDiv_top = pdfDiv_top.substring(0, pdfDiv_top.length - 2);
    let pdfDiv_left = this.pdfDiv_left;
    pdfDiv_left = pdfDiv_left.substring(0, pdfDiv_left.length - 2);

    pobjgs_TagsEN.SetPdfDivTop(pdfDiv_top);
    pobjgs_TagsEN.SetPdfDivLet(pdfDiv_left);

    //pobjgs_TagsEN.SetOrderNum(this.orderNum;// 序号
    pobjgs_TagsEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班Id// 教学班Id
    pobjgs_TagsEN.SetShareId('02'); // 分享
    pobjgs_TagsEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjgs_TagsEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
  }

  /* pdf标记删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   */
  public async btnDelTags_Click(strTagsId: string) {
    try {
      await this.DelRecord3(strTagsId);

      await this.Bind_TagsList();
      await this.Showdiv_PdfTags();
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
  public async DelRecord3(strTagsId: string) {
    try {
      const responseText = await gs_Tags_DelRecordAsync(strTagsId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
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

  /* 修改答案
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async btnUpdateTags_Click(strTagsId: string) {
    this.tagsId = strTagsId;
    try {
      const responseText = await gs_Tags_GetObjByTagsIdAsync(strTagsId);
      const objgs_TagsEN: clsgs_TagsEN = <clsgs_TagsEN>responseText;
      this.tagsContent = objgs_TagsEN.tagsContent;
      $('#ddlTagsTypeId').val(objgs_TagsEN.tagsTypeId);
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
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

  /*
   * 设置确定按钮的标题
   */
  public set btnOKUpd3(value: string) {
    $('#btnOKUpd3').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnOKUpd3(): string {
    return $('#btnOKUpd3').html();
  }
  /*
   * 序号
   */
  public set orderNum(value: number) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtOrderNum', value);
  }
  /*
   * 序号
   */
  public get orderNum(): number {
    const divName = this.getDivName();
    return GetInputValueInDivObjN(divName, 'txtOrderNum');
  }

  /*
   * 提问内容
   */
  public set questionsContent(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtQuestionsContent', value);
  }
  /*
   * 提问内容
   */
  public get questionsContent(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtQuestionsContent');
  }

  /*
   * 答案内容
   */
  public set answerContent(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtAnswerContent', value);
  }
  /*
   * 答案内容
   */
  public get answerContent(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtAnswerContent');
  }

  /*
   * 设置操作类型：Add||Update||Detail
   */
  public set opType(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidOpType', value);
  }
  /*
   * 设置操作类型：Add||Update||Detail
   */
  public get opType(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'hidOpType');
  }

  /*
   * 设置关键字的值
   */
  public set tagsId(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidTagsId', value);
  }
  /*
   * 设置关键字的值
   */
  public get tagsId(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'hidTagsId');
  }

  /*
   * 设置关键字的值
   */
  public set hidPdfContent(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidPdfContent', value);
  }
  /*
   * 设置关键字的值
   */
  public get hidPdfContent(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'hidPdfContent');
  }

  /*
   * 设置关键字的值
   */
  public set answerId(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidAnswerId', value);
  }
  /*
   * 设置关键字的值
   */
  public get answerId(): string {
    const divName = this.getDivName();
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
   * pdf标注内容
   */
  public set tagsContent(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtTagsContent', value);
  }
  /*
   * pdf标注内容
   */
  public get tagsContent(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtTagsContent');
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
    set_pdfPageNum('iframe_qaPdf', 'hidPdfPageNum', value);
  }
  /*
   * Pdf页码
   */
  public get pdfPageNum(): number {
    //return $("#hidPdfPageNum").val();
    return get_pdfPageNum('iframe_qaPdf');
  }

  /*
   * PdfTop
   */
  public set page_top(value: number) {
    //$("#hidPdfPageNum").val(value);
    set_page_top('iframe_qaPdf', 'page_top', value);
  }
  /*
   * PdfTop
   */
  public get page_top(): number {
    //return $("#hidPdfPageNum").val();
    return get_page_top('iframe_qaPdf', 'page_top');
  }

  /*
   * page_cache
   */
  public set page_cache(value: string) {
    //$("#hidPdfPageNum").val(value);
    set_page_cache('iframe_qaPdf', 'page_cache', value);
  }
  /*
   * page_cache
   */
  public get page_cache(): string {
    //return $("#hidPdfPageNum").val();
    return get_page_cache('iframe_qaPdf', 'page_cache');
  }

  /*
   * pdf_zoom
   */
  public set pdf_zoom(value: string) {
    //$("#hidPdfPageNum").val(value);
    set_pdf_zoom('iframe_qaPdf', 'pdf_zoom', value);
  }
  /*
   * pdf_zoom
   */
  public get pdf_zoom(): string {
    //return $("#hidPdfPageNum").val();

    return get_pdf_zoom('iframe_qaPdf', 'pdf_zoom');
  }

  /*
   * pdfDiv_top
   */
  public set pdfDiv_top(value: string) {
    //$("#hidPdfPageNum").val(value);
    set_pdfDiv_top('pdfDiv_top', value);
  }
  /*
   * pdfDiv_top
   */
  public get pdfDiv_top(): string {
    //return $("#hidPdfPageNum").val();
    return get_pdfDiv_top('pdfDiv_top');
  }

  /*
   * pdfDiv_left
   */
  public set pdfDiv_left(value: string) {
    //$("#hidPdfPageNum").val(value);
    set_pdfDiv_left('pdfDiv_left', value);
  }
  /*
   * page_cache
   */
  public get pdfDiv_left(): string {
    //return $("#hidPdfPageNum").val();
    return get_pdfDiv_left('pdfDiv_left');
  }
  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    Pdf_QA_Topic.divEdit = Pdf_QA_Topic.EditObj.$refs.refDivEdit;
    if (Pdf_QA_Topic.divEdit == null) {
      if (Pdf_QA_Topic.times4TestShowDialog < 2) {
        Pdf_QA_Topic.times4TestShowDialog++;
        setTimeout(() => {
          this.getDivName();
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
      return null;
    } else {
      Pdf_QA_Topic.times4TestShowDialog = 0;
    }
    return Pdf_QA_Topic.divEdit;
  }
}
