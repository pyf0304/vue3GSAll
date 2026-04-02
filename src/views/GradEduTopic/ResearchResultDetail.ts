import { Ref } from 'vue';
import $ from 'jquery';
import { clsgs_ResearchResultAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ResearchResultAttachmentEN';
import { PaperAttachment_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import {
  gs_ResearchResultAttachment_GetFirstObjAsync,
  gs_ResearchResultAttachment_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_ResearchResultAttachmentWApi';
import { vgs_ResearchResult_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvgs_ResearchResultWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { GetInputValueInDivObj, HideDivInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { GetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

declare let window: any;
/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ResearchResultDetail {
  public static DetailObj: any;
  public static divDetail: HTMLDivElement;
  public static times4TestShowDialog = 0;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public async PageLoad() {
    const divName = this.getDivName();
    if (divName == null) return;
    try {
      if (userStore.getUserId != '') {
        //绑定pdf_Ifame
        await this.Menu_ResultType();

        await this.Bind_ResearchResult();

        //tbody();

        HideDivInDivObj(divName, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async Menu_ResultType() {
    const divName = this.getDivName();
    const strResultTypeId = GetInputValueInDivObj(divName, 'hidResultTypeId');

    switch (strResultTypeId) {
      case '01': //选择论文
        await this.Bind_PaperPdf();
        break;
      case '02': //pdf
        await this.Bind_Pdf();
        break;
      case '03': //图片
        await this.Bind_Img();

        break;
      case '04': //压缩文件
        await this.Bind_Rar();
        break;
    }
  }

  //绑定pdf_Ifame
  public async Bind_PaperPdf() {
    const divName = this.getDivName();
    try {
      //clsPrjInfoEN objPrjInfo = clsPrjInfoBL.GetObjByPrjID_Cache(strPrjId);

      const strPaperId = GetHidPaperId(divName);

      const strWhereCond = ` 1=1 and paperId ='${strPaperId}'`;
      const objPaperAttachment = await PaperAttachment_GetFirstObjAsync(strWhereCond);

      let strhtml = '';
      if (objPaperAttachment != null) {
        const strfilepath = GetAddressAndPort() + objPaperAttachment.filePath;
        strhtml = `<iframe id='iframe_Pdf' scrolling='auto' src='../GradEduEx/Pdf?zoom=1.1&file=${strfilepath}' style="height:100%;width:100%; height:730px;"></iframe>`;
      } else {
        strhtml =
          "<iframe id='iframe_Pdf' scrolling='auto' src='../GradEduEx/Pdf?zoom=1.1' style=\"height:100%;width:100%; height:730px;\"></iframe>";
      }

      $('#leftPart').html(strhtml);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //绑定pdf_Ifame
  public async Bind_Pdf() {
    const divName = this.getDivName();
    try {
      //clsPrjInfoEN objPrjInfo = clsPrjInfoBL.GetObjByPrjID_Cache(strPrjId);

      const strResultId = GetInputValueInDivObj(divName, 'hidResultId');

      const strWhereCond = ` 1=1 and resultId ='${strResultId}'`;
      const objgs_ResearchResultAttachment = await gs_ResearchResultAttachment_GetFirstObjAsync(
        strWhereCond,
      );

      let strhtml = '';
      if (objgs_ResearchResultAttachment != null) {
        const strfilepath = GetAddressAndPort() + objgs_ResearchResultAttachment.filePath;
        strhtml = `<iframe id='iframe_Pdf' scrolling='auto' src='../GradEduEx/Pdf?zoom=1.1&file=${strfilepath}' style="height:100%;width:100%; height:730px;"></iframe>`;
      } else {
        strhtml =
          "<iframe id='iframe_Pdf' scrolling='auto' src='../GradEduEx/Pdf?zoom=1.1' style=\"height:100%;width:100%; height:730px;\"></iframe>";
      }

      $('#leftPart').html(strhtml);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //绑定pdf_Ifame
  public async Bind_Img() {
    const divName = this.getDivName();
    try {
      //clsPrjInfoEN objPrjInfo = clsPrjInfoBL.GetObjByPrjID_Cache(strPrjId);

      const strResultId = GetInputValueInDivObj(divName, 'hidResultId');

      //获取图片
      let arrgs_ResearchResultAttachmentObjLst: Array<clsgs_ResearchResultAttachmentEN> = [];
      const strWhereCond = ` 1=1 and resultId ='${strResultId}'`;

      arrgs_ResearchResultAttachmentObjLst = await gs_ResearchResultAttachment_GetObjLstAsync(
        strWhereCond,
      );

      let strhtml = '';

      if (arrgs_ResearchResultAttachmentObjLst.length > 0) {
        for (let y = 0; y < arrgs_ResearchResultAttachmentObjLst.length; y++) {
          const strAddressAndPortfull =
            GetAddressAndPort() + arrgs_ResearchResultAttachmentObjLst[y].filePath;
          strhtml += `<div><img data-action="zoom" src="${strAddressAndPortfull}" style="max-width:500px; margin-left: 10px; " alt="" id="txtImgPath${arrgs_ResearchResultAttachmentObjLst[y].mId}"/></div>`;
        }
      }

      $('#leftPart').html(strhtml);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //绑定pdf_Ifame
  public async Bind_Rar() {
    const divName = this.getDivName();
    try {
      //clsPrjInfoEN objPrjInfo = clsPrjInfoBL.GetObjByPrjID_Cache(strPrjId);

      const strResultId = GetInputValueInDivObj(divName, 'hidResultId');
      const strWhereCond = ` 1=1 and resultId ='${strResultId}'`;
      const objgs_ResearchResultAttachment = await gs_ResearchResultAttachment_GetFirstObjAsync(
        strWhereCond,
      );
      if (objgs_ResearchResultAttachment == null) return;

      let strhtml = '';
      if (objgs_ResearchResultAttachment.filePath != '') {
        const strfilepath = GetAddressAndPort() + objgs_ResearchResultAttachment.filePath;
        const strfilename = `${objgs_ResearchResultAttachment.updDate}研究的附件`;
        strhtml += `<button title="下载附件" class="layui-btn layui-btn layui-btn-xs" onclick=btnDownLoadFile_Click("${strfilepath}","${strfilename}")><i class="layui-icon">&#xe601;</i>下载附件</button>`;
      }

      $('#leftPart').html(strhtml);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  //绑定论文主题汇报
  public async Bind_ResearchResult() {
    const divName = this.getDivName();
    const strWhereCond = `1=1 and resultId='${GetInputValueInDivObj(divName, 'hidResultId')}'`;
    // const strWhereCond2 = '1=1';
    // let objvgs_ResearchResult: clsvgs_ResearchResultEN;

    try {
      const objvgs_ResearchResult = await vgs_ResearchResult_GetFirstObjAsync(strWhereCond);

      if (objvgs_ResearchResult != null) {
        let strhtml = '';
        strhtml += '<div class="info" id="infovgs_ResearchResult">';

        strhtml += '<ul class="artlist">';
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[成果名称]：</span><span class="abstract-text">${objvgs_ResearchResult.resultName}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[成果说明]：</span><span class="abstract-text">${objvgs_ResearchResult.resultContent}</span></li>`;
        //strhtml += '<div class="info" id="infovgs_ResearchResult"><div class="title btn-2"><a href="javascript:void(0)" title="汇报内容">' + objvgs_ResearchResult.reportContent + '</a></div>';
        //strhtml += '<div class="info" id="infoViewpoint">';
        //strhtml += '<ul class="artlist">';

        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color2">[作者]：</span><span class="abstract-text">${objvgs_ResearchResult.author}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[分工]：</span><span class="abstract-text">${objvgs_ResearchResult.division}</span></li>`;
        const strUserName = await vQxUsersSimStore.getUserName(objvgs_ResearchResult.updUser);
        if (strUserName != '') {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[编辑用户]：</span><span class="abstract-text">${strUserName}</span></li>`;
        }
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span><span class="abstract-text">${objvgs_ResearchResult.updDate}</span></li>`;

        strhtml += '<li>';
        if (objvgs_ResearchResult.score != 0) {
          //评分
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;综合评分：${objvgs_ResearchResult.score}`;
        }
        if (objvgs_ResearchResult.teaScore != 0) {
          strhtml += `&nbsp;&nbsp;教师评分：${objvgs_ResearchResult.teaScore}`;
        }
        if (objvgs_ResearchResult.stuScore != 0) {
          strhtml += `&nbsp;&nbsp;学生评分：${objvgs_ResearchResult.stuScore}&nbsp;&nbsp;`;
        }
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick="xadmin.open('研究成果评论', '../GradEduTools/SysComment?Key=${objvgs_ResearchResult.resultId}&Type=13&User=${objvgs_ResearchResult.updUser}&pubParentId=${objvgs_ResearchResult.topicId}&scoreType=3')"> ${clsIcon.faCommentDots}添加评论<span class="badge text-bg-info">${objvgs_ResearchResult.appraiseCount}</span></button >`;

        strhtml += '</li>';

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

        strhtml += '</ul></div>';

        //拼接；
        $('#right_Content').html(strhtml);
        console.log('完成BindGv_vgs_ResearchResult!');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    ResearchResultDetail.divDetail = ResearchResultDetail.DetailObj.$refs.refDivDetail;
    if (ResearchResultDetail.divDetail == null) {
      if (ResearchResultDetail.times4TestShowDialog < 2) {
        ResearchResultDetail.times4TestShowDialog++;
        setTimeout(() => {
          this.getDivName();
        }, 100);
      } else {
        const strMsg = Format(
          '当前详细信息区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
      return null;
    } else {
      ResearchResultDetail.times4TestShowDialog = 0;
    }
    return ResearchResultDetail.divDetail;
  }
}
