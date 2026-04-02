import { Ref } from 'vue';
import $ from 'jquery';
import { Public_Concept } from '../GradEduPublicPage/Public_Concept';
import { Public_SysSkill } from '../GradEduPublicPage/Public_SysSkill';
import { Public_SysSocialRelations } from '../GradEduPublicPage/Public_SysSocialRelations';
import { Public_TopicObjective } from '../GradEduPublicPage/Public_TopicObjective';
import { Public_Viewpoint } from '../GradEduPublicPage/Public_Viewpoint';
import {
  PaperEx_CopyToEx,
  PaperEx_FuncMapByFldName,
  PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache,
} from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { clsgs_PaperParagraphVerEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperParagraphVerEN';
import { clsPaperSubAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachmentEN';
import { clsvgs_PaperParagraphEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PaperParagraphEN';
import { clsvgs_PaperVerEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PaperVerEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsConceptVerEN } from '@/ts/L0Entity/GradEduTopic/clsConceptVerEN';
import { clsgs_MeetingMinutesVerEN } from '@/ts/L0Entity/GradEduTopic/clsgs_MeetingMinutesVerEN';
import { clsgs_TobeStudiedProblemVerEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TobeStudiedProblemVerEN';
import { clsSysSkillVerEN } from '@/ts/L0Entity/GradEduTopic/clsSysSkillVerEN';
import { clsSysSocialRelationsVerEN } from '@/ts/L0Entity/GradEduTopic/clsSysSocialRelationsVerEN';
import { clsTopicObjectiveVerEN } from '@/ts/L0Entity/GradEduTopic/clsTopicObjectiveVerEN';
import { clsvgs_MeetingMinutesEN } from '@/ts/L0Entity/GradEduTopic/clsvgs_MeetingMinutesEN';
import { clsvgs_TobeStudiedProblemEN } from '@/ts/L0Entity/GradEduTopic/clsvgs_TobeStudiedProblemEN';
import { clsViewpointVerEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointVerEN';
import { clsqa_AnswerVerEN } from '@/ts/L0Entity/InteractManage/clsqa_AnswerVerEN';
import { clsvqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsvqa_AnswerEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { gs_PaperParagraphVer_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperParagraphVerWApi';
import { PaperSubAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubAttachmentWApi';
import { vgs_PaperParagraph_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvgs_PaperParagraphWApi';
import { vgs_PaperVer_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvgs_PaperVerWApi';
import { vPaperSubViewpoint_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { ConceptVer_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsConceptVerWApi';
import { gs_MeetingMinutesVer_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_MeetingMinutesVerWApi';
import { gs_TobeStudiedProblemVer_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_TobeStudiedProblemVerWApi';
import { SysSkillVer_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsSysSkillVerWApi';
import { SysSocialRelationsVer_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsSysSocialRelationsVerWApi';
import { TopicObjectiveVer_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsTopicObjectiveVerWApi';
import { vgs_MeetingMinutes_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvgs_MeetingMinutesWApi';
import { vgs_TobeStudiedProblem_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvgs_TobeStudiedProblemWApi';
import { ViewpointVer_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsViewpointVerWApi';
import { qa_AnswerVer_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_AnswerVerWApi';
import { vqa_Answer_GetFirstObjAsync } from '@/ts/L3ForWApi/InteractManage/clsvqa_AnswerWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { GetAddressAndPort, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';
import { Paper_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  GetInputValueInDivObj,
  HideDivInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
import { userStore } from '@/store/modulesShare/user';
import { paperSubAttachmentStore } from '@/store/modules/paperSubAttachment';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

declare let window: any;

/* ResearchTopic_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class HistoricalVersionEx {
  public static HistoricalVersionRef: Ref<any>;
  public static vuebtn_Click: (strCommandName: string, strKeyId: string) => void;
  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divLayout: HTMLDivElement; //界面布局的层对象
  // public static EditRef: Ref<any>;
  // public static divEdit: HTMLDivElement;
  public static strPageDispModeId = '01'; //PopupBox(弹出框)

  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: HistoricalVersionEx = new HistoricalVersionEx();
    const objLayOut = objPage.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    console.log(strCommandName, strKeyId);

    // let objPageEdit;
    console.log(objPage);

    switch (strCommandName) {
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'SysScoreSummaryCRUDExEx.btn_Click');

        break;
    }
  }
  public async PageLoad(strCommentOrder: enumCommentOrder) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //
        //显示当前版本的观点
        await this.Showdiv_Version(strCommentOrder);
        //版本列表
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

  public async Showdiv_Version(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strTypeId = GetInputValueInDivObj(divName, 'hidTypeId');
    switch (strTypeId) {
      case '02':
        await this.BindGv_vPaperSubViewpoint();
        break;
      case '03':
        await this.Bind_vViewpoint();
        await this.Bind_ViewpointVersion(strCommentOrder);
        break;
      case '04':
        await this.Bind_vViewpoint();
        await this.Bind_ViewpointVersion(strCommentOrder);
        break;
      case '05':
        await this.Bind_vConcept();
        await this.Bind_ConceptVersion(strCommentOrder);
        break;
      case '06':
        await this.Bind_vTopicObjective();
        await this.Bind_TopicObjectiveVersion(strCommentOrder);
        break;
      case '07':
        await this.Bind_vTopicObjective();
        await this.Bind_TopicObjectiveVersion(strCommentOrder);
        break;
      case '08':
        await this.Bind_vSysSkill();
        await this.Bind_SysSkillVersion(strCommentOrder);
        break;
      case '09':
        await this.Bind_vSysSocialRelations();
        await this.Bind_SysSocialRelationsVersion(strCommentOrder);
        break;
      case '10':
        await this.Bind_vPaper();
        await this.BindList_vPaperVersion(strCommentOrder);
        break;
      case '11':
        //论文写作段落历史版本；
        await this.BindGv_vgs_PaperParagraph();
        await this.BindList_vgs_PaperParagraphVersion(strCommentOrder);
        break;
      case '12':
        //小组答案；
        await this.BindGv_vqa_Answer();
        await this.BindList_vqa_AnswerVersion(strCommentOrder);
        break;
      case '13':
        //会议纪要；
        await this.BindGv_gs_MeetingMinutes();
        await this.BindList_gs_MeetingMinutesVersion(strCommentOrder);
        break;
      case '14':
        //待研究问题；
        await this.BindGv_gs_TobeStudiedProblem();
        await this.BindList_gs_TobeStudiedProblemVersion(strCommentOrder);
        break;
      default:
        break;
    }
  }

  //绑定论文子观点数据
  public async BindGv_vPaperSubViewpoint() {
    const strSubViewpointId = HistoricalVersionEx.HistoricalVersionRef.value.keyId;
    const strWhereCond = `1=1 and subViewpointId='${strSubViewpointId}'`;
    const strWhereCond2 = '1=1';

    //获取用户缓存数据
    const strWhere_User = '1=1';

    try {
      const objvPaperSubViewpoint = await vPaperSubViewpoint_GetFirstObjAsync(strWhereCond);

      if (objvPaperSubViewpoint == null) return;

      let strhtml = '';

      strhtml += '<div class="info" id="infoViewpoint">';
      strhtml += '<ul class="artlist">';
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${objvPaperSubViewpoint.rWTitle}]：</span><span class="abstract-text">${objvPaperSubViewpoint.subViewpointContent}</span></li>`;

      if (IsNullOrEmpty(objvPaperSubViewpoint.sectionName) == false) {
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[论文节]：</span><span class="abstract-text">${objvPaperSubViewpoint.sectionName}</span></li>`;
      }

      const arrPaperSubAttachments = await paperSubAttachmentStore.getObjLst(
        objvPaperSubViewpoint.subViewpointId,
      );
      if (arrPaperSubAttachments != null && arrPaperSubAttachments.length > 0) {
        for (let y = 0; y < arrPaperSubAttachments.length; y++) {
          const strAddressAndPortfull = GetAddressAndPort() + arrPaperSubAttachments[y].filePath;
          strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" style="max-width:500px; margin-left: 10px;" alt="" id="txtImgPath${arrPaperSubAttachments[y].paperSubAttachmentId}"/>`;
        }
      }

      if (objvPaperSubViewpoint.explainContent != '') {
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${objvPaperSubViewpoint.explainTypeName}]：</span><span class="abstract-text">${objvPaperSubViewpoint.explainContent}</span></li>`;
      }
      const strUserName = await vQxUsersSimStore.getUserName(objvPaperSubViewpoint.updUser);
      if (strUserName != '') {
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
      }
      strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${objvPaperSubViewpoint.updDate}`;
      strhtml += '</li>';
      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      strhtml += '</ul></div>';

      //拼接；
      const div_Viewpoint = GetDivObjInDivObj(HistoricalVersionEx.divLayout, 'div_Viewpoint');
      div_Viewpoint.innerHTML = '';
      div_Viewpoint.innerHTML = strhtml;
      // $('#1div_Viewpoint').h1tml(strhtml);
      console.log('完成BindGv_vPaperSubViewpoint!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //绑定观点数据
  public async Bind_vViewpoint() {
    const strViewpointId = HistoricalVersionEx.HistoricalVersionRef.value.keyId; //GetInputValueInDivObj(divName, 'h1idKeyId');
    const strHtml = await Public_Viewpoint.Bind_vViewpoint(strViewpointId);
    // $('#div_Viewpoint').h1tml(strHtml);
    const div_Viewpoint = GetDivObjInDivObj(HistoricalVersionEx.divLayout, 'div_Viewpoint');
    div_Viewpoint.innerHTML = '';
    div_Viewpoint.innerHTML = strHtml;
  }

  //绑定相关概念
  public async Bind_vConcept() {
    const strConceptId = HistoricalVersionEx.HistoricalVersionRef.value.keyId; //GetInputValueInDivObj(divName, 'h1idKeyId');
    const strHtml = await Public_Concept.Bind_vConcept(strConceptId);
    // $('#div_Viewpoint').h1tml(strHtml);
    const div_Viewpoint = GetDivObjInDivObj(HistoricalVersionEx.divLayout, 'div_Viewpoint');
    div_Viewpoint.innerHTML = '';
    div_Viewpoint.innerHTML = strHtml;
  }

  //客观事实、客观数据
  public async Bind_vTopicObjective() {
    const strTopicObjectiveId = HistoricalVersionEx.HistoricalVersionRef.value.keyId; //GetInputValueInDivObj(divName, 'h1idKeyId');
    const strHtml = await Public_TopicObjective.Bind_vTopicObjective(strTopicObjectiveId);
    // $('#div_Viewpoint').h1tml(strHtml);
    const div_Viewpoint = GetDivObjInDivObj(HistoricalVersionEx.divLayout, 'div_Viewpoint');
    div_Viewpoint.innerHTML = '';
    div_Viewpoint.innerHTML = strHtml;
  }

  //技能
  public async Bind_vSysSkill() {
    const strSkillId = HistoricalVersionEx.HistoricalVersionRef.value.keyId; //GetInputValueInDivObj(divName, 'h1idKeyId');
    const strHtml = await Public_SysSkill.Bind_vSysSkill(strSkillId);
    // $('#div_Viewpoint').h1tml(strHtml);
    const div_Viewpoint = GetDivObjInDivObj(HistoricalVersionEx.divLayout, 'div_Viewpoint');
    div_Viewpoint.innerHTML = '';
    div_Viewpoint.innerHTML = strHtml;
  }

  //社会关系
  public async Bind_vSysSocialRelations() {
    const strSocialId = HistoricalVersionEx.HistoricalVersionRef.value.keyId; //GetInputValueInDivObj(divName, 'h1idKeyId');
    const strHtml = await Public_SysSocialRelations.Bind_vSysSocialRelations(strSocialId);
    // $('#div_Viewpoint').h1tml(strHtml);
    const div_Viewpoint = GetDivObjInDivObj(HistoricalVersionEx.divLayout, 'div_Viewpoint');
    div_Viewpoint.innerHTML = '';
    div_Viewpoint.innerHTML = strHtml;
  }

  //绑定论文写作段落
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vgs_PaperParagraph() {
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

    let strhtml = '';
    const strParagraphId = HistoricalVersionEx.HistoricalVersionRef.value.keyId; //GetInputValueInDivObj(divName, 'h1idKeyId');
    const strWhereCond = ` 1=1 and paragraphId='${strParagraphId}'`;

    try {
      const strWhere_User = '1=1';

      const objvgs_PaperParagraph = await vgs_PaperParagraph_GetFirstObjAsync(strWhereCond);

      if (objvgs_PaperParagraph == null) return;
      //段落
      strhtml += '<div class="info" id="infogs_PaperParagraph">';
      strhtml += '<ul class="artlist">';

      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[类型]：</span><span class="abstract-text">${objvgs_PaperParagraph.paragraphTypeName}</span></li>`;

      //先判断段落类型，根据类型判断是图片，还是段落；
      if (objvgs_PaperParagraph.paragraphTypeName == '02') {
        //图片，如果图片存放字段不为空
        if (objvgs_PaperParagraph.paragraphContent != '') {
          const strAddressAndPortfull =
            GetAddressAndPort() + objvgs_PaperParagraph.paragraphContent;
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[段落内容]：</span><span class="abstract-text"><img src="${strAddressAndPortfull}" alt="" id="txtImgPath${strParagraphId}"/></span></li>`;
        }
      } else {
        //文字
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[段落内容]：</span><span class="abstract-text">${objvgs_PaperParagraph.paragraphContent}</span></li>`;
      }
      //创建用户，创建时间
      const strUserName = await vQxUsersSimStore.getUserName(objvgs_PaperParagraph.createUser);
      if (strUserName != '') {
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
      }
      strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${objvgs_PaperParagraph.createDate}`;
      strhtml += '</li>';

      //编辑用户编辑时间
      const strUserName0 = await vQxUsersSimStore.getUserName(objvgs_PaperParagraph.updUser);
      if (strUserName0 != '') {
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName0}`;
      }
      strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${objvgs_PaperParagraph.updDate}`;
      strhtml += '</li>';

      //如果当前观点有引用论文，那么就显示论文标题和作者
      const varPaperId = objvgs_PaperParagraph.paperId;
      if (varPaperId != '' && varPaperId != null) {
        const objPaper: clsPaperEN = await PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache(
          varPaperId,
          strIdCurrEducls,
        );
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[当前论文]：</span>${objPaper.paperTitle}(作者：${objPaper.author})</li>`;
      }
      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

      strhtml += '</ul></div>';

      //拼接；
      const div_Viewpoint = GetDivObjInDivObj(HistoricalVersionEx.divLayout, 'div_Viewpoint');
      div_Viewpoint.innerHTML = '';
      div_Viewpoint.innerHTML = strhtml;
      // $('#1div_Viewpoint').h1tml(strhtml);
      console.log('完成段落绑定!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    return strhtml;
  }

  //自研论文；
  //绑定个性化论文列表
  public async Bind_vPaper() {
    const strThisFuncName = this.Bind_vPaper.name;

    const strPaperId = HistoricalVersionEx.HistoricalVersionRef.value.keyId; //
    const strWhereCond = `1=1 and paperId='${strPaperId}'`;

    try {
      const strWhere_User = '1=1';

      const objPaperEN = await Paper_GetFirstObjAsync(strWhereCond);
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
      PaperEx_FuncMapByFldName(clsPaperENEx.con_PaperStatusName, objPaperENEx);

      let strhtml = '';

      //自研论文
      strhtml += '<div class="info" id="infoPaper">';
      strhtml += '<ul class="artlist">';

      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[标题]：</span><span class="abstract-text">${objPaperENEx.paperTitle}</span></li>`;
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[作者]：</span><span class="abstract-text">${objPaperENEx.author}</span>;&nbsp;&nbsp;<span class="rowtit color6">[期刊]：</span><span class="abstract-text">${objPaperENEx.periodical}</span></li>`;
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[关键字]：</span><span class="abstract-text">${objPaperENEx.keyword}</span></li>`;
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[状态]：</span><span class="abstract-text">${objPaperENEx.paperStatusName}</span></li>`;
      //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[内容]：</span><span class="abstract-text">' + ObjvPaper.paperContent + '</span></li>';
      strhtml += `<li><span class="abstract-text">${objPaperENEx.paperContent}</span></li>`;
      const strUserName = await vQxUsersSimStore.getUserName(objPaperENEx.updUser);
      if (strUserName != '') {
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
      }

      strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${objPaperENEx.updDate}`;
      strhtml += '</li>';

      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

      strhtml += '</ul></div>';

      // $('#div_Viewpoint').h1tml(strhtml);
      const div_Viewpoint = GetDivObjInDivObj(HistoricalVersionEx.divLayout, 'div_Viewpoint');
      div_Viewpoint.innerHTML = '';
      div_Viewpoint.innerHTML = strhtml;

      console.log('完成BindList_vPaper!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //小组答案
  public async BindGv_vqa_Answer() {
    // const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    let strhtml = '';

    const strAnswerId = HistoricalVersionEx.HistoricalVersionRef.value.keyId; // GetInputValueInDivObj(divName, 'h1idKeyId');
    const strWhereCond = ` 1=1 and answerId='${strAnswerId}'`;

    try {
      const objvqa_Answer = await vqa_Answer_GetFirstObjAsync(strWhereCond);

      if (objvqa_Answer == null) return;
      //段落
      strhtml += '<div class="info" id="infovqa_Answer">';
      strhtml += '<ul class="artlist">';

      //文字
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[问题内容]：</span><span class="abstract-text">${objvqa_Answer.questionsContent}</span></li>`;

      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[答案内容]：</span><span class="abstract-text">${objvqa_Answer.answerContent}</span></li>`;
      //  }

      ////编辑用户编辑时间

      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${objvqa_Answer.userName}`;

      strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${objvqa_Answer.updDate}`;
      strhtml += '</li>';

      //如果当前观点有引用论文，那么就显示论文标题和作者

      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

      strhtml += '</ul></div>';

      //拼接；
      const div_Viewpoint = GetDivObjInDivObj(HistoricalVersionEx.divLayout, 'div_Viewpoint');
      div_Viewpoint.innerHTML = '';
      div_Viewpoint.innerHTML = strhtml;
      // $('#1div_Viewpoint').h1tml(strhtml);
      console.log('完成答案绑定!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    return strhtml;
  }

  //会议纪要
  public async BindGv_gs_MeetingMinutes() {
    let strhtml = '';
    const strMeetingId = HistoricalVersionEx.HistoricalVersionRef.value.keyId; // GetInputValueInDivObj(divName, 'h1idKeyId');
    const strWhereCond = ` 1=1 and meetingId='${strMeetingId}'`;

    try {
      const strWhere_User = '1=1';

      const objvgs_MeetingMinutes = await vgs_MeetingMinutes_GetFirstObjAsync(strWhereCond);

      if (objvgs_MeetingMinutes == null) return;
      //段落
      strhtml += '<div class="info" id="infovgs_MeetingMinutes">';
      strhtml += '<ul class="artlist">';

      //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[类型]：</span><span class="abstract-text">' + objvgs_PaperParagraph.paragraphTypeName + '</span></li>';

      //先判断段落类型，根据类型判断是图片，还是段落；

      //文字

      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[会议内容]：</span><span class="abstract-text">${objvgs_MeetingMinutes.meetingContent}</span></li>`;
      //  }

      //编辑用户编辑时间
      const strUserName = await vQxUsersSimStore.getUserName(objvgs_MeetingMinutes.updUser);
      if (strUserName != '') {
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
      }
      strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[会议时间]：</span>${objvgs_MeetingMinutes.meetingDate}`;
      strhtml += '</li>';

      //如果当前观点有引用论文，那么就显示论文标题和作者

      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

      strhtml += '</ul></div>';

      //拼接；
      const div_Viewpoint = GetDivObjInDivObj(HistoricalVersionEx.divLayout, 'div_Viewpoint');
      div_Viewpoint.innerHTML = '';
      div_Viewpoint.innerHTML = strhtml;
      // $('#1div_Viewpoint').h1tml(strhtml);
      console.log('完成答案绑定!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    return strhtml;
  }

  //待研究问题
  public async BindGv_gs_TobeStudiedProblem() {
    // const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

    let strhtml = '';
    const strProblemId = HistoricalVersionEx.HistoricalVersionRef.value.keyId; //GetInputValueInDivObj(divName, 'h1idKeyId');
    const strWhereCond = ` 1=1 and problemId='${strProblemId}'`;

    let objvgs_TobeStudiedProblem: clsvgs_TobeStudiedProblemEN = new clsvgs_TobeStudiedProblemEN();

    try {
      const objvgs_TobeStudiedProblem = await vgs_TobeStudiedProblem_GetFirstObjAsync(strWhereCond);

      if (objvgs_TobeStudiedProblem == null) return;
      //段落
      strhtml += '<div class="info" id="infovgs_TobeStudiedProblem">';
      strhtml += '<ul class="artlist">';

      //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[类型]：</span><span class="abstract-text">' + objvgs_PaperParagraph.paragraphTypeName + '</span></li>';

      //先判断段落类型，根据类型判断是图片，还是段落；

      //文字
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[问题标题]：</span><span class="abstract-text">${objvgs_TobeStudiedProblem.problemTitle}</span></li>`;
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[问题内容]：</span><span class="abstract-text">${objvgs_TobeStudiedProblem.problemContent}</span></li>`;
      //  }

      //编辑用户编辑时间
      const strUserName = await vQxUsersSimStore.getUserName(objvgs_TobeStudiedProblem.updUser);
      if (strUserName != '') {
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
      }
      strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[待研究问题时间]：</span>${objvgs_TobeStudiedProblem.problemDate}`;
      strhtml += '</li>';

      //如果当前观点有引用论文，那么就显示论文标题和作者

      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

      strhtml += '</ul></div>';

      //拼接；
      const div_Viewpoint = GetDivObjInDivObj(HistoricalVersionEx.divLayout, 'div_Viewpoint');
      div_Viewpoint.innerHTML = '';
      div_Viewpoint.innerHTML = strhtml;
      // $('#1div_Viewpoint').h1tml(strhtml);
      console.log('完成答案绑定!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    return strhtml;
  }

  /******************************************************************历史版本***********************************************************/
  /******************************************************************历史版本***********************************************************/
  /******************************************************************历史版本***********************************************************/

  //观点历史版本
  public async Bind_ViewpointVersion(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let arrViewpointVObjLst: Array<clsViewpointVerEN> = [];

    let strWhereCond = '';
    //strWhereCond2 = "";

    const strUserId = userStore.getUserId;
    const strViewPointId = HistoricalVersionEx.HistoricalVersionRef.value.keyId; //GetInputValueInDivObj(  divName,  'h1idKeyId',)
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部版本
        strWhereCond = ` viewpointId='${strViewPointId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人版本
        strWhereCond = `  viewpointId='${strViewPointId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新版本
        strWhereCond = `  viewpointId='${strViewPointId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    try {
      arrViewpointVObjLst = await ViewpointVer_GetObjLstAsync(strWhereCond);

      //获取用户缓存数据

      let strhtml = '';
      let varNum = 0;

      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';

      for (let i = 0; i < arrViewpointVObjLst.length; i++) {
        varNum++;
        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';

        const strUserName = await vQxUsersSimStore.getUserName(arrViewpointVObjLst[i].updUser);
        if (strUserName != '') {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842">${strUserName}</span>`;
        }

        strhtml += `<span class="comment-time">${arrViewpointVObjLst[i].updDate}</span>`;
        strhtml += `  <span class="comment-username J_User">第${varNum}版本</span></p>`;

        strhtml += `<div class="comment-content J_CommentContent">[观点]${arrViewpointVObjLst[i].viewpointName}</div>`;
        strhtml += `<div class="comment-content J_CommentContent">[内容]${arrViewpointVObjLst[i].viewpointName}</div>`;
        strhtml += `<div class="comment-content J_CommentContent">[方法]${arrViewpointVObjLst[i].reason}</div>`;

        ////回复区

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

  //概念历史版本
  public async Bind_ConceptVersion(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let arrConceptVObjLst: Array<clsConceptVerEN> = [];

    let strWhereCond = '';
    //strWhereCond2 = "";

    const strUserId = userStore.getUserId;
    const strConceptId = HistoricalVersionEx.HistoricalVersionRef.value.keyId;
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部版本
        strWhereCond = ` conceptId='${strConceptId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人版本
        strWhereCond = `  conceptId='${strConceptId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新版本
        strWhereCond = `  conceptId='${strConceptId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    try {
      arrConceptVObjLst = await ConceptVer_GetObjLstAsync(strWhereCond);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrConceptVObjLst.length; i++) {
        varNum++;
        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';

        const strUserName = await vQxUsersSimStore.getUserName(arrConceptVObjLst[i].updUser);
        if (strUserName != '') {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842">${strUserName}</span>`;
        }

        strhtml += `<span class="comment-time">${arrConceptVObjLst[i].updDate}</span>`;
        strhtml += `  <span class="comment-username J_User">第${varNum}版本</span></p>`;

        strhtml += `<div class="comment-content J_CommentContent">[概念]${arrConceptVObjLst[i].conceptName}</div>`;
        strhtml += `<div class="comment-content J_CommentContent">[内容]${arrConceptVObjLst[i].conceptContent}</div>`;

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

  //客观历史版本
  public async Bind_TopicObjectiveVersion(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let arrTopicObjectiveVObjLst: Array<clsTopicObjectiveVerEN> = [];

    let strWhereCond = '';
    //strWhereCond2 = "";

    const strUserId = userStore.getUserId;
    const strTopicObjectiveId = HistoricalVersionEx.HistoricalVersionRef.value.keyId;
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部版本
        strWhereCond = ` topicObjectiveId='${strTopicObjectiveId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人版本
        strWhereCond = `  topicObjectiveId='${strTopicObjectiveId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新版本
        strWhereCond = `  topicObjectiveId='${strTopicObjectiveId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    try {
      arrTopicObjectiveVObjLst = await TopicObjectiveVer_GetObjLstAsync(strWhereCond);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrTopicObjectiveVObjLst.length; i++) {
        varNum++;
        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';

        const strUserName = await vQxUsersSimStore.getUserName(arrTopicObjectiveVObjLst[i].updUser);
        if (strUserName != '') {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842">${strUserName}</span>`;
        }

        strhtml += `<span class="comment-time">${arrTopicObjectiveVObjLst[i].updDate}</span>`;
        strhtml += `  <span class="comment-username J_User">第${varNum}版本</span></p>`;

        strhtml += `<div class="comment-content J_CommentContent">[标题]${arrTopicObjectiveVObjLst[i].objectiveName}</div>`;
        strhtml += `<div class="comment-content J_CommentContent">[内容]${arrTopicObjectiveVObjLst[i].objectiveContent}</div>`;
        strhtml += `<div class="comment-content J_CommentContent">[推论]${arrTopicObjectiveVObjLst[i].conclusion}</div>`;

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

  //技能版本
  public async Bind_SysSkillVersion(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let arrSysSkillVObjLst: Array<clsSysSkillVerEN> = [];

    let strWhereCond = '';
    //strWhereCond2 = "";

    const strUserId = userStore.getUserId;
    const strSkillId = HistoricalVersionEx.HistoricalVersionRef.value.keyId;
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部版本
        strWhereCond = ` skillId='${strSkillId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人版本
        strWhereCond = `  skillId='${strSkillId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新版本
        strWhereCond = `  skillId='${strSkillId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    try {
      arrSysSkillVObjLst = await SysSkillVer_GetObjLstAsync(strWhereCond);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrSysSkillVObjLst.length; i++) {
        varNum++;
        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';

        const strUserName = await vQxUsersSimStore.getUserName(arrSysSkillVObjLst[i].updUser);
        if (strUserName != '') {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842">${strUserName}</span>`;
        }

        strhtml += `<span class="comment-time">${arrSysSkillVObjLst[i].updDate}</span>`;
        strhtml += `  <span class="comment-username J_User">第${varNum}版本</span></p>`;

        strhtml += `<div class="comment-content J_CommentContent">[技能]${arrSysSkillVObjLst[i].skillName}</div>`;
        strhtml += `<div class="comment-content J_CommentContent">[实施过程]${arrSysSkillVObjLst[i].process}</div>`;

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

  //社会关系
  public async Bind_SysSocialRelationsVersion(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let arrSysSocialRelationsVObjLst: Array<clsSysSocialRelationsVerEN> = [];

    let strWhereCond = '';
    //strWhereCond2 = "";

    const strUserId = userStore.getUserId;
    const strSocialId = HistoricalVersionEx.HistoricalVersionRef.value.keyId;
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部版本
        strWhereCond = ` socialId='${strSocialId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人版本
        strWhereCond = `  socialId='${strSocialId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新版本
        strWhereCond = `  socialId='${strSocialId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    try {
      arrSysSocialRelationsVObjLst = await SysSocialRelationsVer_GetObjLstAsync(strWhereCond);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrSysSocialRelationsVObjLst.length; i++) {
        varNum++;
        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';

        const strUserName = await vQxUsersSimStore.getUserName(
          arrSysSocialRelationsVObjLst[i].updUser,
        );
        if (strUserName != '') {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842">${strUserName}</span>`;
        }

        strhtml += `<span class="comment-time">${arrSysSocialRelationsVObjLst[i].updDate}</span>`;
        strhtml += `  <span class="comment-username J_User">第${varNum}版本</span></p>`;

        strhtml += `<div class="comment-content J_CommentContent">[姓名]${arrSysSocialRelationsVObjLst[i].fullName}[国籍]${arrSysSocialRelationsVObjLst[i].nationality}[工作单位]${arrSysSocialRelationsVObjLst[i].workUnit}</div>`;
        strhtml += `<div class="comment-content J_CommentContent">[专业]${arrSysSocialRelationsVObjLst[i].major}[成就]${arrSysSocialRelationsVObjLst[i].achievement}</div>`;
        strhtml += `<div class="comment-content J_CommentContent">[详细说明]${arrSysSocialRelationsVObjLst[i].detailedDescription}</div>`;

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

  //自研论文历史版本

  public async BindList_vPaperVersion(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let arrvgs_PaperVObjLst: Array<clsvgs_PaperVerEN> = [];

    let strWhereCond = '';
    //strWhereCond2 = "";

    const strUserId = userStore.getUserId;
    const strPaperId = HistoricalVersionEx.HistoricalVersionRef.value.keyId;
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部版本
        strWhereCond = ` paperId='${strPaperId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人版本
        strWhereCond = `  paperId='${strPaperId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新版本
        strWhereCond = `  paperId='${strPaperId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    try {
      arrvgs_PaperVObjLst = await vgs_PaperVer_GetObjLstAsync(strWhereCond);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrvgs_PaperVObjLst.length; i++) {
        varNum++;
        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';

        const strUserName = await vQxUsersSimStore.getUserName(arrvgs_PaperVObjLst[i].updUser);
        if (strUserName != '') {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842">${strUserName}</span>`;
        }

        strhtml += `<span class="comment-time">${arrvgs_PaperVObjLst[i].updDate}</span>`;
        strhtml += `  <span class="comment-username J_User">第${varNum}版本</span></p>`;

        strhtml += `<div class="comment-content J_CommentContent">[标题]${arrvgs_PaperVObjLst[i].paperTitle}</div>`;
        strhtml += `<div class="comment-content J_CommentContent">[关键字]${arrvgs_PaperVObjLst[i].keyword}[类型]${arrvgs_PaperVObjLst[i].literatureTypeName}</div>`;
        strhtml += `<div class="comment-content J_CommentContent">${arrvgs_PaperVObjLst[i].paperContent}</div>`;

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

  //小组历史答案
  public async BindList_vqa_AnswerVersion(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let arrqa_AnswerVObjLst: Array<clsqa_AnswerVerEN> = [];
    let strWhereCond = '';
    const strUserId = userStore.getUserId;
    const strAnswerId = HistoricalVersionEx.HistoricalVersionRef.value.keyId;

    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部版本
        strWhereCond = ` answerId='${strAnswerId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人版本
        strWhereCond = `  answerId='${strAnswerId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新版本
        strWhereCond = `  answerId='${strAnswerId}' order by updDate Desc`;
        break;
      default:
        break;
    }

    try {
      arrqa_AnswerVObjLst = await qa_AnswerVer_GetObjLstAsync(strWhereCond);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrqa_AnswerVObjLst.length; i++) {
        varNum++;
        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';

        const strUserName = await vQxUsersSimStore.getUserName(arrqa_AnswerVObjLst[i].updUser);
        if (strUserName != '') {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842">${strUserName}</span>`;
        }

        strhtml += `<span class="comment-time">${arrqa_AnswerVObjLst[i].updDate}</span>`;
        strhtml += `  <span class="comment-username J_User">第${varNum}版本</span></p>`;

        //先判断段落类型，根据类型判断是图片，还是段落；

        //文字
        strhtml += `<div class="comment-content J_CommentContent">[内容]${arrqa_AnswerVObjLst[i].answerContent}</div>`;
        // }
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

  //段落版本
  public async BindList_vgs_PaperParagraphVersion(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let arrgs_PaperParagraphVObjLst: Array<clsgs_PaperParagraphVerEN> = [];
    let strWhereCond = '';
    const strUserId = userStore.getUserId;
    const strParagraphId = HistoricalVersionEx.HistoricalVersionRef.value.keyId;
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部版本
        strWhereCond = ` paragraphId='${strParagraphId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人版本
        strWhereCond = `  paragraphId='${strParagraphId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新版本
        strWhereCond = `  paragraphId='${strParagraphId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    try {
      arrgs_PaperParagraphVObjLst = await gs_PaperParagraphVer_GetObjLstAsync(strWhereCond);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrgs_PaperParagraphVObjLst.length; i++) {
        varNum++;
        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';

        const strUserName = await vQxUsersSimStore.getUserName(
          arrgs_PaperParagraphVObjLst[i].updUser,
        );
        if (strUserName != '') {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842">${strUserName}</span>`;
        }

        strhtml += `<span class="comment-time">${arrgs_PaperParagraphVObjLst[i].updDate}</span>`;
        strhtml += `  <span class="comment-username J_User">第${varNum}版本</span></p>`;

        //先判断段落类型，根据类型判断是图片，还是段落；
        if (arrgs_PaperParagraphVObjLst[i].paragraphTypeId == '02') {
          //图片，如果图片存放字段不为空
          if (arrgs_PaperParagraphVObjLst[i].paragraphContent != '') {
            const strAddressAndPortfull =
              GetAddressAndPort() + arrgs_PaperParagraphVObjLst[i].paragraphContent;
            strhtml += `<div class="comment-content J_CommentContent">[内容]<img src="${strAddressAndPortfull}" alt="" id="txtImgPath${arrgs_PaperParagraphVObjLst[i].paragraphId}"/></div>`;
          }
        } else {
          //文字
          strhtml += `<div class="comment-content J_CommentContent">[内容]${arrgs_PaperParagraphVObjLst[i].paragraphContent}</div>`;
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

  //会议纪要版本
  public async BindList_gs_MeetingMinutesVersion(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let arrgs_MeetingMinutesVObjLst: Array<clsgs_MeetingMinutesVerEN> = [];
    let strWhereCond = '';
    const strUserId = userStore.getUserId;
    const strMeetingId = HistoricalVersionEx.HistoricalVersionRef.value.keyId;
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部版本
        strWhereCond = ` meetingId='${strMeetingId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人版本
        strWhereCond = `  meetingId='${strMeetingId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新版本
        strWhereCond = `  meetingId='${strMeetingId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    try {
      arrgs_MeetingMinutesVObjLst = await gs_MeetingMinutesVer_GetObjLstAsync(strWhereCond);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrgs_MeetingMinutesVObjLst.length; i++) {
        varNum++;
        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';

        const strUserName = await vQxUsersSimStore.getUserName(
          arrgs_MeetingMinutesVObjLst[i].updUser,
        );
        if (strUserName != '') {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842">${strUserName}</span>`;
        }

        strhtml += `<span class="comment-time">${arrgs_MeetingMinutesVObjLst[i].updDate}</span>`;
        strhtml += `  <span class="comment-username J_User">第${varNum}版本</span></p>`;

        //文字
        strhtml += `<div class="comment-content J_CommentContent">[内容]${arrgs_MeetingMinutesVObjLst[i].meetingContent}</div>`;

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

  //待研究问题版本
  public async BindList_gs_TobeStudiedProblemVersion(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let arrgs_TobeStudiedProblemVObjLst: Array<clsgs_TobeStudiedProblemVerEN> = [];
    let strWhereCond = '';
    const strUserId = userStore.getUserId;
    const strProblemId = HistoricalVersionEx.HistoricalVersionRef.value.keyId;
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部版本
        strWhereCond = ` problemId='${strProblemId}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人版本
        strWhereCond = `  problemId='${strProblemId}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新版本
        strWhereCond = `  problemId='${strProblemId}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    try {
      arrgs_TobeStudiedProblemVObjLst = await gs_TobeStudiedProblemVer_GetObjLstAsync(strWhereCond);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrgs_TobeStudiedProblemVObjLst.length; i++) {
        varNum++;
        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';

        const strUserName = await vQxUsersSimStore.getUserName(
          arrgs_TobeStudiedProblemVObjLst[i].updUser,
        );
        if (strUserName != '') {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842">${strUserName}</span>`;
        }

        strhtml += `<span class="comment-time">${arrgs_TobeStudiedProblemVObjLst[i].updDate}</span>`;
        strhtml += `  <span class="comment-username J_User">第${varNum}版本</span></p>`;
        //文字
        strhtml += `<div class="comment-content J_CommentContent">${arrgs_TobeStudiedProblemVObjLst[i].problemContent}</div>`;

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
  /**
   * 获取div对象，根据不同的div类型
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_GetDivName)
   **/
  public getDivName(strDivType: enumDivType): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (HistoricalVersionEx.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (HistoricalVersionEx.HistoricalVersionRef.value.dialogVisible == false) {
        const strMsg = Format(
          '当前编辑区的的对话框还没有打开，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
    }
    let divName;
    let divTypeName;
    let strMsg;
    switch (strDivType) {
      case enumDivType.LayOut_01:
        divName = HistoricalVersionEx.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = HistoricalVersionEx.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = HistoricalVersionEx.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = HistoricalVersionEx.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = HistoricalVersionEx.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = HistoricalVersionEx.divPager;
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
