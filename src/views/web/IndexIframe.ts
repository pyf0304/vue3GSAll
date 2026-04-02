import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { CurrEduClsEx_GetCourseIdByIdCurrEduCls } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsExWApi';
import { qa_Push_GetRecCountByCondAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_PushWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { GetInputValueInDivObj, SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare let window: any;
/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class IndexIframe {
  public static GetPropValue: (strPropName: string) => string;
  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
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
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    try {
      if (userStore.getUserId != '') {
        //获得被邀请数

        if (GetInputValueInDivObj(divName, 'hidPage') != '') {
          const strPage = GetInputValueInDivObj(divName, 'hidPage');
          switch (strPage) {
            case '1':
              $('#li_PaperSee').show();
              $('#li_PaperMg').show();
              $('#li_TopicMg').hide();
              $('#li_MajorDirection').hide();
              $('#li_PaperQA').hide();
              $('#li_UserManage').hide();
              $('#li_UserCenter').hide();

              $('#li_CurrEduCls').hide();
              $('#li_SysTools').hide();

              $('#ulModularName').show();
              $('#ModularName').html('论文阅读');

              break;
            case '2':
              $('#ulModularName').show();
              $('#ModularName').html('答疑标注');

              $('#li_PaperSee').hide();
              $('#li_PaperMg').hide();
              $('#li_TopicMg').hide();
              $('#li_MajorDirection').hide();
              $('#li_PaperQA').show();

              $('#li_PaperSee').removeClass('open');
              $('#li_PaperSee a').removeClass('active');

              $('#li_PaperQA').addClass('open');
              //$("#li_PaperQA a").addClass("active");
              $('#li_PaperQA ul').css('display', 'block');

              $('#li_UserManage').hide();
              $('#li_UserCenter').hide();

              $('#li_CurrEduCls').hide();
              $('#li_SysTools').hide();

              break;
            case '3':
              $('#ulModularName').show();
              $('#ModularName').html('个人中心');
              $('#li_PaperSee').hide();
              $('#li_PaperMg').hide();
              $('#li_TopicMg').hide();
              $('#li_MajorDirection').hide();
              $('#li_PaperQA').hide();
              $('#li_UserManage').hide();
              $('#li_UserCenter').show();
              $('#li_PaperSee').removeClass('open');
              $('#li_PaperSee a').removeClass('active');

              $('#li_UserCenter').addClass('open');
              //$("#li_UserCenter a").addClass("active");
              $('#li_UserCenter ul').css('display', 'block');

              $('#li_CurrEduCls').hide();
              $('#li_SysTools').hide();

              break;
            case '4':
              $('#ulModularName').show();
              $('#ModularName').html('控制中心');

              $('#li_PaperSee').hide();
              $('#li_PaperMg').hide();
              $('#li_TopicMg').hide();
              $('#li_MajorDirection').hide();
              $('#li_PaperQA').hide();
              $('#li_UserManage').hide();
              $('#li_UserCenter').hide();

              $('#li_CurrEduCls').show();
              $('#li_SysTools').show();
              $('#li_PaperSee').removeClass('open');
              $('#li_PaperSee a').removeClass('active');

              $('#li_SysTools').addClass('open');
              //$("#li_SysTools a").addClass("active");
              $('#li_SysTools ul').css('display', 'block');

              break;
            default:
              break;
          }
        }
        //判断角色
        //管理员
        if (
          userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
          userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
          $('#li_UserManage').show();
          //$("#li__PaperReadWriteStatistics").show();
          $('#li__ExplainType').show();
          $('#li__SubViewpointType').show();
          $('#li__LiteratureType').show();
          $('#li__ViewpointType').show();
          $('#li__DiscussionType').show();

          $('#pdftest1').show();
          $('#pdftest2').show();
          $('#pdftest3').show();

          $('#comment').show();
          $('#PaperGroup').show();

          $('#commentType').show();

          $('#ScoreWeight').show();
          $('#ScoreSummaryNew').show();
          $('#TotalDataStatistics').show(); //数据周期统计
          //$("#TotalDataStatisticsTest").show();//数据周期统计

          $('#li_CurrEduCls').show();
          $('#li_SysTools').show(); //系统设置

          $('#licc_course').show(); //课程
          //$("#liCurrEduClsStu").show();//教学班学生；

          $('#liCurrEduClsTeacher').show(); //教学班老师；
          $('#liCurrEduClsDate').show(); //教学班日期；
          $('#liCurrEduCls').show(); //教学班；
          $('#lixzMajor').show(); //专业；

          $('#li__ke_Super').show(); //知识分类；
          $('#li__ke_Sub').show(); //知识详细分类；
          $('#li__TopicTask').show(); //主题任务状态；

          $('#liTextType').show(); //课件类型；
          $('#liUnit').show(); //课件单元；
          $('#liTextStatus').show(); //课件状态；
          $('#liGrade').show(); //中学年级；

          $('#liCacheUseState').show(); //缓存配置；
        }
        //老师
        else if (userStore.getRoleId == '00620002') {
          $('#li_UserManage').hide();
          //$("#li__PaperReadWriteStatistics").show();
          $('#li__ExplainType').hide();
          $('#li__SubViewpointType').hide();
          $('#li__LiteratureType').hide();
          $('#li__ViewpointType').hide();
          $('#li__DiscussionType').hide();

          $('#TotalDataStatistics').show(); //数据周期统计

          $('#comment').show();
          $('#PaperGroup').show();

          $('#ScoreSummaryNew').show();

          $('#licc_course').show(); //课程
          //$("#liCurrEduClsStu").show();//教学班学生；

          $('#liCurrEduClsTeacher').show(); //教学班老师；
          $('#liCurrEduClsDate').show(); //教学班日期；
          $('#liCurrEduCls').show(); //教学班；
          $('#lixzMajor').show(); //专业；
        }
        //学生
        else {
          $('#li_UserManage').hide();
          //$("#li__PaperReadWriteStatistics").hide();
          $('#li__ExplainType').hide();
          $('#li__SubViewpointType').hide();
          $('#li__LiteratureType').hide();

          $('#li__DiscussionType').hide();
          $('#PersonalKnowledgeView').hide(); //个人知识点汇总

          $('#liViewpointShare').show(); //个人观点配置
          $('#comment').show();
          $('#PaperGroup').show();

          $('#ScoreSummaryNew').show();
          $('#ligs_ReflectLog').show(); //反思日志 ，临时；
        }

        //$("#divLoading").hide();
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //答疑被邀请数
  public async Bind_QuestionsCount() {
    try {
      let strWhereCond = ` 1=1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
      strWhereCond += ` and receiveUser='${userStore.getUserId}' and isReceive=0`;
      const intQuestionsCount = await qa_Push_GetRecCountByCondAsync(strWhereCond);
      $('#questionsCount').html(intQuestionsCount.toString());
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      //alert(strMsg);
      console.log(strMsg);
    }
  }

  //教学班教师
  public async EduCls_Click(
    divLayout: HTMLDivElement,
    strkey: string,
    strName: string,
    strTypeID: string,
  ) {
    SetSpanHtmlInDivObj(divLayout, 'spnEduClsName', strName);
    const strCourseId = await CurrEduClsEx_GetCourseIdByIdCurrEduCls(strkey);
    if (IsNullOrEmpty(strCourseId) == false) {
      clsPubLocalStorage.courseId = strCourseId;
    }
    clsPubLocalStorage.idCurrEduCls = strkey;
    console.error('已经切换教学班', strkey);
    clsPubLocalStorage.eduClsTypeId = strTypeID;
    clsPubLocalStorage.eduClsName = strName;

    message.success('已切换教学班！');
    // $('#Index_iframe')[0].contentWindow.WelcomeLoad_Click();
    const iframeElement = $('#Index_iframe')[0] as HTMLIFrameElement;
    if (iframeElement != null) {
      if (iframeElement.contentWindow != null)
        (iframeElement.contentWindow as any).WelcomeLoad_Click();
    }
  }
  /**
   * 获取div对象，根据不同的div类型
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_GetDivName)
   **/
  public getDivName(strDivType: enumDivType): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    let divName;
    let divTypeName;
    let strMsg;
    switch (strDivType) {
      case enumDivType.LayOut_01:
        divName = IndexIframe.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = IndexIframe.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = IndexIframe.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = IndexIframe.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = IndexIframe.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = IndexIframe.divPager;
        divTypeName = 'divPager';
        break;
      default:
        strMsg = `获取div对象时，DivType =${strDivType}没有被处理，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return null;
        break;
    }
    if (divName == null) {
      strMsg = `当前${divTypeName}层(div)对象为空，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
      return null;
    }
    return divName;
  }

  public get menuSetId(): string {
    return IndexIframe.GetPropValue('menuSetId');
  }
}
