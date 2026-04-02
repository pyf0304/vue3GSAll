import $ from 'jquery';
import { PaperEx_GetRecCountByCondByIdCurrEduCls_Cache } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { clsvXzMajorDirectionEN } from '@/ts/L0Entity/BaseInfo/clsvXzMajorDirectionEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsvPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperReadWriteEN';
import { vXzMajorDirection_GetSubObjLstCache } from '@/ts/L3ForWApi/BaseInfo/clsvXzMajorDirectionWApi';
import { PaperSubViewpoint_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubViewpointWApi';
import { vPaperReadWrite_GetRecCountByCondCache } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperReadWriteWApi';
import { Concept_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsConceptWApi';
import { TopicObjective_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsTopicObjectiveWApi';
import { Viewpoint_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsViewpointWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Welcome {
  public static divLayout: HTMLDivElement; //界面布局的层对象
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public async PageLoad() {
    // 在此处放置用户代码以初始化页面

    try {
      //管理员 判断角色
      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        $('#Personaldiv').hide();
      } else {
        //学生00620003 教师
        $('#Personaldiv').show();
      }

      await this.Bind_Major();
      await this.Bind_AllCount();
      await this.Bind_PersonalAllCount();
      $('#divLoading').hide();
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async Bind_Major() {
    try {
      let arrvXzMajorDirectionObjLst: Array<clsvXzMajorDirectionEN> = [];

      const objvXzMajorDirection_Cond: clsvXzMajorDirectionEN = new clsvXzMajorDirectionEN();
      objvXzMajorDirection_Cond.SetCondFldValue(
        clsvXzMajorDirectionEN.con_IdXzMajor,
        userStore.getIdXzMajor,
        '=',
      );

      arrvXzMajorDirectionObjLst = await vXzMajorDirection_GetSubObjLstCache(
        objvXzMajorDirection_Cond,
      );

      //strWhereCond = " idXzMajor='" + userStore.getIdXzMajor + "'";
      //const responseObjLst = await vXzMajorDirection_GetObjLstAsync(strWhereCond).then((jsonData) => {
      //    arrvXzMajorDirectionObjLst = <Array<clsvXzMajorDirectionEN>>jsonData;
      //});

      let strMajorDirection = '';
      for (let i = 0; i < arrvXzMajorDirectionObjLst.length; i++) {
        strMajorDirection += `${arrvXzMajorDirectionObjLst[i].majorDirectionName},`;
      }

      $('#spanMajordirection').html(
        `${userStore.getUserName + userStore.getMajorName}专业，专业方向包含(${strMajorDirection})`,
      );
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async Bind_AllCount() {
    try {
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      // const strCourseId = clsPubLocalStorage.courseId;
      //论文统计
      const objvPaper_Cond1: clsPaperEN = new clsPaperEN();
      let recCount = await PaperEx_GetRecCountByCondByIdCurrEduCls_Cache(
        objvPaper_Cond1,
        strIdCurrEducls,
      );
      $('#PaperNum').html(recCount.toString());

      //引用论文统计
      const objvPaper_Cond2: clsPaperEN = new clsPaperEN();
      objvPaper_Cond2.SetCondFldValue(clsPaperEN.con_IsQuotethesis, 1, '=');
      recCount = await PaperEx_GetRecCountByCondByIdCurrEduCls_Cache(
        objvPaper_Cond2,
        strIdCurrEducls,
      );
      $('#QuotePaperNum').html(recCount.toString());

      //本组论文统计
      const objvPaper_Cond3: clsPaperEN = new clsPaperEN();
      objvPaper_Cond3.SetCondFldValue(clsPaperEN.con_IsQuotethesis, 0, '=');
      recCount = await PaperEx_GetRecCountByCondByIdCurrEduCls_Cache(
        objvPaper_Cond3,
        strIdCurrEducls,
      );
      $('#GroupPaperNum').html(recCount.toString());

      //论文阅读数
      const objvPaperReadWrite_Cond1: clsvPaperReadWriteEN = new clsvPaperReadWriteEN();
      objvPaperReadWrite_Cond1.SetCondFldValue(clsvPaperReadWriteEN.con_OperationTypeId, '01', '=');
      recCount = await vPaperReadWrite_GetRecCountByCondCache(
        objvPaperReadWrite_Cond1,
        strIdCurrEducls,
      );
      $('#PaperReadNum').html(recCount.toString());

      //论文写作数
      const objvPaperReadWrite_Cond2: clsvPaperReadWriteEN = new clsvPaperReadWriteEN();
      objvPaperReadWrite_Cond2.SetCondFldValue(clsvPaperReadWriteEN.con_OperationTypeId, '02', '=');
      recCount = await vPaperReadWrite_GetRecCountByCondCache(
        objvPaperReadWrite_Cond2,
        strIdCurrEducls,
      );
      $('#PaperWriteNum').html(recCount.toString());

      //论文子观点统计
      recCount = await PaperSubViewpoint_GetRecCountByCondAsync('1=1');
      $('#PaperSubViewpointNum').html(recCount.toString());

      //
      ////加载页面所需数据源到缓存
      //vPaper_GetObjLstAsync("1=1");
      //const arrvPaper_Cache = await vPaper_GetObjLstAsync("1=1");
    } catch (e: any) {
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //个人数据统计
  public async Bind_PersonalAllCount() {
    //获取当前登录人Id
    const strUserId = userStore.getUserId;
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    // const strCourseId = clsPubLocalStorage.courseId;
    const objvPaper_Cond1: clsPaperEN = new clsPaperEN();
    objvPaper_Cond1.SetCondFldValue(clsPaperEN.con_IsQuotethesis, 1, '=');
    objvPaper_Cond1.SetCondFldValue(clsPaperEN.con_UpdUser, strUserId, '=');
    //论文；
    let recCount = await PaperEx_GetRecCountByCondByIdCurrEduCls_Cache(
      objvPaper_Cond1,
      strIdCurrEducls,
    );
    $('#PersonalPaperNum').html(recCount.toString());

    //论文阅读
    const objvPaperReadWrite_Cond1: clsvPaperReadWriteEN = new clsvPaperReadWriteEN();
    objvPaperReadWrite_Cond1.SetCondFldValue(clsvPaperReadWriteEN.con_OperationTypeId, '01', '=');
    objvPaperReadWrite_Cond1.SetCondFldValue(clsvPaperReadWriteEN.con_UpdUser, strUserId, '=');
    recCount = await vPaperReadWrite_GetRecCountByCondCache(
      objvPaperReadWrite_Cond1,
      strIdCurrEducls,
    );
    $('#PersonalPaperReadNum').html(recCount.toString());

    //论文阅读
    const objvPaperReadWrite_Cond2: clsvPaperReadWriteEN = new clsvPaperReadWriteEN();
    objvPaperReadWrite_Cond2.SetCondFldValue(clsvPaperReadWriteEN.con_OperationTypeId, '02', '=');
    objvPaperReadWrite_Cond2.SetCondFldValue(clsvPaperReadWriteEN.con_UpdUser, strUserId, '=');
    recCount = await vPaperReadWrite_GetRecCountByCondCache(
      objvPaperReadWrite_Cond2,
      strIdCurrEducls,
    );
    $('#PersonalPaperWriteNum').html(recCount.toString());

    //论文阅读
    //strWhereCond4 = "";
    //const responseRecCount2 = await PaperReadWrite_GetRecCountByCondAsync("operationTypeId=01 And updUser='" + strUserId + "'").then((jsonData) => {
    //    strIdCurrEduclsrecCount = jsonData;
    //    $('#PersonalPaperReadNum').html(recCount);
    //});
    //论文读写
    //const responseRecCount3 = await PaperReadWrite_GetRecCountByCondAsync("operationTypeId=02 And updUser='" + strUserId + "'").then((jsonData) => {
    //    strIdCurrEduclsrecCount = jsonData;
    //    $('#PersonalPaperWriteNum').html(recCount);
    //});
    //论文子观点
    recCount = await PaperSubViewpoint_GetRecCountByCondAsync(`1=1 And updUser='${strUserId}'`);
    $('#PersonalPaperSubViewpointNum').html(recCount.toString());

    //主题个人观点
    recCount = await Viewpoint_GetRecCountByCondAsync(
      `1=1 And userTypeId = '01' And updUser='${strUserId}'`,
    );
    $('#PersonalViewpointNum').html(recCount.toString());

    //主题专家观点
    recCount = await Viewpoint_GetRecCountByCondAsync(
      `1=1 And userTypeId = '02' And updUser='${strUserId}'`,
    );
    $('#PersonalExpertViewpointNum').html(recCount.toString());

    //主题概念
    recCount = await Concept_GetRecCountByCondAsync(`1=1 And updUser='${strUserId}'`);
    $('#PersonalConceptNum').html(recCount.toString());

    //客观事实
    recCount = await TopicObjective_GetRecCountByCondAsync(
      `1=1 And objectiveType = '01' And updUser='${strUserId}'`,
    );
    $('#PersonalObjectiveFact').html(recCount.toString());

    //客观数据
    recCount = await TopicObjective_GetRecCountByCondAsync(
      `1=1 And objectiveType = '02' And updUser='${strUserId}'`,
    );
    $('#PersonalObjectiveBasis').html(recCount.toString());
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    // const objPage = new SysScoreSummaryCRUD();
    console.log(strKeyId);
    // const arrKeyIds = GetCheckedKeyIdsInDivObj(PageHead.divDataLst);
    // strKeyId = GetFirstCheckedKeyIdInDivObj(PaperAttention.divDataLst);
    switch (strCommandName) {
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要复制的记录！');
        //   return;
        // }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PaperAttention.btn_Click');

        break;
    }
  }
}
