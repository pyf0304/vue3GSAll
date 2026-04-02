/**
 * 类名:MessagePushCRUD(界面:MessagePushCRUD)
 * 表名:MessagePush(01120280)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 11:34:34
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:新闻公告(NewsAnn)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import {
  MessagePush_GetRecCountByCondAsync,
  MessagePush_GetObjLstAsync,
  MessagePush_DelRecordAsync,
  MessagePush_GetObjByMessagePushIdAsync,
  MessagePush_GetObjLstByMessagePushIdLstAsync,
  MessagePush_GetMaxStrIdAsync,
  MessagePush_AddNewRecordAsync,
  MessagePush_DelMessagePushsAsync,
} from '@/ts/L3ForWApi/NewsAnn/clsMessagePushWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  GetCheckBoxValueInDivObj,
  SetCheckBoxValueByIdInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsMessagePushEN } from '@/ts/L0Entity/NewsAnn/clsMessagePushEN';
import { clsMessagePushENEx } from '@/ts/L0Entity/NewsAnn/clsMessagePushENEx';
import {
  BindTab,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  MessagePushEx_FuncMapByFldName,
  MessagePushEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiExShare/NewsAnn/clsMessagePushExWApi';
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
/** MessagePushCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class MessagePushCRUD implements clsOperateList {
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

  public static objPageCRUD: MessagePushCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public static ascOrDesc4SortFun = 'Asc';
  public static sortMessagePushBy = '';
  constructor(divLayout: HTMLDivElement) {
    MessagePushCRUD.objPageCRUD = this;
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
    return clsMessagePushEN._CurrTabName;
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
      if (MessagePushCRUD.sortMessagePushBy == '')
        MessagePushCRUD.sortMessagePushBy = 'messagePushId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_MessagePush(this.divList);
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
      if (MessagePushCRUD.sortMessagePushBy == '')
        MessagePushCRUD.sortMessagePushBy = 'messagePushId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_MessagePush(this.divList);
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
    await this.BindGv_MessagePush(this.divList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrMessagePushObjLst: Array<clsMessagePushEN>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrMessagePushObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsMessagePushEN = arrMessagePushObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('消息推送({0})导出.xlsx', clsMessagePushEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcel)
   **/
  public async ExportExcel_MessagePush() {
    const strThisFuncName = this.ExportExcel_MessagePush.name;
    if (MessagePushCRUD.sortMessagePushBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortMessagePushBy)为空,请检查!(In BindGv_MessagePushCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const strWhereCond = await this.CombineMessagePushCondition();
    let arrMessagePushObjLst: Array<clsMessagePushEN> = [];
    try {
      this.recCount = await MessagePush_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrMessagePushObjLst = await MessagePush_GetObjLstAsync(strWhereCond);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrMessagePushObjLst.length == 0) {
      const strMsg = `在ExportExcel过程中,根据条件获取的${this.thisTabName}记录数为0!`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'messagePushId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '消息Id',
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
          fldName: 'messagePushNumber',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '消息编号',
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
          fldName: 'messageTitle',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '消息标题',
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
          fldName: 'messageContent',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '消息内容',
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
          fldName: 'receivePeople',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '接收人员',
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
          fldName: 'isAllpush',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否全体推送',
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
          fldName: 'isReceive',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否接收',
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
          fldName: 'updDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
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
          fldName: 'memo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '备注',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 12,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      arrMessagePushObjLst = arrMessagePushObjLst.sort(this.SortFunExportExcel);
      this.CombineData(arrMessagePushObjLst, arrDataColumn);
      //console.log("完成BindGv_MessagePush!");
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
      await this.BindGv_MessagePush(this.divList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "strMessagePushId": 表关键字
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
      await this.BindGv_MessagePush(this.divList);
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
  public async btnSelectRecordInTab_Click(strMessagePushId: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strMessagePushId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strMessagePushId);
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
  public async DelRecord(strMessagePushId: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await MessagePush_DelRecordAsync(strMessagePushId);
      if (returnInt > 0) {
        //MessagePush_ReFreshCache();
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
  public async SelectRecord(strMessagePushId: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objMessagePushEN = await MessagePush_GetObjByMessagePushIdAsync(strMessagePushId);
      console.log('完成SelectRecord!', objMessagePushEN);
      Redirect('/Index/Main_MessagePush');
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
      await this.BindGv_MessagePush(this.divList);
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
    await this.ExportExcel_MessagePush();
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineMessagePushCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.messagePushId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessagePushId,
          this.messagePushId_q,
        );
      }
      if (this.messagePushNumber_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessagePushNumber,
          this.messagePushNumber_q,
        );
      }
      if (this.messageTitle_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessageTitle,
          this.messageTitle_q,
        );
      }
      if (this.messageContent_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessageContent,
          this.messageContent_q,
        );
      }
      if (this.receivePeople_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_ReceivePeople,
          this.receivePeople_q,
        );
      }
      if (this.messageTypeId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessageTypeId,
          this.messageTypeId_q,
        );
      }
      if (this.isAllpush_q == true) {
        strWhereCond += Format(" And {0} = '1'", clsMessagePushEN.con_IsAllpush);
      } else {
        strWhereCond += Format(" And {0} = '0'", clsMessagePushEN.con_IsAllpush);
      }
      if (this.isReceive_q == true) {
        strWhereCond += Format(" And {0} = '1'", clsMessagePushEN.con_IsReceive);
      } else {
        strWhereCond += Format(" And {0} = '0'", clsMessagePushEN.con_IsReceive);
      }
      if (this.clientVersionTypeId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_ClientVersionTypeId,
          this.clientVersionTypeId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineMessagePushCondition)时出错!请联系管理员!{0}',
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
  public async CombineMessagePushConditionObj(): Promise<clsMessagePushEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objMessagePushCond = new clsMessagePushEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.messagePushId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessagePushId,
          this.messagePushId_q,
        );
        objMessagePushCond.SetCondFldValue(
          clsMessagePushEN.con_MessagePushId,
          this.messagePushId_q,
          'like',
        );
      }
      if (this.messagePushNumber_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessagePushNumber,
          this.messagePushNumber_q,
        );
        objMessagePushCond.SetCondFldValue(
          clsMessagePushEN.con_MessagePushNumber,
          this.messagePushNumber_q,
          'like',
        );
      }
      if (this.messageTitle_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessageTitle,
          this.messageTitle_q,
        );
        objMessagePushCond.SetCondFldValue(
          clsMessagePushEN.con_MessageTitle,
          this.messageTitle_q,
          'like',
        );
      }
      if (this.messageContent_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessageContent,
          this.messageContent_q,
        );
        objMessagePushCond.SetCondFldValue(
          clsMessagePushEN.con_MessageContent,
          this.messageContent_q,
          'like',
        );
      }
      if (this.receivePeople_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_ReceivePeople,
          this.receivePeople_q,
        );
        objMessagePushCond.SetCondFldValue(
          clsMessagePushEN.con_ReceivePeople,
          this.receivePeople_q,
          'like',
        );
      }
      if (this.messageTypeId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessageTypeId,
          this.messageTypeId_q,
        );
        objMessagePushCond.SetCondFldValue(
          clsMessagePushEN.con_MessageTypeId,
          this.messageTypeId_q,
          'like',
        );
      }
      if (this.isAllpush_q == true) {
        strWhereCond += Format(" And {0} = '1'", clsMessagePushEN.con_IsAllpush);
        objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsAllpush, true, '=');
      } else {
        strWhereCond += Format(" And {0} = '0'", clsMessagePushEN.con_IsAllpush);
        objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsAllpush, false, '=');
      }
      if (this.isReceive_q == true) {
        strWhereCond += Format(" And {0} = '1'", clsMessagePushEN.con_IsReceive);
        objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsReceive, true, '=');
      } else {
        strWhereCond += Format(" And {0} = '0'", clsMessagePushEN.con_IsReceive);
        objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsReceive, false, '=');
      }
      if (this.clientVersionTypeId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_ClientVersionTypeId,
          this.clientVersionTypeId_q,
        );
        objMessagePushCond.SetCondFldValue(
          clsMessagePushEN.con_ClientVersionTypeId,
          this.clientVersionTypeId_q,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineMessagePushConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objMessagePushCond.whereCond = strWhereCond;
    return objMessagePushCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj4ExportExcel)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineMessagePushConditionObj4ExportExcel(): Promise<clsMessagePushEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objMessagePushCond = new clsMessagePushENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.messagePushId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessagePushId,
          this.messagePushId_q,
        );
        objMessagePushCond.SetCondFldValue(
          clsMessagePushEN.con_MessagePushId,
          this.messagePushId_q,
          'like',
        );
      }
      if (this.messagePushNumber_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessagePushNumber,
          this.messagePushNumber_q,
        );
        objMessagePushCond.SetCondFldValue(
          clsMessagePushEN.con_MessagePushNumber,
          this.messagePushNumber_q,
          'like',
        );
      }
      if (this.messageTitle_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessageTitle,
          this.messageTitle_q,
        );
        objMessagePushCond.SetCondFldValue(
          clsMessagePushEN.con_MessageTitle,
          this.messageTitle_q,
          'like',
        );
      }
      if (this.messageContent_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessageContent,
          this.messageContent_q,
        );
        objMessagePushCond.SetCondFldValue(
          clsMessagePushEN.con_MessageContent,
          this.messageContent_q,
          'like',
        );
      }
      if (this.receivePeople_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_ReceivePeople,
          this.receivePeople_q,
        );
        objMessagePushCond.SetCondFldValue(
          clsMessagePushEN.con_ReceivePeople,
          this.receivePeople_q,
          'like',
        );
      }
      if (this.messageTypeId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_MessageTypeId,
          this.messageTypeId_q,
        );
        objMessagePushCond.SetCondFldValue(
          clsMessagePushEN.con_MessageTypeId,
          this.messageTypeId_q,
          'like',
        );
      }
      if (this.isAllpush_q == true) {
        strWhereCond += Format(" And {0} = '1'", clsMessagePushEN.con_IsAllpush);
        objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsAllpush, true, '=');
      } else {
        strWhereCond += Format(" And {0} = '0'", clsMessagePushEN.con_IsAllpush);
        objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsAllpush, false, '=');
      }
      if (this.isReceive_q == true) {
        strWhereCond += Format(" And {0} = '1'", clsMessagePushEN.con_IsReceive);
        objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsReceive, true, '=');
      } else {
        strWhereCond += Format(" And {0} = '0'", clsMessagePushEN.con_IsReceive);
        objMessagePushCond.SetCondFldValue(clsMessagePushEN.con_IsReceive, false, '=');
      }
      if (this.clientVersionTypeId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsMessagePushEN.con_ClientVersionTypeId,
          this.clientVersionTypeId_q,
        );
        objMessagePushCond.SetCondFldValue(
          clsMessagePushEN.con_ClientVersionTypeId,
          this.clientVersionTypeId_q,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0019)在组合导出Excel条件对象(CombineMessagePushConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objMessagePushCond.whereCond = strWhereCond;
    return objMessagePushCond;
  }

  /** 显示MessagePush对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrMessagePushObjLst:需要绑定的对象列表
   **/
  public async BindTab_MessagePush(
    divContainer: HTMLDivElement,
    arrMessagePushObjLst: Array<clsMessagePushEN>,
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
        fldName: clsMessagePushEN.con_MessagePushId,
        sortBy: clsMessagePushEN.con_MessagePushId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '消息Id',
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
        fldName: clsMessagePushEN.con_MessagePushNumber,
        sortBy: clsMessagePushEN.con_MessagePushNumber,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '消息编号',
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
        fldName: clsMessagePushEN.con_MessageTitle,
        sortBy: clsMessagePushEN.con_MessageTitle,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '消息标题',
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
        fldName: clsMessagePushEN.con_MessageContent,
        sortBy: clsMessagePushEN.con_MessageContent,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '消息内容',
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
        fldName: clsMessagePushEN.con_ReceivePeople,
        sortBy: clsMessagePushEN.con_ReceivePeople,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '接收人员',
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
        fldName: clsMessagePushEN.con_IsAllpush,
        sortBy: clsMessagePushEN.con_IsAllpush,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否全体推送',
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
        fldName: clsMessagePushEN.con_IsReceive,
        sortBy: clsMessagePushEN.con_IsReceive,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否接收',
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
        fldName: clsMessagePushEN.con_UpdDate,
        sortBy: clsMessagePushEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
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
        fldName: clsMessagePushEN.con_Memo,
        sortBy: clsMessagePushEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '备注',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    await BindTab(
      divDataLst,
      arrMessagePushObjLst,
      arrDataColumn,
      clsMessagePushEN.con_MessagePushId,
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
   * @param arrMessagePushExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrMessagePushExObjLst: Array<clsMessagePushENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsMessagePushEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrMessagePushExObjLst) {
        await MessagePushEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_MessagePush(this.divList);
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
  public async BindGv_MessagePush(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_MessagePush.name;
    if (MessagePushCRUD.sortMessagePushBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortMessagePushBy)为空,请检查!(In BindGv_MessagePush)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const strWhereCond = await this.CombineMessagePushCondition();
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrMessagePushExObjLst: Array<clsMessagePushENEx> = [];
    try {
      this.recCount = await MessagePush_GetRecCountByCondAsync(strWhereCond);
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
        orderBy: MessagePushCRUD.sortMessagePushBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrMessagePushExObjLst = await MessagePushEx_GetObjExLstByPagerAsync(objPagerPara);
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
    if (arrMessagePushExObjLst.length == 0) {
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
      await this.BindTab_MessagePush(divList, arrMessagePushExObjLst);
      //console.log("完成BindGv_MessagePush!");
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
  public SortFunExportExcel(a: clsMessagePushEN, b: clsMessagePushEN): number {
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
      MessagePushCRUD.ascOrDesc4SortFun,
      MessagePushCRUD.sortMessagePushBy,
      strSortExpress,
    );
    MessagePushCRUD.sortMessagePushBy = sortBy;
    MessagePushCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    MessagePushCRUD.sortFunStatic = sortFun;
    await this.BindGv_MessagePush(this.divList);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrMessagePushId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrMessagePushObjLst = await MessagePush_GetObjLstByMessagePushIdLstAsync(
        arrMessagePushId,
      );
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrMessagePushObjLst) {
        const strMaxStrId = await MessagePush_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.messagePushId = strMaxStrId;
        const returnBool = await MessagePush_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          //MessagePush_ReFreshCache();
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
  public async DelMultiRecord(arrMessagePushId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await MessagePush_DelMessagePushsAsync(arrMessagePushId);
      if (returnInt > 0) {
        for (const strMessagePushId of arrMessagePushId) {
          //MessagePush_ReFreshCache();
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
   * @param objMessagePush:需要显示的对象
   **/
  public ShowMessagePushObj(divContainer: HTMLDivElement, objMessagePush: clsMessagePushEN) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objMessagePush);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objMessagePush.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjMessagePushEN:表实体类对象
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
   * 客户端版本类型Id (Used In CombineCondition())
   **/
  public get clientVersionTypeId_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtClientVersionTypeId_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 客户端版本类型Id (Used In CombineCondition())
   **/
  public set clientVersionTypeId_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtClientVersionTypeId_q', value);
  }
  /**
   * 是否全体推送 (Used In CombineCondition())
   **/
  public get isAllpush_q(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(this.divQuery, 'chkIsAllpush_q');
    return bolValue;
  }
  /**
   * 是否全体推送 (Used In CombineCondition())
   **/
  public set isAllpush_q(value: boolean) {
    SetCheckBoxValueByIdInDivObj(this.divQuery, 'chkIsAllpush_q', value);
  }
  /**
   * 是否接收 (Used In CombineCondition())
   **/
  public get isReceive_q(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(this.divQuery, 'chkIsReceive_q');
    return bolValue;
  }
  /**
   * 是否接收 (Used In CombineCondition())
   **/
  public set isReceive_q(value: boolean) {
    SetCheckBoxValueByIdInDivObj(this.divQuery, 'chkIsReceive_q', value);
  }
  /**
   * 消息内容 (Used In CombineCondition())
   **/
  public get messageContent_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtMessageContent_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 消息内容 (Used In CombineCondition())
   **/
  public set messageContent_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtMessageContent_q', value);
  }
  /**
   * 消息Id (Used In CombineCondition())
   **/
  public get messagePushId_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtMessagePushId_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 消息Id (Used In CombineCondition())
   **/
  public set messagePushId_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtMessagePushId_q', value);
  }
  /**
   * 消息编号 (Used In CombineCondition())
   **/
  public get messagePushNumber_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtMessagePushNumber_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 消息编号 (Used In CombineCondition())
   **/
  public set messagePushNumber_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtMessagePushNumber_q', value);
  }
  /**
   * 消息标题 (Used In CombineCondition())
   **/
  public get messageTitle_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtMessageTitle_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 消息标题 (Used In CombineCondition())
   **/
  public set messageTitle_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtMessageTitle_q', value);
  }
  /**
   * 消息类型Id (Used In CombineCondition())
   **/
  public get messageTypeId_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtMessageTypeId_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 消息类型Id (Used In CombineCondition())
   **/
  public set messageTypeId_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtMessageTypeId_q', value);
  }
  /**
   * 接收人员 (Used In CombineCondition())
   **/
  public get receivePeople_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtReceivePeople_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 接收人员 (Used In CombineCondition())
   **/
  public set receivePeople_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtReceivePeople_q', value);
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
