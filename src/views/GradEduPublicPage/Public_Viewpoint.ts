import $ from 'jquery';
import { PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsgs_TotalDataRelaEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataRelaEN';
import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';
import { clsvConceptEN } from '@/ts/L0Entity/GradEduTopic/clsvConceptEN';
import { clsViewpointAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointAttachmentEN';
import { clsvSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSkillEN';
import { clsvSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsEN';
import { clsvTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN';
import { clsvViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvViewpointEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';

import { gs_TotalDataRela_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataRelaWApi';
import { gs_VpClassification_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationWApi';
import { vConcept_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTopic/clsvConceptWApi';
import { ViewpointAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsViewpointAttachmentWApi';
import { vSysSkill_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTopic/clsvSysSkillWApi';
import { vSysSocialRelations_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTopic/clsvSysSocialRelationsWApi';
import { vTopicObjective_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTopic/clsvTopicObjectiveWApi';
import {
  vViewpoint_GetFirstObjAsync,
  vViewpoint_GetObjLstCache,
} from '@/ts/L3ForWApi/GradEduTopic/clsvViewpointWApi';
import { SysVote_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { RTUserRela_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTUserRelaWApi';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import { clsvPaperSubViewpointENEx } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointENEx';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { userStore } from '@/store/modulesShare/user';
import { paperSubAttachmentStore } from '@/store/modules/paperSubAttachment';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { sysVoteStore } from '@/store/modules/sysVote';
import { vPaperSubViewpointEx_DetailShowList_vViewpointEx } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSubViewpointExWApi';

export class Public_Viewpoint {
  //绑定观点数据
  public static async Bind_vViewpoint(strViewpointId: string): Promise<string> {
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    // const strCourseId = clsPubLocalStorage.courseId;
    let strhtml = '';

    const strWhereCond = `1=1 and viewpointId='${strViewpointId}'`;

    //获取图片
    let arrViewpointAttachmentObjLst: Array<clsViewpointAttachmentEN> = [];

    try {
      const objvViewpoint = await vViewpoint_GetFirstObjAsync(strWhereCond);

      arrViewpointAttachmentObjLst = await ViewpointAttachment_GetObjLstAsync(strWhereCond);
      if (objvViewpoint != null) {
        //个人观点
        strhtml += '<div class="info" id="infoViewpoint">';

        strhtml += '<ul class="artlist">';
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[观点]：</span><span class="abstract-text">${objvViewpoint.viewpointName}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[内容]：</span><span class="abstract-text">${objvViewpoint.viewpointContent}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[${objvViewpoint.viewpointTypeName}]：</span><span class="abstract-text">${objvViewpoint.reason}</span></li>`;
        //查询附件

        if (arrViewpointAttachmentObjLst.length > 0) {
          //strIdCurrEduclsstrAddressAndPort = "https://www.sh-tz.com/GraduateStudyWebApp/";

          for (let y = 0; y < arrViewpointAttachmentObjLst.length; y++) {
            const strAddressAndPortfull =
              GetAddressAndPort() + arrViewpointAttachmentObjLst[y].filePath;
            strhtml += `<li><img data-action="zoom" src="${strAddressAndPortfull}" style="max-width:500px; margin-left: 10px; " alt="" id="txtImgPath${arrViewpointAttachmentObjLst[y].viewpointAttachmentId}"/></li>`;
          }
        }
        const strUserName = await vQxUsersSimStore.getUserName(objvViewpoint.updUser);
        if (strUserName != '') {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
        }

        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${clsDateTime.GetDate_Sim(
          objvViewpoint.updDate,
        )}`;
        strhtml += '</li>';
        //if (objvViewpoint.citationId != "" && objvViewpoint.citationId != null) {
        //    strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[引用自]：</span>' + objPaper.paperTitle + '(作者：' + objPaper.author + ')</li>';
        //}

        //如果当前观点有引用论文，那么就显示论文标题和作者
        const varCitationId = objvViewpoint.citationId;
        if (varCitationId != '' && varCitationId != null) {
          const objPaper: clsPaperEN = await PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache(
            varCitationId,
            strIdCurrEducls,
          );
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[引用自]：</span>${objPaper.paperTitle}(作者：${objPaper.author})</li>`;
        }

        strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';

        strhtml += '</ul></div>';

        //拼接；

        console.log('完成BindGv_vViewpoint!');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    return strhtml;
  }

  //绑定观点视图
  public static async BindList_vViewpoint(
    strOperationType: string,
    strVType: string,
    arrvViewpointObjLst: Array<clsvPaperSubViewpointEN>,
  ): Promise<string> {
    const arrvViewpointExObjLst: Array<clsvPaperSubViewpointENEx> = arrvViewpointObjLst.map(
      this.GetVExByV,
    );
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vViewpointEx(
      strOperationType,
      strVType,
      arrvViewpointExObjLst,
    );
    return strHtml;
  }

  //绑定论文观点关系视图
  public static async BindList_vgs_PViewpointRela(
    strOperationType: string,
    strVType: string,
    arrvgs_PViewpointRelaObjLst: Array<clsvRTViewpointEN>,
  ) {
    const arrvViewpointExObjLst: Array<clsvPaperSubViewpointENEx> = arrvgs_PViewpointRelaObjLst.map(
      this.GetVExByPV,
    );
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vViewpointEx(
      strOperationType,
      strVType,
      arrvViewpointExObjLst,
    );
    return strHtml;
  }

  //绑定主题观点关系视图
  public static async BindList_vRTViewpointRela(
    strOperationType: string,
    strVType: string,
    arrvRTViewpointRelaObjLst: Array<clsvRTViewpointEN>,
  ) {
    const arrvViewpointExObjLst: Array<clsvPaperSubViewpointENEx> = arrvRTViewpointRelaObjLst.map(
      this.GetVExByRTV,
    );
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vViewpointEx(
      strOperationType,
      strVType,
      arrvViewpointExObjLst,
    );
    return strHtml;
  }

  //转换论文观点数据到扩展观点实体
  private static GetVExByV(objvViewpoint: clsvPaperSubViewpointEN): clsvPaperSubViewpointENEx {
    const objvViewpointEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvViewpointEx.subViewpointId = objvViewpoint.subViewpointId;
    objvViewpointEx.subViewpointContent = objvViewpoint.subViewpointContent;

    objvViewpointEx.explainContent = objvViewpoint.explainContent;
    objvViewpointEx.explainTypeName = objvViewpoint.explainTypeName;
    objvViewpointEx.okCount = objvViewpoint.okCount;
    objvViewpointEx.appraiseCount = objvViewpoint.appraiseCount;
    objvViewpointEx.score = objvViewpoint.score;
    objvViewpointEx.teaScore = objvViewpoint.teaScore;
    objvViewpointEx.stuScore = objvViewpoint.stuScore;
    objvViewpointEx.citationCount = objvViewpoint.citationCount;
    objvViewpointEx.versionCount = objvViewpoint.versionCount;
    objvViewpointEx.isSubmit = objvViewpoint.isSubmit;
    objvViewpointEx.paperId = objvViewpoint.paperId;

    objvViewpointEx.updDate = objvViewpoint.updDate;
    objvViewpointEx.updUser = objvViewpoint.updUser;
    // objvViewpointEx.userName = objvViewpoint.userName;

    return objvViewpointEx;
  }

  //转换论文观点数据到扩展观点实体
  private static GetVExByPV(objvgs_PViewpointRela: clsvRTViewpointEN): clsvPaperSubViewpointENEx {
    const objvViewpointEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvViewpointEx.subViewpointId = objvgs_PViewpointRela.subViewpointId;

    objvViewpointEx.subViewpointContent = objvgs_PViewpointRela.subViewpointContent;
    objvViewpointEx.explainContent = objvgs_PViewpointRela.explainContent;
    objvViewpointEx.explainTypeName = objvgs_PViewpointRela.explainTypeName;
    objvViewpointEx.okCount = objvgs_PViewpointRela.okCount;
    objvViewpointEx.appraiseCount = objvgs_PViewpointRela.appraiseCount;
    objvViewpointEx.score = objvgs_PViewpointRela.score;
    objvViewpointEx.teaScore = objvgs_PViewpointRela.teaScore;
    objvViewpointEx.stuScore = objvgs_PViewpointRela.stuScore;
    objvViewpointEx.citationCount = objvgs_PViewpointRela.citationCount;
    objvViewpointEx.versionCount = objvgs_PViewpointRela.versionCount;
    objvViewpointEx.isSubmit = objvgs_PViewpointRela.isSubmit;
    // objvViewpointEx.mId = objvgs_PViewpointRela.mId;

    objvViewpointEx.updDate = objvgs_PViewpointRela.viewPointDate;
    objvViewpointEx.updUser = objvgs_PViewpointRela.viewPointUserId;
    //   objvViewpointEx.userName = objvgs_PViewpointRela.ViewsUserName;

    objvViewpointEx.relaUpdUser = objvgs_PViewpointRela.updUser;
    objvViewpointEx.relaUpdDate = objvgs_PViewpointRela.updDate;
    return objvViewpointEx;
  }

  //转换主题观点数据到扩展观点实体
  private static GetVExByRTV(objvRTViewpointRela: clsvRTViewpointEN): clsvPaperSubViewpointENEx {
    const objvViewpointEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvViewpointEx.subViewpointId = objvRTViewpointRela.subViewpointId;
    // objvViewpointEx.viewpointName = objvRTViewpointRela.viewpointName;
    objvViewpointEx.subViewpointContent = objvRTViewpointRela.subViewpointContent;
    objvViewpointEx.explainContent = objvRTViewpointRela.explainContent;
    objvViewpointEx.explainTypeName = objvRTViewpointRela.explainTypeName;
    objvViewpointEx.okCount = objvRTViewpointRela.okCount;
    objvViewpointEx.appraiseCount = objvRTViewpointRela.appraiseCount;
    objvViewpointEx.score = objvRTViewpointRela.score;
    objvViewpointEx.teaScore = objvRTViewpointRela.teaScore;
    objvViewpointEx.stuScore = objvRTViewpointRela.stuScore;
    objvViewpointEx.citationCount = objvRTViewpointRela.citationCount;
    objvViewpointEx.versionCount = objvRTViewpointRela.versionCount;
    objvViewpointEx.isSubmit = objvRTViewpointRela.isSubmit;
    // objvViewpointEx.mId = objvRTViewpointRela.mId;
    objvViewpointEx.paperId = objvRTViewpointRela.paperId;

    objvViewpointEx.updDate = objvRTViewpointRela.viewPointDate;
    objvViewpointEx.updUser = objvRTViewpointRela.viewPointUserId;
    //   objvViewpointEx.userName = objvRTViewpointRela.ViewsUserName;

    objvViewpointEx.relaUpdUser = objvRTViewpointRela.updUser;
    //   objvViewpointEx.RelaUserName = objvRTViewpointRela.userName
    objvViewpointEx.relaUpdDate = objvRTViewpointRela.updDate;

    objvViewpointEx.memo = objvRTViewpointRela.topicId;
    objvViewpointEx.isRecommend = objvRTViewpointRela.isRecommend;
    objvViewpointEx.classificationId = objvRTViewpointRela.classificationId;

    return objvViewpointEx;
  }
}
