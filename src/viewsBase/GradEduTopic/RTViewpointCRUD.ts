/**
 * 类名:RTViewpointCRUD(界面:RTViewpointCRUD)
 * 表名:RTViewpoint(01120955)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 11:34:08
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import {
  vRTViewpoint_GetRecCountByCondAsync,
  vRTViewpoint_GetObjLstAsync,
  vRTViewpoint_GetObjByKeyLstAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { ResearchTopic_BindDdl_TopicIdInDivCache } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { gs_KnowledgeType_BindDdl_gsKnowledgeTypeIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_KnowledgeTypeWApi';
import { gs_VpClassificationRelaEx_BindDdl_ClassificationIdByTopicIdInDivCache } from '@/ts/L3ForWApiEx/GradEduTopic/clsgs_VpClassificationRelaExWApi';
import {
  RTViewpoint_DelRecKeyLstAsync,
  RTViewpoint_DelRecKeyLstsAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTViewpointWApi';
import {
  GetCheckedKeyLstsInDivObj,
  GetDivObjInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import { clsvRTViewpointENEx } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointENEx';
import {
  BindTab_KeyLst_V,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  vRTViewpointEx_FuncMapByFldName,
  vRTViewpointEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsvRTViewpointExWApi';
import { clsRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointEN';
import { clsPager } from '@/ts/PubFun/clsPager';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import {
  clsOperateList,
  ShowEmptyRecNumInfoByDiv,
  GetCurrPageIndex,
  GetSortBy,
} from '@/ts/PubFun/clsOperateList';
/**
 * 宣布一个用于导出Excel的函数,用于调用js端的导出Excel。
 **/
declare function exportSpecialExcel_pyf(arrData: any, strFileName: string): void;
/** RTViewpointCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class RTViewpointCRUD implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static EditObj: any;
  public static DetailObj: any;
  public divQuery: HTMLDivElement; //查询区的层对象
  public divFunction: HTMLDivElement; //功能区的层对象
  public divLayout: HTMLDivElement; //界面布局的层对象

  //专门用于数据列表的界面变量,用于分页功能等
  public currPageIndex = 0;
  public divList: HTMLDivElement; //列表区的层对象
  public divName4DataList = 'divDataLst'; //列表中数据区的层Id
  public divName4Pager = 'divPager'; //列表中的分页区的层Id
  public bolIsInitShow = false; //记录是否导入分页区的变量
  public bolIsTableSm = true; //是否窄行的小表,即表中加样式： table-sm
  //public mstrListDiv = "divDataLst";//列表区数据列表层id
  public objPager: clsPager;

  public static IdCurrEduClsCache = ''; //7、在查询区定义下拉框条件变量1
  public static TopicIdCache = ''; //2、界面主表的缓存分类字段变量1
  public static TopicIdStatic = ''; //7、在查询区定义下拉框条件变量1
  public static CourseIdStatic = ''; //6、定义下拉框条件变量1
  public static objPageCRUD: RTViewpointCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public static ascOrDesc4SortFun = 'Asc';
  public static sortvRTViewpointBy = '';
  constructor(divLayout: HTMLDivElement) {
    RTViewpointCRUD.objPageCRUD = this;
    this.divLayout = divLayout;
    this.divList = GetDivObjInDivObjN(this.divLayout, 'divList');
    this.divQuery = GetDivObjInDivObjN(this.divLayout, 'divQuery');
    this.divFunction = GetDivObjInDivObjN(this.divLayout, 'divFunction');
    this.objPager = new clsPager(this);
  }
  /**
   * 获取当前组件的divList的层对象
   **/
  public get thisDivList(): HTMLDivElement {
    return this.divList;
  }
  /**
   * 获取当前组件的divLayout的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return this.divLayout;
  }
  /**
   * 获取当前界面的主表名
   **/
  public get thisTabName(): string {
    return clsRTViewpointEN._CurrTabName;
  }
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public abstract InitVarSet(): void;
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public abstract InitCtlVar(): void;

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      //初始设置，用来初始化一些变量值
      await this.InitVarSet();
      this.SetEventFunc();
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();
      //初始化界面控件值，放在绑定下拉框之后
      await this.InitCtlVar();
      if (RTViewpointCRUD.sortvRTViewpointBy == '')
        RTViewpointCRUD.sortvRTViewpointBy = 'topicId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vRTViewpoint(this.divList);
    } catch (e) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 函数功能:设置事件函数
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetEventFunc)
   **/
  public async SetEventFunc() {
    const strThisFuncName = this.SetEventFunc.name;
    // 在此处放置用户代码以初始化页面
    try {
      //没有定义相关事件
    } catch (e) {
      const strMsg = `设置事件函数不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      //初始设置，用来初始化一些变量值
      await this.InitVarSet();
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();
      //初始化界面控件值，放在绑定下拉框之后
      await this.InitCtlVar();
      this.SetEventFunc();
      if (RTViewpointCRUD.sortvRTViewpointBy == '')
        RTViewpointCRUD.sortvRTViewpointBy = 'topicId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vRTViewpoint(this.divList);
    } catch (e) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    this.SetCurrPageIndex(1);
    await this.BindGv_vRTViewpoint(this.divList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrvRTViewpointObjLst: Array<clsvRTViewpointEN>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrvRTViewpointObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsvRTViewpointEN = arrvRTViewpointObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('主题观点关系({0})导出.xlsx', clsvRTViewpointEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcel)
   **/
  public async ExportExcel_vRTViewpoint() {
    const strThisFuncName = this.ExportExcel_vRTViewpoint.name;
    if (RTViewpointCRUD.sortvRTViewpointBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvRTViewpointBy)为空,请检查!(In BindGv_vRTViewpointCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await this.CombinevRTViewpointCondition();
    let arrvRTViewpointObjLst: Array<clsvRTViewpointEN> = [];
    try {
      this.recCount = await vRTViewpoint_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrvRTViewpointObjLst = await vRTViewpoint_GetObjLstAsync(strWhereCond);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrvRTViewpointObjLst.length == 0) {
      const strMsg = `在ExportExcel过程中,根据条件获取的${this.thisTabName}记录数为0!`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'topicId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '主题Id',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 2,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'subViewpointId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '子观点Id',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 3,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'topicName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '栏目主题',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 4,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'versionCount',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '版本统计',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 5,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'citationCount',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '引用统计',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 6,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'topicContent',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '主题内容',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 7,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'topicProposePeople',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '主题提出人',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 8,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'gsKnowledgeTypeName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '知识类型名',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 9,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'levelName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '级别名称',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 10,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'operationTypeName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '操作类型名',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 11,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'subViewpointContent',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '详情内容',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 12,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'paperTitle',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '论文标题',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 14,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'isSubmit',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否提交',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 15,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'sectionName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '节名',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 17,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'subViewpointTypeName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '类型名称',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 19,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'explainTypeName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '说明类型名',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 21,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'explainContent',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '说明内容',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 22,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'isPublic',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否公开',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 23,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'conclusion',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '结论',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 27,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'nationality',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '国籍',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 28,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'achievement',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '成就',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 29,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'major',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '专业',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 30,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'workUnit',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '工作单位',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 31,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'pageNumber',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '页码',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 32,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'pdfContent',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'Pdf内容',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 33,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'appraiseCount',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '评论数',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 34,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'okCount',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '点赞统计',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 35,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'score',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '评分',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 36,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'stuScore',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学生平均分',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 37,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'teaScore',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '教师评分',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 38,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'createDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '建立日期',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 39,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'subViewpointTypeOrderNum',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '子观点类型序号',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 41,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'proposePeople',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '提出人',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 42,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'idCurrEduCls',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '教学班流水号',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 45,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'updDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 46,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'updUser',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改人',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 47,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'memo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '备注',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 48,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'viewPointDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '观点日期',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 50,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'isRecommend',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否推荐',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 51,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      arrvRTViewpointObjLst = arrvRTViewpointObjLst.sort(this.SortFunExportExcel);
      this.CombineData(arrvRTViewpointObjLst, arrDataColumn);
      //console.log("完成BindGv_vRTViewpoint!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 设置绑定下拉框，针对字段:[TopicId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_TopicIdInDiv(strIdCurrEduCls: string) {
    if (IsNullOrEmpty(strIdCurrEduCls) == true) {
      const strMsg = Format('参数:[strIdCurrEduCls]不能为空!(In .SetDdl_TopicIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strIdCurrEduCls.length != 8) {
      const strMsg = Format(
        '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(.SetDdl_TopicIdInDiv)',
        strIdCurrEduCls.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    if (IsNullOrEmpty(strIdCurrEduCls) == true) {
      const strMsg = Format('参数:[strIdCurrEduCls]不能为空!(In .SetDdl_TopicIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strIdCurrEduCls.length != 8) {
      const strMsg = Format(
        '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(.SetDdl_TopicIdInDiv)',
        strIdCurrEduCls.length,
      );
      console.error(strMsg);
      throw strMsg;
    }
    await ResearchTopic_BindDdl_TopicIdInDivCache(this.divQuery, 'ddlTopicId_q', strIdCurrEduCls); //
  }

  /**
   * 设置绑定下拉框，针对字段:[gsKnowledgeTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_gsKnowledgeTypeIdInDiv() {
    await gs_KnowledgeType_BindDdl_gsKnowledgeTypeIdInDivCache(
      this.divQuery,
      'ddlgsKnowledgeTypeId_q',
    ); //
  }

  /**
   * 设置绑定下拉框，针对字段:[ClassificationId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_ClassificationIdInDiv(strTopicId: string) {
    if (IsNullOrEmpty(strTopicId) == true) {
      const strMsg = Format('参数:[strTopicId]不能为空!(In .SetDdl_ClassificationIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strTopicId.length != 8) {
      const strMsg = Format(
        '缓存分类变量:[strTopicId]的长度:[{0}]不正确!(.SetDdl_ClassificationIdInDiv)',
        strTopicId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    if (IsNullOrEmpty(strTopicId) == true) {
      const strMsg = Format('参数:[strTopicId]不能为空!(In .SetDdl_ClassificationIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strTopicId.length != 8) {
      const strMsg = Format(
        '缓存分类变量:[strTopicId]的长度:[{0}]不正确!(.SetDdl_ClassificationIdInDiv)',
        strTopicId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }
    await gs_VpClassificationRelaEx_BindDdl_ClassificationIdByTopicIdInDivCache(
      this.divQuery,
      'ddlClassificationId_q',
      strTopicId,
    ); //
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    const IdCurrEduClsCache = RTViewpointCRUD.IdCurrEduClsCache; //缓存分类变量;//在switch中未找到相关类型: tsCache(in AGC.PureClassEx.FuncParaType:GetTsTypeStr)
    const TopicIdStatic = RTViewpointCRUD.TopicIdStatic; //静态变量;//静态变量

    await this.SetDdl_TopicIdInDiv(IdCurrEduClsCache); //查询区域

    await this.SetDdl_gsKnowledgeTypeIdInDiv(); //查询区域

    await this.SetDdl_ClassificationIdInDiv(TopicIdStatic); //查询区域
  }

  /** 函数功能:为功能区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4FeatureRegion)
   **/
  public async BindDdl4FeatureRegion() {}

  //多关键字,不支持复制功能!

  /**
   * 在数据表里删除记录
   * "strTopicId": 表关键字
   * "lngSubViewpointId": 表关键字
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   **/
  public async btnDelRecordInTab_Click(strTopicId: string, lngSubViewpointId: number) {
    const strThisFuncName = this.btnDelRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strTopicId) == true) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (lngSubViewpointId == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(0) == false) {
        return;
      }
      await this.DelRecord(strTopicId, lngSubViewpointId);
      await this.BindGv_vRTViewpoint(this.divList);
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里选择记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
   **/
  public async btnSelectRecordInTab_Click(strTopicId: string, lngSubViewpointId: number) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strTopicId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (lngSubViewpointId == 0) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strTopicId, lngSubViewpointId);
    } catch (e) {
      const strMsg = `选择记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 根据关键字删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   **/
  public async DelRecord(strTopicId: string, lngSubViewpointId: number) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await RTViewpoint_DelRecKeyLstAsync(strTopicId, lngSubViewpointId);
      if (returnInt > 0) {
        //RTViewpoint_ReFreshCache(RTViewpointCRUD.TopicIdCache);
        const strInfo = `删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除${this.thisTabName}记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 根据关键字选择相应的记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
   * @param sender:参数列表
   **/
  public async SelectRecord(strTopicId: string, lngSubViewpointId: number) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objRTViewpointEN = await vRTViewpoint_GetObjByKeyLstAsync(
        strTopicId,
        lngSubViewpointId,
      );
      console.log('完成SelectRecord!', objRTViewpointEN);
      Redirect('/Index/Main_vRTViewpoint');
    } catch (e) {
      const strMsg = `根据关键字获取相应的${this.thisTabName}记录的对象不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnDelRecord_Click() {
    const strThisFuncName = this.btnDelRecord_Click.name;
    try {
      const arrKeyLsts = GetCheckedKeyLstsInDivObj(this.divList);
      if (arrKeyLsts.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(arrKeyLsts.length) == false) {
        return;
      }
      await this.DelMultiRecord_KeyLst(arrKeyLsts);
      await this.BindGv_vRTViewpoint(this.divList);
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnExportExcel_Click)
   **/
  public async btnExportExcel_Click() {
    await this.ExportExcel_vRTViewpoint();
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevRTViewpointCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.topicId_q != '' && this.topicId_q != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsvRTViewpointEN.con_TopicId, this.topicId_q);
      }
      if (this.proposePeople_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvRTViewpointEN.con_ProposePeople,
          this.proposePeople_q,
        );
      }
      if (this.gsKnowledgeTypeId_q != '' && this.gsKnowledgeTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvRTViewpointEN.con_gsKnowledgeTypeId,
          this.gsKnowledgeTypeId_q,
        );
      }
      if (this.classificationId_q != 0) {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvRTViewpointEN.con_ClassificationId,
          this.classificationId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineRTViewpointCondition)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return strWhereCond;
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
        divName = this.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = this.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = this.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.List_05:
        divName = this.divList;
        divTypeName = 'divList';
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

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevRTViewpointConditionObj(): Promise<clsvRTViewpointEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvRTViewpointCond = new clsvRTViewpointEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.topicId_q != '' && this.topicId_q != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsvRTViewpointEN.con_TopicId, this.topicId_q);
        objvRTViewpointCond.SetCondFldValue(clsvRTViewpointEN.con_TopicId, this.topicId_q, '=');
      }
      if (this.proposePeople_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvRTViewpointEN.con_ProposePeople,
          this.proposePeople_q,
        );
        objvRTViewpointCond.SetCondFldValue(
          clsvRTViewpointEN.con_ProposePeople,
          this.proposePeople_q,
          'like',
        );
      }
      if (this.gsKnowledgeTypeId_q != '' && this.gsKnowledgeTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvRTViewpointEN.con_gsKnowledgeTypeId,
          this.gsKnowledgeTypeId_q,
        );
        objvRTViewpointCond.SetCondFldValue(
          clsvRTViewpointEN.con_gsKnowledgeTypeId,
          this.gsKnowledgeTypeId_q,
          '=',
        );
      }
      if (this.classificationId_q != 0) {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvRTViewpointEN.con_ClassificationId,
          this.classificationId_q,
        );
        objvRTViewpointCond.SetCondFldValue(
          clsvRTViewpointEN.con_ClassificationId,
          this.classificationId_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineRTViewpointConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvRTViewpointCond.whereCond = strWhereCond;
    return objvRTViewpointCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj4ExportExcel)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevRTViewpointConditionObj4ExportExcel(): Promise<clsvRTViewpointEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvRTViewpointCond = new clsvRTViewpointENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.topicId_q != '' && this.topicId_q != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsvRTViewpointEN.con_TopicId, this.topicId_q);
        objvRTViewpointCond.SetCondFldValue(clsvRTViewpointEN.con_TopicId, this.topicId_q, '=');
      }
      if (this.proposePeople_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvRTViewpointEN.con_ProposePeople,
          this.proposePeople_q,
        );
        objvRTViewpointCond.SetCondFldValue(
          clsvRTViewpointEN.con_ProposePeople,
          this.proposePeople_q,
          'like',
        );
      }
      if (this.gsKnowledgeTypeId_q != '' && this.gsKnowledgeTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvRTViewpointEN.con_gsKnowledgeTypeId,
          this.gsKnowledgeTypeId_q,
        );
        objvRTViewpointCond.SetCondFldValue(
          clsvRTViewpointEN.con_gsKnowledgeTypeId,
          this.gsKnowledgeTypeId_q,
          '=',
        );
      }
      if (this.classificationId_q != 0) {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvRTViewpointEN.con_ClassificationId,
          this.classificationId_q,
        );
        objvRTViewpointCond.SetCondFldValue(
          clsvRTViewpointEN.con_ClassificationId,
          this.classificationId_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0019)在组合导出Excel条件对象(CombineRTViewpointConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvRTViewpointCond.whereCond = strWhereCond;
    return objvRTViewpointCond;
  }

  /** 显示vRTViewpoint对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrRTViewpointObjLst:需要绑定的对象列表
   **/
  public async BindTab_vRTViewpoint(
    divContainer: HTMLDivElement,
    arrvRTViewpointObjLst: Array<clsvRTViewpointEN>,
  ) {
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_TopicId,
        sortBy: clsvRTViewpointEN.con_TopicId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '主题Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_SubViewpointId,
        sortBy: clsvRTViewpointEN.con_SubViewpointId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '子观点Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_TopicName,
        sortBy: clsvRTViewpointEN.con_TopicName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '栏目主题',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_VersionCount,
        sortBy: clsvRTViewpointEN.con_VersionCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '版本统计',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_CitationCount,
        sortBy: clsvRTViewpointEN.con_CitationCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '引用统计',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_TopicContent,
        sortBy: clsvRTViewpointEN.con_TopicContent,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '主题内容',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_TopicProposePeople,
        sortBy: clsvRTViewpointEN.con_TopicProposePeople,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '主题提出人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_gsKnowledgeTypeName,
        sortBy: clsvRTViewpointEN.con_gsKnowledgeTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '知识类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_LevelName,
        sortBy: clsvRTViewpointEN.con_LevelName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '级别名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_OperationTypeName,
        sortBy: clsvRTViewpointEN.con_OperationTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '操作类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_SubViewpointContent,
        sortBy: clsvRTViewpointEN.con_SubViewpointContent,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '详情内容',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_PaperTitle,
        sortBy: clsvRTViewpointEN.con_PaperTitle,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '论文标题',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 14,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_IsSubmit,
        sortBy: clsvRTViewpointEN.con_IsSubmit,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否提交',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 15,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_SectionName,
        sortBy: clsvRTViewpointEN.con_SectionName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '节名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 17,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_SubViewpointTypeName,
        sortBy: clsvRTViewpointEN.con_SubViewpointTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '类型名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 19,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_ExplainTypeName,
        sortBy: clsvRTViewpointEN.con_ExplainTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 21,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_ExplainContent,
        sortBy: clsvRTViewpointEN.con_ExplainContent,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明内容',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 22,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_IsPublic,
        sortBy: clsvRTViewpointEN.con_IsPublic,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否公开',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 23,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_Conclusion,
        sortBy: clsvRTViewpointEN.con_Conclusion,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '结论',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 27,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_Nationality,
        sortBy: clsvRTViewpointEN.con_Nationality,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '国籍',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 28,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_Achievement,
        sortBy: clsvRTViewpointEN.con_Achievement,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '成就',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 29,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_Major,
        sortBy: clsvRTViewpointEN.con_Major,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 30,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_WorkUnit,
        sortBy: clsvRTViewpointEN.con_WorkUnit,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '工作单位',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 31,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_PageNumber,
        sortBy: clsvRTViewpointEN.con_PageNumber,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '页码',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 32,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_PdfContent,
        sortBy: clsvRTViewpointEN.con_PdfContent,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'Pdf内容',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 33,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_AppraiseCount,
        sortBy: clsvRTViewpointEN.con_AppraiseCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '评论数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 34,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_OkCount,
        sortBy: clsvRTViewpointEN.con_OkCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '点赞统计',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 35,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_Score,
        sortBy: clsvRTViewpointEN.con_Score,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '评分',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 36,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_StuScore,
        sortBy: clsvRTViewpointEN.con_StuScore,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学生平均分',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 37,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_TeaScore,
        sortBy: clsvRTViewpointEN.con_TeaScore,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '教师评分',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 38,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_CreateDate,
        sortBy: clsvRTViewpointEN.con_CreateDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '建立日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 39,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_SubViewpointTypeOrderNum,
        sortBy: clsvRTViewpointEN.con_SubViewpointTypeOrderNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '子观点类型序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 41,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_ProposePeople,
        sortBy: clsvRTViewpointEN.con_ProposePeople,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '提出人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 42,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_IdCurrEduCls,
        sortBy: clsvRTViewpointEN.con_IdCurrEduCls,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '教学班流水号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 45,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_UpdDate,
        sortBy: clsvRTViewpointEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 46,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_UpdUser,
        sortBy: clsvRTViewpointEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 47,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_Memo,
        sortBy: clsvRTViewpointEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '备注',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 48,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_ViewPointDate,
        sortBy: clsvRTViewpointEN.con_ViewPointDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '观点日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 50,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvRTViewpointEN.con_IsRecommend,
        sortBy: clsvRTViewpointEN.con_IsRecommend,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否推荐',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 51,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    const arrKeyLst = [clsvRTViewpointEN.con_TopicId, clsvRTViewpointEN.con_SubViewpointId];
    await BindTab_KeyLst_V(divDataLst, arrvRTViewpointObjLst, arrDataColumn, arrKeyLst, this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrvRTViewpointExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrvRTViewpointExObjLst: Array<clsvRTViewpointENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsvRTViewpointEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrvRTViewpointExObjLst) {
        await vRTViewpointEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
      }
    }
  }

  /** 函数功能:在数据 列表中跳转到某一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
   * @param intPageIndex:页序号
   **/
  public async IndexPage(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    //console.log("跳转到" + intPageIndex + "页");
    this.SetCurrPageIndex(intPageIndex);
    await this.BindGv_vRTViewpoint(this.divList);
  }

  /** 函数功能:在数据列表中跳转到下一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_NextPage)
   **/
  public async NextPage() {
    const intCurrPageIndex = this.objPager.currPageIndex;
    const intPageIndex = Number(intCurrPageIndex) + 1;
    //console.log("跳转到" + intPageIndex + "页");
    this.IndexPage(intPageIndex);
  }

  /** 函数功能:在数据列表中跳转到前一页
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PrevPage)
   **/
  public async PrevPage() {
    const intCurrPageIndex = this.objPager.currPageIndex;
    const intPageIndex = Number(intCurrPageIndex) - 1;
    //console.log("跳转到" + intPageIndex + "页");
    this.IndexPage(intPageIndex);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   **/
  public async BindGv_vRTViewpoint(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_vRTViewpoint.name;
    if (RTViewpointCRUD.sortvRTViewpointBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvRTViewpointBy)为空,请检查!(In BindGv_vRTViewpoint)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const strWhereCond = await this.CombinevRTViewpointCondition();
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvRTViewpointExObjLst: Array<clsvRTViewpointENEx> = [];
    try {
      this.recCount = await vRTViewpoint_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      const intPageCount = this.objPager.GetPageCount(this.recCount, this.pageSize);
      if (intCurrPageIndex == 0) {
        if (intPageCount > 1) intCurrPageIndex = intPageCount;
        else intCurrPageIndex = 1;
        this.SetCurrPageIndex(intCurrPageIndex);
      } else if (intCurrPageIndex > intPageCount) {
        intCurrPageIndex = intPageCount;
        this.SetCurrPageIndex(intCurrPageIndex);
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: RTViewpointCRUD.sortvRTViewpointBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrvRTViewpointExObjLst = await vRTViewpointEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
    const divPager: HTMLDivElement = <HTMLDivElement>document.getElementById('divPager');
    if (this.recCount <= this.pageSize) {
      if (divPager != null) {
        divPager.style.display = 'none';
      }
    } else {
      if (divPager != null) {
        divPager.style.display = 'block';
      }
    }
    if (arrvRTViewpointExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strMsg = Format('根据条件获取的${this.thisTabName}记录数为0!');
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_vRTViewpoint(divList, arrvRTViewpointExObjLst);
      //console.log("完成BindGv_vRTViewpoint!");
    } catch (e) {
      //console.trace();
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 排序函数。根据表对象中随机两个字段的值进行比较,正常使用时,需用该类的扩展类的同名函数
   * 作者:pyf
   * 日期:
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortFunExportExcel)
   * @param a:比较的第1个对象
   * @param b:比较的第1个对象
   * @returns 返回两个对象比较的结果
   **/
  public SortFunExportExcel(a: clsvRTViewpointEN, b: clsvRTViewpointEN): number {
    if (a.updUser == b.updUser) return a.updUser.localeCompare(b.updUser);
    else return a.updDate.localeCompare(b.updDate);
  }

  /** 函数功能:从界面列表中根据某一个字段排序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param objAnchorElement:带有排序字段的Anchors
   **/
  public async SortBy(objAnchorElement: any) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      RTViewpointCRUD.ascOrDesc4SortFun,
      RTViewpointCRUD.sortvRTViewpointBy,
      strSortExpress,
    );
    RTViewpointCRUD.sortvRTViewpointBy = sortBy;
    RTViewpointCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    RTViewpointCRUD.sortFunStatic = sortFun;
    await this.BindGv_vRTViewpoint(this.divList);
  }
  //多关键字,不支持复制功能!

  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord_KeyLst(arrKeyLsts: Array<string>) {
    const strThisFuncName = this.DelMultiRecord_KeyLst.name;
    try {
      const returnInt = await RTViewpoint_DelRecKeyLstsAsync(arrKeyLsts);
      if (returnInt > 0) {
        for (const strKeyId of arrKeyLsts) {
          //RTViewpoint_ReFreshCache(RTViewpointCRUD.TopicIdCache);
        }
        const strInfo = `删除${this.thisTabName}记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除${this.thisTabName}记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e) {
      const strMsg = `删除${this.thisTabName}记录不成功. ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 显示{0}对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
   * @param divContainer:显示容器
   * @param objRTViewpoint:需要显示的对象
   **/
  public ShowRTViewpointObj(divContainer: HTMLDivElement, objRTViewpoint: clsRTViewpointEN) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objRTViewpoint);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objRTViewpoint.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjRTViewpointEN:表实体类对象
   * @returns 列表的第一个关键字值
   **/
  public GetFirstKey(): string {
    if (arrSelectedKeys.length == 1) {
      return arrSelectedKeys[0];
    } else {
      alert(`请选择一个关键字!目前选择了:${arrSelectedKeys.length}个关键字。`);
      return '';
    }
  }

  /** 函数功能:预留函数,在某一个层(div)里绑定数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindInDiv)
   **/
  public async BindInDiv(divBind: HTMLDivElement) {
    console.log(divBind);
  }

  /** 函数功能:设置当前页序号
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetCurrPageIndex)
   * @param value:页序号
   * @param strDivName4Pager:当前分页所在的层(div)
   **/
  public SetCurrPageIndex(value: number) {
    this.objPager.currPageIndex = value;
  }

  /**
   * 分类Id (Used In CombineCondition())
   **/
  public get classificationId_q(): number {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlClassificationId_q');
    if (strValue == undefined) return 0;
    else if (strValue == '0') return 0;
    else return Number(strValue);
  }
  /**
   * 分类Id (Used In CombineCondition())
   **/
  public set classificationId_q(value: number) {
    SetSelectValueByIdInDivObj(
      this.divQuery,
      'ddlClassificationId_q',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 知识类型Id (Used In CombineCondition())
   **/
  public get gsKnowledgeTypeId_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlgsKnowledgeTypeId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 知识类型Id (Used In CombineCondition())
   **/
  public set gsKnowledgeTypeId_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlgsKnowledgeTypeId_q', value);
  }
  /**
   * 提出人 (Used In CombineCondition())
   **/
  public get proposePeople_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtProposePeople_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 提出人 (Used In CombineCondition())
   **/
  public set proposePeople_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtProposePeople_q', value);
  }
  /**
   * 主题Id (Used In CombineCondition())
   **/
  public get topicId_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlTopicId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 主题Id (Used In CombineCondition())
   **/
  public set topicId_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlTopicId_q', value);
  }
  /**
   * 设置界面标题-相当使用ViewState功能
   **/
  public set ViewTitle(value: string) {
    SetLabelHtmlByIdInDivObj(this.divLayout, 'lblViewTitle', value);
  }
  /**
   * 设置界面标题
   **/
  public get ViewTitle(): string {
    const strValue = GetLabelHtmlInDivObj(this.divLayout, 'lblViewTitle');
    return strValue;
  }
}
