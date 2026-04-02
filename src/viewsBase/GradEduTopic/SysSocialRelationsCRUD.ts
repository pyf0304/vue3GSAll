/**
 * 类名:SysSocialRelationsCRUD(界面:SysSocialRelationsCRUD)
 * 表名:SysSocialRelations(01120644)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 11:34:41
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
  vSysSocialRelations_GetRecCountByCondCache,
  vSysSocialRelations_GetSubObjLstCache,
  vSysSocialRelations_GetObjBySocialIdAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvSysSocialRelationsWApi';
import { SysSecurityLevel_BindDdl_LevelIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsSysSecurityLevelWApi';
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
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  SysSocialRelations_DelRecordAsync,
  SysSocialRelations_ReFreshCache,
  SysSocialRelations_GetObjLstBySocialIdLstAsync,
  SysSocialRelations_GetMaxStrIdAsync,
  SysSocialRelations_AddNewRecordAsync,
  SysSocialRelations_DelSysSocialRelationssAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsSysSocialRelationsWApi';
import { clsvSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsEN';
import { clsvSysSocialRelationsENEx } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsENEx';
import {
  BindTab_V,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  vSysSocialRelationsEx_FuncMapByFldName,
  vSysSocialRelationsEx_GetObjExLstByPagerCache,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsvSysSocialRelationsExWApi';
import { clsSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsSysSocialRelationsEN';
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
/** SysSocialRelationsCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class SysSocialRelationsCRUD implements clsOperateList {
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

  public static IdCurrEduClsCache = ''; //2、界面主表的缓存分类字段变量1
  public static objPageCRUD: SysSocialRelationsCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public static ascOrDesc4SortFun = 'Asc';
  public static sortvSysSocialRelationsBy = '';
  constructor(divLayout: HTMLDivElement) {
    SysSocialRelationsCRUD.objPageCRUD = this;
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
    return clsSysSocialRelationsEN._CurrTabName;
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
      if (SysSocialRelationsCRUD.sortvSysSocialRelationsBy == '')
        SysSocialRelationsCRUD.sortvSysSocialRelationsBy = 'fullName Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vSysSocialRelationsCache(this.divList);
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
    await this.BindGv_vSysSocialRelationsCache(this.divList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrvSysSocialRelationsObjLst: Array<clsvSysSocialRelationsEN>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrvSysSocialRelationsObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsvSysSocialRelationsEN = arrvSysSocialRelationsObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('社会关系表({0})导出.xlsx', clsvSysSocialRelationsEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcelCache)
   **/
  public async ExportExcel_vSysSocialRelationsCache() {
    const strThisFuncName = this.ExportExcel_vSysSocialRelationsCache.name;
    if (SysSocialRelationsCRUD.sortvSysSocialRelationsBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvSysSocialRelationsBy)为空,请检查!(In BindGv_vSysSocialRelationsCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objvSysSocialRelationsCond =
      await this.CombinevSysSocialRelationsConditionObj4ExportExcel();
    objvSysSocialRelationsCond.SetCondFldValue(
      clsvSysSocialRelationsEN.con_IdCurrEduCls,
      SysSocialRelationsCRUD.IdCurrEduClsCache,
      '=',
    );
    let arrvSysSocialRelationsObjLst: Array<clsvSysSocialRelationsEN> = [];
    try {
      this.recCount = await vSysSocialRelations_GetRecCountByCondCache(
        objvSysSocialRelationsCond,
        SysSocialRelationsCRUD.IdCurrEduClsCache,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objvSysSocialRelationsCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrvSysSocialRelationsObjLst = await vSysSocialRelations_GetSubObjLstCache(
        objvSysSocialRelationsCond,
        SysSocialRelationsCRUD.IdCurrEduClsCache,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrvSysSocialRelationsObjLst.length == 0) {
      const strKey = Format(
        '{0}_{1}',
        clsSysSocialRelationsEN._CurrTabName,
        SysSocialRelationsCRUD.IdCurrEduClsCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'socialId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '社会Id',
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
          fldName: 'fullName',
          sortBy: '',
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
          fldName: 'nationality',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '国籍',
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
          fldName: 'workUnit',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '工作单位',
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
          fldName: 'major',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '专业',
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
          fldName: 'achievement',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '成就',
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
          fldName: 'detailedDescription',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '详细说明',
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
          fldName: 'levelName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '级别名称',
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
          fldName: 'updUser',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改人',
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
          fldName: 'updDate',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '修改日期',
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
          fldName: 'isSubmit',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否提交',
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
          fldName: 'okCount',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '点赞统计',
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
          fldName: 'citationCount',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '引用统计',
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
          fldName: 'versionCount',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '版本统计',
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
          fldName: 'idCurrEduCls',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '当前教学班流水号',
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
          fldName: 'memo',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '备注',
          text: '',
          tdClass: 'text-left',
          columnType: 'Label',
          orderNum: 18,
          funcName: (strKey: string, strText: string) => {
            console.log(strKey, strText);
            return new HTMLElement();
          },
        },
      ];
      arrvSysSocialRelationsObjLst = arrvSysSocialRelationsObjLst.sort(this.SortFunExportExcel);
      this.CombineData(arrvSysSocialRelationsObjLst, arrDataColumn);
      //console.log("完成BindGv_vSysSocialRelations!");
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 设置绑定下拉框，针对字段:[LevelId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_LevelIdInDiv() {
    await SysSecurityLevel_BindDdl_LevelIdInDivCache(this.divQuery, 'ddlLevelId_q'); //
  }

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    await this.SetDdl_LevelIdInDiv(); //查询区域
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
      await this.BindGv_vSysSocialRelationsCache(this.divList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "strSocialId": 表关键字
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
      await this.BindGv_vSysSocialRelationsCache(this.divList);
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
  public async btnSelectRecordInTab_Click(strSocialId: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strSocialId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strSocialId);
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
  public async DelRecord(strSocialId: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await SysSocialRelations_DelRecordAsync(strSocialId);
      if (returnInt > 0) {
        SysSocialRelations_ReFreshCache(SysSocialRelationsCRUD.IdCurrEduClsCache);
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
  public async SelectRecord(strSocialId: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objSysSocialRelationsEN = await vSysSocialRelations_GetObjBySocialIdAsync(strSocialId);
      console.log('完成SelectRecord!', objSysSocialRelationsEN);
      Redirect('/Index/Main_vSysSocialRelations');
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
      await this.BindGv_vSysSocialRelationsCache(this.divList);
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
    await this.ExportExcel_vSysSocialRelationsCache();
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevSysSocialRelationsCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.fullName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvSysSocialRelationsEN.con_FullName,
          this.fullName_q,
        );
      }
      if (this.achievement_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvSysSocialRelationsEN.con_Achievement,
          this.achievement_q,
        );
      }
      if (this.levelId_q != '' && this.levelId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvSysSocialRelationsEN.con_LevelId,
          this.levelId_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(CombineSysSocialRelationsCondition)时出错!请联系管理员!{0}',
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
  public async CombinevSysSocialRelationsConditionObj(): Promise<clsvSysSocialRelationsEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvSysSocialRelationsCond = new clsvSysSocialRelationsEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.fullName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvSysSocialRelationsEN.con_FullName,
          this.fullName_q,
        );
        objvSysSocialRelationsCond.SetCondFldValue(
          clsvSysSocialRelationsEN.con_FullName,
          this.fullName_q,
          'like',
        );
      }
      if (this.achievement_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvSysSocialRelationsEN.con_Achievement,
          this.achievement_q,
        );
        objvSysSocialRelationsCond.SetCondFldValue(
          clsvSysSocialRelationsEN.con_Achievement,
          this.achievement_q,
          'like',
        );
      }
      if (this.levelId_q != '' && this.levelId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvSysSocialRelationsEN.con_LevelId,
          this.levelId_q,
        );
        objvSysSocialRelationsCond.SetCondFldValue(
          clsvSysSocialRelationsEN.con_LevelId,
          this.levelId_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineSysSocialRelationsConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvSysSocialRelationsCond.whereCond = strWhereCond;
    return objvSysSocialRelationsCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj4ExportExcel)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevSysSocialRelationsConditionObj4ExportExcel(): Promise<clsvSysSocialRelationsEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvSysSocialRelationsCond = new clsvSysSocialRelationsENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.fullName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvSysSocialRelationsEN.con_FullName,
          this.fullName_q,
        );
        objvSysSocialRelationsCond.SetCondFldValue(
          clsvSysSocialRelationsEN.con_FullName,
          this.fullName_q,
          'like',
        );
      }
      if (this.achievement_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvSysSocialRelationsEN.con_Achievement,
          this.achievement_q,
        );
        objvSysSocialRelationsCond.SetCondFldValue(
          clsvSysSocialRelationsEN.con_Achievement,
          this.achievement_q,
          'like',
        );
      }
      if (this.levelId_q != '' && this.levelId_q != '0') {
        strWhereCond += Format(
          " And {0} = '{1}'",
          clsvSysSocialRelationsEN.con_LevelId,
          this.levelId_q,
        );
        objvSysSocialRelationsCond.SetCondFldValue(
          clsvSysSocialRelationsEN.con_LevelId,
          this.levelId_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0019)在组合导出Excel条件对象(CombineSysSocialRelationsConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvSysSocialRelationsCond.whereCond = strWhereCond;
    return objvSysSocialRelationsCond;
  }

  /** 显示vSysSocialRelations对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrSysSocialRelationsObjLst:需要绑定的对象列表
   **/
  public async BindTab_vSysSocialRelations(
    divContainer: HTMLDivElement,
    arrvSysSocialRelationsObjLst: Array<clsvSysSocialRelationsEN>,
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
        fldName: clsvSysSocialRelationsEN.con_FullName,
        sortBy: clsvSysSocialRelationsEN.con_FullName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '姓名',
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
        fldName: clsvSysSocialRelationsEN.con_Nationality,
        sortBy: clsvSysSocialRelationsEN.con_Nationality,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '国籍',
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
        fldName: clsvSysSocialRelationsEN.con_WorkUnit,
        sortBy: clsvSysSocialRelationsEN.con_WorkUnit,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '工作单位',
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
        fldName: clsvSysSocialRelationsEN.con_Major,
        sortBy: clsvSysSocialRelationsEN.con_Major,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业',
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
        fldName: clsvSysSocialRelationsEN.con_Achievement,
        sortBy: clsvSysSocialRelationsEN.con_Achievement,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '成就',
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
        fldName: clsvSysSocialRelationsEN.con_DetailedDescription,
        sortBy: clsvSysSocialRelationsEN.con_DetailedDescription,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '详细说明',
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
        fldName: clsvSysSocialRelationsEN.con_LevelName,
        sortBy: clsvSysSocialRelationsEN.con_LevelName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '级别名称',
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
        fldName: clsvSysSocialRelationsEN.con_UpdUser,
        sortBy: clsvSysSocialRelationsEN.con_UpdUser,
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
        fldName: clsvSysSocialRelationsEN.con_UpdDate,
        sortBy: clsvSysSocialRelationsEN.con_UpdDate,
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
      {
        fldName: clsvSysSocialRelationsEN.con_IsSubmit,
        sortBy: clsvSysSocialRelationsEN.con_IsSubmit,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否提交',
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
    await BindTab_V(
      divDataLst,
      arrvSysSocialRelationsObjLst,
      arrDataColumn,
      clsvSysSocialRelationsEN.con_SocialId,
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
   * @param arrvSysSocialRelationsExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrvSysSocialRelationsExObjLst: Array<clsvSysSocialRelationsENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsvSysSocialRelationsEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrvSysSocialRelationsExObjLst) {
        await vSysSocialRelationsEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_vSysSocialRelationsCache(this.divList);
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
  public async BindGv_vSysSocialRelationsCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_vSysSocialRelationsCache.name;
    if (SysSocialRelationsCRUD.sortvSysSocialRelationsBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvSysSocialRelationsBy)为空,请检查!(In BindGv_vSysSocialRelationsCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objvSysSocialRelationsCond = await this.CombinevSysSocialRelationsConditionObj();
    const strWhereCond = JSON.stringify(objvSysSocialRelationsCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvSysSocialRelationsExObjLst: Array<clsvSysSocialRelationsENEx> = [];
    try {
      this.recCount = await vSysSocialRelations_GetRecCountByCondCache(
        objvSysSocialRelationsCond,
        SysSocialRelationsCRUD.IdCurrEduClsCache,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objvSysSocialRelationsCond.whereCond,
        );
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objvSysSocialRelationsCond.whereCond,
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
      if (SysSocialRelationsCRUD.sortFunStatic != undefined) {
        strSortFun = SysSocialRelationsCRUD.sortFunStatic(SysSocialRelationsCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: SysSocialRelationsCRUD.sortvSysSocialRelationsBy,
        sortFun: strSortFun,
      };
      arrvSysSocialRelationsExObjLst = await vSysSocialRelationsEx_GetObjExLstByPagerCache(
        objPagerPara,
        SysSocialRelationsCRUD.IdCurrEduClsCache,
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
    if (arrvSysSocialRelationsExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format(
        '{0}_{1}',
        clsSysSocialRelationsEN._CurrTabName,
        SysSocialRelationsCRUD.IdCurrEduClsCache,
      );
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_vSysSocialRelations(divList, arrvSysSocialRelationsExObjLst);
      //console.log("完成BindGv_vSysSocialRelationsCache!");
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
  public SortFunExportExcel(a: clsvSysSocialRelationsEN, b: clsvSysSocialRelationsEN): number {
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
      SysSocialRelationsCRUD.ascOrDesc4SortFun,
      SysSocialRelationsCRUD.sortvSysSocialRelationsBy,
      strSortExpress,
    );
    SysSocialRelationsCRUD.sortvSysSocialRelationsBy = sortBy;
    SysSocialRelationsCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    SysSocialRelationsCRUD.sortFunStatic = sortFun;
    await this.BindGv_vSysSocialRelationsCache(this.divList);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrSocialId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrSysSocialRelationsObjLst = await SysSocialRelations_GetObjLstBySocialIdLstAsync(
        arrSocialId,
      );
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrSysSocialRelationsObjLst) {
        const strMaxStrId = await SysSocialRelations_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.socialId = strMaxStrId;
        const returnBool = await SysSocialRelations_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          SysSocialRelations_ReFreshCache(SysSocialRelationsCRUD.IdCurrEduClsCache);
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
  public async DelMultiRecord(arrSocialId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await SysSocialRelations_DelSysSocialRelationssAsync(arrSocialId);
      if (returnInt > 0) {
        for (const strSocialId of arrSocialId) {
          SysSocialRelations_ReFreshCache(SysSocialRelationsCRUD.IdCurrEduClsCache);
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
   * @param objSysSocialRelations:需要显示的对象
   **/
  public ShowSysSocialRelationsObj(
    divContainer: HTMLDivElement,
    objSysSocialRelations: clsSysSocialRelationsEN,
  ) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objSysSocialRelations);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objSysSocialRelations.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjSysSocialRelationsEN:表实体类对象
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
   * 成就 (Used In CombineCondition())
   **/
  public get achievement_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtAchievement_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 成就 (Used In CombineCondition())
   **/
  public set achievement_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtAchievement_q', value);
  }
  /**
   * 姓名 (Used In CombineCondition())
   **/
  public get fullName_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtFullName_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 姓名 (Used In CombineCondition())
   **/
  public set fullName_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtFullName_q', value);
  }
  /**
   * 级别Id (Used In CombineCondition())
   **/
  public get levelId_q(): string {
    const strValue = GetSelectValueInDivObj(this.divQuery, 'ddlLevelId_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 级别Id (Used In CombineCondition())
   **/
  public set levelId_q(value: string) {
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlLevelId_q', value);
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
