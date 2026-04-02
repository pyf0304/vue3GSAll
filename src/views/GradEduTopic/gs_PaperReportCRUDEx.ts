import $ from 'jquery';

import { message } from '@/utils/myMessage';
import {
  gs_PaperReportEx_GetReportDateNumObjLstAsync,
  gs_PaperReportEx_GetReportMonthNumObjLstAsync,
  gs_PaperReportEx_GetReportYearNumObjLstAsync,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsgs_PaperReportExWApi';
import { gs_PaperReportCRUD } from '@/viewsBase/GradEduTopic/gs_PaperReportCRUD';
import { gs_PaperReport_Edit } from '@/viewsBase/GradEduTopic/gs_PaperReport_Edit';
import { clsgs_PaperReportEN } from '@/ts/L0Entity/GradEduTopic/clsgs_PaperReportEN';
import { clsvgs_PaperReportEN } from '@/ts/L0Entity/GradEduTopic/clsvgs_PaperReportEN';
import {
  gs_PaperReport_DelRecordAsync,
  gs_PaperReport_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_PaperReportWApi';
import { vgs_PaperReport_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvgs_PaperReportWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import {
  GetButtonObjLstInDivObjN,
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  SetUlHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { IShowList } from '@/ts/PubFun/IShowList';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { gs_PaperReport_EditEx } from '@/views/GradEduTopic/gs_PaperReport_EditEx';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

/* gs_PaperReportCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PaperReportCRUDEx extends gs_PaperReportCRUD implements IShowList {
  public static GetPropValue: (strPropName: string) => string;
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static objLayOut_Local: HTMLDivElement;
  public divName4Pager_ReportEdit = 'divPaperReportEdit';
  public static divName_Save1: HTMLDivElement;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvgs_PaperReportBy: string = "reportId";
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
    console.log(strType, strPara);

    this.PageLoad(gs_PaperReportCRUDEx.objLayOut_Local);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'vgs_PaperReport':
        alert('该类没有绑定该函数：[this.BindGv_vgs_PaperReport_Cache]！');
        //this.BindGv_vgs_PaperReportCache();;
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: gs_PaperReportCRUDEx = new gs_PaperReportCRUDEx(divLayout);
    const objPageEdit: gs_PaperReport_EditEx = new gs_PaperReport_EditEx(
      'gs_PaperReport_EditEx',
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
        AccessBtnClickDefault(strCommandName, 'gs_PaperReportCRUDExEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  public async PageLoad(objLayOut: HTMLDivElement) {
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    gs_PaperReportCRUDEx.objLayOut_Local = objLayOut;
    try {
      gs_PaperReport_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
      //if (this.bolIsInitShow == false)  //
      //{
      //    this.objPager.InitShow(this.divName4Pager_ReportEdit);
      //    this.bolIsInitShow = true;  //
      //}
      const strTopicId: string = clsPrivateSessionStorage.topicIdInTree;
      await this.Bind_PaperReportTree(objLayOut, strTopicId);
      await this.Bind_PaperReportList(objLayOut, strTopicId);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  //论文汇报树绑定
  public async Bind_PaperReportTree(divName: HTMLDivElement, strTopicId: string) {
    const strWhereCond = ` topicId='${strTopicId}'`;

    //声明主题变量
    let arrgs_ReportYearNumObjLst: Array<clsgs_PaperReportEN> = [];
    let arrgs_ReportMonthNumObjLst1: Array<clsgs_PaperReportEN> = [];
    let arrgs_ReportMonthNumObjLst2: Array<clsgs_PaperReportEN> = [];

    await gs_PaperReportEx_GetReportYearNumObjLstAsync(strWhereCond).then((jsonData) => {
      arrgs_ReportYearNumObjLst = <Array<clsgs_PaperReportEN>>jsonData;
    });
    await gs_PaperReportEx_GetReportMonthNumObjLstAsync(strWhereCond).then((jsonData) => {
      arrgs_ReportMonthNumObjLst1 = <Array<clsgs_PaperReportEN>>jsonData;
    });

    let strhtml = '';

    for (let i = 0; i < arrgs_ReportYearNumObjLst.length; i++) {
      const strYear = arrgs_ReportYearNumObjLst[i].year;

      strhtml += '<li class="li">';

      strhtml += `<a href="javascript:void(0)" id="${strYear}" class="main" title="${strYear}" onclick=main_Click("${strYear}")>${strYear}年</a>`;

      strhtml += `<ul class="submenu" id="ul${strYear}">`;

      arrgs_ReportMonthNumObjLst2 = arrgs_ReportMonthNumObjLst1.filter((x) => x.year == strYear);
      //循环数据
      for (let j = 0; j < arrgs_ReportMonthNumObjLst2.length; j++) {
        const strMonth = arrgs_ReportMonthNumObjLst2[j].month;

        strhtml += `<li id="li${strYear}${strMonth}" onclick=btnSelectMonth("${strYear}","${strMonth}")>`;
        //默认存放第一条数据显示；
        //判断存放的id控件是否为空；

        if (GetInputValueInDivObj(divName, 'hidYear') == '') {
          //存放Id
          $('#hidYear').val(strYear);
          $('#hidMonth').val(strMonth);

          strhtml += `<a style="float:left;" href="javascript:void(0)" title="${strMonth}" class="selected">${strMonth}月</a>`;
        } else {
          strhtml += `<a style="float:left;" href="javascript:void(0)" title="${strMonth}">${strMonth}月</a>`;
        }
        strhtml += '<div>';
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="badge badge-primary" title="论文汇报${arrgs_ReportMonthNumObjLst2[j].memo}条">${arrgs_ReportMonthNumObjLst2[j].memo}</span>`;

        strhtml += '</div>';

        strhtml += '</li>';
      }
      strhtml += '</ul>';
      strhtml += '</li>';
    }
    $('#PaperReportTreeBind').html(strhtml);
  }

  //论文汇报列表绑定
  public async Bind_PaperReportList(divName: HTMLDivElement, strTopicId: string) {
    const strUserId = userStore.getUserId;
    const strRoleId = userStore.getRoleId;

    const strWhereCond = ` topicId='${strTopicId}' and year='${GetInputValueInDivObj(
      divName,
      'hidYear',
    )}' and month='${$('#hidMonth').val()}'`;

    //声明主题变量
    let arrgs_ReportDateNumObjLst: Array<clsgs_PaperReportEN> = [];
    let arrgs_PaperReportObjLst1: Array<clsvgs_PaperReportEN> = [];
    let arrgs_PaperReportObjLst2: Array<clsvgs_PaperReportEN> = [];

    try {
      arrgs_ReportDateNumObjLst = await gs_PaperReportEx_GetReportDateNumObjLstAsync(strWhereCond);

      arrgs_PaperReportObjLst1 = await vgs_PaperReport_GetObjLstAsync(strWhereCond);

      const strBr =
        '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

      let strhtml = '';

      for (let i = 0; i < arrgs_ReportDateNumObjLst.length; i++) {
        const strReportDate = arrgs_ReportDateNumObjLst[i].reportDate;
        strhtml += '<li class="layui-timeline-item">';
        strhtml += '<i class="layui-icon layui-timeline-axis"></i>';
        strhtml += '<div class="layui-timeline-content layui-text">';
        strhtml += `<h3 class="layui-timeline-title">${strReportDate}</h3>`;

        arrgs_PaperReportObjLst2 = arrgs_PaperReportObjLst1.filter(
          (x) => x.reportDate == strReportDate,
        );
        for (let j = 0; j < arrgs_PaperReportObjLst2.length; j++) {
          const strKeyId = arrgs_PaperReportObjLst2[j].reportId;
          let strReportContent = arrgs_PaperReportObjLst2[j].reportContent;
          //处理换行
          strReportContent = strReportContent.replace(/\r\n/g, strBr);
          strReportContent = strReportContent.replace(/\n/g, strBr);

          // const strPPT = arrgs_PaperReportObjLst2[j].pPTUrl;
          // const strPDF = arrgs_PaperReportObjLst2[j].pDFUrl;

          const strUpdUser = arrgs_PaperReportObjLst2[j].updUser;
          const isSubmit = arrgs_PaperReportObjLst2[j].isSubmit;
          // const versionCount = arrgs_PaperReportObjLst2[j].versionCount;
          const strReportUser = arrgs_PaperReportObjLst2[j].reportUser;
          const strReportPaper = arrgs_PaperReportObjLst2[j].paperTitle;
          const strUpdDate = arrgs_PaperReportObjLst2[j].updDate;

          //strhtml += '<div>汇报论文:' + strReportPaper + '</div>';
          strhtml += `<span class="rowtit color1">[汇报论文]：</span>${strReportPaper}`;

          strhtml += `<div>${strReportContent}</div>`;
          strhtml += '<div>';
          if (arrgs_PaperReportObjLst2[j].score != 0) {
            //评分
            strhtml += `综合评分：${arrgs_PaperReportObjLst2[j].score}`;
          }
          if (arrgs_PaperReportObjLst2[j].teaScore != 0) {
            strhtml += `&nbsp;&nbsp;教师评分：${arrgs_PaperReportObjLst2[j].teaScore}`;
          }
          if (arrgs_PaperReportObjLst2[j].stuScore != 0) {
            strhtml += `&nbsp;&nbsp;学生评分：${arrgs_PaperReportObjLst2[j].stuScore}&nbsp;&nbsp;`;
          }
          strhtml += `<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('论文汇报评论', '../GradEduTools/SysComment?Key=${strKeyId}&Type=12&User=${strUpdUser}&pubParentId=${strTopicId}')"> ${clsIcon.faCommentDots}添加评论<span class="badge text-bg-info">${arrgs_PaperReportObjLst2[j].appraiseCount}</span></button >`;

          strhtml += '</div>';
          strhtml += '<div style="width:100%;height:40px;">';
          strhtml += '<div style="float:left;">';
          const strUserName = await vQxUsersSimStore.getUserName(strUpdUser);
          if (strUserName != '') {
            strhtml += `<span class="rowtit color1">[编辑用户]：</span>${strUserName}`;
          }
          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color1">[编辑时间]：</span>${strUpdDate}`;
          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color1">[汇报人]：</span>${strReportUser}`;
          if (arrgs_PaperReportObjLst2[j].pPTUrl != '') {
            const strfilepath = GetAddressAndPort() + arrgs_PaperReportObjLst2[j].pPTUrl;
            const strfilename = `${strReportDate}汇报的PPT`;
            strhtml += `<button title="下载PPT" class="layui-btn layui-btn layui-btn-xs" onclick=btnDownLoad_PaperReport_Click("${strfilepath}","${strfilename}")><i class="layui-icon">&#xe601;</i>下载PPT</button>`;
          }
          if (arrgs_PaperReportObjLst2[j].pDFUrl != '') {
            const strfilepath = GetAddressAndPort() + arrgs_PaperReportObjLst2[j].pDFUrl;
            const strfilename = `${strReportDate}汇报的PDF`;
            // onclick=btnDownLoad_PaperReport_Click("${strfilepath}","${strfilename}")
            const strKeyId0 = `${strfilepath}|${strfilename}`;
            strhtml += `<button id="btnDownLoad_PaperReport" keyId="${strKeyId0}" title="下载PDF" class="layui-btn layui-btn layui-btn-xs" ><i class="layui-icon">&#xe601;</i>下载PDF</button>`;
            // onclick="xadmin.open('pdf查看', '../GradEduEx/Pdf?file=${strfilepath}'
            const strKeyId2 = `${strfilepath}`;
            strhtml += `<span id="btnPdfSee" keyId="${strKeyId2}" class="colorRed" style="padding-left:50px;" )">pdf查看</span>`;
          }
          strhtml += '</div>';
          strhtml += '<div style="float:right; margin-right:20px;">';
          if (isSubmit == false) {
            strhtml += '&nbsp;<span class="rowtit color2">未提交</span>&nbsp;&nbsp;';
            if (strUserId == strUpdUser) {
              //删除
              // onclick=UpdateIsSubmit_Click("${strKeyId}",1)
              const strKeyId0 = `${strKeyId}|1`;
              strhtml += `<button id="UpdateIsSubmit" keyId="${strKeyId0}" title="提交论文汇报" class="layui-btn layui-btn-danger layui-btn-xs"  href="javascript:;"><i class="layui-icon">&#x1005;</i>提交</button>`;
              //编辑
              // onclick=btnUpdategs_PaperReport_Click("${strKeyId}")
              strhtml += `<button id="btnUpdategs_PaperReport" keyId="${strKeyId}" title="编辑论文汇报" class="btn btn-info btn-sm" >${clsIcon.faPenToSquare}</button>`;
            }
            if (strRoleId != '00620003') {
              //删除
              // onclick=btnDelgs_PaperReport_Click("${strKeyId}")
              strhtml += `<button id="btnDelgs_PaperReport" keyId="${strKeyId}" title="删除论文汇报" class="btn-danger btn btn-sm"  href="javascript:;">${clsIcon.faTrash}</button>`;
            }
          } else {
            strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[已提交]</span>';
            if ( strRoleId == enumQxRoles.System_Admin_00620001 ||
              strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018) {
              //删除
              // onclick=UpdateIsSubmit_Click("${strKeyId}",0)
              const strKeyId0 = `${strKeyId}|0`;
              strhtml += `<button id="UpdateIsSubmit" keyId="${strKeyId0}" title="撤销提交" class="layui-btn layui-btn-danger layui-btn-xs" onclick=UpdateIsSubmit_Click("${strKeyId}",0) href="javascript:;"><i class="layui-icon">&#xe9aa;</i>撤销提交</button>`;
            }
          }
          //判断角色
          //不等于学生，其他角色都可以添加问题
          strhtml += '</div>';

          strhtml += '</div>';
          //strhtml += '</br>';
          strhtml += '<div style="border-bottom: 1px solid #eee;"></div>';
        }
        strhtml += '</div>';
        strhtml += '</li>';
      }
      SetUlHtmlInDivObj(divName, 'PaperReportList', strhtml);
      this.SetEventForButtonEvent(divName);
    } catch (e: any) {
      console.error(e);
      const strMsg = `获取论文汇报列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  public SetEventForButtonEvent(objLayOut: HTMLDivElement) {
    {
      const arrBtnSysComment = GetButtonObjLstInDivObjN(objLayOut, 'UpdateIsSubmit');
      for (const UpdateIsSubmit of arrBtnSysComment) {
        if (UpdateIsSubmit != null) {
          const strKeyId = UpdateIsSubmit.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = { keyId: arr[0], stata: arr[1] };

          (function (objData: any) {
            UpdateIsSubmit.onclick = function () {
              gs_PaperReportCRUDEx.vuebtn_Click('UpdateIsSubmit', objData);
            };
          })(objData);
        }
      }
    }
    {
      const arrBtnAddQA = GetButtonObjLstInDivObjN(objLayOut, 'btnDelgs_PaperReport');
      for (const btnDelgs_PaperReport of arrBtnAddQA) {
        if (btnDelgs_PaperReport != null) {
          const strKeyId = btnDelgs_PaperReport.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;

          (function (strKeyId: any) {
            btnDelgs_PaperReport.onclick = function () {
              gs_PaperReportCRUDEx.vuebtn_Click('Delgs_PaperReport', strKeyId);
            };
          })(strKeyId);
        }
      }
    }

    {
      const arrBtnAddQA = GetButtonObjLstInDivObjN(objLayOut, 'btnUpdategs_PaperReport');
      for (const btnUpdategs_PaperReport of arrBtnAddQA) {
        if (btnUpdategs_PaperReport != null) {
          const strKeyId = btnUpdategs_PaperReport.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;

          (function (strKeyId: any) {
            btnUpdategs_PaperReport.onclick = function () {
              gs_PaperReportCRUDEx.vuebtn_Click('Updategs_PaperReport', strKeyId);
            };
          })(strKeyId);
        }
      }
    }
  }
  //public GetPaperReport_PPT_PDF() {
  //    strIdCurrEduclsstrPapeId = $("#hidPaperId").val();
  //    //this.keyId = strPaperRWId;
  //    const strWhereCond = ` ${clsPaperAttachmentEN.con_PaperId} = '${strPapeId}'`;
  //    strIdCurrEduclsarrPaperAttachmentObjLst: Array<clsPaperAttachmentEN> = [];
  //    try {
  //        const responseText = PaperAttachment_GetObjLstAsync(strWhereCond).then((jsonData) => {
  //            arrPaperAttachmentObjLst = <Array<clsPaperAttachmentEN>>jsonData;
  //            for (let i = 0; i < arrPaperAttachmentObjLst.length; i++) {

  //                strfilepath = strAddressAndPort + arrPaperAttachmentObjLst[i].filePath;
  //                doDownLoad(strfilepath, arrPaperAttachmentObjLst[i].paperAttachmentName);
  //            }
  //        });

  //    }
  //    catch (e:any) {
  //        console.error(e);
  //        strIdCurrEduclsstrMsg: string = `根据关键字获取相应的记录的对象不成功,${e}.`;
  //        alert(strMsg);
  //    }
  //}

  //论文汇报提交
  public async UpdateIsSubmit_Click(strKeyId: string, stata: number) {
    const strThisFuncName = this.UpdateIsSubmit_Click.name;
    const objLayOut = gs_PaperReportCRUDEx.objLayOut_Local;
    if (objLayOut == null) return;
    const objgs_PaperReportEN: clsgs_PaperReportEN = new clsgs_PaperReportEN();
    const strTopicId: string = clsPrivateSessionStorage.topicIdInTree;
    objgs_PaperReportEN.reportId = strKeyId;
    if (stata == 0) {
      objgs_PaperReportEN.SetIsSubmit(false);
    } else {
      objgs_PaperReportEN.SetIsSubmit(true);
    }
    objgs_PaperReportEN.sfUpdFldSetStr = objgs_PaperReportEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objgs_PaperReportEN.reportId == '' || objgs_PaperReportEN.reportId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await gs_PaperReport_UpdateRecordAsync(objgs_PaperReportEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        if (stata == 0) {
          message.success('提交撤销成功！');
        } else {
          message.success('会议提交成功！');
        }
        await this.Bind_PaperReportList(objLayOut, strTopicId);
        //gs_PaperReport_ReFreshCache();
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
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const strTopicId: string = clsPrivateSessionStorage.topicIdInTree;
      await this.DelRecord(strKeyId);
      await this.Bind_PaperReportList(gs_PaperReportCRUDEx.objLayOut_Local, strTopicId);
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
  public async DelRecord(strReportId: string) {
    try {
      const responseText = await gs_PaperReport_DelRecordAsync(strReportId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //gs_PaperReport_ReFreshCache();
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
}
