/**
 * 类名:QxPrjMenus_Edit(界面:QxPrjMenusCRUD)
 * 表名:QxPrjMenus(00140004)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:24:19
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS)
 * 编程语言:TypeScript
 **/
import $ from 'jquery';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { QxPrjMenusEx_BindDdl_UpMenuIdByQxPrjIdInDivCache } from '@/ts/L3ForWApiExShare/MenuManage_GP/clsQxPrjMenusExWApi';
import { QxPageDispMode_BindDdl_PageDispModeIdInDivCache } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPageDispModeWApi';
import {
  ClearSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetCheckBoxValueByIdInDivObj,
  GetCheckBoxValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetSelectValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  QxPrjMenus_GetMaxStrIdByPrefixAsync,
  QxPrjMenus_CheckPropertyNew,
  QxPrjMenus_AddNewRecordWithMaxIdAsync,
  QxPrjMenus_GetUniCondStr,
  QxPrjMenus_IsExistRecordAsync,
  QxPrjMenus_GetUniCondStr4Update,
  QxPrjMenus_IsExistAsync,
  QxPrjMenus_GetObjByMenuIdAsync,
  QxPrjMenus_CheckProperty4Update,
  QxPrjMenus_UpdateRecordAsync,
} from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { userStore } from '@/store/modulesShare/user';
import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
import { qxPrjMenusStore } from '@/store/modulesShare/qxPrjMenus';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** QxPrjMenus_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class QxPrjMenus_Edit {
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
  public static objPageEdit: QxPrjMenus_Edit;
  public static objPageEdit2: QxPrjMenus_Edit;
  public static objPageEdit3: QxPrjMenus_Edit;

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
    if (QxPrjMenus_Edit.SetPageEdit(this, 1) == true) return;
    if (QxPrjMenus_Edit.SetPageEdit(this, 2) == true) return;
    if (QxPrjMenus_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (QxPrjMenus_Edit.objPageEdit == null) {
          QxPrjMenus_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxPrjMenus_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            QxPrjMenus_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (QxPrjMenus_Edit.objPageEdit2 == null) {
          QxPrjMenus_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxPrjMenus_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            QxPrjMenus_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (QxPrjMenus_Edit.objPageEdit3 == null) {
          QxPrjMenus_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxPrjMenus_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            QxPrjMenus_Edit.objPageEdit3 = objDataLst;
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
    if (QxPrjMenus_Edit.objPageEdit != null) {
      const strClassNameOld = QxPrjMenus_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return QxPrjMenus_Edit.objPageEdit;
    }
    if (QxPrjMenus_Edit.objPageEdit2 != null) {
      const strClassNameOld = QxPrjMenus_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return QxPrjMenus_Edit.objPageEdit2;
    }
    if (QxPrjMenus_Edit.objPageEdit3 != null) {
      const strClassNameOld = QxPrjMenus_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return QxPrjMenus_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_QxPrjMenus() {
    if (QxPrjMenus_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      QxPrjMenus_Edit.EditObj.hideDialog();
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
  public async ShowDialog_QxPrjMenus(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_QxPrjMenus.name;
    if (QxPrjMenus_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (QxPrjMenus_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await QxPrjMenus_Edit.EditObj.showDialog();
    }
    this.divEdit = QxPrjMenus_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (QxPrjMenus_Edit.times4TestShowDialog < 2) {
        QxPrjMenus_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_QxPrjMenus(strOp);
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
      QxPrjMenus_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitQxPrjMenus = '确认添加';
      this.btnCancelQxPrjMenus = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitQxPrjMenus = '确认修改';
      this.btnCancelQxPrjMenus = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (QxPrjMenus_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (QxPrjMenus_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = QxPrjMenus_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (QxPrjMenus_Edit.times4TestShowDialog < 2) {
        QxPrjMenus_Edit.times4TestShowDialog++;
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
      QxPrjMenus_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_QxPrjMenus(this.opType);
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
    const strQxPrjId = clsSysPara4WebApi.currSelPrjId; //Session存储、local存储

    await this.SetDdl_UpMenuIdInDiv(strQxPrjId); //编辑区域

    await this.SetDdl_PageDispModeIdInDiv(); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_QxPrjMenus(this.opType);
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
   * 设置绑定下拉框，针对字段:[UpMenuId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_UpMenuIdInDiv(strQxPrjId: string) {
    if (IsNullOrEmpty(strQxPrjId) == true) {
      const strMsg = Format('参数:[strQxPrjId]不能为空!(In .SetDdl_UpMenuIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strQxPrjId.length != 4) {
      const strMsg = Format(
        '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(.SetDdl_UpMenuIdInDiv)',
        strQxPrjId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    await QxPrjMenusEx_BindDdl_UpMenuIdByQxPrjIdInDivCache(this.divEdit, 'ddlUpMenuId', strQxPrjId); //
  }

  /**
   * 设置绑定下拉框，针对字段:[PageDispModeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_PageDispModeIdInDiv() {
    await QxPageDispMode_BindDdl_PageDispModeIdInDivCache(this.divEdit, 'ddlPageDispModeId'); //
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
      const bolIsSuccess = await this.ShowDialog_QxPrjMenus(this.opType);
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
      const bolIsSuccess = await this.ShowDialog_QxPrjMenus(this.opType);
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
    const strCommandText: string = this.btnSubmitQxPrjMenus;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitQxPrjMenus = '确认添加';
          this.btnCancelQxPrjMenus = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (QxPrjMenus_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_QxPrjMenus();
              this.iShowList.BindGvCache(clsQxPrjMenusEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (QxPrjMenus_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                QxPrjMenus_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGvCache(clsQxPrjMenusEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In QxPrjMenus_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (QxPrjMenus_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              QxPrjMenus_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGvCache(clsQxPrjMenusEN._CurrTabName, this.keyId);
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
    $('#txtMenuId').attr('ReadOnly', bolReadonly.toString());
  }

  /**
   * 清除用户自定义控件中,所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    this.menuId = '';
    this.menuName = '';
    this.menuTitle = '';
    this.menuControlName = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlUpMenuId');
    this.linkFile = '';
    this.qsParameters = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlPageDispModeId');
    this.imgFile = '';
    this.orderNum = 0;
    this.isLeafNode = false;
    this.inUse = false;
    this.memo = '';
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucQxPrjMenusB1.menuId = QxPrjMenusGetMaxStrId_S();
    try {
      const returnString = await QxPrjMenus_GetMaxStrIdByPrefixAsync(
        QxPrjMenus_Edit.QxPrjId4PrefixStatic,
      );
      if (returnString == '') {
        const strInfo = Format('获取表QxPrjMenus的最大关键字为空,不成功,请检查!');
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

    //this.menuId = await QxPrjMenus_GetMaxStrIdAsync();
    try {
      const returnString = await QxPrjMenus_GetMaxStrIdByPrefixAsync(
        QxPrjMenus_Edit.QxPrjId4PrefixStatic,
      );
      if (returnString == '') {
        const strInfo = Format('获取表QxPrjMenus的最大关键字为空,不成功,请检查!');
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
   * @param pobjQxPrjMenusEN">数据传输的目的类对象</param>
   **/
  public async PutDataToQxPrjMenusClass(pobjQxPrjMenusEN: clsQxPrjMenusEN) {
    pobjQxPrjMenusEN.SetMenuId(this.menuId); // 菜单Id
    pobjQxPrjMenusEN.SetMenuName(this.menuName); // 菜单名
    pobjQxPrjMenusEN.SetQxPrjId(clsSysPara4WebApi.currSelPrjId); // 项目Id
    pobjQxPrjMenusEN.SetMenuTitle(this.menuTitle); // 菜单标题
    pobjQxPrjMenusEN.SetMenuControlName(this.menuControlName); // 菜单控件名
    pobjQxPrjMenusEN.SetUpMenuId(this.upMenuId); // 上级菜单Id
    pobjQxPrjMenusEN.SetLinkFile(this.linkFile); // 链接文件
    pobjQxPrjMenusEN.SetqsParameters(this.qsParameters); // qs参数
    pobjQxPrjMenusEN.SetPageDispModeId(this.pageDispModeId); // 显示模式
    pobjQxPrjMenusEN.SetImgFile(this.imgFile); // 图像文件
    pobjQxPrjMenusEN.SetOrderNum(this.orderNum); // 排序号
    pobjQxPrjMenusEN.SetIsLeafNode(this.isLeafNode); // 是否叶子
    pobjQxPrjMenusEN.SetInUse(this.inUse); // 是否在用
    pobjQxPrjMenusEN.SetMemo(this.memo); // 备注
    pobjQxPrjMenusEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjQxPrjMenusEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objQxPrjMenusEN = new clsQxPrjMenusEN();
    try {
      await this.PutDataToQxPrjMenusClass(objQxPrjMenusEN);
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
      QxPrjMenus_CheckPropertyNew(objQxPrjMenusEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objQxPrjMenusEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      const returnKeyId = await QxPrjMenus_AddNewRecordWithMaxIdAsync(objQxPrjMenusEN);
      if (IsNullOrEmpty(returnKeyId) == false) {
        returnBool = true;
      }
      if (returnBool == true) {
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
  public async CheckUniCond4Add(objQxPrjMenusEN: clsQxPrjMenusEN): Promise<boolean> {
    const strUniquenessCondition = QxPrjMenus_GetUniCondStr(objQxPrjMenusEN);
    const bolIsExistCondition = await QxPrjMenus_IsExistRecordAsync(strUniquenessCondition);
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
  public async CheckUniCond4Update(objQxPrjMenusEN: clsQxPrjMenusEN): Promise<boolean> {
    const strUniquenessCondition = QxPrjMenus_GetUniCondStr4Update(objQxPrjMenusEN);
    const bolIsExistCondition = await QxPrjMenus_IsExistRecordAsync(strUniquenessCondition);
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
    const objQxPrjMenusEN = new clsQxPrjMenusEN();
    try {
      await this.PutDataToQxPrjMenusClass(objQxPrjMenusEN);
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
      QxPrjMenus_CheckPropertyNew(objQxPrjMenusEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objQxPrjMenusEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const responseKeyId = await QxPrjMenus_AddNewRecordWithMaxIdAsync(objQxPrjMenusEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
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
   * @param strMenuId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(strMenuId: string) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objQxPrjMenusEN = new clsQxPrjMenusEN();
    try {
      const returnBool = await QxPrjMenus_IsExistAsync(strMenuId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strMenuId);
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
      const objQxPrjMenusENConst = await QxPrjMenus_GetObjByMenuIdAsync(strMenuId);
      if (objQxPrjMenusENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objQxPrjMenusEN = objQxPrjMenusENConst;
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
    this.GetDataFromQxPrjMenusClass(objQxPrjMenusEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjQxPrjMenusEN">表实体类对象</param>
   **/
  public async GetDataFromQxPrjMenusClass(pobjQxPrjMenusEN: clsQxPrjMenusEN) {
    this.menuId = pobjQxPrjMenusEN.menuId; // 菜单Id
    this.menuName = pobjQxPrjMenusEN.menuName; // 菜单名
    this.menuTitle = pobjQxPrjMenusEN.menuTitle; // 菜单标题
    this.menuControlName = pobjQxPrjMenusEN.menuControlName; // 菜单控件名
    this.upMenuId = pobjQxPrjMenusEN.upMenuId; // 上级菜单Id
    this.linkFile = pobjQxPrjMenusEN.linkFile; // 链接文件
    this.qsParameters = pobjQxPrjMenusEN.qsParameters; // qs参数
    this.pageDispModeId = pobjQxPrjMenusEN.pageDispModeId; // 显示模式
    this.imgFile = pobjQxPrjMenusEN.imgFile; // 图像文件
    this.orderNum = pobjQxPrjMenusEN.orderNum; // 排序号
    this.isLeafNode = pobjQxPrjMenusEN.isLeafNode; // 是否叶子
    this.inUse = pobjQxPrjMenusEN.inUse; // 是否在用
    this.memo = pobjQxPrjMenusEN.memo; // 备注
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strMenuId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strMenuId;
    try {
      const objQxPrjMenusEN = await QxPrjMenus_GetObjByMenuIdAsync(strMenuId);
      if (objQxPrjMenusEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromQxPrjMenusClass(objQxPrjMenusEN);
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
    const objQxPrjMenusEN = new clsQxPrjMenusEN();
    objQxPrjMenusEN.SetMenuId(this.keyId);
    await this.PutDataToQxPrjMenusClass(objQxPrjMenusEN);
    objQxPrjMenusEN.sfUpdFldSetStr = objQxPrjMenusEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objQxPrjMenusEN.menuId == '' || objQxPrjMenusEN.menuId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      QxPrjMenus_CheckProperty4Update(objQxPrjMenusEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objQxPrjMenusEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await QxPrjMenus_UpdateRecordAsync(objQxPrjMenusEN);
      if (returnBool == true) {
        await qxPrjMenusStore.delObj(objQxPrjMenusEN.menuId);
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
  public set btnCancelQxPrjMenus(value: string) {
    QxPrjMenus_Edit.EditObj.SetButtonText('btnCancelQxPrjMenus', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitQxPrjMenus(): string {
    const strValue = QxPrjMenus_Edit.EditObj.GetButtonText('btnSubmitQxPrjMenus');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitQxPrjMenus(value: string) {
    QxPrjMenus_Edit.EditObj.SetButtonText('btnSubmitQxPrjMenus', value);
  }
  /**
   * 图像文件 (Used In Clear())
   **/
  public set imgFile(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtImgFile', value);
  }
  /**
   * 图像文件 (Used In PutDataToClass())
   **/
  public get imgFile(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtImgFile');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 是否在用 (Used In Clear())
   **/
  public set inUse(value: boolean) {
    SetCheckBoxValueByIdInDivObj(this.divEdit, 'chkInUse', value);
  }
  /**
   * 是否在用 (Used In PutDataToClass())
   **/
  public get inUse(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(this.divEdit, 'chkInUse');
    return bolValue;
  }
  /**
   * 是否叶子 (Used In Clear())
   **/
  public set isLeafNode(value: boolean) {
    SetCheckBoxValueByIdInDivObj(this.divEdit, 'chkIsLeafNode', value);
  }
  /**
   * 是否叶子 (Used In PutDataToClass())
   **/
  public get isLeafNode(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(this.divEdit, 'chkIsLeafNode');
    return bolValue;
  }
  /**
   * 链接文件 (Used In Clear())
   **/
  public set linkFile(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtLinkFile', value);
  }
  /**
   * 链接文件 (Used In PutDataToClass())
   **/
  public get linkFile(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtLinkFile');
    if (strValue == undefined) return '';
    else return strValue.toString();
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
   * 菜单控件名 (Used In Clear())
   **/
  public set menuControlName(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtMenuControlName', value);
  }
  /**
   * 菜单控件名 (Used In PutDataToClass())
   **/
  public get menuControlName(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtMenuControlName');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 菜单Id (Used In Clear())
   **/
  public set menuId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtMenuId', value);
  }
  /**
   * 菜单Id (Used In PutDataToClass())
   **/
  public get menuId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtMenuId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 菜单名 (Used In Clear())
   **/
  public set menuName(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtMenuName', value);
  }
  /**
   * 菜单名 (Used In PutDataToClass())
   **/
  public get menuName(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtMenuName');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 菜单标题 (Used In Clear())
   **/
  public set menuTitle(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtMenuTitle', value);
  }
  /**
   * 菜单标题 (Used In PutDataToClass())
   **/
  public get menuTitle(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtMenuTitle');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 排序号 (Used In Clear())
   **/
  public set orderNum(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtOrderNum', value !== null ? value.toString() : '');
  }
  /**
   * 排序号 (Used In PutDataToClass())
   **/
  public get orderNum(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtOrderNum');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 页面显示模式Id (Used In Clear())
   **/
  public set pageDispModeId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlPageDispModeId', value);
  }
  /**
   * 页面显示模式Id (Used In PutDataToClass())
   **/
  public get pageDispModeId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlPageDispModeId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * qs参数 (Used In Clear())
   **/
  public set qsParameters(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtqsParameters', value);
  }
  /**
   * qs参数 (Used In PutDataToClass())
   **/
  public get qsParameters(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtqsParameters');
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
  /**
   * 上级菜单Id (Used In Clear())
   **/
  public set upMenuId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlUpMenuId', value);
  }
  /**
   * 上级菜单Id (Used In PutDataToClass())
   **/
  public get upMenuId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlUpMenuId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
}
