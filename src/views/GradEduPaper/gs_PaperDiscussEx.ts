import $ from 'jquery';
import {
  PaperEx_CopyToEx,
  PaperEx_GetSubObjLstByIdCurrEduCls_Cache,
} from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsgs_OriginalPaperLogEN } from '@/ts/L0Entity/GradEduPaper/clsgs_OriginalPaperLogEN';
import { clsgs_PaperDiscussEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperDiscussEN';
import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';
import { clsPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsPaperReadWriteEN';
import { clsPaperSubAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachmentEN';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsvConceptEN } from '@/ts/L0Entity/GradEduTopic/clsvConceptEN';
import { clsViewpointAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointAttachmentEN';
import { clsvSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSkillEN';
import { clsvSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsEN';
import { clsvTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN';
import { clsvViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvViewpointEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  gs_OriginalPaperLog_AddNewRecordAsync,
  gs_OriginalPaperLog_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_OriginalPaperLogWApi';
import {
  gs_PaperDiscuss_AddNewRecordAsync,
  gs_PaperDiscuss_DelRecordAsync,
  gs_PaperDiscuss_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperDiscussWApi';
import { PaperAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import { PaperReadWrite_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperReadWriteWApi';
import { PaperSubAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubAttachmentWApi';
import { vPaperReadWrite_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperReadWriteWApi';
import { vPaperSubViewpoint_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { SysComment_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTools/clsSysCommentWApi';
import { ResearchTopic_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { vConcept_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvConceptWApi';
import { ViewpointAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsViewpointAttachmentWApi';
import { vSysSkill_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvSysSkillWApi';
import { vSysSocialRelations_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvSysSocialRelationsWApi';
import { vTopicObjective_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvTopicObjectiveWApi';
import { vViewpoint_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvViewpointWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  GetInputValueInDivObj,
  HideDivInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { GetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { enumSysCommentType } from '@/ts/L0Entity/RT_Params/clsSysCommentTypeEN';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
import { userStore } from '@/store/modulesShare/user';
import { paperSubAttachmentStore } from '@/store/modules/paperSubAttachment';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

declare function HideDialog(): void;
declare function RefreshWindow(): void;

declare function AlertComment(): void;

/* ResearchTopic_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PaperDiscussEx {
  public static parentId = '';
  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divLayout: HTMLDivElement; //界面布局的层对象
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //通过主题Id获取教学班ID
        if (clsPubLocalStorage.idCurrEduCls == '') {
          const objResearchTopic = await ResearchTopic_GetFirstObjAsync(
            ` topicId=${GetInputValueInDivObj(objLayOut, 'hidPubParentId')}`,
          );
          if (objResearchTopic == null) {
            const strMsg = Format(
              '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
            ////const strThisFuncName = this.PageLoad.name;
          }
          clsPubLocalStorage.idCurrEduCls = objResearchTopic.idCurrEduCls;
        }
        //显示当前评论的观点
        //const gvResult1 = await this.Showdiv_Viewpoint()
        await this.GetPaperData();

        //绑定pdf
        await this.BindPdf();

        //评论列表
        await this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //显示自研论文数据；
  public async GetPaperData() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = GetHidPaperId(divName);
    // const strCourseId = clsPubLocalStorage.courseId;
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    const objvPaper_Cond: clsPaperEN = new clsPaperEN(); //查询区域
    let arrPaperExObjLst: Array<clsPaperENEx> = [];
    objvPaper_Cond.SetCondFldValue(clsPaperEN.con_PaperId, strPaperId, '=');
    const arrPaperObjLst = await PaperEx_GetSubObjLstByIdCurrEduCls_Cache(
      objvPaper_Cond,
      strIdCurrEducls,
    );
    arrPaperExObjLst = arrPaperObjLst.map(PaperEx_CopyToEx);
    //获取用户缓存；
    const strWhere_User = '1=1';

    let strhtml = '';
    //strWhereCond1 = " 1=1 and paperId ='" + pobjvPaperReadWriteEN.paperId + "'";
    //strWhereCond2 = " 1=1 and paperId ='" + pobjvPaperReadWriteEN.paperId + "' and updUser='" + userStore.getUserId + "'";

    try {
      //const responseText1 = await vPaperCount_GetFirstObjAsync(strWhereCond1);
      //objvPaperCount = <clsvPaperCountEN>responseText1;

      //const responseText2 = await PaperLikeLog_GetFirstObjAsync(strWhereCond2);
      //objPaperLikeLog = <clsPaperLikeLogEN>responseText2;

      //const responseText3 = await PaperCollectionLog_GetFirstObjAsync(strWhereCond2);
      //objPaperCollectionLog = <clsPaperCollectionLogEN>responseText3;

      strhtml = '';
      for (let i = 0; i < arrPaperExObjLst.length; i++) {
        const objPaperEx = arrPaperExObjLst[i];
        strhtml += '<div class="main-w1 fl" ><dl class="detail-list dbpage" ><dd>';
        strhtml += `<h6><a href="javascript:void(0)" onclick="xadmin.open('论文查看', '../GradEduEx/PaperDetail?paperId=${objPaperEx.paperId}')"><span style='color:#c7228d;'>${objPaperEx.paperTitle}</a>`;
        if (objPaperEx.attachmentCount > 0) {
          strhtml += `<span class="btn-2" style="padding-left:50px;"><a style="font-size:15px; color:#f98c51" href="javascript:void(0)" onclick="xadmin.open('pdf查看', '../GradEduEx/PdfDetail?paperId=${objPaperEx.paperId}')">pdf查看</a></span>`;
        }
        strhtml += '</h6>';

        strhtml += `<div class="baseinfo"><span><a href="javascript:void(0)">${objPaperEx.periodical}</a></span><span><a href="javascript:void(0)">${objPaperEx.keyword}</a></span>`;
        strhtml += '</div>';
        //<span>' + objPaperEx.periodical + ' < /span><em>' + objPaperEx.keyword + '</em >
        strhtml += `<div class="abstract">${objPaperEx.paperContent}</div>`;

        strhtml += '<div class="opts"><ul class="opts-count">';
        strhtml += `<li>评论数:<em>${objPaperEx.appraiseCount}</em></li>`;
        strhtml += `<li>读写数:<em>${objPaperEx.pcount}</em></li><li>发表日期:<em>${objPaperEx.updDate}</em></li>`;
        const strUserName = await vQxUsersSimStore.getUserName(objPaperEx.updUser);
        if (strUserName != '') {
          strhtml += `<li>发表人:<em>${strUserName}</em></li>`;
        }

        strhtml += '<ul class="opts-btn">';

        //存放论文编辑用户
        $('#hidUser').val(objPaperEx.updUser);

        strhtml += '</ul></div>';
        strhtml += '</dd></dl></div>';
      }

      $('#tabwucPaperReadWrite').html(strhtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定论文对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //绑定论文pdf
  public async BindPdf() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      //clsPrjInfoEN objPrjInfo = clsPrjInfoBL.GetObjByPrjID_Cache(strPrjId);
      const strPaperId = GetHidPaperId(divName);

      //const objPaperAttachment: clsPaperAttachmentEN;
      const strWhereCond = ` 1=1 and paperId ='${strPaperId}'`;
      let arrPaperAttachmentObjLst: Array<clsPaperAttachmentEN> = [];
      arrPaperAttachmentObjLst = await PaperAttachment_GetObjLstAsync(strWhereCond);
      //objPaperAttachment = <clsPaperAttachmentEN>responseText;
      const strDiscussTypeId = GetInputValueInDivObj(divName, 'hidCommentTypeId');

      let strhtml = '';
      let strfilepath = '';
      for (let i = 0; i < arrPaperAttachmentObjLst.length; i++) {
        if (strDiscussTypeId == '01') {
          if (i == 0) {
            strfilepath = GetAddressAndPort() + arrPaperAttachmentObjLst[i].filePath;
          }
        } else {
          if (i == 1) {
            strfilepath = GetAddressAndPort() + arrPaperAttachmentObjLst[i].filePath;
          }
        }
      }
      strhtml = `<iframe src='../GradEduEx/Pdf?file=${strfilepath}' style="height:100%;width:99%; min-height:700px;"></iframe>`;
      $('#div_pdf').html(strhtml);

      //if (objPaperAttachment != null) {
      //    strfilepath = strAddressAndPort + objPaperAttachment.filePath;
      //    strhtml = "";
      //    strhtml = "<iframe src='../GradEduEx/Pdf?file=" + strfilepath + "' style=\"height:100%;width:99%; min-height:700px;\"></iframe>";
      //    $("#div_pdf").html(strhtml);

      //} else {
      //    strhtml = "";
      //    strhtml = "<iframe src='../GradEduEx/Pdf' style=\"height:100%;width:99%; min-height:700px;\"></iframe>";
      //    $("#div_pdf").html(strhtml);
      //}
    } catch (e: any) {
      const strMsg = `获取pdf附件数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  public async Showdiv_Viewpoint() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strCommentTypeId = GetInputValueInDivObj(divName, 'hidCommentTypeId');
    switch (strCommentTypeId) {
      case enumSysCommentType.PaperSubViewpoint_02:
        await this.BindGv_vPaperSubViewpoint();
        break;
      case enumSysCommentType.Viewpoint_03:
        await this.BindGv_vViewpoint();
        break;
      case enumSysCommentType.Viewpoint_04:
        await this.BindGv_vViewpoint();
        break;
      case enumSysCommentType.Concept_05:
        await this.BindGv_Concept();
        break;
      case enumSysCommentType.TopicObjective_06:
        await this.BindGv_vTopicObjective();
        break;
      case enumSysCommentType.TopicObjective_07:
        await this.BindGv_vTopicObjective();
        break;
      case enumSysCommentType.SysSkill_09:
        await this.BindGv_vSysSkill();
        break;
      case enumSysCommentType.SysSocialRelations_10:
        await this.BindGv_vSysSocialRelations();
        break;
      default:
        break;
    }
  }

  //绑定论文子观点数据
  public async BindGv_vPaperSubViewpoint() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strWhereCond = `1=1 and subViewpointId='${GetInputValueInDivObj(
      divName,
      'hidTableKey',
    )}'`;

    let objvPaperSubViewpoint: clsvPaperSubViewpointEN;

    try {
      await vPaperSubViewpoint_GetFirstObjAsync(strWhereCond).then(async (jsonData) => {
        objvPaperSubViewpoint = <clsvPaperSubViewpointEN>jsonData;

        if (objvPaperSubViewpoint != null) {
          let strhtml = '';
          strhtml += `<div class="info" id="infoSubViewpoint"><div class="title btn-2"><a href="javascript:void(0)" title="${objvPaperSubViewpoint.subViewpointTypeName}">${objvPaperSubViewpoint.subViewpointTypeName}</a></div>`;
          //strhtml += '<div class="info" id="infoViewpoint">';
          strhtml += '<ul class="artlist">';
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${objvPaperSubViewpoint.rWTitle}]：</span><span class="abstract-text">${objvPaperSubViewpoint.subViewpointContent}</span></li>`;

          if (IsNullOrEmpty(objvPaperSubViewpoint.sectionName) == false) {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[论文节]：</span><span class="abstract-text">${objvPaperSubViewpoint.sectionName}</span></li>`;
          }

          const arrPaperSubAttachments = await paperSubAttachmentStore.getObjLst(
            objvPaperSubViewpoint.subViewpointId,
          );
          if (arrPaperSubAttachments != null && arrPaperSubAttachments.length > 0) {
            for (let y = 0; y < arrPaperSubAttachments.length; y++) {
              const strAddressAndPortfull =
                GetAddressAndPort() + arrPaperSubAttachments[y].filePath;
              strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" style="max-width:500px; margin-left: 10px;" alt="" id="txtImgPath${arrPaperSubAttachments[y].paperSubAttachmentId}"/>`;
            }
          }

          if (objvPaperSubViewpoint.explainContent != '') {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${objvPaperSubViewpoint.explainTypeName}]：</span><span class="abstract-text">${objvPaperSubViewpoint.explainContent}</span></li>`;
          }

          //if (objvPaperSubViewpoint.literatureSourcesId != "") {

          //}
          const strUserName = await vQxUsersSimStore.getUserName(objvPaperSubViewpoint.updUser);
          if (strUserName != '') {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
          }

          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${objvPaperSubViewpoint.updDate}`;
          strhtml += '</li>';

          strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

          strhtml += '</ul></div>';

          //拼接；
          $('#div_Viewpoint').html(strhtml);
          console.log('完成BindGv_vPaperSubViewpoint!');
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //绑定观点数据
  public async BindGv_vViewpoint() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strWhereCond = `1=1 and viewpointId='${GetInputValueInDivObj(divName, 'hidTableKey')}'`;
    //附件
    const strWhereCondAttachment = '1=1';

    let objvViewpoint: clsvViewpointEN;
    //获取图片
    let arrViewpointAttachmentObjLst: Array<clsViewpointAttachmentEN> = [];
    let arrViewpointAttachmentObjLst2: Array<clsViewpointAttachmentEN> = [];
    try {
      await ViewpointAttachment_GetObjLstAsync(strWhereCondAttachment).then((jsonData) => {
        arrViewpointAttachmentObjLst2 = <Array<clsViewpointAttachmentEN>>jsonData;
      });

      await vViewpoint_GetFirstObjAsync(strWhereCond).then(async (jsonData) => {
        objvViewpoint = <clsvViewpointEN>jsonData;

        if (objvViewpoint != null) {
          let strhtml = '';
          //个人观点
          strhtml += '<div class="info" id="infoViewpoint">';
          strhtml += '<ul class="artlist">';

          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[观点]：</span><span class="abstract-text">${objvViewpoint.viewpointName}</span></li>`;
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[内容]：</span><span class="abstract-text">${objvViewpoint.viewpointContent}</span></li>`;
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${objvViewpoint.viewpointTypeName}]：</span><span class="abstract-text">${objvViewpoint.reason}</span></li>`;
          //查询附件
          arrViewpointAttachmentObjLst = arrViewpointAttachmentObjLst2.filter(
            (x) => x.viewpointId == objvViewpoint.viewpointId,
          );
          if (arrViewpointAttachmentObjLst.length > 0) {
            //strIdCurrEduclsstrAddressAndPort = "https://www.sh-tz.com/GraduateStudyWebApp/";

            for (let y = 0; y < arrViewpointAttachmentObjLst.length; y++) {
              const strAddressAndPortfull =
                GetAddressAndPort() + arrViewpointAttachmentObjLst[y].filePath;
              strhtml += `<li><img src="${strAddressAndPortfull}" style="max-width:500px; margin-left: 10px; " alt="" id="txtImgPath${arrViewpointAttachmentObjLst[y].viewpointAttachmentId}"/></li>`;
            }
          }
          const strUserName = await vQxUsersSimStore.getUserName(objvViewpoint.updUser);
          if (strUserName != '') {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
          }

          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${objvViewpoint.updDate}`;
          strhtml += '</li>';

          strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

          strhtml += '</ul></div>';

          //拼接；
          $('#div_Viewpoint').html(strhtml);
          console.log('完成BindGv_vViewpoint!');
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //绑定相关概念
  public async BindGv_Concept() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strWhereCond = `1=1 and conceptId='${GetInputValueInDivObj(divName, 'hidTableKey')}'`;
    let objvConcept: clsvConceptEN;

    try {
      const strWhere_User = '1=1';

      await vConcept_GetFirstObjAsync(strWhereCond).then(async (jsonData) => {
        objvConcept = <clsvConceptEN>jsonData;

        if (objvConcept != null) {
          let strhtml = '';
          strhtml += '<div class="info" id="infoViewpoint">';
          strhtml += '<ul class="artlist">';

          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[概念]：</span><span class="abstract-text">${objvConcept.conceptName}</span></li>`;
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[内容]：</span><span class="abstract-text">${objvConcept.conceptContent}</span></li>`;
          const strUserName = await vQxUsersSimStore.getUserName(objvConcept.updUser);
          if (strUserName != '') {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
          }
          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${objvConcept.updDate}`;
          strhtml += '</li>';

          strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

          strhtml += '</ul></div>';

          //拼接；
          $('#div_Viewpoint').html(strhtml);
          console.log('完成BindGv_vViewpoint!');
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //客观事实、客观数据
  public async BindGv_vTopicObjective() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strWhereCond = `1=1 and topicObjectiveId='${GetInputValueInDivObj(
      divName,
      'hidTableKey',
    )}'`;
    let objvTopicObjective: clsvTopicObjectiveEN;

    try {
      await vTopicObjective_GetFirstObjAsync(strWhereCond).then(async (jsonData) => {
        objvTopicObjective = <clsvTopicObjectiveEN>jsonData;

        if (objvTopicObjective != null) {
          let strhtml = '';
          //个人观点
          strhtml += '<div class="info" id="infoViewpoint">';
          strhtml += '<ul class="artlist">';

          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[标题]：</span><span class="abstract-text">${objvTopicObjective.objectiveName}</span></li>`;
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[内容]：</span><span class="abstract-text">${objvTopicObjective.objectiveContent}</span></li>`;
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[推论]：</span><span class="abstract-text">${objvTopicObjective.conclusion}</span></li>`;
          const strUserName = await vQxUsersSimStore.getUserName(objvTopicObjective.updUser);
          if (strUserName != '') {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
          }
          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${objvTopicObjective.updDate}`;
          strhtml += '</li>';

          strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

          strhtml += '</ul></div>';

          //拼接；
          $('#div_Viewpoint').html(strhtml);
          console.log('完成BindGv_vTopicObjective!');
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //技能
  public async BindGv_vSysSkill() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strWhereCond = `1=1 and skillId='${GetInputValueInDivObj(divName, 'hidTableKey')}'`;
    let objvSysSkill: clsvSysSkillEN;

    try {
      await vSysSkill_GetFirstObjAsync(strWhereCond).then(async (jsonData) => {
        objvSysSkill = <clsvSysSkillEN>jsonData;

        if (objvSysSkill != null) {
          let strhtml = '';
          //技能
          strhtml += '<div class="info" id="infoViewpoint">';
          strhtml += '<ul class="artlist">';

          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[技能]：</span><span class="abstract-text">${objvSysSkill.skillName}</span></li>`;
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[类型]：</span><span class="abstract-text">${objvSysSkill.operationTypeName}</span>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[保密等级]：</span><span class="abstract-text">${objvSysSkill.levelName}</span></li>`;
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[实施过程]：</span><span class="abstract-text">${objvSysSkill.process}</span></li>`;

          const strUserName = await vQxUsersSimStore.getUserName(objvSysSkill.updUser);
          if (strUserName != '') {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
          }
          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${objvSysSkill.updDate}`;
          strhtml += '</li>';

          strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

          strhtml += '</ul></div>';

          //拼接；
          $('#div_Viewpoint').html(strhtml);
          console.log('完成BindGv_vSysSkill!');
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //社会关系
  public async BindGv_vSysSocialRelations() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strWhereCond = `1=1 and socialId='${GetInputValueInDivObj(divName, 'hidTableKey')}'`;
    let objvSysSocialRelations: clsvSysSocialRelationsEN;

    try {
      await vSysSocialRelations_GetFirstObjAsync(strWhereCond).then(async (jsonData) => {
        objvSysSocialRelations = <clsvSysSocialRelationsEN>jsonData;

        if (objvSysSocialRelations != null) {
          let strhtml = '';
          //技能
          strhtml += '<div class="info" id="infoViewpoint">';
          strhtml += '<ul class="artlist">';

          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[姓名]：</span><span class="abstract-text">${objvSysSocialRelations.fullName}</span></li>`;
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[国籍]：</span><span class="abstract-text">${objvSysSocialRelations.nationality}</span></li>`;
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[工作单位]：</span><span class="abstract-text">${objvSysSocialRelations.workUnit}</span></li>`;
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[专业]：</span><span class="abstract-text">${objvSysSocialRelations.major}</span></li>`;
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[成就]：</span><span class="abstract-text">${objvSysSocialRelations.achievement}</span></li>`;
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[详细说明]：</span><span class="abstract-text">${objvSysSocialRelations.detailedDescription}</span></li>`;

          const strUserName = await vQxUsersSimStore.getUserName(objvSysSocialRelations.updUser);
          if (strUserName != '') {
            strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
          }
          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${objvSysSocialRelations.updDate}`;
          strhtml += '</li>';

          strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

          strhtml += '</ul></div>';

          //拼接；
          $('#div_Viewpoint').html(strhtml);
          console.log('完成BindGv_vSysSocialRelations!');
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //显示评论
  public async btnShowAppraise_Click(strCommentOrder: enumCommentOrder) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let arrgs_PaperDiscussObjLst1: Array<clsgs_PaperDiscussEN> = [];
    let arrgs_PaperDiscussObjLst2: Array<clsgs_PaperDiscussEN> = [];
    let arrgs_PaperDiscussObjLst3: Array<clsgs_PaperDiscussEN> = [];
    let strWhereCond1 = '';
    let strWhereCond2 = '';

    const strUserId = userStore.getUserId;
    switch (strCommentOrder) {
      case enumCommentOrder.AllComment_01:
        //全部评论
        strWhereCond1 = ` parentId='root' and  discussTypeId='${$(
          '#hidCommentTypeId',
        ).val()}' and paperId='${GetInputValueInDivObj(
          divName,
          'hidTableKey',
        )}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  discussTypeId='${$(
          '#hidCommentTypeId',
        ).val()}' and paperId='${GetInputValueInDivObj(
          divName,
          'hidTableKey',
        )}' order by updDate Asc`;
        break;
      case enumCommentOrder.Personal_02:
        //个人评论
        strWhereCond1 = ` parentId='root' and  discussTypeId='${$(
          '#hidCommentTypeId',
        ).val()}' and paperId='${$(
          '#hidTableKey',
        ).val()}' and updUser='${strUserId}' order by updDate Asc`;
        strWhereCond2 = ` parentId<>'root' and  discussTypeId='${$(
          '#hidCommentTypeId',
        ).val()}' and paperId='${$(
          '#hidTableKey',
        ).val()}' and updUser='${strUserId}' order by updDate Asc`;
        break;
      case enumCommentOrder.LatestComments_03:
        //最新评论
        strWhereCond1 = ` parentId='root' and  discussTypeId='${$(
          '#hidCommentTypeId',
        ).val()}' and paperId='${GetInputValueInDivObj(
          divName,
          'hidTableKey',
        )}' order by updDate Desc`;
        strWhereCond2 = ` parentId<>'root' and  discussTypeId='${$(
          '#hidCommentTypeId',
        ).val()}' and paperId='${GetInputValueInDivObj(
          divName,
          'hidTableKey',
        )}' order by updDate Desc`;
        break;
      default:
        alert(`所提供的评论次序:[${strCommentOrder}]不正确！`);
        break;
    }

    //strWhereCond1 = " parentId='root' and  commentTypeId='" + $("#hidCommentTypeId").val() + "' and tableKey='" + $("#hidTableKey").val() + "' order by updDate Asc";
    //strWhereCond2 = " parentId<>'root' and  commentTypeId='" + $("#hidCommentTypeId").val() + "' and tableKey='" + $("#hidTableKey").val() + "' order by updDate Asc";

    try {
      await gs_PaperDiscuss_GetObjLstAsync(strWhereCond1).then((jsonData) => {
        arrgs_PaperDiscussObjLst1 = <Array<clsgs_PaperDiscussEN>>jsonData;
      });
      await gs_PaperDiscuss_GetObjLstAsync(strWhereCond2).then((jsonData) => {
        arrgs_PaperDiscussObjLst2 = <Array<clsgs_PaperDiscussEN>>jsonData;
      });

      //获取用户缓存数据

      const strWhere = '1=1';
      const arrvUserStuNameObjLst = await vUsersSim_GetObjLstAsync(strWhere);

      let strhtml = '';
      let varNum = 0;
      const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      J_ShortComment.innerHTML = '';
      for (let i = 0; i < arrgs_PaperDiscussObjLst1.length; i++) {
        varNum++;
        //获取用户名
        let arrvUsers: Array<clsvUsersSimEN> = [];
        let UpdUserName; //编辑人
        arrvUsers = arrvUserStuNameObjLst.filter(
          (x) => x.userId == arrgs_PaperDiscussObjLst1[i].updUser,
        ); //技能引用人
        for (let j = 0; j < arrvUsers.length; j++) {
          UpdUserName = arrvUsers[j].userName;
          break;
        }

        strhtml += '<div class="comment" id = "J_Comment6631028263006567418">';
        strhtml +=
          '<div class="common-avatar J_User" data-userid="17755842" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
        strhtml += '<div class="comment-block" id="J_CommentBlock6631028263006567418">';
        if (GetInputValueInDivObj(divName, 'hidUser') == arrgs_PaperDiscussObjLst1[i].updUser) {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842 style="color:red;" > 楼主：${UpdUserName}</span>`;
        } else {
          strhtml += `<p class="comment-user" ><span class="comment-username J_User" data-userid="17755842">${UpdUserName}</span>`;
        }
        strhtml += `<span class="comment-time">${arrgs_PaperDiscussObjLst1[i].updDate}</span>`;
        strhtml += `  <span class="comment-username J_User">${varNum}楼</span></p>`;
        //strhtml += '<div class="comment-content J_CommentContent">评分：' + arrvPaperAppraiseObjLst[i].AppraiseScore + '</div>';
        strhtml += `<div class="comment-content J_CommentContent">${arrgs_PaperDiscussObjLst1[i].discussContent}</div>`;

        //回复区

        arrgs_PaperDiscussObjLst3 = arrgs_PaperDiscussObjLst2.filter(
          (x) => x.parentId == arrgs_PaperDiscussObjLst1[i].discussId,
        );
        if (arrgs_PaperDiscussObjLst3.length > 0) {
          strhtml += '<div class="reply J_ReplyBlock">';
          for (let j = 0; j < arrgs_PaperDiscussObjLst3.length; j++) {
            //获取用户名
            let arrvUsers: Array<clsvUsersSimEN> = [];
            let UpdUserName; //编辑人
            arrvUsers = arrvUserStuNameObjLst.filter(
              (x) => x.userId == arrgs_PaperDiscussObjLst3[i].updUser,
            ); //技能引用人
            for (let j = 0; j < arrvUsers.length; j++) {
              UpdUserName = arrvUsers[j].userName;
              break;
            }

            strhtml += '<div class="reply-block">';

            strhtml += '<div class="reply-content">';
            if (GetInputValueInDivObj(divName, 'hidUser') == arrgs_PaperDiscussObjLst3[j].updUser) {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" data-userid="28805328" style="color:red;"> 楼主(${UpdUserName})</b>：</span>`;
            } else {
              strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" data-userid="28805328">${UpdUserName}</b>：</span>`;
            }
            strhtml += `${arrgs_PaperDiscussObjLst3[j].discussContent}</div>`;

            //strhtml += '<div class="reply-operate reply-operate--hot">'
            //if (arrgs_PaperDiscussObjLst3[j].scoreType == "2") {
            //    strhtml += '<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分:<i>' + arrgs_PaperDiscussObjLst3[j].score + '</i></span>';
            //} else {
            //    strhtml += '<span class="J_Vote reply-operate-item reply-up">学生评分:<i>' + arrgs_PaperDiscussObjLst3[j].score + '</i></span>';
            //}
            //strhtml += '<i class="reply-dot">·</i><span>' + arrgs_PaperDiscussObjLst3[j].updDate + '</span>';
            //strhtml += '</div>';

            strhtml += '</div>';
          }
          strhtml += '</div>';
        }
        ///评论区
        strhtml += '<div class="comment-operate J_CommentOperate clearfix">';
        //if (arrgs_PaperDiscussObjLst1[i].scoreType == "2") {
        //    strhtml += '<span class="J_Vote reply-operate-item reply-up" style="color:red;">教师评分:<i>' + arrgs_PaperDiscussObjLst1[i].score + '</i></span>';
        //} else {
        //    strhtml += '<span class="J_Vote reply-operate-item reply-up">学生评分:<i>' + arrgs_PaperDiscussObjLst1[i].score + '</i></span>';
        //}

        strhtml += '<span class="J_Vote comment-operate-item comment-operate-up">赞<i>1</i></span>';
        strhtml += `<span class="J_Reply comment-operate-item comment-operate-reply" id="J_Reply" onclick=btnReplyComment_Click("${arrgs_PaperDiscussObjLst1[i].discussId}")>回复</span>`;
        strhtml += '</div>';

        if (strUserId == arrgs_PaperDiscussObjLst1[i].updUser) {
          strhtml += `<div class="J_Report comment-report" id="J_Report6673850347411436155" onclick=btnDeleteComment_Click("${arrgs_PaperDiscussObjLst1[i].discussId}")>删除</div>`;
        }
        strhtml += '</div></div>';
      }
      J_ShortComment.innerHTML = strhtml;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取数据不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 添加评论内容
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 */
  public async SubmitAppraise_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strUserId = userStore.getUserId;
    const strRoleId = userStore.getRoleId;

    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'hidPaperLogTypeId');
    const strTableKey = GetInputValueInDivObj(divName, 'hidTableKey');
    //用来区分 小组讨论 或同伴建议 01 02
    const strDiscussTypeId = GetInputValueInDivObj(divName, 'hidCommentTypeId');
    const objgs_PaperDiscussEN: clsgs_PaperDiscussEN = new clsgs_PaperDiscussEN();
    //this.PutDataToSysCommentClass(objSysCommentEN);
    objgs_PaperDiscussEN.SetPaperId(GetInputValueInDivObj(divName, 'hidTableKey'));
    objgs_PaperDiscussEN.SetParentId(gs_PaperDiscussEx.parentId);
    objgs_PaperDiscussEN.discussTypeId = strDiscussTypeId;
    objgs_PaperDiscussEN.SetUserId(GetInputValueInDivObj(divName, 'hidUser')); //被评论用户
    objgs_PaperDiscussEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);

    if (strRoleId == '00620003') {
      objgs_PaperDiscussEN.SetScoreType('1');
    } else {
      objgs_PaperDiscussEN.SetScoreType('2');
    }

    //strIdCurrEduclsstrvalue = $("#pin").val();
    ////判断是否有打分
    //if (strvalue != "" && strvalue != undefined) {
    //    //获取值转化分数
    //    strIdCurrEduclsstrScore: string = this.GetScorebyText(strvalue);

    //判断内容是否输入
    if (GetInputValueInDivObj(divName, 'txtAppraiseContent') != '') {
      objgs_PaperDiscussEN.discussContent = GetInputValueInDivObj(divName, 'txtAppraiseContent'); // 评议内容
      // objgs_PaperDiscussEN.SetScore( parseInt(strScore);// 打分
      objgs_PaperDiscussEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
      objgs_PaperDiscussEN.SetUpdUser(strUserId); // 修改用户Id
      try {
        const responseText2 = await gs_PaperDiscuss_AddNewRecordAsync(objgs_PaperDiscussEN);
        //const responseText2 = await SysComment_AddNewRecordWithMaxIdAsync(objgs_PaperDiscussEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          //查询 论文、日志类型是否存在；
          const strWhere = ` 1 = 1 And paperId = '${strTableKey}' And logTypeId = '${strPaperLogTypeId}'`;
          const responseText3 = await gs_OriginalPaperLog_IsExistRecordAsync(strWhere);
          const bolIsExist: boolean = responseText3;
          if (bolIsExist == true) {
            const strInfo = `评论成功`;
            //显示信息框
            alert(strInfo);
            HideDialog();
            $('#btnOKUpdAppraise').attr('disabled', 'false');
            await this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
            return true; //一定要有一个返回值，否则会出错！
          } else {
            //添加论文日志；
            await this.Addgs_OriginalPaperLogSave();

            const strInfo = `评论成功`;
            //显示信息框
            alert(strInfo);
            HideDialog();
            $('#btnOKUpdAppraise').attr('disabled', 'false');
            await this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
          }

          RefreshWindow();
        } else {
          const strInfo = `添加论文讨论失败!`;
          console.error(strInfo);

          //显示信息框
          alert(strInfo);
          HideDialog();
          $('#btnOKUpdAppraise').attr('disabled', 'false');
        }

        $('#J_PostBtn').attr('disabled', 'false');
        $('#btnOKUpdAppraise').attr('disabled', 'false');
        return responseText2; //一定要有一个返回值，否则会出错！
      } catch (e: any) {
        $('#J_PostBtn').attr('disabled', 'false');
        $('#btnOKUpdAppraise').attr('disabled', 'false');
        console.error('catch(e)=');
        console.error(e);
        const strMsg = `添加评论不成功,${e}.`;
        alert(strMsg);
      }
    } else {
      $('#J_PostBtn').attr('disabled', 'false');
      $('#btnOKUpdAppraise').attr('disabled', 'false');
      AlertComment();
      //strIdCurrEduclsstrInfo: string = `请输入评语!`;
      ////显示信息框
      //alert(strInfo);
      return;
    }

    //}
    //else {
    //    $("#J_PostBtn").attr("disabled", false);
    //    $("#btnOKUpdAppraise").attr("disabled", false);

    //    AlertScore();
    //    //strIdCurrEduclsstrInfo: string = `请选择评分!`;
    //    ////显示信息框
    //    //alert(strInfo);
    //    return;
    //}
    return true; //一定要有一个返回值，否则会出错！
  }
  //添加论文流程日志
  public async Addgs_OriginalPaperLogSave() {
    const objgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN = new clsgs_OriginalPaperLogEN();
    this.PutDataTogs_OriginalPaperLog(objgs_OriginalPaperLogEN);

    try {
      const responseText2 = await gs_OriginalPaperLog_AddNewRecordAsync(objgs_OriginalPaperLogEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        console.log('添加新建论文日志成功');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加日志记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }
  public async PutDataTogs_OriginalPaperLog(pobjgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = GetHidPaperId(divName);
    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'hidPaperLogTypeId');
    //通过区分 是小组讨论还是同伴建议
    const strTypeId = GetInputValueInDivObj(divName, 'hidCommentTypeId');
    pobjgs_OriginalPaperLogEN.SetPaperId(strPaperId);
    pobjgs_OriginalPaperLogEN.SetLogTypeId(strPaperLogTypeId);
    let strMsg = '';
    switch (strTypeId) {
      case '01':
        pobjgs_OriginalPaperLogEN.SetLogDescription('小组讨论');
        break;
      case '02':
        pobjgs_OriginalPaperLogEN.SetLogDescription('同伴建议');
        break;

      default:
        strMsg = `没有数据处理！`;
        alert(strMsg);
        break;
    }
    //pobjgs_OriginalPaperLogEN.SetLogDescription( "新建论文";
    pobjgs_OriginalPaperLogEN.SetUpdUser(userStore.getUserId);
    pobjgs_OriginalPaperLogEN.SetUpdDate(clsPubFun4Web.getNowDate());
  }

  //通过得到的值判断，得到分数
  public GetScorebyText(sValue: string) {
    let Score = '';
    if (sValue == '1') {
      Score = '2';
    } else if (sValue == '2') {
      Score = '4';
    } else if (sValue == '一3') {
      Score = '6';
    } else if (sValue == '4') {
      Score = '8';
    } else {
      Score = '10';
    }
    return Score;
  }

  /* 
    删除评论内容
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   */
  public async btnDeleteComment_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的记录！`);
        return '';
      }
      await this.DelRecord(strKeyId);
      await this.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
      // const response2 = await this.SynStatistics();
      //  RefreshWindow();
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
  public async DelRecord(strCommentId: string) {
    try {
      const responseText = await gs_PaperDiscuss_DelRecordAsync(strCommentId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
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

    //return new Promise((resolve, reject) => {
    //    try {
    //        const responseText = await gs_PaperDiscuss_DelRecordAsync(strCommentId).then((jsonData) => {
    //            strIdCurrEduclsreturnInt: number = jsonData;
    //            if (returnInt > 0) {
    //                AlertNo();
    //                //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
    //                ////显示信息框
    //                //alert(strInfo);
    //            }
    //            else {
    //                strIdCurrEduclsstrInfo: string = `删除记录不成功!`;
    //                //显示信息框
    //                alert(strInfo);
    //            }
    //            console.log("完成DelRecord!");
    //            resolve(jsonData);
    //        });
    //    }
    //    catch (e:any) {
    //        console.error('catch(e)=');
    //        console.error(e);
    //        strIdCurrEduclsstrMsg: string = `删除记录不成功. ${e}.`;
    //        alert(strMsg);
    //    }
    //});
  }

  //添加删除评论的时候统计其他表的部分数据
  public async SynStatistics() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.SynStatistics.name;
    const strCommentTypeId = GetInputValueInDivObj(divName, 'hidCommentTypeId');
    const strRoleId = userStore.getRoleId;
    //论文子观点
    if (strCommentTypeId == '02') {
      //教师或者管理员权限
      if (strRoleId != '00620003') {
        const strPaperRWId = GetInputValueInDivObj(divName, 'hidPubParentId');

        //添加记录的同时并记录论文读写的教师评价数
        const strWhereCond = `   commentTypeId='02' and scoreType='2' and pubParentId=${strPaperRWId}`;
        const intTeaCount = await SysComment_GetRecCountByCondAsync(strWhereCond);

        const objPaperReadWriteEN: clsPaperReadWriteEN = new clsPaperReadWriteEN();
        objPaperReadWriteEN.SetPaperRWId(strPaperRWId);
        objPaperReadWriteEN.SetTeaCount(intTeaCount);

        objPaperReadWriteEN.sfUpdFldSetStr = objPaperReadWriteEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objPaperReadWriteEN.paperRWId == '' || objPaperReadWriteEN.paperRWId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        const responseText = await PaperReadWrite_UpdateRecordAsync(objPaperReadWriteEN);
        const returnBool = !!responseText;
        if (returnBool == true) {
          //刷新缓存
          vPaperReadWrite_ReFreshThisCache(clsPubLocalStorage.idCurrEduCls);
          console.log('添加教师评价数量成功！');
        } else {
          console.log('添加教师评价数量失败！');
        }
        //添加记录的同时并记录论文读写的教师评价数
      }
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
        divName = gs_PaperDiscussEx.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = gs_PaperDiscussEx.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = gs_PaperDiscussEx.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = gs_PaperDiscussEx.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = gs_PaperDiscussEx.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = gs_PaperDiscussEx.divPager;
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
