import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { gs_MeetingMinutes_EditEx } from './gs_MeetingMinutes_EditEx';
import {
  gs_MeetingMinutesEx_GetMeetingDateNumObjLstAsync,
  gs_MeetingMinutesEx_GetMeetingMonthNumObjLstAsync,
  gs_MeetingMinutesEx_GetMeetingYearNumObjLstAsync,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsgs_MeetingMinutesExWApi';
import { gs_MeetingMinutesCRUD } from '@/viewsBase/GradEduTopic/gs_MeetingMinutesCRUD';
import { clsgs_MeetingMinutesEN } from '@/ts/L0Entity/GradEduTopic/clsgs_MeetingMinutesEN';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { gs_MeetingMinutesVer_Delgs_MeetingMinutesVersByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_MeetingMinutesVerWApi';
import {
  gs_MeetingMinutes_DelRecordAsync,
  gs_MeetingMinutes_GetObjLstAsync,
  gs_MeetingMinutes_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_MeetingMinutesWApi';
import { vRTUserRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetButtonObjLstInDivObjN,
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  SetUlHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

/* gs_MeetingMinutesCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_MeetingMinutesCRUDEx extends gs_MeetingMinutesCRUD implements IShowList {
  public static GetPropValue: (strPropName: string) => string;
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static objLayOut: HTMLDivElement;
  //public static mstrSortvgs_MeetingMinutesBy: string = "meetingId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

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
    const objLayOut = gs_MeetingMinutesCRUDEx.objLayOut;
    if (objLayOut == null) return;
    console.log(strType, strPara);
    this.PageLoad(objLayOut);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'vgs_MeetingMinutes':
        alert('该类没有绑定该函数：[this.BindGv_vgs_MeetingMinutes_Cache]！');
        //this.BindGv_vgs_MeetingMinutesCache();;
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: gs_MeetingMinutesCRUDEx = new gs_MeetingMinutesCRUDEx(divLayout);
    const objPageEdit: gs_MeetingMinutes_EditEx = new gs_MeetingMinutes_EditEx(
      'gs_MeetingMinutes_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
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
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
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
      default:
        AccessBtnClickDefault(strCommandName, 'gs_MeetingMinutesCRUDExEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  public async PageLoad(objLayOut: HTMLDivElement) {
    if (objLayOut == null) return;
    gs_MeetingMinutesCRUDEx.objLayOut = objLayOut;
    // 在此处放置用户代码以初始化页面
    try {
      //if (this.bolIsInitShow == false)  //
      //{
      //    this.objPager.InitShow(this.divName4Pager);
      //    this.bolIsInitShow = true;  //
      //}
      await this.Bind_MeetingMinutesTree(objLayOut);
      await this.Bind_MeetingMinutesList(objLayOut);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  //会议纪要树绑定
  public async Bind_MeetingMinutesTree(objLayOut: HTMLDivElement) {
    const strWhereCond = ` topicId='${clsPrivateSessionStorage.topicIdInTree}'`;

    //声明主题变量
    let arrgs_MeetingYearNumObjLst: Array<clsgs_MeetingMinutesEN> = [];
    let arrgs_MeetingMonthNumObjLst1: Array<clsgs_MeetingMinutesEN> = [];
    let arrgs_MeetingMonthNumObjLst2: Array<clsgs_MeetingMinutesEN> = [];

    arrgs_MeetingYearNumObjLst = await gs_MeetingMinutesEx_GetMeetingYearNumObjLstAsync(
      strWhereCond,
    );
    await gs_MeetingMinutesEx_GetMeetingMonthNumObjLstAsync(strWhereCond).then((jsonData) => {
      arrgs_MeetingMonthNumObjLst1 = <Array<clsgs_MeetingMinutesEN>>jsonData;
    });

    let strhtml = '';

    for (let i = 0; i < arrgs_MeetingYearNumObjLst.length; i++) {
      const strYear = arrgs_MeetingYearNumObjLst[i].year;

      strhtml += '<li class="li">';

      strhtml += `<a href="javascript:void(0)" id="${strYear}" class="main" title="${strYear}" onclick=main_Click("${strYear}")>${strYear}年</a>`;

      strhtml += `<ul class="submenu" id="ul${strYear}">`;

      arrgs_MeetingMonthNumObjLst2 = arrgs_MeetingMonthNumObjLst1.filter((x) => x.year == strYear);
      //循环数据
      for (let j = 0; j < arrgs_MeetingMonthNumObjLst2.length; j++) {
        const strMonth = arrgs_MeetingMonthNumObjLst2[j].month;

        strhtml += `<li id="li${strYear}${strMonth}" onclick=btnSelectMeetingMonth("${strYear}","${strMonth}")>`;
        //默认存放第一条数据显示；
        //判断存放的id控件是否为空；

        if (GetInputValueInDivObj(objLayOut, 'hidYear') == '') {
          //存放Id
          $('#hidYear').val(strYear);
          $('#hidMonth').val(strMonth);

          strhtml += `<a style="float:left;" href="javascript:void(0)" title="${strMonth}" class="selected">${strMonth}月</a>`;
        } else {
          strhtml += `<a style="float:left;" href="javascript:void(0)" title="${strMonth}">${strMonth}月</a>`;
        }
        strhtml += '<div>';
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="badge badge-primary" title="会议纪要${arrgs_MeetingMonthNumObjLst2[j].memo}条">${arrgs_MeetingMonthNumObjLst2[j].memo}</span>`;

        strhtml += '</div>';

        strhtml += '</li>';
      }
      strhtml += '</ul>';
      strhtml += '</li>';
    }
    $('#MeetingMinutesTreeBind').html(strhtml);
  }

  //会议纪要列表绑定
  public async Bind_MeetingMinutesList(objLayOut: HTMLDivElement) {
    const strRoleId = userStore.getRoleId;
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strWhereCond = ` topicId='${strTopicId}' and year='${GetInputValueInDivObj(
      objLayOut,
      'hidYear',
    )}' and month='${$('#hidMonth').val()}'`;

    //声明主题变量
    let arrgs_MeetingDateNumObjLst: Array<clsgs_MeetingMinutesEN> = [];
    let arrgs_MeetingMinutesObjLst1: Array<clsgs_MeetingMinutesEN> = [];
    let arrgs_MeetingMinutesObjLst2: Array<clsgs_MeetingMinutesEN> = [];

    let arrRTUserRelaObjLst: Array<clsvRTUserRelaEN> = [];

    await gs_MeetingMinutesEx_GetMeetingDateNumObjLstAsync(strWhereCond).then((jsonData) => {
      arrgs_MeetingDateNumObjLst = <Array<clsgs_MeetingMinutesEN>>jsonData;
    });

    await gs_MeetingMinutes_GetObjLstAsync(strWhereCond).then((jsonData) => {
      arrgs_MeetingMinutesObjLst1 = <Array<clsgs_MeetingMinutesEN>>jsonData;
    });

    const strWhereCond2 = `topicId ='${strTopicId}'`;
    arrRTUserRelaObjLst = await vRTUserRela_GetObjLstAsync(strWhereCond2);

    //获取用户缓存数据

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    //strIdCurrEduclsstrBr = '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

    let strhtml = '';

    //循环数据源
    strhtml += '<div><th colspan="2">';
    for (let y = 0; y < arrRTUserRelaObjLst.length; y++) {
      const strUserName = arrRTUserRelaObjLst[y].userName;
      const strColorCode = arrRTUserRelaObjLst[y].colorCode;
      //得到显示用户的色码块
      strhtml += `<label style="background: ${strColorCode}">&nbsp;&nbsp;&nbsp;&nbsp;</label>&nbsp;&nbsp;<span>${strUserName}</span>&nbsp;&nbsp;&nbsp;`;
    }
    strhtml += '</th></div>';

    for (let i = 0; i < arrgs_MeetingDateNumObjLst.length; i++) {
      const strMeetingDate = arrgs_MeetingDateNumObjLst[i].meetingDate;
      strhtml += '<li class="layui-timeline-item">';
      strhtml += '<i class="layui-icon layui-timeline-axis"></i>';
      strhtml += '<div class="layui-timeline-content layui-text">';
      strhtml += `<h3 class="layui-timeline-title">${strMeetingDate}</h3>`;

      arrgs_MeetingMinutesObjLst2 = arrgs_MeetingMinutesObjLst1.filter(
        (x) => x.meetingDate == strMeetingDate,
      );
      for (let j = 0; j < arrgs_MeetingMinutesObjLst2.length; j++) {
        const strKeyId = arrgs_MeetingMinutesObjLst2[j].meetingId;
        const strMeetingContent = arrgs_MeetingMinutesObjLst2[j].meetingContent;
        ////处理换行
        //strMeetingContent = strMeetingContent.replace(/\r\n/g, strBr);
        //strMeetingContent = strMeetingContent.replace(/\n/g, strBr);

        const strUpdUser = arrgs_MeetingMinutesObjLst2[j].updUser;
        const isSubmit = arrgs_MeetingMinutesObjLst2[j].isSubmit;
        const versionCount = arrgs_MeetingMinutesObjLst2[j].versionCount;
        const strParticipants = arrgs_MeetingMinutesObjLst2[j].participants;

        strhtml += `<div>${strMeetingContent}</div>`;

        strhtml += '<div style="width:100%;height:40px;">';
        strhtml += '<div style="float:left;">';
        const strUserName = await vQxUsersSimStore.getUserName(strUpdUser);
        if (strUserName != '') {
          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color1">[编辑用户]：</span>${strUserName}`;
        }
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color1">[参与者]：</span>${strParticipants}`;
        strhtml += '</div>';
        strhtml += '<div style="float:right;">';
        if (isSubmit == false) {
          strhtml += '&nbsp;<span class="rowtit color2">未提交</span>&nbsp;&nbsp;';
          if (strRoleId != '00620003') {
            //删除
            // onclick=Update_MeetingIsSubmit_Click("${strKeyId}",1)
            const strKeyId0 = `${strKeyId}|1`;
            strhtml += `<button id="Update_MeetingIsSubmit" keyId="${strKeyId0}" title="提交会议纪要" class="layui-btn layui-btn-danger layui-btn-xs"  href="javascript:;"><i class="layui-icon">&#x1005;</i>提交</button>`;
            //删除
            // onclick=btnDelgs_MeetingMinutes_Click("${strKeyId}")
            strhtml += `<button id="btnDelgs_MeetingMinutes" keyId="${strKeyId}" title="删除会议纪要" class="btn-danger btn btn-sm" style="width:50px"  href="javascript:;">${clsIcon.faTrash}删除</button>`;
          }
          //编辑
          // onclick=btnUpdategs_MeetingMinutes_Click("${strKeyId}")
          strhtml += `<button id="btnUpdategs_MeetingMinutes" keyId="${strKeyId}" title="编辑会议纪要" class="btn btn-info btn-sm" >${clsIcon.faPenToSquare}编辑</button>`;
        } else {
          strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[已提交]：</span>';
          if ( strRoleId == enumQxRoles.System_Admin_00620001 ||
            strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018) {
            //删除
            // Update_MeetingIsSubmit_Click("${strKeyId}",0)
            const strKeyId0 = `${strKeyId}|0`;
            strhtml += `<button id="Update_MeetingIsSubmit_Click" keyId="${strKeyId0}" title="撤销提交" class="layui-btn layui-btn-danger layui-btn-xs" onclick=Update_MeetingIsSubmit_Click("${strKeyId}",0) href="javascript:;"><i class="layui-icon">&#xe9aa;</i>撤销提交</button>`;
          }
        }
        strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('会议纪要历史版本', '../GradEduEx/HistoricalVersion?Key=${strKeyId}&Type=13')"> ${clsIcon.faCommentDots}历史版本<span class="badge text-bg-info">${versionCount}</span></button >`;
        //判断角色
        //不等于学生，其他角色都可以添加问题
        strhtml += '</div>';

        strhtml += '</div>';

        strhtml += '<div style="border-bottom: 1px solid #eee;"></div>';
      }
      strhtml += '</div>';
      strhtml += '</li>';
    }
    SetUlHtmlInDivObj(objLayOut, 'MeetingMinutesList', strhtml);
    this.SetEventForButtonEvent(objLayOut);
  }
  public SetEventForButtonEvent(objLayOut: HTMLDivElement) {
    {
      const arrBtnSysComment = GetButtonObjLstInDivObjN(objLayOut, 'Update_MeetingIsSubmit');
      for (const Update_MeetingIsSubmit of arrBtnSysComment) {
        if (Update_MeetingIsSubmit != null) {
          const strKeyId = Update_MeetingIsSubmit.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = { keyId: arr[0], stata: arr[1] };

          (function (objData: any) {
            Update_MeetingIsSubmit.onclick = function () {
              gs_MeetingMinutesCRUDEx.vuebtn_Click('Update_MeetingIsSubmit', objData);
            };
          })(objData);
        }
      }
    }
    {
      const arrBtnAddQA = GetButtonObjLstInDivObjN(objLayOut, 'btnDelgs_MeetingMinutes');
      for (const btnDelgs_MeetingMinutes of arrBtnAddQA) {
        if (btnDelgs_MeetingMinutes != null) {
          const strKeyId = btnDelgs_MeetingMinutes.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;

          (function (strKeyId: any) {
            btnDelgs_MeetingMinutes.onclick = function () {
              gs_MeetingMinutesCRUDEx.vuebtn_Click('Delgs_MeetingMinutes', strKeyId);
            };
          })(strKeyId);
        }
      }
    }

    {
      const arrBtnAddQA = GetButtonObjLstInDivObjN(objLayOut, 'btnUpdategs_MeetingMinutes');
      for (const btnUpdategs_MeetingMinutes of arrBtnAddQA) {
        if (btnUpdategs_MeetingMinutes != null) {
          const strKeyId = btnUpdategs_MeetingMinutes.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;

          (function (strKeyId: any) {
            btnUpdategs_MeetingMinutes.onclick = function () {
              gs_MeetingMinutesCRUDEx.vuebtn_Click('Updategs_MeetingMinutes', strKeyId);
            };
          })(strKeyId);
        }
      }
    }
  }
  //会议纪要提交
  public async Update_MeetingIsSubmit_Click(strKeyId: string, stata: number) {
    const objLayOut = gs_MeetingMinutesCRUDEx.objLayOut;
    if (objLayOut == null) return;
    const strThisFuncName = this.Update_MeetingIsSubmit_Click.name;

    const objgs_MeetingMinutesEN: clsgs_MeetingMinutesEN = new clsgs_MeetingMinutesEN();
    objgs_MeetingMinutesEN.SetMeetingId(strKeyId);
    if (stata == 0) {
      objgs_MeetingMinutesEN.SetIsSubmit(false);
    } else {
      objgs_MeetingMinutesEN.SetIsSubmit(true);
    }
    objgs_MeetingMinutesEN.sfUpdFldSetStr = objgs_MeetingMinutesEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objgs_MeetingMinutesEN.meetingId == '' || objgs_MeetingMinutesEN.meetingId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await gs_MeetingMinutes_UpdateRecordAsync(objgs_MeetingMinutesEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        if (stata == 0) {
          message.success('提交撤销成功！');
        } else {
          message.success('会议提交成功！');
        }
        await this.Bind_MeetingMinutesList(objLayOut);
        //gs_MeetingMinutes_ReFreshCache();
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `会议提交不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 
   在数据表里删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
  */
  public async btnDelRecordInTab_Click(strKeyId: string) {
    const objLayOut = gs_MeetingMinutesCRUDEx.objLayOut;
    if (objLayOut == null) return;
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }

      await this.VDelRecord(strKeyId);
      await this.DelRecord(strKeyId);
      await this.Bind_MeetingMinutesList(objLayOut);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
   根据关键字删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
  */
  public async DelRecord(strMeetingId: string) {
    try {
      const responseText = await gs_MeetingMinutes_DelRecordAsync(strMeetingId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //gs_MeetingMinutes_ReFreshCache();
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        //alert();
        message.success(strInfo);
      } else {
        const strInfo = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  //历史版本删除
  public async VDelRecord(arrMeetingId: string) {
    try {
      const returnInt: number = await gs_MeetingMinutesVer_Delgs_MeetingMinutesVersByCondAsync(
        `meetingId='${arrMeetingId}'`,
      );
      if (returnInt > 0) {
        const strInfo = `删除历史版本成功!`;
        ////显示信息框
        //alert(strInfo);
        console.log(strInfo);
      } else {
        const strInfo = `历史版本删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
}
