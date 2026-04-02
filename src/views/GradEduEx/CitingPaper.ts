import $ from 'jquery';
import { PaperEx_GetObjExLstByPagerAsync } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';

import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { PaperReadWrite_GetMaxStrIdAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperReadWriteWApi';
import {
  Paper_GetObjByPaperIdAsync,
  Paper_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';

import { LiteratureType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { BindDdl_ObjLst, BindTab, Redirect, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { userStore } from '@/store/modulesShare/user';

/* PaperCRUD 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class CitingPaper extends PaperCRUD {
  public mstrListDiv = 'divDataLst';
  /*public objPager: clsPager = new clsPager();*/
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;
/**
* 函数功能:初始设置，用来初始化一些变量值
**/
public async InitVarSet(): Promise<void> {
  console.log('InitVarSet in QxPrjMenusCRUDEx');
  }
  /** 
  * 函数功能:初始化界面控件值，放在绑定下拉框之后
  **/
    public async InitCtlVar() : Promise<void> {
  console.log('InitCtlVar in QxPrjMenusCRUDEx');
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
  */
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      //const ddl_LiteratureTypeId_q = await this.BindDdl_LiteratureTypeId("ddlLiteratureTypeId_q");
      //1、为下拉框设置数据源,绑定列表数据
      PaperCRUD.sortPaperBy = 'paperTitle Asc';

      //2、显示无条件的表内容在GridView中
      await this.BindGv_vPaper(this.thisDivList);
      this.AddNewRecord();
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /// <summary>
  /// 为下拉框获取数据,从表:[Paper]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_LiteratureTypeId(ddlLiteratureTypeId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrPaperObjLst = await LiteratureType_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrPaperObjLst,
        clsLiteratureTypeEN.con_LiteratureTypeId,
        clsLiteratureTypeEN.con_LiteratureTypeName,
        '文献类型',
      );
      console.log('完成BindDdl_LiteratureTypeId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //添加相关方法
  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
   */
  public async AddNewRecord() {
    this.SetKeyReadOnly(true);
    this.btnOKUpd = '确认添加';
    this.btnCancel = '取消添加';
    this.Clear();
    //wucPaperReadWriteB1.paperRWId = clsPaperReadWriteBL.GetMaxStrId_S();

    try {
      const returnString: string = await PaperReadWrite_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = `获取表PaperReadWrite的最大关键字为空，不成功，请检查!`;
        //显示信息框
        alert(strInfo);
      } else {
        $('#txtPaperRWId').val(returnString);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
  }
  /// <summary>
  /// 在用户自定义控件中，设置关键字的值，是否只读
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetKeyReadOnly)
  /// </summary>
  /// <param name = "bolReadonly">是否只读</param>
  public SetKeyReadOnly(bolReadonly: boolean) {
    $('#txtPaperRWId').attr('ReadOnly', bolReadonly.toString());
  }
  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {
    this.paperRWId = '';
    this.readerId = '';
    $('#ddlPaperId option[0]').attr('selected', 'true');
    this.researchQuestion = '';
    $('#ddlOperationTypeId option[0]').attr('selected', 'true');
    this.updDate = '';
    this.updUser = '';
    this.memo = '';
  }

  /*
   * 获取年月日
   */
  public getNowDate(): string {
    const date = new Date();
    let month: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();
    if (month <= 9) {
      month = `0${month}`;
    }
    if (strDate <= 9) {
      strDate = `0${strDate}`;
    }

    return `${date
      .getFullYear()
      .toString()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async btnQuery_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    const strWhereCond = await this.CombinePaperCondition();
    try {
      this.recCount = await Paper_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: 1,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: PaperCRUD.sortPaperBy,
        sortFun: (x, y) => {
          x = x;
          y = y;

          return 0;
        },
      };
      const arrPaperExObjLst = await PaperEx_GetObjExLstByPagerAsync(objPagerPara);
      this.BindTab_vPaper(this.thisDivList, arrPaperExObjLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombinePaperCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.paperTitle_q != "") {
      //    strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      //}
      //if (this.literatureTypeId_q != "" && this.literatureTypeId_q != "0") {
      //    strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      //}
      //if (this.IsChecked_q == true) {
      //    strWhereCond += ` And ${clsPaperEN.con_IsChecked} = '1'`;
      //}
      //else {
      //    strWhereCond += ` And ${clsPaperEN.con_IsChecked} = '0'`;
      //}
      //if (this.IsQuotethesis_q == true) {
      //    strWhereCond += ` And ${clsPaperEN.con_IsQuotethesis} = '1'`;
      //}
      //else {
      //    strWhereCond += ` And ${clsPaperEN.con_IsQuotethesis} = '0'`;
      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的记录对象的列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   */
  public async BindGv_vPaper(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombinePaperCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrPaperExObjLst: Array<clsPaperENEx> = [];
    try {
      this.recCount = await Paper_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: PaperCRUD.sortPaperBy,
        sortFun: (x, y) => {
          x = x;
          y = y;

          return 0;
        },
      };
      arrPaperExObjLst = await PaperEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    if (arrPaperExObjLst.length == 0) {
      const strMsg = `根据条件获取的对象列表数为空！`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_vPaper(divList, arrPaperExObjLst);
      console.log('完成BindGv_vPaper!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  /* 显示vPaper对象的所有属性值
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
    <param name = "divContainer">显示容器</param>
    <param name = "arrPaperObjLst">需要绑定的对象列表</param>
  */
  public async BindTab_vPaper(divContainer: HTMLDivElement, arrPaperExObjLst: Array<clsPaperENEx>) {
    const strThisFuncName = this.BindTab_vPaper.name;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'paperTitle',
        colHeader: '论文标题',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'periodical',
        colHeader: '期刊',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'author',
        colHeader: '作者',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      //{
      //    fldName: "researchQuestion",
      //    colHeader: "研究问题",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "updDate",
      //    colHeader: "修改日期",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "updUser",
      //    colHeader: "修改用户Id",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'keyword',
        colHeader: '关键字',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'literatureSources',
        colHeader: '文献来源',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      //{
      //    fldName: "literatureLink",
      //    colHeader: "文献链接",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "uploadfileUrl",
      //    colHeader: "文件地址",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "checker",
      //    colHeader: "审核人",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "isChecked",
      //    colHeader: "是否检查",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'isQuotethesis',
        colHeader: '是否引用论文',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: '',
        colHeader: '选择引用',
        text: '选择',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info';
          btn1.setAttribute('onclick', `btnCitingPaper_Click('${strKeyId}');`);
          return btn1;
        },
      },
      //{
      //    fldName: "",
      //    colHeader: "删除",
      //    text: "删除",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info";
      //        btn1.setAttribute("onclick", `btnDelRecordInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},
    ];
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const divName4Pager = 'divPager';
    await BindTab(divDataLst, arrPaperExObjLst, arrDataColumn, 'paperId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, divName4Pager);
  }

  /* 
   根据关键字选择相应的记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
    <param name = "sender">参数列表</param>
  */
  public async SelectRecord(strPaperId: string) {
    try {
      await Paper_GetObjByPaperIdAsync(strPaperId);

      console.log('完成SelectRecord!');
      Redirect('/Index/Main_vPaper');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_QueryLst)
 */
  public async QueryvPaperLst(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombinePaperCondition();
    //intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    try {
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: PaperCRUD.sortPaperBy,
        sortFun: (x, y) => {
          x = x;
          y = y;

          return 0;
        },
      };
      const arrPaperExObjLst = await PaperEx_GetObjExLstByPagerAsync(objPagerPara);
      this.BindTab_vPaper(divList, arrPaperExObjLst);
      console.log('完成QueryvPaperLst!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 函数功能:在数据 列表中跳转到某一页
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
    <param name = "intPageIndex">页序号</param>
  */
  public async IndexPage(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_vPaper(this.thisDivList);
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvPaperBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);

    SetInputValueInDivObj(divName, 'hidSortvPaperBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvPaperBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'hidSortvPaperBy');
  }

  /*
   * 论文标题
   */
  public get paperTitle_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperTitle_q');
  }

  /*
   * 获取当前页序号
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }

  /*
   * 用户Id
   */
  public get hidUserId(): string {
    return userStore.getUserId;
  }
  /*
   * 设置关键字的值
   */
  public set keyId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidKeyId', value);
  }
  /*
   * 设置关键字的值
   */
  public get keyId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidKeyId');
  }
  /*
   * 备注
   */
  public set memo(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtMemo', value);
  }
  /*
   * 备注
   */
  public get memo(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtMemo');
  }
  /*
   * 操作类型ID
   */
  public set operationTypeId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlOperationTypeId', value);
  }
  /*
   * 操作类型ID
   */
  public get operationTypeId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlOperationTypeId');
  }
  /*
   * 操作类型ID
   */
  public get operationTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlOperationTypeId_q');
  }
  /*
   * 设置操作类型：Add||Update||Detail
   */
  public set opType(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidOpType', value);
  }
  /*
   * 论文Id
   */
  public set paperId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlPaperId', value);
  }
  /*
   * 论文Id
   */
  public get paperId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlPaperId');
  }

  /*
   * 论文读写Id
   */
  public set paperRWId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtPaperRWId', value);
  }
  /*
   * 论文读写Id
   */
  public get paperRWId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperRWId');
  }

  /*
   * 阅读者Id
   */
  public set readerId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtReaderId', value);
  }
  /*
   * 阅读者Id
   */
  public get readerId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtReaderId');
  }
  /*
   * 研究问题
   */
  public set researchQuestion(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtResearchQuestion', value);
  }
  /*
   * 研究问题
   */
  public get researchQuestion(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtResearchQuestion');
  }
  /*
   * 修改日期
   */
  public set updDate(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtUpdDate', value);
  }
  /*
   * 修改日期
   */
  public get updDate(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUpdDate');
  }
  /*
   * 修改用户Id
   */
  public set updUser(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtUpdUser', value);
  }
  /*
   * 修改用户Id
   */
  public get updUser(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUpdUser');
  }
  /*
   * 设置取消按钮的标题
   */
  public set btnCancel(value: string) {
    $('#btnCancel').html(value);
  }
  /*
   * 设置确定按钮的标题
   */
  public set btnOKUpd(value: string) {
    $('#btnOKUpd').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnOKUpd(): string {
    return $('#btnOKUpd').html();
  }
  /*
   * 文献类型Id
   */
  public get literatureTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlLiteratureTypeId_q');
  }
}
