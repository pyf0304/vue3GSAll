import { PaperSubViewpoint_EditEx } from './PaperSubViewpoint_EditEx';
import { PaperSubViewpointCRUD } from '@/viewsBase/GradEduPaper/PaperSubViewpointCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObjN,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
import enumResearchTopicTabs from '@/ts/FunClass/enumResearchTopicTabs';
import { ResearchTopicViewpointEx } from '@/views/GradEduTopic/ResearchTopicViewpointEx';
import { ResearchTopicConceptEx } from '@/views/GradEduTopic/ResearchTopicConceptEx';
import { ResearchTopicSysSocialRelaEx } from '@/views/GradEduTopic/ResearchTopicSysSocialRelaEx';
import { ResearchTopicSysskillEx } from '@/views/GradEduTopic/ResearchTopicSysskillEx';
import { ResearchTopicObjectiveEx } from '@/views/GradEduTopic/ResearchTopicObjectiveEx';
import { PaperEduClsRelaEx_BindDdl_PaperIdByIdCurrEduClsInDivCache } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperEduClsRelaExWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubViewpointEN';
//import $ from "jquery";
/** PaperSubViewpointCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class PaperSubViewpointCRUDEx extends PaperSubViewpointCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortvPaperSubViewpointBy = "SubViewpointId";
  /**
   * 每页记录数，在扩展类可以修改
   **/
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
    this.BindGv_vPaperSubViewpointCache(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vPaperSubViewpoint':
        alert('该类没有绑定该函数：[this.BindGv_vPaperSubViewpoint_Cache]！');
        //this.BindGv_vPaperSubViewpointCache();;
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: PaperSubViewpointCRUDEx;
    if (PaperSubViewpointCRUD.objPageCRUD == null) {
      PaperSubViewpointCRUD.objPageCRUD = new PaperSubViewpointCRUDEx(divLayout);
      objPage = <PaperSubViewpointCRUDEx>PaperSubViewpointCRUD.objPageCRUD;
    } else {
      objPage = <PaperSubViewpointCRUDEx>PaperSubViewpointCRUD.objPageCRUD;
    }
    const objPageEdit: PaperSubViewpoint_EditEx = new PaperSubViewpoint_EditEx(
      'PaperSubViewpoint_EditEx',
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
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPageEdit.btnUpdateRecord_Click(Number(strKeyId));
        }
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
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
        objPage.btnDelRecordInTab_Click(Number(strKeyId));
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
        AccessBtnClickDefault(strCommandName, 'PaperSubViewpointCRUDExEx.btn_Click');

        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoadCache.name;

    // 在此处放置用户代码以初始化页面
    try {
      PaperSubViewpointCRUD.IdCurrEduClsCache = clsPubLocalStorage.idCurrEduCls;
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();
      this.SetEventFunc();
      PaperSubViewpointCRUD.sortvPaperSubViewpointBy = `${clsPaperSubViewpointEN.con_UpdDate} Desc`;
      //2、显示无条件的表内容在GridView中
      await this.ShowPaperSubViewpoint(this.gsKnowledgeTypeId);
    } catch (e: any) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public async SetDdl_PaperIdInDiv(IdCurrEduCls: string) {
    const divName = this.divQuery;
    if (divName == null) return;
    await PaperEduClsRelaEx_BindDdl_PaperIdByIdCurrEduClsInDivCache(
      divName,
      'ddlPaperId_q',
      IdCurrEduCls,
    ); //
  }
  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    // const PaperIdStatic = PaperSubViewpointCRUD.PaperIdStatic; //静态变量;//静态变量

    await this.SetDdl_PaperIdInDiv(clsPubLocalStorage.idCurrEduCls);
    // await this.SetDdl_SectionIdInDiv(PaperIdStatic); //查询区域

    await this.SetDdl_SubViewpointTypeIdInDiv(); //查询区域

    await this.SetDdl_ExplainTypeIdInDiv(); //查询区域
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevPaperSubViewpointConditionObj(): Promise<clsvPaperSubViewpointEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvPaperSubViewpointCond = new clsvPaperSubViewpointEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      // if (this.paperRWId_q != '') {
      //   strWhereCond += Format(
      //     " And {0} like '%{1}%'",
      //     clsvPaperSubViewpointEN.con_PaperRWId,
      //     this.paperRWId_q,
      //   );
      //   objvPaperSubViewpointCond.SetCondFldValue(
      //     clsvPaperSubViewpointEN.con_PaperRWId,
      //     this.paperRWId_q,
      //     'like',
      //   );
      // }
      if (this.sectionId_q != '' && this.sectionId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvPaperSubViewpointEN.con_SectionId,
          this.sectionId_q,
        );
        objvPaperSubViewpointCond.SetCondFldValue(
          clsvPaperSubViewpointEN.con_SectionId,
          this.sectionId_q,
          '=',
        );
      }
      if (this.subViewpointTypeId_q != '' && this.subViewpointTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvPaperSubViewpointEN.con_SubViewpointTypeId,
          this.subViewpointTypeId_q,
        );
        objvPaperSubViewpointCond.SetCondFldValue(
          clsvPaperSubViewpointEN.con_SubViewpointTypeId,
          this.subViewpointTypeId_q,
          '=',
        );
      }
      if (this.explainTypeId_q != '' && this.explainTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvPaperSubViewpointEN.con_ExplainTypeId,
          this.explainTypeId_q,
        );
        objvPaperSubViewpointCond.SetCondFldValue(
          clsvPaperSubViewpointEN.con_ExplainTypeId,
          this.explainTypeId_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombinePaperSubViewpointConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvPaperSubViewpointCond.whereCond = strWhereCond;
    return objvPaperSubViewpointCond;
  }

  public async ShowPaperSubViewpoint(strgsKnowledgeTypeId: string): Promise<boolean> {
    // alert(strTabId);
    let strMsg;
    switch (strgsKnowledgeTypeId) {
      case enumgs_KnowledgeType.PersonalOpinion_01:
      case enumResearchTopicTabs.liViewpoint: // 'liAllViewpoint': //, label: '主题各观点' },
        // li();
        liViewpointClick(this.divLayout);
        break;
      case enumgs_KnowledgeType.ExpertOpinion_02:
      case enumResearchTopicTabs.liExpertViewpoint: // 'liAllViewpoint': //, label: '主题各观点' },
        // li();
        liExpertViewpointClick(this.divLayout);
        break;
      case enumgs_KnowledgeType.ObjectiveFact_04:
      case enumResearchTopicTabs.liObjective: // 'liAllViewpoint': //, label: '主题各观点' },
        // li();
        liObjectiveFactClick(this.divLayout);
        break;
      case enumgs_KnowledgeType.ObjectiveData_05:
      case enumResearchTopicTabs.liObjectiveBasis: // 'liAllViewpoint': //, label: '主题各观点' },
        // li();
        liObjectiveBasisClick(this.divLayout);
        break;
      case enumgs_KnowledgeType.SocialRelationships_07:
      case enumResearchTopicTabs.liSysSocialRela: // 'liAllViewpoint': //, label: '主题各观点' },
        // li();
        liSysSocialRelationsClick(this.divLayout);
        break;
      case enumgs_KnowledgeType.Skill_06:
      case enumResearchTopicTabs.liSysskill: // 'liAllViewpoint': //, label: '主题各观点' },
        // li();
        liSysskillClick(this.divLayout);
        break;

      case enumgs_KnowledgeType.Concept_03:
      case enumResearchTopicTabs.liConcept:
        liConceptClick(this.divLayout);
        break;
      default:
        strMsg = `Tab类型:${strgsKnowledgeTypeId}在函数(function ShowPaperSubViewpoint in PaperSubViewpointCRUDEx)中没有被处理！`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
    return true;
  }
  public get gsKnowledgeTypeId() {
    return PaperSubViewpointCRUDEx.GetPropValue('gsKnowledgeTypeId');
  }
}

//个人观点
export async function liViewpointClick(divLayout: HTMLDivElement) {
  const divList = GetDivObjInDivObjN(divLayout, 'divList');

  if (divList == null) {
    setTimeout(() => {
      liViewpointClick(divLayout);
    }, 100);
  } else {
    // ClearClassificationTitle();
    // await liViewsClassificationClick(enumgs_KnowledgeType.PersonalOpinion_01);

    ResearchTopicViewpointEx.GetPropValue = PaperSubViewpointCRUDEx.GetPropValue;
    ResearchTopicViewpointEx.vuebtn_Click = PaperSubViewpointCRUDEx.vuebtn_Click;

    const objPage = new ResearchTopicViewpointEx(divLayout);
    objPage.liViewpointClick(divList);
  }
}
//专家观点
export async function liExpertViewpointClick(divLayout: HTMLDivElement) {
  const divList = GetDivObjInDivObjN(divLayout, 'divList');

  if (divList == null) {
    setTimeout(() => {
      liExpertViewpointClick(divLayout);
    }, 100);
  } else {
    // ClearClassificationTitle();
    // await liViewsClassificationClick(enumgs_KnowledgeType.ExpertOpinion_02);

    ResearchTopicViewpointEx.GetPropValue = PaperSubViewpointCRUDEx.GetPropValue;
    ResearchTopicViewpointEx.vuebtn_Click = PaperSubViewpointCRUDEx.vuebtn_Click;

    const objPage = new ResearchTopicViewpointEx(divLayout);
    objPage.liExpertViewpointClick(divList);
  }
}

//客观事实
export async function liObjectiveFactClick(divLayout: HTMLDivElement) {
  const divList = GetDivObjInDivObjN(divLayout, 'divList');

  if (divList == null) {
    setTimeout(() => {
      liObjectiveFactClick(divLayout);
    }, 100);
  } else {
    // ClearClassificationTitle();
    // await liViewsClassificationClick(enumgs_KnowledgeType.ObjectiveFact_04);

    ResearchTopicObjectiveEx.GetPropValue = PaperSubViewpointCRUDEx.GetPropValue;
    ResearchTopicObjectiveEx.vuebtn_Click = PaperSubViewpointCRUDEx.vuebtn_Click;

    const objPage = new ResearchTopicObjectiveEx(divLayout);
    objPage.liObjectiveFactClick(divList);
  }
}
//客观数据
export async function liObjectiveBasisClick(divLayout: HTMLDivElement) {
  const divList = GetDivObjInDivObjN(divLayout, 'divList');
  if (divList == null) {
    setTimeout(() => {
      liObjectiveBasisClick(divLayout);
    }, 100);
  } else {
    // ClearClassificationTitle();
    // await liViewsClassificationClick(enumgs_KnowledgeType.ObjectiveData_05);

    ResearchTopicObjectiveEx.GetPropValue = PaperSubViewpointCRUDEx.GetPropValue;
    ResearchTopicObjectiveEx.vuebtn_Click = PaperSubViewpointCRUDEx.vuebtn_Click;

    const objPage = new ResearchTopicObjectiveEx(divLayout);
    objPage.liObjectiveBasisClick(divList);
  }
}

//技能
export async function liSysskillClick(divLayout: HTMLDivElement) {
  const divList = GetDivObjInDivObjN(divLayout, 'divList');

  if (divList == null) {
    setTimeout(() => {
      liSysskillClick(divLayout);
    }, 100);
  } else {
    // ClearClassificationTitle();
    // await liViewsClassificationClick(enumgs_KnowledgeType.Skill_06);

    ResearchTopicSysskillEx.GetPropValue = PaperSubViewpointCRUDEx.GetPropValue;
    ResearchTopicSysskillEx.vuebtn_Click = PaperSubViewpointCRUDEx.vuebtn_Click;

    const objPage = new ResearchTopicSysskillEx(divLayout);
    objPage.liSysskillClick(divList);
  }
}

//社会关系
export async function liSysSocialRelationsClick(divLayout: HTMLDivElement) {
  const divList = GetDivObjInDivObjN(divLayout, 'divList');

  if (divList == null) {
    setTimeout(() => {
      liSysSocialRelationsClick(divLayout);
    }, 100);
  } else {
    // ClearClassificationTitle();
    // await liViewsClassificationClick(enumgs_KnowledgeType.SocialRelationships_07);

    ResearchTopicSysSocialRelaEx.GetPropValue = PaperSubViewpointCRUDEx.GetPropValue;
    ResearchTopicSysSocialRelaEx.vuebtn_Click = PaperSubViewpointCRUDEx.vuebtn_Click;

    const objPage = new ResearchTopicSysSocialRelaEx(divLayout);
    objPage.liSysSocialRelationsClick(divList);
  }
}

//相关概念
export async function liConceptClick(divLayout: HTMLDivElement) {
  const divList = GetDivObjInDivObjN(divLayout, 'divList');

  if (divList == null) {
    setTimeout(() => {
      liConceptClick(divLayout);
    }, 100);
  } else {
    // ClearClassificationTitle();
    // await liViewsClassificationClick(enumgs_KnowledgeType.Concept_03);

    ResearchTopicConceptEx.GetPropValue = PaperSubViewpointCRUDEx.GetPropValue;
    ResearchTopicConceptEx.vuebtn_Click = PaperSubViewpointCRUDEx.vuebtn_Click;

    const objPage = new ResearchTopicConceptEx(divLayout);
    objPage.liConceptClick(divList);
  }
}
