import { Ref } from 'vue';
import $ from 'jquery';
import { gs_ReflectLogCRUDEx } from './gs_ReflectLogCRUDEx';
import { gs_TeacherTaskCRUDEx } from './gs_TeacherTaskCRUDEx';
import { RTPaperRelaListInEx } from './RTPaperRelaListInEx';

import { clsgs_PaperReportEN } from '@/ts/L0Entity/GradEduTopic/clsgs_PaperReportEN';
import { clsgs_ReflectLogEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ReflectLogEN';
import { clsgs_ResearchResultEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ResearchResultEN';
import { clsgs_TeacherTaskEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TeacherTaskEN';
import { clsgs_TobeStudiedProblemEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TobeStudiedProblemEN';
import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import { clsRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetButtonObjLstInDivObjN,
  GetDivObjInDivObj,
  GetDivObjInDivObjN,
  GetInputValueInDivObj,
  GetLiObjLstInDivObj,
  GetSelectValueInDivObj,
  GetUlObjInDivObj,
  GetUlObjInDivObjN,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType'; //主题菜单是否隐藏
import { ResearchTopicCRUD } from '@/viewsBase/GradEduTopic/ResearchTopicCRUD';
import { clsgs_MeetingMinutesEN } from '@/ts/L0Entity/GradEduTopic/clsgs_MeetingMinutesEN';
import { sys_RequestPush_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTools/clssys_RequestPushWApi';
import {
  ResearchTopic_GetFirstObjAsync,
  ResearchTopic_GetObjByTopicIdAsync,
  ResearchTopic_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import {
  RTUserRela_DelRecordAsync,
  RTUserRela_GetFirstObjAsync,
  RTUserRela_GetObjLstAsync,
  RTUserRela_ReFreshCache,
  RTUserRela_ReOrderAsync,
  RTUserRela_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTUserRelaWApi';
import { CurrEduClsEx_GetObjExByLastVisitedDate } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsExWApi';
import { CurrEduCls_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import {
  ResearchTopicEx_DelRecordAsyncEx,
  ResearchTopicEx_GetObjExByLastVisitedDate,
  ResearchTopicEx_SetIdCurrEduCls,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { gs_TopicRoleCRUDExB_TopicMenuIsHide } from '@/views/GradEduTopic/gs_TopicRoleCRUDExB';
import { ResearchTopicViewpointEx } from '@/views/GradEduTopic/ResearchTopicViewpointEx';
import { ResearchTopicConceptEx } from '@/views/GradEduTopic/ResearchTopicConceptEx';
import { ResearchTopicObjectiveEx } from '@/views/GradEduTopic/ResearchTopicObjectiveEx';
import { ResearchTopicSysSocialRelaEx } from '@/views/GradEduTopic/ResearchTopicSysSocialRelaEx';
import { ResearchTopicSysskillEx } from '@/views/GradEduTopic/ResearchTopicSysskillEx';
import { ResearchTopicPlanEx } from '@/views/GradEduTopic/ResearchTopicPlanEx';
import { Public_PaperSubViewpoint } from '@/views/GradEduPublicPage/Public_PaperSubViewpoint';
import { gs_ResearchResultCRUDEx } from '@/views/GradEduTopic/gs_ResearchResultCRUDEx';
import { gs_TobeStudiedProblemCRUDEx } from '@/views/GradEduTopic/gs_TobeStudiedProblemCRUDEx';
import { gs_VpClassificationCRUDEx } from '@/views/GradEduTopic/gs_VpClassificationCRUDEx';
import { gs_MeetingMinutesCRUDEx } from '@/views/GradEduTopic/gs_MeetingMinutesCRUDEx';
import { UsersLstSel } from '@/views/GradEduTopic/UsersLstSel';
import {
  gs_Color_GetObjLstAsync,
  gs_Color_GetObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsgs_ColorWApi';
import { clsgs_ColorEN } from '@/ts/L0Entity/RT_Params/clsgs_ColorEN';
import { gs_TeacherTask_EditEx } from '@/views/GradEduTopic/gs_TeacherTask_EditEx';
import { gs_ResearchPlan_EditEx } from '@/views/GradEduTopic/gs_ResearchPlan_EditEx';
import { clsgs_ResearchPlanEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ResearchPlanEN';
import { gs_ResearchPlan_Edit } from '@/viewsBase/GradEduTopic/gs_ResearchPlan_Edit';
import { gs_ReflectLog_EditEx } from '@/views/GradEduTopic/gs_ReflectLog_EditEx';
import { P_Paper_EditEx } from '@/views/GradEduPublicPage/P_Paper_EditEx';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { ResearchTopic_EditEx } from '@/views/GradEduTopic/ResearchTopic_EditEx';
import { clsCurrEduClsENEx } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsENEx';
import { clsResearchTopicENEx } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicENEx';
import enumResearchTopicTabs from '@/ts/FunClass/enumResearchTopicTabs';
import { message } from '@/utils/myMessage';
import { gs_PaperReportCRUDEx } from '@/views/GradEduTopic/gs_PaperReportCRUDEx';
import { vPaperEx_EditSubViewPoint } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
import { gs_VpClassification_EditEx } from '@/views/GradEduTopic/gs_VpClassification_EditEx';
import { PaperSubViewpoint_EditEx } from '@/views/GradEduPaper/PaperSubViewpoint_EditEx';
import { clsPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubViewpointEN';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import {
  vRTUserRela_GetObjBymIdCache,
  vRTUserRela_GetSubObjLstCache,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import {
  RTUserRelaEx_GetObjByTopicIdAndUserId,
  RTUserRelaEx_UpdateTypeTableHtmlAsync,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsRTUserRelaExWApi';
import { TopicUserRole_GetObjLstCache } from '@/ts/L3ForWApi/RT_Params/clsTopicUserRoleWApi';
import { vRTUserRelaEx_GetObjByTopicIdAndUserId } from '@/ts/L3ForWApiEx/GradEduTopic/clsvRTUserRelaExWApi';
import { gs_MeetingMinutes_Edit } from '@/viewsBase/GradEduTopic/gs_MeetingMinutes_Edit';
import { gs_MeetingMinutes_EditEx } from '@/views/GradEduTopic/gs_MeetingMinutes_EditEx';
import { gs_PaperReport_Edit } from '@/viewsBase/GradEduTopic/gs_PaperReport_Edit';
import { gs_PaperReport_EditEx } from '@/views/GradEduTopic/gs_PaperReport_EditEx';
import { gs_TobeStudiedProblem_EditEx } from '@/views/GradEduTopic/gs_TobeStudiedProblem_EditEx';
import { gs_TobeStudiedProblem_Edit } from '@/viewsBase/GradEduTopic/gs_TobeStudiedProblem_Edit';
import { gs_ResearchResult_EditEx } from '@/views/GradEduTopic/gs_ResearchResult_EditEx';
import { gs_ResearchResult_Edit } from '@/viewsBase/GradEduTopic/gs_ResearchResult_Edit';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';

declare let window: any;
/* ResearchTopic_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/

export class ResearchTopic_QUDIExB extends ResearchTopicCRUD implements IShowList {
  public static GetPropValue: (strPropName: string) => string;
  public static bindTreeData: () => Promise<void>;
  public static selectNodeById: (type: string, nodeId: string) => void;
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;

  public static EditRef_UserLst: Ref<any>;
  public static treeRef: Ref<any>;
  public static intApplicationTypeIdCache = 0;
  public static gsKnowledgeTypeId = '';
  public static divLayout: HTMLDivElement;
  public static divTree: HTMLDivElement;
  public static divCode: HTMLDivElement;

  //export class ResearchTopic_QUDIEx extends ResearchTopicCRUD {
  //用户列表
  public static topicId = ''; //当前所选的主题Id
  public static paperTypeId = '';
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 20;
  }
  public recCount = 0;

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    let objPage;
    let objPage_gs_TeacherTask;
    switch (strType) {
      case clsResearchTopicEN._CurrTabName:
        // this.GetTopicData();
        break;
      case clsgs_ReflectLogEN._CurrTabName:
        objPage = new gs_ReflectLogCRUDEx(this.divLayout);
        objPage.BindGv_gs_ReflectLog(this.divLayout);
        break;
      case clsgs_VpClassificationEN._CurrTabName:
        liViewsClassificationClick(ResearchTopic_QUDIExB.gsKnowledgeTypeId, this.divLayout);
        break;
      case clsgs_TobeStudiedProblemEN._CurrTabName:
        liTobeStudiedProblemClick(this.divLayout);
        break;
      case clsgs_ResearchResultEN._CurrTabName:
        liResearchResultClick(this.divLayout);
        break;
      case clsgs_PaperReportEN._CurrTabName:
        liPaperReportClick(this.divLayout);
        break;
      case clsgs_MeetingMinutesEN._CurrTabName:
        liMeetingMinutesClick(this.divLayout);
        break;
      case clsgs_TeacherTaskEN._CurrTabName:
        /*liTeacherTaskClick();*/
        objPage_gs_TeacherTask = new gs_TeacherTaskCRUDEx(this.divLayout);
        objPage_gs_TeacherTask.liTeacherTaskClick(this.divLayout, this.divList);
        break;
      case 'P_Paper':
        //小组论文习作
        liPaperClick('02', this.divLayout);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }
  async BindGvCache(strType: string, strPara: string) {
    const objPage0 = new ResearchTopic_QUDIExB(this.divLayout);
    const objLayOut = objPage0.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    switch (strType) {
      case clsPaperSubViewpointEN._CurrTabName:
        ResearchTopic_QUDIExB.btn_Click('changeTab', strPara, this.divLayout);
        break;

      case clsRTUserRelaEN._CurrTabName:
        if (IsNullOrEmpty(strPara) == false) {
          this.btnUserRecordInTab_Click(strPara);
        }
        break;
      case clsResearchTopicEN._CurrTabName:
        this.GetTopicData();
        break;
      case clsgs_TeacherTaskEN._CurrTabName:
        liTeacherTaskClick(this.divLayout);
        break;
      case clsgs_ResearchPlanEN._CurrTabName:
        liResearchPlanClick(this.divLayout);
        break;
      case clsgs_ReflectLogEN._CurrTabName:
        ligs_ReflectLog(this.divLayout);
        break;


      default:
        AccessBindGvDefault(strType);
        break;
    }
  }
  //确定选择的用户 并添加到关系表中
  public async btnUserRecordInTab_Click(strkeyId: string) {
    ////主题用户角色下拉框
    //const ddl_TopicUserRole_q = await this.BindDdl_TopicUserRole_q("ddlTopicUserRole_q");
    //需要提示选择角色
    //存放Id
    $('#hidUserIdKey').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSaveUserRelaB();
  }
  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSaveUserRelaB() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.AddNewRecordSaveUserRelaB.name;
    // const strPaperId = GetHidPaperId(divName);
    const strUserId = GetInputValueInDivObj(divName, 'hidUserIdKey');
    const objRTUserRelaEN: clsRTUserRelaEN = new clsRTUserRelaEN();
    //获取缓存色码表；
    let arrGs_ColorObjLst: Array<clsgs_ColorEN> = [];
    try {
      // 同一主题 同一用户 只能添加一次；
      const strWhere = ` 1 = 1 And topicId = '${ResearchTopic_QUDIExB.topicId}' And userId = '${strUserId}'`;
      //获取色码数据
      arrGs_ColorObjLst = await gs_Color_GetObjLstCache();
      //添加完成后把根据用户排序号得到色码表 样式把样式更新到主题用户关系表；

      //const responseText = await RTUserRela_GetFirstObjAsync(strWhere);
      const objRTUserRelaEN0 = await RTUserRela_GetFirstObjAsync(strWhere);
      if (objRTUserRelaEN0 == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      //得到用户排序号
      const Objgs_Color = arrGs_ColorObjLst.find((x) => x.userNo == objRTUserRelaEN.orderNum);
      if (Objgs_Color != null) {
        //得到色码

        const objUpdateRTUserRelaEN: clsRTUserRelaEN = new clsRTUserRelaEN();
        objUpdateRTUserRelaEN.SetmId(objRTUserRelaEN.mId);
        objUpdateRTUserRelaEN.SetColorId(Objgs_Color.colorId);
        objUpdateRTUserRelaEN.SetUserBgColor(Objgs_Color.colorCode); //用户背景色码；

        objUpdateRTUserRelaEN.sfUpdFldSetStr = objUpdateRTUserRelaEN.updFldString; //设置哪些字段被修改(脏字段)
        const returnBool = await RTUserRela_UpdateRecordAsync(objUpdateRTUserRelaEN);
        if (returnBool == true) {
          return true;
        } else {
          const strInfo = `修改用户色码不成功!`;
          alert(strInfo);
          console.log('修改用户色码不成功');
          return false;
        }
      }
      try {
        // 使用动态导入加载函数代码块
        // const { myFunction } = await import('./myFunction.ts');
        const { ResearchTopic_QUDIEx_BindGv_vRTUserRela } = await import(
          '@/views/GradEduTopic/ResearchTopic_QUDIExD'
        );
        // console.error('已经导入：ResearchTopic_QUDIEx_BindGv_vRTUserRela');
        // 调用加载的函数
        await ResearchTopic_QUDIEx_BindGv_vRTUserRela(this.topicId, this.divLayout);
      } catch (error) {
        console.error('加载函数:[ResearchTopic_QUDIEx_BindGv_vRTUserRela]时出现错误:', error);
      }

      return true; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
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
    按钮单击,用于调用Js函数中btn_Click
   (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   */
  public static async btn_Click(
    strCommandName: string,
    strKeyId: any,
    divLayout: HTMLDivElement,
  ): Promise<boolean> {
    console.log(strCommandName, strKeyId);
    const objPage: ResearchTopic_QUDIExB = new ResearchTopic_QUDIExB(divLayout);
    let objPageEdit;

    const objPageEditgs_ReflectLog = new gs_ReflectLog_EditEx('gs_ReflectLog_EditEx', objPage);

    let objPageEdit_PaperSubViewpoint;
    let objPageEdit_TeacherTask;
    let objPageEdit_Classification;
    let objPageEdit_gs_ResearchPlan;
    let objPageEdit_UsersSel;
    let objPageEdit_ResearchTopic;
    let objPageEdit_MeetingMinutes;
    let objPageEdit_PaperReport;
    let objPage_RTPaperRela;
    const strKeyId2 = this.topicId;
    const objData = strKeyId;
    switch (strCommandName) {
      case 'UpdSyssocial':
      case 'UpdSysskill':
      case 'UpdObjective':
      case 'UpdConcept':
      case 'UpdViewPoint':
        // btnUpdViewPoint_Click(strKeyId, '');

        // PaperSubViewpoint_Edit.EditObj = PaperSubViewpoint_EditRef.value;
        // this.divEdit = PaperSubViewpoint_EditRef.value;
        objPageEdit_PaperSubViewpoint = new PaperSubViewpoint_EditEx(
          'PaperSubViewpoint_EditEx',
          objPage,
        );
        objPageEdit_PaperSubViewpoint.paperId2 = objData.paperId;
        // objPageEdit_Classification.divName4Edit = 'divEdit_gs_VpClassification';
        objPageEdit_PaperSubViewpoint.btnUpdateRecordDialog_Click(Number(objData.subViewpointId));
        break;
      case 'AddNewClassification': //删除研究主题AddgsReflectLog
        objPageEdit_Classification = new gs_VpClassification_EditEx(
          'gs_VpClassification_EditEx',
          objPage,
        );
        objPageEdit_Classification.divName4Edit = 'divEdit_gs_VpClassification';
        objPageEdit_Classification.btnAddNewRecord_Click();
        break;
      case 'Updategs_VpClassification': //删除研究主题AddgsReflectLog
        objPageEdit_Classification = new gs_VpClassification_EditEx(
          'gs_VpClassification_EditEx',
          objPage,
        );

        // gs_VpClassification_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
        objPageEdit_Classification.divName4Edit = 'divEdit_gs_VpClassification';
        objPageEdit_Classification.btnUpdateRecord_Click(strKeyId);

        break;

      case 'GetAllFunctionMethod':
        objPage.GetAllFunctionMethod(strKeyId);
        break;
      case 'AddpdfSysSocialRela': //删除研究主题AddgsReflectLog
        objPage.btnAddpdfSysSocialRela_Click();
        break;
      case 'ClearClassificationTitle':
        ClearClassificationTitle();
      case 'changeTab':
        ChangeTab(strKeyId, divLayout);
        break;
      case 'ResearchPlan':
        liResearchPlanClick(divLayout);
        break;
      case 'UpdateUserRelaInTab': //删除研究主题AddgsReflectLog
        //objPage.btnUpdateUserRelaInTab_Click();
        break;
      case 'AddSysskillInTab': //删除研究主题AddgsReflectLog
        // objPage.btnAddSysskillInTab_Click();
        break;
      case 'AddNewResearchResult': //删除研究主题AddgsReflectLog
        objPage.btnAddNewResearchResult_Click();
        break;
      case 'AddNewTobeStudiedProblem': //删除研究主题AddgsReflectLog
        objPage.btnAddNewTobeStudiedProblem_Click();
        break;
      case 'UpdateRecordInTab_gs_TobeStudiedProblem': //删除研究主题AddgsReflectLog
        objPage.btnUpdateRecordInTab_gs_TobeStudiedProblem_Click(strKeyId);
        break;

      case 'UpdateRecordInTab_gs_ResearchResult': //删除研究主题AddgsReflectLog
        objPage.btnUpdateRecordInTab_gs_ResearchResult_Click(strKeyId);
        break;

      case 'Updategs_TeacherTask': //删除研究主题AddgsReflectLog
        objPageEdit_TeacherTask = new gs_TeacherTask_EditEx('gs_TeacherTask_EditEx', objPage);

        objPageEdit_TeacherTask.btnUpdateRecord_Click(strKeyId);
        break;
      case 'Updategs_ReflectLog': //删除研究主题AddgsReflectLog
        // objPage.btnUpdategs_ReflectLog_Click(strKeyId);
        objPageEditgs_ReflectLog.divName4Edit = 'divEdit_gs_ReflectLog';
        objPageEditgs_ReflectLog.btnUpdateRecord_Click(strKeyId);
        break;

      case 'UpdateRecordInTab_gs_PaperReport': //删除研究主题AddgsReflectLog
        objPage.btnUpdateRecordInTab_gs_PaperReport_Click(strKeyId);
        break;
      case 'UpdateRecordInTab_gs_MeetingMinutes': //删除研究主题AddgsReflectLog
        // objPage.btnUpdateRecordInTab_gs_MeetingMinutes_Click(strKeyId);
        break;

      case 'AddRTSysSocialRelaInTab': //删除研究主题AddgsReflectLog
        // objPage.btnAddRTSysSocialRelaInTab_Click();
        break;
      case 'AddpdfSysskill': //删除研究主题AddgsReflectLog
        objPage.btnAddpdfSysskill_Click();
        break;
      case 'AddNewPaperReport': //删除研究主题AddgsReflectLog
        // objPage.btnAddNewPaperReport_Click();
        objPageEdit_PaperReport = new gs_PaperReport_EditEx('gs_PaperReport_EditEx', objPage);
        gs_PaperReport_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
        objPageEdit_PaperReport.divName4Edit = 'divEdit_gs_PaperReport';
        objPageEdit_PaperReport.btnAddNewRecord_Click();
        break;
      case 'AddNewMeetingMinutes': //删除研究主题AddgsReflectLog
        // objPage.btnAddNewMeetingMinutes_Click();
        objPageEdit_MeetingMinutes = new gs_MeetingMinutes_EditEx(
          'gs_MeetingMinutes_EditEx',
          objPage,
        );
        gs_MeetingMinutes_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
        objPageEdit_MeetingMinutes.divName4Edit = 'divEdit_gs_MeetingMinutes';
        objPageEdit_MeetingMinutes.btnAddNewRecord_Click();
        break;
      case 'RoleTool': //删除研究主题AddgsReflectLog
        // objPage.btnRoleTool_Click();
        break;

      case 'AddNewgs_PaperRela': //删除研究主题AddgsReflectLog
        objPage.btnAddNewgs_PaperRela_Click(objPage);
        break;
      case 'AddExpertViewPointRelaRecordInTab': //删除研究主题AddgsReflectLog
        // objPage.btnAddExpertViewPointRelaRecordInTab_Click();
        break;
      case 'AddViewPointRelaRecordInTab': //删除研究主题AddgsReflectLog
        // objPage.btnAddViewPointRelaRecordInTab_Click();
        break;
      case 'AddConceptRelaRecordInTab': //删除研究主题AddgsReflectLog
        // objPage.btnAddConceptRelaRecordInTab_Click();
        break;
      case 'AddTopicObjectiveRelaRecordInTab': //删除研究主题AddgsReflectLog
        // objPage.btnAddTopicObjectiveRelaRecordInTab_Click();
        break;
      case 'BasisObjectiveRelaInTab': //删除研究主题AddgsReflectLog
        // objPage.btnAddBasisObjectiveRelaInTab_Click();
        break;
      case 'AddpdfBasisObjective': //删除研究主题AddgsReflectLog
        objPage.btnAddpdfBasisObjective_Click();
        break;
      case 'AddpdfObjectiveFact': //删除研究主题AddgsReflectLog
        objPage.btnAddpdfObjectiveFact_Click();
        break;
      case 'AddpdfNewConceptRela': //删除研究主题AddgsReflectLog
        objPage.btnAddpdfNewConceptRela_Click();
        break;
      case 'AddpdfExpertViewPointRel': //删除研究主题AddgsReflectLog
        objPage.btnAddpdfExpertViewPointRel_Click();
        break;
      case 'AddpdfViewPointRela': //删除研究主题AddgsReflectLog
        objPage.btnAddpdfViewPointRela_Click();
        break;
      case 'AddpdfPaperSubViewpoint': //删除研究主题AddgsReflectLog
        objPage.btnAddpdfPaperSubViewpoint_Click();
        break;

      case 'Addgs_ReflectLog': //删除研究主题AddgsReflectLog
        objPageEditgs_ReflectLog.divName4Edit = 'divEdit_gs_ReflectLog';
        objPageEditgs_ReflectLog.btnAddNewRecord_Click();
        break;
      case 'AddNewRecord': //添加研究主题
      case 'AddResearchTopic': //添加研究主题
        objPageEdit_ResearchTopic = new ResearchTopic_EditEx('ResearchTopic_EditEx', objPage);
        objPageEdit_ResearchTopic.btnAddNewRecord_Click();
        break;
      case 'DelResearchTopic': //删除研究主题
        objPage.btnDelResearchTopic_Click();
        break;
      case 'Addgs_TeacherTask': //添加研究计划
        objPageEdit_TeacherTask = new gs_TeacherTask_EditEx('gs_TeacherTask_EditEx', objPage);

        objPageEdit_TeacherTask.btnAddNewRecord_Click();
        break;
      case 'AddResearchPlan': //添加研究计划
        objPageEdit_gs_ResearchPlan = new gs_ResearchPlan_EditEx('gs_ResearchPlan_EditEx', objPage);

        objPageEdit_gs_ResearchPlan.btnAddNewRecordWithMaxId_Click();

        break;
      case 'UpdResearchPlan': //添加研究计划
        gs_ResearchPlan_Edit.IdCurrEduClsCache = clsPubLocalStorage.idCurrEduCls;
        console.log(
          'gs_ResearchPlan_Edit.IdCurrEduClsCache:',
          gs_ResearchPlan_Edit.IdCurrEduClsCache,
        );
        objPageEdit_gs_ResearchPlan = new gs_ResearchPlan_EditEx('gs_ResearchPlan_EditEx', objPage);

        objPageEdit_gs_ResearchPlan.btnUpdateRecord_Click(strKeyId);

        break;

      case 'AddRelaUsers': //查询记录
        objPageEdit_UsersSel = new UsersLstSel(objPage, objPage.divLayout);

        objPageEdit_UsersSel.btnAddUserRela_Click();
        break;
      case 'Query': //查询记录
        //objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;

      case 'Create': //添加记录
        //objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        if (strKeyId2 == '') {
          alert('请选择需要修改的记录！');
          return false;
        }
        objPageEdit = new ResearchTopic_EditEx('ResearchTopic_EditEx', objPage);

        objPageEdit.btnUpdateRecord_Click(strKeyId2);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        //objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要复制的记录！');
        //   return;
        // }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        // if (arrKeyIds.length == 0) {
        //   alert(`请选择需要删除的${objPage.thisTabName}记录！`);
        //   return;
        // }
        //objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        //objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要按标志删除的记录！');
        //   return;
        // }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要恢复删除的记录！');
        //   return;
        // }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要置顶的记录！');
        //   return;
        // }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要移底的记录！');
        //   return;
        // }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要上移的记录！');
        //   return;
        // }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要下移的记录！');
        //   return;
        // }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ResearchTopic_QUDIExB.btn_Click');

        break;
    }
    return true;
  }

  public btnUpdateRecordInTab_gs_ResearchResult_Click(strKeyId: string) {
    //instantiateTextbox();

    //gs_ResearchResultCRUDEx.btn_Click("Create", strKeyId);
    const objPageEdit = new gs_ResearchResult_EditEx('gs_ResearchResult_EditEx', this);
    gs_ResearchResult_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
    objPageEdit.divName4Edit = 'divEdit_gs_ResearchResult';
    objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
  }

  //添加 研究成果
  public btnAddNewResearchResult_Click() {
    const objPageEdit = new gs_ResearchResult_EditEx('gs_ResearchResult_EditEx', this);
    gs_ResearchResult_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
    objPageEdit.divName4Edit = 'divEdit_gs_ResearchResult';
    objPageEdit.btnAddNewRecord_Click();
  }

  //添加 待研究问题
  public btnUpdateRecordInTab_gs_TobeStudiedProblem_Click(strKeyId: string) {
    //instantiateTextbox();

    //gs_TobeStudiedProblemCRUDEx.btn_Click("Create", strKeyId);
    const objPageEdit = new gs_TobeStudiedProblem_EditEx('gs_TobeStudiedProblem_EditEx', this);
    gs_TobeStudiedProblem_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
    objPageEdit.divName4Edit = 'divEdit_gs_TobeStudiedProblem';
    objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
  }
  //添加 待研究问题
  public btnAddNewTobeStudiedProblem_Click() {
    //instantiateTextbox();

    //gs_TobeStudiedProblemCRUDEx.btn_Click("Create", strKeyId);
    const objPageEdit = new gs_TobeStudiedProblem_EditEx('gs_TobeStudiedProblem_EditEx', this);
    gs_TobeStudiedProblem_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
    objPageEdit.divName4Edit = 'divEdit_gs_TobeStudiedProblem';
    objPageEdit.btnAddNewRecord_Click();
  }
  public btnUpdateRecordInTab_gs_PaperReport_Click(strKeyId: string) {
    const objPageEdit = new gs_PaperReport_EditEx('gs_PaperReport_EditEx', this);
    gs_PaperReport_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
    objPageEdit.divName4Edit = 'divEdit_gs_PaperReport';
    objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
  }
  //添加 论文汇报
  public btnAddNewPaperReport_Click() {
    const objPageEdit = new gs_PaperReport_EditEx('gs_PaperReport_EditEx', this);
    gs_PaperReport_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
    objPageEdit.divName4Edit = 'divEdit_gs_PaperReport';
    objPageEdit.btnAddNewRecord_Click();
  }
  //添加 会议纪要
  public btnAddNewMeetingMinutes_Click() {
    //instantiateTextbox();
    const objPageEdit = new gs_MeetingMinutes_EditEx('gs_MeetingMinutes_EditEx', this);
    gs_MeetingMinutes_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
    objPageEdit.divName4Edit = 'divEdit_gs_MeetingMinutes';
    objPageEdit.btnAddNewRecord_Click();
  }
  public btnUpdateRecordInTab_gs_VpClassification_Click(strKeyId: string) {
    //instantiateTextbox();

    //gs_VpClassificationCRUDEx.btn_Click("Create", strKeyId);
    const objPageEdit = new gs_VpClassification_EditEx('', this);
    // gs_VpClassification_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
    objPageEdit.divName4Edit = 'divEdit_gs_VpClassification';
    objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
  }
  ///添加社会关系Pdf
  public btnAddpdfSysSocialRela_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      //存放选择id客观数据
      //strIdCurrEduclsstrObjectiveType = "02";
      //$('#hidObjectiveTypeId').val(strObjectiveType);
      const strpaperId_Social = ResearchTopic_QUDIExB.GetPropValue('paperId_Social');
      console.log('strpaperId_Social:', strpaperId_Social);
      if (strpaperId_Social == '') return;
      vPaperEx_EditSubViewPoint(
        strpaperId_Social,
        clsPrivateSessionStorage.topicIdInTree,
        clsPubLocalStorage.idCurrEduCls,
        '07', //知识类型
      );
      // xadminOpen(
      //   '添加社会关系',
      //   `../GradEduTopic/Pdfiframe?PageType=07&TopicId=${strKeyId}&IdCurrEduCls=${strIdCurrEduCls}`,
      // );
    }
  }
  ///添加技能Pdf
  public btnAddpdfSysskill_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      //存放选择id客观数据
      const strpaperId_Social = ResearchTopic_QUDIExB.GetPropValue('paperId_Social');
      console.log('strpaperId_Social:', strpaperId_Social);
      if (strpaperId_Social == '') return;
      vPaperEx_EditSubViewPoint(
        strpaperId_Social,
        clsPrivateSessionStorage.topicIdInTree,
        clsPubLocalStorage.idCurrEduCls,
        '06', //知识类型
      );
      // xadminOpen(
      //   '添加技能数据',
      //   `../GradEduTopic/Pdfiframe?PageType=06&TopicId=${strKeyId}&IdCurrEduCls=${strIdCurrEduCls}`,
      // );
    }
  }
  ///添加客观数据按钮05
  public btnAddpdfBasisObjective_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      //存放选择id客观数据
      const strpaperId_Social = ResearchTopic_QUDIExB.GetPropValue('paperId_Social');
      console.log('strpaperId_Social:', strpaperId_Social);
      if (strpaperId_Social == '') return;
      vPaperEx_EditSubViewPoint(
        strpaperId_Social,
        clsPrivateSessionStorage.topicIdInTree,
        clsPubLocalStorage.idCurrEduCls,
        '05', //知识类型
      );
      // const strObjectiveType = '02';
      // $('#hidObjectiveTypeId').val(strObjectiveType);

      // xadminOpen(
      //   '添加客观数据',
      //   `../GradEduTopic/Pdfiframe?PageType=05&TopicId=${strKeyId}&IdCurrEduCls=${strIdCurrEduCls}`,
      // );
    }
  }
  ///添加客观事实04
  public btnAddpdfObjectiveFact_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      //存放选择id客观事实
      const strpaperId_Social = ResearchTopic_QUDIExB.GetPropValue('paperId_Social');
      console.log('strpaperId_Social:', strpaperId_Social);
      if (strpaperId_Social == '') return;
      vPaperEx_EditSubViewPoint(
        strpaperId_Social,
        clsPrivateSessionStorage.topicIdInTree,
        clsPubLocalStorage.idCurrEduCls,
        '04', //知识类型
      );
      // const strObjectiveType = '01';
      // $('#hidObjectiveTypeId').val(strObjectiveType);

      // xadminOpen(
      //   '添加客观事实',
      //   `../GradEduTopic/Pdfiframe?PageType=04&TopicId=${strKeyId}&IdCurrEduCls=${strIdCurrEduCls}`,
      // );
    }
  }

  //添加主题概念03
  public btnAddpdfNewConceptRela_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      const strpaperId_Social = ResearchTopic_QUDIExB.GetPropValue('paperId_Social');
      console.log('strpaperId_Social:', strpaperId_Social);
      if (strpaperId_Social == '') return;
      vPaperEx_EditSubViewPoint(
        strpaperId_Social,
        clsPrivateSessionStorage.topicIdInTree,
        clsPubLocalStorage.idCurrEduCls,
        '03', //知识类型
      );
      // xadminOpen(
      //   '添加概念',
      //   `../GradEduTopic/Pdfiframe?PageType=03&TopicId=${strKeyId}&IdCurrEduCls=${strIdCurrEduCls}`,
      // );
    }
  }
  //pdf添加专家观点02
  public btnAddpdfExpertViewPointRel_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      const strpaperId_Social = ResearchTopic_QUDIExB.GetPropValue('paperId_Social');
      console.log('strpaperId_Social:', strpaperId_Social);
      if (strpaperId_Social == '') return;
      vPaperEx_EditSubViewPoint(
        strpaperId_Social,
        clsPrivateSessionStorage.topicIdInTree,
        clsPubLocalStorage.idCurrEduCls,
        '02', //知识类型
      );
      // //存放选择id
      // const strUserTypeId = '02';
      // $('#hidUserTypeId').val(strUserTypeId);

      // xadminOpen(
      //   '添加专家观点',
      //   `../GradEduTopic/Pdfiframe?PageType=02&TopicId=${strKeyId}&IdCurrEduCls=${strIdCurrEduCls}`,
      // );
    }
  }

  ///pdf添加个人观点  01
  public btnAddpdfViewPointRela_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      const strpaperId_Social = ResearchTopic_QUDIExB.GetPropValue('paperId_Social');
      console.log('strpaperId_Social:', strpaperId_Social);
      if (strpaperId_Social == '') return;
      vPaperEx_EditSubViewPoint(
        strpaperId_Social,
        clsPrivateSessionStorage.topicIdInTree,
        clsPubLocalStorage.idCurrEduCls,
        '01', //知识类型
      );
      //存放选择id
      // const strUserTypeId = '01';
      // $('#hidUserTypeId').val(strUserTypeId);
      // xadminOpen(
      //   '添加个人观点',
      //   `../GradEduTopic/Pdfiframe?PageType=01&TopicId=${strKeyId}&IdCurrEduCls=${strIdCurrEduCls}`,
      // );
    }
  }
  //维护论文子观点
  public async btnAddpdfPaperSubViewpoint_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;
    //查询主题论文 参数01；
    ResearchTopic_QUDIExB.paperTypeId = '01';
    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      // ShowDialogPaperSubViewpoint();
      // //调用用户列表绑定；

      const strPaperId = GetSelectValueInDivObj(ResearchTopic_QUDIExB.divLayout, 'ddlPaperId_q');
      if (strPaperId == '') return;
      await vPaperEx_EditSubViewPoint(
        strPaperId,
        clsPrivateSessionStorage.topicIdInTree,
        clsPubLocalStorage.idCurrEduCls,
        '07', //知识类型);
      );
    }
  }
  /*
     删除记录的事件函数
    (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnDelRecord_Click)
    */
  public async btnDelResearchTopic_Click() {
    const strThisFuncName = this.btnDelResearchTopic_Click.name;
    //得到选择的topicId
    const strKeyId = this.topicId;

    if (strKeyId == '') {
      alert('请选择需要删除的主题！');
      return;
    } else {
      const objResearchTopic = await ResearchTopic_GetObjByTopicIdAsync(strKeyId);
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
      const strMsg = Format('确定删除主题:[{0}]及所有关联数据吗？', objResearchTopic.topicName);
      if (confirm(strMsg)) {
        await this.btnDelInRecord_Click(strKeyId);
        return true;
      }
      return false;
    }
  }
  /* 删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
  */
  public async btnDelInRecord_Click(strKeyId: string) {
    try {
      //判断登录用户在主题用户中的角色是什么如果是成员，那么则不可以删除主题；
      const strUserId = userStore.getUserId;
      const strWhere = ` 1=1 And topicId='${strKeyId}' And userId='${strUserId}'`;
      const ObjRTUserRelaEN = await RTUserRela_GetFirstObjAsync(strWhere);
      if (ObjRTUserRelaEN != null) {
        if (ObjRTUserRelaEN.topicUserRoleId == '0003') {
          //成员角色；
          const strMsg = `您在当前的主题中角色是成员，不能删除主题`;
          alert(strMsg);
          return;
        } else {
          await this.DelRecordEx(strKeyId);
          //树形数据源；
          //temp await this.GetTopicData();
        }
      } else {
        //成员角色；
        const strMsg = `您不是当前的主题成员，不能删除主题`;
        alert(strMsg);
        return;
      }
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
      const returnInt = await ResearchTopicEx_DelRecordAsyncEx(strTopicId);
      if (returnInt > 0) {
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
        //删除成功后清空主键隐藏id
      } else {
        const strInfo = `当前主题已包含相关关系数据，不能删除!`;
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

  //自研论文
  public btnAddNewgs_PaperRela_Click(objPage: ResearchTopic_QUDIExB) {
    const strKeyId = this.topicId;
    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      //存放选择id
      // xadminOpen(
      //   '添加主题论文',
      //   `../GradEduPublicPage/P_Paper_Edit?PaperLogTypeId=01&TopicId=${strKeyId}`,
      // );
      P_Paper_EditEx.paperLogTypeId = '01';
      P_Paper_EditEx.topicId = strKeyId;
      const objPage_Edit = new P_Paper_EditEx('P_Paper_EditEx', objPage);
      // objPage_Edit.btnAddNewRecordWithMaxId_Click();
      objPage_Edit.PageLoad();
    }
  }
  //小组成员
  public async liUserClick() {
    try {
      try {
        // 使用动态导入加载函数代码块
        // const { myFunction } = await import('./myFunction.ts');
        const { ResearchTopic_QUDIEx_BindGv_vRTUserRela } = await import(
          '@/views/GradEduTopic/ResearchTopic_QUDIExD'
        );

        // 调用加载的函数
        await ResearchTopic_QUDIEx_BindGv_vRTUserRela(this.topicId, this.divLayout);
      } catch (error) {
        console.error('加载函数:[ResearchTopic_QUDIEx_BindGv_vRTUserRela]时出现错误:', error);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题用户列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //申请主题数
  public async Bind_ApplyTopicCount() {
    try {
      //strWhereCond = " 1=1  and idCurrEduCls=" + clsPubLocalStorage.idCurrEduCls;
      let strWhereCond = ' 1=1 ';
      strWhereCond += ` and requesTypeId='02' and receiveUser='${userStore.getUserId}' and isReply=0`;

      const int_ReceiveCount = await sys_RequestPush_GetRecCountByCondAsync(strWhereCond);
      $('#ApplyTopicCount').html(int_ReceiveCount.toString());
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      //alert(strMsg);
      console.log(strMsg);
    }
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortResearchTopicBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortResearchTopicBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortResearchTopicBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortResearchTopicBy');
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

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineResearchTopicCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ` 1 = 1 and TopicId in (select TopicId From RTUserRela Where UserId ='${userStore.getUserId}')`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.topicName_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clsResearchTopicEN.con_TopicName,
          this.topicName_q,
        );
      }
      // if (this.topicContent_q != '') {
      //   strWhereCond += Format(
      //     " And {0} like '%{1}%'",
      //     clsResearchTopicEN.con_TopicContent,
      //     this.topicContent_q,
      //   );
      // }
      // if (this.topicProposePeople_q != '') {
      //   strWhereCond += Format(
      //     " And {0} like '%{1}%'",
      //     clsResearchTopicEN.con_TopicProposePeople,
      //     this.topicProposePeople_q,
      //   );
      // }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineResearchTopicCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
  }

  //动态主题数据结构；
  public async GetTopicData(): Promise<string> {
    const strWhereCond = await this.CombineResearchTopicCondition();
    //声明主题变量

    // const arrResearchTopicObjLst: Array<clsResearchTopicEN> = [];
    //声明主题变量
    let arrCurrEduClsEx: Array<clsCurrEduClsENEx> = [];
    const arrResearchTopicObjLst = await ResearchTopic_GetObjLstAsync(strWhereCond);
    const arrResearchTopicExObjLst = await ResearchTopicEx_GetObjExByLastVisitedDate(
      arrResearchTopicObjLst,
    );

    let arridCurrEduCls = '';
    for (let i = 0; i < arrResearchTopicExObjLst.length; i++) {
      arridCurrEduCls += `${arrResearchTopicExObjLst[i].idCurrEduCls},`;
    }
    if (arridCurrEduCls.length > 0) {
      arridCurrEduCls = arridCurrEduCls.substring(0, arridCurrEduCls.length - 1);

      const strWhereCond2 = `idCurrEduCls in(${arridCurrEduCls}) order by eduClsName Asc`;
      const arrCurrEduClsObjLst = await CurrEduCls_GetObjLstAsync(strWhereCond2);
      const strRoleName = userStore.getRoleName;

      arrCurrEduClsEx = await CurrEduClsEx_GetObjExByLastVisitedDate(arrCurrEduClsObjLst);
      // if (strRoleName.indexOf('学生') == -1) {

      //   const strTeacherId = userStore.getUserId;
      //   await CurrEduClsTeacherEx_SetCurrEduClsOrderNum4TeacherId(
      //     arrCurrEduClsObjLst,
      //     strTeacherId,
      //   );
      //   arrCurrEduClsObjLst = arrCurrEduClsObjLst.sort(CurrEduClsEx_SortFun_IntTag);
      // }
    }
    let strTopicId = '';
    //主题用户关系
    const strWhereCond3 = `UserID ='${userStore.getUserId}'`;
    let arrRTUserRelaObjLst: Array<clsRTUserRelaEN> = [];

    arrRTUserRelaObjLst = await RTUserRela_GetObjLstAsync(strWhereCond3);

    //$("#TreeBind li").remove();
    const strUserId = userStore.getUserId;
    // console.log(arrRTUserRelaObjLst, strUserId);
    if (arrCurrEduClsEx.length > 0) {
      //判断如果存在00000050私有教学班，但是没有私有主题，则默认添加一个默认主题
      const objCurrEduCls = arrCurrEduClsEx.find((x) => x.idCurrEduCls == '00000050');
      if (objCurrEduCls != null) {
        //有这个教学班，那么查询是否有这个教学班的私有主题，没有则默认添加一个(01代表私有)
        const strWhereCond = ` 1=1 And idCurrEduCls = '00000050' And updUser = '${strUserId}' And shareId = '01'`;
        const objResearchTopicEN = await ResearchTopic_GetFirstObjAsync(strWhereCond);
        if (objResearchTopicEN != null) {
          console.log('已有私有主题');
          //主题菜单树展示
          strTopicId = await this.ShowResearchTopicTree(
            ResearchTopic_QUDIExB.divLayout,
            arrCurrEduClsEx,
            arrResearchTopicExObjLst,
            arrRTUserRelaObjLst,
            clsPubLocalStorage.idCurrEduCls,
          );
        } else {
          //没有则添加一个
          //没有主题就默认添加一天主题数据；
          //temp await this.AddPrivateTopic();
        }
      } else {
        //主题菜单树展示
        // await this.ShowResearchTopicTree(
        //   ResearchTopic_QUDIExB.divLayout,
        //   arrCurrEduClsObjLst,
        //   arrResearchTopicObjLst0,
        //   arrRTUserRelaObjLst,
        //   clsPubLocalStorage.idCurrEduCls,
        // );

        await this.ShowResearchTopicTree(
          ResearchTopic_QUDIExB.divLayout,
          arrCurrEduClsEx,
          arrResearchTopicExObjLst,
          arrRTUserRelaObjLst,
          clsPubLocalStorage.idCurrEduCls,
        );
      }
    }
    return strTopicId;
  }

  //主题菜单树的展示
  public async ShowResearchTopicTree(
    divLayout: HTMLDivElement,
    arrCurrEduClsObjLst: Array<clsCurrEduClsENEx>,
    arrResearchTopicObjLst0: Array<clsResearchTopicENEx>,
    arrRTUserRelaObjLst: Array<clsRTUserRelaEN>,
    strIdCurrEduCls: string,
  ): Promise<string> {
    let strTopicId = '';
    let strhtml = '';
    const arrResearchTopicObjLst00 = arrResearchTopicObjLst0.filter(
      (x) => x.idCurrEduCls == strIdCurrEduCls,
    );
    if (arrResearchTopicObjLst00.length > 0) {
      strTopicId = arrResearchTopicObjLst00[0].topicId;
    }
    //如果私有教学班没有 则直接显示；
    for (let j = 0; j < arrCurrEduClsObjLst.length; j++) {
      //strIdCurrEduclsstreduClsName = arrCurrEduClsObjLst[j].eduClsName;
      //if (streduClsName.length > 5) {
      //    streduClsName = streduClsName.substring(0, 5) + "...";
      //}
      let htmleduClsName = '';
      const strEduClsTypeId = arrCurrEduClsObjLst[j].eduClsTypeId;
      //如果是公共私有教学班那么就不显示
      if (strEduClsTypeId == '0001') {
        htmleduClsName += `<a href="javascript:void(0)" id="${arrCurrEduClsObjLst[j].idCurrEduCls}" class="main" title="私有研究" onclick=main_Click("${arrCurrEduClsObjLst[j].idCurrEduCls}")>私有研究</a>`;
      } else {
        htmleduClsName += `<a href="javascript:void(0)" id="${arrCurrEduClsObjLst[j].idCurrEduCls}" class="main" title="${arrCurrEduClsObjLst[j].eduClsName}" onclick=main_Click("${arrCurrEduClsObjLst[j].idCurrEduCls}")>${arrCurrEduClsObjLst[j].eduClsName}</a>`;
      }

      strhtml += '<li class="li">';
      strhtml += htmleduClsName;
      //strhtml += '<ul class="submenu" style="display: block;">';
      strhtml += `<ul class="submenu" id="ul${arrCurrEduClsObjLst[j].idCurrEduCls}">`;

      const arrResearchTopicObjLst = arrResearchTopicObjLst0.filter(
        (x) => x.idCurrEduCls == arrCurrEduClsObjLst[j].idCurrEduCls,
      );

      if (arrResearchTopicObjLst.length > 0) {
        //循环数据

        for (let i = 0; i < arrResearchTopicObjLst.length; i++) {
          const objResearchTopic = arrResearchTopicObjLst[i];
          let strTopicName = objResearchTopic.topicName;
          if (strTopicName.length > 15) {
            strTopicName = `<span>${strTopicName.substring(0, 15)}...</span>`;
          }
          // o1nclick=btnSelectResearchTopic("${objResearchTopic.topicId}","${objResearchTopic.idCurrEduCls}","${objResearchTopic.topicName}","${strEduClsTypeId}")
          const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          strhtml += `<li id="li${objResearchTopic.topicId}" keyId="${strKeyId}" >`;
          //默认存放第一条数据显示；

          //根据主题用户关系得到当前主题和登录用户之间的身份信息
          let strIcon = '';
          const objRTUserRela = arrRTUserRelaObjLst.find(
            (x) => x.topicId == objResearchTopic.topicId,
          );
          if (objRTUserRela != null) {
            switch (objRTUserRela.topicUserRoleId) {
              case '0001':
                strIcon +=
                  '&nbsp;<i class="layui-icon layui-icon-group" style = "font-size: 16px; color: red;" title="指导者" ></i>';
                break;
              case '0002':
                strIcon +=
                  '&nbsp;<i class="layui-icon layui-icon-friends" style = "font-size:16px; color: #F4606C;" title="组长" ></i>';
                break;
              case '0003':
                strIcon +=
                  '&nbsp;<i class="layui-icon layui-icon-username" style = "font-size: 16px; color: #19CAAD;" title="成员" ></i>';
                break;
            }
          } else {
            strIcon +=
              '&nbsp;<i class="layui-icon layui-icon-set" style = "font-size: 16px; color: #1E9FFF;" title="管理" ></i>';
          }

          //if (i == 0) {
          //判断存放的id控件是否为空；
          if (IsNullOrEmpty(strTopicId) == true) {
            //存放Id
            ResearchTopic_QUDIExB.topicId = objResearchTopic.topicId;

            clsPubLocalStorage.idCurrEduCls = objResearchTopic.idCurrEduCls;
            $('#topicName', window.parent.document).html(objResearchTopic.topicName);
            clsPubLocalStorage.eduClsTypeId = strEduClsTypeId;

            strhtml += `<a href="javascript:void(0)" title="${objResearchTopic.topicName}" class="selected">${strTopicName}${strIcon}</a>`;
          } else {
            strhtml += `<a href="javascript:void(0)" title="${objResearchTopic.topicName}">${strTopicName}${strIcon}</a>`;
          }

          strhtml += '</li>';
        }
      }
      strhtml += '</ul>';
      strhtml += '</li>';
    }

    const TreeBind = GetUlObjInDivObj(divLayout, 'TreeBind');
    TreeBind.innerHTML = strhtml;
    this.SetEventForTopicTree();
    ////首次调用树展开；
    //给每一个教学班前的图标展示位展开状态
    //LoadTreeShow(arrCurrEduClsObjLst[j].idCurrEduCls);
    ////调用关系列表数据
    $('#hidEduClsTypeId').val(clsPubLocalStorage.eduClsTypeId);

    //temp
    if (IsNullOrEmpty(strTopicId)) {
      message.warning('在树中没有选中的主题！');
      return '';
    }
    await this.GetAllFunctionMethod(strTopicId);
    return strTopicId;
  }

  public SetEventForTopicTree() {
    {
      const arrLiLst = GetLiObjLstInDivObj(this.divLayout, '');
      for (const btnSelectResearchTopic of arrLiLst) {
        if (btnSelectResearchTopic != null) {
          const strKeyId = btnSelectResearchTopic.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 4) continue;
          const objData = {
            topicId: arr[0],
            idCurrEduCls: arr[1],
            topicName: arr[2],
            eduClsTypeId: arr[3],
          };

          (function (objData: any) {
            btnSelectResearchTopic.onclick = function () {
              ResearchTopic_QUDIExB.vuebtn_Click('SelectResearchTopic', objData);
            };
          })(objData);
        }
      }
    }
  }
  //删除主题用户关系
  public async btnDelUserRelaRecordInTab_Click(
    strTopicId: string,
    strUserId0: string,
  ): Promise<boolean> {
    try {
      if (strTopicId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return false;
      }
      const strUserId = userStore.getUserId;
      const objdelRtUsersEN = await RTUserRelaEx_GetObjByTopicIdAndUserId(strTopicId, strUserId0);
      if (objdelRtUsersEN == null) return false;
      const lngKeyId = objdelRtUsersEN.mId;

      //const strWhereCond = ` 1=1 And ${clsRTUserRelaEN.con_TopicId} = '${strTopicId}' And ${clsRTUserRelaEN.con_UserId} ='${strUserId}'`;
      // const strWhereCond = ` 1=1 And ${clsRTUserRelaEN.con_mId} = '${lngKeyId}'`;
      //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；

      const objvRTUserRela_Cond: clsvRTUserRelaEN = new clsvRTUserRelaEN();
      objvRTUserRela_Cond.SetCondFldValue(clsvRTUserRelaEN.con_TopicId, strTopicId, '=');

      const arrRtUsersEN: Array<clsvRTUserRelaEN> = await vRTUserRela_GetSubObjLstCache(
        objvRTUserRela_Cond,
        strUserId,
      );
      if (arrRtUsersEN.length > 0) {
        if (arrRtUsersEN[0].topicUserRoleId == '0003') {
          //成员
          const strMsg = `您当前是成员不能删除数据！`;
          alert(strMsg);
          return false;
        } else {
          if (objdelRtUsersEN.userId == strUserId) {
            //自己不能删除自己
            const strMsg = `自己不能删除自己！`;
            alert(strMsg);
            return false;
          } else {
            //指导员0001 //组长0002
            const bolResult = await this.DelUserRelaRecord(lngKeyId);
            RTUserRela_ReFreshCache(strUserId0);
            if (bolResult == false) return false;
            await this.btnReOrder_Click();
          }
        }
      }
      return true;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
      return false;
    }
  }
  /*
重序
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
*/
  public async btnReOrder_Click() {
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        topicId: ResearchTopic_QUDIExB.topicId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await RTUserRela_ReOrderAsync(objOrderByData);
      RTUserRela_ReFreshCache(clsPrivateSessionStorage.topicIdInTree);
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    //绑定主题用户关系；
    //temp this.BindGv_vRTUserRela();
  }
  //主题用户色码修改
  public async btnUpdateUserRelaInTab_Click(
    strTopicId: string,
    strUserId0: string,
    strRoleId: string,
  ) {
    //判断主题id
    let arrgs_ColorObjLst: Array<clsgs_ColorEN> = [];

    // const strLoginUserId = userStore.getUserId;
    if (IsNullOrEmpty(clsPrivateSessionStorage.topicIdInTree) == true) {
      return;
    }
    //拼接后再调用下拉框绑定；
    //获取用户角色表
    const arrTopicUserRoleObjLst = await TopicUserRole_GetObjLstCache();
    const objvGetRtUsersEN = await vRTUserRelaEx_GetObjByTopicIdAndUserId(strTopicId, strUserId0);
    if (objvGetRtUsersEN == null) return false;
    const lngKeyId = objvGetRtUsersEN.mId;

    //const objvGetRtUsersEN: clsvRTUserRelaEN = await vRTUserRela_GetObjBymIdAsync(lngKeyId);
    // const objvGetRtUsersEN = await vRTUserRela_GetObjBymIdCache(
    //   lngKeyId,
    //   userStore.getUserId,
    // );
    if (objvGetRtUsersEN != null) {
      const strTopicRoleId = objvGetRtUsersEN.topicUserRoleId;
      const strColorId = objvGetRtUsersEN.colorId;
      //存入老色码块
      $('#hidOldColorCode').val(objvGetRtUsersEN.colorCode);
      $('#hidUpdUserId').val(objvGetRtUsersEN.userId);
      //if (objGetRtUsersEN.userId == strLoginUserId) {
      //只要

      ResearchTopic_QUDIExB.vuebtn_Click('ShowUserColor', '');
      const strColor = '';
      const strWhereCond = ` 1=1 And colorId not in (select colorId from RTUserRela where topicId='${ResearchTopic_QUDIExB.topicId}' And colorId != '${strColor}')`;
      arrgs_ColorObjLst = await gs_Color_GetObjLstAsync(strWhereCond);

      let strhtml = '';
      // const strUserId = userStore.getUserId;
      strhtml += '<div class="info" id="infogsColor">';
      // onclick=btnOkUserColor_Click("${strColorId}")
      const strKeyId = `${strColorId}|${objvGetRtUsersEN.userId}`;
      strhtml += `<button id="btnOkUserColor" keyId="${strKeyId}" title="点击确定" class="layui-btn layui-btn btn-sm"  >确定</button>`;
      strhtml += '<div class="title btn-4" style="float:left;margin-top:-10px;">';
      //判断当前用户角色，如果是成员，那么不能修改角色、只有组长和指导员才可以修改；
      if (strRoleId != '0003') {
        strhtml +=
          '<select id="ddlRtUserRole" name="ddlRtUserRole" class="form-control" style="width:180px;">';
      } else {
        strhtml +=
          '<select id="ddlRtUserRole" name="ddlRtUserRole" class="form-control" style="width:180px;" disabled="disabled">';
      }
      //如果大于0 则绑定下拉框
      if (arrTopicUserRoleObjLst.length > 0) {
        for (let j = 0; j < arrTopicUserRoleObjLst.length; j++) {
          // const strRoleId0 = arrTopicUserRoleObjLst[j].topicUserRoleId;
          //如果循环的ID等于当前修改的ID则选中
          if (arrTopicUserRoleObjLst[j].topicUserRoleId == strTopicRoleId) {
            strhtml += `<option value="${strRoleId}">${arrTopicUserRoleObjLst[j].topicUserRoleName}</option>`;
          } else {
            strhtml += `<option value="${strRoleId}">${arrTopicUserRoleObjLst[j].topicUserRoleName}</option>`;
          }
        }
        //strhtml += '<option value="0001">指导者</option><option value="0002">组长</option><option value="0003">成员</option></select>';
      }

      //strhtml += '<option value="0001">指导者</option><option value="0002">组长</option><option value="0003">成员</option></select>';
      strhtml += '</select></div><ul class="artlist">';
      // let v = 0; //给内容加个序号
      for (let i = 0; i < arrgs_ColorObjLst.length; i++) {
        //得到mId；
        const strColorId = arrgs_ColorObjLst[i].colorId;
        const strUserColor = arrgs_ColorObjLst[i].colorCode;
        // v++;

        strhtml += '<li>';
        // onclick=btnOkUserColor_Click("${strcolorId}")
        const strKeyId = `${strColorId}|${objvGetRtUsersEN.userId}`;
        strhtml += `<button id="btnOkUserColor" keyId="${strKeyId}" style="background:${strUserColor};" title="点击选择" class="layui-btn layui-btn"  ></button>`;
        strhtml += '</li>';

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      }
      strhtml += '</ul></div>';

      //拼接；
      $('#divUserColorDataLst').html(strhtml);
      this.RtUserRoleId = objvGetRtUsersEN.topicUserRoleId;
      this.SetEventForUserColor(this.divLayout);
    }
  }
  public SetEventForUserColor(objLayOut: HTMLDivElement) {
    {
      const arrbtnAddToCurrTopicId = GetButtonObjLstInDivObjN(objLayOut, 'btnOkUserColor');
      for (const btnOkUserColor of arrbtnAddToCurrTopicId) {
        if (btnOkUserColor != null) {
          const strKeyId = btnOkUserColor.getAttribute('keyid');

          if (strKeyId != null) {
            const strTopicId = clsPrivateSessionStorage.topicIdInTree;

            btnOkUserColor.setAttribute('keyId2', strKeyId);

            const arr = strKeyId.split('|');
            if (arr.length != 2) continue;

            const objData = { userColor: arr[0], userId: arr[1] };
            (function (objData) {
              btnOkUserColor.onclick = function () {
                ResearchTopic_QUDIExB.vuebtn_Click('OkUserColor', objData);
              };
            })(objData);
          }
        }
      }
    }
  }
  //确定选择色码，把色码更新到主题用户关系表；
  public async btnOkUserColor_Click(strcolorId: string, strUserId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.btnOkUserColor_Click.name;

    const strKeyId = GetInputValueInDivObj(divName, 'hidTopicUserId');

    const objRTUserRelaEN: clsRTUserRelaEN = new clsRTUserRelaEN();
    objRTUserRelaEN.SetmId(Number(strKeyId));
    objRTUserRelaEN.SetColorId(strcolorId);
    objRTUserRelaEN.SetUserId(strUserId);
    objRTUserRelaEN.SetTopicUserRoleId(this.RtUserRoleId);
    objRTUserRelaEN.SetTopicId(clsPrivateSessionStorage.topicIdInTree);

    objRTUserRelaEN.sfUpdFldSetStr = objRTUserRelaEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objRTUserRelaEN.mId == 0 || objRTUserRelaEN.mId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await RTUserRela_UpdateRecordAsync(objRTUserRelaEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        RTUserRela_ReFreshCache(clsPrivateSessionStorage.topicIdInTree);
        ResearchTopic_QUDIExB.vuebtn_Click('HideUserColor', '');
        //temp  this.BindGv_vRTUserRela();

        //const objvGetRtUsersEN: clsvRTUserRelaEN = await vRTUserRela_GetObjBymIdAsync(strKeyId);
        const objvGetRtUsersEN = await vRTUserRela_GetObjBymIdCache(
          objRTUserRelaEN.mId,
          userStore.getUserId,
        );
        if (objvGetRtUsersEN != null) {
          const OldColorCode = GetInputValueInDivObj(divName, 'hidOldColorCode');
          //得到新的色码块
          $('#hidNewColorCode').val(objvGetRtUsersEN.colorCode);
          //得到修改的用户Id
          const strUserId = GetInputValueInDivObj(divName, 'hidUpdUserId');

          const OldColor = OldColorCode.substring(1, OldColorCode.length);
          const NewColor = objvGetRtUsersEN.colorCode.substring(
            1,
            objvGetRtUsersEN.colorCode.length,
          );

          //调用更改当前用户所涉及的所有表背景
          RTUserRelaEx_UpdateTypeTableHtmlAsync(OldColor, NewColor, strUserId);
        }
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
  /*
   *  修改主题用户角色
   */
  public set RtUserRoleId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlRtUserRole', value);
  }
  /*
   * 修改主题用户角色
   */
  public get RtUserRoleId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlRtUserRole');
  }

  /* 
根据关键字删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelUserRelaRecord(lngmId: number): Promise<boolean> {
    try {
      const returnInt: number = await RTUserRela_DelRecordAsync(lngmId);
      if (returnInt > 0) {
        RTUserRela_ReFreshCache(clsPrivateSessionStorage.topicIdInTree);
        //绑定列表
        //temp    this.BindGv_vRTUserRela();
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
        return true;
      } else {
        const strInfo = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
        return false;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
      return false;
    }
  }
  //得到3个关系列表数据；
  public async GetAllFunctionMethod(strTopicId: string) {
    const strThisFuncName = this.GetAllFunctionMethod.name;
    const divName = this.getDivName(enumDivType.LayOut_01);
    ResearchTopic_QUDIExB.topicId = strTopicId;

    await ResearchTopicEx_SetIdCurrEduCls(strTopicId);
    gs_TopicRoleCRUDExB_TopicMenuIsHide();
    clsPubLocalStorage.eduClsTypeId = GetInputValueInDivObj(divName, 'hidEduClsTypeId');

    $('#divContent_list').show();
    //如果是点击了树菜单、或者是刷新，那么需要做样式控制；
    //首先要去掉ul下 li a 样式
    //$("#myTab li a").removeClass();
    //$("#myTab li").removeClass();
    //判断根据序号显示不同的数据源
    // const1 strnum = GetInputValueInDivObj(divName, 'h1idTabNum');
    const strActiveTabId = this.activeTabId;
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    let strMsg = '';
    let divRtUserRelaDataLst;
    switch (strActiveTabId) {
      case enumResearchTopicTabs.liUser: // '1':
        divRtUserRelaDataLst = GetDivObjInDivObjN(objLayOut, 'divRtUserRelaDataLst');
        if (divRtUserRelaDataLst == null) {
          setTimeout(() => {
            this.GetAllFunctionMethod(strTopicId);
          }, 200);
        }
        //主题用户关系；
        // this.BindGv_vRTUserRela();
        try {
          // 使用动态导入加载函数代码块
          // const { myFunction } = await import('./myFunction.ts');
          const { ResearchTopic_QUDIEx_BindGv_vRTUserRela } = await import(
            '@/views/GradEduTopic/ResearchTopic_QUDIExD'
          );

          // 调用加载的函数
          await ResearchTopic_QUDIEx_BindGv_vRTUserRela(strTopicId, this.divLayout);
        } catch (error) {
          console.error('加载函数:[ResearchTopic_QUDIEx_BindGv_vRTUserRela]时出现错误:', error);
        }
        break;
      case enumResearchTopicTabs.liPaper: // '2':
        //主题论文关系；
        liPaperClick('01', this.divLayout);
        break;
      case enumResearchTopicTabs.liViewpoint: //'3':
        //主题个人观点关系；
        await liViewsClassificationClick(enumgs_KnowledgeType.PersonalOpinion_01, this.divLayout);
        ResearchTopic_QUDIExB.gsKnowledgeTypeId = enumgs_KnowledgeType.PersonalOpinion_01;
        liViewpointClick(this.divLayout);
        //this.BindGv_vRTViewpointRela();
        break;
      case enumResearchTopicTabs.liExpertViewpoint: //'4':
        //专家观点
        await liViewsClassificationClick(enumgs_KnowledgeType.ExpertOpinion_02, this.divLayout);
        ResearchTopic_QUDIExB.gsKnowledgeTypeId = enumgs_KnowledgeType.ExpertOpinion_02;
        liExpertViewpointClick(this.divLayout);
        //this.BindGv_vRTExpertViewpointRela();
        break;
      case enumResearchTopicTabs.liConcept:
        //主题概念关系
        await liViewsClassificationClick(enumgs_KnowledgeType.Concept_03, this.divLayout);
        ResearchTopic_QUDIExB.gsKnowledgeTypeId = enumgs_KnowledgeType.Concept_03;
        liConceptClick(this.divLayout);
        //this.BindGv_vRTConceptRela();
        break;
      case enumResearchTopicTabs.liObjective:
        //客观事实关系
        await liViewsClassificationClick(enumgs_KnowledgeType.ObjectiveFact_04, this.divLayout);
        ResearchTopic_QUDIExB.gsKnowledgeTypeId = enumgs_KnowledgeType.ObjectiveFact_04;
        liObjectiveFactClick(this.divLayout);
        //this.BindGv_vRTTopicObjectiveRela();
        break;
      case enumResearchTopicTabs.liObjectiveBasis:
        //客观依据关系
        await liViewsClassificationClick(enumgs_KnowledgeType.ObjectiveData_05, this.divLayout);
        ResearchTopic_QUDIExB.gsKnowledgeTypeId = enumgs_KnowledgeType.ObjectiveData_05;
        liObjectiveBasisClick(this.divLayout);
        //this.BasisBindGv_vRTTopicObjectiveRela();
        break;
      //case "8":
      //    //研究结果
      //    this.BindGv_vRTResearchResult();
      //    break;
      case enumResearchTopicTabs.liSysskill:
        //技能
        await liViewsClassificationClick(enumgs_KnowledgeType.Skill_06, this.divLayout);
        ResearchTopic_QUDIExB.gsKnowledgeTypeId = enumgs_KnowledgeType.Skill_06;
        liSysskillClick(this.divLayout);
        //this.BindGv_vRTSysSkill();
        break;
      case enumResearchTopicTabs.liSysSocialRela: // '10':
        //社会关系
        await liViewsClassificationClick(
          enumgs_KnowledgeType.SocialRelationships_07,
          this.divLayout,
        );
        ResearchTopic_QUDIExB.gsKnowledgeTypeId = enumgs_KnowledgeType.SocialRelationships_07;
        liSysSocialRelationsClick(this.divLayout);
        break;
      case enumResearchTopicTabs.liResearchPlan: //'11':
        //研究计划
        //this.BindGv_vgs_ResearchPlan();
        // liTeacherTaskClick(objLayOut);
        liResearchPlanClick(this.divLayout);
        break;
      case enumResearchTopicTabs.liResearchTask: //'11':
        //研究计划
        //this.BindGv_vgs_ResearchPlan();
        liTeacherTaskClick(objLayOut);
        // liResearchPlanClick();
        break;
      case enumResearchTopicTabs.liOriginalPaper:
        //小组论文习作
        liPaperClick('02', this.divLayout);
        break;
      case enumResearchTopicTabs.ligs_ReflectLog: // '13':
        //反思日志
        ligs_ReflectLog(this.divLayout);
        break;
      case '14':
        break;
      case enumResearchTopicTabs.liSubViewpoint:
        //论文子观点
        liPaperSubViewpoint(this.divLayout);
        break;
      case enumResearchTopicTabs.liMeetingMinutes: //'16':
        //会议纪要
        liMeetingMinutesClick(this.divLayout);
        break;
      case enumResearchTopicTabs.liPaperReport: // '17':
        //论文汇报
        liPaperReportClick(this.divLayout);
        break;
      case enumResearchTopicTabs.liTobeStudiedProblem: // '18':
        //待研究问题
        liTobeStudiedProblemClick(this.divLayout);
        break;
      case enumResearchTopicTabs.liResearchResult: //'19':
        //研究成果
        liResearchResultClick(this.divLayout);
        break;
      default:
        // try {
        //   // 使用动态导入加载函数代码块
        //   // const { myFunction } = await import('./myFunction.ts');
        //   const { ResearchTopic_QUDIEx_BindGv_vRTUserRela } = await import(
        //     '@/views/GradEduTopic/ResearchTopic_QUDIExD'
        //   );

        //   // 调用加载的函数
        //   await ResearchTopic_QUDIEx_BindGv_vRTUserRela();
        // } catch (error) {
        //   console.error('加载函数:[ResearchTopic_QUDIEx_BindGv_vRTUserRela]时出现错误:', error);
        // }
        strMsg = `ActiveTabId:[${strActiveTabId}]在switcch中没有被处理。(in ${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public get idCurrEduCls(): string {
    return ResearchTopic_QUDIExB.GetPropValue('idCurrEduCls');
  }
  public get activeTabId(): string {
    return ResearchTopic_QUDIExB.GetPropValue('activeTabId');
  }

  public get topicId(): string {
    return ResearchTopic_QUDIExB.GetPropValue('topicId');
  }
}

export function liPaperClick(strKeyId: string, divLayout: HTMLDivElement) {
  let strnum = '';
  if (strKeyId == '01') {
    strnum = '2';
  } else {
    strnum = '12';
  }

  ResearchTopic_QUDIExB.paperTypeId = strKeyId;
  // $('#h1idTabNum').val(strnum);
  const objPage0 = new ResearchTopic_QUDIExB(divLayout);
  const objLayOut = objPage0.getDivName(enumDivType.LayOut_01);
  let divRtPaperRela;
  if (objLayOut == null) return;
  let bolIsSelfWrite = false;
  if (strKeyId == '02') {
    bolIsSelfWrite = true;
    divRtPaperRela = GetDivObjInDivObjN(objLayOut, 'divRtPaperRela_OriginalPaper');
  } else {
    divRtPaperRela = GetDivObjInDivObjN(objLayOut, 'divRtPaperRela');
  }
  if (divRtPaperRela == null) {
    setTimeout(() => {
      liPaperClick(strKeyId, divLayout);
    }, 100);
  } else {
    // RTPaperRelaCRUD.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;
    const objPage = new RTPaperRelaListInEx(divLayout);
    objPage.liPaperClick(divRtPaperRela, bolIsSelfWrite);
  }
}

//个人观点
export async function liViewpointClick(divLayout: HTMLDivElement) {
  const divRtViewPointRela = GetDivObjInDivObjN(divLayout, 'divRtViewPointRela');

  if (divRtViewPointRela == null) {
    setTimeout(() => {
      liViewpointClick(divLayout);
    }, 100);
  } else {
    ClearClassificationTitle();
    await liViewsClassificationClick(enumgs_KnowledgeType.PersonalOpinion_01, divRtViewPointRela);
    ResearchTopic_QUDIExB.gsKnowledgeTypeId = enumgs_KnowledgeType.PersonalOpinion_01;
    ResearchTopicViewpointEx.GetPropValue = ResearchTopic_QUDIExB.GetPropValue;
    ResearchTopicViewpointEx.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;

    const objPage = new ResearchTopicViewpointEx(divLayout);
    objPage.liViewpointClick(divRtViewPointRela);
  }
}

export function ClearClassificationTitle() {
  // $('#hidEditClassificationId').val('0');
  // $('#ArrangeClassificationTitle1').html('');
  // $('#ArrangeClassificationTitle2').html('');
  // $('#ArrangeClassificationTitle3').html('');
  // $('#ArrangeClassificationTitle4').html('');
  // $('#ArrangeClassificationTitle5').html('');
  // $('#ArrangeClassificationTitle6').html('');
  // $('#ArrangeClassificationTitle7').html('');
}

//专家观点
export async function liExpertViewpointClick(divLayout: HTMLDivElement) {
  const divRtViewPointRelaExpert = GetDivObjInDivObjN(divLayout, 'divRtViewPointRelaExpert');

  if (divRtViewPointRelaExpert == null) {
    setTimeout(() => {
      liExpertViewpointClick(divLayout);
    }, 100);
  } else {
    ClearClassificationTitle();
    await liViewsClassificationClick(
      enumgs_KnowledgeType.ExpertOpinion_02,
      divRtViewPointRelaExpert,
    );
    ResearchTopic_QUDIExB.gsKnowledgeTypeId = enumgs_KnowledgeType.ExpertOpinion_02;
    ResearchTopicViewpointEx.GetPropValue = ResearchTopic_QUDIExB.GetPropValue;
    ResearchTopicViewpointEx.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;

    const objPage = new ResearchTopicViewpointEx(divLayout);
    objPage.liExpertViewpointClick(divRtViewPointRelaExpert);
  }
}

//相关概念
export async function liConceptClick(divLayout: HTMLDivElement) {
  const divRtConceptRela = GetDivObjInDivObjN(divLayout, 'divRtConceptRela');

  if (divRtConceptRela == null) {
    setTimeout(() => {
      liConceptClick(divLayout);
    }, 100);
  } else {
    ClearClassificationTitle();
    await liViewsClassificationClick(enumgs_KnowledgeType.Concept_03, divRtConceptRela);
    ResearchTopic_QUDIExB.gsKnowledgeTypeId = enumgs_KnowledgeType.Concept_03;
    ResearchTopicConceptEx.GetPropValue = ResearchTopic_QUDIExB.GetPropValue;
    ResearchTopicConceptEx.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;

    const objPage = new ResearchTopicConceptEx(divLayout);
    objPage.liConceptClick(divRtConceptRela);
  }
}

//客观事实
export async function liObjectiveFactClick(divLayout: HTMLDivElement) {
  const divRtTopicObjectiveRela = GetDivObjInDivObjN(divLayout, 'divRtTopicObjectiveRela');

  if (divRtTopicObjectiveRela == null) {
    setTimeout(() => {
      liObjectiveFactClick(divLayout);
    }, 100);
  } else {
    ClearClassificationTitle();
    await liViewsClassificationClick(
      enumgs_KnowledgeType.ObjectiveFact_04,
      divRtTopicObjectiveRela,
    );
    ResearchTopic_QUDIExB.gsKnowledgeTypeId = enumgs_KnowledgeType.ObjectiveFact_04;
    ResearchTopicObjectiveEx.GetPropValue = ResearchTopic_QUDIExB.GetPropValue;
    ResearchTopicObjectiveEx.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;

    const objPage = new ResearchTopicObjectiveEx(divLayout);
    objPage.liObjectiveFactClick(divRtTopicObjectiveRela);
  }
}
//客观数据
export async function liObjectiveBasisClick(divLayout: HTMLDivElement) {
  const divRtTopicObjectiveRelaBasis = GetDivObjInDivObjN(
    divLayout,
    'divRtTopicObjectiveRelaBasis',
  );
  if (divRtTopicObjectiveRelaBasis == null) {
    setTimeout(() => {
      liObjectiveBasisClick(divLayout);
    }, 100);
  } else {
    ClearClassificationTitle();
    await liViewsClassificationClick(
      enumgs_KnowledgeType.ObjectiveData_05,
      divRtTopicObjectiveRelaBasis,
    );
    ResearchTopic_QUDIExB.gsKnowledgeTypeId = enumgs_KnowledgeType.ObjectiveData_05;
    ResearchTopicObjectiveEx.GetPropValue = ResearchTopic_QUDIExB.GetPropValue;
    ResearchTopicObjectiveEx.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;

    const objPage = new ResearchTopicObjectiveEx(divLayout);
    objPage.liObjectiveBasisClick(divRtTopicObjectiveRelaBasis);
  }
}

//技能
export async function liSysskillClick(divLayout: HTMLDivElement) {
  const divRtSysskillRela1 = GetDivObjInDivObjN(divLayout, 'divRtSysskillRela1');

  if (divRtSysskillRela1 == null) {
    setTimeout(() => {
      liSysskillClick(divLayout);
    }, 100);
  } else {
    ClearClassificationTitle();
    await liViewsClassificationClick(enumgs_KnowledgeType.Skill_06, divRtSysskillRela1);
    ResearchTopic_QUDIExB.gsKnowledgeTypeId = enumgs_KnowledgeType.Skill_06;
    ResearchTopicSysskillEx.GetPropValue = ResearchTopic_QUDIExB.GetPropValue;
    ResearchTopicSysskillEx.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;

    const objPage = new ResearchTopicSysskillEx(divLayout);
    objPage.liSysskillClick(divRtSysskillRela1);
  }
}

//社会关系
export async function liSysSocialRelationsClick(divLayout: HTMLDivElement) {
  const divRtSysSocialRelaRela = GetDivObjInDivObjN(divLayout, 'divRtSysSocialRelaRela');

  if (divRtSysSocialRelaRela == null) {
    setTimeout(() => {
      liSysSocialRelationsClick(divLayout);
    }, 100);
  } else {
    ClearClassificationTitle();
    await liViewsClassificationClick(
      enumgs_KnowledgeType.SocialRelationships_07,
      divRtSysSocialRelaRela,
    );
    ResearchTopic_QUDIExB.gsKnowledgeTypeId = enumgs_KnowledgeType.SocialRelationships_07;
    ResearchTopicSysSocialRelaEx.GetPropValue = ResearchTopic_QUDIExB.GetPropValue;
    ResearchTopicSysSocialRelaEx.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;

    const objPage = new ResearchTopicSysSocialRelaEx(divLayout);
    objPage.liSysSocialRelationsClick(divRtSysSocialRelaRela);
  }
}

//教师布置任务
export function liTeacherTaskClick(objLayOut: HTMLDivElement) {
  const divName = GetDivObjInDivObj(objLayOut, 'divDataLst4gs_TeacherTask');
  gs_TeacherTaskCRUDEx.divLayOut = objLayOut;
  gs_TeacherTaskCRUDEx.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;
  const objPage = new gs_TeacherTaskCRUDEx(objLayOut);
  objPage.liTeacherTaskClick(objLayOut, divName);
}

//研究计划
export function liResearchPlanClick(divLayout: HTMLDivElement) {
  const objPage0 = new ResearchTopic_QUDIExB(divLayout);
  const objLayOut = objPage0.getDivName(enumDivType.LayOut_01);
  if (objLayOut == null) return;
  ResearchTopicPlanEx.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;
  const divResearchPlan = GetDivObjInDivObjN(objLayOut, 'divResearchPlan');
  if (divResearchPlan == null) {
    setTimeout(() => {
      liResearchPlanClick(objLayOut);
    }, 100);
  } else {
    const objPage = new ResearchTopicPlanEx(objLayOut);

    objPage.liResearchPlanClick(objLayOut, 'divPager4ResearchPlan');

    // liTeacherTaskClick(objLayOut);
  }
} //研究任务
export function liResearchTaskClick(divLayout: HTMLDivElement) {
  const objPage0 = new ResearchTopic_QUDIExB(divLayout);
  const objLayOut = objPage0.getDivName(enumDivType.LayOut_01);
  if (objLayOut == null) return;
  ResearchTopicPlanEx.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;
  const divPager4gs_TeacherTask = GetDivObjInDivObjN(objLayOut, 'divPager4gs_TeacherTask');
  if (divPager4gs_TeacherTask == null) {
    setTimeout(() => {
      liResearchTaskClick(objLayOut);
    }, 100);
  } else {
    // const objPage = new ResearchTopicPlanEx();

    // objPage.liResearchPlanClick(objLayOut, 'divPager4gs_TeacherTask');

    liTeacherTaskClick(objLayOut);
  }
}

//反思日志
export function ligs_ReflectLog(divLayout: HTMLDivElement) {
  const objPage0 = new ResearchTopic_QUDIExB(divLayout);
  const objLayOut = objPage0.getDivName(enumDivType.LayOut_01);
  if (objLayOut == null) return;
  gs_ReflectLogCRUDEx.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;

  const divPager4gsReflectLog = GetDivObjInDivObjN(objLayOut, 'divPager4gsReflectLog');
  if (divPager4gsReflectLog == null) {
    setTimeout(() => {
      ligs_ReflectLog(objLayOut);
    }, 100);
  } else {
    const objPage = new gs_ReflectLogCRUDEx(objLayOut);
    objPage.BindGv_gs_ReflectLog(objLayOut);
  }
}

//论文子观点
export async function liPaperSubViewpoint(divLayout: HTMLDivElement): Promise<boolean> {
  const objPage0 = new ResearchTopic_QUDIExB(divLayout);
  const objLayOut = objPage0.getDivName(enumDivType.LayOut_01);
  if (objLayOut == null) return false;

  const strTopicId = ResearchTopic_QUDIExB.GetPropValue('topicId');
  if (IsNullOrEmpty(strTopicId)) {
    alert('主题Id为空！');
    return false;
  }

  const div_SubViewpointList = GetDivObjInDivObjN(objLayOut, 'div_SubViewpointList');
  if (div_SubViewpointList == null) {
    setTimeout(() => {
      liPaperSubViewpoint(objLayOut);
    }, 100);
    return false;
  } else {
    const objPage = new Public_PaperSubViewpoint(div_SubViewpointList);
    Public_PaperSubViewpoint.GetPropValue = ResearchTopic_QUDIExB.GetPropValue;
    objPage.liPaperSubViewpoint(objLayOut, strTopicId);
    return true;
  }
}

//会议纪要
export function liMeetingMinutesClick(divLayout: HTMLDivElement) {
  const objPage0 = new ResearchTopic_QUDIExB(divLayout);
  const objLayOut = objPage0.getDivName(enumDivType.LayOut_01);
  if (objLayOut == null) return;
  const MeetingMinutesList = GetUlObjInDivObjN(objLayOut, 'MeetingMinutesList');
  if (MeetingMinutesList == null) {
    setTimeout(() => {
      liMeetingMinutesClick(objLayOut);
    }, 100);
    return false;
  } else {
    const objPage = new gs_MeetingMinutesCRUDEx(objLayOut);
    objPage.PageLoad(objLayOut);
  }
}

//各观点分类
export async function liViewsClassificationClick(
  strgsKnowledgeTypeId: string,
  divLayout: HTMLDivElement,
) {
  const objLayOut = divLayout;
  if (objLayOut == null) return;
  gs_VpClassificationCRUDEx.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;
  const objPage = new gs_VpClassificationCRUDEx(objLayOut);
  await objPage.PageLoad0(objLayOut, strgsKnowledgeTypeId);
}

//待研究问题
export function liTobeStudiedProblemClick(divLayout: HTMLDivElement) {
  const objPage0 = new ResearchTopic_QUDIExB(divLayout);
  const objLayOut = objPage0.getDivName(enumDivType.LayOut_01);
  if (objLayOut == null) return;
  const objPage = new gs_TobeStudiedProblemCRUDEx(objLayOut);
  const divTobeStudiedProblem = GetDivObjInDivObjN(objLayOut, 'divTobeStudiedProblem');
  if (divTobeStudiedProblem == null) {
    setTimeout(() => {
      objPage.PageLoad(objLayOut);
    }, 500);
  } else {
    objPage.PageLoad(objLayOut);
  }
}

//研究成果
export function liResearchResultClick(divLayout: HTMLDivElement) {
  const objPage0 = new ResearchTopic_QUDIExB(divLayout);
  const objLayOut = objPage0.getDivName(enumDivType.LayOut_01);
  if (objLayOut == null) return;
  const objPage = new gs_ResearchResultCRUDEx(objLayOut);

  const divResearchResult = GetDivObjInDivObjN(objLayOut, 'divResearchResult');
  if (divResearchResult == null) {
    setTimeout(() => {
      objPage.PageLoad(objLayOut);
    }, 500);
  } else {
    objPage.PageLoad(objLayOut);
  }
}

//论文汇报
function liPaperReportClick(divLayout: HTMLDivElement) {
  const objPage0 = new ResearchTopic_QUDIExB(divLayout);
  const objLayOut = objPage0.getDivName(enumDivType.LayOut_01);
  if (objLayOut == null) return;
  const objPage = new gs_PaperReportCRUDEx(objLayOut);
  objPage.PageLoad(objLayOut);
}

async function ChangeTab(strTabId: string, divLayout: HTMLDivElement): Promise<boolean> {
  // alert(strTabId);
  let strMsg;
  switch (strTabId) {
    case enumResearchTopicTabs.liUser: // '小组成员' },
      liUserClick(divLayout);
      break;
    case enumResearchTopicTabs.liResearchPlan: //, label: '计划' },
      liResearchPlanClick(divLayout);
      break;
    case enumResearchTopicTabs.liResearchTask: //, label: '计划' },
      liResearchTaskClick(divLayout);
      break;
    case enumResearchTopicTabs.ligs_ReflectLog: //, label: '反思' },
      ligs_ReflectLog(divLayout);
      break;
    case enumResearchTopicTabs.liPaper: //, label: '论文' },
      liPaperClick('01', divLayout);
      break;
    case 'liSubViewpoint': //, label: '论文子观点' },
      liPaperSubViewpoint(divLayout);
      break;
    case enumgs_KnowledgeType.PersonalOpinion_01:
    case enumResearchTopicTabs.liViewpoint: // 'liAllViewpoint': //, label: '主题各观点' },
      // li();
      liViewpointClick(divLayout);
      break;
    case enumgs_KnowledgeType.ExpertOpinion_02:
    case enumResearchTopicTabs.liExpertViewpoint: // 'liAllViewpoint': //, label: '主题各观点' },
      // li();
      liExpertViewpointClick(divLayout);
      break;
    case enumgs_KnowledgeType.ObjectiveFact_04:
    case enumResearchTopicTabs.liObjective: // 'liAllViewpoint': //, label: '主题各观点' },
      // li();
      liObjectiveFactClick(divLayout);
      break;
    case enumgs_KnowledgeType.ObjectiveData_05:
    case enumResearchTopicTabs.liObjectiveBasis: // 'liAllViewpoint': //, label: '主题各观点' },
      // li();
      liObjectiveBasisClick(divLayout);
      break;
    case enumgs_KnowledgeType.SocialRelationships_07:
    case enumResearchTopicTabs.liSysSocialRela: // 'liAllViewpoint': //, label: '主题各观点' },
      // li();
      liSysSocialRelationsClick(divLayout);
      break;
    case enumgs_KnowledgeType.Skill_06:
    case enumResearchTopicTabs.liSysskill: // 'liAllViewpoint': //, label: '主题各观点' },
      // li();
      liSysskillClick(divLayout);
      break;

    case enumResearchTopicTabs.liOriginalPaper: //, label: '小组论文写作' },
      liPaperClick('02', divLayout);
      break;
    case enumResearchTopicTabs.liMeetingMinutes: //, label: '会议纪要' },
      liMeetingMinutesClick(divLayout);
      break;
    case enumResearchTopicTabs.liPaperReport: //, label: '论文汇报' },
      liPaperReportClick(divLayout);
      break;
    case enumResearchTopicTabs.liTobeStudiedProblem: //, label: '待研究问题' },
      liTobeStudiedProblemClick(divLayout);
      break;
    case enumResearchTopicTabs.liResearchResult: //, label: '研究成果' },
      liResearchResultClick(divLayout);
      break;
    case enumgs_KnowledgeType.Concept_03:
    case enumResearchTopicTabs.liConcept:
      liConceptClick(divLayout);
      break;
    default:
      strMsg = `Tab类型:${strTabId}在函数(function ChangeTab in ResearchTopic_QUDIExB)中没有被处理！`;
      console.error(strMsg);
      alert(strMsg);
      break;
  }
  return true;
}

//小组成员
function liUserClick(divLayout: HTMLDivElement) {
  const strnum = '1';
  // $('#h1idTabNum').val(strnum);

  const objPage = new ResearchTopic_QUDIExB(divLayout);
  objPage.liUserClick();
}

export async function ResertchTopicQudiEx_PageLoad(divLayout: HTMLDivElement) {
  const objPage = new ResearchTopic_QUDIExB(divLayout);
  const divName = objPage.getDivName(enumDivType.LayOut_01);
  if (divName == null) return;
  // 在此处放置用户代码以初始化页面
  try {
    if (userStore.getUserId != '') {
      //主题
      objPage.hidSortResearchTopicBy = 'updDate Desc';
      //主题用户
      objPage.hidSortvRTUserRelaBy = 'updDate Asc';

      //读取session角色 来判断绑定不同数据列表
      $('#hidUserId').val(userStore.getUserId);
      $('#hidRoleId').val(userStore.getRoleId);
      //管理员 判断角色
      if (GetInputValueInDivObj(divName, 'hidRoleId') == '00620001') {
        //    $("#btnDelRecord").show();
        $('#tab4Bind tr').find('td:eq(8)').show();
      } else {
        //学生00620003 教师

        $('#tab4Bind tr').find('td:eq(8)').hide();
      }

      await objPage.Bind_ApplyTopicCount();
      const strTopicId = await objPage.GetTopicData();
      clsPrivateSessionStorage.topicIdInTree = strTopicId;
      // console.log('await objPage.GetTopicData()');
      HideDivInDivObj(divName, 'divLoading');
    } else {
      alert('登录超时，请重新登录！');
      reLogin();
    }
  } catch (e: any) {
    const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
  }
}
