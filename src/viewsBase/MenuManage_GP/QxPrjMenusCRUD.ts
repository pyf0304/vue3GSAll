/**
 * 类名:QxPrjMenusCRUD(界面:QxPrjMenusCRUD)
 * 表名:QxPrjMenus(00140004)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:23:46
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import {
  QxPrjMenus_GetRecCountByCondAsync,
  QxPrjMenus_GetObjLstAsync,
  QxPrjMenus_DelRecordAsync,
  QxPrjMenus_GetObjByMenuIdAsync,
  QxPrjMenus_GetObjLstByMenuIdLstAsync,
  QxPrjMenus_GetMaxStrIdByPrefixAsync,
  QxPrjMenus_AddNewRecordAsync,
  QxPrjMenus_UpdateRecordAsync,
  QxPrjMenus_DelQxPrjMenussAsync,
} from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  QxPrjMenusEx_BindDdl_UpMenuIdByQxPrjIdInDivCache,
  QxPrjMenusEx_FuncMapByFldName,
  QxPrjMenusEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiExShare/MenuManage_GP/clsQxPrjMenusExWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  BindDdl_TrueAndFalseInDivObj,
  BindTab,
  ObjectAssign,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  GetCheckedKeyIdsInDivObj,
  GetSelectSelectedIndexInDivObj,
  GetDivObjInDivObj,
  GetSelectObjInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { qxPrjMenusStore } from '@/store/modulesShare/qxPrjMenus';
import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
import { clsQxPrjMenusENEx } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusENEx';
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
/** QxPrjMenusCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class QxPrjMenusCRUD implements clsOperateList {
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

  public QxPrjId = ''; //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
  public static QxPrjId4PrefixStatic = ''; //3、前缀变量
  public static objPageCRUD: QxPrjMenusCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public static ascOrDesc4SortFun = 'Asc';
  public static sortQxPrjMenusBy = '';
  constructor(divLayout: HTMLDivElement) {
    QxPrjMenusCRUD.objPageCRUD = this;
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
    return clsQxPrjMenusEN._CurrTabName;
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
      if (QxPrjMenusCRUD.sortQxPrjMenusBy == '') QxPrjMenusCRUD.sortQxPrjMenusBy = 'menuId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_QxPrjMenus4Func(this.divList);
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
    await this.BindGv_QxPrjMenus4Func(this.divList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrQxPrjMenusObjLst: Array<clsQxPrjMenusEN>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrQxPrjMenusObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsQxPrjMenusEN = arrQxPrjMenusObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('工程菜单({0})导出.xlsx', clsQxPrjMenusEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcelCache)
   **/
  public async ExportExcel_QxPrjMenusCache() {
    const strThisFuncName = this.ExportExcel_QxPrjMenusCache.name;
    if (QxPrjMenusCRUD.sortQxPrjMenusBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortQxPrjMenusBy)为空,请检查!(In BindGv_QxPrjMenusCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strWhereCond = await this.CombineQxPrjMenusCondition();
    let arrQxPrjMenusObjLst: Array<clsQxPrjMenusEN> = [];
    try {
      this.recCount = await QxPrjMenus_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrQxPrjMenusObjLst = await QxPrjMenus_GetObjLstAsync(strWhereCond);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrQxPrjMenusObjLst.length == 0) {
      const strKey = Format('{0}', clsQxPrjMenusEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'menuId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '菜单Id',
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
          fldName: 'menuName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '菜单名',
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
          fldName: 'linkFile',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '链接文件',
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
          fldName: 'qsParameters',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'qs参数',
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
          fldName: 'imgFile',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '图像文件',
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
          fldName: 'orderNum',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '排序号',
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
          fldName: 'isLeafNode',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否叶子',
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
          fldName: 'menuTitle',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '菜单标题',
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
          fldName: 'inUse',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否在用',
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
          fldName: 'menuControlName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'MenuControlName',
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
          fldName: 'updDate',
          sortBy: '',
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
      arrQxPrjMenusObjLst = arrQxPrjMenusObjLst.sort(this.SortFunExportExcel);
      this.CombineData(arrQxPrjMenusObjLst, arrDataColumn);
      //console.log("完成BindGv_QxPrjMenus!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 设置绑定下拉框，针对字段:[UpMenuId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_UpMenuIdInDiv(strQxPrjId: string) {
    if (IsNullOrEmpty(strQxPrjId) == true) {
      const strMsg = Format('参数:[strQxPrjId]不能为空!(In .SetDdl_UpMenuIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strQxPrjId.length != 4) {
      const strMsg = Format(
        '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(.SetDdl_UpMenuIdInDiv)',
        strQxPrjId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    await QxPrjMenusEx_BindDdl_UpMenuIdByQxPrjIdInDivCache(
      this.divQuery,
      'ddlUpMenuId_q',
      strQxPrjId,
    ); //
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    const strQxPrjId = clsSysPara4WebApi.currSelPrjId; //Session存储、local存储

    await this.SetDdl_UpMenuIdInDiv(strQxPrjId); //查询区域

    BindDdl_TrueAndFalseInDivObj(this.divQuery, 'ddlbIsLeafNode_q');

    BindDdl_TrueAndFalseInDivObj(this.divQuery, 'ddlbInUse_q');
  }

  /** 设置字段值-InUse
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetInUse_Click() {
    const strThisFuncName = this.btnSetInUse_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置是否在用的${this.thisTabName}记录!`);
        return '';
      }
      const bolInUse: boolean = $('#ddlInUse_SetFldValue').prop('checked');
      //console.log('bolInUse=' + bolInUse);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetInUse(arrKeyIds, bolInUse);
      await this.BindGv_QxPrjMenus4Func(this.divList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:为功能区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4FeatureRegion)
   **/
  public async BindDdl4FeatureRegion() {
    BindDdl_TrueAndFalseInDivObj(this.divFunction, 'ddlInUse_SetFldValue');
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
      await this.BindGv_QxPrjMenus4Func(this.divList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "strMenuId": 表关键字
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
      await this.BindGv_QxPrjMenus4Func(this.divList);
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
  public async btnSelectRecordInTab_Click(strMenuId: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strMenuId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strMenuId);
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
  public async DelRecord(strMenuId: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await QxPrjMenus_DelRecordAsync(strMenuId);
      if (returnInt > 0) {
        await qxPrjMenusStore.delObj(strMenuId);
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
  public async SelectRecord(strMenuId: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objQxPrjMenusEN = await QxPrjMenus_GetObjByMenuIdAsync(strMenuId);
      console.log('完成SelectRecord!', objQxPrjMenusEN);
      Redirect('/Index/Main_QxPrjMenus');
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
      await this.BindGv_QxPrjMenus4Func(this.divList);
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
    await this.ExportExcel_QxPrjMenusCache();
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineQxPrjMenusCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.menuId_q != '') {
        strWhereCond += Format(" And {0} like '% {1}%'", clsQxPrjMenusEN.con_MenuId, this.menuId_q);
      }
      if (this.menuName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsQxPrjMenusEN.con_MenuName,
          this.menuName_q,
        );
      }
      if (this.upMenuId_q != '' && this.upMenuId_q != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsQxPrjMenusEN.con_UpMenuId, this.upMenuId_q);
      }
      if (this.menuTitle_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsQxPrjMenusEN.con_MenuTitle,
          this.menuTitle_q,
        );
      }
      if (GetSelectSelectedIndexInDivObj(this.divQuery, 'ddlbIsLeafNode_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsQxPrjMenusEN.con_IsLeafNode);
      } else if (GetSelectSelectedIndexInDivObj(this.divQuery, 'ddlbIsLeafNode_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsQxPrjMenusEN.con_IsLeafNode);
      }
      if (GetSelectSelectedIndexInDivObj(this.divQuery, 'ddlbInUse_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsQxPrjMenusEN.con_InUse);
      } else if (GetSelectSelectedIndexInDivObj(this.divQuery, 'ddlbInUse_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsQxPrjMenusEN.con_InUse);
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineQxPrjMenusCondition)时出错!请联系管理员!{0}',
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
  public async CombineQxPrjMenusConditionObj(): Promise<clsQxPrjMenusEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objQxPrjMenusCond = new clsQxPrjMenusEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.menuId_q != '') {
        strWhereCond += Format(" And {0} like '% {1}%'", clsQxPrjMenusEN.con_MenuId, this.menuId_q);
        objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_MenuId, this.menuId_q, 'like');
      }
      if (this.menuName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsQxPrjMenusEN.con_MenuName,
          this.menuName_q,
        );
        objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_MenuName, this.menuName_q, 'like');
      }
      if (this.upMenuId_q != '' && this.upMenuId_q != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsQxPrjMenusEN.con_UpMenuId, this.upMenuId_q);
        objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_UpMenuId, this.upMenuId_q, '=');
      }
      if (this.menuTitle_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsQxPrjMenusEN.con_MenuTitle,
          this.menuTitle_q,
        );
        objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_MenuTitle, this.menuTitle_q, 'like');
      }
      if (GetSelectSelectedIndexInDivObj(this.divQuery, 'ddlbIsLeafNode_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsQxPrjMenusEN.con_IsLeafNode);
        objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_IsLeafNode, true, '=');
      } else if (GetSelectSelectedIndexInDivObj(this.divQuery, 'ddlbIsLeafNode_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsQxPrjMenusEN.con_IsLeafNode);
        objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_IsLeafNode, false, '=');
      }
      if (GetSelectSelectedIndexInDivObj(this.divQuery, 'ddlbInUse_q') == 1) {
        strWhereCond += Format(" And {0} = '1'", clsQxPrjMenusEN.con_InUse);
        objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_InUse, true, '=');
      } else if (GetSelectSelectedIndexInDivObj(this.divQuery, 'ddlbInUse_q') == 2) {
        strWhereCond += Format(" And {0} = '0'", clsQxPrjMenusEN.con_InUse);
        objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_InUse, false, '=');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineQxPrjMenusConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objQxPrjMenusCond.whereCond = strWhereCond;
    return objQxPrjMenusCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj4ExportExcel)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineQxPrjMenusConditionObj4ExportExcel(): Promise<clsQxPrjMenusEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objQxPrjMenusCond = new clsQxPrjMenusENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.menuId_q != '') {
        strWhereCond += Format(" And {0} like '% {1}%'", clsQxPrjMenusEN.con_MenuId, this.menuId_q);
        objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_MenuId, this.menuId_q, 'like');
      }
      if (this.menuName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsQxPrjMenusEN.con_MenuName,
          this.menuName_q,
        );
        objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_MenuName, this.menuName_q, 'like');
      }
      if (this.upMenuId_q != '' && this.upMenuId_q != '0') {
        strWhereCond += Format(" And {0} = '{1}'", clsQxPrjMenusEN.con_UpMenuId, this.upMenuId_q);
        objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_UpMenuId, this.upMenuId_q, '=');
      }
      if (this.menuTitle_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsQxPrjMenusEN.con_MenuTitle,
          this.menuTitle_q,
        );
        objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_MenuTitle, this.menuTitle_q, 'like');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0019)在组合导出Excel条件对象(CombineQxPrjMenusConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objQxPrjMenusCond.whereCond = strWhereCond;
    return objQxPrjMenusCond;
  }

  /** 显示QxPrjMenus对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrQxPrjMenusObjLst:需要绑定的对象列表
   **/
  public async BindTab_QxPrjMenus(
    divContainer: HTMLDivElement,
    arrQxPrjMenusObjLst: Array<clsQxPrjMenusEN>,
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
        fldName: clsQxPrjMenusEN.con_MenuId,
        sortBy: clsQxPrjMenusEN.con_MenuId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单Id',
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
        fldName: clsQxPrjMenusENEx.con_UpMenuName,
        sortBy: 'upMenuName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '上级菜单名',
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
        fldName: clsQxPrjMenusEN.con_MenuName,
        sortBy: clsQxPrjMenusEN.con_MenuName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单名',
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
        fldName: clsQxPrjMenusENEx.con_RoleNames,
        sortBy: 'roleNames',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '相关角色',
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
        fldName: clsQxPrjMenusEN.con_LinkFile,
        sortBy: clsQxPrjMenusEN.con_LinkFile,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '链接文件',
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
        fldName: clsQxPrjMenusEN.con_OrderNum,
        sortBy: clsQxPrjMenusEN.con_OrderNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '排序号',
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
        fldName: clsQxPrjMenusEN.con_MenuTitle,
        sortBy: clsQxPrjMenusEN.con_MenuTitle,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单标题',
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
        fldName: clsQxPrjMenusEN.con_InUse,
        sortBy: clsQxPrjMenusEN.con_InUse,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '在用?',
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
        fldName: clsQxPrjMenusENEx.con_DateTimeSim,
        sortBy: 'dateTimeSim',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    await BindTab(divDataLst, arrQxPrjMenusObjLst, arrDataColumn, clsQxPrjMenusEN.con_MenuId, this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 显示QxPrjMenus对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrQxPrjMenusExObjLst:需要绑定的对象列表
   **/
  public async BindTab_QxPrjMenus4Func(
    divContainer: HTMLDivElement,
    arrQxPrjMenusExObjLst: Array<clsQxPrjMenusENEx>,
  ) {
    const strThisFuncName = this.BindTab_QxPrjMenus4Func.name;
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
        fldName: clsQxPrjMenusEN.con_MenuId,
        sortBy: clsQxPrjMenusEN.con_MenuId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单Id',
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
        fldName: clsQxPrjMenusENEx.con_UpMenuName,
        sortBy: 'upMenuName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '上级菜单名',
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
        fldName: clsQxPrjMenusEN.con_MenuName,
        sortBy: clsQxPrjMenusEN.con_MenuName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单名',
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
        fldName: clsQxPrjMenusENEx.con_RoleNames,
        sortBy: 'roleNames',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '相关角色',
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
        fldName: clsQxPrjMenusEN.con_LinkFile,
        sortBy: clsQxPrjMenusEN.con_LinkFile,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '链接文件',
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
        fldName: clsQxPrjMenusEN.con_OrderNum,
        sortBy: clsQxPrjMenusEN.con_OrderNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '排序号',
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
        fldName: clsQxPrjMenusEN.con_MenuTitle,
        sortBy: clsQxPrjMenusEN.con_MenuTitle,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单标题',
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
        fldName: clsQxPrjMenusEN.con_InUse,
        sortBy: clsQxPrjMenusEN.con_InUse,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '在用?',
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
        fldName: clsQxPrjMenusENEx.con_DateTimeSim,
        sortBy: 'dateTimeSim',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 13,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrQxPrjMenusExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrQxPrjMenusExObjLst,
      arrDataColumn,
      clsQxPrjMenusEN.con_MenuId,
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
   * @param arrQxPrjMenusExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrQxPrjMenusExObjLst: Array<clsQxPrjMenusENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsQxPrjMenusEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrQxPrjMenusExObjLst) {
        await QxPrjMenusEx_FuncMapByFldName(objDataColumn.fldName, objInFor, '');
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
    await this.BindGv_QxPrjMenus4Func(this.divList);
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
  public async BindGv_QxPrjMenusCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_QxPrjMenusCache.name;
    if (QxPrjMenusCRUD.sortQxPrjMenusBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortQxPrjMenusBy)为空,请检查!(In BindGv_QxPrjMenusCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objQxPrjMenusCond = await this.CombineQxPrjMenusConditionObj();
    const strWhereCond = JSON.stringify(objQxPrjMenusCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrQxPrjMenusExObjLst: Array<clsQxPrjMenusENEx> = [];
    try {
      this.recCount = await QxPrjMenus_GetRecCountByCondAsync(strWhereCond);
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
        orderBy: QxPrjMenusCRUD.sortQxPrjMenusBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrQxPrjMenusExObjLst = await QxPrjMenusEx_GetObjExLstByPagerAsync(objPagerPara, '');
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
    if (arrQxPrjMenusExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format('{0}', clsQxPrjMenusEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_QxPrjMenus(divList, arrQxPrjMenusExObjLst);
      //console.log("完成BindGv_QxPrjMenusCache!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_QxPrjMenus4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_QxPrjMenus4Func.name;
    if (QxPrjMenusCRUD.sortQxPrjMenusBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortQxPrjMenusBy)为空,请检查!(In BindGv_QxPrjMenusCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombineQxPrjMenusCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrQxPrjMenusExObjLst: Array<clsQxPrjMenusENEx> = [];
    try {
      this.recCount = await QxPrjMenus_GetRecCountByCondAsync(strWhereCond);
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
        orderBy: QxPrjMenusCRUD.sortQxPrjMenusBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrQxPrjMenusExObjLst = await QxPrjMenusEx_GetObjExLstByPagerAsync(objPagerPara, '');
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrQxPrjMenusExObjLst.length == 0) {
      const strKey = Format('{0}', clsQxPrjMenusEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_QxPrjMenus4Func(divList, arrQxPrjMenusExObjLst);
      //console.log("完成BindGv_QxPrjMenus4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
   * @param objQxPrjMenusENS:源对象
   * @returns 目标对象=>clsQxPrjMenusEN:objQxPrjMenusENT
   **/
  public CopyToEx(objQxPrjMenusENS: clsQxPrjMenusEN): clsQxPrjMenusENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objQxPrjMenusENT = new clsQxPrjMenusENEx();
    try {
      ObjectAssign(objQxPrjMenusENT, objQxPrjMenusENS);
      return objQxPrjMenusENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objQxPrjMenusENT;
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
  public SortFunExportExcel(a: clsQxPrjMenusEN, b: clsQxPrjMenusEN): number {
    if (a.qxPrjId == b.qxPrjId) return a.qxPrjId.localeCompare(b.qxPrjId);
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
      QxPrjMenusCRUD.ascOrDesc4SortFun,
      QxPrjMenusCRUD.sortQxPrjMenusBy,
      strSortExpress,
    );
    QxPrjMenusCRUD.sortQxPrjMenusBy = sortBy;
    QxPrjMenusCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    QxPrjMenusCRUD.sortFunStatic = sortFun;
    await this.BindGv_QxPrjMenus4Func(this.divList);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrMenuId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrQxPrjMenusObjLst = await QxPrjMenus_GetObjLstByMenuIdLstAsync(arrMenuId);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrQxPrjMenusObjLst) {
        const strMaxStrId = await QxPrjMenus_GetMaxStrIdByPrefixAsync(objInFor.qxPrjId);
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.menuId = strMaxStrId;
        const returnBool = await QxPrjMenus_AddNewRecordAsync(objInFor);
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

  /** 设置字段值-InUse
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetInUse(arrMenuId: Array<string>, bolInUse: boolean) {
    const strThisFuncName = this.SetInUse.name;
    if (arrMenuId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrQxPrjMenusObjLst = await QxPrjMenus_GetObjLstByMenuIdLstAsync(arrMenuId);
      let intCount = 0;
      for (const objInFor of arrQxPrjMenusObjLst) {
        const objQxPrjMenusEN = new clsQxPrjMenusEN();
        ObjectAssign(objQxPrjMenusEN, objInFor);
        objQxPrjMenusEN.SetMenuId(objInFor.menuId);
        objQxPrjMenusEN.SetInUse(bolInUse);
        let returnBool = false;
        try {
          objQxPrjMenusEN.sfUpdFldSetStr = objQxPrjMenusEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await QxPrjMenus_UpdateRecordAsync(objQxPrjMenusEN);
        } catch (e) {
          const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
          console.error(strMsg);
          throw strMsg;
        }
        if (returnBool == true) {
          intCount++;
        } else {
          const strInfo = Format('设置记录不成功!');
          //显示信息框
          alert(strInfo);
        }
        await qxPrjMenusStore.delObj(objQxPrjMenusEN.menuId);
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        // await qxPrjMenusStore.delObj(strMenuId);
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 根据关键字列表删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   **/
  public async DelMultiRecord(arrMenuId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await QxPrjMenus_DelQxPrjMenussAsync(arrMenuId);
      if (returnInt > 0) {
        for (const strMenuId of arrMenuId) {
          await qxPrjMenusStore.delObj(strMenuId);
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
   * @param objQxPrjMenus:需要显示的对象
   **/
  public ShowQxPrjMenusObj(divContainer: HTMLDivElement, objQxPrjMenus: clsQxPrjMenusEN) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objQxPrjMenus);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objQxPrjMenus.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjQxPrjMenusEN:表实体类对象
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
   * 是否在用 (Used In CombineCondition())
   **/
  public get inUse_q(): boolean {
    const ddlbInUse_q = GetSelectObjInDivObj(this.divQuery, 'ddlbInUse_q');
    if (ddlbInUse_q.selectedIndex == 1) return true;
    else return false;
  }
  /**
   * 是否在用 (Used In CombineCondition())
   **/
  public set inUse_q(value: boolean) {
    //SetSelectValueByIdInDivObj(this.divQuery, "ddlbInUse_q", value !== null ? value.toString() : '');
    const ddlbInUse_q = GetSelectObjInDivObj(this.divQuery, 'ddlbInUse_q');
    if (value == true) ddlbInUse_q.selectedIndex = 1;
    else ddlbInUse_q.selectedIndex = 2;
  }
  /**
   * 是否叶子 (Used In CombineCondition())
   **/
  public get isLeafNode_q(): boolean {
    const ddlbIsLeafNode_q = GetSelectObjInDivObj(this.divQuery, 'ddlbIsLeafNode_q');
    if (ddlbIsLeafNode_q.selectedIndex == 1) return true;
    else return false;
  }
  /**
   * 是否叶子 (Used In CombineCondition())
   **/
  public set isLeafNode_q(value: boolean) {
    //SetSelectValueByIdInDivObj(this.divQuery, "ddlbIsLeafNode_q", value !== null ? value.toString() : '');
    const ddlbIsLeafNode_q = GetSelectObjInDivObj(this.divQuery, 'ddlbIsLeafNode_q');
    if (value == true) ddlbIsLeafNode_q.selectedIndex = 1;
    else ddlbIsLeafNode_q.selectedIndex = 2;
  }
  /**
   * 菜单Id (Used In CombineCondition())
   **/
  public get menuId_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtMenuId_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 菜单Id (Used In CombineCondition())
   **/
  public set menuId_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtMenuId_q', value);
  }
  /**
   * 菜单名 (Used In CombineCondition())
   **/
  public get menuName_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtMenuName_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 菜单名 (Used In CombineCondition())
   **/
  public set menuName_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtMenuName_q', value);
  }
  /**
   * 菜单标题 (Used In CombineCondition())
   **/
  public get menuTitle_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtMenuTitle_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 菜单标题 (Used In CombineCondition())
   **/
  public set menuTitle_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtMenuTitle_q', value);
  }
  /**
   * 上级菜单Id (Used In CombineCondition())
   **/
  public get upMenuId_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlUpMenuId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 上级菜单Id (Used In CombineCondition())
   **/
  public set upMenuId_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlUpMenuId_q', value);
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
