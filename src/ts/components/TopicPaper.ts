import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { CurrEduClsEx_GetCourseIdByIdCurrEduCls } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsExWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';

/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class TopicPaper {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static divLayout: HTMLDivElement; //界面布局的层对象
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public async PageLoad() {
    // 在此处放置用户代码以初始化页面

    try {
      // 判断角色
      // 管理员
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班教师
  public static async EduCls_Click(strIdCurrEduCls: string, strEduName: string, strTypeID: string) {
    //$("#hidIdCurrEduCls").val(strkey);
    // $('#spnEduClsName_Head').html(strEduName);
    SetSpanHtmlInDivObj(TopicPaper.divLayout, 'spnEduClsName_Head', strEduName);
    const strCourseId = await CurrEduClsEx_GetCourseIdByIdCurrEduCls(strIdCurrEduCls);
    if (IsNullOrEmpty(strCourseId) == false) {
      clsPubLocalStorage.courseId = strCourseId;
    }
    clsPubLocalStorage.idCurrEduCls = strIdCurrEduCls;
    clsPubLocalStorage.eduClsTypeId = strTypeID;
    clsPubLocalStorage.eduClsName = strEduName;

    // $('#Paper_iframe')[0].contentWindow.btnQuery_Click();
    const iframeElement = $('#Paper_iframe')[0] as HTMLIFrameElement;
    if (iframeElement != null) {
      if (iframeElement.contentWindow != null)
        (iframeElement.contentWindow as any).btnQuery_Click();
    }
    message.success('已切换教学班！');
  }

  public static async Topic_Click(strTopicId: string, strTopicName: string) {
    //$("#hidIdCurrEduCls").val(strkey);
    // $('#spnEduClsName_Head').html(strEduName);
    SetSpanHtmlInDivObj(TopicPaper.divLayout, 'spnTopicName_Head', strTopicName);
    const strCourseId = await CurrEduClsEx_GetCourseIdByIdCurrEduCls(strTopicId);
    if (IsNullOrEmpty(strCourseId) == false) {
      clsPubLocalStorage.courseId = strCourseId;
    }
    clsPubLocalStorage.idCurrEduCls = strTopicId;

    clsPubLocalStorage.topicName = strTopicName;

    // $('#Paper_iframe')[0].contentWindow.btnQuery_Click();
    const iframeElement = $('#Paper_iframe')[0] as HTMLIFrameElement;
    if (iframeElement != null) {
      if (iframeElement.contentWindow != null)
        (iframeElement.contentWindow as any).btnQuery_Click();
    }
    message.success('已切换教学班！');
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout:HTMLDivElement) {
    // const objPage = new SysScoreSummaryCRUD();
    console.log(strKeyId);
    // const arrKeyIds = GetCheckedKeyIdsInDivObj(TopicPaper.divDataLst);
    // strKeyId = GetFirstCheckedKeyIdInDivObj(PaperAttention.divDataLst);
    switch (strCommandName) {
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
