/**
 * 类名:PaperSubViewpoint_Edit(界面:PaperSubViewpointCRUD)
 * 表名:PaperSubViewpoint(01120534)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/19 16:51:17
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
import {
  GetSelectObjInDivObj,
  ClearSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetSelectValueInDivObj,
  SetTextAreaValueInDivObj,
  GetTextAreaValueInDivObj,
  SetCheckBoxValueByIdInDivObj,
  GetCheckBoxValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { Section_BindDdl_SectionIdByPaperIdInDivCache } from '@/ts/L3ForWApi/GradEduPaper/clsSectionWApi';
import { SubViewpointType_BindDdl_SubViewpointTypeIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsSubViewpointTypeWApi';
import { ExplainType_BindDdl_ExplainTypeIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsExplainTypeWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { gs_PaperSubViewsAttitudes_BindDdl_AttitudesIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_PaperSubViewsAttitudesWApi';
import { gs_KnowledgeType_BindDdl_gsKnowledgeTypeIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_KnowledgeTypeWApi';
import { SysOperationType_BindDdl_OperationTypeIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsSysOperationTypeWApi';
import { SysSecurityLevel_BindDdl_LevelIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsSysSecurityLevelWApi';
import {
  PaperSubViewpoint_CheckPropertyNew,
  PaperSubViewpoint_AddNewRecordAsync,
  PaperSubViewpoint_ReFreshCache,
  PaperSubViewpoint_GetUniCondStr,
  PaperSubViewpoint_IsExistRecordAsync,
  PaperSubViewpoint_GetUniCondStr4Update,
  PaperSubViewpoint_IsExistAsync,
  PaperSubViewpoint_GetObjBySubViewpointIdAsync,
  PaperSubViewpoint_CheckProperty4Update,
  PaperSubViewpoint_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubViewpointWApi';
import { clsPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubViewpointEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** PaperSubViewpoint_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class PaperSubViewpoint_Edit {
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
  public static objPageEdit: PaperSubViewpoint_Edit;
  public static objPageEdit2: PaperSubViewpoint_Edit;
  public static objPageEdit3: PaperSubViewpoint_Edit;

  public static IdCurrEduClsCache = ''; //2、界面主表的缓存分类字段变量1
  public static SubViewpointTypeIdOrderNum = ''; //10、与排序相关的界面变量-分类变量
  public static PaperIdStatic = ''; //6、定义下拉框条件变量1
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
    if (PaperSubViewpoint_Edit.SetPageEdit(this, 1) == true) return;
    if (PaperSubViewpoint_Edit.SetPageEdit(this, 2) == true) return;
    if (PaperSubViewpoint_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (PaperSubViewpoint_Edit.objPageEdit == null) {
          PaperSubViewpoint_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = PaperSubViewpoint_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            PaperSubViewpoint_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (PaperSubViewpoint_Edit.objPageEdit2 == null) {
          PaperSubViewpoint_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = PaperSubViewpoint_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            PaperSubViewpoint_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (PaperSubViewpoint_Edit.objPageEdit3 == null) {
          PaperSubViewpoint_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = PaperSubViewpoint_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            PaperSubViewpoint_Edit.objPageEdit3 = objDataLst;
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
    if (PaperSubViewpoint_Edit.objPageEdit != null) {
      const strClassNameOld = PaperSubViewpoint_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return PaperSubViewpoint_Edit.objPageEdit;
    }
    if (PaperSubViewpoint_Edit.objPageEdit2 != null) {
      const strClassNameOld = PaperSubViewpoint_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return PaperSubViewpoint_Edit.objPageEdit2;
    }
    if (PaperSubViewpoint_Edit.objPageEdit3 != null) {
      const strClassNameOld = PaperSubViewpoint_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return PaperSubViewpoint_Edit.objPageEdit3;
    }
    return null;
  }

  /** 函数功能:系统生成的Change事件函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript+<>c__DisplayClass8_0:<Gen_WApi_Ts_GeneEventFunc>b__1)
   **/
  public abstract ddlSubViewpointTypeId_SelectedIndexChanged(
    ddlSubViewpointTypeId: HTMLSelectElement,
  ): void; //

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_PaperSubViewpoint() {
    if (PaperSubViewpoint_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      PaperSubViewpoint_Edit.EditObj.hideDialog();
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
      const ddlSubViewpointTypeId: HTMLSelectElement = GetSelectObjInDivObj(
        this.divEdit,
        'ddlSubViewpointTypeId',
      );
      ddlSubViewpointTypeId.addEventListener('change', (e) => {
        console.error(e);
        this.ddlSubViewpointTypeId_SelectedIndexChanged(ddlSubViewpointTypeId);
      });
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
  public async ShowDialog_PaperSubViewpoint(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_PaperSubViewpoint.name;
    if (PaperSubViewpoint_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (PaperSubViewpoint_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await PaperSubViewpoint_Edit.EditObj.showDialog();
    }
    this.divEdit = PaperSubViewpoint_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (PaperSubViewpoint_Edit.times4TestShowDialog < 2) {
        PaperSubViewpoint_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_PaperSubViewpoint(strOp);
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
      PaperSubViewpoint_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitPaperSubViewpoint = '确认添加';
      this.btnCancelPaperSubViewpoint = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitPaperSubViewpoint = '确认修改';
      this.btnCancelPaperSubViewpoint = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (PaperSubViewpoint_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (PaperSubViewpoint_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = PaperSubViewpoint_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (PaperSubViewpoint_Edit.times4TestShowDialog < 2) {
        PaperSubViewpoint_Edit.times4TestShowDialog++;
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
      PaperSubViewpoint_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_PaperSubViewpoint(this.opType);
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
    const PaperIdStatic = PaperSubViewpoint_Edit.PaperIdStatic; //静态变量;//静态变量

    await this.SetDdl_SectionIdInDiv(PaperIdStatic); //编辑区域

    await this.SetDdl_SubViewpointTypeIdInDiv(); //编辑区域

    await this.SetDdl_ExplainTypeIdInDiv(); //编辑区域

    await this.SetDdl_ShareIdInDiv(); //编辑区域

    await this.SetDdl_AttitudesIdInDiv(); //编辑区域

    await this.SetDdl_gsKnowledgeTypeIdInDiv(); //编辑区域

    await this.SetDdl_OperationTypeIdInDiv(); //编辑区域

    await this.SetDdl_LevelIdInDiv(); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_PaperSubViewpoint(this.opType);
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
   * 设置绑定下拉框，针对字段:[SectionId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_SectionIdInDiv(strPaperId: string) {
    if (IsNullOrEmpty(strPaperId) == true) {
      const strMsg = Format('参数:[strPaperId]不能为空!(In .SetDdl_SectionIdInDiv)');
      console.error(strMsg);
      throw strMsg;
    }
    if (strPaperId.length != 8) {
      const strMsg = Format(
        '缓存分类变量:[strPaperId]的长度:[{0}]不正确!(.SetDdl_SectionIdInDiv)',
        strPaperId.length,
      );
      console.error(strMsg);
      throw strMsg;
    }

    await Section_BindDdl_SectionIdByPaperIdInDivCache(this.divEdit, 'ddlSectionId', strPaperId); //
  }

  /**
   * 设置绑定下拉框，针对字段:[SubViewpointTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_SubViewpointTypeIdInDiv() {
    await SubViewpointType_BindDdl_SubViewpointTypeIdInDivCache(
      this.divEdit,
      'ddlSubViewpointTypeId',
    ); //
  }

  /**
   * 设置绑定下拉框，针对字段:[ExplainTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_ExplainTypeIdInDiv() {
    await ExplainType_BindDdl_ExplainTypeIdInDivCache(this.divEdit, 'ddlExplainTypeId'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[ShareId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_ShareIdInDiv() {
    await gs_Share_BindDdl_ShareIdInDivCache(this.divEdit, 'ddlShareId'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[AttitudesId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_AttitudesIdInDiv() {
    await gs_PaperSubViewsAttitudes_BindDdl_AttitudesIdInDivCache(this.divEdit, 'ddlAttitudesId'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[gsKnowledgeTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_gsKnowledgeTypeIdInDiv() {
    await gs_KnowledgeType_BindDdl_gsKnowledgeTypeIdInDivCache(
      this.divEdit,
      'ddlgsKnowledgeTypeId',
    ); //
  }

  /**
   * 设置绑定下拉框，针对字段:[OperationTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_OperationTypeIdInDiv() {
    await SysOperationType_BindDdl_OperationTypeIdInDivCache(this.divEdit, 'ddlOperationTypeId'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[LevelId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_LevelIdInDiv() {
    await SysSecurityLevel_BindDdl_LevelIdInDivCache(this.divEdit, 'ddlLevelId'); //
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
      const bolIsSuccess = await this.ShowDialog_PaperSubViewpoint(this.opType);
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
  public async btnUpdateRecord_Click(lngSubViewpointId: number) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (lngSubViewpointId == 0) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_PaperSubViewpoint(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      const lngKeyId = lngSubViewpointId;
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
    const strCommandText: string = this.btnSubmitPaperSubViewpoint;
    try {
      let returnBool = false;
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitPaperSubViewpoint = '确认添加';
          this.btnCancelPaperSubViewpoint = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            //const returnKeyId = await this.AddNewRecordWithMaxIdSave();
            //if (IsNullOrEmpty(returnKeyId) == false)
            //{
            //PaperSubViewpoint_Edit.EditObj.hideDialog();
            //this.iShowList.BindGvCache(clsPaperSubViewpointEN._CurrTabName, "");
            //}
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (PaperSubViewpoint_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                PaperSubViewpoint_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGvCache(
                clsPaperSubViewpointEN._CurrTabName,
                this.keyId.toString(),
              );
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In PaperSubViewpoint_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (PaperSubViewpoint_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              PaperSubViewpoint_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGvCache(clsPaperSubViewpointEN._CurrTabName, this.keyId.toString());
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
    this.paperRWId = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlSectionId');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlSubViewpointTypeId');
    this.rWTitle = '';
    this.subViewpointContent = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlExplainTypeId');
    this.explainContent = '';
    this.isPublic = false;
    this.literatureSourcesId = '';
    this.pageNumber = 0;
    this.orderNum = 0;
    this.memo = '';
    this.subViewpointId = 0;
    this.userId = '';
    this.paperLineNum = 0;
    this.paperPageNum = 0;
    this.appraiseCount = 0;
    this.okCount = 0;
    this.score = 0;
    this.stuScore = 0;
    this.teaScore = 0;
    this.createDate = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlShareId');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlAttitudesId');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlgsKnowledgeTypeId');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlOperationTypeId');
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlLevelId');
    this.conclusion = '';
    this.nationality = '';
    this.achievement = '';
    this.major = '';
    this.workUnit = '';
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucPaperSubViewpointB1.subViewpointId = PaperSubViewpointGetMaxStrId_S();
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecordWithMaxId)
   **/
  public async AddNewRecordWithMaxId() {
    this.Clear();

    //this.subViewpointId = await PaperSubViewpoint_GetMaxStrIdAsync();
  }

  /** 函1数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjPaperSubViewpointEN">数据传输的目的类对象</param>
   **/
  public async PutDataToPaperSubViewpointClass(pobjPaperSubViewpointEN: clsPaperSubViewpointEN) {
    pobjPaperSubViewpointEN.SetPaperRWId(this.paperRWId); // 论文读写Id
    pobjPaperSubViewpointEN.SetSectionId(this.sectionId); // 节Id
    pobjPaperSubViewpointEN.SetSubViewpointTypeId(this.subViewpointTypeId); // 类型Id
    pobjPaperSubViewpointEN.SetRWTitle(this.rWTitle); // 读写标题
    pobjPaperSubViewpointEN.SetSubViewpointContent(this.subViewpointContent); // 详情内容
    pobjPaperSubViewpointEN.SetExplainTypeId(this.explainTypeId); // 说明类型Id
    pobjPaperSubViewpointEN.SetExplainContent(this.explainContent); // 说明内容
    pobjPaperSubViewpointEN.SetIsPublic(this.isPublic); // 是否公开
    pobjPaperSubViewpointEN.SetLiteratureSourcesId(this.literatureSourcesId); // 文献来源
    pobjPaperSubViewpointEN.SetPageNumber(this.pageNumber); // 页码
    pobjPaperSubViewpointEN.SetOrderNum(this.orderNum); // 序号
    pobjPaperSubViewpointEN.SetMemo(this.memo); // 备注
    pobjPaperSubViewpointEN.SetSubViewpointId(this.subViewpointId); // 子观点Id
    pobjPaperSubViewpointEN.SetUserId(this.userId); // 用户ID
    pobjPaperSubViewpointEN.SetPaperLineNum(this.paperLineNum); // 论文行号
    pobjPaperSubViewpointEN.SetPaperPageNum(this.paperPageNum); // 论文页码
    pobjPaperSubViewpointEN.SetAppraiseCount(this.appraiseCount); // 评论数
    pobjPaperSubViewpointEN.SetOkCount(this.okCount); // 点赞统计
    pobjPaperSubViewpointEN.SetScore(this.score); // 评分
    pobjPaperSubViewpointEN.SetStuScore(this.stuScore); // 学生平均分
    pobjPaperSubViewpointEN.SetTeaScore(this.teaScore); // 教师评分
    pobjPaperSubViewpointEN.SetCreateDate(this.createDate); // 建立日期
    pobjPaperSubViewpointEN.SetShareId(this.shareId); // 分享Id
    pobjPaperSubViewpointEN.SetAttitudesId(this.attitudesId); // 态度Id
    pobjPaperSubViewpointEN.SetgsKnowledgeTypeId(this.gsKnowledgeTypeId); // 知识类型Id
    pobjPaperSubViewpointEN.SetOperationTypeId(this.operationTypeId); // 操作类型ID
    pobjPaperSubViewpointEN.SetLevelId(this.levelId); // 级别Id
    pobjPaperSubViewpointEN.SetConclusion(this.conclusion); // 结论
    pobjPaperSubViewpointEN.SetNationality(this.nationality); // 国籍
    pobjPaperSubViewpointEN.SetAchievement(this.achievement); // 成就
    pobjPaperSubViewpointEN.SetMajor(this.major); // 专业
    pobjPaperSubViewpointEN.SetWorkUnit(this.workUnit); // 工作单位
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objPaperSubViewpointEN = new clsPaperSubViewpointEN();
    try {
      await this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);
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
      PaperSubViewpoint_CheckPropertyNew(objPaperSubViewpointEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objPaperSubViewpointEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      returnBool = await PaperSubViewpoint_AddNewRecordAsync(objPaperSubViewpointEN);
      if (returnBool == true) {
        PaperSubViewpoint_ReFreshCache(PaperSubViewpoint_Edit.IdCurrEduClsCache);
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
  public async CheckUniCond4Add(objPaperSubViewpointEN: clsPaperSubViewpointEN): Promise<boolean> {
    const strUniquenessCondition = PaperSubViewpoint_GetUniCondStr(objPaperSubViewpointEN);
    const bolIsExistCondition = await PaperSubViewpoint_IsExistRecordAsync(strUniquenessCondition);
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
    objPaperSubViewpointEN: clsPaperSubViewpointEN,
  ): Promise<boolean> {
    const strUniquenessCondition = PaperSubViewpoint_GetUniCondStr4Update(objPaperSubViewpointEN);
    const bolIsExistCondition = await PaperSubViewpoint_IsExistRecordAsync(strUniquenessCondition);
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
   * @param lngSubViewpointId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(lngSubViewpointId: number) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objPaperSubViewpointEN = new clsPaperSubViewpointEN();
    try {
      const returnBool = await PaperSubViewpoint_IsExistAsync(lngSubViewpointId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', lngSubViewpointId);
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
      const objPaperSubViewpointENConst = await PaperSubViewpoint_GetObjBySubViewpointIdAsync(
        lngSubViewpointId,
      );
      if (objPaperSubViewpointENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objPaperSubViewpointEN = objPaperSubViewpointENConst;
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
    this.GetDataFromPaperSubViewpointClass(objPaperSubViewpointEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjPaperSubViewpointEN">表实体类对象</param>
   **/
  public async GetDataFromPaperSubViewpointClass(pobjPaperSubViewpointEN: clsPaperSubViewpointEN) {
    this.paperRWId = pobjPaperSubViewpointEN.paperRWId; // 论文读写Id
    this.sectionId = pobjPaperSubViewpointEN.sectionId; // 节Id
    this.subViewpointTypeId = pobjPaperSubViewpointEN.subViewpointTypeId; // 类型Id
    this.rWTitle = pobjPaperSubViewpointEN.rWTitle; // 读写标题
    this.subViewpointContent = pobjPaperSubViewpointEN.subViewpointContent; // 详情内容
    this.explainTypeId = pobjPaperSubViewpointEN.explainTypeId; // 说明类型Id
    this.explainContent = pobjPaperSubViewpointEN.explainContent; // 说明内容
    this.isPublic = pobjPaperSubViewpointEN.isPublic; // 是否公开
    this.literatureSourcesId = pobjPaperSubViewpointEN.literatureSourcesId; // 文献来源
    this.pageNumber = pobjPaperSubViewpointEN.pageNumber; // 页码
    this.orderNum = pobjPaperSubViewpointEN.orderNum; // 序号
    this.memo = pobjPaperSubViewpointEN.memo; // 备注
    this.subViewpointId = pobjPaperSubViewpointEN.subViewpointId; // 子观点Id
    this.userId = pobjPaperSubViewpointEN.userId; // 用户ID
    this.paperLineNum = pobjPaperSubViewpointEN.paperLineNum; // 论文行号
    this.paperPageNum = pobjPaperSubViewpointEN.paperPageNum; // 论文页码
    this.appraiseCount = pobjPaperSubViewpointEN.appraiseCount; // 评论数
    this.okCount = pobjPaperSubViewpointEN.okCount; // 点赞统计
    this.score = pobjPaperSubViewpointEN.score; // 评分
    this.stuScore = pobjPaperSubViewpointEN.stuScore; // 学生平均分
    this.teaScore = pobjPaperSubViewpointEN.teaScore; // 教师评分
    this.createDate = pobjPaperSubViewpointEN.createDate; // 建立日期
    this.shareId = pobjPaperSubViewpointEN.shareId; // 分享Id
    this.attitudesId = pobjPaperSubViewpointEN.attitudesId; // 态度Id
    this.gsKnowledgeTypeId = pobjPaperSubViewpointEN.gsKnowledgeTypeId; // 知识类型Id
    this.operationTypeId = pobjPaperSubViewpointEN.operationTypeId; // 操作类型ID
    this.levelId = pobjPaperSubViewpointEN.levelId; // 级别Id
    this.conclusion = pobjPaperSubViewpointEN.conclusion; // 结论
    this.nationality = pobjPaperSubViewpointEN.nationality; // 国籍
    this.achievement = pobjPaperSubViewpointEN.achievement; // 成就
    this.major = pobjPaperSubViewpointEN.major; // 专业
    this.workUnit = pobjPaperSubViewpointEN.workUnit; // 工作单位
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(lngSubViewpointId: number): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = lngSubViewpointId;
    try {
      const objPaperSubViewpointEN = await PaperSubViewpoint_GetObjBySubViewpointIdAsync(
        lngSubViewpointId,
      );
      if (objPaperSubViewpointEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromPaperSubViewpointClass(objPaperSubViewpointEN);
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
    const objPaperSubViewpointEN = new clsPaperSubViewpointEN();
    objPaperSubViewpointEN.SetSubViewpointId(Number(this.keyId));
    await this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);
    objPaperSubViewpointEN.sfUpdFldSetStr = objPaperSubViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objPaperSubViewpointEN.subViewpointId == 0 ||
      objPaperSubViewpointEN.subViewpointId == undefined
    ) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      PaperSubViewpoint_CheckProperty4Update(objPaperSubViewpointEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objPaperSubViewpointEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await PaperSubViewpoint_UpdateRecordAsync(objPaperSubViewpointEN);
      if (returnBool == true) {
        PaperSubViewpoint_ReFreshCache(PaperSubViewpoint_Edit.IdCurrEduClsCache);
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
   * 成就 (Used In Clear())
   **/
  public set achievement(value: string) {
    SetTextAreaValueInDivObj(this.divEdit, 'txtAchievement', value);
  }
  /**
   * 成就 (Used In PutDataToClass())
   **/
  public get achievement(): string {
    const strValue = GetTextAreaValueInDivObj(this.divEdit, 'txtAchievement');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 评论数 (Used In Clear())
   **/
  public set appraiseCount(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtAppraiseCount', value !== null ? value.toString() : '');
  }
  /**
   * 评论数 (Used In PutDataToClass())
   **/
  public get appraiseCount(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtAppraiseCount');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 态度Id (Used In Clear())
   **/
  public set attitudesId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlAttitudesId', value);
  }
  /**
   * 态度Id (Used In PutDataToClass())
   **/
  public get attitudesId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlAttitudesId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   **/
  public set btnCancelPaperSubViewpoint(value: string) {
    PaperSubViewpoint_Edit.EditObj.SetButtonText('btnCancelPaperSubViewpoint', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitPaperSubViewpoint(): string {
    const strValue = PaperSubViewpoint_Edit.EditObj.GetButtonText('btnSubmitPaperSubViewpoint');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitPaperSubViewpoint(value: string) {
    PaperSubViewpoint_Edit.EditObj.SetButtonText('btnSubmitPaperSubViewpoint', value);
  }
  /**
   * 结论 (Used In Clear())
   **/
  public set conclusion(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtConclusion', value);
  }
  /**
   * 结论 (Used In PutDataToClass())
   **/
  public get conclusion(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtConclusion');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 建立日期 (Used In Clear())
   **/
  public set createDate(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtCreateDate', value);
  }
  /**
   * 建立日期 (Used In PutDataToClass())
   **/
  public get createDate(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtCreateDate');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 说明内容 (Used In Clear())
   **/
  public set explainContent(value: string) {
    SetTextAreaValueInDivObj(this.divEdit, 'txtExplainContent', value);
  }
  /**
   * 说明内容 (Used In PutDataToClass())
   **/
  public get explainContent(): string {
    const strValue = GetTextAreaValueInDivObj(this.divEdit, 'txtExplainContent');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 说明类型Id (Used In Clear())
   **/
  public set explainTypeId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlExplainTypeId', value);
  }
  /**
   * 说明类型Id (Used In PutDataToClass())
   **/
  public get explainTypeId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlExplainTypeId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 知识类型Id (Used In Clear())
   **/
  public set gsKnowledgeTypeId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlgsKnowledgeTypeId', value);
  }
  /**
   * 知识类型Id (Used In PutDataToClass())
   **/
  public get gsKnowledgeTypeId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlgsKnowledgeTypeId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 是否公开 (Used In Clear())
   **/
  public set isPublic(value: boolean) {
    SetCheckBoxValueByIdInDivObj(this.divEdit, 'chkIsPublic', value);
  }
  /**
   * 是否公开 (Used In PutDataToClass())
   **/
  public get isPublic(): boolean {
    const bolValue = GetCheckBoxValueInDivObj(this.divEdit, 'chkIsPublic');
    return bolValue;
  }
  /**
   * 级别Id (Used In Clear())
   **/
  public set levelId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlLevelId', value);
  }
  /**
   * 级别Id (Used In PutDataToClass())
   **/
  public get levelId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlLevelId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 文献来源 (Used In Clear())
   **/
  public set literatureSourcesId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtLiteratureSourcesId', value);
  }
  /**
   * 文献来源 (Used In PutDataToClass())
   **/
  public get literatureSourcesId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtLiteratureSourcesId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 专业 (Used In Clear())
   **/
  public set major(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtMajor', value);
  }
  /**
   * 专业 (Used In PutDataToClass())
   **/
  public get major(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtMajor');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 备注 (Used In Clear())
   **/
  public set memo(value: string) {
    SetTextAreaValueInDivObj(this.divEdit, 'txtMemo', value);
  }
  /**
   * 备注 (Used In PutDataToClass())
   **/
  public get memo(): string {
    const strValue = GetTextAreaValueInDivObj(this.divEdit, 'txtMemo');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 国籍 (Used In Clear())
   **/
  public set nationality(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtNationality', value);
  }
  /**
   * 国籍 (Used In PutDataToClass())
   **/
  public get nationality(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtNationality');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 点赞统计 (Used In Clear())
   **/
  public set okCount(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtOkCount', value !== null ? value.toString() : '');
  }
  /**
   * 点赞统计 (Used In PutDataToClass())
   **/
  public get okCount(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtOkCount');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 操作类型ID (Used In Clear())
   **/
  public set operationTypeId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlOperationTypeId', value);
  }
  /**
   * 操作类型ID (Used In PutDataToClass())
   **/
  public get operationTypeId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlOperationTypeId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
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
   * 页码 (Used In Clear())
   **/
  public set pageNumber(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtPageNumber', value !== null ? value.toString() : '');
  }
  /**
   * 页码 (Used In PutDataToClass())
   **/
  public get pageNumber(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPageNumber');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 论文行号 (Used In Clear())
   **/
  public set paperLineNum(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtPaperLineNum', value !== null ? value.toString() : '');
  }
  /**
   * 论文行号 (Used In PutDataToClass())
   **/
  public get paperLineNum(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPaperLineNum');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 论文页码 (Used In Clear())
   **/
  public set paperPageNum(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtPaperPageNum', value !== null ? value.toString() : '');
  }
  /**
   * 论文页码 (Used In PutDataToClass())
   **/
  public get paperPageNum(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPaperPageNum');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 课文阅读 (Used In Clear())
   **/
  public set paperRWId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPaperRWId', value);
  }
  /**
   * 课文阅读 (Used In PutDataToClass())
   **/
  public get paperRWId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPaperRWId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 读写标题 (Used In Clear())
   **/
  public set rWTitle(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtRWTitle', value);
  }
  /**
   * 读写标题 (Used In PutDataToClass())
   **/
  public get rWTitle(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtRWTitle');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 评分 (Used In Clear())
   **/
  public set score(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtScore', value !== null ? value.toString() : '');
  }
  /**
   * 评分 (Used In PutDataToClass())
   **/
  public get score(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtScore');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 节Id (Used In Clear())
   **/
  public set sectionId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlSectionId', value);
  }
  /**
   * 节Id (Used In PutDataToClass())
   **/
  public get sectionId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlSectionId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 分享Id (Used In Clear())
   **/
  public set shareId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlShareId', value);
  }
  /**
   * 分享Id (Used In PutDataToClass())
   **/
  public get shareId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlShareId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 学生平均分 (Used In Clear())
   **/
  public set stuScore(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtStuScore', value !== null ? value.toString() : '');
  }
  /**
   * 学生平均分 (Used In PutDataToClass())
   **/
  public get stuScore(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtStuScore');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 详情内容 (Used In Clear())
   **/
  public set subViewpointContent(value: string) {
    SetTextAreaValueInDivObj(this.divEdit, 'txtSubViewpointContent', value);
  }
  /**
   * 详情内容 (Used In PutDataToClass())
   **/
  public get subViewpointContent(): string {
    const strValue = GetTextAreaValueInDivObj(this.divEdit, 'txtSubViewpointContent');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 子观点Id (Used In Clear())
   **/
  public set subViewpointId(value: number) {
    SetInputValueInDivObj(
      this.divEdit,
      'txtSubViewpointId',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 子观点Id (Used In PutDataToClass())
   **/
  public get subViewpointId(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtSubViewpointId');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 类型Id (Used In Clear())
   **/
  public set subViewpointTypeId(value: string) {
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlSubViewpointTypeId', value);
  }
  /**
   * 类型Id (Used In PutDataToClass())
   **/
  public get subViewpointTypeId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlSubViewpointTypeId');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 教师评分 (Used In Clear())
   **/
  public set teaScore(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtTeaScore', value !== null ? value.toString() : '');
  }
  /**
   * 教师评分 (Used In PutDataToClass())
   **/
  public get teaScore(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtTeaScore');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
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
   * 工作单位 (Used In Clear())
   **/
  public set workUnit(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtWorkUnit', value);
  }
  /**
   * 工作单位 (Used In PutDataToClass())
   **/
  public get workUnit(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtWorkUnit');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
}
