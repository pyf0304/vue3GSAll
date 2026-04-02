import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { CurrEduClsEx_GetCourseIdByIdCurrEduCls } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsExWApi';
import { vCurrEduClsTeacher_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import { vCurrEduClsStu_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import { qa_Push_GetRecCountByCondAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_PushWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare let window: any;
/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class QAIframe {
  public static divLayout: HTMLDivElement;
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
    const divName = QAIframe.divLayout;
    if (divName == null) return;
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
          await this.Bind_EduClsTeaList(divName);
        }
        //老师
        else if (userStore.getRoleId == '00620002') {
          await this.Bind_EduClsTeaList(divName);
        }
        //学生
        else {
          await this.Bind_EduClsStuList(divName);
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
  public async Bind_EduClsTeaList(divLayout: HTMLDivElement) {
    try {
      const strWhereCond = ` teacherId='${userStore.getUserId}' order by updDate Desc`;

      const arrvCurrEduClsTeacherObjLst = await vCurrEduClsTeacher_GetObjLstAsync(strWhereCond);
      let strhtml = '';
      for (let i = 0; i < arrvCurrEduClsTeacherObjLst.length; i++) {
        if (i == 0) {
          if (clsPubLocalStorage.idCurrEduCls == '') {
            //$("#hidIdCurrEduCls").val(arrvCurrEduClsTeacherObjLst[i].idCurrEduCls);
            SetSpanHtmlInDivObj(
              divLayout,
              'spnEduClsName',
              arrvCurrEduClsTeacherObjLst[i].eduClsName,
            );
            //存入session
            clsPubLocalStorage.idCurrEduCls = arrvCurrEduClsTeacherObjLst[i].idCurrEduCls;
            clsPubLocalStorage.eduClsTypeId = arrvCurrEduClsTeacherObjLst[i].eduClsTypeId;
            clsPubLocalStorage.eduClsName = arrvCurrEduClsTeacherObjLst[i].eduClsName;
          } else {
            SetSpanHtmlInDivObj(divLayout, 'spnEduClsName', clsPubLocalStorage.eduClsName);
          }
        }
        strhtml += `<dd><a onclick=EduCls_Click("${arrvCurrEduClsTeacherObjLst[i].idCurrEduCls}","${arrvCurrEduClsTeacherObjLst[i].eduClsName}","${arrvCurrEduClsTeacherObjLst[i].eduClsTypeId}")> ${arrvCurrEduClsTeacherObjLst[i].eduClsName}</a></dd>`;
      }
      $('#dlEduClsList').html(strhtml);
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班学生
  public async Bind_EduClsStuList(divLayout: HTMLDivElement) {
    try {
      const strWhereCond = ` stuId='${userStore.getUserId}' order by modifyDate Desc`;

      const arrvCurrEduClsStuObjLst = await vCurrEduClsStu_GetObjLstAsync(strWhereCond);
      let strhtml = '';
      for (let i = 0; i < arrvCurrEduClsStuObjLst.length; i++) {
        if (i == 0) {
          if (clsPubLocalStorage.idCurrEduCls == '') {
            //$("#hidIdCurrEduCls").val(arrvCurrEduClsStuObjLst[i].idCurrEduCls);
            SetSpanHtmlInDivObj(divLayout, 'spnEduClsName', arrvCurrEduClsStuObjLst[i].eduClsName);
            //存入session
            clsPubLocalStorage.idCurrEduCls = arrvCurrEduClsStuObjLst[i].idCurrEduCls;
            clsPubLocalStorage.eduClsTypeId = arrvCurrEduClsStuObjLst[i].eduClsTypeId;
            clsPubLocalStorage.eduClsName = arrvCurrEduClsStuObjLst[i].eduClsName;
          } else {
            SetSpanHtmlInDivObj(divLayout, 'spnEduClsName', clsPubLocalStorage.eduClsName);
          }
        }
        strhtml += `<dd><a onclick=EduCls_Click("${arrvCurrEduClsStuObjLst[i].idCurrEduCls}","${arrvCurrEduClsStuObjLst[i].eduClsName}","${arrvCurrEduClsStuObjLst[i].eduClsTypeId}")> ${arrvCurrEduClsStuObjLst[i].eduClsName}</a></dd>`;
      }
      $('#dlEduClsList').html(strhtml);
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班教师
  public async EduCls_Click(
    divLayout: HTMLDivElement,
    strkey: string,
    strName: string,
    strTypeID: string,
  ) {
    //$("#hidIdCurrEduCls").val(strkey);
    SetSpanHtmlInDivObj(divLayout, 'spnEduClsName', strName);
    const strCourseId = await CurrEduClsEx_GetCourseIdByIdCurrEduCls(strkey);
    if (IsNullOrEmpty(strCourseId) == false) {
      clsPubLocalStorage.courseId = strCourseId;
    }
    clsPubLocalStorage.idCurrEduCls = strkey;
    clsPubLocalStorage.eduClsTypeId = strTypeID;
    clsPubLocalStorage.eduClsName = strName;

    message.success('已切换教学班！');
    // $('#QA_iframe')[0].contentWindow.btn_Click('Query');
    const iframeElement = $('#QA_iframe')[0] as HTMLIFrameElement;
    if (iframeElement != null) {
      if (iframeElement.contentWindow != null)
        (iframeElement.contentWindow as any).btn_Click('Query');
    }
  }
}
