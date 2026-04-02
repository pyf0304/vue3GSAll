/**
 * 类名:qa_PaperCRUD(界面:qa_PaperCRUD)
 * 表名:qa_Paper(01120643)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 11:33:56
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:互动管理(InteractManage)
 * 框架-层名:Vue_界面后台_TS(TS)(Vue_ViewScriptCS_TS)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
import {
  vqa_Paper_GetRecCountByCondCache,
  vqa_Paper_GetSubObjLstCache,
  vqa_Paper_GetObjByQaPaperIdAsync,
} from '@/ts/L3ForWApi/InteractManage/clsvqa_PaperWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetLabelHtmlInDivObj,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  qa_Paper_DelRecordAsync,
  qa_Paper_ReFreshCache,
  qa_Paper_GetObjLstByQaPaperIdLstAsync,
  qa_Paper_GetMaxStrIdAsync,
  qa_Paper_AddNewRecordAsync,
  qa_Paper_Delqa_PapersAsync,
} from '@/ts/L3ForWApi/InteractManage/clsqa_PaperWApi';
import { clsvqa_PaperEN } from '@/ts/L0Entity/InteractManage/clsvqa_PaperEN';
import { clsvqa_PaperENEx } from '@/ts/L0Entity/InteractManage/clsvqa_PaperENEx';
import {
  BindTab_V,
  arrSelectedKeys,
  confirmDel,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import {
  vqa_PaperEx_FuncMapByFldName,
  vqa_PaperEx_GetObjExLstByPagerCache,
} from '@/ts/L3ForWApiEx/InteractManage/clsvqa_PaperExWApi';
import { clsqa_PaperEN } from '@/ts/L0Entity/InteractManage/clsqa_PaperEN';
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
/** qa_PaperCRUD 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:GeneCode)
 **/
export abstract class qa_PaperCRUD implements clsOperateList {
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

  public static IdCurrEduClsCache = ''; //2、界面主表的缓存分类字段变量1
  public static IdCurrEduClsStatic = ''; //6、定义下拉框条件变量1
  public static objPageCRUD: qa_PaperCRUD;
  public static sortFunStatic: (ascOrDesc: string) => (x: any, y: any) => number;
  public static ascOrDesc4SortFun = 'Asc';
  public static sortvqa_PaperBy = '';
  constructor(divLayout: HTMLDivElement) {
    qa_PaperCRUD.objPageCRUD = this;
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
    return clsqa_PaperEN._CurrTabName;
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
      if (qa_PaperCRUD.sortvqa_PaperBy == '') qa_PaperCRUD.sortvqa_PaperBy = 'questionsCount Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vqa_PaperCache(this.divList);
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
    await this.BindGv_vqa_PaperCache(this.divList);
  }

  /** 合并数据
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineData)
   **/
  public CombineData(
    arrvqa_PaperObjLst: Array<clsvqa_PaperEN>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const intRowNum = arrvqa_PaperObjLst.length;
    const intColNum = arrDataColumn.length;
    const arrData: Array<Array<any>> = new Array<Array<any>>();
    const arrHead: Array<any> = new Array<any>();
    for (let j = 0; j < intColNum; j++) {
      arrHead.push(arrDataColumn[j].colHeader);
    }
    arrData.push(arrHead);
    for (let i = 0; i < intRowNum; i++) {
      const arrRow: Array<any> = new Array<any>();
      const objEN: clsvqa_PaperEN = arrvqa_PaperObjLst[i];
      for (let j = 0; j < intColNum; j++) {
        arrRow.push(objEN.GetFldValue(arrDataColumn[j].fldName)); //i + "" + j;
      }
      arrData.push(arrRow);
    }
    //console.log("arrData", arrData);
    const strFileName = Format('论文答疑表({0})导出.xlsx', clsvqa_PaperEN._CurrTabName);
    exportSpecialExcel_pyf(arrData, strFileName);
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ExportExcelCache)
   **/
  public async ExportExcel_vqa_PaperCache() {
    const strThisFuncName = this.ExportExcel_vqa_PaperCache.name;
    if (qa_PaperCRUD.sortvqa_PaperBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvqa_PaperBy)为空,请检查!(In BindGv_vqa_PaperCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objvqa_PaperCond = await this.Combinevqa_PaperConditionObj4ExportExcel();
    objvqa_PaperCond.SetCondFldValue(
      clsvqa_PaperEN.con_IdCurrEduCls,
      qa_PaperCRUD.IdCurrEduClsCache,
      '=',
    );
    let arrvqa_PaperObjLst: Array<clsvqa_PaperEN> = [];
    try {
      this.recCount = await vqa_Paper_GetRecCountByCondCache(
        objvqa_PaperCond,
        qa_PaperCRUD.IdCurrEduClsCache,
      );
      if (this.recCount == 0) {
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objvqa_PaperCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      arrvqa_PaperObjLst = await vqa_Paper_GetSubObjLstCache(
        objvqa_PaperCond,
        qa_PaperCRUD.IdCurrEduClsCache,
      );
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrvqa_PaperObjLst.length == 0) {
      const strKey = Format('{0}_{1}', clsqa_PaperEN._CurrTabName, qa_PaperCRUD.IdCurrEduClsCache);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      return;
    }
    try {
      const arrDataColumn: Array<clsDataColumn> = [
        {
          fldName: 'qaPaperId',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '论文答疑Id',
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
          fldName: 'questionsCount',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '提问计数',
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
          fldName: 'isDelete',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否删除',
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
          fldName: 'isPublic',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否公开',
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
          fldName: 'isSubmit',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '是否提交',
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
          fldName: 'updUser',
          sortBy: '',
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
          fldName: 'userName',
          sortBy: '',
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
          fldName: 'updDate',
          sortBy: '',
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
          fldName: 'memo',
          sortBy: '',
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
        {
          fldName: 'paperTitle',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '论文标题',
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
          fldName: 'attachmentCount',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '附件计数',
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
          fldName: 'paperContent',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '主题内容',
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
          fldName: 'periodical',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '期刊',
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
          fldName: 'author',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '作者',
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
          fldName: 'researchQuestion',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '研究问题',
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
          fldName: 'literatureSources',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '文献来源',
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
          fldName: 'uploadfileUrl',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '文件地址',
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
          fldName: 'idXzMajor',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '专业流水号',
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
          fldName: 'majorName',
          sortBy: '',
          sortFun: SortFun,
          getDataSource: '',
          colHeader: '专业名称',
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
      arrvqa_PaperObjLst = arrvqa_PaperObjLst.sort(this.SortFunExportExcel);
      this.CombineData(arrvqa_PaperObjLst, arrDataColumn);
      //console.log("完成BindGv_vqa_Paper!");
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
      await this.BindGv_vqa_PaperCache(this.divList);
    } catch (e) {
      const strMsg = `复制记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 在数据表里删除记录
   * "strQaPaperId": 表关键字
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
      await this.BindGv_vqa_PaperCache(this.divList);
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
  public async btnSelectRecordInTab_Click(strQaPaperId: string) {
    const strThisFuncName = this.btnSelectRecordInTab_Click.name;
    try {
      if (IsNullOrEmpty(strQaPaperId) == true) {
        const strMsg = '请选择相关记录,请检查!';
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (confirmDel(0) == false) {
        return;
      }
      this.SelectRecord(strQaPaperId);
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
  public async DelRecord(strQaPaperId: string) {
    const strThisFuncName = this.DelRecord.name;
    try {
      const returnInt = await qa_Paper_DelRecordAsync(strQaPaperId);
      if (returnInt > 0) {
        qa_Paper_ReFreshCache(qa_PaperCRUD.IdCurrEduClsCache);
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
  public async SelectRecord(strQaPaperId: string) {
    const strThisFuncName = this.SelectRecord.name;
    try {
      const objqa_PaperEN = await vqa_Paper_GetObjByQaPaperIdAsync(strQaPaperId);
      console.log('完成SelectRecord!', objqa_PaperEN);
      Redirect('/Index/Main_vqa_Paper');
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
      await this.BindGv_vqa_PaperCache(this.divList);
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
    await this.ExportExcel_vqa_PaperCache();
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinevqa_PaperCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      if (this.paperTitle_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvqa_PaperEN.con_PaperTitle,
          this.paperTitle_q,
        );
      }
      if (this.userName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvqa_PaperEN.con_UserName,
          this.userName_q,
        );
      }
      if (this.updDate_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvqa_PaperEN.con_UpdDate,
          this.updDate_q,
        );
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0017)在组合查询条件(Combineqa_PaperCondition)时出错!请联系管理员!{0}',
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
  public async Combinevqa_PaperConditionObj(): Promise<clsvqa_PaperEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvqa_PaperCond = new clsvqa_PaperEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvqa_PaperEN.con_PaperTitle,
          this.paperTitle_q,
        );
        objvqa_PaperCond.SetCondFldValue(clsvqa_PaperEN.con_PaperTitle, this.paperTitle_q, 'like');
      }
      if (this.userName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvqa_PaperEN.con_UserName,
          this.userName_q,
        );
        objvqa_PaperCond.SetCondFldValue(clsvqa_PaperEN.con_UserName, this.userName_q, 'like');
      }
      if (this.updDate_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvqa_PaperEN.con_UpdDate,
          this.updDate_q,
        );
        objvqa_PaperCond.SetCondFldValue(clsvqa_PaperEN.con_UpdDate, this.updDate_q, 'like');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(Combineqa_PaperConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvqa_PaperCond.whereCond = strWhereCond;
    return objvqa_PaperCond;
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj4ExportExcel)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinevqa_PaperConditionObj4ExportExcel(): Promise<clsvqa_PaperEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvqa_PaperCond = new clsvqa_PaperENEx();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvqa_PaperEN.con_PaperTitle,
          this.paperTitle_q,
        );
        objvqa_PaperCond.SetCondFldValue(clsvqa_PaperEN.con_PaperTitle, this.paperTitle_q, 'like');
      }
      if (this.userName_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvqa_PaperEN.con_UserName,
          this.userName_q,
        );
        objvqa_PaperCond.SetCondFldValue(clsvqa_PaperEN.con_UserName, this.userName_q, 'like');
      }
      if (this.updDate_q != '') {
        strWhereCond += Format(
          " And {0} like '% {1}%'",
          clsvqa_PaperEN.con_UpdDate,
          this.updDate_q,
        );
        objvqa_PaperCond.SetCondFldValue(clsvqa_PaperEN.con_UpdDate, this.updDate_q, 'like');
      }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0019)在组合导出Excel条件对象(Combineqa_PaperConditionObj4ExportExcel)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvqa_PaperCond.whereCond = strWhereCond;
    return objvqa_PaperCond;
  }

  /** 显示vqa_Paper对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器，其中包括divDataLst,divPager, divDataLst显示数据, divPager显示分页
   * @param arrqa_PaperObjLst:需要绑定的对象列表
   **/
  public async BindTab_vqa_Paper(
    divContainer: HTMLDivElement,
    arrvqa_PaperObjLst: Array<clsvqa_PaperEN>,
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
        fldName: clsvqa_PaperEN.con_PaperTitle,
        sortBy: clsvqa_PaperEN.con_PaperTitle,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '论文标题',
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
        fldName: clsvqa_PaperEN.con_IsPublic,
        sortBy: clsvqa_PaperEN.con_IsPublic,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否公开',
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
        fldName: clsvqa_PaperEN.con_IsSubmit,
        sortBy: clsvqa_PaperEN.con_IsSubmit,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '是否提交',
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
        fldName: clsvqa_PaperEN.con_UserName,
        sortBy: clsvqa_PaperEN.con_UserName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户名',
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
        fldName: clsvqa_PaperEN.con_UpdDate,
        sortBy: clsvqa_PaperEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
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
        fldName: clsvqa_PaperEN.con_AttachmentCount,
        sortBy: clsvqa_PaperEN.con_AttachmentCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '附件计数',
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
        fldName: clsvqa_PaperEN.con_QuestionsCount,
        sortBy: clsvqa_PaperEN.con_QuestionsCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '提问计数',
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
        fldName: clsvqa_PaperEN.con_AnswerCount,
        sortBy: clsvqa_PaperEN.con_AnswerCount,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '回答计数',
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
      arrvqa_PaperObjLst,
      arrDataColumn,
      clsvqa_PaperEN.con_QaPaperId,
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
   * @param arrvqa_PaperExObjLst:需要映射的对象列表
   * @param arrDataColumn:用于绑定表的数据列信息
   **/
  public async ExtendFldFuncMap(
    arrvqa_PaperExObjLst: Array<clsvqa_PaperENEx>,
    arrDataColumn: Array<clsDataColumn>,
  ) {
    const arrFldName = clsvqa_PaperEN.AttributeName;
    for (const objDataColumn of arrDataColumn) {
      if (IsNullOrEmpty(objDataColumn.fldName) == true) continue;
      if (arrFldName.indexOf(objDataColumn.fldName) > -1) continue;
      for (const objInFor of arrvqa_PaperExObjLst) {
        await vqa_PaperEx_FuncMapByFldName(objDataColumn.fldName, objInFor);
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
    await this.BindGv_vqa_PaperCache(this.divList);
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
  public async BindGv_vqa_PaperCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_vqa_PaperCache.name;
    if (qa_PaperCRUD.sortvqa_PaperBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvqa_PaperBy)为空,请检查!(In BindGv_vqa_PaperCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objvqa_PaperCond = await this.Combinevqa_PaperConditionObj();
    const strWhereCond = JSON.stringify(objvqa_PaperCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvqa_PaperExObjLst: Array<clsvqa_PaperENEx> = [];
    try {
      this.recCount = await vqa_Paper_GetRecCountByCondCache(
        objvqa_PaperCond,
        qa_PaperCRUD.IdCurrEduClsCache,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', objvqa_PaperCond.whereCond);
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objvqa_PaperCond.whereCond,
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
      if (qa_PaperCRUD.sortFunStatic != undefined) {
        strSortFun = qa_PaperCRUD.sortFunStatic(qa_PaperCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: qa_PaperCRUD.sortvqa_PaperBy,
        sortFun: strSortFun,
      };
      arrvqa_PaperExObjLst = await vqa_PaperEx_GetObjExLstByPagerCache(
        objPagerPara,
        qa_PaperCRUD.IdCurrEduClsCache,
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
    if (arrvqa_PaperExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format('{0}_{1}', clsqa_PaperEN._CurrTabName, qa_PaperCRUD.IdCurrEduClsCache);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_vqa_Paper(divList, arrvqa_PaperExObjLst);
      //console.log("完成BindGv_vqa_PaperCache!");
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
  public SortFunExportExcel(a: clsvqa_PaperEN, b: clsvqa_PaperEN): number {
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
      qa_PaperCRUD.ascOrDesc4SortFun,
      qa_PaperCRUD.sortvqa_PaperBy,
      strSortExpress,
    );
    qa_PaperCRUD.sortvqa_PaperBy = sortBy;
    qa_PaperCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    qa_PaperCRUD.sortFunStatic = sortFun;
    await this.BindGv_vqa_PaperCache(this.divList);
  }

  /** 复制记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   **/
  public async CopyRecord(arrQaPaperId: Array<string>) {
    const strThisFuncName = this.CopyRecord.name;
    try {
      const arrqa_PaperObjLst = await qa_Paper_GetObjLstByQaPaperIdLstAsync(arrQaPaperId);
      //console.log('responseText=');
      //console.log(responseText);
      let intCount = 0;
      for (const objInFor of arrqa_PaperObjLst) {
        const strMaxStrId = await qa_Paper_GetMaxStrIdAsync();
        //console.log('strMaxStrId=' + strMaxStrId);
        objInFor.qaPaperId = strMaxStrId;
        const returnBool = await qa_Paper_AddNewRecordAsync(objInFor);
        //console.log('returnBool=');
        //console.log(returnBool);
        if (returnBool == true) {
          qa_Paper_ReFreshCache(qa_PaperCRUD.IdCurrEduClsCache);
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
  public async DelMultiRecord(arrQaPaperId: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnInt = await qa_Paper_Delqa_PapersAsync(arrQaPaperId);
      if (returnInt > 0) {
        for (const strQaPaperId of arrQaPaperId) {
          qa_Paper_ReFreshCache(qa_PaperCRUD.IdCurrEduClsCache);
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
   * @param objqa_Paper:需要显示的对象
   **/
  public Showqa_PaperObj(divContainer: HTMLDivElement, objqa_Paper: clsqa_PaperEN) {
    if (divContainer == null) {
      alert(Format('所给div为空，divContainer为null!', divContainer));
      return;
    }
    const sstrKeys = GetObjKeys(objqa_Paper);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objqa_Paper.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = Format('{0}:{1}', strKey, strValue);
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /** 函数功能:从界面列表中获取第一个关键字的值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
   * @param pobjqa_PaperEN:表实体类对象
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
   * 论文标题 (Used In CombineCondition())
   **/
  public get paperTitle_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtPaperTitle_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 论文标题 (Used In CombineCondition())
   **/
  public set paperTitle_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtPaperTitle_q', value);
  }
  /**
   * 修改日期 (Used In CombineCondition())
   **/
  public get updDate_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtUpdDate_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 修改日期 (Used In CombineCondition())
   **/
  public set updDate_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtUpdDate_q', value);
  }
  /**
   * 用户名 (Used In CombineCondition())
   **/
  public get userName_q(): string {
    const strValue = GetInputValueInDivObj(this.divQuery, 'txtUserName_q');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 用户名 (Used In CombineCondition())
   **/
  public set userName_q(value: string) {
    SetInputValueInDivObj(this.divQuery, 'txtUserName_q', value);
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
