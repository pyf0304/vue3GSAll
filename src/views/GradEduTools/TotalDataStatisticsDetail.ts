import $ from 'jquery';
import {
  gs_TotalDataStatisticsEx_GetObjLstByPagerAsyncEx,
  gs_TotalDataStatisticsEx_GetSubObjLstCacheEx,
} from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { SysScoreSummaryCRUD } from '@/viewsBase/GradEduTools/SysScoreSummaryCRUD';
import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import { clsgs_TotalDataStatisticsEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataStatisticsEN';
import {
  clsgs_TotalDataTypeEN,
  enumgs_TotalDataType,
} from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataTypeEN';
import { clsvSysScoreSummaryEN } from '@/ts/L0Entity/GradEduTools/clsvSysScoreSummaryEN';
import { vCurrEduClsStu_GetObjLstCache } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import {
  gs_TotalDataStatistics_GetRecCountByCondAsync,
  gs_TotalDataStatistics_ReFreshCache,
} from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataStatisticsWApi';
import { gs_TotalDataType_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataTypeWApi';
import { vSysScoreSummary_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsvSysScoreSummaryWApi';
import { GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import {
  GetCheckedKeyIdsInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  HideDivInDivObj,
  SetDivHtmlInDivObj,
  SetInputValueInDivObj,
  SetPHtmlInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  gs_TotalDataTypeEx_GetObjNameByTotalDataType,
  gs_TotalDataTypeEx_GetTypeIdByTotalDataTypeTabsId,
} from '@/ts/L3ForWApiEx/GradEduTools/clsgs_TotalDataTypeExWApi';
import enumTotalDataStatisticsTabs from '@/ts/FunClass/enumTotalDataStatisticsTabs';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { gs_TotalDataStatisticsCRUD } from '@/viewsBase/GradEduTools/gs_TotalDataStatisticsCRUD';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';

declare let window: any;
/* PaperSubViewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class TotalDataStatisticsDetail
  extends gs_TotalDataStatisticsCRUD
  implements IShowList
{
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public mstrListDiv = 'divDataLst';

  //public static mstrSortvPaperSubViewpointBy: string = "subViewpointId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 50;
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
    //this.BindGv_vgs_TeachingDate();
    this.Bind_AllData();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'vgs_TeachingDate':
        alert('该类没有绑定该函数：[this.BindGv_vgs_TeachingDate_Cache]！');
        //this.BindGv_vgs_TeachingDateCache();;
        break;
    }
  }
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName = this.getDivName(enumDivType.LayOut_01);
    // 在此处放置用户代码以初始化页面
    try {
      const strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
      if (clsPubLocalStorage.idCurrEduCls != '' || strIdCurrEduCls != '') {
        const strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
        if (strIdCurrEduCls != '') {
          $('#topTitle').hide();
        }

        //  const ddl_TotalDataTypeId_q = await clsDropDownList.BindDdl_TotalTypeId("ddlTotalDataTypeId_q");
        this.hidSortTotalBy = 'updDate Desc';
        // clsPubLocalStorage.idCurrEduCls = clsPubLocalStorage.idCurrEduCls;

        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }

        //总数据显示
        await this.BindGv_vSysScoreSummary();

        //默认显示数据
        await this.Bind_AllData();

        //默认显示数据
        await this.ExportDetail();

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

  /* 把所有的查询控件内容组合成一个条件串
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
  <returns>条件串(strWhereCond)</returns>
*/
  public async CombinevSysScoreSummaryCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.userName_q != "") {
      //    strWhereCond += ` And ${clsvSysScoreSummaryEN.con_UserName} like '%${this.userName_q}%'`;
      //}
      //if (this.schoolYear_q != null && this.schoolYear_q != "0") {
      //    strWhereCond += ` And ${clsvSysScoreSummaryEN.con_SchoolYear} = '${this.schoolYear_q}'`;
      //}

      //学生 判断角色
      if (userStore.getRoleId == '00620003') {
        const strUserId = this.userId;
        if (strUserId == '') {
          strWhereCond += ` and userId ='${this.userId}'`;
        } else {
          strWhereCond += ` and userId ='${strUserId}'`;
        }

        const strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
        if (strIdCurrEduCls == '') {
          strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;
        } else {
          strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`;
        }
      } else {
        //管理员 教师
        //$("#btnTotalRevalidation").show();
        //strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;
        const strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
        if (strIdCurrEduCls == '') {
          strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;
        } else {
          strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`;
        }
        const strUserId = this.userId;
        if (strUserId == '') {
          strWhereCond += ` and userId ='${this.userId}'`;
        } else {
          strWhereCond += ` and userId ='${strUserId}'`;
        }
      }

      strWhereCond += ' order by Score Desc';
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysScoreSummaryCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public Combinegs_TotalConditionObj(): clsgs_TotalDataStatisticsEN {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const objgs_TotalDataStatistics_Cond: clsgs_TotalDataStatisticsEN =
      new clsgs_TotalDataStatisticsEN();
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    //  const strUserId = this.userId;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      let strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
      if (strIdCurrEduCls == '') {
        strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
        // strWhereCond += ` And ${clsgs_TotalDataStatisticsEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;

        $('#hidIdCurrEduClspara').val(clsPubLocalStorage.idCurrEduCls);
      } else {
        //strWhereCond += ` And ${clsgs_TotalDataStatisticsEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`;
        $('#hidIdCurrEduClspara').val(strIdCurrEduCls);
      }

      objgs_TotalDataStatistics_Cond.SetCondFldValue(
        clsgs_TotalDataStatisticsEN.con_IdCurrEduCls,
        strIdCurrEduCls,
        '=',
      );
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objgs_TotalDataStatistics_Cond;
  }
  /* 根据条件获取相应的对象列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
  */
  public async BindGv_vSysScoreSummary() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    const strWhereCond = await this.CombinevSysScoreSummaryCondition();

    const objgs_TotalDataStatistics_Cond = this.Combinegs_TotalConditionObj();
    let hidIdCurrEduCls = GetInputValueInDivObj(objLayOut, 'hidIdCurrEduClspara');
    if (hidIdCurrEduCls == '') {
      hidIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    }
    // const strWhere_Cond = JSON.stringify(objgs_TotalDataStatistics_Cond);

    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    let arrvSysScoreSummaryObjLst: Array<clsvSysScoreSummaryEN> = [];
    let arrvSysScoreSummaryObjLst1: Array<clsvSysScoreSummaryEN> = [];
    let arrvSysScoreSummaryObjLst2: Array<clsvSysScoreSummaryEN> = [];
    //教学班学生
    let arrvCurrEduClsObjLst: Array<clsvCurrEduClsStuEN> = [];

    //观点数量统计
    let arrgs_TotalDataStatisticsObjLst0: Array<clsgs_TotalDataStatisticsEN> = [];
    let arrgs_TotalDataStatisticsObjLst: Array<clsgs_TotalDataStatisticsEN> = [];
    //观点类型
    let arrObjLst_Sel: Array<clsgs_TotalDataTypeEN> = [];
    try {
      arrvSysScoreSummaryObjLst = await vSysScoreSummary_GetObjLstAsync(strWhereCond);

      // 获取教学班学生数据；
      arrvCurrEduClsObjLst = await vCurrEduClsStu_GetObjLstCache(hidIdCurrEduCls);

      //获取各类型观点数量数据；
      await gs_TotalDataStatisticsEx_GetSubObjLstCacheEx(
        objgs_TotalDataStatistics_Cond,
        hidIdCurrEduCls,
      ).then((jsonData) => {
        arrgs_TotalDataStatisticsObjLst0 = <Array<clsgs_TotalDataStatisticsEN>>jsonData;
      });
      console.log('完成对象列表获取!');

      //类型数据；
      //const strWhereCond3 = " totalDataTypeId !='02'";
      //arrObjLst_Sel = await gs_TotalDataType_GetObjLstAsync(strWhereCond3);
      arrObjLst_Sel = await gs_TotalDataType_GetObjLstCache();
      arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.totalDataTypeId != '02');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvSysScoreSummaryObjLst.length == 0) {
    //    const strMsg: string = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
    //    alert(strMsg);
    //    return;
    //}
    try {
      let strhtml = '';
      // const cateid = 0;
      //$('#tbList tr').remove();
      let CountTotal = 0; //存放教学班学生人数；

      arrvSysScoreSummaryObjLst1 = arrvSysScoreSummaryObjLst.filter((x) => x.scoreTypeId == '0009');

      for (let i = 0; i < arrvSysScoreSummaryObjLst1.length; i++) {
        const strUserId: string = arrvSysScoreSummaryObjLst1[i].userId;
        const strUserName: string = arrvSysScoreSummaryObjLst1[i].userName;
        // const strcollegeName: string = arrvSysScoreSummaryObjLst1[i].collegeName;
        const strmajorName: string = arrvSysScoreSummaryObjLst1[i].majorName;
        const strSchoolYear: string = arrvSysScoreSummaryObjLst1[i].schoolYear;
        // const strgradeBaseName: string = arrvSysScoreSummaryObjLst1[i].gradeBaseName;
        const streduClsName: string = arrvSysScoreSummaryObjLst1[i].eduClsName;
        const strIdCurrEduCls: string = arrvSysScoreSummaryObjLst1[i].idCurrEduCls;

        const arrvCurrEduObjList = arrvCurrEduClsObjLst.filter(
          (x) => x.idCurrEduCls == strIdCurrEduCls,
        );
        CountTotal = arrvCurrEduObjList.length; //获取教学班人数

        //const PaperSubviewsS: string = "0";
        //const PersonalViewsS: string = "0";
        //const ExpertViewsS: string = "0";
        //const ConceptsS: string = "0";
        //const ObjectiveFactsS: string = "0";
        //const ObjectiveDataS: string = "0";
        //const OthersCommentS: string = "0";
        //const UserS: string = "0";
        //const ViewpointRatioS = 0;
        //const ViewpointConversionS: string = "0";//各观点折算分
        //const SkillS: string = "0"; //技能
        //const SocialRelationsS: string = "0";  //社会关系
        //const qa_AnswerS: string = "0";//问题回答

        let PaperSubviewsS = 0;
        let NumberPaperSubviewsS = 0; //教师子观点名次
        let PersonalViewsS = 0;
        let NumberPersonalViewsS = 0; //个人观点名次
        let ExpertViewsS = 0;
        let NumberExpertViewsS = 0; //专家观点名次
        let ConceptsS = 0;
        let NumberConceptsS = 0; //概念名次
        let ObjectiveFactsS = 0;
        let NumberObjectiveFactsS = 0; //客观事实名次
        let ObjectiveDataS = 0;
        let NumberObjectiveDataS = 0; //客观数据名次

        let OthersCommentS = 0;
        // let UserS = '0';
        let ViewpointRatioS = 0;
        // const ViewpointConversionS = 0; //各观点折算分
        let SkillS = 0; //技能
        let NumberSkillS = 0; //技能名次
        let SocialRelationsS = 0; //社会关系
        let NumberSocialRelationsS = 0; //社会关系名次
        let qa_AnswerS = 0; //问题回答
        let Numberqa_AnswerS = 0; //问题回答名次

        //讨论教师总打分 、 评价教师总打分；
        let AnswerTotal = 0;
        let SysCommentTotal = 0;
        //标志教师总打分
        let TagTotal = 0;

        //const PaperSubviewsR: string = "0"; //学生分数 以下参数雷同；都是存放学生分数；
        //const PersonalViewsR: string = "0";
        //const ExpertViewsR: string = "0";
        //const ConceptsR: string = "0";
        //const ObjectiveFactsR: string = "0";
        //const ObjectiveDataR: string = "0";
        //const OthersCommentR: string = "0";
        //const UserR: string = "0";
        ////const ViewpointRatioR: string = "0";//各观点占学生分数
        ////const TotalScoreR: string = "0"; //学生分数

        //const SkillR: string = "0"; //技能
        //const SocialRelationsR: string = "0";  //社会关系
        //const qa_AnswerR: string = "0";//学生分数  问题回答

        let PaperSubviewsR = 0; //生分数 以下参数雷同；都是存放生分数；
        let NumberPaperSubviewsR = 0; //学生子观点名次
        let PersonalViewsR = 0;
        let NumberPersonalViewsR = 0; //个人观点名次
        let ExpertViewsR = 0;
        let NumberExpertViewsR = 0; //专家观点名次
        let ConceptsR = 0;
        let NumberConceptsR = 0; //概念名次
        let ObjectiveFactsR = 0;
        let NumberObjectiveFactsR = 0; //客观事实名次
        let ObjectiveDataR = 0;
        let NumberObjectiveDataR = 0; //客观数据名次

        // const OthersCommentR = 0;
        // const UserR = '0';
        //const ViewpointRatioR: string = "0";//各观点占生分数
        //const TotalScoreR: string = "0"; //生分数

        let SkillR = 0; //技能
        let NumberSkillR = 0; //技能名次
        let SocialRelationsR = 0; //社会关系
        let NumberSocialRelationsR = 0; //社会关系名次
        let qa_AnswerR = 0; //生分数  问题回答
        let Numberqa_AnswerR = 0; //问题回答名次

        let stuScoreTotal = 0; //学生分 总分

        //各类型观点数量数据参数；
        // let PaperCount = 0; //01
        let PaperViewpointCount = 0; //03
        let ViewpointCount = 0; //04
        let ExpertViewpointCount = 0; //05
        let ConceptCount = 0; //06
        let TopicObjectiveCount = 0; //07
        let ObjectiveBasisCount = 0; //08
        let SkillCount = 0; //09
        let SysSocialCount = 0; //10
        let QaAnswerCount = 0; //11

        //得到各观点数据类型数据、
        for (let k = 0; k < arrObjLst_Sel.length; k++) {
          // const TypeName = arrObjLst_Sel[k].totalDataTypeName;
          const strTypeId = arrObjLst_Sel[k].totalDataTypeId;

          //查询过滤等于ID数据；

          arrgs_TotalDataStatisticsObjLst = arrgs_TotalDataStatisticsObjLst0.filter(
            (x) => x.totalDataTypeId == strTypeId && x.dataUser == strUserId,
          );

          if (arrgs_TotalDataStatisticsObjLst.length > 0) {
            //存放数据各类型的数据统计；
            switch (strTypeId) {
              case enumgs_TotalDataType.Paper_01: // '01':
                // PaperCount = arrgs_TotalDataStatisticsObjLst.length;
                break;
              case enumgs_TotalDataType.PaperSubViewpoint_03:
                PaperViewpointCount = arrgs_TotalDataStatisticsObjLst.length;
                break;
              case enumgs_TotalDataType.Viewpoint_04:
                ViewpointCount = arrgs_TotalDataStatisticsObjLst.length;
                break;
              case enumgs_TotalDataType.Viewpoint_05:
                ExpertViewpointCount = arrgs_TotalDataStatisticsObjLst.length;
                break;
              case enumgs_TotalDataType.Concept_06:
                ConceptCount = arrgs_TotalDataStatisticsObjLst.length;
                break;
              case enumgs_TotalDataType.TopicObjective_07:
                TopicObjectiveCount = arrgs_TotalDataStatisticsObjLst.length;
                break;
              case enumgs_TotalDataType.TopicObjective_08:
                ObjectiveBasisCount = arrgs_TotalDataStatisticsObjLst.length;
                break;
              case enumgs_TotalDataType.SysSkill_09:
                SkillCount = arrgs_TotalDataStatisticsObjLst.length;
                break;
              case enumgs_TotalDataType.SysSocialRelations_10:
                SysSocialCount = arrgs_TotalDataStatisticsObjLst.length;
                break;
              case enumgs_TotalDataType.qa_Answer_11:
                QaAnswerCount = arrgs_TotalDataStatisticsObjLst.length;
                break;

              default:
                break;
            }
          }
        }

        arrvSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter((x) => x.userId == strUserId);
        for (let j = 0; j < arrvSysScoreSummaryObjLst2.length; j++) {
          const strScoreTypeId: string = arrvSysScoreSummaryObjLst2[j].scoreTypeId;
          switch (strScoreTypeId) {
            case '0001':
              PaperSubviewsS = arrvSysScoreSummaryObjLst2[j].score;
              //子观点   学生 名次

              break;
            case '0002':
              PersonalViewsS = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0003':
              ExpertViewsS = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0004':
              ConceptsS = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0005':
              ObjectiveFactsS = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0006':
              ObjectiveDataS = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0007':
              OthersCommentS = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0008':
              // UserS = arrvSysScoreSummaryObjLst2[j].score.toString();
              break;
            case '0009':
              ViewpointRatioS = arrvSysScoreSummaryObjLst2[j].score;
              break;

            case '0021': //技能；
              SkillS = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0023': //社会关系
              SocialRelationsS = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0025': //问题回答
              qa_AnswerS = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0041': //讨论教师打分
              AnswerTotal = arrvSysScoreSummaryObjLst2[j].score;
              break;
            case '0042': //评价教师打分
              SysCommentTotal = arrvSysScoreSummaryObjLst2[j].score;
              break;
            case '0045': //标志教师打分
              TagTotal = arrvSysScoreSummaryObjLst2[j].score;
              break;

            case '0031': //从这里开始 得到是学生评价分汇总
              PaperSubviewsR = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0032':
              PersonalViewsR = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0033':
              ExpertViewsR = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0034':
              ConceptsR = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0035':
              ObjectiveFactsR = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0036':
              ObjectiveDataR = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0037':
              SkillR = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0038':
              SocialRelationsR = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0039': //问题回答 生分
              qa_AnswerR = arrvSysScoreSummaryObjLst2[j].score;

              break;
            case '0040': //生分 总分
              stuScoreTotal = arrvSysScoreSummaryObjLst2[j].score;
              break;
            default:
              break;
          }
        }

        //得到标志名次，通过标志教师打分分数；
        //标记名次
        let TagIndexNumber = 0;
        let arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) => x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0045' && x.score > TagTotal,
        );
        if (TagTotal == 0) {
          TagIndexNumber = CountTotal;
        } else {
          TagIndexNumber = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }

        //得到讨论名次，通过分数；
        let qaIndexNumber = 0;
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0041' && x.score > AnswerTotal,
        );
        if (AnswerTotal == 0) {
          qaIndexNumber = CountTotal;
        } else {
          qaIndexNumber = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }

        //得到评价名次，通过分数；
        let CommentIndexNumber = 0;
        const arrSysScoreSummaryObjLst4 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls &&
            x.scoreTypeId == '0042' &&
            x.score > SysCommentTotal,
        );
        if (SysCommentTotal == 0) {
          CommentIndexNumber = CountTotal;
        } else {
          CommentIndexNumber = arrSysScoreSummaryObjLst4.length + 1; //加1代表当前排名；
        }

        //教师分、排名
        let TeaIndexNumber = 0;
        const arrSysScoreSummaryObjLst1 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls &&
            x.scoreTypeId == '0009' &&
            x.score > ViewpointRatioS,
        );
        if (ViewpointRatioS == 0) {
          TeaIndexNumber = CountTotal;
        } else {
          TeaIndexNumber = arrSysScoreSummaryObjLst1.length + 1; //加1代表当前排名；
        }

        //学生分 、排名
        let StuIndexNumber = 0;
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0040' && x.score > stuScoreTotal,
        );
        if (stuScoreTotal == 0) {
          StuIndexNumber = CountTotal;
        } else {
          StuIndexNumber = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }

        //教师排名
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls &&
            x.scoreTypeId == '0001' &&
            x.score > PaperSubviewsS,
        );
        if (PaperSubviewsS == 0) {
          NumberPaperSubviewsS = CountTotal;
        } else {
          NumberPaperSubviewsS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls &&
            x.scoreTypeId == '0002' &&
            x.score > PersonalViewsS,
        );
        if (PersonalViewsS == 0) {
          NumberPersonalViewsS = CountTotal;
        } else {
          NumberPersonalViewsS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0003' && x.score > ExpertViewsS,
        );
        if (ExpertViewsS == 0) {
          NumberExpertViewsS = CountTotal;
        } else {
          NumberExpertViewsS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0004' && x.score > ConceptsS,
        );
        if (ConceptsS == 0) {
          NumberConceptsS = CountTotal;
        } else {
          NumberConceptsS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls &&
            x.scoreTypeId == '0005' &&
            x.score > ObjectiveFactsS,
        );
        if (ObjectiveFactsS == 0) {
          NumberObjectiveFactsS = CountTotal;
        } else {
          NumberObjectiveFactsS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls &&
            x.scoreTypeId == '0006' &&
            x.score > ObjectiveDataS,
        );
        if (ObjectiveDataS == 0) {
          NumberObjectiveDataS = CountTotal;
        } else {
          NumberObjectiveDataS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) => x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0021' && x.score > SkillS,
        );
        if (SkillS == 0) {
          NumberSkillS = CountTotal;
        } else {
          NumberSkillS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls &&
            x.scoreTypeId == '0023' &&
            x.score > SocialRelationsS,
        );
        if (SocialRelationsS == 0) {
          NumberSocialRelationsS = CountTotal;
        } else {
          NumberSocialRelationsS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0025' && x.score > qa_AnswerS,
        );
        if (qa_AnswerS == 0) {
          Numberqa_AnswerS = CountTotal;
        } else {
          Numberqa_AnswerS = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }

        //学生排名；
        //名次 学生
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls &&
            x.scoreTypeId == '0031' &&
            x.score > PaperSubviewsR,
        );
        if (PaperSubviewsR == 0) {
          NumberPaperSubviewsR = CountTotal;
        } else {
          NumberPaperSubviewsR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls &&
            x.scoreTypeId == '0032' &&
            x.score > PersonalViewsR,
        );
        if (PersonalViewsR == 0) {
          NumberPersonalViewsR = CountTotal;
        } else {
          NumberPersonalViewsR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0033' && x.score > ExpertViewsR,
        );
        if (ExpertViewsR == 0) {
          NumberExpertViewsR = CountTotal;
        } else {
          NumberExpertViewsR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0034' && x.score > ConceptsR,
        );
        if (ConceptsR == 0) {
          NumberConceptsR = CountTotal;
        } else {
          NumberConceptsR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls &&
            x.scoreTypeId == '0035' &&
            x.score > ObjectiveFactsR,
        );
        if (ObjectiveFactsR == 0) {
          NumberObjectiveFactsR = CountTotal;
        } else {
          NumberObjectiveFactsR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls &&
            x.scoreTypeId == '0036' &&
            x.score > ObjectiveDataR,
        );
        if (ObjectiveDataR == 0) {
          NumberObjectiveDataR = CountTotal;
        } else {
          NumberObjectiveDataR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) => x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0037' && x.score > SkillR,
        );
        if (SkillR == 0) {
          NumberSkillR = CountTotal;
        } else {
          NumberSkillR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }
        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls &&
            x.scoreTypeId == '0038' &&
            x.score > SocialRelationsR,
        );
        if (SocialRelationsR == 0) {
          NumberSocialRelationsR = CountTotal;
        } else {
          NumberSocialRelationsR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }

        arrSysScoreSummaryObjLst2 = arrvSysScoreSummaryObjLst.filter(
          (x) =>
            x.idCurrEduCls == strIdCurrEduCls && x.scoreTypeId == '0039' && x.score > qa_AnswerR,
        );
        if (qa_AnswerR == 0) {
          Numberqa_AnswerR = CountTotal;
        } else {
          Numberqa_AnswerR = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
        }

        strhtml += '<tr>';
        //strhtml += '<td>' + strUserName + '</br>' + strSchoolYear + '</td><td>' + streduClsName + '</br>' + strmajorName + '</td>';

        //strhtml += '<td>教师分：' + PaperSubviewsS + '</br>学生分：' + PaperSubviewsR + '</td><td>教师分：' + PersonalViewsS + '</br>学生分：' + PersonalViewsR + '</td>';
        //strhtml += '<td>教师分：' + ExpertViewsS + '</br>学生分：' + ExpertViewsR + '</td><td>教师分：' + ConceptsS + '</br>学生分：' + ConceptsR + '</td>';
        //strhtml += '<td>教师分：' + ObjectiveFactsS + '</br>学生分：' + ObjectiveFactsR + '</td><td>教师分：' + ObjectiveDataS + '</br>学生分：' + ObjectiveDataR + '</td>';
        //strhtml += '<td>教师分：' + SkillS + '</br>学生分：' + SkillR + '</td><td>教师分：' + SocialRelationsS + '</br>学生分：' + SocialRelationsR + '</td>';
        //strhtml += '<td>教师分：' + qa_AnswerS + '</br>学生分：' + qa_AnswerR + '</td>';

        //strhtml += '<td>教师分：' + OthersCommentS + '</br></td>';
        //strhtml += '<td>教师分：' + AnswerTotal + '</br>名次：' + qaIndexNumber + '</td>';
        //strhtml += '<td>教师分：' + SysCommentTotal + '</br>名次：' + CommentIndexNumber + '</td>';
        //strhtml += '<td>教师：' + TeaIndexNumber + '</br>学生：' + StuIndexNumber + '</td>';
        //strhtml += '<td>教师分：' + ViewpointRatioS + '</br>学生分：' + stuScoreTotal + '</td>';
        strhtml += `<td>${strUserName}</br>${strSchoolYear}</td><td>${streduClsName}</br>${strmajorName}</td>`;

        //strhtml += '<td>师分：' + PaperSubviewsS + '/' + NumberPaperSubviewsS + '</br>生分：' + PaperSubviewsR + '/' + NumberPaperSubviewsR + '</td>';
        //strhtml += '<td>师分：' + PersonalViewsS + '/' + NumberPersonalViewsS + '</br>生分：' + PersonalViewsR + '/' + NumberPersonalViewsR + '</td>';
        //strhtml += '<td>师分：' + ExpertViewsS + '/' + NumberExpertViewsS + '</br>生分：' + ExpertViewsR + '/' + NumberExpertViewsR + '</td>';
        //strhtml += '<td>师分：' + ConceptsS + '/' + NumberConceptsS + '</br>生分：' + ConceptsR + '/' + NumberConceptsR + '</td>';
        //strhtml += '<td>师分：' + ObjectiveFactsS + '/' + NumberObjectiveFactsS + '</br>生分：' + ObjectiveFactsR + '/' + NumberObjectiveFactsR + '</td>';
        //strhtml += '<td>师分：' + ObjectiveDataS + '/' + NumberObjectiveDataS + '</br>生分：' + ObjectiveDataR + '/' + NumberObjectiveDataR + '</td>';
        //strhtml += '<td>师分：' + SkillS + '/' + NumberSkillS + '</br>生分：' + SkillR + '/' + NumberSkillR + '</td>';
        //strhtml += '<td>师分：' + SocialRelationsS + '/' + NumberSocialRelationsS + '</br>生分：' + SocialRelationsR + '/' + NumberSocialRelationsR + '</td>';
        //strhtml += '<td>师分：' + qa_AnswerS + '/' + Numberqa_AnswerS + '</br>生分：' + qa_AnswerR + '/' + Numberqa_AnswerR + '</td>';
        strhtml += `<td>师分：${PaperSubviewsS}/${NumberPaperSubviewsS}</br>生分：${PaperSubviewsR}/${NumberPaperSubviewsR}</br>数量：${PaperViewpointCount}</td>`;
        strhtml += `<td>师分：${PersonalViewsS}/${NumberPersonalViewsS}</br>生分：${PersonalViewsR}/${NumberPersonalViewsR}</br>数量：${ViewpointCount}</td>`;
        strhtml += `<td>师分：${ExpertViewsS}/${NumberExpertViewsS}</br>生分：${ExpertViewsR}/${NumberExpertViewsR}</br>数量：${ExpertViewpointCount}</td>`;
        strhtml += `<td>师分：${ConceptsS}/${NumberConceptsS}</br>生分：${ConceptsR}/${NumberConceptsR}</br>数量：${ConceptCount}</td>`;
        strhtml += `<td>师分：${ObjectiveFactsS}/${NumberObjectiveFactsS}</br>生分：${ObjectiveFactsR}/${NumberObjectiveFactsR}</br>数量：${TopicObjectiveCount}</td>`;
        strhtml += `<td>师分：${ObjectiveDataS}/${NumberObjectiveDataS}</br>生分：${ObjectiveDataR}/${NumberObjectiveDataR}</br>数量：${ObjectiveBasisCount}</td>`;
        strhtml += `<td>师分：${SkillS}/${NumberSkillS}</br>生分：${SkillR}/${NumberSkillR}</br>数量：${SkillCount}</td>`;
        strhtml += `<td>师分：${SocialRelationsS}/${NumberSocialRelationsS}</br>生分：${SocialRelationsR}/${NumberSocialRelationsR}</br>数量：${SysSocialCount}</td>`;
        strhtml += `<td>师分：${qa_AnswerS}/${Numberqa_AnswerS}</br>生分：${qa_AnswerR}/${Numberqa_AnswerR}</br>数量：${QaAnswerCount}</td>`;
        //strhtml += '<td>师分：' + OthersCommentS + '</br>生分：' + OthersCommentR + '</td><td>师分：' + ViewpointRatioS + '</br>生分：' + ViewpointRatioR + '</br>折算分：' + ViewpointConversionS + '</td>';
        strhtml += `<td>师分：${OthersCommentS}</br></td>`;
        strhtml += `<td>师分：${AnswerTotal}</br>名次：${qaIndexNumber}</td>`;
        strhtml += `<td>师分：${SysCommentTotal}</br>名次：${CommentIndexNumber}</td>`;
        strhtml += `<td>师分：${TagTotal}</br>名次：${TagIndexNumber}</td>`; //标志打分排名

        strhtml += `<td>师分：${ViewpointRatioS}</br>生分：${stuScoreTotal}</td>`;
        strhtml += `<td>教师：${TeaIndexNumber}</br>学生：${StuIndexNumber}</td>`;

        strhtml += '</tr>';
      }
      //拼接；
      //$("#tbList").append(strhtml);
      $('#divScoreTotalDataLst').html(strhtml);

      //this.BindTab_vSysScoreSummary(strListDiv, arrvSysScoreSummaryObjLst);
      console.log('完成BindGv_vSysScoreSummary!');
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
  public Combinegs_TotalDetailCondition(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //  const strUserId = this.userId;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      const strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
      if (strIdCurrEduCls == '') {
        strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;
      } else {
        strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`;
      }
      const strUserId = this.userId;
      if (strUserId == '') {
        strWhereCond += ` and dataUser ='${this.userId}'`;
      } else {
        //获取当前用户自己数据
        strWhereCond += ` And dataUser='${strUserId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public Combinegs_TotalConditionDetailObj(): clsgs_TotalDataStatisticsEN {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const objgs_TotalDataStatistics_Cond: clsgs_TotalDataStatisticsEN =
      new clsgs_TotalDataStatisticsEN();
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    //  const strUserId = this.userId;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      let strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
      if (strIdCurrEduCls == '') {
        strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
        // strWhereCond += ` And ${clsgs_TotalDataStatisticsEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;

        $('#hidIdCurrEduClspara').val(clsPubLocalStorage.idCurrEduCls);
      } else {
        //strWhereCond += ` And ${clsgs_TotalDataStatisticsEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`;
        $('#hidIdCurrEduClspara').val(strIdCurrEduCls);
      }
      const strUserId = this.userId;
      if (strUserId == '') {
        //  strWhereCond += " and dataUser ='" + this.userId + "'";
        const strSessionUserId = this.userId;
        objgs_TotalDataStatistics_Cond.SetCondFldValue(
          clsgs_TotalDataStatisticsEN.con_DataUser,
          strSessionUserId,
          '=',
        );
      } else {
        //获取当前用户自己数据
        //   strWhereCond += " And dataUser='" + strUserId + "'";

        objgs_TotalDataStatistics_Cond.SetCondFldValue(
          clsgs_TotalDataStatisticsEN.con_DataUser,
          strUserId,
          '=',
        );
      }
      objgs_TotalDataStatistics_Cond.SetCondFldValue(
        clsgs_TotalDataStatisticsEN.con_IdCurrEduCls,
        strIdCurrEduCls,
        '=',
      );
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objgs_TotalDataStatistics_Cond;
  }

  //导出的详细数据；
  public async ExportDetail() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName = this.getDivName(enumDivType.LayOut_01);

    let strIdCurrEducls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
    if (strIdCurrEducls == '') {
      strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    }

    // const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    //const objgs_TotalDataStatistics_Cond = this.Combinegs_TotalDetailCondition();
    const objgs_TotalDataStatistics_Cond = this.Combinegs_TotalConditionDetailObj();

    // const strWhereCond = JSON.stringify(objgs_TotalDataStatistics_Cond);
    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    let arrgs_TotalDataStatisticsObjLst0: Array<clsgs_TotalDataStatisticsEN> = [];
    let arrgs_TotalDataStatisticsObjLst: Array<clsgs_TotalDataStatisticsEN> = [];
    let arrObjLst_Sel: Array<clsgs_TotalDataTypeEN> = [];

    try {
      //this.recCount = await gs_TotalDataStatisticsEx_GetObjLstEx(objgs_TotalDataStatistics_Cond);
      // console.log("完成计数!");
      await gs_TotalDataStatisticsEx_GetSubObjLstCacheEx(
        objgs_TotalDataStatistics_Cond,
        strIdCurrEducls,
      ).then((jsonData) => {
        // const responseObjLst = await gs_TotalDataStatisticsEx_GetObjLstEx(objgs_TotalDataStatistics_Cond).then((jsonData) => {
        arrgs_TotalDataStatisticsObjLst0 = <Array<clsgs_TotalDataStatisticsEN>>jsonData;
      });
      console.log('完成对象列表获取!');

      //const strWhereCond = " totalDataTypeId !='02'";
      //arrObjLst_Sel = await gs_TotalDataType_GetObjLstAsync(strWhereCond);
      arrObjLst_Sel = await gs_TotalDataType_GetObjLstCache();
      arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.totalDataTypeId != '02');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根据条件获取论文视图的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }

    try {
      //换行符
      const strBr =
        '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
      //动态显示对应的数据
      let strhtml = '';

      //个人观点
      strhtml += '<div class="info" id="infoDetailTotal">';

      for (let k = 0; k < arrObjLst_Sel.length; k++) {
        const TypeName = arrObjLst_Sel[k].totalDataTypeName;
        const strTypeId = arrObjLst_Sel[k].totalDataTypeId;

        //查询过滤等于ID数据；

        arrgs_TotalDataStatisticsObjLst = arrgs_TotalDataStatisticsObjLst0.filter(
          (x) => x.totalDataTypeId == strTypeId,
        );

        if (arrgs_TotalDataStatisticsObjLst.length > 0) {
          const strLength = arrgs_TotalDataStatisticsObjLst.length.toString();
          //存放数据各类型的数据统计；
          switch (strTypeId) {
            case enumgs_TotalDataType.Paper_01:
              $('#PaperCount').html(strLength);
              break;
            case enumgs_TotalDataType.PaperSubViewpoint_03:
              $('#PaperViewpointCount').html(strLength);
              break;
            case enumgs_TotalDataType.Viewpoint_04:
              $('#ViewpointCount').html(strLength);
              break;
            case enumgs_TotalDataType.Viewpoint_05:
              $('#ExpertViewpointCount').html(strLength);
              break;
            case enumgs_TotalDataType.Concept_06:
              $('#ConceptCount').html(strLength);
              break;
            case enumgs_TotalDataType.TopicObjective_07:
              $('#TopicObjectiveCount').html(strLength);
              break;
            case enumgs_TotalDataType.TopicObjective_08:
              $('#ObjectiveBasisCount').html(strLength);
              break;
            case enumgs_TotalDataType.SysSkill_09:
              $('#SkillCount').html(strLength);
              break;
            case enumgs_TotalDataType.SysSocialRelations_10:
              $('#SysSocialCount').html(strLength);
              break;
            case enumgs_TotalDataType.qa_Answer_11:
              $('#QaAnswerCount').html(strLength);
              break;

            default:
              break;
          }

          strhtml += `<div><span class="color3">${TypeName}</span>`;
          strhtml += ` </br><span class="color4">数量：&nbsp;&nbsp;</span><span class="abstract-text">${arrgs_TotalDataStatisticsObjLst.length}</span> </div></br > `;
          //strhtml += '<div class="title btn-3"><div style="float:left;"><a href="javascript:void(0)" title="各类型表数据详情">' + TypeName + '</a></div></div></br>';
          //strhtml += '<div class="title btn-3"><div style="float:left;"></div></div></br>';

          //strhtml += '<ul class="artlist">';
          //const v = 0;//给内容加个序号
          //for (let i = 0; i < arrgs_TotalDataStatisticsObjLst.length; i++) {

          //    v++;
          //    //对内容进行换行替换
          //    const strTotalContent = objgs_TotalDataStatistics.memo;
          //    const strWeek = objgs_TotalDataStatistics.week;
          //    const strWeekRange = objgs_TotalDataStatistics.weekTimeRange;
          //    strTotalContent = strTotalContent.replace(/\r\n/g, strBr);
          //    strTotalContent = strTotalContent.replace(/\n/g, strBr);

          //    strhtml += '<li><span class="rowtit color4">名称&nbsp;&nbsp;</span><span class="abstract-text">' + strTotalContent + '</span></li>';

          //    strhtml += '<li><span class="rowtit color5">统计&nbsp;&nbsp;教师分数：' + objgs_TotalDataStatistics.teaScore + '';
          //    strhtml += '&nbsp;&nbsp;学生分数：' + objgs_TotalDataStatistics.stuScore + '</span></li>'
          //    strhtml += '<li><span class="rowtit color2">时间&nbsp;&nbsp;当前周：' + strWeek + '';
          //    strhtml += '&nbsp;&nbsp;周时间范围：' + strWeekRange + '</span></li></br>'

          //    //strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
          //}
          //    strhtml += '</ul>';

          strhtml += '';
          // let v = 0; //给内容加个序号
          for (let i = 0; i < arrgs_TotalDataStatisticsObjLst.length; i++) {
            const objgs_TotalDataStatistics = arrgs_TotalDataStatisticsObjLst[i];
            // v++;
            //对内容进行换行替换
            let strTotalContent = objgs_TotalDataStatistics.memo;
            const strWeek = objgs_TotalDataStatistics.week;
            const strWeekRange = objgs_TotalDataStatistics.weekTimeRange;
            if (IsNullOrEmpty(strTotalContent) == true) {
              strTotalContent = await gs_TotalDataTypeEx_GetObjNameByTotalDataType(
                objgs_TotalDataStatistics.totalDataTypeId,
                objgs_TotalDataStatistics.tableKey,
                objgs_TotalDataStatistics.idCurrEduCls,
              );
            } else {
              strTotalContent = strTotalContent.replace(/\r\n/g, strBr);
              strTotalContent = strTotalContent.replace(/\n/g, strBr);
            }
            strhtml += `<span class="color4">名称&nbsp;&nbsp;</span><span class="abstract-text">${strTotalContent}</span></br>`;

            strhtml += `<span class="color5">统计&nbsp;&nbsp;教师分数：${objgs_TotalDataStatistics.teaScore}`;
            strhtml += `&nbsp;&nbsp;学生分数：${objgs_TotalDataStatistics.stuScore}</span></br>`;
            strhtml += `<span class="color6">时间&nbsp;&nbsp;当前周：${strWeek}`;
            strhtml += `&nbsp;&nbsp;周时间范围：${strWeekRange}</span></br></br>`;

            //strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
          }
          strhtml += '';
        }
      }

      strhtml += '</div>';

      // //根据tab点击 加载不同的数据；
      // const strTabKeyId = GetInputValueInDivObj(divName, 'h1idTabNum');
      // if (strTabKeyId == '01') {
      //   //拼接；
      //   $('#divli_PaperDataLst').html(strhtml);
      // } else if (strTabKeyId == '03') {
      //   //拼接；
      //   $('#divli_PaperViewpointDataLst').html(strhtml);
      // } else if (strTabKeyId == '04') {
      //   //拼接；
      //   $('#divli_ViewpointLst').html(strhtml);
      // } else if (strTabKeyId == '05') {
      //   //拼接；
      //   $('#divli_ExpertViewpointDataLst').html(strhtml);
      // } else if (strTabKeyId == '06') {
      //   //拼接；
      //   $('#divli_ConceptDataLst').html(strhtml);
      // } else if (strTabKeyId == '07') {
      //   //拼接；
      //   $('#divli_TopicObjectiveDataLst').html(strhtml);
      // } else if (strTabKeyId == '08') {
      //   //拼接；
      //   $('#divli_ObjectiveBasisDataLst').html(strhtml);
      // } else if (strTabKeyId == '09') {
      //   //拼接；
      //   $('#divli_SkillDataLst').html(strhtml);
      // } else if (strTabKeyId == '10') {
      //   //拼接；
      //   $('#divli_SysSocialRelationsDataLst').html(strhtml);
      // } else if (strTabKeyId == '11') {
      //   //拼接；
      //   $('#divli_QaAnswerDataLst').html(strhtml);
      // } else {
      //   //拼接；
      //   $('#divli_PaperDataLst').html(strhtml);
      // }

      //拼接；

      $('#ExportDetail').html(strhtml);

      gs_TotalDataStatistics_ReFreshCache(strIdCurrEducls);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定论文视图对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public Combinegs_TotalCondition(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //  const strUserId = this.userId;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      ////各个表数据类型
      //if (this.TotalDataTypeId_q != "" && this.TotalDataTypeId_q != "0") {
      //    strWhereCond += ` And ${clsgs_TotalDataTypeEN.con_TotalDataTypeId} = '${this.TotalDataTypeId_q}'`;
      //}
      //获取点击tab切换后值；根据值查询数据；
      const activeTabId = TotalDataStatisticsDetail.GetPropValue('activeTabId');
      const strTotalDataTypeId = gs_TotalDataTypeEx_GetTypeIdByTotalDataTypeTabsId(activeTabId);

      strWhereCond += ` And ${clsgs_TotalDataTypeEN.con_TotalDataTypeId} = '${strTotalDataTypeId}'`;

      const strIdCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');
      if (strIdCurrEduCls == '') {
        strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;
      } else {
        strWhereCond += ` And ${clsvSysScoreSummaryEN.con_IdCurrEduCls} = '${strIdCurrEduCls}'`;
      }
      const strUserId = this.userId;
      if (strUserId == '') {
        strWhereCond += ` and dataUser ='${this.userId}'`;
      } else {
        //获取当前用户自己数据
        strWhereCond += ` And dataUser='${strUserId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //   /* 把所有的查询控件内容组合成一个条件串
  // (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
  //  <returns>条件串(strWhereCond)</returns>
  //*/
  //   public Combineobjgs_TotalDataStatistics_CondObj(): clsgs_TotalDataStatisticsEN {
  //       //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //       //例如 1 = 1 && userName = '张三'
  //       const strWhereCond: string = " 1 = 1 ";
  //        const strUserId = this.userId;
  //       const objgs_TotalDataStatistics_Cond: clsgs_TotalDataStatisticsEN = new clsgs_TotalDataStatisticsEN();

  //       //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  //       try {
  //           if (this.TotalDataTypeId_q != "" && this.TotalDataTypeId_q != "0") {
  //               strWhereCond += ` And ${clsgs_TotalDataTypeEN.con_TotalDataTypeId} = '${this.TotalDataTypeId_q}'`;
  //               objgs_TotalDataStatistics_Cond.SetCondFldValue(clsgs_TotalDataTypeEN.con_TotalDataTypeId, this.TotalDataTypeId_q, "=");
  //           }
  //           //读取session角色 来判断绑定不同数据列表
  //           const strRoleId = userStore.getRoleId;

  //           //根据当前登录人查询所属自己的各表类型数据；
  //           objgs_TotalDataStatistics_Cond.SetCondFldValue(clsgs_TotalDataStatisticsEN.con_DataUser, strUserId, "=");

  //           ////判断角色
  //           ////管理员
  //           //if (strRoleId == "00620001") {

  //           //    $("#btnCancelSubmit").show();

  //           //}

  //           //else if (strRoleId == "00620002") {
  //           //}
  //           //else {

  //           //}

  //       }
  //       catch (objException) {
  //           const strMsg: string = `(errid:WiTsCs0005)在组合查询条件对象(CombineTotalConditionObj)时出错!请联系管理员!${objException}`;
  //           throw strMsg;
  //       }
  //       return objgs_TotalDataStatistics_Cond;
  //   }

  /* 总数统计 查询
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  //public async liTotalDataNum_Click() {
  //    try {
  //        const gvResult1 = await this.Bind_AllData();
  //    }
  //    catch (e:any) {
  //        console.error('catch(e)=');
  //        console.error(e);
  //        const strMsg: string = ` const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
  //        alert(strMsg);
  //    }
  //}

  public async Bind_AllData() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    const objgs_TotalDataStatistics_Cond = this.Combinegs_TotalCondition();
    //const strWhereCond = JSON.stringify(objgs_TotalDataStatistics_Sim);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    // const arrgs_TotalDataStatisticsObjLst0: Array<clsgs_TotalDataStatisticsEN> = [];
    let arrgs_TotalDataStatisticsObjLst: Array<clsgs_TotalDataStatisticsEN> = [];
    // const arrObjLst_Sel: Array<clsgs_TotalDataTypeEN> = [];
    const objPagerPara: stuPagerPara = {
      pageIndex: intCurrPageIndex,
      pageSize: this.pageSize,
      whereCond: objgs_TotalDataStatistics_Cond,
      orderBy: this.hidSortTotalBy,
      sortFun: (x, y) => {
        x = x;
        y = y;
        return 0;
      },
    };

    try {
      this.recCount = await gs_TotalDataStatistics_GetRecCountByCondAsync(
        objgs_TotalDataStatistics_Cond,
      );
      console.log('完成计数!');
      arrgs_TotalDataStatisticsObjLst = await gs_TotalDataStatisticsEx_GetObjLstByPagerAsyncEx(
        objPagerPara,
      );

      console.log('完成对象列表获取!');

      //const strWhereCond = " totalDataTypeId !='02'";
      //arrObjLst_Sel = await gs_TotalDataType_GetObjLstAsync(strWhereCond);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根据条件获取论文视图的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }

    try {
      //换行符
      const strBr =
        '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
      //动态显示对应的数据
      let strhtml = '';

      //个人观点
      strhtml += '<div class="info" id="infoTotal">';

      //for (const k = 0; k < arrObjLst_Sel.length; k++) {
      //    const TypeName = arrObjLst_Sel[k].totalDataTypeName;
      //    const strTypeId = arrObjLst_Sel[k].totalDataTypeId;

      //查询过滤等于ID数据；

      //arrgs_TotalDataStatisticsObjLst = arrgs_TotalDataStatisticsObjLst0.filter(x => x.totalDataTypeId == strTypeId)

      if (arrgs_TotalDataStatisticsObjLst.length > 0) {
        //strhtml += '<div class="title btn-3"><div style="float:left;"><a href="javascript:void(0)" title="各类型表数据详情">' + TypeName + '</a></div></div></br>';
        strhtml += '<div class="title btn-3"><div style="float:left;"></div></div></br>';

        strhtml += '<ul class="artlist">';
        // let v = 0; //给内容加个序号
        for (let i = 0; i < arrgs_TotalDataStatisticsObjLst.length; i++) {
          const objgs_TotalDataStatistics = arrgs_TotalDataStatisticsObjLst[i];
          // v++;
          //对内容进行换行替换
          let strTotalContent = objgs_TotalDataStatistics.memo;
          const strWeek = objgs_TotalDataStatistics.week;
          const strWeekRange = objgs_TotalDataStatistics.weekTimeRange;
          if (IsNullOrEmpty(strTotalContent) == true) {
            strTotalContent = await gs_TotalDataTypeEx_GetObjNameByTotalDataType(
              objgs_TotalDataStatistics.totalDataTypeId,
              objgs_TotalDataStatistics.tableKey,
              objgs_TotalDataStatistics.idCurrEduCls,
            );
          } else {
            strTotalContent = strTotalContent.replace(/\r\n/g, strBr);
            strTotalContent = strTotalContent.replace(/\n/g, strBr);
          }
          strhtml += `<li><span class="rowtit color4">[名称]：&nbsp;&nbsp;</span><span class="abstract-text">${strTotalContent}</span></li>`;

          strhtml += `<li><span class="rowtit color5">[统计]：&nbsp;&nbsp;教师分数：${objgs_TotalDataStatistics.teaScore}`;
          strhtml += `&nbsp;&nbsp;学生分数：${objgs_TotalDataStatistics.stuScore}</span></li>`;
          strhtml += `<li><span class="rowtit color2">[时间]：&nbsp;&nbsp;当前周：${strWeek}`;
          strhtml += `&nbsp;&nbsp;周时间范围：${strWeekRange}</span></li>`;

          strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
        }
        strhtml += '</ul>';
      }

      //}

      strhtml += '</div>';

      //根据tab点击 加载不同的数据；

      const activeTabId = TotalDataStatisticsDetail.GetPropValue('activeTabId');
      switch (activeTabId) {
        case enumTotalDataStatisticsTabs.li_Paper: // '01') {
          //拼接；
          SetDivHtmlInDivObj(objLayOut, 'divli_PaperDataLst', strhtml);
          break;
        case enumTotalDataStatisticsTabs.li_PaperViewpoint: //      } else if (strTabKeyId == '03') {
          //拼接；
          SetDivHtmlInDivObj(objLayOut, 'divli_PaperViewpointDataLst', strhtml);
          break;
        case enumTotalDataStatisticsTabs.li_Viewpoint: //      } else if (strTabKeyId == '04') {
          //拼接；
          SetDivHtmlInDivObj(objLayOut, 'divli_ViewpointDataLst', strhtml);
          break;
        case enumTotalDataStatisticsTabs.li_ExpertViewpoint: //      } else if (strTabKeyId == '05') {
          //拼接；
          SetDivHtmlInDivObj(objLayOut, 'divli_ExpertViewpointDataLst', strhtml);
          break;
        case enumTotalDataStatisticsTabs.li_Concept: //      } else if (strTabKeyId == '06') {
          //拼接；
          SetDivHtmlInDivObj(objLayOut, 'divli_ConceptDataLst', strhtml);
          break;
        case enumTotalDataStatisticsTabs.li_TopicObjective: //      } else if (strTabKeyId == '07') {
          //拼接；
          SetDivHtmlInDivObj(objLayOut, 'divli_TopicObjectiveDataLst', strhtml);
          break;
        case enumTotalDataStatisticsTabs.li_ObjectiveBasis: //      } else if (strTabKeyId == '08') {
          //拼接；
          SetDivHtmlInDivObj(objLayOut, 'divli_ObjectiveBasisDataLst', strhtml);
          break;
        case enumTotalDataStatisticsTabs.li_Skill: //      } else if (strTabKeyId == '09') {
          //拼接；
          SetDivHtmlInDivObj(objLayOut, 'divli_SkillDataLst', strhtml);
          break;
        case enumTotalDataStatisticsTabs.li_SysSocialRelations: // } else if (strTabKeyId == '10') {
          //拼接；
          SetDivHtmlInDivObj(objLayOut, 'divli_SysSocialRelationsDataLst', strhtml);
          break;
        case enumTotalDataStatisticsTabs.li_QaAnswer: //      } else if (strTabKeyId == '11') {
          //拼接；
          SetDivHtmlInDivObj(objLayOut, 'divli_QaAnswerDataLst', strhtml);
          break;
        default:
          //拼接；
          SetDivHtmlInDivObj(objLayOut, 'divli_PaperDataLst', strhtml);
          break;
      }

      ////拼接；
      //$("#divDataLst").html(strhtml);
      //if (this.recCount >= 10) {
      $('#divPager').show();
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      //}

      gs_TotalDataStatistics_ReFreshCache(strIdCurrEducls);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定论文视图对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:从界面列表中根据某一个字段排序
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
      gs_TotalDataStatisticsCRUD.ascOrDesc4SortFun,
      gs_TotalDataStatisticsCRUD.sortvgs_TotalDataStatisticsBy,
      strSortExpress,
    );
    gs_TotalDataStatisticsCRUD.sortvgs_TotalDataStatisticsBy = sortBy;
    gs_TotalDataStatisticsCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    gs_TotalDataStatisticsCRUD.sortFunStatic = sortFun;
    await this.Bind_AllData();
  }
  /* 函数功能:在数据 列表中跳转到某一页
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
<param name = "intPageIndex">页序号</param>
*/
  public async IndexPage(intPageIndex: number) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);

    await this.Bind_AllData();

    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
  }

  //--------------------------------------------------------------------------tab页切换事件
  //论文
  public async li_Paper_Click() {
    try {
      await this.Bind_AllData();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取统计论文列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //论文子观点
  public async li_PaperViewpoint_Click() {
    try {
      await this.Bind_AllData();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取统计论文子观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //个人观点
  public async li_Viewpoint_Click() {
    try {
      await this.Bind_AllData();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取统计个人观点列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //专家观点
  public async li_ExpertViewpoint_Click() {
    try {
      await this.Bind_AllData();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取统计专家列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //概念
  public async li_Concept_Click() {
    try {
      await this.Bind_AllData();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取统计概念列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //客观事实
  public async li_TopicObjective_Click() {
    try {
      await this.Bind_AllData();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取统计客观事实列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //客观数据
  public async li_ObjectiveBasis_Click() {
    try {
      await this.Bind_AllData();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取统计客观数据列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //技能
  public async li_Skill_Click() {
    try {
      await this.Bind_AllData();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取统计技能列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //社会关系
  public async li_SysSocialRelations_Click() {
    try {
      await this.Bind_AllData();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取统计社会关系列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  //问题回答
  public async li_QaAnswer_Click() {
    try {
      await this.Bind_AllData();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取统计问题回答列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //    /*
  //* 数据类型
  //*/
  //    public get TotalDataTypeId_q(): string {
  //        return $("#ddlTotalDataTypeId_q").val();
  //    }
  //    /*
  //    * 数据类型
  //   */
  //    public set TotalDataTypeId_q(value: string) {
  //        $("#ddlTotalDataTypeId_q").val(value);
  //    }

  /*
   * 获取当前页序号
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }

  public get userId(): string {
    const strUserId = TotalDataStatisticsDetail.GetPropValue('userId');
    return strUserId;
  }

  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortTotalBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortTotalBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortTotalBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortTotalBy');
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvSysScoreSummaryBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvSysScoreSummaryBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvSysScoreSummaryBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvSysScoreSummaryBy');
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage = new TotalDataStatisticsDetail();
    console.log(strKeyId);

    switch (strCommandName) {
      case 'changeTab':
        objPage.ChangeTab(strKeyId);
        break;
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

  public ChangeTab(strTabId: string) {
    // alert(strTabId);
    let strMsg;
    switch (strTabId) {
      case enumTotalDataStatisticsTabs.li_Paper: // '小组成员' },
        this.li_Paper_Click();
        break;
      case enumTotalDataStatisticsTabs.li_PaperViewpoint: //, label: '计划' },
        this.li_PaperViewpoint_Click();
        break;
      case enumTotalDataStatisticsTabs.li_Viewpoint: //, label: '反思' },
        this.li_Viewpoint_Click();
        break;

      case enumTotalDataStatisticsTabs.li_ExpertViewpoint: //, label: '论文子观点' },
        this.li_ExpertViewpoint_Click();
        break;
      case enumTotalDataStatisticsTabs.li_Concept: //, label: '主题各观点' },
        this.li_Concept_Click;
        break;
      case enumTotalDataStatisticsTabs.li_TopicObjective: //, label: '小组论文写作' },
        this.li_TopicObjective_Click();
        break;
      case enumTotalDataStatisticsTabs.li_ObjectiveBasis: //, label: '会议纪要' },
        this.li_ObjectiveBasis_Click();
        break;
      case enumTotalDataStatisticsTabs.li_Skill: //, label: '论文汇报' },
        this.li_Skill_Click();
        break;
      case enumTotalDataStatisticsTabs.li_SysSocialRelations: //, label: '待研究问题' },
        this.li_SysSocialRelations_Click();
        break;
      case enumTotalDataStatisticsTabs.li_QaAnswer: //, label: '研究成果' },
        this.li_QaAnswer_Click();
        break;
      default:
        strMsg = `Tab类型:${strTabId}在函数(function ChangeTab in ResearchTopic_QUDIExB)中没有被处理！`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
