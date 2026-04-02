/**
 * 类名:gs_PaperVer_Edit(界面:gs_PaperVerCRUD)
 * 表名:gs_PaperVer(01120678)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/19 16:57:26
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
import { CurrEduCls_BindDdl_IdCurrEduClsByCourseIdInDivCache } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
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
  gs_PaperVer_CheckPropertyNew,
  gs_PaperVer_AddNewRecordAsync,
  gs_PaperVer_GetUniCondStr,
  gs_PaperVer_IsExistRecordAsync,
  gs_PaperVer_GetUniCondStr4Update,
  gs_PaperVer_IsExistAsync,
  gs_PaperVer_GetObjByPaperVIdAsync,
  gs_PaperVer_CheckProperty4Update,
  gs_PaperVer_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperVerWApi';
import { clsgs_PaperVerEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperVerEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** gs_PaperVer_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class gs_PaperVer_Edit {
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
  public static objPageEdit: gs_PaperVer_Edit;
  public static objPageEdit2: gs_PaperVer_Edit;
  public static objPageEdit3: gs_PaperVer_Edit;

  public static CourseIdStatic = ''; //7、在查询区定义下拉框条件变量1
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
    if (gs_PaperVer_Edit.SetPageEdit(this, 1) == true) return;
    if (gs_PaperVer_Edit.SetPageEdit(this, 2) == true) return;
    if (gs_PaperVer_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (gs_PaperVer_Edit.objPageEdit == null) {
          gs_PaperVer_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = gs_PaperVer_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            gs_PaperVer_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (gs_PaperVer_Edit.objPageEdit2 == null) {
          gs_PaperVer_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = gs_PaperVer_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            gs_PaperVer_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (gs_PaperVer_Edit.objPageEdit3 == null) {
          gs_PaperVer_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = gs_PaperVer_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            gs_PaperVer_Edit.objPageEdit3 = objDataLst;
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
    if (gs_PaperVer_Edit.objPageEdit != null) {
      const strClassNameOld = gs_PaperVer_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return gs_PaperVer_Edit.objPageEdit;
    }
    if (gs_PaperVer_Edit.objPageEdit2 != null) {
      const strClassNameOld = gs_PaperVer_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return gs_PaperVer_Edit.objPageEdit2;
    }
    if (gs_PaperVer_Edit.objPageEdit3 != null) {
      const strClassNameOld = gs_PaperVer_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return gs_PaperVer_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_gs_PaperVer() {
    if (gs_PaperVer_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      gs_PaperVer_Edit.EditObj.hideDialog();
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
  public async ShowDialog_gs_PaperVer(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_gs_PaperVer.name;
    if (gs_PaperVer_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (gs_PaperVer_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await gs_PaperVer_Edit.EditObj.showDialog();
    }
    this.divEdit = gs_PaperVer_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (gs_PaperVer_Edit.times4TestShowDialog < 2) {
        gs_PaperVer_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_gs_PaperVer(strOp);
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
      gs_PaperVer_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitgs_PaperVer = '确认添加';
      this.btnCancelgs_PaperVer = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitgs_PaperVer = '确认修改';
      this.btnCancelgs_PaperVer = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (gs_PaperVer_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (gs_PaperVer_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = gs_PaperVer_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (gs_PaperVer_Edit.times4TestShowDialog < 2) {
        gs_PaperVer_Edit.times4TestShowDialog++;
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
      gs_PaperVer_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_gs_PaperVer(this.opType);
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
    const IdCurrEduClsStatic = gs_PaperVer_Edit.IdCurrEduClsStatic; //静态变量;//静态变量

    await this.SetDdl_PaperIdInDiv(IdCurrEduClsStatic); //编辑区域

    await this.SetDdl_IdCurrEduClsInDiv(IdCurrEduClsStatic); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_gs_PaperVer(this.opType);
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
      const bolIsSuccess = await this.ShowDialog_gs_PaperVer(this.opType);
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
  public async btnUpdateRecord_Click(lngPaperVId: number) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (lngPaperVId == 0) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_gs_PaperVer(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      const lngKeyId = lngPaperVId;
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
    const strCommandText: string = this.btnSubmitgs_PaperVer;
    try {
      let returnBool = false;
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitgs_PaperVer = '确认添加';
          this.btnCancelgs_PaperVer = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            //const returnKeyId = await this.AddNewRecordWithMaxIdSave();
            //if (IsNullOrEmpty(returnKeyId) == false)
            //{
            //gs_PaperVer_Edit.EditObj.hideDialog();
            //this.iShowList.BindGvCache(clsgs_PaperVerEN._CurrTabName, "");
            //}
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (gs_PaperVer_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                gs_PaperVer_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGv(clsgs_PaperVerEN._CurrTabName, this.keyId.toString());
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In gs_PaperVer_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (gs_PaperVer_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              gs_PaperVer_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGv(clsgs_PaperVerEN._CurrTabName, this.keyId.toString());
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
    this.paperTitle = '';
    this.paperContent = '';
    this.periodical = '';
    this.author = '';
    this.researchQuestion = '';
    this.keyword = '';
    this.literatureSources = '';
    this.literatureLink = '';
    this.uploadfileUrl = '';
    this.isQuotethesis = false;
    this.isSubmit = false;
    this.isChecked = false;
    this.quoteId = '';
    this.checker = '';
    this.literatureTypeId = '';
    this.updUser = '';
    this.updDate = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdCurrEduCls');
    this.paperTypeId = '';
    this.paperStatusId = '';
    this.memo = '';
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucgs_PaperVerB1.paperVId = gs_PaperVerGetMaxStrId_S();
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    this.Clear();

    //this.paperVId = await gs_PaperVer_GetMaxStrIdAsync();
  }

  /** 函1数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjgs_PaperVerEN">数据传输的目的类对象</param>
   **/
  public async PutDataTogs_PaperVerClass(pobjgs_PaperVerEN: clsgs_PaperVerEN) {
    pobjgs_PaperVerEN.SetPaperId(this.paperId); // 论文Id
    pobjgs_PaperVerEN.SetPaperTitle(this.paperTitle); // 论文标题
    pobjgs_PaperVerEN.SetPaperContent(this.paperContent); // 主题内容
    pobjgs_PaperVerEN.SetPeriodical(this.periodical); // 期刊
    pobjgs_PaperVerEN.SetAuthor(this.author); // 作者
    pobjgs_PaperVerEN.SetResearchQuestion(this.researchQuestion); // 研究问题
    pobjgs_PaperVerEN.SetKeyword(this.keyword); // 关键字
    pobjgs_PaperVerEN.SetLiteratureSources(this.literatureSources); // 文献来源
    pobjgs_PaperVerEN.SetLiteratureLink(this.literatureLink); // 文献链接
    pobjgs_PaperVerEN.SetUploadfileUrl(this.uploadfileUrl); // 文件地址
    pobjgs_PaperVerEN.SetIsQuotethesis(this.isQuotethesis); // 是否引用论文
    pobjgs_PaperVerEN.SetIsSubmit(this.isSubmit); // 是否提交
    pobjgs_PaperVerEN.SetIsChecked(this.isChecked); // 是否检查
    pobjgs_PaperVerEN.SetQuoteId(this.quoteId); // 引用Id
    pobjgs_PaperVerEN.SetChecker(this.checker); // 审核人
    pobjgs_PaperVerEN.SetLiteratureTypeId(this.literatureTypeId); // 作文类型Id
    pobjgs_PaperVerEN.SetUpdUser(this.updUser); // 修改人
    pobjgs_PaperVerEN.SetUpdDate(this.updDate); // 修改日期
    pobjgs_PaperVerEN.SetIdCurrEduCls(this.idCurrEduCls); // 教学班流水号
    pobjgs_PaperVerEN.SetPaperTypeId(this.paperTypeId); // 论文类型Id
    pobjgs_PaperVerEN.SetPaperStatusId(this.paperStatusId); // 论文状态Id
    pobjgs_PaperVerEN.SetMemo(this.memo); // 备注
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objgs_PaperVerEN = new clsgs_PaperVerEN();
    try {
      await this.PutDataTogs_PaperVerClass(objgs_PaperVerEN);
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
      gs_PaperVer_CheckPropertyNew(objgs_PaperVerEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objgs_PaperVerEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      returnBool = await gs_PaperVer_AddNewRecordAsync(objgs_PaperVerEN);
      if (returnBool == true) {
        //gs_PaperVer_ReFreshCache();
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
  public async CheckUniCond4Add(objgs_PaperVerEN: clsgs_PaperVerEN): Promise<boolean> {
    const strUniquenessCondition = gs_PaperVer_GetUniCondStr(objgs_PaperVerEN);
    const bolIsExistCondition = await gs_PaperVer_IsExistRecordAsync(strUniquenessCondition);
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
  public async CheckUniCond4Update(objgs_PaperVerEN: clsgs_PaperVerEN): Promise<boolean> {
    const strUniquenessCondition = gs_PaperVer_GetUniCondStr4Update(objgs_PaperVerEN);
    const bolIsExistCondition = await gs_PaperVer_IsExistRecordAsync(strUniquenessCondition);
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
   * @param lngPaperVId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(lngPaperVId: number) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objgs_PaperVerEN = new clsgs_PaperVerEN();
    try {
      const returnBool = await gs_PaperVer_IsExistAsync(lngPaperVId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', lngPaperVId);
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
      const objgs_PaperVerENConst = await gs_PaperVer_GetObjByPaperVIdAsync(lngPaperVId);
      if (objgs_PaperVerENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objgs_PaperVerEN = objgs_PaperVerENConst;
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
    this.GetDataFromgs_PaperVerClass(objgs_PaperVerEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjgs_PaperVerEN">表实体类对象</param>
   **/
  public async GetDataFromgs_PaperVerClass(pobjgs_PaperVerEN: clsgs_PaperVerEN) {
    this.paperId = pobjgs_PaperVerEN.paperId; // 论文Id
    this.paperTitle = pobjgs_PaperVerEN.paperTitle; // 论文标题
    this.paperContent = pobjgs_PaperVerEN.paperContent; // 主题内容
    this.periodical = pobjgs_PaperVerEN.periodical; // 期刊
    this.author = pobjgs_PaperVerEN.author; // 作者
    this.researchQuestion = pobjgs_PaperVerEN.researchQuestion; // 研究问题
    this.keyword = pobjgs_PaperVerEN.keyword; // 关键字
    this.literatureSources = pobjgs_PaperVerEN.literatureSources; // 文献来源
    this.literatureLink = pobjgs_PaperVerEN.literatureLink; // 文献链接
    this.uploadfileUrl = pobjgs_PaperVerEN.uploadfileUrl; // 文件地址
    this.isQuotethesis = pobjgs_PaperVerEN.isQuotethesis; // 是否引用论文
    this.isSubmit = pobjgs_PaperVerEN.isSubmit; // 是否提交
    this.isChecked = pobjgs_PaperVerEN.isChecked; // 是否检查
    this.quoteId = pobjgs_PaperVerEN.quoteId; // 引用Id
    this.checker = pobjgs_PaperVerEN.checker; // 审核人
    this.literatureTypeId = pobjgs_PaperVerEN.literatureTypeId; // 作文类型Id
    this.updUser = pobjgs_PaperVerEN.updUser; // 修改人
    this.updDate = pobjgs_PaperVerEN.updDate; // 修改日期
    this.idCurrEduCls = pobjgs_PaperVerEN.idCurrEduCls; // 教学班流水号
    this.paperTypeId = pobjgs_PaperVerEN.paperTypeId; // 论文类型Id
    this.paperStatusId = pobjgs_PaperVerEN.paperStatusId; // 论文状态Id
    this.memo = pobjgs_PaperVerEN.memo; // 备注
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(lngPaperVId: number): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = lngPaperVId;
    try {
      const objgs_PaperVerEN = await gs_PaperVer_GetObjByPaperVIdAsync(lngPaperVId);
      if (objgs_PaperVerEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromgs_PaperVerClass(objgs_PaperVerEN);
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
    const objgs_PaperVerEN = new clsgs_PaperVerEN();
    objgs_PaperVerEN.SetPaperVId(Number(this.keyId));
    await this.PutDataTogs_PaperVerClass(objgs_PaperVerEN);
    objgs_PaperVerEN.sfUpdFldSetStr = objgs_PaperVerEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objgs_PaperVerEN.paperVId == 0 || objgs_PaperVerEN.paperVId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      gs_PaperVer_CheckProperty4Update(objgs_PaperVerEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objgs_PaperVerEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await gs_PaperVer_UpdateRecordAsync(objgs_PaperVerEN);
      if (returnBool == true) {
        //gs_PaperVer_ReFreshCache();
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
   * 作者 (Used In Clear())
   **/
  public set author(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtAuthor', value);
  }
  /**
   * 作者 (Used In PutDataToClass())
   **/
  public get author(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtAuthor');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   **/
  public set btnCancelgs_PaperVer(value: string) {
    gs_PaperVer_Edit.EditObj.SetButtonText('btnCancelgs_PaperVer', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitgs_PaperVer(): string {
    const strValue = gs_PaperVer_Edit.EditObj.GetButtonText('btnSubmitgs_PaperVer');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitgs_PaperVer(value: string) {
    gs_PaperVer_Edit.EditObj.SetButtonText('btnSubmitgs_PaperVer', value);
  }
  /**
   * 审核人 (Used In Clear())
   **/
  public set checker(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtChecker', value);
  }
  /**
   * 审核人 (Used In PutDataToClass())
   **/
  public get checker(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtChecker');
    if (strValue == undefined) return '';
    else return strValue.toString();
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
   * 是否检查 (Used In Clear())
   **/
  public set isChecked(value: boolean) {
    SetCheckBoxValueByIdInDivObj(this.divEdit, 'chkIsChecked', value);
  }
  /**
   * 是否检查 (Used In PutDataToClass())
   **/
  public get isChecked(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(this.divEdit, 'chkIsChecked');
    return bolValue;
  }
  /**
   * 是否引用论文 (Used In Clear())
   **/
  public set isQuotethesis(value: boolean) {
    SetCheckBoxValueByIdInDivObj(this.divEdit, 'chkIsQuotethesis', value);
  }
  /**
   * 是否引用论文 (Used In PutDataToClass())
   **/
  public get isQuotethesis(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(this.divEdit, 'chkIsQuotethesis');
    return bolValue;
  }
  /**
   * 是否提交 (Used In Clear())
   **/
  public set isSubmit(value: boolean) {
    SetCheckBoxValueByIdInDivObj(this.divEdit, 'chkIsSubmit', value);
  }
  /**
   * 是否提交 (Used In PutDataToClass())
   **/
  public get isSubmit(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(this.divEdit, 'chkIsSubmit');
    return bolValue;
  }
  /**
   * 关键字 (Used In Clear())
   **/
  public set keyword(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtKeyword', value);
  }
  /**
   * 关键字 (Used In PutDataToClass())
   **/
  public get keyword(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtKeyword');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 文献链接 (Used In Clear())
   **/
  public set literatureLink(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtLiteratureLink', value);
  }
  /**
   * 文献链接 (Used In PutDataToClass())
   **/
  public get literatureLink(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtLiteratureLink');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 文献来源 (Used In Clear())
   **/
  public set literatureSources(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtLiteratureSources', value);
  }
  /**
   * 文献来源 (Used In PutDataToClass())
   **/
  public get literatureSources(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtLiteratureSources');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 文献类型Id (Used In Clear())
   **/
  public set literatureTypeId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtLiteratureTypeId', value);
  }
  /**
   * 文献类型Id (Used In PutDataToClass())
   **/
  public get literatureTypeId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtLiteratureTypeId');
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
   * 主题内容 (Used In Clear())
   **/
  public set paperContent(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPaperContent', value);
  }
  /**
   * 主题内容 (Used In PutDataToClass())
   **/
  public get paperContent(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPaperContent');
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
   * 论文状态Id (Used In Clear())
   **/
  public set paperStatusId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPaperStatusId', value);
  }
  /**
   * 论文状态Id (Used In PutDataToClass())
   **/
  public get paperStatusId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPaperStatusId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 论文标题 (Used In Clear())
   **/
  public set paperTitle(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPaperTitle', value);
  }
  /**
   * 论文标题 (Used In PutDataToClass())
   **/
  public get paperTitle(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPaperTitle');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 论文类型Id (Used In Clear())
   **/
  public set paperTypeId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPaperTypeId', value);
  }
  /**
   * 论文类型Id (Used In PutDataToClass())
   **/
  public get paperTypeId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPaperTypeId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 期刊 (Used In Clear())
   **/
  public set periodical(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPeriodical', value);
  }
  /**
   * 期刊 (Used In PutDataToClass())
   **/
  public get periodical(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPeriodical');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 引用Id (Used In Clear())
   **/
  public set quoteId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtQuoteId', value);
  }
  /**
   * 引用Id (Used In PutDataToClass())
   **/
  public get quoteId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtQuoteId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 研究问题 (Used In Clear())
   **/
  public set researchQuestion(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtResearchQuestion', value);
  }
  /**
   * 研究问题 (Used In PutDataToClass())
   **/
  public get researchQuestion(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtResearchQuestion');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 修改日期 (Used In Clear())
   **/
  public set updDate(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtUpdDate', value);
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
   * 修改人 (Used In Clear())
   **/
  public set updUser(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtUpdUser', value);
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
   * 文件地址 (Used In Clear())
   **/
  public set uploadfileUrl(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtUploadfileUrl', value);
  }
  /**
   * 文件地址 (Used In PutDataToClass())
   **/
  public get uploadfileUrl(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtUploadfileUrl');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
}
