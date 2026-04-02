import { Ref } from 'vue';
import $ from 'jquery';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { clsvqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsvqa_AnswerEN';
import { clsvqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsvqa_QuestionsEN';
import { vRTUserRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import { SysVote_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import {
  qa_Questions_DownMoveAsync,
  qa_Questions_GetObjByQuestionsIdAsync,
  qa_Questions_GetRecCountByCondAsync,
  qa_Questions_ReFreshCache,
  qa_Questions_ReOrderAsync,
  qa_Questions_UpMoveAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_QuestionsWApi';
import { vqa_Answer_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsvqa_AnswerWApi';
import { vqa_AnswerEx_Getvqa_AnswerTopicIdNumObjLstAsync } from '@/ts/L3ForWApiEx/InteractManage/clsvqa_AnswerExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetA_Empty,
  GetB_Empty,
  GetButton_Empty,
  GetDiv_Empty,
  GetI_Empty,
  GetImg_Empty,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetLabel_Empty,
  GetLi_Empty,
  GetP_Empty,
  GetSpanObjInDivObj,
  GetSpan_Empty,
  GetTh_Empty,
  GetUl_Empty,
  SetPHtmlInDivObj4Exist,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { DateTime_GetDateTimeSim6 } from '@/ts/PubFun/clsDateTime';
import { vUsersSimEx_GetObjByUserIdCache } from '@/ts/L3ForWApiExShare/UserManage_GP/clsvUsersSimExWApi';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
import { userStore } from '@/store/modulesShare/user';
import { qxRolePotenceRelaStore } from '@/store/modulesShare/qxRolePotenceRela';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { sysVoteStore } from '@/store/modules/sysVote';
export class CommQuestionAnswer {
  public static ShortComment = '';
  public static questionsId = '';
  public static currQuestionsId = '';
  // private static vvuebtn_Click: (strCommandName: string, strKeyId: string) => void;
  public static SysCommentRef: Ref<any>;
  public static HistoricalVersionRef: Ref<any>;

  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divLayout: HTMLDivElement; //界面布局的层对象
  public static setVuebtn_ClickB(
    pvuebtn_Click: (strCommandName: string, strKeyId: string) => void,
  ) {
    console.error('pvuebtn_Click:', pvuebtn_Click);
    // CommQuestionAnswer.vvuebtn_Click = pvuebtn_Click;
  }
  //绑定提问数据
  public async BindDiv_Questions(
    vvuebtn_Click: (strCommandName: string, strKeyId: string) => void,
    divLayout: HTMLDivElement,
    div_qa_Questions: HTMLDivElement,
    arrvqa_QuestionsObjLst: Array<clsvqa_QuestionsEN>,
  ) {
    CommQuestionAnswer.divLayout = divLayout;
    const strUserId = userStore.getUserId;
    CommQuestionAnswer.currQuestionsId = '';
    CommQuestionAnswer.questionsId = '';

    try {
      // let strhtml = '';
      // strhtml += '<div class="info" id="infoSubViewpoint">';
      const divInfo = GetDiv_Empty('info');
      divInfo.id = 'infoSubViewpoint';
      const strRoleId = userStore.getRoleId;
      //判断角色
      //不等于学生，其他角色都可以添加问题
      const strPotenceName = '问题维护';
      const arrRoleId = await qxRolePotenceRelaStore.getRoleIdsByPotenceName(
        strPotenceName,
        clsSysPara4WebApi.currSelPrjId,
      );
      if (arrRoleId.indexOf(strRoleId) > -1) {
        // strhtml +=
        //   '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加问题" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btnAddNewQuestions_Click();> <i class="layui-icon" ></i>添加问题</button></div>';
        {
          const div1 = GetDiv_Empty('');
          div1.style.float = 'right';
          div1.style.marginRight = '20px';
          const btnAddQuestion = GetButton_Empty('btn btn-warm btn-xs');
          btnAddQuestion.style.color = '#666';
          btnAddQuestion.title = '添加问题';
          // <i class="layui-icon" ></i>
          // <i class="fas fa-plus"></i>
          const i1 = GetI_Empty('fas fa-plus');
          // i1.innerHTML = '';
          btnAddQuestion.appendChild(i1);
          btnAddQuestion.innerText = '添加问题';
          (function () {
            btnAddQuestion.onclick = function () {
              vvuebtn_Click('AddNewRecordWithMaxId', '');
            };
          })();

          div1.appendChild(btnAddQuestion);
          divInfo.appendChild(div1);
        }
      }

      const ulArtList = GetUl_Empty('artlist');

      let k = 0;
      for (let i = 0; i < arrvqa_QuestionsObjLst.length; i++) {
        const objvqa_Questions = arrvqa_QuestionsObjLst[i];
        const strQuestionsId = objvqa_Questions.questionsId;
        k++;
        // strhtml += '<li>';
        const li1 = GetLi_Empty('');

        // strhtml += `<div id="Q${strQuestionsId}" style="text-align:left; float:left; width:65%;">`;
        const div1 = GetDiv_Empty('');
        div1.style.textAlign = 'left';
        div1.style.float = 'left';
        div1.style.width = '65%';

        // strhtml += `<span class="rowtit color1">${k}.</span>`;
        {
          const spn1 = GetSpan_Empty('rowtit color1');
          spn1.innerText = `${k}.`;
          div1.appendChild(spn1);
        }
        // strhtml += `<span class="question-list"><a href="javascript:void(0)" onclick=btnShowAnswer_Click("${strQuestionsId}",${objvqa_Questions.pdfPageNum},"${objvqa_Questions.pdfContent}"); class="abstract-text">${objvqa_Questions.questionsContent}</a></span>`;
        {
          const spn2 = GetSpan_Empty('question-list');
          if (objvqa_Questions.questionsId == CommQuestionAnswer.currQuestionsId) {
            spn2.className = 'question-list-selected';
          }
          spn2.id = `ques-${objvqa_Questions.questionsId}`;
          const a2 = GetA_Empty('abstract-text');
          a2.href = 'javascript:void(0)';
          a2.innerText = objvqa_Questions.questionsContent;
          (function (strQuestionsId, intPdfPageNum, strPdfContent) {
            a2.onclick = function () {
              // CommQuestionAnswer.btnShowAnswer_Click(strQuestionsId, intPdfPageNum, strPdfContent);
              vvuebtn_Click('ShowAnswer', `${strQuestionsId}|${intPdfPageNum}|${strPdfContent}`);
            };
          })(strQuestionsId, objvqa_Questions.pdfPageNum, objvqa_Questions.pdfContent);
          spn2.appendChild(a2);
          div1.appendChild(spn2);
        }
        // strhtml += `&nbsp;<span style="font-style:italic;" class="rowtit color2" title="第${objvqa_Questions.pdfPageNum}页标记">P${objvqa_Questions.pdfPageNum}</span>`;
        {
          const spn3 = GetSpan_Empty('rowtit color2 ml-2');
          spn3.style.fontStyle = 'italic';
          spn3.title = `第${objvqa_Questions.pdfPageNum}页标记`;
          spn3.innerText = `P${objvqa_Questions.pdfPageNum}`;
          div1.appendChild(spn3);
        }
        // strhtml += `&nbsp;<span class="rowtit color3">[${objvqa_Questions.answerCount}]</span>`;
        {
          const spn4 = GetSpan_Empty('rowtit color3 ml-2');
          spn4.innerText = `[${objvqa_Questions.answerCount}]`;
          div1.appendChild(spn4);
        }
        // strhtml += '</div>';
        li1.appendChild(div1);

        // strhtml += '<div style="text-align:right; float:right; width:34%;">';
        const div2 = GetDiv_Empty('');
        div2.style.textAlign = 'right';
        div2.style.float = 'right';
        div2.style.width = '34%';

        if (strRoleId != '00620003') {
          //上移
          // strhtml += `<button title="上移序号" class="layui-btn layui-btn layui-btn-xs" onclick=btnUpMove_Click("${strQuestionsId}",${objvqa_Questions.orderNum})><i class="iconfont">&#xe6a5;</i></button>`;
          ////下移
          // strhtml += `<button title="下移序号" class="layui-btn layui-btn layui-btn-xs" onclick=btnDownMove_Click("${strQuestionsId}",${objvqa_Questions.orderNum})><i class="iconfont">&#xe6a6;</i></button>`;
          {
            const btnUpMove = GetButton_Empty('btn btn-success btn-sm');
            const i2 = GetI_Empty('fas fa-arrow-up');
            // i2.innerText = '&#xe6a5;';
            btnUpMove.title = '上移序号';
            btnUpMove.appendChild(i2);
            btnUpMove.appendChild(document.createTextNode(' 上'));
            const btnDomnMove = GetButton_Empty('btn btn-danger btn-sm');
            const i3 = GetI_Empty('fas fa-arrow-down');
            // i3.innerText = '&#xe6a6;';
            btnDomnMove.title = '下移序号';
            btnDomnMove.appendChild(i3);
            btnDomnMove.appendChild(document.createTextNode(' 下'));

            (function (strQuestionsId, intOrderNum) {
              btnUpMove.onclick = function () {
                CommQuestionAnswer.btnUpMove_Click(strQuestionsId, intOrderNum);
              };
            })(strQuestionsId, objvqa_Questions.orderNum);

            (function (strQuestionsId, intOrderNum) {
              btnDomnMove.onclick = function () {
                CommQuestionAnswer.btnDownMove_Click(strQuestionsId, intOrderNum);
              };
            })(strQuestionsId, objvqa_Questions.orderNum);

            div2.appendChild(btnUpMove);
            div2.appendChild(btnDomnMove);
          }
        }
        if (objvqa_Questions.updUser == strUserId) {
          //编辑
          // strhtml += `<button title="编辑问题" class="btn btn-info btn-sm" onclick=btnUpdateQuestions_Click("${strQuestionsId}")>${clsIcon.faPenToSquare}</button>`;
          //删除
          // strhtml += `<button title="删除问题" class="btn-danger btn btn-sm" onclick=btnDelQuestions_Click("${strQuestionsId}") href="javascript:;">${clsIcon.faTrash}</button>`;
          {
            const btnEdit = GetButton_Empty('btn btn-warning btn-sm');
            const i4 = GetI_Empty('fas fa-edit');
            // i4.innerText = '&#xe642;';
            btnEdit.title = '编辑问题';
            btnEdit.appendChild(i4);
            btnEdit.appendChild(document.createTextNode(' 改'));
            const btnDelete = GetButton_Empty('btn btn-danger btn-sm');
            const i5 = GetI_Empty('fas fa-trash');
            // i5.innerText = '&#xe640;';

            btnDelete.title = '删除问题';
            btnDelete.appendChild(i5);
            btnDelete.appendChild(document.createTextNode(' 删'));
            (function (strQuestionsId) {
              btnEdit.onclick = function () {
                vvuebtn_Click('UpdateQuestions', strQuestionsId);
              };
            })(strQuestionsId);

            (function (strQuestionsId) {
              btnDelete.onclick = function () {
                vvuebtn_Click('DelQuestions', strQuestionsId);
              };
            })(strQuestionsId);

            div2.appendChild(btnEdit);
            div2.appendChild(btnDelete);
          }
        }

        let strUpdDate = objvqa_Questions.updDate;
        strUpdDate = strUpdDate.substring(2, strUpdDate.length - 11);

        // strhtml += `&nbsp;<span class="rowtit color4">${objvqa_Questions.userName}/${strUpdDate}</span>&nbsp;&nbsp;`;
        {
          const spn5 = GetSpan_Empty('rowtit color2 ml-2');
          spn5.innerText = `${objvqa_Questions.userName}/${strUpdDate}`;
          div2.appendChild(spn5);
        }
        // strhtml += '</div>';
        // strhtml += '</li>';
        li1.appendChild(div2);
        ulArtList.appendChild(li1);
      }
      // strhtml += '</ul>';
      //}
      // strhtml += '</div>';
      divInfo.appendChild(ulArtList);
      //拼接；

      div_qa_Questions.innerHTML = '';
      div_qa_Questions.appendChild(divInfo);
      // div_qa_Questions.innerHTML = strhtml;
      // $('#div_qa_Questions').html(strhtml);
      console.log('完成BindDiv_Questions!');

      // const hidQuestionsId = CommQuestionAnswer.currQuestionsId;
      // if (hidQuestionsId != '') {
      //   const objQuestions = arrvqa_QuestionsObjLst.find((x) => x.questionsId == hidQuestionsId);
      //   if (objQuestions != null) {
      //     CommQuestionAnswer.btnShowAnswer_Click(
      //       hidQuestionsId,
      //       objQuestions.pdfPageNum,
      //       objQuestions.pdfContent,
      //     );
      //   }
      // }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //绑定答案数据
  public static async btnShowAnswer_Click(
    vvuebtn_Click: (strCommandName: string, strKeyId: string) => void,
    divLayout: HTMLDivElement,
    divShowAnswer: HTMLDivElement,
    strQuestionsId: string,
    intPdfPageNum: number,
    strPdfContent: string,
    strCommentOrder: enumCommentOrder,
  ) {
    console.log(strQuestionsId, intPdfPageNum, strPdfContent);

    CommQuestionAnswer.questionsId = strQuestionsId;
    if (CommQuestionAnswer.currQuestionsId == '') {
      const spnCurrQuestion = GetSpanObjInDivObj(divLayout, `ques-${strQuestionsId}`);
      if (spnCurrQuestion != null) {
        spnCurrQuestion.className = 'question-list-selected'; //'SelectedSpan';
      }
      CommQuestionAnswer.currQuestionsId = strQuestionsId;
    } else if (CommQuestionAnswer.currQuestionsId != strQuestionsId) {
      const spnCurrQuestion_Old = GetSpanObjInDivObj(
        divLayout,
        `ques-${CommQuestionAnswer.currQuestionsId}`,
      );
      if (spnCurrQuestion_Old != null) {
        spnCurrQuestion_Old.className = 'question-list';
      }

      const spnCurrQuestion = GetSpanObjInDivObj(divLayout, `ques-${strQuestionsId}`);
      if (spnCurrQuestion != null) {
        spnCurrQuestion.className = 'question-list-selected'; //'SelectedSpan';
      }
      CommQuestionAnswer.currQuestionsId = strQuestionsId;
    }

    const divName = divLayout;
    if (divName == null) return;
    //对pdf添加高亮
    //this.btnUpdatePaperPageNum_Click(this.hidPdfContent);

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
    const strRoleId = userStore.getRoleId;
    // const strQuestionsId = objPage.questionsId;
    let strTopicId = clsPrivateSessionStorage.topicIdInTree;
    if (strTopicId == '') strTopicId = '00000000';
    //主题用户关系列表
    //objvRTUserRela: clsvRTUserRelaEN = new clsvRTUserRelaEN;

    let arrvRTUserRela0: Array<clsvRTUserRelaEN> = [];
    let arrvRTUserRela1: Array<clsvRTUserRelaEN> = [];
    // const arrvRTUserRela2: Array<clsvRTUserRelaEN> = [];
    //主题用户关系 用来显示小组推荐答案色码块标志；
    let arrRTUserRelaObjLst: Array<clsvRTUserRelaEN> = [];

    let arrvRTUserRela0_1: Array<clsvRTUserRelaEN> = [];
    let arrvRTUserRela0_2: Array<clsvRTUserRelaEN> = [];

    //学生
    if (strRoleId == '00620003') {
      strWhereCond1 += `topicId ='${strTopicId}' and updUser='${strUserId}' and`;
      strWhereCond2 += `topicId ='${strTopicId}' and updUser='${strUserId}' and`;
    }

    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部评论
        strWhereCond1 += ` parentId='root' and answerTypeId='01' and  questionsId='${strQuestionsId}' order by updDate Asc`;
        strWhereCond2 += ` parentId<>'root' and answerTypeId='01' and  questionsId='${strQuestionsId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人评论
        strWhereCond1 += ` parentId='root' and answerTypeId='01' and  questionsId='${strQuestionsId}' and updUser='${strUserId}' order by updDate Asc`;
        strWhereCond2 += ` parentId<>'root' and answerTypeId='01' and  questionsId='${strQuestionsId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新评论
        strWhereCond1 += ` parentId='root' and answerTypeId='01' and  questionsId='${strQuestionsId}' order by updDate Desc`;
        strWhereCond2 += ` parentId<>'root' and answerTypeId='01' and  questionsId='${strQuestionsId}' order by updDate Desc`;
        break;
      default:
        //全部评论
        strWhereCond1 += ` parentId='root' and answerTypeId='01' and  questionsId='${strQuestionsId}' order by updDate Asc`;
        strWhereCond2 += ` parentId<>'root' and answerTypeId='01' and  questionsId='${strQuestionsId}' order by updDate Asc`;
        break;
    }
    // const strVateWhereCond = ` 1 =1 and updUser='${strUserId}' and voteTypeId='12' and pubParentId='${strQuestionsId}'`;
    const strVoteType = '12';
    const strPubParentId = strQuestionsId; //暂时没用
    try {
      arrvqa_AnswerObjLst1 = await vqa_Answer_GetObjLstAsync(strWhereCond1);
      arrvqa_AnswerObjLst2 = await vqa_Answer_GetObjLstAsync(strWhereCond2);

      const objqa_Questions = await qa_Questions_GetObjByQuestionsIdAsync(strQuestionsId);
      if (objqa_Questions != null) {
        // $('#Questions_Name').html(objqa_Questions.questionsContent);
        SetPHtmlInDivObj4Exist(divName, 'Questions_Name', objqa_Questions.questionsContent);
        $('#answerCount').html(objqa_Questions.answerCount.toString());
        $('#discussCount').html(objqa_Questions.discussCount.toString());
        $('#groupDiscussCount').html(objqa_Questions.groupDiscussCount.toString());
      }

      if (strTopicId != '') {
        const strWhereCond3 = `topicId ='${strTopicId}'`;

        //判断角色
        //不等于学生，其他角色都可以添加问题
        //if (strRoleId != "00620003") {

        let strWhereCond4 = '';
        if (strRoleId == '00620003') {
          strWhereCond4 += ` questionsId='${strQuestionsId}' and topicId ='${strTopicId}'`;
        } else {
          strWhereCond4 += ` questionsId='${strQuestionsId}' and topicId<>'00000000' `;
        }

        arrvqa_AnswerNumObjLst1 = await vqa_AnswerEx_Getvqa_AnswerTopicIdNumObjLstAsync(
          strWhereCond4,
        );

        if (arrvqa_AnswerNumObjLst1.length > 0) {
          let arrTopicId = '';
          for (let i = 0; i < arrvqa_AnswerNumObjLst1.length; i++) {
            arrTopicId += `${arrvqa_AnswerNumObjLst1[i].topicId},`;
          }
          arrTopicId = arrTopicId.substring(0, arrTopicId.length - 1);

          let strWhereCond5 = '';

          //判断角色
          //学生//教师、管理员
          if (strRoleId == '00620003') {
            strWhereCond5 += `topicId ='${strTopicId}'`;
          } else {
            strWhereCond5 += `topicId in(${arrTopicId}) order by topicId Asc`;
          }

          arrvRTUserRela0 = await vRTUserRela_GetObjLstAsync(strWhereCond5);
        }

        arrvRTUserRela0_1 = await vRTUserRela_GetObjLstAsync(strWhereCond3);
      }

      // let strhtml = '';
      let varNum = 0;
      // const divShowAnswer = GetDivObjInDivObj(divName, CommQuestionAnswer.ShortComment);
      divShowAnswer.innerHTML = '';
      for (let i = 0; i < arrvqa_AnswerObjLst1.length; i++) {
        const objvQa_Answer = arrvqa_AnswerObjLst1[i];

        objvQa_Answer.userName = await vQxUsersSimStore.getUserName(objvQa_Answer.updUser);

        let strUserPicSrc = '/img/avatar5.png';
        // if (objvUsersSim != null && objvUsersSim.headPic != '') {
        //   strUserPicSrc = `/${objvUsersSim.headPic}`;
        // }
        //1.判断答案是否提交 ，没提交则显示自己的 并且可以编辑；
        if (objvQa_Answer.isSubmit == true) {
          varNum++;
          // strhtml += '<div class="comment" >';
          const divComment_isSubmit = GetDiv_Empty('comment');
          //根据循环的答案得到主题ID，通过主题ID过滤得到当前主题用户关系列表，同时需要判断只有小组答案 才显示色码块；
          if (objvQa_Answer.isRecommend == true) {
            arrRTUserRelaObjLst = arrvRTUserRela0.filter((x) => x.topicId == objvQa_Answer.topicId);
            //循环数据源
            // strhtml += '<div><th colspan="2">';
            const div1 = GetDiv_Empty('');
            const th1 = GetTh_Empty('');
            th1.colSpan = 2;

            for (let y = 0; y < arrRTUserRelaObjLst.length; y++) {
              const strUserName = arrRTUserRelaObjLst[y].userName;
              const strColorCode = arrRTUserRelaObjLst[y].colorCode;
              //得到显示用户的色码块
              // strhtml += `<label style="background: ${strColorCode}">&nbsp;&nbsp;&nbsp;&nbsp;</label>&nbsp;&nbsp;<span>${strUserName}</span>&nbsp;&nbsp;&nbsp;`;
              const label1 = GetLabel_Empty('');
              label1.style.background = strColorCode;
              label1.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;';
              const spnUserName = GetSpan_Empty('ml-3 mr-3');
              spnUserName.innerText = strUserName;
              th1.appendChild(label1);
              th1.appendChild(spnUserName);
            }
            // strhtml += '</th></div>';
            div1.appendChild(th1);
            divComment_isSubmit.appendChild(div1);
          }

          // strhtml +=
          //   '<div class="common-avatar J_User" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
          {
            const divComment_Avatar = GetDiv_Empty('common-avatar J_User');
            const img1 = GetImg_Empty('');
            img1.src = strUserPicSrc; //'/img/avatar5.png';
            img1.width = 100;
            img1.height = 100;
            divComment_Avatar.appendChild(img1);
            divComment_isSubmit.appendChild(divComment_Avatar);
          }
          // strhtml += '<div class="comment-block">';
          const divComment_block = GetDiv_Empty('comment-block');

          //给用户上色
          const p1 = GetP_Empty('comment-user');
          const spn1 = GetSpan_Empty('comment-username J_User');

          if (arrvqa_AnswerNumObjLst1.length > 0) {
            if (objvQa_Answer.topicId != '') {
              arrvRTUserRela1 = arrvRTUserRela0.filter((x) => x.topicId == objvQa_Answer.topicId);
              const objvRTUserRela = arrvRTUserRela1.find((x) => x.userId == objvQa_Answer.updUser);
              if (objvRTUserRela != null) {
                if (objvQa_Answer.isRecommend == true) {
                  // strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:#800080;font-weight:bold;">小组推荐回答(${objvRTUserRela.topicName})</span>`;
                  spn1.style.color = '#800080';
                  spn1.style.fontWeight = 'bold';
                  spn1.innerHTML = `小组推荐回答(${objvRTUserRela.topicName})`;
                } else {
                  // strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:${objvRTUserRela.colorCode};">${objvQa_Answer.userName}(${objvRTUserRela.topicName})</span>`;
                  spn1.style.color = objvRTUserRela.colorCode;
                  spn1.innerHTML = `${objvQa_Answer.userName}(${objvRTUserRela.topicName})`;
                }
                p1.appendChild(spn1);
              } else {
                // strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
                spn1.innerHTML = objvQa_Answer.userName;
                p1.appendChild(spn1);
              }
            } else {
              // strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
              spn1.innerHTML = objvQa_Answer.userName;
              p1.appendChild(spn1);
            }
          } else {
            // strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
            spn1.innerHTML = objvQa_Answer.userName;
            p1.appendChild(spn1);
          }

          // strhtml += `<span class="comment-time">${objvQa_Answer.updDate}</span>`;
          {
            const spn2 = GetSpan_Empty('comment-time');
            spn2.innerHTML = DateTime_GetDateTimeSim6(objvQa_Answer.updDate);
            p1.appendChild(spn2);
          }

          // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment-username J_User">${varNum}楼</span></p>`;
          {
            const spn3 = GetSpan_Empty('comment-username J_User ml-2');
            spn3.innerHTML = `${varNum}楼`;
            p1.appendChild(spn3);
          }
          divComment_block.appendChild(p1);

          //给内容上色
          //给用户上色
          const divComment_content = GetDiv_Empty('comment-content J_CommentContent');
          divComment_content.innerHTML = objvQa_Answer.answerContent;
          if (arrvqa_AnswerNumObjLst1.length > 0) {
            if (objvQa_Answer.topicId != '') {
              arrvRTUserRela1 = arrvRTUserRela0.filter((x) => x.topicId == objvQa_Answer.topicId);
              const objvRTUserRela = arrvRTUserRela1.find((x) => x.userId == objvQa_Answer.updUser);
              if (objvRTUserRela != null) {
                // strhtml += `<div class="comment-content J_CommentContent"  style="color:${objvRTUserRela.colorCode};">${objvQa_Answer.answerContent}</div>`;
                divComment_content.style.color = objvRTUserRela.colorCode;
              } else {
                // strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
              }
            } else {
              // strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
            }
          } else {
            // strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
          }
          divComment_block.appendChild(divComment_content);

          //回复区

          arrvqa_AnswerObjLst3 = arrvqa_AnswerObjLst2.filter(
            (x) => x.parentId == objvQa_Answer.answerId,
          );
          if (arrvqa_AnswerObjLst3.length > 0) {
            // strhtml += '<div class="reply J_ReplyBlock">';
            const divReply = GetDiv_Empty('reply J_ReplyBlock');

            for (let j = 0; j < arrvqa_AnswerObjLst3.length; j++) {
              const objvQa_AnswerJ = arrvqa_AnswerObjLst3[j];
              // strhtml += '<div class="reply-block">';
              const divReply_block = GetDiv_Empty('reply-block');

              // strhtml += '<div class="reply-content">';
              const divReply_content = GetDiv_Empty('reply-content');

              const spnReply_User = GetSpan_Empty('reply-user');
              const b1 = GetB_Empty('reply-user-nick J_User');
              if (GetInputValueInDivObj(divName, 'hidQuestionsUser') == objvQa_AnswerJ.updUser) {
                // strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" style="color:red;"> 题主(${objvQa_AnswerJ.userName})</b>：</span>`;
                b1.innerHTML = `题主(${objvQa_AnswerJ.userName})`;
                b1.style.color = 'red';
              } else {
                // strhtml += `<span class="reply-user"><b class="reply-user-nick J_User">${objvQa_AnswerJ.userName}</b>：</span>`;
                b1.innerHTML = `题主(${objvQa_AnswerJ.userName})`;
              }
              spnReply_User.appendChild(b1);
              divReply_content.appendChild(spnReply_User);

              // strhtml += `${objvQa_AnswerJ.answerContent}</div>`;
              const spnAnswerContent = GetSpan_Empty('');
              spnAnswerContent.innerHTML = objvQa_AnswerJ.answerContent;
              divReply_content.appendChild(spnAnswerContent);

              // strhtml += '<div class="reply-operate reply-operate--hot">';
              const divReply_operate = GetDiv_Empty('reply-operate reply-operate--hot');

              const spnReply_operate_item = GetSpan_Empty('J_Vote reply-operate-item reply-up');
              const objLike = sysVoteStore.getObj(strVoteType, strUserId, objvQa_AnswerJ.answerId);
              if (objLike == null) {
                // strhtml += `<span class="J_Vote reply-operate-item reply-up" onclick=btnAddVote_Click("${objvQa_AnswerJ.answerId}","${objvQa_AnswerJ.updUser}")>赞<i>${objvQa_AnswerJ.voteCount}</i></span >`;
                spnReply_operate_item.innerHTML = `赞<i>${objvQa_AnswerJ.voteCount ?? '0'}</i>`;
                (function (strAnswerId, strUpdUser) {
                  spnReply_operate_item.onclick = function () {
                    vvuebtn_Click('AddVote', `${strAnswerId}|${strUpdUser}`);
                  };
                })(objvQa_AnswerJ.answerId, objvQa_AnswerJ.updUser);
              } else {
                // strhtml += `<span class="J_Vote reply-operate-item reply-up operate-visited" >已赞<i>${objvQa_AnswerJ.voteCount}</i></span >`;
                spnReply_operate_item.innerHTML = `已赞<i>${objvQa_AnswerJ.voteCount}</i>`;
              }
              divReply_operate.appendChild(spnReply_operate_item);

              // strhtml += `<i class="reply-dot">·</i><span>${objvQa_AnswerJ.updDate}</span>`;
              {
                const i1 = GetI_Empty('reply-dot');
                i1.innerHTML = '·';
                const spnReply_Dot = GetSpan_Empty('');
                spnReply_Dot.innerHTML = objvQa_AnswerJ.updDate;

                divReply_operate.appendChild(i1);
                divReply_operate.appendChild(spnReply_Dot);
              }

              if (strUserId == objvQa_AnswerJ.updUser) {
                // strhtml += '<i class="reply-dot reply-operate-report" >·</i>';
                // strhtml += `<span class="reply-operate-item reply-operate-report J_ReplyReport" onclick=btnDelAnswer_Click("${objvQa_AnswerJ.answerId}")>删除</span>`;
                {
                  const i2 = GetI_Empty('reply-dot reply-operate-report');
                  i2.innerHTML = '·';
                  const spnReply_operate_item2 = GetSpan_Empty(
                    'reply-operate-item reply-operate-report J_ReplyReport',
                  );
                  spnReply_operate_item2.innerHTML = '删除';
                  (function (strAnswerId: string) {
                    spnReply_operate_item2.onclick = function () {
                      vvuebtn_Click('DelAnswer', strAnswerId);
                    };
                  })(objvQa_AnswerJ.answerId);
                  divReply_operate.appendChild(i2);
                  divReply_operate.appendChild(spnReply_operate_item2);
                }
                divReply.appendChild(divReply_operate);
              }
              // strhtml += '</div>';
              divReply_content.appendChild(divReply_operate);
              // strhtml += '</div>';
              divReply_block.appendChild(divReply_content);
            }
            // strhtml += '</div>';
          }
          ///评论区
          // strhtml += '<div class="comment-operate J_CommentOperate clearfix">';
          const divComment_operate = GetDiv_Empty('comment-operate J_CommentOperate clearfix');

          const spnComment_Operate_item = GetSpan_Empty(
            'J_Vote comment-operate-item comment-operate-up',
          );
          const objLike = sysVoteStore.getObj(strVoteType, strUserId, objvQa_Answer.answerId);
          if (objLike == null) {
            // strhtml += `<span class="J_Vote comment-operate-item comment-operate-up" onclick=btnAddVote_Click("${objvQa_Answer.answerId}","${objvQa_Answer.updUser}")>赞<i>${objvQa_Answer.voteCount}</i></span>`;
            spnComment_Operate_item.innerHTML = `赞<i>${objvQa_Answer.voteCount ?? 0}</i>`;
            (function (strAnswerId: string) {
              spnComment_Operate_item.onclick = function () {
                vvuebtn_Click('AddVote', strAnswerId);
              };
            })(objvQa_Answer.answerId);
          } else {
            // strhtml += `<span class="J_Vote comment-operate-item comment-operate-up operate-visited">已赞<i>${objvQa_Answer.voteCount}</i></span>`;
            spnComment_Operate_item.className =
              'J_Vote comment-operate-item comment-operate-up operate-visited';
            spnComment_Operate_item.innerHTML = `已赞<i>${objvQa_Answer.voteCount}</i>`;
          }
          divComment_operate.appendChild(spnComment_Operate_item);

          // strhtml += `<span class="J_Reply comment-operate-item comment-operate-reply" id="J_Reply" onclick=btnReplyAnswer_Click("${objvQa_Answer.answerId}")>回复</span>`;
          {
            const spnComment_Operate_item2 = GetSpan_Empty(
              'J_Reply comment-operate-item comment-operate-reply',
            );
            spnComment_Operate_item2.id = 'J_Reply';
            spnComment_Operate_item2.innerHTML = '回复';
            (function (strAnswerId: string) {
              spnComment_Operate_item2.onclick = function () {
                vvuebtn_Click('ReplyAnswer', strAnswerId);
              };
            })(objvQa_Answer.answerId);
            divComment_operate.appendChild(spnComment_Operate_item2);
          }
          const spnComment_Operate_item22 = GetSpan_Empty(
            'J_Reply comment-operate-item comment-operate-reply',
          );
          // strhtml += `<span class="J_Reply comment-operate-item2 comment-operate-reply" id="J_Reply" onclick=SysComment("${objvQa_Answer.answerId}","${objvQa_Answer.updUser}","${strQuestionsId}")>评论<i>${objvQa_Answer.appraiseCount}</i>`;
          {
            spnComment_Operate_item22.id = 'J_Reply2';
            spnComment_Operate_item22.innerHTML = `评论<i>${objvQa_Answer.appraiseCount ?? 0}</i>`;
            (function (strAnswerId, strUpdUser, strQuestionsId) {
              spnComment_Operate_item22.onclick = function () {
                vvuebtn_Click('SysComment', `${strAnswerId}|${strUpdUser}|${strQuestionsId}`);
              };
            })(objvQa_Answer.answerId, objvQa_Answer.updUser, strQuestionsId);
            divComment_operate.appendChild(spnComment_Operate_item22);
          }

          if (objvQa_Answer.teaScore != 0) {
            // strhtml += `&nbsp;&nbsp;教师评分:<i> ${objvQa_Answer.teaScore} </i>`;
            spnComment_Operate_item22.innerHTML += `&nbsp;&nbsp;教师评分:<i> ${
              objvQa_Answer.teaScore ?? '0'
            } </i>`;
          }
          if (objvQa_Answer.stuScore != 0) {
            // strhtml += `&nbsp;&nbsp;学生评分:<i> ${objvQa_Answer.stuScore} </i>`;
            spnComment_Operate_item22.innerHTML += `&nbsp;&nbsp;学生评分:<i> ${
              objvQa_Answer.stuScore ?? '0'
            } </i>`;
          }
          // strhtml += '</span>';
          divComment_operate.appendChild(spnComment_Operate_item22);

          // strhtml += '</div>';
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
                        // strhtml += `<div class="J_Report comment-report" style="right:50px;" id="J_Report6673850347411436155" onclick=btnUpdateAnswer_Click("${objvQa_Answer.answerId}","${objvQa_Answer.topicId}")>小组推荐</div>`;
                        const divComment_report = GetDiv_Empty('J_Report comment-report');
                        divComment_report.innerHTML = '小组推荐';
                        divComment_report.id = 'J_Report6673850347411436155';
                        (function (strAnswerId, strTopicId) {
                          divComment_report.onclick = function () {
                            vvuebtn_Click('UpdateAnswer', `${strAnswerId}|${strTopicId}`);
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
            // strhtml += `<div class="J_Report comment-report" onclick=btnDelAnswer_Click("${objvQa_Answer.answerId}")>删除</div>`;
            {
              const divDelete = GetDiv_Empty('J_Report comment-report');
              const spnDelAnswer = GetSpan_Empty('');

              spnDelAnswer.innerHTML = '删除';
              (function (strAnswerId: string) {
                spnDelAnswer.onclick = function () {
                  vvuebtn_Click('DelAnswer', strAnswerId);
                };
              })(objvQa_Answer.answerId);
              const spnUpdAnswer = GetSpan_Empty('');

              spnUpdAnswer.innerHTML = '修改';
              (function (strAnswerId: string, strTopicId: string) {
                spnUpdAnswer.onclick = function () {
                  vvuebtn_Click('UpdAnswer', `${strAnswerId}|${strTopicId}`);
                };
              })(objvQa_Answer.answerId, objvQa_Answer.topicId);
              divDelete.appendChild(spnUpdAnswer);
              divDelete.appendChild(spnDelAnswer);

              divComment_block.appendChild(divDelete);
            }
          }
          //历史记录
          // strhtml += `<div class="J_Report comment-report" style="right:150px;" onclick=SearchParentV("${objvQa_Answer.answerId}")>历史版本</div>`;
          {
            const divSearchParentV = GetDiv_Empty('J_Report comment-report');
            divSearchParentV.innerHTML = '历史版本3';
            divSearchParentV.style.right = '150px';
            (function (strAnswerId: string) {
              divSearchParentV.onclick = function () {
                vvuebtn_Click('SearchParentV', strAnswerId);
              };
            })(objvQa_Answer.answerId);
            divComment_block.appendChild(divSearchParentV);
          }
          // strhtml += '</div></div>';
          divComment_isSubmit.appendChild(divComment_block);
          divShowAnswer.appendChild(divComment_isSubmit);
        } else {
          // varFalseNum++;
          //如果是小组推荐答案，那么成员都可以看见；
          if (objvQa_Answer.isRecommend == true) {
            if (strTopicId != '') {
              if (objvQa_Answer.topicId != '') {
                arrvRTUserRela1 = arrvRTUserRela0.filter((x) => x.topicId == objvQa_Answer.topicId);
                //如果当前用户包含在主题用户关系表中，那么则内容可见；
                const objvRTUserRela = arrvRTUserRela1.find((x) => x.userId == strUserId);
                if (objvRTUserRela != null) {
                  // strhtml += '<div class="comment" >';
                  const divComment_NotIsSubmit = GetDiv_Empty('comment');

                  // strhtml +=
                  //   '<div class="common-avatar J_User" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
                  {
                    const divComment_Avatar = GetDiv_Empty('common-avatar J_User');
                    const img1 = GetImg_Empty('');
                    img1.src = strUserPicSrc; // '/img/avatar5.png';
                    img1.width = 100;
                    img1.height = 100;
                    divComment_Avatar.appendChild(img1);
                    divComment_NotIsSubmit.appendChild(divComment_Avatar);
                  }
                  // strhtml += '<div class="comment-block">';
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
                          // strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:#800080;font-weight:bold;">小组推荐回答(${objvRTUserRela.topicName})</span>`;
                          spn1.style.color = '#800080';
                          spn1.style.fontWeight = 'bold';
                          spn1.innerHTML = `小组推荐回答(${objvRTUserRela.topicName})`;
                        } else {
                          // strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:${objvRTUserRela.colorCode};">${objvQa_Answer.userName}(${objvRTUserRela.topicName})</span>`;
                          spn1.style.color = objvRTUserRela.colorCode;
                          spn1.innerHTML = `${objvQa_Answer.userName}(${objvRTUserRela.topicName})`;
                        }
                        p1.appendChild(spn1);
                      } else {
                        // strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
                        spn1.innerHTML = objvQa_Answer.userName;
                        p1.appendChild(spn1);
                      }
                    } else {
                      // strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
                      spn1.innerHTML = objvQa_Answer.userName;
                      p1.appendChild(spn1);
                    }
                  } else {
                    // strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
                    spn1.innerHTML = objvQa_Answer.userName;
                    p1.appendChild(spn1);
                  }

                  // strhtml += `<span class="comment-time">${objvQa_Answer.updDate}</span>`;
                  {
                    const spn2 = GetSpan_Empty('comment-time');
                    spn2.innerHTML = objvQa_Answer.updDate;
                    p1.appendChild(spn2);
                  }

                  // strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;</p>';
                  divComment_block.appendChild(p1);
                  //给内容上色
                  //给用户上色
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
                        // strhtml += `<div class="comment-content J_CommentContent"  style="color:${objvRTUserRela.colorCode};">${objvQa_Answer.answerContent}</div>`;
                        divComment_content.style.color = objvRTUserRela.colorCode;
                      } else {
                        // strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
                      }
                    } else {
                      // strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
                    }
                  } else {
                    // strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
                  }
                  divComment_block.appendChild(divComment_content);

                  // strhtml += `<div class="J_Report comment-report" style="right:100px;" id="J_Report6673850347411436155" onclick=btnSubmitQa_Answer_Click("${objvQa_Answer.answerId}")>提交</div>`;
                  {
                    const divSubmit = GetDiv_Empty('J_Report comment-report');
                    divSubmit.style.right = '100px';
                    divSubmit.id = 'J_Report6673850347411436155';
                    divSubmit.innerHTML = '提交';
                    (function (strAnswerId: string) {
                      divSubmit.onclick = function () {
                        vvuebtn_Click('SubmitQa_Answer', strAnswerId);
                      };
                    })(objvQa_Answer.answerId);
                    divComment_block.appendChild(divSubmit);
                  }
                  // strhtml += `<div class="J_Report comment-report" style="right:50px;" id="J_Report6673850347411436155" onclick=btnUpdateQa_Answer_Click("${objvQa_Answer.answerId}","${objvQa_Answer.topicId}")>修改</div>`;
                  {
                    const divUpdate = GetDiv_Empty('J_Report comment-report');
                    divUpdate.style.right = '50px';
                    divUpdate.id = 'J_Report6673850347411436156';
                    divUpdate.innerHTML = '修改';
                    (function (strAnswerId, strTopicId) {
                      divUpdate.onclick = function () {
                        vvuebtn_Click('UpdateQa_Answer', `${strAnswerId}|${strTopicId}`);
                      };
                    })(objvQa_Answer.answerId, objvQa_Answer.topicId);
                    divComment_block.appendChild(divUpdate);
                  }
                  // strhtml += `<div class="J_Report comment-report" onclick=btnDelAnswer_Click("${objvQa_Answer.answerId}")>删除</div>`;
                  {
                    const divDelete = GetDiv_Empty('J_Report comment-report');
                    divDelete.innerHTML = '删除';
                    (function (strAnswerId: string) {
                      divDelete.onclick = function () {
                        vvuebtn_Click('DelAnswer', strAnswerId);
                      };
                    })(objvQa_Answer.answerId);
                    divComment_block.appendChild(divDelete);
                  }
                  divComment_NotIsSubmit.appendChild(divComment_block);
                  divShowAnswer.appendChild(divComment_NotIsSubmit);
                }
              }
            } else {
              // strhtml += '<div class="comment" >';
              const divComment = GetDiv_Empty('comment');

              // strhtml +=
              //   '<div class="common-avatar J_User" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
              {
                const divComment_Avatar = GetDiv_Empty('common-avatar J_User');
                const img1 = GetImg_Empty('');
                img1.src = strUserPicSrc; //'/img/avatar5.png';
                img1.width = 100;
                img1.height = 100;
                divComment_Avatar.appendChild(img1);
                divComment.appendChild(divComment_Avatar);
              }

              // strhtml += '<div class="comment-block">';
              const divComment_block = GetDiv_Empty('comment-block');
              const p1 = GetP_Empty('comment-user');

              // strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}(推荐回答)</span>`;
              {
                const spn1 = GetSpan_Empty('comment-username J_User');
                spn1.innerHTML = `${objvQa_Answer.userName}(推荐回答)`;
                p1.appendChild(spn1);
              }
              // strhtml += `<span class="comment-time">${objvQa_Answer.updDate}</span>`;
              {
                const spn2 = GetSpan_Empty('comment-time');
                spn2.innerHTML = objvQa_Answer.updDate;
                p1.appendChild(spn2);
              }
              // strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;</p>';
              divComment_block.appendChild(p1);

              // strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
              const divComment_content = GetDiv_Empty('comment-content J_CommentContent');
              divComment_content.innerHTML = objvQa_Answer.answerContent;
              divComment_block.appendChild(divComment_content);

              // strhtml += `<div class="J_Report comment-report" style="right:100px;" id="J_Report6673850347411436155" onclick=btnSubmitQa_Answer_Click("${objvQa_Answer.answerId}")>提交</div>`;
              {
                const divSubmit = GetDiv_Empty('J_Report comment-report');
                divSubmit.style.right = '100px';
                divSubmit.id = 'J_Report6673850347411436155';
                divSubmit.innerHTML = '提交';
                (function (strAnswerId: string) {
                  divSubmit.onclick = function () {
                    vvuebtn_Click('SubmitQa_Answer', strAnswerId);
                  };
                })(objvQa_Answer.answerId);
                divComment_block.appendChild(divSubmit);
              }
              // strhtml += `<div class="J_Report comment-report" onclick=btnDelAnswer_Click("${objvQa_Answer.answerId}")>删除</div>`;
              {
                const divDelete = GetDiv_Empty('J_Report comment-report');
                divDelete.innerHTML = '删除';
                (function (strAnswerId: string) {
                  divDelete.onclick = function () {
                    vvuebtn_Click('DelAnswer', strAnswerId);
                  };
                })(objvQa_Answer.answerId);
                divComment_block.appendChild(divDelete);
              }
              divComment.appendChild(divComment_block);
              divShowAnswer.appendChild(divComment);
            }
          } else {
            //如果不是小组答案，且没有提交的数据，那么只能自己看自己的
            if (strUserId == objvQa_Answer.updUser) {
              // strhtml += '<div class="comment" >';
              const divComment_updUser = GetDiv_Empty('comment');

              // strhtml +=
              //   '<div class="common-avatar J_User" ><img src="@/assets/img/avatar5.png" width="100%" height="100%"></div>';
              {
                const divComment_Avatar = GetDiv_Empty('common-avatar J_User');
                const img1 = GetImg_Empty('');
                img1.src = strUserPicSrc; //'/img/avatar5.png';
                img1.width = 100;
                img1.height = 100;
                divComment_Avatar.appendChild(img1);
                divComment_updUser.appendChild(divComment_Avatar);
              }
              // strhtml += '<div class="comment-block">';
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
                    if (arrvqa_AnswerObjLst1[i].isRecommend == true) {
                      // strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:#800080;font-weight:bold;">小组推荐回答(${objvRTUserRela.topicName})</span>`;
                      spn1.style.color = '#800080';
                      spn1.style.fontWeight = 'bold';
                      spn1.innerHTML = `小组推荐回答(${objvRTUserRela.topicName})`;
                    } else {
                      // strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:${objvRTUserRela.colorCode};">${objvQa_Answer.userName}(${objvRTUserRela.topicName})</span>`;
                      spn1.style.color = objvRTUserRela.colorCode;
                      spn1.innerHTML = `${objvQa_Answer.userName}(${objvRTUserRela.topicName})`;
                    }
                    p1.appendChild(spn1);
                  } else {
                    // strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
                    spn1.innerHTML = objvQa_Answer.userName;
                    p1.appendChild(spn1);
                  }
                } else {
                  // strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
                  spn1.innerHTML = objvQa_Answer.userName;
                  p1.appendChild(spn1);
                }
              } else {
                // strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvQa_Answer.userName}</span>`;
                spn1.innerHTML = objvQa_Answer.userName;
                p1.appendChild(spn1);
              }

              // strhtml += `<span class="comment-time">${objvQa_Answer.updDate}</span>`;
              {
                const spn2 = GetSpan_Empty('comment-time');
                spn2.innerHTML = objvQa_Answer.updDate;
                p1.appendChild(spn2);
              }
              // strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;</p>';
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
                    // strhtml += `<div class="comment-content J_CommentContent"  style="color:${objvRTUserRela.colorCode};">${objvQa_Answer.answerContent}</div>`;
                    divComment_content.style.color = objvRTUserRela.colorCode;
                  } else {
                    // strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
                  }
                } else {
                  // strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
                }
              } else {
                // strhtml += `<div class="comment-content J_CommentContent">${objvQa_Answer.answerContent}</div>`;
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
                            // strhtml += `<div class="J_Report comment-report" style="right:150px;" id="J_Report6673850347411436155" onclick=btnUpdateAnswer_Click("${objvQa_Answer.answerId}","${objvQa_Answer.topicId}")>小组推荐</div>`;
                            const divComment_report = GetDiv_Empty('J_Report comment-report');
                            divComment_report.innerHTML = '小组推荐';
                            divComment_report.id = 'J_Report6673850347411436155';
                            (function (strAnswerId, strTopicId) {
                              divComment_report.onclick = function () {
                                vvuebtn_Click('UpdateAnswer', `${strAnswerId}|${strTopicId}`);
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

              // strhtml += `<div class="J_Report comment-report" style="right:100px;" id="J_Report6673850347411436155" onclick=btnSubmitQa_Answer_Click("${objvQa_Answer.answerId}")>提交</div>`;
              {
                const divSubmit = GetDiv_Empty('J_Report comment-report');
                divSubmit.style.right = '100px';
                divSubmit.id = 'J_Report6673850347411436155';
                divSubmit.innerHTML = '提交';
                (function (strAnswerId: string) {
                  divSubmit.onclick = function () {
                    vvuebtn_Click('SubmitQa_Answer', strAnswerId);
                  };
                })(objvQa_Answer.answerId);
                divComment_block.appendChild(divSubmit);
              }
              // strhtml += `<div class="J_Report comment-report" style="right:50px;" id="J_Report6673850347411436155" onclick=btnUpdateQa_Answer_Click("${objvQa_Answer.answerId}","${objvQa_Answer.topicId}")>修改</div>`;
              {
                const divUpdate = GetDiv_Empty('J_Report comment-report');
                divUpdate.style.right = '50px';
                divUpdate.id = 'J_Report6673850347411436156';
                divUpdate.innerHTML = '修改';
                (function (strAnswerId, strTopicId) {
                  divUpdate.onclick = function () {
                    vvuebtn_Click('UpdateQa_Answer', `${strAnswerId}|${strTopicId}`);
                  };
                })(objvQa_Answer.answerId, objvQa_Answer.topicId);
                divComment_block.appendChild(divUpdate);
              }
              // strhtml += `<div class="J_Report comment-report" onclick=btnDelAnswer_Click("${objvQa_Answer.answerId}")>删除</div>`;
              {
                const divDelete = GetDiv_Empty('J_Report comment-report');
                // divDelete.style.right = '100px';
                // divDelete.id = 'J_Report6673850347411436155';
                divDelete.innerHTML = '删除';
                (function (strAnswerId: string) {
                  divDelete.onclick = function () {
                    vvuebtn_Click('DelAnswer', strAnswerId);
                  };
                })(objvQa_Answer.answerId);
                divComment_block.appendChild(divDelete);
              }
              divComment_updUser.appendChild(divComment_block);
              divShowAnswer.appendChild(divComment_updUser);
            }
          }

          // strhtml += '</div></div>';
        }
      }

      //$("#divShowAnswer").append(strhtml);
      // const divShowAnswer = GetDivObjInDivObj(divName, 'divShowAnswer');
      // divShowAnswer.innerHTML = strhtml;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取数据不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
    上移
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
    */
  public static async btnUpMove_Click(strQuestionsId: string, intOrderNum: number) {
    const objPage = new CommQuestionAnswer();

    if (intOrderNum == 0) {
      await objPage.btnReOrder_Click();
    }
    //  if (this.PreCheck4Order() == false) return;
    const strQuestionsTypeId = '03';
    const strPaperId: string = clsPrivateSessionStorage.paperId;
    const arrKeyIds = [strQuestionsId]; //
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
      const strMsg = `上1移记录出错。错误:${e}.(In btnUpMove_Click)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    // await objPage.Showdiv_Questions();

    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    //arrKeyIds.forEach((e) => clsCommonFunc4Web.SetCkechedItem4KeyId(strListDiv, e));
  }

  /*
      下移
       (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
      */
  public static async btnDownMove_Click(strQuestionsId: string, intOrderNum: number) {
    const objPage = new CommQuestionAnswer();
    const divName = objPage.getDivName(enumDivType.LayOut_01);
    if (intOrderNum == 0) {
      await objPage.btnReOrder_Click();
    }

    //  if (this.PreCheck4Order() == false) return;
    const strQuestionsTypeId = '03';
    const strPaperId: string = clsPrivateSessionStorage.paperId;
    const arrKeyIds = GetInputValueInDivObj(divName, 'hidKeyId') as any;
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
        const strMsg = `下移记录出错。错误:${e}.(In btnDownMove_Click)`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      // await objPage.Showdiv_Questions();
    }

    //await this.BindGv_vPaperSubViewpoint();
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    //arrKeyIds.forEach((e) => clsCommonFunc4Web.SetCkechedItem4KeyId(strListDiv, e));
  }
  //查看评论，调用父界面查看方法strKeyId;答案Id
  public async SysComment(strAnswerId: string, strUserId: string, strQuestionsId: string) {
    try {
      console.log(strAnswerId, strUserId, strQuestionsId);
      await CommQuestionAnswer.SysCommentRef.value.showDialog(); // window.parent.SysComment(strAnswerId, strUserId, strQuestionsId);
      // CommQuestionAnswer.SysCommentRef.value.$refs.refAnswerId.value = strAnswerId;
      // CommQuestionAnswer.SysCommentRef.value.$refs.refUser.value = strUserId;
      // CommQuestionAnswer.SysCommentRef.value.$refs.refPubParentId.value = strQuestionsId;
      setTimeout(() => {
        console.log('调用添加评价对话框的启动函数!');
        const bolIsSuccess = CommQuestionAnswer.SysCommentRef.value.window_onload();
        if (bolIsSuccess == false) {
          console.error('调用添加评价时，TableKey 为空请检查！');
          alert('调用添加评价时，TableKey 为空请检查！');
          CommQuestionAnswer.SysCommentRef.value.hideDialog();
        }
      }, 1000);
    } catch (e: any) {
      window.opener.location = '父页面地址';
      window.opener = null;

      window.close();
    }
  }

  public async SearchParentV(strAnswerId: string) {
    try {
      console.log(strAnswerId);
      await CommQuestionAnswer.HistoricalVersionRef.value.showDialog(); // window.parent.SysComment(strAnswerId, strUserId, strQuestionsId);
      // CommQuestionAnswer.SysCommentRef.value.$refs.refAnswerId.value = strAnswerId;
      // CommQuestionAnswer.SysCommentRef.value.$refs.refUser.value = strUserId;
      // CommQuestionAnswer.SysCommentRef.value.$refs.refPubParentId.value = strQuestionsId;
      setTimeout(() => {
        console.log('调用添加评价对话框的启动函数!');
        CommQuestionAnswer.HistoricalVersionRef.value.window_onload();
      }, 1000);
    } catch (e: any) {
      window.opener.location = '父页面地址';
      window.opener = null;

      window.close();
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
        divName = CommQuestionAnswer.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = CommQuestionAnswer.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = CommQuestionAnswer.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = CommQuestionAnswer.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = CommQuestionAnswer.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = CommQuestionAnswer.divPager;
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
  /*
重序
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
*/
  public async btnReOrder_Click() {
    // if (this.PreCheck4Order() == false) return;
    const strQuestionsTypeId = '03';
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
      const strMsg = `重序出错。错误:${e}.(In btnReOrder_Click)`;
      alert(strMsg);
      return;
    }
    // await this.Showdiv_Questions();
  }
}
