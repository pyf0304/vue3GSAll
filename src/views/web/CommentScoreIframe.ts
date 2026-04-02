import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { CurrEduClsEx_GetCourseIdByIdCurrEduCls } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsExWApi';
import { CurrEduCls_GetFirstObjAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { vCurrEduClsStu_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import { vCurrEduClsTeacher_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { GetInputValueInDivObj, SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';

declare function RemoveIfame_Click(): void;
declare let window: any;
/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class CommentScoreIframe {
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
    // 在此处放置用户代码以初始化页面

    try {
      if (userStore.getUserId != '') {
        $('#lnkUserName').append(`${userStore.getUserName}(${userStore.getRoleName})`);

        $('#spanMajorName').html(`${userStore.getMajorName}专业`);
        //获取教学班名称；
        await this.GetCurreduClsNamebyId();
        //把传递参数存放缓存；
        clsPubLocalStorage.idCurrEduCls = GetInputValueInDivObj(divName, 'hidIdCurrEduClspara');

        ////判断角色
        ////管理员
        //if (userStore.getRoleId == "00620001") {
        //    const responseObjLst = await this.Bind_EduClsTeaList();

        //}
        ////老师
        //else if (userStore.getRoleId == "00620002") {
        //    const responseObjLst = await this.Bind_EduClsTeaList();

        //}
        ////学生
        //else {
        //    const responseObjLst = await this.Bind_EduClsStuList();

        //}

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

  //获取教学班名称；
  public async GetCurreduClsNamebyId() {
    const strWhereCond1 = ` idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    // 获取教学班学生数据；
    const objCurrEduCls = await CurrEduCls_GetFirstObjAsync(strWhereCond1);

    if (objCurrEduCls != null) {
      $('#CurrEduName').html(objCurrEduCls.eduClsName);
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
    // $('#Topic_iframe')[0].contentWindow.btnQuery_Click();
    const iframeElement = $('#Topic_iframe')[0] as HTMLIFrameElement;
    if (iframeElement != null) {
      if (iframeElement.contentWindow != null)
        (iframeElement.contentWindow as any).btnQuery_Click();
    }
    //$("#ResearchTopicList")[0].contentWindow.btnQuery_Click();

    RemoveIfame_Click();
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
        divName = CommentScoreIframe.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = CommentScoreIframe.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = CommentScoreIframe.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = CommentScoreIframe.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = CommentScoreIframe.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = CommentScoreIframe.divPager;
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
}
