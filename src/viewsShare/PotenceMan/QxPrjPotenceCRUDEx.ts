/**
 * 类名:QxPrjPotenceCRUDEx(界面:QxPrjPotenceCRUD)
 * 表名:QxPrjPotence(00140005)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/20 17:32:28
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:权限管理(PotenceMan)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { QxPrjPotenceCRUD } from '@/viewsBase/PotenceMan/QxPrjPotenceCRUD';
import { QxPrjPotence_EditEx } from '@/viewsShare/PotenceMan/QxPrjPotence_EditEx';
import {
  GetAObjLstInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { QxPrjPotence_Edit } from '@/viewsBase/PotenceMan/QxPrjPotence_Edit';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';
import { userStore } from '@/store/modulesShare/user';
import {
  QxRolePotenceRelaEx_Delete,
  QxRolePotenceRelaEx_SetRolePotence,
} from '@/ts/L3ForWApiExShare/PotenceMan/clsQxRolePotenceRelaExWApi';
import { qxRolePotenceRelaStore } from '@/store/modulesShare/qxRolePotenceRela';
import { QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { clsQxPrjPotenceEN } from '@/ts/L0Entity/PotenceMan/clsQxPrjPotenceEN';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsQxPrjPotenceENEx } from '@/ts/L0Entity/PotenceMan/clsQxPrjPotenceENEx';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
/** QxPrjPotenceCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class QxPrjPotenceCRUDEx extends QxPrjPotenceCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrSortQxPrjPotenceBy = "PotenceId";
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 10;
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in QxPotenceTypeCRUDEx');
    // QxPrjPotenceCRUD.QxPrjIdStatic = clsSysPara4WebApi.currSelPrjId; //3、前缀变量
    QxPrjPotence_Edit.QxPrjId4PrefixStatic = clsSysPara4WebApi.currSelPrjId; //3、前缀变量
    QxPrjPotenceCRUD.QxPrjIdCache = clsSysPara4WebApi.currSelPrjId;
    QxPrjPotence_Edit.QxPrjIdCache = clsSysPara4WebApi.currSelPrjId;
    QxPrjPotenceCRUD.sortQxPrjPotenceBy = `${clsQxPrjPotenceENEx.con_DateTimeSim} Desc`;
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPrjPotenceCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_QxPrjPotence]!${strType}${strPara}`);

    //this.BindGv_QxPrjPotence4Func(this.divList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'QxPrjPotence':
        this.BindGv_QxPrjPotence4Func(this.divList);
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
  public static btn_Click(strCommandName: string, strKeyId: any, divLayout: HTMLDivElement) {
    let objPage: QxPrjPotenceCRUDEx;
    const objData = strKeyId;
    let objPageEdit;
    if (QxPrjPotenceCRUD.objPageCRUD == null) {
      QxPrjPotenceCRUD.objPageCRUD = new QxPrjPotenceCRUDEx(divLayout);
      objPage = <QxPrjPotenceCRUDEx>QxPrjPotenceCRUD.objPageCRUD;
    } else {
      objPage = <QxPrjPotenceCRUDEx>QxPrjPotenceCRUD.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'DelRole':
        objPage.btnDelRole_Click(objData.roleId, objData.potenceId);
        break;
      case 'SetRoleId': //自定义功能:设置角色
        objPage.btnSetRoleId_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new QxPrjPotence_EditEx('QxPrjPotence_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        QxPrjPotenceCRUD.EditObj.btnQxPrjPotence_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        QxPrjPotenceCRUD.DetailObj.btnQxPrjPotence_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new QxPrjPotence_EditEx('QxPrjPotence_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        QxPrjPotenceCRUD.EditObj.btnQxPrjPotence_Edit_Click(strCommandName, strKeyId);
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(QxPrjPotenceCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
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

      //console.log('strRoleId=' + strRoleId);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetRoleId(arrKeyIds, strRoleId);
      await this.BindGv_QxPrjPotence4Func(this.divList);
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
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetRoleId(arrPotenceId: Array<string>, strRoleId: string) {
    const strThisFuncName = this.SetRoleId.name;

    if (strRoleId == null || strRoleId == '') {
      const strMsg = '请输入角色Id(RoleId)!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    if (arrPotenceId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      let intCount = 0;
      for (const strPotenceId of arrPotenceId) {
        let returnBool = false;
        try {
          returnBool = await QxRolePotenceRelaEx_SetRolePotence(
            clsSysPara4WebApi.currSelPrjId,
            strRoleId,
            strPotenceId,
            userStore.getUserId,
          );
          qxRolePotenceRelaStore.delRoleNamesByPotenceId(strPotenceId);
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
        // QxPrjPotence_ReFreshCache(clsSysPara4WebApi.currSelPrjId);
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
  /** 函数功能:为功能区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4FeatureRegion)
   **/
  public async BindDdl4FeatureRegion() {
    await this.SetDdl_RoleIdInDivInFeature(clsSysPara4WebApi.currSelPrjId); //功能区域
  }
  public async SetDdl_RoleIdInDivInFeature(strQxPrjId: string) {
    await QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache(
      this.divFunction,
      'ddlRoleId_SetFldValue',
      strQxPrjId,
    ); //
  }
  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnDelRole_Click(strRoleId: string, strPotenceId: string) {
    const strThisFuncName = this.btnDelRole_Click.name;
    try {
      await QxRolePotenceRelaEx_Delete(strRoleId, strPotenceId);
      qxRolePotenceRelaStore.delPotenceId(strPotenceId, clsSysPara4WebApi.currSelPrjId);

      await this.BindGv_QxPrjPotence4Func(this.thisDivList);
    } catch (e) {
      const strMsg = Format(
        '删除记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 显示QxPrjPotence对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrQxPrjPotenceExObjLst:需要绑定的对象列表
   **/
  public async BindTab_QxPrjPotence4Func(
    divContainer: HTMLDivElement,
    arrQxPrjPotenceExObjLst: Array<clsQxPrjPotenceENEx>,
  ) {
    const strThisFuncName = this.BindTab_QxPrjPotence4Func.name;
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
        fldName: clsQxPrjPotenceEN.con_PotenceId,
        sortBy: clsQxPrjPotenceEN.con_PotenceId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '权限ID',
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
        fldName: clsQxPrjPotenceEN.con_PotenceName,
        sortBy: clsQxPrjPotenceEN.con_PotenceName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '权限名称',
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
        fldName: clsQxPrjPotenceENEx.con_RoleNames,
        sortBy: clsQxPrjPotenceENEx.con_RoleNames,
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
        fldName: clsQxPrjPotenceENEx.con_PotenceTypeName,
        sortBy: clsQxPrjPotenceENEx.con_PotenceTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '权限类型名',
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
        fldName: clsQxPrjPotenceENEx.con_FuncModuleName,
        sortBy: clsQxPrjPotenceENEx.con_FuncModuleName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '模块名',
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
        fldName: clsQxPrjPotenceENEx.con_MenuName,
        sortBy: clsQxPrjPotenceENEx.con_MenuName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '菜单名',
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
        fldName: clsQxPrjPotenceEN.con_UpdDate,
        sortBy: clsQxPrjPotenceEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
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
        fldName: clsQxPrjPotenceENEx.con_DateTimeSim,
        sortBy: clsQxPrjPotenceENEx.con_DateTimeSim,
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
      {
        fldName: clsQxPrjPotenceEN.con_Memo,
        sortBy: clsQxPrjPotenceEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '备注',
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
      await this.ExtendFldFuncMap(arrQxPrjPotenceExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrQxPrjPotenceExObjLst,
      arrDataColumn,
      clsQxPrjPotenceEN.con_PotenceId,
      this,
    );
    this.SetEventForDel();
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  public SetEventForDel() {
    {
      const arrALst = GetAObjLstInDivObj(this.thisDivList, 'aDel');
      for (const aDel of arrALst) {
        if (aDel != null) {
          const strKeyId = aDel.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 3) continue;
          const objData = {
            roleId: arr[0],
            menuSetId: arr[1],
            menuId: arr[2],
          };

          (function (objData: any) {
            aDel.onclick = function () {
              QxPrjPotenceCRUDEx.vuebtn_Click('DelRole', objData);
            };
          })(objData);
        }
      }
    }
  }
}
