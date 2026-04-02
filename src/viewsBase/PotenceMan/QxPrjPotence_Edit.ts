/**
 * 类名:QxPrjPotence_Edit(界面:QxPrjPotenceCRUD)
 * 表名:QxPrjPotence(00140005)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:17:56
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:权限管理(PotenceMan)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS)
 * 编程语言:TypeScript
 **/
import $ from 'jquery';
import { QxPotenceType_BindDdl_PotenceTypeIdInDivCache } from '@/ts/L3ForWApi/PotenceMan/clsQxPotenceTypeWApi';
import { QxFuncModule_BindDdl_FuncModuleIdInDivCache } from '@/ts/L3ForWApi/PrjManage_GP/clsQxFuncModuleWApi';
import { QxPrjMenus_BindDdl_MenuIdByMenuSetIdInDivCache } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  ClearSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetSelectValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  QxPrjPotence_GetMaxStrIdByPrefixAsync,
  QxPrjPotence_CheckPropertyNew,
  QxPrjPotence_AddNewRecordWithMaxIdAsync,
  QxPrjPotence_ReFreshCache,
  QxPrjPotence_GetUniCondStr,
  QxPrjPotence_IsExistRecordAsync,
  QxPrjPotence_GetUniCondStr4Update,
  QxPrjPotence_IsExistAsync,
  QxPrjPotence_GetObjByPotenceIdAsync,
  QxPrjPotence_CheckProperty4Update,
  QxPrjPotence_UpdateRecordAsync,
} from '@/ts/L3ForWApi/PotenceMan/clsQxPrjPotenceWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { userStore } from '@/store/modulesShare/user';
import { clsQxPrjPotenceEN } from '@/ts/L0Entity/PotenceMan/clsQxPrjPotenceEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** QxPrjPotence_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class QxPrjPotence_Edit {
  protected _className = 'Unknown'; // 基类中的实际字段
  // 定义虚拟属性
  get className(): string {
    return this._className;
  }
  public static EditObj: any;
  public divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
  public static objPageEdit: QxPrjPotence_Edit;
  public static objPageEdit2: QxPrjPotence_Edit;
  public static objPageEdit3: QxPrjPotence_Edit;

  public static QxPrjIdCache = ''; //2、界面主表的缓存分类字段变量1
  public static QxPrjId4PrefixStatic = ''; //3、前缀变量
  protected iShowList: IShowList;
  public bolIsLoadEditRegion = false; //记录是否导入编辑区的变量
  public divName4Edit = 'divEditLayout'; //编辑区的Id
  /**
   * 获取当前组件的divEdit的层对象
   **/
  public get thisDivEdit(): HTMLDivElement {
    return this.divEdit;
  }
  /**
   * 获取当前组件的divEdit的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return this.divEdit;
  }
  constructor(strClassName: string, objShowList: IShowList) {
    this._className = strClassName;
    this.iShowList = objShowList;
    const divTemp = document.createElement('div');
    divTemp.id = 'temp';
    this.divEdit = divTemp;
    if (QxPrjPotence_Edit.SetPageEdit(this, 1) == true) return;
    if (QxPrjPotence_Edit.SetPageEdit(this, 2) == true) return;
    if (QxPrjPotence_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (QxPrjPotence_Edit.objPageEdit == null) {
          QxPrjPotence_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxPrjPotence_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            QxPrjPotence_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (QxPrjPotence_Edit.objPageEdit2 == null) {
          QxPrjPotence_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxPrjPotence_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            QxPrjPotence_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (QxPrjPotence_Edit.objPageEdit3 == null) {
          QxPrjPotence_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxPrjPotence_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            QxPrjPotence_Edit.objPageEdit3 = objDataLst;
            return true;
          } else return false;
        }
        break;
      default:
        return false;
      // break;
    }
  }
  public static GetPageEditObj(strClassName: string): any {
    if (QxPrjPotence_Edit.objPageEdit != null) {
      const strClassNameOld = QxPrjPotence_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return QxPrjPotence_Edit.objPageEdit;
    }
    if (QxPrjPotence_Edit.objPageEdit2 != null) {
      const strClassNameOld = QxPrjPotence_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return QxPrjPotence_Edit.objPageEdit2;
    }
    if (QxPrjPotence_Edit.objPageEdit3 != null) {
      const strClassNameOld = QxPrjPotence_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return QxPrjPotence_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_QxPrjPotence() {
    if (QxPrjPotence_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      QxPrjPotence_Edit.EditObj.hideDialog();
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      this.SetEventFunc();
    } catch (e) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:设置事件函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_SetEventFunc)
   **/
  public async SetEventFunc() {
    const strThisFuncName = this.SetEventFunc.name;
    // 在此处放置用户代码以初始化页面
    try {
      //没有定义相关事件
    } catch (e) {
      const strMsg = Format(
        '设置事件函数不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_QxPrjPotence(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_QxPrjPotence.name;
    if (QxPrjPotence_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (QxPrjPotence_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await QxPrjPotence_Edit.EditObj.showDialog();
    }
    this.divEdit = QxPrjPotence_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (QxPrjPotence_Edit.times4TestShowDialog < 2) {
        QxPrjPotence_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_QxPrjPotence(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      QxPrjPotence_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitQxPrjPotence = '确认添加';
      this.btnCancelQxPrjPotence = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitQxPrjPotence = '确认修改';
      this.btnCancelQxPrjPotence = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (QxPrjPotence_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (QxPrjPotence_Edit.EditObj.dialogVisible == false) {
        const strMsg = Format(
          '当前编辑区的的对话框还没有打开，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
    }
    this.divEdit = QxPrjPotence_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (QxPrjPotence_Edit.times4TestShowDialog < 2) {
        QxPrjPotence_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.getDivName();
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
      return null;
    } else {
      QxPrjPotence_Edit.times4TestShowDialog = 0;
    }
    return this.divEdit;
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecord_Click)
   **/
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      this.opType = 'Add';
      const bolIsSuccess = await this.ShowDialog_QxPrjPotence(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      await this.AddNewRecord();
    } catch (e) {
      const strMsg = Format(
        '添加新记录初始化不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:为编辑区绑定下拉框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
   **/
  public async BindDdl4EditRegionInDiv() {
    await this.SetDdl_PotenceTypeIdInDiv(); //编辑区域

    await this.SetDdl_FuncModuleIdInDiv(); //编辑区域

    await this.SetDdl_MenuIdInDiv(); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_QxPrjPotence(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.AddNewRecordWithMaxId();
    } catch (e) {
      const strMsg = Format(
        '添加新记录初始化不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 设置绑定下拉框，针对字段:[PotenceTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_PotenceTypeIdInDiv() {
    await QxPotenceType_BindDdl_PotenceTypeIdInDivCache(this.divEdit, 'ddlPotenceTypeId'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[FuncModuleId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_FuncModuleIdInDiv() {
    await QxFuncModule_BindDdl_FuncModuleIdInDivCache(this.divEdit, 'ddlFuncModuleId'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[MenuId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_MenuIdInDiv() {
    await QxPrjMenus_BindDdl_MenuIdByMenuSetIdInDivCache(
      this.divEdit,
      'ddlMenuId',
      clsSysPara4WebApi.currSelPrjId,
    ); //
  }

  /** 在数据表里修改记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnUpdateRecordInTab_Click)
   **/
  public async btnUpdateRecordInTab_Click(strKeyId: string) {
    const strThisFuncName = this.btnUpdateRecordInTab_Click.name;
    if (strKeyId == '') {
      alert('请选择需要修改的记录!');
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_QxPrjPotence(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.UpdateRecord(strKeyId);
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 修改记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnUpdateRecord_Click)
   **/
  public async btnUpdateRecord_Click(strKeyId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_QxPrjPotence(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      const update = await this.UpdateRecord(strKeyId);
      if (update == false) {
        const strMsg = Format('在修改记录时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnOKUpd_Click)
   **/
  public async btnSubmit_Click() {
    const strThisFuncName = this.btnSubmit_Click.name;
    const strCommandText: string = this.btnSubmitQxPrjPotence;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitQxPrjPotence = '确认添加';
          this.btnCancelQxPrjPotence = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (QxPrjPotence_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_QxPrjPotence();
              this.iShowList.BindGvCache(clsQxPrjPotenceEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (QxPrjPotence_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                QxPrjPotence_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGvCache(clsQxPrjPotenceEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In QxPrjPotence_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (QxPrjPotence_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              QxPrjPotence_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGvCache(clsQxPrjPotenceEN._CurrTabName, this.keyId);
          }
          break;
        default:
          strMsg = Format(
            'strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())',
            strCommandText,
          );
          console.error(strMsg);
          alert(strMsg);
          break;
      }
    } catch (e) {
      const strMsg = Format(
        '(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
        strCommandText,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   *  在用户自定义控件中,设置关键字的值,是否只读
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_SetKeyReadOnly)
   * @param bolReadonly:是否只读
   **/
  public SetKeyReadOnly(bolReadonly: boolean) {
    $('#txtPotenceId').attr('ReadOnly', bolReadonly.toString());
  }

  /**
   * 清除用户自定义控件中,所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    this.potenceId = '';
    this.potenceName = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlPotenceTypeId');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlFuncModuleId');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlMenuId');
    this.memo = '';
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucQxPrjPotenceB1.potenceId = QxPrjPotenceGetMaxStrId_S();
    try {
      const returnString = await QxPrjPotence_GetMaxStrIdByPrefixAsync(
        QxPrjPotence_Edit.QxPrjId4PrefixStatic,
      );
      if (returnString == '') {
        const strInfo = Format('获取表QxPrjPotence的最大关键字为空,不成功,请检查!');
        //显示信息框
        alert(strInfo);
      } else {
        this.keyId = returnString;
      }
    } catch (e) {
      const strMsg = Format(
        '获取表关键字的最大值不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    const strThisFuncName = this.AddNewRecordWithMaxId.name;
    this.SetKeyReadOnly(false);
    this.Clear();

    //this.potenceId = await QxPrjPotence_GetMaxStrIdAsync();
    try {
      const returnString = await QxPrjPotence_GetMaxStrIdByPrefixAsync(
        QxPrjPotence_Edit.QxPrjId4PrefixStatic,
      );
      if (returnString == '') {
        const strInfo = Format('获取表QxPrjPotence的最大关键字为空,不成功,请检查!');
        //显示信息框
        alert(strInfo);
      } else {
        this.keyId = returnString;
      }
    } catch (e) {
      const strMsg = Format(
        '获取表关键字的最大值不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函1数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjQxPrjPotenceEN">数据传输的目的类对象</param>
   **/
  public async PutDataToQxPrjPotenceClass(pobjQxPrjPotenceEN: clsQxPrjPotenceEN) {
    pobjQxPrjPotenceEN.SetPotenceId(this.potenceId); // 权限ID
    pobjQxPrjPotenceEN.SetPotenceName(this.potenceName); // 权限名称
    pobjQxPrjPotenceEN.SetQxPrjId(clsSysPara4WebApi.currSelPrjId); // 项目Id
    pobjQxPrjPotenceEN.SetPotenceTypeId(this.potenceTypeId); // 权限类型Id
    pobjQxPrjPotenceEN.SetFuncModuleId(this.funcModuleId); // 模块Id
    pobjQxPrjPotenceEN.SetMenuId(this.menuId); // 菜单Id
    pobjQxPrjPotenceEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjQxPrjPotenceEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
    pobjQxPrjPotenceEN.SetMemo(this.memo); // 备注
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objQxPrjPotenceEN = new clsQxPrjPotenceEN();
    try {
      await this.PutDataToQxPrjPotenceClass(objQxPrjPotenceEN);
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
      QxPrjPotence_CheckPropertyNew(objQxPrjPotenceEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
      //检查唯一性条件
      const bolIsExistCond = await this.CheckUniCond4Add(objQxPrjPotenceEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      const returnKeyId = await QxPrjPotence_AddNewRecordWithMaxIdAsync(objQxPrjPotenceEN);
      if (IsNullOrEmpty(returnKeyId) == false) {
        returnBool = true;
      }
      if (returnBool == true) {
        QxPrjPotence_ReFreshCache(QxPrjPotence_Edit.QxPrjIdCache);
        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值,否则会出错!
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
  }

  /** 为添加记录检查唯一性条件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Add)
   **/
  public async CheckUniCond4Add(objQxPrjPotenceEN: clsQxPrjPotenceEN): Promise<boolean> {
    const strUniquenessCondition = QxPrjPotence_GetUniCondStr(objQxPrjPotenceEN);
    const bolIsExistCondition = await QxPrjPotence_IsExistRecordAsync(strUniquenessCondition);
    if (bolIsExistCondition == true) {
      const strMsg = Format(
        '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
        strUniquenessCondition,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true;
  }

  /** 为修改记录检查唯一性条件
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_CheckUniCondition4Update)
   **/
  public async CheckUniCond4Update(objQxPrjPotenceEN: clsQxPrjPotenceEN): Promise<boolean> {
    const strUniquenessCondition = QxPrjPotence_GetUniCondStr4Update(objQxPrjPotenceEN);
    const bolIsExistCondition = await QxPrjPotence_IsExistRecordAsync(strUniquenessCondition);
    if (bolIsExistCondition == true) {
      const strMsg = Format(
        '不能满足唯一性条件。满足条件：{0}的记录已经存在!',
        strUniquenessCondition,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true;
  }

  /** 添加新记录,由后台自动获取最大值的关键字。保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   **/
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithMaxIdSave.name;
    const objQxPrjPotenceEN = new clsQxPrjPotenceEN();
    try {
      await this.PutDataToQxPrjPotenceClass(objQxPrjPotenceEN);
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值,否则会出错!
    }
    try {
      QxPrjPotence_CheckPropertyNew(objQxPrjPotenceEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg; //一定要有一个返回值,否则会出错!
    }
    try {
      //检查唯一性条件
      const bolIsExistCond = await this.CheckUniCond4Add(objQxPrjPotenceEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const responseKeyId = await QxPrjPotence_AddNewRecordWithMaxIdAsync(objQxPrjPotenceEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        QxPrjPotence_ReFreshCache(QxPrjPotence_Edit.QxPrjIdCache);
        const strInfo = Format('添加记录成功!');
        $('#lblResult47').val(strInfo);
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');
        $('#lblResult47').val(strInfo);
        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值,否则会出错!
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      throw strMsg;
    }
    return ''; //一定要有一个返回值,否则会出错!
  }

  /** 函数功能:把以该关键字的记录内容显示在界面上,
   * 在这里是把值传到表控件中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_ShowData)
   * @param strPotenceId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(strPotenceId: string) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objQxPrjPotenceEN = new clsQxPrjPotenceEN();
    try {
      const returnBool = await QxPrjPotence_IsExistAsync(strPotenceId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strPotenceId);
        //$('#lblResult1').val(strInfo);
        //显示信息框
        alert(strInfo);
      }
    } catch (e) {
      const strMsg = Format(
        '检查相应关键字的记录存在不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
    try {
      const objQxPrjPotenceENConst = await QxPrjPotence_GetObjByPotenceIdAsync(strPotenceId);
      if (objQxPrjPotenceENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objQxPrjPotenceEN = objQxPrjPotenceENConst;
    } catch (e) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
    //3、用提供的关键字初始化一个类对象；
    this.GetDataFromQxPrjPotenceClass(objQxPrjPotenceEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjQxPrjPotenceEN">表实体类对象</param>
   **/
  public async GetDataFromQxPrjPotenceClass(pobjQxPrjPotenceEN: clsQxPrjPotenceEN) {
    this.potenceId = pobjQxPrjPotenceEN.potenceId; // 权限ID
    this.potenceName = pobjQxPrjPotenceEN.potenceName; // 权限名称
    this.potenceTypeId = pobjQxPrjPotenceEN.potenceTypeId; // 权限类型Id
    this.funcModuleId = pobjQxPrjPotenceEN.funcModuleId; // 模块Id
    this.menuId = pobjQxPrjPotenceEN.menuId; // 菜单Id
    this.memo = pobjQxPrjPotenceEN.memo; // 备注
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strPotenceId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strPotenceId;
    try {
      const objQxPrjPotenceEN = await QxPrjPotence_GetObjByPotenceIdAsync(strPotenceId);
      if (objQxPrjPotenceEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromQxPrjPotenceClass(objQxPrjPotenceEN);
      console.log('完成UpdateRecord!');
      return true;
    } catch (e) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   **/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;
    const objQxPrjPotenceEN = new clsQxPrjPotenceEN();
    objQxPrjPotenceEN.SetPotenceId(this.keyId);
    await this.PutDataToQxPrjPotenceClass(objQxPrjPotenceEN);
    objQxPrjPotenceEN.sfUpdFldSetStr = objQxPrjPotenceEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objQxPrjPotenceEN.potenceId == '' || objQxPrjPotenceEN.potenceId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      QxPrjPotence_CheckProperty4Update(objQxPrjPotenceEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
      //检查唯一性条件
      const bolIsExistCond = await this.CheckUniCond4Update(objQxPrjPotenceEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await QxPrjPotence_UpdateRecordAsync(objQxPrjPotenceEN);
      if (returnBool == true) {
        QxPrjPotence_ReFreshCache(QxPrjPotence_Edit.QxPrjIdCache);
      }
      return returnBool;
    } catch (e) {
      const strMsg = Format(
        '修改记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }

  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   **/
  public set btnCancelQxPrjPotence(value: string) {
    QxPrjPotence_Edit.EditObj.SetButtonText('btnCancelQxPrjPotence', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitQxPrjPotence(): string {
    const strValue = QxPrjPotence_Edit.EditObj.GetButtonText('btnSubmitQxPrjPotence');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitQxPrjPotence(value: string) {
    QxPrjPotence_Edit.EditObj.SetButtonText('btnSubmitQxPrjPotence', value);
  }
  /**
   * 模块Id (Used In Clear())
   **/
  public set funcModuleId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlFuncModuleId', value);
  }
  /**
   * 模块Id (Used In PutDataToClass())
   **/
  public get funcModuleId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlFuncModuleId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 备注 (Used In Clear())
   **/
  public set memo(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtMemo', value);
  }
  /**
   * 备注 (Used In PutDataToClass())
   **/
  public get memo(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtMemo');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 菜单Id (Used In Clear())
   **/
  public set menuId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlMenuId', value);
  }
  /**
   * 菜单Id (Used In PutDataToClass())
   **/
  public get menuId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlMenuId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 权限ID (Used In Clear())
   **/
  public set potenceId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPotenceId', value);
  }
  /**
   * 权限ID (Used In PutDataToClass())
   **/
  public get potenceId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPotenceId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 权限名称 (Used In Clear())
   **/
  public set potenceName(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPotenceName', value);
  }
  /**
   * 权限名称 (Used In PutDataToClass())
   **/
  public get potenceName(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPotenceName');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 权限类型Id (Used In Clear())
   **/
  public set potenceTypeId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlPotenceTypeId', value);
  }
  /**
   * 权限类型Id (Used In PutDataToClass())
   **/
  public get potenceTypeId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlPotenceTypeId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 修改日期 (Used In PutDataToClass())
   **/
  public get updDate(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtUpdDate');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 修改用户Id (Used In PutDataToClass())
   **/
  public get updUserId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtUpdUserId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
}
