import $ from 'jquery';
import { Public_Viewpoint } from './Public_Viewpoint';
import { PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsgs_TotalDataRelaEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataRelaEN';
import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';

import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { gs_TotalDataRela_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataRelaWApi';
import { gs_VpClassification_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationWApi';
import { vSysSkill_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvSysSkillWApi';
import { SysVote_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import { clsvPaperSubViewpointENEx } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointENEx';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsPaperSubAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachmentEN';
import { PaperSubAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubAttachmentWApi';
import { clsRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointEN';
import { userStore } from '@/store/modulesShare/user';
import { paperSubAttachmentStore } from '@/store/modules/paperSubAttachment';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { sysVoteStore } from '@/store/modules/sysVote';
import { gs_TotalDataRelaEx_BindList_gs_TotalDataRela } from '@/ts/L3ForWApiEx/GradEduTools/clsgs_TotalDataRelaExWApi';
import { vPaperSubViewpointEx_DetailShowList_vSysSkillEx } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSubViewpointExWApi';
// declare let window: any;
export class Public_SysSkill {
  //绑定观点数据
  public static async Bind_vSysSkill(strSkillId: string): Promise<string> {
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    // const strCourseId = clsPubLocalStorage.courseId;
    let strhtml = '';
    const strWhereCond = `1=1 and skillId='${strSkillId}'`;

    try {
      const objvSysSkill = await vSysSkill_GetFirstObjAsync(strWhereCond);

      if (objvSysSkill != null) {
        //概念
        //技能
        strhtml += '<div class="info" id="infoSysskill">';
        strhtml += '<ul class="artlist">';

        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[技能]：</span><span class="abstract-text">${objvSysSkill.skillName}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[类型]：</span><span class="abstract-text">${objvSysSkill.operationTypeName}</span>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[保密等级]：</span><span class="abstract-text">${objvSysSkill.levelName}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color6">[实施过程]：</span><span class="abstract-text">${objvSysSkill.process}</span></li>`;

        const strUserName = await vQxUsersSimStore.getUserName(objvSysSkill.updUser);
        if (strUserName != '') {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
        }
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${clsDateTime.GetDate_Sim(
          objvSysSkill.updDate,
        )}`;
        strhtml += '</li>';

        //如果当前观点有引用论文，那么就显示论文标题和作者
        const varCitationId = objvSysSkill.citationId;
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

        console.log('完成BindGv_SysSkill!');
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
  public static async BindList_vSysSkill(
    strOperationType: string,
    arrvSysSkillObjLst: Array<clsvPaperSubViewpointEN>,
  ): Promise<string> {
    const arrvSysSkillExObjLst: Array<clsvPaperSubViewpointENEx> = arrvSysSkillObjLst.map(
      this.GetVExByV,
    );
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vSysSkillEx(
      strOperationType,
      arrvSysSkillExObjLst,
    );
    return strHtml;
  }

  //绑定论文观点关系视图
  public static async BindList_vgs_PSkillRela(
    strOperationType: string,
    arrvgs_PSkillRelaObjLst: Array<clsvRTViewpointEN>,
  ) {
    const arrvSysSkillExObjLst: Array<clsvPaperSubViewpointENEx> = arrvgs_PSkillRelaObjLst.map(
      this.GetVExByPV,
    );
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vSysSkillEx(
      strOperationType,
      arrvSysSkillExObjLst,
    );
    return strHtml;
  }
  //绑定主题观点关系视图
  public static async BindList_vRTSysSkill(
    strOperationType: string,
    arrvRTSysSkillObjLst: Array<clsvRTViewpointEN>,
  ) {
    const arrvSysSkillExObjLst: Array<clsvPaperSubViewpointENEx> = arrvRTSysSkillObjLst.map(
      this.GetVExByRTV,
    );
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vSysSkillEx(
      strOperationType,
      arrvSysSkillExObjLst,
    );
    return strHtml;
  }

  //转换论文观点数据到扩展观点实体
  private static GetVExByV(objvSysSkill: clsvPaperSubViewpointEN): clsvPaperSubViewpointENEx {
    const objvSysSkillEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvSysSkillEx.subViewpointId = objvSysSkill.subViewpointId;
    objvSysSkillEx.subViewpointContent = objvSysSkill.subViewpointContent;
    objvSysSkillEx.operationTypeName = objvSysSkill.operationTypeName;
    objvSysSkillEx.explainContent = objvSysSkill.explainContent;
    objvSysSkillEx.okCount = objvSysSkill.okCount;
    objvSysSkillEx.appraiseCount = objvSysSkill.appraiseCount;
    objvSysSkillEx.score = objvSysSkill.score;
    objvSysSkillEx.teaScore = objvSysSkill.teaScore;
    objvSysSkillEx.stuScore = objvSysSkill.stuScore;
    objvSysSkillEx.citationCount = objvSysSkill.citationCount;
    objvSysSkillEx.versionCount = objvSysSkill.versionCount;
    objvSysSkillEx.isSubmit = objvSysSkill.isSubmit;
    objvSysSkillEx.paperId = objvSysSkill.paperId;

    objvSysSkillEx.updDate = objvSysSkill.updDate;
    objvSysSkillEx.updUser = objvSysSkill.updUser;

    return objvSysSkillEx;
  }

  //转换论文观点数据到扩展观点实体
  private static GetVExByPV(objvgs_PSkillRela: clsvRTViewpointEN): clsvPaperSubViewpointENEx {
    const objvSysSkillEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvSysSkillEx.subViewpointId = objvgs_PSkillRela.subViewpointId;
    objvSysSkillEx.subViewpointContent = objvgs_PSkillRela.subViewpointContent;
    objvSysSkillEx.operationTypeName = objvgs_PSkillRela.operationTypeName;
    objvSysSkillEx.explainContent = objvgs_PSkillRela.explainContent;
    objvSysSkillEx.okCount = objvgs_PSkillRela.okCount;
    objvSysSkillEx.appraiseCount = objvgs_PSkillRela.appraiseCount;
    objvSysSkillEx.score = objvgs_PSkillRela.score;
    objvSysSkillEx.teaScore = objvgs_PSkillRela.teaScore;
    objvSysSkillEx.stuScore = objvgs_PSkillRela.stuScore;
    objvSysSkillEx.citationCount = objvgs_PSkillRela.citationCount;
    objvSysSkillEx.versionCount = objvgs_PSkillRela.versionCount;
    objvSysSkillEx.isSubmit = objvgs_PSkillRela.isSubmit;
    // objvSysSkillEx.mId = objvgs_PSkillRela.mId;

    objvSysSkillEx.updDate = objvgs_PSkillRela.viewPointDate;
    objvSysSkillEx.updUser = objvgs_PSkillRela.viewPointUserId;
    objvSysSkillEx.relaUpdUser = objvgs_PSkillRela.updUser;
    objvSysSkillEx.relaUpdDate = objvgs_PSkillRela.updDate;
    return objvSysSkillEx;
  }

  //转换主题观点数据到扩展观点实体
  private static GetVExByRTV(objvRTSysSkill: clsvRTViewpointEN): clsvPaperSubViewpointENEx {
    const objvSysSkillEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvSysSkillEx.subViewpointId = objvRTSysSkill.subViewpointId;
    objvSysSkillEx.subViewpointContent = objvRTSysSkill.subViewpointContent;
    objvSysSkillEx.operationTypeName = objvRTSysSkill.operationTypeName;
    objvSysSkillEx.explainContent = objvRTSysSkill.explainContent;
    objvSysSkillEx.okCount = objvRTSysSkill.okCount;
    objvSysSkillEx.appraiseCount = objvRTSysSkill.appraiseCount;
    objvSysSkillEx.score = objvRTSysSkill.score;
    objvSysSkillEx.teaScore = objvRTSysSkill.teaScore;
    objvSysSkillEx.stuScore = objvRTSysSkill.stuScore;
    objvSysSkillEx.citationCount = objvRTSysSkill.citationCount;
    objvSysSkillEx.versionCount = objvRTSysSkill.versionCount;
    objvSysSkillEx.isSubmit = objvRTSysSkill.isSubmit;
    // objvSysSkillEx.mId = objvRTSysSkill.mId;
    objvSysSkillEx.paperId = objvRTSysSkill.paperId;

    objvSysSkillEx.updDate = objvRTSysSkill.viewPointDate;
    objvSysSkillEx.updUser = objvRTSysSkill.viewPointUserId;
    objvSysSkillEx.relaUpdUser = objvRTSysSkill.updUser;
    objvSysSkillEx.relaUpdDate = objvRTSysSkill.updDate;

    objvSysSkillEx.memo =
      objvRTSysSkill.classificationId == null ? '' : objvRTSysSkill.classificationId.toString();
    return objvSysSkillEx;
  }
}
