/**
 * 类名:gs_VpClassificationRelaCRUD(界面:gs_VpClassificationRelaCRUD)
 * 表名:gs_VpClassificationRela(01120777)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 11:33:49
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
import { clsgs_VpClassificationRelaENEx } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationRelaENEx';
import {
  gs_VpClassificationRela_GetRecCountByCondCache,
  gs_VpClassificationRela_GetSubObjLstCache,
  gs_VpClassificationRela_DelRecKeyLstAsync,
  gs_VpClassificationRela_ReFreshCache,
  gs_VpClassificationRela_GetObjByKeyLstAsync,
  gs_VpClassificationRela_DelRecKeyLstsAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationRelaWApi';
import {
  gs_VpClassificationRelaEx_CopyToEx,
  gs_VpClassificationRelaEx_FuncMapByFldName,
  gs_VpClassificationRelaEx_GetObjExLstByPagerCache,
  gs_VpClassificationRelaEx_FuncMapKeyClassificationName,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsgs_VpClassificationRelaExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  GetCheckedKeyLstsInDivObj,
  GetDivObjInDivObj,
  intersectSets,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsgs_VpClassificationRelaEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationRelaEN';
import {
  BindTab_KeyLst,
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
/**
 * 宣布一个用于导出Excel的函数,用于调用js端的导出Excel。
 **/
declare function exportSpecialExcel_pyf(arrData: any, strFileName: string): void;
/** gs_VpClassificationRelaCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class gs_VpClassificationRelaCRUD implements clsOperateList {
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

  public static TopicIdCache = ''; //2、界面主表的缓存分类字段变量1
  public static IdCurrEduClsStatic = ''; //6、定义下拉框条件变量1
  public static objPageCRUD: gs_VpClassificationRelaCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public static ascOrDesc4SortFun = 'Asc';
  public static sortgs_VpClassificationRelaBy = '';
  constructor(divLayout: HTMLDivElement) {
    gs_VpClassificationRelaCRUD.objPageCRUD = this;
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
    return clsgs_VpClassificationRelaEN._CurrTabName;
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
      if (gs_VpClassificationRelaCRUD.sortgs_VpClassificationRelaBy == '')
        gs_VpClassificationRelaCRUD.sortgs_VpClassificationRelaBy = 'classificationId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_gs_VpClassificationRela4Func(this.divList);
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
    await this.BindGv_gs_VpClassificationRela4Func(this.divList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrgs_VpClassificationRelaObjLst: Array<clsgs_VpClassificationRelaEN>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrgs_VpClassificationRelaObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsgs_VpClassificationRelaEN = arrgs_VpClassificationRelaObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format(
      '观点分类主题关系表({0})导出.xlsx',
      clsgs_VpClassificationRelaEN._CurrTabName,
    );
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData4Func)
   **/
  public CombineData4Func(
    arrgs_VpClassificationRelaExObjLst: Array<clsgs_VpClassificationRelaENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrgs_VpClassificationRelaExObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j]);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsgs_VpClassificationRelaENEx = arrgs_VpClassificationRelaExObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format(
      '观点分类主题关系表({0})导出.xlsx',
      clsgs_VpClassificationRelaEN._CurrTabName,
    );
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcel4Func)
   **/
  public async ExportExcel_gs_VpClassificationRela4Func() {
    const strThisFuncName = this.ExportExcel_gs_VpClassificationRela4Func.name;
    if (gs_VpClassificationRelaCRUD.sortgs_VpClassificationRelaBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortgs_VpClassificationRelaBy)为空,请检查!(In BindGv_gs_VpClassificationRelaCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objgs_VpClassificationRelaCond =
      await this.Combinegs_VpClassificationRelaConditionObj4ExportExcel();
    let arrgs_VpClassificationRelaObjLst: Array<clsgs_VpClassificationRelaEN> = [];
    let arrgs_VpClassificationRelaExObjLst: Array<clsgs_VpClassificationRelaENEx> = [];
    try {
      this.recCount = await gs_VpClassificationRela_GetRecCountByCondCache(
        objgs_VpClassificationRelaCond,
        gs_VpClassificationRelaCRUD.TopicIdCache,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objgs_VpClassificationRelaCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrgs_VpClassificationRelaObjLst = await gs_VpClassificationRela_GetSubObjLstCache(
        objgs_VpClassificationRelaCond,
        gs_VpClassificationRelaCRUD.TopicIdCache,
      );
      arrgs_VpClassificationRelaExObjLst = arrgs_VpClassificationRelaObjLst.map(
        gs_VpClassificationRelaEx_CopyToEx,
      );
    } catch (e) {
      const strMsg = `导出Excel时获取数据不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrgs_VpClassificationRelaObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsgs_VpClassificationRelaEN._CurrTabName,
        gs_VpClassificationRelaCRUD.TopicIdCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'classificationId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '分类Id',
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
          fldName: 'topicId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '主题Id',
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
          fldName: 'orderNum',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '序号',
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
          fldName: 'updDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
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
          fldName: 'updUser',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改人',
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
          fldName: 'memo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '备注',
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
          fldName: 'classificationId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '分类名称',
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
          fldName: 'updDate',
          sortBy: '',
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
        await this.ExtendFldFuncMap(arrgs_VpClassificationRelaExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      arrgs_VpClassificationRelaObjLst = arrgs_VpClassificationRelaObjLst.sort(
        this.SortFunExportExcel,
      );
      this.CombineData(arrgs_VpClassificationRelaObjLst, arrDataColumn);
      //console.log("完成BindGv_gs_VpClassificationRela!");
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

  //多关键字,不支持复制功能!

  /**
   * 在数据表里删除记录
   * "lngClassificationId": 表关键字
   * "strTopicId": 表关键字
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   **/
  public async btnDelRecordInTab_Click(lngClassificationId: number, strTopicId: string) {
    const strThisFuncName = this.btnDelRecordInTab_Click.name;
    try {
      if (lngClassificationId == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (IsNullOrEmpty(strTopicId) == true) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      if (confirmDel(0) == false) {
        return;
      }
      await this.DelRecord(lngClassificationId, strTopicId);
      await this.BindGv_gs_VpClassificationRela4Func(this.divList);
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
  public async btnSelectRecordInTab_Click(lngClassificationId: number, strTopicId: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (lngClassificationId == 0) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (IsNullOrEmpty(strTopicId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(lngClassificationId, strTopicId);
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
  public async DelRecord(lngClassificationId: number, strTopicId: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await gs_VpClassificationRela_DelRecKeyLstAsync(
        lngClassificationId,
        strTopicId,
      );
      if (returnInt > 0) {
        gs_VpClassificationRela_ReFreshCache(gs_VpClassificationRelaCRUD.TopicIdCache);
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
  public async SelectRecord(lngClassificationId: number, strTopicId: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objgs_VpClassificationRelaEN = await gs_VpClassificationRela_GetObjByKeyLstAsync(
        lngClassificationId,
        strTopicId,
      );
      console.log('完成SelectRecord!', objgs_VpClassificationRelaEN);
      Redirect('/Index/Main_gs_VpClassificationRela');
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
      await this.BindGv_gs_VpClassificationRela4Func(this.divList);
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
    await this.ExportExcel_gs_VpClassificationRela4Func();
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinegs_VpClassificationRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.topicId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsgs_VpClassificationRelaEN.con_TopicId,
          this.topicId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(Combinegs_VpClassificationRelaCondition)时出错!请联系管理员!{0}',
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
  public async Combinegs_VpClassificationRelaConditionObj(): Promise<clsgs_VpClassificationRelaEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objgs_VpClassificationRelaCond = new clsgs_VpClassificationRelaEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.topicId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsgs_VpClassificationRelaEN.con_TopicId,
          this.topicId_q,
        );
        objgs_VpClassificationRelaCond.SetCondFldValue(
          clsgs_VpClassificationRelaEN.con_TopicId,
          this.topicId_q,
          'like',
        );
      }

      //处理针对扩展字段:[ClassificationId]的查询
      const arrClassificationId = await this.GetCondition_ClassificationIdLst_In();
      if (arrClassificationId.length > 0) {
        strWhereCond += Format(
          ' And {0} in ({1})',
          clsgs_VpClassificationRelaEN.con_ClassificationId,
          arrClassificationId.join(','),
        );
        objgs_VpClassificationRelaCond.SetCondFldValue(
          clsgs_VpClassificationRelaEN.con_ClassificationId,
          arrClassificationId.join(','),
          'in',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(Combinegs_VpClassificationRelaConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objgs_VpClassificationRelaCond.whereCond = strWhereCond;
    return objgs_VpClassificationRelaCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj4ExportExcel)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinegs_VpClassificationRelaConditionObj4ExportExcel(): Promise<clsgs_VpClassificationRelaEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objgs_VpClassificationRelaCond = new clsgs_VpClassificationRelaENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.topicId_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsgs_VpClassificationRelaEN.con_TopicId,
          this.topicId_q,
        );
        objgs_VpClassificationRelaCond.SetCondFldValue(
          clsgs_VpClassificationRelaEN.con_TopicId,
          this.topicId_q,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0019)在组合导出Excel条件对象(Combinegs_VpClassificationRelaConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objgs_VpClassificationRelaCond.whereCond = strWhereCond;
    return objgs_VpClassificationRelaCond;
  }

  /** 显示gs_VpClassificationRela对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrgs_VpClassificationRelaObjLst:需要绑定的对象列表
   **/
  public async BindTab_gs_VpClassificationRela(
    divContainer: HTMLDivElement,
    arrgs_VpClassificationRelaObjLst: Array<clsgs_VpClassificationRelaEN>,
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
        fldName: clsgs_VpClassificationRelaEN.con_TopicId,
        sortBy: clsgs_VpClassificationRelaEN.con_TopicId,
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
        fldName: clsgs_VpClassificationRelaENEx.con_TopicName,
        sortBy: 'topicName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '栏目主题',
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
        fldName: clsgs_VpClassificationRelaEN.con_OrderNum,
        sortBy: clsgs_VpClassificationRelaEN.con_OrderNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '序号',
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
        fldName: clsgs_VpClassificationRelaEN.con_ClassificationId,
        sortBy: clsgs_VpClassificationRelaEN.con_ClassificationId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '分类Id',
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
        fldName: clsgs_VpClassificationRelaENEx.con_ClassificationName,
        sortBy: clsgs_VpClassificationRelaENEx.con_ClassificationName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '分类名称',
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
        fldName: clsgs_VpClassificationRelaEN.con_UpdDate,
        sortBy: clsgs_VpClassificationRelaEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
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
        fldName: clsgs_VpClassificationRelaEN.con_UpdUser,
        sortBy: clsgs_VpClassificationRelaEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改人',
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
        fldName: clsgs_VpClassificationRelaEN.con_Memo,
        sortBy: clsgs_VpClassificationRelaEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '备注',
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
        fldName: clsgs_VpClassificationRelaENEx.con_DateTimeSim,
        sortBy: clsgs_VpClassificationRelaENEx.con_DateTimeSim,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '简化日期时间',
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
    const arrKeyLst = [
      clsgs_VpClassificationRelaEN.con_ClassificationId,
      clsgs_VpClassificationRelaEN.con_TopicId,
    ];
    await BindTab_KeyLst(
      divDataLst,
      arrgs_VpClassificationRelaObjLst,
      arrDataColumn,
      arrKeyLst,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 显示gs_VpClassificationRela对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrgs_VpClassificationRelaExObjLst:需要绑定的对象列表
   **/
  public async BindTab_gs_VpClassificationRela4Func(
    divContainer: HTMLDivElement,
    arrgs_VpClassificationRelaExObjLst: Array<clsgs_VpClassificationRelaENEx>,
  ) {
    const strThisFuncName = this.BindTab_gs_VpClassificationRela4Func.name;
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
        fldName: clsgs_VpClassificationRelaEN.con_TopicId,
        sortBy: clsgs_VpClassificationRelaEN.con_TopicId,
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
        fldName: clsgs_VpClassificationRelaENEx.con_TopicName,
        sortBy: 'topicName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '栏目主题',
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
        fldName: clsgs_VpClassificationRelaEN.con_OrderNum,
        sortBy: clsgs_VpClassificationRelaEN.con_OrderNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '序号',
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
        fldName: clsgs_VpClassificationRelaEN.con_ClassificationId,
        sortBy: clsgs_VpClassificationRelaEN.con_ClassificationId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '分类Id',
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
        fldName: clsgs_VpClassificationRelaENEx.con_ClassificationName,
        sortBy: clsgs_VpClassificationRelaENEx.con_ClassificationName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '分类名称',
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
        fldName: clsgs_VpClassificationRelaEN.con_UpdDate,
        sortBy: clsgs_VpClassificationRelaEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
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
        fldName: clsgs_VpClassificationRelaEN.con_UpdUser,
        sortBy: clsgs_VpClassificationRelaEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改人',
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
        fldName: clsgs_VpClassificationRelaEN.con_Memo,
        sortBy: clsgs_VpClassificationRelaEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '备注',
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
        fldName: clsgs_VpClassificationRelaENEx.con_DateTimeSim,
        sortBy: clsgs_VpClassificationRelaENEx.con_DateTimeSim,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '简化日期时间',
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
      await this.ExtendFldFuncMap(arrgs_VpClassificationRelaExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const arrKeyLst = [
      clsgs_VpClassificationRelaEN.con_ClassificationId,
      clsgs_VpClassificationRelaEN.con_TopicId,
    ];
    await BindTab_KeyLst(
      divDataLst,
      arrgs_VpClassificationRelaExObjLst,
      arrDataColumn,
      arrKeyLst,
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
   * @param arrgs_VpClassificationRelaExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrgs_VpClassificationRelaExObjLst: Array<clsgs_VpClassificationRelaENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsgs_VpClassificationRelaEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrgs_VpClassificationRelaExObjLst) {
        await gs_VpClassificationRelaEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_gs_VpClassificationRela4Func(this.divList);
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
  public async BindGv_gs_VpClassificationRelaCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_gs_VpClassificationRelaCache.name;
    if (gs_VpClassificationRelaCRUD.sortgs_VpClassificationRelaBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortgs_VpClassificationRelaBy)为空,请检查!(In BindGv_gs_VpClassificationRelaCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objgs_VpClassificationRelaCond = await this.Combinegs_VpClassificationRelaConditionObj();
    const strWhereCond = JSON.stringify(objgs_VpClassificationRelaCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrgs_VpClassificationRelaExObjLst: Array<clsgs_VpClassificationRelaENEx> = [];
    try {
      this.recCount = await gs_VpClassificationRela_GetRecCountByCondCache(
        objgs_VpClassificationRelaCond,
        gs_VpClassificationRelaCRUD.TopicIdCache,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objgs_VpClassificationRelaCond.whereCond,
        );
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objgs_VpClassificationRelaCond.whereCond,
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
      if (gs_VpClassificationRelaCRUD.sortFunStatic != undefined) {
        strSortFun = gs_VpClassificationRelaCRUD.sortFunStatic(
          gs_VpClassificationRelaCRUD.ascOrDesc4SortFun,
        );
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: gs_VpClassificationRelaCRUD.sortgs_VpClassificationRelaBy,
        sortFun: strSortFun,
      };
      arrgs_VpClassificationRelaExObjLst = await gs_VpClassificationRelaEx_GetObjExLstByPagerCache(
        objPagerPara,
        gs_VpClassificationRelaCRUD.TopicIdCache,
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
    if (arrgs_VpClassificationRelaExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format(
        '{0}_{1}',
        clsgs_VpClassificationRelaEN._CurrTabName,
        gs_VpClassificationRelaCRUD.TopicIdCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_gs_VpClassificationRela(divList, arrgs_VpClassificationRelaExObjLst);
      //console.log("完成BindGv_gs_VpClassificationRelaCache!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_gs_VpClassificationRela4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_gs_VpClassificationRela4Func.name;
    if (gs_VpClassificationRelaCRUD.sortgs_VpClassificationRelaBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortgs_VpClassificationRelaBy)为空,请检查!(In BindGv_gs_VpClassificationRelaCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objgs_VpClassificationRelaCond = await this.Combinegs_VpClassificationRelaConditionObj();
    objgs_VpClassificationRelaCond.SetCondFldValue(
      clsgs_VpClassificationRelaEN.con_TopicId,
      gs_VpClassificationRelaCRUD.TopicIdCache,
      '=',
    );
    const strWhereCond = JSON.stringify(objgs_VpClassificationRelaCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrgs_VpClassificationRelaExObjLst: Array<clsgs_VpClassificationRelaENEx> = [];
    try {
      this.recCount = await gs_VpClassificationRela_GetRecCountByCondCache(
        objgs_VpClassificationRelaCond,
        gs_VpClassificationRelaCRUD.TopicIdCache,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objgs_VpClassificationRelaCond.whereCond,
        );
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objgs_VpClassificationRelaCond.whereCond,
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
      if (gs_VpClassificationRelaCRUD.sortFunStatic != undefined) {
        strSortFun = gs_VpClassificationRelaCRUD.sortFunStatic(
          gs_VpClassificationRelaCRUD.ascOrDesc4SortFun,
        );
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: gs_VpClassificationRelaCRUD.sortgs_VpClassificationRelaBy,
        sortFun: strSortFun,
      };
      arrgs_VpClassificationRelaExObjLst = await gs_VpClassificationRelaEx_GetObjExLstByPagerCache(
        objPagerPara,
        gs_VpClassificationRelaCRUD.TopicIdCache,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrgs_VpClassificationRelaExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsgs_VpClassificationRelaEN._CurrTabName,
        gs_VpClassificationRelaCRUD.TopicIdCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_gs_VpClassificationRela4Func(divList, arrgs_VpClassificationRelaExObjLst);
      //console.log("完成BindGv_gs_VpClassificationRela4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
   * @param objgs_VpClassificationRelaENS:源对象
   * @returns 目标对象=>clsgs_VpClassificationRelaEN:objgs_VpClassificationRelaENT
   **/
  public CopyToEx(
    objgs_VpClassificationRelaENS: clsgs_VpClassificationRelaEN,
  ): clsgs_VpClassificationRelaENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objgs_VpClassificationRelaENT = new clsgs_VpClassificationRelaENEx();
    try {
      ObjectAssign(objgs_VpClassificationRelaENT, objgs_VpClassificationRelaENS);
      return objgs_VpClassificationRelaENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objgs_VpClassificationRelaENT;
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
  public SortFunExportExcel(
    a: clsgs_VpClassificationRelaEN,
    b: clsgs_VpClassificationRelaEN,
  ): number {
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
      gs_VpClassificationRelaCRUD.ascOrDesc4SortFun,
      gs_VpClassificationRelaCRUD.sortgs_VpClassificationRelaBy,
      strSortExpress,
    );
    gs_VpClassificationRelaCRUD.sortgs_VpClassificationRelaBy = sortBy;
    gs_VpClassificationRelaCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    gs_VpClassificationRelaCRUD.sortFunStatic = sortFun;
    await this.BindGv_gs_VpClassificationRela4Func(this.divList);
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetConditionInFldValueLst)
   * @returns 相关字段的关键字列表(Array<string>)
   **/
  public async GetCondition_ClassificationIdLst_In(): Promise<Array<string>> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    const objgs_VpClassificationRelaCond = new clsgs_VpClassificationRelaENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    let arrClassificationIdInclude: Array<string> = [];
    try {
      if (this.classificationName_q != 0) {
        objgs_VpClassificationRelaCond.SetCondFldValue(
          clsgs_VpClassificationRelaENEx.con_ClassificationName,
          this.classificationName_q,
          '=',
        );

        const arrClassificationId_ClassificationName =
          await gs_VpClassificationRelaEx_FuncMapKeyClassificationName(
            objgs_VpClassificationRelaCond,
          );
        if (arrClassificationIdInclude.length == 0) {
          arrClassificationIdInclude = arrClassificationId_ClassificationName.map((x) =>
            x.toString(),
          );
        } else {
          arrClassificationIdInclude = intersectSets(
            arrClassificationIdInclude,
            arrClassificationId_ClassificationName.map((x) => x.toString()),
          );
        }
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0029)在组合查询条件中关键字列表(GetConditionInFldValueLst)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    return arrClassificationIdInclude;
  }
  //多关键字,不支持复制功能!

  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord_KeyLst(arrKeyLsts: Array<string>) {
    const strThisFuncName = this.DelMultiRecord_KeyLst.name;
    try {
      const returnInt = await gs_VpClassificationRela_DelRecKeyLstsAsync(arrKeyLsts);
      if (returnInt > 0) {
        for (const strKeyId of arrKeyLsts) {
          gs_VpClassificationRela_ReFreshCache(gs_VpClassificationRelaCRUD.TopicIdCache);
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
   * @param objgs_VpClassificationRela:需要显示的对象
   **/
  public Showgs_VpClassificationRelaObj(
    divContainer: HTMLDivElement,
    objgs_VpClassificationRela: clsgs_VpClassificationRelaEN,
  ) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objgs_VpClassificationRela);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objgs_VpClassificationRela.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjgs_VpClassificationRelaEN:表实体类对象
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
   * 分类Id (Used In GetConditionInFldValueLst())
   **/
  public get classificationName_q(): number {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtClassificationName_q');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 主题Id (Used In CombineCondition())
   **/
  public get topicId_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtTopicId_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 主题Id (Used In CombineCondition())
   **/
  public set topicId_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtTopicId_q', value);
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
