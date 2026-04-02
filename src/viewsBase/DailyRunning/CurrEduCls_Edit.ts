/**
 * 类名:CurrEduCls_Edit(界面:CurrEduClsCRUD)
 * 表名:CurrEduCls(01120123)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/18 12:07:42
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:日常运行(DailyRunning)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS)
 * 编程语言:TypeScript
 **/
import $ from 'jquery';
import { vcc_Course_Sim_BindDdl_CourseIdInDivCache } from '@/ts/L3ForWApi/CourseManage/clsvcc_Course_SimWApi';
import { XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { XzGradeBase_BindDdl_IdGradeBaseInDivCache } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';
import { SchoolYear_BindDdl_SchoolYearInDivCache } from '@/ts/L3ForWApi/SysPara/clsSchoolYearWApi';
import { SchoolTerm_BindDdl_SchoolTermInDivCache } from '@/ts/L3ForWApi/SysPara/clsSchoolTermWApi';
import { UserType_BindDdl_UserTypeIdInDivCache } from '@/ts/L3ForWApi/UserManage/clsUserTypeWApi';
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
  CurrEduCls_GetMaxStrIdAsync,
  CurrEduCls_CheckPropertyNew,
  CurrEduCls_AddNewRecordWithMaxIdAsync,
  CurrEduCls_GetUniCondStr,
  CurrEduCls_IsExistRecordAsync,
  CurrEduCls_GetUniCondStr4Update,
  CurrEduCls_IsExistAsync,
  CurrEduCls_GetObjByIdCurrEduClsAsync,
  CurrEduCls_CheckProperty4Update,
  CurrEduCls_UpdateRecordAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { userStore } from '@/store/modulesShare/user';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import { currEduClsStore } from '@/store/modulesShare/currEduCls';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
/** CurrEduCls_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class CurrEduCls_Edit {
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
  public static objPageEdit: CurrEduCls_Edit;
  public static objPageEdit2: CurrEduCls_Edit;
  public static objPageEdit3: CurrEduCls_Edit;

  public static CourseIdCache = ''; //2、界面主表的缓存分类字段变量1
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
    if (CurrEduCls_Edit.SetPageEdit(this, 1) == true) return;
    if (CurrEduCls_Edit.SetPageEdit(this, 2) == true) return;
    if (CurrEduCls_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (CurrEduCls_Edit.objPageEdit == null) {
          CurrEduCls_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = CurrEduCls_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            CurrEduCls_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (CurrEduCls_Edit.objPageEdit2 == null) {
          CurrEduCls_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = CurrEduCls_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            CurrEduCls_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (CurrEduCls_Edit.objPageEdit3 == null) {
          CurrEduCls_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = CurrEduCls_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            CurrEduCls_Edit.objPageEdit3 = objDataLst;
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
    if (CurrEduCls_Edit.objPageEdit != null) {
      const strClassNameOld = CurrEduCls_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return CurrEduCls_Edit.objPageEdit;
    }
    if (CurrEduCls_Edit.objPageEdit2 != null) {
      const strClassNameOld = CurrEduCls_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return CurrEduCls_Edit.objPageEdit2;
    }
    if (CurrEduCls_Edit.objPageEdit3 != null) {
      const strClassNameOld = CurrEduCls_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return CurrEduCls_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_CurrEduCls() {
    if (CurrEduCls_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      CurrEduCls_Edit.EditObj.hideDialog();
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
  public async ShowDialog_CurrEduCls(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_CurrEduCls.name;
    if (CurrEduCls_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (CurrEduCls_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await CurrEduCls_Edit.EditObj.showDialog();
    }
    this.divEdit = CurrEduCls_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (CurrEduCls_Edit.times4TestShowDialog < 2) {
        CurrEduCls_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_CurrEduCls(strOp);
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
      CurrEduCls_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitCurrEduCls = '确认添加';
      this.btnCancelCurrEduCls = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitCurrEduCls = '确认修改';
      this.btnCancelCurrEduCls = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (CurrEduCls_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (CurrEduCls_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = CurrEduCls_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (CurrEduCls_Edit.times4TestShowDialog < 2) {
        CurrEduCls_Edit.times4TestShowDialog++;
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
      CurrEduCls_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_CurrEduCls(this.opType);
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
    await this.SetDdl_CourseIdInDiv(); //编辑区域

    await this.SetDdl_IdXzCollegeInDiv(); //编辑区域

    await this.SetDdl_IdGradeBaseInDiv(); //编辑区域

    await this.SetDdl_SchoolYearInDiv(); //编辑区域

    await this.SetDdl_SchoolTermInDiv(); //编辑区域

    await this.SetDdl_UserTypeInDiv(); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_CurrEduCls(this.opType);
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
   * 设置绑定下拉框，针对字段:[CourseId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_CourseIdInDiv() {
    await vcc_Course_Sim_BindDdl_CourseIdInDivCache(this.divEdit, 'ddlCourseId'); //
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
   * 设置绑定下拉框，针对字段:[SchoolYear]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_SchoolYearInDiv() {
    await SchoolYear_BindDdl_SchoolYearInDivCache(this.divEdit, 'ddlSchoolYear'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[SchoolTerm]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_SchoolTermInDiv() {
    await SchoolTerm_BindDdl_SchoolTermInDivCache(this.divEdit, 'ddlSchoolTerm'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[UserType]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_UserTypeInDiv() {
    await UserType_BindDdl_UserTypeIdInDivCache(this.divEdit, 'ddlUserType'); //
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
      const bolIsSuccess = await this.ShowDialog_CurrEduCls(this.opType);
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
      const bolIsSuccess = await this.ShowDialog_CurrEduCls(this.opType);
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
    const strCommandText: string = this.btnSubmitCurrEduCls;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitCurrEduCls = '确认添加';
          this.btnCancelCurrEduCls = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (CurrEduCls_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_CurrEduCls();
              this.iShowList.BindGvCache(clsCurrEduClsEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (CurrEduCls_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                CurrEduCls_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGvCache(clsCurrEduClsEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In CurrEduCls_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (CurrEduCls_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              CurrEduCls_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGvCache(clsCurrEduClsEN._CurrTabName, this.keyId);
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
    this.currEduClsId = '';
    this.eduClsName = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlCourseId');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdXzCollege');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdGradeBase');
    this.isEffective = false;
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlSchoolYear');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlSchoolTerm');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlUserType');
    this.memo = '';
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucCurrEduClsB1.idCurrEduCls = CurrEduClsGetMaxStrId_S();
    try {
      const returnString = await CurrEduCls_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表CurrEduCls的最大关键字为空,不成功,请检查!');
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

    //this.idCurrEduCls = await CurrEduCls_GetMaxStrIdAsync();
    try {
      const returnString = await CurrEduCls_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表CurrEduCls的最大关键字为空,不成功,请检查!');
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
   * @param pobjCurrEduClsEN">数据传输的目的类对象</param>
   **/
  public async PutDataToCurrEduClsClass(pobjCurrEduClsEN: clsCurrEduClsEN) {
    pobjCurrEduClsEN.SetCurrEduClsId(this.currEduClsId); // 教学班Id
    pobjCurrEduClsEN.SetEduClsName(this.eduClsName); // 教学班名称
    pobjCurrEduClsEN.SetCourseId(this.courseId); // 课程
    pobjCurrEduClsEN.SetIdXzCollege(this.idXzCollege); // 学院
    pobjCurrEduClsEN.SetIdGradeBase(this.idGradeBase); // 年级
    pobjCurrEduClsEN.SetIsEffective(this.isEffective); // 是否有效
    pobjCurrEduClsEN.SetSchoolYear(this.schoolYear); // 学年
    pobjCurrEduClsEN.SetSchoolTerm(this.schoolTerm); // 学期
    pobjCurrEduClsEN.SetUserType(this.userType); // 用户类型
    pobjCurrEduClsEN.SetMemo(this.memo); // 备注
    pobjCurrEduClsEN.SetModifyDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjCurrEduClsEN.SetModifyUserId(userStore.getUserId); // 修改人
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objCurrEduClsEN = new clsCurrEduClsEN();
    try {
      await this.PutDataToCurrEduClsClass(objCurrEduClsEN);
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
      CurrEduCls_CheckPropertyNew(objCurrEduClsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objCurrEduClsEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      const returnKeyId = await CurrEduCls_AddNewRecordWithMaxIdAsync(objCurrEduClsEN);
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
  public async CheckUniCond4Add(objCurrEduClsEN: clsCurrEduClsEN): Promise<boolean> {
    const strUniquenessCondition = CurrEduCls_GetUniCondStr(objCurrEduClsEN);
    const bolIsExistCondition = await CurrEduCls_IsExistRecordAsync(strUniquenessCondition);
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
  public async CheckUniCond4Update(objCurrEduClsEN: clsCurrEduClsEN): Promise<boolean> {
    const strUniquenessCondition = CurrEduCls_GetUniCondStr4Update(objCurrEduClsEN);
    const bolIsExistCondition = await CurrEduCls_IsExistRecordAsync(strUniquenessCondition);
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
    const objCurrEduClsEN = new clsCurrEduClsEN();
    try {
      await this.PutDataToCurrEduClsClass(objCurrEduClsEN);
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
      CurrEduCls_CheckPropertyNew(objCurrEduClsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objCurrEduClsEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const responseKeyId = await CurrEduCls_AddNewRecordWithMaxIdAsync(objCurrEduClsEN);
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
   * @param strIdCurrEduCls: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(strIdCurrEduCls: string) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objCurrEduClsEN = new clsCurrEduClsEN();
    try {
      const returnBool = await CurrEduCls_IsExistAsync(strIdCurrEduCls);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strIdCurrEduCls);
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
      const objCurrEduClsENConst = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
      if (objCurrEduClsENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objCurrEduClsEN = objCurrEduClsENConst;
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
    this.GetDataFromCurrEduClsClass(objCurrEduClsEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjCurrEduClsEN">表实体类对象</param>
   **/
  public async GetDataFromCurrEduClsClass(pobjCurrEduClsEN: clsCurrEduClsEN) {
    this.currEduClsId = pobjCurrEduClsEN.currEduClsId; // 教学班Id
    this.eduClsName = pobjCurrEduClsEN.eduClsName; // 教学班名称
    this.courseId = pobjCurrEduClsEN.courseId; // 课程
    this.idXzCollege = pobjCurrEduClsEN.idXzCollege; // 学院
    this.idGradeBase = pobjCurrEduClsEN.idGradeBase; // 年级
    this.isEffective = pobjCurrEduClsEN.isEffective; // 是否有效
    this.schoolYear = pobjCurrEduClsEN.schoolYear; // 学年
    this.schoolTerm = pobjCurrEduClsEN.schoolTerm; // 学期
    this.userType = pobjCurrEduClsEN.userType; // 用户类型
    this.memo = pobjCurrEduClsEN.memo; // 备注
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strIdCurrEduCls: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strIdCurrEduCls;
    try {
      const objCurrEduClsEN = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
      if (objCurrEduClsEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromCurrEduClsClass(objCurrEduClsEN);
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
    const objCurrEduClsEN = new clsCurrEduClsEN();
    objCurrEduClsEN.SetIdCurrEduCls(this.keyId);
    await this.PutDataToCurrEduClsClass(objCurrEduClsEN);
    objCurrEduClsEN.sfUpdFldSetStr = objCurrEduClsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objCurrEduClsEN.idCurrEduCls == '' || objCurrEduClsEN.idCurrEduCls == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      CurrEduCls_CheckProperty4Update(objCurrEduClsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objCurrEduClsEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await CurrEduCls_UpdateRecordAsync(objCurrEduClsEN);
      if (returnBool == true) {
        await currEduClsStore.delObj(objCurrEduClsEN.idCurrEduCls);
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
  public set btnCancelCurrEduCls(value: string) {
    CurrEduCls_Edit.EditObj.SetButtonText('btnCancelCurrEduCls', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitCurrEduCls(): string {
    const strValue = CurrEduCls_Edit.EditObj.GetButtonText('btnSubmitCurrEduCls');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitCurrEduCls(value: string) {
    CurrEduCls_Edit.EditObj.SetButtonText('btnSubmitCurrEduCls', value);
  }
  /**
   * 课程Id (Used In Clear())
   **/
  public set courseId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlCourseId', value);
  }
  /**
   * 课程Id (Used In PutDataToClass())
   **/
  public get courseId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlCourseId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 教学班Id (Used In Clear())
   **/
  public set currEduClsId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtCurrEduClsId', value);
  }
  /**
   * 教学班Id (Used In PutDataToClass())
   **/
  public get currEduClsId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtCurrEduClsId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 教学班名 (Used In Clear())
   **/
  public set eduClsName(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtEduClsName', value);
  }
  /**
   * 教学班名 (Used In PutDataToClass())
   **/
  public get eduClsName(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtEduClsName');
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
   * 是否有效 (Used In Clear())
   **/
  public set isEffective(value: boolean) {
    SetCheckBoxValueByIdInDivObj(this.divEdit, 'chkIsEffective', value);
  }
  /**
   * 是否有效 (Used In PutDataToClass())
   **/
  public get isEffective(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(this.divEdit, 'chkIsEffective');
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
   * 学期 (Used In Clear())
   **/
  public set schoolTerm(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlSchoolTerm', value);
  }
  /**
   * 学期 (Used In PutDataToClass())
   **/
  public get schoolTerm(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlSchoolTerm');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 学年 (Used In Clear())
   **/
  public set schoolYear(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlSchoolYear', value);
  }
  /**
   * 学年 (Used In PutDataToClass())
   **/
  public get schoolYear(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlSchoolYear');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 用户类型 (Used In Clear())
   **/
  public set userType(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlUserType', value);
  }
  /**
   * 用户类型 (Used In PutDataToClass())
   **/
  public get userType(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlUserType');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
}
