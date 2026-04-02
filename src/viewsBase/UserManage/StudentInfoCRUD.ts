/**
 * 类名:StudentInfoCRUD(界面:StudentInfoCRUD)
 * 表名:StudentInfo(01120131)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 11:33:45
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import {
  GetSelectObjInDivObj,
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
import { clsStudentInfoENEx } from '@/ts/L0Entity/UserManage/clsStudentInfoENEx';
import {
  StudentInfo_GetRecCountByCondCache,
  StudentInfo_GetSubObjLstCache,
  StudentInfo_DelRecordAsync,
  StudentInfo_ReFreshCache,
  StudentInfo_GetObjByIdStudentInfoAsync,
  StudentInfo_GetObjLstByIdStudentInfoLstAsync,
  StudentInfo_GetMaxStrIdAsync,
  StudentInfo_AddNewRecordAsync,
  StudentInfo_DelStudentInfosAsync,
} from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';
import {
  StudentInfoEx_CopyToEx,
  StudentInfoEx_FuncMapByFldName,
  StudentInfoEx_GetObjExLstByPagerCache,
} from '@/ts/L3ForWApiEx/UserManage/clsStudentInfoExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { XzClg_BindDdl_IdXzCollegeByUserTypeInDivCache } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { XzGradeBase_BindDdl_IdGradeBaseInDivCache } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { XzGrade_BindDdl_IdGradeInDivCache } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
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
/** StudentInfoCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class StudentInfoCRUD implements clsOperateList {
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

  public static IdXzCollegeStatic = ''; //7、在查询区定义下拉框条件变量1
  public static UserTypeStatic = ''; //7、在查询区定义下拉框条件变量1
  public static objPageCRUD: StudentInfoCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public static ascOrDesc4SortFun = 'Asc';
  public static sortStudentInfoBy = '';
  constructor(divLayout: HTMLDivElement) {
    StudentInfoCRUD.objPageCRUD = this;
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
    return clsStudentInfoEN._CurrTabName;
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

  /** 函数功能:系统生成的Change事件函数
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript+<>c__DisplayClass123_0:<Gen_WApi_Ts_GeneEventFunc>b__1)
   **/
  public abstract ddlIdXzCollegeq_SelectedIndexChanged(): void; //

  /** 函数功能:设置事件函数
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetEventFunc)
   **/
  public async SetEventFunc() {
    const strThisFuncName = this.SetEventFunc.name;
    // 在此处放置用户代码以初始化页面
    try {
      const ddlIdXzCollege_q: HTMLSelectElement = GetSelectObjInDivObj(
        this.divQuery,
        'ddlIdXzCollege_q',
      );
      ddlIdXzCollege_q.addEventListener('change', (e) => {
        console.error(e);
        this.ddlIdXzCollegeq_SelectedIndexChanged();
      });
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
      if (StudentInfoCRUD.sortStudentInfoBy == '') StudentInfoCRUD.sortStudentInfoBy = 'stuId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_StudentInfo4Func(this.divList);
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
    await this.BindGv_StudentInfo4Func(this.divList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrStudentInfoObjLst: Array<clsStudentInfoEN>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrStudentInfoObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsStudentInfoEN = arrStudentInfoObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('学生({0})导出.xlsx', clsStudentInfoEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData4Func)
   **/
  public CombineData4Func(
    arrStudentInfoExObjLst: Array<clsStudentInfoENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrStudentInfoExObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j]);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsStudentInfoENEx = arrStudentInfoExObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('学生({0})导出.xlsx', clsStudentInfoEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcel4Func)
   **/
  public async ExportExcel_StudentInfo4Func() {
    const strThisFuncName = this.ExportExcel_StudentInfo4Func.name;
    if (StudentInfoCRUD.sortStudentInfoBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortStudentInfoBy)为空,请检查!(In BindGv_StudentInfoCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objStudentInfoCond = await this.CombineStudentInfoConditionObj4ExportExcel();
    let arrStudentInfoObjLst: Array<clsStudentInfoEN> = [];
    let arrStudentInfoExObjLst: Array<clsStudentInfoENEx> = [];
    try {
      this.recCount = await StudentInfo_GetRecCountByCondCache(objStudentInfoCond);
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objStudentInfoCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrStudentInfoObjLst = await StudentInfo_GetSubObjLstCache(objStudentInfoCond);
      arrStudentInfoExObjLst = arrStudentInfoObjLst.map(StudentInfoEx_CopyToEx);
    } catch (e) {
      const strMsg = `导出Excel时获取数据不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrStudentInfoObjLst.length == 0) {
      const strKey = Format('{0}', clsStudentInfoEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'idStudentInfo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学生流水号',
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
          fldName: 'stuId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学号',
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
          fldName: 'stuName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '姓名',
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
          fldName: 'idUniZone',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '校区名称',
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
          fldName: 'idXzCollege',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学院名称',
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
          fldName: 'idXzMajor',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '专业名称',
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
          fldName: 'idGradeBase',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '年级名称',
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
          fldName: 'idSex',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '性别名称',
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
          fldName: 'birthday',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '出生日期',
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
          fldName: 'liveAddress',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '居住地址',
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
          fldName: 'homePhone',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '住宅电话',
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
          fldName: 'isGpUser',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否Gp用户',
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
          fldName: 'isLeaved',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'IsLeaved',
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
          fldName: 'enrollmentDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '入校日期',
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
          fldName: 'postCode',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '邮编',
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
          fldName: 'email',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '电子邮箱',
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
          fldName: 'phoneNumber',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'PhoneNumber',
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
          fldName: 'registerPassword',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'RegisterPassword',
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
          fldName: 'updUser',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改人',
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
          fldName: 'memo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '备注',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 21,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      try {
        await this.ExtendFldFuncMap(arrStudentInfoExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      arrStudentInfoObjLst = arrStudentInfoObjLst.sort(this.SortFunExportExcel);
      this.CombineData(arrStudentInfoObjLst, arrDataColumn);
      //console.log("完成BindGv_StudentInfo!");
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
   * 设置绑定下拉框，针对字段:[IdXzMajor]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdXzMajorInDiv(strIdXzCollege: string) {
    if (IsNullOrEmpty(strIdXzCollege) == true) {
      const strMsg = Format('参数:[strIdXzCollege]不能为空!(In .SetDdl_IdXzMajorInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strIdXzCollege.length != 4) {
      const strMsg = Format(
        '缓存分类变量:[strIdXzCollege]的长度:[{0}]不正确!(.SetDdl_IdXzMajorInDiv)',
        strIdXzCollege.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    await XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache(
      this.divQuery,
      'ddlIdXzMajor_q',
      strIdXzCollege,
    ); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdGradeBase]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdGradeBaseInDiv() {
    await XzGradeBase_BindDdl_IdGradeBaseInDivCache(this.divQuery, 'ddlIdGradeBase_q'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdGrade]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdGradeInDiv() {
    await XzGrade_BindDdl_IdGradeInDivCache(this.divQuery, 'ddlIdGrade_q'); //
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    const UserTypeStatic = StudentInfoCRUD.UserTypeStatic; //静态变量;//静态变量
    const IdXzCollegeStatic = StudentInfoCRUD.IdXzCollegeStatic; //静态变量;//静态变量

    await this.SetDdl_IdXzCollegeInDiv(UserTypeStatic); //查询区域

    await this.SetDdl_IdXzMajorInDiv(IdXzCollegeStatic); //查询区域

    await this.SetDdl_IdGradeBaseInDiv(); //查询区域

    await this.SetDdl_IdGradeInDiv(); //查询区域
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
      await this.BindGv_StudentInfo4Func(this.divList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "strIdStudentInfo": 表关键字
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
      await this.BindGv_StudentInfo4Func(this.divList);
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
  public async btnSelectRecordInTab_Click(strIdStudentInfo: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strIdStudentInfo) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strIdStudentInfo);
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
  public async DelRecord(strIdStudentInfo: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await StudentInfo_DelRecordAsync(strIdStudentInfo);
      if (returnInt > 0) {
        StudentInfo_ReFreshCache();
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
  public async SelectRecord(strIdStudentInfo: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objStudentInfoEN = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStudentInfo);
      console.log('完成SelectRecord!', objStudentInfoEN);
      Redirect('/Index/Main_StudentInfo');
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
      await this.BindGv_StudentInfo4Func(this.divList);
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
    await this.ExportExcel_StudentInfo4Func();
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineStudentInfoCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.stuId_q != '') {
        strWhereCond += Format(" And {0} like '% {1}%'", clsStudentInfoEN.con_StuId, this.stuId_q);
      }
      if (this.stuName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsStudentInfoEN.con_StuName,
          this.stuName_q,
        );
      }
      if (this.idXzCollege_q != '' && this.idXzCollege_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsStudentInfoEN.con_IdXzCollege,
          this.idXzCollege_q,
        );
      }
      if (this.idXzMajor_q != '' && this.idXzMajor_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsStudentInfoEN.con_IdXzMajor,
          this.idXzMajor_q,
        );
      }
      if (this.idGradeBase_q != '' && this.idGradeBase_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsStudentInfoEN.con_IdGradeBase,
          this.idGradeBase_q,
        );
      }
      if (this.idGrade_q != '' && this.idGrade_q != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsStudentInfoEN.con_IdGrade, this.idGrade_q);
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineStudentInfoCondition)时出错!请联系管理员!{0}',
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
  public async CombineStudentInfoConditionObj(): Promise<clsStudentInfoEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objStudentInfoCond = new clsStudentInfoEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.stuId_q != '') {
        strWhereCond += Format(" And {0} like '% {1}%'", clsStudentInfoEN.con_StuId, this.stuId_q);
        objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_StuId, this.stuId_q, 'like');
      }
      if (this.stuName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsStudentInfoEN.con_StuName,
          this.stuName_q,
        );
        objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_StuName, this.stuName_q, 'like');
      }
      if (this.idXzCollege_q != '' && this.idXzCollege_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsStudentInfoEN.con_IdXzCollege,
          this.idXzCollege_q,
        );
        objStudentInfoCond.SetCondFldValue(
          clsStudentInfoEN.con_IdXzCollege,
          this.idXzCollege_q,
          '=',
        );
      }
      if (this.idXzMajor_q != '' && this.idXzMajor_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsStudentInfoEN.con_IdXzMajor,
          this.idXzMajor_q,
        );
        objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IdXzMajor, this.idXzMajor_q, '=');
      }
      if (this.idGradeBase_q != '' && this.idGradeBase_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsStudentInfoEN.con_IdGradeBase,
          this.idGradeBase_q,
        );
        objStudentInfoCond.SetCondFldValue(
          clsStudentInfoEN.con_IdGradeBase,
          this.idGradeBase_q,
          '=',
        );
      }
      if (this.idGrade_q != '' && this.idGrade_q != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsStudentInfoEN.con_IdGrade, this.idGrade_q);
        objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IdGrade, this.idGrade_q, '=');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineStudentInfoConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objStudentInfoCond.whereCond = strWhereCond;
    return objStudentInfoCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj4ExportExcel)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineStudentInfoConditionObj4ExportExcel(): Promise<clsStudentInfoEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objStudentInfoCond = new clsStudentInfoENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.stuId_q != '') {
        strWhereCond += Format(" And {0} like '% {1}%'", clsStudentInfoEN.con_StuId, this.stuId_q);
        objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_StuId, this.stuId_q, 'like');
      }
      if (this.stuName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsStudentInfoEN.con_StuName,
          this.stuName_q,
        );
        objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_StuName, this.stuName_q, 'like');
      }
      if (this.idXzCollege_q != '' && this.idXzCollege_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsStudentInfoEN.con_IdXzCollege,
          this.idXzCollege_q,
        );
        objStudentInfoCond.SetCondFldValue(
          clsStudentInfoEN.con_IdXzCollege,
          this.idXzCollege_q,
          '=',
        );
      }
      if (this.idXzMajor_q != '' && this.idXzMajor_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsStudentInfoEN.con_IdXzMajor,
          this.idXzMajor_q,
        );
        objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IdXzMajor, this.idXzMajor_q, '=');
      }
      if (this.idGradeBase_q != '' && this.idGradeBase_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsStudentInfoEN.con_IdGradeBase,
          this.idGradeBase_q,
        );
        objStudentInfoCond.SetCondFldValue(
          clsStudentInfoEN.con_IdGradeBase,
          this.idGradeBase_q,
          '=',
        );
      }
      if (this.idGrade_q != '' && this.idGrade_q != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsStudentInfoEN.con_IdGrade, this.idGrade_q);
        objStudentInfoCond.SetCondFldValue(clsStudentInfoEN.con_IdGrade, this.idGrade_q, '=');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0019)在组合导出Excel条件对象(CombineStudentInfoConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objStudentInfoCond.whereCond = strWhereCond;
    return objStudentInfoCond;
  }

  /** 显示StudentInfo对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrStudentInfoObjLst:需要绑定的对象列表
   **/
  public async BindTab_StudentInfo(
    divContainer: HTMLDivElement,
    arrStudentInfoObjLst: Array<clsStudentInfoEN>,
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
        fldName: clsStudentInfoEN.con_StuId,
        sortBy: clsStudentInfoEN.con_StuId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学号',
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
        fldName: clsStudentInfoEN.con_StuName,
        sortBy: clsStudentInfoEN.con_StuName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '姓名',
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
        fldName: clsStudentInfoENEx.con_CollegeName,
        sortBy: 'collegeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院名称',
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
        fldName: clsStudentInfoENEx.con_MajorName,
        sortBy: 'majorName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业名称',
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
        fldName: clsStudentInfoENEx.con_GradeBaseName,
        sortBy: 'gradeBaseName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '入学年级',
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
        fldName: clsStudentInfoENEx.con_GradeName,
        sortBy: 'gradeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '年级',
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
        fldName: clsStudentInfoENEx.con_DateTimeSim,
        sortBy: 'dateTimeSim',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '简化日期时间',
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
    await BindTab(
      divDataLst,
      arrStudentInfoObjLst,
      arrDataColumn,
      clsStudentInfoEN.con_IdStudentInfo,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 显示StudentInfo对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrStudentInfoExObjLst:需要绑定的对象列表
   **/
  public async BindTab_StudentInfo4Func(
    divContainer: HTMLDivElement,
    arrStudentInfoExObjLst: Array<clsStudentInfoENEx>,
  ) {
    const strThisFuncName = this.BindTab_StudentInfo4Func.name;
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
        fldName: clsStudentInfoEN.con_StuId,
        sortBy: clsStudentInfoEN.con_StuId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学号',
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
        fldName: clsStudentInfoEN.con_StuName,
        sortBy: clsStudentInfoEN.con_StuName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '姓名',
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
        fldName: clsStudentInfoENEx.con_CollegeName,
        sortBy: 'collegeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院名称',
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
        fldName: clsStudentInfoENEx.con_MajorName,
        sortBy: 'majorName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业名称',
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
        fldName: clsStudentInfoENEx.con_GradeBaseName,
        sortBy: 'gradeBaseName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '入学年级',
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
        fldName: clsStudentInfoENEx.con_GradeName,
        sortBy: 'gradeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '年级',
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
        fldName: clsStudentInfoENEx.con_DateTimeSim,
        sortBy: 'dateTimeSim',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '简化日期时间',
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
    try {
      await this.ExtendFldFuncMap(arrStudentInfoExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrStudentInfoExObjLst,
      arrDataColumn,
      clsStudentInfoEN.con_IdStudentInfo,
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
   * @param arrStudentInfoExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrStudentInfoExObjLst: Array<clsStudentInfoENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsStudentInfoEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrStudentInfoExObjLst) {
        await StudentInfoEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_StudentInfo4Func(this.divList);
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
  public async BindGv_StudentInfoCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_StudentInfoCache.name;
    if (StudentInfoCRUD.sortStudentInfoBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortStudentInfoBy)为空,请检查!(In BindGv_StudentInfoCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objStudentInfoCond = await this.CombineStudentInfoConditionObj();
    const strWhereCond = JSON.stringify(objStudentInfoCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrStudentInfoExObjLst: Array<clsStudentInfoENEx> = [];
    try {
      this.recCount = await StudentInfo_GetRecCountByCondCache(objStudentInfoCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objStudentInfoCond.whereCond,
        );
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objStudentInfoCond.whereCond,
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
      if (StudentInfoCRUD.sortFunStatic != undefined) {
        strSortFun = StudentInfoCRUD.sortFunStatic(StudentInfoCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: StudentInfoCRUD.sortStudentInfoBy,
        sortFun: strSortFun,
      };
      arrStudentInfoExObjLst = await StudentInfoEx_GetObjExLstByPagerCache(objPagerPara);
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
    if (arrStudentInfoExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format('{0}', clsStudentInfoEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_StudentInfo(divList, arrStudentInfoExObjLst);
      //console.log("完成BindGv_StudentInfoCache!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_StudentInfo4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_StudentInfo4Func.name;
    if (StudentInfoCRUD.sortStudentInfoBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortStudentInfoBy)为空,请检查!(In BindGv_StudentInfoCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objStudentInfoCond = await this.CombineStudentInfoConditionObj();
    const strWhereCond = JSON.stringify(objStudentInfoCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrStudentInfoExObjLst: Array<clsStudentInfoENEx> = [];
    try {
      this.recCount = await StudentInfo_GetRecCountByCondCache(objStudentInfoCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objStudentInfoCond.whereCond,
        );
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objStudentInfoCond.whereCond,
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
      if (StudentInfoCRUD.sortFunStatic != undefined) {
        strSortFun = StudentInfoCRUD.sortFunStatic(StudentInfoCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: StudentInfoCRUD.sortStudentInfoBy,
        sortFun: strSortFun,
      };
      arrStudentInfoExObjLst = await StudentInfoEx_GetObjExLstByPagerCache(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrStudentInfoExObjLst.length == 0) {
      const strKey = Format('{0}', clsStudentInfoEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_StudentInfo4Func(divList, arrStudentInfoExObjLst);
      //console.log("完成BindGv_StudentInfo4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
   * @param objStudentInfoENS:源对象
   * @returns 目标对象=>clsStudentInfoEN:objStudentInfoENT
   **/
  public CopyToEx(objStudentInfoENS: clsStudentInfoEN): clsStudentInfoENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objStudentInfoENT = new clsStudentInfoENEx();
    try {
      ObjectAssign(objStudentInfoENT, objStudentInfoENS);
      return objStudentInfoENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objStudentInfoENT;
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
  public SortFunExportExcel(a: clsStudentInfoEN, b: clsStudentInfoEN): number {
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
      StudentInfoCRUD.ascOrDesc4SortFun,
      StudentInfoCRUD.sortStudentInfoBy,
      strSortExpress,
    );
    StudentInfoCRUD.sortStudentInfoBy = sortBy;
    StudentInfoCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    StudentInfoCRUD.sortFunStatic = sortFun;
    await this.BindGv_StudentInfo4Func(this.divList);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrIdStudentInfo: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrStudentInfoObjLst = await StudentInfo_GetObjLstByIdStudentInfoLstAsync(
        arrIdStudentInfo,
      );
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrStudentInfoObjLst) {
        const strMaxStrId = await StudentInfo_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.idStudentInfo = strMaxStrId;
        const returnBool = await StudentInfo_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          StudentInfo_ReFreshCache();
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
  public async DelMultiRecord(arrIdStudentInfo: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await StudentInfo_DelStudentInfosAsync(arrIdStudentInfo);
      if (returnInt > 0) {
        for (const strIdStudentInfo of arrIdStudentInfo) {
          StudentInfo_ReFreshCache();
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
   * @param objStudentInfo:需要显示的对象
   **/
  public ShowStudentInfoObj(divContainer: HTMLDivElement, objStudentInfo: clsStudentInfoEN) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objStudentInfo);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objStudentInfo.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjStudentInfoEN:表实体类对象
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
   * 年级流水号 (Used In CombineCondition())
   **/
  public get idGrade_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlIdGrade_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 年级流水号 (Used In CombineCondition())
   **/
  public set idGrade_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlIdGrade_q', value);
  }
  /**
   * 年级流水号 (Used In CombineCondition())
   **/
  public get idGradeBase_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlIdGradeBase_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 年级流水号 (Used In CombineCondition())
   **/
  public set idGradeBase_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlIdGradeBase_q', value);
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
   * 专业流水号 (Used In CombineCondition())
   **/
  public get idXzMajor_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlIdXzMajor_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 专业流水号 (Used In CombineCondition())
   **/
  public set idXzMajor_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlIdXzMajor_q', value);
  }
  /**
   * 学号 (Used In CombineCondition())
   **/
  public get stuId_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtStuId_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 学号 (Used In CombineCondition())
   **/
  public set stuId_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtStuId_q', value);
  }
  /**
   * 姓名 (Used In CombineCondition())
   **/
  public get stuName_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtStuName_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 姓名 (Used In CombineCondition())
   **/
  public set stuName_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtStuName_q', value);
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
