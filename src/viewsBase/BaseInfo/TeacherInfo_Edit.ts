/**
 * 类名:TeacherInfo_Edit(界面:TeacherInfoCRUD)
 * 表名:TeacherInfo(01120093)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 12:00:36
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
import { Sex_BindDdl_id_SexInDivCache } from '@/ts/L3ForWApi/SysPara/clsSexWApi';
import { RsEthnic_BindDdl_IdEthnicInDivCache } from '@/ts/L3ForWApi/SysPara/clsRsEthnicWApi';
import { XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { RsPolitics_BindDdl_IdPoliticsInDivCache } from '@/ts/L3ForWApi/SysPara/clsRsPoliticsWApi';
import { RsAdminGrade_BindDdl_IdAdminGradeInDivCache } from '@/ts/L3ForWApi/SysPara/clsRsAdminGradeWApi';
import { RsProfGrade_BindDdl_IdProfGradeInDivCache } from '@/ts/L3ForWApi/SysPara/clsRsProfGradeWApi';
import { RsStaffType_BindDdl_IdStaffTypeInDivCache } from '@/ts/L3ForWApi/SysPara/clsRsStaffTypeWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  ClearSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetSelectValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  TeacherInfo_GetMaxStrIdAsync,
  TeacherInfo_CheckPropertyNew,
  TeacherInfo_AddNewRecordWithMaxIdAsync,
  TeacherInfo_GetUniCondStr,
  TeacherInfo_IsExistRecordAsync,
  TeacherInfo_GetUniCondStr4Update,
  TeacherInfo_IsExistAsync,
  TeacherInfo_GetObjByIdTeacherAsync,
  TeacherInfo_CheckProperty4Update,
  TeacherInfo_UpdateRecordAsync,
} from '@/ts/L3ForWApi/BaseInfo/clsTeacherInfoWApi';
import { userStore } from '@/store/modulesShare/user';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { clsTeacherInfoEN } from '@/ts/L0Entity/BaseInfo/clsTeacherInfoEN';
import { teacherInfoStore } from '@/store/modulesShare/teacherInfo';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
/** TeacherInfo_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class TeacherInfo_Edit {
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
  public static objPageEdit: TeacherInfo_Edit;
  public static objPageEdit2: TeacherInfo_Edit;
  public static objPageEdit3: TeacherInfo_Edit;

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
    if (TeacherInfo_Edit.SetPageEdit(this, 1) == true) return;
    if (TeacherInfo_Edit.SetPageEdit(this, 2) == true) return;
    if (TeacherInfo_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (TeacherInfo_Edit.objPageEdit == null) {
          TeacherInfo_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = TeacherInfo_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            TeacherInfo_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (TeacherInfo_Edit.objPageEdit2 == null) {
          TeacherInfo_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = TeacherInfo_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            TeacherInfo_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (TeacherInfo_Edit.objPageEdit3 == null) {
          TeacherInfo_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = TeacherInfo_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            TeacherInfo_Edit.objPageEdit3 = objDataLst;
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
    if (TeacherInfo_Edit.objPageEdit != null) {
      const strClassNameOld = TeacherInfo_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return TeacherInfo_Edit.objPageEdit;
    }
    if (TeacherInfo_Edit.objPageEdit2 != null) {
      const strClassNameOld = TeacherInfo_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return TeacherInfo_Edit.objPageEdit2;
    }
    if (TeacherInfo_Edit.objPageEdit3 != null) {
      const strClassNameOld = TeacherInfo_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return TeacherInfo_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_TeacherInfo() {
    if (TeacherInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      TeacherInfo_Edit.EditObj.hideDialog();
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
  public async ShowDialog_TeacherInfo(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_TeacherInfo.name;
    if (TeacherInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (TeacherInfo_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await TeacherInfo_Edit.EditObj.showDialog();
    }
    this.divEdit = TeacherInfo_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (TeacherInfo_Edit.times4TestShowDialog < 2) {
        TeacherInfo_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_TeacherInfo(strOp);
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
      TeacherInfo_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitTeacherInfo = '确认添加';
      this.btnCancelTeacherInfo = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitTeacherInfo = '确认修改';
      this.btnCancelTeacherInfo = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (TeacherInfo_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (TeacherInfo_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = TeacherInfo_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (TeacherInfo_Edit.times4TestShowDialog < 2) {
        TeacherInfo_Edit.times4TestShowDialog++;
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
      TeacherInfo_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_TeacherInfo(this.opType);
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
    await this.SetDdl_IdSexInDiv(); //编辑区域

    await this.SetDdl_IdEthnicInDiv(); //编辑区域

    await this.SetDdl_IdXzCollegeInDiv(); //编辑区域

    await this.SetDdl_IdPoliticsInDiv(); //编辑区域

    await this.SetDdl_IdAdminGradeInDiv(); //编辑区域

    await this.SetDdl_IdProfGradeInDiv(); //编辑区域

    await this.SetDdl_IdStaffTypeInDiv(); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_TeacherInfo(this.opType);
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
   * 设置绑定下拉框，针对字段:[IdSex]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdSexInDiv() {
    await Sex_BindDdl_id_SexInDivCache(this.divEdit, 'ddlIdSex'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdEthnic]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdEthnicInDiv() {
    await RsEthnic_BindDdl_IdEthnicInDivCache(this.divEdit, 'ddlIdEthnic'); //
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
   * 设置绑定下拉框，针对字段:[IdPolitics]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdPoliticsInDiv() {
    await RsPolitics_BindDdl_IdPoliticsInDivCache(this.divEdit, 'ddlIdPolitics'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdAdminGrade]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdAdminGradeInDiv() {
    await RsAdminGrade_BindDdl_IdAdminGradeInDivCache(this.divEdit, 'ddlIdAdminGrade'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdProfGrade]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdProfGradeInDiv() {
    await RsProfGrade_BindDdl_IdProfGradeInDivCache(this.divEdit, 'ddlIdProfGrade'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdStaffType]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdStaffTypeInDiv() {
    await RsStaffType_BindDdl_IdStaffTypeInDivCache(this.divEdit, 'ddlIdStaffType'); //
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
      const bolIsSuccess = await this.ShowDialog_TeacherInfo(this.opType);
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
      const bolIsSuccess = await this.ShowDialog_TeacherInfo(this.opType);
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
    const strCommandText: string = this.btnSubmitTeacherInfo;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitTeacherInfo = '确认添加';
          this.btnCancelTeacherInfo = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (TeacherInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_TeacherInfo();
              this.iShowList.BindGvCache(clsTeacherInfoEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (TeacherInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                TeacherInfo_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGvCache(clsTeacherInfoEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In TeacherInfo_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (TeacherInfo_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              TeacherInfo_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGvCache(clsTeacherInfoEN._CurrTabName, this.keyId);
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
    $('#txtIdTeacher').attr('ReadOnly', bolReadonly.toString());
  }

  /**
   * 清除用户自定义控件中,所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    this.idTeacher = '';
    this.teacherId = '';
    this.teacherName = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdSex');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdEthnic');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdXzCollege');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdPolitics');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdAdminGrade');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdProfGrade');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdStaffType');
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucTeacherInfoB1.idTeacher = TeacherInfoGetMaxStrId_S();
    try {
      const returnString = await TeacherInfo_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表TeacherInfo的最大关键字为空,不成功,请检查!');
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

    //this.idTeacher = await TeacherInfo_GetMaxStrIdAsync();
    try {
      const returnString = await TeacherInfo_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表TeacherInfo的最大关键字为空,不成功,请检查!');
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
   * @param pobjTeacherInfoEN">数据传输的目的类对象</param>
   **/
  public async PutDataToTeacherInfoClass(pobjTeacherInfoEN: clsTeacherInfoEN) {
    pobjTeacherInfoEN.SetIdTeacher(this.idTeacher); // 教师流水号
    pobjTeacherInfoEN.SetTeacherId(this.teacherId); // 教师工号
    pobjTeacherInfoEN.SetTeacherName(this.teacherName); // 教师姓名
    pobjTeacherInfoEN.SetIdSex(this.idSex); // 性别
    pobjTeacherInfoEN.SetIdEthnic(this.idEthnic); // 民族
    pobjTeacherInfoEN.SetIdXzCollege(this.idXzCollege); // 学院
    pobjTeacherInfoEN.SetIdPolitics(this.idPolitics); // 政治面貌
    pobjTeacherInfoEN.SetIdAdminGrade(this.idAdminGrade); // 行政职务
    pobjTeacherInfoEN.SetIdProfGrade(this.idProfGrade); // 专业职称流水号
    pobjTeacherInfoEN.SetIdStaffType(this.idStaffType); // 职工类型
    pobjTeacherInfoEN.SetModifyUserId(userStore.getUserId); // 修改人
    pobjTeacherInfoEN.SetModifyDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objTeacherInfoEN = new clsTeacherInfoEN();
    try {
      await this.PutDataToTeacherInfoClass(objTeacherInfoEN);
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
      TeacherInfo_CheckPropertyNew(objTeacherInfoEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objTeacherInfoEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      const returnKeyId = await TeacherInfo_AddNewRecordWithMaxIdAsync(objTeacherInfoEN);
      if (IsNullOrEmpty(returnKeyId) == false) {
        this.keyId = returnKeyId;
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
  public async CheckUniCond4Add(objTeacherInfoEN: clsTeacherInfoEN): Promise<boolean> {
    const strUniquenessCondition = TeacherInfo_GetUniCondStr(objTeacherInfoEN);
    const bolIsExistCondition = await TeacherInfo_IsExistRecordAsync(strUniquenessCondition);
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
  public async CheckUniCond4Update(objTeacherInfoEN: clsTeacherInfoEN): Promise<boolean> {
    const strUniquenessCondition = TeacherInfo_GetUniCondStr4Update(objTeacherInfoEN);
    const bolIsExistCondition = await TeacherInfo_IsExistRecordAsync(strUniquenessCondition);
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
    const objTeacherInfoEN = new clsTeacherInfoEN();
    try {
      await this.PutDataToTeacherInfoClass(objTeacherInfoEN);
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
      TeacherInfo_CheckPropertyNew(objTeacherInfoEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objTeacherInfoEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const responseKeyId = await TeacherInfo_AddNewRecordWithMaxIdAsync(objTeacherInfoEN);
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
   * @param strIdTeacher: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(strIdTeacher: string) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objTeacherInfoEN = new clsTeacherInfoEN();
    try {
      const returnBool = await TeacherInfo_IsExistAsync(strIdTeacher);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strIdTeacher);
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
      const objTeacherInfoENConst = await TeacherInfo_GetObjByIdTeacherAsync(strIdTeacher);
      if (objTeacherInfoENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objTeacherInfoEN = objTeacherInfoENConst;
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
    this.GetDataFromTeacherInfoClass(objTeacherInfoEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjTeacherInfoEN">表实体类对象</param>
   **/
  public async GetDataFromTeacherInfoClass(pobjTeacherInfoEN: clsTeacherInfoEN) {
    this.idTeacher = pobjTeacherInfoEN.idTeacher; // 教师流水号
    this.teacherId = pobjTeacherInfoEN.teacherId; // 教师工号
    this.teacherName = pobjTeacherInfoEN.teacherName; // 教师姓名
    this.idSex = pobjTeacherInfoEN.idSex; // 性别
    this.idEthnic = pobjTeacherInfoEN.idEthnic; // 民族
    this.idXzCollege = pobjTeacherInfoEN.idXzCollege; // 学院
    this.idPolitics = pobjTeacherInfoEN.idPolitics; // 政治面貌
    this.idAdminGrade = pobjTeacherInfoEN.idAdminGrade; // 行政职务
    this.idProfGrade = pobjTeacherInfoEN.idProfGrade; // 专业职称流水号
    this.idStaffType = pobjTeacherInfoEN.idStaffType; // 职工类型
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strIdTeacher: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strIdTeacher;
    try {
      const objTeacherInfoEN = await TeacherInfo_GetObjByIdTeacherAsync(strIdTeacher);
      if (objTeacherInfoEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromTeacherInfoClass(objTeacherInfoEN);
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
    const objTeacherInfoEN = new clsTeacherInfoEN();
    objTeacherInfoEN.SetIdTeacher(this.keyId);
    await this.PutDataToTeacherInfoClass(objTeacherInfoEN);
    objTeacherInfoEN.sfUpdFldSetStr = objTeacherInfoEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objTeacherInfoEN.idTeacher == '' || objTeacherInfoEN.idTeacher == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      TeacherInfo_CheckProperty4Update(objTeacherInfoEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objTeacherInfoEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await TeacherInfo_UpdateRecordAsync(objTeacherInfoEN);
      if (returnBool == true) {
        await teacherInfoStore.delObj(objTeacherInfoEN.idTeacher);
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
  public set btnCancelTeacherInfo(value: string) {
    TeacherInfo_Edit.EditObj.SetButtonText('btnCancelTeacherInfo', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitTeacherInfo(): string {
    const strValue = TeacherInfo_Edit.EditObj.GetButtonText('btnSubmitTeacherInfo');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitTeacherInfo(value: string) {
    TeacherInfo_Edit.EditObj.SetButtonText('btnSubmitTeacherInfo', value);
  }
  /**
   * 行政职务流水号 (Used In Clear())
   **/
  public set idAdminGrade(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlIdAdminGrade', value);
  }
  /**
   * 行政职务流水号 (Used In PutDataToClass())
   **/
  public get idAdminGrade(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlIdAdminGrade');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 民族流水号 (Used In Clear())
   **/
  public set idEthnic(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlIdEthnic', value);
  }
  /**
   * 民族流水号 (Used In PutDataToClass())
   **/
  public get idEthnic(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlIdEthnic');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 政治面貌流水号 (Used In Clear())
   **/
  public set idPolitics(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlIdPolitics', value);
  }
  /**
   * 政治面貌流水号 (Used In PutDataToClass())
   **/
  public get idPolitics(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlIdPolitics');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 专业职称流水号 (Used In Clear())
   **/
  public set idProfGrade(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlIdProfGrade', value);
  }
  /**
   * 专业职称流水号 (Used In PutDataToClass())
   **/
  public get idProfGrade(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlIdProfGrade');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 性别流水号 (Used In Clear())
   **/
  public set idSex(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlIdSex', value);
  }
  /**
   * 性别流水号 (Used In PutDataToClass())
   **/
  public get idSex(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlIdSex');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 职工类型流水号 (Used In Clear())
   **/
  public set idStaffType(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlIdStaffType', value);
  }
  /**
   * 职工类型流水号 (Used In PutDataToClass())
   **/
  public get idStaffType(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlIdStaffType');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 教师流水号 (Used In Clear())
   **/
  public set idTeacher(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtIdTeacher', value);
  }
  /**
   * 教师流水号 (Used In PutDataToClass())
   **/
  public get idTeacher(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtIdTeacher');
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
   * 修改日期 (Used In PutDataToClass())
   **/
  public get modifyDate(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtModifyDate');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 修改人 (Used In PutDataToClass())
   **/
  public get modifyUserId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtModifyUserId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 教师工号 (Used In Clear())
   **/
  public set teacherId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtTeacherId', value);
  }
  /**
   * 教师工号 (Used In PutDataToClass())
   **/
  public get teacherId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtTeacherId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 教师姓名 (Used In Clear())
   **/
  public set teacherName(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtTeacherName', value);
  }
  /**
   * 教师姓名 (Used In PutDataToClass())
   **/
  public get teacherName(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtTeacherName');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
}
