import $ from 'jquery';
import { Public_Viewpoint } from './Public_Viewpoint';
import { PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsgs_TotalDataRelaEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataRelaEN';
import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';
import { clsObjectiveAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsObjectiveAttachmentEN';
import { clsvTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { gs_TotalDataRela_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataRelaWApi';
import { gs_VpClassification_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationWApi';
import { ObjectiveAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsObjectiveAttachmentWApi';
import { vTopicObjective_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvTopicObjectiveWApi';
import { SysVote_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
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
import { vPaperSubViewpointEx_DetailShowList_vTopicObjectiveEx } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSubViewpointExWApi';
// declare let window: any;
export class Public_TopicObjective {
  //绑定观点数据
  public static async Bind_vTopicObjective(strTopicObjectiveId: string): Promise<string> {
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    // const strCourseId = clsPubLocalStorage.courseId;
    let strhtml = '';
    const strWhereCond = `1=1 and topicObjectiveId='${strTopicObjectiveId}'`;
    ////附件
    //strWhereCondAttachment = "1=1";

    let objvTopicObjective: clsvTopicObjectiveEN = new clsvTopicObjectiveEN();
    //获取图片
    let arrObjectiveAttachmentObjLst: Array<clsObjectiveAttachmentEN> = [];

    try {
      await vTopicObjective_GetFirstObjAsync(strWhereCond).then((jsonData) => {
        objvTopicObjective = <clsvTopicObjectiveEN>jsonData;
      });

      arrObjectiveAttachmentObjLst = await ObjectiveAttachment_GetObjLstAsync(strWhereCond);
      //获取用户缓存；

      if (objvTopicObjective != null) {
        //客观
        strhtml += '<div class="info" id="infoTopicObjective">';
        strhtml += '<ul class="artlist">';

        strhtml += `<li><span class="rowtit color6">[标题]：</span><span class="abstract-text">${objvTopicObjective.objectiveName}</span></li>`;
        strhtml += `<li><span class="rowtit color6">[内容]：</span><span class="abstract-text">${objvTopicObjective.objectiveContent}</span></li>`;
        strhtml += `<li><span class="rowtit color6">[推论]：</span><span class="abstract-text">${objvTopicObjective.conclusion}</span></li>`;
        //查询附件

        if (arrObjectiveAttachmentObjLst.length > 0) {
          //strIdCurrEduclsstrAddressAndPort = "https://www.sh-tz.com/GraduateStudyWebApp/";

          for (let y = 0; y < arrObjectiveAttachmentObjLst.length; y++) {
            const strAddressAndPortfull =
              GetAddressAndPort() + arrObjectiveAttachmentObjLst[y].filePath;
            strhtml += `<li><img data-action="zoom" src="${strAddressAndPortfull}" style="max-width:500px; margin-left: 10px; " alt="" id="txtImgPath${arrObjectiveAttachmentObjLst[y].objectiveAttachmentId}"/></li>`;
          }
        }
        //获取用户名；
        const strUserName = await vQxUsersSimStore.getUserName(objvTopicObjective.updUser);
        if (strUserName != '') {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
        }

        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${clsDateTime.GetDate_Sim(
          objvTopicObjective.updDate,
        )}`;
        strhtml += '</li>';

        //如果当前观点有引用论文，那么就显示论文标题和作者
        const varCitationId = objvTopicObjective.sourceId;
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

        console.log('完成BindGv_vTopicObjective!');
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
  public static async BindList_vTopicObjective(
    strOperationType: string,
    strVType: string,
    arrvTopicObjectiveObjLst: Array<clsvPaperSubViewpointEN>,
  ): Promise<string> {
    const arrvTopicObjectiveExObjLst: Array<clsvPaperSubViewpointENEx> =
      arrvTopicObjectiveObjLst.map(this.GetVExByV);
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vTopicObjectiveEx(
      strOperationType,
      strVType,
      arrvTopicObjectiveExObjLst,
    );
    return strHtml;
  }

  //绑定论文观点关系视图
  public static async BindList_vgs_PTopicObjectiveRela(
    strOperationType: string,
    strVType: string,
    arrvgs_PTopicObjectiveRelaObjLst: Array<clsvRTViewpointEN>,
  ) {
    const arrvTopicObjectiveExObjLst: Array<clsvPaperSubViewpointENEx> =
      arrvgs_PTopicObjectiveRelaObjLst.map(this.GetVExByPV);
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vTopicObjectiveEx(
      strOperationType,
      strVType,
      arrvTopicObjectiveExObjLst,
    );
    return strHtml;
  }
  //绑定主题观点关系视图
  public static async BindList_vRTTopicObjectiveRela(
    strOperationType: string,
    strVType: string,
    arrvRTTopicObjectiveRelaObjLst: Array<clsvRTViewpointEN>,
  ) {
    const arrvTopicObjectiveExObjLst: Array<clsvPaperSubViewpointENEx> =
      arrvRTTopicObjectiveRelaObjLst.map(this.GetVExByRTV);
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vTopicObjectiveEx(
      strOperationType,
      strVType,
      arrvTopicObjectiveExObjLst,
    );
    return strHtml;
  }

  //转换论文观点数据到扩展观点实体
  private static GetVExByV(objvTopicObjective: clsvPaperSubViewpointEN): clsvPaperSubViewpointENEx {
    const objvTopicObjectiveEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvTopicObjectiveEx.subViewpointId = objvTopicObjective.subViewpointId;
    objvTopicObjectiveEx.subViewpointContent = objvTopicObjective.subViewpointContent;
    objvTopicObjectiveEx.explainContent = objvTopicObjective.explainContent;
    objvTopicObjectiveEx.conclusion = objvTopicObjective.conclusion;

    objvTopicObjectiveEx.okCount = objvTopicObjective.okCount;
    objvTopicObjectiveEx.appraiseCount = objvTopicObjective.appraiseCount;
    objvTopicObjectiveEx.score = objvTopicObjective.score;
    objvTopicObjectiveEx.teaScore = objvTopicObjective.teaScore;
    objvTopicObjectiveEx.stuScore = objvTopicObjective.stuScore;
    objvTopicObjectiveEx.citationCount = objvTopicObjective.citationCount;
    objvTopicObjectiveEx.versionCount = objvTopicObjective.versionCount;
    objvTopicObjectiveEx.isSubmit = objvTopicObjective.isSubmit;
    objvTopicObjectiveEx.paperId = objvTopicObjective.paperId;

    objvTopicObjectiveEx.updDate = objvTopicObjective.updDate;
    objvTopicObjectiveEx.updUser = objvTopicObjective.updUser;
    //  objvTopicObjectiveEx.userName = objvTopicObjective.userName;

    return objvTopicObjectiveEx;
  }

  //转换论文观点数据到扩展观点实体
  private static GetVExByPV(
    objvgs_PTopicObjectiveRela: clsvRTViewpointEN,
  ): clsvPaperSubViewpointENEx {
    const objvTopicObjectiveEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvTopicObjectiveEx.subViewpointId = objvgs_PTopicObjectiveRela.subViewpointId;
    objvTopicObjectiveEx.subViewpointContent = objvgs_PTopicObjectiveRela.subViewpointContent;
    objvTopicObjectiveEx.explainContent = objvgs_PTopicObjectiveRela.explainContent;
    objvTopicObjectiveEx.conclusion = objvgs_PTopicObjectiveRela.conclusion;
    objvTopicObjectiveEx.okCount = objvgs_PTopicObjectiveRela.okCount;
    objvTopicObjectiveEx.appraiseCount = objvgs_PTopicObjectiveRela.appraiseCount;
    objvTopicObjectiveEx.score = objvgs_PTopicObjectiveRela.score;
    objvTopicObjectiveEx.teaScore = objvgs_PTopicObjectiveRela.teaScore;
    objvTopicObjectiveEx.stuScore = objvgs_PTopicObjectiveRela.stuScore;
    objvTopicObjectiveEx.citationCount = objvgs_PTopicObjectiveRela.citationCount;
    objvTopicObjectiveEx.versionCount = objvgs_PTopicObjectiveRela.versionCount;
    objvTopicObjectiveEx.isSubmit = objvgs_PTopicObjectiveRela.isSubmit;
    // objvTopicObjectiveEx.mId = objvgs_PTopicObjectiveRela.mId;

    objvTopicObjectiveEx.updDate = objvgs_PTopicObjectiveRela.viewPointDate;
    objvTopicObjectiveEx.updUser = objvgs_PTopicObjectiveRela.viewPointUserId;
    //  objvTopicObjectiveEx.userName = objvgs_PTopicObjectiveRela.ObjUserName;

    objvTopicObjectiveEx.relaUpdUser = objvgs_PTopicObjectiveRela.updUser;
    objvTopicObjectiveEx.relaUpdDate = objvgs_PTopicObjectiveRela.updDate;
    return objvTopicObjectiveEx;
  }

  //转换主题观点数据到扩展观点实体
  private static GetVExByRTV(
    objvRTTopicObjectiveRela: clsvRTViewpointEN,
  ): clsvPaperSubViewpointENEx {
    const objvTopicObjectiveEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvTopicObjectiveEx.subViewpointId = objvRTTopicObjectiveRela.subViewpointId;
    objvTopicObjectiveEx.subViewpointContent = objvRTTopicObjectiveRela.subViewpointContent;
    objvTopicObjectiveEx.explainContent = objvRTTopicObjectiveRela.explainContent;
    objvTopicObjectiveEx.conclusion = objvRTTopicObjectiveRela.conclusion;
    objvTopicObjectiveEx.okCount = objvRTTopicObjectiveRela.okCount;
    objvTopicObjectiveEx.appraiseCount = objvRTTopicObjectiveRela.appraiseCount;
    objvTopicObjectiveEx.score = objvRTTopicObjectiveRela.score;
    objvTopicObjectiveEx.teaScore = objvRTTopicObjectiveRela.teaScore;
    objvTopicObjectiveEx.stuScore = objvRTTopicObjectiveRela.stuScore;
    // objvTopicObjectiveEx.citationCount = objvRTTopicObjectiveRela.citationCount;
    // objvTopicObjectiveEx.versionCount = objvRTTopicObjectiveRela.versionCount;
    objvTopicObjectiveEx.isSubmit = objvRTTopicObjectiveRela.isSubmit;

    objvTopicObjectiveEx.paperId = objvRTTopicObjectiveRela.paperId;

    objvTopicObjectiveEx.updDate = objvRTTopicObjectiveRela.viewPointDate;
    objvTopicObjectiveEx.updUser = objvRTTopicObjectiveRela.viewPointUserId;

    objvTopicObjectiveEx.relaUpdUser = objvRTTopicObjectiveRela.updUser;

    objvTopicObjectiveEx.relaUpdDate = objvRTTopicObjectiveRela.updDate;

    objvTopicObjectiveEx.memo =
      objvRTTopicObjectiveRela.classificationId == null
        ? ''
        : objvRTTopicObjectiveRela.classificationId.toString();
    return objvTopicObjectiveEx;
  }
}
