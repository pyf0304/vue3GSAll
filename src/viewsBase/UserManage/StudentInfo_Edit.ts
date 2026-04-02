/**
 * 类名:StudentInfo_Edit(界面:StudentInfoCRUD)
 * 表名:StudentInfo(01120131)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 12:00:38
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS)
 * 编程语言:TypeScript
 **/
import $ from 'jquery';
import { XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { XzMajor_BindDdl_IdXzMajorInDivCache } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { XzGradeBase_BindDdl_IdGradeBaseInDivCache } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { XzGrade_BindDdl_IdGradeInDivCache } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
import { RsStuType_BindDdl_id_StuTypeInDivCache } from '@/ts/L3ForWApi/EPortfolio/clsRsStuTypeWApi';
import { XzAdminCls_BindDdl_id_AdminClsInDivCache } from '@/ts/L3ForWApi/PeopleManage/clsXzAdminClsWApi';
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
  StudentInfo_GetMaxStrIdAsync,
  StudentInfo_CheckPropertyNew,
  StudentInfo_AddNewRecordWithMaxIdAsync,
  StudentInfo_ReFreshCache,
  StudentInfo_GetUniCondStr,
  StudentInfo_IsExistRecordAsync,
  StudentInfo_GetUniCondStr4Update,
  StudentInfo_IsExistAsync,
  StudentInfo_GetObjByIdStudentInfoAsync,
  StudentInfo_CheckProperty4Update,
  StudentInfo_UpdateRecordAsync,
} from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { userStore } from '@/store/modulesShare/user';
import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
/** StudentInfo_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class StudentInfo_Edit {
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
  public static objPageEdit: StudentInfo_Edit;
  public static objPageEdit2: StudentInfo_Edit;
  public static objPageEdit3: StudentInfo_Edit;

  public static IdXzCollegeStatic = ''; //7、在查询区定义下拉框条件变量1
  public static UserTypeStatic = ''; //7、在查询区定义下拉框条件变量1
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
    if (StudentInfo_Edit.SetPageEdit(this, 1) == true) return;
    if (StudentInfo_Edit.SetPageEdit(this, 2) == true) return;
    if (StudentInfo_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (StudentInfo_Edit.objPageEdit == null) {
          StudentInfo_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = StudentInfo_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            StudentInfo_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (StudentInfo_Edit.objPageEdit2 == null) {
          StudentInfo_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = StudentInfo_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            StudentInfo_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (StudentInfo_Edit.objPageEdit3 == null) {
          StudentInfo_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = StudentInfo_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            StudentInfo_Edit.objPageEdit3 = objDataLst;
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
    if (StudentInfo_Edit.objPageEdit != null) {
      const strClassNameOld = StudentInfo_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return StudentInfo_Edit.objPageEdit;
    }
    if (StudentInfo_Edit.objPageEdit2 != null) {
      const strClassNameOld = StudentInfo_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return StudentInfo_Edit.objPageEdit2;
    }
    if (StudentInfo_Edit.objPageEdit3 != null) {
      const strClassNameOld = StudentInfo_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return StudentInfo_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_StudentInfo() {
    if (StudentInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      StudentInfo_Edit.EditObj.hideDialog();
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
  public async ShowDialog_StudentInfo(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_StudentInfo.name;
    if (StudentInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (StudentInfo_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await StudentInfo_Edit.EditObj.showDialog();
    }
    this.divEdit = StudentInfo_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (StudentInfo_Edit.times4TestShowDialog < 2) {
        StudentInfo_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_StudentInfo(strOp);
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
      StudentInfo_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitStudentInfo = '确认添加';
      this.btnCancelStudentInfo = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitStudentInfo = '确认修改';
      this.btnCancelStudentInfo = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (StudentInfo_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (StudentInfo_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = StudentInfo_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (StudentInfo_Edit.times4TestShowDialog < 2) {
        StudentInfo_Edit.times4TestShowDialog++;
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
      StudentInfo_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_StudentInfo(this.opType);
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
    await this.SetDdl_IdXzCollegeInDiv(); //编辑区域

    await this.SetDdl_IdXzMajorInDiv(); //编辑区域

    await this.SetDdl_IdGradeBaseInDiv(); //编辑区域

    await this.SetDdl_IdGradeInDiv(); //编辑区域

    await this.SetDdl_IdStuTypeInDiv(); //编辑区域

    await this.SetDdl_IdAdminClsInDiv(); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_StudentInfo(this.opType);
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
   * 设置绑定下拉框，针对字段:[IdXzMajor]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdXzMajorInDiv() {
    await XzMajor_BindDdl_IdXzMajorInDivCache(this.divEdit, 'ddlIdXzMajor'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdGradeBase]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdGradeBaseInDiv() {
    await XzGradeBase_BindDdl_IdGradeBaseInDivCache(this.divEdit, 'ddlIdGradeBase'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdGrade]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdGradeInDiv() {
    await XzGrade_BindDdl_IdGradeInDivCache(this.divEdit, 'ddlIdGrade'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdStuType]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdStuTypeInDiv() {
    await RsStuType_BindDdl_id_StuTypeInDivCache(this.divEdit, 'ddlIdStuType'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdAdminCls]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdAdminClsInDiv() {
    await XzAdminCls_BindDdl_id_AdminClsInDivCache(this.divEdit, 'ddlIdAdminCls'); //
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
      const bolIsSuccess = await this.ShowDialog_StudentInfo(this.opType);
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
      const bolIsSuccess = await this.ShowDialog_StudentInfo(this.opType);
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
    const strCommandText: string = this.btnSubmitStudentInfo;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitStudentInfo = '确认添加';
          this.btnCancelStudentInfo = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (StudentInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_StudentInfo();
              this.iShowList.BindGvCache(clsStudentInfoEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (StudentInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                StudentInfo_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGvCache(clsStudentInfoEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In StudentInfo_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (StudentInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              StudentInfo_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGvCache(clsStudentInfoEN._CurrTabName, this.keyId);
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
    $('#txtIdStudentInfo').attr('ReadOnly', bolReadonly.toString());
  }

  /**
   * 清除用户自定义控件中,所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    this.idStudentInfo = '';
    this.stuId = '';
    this.stuName = '';
    this.idSex = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdXzCollege');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdXzMajor');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdGradeBase');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdGrade');
    this.phoneNumber = '';
    this.homePhone = '';
    this.idPolitics = '';
    this.idEthnic = '';
    this.idUniZone = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdStuType');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdAdminCls');
    this.birthday = '';
    this.nativePlace = '';
    this.duty = '';
    this.idCardNo = '';
    this.stuCardNo = '';
    this.liveAddress = '';
    this.idCardNo2 = '';
    this.cardNo = '';
    this.isGpUser = false;
    this.isLeaved = false;
    this.userId = '';
    this.enrollmentDate = '';
    this.email = '';
    this.memo = '';
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucStudentInfoB1.idStudentInfo = StudentInfoGetMaxStrId_S();
    try {
      const returnString = await StudentInfo_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表StudentInfo的最大关键字为空,不成功,请检查!');
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
    this.Clear();

    //this.idStudentInfo = await StudentInfo_GetMaxStrIdAsync();
    try {
      const returnString = await StudentInfo_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表StudentInfo的最大关键字为空,不成功,请检查!');
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
   * @param pobjStudentInfoEN">数据传输的目的类对象</param>
   **/
  public async PutDataToStudentInfoClass(pobjStudentInfoEN: clsStudentInfoEN) {
    pobjStudentInfoEN.SetIdStudentInfo(this.idStudentInfo); // 学生流水号
    pobjStudentInfoEN.SetStuId(this.stuId); // 学号
    pobjStudentInfoEN.SetStuName(this.stuName); // 姓名
    pobjStudentInfoEN.SetIdSex(this.idSex); // 性别流水号
    pobjStudentInfoEN.SetIdXzCollege(this.idXzCollege); // 学院
    pobjStudentInfoEN.SetIdXzMajor(this.idXzMajor); // 专业
    pobjStudentInfoEN.SetIdGradeBase(this.idGradeBase); // 入学年级
    pobjStudentInfoEN.SetIdGrade(this.idGrade); // 中小学年级
    pobjStudentInfoEN.SetPhoneNumber(this.phoneNumber); // 手机
    pobjStudentInfoEN.SetHomePhone(this.homePhone); // 住宅电话
    pobjStudentInfoEN.SetIdPolitics(this.idPolitics); // 政治面貌
    pobjStudentInfoEN.SetIdEthnic(this.idEthnic); // 民族
    pobjStudentInfoEN.SetIdUniZone(this.idUniZone); // 校区
    pobjStudentInfoEN.SetIdStuType(this.idStuType); // 学生类别
    pobjStudentInfoEN.SetIdAdminCls(this.idAdminCls); // 行政班
    pobjStudentInfoEN.SetBirthday(this.birthday); // 出生日期
    pobjStudentInfoEN.SetNativePlace(this.nativePlace); // 籍贯
    pobjStudentInfoEN.SetDuty(this.duty); // 职位
    pobjStudentInfoEN.SetIdCardNo(this.idCardNo); // 身份证号
    pobjStudentInfoEN.SetStuCardNo(this.stuCardNo); // 学生证号
    pobjStudentInfoEN.SetLiveAddress(this.liveAddress); // 居住地址
    pobjStudentInfoEN.SetIdCardNo2(this.idCardNo2); // 内卡号
    pobjStudentInfoEN.SetCardNo(this.cardNo); // 卡号
    pobjStudentInfoEN.SetIsGpUser(this.isGpUser); // 是否Gp用户
    pobjStudentInfoEN.SetIsLeaved(this.isLeaved); // IsLeaved
    pobjStudentInfoEN.SetUserId(this.userId); // 用户ID
    pobjStudentInfoEN.SetEnrollmentDate(this.enrollmentDate); // 入校日期
    pobjStudentInfoEN.SetEmail(this.email); // 电子邮箱
    pobjStudentInfoEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjStudentInfoEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjStudentInfoEN.SetMemo(this.memo); // 备注
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objStudentInfoEN = new clsStudentInfoEN();
    try {
      await this.PutDataToStudentInfoClass(objStudentInfoEN);
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
      StudentInfo_CheckPropertyNew(objStudentInfoEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objStudentInfoEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      const returnKeyId = await StudentInfo_AddNewRecordWithMaxIdAsync(objStudentInfoEN);
      if (IsNullOrEmpty(returnKeyId) == false) {
        this.keyId = returnKeyId;
        returnBool = true;
      }
      if (returnBool == true) {
        StudentInfo_ReFreshCache();
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
  public async CheckUniCond4Add(objStudentInfoEN: clsStudentInfoEN): Promise<boolean> {
    const strUniquenessCondition = StudentInfo_GetUniCondStr(objStudentInfoEN);
    const bolIsExistCondition = await StudentInfo_IsExistRecordAsync(strUniquenessCondition);
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
  public async CheckUniCond4Update(objStudentInfoEN: clsStudentInfoEN): Promise<boolean> {
    const strUniquenessCondition = StudentInfo_GetUniCondStr4Update(objStudentInfoEN);
    const bolIsExistCondition = await StudentInfo_IsExistRecordAsync(strUniquenessCondition);
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
    const objStudentInfoEN = new clsStudentInfoEN();
    try {
      await this.PutDataToStudentInfoClass(objStudentInfoEN);
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
      StudentInfo_CheckPropertyNew(objStudentInfoEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objStudentInfoEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const responseKeyId = await StudentInfo_AddNewRecordWithMaxIdAsync(objStudentInfoEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        StudentInfo_ReFreshCache();
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
   * @param strIdStudentInfo: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(strIdStudentInfo: string) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objStudentInfoEN = new clsStudentInfoEN();
    try {
      const returnBool = await StudentInfo_IsExistAsync(strIdStudentInfo);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strIdStudentInfo);
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
      const objStudentInfoENConst = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStudentInfo);
      if (objStudentInfoENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objStudentInfoEN = objStudentInfoENConst;
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
    this.GetDataFromStudentInfoClass(objStudentInfoEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjStudentInfoEN">表实体类对象</param>
   **/
  public async GetDataFromStudentInfoClass(pobjStudentInfoEN: clsStudentInfoEN) {
    this.idStudentInfo = pobjStudentInfoEN.idStudentInfo; // 学生流水号
    this.stuId = pobjStudentInfoEN.stuId; // 学号
    this.stuName = pobjStudentInfoEN.stuName; // 姓名
    this.idSex = pobjStudentInfoEN.idSex; // 性别流水号
    this.idXzCollege = pobjStudentInfoEN.idXzCollege; // 学院
    this.idXzMajor = pobjStudentInfoEN.idXzMajor; // 专业
    this.idGradeBase = pobjStudentInfoEN.idGradeBase; // 入学年级
    this.idGrade = pobjStudentInfoEN.idGrade; // 中小学年级
    this.phoneNumber = pobjStudentInfoEN.phoneNumber; // 手机
    this.homePhone = pobjStudentInfoEN.homePhone; // 住宅电话
    this.idPolitics = pobjStudentInfoEN.idPolitics; // 政治面貌
    this.idEthnic = pobjStudentInfoEN.idEthnic; // 民族
    this.idUniZone = pobjStudentInfoEN.idUniZone; // 校区
    this.idStuType = pobjStudentInfoEN.idStuType; // 学生类别
    this.idAdminCls = pobjStudentInfoEN.idAdminCls; // 行政班
    this.birthday = pobjStudentInfoEN.birthday; // 出生日期
    this.nativePlace = pobjStudentInfoEN.nativePlace; // 籍贯
    this.duty = pobjStudentInfoEN.duty; // 职位
    this.idCardNo = pobjStudentInfoEN.idCardNo; // 身份证号
    this.stuCardNo = pobjStudentInfoEN.stuCardNo; // 学生证号
    this.liveAddress = pobjStudentInfoEN.liveAddress; // 居住地址
    this.idCardNo2 = pobjStudentInfoEN.idCardNo2; // 内卡号
    this.cardNo = pobjStudentInfoEN.cardNo; // 卡号
    this.isGpUser = pobjStudentInfoEN.isGpUser; // 是否Gp用户
    this.isLeaved = pobjStudentInfoEN.isLeaved; // IsLeaved
    this.userId = pobjStudentInfoEN.userId; // 用户ID
    this.enrollmentDate = pobjStudentInfoEN.enrollmentDate; // 入校日期
    this.email = pobjStudentInfoEN.email; // 电子邮箱
    this.memo = pobjStudentInfoEN.memo; // 备注
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strIdStudentInfo: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strIdStudentInfo;
    try {
      const objStudentInfoEN = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStudentInfo);
      if (objStudentInfoEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromStudentInfoClass(objStudentInfoEN);
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
    const objStudentInfoEN = new clsStudentInfoEN();
    objStudentInfoEN.SetIdStudentInfo(this.keyId);
    await this.PutDataToStudentInfoClass(objStudentInfoEN);
    objStudentInfoEN.sfUpdFldSetStr = objStudentInfoEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objStudentInfoEN.idStudentInfo == '' || objStudentInfoEN.idStudentInfo == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      StudentInfo_CheckProperty4Update(objStudentInfoEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objStudentInfoEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await StudentInfo_UpdateRecordAsync(objStudentInfoEN);
      if (returnBool == true) {
        StudentInfo_ReFreshCache();
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
   * 出生日期 (Used In Clear())
   **/
  public set birthday(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtBirthday', value);
  }
  /**
   * 出生日期 (Used In PutDataToClass())
   **/
  public get birthday(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtBirthday');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   **/
  public set btnCancelStudentInfo(value: string) {
    StudentInfo_Edit.EditObj.SetButtonText('btnCancelStudentInfo', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitStudentInfo(): string {
    const strValue = StudentInfo_Edit.EditObj.GetButtonText('btnSubmitStudentInfo');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitStudentInfo(value: string) {
    StudentInfo_Edit.EditObj.SetButtonText('btnSubmitStudentInfo', value);
  }
  /**
   * 卡号 (Used In Clear())
   **/
  public set cardNo(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtCardNo', value);
  }
  /**
   * 卡号 (Used In PutDataToClass())
   **/
  public get cardNo(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtCardNo');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 职位 (Used In Clear())
   **/
  public set duty(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtDuty', value);
  }
  /**
   * 职位 (Used In PutDataToClass())
   **/
  public get duty(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtDuty');
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
   * 入校日期 (Used In Clear())
   **/
  public set enrollmentDate(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtEnrollmentDate', value);
  }
  /**
   * 入校日期 (Used In PutDataToClass())
   **/
  public get enrollmentDate(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtEnrollmentDate');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 住宅电话 (Used In Clear())
   **/
  public set homePhone(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtHomePhone', value);
  }
  /**
   * 住宅电话 (Used In PutDataToClass())
   **/
  public get homePhone(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtHomePhone');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 行政班流水号 (Used In Clear())
   **/
  public set idAdminCls(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlIdAdminCls', value);
  }
  /**
   * 行政班流水号 (Used In PutDataToClass())
   **/
  public get idAdminCls(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlIdAdminCls');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 身份证号 (Used In Clear())
   **/
  public set idCardNo(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtIdCardNo', value);
  }
  /**
   * 身份证号 (Used In PutDataToClass())
   **/
  public get idCardNo(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtIdCardNo');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 内卡号 (Used In Clear())
   **/
  public set idCardNo2(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtIdCardNo2', value);
  }
  /**
   * 内卡号 (Used In PutDataToClass())
   **/
  public get idCardNo2(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtIdCardNo2');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 民族流水号 (Used In Clear())
   **/
  public set idEthnic(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtIdEthnic', value);
  }
  /**
   * 民族流水号 (Used In PutDataToClass())
   **/
  public get idEthnic(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtIdEthnic');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 年级流水号 (Used In Clear())
   **/
  public set idGrade(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlIdGrade', value);
  }
  /**
   * 年级流水号 (Used In PutDataToClass())
   **/
  public get idGrade(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlIdGrade');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
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
   * 政治面貌流水号 (Used In Clear())
   **/
  public set idPolitics(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtIdPolitics', value);
  }
  /**
   * 政治面貌流水号 (Used In PutDataToClass())
   **/
  public get idPolitics(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtIdPolitics');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 性别流水号 (Used In Clear())
   **/
  public set idSex(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtIdSex', value);
  }
  /**
   * 性别流水号 (Used In PutDataToClass())
   **/
  public get idSex(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtIdSex');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 学生流水号 (Used In Clear())
   **/
  public set idStudentInfo(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtIdStudentInfo', value);
  }
  /**
   * 学生流水号 (Used In PutDataToClass())
   **/
  public get idStudentInfo(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtIdStudentInfo');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 学生类别流水号 (Used In Clear())
   **/
  public set idStuType(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlIdStuType', value);
  }
  /**
   * 学生类别流水号 (Used In PutDataToClass())
   **/
  public get idStuType(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlIdStuType');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 校区流水号 (Used In Clear())
   **/
  public set idUniZone(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtIdUniZone', value);
  }
  /**
   * 校区流水号 (Used In PutDataToClass())
   **/
  public get idUniZone(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtIdUniZone');
    if (strValue == undefined) return '';
    else return strValue.toString();
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
   * 专业流水号 (Used In Clear())
   **/
  public set idXzMajor(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlIdXzMajor', value);
  }
  /**
   * 专业流水号 (Used In PutDataToClass())
   **/
  public get idXzMajor(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlIdXzMajor');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 是否Gp用户 (Used In Clear())
   **/
  public set isGpUser(value: boolean) {
    SetCheckBoxValueByIdInDivObj(this.divEdit, 'chkIsGpUser', value);
  }
  /**
   * 是否Gp用户 (Used In PutDataToClass())
   **/
  public get isGpUser(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(this.divEdit, 'chkIsGpUser');
    return bolValue;
  }
  /**
   * 是否离开 (Used In Clear())
   **/
  public set isLeaved(value: boolean) {
    SetCheckBoxValueByIdInDivObj(this.divEdit, 'chkIsLeaved', value);
  }
  /**
   * 是否离开 (Used In PutDataToClass())
   **/
  public get isLeaved(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(this.divEdit, 'chkIsLeaved');
    return bolValue;
  }
  /**
   * 居住地址 (Used In Clear())
   **/
  public set liveAddress(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtLiveAddress', value);
  }
  /**
   * 居住地址 (Used In PutDataToClass())
   **/
  public get liveAddress(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtLiveAddress');
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
   * 籍贯 (Used In Clear())
   **/
  public set nativePlace(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtNativePlace', value);
  }
  /**
   * 籍贯 (Used In PutDataToClass())
   **/
  public get nativePlace(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtNativePlace');
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
   * 学生证号 (Used In Clear())
   **/
  public set stuCardNo(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtStuCardNo', value);
  }
  /**
   * 学生证号 (Used In PutDataToClass())
   **/
  public get stuCardNo(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtStuCardNo');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 学号 (Used In Clear())
   **/
  public set stuId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtStuId', value);
  }
  /**
   * 学号 (Used In PutDataToClass())
   **/
  public get stuId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtStuId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 姓名 (Used In Clear())
   **/
  public set stuName(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtStuName', value);
  }
  /**
   * 姓名 (Used In PutDataToClass())
   **/
  public get stuName(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtStuName');
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
}
