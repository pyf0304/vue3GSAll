/**
 * 类名:RTUserRelaCRUD(界面:RTUserRelaCRUD)
 * 表名:RTUserRela(01120582)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 11:34:15
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
  vRTUserRela_GetRecCountByCondCache,
  vRTUserRela_GetSubObjLstCache,
  vRTUserRela_GetObjBymIdAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import { XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { XzMajor_BindDdl_IdXzMajorInDivCache } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
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
import {
  RTUserRela_DelRecordAsync,
  RTUserRela_ReFreshCache,
  RTUserRela_GetObjLstBymIdLstAsync,
  RTUserRela_AddNewRecordAsync,
  RTUserRela_DelRTUserRelasAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTUserRelaWApi';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { clsvRTUserRelaENEx } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaENEx';
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
  vRTUserRelaEx_FuncMapByFldName,
  vRTUserRelaEx_GetObjExLstByPagerCache,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsvRTUserRelaExWApi';
import { clsRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaEN';
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
/** RTUserRelaCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class RTUserRelaCRUD implements clsOperateList {
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

  public static IdCurrEduClsCache = ''; //6、定义下拉框条件变量1
  public static UserIdCache = ''; //2、界面主表的缓存分类字段变量1
  public static objPageCRUD: RTUserRelaCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public static ascOrDesc4SortFun = 'Asc';
  public static sortvRTUserRelaBy = '';
  constructor(divLayout: HTMLDivElement) {
    RTUserRelaCRUD.objPageCRUD = this;
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
    return clsRTUserRelaEN._CurrTabName;
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
      if (RTUserRelaCRUD.sortvRTUserRelaBy == '') RTUserRelaCRUD.sortvRTUserRelaBy = 'updDate Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vRTUserRelaCache(this.divList);
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
    await this.BindGv_vRTUserRelaCache(this.divList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrvRTUserRelaObjLst: Array<clsvRTUserRelaEN>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrvRTUserRelaObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsvRTUserRelaEN = arrvRTUserRelaObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('主题用户关系({0})导出.xlsx', clsvRTUserRelaEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcelCache)
   **/
  public async ExportExcel_vRTUserRelaCache() {
    const strThisFuncName = this.ExportExcel_vRTUserRelaCache.name;
    if (RTUserRelaCRUD.sortvRTUserRelaBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvRTUserRelaBy)为空,请检查!(In BindGv_vRTUserRelaCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objvRTUserRelaCond = await this.CombinevRTUserRelaConditionObj4ExportExcel();
    objvRTUserRelaCond.SetCondFldValue(
      clsvRTUserRelaEN.con_UserId,
      RTUserRelaCRUD.UserIdCache,
      '=',
    );
    let arrvRTUserRelaObjLst: Array<clsvRTUserRelaEN> = [];
    try {
      this.recCount = await vRTUserRela_GetRecCountByCondCache(
        objvRTUserRelaCond,
        RTUserRelaCRUD.UserIdCache,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objvRTUserRelaCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrvRTUserRelaObjLst = await vRTUserRela_GetSubObjLstCache(
        objvRTUserRelaCond,
        RTUserRelaCRUD.UserIdCache,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrvRTUserRelaObjLst.length == 0) {
      const strKey = Format('{0}_{1}', clsRTUserRelaEN._CurrTabName, RTUserRelaCRUD.UserIdCache);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'updDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
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
          fldName: 'updUser',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改人',
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
          fldName: 'memo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '备注',
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
          fldName: 'updUserName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'UpdUserName',
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
          fldName: 'topicName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '栏目主题',
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
          fldName: 'topicContent',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '主题内容',
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
          fldName: 'topicProposePeople',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '主题提出人',
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
          fldName: 'userName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '用户名',
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
          fldName: 'idXzCollege',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学院流水号',
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
          fldName: 'collegeName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '学院名称',
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
          fldName: 'idXzMajor',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '专业流水号',
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
          fldName: 'majorName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '专业名称',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 15,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      arrvRTUserRelaObjLst = arrvRTUserRelaObjLst.sort(this.SortFunExportExcel);
      this.CombineData(arrvRTUserRelaObjLst, arrDataColumn);
      //console.log("完成BindGv_vRTUserRela!");
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

  public async SetDdl_IdXzCollegeInDiv() {
    await XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache(
      this.divQuery,
      'ddlIdXzCollege_q',
      clsSysPara4WebApi.spIdSchool,
    ); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdXzMajor]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdXzMajorInDiv() {
    await XzMajor_BindDdl_IdXzMajorInDivCache(this.divQuery, 'ddlIdXzMajor_q'); //
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    await this.SetDdl_IdXzCollegeInDiv(); //查询区域

    await this.SetDdl_IdXzMajorInDiv(); //查询区域
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
      await this.BindGv_vRTUserRelaCache(this.divList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "lngmId": 表关键字
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
      await this.BindGv_vRTUserRelaCache(this.divList);
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
  public async btnSelectRecordInTab_Click(lngmId: number) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (lngmId == 0) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(lngmId);
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
  public async DelRecord(lngmId: number) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await RTUserRela_DelRecordAsync(lngmId);
      if (returnInt > 0) {
        RTUserRela_ReFreshCache(RTUserRelaCRUD.UserIdCache);
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
  public async SelectRecord(lngmId: number) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objRTUserRelaEN = await vRTUserRela_GetObjBymIdAsync(lngmId);
      console.log('完成SelectRecord!', objRTUserRelaEN);
      Redirect('/Index/Main_vRTUserRela');
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
      await this.BindGv_vRTUserRelaCache(this.divList);
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
    await this.ExportExcel_vRTUserRelaCache();
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevRTUserRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.userId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvRTUserRelaEN.con_UserId,
          this.userId_q,
        );
      }
      if (this.topicName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvRTUserRelaEN.con_TopicName,
          this.topicName_q,
        );
      }
      if (this.idXzCollege_q != '' && this.idXzCollege_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvRTUserRelaEN.con_IdXzCollege,
          this.idXzCollege_q,
        );
      }
      if (this.idXzMajor_q != '' && this.idXzMajor_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvRTUserRelaEN.con_IdXzMajor,
          this.idXzMajor_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineRTUserRelaCondition)时出错!请联系管理员!{0}',
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
  public async CombinevRTUserRelaConditionObj(): Promise<clsvRTUserRelaEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvRTUserRelaCond = new clsvRTUserRelaEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.userId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvRTUserRelaEN.con_UserId,
          this.userId_q,
        );
        objvRTUserRelaCond.SetCondFldValue(clsvRTUserRelaEN.con_UserId, this.userId_q, 'like');
      }
      if (this.topicName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvRTUserRelaEN.con_TopicName,
          this.topicName_q,
        );
        objvRTUserRelaCond.SetCondFldValue(
          clsvRTUserRelaEN.con_TopicName,
          this.topicName_q,
          'like',
        );
      }
      if (this.idXzCollege_q != '' && this.idXzCollege_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvRTUserRelaEN.con_IdXzCollege,
          this.idXzCollege_q,
        );
        objvRTUserRelaCond.SetCondFldValue(
          clsvRTUserRelaEN.con_IdXzCollege,
          this.idXzCollege_q,
          '=',
        );
      }
      if (this.idXzMajor_q != '' && this.idXzMajor_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvRTUserRelaEN.con_IdXzMajor,
          this.idXzMajor_q,
        );
        objvRTUserRelaCond.SetCondFldValue(clsvRTUserRelaEN.con_IdXzMajor, this.idXzMajor_q, '=');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineRTUserRelaConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvRTUserRelaCond.whereCond = strWhereCond;
    return objvRTUserRelaCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj4ExportExcel)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevRTUserRelaConditionObj4ExportExcel(): Promise<clsvRTUserRelaEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvRTUserRelaCond = new clsvRTUserRelaENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.userId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvRTUserRelaEN.con_UserId,
          this.userId_q,
        );
        objvRTUserRelaCond.SetCondFldValue(clsvRTUserRelaEN.con_UserId, this.userId_q, 'like');
      }
      if (this.topicName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvRTUserRelaEN.con_TopicName,
          this.topicName_q,
        );
        objvRTUserRelaCond.SetCondFldValue(
          clsvRTUserRelaEN.con_TopicName,
          this.topicName_q,
          'like',
        );
      }
      if (this.idXzCollege_q != '' && this.idXzCollege_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvRTUserRelaEN.con_IdXzCollege,
          this.idXzCollege_q,
        );
        objvRTUserRelaCond.SetCondFldValue(
          clsvRTUserRelaEN.con_IdXzCollege,
          this.idXzCollege_q,
          '=',
        );
      }
      if (this.idXzMajor_q != '' && this.idXzMajor_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvRTUserRelaEN.con_IdXzMajor,
          this.idXzMajor_q,
        );
        objvRTUserRelaCond.SetCondFldValue(clsvRTUserRelaEN.con_IdXzMajor, this.idXzMajor_q, '=');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0019)在组合导出Excel条件对象(CombineRTUserRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvRTUserRelaCond.whereCond = strWhereCond;
    return objvRTUserRelaCond;
  }

  /** 显示vRTUserRela对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrRTUserRelaObjLst:需要绑定的对象列表
   **/
  public async BindTab_vRTUserRela(
    divContainer: HTMLDivElement,
    arrvRTUserRelaObjLst: Array<clsvRTUserRelaEN>,
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
        fldName: clsvRTUserRelaEN.con_TopicName,
        sortBy: clsvRTUserRelaEN.con_TopicName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '栏目主题',
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
        fldName: clsvRTUserRelaEN.con_UserName,
        sortBy: clsvRTUserRelaEN.con_UserName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户名',
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
        fldName: clsvRTUserRelaEN.con_CollegeName,
        sortBy: clsvRTUserRelaEN.con_CollegeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院名称',
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
        fldName: clsvRTUserRelaEN.con_MajorName,
        sortBy: clsvRTUserRelaEN.con_MajorName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业名称',
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
        fldName: clsvRTUserRelaEN.con_TopicProposePeople,
        sortBy: clsvRTUserRelaEN.con_TopicProposePeople,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '主题提出人',
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
        fldName: clsvRTUserRelaEN.con_UpdUser,
        sortBy: clsvRTUserRelaEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改人',
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
        fldName: clsvRTUserRelaEN.con_UpdDate,
        sortBy: clsvRTUserRelaEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 19,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    await BindTab_V(
      divDataLst,
      arrvRTUserRelaObjLst,
      arrDataColumn,
      clsvRTUserRelaEN.con_mId,
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
   * @param arrvRTUserRelaExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrvRTUserRelaExObjLst: Array<clsvRTUserRelaENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsvRTUserRelaEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrvRTUserRelaExObjLst) {
        await vRTUserRelaEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_vRTUserRelaCache(this.divList);
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
  public async BindGv_vRTUserRelaCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_vRTUserRelaCache.name;
    if (RTUserRelaCRUD.sortvRTUserRelaBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvRTUserRelaBy)为空,请检查!(In BindGv_vRTUserRelaCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objvRTUserRelaCond = await this.CombinevRTUserRelaConditionObj();
    const strWhereCond = JSON.stringify(objvRTUserRelaCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvRTUserRelaExObjLst: Array<clsvRTUserRelaENEx> = [];
    try {
      this.recCount = await vRTUserRela_GetRecCountByCondCache(
        objvRTUserRelaCond,
        RTUserRelaCRUD.UserIdCache,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objvRTUserRelaCond.whereCond,
        );
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objvRTUserRelaCond.whereCond,
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
      if (RTUserRelaCRUD.sortFunStatic != undefined) {
        strSortFun = RTUserRelaCRUD.sortFunStatic(RTUserRelaCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: RTUserRelaCRUD.sortvRTUserRelaBy,
        sortFun: strSortFun,
      };
      arrvRTUserRelaExObjLst = await vRTUserRelaEx_GetObjExLstByPagerCache(
        objPagerPara,
        RTUserRelaCRUD.UserIdCache,
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
    if (arrvRTUserRelaExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format('{0}_{1}', clsRTUserRelaEN._CurrTabName, RTUserRelaCRUD.UserIdCache);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_vRTUserRela(divList, arrvRTUserRelaExObjLst);
      //console.log("完成BindGv_vRTUserRelaCache!");
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
  public SortFunExportExcel(a: clsvRTUserRelaEN, b: clsvRTUserRelaEN): number {
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
      RTUserRelaCRUD.ascOrDesc4SortFun,
      RTUserRelaCRUD.sortvRTUserRelaBy,
      strSortExpress,
    );
    RTUserRelaCRUD.sortvRTUserRelaBy = sortBy;
    RTUserRelaCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    RTUserRelaCRUD.sortFunStatic = sortFun;
    await this.BindGv_vRTUserRelaCache(this.divList);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrmId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrRTUserRelaObjLst = await RTUserRela_GetObjLstBymIdLstAsync(arrmId);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrRTUserRelaObjLst) {
        const returnBool = await RTUserRela_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          RTUserRela_ReFreshCache(RTUserRelaCRUD.UserIdCache);
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
  public async DelMultiRecord(arrmId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await RTUserRela_DelRTUserRelasAsync(arrmId);
      if (returnInt > 0) {
        for (const lngmId of arrmId) {
          RTUserRela_ReFreshCache(RTUserRelaCRUD.UserIdCache);
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
   * @param objRTUserRela:需要显示的对象
   **/
  public ShowRTUserRelaObj(divContainer: HTMLDivElement, objRTUserRela: clsRTUserRelaEN) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objRTUserRela);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objRTUserRela.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjRTUserRelaEN:表实体类对象
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
   * 栏目主题 (Used In CombineCondition())
   **/
  public get topicName_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtTopicName_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 栏目主题 (Used In CombineCondition())
   **/
  public set topicName_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtTopicName_q', value);
  }
  /**
   * 用户ID (Used In CombineCondition())
   **/
  public get userId_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtUserId_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 用户ID (Used In CombineCondition())
   **/
  public set userId_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtUserId_q', value);
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
