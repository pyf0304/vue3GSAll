import $ from 'jquery';
import { gs_MeetingMinutes_EditEx } from './gs_MeetingMinutes_EditEx';
import { gs_PaperReport_EditEx } from './gs_PaperReport_EditEx';
import { gs_ReflectLogCRUDEx } from './gs_ReflectLogCRUDEx';
import { gs_ReflectLog_EditEx } from './gs_ReflectLog_EditEx';
import { gs_TeacherTaskCRUDEx } from './gs_TeacherTaskCRUDEx';
import { gs_TopicRoleCRUDEx } from './gs_TopicRoleCRUDEx';
import { gs_VpClassification_EditEx } from './gs_VpClassification_EditEx';
import { PaperLstSel } from './PaperLstSel';
import { ResearchTopicConceptEx } from './ResearchTopicConceptEx';
import { ResearchTopicObjectiveEx } from './ResearchTopicObjectiveEx';
import { ResearchTopicSysskillEx } from './ResearchTopicSysskillEx';
import { ResearchTopicSysSocialRelaEx } from './ResearchTopicSysSocialRelaEx';
import { ResearchTopicViewpointEx } from './ResearchTopicViewpointEx';
import { ResearchTopic_EditEx } from './ResearchTopic_EditEx';
import { RTPaperRela_EditEx } from './RTPaperRela_EditEx';
import { RTPaperRela_QUDIEx } from './RTPaperRelaListInEx';
import { RTUserRela_EditEx } from './RTUserRela_EditEx';
import { UsersLstSel } from './UsersLstSel';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { gs_MeetingMinutes_Edit } from '@/viewsBase/GradEduTopic/gs_MeetingMinutes_Edit';
import { gs_PaperReport_Edit } from '@/viewsBase/GradEduTopic/gs_PaperReport_Edit';
import { gs_ReflectLog_Edit } from '@/viewsBase/GradEduTopic/gs_ReflectLog_Edit';
import { RTUserRelaCRUD } from '@/viewsBase/GradEduTopic/RTUserRelaCRUD';
import { clsgs_MeetingMinutesEN } from '@/ts/L0Entity/GradEduTopic/clsgs_MeetingMinutesEN';
import { clsgs_PaperReportEN } from '@/ts/L0Entity/GradEduTopic/clsgs_PaperReportEN';
import { clsgs_ReflectLogEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ReflectLogEN';
import { clsgs_ResearchResultEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ResearchResultEN';
import { clsgs_TeacherTaskEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TeacherTaskEN';
import { clsgs_TobeStudiedProblemEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TobeStudiedProblemEN';
import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import { clsRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTPaperRelaEN';
import { clsRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaEN';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { clsgs_ColorEN } from '@/ts/L0Entity/RT_Params/clsgs_ColorEN';
import { ResearchTopic_AddNewRecordWithReturnKeyAsync } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import {
  RTUserRela_AddNewRecordAsync,
  RTUserRela_GetFirstObjAsync,
  RTUserRela_IsExistRecordAsync,
  RTUserRela_ReFreshCache,
  RTUserRela_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTUserRelaWApi';
import { gs_Color_GetObjLstCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ColorWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType'; //主题菜单是否隐藏
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare function ShowDialogEight(): void;
declare function ShowDialogSeven(): void;
declare function ShowDialogTwo(): void;
declare function ShowDialogTen(): void;

declare function ShowUserColor(): void;
declare function HideUserColor(): void;
declare function ShowDialogPaperSubViewpoint(): void;
declare function HideDialogFour(): void;
declare function ShowDialogNine(): void;

// declare function liPaperClick(strKeyId: string): void; //相关论文
// declare function liTeacherTaskClick(): void; //教师任务
// declare function liResearchPlanClick(): void; //研究计划
// declare function liPaperSubViewpoint(): void; //论文子观点

// declare function liViewpointClick(): void; //个人观点
// declare function liExpertViewpointClick(): void; //专家观点
// declare function liConceptClick(): void; //相关概念
// declare function liObjectiveFactClick(): void; //客观事实
// declare function liObjectiveBasisClick(): void; //客观依据
// declare function liSysskillClick(): void; //技能
// declare function liSysSocialRelationsClick(): void; //社会关系

// declare function ligs_ReflectLog(): void; //反思日志
declare function liMeetingMinutesClick(): void; //会议纪要
declare function liPaperReportClick(): void; //论文汇报
declare function liTobeStudiedProblemClick(): void; //待研究问题
declare function liResearchResultClick(): void; //研究成果
declare function liViewsClassificationClick(): void; //各观点分类
declare function xadminopen2(
  title: string,
  strFile: string,
  intWidth: number,
  intHeight: number,
): void; //打开一个对话框
declare function xadminOpen(title: string, strFile: string): void; //打开一个对话框
declare function xadminOpen_Width_Height(
  title: string,
  strFile: string,
  intWidth: number,
  intHeight: number,
): void; //打开一个对话框

// declare function TopicMenuIsHide(): void;
// declare let window: any;
/* ResearchTopic_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ResearchTopic_QUDIEx extends RTUserRelaCRUD implements IShowList {
  //export class ResearchTopic_QUDIEx extends ResearchTopicCRUD {
  //用户列表
  public static topicId = ''; //当前所选的主题Id
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
        liViewsClassificationClick();
        break;
      case clsgs_TobeStudiedProblemEN._CurrTabName:
        liTobeStudiedProblemClick();
        break;
      case clsgs_ResearchResultEN._CurrTabName:
        liResearchResultClick();
        break;
      case clsgs_PaperReportEN._CurrTabName:
        liPaperReportClick();
        break;
      case clsgs_MeetingMinutesEN._CurrTabName:
        liMeetingMinutesClick();
        break;
      case clsgs_TeacherTaskEN._CurrTabName:
        /*liTeacherTaskClick();*/
        objPage_gs_TeacherTask = new gs_TeacherTaskCRUDEx(this.divLayout);
        objPage_gs_TeacherTask.liTeacherTaskClick(this.divLayout, this.divList);
        break;

      default:
        AccessBindGvDefault(strType);
        break;
    }
  }
  async BindGvCache(strType: string, strPara: string) {
    const objPage0 = new ResearchTopic_QUDIEx(this.divLayout);
    const objLayOut = objPage0.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    switch (strType) {
      case clsRTPaperRelaEN._CurrTabName:
        if (IsNullOrEmpty(strPara) == false) {
          const objPager_CRUD = new RTPaperRela_QUDIEx(this.divLayout);
          const objRTPaperRela_Edit = new RTPaperRela_EditEx('', objPager_CRUD);
          const strPaperId = strPara;
          const bolIsSuccess = await objRTPaperRela_Edit.AddNewRecordSavePaperRela(strPaperId);
          if (bolIsSuccess == true) {
            const objPage = new RTPaperRela_QUDIEx(this.divLayout);
            objPage.divName4Pager = 'divPager4Paper';
            objPage.liPaperClick(objLayOut, false);

            //const objPage_RTPaperRela = new Pub_RTPaperRelaList();
            //objPage_RTPaperRela.divName4Pager = "divPager4Paper";
            //objPage_RTPaperRela.PageLoad();
          }
          //await objPage_RTPaperRela.BindGv_vRTPaperRela();
        }
        break;
      case clsRTUserRelaEN._CurrTabName:
        if (IsNullOrEmpty(strPara) == false) {
          this.btnUserRecordInTab_Click(strPara);
        }
        break;
      case clsResearchTopicEN._CurrTabName:
        // this.GetTopicData();
        break;

      default:
        AccessBindGvDefault(strType);
        break;
    }
  }
  /*
    按钮单击,用于调用Js函数中btn_Click
   (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: ResearchTopic_QUDIEx = new ResearchTopic_QUDIEx(divLayout);
    let objPageEdit;
    const objPageEdit_PaperSel: PaperLstSel = new PaperLstSel(objPage, divLayout);
    const objPageEditgs_ReflectLog = new gs_ReflectLog_EditEx('gs_ReflectLog_EditEx', objPage);
    const objPageEditgs_VpClassification = new gs_VpClassification_EditEx(
      'gs_VpClassification_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    let objPageEdit_UsersSel;
    const strKeyId2 = clsPrivateSessionStorage.topicIdInTree;
    switch (strCommandName) {
      case 'UpdateUserRelaInTab': //删除研究主题AddgsReflectLog
        //objPage.btnUpdateUserRelaInTab_Click();
        break;
      case 'AddSysskillInTab': //删除研究主题AddgsReflectLog
        objPage.btnAddSysskillInTab_Click();
        break;

      case 'Updategs_TeacherTask': //删除研究主题AddgsReflectLog
        objPage.btnUpdategs_TeacherTask_Click(Number(strKeyId));
        break;
      case 'Updategs_ReflectLog': //删除研究主题AddgsReflectLog
        objPage.btnUpdategs_ReflectLog_Click(Number(strKeyId));
        break;

      case 'UpdateRecordInTab_gs_PaperReport': //删除研究主题AddgsReflectLog
        objPage.btnUpdateRecordInTab_gs_PaperReport_Click(strKeyId);
        break;
      case 'UpdateRecordInTab_gs_MeetingMinutes': //删除研究主题AddgsReflectLog
        objPage.btnUpdateRecordInTab_gs_MeetingMinutes_Click(strKeyId);
        break;

      case 'AddRTSysSocialRelaInTab': //删除研究主题AddgsReflectLog
        objPage.btnAddRTSysSocialRelaInTab_Click();
        break;
      // case 'AddpdfSysskill': //删除研究主题AddgsReflectLog
      //   objPage.btnAddpdfSysskill_Click();
      //   break;

      case 'RoleTool': //删除研究主题AddgsReflectLog
        objPage.btnRoleTool_Click();
        break;
      case 'AddNewPaperRela': //删除研究主题AddgsReflectLog
        objPage.btnAddNewPaperRela_Click();
        break;
      case 'AddNewgs_PaperRela': //删除研究主题AddgsReflectLog
        objPage.btnAddNewgs_PaperRela_Click();
        break;
      case 'AddExpertViewPointRelaRecordInTab': //删除研究主题AddgsReflectLog
        objPage.btnAddExpertViewPointRelaRecordInTab_Click();
        break;
      case 'AddViewPointRelaRecordInTab': //删除研究主题AddgsReflectLog
        objPage.btnAddViewPointRelaRecordInTab_Click();
        break;
      case 'AddConceptRelaRecordInTab': //删除研究主题AddgsReflectLog
        objPage.btnAddConceptRelaRecordInTab_Click();
        break;
      case 'AddTopicObjectiveRelaRecordInTab': //删除研究主题AddgsReflectLog
        objPage.btnAddTopicObjectiveRelaRecordInTab_Click();
        break;
      case 'BasisObjectiveRelaInTab': //删除研究主题AddgsReflectLog
        objPage.btnAddBasisObjectiveRelaInTab_Click();
        break;

      case 'AddpdfPaperSubViewpoint': //删除研究主题AddgsReflectLog
        // objPage.btnAddpdfPaperSubViewpoint_Click();
        break;

      case 'AddNewClassification': //删除研究主题AddgsReflectLog
        objPageEditgs_VpClassification.divName4Edit = 'divEdit_gs_ReflectLog';
        objPageEditgs_VpClassification.btnAddNewRecord_Click();
        break;

      case 'Addgs_ReflectLog': //删除研究主题AddgsReflectLog
        objPageEditgs_ReflectLog.divName4Edit = 'divEdit_gs_ReflectLog';
        objPageEditgs_ReflectLog.btnAddNewRecord_Click();
        break;
      case 'AddNewRecord': //删除研究主题
        objPageEdit = new ResearchTopic_EditEx('ResearchTopic_EditEx', objPage);

        objPageEdit.btnAddNewRecord_Click();
        break;
      // case 'DelResearchTopic': //删除研究主题
      //   objPage.btnDelResearchTopic_Click();
      //   break;
      case 'Addgs_TeacherTask': //添加研究计划
        //const objPageEdit_TeacherTask: Addgs_TeacherTaskEx = new Addgs_TeacherTaskEx(objPage);

        objPage.btnAddgs_TeacherTask_Click();
        break;
      case 'AddResearchPlan': //添加研究计划
        objPage.btnAddResearchPlan_Click();
        break;
      case 'AddRelaPaper': //查询记录
        objPageEdit_PaperSel.btnAddPaperRela_Click();
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
          return;
        }
        objPageEdit = new ResearchTopic_EditEx('ResearchTopic_EditEx', objPage);

        objPageEdit.btnUpdateRecord_Click(strKeyId2);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        //objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
          return;
        }
        //objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        //objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ResearchTopic_QUDIEx.btn_Click');

        break;
    }
  }

  /* 为插入记录做准备工作
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
 */
  public AddNewRecord() {
    //this.SetKeyReadOnly(false);
    this.btnOKUpd = '确认添加';
    this.btnCancel = '取消添加';
    this.Clear();
    //去掉提交按钮不可用状态
    $('#btnOKUpd').attr('disabled', 'false');
  }

  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   */
  public async btnAddResearchTopic_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    this.opType = 'Add';
    try {
      await gs_Share_BindDdl_ShareIdInDivCache(this.thisDivList, 'ddlShareId');
      await this.AddNewRecord();
      //获取分享Id
      const responseText1 = await gs_UserConfigEx_GetNewReturnShareIdEx('12', userStore.getUserId);
      const strShareId: string = responseText1;
      if (strShareId != '') {
        this.shareId = strShareId;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {
    this.topicId = '';
    this.topicName = '';
    this.topicContent = '';
    this.topicProposePeople = '';
    this.orderNum = 0;
    this.updDate = '';
    this.updUser = '';
    this.memo = '';
  }

  //如果当前登录的用户没有教学班主题，那么默认给添加一个私有主题；
  /* 添加新记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddPrivateTopic() {
    this.DivName = 'divAddNewRecordSave';
    let strTopicId;
    const strUserName = userStore.getUserName;
    const objResearchTopicEN: clsResearchTopicEN = new clsResearchTopicEN();

    objResearchTopicEN.SetTopicName(`${strUserName}私有主题`); // 栏目主题
    objResearchTopicEN.SetTopicContent(`${strUserName}私有主题`); // 主题内容
    objResearchTopicEN.SetTopicProposePeople(userStore.getUserId); // 主题提出人
    objResearchTopicEN.SetOrderNum(30); // 序号
    objResearchTopicEN.SetShareId('01'); //共享
    objResearchTopicEN.SetIdCurrEduCls('00000050'); //自动添加的都只能添加私有教学班
    objResearchTopicEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objResearchTopicEN.SetUpdUser(userStore.getUserId); // 修改人
    objResearchTopicEN.SetMemo(this.memo); // 备注
    try {
      strTopicId = await ResearchTopic_AddNewRecordWithReturnKeyAsync(objResearchTopicEN);
      //const returnBool: boolean = !!responseText2;
      //if (returnBool == true) {
      if (strTopicId != '') {
        //这里默认添加一个用户数据 ，作为主题用户关系的组长；
        const objPageEdit = new RTUserRela_EditEx('', this);
        objPageEdit.AddNewTopicAndRecordSaveUserRela(strTopicId);
        //完成后重新绑定菜单树
        //temp await this.GetTopicData();

        // const strInfo = `添加记录成功!`;

        //显示信息框
        //  alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
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

      if (IsNullOrEmpty(clsPrivateSessionStorage.topicIdInTree) == true) {
        strWhereCond += ` And ${clsvRTUserRelaEN.con_TopicId} = '${ResearchTopic_QUDIEx.topicId}'`;
      }
      //读取session角色 来判断绑定不同数据列表
      //判断角色 //管理员
      if (userStore.getRoleId == '00620002') {
        //教师
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        // strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + objvUserRoleRelation.userId + "' And isEffective='1') And isEffective='1')";
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTUserRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //分页数据
  /* 函数功能:在数据 列表中跳转到某一页 观点列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
 <param name = "intPageIndex">页序号</param>
*/
  public IndexPageFour(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.CurrPageIndexUser = intPageIndex;
    //temp this.BindGv_vRTUserRela();
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombineResearchTopicCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.topicName_q != '') {
        strWhereCond += ` And ${clsResearchTopicEN.con_TopicName} like '%${this.topicName_q}%'`;
      }
      //if (this.TopicProposePeople_q != "") {
      //    strWhereCond += ` And ${clsResearchTopicEN.con_UserName} like '%${this.TopicProposePeople_q}%'`;
      //}

      //判断角色
      //管理员
      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        strWhereCond += ` And topicId in (select topicId from RTUserRela where UserID ='${userStore.getUserId}')`;

        //如果不属于私有教育班那么执行下面的sql
        if (clsPubLocalStorage.idCurrEduCls != '00000050') {
          //strWhereCond += " And shareId <> '01'";
          //strWhereCond += " or idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "' And topicId in (select topicId from RTUserRela where UserID ='" + userStore.getUserId + "')";
          strWhereCond += ` or idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
          //strWhereCond += " And shareId <> '01'";
        }

        if (this.topicName_q != '') {
          strWhereCond += ` And ${clsResearchTopicEN.con_TopicName} like '%${this.topicName_q}%'`;
        }
        //if (this.TopicProposePeople_q != "") {
        //    strWhereCond += ` And ${clsResearchTopicEN.con_UserName} like '%${this.TopicProposePeople_q}%'`;
        //}

        strWhereCond += ' [exclude]or [/exclude]';
        //  $("#btnDelRecord").show();
      } else if (userStore.getRoleId == '00620002') {
        //strWhereCond += " and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
        strWhereCond += ` And topicId in (select topicId from RTUserRela where UserID = '${userStore.getUserId}')`;
        //教师
        // $("#btnDelRecord").hide();
        //strWhereCond += ` And ${clsResearchTopicEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;
        //可以查看所有；
      } else {
        //学生； //教师
        //  $("#btnDelRecord").hide();
        //查询关系表数据 已经主题数据来显示主题方法；
        strWhereCond += ` And topicId in (select topicId from RTUserRela where UserID = '${userStore.getUserId}')`;
      }
      strWhereCond += ' order by topicName Asc';
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineResearchTopicCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的记录对象的列表
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
 */
  public async btnQuery_Click() {
    //temp await this.GetTopicData();
  }

  //public btnDetailInTab_Click(strKeyId: string) {

  //    if (strKeyId == "") {
  //        alert("请选择需要查看的记录！");
  //        return;
  //    }
  //    this.ResearchTopicDetailRecord(strKeyId);
  //}
  /* 根据关键字获取相应的记录的对象
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
  <param name = "sender">参数列表</param>
*/
  //public ResearchTopicDetailRecord(strTopicId: string) {

  //    this.keyId = strTopicId;
  //     const strUserId = userStore.getUserId;
  //    return new Promise((resolve, reject) => {
  //        try {
  //            const responseText = ResearchTopic_GetObjByTopicIdAsync(strTopicId).then((jsonData) => {
  //                const objResearchTopicEN: clsResearchTopicEN = <clsResearchTopicEN>jsonData;
  //                // //显示当前数据；
  //                $("#txtTopicNameDetail").html(objResearchTopicEN.topicName);
  //                $("#txtTopicContentDetail").html(objResearchTopicEN.topicContent);
  //                $("#txtMemoDetail").html(objResearchTopicEN.memo);
  //            });
  //        }
  //        catch (e:any) {
  //            console.error(e);
  //            strIdCurrEduclsstrMsg: string = `当前无数据获取失败,${e}.`;
  //            alert(strMsg);
  //        }
  //    });
  //}

  //获取不同色码
  public getRandomColor(): string {
    return `#${`00000${((Math.random() * 0x1000000) << 0).toString(16)}`.substring(-6)}`;
  }

  //确定选择的用户 并添加到关系表中
  public async btnUserRecordInTab_Click(strkeyId: string) {
    ////主题用户角色下拉框
    //const ddl_TopicUserRole_q = await this.BindDdl_TopicUserRole_q("ddlTopicUserRole_q");
    //需要提示选择角色
    if (this.TopicUserRole_q != '' && this.TopicUserRole_q != '0') {
      //存放Id
      $('#hidUserIdKey').val(strkeyId);
      //执行添加关系方法
      this.AddNewRecordSaveUserRela();
    } else {
      const strInfo = `请选择用户角色!`;

      //显示信息框
      alert(strInfo);
      return;
    }
  }

  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSaveUserRela() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.AddNewRecordSaveUserRela.name;
    // const strPaperId = GetHidPaperId(divName);
    const strUserId = GetInputValueInDivObj(divName, 'hidUserIdKey');
    const objRTUserRelaEN: clsRTUserRelaEN = new clsRTUserRelaEN();
    this.PutDataToRTUserRelaClass(objRTUserRelaEN);
    //获取缓存色码表；
    let arrGs_ColorObjLst: Array<clsgs_ColorEN> = [];
    try {
      // 同一主题 同一用户 只能添加一次；
      const strWhere = ` 1 = 1 And topicId = '${ResearchTopic_QUDIEx.topicId}' And userId = '${strUserId}'`;
      const responseText = await RTUserRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        // const strMsg = `同一主题不能重复添加同一个用户！`;
        //alert(strMsg);
        console.log('同一主题不能重复添加同一个用户！');
      } else {
        const returnBool = await RTUserRela_AddNewRecordAsync(objRTUserRelaEN);
        if (returnBool == true) {
          RTUserRela_ReFreshCache(clsPrivateSessionStorage.topicIdInTree);
          const strInfo = `添加成功!`;
          //隐藏用户框
          HideDialogFour();
          //显示信息框
          alert(strInfo);
          // await this.btnReOrder_Click();
        }
      }
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
      //temp this.BindGv_vRTUserRela();

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
  //添加完成后把根据用户排序号得到色码表 样式把样式更新到主题用户关系表；

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjRTUserRelaEN">数据传输的目的类对象</param>
   */
  public PutDataToRTUserRelaClass(pobjRTUserRelaEN: clsRTUserRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // const strPaperId = GetHidPaperId(divName);
    const strUserIdKey = GetInputValueInDivObj(divName, 'hidUserIdKey');
    const strUserId = userStore.getUserId;

    pobjRTUserRelaEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjRTUserRelaEN.SetTopicId(clsPrivateSessionStorage.topicIdInTree); // 主题编号
    pobjRTUserRelaEN.SetUserId(strUserIdKey); // 用户ID
    pobjRTUserRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTUserRelaEN.SetTopicUserRoleId(this.TopicUserRole_q);
    pobjRTUserRelaEN.SetOrderNum(30);
    pobjRTUserRelaEN.SetColorId('');
    pobjRTUserRelaEN.SetUpdUser(strUserId); // 修改人
    pobjRTUserRelaEN.SetMemo(this.memo); // 备注
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
   * 获取当前页序号 -------用户
   */
  public get CurrPageIndexUser(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndexUser');
  }
  /*
   * 设置当前页序号  -------用户
   */
  public set CurrPageIndexUser(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndexUser', value);
  }

  //////////////////////////////////////////////所有数据列表排序功能///////////////////////////////////////////////////

  /* 主题用户关系表头排序
   */
  public async SortByRTUser(strSortByFld: string) {
    if (this.hidSortvRTUserRelaBy.indexOf(strSortByFld) >= 0) {
      if (this.hidSortvRTUserRelaBy.indexOf('Asc') >= 0) {
        this.hidSortvRTUserRelaBy = `${strSortByFld} Desc`;
      } else {
        this.hidSortvRTUserRelaBy = `${strSortByFld} Asc`;
      }
    } else {
      this.hidSortvRTUserRelaBy = `${strSortByFld} Asc`;
    }
    //temp await this.BindGv_vRTUserRela();
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
  //小组成员
  public async liUserClick() {
    try {
      //temp      await this.BindGv_vRTUserRela();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题用户列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
   * 分享
   */
  public set shareId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlShareId', value);
  }
  /*
   * 分享
   */
  public get shareId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlShareId');
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
   * 论文标题
   */
  public get paperTitle_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperTitle_q');
  }

  /*
   * 设置取消按钮的标题
   */
  public set btnCancel(value: string) {
    $('#btnCancel').html(value);
  }
  /*
   * 设置确定按钮的标题
   */
  public set btnOKUpd(value: string) {
    $('#btnOKUpd').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnOKUpd(): string {
    return $('#btnOKUpd').html();
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
  /*
   * 添加、修改用的层名
   */
  public set DivName(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidDivName', value);
  }

  /*
   * 用户Id
   */
  public get hidUserId(): string {
    return userStore.getUserId;
  }
  /*
   * 设置关键字的值
   */
  public set keyId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidKeyId', value);
  }
  /*
   * 设置关键字的值
   */
  public get keyId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidKeyId');
  }
  /*
   * 备注
   */
  public set memo(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtMemo', value);
  }
  /*
   * 备注
   */
  public get memo(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtMemo');
  }
  /*
   * 设置操作类型：Add||Update||Detail
   */
  public set opType(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidOpType', value);
  }
  /*
   * 序号
   */
  public set orderNum(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtOrderNum', value);
  }
  /*
   * 序号
   */
  public get orderNum(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'txtOrderNum');
  }
  /*
   * 主题内容
   */
  public set topicContent(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtTopicContent', value);
  }
  /*
   * 主题内容
   */
  public get topicContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtTopicContent');
  }
  /*
   * 主题编号
   */
  public set topicId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtTopicId', value);
  }
  /*
   * 主题编号
   */
  public get topicId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtTopicId');
  }
  /*
   * 栏目主题
   */
  public set topicName(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtTopicName', value);
  }
  /*
   * 栏目主题
   */
  public get topicName(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtTopicName');
  }
  /*
   * 栏目主题
   */
  public get topicName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtTopicName_q');
  }
  /*
   * 主题提出人
   */
  public set topicProposePeople(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtTopicProposePeople', value);
  }
  /*
   * 主题提出人
   */
  public get topicProposePeople(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtTopicProposePeople');
  }
  /*
   * 主题提出人
   */
  public get TopicProposePeople_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'txtTopicProposePeople_q');
  }
  /*
   * 修改日期
   */
  public set updDate(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);

    SetInputValueInDivObj(divName, 'txtUpdDate', value);
  }
  /*
   * 修改日期
   */
  public get updDate(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'txtUpdDate');
  }
  /*
   * 修改人
   */
  public set updUser(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);

    SetInputValueInDivObj(divName, 'txtUpdUser', value);
  }
  /*
   * 修改人
   */
  public get updUser(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'txtUpdUser');
  }

  //添加 研究计划
  public btnAddResearchPlan_Click() {
    const strKeyId = ResearchTopic_QUDIEx.topicId; // clsPrivateSessionStorage.topicIdInTree;
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    clsPrivateSessionStorage.topicIdInTree = strKeyId;
    if (strKeyId == '') {
      alert('请选择数据！');
      return;
    } else {
      //存放选择id
      //strIdCurrEduclsstrObjectiveType = "02";
      //$('#hidObjectiveTypeId').val(strObjectiveType);

      //xadmin.open('添加研究计划', '../GradEduPublicPage/AddResearchPlan?topicId=' + strKeyId + '&IdCurrEduCls=' + strIdCurrEduCls, 1200, 800);
      xadminopen2(
        '添加研究计划',
        `../GradEduPublicPage/AddResearchPlan?topicId=${strKeyId}&IdCurrEduCls=${strIdCurrEduCls}`,
        1200,
        800,
      );
    }
  }

  //--------------------------------------------------------------------------------pdf添加事件

  //选择客观数据按钮
  public btnAddBasisObjectiveRelaInTab_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;

    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      //存放选择id客观数据
      const strObjectiveType = '02';
      $('#hidObjectiveTypeId').val(strObjectiveType);

      ShowDialogEight();
      //调用用户列表绑定；
      const objPage = new ResearchTopicObjectiveEx(this.divLayout);
      objPage.btnAddTopicObjectiveRela_Click();
    }
  }

  //选择客观事实按钮
  public btnAddTopicObjectiveRelaRecordInTab_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;

    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      //存放选择id客观事实
      const strObjectiveType = '01';
      $('#hidObjectiveTypeId').val(strObjectiveType);

      ShowDialogEight();
      //调用用户列表绑定；
      const objPage = new ResearchTopicObjectiveEx(this.divLayout);
      objPage.btnAddTopicObjectiveRela_Click();
    }
  }

  //选择主题概念
  public btnAddConceptRelaRecordInTab_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;

    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      //存放选择id
      //  $('#hidTopicRelaId').val(strKeyId);

      ShowDialogSeven();
      //调用用户列表绑定；
      const objPage = new ResearchTopicConceptEx(this.divLayout);
      objPage.btnAddConceptRela_Click();
    }
  }

  //选择主题个人观点关系
  public btnAddViewPointRelaRecordInTab_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;

    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      //存放选择id
      // $('#hidTopicRelaId').val(strKeyId);
      //存放选择类型Id 个人观点
      const UsertypeId = '01';
      $('#hidUserTypeId').val(UsertypeId);
      ShowDialogTwo();
      //调用专业方向绑定；
      const objPage = new ResearchTopicViewpointEx(this.divLayout);
      objPage.btnAddRela_Click();
    }
  }

  //选择主题专家观点关系
  public btnAddExpertViewPointRelaRecordInTab_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;

    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      //存放选择类型Id 专家观点
      const UsertypeId = '02';
      $('#hidUserTypeId').val(UsertypeId);

      ShowDialogTwo();
      //调用专业方向绑定；
      const objPage = new ResearchTopicViewpointEx(this.divLayout);
      objPage.btnAddRela_Click();
    }
  }

  //自研论文
  public btnAddNewgs_PaperRela_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;
    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      //存放选择id
      xadminOpen(
        '添加主题论文',
        `../GradEduPublicPage/P_Paper_Edit?PaperLogTypeId=01&TopicId=${strKeyId}`,
      );
    }
  }

  /*****************************************************************论文相关*****************************************************************/
  //添加主题论文关系
  public btnAddNewPaperRela_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;

    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      //存放选择id
      //strIdCurrEduclsstrObjectiveType = "02";
      //$('#hidObjectiveTypeId').val(strObjectiveType);
      xadminOpen('添加主题论文', `../GradEduPublicPage/P_Paper_EditV2?TopicId=${strKeyId}`);
    }
  }

  /****************************************主题权限设置****************************************/
  //主题权限设置
  public btnRoleTool_Click() {
    //得到选择的topicId
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;

    if (strKeyId == '') {
      alert('请选择需要设置权限的主题！');
      return;
    } else {
      const objPage = new gs_TopicRoleCRUDEx(this.divLayout);
      objPage.btnRoleTool_Click();
    }
  }

  //点击选择社会关系
  public btnAddRTSysSocialRelaInTab_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;

    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      ShowDialogTen();
      //调用用户列表绑定；
      const objPage = new ResearchTopicSysSocialRelaEx(this.divLayout);
      objPage.btnAddRTSysSocialRelaInTab_Click();
    }
  }

  public btnUpdateRecordInTab_gs_PaperReport_Click(strKeyId: string) {
    const objPageEdit = new gs_PaperReport_EditEx('', this);
    gs_PaperReport_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
    objPageEdit.divName4Edit = 'divEdit_gs_PaperReport';
    objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
  }
  public btnUpdateRecordInTab_gs_MeetingMinutes_Click(strKeyId: string) {
    const objPageEdit = new gs_MeetingMinutes_EditEx('', this);
    gs_MeetingMinutes_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
    objPageEdit.divName4Edit = 'divEdit_gs_MeetingMinutes';
    objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
  }

  //点击选择技能数据按钮
  public btnAddSysskillInTab_Click() {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;

    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      ShowDialogNine();
      //调用用户列表绑定；
      const objPage = new ResearchTopicSysskillEx(this.divLayout);
      objPage.btnAddSysskillInTab_Click();
    }
  }

  //添加 会议纪要
  public btnAddgs_TeacherTask_Click() {
    //const objPageEdit = new gs_TeacherTask_EditEx('', this);
    //objPageEdit.divName4Edit = "divEdit_gs_TeacherTask";
    //objPageEdit.btnAddNewRecord_Click();
    const strKeyId = ResearchTopic_QUDIEx.topicId; // clsPrivateSessionStorage.topicIdInTree;
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    clsPrivateSessionStorage.topicIdInTree = strKeyId;
    if (strKeyId == '') {
      alert('请选择数据！');
      return;
    } else {
      //xadmin.open('添加研究计划', '../GradEduPublicPage/AddResearchPlan?topicId=' + strKeyId + '&IdCurrEduCls=' + strIdCurrEduCls, 1200, 800);
      xadminopen2(
        '添加教师任务',
        `../GradEduPublicPage/Addgs_TeacherTask?topicId=${strKeyId}&IdCurrEduCls=${strIdCurrEduCls}`,
        1200,
        800,
      );
    }
  }

  /*
 教师任务布置 修改；
(AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btnUpdateRecordInTab_Click)
*/
  public btnUpdategs_TeacherTask_Click(mId: number) {
    //require(["../js/GradEduTopic/ResearchTopic_QUDIEx.js"], function (gs_researchplan) {
    const strKeyId = clsPrivateSessionStorage.topicIdInTree;
    if (strKeyId == '') {
      alert('请选择数据！');
      return;
    }
    //const objPage = new gs_researchplan.ResearchTopic_QUDIEx();
    //objPage.btnUpdateRecordInTab_Click(strKeyId);
    xadminOpen_Width_Height(
      '修改任务',
      `../GradEduPublicPage/Addgs_TeacherTask?TopicId=${strKeyId}&mId=${mId}`,
      1200,
      800,
    );
    //  });
  }
  /*
 教师任务布置 修改；
(AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btnUpdateRecordInTab_Click)
*/
  public btnUpdategs_ReflectLog_Click(mId: number) {
    const objPageEdit = new gs_ReflectLog_EditEx('', this);
    gs_ReflectLog_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
    objPageEdit.divName4Edit = 'divEdit_gs_ReflectLog';
    objPageEdit.btnUpdateRecordInTab_Click(mId.toString());
    //const objPage = new gs_researchplan.ResearchTopic_QUDIEx();
    //objPage.btnUpdateRecordInTab_Click(strKeyId);
    //xadminOpen_Width_Height('修改任务', '../GradEduPublicPage/Addgs_TeacherTask?TopicId=' + strKeyId + '&mId=' + mId, 1200, 800);
    //  });
  }
  //修改主题用户色码块；
  public btnUpdateUserRelaInTab0_Click(strKeyId: string, strRoleId: string) {
    if (strKeyId == '') {
      alert(`请选择需要删除的${this.thisTabName}记录！`);
      return;
    }

    $('#hidTopicUserId').val(strKeyId);
    // const objPage = new ResearchTopic_QUDIEx();
    // objPage.btnUpdateUserRelaInTab_Click(strKeyId, strRoleId);
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
}
