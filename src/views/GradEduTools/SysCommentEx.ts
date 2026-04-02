import { Ref } from 'vue';
import $ from 'jquery';
import { Public_Concept } from '../GradEduPublicPage/Public_Concept';
import { Public_SysSkill } from '../GradEduPublicPage/Public_SysSkill';
import { Public_SysSocialRelations } from '../GradEduPublicPage/Public_SysSocialRelations';
import { Public_TopicObjective } from '../GradEduPublicPage/Public_TopicObjective';
import { Public_Viewpoint } from '../GradEduPublicPage/Public_Viewpoint';
import { SysCommentEx_DelRecordAsync } from '@/ts/L3ForWApiExShare/GraduateEdu/clsSysCommentExWApi';
import { clsPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsPaperReadWriteEN';
import { clsPaperSubAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachmentEN';
import { clsSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsSysCommentEN';
import { clsvSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsvSysCommentEN';
import { clsvqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsvqa_AnswerEN';
import { PaperReadWrite_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperReadWriteWApi';
import { PaperSubAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubAttachmentWApi';
import { vPaperReadWrite_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperReadWriteWApi';
import { vPaperSubViewpoint_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { SysComment_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTools/clsSysCommentWApi';
import { vSysComment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsvSysCommentWApi';
import { vgs_PaperReport_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvgs_PaperReportWApi';
import { vgs_ResearchResult_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvgs_ResearchResultWApi';
import { vqa_Answer_GetFirstObjAsync } from '@/ts/L3ForWApi/InteractManage/clsvqa_AnswerWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  GetInputValueInDivObj,
  HideDivInDivObj,
  GetDivObjInDivObj,
  getDivObjLstInDivObj,
  getSpanObjLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { IShowList } from '@/ts/PubFun/IShowList';
import { SysComment_EditEx } from '@/views/GradEduTools/SysComment_EditEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { message } from '@/utils/myMessage';
import { enumSysCommentType } from '@/ts/L0Entity/RT_Params/clsSysCommentTypeEN';
import { Public_UserRela } from '@/views/GradEduPublicPage/Public_UserRela';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
import { userStore } from '@/store/modulesShare/user';
import { paperSubAttachmentStore } from '@/store/modules/paperSubAttachment';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

declare let window: any;

/* ResearchTopic_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class SysCommentEx implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: string) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static divLayout: HTMLDivElement; //界面布局的层对象
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象

  public static parentId = '';
  public static EditObj: any;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
  }
  async BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    // const objPage = new TeaTest_QA();
    let strMsg = '';

    switch (strType) {
      case 'vPaperSubViewpoint':
        alert('该类没有绑定该函数：[this.BindGv_vPaperSubViewpoint_Cache]！');
        //this.BindGv_vPaperSubViewpointCache();;
        break;

      case clsSysCommentEN._CurrTabName:
        await this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
        await this.SynStatistics();
        RefreshWindow();
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: SysCommentEx = new SysCommentEx();
    const objLayOut = objPage.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    console.log(strCommandName, strKeyId);

    let objPageEdit;
    console.log(objPage);

    const strCommentTypeId = SysCommentEx.GetPropValue('commentTypeId');
    switch (strCommandName) {
      case 'AddAppraise':
        SysComment_EditEx.tableKey = SysCommentEx.GetPropValue('tableKey');
        SysComment_EditEx.commentTypeId = strCommentTypeId;
        SysComment_EditEx.user = GetInputValueInDivObj(objLayOut, 'hidUser');
        SysComment_EditEx.pubParentId = GetInputValueInDivObj(objLayOut, 'hidPubParentId');
        SysComment_EditEx.scoreType = GetInputValueInDivObj(objLayOut, 'hidScoreType');

        objPageEdit = new SysComment_EditEx('SysComment_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        SysCommentEx.EditObj.btnSysComment_Edit_Click(strCommandName, strKeyId);
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      case 'DeleteComment': //重序记录
        objPage.btnDeleteComment_Click(strKeyId);
        break;
      case 'ReplyComment': //重序记录
        objPage.btnReplyComment_Click(strKeyId);
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'SysScoreSummaryCRUDExEx.btn_Click');

        break;
    }
  }

  public async PageLoad(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //显示当前打分类型
        await this.Showdiv_ScoreType();
        //显示当前评论的观点
        await this.Showdiv_Viewpoint();
        //评论列表
        await this.btnShowAppraise_Click(strCommentOrder);
        SetFontSize();
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

  //显示当前打分类型
  public async Showdiv_ScoreType() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strCommentTypeId = GetInputValueInDivObj(divName, 'hidScoreType');
    let strhtml = '';
    switch (strCommentTypeId) {
      case '1':
        strhtml += '<div id="pingfen2"></div>';
        break;
      case '2':
        strhtml += '<div id="pingfen2"></div>';
        break;
      case '3':
        strhtml +=
          '<input id="txtScoreNum" name="txtScoreNum" placeholder="请输入1~100的分值" class="form-control" style="width:150px;" />';
        break;
      default:
        strhtml += '<div id="pingfen2"></div>';
        break;
    }
    //拼接；
    $('#scoreType').html(strhtml);
  }
  //显示当前评论的观点
  public async Showdiv_Viewpoint() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strCommentTypeId = this.commentTypeId;
    switch (strCommentTypeId) {
      case enumSysCommentType.PaperSubViewpoint_02:
        await this.BindGv_vPaperSubViewpoint();
        break;
      case enumSysCommentType.Viewpoint_03:
        await this.Bind_vViewpoint();
        break;
      case enumSysCommentType.Viewpoint_04:
        await this.Bind_vViewpoint();
        break;
      case enumSysCommentType.Concept_05:
        await this.Bind_vConcept();
        break;
      case enumSysCommentType.TopicObjective_06:
        await this.Bind_vTopicObjective();
        break;
      case enumSysCommentType.TopicObjective_07:
        await this.Bind_vTopicObjective();
        break;
      case enumSysCommentType.RTUserRela_14:
        await this.Bind_vRTUserRela();
        break;
      case enumSysCommentType.SysSkill_09:
        await this.Bind_vSysSkill();
        break;
      case enumSysCommentType.SysSocialRelations_10:
        await this.Bind_vSysSocialRelations();
        break;
      case enumSysCommentType.qa_Answer_11:
        await this.BindGv_vqa_Answer();
        break;
      case enumSysCommentType.gs_PaperReport_12:
        await this.BindGv_vgs_PaperReport();
        break;
      case enumSysCommentType.gs_ResearchResult_13:
        await this.BindGv_vgs_ResearchResult();
        break;
      //case "22":
      //    const gvResult22 = await this.Bind_vViewpoint();
      //    break;
      //case "23":
      //    const gvResult23 = await this.Bind_vViewpoint();
      //    break;
      //case "24":
      //    const gvResult24 = await this.Bind_vConcept();
      //    break;
      //case "25":
      //    const gvResult25 = await this.Bind_vTopicObjective();
      //    break;
      //case "26":
      //    const gvResult26 = await this.Bind_vTopicObjective();
      //    break;
      //case "27":
      //    const gvResult27 = await this.Bind_vSysSkill();
      //    break;
      //case "28":
      //    const gvResult28 = await this.Bind_vSysSocialRelations();
      //    break;
      default:
        break;
    }
  }
  //绑定论文子观点数据
  public async BindGv_vPaperSubViewpoint() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strWhereCond = `1=1 and subViewpointId='${SysCommentEx.GetPropValue('tableKey')}'`;

    // let objvPaperSubViewpoint: clsvPaperSubViewpointEN;

    try {
      const objvPaperSubViewpoint = await vPaperSubViewpoint_GetFirstObjAsync(strWhereCond);

      if (objvPaperSubViewpoint != null) {
        let strhtml = '';
        strhtml += `<div class="info" id="infoSubViewpoint"><div class="title btn-2"><a href="javascript:void(0)" title="${objvPaperSubViewpoint.subViewpointTypeName}">${objvPaperSubViewpoint.subViewpointTypeName}</a></div>`;
        //strhtml += '<div class="info" id="infoViewpoint">';
        strhtml += '<ul class="artlist">';
        if (objvPaperSubViewpoint.attitudesName == null)
          objvPaperSubViewpoint.attitudesName = '未知';
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${objvPaperSubViewpoint.attitudesName}]：</span><span class="abstract-text">${objvPaperSubViewpoint.subViewpointContent}</span></li>`;

        if (IsNullOrEmpty(objvPaperSubViewpoint.sectionName) == false) {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[论文节]：</span><span class="abstract-text">${objvPaperSubViewpoint.sectionName}</span></li>`;
        }

        const arrPaperSubAttachments = await paperSubAttachmentStore.getObjLst(
          objvPaperSubViewpoint.subViewpointId,
        );
        if (arrPaperSubAttachments != null && arrPaperSubAttachments.length > 0) {
          //strIdCurrEduclsstrAddressAndPort = "https://www.sh-tz.com/GraduateStudyWebApp/";

          for (let y = 0; y < arrPaperSubAttachments.length; y++) {
            const strAddressAndPortfull = GetAddressAndPort() + arrPaperSubAttachments[y].filePath;
            strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img data-action="zoom" src="${strAddressAndPortfull}" style="max-width:500px; margin-left: 10px;" alt="" id="txtImgPath${arrPaperSubAttachments[y].paperSubAttachmentId}"/>`;
          }
        }

        if (IsNullOrEmpty(objvPaperSubViewpoint.explainContent) == false) {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${objvPaperSubViewpoint.explainTypeName}]：</span><span class="abstract-text">${objvPaperSubViewpoint.explainContent}</span></li>`;
        }

        //if (objvPaperSubViewpoint.literatureSourcesId != "") {
        //    strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[引用文献]：</span><span class="abstract-text">' + objvPaperSubViewpoint.PaperNameEx + '(作者：' + objvPaperSubViewpoint.AuthorEx + ')</span></li>';

        //}
        const strUserName = await vQxUsersSimStore.getUserName(objvPaperSubViewpoint.updUser);
        if (strUserName != '') {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
        }

        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${objvPaperSubViewpoint.updDate}`;
        strhtml += '</li>';

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

        strhtml += '</ul></div>';

        //拼接；
        $('#div_Viewpoint').html(strhtml);
        console.log('完成BindGv_vPaperSubViewpoint!');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //--------------------------------------- 论文项目
  //绑定观点数据
  public async Bind_vViewpoint() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strViewpointId = SysCommentEx.GetPropValue('tableKey');
    const strHtml = await Public_Viewpoint.Bind_vViewpoint(strViewpointId);
    $('#div_Viewpoint').html(strHtml);
  }

  //绑定相关概念
  public async Bind_vConcept() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strConceptId = SysCommentEx.GetPropValue('tableKey');
    const strHtml = await Public_Concept.Bind_vConcept(strConceptId);
    $('#div_Viewpoint').html(strHtml);
  }
  public async Bind_vRTUserRela() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strMid = SysCommentEx.GetPropValue('tableKey');
    const lngMid = Number(strMid);
    const strHtml = await Public_UserRela.Bind_vRTUserRela(lngMid);
    $('#div_Viewpoint').html(strHtml);
  }

  //客观事实、客观数据
  public async Bind_vTopicObjective() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strTopicObjectiveId = SysCommentEx.GetPropValue('tableKey');
    const strHtml = await Public_TopicObjective.Bind_vTopicObjective(strTopicObjectiveId);
    $('#div_Viewpoint').html(strHtml);
  }

  //技能
  public async Bind_vSysSkill() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strSkillId = SysCommentEx.GetPropValue('tableKey');
    const strHtml = await Public_SysSkill.Bind_vSysSkill(strSkillId);
    $('#div_Viewpoint').html(strHtml);
  }

  //社会关系
  public async Bind_vSysSocialRelations() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strSocialId = SysCommentEx.GetPropValue('tableKey');
    const strHtml = await Public_SysSocialRelations.Bind_vSysSocialRelations(strSocialId);
    $('#div_Viewpoint').html(strHtml);
  }

  //绑定论文子观点数据
  public async BindGv_vqa_Answer() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strWhereCond = `1=1 and answerId='${SysCommentEx.GetPropValue('tableKey')}'`;
    // const strWhereCond2 = '1=1';
    let objvqa_Answer: clsvqa_AnswerEN;

    try {
      await vqa_Answer_GetFirstObjAsync(strWhereCond).then((jsonData) => {
        objvqa_Answer = <clsvqa_AnswerEN>jsonData;

        if (objvqa_Answer != null) {
          let strhtml = '';
          strhtml += `<div class="info" id="infovqa_Answer"><div class="title btn-2"><a href="javascript:void(0)" title="${objvqa_Answer.answerContent}">${objvqa_Answer.answerContent}</a></div>`;
          //strhtml += '<div class="info" id="infoViewpoint">';
          strhtml += '<ul class="artlist">';

          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${objvqa_Answer.userName}`;

          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${objvqa_Answer.updDate}`;
          strhtml += '</li>';

          strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

          strhtml += '</ul></div>';

          //拼接；
          $('#div_Viewpoint').html(strhtml);
          console.log('完成BindGv_vqa_Answer!');
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //绑定论文主题汇报
  public async BindGv_vgs_PaperReport() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strWhereCond = `1=1 and reportId='${SysCommentEx.GetPropValue('tableKey')}'`;
    // const strWhereCond2 = '1=1';

    try {
      const objvgs_PaperReport = await vgs_PaperReport_GetFirstObjAsync(strWhereCond);

      if (objvgs_PaperReport != null) {
        let strhtml = '';
        strhtml += `<div class="info" id="infovgs_PaperReport"><div class="title btn-2"><a href="javascript:void(0)" title="汇报内容">${objvgs_PaperReport.reportContent}</a></div>`;
        //strhtml += '<div class="info" id="infoViewpoint">';
        strhtml += '<ul class="artlist">';
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color2">[汇报人员]：</span><span class="abstract-text">${objvgs_PaperReport.reportUser}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[汇报日期]：</span><span class="abstract-text">${objvgs_PaperReport.reportDate}</span></li>`;
        const strUserName = await vQxUsersSimStore.getUserName(objvgs_PaperReport.updUser);
        if (strUserName != '') {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑用户]：</span><span class="abstract-text">${strUserName}</span></li>`;
        }
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span><span class="abstract-text">${objvgs_PaperReport.updDate}</span></li>`;
        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

        strhtml += '</ul></div>';

        //拼接；
        $('#div_Viewpoint').html(strhtml);
        console.log('完成BindGv_vgs_PaperReport!');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //绑定论文主题汇报
  public async BindGv_vgs_ResearchResult() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strWhereCond = `1=1 and resultId='${SysCommentEx.GetPropValue('tableKey')}'`;

    try {
      const objvgs_ResearchResult = await vgs_ResearchResult_GetFirstObjAsync(strWhereCond);

      if (objvgs_ResearchResult != null) {
        let strhtml = '';
        strhtml += '<div class="info" id="infovgs_ResearchResult">';

        strhtml += '<ul class="artlist">';
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[成果名称]：</span><span class="abstract-text">${objvgs_ResearchResult.resultName}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[成果说明]：</span><span class="abstract-text">${objvgs_ResearchResult.resultContent}</span></li>`;
        //strhtml += '<div class="info" id="infovgs_ResearchResult"><div class="title btn-2"><a href="javascript:void(0)" title="汇报内容">' + objvgs_ResearchResult.reportContent + '</a></div>';
        //strhtml += '<div class="info" id="infoViewpoint">';
        //strhtml += '<ul class="artlist">';

        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color2">[作者]：</span><span class="abstract-text">${objvgs_ResearchResult.author}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[分工]：</span><span class="abstract-text">${objvgs_ResearchResult.division}</span></li>`;
        const strUserName = await vQxUsersSimStore.getUserName(objvgs_ResearchResult.updUser);
        if (strUserName != '') {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑用户]：</span><span class="abstract-text">${strUserName}</span></li>`;
        }
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span><span class="abstract-text">${objvgs_ResearchResult.updDate}</span></li>`;
        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

        strhtml += '</ul></div>';

        //拼接；
        $('#div_Viewpoint').html(strhtml);
        console.log('完成BindGv_vgs_ResearchResult!');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  ////--------------------------------------中学项目
  ////绑定观点数据
  //public async Bind_ZxViewpoint() {
  //    strViewpointId = $("#hidTableKey").val()
  //    strIdCurrEduclsstrHtml = await Public_zx_Viewpoint.Bind_zx_Viewpoint(strViewpointId)
  //    $("#div_Viewpoint").html(strHtml);
  //}

  ////绑定相关概念
  //public async Bind_ZxConcept() {
  //    strConceptId = $("#hidTableKey").val()
  //    strIdCurrEduclsstrHtml = await Public_zx_Concept.Bind_zx_Concept(strConceptId)
  //    $("#div_Viewpoint").html(strHtml);
  //}

  ////客观事实、客观数据
  //public async Bind_ZxTopicObjective() {
  //    strTopicObjectiveId = $("#hidTableKey").val()
  //    strIdCurrEduclsstrHtml = await Public_zx_TopicObjective.Bind_zx_TopicObjective(strTopicObjectiveId)
  //    $("#div_Viewpoint").html(strHtml);
  //}

  ////技能
  //public async Bind_ZxSysSkill() {
  //    strSkillId = $("#hidTableKey").val()
  //    strIdCurrEduclsstrHtml = await Public_zx_SysSkill.Bind_zx_Skill(strSkillId)
  //    $("#div_Viewpoint").html(strHtml);

  //}

  ////社会关系
  //public async Bind_ZxSysSocialRelations() {
  //    strSocialId = $("#hidTableKey").val()
  //    strIdCurrEduclsstrHtml = await Public_zx_SocialRelations.Bind_zx_SocialRelations(strSocialId)
  //    $("#div_Viewpoint").html(strHtml);
  //}

  //显示评论
  public async btnShowAppraise_Click(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    let arrvSysCommentObjLst1: Array<clsvSysCommentEN> = [];
    let arrvSysCommentObjLst2: Array<clsvSysCommentEN> = [];
    let arrvSysCommentObjLst3: Array<clsvSysCommentEN> = [];
    let strWhereCond1 = '';
    let strWhereCond2 = '';

    const strUserId = userStore.getUserId;

    const strCommentTypeId = this.commentTypeId;

    const strTableKey = SysCommentEx.GetPropValue('tableKey');

    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部评论
        strWhereCond1 = ` parentId='root' and  commentTypeId='${strCommentTypeId}' and tableKey='${strTableKey}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  commentTypeId='${strCommentTypeId}' and tableKey='${strTableKey}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人评论
        strWhereCond1 = ` parentId='root' and  commentTypeId='${strCommentTypeId}' and tableKey='${strTableKey}' and updUser='${strUserId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  commentTypeId='${strCommentTypeId}' and tableKey='${strTableKey}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新评论
        strWhereCond1 = ` parentId='root' and  commentTypeId='${strCommentTypeId}' and tableKey='${strTableKey}' order by updDate Desc`;
        strWhereCond2 = ` parentId<>'root' and  commentTypeId='${strCommentTypeId}' and tableKey='${strTableKey}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    //strWhereCond1 = " parentId='root' and  commentTypeId='" + $("#hid1CommentTypeId").val() + "' and tableKey='" + $("#hidTableKey").val() + "' order by updDate Asc";
    //strWhereCond2 = " parentId<>'root' and  commentTypeId='" + $("#hid1CommentTypeId").val() + "' and tableKey='" + $("#hidTableKey").val() + "' order by updDate Asc";

    try {
      arrvSysCommentObjLst1 = await vSysComment_GetObjLstAsync(strWhereCond1);
      arrvSysCommentObjLst2 = await vSysComment_GetObjLstAsync(strWhereCond2);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment_SC = GetDivObjInDivObj(divName, 'J_ShortComment_SC');
      J_ShortComment_SC.innerHTML = '';

      for (let i = 0; i < arrvSysCommentObjLst1.length; i++) {
        const objvSysComment = arrvSysCommentObjLst1[i];
        varNum++;
        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';
        const strUserName = await vQxUsersSimStore.getUserName(objvSysComment.updUser);

        if (GetInputValueInDivObj(divName, 'hidUser') == objvSysComment.updUser) {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842 style="color:red;" > 楼主：${strUserName}</span>`;
        } else {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842">${strUserName}</span>`;
        }
        strhtml += `<span class="comment-time">${objvSysComment.updDate}</span>`;
        strhtml += `  <span class="comment-username J_User">${varNum}楼</span></p>`;
        //strhtml += '<div class="comment-content J_CommentContent">评分：' + arrvPaperAppraiseObjLst[i].AppraiseScore + '</div>';
        strhtml += `<div class="comment-content J_CommentContent">${objvSysComment.comment}</div>`;

        //回复区

        arrvSysCommentObjLst3 = arrvSysCommentObjLst2.filter(
          (x) => x.parentId == objvSysComment.commentId,
        );
        if (arrvSysCommentObjLst3.length > 0) {
          strhtml += '<div class="reply J_ReplyBlock">';
          for (let j = 0; j < arrvSysCommentObjLst3.length; j++) {
            strhtml += '<div class="reply-block">';

            strhtml += '<div class="reply-content">';
            const strUserName = await vQxUsersSimStore.getUserName(
              arrvSysCommentObjLst3[j].updUser,
            );

            if (GetInputValueInDivObj(divName, 'hidUser') == arrvSysCommentObjLst3[j].updUser) {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" data-userid="28805328" style="color:red;"> 楼主(${strUserName})</b>：</span>`;
            } else {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" data-userid="28805328">${strUserName}</b>：</span>`;
            }
            strhtml += `${arrvSysCommentObjLst3[j].comment}</div>`;

            strhtml += '<div class="reply-operate reply-operate--hot">';
            if (arrvSysCommentObjLst3[j].scoreType == '2') {
              strhtml += `<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分:<i>${arrvSysCommentObjLst3[j].score}</i></span>`;
            } else {
              strhtml += `<span class="J_Vote reply-operate-item reply-up">学生评分:<i>${arrvSysCommentObjLst3[j].score}</i></span>`;
            }
            strhtml += `<i class="reply-dot">·</i><span>${arrvSysCommentObjLst3[j].updDate}</span>`;
            strhtml += '</div>';

            strhtml += '</div>';
          }
          strhtml += '</div>';
        }
        ///评论区
        strhtml += '<div class="comment-operate J_CommentOperate clearfix">';
        if (objvSysComment.scoreType == '2') {
          strhtml += `<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分:<i>${objvSysComment.score}</i></span>`;
        } else {
          strhtml += `<span class="J_Vote reply-operate-item reply-up">学生评分:<i>${objvSysComment.score}</i></span>`;
        }

        strhtml += '<span class="J_Vote comment-operate-item comment-operate-up">赞<i>1</i></span>';
        // onclick=btnReplyComment_Click("${objvSysComment.commentId}"
        strhtml += `<span class="J_Reply comment-operate-item comment-operate-reply" id="spnReplyComment" keyId="${objvSysComment.commentId}" )>回复</span>`;
        strhtml += '</div>';

        if (strUserId == objvSysComment.updUser) {
          // onclick=btnDeleteComment_Click("${objvSysComment.commentId}"
          strhtml += `<div class="J_Report comment-report" id="divDeleteComment" keyId="${objvSysComment.commentId}" )>删除</div>`;
        }
        strhtml += '</div></div>';
      }

      J_ShortComment_SC.innerHTML = strhtml;
      this.SetEventForButtonEvent();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取数据不成功,${e}.`;
      alert(strMsg);
    }
  }

  //通过得到的值判断，得到分数
  public GetScorebyText(sValue: string) {
    let Score = '';
    if (sValue == '1') {
      Score = '2';
    } else if (sValue == '2') {
      Score = '4';
    } else if (sValue == '一3') {
      Score = '6';
    } else if (sValue == '4') {
      Score = '8';
    } else {
      Score = '10';
    }
    return Score;
  }

  /* 
    删除评论内容
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   */
  public async btnDeleteComment_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的记录！`);
        return '';
      }
      await this.DelRecord(strKeyId);
      await this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
      await this.SynStatistics();
      RefreshWindow();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  public async btnReplyComment_Click(strKeyId: string) {
    console.log(strKeyId);
  }
  /* 
    根据关键字删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   */
  public async DelRecord(strCommentId: string) {
    try {
      const returnInt: number = await SysCommentEx_DelRecordAsync(strCommentId);
      if (returnInt > 0) {
        message.success('删除成功!');
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
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

  //添加删除评论的时候统计其他表的部分数据
  public async SynStatistics() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    const strThisFuncName = this.SynStatistics.name;

    const strCommentTypeId = this.commentTypeId;
    const strRoleId = userStore.getRoleId;
    //论文子观点
    if (strCommentTypeId == '02') {
      //教师或者管理员权限
      if (strRoleId != '00620003') {
        const strPaperRWId = GetInputValueInDivObj(divName, 'hidPubParentId');

        //添加记录的同时并记录论文读写的教师评价数
        let strWhereCond = `   commentTypeId='02' and scoreType='2'`;
        if (IsNullOrEmpty(strPaperRWId) == false) {
          strWhereCond += ` and pubParentId='${strPaperRWId}'`;
        }
        const intTeaCount = await SysComment_GetRecCountByCondAsync(strWhereCond);

        const objPaperReadWriteEN: clsPaperReadWriteEN = new clsPaperReadWriteEN();
        objPaperReadWriteEN.SetPaperRWId(strPaperRWId);
        objPaperReadWriteEN.SetTeaCount(intTeaCount);
        objPaperReadWriteEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
        objPaperReadWriteEN.sfUpdFldSetStr = objPaperReadWriteEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objPaperReadWriteEN.paperRWId == '' || objPaperReadWriteEN.paperRWId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        const responseText = await PaperReadWrite_UpdateRecordAsync(objPaperReadWriteEN);
        const returnBool = !!responseText;
        if (returnBool == true) {
          //刷新缓存
          vPaperReadWrite_ReFreshThisCache(clsPubLocalStorage.idCurrEduCls);
          console.log('添加教师评价数量成功！');
        } else {
          console.log('添加教师评价数量失败！');
        }
        //添加记录的同时并记录论文读写的教师评价数
      }
    }
  }
  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
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
        divName = SysCommentEx.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = SysCommentEx.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = SysCommentEx.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = SysCommentEx.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = SysCommentEx.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = SysCommentEx.divPager;
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
  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_qa_Answer(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_qa_Answer.name;
    if (SysCommentEx.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (SysCommentEx.EditObj == null) {
        const strMsg = Format(
          '当前评论区的EditRef为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await SysCommentEx.EditObj.showDialog();
    }
    SysCommentEx.divEdit = SysCommentEx.EditObj.$refs.refDivEdit;
    if (SysCommentEx.divEdit == null) {
      if (SysCommentEx.times4TestShowDialog < 2) {
        SysCommentEx.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_qa_Answer(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      SysCommentEx.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      // this.btnSubmitqa_Answer = '确认添加';
      // this.btnCancelqa_Answer = '取消添加';
    } else if (strOp === 'Update') {
      // this.btnSubmitqa_Answer = '确认修改';
      // this.btnCancelqa_Answer = '取消修改';
    }
    return true;
  }
  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_qa_Answer() {
    if (SysCommentEx.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      SysCommentEx.EditObj.hideDialog();
    }
  }
  public SetEventForButtonEvent() {
    {
      const arrSpnReplyComment = getSpanObjLstInDivObj(SysCommentEx.divLayout, 'spnReplyComment');
      for (const spnReplyComment of arrSpnReplyComment) {
        if (spnReplyComment != null) {
          const strKeyId = spnReplyComment.getAttribute('keyid');
          if (strKeyId != null) {
            (function (strKeyId: string) {
              spnReplyComment.onclick = function () {
                SysCommentEx.vuebtn_Click('ReplyComment', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }

    {
      const arrDivDeleteComment = getDivObjLstInDivObj(SysCommentEx.divLayout, 'divDeleteComment');
      for (const divDeleteComment of arrDivDeleteComment) {
        if (divDeleteComment != null) {
          const strKeyId = divDeleteComment.getAttribute('keyid');
          if (strKeyId != null) {
            (function (strKeyId: string) {
              divDeleteComment.onclick = function () {
                SysCommentEx.vuebtn_Click('DeleteComment', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }
  }
  public get commentTypeId(): string {
    const strCommentTypeId = SysCommentEx.GetPropValue('commentTypeId');
    return strCommentTypeId;
  }
}

function SetFontSize() {
  const ClassArtlist = document.getElementsByClassName('artlist');
  if (ClassArtlist == null) return;
  const varFontSize = document.getElementById('hidFontSize') as HTMLInputElement;
  if (varFontSize == null) return;
  if (varFontSize.value != '') {
    let i;
    for (i = 0; i < ClassArtlist.length; i++) {
      (ClassArtlist[i] as any).style.fontSize = `${varFontSize.value}px`;
    }
  }
}

//添加评论以后刷新父页面数据
function RefreshWindow() {
  try {
    const strCommentTypeId = SysCommentEx.GetPropValue('commentTypeId');
    switch (strCommentTypeId) {
      case '02':
        //   window.parent.Refresh_vPaperSubViewpoint();
        break;
      case '03':
        //   window.parent.Refresh_AllTopicRela();
        break;
      case '04':
        //   window.parent.Refresh_AllTopicRela();
        break;
      case '05':
        //   window.parent.Refresh_AllTopicRela();
        break;
      case '06':
        //   window.parent.Refresh_AllTopicRela();
        break;
      case '07':
        //   window.parent.Refresh_AllTopicRela();
        break;
      case '11':
        //   window.parent.Refresh_vTea_QA();
        break;
      case '12':
        //   window.parent.liPaperReportClick();
        break;
      case '13':
        //   window.parent.liResearchResultClick();
        break;
      default:
        //   window.parent.Refresh_AllTopicRela();
        break;
    }
  } catch (e: any) {
    window.opener.location = '父页面地址';
    window.opener = null;
    window.close();
  }
}
