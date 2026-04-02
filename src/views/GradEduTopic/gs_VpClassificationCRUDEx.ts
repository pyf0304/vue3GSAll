import $ from 'jquery';
import { message } from '@/utils/myMessage';

import { clsRTConceptRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTConceptRelaEN';
import { clsRTSysSkillRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTSysSkillRelaEN';
import { clsRTSysSocialRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTSysSocialRelaEN';
import { clsRTTopicObjectiveRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTTopicObjectiveRelaEN';
import { clsRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointRelaEN';
import { clsvRTConceptRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTConceptRelaEN';

import { clsvRTSysSocialRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTSysSocialRelaEN';
import { clsvRTTopicObjectiveRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTTopicObjectiveRelaEN';
import { clsvRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointRelaEN';
import {
  gs_VpClassification_DelRecordAsync,
  gs_VpClassification_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationWApi';
import { RTConceptRela_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTConceptRelaWApi';
import { RTSysSkillRela_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTSysSkillRelaWApi';
import { RTSysSocialRela_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTSysSocialRelaWApi';
import { RTTopicObjectiveRela_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTTopicObjectiveRelaWApi';
import { RTViewpointRela_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTViewpointRelaWApi';
import { vRTConceptRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTConceptRelaWApi';

import { vRTSysSocialRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTSysSocialRelaWApi';
import { vRTTopicObjectiveRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTTopicObjectiveRelaWApi';
import { vRTViewpointRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointRelaWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetAObjLstInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { clsvRTSysSkillRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTSysSkillRelaEN';
import { vRTSysSkillRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTSysSkillRelaWApi';
import { clsRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointEN';
import { RTViewpoint_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTViewpointWApi';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import { vRTViewpoint_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointWApi';
import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';
import { userStore } from '@/store/modulesShare/user';
import { gs_VpClassificationCRUD } from '@/viewsBase/GradEduTopic/gs_VpClassificationCRUD';
import { gs_VpClassification_EditEx } from '@/views/GradEduTopic/gs_VpClassification_EditEx';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

// declare function GetAllFunctionMethod(): void;
// declare function HideDialogClassification(): void;

/* gs_VpClassificationCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_VpClassificationCRUDEx extends gs_VpClassificationCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: string) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static gsKnowledgeTypeId = '';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortgs_VpClassificationBy: string = "classificationId";
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
    console.log('InitVarSet in gs_VpClassificationCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in gs_VpClassificationCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);

    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    this.PageLoad0(divName, '');
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'gs_VpClassification':
        alert('该类没有绑定该函数：[this.BindGv_gs_VpClassification_Cache]！');
        //this.BindGv_gs_VpClassificationCache();;
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: gs_VpClassificationCRUDEx = new gs_VpClassificationCRUDEx(divLayout);
    const objPageEdit: gs_VpClassification_EditEx = new gs_VpClassification_EditEx('', objPage);
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
        AccessBtnClickDefault(strCommandName, 'gs_VpClassificationCRUDExEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  public async PageLoad0(objLayOut: HTMLDivElement, strgsKnowledgeTypeId: string) {
    // 在此处放置用户代码以初始化页面
    try {
      this.divLayout = objLayOut;
   
      await this.ClassificationTree(strgsKnowledgeTypeId);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  //论文组

  //分类树
  public async ClassificationTreeBak(strgsKnowledgeTypeId: string) {
    // const divName = this.getDivName(enumDivType.LayOut_01);

    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strWhereCond = ` 1 = 1 and topicId='${strTopicId}' order by updDate Asc`;

    //获取观点分类

    const arrgs_VpClassificationObjLst = await gs_VpClassification_GetObjLstAsync(strWhereCond);

    let arrvRTViewpointRelaObjLst0: Array<clsvRTViewpointRelaEN> = [];
    let arrvRTViewpointRelaObjLst: Array<clsvRTViewpointRelaEN> = [];

    //根据tab页的选择显示的观点也不同
    let strWhereCond1;
    let strWhereCond2;
    let strWhereCond4;
    let strWhereCond5;
    switch (strgsKnowledgeTypeId) {
      case enumgs_KnowledgeType.PersonalOpinion_01:
        strWhereCond1 = ` 1 = 1 and topicId='${strTopicId}' and userTypeId='01'`;
        await vRTViewpointRela_GetObjLstAsync(strWhereCond1).then((jsonData) => {
          arrvRTViewpointRelaObjLst0 = <Array<clsvRTViewpointRelaEN>>jsonData;
        });
        break;
      case enumgs_KnowledgeType.ExpertOpinion_02:
        strWhereCond2 = ` 1 = 1 and topicId='${strTopicId}' and userTypeId='02'`;
        await vRTViewpointRela_GetObjLstAsync(strWhereCond2).then((jsonData) => {
          arrvRTViewpointRelaObjLst0 = <Array<clsvRTViewpointRelaEN>>jsonData;
        });
        break;
      case enumgs_KnowledgeType.Concept_03:
        await vRTConceptRela_GetObjLstAsync(strWhereCond).then((jsonData) => {
          const arrvRTConceptRelaObjLst: Array<clsvRTConceptRelaEN> = <Array<clsvRTConceptRelaEN>>(
            jsonData
          );
          arrvRTViewpointRelaObjLst0 = arrvRTConceptRelaObjLst.map(this.GetRTVByConcep);
        });

        break;
      case enumgs_KnowledgeType.ObjectiveFact_04:
        strWhereCond4 = ` 1 = 1 and topicId='${strTopicId}' and objectiveType='01'`;
        await vRTTopicObjectiveRela_GetObjLstAsync(strWhereCond4).then((jsonData) => {
          const arrvRTTopicObjectiveRelaObjLst: Array<clsvRTTopicObjectiveRelaEN> = <
            Array<clsvRTTopicObjectiveRelaEN>
          >jsonData;
          arrvRTViewpointRelaObjLst0 = arrvRTTopicObjectiveRelaObjLst.map(
            this.GetRTVByTopicObjective,
          );
        });
        break;
      case enumgs_KnowledgeType.ObjectiveData_05:
        strWhereCond5 = ` 1 = 1 and topicId='${strTopicId}' and objectiveType='02'`;
        await vRTTopicObjectiveRela_GetObjLstAsync(strWhereCond5).then((jsonData) => {
          const arrvRTTopicObjectiveRelaObjLst: Array<clsvRTTopicObjectiveRelaEN> = <
            Array<clsvRTTopicObjectiveRelaEN>
          >jsonData;
          arrvRTViewpointRelaObjLst0 = arrvRTTopicObjectiveRelaObjLst.map(
            this.GetRTVByTopicObjective,
          );
        });
        break;
      case enumgs_KnowledgeType.Skill_06:
        const arrvRTSysSkillObjLst: Array<clsvRTSysSkillRelaEN> =
          await vRTSysSkillRela_GetObjLstAsync(strWhereCond);
        break;
      case enumgs_KnowledgeType.SocialRelationships_07:
        await vRTSysSocialRela_GetObjLstAsync(strWhereCond).then((jsonData) => {
          const arrvRTSysSocialRelaObjLst: Array<clsvRTSysSocialRelaEN> = <
            Array<clsvRTSysSocialRelaEN>
          >jsonData;
          arrvRTViewpointRelaObjLst0 = arrvRTSysSocialRelaObjLst.map(this.GetRTVBySysSocial);
        });
        break;
    }

    let strhtml = '';
    strhtml += '<li class="li">';
    strhtml += `<a href="javascript:void(0)" id="1000000000" class="main" onclick=btnClearClassification_Click("1000000000")>全部分类<span class="badge badge-success" title="观点数${arrvRTViewpointRelaObjLst0.length}条" >${arrvRTViewpointRelaObjLst0.length}</span></a>`;
    strhtml += '</li>';
    for (let i = 0; i < arrgs_VpClassificationObjLst.length; i++) {
      const strClassificationId = arrgs_VpClassificationObjLst[i].classificationId;
      const strClassificationName = arrgs_VpClassificationObjLst[i].classificationName;

      arrvRTViewpointRelaObjLst = arrvRTViewpointRelaObjLst0.filter(
        (x) => x.classificationId == strClassificationId,
      );
      strhtml += '<li class="li" style="margin-left:15px;">';

      strhtml += `<a style="float:left;" href="javascript:void(0)" id="${strClassificationId}" class="main" onclick=btnClassification_Click("${strClassificationId}","${strClassificationName}")>${strClassificationName}<span class="badge badge-success" title="观点数${arrvRTViewpointRelaObjLst.length}条" >${arrvRTViewpointRelaObjLst.length}</span></a>`;
      strhtml += '<div style="height:22px;">';
      // onclick=btnUpdategs_VpClassification_Click("${strClassificationId}")
      strhtml += `<a id="btnUpdategs_VpClassification" keyId="${strClassificationId}" style="float:left;margin-top:4px;" href="javascript:void(0)" >${clsIcon.faPenToSquare}</a>`;
      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        // onclick=btnDelgs_VpClassification_Click("${strClassificationId}")
        strhtml += `<a id="btnDelgs_VpClassification" keyId="${strClassificationId}" style="margin-top:4px;" href="javascript:void(0)" >${clsIcon.faTrash}</a>`;
      }

      strhtml += '</div>';

      strhtml += '<div>';
      strhtml += `<ul class="submenu" id="ul${strClassificationId}">`;

      //循环数据
      for (let j = 0; j < arrvRTViewpointRelaObjLst.length; j++) {
        const strKeyId = arrvRTViewpointRelaObjLst[j].mId;

        let strTitle = arrvRTViewpointRelaObjLst[j].viewpointName;
        if (strTitle.length > 10) {
          strTitle = `${strTitle.substring(0, 10)}...`;
        }

        strhtml += `<li id="li${strKeyId}" onclick=btnSelectViews("${strKeyId}","${strClassificationId}")>`;

        strhtml += `<a href="javascript:void(0)" title="${arrvRTViewpointRelaObjLst[j].viewpointName}">${strTitle}</a>`;

        strhtml += '</li>';
      }
      strhtml += '</ul>';
      strhtml += '</div>';
      strhtml += '</li>';
    }

    arrvRTViewpointRelaObjLst = arrvRTViewpointRelaObjLst0.filter((x) => x.classificationId == 0);
    strhtml += '<li class="li" style="margin-left:15px;">';
    strhtml += `<a href="javascript:void(0)" id="0000000000" class="main" onclick=btnClearClassification_Click("0000000000")>未分类<span class="badge badge-success" title="观点数${arrvRTViewpointRelaObjLst.length}条" >${arrvRTViewpointRelaObjLst.length}</span></a>`;
    strhtml += '</li>';
    switch (strgsKnowledgeTypeId) {
      case enumgs_KnowledgeType.PersonalOpinion_01:
        $('#Classification_TreeBind1').html(strhtml);
        break;
      case enumgs_KnowledgeType.ExpertOpinion_02:
        $('#Classification_TreeBind2').html(strhtml);
        break;
      case enumgs_KnowledgeType.Concept_03:
        $('#Classification_TreeBind3').html(strhtml);
        break;
      case enumgs_KnowledgeType.ObjectiveFact_04:
        $('#Classification_TreeBind4').html(strhtml);
        break;
      case enumgs_KnowledgeType.ObjectiveData_05:
        $('#Classification_TreeBind5').html(strhtml);
        break;
      case enumgs_KnowledgeType.Skill_06:
        $('#Classification_TreeBind6').html(strhtml);
        break;
      case enumgs_KnowledgeType.SocialRelationships_07:
        $('#Classification_TreeBind7').html(strhtml);
        break;
      default:
        $('#Classification_TreeBind1').html(strhtml);
    }

    //绑定下下拉框
    // await this.BindDdl_ClassificationId('ddlClassificationId');
  }
  public async ClassificationTree(strgsKnowledgeTypeId: string) {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    if (IsNullOrEmpty(strgsKnowledgeTypeId) == true) {
      const strMsg = `当前知识类型Id为空，请检查！`;
      console.error(strMsg);
      throw strMsg;
    }
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strWhereCond = ` 1 = 1 and topicId='${strTopicId}' order by ${clsgs_VpClassificationEN.con_OrderNum} Asc`;

    //获取观点分类

    const arrgs_VpClassificationObjLst = await gs_VpClassification_GetObjLstAsync(strWhereCond);

    let arrvRTViewpointLst0: Array<clsvRTViewpointEN> = [];
    let arrvRTViewpointLst: Array<clsvRTViewpointEN> = [];
    // let arrvRTViewpointRelaObjLst0: Array<clsvRTViewpointRelaEN> = [];
    // let arrvRTViewpointRelaObjLst: Array<clsvRTViewpointRelaEN> = [];

    //根据tab页的选择显示的观点也不同

    const strWhereCond_Topic_Knowledge = ` 1 = 1 and topicId='${strTopicId}' and ${clsvRTViewpointEN.con_gsKnowledgeTypeId}='${strgsKnowledgeTypeId}'`;
    arrvRTViewpointLst0 = await vRTViewpoint_GetObjLstAsync(strWhereCond_Topic_Knowledge);

    let strhtml = '';
    strhtml += '<li class="li">';
    // onclick=btnClearClassification_Click("1000000000")
    strhtml += `<a href="javascript:void(0)" id="btnClearClassification" keyId="1000000000" class="main" >全部分类<span class="badge badge-success" title="观点数${arrvRTViewpointLst0.length}条" >${arrvRTViewpointLst0.length}</span></a>`;
    strhtml += '</li>';
    for (let i = 0; i < arrgs_VpClassificationObjLst.length; i++) {
      const strClassificationId = arrgs_VpClassificationObjLst[i].classificationId;
      const strClassificationName = arrgs_VpClassificationObjLst[i].classificationName;

      arrvRTViewpointLst = arrvRTViewpointLst0.filter(
        (x) => x.classificationId == strClassificationId,
      );
      strhtml += '<li class="li" style="margin-left:15px;">';
      // onclick=btnClassification_Click("${strClassificationId}","${strClassificationName}")
      const strKeyId = `${strClassificationId}|${strClassificationName}`;
      strhtml += `<a id="btnClassification" keyId="${strKeyId}" style="float:left;" href="javascript:void(0)" id="${strClassificationId}" class="main" >${strClassificationName}<span class="badge badge-success" title="观点数${arrvRTViewpointLst.length}条" >${arrvRTViewpointLst.length}</span></a>`;
      strhtml += '<div style="height:22px;">';
      // onclick=btnUpdategs_VpClassification_Click("${strClassificationId}")
      strhtml += `<a id="btnUpdategs_VpClassification" keyId="${strClassificationId}" title="编辑分类名" style="float:left;margin-top:1px;" href="javascript:void(0)" >${clsIcon.faPenToSquare}</a>`;
      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        // onclick=btnDelgs_VpClassification_Click("${strClassificationId}")
        strhtml += `<a id="btnDelgs_VpClassification" keyId="${strClassificationId}" title="删除分类名" style="margin-top:4px;" href="javascript:void(0)" >${clsIcon.faTrash}</a>`;
      }
      strhtml += '</div>';
      strhtml += '<div>';
      strhtml += `<ul class="submenu" id="ul${strClassificationId}">`;

      //循环数据
      for (let j = 0; j < arrvRTViewpointLst.length; j++) {
        const strTopicId = arrvRTViewpointLst[j].topicId;
        const strSubViewpointId = arrvRTViewpointLst[j].subViewpointId;

        let strTitle = arrvRTViewpointLst[j].subViewpointContent;
        if (strTitle.length > 10) {
          strTitle = `${strTitle.substring(0, 10)}...`;
        }
        // onclick=btnSelectViews("${strKeyId1}","${strClassificationId}")
        const strKeyId = `${strTopicId}|${strSubViewpointId}${strClassificationId}`;
        strhtml += `<li id="li${strTopicId}_${strSubViewpointId}" name="btnSelectViews" keyId="${strKeyId}" >`;
        //默认存放第一条数据显示；
        //判断存放的id控件是否为空；

        //if ($("#hidViewsId").val() == "") {
        //    //存放Id
        //    $("#hidViewsId").val(strKeyId);
        //    $("#hidClassificationId").val(strClassificationId);

        //    strhtml += '<a href="javascript:void(0)" title="' + arrvRTViewpointRelaObjLst[j].viewpointName + '" class="selected">' + strTitle + '</a>';

        //}
        //else {

        //}
        strhtml += `<a href="javascript:void(0)" title="${arrvRTViewpointLst[j].subViewpointContent}">${strTitle}</a>`;
        strhtml += '</li>';
      }
      strhtml += '</ul>';
      strhtml += '</div>';
      strhtml += '</li>';
    }

    arrvRTViewpointLst = arrvRTViewpointLst0.filter((x) => x.classificationId == 0);
    strhtml += '<li class="li" style="margin-left:15px;">';
    // onclick=btnClearClassification_Click("0000000000")>
    strhtml += `<a href="javascript:void(0)" id="btnClearClassification" keyId="0000000000" class="main" 未分类<span class="badge badge-success" title="观点数${arrvRTViewpointLst.length}条" >未分类:${arrvRTViewpointLst.length}</span></a>`;
    strhtml += '</li>';
    switch (strgsKnowledgeTypeId) {
      case enumgs_KnowledgeType.PersonalOpinion_01:
        $('#Classification_TreeBind1').html(strhtml);
        break;
      case enumgs_KnowledgeType.ExpertOpinion_02:
        $('#Classification_TreeBind2').html(strhtml);
        break;
      case enumgs_KnowledgeType.Concept_03:
        $('#Classification_TreeBind3').html(strhtml);
        break;
      case enumgs_KnowledgeType.ObjectiveFact_04:
        $('#Classification_TreeBind4').html(strhtml);
        break;
      case enumgs_KnowledgeType.ObjectiveData_05:
        $('#Classification_TreeBind5').html(strhtml);
        break;
      case enumgs_KnowledgeType.Skill_06:
        $('#Classification_TreeBind6').html(strhtml);
        break;
      case enumgs_KnowledgeType.SocialRelationships_07:
        $('#Classification_TreeBind7').html(strhtml);
        break;
      default:
        $('#Classification_TreeBind1').html(strhtml);
    }
    this.SetEventForClassification(strgsKnowledgeTypeId);
    //绑定下下拉框
    // await this.BindDdl_ClassificationId('ddlClassificationId');
  }
  public SetEventForClassification(strgsKnowledgeTypeId: string) {
    {
      const arrAUpdatePaperSubView = GetAObjLstInDivObj(
        this.divLayout,
        'btnClearClassification',
      );
      for (const btnClearClassification of arrAUpdatePaperSubView) {
        if (btnClearClassification != null) {
          const strKeyId = btnClearClassification.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strClassificationId}|${strClassificationName}`;
          // const arr = strKeyId.split('|');
          // if (arr.length != 2) continue;
          const objData = {
            classificationId: strKeyId,
            gsKnowledgeTypeId: strgsKnowledgeTypeId,
          };

          (function (objData: any) {
            btnClearClassification.onclick = function () {
              gs_VpClassificationCRUDEx.vuebtn_Click('ClearClassification', objData);
            };
          })(objData);
        }
      }
    }
    {
      const arrAUpdatePaperSubView = GetAObjLstInDivObj(
        this.divLayout,
        'btnClassification',
      );
      for (const btnClassification of arrAUpdatePaperSubView) {
        if (btnClassification != null) {
          const strKeyId = btnClassification.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strClassificationId}|${strClassificationName}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = {
            classificationId: arr[0],
            gsKnowledgeTypeId: strgsKnowledgeTypeId,
            classificationName: arr[1],
          };

          (function (objData: any) {
            btnClassification.onclick = function () {
              gs_VpClassificationCRUDEx.vuebtn_Click('Classification', objData);
            };
          })(objData);
        }
      }
    }

    {
      const arrAUpdatePaperSubView = GetAObjLstInDivObj(
        this.divLayout,
        'btnDelgs_VpClassification',
      );
      for (const btnDelgs_VpClassification of arrAUpdatePaperSubView) {
        if (btnDelgs_VpClassification != null) {
          const strKeyId = btnDelgs_VpClassification.getAttribute('keyid');
          if (strKeyId == null) continue;
          const objData = { keyId: strKeyId, gsKnowledgeTypeId: strgsKnowledgeTypeId };

          (function (objData: any) {
            btnDelgs_VpClassification.onclick = function () {
              gs_VpClassificationCRUDEx.vuebtn_Click('Delgs_VpClassification', objData);
            };
          })(objData);
        }
      }
    }

    {
      const arrAUpdatePaperSubView = GetAObjLstInDivObj(
        this.divLayout,
        'btnUpdategs_VpClassification',
      );
      for (const btnUpdategs_VpClassification of arrAUpdatePaperSubView) {
        if (btnUpdategs_VpClassification != null) {
          const strKeyId = btnUpdategs_VpClassification.getAttribute('keyid');
          if (strKeyId == null) continue;

          (function (strKeyId: any) {
            btnUpdategs_VpClassification.onclick = function () {
              gs_VpClassificationCRUDEx.vuebtn_Click('Updategs_VpClassification', strKeyId);
            };
          })(strKeyId);
        }
      }
    }
  }
  //转换概念数据到扩展观点实体
  private GetRTVByConcep(objvRTConceptRela: clsvRTConceptRelaEN): clsvRTViewpointRelaEN {
    const objvRTViewpointRela: clsvRTViewpointRelaEN = new clsvRTViewpointRelaEN();
    objvRTViewpointRela.viewpointId = objvRTConceptRela.conceptId;
    objvRTViewpointRela.viewpointName = objvRTConceptRela.conceptName;
    objvRTViewpointRela.mId = objvRTConceptRela.mId;
    return objvRTViewpointRela;
  }

  //转换客观数据到扩展观点实体
  private GetRTVByTopicObjective(
    objvRTTopicObjectiveRela: clsvRTTopicObjectiveRelaEN,
  ): clsvRTViewpointRelaEN {
    const objvRTViewpointRela: clsvRTViewpointRelaEN = new clsvRTViewpointRelaEN();
    objvRTViewpointRela.viewpointId = objvRTTopicObjectiveRela.topicObjectiveId;
    objvRTViewpointRela.viewpointName = objvRTTopicObjectiveRela.objectiveName;
    objvRTViewpointRela.mId = objvRTTopicObjectiveRela.mId;
    return objvRTViewpointRela;
  }

  //转换技能数据到扩展观点实体
  private GetRTVBySysSkill(objvRTSysSkill: clsvRTSysSkillRelaEN): clsvRTViewpointRelaEN {
    const objvRTViewpointRela: clsvRTViewpointRelaEN = new clsvRTViewpointRelaEN();
    objvRTViewpointRela.viewpointId = objvRTSysSkill.skillId;
    objvRTViewpointRela.viewpointName = objvRTSysSkill.skillName;
    objvRTViewpointRela.mId = objvRTSysSkill.mId;
    return objvRTViewpointRela;
  }

  //转换社会关系数据到扩展观点实体
  private GetRTVBySysSocial(objvRTSysSocialRela: clsvRTSysSocialRelaEN): clsvRTViewpointRelaEN {
    const objvRTViewpointRela: clsvRTViewpointRelaEN = new clsvRTViewpointRelaEN();
    objvRTViewpointRela.viewpointId = objvRTSysSocialRela.subViewpointId.toString();
    objvRTViewpointRela.viewpointName = objvRTSysSocialRela.fullName;
    // objvRTViewpointRela.mId = objvRTSysSocialRela.mId;
    return objvRTViewpointRela;
  }

  /* 
   在数据表里删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
  */
  public async btnDelRecordInTab_Click(strKeyId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      await this.DelRecord(lngKeyId);

      await this.ClassificationTree(gs_VpClassificationCRUDEx.gsKnowledgeTypeId);
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
  public async DelRecord(strClassificationId: number) {
    try {
      const responseText = await gs_VpClassification_DelRecordAsync(strClassificationId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //gs_VpClassification_ReFreshCache();
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

  //public async btnAddClassificationRecordInTab_Click(strKey: number) {
  public async SubmiClassification_Click(
    strSubViewpointId: number,
    strClassificationId: number,
  ): Promise<boolean> {
    //$("#hidViewsMId").val(strKey);
    //if ($("#ddlClassificationId").val() == 0) {
    //    message.warning("请选择需要调整的分类！");
    //} else {
    let returnBool = true;
    returnBool = await this.Update_RTViewpoint(strSubViewpointId, strClassificationId);
    if (returnBool == true) {
      message.success('已加入该分类！');
      // GetAllFunctionMethod();
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      gs_VpClassificationCRUDEx.vuebtn_Click('GetAllFunctionMethod', strTopicId);
      return returnBool;
    } else {
      message.warning('加入失败！');
      return returnBool;
    }
    // switch (strViewsTabNum) {
    //   case '1':
    //     returnBool = await this.Update_RTViewpointRela();
    //     if (returnBool == true) {
    //       message.success('已加入该分类！');
    //       GetAllFunctionMethod();
    //     } else {
    //       message.warning('加入失败！');
    //     }
    //     break;
    //   case '2':
    //     returnBool = await this.Update_RTViewpointRela();
    //     if (returnBool == true) {
    //       message.success('已加入该分类！');
    //       GetAllFunctionMethod();
    //     } else {
    //       message.warning('加入失败！');
    //     }

    //     break;
    //   case '3':
    //     returnBool = await this.Update_RTConceptRela();
    //     if (returnBool == true) {
    //       message.success('已加入该分类！');
    //       GetAllFunctionMethod();
    //     } else {
    //       message.warning('加入失败！');
    //     }

    //     break;
    //   case '4':
    //     returnBool = await this.Update_RTTopicObjectiveRela();
    //     if (returnBool == true) {
    //       GetAllFunctionMethod();
    //       message.success('已加入该分类！');
    //     } else {
    //       message.warning('加入失败！');
    //     }

    //     break;
    //   case '5':
    //     returnBool = await this.Update_RTTopicObjectiveRela();
    //     if (returnBool == true) {
    //       message.success('已加入该分类！');
    //       GetAllFunctionMethod();
    //     } else {
    //       message.warning('加入失败！');
    //     }

    //     break;
    //   case '6':
    //     returnBool = await this.Update_RTSysSkillRela();
    //     if (returnBool == true) {
    //       message.success('已加入该分类！');
    //       GetAllFunctionMethod();
    //     } else {
    //       message.warning('加入失败！');
    //     }

    //     break;
    //   case '7':
    //     returnBool = await this.Update_RTSysSocialRela();
    //     if (returnBool == true) {
    //       message.success('已加入该分类！');
    //       GetAllFunctionMethod();
    //     } else {
    //       message.warning('加入失败！');
    //     }
    //     break;
    //   default:
    //     message.warning('请选择左边的分类菜单，不然无法添加到分类中去！');
    //     break;
    // }
    //}
    // HideDialogClassification();
  }

  /* 修改各观点记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async Update_RTViewpointRela(): Promise<boolean> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.Update_RTViewpointRela.name;

    const objRTViewpointRelaEN: clsRTViewpointRelaEN = new clsRTViewpointRelaEN();
    objRTViewpointRelaEN.SetmId(GetInputValueInDivObjN(divName, 'hidViewsMId'));
    objRTViewpointRelaEN.SetClassificationId(
      GetSelectValueInDivObj(divName, 'ddlClassificationId'),
    );

    objRTViewpointRelaEN.sfUpdFldSetStr = objRTViewpointRelaEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objRTViewpointRelaEN.mId == 0 || objRTViewpointRelaEN.mId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await RTViewpointRela_UpdateRecordAsync(objRTViewpointRelaEN);
      if (returnBool == false) {
        const strInfo = `修改记录不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('完成UpdateRecordSave');
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  public async Update_RTViewpoint(
    strSubViewpointId: number,
    strClassificationId: number,
  ): Promise<boolean> {
    const strThisFuncName = this.Update_RTViewpoint.name;

    const objRTViewpointRelaEN: clsRTViewpointEN = new clsRTViewpointEN();
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    objRTViewpointRelaEN.SetTopicId(strTopicId);
    objRTViewpointRelaEN.SetSubViewpointId(strSubViewpointId);

    objRTViewpointRelaEN.SetClassificationId(strClassificationId);

    objRTViewpointRelaEN.sfUpdFldSetStr = objRTViewpointRelaEN.updFldString; //设置哪些字段被修改(脏字段)
    if (IsNullOrEmpty(strTopicId) == true || strSubViewpointId == 0) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    if (strClassificationId == 0) {
      throw Format(
        'strClassificationId不能为空!(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
    }

    try {
      const returnBool: boolean = await RTViewpoint_UpdateRecordAsync(objRTViewpointRelaEN);
      if (returnBool == false) {
        const strInfo = `修改记录不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('完成UpdateRecordSave');
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 修改概念记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async Update_RTConceptRela(): Promise<boolean> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.Update_RTConceptRela.name;
    const objRTConceptRelaEN: clsRTConceptRelaEN = new clsRTConceptRelaEN();
    objRTConceptRelaEN.SetmId(Number(GetInputValueInDivObj(divName, 'hidViewsMId')));
    objRTConceptRelaEN.SetClassificationId(GetSelectValueInDivObj(divName, 'ddlClassificationId'));

    objRTConceptRelaEN.sfUpdFldSetStr = objRTConceptRelaEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objRTConceptRelaEN.mId == 0 || objRTConceptRelaEN.mId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await RTConceptRela_UpdateRecordAsync(objRTConceptRelaEN);
      if (returnBool == false) {
        const strInfo = `修改记录不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('完成UpdateRecordSave');
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 修改客观记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async Update_RTTopicObjectiveRela(): Promise<boolean> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.Update_RTTopicObjectiveRela.name;
    const objRTTopicObjectiveRelaEN: clsRTTopicObjectiveRelaEN = new clsRTTopicObjectiveRelaEN();
    objRTTopicObjectiveRelaEN.SetmId(Number(GetInputValueInDivObj(divName, 'hidViewsMId')));
    objRTTopicObjectiveRelaEN.SetClassificationId(
      GetSelectValueInDivObj(divName, 'ddlClassificationId'),
    );

    objRTTopicObjectiveRelaEN.sfUpdFldSetStr = objRTTopicObjectiveRelaEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objRTTopicObjectiveRelaEN.mId == 0 || objRTTopicObjectiveRelaEN.mId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await RTTopicObjectiveRela_UpdateRecordAsync(
        objRTTopicObjectiveRelaEN,
      );
      if (returnBool == false) {
        const strInfo = `修改记录不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('完成UpdateRecordSave');
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 修改技能记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async Update_RTSysSkillRela(): Promise<boolean> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.Update_RTSysSkillRela.name;
    const objRTSysSkillRelaEN: clsRTSysSkillRelaEN = new clsRTSysSkillRelaEN();
    objRTSysSkillRelaEN.SetmId(Number(GetInputValueInDivObj(divName, 'hidViewsMId')));
    objRTSysSkillRelaEN.SetClassificationId(GetSelectValueInDivObj(divName, 'ddlClassificationId'));

    objRTSysSkillRelaEN.sfUpdFldSetStr = objRTSysSkillRelaEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objRTSysSkillRelaEN.mId == 0 || objRTSysSkillRelaEN.mId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await RTSysSkillRela_UpdateRecordAsync(objRTSysSkillRelaEN);
      if (returnBool == false) {
        const strInfo = `修改记录不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('完成UpdateRecordSave');
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 修改社会关系记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async Update_RTSysSocialRela(): Promise<boolean> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.Update_RTSysSocialRela.name;
    const objRTSysSocialRelaEN: clsRTSysSocialRelaEN = new clsRTSysSocialRelaEN();
    objRTSysSocialRelaEN.SetmId(Number(GetInputValueInDivObj(divName, 'hidViewsMId')));
    objRTSysSocialRelaEN.SetClassificationId(
      GetSelectValueInDivObj(divName, 'ddlClassificationId'),
    );

    objRTSysSocialRelaEN.sfUpdFldSetStr = objRTSysSocialRelaEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objRTSysSocialRelaEN.mId == 0 || objRTSysSocialRelaEN.mId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await RTSysSocialRela_UpdateRecordAsync(objRTSysSocialRelaEN);
      if (returnBool == false) {
        const strInfo = `修改记录不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('完成UpdateRecordSave');
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
}
