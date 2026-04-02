import $ from 'jquery';
import { Public_Concept } from '../GradEduPublicPage/Public_Concept';
import { Public_SysSkill } from '../GradEduPublicPage/Public_SysSkill';
import { Public_SysSocialRelations } from '../GradEduPublicPage/Public_SysSocialRelations';
import { Public_TopicObjective } from '../GradEduPublicPage/Public_TopicObjective';
import { Public_Viewpoint } from '../GradEduPublicPage/Public_Viewpoint';
import { PaperEx_GetSubObjLstByIdCurrEduCls_Cache } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { ResearchTopicCRUD } from '@/viewsBase/GradEduTopic/ResearchTopicCRUD';
import { clsgs_OriginalPaperLogEN } from '@/ts/L0Entity/GradEduPaper/clsgs_OriginalPaperLogEN';
import { clsgs_PConcepRelaEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PConcepRelaEN';
import { clsgs_PTopicObjectiveRelaEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PTopicObjectiveRelaEN';
import { clsgs_PViewpointRelaEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PViewpointRelaEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsvgs_PConceptRelaEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PConceptRelaEN';
import { clsvgs_PSkillRelaEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PSkillRelaEN';
import { clsvgs_PSocialRelaEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PSocialRelaEN';
import { clsvgs_PTopicObjectiveRelaEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PTopicObjectiveRelaEN';
import { clsvgs_PViewpointRelaEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PViewpointRelaEN';
import { clsViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointEN';
import { clsvViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvViewpointEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  gs_OriginalPaperLog_AddNewRecordAsync,
  gs_OriginalPaperLog_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_OriginalPaperLogWApi';
import {
  gs_PConcepRela_DelRecordAsync,
  gs_PConcepRela_GetObjBymIdAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PConcepRelaWApi';
import { gs_PSkillRela_DelRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsgs_PSkillRelaWApi';
import { gs_PSocialRela_DelRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsgs_PSocialRelaWApi';
import {
  gs_PTopicObjectiveRela_DelRecordAsync,
  gs_PTopicObjectiveRela_GetObjBymIdAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PTopicObjectiveRelaWApi';
import {
  gs_PViewpointRela_AddNewRecordAsync,
  gs_PViewpointRela_DelRecordAsync,
  gs_PViewpointRela_GetObjBymIdAsync,
  gs_PViewpointRela_GetRecCountByCondAsync,
  gs_PViewpointRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PViewpointRelaWApi';
import { Section_BindDdl_SectionIdByPaperIdInDivCache } from '@/ts/L3ForWApi/GradEduPaper/clsSectionWApi';
import { vgs_PConceptRela_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvgs_PConceptRelaWApi';
import { vgs_PSkillRela_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvgs_PSkillRelaWApi';
import { vgs_PSocialRela_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvgs_PSocialRelaWApi';
import { vgs_PTopicObjectiveRela_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvgs_PTopicObjectiveRelaWApi';
import { vgs_PViewpointRela_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvgs_PViewpointRelaWApi';
import { Viewpoint_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsViewpointWApi';
import {
  vViewpoint_GetObjLstByPagerAsync,
  vViewpoint_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvViewpointWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { BindTabV2Where_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { GetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import { vRTViewpoint_GetObjLstByPagerAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointWApi';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare function HideDialogTwo(): void;

declare function RefreshWindow(): void;
declare let window: any;
/* ResearchTopic_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class OriginalPaperAddideas extends ResearchTopicCRUD {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortResearchTopicBy: string = "paperId";

  //public bolIsLoadEditRegion: boolean = false;  //记录是否导入编辑区的变量
  //public bolIsLoadDetailRegion: boolean = false;  //记录是否导入详细信息区的变量
  //public divName4Edit: string = "divEdit";  //编辑区的Id

  //观点列表
  public mstrListDivViewpoint = 'divViewpointDataLst';

  //个人观点关系
  public mstrListDivgs_PViewpointRela = 'divgs_PViewpointRelaDataLst';
  //专家观点
  public mstrListDivRtExpegs_PViewpointRela = 'divRtExpegs_PViewpointRelaDataLst';

  //概念
  public mstrListConceptDivPaper = 'divgs_PConceptRelaDataLst';

  //客观事实
  public mstrListTopicObjectiveDivPaper = 'divRtTopicObjectiveDataLst';
  //客观依据

  public mstrListBasisTopicObjectiveDivPaper = 'divBasisRtTopicObjectiveDataLst';

  //技能
  public mstrListSysskillDivPaper = 'divSysskillDataLst';

  //社会关系
  public mstrListSysSocialRelaDivPaper = 'divgs_PSocialRelaLst';

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;

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
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //1、为下拉框设置数据源,绑定列表数据

        //主题观点关系
        this.hidSortvgs_PViewpointRelaBy = 'updDate Desc';

        //主题概念
        this.hidSortvgs_PConceptRelaBy = 'updDate Desc';

        //观点
        this.hidSortvViewpointBy = 'updDate Desc';
        //客观
        //TopicObjectiveCRUD.sortvTopicObjectiveBy = "updDate Desc";

        //默认不 显示分页
        if (this.recCount == 0) {
          $('#divPagerViewpoint').attr('style', 'display:none;');
          $('#divPagerConcept').attr('style', 'display:none;');
          $('#divExpertPagerViewpoint').attr('style', 'display:none;');
          $('#divPagerBasis').attr('style', 'display:none;');
          $('#divPagerResearchResult').attr('style', 'display:none;');
        }

        //2、显示无条件的表内容在GridView中
        //主题列表因为页面调整问题，注释；
        //await this.BindGv_ResearchTopic();

        //读取session角色 来判断绑定不同数据列表
        //获取用户角色来判断显示不同的列表数据；

        $('#hidUserId').val(userStore.getUserId);
        $('#hidRoleId').val(userStore.getRoleId);

        //管理员 判断角色
        if (GetInputValueInDivObj(objLayOut, 'hidRoleId') == '00620001') {
          $('#btnDelRecord').show();
          $('#tab4Bind tr').find('td:eq(8)').show();
        } else {
          //学生00620003 教师
          $('#btnDelRecord').hide();
          $('#tab4Bind tr').find('td:eq(8)').hide();
        }
        //调用关系列表数据
        await this.GetPaperData();
        await this.GetAllFunctionMethod();

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

  public async GetPaperData() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = GetHidPaperId(divName);

    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    const objvPaper_Cond: clsPaperEN = new clsPaperEN(); //查询区域

    objvPaper_Cond.SetCondFldValue(clsPaperEN.con_PaperId, strPaperId, '=');
    const arrPaperExObjLst = await PaperEx_GetSubObjLstByIdCurrEduCls_Cache(
      objvPaper_Cond,
      strIdCurrEducls,
    );

    const strWhere_User = '1=1';
    const arrvUsersObjLst = await vUsersSim_GetObjLstAsync(strWhere_User);
    let strhtml = '';
    //strWhereCond1 = " 1=1 and paperId ='" + pobjvPaperReadWriteEN.paperId + "'";
    //strWhereCond2 = " 1=1 and paperId ='" + pobjvPaperReadWriteEN.paperId + "' and updUser='" + userStore.getUserId + "'";

    try {
      //const responseText1 = await vPaperCount_GetFirstObjAsync(strWhereCond1);
      //objvPaperCount = <clsvPaperCountEN>responseText1;

      //const responseText2 = await PaperLikeLog_GetFirstObjAsync(strWhereCond2);
      //objPaperLikeLog = <clsPaperLikeLogEN>responseText2;

      //const responseText3 = await PaperCollectionLog_GetFirstObjAsync(strWhereCond2);
      //objPaperCollectionLog = <clsPaperCollectionLogEN>responseText3;

      strhtml = '';
      for (let i = 0; i < arrPaperExObjLst.length; i++) {
        const objPaperEx = arrPaperExObjLst[i];
        strhtml += '<div class="main-w1 fl" ><dl class="detail-list dbpage" ><dd>';
        strhtml += `<h6><a href="javascript:void(0)" onclick="xadmin.open('论文查看', '../GradEduEx/PaperDetail?paperId=${objPaperEx.paperId}')"><span style='color:#c7228d;'>${objPaperEx.paperTitle}</a>`;
        if (objPaperEx.attachmentCount > 0) {
          strhtml += `<span class="btn-2" style="padding-left:50px;"><a style="font-size:15px; color:#f98c51" href="javascript:void(0)" onclick="xadmin.open('pdf查看', '../GradEduEx/PdfDetail?paperId=${objPaperEx.paperId}')">pdf查看</a></span>`;
        }
        strhtml += '</h6>';

        strhtml += `<div class="baseinfo"><span><a href="javascript:void(0)">${objPaperEx.periodical}</a></span><span><a href="javascript:void(0)">${objPaperEx.keyword}</a></span>`;
        strhtml += '</div>';
        //<span>' + objPaperEx.periodical + ' < /span><em>' + objPaperEx.keyword + '</em >
        strhtml += `<div class="abstract">${objPaperEx.paperContent}</div>`;

        strhtml += '<div class="opts"><ul class="opts-count">';
        strhtml += `<li>评论数:<em>${objPaperEx.appraiseCount}</em></li>`;
        strhtml += `<li>读写数:<em>${objPaperEx.pcount}</em></li><li>发表日期:<em>${objPaperEx.updDate}</em></li>`;
        const objUser = arrvUsersObjLst.find((x) => x.userId == objPaperEx.updUser);
        if (objUser != null) {
          strhtml += `<li>发表人:<em>${objUser.userName}</em></li>`;
        }

        strhtml += '<ul class="opts-btn">';

        strhtml += '</ul></div>';
        strhtml += '</dd></dl></div>';
      }

      $('#tabwucPaperReadWrite').html(strhtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定论文对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //得到3个关系列表数据；
  public async GetAllFunctionMethod() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //如果是点击了树菜单、或者是刷新，那么需要做样式控制；
    //首先要去掉ul下 li a 样式
    $('#myTab li a').removeClass();
    $('#myTab li').removeClass();
    //判断根据序号显示不同的数据源
    const strnum = GetInputValueInDivObj(divName, 'hidTabNum');
    const strPaperId = GetHidPaperId(divName);
    if (strnum == '3') {
      $('#liViewpoint').addClass('active');
      $('#liViewpoint a').addClass('active');

      $('#li_Viewpoint ').addClass('in active show');
      //主题个人观点关系；
      this.BindGv_vgs_PViewpointRela();
    } else if (strnum == '4') {
      $('#liExpertViewpoint').addClass('active');
      $('#liExpertViewpoint a').addClass('active');

      $('#li_ExpertViewpoint ').addClass('in active show');

      //专家观点
      this.BindGv_vRTExpegs_PViewpointRela();
    } else if (strnum == '5') {
      $('#liConcept').addClass('active');
      $('#liConcept a').addClass('active');

      $('#li_Concept ').addClass('in active show');

      //主题概念关系
      this.BindGv_vgs_PConceptRela();
    } else if (strnum == '6') {
      $('#liObjectiveFact').addClass('active');
      $('#liObjectiveFact a').addClass('active');

      $('#li_Objective ').addClass('in active show');

      //客观事实关系
      this.BindGv_vgs_PTopicObjectiveRela();
    } else if (strnum == '7') {
      $('#liObjectiveBasis').addClass('active');
      $('#liObjectiveBasis a').addClass('active');

      $('#li_ObjectiveBasis ').addClass('in active show');

      //客观依据关系
      this.BasisBindGv_vgs_PTopicObjectiveRela();
    } else if (strnum == '9') {
      $('#liSysskill').addClass('active');
      $('#liSysskill a').addClass('active');

      $('#liSysskill ').addClass('in active show');

      //技能
      this.BindGv_vgs_PSkillRela();
    } else if (strnum == '10') {
      $('#liSysSocialRela').addClass('active');
      $('#liSysSocialRela a').addClass('active');

      $('#liSysSocialRela ').addClass('in active show');

      //社会关系
      this.BindGv_vgs_PSocialRela();
    } else {
      $('#liViewpoint').addClass('active');
      $('#liViewpoint a').addClass('active');

      $('#li_Viewpoint ').addClass('in active show');

      await Section_BindDdl_SectionIdByPaperIdInDivCache(
        this.divLayout,
        'ddlSectionId1',
        strPaperId,
      );
      //主题个人观点关系；
      this.BindGv_vgs_PViewpointRela();
    }
  }

  //添加观点 展示观点列表数据
  public async btnAddExperRela_Click() {
    await this.BindGv_vRTExpegs_PViewpointRela();
  }
  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */
  public CombinevRTExpegs_PViewpointRelaCondition(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.viewpointName_q != "") {
      //    strWhereCond += ` And ${clsvgs_PViewpointRelaEN.con_ViewpointName} like '%${this.viewpointName_q}%'`;
      //}
      //if (this.topicName_q != "") {
      //    strWhereCond += ` And ${clsvgs_PViewpointRelaEN.con_TopicName} like '%${this.topicName_q}%'`;
      //}

      //判断主题id
      const strPaperId = GetHidPaperId(divName);
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvgs_PViewpointRelaEN.con_PaperId} = '${strPaperId}'`;
      }
      //只显示专家观点数据
      strWhereCond += ` And ${clsvgs_PViewpointRelaEN.con_UserTypeId} ='02'`;
      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；

      //判断角色
      //管理员
      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        $('#btnDelRecord').show();
      } else if (userStore.getRoleId == '00620002') {
        //教师
        $('#btnDelRecord').show();
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        //  strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + objvUserRoleRelation.userId + "' And isEffective='1') And isEffective='1')";
      } else {
        //学生；
        $('#btnDelRecord').show();
        //   strWhereCond += ` And ${clsvgs_PViewpointRelaEN.con_UpdUser} = '${objvUserRoleRelation.userId}'`;
        //学生00620003

        // strWhereCond += ` And ${clsResearchTopicEN.con_TopicProposePeople} = '${objvUserRoleRelation.userId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combinegs_PViewpointRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的记录对象的列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
  */
  public async BindGv_vRTExpegs_PViewpointRela() {
    // const strListDiv: string = this.mstrListDivRtExpegs_PViewpointRela;
    const strWhereCond = await this.CombinevRTExpegs_PViewpointRelaCondition();
    const intCurrPageIndex = this.CurrPageIndexViewpoint; //获取当前页
    let arrvgs_PViewpointRelaObjLst: Array<clsvRTViewpointEN> = [];
    try {
      this.recCount = await vgs_PViewpointRela_GetRecCountByCondAsync(strWhereCond);

      ////如果记录数小于10,
      //if (this.recCount < 10) {
      //    $("#divPagerViewpoint").attr("style", "display:none;");
      //}

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvgs_PViewpointRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvgs_PViewpointRelaObjLst = await vRTViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    try {
      this.BindList_vgs_PViewpointRela('02', arrvgs_PViewpointRelaObjLst);
      //this.BindTab_vRTExpegs_PViewpointRela(strListDiv, arrvgs_PViewpointRelaObjLst);
      console.log('完成BindGv_vgs_PViewpointRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /*
   * 观点列表表头排序；
   */
  public async SortBy(objAnchorElement: any) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      ResearchTopicCRUD.ascOrDesc4SortFun,
      ResearchTopicCRUD.sortResearchTopicBy,
      strSortExpress,
    );
    ResearchTopicCRUD.sortResearchTopicBy = sortBy;
    ResearchTopicCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    ResearchTopicCRUD.sortFunStatic = sortFun;
    await this.BindGv_vViewpoint();
  }
  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */
  public Combinevgs_PViewpointRelaCondition(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.viewpointName_q != "") {
      //    strWhereCond += ` And ${clsvgs_PViewpointRelaEN.con_ViewpointName} like '%${this.viewpointName_q}%'`;
      //}
      //if (this.topicName_q != "") {
      //    strWhereCond += ` And ${clsvgs_PViewpointRelaEN.con_TopicName} like '%${this.topicName_q}%'`;
      //}

      //判断主题id
      const strPaperId = GetHidPaperId(divName);
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvgs_PViewpointRelaEN.con_PaperId} = '${strPaperId}'`;
      }
      //只显示个人观点数据
      strWhereCond += ` And ${clsvgs_PViewpointRelaEN.con_UserTypeId} ='01'`;
      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；

      //判断角色
      //管理员
      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        $('#btnDelRecord').show();
      } else if (userStore.getRoleId == '00620002') {
        //教师
        $('#btnDelRecord').show();
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        //     strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + objvUserRoleRelation.userId + "' And isEffective='1') And isEffective='1')";
      } else {
        //学生；
        $('#btnDelRecord').show();
        //    strWhereCond += ` And ${clsvgs_PViewpointRelaEN.con_UpdUser} = '${objvUserRoleRelation.userId}'`;
        //学生00620003

        // strWhereCond += ` And ${clsResearchTopicEN.con_TopicProposePeople} = '${objvUserRoleRelation.userId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combinegs_PViewpointRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的记录对象的列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
  */
  public async BindGv_vgs_PViewpointRela() {
    // const strListDiv: string = this.mstrListDivgs_PViewpointRela;
    const strWhereCond = await this.Combinevgs_PViewpointRelaCondition();
    const intCurrPageIndex = this.CurrPageIndexViewpoint; //获取当前页
    let arrvgs_PViewpointRelaObjLst: Array<clsvRTViewpointEN> = [];
    try {
      this.recCount = await vgs_PViewpointRela_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvgs_PViewpointRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvgs_PViewpointRelaObjLst = await vRTViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    try {
      //如果记录数小于10,
      //if (this.recCount < 10) {
      //    $("#divPagerViewpoint").attr("style", "display:none;");
      //}

      this.BindList_vgs_PViewpointRela('01', arrvgs_PViewpointRelaObjLst);
      console.log('完成BindGv_vgs_PViewpointRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public async BindList_vgs_PViewpointRela(
    strVType: string,
    arrvgs_PViewpointRelaObjLst: Array<clsvRTViewpointEN>,
  ) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    $('#hidPageType').val(strVType);
    const strPageType = strVType; //页面参数

    $('#hidPageType').val(strVType);
    const strUserTypeId = strVType;
    const strHtml = await Public_Viewpoint.BindList_vgs_PViewpointRela(
      '06',
      strUserTypeId,
      arrvgs_PViewpointRelaObjLst,
    );

    //拼接；
    if (strPageType == '01') {
      $('#divgs_PViewpointRelaDataLst').html(strHtml);

      if (arrvgs_PViewpointRelaObjLst.length > 10) {
        $('#divPagerViewpoint').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } else if (strPageType == '02') {
      $('#divRtExpegs_PViewpointRelaDataLst').html(strHtml);

      if (arrvgs_PViewpointRelaObjLst.length > 10) {
        $('#divExpertPagerViewpoint').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    }
  }

  //删除个人观点关系数据
  public async btnDelViewPointRelaRecordInTab_Click(strKeyId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);

      const strUserId = userStore.getUserId;
      //strPaperId = $("#hidPaperId").val();
      //const strWhereCond = ` 1=1 And ${clsRTUserRelaEN.con_PaperId} = '${strPaperId}' And ${clsRTUserRelaEN.con_UserId} ='${strUserId}'`;
      //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
      const objRtViewpointEN = await gs_PViewpointRela_GetObjBymIdAsync(lngKeyId);
      if (objRtViewpointEN == null) return;
      if (objRtViewpointEN != null) {
        if (objRtViewpointEN.updUser == strUserId) {
          //01 个人
          if (GetInputValueInDivObj(divName, 'hidPageType') == '01') {
            this.DelViewPointRelaRecord(lngKeyId, '01');
          } else if (GetInputValueInDivObj(divName, 'hidPageType') == '02') {
            this.DelViewPointRelaRecord(lngKeyId, '02');
          }
          // const responseText2 = await this.BindGv_vRTPaperRela();
        } else {
          //成员
          const strMsg = `您只能删除自己添加的数据！`;
          alert(strMsg);
          return;
        }
      }

      //const responseText = await this.DelViewPointRelaRecord(lngKeyId);
      //const responseText2 = await this.BindGv_vgs_PViewpointRela();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //删除专家观点关系数据
  public async btnDelExpegs_PViewpointRelaRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      const strUserId = userStore.getUserId;

      //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
      await gs_PViewpointRela_GetObjBymIdAsync(lngKeyId).then((jsonData) => {
        const objRtExpertViewpointEN: clsgs_PViewpointRelaEN = <clsgs_PViewpointRelaEN>jsonData;
        if (objRtExpertViewpointEN != null) {
          if (objRtExpertViewpointEN.updUser == strUserId) {
            //01 个人
            this.DelViewPointRelaRecord(lngKeyId, '02');
            // const responseText2 = await this.BindGv_vRTPaperRela();
          } else {
            //成员
            const strMsg = `您只能删除自己添加的数据！`;
            alert(strMsg);
            return;
          }
        }
      });

      //const responseText = await this.DelViewPointRelaRecord(lngKeyId,"02");
      //const responseText2 = await this.BindGv_vRTExpegs_PViewpointRela();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  /* 
    根据关键字删除记录  type 01 个人 02专家
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   */
  public async DelViewPointRelaRecord(lngmId: number, TypeId: string) {
    try {
      const returnInt: number = await gs_PViewpointRela_DelRecordAsync(lngmId);
      if (returnInt > 0) {
        //type 01 个人 02专家
        if (TypeId == '01') {
          //个人
          this.BindGv_vgs_PViewpointRela();
        } else {
          //专家
          this.BindGv_vRTExpegs_PViewpointRela();
        }

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

  //分页数据
  /* 函数功能:在数据 列表中跳转到某一页 观点列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
 <param name = "intPageIndex">页序号</param>
*/
  public IndexPageSix(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_vgs_PViewpointRela();
  }

  //////////////////////////////////////////////////////////////////个人观点部分
  //观点查询按钮
  public async btnViewpointQuery_Click() {
    await this.BindGv_vViewpoint();
  }

  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
 */
  public async BindGv_vViewpoint() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName = this.getDivName(enumDivType.LayOut_01);
    // const strListDiv: string = this.mstrListDivViewpoint;
    const strWhereCond = await this.CombinevViewpointCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvViewpointObjLst: Array<clsvViewpointEN> = [];

    const strWhere_User = '1=1';
    const arrvUsersObjLst = await vUsersSim_GetObjLstAsync(strWhere_User);
    try {
      this.recCount = await vViewpoint_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: 30,
        whereCond: strWhereCond,
        orderBy: this.hidSortvViewpointBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvViewpointObjLst = await vViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    try {
      const strPageType = GetInputValueInDivObj(divName, 'hidUserTypeId'); //页面参数
      //strIdCurrEduclsstrhidUserTypeId = $("#hidUserTypeId").val();
      let strTitle = '';
      //判断页面参数
      if (strPageType == '01') {
        strTitle = '个人观点';
      } else if (strPageType == '02') {
        //专家观点
        //$("#ListTitle").html("当前论文相关的专家观点");
        strTitle = '专家观点';
      }
      let strhtml = '';
      //个人观点
      strhtml += '<div class="info" id="infoViewpoint"><div class="title btn-3">';

      strhtml += `<div><a href="javascript:void(0)" title="${strTitle}">${strTitle}</a></div>`;
      //strhtml += '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加' + strTitle + '" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加' + strTitle + '</button></div>';

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
        const objUser = arrvUsersObjLst.find((x) => x.userId == arrvViewpointObjLst[i].updUser);
        if (objUser != null) {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${objUser.userName}`;
        }

        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${arrvViewpointObjLst[i].updDate}`;

        //引用数
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;被引用数:${arrvViewpointObjLst[i].citationCount}`;

        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button title="引用${strTitle}" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkInTab_Click("${arrvViewpointObjLst[i].viewpointId}")> ${clsIcon.faCommentDots}引用该${strTitle}</button>`;

        strhtml += '</li>';

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //拼接；
      $('#divViewpointDataLst').html(strhtml);

      if (arrvViewpointObjLst.length > 10) {
        //$("#divPager1").show();
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
  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombinevViewpointCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    const strPaperId = clsPrivateSessionStorage.topicIdInTree;
    // const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId');
    const strUserId = userStore.getUserId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (GetInputValueInDivObj(divName, 'txtViewpointName_q') != '') {
        strWhereCond += ` And ${clsvViewpointEN.con_ViewpointName} like '%${$(
          '#txtViewpointName_q',
        ).val()}%'`;
      }

      //根据传入的usertypeId 来区分是本人观点还是专家观点
      const strhidUserTypeId = GetInputValueInDivObj(divName, 'hidUserTypeId');
      if (strhidUserTypeId != '') {
        strWhereCond += ` And ${clsvViewpointEN.con_UserTypeId} = '${strhidUserTypeId}'`;
      }

      //只能查询提交的观点数据
      strWhereCond += ` And ${clsvViewpointEN.con_IsSubmit} = 'true'`;

      //排除获取已存在的关系数据 根据当前用户；
      strWhereCond += ` And viewpointId not in (select viewpointId from gs_PViewpointRela where paperId = '${strPaperId}' And updUser = '${strUserId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 显示vViewpoint对象的所有属性值
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   <param name = "divContainer">显示容器</param>
   <param name = "arrViewpointObjLst">需要绑定的对象列表</param>
 */
  public async BindTab_vViewpoint(
    divContainer: HTMLDivElement,
    arrvViewpointObjLst: Array<clsvViewpointEN>,
  ) {
    const strThisFuncName = this.BindTab_vViewpoint.name;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'viewpointName',
        colHeader: '观点名称',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'viewpointContent',
        colHeader: '观点内容',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'viewpointTypeName',
        colHeader: '观点类型名',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      //{
      //    fldName: "userTypeName",
      //    colHeader: "观点角色",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "reason",
      //    colHeader: "理由",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "source",
      //    colHeader: "来源",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "vPProposePeople",
      //    colHeader: "观点提出人",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'updDate',
        colHeader: '编辑日期',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'userName',
        colHeader: '编辑人',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },

      //{
      //    fldName: "",
      //    colHeader: "详情",
      //    text: "详情",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btnDetailInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},
      {
        fldName: '',
        colHeader: '确定',
        text: '确定',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info btn-sm';
          btn1.setAttribute('onclick', `btnOkInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
      //{
      //    fldName: "",
      //    colHeader: "删除",
      //    text: "删除",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btnDelRecordInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},
    ];
    BindTabV2Where_V(
      divContainer,
      arrvViewpointObjLst,
      arrDataColumn,
      'viewpointId',
      'TopicViewpoint',
    );
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    //BindTab(o, arrvViewpointObjLst, arrDataColumn, "viewpointId");
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
  }

  //添加观点 展示观点列表数据
  public async btnAddRela_Click() {
    await this.BindGv_vViewpoint();
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
    const strThisFuncName = this.AddNewRecordSaveViewpointRela.name;
    const strPaperId = GetHidPaperId(divName);
    const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId');

    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'hidPaperLogTypeId'); //流程日志参数
    const objgs_PViewpointRelaEN: clsgs_PViewpointRelaEN = new clsgs_PViewpointRelaEN();
    this.PutDataTogs_PViewpointRelaClass(objgs_PViewpointRelaEN);

    try {
      //同一主题 同一观点 只能添加一次；
      const strWhere = ` 1 = 1 And paperId = '${strPaperId}' And viewpointId = '${strViewpointId}'`;
      //const strWhere = " 1 = 1 And paperId = '" + strPaperId + "' And viewpointId = '" + strViewpointId + "'";
      const bolIsExist = await gs_PViewpointRela_IsExistRecordAsync(strWhere);

      if (bolIsExist == true) {
        const strMsg = `同一主题不能重复添加同一个观点！`;
        alert(strMsg);
        return bolIsExist; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await gs_PViewpointRela_AddNewRecordAsync(objgs_PViewpointRelaEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加成功!`;

        //查询 论文、日志类型是否存在；
        const strWhereLog = ` 1 = 1 And paperId = '${strPaperId}' And logTypeId = '${strPaperLogTypeId}'`;
        const bolIsExist = await gs_OriginalPaperLog_IsExistRecordAsync(strWhereLog);

        if (bolIsExist == true) {
          return bolIsExist; //一定要有一个返回值，否则会出错！
        } else {
          //添加论文日志；
          await this.Addgs_OriginalPaperLogSave();
        }

        //根据ID获取最大数；
        const strWhereCond2 = ` 1 =1 and viewpointId=${strViewpointId}`;
        const intCitationCount = await gs_PViewpointRela_GetRecCountByCondAsync(strWhereCond2);

        const objViewpointEN: clsViewpointEN = new clsViewpointEN();
        objViewpointEN.SetViewpointId(strViewpointId);
        objViewpointEN.SetCitationCount(intCitationCount);

        objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        await Viewpoint_UpdateRecordAsync(objViewpointEN).then((jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == true) {
            this.BindGv_vgs_PViewpointRela();
          } else {
            const strInfo = `添加不成功!`;
            alert(strInfo);
            console.log('添加不成功');
          }
        });

        HideDialogTwo();
        //显示信息框
        alert(strInfo);
        //绑定专家关系列表；
        RefreshWindow();
        //this.BindGv_vRTExpegs_PViewpointRela();
        //主题Id
        // window.location.href = "../GraduateEdu/ResearchTopicAdd?TopicRelaId" + strPaperId;
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
    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'hidPaperLogTypeId'); //流程日志参数
    //通过区分 是小组讨论还是同伴建议
    // const logTypeId = GetInputValueInDivObj(divName, 'hidCommentTypeId');
    pobjgs_OriginalPaperLogEN.SetPaperId(strPaperId);
    pobjgs_OriginalPaperLogEN.SetLogTypeId(strPaperLogTypeId);
    pobjgs_OriginalPaperLogEN.SetLogDescription('添加子观点');
    // $('#PaperLogTypeId').val("03");
    //switch (strPaperLogTypeId) {
    //    case "01":
    //        pobjgs_OriginalPaperLogEN.SetLogDescription( "添加子观点";
    //        break;
    //    case "02":
    //        pobjgs_OriginalPaperLogEN.SetLogDescription( "同伴建议";
    //        break;

    //    default:
    //        const strMsg = `没有数据处理！`;
    //        alert(strMsg);
    //        break;
    //}
    //pobjgs_OriginalPaperLogEN.SetLogDescription( "新建论文";
    pobjgs_OriginalPaperLogEN.SetUpdUser(userStore.getUserId);
    pobjgs_OriginalPaperLogEN.SetUpdDate(clsPubFun4Web.getNowDate());
  }

  /* 函数功能:把界面上的属性数据传到类对象中
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   <param name = "pobjgs_PViewpointRelaEN">数据传输的目的类对象</param>
 */
  public PutDataTogs_PViewpointRelaClass(pobjgs_PViewpointRelaEN: clsgs_PViewpointRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = GetHidPaperId(divName);
    const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId');
    const strUserId = userStore.getUserId;

    pobjgs_PViewpointRelaEN.SetPaperId(strPaperId); // 主题编号
    pobjgs_PViewpointRelaEN.SetSectionId(GetSelectValueInDivObj(divName, 'ddlSectionId1')); // 主题编号
    pobjgs_PViewpointRelaEN.SetViewpointId(strViewpointId); // 观点Id
    pobjgs_PViewpointRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjgs_PViewpointRelaEN.SetUpdUser(strUserId); // 修改用户Id// 修改用户Id
    //pobjgs_PViewpointRelaEN.SetMemo(this.memo;// 备注
  }
  //   /*
  //* 获取当前时间
  //*/
  //   public getNowDate(): string {
  //       const date = new Date();
  //       let strMonth: string | number = date.getMonth() + 1;
  //       let strDate: string | number = date.getDate();

  //       let strHours: string | number = date.getHours();
  //       let strMinutes: string | number = date.getMinutes();
  //       let strSeconds: string | number = date.getSeconds();

  //       if (strMonth <= 9) {
  //           strMonth = "0" + strMonth;
  //       }
  //       if (strDate <= 9) {
  //           strDate = "0" + strDate;
  //       }
  //       if (strHours <= 9) {
  //           strHours = "0" + strHours;
  //       }
  //       if (strMinutes <= 9) {
  //           strMinutes = "0" + strMinutes;
  //       }
  //       if (strSeconds <= 9) {
  //           strSeconds = "0" + strSeconds;
  //       }

  //       return date.getFullYear().toString() + "-" + strMonth + "-" + strDate + " " + strHours + ":" + strMinutes + ":" + strSeconds;
  //   }
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

  /* 函数功能:在数据 列表中跳转到某一页 观点列表
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
  <param name = "intPageIndex">页序号</param>
*/
  public IndexPageOne(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_vViewpoint();
  }

  ////////////////////////////////////////////////////////////////////////////////////////////相关概念

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
<returns>条件串(strWhereCond)</returns>
*/
  public Combinevgs_PConceptRelaCondition(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.topicName_q != "") {
      //    strWhereCond += ` And ${clsvgs_PConceptRelaEN.con_TopicName} like '%${this.topicName_q}%'`;
      //    objvgs_PConceptRela_Cond.SetCondFldValue(clsvgs_PConceptRelaEN.con_TopicName, this.topicName_q, "like");
      //}
      //if (this.conceptName_q != "") {
      //    strWhereCond += ` And ${clsvgs_PConceptRelaEN.con_ConceptName} like '%${this.conceptName_q}%'`;
      //    objvgs_PConceptRela_Cond.SetCondFldValue(clsvgs_PConceptRelaEN.con_ConceptName, this.conceptName_q, "like");
      //}
      //判断主题id
      const strPaperId = GetHidPaperId(divName);
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvgs_PConceptRelaEN.con_PaperId} = '${strPaperId}'`;
      }
      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；

      //判断角色
      //管理员
      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        // $("#btnDelRecord").show();
      } else if (userStore.getRoleId == '00620002') {
        //教师
        // $("#btnDelRecord").show();
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        //      strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + objvUserRoleRelation.userId + "' And isEffective='1') And isEffective='1')";
      } else {
        //学生；
        // $("#btnDelRecord").show();
        //   strWhereCond += ` And ${clsvgs_PConceptRelaEN.con_UpdUser} = '${objvUserRoleRelation.userId}'`;
        //学生00620003
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(Combinegs_PConcepRelaConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vgs_PConceptRela() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // const strListDiv: string = this.mstrListConceptDivPaper;
    const strWhereCond = await this.Combinevgs_PConceptRelaCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvgs_PConceptRelaObjLst: Array<clsvRTViewpointEN> = [];
    try {
      this.recCount = await vgs_PConceptRela_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvgs_PConceptRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvgs_PConceptRelaObjLst = await vRTViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }

    try {
      const strHtml = await Public_Concept.BindList_vgs_PConceptRela(
        '06',
        arrvgs_PConceptRelaObjLst,
      );
      //this.BindList_vgs_PConceptRela(arrvgs_PConceptRelaObjLst);
      //拼接；
      $('#divgs_PConceptRelaDataLst').html(strHtml);

      if (arrvgs_PConceptRelaObjLst.length > 10) {
        $('#divPagerConcept').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }

      //this.BindTab_vgs_PConceptRela(strListDiv, arrvgs_PConceptRelaObjLst);
      console.log('完成BindGv_vgs_PConceptRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 
在数据表里删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
*/
  public async btnDelConceptRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      //const responseText = await this.DelConceptRecord(lngKeyId).then((jsonData) => {
      //    ;
      //});
      const strUserId = userStore.getUserId;
      //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
      await gs_PConcepRela_GetObjBymIdAsync(lngKeyId).then((jsonData) => {
        const objRtConceptEN: clsgs_PConcepRelaEN = <clsgs_PConcepRelaEN>jsonData;
        if (objRtConceptEN != null) {
          if (objRtConceptEN.updUser == strUserId) {
            //
            this.DelConceptRecord(lngKeyId);
          } else {
            //成员
            const strMsg = `您只能删除自己添加的数据！`;
            alert(strMsg);
            return;
          }
        }
      });

      //const responseText = await this.DelConceptRecord(lngKeyId);
      //await this.BindGv_vgs_PConceptRela();
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
  public async DelConceptRecord(lngmId: number): Promise<number> {
    try {
      const returnInt: number = await gs_PConcepRela_DelRecordAsync(lngmId);
      if (returnInt > 0) {
        this.BindGv_vgs_PConceptRela();
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
      return returnInt;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
      return 0;
    }
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvgs_PConceptRelaBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvgs_PConceptRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvgs_PConceptRelaBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvgs_PConceptRelaBy');
  }

  //////////////////////////////////////、、、、、、、、、、、、、、、、、客观事实关系

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public Combinevgs_PTopicObjectiveRelaCondition(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.objectiveName_q != "") {
      //    strWhereCond += ` And ${clsvgs_PTopicObjectiveRelaEN.con_ObjectiveName} like '%${this.objectiveName_q}%'`;
      //}
      //if (this.topicName_q != "") {
      //    strWhereCond += ` And ${clsvgs_PTopicObjectiveRelaEN.con_TopicName} like '%${this.topicName_q}%'`;
      //}

      //判断主题id
      const strPaperId = GetHidPaperId(divName);
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvgs_PTopicObjectiveRelaEN.con_PaperId} = '${strPaperId}'`;
      }

      //查询客观事实
      strWhereCond += ` And ${clsvgs_PTopicObjectiveRelaEN.con_ObjectiveType} = '01'`;

      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；

      //判断角色
      //管理员
      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        // $("#btnDelRecord").show();
      } else if (userStore.getRoleId == '00620002') {
        //教师
        // $("#btnDelRecord").show();
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        //    strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + objvUserRoleRelation.userId + "' And isEffective='1') And isEffective='1')";
      } else {
        //学生；
        // $("#btnDelRecord").show();
        // strWhereCond += ` And ${clsvgs_PTopicObjectiveRelaEN.con_UpdUser} = '${objvUserRoleRelation.userId}'`;
        //学生00620003
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combinegs_PTopicObjectiveRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vgs_PTopicObjectiveRela() {
    // const strListDiv: string = this.mstrListTopicObjectiveDivPaper;
    const strWhereCond = await this.Combinevgs_PTopicObjectiveRelaCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvgs_PTopicObjectiveRelaObjLst: Array<clsvRTViewpointEN> = [];
    try {
      this.recCount = await vgs_PTopicObjectiveRela_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvgs_PTopicObjectiveRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvgs_PTopicObjectiveRelaObjLst = await vRTViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvgs_PTopicObjectiveRelaObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindList_vgs_PTopicObjectiveRela('01', arrvgs_PTopicObjectiveRelaObjLst);
      console.log('完成BindGv_vgs_PTopicObjectiveRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  public async BindList_vgs_PTopicObjectiveRela(
    strType: string,
    arrvgs_PTopicObjectiveRelaObjLst: Array<clsvRTViewpointEN>,
  ) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    $('#hidPageType').val(strType);
    const strPageType = strType; //页面参数
    const strHtml = await Public_TopicObjective.BindList_vgs_PTopicObjectiveRela(
      '06',
      strPageType,
      arrvgs_PTopicObjectiveRelaObjLst,
    );

    if (strPageType == '01') {
      $('#divRtTopicObjectiveDataLst').html(strHtml);

      if (arrvgs_PTopicObjectiveRelaObjLst.length > 10) {
        $('#divPagerObjective').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } else if (strPageType == '02') {
      $('#divBasisRtTopicObjectiveDataLst').html(strHtml);

      if (arrvgs_PTopicObjectiveRelaObjLst.length > 10) {
        $('#divPagerBasis').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    }
    //拼接；
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvgs_PTopicObjectiveRelaBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvgs_PTopicObjectiveRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvgs_PTopicObjectiveRelaBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvgs_PTopicObjectiveRelaBy');
  }

  /* 
在数据表里删除记录 删除客观事实
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
*/
  public async btnDelObjectiveRecordInTab_Click(strKeyId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      //const lngKeyId = Number(strKeyId);
      //const responseText = await this.DelConceptRecord(lngKeyId).then((jsonData) => {
      //    ;
      //});
      const lngKeyId = Number(strKeyId);
      const strUserId = userStore.getUserId;
      //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
      await gs_PTopicObjectiveRela_GetObjBymIdAsync(lngKeyId).then((jsonData) => {
        const objRTTopicObjectiveEN: clsgs_PTopicObjectiveRelaEN = <clsgs_PTopicObjectiveRelaEN>(
          jsonData
        );
        if (objRTTopicObjectiveEN != null) {
          if (objRTTopicObjectiveEN.updUser == strUserId) {
            //01 客观事实

            if (GetInputValueInDivObj(divName, 'hidPageType') == '01') {
              this.DelObjectiveRecord(lngKeyId, '01');
            } else if (GetInputValueInDivObj(divName, 'hidPageType') == '02') {
              this.DelObjectiveRecord(lngKeyId, '02');
            }
            // const responseText2 = await this.BindGv_vRTPaperRela();
          } else {
            //成员
            const strMsg = `您只能删除自己添加的数据！`;
            alert(strMsg);
            return;
          }
        }
      });

      ////删除客观事实
      //const responseText = await this.DelObjectiveRecord(lngKeyId);

      //await this.BindGv_vgs_PTopicObjectiveRela();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //删除客观依据
  public async btnDelBasisObjectiveRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      //const lngKeyId = Number(strKeyId);
      //const responseText = await this.DelConceptRecord(lngKeyId).then((jsonData) => {
      //    ;
      //});
      const lngKeyId = Number(strKeyId);
      const strUserId = userStore.getUserId;
      //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
      await gs_PTopicObjectiveRela_GetObjBymIdAsync(lngKeyId).then((jsonData) => {
        const objRTTopicObjectiveBasisEN: clsgs_PTopicObjectiveRelaEN = <
          clsgs_PTopicObjectiveRelaEN
        >jsonData;
        if (objRTTopicObjectiveBasisEN != null) {
          if (objRTTopicObjectiveBasisEN.updUser == strUserId) {
            //01 客观依据
            this.DelObjectiveRecord(lngKeyId, '02');
            // const responseText2 = await this.BindGv_vRTPaperRela();
          } else {
            //成员
            const strMsg = `您只能删除自己添加的数据！`;
            alert(strMsg);
            return;
          }
        }
      });

      ////删除客观依据
      //const responseText = await this.DelObjectiveRecord(lngKeyId);

      //const responseBindGv = await this.BasisBindGv_vgs_PTopicObjectiveRela();
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
  public async DelObjectiveRecord(lngmId: number, TypeId: string) {
    try {
      const responseText = await gs_PTopicObjectiveRela_DelRecordAsync(lngmId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        if (TypeId == '01') {
          //客观事实
          this.BindGv_vgs_PTopicObjectiveRela();
        } else {
          //客观依据
          this.BasisBindGv_vgs_PTopicObjectiveRela();
        }
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

  /////////////////////////////////////////////////////客观数据关系///////////////////////////////////////////////////

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public BasisCombinevgs_PTopicObjectiveRelaCondition(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.objectiveName_q != "") {
      //    strWhereCond += ` And ${clsvgs_PTopicObjectiveRelaEN.con_ObjectiveName} like '%${this.objectiveName_q}%'`;
      //}
      //if (this.topicName_q != "") {
      //    strWhereCond += ` And ${clsvgs_PTopicObjectiveRelaEN.con_TopicName} like '%${this.topicName_q}%'`;
      //}

      //判断主题id
      const strPaperId = GetHidPaperId(divName);
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvgs_PTopicObjectiveRelaEN.con_PaperId} = '${strPaperId}'`;
      }
      //查询客观依据
      strWhereCond += ` And ${clsvgs_PTopicObjectiveRelaEN.con_ObjectiveType} = '02'`;
      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；

      //判断角色
      //管理员
      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        // $("#btnDelRecord").show();
      } else if (userStore.getRoleId == '00620002') {
        //教师
        // $("#btnDelRecord").show();
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        //     strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + objvUserRoleRelation.userId + "' And isEffective='1') And isEffective='1')";
      } else {
        //学生；
        // $("#btnDelRecord").show();
        //      strWhereCond += ` And ${clsvgs_PTopicObjectiveRelaEN.con_UpdUser} = '${objvUserRoleRelation.userId}'`;
        //学生00620003
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combinegs_PTopicObjectiveRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /*  客观依据
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BasisBindGv_vgs_PTopicObjectiveRela() {
    // const strListDiv: string = this.mstrListBasisTopicObjectiveDivPaper;
    const strWhereCond = this.BasisCombinevgs_PTopicObjectiveRelaCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvgs_PTopicObjectiveRelaObjLst: Array<clsvRTViewpointEN> = [];
    try {
      this.recCount = await vgs_PTopicObjectiveRela_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvgs_PTopicObjectiveRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvgs_PTopicObjectiveRelaObjLst = await vRTViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvgs_PTopicObjectiveRelaObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindList_vgs_PTopicObjectiveRela('02', arrvgs_PTopicObjectiveRelaObjLst);
      console.log('完成BindGv_vgs_PTopicObjectiveRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //////////////////////用户列表条件
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
  public set hidSortvgs_PViewpointRelaBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvgs_PViewpointRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvgs_PViewpointRelaBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvgs_PViewpointRelaBy');
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

  //public get CurrPagePaper(): number {
  //    return $("#hidCurrPagePaper").val();
  //}
  //public set CurrPagePaper(value: number) {
  //    $("#hidCurrPagePaper").val(value);
  //}

  /*
   * 获取当前页序号-------观点
   */
  public get CurrPageIndexViewpoint(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndexViewpoint');
  }
  /*
   * 设置当前页序号-------观点
   */
  public set CurrPageIndexViewpoint(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndexViewpoint', value);
  }

  ///////////////////---------------------------------------------------------所有数据列表排序功能

  /* 观点 个人 专家
   */
  public async SortByViewpoint(strSortByFld: string) {
    if (this.hidSortvViewpointBy.indexOf(strSortByFld) >= 0) {
      if (this.hidSortvViewpointBy.indexOf('Asc') >= 0) {
        this.hidSortvViewpointBy = `${strSortByFld} Desc`;
      } else {
        this.hidSortvViewpointBy = `${strSortByFld} Asc`;
      }
    } else {
      this.hidSortvViewpointBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_vViewpoint();
  }

  /*主题个人观点关系
   */
  public async SortByRTViewpoint(strSortByFld: string) {
    if (this.hidSortvgs_PViewpointRelaBy.indexOf(strSortByFld) >= 0) {
      if (this.hidSortvgs_PViewpointRelaBy.indexOf('Asc') >= 0) {
        this.hidSortvgs_PViewpointRelaBy = `${strSortByFld} Desc`;
      } else {
        this.hidSortvgs_PViewpointRelaBy = `${strSortByFld} Asc`;
      }
    } else {
      this.hidSortvgs_PViewpointRelaBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_vgs_PViewpointRela();
  }

  /*主题专家关系
   */
  public async SortByRTExpertViewpoint(strSortByFld: string) {
    if (this.hidSortvgs_PViewpointRelaBy.indexOf(strSortByFld) >= 0) {
      if (this.hidSortvgs_PViewpointRelaBy.indexOf('Asc') >= 0) {
        this.hidSortvgs_PViewpointRelaBy = `${strSortByFld} Desc`;
      } else {
        this.hidSortvgs_PViewpointRelaBy = `${strSortByFld} Asc`;
      }
    } else {
      this.hidSortvgs_PViewpointRelaBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_vRTExpegs_PViewpointRela();
  }

  /*主题概念关系
   */
  public async SortByRTConcept(strSortByFld: string) {
    if (this.hidSortvgs_PConceptRelaBy.indexOf(strSortByFld) >= 0) {
      if (this.hidSortvgs_PConceptRelaBy.indexOf('Asc') >= 0) {
        this.hidSortvgs_PConceptRelaBy = `${strSortByFld} Desc`;
      } else {
        this.hidSortvgs_PConceptRelaBy = `${strSortByFld} Asc`;
      }
    } else {
      this.hidSortvgs_PConceptRelaBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_vgs_PConceptRela();
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvUsersBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvUsersBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvUsersBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvUsersBy');
  }

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

  //--------------------------------------------------------------------------tab页切换事件

  //个人观点
  public async liViewpointClick() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      //strNum = "3";
      //$("#hidTabNum").val(strNum);
      const strPaperId = GetHidPaperId(divName);
      await Section_BindDdl_SectionIdByPaperIdInDivCache(
        this.divLayout,
        'ddlSectionId1',
        strPaperId,
      );
      await this.BindGv_vgs_PViewpointRela();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取个人观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //专家观点
  public async liExpertViewpointClick() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      //strNum = "4";
      //$("#hidTabNum").val(strNum);
      const strPaperId = GetHidPaperId(divName);
      await Section_BindDdl_SectionIdByPaperIdInDivCache(
        this.divLayout,
        'ddlSectionId1',
        strPaperId,
      );
      await this.BindGv_vRTExpegs_PViewpointRela();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取专家观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //相关概念
  public async liConceptClick() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      //strNum = "5";
      //$("#hidTabNum").val(strNum);
      const strPaperId = GetHidPaperId(divName);
      await Section_BindDdl_SectionIdByPaperIdInDivCache(
        this.divLayout,
        'ddlSectionId2',
        strPaperId,
      );
      await this.BindGv_vgs_PConceptRela();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取相关概念列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //客观事实
  public async liObjectiveFactClick() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      //strNum = "6";
      //$("#hidTabNum").val(strNum);
      const strPaperId = GetHidPaperId(divName);
      await Section_BindDdl_SectionIdByPaperIdInDivCache(
        this.divLayout,
        'ddlSectionId3',
        strPaperId,
      );
      await this.BindGv_vgs_PTopicObjectiveRela();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取客观事实列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //客观数据
  public async liObjectiveBasisClick() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      //strNum = "7";
      //$("#hidTabNum").val(strNum);
      const strPaperId = GetHidPaperId(divName);
      await Section_BindDdl_SectionIdByPaperIdInDivCache(
        this.divLayout,
        'ddlSectionId3',
        strPaperId,
      );
      await this.BasisBindGv_vgs_PTopicObjectiveRela();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取客观依据列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //技能；
  public async liSysskillClick() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      //strNum = "7";
      //$("#hidTabNum").val(strNum);
      const strPaperId = GetHidPaperId(divName);
      await Section_BindDdl_SectionIdByPaperIdInDivCache(
        this.divLayout,
        'ddlSectionId4',
        strPaperId,
      );
      await this.BindGv_vgs_PSkillRela();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取客观依据列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //社会关系；
  public async liSysSocialRelationsClick() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      //strNum = "7";
      //$("#hidTabNum").val(strNum);
      const strPaperId = GetHidPaperId(divName);
      await Section_BindDdl_SectionIdByPaperIdInDivCache(
        this.divLayout,
        'ddlSectionId5',
        strPaperId,
      );
      await this.BindGv_vgs_PSocialRela();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取客观依据列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //--------------------------------=================================================================--技能
  /* 函数功能:在数据 列表中跳转到某一页
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
 <param name = "intPageIndex">页序号</param>
*/
  public IndexPageTen(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_vgs_PSkillRela();
  }
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
 <returns>条件串(strWhereCond)</returns>
*/
  public Combinevgs_PSkillRelaCondition(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.skillName_q != "") {
      //    strWhereCond += ` And ${clsvgs_PSkillRelaEN.con_SkillName} like '%${this.skillName_q}%'`;
      //}
      //if (this.operationTypeId_q != "" && this.operationTypeId_q != "0") {
      //    strWhereCond += ` And ${clsvgs_PSkillRelaEN.con_OperationTypeId} = '${this.operationTypeId_q}'`;
      //}
      //判断主题id
      const strPaperId = GetHidPaperId(divName);
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvgs_PSkillRelaEN.con_PaperId} = '${strPaperId}'`;
      }

      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combinegs_PSkillRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vgs_PSkillRela() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // const strListDiv: string = this.mstrListSysskillDivPaper; //显示div
    const strWhereCond = await this.Combinevgs_PSkillRelaCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvgs_PSkillRelaObjLst: Array<clsvRTViewpointEN> = [];

    try {
      this.recCount = await vgs_PSkillRela_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvgs_PSkillRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvgs_PSkillRelaObjLst = await vRTViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvgs_PSkillRelaObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
    //    alert(strMsg);
    //    return;
    //}
    try {
      const strHtml = await Public_SysSkill.BindList_vgs_PSkillRela('06', arrvgs_PSkillRelaObjLst);
      //拼接；
      $('#divSysskillDataLst').html(strHtml);

      if (arrvgs_PSkillRelaObjLst.length > 10) {
        $('#divPagerSysskill').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
      //this.BindTab_vgs_PSkillRela(arrvgs_PSkillRelaObjLst, arrvUsersObjLst);
      console.log('完成BindGv_vgs_PSkillRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  /* 显示vgs_PSkillRela对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
 <param name = "divContainer">显示容器</param>
 <param name = "arrgs_PSkillRelaObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_vgs_PSkillRela(
    arrvgs_PSkillRelaObjLst: Array<clsvgs_PSkillRelaEN>,
    arrvUsersObjLst: Array<clsvUsersSimEN>,
  ) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    let strhtml = '';
    const strUserId = userStore.getUserId;
    strhtml += '<div class="info" id="infoSysskill"><div class="title btn-4">';

    strhtml +=
      '<div style="float:left;"><a href="javascript:void(0)" title="相关技能">相关技能</a></div>';

    strhtml += '</div><ul class="artlist">';
    let v = 0; //给内容加个序号
    for (let i = 0; i < arrvgs_PSkillRelaObjLst.length; i++) {
      //得到viewpointId；
      // const strConceptId = arrvgs_PSkillRelaObjLst[i].skillId;
      v++;
      strhtml += `<li><span class="rowtit color4">${v}.[技能名称]：</span><span class="abstract-text">${arrvgs_PSkillRelaObjLst[i].skillName}</span></li>`;
      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[实施过程]：</span><span class="abstract-text">${arrvgs_PSkillRelaObjLst[i].process}</span></li>`;

      //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：';

      //if (arrvgs_PSkillRelaObjLst[i].appraiseCount != 0) {
      //    //评论
      //    strhtml += '&nbsp;&nbsp;评论数：' + arrvgs_PSkillRelaObjLst[i].appraiseCount;
      //}
      //if (arrvgs_PSkillRelaObjLst[i].score != 0) {
      //    //评分
      //    strhtml += '&nbsp;&nbsp;综合评分：' + arrvgs_PSkillRelaObjLst[i].score;
      //}
      //if (arrvgs_PSkillRelaObjLst[i].teaScore != 0) {
      //    strhtml += '&nbsp;&nbsp;教师评分：' + arrvgs_PSkillRelaObjLst[i].teaScore;
      //}
      //if (arrvgs_PSkillRelaObjLst[i].stuScore != 0) {
      //    strhtml += '&nbsp;&nbsp;学生评分：' + arrvgs_PSkillRelaObjLst[i].stuScore;
      //}

      ////引用数
      //strhtml += '&nbsp;&nbsp;被引用数：' + arrvgs_PSkillRelaObjLst[i].citationCount;
      //if (arrvgs_PSkillRelaObjLst[i].versionCount != 0) {
      //    strhtml += '&nbsp;&nbsp;&nbsp;历史版本数：' + arrvgs_PSkillRelaObjLst[i].versionCount;
      //}
      ////通过用户ID得到用户名；

      ////strhtml += '&nbsp;&nbsp;编辑用户：' + arrvgs_PSkillRelaObjLst[i].userName;
      //strhtml += '&nbsp;&nbsp;编辑时间：' + arrvgs_PSkillRelaObjLst[i].updDate + '</span>';

      strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[统计]：';
      if (arrvgs_PSkillRelaObjLst[i].okCount != 0) {
        strhtml += `点赞数：${arrvgs_PSkillRelaObjLst[i].okCount}&nbsp;&nbsp`;
      }
      if (arrvgs_PSkillRelaObjLst[i].appraiseCount != 0) {
        //评论
        strhtml += `&nbsp;&nbsp;评论数：${arrvgs_PSkillRelaObjLst[i].appraiseCount}`;
      }
      if (arrvgs_PSkillRelaObjLst[i].score != 0) {
        //评分
        strhtml += `&nbsp;&nbsp;综合评分：${arrvgs_PSkillRelaObjLst[i].score}`;
      }
      if (arrvgs_PSkillRelaObjLst[i].teaScore != 0) {
        strhtml += `&nbsp;&nbsp;教师评分：${arrvgs_PSkillRelaObjLst[i].teaScore}`;
      }
      if (arrvgs_PSkillRelaObjLst[i].stuScore != 0) {
        strhtml += `&nbsp;&nbsp;学生评分：${arrvgs_PSkillRelaObjLst[i].stuScore}`;
      }
      //引用数
      strhtml += `&nbsp;&nbsp;&nbsp;被引用数：${arrvgs_PSkillRelaObjLst[i].citationCount}`;

      if (arrvgs_PSkillRelaObjLst[i].versionCount != 0) {
        strhtml += `&nbsp;&nbsp;&nbsp;历史版本数：${arrvgs_PSkillRelaObjLst[i].versionCount}`;
      }
      if (arrvgs_PSkillRelaObjLst[i].isSubmit == true) {
        strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已提交</span>';
      } else {
        strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">未提交</span>';
      }

      strhtml += '</li>';
      strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：';

      //获取引用人；编辑人、用户名称

      let arrvUsers: Array<clsvUsersSimEN> = [];
      let UpdUserName; //编辑人
      let CacitionUserName; //引用人
      //获取技能引用人；
      arrvUsers = arrvUsersObjLst.filter((x) => x.userId == arrvgs_PSkillRelaObjLst[i].updUser); //技能引用人
      for (let j = 0; j < arrvUsers.length; j++) {
        CacitionUserName = arrvUsers[j].userName;
        break;
      }
      //获取技能编辑人；
      arrvUsers = arrvUsersObjLst.filter((x) => x.userId == arrvgs_PSkillRelaObjLst[i].skillUserId); //技能编辑人
      for (let j = 0; j < arrvUsers.length; j++) {
        UpdUserName = arrvUsers[j].userName;
        break;
      }

      //for (let j = 0; j < arrUsers.length; j++) {
      //    strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[用户]：</span><span class="abstract-text">' + arrUsers[j].userName + '</span>';
      //    break;
      //}

      if (arrvgs_PSkillRelaObjLst[i].skillUserId == arrvgs_PSkillRelaObjLst[i].updUser) {
        strhtml += `&nbsp;&nbsp;&nbsp;编辑引用人：${UpdUserName}`;
      } else {
        strhtml += `&nbsp;&nbsp;&nbsp;编辑&nbsp;/&nbsp;引用人：${UpdUserName}&nbsp;/&nbsp;${CacitionUserName}`;
      }
      if (arrvgs_PSkillRelaObjLst[i].skillDate == arrvgs_PSkillRelaObjLst[i].updDate) {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;编辑引用时间：${arrvgs_PSkillRelaObjLst[i].skillDate}`;
      } else {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;编辑&nbsp;/&nbsp;引用时间：${arrvgs_PSkillRelaObjLst[i].skillDate}&nbsp;/&nbsp;${arrvgs_PSkillRelaObjLst[i].updDate}`;
      }

      if (strUserId == arrvgs_PSkillRelaObjLst[i].updUser) {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="移除引用" class="layui-btn-danger layui-btn layui-btn-xs" onclick="btnDelSysskillRecordInTab_Click(${arrvgs_PSkillRelaObjLst[i].mId})" > <i class="layui-icon" >&#xe640;</i>移除</button>`;
      }
      if (arrvgs_PSkillRelaObjLst[i].isSubmit != true) {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="修改" class="layui-btn layui-btn layui-btn-xs" onclick=btnUpdSysskill_Click("${arrvgs_PSkillRelaObjLst[i].skillId}") > ${clsIcon.faCommentDots}修改</button>`;
      }

      //strhtml += '&nbsp;&nbsp;&nbsp;<button style="float:right;" title="移除相关引用" class="layui-btn-danger layui-btn layui-btn-xs" onclick="btnDelSysskillRecordInTab_Click(' + arrvgs_PSkillRelaObjLst[i].mId + ')" > <i class="layui-icon" >&#xe640;</i>移除相关引用</button>';

      if (
        arrvgs_PSkillRelaObjLst[i].versionCount > 0 &&
        arrvgs_PSkillRelaObjLst[i].versionCount != null
      ) {
        strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs" onclick="xadmin.open('相关技能历史版本', '../GradEduEx/HistoricalVersion?Key=${arrvgs_PSkillRelaObjLst[i].skillId}&Type=06')"> ${clsIcon.faCommentDots}历史版本</button >`;
      }
      strhtml += '</li>';

      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
    }
    strhtml += '</ul></div>';

    //拼接；
    $('#divSysskillDataLst').html(strhtml);

    if (arrvgs_PSkillRelaObjLst.length > 10) {
      $('#divPagerSysskill').show();
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
    }
  }

  /* 
在数据表里删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
*/
  public async btnDelSysskillRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      await this.Delgs_PSkillRelaRecord(lngKeyId);
      await this.BindGv_vgs_PSkillRela();
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
  public async Delgs_PSkillRelaRecord(lngmId: number) {
    try {
      const responseText = await gs_PSkillRela_DelRecordAsync(lngmId);
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
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvgs_PSkillRelaBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvgs_PSkillRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvgs_PSkillRelaBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvgs_PSkillRelaBy');
  }

  //--------------------------------=================================================================--社会关系
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
 <returns>条件串(strWhereCond)</returns>
*/
  public Combinevgs_PSocialRelaCondition(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.skillName_q != "") {
      //    strWhereCond += ` And ${clsvgs_PSkillRelaEN.con_SkillName} like '%${this.skillName_q}%'`;
      //}
      //if (this.operationTypeId_q != "" && this.operationTypeId_q != "0") {
      //    strWhereCond += ` And ${clsvgs_PSkillRelaEN.con_OperationTypeId} = '${this.operationTypeId_q}'`;
      //}
      //判断主题id
      const strPaperId = GetHidPaperId(divName);
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvgs_PSocialRelaEN.con_PaperId} = '${strPaperId}'`;
      }

      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combinegs_PSocialRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vgs_PSocialRela() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // const strListDiv: string = this.mstrListSysSocialRelaDivPaper;
    const strWhereCond = await this.Combinevgs_PSocialRelaCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvgs_PSocialRelaObjLst: Array<clsvRTViewpointEN> = [];

    try {
      this.recCount = await vgs_PSocialRela_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvgs_PSocialRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvgs_PSocialRelaObjLst = await vRTViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvgs_PSocialRelaObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
    //    alert(strMsg);
    //    return;
    //}
    try {
      const strHtml = await Public_SysSocialRelations.BindList_vgs_PSocialRela(
        '06',
        arrvgs_PSocialRelaObjLst,
      );
      //拼接；divSysSocialRelaDataLst
      $('#divSysSocialRelaDataLst').html(strHtml);

      if (arrvgs_PSocialRelaObjLst.length > 10) {
        // $("#divSysSocialRelationsDataLst").show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
      //this.BindTab_vgs_PSocialRela(arrvgs_PSocialRelaObjLst, arrvUsersObjLst);
      console.log('完成BindGv_vgs_PSocialRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:在数据 列表中跳转到某一页
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
<param name = "intPageIndex">页序号</param>
*/
  public IndexPageEleven(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_vgs_PSocialRela();
  }

  /* 
在数据表里删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
*/
  public async btnDelgs_PSocialRelaRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      await this.Delgs_PSocialRelaRecord(lngKeyId);
      await this.BindGv_vgs_PSocialRela();
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
  public async Delgs_PSocialRelaRecord(lngmId: number) {
    try {
      const responseText = await gs_PSocialRela_DelRecordAsync(lngmId);
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
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvgs_PSocialRelaBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvgs_PSocialRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvgs_PSocialRelaBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvgs_PSocialRelaBy');
  }

  /* 函数功能:在数据 列表中跳转到某一页
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
    <param name = "intPageIndex">页序号</param>
  */
  public async IndexPage(intPageIndex: number) {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    // const strnum = GetInputValueInDivObj(divName, 'hidTabNum');
    //11代表研究计划 否则就是主题；
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvgs_ResearchPlanBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvgs_ResearchPlanBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvgs_ResearchPlanBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvgs_ResearchPlanBy');
  }

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
}
