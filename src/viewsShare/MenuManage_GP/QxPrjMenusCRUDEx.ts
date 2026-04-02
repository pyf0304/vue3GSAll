//import * as QQ from "q";
import { QxPrjMenusCRUD } from '@/viewsBase/MenuManage_GP/QxPrjMenusCRUD';
import QxPrjMenus_EditEx from '@/viewsShare/MenuManage_GP/QxPrjMenus_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectObjInDivObj,
  GetSelectSelectedIndexInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import {
  QxPrjMenusEx_FuncMapByFldName,
  QxPrjMenusEx_GetObjExLstByPagerCacheByOrder,
} from '@/ts/L3ForWApiExShare/MenuManage_GP/clsQxPrjMenusExWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsQxPrjMenusENEx } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusENEx';
import { QxPrjMenus_GetRecCountByCondCache } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import { QxPrjMenus_Edit } from '@/viewsBase/MenuManage_GP/QxPrjMenus_Edit';
import { BindDdl_TrueAndFalseInDivObj, BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { QxRoleMenus_ReFreshCache } from '@/ts/L3ForWApi/MenuManage_GP/clsQxRoleMenusWApi';
import { clsQxRoleMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxRoleMenusEN';
import { QxPrjMenuSet_BindDdl_MenuSetIdByCmPrjIdInDivCache } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenuSetWApi';
import { QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { QxRoleMenusEx_SetRoleMenu } from '@/ts/L3ForWApiExShare/UserManage_GP/clsQxRoleMenusExWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { qxRoleMenusStore } from '@/store/modulesShare/qxRoleMenus';
import { QxRoleMenusEx_GetMenuIdLstByCmPrjId } from '@/ts/L3ForWApiExShare/MenuManage_GP/clsQxRoleMenusExWApi';
import { userStore } from '@/store/modulesShare/user';

/** QxPrjMenusCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class QxPrjMenusCRUDEx extends QxPrjMenusCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;

  //public static mstrSortQxPrjMenusBy = "MenuId";
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 15;
  }
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
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_QxPrjMenus]!${strType}${strPara}`);
    //this.BindGv_QxPrjMenus4Func(this.divList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'QxPrjMenus':
        this.BindGv_QxPrjMenus4Func(this.divList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: QxPrjMenusCRUDEx;
    let objPageEdit;
    if (QxPrjMenusCRUD.objPageCRUD == null) {
      QxPrjMenusCRUD.objPageCRUD = new QxPrjMenusCRUDEx(divLayout);
      objPage = <QxPrjMenusCRUDEx>QxPrjMenusCRUD.objPageCRUD;
    } else {
      objPage = <QxPrjMenusCRUDEx>QxPrjMenusCRUD.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'SetRoleId': //自定义功能:设置角色
        objPage.btnSetRoleId_Click();
        break;
      case 'SetMenuSetId': //自定义功能:设置菜单集
        objPage.btnSetMenuSetId_Click();
        break;
      case 'SetInUse': //自定义功能:设置是否在用
        objPage.btnSetInUse_Click();
        break;

      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new QxPrjMenus_EditEx('QxPrjMenus_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        QxPrjMenusCRUD.EditObj.btnQxPrjMenus_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        QxPrjMenusCRUD.DetailObj.btnQxPrjMenus_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new QxPrjMenus_EditEx('QxPrjMenus_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        QxPrjMenusCRUD.EditObj.btnQxPrjMenus_Edit_Click(strCommandName, strKeyId);
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(QxPrjMenusCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      QxPrjMenus_Edit.QxPrjId4PrefixStatic = clsSysPara4WebApi.currSelPrjId;

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      // setTimeout(() => {
      this.SetDefaultValue();
      // }, 200);
      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();
      this.inUse_q = true;
      // SetSelectValueByIdInDivObj(QxPrjMenusCRUD.divQuery, 'ddlbInUse_q', '01');
      this.SetEventFunc();
      QxPrjMenusCRUD.sortQxPrjMenusBy = 'menuId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_QxPrjMenus4Func(this.divList);
    } catch (e) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  public SetDefaultValue() {
    const strMenuSetId = userStore.getMenuSetId;
    SetSelectValueByIdInDivObj(this.divQuery, 'ddlMenuSetId_q', strMenuSetId);
    QxPrjMenusCRUDEx.vuebtn_Click('setMenuSetId', strMenuSetId);
  }
  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    const strQxPrjId = clsSysPara4WebApi.currSelPrjId; //Session存储、local存储

    await this.SetDdl_UpMenuIdInDiv(strQxPrjId); //查询区域
    await this.SetDdl_MenuSetIdInDiv(clsSysPara4WebApi.cmPrjId); //功能区域
    BindDdl_TrueAndFalseInDivObj(this.divQuery, 'ddlbIsLeafNode_q');

    BindDdl_TrueAndFalseInDivObj(this.divQuery, 'ddlbInUse_q');
  }

  /** 函数功能:为功能区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4FeatureRegion)
   **/
  public async BindDdl4FeatureRegion() {
    BindDdl_TrueAndFalseInDivObj(this.divFunction, 'ddlInUse_SetFldValue');
    await this.SetDdl_MenuSetIdInDivInFeature(clsSysPara4WebApi.cmPrjId); //功能区域
    await this.SetDdl_RoleIdInDivInFeature(clsSysPara4WebApi.currSelPrjId); //功能区域
  }
  /**
   * 设置绑定下拉框，针对字段:[MenuSetId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_MenuSetIdInDivInFeature(strCmPrjId: string) {
    await QxPrjMenuSet_BindDdl_MenuSetIdByCmPrjIdInDivCache(
      this.divFunction,
      'ddlMenuSetId_SetFldValue',
      strCmPrjId,
    ); //
  }
  public async SetDdl_MenuSetIdInDiv(strCmPrjId: string) {
    await QxPrjMenuSet_BindDdl_MenuSetIdByCmPrjIdInDivCache(
      this.divQuery,
      'ddlMenuSetId_q',
      strCmPrjId,
    ); //
  }
  public async SetDdl_RoleIdInDivInFeature(strQxPrjId: string) {
    await QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache(
      this.divFunction,
      'ddlRoleId_SetFldValue',
      strQxPrjId,
    ); //
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
    const objQxPrjMenusCond = await this.CombineQxPrjMenusConditionObj();
    objQxPrjMenusCond.SetCondFldValue(
      clsQxPrjMenusEN.con_QxPrjId,
      clsSysPara4WebApi.currSelPrjId,
      '=',
    );
    const strWhereCond = JSON.stringify(objQxPrjMenusCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrQxPrjMenusExObjLst: Array<clsQxPrjMenusENEx> = [];
    try {
      this.recCount = await QxPrjMenus_GetRecCountByCondCache(
        objQxPrjMenusCond,
        clsSysPara4WebApi.currSelPrjId,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objQxPrjMenusCond.whereCond,
        );
        const divDataLst: HTMLDivElement = <HTMLDivElement>document.getElementById('divDataLst');
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objQxPrjMenusCond.whereCond,
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
      if (QxPrjMenusCRUD.sortFunStatic != undefined) {
        strSortFun = QxPrjMenusCRUD.sortFunStatic(QxPrjMenusCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: QxPrjMenusCRUD.sortQxPrjMenusBy,
        sortFun: strSortFun,
      };
      arrQxPrjMenusExObjLst = await QxPrjMenusEx_GetObjExLstByPagerCacheByOrder(
        objPagerPara,
        clsSysPara4WebApi.currSelPrjId,
      );
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrQxPrjMenusExObjLst.length == 0) {
      const strKey = Format('{0}_{1}', clsQxPrjMenusEN._CurrTabName, clsSysPara4WebApi.currSelPrjId);
      const strMsg = Format('根据条件获取的记录数为0!(Key={0})', strKey);
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
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
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
        fldName: clsQxPrjMenusENEx.con_MenuNameEx,
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
        fldName: clsQxPrjMenusEN.con_IsLeafNode,
        sortBy: clsQxPrjMenusEN.con_IsLeafNode,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '叶子?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Icon',
        orderNum: 8,
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
        columnType: 'Icon',
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
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
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
        await QxPrjMenusEx_FuncMapByFldName(objDataColumn.fldName, objInFor, this.menuSetId);
      }
    }
  }
  /** 设置字段值-InUse
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetInUse_Click() {
    const strThisFuncName = this.btnSetInUse_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置是否在用的记录!');
        return '';
      }
      const strInUse = GetSelectValueInDivObj(this.divFunction, 'ddlInUse_SetFldValue'); //.prop('checked');
      const bolInUse: boolean = strInUse == '1' ? true : false;
      //console.log('bolInUse=' + bolInUse);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetInUse(arrKeyIds, bolInUse);
      await this.BindGv_QxPrjMenus4Func(this.divList);
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 设置字段值-RoleId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetRoleId_Click() {
    const strThisFuncName = this.btnSetRoleId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置角色Id的记录!');
        return '';
      }
      const strRoleId = GetSelectValueInDivObj(this.divFunction, 'ddlRoleId_SetFldValue');
      if (strRoleId == '') {
        const strMsg = '请输入角色Id(RoleId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      const strMenuSetId = GetSelectValueInDivObj(this.divFunction, 'ddlMenuSetId_SetFldValue');
      if (strMenuSetId == '') {
        const strMsg = '请输入菜单集Id(MenuSetId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      SetSelectValueByIdInDivObj(this.divQuery, 'ddlMenuSetId_q', strMenuSetId);
      //console.log('strRoleId=' + strRoleId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetRoleId(arrKeyIds, strMenuSetId, strRoleId);
      await this.BindGv_QxPrjMenus4Func(this.divList);
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-MenuSetId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetMenuSetId_Click() {
    const strThisFuncName = this.btnSetMenuSetId_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要设置菜单集Id的记录!');
        return '';
      }
      const strMenuSetId = GetSelectValueInDivObj(this.divFunction, 'ddlMenuSetId_SetFldValue');
      if (strMenuSetId == '') {
        const strMsg = '请输入菜单集Id(MenuSetId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      SetSelectValueByIdInDivObj(this.divQuery, 'ddlMenuSetId_q', strMenuSetId);
      //console.log('strMenuSetId=' + strMenuSetId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetMenuSetId(arrKeyIds, strMenuSetId);
      await this.BindGv_QxPrjMenus4Func(this.divList);
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-MenuSetId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetMenuSetId(arrMenuId: Array<string>, strMenuSetId: string) {
    const strThisFuncName = this.SetMenuSetId.name;
    if (strMenuSetId == null || strMenuSetId == '') {
      const strMsg = '请输入菜单集Id(MenuSetId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrMenuId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const strRoleId = '00620000';
      // const arrQxRoleMenusObjLst = await QxPrjMenus_GetObjLstByMenuIdLstAsync(arrMenuId);
      let intCount = 0;
      for (const strMenuId of arrMenuId) {
        let returnBool = false;
        try {
          returnBool = await QxRoleMenusEx_SetRoleMenu(
            clsSysPara4WebApi.currSelPrjId,
            clsSysPara4WebApi.cmPrjId,
            strMenuSetId,
            strRoleId,
            strMenuId,
            userStore.getUserId,
          );
          qxRoleMenusStore.delRoleNamesByMenuId(strMenuId);
        } catch (e) {
          const strMsg = Format(
            '设置记录不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
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
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        QxRoleMenus_ReFreshCache(clsSysPara4WebApi.currSelPrjId);
      }
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /** 设置字段值-RoleId
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetRoleId(arrMenuId: Array<string>, strMenuSetId: string, strRoleId: string) {
    const strThisFuncName = this.SetRoleId.name;
    if (strMenuSetId == null || strMenuSetId == '') {
      const strMsg = '请输入菜单集Id(MenuSetId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (strRoleId == null || strRoleId == '') {
      const strMsg = '请输入角色Id(RoleId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrMenuId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      let intCount = 0;
      for (const strMenuId of arrMenuId) {
        let returnBool = false;
        try {
          returnBool = await QxRoleMenusEx_SetRoleMenu(
            clsSysPara4WebApi.currSelPrjId,
            clsSysPara4WebApi.cmPrjId,
            strMenuSetId,
            strRoleId,
            strMenuId,
            userStore.getUserId,
          );
          qxRoleMenusStore.delRoleNamesByMenuId(strMenuId);
        } catch (e) {
          const strMsg = Format(
            '设置记录不成功,{0}.(in {1}.{2})',
            e,
            this.constructor.name,
            strThisFuncName,
          );
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
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        QxRoleMenus_ReFreshCache(clsSysPara4WebApi.currSelPrjId);
      }
    } catch (e) {
      const strMsg = Format(
        '设置记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
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
      if (this.editTabName == clsQxRoleMenusEN._CurrTabName) {
        const arrMenuId = await QxRoleMenusEx_GetMenuIdLstByCmPrjId(
          clsSysPara4WebApi.currSelPrjId,
          clsSysPara4WebApi.cmPrjId,
        );
        objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_MenuId, arrMenuId.join(','), 'in');
      }
      if (this.menuId_q != '') {
        strWhereCond += Format(" And {0} like '%{1}%'", clsQxPrjMenusEN.con_MenuId, this.menuId_q);
        objQxPrjMenusCond.SetCondFldValue(clsQxPrjMenusEN.con_MenuId, this.menuId_q, 'like');
      }
      if (this.menuName_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
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
          " And {0} like '%{1}%'",
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
  public get editTabName(): string {
    return QxPrjMenusCRUDEx.GetPropValue('editTabName');
  }

  public get menuSetId(): string {
    return QxPrjMenusCRUDEx.GetPropValue('menuSetId');
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    if (this.menuSetId == '') {
      alert('请选择一个菜单集！');
      const ddlMenuSetId_q = GetSelectObjInDivObj(this.divQuery, 'ddlMenuSetId_q');
      ddlMenuSetId_q.focus();
      return;
    }
    userStore.setMenuSetId(this.menuSetId);
    this.SetCurrPageIndex(1);
    await this.BindGv_QxPrjMenus4Func(this.divList);
  }
}
