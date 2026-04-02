/**
 * 类名:QxRoleRightRelation_Edit(界面:QxRoleRightRelationCRUD)
 * 表名:QxRoleRightRelation(01120957)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:21:52
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS)
 * 编程语言:TypeScript
 **/
import $ from 'jquery';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { QxProjects_BindDdl_QxPrjIdInDivCache } from '@/ts/L3ForWApi/PrjManage/clsQxProjectsWApi';
import {
  ClearSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetSelectValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { userStore } from '@/store/modulesShare/user';
import {
  QxRoleRightRelation_CheckPropertyNew,
  QxRoleRightRelation_AddNewRecordAsync,
  QxRoleRightRelation_GetUniCondStr,
  QxRoleRightRelation_IsExistRecordAsync,
  QxRoleRightRelation_GetUniCondStr4Update,
  QxRoleRightRelation_IsExistAsync,
  QxRoleRightRelation_GetObjBymIdAsync,
  QxRoleRightRelation_CheckProperty4Update,
  QxRoleRightRelation_UpdateRecordAsync,
} from '@/ts/L3ForWApi/UserManage/clsQxRoleRightRelationWApi';
import { clsQxRoleRightRelationEN } from '@/ts/L0Entity/UserManage/clsQxRoleRightRelationEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** QxRoleRightRelation_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class QxRoleRightRelation_Edit {
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
  public static objPageEdit: QxRoleRightRelation_Edit;
  public static objPageEdit2: QxRoleRightRelation_Edit;
  public static objPageEdit3: QxRoleRightRelation_Edit;

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
    if (QxRoleRightRelation_Edit.SetPageEdit(this, 1) == true) return;
    if (QxRoleRightRelation_Edit.SetPageEdit(this, 2) == true) return;
    if (QxRoleRightRelation_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (QxRoleRightRelation_Edit.objPageEdit == null) {
          QxRoleRightRelation_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxRoleRightRelation_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            QxRoleRightRelation_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (QxRoleRightRelation_Edit.objPageEdit2 == null) {
          QxRoleRightRelation_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxRoleRightRelation_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            QxRoleRightRelation_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (QxRoleRightRelation_Edit.objPageEdit3 == null) {
          QxRoleRightRelation_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxRoleRightRelation_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            QxRoleRightRelation_Edit.objPageEdit3 = objDataLst;
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
    if (QxRoleRightRelation_Edit.objPageEdit != null) {
      const strClassNameOld = QxRoleRightRelation_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return QxRoleRightRelation_Edit.objPageEdit;
    }
    if (QxRoleRightRelation_Edit.objPageEdit2 != null) {
      const strClassNameOld = QxRoleRightRelation_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return QxRoleRightRelation_Edit.objPageEdit2;
    }
    if (QxRoleRightRelation_Edit.objPageEdit3 != null) {
      const strClassNameOld = QxRoleRightRelation_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return QxRoleRightRelation_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_QxRoleRightRelation() {
    if (QxRoleRightRelation_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      QxRoleRightRelation_Edit.EditObj.hideDialog();
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
  public async ShowDialog_QxRoleRightRelation(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_QxRoleRightRelation.name;
    if (QxRoleRightRelation_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (QxRoleRightRelation_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await QxRoleRightRelation_Edit.EditObj.showDialog();
    }
    this.divEdit = QxRoleRightRelation_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (QxRoleRightRelation_Edit.times4TestShowDialog < 2) {
        QxRoleRightRelation_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_QxRoleRightRelation(strOp);
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
      QxRoleRightRelation_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitQxRoleRightRelation = '确认添加';
      this.btnCancelQxRoleRightRelation = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitQxRoleRightRelation = '确认修改';
      this.btnCancelQxRoleRightRelation = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (QxRoleRightRelation_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (QxRoleRightRelation_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = QxRoleRightRelation_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (QxRoleRightRelation_Edit.times4TestShowDialog < 2) {
        QxRoleRightRelation_Edit.times4TestShowDialog++;
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
      QxRoleRightRelation_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_QxRoleRightRelation(this.opType);
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

    await this.SetDdl_MyRoleIdInDiv(strQxPrjId); //编辑区域

    await this.SetDdl_RoleIdInDiv(strQxPrjId); //编辑区域

    await this.SetDdl_QxPrjIdInDiv(); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_QxRoleRightRelation(this.opType);
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
   * 设置绑定下拉框，针对字段:[MyRoleId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_MyRoleIdInDiv(strQxPrjId: string) {
    if (IsNullOrEmpty(strQxPrjId) == true) {
      const strMsg = Format('参数:[strQxPrjId]不能为空!(In .SetDdl_MyRoleIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strQxPrjId.length != 4) {
      const strMsg = Format(
        '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(.SetDdl_MyRoleIdInDiv)',
        strQxPrjId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    if (IsNullOrEmpty(strQxPrjId) == true) {
      const strMsg = Format('参数:[strQxPrjId]不能为空!(In .SetDdl_MyRoleIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strQxPrjId.length != 4) {
      const strMsg = Format(
        '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(.SetDdl_MyRoleIdInDiv)',
        strQxPrjId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }
    await QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache(this.divEdit, 'ddlMyRoleId', strQxPrjId); //
  }

  /**
   * 设置绑定下拉框，针对字段:[RoleId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_RoleIdInDiv(strQxPrjId: string) {
    if (IsNullOrEmpty(strQxPrjId) == true) {
      const strMsg = Format('参数:[strQxPrjId]不能为空!(In .SetDdl_RoleIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strQxPrjId.length != 4) {
      const strMsg = Format(
        '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(.SetDdl_RoleIdInDiv)',
        strQxPrjId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    if (IsNullOrEmpty(strQxPrjId) == true) {
      const strMsg = Format('参数:[strQxPrjId]不能为空!(In .SetDdl_RoleIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strQxPrjId.length != 4) {
      const strMsg = Format(
        '缓存分类变量:[strQxPrjId]的长度:[{0}]不正确!(.SetDdl_RoleIdInDiv)',
        strQxPrjId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }
    await QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache(this.divEdit, 'ddlRoleId', strQxPrjId); //
  }

  /**
   * 设置绑定下拉框，针对字段:[QxPrjId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_QxPrjIdInDiv() {
    await QxProjects_BindDdl_QxPrjIdInDivCache(this.divEdit, 'ddlQxPrjId'); //
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
      const bolIsSuccess = await this.ShowDialog_QxRoleRightRelation(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      const lngKeyId = Number(strKeyId);
      this.UpdateRecord(lngKeyId);
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
      const bolIsSuccess = await this.ShowDialog_QxRoleRightRelation(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      const lngKeyId = Number(strKeyId);
      const update = await this.UpdateRecord(lngKeyId);
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
    const strCommandText: string = this.btnSubmitQxRoleRightRelation;
    try {
      let returnBool = false;
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitQxRoleRightRelation = '确认添加';
          this.btnCancelQxRoleRightRelation = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            //const returnKeyId = await this.AddNewRecordWithMaxIdSave();
            //if (IsNullOrEmpty(returnKeyId) == false)
            //{
            //QxRoleRightRelation_Edit.EditObj.hideDialog();
            //this.iShowList.BindGvCache(clsQxRoleRightRelationEN._CurrTabName, "");
            //}
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (QxRoleRightRelation_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                QxRoleRightRelation_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGv(clsQxRoleRightRelationEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In QxRoleRightRelation_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (QxRoleRightRelation_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              QxRoleRightRelation_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGv(clsQxRoleRightRelationEN._CurrTabName, this.keyId);
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
   * 清除用户自定义控件中,所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlMyRoleId');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlRoleId');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlQxPrjId');
    this.memo = '';
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucQxRoleRightRelationB1.mId = QxRoleRightRelationGetMaxStrId_S();
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    this.Clear();

    //this.mId = await QxRoleRightRelation_GetMaxStrIdAsync();
  }

  /** 函1数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjQxRoleRightRelationEN">数据传输的目的类对象</param>
   **/
  public async PutDataToQxRoleRightRelationClass(
    pobjQxRoleRightRelationEN: clsQxRoleRightRelationEN,
  ) {
    pobjQxRoleRightRelationEN.SetMyRoleId(this.myRoleId); // 主角色
    pobjQxRoleRightRelationEN.SetRoleId(this.roleId); // 角色
    pobjQxRoleRightRelationEN.SetQxPrjId(this.qxPrjId); // 工程
    pobjQxRoleRightRelationEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjQxRoleRightRelationEN.SetMemo(this.memo); // 备注
    pobjQxRoleRightRelationEN.SetUpdUser(userStore.getUserId); // 修改人
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objQxRoleRightRelationEN = new clsQxRoleRightRelationEN();
    try {
      await this.PutDataToQxRoleRightRelationClass(objQxRoleRightRelationEN);
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
      QxRoleRightRelation_CheckPropertyNew(objQxRoleRightRelationEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objQxRoleRightRelationEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      returnBool = await QxRoleRightRelation_AddNewRecordAsync(objQxRoleRightRelationEN);
      if (returnBool == true) {
        //QxRoleRightRelation_ReFreshCache();
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
  public async CheckUniCond4Add(
    objQxRoleRightRelationEN: clsQxRoleRightRelationEN,
  ): Promise<boolean> {
    const strUniquenessCondition = QxRoleRightRelation_GetUniCondStr(objQxRoleRightRelationEN);
    const bolIsExistCondition = await QxRoleRightRelation_IsExistRecordAsync(
      strUniquenessCondition,
    );
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
  public async CheckUniCond4Update(
    objQxRoleRightRelationEN: clsQxRoleRightRelationEN,
  ): Promise<boolean> {
    const strUniquenessCondition =
      QxRoleRightRelation_GetUniCondStr4Update(objQxRoleRightRelationEN);
    const bolIsExistCondition = await QxRoleRightRelation_IsExistRecordAsync(
      strUniquenessCondition,
    );
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

  /** 函数功能:把以该关键字的记录内容显示在界面上,
   * 在这里是把值传到表控件中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_ShowData)
   * @param lngmId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(lngmId: number) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objQxRoleRightRelationEN = new clsQxRoleRightRelationEN();
    try {
      const returnBool = await QxRoleRightRelation_IsExistAsync(lngmId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', lngmId);
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
      const objQxRoleRightRelationENConst = await QxRoleRightRelation_GetObjBymIdAsync(lngmId);
      if (objQxRoleRightRelationENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objQxRoleRightRelationEN = objQxRoleRightRelationENConst;
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
    this.GetDataFromQxRoleRightRelationClass(objQxRoleRightRelationEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjQxRoleRightRelationEN">表实体类对象</param>
   **/
  public async GetDataFromQxRoleRightRelationClass(
    pobjQxRoleRightRelationEN: clsQxRoleRightRelationEN,
  ) {
    this.myRoleId = pobjQxRoleRightRelationEN.myRoleId; // 主角色
    this.roleId = pobjQxRoleRightRelationEN.roleId; // 角色
    this.qxPrjId = pobjQxRoleRightRelationEN.qxPrjId; // 工程
    this.memo = pobjQxRoleRightRelationEN.memo; // 备注
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(lngmId: number): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = lngmId.toString();
    try {
      const objQxRoleRightRelationEN = await QxRoleRightRelation_GetObjBymIdAsync(lngmId);
      if (objQxRoleRightRelationEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromQxRoleRightRelationClass(objQxRoleRightRelationEN);
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
    const objQxRoleRightRelationEN = new clsQxRoleRightRelationEN();
    objQxRoleRightRelationEN.SetmId(Number(this.keyId));
    await this.PutDataToQxRoleRightRelationClass(objQxRoleRightRelationEN);
    objQxRoleRightRelationEN.sfUpdFldSetStr = objQxRoleRightRelationEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objQxRoleRightRelationEN.mId == 0 || objQxRoleRightRelationEN.mId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      QxRoleRightRelation_CheckProperty4Update(objQxRoleRightRelationEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objQxRoleRightRelationEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await QxRoleRightRelation_UpdateRecordAsync(objQxRoleRightRelationEN);
      if (returnBool == true) {
        //QxRoleRightRelation_ReFreshCache();
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
  public set btnCancelQxRoleRightRelation(value: string) {
    QxRoleRightRelation_Edit.EditObj.SetButtonText('btnCancelQxRoleRightRelation', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitQxRoleRightRelation(): string {
    const strValue = QxRoleRightRelation_Edit.EditObj.GetButtonText('btnSubmitQxRoleRightRelation');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitQxRoleRightRelation(value: string) {
    QxRoleRightRelation_Edit.EditObj.SetButtonText('btnSubmitQxRoleRightRelation', value);
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
   * 主角色Id (Used In Clear())
   **/
  public set myRoleId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlMyRoleId', value);
  }
  /**
   * 主角色Id (Used In PutDataToClass())
   **/
  public get myRoleId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlMyRoleId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * QxPrjId (Used In Clear())
   **/
  public set qxPrjId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlQxPrjId', value);
  }
  /**
   * QxPrjId (Used In PutDataToClass())
   **/
  public get qxPrjId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlQxPrjId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 角色Id (Used In Clear())
   **/
  public set roleId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlRoleId', value);
  }
  /**
   * 角色Id (Used In PutDataToClass())
   **/
  public get roleId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlRoleId');
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
   * 修改人 (Used In PutDataToClass())
   **/
  public get updUser(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtUpdUser');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
}
