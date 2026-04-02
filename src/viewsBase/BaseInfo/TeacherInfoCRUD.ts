/**
 * 类名:TeacherInfoCRUD(界面:TeacherInfoCRUD)
 * 表名:TeacherInfo(01120093)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 11:33:43
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { clsTeacherInfoENEx } from '@/ts/L0Entity/BaseInfo/clsTeacherInfoENEx';
import {
  TeacherInfo_GetRecCountByCondAsync,
  TeacherInfo_GetObjLstAsync,
  TeacherInfo_DelRecordAsync,
  TeacherInfo_GetObjByIdTeacherAsync,
  TeacherInfo_GetObjLstByIdTeacherLstAsync,
  TeacherInfo_GetMaxStrIdAsync,
  TeacherInfo_AddNewRecordAsync,
  TeacherInfo_DelTeacherInfosAsync,
} from '@/ts/L3ForWApi/BaseInfo/clsTeacherInfoWApi';
import {
  TeacherInfoEx_CopyToEx,
  TeacherInfoEx_FuncMapByFldName,
  TeacherInfoEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiExShare/BaseInfo/clsTeacherInfoExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { XzClg_BindDdl_IdXzCollegeByUserTypeInDivCache } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { RsStaffType_BindDdl_IdStaffTypeInDivCache } from '@/ts/L3ForWApi/SysPara/clsRsStaffTypeWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { teacherInfoStore } from '@/store/modulesShare/teacherInfo';
import { clsTeacherInfoEN } from '@/ts/L0Entity/BaseInfo/clsTeacherInfoEN';
import {
  BindTab,
  ObjectAssign,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
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
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
/**
 * 宣布一个用于导出Excel的函数,用于调用js端的导出Excel。
 **/
declare function exportSpecialExcel_pyf(arrData: any, strFileName: string): void;
/** TeacherInfoCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class TeacherInfoCRUD implements clsOperateList {
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

  public static UserTypeStatic = ''; //7、在查询区定义下拉框条件变量1
  public static objPageCRUD: TeacherInfoCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public static ascOrDesc4SortFun = 'Asc';
  public static sortTeacherInfoBy = '';
  constructor(divLayout: HTMLDivElement) {
    TeacherInfoCRUD.objPageCRUD = this;
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
    return clsTeacherInfoEN._CurrTabName;
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
      if (TeacherInfoCRUD.sortTeacherInfoBy == '')
        TeacherInfoCRUD.sortTeacherInfoBy = 'teacherName Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_TeacherInfo4Func(this.divList);
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
    await this.BindGv_TeacherInfo4Func(this.divList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrTeacherInfoObjLst: Array<clsTeacherInfoEN>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrTeacherInfoObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsTeacherInfoEN = arrTeacherInfoObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('教师({0})导出.xlsx', clsTeacherInfoEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData4Func)
   **/
  public CombineData4Func(
    arrTeacherInfoExObjLst: Array<clsTeacherInfoENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrTeacherInfoExObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j]);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsTeacherInfoENEx = arrTeacherInfoExObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('教师({0})导出.xlsx', clsTeacherInfoEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcel4Func)
   **/
  public async ExportExcel_TeacherInfo4Func() {
    const strThisFuncName = this.ExportExcel_TeacherInfo4Func.name;
    if (TeacherInfoCRUD.sortTeacherInfoBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortTeacherInfoBy)为空,请检查!(In BindGv_TeacherInfoCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strWhereCond = await this.CombineTeacherInfoCondition();
    let arrTeacherInfoObjLst: Array<clsTeacherInfoEN> = [];
    let arrTeacherInfoExObjLst: Array<clsTeacherInfoENEx> = [];
    try {
      this.recCount = await TeacherInfo_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrTeacherInfoObjLst = await TeacherInfo_GetObjLstAsync(strWhereCond);
      arrTeacherInfoExObjLst = arrTeacherInfoObjLst.map(TeacherInfoEx_CopyToEx);
    } catch (e) {
      const strMsg = `导出Excel时获取数据不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrTeacherInfoObjLst.length == 0) {
      const strKey = Format('{0}', clsTeacherInfoEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'registerPassword',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'RegisterPassword',
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
          fldName: 'idUniZone',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '校区名称',
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
          fldName: 'idTeacher',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '教师流水号',
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
          fldName: 'teacherName',
          sortBy: '',
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
          fldName: 'idSex',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '性别名称',
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
          fldName: 'idEthnic',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '民族名称',
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
          fldName: 'idPolitics',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '政治面貌',
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
          fldName: 'idAdminGrade',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '行政职务描述',
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
          fldName: 'idProfGrade',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '专业职称',
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
          fldName: 'idQualif',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学历流水号',
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
          fldName: 'idDegree',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学位流水号',
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
          fldName: 'idStaffType',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '职工类型流水号',
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
          fldName: 'staffTypeName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '职工类型名称',
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
          fldName: 'idProvince',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '省份流水号',
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
          fldName: 'cardNo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '卡号',
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
          fldName: 'birthday',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '出生日期',
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
          fldName: 'graduationMajor',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '毕业专业',
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
          fldName: 'telNo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '电话',
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
          fldName: 'email',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '电子邮箱',
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
          fldName: 'webSite',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '个人主页',
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
          fldName: 'personBlog',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '个人博客',
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
          fldName: 'entryDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '进校日期',
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
          fldName: 'offed',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否离校',
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
          fldName: 'isAvconUser',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'IsAvconUser',
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
          fldName: 'isGpUser',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否Gp用户',
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
          fldName: 'fromUnit',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '来自单位',
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
          fldName: 'memo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '备注',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 40,
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
          orderNum: 41,
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
          orderNum: 42,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'collegeNameA',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学院名称简写',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 43,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'idXzMajor',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '专业流水号',
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
          fldName: 'entryDay',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'EntryDay',
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
          fldName: 'idPhoto',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'id_Photo',
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
          fldName: 'idReligion',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'id_Religion',
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
          fldName: 'religionName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'ReligionName',
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
          fldName: 'isMessage',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'IsMessage',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 49,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
        {
          fldName: 'microblog',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'Microblog',
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
          fldName: 'offedBak',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'OffedBak',
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
          fldName: 'phoneNumber',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'PhoneNumber',
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
          fldName: 'qQ',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'QQ',
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
          fldName: 'teachIdCollege',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'Teach_id_College',
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
          fldName: 'teachIdMajor',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'Teach_id_Major',
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
          fldName: 'tel',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'Tel',
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
          fldName: 'modifyDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
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
          fldName: 'entryYear',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'EntryYear',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 58,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      try {
        await this.ExtendFldFuncMap(arrTeacherInfoExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      arrTeacherInfoObjLst = arrTeacherInfoObjLst.sort(this.SortFunExportExcel);
      this.CombineData(arrTeacherInfoObjLst, arrDataColumn);
      //console.log("完成BindGv_TeacherInfo!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 设置绑定下拉框，针对字段:[IdXzCollege]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdXzCollegeInDiv(strUserType: string) {
    if (IsNullOrEmpty(strUserType) == true) {
      const strMsg = Format('参数:[strUserType]不能为空!(In .SetDdl_IdXzCollegeInDiv)');
      console.error(strMsg);
      throw strMsg;
    }

    await XzClg_BindDdl_IdXzCollegeByUserTypeInDivCache(
      this.divQuery,
      'ddlIdXzCollege_q',
      strUserType,
      clsSysPara4WebApi.spIdSchool,
    ); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdStaffType]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdStaffTypeInDiv() {
    await RsStaffType_BindDdl_IdStaffTypeInDivCache(this.divQuery, 'ddlIdStaffType_q'); //
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    const UserTypeStatic = TeacherInfoCRUD.UserTypeStatic; //静态变量;//静态变量

    await this.SetDdl_IdXzCollegeInDiv(UserTypeStatic); //查询区域

    await this.SetDdl_IdStaffTypeInDiv(); //查询区域
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
      await this.BindGv_TeacherInfo4Func(this.divList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "strIdTeacher": 表关键字
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
      await this.BindGv_TeacherInfo4Func(this.divList);
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
  public async btnSelectRecordInTab_Click(strIdTeacher: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strIdTeacher) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strIdTeacher);
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
  public async DelRecord(strIdTeacher: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await TeacherInfo_DelRecordAsync(strIdTeacher);
      if (returnInt > 0) {
        await teacherInfoStore.delObj(strIdTeacher);
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
  public async SelectRecord(strIdTeacher: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objTeacherInfoEN = await TeacherInfo_GetObjByIdTeacherAsync(strIdTeacher);
      console.log('完成SelectRecord!', objTeacherInfoEN);
      Redirect('/Index/Main_TeacherInfo');
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
      await this.BindGv_TeacherInfo4Func(this.divList);
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
    await this.ExportExcel_TeacherInfo4Func();
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineTeacherInfoCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.teacherId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsTeacherInfoEN.con_TeacherId,
          this.teacherId_q,
        );
      }
      if (this.teacherName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsTeacherInfoEN.con_TeacherName,
          this.teacherName_q,
        );
      }
      if (this.idXzCollege_q != '' && this.idXzCollege_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTeacherInfoEN.con_IdXzCollege,
          this.idXzCollege_q,
        );
      }
      if (this.idStaffType_q != '' && this.idStaffType_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTeacherInfoEN.con_IdStaffType,
          this.idStaffType_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineTeacherInfoCondition)时出错!请联系管理员!{0}',
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
  public async CombineTeacherInfoConditionObj(): Promise<clsTeacherInfoEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objTeacherInfoCond = new clsTeacherInfoEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.teacherId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsTeacherInfoEN.con_TeacherId,
          this.teacherId_q,
        );
        objTeacherInfoCond.SetCondFldValue(
          clsTeacherInfoEN.con_TeacherId,
          this.teacherId_q,
          'like',
        );
      }
      if (this.teacherName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsTeacherInfoEN.con_TeacherName,
          this.teacherName_q,
        );
        objTeacherInfoCond.SetCondFldValue(
          clsTeacherInfoEN.con_TeacherName,
          this.teacherName_q,
          'like',
        );
      }
      if (this.idXzCollege_q != '' && this.idXzCollege_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTeacherInfoEN.con_IdXzCollege,
          this.idXzCollege_q,
        );
        objTeacherInfoCond.SetCondFldValue(
          clsTeacherInfoEN.con_IdXzCollege,
          this.idXzCollege_q,
          '=',
        );
      }
      if (this.idStaffType_q != '' && this.idStaffType_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTeacherInfoEN.con_IdStaffType,
          this.idStaffType_q,
        );
        objTeacherInfoCond.SetCondFldValue(
          clsTeacherInfoEN.con_IdStaffType,
          this.idStaffType_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineTeacherInfoConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objTeacherInfoCond.whereCond = strWhereCond;
    return objTeacherInfoCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj4ExportExcel)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineTeacherInfoConditionObj4ExportExcel(): Promise<clsTeacherInfoEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objTeacherInfoCond = new clsTeacherInfoENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.teacherId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsTeacherInfoEN.con_TeacherId,
          this.teacherId_q,
        );
        objTeacherInfoCond.SetCondFldValue(
          clsTeacherInfoEN.con_TeacherId,
          this.teacherId_q,
          'like',
        );
      }
      if (this.teacherName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsTeacherInfoEN.con_TeacherName,
          this.teacherName_q,
        );
        objTeacherInfoCond.SetCondFldValue(
          clsTeacherInfoEN.con_TeacherName,
          this.teacherName_q,
          'like',
        );
      }
      if (this.idXzCollege_q != '' && this.idXzCollege_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTeacherInfoEN.con_IdXzCollege,
          this.idXzCollege_q,
        );
        objTeacherInfoCond.SetCondFldValue(
          clsTeacherInfoEN.con_IdXzCollege,
          this.idXzCollege_q,
          '=',
        );
      }
      if (this.idStaffType_q != '' && this.idStaffType_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsTeacherInfoEN.con_IdStaffType,
          this.idStaffType_q,
        );
        objTeacherInfoCond.SetCondFldValue(
          clsTeacherInfoEN.con_IdStaffType,
          this.idStaffType_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0019)在组合导出Excel条件对象(CombineTeacherInfoConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objTeacherInfoCond.whereCond = strWhereCond;
    return objTeacherInfoCond;
  }

  /** 显示TeacherInfo对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrTeacherInfoObjLst:需要绑定的对象列表
   **/
  public async BindTab_TeacherInfo(
    divContainer: HTMLDivElement,
    arrTeacherInfoObjLst: Array<clsTeacherInfoEN>,
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
        fldName: clsTeacherInfoEN.con_TeacherName,
        sortBy: clsTeacherInfoEN.con_TeacherName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '教师姓名',
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
        fldName: clsTeacherInfoENEx.con_EthnicName,
        sortBy: 'ethnicName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '民族名称',
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
        fldName: clsTeacherInfoENEx.con_PoliticsName,
        sortBy: 'politicsName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '政治面貌',
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
        fldName: clsTeacherInfoENEx.con_AdminGradeDesc,
        sortBy: 'adminGradeDesc',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '行政职务描述',
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
        fldName: clsTeacherInfoENEx.con_ProfenssionalGradeName,
        sortBy: 'profenssionalGradeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业职称',
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
        fldName: clsTeacherInfoENEx.con_StaffTypeName,
        sortBy: 'staffTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '职工类型名称',
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
        fldName: clsTeacherInfoEN.con_CardNo,
        sortBy: clsTeacherInfoEN.con_CardNo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '卡号',
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
        fldName: clsTeacherInfoENEx.con_CollegeName,
        sortBy: 'collegeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院名称',
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
        fldName: clsTeacherInfoENEx.con_DateTimeSim,
        sortBy: 'dateTimeSim',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '简化日期时间',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    await BindTab(
      divDataLst,
      arrTeacherInfoObjLst,
      arrDataColumn,
      clsTeacherInfoEN.con_IdTeacher,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 显示TeacherInfo对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrTeacherInfoExObjLst:需要绑定的对象列表
   **/
  public async BindTab_TeacherInfo4Func(
    divContainer: HTMLDivElement,
    arrTeacherInfoExObjLst: Array<clsTeacherInfoENEx>,
  ) {
    const strThisFuncName = this.BindTab_TeacherInfo4Func.name;
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
        fldName: clsTeacherInfoEN.con_TeacherName,
        sortBy: clsTeacherInfoEN.con_TeacherName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '教师姓名',
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
        fldName: clsTeacherInfoENEx.con_EthnicName,
        sortBy: 'ethnicName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '民族名称',
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
        fldName: clsTeacherInfoENEx.con_PoliticsName,
        sortBy: 'politicsName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '政治面貌',
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
        fldName: clsTeacherInfoENEx.con_AdminGradeDesc,
        sortBy: 'adminGradeDesc',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '行政职务描述',
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
        fldName: clsTeacherInfoENEx.con_ProfenssionalGradeName,
        sortBy: 'profenssionalGradeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业职称',
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
        fldName: clsTeacherInfoENEx.con_StaffTypeName,
        sortBy: 'staffTypeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '职工类型名称',
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
        fldName: clsTeacherInfoEN.con_CardNo,
        sortBy: clsTeacherInfoEN.con_CardNo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '卡号',
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
        fldName: clsTeacherInfoENEx.con_CollegeName,
        sortBy: 'collegeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院名称',
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
        fldName: clsTeacherInfoENEx.con_DateTimeSim,
        sortBy: 'dateTimeSim',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '简化日期时间',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrTeacherInfoExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrTeacherInfoExObjLst,
      arrDataColumn,
      clsTeacherInfoEN.con_IdTeacher,
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
   * @param arrTeacherInfoExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrTeacherInfoExObjLst: Array<clsTeacherInfoENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsTeacherInfoEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrTeacherInfoExObjLst) {
        await TeacherInfoEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_TeacherInfo4Func(this.divList);
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
  public async BindGv_TeacherInfoCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_TeacherInfoCache.name;
    if (TeacherInfoCRUD.sortTeacherInfoBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortTeacherInfoBy)为空,请检查!(In BindGv_TeacherInfoCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objTeacherInfoCond = await this.CombineTeacherInfoConditionObj();
    const strWhereCond = JSON.stringify(objTeacherInfoCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrTeacherInfoExObjLst: Array<clsTeacherInfoENEx> = [];
    try {
      this.recCount = await TeacherInfo_GetRecCountByCondAsync(strWhereCond);
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
        orderBy: TeacherInfoCRUD.sortTeacherInfoBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrTeacherInfoExObjLst = await TeacherInfoEx_GetObjExLstByPagerAsync(objPagerPara);
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
    if (arrTeacherInfoExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format('{0}', clsTeacherInfoEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_TeacherInfo(divList, arrTeacherInfoExObjLst);
      //console.log("完成BindGv_TeacherInfoCache!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_TeacherInfo4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_TeacherInfo4Func.name;
    if (TeacherInfoCRUD.sortTeacherInfoBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortTeacherInfoBy)为空,请检查!(In BindGv_TeacherInfoCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombineTeacherInfoCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrTeacherInfoExObjLst: Array<clsTeacherInfoENEx> = [];
    try {
      this.recCount = await TeacherInfo_GetRecCountByCondAsync(strWhereCond);
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

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: TeacherInfoCRUD.sortTeacherInfoBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrTeacherInfoExObjLst = await TeacherInfoEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrTeacherInfoExObjLst.length == 0) {
      const strKey = Format('{0}', clsTeacherInfoEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_TeacherInfo4Func(divList, arrTeacherInfoExObjLst);
      //console.log("完成BindGv_TeacherInfo4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
   * @param objTeacherInfoENS:源对象
   * @returns 目标对象=>clsTeacherInfoEN:objTeacherInfoENT
   **/
  public CopyToEx(objTeacherInfoENS: clsTeacherInfoEN): clsTeacherInfoENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objTeacherInfoENT = new clsTeacherInfoENEx();
    try {
      ObjectAssign(objTeacherInfoENT, objTeacherInfoENS);
      return objTeacherInfoENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objTeacherInfoENT;
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
  public SortFunExportExcel(a: clsTeacherInfoEN, b: clsTeacherInfoEN): number {
    if (a.isGpUser == b.isGpUser) return a.isGpUser ? -1 : 1;
    else return a.memo.localeCompare(b.memo);
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
      TeacherInfoCRUD.ascOrDesc4SortFun,
      TeacherInfoCRUD.sortTeacherInfoBy,
      strSortExpress,
    );
    TeacherInfoCRUD.sortTeacherInfoBy = sortBy;
    TeacherInfoCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    TeacherInfoCRUD.sortFunStatic = sortFun;
    await this.BindGv_TeacherInfo4Func(this.divList);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrIdTeacher: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrTeacherInfoObjLst = await TeacherInfo_GetObjLstByIdTeacherLstAsync(arrIdTeacher);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrTeacherInfoObjLst) {
        const strMaxStrId = await TeacherInfo_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.idTeacher = strMaxStrId;
        const returnBool = await TeacherInfo_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
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
  public async DelMultiRecord(arrIdTeacher: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await TeacherInfo_DelTeacherInfosAsync(arrIdTeacher);
      if (returnInt > 0) {
        for (const strIdTeacher of arrIdTeacher) {
          await teacherInfoStore.delObj(strIdTeacher);
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
   * @param objTeacherInfo:需要显示的对象
   **/
  public ShowTeacherInfoObj(divContainer: HTMLDivElement, objTeacherInfo: clsTeacherInfoEN) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objTeacherInfo);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objTeacherInfo.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjTeacherInfoEN:表实体类对象
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
   * 职工类型流水号 (Used In CombineCondition())
   **/
  public get idStaffType_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlIdStaffType_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 职工类型流水号 (Used In CombineCondition())
   **/
  public set idStaffType_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlIdStaffType_q', value);
  }
  /**
   * 学院流水号 (Used In CombineCondition())
   **/
  public get idXzCollege_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlIdXzCollege_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 学院流水号 (Used In CombineCondition())
   **/
  public set idXzCollege_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlIdXzCollege_q', value);
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
