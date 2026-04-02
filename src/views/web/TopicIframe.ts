import $ from 'jquery';
import { message } from '@/utils/myMessage';
import {
  CurrEduClsEx_Bind_EduClsStuList,
  CurrEduClsEx_Bind_EduClsTeaList,
  CurrEduClsEx_GetCourseIdByIdCurrEduCls,
} from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsExWApi';
import { qa_Push_GetRecCountByCondAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_PushWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare function RemoveIfame_Click(): void;
declare let window: any;
/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class TopicIframe {
  public static divLayout: HTMLDivElement; //界面布局的层对象
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    // const objPage = new SysScoreSummaryCRUD();
    console.log(strKeyId);
    // const arrKeyIds = GetCheckedKeyIdsInDivObj(PaperIframe.divDataLst);
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
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面

    try {
      if (userStore.getUserId != '') {
        $('#lnkUserName').append(`${userStore.getUserName}(${userStore.getRoleName})`);

        $('#spanMajorName').html(`${userStore.getMajorName}专业`);
        //获得被邀请数
        await this.Bind_QuestionsCount();

        //判断角色
        //管理员
        if (
          userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
          userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
          await CurrEduClsEx_Bind_EduClsTeaList(
            TopicIframe.divLayout,
            TopicIframe.EduCls_Click,
            'spnEduClsName_Head',
          );
        }
        //老师
        else if (userStore.getRoleId == '00620002') {
          await CurrEduClsEx_Bind_EduClsTeaList(
            TopicIframe.divLayout,
            TopicIframe.EduCls_Click,
            'spnEduClsName_Head',
          );
        }
        //学生
        else {
          await CurrEduClsEx_Bind_EduClsStuList(
            TopicIframe.divLayout,
            TopicIframe.EduCls_Click,
            'spnEduClsName_Head',
          );
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
  public static async EduCls_Click(
    divLayout: HTMLDivElement,
    strkey: string,
    strName: string,
    strTypeID: string,
  ) {
    //$("#hidIdCurrEduCls").val(strkey);
    SetSpanHtmlInDivObj(divLayout, 'spnEduClsName_Head', strName);
    const strCourseId = await CurrEduClsEx_GetCourseIdByIdCurrEduCls(strkey);
    if (IsNullOrEmpty(strCourseId) == false) {
      clsPubLocalStorage.courseId = strCourseId;
    }
    clsPubLocalStorage.idCurrEduCls = strkey;
    clsPubLocalStorage.eduClsTypeId = strTypeID;
    clsPubLocalStorage.eduClsName = strName;

    message.success('已切换教学班！');
    // $('#Topic_iframe')[0].contentWindow.btnQuery_Click();
    const iframeElement = $('#Topic_iframe')[0] as HTMLIFrameElement;
    if (iframeElement != null) {
      if (iframeElement.contentWindow != null)
        (iframeElement.contentWindow as any).btnQuery_Click();
    }
    //$("#ResearchTopicList")[0].contentWindow.btnQuery_Click();

    RemoveIfame_Click();
  }
}
