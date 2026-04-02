import $ from 'jquery';
import { Pub_QxUsersList } from '../GradEduPublicPage/Pub_QxUsersList';
import { Pub_RTPaperRelaList } from '../GradEduPublicPage/Pub_RTPaperRelaList';
import { Pub_RTUserRelaList } from '../GradEduPublicPage/Pub_RTUserRelaList';
import { Pub_RTViewpointRelaList } from '../GradEduPublicPage/Pub_RTViewpointRelaList';
import { Pub_ViewpointList } from '../GradEduPublicPage/Pub_ViewpointList';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsViewpointScoreEN } from '@/ts/L0Entity/GraduateEdu/clsViewpointScoreEN';
import { clsSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsSysCommentEN';
import { clsvSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsvSysCommentEN';
import { clsConceptAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsConceptAttachmentEN';
import { clsConceptEN } from '@/ts/L0Entity/GradEduTopic/clsConceptEN';
import { clske_SubEN } from '@/ts/L0Entity/GradEduTopic/clske_SubEN';
import { clske_SuperEN } from '@/ts/L0Entity/GradEduTopic/clske_SuperEN';
import { clsObjectiveAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsObjectiveAttachmentEN';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import { clsRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointRelaEN';
import { clsSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsSysSkillEN';
import { clsSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsSysSocialRelationsEN';
import { clsTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsTopicObjectiveEN';
import { clsViewpointAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointAttachmentEN';
import { clsViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointEN';
import { clsViewpointLikeLogEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointLikeLogEN';
import { clsvRTConceptRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTConceptRelaEN';
import { clsvRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN';

import { clsvRTTopicObjectiveRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTTopicObjectiveRelaEN';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { clsvRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointRelaEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { clsTopicUserRoleEN } from '@/ts/L0Entity/RT_Params/clsTopicUserRoleEN';
import { clsvUsersEN } from '@/ts/L0Entity/UserManage/clsvUsersEN';

import { ViewpointScore_AddNewRecordAsync } from '@/ts/L3ForWApi/GraduateEdu/clsViewpointScoreWApi';
import { vSysComment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsvSysCommentWApi';
import { ConceptAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsConceptAttachmentWApi';
import { Concept_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsConceptWApi';
import { ke_Sub_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clske_SubWApi';
import { ke_Super_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clske_SuperWApi';
import { ObjectiveAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsObjectiveAttachmentWApi';
import {
  ResearchTopic_GetObjByTopicIdAsync,
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
import { ViewpointAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsViewpointAttachmentWApi';
import {
  ViewpointLikeLog_AddNewRecordAsync,
  ViewpointLikeLog_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsViewpointLikeLogWApi';
import { Viewpoint_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsViewpointWApi';
import { vRTConceptRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTConceptRelaWApi';

import { vRTTopicObjectiveRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTTopicObjectiveRelaWApi';
import { vRTViewpointRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointRelaWApi';
import {
  SysVote_AddNewRecordAsync,
  SysVote_GetObjLstAsync,
  SysVote_GetRecCountByCondAsync,
  SysVote_IsExistRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import { LiteratureType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { TopicUserRole_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsTopicUserRoleWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';

import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { SysCommentEx_AddNewRecordExAsync } from '@/ts/L3ForWApiExShare/GraduateEdu/clsSysCommentExWApi';
import { Pub_PaperList } from '@/views/GradEduPublicPage/Pub_PaperList';
import { ResearchTopicEx_DelRecordAsyncEx } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { enumSysVoteType } from '@/ts/L0Entity/RT_Params/clsSysVoteTypeEN';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { clsvRTSysSkillRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTSysSkillRelaEN';
import { vRTSysSkillRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTSysSkillRelaWApi';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import { vRTViewpoint_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointWApi';
import { ResearchTopicCRUD } from '@/viewsBase/GradEduTopic/ResearchTopicCRUD';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
import { clsQxUserRoleRelationEN } from '@/ts/L0Entity/UsersRight/clsQxUserRoleRelationEN';
import { QxUserRoleRelation_GetObjLstAsync } from '@/ts/L3ForWApi/UsersRight/clsQxUserRoleRelationWApi';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { userStore } from '@/store/modulesShare/user';
import { sysVoteStore } from '@/store/modules/sysVote';

declare function ShowDialog(strOpType: string): void;
declare function HideDialog(): void;
declare function HideDialogTwo(): void;

declare function HideDialogThree(): void;
declare function HideDialogFour(): void;

declare function HideDialog3(): void;

declare let window: any;
/* ResearchTopic_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class KnowledgeEconomyListEx extends ResearchTopicCRUD {
  public static parentId = '';
  //public static mstrListDiv: string = "divDataLst";
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

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
        (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
      */
  public async PageLoad() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //strWhereCond = await this.CombineResearchTopicCondition();
        //const responseText = await ResearchTopic_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {

        //});
        await this.Bind_TopicNameList();
        //主题下拉框
        // const ddlOperationTypeId_q = await this.BindDdl_TopicName_q("ddlTopicName", "1=1");
        //设置缓存分类字段；

        //获取用户角色来判断显示不同的列表数据；

        //$('#lnkUserName').html(objvUserRoleRelation.userName + '(' + objvUserRoleRelation.roleName + ')');
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
  //主题
  public async Bind_TopicNameList() {
    try {
      const strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;

      let arrResearchTopicObjLst: Array<clsResearchTopicEN> = [];

      await ResearchTopic_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrResearchTopicObjLst = <Array<clsResearchTopicEN>>jsonData;
      });
      let strhtml = '';
      for (let i = 0; i < arrResearchTopicObjLst.length; i++) {
        const objResearchTopic = arrResearchTopicObjLst[i];
        if (i == 0) {
          if (clsPrivateSessionStorage.topicName == '') {
            clsPrivateSessionStorage.topicIdInTree = objResearchTopic.topicId;
            clsPrivateSessionStorage.topicName = objResearchTopic.topicName;
            $('#topicName').html(objResearchTopic.topicName);
          } else {
            $('#topicName').html(clsPrivateSessionStorage.topicName);
          }
        }
        strhtml += `<dd><a onclick=BtnTopicName_Click("${objResearchTopic.topicId}","${objResearchTopic.topicName}")> ${objResearchTopic.topicName}</a></dd>`;
      }
      $('#dlTopicNameList').html(strhtml);
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班教师
  public async BtnTopicName_Click(strkey: string, strName: string) {
    //$("#hidIdCurrEduCls").val(strkey);
    clsPrivateSessionStorage.topicIdInTree = strkey;
    clsPrivateSessionStorage.topicName = strName;
    $('#topicName').html(strName);

    this.GetAllFunctionMethod();
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

  //获取主题数据

  public async BindDdl_TopicName_q(dllTopicName: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(dllTopicName);
    if (objDdl == null) {
      const strMsg = `下拉框：${dllTopicName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrResearchTopicObjLst = await ResearchTopic_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        dllTopicName,
        arrResearchTopicObjLst,
        clsResearchTopicEN.con_TopicId,
        clsResearchTopicEN.con_TopicName,
        '',
      );
      console.log('完成dllTopicName!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //得到3个关系列表数据；
  public async GetAllFunctionMethod() {
    ////主题用户关系；
    //this.BindGv_vRTUserRela();
    ////主题观点关系；
    //this.BindGv_vRTViewpointRela();
    ////主题论文关系；
    //this.BindGv_vRTPaperRela();
    //this.GetTopicData();
    //组合关系；
    await this.BindGv_AllTopicRela();
    //调用隐藏方法
    this.GetId();
  }
  public GetId() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //得到分类子类ID 判断显示隐藏数据；
    const strKeyId = GetInputValueInDivObj(divName, 'hidke_SubId');
    let strMsg = '';
    switch (strKeyId) {
      case '0001':
        $('#infoViewpoint').hide();
        $('#infoExpert').hide();
        $('#infoConcept').hide();
        $('#infoFacts').show();
        $('#infoBasis').hide();
        $('#infoSysskill').hide();
        $('#infoSysSocialRelations').hide();
        break;
      case '0002':
        $('#infoViewpoint').hide();
        $('#infoExpert').hide();
        $('#infoConcept').hide();
        $('#infoFacts').hide();
        $('#infoBasis').show();
        $('#infoSysskill').hide();
        $('#infoSysSocialRelations').hide();
        break;
      case '0003':
        $('#infoViewpoint').hide();
        $('#infoExpert').hide();
        $('#infoConcept').show();
        $('#infoFacts').hide();
        $('#infoBasis').hide();
        $('#infoSysskill').hide();
        $('#infoSysSocialRelations').hide();
        break;
      case '0004':
        $('#infoViewpoint').show();
        $('#infoExpert').hide();
        $('#infoConcept').hide();
        $('#infoFacts').hide();
        $('#infoBasis').hide();
        $('#infoSysskill').hide();
        $('#infoSysSocialRelations').hide();
        break;
      case '0005':
        $('#infoViewpoint').hide();
        $('#infoExpert').show();
        $('#infoConcept').hide();
        $('#infoFacts').hide();
        $('#infoBasis').hide();
        $('#infoSysskill').hide();
        $('#infoSysSocialRelations').hide();
        break;
      case '0006':
        $('#infoViewpoint').hide();
        $('#infoExpert').hide();
        $('#infoConcept').hide();
        $('#infoFacts').hide();
        $('#infoBasis').hide();
        $('#infoSysskill').show();
        $('#infoSysSocialRelations').hide();
        break;
      case '0007':
        $('#infoViewpoint').hide();
        $('#infoExpert').hide();
        $('#infoConcept').hide();
        $('#infoFacts').hide();
        $('#infoBasis').hide();
        $('#infoSysskill').hide();
        $('#infoSysSocialRelations').show();
        break;
      default:
        strMsg = '没有数据需要被处理！';
        alert(strMsg);
        break;
    }
  }

  public GetDataShow() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strKeyId = GetInputValueInDivObj(divName, 'hidke_SuperId');
    let strMsg = '';
    switch (strKeyId) {
      case '0001':
        $('#infoViewpoint').hide();
        $('#infoExpert').hide();
        $('#infoConcept').show();
        $('#infoFacts').show();
        $('#infoBasis').show();
        $('#infoSysskill').hide();
        $('#infoSysSocialRelations').hide();
        break;
      case '0002':
        $('#infoViewpoint').show();
        $('#infoExpert').show();
        $('#infoConcept').hide();
        $('#infoFacts').hide();
        $('#infoBasis').hide();
        $('#infoSysskill').hide();
        $('#infoSysSocialRelations').hide();
        break;
      case '0003':
        $('#infoViewpoint').hide();
        $('#infoExpert').hide();
        $('#infoConcept').hide();
        $('#infoFacts').hide();
        $('#infoBasis').hide();
        $('#infoSysskill').show();
        $('#infoSysSocialRelations').hide();
        break;
      case '0004':
        $('#infoViewpoint').hide();
        $('#infoExpert').hide();
        $('#infoConcept').hide();
        $('#infoFacts').hide();
        $('#infoBasis').hide();
        $('#infoSysskill').hide();
        $('#infoSysSocialRelations').show();
        break;

      default:
        strMsg = '没有数据需要被处理！';
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */
  public async CombineResearchTopicCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.topicName_q != "") {
      //    strWhereCond += ` And ${clsResearchTopicEN.con_TopicName} like '%${this.topicName_q}%'`;
      //}
      //if (this.TopicProposePeople_q != "") {
      //    strWhereCond += ` And ${clsvResearchTopicEN.con_UserName} like '%${this.TopicProposePeople_q}%'`;
      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineResearchTopicCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //动态主题数据结构；
  public async GetTopicData() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // const strWhereCond = await this.CombineResearchTopicCondition();
    //声明主题变量
    // let arrResearchTopicObjLst: Array<clsResearchTopicEN> = [];

    // await ResearchTopic_GetObjLstAsync(strWhereCond).then((jsonData) => {
    //   arrResearchTopicObjLst = <Array<clsResearchTopicEN>>jsonData;
    // });

    //知识点父类

    const strWhereCond1 = '1=1';
    //声明主题变量
    let arrke_SuperObjLst: Array<clske_SuperEN> = [];

    await ke_Super_GetObjLstAsync(strWhereCond1).then((jsonData) => {
      arrke_SuperObjLst = <Array<clske_SuperEN>>jsonData;
    });

    //知识点子类
    const strWhereCond2 = '1=1';
    //声明主题变量
    let arrSubObjLst: Array<clske_SubEN> = [];

    await ke_Sub_GetObjLstAsync(strWhereCond2).then((jsonData) => {
      arrSubObjLst = <Array<clske_SubEN>>jsonData;
    });

    let strhtml = '';
    $('#TreeBind_KE li').remove();
    if (arrke_SuperObjLst.length > 0) {
      //循环数据
      for (let i = 0; i < arrke_SuperObjLst.length; i++) {
        const strke_SuperId = arrke_SuperObjLst[i].keSuperId;

        if (i == 0) {
          strhtml += ` <li id="li${arrke_SuperObjLst[i].keSuperId}" ><a href="javascript:void(0)" class="main" onclick=HideTheme_Click("${arrke_SuperObjLst[i].keSuperId}")>${arrke_SuperObjLst[i].keSuperNameCn}(${arrke_SuperObjLst[i].keSuperNameEn})</a><ul class="submenu"  style = "display: block;">`;
        } else {
          strhtml += ` <li id="li${arrke_SuperObjLst[i].keSuperId}"><a href="javascript:void(0)" class="main"  onclick=HideTheme_Click("${arrke_SuperObjLst[i].keSuperId}")>${arrke_SuperObjLst[i].keSuperNameCn}(${arrke_SuperObjLst[i].keSuperNameEn})</a><ul class="submenu"  style = "display: none;">`;
        }
        //通过父ID得到子类数据
        let arrke_SubObjLst = arrSubObjLst;
        arrke_SubObjLst = arrke_SubObjLst.filter((x) => x.keSuperId == strke_SuperId);
        for (let j = 0; j < arrke_SubObjLst.length; j++) {
          const objke_Sub = arrke_SubObjLst[j];
          //默认存放第一条数据显示；
          if (j == 0) {
            //判断存放的id控件是否为空；
            if (GetInputValueInDivObj(divName, 'hidke_SubId') == '') {
              ////存放Id
              $('#hidke_SubId').val(objke_Sub.keSubId);
              strhtml += `<li id="liTwo${objke_Sub.keSubId}" onclick=btnSelectke_Sub("${objke_Sub.keSubId}","${objke_Sub.keSubNameCn}")><a href="javascript:void(0)" class="selected" >${objke_Sub.keSubNameCn}</a></li>`;
            } else {
              strhtml += `<li id="liTwo${objke_Sub.keSubId}" onclick=btnSelectke_Sub("${objke_Sub.keSubId}","${objke_Sub.keSubNameCn}")><a href="javascript:void(0)" >${objke_Sub.keSubNameCn}</a></li>`;
            }
          } else {
            strhtml += `<li id="liTwo${objke_Sub.keSubId}" onclick=btnSelectke_Sub("${objke_Sub.keSubId}","${objke_Sub.keSubNameCn}")><a href="javascript:void(0)">${objke_Sub.keSubNameCn}</a></li>`;
          }
        }
        strhtml += '</ul></li>';
      }

      $('#TreeBind_KE').append(strhtml);

      this.GetAllFunctionMethod();
    }
  }

  ////////////////////////////////////////主题用户关系
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevRTConceptRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTConceptRelaEN.con_TopicId} = '${strTopicId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTUserRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  //动态获取所有相关关系表数据
  public async BindGv_AllTopicRela() {
    const strUserId = userStore.getUserId;
    //一、条件串
    // //1用户关系
    // const strWhereUserRela = this.CombinevRTUserRelaCondition();
    // //2论文关系
    // const strWherePaperRela = this.CombinevRTPaperRelaCondition();
    //3观点关系
    const strWhereViewpointRela1 = this.CombinevRTViewpointRelaCondition1();
    const strWhereViewpointRela2 = this.CombinevRTViewpointRelaCondition2();
    //附件
    const strWhereCondAttachment = '1=1';
    //5点赞 查询当前用户 点赞数据；
    //strWhereCondLike = `1=1 And ${clsViewpointLikeLogEN.con_UpdUser} = '${strUserId}'`;// 老方法
    const strWhereCondLike = `1=1 And ${clsSysVoteEN.con_UpdUser} = '${strUserId}'`; //新0605
    const strVoteType = '';

    //6相关概念
    const strWhereConcept = await this.CombinevRTConceptRelaCondition();

    //7客观事实
    const strWhereFacts = `topicId='${clsPrivateSessionStorage.topicIdInTree}' and objectiveType='01'`;

    //8客观数据
    const strWhereBasis = `topicId='${clsPrivateSessionStorage.topicIdInTree}' and objectiveType='02'`;

    //技能
    const strWhere_Topic = `topicId='${clsPrivateSessionStorage.topicIdInTree}'`;

    //9、社会关系
    // const strWhereSysSocialRelations = `topicId='${clsPrivateSessionStorage.topicIdInTree}'`;

    //用户分数
    // const strWhereCond10 = " parentId='root' and  commentTypeId='08' order by Score Desc";

    //二、数据源声明
    // const arrvRTUserRelaObjLst: Array<clsvRTUserRelaEN> = [];
    // const arrvRTPaperRelaObjLst: Array<clsvRTPaperRelaEN> = [];
    let arrvRTViewpointRelaObjLst1: Array<clsvRTViewpointRelaEN> = [];
    let arrvRTViewpointRelaObjLst2: Array<clsvRTViewpointRelaEN> = [];
    //获取观点图片
    let arrViewpointAttachmentObjLst: Array<clsViewpointAttachmentEN> = [];
    let arrViewpointAttachmentObjLst2: Array<clsViewpointAttachmentEN> = [];

    //获取概念图片
    let arrConceptAttachmentObjLst: Array<clsConceptAttachmentEN> = [];
    let arrConceptAttachmentObjLst2: Array<clsConceptAttachmentEN> = [];

    //获取客观图片
    let arrObjectiveAttachmentObjLst: Array<clsObjectiveAttachmentEN> = [];
    let arrObjectiveAttachmentObjLst2: Array<clsObjectiveAttachmentEN> = [];

    //获取当前用户的点赞数据
    //strIdCurrEduclsarrViewpointLikeLogObjLst: Array<clsViewpointLikeLogEN> = [];//老方法

    //获取相关概念
    let arrvRTConceptObjLst: Array<clsvRTConceptRelaEN> = [];

    //客观事实
    let arrvRTTopicObjectiveRelaObjLst1: Array<clsvRTTopicObjectiveRelaEN> = [];

    //客观数据
    let arrvRTTopicObjectiveRelaObjLst2: Array<clsvRTTopicObjectiveRelaEN> = [];

    //技能
    let arrvRTSysSkillObjLst: Array<clsvRTSysSkillRelaEN> = [];

    //社会关系
    let arrvRTSysSocialRelaObjLst: Array<clsvRTViewpointEN> = [];

    //三、方法获取调用
    try {
      arrvRTViewpointRelaObjLst1 = await vRTViewpointRela_GetObjLstAsync(strWhereViewpointRela1);

      arrvRTViewpointRelaObjLst2 = await vRTViewpointRela_GetObjLstAsync(strWhereViewpointRela2);

      arrViewpointAttachmentObjLst2 = await ViewpointAttachment_GetObjLstAsync(
        strWhereCondAttachment,
      );

      //获取相关概念数据
      arrvRTConceptObjLst = await vRTConceptRela_GetObjLstAsync(strWhereConcept);

      //客观事实
      arrvRTTopicObjectiveRelaObjLst1 = await vRTTopicObjectiveRela_GetObjLstAsync(strWhereFacts);

      //客观数据
      arrvRTTopicObjectiveRelaObjLst2 = await vRTTopicObjectiveRela_GetObjLstAsync(strWhereBasis);

      //用户分数
      // const arrvSysCommentObjLst = await vSysComment_GetObjLstAsync(strWhereCond10);

      //获取技能
      arrvRTSysSkillObjLst = await vRTSysSkillRela_GetObjLstAsync(strWhere_Topic);
      //社会关系
      arrvRTSysSocialRelaObjLst = await vRTViewpoint_GetObjLstAsync(strWhere_Topic);

      //相关概念附件图片
      arrConceptAttachmentObjLst2 = await ConceptAttachment_GetObjLstAsync(strWhereCondAttachment);

      //客观附件图片
      arrObjectiveAttachmentObjLst2 = await ObjectiveAttachment_GetObjLstAsync(
        strWhereCondAttachment,
      );

      //得到管理员教师
      const strWhereUserRoleRel =
        " roleId in(00620001,00620002) And QxprjId='0062' order by userId asc ";

      let arrUserRoleRelationObjLst: Array<clsQxUserRoleRelationEN> = [];
      arrUserRoleRelationObjLst = await QxUserRoleRelation_GetObjLstAsync(strWhereUserRoleRel);

      //得到学生数据
      //获取用户缓存数据

      const strWhere_User = '1=1';
      const arrvUserStuNameObjLst = await vUsersSim_GetObjLstAsync(strWhere_User);

      let strhtml = `<div style="font-size:20px; color: #009688; font-weight: bold; margin-bottom:10px;" id="TopicTitle">当前主题：${clsPrivateSessionStorage.topicName}</div>`;

      //个人观点
      strhtml +=
        '<div class="info" id="infoViewpoint"><div class="title btn-3"><a href="javascript:void(0)" title="个人观点">个人观点</a></div><ul class="artlist">';
      let v = 0; //给内容加个序号
      for (let i = 0; i < arrvRTViewpointRelaObjLst1.length; i++) {
        //得到viewpointId；
        const strViewpointId = arrvRTViewpointRelaObjLst1[i].viewpointId;
        v++;
        strhtml += `<li><span class="rowtit color3 btnLeft">${v}.[观点名称]：</span><span class="abstract-text">${arrvRTViewpointRelaObjLst1[i].viewpointName}</span>`;
        if (
          arrvRTViewpointRelaObjLst1[i].versionCount > 0 &&
          arrvRTViewpointRelaObjLst1[i].versionCount != null
        ) {
          strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('个人观点历史版本', '../GradEduEx/HistoricalVersion?Key=${arrvRTViewpointRelaObjLst1[i].viewpointId}&Type=03')"> ${clsIcon.faCommentDots}历史版本</button >`;
        }
        strhtml += '</li>';
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[观点内容]：</span><span class="abstract-text">${arrvRTViewpointRelaObjLst1[i].viewpointContent}</span></li>`;
        //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[类型]：</span><span class="abstract-text">' + arrvRTViewpointRelaObjLst1[i].viewpointTypeName + '</span></li>';
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${arrvRTViewpointRelaObjLst1[i].viewpointTypeName}]：</span><span class="abstract-text">${arrvRTViewpointRelaObjLst1[i].reason}</span></li>`;

        //查询附件
        arrViewpointAttachmentObjLst = arrViewpointAttachmentObjLst2.filter(
          (x) => x.viewpointId == strViewpointId,
        );
        if (arrViewpointAttachmentObjLst.length > 0) {
          for (let y = 0; y < arrViewpointAttachmentObjLst.length; y++) {
            const strAddressAndPortfull =
              GetAddressAndPort() + arrViewpointAttachmentObjLst[y].filePath;
            strhtml += `<li><div class="example"><img src="${strAddressAndPortfull}" alt="" data-action="zoom" id="txtImgPath${arrViewpointAttachmentObjLst[y].viewpointAttachmentId}"/></div></li>`;
          }
        }

        //如果该观点是老师，编辑人后面加上教师标识
        const objUserRoleRel = arrUserRoleRelationObjLst.find(
          (x) => x.userId == arrvRTViewpointRelaObjLst1[i].updUser,
        );

        if (objUserRoleRel != null) {
          const strUserName = await vQxUsersSimStore.getUserName(objUserRoleRel.userId);
          if (arrvRTViewpointRelaObjLst1[i].viewsUserId == arrvRTViewpointRelaObjLst1[i].updUser) {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑引用人]：${strUserName}(教师)</span>`;
          } else {
            const arrvUsersRT = arrvUserStuNameObjLst.find(
              (x) => x.userId == arrvRTViewpointRelaObjLst1[i].viewsUserId,
            );
            if (arrvUsersRT != null) {
              strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑&nbsp;/&nbsp;引用人]：${arrvUsersRT.userName}&nbsp;/&nbsp;${strUserName}(教师)</span>`;
            }
          }
        } else {
          //等于空，则不是教师所以需要通过缓存用户数据调取用户名称
          const arrvUsers = arrvUserStuNameObjLst.find(
            (x) => x.userId == arrvRTViewpointRelaObjLst1[i].viewsUserId,
          );
          if (arrvUsers != null) {
            if (
              arrvRTViewpointRelaObjLst1[i].viewsUserId == arrvRTViewpointRelaObjLst1[i].updUser
            ) {
              strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[编辑引用人]：</span>${arrvUsers.userName}`;
            } else {
              //得到引用人
              const arrvUsersRT = arrvUserStuNameObjLst.find(
                (x) => x.userId == arrvRTViewpointRelaObjLst1[i].updUser,
              );
              if (arrvUsersRT != null) {
                strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[编辑&nbsp;/&nbsp;引用人]：</span>${arrvUsers.userName}&nbsp;/&nbsp;${arrvUsersRT.userName}`;
              }
            }
          }
        }

        if (arrvRTViewpointRelaObjLst1[i].viewsDate == arrvRTViewpointRelaObjLst1[i].updDate) {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[编辑引用时间]：</span>${arrvRTViewpointRelaObjLst1[i].viewsDate}`;
        } else {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[编辑&nbsp;/&nbsp;引用时间]：</span>${arrvRTViewpointRelaObjLst1[i].viewsDate}&nbsp;/&nbsp;${arrvRTViewpointRelaObjLst1[i].updDate}`;
        }

        if (objUserRoleRel == null) {
          //是否提交
          if (arrvRTViewpointRelaObjLst1[i].isSubmit == true) {
            strhtml += '&nbsp;&nbsp;<span class="rowtit color5">[已提交]</span></li>';

            strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[评论]：</span>';

            //objLike = arrViewpointLikeLogObjLst.find(x => x.viewpointId == strViewpointId);//老方法
            const objLike = sysVoteStore.getObj(strVoteType, strUserId, strViewpointId); //新0605

            //点赞
            if (objLike == null) {
              strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${arrvRTViewpointRelaObjLst1[i].viewpointId}","${arrvRTViewpointRelaObjLst1[i].viewsUserId}","03")><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞"></a>`;
            } else {
              strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${arrvRTViewpointRelaObjLst1[i].viewpointId}","${arrvRTViewpointRelaObjLst1[i].viewsUserId}","03")><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞"></a>`;
            }
            strhtml += `&nbsp;${arrvRTViewpointRelaObjLst1[i].okCount}&nbsp;&nbsp;`;
            //评论
            strhtml += `&nbsp;&nbsp;<span style="color:royalblue" >评论数:${arrvRTViewpointRelaObjLst1[i].appraiseCount}</span >`;
            //评分

            if (arrvRTViewpointRelaObjLst1[i].score != 0) {
              strhtml += `&nbsp;&nbsp;综合评分:${arrvRTViewpointRelaObjLst1[i].score}`;
            }
            if (arrvRTViewpointRelaObjLst1[i].teaScore != 0) {
              strhtml += `&nbsp;&nbsp;教师评分:${arrvRTViewpointRelaObjLst1[i].teaScore}`;
            }
            if (arrvRTViewpointRelaObjLst1[i].stuScore != 0) {
              strhtml += `&nbsp;&nbsp;学生评分:${arrvRTViewpointRelaObjLst1[i].stuScore}`;
            }

            strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('个人观点评论', '../GradEduTools/SysComment?Key=${arrvRTViewpointRelaObjLst1[i].viewpointId}&Type=03&User=${arrvRTViewpointRelaObjLst1[i].updUser}&pubParentId=${clsPrivateSessionStorage.topicIdInTree}')"> ${clsIcon.faCommentDots}添加评论</button >`;

            //strhtml += '&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" data-toggle="modal" onclick = btnShowAppraise_Click("' + arrvRTViewpointRelaObjLst1[i].viewpointId + '","03","' + arrvRTViewpointRelaObjLst1[i].updUser + '") > ${clsIcon.faCommentDots}添加评论</button >';

            strhtml += '</li>';
          } else {
            strhtml += '&nbsp;&nbsp;<span class="rowtit colorRed">[未提交]</span></li>';
          }
        } else {
          strhtml += '</li>';
        }

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //专家观点
      strhtml +=
        '<div class="info" id="infoExpert"><div class="title btn-3"><a href="javascript:void(0)" title="专家观点">专家观点</a></div><ul class="artlist">';
      v = 0; //给内容加个序号
      for (let i = 0; i < arrvRTViewpointRelaObjLst2.length; i++) {
        //得到viewpointId；
        const strViewpointId = arrvRTViewpointRelaObjLst2[i].viewpointId;
        v++;

        //strhtml += '<li><span class="rowtit color3">' + v + '.[观点名称]：</span><span class="abstract-text">' + arrvRTViewpointRelaObjLst2[i].viewpointName + '</span></li>';
        strhtml += `<li><span class="rowtit color3 btnLeft">${v}.[观点名称]：</span><span class="abstract-text">${arrvRTViewpointRelaObjLst2[i].viewpointName}</span>`;
        if (
          arrvRTViewpointRelaObjLst2[i].versionCount > 0 &&
          arrvRTViewpointRelaObjLst2[i].versionCount != null
        ) {
          strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('专家观点历史版本', '../GradEduEx/HistoricalVersion?Key=${arrvRTViewpointRelaObjLst2[i].viewpointId}&Type=04')"> ${clsIcon.faCommentDots}历史版本</button >`;
        }
        strhtml += '</li>';

        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[观点内容]：</span><span class="abstract-text">${arrvRTViewpointRelaObjLst2[i].viewpointContent}</span></li>`;
        //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[类型]：</span><span class="abstract-text">' + arrvRTViewpointRelaObjLst2[i].viewpointTypeName + '</span></li>';
        strhtml += `<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${arrvRTViewpointRelaObjLst2[i].viewpointTypeName}]：</span><span class="abstract-text">${arrvRTViewpointRelaObjLst2[i].reason}</span></li>`;

        //查询附件
        arrViewpointAttachmentObjLst = arrViewpointAttachmentObjLst2.filter(
          (x) => x.viewpointId == strViewpointId,
        );
        if (arrvRTViewpointRelaObjLst2.length > 0) {
          for (let y = 0; y < arrViewpointAttachmentObjLst.length; y++) {
            const strAddressAndPortfull =
              GetAddressAndPort() + arrViewpointAttachmentObjLst[y].filePath;
            strhtml += `<br/><li><div class="example"><img src="${strAddressAndPortfull}" alt="" data-action="zoom" id="txtImgPath${arrViewpointAttachmentObjLst[y].viewpointAttachmentId}"/></div></li>`;
          }
        }

        //如果该观点是老师，编辑人后面加上教师标识
        const objUserRoleRel = arrUserRoleRelationObjLst.find(
          (x) => x.userId == arrvRTViewpointRelaObjLst2[i].updUser,
        );
        if (objUserRoleRel != null) {
          const strUserName = await vQxUsersSimStore.getUserName(objUserRoleRel.userId);
          if (arrvRTViewpointRelaObjLst2[i].viewsUserId == arrvRTViewpointRelaObjLst2[i].updUser) {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑引用人]：${strUserName}(教师)</span>`;
          } else {
            const arrvUsersRT = arrvUserStuNameObjLst.find(
              (x) => x.userId == arrvRTViewpointRelaObjLst2[i].viewsUserId,
            );
            if (arrvUsersRT != null) {
              strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑&nbsp;/&nbsp;引用人]：${arrvUsersRT.userName}&nbsp;/&nbsp;${strUserName}(教师)</span>`;
            }
          }
        } else {
          const arrvUsers = arrvUserStuNameObjLst.find(
            (x) => x.userId == arrvRTViewpointRelaObjLst2[i].viewsUserId,
          );
          if (arrvUsers != null) {
            if (
              arrvRTViewpointRelaObjLst2[i].viewsUserId == arrvRTViewpointRelaObjLst2[i].updUser
            ) {
              strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[编辑引用人]：</span>${arrvUsers.userName}`;
            } else {
              const arrvUsersRT = arrvUserStuNameObjLst.find(
                (x) => x.userId == arrvRTViewpointRelaObjLst2[i].updUser,
              );
              if (arrvUsersRT != null) {
                strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[编辑&nbsp;/&nbsp;引用人]：</span>${arrvUsers.userName}&nbsp;/&nbsp;${arrvUsersRT.userName}`;
              }
            }
          }
        }

        if (arrvRTViewpointRelaObjLst2[i].viewsDate == arrvRTViewpointRelaObjLst2[i].updDate) {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[编辑引用时间]：</span>${arrvRTViewpointRelaObjLst2[i].viewsDate}`;
        } else {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[编辑&nbsp;/&nbsp;引用时间]：</span>${arrvRTViewpointRelaObjLst2[i].viewsDate}&nbsp;/&nbsp;${arrvRTViewpointRelaObjLst2[i].updDate}`;
        }

        if (objUserRoleRel == null) {
          if (arrvRTViewpointRelaObjLst2[i].isSubmit == true) {
            strhtml += '&nbsp;&nbsp;<span class="rowtit color5">[已提交]</span></li>';

            strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[评论]：</span>';
            //点赞
            //objLike = arrViewpointLikeLogObjLst.find(x => x.viewpointId == strViewpointId);//老方法
            const objLike = sysVoteStore.getObj(strVoteType, strUserId, strViewpointId); //新0605
            //if (objLike == null) {
            //    strhtml += '<a href="javascript:void(0)" onclick = btnAddLikeLog_Click("' + arrvRTViewpointRelaObjLst2[i].viewpointId + '")><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞"></a>';
            //} else {
            //    strhtml += '<a href="javascript:void(0)" onclick = btnAddLikeLog_Click("' + arrvRTViewpointRelaObjLst2[i].viewpointId + '")><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞"></a>';
            //}
            if (objLike == null) {
              strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${arrvRTViewpointRelaObjLst2[i].viewpointId}","${arrvRTViewpointRelaObjLst2[i].viewsUserId}","04")><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞"></a>`;
            } else {
              strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${arrvRTViewpointRelaObjLst2[i].viewpointId}","${arrvRTViewpointRelaObjLst2[i].viewsUserId}","04")><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞"></a>`;
            }
            strhtml += `&nbsp;${arrvRTViewpointRelaObjLst2[i].okCount}&nbsp;&nbsp;`;
            //评论
            strhtml += `&nbsp;&nbsp;<span  style="color:royalblue" >评论数:${arrvRTViewpointRelaObjLst2[i].appraiseCount}</span >`;
            //评分
            if (arrvRTViewpointRelaObjLst2[i].score != 0) {
              strhtml += `&nbsp;&nbsp;综合评分:${arrvRTViewpointRelaObjLst2[i].score}`;
            }
            if (arrvRTViewpointRelaObjLst2[i].teaScore != 0) {
              strhtml += `&nbsp;&nbsp;教师评分:${arrvRTViewpointRelaObjLst2[i].teaScore}`;
            }
            if (arrvRTViewpointRelaObjLst2[i].stuScore != 0) {
              strhtml += `&nbsp;&nbsp;学生评分:${arrvRTViewpointRelaObjLst2[i].stuScore}`;
            }
            strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('专家观点评论', '../GradEduTools/SysComment?Key=${arrvRTViewpointRelaObjLst2[i].viewpointId}&Type=04&User=${arrvRTViewpointRelaObjLst2[i].updUser}&pubParentId=${clsPrivateSessionStorage.topicIdInTree}')"> ${clsIcon.faCommentDots}添加评论</button >`;
            //strhtml += '&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick = btnShowAppraise_Click("' + arrvRTViewpointRelaObjLst2[i].viewpointId + '","04","' + arrvRTViewpointRelaObjLst2[i].updUser + '") > ${clsIcon.faCommentDots}添加评论</button >';
            strhtml += '</li>';
          } else {
            strhtml += '&nbsp;&nbsp;<span class="rowtit colorRed">[未提交]</span></li>';
          }
        } else {
          strhtml += '</li>';
        }

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //相关概念
      strhtml +=
        '<div class="info" id="infoConcept"><div class="title btn-4"><a href="javascript:void(0)" title="相关概念">相关概念</a></div><ul class="artlist">';
      v = 0; //给内容加个序号
      for (let i = 0; i < arrvRTConceptObjLst.length; i++) {
        //得到概念Id；
        const strConceptId = arrvRTConceptObjLst[i].conceptId;
        v++;
        //strhtml += '<li><span class="rowtit color4">' + v + '.[概念]：</span><span class="abstract-text">' + arrvRTConceptObjLst[i].conceptName + '</span></li>';

        strhtml += `<li><span class="rowtit color4 btnLeft">${v}.[概念]：</span><span class="abstract-text">${arrvRTConceptObjLst[i].conceptName}</span>`;
        if (
          arrvRTConceptObjLst[i].versionCount > 0 &&
          arrvRTConceptObjLst[i].versionCount != null
        ) {
          strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('相关概念历史版本', '../GradEduEx/HistoricalVersion?Key=${arrvRTConceptObjLst[i].conceptId}&Type=05')"> ${clsIcon.faCommentDots}历史版本</button >`;
        }
        strhtml += '</li>';

        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[内容]：</span><span class="abstract-text">${arrvRTConceptObjLst[i].conceptContent}</span></li>`;

        //查询附件
        arrConceptAttachmentObjLst = arrConceptAttachmentObjLst2.filter(
          (x) => x.conceptId == strConceptId,
        );
        if (arrConceptAttachmentObjLst.length > 0) {
          for (let y = 0; y < arrConceptAttachmentObjLst.length; y++) {
            const strAddressAndPortfull =
              GetAddressAndPort() + arrConceptAttachmentObjLst[y].filePath;
            //strhtml += '<li><img src="' + strAddressAndPortfull + '" style="max-width:500px; margin-left: 10px; " alt="" id="txtImgPath' + arrConceptAttachmentObjLst[y].conceptAttachmentId + '"/></li>';
            strhtml += `<li><div class="example"><img src="${strAddressAndPortfull}" alt="" data-action="zoom" id="txtImgPath${arrConceptAttachmentObjLst[y].conceptAttachmentId}"/></div></li>`;
          }
        }

        //如果该观点是老师，编辑人后面加上教师标识
        const objUserRoleRel = arrUserRoleRelationObjLst.find(
          (x) => x.userId == arrvRTConceptObjLst[i].updUser,
        );
        if (objUserRoleRel != null) {
          const strUserName = await vQxUsersSimStore.getUserName(objUserRoleRel.userId);
          if (arrvRTConceptObjLst[i].concepUserId == arrvRTConceptObjLst[i].updUser) {
            //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑引用人]：' + arrvRTConceptObjLst[i].ConcepUserName + '(教师)</span>';
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑引用人]：${strUserName}(教师)</span>`;
          } else {
            const arrvUsers = arrvUserStuNameObjLst.find(
              (x) => x.userId == arrvRTConceptObjLst[i].concepUserId,
            );
            if (arrvUsers != null) {
              strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑&nbsp;/&nbsp;引用人]：${arrvUsers.userName}&nbsp;/&nbsp;${strUserName}(教师)</span>`;
            }
          }
        } else {
          //等于空，则不是教师所以需要通过缓存用户数据调取用户名称
          const arrvUsers = arrvUserStuNameObjLst.find(
            (x) => x.userId == arrvRTConceptObjLst[i].concepUserId,
          );
          if (arrvUsers != null) {
            if (arrvRTConceptObjLst[i].concepUserId == arrvRTConceptObjLst[i].updUser) {
              strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑引用人]：</span>${arrvUsers.userName}`;
            } else {
              //关系表的编辑用户；
              const arrvUsersRT = arrvUserStuNameObjLst.find(
                (x) => x.userId == arrvRTConceptObjLst[i].updUser,
              );
              if (arrvUsersRT != null) {
                strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑&nbsp;/&nbsp;引用人]：</span>${arrvUsers.userName}&nbsp;/&nbsp;${arrvUsersRT.userName}`;
              }
            }
          }
        }

        if (arrvRTConceptObjLst[i].concepDate == arrvRTConceptObjLst[i].updDate) {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑引用时间]：</span>${arrvRTConceptObjLst[i].concepDate}`;
        } else {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑&nbsp;/&nbsp;引用时间]：</span>${arrvRTConceptObjLst[i].concepDate}&nbsp;/&nbsp;${arrvRTConceptObjLst[i].updDate}`;
        }
        //strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑&nbsp;/&nbsp;引用时间]：</span>' + arrvRTConceptObjLst[i].concepDate + '&nbsp;/&nbsp;' + arrvRTConceptObjLst[i].updDate + '</li>';

        if (objUserRoleRel == null) {
          if (arrvRTConceptObjLst[i].isSubmit == true) {
            strhtml += '&nbsp;&nbsp;<span class="rowtit color5">[已提交]</span></li>';
            strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[评论]：</span>';

            //点赞

            const objLike = sysVoteStore.getObj(strVoteType, strUserId, strConceptId); //新0605

            if (objLike == null) {
              strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${arrvRTConceptObjLst[i].conceptId}","${arrvRTConceptObjLst[i].concepUserId}","05")><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞"></a>`;
            } else {
              strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${arrvRTConceptObjLst[i].conceptId}","${arrvRTConceptObjLst[i].concepUserId}","05")><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞"></a>`;
            }
            strhtml += `&nbsp;${arrvRTConceptObjLst[i].okCount}&nbsp;&nbsp;`;

            //评论
            strhtml += `&nbsp;&nbsp;<span style="color:royalblue")>评论数:${arrvRTConceptObjLst[i].appraiseCount}</span>`;
            //评分
            if (arrvRTConceptObjLst[i].score != 0) {
              strhtml += `&nbsp;&nbsp;综合评分:${arrvRTConceptObjLst[i].score}`;
            }
            if (arrvRTConceptObjLst[i].teaScore != 0) {
              strhtml += `&nbsp;&nbsp;教师评分:${arrvRTConceptObjLst[i].teaScore}`;
            }
            if (arrvRTConceptObjLst[i].stuScore != 0) {
              strhtml += `&nbsp;&nbsp;学生评分:${arrvRTConceptObjLst[i].stuScore}`;
            }
            strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('相关概念评论', '../GradEduTools/SysComment?Key=${arrvRTConceptObjLst[i].conceptId}&Type=05&User=${arrvRTConceptObjLst[i].updUser}&pubParentId=${clsPrivateSessionStorage.topicIdInTree}')"> ${clsIcon.faCommentDots}添加评论</button >`;
            //strhtml += '&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick = btnShowAppraise_Click("' + arrvRTConceptObjLst[i].conceptId + '","05","' + arrvRTConceptObjLst[i].updUser + '") > ${clsIcon.faCommentDots}添加评论</button >';
            strhtml += '</li>';
          } else {
            strhtml += '&nbsp;&nbsp;<span class="rowtit colorRed">[未提交]</span></li>';
          }
        } else {
          strhtml += '</li>';
        }

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //客观事实
      strhtml +=
        '<div class="info" id="infoFacts"><div class="title btn-5"><a href="javascript:void(0)" title="客观事实">客观事实</a></div><ul class="artlist">';
      v = 0; //给内容加个序号
      for (let i = 0; i < arrvRTTopicObjectiveRelaObjLst1.length; i++) {
        const FactTopicObjectiveId = arrvRTTopicObjectiveRelaObjLst1[i].topicObjectiveId;
        v++;
        //strhtml += '<li><span class="rowtit color6">' + v + '.[标题]：</span><span class="abstract-text">' + arrvRTTopicObjectiveRelaObjLst1[i].objectiveName + '</span></li>';

        strhtml += `<li><span class="rowtit color6 btnLeft">${v}.[标题]：</span><span class="abstract-text">${arrvRTTopicObjectiveRelaObjLst1[i].objectiveName}</span>`;
        if (
          arrvRTTopicObjectiveRelaObjLst1[i].versionCount > 0 &&
          arrvRTTopicObjectiveRelaObjLst1[i].versionCount != null
        ) {
          strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('客观事实历史版本', '../GradEduEx/HistoricalVersion?Key=${arrvRTTopicObjectiveRelaObjLst1[i].topicObjectiveId}&Type=06')"> ${clsIcon.faCommentDots}历史版本</button >`;
        }
        strhtml += '</li>';

        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[内容]：</span><span class="abstract-text">${arrvRTTopicObjectiveRelaObjLst1[i].objectiveContent}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[推论]：</span><span class="abstract-text">${arrvRTTopicObjectiveRelaObjLst1[i].conclusion}</span></li>`;

        //查询附件
        arrObjectiveAttachmentObjLst = arrObjectiveAttachmentObjLst2.filter(
          (x) => x.topicObjectiveId == FactTopicObjectiveId,
        );
        if (arrObjectiveAttachmentObjLst.length > 0) {
          for (let y = 0; y < arrObjectiveAttachmentObjLst.length; y++) {
            const strAddressAndPortfull =
              GetAddressAndPort() + arrObjectiveAttachmentObjLst[y].filePath;
            strhtml += `<li><div class="example"><img src="${strAddressAndPortfull}" alt="" data-action="zoom" id="txtImgPath${arrObjectiveAttachmentObjLst[y].objectiveAttachmentId}"/></div></li>`;
          }
        }

        //如果该观点是老师，编辑人后面加上教师标识
        const objUserRoleRel = arrUserRoleRelationObjLst.find(
          (x) => x.userId == arrvRTTopicObjectiveRelaObjLst1[i].updUser,
        );
        if (objUserRoleRel != null) {
          const strUserName = await vQxUsersSimStore.getUserName(objUserRoleRel.userId);
          if (
            arrvRTTopicObjectiveRelaObjLst1[i].objUserId ==
            arrvRTTopicObjectiveRelaObjLst1[i].updUser
          ) {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑引用人]：${strUserName}(教师)</span>`;
          } else {
            const arrvUsers = arrvUserStuNameObjLst.find(
              (x) => x.userId == arrvRTTopicObjectiveRelaObjLst1[i].objUserId,
            );
            if (arrvUsers != null) {
              strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑&nbsp;/&nbsp;引用人]：${arrvUsers.userName}&nbsp;/&nbsp;${strUserName}(教师)</span>`;
            }
          }
        } else {
          const arrvUsers = arrvUserStuNameObjLst.find(
            (x) => x.userId == arrvRTTopicObjectiveRelaObjLst1[i].objUserId,
          );
          if (arrvUsers != null) {
            if (
              arrvRTTopicObjectiveRelaObjLst1[i].objUserId ==
              arrvRTTopicObjectiveRelaObjLst1[i].updUser
            ) {
              strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[编辑引用人]：</span>${arrvUsers.userName}`;
            } else {
              const arrvUsersRt = arrvUserStuNameObjLst.find(
                (x) => x.userId == arrvRTTopicObjectiveRelaObjLst1[i].updUser,
              );
              if (arrvUsersRt != null) {
                strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[编辑&nbsp;/&nbsp;引用人]：</span>${arrvUsers.userName}&nbsp;/&nbsp;${arrvUsersRt.userName}`;
              }
            }
          }
        }
        if (
          arrvRTTopicObjectiveRelaObjLst1[i].objDate == arrvRTTopicObjectiveRelaObjLst1[i].updDate
        ) {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑引用时间]：</span>${arrvRTTopicObjectiveRelaObjLst1[i].objDate}`;
        } else {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑&nbsp;/&nbsp;引用时间]：</span>${arrvRTTopicObjectiveRelaObjLst1[i].objDate}&nbsp;/&nbsp;${arrvRTTopicObjectiveRelaObjLst1[i].updDate}`;
        }
        //strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[编辑&nbsp;/&nbsp;引用时间]：</span>' + arrvRTTopicObjectiveRelaObjLst1[i].objDate + '&nbsp;/&nbsp;' + arrvRTTopicObjectiveRelaObjLst1[i].updDate + '</li>';

        if (objUserRoleRel == null) {
          if (arrvRTTopicObjectiveRelaObjLst1[i].isSubmit == true) {
            strhtml += '&nbsp;&nbsp;<span class="rowtit color5">[已提交]</span></li>';
            strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[评论]：</span>';

            //点赞

            const objLike = sysVoteStore.getObj(strVoteType, strUserId, FactTopicObjectiveId); //新0605

            if (objLike == null) {
              strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${arrvRTTopicObjectiveRelaObjLst1[i].topicObjectiveId}","${arrvRTTopicObjectiveRelaObjLst1[i].objUserId}","06")><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞"></a>`;
            } else {
              strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${arrvRTTopicObjectiveRelaObjLst1[i].topicObjectiveId}","${arrvRTTopicObjectiveRelaObjLst1[i].objUserId}","06")><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞"></a>`;
            }
            strhtml += `&nbsp;${arrvRTTopicObjectiveRelaObjLst1[i].okCount}&nbsp;&nbsp;`;

            //评论
            strhtml += `&nbsp;&nbsp;<span style="color:royalblue">评论数:${arrvRTTopicObjectiveRelaObjLst1[i].appraiseCount}</span>`;
            //评分
            if (arrvRTTopicObjectiveRelaObjLst1[i].score != null) {
              strhtml += `&nbsp;&nbsp;综合评分:${arrvRTTopicObjectiveRelaObjLst1[i].score}`;
            }
            if (arrvRTTopicObjectiveRelaObjLst1[i].teaScore != null) {
              strhtml += `&nbsp;&nbsp;教师评分:${arrvRTTopicObjectiveRelaObjLst1[i].teaScore}`;
            }
            if (arrvRTTopicObjectiveRelaObjLst1[i].stuScore != null) {
              strhtml += `&nbsp;&nbsp;学生评分:${arrvRTTopicObjectiveRelaObjLst1[i].stuScore}`;
            }
            strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('客观事实评论', '../GradEduTools/SysComment?Key=${arrvRTTopicObjectiveRelaObjLst1[i].topicObjectiveId}&Type=06&User=${arrvRTTopicObjectiveRelaObjLst1[i].updUser}&pubParentId=${clsPrivateSessionStorage.topicIdInTree}')"> ${clsIcon.faCommentDots}添加评论</button >`;
            //strhtml += '&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick = btnShowAppraise_Click("' + arrvRTTopicObjectiveRelaObjLst1[i].topicObjectiveId + '","06","' + arrvRTTopicObjectiveRelaObjLst1[i].updUser + '") > ${clsIcon.faCommentDots}添加评论</button >';
            strhtml += '</li>';
          } else {
            strhtml += '&nbsp;&nbsp;<span class="rowtit colorRed">[未提交]</span></li>';
          }
        } else {
          strhtml += '</li>';
        }

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
        //arrvRTTopicObjectiveRelaObjLst1.sourceId
      }
      strhtml += '</ul></div>';

      //客观数据
      strhtml +=
        '<div class="info" id="infoBasis"><div class="title btn-5"><a href="javascript:void(0)" title="客观数据">客观数据</a></div><ul class="artlist">';
      v = 0; //给内容加个序号
      for (let i = 0; i < arrvRTTopicObjectiveRelaObjLst2.length; i++) {
        const BasisTopicObjectiveId = arrvRTTopicObjectiveRelaObjLst2[i].topicObjectiveId;
        v++;
        //strhtml += '<li><span class="rowtit color6">' + v + '.[标题]：</span><span class="abstract-text">' + arrvRTTopicObjectiveRelaObjLst2[i].objectiveName + '</span></li>';
        strhtml += `<li><span class="rowtit color6 btnLeft">${v}.[标题]：</span><span class="abstract-text">${arrvRTTopicObjectiveRelaObjLst2[i].objectiveName}</span>`;
        if (
          arrvRTTopicObjectiveRelaObjLst2[i].versionCount > 0 &&
          arrvRTTopicObjectiveRelaObjLst2[i].versionCount != null
        ) {
          strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('客观数据历史版本', '../GradEduEx/HistoricalVersion?Key=${arrvRTTopicObjectiveRelaObjLst2[i].topicObjectiveId}&Type=07')"> ${clsIcon.faCommentDots}历史版本</button >`;
        }
        strhtml += '</li>';
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[内容]：</span><span class="abstract-text">${arrvRTTopicObjectiveRelaObjLst2[i].objectiveContent}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[推论]：</span><span class="abstract-text">${arrvRTTopicObjectiveRelaObjLst2[i].conclusion}</span></li>`;

        //查询附件
        arrObjectiveAttachmentObjLst = arrObjectiveAttachmentObjLst2.filter(
          (x) => x.topicObjectiveId == BasisTopicObjectiveId,
        );
        if (arrObjectiveAttachmentObjLst.length > 0) {
          for (let y = 0; y < arrObjectiveAttachmentObjLst.length; y++) {
            const strAddressAndPortfull =
              GetAddressAndPort() + arrObjectiveAttachmentObjLst[y].filePath;
            strhtml += `<li><div class="example"><img src="${strAddressAndPortfull}" alt="" data-action="zoom" id="txtImgPath${arrObjectiveAttachmentObjLst[y].objectiveAttachmentId}"/></div></li>`;
          }
        }

        //如果该观点是老师，编辑人后面加上教师标识
        const objUserRoleRel = arrUserRoleRelationObjLst.find(
          (x) => x.userId == arrvRTTopicObjectiveRelaObjLst2[i].updUser,
        );
        if (objUserRoleRel != null) {
          const strUserName = await vQxUsersSimStore.getUserName(objUserRoleRel.userId);
          if (
            arrvRTTopicObjectiveRelaObjLst2[i].objUserId ==
            arrvRTTopicObjectiveRelaObjLst2[i].updUser
          ) {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑引用人]：${strUserName}(教师)</span>`;
          } else {
            const arrvUsers = arrvUserStuNameObjLst.find(
              (x) => x.userId == arrvRTTopicObjectiveRelaObjLst2[i].objUserId,
            );
            if (arrvUsers != null) {
              strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑&nbsp;/&nbsp;引用人]：${arrvUsers.userName}&nbsp;/&nbsp;${strUserName}(教师)</span>`;
            }
          }
        } else {
          const arrvUsers = arrvUserStuNameObjLst.find(
            (x) => x.userId == arrvRTTopicObjectiveRelaObjLst2[i].objUserId,
          );
          if (arrvUsers != null) {
            //如果编辑人和引用人一样
            if (
              arrvRTTopicObjectiveRelaObjLst2[i].objUserId ==
              arrvRTTopicObjectiveRelaObjLst2[i].updUser
            ) {
              strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[编辑引用人]：</span>${arrvUsers.userName}`;
            } else {
              const arrvUsersRT = arrvUserStuNameObjLst.find(
                (x) => x.userId == arrvRTTopicObjectiveRelaObjLst2[i].updUser,
              );
              if (arrvUsersRT != null) {
                strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[编辑&nbsp;/&nbsp;引用人]：</span>${arrvUsers.userName}&nbsp;/&nbsp;${arrvUsersRT.userName}`;
              }
            }
          }
        }

        if (
          arrvRTTopicObjectiveRelaObjLst2[i].objDate == arrvRTTopicObjectiveRelaObjLst2[i].updDate
        ) {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑引用时间]：</span>${arrvRTTopicObjectiveRelaObjLst2[i].objDate}`;
        } else {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑&nbsp;/&nbsp;引用时间]：</span>${arrvRTTopicObjectiveRelaObjLst2[i].objDate}&nbsp;/&nbsp;${arrvRTTopicObjectiveRelaObjLst2[i].updDate}`;
        }

        if (objUserRoleRel == null) {
          if (arrvRTTopicObjectiveRelaObjLst2[i].isSubmit == true) {
            strhtml += '&nbsp;&nbsp;<span class="rowtit color5">[已提交]</span></li>';
            strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[评论]：</span>';

            //点赞

            const objLike = sysVoteStore.getObj(strVoteType, strUserId, BasisTopicObjectiveId); //新0605

            if (objLike == null) {
              strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${arrvRTTopicObjectiveRelaObjLst2[i].topicObjectiveId}","${arrvRTTopicObjectiveRelaObjLst2[i].objUserId}","07")><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞"></a>`;
            } else {
              strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${arrvRTTopicObjectiveRelaObjLst2[i].topicObjectiveId}","${arrvRTTopicObjectiveRelaObjLst2[i].objUserId}","07")><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞"></a>`;
            }
            strhtml += `&nbsp;${arrvRTTopicObjectiveRelaObjLst2[i].okCount}&nbsp;&nbsp;`;

            strhtml += `&nbsp;&nbsp;<span style="color:royalblue">评论数:${arrvRTTopicObjectiveRelaObjLst2[i].appraiseCount}</span>`;
            //评分
            if (arrvRTTopicObjectiveRelaObjLst2[i].score != 0) {
              strhtml += `&nbsp;&nbsp;综合评分:${arrvRTTopicObjectiveRelaObjLst2[i].score}`;
            }
            if (arrvRTTopicObjectiveRelaObjLst2[i].teaScore != 0) {
              strhtml += `&nbsp;&nbsp;教师评分:${arrvRTTopicObjectiveRelaObjLst2[i].teaScore}`;
            }
            if (arrvRTTopicObjectiveRelaObjLst2[i].stuScore != 0) {
              strhtml += `&nbsp;&nbsp;学生评分:${arrvRTTopicObjectiveRelaObjLst2[i].stuScore}`;
            }
            strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('客观事实评论', '../GradEduTools/SysComment?Key=${arrvRTTopicObjectiveRelaObjLst2[i].topicObjectiveId}&Type=07&User=${arrvRTTopicObjectiveRelaObjLst2[i].updUser}&pubParentId=${clsPrivateSessionStorage.topicIdInTree}')"> ${clsIcon.faCommentDots}添加评论</button >`;
            //strhtml += '&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick = btnShowAppraise_Click("' + arrvRTTopicObjectiveRelaObjLst2[i].topicObjectiveId + '","07","' + arrvRTTopicObjectiveRelaObjLst2[i].updUser + '") > ${clsIcon.faCommentDots}添加评论</button >';
            strhtml += '</li>';
          } else {
            strhtml += '&nbsp;&nbsp;<span class="rowtit colorRed">[未提交]</span></li>';
          }
        } else {
          strhtml += '</li>';
        }
        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //技能
      strhtml +=
        '<div class="info" id="infoSysskill"><div class="title btn-4"><a href="javascript:void(0)" title="技能">技能</a></div><ul class="artlist">';
      v = 0; //给内容加个序号
      for (let i = 0; i < arrvRTSysSkillObjLst.length; i++) {
        //得到技能Id；
        const strSkillId = arrvRTSysSkillObjLst[i].skillId;
        v++;
        //strhtml += '<li><span class="rowtit color4">' + v + '.[技能]：</span><span class="abstract-text">' + arrvRTSysSkillObjLst[i].conceptName + '</span></li>';

        strhtml += `<li><span class="rowtit color4 btnLeft">${v}.[技能名称]：</span><span class="abstract-text">${arrvRTSysSkillObjLst[i].skillName}</span>`;
        if (
          arrvRTSysSkillObjLst[i].versionCount > 0 &&
          arrvRTSysSkillObjLst[i].versionCount != null
        ) {
          strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('相关技能历史版本', '../GradEduEx/HistoricalVersion?Key=${arrvRTSysSkillObjLst[i].skillId}&Type=08')"> ${clsIcon.faCommentDots}历史版本</button >`;
        }
        strhtml += '</li>';

        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[实施过程]：</span><span class="abstract-text">${arrvRTSysSkillObjLst[i].process}</span></li>`;

        //获取引用人；编辑人、用户名称
        //strIdCurrEduclsarrUsers: Array<clsUsersEN> = await Users_GetObjLstAsync("1=1");
        //arrvUsers: Array<clsvUsersSimEN> = [];
        let UpdUserName; //编辑人
        let CacitionUserName; //引用人
        //获取技能引用人；
        //arrvUsers = arrvUserRoleRelationObjLst.filter(x => x.userId == arrvRTSysSkillObjLst[i].updUser);//技能引用人
        //for (let j = 0; j < arrvUsers.length; j++) {
        //    CacitionUserName = arrvUsers[j].userName;
        //    break;
        //}
        ////获取技能编辑人；
        //arrvUsers = arrvUserRoleRelationObjLst.filter(x => x.userId == arrvRTSysSkillObjLst[i].skillUpdUser);//技能编辑人
        //for (let j = 0; j < arrvUsers.length; j++) {
        //    UpdUserName = arrvUsers[j].userName;
        //    break;
        //}
        let arrvUsers = arrvUserStuNameObjLst.find(
          (x) => x.userId == arrvRTSysSkillObjLst[i].updUser,
        ); //技能引用人
        if (arrvUsers != null) {
          CacitionUserName = arrvUsers.userName;
        }
        //for (let j = 0; j < arrvUsers.length; j++) {
        //    CacitionUserName = arrvUsers[j].userName;
        //    break;
        //}
        //获取技能编辑人；
        arrvUsers = arrvUserStuNameObjLst.find(
          (x) => x.userId == arrvRTSysSkillObjLst[i].skillUpdUser,
        ); //技能编辑人
        if (arrvUsers != null) {
          UpdUserName = arrvUsers.userName;
        }
        //for (let j = 0; j < arrvUsers.length; j++) {
        //    UpdUserName = arrvUsers[j].userName;
        //    break;
        //}

        //如果该技能是老师，编辑人后面加上教师标识
        const objUserRoleRel = arrUserRoleRelationObjLst.find(
          (x) => x.userId == arrvRTSysSkillObjLst[i].updUser,
        );
        if (objUserRoleRel != null) {
          if (arrvRTSysSkillObjLst[i].skillUpdUser == arrvRTSysSkillObjLst[i].updUser) {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑引用人]：${UpdUserName}(教师)</span>`;
          } else {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑&nbsp;/&nbsp;引用人]：${UpdUserName}&nbsp;/&nbsp;${CacitionUserName}(教师)</span>`;
          }
        } else {
          if (arrvRTSysSkillObjLst[i].skillUpdUser == arrvRTSysSkillObjLst[i].updUser) {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑引用人]：</span>${UpdUserName}`;
          } else {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑&nbsp;/&nbsp;引用人]：</span>${UpdUserName}&nbsp;/&nbsp;${CacitionUserName}`;
          }
        }

        if (arrvRTSysSkillObjLst[i].skillUpdDate == arrvRTSysSkillObjLst[i].updDate) {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑引用时间]：</span>${arrvRTSysSkillObjLst[i].skillUpdDate}`;
        } else {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑&nbsp;/&nbsp;引用时间]：</span>${arrvRTSysSkillObjLst[i].skillUpdDate}&nbsp;/&nbsp;${arrvRTSysSkillObjLst[i].updDate}`;
        }

        if (objUserRoleRel == null) {
          if (arrvRTSysSkillObjLst[i].isSubmit == true) {
            strhtml += '&nbsp;&nbsp;<span class="rowtit color5">[已提交]</span></li>';
            strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[评论]：</span>';

            //点赞

            const objLike = sysVoteStore.getObj(strVoteType, strUserId, strSkillId); //新0605

            if (objLike == null) {
              strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${arrvRTSysSkillObjLst[i].skillId}","${arrvRTSysSkillObjLst[i].skillUpdUser}","09")><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞"></a>`;
            } else {
              strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${arrvRTSysSkillObjLst[i].skillId}","${arrvRTSysSkillObjLst[i].skillUpdUser}","09")><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞"></a>`;
            }
            strhtml += `&nbsp;${arrvRTSysSkillObjLst[i].okCount}&nbsp;&nbsp;`;

            //评论
            strhtml += `&nbsp;&nbsp;<span style="color:royalblue")>评论数:${arrvRTSysSkillObjLst[i].appraiseCount}</span>`;
            //评分
            if (arrvRTSysSkillObjLst[i].score != 0) {
              strhtml += `&nbsp;&nbsp;综合评分:${arrvRTSysSkillObjLst[i].score}`;
            }
            if (arrvRTSysSkillObjLst[i].teaScore != 0) {
              strhtml += `&nbsp;&nbsp;教师评分:${arrvRTSysSkillObjLst[i].teaScore}`;
            }
            if (arrvRTSysSkillObjLst[i].stuScore != 0) {
              strhtml += `&nbsp;&nbsp;学生评分:${arrvRTSysSkillObjLst[i].stuScore}`;
            }
            strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('操作技能评论', '../GradEduTools/SysComment?Key=${arrvRTSysSkillObjLst[i].skillId}&Type=09&User=${arrvRTSysSkillObjLst[i].updUser}&pubParentId=${clsPrivateSessionStorage.topicIdInTree}')"> ${clsIcon.faCommentDots}添加评论</button >`;
            //strhtml += '&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick = btnShowAppraise_Click("' + arrvRTSysSkillObjLst[i].conceptId + '","05","' + arrvRTConceptObjLst[i].updUser + '") > ${clsIcon.faCommentDots}添加评论</button >';
            strhtml += '</li>';
          } else {
            strhtml += '&nbsp;&nbsp;<span class="rowtit colorRed">[未提交]</span></li>';
          }
        } else {
          strhtml += '</li>';
        }

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //社会关系
      strhtml +=
        '<div class="info" id="infoSysSocialRelations"><div class="title btn-3"><a href="javascript:void(0)" title="社会关系">社会关系</a></div><ul class="artlist">';
      v = 0; //给内容加个序号
      for (let i = 0; i < arrvRTSysSocialRelaObjLst.length; i++) {
        //得到社会关系Id；
        const strSocialId = arrvRTSysSocialRelaObjLst[i].subViewpointId;
        v++;
        //strhtml += '<li><span class="rowtit color3">' + v + '.[技能]：</span><span class="abstract-text">' + arrvRTSysSocialRelaObjLst[i].conceptName + '</span></li>';

        strhtml += `<li><span class="rowtit color3 btnLeft">${v}.[姓名]：</span><span class="abstract-text">${arrvRTSysSocialRelaObjLst[i].subViewpointContent}</span>`;
        strhtml += `&nbsp;&nbsp;<span class="rowtit color3">[国籍]：</span><span class="abstract-text">${arrvRTSysSocialRelaObjLst[i].nationality}</span>`;
        strhtml += `&nbsp;&nbsp;<span class="rowtit color3">[工作单位]：</span><span class="abstract-text">${arrvRTSysSocialRelaObjLst[i].workUnit}</span>`;
        strhtml += `&nbsp;&nbsp;<span class="rowtit color3">[专业]：</span><span class="abstract-text">${arrvRTSysSocialRelaObjLst[i].major}</span>`;
        if (
          arrvRTSysSocialRelaObjLst[i].versionCount > 0 &&
          arrvRTSysSocialRelaObjLst[i].versionCount != null
        ) {
          strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('社会关系历史版本', '../GradEduEx/HistoricalVersion?Key=${arrvRTSysSocialRelaObjLst[i].subViewpointId}&Type=09')"> ${clsIcon.faCommentDots}历史版本</button >`;
        }
        strhtml += '</li>';

        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[成就]：</span><span class="abstract-text">${arrvRTSysSocialRelaObjLst[i].achievement}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[详细说明]：</span><span class="abstract-text">${arrvRTSysSocialRelaObjLst[i].explainContent}</span></li>`;

        //获取引用人；编辑人、用户名称
        //strIdCurrEduclsarrUsers: Array<clsUsersEN> = await Users_GetObjLstAsync("1=1");
        let UpdUserName; //编辑人
        let CacitionUserName; //引用人

        let arrvUsers = arrvUserStuNameObjLst.find(
          (x) => x.userId == arrvRTSysSocialRelaObjLst[i].updUser,
        ); //技能引用人
        if (arrvUsers != null) {
          CacitionUserName = arrvUsers.userName;
        } else {
          CacitionUserName = '';
        }

        //for (let j = 0; j < arrvUsers.length; j++) {
        //    CacitionUserName = arrvUsers[j].userName;
        //    break;
        //}
        //获取技能编辑人；
        arrvUsers = arrvUserStuNameObjLst.find(
          (x) => x.userId == arrvRTSysSocialRelaObjLst[i].viewPointUserId,
        ); //技能编辑人
        if (arrvUsers != null) {
          UpdUserName = arrvUsers.userName;
        } else {
          UpdUserName = '';
        }
        //for (let j = 0; j < arrvUsers.length; j++) {
        //    UpdUserName = arrvUsers[j].userName;
        //    break;
        //}

        //如果该技能是老师，编辑人后面加上教师标识
        const objUserRoleRel = arrUserRoleRelationObjLst.find(
          (x) => x.userId == arrvRTSysSocialRelaObjLst[i].updUser,
        );
        if (objUserRoleRel != null) {
          if (
            arrvRTSysSocialRelaObjLst[i].viewPointUserId == arrvRTSysSocialRelaObjLst[i].updUser
          ) {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑引用人]：${UpdUserName}(教师)</span>`;
          } else {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">[编辑&nbsp;/&nbsp;引用人]：${UpdUserName}&nbsp;/&nbsp;${CacitionUserName}(教师)</span>`;
          }
        } else {
          if (
            arrvRTSysSocialRelaObjLst[i].viewPointUserId == arrvRTSysSocialRelaObjLst[i].updUser
          ) {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[编辑引用人]：</span>${UpdUserName}`;
          } else {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[编辑&nbsp;/&nbsp;引用人]：</span>${UpdUserName}&nbsp;/&nbsp;${CacitionUserName}`;
          }
        }

        if (arrvRTSysSocialRelaObjLst[i].viewPointDate == arrvRTSysSocialRelaObjLst[i].updDate) {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[编辑引用时间]：</span>${arrvRTSysSocialRelaObjLst[i].viewPointDate}`;
        } else {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[编辑&nbsp;/&nbsp;引用时间]：</span>${arrvRTSysSocialRelaObjLst[i].viewPointDate}&nbsp;/&nbsp;${arrvRTSysSocialRelaObjLst[i].updDate}`;
        }

        if (objUserRoleRel == null) {
          if (arrvRTSysSocialRelaObjLst[i].isSubmit == true) {
            strhtml += '&nbsp;&nbsp;<span class="rowtit color5">[已提交]</span></li>';
            strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[评论]：</span>';

            //点赞

            const objLike = sysVoteStore.getObj(strVoteType, strUserId, strSocialId.toString()); //新0605

            if (objLike == null) {
              strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${arrvRTSysSocialRelaObjLst[i].subViewpointId}","${arrvRTSysSocialRelaObjLst[i].viewPointUserId}","10")><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞"></a>`;
            } else {
              strhtml += `<a href="javascript:void(0)" onclick = btnAddVote_Click("${arrvRTSysSocialRelaObjLst[i].subViewpointId}","${arrvRTSysSocialRelaObjLst[i].viewPointUserId}","10")><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞"></a>`;
            }
            strhtml += `&nbsp;${arrvRTSysSocialRelaObjLst[i].okCount}&nbsp;&nbsp;`;

            //评论
            strhtml += `&nbsp;&nbsp;<span style="color:royalblue")>评论数:${arrvRTSysSocialRelaObjLst[i].appraiseCount}</span>`;
            //评分
            if (arrvRTSysSocialRelaObjLst[i].score != 0) {
              strhtml += `&nbsp;&nbsp;综合评分:${arrvRTSysSocialRelaObjLst[i].score}`;
            }
            if (arrvRTSysSocialRelaObjLst[i].teaScore != 0) {
              strhtml += `&nbsp;&nbsp;教师评分:${arrvRTSysSocialRelaObjLst[i].teaScore}`;
            }
            if (arrvRTSysSocialRelaObjLst[i].stuScore != 0) {
              strhtml += `&nbsp;&nbsp;学生评分:${arrvRTSysSocialRelaObjLst[i].stuScore}`;
            }
            strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('社会关系评论', '../GradEduTools/SysComment?Key=${arrvRTSysSocialRelaObjLst[i].subViewpointId}&Type=10&User=${arrvRTSysSocialRelaObjLst[i].updUser}&pubParentId=${clsPrivateSessionStorage.topicIdInTree}')"> ${clsIcon.faCommentDots}添加评论</button >`;
            //strhtml += '&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick = btnShowAppraise_Click("' + arrvRTSysSocialRelaObjLst[i].conceptId + '","05","' + arrvRTConceptObjLst[i].updUser + '") > ${clsIcon.faCommentDots}添加评论</button >';
            strhtml += '</li>';
          } else {
            strhtml += '&nbsp;&nbsp;<span class="rowtit colorRed">[未提交]</span></li>';
          }
        } else {
          strhtml += '</li>';
        }

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //拼接；
      $('#divContent_list').html(strhtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //添加点赞 主键,被点赞用户、点赞类型；
  public async btnAddVote_Click(strViewpointId: string, strUserId: string, strVoteTypeId: string) {
    const strThisFuncName = this.btnAddVote_Click.name;
    //thIs.DivName = "divAddNewRecordSave";
    const objSysVoteEN: clsSysVoteEN = new clsSysVoteEN();

    //this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);

    objSysVoteEN.SetTableKey(strViewpointId);
    objSysVoteEN.SetVoteTypeId(strVoteTypeId);
    objSysVoteEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班
    objSysVoteEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objSysVoteEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    objSysVoteEN.SetLikedUserId(strUserId); //被点赞用户
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
        let objViewpointEN;
        let returnBool;
        let strMsg;
        let objConceptEN;
        let objTopicObjectiveEN;
        let objysSkillEN;
        let objSysSocialRelationsEN;
        switch (strVoteTypeId) {
          case enumSysVoteType.Viewpoint_03: //个人观点
            objViewpointEN = new clsViewpointEN();
            objViewpointEN.SetViewpointId(strViewpointId);
            objViewpointEN.SetOkCount(intVoteCount);

            objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
            if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
              throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
            }

            returnBool = await Viewpoint_UpdateRecordAsync(objViewpointEN);

            if (returnBool == true) {
              this.BindGv_AllTopicRela();
            } else {
              const strInfo = `点赞不成功!`;
              alert(strInfo);
              console.log('点赞不成功');
            }

            break;
          case enumSysVoteType.Viewpoint_04: //专家观点
            objViewpointEN = new clsViewpointEN();
            objViewpointEN.SetViewpointId(strViewpointId);
            objViewpointEN.SetOkCount(intVoteCount);

            objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
            if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
              throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
            }

            returnBool = await Viewpoint_UpdateRecordAsync(objViewpointEN);
            if (returnBool == true) {
              this.BindGv_AllTopicRela();
            } else {
              const strInfo = `点赞不成功!`;
              alert(strInfo);
              console.log('点赞不成功');
            }

            break;
          case enumSysVoteType.Concept_05: //概念
            objConceptEN = new clsConceptEN();
            objConceptEN.SetConceptId(strViewpointId);
            objConceptEN.SetOkCount(intVoteCount);

            objConceptEN.sfUpdFldSetStr = objConceptEN.updFldString; //设置哪些字段被修改(脏字段)
            if (objConceptEN.conceptId == '' || objConceptEN.conceptId == undefined) {
              throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
            }

            returnBool = await Concept_UpdateRecordAsync(objConceptEN);
            if (returnBool == true) {
              this.BindGv_AllTopicRela();
            } else {
              const strInfo = `点赞不成功!`;
              alert(strInfo);
              console.log('点赞不成功');
            }

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

            returnBool = await TopicObjective_UpdateRecordAsync(objTopicObjectiveEN);
            if (returnBool == true) {
              this.BindGv_AllTopicRela();
            } else {
              const strInfo = `点赞不成功!`;
              alert(strInfo);
              console.log('点赞不成功');
            }

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

            returnBool = await TopicObjective_UpdateRecordAsync(objTopicObjectiveEN);
            if (returnBool == true) {
              this.BindGv_AllTopicRela();
            } else {
              const strInfo = `点赞不成功!`;
              alert(strInfo);
              console.log('点赞不成功');
            }

            break;
          case enumSysVoteType.SysSkill_09: //技能
            objysSkillEN = new clsSysSkillEN();
            objysSkillEN.SetSkillId(strViewpointId);
            objysSkillEN.SetOkCount(intVoteCount);

            objysSkillEN.sfUpdFldSetStr = objysSkillEN.updFldString; //设置哪些字段被修改(脏字段)
            if (objysSkillEN.skillId == '' || objysSkillEN.skillId == undefined) {
              throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
            }

            returnBool = await SysSkill_UpdateRecordAsync(objysSkillEN);
            if (returnBool == true) {
              this.BindGv_AllTopicRela();
            } else {
              const strInfo = `点赞不成功!`;
              alert(strInfo);
              console.log('点赞不成功');
            }

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

            returnBool = await SysSocialRelations_UpdateRecordAsync(objSysSocialRelationsEN);
            if (returnBool == true) {
              this.BindGv_AllTopicRela();
            } else {
              const strInfo = `点赞不成功!`;
              alert(strInfo);
              console.log('点赞不成功');
            }

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
        await this.BindGv_AllTopicRela();
        //strIdCurrEduclsstrInfo: string = `点赞成功!`;
        //
        ////显示信息框
        //alert(strInfo);
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

  //显示评论

  //显示评论
  public async btnShowAppraise_Click(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    let arrvSysCommentObjLst1: Array<clsvSysCommentEN> = [];
    let arrvSysCommentObjLst2: Array<clsvSysCommentEN> = [];
    let arrvSysCommentObjLst3: Array<clsvSysCommentEN> = [];
    let strWhereCond1 = '';
    let strWhereCond2 = '';
    const hidCommentTypeId = GetInputValueInDivObj(divName, 'hidCommentTypeId');
    const hidTableKey = GetInputValueInDivObj(divName, 'hidTableKey');

    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部评论
        strWhereCond1 = ` parentId='root' and  commentTypeId='${hidCommentTypeId}' and tableKey='${hidTableKey}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  commentTypeId='${hidCommentTypeId}' and tableKey='${hidTableKey}' order by updDate Asc`;
      case enumCommentOrder.Personal_02:
        //个人评论
        strWhereCond1 = ` parentId='root' and  commentTypeId='${hidCommentTypeId}' and tableKey='${hidTableKey}' and updUser='${userStore.getUserId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  commentTypeId='${hidCommentTypeId}' and tableKey='${hidTableKey}' and updUser='${userStore.getUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新评论
        strWhereCond1 = ` parentId='root' and  commentTypeId='${hidCommentTypeId}' and tableKey='${hidTableKey}' order by updDate Desc`;
        strWhereCond2 = ` parentId<>'root' and  commentTypeId='${hidCommentTypeId}' and tableKey='${hidTableKey}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    //const strWhereCond1 = " parentId='root' and  commentTypeId='" + $("#hidCommentTypeId").val() + "' and tableKey='" + $("#hidTableKey").val() + "' order by updDate Asc";
    //var strWhereCond2 = " parentId<>'root' and  commentTypeId='" + $("#hidCommentTypeId").val() + "' and tableKey='" + $("#hidTableKey").val() + "' order by updDate Asc";

    try {
      //获取用户缓存数据
      const strWhere_User = '1=1';
      const arrvUserStuNameObjLst = await vUsersSim_GetObjLstAsync(strWhere_User);

      arrvSysCommentObjLst1 = await vSysComment_GetObjLstAsync(strWhereCond1);
      arrvSysCommentObjLst2 = await vSysComment_GetObjLstAsync(strWhereCond2);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrvSysCommentObjLst1.length; i++) {
        const objvSysComment = arrvSysCommentObjLst1[i];
        varNum++;
        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';
        let strUserName = '';
        const objvUserStuName = arrvUserStuNameObjLst.find((x) => x.userId == userStore.getUserId);
        if (objvUserStuName != null) {
          strUserName = objvUserStuName.userName;
        }
        if ($('#hidViewpointUserId').val() == objvSysComment.updUser) {
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
            let strUserName = '';
            const objvUserStuName = arrvUserStuNameObjLst.find(
              (x) => x.userId == arrvSysCommentObjLst3[j].updUser,
            );
            if (objvUserStuName != null) {
              strUserName = objvUserStuName.userName;
            }
            if ($('#hidViewpointUserId').val() == arrvSysCommentObjLst3[j].updUser) {
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
      J_ShortComment.innerHTML = strhtml;
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
    const objSysCommentEN: clsSysCommentEN = new clsSysCommentEN();
    //this.PutDataToSysCommentClass(objSysCommentEN);
    objSysCommentEN.SetTableKey(GetInputValueInDivObj(divName, 'hidTableKey'));
    objSysCommentEN.SetCommentTypeId(GetInputValueInDivObj(divName, 'hidCommentTypeId'));
    objSysCommentEN.SetParentId(KnowledgeEconomyListEx.parentId);
    objSysCommentEN.SetPubParentId(clsPrivateSessionStorage.topicIdInTree);
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

            HideDialog3();
            await this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
            await this.BindGv_AllTopicRela();
            $('#btnOKUpdAppraise').attr('disabled', 'false');
          } else {
            const strInfo = `添加系统评论失败!`;
            console.error(strInfo);
            //显示信息框
            alert(strInfo);
            HideDialog3();
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
  //public async SubmitAppraise_Click() {
  //    this.DivName = "divAddNewRecordSave";
  //    const objViewpointAppraiseEN: clsViewpointAppraiseEN = new clsViewpointAppraiseEN();
  //    //this.PutDataToPaperSubViewpointAppraiseClass(objPaperSubViewpointAppraiseEN);
  //    objViewpointAppraiseEN.SetViewpointId($("#hidViewpointId").val();

  //    //请输入评论
  //    if ($("#txtAppraiseContent").val() != "") {
  //        ////获取值转化分数
  //        //strIdCurrEduclsstrScore: string = this.GetScorebyText(strvalue);
  //        //objViewpointAppraiseEN = Number(strScore);// 打分
  //        objViewpointAppraiseEN.AppraiseContent = $("#txtAppraiseContent").val();// 评议内容
  //        objViewpointAppraiseEN.SetUpdDate(clsPubFun4Web.getNowDate();// 修改日期
  //        objViewpointAppraiseEN.SetUpdUser(userStore.getUserId;// 修改用户Id
  //        try {
  //            const responseText2 = await ViewpointAppraise_AddNewRecordAsync(objViewpointAppraiseEN);
  //            const returnBool: boolean = !!responseText2;
  //            if (returnBool == true) {
  //                strIdCurrEduclsstrInfo: string = `添加评论成功!`;
  //
  //                //显示信息框
  //                alert(strInfo);
  //                HideDialog3();

  //                //根据角色来添加评分；
  //                //读取session角色 来判断绑定不同数据列表
  //
  //                objvUserRoleRelation = stuUserLoginInfo.GetObjByHtmlString2(strUserInfo_Hid);

  //                //判断角色
  //                //管理员
  //                if (objvUserRoleRelation.roleId == "00620001") {

  //                    //调用打分功能；
  //                    this.SubmitScore_Click();

  //                }
  //                else if (objvUserRoleRelation.roleId == "00620002") {
  //                    //调用打分功能；
  //                    this.SubmitScore_Click();
  //                }
  //                else {
  //                    await this.BindGv_AllTopicRela();
  //                    this.btnShowAppraise_Click();
  //                }

  //                //await this.BindGv_AllTopicRela();
  //                //this.btnShowAppraise_Click();
  //            }
  //            else {
  //                strIdCurrEduclsstrInfo: string = `添加评论不成功!`;
  //
  //                //显示信息框
  //                alert(strInfo);
  //                HideDialog3();
  //                //this.BindGv_vPaperSubViewpoint();

  //                //显示评论
  //                this.btnShowAppraise_Click();
  //            }
  //            return responseText2;//一定要有一个返回值，否则会出错！
  //        }
  //        catch (e:any) {
  //            console.error('catch(e)=');
  //            console.error(e);
  //            strIdCurrEduclsstrMsg: string = `添加评论不成功,${e}.`;
  //            alert(strMsg);
  //        }
  //    }
  //    else {

  //        strIdCurrEduclsstrInfo: string = `请输入评价内容!`;
  //        //显示信息框
  //        alert(strInfo);
  //        return;
  //    }

  //    return true;//一定要有一个返回值，否则会出错！
  //}

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
          // strIdCurrEduclsstrInfo: string = `添加评论不成功!`;
          //
          // //显示信息框
          // alert(strInfo);
          //// HideDialog3();
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
      //if (this.userId_q != "") {
      //    strWhereCond += ` And ${clsvRTUserRelaEN.con_UserId} like '%${this.userId_q}%'`;
      //}
      //if (this.topicName_q != "") {
      //    strWhereCond += ` And ${clsvRTUserRelaEN.con_TopicName} like '%${this.topicName_q}%'`;
      //}

      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTUserRelaEN.con_TopicId} = '${strTopicId}'`;
      }

      //}
      //else if (objvUserRoleRelation.roleId == "00620002") {
      //    //教师
      //    // $("#btnDelRecord").show();
      //    //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
      //    strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + objvUserRoleRelation.userId + "' And isEffective='1') And isEffective='1')";

      //}
      //else {
      //    //学生；
      //    // $("#btnDelRecord").show();
      //    strWhereCond += ` And ${clsvRTUserRelaEN.con_UpdUser} = '${objvUserRoleRelation.userId}'`;
      //    //学生00620003

      //}
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

      const objPage_RTUserRela = new Pub_RTUserRelaList();
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
  public CombinevRTViewpointRelaCondition1(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.viewpointName_q != "") {
      //    strWhereCond += ` And ${clsvRTViewpointRelaEN.con_ViewpointName} like '%${this.viewpointName_q}%'`;
      //}
      //if (this.topicName_q != "") {
      //    strWhereCond += ` And ${clsvRTViewpointRelaEN.con_TopicName} like '%${this.topicName_q}%'`;
      //}

      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTViewpointRelaEN.con_TopicId} = '${strTopicId}'`;
      }

      strWhereCond += " and userTypeId='01'";

      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTViewpointRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombinevRTViewpointRelaCondition2(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.viewpointName_q != "") {
      //    strWhereCond += ` And ${clsvRTViewpointRelaEN.con_ViewpointName} like '%${this.viewpointName_q}%'`;
      //}
      //if (this.topicName_q != "") {
      //    strWhereCond += ` And ${clsvRTViewpointRelaEN.con_TopicName} like '%${this.topicName_q}%'`;
      //}

      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTViewpointRelaEN.con_TopicId} = '${strTopicId}'`;
      }

      strWhereCond += " and userTypeId='02'";

      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTViewpointRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

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
      //if (this.topicName_q != "") {
      //    strWhereCond += ` And ${clsvRTPaperRelaEN.con_TopicName} like '%${this.topicName_q}%'`;
      //}
      //if (this.paperTitle_q != "") {
      //    strWhereCond += ` And ${clsvRTPaperRelaEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      //}

      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTPaperRelaEN.con_TopicId} = '${strTopicId}'`;
      }

      ////判断角色
      ////管理员
      //if (objvUserRoleRelation.roleId == "00620001") {

      //    // $("#btnDelRecord").show();

      //}
      //else if (objvUserRoleRelation.roleId == "00620002") {
      //    //教师
      //    // $("#btnDelRecord").show();
      //    //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
      //    strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + objvUserRoleRelation.userId + "' And isEffective='1') And isEffective='1')";

      //}
      //else {
      //    //学生；
      //    // $("#btnDelRecord").show();
      //    strWhereCond += ` And ${clsvRTPaperRelaEN.con_UpdUser} = '${objvUserRoleRelation.userId}'`;
      //    //学生00620003

      //}
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
      const objPage_RTPaperRela = new Pub_RTPaperRelaList();
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

  /* 根据条件获取相应的记录对象的列表
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
 */
  public async btnQuery_Click() {
    this.GetTopicData();
    //strWhereCond = await this.CombineResearchTopicCondition();
    //try {
    //    this.recCount = await ResearchTopic_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {

    //    });
    //    const objPagerPara: stuPagerPara = {
    //        pageIndex: 1,
    //        pageSize: this.pageSize,
    //        whereCond: strWhereCond,
    //        orderBy: this.hidSortResearchTopicBy
    //    };
    //    const responseObjLst = await ResearchTopic_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
    //        arrResearchTopicObjLst: Array<clsResearchTopicEN> = <Array<clsResearchTopicEN>>jsonData;
    //        this.BindTab_ResearchTopic(this.mstrListDiv, arrResearchTopicObjLst);
    //    });
    //}
    //catch (e:any) {
    //    console.error('catch(e)=');
    //    console.error(e);
    //    strIdCurrEduclsstrMsg: string = ` const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
    //    alert(strMsg);
    //}
  }

  /* 删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
  */
  public async btnDelInRecord_Click(strKeyId: string) {
    try {
      await this.DelRecordEx(strKeyId);
      //树形数据源；
      this.GetTopicData();
      //const responseText2 = await this.BindGv_ResearchTopic();
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
    // this.keyId = strTopicId;

    try {
      const objResearchTopicEN = await ResearchTopic_GetObjByTopicIdAsync(strTopicId);
      if (objResearchTopicEN == null) return;
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
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    const strTopicId = clsPrivateSessionStorage.topicIdInTree;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.viewpointName_q != "") {
      //    strWhereCond += ` And ${clsvViewpointEN.con_ViewpointName} like '%${this.viewpointName_q}%'`;
      //}
      //if (this.viewpointTypeId_q != "" && this.viewpointTypeId_q != "0") {
      //    strWhereCond += ` And ${clsvViewpointEN.con_ViewpointTypeId} = '${this.viewpointTypeId_q}'`;
      //}
      //if (this.Reason_q != "") {
      //    strWhereCond += ` And ${clsvViewpointEN.con_Reason} like '%${this.Reason_q}%'`;
      //}

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
    const objPage_Viewpoint = new Pub_ViewpointList();
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
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
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

        HideDialogTwo();
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
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
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

  /// <summary>
  /// 为下拉框获取数据,从表:[Paper]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
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
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    const strTopicId: string = clsPrivateSessionStorage.topicIdInTree;
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
    const objPage_Paper = new Pub_PaperList();
    await objPage_Paper.PageLoad();
    //await objPage_Paper.BindGv_vPaper();
  }

  //查询论列表
  public async btnPaperQuery_Click() {
    const objPage_Paper = new Pub_PaperList();
    await objPage_Paper.PageLoad();
    //await objPage_Paper.BindGv_vPaper();
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
  /* 函数功能:在数据 列表中跳转到某一页 论文列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
<param name = "intPageIndex">页序号</param>
*/
  //public IndexPageTwo(intPageIndex: number) {
  //    if (intPageIndex == 0) {
  //        intPageIndex = this.objPager.pageCount;
  //    }
  //    console.log("跳转到" + intPageIndex + "页");
  //    this.setCurrPageIndex(intPageIndex, this.divName4Pager);
  //    this.BindGv_vPaper();
  //}
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

  //添加用户关系
  public async btnAddUserRela_Click() {
    const objPage_QxUsers = new Pub_QxUsersList();
    await objPage_QxUsers.PageLoad();
    //await objPage_QxUsers.BindGv_QxUsers();
  }

  //查询用户数据
  public async btnUserQuery_Click() {
    const objPage_QxUsers = new Pub_QxUsersList();
    await objPage_QxUsers.PageLoad();
    //await objPage_QxUsers.BindGv_QxUsers();
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombineQxUsersCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const strTopicId: string = clsPrivateSessionStorage.topicIdInTree;
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

  //主题
  /*
   *主题
   */
  public get topicName(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'dllTopicName');
  }
  ////////////////////////用户列表条件
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
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: KnowledgeEconomyListEx;

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        break;

      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PaperCollectionLogCRUDExEx.btn_Click');

        break;
    }
  }
}
