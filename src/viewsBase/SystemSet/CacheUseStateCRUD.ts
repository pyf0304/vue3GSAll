/**
 * 类名:CacheUseStateCRUD(界面:CacheUseStateCRUD)
 * 表名:CacheUseState(00050566)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:20:23
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:系统设置(SystemSet)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import { clsCacheUseStateENEx } from '@/ts/L0Entity/SystemSet/clsCacheUseStateENEx';
import {
  CacheUseState_GetRecCountByCondCache,
  CacheUseState_GetSubObjLstCache,
  CacheUseState_DelRecordAsync,
  CacheUseState_ReFreshCache,
  CacheUseState_GetObjBymIdAsync,
  CacheUseState_GetObjLstBymIdLstAsync,
  CacheUseState_AddNewRecordAsync,
  CacheUseState_DelCacheUseStatesAsync,
} from '@/ts/L3ForWApi/SystemSet/clsCacheUseStateWApi';
import {
  CacheUseStateEx_CopyToEx,
  CacheUseStateEx_FuncMapByFldName,
  CacheUseStateEx_GetObjExLstByPagerCache,
} from '@/ts/L3ForWApiExShare/SystemSet/clsCacheUseStateExWApi';
import { CacheMode_BindDdl_CacheModeIdByInUseInDivCache } from '@/ts/L3ForWApi/SystemSet/clsCacheModeWApi';
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
import { clsCacheUseStateEN } from '@/ts/L0Entity/SystemSet/clsCacheUseStateEN';
import {
  BindTab,
  ObjectAssign,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
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
/** CacheUseStateCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class CacheUseStateCRUD implements clsOperateList {
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

  public static UserIdCache = ''; //2、界面主表的缓存分类字段变量1
  public static UserIdStatic = ''; //5、处理添加、修改记录时PutData所用的界面静态变量, 用于在界面编辑函数中信息交互
  public static objPageCRUD: CacheUseStateCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public static ascOrDesc4SortFun = 'Asc';
  public static sortCacheUseStateBy = '';
  constructor(divLayout: HTMLDivElement) {
    CacheUseStateCRUD.objPageCRUD = this;
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
    return clsCacheUseStateEN._CurrTabName;
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
      if (CacheUseStateCRUD.sortCacheUseStateBy == '')
        CacheUseStateCRUD.sortCacheUseStateBy = 'mId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_CacheUseState4Func(this.divList);
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
    await this.BindGv_CacheUseState4Func(this.divList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrCacheUseStateObjLst: Array<clsCacheUseStateEN>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrCacheUseStateObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsCacheUseStateEN = arrCacheUseStateObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('缓存使用状态({0})导出.xlsx', clsCacheUseStateEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData4Func)
   **/
  public CombineData4Func(
    arrCacheUseStateExObjLst: Array<clsCacheUseStateENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrCacheUseStateExObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j]);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsCacheUseStateENEx = arrCacheUseStateExObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('缓存使用状态({0})导出.xlsx', clsCacheUseStateEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcel4Func)
   **/
  public async ExportExcel_CacheUseState4Func() {
    const strThisFuncName = this.ExportExcel_CacheUseState4Func.name;
    if (CacheUseStateCRUD.sortCacheUseStateBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortCacheUseStateBy)为空,请检查!(In BindGv_CacheUseStateCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objCacheUseStateCond = await this.CombineCacheUseStateConditionObj4ExportExcel();
    let arrCacheUseStateObjLst: Array<clsCacheUseStateEN> = [];
    let arrCacheUseStateExObjLst: Array<clsCacheUseStateENEx> = [];
    try {
      this.recCount = await CacheUseState_GetRecCountByCondCache(
        objCacheUseStateCond,
        CacheUseStateCRUD.UserIdCache,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objCacheUseStateCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrCacheUseStateObjLst = await CacheUseState_GetSubObjLstCache(
        objCacheUseStateCond,
        CacheUseStateCRUD.UserIdCache,
      );
      arrCacheUseStateExObjLst = arrCacheUseStateObjLst.map(CacheUseStateEx_CopyToEx);
    } catch (e) {
      const strMsg = `导出Excel时获取数据不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrCacheUseStateObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsCacheUseStateEN._CurrTabName,
        CacheUseStateCRUD.UserIdCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'mId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: 'mId',
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
          fldName: 'cacheModeId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '缓存方式名',
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
          fldName: 'cacheModeId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '缓存方式名',
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
          fldName: 'cacheModeId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '缓存方式英文名',
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
          fldName: 'cacheKey',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '缓存关键字',
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
          fldName: 'cacheSize',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '缓存大小',
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
          colHeader: '说明',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 7,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      try {
        await this.ExtendFldFuncMap(arrCacheUseStateExObjLst, arrDataColumn);
      } catch (e) {
        const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      arrCacheUseStateObjLst = arrCacheUseStateObjLst.sort(this.SortFunExportExcel);
      this.CombineData(arrCacheUseStateObjLst, arrDataColumn);
      //console.log("完成BindGv_CacheUseState!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 设置绑定下拉框，针对字段:[CacheModeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_CacheModeIdInDiv(bolInUse: boolean) {
    await CacheMode_BindDdl_CacheModeIdByInUseInDivCache(
      this.divQuery,
      'ddlCacheModeId_q',
      bolInUse,
    ); //
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    const BoolTrue = false; //在switch中未找到相关类型: tsDefaultValue(in AGC.PureClassEx.FuncParaType:GetTsTypeStr)

    await this.SetDdl_CacheModeIdInDiv(BoolTrue); //查询区域
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
      await this.BindGv_CacheUseState4Func(this.divList);
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
      await this.BindGv_CacheUseState4Func(this.divList);
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
      const returnInt = await CacheUseState_DelRecordAsync(lngmId);
      if (returnInt > 0) {
        CacheUseState_ReFreshCache(CacheUseStateCRUD.UserIdCache);
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
      const objCacheUseStateEN = await CacheUseState_GetObjBymIdAsync(lngmId);
      console.log('完成SelectRecord!', objCacheUseStateEN);
      Redirect('/Index/Main_CacheUseState');
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
      await this.BindGv_CacheUseState4Func(this.divList);
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
    await this.ExportExcel_CacheUseState4Func();
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineCacheUseStateCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    strWhereCond += Format(" and UserId ='{0}'", CacheUseStateCRUD.UserIdStatic);
    try {
      if (this.cacheModeId_q != '' && this.cacheModeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsCacheUseStateEN.con_CacheModeId,
          this.cacheModeId_q,
        );
      }
      if (this.cacheKey_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsCacheUseStateEN.con_CacheKey,
          this.cacheKey_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineCacheUseStateCondition)时出错!请联系管理员!{0}',
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
  public async CombineCacheUseStateConditionObj(): Promise<clsCacheUseStateEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objCacheUseStateCond = new clsCacheUseStateEN();
    objCacheUseStateCond.SetCondFldValue(
      clsCacheUseStateEN.con_UserId,
      CacheUseStateCRUD.UserIdStatic,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.cacheModeId_q != '' && this.cacheModeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsCacheUseStateEN.con_CacheModeId,
          this.cacheModeId_q,
        );
        objCacheUseStateCond.SetCondFldValue(
          clsCacheUseStateEN.con_CacheModeId,
          this.cacheModeId_q,
          '=',
        );
      }
      if (this.cacheKey_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsCacheUseStateEN.con_CacheKey,
          this.cacheKey_q,
        );
        objCacheUseStateCond.SetCondFldValue(
          clsCacheUseStateEN.con_CacheKey,
          this.cacheKey_q,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineCacheUseStateConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objCacheUseStateCond.whereCond = strWhereCond;
    return objCacheUseStateCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj4ExportExcel)
   * @returns 条件串(strWhereCond)
   **/
  public async CombineCacheUseStateConditionObj4ExportExcel(): Promise<clsCacheUseStateEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objCacheUseStateCond = new clsCacheUseStateENEx();
    objCacheUseStateCond.SetCondFldValue(
      clsCacheUseStateEN.con_UserId,
      CacheUseStateCRUD.UserIdStatic,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.cacheModeId_q != '' && this.cacheModeId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsCacheUseStateEN.con_CacheModeId,
          this.cacheModeId_q,
        );
        objCacheUseStateCond.SetCondFldValue(
          clsCacheUseStateEN.con_CacheModeId,
          this.cacheModeId_q,
          '=',
        );
      }
      if (this.cacheKey_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsCacheUseStateEN.con_CacheKey,
          this.cacheKey_q,
        );
        objCacheUseStateCond.SetCondFldValue(
          clsCacheUseStateEN.con_CacheKey,
          this.cacheKey_q,
          'like',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0019)在组合导出Excel条件对象(CombineCacheUseStateConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objCacheUseStateCond.whereCond = strWhereCond;
    return objCacheUseStateCond;
  }

  /** 显示CacheUseState对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrCacheUseStateObjLst:需要绑定的对象列表
   **/
  public async BindTab_CacheUseState(
    divContainer: HTMLDivElement,
    arrCacheUseStateObjLst: Array<clsCacheUseStateEN>,
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
        fldName: clsCacheUseStateEN.con_mId,
        sortBy: clsCacheUseStateEN.con_mId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'mId',
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
        fldName: clsCacheUseStateEN.con_UserId,
        sortBy: clsCacheUseStateEN.con_UserId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户Id',
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
        fldName: clsCacheUseStateEN.con_CacheModeId,
        sortBy: clsCacheUseStateEN.con_CacheModeId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '缓存方式名',
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
        fldName: clsCacheUseStateENEx.con_CacheModeName,
        sortBy: clsCacheUseStateENEx.con_CacheModeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '缓存方式名',
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
        fldName: clsCacheUseStateEN.con_CacheKey,
        sortBy: clsCacheUseStateEN.con_CacheKey,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '缓存关键字',
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
        fldName: clsCacheUseStateEN.con_CacheSize,
        sortBy: clsCacheUseStateEN.con_CacheSize,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '缓存大小',
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
        fldName: clsCacheUseStateEN.con_UseDate,
        sortBy: clsCacheUseStateEN.con_UseDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '使用日期',
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
        fldName: clsCacheUseStateEN.con_Memo,
        sortBy: clsCacheUseStateEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明',
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
      arrCacheUseStateObjLst,
      arrDataColumn,
      clsCacheUseStateEN.con_mId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 显示CacheUseState对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrCacheUseStateExObjLst:需要绑定的对象列表
   **/
  public async BindTab_CacheUseState4Func(
    divContainer: HTMLDivElement,
    arrCacheUseStateExObjLst: Array<clsCacheUseStateENEx>,
  ) {
    const strThisFuncName = this.BindTab_CacheUseState4Func.name;
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
        fldName: clsCacheUseStateEN.con_mId,
        sortBy: clsCacheUseStateEN.con_mId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'mId',
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
        fldName: clsCacheUseStateEN.con_UserId,
        sortBy: clsCacheUseStateEN.con_UserId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户Id',
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
        fldName: clsCacheUseStateEN.con_CacheModeId,
        sortBy: clsCacheUseStateEN.con_CacheModeId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '缓存方式名',
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
        fldName: clsCacheUseStateENEx.con_CacheModeName,
        sortBy: clsCacheUseStateENEx.con_CacheModeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '缓存方式名',
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
        fldName: clsCacheUseStateEN.con_CacheKey,
        sortBy: clsCacheUseStateEN.con_CacheKey,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '缓存关键字',
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
        fldName: clsCacheUseStateEN.con_CacheSize,
        sortBy: clsCacheUseStateEN.con_CacheSize,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '缓存大小',
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
        fldName: clsCacheUseStateEN.con_UseDate,
        sortBy: clsCacheUseStateEN.con_UseDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '使用日期',
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
        fldName: clsCacheUseStateEN.con_Memo,
        sortBy: clsCacheUseStateEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '说明',
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
      await this.ExtendFldFuncMap(arrCacheUseStateExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrCacheUseStateExObjLst,
      arrDataColumn,
      clsCacheUseStateEN.con_mId,
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
   * @param arrCacheUseStateExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrCacheUseStateExObjLst: Array<clsCacheUseStateENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsCacheUseStateEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrCacheUseStateExObjLst) {
        await CacheUseStateEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_CacheUseState4Func(this.divList);
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
  public async BindGv_CacheUseStateCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_CacheUseStateCache.name;
    if (CacheUseStateCRUD.sortCacheUseStateBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortCacheUseStateBy)为空,请检查!(In BindGv_CacheUseStateCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objCacheUseStateCond = await this.CombineCacheUseStateConditionObj();
    const strWhereCond = JSON.stringify(objCacheUseStateCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrCacheUseStateExObjLst: Array<clsCacheUseStateENEx> = [];
    try {
      this.recCount = await CacheUseState_GetRecCountByCondCache(
        objCacheUseStateCond,
        CacheUseStateCRUD.UserIdCache,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objCacheUseStateCond.whereCond,
        );
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objCacheUseStateCond.whereCond,
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
      if (CacheUseStateCRUD.sortFunStatic != undefined) {
        strSortFun = CacheUseStateCRUD.sortFunStatic(CacheUseStateCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: CacheUseStateCRUD.sortCacheUseStateBy,
        sortFun: strSortFun,
      };
      arrCacheUseStateExObjLst = await CacheUseStateEx_GetObjExLstByPagerCache(
        objPagerPara,
        CacheUseStateCRUD.UserIdCache,
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
    if (arrCacheUseStateExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format(
        '{0}_{1}',
        clsCacheUseStateEN._CurrTabName,
        CacheUseStateCRUD.UserIdCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_CacheUseState(divList, arrCacheUseStateExObjLst);
      //console.log("完成BindGv_CacheUseStateCache!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
   **/
  public async BindGv_CacheUseState4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_CacheUseState4Func.name;
    if (CacheUseStateCRUD.sortCacheUseStateBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortCacheUseStateBy)为空,请检查!(In BindGv_CacheUseStateCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objCacheUseStateCond = await this.CombineCacheUseStateConditionObj();
    objCacheUseStateCond.SetCondFldValue(
      clsCacheUseStateEN.con_UserId,
      CacheUseStateCRUD.UserIdCache,
      '=',
    );
    const strWhereCond = JSON.stringify(objCacheUseStateCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrCacheUseStateExObjLst: Array<clsCacheUseStateENEx> = [];
    try {
      this.recCount = await CacheUseState_GetRecCountByCondCache(
        objCacheUseStateCond,
        CacheUseStateCRUD.UserIdCache,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objCacheUseStateCond.whereCond,
        );
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objCacheUseStateCond.whereCond,
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
      if (CacheUseStateCRUD.sortFunStatic != undefined) {
        strSortFun = CacheUseStateCRUD.sortFunStatic(CacheUseStateCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: CacheUseStateCRUD.sortCacheUseStateBy,
        sortFun: strSortFun,
      };
      arrCacheUseStateExObjLst = await CacheUseStateEx_GetObjExLstByPagerCache(
        objPagerPara,
        CacheUseStateCRUD.UserIdCache,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrCacheUseStateExObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsCacheUseStateEN._CurrTabName,
        CacheUseStateCRUD.UserIdCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_CacheUseState4Func(divList, arrCacheUseStateExObjLst);
      //console.log("完成BindGv_CacheUseState4Func!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
   * @param objCacheUseStateENS:源对象
   * @returns 目标对象=>clsCacheUseStateEN:objCacheUseStateENT
   **/
  public CopyToEx(objCacheUseStateENS: clsCacheUseStateEN): clsCacheUseStateENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objCacheUseStateENT = new clsCacheUseStateENEx();
    try {
      ObjectAssign(objCacheUseStateENT, objCacheUseStateENS);
      return objCacheUseStateENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0025)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objCacheUseStateENT;
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
  public SortFunExportExcel(a: clsCacheUseStateEN, b: clsCacheUseStateEN): number {
    if (a.mId == b.mId) return a.mId - b.mId;
    else return a.userId.localeCompare(b.userId);
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
      CacheUseStateCRUD.ascOrDesc4SortFun,
      CacheUseStateCRUD.sortCacheUseStateBy,
      strSortExpress,
    );
    CacheUseStateCRUD.sortCacheUseStateBy = sortBy;
    CacheUseStateCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    CacheUseStateCRUD.sortFunStatic = sortFun;
    await this.BindGv_CacheUseState4Func(this.divList);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrmId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrCacheUseStateObjLst = await CacheUseState_GetObjLstBymIdLstAsync(arrmId);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrCacheUseStateObjLst) {
        const returnBool = await CacheUseState_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          CacheUseState_ReFreshCache(CacheUseStateCRUD.UserIdCache);
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
      const returnInt = await CacheUseState_DelCacheUseStatesAsync(arrmId);
      if (returnInt > 0) {
        for (const lngmId of arrmId) {
          CacheUseState_ReFreshCache(CacheUseStateCRUD.UserIdCache);
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
   * @param objCacheUseState:需要显示的对象
   **/
  public ShowCacheUseStateObj(divContainer: HTMLDivElement, objCacheUseState: clsCacheUseStateEN) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objCacheUseState);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objCacheUseState.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjCacheUseStateEN:表实体类对象
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
   * 缓存关键字 (Used In CombineCondition())
   **/
  public get cacheKey_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtCacheKey_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 缓存关键字 (Used In CombineCondition())
   **/
  public set cacheKey_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtCacheKey_q', value);
  }
  /**
   * 缓存方式Id (Used In CombineCondition())
   **/
  public get cacheModeId_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlCacheModeId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 缓存方式Id (Used In CombineCondition())
   **/
  public set cacheModeId_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlCacheModeId_q', value);
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
