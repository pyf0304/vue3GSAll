import $ from 'jquery';
import { sys_RequestPush_EditEx } from './sys_RequestPush_EditEx';
import { sys_RequestPushEx_GetObjExLstByPagerCache } from '@/ts/L3ForWApiEx/GradEduTools/clssys_RequestPushExWApi';
import { sys_RequestPushCRUD } from '@/viewsBase/GradEduTools/sys_RequestPushCRUD';
import { clssys_RequestPushEN } from '@/ts/L0Entity/GradEduTools/clssys_RequestPushEN';
import { clssys_RequestPushENEx } from '@/ts/L0Entity/GradEduTools/clssys_RequestPushENEx';
import { sys_RequestPush_GetRecCountByCondCache } from '@/ts/L3ForWApi/GradEduTools/clssys_RequestPushWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';

/* sys_RequestPushCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class sys_RequestPushCRUDEx extends sys_RequestPushCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortsys_RequestPushBy: string = "requestId";
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
    this.BindGv_sys_RequestPushCache(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'sys_RequestPush':
        alert('该类没有绑定该函数：[this.BindGv_sys_RequestPush_Cache]！');
        //this.BindGv_sys_RequestPushCache();;
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: sys_RequestPushCRUDEx = new sys_RequestPushCRUDEx(divLayout);
    const objPageEdit: sys_RequestPush_EditEx = new sys_RequestPush_EditEx(
      'sys_RequestPush_EditEx',
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
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
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
        AccessBtnClickDefault(strCommandName, 'sys_RequestPushCRUDExEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName = this.getDivName(enumDivType.LayOut_01);
    // 在此处放置用户代码以初始化页面
    try {
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      const strPushTypeId = GetInputValueInDivObj(divName, 'hidPushTypeId');
      if (strPushTypeId == '01') {
        $('#spanTitle').html('按教学班推送');
      } else {
        $('#spanTitle').html('按学生推送');
      }

      sys_RequestPushCRUD.sortsys_RequestPushBy = 'receiveUser Asc';
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(objLayOut, this.divName4Pager);
        this.bolIsInitShow = true; //
      }
      //2、显示无条件的表内容在GridView中
      await this.BindGv_sys_RequestPush4Func(this.thisDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   <returns>条件串(strWhereCond)</returns>
 */
  public async Combinesys_RequestPushConditionObj(): Promise<clssys_RequestPushEN> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const strPushTypeId = GetInputValueInDivObj(divName, 'hidPushTypeId');
    const objsys_RequestPush_Cond: clssys_RequestPushEN = new clssys_RequestPushEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.receiveUser_q != '') {
        objsys_RequestPush_Cond.SetCondFldValue(
          clssys_RequestPushEN.con_ReceiveUser,
          this.receiveUser_q,
          'like',
        );
      }
      if (this.idCurrEduCls_q != '' && this.idCurrEduCls_q != '0') {
        objsys_RequestPush_Cond.SetCondFldValue(
          clssys_RequestPushEN.con_IdCurrEduCls,
          this.idCurrEduCls_q,
          '=',
        );
      }
      if (strPushTypeId != '') {
        objsys_RequestPush_Cond.SetCondFldValue(
          clssys_RequestPushEN.con_PushTypeId,
          strPushTypeId,
          '=',
        );
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0010)在组合查询条件对象(Combinesys_RequestPushConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objsys_RequestPush_Cond;
  }

  /* 根据条件获取相应的对象列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func)
 */
  public async BindGv_sys_RequestPush4Func(divList: HTMLDivElement) {
    if (sys_RequestPushCRUD.sortsys_RequestPushBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortsys_RequestPushBy)为空，请检查！(In BindGv_sys_RequestPush_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objsys_RequestPush_Cond = await this.Combinesys_RequestPushConditionObj();
    const strWhereCond = JSON.stringify(objsys_RequestPush_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    // const arrsys_RequestPushObjLst: Array<clssys_RequestPushEN> = [];
    let arrsys_RequestPushExObjLst: Array<clssys_RequestPushENEx> = [];
    try {
      this.recCount = await sys_RequestPush_GetRecCountByCondCache(objsys_RequestPush_Cond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: sys_RequestPushCRUD.sortsys_RequestPushBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrsys_RequestPushExObjLst = await sys_RequestPushEx_GetObjExLstByPagerCache(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_sys_RequestPush4Func(divList, arrsys_RequestPushExObjLst);
      console.log('完成BindGv_sys_RequestPush!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 显示sys_RequestPush对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
     <param name = "divContainer">显示容器</param>
     <param name = "arrsys_RequestPushObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_sys_RequestPush4Func(
    divContainer: HTMLDivElement,
    arrsys_RequestPushExObjLst: Array<clssys_RequestPushENEx>,
  ) {
    const strThisFuncName = this.BindTab_sys_RequestPush4Func.name;
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
        fldName: 'userName',
        sortBy: 'userName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '接收用户',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'eduClsName',
        sortBy: 'eduClsName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '教学班',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: 'requestUser',
        sortBy: 'requestUser',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '推送人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: 'requestDate',
        sortBy: 'requestDate',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '推送日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      //{
      //    fldName: "",
      //    sortBy: "", sortFun: SortFun, getDataSource: "",
      //    colHeader: "修改",
      //    text: "修改",
      //    tdClass: "text-left",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btn_Click('UpdateRecordInTab', '${strKeyId}');`);
      //        return btn1;
      //    }
      //},
      //{
      //    fldName: "",
      //    sortBy: "", sortFun: SortFun, getDataSource: "",
      //    colHeader: "删除",
      //    text: "删除",
      //    tdClass: "text-left",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btn_Click('DelRecordInTab', '${strKeyId}');`);
      //        return btn1;
      //    }
      //},
    ];

    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    await BindTab(divDataLst, arrsys_RequestPushExObjLst, arrDataColumn, 'requestId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
}
