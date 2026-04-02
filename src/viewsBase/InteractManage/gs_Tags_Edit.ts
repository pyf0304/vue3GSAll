/**
 * 类名:gs_Tags_Edit(界面:gs_TagsCRUD)
 * 表名:gs_Tags(01120714)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/23 00:52:49
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:互动管理(InteractManage)
 * 框架-层名:Vue_编辑区后台_TS(TS)(Vue_ViewScript_EditCS_TS)
 * 编程语言:TypeScript
 **/
import $ from 'jquery';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { CurrEduCls_BindDdl_IdCurrEduClsByCourseIdInDivCache } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { PaperEduClsRelaEx_BindDdl_PaperIdByIdCurrEduClsInDivCache } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperEduClsRelaExWApi';
import { gs_TagsType_BindDdl_TagsTypeIdInDivCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_TagsTypeWApi';
import {
  ClearSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetSelectValueInDivObj,
  SetTextAreaValueInDivObj,
  GetTextAreaValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  gs_Tags_GetMaxStrIdAsync,
  gs_Tags_CheckPropertyNew,
  gs_Tags_AddNewRecordWithMaxIdAsync,
  gs_Tags_GetUniCondStr,
  gs_Tags_IsExistRecordAsync,
  gs_Tags_GetUniCondStr4Update,
  gs_Tags_IsExistAsync,
  gs_Tags_GetObjByTagsIdAsync,
  gs_Tags_CheckProperty4Update,
  gs_Tags_UpdateRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsgs_TagsWApi';
import { clsgs_TagsEN } from '@/ts/L0Entity/InteractManage/clsgs_TagsEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** gs_Tags_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class gs_Tags_Edit {
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
  public static objPageEdit: gs_Tags_Edit;
  public static objPageEdit2: gs_Tags_Edit;
  public static objPageEdit3: gs_Tags_Edit;

  public static CourseIdStatic = ''; //6、定义下拉框条件变量1
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
    if (gs_Tags_Edit.SetPageEdit(this, 1) == true) return;
    if (gs_Tags_Edit.SetPageEdit(this, 2) == true) return;
    if (gs_Tags_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (gs_Tags_Edit.objPageEdit == null) {
          gs_Tags_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = gs_Tags_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            gs_Tags_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (gs_Tags_Edit.objPageEdit2 == null) {
          gs_Tags_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = gs_Tags_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            gs_Tags_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (gs_Tags_Edit.objPageEdit3 == null) {
          gs_Tags_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = gs_Tags_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            gs_Tags_Edit.objPageEdit3 = objDataLst;
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
    if (gs_Tags_Edit.objPageEdit != null) {
      const strClassNameOld = gs_Tags_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return gs_Tags_Edit.objPageEdit;
    }
    if (gs_Tags_Edit.objPageEdit2 != null) {
      const strClassNameOld = gs_Tags_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return gs_Tags_Edit.objPageEdit2;
    }
    if (gs_Tags_Edit.objPageEdit3 != null) {
      const strClassNameOld = gs_Tags_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return gs_Tags_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_gs_Tags() {
    if (gs_Tags_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      gs_Tags_Edit.EditObj.hideDialog();
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
  public async ShowDialog_gs_Tags(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_gs_Tags.name;
    if (gs_Tags_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (gs_Tags_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await gs_Tags_Edit.EditObj.showDialog();
    }
    this.divEdit = gs_Tags_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (gs_Tags_Edit.times4TestShowDialog < 2) {
        gs_Tags_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_gs_Tags(strOp);
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
      gs_Tags_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitgs_Tags = '确认添加';
      this.btnCancelgs_Tags = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitgs_Tags = '确认修改';
      this.btnCancelgs_Tags = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (gs_Tags_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (gs_Tags_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = gs_Tags_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (gs_Tags_Edit.times4TestShowDialog < 2) {
        gs_Tags_Edit.times4TestShowDialog++;
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
      gs_Tags_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_gs_Tags(this.opType);
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
    const CourseIdStatic = gs_Tags_Edit.CourseIdStatic; //静态变量;//静态变量
    const IdCurrEduClsStatic = gs_Tags_Edit.IdCurrEduClsStatic; //静态变量;//静态变量

    await this.SetDdl_IdCurrEduClsInDiv(CourseIdStatic); //编辑区域

    await this.SetDdl_PaperIdInDiv(IdCurrEduClsStatic); //编辑区域

    await this.SetDdl_TagsTypeIdInDiv(); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_gs_Tags(this.opType);
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
    await PaperEduClsRelaEx_BindDdl_PaperIdByIdCurrEduClsInDivCache(
      this.divEdit,
      'ddlPaperId',
      strIdCurrEduCls,
    ); //
  }

  /**
   * 设置绑定下拉框，针对字段:[TagsTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_TagsTypeIdInDiv() {
    await gs_TagsType_BindDdl_TagsTypeIdInDivCache(this.divEdit, 'ddlTagsTypeId'); //
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
      const bolIsSuccess = await this.ShowDialog_gs_Tags(this.opType);
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
  public async btnUpdateRecord_Click(strTagsId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(strTagsId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_gs_Tags(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      const update = await this.UpdateRecord(strTagsId);
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
    const strCommandText: string = this.btnSubmitgs_Tags;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitgs_Tags = '确认添加';
          this.btnCancelgs_Tags = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (gs_Tags_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_gs_Tags();
              this.iShowList.BindGv(clsgs_TagsEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (gs_Tags_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                gs_Tags_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGv(clsgs_TagsEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In gs_Tags_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (gs_Tags_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              gs_Tags_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGv(clsgs_TagsEN._CurrTabName, this.keyId);
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
    $('#txtTagsId').attr('ReadOnly', bolReadonly.toString());
  }

  /**
   * 清除用户自定义控件中,所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    this.tagsId = '';
    this.tagsContent = '';
    this.pdfContent = '';
    this.pdfPageNum = 0;
    this.voteCount = 0;
    this.orderNum = 0;
    this.updUser = '';
    this.updDate = '';
    this.pdfLineNum = 0;
    this.pdfX = '';
    this.pdfY = '';
    this.memo = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdCurrEduCls');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlPaperId');
    this.shareId = '';
    this.pdfPageNumIn = '';
    this.pdfPageTop = 0;
    this.pdfDivLet = '';
    this.pdfDivTop = '';
    this.pdfZoom = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlTagsTypeId');
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucgs_TagsB1.tagsId = gs_TagsGetMaxStrId_S();
    try {
      const returnString = await gs_Tags_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表gs_Tags的最大关键字为空,不成功,请检查!');
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

    //this.tagsId = await gs_Tags_GetMaxStrIdAsync();
    try {
      const returnString = await gs_Tags_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表gs_Tags的最大关键字为空,不成功,请检查!');
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
   * @param pobjgs_TagsEN">数据传输的目的类对象</param>
   **/
  public async PutDataTogs_TagsClass(pobjgs_TagsEN: clsgs_TagsEN) {
    pobjgs_TagsEN.SetTagsId(this.tagsId); // 标注Id
    pobjgs_TagsEN.SetTagsContent(this.tagsContent); // 标注内容
    pobjgs_TagsEN.SetPdfContent(this.pdfContent); // Pdf内容
    pobjgs_TagsEN.SetPdfPageNum(this.pdfPageNum); // Pdf页码
    pobjgs_TagsEN.SetVoteCount(this.voteCount); // 点赞计数
    pobjgs_TagsEN.SetOrderNum(this.orderNum); // 序号
    pobjgs_TagsEN.SetUpdUser(this.updUser); // 修改人
    pobjgs_TagsEN.SetUpdDate(this.updDate); // 修改日期
    pobjgs_TagsEN.SetPdfLineNum(this.pdfLineNum); // pdf行号
    pobjgs_TagsEN.SetPdfX(this.pdfX); // PdfX
    pobjgs_TagsEN.SetPdfY(this.pdfY); // PdfY
    pobjgs_TagsEN.SetMemo(this.memo); // 备注
    pobjgs_TagsEN.SetIdCurrEduCls(this.idCurrEduCls); // 教学班
    pobjgs_TagsEN.SetPaperId(this.paperId); // 论文
    pobjgs_TagsEN.SetShareId(this.shareId); // 分享Id
    pobjgs_TagsEN.SetPdfPageNumIn(this.pdfPageNumIn); // PdfPageNumIn
    pobjgs_TagsEN.SetPdfPageTop(this.pdfPageTop); // pdf页面顶部位置
    pobjgs_TagsEN.SetPdfDivLet(this.pdfDivLet); // PdfDivLet
    pobjgs_TagsEN.SetPdfDivTop(this.pdfDivTop); // PdfDivTop
    pobjgs_TagsEN.SetPdfZoom(this.pdfZoom); // PdfZoom
    pobjgs_TagsEN.SetTagsTypeId(this.tagsTypeId); // 标注类型ID
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objgs_TagsEN = new clsgs_TagsEN();
    try {
      await this.PutDataTogs_TagsClass(objgs_TagsEN);
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
      gs_Tags_CheckPropertyNew(objgs_TagsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objgs_TagsEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      const returnKeyId = await gs_Tags_AddNewRecordWithMaxIdAsync(objgs_TagsEN);
      if (IsNullOrEmpty(returnKeyId) == false) {
        this.keyId = returnKeyId;
        returnBool = true;
      }
      if (returnBool == true) {
        //gs_Tags_ReFreshCache();
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
  public async CheckUniCond4Add(objgs_TagsEN: clsgs_TagsEN): Promise<boolean> {
    const strUniquenessCondition = gs_Tags_GetUniCondStr(objgs_TagsEN);
    const bolIsExistCondition = await gs_Tags_IsExistRecordAsync(strUniquenessCondition);
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
  public async CheckUniCond4Update(objgs_TagsEN: clsgs_TagsEN): Promise<boolean> {
    const strUniquenessCondition = gs_Tags_GetUniCondStr4Update(objgs_TagsEN);
    const bolIsExistCondition = await gs_Tags_IsExistRecordAsync(strUniquenessCondition);
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
    const objgs_TagsEN = new clsgs_TagsEN();
    try {
      await this.PutDataTogs_TagsClass(objgs_TagsEN);
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
      gs_Tags_CheckPropertyNew(objgs_TagsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objgs_TagsEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const responseKeyId = await gs_Tags_AddNewRecordWithMaxIdAsync(objgs_TagsEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //gs_Tags_ReFreshCache();
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
   * @param strTagsId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(strTagsId: string) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objgs_TagsEN = new clsgs_TagsEN();
    try {
      const returnBool = await gs_Tags_IsExistAsync(strTagsId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strTagsId);
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
      const objgs_TagsENConst = await gs_Tags_GetObjByTagsIdAsync(strTagsId);
      if (objgs_TagsENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objgs_TagsEN = objgs_TagsENConst;
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
    this.GetDataFromgs_TagsClass(objgs_TagsEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjgs_TagsEN">表实体类对象</param>
   **/
  public async GetDataFromgs_TagsClass(pobjgs_TagsEN: clsgs_TagsEN) {
    this.tagsId = pobjgs_TagsEN.tagsId; // 标注Id
    this.tagsContent = pobjgs_TagsEN.tagsContent; // 标注内容
    this.pdfContent = pobjgs_TagsEN.pdfContent; // Pdf内容
    this.pdfPageNum = pobjgs_TagsEN.pdfPageNum; // Pdf页码
    this.voteCount = pobjgs_TagsEN.voteCount; // 点赞计数
    this.orderNum = pobjgs_TagsEN.orderNum; // 序号
    this.updUser = pobjgs_TagsEN.updUser; // 修改人
    this.updDate = pobjgs_TagsEN.updDate; // 修改日期
    this.pdfLineNum = pobjgs_TagsEN.pdfLineNum; // pdf行号
    this.pdfX = pobjgs_TagsEN.pdfX; // PdfX
    this.pdfY = pobjgs_TagsEN.pdfY; // PdfY
    this.memo = pobjgs_TagsEN.memo; // 备注
    this.idCurrEduCls = pobjgs_TagsEN.idCurrEduCls; // 教学班
    this.paperId = pobjgs_TagsEN.paperId; // 论文
    this.shareId = pobjgs_TagsEN.shareId; // 分享Id
    this.pdfPageNumIn = pobjgs_TagsEN.pdfPageNumIn; // PdfPageNumIn
    this.pdfPageTop = pobjgs_TagsEN.pdfPageTop; // pdf页面顶部位置
    this.pdfDivLet = pobjgs_TagsEN.pdfDivLet; // PdfDivLet
    this.pdfDivTop = pobjgs_TagsEN.pdfDivTop; // PdfDivTop
    this.pdfZoom = pobjgs_TagsEN.pdfZoom; // PdfZoom
    this.tagsTypeId = pobjgs_TagsEN.tagsTypeId; // 标注类型ID
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strTagsId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strTagsId;
    try {
      const objgs_TagsEN = await gs_Tags_GetObjByTagsIdAsync(strTagsId);
      if (objgs_TagsEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromgs_TagsClass(objgs_TagsEN);
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
    const objgs_TagsEN = new clsgs_TagsEN();
    objgs_TagsEN.SetTagsId(this.keyId);
    await this.PutDataTogs_TagsClass(objgs_TagsEN);
    objgs_TagsEN.sfUpdFldSetStr = objgs_TagsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objgs_TagsEN.tagsId == '' || objgs_TagsEN.tagsId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      gs_Tags_CheckProperty4Update(objgs_TagsEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objgs_TagsEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await gs_Tags_UpdateRecordAsync(objgs_TagsEN);
      if (returnBool == true) {
        //gs_Tags_ReFreshCache();
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
  public set btnCancelgs_Tags(value: string) {
    gs_Tags_Edit.EditObj.SetButtonText('btnCancelgs_Tags', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitgs_Tags(): string {
    const strValue = gs_Tags_Edit.EditObj.GetButtonText('btnSubmitgs_Tags');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitgs_Tags(value: string) {
    gs_Tags_Edit.EditObj.SetButtonText('btnSubmitgs_Tags', value);
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
   * 序号 (Used In Clear())
   **/
  public set orderNum(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtOrderNum', value !== null ? value.toString() : '');
  }
  /**
   * 序号 (Used In PutDataToClass())
   **/
  public get orderNum(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtOrderNum');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
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
   * Pdf内容 (Used In Clear())
   **/
  public set pdfContent(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPdfContent', value);
  }
  /**
   * Pdf内容 (Used In PutDataToClass())
   **/
  public get pdfContent(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPdfContent');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * PdfDivLet (Used In Clear())
   **/
  public set pdfDivLet(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPdfDivLet', value);
  }
  /**
   * PdfDivLet (Used In PutDataToClass())
   **/
  public get pdfDivLet(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPdfDivLet');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * PdfDivTop (Used In Clear())
   **/
  public set pdfDivTop(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPdfDivTop', value);
  }
  /**
   * PdfDivTop (Used In PutDataToClass())
   **/
  public get pdfDivTop(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPdfDivTop');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * pdf行号 (Used In Clear())
   **/
  public set pdfLineNum(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtPdfLineNum', value !== null ? value.toString() : '');
  }
  /**
   * pdf行号 (Used In PutDataToClass())
   **/
  public get pdfLineNum(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPdfLineNum');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * Pdf页码 (Used In Clear())
   **/
  public set pdfPageNum(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtPdfPageNum', value !== null ? value.toString() : '');
  }
  /**
   * Pdf页码 (Used In PutDataToClass())
   **/
  public get pdfPageNum(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPdfPageNum');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * PdfPageNumIn (Used In Clear())
   **/
  public set pdfPageNumIn(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPdfPageNumIn', value);
  }
  /**
   * PdfPageNumIn (Used In PutDataToClass())
   **/
  public get pdfPageNumIn(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPdfPageNumIn');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * pdf页面顶部位置 (Used In Clear())
   **/
  public set pdfPageTop(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtPdfPageTop', value !== null ? value.toString() : '');
  }
  /**
   * pdf页面顶部位置 (Used In PutDataToClass())
   **/
  public get pdfPageTop(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPdfPageTop');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * PdfX (Used In Clear())
   **/
  public set pdfX(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPdfX', value);
  }
  /**
   * PdfX (Used In PutDataToClass())
   **/
  public get pdfX(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPdfX');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * PdfY (Used In Clear())
   **/
  public set pdfY(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPdfY', value);
  }
  /**
   * PdfY (Used In PutDataToClass())
   **/
  public get pdfY(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPdfY');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * PdfZoom (Used In Clear())
   **/
  public set pdfZoom(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPdfZoom', value);
  }
  /**
   * PdfZoom (Used In PutDataToClass())
   **/
  public get pdfZoom(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPdfZoom');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 分享Id (Used In Clear())
   **/
  public set shareId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtShareId', value);
  }
  /**
   * 分享Id (Used In PutDataToClass())
   **/
  public get shareId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtShareId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 标注内容 (Used In Clear())
   **/
  public set tagsContent(value: string) {
    SetTextAreaValueInDivObj(this.divEdit, 'txtTagsContent', value);
  }
  /**
   * 标注内容 (Used In PutDataToClass())
   **/
  public get tagsContent(): string {
    const strValue = GetTextAreaValueInDivObj(this.divEdit, 'txtTagsContent');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 标注Id (Used In Clear())
   **/
  public set tagsId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtTagsId', value);
  }
  /**
   * 标注Id (Used In PutDataToClass())
   **/
  public get tagsId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtTagsId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 标注类型ID (Used In Clear())
   **/
  public set tagsTypeId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlTagsTypeId', value);
  }
  /**
   * 标注类型ID (Used In PutDataToClass())
   **/
  public get tagsTypeId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlTagsTypeId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
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
   * 点赞计数 (Used In Clear())
   **/
  public set voteCount(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtVoteCount', value !== null ? value.toString() : '');
  }
  /**
   * 点赞计数 (Used In PutDataToClass())
   **/
  public get voteCount(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtVoteCount');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
}
