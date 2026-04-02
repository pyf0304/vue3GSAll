import $ from 'jquery';
import { Public_Viewpoint } from './Public_Viewpoint';
import { PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsgs_TotalDataRelaEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataRelaEN';
import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
// import { clsvSysSocialRelationsExEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsExEN';
import { gs_TotalDataRela_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataRelaWApi';
import { gs_VpClassification_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationWApi';
import { vSysSocialRelations_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvSysSocialRelationsWApi';
import { SysVote_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import { clsvPaperSubViewpointENEx } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointENEx';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsPaperSubAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachmentEN';
import { PaperSubAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubAttachmentWApi';
import { clsRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointEN';
import { userStore } from '@/store/modulesShare/user';
import { paperSubAttachmentStore } from '@/store/modules/paperSubAttachment';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { sysVoteStore } from '@/store/modules/sysVote';
import { gs_TotalDataRelaEx_BindList_gs_TotalDataRela } from '@/ts/L3ForWApiEx/GradEduTools/clsgs_TotalDataRelaExWApi';
import { vPaperSubViewpointEx_DetailShowList_vSysSocialRelationsEx } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSubViewpointExWApi';
// declare let window: any;
export class Public_SysSocialRelations {
  //绑定观点数据
  public static async Bind_vSysSocialRelations(strSocialId: string): Promise<string> {
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    // const strCourseId = clsPubLocalStorage.courseId;
    let strhtml = '';
    const strWhereCond = `1=1 and socialId='${strSocialId}'`;

    //获取用户缓存数据
    const strWhere_User = '1=1';

    try {
      const objvSysSocialRelations = await vSysSocialRelations_GetFirstObjAsync(strWhereCond);

      if (objvSysSocialRelations != null) {
        //概念
        strhtml += '<div class="info" id="infoSysSocialRelations">';
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
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${clsDateTime.GetDate_Sim(
          objvSysSocialRelations.updDate,
        )}`;
        strhtml += '</li>';

        //如果当前观点有引用论文，那么就显示论文标题和作者
        const varCitationId = objvSysSocialRelations.citationId;
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

        console.log('完成BindGv_vSysSocialRelations!');
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
  public static async BindList_vSysSocialRelations(
    strOperationType: string,
    arrvSysSocialRelationsObjLst: Array<clsvPaperSubViewpointEN>,
  ): Promise<string> {
    const arrvSysSocialRelationsExObjLst: Array<clsvPaperSubViewpointENEx> =
      arrvSysSocialRelationsObjLst.map(this.GetVExByV);
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vSysSocialRelationsEx(
      strOperationType,
      arrvSysSocialRelationsExObjLst,
    );
    return strHtml;
  }

  //绑定论文观点关系视图
  public static async BindList_vgs_PSocialRela(
    strOperationType: string,
    arrvgs_PSocialRelaObjLst: Array<clsvRTViewpointEN>,
  ) {
    const arrvSysSocialRelationsExObjLst = arrvgs_PSocialRelaObjLst.map(this.GetVExByPV);
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vSysSocialRelationsEx(
      strOperationType,
      arrvSysSocialRelationsExObjLst,
    );
    return strHtml;
  }
  //绑定主题观点关系视图
  public static async BindList_vRTSysSocialRela(
    strOperationType: string,
    arrvRTSysSocialRelaObjLst: Array<clsvRTViewpointEN>,
  ) {
    const arrvSysSocialRelationsExObjLst = arrvRTSysSocialRelaObjLst.map(this.GetVExByRTV);
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vSysSocialRelationsEx(
      strOperationType,
      arrvSysSocialRelationsExObjLst,
    );
    return strHtml;
  }

  //转换论文观点数据到扩展观点实体
  private static GetVExByV(
    objvSysSocialRelations: clsvPaperSubViewpointEN,
  ): clsvPaperSubViewpointENEx {
    const objvSysSocialRelationsEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvSysSocialRelationsEx.subViewpointId = objvSysSocialRelations.subViewpointId;
    objvSysSocialRelationsEx.subViewpointContent = objvSysSocialRelations.subViewpointContent;
    objvSysSocialRelationsEx.nationality = objvSysSocialRelations.nationality;
    objvSysSocialRelationsEx.workUnit = objvSysSocialRelations.workUnit;
    objvSysSocialRelationsEx.major = objvSysSocialRelations.major;
    objvSysSocialRelationsEx.achievement = objvSysSocialRelations.achievement;
    objvSysSocialRelationsEx.explainContent = objvSysSocialRelations.explainContent;
    objvSysSocialRelationsEx.okCount = objvSysSocialRelations.okCount;
    objvSysSocialRelationsEx.appraiseCount = objvSysSocialRelations.appraiseCount;
    objvSysSocialRelationsEx.score = objvSysSocialRelations.score;
    objvSysSocialRelationsEx.teaScore = objvSysSocialRelations.teaScore;
    objvSysSocialRelationsEx.stuScore = objvSysSocialRelations.stuScore;
    objvSysSocialRelationsEx.citationCount = objvSysSocialRelations.citationCount;
    objvSysSocialRelationsEx.versionCount = objvSysSocialRelations.versionCount;
    objvSysSocialRelationsEx.isSubmit = objvSysSocialRelations.isSubmit;
    objvSysSocialRelationsEx.paperId = objvSysSocialRelations.paperId;

    objvSysSocialRelationsEx.updDate = objvSysSocialRelations.updDate;
    objvSysSocialRelationsEx.updUser = objvSysSocialRelations.updUser;

    return objvSysSocialRelationsEx;
  }

  //转换论文观点数据到扩展观点实体
  private static GetVExByPV(objvgs_PSocialRela: clsvRTViewpointEN): clsvPaperSubViewpointENEx {
    const objvSysSocialRelationsEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvSysSocialRelationsEx.subViewpointId = objvgs_PSocialRela.subViewpointId;
    objvSysSocialRelationsEx.subViewpointContent = objvgs_PSocialRela.subViewpointContent;
    objvSysSocialRelationsEx.nationality = objvgs_PSocialRela.nationality;
    objvSysSocialRelationsEx.workUnit = objvgs_PSocialRela.workUnit;
    objvSysSocialRelationsEx.major = objvgs_PSocialRela.major;
    objvSysSocialRelationsEx.achievement = objvgs_PSocialRela.achievement;
    objvSysSocialRelationsEx.explainContent = objvgs_PSocialRela.explainContent;
    objvSysSocialRelationsEx.okCount = objvgs_PSocialRela.okCount;
    objvSysSocialRelationsEx.appraiseCount = objvgs_PSocialRela.appraiseCount;
    objvSysSocialRelationsEx.score = objvgs_PSocialRela.score;
    objvSysSocialRelationsEx.teaScore = objvgs_PSocialRela.teaScore;
    objvSysSocialRelationsEx.stuScore = objvgs_PSocialRela.stuScore;
    objvSysSocialRelationsEx.citationCount = objvgs_PSocialRela.citationCount;
    objvSysSocialRelationsEx.versionCount = objvgs_PSocialRela.versionCount;
    objvSysSocialRelationsEx.isSubmit = objvgs_PSocialRela.isSubmit;
    // objvSysSocialRelationsEx.mId = objvgs_PSocialRela.mId;

    objvSysSocialRelationsEx.updDate = objvgs_PSocialRela.viewPointDate;
    objvSysSocialRelationsEx.updUser = objvgs_PSocialRela.viewPointUserId;
    objvSysSocialRelationsEx.relaUpdUser = objvgs_PSocialRela.updUser;
    objvSysSocialRelationsEx.relaUpdDate = objvgs_PSocialRela.updDate;

    return objvSysSocialRelationsEx;
  }

  //转换主题观点数据到扩展观点实体
  private static GetVExByRTV(objvRTSysSocialRela: clsvRTViewpointEN): clsvPaperSubViewpointENEx {
    const objvSysSocialRelationsEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvSysSocialRelationsEx.subViewpointId = objvRTSysSocialRela.subViewpointId;
    objvSysSocialRelationsEx.subViewpointContent = objvRTSysSocialRela.subViewpointContent;
    objvSysSocialRelationsEx.nationality = objvRTSysSocialRela.nationality;
    objvSysSocialRelationsEx.workUnit = objvRTSysSocialRela.workUnit;
    objvSysSocialRelationsEx.major = objvRTSysSocialRela.major;
    objvSysSocialRelationsEx.achievement = objvRTSysSocialRela.achievement;
    objvSysSocialRelationsEx.explainContent = objvRTSysSocialRela.explainContent;
    objvSysSocialRelationsEx.okCount = objvRTSysSocialRela.okCount;
    objvSysSocialRelationsEx.appraiseCount = objvRTSysSocialRela.appraiseCount;
    objvSysSocialRelationsEx.score = objvRTSysSocialRela.score;
    objvSysSocialRelationsEx.teaScore = objvRTSysSocialRela.teaScore;
    objvSysSocialRelationsEx.stuScore = objvRTSysSocialRela.stuScore;
    // objvSysSocialRelationsEx.citationCount = objvRTSysSocialRela.citationCount;
    // objvSysSocialRelationsEx.versionCount = objvRTSysSocialRela.versionCount;
    objvSysSocialRelationsEx.isSubmit = objvRTSysSocialRela.isSubmit;
    // objvSysSocialRelationsEx.mId = objvRTSysSocialRela.mId;
    objvSysSocialRelationsEx.paperId = objvRTSysSocialRela.paperId;

    objvSysSocialRelationsEx.updDate = objvRTSysSocialRela.viewPointDate;
    objvSysSocialRelationsEx.updUser = objvRTSysSocialRela.viewPointUserId;
    objvSysSocialRelationsEx.relaUpdUser = objvRTSysSocialRela.updUser;
    objvSysSocialRelationsEx.relaUpdDate = objvRTSysSocialRela.updDate;

    objvSysSocialRelationsEx.memo =
      objvRTSysSocialRela.classificationId == null
        ? ''
        : objvRTSysSocialRela.classificationId.toString();
    return objvSysSocialRelationsEx;
  }
}
