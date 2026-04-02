import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { vCurrEduClsStu_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import { vCurrEduClsTeacher_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import { SysScoreSummary_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsSysScoreSummaryWApi';
import { ResearchTopic_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { vCurrEduClsTeacherEx_SortFun_OrderNum } from '@/ts/L3ForWApiExShare/DailyRunning/clsvCurrEduClsTeacherExWApi';
import { clsIndexExWApi } from '@/ts/L3ForWApiEx/GraduateEdu/clsIndexExWApi';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import { clsSysScoreSummaryEN } from '@/ts/L0Entity/GradEduTools/clsSysScoreSummaryEN';
import { clsvCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherEN';
import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import router from '@/router';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare let window: any;
/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Index {
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    console.log(strKeyId);

    switch (strCommandName) {
      case 'Query': //查询记录
        // objPage.btnQuery_Click();
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        // if (arrKeyIds.length == 0) {
        alert('请选择需要复制的记录！');
        return;
      // }
      //objPage.btnCopyRecord_Click();
      case 'LoginFinish':
        new Index().PageLoad();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'QxUsersCRUDExEx.btn_Click');

        break;
    }
  }

  public async PageLoad() {
    // 在此处放置用户代码以初始化页面

    try {
      if (userStore.getUserId != '') {
        $('#lnkUserName').show();
        $('#Cancellation').show();
        $('#tz_login').hide();
        $('#tz_Register').hide();

        $('#lnkUserName').html(`${userStore.getUserName}(${userStore.getRoleName})`);

        $('#box3').show();
        $('#box4').show();

        //const response1 = await this.Bind_AllCount();
        //const response2 = await this.GetScoreTotalByUserId();
        this.Bind_AllCount();
        //this.Bind_AllCount2();
        //学生
        switch (userStore.getRoleId) {
          case '00620003':
            this.GetScoreTotalByUserId();
            break;
          case '00620002':
            this.GetCurrEduClsMessage();
            break;

          case enumQxRoles.System_Admin_00620001:
          case enumQxRoles.Secondary_School_System_Admin_00620018:
            this.GetCurrEduClsMessage();
            break;

          default:
            break;
        }
      } else {
        $('#lnkUserName').hide();
        $('#Cancellation').hide();
        $('#tz_login').show();

        $('#box3').hide();
        $('#box4').hide();

        //  router.push('/index');//
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //通过用户登录ID获取用户的角色名
  public async btnConsole_Click() {
    //判断角色
    //管理员
    if (
      userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
      userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
    ) {
      window.location.href = '../Web/IndexIframe';
    }
    // //老师
    // else if (userStore.getRoleId == '00620002') {
    // }
    // //学生
    // else {
    // }
  }

  //通过用户登录ID获取用户的角色名
  public async btnCancellation_Click() {
    //判断角色
    //管理员
    userStore.logout();

    $('#lnkUserName').hide();
    $('#Cancellation').hide();
    $('#tz_login').show();
    $('#tz_Register').show();

    $('#box3').hide();
    $('#box4').hide();
  }

  //论文
  public async liPaper_Click() {
    if (userStore.getUserId != '') {
      //window.location.href = "../Web/IndexIframe?page=1";
      window.location.href = '../Web/PaperIframe';
    } else {
      message.warning('您还没登录，请点击右上角登录后再进入该模块！');
    }
  }

  //主题 单页
  public async liTopic_Click() {
    if (userStore.getUserId != '') {
      window.location.href = '../Web/TopicIframe';
    } else {
      message.warning('您还没登录，请点击右上角登录后再进入该模块！');
    }
  }

  //答疑标注
  public async liqaTags_Click() {
    if (userStore.getUserId != '') {
      window.location.href = '../Web/QAIframe';
      //window.location.href = "../Web/IndexIframe?page=2";
    } else {
      message.warning('您还没登录，请点击右上角登录后再进入该模块！');
    }
  }

  //public async formatDate(date) {
  //    let myyear: string | number = Number(date.getFullYear());

  //    let mymonth: string | number = Number(date.getMonth() + 1);

  //    let myweekday: string | number = Number(date.getDate());

  //    if (mymonth < 10) {
  //        mymonth = '0' + mymonth;

  //    }

  //    if (myweekday < 10) {
  //        myweekday = '0' + myweekday;

  //    }

  //    return (myyear + "-" + mymonth + "-" + myweekday);

  //}

  //获得本周的开始日期
  //public async getWeekStartDate() {
  //    let data = new Date() //当前日期

  //    let year = Number(data.getFullYear());//当前年

  //    let month = Number(data.getMonth()) + 1;

  //    let nowMonth = Number(data.getMonth()); //当前月

  //    let day = Number(data.getDate()); //当天

  //    //计算某日是本月第几周

  //    let mydate = new Date(year, month - 1, day);

  //    let weekday = mydate.getDay(); //获取该日是星期几，0代表星期日//今天本周的第几天

  //    let weekno = Math.ceil((day + 6 - weekday) / 7); // 本月第几周

  //    let weekStartDate = new Date(year, nowMonth, day + 1 - weekday);

  //    return this.formatDate(weekStartDate);

  //}

  public async Bind_AllCount() {
    try {
      const strUserId = userStore.getUserId;

      let strCountJson = '[';
      strCountJson += await clsIndexExWApi.GetAllCountAsync(strUserId);
      strCountJson += ']';

      const strCountJson2 = eval(strCountJson);
      //console.log(strCountJson3);

      //strIdCurrEduclsstrPersonalPaperNum = strCountJson2[0].PersonalPaperNum;

      //论文；
      $('#PersonalPaperNum').html(strCountJson2[0].PersonalPaperNum);
      $('#MonthPaperNum').html(strCountJson2[0].MonthPaperNum);
      $('#WeekPaperNum').html(strCountJson2[0].WeekPaperNum);
      $('#TodayPaperNum').html(strCountJson2[0].TodayPaperNum);

      //关注论文；

      $('#PersonalPaperAttentionNum').html(strCountJson2[0].PersonalPaperAttentionNum);

      $('#MonthPaperAttentionNum').html(strCountJson2[0].MonthPaperAttentionNum);

      $('#WeekPaperAttentionNum').html(strCountJson2[0].WeekPaperAttentionNum);

      $('#TodayPaperAttentionNum').html(strCountJson2[0].TodayPaperAttentionNum);

      //论文子观点

      $('#PersonalPaperSubViewpointNum').html(strCountJson2[0].PersonalPaperSubViewpointNum);

      $('#MonthPaperSubViewpointNum').html(strCountJson2[0].MonthPaperSubViewpointNum);

      $('#WeekPaperSubViewpointNum').html(strCountJson2[0].WeekPaperSubViewpointNum);

      $('#TodayPaperSubViewpointNum').html(strCountJson2[0].TodayPaperSubViewpointNum);

      //论文答疑；

      $('#Personalqa_QuestionsNum').html(strCountJson2[0].Personalqa_QuestionsNum);

      $('#Monthqa_QuestionsNum').html(strCountJson2[0].Monthqa_QuestionsNum);

      $('#Weekqa_QuestionsNum').html(strCountJson2[0].Weekqa_QuestionsNum);

      $('#Todayqa_QuestionsNum').html(strCountJson2[0].Todayqa_QuestionsNum);

      //论文标注；

      $('#Personalgs_TagsNum').html(strCountJson2[0].Personalgs_TagsNum);

      $('#Monthgs_TagsNum').html(strCountJson2[0].Monthgs_TagsNum);

      $('#Weekgs_TagsNum').html(strCountJson2[0].Weekgs_TagsNum);

      $('#Todaygs_TagsNum').html(strCountJson2[0].Todaygs_TagsNum);

      //主题个人观点

      $('#PersonalViewpointNum').html(strCountJson2[0].PersonalViewpointNum);

      $('#MonthViewpointNum').html(strCountJson2[0].MonthViewpointNum);

      $('#WeekViewpointNum').html(strCountJson2[0].WeekViewpointNum);

      $('#TodayViewpointNum').html(strCountJson2[0].TodayViewpointNum);

      //主题专家观点

      $('#PersonalExpertViewpointNum').html(strCountJson2[0].PersonalExpertViewpointNum);

      $('#MonthExpertViewpointNum').html(strCountJson2[0].MonthExpertViewpointNum);

      $('#WeekExpertViewpointNum').html(strCountJson2[0].WeekExpertViewpointNum);

      $('#TodayExpertViewpointNum').html(strCountJson2[0].TodayExpertViewpointNum);

      //主题概念

      $('#PersonalConceptNum').html(strCountJson2[0].PersonalConceptNum);

      $('#MonthConceptNum').html(strCountJson2[0].MonthConceptNum);

      $('#WeekConceptNum').html(strCountJson2[0].WeekConceptNum);

      $('#TodayConceptNum').html(strCountJson2[0].TodayConceptNum);

      //客观事实

      $('#PersonalObjectiveFactNum').html(strCountJson2[0].PersonalObjectiveFactNum);

      $('#MonthObjectiveFactNum').html(strCountJson2[0].MonthObjectiveFactNum);

      $('#WeekObjectiveFactNum').html(strCountJson2[0].WeekObjectiveFactNum);

      $('#TodayObjectiveFactNum').html(strCountJson2[0].TodayObjectiveFactNum);

      //客观数据

      $('#PersonalObjectiveBasisNum').html(strCountJson2[0].PersonalObjectiveBasisNum);

      $('#MonthObjectiveBasisNum').html(strCountJson2[0].MonthObjectiveBasisNum);

      $('#WeekObjectiveBasisNum').html(strCountJson2[0].WeekObjectiveBasisNum);

      $('#TodayObjectiveBasisNum').html(strCountJson2[0].TodayObjectiveBasisNum);

      //操作技能

      $('#PersonalSysSkillNum').html(strCountJson2[0].PersonalSysSkillNum);

      $('#MonthSysSkillNum').html(strCountJson2[0].MonthSysSkillNum);

      $('#WeekSysSkillNum').html(strCountJson2[0].WeekSysSkillNum);

      $('#TodaySysSkillNum').html(strCountJson2[0].TodaySysSkillNum);

      //社会关系

      $('#PersonalSysSocialRelationsNum').html(strCountJson2[0].PersonalSysSocialRelationsNum);

      $('#MonthSysSocialRelationsNum').html(strCountJson2[0].MonthSysSocialRelationsNum);

      $('#WeekSysSocialRelationsNum').html(strCountJson2[0].WeekSysSocialRelationsNum);

      $('#TodaySysSocialRelationsNum').html(strCountJson2[0].TodaySysSocialRelationsNum);

      //评论

      $('#PersonalSysCommentNum').html(strCountJson2[0].PersonalSysCommentNum);

      $('#MonthSysCommentNum').html(strCountJson2[0].MonthSysCommentNum);

      $('#WeekSysCommentNum').html(strCountJson2[0].WeekSysCommentNum);

      $('#TodaySysCommentNum').html(strCountJson2[0].TodaySysCommentNum);

      //教师问题回答

      $('#Personalqa_AnswerNum').html(strCountJson2[0].Personalqa_AnswerNum);

      $('#Monthqa_AnswerNum').html(strCountJson2[0].Monthqa_AnswerNum);

      $('#Weekqa_AnswerNum').html(strCountJson2[0].Weekqa_AnswerNum);

      $('#Todayqa_AnswerNum').html(strCountJson2[0].Todayqa_AnswerNum);
    } catch (e: any) {
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //获取用户当前各观点教师总分、 学生总分 、班级名称；
  public async GetScoreTotalByUserId() {
    const strUserId = userStore.getUserId;
    //学生相关教学班
    let arrvCurrEduClsStuObjLst: Array<clsvCurrEduClsStuEN> = [];
    //当前登录学生的分数统计；
    // strIdCurrEduclsarrSysScoreSummaryObjLst: Array<clsSysScoreSummaryEN> = [];
    let arrSysScoreSummaryObjLst1: Array<clsSysScoreSummaryEN> = [];
    let arrSysScoreSummaryObjLst2: Array<clsSysScoreSummaryEN> = [];
    //教学班学生
    let arrCurrEduClsObjLst: Array<clsvCurrEduClsStuEN> = [];
    let arrCurrEduClsObjLst1: Array<clsvCurrEduClsStuEN> = [];
    //评论 打分
    let arrSysScoreSummaryObjLst: Array<clsSysScoreSummaryEN> = [];
    try {
      //获取当前学生教学班数据；
      const strWhereCond = ` stuId='${userStore.getUserId}' order by modifyDate Desc`;
      arrvCurrEduClsStuObjLst = await vCurrEduClsStu_GetObjLstAsync(strWhereCond);

      ////获取当前登录学生的分数
      //const responseObjLstOne = await vSysScoreSummary_GetObjLstAsync(strWhereCond).then((jsonData) => {
      //    arrvSysScoreSummaryObjLst = <Array<clsvSysScoreSummaryEN>>jsonData;
      //});
      let strhtml = '';
      //过滤私有空间教学班数据；
      arrvCurrEduClsStuObjLst = arrvCurrEduClsStuObjLst.filter((x) => x.idCurrEduCls != '00000050');

      //根据学生的教学班得到  每个教学班的学生；
      let arridCurrEduCls = '';
      for (let i = 0; i < arrvCurrEduClsStuObjLst.length; i++) {
        arridCurrEduCls += `${arrvCurrEduClsStuObjLst[i].idCurrEduCls},`;
      }
      if (arridCurrEduCls.length > 0) {
        arridCurrEduCls = arridCurrEduCls.substring(0, arridCurrEduCls.length - 1);

        const strWhereCond2 = `idCurrEduCls in (${arridCurrEduCls})`;

        // 获取教学班学生数据；
        arrCurrEduClsObjLst = await vCurrEduClsStu_GetObjLstAsync(strWhereCond2);

        //获取教学班 各观点教师分 、 学生分  的 总分；
        const strWhereCond3 = `idCurrEduCls in (${arridCurrEduCls}) and scoreTypeId in ('0009','0040')`;
        //获取教学班打分数 数据
        arrSysScoreSummaryObjLst = await SysScoreSummary_GetObjLstAsync(strWhereCond3);

        //循环当前用户教学班
        for (let i = 0; i < arrvCurrEduClsStuObjLst.length; i++) {
          const strIdCurrEducls = arrvCurrEduClsStuObjLst[i].idCurrEduCls;
          const strCurrEduclsName = arrvCurrEduClsStuObjLst[i].eduClsName;

          //通过教学班ID 和登录人ID 得到用户的 教师打分总分 和学生分总分；
          let TeaScoreTotal = 0;
          let StuScoreTotal = 0;
          const objTeaScoreTotal = arrSysScoreSummaryObjLst.find(
            (x) =>
              x.idCurrEduCls == strIdCurrEducls && x.userId == strUserId && x.scoreTypeId == '0009',
          );
          if (objTeaScoreTotal != null) {
            TeaScoreTotal = objTeaScoreTotal.score;
          }
          const ObjStuScoreTotal = arrSysScoreSummaryObjLst.find(
            (x) =>
              x.idCurrEduCls == strIdCurrEducls && x.userId == strUserId && x.scoreTypeId == '0040',
          );
          if (ObjStuScoreTotal != null) {
            StuScoreTotal = ObjStuScoreTotal.score;
          }
          //根据循环教学班ID 查询得到当前教学班的学生人数；
          let CountTotal = 0;
          arrCurrEduClsObjLst1 = arrCurrEduClsObjLst.filter(
            (x) => x.idCurrEduCls == strIdCurrEducls,
          );
          if (arrCurrEduClsObjLst1.length > 0) {
            CountTotal = arrCurrEduClsObjLst1.length;
          }

          //教师分、排名
          let TeaIndexNumber = 0;
          arrSysScoreSummaryObjLst1 = arrSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEducls &&
              x.scoreTypeId == '0009' &&
              x.score > TeaScoreTotal,
          );
          if (TeaScoreTotal == 0) {
            TeaIndexNumber = CountTotal;
          } else {
            TeaIndexNumber = arrSysScoreSummaryObjLst1.length + 1; //加1代表当前排名；
          }

          //学生分 、排名
          let StuIndexNumber = 0;
          arrSysScoreSummaryObjLst2 = arrSysScoreSummaryObjLst.filter(
            (x) =>
              x.idCurrEduCls == strIdCurrEducls &&
              x.scoreTypeId == '0040' &&
              x.score > StuScoreTotal,
          );
          if (StuScoreTotal == 0) {
            StuIndexNumber = CountTotal;
          } else {
            StuIndexNumber = arrSysScoreSummaryObjLst2.length + 1; //加1代表当前排名；
          }

          strhtml += `<div class="alert alert-success" ><span style="min-width:250px;"><strong>${strCurrEduclsName}</strong></span>&nbsp;&nbsp;&nbsp;&nbsp`;

          strhtml += `教师总打分排名：<a href="javascript:void(0)" class="alert-link" >${TeaScoreTotal}分--${TeaIndexNumber}/${CountTotal}</a>&nbsp;&nbsp;&nbsp`;
          strhtml += `学生评价打分排名：<a href="javascript:void(0)" class="alert-link" >${StuScoreTotal}分--${StuIndexNumber}/${CountTotal}</a>&nbsp;&nbsp;&nbsp`;
          strhtml += `<button class="btn-ms btn-info text-nowrap" onclick=btnScoreDetail("${strIdCurrEducls}")>打分详情</button>`;
          strhtml += '</div>';
        }

        //字符串 输出拼接；

        $('#box4').html(strhtml);
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教师登录显示教学班信息；教学班信息、 学生数 、主题数；
  public async GetCurrEduClsMessage() {
    // const strUserId = userStore.getUserId;
    //学生相关教学班
    let arrvCurrEduClsTeacherObjLst: Array<clsvCurrEduClsTeacherEN> = [];
    //当前登录学生的分数统计；
    // strIdCurrEduclsarrSysScoreSummaryObjLst: Array<clsSysScoreSummaryEN> = [];
    let arrResearchTopicObjLst1: Array<clsResearchTopicEN> = [];
    // const arrResearchTopicObjLst2: Array<clsResearchTopicEN> = [];
    //教学班学生
    let arrCurrEduClsObjLst: Array<clsvCurrEduClsStuEN> = [];
    let arrCurrEduClsObjLst1: Array<clsvCurrEduClsStuEN> = [];
    //主题数量
    let arrResearchTopicObjLst: Array<clsResearchTopicEN> = [];
    try {
      //获取当前学生教学班数据；
      const strWhereCond = ` teacherId='${userStore.getUserId}' order by updDate Desc`;
      arrvCurrEduClsTeacherObjLst = await vCurrEduClsTeacher_GetObjLstAsync(strWhereCond);

      ////获取当前登录学生的分数
      //const responseObjLstOne = await vSysScoreSummary_GetObjLstAsync(strWhereCond).then((jsonData) => {
      //    arrvSysScoreSummaryObjLst = <Array<clsvSysScoreSummaryEN>>jsonData;
      //});
      let strhtml = '';
      //过滤私有空间教学班数据；
      arrvCurrEduClsTeacherObjLst = arrvCurrEduClsTeacherObjLst.filter(
        (x) => x.idCurrEduCls != '00000050',
      );
      arrvCurrEduClsTeacherObjLst = arrvCurrEduClsTeacherObjLst.sort(
        vCurrEduClsTeacherEx_SortFun_OrderNum,
      );

      //根据学生的教学班得到  每个教学班的学生；
      let arridCurrEduCls = '';
      for (let i = 0; i < arrvCurrEduClsTeacherObjLst.length; i++) {
        arridCurrEduCls += `${arrvCurrEduClsTeacherObjLst[i].idCurrEduCls},`;
      }
      if (arridCurrEduCls.length > 0) {
        arridCurrEduCls = arridCurrEduCls.substring(0, arridCurrEduCls.length - 1);

        const strWhereCond2 = `idCurrEduCls in (${arridCurrEduCls})`;

        // 获取教学班学生数据；
        arrCurrEduClsObjLst = await vCurrEduClsStu_GetObjLstAsync(strWhereCond2);

        //获取教学班相关主题数条件
        // const strWhereCond3 = `idCurrEduCls in (${arridCurrEduCls}) and scoreTypeId in ('0009','0040')`;
        //获取教学班相关主题数
        arrResearchTopicObjLst = await ResearchTopic_GetObjLstAsync(strWhereCond2);

        //循环当前用户教学班
        for (let i = 0; i < arrvCurrEduClsTeacherObjLst.length; i++) {
          const strIdCurrEducls = arrvCurrEduClsTeacherObjLst[i].idCurrEduCls;
          const strCurrEduclsName = arrvCurrEduClsTeacherObjLst[i].eduClsName;

          //teaScoreTotal = 0;
          //stuScoreTotal = 0;
          //const objTeaScoreTotal = arrSysScoreSummaryObjLst.find(x => x.idCurrEduCls == strIdCurrEducls && x.userId == strUserId && x.scoreTypeId == "0009");
          //if (objTeaScoreTotal != null) {
          //    TeaScoreTotal = objTeaScoreTotal.score;
          //}
          //strIdCurrEduclsObjStuScoreTotal = arrSysScoreSummaryObjLst.find(x => x.idCurrEduCls == strIdCurrEducls && x.userId == strUserId && x.scoreTypeId == "0040");
          //if (ObjStuScoreTotal != null) {
          //    StuScoreTotal = ObjStuScoreTotal.score;
          //}
          //根据循环教学班ID 查询得到当前教学班的学生人数；
          let CountTotal = 0;
          arrCurrEduClsObjLst1 = arrCurrEduClsObjLst.filter(
            (x) => x.idCurrEduCls == strIdCurrEducls,
          );
          if (arrCurrEduClsObjLst1.length > 0) {
            CountTotal = arrCurrEduClsObjLst1.length;
          }
          //通过教学班ID 得到教学班下主题数量；
          let TopicCount = 0;
          arrResearchTopicObjLst1 = arrResearchTopicObjLst.filter(
            (x) => x.idCurrEduCls == strIdCurrEducls,
          );
          if (arrResearchTopicObjLst1.length > 0) {
            TopicCount = arrResearchTopicObjLst1.length;
          }

          strhtml += `<div class="alert alert-success" ><span style="min-width:250px;"><strong>${strCurrEduclsName}</strong></span>&nbsp;&nbsp;&nbsp;&nbsp`;

          strhtml += `学生数：<a href="javascript:void(0)" class="alert-link" >${CountTotal}</a>&nbsp;&nbsp;&nbsp`;
          strhtml += `主题数：<a href="javascript:void(0)" class="alert-link" >${TopicCount}</a>&nbsp;&nbsp;&nbsp`;
          strhtml += `<button class="btn-ms btn-info text-nowrap" onclick=btnCurrEduclsDetail("${strIdCurrEducls}")>详情信息</button>&nbsp;&nbsp;&nbsp`;
          strhtml += `<button class="btn-ms btn-info text-nowrap" onclick=btnCommentScore("${strIdCurrEducls}")>评价打分</button>`;
          //strhtml += '<button class="btn-ms btn-info text-nowrap" onclick=btnExportCommentScore("' + strIdCurrEducls + '")>导出word</button>';
          strhtml += '</div>';
        }

        //字符串 输出拼接；

        $('#box4').html(strhtml);
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //教师总评打分
  public async btnCommentScore(strIdCurrEducls: string) {
    if (userStore.getUserId != '') {
      //把传递参数存放缓存；
      clsPubLocalStorage.idCurrEduCls = strIdCurrEducls;
      window.location.href = `../Web/CommentScoreIframe?IdCurrEduCls='${strIdCurrEducls}'`;
    } else {
      message.warning('您还没登录，请点击右上角登录后再进入该模块！');
    }
  }
}
