import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { Public_Concept } from '../GradEduPublicPage/Public_Concept';
import { Public_SysSkill } from '../GradEduPublicPage/Public_SysSkill';
import { Public_SysSocialRelations } from '../GradEduPublicPage/Public_SysSocialRelations';
import { Public_TopicObjective } from '../GradEduPublicPage/Public_TopicObjective';
import { Public_Viewpoint } from '../GradEduPublicPage/Public_Viewpoint';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { ResearchTopicCRUD } from '@/viewsBase/GradEduTopic/ResearchTopicCRUD';
import { clsgs_TotalDataRelaEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataRelaEN';
import { clsvgs_TotalDataStatisticsEN } from '@/ts/L0Entity/GradEduTools/clsvgs_TotalDataStatisticsEN';

import { clsvConceptEN } from '@/ts/L0Entity/GradEduTopic/clsvConceptEN';
import { clsvSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSkillEN';
import { clsvTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN';
import { clsvViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvViewpointEN';

import {
  gs_TotalDataRela_AddNewRecordAsync,
  gs_TotalDataRela_DelRecordAsync,
  gs_TotalDataRela_GetFirstObjAsync,
  gs_TotalDataRela_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataRelaWApi';
import { gs_TotalDataStatistics_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataStatisticsWApi';
import { vgs_TotalDataStatistics_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsvgs_TotalDataStatisticsWApi';
import { vConcept_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvConceptWApi';
import { vSysSkill_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvSysSkillWApi';
import { vSysSocialRelations_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvSysSocialRelationsWApi';
import { vTopicObjective_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvTopicObjectiveWApi';
import {
  vViewpoint_GetObjLstAsync,
  vViewpoint_GetObjLstByPagerAsync,
  vViewpoint_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvViewpointWApi';
import { GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { gs_TdRelaType_BindDdl_TDRelaTypeIdInDivCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_TdRelaTypeWApi';
import { clsvSysSocialRelationsENEx } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsENEx';
import { vSysSocialRelationsEx_CopyToEx } from '@/ts/L3ForWApiEx/GradEduTopic/clsvSysSocialRelationsExWApi';
import { enumgs_TotalDataType } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataTypeEN';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import {
  vPaperSubViewpoint_GetObjLstAsync,
  vPaperSubViewpoint_GetObjLstByPagerAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { clsvPaperSubViewpointENEx } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointENEx';
import { vPaperSubViewpointEx_CopyToEx } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSubViewpointExWApi';
import { userStore } from '@/store/modulesShare/user';

declare function HideDialogTwo(): void;

declare let window: any;
/* ResearchTopic_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_TotalDataRela extends ResearchTopicCRUD {
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
        //this.hidSortvgs_PViewpointRelaBy = "updDate Desc";

        //主题概念
        //this.hidSortvgs_PConceptRelaBy = "updDate Desc";

        //观点
        this.hidSortvViewpointBy = 'updDate Desc';
        //客观
        //TopicObjectiveCRUD.sortvTopicObjectiveBy = "updDate Desc";

        //默认不 显示分页
        //if (this.recCount == 0) {

        //    $("#divPagerViewpoint").attr("style", "display:none;");
        //    $("#divPagerConcept").attr("style", "display:none;");
        //    $("#divExpertPagerViewpoint").attr("style", "display:none;");
        //    $("#divPagerBasis").attr("style", "display:none;");
        //    $("#divPagerResearchResult").attr("style", "display:none;");

        //}
        //2、显示无条件的表内容在GridView中
        //主题列表因为页面调整问题，注释；
        //await this.BindGv_ResearchTopic();

        //读取session角色 来判断绑定不同数据列表
        //获取用户角色来判断显示不同的列表数据；

        //获取关系表ID
        await this.GetRelaId();

        //绑定传值过来的单条观点
        await this.Showdiv_Viewpoint();

        //绑定选项卡内各个观点
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

  /******************************************绑定各个观点单个对象***************************************/

  //获取关系表ID
  public async GetRelaId() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strKeyId = GetInputValueInDivObj(divName, 'hidKeyId');
    const strTypeId = GetInputValueInDivObj(divName, 'hidTypeId');
    const strWhereCond = `1=1 and tableKey='${strKeyId}' and totalDataTypeId ='${strTypeId}'`;

    try {
      const objgs_TotalDataStatistics = await gs_TotalDataStatistics_GetFirstObjAsync(strWhereCond);
      if (objgs_TotalDataStatistics != null) {
        $('#hidmId').val(objgs_TotalDataStatistics.totalDataId);
      }
      //strIdCurrEduclsstrTotalDataId = await gs_TotalDataStatistics_GetFirstIDAsync(strWhereCond);
      //if (strTotalDataId != "") {
      //    $("#hidmId").val(strTotalDataId);
      //}
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根据条件获取相应的记录对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  //观点
  public async Showdiv_Viewpoint() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strTypeId = GetInputValueInDivObj(divName, 'hidTypeId');
    switch (strTypeId) {
      case enumgs_TotalDataType.Viewpoint_04:
        await this.Bind_vViewpoint();
        break;
      case enumgs_TotalDataType.Viewpoint_05:
        await this.Bind_vViewpoint();
        break;
      case enumgs_TotalDataType.Concept_06:
        await this.Bind_vConcept();
        break;
      case enumgs_TotalDataType.TopicObjective_07:
        await this.Bind_vTopicObjective();
        break;
      case enumgs_TotalDataType.TopicObjective_08:
        await this.Bind_vTopicObjective();
        break;
      case enumgs_TotalDataType.SysSkill_09:
        await this.Bind_vSysSkill();
        break;
      case enumgs_TotalDataType.SysSocialRelations_10:
        await this.Bind_vSysSocialRelations();
        break;
      default:
        break;
    }
  }

  //绑定观点数据
  public async Bind_vViewpoint() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strViewpointId = GetInputValueInDivObj(divName, 'hidKeyId');
    const strTypeId = GetInputValueInDivObj(divName, 'hidTypeId');
    let strHtml = '';
    if (strTypeId == '04') {
      strHtml +=
        '<div class="title btn-1"><a href="javascript:void(0)" title="个人观点">个人观点</a></div>';
    } else if (strTypeId == '05') {
      strHtml +=
        '<div class="title btn-1"><a href="javascript:void(0)" title="专家观点">专家观点</a></div>';
    }
    strHtml += await Public_Viewpoint.Bind_vViewpoint(strViewpointId);
    $('#div_Viewpoint').html(strHtml);
  }

  //绑定相关概念
  public async Bind_vConcept() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strConceptId = GetInputValueInDivObj(divName, 'hidKeyId');
    let strHtml =
      '<div class="title btn-1"><a href="javascript:void(0)" title="相关概念">相关概念</a></div>';
    strHtml += await Public_Concept.Bind_vConcept(strConceptId);
    $('#div_Viewpoint').html(strHtml);
  }

  //客观事实、客观数据
  public async Bind_vTopicObjective() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strTopicObjectiveId = GetInputValueInDivObj(divName, 'hidKeyId');
    const strTypeId = GetInputValueInDivObj(divName, 'hidTypeId');
    let strHtml = '';
    if (strTypeId == '07') {
      strHtml +=
        '<div class="title btn-1"><a href="javascript:void(0)" title="客观事实">客观事实</a></div>';
    } else if (strTypeId == '08') {
      strHtml +=
        '<div class="title btn-1"><a href="javascript:void(0)" title="客观数据">客观数据</a></div>';
    }
    strHtml = await Public_TopicObjective.Bind_vTopicObjective(strTopicObjectiveId);
    $('#div_Viewpoint').html(strHtml);
  }

  //技能
  public async Bind_vSysSkill() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strSkillId = GetInputValueInDivObj(divName, 'hidKeyId');
    let strHtml =
      '<div class="title btn-1"><a href="javascript:void(0)" title="技能">技能</a></div>';
    strHtml += await Public_SysSkill.Bind_vSysSkill(strSkillId);
    $('#div_Viewpoint').html(strHtml);
  }

  //社会关系
  public async Bind_vSysSocialRelations() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strSocialId = GetInputValueInDivObj(divName, 'hidKeyId');
    let strHtml =
      '<div class="title btn-1"><a href="javascript:void(0)" title="社会关系">社会关系</a></div>';
    strHtml += await Public_SysSocialRelations.Bind_vSysSocialRelations(strSocialId);
    $('#div_Viewpoint').html(strHtml);
  }

  /***************************绑定各个观点单个对象***************************************/

  //得到7个关系列表数据；
  public async GetAllFunctionMethod() {
    const objDivLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objDivLayOut == null) return;
    await gs_TdRelaType_BindDdl_TDRelaTypeIdInDivCache(objDivLayOut, 'ddlgs_TDRelaType');
    await this.BindGv_gs_TotalDataRela_Viewpoint('01');
    await this.BindGv_gs_TotalDataRela_Viewpoint('02');
    await this.BindGv_vgs_PConceptRela();
    await this.BindGv_vgs_PTopicObjectiveRela('01');
    await this.BindGv_vgs_PTopicObjectiveRela('02');
    await this.BindGv_vgs_PSkillRela();
    await this.BindGv_vgs_PSocialRela();

    //strIdCurrEduclsstrnum = $("#hidTabNum").val();
    //if (strnum == "3") {
    //    //主题个人观点关系；
    //    $("#hidLiTypeId").val("04");
    //    $('#hidUserTypeId').val("01");
    //    const ddl_TDRelaTypeId = await gs_TDRelaType_BindDdl_TDRelaTypeId_Cache("ddlgs_TDRelaType1", new clsgs_TDRelaTypeEN);
    //    this.BindGv_gs_TotalDataRela_Viewpoint("01");
    //}
    //else if (strnum == "4") {
    //    //专家观点
    //    $("#hidLiTypeId").val("05");
    //    $('#hidUserTypeId').val("02");
    //    const ddl_TDRelaTypeId = await gs_TDRelaType_BindDdl_TDRelaTypeId_Cache("ddlgs_TDRelaType1", new clsgs_TDRelaTypeEN);
    //    this.BindGv_gs_TotalDataRela_Viewpoint("02");
    //    //this.BindGv_vRTExpegs_PViewpointRela();
    //}
    //else if (strnum == "5") {
    //    //主题概念关系
    //    $("#hidLiTypeId").val("06");
    //    const ddl_TDRelaTypeId = await gs_TDRelaType_BindDdl_TDRelaTypeId_Cache("ddlgs_TDRelaType2", new clsgs_TDRelaTypeEN);
    //    this.BindGv_vgs_PConceptRela();
    //}
    //else if (strnum == "6") {
    //    //客观事实关系
    //    $("#hidLiTypeId").val("07");
    //    $('#hidUserTypeId').val("01");
    //    const ddl_TDRelaTypeId = await gs_TDRelaType_BindDdl_TDRelaTypeId_Cache("ddlgs_TDRelaType3", new clsgs_TDRelaTypeEN);
    //    this.BindGv_vgs_PTopicObjectiveRela("01");
    //}
    //else if (strnum == "7") {
    //    //客观依据关系
    //    $("#hidLiTypeId").val("08");
    //    $('#hidUserTypeId').val("02");
    //    const ddl_TDRelaTypeId = await gs_TDRelaType_BindDdl_TDRelaTypeId_Cache("ddlgs_TDRelaType3", new clsgs_TDRelaTypeEN);
    //    this.BindGv_vgs_PTopicObjectiveRela("02");
    //}
    //else if (strnum == "9") {
    //    //技能
    //    $("#hidLiTypeId").val("09");
    //    const ddl_TDRelaTypeId = await gs_TDRelaType_BindDdl_TDRelaTypeId_Cache("ddlgs_TDRelaType4", new clsgs_TDRelaTypeEN);
    //    this.BindGv_vgs_PSkillRela();
    //}
    //else if (strnum == "10") {
    //    //社会关系
    //    $("#hidLiTypeId").val("10");
    //    const ddl_TDRelaTypeId = await gs_TDRelaType_BindDdl_TDRelaTypeId_Cache("ddlgs_TDRelaType5", new clsgs_TDRelaTypeEN);
    //    this.BindGv_vgs_PSocialRela();
    //}
    //else {
    //    //主题个人观点关系；
    //    $("#hidLiTypeId").val("04");
    //    $('#hidUserTypeId').val("01");
    //    const ddl_TDRelaTypeId = await gs_TDRelaType_BindDdl_TDRelaTypeId_Cache("ddlgs_TDRelaType1", new clsgs_TDRelaTypeEN);
    //    this.BindGv_gs_TotalDataRela_Viewpoint("01");
    //}
  }

  //总数据删除函数
  public async btnDelgs_TotalDataRela(strKeyId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      this.GetRelaId();
      const strLiTypeId = GetInputValueInDivObj(divName, 'hidLiTypeId');
      const strTotalDataId1 = GetInputValueInDivObj(divName, 'hidmId');

      const strWhereCond1 = ` totalDataTypeId='${strLiTypeId}' and tableKey ='${strKeyId}'`;
      const objgs_TotalDataStatistics = await gs_TotalDataStatistics_GetFirstObjAsync(
        strWhereCond1,
      );

      if (objgs_TotalDataStatistics != null) {
        const strWhereCond2 = ` totalDataId1=${strTotalDataId1} and totalDataId2 =${objgs_TotalDataStatistics.totalDataId}`;

        const objgs_TotalDataRela = await gs_TotalDataRela_GetFirstObjAsync(strWhereCond2);
        if (objgs_TotalDataRela != null) {
          const intmId: number = objgs_TotalDataRela.mId;
          await gs_TotalDataRela_DelRecordAsync(intmId).then((jsonData) => {
            const returnInt: number = jsonData;
            if (returnInt > 0) {
              const strMsg = `删除关系记录成功`;
              //alert(strMsg);
              message.success(strMsg);
              this.GetAllFunctionMethod();
            }
          });
        }
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //总数据添加函数
  public async btnAddgs_TotalDataRela(strKeyId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    this.GetRelaId();
    const strLiTypeId = GetInputValueInDivObj(divName, 'hidLiTypeId');
    const strTotalDataId1 = GetInputValueInDivObj(divName, 'hidmId');

    const strWhereCond1 = ` totalDataTypeId='${strLiTypeId}' and tableKey ='${strKeyId}'`;
    const objgs_TotalDataStatistics = await gs_TotalDataStatistics_GetFirstObjAsync(strWhereCond1);

    try {
      if (objgs_TotalDataStatistics != null) {
        const objgs_TotalDataRelaEN: clsgs_TotalDataRelaEN = new clsgs_TotalDataRelaEN();
        objgs_TotalDataRelaEN.totalDataId1 = strTotalDataId1;
        objgs_TotalDataRelaEN.totalDataId2 = objgs_TotalDataStatistics.totalDataId;
        //strIdCurrEduclsstrLiTypeId = $("#hidLiTypeId").val();
        //switch (strLiTypeId) {
        //    case "04":
        //        objgs_TotalDataRelaEN.tdRelaTypeId = $("#ddlgs_TDRelaType1").val();
        //        break;
        //    case "05":
        //        objgs_TotalDataRelaEN.tdRelaTypeId = $("#ddlgs_TDRelaType1").val();
        //        break;
        //    case "06":
        //        objgs_TotalDataRelaEN.tdRelaTypeId = $("#ddlgs_TDRelaType2").val();
        //        break;
        //    case "07":
        //        objgs_TotalDataRelaEN.tdRelaTypeId = $("#ddlgs_TDRelaType3").val();
        //        break;
        //    case "08":
        //        objgs_TotalDataRelaEN.tdRelaTypeId = $("#ddlgs_TDRelaType3").val();
        //        break;
        //    case "09":
        //        objgs_TotalDataRelaEN.tdRelaTypeId = $("#ddlgs_TDRelaType4").val();
        //        break;
        //    case "10":
        //        objgs_TotalDataRelaEN.tdRelaTypeId = $("#ddlgs_TDRelaType5").val();
        //        break;
        //}
        objgs_TotalDataRelaEN.tdRelaTypeId = GetSelectValueInDivObj(divName, 'ddlgs_TDRelaType');
        objgs_TotalDataRelaEN.SetUpdDate(clsPubFun4Web.getNowDate());
        objgs_TotalDataRelaEN.SetUpdUser(userStore.getUserId);
        objgs_TotalDataRelaEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
        const responseText2 = await gs_TotalDataRela_AddNewRecordAsync(objgs_TotalDataRelaEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          const strInfo = `添加记录成功!`;
          //显示信息框
          //alert(strInfo);
          message.success(strInfo);
          //绑定概念列表
          await this.GetAllFunctionMethod();
          HideDialogTwo();
        } else {
          const strInfo = `添加记录不成功!`;
          //显示信息框
          alert(strInfo);
        }
        return responseText2; //一定要有一个返回值，否则会出错！
      } else {
        const strInfo = `当前观点在总数据表内没找到，请让管理员同步总数据表以后再试!`;
        //显示信息框
        alert(strInfo);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  //关系表通过转换得到各个观点表的主键数组
  public async GetKeyList(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    this.GetRelaId();
    let strKeyList2 = '';
    // const strKeyId = GetInputValueInDivObj(divName, 'hidKeyId');
    // const strTypeId = GetInputValueInDivObj(divName, 'hidTypeId');

    const strmId = GetInputValueInDivObj(divName, 'hidmId');

    try {
      if (strmId != null && strmId != '') {
        const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
        const strWhereCond1 = ` totalDataId1 = '${strmId}' and idCurrEduCls ='${strIdCurrEducls}'`;

        let arrgs_TotalDataRelaObjLst: Array<clsgs_TotalDataRelaEN> = [];
        let arrvgs_TotalDataStatisticsObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];

        arrgs_TotalDataRelaObjLst = await gs_TotalDataRela_GetObjLstAsync(strWhereCond1);
        if (arrgs_TotalDataRelaObjLst.length > 0) {
          let strKeyList = '';
          for (let i = 0; i < arrgs_TotalDataRelaObjLst.length; i++) {
            if (i == 0) strKeyList = `${strKeyList}'${arrgs_TotalDataRelaObjLst[i].totalDataId2}'`;
            else strKeyList += `,` + `'${arrgs_TotalDataRelaObjLst[i].totalDataId2}'`;
          }
          const strLiTypeId = GetInputValueInDivObj(divName, 'hidLiTypeId');
          const strWhereCond2 = ` totalDataTypeId='${strLiTypeId}' and totalDataId in (${strKeyList})`;
          arrvgs_TotalDataStatisticsObjLst = await vgs_TotalDataStatistics_GetObjLstAsync(
            strWhereCond2,
          );
          if (arrvgs_TotalDataStatisticsObjLst != null) {
            //strIdCurrEduclsstrKeyList2 = "";
            for (let i = 0; i < arrvgs_TotalDataStatisticsObjLst.length; i++) {
              if (i == 0)
                strKeyList2 = `${strKeyList2}'${arrvgs_TotalDataStatisticsObjLst[i].tableKey}'`;
              else strKeyList2 += `,` + `'${arrvgs_TotalDataStatisticsObjLst[i].tableKey}'`;
            }
          }
        }
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    return strKeyList2;
  }

  ////////////////////////////////////////////7个关系列表数据///////////////////////////////////

  /******************************************个人观点关系相关***************************************/
  /* 根据条件获取相应的记录对象的列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
  */
  public async BindGv_gs_TotalDataRela_Viewpoint(strVTypeId: string) {
    $('#hidUserTypeId').val(strVTypeId);
    if (strVTypeId == '01') {
      $('#hidLiTypeId').val('04');
    } else if (strVTypeId == '02') {
      $('#hidLiTypeId').val('05');
    }
    let arrvViewpointObjLst: Array<clsvPaperSubViewpointEN> = [];
    try {
      const strKeyList2 = await this.GetKeyList();
      if (strKeyList2 != '') {
        const strWhereCond3 = ` userTypeId='${strVTypeId}' and viewpointId in (${strKeyList2})`;
        arrvViewpointObjLst = await vPaperSubViewpoint_GetObjLstAsync(strWhereCond3);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    try {
      let strHtml = '';
      if (arrvViewpointObjLst.length > 0) {
        //当前操作类型是各观点关系绑定“04”
        strHtml = await Public_Viewpoint.BindList_vViewpoint('04', strVTypeId, arrvViewpointObjLst);
        console.log('完成divPersonalViewpointRelaDataLst!');
      }
      //拼接；
      if (strVTypeId == '01') {
        $('#divPersonalViewpointRelaDataLst').html(strHtml);
      } else if (strVTypeId == '02') {
        $('#divExpertViewpointRelaDataLst').html(strHtml);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //删除个人观点关系数据
  public async btnDelViewPointRelaRecordInTab_Click(strKeyId: string, strVTypeId: string) {
    if (strVTypeId == '01') {
      $('#hidLiTypeId').val('04');
    } else if (strVTypeId == '02') {
      $('#hidLiTypeId').val('05');
    }
    this.btnDelgs_TotalDataRela(strKeyId);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////主题观点关系
  /* 观点列表表头排序；
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
  //////////////////////////////////////////////////////////////////个人观点部分
  //观点查询按钮
  public async btnViewpointQuery_Click() {
    await this.BindGv_vViewpoint();
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
    strWhereCond += `  and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (GetInputValueInDivObj(divName, 'txtViewpointName_q') != '') {
        strWhereCond += ` And ${clsvViewpointEN.con_ViewpointName} like '%${$(
          '#txtViewpointName_q',
        ).val()}%'`;
      }
      //if ($("#txtViewUpdName_q").val() != "") {
      //    strWhereCond += ` And ${clsvViewpointEN.con_UserName} like '%${$("#txtViewUpdName_q").val()}%'`;
      //}
      //根据传入的usertypeId 来区分是本人观点还是专家观点
      const strhidUserTypeId = GetInputValueInDivObj(divName, 'hidUserTypeId');
      if (strhidUserTypeId != '') {
        strWhereCond += ` And ${clsvViewpointEN.con_UserTypeId} = '${strhidUserTypeId}'`;
      }

      //只能查询提交的观点数据
      strWhereCond += ` And ${clsvViewpointEN.con_IsSubmit} = 'true'`;

      //排除获取已存在的关系数据 根据当前用户；
      //strWhereCond += ` And viewpointId not in (select viewpointId from gs_PViewpointRela where paperId = '${strPaperId}' And updUser = '${strUserId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
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
    let arrvViewpointObjLst: Array<clsvPaperSubViewpointEN> = [];
    try {
      this.recCount = await vViewpoint_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: 10,
        whereCond: strWhereCond,
        orderBy: this.hidSortvViewpointBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvViewpointObjLst = await vPaperSubViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    try {
      const strVTypeId = GetInputValueInDivObj(divName, 'hidUserTypeId'); //页面参数

      const strHtml = await Public_Viewpoint.BindList_vViewpoint(
        '05',
        strVTypeId,
        arrvViewpointObjLst,
      );

      //拼接；
      $('#divViewpointDataLst').html(strHtml);

      if (arrvViewpointObjLst.length > 30) {
        //$("#divPager1").show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }

      console.log('完成BindGv_vViewpoint!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //添加观点 展示观点列表数据
  public async btnAddViewpointRela_Click() {
    await this.BindGv_vViewpoint();
  }
  //确定选择的观点 并添加到关系表中
  public btnAdd_ViewpointRela_Click(strkeyId: string) {
    //存放Id
    //$("#hidViewpointId").val(strkeyId)
    //执行添加关系方法
    //this.AddNewRecordSaveViewpointRela(strkeyId);
    this.btnAddgs_TotalDataRela(strkeyId);
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

  //////////////////////////////////////////相关概念//////////////////////////////////////////////////

  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vgs_PConceptRela() {
    $('#hidLiTypeId').val('06');
    let arrvConceptObjLst: Array<clsvPaperSubViewpointEN> = [];
    try {
      const strKeyList2 = await this.GetKeyList();
      if (strKeyList2 != '') {
        const strWhereCond3 = ` conceptId in (${strKeyList2})`;
        arrvConceptObjLst = await vPaperSubViewpoint_GetObjLstAsync(strWhereCond3);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    try {
      let strHtml = '';
      if (arrvConceptObjLst.length > 0) {
        //当前操作类型是各观点关系绑定“04”
        strHtml = await Public_Concept.BindList_vConcept('04', arrvConceptObjLst);
        console.log('完成BindGv_vgs_PConceptRela!');
      }
      //拼接；
      $('#divgs_PConceptRelaDataLst').html(strHtml);
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
  public async btnDelConceptRelaRecordInTab_Click(strKeyId: string) {
    $('#hidLiTypeId').val('06');
    this.btnDelgs_TotalDataRela(strKeyId);
  }

  //确定选择的观点 并添加到关系表中
  public btnOkConceptInTab_Click(strkeyId: string) {
    //存放Id
    //$("#hidViewpointId").val(strkeyId)
    //执行添加关系方法
    //this.AddNewRecordSaveConceptRela(strkeyId);
    this.btnAddgs_TotalDataRela(strkeyId);
  }

  //////////////////////////////////////客观事实数据关系///////////////////////////////////////

  /* 根据条件获取相应的对象列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vgs_PTopicObjectiveRela(strVTypeId: string) {
    $('#hidUserTypeId').val(strVTypeId);
    if (strVTypeId == '01') {
      $('#hidLiTypeId').val('07');
    } else if (strVTypeId == '02') {
      $('#hidLiTypeId').val('08');
    }
    let arrvTopicObjectiveObjLst: Array<clsvPaperSubViewpointEN> = [];
    try {
      const strKeyList2 = await this.GetKeyList();
      if (strKeyList2 != '') {
        const strWhereCond3 = ` topicObjectiveId in (${strKeyList2})`;
        arrvTopicObjectiveObjLst = await vPaperSubViewpoint_GetObjLstAsync(strWhereCond3);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    try {
      let strHtml = '';
      if (arrvTopicObjectiveObjLst.length > 0) {
        //当前操作类型是各观点关系绑定“04”
        strHtml = await Public_TopicObjective.BindList_vTopicObjective(
          '04',
          strVTypeId,
          arrvTopicObjectiveObjLst,
        );
        console.log('完成BindGv_vgs_PTopicObjectiveRela!');
      }
      //拼接；
      if (strVTypeId == '01') {
        $('#divRtTopicObjectiveDataLst').html(strHtml);
      } else if (strVTypeId == '02') {
        $('#divBasisRtTopicObjectiveDataLst').html(strHtml);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 
在数据表里删除记录 删除客观事实
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
*/
  public async btnDelObjectiveRecordInTab_Click(strKeyId: string, strVTypeId: string) {
    if (strVTypeId == '01') {
      $('#hidLiTypeId').val('07');
    } else if (strVTypeId == '02') {
      $('#hidLiTypeId').val('08');
    }
    this.btnDelgs_TotalDataRela(strKeyId);
  }

  //确定选择的观点 并添加到关系表中
  public btnOkObjectiveInTab_Click(strkeyId: string) {
    //存放Id
    //$("#hidViewpointId").val(strkeyId)
    //执行添加关系方法
    //this.AddNewRecordSaveObjectiveRela(strkeyId);
    this.btnAddgs_TotalDataRela(strkeyId);
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

  //-----------------tab页切换事件

  //个人观点
  public async liViewpointClick() {
    try {
      await this.GetAllFunctionMethod();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取个人观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //专家观点
  public async liExpertViewpointClick() {
    try {
      await this.GetAllFunctionMethod();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取专家观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //相关概念
  public async liConceptClick() {
    try {
      await this.GetAllFunctionMethod();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取相关概念列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //客观事实
  public async liObjectiveFactClick() {
    try {
      await this.GetAllFunctionMethod();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取客观事实列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //客观数据
  public async liObjectiveBasisClick() {
    try {
      await this.GetAllFunctionMethod();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取客观依据列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //技能；
  public async liSysskillClick() {
    try {
      await this.GetAllFunctionMethod();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取客观依据列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //社会关系；
  public async liSysSocialRelationsClick() {
    try {
      await this.GetAllFunctionMethod();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取客观依据列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //////////////////////////////////技能////////////////////////////////

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

  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vgs_PSkillRela() {
    $('#hidLiTypeId').val('09');

    let arrvSysSkillObjLst: Array<clsvPaperSubViewpointEN> = [];

    try {
      const strKeyList2 = await this.GetKeyList();
      if (strKeyList2 != '') {
        const strWhereCond3 = ` skillId in (${strKeyList2})`;
        arrvSysSkillObjLst = await vPaperSubViewpoint_GetObjLstAsync(strWhereCond3);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    try {
      let strHtml = '';
      if (arrvSysSkillObjLst.length > 0) {
        //当前操作类型是各观点关系绑定“04”
        strHtml = await Public_SysSkill.BindList_vSysSkill('04', arrvSysSkillObjLst);
        console.log('完成BindGv_vgs_PSkillRela!');
      }
      //拼接；
      $('#divSysskillDataLst').html(strHtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 
在数据表里删除技能关系
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
*/
  public async btnDelSysskillRecordInTab_Click(strKeyId: string) {
    $('#hidLiTypeId').val('09');
    this.btnDelgs_TotalDataRela(strKeyId);
  }

  //添加技能关系
  public btnOkSysskillInTab_Click(strkeyId: string) {
    //存放Id
    //$("#hidViewpointId").val(strkeyId)
    //执行添加关系方法
    //this.AddNewRecordSaveConceptRela(strkeyId);
    this.btnAddgs_TotalDataRela(strkeyId);
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
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vgs_PSocialRela() {
    $('#hidLiTypeId').val('10');
    let arrvSysSocialRelationsExObjLst: Array<clsvPaperSubViewpointENEx> = [];

    try {
      const strKeyList2 = await this.GetKeyList();
      if (strKeyList2 != '') {
        const strWhereCond3 = ` socialId in (${strKeyList2})`;
        const arrvSysSocialRelationsObjLst = await vPaperSubViewpoint_GetObjLstAsync(strWhereCond3);
        arrvSysSocialRelationsExObjLst = arrvSysSocialRelationsObjLst.map(
          vPaperSubViewpointEx_CopyToEx,
        );
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    try {
      let strHtml = '';
      if (arrvSysSocialRelationsExObjLst.length > 0) {
        //当前操作类型是各观点关系绑定“04”
        strHtml = await Public_SysSocialRelations.BindList_vSysSocialRelations(
          '04',
          arrvSysSocialRelationsExObjLst,
        );
        console.log('完成BindGv_vgs_PSocialRela!');
      }
      //拼接；
      $('#divSysSocialRelaDataLst').html(strHtml);
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
    $('#hidLiTypeId').val('10');
    this.btnDelgs_TotalDataRela(strKeyId);
  }

  //添加社会关系
  public async btnOkgs_PSocialRelaInTab_Click(strkeyId: string) {
    //存放Id
    //$("#hidViewpointId").val(strkeyId)
    //执行添加关系方法
    //this.AddNewRecordSaveConceptRela(strkeyId);
    this.btnAddgs_TotalDataRela(strkeyId);
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

  // /*
  //  * 设置排序字段-相当使用ViewState功能
  //  */
  // public set hidSortvgs_ResearchPlanBy(value: string) {
  //   const divName = this.getDivName(enumDivType.LayOut_01);
  //   SetInputValueInDivObj(divName, 'hidSortvgs_ResearchPlanBy', value);
  // }
  // /*
  //  * 设置排序字段
  //  */
  // public get hidSortvgs_ResearchPlanBy(): string {
  //   const divName = this.getDivName(enumDivType.LayOut_01);
  //   return GetInputValueInDivObj(divName, 'hidSortvgs_ResearchPlanBy');
  // }

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
