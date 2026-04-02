/**
 * 类名:LoginLogCRUD(界面:LoginLogCRUD)
 * 表名:LoginLog(01120357)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 11:34:50
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:日志管理(LogManage)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import {
  LoginLog_GetRecCountByCondCache,
  LoginLog_GetSubObjLstCache,
  LoginLog_DelRecordAsync,
  LoginLog_ReFreshCache,
  LoginLog_GetObjByLoginLogIdAsync,
  LoginLog_GetObjLstByLoginLogIdLstAsync,
  LoginLog_AddNewRecordAsync,
  LoginLog_DelLoginLogsAsync,
} from '@/ts/L3ForWApi/LogManage/clsLoginLogWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsLoginLogEN } from '@/ts/L0Entity/LogManage/clsLoginLogEN';
import { clsLoginLogENEx } from '@/ts/L0Entity/LogManage/clsLoginLogENEx';
import {
  BindTab,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  LoginLogEx_FuncMapByFldName,
  LoginLogEx_GetObjExLstByPagerCache,
} from '@/ts/L3ForWApiExShare/LogManage/clsLoginLogExWApi';
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
/** LoginLogCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class LoginLogCRUD implements clsOperateList {
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

  public static objPageCRUD: LoginLogCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public static ascOrDesc4SortFun = 'Asc';
  public static sortLoginLogBy = '';
  constructor(divLayout: HTMLDivElement) {
    LoginLogCRUD.objPageCRUD = this;
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
    return clsLoginLogEN._CurrTabName;
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
      if (LoginLogCRUD.sortLoginLogBy == '') LoginLogCRUD.sortLoginLogBy = 'loginLogId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_LoginLogCache(this.divList);
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
    await this.BindGv_LoginLogCache(this.divList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(arrLoginLogObjLst: Array<clsLoginLogEN>, arrDataColumn: Array<clsDataColumn>) {
    const intRowNum = arrLoginLogObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsLoginLogEN = arrLoginLogObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('登录日志({0})导出.xlsx', clsLoginLogEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcelCache)
   **/
  public async ExportExcel_LoginLogCache() {
    const strThisFuncName = this.ExportExcel_LoginLogCache.name;
    if (LoginLogCRUD.sortLoginLogBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortLoginLogBy)为空,请检查!(In BindGv_LoginLogCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objLoginLogCond = await this.CombineLoginLogConditionObj4ExportExcel();
    let arrLoginLogObjLst: Array<clsLoginLogEN> = [];
    try {
      this.recCount = await LoginLog_GetRecCountByCondCache(objLoginLogCond);
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objLoginLogCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrLoginLogObjLst = await LoginLog_GetSubObjLstCache(objLoginLogCond);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrLoginLogObjLst.length == 0) {
      const strKey = Format('{0}', clsLoginLogEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'loginLogNumber',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'LoginLogNumber',
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
          fldName: 'loginIP',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'LoginIP',
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
          fldName: 'failReason',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'FailReason',
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
          fldName: 'loginResult',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'LoginResult',
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
          fldName: 'loginTime',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'LoginTime',
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
          fldName: 'onlineTime',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'OnlineTime',
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
          fldName: 'outTime',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'OutTime',
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
          fldName: 'memo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '备注',
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
      arrLoginLogObjLst = arrLoginLogObjLst.sort(this.SortFunExportExcel);
      this.CombineData(arrLoginLogObjLst, arrDataColumn);
      //console.log("完成BindGv_LoginLog!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {}

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
      await this.BindGv_LoginLogCache(this.divList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "lngLoginLogId": 表关键字
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
      await this.BindGv_LoginLogCache(this.divList);
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
  public async btnSelectRecordInTab_Click(lngLoginLogId: number) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (lngLoginLogId == 0) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(lngLoginLogId);
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
  public async DelRecord(lngLoginLogId: number) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await LoginLog_DelRecordAsync(lngLoginLogId);
      if (returnInt > 0) {
        LoginLog_ReFreshCache();
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
  public async SelectRecord(lngLoginLogId: number) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objLoginLogEN = await LoginLog_GetObjByLoginLogIdAsync(lngLoginLogId);
      console.log('完成SelectRecord!', objLoginLogEN);
      Redirect('/Index/Main_LoginLog');
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
      await this.BindGv_LoginLogCache(this.divList);
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
    await this.ExportExcel_LoginLogCache();
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineLoginLogCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.loginLogNumber_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_LoginLogNumber,
          this.loginLogNumber_q,
        );
      }
      if (this.loginIP_q != '') {
        strWhereCond += Format(" And {0} like '% {1}%'", clsLoginLogEN.con_LoginIP, this.loginIP_q);
      }
      if (this.failReason_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_FailReason,
          this.failReason_q,
        );
      }
      if (this.loginResult_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_LoginResult,
          this.loginResult_q,
        );
      }
      if (this.loginTime_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_LoginTime,
          this.loginTime_q,
        );
      }
      if (this.loginUserId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_LoginUserId,
          this.loginUserId_q,
        );
      }
      if (this.onlineTime_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_OnlineTime,
          this.onlineTime_q,
        );
      }
      if (this.outTime_q != '') {
        strWhereCond += Format(" And {0} like '% {1}%'", clsLoginLogEN.con_OutTime, this.outTime_q);
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineLoginLogCondition)时出错!请联系管理员!{0}',
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
  public async CombineLoginLogConditionObj(): Promise<clsLoginLogEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objLoginLogCond = new clsLoginLogEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.loginLogNumber_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_LoginLogNumber,
          this.loginLogNumber_q,
        );
        objLoginLogCond.SetCondFldValue(
          clsLoginLogEN.con_LoginLogNumber,
          this.loginLogNumber_q,
          'like',
        );
      }
      if (this.loginIP_q != '') {
        strWhereCond += Format(" And {0} like '% {1}%'", clsLoginLogEN.con_LoginIP, this.loginIP_q);
        objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginIP, this.loginIP_q, 'like');
      }
      if (this.failReason_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_FailReason,
          this.failReason_q,
        );
        objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_FailReason, this.failReason_q, 'like');
      }
      if (this.loginResult_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_LoginResult,
          this.loginResult_q,
        );
        objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginResult, this.loginResult_q, 'like');
      }
      if (this.loginTime_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_LoginTime,
          this.loginTime_q,
        );
        objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginTime, this.loginTime_q, 'like');
      }
      if (this.loginUserId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_LoginUserId,
          this.loginUserId_q,
        );
        objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginUserId, this.loginUserId_q, 'like');
      }
      if (this.onlineTime_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_OnlineTime,
          this.onlineTime_q,
        );
        objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_OnlineTime, this.onlineTime_q, 'like');
      }
      if (this.outTime_q != '') {
        strWhereCond += Format(" And {0} like '% {1}%'", clsLoginLogEN.con_OutTime, this.outTime_q);
        objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_OutTime, this.outTime_q, 'like');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineLoginLogConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objLoginLogCond.whereCond = strWhereCond;
    return objLoginLogCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj4ExportExcel)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineLoginLogConditionObj4ExportExcel(): Promise<clsLoginLogEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objLoginLogCond = new clsLoginLogENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.loginLogNumber_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_LoginLogNumber,
          this.loginLogNumber_q,
        );
        objLoginLogCond.SetCondFldValue(
          clsLoginLogEN.con_LoginLogNumber,
          this.loginLogNumber_q,
          'like',
        );
      }
      if (this.loginIP_q != '') {
        strWhereCond += Format(" And {0} like '% {1}%'", clsLoginLogEN.con_LoginIP, this.loginIP_q);
        objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginIP, this.loginIP_q, 'like');
      }
      if (this.failReason_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_FailReason,
          this.failReason_q,
        );
        objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_FailReason, this.failReason_q, 'like');
      }
      if (this.loginResult_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_LoginResult,
          this.loginResult_q,
        );
        objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginResult, this.loginResult_q, 'like');
      }
      if (this.loginTime_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_LoginTime,
          this.loginTime_q,
        );
        objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginTime, this.loginTime_q, 'like');
      }
      if (this.loginUserId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_LoginUserId,
          this.loginUserId_q,
        );
        objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_LoginUserId, this.loginUserId_q, 'like');
      }
      if (this.onlineTime_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsLoginLogEN.con_OnlineTime,
          this.onlineTime_q,
        );
        objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_OnlineTime, this.onlineTime_q, 'like');
      }
      if (this.outTime_q != '') {
        strWhereCond += Format(" And {0} like '% {1}%'", clsLoginLogEN.con_OutTime, this.outTime_q);
        objLoginLogCond.SetCondFldValue(clsLoginLogEN.con_OutTime, this.outTime_q, 'like');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0019)在组合导出Excel条件对象(CombineLoginLogConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objLoginLogCond.whereCond = strWhereCond;
    return objLoginLogCond;
  }

  /** 显示LoginLog对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrLoginLogObjLst:需要绑定的对象列表
   **/
  public async BindTab_LoginLog(
    divContainer: HTMLDivElement,
    arrLoginLogObjLst: Array<clsLoginLogEN>,
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
        fldName: clsLoginLogEN.con_LoginLogId,
        sortBy: clsLoginLogEN.con_LoginLogId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'LoginLogId',
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
        fldName: clsLoginLogEN.con_LoginLogNumber,
        sortBy: clsLoginLogEN.con_LoginLogNumber,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'LoginLogNumber',
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
        fldName: clsLoginLogEN.con_LoginIP,
        sortBy: clsLoginLogEN.con_LoginIP,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'LoginIP',
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
        fldName: clsLoginLogEN.con_FailReason,
        sortBy: clsLoginLogEN.con_FailReason,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'FailReason',
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
        fldName: clsLoginLogEN.con_LoginResult,
        sortBy: clsLoginLogEN.con_LoginResult,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'LoginResult',
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
        fldName: clsLoginLogEN.con_LoginTime,
        sortBy: clsLoginLogEN.con_LoginTime,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'LoginTime',
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
        fldName: clsLoginLogEN.con_OnlineTime,
        sortBy: clsLoginLogEN.con_OnlineTime,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'OnlineTime',
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
        fldName: clsLoginLogEN.con_OutTime,
        sortBy: clsLoginLogEN.con_OutTime,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'OutTime',
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
        fldName: clsLoginLogEN.con_Memo,
        sortBy: clsLoginLogEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '备注',
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
    await BindTab(divDataLst, arrLoginLogObjLst, arrDataColumn, clsLoginLogEN.con_LoginLogId, this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 扩展字段值的函数映射
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExtendFldFuncMap)
   * @param arrLoginLogExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrLoginLogExObjLst: Array<clsLoginLogENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsLoginLogEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrLoginLogExObjLst) {
        await LoginLogEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_LoginLogCache(this.divList);
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
  public async BindGv_LoginLogCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_LoginLogCache.name;
    if (LoginLogCRUD.sortLoginLogBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortLoginLogBy)为空,请检查!(In BindGv_LoginLogCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objLoginLogCond = await this.CombineLoginLogConditionObj();
    const strWhereCond = JSON.stringify(objLoginLogCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrLoginLogExObjLst: Array<clsLoginLogENEx> = [];
    try {
      this.recCount = await LoginLog_GetRecCountByCondCache(objLoginLogCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', objLoginLogCond.whereCond);
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objLoginLogCond.whereCond,
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
      if (LoginLogCRUD.sortFunStatic != undefined) {
        strSortFun = LoginLogCRUD.sortFunStatic(LoginLogCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: LoginLogCRUD.sortLoginLogBy,
        sortFun: strSortFun,
      };
      arrLoginLogExObjLst = await LoginLogEx_GetObjExLstByPagerCache(objPagerPara);
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
    if (arrLoginLogExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format('{0}', clsLoginLogEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_LoginLog(divList, arrLoginLogExObjLst);
      //console.log("完成BindGv_LoginLogCache!");
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
  public SortFunExportExcel(a: clsLoginLogEN, b: clsLoginLogEN): number {
    if (a.failReason == b.failReason) return a.failReason.localeCompare(b.failReason);
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
      LoginLogCRUD.ascOrDesc4SortFun,
      LoginLogCRUD.sortLoginLogBy,
      strSortExpress,
    );
    LoginLogCRUD.sortLoginLogBy = sortBy;
    LoginLogCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    LoginLogCRUD.sortFunStatic = sortFun;
    await this.BindGv_LoginLogCache(this.divList);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrLoginLogId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrLoginLogObjLst = await LoginLog_GetObjLstByLoginLogIdLstAsync(arrLoginLogId);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrLoginLogObjLst) {
        const returnBool = await LoginLog_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          LoginLog_ReFreshCache();
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
  public async DelMultiRecord(arrLoginLogId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await LoginLog_DelLoginLogsAsync(arrLoginLogId);
      if (returnInt > 0) {
        for (const lngLoginLogId of arrLoginLogId) {
          LoginLog_ReFreshCache();
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
   * @param objLoginLog:需要显示的对象
   **/
  public ShowLoginLogObj(divContainer: HTMLDivElement, objLoginLog: clsLoginLogEN) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objLoginLog);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objLoginLog.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjLoginLogEN:表实体类对象
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
   * FailReason (Used In CombineCondition())
   **/
  public get failReason_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtFailReason_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * FailReason (Used In CombineCondition())
   **/
  public set failReason_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtFailReason_q', value);
  }
  /**
   * LoginIP (Used In CombineCondition())
   **/
  public get loginIP_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtLoginIP_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * LoginIP (Used In CombineCondition())
   **/
  public set loginIP_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtLoginIP_q', value);
  }
  /**
   * LoginLogNumber (Used In CombineCondition())
   **/
  public get loginLogNumber_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtLoginLogNumber_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * LoginLogNumber (Used In CombineCondition())
   **/
  public set loginLogNumber_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtLoginLogNumber_q', value);
  }
  /**
   * LoginResult (Used In CombineCondition())
   **/
  public get loginResult_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtLoginResult_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * LoginResult (Used In CombineCondition())
   **/
  public set loginResult_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtLoginResult_q', value);
  }
  /**
   * LoginTime (Used In CombineCondition())
   **/
  public get loginTime_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtLoginTime_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * LoginTime (Used In CombineCondition())
   **/
  public set loginTime_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtLoginTime_q', value);
  }
  /**
   * LoginUserId (Used In CombineCondition())
   **/
  public get loginUserId_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtLoginUserId_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * LoginUserId (Used In CombineCondition())
   **/
  public set loginUserId_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtLoginUserId_q', value);
  }
  /**
   * OnlineTime (Used In CombineCondition())
   **/
  public get onlineTime_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtOnlineTime_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * OnlineTime (Used In CombineCondition())
   **/
  public set onlineTime_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtOnlineTime_q', value);
  }
  /**
   * OutTime (Used In CombineCondition())
   **/
  public get outTime_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtOutTime_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * OutTime (Used In CombineCondition())
   **/
  public set outTime_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtOutTime_q', value);
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
