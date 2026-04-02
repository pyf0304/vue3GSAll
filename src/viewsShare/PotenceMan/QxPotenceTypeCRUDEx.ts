/**
 * 类名:QxPotenceTypeCRUDEx(界面:QxPotenceTypeCRUD)
 * 表名:QxPotenceType(00140003)
 * 版本:2024.01.20.1(服务器:DESKTOP-1KM2OK3)
 * 日期:2024/01/20 16:12:39
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
import $ from 'jquery';
import { QxPotenceTypeCRUD } from '@/viewsBase/PotenceMan/QxPotenceTypeCRUD';
import { QxPotenceType_EditEx } from '@/viewsShare/PotenceMan/QxPotenceType_EditEx';
import {
  GetCheckBoxValueInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { QxPotenceType_Edit } from '@/viewsBase/PotenceMan/QxPotenceType_Edit';
import { Format } from '@/ts/PubFun/clsString';
import {
  QxPotenceType_GetObjLstByPotenceTypeIdLstAsync,
  QxPotenceType_ReFreshCache,
  QxPotenceType_UpdateRecordAsync,
} from '@/ts/L3ForWApi/PotenceMan/clsQxPotenceTypeWApi';
import { clsQxPotenceTypeEN } from '@/ts/L0Entity/PotenceMan/clsQxPotenceTypeEN';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
/** QxPotenceTypeCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class QxPotenceTypeCRUDEx extends QxPotenceTypeCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrSortQxPotenceTypeBy = "PotenceTypeId";
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
    console.log('InitVarSet in QxPotenceTypeCRUDEx');
    QxPotenceTypeCRUD.QxPrjId4PrefixStatic = clsSysPara4WebApi.currSelPrjId; //3、前缀变量
    QxPotenceType_Edit.QxPrjId4PrefixStatic = clsSysPara4WebApi.currSelPrjId; //3、前缀变量
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPotenceTypeCRUDExEx');
    this.isVisible_q = true;
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_QxPotenceType]!${strType}${strPara}`);
    //this.BindGv_QxPotenceType4Func(this.divList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'QxPotenceType':
        this.BindGv_QxPotenceType4Func(this.divList);
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
    let objPage: QxPotenceTypeCRUDEx;
    let objPageEdit;
    if (QxPotenceTypeCRUD.objPageCRUD == null) {
      QxPotenceTypeCRUD.objPageCRUD = new QxPotenceTypeCRUDEx(divLayout);
      objPage = <QxPotenceTypeCRUDEx>QxPotenceTypeCRUD.objPageCRUD;
    } else {
      objPage = <QxPotenceTypeCRUDEx>QxPotenceTypeCRUD.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'SetIsVisible': //自定义功能:设置是否显示
        objPage.btnSetIsVisible_Click();
        break;
      case 'SetFuncModuleId': //自定义功能:设置模块Id
        objPage.btnSetFuncModuleId_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new QxPotenceType_EditEx('QxPotenceType_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        QxPotenceTypeCRUD.EditObj.btnQxPotenceType_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        QxPotenceTypeCRUD.DetailObj.btnQxPotenceType_Detail_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new QxPotenceType_EditEx('QxPotenceType_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        QxPotenceTypeCRUD.EditObj.btnQxPotenceType_Edit_Click(strCommandName, strKeyId);
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
        strMsg = `命令:${strCommandName}在函数(QxPotenceTypeCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /** 设置字段值-IsVisible
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSetFldValue_Click)
   **/
  public async btnSetIsVisible_Click() {
    const strThisFuncName = this.btnSetIsVisible_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要设置是否显示的${this.thisTabName}记录!`);
        return '';
      }

      const bolIsVisible = GetCheckBoxValueInDivObj(
        this.divFunction,
        'chkIsVisible_SetFldValue',
      );
      //console.log('bolIsVisible=' + bolIsVisible);
      //console.log('arrKeyIds=');
      //console.log(arrKeyIds);
      await this.SetIsVisible(arrKeyIds, bolIsVisible);
      await this.BindGv_QxPotenceType4Func(this.divList);
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 设置字段值-IsVisible
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetFieldValue)
   **/
  public async SetIsVisible(arrPotenceTypeId: Array<string>, bolIsVisible: boolean) {
    const strThisFuncName = this.SetIsVisible.name;
    if (arrPotenceTypeId.length == 0) {
      const strMsg = '没有选择记录,不能设置字段值!';
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return '';
    }
    try {
      const arrQxPotenceTypeObjLst = await QxPotenceType_GetObjLstByPotenceTypeIdLstAsync(
        arrPotenceTypeId,
      );
      let intCount = 0;
      for (const objInFor of arrQxPotenceTypeObjLst) {
        const objQxPotenceTypeEN = new clsQxPotenceTypeEN();
        ObjectAssign(objQxPotenceTypeEN, objInFor);
        objQxPotenceTypeEN.SetPotenceTypeId(objInFor.potenceTypeId);
        objQxPotenceTypeEN.SetIsVisible(bolIsVisible);
        let returnBool = false;
        try {
          objQxPotenceTypeEN.sfUpdFldSetStr = objQxPotenceTypeEN.updFldString; //设置哪些字段被修改(脏字段)
          returnBool = await QxPotenceType_UpdateRecordAsync(objQxPotenceTypeEN);
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
      }
      const strInfo = Format('共设置了{0}条记录!', intCount);
      alert(strInfo);
      //console.log('完成!');
      if (intCount > 0) {
        QxPotenceType_ReFreshCache();
      }
    } catch (e) {
      const strMsg = `设置记录不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
}
