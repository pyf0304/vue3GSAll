import $ from 'jquery';
import { Public_Concept } from '../GradEduPublicPage/Public_Concept';
import { Public_SysSkill } from '../GradEduPublicPage/Public_SysSkill';
import { Public_SysSocialRelations } from '../GradEduPublicPage/Public_SysSocialRelations';
import { Public_TopicObjective } from '../GradEduPublicPage/Public_TopicObjective';
import { Public_Viewpoint } from '../GradEduPublicPage/Public_Viewpoint';
import { Pub_PaperList } from '../GradEduPublicPage/Pub_PaperList';
import { Pub_QxUsersList } from '../GradEduPublicPage/Pub_QxUsersList';
import { Pub_RTPaperRelaList } from '../GradEduPublicPage/Pub_RTPaperRelaList';
import { Pub_RTUserRelaList } from '../GradEduPublicPage/Pub_RTUserRelaList';
import { Pub_RTViewpointRelaList } from '../GradEduPublicPage/Pub_RTViewpointRelaList';
import { Pub_ViewpointList } from '../GradEduPublicPage/Pub_ViewpointList';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { SysCommentEx_AddNewRecordExAsync } from '@/ts/L3ForWApiExShare/GraduateEdu/clsSysCommentExWApi';
import {
  ResearchTopicEx_DelRecordAsyncEx,
  ResearchTopicEx_GetObjExByLastVisitedDate,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { clsViewpointScoreEN } from '@/ts/L0Entity/GraduateEdu/clsViewpointScoreEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsSysCommentEN';
import { clsvSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsvSysCommentEN';
import { clsConceptEN } from '@/ts/L0Entity/GradEduTopic/clsConceptEN';
import { clsgs_ReflectLogEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ReflectLogEN';
import { clsgs_TeacherTaskEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TeacherTaskEN';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import { clsRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointRelaEN';
import { clsSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsSysSkillEN';
import { clsSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsSysSocialRelationsEN';
import { clsTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsTopicObjectiveEN';
import { clsvgs_ResearchPlanEN } from '@/ts/L0Entity/GradEduTopic/clsvgs_ResearchPlanEN';
import { clsViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointEN';
import { clsvRTConceptRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTConceptRelaEN';
import { clsvRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN';

import { clsvRTSysSocialRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTSysSocialRelaEN';
import { clsvRTTopicObjectiveRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTTopicObjectiveRelaEN';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { clsvRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointRelaEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { clsTopicUserRoleEN } from '@/ts/L0Entity/RT_Params/clsTopicUserRoleEN';
import { clsvUsersEN } from '@/ts/L0Entity/UserManage/clsvUsersEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { ViewpointScore_AddNewRecordAsync } from '@/ts/L3ForWApi/GraduateEdu/clsViewpointScoreWApi';
import { vSysComment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsvSysCommentWApi';
import { Concept_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsConceptWApi';
import { gs_ReflectLog_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_ReflectLogWApi';
import { gs_TeacherTask_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_TeacherTaskWApi';
import {
  ResearchTopic_GetObjByTopicIdAsync,
  ResearchTopic_GetObjByTopicIdCache,
  ResearchTopic_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { RTPaperRela_DelRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTPaperRelaWApi';
import { RTUserRela_DelRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTUserRelaWApi';
import {
  RTViewpointRela_AddNewRecordAsync,
  RTViewpointRela_DelRecordAsync,
  RTViewpointRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTViewpointRelaWApi';
import { SysSkill_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsSysSkillWApi';
import { SysSocialRelations_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsSysSocialRelationsWApi';
import { TopicObjective_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsTopicObjectiveWApi';
import { vgs_ResearchPlan_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvgs_ResearchPlanWApi';
import { Viewpoint_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsViewpointWApi';
import { vRTPaperRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTPaperRelaWApi';

import { vRTUserRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import {
  SysVote_AddNewRecordAsync,
  SysVote_GetRecCountByCondAsync,
  SysVote_IsExistRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import { LiteratureType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { TopicUserRole_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsTopicUserRoleWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
  SetDivHtmlInDivObj,
  GetButtonObjLstInDivObjN,
  GetSpanObjLstInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { enumSysVoteType } from '@/ts/L0Entity/RT_Params/clsSysVoteTypeEN';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { ResearchTopicCRUD } from '@/viewsBase/GradEduTopic/ResearchTopicCRUD';
import { enumDivType } from '@/ts/PubFun/enumDivType';

import { clsvRTSysSkillRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTSysSkillRelaEN';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import PaperDetail from '@/views/GradEduEx/PaperDetail';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import { vRTViewpoint_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointWApi';
import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

// declare function HideDialogTwo(): void;
// declare function LoadTreeShow(): void;
// declare function HideDialog3(): void;
// declare function SetFontSize(): void;
// declare function TopicListMenuIsHide(): void;
/* ResearchTopic_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ResearchTopicListEx extends ResearchTopicCRUD {
  public static GetPropValue: (strPropName: string) => string;
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;

  public opType = '';
  public keyId = '';
  public static parentId = '';
  public static divLayout: HTMLDivElement; //界面布局的层对象
  //public static mstrSortResearchTopicBy: string = "topicId";
  //观点列表
  public mstrListDivViewpoint = 'divViewpointDataLst';
  //论文列表
  public mstrListDivPaper = 'divPaperDataLst';
  //用户列表
  public mstrListDivUser = 'divUserDataLst';
  //主题用户关系
  public mstrListDivRtUserRela = 'divRtUserRelaDataLst';
  //主题观点关系
  public mstrListDivRtViewPointRela = 'divRtViewPointRelaDataLst';
  //主题论文关系
  public mstrListDivRtPaperRela = 'divRtPaperRelaDataLst';

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in QxPrjMenusCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPrjMenusCRUDEx');
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
        (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
      */
  public async PageLoad(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //获取用户角色来判断显示不同的列表数据；
        $('#hidUserId').val(userStore.getUserId);
        $('#hidRoleId').val(userStore.getRoleId);

        //管理员 判断角色
        if (GetInputValueInDivObj(divName, 'hidRoleId') == '00620001') {
          $('#btnDelRecord').show();
          $('#tab4Bind tr').find('td:eq(8)').show();
        } else {
          //学生00620003 教师
          $('#btnDelRecord').hide();
          $('#tab4Bind tr').find('td:eq(8)').hide();
        }
        //树列表
        await this.GetTopicData();
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
  //主题用户角色
  /// <summary>
  /// 为下拉框获取数据,从表:[OperationType]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_TopicUserRole_q(ddlTopicUserRole_q: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlTopicUserRole_q);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlTopicUserRole_q} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrTopicUserRoleObjLst = await TopicUserRole_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlTopicUserRole_q,
        arrTopicUserRoleObjLst,
        clsTopicUserRoleEN.con_TopicUserRoleId,
        clsTopicUserRoleEN.con_TopicUserRoleName,
        '',
      );
      console.log('完成BindDdl_TopicUserRole_q!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //得到3个关系列表数据；
  public async GetAllFunctionMethod() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    //组合关系；
    await this.BindGv_AllTopicRela();
    ResearchTopicListEx.vuebtn_Click('TopicListMenuIsHide', '');
    //SetFontSize();
    HideDivInDivObj(divName, 'divLoading');
  }

  //动态主题数据结构；
  public async GetTopicData() {
    const strWhereCond = await this.CombineResearchTopicCondition();
    //声明主题变量
    let arrResearchTopicExObjLst;
    {
      let arrResearchTopicObjLst: Array<clsResearchTopicEN> = [];

      arrResearchTopicObjLst = await ResearchTopic_GetObjLstAsync(strWhereCond);
      arrResearchTopicExObjLst = await ResearchTopicEx_GetObjExByLastVisitedDate(
        arrResearchTopicObjLst,
      );
    }
    let strhtml = '';
    $('#TreeBind li').remove();
    if (arrResearchTopicExObjLst.length > 0) {
      //循环数据
      for (let i = 0; i < arrResearchTopicExObjLst.length; i++) {
        const objResearchTopic = arrResearchTopicExObjLst[i];
        const strSimDate = clsDateTime.GetDate_Sim(objResearchTopic.lastVisitedDate);
        //默认存放第一条数据显示；
        if (i == 0) {
          const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.topicName}`;
          //存放Id
          clsPrivateSessionStorage.topicIdInTree = objResearchTopic.topicId;

          strhtml += `<li id="li${objResearchTopic.topicId}" name="btnSelectResearchTopic" keyId="${strKeyId}"><a href="javascript:void(0)" class="selected">${objResearchTopic.topicName}(${strSimDate})</a></li>`;
        } else {
          const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.topicName}`;
          // onclick=btnSelectResearchTopic("${objResearchTopic.topicId}","${objResearchTopic.topicName}")
          strhtml += `<li id="li${objResearchTopic.topicId}" name="btnSelectResearchTopic" keyId="${strKeyId}" ><a href="javascript:void(0)">${objResearchTopic.topicName}(${strSimDate})</a></li>`;
        }
      }
      $('#TreeBind').append(strhtml);
      this.SetEventForResearchTopic();
      //默认展开树
      ResearchTopicListEx.vuebtn_Click('LoadTreeShow', '');
      //调用数据展示；
      this.GetAllFunctionMethod();
    }
  }
  public SetEventForResearchTopic() {
    {
      const divName = this.divLayout;
      const arrbtnSelectResearchTopic = divName.querySelectorAll(
        'li[name="btnSelectResearchTopic"]',
      );

      for (let i = 0; i < arrbtnSelectResearchTopic.length; i++) {
        const btnSelectResearchTopic = arrbtnSelectResearchTopic[i] as HTMLLIElement;
        if (btnSelectResearchTopic != null) {
          const strKeyId = btnSelectResearchTopic.getAttribute('keyid');
          if (strKeyId == null) continue;

          const arr = strKeyId.split('|');
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.topicName}`;
          if (arr.length != 2) continue;
          const objData = { topicId: arr[0], topicName: arr[1] };

          (function (objData: any) {
            btnSelectResearchTopic.onclick = function () {
              ResearchTopicListEx.vuebtn_Click('SelectResearchTopic', objData);
            };
          })(objData);
        }
      }
    }
  }
  ////////////////////////////////////////各个观点条件////////////////////////////////////////////////////////
  //个人观点条件
  public CombinevRTViewpointRelaCondition1(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    strWhereCond += `and ${clsvRTViewpointEN.con_gsKnowledgeTypeId} = '${enumgs_KnowledgeType.PersonalOpinion_01}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = this.topicId;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTViewpointRelaEN.con_TopicId} = '${strTopicId}'`;
      }

      if (this.Keyword_q != '') {
        strWhereCond += ` And ${clsvRTViewpointRelaEN.con_ViewpointName} like '%${this.Keyword_q}%'`;
        strWhereCond += ` or ${clsvRTViewpointRelaEN.con_ViewpointContent} like '%${this.Keyword_q}%'`;
        strWhereCond += '[exclude] or [/exclude]';
      }
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTViewpointRelaEN.con_TopicId} = '${strTopicId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTViewpointRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //专家观点条件
  public CombinevRTViewpointRelaCondition2(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    strWhereCond += `and ${clsvRTViewpointEN.con_gsKnowledgeTypeId} = '${enumgs_KnowledgeType.ExpertOpinion_02}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = this.topicId;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTViewpointRelaEN.con_TopicId} = '${strTopicId}'`;
      }

      if (this.Keyword_q != '') {
        strWhereCond += ` And ${clsvRTViewpointRelaEN.con_ViewpointName} like '%${this.Keyword_q}%'`;
        strWhereCond += ` or ${clsvRTViewpointRelaEN.con_ViewpointContent} like '%${this.Keyword_q}%'`;

        strWhereCond += '[exclude] or [/exclude]';
      }
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTViewpointRelaEN.con_TopicId} = '${strTopicId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTViewpointRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //相关概念条件
  public async CombinevRTConceptRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    strWhereCond += `and ${clsvRTViewpointEN.con_gsKnowledgeTypeId} = '${enumgs_KnowledgeType.Concept_03}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = this.topicId;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTConceptRelaEN.con_TopicId} = '${strTopicId}'`;
      }
      if (this.Keyword_q != '') {
        strWhereCond += ` And ${clsvRTConceptRelaEN.con_ConceptName} like '%${this.Keyword_q}%'`;
        strWhereCond += ` or ${clsvRTConceptRelaEN.con_ConceptContent} like '%${this.Keyword_q}%'`;
        strWhereCond += '[exclude] or [/exclude]';
      }
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTConceptRelaEN.con_TopicId} = '${strTopicId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTUserRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //客观事实条件
  public CombinevRTTopicObjectiveRelaCondition1(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    strWhereCond += `and ${clsvRTViewpointEN.con_gsKnowledgeTypeId} = '${enumgs_KnowledgeType.ObjectiveFact_04}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = this.topicId;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTTopicObjectiveRelaEN.con_TopicId} = '${strTopicId}'`;
      }

      if (this.Keyword_q != '') {
        strWhereCond += ` And ${clsvRTTopicObjectiveRelaEN.con_ObjectiveName} like '%${this.Keyword_q}%'`;
        strWhereCond += ` or ${clsvRTTopicObjectiveRelaEN.con_ObjectiveContent} like '%${this.Keyword_q}%'`;
        strWhereCond += '[exclude] or [/exclude]';
      }
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTTopicObjectiveRelaEN.con_TopicId} = '${strTopicId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTUserRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //客观数据条件
  public CombinevRTTopicObjectiveRelaCondition2(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    strWhereCond += `and ${clsvRTViewpointEN.con_gsKnowledgeTypeId} = '${enumgs_KnowledgeType.ObjectiveData_05}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = this.topicId;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTTopicObjectiveRelaEN.con_TopicId} = '${strTopicId}'`;
      }

      if (this.Keyword_q != '') {
        strWhereCond += ` And ${clsvRTTopicObjectiveRelaEN.con_ObjectiveName} like '%${this.Keyword_q}%'`;
        strWhereCond += ` or ${clsvRTTopicObjectiveRelaEN.con_ObjectiveContent} like '%${this.Keyword_q}%'`;
        strWhereCond += '[exclude] or [/exclude]';
      }
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTTopicObjectiveRelaEN.con_TopicId} = '${strTopicId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTUserRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //技能条件
  public CombinevRTSysSkillCondition(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    strWhereCond += `and ${clsvRTViewpointEN.con_gsKnowledgeTypeId} = '${enumgs_KnowledgeType.Skill_06}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = this.topicId;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTSysSkillRelaEN.con_TopicId} = '${strTopicId}'`;
      }
      if (this.Keyword_q != '') {
        strWhereCond += ` And ${clsvRTSysSkillRelaEN.con_SkillName} like '%${this.Keyword_q}%'`;
        strWhereCond += ` or ${clsvRTSysSkillRelaEN.con_Process} like '%${this.Keyword_q}%'`;
        strWhereCond += '[exclude] or [/exclude]';
      }
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTSysSkillRelaEN.con_TopicId} = '${strTopicId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTUserRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //社会关系条件
  public CombinevRTSysSocialRelaCondition(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    strWhereCond += `and ${clsvRTViewpointEN.con_gsKnowledgeTypeId} = '${enumgs_KnowledgeType.SocialRelationships_07}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = this.topicId;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTSysSocialRelaEN.con_TopicId} = '${strTopicId}'`;
      }
      if (this.Keyword_q != '') {
        strWhereCond += ` And ${clsvRTSysSocialRelaEN.con_FullName} like '%${this.Keyword_q}%'`;
        strWhereCond += ` or ${clsvRTSysSocialRelaEN.con_DetailedDescription} like '%${this.Keyword_q}%'`;

        strWhereCond += '[exclude] or [/exclude]';
      }
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTSysSocialRelaEN.con_TopicId} = '${strTopicId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTUserRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //是否教师打分条件
  public CombineIsTeaComment(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = '';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (GetSelectValueInDivObj(divName, 'ddlIsTeaComment_q') != '0') {
        if (GetSelectValueInDivObj(divName, 'ddlIsTeaComment_q') == '01') {
          strWhereCond = ' and teaScore>0';
        } else {
          strWhereCond = ' and teaScore=0';
        }
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTUserRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  //反思条件
  public async Combinegs_ReflectLogCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = this.topicId;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsgs_ReflectLogEN.con_TopicId} = '${strTopicId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combinegs_ResearchPlanCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //动态获取所有相关关系表数据
  public async BindGv_AllTopicRela() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // const strUserId = userStore.getUserId;
    const strTopicName = await this.getTopicName();
    const strCommentTypeId = ResearchTopicListEx.GetPropValue('commentTypeId');
    //一、条件串
    //1用户关系
    const strWhereUserRela = await this.CombinevRTUserRelaCondition();
    //2论文关系
    const strWherePaperRela1 = `${await this.CombinevRTPaperRelaCondition()} and paperTypeId='01'`;
    const strWherePaperRela2 = `${await this.CombinevRTPaperRelaCondition()} and paperTypeId='02'`;
    //3个人观点
    const strWhereViewpointRela1 =
      (await this.CombinevRTViewpointRelaCondition1()) + this.CombineIsTeaComment();
    //专家观点
    const strWhereViewpointRela2 =
      (await this.CombinevRTViewpointRelaCondition2()) + this.CombineIsTeaComment();
    //附件
    // const strWhereCondAttachment = `1=1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    // //5点赞 查询当前用户 点赞数据；
    // const strWhereCondLike = `1=1 And ${clsSysVoteEN.con_UpdUser} = '${strUserId}'`; //新0605
    //6相关概念
    const strWhereConcept =
      (await this.CombinevRTConceptRelaCondition()) + this.CombineIsTeaComment();
    //7客观事实
    const strWhereFacts =
      (await this.CombinevRTTopicObjectiveRelaCondition1()) + this.CombineIsTeaComment();
    //8客观数据
    const strWhereBasis =
      (await this.CombinevRTTopicObjectiveRelaCondition2()) + this.CombineIsTeaComment();
    //技能
    const strWhereSysskill =
      (await this.CombinevRTSysSkillCondition()) + this.CombineIsTeaComment();
    //9、社会关系
    const strWhereSysSocialRelations =
      this.CombinevRTSysSocialRelaCondition() + this.CombineIsTeaComment();
    //用户分数
    const strWhereCond10 = ` parentId='root' and  commentTypeId='${strCommentTypeId}' order by Score Desc`;

    //11研究计划
    const strWhereResearchPlan = `topicId='${this.topicId}'`;

    //12研究计划之 教师任务布置
    const strWhereTeacherTask = `topicId='${this.topicId}'`;
    //反思
    const strWheregs_ReflectLog = await this.Combinegs_ReflectLogCondition();

    //二、数据源声明
    let arrvRTUserRelaObjLst: Array<clsvRTUserRelaEN> = [];
    let arrvRTPaperRelaObjLst1: Array<clsvRTPaperRelaEN> = [];
    let arrvRTPaperRelaObjLst2: Array<clsvRTPaperRelaEN> = [];
    let arrvRTViewpointRelaObjLst1: Array<clsvRTViewpointEN> = [];
    let arrvRTViewpointRelaObjLst2: Array<clsvRTViewpointEN> = [];

    //获取相关概念
    let arrvRTConceptObjLst: Array<clsvRTViewpointEN> = [];
    //客观事实
    let arrvRTTopicObjectiveRelaObjLst1: Array<clsvRTViewpointEN> = [];
    //客观数据
    let arrvRTTopicObjectiveRelaObjLst2: Array<clsvRTViewpointEN> = [];
    //技能
    let arrvRTSysSkillObjLst: Array<clsvRTViewpointEN> = [];
    //社会关系
    let arrvRTSysSocialRelaObjLst: Array<clsvRTViewpointEN> = [];
    //用户分数

    let arrvSysCommentObjLst: Array<clsvSysCommentEN> = [];
    //研究计划
    let arrvResearchPlanObjLst: Array<clsvgs_ResearchPlanEN> = [];
    //教师任务布置
    let arrgs_TeacherTaskObjLst: Array<clsgs_TeacherTaskEN> = [];
    let arrgs_ReflectLogObjList: Array<clsgs_ReflectLogEN> = []; //反思
    //三、方法获取调用
    try {
      arrvRTUserRelaObjLst = await vRTUserRela_GetObjLstAsync(strWhereUserRela);
      arrvRTPaperRelaObjLst1 = await vRTPaperRela_GetObjLstAsync(strWherePaperRela1);
      arrvRTPaperRelaObjLst2 = await vRTPaperRela_GetObjLstAsync(strWherePaperRela2);
      arrvRTViewpointRelaObjLst1 = await vRTViewpoint_GetObjLstAsync(strWhereViewpointRela1);
      arrvRTViewpointRelaObjLst2 = await vRTViewpoint_GetObjLstAsync(strWhereViewpointRela2);
      // arrViewpointAttachmentObjLst2 = await ViewpointAttachment_GetObjLstAsync(
      //   strWhereCondAttachment,
      // );

      //获取相关概念数据
      arrvRTConceptObjLst = await vRTViewpoint_GetObjLstAsync(strWhereConcept);
      //客观事实
      arrvRTTopicObjectiveRelaObjLst1 = await vRTViewpoint_GetObjLstAsync(strWhereFacts);
      //客观数据
      arrvRTTopicObjectiveRelaObjLst2 = await vRTViewpoint_GetObjLstAsync(strWhereBasis);
      //用户分数
      arrvSysCommentObjLst = await vSysComment_GetObjLstAsync(strWhereCond10);
      //获取技能
      arrvRTSysSkillObjLst = await vRTViewpoint_GetObjLstAsync(strWhereSysskill);
      //社会关系
      arrvRTSysSocialRelaObjLst = await vRTViewpoint_GetObjLstAsync(strWhereSysSocialRelations);

      //得到学生数据
      //获取用户缓存数据

      const strWhere_User = '1=1';
      const arrvUserStuNameObjLst = await vUsersSim_GetObjLstAsync(strWhere_User);

      //研究计划
      arrvResearchPlanObjLst = await vgs_ResearchPlan_GetObjLstAsync(strWhereResearchPlan);
      //教师任务布置
      arrgs_TeacherTaskObjLst = await gs_TeacherTask_GetObjLstAsync(strWhereTeacherTask);
      //反思
      arrgs_ReflectLogObjList = await gs_ReflectLog_GetObjLstAsync(strWheregs_ReflectLog);

      let strhtml = `<div style="font-size:20px; color: #009688; font-weight: bold; margin-bottom:10px;" id="TopicTitle">当前主题：${strTopicName}</div>`;
      //用户
      strhtml +=
        '<div class="info" id="infoUser"><div class="title btn-1"><a href="javascript:void(0)" title="小组成员">小组成员</a></div><ul class="artlist">';
      let u = 0; //给内容加个序号
      for (let i = 0; i < arrvRTUserRelaObjLst.length; i++) {
        const objvRTUserRela = arrvRTUserRelaObjLst[i];
        u++;
        //strhtml += u + "." + objvRTUserRela.userName + "&nbsp;&nbsp;&nbsp;主题用户角色：(" + objvRTUserRela.topicUserRoleName + ")&nbsp;所属主题：" + objvRTUserRela.topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>";
        strhtml += `<li><span class="rowtit color1">${u}.</span><span class="abstract-text">${objvRTUserRela.userName}</span>&nbsp;&nbsp;&nbsp;<span class="rowtit color1">角色：</span><span class="abstract-text">(${objvRTUserRela.topicUserRoleName})</span></li>`;

        strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[评论]：</span>';

        const objComment = arrvSysCommentObjLst.find(
          (x) => x.tableKey == objvRTUserRela.mId.toString(),
        );
        if (objComment != null) {
          strhtml += `${objComment.comment}&nbsp;&nbsp;教师评分:${objComment.score}`;
        } else {
          strhtml += '&nbsp;&nbsp;暂无教师打分！';
          if (GetInputValueInDivObj(divName, 'hidRoleId') != '00620003') {
            // o1nclick = btnShowAppraise_Click("${objvRTUserRela.userId}","08","${objvRTUserRela.updUser}")
            const strKeyId = `${objvRTUserRela.mId}|14|${objvRTUserRela.updUser}`;
            strhtml += `&nbsp;&nbsp;<button id="btnShowAppraise" keyId="${strKeyId}" class="layui-btn layui-btn layui-btn-xs"  > ${clsIcon.faCommentDots}添加评论</button >`;
          }
        }
        strhtml += '</li>';
      }
      strhtml += '</ul></div>';

      //研究计划
      //用户
      strhtml += '<div class="info" id="infoResearchPlan">';
      //布置任务
      strhtml +=
        '<div class="title btn-1"><a href="javascript:void(0)" title="任务布置">任务布置</a></div><ul class="artlist">';
      u = 0; //给内容加个序号
      for (let i = 0; i < arrgs_TeacherTaskObjLst.length; i++) {
        const objgs_TeacherTask = arrgs_TeacherTaskObjLst[i];
        u++;
        strhtml += `<li><span class="rowtit color3 btnLeft">${u}.[任务说明]：</span><span class="abstract-text">${objgs_TeacherTask.missionStatement}</span></li>`;

        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[任务要求]：</span><span class="abstract-text">${objgs_TeacherTask.missionRequirement}</span></li>`;

        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[发布时间]：${objgs_TeacherTask.updDate}</span>`;
      }
      strhtml += '</ul><br/><hr/>';

      strhtml +=
        '<div class="title btn-1"><a href="javascript:void(0)" title="研究计划">研究计划</a></div><ul class="artlist">';
      u = 0; //给内容加个序号
      for (let i = 0; i < arrvResearchPlanObjLst.length; i++) {
        // const strPlanId = arrvResearchPlanObjLst[i].planId;
        u++;
        strhtml += `<li><span class="rowtit color3 btnLeft">${u}.[研究状态]：</span><span class="abstract-text">${arrvResearchPlanObjLst[i].statusName}</span></li>`;

        //判断计划类型
        if (arrvResearchPlanObjLst[i].planTypeId == '01') {
          strhtml +=
            '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[计划类型]：</span><span class="abstract-text">个人计划</span></li>';
        } else {
          strhtml +=
            '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[计划类型]：</span><span class="abstract-text">小组计划</span></li>';
        }
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[负责人/小组]：</span><span class="abstract-text">${arrvResearchPlanObjLst[i].responsibleUser}</span></li>`;
        //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[类型]：</span><span class="abstract-text">' + arrvRTViewpointRelaObjLst1[i].viewpointTypeName + '</span></li>';
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[计划内容]：</span><span class="abstract-text">${arrvResearchPlanObjLst[i].planContent}</span></li>`;

        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[开始日期]：${arrvResearchPlanObjLst[i].startDate}</span>`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[结束日期]：</span>${arrvResearchPlanObjLst[i].endDate}`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[完成日期]：</span>${arrvResearchPlanObjLst[i].actualFinishingDate}`;

        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[验收用户]：</span>${arrvResearchPlanObjLst[i].acceptanceUser}`;

        if (arrvResearchPlanObjLst[i].isSubmit == true) {
          strhtml += '&nbsp;&nbsp;<span class="rowtit colorRed">[未提交]</span></li>';
        } else {
          strhtml += '&nbsp;&nbsp;<span class="rowtit colorRed">[未提交]</span></li>';
        }
      }
      strhtml += '</ul></div>';

      //-------------------反思模块
      strhtml += '<div class="info" id="infogs_ReflectLog">';
      strhtml +=
        '<div class="title btn-1"><a href="javascript:void(0)" title="反思">反思</a></div><ul class="artlist">';
      u = 0; //给内容加个序号
      for (let i = 0; i < arrgs_ReflectLogObjList.length; i++) {
        u++;
        strhtml += `<li><span class="rowtit color3 btnLeft">${u}.[名称]：</span><span class="abstract-text">${arrgs_ReflectLogObjList[i].reflectLogName}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[内容]：</span><span class="abstract-text">${arrgs_ReflectLogObjList[i].reflectLogContent}</span></li>`;

        //获取引用人；编辑人、用户名称
        let arrvUsers: Array<clsvUsersSimEN> = [];
        let UpdUserName; //编辑人
        // let CacitionUserName; //引用人
        //获取技能引用人；
        arrvUsers = arrvUserStuNameObjLst.filter(
          (x) => x.userId == arrgs_ReflectLogObjList[i].updUser,
        ); //技能引用人
        for (let j = 0; j < arrvUsers.length; j++) {
          UpdUserName = arrvUsers[j].userName;
          break;
        }

        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[编辑时间]：${arrgs_ReflectLogObjList[i].updDate}</span>`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[编辑用户]：</span>${
          UpdUserName ?? '无'
        }`;
      }
      strhtml += '</ul></div>';

      //相关引用论文
      strhtml +=
        '<div class="info" id="infoPaper"><div class="title btn-2"><a href="javascript:void(0)" title="相关论文">相关论文</a></div><ul class="artlist">';
      let p = 0; //给内容加个序号
      for (let i = 0; i < arrvRTPaperRelaObjLst1.length; i++) {
        const objvRTPaperRela = arrvRTPaperRelaObjLst1[i];
        p++;
        //strhtml += p + "." + arrvRTPaperRelaObjLst[i].paperTitle + "&nbsp;&nbsp;所属主题：" + arrvRTPaperRelaObjLst[i].topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>";
        strhtml += `<li><span class="rowtit color2">${p}.</span><span class="abstract-text">${objvRTPaperRela.paperTitle}</span>`;
        // o1nclick="xadmin.open('pdf查看', '../GradEduEx/PdfDetail?paperId=${objvRTPaperRela.paperId}')
        strhtml += `<span id="btnPdfDetail" keyId="${objvRTPaperRela.paperId}" class="colorRed" style="padding-left:50px;" ">pdf查看</span></li>`;
      }
      strhtml += '</ul></div>';

      //相关自研论文
      strhtml +=
        '<div class="info" id="infoPaper2"><div class="title btn-2"><a href="javascript:void(0)" title="自研论文">自研论文</a></div><ul class="artlist">';
      p = 0; //给内容加个序号
      for (let i = 0; i < arrvRTPaperRelaObjLst2.length; i++) {
        p++;
        //strhtml += p + "." + arrvRTPaperRelaObjLst[i].paperTitle + "&nbsp;&nbsp;所属主题：" + arrvRTPaperRelaObjLst[i].topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>";
        strhtml += `<li><a style="cursor:pointer;" onclick=btnNewPaper("${arrvRTPaperRelaObjLst2[i].paperId}")><span class="rowtit color2">${p}.</span><span class="abstract-text">${arrvRTPaperRelaObjLst2[i].paperTitle}</span></a>`;
        if (
          arrvRTPaperRelaObjLst2[i].versionCount > 0 &&
          arrvRTPaperRelaObjLst2[i].versionCount != null
        ) {
          strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('自研论文历史版本', '../GradEduEx/HistoricalVersion?Key=${arrvRTPaperRelaObjLst2[i].paperId}&Type=10')"> ${clsIcon.faCommentDots}历史版本</button >`;
        }
        strhtml += '</li>';
      }
      strhtml += '</ul></div>';

      //个人观点
      strhtml += await Public_Viewpoint.BindList_vRTViewpointRela(
        '07',
        '01',
        arrvRTViewpointRelaObjLst1,
      );
      //专家观点
      strhtml += await Public_Viewpoint.BindList_vRTViewpointRela(
        '07',
        '02',
        arrvRTViewpointRelaObjLst2,
      );
      //概念
      strhtml += await Public_Concept.BindList_vRTConceptRela('07', arrvRTConceptObjLst);
      //客观事实
      strhtml += await Public_TopicObjective.BindList_vRTTopicObjectiveRela(
        '07',
        '01',
        arrvRTTopicObjectiveRelaObjLst1,
      );
      //客观数据
      strhtml += await Public_TopicObjective.BindList_vRTTopicObjectiveRela(
        '07',
        '02',
        arrvRTTopicObjectiveRelaObjLst2,
      );
      //技能
      strhtml += await Public_SysSkill.BindList_vRTSysSkill('07', arrvRTSysSkillObjLst);
      //社会关系
      strhtml += await Public_SysSocialRelations.BindList_vRTSysSocialRela(
        '07',
        arrvRTSysSocialRelaObjLst,
      );

      //拼接；
      // $('#divContent_list').html(s1trhtml);
      SetDivHtmlInDivObj(this.divLayout, 'divContent_list', strhtml);
      this.SetEventForTopicRela();
      ResearchTopicListEx.vuebtn_Click('SetFontSize', '');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public SetEventForTopicRela() {
    {
      const arrbtnPdfDetail = GetSpanObjLstInDivObjN(this.divLayout, 'btnPdfDetail');
      for (const btnPdfDetail of arrbtnPdfDetail) {
        if (btnPdfDetail != null) {
          const strKeyId = btnPdfDetail.getAttribute('keyid');
          if (strKeyId == null) continue;

          (function (strPaperId: string) {
            btnPdfDetail.onclick = function () {
              ResearchTopicListEx.vuebtn_Click('PdfDetail', strPaperId);
            };
          })(strKeyId);
        }
      }
    }
    {
      const arrbtnShowAppraise = GetButtonObjLstInDivObjN(this.divLayout, 'btnShowAppraise');
      for (const btnShowAppraise of arrbtnShowAppraise) {
        if (btnShowAppraise != null) {
          const strKeyId = btnShowAppraise.getAttribute('keyid');
          if (strKeyId == null) continue;
          // o1nclick = btnShowAppraise_Click("${objvRTUserRela.userId}","08","${objvRTUserRela.updUser}")
          // strKeyId: string,
          // strCommentTypeId: string,
          // strViewpointUserId: string,
          const arr = strKeyId.split('|');
          if (arr.length != 3) continue;
          const objData = { keyId: arr[0], commentTypeId: arr[1], viewpointUserId: arr[2] };

          (function (objData: any) {
            btnShowAppraise.onclick = function () {
              // ResearchTopicListEx.vuebtn_Click('ShowAppraise', objData);
              ResearchTopicListEx.vuebtn_Click('SysComment', objData);
            };
          })(objData);
        }
      }
    }
  }
  //添加点赞 主键,被点赞用户、点赞类型；
  public async btnAddVote_Click(strViewpointId: string, strUserId: string, strVoteTypeId: string) {
    const strThisFuncName = this.btnAddVote_Click.name;

    //thIs.DivName = "divAddNewRecordSave";
    const objSysVoteEN: clsSysVoteEN = new clsSysVoteEN();

    objSysVoteEN.SetTableKey(strViewpointId);
    objSysVoteEN.SetVoteTypeId(strVoteTypeId);
    objSysVoteEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班
    objSysVoteEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objSysVoteEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    objSysVoteEN.SetLikedUserId(strUserId); //被点赞用户
    objSysVoteEN.SetPubParentId(this.topicId);
    const strWhereCond = ` 1 =1 and updUser='${userStore.getUserId}' and tableKey='${strViewpointId}'`;
    try {
      const responseText = await SysVote_IsExistRecordAsync(strWhereCond);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `您已经点赞过了，请给其他点赞一下吧！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await SysVote_AddNewRecordAsync(objSysVoteEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1 =1 and tableKey='${strViewpointId}'`;
        const intVoteCount = await SysVote_GetRecCountByCondAsync(strWhereCond2);

        //通过不同的点赞类型，查询不同的表 把获取到的点赞数据插入到对应的表、表ID数据中

        let strMsg = '';
        let objSysSocialRelationsEN;
        let objViewpointEN;
        let objConceptEN;
        let objTopicObjectiveEN;
        let objysSkillEN;

        switch (strVoteTypeId) {
          case enumSysVoteType.Viewpoint_03: //个人观点
            objViewpointEN = new clsViewpointEN();
            objViewpointEN.SetViewpointId(strViewpointId);
            objViewpointEN.SetOkCount(intVoteCount);

            objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
            if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
              throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
            }

            Viewpoint_UpdateRecordAsync(objViewpointEN).then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                this.BindGv_AllTopicRela();
              } else {
                const strInfo = `点赞不成功!`;
                alert(strInfo);
                console.log('点赞不成功');
              }
            });
            break;
          case enumSysVoteType.Viewpoint_04: //专家观点
            objViewpointEN = new clsViewpointEN();
            objViewpointEN.SetViewpointId(strViewpointId);
            objViewpointEN.SetOkCount(intVoteCount);

            objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
            if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
              throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
            }
            Viewpoint_UpdateRecordAsync(objViewpointEN).then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                this.BindGv_AllTopicRela();
              } else {
                const strInfo = `点赞不成功!`;
                alert(strInfo);
                console.log('点赞不成功');
              }
            });
            break;
          case enumSysVoteType.Concept_05: //概念
            objConceptEN = new clsConceptEN();
            objConceptEN.SetConceptId(strViewpointId);
            objConceptEN.SetOkCount(intVoteCount);

            objConceptEN.sfUpdFldSetStr = objConceptEN.updFldString; //设置哪些字段被修改(脏字段)
            if (objConceptEN.conceptId == '' || objConceptEN.conceptId == undefined) {
              throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
            }

            await Concept_UpdateRecordAsync(objConceptEN).then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                this.BindGv_AllTopicRela();
              } else {
                const strInfo = `点赞不成功!`;
                alert(strInfo);
                console.log('点赞不成功');
              }
            });
            break;
          case enumSysVoteType.TopicObjective_06: //客观事实
            objTopicObjectiveEN = new clsTopicObjectiveEN();
            objTopicObjectiveEN.SetTopicObjectiveId(strViewpointId);
            objTopicObjectiveEN.SetOkCount(intVoteCount);

            objTopicObjectiveEN.sfUpdFldSetStr = objTopicObjectiveEN.updFldString; //设置哪些字段被修改(脏字段)
            if (
              objTopicObjectiveEN.topicObjectiveId == '' ||
              objTopicObjectiveEN.topicObjectiveId == undefined
            ) {
              throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
            }
            await TopicObjective_UpdateRecordAsync(objTopicObjectiveEN).then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                this.BindGv_AllTopicRela();
              } else {
                const strInfo = `点赞不成功!`;
                alert(strInfo);
                console.log('点赞不成功');
              }
            });
            break;
          case enumSysVoteType.TopicObjective_07: //客观数据
            objTopicObjectiveEN = new clsTopicObjectiveEN();
            objTopicObjectiveEN.SetTopicObjectiveId(strViewpointId);
            objTopicObjectiveEN.SetOkCount(intVoteCount);

            objTopicObjectiveEN.sfUpdFldSetStr = objTopicObjectiveEN.updFldString; //设置哪些字段被修改(脏字段)
            if (
              objTopicObjectiveEN.topicObjectiveId == '' ||
              objTopicObjectiveEN.topicObjectiveId == undefined
            ) {
              throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
            }
            TopicObjective_UpdateRecordAsync(objTopicObjectiveEN).then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                this.BindGv_AllTopicRela();
              } else {
                const strInfo = `点赞不成功!`;
                alert(strInfo);
                console.log('点赞不成功');
              }
            });
            break;
          case enumSysVoteType.SysSkill_09: //技能
            objysSkillEN = new clsSysSkillEN();
            objysSkillEN.SetSkillId(strViewpointId);
            objysSkillEN.SetOkCount(intVoteCount);

            objysSkillEN.sfUpdFldSetStr = objysSkillEN.updFldString; //设置哪些字段被修改(脏字段)
            if (objysSkillEN.skillId == '' || objysSkillEN.skillId == undefined) {
              throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
            }
            SysSkill_UpdateRecordAsync(objysSkillEN).then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                this.BindGv_AllTopicRela();
              } else {
                const strInfo = `点赞不成功!`;
                alert(strInfo);
                console.log('点赞不成功');
              }
            });
            break;
          case enumSysVoteType.SysSocialRelations_10: //社会关系
            objSysSocialRelationsEN = new clsSysSocialRelationsEN();
            objSysSocialRelationsEN.SetSocialId(strViewpointId);
            objSysSocialRelationsEN.SetOkCount(intVoteCount);

            objSysSocialRelationsEN.sfUpdFldSetStr = objSysSocialRelationsEN.updFldString; //设置哪些字段被修改(脏字段)
            if (
              objSysSocialRelationsEN.socialId == '' ||
              objSysSocialRelationsEN.socialId == undefined
            ) {
              throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
            }
            SysSocialRelations_UpdateRecordAsync(objSysSocialRelationsEN).then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                this.BindGv_AllTopicRela();
              } else {
                const strInfo = `点赞不成功!`;
                alert(strInfo);
                console.log('点赞不成功');
              }
            });
            break;
          default:
            strMsg = '没有数据';
            alert(strMsg);
            break;
        }
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

  //添加点赞
  //public async btnAddLikeLog_Click() {
  //    //this.DivName = "divAddNewRecordSave";
  //    const objViewpointLikeLogEN: clsViewpointLikeLogEN = new clsViewpointLikeLogEN();

  //    objViewpointLikeLogEN.SetViewpointId($("#hidViewpointId").val();
  //    objViewpointLikeLogEN.SetUpdDate(clsPubFun4Web.getNowDate();// 修改日期
  //    objViewpointLikeLogEN.SetUpdUser(userStore.getUserId;// 修改用户Id
  //    strWhereCond = " 1 =1 and updUser='" + objViewpointLikeLogEN.updUser + "' and viewpointId=" + objViewpointLikeLogEN.viewpointId;
  //    try {
  //        const responseText = await ViewpointLikeLog_IsExistRecordAsync(strWhereCond);
  //        strIdCurrEduclsbolIsExist: boolean = responseText;
  //        if (bolIsExist == true) {
  //            strIdCurrEduclsstrMsg: string = `您已经点赞过这条观点了，请给其他观点点赞一下吧！`;
  //            alert(strMsg);
  //            return responseText;//一定要有一个返回值，否则会出错！
  //        }

  //        const responseText2 = await ViewpointLikeLog_AddNewRecordAsync(objViewpointLikeLogEN);
  //        const returnBool: boolean = !!responseText2;
  //        if (returnBool == true) {

  //            await this.BindGv_AllTopicRela();
  //        }
  //        else {
  //            strIdCurrEduclsstrInfo: string = `点赞不成功!`;
  //
  //            //显示信息框
  //            alert(strInfo);

  //        }
  //        return responseText2;//一定要有一个返回值，否则会出错！
  //    }
  //    catch (e:any) {
  //        console.error('catch(e)=');
  //        console.error(e);
  //        strIdCurrEduclsstrMsg: string = `点赞不成功,${e}.`;
  //        alert(strMsg);
  //    }

  //    return true;//一定要有一个返回值，否则会出错！
  //}

  //显示评论
  public async btnShowAppraise_Click(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strCommentTypeId = ResearchTopicListEx.GetPropValue('commentTypeId');
    const strTableKey = ResearchTopicListEx.GetPropValue('tableKey');

    let arrvSysCommentObjLst1: Array<clsvSysCommentEN> = [];
    let arrvSysCommentObjLst2: Array<clsvSysCommentEN> = [];
    let arrvSysCommentObjLst3: Array<clsvSysCommentEN> = [];
    let strWhereCond1 = '';
    let strWhereCond2 = '';
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部评论
        strWhereCond1 = ` parentId='root' and  commentTypeId='${strCommentTypeId}' and tableKey='${strTableKey}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  commentTypeId='${strCommentTypeId}' and tableKey='${strTableKey}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人评论
        strWhereCond1 = ` parentId='root' and  commentTypeId='${strCommentTypeId}' and tableKey='${strTableKey}' and updUser='${userStore.getUserId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  commentTypeId='${strCommentTypeId}' and tableKey='${strTableKey}' and updUser='${userStore.getUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新评论
        strWhereCond1 = ` parentId='root' and  commentTypeId='${strCommentTypeId}' and tableKey='${strTableKey}' order by updDate Desc`;
        strWhereCond2 = ` parentId<>'root' and  commentTypeId='${strCommentTypeId}' and tableKey='${strTableKey}' order by updDate Desc`;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    try {
      //获取用户缓存数据
      const strWhere_User = '1=1';

      arrvSysCommentObjLst1 = await vSysComment_GetObjLstAsync(strWhereCond1);
      arrvSysCommentObjLst2 = await vSysComment_GetObjLstAsync(strWhereCond2);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment_RTL = GetDivObjInDivObj(divName, 'J_ShortComment_RTL');
      J_ShortComment_RTL.innerHTML = '';
      if (arrvSysCommentObjLst1.length == 0) {
        strhtml += `<span class="comment-time">无评价数据！</span>`;
      }
      for (let i = 0; i < arrvSysCommentObjLst1.length; i++) {
        const objvSysComment = arrvSysCommentObjLst1[i];
        varNum++;
        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';

        const strUserName = await vQxUsersSimStore.getUserName(objvSysComment.updUser);

        if (GetInputValueInDivObj(divName, 'hidViewpointUserId') == objvSysComment.updUser) {
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

            if (
              GetInputValueInDivObj(divName, 'hidViewpointUserId') ==
              arrvSysCommentObjLst3[j].updUser
            ) {
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
        strhtml += `<span class="J_Reply comment-operate-item comment-operate-reply" id="J_Reply" onclick=btnReplyComment_Click("${objvSysComment.commentId}")>回复</span>`;
        strhtml += '</div>';

        strhtml += '</div></div>';
      }
      J_ShortComment_RTL.innerHTML = strhtml;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取数据不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 添加评论内容
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 */
  public async SubmitAppraise_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strTableKey = ResearchTopicListEx.GetPropValue('tableKey');

    const objSysCommentEN: clsSysCommentEN = new clsSysCommentEN();
    //this.PutDataToSysCommentClass(objSysCommentEN);
    objSysCommentEN.SetTableKey(strTableKey);
    objSysCommentEN.SetCommentTypeId(GetInputValueInDivObj(divName, 'hidCommentTypeId'));
    objSysCommentEN.SetParentId(ResearchTopicListEx.parentId);
    objSysCommentEN.SetPubParentId(this.topicId);
    if (GetInputValueInDivObj(divName, 'hidRoleId') == '00620003') {
      objSysCommentEN.SetScoreType('1');
    } else {
      objSysCommentEN.SetScoreType('2');
      objSysCommentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    }
    const strvalue = GetInputValueInDivObj(divName, 'pin');
    //判断是否有打分
    if (strvalue != '' && strvalue != undefined) {
      //获取值转化分数
      const strScore: string = this.GetScorebyText(strvalue);

      //判断内容是否输入
      if (GetInputValueInDivObj(divName, 'txtAppraiseContent') != '') {
        objSysCommentEN.SetComment(GetInputValueInDivObj(divName, 'txtAppraiseContent')); // 评议内容
        objSysCommentEN.SetScore(parseInt(strScore)); // 打分
        objSysCommentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
        objSysCommentEN.SetUpdUser(userStore.getUserId); // 修改用户Id
        try {
          const responseText2 = await SysCommentEx_AddNewRecordExAsync(objSysCommentEN);
          //const responseText2 = await SysComment_AddNewRecordWithMaxIdAsync(objSysCommentEN);
          const returnBool = !!responseText2;
          if (returnBool == true) {
            const strInfo = `添加成功!`;

            //显示信息框
            alert(strInfo);
            ResearchTopicListEx.vuebtn_Click('HideDialog3', '');

            await this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
            await this.BindGv_AllTopicRela();
            $('#btnOKUpdAppraise').attr('disabled', 'false');
          } else {
            const strInfo = `添加系统评论失败!`;
            console.error(strInfo);
            //显示信息框
            alert(strInfo);
            ResearchTopicListEx.vuebtn_Click('HideDialog3', '');

            $('#btnOKUpdAppraise').attr('disabled', 'false');
          }

          $('#J_PostBtn').attr('disabled', 'false');
          $('#btnOKUpdAppraise').attr('disabled', 'false');
          return responseText2; //一定要有一个返回值，否则会出错！
        } catch (e: any) {
          $('#J_PostBtn').attr('disabled', 'false');
          $('#btnOKUpdAppraise').attr('disabled', 'false');
          console.error('catch(e)=');
          console.error(e);
          const strMsg = `添加评论不成功,${e}.`;
          alert(strMsg);
        }
      } else {
        $('#J_PostBtn').attr('disabled', 'false');
        $('#btnOKUpdAppraise').attr('disabled', 'false');
        const strInfo = `请输入评语!`;
        //显示信息框
        alert(strInfo);
        return;
      }
    } else {
      $('#J_PostBtn').attr('disabled', 'false');
      $('#btnOKUpdAppraise').attr('disabled', 'false');
      const strInfo = `请选择评分!`;
      //显示信息框
      alert(strInfo);
      return;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 添加评论评分
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async SubmitScore_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const objclsViewpointScoreEN: clsViewpointScoreEN = new clsViewpointScoreEN();
    objclsViewpointScoreEN.SetViewpointId(GetInputValueInDivObj(divName, 'hidViewpointId'));
    const strvalue = GetInputValueInDivObj(divName, 'pin');
    //判断是否有打分
    if (strvalue != '' && strvalue != undefined) {
      //获取值转化分数
      const strScore: string = this.GetScorebyText(strvalue);
      objclsViewpointScoreEN.SetViewpointScore(Number(strScore)); // 打分
      objclsViewpointScoreEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
      objclsViewpointScoreEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
      try {
        const responseText2 = await ViewpointScore_AddNewRecordAsync(objclsViewpointScoreEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          await this.BindGv_AllTopicRela();
          this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
        } else {
          //显示评论
          this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
        }
        return responseText2; //一定要有一个返回值，否则会出错！
      } catch (e: any) {
        console.error('catch(e)=');
        console.error(e);
        const strMsg = `添加评论不成功,${e}.`;
        alert(strMsg);
      }
    } else {
      const strInfo = `请选择评分!`;
      //显示信息框
      alert(strInfo);
      return;
    }

    return true; //一定要有一个返回值，否则会出错！
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

  ///////////////////////////////////////////////////////////////////////////////3个关系列表数据

  ////////////////////////////////////////主题用户关系
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevRTUserRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = this.topicId;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTUserRelaEN.con_TopicId} = '${strTopicId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTUserRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //删除主题用户关系
  public async btnDelUserRelaRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      await this.DelUserRelaRecord(lngKeyId);

      const objPage_RTUserRela = new Pub_RTUserRelaList(this.divLayout);
      await objPage_RTUserRela.PageLoad();
      //await objPage_ResearchTopic.BindGv_vRTUserRela();
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
  public async DelUserRelaRecord(lngmId: number) {
    try {
      const returnInt: number = await RTUserRela_DelRecordAsync(lngmId);
      if (returnInt > 0) {
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

  //////////////////////////////////////////////////////////////////////////////主题观点关系
  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */

  //删除观点关系数据
  public async btnDelViewPointRelaRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      await this.DelViewPointRelaRecord(lngKeyId);

      const objPage_RTViewpointRela = new Pub_RTViewpointRelaList();
      await objPage_RTViewpointRela.PageLoad();
      //await objPage_RTViewpointRela.BindGv_vRTViewpointRela();
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
  public async DelViewPointRelaRecord(lngmId: number) {
    try {
      const returnInt: number = await RTViewpointRela_DelRecordAsync(lngmId);
      if (returnInt > 0) {
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

  ////////////////////////////////////////////////////////////////////////////////////主题论文关系
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevRTPaperRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = this.topicId;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTPaperRelaEN.con_TopicId} = '${strTopicId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTPaperRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public async btnDelPaperRelaRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      await this.DelPaperRelaRecord(lngKeyId);
      const objPage_RTPaperRela = new Pub_RTPaperRelaList(this.divLayout);
      await objPage_RTPaperRela.PageLoad();
      //await objPage_RTPaperRela.BindGv_vRTPaperRela();
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
  public async DelPaperRelaRecord(lngmId: number) {
    try {
      const returnInt: number = await RTPaperRela_DelRecordAsync(lngmId);
      if (returnInt > 0) {
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
   * 获取年月日
   */
  public getNowDate(): string {
    const date = new Date();
    let month: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();
    if (month <= 9) {
      month = `0${month}`;
    }
    if (strDate <= 9) {
      strDate = `0${strDate}`;
    }

    return `${date
      .getFullYear()
      .toString()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombineResearchTopicCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}' and TopicId in (select TopicId From RTUserRela Where UserId ='${userStore.getUserId}')`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    // try {
    // } catch (objException) {
    //   const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineResearchTopicCondition)时出错!请联系管理员!${objException}`;
    //   throw strMsg;
    // }
    return strWhereCond;
  }

  /* 查询所有观点的关键字和是否教师评论
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
 */
  public async btnQuery_Click() {
    await this.BindGv_AllTopicRela();
  }

  /* 删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
  */
  public async btnDelInRecord_Click(strKeyId: string) {
    try {
      await this.DelRecordEx(strKeyId);
      //树形数据源；
      this.GetTopicData();
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
  public async DelRecordEx(strTopicId: string) {
    try {
      const returnInt: number = await ResearchTopicEx_DelRecordAsyncEx(strTopicId);
      if (returnInt > 0) {
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
        //删除成功后清空主键隐藏id
        clsPrivateSessionStorage.topicIdInTree = '';
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

  public btnDetailInTab_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要查看的记录！');
      return;
    }
    this.ResearchTopicDetailRecord(strKeyId);
  }
  /* 根据关键字获取相应的记录的对象
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
  <param name = "sender">参数列表</param>
*/
  public async ResearchTopicDetailRecord(strTopicId: string) {
    this.keyId = strTopicId;

    try {
      const objResearchTopicEN = await ResearchTopic_GetObjByTopicIdAsync(strTopicId);
      if (objResearchTopicEN == null) return;
      // //显示当前数据；
      $('#txtTopicNameDetail').html(objResearchTopicEN.topicName);
      $('#txtTopicContentDetail').html(objResearchTopicEN.topicContent);
      $('#txtMemoDetail').html(objResearchTopicEN.memo);
    } catch (e: any) {
      console.error(e);
      const strMsg = `当前无数据获取失败,${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombinevViewpointCondition(): Promise<string> {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ' 1 = 1 ';

    const strTopicId = this.topicId;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //排除获取已存在的关系数据
      strWhereCond += ` And viewpointId not in (select viewpointId from RTViewpointRela where topicId = '${strTopicId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //添加观点 展示观点列表数据
  public async btnAddRela_Click() {
    const objPage_Viewpoint = new Pub_ViewpointList(this.divLayout);
    await objPage_Viewpoint.PageLoad();
    //await objPage_Viewpoint.BindGv_vViewpoint();
  }
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
    const strTopicId = this.topicId;
    const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId');
    const strUserId = userStore.getUserId;
    const objRTViewpointRelaEN: clsRTViewpointRelaEN = new clsRTViewpointRelaEN();
    this.PutDataToRTViewpointRelaClass(objRTViewpointRelaEN);

    try {
      //同一用户 同一主题 同一观点 只能添加一次；
      const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And viewpointId = '${strViewpointId}' And updUser = '${strUserId}'`;
      const responseText = await RTViewpointRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一主题不能重复添加同一个观点！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await RTViewpointRela_AddNewRecordAsync(objRTViewpointRelaEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加成功!`;
        ResearchTopicListEx.vuebtn_Click('HideDialogTwo', '');

        //显示信息框
        alert(strInfo);
        //绑定关系列表；
        const objPage_RTViewpointRela = new Pub_RTViewpointRelaList();
        await objPage_RTViewpointRela.PageLoad();
        //await objPage_RTViewpointRela.BindGv_vRTViewpointRela();

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
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  /* 函数功能:把界面上的属性数据传到类对象中
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   <param name = "pobjRTViewpointRelaEN">数据传输的目的类对象</param>
 */
  public PutDataToRTViewpointRelaClass(pobjRTViewpointRelaEN: clsRTViewpointRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strTopicId = this.topicId;
    const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId');
    const strUserId = userStore.getUserId;
    pobjRTViewpointRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTViewpointRelaEN.SetViewpointId(strViewpointId); // 观点Id
    pobjRTViewpointRelaEN.SetProposePeople(strUserId); // 提出人
    pobjRTViewpointRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTViewpointRelaEN.SetUpdUser(strUserId); // 修改用户Id// 修改用户Id
    //pobjRTViewpointRelaEN.SetMemo(this.memo;// 备注
  }

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

  public async BindDdl_LiteratureTypeId(ddlLiteratureTypeId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrPaperObjLst = await LiteratureType_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrPaperObjLst,
        clsLiteratureTypeEN.con_LiteratureTypeId,
        clsLiteratureTypeEN.con_LiteratureTypeName,
        '文献类型',
      );
      console.log('完成BindDdl_LiteratureTypeId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombinevPaperCondition(): Promise<string> {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ' 1 = 1 ';

    const strTopicId: string = this.topicId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }
      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      }
      //用户
      if (this.readUser_q != '' && this.readUser_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.readUser_q}'`;
      }

      //只查询提交的论文数据
      strWhereCond += ` And ${clsPaperEN.con_IsSubmit} = 'true'`;
      //排除获取已存在的关系数据
      strWhereCond += ` And paperId not in (select paperId from RTPaperRela where topicId = '${strTopicId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //添加论文关系
  public async btnAddPaperRela_Click() {
    const objPage_Paper = new Pub_PaperList(this.divLayout);
    await objPage_Paper.PageLoad();
    //await objPage_Paper.BindGv_vPaper();
  }

  //查询论列表
  public async btnPaperQuery_Click() {
    const objPage_Paper = new Pub_PaperList(this.divLayout);
    await objPage_Paper.PageLoad();
    //await objPage_Paper.BindGv_vPaper();
  }
  //确定选择的论文 并添加到关系表中
  public btnPaperRecordInTab_Click(strkeyId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    //存放Id
    SetHidPaperId(divName, strkeyId);
    //执行添加关系方法
    // this.AddNewRecordSavePaperRela();
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvPaperBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvPaperBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvPaperBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvPaperBy');
  }

  /*
   * 论文标题
   */
  public get paperTitle_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperTitle_q');
  }
  ///////////////////////论文列表条件
  public get readUser_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }
  /*
   * 文献类型Id
   */
  public get literatureTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlLiteratureTypeId_q');
  }

  ///////////////////////////////////////////////////用户数据部分

  //添加用户关系
  public async btnAddUserRela_Click() {
    const objPage_QxUsers = new Pub_QxUsersList(this.divLayout);
    await objPage_QxUsers.PageLoad();
    //await objPage_QxUsers.BindGv_QxUsers();
  }

  //查询用户数据
  public async btnUserQuery_Click() {
    const objPage_QxUsers = new Pub_QxUsersList(this.divLayout);
    await objPage_QxUsers.PageLoad();
    //await objPage_QxUsers.BindGv_QxUsers();
  }
  //确定选择的用户 并添加到关系表中
  public btnUserRecordInTab_Click(strkeyId: string) {
    //需要提示选择角色
    if (this.TopicUserRole_q != '' && this.TopicUserRole_q != '0') {
      //存放Id
      $('#hidUserIdKey').val(strkeyId);
      //执行添加关系方法
      // this.AddNewRecordSaveUserRela();
    } else {
      const strInfo = `请选择用户角色!`;

      //显示信息框
      alert(strInfo);
      return;
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombineQxUsersCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const strTopicId: string = this.topicId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.userId_q != '') {
        strWhereCond += ` And ${clsvUsersEN.con_UserId} like '%${this.userId_q}%'`;
      }
      if (this.userName_q != '') {
        strWhereCond += ` And ${clsvUsersEN.con_UserName} like '%${this.userName_q}%'`;
      }

      //排除获取已存在的关系数据
      strWhereCond += ` And userId not in (select userId from RTUserRela where topicId = '${strTopicId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineQxUsersCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortQxUsersBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortQxUsersBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortQxUsersBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortQxUsersBy');
  }

  /*
   * 用户ID
   */
  public get userId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUserId_q');
  }
  /*
   * 用户名
   */
  public get userName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUserName_q');
  }
  //主题用户角色
  public get TopicUserRole_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlTopicUserRole_q');
  }
  /*
   * 主题用户角色
   */
  public set TopicUserRole_q(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlTopicUserRole_q', value);
  }
  /*
   * 设置排序字段-相当使用ViewState功能  主题用户关系
   */
  public set hidSortvRTUserRelaBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvRTUserRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvRTUserRelaBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvRTUserRelaBy');
  }
  /*
   * 设置排序字段-相当使用ViewState功能 主题观点关系
   */
  public set hidSortvRTViewpointRelaBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvRTViewpointRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvRTViewpointRelaBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvRTViewpointRelaBy');
  }
  /*
   * 设置排序字段-相当使用ViewState功能  主题论文关系
   */
  public set hidSortvRTPaperRelaBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvRTPaperRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvRTPaperRelaBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvRTPaperRelaBy');
  }
  /*
   * 关键字
   */
  public get Keyword_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtKeyword_q');
  }

  /*
   * 学号 (Used In CombineCondition())
   */
  public get topicId(): string {
    let strTopicId = ResearchTopicListEx.GetPropValue('topicId');
    if (IsNullOrEmpty(strTopicId) == true) {
      strTopicId = clsPrivateSessionStorage.topicIdInTree;
    }
    return strTopicId;
  }
  public async getTopicName(): Promise<string> {
    const strTopicId = this.topicId;
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    const objResearchTopic = await ResearchTopic_GetObjByTopicIdCache(strTopicId, strIdCurrEduCls);
    if (objResearchTopic == null) return '';
    return objResearchTopic.topicName;
  }
  public static btn_Click(
    strCommandName: string,
    strKeyId: any,
    divLayout: HTMLDivElement,
  ): string {
    const objPage = new ResearchTopicListEx(divLayout);

    let arrKeyIds: Array<string> = [];
    // if (ResearchTopicListEx.divDataLst != null) {
    //   arrKeyIds = GetCheckedKeyIdsInDivObj(ResearchTopicListEx.divDataLst);
    // }
    // strKeyId = GetFirstCheckedKeyIdInDivObj(PaperAttention.divDataLst);
    let objPage_PaperDetail;
    let strKey;
    let strType;
    let strUser;
    let strPubParentId;
    let objData = strKeyId;
    switch (strCommandName) {
      case 'PaperDetail':
      case 'PdfDetail':
        objPage_PaperDetail = new PaperDetail(divLayout);
        objPage_PaperDetail.PageLoad();
        break;
      case 'SysComment':
        strKey = objData.keyId;
        strType = objData.commentTypeId;
        strUser = objData.viewpointUserId;
        strPubParentId = objData.pubParentId;
        objPage.SysComment(strKey, strUser, strPubParentId);
        break;
      case 'AddVote':
        // objPage.btnAddVote_Click(objData.strSubViewpointId, objData.updUser);
        break;
      case 'QAnswer':
        // objPage.btnq
        break;
      case 'AddQA':
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return '';
        }

      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PaperAttention.btn_Click');
        break;
    }
    return '';
  }
  public async SysComment(strAnswerId: string, strUserId: string, strQuestionsId: string) {
    try {
      // 使用动态导入加载函数代码块
      const { CommQuestionAnswer } = await import('../InteractManage/CommQuestionAnswer');
      // console.error('CommQuestionAnswer');
      // 调用加载的函数
      CommQuestionAnswer.divLayout = this.divLayout;
      const objPage = new CommQuestionAnswer();
      // const objLayOut = objPage.getDivName(enumDivType.LayOut_01);
      // if (objLayOut == null) return;

      await objPage.SysComment(strAnswerId, strUserId, strQuestionsId);
    } catch (error) {
      console.error('加载函数:[CommQuestionAnswer]时出现错误:', error);
    }
  }
}
