/**
 * 类名:PaperSubRes_Edit(界面:PaperSubResCRUD)
 * 表名:PaperSubRes(01120963)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 01:44:48
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
import { PaperSubResType_BindDdl_PaperSubResTypeIdInDivCache } from '@/ts/L3ForWApi/ResourceMan/clsPaperSubResTypeWApi';
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
  PaperSubRes_CheckPropertyNew,
  PaperSubRes_AddNewRecordAsync,
  PaperSubRes_GetUniCondStr,
  PaperSubRes_IsExistRecordAsync,
  PaperSubRes_GetUniCondStr4Update,
  PaperSubRes_IsExistAsync,
  PaperSubRes_GetObjByPaperSubResIdAsync,
  PaperSubRes_CheckProperty4Update,
  PaperSubRes_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubResWApi';
import { paperSubResStore } from '@/store/modules/paperSubRes';
import { clsPaperSubResEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubResEN';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { PaperSubResTypeEx_BindDdl_PaperSubResTypeIdInDivCache } from '@/ts/L3ForWApiEx/ResourceMan/clsPaperSubResTypeExWApi';
/** PaperSubRes_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class PaperSubRes_Edit {
  protected _className = 'Unknown'; // 基类中的实际字段
  // 定义虚拟属性
  get className(): string {
    return this._className;
  }
  public static EditObj: any;
  public divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = 0;
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
  public static objPageEdit: PaperSubRes_Edit;
  public static objPageEdit2: PaperSubRes_Edit;
  public static objPageEdit3: PaperSubRes_Edit;

  public static IdCurrEduClsStatic = ''; //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
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
    if (PaperSubRes_Edit.SetPageEdit(this, 1) == true) return;
    if (PaperSubRes_Edit.SetPageEdit(this, 2) == true) return;
    if (PaperSubRes_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (PaperSubRes_Edit.objPageEdit == null) {
          PaperSubRes_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = PaperSubRes_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            PaperSubRes_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (PaperSubRes_Edit.objPageEdit2 == null) {
          PaperSubRes_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = PaperSubRes_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            PaperSubRes_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (PaperSubRes_Edit.objPageEdit3 == null) {
          PaperSubRes_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = PaperSubRes_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            PaperSubRes_Edit.objPageEdit3 = objDataLst;
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
    if (PaperSubRes_Edit.objPageEdit != null) {
      const strClassNameOld = PaperSubRes_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return PaperSubRes_Edit.objPageEdit;
    }
    if (PaperSubRes_Edit.objPageEdit2 != null) {
      const strClassNameOld = PaperSubRes_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return PaperSubRes_Edit.objPageEdit2;
    }
    if (PaperSubRes_Edit.objPageEdit3 != null) {
      const strClassNameOld = PaperSubRes_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return PaperSubRes_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_PaperSubRes() {
    if (PaperSubRes_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      PaperSubRes_Edit.EditObj.hideDialog();
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
  public async ShowDialog_PaperSubRes(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_PaperSubRes.name;
    if (PaperSubRes_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (PaperSubRes_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await PaperSubRes_Edit.EditObj.showDialog();
    }
    this.divEdit = PaperSubRes_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (PaperSubRes_Edit.times4TestShowDialog < 2) {
        PaperSubRes_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_PaperSubRes(strOp);
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
      PaperSubRes_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitPaperSubRes = '确认添加';
      this.btnCancelPaperSubRes = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitPaperSubRes = '确认修改';
      this.btnCancelPaperSubRes = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (PaperSubRes_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (PaperSubRes_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = PaperSubRes_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (PaperSubRes_Edit.times4TestShowDialog < 2) {
        PaperSubRes_Edit.times4TestShowDialog++;
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
      PaperSubRes_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_PaperSubRes(this.opType);
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
    await this.SetDdl_PaperSubResTypeIdInDiv(); //编辑区域
  }
  public async SetDdl_PaperSubResTypeIdInDiv() {
    await PaperSubResTypeEx_BindDdl_PaperSubResTypeIdInDivCache(
      this.divEdit,
      'ddlPaperSubResTypeId',
    ); //
  }
  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_PaperSubRes(this.opType);
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
      const bolIsSuccess = await this.ShowDialog_PaperSubRes(this.opType);
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
  public async btnUpdateRecord_Click(lngPaperSubResId: number) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (lngPaperSubResId == 0) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_PaperSubRes(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      const lngKeyId = lngPaperSubResId;
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
    const strCommandText: string = this.btnSubmitPaperSubRes;
    try {
      let returnBool = false;
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitPaperSubRes = '确认添加';
          this.btnCancelPaperSubRes = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            //const returnKeyId = await this.AddNewRecordWithMaxIdSave();
            //if (IsNullOrEmpty(returnKeyId) == false)
            //{
            //PaperSubRes_Edit.EditObj.hideDialog();
            //this.iShowList.BindGvCache(clsPaperSubResEN._CurrTabName, "");
            //}
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (PaperSubRes_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                PaperSubRes_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGvCache(clsPaperSubResEN._CurrTabName, this.keyId.toString());
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In PaperSubRes_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (PaperSubRes_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              PaperSubRes_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGvCache(clsPaperSubResEN._CurrTabName, this.keyId.toString());
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
    this.paperSubResName = '';
    this.filePath = '';
    this.memo = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlPaperSubResTypeId');
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucPaperSubResB1.paperSubResId = PaperSubResGetMaxStrId_S();
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    this.Clear();

    //this.paperSubResId = await PaperSubRes_GetMaxStrIdAsync();
  }

  /** 函1数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjPaperSubResEN">数据传输的目的类对象</param>
   **/
  public async PutDataToPaperSubResClass(pobjPaperSubResEN: clsPaperSubResEN) {
    pobjPaperSubResEN.SetPaperSubResName(this.paperSubResName); // 子资源名称
    pobjPaperSubResEN.SetFilePath(this.filePath); // 文件路径
    pobjPaperSubResEN.SetIdCurrEduCls(PaperSubRes_Edit.IdCurrEduClsStatic); // 教学班流水号
    pobjPaperSubResEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
    pobjPaperSubResEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjPaperSubResEN.SetMemo(this.memo); // 备注
    pobjPaperSubResEN.SetPaperSubResTypeId(this.paperSubResTypeId); // 论文子资源类型Id
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objPaperSubResEN = new clsPaperSubResEN();
    try {
      await this.PutDataToPaperSubResClass(objPaperSubResEN);
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
      PaperSubRes_CheckPropertyNew(objPaperSubResEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objPaperSubResEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      returnBool = await PaperSubRes_AddNewRecordAsync(objPaperSubResEN);
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
  public async CheckUniCond4Add(objPaperSubResEN: clsPaperSubResEN): Promise<boolean> {
    const strUniquenessCondition = PaperSubRes_GetUniCondStr(objPaperSubResEN);
    const bolIsExistCondition = await PaperSubRes_IsExistRecordAsync(strUniquenessCondition);
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
  public async CheckUniCond4Update(objPaperSubResEN: clsPaperSubResEN): Promise<boolean> {
    const strUniquenessCondition = PaperSubRes_GetUniCondStr4Update(objPaperSubResEN);
    const bolIsExistCondition = await PaperSubRes_IsExistRecordAsync(strUniquenessCondition);
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
   * @param lngPaperSubResId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(lngPaperSubResId: number) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objPaperSubResEN = new clsPaperSubResEN();
    try {
      const returnBool = await PaperSubRes_IsExistAsync(lngPaperSubResId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', lngPaperSubResId);
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
      const objPaperSubResENConst = await PaperSubRes_GetObjByPaperSubResIdAsync(lngPaperSubResId);
      if (objPaperSubResENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objPaperSubResEN = objPaperSubResENConst;
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
    this.GetDataFromPaperSubResClass(objPaperSubResEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjPaperSubResEN">表实体类对象</param>
   **/
  public async GetDataFromPaperSubResClass(pobjPaperSubResEN: clsPaperSubResEN) {
    this.paperSubResName = pobjPaperSubResEN.paperSubResName; // 子资源名称
    this.filePath = pobjPaperSubResEN.filePath; // 文件路径
    this.memo = pobjPaperSubResEN.memo; // 备注
    this.paperSubResTypeId = pobjPaperSubResEN.paperSubResTypeId; // 论文子资源类型Id
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(lngPaperSubResId: number): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = lngPaperSubResId;
    try {
      const objPaperSubResEN = await PaperSubRes_GetObjByPaperSubResIdAsync(lngPaperSubResId);
      if (objPaperSubResEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromPaperSubResClass(objPaperSubResEN);
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
    const objPaperSubResEN = new clsPaperSubResEN();
    objPaperSubResEN.SetPaperSubResId(Number(this.keyId));
    await this.PutDataToPaperSubResClass(objPaperSubResEN);
    objPaperSubResEN.sfUpdFldSetStr = objPaperSubResEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperSubResEN.paperSubResId == 0 || objPaperSubResEN.paperSubResId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      PaperSubRes_CheckProperty4Update(objPaperSubResEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objPaperSubResEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await PaperSubRes_UpdateRecordAsync(objPaperSubResEN);
      if (returnBool == true) {
        await paperSubResStore.delObj(objPaperSubResEN.paperSubResId);
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
  public set btnCancelPaperSubRes(value: string) {
    PaperSubRes_Edit.EditObj.SetButtonText('btnCancelPaperSubRes', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitPaperSubRes(): string {
    const strValue = PaperSubRes_Edit.EditObj.GetButtonText('btnSubmitPaperSubRes');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitPaperSubRes(value: string) {
    PaperSubRes_Edit.EditObj.SetButtonText('btnSubmitPaperSubRes', value);
  }
  /**
   * 文件路径 (Used In Clear())
   **/
  public set filePath(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtFilePath', value);
  }
  /**
   * 文件路径 (Used In PutDataToClass())
   **/
  public get filePath(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtFilePath');
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
   * 子资源名称 (Used In Clear())
   **/
  public set paperSubResName(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPaperSubResName', value);
  }
  /**
   * 子资源名称 (Used In PutDataToClass())
   **/
  public get paperSubResName(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPaperSubResName');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 论文子资源类型Id (Used In Clear())
   **/
  public set paperSubResTypeId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlPaperSubResTypeId', value);
  }
  /**
   * 论文子资源类型Id (Used In PutDataToClass())
   **/
  public get paperSubResTypeId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlPaperSubResTypeId');
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
   * 修改用户Id (Used In PutDataToClass())
   **/
  public get updUserId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtUpdUserId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
}
