/**
 * 类名:CurrEduClsTeacherCRUD(界面:CurrEduClsTeacherCRUD)
 * 表名:CurrEduClsTeacher(01120124)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 11:33:42
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:日常运行(DailyRunning)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import {
  vCurrEduClsTeacher_GetRecCountByCondCache,
  vCurrEduClsTeacher_GetSubObjLstCache,
  vCurrEduClsTeacher_GetObjByIdEduClsTeacherAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import { SchoolTerm_BindDdl_SchoolTermInDivCache } from '@/ts/L3ForWApi/SysPara/clsSchoolTermWApi';
import { SchoolYear_BindDdl_SchoolYearInDivCache } from '@/ts/L3ForWApi/SysPara/clsSchoolYearWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  CurrEduClsTeacher_DelRecordAsync,
  CurrEduClsTeacher_ReFreshCache,
  CurrEduClsTeacher_GetObjLstByIdEduClsTeacherLstAsync,
  CurrEduClsTeacher_AddNewRecordAsync,
  CurrEduClsTeacher_DelCurrEduClsTeachersAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsTeacherWApi';
import { clsvCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherEN';
import { clsvCurrEduClsTeacherENEx } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherENEx';
import {
  BindTab_V,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  vCurrEduClsTeacherEx_FuncMapByFldName,
  vCurrEduClsTeacherEx_GetObjExLstByPagerCache,
} from '@/ts/L3ForWApiExShare/DailyRunning/clsvCurrEduClsTeacherExWApi';
import { clsCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherEN';
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
/** CurrEduClsTeacherCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class CurrEduClsTeacherCRUD implements clsOperateList {
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

  public static CourseIdCache = ''; //6、定义下拉框条件变量1
  public static IdCurrEduClsCache = ''; //2、界面主表的缓存分类字段变量1
  public static objPageCRUD: CurrEduClsTeacherCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public static ascOrDesc4SortFun = 'Asc';
  public static sortvCurrEduClsTeacherBy = '';
  constructor(divLayout: HTMLDivElement) {
    CurrEduClsTeacherCRUD.objPageCRUD = this;
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
    return clsCurrEduClsTeacherEN._CurrTabName;
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
      if (CurrEduClsTeacherCRUD.sortvCurrEduClsTeacherBy == '')
        CurrEduClsTeacherCRUD.sortvCurrEduClsTeacherBy = 'eduClsName Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vCurrEduClsTeacherCache(this.divList);
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
    await this.BindGv_vCurrEduClsTeacherCache(this.divList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrvCurrEduClsTeacherObjLst: Array<clsvCurrEduClsTeacherEN>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrvCurrEduClsTeacherObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsvCurrEduClsTeacherEN = arrvCurrEduClsTeacherObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format(
      '当前教学班教师({0})导出.xlsx',
      clsvCurrEduClsTeacherEN._CurrTabName,
    );
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcelCache)
   **/
  public async ExportExcel_vCurrEduClsTeacherCache() {
    const strThisFuncName = this.ExportExcel_vCurrEduClsTeacherCache.name;
    if (CurrEduClsTeacherCRUD.sortvCurrEduClsTeacherBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvCurrEduClsTeacherBy)为空,请检查!(In BindGv_vCurrEduClsTeacherCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objvCurrEduClsTeacherCond =
      await this.CombinevCurrEduClsTeacherConditionObj4ExportExcel();
    objvCurrEduClsTeacherCond.SetCondFldValue(
      clsvCurrEduClsTeacherEN.con_IdCurrEduCls,
      CurrEduClsTeacherCRUD.IdCurrEduClsCache,
      '=',
    );
    let arrvCurrEduClsTeacherObjLst: Array<clsvCurrEduClsTeacherEN> = [];
    try {
      this.recCount = await vCurrEduClsTeacher_GetRecCountByCondCache(
        objvCurrEduClsTeacherCond,
        CurrEduClsTeacherCRUD.IdCurrEduClsCache,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objvCurrEduClsTeacherCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrvCurrEduClsTeacherObjLst = await vCurrEduClsTeacher_GetSubObjLstCache(
        objvCurrEduClsTeacherCond,
        CurrEduClsTeacherCRUD.IdCurrEduClsCache,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrvCurrEduClsTeacherObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsCurrEduClsTeacherEN._CurrTabName,
        CurrEduClsTeacherCRUD.IdCurrEduClsCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'idCurrEduCls',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '当前教学班流水号',
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
          fldName: 'eduClsName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '教学班名称',
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
          fldName: 'courseCode',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '课程代码',
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
          fldName: 'courseName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '课程名称',
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
          fldName: 'teachingSolutionName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '教学方案名称',
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
          fldName: 'idXzCollege',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学院流水号',
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
          fldName: 'collegeName4EduCls',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学院名_教学班',
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
          fldName: 'idEduWay',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '教学方式流水号',
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
          fldName: 'totalLessonQty',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '总课时数',
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
          fldName: 'maxStuQty',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '最大学生数',
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
          fldName: 'weekQty',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '总周数',
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
          fldName: 'scheUnitPW',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '周排课次数',
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
          fldName: 'customerWeek',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '自定义上课周',
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
          fldName: 'lessonQtyPerWeek',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '周课时数',
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
          fldName: 'idUniZone',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '校区流水号',
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
          fldName: 'idGradeBase',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '年级流水号',
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
          fldName: 'gradeBaseName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '年级名称',
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
          fldName: 'isEffective',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否有效',
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
          fldName: 'idCourseType',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '课程类型流水号',
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
          fldName: 'courseTypeName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '课程类型名称',
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
          fldName: 'isDegree',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否学位课',
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
          fldName: 'idScoreType',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '成绩类型流水号',
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
          fldName: 'isProportionalCtrl',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否比例控制',
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
          fldName: 'idExamType',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '考试方式流水号',
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
          fldName: 'beginWeek',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '开始周',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 44,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'currStuNum',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '当前学生数',
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
          fldName: 'idTeacher',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '教师流水号',
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
          fldName: 'teacherName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '教师姓名',
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
          fldName: 'birthday',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '出生日期',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 51,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'collegeName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学院名称',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 52,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'collegeName4Teacher',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学院名_教师',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 53,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'degreeName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学位名称',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 54,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'idProfGrade',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '专业职称流水号',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 55,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'profenssionalGradeName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '专业职称',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 56,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'isGpUser',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否Gp用户',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 57,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'idPk2EduClsTeacherType',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '教学班老师角色(主讲,辅导)流水号',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 58,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'eduClsTeacherTypeDesc',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '教学班教师类型名',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 60,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'schoolTerm',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学期',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 61,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'schoolYear',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学年',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 62,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'openBeginDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '开放开始日期',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 63,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'openEndDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '开放结束日期',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 64,
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
          orderNum: 65,
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
          orderNum: 66,
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
          orderNum: 67,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      arrvCurrEduClsTeacherObjLst = arrvCurrEduClsTeacherObjLst.sort(this.SortFunExportExcel);
      this.CombineData(arrvCurrEduClsTeacherObjLst, arrDataColumn);
      //console.log("完成BindGv_vCurrEduClsTeacher!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 设置绑定下拉框，针对字段:[SchoolTerm]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_SchoolTermInDiv() {
    await SchoolTerm_BindDdl_SchoolTermInDivCache(this.divQuery, 'ddlSchoolTerm_q'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[SchoolYear]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_SchoolYearInDiv() {
    await SchoolYear_BindDdl_SchoolYearInDivCache(this.divQuery, 'ddlSchoolYear_q'); //
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    await this.SetDdl_SchoolTermInDiv(); //查询区域

    await this.SetDdl_SchoolYearInDiv(); //查询区域
  }

  /** 函数功能:为功能区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4FeatureRegion)
   **/
  public async BindDdl4FeatureRegion() {}

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
      await this.BindGv_vCurrEduClsTeacherCache(this.divList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "lngIdEduClsTeacher": 表关键字
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
      const lngKeyId = Number(strKeyId);
      await this.DelRecord(lngKeyId);
      await this.BindGv_vCurrEduClsTeacherCache(this.divList);
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
  public async btnSelectRecordInTab_Click(lngIdEduClsTeacher: number) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (lngIdEduClsTeacher == 0) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(lngIdEduClsTeacher);
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
  public async DelRecord(lngIdEduClsTeacher: number) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await CurrEduClsTeacher_DelRecordAsync(lngIdEduClsTeacher);
      if (returnInt > 0) {
        CurrEduClsTeacher_ReFreshCache(CurrEduClsTeacherCRUD.IdCurrEduClsCache);
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
  public async SelectRecord(lngIdEduClsTeacher: number) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objCurrEduClsTeacherEN = await vCurrEduClsTeacher_GetObjByIdEduClsTeacherAsync(
        lngIdEduClsTeacher,
      );
      console.log('完成SelectRecord!', objCurrEduClsTeacherEN);
      Redirect('/Index/Main_vCurrEduClsTeacher');
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
      await this.BindGv_vCurrEduClsTeacherCache(this.divList);
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
    await this.ExportExcel_vCurrEduClsTeacherCache();
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevCurrEduClsTeacherCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.currEduClsId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvCurrEduClsTeacherEN.con_CurrEduClsId,
          this.currEduClsId_q,
        );
      }
      if (this.eduClsName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvCurrEduClsTeacherEN.con_EduClsName,
          this.eduClsName_q,
        );
      }
      if (this.teacherId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvCurrEduClsTeacherEN.con_TeacherId,
          this.teacherId_q,
        );
      }
      if (this.teacherName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvCurrEduClsTeacherEN.con_TeacherName,
          this.teacherName_q,
        );
      }
      if (this.schoolTerm_q != '' && this.schoolTerm_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvCurrEduClsTeacherEN.con_SchoolTerm,
          this.schoolTerm_q,
        );
      }
      if (this.schoolYear_q != '' && this.schoolYear_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvCurrEduClsTeacherEN.con_SchoolYear,
          this.schoolYear_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineCurrEduClsTeacherCondition)时出错!请联系管理员!{0}',
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
  public async CombinevCurrEduClsTeacherConditionObj(): Promise<clsvCurrEduClsTeacherEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvCurrEduClsTeacherCond = new clsvCurrEduClsTeacherEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.currEduClsId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvCurrEduClsTeacherEN.con_CurrEduClsId,
          this.currEduClsId_q,
        );
        objvCurrEduClsTeacherCond.SetCondFldValue(
          clsvCurrEduClsTeacherEN.con_CurrEduClsId,
          this.currEduClsId_q,
          'like',
        );
      }
      if (this.eduClsName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvCurrEduClsTeacherEN.con_EduClsName,
          this.eduClsName_q,
        );
        objvCurrEduClsTeacherCond.SetCondFldValue(
          clsvCurrEduClsTeacherEN.con_EduClsName,
          this.eduClsName_q,
          'like',
        );
      }
      if (this.teacherId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvCurrEduClsTeacherEN.con_TeacherId,
          this.teacherId_q,
        );
        objvCurrEduClsTeacherCond.SetCondFldValue(
          clsvCurrEduClsTeacherEN.con_TeacherId,
          this.teacherId_q,
          'like',
        );
      }
      if (this.teacherName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvCurrEduClsTeacherEN.con_TeacherName,
          this.teacherName_q,
        );
        objvCurrEduClsTeacherCond.SetCondFldValue(
          clsvCurrEduClsTeacherEN.con_TeacherName,
          this.teacherName_q,
          'like',
        );
      }
      if (this.schoolTerm_q != '' && this.schoolTerm_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvCurrEduClsTeacherEN.con_SchoolTerm,
          this.schoolTerm_q,
        );
        objvCurrEduClsTeacherCond.SetCondFldValue(
          clsvCurrEduClsTeacherEN.con_SchoolTerm,
          this.schoolTerm_q,
          '=',
        );
      }
      if (this.schoolYear_q != '' && this.schoolYear_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvCurrEduClsTeacherEN.con_SchoolYear,
          this.schoolYear_q,
        );
        objvCurrEduClsTeacherCond.SetCondFldValue(
          clsvCurrEduClsTeacherEN.con_SchoolYear,
          this.schoolYear_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineCurrEduClsTeacherConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvCurrEduClsTeacherCond.whereCond = strWhereCond;
    return objvCurrEduClsTeacherCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj4ExportExcel)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevCurrEduClsTeacherConditionObj4ExportExcel(): Promise<clsvCurrEduClsTeacherEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvCurrEduClsTeacherCond = new clsvCurrEduClsTeacherENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.currEduClsId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvCurrEduClsTeacherEN.con_CurrEduClsId,
          this.currEduClsId_q,
        );
        objvCurrEduClsTeacherCond.SetCondFldValue(
          clsvCurrEduClsTeacherEN.con_CurrEduClsId,
          this.currEduClsId_q,
          'like',
        );
      }
      if (this.eduClsName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvCurrEduClsTeacherEN.con_EduClsName,
          this.eduClsName_q,
        );
        objvCurrEduClsTeacherCond.SetCondFldValue(
          clsvCurrEduClsTeacherEN.con_EduClsName,
          this.eduClsName_q,
          'like',
        );
      }
      if (this.teacherId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvCurrEduClsTeacherEN.con_TeacherId,
          this.teacherId_q,
        );
        objvCurrEduClsTeacherCond.SetCondFldValue(
          clsvCurrEduClsTeacherEN.con_TeacherId,
          this.teacherId_q,
          'like',
        );
      }
      if (this.teacherName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvCurrEduClsTeacherEN.con_TeacherName,
          this.teacherName_q,
        );
        objvCurrEduClsTeacherCond.SetCondFldValue(
          clsvCurrEduClsTeacherEN.con_TeacherName,
          this.teacherName_q,
          'like',
        );
      }
      if (this.schoolTerm_q != '' && this.schoolTerm_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvCurrEduClsTeacherEN.con_SchoolTerm,
          this.schoolTerm_q,
        );
        objvCurrEduClsTeacherCond.SetCondFldValue(
          clsvCurrEduClsTeacherEN.con_SchoolTerm,
          this.schoolTerm_q,
          '=',
        );
      }
      if (this.schoolYear_q != '' && this.schoolYear_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvCurrEduClsTeacherEN.con_SchoolYear,
          this.schoolYear_q,
        );
        objvCurrEduClsTeacherCond.SetCondFldValue(
          clsvCurrEduClsTeacherEN.con_SchoolYear,
          this.schoolYear_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0019)在组合导出Excel条件对象(CombineCurrEduClsTeacherConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvCurrEduClsTeacherCond.whereCond = strWhereCond;
    return objvCurrEduClsTeacherCond;
  }

  /** 显示vCurrEduClsTeacher对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrCurrEduClsTeacherObjLst:需要绑定的对象列表
   **/
  public async BindTab_vCurrEduClsTeacher(
    divContainer: HTMLDivElement,
    arrvCurrEduClsTeacherObjLst: Array<clsvCurrEduClsTeacherEN>,
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
        fldName: clsvCurrEduClsTeacherEN.con_EduClsName,
        sortBy: 'eduClsName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '教学班名',
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
        fldName: clsvCurrEduClsTeacherEN.con_CourseName,
        sortBy: 'courseName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程名称',
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
        fldName: clsvCurrEduClsTeacherEN.con_TeacherName,
        sortBy: 'teacherName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '教师姓名',
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
        fldName: clsvCurrEduClsTeacherEN.con_CollegeName,
        sortBy: 'collegeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院名',
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
        fldName: clsvCurrEduClsTeacherEN.con_SchoolTerm,
        sortBy: clsvCurrEduClsTeacherEN.con_SchoolTerm,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学期',
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
        fldName: clsvCurrEduClsTeacherEN.con_SchoolYear,
        sortBy: clsvCurrEduClsTeacherEN.con_SchoolYear,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学年',
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
        fldName: clsvCurrEduClsTeacherEN.con_UpdDate,
        sortBy: clsvCurrEduClsTeacherEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '编辑日期',
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
        fldName: clsvCurrEduClsTeacherEN.con_UpdUser,
        sortBy: clsvCurrEduClsTeacherEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '编辑人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    await BindTab_V(
      divDataLst,
      arrvCurrEduClsTeacherObjLst,
      arrDataColumn,
      clsvCurrEduClsTeacherEN.con_IdEduClsTeacher,
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
   * @param arrvCurrEduClsTeacherExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrvCurrEduClsTeacherExObjLst: Array<clsvCurrEduClsTeacherENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsvCurrEduClsTeacherEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrvCurrEduClsTeacherExObjLst) {
        await vCurrEduClsTeacherEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_vCurrEduClsTeacherCache(this.divList);
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
  public async BindGv_vCurrEduClsTeacherCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_vCurrEduClsTeacherCache.name;
    if (CurrEduClsTeacherCRUD.sortvCurrEduClsTeacherBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvCurrEduClsTeacherBy)为空,请检查!(In BindGv_vCurrEduClsTeacherCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objvCurrEduClsTeacherCond = await this.CombinevCurrEduClsTeacherConditionObj();
    const strWhereCond = JSON.stringify(objvCurrEduClsTeacherCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvCurrEduClsTeacherExObjLst: Array<clsvCurrEduClsTeacherENEx> = [];
    try {
      this.recCount = await vCurrEduClsTeacher_GetRecCountByCondCache(
        objvCurrEduClsTeacherCond,
        CurrEduClsTeacherCRUD.IdCurrEduClsCache,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objvCurrEduClsTeacherCond.whereCond,
        );
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objvCurrEduClsTeacherCond.whereCond,
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
      if (CurrEduClsTeacherCRUD.sortFunStatic != undefined) {
        strSortFun = CurrEduClsTeacherCRUD.sortFunStatic(CurrEduClsTeacherCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: CurrEduClsTeacherCRUD.sortvCurrEduClsTeacherBy,
        sortFun: strSortFun,
      };
      arrvCurrEduClsTeacherExObjLst = await vCurrEduClsTeacherEx_GetObjExLstByPagerCache(
        objPagerPara,
        CurrEduClsTeacherCRUD.IdCurrEduClsCache,
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
    if (arrvCurrEduClsTeacherExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format(
        '{0}_{1}',
        clsCurrEduClsTeacherEN._CurrTabName,
        CurrEduClsTeacherCRUD.IdCurrEduClsCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_vCurrEduClsTeacher(divList, arrvCurrEduClsTeacherExObjLst);
      //console.log("完成BindGv_vCurrEduClsTeacherCache!");
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
  public SortFunExportExcel(a: clsvCurrEduClsTeacherEN, b: clsvCurrEduClsTeacherEN): number {
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
      CurrEduClsTeacherCRUD.ascOrDesc4SortFun,
      CurrEduClsTeacherCRUD.sortvCurrEduClsTeacherBy,
      strSortExpress,
    );
    CurrEduClsTeacherCRUD.sortvCurrEduClsTeacherBy = sortBy;
    CurrEduClsTeacherCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    CurrEduClsTeacherCRUD.sortFunStatic = sortFun;
    await this.BindGv_vCurrEduClsTeacherCache(this.divList);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrIdEduClsTeacher: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrCurrEduClsTeacherObjLst = await CurrEduClsTeacher_GetObjLstByIdEduClsTeacherLstAsync(
        arrIdEduClsTeacher,
      );
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrCurrEduClsTeacherObjLst) {
        const returnBool = await CurrEduClsTeacher_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          CurrEduClsTeacher_ReFreshCache(CurrEduClsTeacherCRUD.IdCurrEduClsCache);
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
  public async DelMultiRecord(arrIdEduClsTeacher: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await CurrEduClsTeacher_DelCurrEduClsTeachersAsync(arrIdEduClsTeacher);
      if (returnInt > 0) {
        for (const lngIdEduClsTeacher of arrIdEduClsTeacher) {
          CurrEduClsTeacher_ReFreshCache(CurrEduClsTeacherCRUD.IdCurrEduClsCache);
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
   * @param objCurrEduClsTeacher:需要显示的对象
   **/
  public ShowCurrEduClsTeacherObj(
    divContainer: HTMLDivElement,
    objCurrEduClsTeacher: clsCurrEduClsTeacherEN,
  ) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objCurrEduClsTeacher);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objCurrEduClsTeacher.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjCurrEduClsTeacherEN:表实体类对象
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
   * 教学班Id (Used In CombineCondition())
   **/
  public get currEduClsId_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtCurrEduClsId_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 教学班Id (Used In CombineCondition())
   **/
  public set currEduClsId_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtCurrEduClsId_q', value);
  }
  /**
   * 教学班名 (Used In CombineCondition())
   **/
  public get eduClsName_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtEduClsName_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 教学班名 (Used In CombineCondition())
   **/
  public set eduClsName_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtEduClsName_q', value);
  }
  /**
   * 学期 (Used In CombineCondition())
   **/
  public get schoolTerm_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlSchoolTerm_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 学期 (Used In CombineCondition())
   **/
  public set schoolTerm_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlSchoolTerm_q', value);
  }
  /**
   * 学年 (Used In CombineCondition())
   **/
  public get schoolYear_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlSchoolYear_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 学年 (Used In CombineCondition())
   **/
  public set schoolYear_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlSchoolYear_q', value);
  }
  /**
   * 教师工号 (Used In CombineCondition())
   **/
  public get teacherId_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtTeacherId_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 教师工号 (Used In CombineCondition())
   **/
  public set teacherId_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtTeacherId_q', value);
  }
  /**
   * 教师姓名 (Used In CombineCondition())
   **/
  public get teacherName_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtTeacherName_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 教师姓名 (Used In CombineCondition())
   **/
  public set teacherName_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtTeacherName_q', value);
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
