import { message } from '@/utils/myMessage';
import { gs_ResearchResult_EditEx } from './gs_ResearchResult_EditEx';
import { gs_ResearchResultCRUD } from '@/viewsBase/GradEduTopic/gs_ResearchResultCRUD';
import { gs_ResearchResult_Edit } from '@/viewsBase/GradEduTopic/gs_ResearchResult_Edit';
import { clsgs_ResearchResultAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ResearchResultAttachmentEN';
import { clsvgs_ResearchResultEN } from '@/ts/L0Entity/GradEduTopic/clsvgs_ResearchResultEN';
import { gs_ResearchResultAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_ResearchResultAttachmentWApi';
import { gs_ResearchResult_DelRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_ResearchResultWApi';
import { vgs_ResearchResult_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvgs_ResearchResultWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import {
  GetButtonObjLstInDivObjN,
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  SetUlHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { IShowList } from '@/ts/PubFun/IShowList';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

/* gs_ResearchResultCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_ResearchResultCRUDEx extends gs_ResearchResultCRUD implements IShowList {
  public static GetPropValue: (strPropName: string) => string;
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static objLayOut_Local: HTMLDivElement;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvgs_ResearchResultBy: string = "resultId";
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
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    console.log(strType, strPara);
    this.PageLoad(objLayOut);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'vgs_ResearchResult':
        alert('该类没有绑定该函数：[this.BindGv_vgs_ResearchResult_Cache]！');
        //this.BindGv_vgs_ResearchResultCache();;
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: gs_ResearchResultCRUDEx = new gs_ResearchResultCRUDEx(divLayout);
    const objPageEdit: gs_ResearchResult_EditEx = new gs_ResearchResult_EditEx(
      'gs_ResearchResult_EditEx',
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
        AccessBtnClickDefault(strCommandName, 'gs_ResearchResultCRUDExEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  public async PageLoad(objLayOut: HTMLDivElement) {
    // 在此处放置用户代码以初始化页面
    if (objLayOut == null) return;
    gs_ResearchResultCRUDEx.objLayOut_Local = objLayOut;
    try {
      gs_ResearchResult_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
      //this.divName4Pager = "divPager_ResearchResult";  //列表中的分页区的层Id

      // const divName = GetDivObjInDivObj(objDivLayOut, 'divResearchResult');
      //if (this.bolIsInitShow == false)  //
      //{
      //    this.objPager.InitShow(this.divName4Pager);
      //    this.bolIsInitShow = true;  //
      //}
      await this.Bind_ResearchResultList(objLayOut);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async Combinevgs_ResearchResultCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    let strWhereCond = ' 1 = 1 ';
    if (IsNullOrEmpty(strTopicId) == false) {
      strWhereCond = ` 1 = 1 and topicId='${strTopicId}'`;
    }
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.resultName_q != '') {
        strWhereCond += ` And ${clsvgs_ResearchResultEN.con_ResultName} like '%${this.resultName_q}%'`;
      }
      if (this.updDate_q != '') {
        strWhereCond += ` And ${clsvgs_ResearchResultEN.con_UpdDate} like '%${this.updDate_q}%'`;
      }

      strWhereCond += ` order by updDate Desc`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0009)在组合查询条件(Combinegs_ResearchResultCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //研究成果列表绑定
  public async Bind_ResearchResultList(divName: HTMLDivElement) {
    const strUserId = userStore.getUserId;

    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    let strWhereCond = await this.Combinevgs_ResearchResultCondition();
    //strWhereCond = " topicId='" + strTopicId + "' and year='" + $("#hidYear").val() + "' and month='" + $("#hidMonth").val() + "'";

    //声明主题变量
    //strIdCurrEduclsarrgs_ResultDateNumObjLst: Array<clsgs_ResearchResultEN> = [];
    let arrgs_ResearchResultObjLst1: Array<clsvgs_ResearchResultEN> = [];
    // const arrgs_ResearchResultObjLst2: Array<clsvgs_ResearchResultEN> = [];

    let arrgs_ResearchResultAttachmentObjLst: Array<clsgs_ResearchResultAttachmentEN> = [];

    //const responseObjLst1 = await gs_ResearchResultEx_GetResultDateNumObjLstAsync(strWhereCond).then((jsonData) => {
    //    arrgs_ResultDateNumObjLst = <Array<clsgs_ResearchResultEN>>jsonData;

    //});

    await vgs_ResearchResult_GetObjLstAsync(strWhereCond).then((jsonData) => {
      arrgs_ResearchResultObjLst1 = <Array<clsvgs_ResearchResultEN>>jsonData;
    });

    //获取图片

    strWhereCond = ` 1=1 and topicId ='${strTopicId}'`;

    await gs_ResearchResultAttachment_GetObjLstAsync(strWhereCond).then((jsonData) => {
      arrgs_ResearchResultAttachmentObjLst = <Array<clsgs_ResearchResultAttachmentEN>>jsonData;
    });

    //获取用户缓存数据
    const strWhere_User = '1=1';

    const strBr =
      '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

    let strhtml = '';

    //for (let i = 0; i < arrgs_ResultDateNumObjLst.length; i++) {
    //    strIdCurrEduclsstrResultDate = arrgs_ResultDateNumObjLst[i].updDate;
    //    strhtml += '<li class="layui-timeline-item">';
    //    strhtml += '<i class="layui-icon layui-timeline-axis"></i>';
    //    strhtml += '<div class="layui-timeline-content layui-text">';
    //    strhtml += '<h3 class="layui-timeline-title">' + strResultDate + '</h3>';

    //arrgs_ResearchResultObjLst1 = arrgs_ResearchResultObjLst1.filter(x => x.updDate == strResultDate);
    for (let j = 0; j < arrgs_ResearchResultObjLst1.length; j++) {
      let strResultDate = arrgs_ResearchResultObjLst1[j].updDate;
      strhtml += '<li class="layui-timeline-item">';
      strhtml += '<i class="layui-icon layui-timeline-axis"></i>';
      strhtml += '<div class="layui-timeline-content layui-text">';
      strhtml += `<h3 class="layui-timeline-title">${strResultDate}</h3>`;

      const strKeyId = arrgs_ResearchResultObjLst1[j].resultId;
      const strResultName = arrgs_ResearchResultObjLst1[j].resultName;
      let strResultContent = arrgs_ResearchResultObjLst1[j].resultContent;

      const strAuthor = arrgs_ResearchResultObjLst1[j].author;
      const strDivision = arrgs_ResearchResultObjLst1[j].division;
      //处理换行
      strResultContent = strResultContent.replace(/\r\n/g, strBr);
      strResultContent = strResultContent.replace(/\n/g, strBr);

      //strIdCurrEduclsstrPPT = arrgs_ResearchResultObjLst1[j].pPTUrl;
      //strIdCurrEduclsstrPDF = arrgs_ResearchResultObjLst1[j].pDFUrl;

      const strUpdUser = arrgs_ResearchResultObjLst1[j].updUser;
      //isSubmit = arrgs_ResearchResultObjLst1[j].isSubmit;
      // const versionCount = arrgs_ResearchResultObjLst1[j].versionCount;
      //strIdCurrEduclsstrResultUser = arrgs_ResearchResultObjLst1[j].ResultUser;
      //strIdCurrEduclsstrResultPaper = arrgs_ResearchResultObjLst1[j].paperTitle;
      // const strUpdDate = arrgs_ResearchResultObjLst1[j].updDate;
      const strResultTypeId = arrgs_ResearchResultObjLst1[j].resultTypeId;

      //strhtml += '<div>汇报论文:' + strResultPaper + '</div>';
      strhtml += `<div><span class="rowtit color1">[成果名称]：</span>${strResultName}</div>`;
      strhtml += `<div><span class="rowtit color2">[研究说明]：</span>${strResultContent}</div>`;
      strhtml += `<div><span class="rowtit color3">[作者]：</span>${strAuthor}</div>`;
      strhtml += `<div><span class="rowtit color4">[研究分工]：</span>${strDivision}</div>`;

      let strResultType = '';
      let strResultLink = `resultId=${strKeyId}&resultTypeId=${strResultTypeId}`;
      switch (strResultTypeId) {
        case '01': //选择论文
          strResultType = '选择论文';
          strResultLink += `&paperId=${arrgs_ResearchResultObjLst1[j].paperId}`;
          break;
        case '02': //pdf
          strResultType = '上传论文';
          break;
        case '03': //图片
          strResultType = '图片展示';
          break;
        case '04': //压缩文件
          strResultType = '压缩文件';
          break;
        case '05': //压缩文件
          strResultType = 'Word';
          break;
        case '06': //压缩文件
          strResultType = 'PPT';
          break;
      }
      strhtml += `<div><span class="rowtit color5">[成果类型]：</span>${strResultType}`;

      //strhtml += '<div>';
      if (strResultTypeId == '04' || strResultTypeId == '05' || strResultTypeId == '06') {
        const objgs_ResearchResultAttachment = arrgs_ResearchResultAttachmentObjLst.find(
          (x) => x.resultId == strKeyId,
        );

        if (objgs_ResearchResultAttachment != null) {
          const strfilepath = GetAddressAndPort() + objgs_ResearchResultAttachment.filePath;
          strResultDate = strResultDate.substring(0, 10);
          const strfilename = `${strResultDate + strResultType}附件`;
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<button title="下载附件" class="layui-btn layui-btn-danger layui-btn-xs" onclick=btnDownLoad_ResearchResult_Click("${strfilepath}","${strfilename}")><i class="layui-icon">&#xe601;</i>下载附件</button>`;
        }
      } else {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<button class="layui-btn layui-btn-normal layui-btn-xs" onclick="xadmin.open('研究成果详情', '../GradEduTopic/ResearchResultDetail?${strResultLink}')"> <i class="layui-icon" >&#xe705;</i>研究成果详情</button >`;
      }

      strhtml += '</div>';

      strhtml += '<div style="width:100%;height:40px;">';
      strhtml += '<div style="float:left;">';
      const strUserName = await vQxUsersSimStore.getUserName(strUpdUser);
      if (strUserName != '') {
        strhtml += `<span class="rowtit color1">[编辑用户]：</span>${strUserName}`;
      }
      if (arrgs_ResearchResultObjLst1[j].score != 0) {
        //评分
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;综合评分：${arrgs_ResearchResultObjLst1[j].score}`;
      }
      if (arrgs_ResearchResultObjLst1[j].teaScore != 0) {
        strhtml += `&nbsp;&nbsp;教师评分：${arrgs_ResearchResultObjLst1[j].teaScore}`;
      }
      if (arrgs_ResearchResultObjLst1[j].stuScore != 0) {
        strhtml += `&nbsp;&nbsp;学生评分：${arrgs_ResearchResultObjLst1[j].stuScore}&nbsp;&nbsp;`;
      }
      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('研究成果评论', '../GradEduTools/SysComment?Key=${strKeyId}&Type=13&User=${strUpdUser}&pubParentId=${strTopicId}&scoreType=3')"> ${clsIcon.faCommentDots}添加评论<span class="badge text-bg-info">${arrgs_ResearchResultObjLst1[j].appraiseCount}</span></button >`;

      //strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color1">[编辑时间]：</span>' + strUpdDate;
      //strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color1">[汇报人]：</span>' + strResultUser;
      //if (arrgs_ResearchResultObjLst2[j].pPTUrl != "") {
      //    strfilepath = strAddressAndPort + arrgs_ResearchResultObjLst2[j].pPTUrl;
      //    strfilename = arrgs_ResearchResultObjLst2[i].ResultDate + "汇报的PPT";
      //    strhtml += '<button title="下载PPT" class="layui-btn layui-btn layui-btn-xs" onclick=btnDownLoad_ResearchResult_Click("' + strfilepath + '","' + strfilename + '")><i class="layui-icon">&#xe601;</i>下载PPT</button>';
      //}
      //if (arrgs_ResearchResultObjLst2[j].pDFUrl != "") {
      //    strfilepath = strAddressAndPort + arrgs_ResearchResultObjLst2[j].pDFUrl;
      //    strfilename = arrgs_ResearchResultObjLst2[j].ResultDate + "汇报的PDF";
      //    strhtml += '<button title="下载PDF" class="layui-btn layui-btn layui-btn-xs" onclick=btnDownLoad_ResearchResult_Click("' + strfilepath + '","' + strfilename + '")><i class="layui-icon">&#xe601;</i>下载PDF</button>';
      //    strhtml += "<span class=\"colorRed\" style=\"padding-left:50px;\" onclick=\"xadmin.open('pdf查看', '../GradEduEx/Pdf?file=" + strfilepath + "')\">pdf查看</span>";
      //}
      strhtml += '</div>';
      strhtml += '<div style="float:right; margin-right:20px;">';
      if (strUserId == strUpdUser) {
        //编辑
        // onclick=btnUpdategs_ResearchResult_Click("${strKeyId}")
        strhtml += `<button id="btnUpdategs_ResearchResult" keyId="${strKeyId}" title="编辑研究成果" class="btn btn-info btn-sm" >${clsIcon.faPenToSquare}</button>`;
        //删除
        // onclick=btnDelgs_ResearchResult_Click("${strKeyId}")
        strhtml += `<button id="btnDelgs_ResearchResult" keyId="${strKeyId}" title="删除研究成果" class="btn-danger btn btn-sm"  href="javascript:;">${clsIcon.faTrash}</button>`;
      }
      //判断角色
      //不等于学生，其他角色都可以添加问题
      strhtml += '</div>';

      strhtml += '</div>';
      //strhtml += '</br>';
      strhtml += '<div style="border-bottom: 1px solid #eee;"></div>';

      //}
      strhtml += '</div>';
      strhtml += '</li>';
    }

    SetUlHtmlInDivObj(divName, 'ResearchResultList', strhtml);
    this.SetEventForButtonEvent(divName);
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
              gs_ResearchResultCRUDEx.vuebtn_Click('UpdateIsSubmit', objData);
            };
          })(objData);
        }
      }
    }
    {
      const arrBtnAddQA = GetButtonObjLstInDivObjN(objLayOut, 'btnDelgs_ResearchResult');
      for (const btnDelgs_ResearchResult of arrBtnAddQA) {
        if (btnDelgs_ResearchResult != null) {
          const strKeyId = btnDelgs_ResearchResult.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;

          (function (strKeyId: any) {
            btnDelgs_ResearchResult.onclick = function () {
              gs_ResearchResultCRUDEx.vuebtn_Click('Delgs_ResearchResult', strKeyId);
            };
          })(strKeyId);
        }
      }
    }

    {
      const arrBtnAddQA = GetButtonObjLstInDivObjN(objLayOut, 'btnUpdategs_ResearchResult');
      for (const btnUpdategs_ResearchResult of arrBtnAddQA) {
        if (btnUpdategs_ResearchResult != null) {
          const strKeyId = btnUpdategs_ResearchResult.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;

          (function (strKeyId: any) {
            btnUpdategs_ResearchResult.onclick = function () {
              gs_ResearchResultCRUDEx.vuebtn_Click('Updategs_ResearchResult', strKeyId);
            };
          })(strKeyId);
        }
      }
    }
  }
  //public GetResearchResult_PPT_PDF() {
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

  //研究成果提交
  //public async UpdateIsSubmit_Click(strKeyId: string, stata: number) {

  //    const objgs_ResearchResultEN: clsgs_ResearchResultEN = new clsgs_ResearchResultEN();
  //    objgs_ResearchResultEN.SetResultId(strKeyId;
  //    if (stata == 0) {
  //        objgs_ResearchResultEN.SetIsSubmit(false;
  //    } else {
  //        objgs_ResearchResultEN.SetIsSubmit(true;
  //    }
  //    objgs_ResearchResultEN.sfUpdFldSetStr = objgs_ResearchResultEN.updFldString;//设置哪些字段被修改(脏字段)
  //    if (objgs_ResearchResultEN.resultId == "" || objgs_ResearchResultEN.resultId == undefined) {
  //         throw Format("关键字不能为空!(in {0}.{1})", this.constructor.name, strThisFuncName);
  //    }
  //    try {
  //        const responseText = await gs_ResearchResult_UpdateRecordAsync(objgs_ResearchResultEN);
  //        const returnBool: boolean = !!responseText;
  //        if (returnBool == true) {
  //            if (stata == 0) {
  //                message.success("提交撤销成功！")
  //            } else {
  //                message.success("会议提交成功！")
  //            }
  //            const responseBindGv = await this.Bind_ResearchResultList();
  //            //gs_ResearchResult_ReFreshCache();
  //        }
  //        return returnBool;
  //    }
  //    catch (e:any) {
  //        console.error('catch(e)=');
  //        console.error(e);
  //        strIdCurrEduclsstrMsg: string = `会议提交不成功,${e}.`;
  //        alert(strMsg);
  //        return false;
  //    }
  //}

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

      await this.DelRecord(strKeyId);
      await this.Bind_ResearchResultList(gs_ResearchResultCRUDEx.objLayOut_Local);
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
  public async DelRecord(strResultId: string) {
    try {
      const responseText = await gs_ResearchResult_DelRecordAsync(strResultId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //gs_ResearchResult_ReFreshCache();
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
