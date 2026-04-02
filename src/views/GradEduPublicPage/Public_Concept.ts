import $ from 'jquery';
import { Public_Viewpoint } from './Public_Viewpoint';
import { PaperEx_GetObjByPaperIdByIdCurrEduCls_Cache } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsgs_TotalDataRelaEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataRelaEN';
import { clsConceptAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsConceptAttachmentEN';
import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';
import { clsvConceptEN } from '@/ts/L0Entity/GradEduTopic/clsvConceptEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { gs_TotalDataRela_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataRelaWApi';
import { ConceptAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsConceptAttachmentWApi';
import { gs_VpClassification_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationWApi';
import { vConcept_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvConceptWApi';
import { SysVote_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsvPaperSubViewpointENEx } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointENEx';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsPaperSubAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachmentEN';
import { PaperSubAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubAttachmentWApi';
import { clsRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointEN';
import { userStore } from '@/store/modulesShare/user';
import { paperSubAttachmentStore } from '@/store/modules/paperSubAttachment';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { sysVoteStore } from '@/store/modules/sysVote';
import { gs_TotalDataRelaEx_BindList_gs_TotalDataRela } from '@/ts/L3ForWApiEx/GradEduTools/clsgs_TotalDataRelaExWApi';
import { vPaperSubViewpointEx_DetailShowList_vConceptEx } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSubViewpointExWApi';
// declare let window: any;
export class Public_Concept {
  //绑定观点数据
  public static async Bind_vConcept(strConceptId: string): Promise<string> {
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    // const strCourseId = clsPubLocalStorage.courseId;
    let strhtml = '';
    const strWhereCond = `1=1 and conceptId='${strConceptId}'`;
    ////附件
    //strWhereCondAttachment = "1=1";

    let objvConcept: clsvConceptEN = new clsvConceptEN();
    //获取图片
    let arrConceptAttachmentObjLst: Array<clsConceptAttachmentEN> = [];

    try {
      await vConcept_GetFirstObjAsync(strWhereCond).then((jsonData) => {
        objvConcept = <clsvConceptEN>jsonData;
      });

      arrConceptAttachmentObjLst = await ConceptAttachment_GetObjLstAsync(strWhereCond);

      if (objvConcept != null) {
        //概念
        strhtml += '<div class="info" id="infoConcept">';
        strhtml += '<ul class="artlist">';

        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[概念]：</span><span class="abstract-text">${objvConcept.conceptName}</span></li>`;
        strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[内容]：</span><span class="abstract-text">${objvConcept.conceptContent}</span></li>`;
        //查询附件

        if (arrConceptAttachmentObjLst.length > 0) {
          //strIdCurrEduclsstrAddressAndPort = "https://www.sh-tz.com/GraduateStudyWebApp/";

          for (let y = 0; y < arrConceptAttachmentObjLst.length; y++) {
            const strAddressAndPortfull =
              GetAddressAndPort() + arrConceptAttachmentObjLst[y].filePath;
            strhtml += `<li><img data-action="zoom" src="${strAddressAndPortfull}" style="max-width:400px; margin-left: 10px; " alt="" id="txtImgPath${arrConceptAttachmentObjLst[y].conceptAttachmentId}"/></li>`;
          }
        }
        const strUserName = await vQxUsersSimStore.getUserName(objvConcept.updUser);
        if (strUserName != '') {
          strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>${strUserName}`;
        }
        //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>' + objvConcept.userName;
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>${clsDateTime.GetDate_Sim(
          objvConcept.updDate,
        )}`;
        strhtml += '</li>';
        //如果当前观点有引用论文，那么就显示论文标题和作者
        const varCitationId = objvConcept.citationId;
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

        console.log('完成BindGv_vConcept!');
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
  public static async BindList_vConcept(
    strOperationType: string,
    arrvConceptObjLst: Array<clsvPaperSubViewpointEN>,
  ) {
    const arrvConceptExObjLst: Array<clsvPaperSubViewpointENEx> = arrvConceptObjLst.map(
      this.GetVExByV,
    );
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vConceptEx(
      strOperationType,
      arrvConceptExObjLst,
    );
    return strHtml;
  }

  //绑定论文观点关系视图
  public static async BindList_vgs_PConceptRela(
    strOperationType: string,
    arrvgs_PConceptRelaObjLst: Array<clsvRTViewpointEN>,
  ) {
    const arrvConceptExObjLst: Array<clsvPaperSubViewpointENEx> = arrvgs_PConceptRelaObjLst.map(
      this.GetVExByPV,
    );
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vConceptEx(
      strOperationType,
      arrvConceptExObjLst,
    );
    return strHtml;
  }
  //绑定主题观点关系视图
  public static async BindList_vRTConceptRela(
    strOperationType: string,
    arrvRTConceptRelaObjLst: Array<clsvRTViewpointEN>,
  ) {
    const arrvConceptExObjLst: Array<clsvPaperSubViewpointENEx> = arrvRTConceptRelaObjLst.map(
      this.GetVExByRTV,
    );
    const strHtml = await vPaperSubViewpointEx_DetailShowList_vConceptEx(
      strOperationType,
      arrvConceptExObjLst,
    );
    return strHtml;
  }

  //转换论文观点数据到扩展观点实体
  private static GetVExByV(objvConcept: clsvPaperSubViewpointEN): clsvPaperSubViewpointENEx {
    const objvConceptEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvConceptEx.subViewpointId = objvConcept.subViewpointId;
    objvConceptEx.subViewpointContent = objvConcept.subViewpointContent;
    objvConceptEx.explainContent = objvConcept.explainContent;
    objvConceptEx.okCount = objvConcept.okCount;
    objvConceptEx.appraiseCount = objvConcept.appraiseCount;
    objvConceptEx.score = objvConcept.score;
    objvConceptEx.teaScore = objvConcept.teaScore;
    objvConceptEx.stuScore = objvConcept.stuScore;
    objvConceptEx.citationCount = objvConcept.citationCount;
    objvConceptEx.versionCount = objvConcept.versionCount;
    objvConceptEx.isSubmit = objvConcept.isSubmit;
    objvConceptEx.paperId = objvConcept.paperId;

    objvConceptEx.updDate = objvConcept.updDate;
    objvConceptEx.updUser = objvConcept.updUser;

    return objvConceptEx;
  }

  //转换论文观点数据到扩展观点实体
  private static GetVExByPV(objvgs_PConceptRela: clsvRTViewpointEN): clsvPaperSubViewpointENEx {
    const objvConceptEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvConceptEx.subViewpointId = objvgs_PConceptRela.subViewpointId;
    objvConceptEx.subViewpointContent = objvgs_PConceptRela.subViewpointContent;
    objvConceptEx.explainContent = objvgs_PConceptRela.explainContent;
    objvConceptEx.okCount = objvgs_PConceptRela.okCount;
    objvConceptEx.appraiseCount = objvgs_PConceptRela.appraiseCount;
    objvConceptEx.score = objvgs_PConceptRela.score;
    objvConceptEx.teaScore = objvgs_PConceptRela.teaScore;
    objvConceptEx.stuScore = objvgs_PConceptRela.stuScore;
    objvConceptEx.citationCount = objvgs_PConceptRela.citationCount;
    objvConceptEx.versionCount = objvgs_PConceptRela.versionCount;
    objvConceptEx.isSubmit = objvgs_PConceptRela.isSubmit;
    // objvConceptEx.mId = objvgs_PConceptRela.mId;

    objvConceptEx.updDate = objvgs_PConceptRela.viewPointDate;
    objvConceptEx.updUser = objvgs_PConceptRela.viewPointUserId;
    // objvConceptEx.userName = objvgs_PConceptRela.conceptName;

    objvConceptEx.relaUpdUser = objvgs_PConceptRela.updUser;
    //objvConceptEx.RelaUserName = objvgs_PConceptRela.userName
    objvConceptEx.relaUpdDate = objvgs_PConceptRela.updDate;
    return objvConceptEx;
  }

  //转换主题观点数据到扩展观点实体
  private static GetVExByRTV(objvRTConceptRela: clsvRTViewpointEN): clsvPaperSubViewpointENEx {
    const objvConceptEx: clsvPaperSubViewpointENEx = new clsvPaperSubViewpointENEx();
    objvConceptEx.subViewpointId = objvRTConceptRela.subViewpointId;
    objvConceptEx.subViewpointContent = objvRTConceptRela.subViewpointContent;
    objvConceptEx.explainContent = objvRTConceptRela.explainContent;
    objvConceptEx.okCount = objvRTConceptRela.okCount;
    objvConceptEx.appraiseCount = objvRTConceptRela.appraiseCount;
    objvConceptEx.score = objvRTConceptRela.score;
    objvConceptEx.teaScore = objvRTConceptRela.teaScore;
    objvConceptEx.stuScore = objvRTConceptRela.stuScore;
    objvConceptEx.citationCount = objvRTConceptRela.citationCount;
    objvConceptEx.versionCount = objvRTConceptRela.versionCount;
    objvConceptEx.isSubmit = objvRTConceptRela.isSubmit;
    // objvConceptEx.mId = objvRTConceptRela.mId;
    objvConceptEx.paperId = objvRTConceptRela.paperId;

    objvConceptEx.updDate = objvRTConceptRela.viewPointDate;
    objvConceptEx.updUser = objvRTConceptRela.viewPointUserId;
    // objvConceptEx.userName = objvRTConceptRela.conceptName;

    objvConceptEx.relaUpdUser = objvRTConceptRela.updUser;
    // objvConceptEx.RelaUserName = objvRTConceptRela.userName
    objvConceptEx.relaUpdDate = objvRTConceptRela.updDate;

    objvConceptEx.memo = objvRTConceptRela.classificationId.toString();
    return objvConceptEx;
  }
}
