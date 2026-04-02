import $ from 'jquery';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { vViewpointEx_GetAllVNumObjLstAsync } from '@/ts/L3ForWApiEx/GradEduTopic/clsvViewpointExWApi';
import { ConceptCRUD } from '@/viewsBase/GradEduTopic/ConceptCRUD';
import { TopicObjectiveCRUD } from '@/viewsBase/GradEduTopic/TopicObjectiveCRUD';
import { ViewpointCRUD } from '@/viewsBase/GradEduTopic/ViewpointCRUD';
import { clsConceptEN } from '@/ts/L0Entity/GradEduTopic/clsConceptEN';
import { clsRTConceptRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTConceptRelaEN';
import { clsRTSysSkillRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTSysSkillRelaEN';
import { clsRTSysSocialRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTSysSocialRelaEN';
import { clsRTTopicObjectiveRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTTopicObjectiveRelaEN';
import { clsRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointRelaEN';
import { clsSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsSysSkillEN';
import { clsSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsSysSocialRelationsEN';
import { clsvConceptEN } from '@/ts/L0Entity/GradEduTopic/clsvConceptEN';
import { clsvRTConceptRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTConceptRelaEN';
import { clsvRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN';

import { clsvRTSysSocialRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTSysSocialRelaEN';
import { clsvRTTopicObjectiveRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTTopicObjectiveRelaEN';
import { clsvRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointRelaEN';
import { clsvSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSkillEN';
import { clsvSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsEN';
import { clsvTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN';
import { clsvViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvViewpointEN';
import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { PaperAttachment_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import { ResearchTopic_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { RTConceptRela_AddNewRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTConceptRelaWApi';
import {
  RTSysSkillRela_AddNewRecordAsync,
  RTSysSkillRela_GetRecCountByCondAsync,
  RTSysSkillRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTSysSkillRelaWApi';
import {
  RTSysSocialRela_AddNewRecordAsync,
  RTSysSocialRela_GetRecCountByCondAsync,
  RTSysSocialRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTSysSocialRelaWApi';
import { RTTopicObjectiveRela_AddNewRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTTopicObjectiveRelaWApi';
import { RTViewpointRela_AddNewRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTViewpointRelaWApi';
import { SysSkill_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsSysSkillWApi';
import { SysSocialRelations_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsSysSocialRelationsWApi';
import {
  vConcept_GetObjLstAsync,
  vConcept_GetObjLstByPagerAsync,
  vConcept_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvConceptWApi';
import { vRTConceptRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTConceptRelaWApi';
import { vRTPaperRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTPaperRelaWApi';

import { vRTSysSocialRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTSysSocialRelaWApi';
import { vRTTopicObjectiveRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTTopicObjectiveRelaWApi';
import { vRTViewpointRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointRelaWApi';
import {
  vSysSkill_GetObjLstAsync,
  vSysSkill_GetObjLstByPagerAsync,
  vSysSkill_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvSysSkillWApi';
import {
  vSysSocialRelations_GetObjLstAsync,
  vSysSocialRelations_GetObjLstByPagerAsync,
  vSysSocialRelations_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvSysSocialRelationsWApi';
import {
  vTopicObjective_GetObjLstAsync,
  vTopicObjective_GetObjLstByPagerAsync,
  vTopicObjective_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvTopicObjectiveWApi';
import {
  vViewpoint_GetObjLstAsync,
  vViewpoint_GetObjLstByPagerAsync,
  vViewpoint_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvViewpointWApi';
import { Users_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsUsersWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { BindDdl_ObjLst_V } from '@/ts/PubFun/clsCommFunc4Web';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { GetAddressAndPort, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { GetHidPaperId, SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { vRTSysSkillRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTSysSkillRelaWApi';
import { clsvRTSysSkillRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTSysSkillRelaEN';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

declare function CloseWindow_(): void;
declare let window: any;
/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Pdfiframe extends ViewpointCRUD {
  public static questionsId = '';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";

  //观点列表
  public mstrListDivViewpoint = 'divViewpointDataLst';
  //概念列表
  public mstrListDivPaper = 'divConceptDataLst';
  //客观列表
  public mstrListDivObjective = 'divObjectiveDataLst';

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  public recCount = 0;

  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      //通过主题Id获取教学班ID
      if (clsPubLocalStorage.idCurrEduCls == '') {
        const objResearchTopic = await ResearchTopic_GetFirstObjAsync(
          ` topicId=${clsPrivateSessionStorage.topicIdInTree}`,
        );
        if (objResearchTopic == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        ////const strThisFuncName = this.PageLoad.name;

        clsPubLocalStorage.idCurrEduCls = objResearchTopic.idCurrEduCls;
      }

      const strUserId = userStore.getUserId;

      if (strUserId != '') {
        $('#hidUserId').val(strUserId);
        await this.BindDdl_PaperId('ddlPaperId_q');
        //绑定编辑框
        //const responseText2 = await this.BindEdit();
      } else {
        alert('登录超时，请重新登录！');
        reLogin();
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
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
      const arrvRTPaperRelaObjLst = await vRTPaperRela_GetObjLstAsync(strWhereCond);
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

  public async SelectPaper() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      const strPaperId = GetSelectValueInDivObj(divName, 'ddlPaperId_q');
      SetHidPaperId(divName, strPaperId);
      //绑定pdf
      await this.BindPdf();
      //绑定编辑框

      await this.li_PaperMenu_Click();
      //const responseText2 = await this.BindEdit();
      ////绑定各类型的编辑框
      //const responseText3 = await this.BindPage();
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
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
    $('#Paper_QA').removeClass();
    $('#Paper_Tags').removeClass();
    $('#Tea_QA').removeClass();

    $('#Paper_SubViewpoint').addClass('tab-pane fade');
    $('#Paper_QA').addClass('tab-pane fade');
    $('#Paper_Tags').addClass('tab-pane fade');
    $('#Tea_QA').addClass('tab-pane fade');

    //判断根据序号显示不同的数据源
    const strnum = GetInputValueInDivObj(divName, 'hidTabNum');
    if (strnum == '1') {
      //$("#liUser").addClass("active");
      $('#liPaper_SubViewpoint a').addClass('active');

      $('#Paper_SubViewpoint').addClass('active show');

      await this.BindEdit();
      //绑定各类型的编辑框
      await this.BindPage();
    } else if (strnum == '2') {
      $('#liPaper_QA a').addClass('active');

      $('#Paper_QA').addClass('active show');

      //主题论文关系；
      await this.Bind_Paper_QA();
    } else if (strnum == '3') {
      $('#liPaper_Tags a').addClass('active');

      $('#Paper_Tags').addClass('active show');
      //主题论文关系；
      await this.Bind_Paper_Tags();
    } else if (strnum == '4') {
      $('#liTea_QA a').addClass('active');

      $('#Tea_QA').addClass('active show');
      //主题论文关系；
      await this.Bind_Tea_QA();
    } else {
      await this.BindEdit();
      //绑定各类型的编辑框
      await this.BindPage();
    }
  }

  //绑定Pdf
  public async BindPdf() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      //clsPrjInfoEN objPrjInfo = clsPrjInfoBL.GetObjByPrjID_Cache(strPrjId);
      const strPaperId = GetSelectValueInDivObj(divName, 'ddlPaperId_q');

      const strWhereCond = ` 1=1 and paperId ='${strPaperId}'`;
      const objPaperAttachment = await PaperAttachment_GetFirstObjAsync(strWhereCond);

      if (objPaperAttachment != null) {
        const strfilepath = GetAddressAndPort() + objPaperAttachment.filePath;
        let strhtml = '';
        strhtml = `<iframe id='iframe_qaPdf' src='../GradEduEx/qaPdf?zoom=1.1&file=${strfilepath}' style="height:100%;width:99%; min-height:700px;"></iframe>`;
        $('#div_pdf').html(strhtml);
      } else {
        let strhtml = '';
        strhtml =
          "<iframe id='iframe_qaPdf' src='../GradEduEx/qaPdf?zoom=1.1' style=\"height:100%;width:99%; min-height:700px;\"></iframe>";
        $('#div_pdf').html(strhtml);
      }
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //绑定Paper_QA
  public async Bind_Paper_QA() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      const strPaperId = GetHidPaperId(divName);
      const strQuestionsId = Pdfiframe.questionsId;
      //strIdCurrEducls = $("#hidIdCurrEduCls").val();
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

      const strPushId = GetInputValueInDivObj(divName, 'hidPushId');

      let varLink = '';
      if (strQuestionsId != '') {
        if (strPushId != '') {
          varLink = `../InteractManage/Paper_QA?paperId=${strPaperId}&idCurrEduCls=${strIdCurrEducls}&questionsId=${strQuestionsId}&pushId=${strPushId}`;
        } else {
          varLink = `../InteractManage/Paper_QA?paperId=${strPaperId}&idCurrEduCls=${strIdCurrEducls}&questionsId=${strQuestionsId}`;
        }
      } else {
        varLink = `../InteractManage/Paper_QA?paperId=${strPaperId}&idCurrEduCls=${strIdCurrEducls}`;
      }

      //strhtml = "<iframe id='iframe_Paper_QA' frameborder='no' border='0' marginwidth='0' marginheight='0' scrolling='auto' allowtransparency='yes' src='../InteractManage/Paper_QA?paperId=" + strPaperId + "' style='height:100%;width:99%; min-height:650px;'></iframe>";
      const strhtml = `<iframe id='iframe_Paper_QA' frameborder='no' border='0' marginwidth='0' marginheight='0' scrolling='auto' allowtransparency='yes' src='${varLink}' style='height:100%;width:99%; min-height:690px;'></iframe>`;

      $('#Paper_QA').html(strhtml);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //绑定Paper_Tags
  public async Bind_Paper_Tags() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      const strPaperId = GetHidPaperId(divName);
      //strIdCurrEducls = $("#hidIdCurrEduCls").val();
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

      const strhtml = `<iframe id='iframe_Paper_Tags'  frameborder='no' border='0' marginwidth='0' marginheight='0' scrolling='auto' allowtransparency='yes'  src='../InteractManage/Paper_Tags?paperId=${strPaperId}&idCurrEduCls=${strIdCurrEducls}' style='height:100%;width:99%; min-height:690px;'></iframe>`;

      $('#Paper_Tags').html(strhtml);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //绑定Tea_QA
  public async Bind_Tea_QA() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      const strPaperId = GetHidPaperId(divName);
      const strQuestionsId = Pdfiframe.questionsId;
      //strIdCurrEducls = $("#hidIdCurrEduCls").val();
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      let varLink = '';
      if (strQuestionsId != '') {
        varLink = `../InteractManage/Tea_QA?paperId=${strPaperId}&idCurrEduCls=${strIdCurrEducls}&questionsId=${strQuestionsId}`;
      } else {
        if (strTopicId != '') {
          varLink = `../InteractManage/Tea_QA?paperId=${strPaperId}&idCurrEduCls=${strIdCurrEducls}&topicId=${strTopicId}`;
        }
        varLink = `../InteractManage/Tea_QA?paperId=${strPaperId}&idCurrEduCls=${strIdCurrEducls}`;
      }

      //strhtml = "<iframe id='iframe_Tea_QA' frameborder='no' border='0' marginwidth='0' marginheight='0' scrolling='auto' allowtransparency='yes' src='../InteractManage/Paper_QA?paperId=" + strPaperId + "' style='height:100%;width:99%; min-height:650px;'></iframe>";
      const strhtml = `<iframe id='iframe_Tea_QA' frameborder='no' border='0' marginwidth='0' marginheight='0' scrolling='auto' allowtransparency='yes' src='${varLink}' style='height:100%;width:99%; min-height:690px;'></iframe>`;

      $('#Tea_QA').html(strhtml);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //绑定各个类型页面
  public async BindEdit() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = GetSelectValueInDivObj(divName, 'ddlPaperId_q');
    let arrvPdfPageNumObjLst: Array<clsvViewpointEN> = [];
    try {
      //个人观点
      $('#hidUserTypeId').val('01');
      // const string1 = this.mstrListDivViewpoint;
      const strWhereCond1 = await this.CombinevViewpointCondition();
      const strWhereCond_1 = `1=1 and userTypeId='${GetInputValueInDivObj(
        divName,
        'hidUserTypeId',
      )}' and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
      let arrvViewpointObjLst1: Array<clsvViewpointEN> = [];
      let arrvViewpointObjLst10: Array<clsvViewpointEN> = [];
      let arrvRTViewpointRelaObjLst1: Array<clsvRTViewpointRelaEN> = [];
      arrvViewpointObjLst10 = await vViewpoint_GetObjLstAsync(strWhereCond1);
      arrvRTViewpointRelaObjLst1 = await vRTViewpointRela_GetObjLstAsync(strWhereCond_1);

      //专家观点
      $('#hidUserTypeId').val('02');
      // const string2 = this.mstrListDivViewpoint;
      const strWhereCond2 = await this.CombinevViewpointCondition();
      const strWhereCond_2 = `1=1 and userTypeId='${GetInputValueInDivObj(
        divName,
        'hidUserTypeId',
      )}' and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
      let arrvViewpointObjLst2: Array<clsvViewpointEN> = [];
      let arrvViewpointObjLst20: Array<clsvViewpointEN> = [];
      let arrvRTViewpointRelaObjLst2: Array<clsvRTViewpointRelaEN> = [];
      arrvViewpointObjLst20 = await vViewpoint_GetObjLstAsync(strWhereCond2);
      arrvRTViewpointRelaObjLst2 = await vRTViewpointRela_GetObjLstAsync(strWhereCond_2);
      //相关概念
      const strWhereCond3 = await this.CombineConceptCondition();
      const strWhereCond_3 = `1=1 and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
      let arrvConceptObjLst: Array<clsvConceptEN> = [];
      let arrvConceptObjLst0: Array<clsvConceptEN> = [];
      let arrvRTConceptRelaObjLst: Array<clsvRTConceptRelaEN> = [];
      arrvConceptObjLst0 = await vConcept_GetObjLstAsync(strWhereCond3);
      arrvRTConceptRelaObjLst = await vRTConceptRela_GetObjLstAsync(strWhereCond_3);

      //客观事实
      $('#hidObjectiveTypeId').val('01');
      const strWhereCond4 = await this.CombinevTopicObjectiveCondition();
      const strWhereCond_4 = `1=1 and objectiveType='${$(
        '#hidObjectiveTypeId',
      ).val()}' and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
      let arrvTopicObjectiveObjLst1: Array<clsvTopicObjectiveEN> = [];
      let arrvTopicObjectiveObjLst10: Array<clsvTopicObjectiveEN> = [];
      let arrvRTTopicObjectiveRelaObjLst1: Array<clsvRTTopicObjectiveRelaEN> = [];
      arrvTopicObjectiveObjLst10 = await vTopicObjective_GetObjLstAsync(strWhereCond4);
      arrvRTTopicObjectiveRelaObjLst1 = await vRTTopicObjectiveRela_GetObjLstAsync(strWhereCond_4);

      //客观数据
      $('#hidObjectiveTypeId').val('02');
      const strWhereCond5 = await this.CombinevTopicObjectiveCondition();
      const strWhereCond_5 = `1=1 and objectiveType='${$(
        '#hidObjectiveTypeId',
      ).val()}' and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
      let arrvTopicObjectiveObjLst2: Array<clsvTopicObjectiveEN> = [];
      let arrvTopicObjectiveObjLst20: Array<clsvTopicObjectiveEN> = [];
      let arrvRTTopicObjectiveRelaObjLst2: Array<clsvRTTopicObjectiveRelaEN> = [];
      arrvTopicObjectiveObjLst20 = await vTopicObjective_GetObjLstAsync(strWhereCond5);
      arrvRTTopicObjectiveRelaObjLst2 = await vRTTopicObjectiveRela_GetObjLstAsync(strWhereCond_5);

      //技能
      const strWhereCond6 = await this.CombinevSysSkillCondition();
      const strWhereCond_6 = `1=1 and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
      let arrvSysSkillObjLst: Array<clsvSysSkillEN> = [];
      let arrvSysSkillObjLst0: Array<clsvSysSkillEN> = [];
      let arrvRTSysSkillObjLst: Array<clsvRTSysSkillRelaEN> = [];
      arrvSysSkillObjLst0 = await vSysSkill_GetObjLstAsync(strWhereCond6);
      arrvRTSysSkillObjLst = await vRTSysSkillRela_GetObjLstAsync(strWhereCond_6);

      //社会关系
      const strWhereCond7 = await this.CombinevSysSocialRelationsCondition();
      const strWhereCond_7 = `1=1 and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
      let arrvSysSocialRelationsObjLst: Array<clsvSysSocialRelationsEN> = [];
      let arrvSysSocialRelationsObjLst0: Array<clsvSysSocialRelationsEN> = [];
      let arrvRTSysSocialRelaObjLst: Array<clsvRTSysSocialRelaEN> = [];
      arrvSysSocialRelationsObjLst0 = await vSysSocialRelations_GetObjLstAsync(strWhereCond7);
      arrvRTSysSocialRelaObjLst = await vRTSysSocialRela_GetObjLstAsync(strWhereCond_7);

      //获取所有观点的pdf页码
      arrvPdfPageNumObjLst = await vViewpointEx_GetAllVNumObjLstAsync(strPaperId);
      //获取用户缓存；

      const strWhere_User = '1=1';
      const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

      let strhtml = '';
      for (let i = 0; i < arrvPdfPageNumObjLst.length; i++) {
        strhtml += `<div style="font-size:20px; color: #009688; font-weight: bold; margin-bottom:10px;"><a id="PdfNum${arrvPdfPageNumObjLst[i].pdfPageNum}" href="javascript:void(0)" onclick=btnPdfPageNum_Click(${arrvPdfPageNumObjLst[i].pdfPageNum})>pdf第${arrvPdfPageNumObjLst[i].pdfPageNum}页各观点：</a></div>`;
        //个人观点1
        arrvViewpointObjLst1 = arrvViewpointObjLst10.filter(
          (x) => x.pdfPageNum == arrvPdfPageNumObjLst[i].pdfPageNum,
        );
        if (arrvViewpointObjLst1.length > 0) {
          strhtml += await this.BindList_vViewpoint(
            '01',
            arrvViewpointObjLst1,
            arrvRTViewpointRelaObjLst1,
            arrUsers,
          );
        }
        //专家观点2
        arrvViewpointObjLst2 = arrvViewpointObjLst20.filter(
          (x) => x.pdfPageNum == arrvPdfPageNumObjLst[i].pdfPageNum,
        );
        if (arrvViewpointObjLst2.length > 0) {
          strhtml += await this.BindList_vViewpoint(
            '02',
            arrvViewpointObjLst2,
            arrvRTViewpointRelaObjLst2,
            arrUsers,
          );
        }
        //相关概念3
        arrvConceptObjLst = arrvConceptObjLst0.filter(
          (x) => x.pdfPageNum == arrvPdfPageNumObjLst[i].pdfPageNum,
        );
        if (arrvConceptObjLst.length > 0) {
          strhtml += await this.BindList_vConcept(arrvConceptObjLst, arrvRTConceptRelaObjLst);
        }
        //客观事实4
        arrvTopicObjectiveObjLst1 = arrvTopicObjectiveObjLst10.filter(
          (x) => x.pdfPageNum == arrvPdfPageNumObjLst[i].pdfPageNum,
        );
        if (arrvTopicObjectiveObjLst1.length > 0) {
          strhtml += await this.BindList_vTopicObjective(
            '01',
            arrvTopicObjectiveObjLst1,
            arrvRTTopicObjectiveRelaObjLst1,
          );
        }
        //客观数据5
        arrvTopicObjectiveObjLst2 = arrvTopicObjectiveObjLst20.filter(
          (x) => x.pdfPageNum == arrvPdfPageNumObjLst[i].pdfPageNum,
        );
        if (arrvTopicObjectiveObjLst2.length > 0) {
          strhtml += await this.BindList_vTopicObjective(
            '02',
            arrvTopicObjectiveObjLst2,
            arrvRTTopicObjectiveRelaObjLst2,
          );
        }
        //技能6
        arrvSysSkillObjLst = arrvSysSkillObjLst0.filter(
          (x) => x.pdfPageNum == arrvPdfPageNumObjLst[i].pdfPageNum,
        );
        if (arrvSysSkillObjLst.length > 0) {
          strhtml += await this.BindList_vSysSkill(arrvSysSkillObjLst, arrvRTSysSkillObjLst);
        }

        //社会关系7
        arrvSysSocialRelationsObjLst = arrvSysSocialRelationsObjLst0.filter(
          (x) => x.pdfPageNum == arrvPdfPageNumObjLst[i].pdfPageNum,
        );
        if (arrvSysSocialRelationsObjLst.length > 0) {
          strhtml += await this.BindList_vSysSocialRelations(
            arrvSysSocialRelationsObjLst,
            arrvRTSysSocialRelaObjLst,
          );
        }
      }

      $('#div_list').html(strhtml);

      //this.hidSortvViewpointBy = "updDate Desc";
      //ConceptCRUD.sortConceptBy = "updDate Desc";
      //TopicObjectiveCRUD.sortvTopicObjectiveBy = "updDate Desc";
      //this.hidSortvSysSkillBy = "updDate Desc";
      //this.hidSortvSysSocialRelationsBy = "fullName Asc";

      //const responseObjList1 = await this.BindGv_vViewpoint("01");
      //const responseObjList2 = await this.BindGv_vViewpoint("02");
      //const responseObjList3 = await this.BindGv_Concept();
      //const responseObjList4 = await this.BindGv_vTopicObjective("01");
      //const responseObjList5 = await this.BindGv_vTopicObjective("02");
      //const responseObjList6 = await this.BindGv_vSysSkill();
      //const responseObjList7 = await this.BindGv_vSysSocialRelations();

      //strPaperId = $("#ddlPaperId_q").val();//论文
      //strIdCurrEduclsstrPageType = $("#hidPageType").val();//页面参数
      //strIdCurrEduclsstrTopicId = clsPrivateSessionStorage.topicIdInTree;//存放主题Id

      //$("#myTab li a").removeClass();
      //$("#myTabContent div").removeClass();

      //$("#myTab li a").addClass("nav-link");
      //$("#myTabContent div").addClass("tab-pane");
      ////判断页面参数
      //if (strPageType == "01") {
      //    //个人观点
      //    $("#liViewpoint a").addClass(" active");
      //    $("#li_Viewpoint").addClass(" active show");

      //    //$("#ListTitle").html("当前论文相关的个人观点");
      //    this.hidSortvViewpointBy = "updDate Desc";
      //    //$("#ViewpointList").show();
      //    const responseObjList = await this.BindGv_vViewpoint();
      //}
      //else if (strPageType == "02") {
      //    //专家观点
      //    $("#liExpertViewpoint a").addClass(" active");
      //    $("#li_ExpertViewpoint").addClass(" active show");

      //    //$("#ListTitle").html("当前论文相关的专家观点");
      //    this.hidSortvViewpointBy = "updDate Desc";
      //    //$("#ViewpointList").show();
      //    const responseObjList = await this.BindGv_vViewpoint();
      //}
      //else if (strPageType == "03") {
      //    //概念
      //    $("#liConcept a").addClass(" active");
      //    $("#li_Concept").addClass(" active show");
      //    //$("#ListTitle").html("当前论文相关的相关概念");
      //    ConceptCRUD.sortConceptBy = "updDate Desc";
      //    //$("#ConceptList").show();
      //    const responseObjList = await this.BindGv_Concept();
      //}
      //else if (strPageType == "04") {
      //    //客观事实
      //    $("#liObjective a").addClass(" active");
      //    $("#li_Objective").addClass(" active show");
      //    //$("#ListTitle").html("当前论文相关的客观事实");
      //    TopicObjectiveCRUD.sortvTopicObjectiveBy = "updDate Desc";
      //    //$("#ObjectiveList").show();
      //    const responseObjList = await this.BindGv_vTopicObjective();
      //}
      //else if (strPageType == "05") {
      //    //客观数据
      //    $("#liObjectiveBasis a").addClass(" active");
      //    $("#li_ObjectiveBasis").addClass(" active show");
      //    //$("#ListTitle").html("当前论文相关的客观数据");
      //    TopicObjectiveCRUD.sortvTopicObjectiveBy = "updDate Desc";
      //    //$("#ObjectiveList").show();
      //    const responseObjList = await this.BindGv_vTopicObjective();
      //}
      //else if (strPageType == "06") {
      //    //技能
      //    $("#liSysskill a").addClass(" active");
      //    $("#li_Sysskill").addClass(" active show");
      //    //$("#ListTitle").html("当前论文相关的客观数据");
      //    this.hidSortvSysSkillBy = "updDate Desc";
      //    //$("#SysskillList").show();
      //    const responseObjList = await this.BindGv_vSysSkill();
      //}
      //else if (strPageType == "07") {
      //    //社会关系
      //    $("#liSysSocialRela a").addClass(" active");
      //    $("#li_SysSocialRela").addClass(" active show");
      //    this.hidSortvSysSocialRelationsBy = "fullName Asc";
      //    //$("#SysSocialList").show();
      //    await this.BindGv_vSysSocialRelations();
      //}
      //else {
      //}
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //绑定观点html
  public async BindList_vViewpoint(
    strUserTypeId: string,
    arrvViewpointObjLst: Array<clsvViewpointEN>,
    arrvRTViewpointRelaObjLst: Array<clsvRTViewpointRelaEN>,
    arrUsers: Array<clsvUsersSimEN>,
  ): Promise<string> {
    let strTitle = '';
    //判断页面参数
    if (strUserTypeId == '01') {
      strTitle = '个人观点';
    } else if (strUserTypeId == '02') {
      //专家观点
      //$("#ListTitle").html("当前论文相关的专家观点");
      strTitle = '专家观点';
    }
    let strhtml = '';
    //个人观点
    strhtml += '<div class="info" id="infoViewpoint"><div class="title btn-3">';

    strhtml += `<div style="float:left;"><a href="javascript:void(0)" title="当前论文相关${strTitle}">当前论文相关${strTitle}</a></div>`;
    //strhtml += '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加' + strTitle + '" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加' + strTitle + '</button></div>';

    strhtml += '</div><ul class="artlist">';
    let v = 0; //给内容加个序号
    for (let i = 0; i < arrvViewpointObjLst.length; i++) {
      //得到viewpointId；
      // const strViewpointId = arrvViewpointObjLst[i].viewpointId;
      v++;
      strhtml += `<div onclick=btnPdfPageNum_Click(${arrvViewpointObjLst[i].pdfPageNum})>`;
      //strhtml += v + ".观点：" + arrvViewpointObjLst[i].viewpointName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>" + "&nbsp;内容:" + arrvViewpointObjLst[i].viewpointContent + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;" + arrvViewpointObjLst[i].viewpointTypeName + ":" + arrvViewpointObjLst[i].reason + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;所属主题：" + arrvViewpointObjLst[i].topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%></br>";
      strhtml += `<li><span class="rowtit color3">${v}.[观点名称]：</span><span class="abstract-text">${arrvViewpointObjLst[i].viewpointName}</span></li>`;
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[观点内容]：</span><span class="abstract-text">${arrvViewpointObjLst[i].viewpointContent}</span></li>`;
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${arrvViewpointObjLst[i].viewpointTypeName}]：</span><span class="abstract-text">${arrvViewpointObjLst[i].reason}</span></li>`;

      //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：</span>点赞数:' + arrvViewpointObjLst[i].okCount + '&nbsp;&nbsp;';

      ////评论
      //strhtml += '&nbsp;&nbsp;评论数：' + arrvViewpointObjLst[i].appraiseCount;
      ////评分
      //strhtml += '&nbsp;&nbsp;综合评分:' + arrvViewpointObjLst[i].score;
      //strhtml += '&nbsp;&nbsp;教师评分:' + arrvViewpointObjLst[i].teaScore;
      //strhtml += '&nbsp;&nbsp;学生评分:' + arrvViewpointObjLst[i].stuScore;
      const strUserName = await vQxUsersSimStore.getUserName(arrvViewpointObjLst[i].updUser);
      if (strUserName != '') {
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
      }

      strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${arrvViewpointObjLst[i].updDate}`;
      //引用数
      strhtml += `&nbsp;&nbsp;被引用数:${arrvViewpointObjLst[i].citationCount}`;
      strhtml += `&nbsp;&nbsp;页码:${arrvViewpointObjLst[i].pdfPageNum}`;
      const objRTV = arrvRTViewpointRelaObjLst.find(
        (x) => x.viewpointId == arrvViewpointObjLst[i].viewpointId,
      );

      if (objRTV == null) {
        strhtml += '&nbsp;&nbsp;未引用本主题';

        strhtml += `&nbsp;&nbsp;<button title="引用${strTitle}" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkInTab_Click("${arrvViewpointObjLst[i].viewpointId}")> ${clsIcon.faCommentDots}引用该${strTitle}</button>`;
      } else {
        strhtml += '&nbsp;&nbsp;已引用本主题';
      }

      strhtml += '</li>';
      strhtml += '</div>';

      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
    }
    strhtml += '</ul></div>';
    return strhtml;
  }

  //绑定概念HTML
  public async BindList_vConcept(
    arrvConceptObjLst: Array<clsvConceptEN>,
    arrvRTConceptRelaObjLst: Array<clsvRTConceptRelaEN>,
  ): Promise<string> {
    let strhtml = '';
    //相关概念
    strhtml += '<div class="info" id="infoConcept"><div class="title btn-4">';

    strhtml +=
      '<div style="float:left;"><a href="javascript:void(0)" title="当前论文相关概念">当前论文相关概念</a></div>';
    //strhtml += '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加相关概念" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加相关概念</button></div>';

    strhtml += '</div><ul class="artlist">';
    let v = 0; //给内容加个序号
    for (let i = 0; i < arrvConceptObjLst.length; i++) {
      //得到viewpointId；
      // const strConceptId = arrvConceptObjLst[i].conceptId;
      v++;
      strhtml += `<li><span class="rowtit color4">${v}.[概念]：</span><span class="abstract-text">${arrvConceptObjLst[i].conceptName}</span></li>`;
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[内容]：</span><span class="abstract-text">${arrvConceptObjLst[i].conceptContent}</span></li>`;

      const strUserName = await vQxUsersSimStore.getUserName(arrvConceptObjLst[i].updUser);
      if (strUserName != '') {
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
      }
      //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>' + arrvConceptObjLst[i].userName;
      strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${arrvConceptObjLst[i].updDate}`;
      //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：';

      ////评论
      //strhtml += '&nbsp;&nbsp;评论数:' + arrvConceptObjLst[i].appraiseCount;
      ////评分
      //strhtml += '&nbsp;&nbsp;综合评分:' + arrvConceptObjLst[i].score + '';
      //strhtml += '&nbsp;&nbsp;教师评分:' + arrvConceptObjLst[i].teaScore + '';
      //strhtml += '&nbsp;&nbsp;学生评分:' + arrvConceptObjLst[i].stuScore + '';

      //引用数
      strhtml += `&nbsp;&nbsp;被引用数:${arrvConceptObjLst[i].citationCount}`;
      strhtml += `&nbsp;&nbsp;页码:${arrvConceptObjLst[i].pdfPageNum}`;
      const objRTC = arrvRTConceptRelaObjLst.find(
        (x) => x.conceptId == arrvConceptObjLst[i].conceptId,
      );
      let strStata;
      if (objRTC == null) {
        strhtml += '&nbsp;&nbsp;未引用本主题';
        strStata = 1;
        strhtml += `&nbsp;&nbsp;<button title="引用该相关概念" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkConceptInTab_Click("${arrvConceptObjLst[i].conceptId}",${strStata})> ${clsIcon.faCommentDots}引用该相关概念</button>`;
      } else {
        strhtml += '&nbsp;&nbsp;已引用本主题';
        strStata = 2;
      }

      strhtml += '</li>';

      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
    }
    strhtml += '</ul></div>';

    //拼接；
    //$("#divConceptDataLst").html(strhtml);

    return strhtml;
  }

  //绑定客观HTML
  public async BindList_vTopicObjective(
    strObjectiveTypeId: string,
    arrvTopicObjectiveObjLst: Array<clsvTopicObjectiveEN>,
    arrvRTTopicObjectiveRelaObjLst: Array<clsvRTTopicObjectiveRelaEN>,
  ): Promise<string> {
    const strWhere_User = '1=1';

    let strTitle = '';
    //判断页面参数
    if (strObjectiveTypeId == '01') {
      strTitle = '客观事实';
    } else if (strObjectiveTypeId == '02') {
      //专家观点
      //$("#ListTitle").html("当前论文相关的专家观点");
      strTitle = '客观数据';
    }
    let strhtml = '';
    //个人观点
    strhtml += '<div class="info" id="infoFacts"><div class="title btn-5">';
    strhtml += `<div style="float:left;"><a href="javascript:void(0)" title="当前论文相关${strTitle}">当前论文相关${strTitle}</a></div>`;
    //strhtml += '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加' + strTitle + '" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加' + strTitle + '</button></div>';

    strhtml += '</div><ul class="artlist">';
    let v = 0; //给内容加个序号
    for (let i = 0; i < arrvTopicObjectiveObjLst.length; i++) {
      //得到viewpointId；
      // const strTopicObjectiveId = arrvTopicObjectiveObjLst[i].topicObjectiveId;
      v++;
      strhtml += `<li><span class="rowtit color6">${v}.[标题]：</span><span class="abstract-text">${arrvTopicObjectiveObjLst[i].objectiveName}</span></li>`;
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[内容]：</span><span class="abstract-text">${arrvTopicObjectiveObjLst[i].objectiveContent}</span></li>`;
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[推论]：</span><span class="abstract-text">${arrvTopicObjectiveObjLst[i].conclusion}</span></li>`;
      //获取用户名；

      const strUserName = await vQxUsersSimStore.getUserName(arrvTopicObjectiveObjLst[i].updUser);
      if (strUserName != '') {
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
      }

      strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${arrvTopicObjectiveObjLst[i].updDate}`;
      //引用数
      strhtml += `&nbsp;&nbsp;被引用数:${arrvTopicObjectiveObjLst[i].citationCount}`;
      strhtml += `&nbsp;&nbsp;页码:${arrvTopicObjectiveObjLst[i].pdfPageNum}`;
      const objRTT = arrvRTTopicObjectiveRelaObjLst.find(
        (x) => x.topicObjectiveId == arrvTopicObjectiveObjLst[i].topicObjectiveId,
      );

      if (objRTT == null) {
        strhtml += '&nbsp;&nbsp;未引用本主题';
        strhtml += `&nbsp;&nbsp;<button title="引用该${strTitle}" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkObjectiveInTab_Click("${arrvTopicObjectiveObjLst[i].topicObjectiveId}") > ${clsIcon.faCommentDots}引用该${strTitle}</button>`;
      } else {
        strhtml += '&nbsp;&nbsp;已引用本主题';
      }
      strhtml += '</li>';
      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
    }
    strhtml += '</ul></div>';

    return strhtml;
  }

  //绑定技能HTML
  public async BindList_vSysSkill(
    arrvSysSkillObjLst: Array<clsvSysSkillEN>,
    arrvRTSysSkillObjLst: Array<clsvRTSysSkillRelaEN>,
  ): Promise<string> {
    let strhtml = '';
    //相关技能
    strhtml += '<div class="info" id="infoConcept"><div class="title btn-4">';

    strhtml +=
      '<div style="float:left;"><a href="javascript:void(0)" title="当前论文相关技能">当前论文相关技能</a></div>';
    //strhtml += '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加相关技能" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加相关技能</button></div>';

    strhtml += '</div><ul class="artlist">';
    let v = 0; //给内容加个序号
    for (let i = 0; i < arrvSysSkillObjLst.length; i++) {
      //得到skillId；
      // const strSkillId = arrvSysSkillObjLst[i].skillId;
      v++;
      strhtml += `<li><span class="rowtit color4">${v}.[技能]：</span><span class="abstract-text">${arrvSysSkillObjLst[i].skillName}</span></li>`;
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[实施过程]：</span><span class="abstract-text">${arrvSysSkillObjLst[i].process}</span></li>`;
      //获取用户名；

      const strUserName = await vQxUsersSimStore.getUserName(arrvSysSkillObjLst[i].updUser);
      if (strUserName != '') {
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑用户]：</span>${strUserName}`;
      }
      strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${arrvSysSkillObjLst[i].updDate}`;
      //引用数
      strhtml += `&nbsp;&nbsp;被引用数:${arrvSysSkillObjLst[i].citationCount}`;
      strhtml += `&nbsp;&nbsp;页码:${arrvSysSkillObjLst[i].pdfPageNum}`;
      const objRTC = arrvRTSysSkillObjLst.find((x) => x.skillId == arrvSysSkillObjLst[i].skillId);
      let strStata;
      if (objRTC == null) {
        strhtml += '&nbsp;&nbsp;未引用本主题';
        strStata = 1;
        strhtml += `&nbsp;&nbsp;<button title="引用该相关技能" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkSysskillInTab_Click("${arrvSysSkillObjLst[i].skillId}",${strStata})> ${clsIcon.faCommentDots}引用该相关技能</button>`;
      } else {
        strhtml += '&nbsp;&nbsp;已引用本主题';
        strStata = 2;
      }
      strhtml += '</li>';
      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
    }
    strhtml += '</ul></div>';
    return strhtml;
  }

  //绑定社会关系HTML
  public async BindList_vSysSocialRelations(
    arrvSysSocialRelationsObjLst: Array<clsvSysSocialRelationsEN>,
    arrvRTSysSocialRelaObjLst: Array<clsvRTSysSocialRelaEN>,
  ): Promise<string> {
    let strhtml = '';
    //社会关系
    strhtml += '<div class="info" id="infoConcept"><div class="title btn-3">';

    strhtml +=
      '<div style="float:left;"><a href="javascript:void(0)" title="当前论文社会关系">当前论文社会关系</a></div>';
    //strhtml += '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加社会关系" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加社会关系</button></div>';

    strhtml += '</div><ul class="artlist">';
    let v = 0; //给内容加个序号
    for (let i = 0; i < arrvSysSocialRelationsObjLst.length; i++) {
      //得到socialId；
      // const strSocialId = arrvSysSocialRelationsObjLst[i].socialId;
      v++;
      strhtml += `<li><span class="rowtit color3">${v}.[姓名]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].fullName}</span>`;

      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[国籍]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].nationality}</span>`;
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[工作单位]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].workUnit}</span>`;
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[专业]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].major}</span></li>`;
      strhtml += `<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[成就]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].achievement}</span></li>`;
      strhtml += `<li><span class="rowtit color3">[详细说明]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].detailedDescription}</span></li>`;
      //获取用户名；
      const strUserName = await vQxUsersSimStore.getUserName(
        arrvSysSocialRelationsObjLst[i].updUser,
      );
      if (strUserName != '') {
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
      }

      strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${arrvSysSocialRelationsObjLst[i].updDate}`;
      //引用数
      strhtml += `&nbsp;&nbsp;被引用数:${arrvSysSocialRelationsObjLst[i].citationCount}`;
      strhtml += `&nbsp;&nbsp;页码:${arrvSysSocialRelationsObjLst[i].pdfPageNum}`;
      const objRTC = arrvRTSysSocialRelaObjLst.find(
        (x) => x.subViewpointId.toString() == arrvSysSocialRelationsObjLst[i].socialId,
      );
      let strStata;
      if (objRTC == null) {
        strStata = 1;
        strhtml += '&nbsp;&nbsp;未引用本主题';
        strhtml += `&nbsp;&nbsp;<button title="引用该相关技能" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkSyssocialInTab_Click("${arrvSysSocialRelationsObjLst[i].socialId}",${strStata})> ${clsIcon.faCommentDots}引用该社会关系</button>`;
      } else {
        strStata = 2;
        strhtml += '&nbsp;&nbsp;已引用本主题';
      }
      strhtml += '</li>';
      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
    }
    strhtml += '</ul></div>';
    return strhtml;
  }

  //绑定各个类型页面
  public async BindPage() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      //clsPrjInfoEN objPrjInfo = clsPrjInfoBL.GetObjByPrjID_Cache(strPrjId);

      const strPaperId = GetSelectValueInDivObj(divName, 'ddlPaperId_q'); //论文

      //strIdCurrEduclsstrPageType = $("#hidPageType").val();//页面参数1
      const strPageType = GetSelectValueInDivObj(divName, 'ddlVTypeId'); //页面参数2

      const strTopicId = clsPrivateSessionStorage.topicIdInTree; //存放主题Id

      const strPdfPageNum = GetInputValueInDivObj(divName, 'hidPdfPageNum'); //pdf页码

      const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls; //教学班

      let strhtml = '';
      //判断页面参数
      if (strPageType == '01') {
        //个人观点
        strhtml = `<iframe src='../GradEduPublicPage/AddViewpoint?paperId=${strPaperId}&userTypeId=01&topicId=${strTopicId}&pdfPageNum=${strPdfPageNum}&IdCurrEduCls=${strIdCurrEduCls}' style="height:100%;width:99%; min-height:750px;"></iframe>`;
        $('#div_page').html(strhtml);
      } else if (strPageType == '02') {
        //专家观点
        strhtml = `<iframe src='../GradEduPublicPage/AddViewpoint?paperId=${strPaperId}&userTypeId=02&topicId=${strTopicId}&pdfPageNum=${strPdfPageNum}&IdCurrEduCls=${strIdCurrEduCls}' style="height:100%;width:99%; min-height:750px;"></iframe>`;
        $('#div_page').html(strhtml);
      } else if (strPageType == '03') {
        //概念
        strhtml = `<iframe src=' ../GradEduPublicPage/AddConcept?paperId=${strPaperId}&topicId=${strTopicId}&pdfPageNum=${strPdfPageNum}&IdCurrEduCls=${strIdCurrEduCls}' style="height:100%;width:99%; min-height:750px;"></iframe>`;
        $('#div_page').html(strhtml);
      } else if (strPageType == '04') {
        //客观事实
        strhtml = `<iframe src='../GradEduPublicPage/AddObjectiveFact?paperId=${strPaperId}&ObjectiveTypeId=01&topicId=${strTopicId}&pdfPageNum=${strPdfPageNum}&IdCurrEduCls=${strIdCurrEduCls}' style="height:100%;width:99%; min-height:750px;"></iframe>`;
        $('#div_page').html(strhtml);
      } else if (strPageType == '05') {
        //客观数据
        strhtml = `<iframe src='../GradEduPublicPage/AddObjectiveFact?paperId=${strPaperId}&ObjectiveTypeId=02&topicId=${strTopicId}&pdfPageNum=${strPdfPageNum}&IdCurrEduCls=${strIdCurrEduCls}' style="height:100%;width:99%; min-height:750px;"></iframe>`;
        $('#div_page').html(strhtml);
      } else if (strPageType == '06') {
        //技能
        strhtml = '';
        strhtml = `<iframe src='../GradEduPublicPage/AddSysskill?paperId=${strPaperId}&topicId=${strTopicId}&pdfPageNum=${strPdfPageNum}&IdCurrEduCls=${strIdCurrEduCls}' style="height:100%;width:99%; min-height:750px;"></iframe>`;
        $('#div_page').html(strhtml);
      } else if (strPageType == '07') {
        //社会关系
        strhtml = '';
        strhtml = `<iframe src='../GradEduPublicPage/AddSysSocialRelations?paperId=${strPaperId}&topicId=${strTopicId}&pdfPageNum=${strPdfPageNum}&IdCurrEduCls=${strIdCurrEduCls}' style="height:100%;width:99%; min-height:750px;"></iframe>`;
        $('#div_page').html(strhtml);
      }
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //////////////////////////////////////////////////////////////////个人观点部分///////////////////////////////////////////////////////////////////
  /* 把所有的查询控件内容组合成一个条件串
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
       <returns>条件串(strWhereCond)</returns>
     */
  public async CombinevViewpointCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //根据传入的usertypeId 来区分是本人观点还是专家观点
      const strhidUserTypeId = GetInputValueInDivObj(divName, 'hidUserTypeId');
      if (strhidUserTypeId != '') {
        strWhereCond += ` And ${clsvViewpointEN.con_UserTypeId} = '${strhidUserTypeId}'`;
      }
      const strPaperId = GetSelectValueInDivObj(divName, 'ddlPaperId_q');
      if (strPaperId != '0') {
        strWhereCond += ` And ${clsvViewpointEN.con_CitationId} = '${strPaperId}'`;
      }

      //只能查询提交的观点数据
      //strWhereCond += ` And ${clsvViewpointEN.con_IsSubmit} = 'true'`;

      //排除获取已存在的关系数据 根据当前用户；
      //strWhereCond += ` And viewpointId not in (select viewpointId from RTViewpointRela where topicId = '${strTopicId}')`;
      //strWhereCond += ` And viewpointId not in (select viewpointId from RTViewpointRela where topicId = '${strTopicId}' And updUser = '${strUserId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
 */
  public async BindGv_vViewpoint_pyf(strUserTypeId: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // const divName = this.getDivName(enumDivType.LayOut_01);
    $('#hidUserTypeId').val(strUserTypeId);
    // const strListDiv: string = this.mstrListDivViewpoint;
    const strWhereCond = await this.CombinevViewpointCondition();
    const strWhereCond2 = `1=1 and userTypeId='${strUserTypeId}' and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvViewpointObjLst: Array<clsvViewpointEN> = [];
    let arrvRTViewpointRelaObjLst: Array<clsvRTViewpointRelaEN> = [];

    try {
      this.recCount = await vViewpoint_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvViewpointBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      await vViewpoint_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
        arrvViewpointObjLst = <Array<clsvViewpointEN>>jsonData;
      });

      arrvRTViewpointRelaObjLst = await vRTViewpointRela_GetObjLstAsync(strWhereCond2);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    //if (arrvViewpointObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    try {
      // const strPageType = GetInputValueInDivObj(divName, 'hidPageType'); //页面参数
      let strTitle = '';
      //判断页面参数
      if (strUserTypeId == '01') {
        strTitle = '个人观点';
      } else if (strUserTypeId == '02') {
        //专家观点
        //$("#ListTitle").html("当前论文相关的专家观点");
        strTitle = '专家观点';
      }
      let strhtml = '';
      //个人观点
      strhtml += '<div class="info" id="infoViewpoint"><div class="title btn-3">';

      strhtml += `<div style="float:left;"><a href="javascript:void(0)" title="当前论文相关${strTitle}">当前论文相关${strTitle}</a></div>`;
      strhtml += `<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加${strTitle}" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加${strTitle}</button></div>`;

      strhtml += '</div><ul class="artlist">';
      let v = 0; //给内容加个序号
      for (let i = 0; i < arrvViewpointObjLst.length; i++) {
        //得到viewpointId；
        // const strViewpointId = arrvViewpointObjLst[i].viewpointId;
        v++;
        //strhtml += v + ".观点：" + arrvViewpointObjLst[i].viewpointName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>" + "&nbsp;内容:" + arrvViewpointObjLst[i].viewpointContent + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;" + arrvViewpointObjLst[i].viewpointTypeName + ":" + arrvViewpointObjLst[i].reason + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;所属主题：" + arrvViewpointObjLst[i].topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%></br>";
        strhtml += `<li><span class="rowtit color3">${v}.[观点名称]：</span><span class="abstract-text">${arrvViewpointObjLst[i].viewpointName}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[观点内容]：</span><span class="abstract-text">${arrvViewpointObjLst[i].viewpointContent}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${arrvViewpointObjLst[i].viewpointTypeName}]：</span><span class="abstract-text">${arrvViewpointObjLst[i].reason}</span></li>`;

        //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：</span>点赞数:' + arrvViewpointObjLst[i].okCount + '&nbsp;&nbsp;';

        ////评论
        //strhtml += '&nbsp;&nbsp;评论数：' + arrvViewpointObjLst[i].appraiseCount;
        ////评分
        //strhtml += '&nbsp;&nbsp;综合评分:' + arrvViewpointObjLst[i].score;
        //strhtml += '&nbsp;&nbsp;教师评分:' + arrvViewpointObjLst[i].teaScore;
        //strhtml += '&nbsp;&nbsp;学生评分:' + arrvViewpointObjLst[i].stuScore;
        const strUserName = await vQxUsersSimStore.getUserName(arrvViewpointObjLst[i].updUser);
        if (strUserName != '') {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
        }

        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${arrvViewpointObjLst[i].updDate}`;
        //引用数
        strhtml += `&nbsp;&nbsp;被引用数:${arrvViewpointObjLst[i].citationCount}`;

        const objRTV = arrvRTViewpointRelaObjLst.find(
          (x) => x.viewpointId == arrvViewpointObjLst[i].viewpointId,
        );

        if (objRTV == null) {
          strhtml += '&nbsp;&nbsp;未引用本主题';

          strhtml += `&nbsp;&nbsp;<button title="引用${strTitle}" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkInTab_Click("${arrvViewpointObjLst[i].viewpointId}")> ${clsIcon.faCommentDots}引用该${strTitle}</button>`;
        } else {
          strhtml += '&nbsp;&nbsp;已引用本主题';
        }

        strhtml += '</li>';

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //拼接；
      if (strUserTypeId == '01') {
        $('#divViewpointDataLst').html(strhtml);
      } else if (strUserTypeId == '02') {
        //专家观点
        $('#divViewpointDataLst2').html(strhtml);
      }

      if (arrvViewpointObjLst.length > 10) {
        $('#divPager1').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
      //this.BindTab_vViewpoint(strListDiv, arrvViewpointObjLst);
      console.log('完成BindGv_vViewpoint!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:在数据 列表中跳转到某一页 观点列表
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
  <param name = "intPageIndex">页序号</param>
*/
  // public IndexPageOne(intPageIndex: number) {
  //     if (intPageIndex == 0) {
  //         intPageIndex = this.objPager.pageCount;
  //     }
  //     console.log("跳转到" + intPageIndex + "页");
  //     this.setCurrPageIndex(intPageIndex, this.divName4Pager);
  //     this.BindGv_vViewpoint();
  // }

  // /* 观点 个人 专家
  //*/
  // public async SortByViewpoint(strSortByFld: string) {
  //     if (this.hidSortvViewpointBy.indexOf(strSortByFld) >= 0) {
  //         if (this.hidSortvViewpointBy.indexOf("Asc") >= 0) {
  //             this.hidSortvViewpointBy = `${strSortByFld} Desc`;
  //         }
  //         else {
  //             this.hidSortvViewpointBy = `${strSortByFld} Asc`;
  //         }
  //     }
  //     else {
  //         this.hidSortvViewpointBy = `${strSortByFld} Asc`;
  //     }
  //     const responseText2 = await this.BindGv_vViewpoint();
  // }

  //添加观点 展示观点列表数据
  //public async btnAddRela_Click() {
  //    const responseObjList = await this.BindGv_vViewpoint();
  //}
  //确定选择的观点 并添加到关系表中
  public btnOkInTab_Click(strkeyId: string) {
    //存放Id
    $('#hidViewpointId').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSaveViewpointRela();
  }
  /* 添加新记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 */
  public async AddNewRecordSaveViewpointRela() {
    const divName = this.getDivName(enumDivType.LayOut_01);

    const objRTViewpointRelaEN: clsRTViewpointRelaEN = new clsRTViewpointRelaEN();
    this.PutDataToRTViewpointRelaClass(objRTViewpointRelaEN);

    try {
      //同一用户，同一主题 同一观点 只能添加一次；
      //const strWhere = " 1 = 1 And topicId = '" + strTopicId + "' And viewpointId = '" + strViewpointId + "' And updUser = '" + strUserId + "'";
      ////const strWhere = " 1 = 1 And topicId = '" + strTopicId + "' And viewpointId = '" + strViewpointId + "'";
      //const responseText = await RTViewpointRela_IsExistRecordAsync(strWhere);
      //strIdCurrEduclsbolIsExist: boolean = responseText;
      //if (bolIsExist == true) {
      //    strIdCurrEduclsstrMsg: string = `同一主题不能重复添加同一个观点！`;
      //    alert(strMsg);
      //    return responseText;//一定要有一个返回值，否则会出错！
      //}

      const responseText2 = await RTViewpointRela_AddNewRecordAsync(objRTViewpointRelaEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加成功!`;

        //HideDialogTwo();
        //显示信息框
        alert(strInfo);
        $('#div_list').show();
        $('#div_page').hide();
        if (GetSelectValueInDivObj(divName, 'ddlVTypeId') == '01') {
          this.BindGv_vViewpoint_pyf('01');
        } else {
          this.BindGv_vViewpoint_pyf('02');
        }

        CloseWindow_();
        //CloseWindow();
        //绑定专家关系列表；

        //this.BindGv_vRTExpertViewpointRela();
        //主题Id
        // window.location.href = "../GraduateEdu/ResearchTopicAdd?TopicRelaId" + strTopicId;
      } else {
        const strInfo = `添加不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  /* 函数功能:把界面上的属性数据传到类对象中
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   <param name = "pobjRTViewpointRelaEN">数据传输的目的类对象</param>
 */
  public PutDataToRTViewpointRelaClass(pobjRTViewpointRelaEN: clsRTViewpointRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId');
    const strUserId = userStore.getUserId;
    pobjRTViewpointRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTViewpointRelaEN.SetViewpointId(strViewpointId); // 观点Id
    pobjRTViewpointRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTViewpointRelaEN.SetUpdUser(strUserId); // 修改用户Id// 修改用户Id
    //pobjRTViewpointRelaEN.SetMemo(this.memo;// 备注
  }

  ////////////////////////////////////////////////////////////////////////相关概念/////////////////////////////////////////////////////////////
  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombineConceptCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ' 1 = 1 ';
    // const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    // const strConceptId = GetInputValueInDivObj(divName, 'hidConceptId');
    // const strUserId = userStore.getUserId;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.conceptName_q != "") {
      //    strWhereCond += ` And ${clsConceptEN.con_ConceptName} like '%${this.conceptName_q}%'`;
      //    objConcept_Cond.SetCondFldValue(clsConceptEN.con_ConceptName, this.conceptName_q, "like");
      //}

      //if (this.IsSubmit_q == true) {
      //    strWhereCond += ` And ${clsConceptEN.con_IsSubmit} = '1'`;
      //    objConcept_Cond.SetCondFldValue(clsConceptEN.con_IsSubmit, true, "=");
      //}
      //else {
      //    strWhereCond += ` And ${clsConceptEN.con_IsSubmit} = '0'`;
      //    objConcept_Cond.SetCondFldValue(clsConceptEN.con_IsSubmit, false, "=");
      //}
      const strPaperId = GetSelectValueInDivObj(divName, 'ddlPaperId_q');
      if (strPaperId != '0') {
        strWhereCond += ` And ${clsConceptEN.con_CitationId} = '${strPaperId}'`;
      }
      //只能查询提交的概念数据
      //strWhereCond += ` And ${clsConceptEN.con_IsSubmit} = 'true'`;

      //排除获取已存在的关系数据 根据当前用户；
      //strWhereCond += ` And conceptId not in (select conceptId from RTConceptRela where topicId = '${strTopicId}' And updUser = '${strUserId}')`;
      //strWhereCond += ` And conceptId not in (select conceptId from RTConceptRela where topicId = '${strTopicId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineConceptConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv_Cache)
*/
  public async BindGv_Concept() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // const strListDiv: string = this.mstrListDivPaper;
    const strWhereCond = await this.CombineConceptCondition();
    const strWhereCond2 = `1=1 and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
    // strWhereCond = JSON.stringify(objConceptEN_Sim);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvConceptObjLst: Array<clsvConceptEN> = [];
    let arrvRTConceptRelaObjLst: Array<clsvRTConceptRelaEN> = [];

    try {
      //this.recCount = Concept_GetRecCountByCond(objConcept_Cond);
      this.recCount = await vConcept_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: ConceptCRUD.sortConceptBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      //  arrConceptObjLst = Concept_GetObjLstByPagerCache(objPagerPara);
      arrvConceptObjLst = await vConcept_GetObjLstByPagerAsync(objPagerPara);
      arrvRTConceptRelaObjLst = await vRTConceptRela_GetObjLstAsync(strWhereCond2);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrConceptObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=Concept)`;
    //    alert(strMsg);
    //    return;
    //}
    try {
      let strhtml = '';
      //相关概念
      strhtml += '<div class="info" id="infoConcept"><div class="title btn-4">';

      strhtml +=
        '<div style="float:left;"><a href="javascript:void(0)" title="当前论文相关概念">当前论文相关概念</a></div>';
      strhtml +=
        '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加相关概念" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加相关概念</button></div>';

      strhtml += '</div><ul class="artlist">';
      let v = 0; //给内容加个序号
      for (let i = 0; i < arrvConceptObjLst.length; i++) {
        //得到viewpointId；
        // const strConceptId = arrvConceptObjLst[i].conceptId;
        v++;
        strhtml += `<li><span class="rowtit color4">${v}.[概念]：</span><span class="abstract-text">${arrvConceptObjLst[i].conceptName}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[内容]：</span><span class="abstract-text">${arrvConceptObjLst[i].conceptContent}</span></li>`;
        const strUserName = await vQxUsersSimStore.getUserName(arrvConceptObjLst[i].updUser);
        if (strUserName != '') {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
        }
        //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>' + arrvConceptObjLst[i].userName;
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${arrvConceptObjLst[i].updDate}`;
        //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：';

        ////评论
        //strhtml += '&nbsp;&nbsp;评论数:' + arrvConceptObjLst[i].appraiseCount;
        ////评分
        //strhtml += '&nbsp;&nbsp;综合评分:' + arrvConceptObjLst[i].score + '';
        //strhtml += '&nbsp;&nbsp;教师评分:' + arrvConceptObjLst[i].teaScore + '';
        //strhtml += '&nbsp;&nbsp;学生评分:' + arrvConceptObjLst[i].stuScore + '';

        //引用数
        strhtml += `&nbsp;&nbsp;被引用数:${arrvConceptObjLst[i].citationCount}`;

        const objRTC = arrvRTConceptRelaObjLst.find(
          (x) => x.conceptId == arrvConceptObjLst[i].conceptId,
        );
        let strStata;
        if (objRTC == null) {
          strhtml += '&nbsp;&nbsp;未引用本主题';
          strStata = 1;
          strhtml += `&nbsp;&nbsp;<button title="引用该相关概念" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkConceptInTab_Click("${arrvConceptObjLst[i].conceptId}",${strStata})> ${clsIcon.faCommentDots}引用该相关概念</button>`;
        } else {
          strhtml += '&nbsp;&nbsp;已引用本主题';
          strStata = 2;
        }

        strhtml += '</li>';

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //拼接；
      $('#divConceptDataLst').html(strhtml);

      if (arrvConceptObjLst.length > 10) {
        $('#divPager2').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
      //this.BindTab_Concept(strListDiv, arrConceptObjLst);
      console.log('完成BindGv_Concept!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 概念
   */
  public async SortByConcept(strSortByFld: string) {
    if (ConceptCRUD.sortConceptBy.indexOf(strSortByFld) >= 0) {
      if (ConceptCRUD.sortConceptBy.indexOf('Asc') >= 0) {
        ConceptCRUD.sortConceptBy = `${strSortByFld} Desc`;
      } else {
        ConceptCRUD.sortConceptBy = `${strSortByFld} Asc`;
      }
    } else {
      ConceptCRUD.sortConceptBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_Concept();
  }

  //分页数据
  /* 函数功能:在数据 列表中跳转到某一页 观点列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
 <param name = "intPageIndex">页序号</param>
*/
  public IndexPageTwo(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    //this.SetCurrPageIndex(intPageIndex, this.divName4Pager);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_Concept();
  }

  //添加观点 展示观点列表数据
  public async btnAddConceptRela_Click() {
    await this.BindGv_Concept();
  }
  //确定选择的观点 并添加到关系表中
  public btnOkConceptInTab_Click(strkeyId: string) {
    //存放Id
    $('#hidConceptId').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSave2();
  }

  /* 添加新记录，保存函数
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSave2() {
    //this.DivName = "divAddNewRecordSave";
    const objRTConceptRelaEN: clsRTConceptRelaEN = new clsRTConceptRelaEN();
    this.PutDataToRTConceptRelaClass(objRTConceptRelaEN);
    try {
      const responseText2 = await RTConceptRela_AddNewRecordAsync(objRTConceptRelaEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        this.BindGv_Concept();
        $('#div_list').show();
        $('#div_page').hide();

        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
        CloseWindow_();
        //CloseWindow();
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjRTConceptRelaEN">数据传输的目的类对象</param>
   */
  public PutDataToRTConceptRelaClass(pobjRTConceptRelaEN: clsRTConceptRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strConceptId = GetInputValueInDivObj(divName, 'hidConceptId');
    const strUserId = userStore.getUserId;

    pobjRTConceptRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTConceptRelaEN.SetConceptId(strConceptId); // 概念Id
    pobjRTConceptRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTConceptRelaEN.SetUpdUser(strUserId); // 修改用户Id
    //pobjRTConceptRelaEN.SetMemo(this.memo;// 备注
  }

  ///////////////////////////////////////////////////////////////////客观数据事实////////////////////////////////////////////////////////////
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevTopicObjectiveCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.objectiveName_q != "") {
      //    strWhereCond += ` And ${clsvTopicObjectiveEN.con_ObjectiveName} like '%${this.objectiveName_q}%'`;
      //}

      //根据类型来查询；
      //根据传入的hidObjectiveTypeId 来区分是事实或依据
      const strhidObjectvieTypeId = GetInputValueInDivObj(divName, 'hidObjectiveTypeId');
      if (strhidObjectvieTypeId != '') {
        strWhereCond += ` And ${clsvTopicObjectiveEN.con_ObjectiveType} = '${strhidObjectvieTypeId}'`;
      }
      const strPaperId = GetSelectValueInDivObj(divName, 'ddlPaperId_q');
      if (strPaperId != '0') {
        strWhereCond += ` And ${clsvTopicObjectiveEN.con_SourceId} = '${strPaperId}'`;
      }
      //只能查询提交的客观数据
      //strWhereCond += ` And ${clsvTopicObjectiveEN.con_IsSubmit} = 'true'`;

      //排除获取已存在的关系数据 根据当前用户；
      //strWhereCond += ` And topicObjectiveId not in (select topicObjectiveId from vRTTopicObjectiveRela where topicId = '${strTopicId}' And updUser = '${strUserId}')`;
      //strWhereCond += ` And topicObjectiveId not in (select topicObjectiveId from vRTTopicObjectiveRela where topicId = '${strTopicId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineTopicObjectiveCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vTopicObjective(strObjectiveTypeId: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    $('#hidObjectiveTypeId').val(strObjectiveTypeId);
    // const strListDiv: string = this.mstrListDivObjective;
    const strWhereCond = await this.CombinevTopicObjectiveCondition();
    const strWhereCond2 = `1=1 and objectiveType='${strObjectiveTypeId}' and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvTopicObjectiveObjLst: Array<clsvTopicObjectiveEN> = [];
    let arrvRTTopicObjectiveRelaObjLst: Array<clsvRTTopicObjectiveRelaEN> = [];

    try {
      this.recCount = await vTopicObjective_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: TopicObjectiveCRUD.sortvTopicObjectiveBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvTopicObjectiveObjLst = await vTopicObjective_GetObjLstByPagerAsync(objPagerPara);

      arrvRTTopicObjectiveRelaObjLst = await vRTTopicObjectiveRela_GetObjLstAsync(strWhereCond2);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }

    try {
      //strIdCurrEduclsstrPageType = $("#hidPageType").val();//页面参数
      let strTitle = '';
      //判断页面参数
      if (strObjectiveTypeId == '01') {
        strTitle = '客观事实';
      } else if (strObjectiveTypeId == '02') {
        //专家观点
        //$("#ListTitle").html("当前论文相关的专家观点");
        strTitle = '客观数据';
      }
      let strhtml = '';
      //个人观点
      strhtml += '<div class="info" id="infoFacts"><div class="title btn-5">';

      strhtml += `<div style="float:left;"><a href="javascript:void(0)" title="当前论文相关${strTitle}">当前论文相关${strTitle}</a></div>`;
      strhtml += `<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加${strTitle}" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加${strTitle}</button></div>`;

      strhtml += '</div><ul class="artlist">';
      let v = 0; //给内容加个序号
      for (let i = 0; i < arrvTopicObjectiveObjLst.length; i++) {
        //得到viewpointId；
        // const strTopicObjectiveId = arrvTopicObjectiveObjLst[i].topicObjectiveId;
        v++;
        //strhtml += v + ".观点：" + arrvViewpointObjLst[i].viewpointName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>" + "&nbsp;内容:" + arrvViewpointObjLst[i].viewpointContent + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;" + arrvViewpointObjLst[i].viewpointTypeName + ":" + arrvViewpointObjLst[i].reason + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;所属主题：" + arrvViewpointObjLst[i].topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%></br>";
        strhtml += `<li><span class="rowtit color6">${v}.[标题]：</span><span class="abstract-text">${arrvTopicObjectiveObjLst[i].objectiveName}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[内容]：</span><span class="abstract-text">${arrvTopicObjectiveObjLst[i].objectiveContent}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[推论]：</span><span class="abstract-text">${arrvTopicObjectiveObjLst[i].conclusion}</span></li>`;
        //获取用户名；
        const strUserName = await vQxUsersSimStore.getUserName(arrvTopicObjectiveObjLst[i].updUser);
        if (strUserName != '') {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
        }

        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${arrvTopicObjectiveObjLst[i].updDate}`;

        //引用数
        strhtml += `&nbsp;&nbsp;被引用数:${arrvTopicObjectiveObjLst[i].citationCount}`;

        const objRTT = arrvRTTopicObjectiveRelaObjLst.find(
          (x) => x.topicObjectiveId == arrvTopicObjectiveObjLst[i].topicObjectiveId,
        );

        if (objRTT == null) {
          strhtml += '&nbsp;&nbsp;未引用本主题';
          strhtml += `&nbsp;&nbsp;<button title="引用该${strTitle}" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkObjectiveInTab_Click("${arrvTopicObjectiveObjLst[i].topicObjectiveId}") > ${clsIcon.faCommentDots}引用该${strTitle}</button>`;
        } else {
          strhtml += '&nbsp;&nbsp;已引用本主题';
        }
        strhtml += '</li>';
        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //拼接；
      if (strObjectiveTypeId == '01') {
        $('#divObjectiveDataLst').html(strhtml);
      } else if (strObjectiveTypeId == '02') {
        //专家观点
        $('#divObjectiveDataLst2').html(strhtml);
      }

      if (arrvTopicObjectiveObjLst.length > 10) {
        $('#divPager3').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
      console.log('完成BindGv_vTopicObjective!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //客观查询按钮
  //public async btnQueryObjective_Click() {
  //    //查询客观列表
  //    const responseObjList = await this.BindGv_vTopicObjective();
  //}
  //分页数据
  /* 函数功能:在数据 列表中跳转到某一页 观点列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
 <param name = "intPageIndex">页序号</param>
*/
  //public IndexPageThree(intPageIndex: number) {
  //    if (intPageIndex == 0) {
  //        intPageIndex = this.objPager.pageCount;
  //    }
  //    console.log("跳转到" + intPageIndex + "页");
  //    this.setCurrPageIndex(intPageIndex, this.divName4Pager);
  //    this.BindGv_vTopicObjective();
  //}

  //添加客观关系弹出客观列表按钮
  //public async btnAddTopicObjectiveRela_Click() {

  //    const responseObjList = await this.BindGv_vTopicObjective();
  //}

  //确定选择的客观观点 并添加到关系表中
  public btnOkObjectiveInTab_Click(strkeyId: string) {
    //存放Id
    $('#hidObjectiveId').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSave3();
  }
  /* 添加新记录，保存函数
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSave3() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //this.DivName = "divAddNewRecordSave";
    const objRTTopicObjectiveRelaEN: clsRTTopicObjectiveRelaEN = new clsRTTopicObjectiveRelaEN();
    this.PutDataToRTTopicObjectiveRelaClass(objRTTopicObjectiveRelaEN);
    try {
      const responseText2 = await RTTopicObjectiveRela_AddNewRecordAsync(objRTTopicObjectiveRelaEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加记录成功!`;
        $('#div_list').show();
        $('#div_page').hide();

        if (GetSelectValueInDivObj(divName, 'ddlVTypeId') == '04') {
          this.BindGv_vTopicObjective('01');
        } else if (GetSelectValueInDivObj(divName, 'ddlVTypeId') == '05') {
          this.BindGv_vTopicObjective('02');
        }

        //显示信息框
        alert(strInfo);
        CloseWindow_();
        //CloseWindow();
        //HideDialogEight();
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjRTTopicObjectiveRelaEN">数据传输的目的类对象</param>
*/
  public PutDataToRTTopicObjectiveRelaClass(pobjRTTopicObjectiveRelaEN: clsRTTopicObjectiveRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strObjectiveId = GetInputValueInDivObj(divName, 'hidObjectiveId');
    const strUserId = userStore.getUserId;

    pobjRTTopicObjectiveRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTTopicObjectiveRelaEN.SetTopicObjectiveId(strObjectiveId); // 客观Id
    pobjRTTopicObjectiveRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTTopicObjectiveRelaEN.SetUpdUser(strUserId); // 修改人
    //pobjRTTopicObjectiveRelaEN.SetMemo(this.memo;// 备注
  }

  //public async SortByObjectiveFact(strSortByFld: string) {
  //    if (TopicObjectiveCRUD.sortvTopicObjectiveBy.indexOf(strSortByFld) >= 0) {
  //        if (TopicObjectiveCRUD.sortvTopicObjectiveBy.indexOf("Asc") >= 0) {
  //            TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Desc`;
  //        }
  //        else {
  //            TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Asc`;
  //        }
  //    }
  //    else {
  //        TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Asc`;
  //    }
  //    await this.BindGv_vTopicObjective();
  //}

  //////////////////////////////////////////////////////////////////////////////////////技能、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvSysSkillBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvSysSkillBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvSysSkillBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvSysSkillBy');
  }

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevSysSkillCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      const strPaperId = GetSelectValueInDivObj(divName, 'ddlPaperId_q');
      if (strPaperId != '0') {
        strWhereCond += ` And ${clsvSysSkillEN.con_CitationId} = '${strPaperId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysSkillCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vSysSkill() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    //  strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    const strWhereCond = await this.CombinevSysSkillCondition();
    const strWhereCond2 = `1=1 and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvSysSkillObjLst: Array<clsvSysSkillEN> = [];

    let arrvRTSysSkillObjLst: Array<clsvRTSysSkillRelaEN> = [];

    try {
      this.recCount = await vSysSkill_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvSysSkillBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvSysSkillObjLst = await vSysSkill_GetObjLstByPagerAsync(objPagerPara);
      arrvRTSysSkillObjLst = await vRTSysSkillRela_GetObjLstAsync(strWhereCond2);

      let strhtml = '';
      //相关技能
      strhtml += '<div class="info" id="infoConcept"><div class="title btn-4">';

      strhtml +=
        '<div style="float:left;"><a href="javascript:void(0)" title="当前论文相关技能">当前论文相关技能</a></div>';
      strhtml +=
        '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加相关技能" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加相关技能</button></div>';

      strhtml += '</div><ul class="artlist">';
      let v = 0; //给内容加个序号
      for (let i = 0; i < arrvSysSkillObjLst.length; i++) {
        //得到skillId；
        // const strSkillId = arrvSysSkillObjLst[i].skillId;
        v++;
        strhtml += `<li><span class="rowtit color4">${v}.[技能]：</span><span class="abstract-text">${arrvSysSkillObjLst[i].skillName}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[实施过程]：</span><span class="abstract-text">${arrvSysSkillObjLst[i].process}</span></li>`;

        //获取用户名称；根据id；
        let arrUsers: Array<clsUsersEN> = await Users_GetObjLstAsync('1=1');
        //获取用户名；
        arrUsers = arrUsers.filter((x) => x.userId == arrvSysSkillObjLst[i].updUser); //专家观点；

        for (let j = 0; j < arrUsers.length; j++) {
          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[用户]：</span><span class="abstract-text">${arrUsers[j].userName}</span>`;
          break;
        }

        //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>' + arrvSysSkillObjLst[i].userName;
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${arrvSysSkillObjLst[i].updDate}`;
        //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：';

        ////评论
        //strhtml += '&nbsp;&nbsp;评论数:' + arrvConceptObjLst[i].appraiseCount;
        ////评分
        //strhtml += '&nbsp;&nbsp;综合评分:' + arrvConceptObjLst[i].score + '';
        //strhtml += '&nbsp;&nbsp;教师评分:' + arrvConceptObjLst[i].teaScore + '';
        //strhtml += '&nbsp;&nbsp;学生评分:' + arrvConceptObjLst[i].stuScore + '';

        //引用数
        strhtml += `&nbsp;&nbsp;被引用数:${arrvSysSkillObjLst[i].citationCount}`;

        const objRTC = arrvRTSysSkillObjLst.find((x) => x.skillId == arrvSysSkillObjLst[i].skillId);
        let strStata;
        if (objRTC == null) {
          strhtml += '&nbsp;&nbsp;未引用本主题';
          strStata = 1;
          strhtml += `&nbsp;&nbsp;<button title="引用该相关技能" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkSysskillInTab_Click("${arrvSysSkillObjLst[i].skillId}",${strStata})> ${clsIcon.faCommentDots}引用该相关技能</button>`;
        } else {
          strhtml += '&nbsp;&nbsp;已引用本主题';
          strStata = 2;
        }

        strhtml += '</li>';

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //拼接；
      $('#divSysskillDataLst').html(strhtml);

      if (this.recCount >= 10) {
        $('#divPager').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
  }

  //确定选择的观点 并添加到关系表中
  public btnOkSysskillInTab_Click(strkeyId: string) {
    //存放Id
    $('#hidSkillId').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSaveRtSysskill();
  }
  /* 函数功能:把界面上的属性数据传到类对象中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
<param name = "pobjRTSysSkillRelaEN">数据传输的目的类对象</param>
*/
  public PutDataToRTSysSkillRelaClass(pobjRTSysSkillRelaEN: clsRTSysSkillRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strUserId = userStore.getUserId;
    const strSkillId = GetInputValueInDivObj(divName, 'hidSkillId');
    pobjRTSysSkillRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTSysSkillRelaEN.SetSkillId(strSkillId); // 技能Id
    pobjRTSysSkillRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTSysSkillRelaEN.SetUpdUser(strUserId);
    pobjRTSysSkillRelaEN.SetMemo('pdf添加模块'); // 备注
  }

  /* 添加新记录，保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSaveRtSysskill() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.AddNewRecordSaveRtSysskill.name;
    // this.DivName = "divAddNewRecordSave";
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strSkillId = GetInputValueInDivObj(divName, 'hidSkillId');
    const strUserId = userStore.getUserId;
    const objRTSysSkillRelaEN: clsRTSysSkillRelaEN = new clsRTSysSkillRelaEN();
    this.PutDataToRTSysSkillRelaClass(objRTSysSkillRelaEN);
    try {
      //同一用户，同一主题 同一技能 只能添加一次；
      const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And skillId = '${strSkillId}' And updUser = '${strUserId}'`;
      const responseText = await RTSysSkillRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一主题同一个用户不能重复添加同一个技能！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      } else {
        const responseText2 = await RTSysSkillRela_AddNewRecordAsync(objRTSysSkillRelaEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          const strInfo = `添加记录成功!`;

          //根据ID获取最大数；
          const strWhereCond2 = ` 1 =1 and skillId=${strSkillId}`;
          const intCitationCount = await RTSysSkillRela_GetRecCountByCondAsync(strWhereCond2);

          const objSysSkillEN: clsSysSkillEN = new clsSysSkillEN();
          objSysSkillEN.SetSkillId(strSkillId);
          objSysSkillEN.SetCitationCount(intCitationCount);

          objSysSkillEN.sfUpdFldSetStr = objSysSkillEN.updFldString; //设置哪些字段被修改(脏字段)
          if (objSysSkillEN.skillId == '' || objSysSkillEN.skillId == undefined) {
            throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
          }

          await SysSkill_UpdateRecordAsync(objSysSkillEN).then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == false) {
              const strInfo = `操作不成功!`;
              alert(strInfo);
              console.log('操作不成功');
            }
          });

          //显示信息框
          alert(strInfo);
          //HideDialogNine();
        } else {
          const strInfo = `添加记录不成功!`;

          //显示信息框
          alert(strInfo);
        }
      }
      return responseText; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }

  ////////////////////////////////////////////////////////////////////////社会关系----------------、、、、、、、、、、、////////////////////////////
  /* 根据条件获取相应的对象列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vSysSocialRelations() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    const strWhereCond = await this.CombinevSysSocialRelationsCondition();
    const strWhereCond2 = `1=1 and topicId='${clsPrivateSessionStorage.topicIdInTree}'`;
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvSysSocialRelationsObjLst: Array<clsvSysSocialRelationsEN> = [];
    let arrvRTSysSocialRelaObjLst: Array<clsvRTSysSocialRelaEN> = [];
    try {
      this.recCount = await vSysSocialRelations_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvSysSocialRelationsBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvSysSocialRelationsObjLst = await vSysSocialRelations_GetObjLstByPagerAsync(objPagerPara);

      arrvRTSysSocialRelaObjLst = await vRTSysSocialRela_GetObjLstAsync(strWhereCond2);

      let strhtml = '';
      //社会关系
      strhtml += '<div class="info" id="infoConcept"><div class="title btn-3">';

      strhtml +=
        '<div style="float:left;"><a href="javascript:void(0)" title="当前论文社会关系">当前论文社会关系</a></div>';
      strhtml +=
        '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加社会关系" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加社会关系</button></div>';

      strhtml += '</div><ul class="artlist">';
      let v = 0; //给内容加个序号
      for (let i = 0; i < arrvSysSocialRelationsObjLst.length; i++) {
        //得到socialId；
        // const strSocialId = arrvSysSocialRelationsObjLst[i].socialId;
        v++;
        strhtml += `<li><span class="rowtit color3">${v}.[姓名]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].fullName}</span>`;

        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[国籍]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].nationality}</span>`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[工作单位]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].workUnit}</span>`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[专业]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].major}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[成就]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].achievement}</span></li>`;
        strhtml += `<li><span class="rowtit color3">[详细说明]：</span><span class="abstract-text">${arrvSysSocialRelationsObjLst[i].detailedDescription}</span></li>`;

        //获取用户名称；根据id；
        let arrUsers: Array<clsUsersEN> = await Users_GetObjLstAsync('1=1');
        //获取用户名；
        arrUsers = arrUsers.filter((x) => x.userId == arrvSysSocialRelationsObjLst[i].updUser); //专家观点；

        for (let j = 0; j < arrUsers.length; j++) {
          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[用户]：</span><span class="abstract-text">${arrUsers[j].userName}</span>`;
          break;
        }

        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${arrvSysSocialRelationsObjLst[i].updDate}`;

        //引用数
        strhtml += `&nbsp;&nbsp;被引用数:${arrvSysSocialRelationsObjLst[i].citationCount}`;

        const objRTC = arrvRTSysSocialRelaObjLst.find(
          (x) => x.subViewpointId.toString() == arrvSysSocialRelationsObjLst[i].socialId,
        );
        let strStata;
        if (objRTC == null) {
          strhtml += '&nbsp;&nbsp;未引用本主题';
          strStata = 1;
          strhtml += `&nbsp;&nbsp;<button title="引用该相关技能" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkSyssocialInTab_Click("${arrvSysSocialRelationsObjLst[i].socialId}",${strStata})> ${clsIcon.faCommentDots}引用该社会关系</button>`;
        } else {
          strhtml += '&nbsp;&nbsp;已引用本主题';
          strStata = 2;
        }

        strhtml += '</li>';

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //拼接；
      $('#divSysSocialDataLst').html(strhtml);

      if (this.recCount >= 10) {
        $('#divPager').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvSysSocialRelationsObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
    //    alert(strMsg);
    //    return;
    //}
    //try {
    //    this.BindTab_vSysSocialRelations(strListDiv, arrvSysSocialRelationsObjLst);
    //    console.log("完成BindGv_vSysSocialRelations!");
    //}
    //catch (e:any) {
    //    console.error('catch(e)=');
    //    console.error(e);
    //    strIdCurrEduclsstrMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
    //    alert(strMsg);
    //}
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevSysSocialRelationsCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      const strPaperId = GetSelectValueInDivObj(divName, 'ddlPaperId_q');
      if (strPaperId != '0') {
        strWhereCond += ` And ${clsvSysSocialRelationsEN.con_CitationId} = '${strPaperId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysSocialRelationsCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvSysSocialRelationsBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvSysSocialRelationsBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvSysSocialRelationsBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvSysSocialRelationsBy');
  }

  //确定选择的观点 并添加到关系表中
  public btnOkSyssocialInTab_Click(strkeyId: string) {
    //存放Id
    $('#hidSocialId').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSaveRtSyssocial();
  }
  /* 函数功能:把界面上的属性数据传到类对象中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
<param name = "pobjRTSysSkillRelaEN">数据传输的目的类对象</param>
*/
  public PutDataToRTSyssocialRelaClass(pobjRTSysSocialRelaEN: clsRTSysSocialRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strUserId = userStore.getUserId;
    const strSocialId = GetInputValueInDivObj(divName, 'hidSocialId');
    pobjRTSysSocialRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTSysSocialRelaEN.SetSocialId(strSocialId); // 社会Id
    pobjRTSysSocialRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTSysSocialRelaEN.SetUpdUser(strUserId); // 修改人
    pobjRTSysSocialRelaEN.SetMemo('pdf社会关系'); // 备注
  }

  /* 添加新记录，保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSaveRtSyssocial() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.AddNewRecordSaveRtSyssocial.name;

    // this.DivName = "divAddNewRecordSave";
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strSocialId = GetInputValueInDivObj(divName, 'hidSocialId');

    const objRTSysSocialRelaEN: clsRTSysSocialRelaEN = new clsRTSysSocialRelaEN();
    this.PutDataToRTSyssocialRelaClass(objRTSysSocialRelaEN);
    try {
      //同一用户，同一主题 同一技能 只能添加一次；
      //const strWhere = " 1 = 1 And topicId = '" + strTopicId + "' And socialId = '" + strSocialId + "' And updUser = '" + strUserId + "'";
      const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And socialId = '${strSocialId}'`;
      const responseText = await RTSysSocialRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一主题不能重复添加同一个社会关系！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      } else {
        const responseText2 = await RTSysSocialRela_AddNewRecordAsync(objRTSysSocialRelaEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          const strInfo = `添加记录成功!`;

          //根据ID获取最大数；
          const strWhereCond2 = ` 1 =1 and socialId=${strSocialId}`;
          const intCitationCount = await RTSysSocialRela_GetRecCountByCondAsync(strWhereCond2);

          const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
          objSysSocialRelationsEN.SetSocialId(strSocialId);
          objSysSocialRelationsEN.SetCitationCount(intCitationCount);

          objSysSocialRelationsEN.sfUpdFldSetStr = objSysSocialRelationsEN.updFldString; //设置哪些字段被修改(脏字段)
          if (
            objSysSocialRelationsEN.socialId == '' ||
            objSysSocialRelationsEN.socialId == undefined
          ) {
            throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
          }

          await SysSocialRelations_UpdateRecordAsync(objSysSocialRelationsEN).then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == false) {
              const strInfo = `操作不成功!`;
              alert(strInfo);
              console.log('操作不成功');
            }
          });

          //显示信息框
          alert(strInfo);
          //HideDialogNine();
        } else {
          const strInfo = `添加记录不成功!`;

          //显示信息框
          alert(strInfo);
        }
      }
      return responseText; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////

  /*
   * 获取当前页序号
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }
  ////////////////////////////////////////////////观点///////////////////////////////////////////////
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvViewpointBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvViewpointBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvViewpointBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvViewpointBy');
  }

  /////////////////////////////////////////////概念//////////////////////////////////////////////////
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortConceptBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortConceptBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortConceptBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortConceptBy');
  }

  /////////////////////////////////////////////客观//////////////////////////////////////////////////
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvTopicObjectiveBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvTopicObjectiveBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvTopicObjectiveBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvTopicObjectiveBy');
  }
}
