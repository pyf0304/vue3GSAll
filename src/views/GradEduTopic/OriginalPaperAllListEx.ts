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
import { ResearchTopicEx_DelRecordAsyncEx } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { clsgs_OriginalPaperLogEN } from '@/ts/L0Entity/GradEduPaper/clsgs_OriginalPaperLogEN';
import { clsgs_PaperDiscussEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperDiscussEN';
import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsvgs_PConceptRelaEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PConceptRelaEN';
import { clsvgs_PViewpointRelaEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PViewpointRelaEN';
import { clsConceptEN } from '@/ts/L0Entity/GradEduTopic/clsConceptEN';
import { clske_SubEN } from '@/ts/L0Entity/GradEduTopic/clske_SubEN';
import { clske_SuperEN } from '@/ts/L0Entity/GradEduTopic/clske_SuperEN';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import { clsRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointRelaEN';
import { clsSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsSysSkillEN';
import { clsSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsSysSocialRelationsEN';
import { clsTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsTopicObjectiveEN';
import { clsViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointEN';
import { clsViewpointLikeLogEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointLikeLogEN';
import { clsvRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { clsTopicUserRoleEN } from '@/ts/L0Entity/RT_Params/clsTopicUserRoleEN';
import {
  gs_OriginalPaperLog_AddNewRecordAsync,
  gs_OriginalPaperLog_GetObjLstAsync,
  gs_OriginalPaperLog_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_OriginalPaperLogWApi';
import {
  gs_PaperDiscuss_AddNewRecordAsync,
  gs_PaperDiscuss_DelRecordAsync,
  gs_PaperDiscuss_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperDiscussWApi';
import { PaperAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import { Paper_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { Concept_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsConceptWApi';
import { ke_Sub_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clske_SubWApi';
import { ke_Super_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clske_SuperWApi';
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
import {
  ViewpointLikeLog_AddNewRecordAsync,
  ViewpointLikeLog_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsViewpointLikeLogWApi';
import { Viewpoint_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsViewpointWApi';
import { vRTPaperRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTPaperRelaWApi';
import {
  SysVote_AddNewRecordAsync,
  SysVote_GetRecCountByCondAsync,
  SysVote_IsExistRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import { LiteratureType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { TopicUserRole_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsTopicUserRoleWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetHidPaperId, SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { enumSysVoteType } from '@/ts/L0Entity/RT_Params/clsSysVoteTypeEN';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import { vRTViewpoint_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointWApi';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
import { userStore } from '@/store/modulesShare/user';

declare function ShowDialog(strOpType: string): void;
declare function HideDialog(): void;
declare function HideDialogTwo(): void;

declare function HideDialogThree(): void;
declare function HideDialogFour(): void;

declare function RefreshWindow(): void;
declare function AlertComment(): void;
declare let window: any;
/* ResearchTopic_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class OriginalPaperAllListEx extends PaperCRUD {
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
        await this.Bind_TopicNameList();

        //页面加载时候 判断主题ID是否为空 不为空则调用论文
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        if (strTopicId != '' && strTopicId != undefined) {
          //点击主题了后，调用论文绑定；
          await this.Bind_TopicPaperList();
        }

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
        //需要读取写作步骤，显示不同的状态；
        await this.GetPaperLogTypeId();
        //if (this.bolIsInitShow == false)  //
        //{
        //    this.objPager.InitShow(this.divName4Pager);
        //    this.bolIsInitShow = true;  //
        //}
        //默认论思路
        await this.BindPaperIdea();
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
  public async GetPaperLogTypeId() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = GetInputValueInDivObj(divName, 'hidPaperRelaId');
    let result = '';
    ///获取论文步骤状态
    const strWhere = `1=1 And paperId='${strPaperId}'`;
    let arrvgs_OriginalPaperLogLst: Array<clsgs_OriginalPaperLogEN> = [];

    await gs_OriginalPaperLog_GetObjLstAsync(strWhere).then((jsonData) => {
      arrvgs_OriginalPaperLogLst = <Array<clsgs_OriginalPaperLogEN>>jsonData;
    });
    //排序为了统计步骤方便
    arrvgs_OriginalPaperLogLst = arrvgs_OriginalPaperLogLst.sort((x) =>
      x.GetFldValue(clsgs_OriginalPaperLogEN.con_LogTypeId),
    );
    for (let j = 0; j < arrvgs_OriginalPaperLogLst.length; j++) {
      if (j + 1 == arrvgs_OriginalPaperLogLst.length) {
        result = arrvgs_OriginalPaperLogLst[j].logTypeId;
      }
    }

    const logTypeId = result.toString();
    switch (logTypeId) {
      case '01':
        $('#lblPaperIdea').html('论文思路(开始中)');
        $('#lblPaperViewpoint').html('论文观点(未开始)');
        $('#lblPaperFirst').html('论文初稿(未开始)');
        $('#lblGroupDiscuss').html('小组讨论(未开始)');
        $('#lblPaperSecond').html('论文修改稿(未开始)');
        $('#lblPeerAdvice').html('同伴建议(未开始)');
        $('#lblPaperEnd').html('论文终稿(未开始)');
        break;
      case '02':
        $('#lblPaperIdea').html('论文思路(已完成)');
        $('#lblPaperViewpoint').html('论文观点(开始中)');
        $('#lblPaperFirst').html('论文初稿(未开始)');
        $('#lblGroupDiscuss').html('小组讨论(未开始)');
        $('#lblPaperSecond').html('论文修改稿(未开始)');
        $('#lblPeerAdvice').html('同伴建议(未开始)');
        $('#lblPaperEnd').html('论文终稿(未开始)');
        break;
      case '03':
        $('#lblPaperIdea').html('论文思路(已完成)');
        $('#lblPaperViewpoint').html('论文观点(已完成)');
        $('#lblPaperFirst').html('论文初稿(开始中)');
        $('#lblGroupDiscuss').html('小组讨论(未开始)');
        $('#lblPaperSecond').html('论文修改稿(未开始)');
        $('#lblPeerAdvice').html('同伴建议(未开始)');
        $('#lblPaperEnd').html('论文终稿(未开始)');
        break;
      case '04':
        $('#lblPaperIdea').html('论文思路(已完成)');
        $('#lblPaperViewpoint').html('论文观点(已完成)');
        $('#lblPaperFirst').html('论文初稿(已完成)');
        $('#lblGroupDiscuss').html('小组讨论(开始中)');
        $('#lblPaperSecond').html('论文修改稿(未开始)');
        $('#lblPeerAdvice').html('同伴建议(未开始)');
        $('#lblPaperEnd').html('论文终稿(未开始)');
        break;
      case '05':
        $('#lblPaperIdea').html('论文思路(已完成)');
        $('#lblPaperViewpoint').html('论文观点(已完成)');
        $('#lblPaperFirst').html('论文初稿(已完成)');
        $('#lblGroupDiscuss').html('小组讨论(已完成)');
        $('#lblPaperSecond').html('论文修改稿(开始中)');
        $('#lblPeerAdvice').html('同伴建议(未开始)');
        $('#lblPaperEnd').html('论文终稿(未开始)');
        break;
      case '06':
        $('#lblPaperIdea').html('论文思路(已完成)');
        $('#lblPaperViewpoint').html('论文观点(已完成)');
        $('#lblPaperFirst').html('论文初稿(已完成)');
        $('#lblGroupDiscuss').html('小组讨论(已完成)');
        $('#lblPaperSecond').html('论文修改稿(已完成)');
        $('#lblPeerAdvice').html('同伴建议(开始中)');
        $('#lblPaperEnd').html('论文终稿(未开始)');
        break;
      case '07':
        $('#lblPaperIdea').html('论文思路(已完成)');
        $('#lblPaperViewpoint').html('论文观点(已完成)');
        $('#lblPaperFirst').html('论文初稿(已完成)');
        $('#lblGroupDiscuss').html('小组讨论(已完成)');
        $('#lblPaperSecond').html('论文修改稿(已完成)');
        $('#lblPeerAdvice').html('同伴建议(已完成)');
        $('#lblPaperEnd').html('论文终稿(开始中)');
        break;
      case '08':
        $('#lblPaperIdea').html('论文思路(已完成)');
        $('#lblPaperViewpoint').html('论文观点(已完成)');
        $('#lblPaperFirst').html('论文初稿(已完成)');
        $('#lblGroupDiscuss').html('小组讨论(已完成)');
        $('#lblPaperSecond').html('论文修改稿(已完成)');
        $('#lblPeerAdvice').html('同伴建议(已完成)');
        $('#lblPaperEnd').html('论文终稿(已完成)');
        break;
      default:
        $('#lblPaperIdea').html('论文思路(开始中)');
        $('#lblPaperViewpoint').html('论文观点(未开始)');
        $('#lblPaperFirst').html('论文初稿(未开始)');
        $('#lblGroupDiscuss').html('小组讨论(未开始)');
        $('#lblPaperSecond').html('论文修改稿(未开始)');
        $('#lblPeerAdvice').html('同伴建议(未开始)');
        $('#lblPaperEnd').html('论文终稿(未开始)');
        break;
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
        //判断主题ID是否为空；
        const strTopic = clsPrivateSessionStorage.topicIdInTree;
        if (strTopic != '') {
          //如果不为空，那么则判断 循环的ID和当前主题相等，那么则直接赋值
          if (objResearchTopic.topicId == strTopic) {
            clsPrivateSessionStorage.topicIdInTree = objResearchTopic.topicId;
            clsPrivateSessionStorage.topicName = objResearchTopic.topicName;
            $('#topicName').html(objResearchTopic.topicName);
          }
        } else {
          if (i == 0) {
            if (clsPrivateSessionStorage.topicName == '') {
              clsPrivateSessionStorage.topicIdInTree = objResearchTopic.topicId;
              clsPrivateSessionStorage.topicName = objResearchTopic.topicName;
              $('#topicName').html(objResearchTopic.topicName);
            } else {
              $('#topicName').html(clsPrivateSessionStorage.topicName);
            }
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
  //主题下的原创论文；
  public async Bind_TopicPaperList() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      //获取主题Id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      const strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}' And topicId = '${strTopicId}' And paperTypeId='02'`;

      let arrvRTPaperRelaObjLst: Array<clsvRTPaperRelaEN> = [];

      arrvRTPaperRelaObjLst = await vRTPaperRela_GetObjLstAsync(strWhereCond);
      let strhtml = '';

      if (arrvRTPaperRelaObjLst.length > 0) {
        for (let i = 0; i < arrvRTPaperRelaObjLst.length; i++) {
          //判断主题ID是否为空；
          const strPaperId = GetInputValueInDivObj(divName, 'hidPaperRelaId');
          if (strPaperId != '') {
            //如果不为空，那么则判断 循环的ID和当前主题相等，那么则直接赋值
            if (arrvRTPaperRelaObjLst[i].paperId == strPaperId) {
              $('#hidPaperRelaId').val(arrvRTPaperRelaObjLst[i].paperId);
            }
          } else {
            if (i == 0) {
              //    if ($("#hidPaper1Name").val() == "") {
              //        $("#hidPaperRelaId").val(arrvRTPaperRelaObjLst[i].paperId);
              //        $("#hidPaper1Name").val(arrvRTPaperRelaObjLst[i].Paper1Name);
              //        $("#Paper1Name").html(arrvRTPaperRelaObjLst[i].Paper1Name);
              //    }
              //    else {
              //        $("#Paper1Name").html($("#hidPaper1Name").val());
              //    }
            }
          }

          strhtml += `<dd><a onclick=BtnTopicPaperTitle_Click("${arrvRTPaperRelaObjLst[i].paperId}","${arrvRTPaperRelaObjLst[i].paperTitle}")> ${arrvRTPaperRelaObjLst[i].paperTitle}</a></dd>`;
        }
      } else {
        $('#hidPaperRelaId').val('');
        $('#hidPaperTitle').val('');
        $('#paperTitle').html('无论文数据');
      }

      $('#dlPaperTitleList').html(strhtml);
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //获取主题
  public async BtnTopicName_Click(strkey: string, strName: string) {
    //$("#hidIdCurrEduCls").val(strkey);
    clsPrivateSessionStorage.topicIdInTree = strkey;
    clsPrivateSessionStorage.topicName = strName;
    $('#topicName').html(strName);

    //点击主题了后，调用论文绑定；
    await this.Bind_TopicPaperList();
    // this.GetAllFunctionMethod();
  }
  //点击论文获取默认显示论文思路
  public async BtnTopicPaperTitle_Click(strkey: string, strName: string) {
    //$("#hidIdCurrEduCls").val(strkey);
    $('#hidPaperRelaId').val(strkey);
    $('#hidPaperTitle').val(strName);
    $('#paperTitle').html(strName);

    //默认显示论文思路
    this.BindPaperIdea();
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
        alert(strMsg);
        break;
    }
  }

  //动态主题数据结构；
  public async GetTopicData() {
    const divName = this.getDivName(enumDivType.LayOut_01);

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
    $('#TreeBind li').remove();
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
          //默认存放第一条数据显示；
          if (j == 0) {
            //判断存放的id控件是否为空；
            if (GetInputValueInDivObj(divName, 'hidke_SubId') == '') {
              ////存放Id
              $('#hidke_SubId').val(arrke_SubObjLst[i].keSubId);
              strhtml += `<li id="liTwo${arrke_SubObjLst[j].keSubId}" onclick=btnSelectke_Sub("${arrke_SubObjLst[j].keSubId}","${arrke_SubObjLst[j].keSubNameCn}")><a href="javascript:void(0)" class="selected" >${arrke_SubObjLst[j].keSubNameCn}</a></li>`;
            } else {
              strhtml += `<li id="liTwo${arrke_SubObjLst[j].keSubId}" onclick=btnSelectke_Sub("${arrke_SubObjLst[j].keSubId}","${arrke_SubObjLst[j].keSubNameCn}")><a href="javascript:void(0)" >${arrke_SubObjLst[j].keSubNameCn}</a></li>`;
            }
          } else {
            strhtml += `<li id="liTwo${arrke_SubObjLst[j].keSubId}" onclick=btnSelectke_Sub("${arrke_SubObjLst[j].keSubId}","${arrke_SubObjLst[j].keSubNameCn}")><a href="javascript:void(0)">${arrke_SubObjLst[j].keSubNameCn}</a></li>`;
          }
        }
        strhtml += '</ul></li>';
      }

      $('#TreeBind').append(strhtml);

      //调用数据展示；
      this.GetAllFunctionMethod();
    }
  }

  ////////////////////////////////////////主题用户关系
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevRTConceptRelaCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      ////判断主题id
      //strIdCurrEduclsstrTopicId = clsPrivateSessionStorage.topicIdInTree;
      //if (strTopicId != "") {
      //    strWhereCond += ` And ${clsvRTConceptRelaEN.con_TopicId} = '${strTopicId}'`;
      //}
      //判断Paperid
      const strPaperId = GetInputValueInDivObj(divName, 'hidPaperRelaId');
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvgs_PConceptRelaEN.con_PaperId} = '${strPaperId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTUserRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  //动态获取所有相关关系表数据
  public async BindGv_AllTopicRela() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // const strUserId = userStore.getUserId;
    //一、条件串
    //1用户关系
    //  strIdCurrEduclsstrWhereUserRela = this.CombinevRTUserRelaCondition();
    //2论文关系
    //    strIdCurrEduclsstrWherePaperRela = this.CombinevRTPaperRelaCondition();
    //3观点关系
    const strWhereViewpointRela1 = this.CombinevRTViewpointRelaCondition1();
    const strWhereViewpointRela2 = this.CombinevRTViewpointRelaCondition2();
    //附件
    // const strWhereCondAttachment = '1=1';
    //5点赞 查询当前用户 点赞数据；
    //strWhereCondLike = `1=1 And ${clsViewpointLikeLogEN.con_UpdUser} = '${strUserId}'`;// 老方法
    // const strWhereCondLike = `1=1 And ${clsSysVoteEN.con_UpdUser} = '${strUserId}'`; //新0605

    //6相关概念
    const strWhereConcept = await this.CombinevRTConceptRelaCondition();

    //7客观事实
    const strWhereFacts = `paperId='${GetInputValueInDivObj(
      divName,
      'hidPaperRelaId',
    )}' and objectiveType='01'`;

    //8客观数据
    const strWhereBasis = `paperId='${GetInputValueInDivObj(
      divName,
      'hidPaperRelaId',
    )}' and objectiveType='02'`;

    //技能
    const strWhereSysskill = `paperId='${GetInputValueInDivObj(divName, 'hidPaperRelaId')}'`;

    //9、社会关系
    const strWhereSysSocialRelations = `paperId='${GetInputValueInDivObj(
      divName,
      'hidPaperRelaId',
    )}'`;

    //用户分数
    // const strWhereCond10 = " parentId='root' and  commentTypeId='08' order by Score Desc";

    //二、数据源声明
    // const arrvRTUserRelaObjLst: Array<clsvRTUserRelaEN> = [];
    // const arrvRTPaperRelaObjLst: Array<clsvRTPaperRelaEN> = [];
    let arrvgs_PViewpointRelaObjLst1: Array<clsvRTViewpointEN> = [];
    let arrvgs_PViewpointRelaObjLst2: Array<clsvRTViewpointEN> = [];
    //获取观点图片
    // const arrViewpointAttachmentObjLst: Array<clsViewpointAttachmentEN> = [];
    // let arrViewpointAttachmentObjLst2: Array<clsViewpointAttachmentEN> = [];

    //获取概念图片
    // const arrConceptAttachmentObjLst: Array<clsConceptAttachmentEN> = [];
    // let arrConceptAttachmentObjLst2: Array<clsConceptAttachmentEN> = [];

    //获取客观图片
    // const arrObjectiveAttachmentObjLst: Array<clsObjectiveAttachmentEN> = [];
    // let arrObjectiveAttachmentObjLst2: Array<clsObjectiveAttachmentEN> = [];

    //获取当前用户的点赞数据
    //strIdCurrEduclsarrViewpointLikeLogObjLst: Array<clsViewpointLikeLogEN> = [];//老方法

    //获取相关概念
    let arrvgs_PConceptRelaObjLst: Array<clsvRTViewpointEN> = [];

    //客观事实
    let arrvgs_PTopicObjectiveRelaObjLst1: Array<clsvRTViewpointEN> = [];

    //客观数据
    let arrvgs_PTopicObjectiveRelaObjLst2: Array<clsvRTViewpointEN> = [];

    //技能
    let arrvgs_SkillObjLst: Array<clsvRTViewpointEN> = [];

    //社会关系
    let arrvgs_PSocialRelaObjLst: Array<clsvRTViewpointEN> = [];

    //三、方法获取调用
    try {
      arrvgs_PViewpointRelaObjLst1 = await vRTViewpoint_GetObjLstAsync(strWhereViewpointRela1);

      arrvgs_PViewpointRelaObjLst2 = await vRTViewpoint_GetObjLstAsync(strWhereViewpointRela2);

      //获取相关概念数据
      arrvgs_PConceptRelaObjLst = await vRTViewpoint_GetObjLstAsync(strWhereConcept);

      //客观事实
      arrvgs_PTopicObjectiveRelaObjLst1 = await vRTViewpoint_GetObjLstAsync(strWhereFacts);

      //客观数据
      arrvgs_PTopicObjectiveRelaObjLst2 = await vRTViewpoint_GetObjLstAsync(strWhereBasis);

      //用户分数
      // const arrvSysCommentObjLst = await vSysComment_GetObjLstAsync(strWhereCond10);

      //获取技能
      arrvgs_SkillObjLst = await vRTViewpoint_GetObjLstAsync(strWhereSysskill);
      //社会关系
      arrvgs_PSocialRelaObjLst = await vRTViewpoint_GetObjLstAsync(strWhereSysSocialRelations);

      //相关概念附件图片
      // const arrConceptAttachmentObjLst2 = await ConceptAttachment_GetObjLstAsync(
      //   strWhereCondAttachment,
      // );

      //客观附件图片
      // const arrObjectiveAttachmentObjLst2 = await ObjectiveAttachment_GetObjLstAsync(
      //   strWhereCondAttachment,
      // );

      //得到管理员教师
      // const strWhereUserRoleRel =
      //   " roleId in(00620001,00620002) And QxprjId='0062' order by userId asc ";

      //得到学生数据
      //获取用户缓存数据

      let strhtml = `<div style="font-size:20px; color: #009688; font-weight: bold; margin-bottom:10px;" id="TopicTitle">当前主题：${clsPrivateSessionStorage.topicName}</div>`;

      //个人观点
      strhtml += await Public_Viewpoint.BindList_vgs_PViewpointRela(
        '07',
        '01',
        arrvgs_PViewpointRelaObjLst1,
      );
      //专家观点
      strhtml += await Public_Viewpoint.BindList_vgs_PViewpointRela(
        '07',
        '02',
        arrvgs_PViewpointRelaObjLst2,
      );
      //概念
      strhtml += await Public_Concept.BindList_vgs_PConceptRela('07', arrvgs_PConceptRelaObjLst);
      //客观事实
      strhtml += await Public_TopicObjective.BindList_vgs_PTopicObjectiveRela(
        '07',
        '01',
        arrvgs_PTopicObjectiveRelaObjLst1,
      );
      //客观数据
      strhtml += await Public_TopicObjective.BindList_vgs_PTopicObjectiveRela(
        '07',
        '02',
        arrvgs_PTopicObjectiveRelaObjLst2,
      );
      //技能
      strhtml += await Public_SysSkill.BindList_vgs_PSkillRela('07', arrvgs_SkillObjLst);
      //社会关系
      strhtml += await Public_SysSocialRelations.BindList_vgs_PSocialRela(
        '07',
        arrvgs_PSocialRelaObjLst,
      );

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
        let strMsg = '';
        let objSysSocialRelationsEN;
        let objViewpointEN;
        let objConceptEN;
        let objTopicObjectiveEN;
        let objysSkillEN;
        //通过不同的点赞类型，查询不同的表 把获取到的点赞数据插入到对应的表、表ID数据中
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
  public async btnShowAppraise_Click(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let arrgs_PaperDiscussObjLst1: Array<clsgs_PaperDiscussEN> = [];
    let arrgs_PaperDiscussObjLst2: Array<clsgs_PaperDiscussEN> = [];
    let arrgs_PaperDiscussObjLst3: Array<clsgs_PaperDiscussEN> = [];
    let strWhereCond1 = '';
    let strWhereCond2 = '';

    const strUserId = userStore.getUserId;
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部评论
        strWhereCond1 = ` parentId='root' and  discussTypeId='${$(
          '#hidCommentTypeId',
        ).val()}' and paperId='${GetInputValueInDivObj(
          divName,
          'hidTableKey',
        )}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  discussTypeId='${$(
          '#hidCommentTypeId',
        ).val()}' and paperId='${GetInputValueInDivObj(
          divName,
          'hidTableKey',
        )}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人评论
        strWhereCond1 = ` parentId='root' and  discussTypeId='${$(
          '#hidCommentTypeId',
        ).val()}' and paperId='${$(
          '#hidTableKey',
        ).val()}' and updUser='${strUserId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  discussTypeId='${$(
          '#hidCommentTypeId',
        ).val()}' and paperId='${$(
          '#hidTableKey',
        ).val()}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新评论
        strWhereCond1 = ` parentId='root' and  discussTypeId='${$(
          '#hidCommentTypeId',
        ).val()}' and paperId='${GetInputValueInDivObj(
          divName,
          'hidTableKey',
        )}' order by updDate Desc`;
        strWhereCond2 = ` parentId<>'root' and  discussTypeId='${$(
          '#hidCommentTypeId',
        ).val()}' and paperId='${GetInputValueInDivObj(
          divName,
          'hidTableKey',
        )}' order by updDate Desc`;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    //strWhereCond1 = " parentId='root' and  commentTypeId='" + $("#hidCommentTypeId").val() + "' and tableKey='" + $("#hidTableKey").val() + "' order by updDate Asc";
    //strWhereCond2 = " parentId<>'root' and  commentTypeId='" + $("#hidCommentTypeId").val() + "' and tableKey='" + $("#hidTableKey").val() + "' order by updDate Asc";

    try {
      await gs_PaperDiscuss_GetObjLstAsync(strWhereCond1).then((jsonData) => {
        arrgs_PaperDiscussObjLst1 = <Array<clsgs_PaperDiscussEN>>jsonData;
      });
      await gs_PaperDiscuss_GetObjLstAsync(strWhereCond2).then((jsonData) => {
        arrgs_PaperDiscussObjLst2 = <Array<clsgs_PaperDiscussEN>>jsonData;
      });

      //获取用户缓存数据

      const strWhere_User = '1=1';
      const arrvUserStuNameObjLst = await vUsersSim_GetObjLstAsync(strWhere_User);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrgs_PaperDiscussObjLst1.length; i++) {
        varNum++;
        //获取用户名

        let UpdUserName; //编辑人
        const arrvUsers = arrvUserStuNameObjLst.filter(
          (x) => x.userId == arrgs_PaperDiscussObjLst1[i].updUser,
        ); //技能引用人
        for (let j = 0; j < arrvUsers.length; j++) {
          UpdUserName = arrvUsers[j].userName;
          break;
        }

        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';
        if (GetInputValueInDivObj(divName, 'hidUser') == arrgs_PaperDiscussObjLst1[i].updUser) {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842 style="color:red;" > 楼主：${UpdUserName}</span>`;
        } else {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842">${UpdUserName}</span>`;
        }
        strhtml += `<span class="comment-time">${arrgs_PaperDiscussObjLst1[i].updDate}</span>`;
        strhtml += `  <span class="comment-username J_User">${varNum}楼</span></p>`;
        //strhtml += '<div class="comment-content J_CommentContent">评分：' + arrvPaperAppraiseObjLst[i].AppraiseScore + '</div>';
        strhtml += `<div class="comment-content J_CommentContent">${arrgs_PaperDiscussObjLst1[i].discussContent}</div>`;

        //回复区

        arrgs_PaperDiscussObjLst3 = arrgs_PaperDiscussObjLst2.filter(
          (x) => x.parentId == arrgs_PaperDiscussObjLst1[i].discussId,
        );
        if (arrgs_PaperDiscussObjLst3.length > 0) {
          strhtml += '<div class="reply J_ReplyBlock">';
          for (let j = 0; j < arrgs_PaperDiscussObjLst3.length; j++) {
            //获取用户名

            let UpdUserName; //编辑人
            const arrvUsers = arrvUserStuNameObjLst.filter(
              (x) => x.userId == arrgs_PaperDiscussObjLst3[i].updUser,
            ); //技能引用人
            for (let j = 0; j < arrvUsers.length; j++) {
              UpdUserName = arrvUsers[j].userName;
              break;
            }

            strhtml += '<div class="reply-block">';

            strhtml += '<div class="reply-content">';
            if (GetInputValueInDivObj(divName, 'hidUser') == arrgs_PaperDiscussObjLst3[j].updUser) {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" data-userid="28805328" style="color:red;"> 楼主(${UpdUserName})</b>：</span>`;
            } else {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" data-userid="28805328">${UpdUserName}</b>：</span>`;
            }
            strhtml += `${arrgs_PaperDiscussObjLst3[j].discussContent}</div>`;

            //strhtml += '<div class="reply-operate reply-operate--hot">'
            //if (arrgs_PaperDiscussObjLst3[j].scoreType == "2") {
            //    strhtml += '<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分:<i>' + arrgs_PaperDiscussObjLst3[j].score + '</i></span>';
            //} else {
            //    strhtml += '<span class="J_Vote reply-operate-item reply-up">学生评分:<i>' + arrgs_PaperDiscussObjLst3[j].score + '</i></span>';
            //}
            //strhtml += '<i class="reply-dot">·</i><span>' + arrgs_PaperDiscussObjLst3[j].updDate + '</span>';
            //strhtml += '</div>';

            strhtml += '</div>';
          }
          strhtml += '</div>';
        }
        ///评论区
        strhtml += '<div class="comment-operate J_CommentOperate clearfix">';
        //if (arrgs_PaperDiscussObjLst1[i].scoreType == "2") {
        //    strhtml += '<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分:<i>' + arrgs_PaperDiscussObjLst1[i].score + '</i></span>';
        //} else {
        //    strhtml += '<span class="J_Vote reply-operate-item reply-up">学生评分:<i>' + arrgs_PaperDiscussObjLst1[i].score + '</i></span>';
        //}

        strhtml += '<span class="J_Vote comment-operate-item comment-operate-up">赞<i>1</i></span>';
        strhtml += `<span class="J_Reply comment-operate-item comment-operate-reply" id="J_Reply" onclick=btnReplyComment_Click("${arrgs_PaperDiscussObjLst1[i].discussId}")>回复</span>`;
        strhtml += '</div>';

        if (strUserId == arrgs_PaperDiscussObjLst1[i].updUser) {
          strhtml += `<div class="J_Report comment-report" id="J_Report6673850347411436155" onclick=btnDeleteComment_Click("${arrgs_PaperDiscussObjLst1[i].discussId}")>删除</div>`;
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
  //论文思路
  public async liPaperIdea_Click() {
    try {
      await this.BindPaperIdea();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取个人观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //论文观点
  public async liPaperViewpoint_Click() {
    try {
      await this.GetTopicData();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取个人观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //论文初稿
  public async liPaperFirst_Click() {
    try {
      await this.BindGv_PaperFirst('01');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取个人观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //小组讨论
  public async liGroupDiscuss_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      const strPaperId = GetInputValueInDivObj(divName, 'hidPaperRelaId');
      $('#hidPaperLogTypeId').val('05');
      $('#hidTableKey').val(strPaperId); //
      SetHidPaperId(divName, strPaperId); //论文主键
      $('#hidCommentTypeId').val('01');

      await this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取个人观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //论文修改稿
  public async liPaperSecond_Click() {
    try {
      await this.BindGv_PaperFirst('02');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取个人观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //同伴建议
  public async liPeerAdvice_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      const strPaperId = GetInputValueInDivObj(divName, 'hidPaperRelaId');
      $('#hidPaperLogTypeId').val('07');
      $('#hidTableKey').val(strPaperId); //
      SetHidPaperId(divName, strPaperId); //论文主键
      $('#hidCommentTypeId').val('01');
      await this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取个人观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //论文终稿
  public async liPaperEnd_Click() {
    try {
      await this.BindGv_PaperFirst('03');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取个人观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //论文思路
  public async BindPaperIdea() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = GetInputValueInDivObj(divName, 'hidPaperRelaId');
    //通过Id 获得论文思路数据；
    const strWhere = ` 1 = 1 And paperId = '${strPaperId}'`;
    const responseText = await Paper_GetFirstObjAsync(strWhere);
    const objPaperEN: clsPaperEN = <clsPaperEN>responseText;
    if (objPaperEN != null) {
      ////换行符
      const strBr =
        '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
      //动态显示对应的数据
      let strhtml = '';

      //论文思路
      strhtml += '<div class="info" id="infoViewpoint"><div class="title btn-3">';

      strhtml += '</div><ul class="artlist">';
      // const v = 0; //给内容加个序号

      //对内容进行换行替换 问题提出
      let strAskQuestion = objPaperEN.askQuestion;
      strAskQuestion = strAskQuestion.replace(/\r\n/g, strBr);
      strAskQuestion = strAskQuestion.replace(/\n/g, strBr);

      //对内容进行换行替换 目前研究的现状
      let strResearchStatus = objPaperEN.researchStatus;
      strResearchStatus = strResearchStatus.replace(/\r\n/g, strBr);
      strResearchStatus = strResearchStatus.replace(/\n/g, strBr);

      //对内容进行换行替换 创新点
      let strInnovationPoints = objPaperEN.innovationPoints;
      strInnovationPoints = strInnovationPoints.replace(/\r\n/g, strBr);
      strInnovationPoints = strInnovationPoints.replace(/\n/g, strBr);

      //对内容进行换行替换 研究设计
      let strResearchDesign = objPaperEN.researchDesign;
      strResearchDesign = strResearchDesign.replace(/\r\n/g, strBr);
      strResearchDesign = strResearchDesign.replace(/\n/g, strBr);

      //对内容进行换行替换  数据处理的维度
      let strDimensionDataProcess = objPaperEN.dimensionDataProcess;
      strDimensionDataProcess = strDimensionDataProcess.replace(/\r\n/g, strBr);
      strDimensionDataProcess = strDimensionDataProcess.replace(/\n/g, strBr);

      //对内容进行换行替换  预期结论
      let strExpectedConclusion = objPaperEN.expectedConclusion;
      strExpectedConclusion = strExpectedConclusion.replace(/\r\n/g, strBr);
      strExpectedConclusion = strExpectedConclusion.replace(/\n/g, strBr);

      //strhtml += v + ".观点：" + arrConceptObjLst[i].viewpointName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>" + "&nbsp;内容:" + arrConceptObjLst[i].viewpointContent + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;" + arrConceptObjLst[i].viewpointTypeName + ":" + arrConceptObjLst[i].reason + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>&nbsp;所属主题：" + arrConceptObjLst[i].topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%></br>";
      strhtml += `<li><span class="rowtit color3">[问题提出]：</span><span class="abstract-text">${strAskQuestion}</span></li>`;
      strhtml += `<li><span class="rowtit color3">[目前研究的现状]：</span><span class="abstract-text">${strResearchStatus}</span></li>`;
      strhtml += `<li><span class="rowtit color3">[创新点]：</span><span class="abstract-text">${strInnovationPoints}</span></li>`;
      strhtml += `<li><span class="rowtit color3">[研究设计]：</span><span class="abstract-text">${strResearchDesign}</span></li>`;
      strhtml += `<li><span class="rowtit color3">[数据处理的维度]：</span><span class="abstract-text">${strDimensionDataProcess}</span></li>`;
      strhtml += `<li><span class="rowtit color3">[预期结论]：</span><span class="abstract-text">${strExpectedConclusion}</span></li>`;
      strhtml += '<li><div style="height:100%;width:100%;"><div style = "float:left;width:70%;">';

      strhtml += `<span class="rowtit color3">[编辑日期]：</span><span class="abstract-text">${objPaperEN.updDate}</span>`;
      //获取用户名称；根据id；

      const strWhere_User = '1=1';
      let arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

      //获取用户名；
      arrUsers = arrUsers.filter((x) => x.userId == objPaperEN.updUser); //用户；

      for (let j = 0; j < arrUsers.length; j++) {
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[用户]：</span><span class="abstract-text">${arrUsers[j].userName}</span>`;
        break;
      }

      strhtml += '&nbsp</div></div></li>';

      strhtml += '</br></br><div style="border-bottom: 1px solid #eee;"></div></br>';

      strhtml += '</ul></div>';

      $('#divDataliPaperIdeaLst').html(strhtml);
    }
  }
  //论文初稿 strTypeId 区分 初稿、修稿、终稿
  public async BindGv_PaperFirst(strTypeId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //绑定论文pdf
    try {
      const strPaperId = GetHidPaperId(divName);
      const strWhereCond = ` 1=1 and paperId ='${strPaperId}' order by updDate Asc`;

      let arrPaperAttachmentObjLst: Array<clsPaperAttachmentEN> = [];
      arrPaperAttachmentObjLst = await PaperAttachment_GetObjLstAsync(strWhereCond);

      let strhtml = '';
      let strfilepath = '';

      if (arrPaperAttachmentObjLst.length > 0) {
        for (let i = 0; i < arrPaperAttachmentObjLst.length; i++) {
          //通过排序数据，通过类型 循环标 可以判定 初稿 、修改稿、终稿；
          if (strTypeId == '01') {
            if (i == 0) {
              //初稿
              strfilepath = GetAddressAndPort() + arrPaperAttachmentObjLst[i].filePath;
              break;
            }
          } else if (strTypeId == '02') {
            if (i == 1) {
              //修改稿
              strfilepath = GetAddressAndPort() + arrPaperAttachmentObjLst[i].filePath;
              break;
            }
          } else {
            if (i == 2) {
              //终稿
              strfilepath = GetAddressAndPort() + arrPaperAttachmentObjLst[i].filePath;
              break;
            }
          }
        }
      }
      strhtml = `<iframe src='../GradEduEx/Pdf?file=${strfilepath}' style="height:100%;width:99%; min-height:700px;"></iframe>`;
      if (strTypeId == '01') {
        $('#divDataliPaperFirstLst').html(strhtml);
      } else if (strTypeId == '02') {
        $('#divDataliPaperSecondLst').html(strhtml);
      } else {
        $('#divDataliPaperEndLst').html(strhtml);
      }
    } catch (e: any) {
      const strMsg = `获取pdf附件数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //小组讨论 同伴建议
  /* 添加评论内容
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async SubmitAppraise_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strUserId = userStore.getUserId;
    const strRoleId = userStore.getRoleId;

    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'hidPaperLogTypeId');
    const strTableKey = GetInputValueInDivObj(divName, 'hidTableKey');
    //用来区分 小组讨论 或同伴建议 01 02
    const strDiscussTypeId = GetInputValueInDivObj(divName, 'hidCommentTypeId');
    const objgs_PaperDiscussEN: clsgs_PaperDiscussEN = new clsgs_PaperDiscussEN();
    //this.PutDataToSysCommentClass(objSysCommentEN);
    objgs_PaperDiscussEN.SetPaperId(GetInputValueInDivObj(divName, 'hidTableKey'));
    objgs_PaperDiscussEN.SetParentId(OriginalPaperAllListEx.parentId);
    objgs_PaperDiscussEN.discussTypeId = strDiscussTypeId;
    objgs_PaperDiscussEN.SetUserId(GetInputValueInDivObj(divName, 'hidUser')); //被评论用户
    objgs_PaperDiscussEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);

    if (strRoleId == '00620003') {
      objgs_PaperDiscussEN.SetScoreType('1');
    } else {
      objgs_PaperDiscussEN.SetScoreType('2');
    }

    //strIdCurrEduclsstrvalue = $("#pin").val();
    ////判断是否有打分
    //if (strvalue != "" && strvalue != undefined) {
    //    //获取值转化分数
    //    strIdCurrEduclsstrScore: string = this.GetScorebyText(strvalue);

    //判断内容是否输入
    if (GetInputValueInDivObj(divName, 'txtAppraiseContent') != '') {
      objgs_PaperDiscussEN.discussContent = GetInputValueInDivObj(divName, 'txtAppraiseContent'); // 评议内容
      // objgs_PaperDiscussEN.SetScore( parseInt(strScore);// 打分
      objgs_PaperDiscussEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
      objgs_PaperDiscussEN.SetUpdUser(strUserId); // 修改用户Id
      try {
        const responseText2 = await gs_PaperDiscuss_AddNewRecordAsync(objgs_PaperDiscussEN);
        //const responseText2 = await SysComment_AddNewRecordWithMaxIdAsync(objgs_PaperDiscussEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          //查询 论文、日志类型是否存在；
          const strWhere = ` 1 = 1 And paperId = '${strTableKey}' And logTypeId = '${strPaperLogTypeId}'`;
          const bolIsExist = await gs_OriginalPaperLog_IsExistRecordAsync(strWhere);

          if (bolIsExist == true) {
            const strInfo = `评论成功`;
            //显示信息框
            alert(strInfo);
            HideDialog();
            $('#btnOKUpdAppraise').attr('disabled', 'false');
            await this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
            return true; //一定要有一个返回值，否则会出错！
          } else {
            //添加论文日志；
            await this.Addgs_OriginalPaperLogSave();

            const strInfo = `评论成功`;
            //显示信息框
            alert(strInfo);
            HideDialog();
            $('#btnOKUpdAppraise').attr('disabled', 'false');
            await this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
          }

          RefreshWindow();
        } else {
          const strInfo = `添加论文讨论失败!`;
          console.error(strInfo);
          //显示信息框
          alert(strInfo);
          HideDialog();
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
      AlertComment();
      //strIdCurrEduclsstrInfo: string = `请输入评语!`;
      ////显示信息框
      //alert(strInfo);
      return;
    }

    //}
    //else {
    //    $("#J_PostBtn").attr("disabled", false);
    //    $("#btnOKUpdAppraise").attr("disabled", false);

    //    AlertScore();
    //    //strIdCurrEduclsstrInfo: string = `请选择评分!`;
    //    ////显示信息框
    //    //alert(strInfo);
    //    return;
    //}
    return true; //一定要有一个返回值，否则会出错！
  }
  //添加论文流程日志
  public async Addgs_OriginalPaperLogSave() {
    const objgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN = new clsgs_OriginalPaperLogEN();
    this.PutDataTogs_OriginalPaperLog(objgs_OriginalPaperLogEN);

    try {
      const responseText2 = await gs_OriginalPaperLog_AddNewRecordAsync(objgs_OriginalPaperLogEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        console.log('添加新建论文日志成功');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加日志记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }
  public async PutDataTogs_OriginalPaperLog(pobjgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = GetHidPaperId(divName);
    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'hidPaperLogTypeId');
    //通过区分 是小组讨论还是同伴建议
    const strTypeId = GetInputValueInDivObj(divName, 'hidCommentTypeId');
    pobjgs_OriginalPaperLogEN.SetPaperId(strPaperId);
    pobjgs_OriginalPaperLogEN.SetLogTypeId(strPaperLogTypeId);
    let strMsg = '';
    switch (strTypeId) {
      case '01':
        pobjgs_OriginalPaperLogEN.SetLogDescription('小组讨论');
        break;
      case '02':
        pobjgs_OriginalPaperLogEN.SetLogDescription('同伴建议');
        break;

      default:
        strMsg = `没有数据处理！`;
        alert(strMsg);
        break;
    }
    //pobjgs_OriginalPaperLogEN.SetLogDescription( "新建论文";
    pobjgs_OriginalPaperLogEN.SetUpdUser(userStore.getUserId);
    pobjgs_OriginalPaperLogEN.SetUpdDate(clsPubFun4Web.getNowDate());
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
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      await this.DelRecord(strKeyId);
      await this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
      // const response2 = await this.SynStatistics();
      //  RefreshWindow();
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
  public async DelRecord(strCommentId: string) {
    try {
      const responseText = await gs_PaperDiscuss_DelRecordAsync(strCommentId);
      const returnInt: number = responseText;
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

    //return new Promise((resolve, reject) => {
    //    try {
    //        const responseText = await gs_PaperDiscuss_DelRecordAsync(strCommentId).then((jsonData) => {
    //            strIdCurrEduclsreturnInt: number = jsonData;
    //            if (returnInt > 0) {
    //                AlertNo();
    //                //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
    //                ////显示信息框
    //                //alert(strInfo);
    //            }
    //            else {
    //                strIdCurrEduclsstrInfo: string = `删除记录不成功!`;
    //                //显示信息框
    //                alert(strInfo);
    //            }
    //            console.log("完成DelRecord!");
    //            resolve(jsonData);
    //        });
    //    }
    //    catch (e:any) {
    //        console.error('catch(e)=');
    //        console.error(e);
    //        strIdCurrEduclsstrMsg: string = `删除记录不成功. ${e}.`;
    //        alert(strMsg);
    //    }
    //});
  }

  ////添加删除评论的时候统计其他表的部分数据
  //public async SynStatistics() {
  //    strIdCurrEduclsstrCommentTypeId = $("#hidCommentTypeId").val();
  //    strIdCurrEduclsstrRoleId = userStore.getRoleId;
  //    //论文子观点
  //    if (strCommentTypeId == "02") {
  //        //教师或者管理员权限
  //        if (strRoleId != "00620003") {
  //            strIdCurrEduclsstrPaperRWId = $("#hidPubParentId").val();

  //            //添加记录的同时并记录论文读写的教师评价数
  //            strWhereCond = "   commentTypeId='02' and scoreType='2' and pubParentId=" + strPaperRWId;
  //            intTeaCount = await SysComment_GetRecCountByCondAsync(strWhereCond);

  //            const objPaperReadWriteEN: clsPaperReadWriteEN = new clsPaperReadWriteEN();
  //            objPaperReadWriteEN.SetPaperRWId(strPaperRWId;
  //            objPaperReadWriteEN.SetTeaCount(intTeaCount;

  //            objPaperReadWriteEN.sfUpdFldSetStr = objPaperReadWriteEN.updFldString;//设置哪些字段被修改(脏字段)
  //            if (objPaperReadWriteEN.paperRWId == "" || objPaperReadWriteEN.paperRWId == undefined) {
  //                 throw Format("关键字不能为空!(in {0}.{1})", this.constructor.name, strThisFuncName);
  //            }

  //            const responseText = await PaperReadWrite_UpdateRecordAsync(objPaperReadWriteEN);
  //            const returnBool: boolean = !!responseText;
  //            if (returnBool == true) {
  //                //刷新缓存
  //                vPaperReadWrite_ReFreshThisCache(clsPubLocalStorage.idCurrEduCls);
  //                console.log("添加教师评价数量成功！");
  //            }
  //            else {

  //                console.log("添加教师评价数量失败！");
  //            }
  //            //添加记录的同时并记录论文读写的教师评价数

  //        }
  //    }

  //}

  ///////////////////////////////////////////////////////////////////////////////3个关系列表数据

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
      //await objPage_RTUserRela.BindGv_vRTUserRela();
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
    const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断Paperid
      const strPaperId = GetInputValueInDivObj(divName, 'hidPaperRelaId');
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvgs_PViewpointRelaEN.con_PaperId} = '${strPaperId}'`;
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
    const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断Paperid
      const strPaperId = GetInputValueInDivObj(divName, 'hidPaperRelaId');
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvgs_PViewpointRelaEN.con_PaperId} = '${strPaperId}'`;
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

  // /* 函数功能:把界面上的属性数据传到类对象中
  //    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
  //    <param name = "pobjResearchTopicEN">数据传输的目的类对象</param>
  //  */
  // public async PutDataToResearchTopicClass(pobjResearchTopicEN: clsResearchTopicEN) {
  //   pobjResearchTopicEN.SetTopicId(this.topicId); // 主题编号
  //   pobjResearchTopicEN.SetTopicName(this.topicName); // 栏目主题
  //   pobjResearchTopicEN.SetTopicContent(this.topicContent); // 主题内容
  //   pobjResearchTopicEN.SetTopicProposePeople(userStore.getUserId); // 主题提出人
  //   pobjResearchTopicEN.SetOrderNum(this.orderNum); // 序号
  //   pobjResearchTopicEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
  //   pobjResearchTopicEN.SetUpdUser(userStore.getUserId); // 修改人
  //   pobjResearchTopicEN.SetMemo(this.memo); // 备注
  // }

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

  // /* 修改
  //  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
  // */
  // public async btnUpdateRecord_Click() {
  //   //this.opType = "Update";

  //   //if (strKeyId == "") {
  //   //    alert("请选择需要修改的记录！");
  //   //    return;
  //   //}
  //   //判断主题id
  //   const strTopicId = clsPrivateSessionStorage.topicIdInTree;
  //   if (strTopicId == '') {
  //     alert('请选择需要修改的主题！');
  //     return;
  //   }
  //   this.UpdateRecord(strTopicId);
  // }

  /* 根据关键字获取相应的记录的对象
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
    <param name = "sender">参数列表</param>
  */
  // public async UpdateRecord(strTopicId: string): Promise<boolean> {
  //   const strThisFuncName = this.UpdateRecord.name;
  //   this.btnSubmitResearchTopic = '确认修改';
  //   this.btnCancelResearchTopic = '取消修改';
  //   this.keyId = strTopicId;
  //   const strUserId = userStore.getUserId;

  //   try {
  //     const objResearchTopicEN = await ResearchTopic_GetObjByTopicIdAsync(strTopicId);
  //     if (objResearchTopicEN == null) {
  //       const strMsg = Format(
  //         '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
  //         this.constructor.name,
  //         strThisFuncName,
  //       );
  //       console.error(strMsg);
  //       alert(strMsg);
  //       return false;
  //     }
  //     // //通过判断数据用户是否是当前登录用户；
  //     if (objResearchTopicEN.updUser == strUserId) {
  //       ShowDialog('Update');
  //       this.GetDataFromResearchTopicClass(objResearchTopicEN);
  //       console.log('完成UpdateRecord!');
  //       return true;
  //     } else {
  //       alert('当前数据不是您所添加，不能修改！');
  //       return false;
  //     }
  //   } catch (e: any) {
  //     console.error(e);
  //     const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
  //     alert(strMsg);
  //     return false;
  //   }
  //   return true;
  // }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
  // public async btnOKUpd_Click() {
  //   const strCommandText: string = this.btnSubmitResearchTopic;
  //   try {
  //     switch (strCommandText) {
  //       case '添加':
  //         await this.AddNewRecord();
  //         break;
  //       case '确认添加':
  //         //这是一个单表的插入的代码,由于逻辑层太简单,
  //         //就把逻辑层合并到控制层,
  //         await this.AddNewRecordSave().then((jsonData) => {
  //           const returnBool: boolean = jsonData;
  //           if (returnBool == true) {
  //             HideDialog();
  //             //树形数据源；
  //             this.GetTopicData();
  //             //this.BindGv_ResearchTopic();
  //           }
  //         });
  //         break;
  //       case '确认修改':
  //         //这是一个单表的修改的代码,由于逻辑层太简单,
  //        const returnBool: boolean =    await this.UpdateRecordSave();
  //           if (returnBool == true) {
  //             HideDialog();
  //             //树形数据源；
  //             this.GetTopicData();
  //             //this.BindGv_ResearchTopic();
  //           }

  //         break;
  //       default:
  //         AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

  //         break;
  //     }
  //   } catch (e: any) {
  //     const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
  //     alert(strMsg);
  //   }
  // }
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

  // /* 添加新记录
  //  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
  // */
  // public async AddNewRecordSave() {
  //   try {
  //     ResearchTopic_GetMaxStrIdAsync().then((jsonData) => {
  //       const returnString: string = jsonData.toString();
  //       if (returnString == '') {
  //         const strInfo = `获取表Paper的最大关键字为空，不成功，请检查!`;
  //         //显示信息框
  //         alert(strInfo);
  //       } else {
  //         $('#txtTopicId').val(returnString);
  //       }
  //     });
  //   } catch (e: any) {
  //     console.error('catch(e)=');
  //     console.error(e);
  //     const strMsg = `获取表关键字的最大值不成功,${e}.`;
  //     alert(strMsg);
  //   }

  //   const objResearchTopicEN: clsResearchTopicEN = new clsResearchTopicEN();
  //   this.PutDataToResearchTopicClass(objResearchTopicEN);
  //   try {
  //     //const responseText = await ResearchTopic_IsExistAsync(objResearchTopicEN.topicId);
  //     //strIdCurrEduclsbolIsExist: boolean = responseText;
  //     //if (bolIsExist == true) {
  //     //    strIdCurrEduclsstrMsg: string = `添加记录时，关键字：${objResearchTopicEN.topicId}已经存在！`;
  //     //    alert(strMsg);
  //     //    return responseText;//一定要有一个返回值，否则会出错！
  //     //}
  //     const responseText2 = await ResearchTopic_AddNewRecordAsync(objResearchTopicEN);
  //     const returnBool = !!responseText2;
  //     if (returnBool == true) {
  //       const strInfo = `添加记录成功!`;

  //       //显示信息框
  //       alert(strInfo);
  //     } else {
  //       const strInfo = `添加记录不成功!`;

  //       //显示信息框
  //       alert(strInfo);
  //     }
  //     return responseText2; //一定要有一个返回值，否则会出错！
  //   } catch (e: any) {
  //     console.error('catch(e)=');
  //     console.error(e);
  //     const strMsg = `添加记录不成功,${e}.`;
  //     alert(strMsg);
  //     return false;
  //   }
  //   return true; //一定要有一个返回值，否则会出错！
  // }

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
        //this.BindGv_vRTViewpointRela();
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
    // const divName = this.getDivName();
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

  //主题
  /*
   *主题
   */
  public get topicName(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'dllTopicName');
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
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: OriginalPaperAllListEx;

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
