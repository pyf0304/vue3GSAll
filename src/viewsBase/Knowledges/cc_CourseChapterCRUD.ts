/**
 * 类名:cc_CourseChapterCRUD(界面:cc_CourseChapterCRUD)
 * 表名:cc_CourseChapter(01120060)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 11:33:38
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:知识点相关(Knowledges)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import {
  cc_CourseChapter_GetRecCountByCondCache,
  cc_CourseChapter_GetSubObjLstCache,
  cc_CourseChapter_BindDdl_CourseChapterIdInDivCache,
  cc_CourseChapter_ReOrderAsync,
  cc_CourseChapter_ReFreshCache,
  cc_CourseChapter_GoBottomAsync,
  cc_CourseChapter_DownMoveAsync,
  cc_CourseChapter_UpMoveAsync,
  cc_CourseChapter_GoTopAsync,
  cc_CourseChapter_DelRecordAsync,
  cc_CourseChapter_GetObjByCourseChapterIdAsync,
  cc_CourseChapter_GetObjLstByCourseChapterIdLstAsync,
  cc_CourseChapter_GetMaxStrIdAsync,
  cc_CourseChapter_AddNewRecordAsync,
  cc_CourseChapter_Delcc_CourseChaptersAsync,
} from '@/ts/L3ForWApi/Knowledges/clscc_CourseChapterWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import {
  GetCheckedKeyIdsInDivObj,
  SetCheckedItem4KeyIdInDiv,
  GetDivObjInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clscc_CourseChapterEN } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterEN';
import { clscc_CourseChapterENEx } from '@/ts/L0Entity/Knowledges/clscc_CourseChapterENEx';
import {
  BindTab,
  ObjectAssign,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  cc_CourseChapterEx_FuncMapByFldName,
  cc_CourseChapterEx_GetObjExLstByPagerCache,
} from '@/ts/L3ForWApiExShare/Knowledges/clscc_CourseChapterExWApi';
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
/** cc_CourseChapterCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class cc_CourseChapterCRUD implements clsOperateList {
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

  public static CourseIdCache = ''; //2、界面主表的缓存分类字段变量1
  public static CourseIdStatic = ''; //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
  public static CourseIdOrderNum = ''; //10、与排序相关的界面变量-分类变量
  public static objPageCRUD: cc_CourseChapterCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public static ascOrDesc4SortFun = 'Asc';
  public static sortcc_CourseChapterBy = '';
  constructor(divLayout: HTMLDivElement) {
    cc_CourseChapterCRUD.objPageCRUD = this;
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
    return clscc_CourseChapterEN._CurrTabName;
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
      if (cc_CourseChapterCRUD.sortcc_CourseChapterBy == '')
        cc_CourseChapterCRUD.sortcc_CourseChapterBy = 'courseChapterName Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_cc_CourseChapter4Func(this.divList);
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
    await this.BindGv_cc_CourseChapter4Func(this.divList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrcc_CourseChapterObjLst: Array<clscc_CourseChapterEN>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrcc_CourseChapterObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clscc_CourseChapterEN = arrcc_CourseChapterObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('课程章节({0})导出.xlsx', clscc_CourseChapterEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcelCache)
   **/
  public async ExportExcel_cc_CourseChapterCache() {
    const strThisFuncName = this.ExportExcel_cc_CourseChapterCache.name;
    if (cc_CourseChapterCRUD.sortcc_CourseChapterBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortcc_CourseChapterBy)为空,请检查!(In BindGv_cc_CourseChapterCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objcc_CourseChapterCond = await this.Combinecc_CourseChapterConditionObj4ExportExcel();
    objcc_CourseChapterCond.SetCondFldValue(
      clscc_CourseChapterEN.con_CourseId,
      cc_CourseChapterCRUD.CourseIdCache,
      '=',
    );
    let arrcc_CourseChapterObjLst: Array<clscc_CourseChapterEN> = [];
    try {
      this.recCount = await cc_CourseChapter_GetRecCountByCondCache(
        objcc_CourseChapterCond,
        cc_CourseChapterCRUD.CourseIdCache,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objcc_CourseChapterCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrcc_CourseChapterObjLst = await cc_CourseChapter_GetSubObjLstCache(
        objcc_CourseChapterCond,
        cc_CourseChapterCRUD.CourseIdCache,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrcc_CourseChapterObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clscc_CourseChapterEN._CurrTabName,
        cc_CourseChapterCRUD.CourseIdCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'courseChapterId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '课程章节ID',
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
          fldName: 'courseChapterName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '课程章节名称',
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
          fldName: 'chapterName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '章名',
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
          fldName: 'sectionName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '节名',
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
          fldName: 'chapterNameSim',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '章名简称',
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
          fldName: 'sectionNameSim',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '节名简称',
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
          fldName: 'chapterContent',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '章节内容',
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
          fldName: 'isOpenToAllStu',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '全校师生',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 13,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'isOpenToSchool',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '全校师生公开',
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
          fldName: 'isOpenToSocial',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '社会公众',
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
          fldName: 'isMustMenu',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否必建栏目',
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
          fldName: 'themeName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '主题名',
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
          fldName: 'isFile',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '项目或文件夹',
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
          fldName: 'isUse',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否使用',
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
          fldName: 'viewCount',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '浏览量',
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
          fldName: 'courseChapterReferred',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '节简称',
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
          fldName: 'orderNum',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '序号',
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
          fldName: 'createDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '建立日期',
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
          fldName: 'editPeople',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改人',
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
      ];
      arrcc_CourseChapterObjLst = arrcc_CourseChapterObjLst.sort(this.SortFunExportExcel);
      this.CombineData(arrcc_CourseChapterObjLst, arrDataColumn);
      //console.log("完成BindGv_cc_CourseChapter!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 设置绑定下拉框，针对字段:[OrderNum]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_OrderNumInDivInFeature(strCourseId: string) {
    if (IsNullOrEmpty(strCourseId) == true) {
      const strMsg = Format('参数:[strCourseId]不能为空!(In .SetDdl_OrderNumInDivInFeature)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strCourseId.length != 8) {
      const strMsg = Format(
        '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(.SetDdl_OrderNumInDivInFeature)',
        strCourseId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    if (IsNullOrEmpty(strCourseId) == true) {
      const strMsg = Format('参数:[strCourseId]不能为空!(In .SetDdl_OrderNumInDivInFeature)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strCourseId.length != 8) {
      const strMsg = Format(
        '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(.SetDdl_OrderNumInDivInFeature)',
        strCourseId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }
    await cc_CourseChapter_BindDdl_CourseChapterIdInDivCache(
      this.divFunction,
      'ddlCourseId_OrderNum',
      strCourseId,
    ); //
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {}

  /** 函数功能:为功能区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4FeatureRegion)
   **/
  public async BindDdl4FeatureRegion() {
    const CourseIdStatic = cc_CourseChapterCRUD.CourseIdStatic; //静态变量;//静态变量

    await this.SetDdl_OrderNumInDivInFeature(CourseIdStatic); //功能区域
  }

  /**
   * 重序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
   **/
  public async btnReOrder_Click() {
    const strThisFuncName = this.btnReOrder_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strOrderNum = cc_CourseChapterCRUD.CourseIdOrderNum;
    const intOrderNum = Number(strOrderNum);
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        ordernum: intOrderNum,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await cc_CourseChapter_ReOrderAsync(objOrderByData);
      cc_CourseChapter_ReFreshCache(cc_CourseChapterCRUD.CourseIdCache);
    } catch (e) {
      const strMsg = `重序出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_cc_CourseChapter4Func(this.divList);
  }

  /**
   * 置底
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoBottum_Click)
   **/
  public async btnGoBottum_Click() {
    const strThisFuncName = this.btnGoBottum_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strOrderNum = cc_CourseChapterCRUD.CourseIdOrderNum;
    const intOrderNum = Number(strOrderNum);
    const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要置底的${this.thisTabName}记录!`);
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        ordernum: intOrderNum,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await cc_CourseChapter_GoBottomAsync(objOrderByData);
      cc_CourseChapter_ReFreshCache(cc_CourseChapterCRUD.CourseIdCache);
    } catch (e) {
      const strMsg = `置底出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_cc_CourseChapter4Func(this.divList);
    const divDataLst = GetDivObjInDivObj(this.divList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /**
   * 移动记录序号时的预检查函数
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PreCheck4Order)
   **/
  public PreCheck4Order(): boolean {
    const strOrderNum = cc_CourseChapterCRUD.CourseIdOrderNum;
    if (strOrderNum == '') {
      const strMsg = Format('请输入OrderNum!');
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
    const strOrderNum = cc_CourseChapterCRUD.CourseIdOrderNum;
    const intOrderNum = Number(strOrderNum);
    const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要下移的${this.thisTabName}记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        ordernum: intOrderNum,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await cc_CourseChapter_DownMoveAsync(objOrderByData);
      cc_CourseChapter_ReFreshCache(cc_CourseChapterCRUD.CourseIdCache);
    } catch (e) {
      const strMsg = `下移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_cc_CourseChapter4Func(this.divList);
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
    const strOrderNum = cc_CourseChapterCRUD.CourseIdOrderNum;
    const intOrderNum = Number(strOrderNum);
    const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要上移的${this.thisTabName}记录!`);
      return;
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        ordernum: intOrderNum,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await cc_CourseChapter_UpMoveAsync(objOrderByData);
      cc_CourseChapter_ReFreshCache(cc_CourseChapterCRUD.CourseIdCache);
    } catch (e) {
      const strMsg = `上移记录出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_cc_CourseChapter4Func(this.divList);
    const divDataLst = GetDivObjInDivObj(this.divList, 'divDataLst');
    arrKeyIds.forEach((e) => SetCheckedItem4KeyIdInDiv(divDataLst, e));
  }

  /** 置顶
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnGoTop_Click)
   **/
  public async btnGoTop_Click() {
    const strThisFuncName = this.btnGoTop_Click.name;
    if (this.PreCheck4Order() == false) return;
    const strOrderNum = cc_CourseChapterCRUD.CourseIdOrderNum;
    const intOrderNum = Number(strOrderNum);
    const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
    if (arrKeyIds.length == 0) {
      alert(`请选择需要置顶的${this.thisTabName}记录!`);
      return '';
    }
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        ordernum: intOrderNum,
      };
      const jsonStr = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await cc_CourseChapter_GoTopAsync(objOrderByData);
      cc_CourseChapter_ReFreshCache(cc_CourseChapterCRUD.CourseIdCache);
    } catch (e) {
      const strMsg = `置顶出错。错误:${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    await this.BindGv_cc_CourseChapter4Func(this.divList);
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
      await this.BindGv_cc_CourseChapter4Func(this.divList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "strCourseChapterId": 表关键字
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   **/
  public async btnDelRecordInTab_Click(strKeyId: string) {
    const strThisFuncName = this.btnDelRecordInTab_Click.name;
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(0) == false) {
        return;
      }
      await this.DelRecord(strKeyId);
      await this.BindGv_cc_CourseChapter4Func(this.divList);
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
  public async btnSelectRecordInTab_Click(strCourseChapterId: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strCourseChapterId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strCourseChapterId);
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
  public async DelRecord(strCourseChapterId: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await cc_CourseChapter_DelRecordAsync(strCourseChapterId);
      if (returnInt > 0) {
        cc_CourseChapter_ReFreshCache(cc_CourseChapterCRUD.CourseIdCache);
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
  public async SelectRecord(strCourseChapterId: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objcc_CourseChapterEN = await cc_CourseChapter_GetObjByCourseChapterIdAsync(
        strCourseChapterId,
      );
      console.log('完成SelectRecord!', objcc_CourseChapterEN);
      Redirect('/Index/Main_cc_CourseChapter');
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
      await this.BindGv_cc_CourseChapter4Func(this.divList);
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
    await this.ExportExcel_cc_CourseChapterCache();
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinecc_CourseChapterCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.courseChapterName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clscc_CourseChapterEN.con_CourseChapterName,
          this.courseChapterName_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(Combinecc_CourseChapterCondition)时出错!请联系管理员!{0}',
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
  public async Combinecc_CourseChapterConditionObj(): Promise<clscc_CourseChapterEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objcc_CourseChapterCond = new clscc_CourseChapterEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.courseChapterName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clscc_CourseChapterEN.con_CourseChapterName,
          this.courseChapterName_q,
        );
        objcc_CourseChapterCond.SetCondFldValue(
          clscc_CourseChapterEN.con_CourseChapterName,
          this.courseChapterName_q,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(Combinecc_CourseChapterConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objcc_CourseChapterCond.whereCond = strWhereCond;
    return objcc_CourseChapterCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj4ExportExcel)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinecc_CourseChapterConditionObj4ExportExcel(): Promise<clscc_CourseChapterEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objcc_CourseChapterCond = new clscc_CourseChapterENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.courseChapterName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clscc_CourseChapterEN.con_CourseChapterName,
          this.courseChapterName_q,
        );
        objcc_CourseChapterCond.SetCondFldValue(
          clscc_CourseChapterEN.con_CourseChapterName,
          this.courseChapterName_q,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0019)在组合导出Excel条件对象(Combinecc_CourseChapterConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objcc_CourseChapterCond.whereCond = strWhereCond;
    return objcc_CourseChapterCond;
  }

  /** 显示cc_CourseChapter对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrcc_CourseChapterObjLst:需要绑定的对象列表
   **/
  public async BindTab_cc_CourseChapter(
    divContainer: HTMLDivElement,
    arrcc_CourseChapterObjLst: Array<clscc_CourseChapterEN>,
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
        fldName: clscc_CourseChapterEN.con_CourseChapterName,
        sortBy: clscc_CourseChapterEN.con_CourseChapterName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程章节名称',
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
        fldName: clscc_CourseChapterEN.con_ChapterName,
        sortBy: clscc_CourseChapterEN.con_ChapterName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '章名',
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
        fldName: clscc_CourseChapterENEx.con_CourseName,
        sortBy: 'courseName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程名称',
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
        fldName: clscc_CourseChapterEN.con_SectionName,
        sortBy: clscc_CourseChapterEN.con_SectionName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '节名',
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
        fldName: clscc_CourseChapterEN.con_ChapterNameSim,
        sortBy: clscc_CourseChapterEN.con_ChapterNameSim,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '章名简称',
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
        fldName: clscc_CourseChapterEN.con_SectionNameSim,
        sortBy: clscc_CourseChapterEN.con_SectionNameSim,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '节名简称',
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
        fldName: clscc_CourseChapterEN.con_CourseChapterReferred,
        sortBy: clscc_CourseChapterEN.con_CourseChapterReferred,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '节简称',
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
        fldName: clscc_CourseChapterEN.con_EditPeople,
        sortBy: clscc_CourseChapterEN.con_EditPeople,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改人',
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
        fldName: clscc_CourseChapterEN.con_UpdDate,
        sortBy: clscc_CourseChapterEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    await BindTab(
      divDataLst,
      arrcc_CourseChapterObjLst,
      arrDataColumn,
      clscc_CourseChapterEN.con_CourseChapterId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 显示cc_CourseChapter对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrcc_CourseChapterExObjLst:需要绑定的对象列表
   **/
  public async BindTab_cc_CourseChapter4Func(
    divContainer: HTMLDivElement,
    arrcc_CourseChapterExObjLst: Array<clscc_CourseChapterENEx>,
  ) {
    const strThisFuncName = this.BindTab_cc_CourseChapter4Func.name;
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
        fldName: clscc_CourseChapterEN.con_CourseChapterName,
        sortBy: clscc_CourseChapterEN.con_CourseChapterName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程章节名称',
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
        fldName: clscc_CourseChapterEN.con_ChapterName,
        sortBy: clscc_CourseChapterEN.con_ChapterName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '章名',
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
        fldName: clscc_CourseChapterENEx.con_CourseName,
        sortBy: 'courseName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程名称',
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
        fldName: clscc_CourseChapterEN.con_SectionName,
        sortBy: clscc_CourseChapterEN.con_SectionName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '节名',
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
        fldName: clscc_CourseChapterEN.con_ChapterNameSim,
        sortBy: clscc_CourseChapterEN.con_ChapterNameSim,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '章名简称',
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
        fldName: clscc_CourseChapterEN.con_SectionNameSim,
        sortBy: clscc_CourseChapterEN.con_SectionNameSim,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '节名简称',
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
        fldName: clscc_CourseChapterEN.con_CourseChapterReferred,
        sortBy: clscc_CourseChapterEN.con_CourseChapterReferred,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '节简称',
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
        fldName: clscc_CourseChapterEN.con_EditPeople,
        sortBy: clscc_CourseChapterEN.con_EditPeople,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改人',
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
        fldName: clscc_CourseChapterEN.con_UpdDate,
        sortBy: clscc_CourseChapterEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrcc_CourseChapterExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrcc_CourseChapterExObjLst,
      arrDataColumn,
      clscc_CourseChapterEN.con_CourseChapterId,
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
   * @param arrcc_CourseChapterExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrcc_CourseChapterExObjLst: Array<clscc_CourseChapterENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clscc_CourseChapterEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrcc_CourseChapterExObjLst) {
        await cc_CourseChapterEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_cc_CourseChapter4Func(this.divList);
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
  public async BindGv_cc_CourseChapterCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_cc_CourseChapterCache.name;
    if (cc_CourseChapterCRUD.sortcc_CourseChapterBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortcc_CourseChapterBy)为空,请检查!(In BindGv_cc_CourseChapterCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objcc_CourseChapterCond = await this.Combinecc_CourseChapterConditionObj();
    const strWhereCond = JSON.stringify(objcc_CourseChapterCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrcc_CourseChapterExObjLst: Array<clscc_CourseChapterENEx> = [];
    try {
      this.recCount = await cc_CourseChapter_GetRecCountByCondCache(
        objcc_CourseChapterCond,
        cc_CourseChapterCRUD.CourseIdCache,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objcc_CourseChapterCond.whereCond,
        );
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objcc_CourseChapterCond.whereCond,
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
      if (cc_CourseChapterCRUD.sortFunStatic != undefined) {
        strSortFun = cc_CourseChapterCRUD.sortFunStatic(cc_CourseChapterCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: cc_CourseChapterCRUD.sortcc_CourseChapterBy,
        sortFun: strSortFun,
      };
      arrcc_CourseChapterExObjLst = await cc_CourseChapterEx_GetObjExLstByPagerCache(
        objPagerPara,
        cc_CourseChapterCRUD.CourseIdCache,
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
    if (arrcc_CourseChapterExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format(
        '{0}_{1}',
        clscc_CourseChapterEN._CurrTabName,
        cc_CourseChapterCRUD.CourseIdCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_cc_CourseChapter(divList, arrcc_CourseChapterExObjLst);
      //console.log("完成BindGv_cc_CourseChapterCache!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_cc_CourseChapter4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_cc_CourseChapter4Func.name;
    if (cc_CourseChapterCRUD.sortcc_CourseChapterBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortcc_CourseChapterBy)为空,请检查!(In BindGv_cc_CourseChapterCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objcc_CourseChapterCond = await this.Combinecc_CourseChapterConditionObj();
    objcc_CourseChapterCond.SetCondFldValue(
      clscc_CourseChapterEN.con_CourseId,
      cc_CourseChapterCRUD.CourseIdCache,
      '=',
    );
    const strWhereCond = JSON.stringify(objcc_CourseChapterCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrcc_CourseChapterExObjLst: Array<clscc_CourseChapterENEx> = [];
    try {
      this.recCount = await cc_CourseChapter_GetRecCountByCondCache(
        objcc_CourseChapterCond,
        cc_CourseChapterCRUD.CourseIdCache,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objcc_CourseChapterCond.whereCond,
        );
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objcc_CourseChapterCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (cc_CourseChapterCRUD.sortFunStatic != undefined) {
        strSortFun = cc_CourseChapterCRUD.sortFunStatic(cc_CourseChapterCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: cc_CourseChapterCRUD.sortcc_CourseChapterBy,
        sortFun: strSortFun,
      };
      arrcc_CourseChapterExObjLst = await cc_CourseChapterEx_GetObjExLstByPagerCache(
        objPagerPara,
        cc_CourseChapterCRUD.CourseIdCache,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrcc_CourseChapterExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clscc_CourseChapterEN._CurrTabName,
        cc_CourseChapterCRUD.CourseIdCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_cc_CourseChapter4Func(divList, arrcc_CourseChapterExObjLst);
      //console.log("完成BindGv_cc_CourseChapter4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
   * @param objcc_CourseChapterENS:源对象
   * @returns 目标对象=>clscc_CourseChapterEN:objcc_CourseChapterENT
   **/
  public CopyToEx(objcc_CourseChapterENS: clscc_CourseChapterEN): clscc_CourseChapterENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objcc_CourseChapterENT = new clscc_CourseChapterENEx();
    try {
      ObjectAssign(objcc_CourseChapterENT, objcc_CourseChapterENS);
      return objcc_CourseChapterENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objcc_CourseChapterENT;
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
  public SortFunExportExcel(a: clscc_CourseChapterEN, b: clscc_CourseChapterEN): number {
    if (a.memo == b.memo) return a.memo.localeCompare(b.memo);
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
      cc_CourseChapterCRUD.ascOrDesc4SortFun,
      cc_CourseChapterCRUD.sortcc_CourseChapterBy,
      strSortExpress,
    );
    cc_CourseChapterCRUD.sortcc_CourseChapterBy = sortBy;
    cc_CourseChapterCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    cc_CourseChapterCRUD.sortFunStatic = sortFun;
    await this.BindGv_cc_CourseChapter4Func(this.divList);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrCourseChapterId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrcc_CourseChapterObjLst = await cc_CourseChapter_GetObjLstByCourseChapterIdLstAsync(
        arrCourseChapterId,
      );
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrcc_CourseChapterObjLst) {
        const strMaxStrId = await cc_CourseChapter_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.courseChapterId = strMaxStrId;
        const returnBool = await cc_CourseChapter_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          cc_CourseChapter_ReFreshCache(cc_CourseChapterCRUD.CourseIdCache);
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
  public async DelMultiRecord(arrCourseChapterId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await cc_CourseChapter_Delcc_CourseChaptersAsync(arrCourseChapterId);
      if (returnInt > 0) {
        for (const strCourseChapterId of arrCourseChapterId) {
          cc_CourseChapter_ReFreshCache(cc_CourseChapterCRUD.CourseIdCache);
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
   * @param objcc_CourseChapter:需要显示的对象
   **/
  public Showcc_CourseChapterObj(
    divContainer: HTMLDivElement,
    objcc_CourseChapter: clscc_CourseChapterEN,
  ) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objcc_CourseChapter);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objcc_CourseChapter.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjcc_CourseChapterEN:表实体类对象
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
   * 课程章节名称 (Used In CombineCondition())
   **/
  public get courseChapterName_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtCourseChapterName_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 课程章节名称 (Used In CombineCondition())
   **/
  public set courseChapterName_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtCourseChapterName_q', value);
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
