/**
 * 类名:CurrEduClsStu_Edit(界面:CurrEduClsStuCRUD)
 * 表名:CurrEduClsStu(01120125)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 12:00:41
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
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { CurrEduCls_BindDdl_IdCurrEduClsByCourseIdInDivCache } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { SchoolTerm_BindDdl_SchoolTermInDivCache } from '@/ts/L3ForWApi/SysPara/clsSchoolTermWApi';
import { SchoolYear_BindDdl_SchoolYearInDivCache } from '@/ts/L3ForWApi/SysPara/clsSchoolYearWApi';
import {
  ClearSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetSelectValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  CurrEduClsStu_CheckPropertyNew,
  CurrEduClsStu_AddNewRecordAsync,
  CurrEduClsStu_ReFreshCache,
  CurrEduClsStu_GetUniCondStr,
  CurrEduClsStu_IsExistRecordAsync,
  CurrEduClsStu_GetUniCondStr4Update,
  CurrEduClsStu_IsExistAsync,
  CurrEduClsStu_GetObjByIdEduClsStuAsync,
  CurrEduClsStu_CheckProperty4Update,
  CurrEduClsStu_UpdateRecordAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsStuWApi';
import { clsCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsStuEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** CurrEduClsStu_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class CurrEduClsStu_Edit {
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
  public static objPageEdit: CurrEduClsStu_Edit;
  public static objPageEdit2: CurrEduClsStu_Edit;
  public static objPageEdit3: CurrEduClsStu_Edit;

  public static CourseIdCache = ''; //6、定义下拉框条件变量1
  public static CourseIdStatic = ''; //7、在查询区定义下拉框条件变量1
  public static IdCurrEduClsCache = ''; //2、界面主表的缓存分类字段变量1
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
    if (CurrEduClsStu_Edit.SetPageEdit(this, 1) == true) return;
    if (CurrEduClsStu_Edit.SetPageEdit(this, 2) == true) return;
    if (CurrEduClsStu_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (CurrEduClsStu_Edit.objPageEdit == null) {
          CurrEduClsStu_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = CurrEduClsStu_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            CurrEduClsStu_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (CurrEduClsStu_Edit.objPageEdit2 == null) {
          CurrEduClsStu_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = CurrEduClsStu_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            CurrEduClsStu_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (CurrEduClsStu_Edit.objPageEdit3 == null) {
          CurrEduClsStu_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = CurrEduClsStu_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            CurrEduClsStu_Edit.objPageEdit3 = objDataLst;
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
    if (CurrEduClsStu_Edit.objPageEdit != null) {
      const strClassNameOld = CurrEduClsStu_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return CurrEduClsStu_Edit.objPageEdit;
    }
    if (CurrEduClsStu_Edit.objPageEdit2 != null) {
      const strClassNameOld = CurrEduClsStu_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return CurrEduClsStu_Edit.objPageEdit2;
    }
    if (CurrEduClsStu_Edit.objPageEdit3 != null) {
      const strClassNameOld = CurrEduClsStu_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return CurrEduClsStu_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_CurrEduClsStu() {
    if (CurrEduClsStu_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      CurrEduClsStu_Edit.EditObj.hideDialog();
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
  public async ShowDialog_CurrEduClsStu(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_CurrEduClsStu.name;
    if (CurrEduClsStu_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (CurrEduClsStu_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await CurrEduClsStu_Edit.EditObj.showDialog();
    }
    this.divEdit = CurrEduClsStu_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (CurrEduClsStu_Edit.times4TestShowDialog < 2) {
        CurrEduClsStu_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_CurrEduClsStu(strOp);
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
      CurrEduClsStu_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitCurrEduClsStu = '确认添加';
      this.btnCancelCurrEduClsStu = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitCurrEduClsStu = '确认修改';
      this.btnCancelCurrEduClsStu = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (CurrEduClsStu_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (CurrEduClsStu_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = CurrEduClsStu_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (CurrEduClsStu_Edit.times4TestShowDialog < 2) {
        CurrEduClsStu_Edit.times4TestShowDialog++;
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
      CurrEduClsStu_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_CurrEduClsStu(this.opType);
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
    const CourseIdCache = CurrEduClsStu_Edit.CourseIdCache; //缓存分类变量;//在switch中未找到相关类型: tsCache(in AGC.PureClassEx.FuncParaType:GetTsTypeStr)

    await this.SetDdl_IdCurrEduClsInDiv(CourseIdCache); //编辑区域

    await this.SetDdl_SchoolTermInDiv(); //编辑区域

    await this.SetDdl_SchoolYearInDiv(); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_CurrEduClsStu(this.opType);
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
   * 设置绑定下拉框，针对字段:[IdCurrEduCls]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdCurrEduClsInDiv(strCourseId: string) {
    if (IsNullOrEmpty(strCourseId) == true) {
      const strMsg = Format('参数:[strCourseId]不能为空!(In .SetDdl_IdCurrEduClsInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strCourseId.length != 8) {
      const strMsg = Format(
        '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(.SetDdl_IdCurrEduClsInDiv)',
        strCourseId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    if (IsNullOrEmpty(strCourseId) == true) {
      const strMsg = Format('参数:[strCourseId]不能为空!(In .SetDdl_IdCurrEduClsInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strCourseId.length != 8) {
      const strMsg = Format(
        '缓存分类变量:[strCourseId]的长度:[{0}]不正确!(.SetDdl_IdCurrEduClsInDiv)',
        strCourseId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }
    await CurrEduCls_BindDdl_IdCurrEduClsByCourseIdInDivCache(
      this.divEdit,
      'ddlIdCurrEduCls',
      strCourseId,
    ); //
  }

  /**
   * 设置绑定下拉框，针对字段:[SchoolTerm]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_SchoolTermInDiv() {
    await SchoolTerm_BindDdl_SchoolTermInDivCache(this.divEdit, 'ddlSchoolTerm'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[SchoolYear]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_SchoolYearInDiv() {
    await SchoolYear_BindDdl_SchoolYearInDivCache(this.divEdit, 'ddlSchoolYear'); //
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
      const bolIsSuccess = await this.ShowDialog_CurrEduClsStu(this.opType);
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
      const bolIsSuccess = await this.ShowDialog_CurrEduClsStu(this.opType);
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
    const strCommandText: string = this.btnSubmitCurrEduClsStu;
    try {
      let returnBool = false;
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitCurrEduClsStu = '确认添加';
          this.btnCancelCurrEduClsStu = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            //const returnKeyId = await this.AddNewRecordWithMaxIdSave();
            //if (IsNullOrEmpty(returnKeyId) == false)
            //{
            //CurrEduClsStu_Edit.EditObj.hideDialog();
            //this.iShowList.BindGvCache(clsCurrEduClsStuEN._CurrTabName, "");
            //}
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (CurrEduClsStu_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                CurrEduClsStu_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGvCache(clsCurrEduClsStuEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In CurrEduClsStu_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (CurrEduClsStu_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              CurrEduClsStu_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGvCache(clsCurrEduClsStuEN._CurrTabName, this.keyId);
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
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdCurrEduCls');
    this.idStu = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlSchoolTerm');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlSchoolYear');
    this.memo = '';
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucCurrEduClsStuB1.idEduClsStu = CurrEduClsStuGetMaxStrId_S();
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    this.Clear();

    //this.idEduClsStu = await CurrEduClsStu_GetMaxStrIdAsync();
  }

  /** 函1数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjCurrEduClsStuEN">数据传输的目的类对象</param>
   **/
  public async PutDataToCurrEduClsStuClass(pobjCurrEduClsStuEN: clsCurrEduClsStuEN) {
    pobjCurrEduClsStuEN.SetIdCurrEduCls(this.idCurrEduCls); // 教学班
    pobjCurrEduClsStuEN.SetIdStu(this.idStu); // 学生
    pobjCurrEduClsStuEN.SetSchoolTerm(this.schoolTerm); // 学期
    pobjCurrEduClsStuEN.SetSchoolYear(this.schoolYear); // 学年
    pobjCurrEduClsStuEN.SetMemo(this.memo); // 备注
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objCurrEduClsStuEN = new clsCurrEduClsStuEN();
    try {
      await this.PutDataToCurrEduClsStuClass(objCurrEduClsStuEN);
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
      CurrEduClsStu_CheckPropertyNew(objCurrEduClsStuEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objCurrEduClsStuEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      returnBool = await CurrEduClsStu_AddNewRecordAsync(objCurrEduClsStuEN);
      if (returnBool == true) {
        CurrEduClsStu_ReFreshCache(CurrEduClsStu_Edit.IdCurrEduClsCache);
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
  public async CheckUniCond4Add(objCurrEduClsStuEN: clsCurrEduClsStuEN): Promise<boolean> {
    const strUniquenessCondition = CurrEduClsStu_GetUniCondStr(objCurrEduClsStuEN);
    const bolIsExistCondition = await CurrEduClsStu_IsExistRecordAsync(strUniquenessCondition);
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
  public async CheckUniCond4Update(objCurrEduClsStuEN: clsCurrEduClsStuEN): Promise<boolean> {
    const strUniquenessCondition = CurrEduClsStu_GetUniCondStr4Update(objCurrEduClsStuEN);
    const bolIsExistCondition = await CurrEduClsStu_IsExistRecordAsync(strUniquenessCondition);
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
   * @param lngIdEduClsStu: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(lngIdEduClsStu: number) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objCurrEduClsStuEN = new clsCurrEduClsStuEN();
    try {
      const returnBool = await CurrEduClsStu_IsExistAsync(lngIdEduClsStu);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', lngIdEduClsStu);
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
      const objCurrEduClsStuENConst = await CurrEduClsStu_GetObjByIdEduClsStuAsync(lngIdEduClsStu);
      if (objCurrEduClsStuENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objCurrEduClsStuEN = objCurrEduClsStuENConst;
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
    this.GetDataFromCurrEduClsStuClass(objCurrEduClsStuEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjCurrEduClsStuEN">表实体类对象</param>
   **/
  public async GetDataFromCurrEduClsStuClass(pobjCurrEduClsStuEN: clsCurrEduClsStuEN) {
    this.idCurrEduCls = pobjCurrEduClsStuEN.idCurrEduCls; // 教学班
    this.idStu = pobjCurrEduClsStuEN.idStu; // 学生
    this.schoolTerm = pobjCurrEduClsStuEN.schoolTerm; // 学期
    this.schoolYear = pobjCurrEduClsStuEN.schoolYear; // 学年
    this.memo = pobjCurrEduClsStuEN.memo; // 备注
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(lngIdEduClsStu: number): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = lngIdEduClsStu.toString();
    try {
      const objCurrEduClsStuEN = await CurrEduClsStu_GetObjByIdEduClsStuAsync(lngIdEduClsStu);
      if (objCurrEduClsStuEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromCurrEduClsStuClass(objCurrEduClsStuEN);
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
    const objCurrEduClsStuEN = new clsCurrEduClsStuEN();
    objCurrEduClsStuEN.SetIdEduClsStu(Number(this.keyId));
    await this.PutDataToCurrEduClsStuClass(objCurrEduClsStuEN);
    objCurrEduClsStuEN.sfUpdFldSetStr = objCurrEduClsStuEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objCurrEduClsStuEN.idEduClsStu == 0 || objCurrEduClsStuEN.idEduClsStu == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      CurrEduClsStu_CheckProperty4Update(objCurrEduClsStuEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objCurrEduClsStuEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await CurrEduClsStu_UpdateRecordAsync(objCurrEduClsStuEN);
      if (returnBool == true) {
        CurrEduClsStu_ReFreshCache(CurrEduClsStu_Edit.IdCurrEduClsCache);
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
  public set btnCancelCurrEduClsStu(value: string) {
    CurrEduClsStu_Edit.EditObj.SetButtonText('btnCancelCurrEduClsStu', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitCurrEduClsStu(): string {
    const strValue = CurrEduClsStu_Edit.EditObj.GetButtonText('btnSubmitCurrEduClsStu');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitCurrEduClsStu(value: string) {
    CurrEduClsStu_Edit.EditObj.SetButtonText('btnSubmitCurrEduClsStu', value);
  }
  /**
   * 教学班流水号 (Used In Clear())
   **/
  public set idCurrEduCls(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlIdCurrEduCls', value);
  }
  /**
   * 教学班流水号 (Used In PutDataToClass())
   **/
  public get idCurrEduCls(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlIdCurrEduCls');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 学生流水号 (Used In Clear())
   **/
  public set idStu(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtIdStu', value);
  }
  /**
   * 学生流水号 (Used In PutDataToClass())
   **/
  public get idStu(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtIdStu');
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
}
