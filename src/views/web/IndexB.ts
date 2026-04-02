// import * as $ from 'jquery';
import { Ref } from 'vue';
import $ from 'jquery';
import { clsIndexExWApi } from '@/ts/L3ForWApiEx/GraduateEdu/clsIndexExWApi';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { Login } from '@/viewsShare/web/Login';
import { Format } from '@/ts/PubFun/clsString';
import router from '@/router';
import { wfmRegisterStu } from '@/viewsShare/web/wfmRegisterStu';
import { message } from '@/utils/myMessage';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
export class IndexB {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static divLayout: HTMLDivElement; //界面布局的层对象
  public static EditObj: any;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public static objPageCRUD: IndexB;

  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    // this.BindGv_vStudentInfoCache();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'Login':
        alert('该类没有绑定该函数：[this.BindGv_vStudentInfo_Cache]！');
        //this.BindGv_vStudentInfoCache();;
        break;
      case 'LoginFinish':
        Index_PageLoad();
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  //论文
  public async liPaper_Click() {
    if (userStore.getUserId != '') {
      //window.location.href = "../Web/IndexIframe?page=1";
      alert('liPaper_Click');
      //      router.push({ name: 'account-editTabRelaInfo' });
      // router.push({ name: 'myabout' });
      router.push('/about');

      // this.$router.push('/about');
      // window.location.href = '../Web/PaperIframe';
    } else {
      // message.warning('您还没登录，请点击右上角登录后再进入该模块！');
    }
  }

  //用户中心
  public async liUserCenter_Click() {
    if (userStore.getUserId != '') {
      window.location.href = '../Web/IndexIframe?page=3';
    } else {
      message.warning('您还没登录，请点击右上角登录后再进入该模块！');
    }
  }

  //系统设置
  public async liTool_Click() {
    if (userStore.getUserId != '') {
      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        //window.location.href = "../Web/IndexIframe?page=4";

        router.push('/IndexIframe?menuSetId=0017');
      }
      //老师
      else if (userStore.getRoleId == '00620002') {
        //message.warning("您的角色权限不够！");

        router.push('/IndexIframe?menuSetId=0017');
      }
      //学生
      else {
        //message.warning("您的角色权限不够！");

        router.push('/IndexIframe?menuSetId=0017');
      }
    } else {
      message.warning('您还没登录，请点击右上角登录后再进入该模块！');
    }
  }
}
export function Index_btn_Click(strCommandName: string, strKeyId: string) {
  console.log(strKeyId);
  let objPage: IndexB;
  if (IndexB.objPageCRUD == null) {
    IndexB.objPageCRUD = new IndexB();
    objPage = <IndexB>IndexB.objPageCRUD;
  } else {
    objPage = <IndexB>IndexB.objPageCRUD;
  }
  let objPageEdit;
  let objPageEdit_Register;
  console.log(objPageEdit);
  switch (strCommandName) {
    case 'Register':
      objPageEdit_Register = new wfmRegisterStu('wfmRegisterStu', objPage);
      objPageEdit_Register.PageLoad();
      break;
    case 'liPaper':
      // objPage.liPaper_Click();
      break;
    case 'login':
      // objPageEdit // IndexB.EditObj = LoginRef.value;
      objPageEdit = new Login('Login', objPage);
      console.log('Login.EditRef:(in Index_btn_Click)', Login.EditObj);
      if (Login.EditObj == null) Login.EditObj = IndexB.EditObj;
      IndexB.EditObj.btnLogin_Edit_Click(strCommandName, strKeyId);
      // Login.EditObj = LoginRef.value;
      break;
    case 'Cancellation': //注销
      Index_btnCancellation_Click();
      break;
    case 'Console': //首页
      Index_btnConsole_Click();
      break;

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

    default:
      AccessBtnClickDefault(strCommandName, 'Index_btn_Click');

      break;
  }
}

//通过用户登录ID获取用户的角色名
export async function Index_btnCancellation_Click() {
  //判断角色
  //管理员
  userStore.logout();
  await userStore.logout();
  $('#lnkUserName').hide();
  $('#Cancellation').hide();
  $('#tz_login').show();
  $('#tz_Register').show();

  $('#box3').hide();
  $('#box4').hide();
}

//通过用户登录ID获取用户的角色名
export async function Index_btnConsole_Click() {
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
export async function Index_PageLoad() {
  // 在此处放置用户代码以初始化页面

  try {
    if (userStore.getUserId != '') {
      $('#lnkUserName').show();
      $('#Cancellation').show();
      $('#tz_login').hide();
      $('#tz_Register').hide();

      $('#lnkUserName').html(`${userStore.getUserName}`);
      IndexB.vuebtn_Click('setRoles', '');
      $('#box3').show();
      $('#box4').show();

      Index_Bind_AllCount();
      //学生
      if (userStore.getRoleId == '00620003') {
        // this.GetScoreTotalByUserId();
      }
      //老师-管理员
      else if (userStore.getRoleId == '00620002') {
        // this.GetCurrEduClsMessage();
      } else if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        // this.GetCurrEduClsMessage();
      }
      //$("#divLoading").hide();
    } else {
      $('#lnkUserName').hide();
      $('#Cancellation').hide();
      $('#tz_login').show();

      $('#box3').hide();
      $('#box4').hide();
    }
  } catch (e: any) {
    const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
    console.error(strMsg);
    alert(strMsg);
  }
}

export async function Index_Bind_AllCount() {
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
