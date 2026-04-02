/**
 * 类名:PaperSubViewpointCRUD(界面:PaperSubViewpointCRUD)
 * 表名:PaperSubViewpoint(01120534)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 11:33:53
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import {
  vPaperSubViewpoint_GetRecCountByCondCache,
  vPaperSubViewpoint_GetSubObjLstCache,
  vPaperSubViewpoint_GetObjBySubViewpointIdAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { Section_BindDdl_SectionIdByPaperIdInDivCache } from '@/ts/L3ForWApi/GradEduPaper/clsSectionWApi';
import { SubViewpointType_BindDdl_SubViewpointTypeIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsSubViewpointTypeWApi';
import { ExplainType_BindDdl_ExplainTypeIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsExplainTypeWApi';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import {
  PaperSubViewpoint_ReOrderAsync,
  PaperSubViewpoint_ReFreshCache,
  PaperSubViewpoint_GoBottomAsync,
  PaperSubViewpoint_DownMoveAsync,
  PaperSubViewpoint_UpMoveAsync,
  PaperSubViewpoint_GoTopAsync,
  PaperSubViewpoint_DelRecordAsync,
  PaperSubViewpoint_GetObjLstBySubViewpointIdLstAsync,
  PaperSubViewpoint_AddNewRecordAsync,
  PaperSubViewpoint_DelPaperSubViewpointsAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubViewpointWApi';
import {
  GetCheckedKeyIdsInDivObj,
  SetCheckedItem4KeyIdInDiv,
  GetDivObjInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsvPaperSubViewpointENEx } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointENEx';
import {
  BindTab_V,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  vPaperSubViewpointEx_FuncMapByFldName,
  vPaperSubViewpointEx_GetObjExLstByPagerCache,
} from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSubViewpointExWApi';
import { clsPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubViewpointEN';
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
/** PaperSubViewpointCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class PaperSubViewpointCRUD implements clsOperateList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static EditObj: any;
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

  public static IdCurrEduClsCache = ''; //2、界面主表的缓存分类字段变量1
  public static SubViewpointTypeIdOrderNum = ''; //10、与排序相关的界面变量-分类变量
  public static PaperIdStatic = ''; //6、定义下拉框条件变量1
  public static objPageCRUD: PaperSubViewpointCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public static ascOrDesc4SortFun = 'Asc';
  public static sortvPaperSubViewpointBy = '';
  constructor(divLayout: HTMLDivElement) {
    PaperSubViewpointCRUD.objPageCRUD = this;
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
    return clsPaperSubViewpointEN._CurrTabName;
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
      if (PaperSubViewpointCRUD.sortvPaperSubViewpointBy == '')
        PaperSubViewpointCRUD.sortvPaperSubViewpointBy = 'paperRWId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vPaperSubViewpointCache(this.divList);
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
    await this.BindGv_vPaperSubViewpointCache(this.divList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrvPaperSubViewpointObjLst: Array<clsvPaperSubViewpointEN>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrvPaperSubViewpointObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsvPaperSubViewpointEN = arrvPaperSubViewpointObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('子观点表({0})导出.xlsx', clsvPaperSubViewpointEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcelCache)
   **/
  public async ExportExcel_vPaperSubViewpointCache() {
    const strThisFuncName = this.ExportExcel_vPaperSubViewpointCache.name;
    if (PaperSubViewpointCRUD.sortvPaperSubViewpointBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvPaperSubViewpointBy)为空,请检查!(In BindGv_vPaperSubViewpointCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objvPaperSubViewpointCond =
      await this.CombinevPaperSubViewpointConditionObj4ExportExcel();
    objvPaperSubViewpointCond.SetCondFldValue(
      clsvPaperSubViewpointEN.con_IdCurrEduCls,
      PaperSubViewpointCRUD.IdCurrEduClsCache,
      '=',
    );
    let arrvPaperSubViewpointObjLst: Array<clsvPaperSubViewpointEN> = [];
    try {
      this.recCount = await vPaperSubViewpoint_GetRecCountByCondCache(
        objvPaperSubViewpointCond,
        PaperSubViewpointCRUD.IdCurrEduClsCache,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objvPaperSubViewpointCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrvPaperSubViewpointObjLst = await vPaperSubViewpoint_GetSubObjLstCache(
        objvPaperSubViewpointCond,
        PaperSubViewpointCRUD.IdCurrEduClsCache,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrvPaperSubViewpointObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsPaperSubViewpointEN._CurrTabName,
        PaperSubViewpointCRUD.IdCurrEduClsCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'subViewpointTypeName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '类型名称',
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
          fldName: 'rWTitle',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '读写标题',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 16,
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
          orderNum: 17,
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
          orderNum: 19,
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
          orderNum: 20,
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
          orderNum: 22,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'orderNum',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '序号',
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
          fldName: 'updDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 25,
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
          orderNum: 26,
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
          orderNum: 27,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      arrvPaperSubViewpointObjLst = arrvPaperSubViewpointObjLst.sort(this.SortFunExportExcel);
      this.CombineData(arrvPaperSubViewpointObjLst, arrDataColumn);
      //console.log("完成BindGv_vPaperSubViewpoint!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 设置绑定下拉框，针对字段:[SectionId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_SectionIdInDiv(strPaperId: string) {
    if (IsNullOrEmpty(strPaperId) == true) {
      const strMsg = Format('参数:[strPaperId]不能为空!(In .SetDdl_SectionIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strPaperId.length != 8) {
      const strMsg = Format(
        '缓存分类变量:[strPaperId]的长度:[{0}]不正确!(.SetDdl_SectionIdInDiv)',
        strPaperId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    await Section_BindDdl_SectionIdByPaperIdInDivCache(this.divQuery, 'ddlSectionId_q', strPaperId); //
  }

  /**
   * 设置绑定下拉框，针对字段:[SubViewpointTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_SubViewpointTypeIdInDiv() {
    await SubViewpointType_BindDdl_SubViewpointTypeIdInDivCache(
      this.divQuery,
      'ddlSubViewpointTypeId_q',
    ); //
  }

  /**
   * 设置绑定下拉框，针对字段:[ExplainTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_ExplainTypeIdInDiv() {
    await ExplainType_BindDdl_ExplainTypeIdInDivCache(this.divQuery, 'ddlExplainTypeId_q'); //
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    const PaperIdStatic = PaperSubViewpointCRUD.PaperIdStatic; //静态变量;//静态变量

    await this.SetDdl_SectionIdInDiv(PaperIdStatic); //查询区域

    await this.SetDdl_SubViewpointTypeIdInDiv(); //查询区域

    await this.SetDdl_ExplainTypeIdInDiv(); //查询区域
  }

  /** 函数功能:为功能区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4FeatureRegion)
   **/
  public async BindDdl4FeatureRegion() {}

  /**
   * 重序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
   **/
  public async btnReOrder_Click() {
    const strThisFuncName = this.btnReOrder_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strSubViewpointTypeId = PaperSubViewpointCRUD.SubViewpointTypeIdOrderNum;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        subviewpointtypeid: strSubViewpointTypeId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await PaperSubViewpoint_ReOrderAsync(objOrderByData);
      PaperSubViewpoint_ReFreshCache(PaperSubViewpointCRUD.IdCurrEduClsCache);
    } catch (e) {
      const strMsg = `重序出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_vPaperSubViewpointCache(this.divList);
  }

  /**
   * 置底
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
   **/
  public async btnGoBottum_Click() {
    const strThisFuncName = this.btnGoBottum_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strSubViewpointTypeId = PaperSubViewpointCRUD.SubViewpointTypeIdOrderNum;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要置底的${this.thisTabName}记录!`);
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        subviewpointtypeid: strSubViewpointTypeId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await PaperSubViewpoint_GoBottomAsync(objOrderByData);
      PaperSubViewpoint_ReFreshCache(PaperSubViewpointCRUD.IdCurrEduClsCache);
    } catch (e) {
      const strMsg = `置底出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_vPaperSubViewpointCache(this.divList);
    const divDataLst = GetDivObjInDivObj(this.divList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /**
   * 移动记录序号时的预检查函数
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PreCheck4Order)
   **/
  public PreCheck4Order(): boolean {
    const strSubViewpointTypeId = PaperSubViewpointCRUD.SubViewpointTypeIdOrderNum;
    if (strSubViewpointTypeId == '') {
      const strMsg = Format('请输入SubViewpointTypeId!');
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return false;
    }
    return true;
  }

  /**
   * 下移
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
   **/
  public async btnDownMove_Click() {
    const strThisFuncName = this.btnDownMove_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strSubViewpointTypeId = PaperSubViewpointCRUD.SubViewpointTypeIdOrderNum;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要下移的${this.thisTabName}记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        subviewpointtypeid: strSubViewpointTypeId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await PaperSubViewpoint_DownMoveAsync(objOrderByData);
      PaperSubViewpoint_ReFreshCache(PaperSubViewpointCRUD.IdCurrEduClsCache);
    } catch (e) {
      const strMsg = `下移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_vPaperSubViewpointCache(this.divList);
    const divDataLst = GetDivObjInDivObj(this.divList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /**
   * 上移
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
   **/
  public async btnUpMove_Click() {
    const strThisFuncName = this.btnUpMove_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strSubViewpointTypeId = PaperSubViewpointCRUD.SubViewpointTypeIdOrderNum;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要上移的${this.thisTabName}记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        subviewpointtypeid: strSubViewpointTypeId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await PaperSubViewpoint_UpMoveAsync(objOrderByData);
      PaperSubViewpoint_ReFreshCache(PaperSubViewpointCRUD.IdCurrEduClsCache);
    } catch (e) {
      const strMsg = `上移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_vPaperSubViewpointCache(this.divList);
    const divDataLst = GetDivObjInDivObj(this.divList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /** 置顶
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
   **/
  public async btnGoTop_Click() {
    const strThisFuncName = this.btnGoTop_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strSubViewpointTypeId = PaperSubViewpointCRUD.SubViewpointTypeIdOrderNum;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要置顶的${this.thisTabName}记录!`);
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        subviewpointtypeid: strSubViewpointTypeId,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await PaperSubViewpoint_GoTopAsync(objOrderByData);
      PaperSubViewpoint_ReFreshCache(PaperSubViewpointCRUD.IdCurrEduClsCache);
    } catch (e) {
      const strMsg = `置顶出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_vPaperSubViewpointCache(this.divList);
    const divDataLst = GetDivObjInDivObj(this.divList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /**
   * 添加新记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
   **/
  public async btnCopyRecord_Click() {
    const strThisFuncName = this.btnCopyRecord_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要克隆的${this.thisTabName}记录!`);
        return '';
      }
      await this.CopyRecord(arrKeyIds);
      await this.BindGv_vPaperSubViewpointCache(this.divList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "lngSubViewpointId": 表关键字
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   **/
  public async btnDelRecordInTab_Click(strKeyId: number) {
    const strThisFuncName = this.btnDelRecordInTab_Click.name;
    try {
      if (strKeyId == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(0) == false) {
        return;
      }
      const lngKeyId = Number(strKeyId);
      await this.DelRecord(lngKeyId);
      await this.BindGv_vPaperSubViewpointCache(this.divList);
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
  public async btnSelectRecordInTab_Click(lngSubViewpointId: number) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (lngSubViewpointId == 0) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(lngSubViewpointId);
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
  public async DelRecord(lngSubViewpointId: number) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await PaperSubViewpoint_DelRecordAsync(lngSubViewpointId);
      if (returnInt > 0) {
        PaperSubViewpoint_ReFreshCache(PaperSubViewpointCRUD.IdCurrEduClsCache);
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
  public async SelectRecord(lngSubViewpointId: number) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objPaperSubViewpointEN = await vPaperSubViewpoint_GetObjBySubViewpointIdAsync(
        lngSubViewpointId,
      );
      console.log('完成SelectRecord!', objPaperSubViewpointEN);
      Redirect('/Index/Main_vPaperSubViewpoint');
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
      const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(arrKeyIds.length) == false) {
        return;
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_vPaperSubViewpointCache(this.divList);
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
    await this.ExportExcel_vPaperSubViewpointCache();
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevPaperSubViewpointCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.paperRWId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvPaperSubViewpointEN.con_PaperRWId,
          this.paperRWId_q,
        );
      }
      if (this.sectionId_q != '' && this.sectionId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvPaperSubViewpointEN.con_SectionId,
          this.sectionId_q,
        );
      }
      if (this.subViewpointTypeId_q != '' && this.subViewpointTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvPaperSubViewpointEN.con_SubViewpointTypeId,
          this.subViewpointTypeId_q,
        );
      }
      if (this.explainTypeId_q != '' && this.explainTypeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvPaperSubViewpointEN.con_ExplainTypeId,
          this.explainTypeId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombinePaperSubViewpointCondition)时出错!请联系管理员!{0}',
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
  public async CombinevPaperSubViewpointConditionObj(): Promise<clsvPaperSubViewpointEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvPaperSubViewpointCond = new clsvPaperSubViewpointEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperRWId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvPaperSubViewpointEN.con_PaperRWId,
          this.paperRWId_q,
        );
        objvPaperSubViewpointCond.SetCondFldValue(
          clsvPaperSubViewpointEN.con_PaperRWId,
          this.paperRWId_q,
          'like',
        );
      }
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

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj4ExportExcel)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevPaperSubViewpointConditionObj4ExportExcel(): Promise<clsvPaperSubViewpointEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvPaperSubViewpointCond = new clsvPaperSubViewpointENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperRWId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvPaperSubViewpointEN.con_PaperRWId,
          this.paperRWId_q,
        );
        objvPaperSubViewpointCond.SetCondFldValue(
          clsvPaperSubViewpointEN.con_PaperRWId,
          this.paperRWId_q,
          'like',
        );
      }
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
        '(errid:WiTsCs0019)在组合导出Excel条件对象(CombinePaperSubViewpointConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvPaperSubViewpointCond.whereCond = strWhereCond;
    return objvPaperSubViewpointCond;
  }

  /** 显示vPaperSubViewpoint对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrPaperSubViewpointObjLst:需要绑定的对象列表
   **/
  public async BindTab_vPaperSubViewpoint(
    divContainer: HTMLDivElement,
    arrvPaperSubViewpointObjLst: Array<clsvPaperSubViewpointEN>,
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
        fldName: clsvPaperSubViewpointEN.con_PaperRWId,
        sortBy: clsvPaperSubViewpointEN.con_PaperRWId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '论文读写Id',
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
        fldName: clsvPaperSubViewpointEN.con_SubViewpointTypeName,
        sortBy: clsvPaperSubViewpointEN.con_SubViewpointTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '类型名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 16,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvPaperSubViewpointEN.con_RWTitle,
        sortBy: clsvPaperSubViewpointEN.con_RWTitle,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '读写标题',
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
        fldName: clsvPaperSubViewpointEN.con_SubViewpointContent,
        sortBy: clsvPaperSubViewpointEN.con_SubViewpointContent,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '详情内容',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 18,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvPaperSubViewpointEN.con_ExplainTypeName,
        sortBy: clsvPaperSubViewpointEN.con_ExplainTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明类型名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 20,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvPaperSubViewpointEN.con_IsPublic,
        sortBy: clsvPaperSubViewpointEN.con_IsPublic,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否公开',
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
        fldName: clsvPaperSubViewpointEN.con_OrderNum,
        sortBy: clsvPaperSubViewpointEN.con_OrderNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 24,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvPaperSubViewpointEN.con_UpdDate,
        sortBy: clsvPaperSubViewpointEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 26,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    await BindTab_V(
      divDataLst,
      arrvPaperSubViewpointObjLst,
      arrDataColumn,
      clsvPaperSubViewpointEN.con_SubViewpointId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrvPaperSubViewpointExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrvPaperSubViewpointExObjLst: Array<clsvPaperSubViewpointENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsvPaperSubViewpointEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrvPaperSubViewpointExObjLst) {
        await vPaperSubViewpointEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_vPaperSubViewpointCache(this.divList);
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
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGvCache)
   **/
  public async BindGv_vPaperSubViewpointCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_vPaperSubViewpointCache.name;
    if (PaperSubViewpointCRUD.sortvPaperSubViewpointBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvPaperSubViewpointBy)为空,请检查!(In BindGv_vPaperSubViewpointCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objvPaperSubViewpointCond = await this.CombinevPaperSubViewpointConditionObj();
    const strWhereCond = JSON.stringify(objvPaperSubViewpointCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvPaperSubViewpointExObjLst: Array<clsvPaperSubViewpointENEx> = [];
    try {
      this.recCount = await vPaperSubViewpoint_GetRecCountByCondCache(
        objvPaperSubViewpointCond,
        PaperSubViewpointCRUD.IdCurrEduClsCache,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objvPaperSubViewpointCond.whereCond,
        );
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objvPaperSubViewpointCond.whereCond,
        );
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

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (PaperSubViewpointCRUD.sortFunStatic != undefined) {
        strSortFun = PaperSubViewpointCRUD.sortFunStatic(PaperSubViewpointCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: PaperSubViewpointCRUD.sortvPaperSubViewpointBy,
        sortFun: strSortFun,
      };
      arrvPaperSubViewpointExObjLst = await vPaperSubViewpointEx_GetObjExLstByPagerCache(
        objPagerPara,
        PaperSubViewpointCRUD.IdCurrEduClsCache,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
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
    if (arrvPaperSubViewpointExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format(
        '{0}_{1}',
        clsPaperSubViewpointEN._CurrTabName,
        PaperSubViewpointCRUD.IdCurrEduClsCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_vPaperSubViewpoint(divList, arrvPaperSubViewpointExObjLst);
      //console.log("完成BindGv_vPaperSubViewpointCache!");
    } catch (e) {
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
  public SortFunExportExcel(a: clsvPaperSubViewpointEN, b: clsvPaperSubViewpointEN): number {
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
      PaperSubViewpointCRUD.ascOrDesc4SortFun,
      PaperSubViewpointCRUD.sortvPaperSubViewpointBy,
      strSortExpress,
    );
    PaperSubViewpointCRUD.sortvPaperSubViewpointBy = sortBy;
    PaperSubViewpointCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    PaperSubViewpointCRUD.sortFunStatic = sortFun;
    await this.BindGv_vPaperSubViewpointCache(this.divList);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrSubViewpointId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrPaperSubViewpointObjLst = await PaperSubViewpoint_GetObjLstBySubViewpointIdLstAsync(
        arrSubViewpointId,
      );
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrPaperSubViewpointObjLst) {
        const returnBool = await PaperSubViewpoint_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          PaperSubViewpoint_ReFreshCache(PaperSubViewpointCRUD.IdCurrEduClsCache);
          intCount++;
        } else {
          const strInfo = Format('克隆记录不成功!');
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = Format('共克隆了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord(arrSubViewpointId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await PaperSubViewpoint_DelPaperSubViewpointsAsync(arrSubViewpointId);
      if (returnInt > 0) {
        for (const lngSubViewpointId of arrSubViewpointId) {
          PaperSubViewpoint_ReFreshCache(PaperSubViewpointCRUD.IdCurrEduClsCache);
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
   * @param objPaperSubViewpoint:需要显示的对象
   **/
  public ShowPaperSubViewpointObj(
    divContainer: HTMLDivElement,
    objPaperSubViewpoint: clsPaperSubViewpointEN,
  ) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objPaperSubViewpoint);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objPaperSubViewpoint.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjPaperSubViewpointEN:表实体类对象
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
   * 说明类型Id (Used In CombineCondition())
   **/
  public get explainTypeId_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlExplainTypeId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 说明类型Id (Used In CombineCondition())
   **/
  public set explainTypeId_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlExplainTypeId_q', value);
  }
  /**
   * 课文阅读 (Used In CombineCondition())
   **/
  public get paperRWId_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtPaperRWId_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 课文阅读 (Used In CombineCondition())
   **/
  public set paperRWId_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtPaperRWId_q', value);
  }
  /**
   * 节Id (Used In CombineCondition())
   **/
  public get sectionId_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlSectionId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 节Id (Used In CombineCondition())
   **/
  public set sectionId_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlSectionId_q', value);
  }
  /**
   * 类型Id (Used In CombineCondition())
   **/
  public get subViewpointTypeId_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlSubViewpointTypeId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 类型Id (Used In CombineCondition())
   **/
  public set subViewpointTypeId_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlSubViewpointTypeId_q', value);
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
