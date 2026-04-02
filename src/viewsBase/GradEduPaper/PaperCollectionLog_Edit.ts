/**
 * 类名:PaperCollectionLog_Edit(界面:PaperCollectionLogCRUD)
 * 表名:PaperCollectionLog(01120565)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 12:00:46
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS)
 * 编程语言:TypeScript
 **/
import $ from 'jquery';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { vPaperSimProEx_BindDdl_PaperIdByIdCurrEduClsInDivCache } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSimProExWApi';
import {
  ClearSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetSelectValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { userStore } from '@/store/modulesShare/user';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import {
  PaperCollectionLog_CheckPropertyNew,
  PaperCollectionLog_AddNewRecordAsync,
  PaperCollectionLog_ReFreshCache,
  PaperCollectionLog_GetUniCondStr,
  PaperCollectionLog_IsExistRecordAsync,
  PaperCollectionLog_GetUniCondStr4Update,
  PaperCollectionLog_IsExistAsync,
  PaperCollectionLog_GetObjByPaperCollectionLogIdAsync,
  PaperCollectionLog_CheckProperty4Update,
  PaperCollectionLog_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperCollectionLogWApi';
import { clsPaperCollectionLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperCollectionLogEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** PaperCollectionLog_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class PaperCollectionLog_Edit {
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
  public static objPageEdit: PaperCollectionLog_Edit;
  public static objPageEdit2: PaperCollectionLog_Edit;
  public static objPageEdit3: PaperCollectionLog_Edit;

  public static UpdUserCache = ''; //2、界面主表的缓存分类字段变量1
  public static IdCurrEduClsStatic = ''; //6、定义下拉框条件变量1
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
    if (PaperCollectionLog_Edit.SetPageEdit(this, 1) == true) return;
    if (PaperCollectionLog_Edit.SetPageEdit(this, 2) == true) return;
    if (PaperCollectionLog_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (PaperCollectionLog_Edit.objPageEdit == null) {
          PaperCollectionLog_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = PaperCollectionLog_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            PaperCollectionLog_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (PaperCollectionLog_Edit.objPageEdit2 == null) {
          PaperCollectionLog_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = PaperCollectionLog_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            PaperCollectionLog_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (PaperCollectionLog_Edit.objPageEdit3 == null) {
          PaperCollectionLog_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = PaperCollectionLog_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            PaperCollectionLog_Edit.objPageEdit3 = objDataLst;
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
    if (PaperCollectionLog_Edit.objPageEdit != null) {
      const strClassNameOld = PaperCollectionLog_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return PaperCollectionLog_Edit.objPageEdit;
    }
    if (PaperCollectionLog_Edit.objPageEdit2 != null) {
      const strClassNameOld = PaperCollectionLog_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return PaperCollectionLog_Edit.objPageEdit2;
    }
    if (PaperCollectionLog_Edit.objPageEdit3 != null) {
      const strClassNameOld = PaperCollectionLog_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return PaperCollectionLog_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_PaperCollectionLog() {
    if (PaperCollectionLog_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      PaperCollectionLog_Edit.EditObj.hideDialog();
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
  public async ShowDialog_PaperCollectionLog(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_PaperCollectionLog.name;
    if (PaperCollectionLog_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (PaperCollectionLog_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await PaperCollectionLog_Edit.EditObj.showDialog();
    }
    this.divEdit = PaperCollectionLog_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (PaperCollectionLog_Edit.times4TestShowDialog < 2) {
        PaperCollectionLog_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_PaperCollectionLog(strOp);
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
      PaperCollectionLog_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitPaperCollectionLog = '确认添加';
      this.btnCancelPaperCollectionLog = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitPaperCollectionLog = '确认修改';
      this.btnCancelPaperCollectionLog = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (PaperCollectionLog_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (PaperCollectionLog_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = PaperCollectionLog_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (PaperCollectionLog_Edit.times4TestShowDialog < 2) {
        PaperCollectionLog_Edit.times4TestShowDialog++;
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
      PaperCollectionLog_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_PaperCollectionLog(this.opType);
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
    const IdCurrEduClsStatic = PaperCollectionLog_Edit.IdCurrEduClsStatic; //静态变量;//静态变量

    await this.SetDdl_PaperIdInDiv(IdCurrEduClsStatic); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_PaperCollectionLog(this.opType);
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
   * 设置绑定下拉框，针对字段:[PaperId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_PaperIdInDiv(strIdCurrEduCls: string) {
    if (IsNullOrEmpty(strIdCurrEduCls) == true) {
      const strMsg = Format('参数:[strIdCurrEduCls]不能为空!(In .SetDdl_PaperIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strIdCurrEduCls.length != 8) {
      const strMsg = Format(
        '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(.SetDdl_PaperIdInDiv)',
        strIdCurrEduCls.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    if (IsNullOrEmpty(strIdCurrEduCls) == true) {
      const strMsg = Format('参数:[strIdCurrEduCls]不能为空!(In .SetDdl_PaperIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strIdCurrEduCls.length != 8) {
      const strMsg = Format(
        '缓存分类变量:[strIdCurrEduCls]的长度:[{0}]不正确!(.SetDdl_PaperIdInDiv)',
        strIdCurrEduCls.length,
      );
      console.error(strMsg);
      throw strMsg;
    }
    await vPaperSimProEx_BindDdl_PaperIdByIdCurrEduClsInDivCache(
      this.divEdit,
      'ddlPaperId',
      strIdCurrEduCls,
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
      const bolIsSuccess = await this.ShowDialog_PaperCollectionLog(this.opType);
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
      const bolIsSuccess = await this.ShowDialog_PaperCollectionLog(this.opType);
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
    const strCommandText: string = this.btnSubmitPaperCollectionLog;
    try {
      let returnBool = false;
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitPaperCollectionLog = '确认添加';
          this.btnCancelPaperCollectionLog = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            //const returnKeyId = await this.AddNewRecordWithMaxIdSave();
            //if (IsNullOrEmpty(returnKeyId) == false)
            //{
            //PaperCollectionLog_Edit.EditObj.hideDialog();
            //this.iShowList.BindGvCache(clsPaperCollectionLogEN._CurrTabName, "");
            //}
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (PaperCollectionLog_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                PaperCollectionLog_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGv(clsPaperCollectionLogEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In PaperCollectionLog_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (PaperCollectionLog_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              PaperCollectionLog_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGv(clsPaperCollectionLogEN._CurrTabName, this.keyId);
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
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlPaperId');
    this.meno = '';
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucPaperCollectionLogB1.paperCollectionLogId = PaperCollectionLogGetMaxStrId_S();
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    this.Clear();

    //this.paperCollectionLogId = await PaperCollectionLog_GetMaxStrIdAsync();
  }

  /** 函1数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjPaperCollectionLogEN">数据传输的目的类对象</param>
   **/
  public async PutDataToPaperCollectionLogClass(pobjPaperCollectionLogEN: clsPaperCollectionLogEN) {
    pobjPaperCollectionLogEN.SetPaperId(this.paperId); // 论文Id
    pobjPaperCollectionLogEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjPaperCollectionLogEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjPaperCollectionLogEN.SetMeno(this.meno); // 备注
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objPaperCollectionLogEN = new clsPaperCollectionLogEN();
    try {
      await this.PutDataToPaperCollectionLogClass(objPaperCollectionLogEN);
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
      PaperCollectionLog_CheckPropertyNew(objPaperCollectionLogEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objPaperCollectionLogEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      returnBool = await PaperCollectionLog_AddNewRecordAsync(objPaperCollectionLogEN);
      if (returnBool == true) {
        PaperCollectionLog_ReFreshCache(PaperCollectionLog_Edit.UpdUserCache);
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
    objPaperCollectionLogEN: clsPaperCollectionLogEN,
  ): Promise<boolean> {
    const strUniquenessCondition = PaperCollectionLog_GetUniCondStr(objPaperCollectionLogEN);
    const bolIsExistCondition = await PaperCollectionLog_IsExistRecordAsync(strUniquenessCondition);
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
    objPaperCollectionLogEN: clsPaperCollectionLogEN,
  ): Promise<boolean> {
    const strUniquenessCondition = PaperCollectionLog_GetUniCondStr4Update(objPaperCollectionLogEN);
    const bolIsExistCondition = await PaperCollectionLog_IsExistRecordAsync(strUniquenessCondition);
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
   * @param lngPaperCollectionLogId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(lngPaperCollectionLogId: number) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objPaperCollectionLogEN = new clsPaperCollectionLogEN();
    try {
      const returnBool = await PaperCollectionLog_IsExistAsync(lngPaperCollectionLogId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', lngPaperCollectionLogId);
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
      const objPaperCollectionLogENConst =
        await PaperCollectionLog_GetObjByPaperCollectionLogIdAsync(lngPaperCollectionLogId);
      if (objPaperCollectionLogENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objPaperCollectionLogEN = objPaperCollectionLogENConst;
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
    this.GetDataFromPaperCollectionLogClass(objPaperCollectionLogEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjPaperCollectionLogEN">表实体类对象</param>
   **/
  public async GetDataFromPaperCollectionLogClass(
    pobjPaperCollectionLogEN: clsPaperCollectionLogEN,
  ) {
    this.paperId = pobjPaperCollectionLogEN.paperId; // 论文Id
    this.meno = pobjPaperCollectionLogEN.meno; // 备注
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(lngPaperCollectionLogId: number): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = lngPaperCollectionLogId.toString();
    try {
      const objPaperCollectionLogEN = await PaperCollectionLog_GetObjByPaperCollectionLogIdAsync(
        lngPaperCollectionLogId,
      );
      if (objPaperCollectionLogEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromPaperCollectionLogClass(objPaperCollectionLogEN);
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
    const objPaperCollectionLogEN = new clsPaperCollectionLogEN();
    objPaperCollectionLogEN.SetPaperCollectionLogId(Number(this.keyId));
    await this.PutDataToPaperCollectionLogClass(objPaperCollectionLogEN);
    objPaperCollectionLogEN.sfUpdFldSetStr = objPaperCollectionLogEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objPaperCollectionLogEN.paperCollectionLogId == 0 ||
      objPaperCollectionLogEN.paperCollectionLogId == undefined
    ) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      PaperCollectionLog_CheckProperty4Update(objPaperCollectionLogEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objPaperCollectionLogEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await PaperCollectionLog_UpdateRecordAsync(objPaperCollectionLogEN);
      if (returnBool == true) {
        PaperCollectionLog_ReFreshCache(PaperCollectionLog_Edit.UpdUserCache);
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
  public set btnCancelPaperCollectionLog(value: string) {
    PaperCollectionLog_Edit.EditObj.SetButtonText('btnCancelPaperCollectionLog', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitPaperCollectionLog(): string {
    const strValue = PaperCollectionLog_Edit.EditObj.GetButtonText('btnSubmitPaperCollectionLog');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitPaperCollectionLog(value: string) {
    PaperCollectionLog_Edit.EditObj.SetButtonText('btnSubmitPaperCollectionLog', value);
  }
  /**
   * 备注 (Used In Clear())
   **/
  public set meno(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtMeno', value);
  }
  /**
   * 备注 (Used In PutDataToClass())
   **/
  public get meno(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtMeno');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 论文Id (Used In Clear())
   **/
  public set paperId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlPaperId', value);
  }
  /**
   * 论文Id (Used In PutDataToClass())
   **/
  public get paperId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlPaperId');
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
