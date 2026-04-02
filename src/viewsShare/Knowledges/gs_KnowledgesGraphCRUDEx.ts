import { gs_KnowledgesGraph_EditEx } from './gs_KnowledgesGraph_EditEx';

import { clsgs_KnowledgesGraphEN } from '@/ts/L0Entity/Knowledges/clsgs_KnowledgesGraphEN';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { gs_KnowledgesGraphCRUD } from '@/viewsBase/Knowledges/gs_KnowledgesGraphCRUD';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';

/* gs_KnowledgesGraphCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_KnowledgesGraphCRUDEx extends gs_KnowledgesGraphCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortgs_KnowledgesGraphBy: string = "knowledgeGraphId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    this.BindGv_gs_KnowledgesGraph4Func(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'gs_KnowledgesGraph':
        alert('该类没有绑定该函数：[this.BindGv_gs_KnowledgesGraph_Cache]！');
        //this.BindGv_gs_KnowledgesGraphCache();;
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: gs_KnowledgesGraphCRUDEx = new gs_KnowledgesGraphCRUDEx(divLayout);
    let objPageEdit;
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        // objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        // objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        objPageEdit = new gs_KnowledgesGraph_EditEx('gs_KnowledgesGraph_EditEx', objPage);

        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit = new gs_KnowledgesGraph_EditEx('gs_KnowledgesGraph_EditEx', objPage);

        objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_KnowledgesGraphCRUDExEx.btn_Click');

        break;
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async Combinegs_KnowledgesGraphCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.idCurrEduCls_q != "" && this.idCurrEduCls_q != "0") {
      //    strWhereCond += ` And ${clsgs_KnowledgesGraphEN.con_IdCurrEduCls} = '${this.idCurrEduCls_q}'`;
      //}
      strWhereCond += ` and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;

      if (this.courseId_q != '' && this.courseId_q != '0') {
        strWhereCond += ` And ${clsgs_KnowledgesGraphEN.con_CourseId} = '${this.courseId_q}'`;
      }
      if (this.knowledgeGraphName_q != '') {
        strWhereCond += ` And ${clsgs_KnowledgesGraphEN.con_KnowledgeGraphName} like '%${this.knowledgeGraphName_q}%'`;
      }
      if (this.createUser_q != '') {
        strWhereCond += ` And ${clsgs_KnowledgesGraphEN.con_CreateUser} like '%${this.createUser_q}%'`;
      }
      if (this.updDate_q != '') {
        strWhereCond += ` And ${clsgs_KnowledgesGraphEN.con_UpdDate} like '%${this.updDate_q}%'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0009)在组合查询条件(Combinegs_KnowledgesGraphCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 显示gs_KnowledgesGraph对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
     <param name = "divContainer">显示容器</param>
     <param name = "arrgs_KnowledgesGraphObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_gs_KnowledgesGraph(
    divContainer: HTMLDivElement,
    arrgs_KnowledgesGraphObjLst: Array<clsgs_KnowledgesGraphEN>,
  ) {
    const strThisFuncName = this.BindTab_gs_KnowledgesGraph.name;
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
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
        funcName: () => {},
      },
      {
        fldName: 'knowledgeGraphName',
        sortBy: 'knowledgeGraphName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '知识点图名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'createUser',
        sortBy: 'createUser',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '建立用户',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: 'updDate',
        sortBy: 'updDate',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: 'updUser',
        sortBy: 'updUser',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: 'idCurrEduCls',
        sortBy: 'idCurrEduCls',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '当前教学班流水号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: () => {},
      },
      {
        fldName: 'courseId',
        sortBy: 'courseId',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程Id',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: () => {},
      },
      {
        fldName: '',
        colHeader: '逻辑结构图',
        text: '构建',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Button',
        orderNum: 8,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info btn-sm';
          btn1.setAttribute('onclick', `btnDetailRecordInTab_Click("${strKeyId}");`);
          return btn1;
        },
      },
    ];
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    await BindTab(divDataLst, arrgs_KnowledgesGraphObjLst, arrDataColumn, 'knowledgeGraphId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
  */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      gs_KnowledgesGraphCRUD.CourseIdCache = clsPubLocalStorage.courseId;
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      gs_KnowledgesGraphCRUD.sortgs_KnowledgesGraphBy = 'knowledgeGraphName Asc';
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(objLayOut, this.divName4Pager);
        this.bolIsInitShow = true; //
      }
      //2、显示无条件的表内容在GridView中
      await this.BindGv_gs_KnowledgesGraph4Func(this.thisDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
}
