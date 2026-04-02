/**
 * 类名:cc_Course_Edit(界面:cc_CourseCRUD)
 * 表名:cc_Course(01120056)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 12:00:39
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:课程学习(CourseLearning)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS)
 * 编程语言:TypeScript
 **/
import $ from 'jquery';
import { cc_CourseType_BindDdl_CourseTypeIDInDivCache } from '@/ts/L3ForWApi/CourseLearning/clscc_CourseTypeWApi';
import { XzMajor_BindDdl_IdXzMajorInDivCache } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
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
  cc_Course_GetMaxStrIdAsync,
  cc_Course_CheckPropertyNew,
  cc_Course_AddNewRecordWithMaxIdAsync,
  cc_Course_ReFreshCache,
  cc_Course_GetUniCondStr,
  cc_Course_IsExistRecordAsync,
  cc_Course_GetUniCondStr4Update,
  cc_Course_IsExistAsync,
  cc_Course_GetObjByCourseIdAsync,
  cc_Course_CheckProperty4Update,
  cc_Course_UpdateRecordAsync,
} from '@/ts/L3ForWApi/CourseLearning/clscc_CourseWApi';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { userStore } from '@/store/modulesShare/user';
import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** cc_Course_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class cc_Course_Edit {
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
  public static objPageEdit: cc_Course_Edit;
  public static objPageEdit2: cc_Course_Edit;
  public static objPageEdit3: cc_Course_Edit;

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
    if (cc_Course_Edit.SetPageEdit(this, 1) == true) return;
    if (cc_Course_Edit.SetPageEdit(this, 2) == true) return;
    if (cc_Course_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (cc_Course_Edit.objPageEdit == null) {
          cc_Course_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = cc_Course_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            cc_Course_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (cc_Course_Edit.objPageEdit2 == null) {
          cc_Course_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = cc_Course_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            cc_Course_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (cc_Course_Edit.objPageEdit3 == null) {
          cc_Course_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = cc_Course_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            cc_Course_Edit.objPageEdit3 = objDataLst;
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
    if (cc_Course_Edit.objPageEdit != null) {
      const strClassNameOld = cc_Course_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return cc_Course_Edit.objPageEdit;
    }
    if (cc_Course_Edit.objPageEdit2 != null) {
      const strClassNameOld = cc_Course_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return cc_Course_Edit.objPageEdit2;
    }
    if (cc_Course_Edit.objPageEdit3 != null) {
      const strClassNameOld = cc_Course_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return cc_Course_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_cc_Course() {
    if (cc_Course_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      cc_Course_Edit.EditObj.hideDialog();
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
  public async ShowDialog_cc_Course(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_cc_Course.name;
    if (cc_Course_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (cc_Course_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await cc_Course_Edit.EditObj.showDialog();
    }
    this.divEdit = cc_Course_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (cc_Course_Edit.times4TestShowDialog < 2) {
        cc_Course_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_cc_Course(strOp);
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
      cc_Course_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitcc_Course = '确认添加';
      this.btnCancelcc_Course = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitcc_Course = '确认修改';
      this.btnCancelcc_Course = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (cc_Course_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (cc_Course_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = cc_Course_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (cc_Course_Edit.times4TestShowDialog < 2) {
        cc_Course_Edit.times4TestShowDialog++;
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
      cc_Course_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_cc_Course(this.opType);
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
    await this.SetDdl_CourseTypeIdInDiv(); //编辑区域

    await this.SetDdl_IdXzMajorInDiv(); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_cc_Course(this.opType);
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
   * 设置绑定下拉框，针对字段:[CourseTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_CourseTypeIdInDiv() {
    await cc_CourseType_BindDdl_CourseTypeIDInDivCache(this.divEdit, 'ddlCourseTypeId'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdXzMajor]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdXzMajorInDiv() {
    await XzMajor_BindDdl_IdXzMajorInDivCache(this.divEdit, 'ddlIdXzMajor'); //
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
      const bolIsSuccess = await this.ShowDialog_cc_Course(this.opType);
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
      const bolIsSuccess = await this.ShowDialog_cc_Course(this.opType);
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
    const strCommandText: string = this.btnSubmitcc_Course;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitcc_Course = '确认添加';
          this.btnCancelcc_Course = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (cc_Course_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_cc_Course();
              this.iShowList.BindGvCache(clscc_CourseEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (cc_Course_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                cc_Course_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGvCache(clscc_CourseEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In cc_Course_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (cc_Course_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              cc_Course_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGvCache(clscc_CourseEN._CurrTabName, this.keyId);
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
    this.courseName = '';
    this.courseCode = '';
    this.courseDescription = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlCourseTypeId');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdXzMajor');
    this.isOpen = false;
    this.memo = '';
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wuccc_CourseB1.courseId = cc_CourseGetMaxStrId_S();
    try {
      const returnString = await cc_Course_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表cc_Course的最大关键字为空,不成功,请检查!');
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

    //this.courseId = await cc_Course_GetMaxStrIdAsync();
    try {
      const returnString = await cc_Course_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表cc_Course的最大关键字为空,不成功,请检查!');
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
   * @param pobjcc_CourseEN">数据传输的目的类对象</param>
   **/
  public async PutDataTocc_CourseClass(pobjcc_CourseEN: clscc_CourseEN) {
    pobjcc_CourseEN.SetCourseName(this.courseName); // 课程名称
    pobjcc_CourseEN.SetCourseCode(this.courseCode); // 课程代码
    pobjcc_CourseEN.SetCourseDescription(this.courseDescription); // 课程描述
    pobjcc_CourseEN.SetCourseTypeId(this.courseTypeId); // 课程类型
    pobjcc_CourseEN.SetIdXzMajor(this.idXzMajor); // 专业
    pobjcc_CourseEN.SetIsOpen(this.isOpen); // 是否公开
    pobjcc_CourseEN.SetMemo(this.memo); // 备注
    pobjcc_CourseEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjcc_CourseEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objcc_CourseEN = new clscc_CourseEN();
    try {
      await this.PutDataTocc_CourseClass(objcc_CourseEN);
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
      cc_Course_CheckPropertyNew(objcc_CourseEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objcc_CourseEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      const returnKeyId = await cc_Course_AddNewRecordWithMaxIdAsync(objcc_CourseEN);
      if (IsNullOrEmpty(returnKeyId) == false) {
        this.keyId = returnKeyId;
        returnBool = true;
      }
      if (returnBool == true) {
        cc_Course_ReFreshCache();
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
  public async CheckUniCond4Add(objcc_CourseEN: clscc_CourseEN): Promise<boolean> {
    const strUniquenessCondition = cc_Course_GetUniCondStr(objcc_CourseEN);
    const bolIsExistCondition = await cc_Course_IsExistRecordAsync(strUniquenessCondition);
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
  public async CheckUniCond4Update(objcc_CourseEN: clscc_CourseEN): Promise<boolean> {
    const strUniquenessCondition = cc_Course_GetUniCondStr4Update(objcc_CourseEN);
    const bolIsExistCondition = await cc_Course_IsExistRecordAsync(strUniquenessCondition);
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
    const objcc_CourseEN = new clscc_CourseEN();
    try {
      await this.PutDataTocc_CourseClass(objcc_CourseEN);
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
      cc_Course_CheckPropertyNew(objcc_CourseEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objcc_CourseEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const responseKeyId = await cc_Course_AddNewRecordWithMaxIdAsync(objcc_CourseEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        cc_Course_ReFreshCache();
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
   * @param strCourseId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(strCourseId: string) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objcc_CourseEN = new clscc_CourseEN();
    try {
      const returnBool = await cc_Course_IsExistAsync(strCourseId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strCourseId);
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
      const objcc_CourseENConst = await cc_Course_GetObjByCourseIdAsync(strCourseId);
      if (objcc_CourseENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objcc_CourseEN = objcc_CourseENConst;
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
    this.GetDataFromcc_CourseClass(objcc_CourseEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjcc_CourseEN">表实体类对象</param>
   **/
  public async GetDataFromcc_CourseClass(pobjcc_CourseEN: clscc_CourseEN) {
    this.courseName = pobjcc_CourseEN.courseName; // 课程名称
    this.courseCode = pobjcc_CourseEN.courseCode; // 课程代码
    this.courseDescription = pobjcc_CourseEN.courseDescription; // 课程描述
    this.courseTypeId = pobjcc_CourseEN.courseTypeId; // 课程类型
    this.idXzMajor = pobjcc_CourseEN.idXzMajor; // 专业
    this.isOpen = pobjcc_CourseEN.isOpen; // 是否公开
    this.memo = pobjcc_CourseEN.memo; // 备注
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strCourseId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strCourseId;
    try {
      const objcc_CourseEN = await cc_Course_GetObjByCourseIdAsync(strCourseId);
      if (objcc_CourseEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromcc_CourseClass(objcc_CourseEN);
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
    const objcc_CourseEN = new clscc_CourseEN();
    objcc_CourseEN.SetCourseId(this.keyId);
    await this.PutDataTocc_CourseClass(objcc_CourseEN);
    objcc_CourseEN.sfUpdFldSetStr = objcc_CourseEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objcc_CourseEN.courseId == '' || objcc_CourseEN.courseId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      cc_Course_CheckProperty4Update(objcc_CourseEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objcc_CourseEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await cc_Course_UpdateRecordAsync(objcc_CourseEN);
      if (returnBool == true) {
        cc_Course_ReFreshCache();
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
  public set btnCancelcc_Course(value: string) {
    cc_Course_Edit.EditObj.SetButtonText('btnCancelcc_Course', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitcc_Course(): string {
    const strValue = cc_Course_Edit.EditObj.GetButtonText('btnSubmitcc_Course');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitcc_Course(value: string) {
    cc_Course_Edit.EditObj.SetButtonText('btnSubmitcc_Course', value);
  }
  /**
   * 课程代码 (Used In Clear())
   **/
  public set courseCode(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtCourseCode', value);
  }
  /**
   * 课程代码 (Used In PutDataToClass())
   **/
  public get courseCode(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtCourseCode');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 课程描述 (Used In Clear())
   **/
  public set courseDescription(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtCourseDescription', value);
  }
  /**
   * 课程描述 (Used In PutDataToClass())
   **/
  public get courseDescription(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtCourseDescription');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 课程名称 (Used In Clear())
   **/
  public set courseName(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtCourseName', value);
  }
  /**
   * 课程名称 (Used In PutDataToClass())
   **/
  public get courseName(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtCourseName');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 课程类型ID (Used In Clear())
   **/
  public set courseTypeId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlCourseTypeId', value);
  }
  /**
   * 课程类型ID (Used In PutDataToClass())
   **/
  public get courseTypeId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlCourseTypeId');
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
   * 是否公开 (Used In Clear())
   **/
  public set isOpen(value: boolean) {
    SetCheckBoxValueByIdInDivObj(this.divEdit, 'chkIsOpen', value);
  }
  /**
   * 是否公开 (Used In PutDataToClass())
   **/
  public get isOpen(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(this.divEdit, 'chkIsOpen');
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
