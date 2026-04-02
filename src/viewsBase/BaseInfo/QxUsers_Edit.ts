/**
 * 类名:QxUsers_Edit(界面:QxUsersCRUD)
 * 表名:QxUsers(01120258)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/20 15:19:12
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS)
 * 编程语言:TypeScript
 **/
import $ from 'jquery';
import { QxUserState_BindDdl_UserStateIdInDivCache } from '@/ts/L3ForWApi/UserManage/clsQxUserStateWApi';
import { XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { XzGradeBase_BindDdl_IdGradeBaseInDivCache } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { XzSchool_BindDdl_id_SchoolInDivCache } from '@/ts/L3ForWApi/SystemSet/clsXzSchoolWApi';
import { QxDepartmentInfo_BindDdl_DepartmentIdInDivCache } from '@/ts/L3ForWApi/UserManage/clsQxDepartmentInfoWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
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
  QxUsers_CheckPropertyNew,
  QxUsers_IsExistAsync,
  QxUsers_AddNewRecordAsync,
  QxUsers_AddNewRecordWithMaxIdAsync,
  QxUsers_GetObjByUserIdAsync,
  QxUsers_CheckProperty4Update,
  QxUsers_UpdateRecordAsync,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi';
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
/** QxUsers_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class QxUsers_Edit {
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
  public static objPageEdit: QxUsers_Edit;
  public static objPageEdit2: QxUsers_Edit;
  public static objPageEdit3: QxUsers_Edit;

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
    if (QxUsers_Edit.SetPageEdit(this, 1) == true) return;
    if (QxUsers_Edit.SetPageEdit(this, 2) == true) return;
    if (QxUsers_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (QxUsers_Edit.objPageEdit == null) {
          QxUsers_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxUsers_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            QxUsers_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (QxUsers_Edit.objPageEdit2 == null) {
          QxUsers_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxUsers_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            QxUsers_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (QxUsers_Edit.objPageEdit3 == null) {
          QxUsers_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = QxUsers_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            QxUsers_Edit.objPageEdit3 = objDataLst;
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
    if (QxUsers_Edit.objPageEdit != null) {
      const strClassNameOld = QxUsers_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return QxUsers_Edit.objPageEdit;
    }
    if (QxUsers_Edit.objPageEdit2 != null) {
      const strClassNameOld = QxUsers_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return QxUsers_Edit.objPageEdit2;
    }
    if (QxUsers_Edit.objPageEdit3 != null) {
      const strClassNameOld = QxUsers_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return QxUsers_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_QxUsers() {
    if (QxUsers_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      QxUsers_Edit.EditObj.hideDialog();
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
  public async ShowDialog_QxUsers(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_QxUsers.name;
    if (QxUsers_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (QxUsers_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await QxUsers_Edit.EditObj.showDialog();
    }
    this.divEdit = QxUsers_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (QxUsers_Edit.times4TestShowDialog < 2) {
        QxUsers_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_QxUsers(strOp);
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
      QxUsers_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitQxUsers = '确认添加';
      this.btnCancelQxUsers = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitQxUsers = '确认修改';
      this.btnCancelQxUsers = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (QxUsers_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (QxUsers_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = QxUsers_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (QxUsers_Edit.times4TestShowDialog < 2) {
        QxUsers_Edit.times4TestShowDialog++;
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
      QxUsers_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_QxUsers(this.opType);
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
    await this.SetDdl_UserStateIdInDiv(); //编辑区域

    await this.SetDdl_IdXzCollegeInDiv(); //编辑区域

    await this.SetDdl_IdGradeBaseInDiv(); //编辑区域

    await this.SetDdl_IdSchoolInDiv(); //编辑区域

    await this.SetDdl_DepartmentIdInDiv(); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_QxUsers(this.opType);
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
   * 设置绑定下拉框，针对字段:[UserStateId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_UserStateIdInDiv() {
    await QxUserState_BindDdl_UserStateIdInDivCache(this.divEdit, 'ddlUserStateId'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdXzCollege]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdXzCollegeInDiv() {
    await XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache(
      this.divEdit,
      'ddlIdXzCollege',
      clsSysPara4WebApi.spIdSchool,
    ); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdGradeBase]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdGradeBaseInDiv() {
    await XzGradeBase_BindDdl_IdGradeBaseInDivCache(this.divEdit, 'ddlIdGradeBase'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdSchool]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdSchoolInDiv() {
    await XzSchool_BindDdl_id_SchoolInDivCache(this.divEdit, 'ddlIdSchool'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[DepartmentId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_DepartmentIdInDiv() {
    await QxDepartmentInfo_BindDdl_DepartmentIdInDivCache(this.divEdit, 'ddlDepartmentId'); //
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
      const bolIsSuccess = await this.ShowDialog_QxUsers(this.opType);
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
  public async btnUpdateRecord_Click(strUserId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(strUserId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_QxUsers(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      const update = await this.UpdateRecord(strUserId);
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
    const strCommandText: string = this.btnSubmitQxUsers;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitQxUsers = '确认添加';
          this.btnCancelQxUsers = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (QxUsers_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_QxUsers();
              this.iShowList.BindGv(clsQxUsersEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (QxUsers_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                QxUsers_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGv(clsQxUsersEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In QxUsers_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (QxUsers_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              QxUsers_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGv(clsQxUsersEN._CurrTabName, this.keyId);
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
    $('#txtUserId').attr('ReadOnly', bolReadonly.toString());
  }

  /**
   * 清除用户自定义控件中,所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    this.userId = '';
    this.userName = '';
    this.password = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlUserStateId');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdXzCollege');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdGradeBase');
    this.phoneNumber = '';
    this.email = '';
    this.effitiveBeginDate = '';
    this.effitiveEndDate = '';
    this.stuTeacherId = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdSchool');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlDepartmentId');
    this.memo = '';
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucQxUsersB1.userId = QxUsersGetMaxStrId_S();
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    this.SetKeyReadOnly(false);
    this.Clear();

    //this.userId = await QxUsers_GetMaxStrIdAsync();
  }

  /** 函1数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjQxUsersEN">数据传输的目的类对象</param>
   **/
  public async PutDataToQxUsersClass(pobjQxUsersEN: clsQxUsersEN) {
    pobjQxUsersEN.SetUserId(this.userId); // 用户ID
    pobjQxUsersEN.SetUserName(this.userName); // 用户名
    pobjQxUsersEN.SetPassword(this.password); // 口令
    pobjQxUsersEN.SetUserStateId(this.userStateId); // 用户状态
    pobjQxUsersEN.SetIdXzCollege(this.idXzCollege); // 学院
    pobjQxUsersEN.SetIdGradeBase(this.idGradeBase); // 年级
    pobjQxUsersEN.SetPhoneNumber(this.phoneNumber); // 电话
    pobjQxUsersEN.SetEmail(this.email); // 电子邮箱
    pobjQxUsersEN.SetEffitiveBeginDate(this.effitiveBeginDate); // 有效开始
    pobjQxUsersEN.SetEffitiveEndDate(this.effitiveEndDate); // 有效结束
    pobjQxUsersEN.SetStuTeacherId(this.stuTeacherId); // 学工号
    pobjQxUsersEN.SetIdSchool(this.idSchool); // 学校
    pobjQxUsersEN.SetDepartmentId(this.departmentId); // 部门
    pobjQxUsersEN.SetMemo(this.memo); // 备注
    pobjQxUsersEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjQxUsersEN.SetUpdUser(userStore.getUserId); // 修改人
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objQxUsersEN = new clsQxUsersEN();
    try {
      await this.PutDataToQxUsersClass(objQxUsersEN);
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
      QxUsers_CheckPropertyNew(objQxUsersEN);
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
      let returnBool = false;
      const bolIsExist = await QxUsers_IsExistAsync(objQxUsersEN.userId);
      if (bolIsExist == true) {
        const strMsg = Format('添加记录时,关键字：{0}已经存在!', objQxUsersEN.userId);
        console.error(strMsg);
        alert(strMsg);
        return false; //一定要有一个返回值,否则会出错!
      }
      returnBool = await QxUsers_AddNewRecordAsync(objQxUsersEN);
      if (returnBool == true) {
        //QxUsers_ReFreshCache();
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

  /** 添加新记录,由后台自动获取最大值的关键字。保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   **/
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const strThisFuncName = this.AddNewRecordWithMaxIdSave.name;
    const objQxUsersEN = new clsQxUsersEN();
    try {
      await this.PutDataToQxUsersClass(objQxUsersEN);
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
      QxUsers_CheckPropertyNew(objQxUsersEN);
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
      const responseKeyId = await QxUsers_AddNewRecordWithMaxIdAsync(objQxUsersEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //QxUsers_ReFreshCache();
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
   * @param strUserId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(strUserId: string) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objQxUsersEN = new clsQxUsersEN();
    try {
      const returnBool = await QxUsers_IsExistAsync(strUserId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strUserId);
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
      const objQxUsersENConst = await QxUsers_GetObjByUserIdAsync(strUserId);
      if (objQxUsersENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objQxUsersEN = objQxUsersENConst;
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
    this.GetDataFromQxUsersClass(objQxUsersEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjQxUsersEN">表实体类对象</param>
   **/
  public async GetDataFromQxUsersClass(pobjQxUsersEN: clsQxUsersEN) {
    this.userId = pobjQxUsersEN.userId; // 用户ID
    this.userName = pobjQxUsersEN.userName; // 用户名
    this.password = pobjQxUsersEN.password; // 口令
    this.userStateId = pobjQxUsersEN.userStateId; // 用户状态
    this.idXzCollege = pobjQxUsersEN.idXzCollege; // 学院
    this.idGradeBase = pobjQxUsersEN.idGradeBase; // 年级
    this.phoneNumber = pobjQxUsersEN.phoneNumber; // 电话
    this.email = pobjQxUsersEN.email; // 电子邮箱
    this.effitiveBeginDate = pobjQxUsersEN.effitiveBeginDate; // 有效开始
    this.effitiveEndDate = pobjQxUsersEN.effitiveEndDate; // 有效结束
    this.stuTeacherId = pobjQxUsersEN.stuTeacherId; // 学工号
    this.idSchool = pobjQxUsersEN.idSchool; // 学校
    this.departmentId = pobjQxUsersEN.departmentId; // 部门
    this.memo = pobjQxUsersEN.memo; // 备注
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strUserId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strUserId;
    try {
      const objQxUsersEN = await QxUsers_GetObjByUserIdAsync(strUserId);
      if (objQxUsersEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromQxUsersClass(objQxUsersEN);
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
    const objQxUsersEN = new clsQxUsersEN();
    objQxUsersEN.SetUserId(this.keyId);
    await this.PutDataToQxUsersClass(objQxUsersEN);
    objQxUsersEN.sfUpdFldSetStr = objQxUsersEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objQxUsersEN.userId == '' || objQxUsersEN.userId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      QxUsers_CheckProperty4Update(objQxUsersEN);
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
      const returnBool = await QxUsers_UpdateRecordAsync(objQxUsersEN);
      if (returnBool == true) {
        //QxUsers_ReFreshCache();
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
  public set btnCancelQxUsers(value: string) {
    QxUsers_Edit.EditObj.SetButtonText('btnCancelQxUsers', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitQxUsers(): string {
    const strValue = QxUsers_Edit.EditObj.GetButtonText('btnSubmitQxUsers');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitQxUsers(value: string) {
    QxUsers_Edit.EditObj.SetButtonText('btnSubmitQxUsers', value);
  }
  /**
   * 部门Id (Used In Clear())
   **/
  public set departmentId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlDepartmentId', value);
  }
  /**
   * 部门Id (Used In PutDataToClass())
   **/
  public get departmentId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlDepartmentId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 有效开始日期 (Used In Clear())
   **/
  public set effitiveBeginDate(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtEffitiveBeginDate', value);
  }
  /**
   * 有效开始日期 (Used In PutDataToClass())
   **/
  public get effitiveBeginDate(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtEffitiveBeginDate');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 有效结束日期 (Used In Clear())
   **/
  public set effitiveEndDate(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtEffitiveEndDate', value);
  }
  /**
   * 有效结束日期 (Used In PutDataToClass())
   **/
  public get effitiveEndDate(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtEffitiveEndDate');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 电子邮箱 (Used In Clear())
   **/
  public set email(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtEmail', value);
  }
  /**
   * 电子邮箱 (Used In PutDataToClass())
   **/
  public get email(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtEmail');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 年级流水号 (Used In Clear())
   **/
  public set idGradeBase(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlIdGradeBase', value);
  }
  /**
   * 年级流水号 (Used In PutDataToClass())
   **/
  public get idGradeBase(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlIdGradeBase');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 学校流水号 (Used In Clear())
   **/
  public set idSchool(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlIdSchool', value);
  }
  /**
   * 学校流水号 (Used In PutDataToClass())
   **/
  public get idSchool(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlIdSchool');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 学院流水号 (Used In Clear())
   **/
  public set idXzCollege(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlIdXzCollege', value);
  }
  /**
   * 学院流水号 (Used In PutDataToClass())
   **/
  public get idXzCollege(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlIdXzCollege');
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
   * 口令 (Used In Clear())
   **/
  public set password(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPassword', value);
  }
  /**
   * 口令 (Used In PutDataToClass())
   **/
  public get password(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPassword');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 电话 (Used In Clear())
   **/
  public set phoneNumber(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPhoneNumber', value);
  }
  /**
   * 电话 (Used In PutDataToClass())
   **/
  public get phoneNumber(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPhoneNumber');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 学工号 (Used In Clear())
   **/
  public set stuTeacherId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtStuTeacherId', value);
  }
  /**
   * 学工号 (Used In PutDataToClass())
   **/
  public get stuTeacherId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtStuTeacherId');
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
   * 修改人 (Used In PutDataToClass())
   **/
  public get updUser(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtUpdUser');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 用户ID (Used In Clear())
   **/
  public set userId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtUserId', value);
  }
  /**
   * 用户ID (Used In PutDataToClass())
   **/
  public get userId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtUserId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 用户名 (Used In Clear())
   **/
  public set userName(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtUserName', value);
  }
  /**
   * 用户名 (Used In PutDataToClass())
   **/
  public get userName(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtUserName');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 用户状态Id (Used In Clear())
   **/
  public set userStateId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlUserStateId', value);
  }
  /**
   * 用户状态Id (Used In PutDataToClass())
   **/
  public get userStateId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlUserStateId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
}
