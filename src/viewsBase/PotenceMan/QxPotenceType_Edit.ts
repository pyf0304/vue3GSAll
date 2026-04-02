/**
 * 类名:QxPotenceType_Edit(界面:QxPotenceTypeCRUD)
 * 表名:QxPotenceType(00140003)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:15:56
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
import { QxFuncModule_BindDdl_FuncModuleIdInDivCache } from '@/ts/L3ForWApi/PrjManage_GP/clsQxFuncModuleWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  ClearSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetSelectValueInDivObj,
  SetCheckBoxValueByIdInDivObj,
  GetCheckBoxValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  QxPotenceType_GetMaxStrIdByPrefixAsync,
  QxPotenceType_CheckPropertyNew,
  QxPotenceType_AddNewRecordWithMaxIdAsync,
  QxPotenceType_ReFreshCache,
  QxPotenceType_GetUniCondStr,
  QxPotenceType_IsExistRecordAsync,
  QxPotenceType_GetUniCondStr4Update,
  QxPotenceType_IsExistAsync,
  QxPotenceType_GetObjByPotenceTypeIdAsync,
  QxPotenceType_CheckProperty4Update,
  QxPotenceType_UpdateRecordAsync,
} from '@/ts/L3ForWApi/PotenceMan/clsQxPotenceTypeWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { userStore } from '@/store/modulesShare/user';
import { clsQxPotenceTypeEN } from '@/ts/L0Entity/PotenceMan/clsQxPotenceTypeEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** QxPotenceType_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class QxPotenceType_Edit {
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
  public static objPageEdit: QxPotenceType_Edit;
  public static objPageEdit2: QxPotenceType_Edit;
  public static objPageEdit3: QxPotenceType_Edit;

  public QxPrjId = ''; //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
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
    if (QxPotenceType_Edit.SetPageEdit(this, 1) == true) return;
    if (QxPotenceType_Edit.SetPageEdit(this, 2) == true) return;
    if (QxPotenceType_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (QxPotenceType_Edit.objPageEdit == null) {
          QxPotenceType_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxPotenceType_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            QxPotenceType_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (QxPotenceType_Edit.objPageEdit2 == null) {
          QxPotenceType_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxPotenceType_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            QxPotenceType_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (QxPotenceType_Edit.objPageEdit3 == null) {
          QxPotenceType_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxPotenceType_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            QxPotenceType_Edit.objPageEdit3 = objDataLst;
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
    if (QxPotenceType_Edit.objPageEdit != null) {
      const strClassNameOld = QxPotenceType_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return QxPotenceType_Edit.objPageEdit;
    }
    if (QxPotenceType_Edit.objPageEdit2 != null) {
      const strClassNameOld = QxPotenceType_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return QxPotenceType_Edit.objPageEdit2;
    }
    if (QxPotenceType_Edit.objPageEdit3 != null) {
      const strClassNameOld = QxPotenceType_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return QxPotenceType_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_QxPotenceType() {
    if (QxPotenceType_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      QxPotenceType_Edit.EditObj.hideDialog();
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
  public async ShowDialog_QxPotenceType(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_QxPotenceType.name;
    if (QxPotenceType_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (QxPotenceType_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await QxPotenceType_Edit.EditObj.showDialog();
    }
    this.divEdit = QxPotenceType_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (QxPotenceType_Edit.times4TestShowDialog < 2) {
        QxPotenceType_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_QxPotenceType(strOp);
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
      QxPotenceType_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitQxPotenceType = '确认添加';
      this.btnCancelQxPotenceType = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitQxPotenceType = '确认修改';
      this.btnCancelQxPotenceType = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (QxPotenceType_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (QxPotenceType_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = QxPotenceType_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (QxPotenceType_Edit.times4TestShowDialog < 2) {
        QxPotenceType_Edit.times4TestShowDialog++;
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
      QxPotenceType_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_QxPotenceType(this.opType);
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
    await this.SetDdl_FuncModuleIdInDiv(); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_QxPotenceType(this.opType);
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
   * 设置绑定下拉框，针对字段:[FuncModuleId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_FuncModuleIdInDiv() {
    await QxFuncModule_BindDdl_FuncModuleIdInDivCache(this.divEdit, 'ddlFuncModuleId'); //
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
      const bolIsSuccess = await this.ShowDialog_QxPotenceType(this.opType);
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
      const bolIsSuccess = await this.ShowDialog_QxPotenceType(this.opType);
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
    const strCommandText: string = this.btnSubmitQxPotenceType;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitQxPotenceType = '确认添加';
          this.btnCancelQxPotenceType = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (QxPotenceType_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_QxPotenceType();
              this.iShowList.BindGvCache(clsQxPotenceTypeEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (QxPotenceType_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                QxPotenceType_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGvCache(clsQxPotenceTypeEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In QxPotenceType_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (QxPotenceType_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              QxPotenceType_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGvCache(clsQxPotenceTypeEN._CurrTabName, this.keyId);
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
    $('#txtPotenceTypeId').attr('ReadOnly', bolReadonly.toString());
  }

  /**
   * 清除用户自定义控件中,所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    this.potenceTypeId = '';
    this.potenceTypeName = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlFuncModuleId');
    this.isVisible = false;
    this.memo = '';
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucQxPotenceTypeB1.potenceTypeId = QxPotenceTypeGetMaxStrId_S();
    try {
      const returnString = await QxPotenceType_GetMaxStrIdByPrefixAsync(
        QxPotenceType_Edit.QxPrjId4PrefixStatic,
      );
      if (returnString == '') {
        const strInfo = Format('获取表QxPotenceType的最大关键字为空,不成功,请检查!');
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

    //this.potenceTypeId = await QxPotenceType_GetMaxStrIdAsync();
    try {
      const returnString = await QxPotenceType_GetMaxStrIdByPrefixAsync(
        QxPotenceType_Edit.QxPrjId4PrefixStatic,
      );
      if (returnString == '') {
        const strInfo = Format('获取表QxPotenceType的最大关键字为空,不成功,请检查!');
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
   * @param pobjQxPotenceTypeEN">数据传输的目的类对象</param>
   **/
  public async PutDataToQxPotenceTypeClass(pobjQxPotenceTypeEN: clsQxPotenceTypeEN) {
    pobjQxPotenceTypeEN.SetPotenceTypeId(this.potenceTypeId); // 权限类型Id
    pobjQxPotenceTypeEN.SetPotenceTypeName(this.potenceTypeName); // 权限类型名
    pobjQxPotenceTypeEN.SetQxPrjId(clsSysPara4WebApi.currSelPrjId); // 项目Id
    pobjQxPotenceTypeEN.SetFuncModuleId(this.funcModuleId); // 模块Id
    pobjQxPotenceTypeEN.SetIsVisible(this.isVisible); // 是否显示
    pobjQxPotenceTypeEN.SetMemo(this.memo); // 备注
    pobjQxPotenceTypeEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjQxPotenceTypeEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objQxPotenceTypeEN = new clsQxPotenceTypeEN();
    try {
      await this.PutDataToQxPotenceTypeClass(objQxPotenceTypeEN);
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
      QxPotenceType_CheckPropertyNew(objQxPotenceTypeEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objQxPotenceTypeEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      const returnKeyId = await QxPotenceType_AddNewRecordWithMaxIdAsync(objQxPotenceTypeEN);
      if (IsNullOrEmpty(returnKeyId) == false) {
        returnBool = true;
      }
      if (returnBool == true) {
        QxPotenceType_ReFreshCache();
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
  public async CheckUniCond4Add(objQxPotenceTypeEN: clsQxPotenceTypeEN): Promise<boolean> {
    const strUniquenessCondition = QxPotenceType_GetUniCondStr(objQxPotenceTypeEN);
    const bolIsExistCondition = await QxPotenceType_IsExistRecordAsync(strUniquenessCondition);
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
  public async CheckUniCond4Update(objQxPotenceTypeEN: clsQxPotenceTypeEN): Promise<boolean> {
    const strUniquenessCondition = QxPotenceType_GetUniCondStr4Update(objQxPotenceTypeEN);
    const bolIsExistCondition = await QxPotenceType_IsExistRecordAsync(strUniquenessCondition);
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
    const objQxPotenceTypeEN = new clsQxPotenceTypeEN();
    try {
      await this.PutDataToQxPotenceTypeClass(objQxPotenceTypeEN);
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
      QxPotenceType_CheckPropertyNew(objQxPotenceTypeEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objQxPotenceTypeEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const responseKeyId = await QxPotenceType_AddNewRecordWithMaxIdAsync(objQxPotenceTypeEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        QxPotenceType_ReFreshCache();
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
   * @param strPotenceTypeId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(strPotenceTypeId: string) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objQxPotenceTypeEN = new clsQxPotenceTypeEN();
    try {
      const returnBool = await QxPotenceType_IsExistAsync(strPotenceTypeId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strPotenceTypeId);
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
      const objQxPotenceTypeENConst = await QxPotenceType_GetObjByPotenceTypeIdAsync(
        strPotenceTypeId,
      );
      if (objQxPotenceTypeENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objQxPotenceTypeEN = objQxPotenceTypeENConst;
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
    this.GetDataFromQxPotenceTypeClass(objQxPotenceTypeEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjQxPotenceTypeEN">表实体类对象</param>
   **/
  public async GetDataFromQxPotenceTypeClass(pobjQxPotenceTypeEN: clsQxPotenceTypeEN) {
    this.potenceTypeId = pobjQxPotenceTypeEN.potenceTypeId; // 权限类型Id
    this.potenceTypeName = pobjQxPotenceTypeEN.potenceTypeName; // 权限类型名
    this.funcModuleId = pobjQxPotenceTypeEN.funcModuleId; // 模块Id
    this.isVisible = pobjQxPotenceTypeEN.isVisible; // 是否显示
    this.memo = pobjQxPotenceTypeEN.memo; // 备注
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strPotenceTypeId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strPotenceTypeId;
    try {
      const objQxPotenceTypeEN = await QxPotenceType_GetObjByPotenceTypeIdAsync(strPotenceTypeId);
      if (objQxPotenceTypeEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromQxPotenceTypeClass(objQxPotenceTypeEN);
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
    const objQxPotenceTypeEN = new clsQxPotenceTypeEN();
    objQxPotenceTypeEN.SetPotenceTypeId(this.keyId);
    await this.PutDataToQxPotenceTypeClass(objQxPotenceTypeEN);
    objQxPotenceTypeEN.sfUpdFldSetStr = objQxPotenceTypeEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objQxPotenceTypeEN.potenceTypeId == '' || objQxPotenceTypeEN.potenceTypeId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      QxPotenceType_CheckProperty4Update(objQxPotenceTypeEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objQxPotenceTypeEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await QxPotenceType_UpdateRecordAsync(objQxPotenceTypeEN);
      if (returnBool == true) {
        QxPotenceType_ReFreshCache();
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
  public set btnCancelQxPotenceType(value: string) {
    QxPotenceType_Edit.EditObj.SetButtonText('btnCancelQxPotenceType', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitQxPotenceType(): string {
    const strValue = QxPotenceType_Edit.EditObj.GetButtonText('btnSubmitQxPotenceType');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitQxPotenceType(value: string) {
    QxPotenceType_Edit.EditObj.SetButtonText('btnSubmitQxPotenceType', value);
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
   * 是否显示 (Used In Clear())
   **/
  public set isVisible(value: boolean) {
    SetCheckBoxValueByIdInDivObj(this.divEdit, 'chkIsVisible', value);
  }
  /**
   * 是否显示 (Used In PutDataToClass())
   **/
  public get isVisible(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(this.divEdit, 'chkIsVisible');
    return bolValue;
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
   * 权限类型Id (Used In Clear())
   **/
  public set potenceTypeId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPotenceTypeId', value);
  }
  /**
   * 权限类型Id (Used In PutDataToClass())
   **/
  public get potenceTypeId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPotenceTypeId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 权限类型名 (Used In Clear())
   **/
  public set potenceTypeName(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPotenceTypeName', value);
  }
  /**
   * 权限类型名 (Used In PutDataToClass())
   **/
  public get potenceTypeName(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPotenceTypeName');
    if (strValue == undefined) return '';
    else return strValue.toString();
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
