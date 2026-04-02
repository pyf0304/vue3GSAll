import $ from 'jquery';
import { PaperCollectionLog_EditEx } from './PaperCollectionLog_EditEx';
import { PaperCollectionLogCRUD } from '@/viewsBase/GradEduPaper/PaperCollectionLogCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  HideDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { vPaperCollectionLog_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperCollectionLogWApi';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { Paper_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { BindDdl_ObjLst, BindTab_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsvPaperCollectionLogEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperCollectionLogEN';
import { clsPaperCollectionLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperCollectionLogEN';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { PaperCollectionLog_DelRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperCollectionLogWApi';
import { userStore } from '@/store/modulesShare/user';

/** PaperCollectionLogCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class PaperCollectionLogCRUDEx extends PaperCollectionLogCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortvPaperCollectionLogBy = "PaperCollectionLogId";
  /**
   * 每页记录数，在扩展类可以修改
   **/
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
    this.BindGv_vPaperCollectionLog(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vPaperCollectionLog':
        alert('该类没有绑定该函数：[this.BindGv_vPaperCollectionLog_Cache]！');
        //this.BindGv_vPaperCollectionLogCache();;
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: PaperCollectionLogCRUDEx;
    if (PaperCollectionLogCRUD.objPageCRUD == null) {
      PaperCollectionLogCRUD.objPageCRUD = new PaperCollectionLogCRUDEx(divLayout);
      objPage = <PaperCollectionLogCRUDEx>PaperCollectionLogCRUD.objPageCRUD;
    } else {
      objPage = <PaperCollectionLogCRUDEx>PaperCollectionLogCRUD.objPageCRUD;
    }
    const objPageEdit: PaperCollectionLog_EditEx = new PaperCollectionLog_EditEx(
      'PaperCollectionLog_EditEx',
      objPage,
    );

    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPageEdit.btnUpdateRecord_Click(strKeyId);
        }
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
        //objPage.btnExportExcel_Click();
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
        AccessBtnClickDefault(strCommandName, 'PaperCollectionLogCRUDExEx.btn_Click');

        break;
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      const strUserId = userStore.getUserId;

      if (strUserId != '') {
        //1、为下拉框设置数据源,绑定列表数据
        await this.BindDdl_PaperId('ddlPaperId');
        PaperCollectionLogCRUD.sortvPaperCollectionLogBy = 'updDate Desc';
        const strWhereCond = await this.CombinevPaperCollectionLogCondition();
        this.recCount = await vPaperCollectionLog_GetRecCountByCondAsync(strWhereCond);
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vPaperCollectionLog(this.thisDivList);
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        //    reLogin();
      }
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
  public async BindDdl_PaperId(ddlPaperId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlPaperId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlPaperId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrPaperObjLst: Array<clsPaperEN> = await Paper_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlPaperId,
        arrPaperObjLst,
        clsPaperEN.con_PaperId,
        clsPaperEN.con_PaperTitle,
        '',
      );
      console.log('完成BindDdl_PaperId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
       <returns>条件串(strWhereCond)</returns>
     */
  public async CombinevPaperCollectionLogCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    const strUserId = userStore.getUserId;

    $('#hidUserId').val(strUserId);
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsvPaperCollectionLogEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }

      if (this.updDate_q != '') {
        strWhereCond += ` And ${clsPaperCollectionLogEN.con_UpdDate} like '%${this.updDate_q}%'`;
      }

      strWhereCond += ` And updUser='${strUserId}'`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCollectionLogCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 显示vPaperCollectionLog对象的所有属性值
       (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
       <param name = "divContainer">显示容器</param>
       <param name = "arrPaperCollectionLogObjLst">需要绑定的对象列表</param>
     */
  public async BindTab_vPaperCollectionLog(
    divContainer: HTMLDivElement,
    arrvPaperCollectionLogObjLst: Array<clsvPaperCollectionLogEN>,
  ) {
    const strThisFuncName = this.BindTab_vPaperCollectionLog.name;
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
        fldName: 'updDate',
        colHeader: '收藏日期',
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
      //{
      //    fldName: "",
      //    colHeader: "阅读",
      //    Text: "阅读",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btnUpdateRecordInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},
      {
        fldName: '',
        colHeader: '取消收藏',
        text: '取消收藏',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info btn-sm';
          btn1.setAttribute('onclick', `btnDelRecordInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
    ];
    BindTab_V(
      divContainer,
      arrvPaperCollectionLogObjLst,
      arrDataColumn,
      'paperCollectionLogId',
      this,
    );

    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /* 
     在数据表里删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
    */
  public async btnDelRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert('请选择需要取消的收藏！');
        return '';
      }
      const lngKeyId = Number(strKeyId);
      await this.DelRecord(lngKeyId);
      await this.BindGv_vPaperCollectionLog(this.thisDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `收藏不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
     根据关键字删除记录
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
    */
  public async DelRecord(lngPaperCollectionLogId: number) {
    try {
      const returnInt = await PaperCollectionLog_DelRecordAsync(lngPaperCollectionLogId);
      if (returnInt > 0) {
        const strInfo = `取消收藏成功,共取消${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `收藏不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `收藏不成功. ${e}.`;
      alert(strMsg);
    }
  }
}
