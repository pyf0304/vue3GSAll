/**
 * 类名:Paper_Edit(界面:PaperCRUD)
 * 表名:Paper(01120535)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/26 01:24:29
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
import { LiteratureType_BindDdl_LiteratureTypeIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { XzGrade_BindDdl_IdGradeInDivCache } from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import {
  ClearSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  SetTextAreaValueInDivObj,
  GetTextAreaValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetSelectValueInDivObj,
  SetCheckBoxValueByIdInDivObj,
  GetCheckBoxValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  Paper_GetMaxStrIdAsync,
  Paper_CheckPropertyNew,
  Paper_AddNewRecordWithMaxIdAsync,
  Paper_GetUniCondStr,
  Paper_IsExistRecordAsync,
  Paper_GetUniCondStr4Update,
  Paper_IsExistAsync,
  Paper_GetObjByPaperIdAsync,
  Paper_CheckProperty4Update,
  Paper_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/** Paper_Edit 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:GeneCode)
 **/
export abstract class Paper_Edit {
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
  public static objPageEdit: Paper_Edit;
  public static objPageEdit2: Paper_Edit;
  public static objPageEdit3: Paper_Edit;

  public static IdXzMajorStatic = ''; //8、在功能区定义下拉框条件变量1
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
    if (Paper_Edit.SetPageEdit(this, 1) == true) return;
    if (Paper_Edit.SetPageEdit(this, 2) == true) return;
    if (Paper_Edit.SetPageEdit(this, 3) == true) return;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (Paper_Edit.objPageEdit == null) {
          Paper_Edit.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = Paper_Edit.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            Paper_Edit.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (Paper_Edit.objPageEdit2 == null) {
          Paper_Edit.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = Paper_Edit.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            Paper_Edit.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (Paper_Edit.objPageEdit3 == null) {
          Paper_Edit.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = Paper_Edit.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            Paper_Edit.objPageEdit3 = objDataLst;
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
    if (Paper_Edit.objPageEdit != null) {
      const strClassNameOld = Paper_Edit.objPageEdit.className;
      if (strClassNameOld == strClassName) return Paper_Edit.objPageEdit;
    }
    if (Paper_Edit.objPageEdit2 != null) {
      const strClassNameOld = Paper_Edit.objPageEdit2.className;
      if (strClassNameOld == strClassName) return Paper_Edit.objPageEdit2;
    }
    if (Paper_Edit.objPageEdit3 != null) {
      const strClassNameOld = Paper_Edit.objPageEdit3.className;
      if (strClassNameOld == strClassName) return Paper_Edit.objPageEdit3;
    }
    return null;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_Paper() {
    if (Paper_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      Paper_Edit.EditObj.hideDialog();
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
  public async ShowDialog_Paper(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_Paper.name;
    if (Paper_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (Paper_Edit.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditObj为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await Paper_Edit.EditObj.showDialog();
    }
    this.divEdit = Paper_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (Paper_Edit.times4TestShowDialog < 2) {
        Paper_Edit.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_Paper(strOp);
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
      Paper_Edit.times4TestShowDialog = 0;
    }
    if (strOp === 'Add' || strOp === 'AddWithMaxId') {
      this.btnSubmitPaper = '确认添加';
      this.btnCancelPaper = '取消添加';
    } else if (strOp === 'Update') {
      this.btnSubmitPaper = '确认修改';
      this.btnCancelPaper = '取消修改';
    }
    return true;
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (Paper_Edit.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divEdit != null) return this.divEdit;
    } else {
      if (Paper_Edit.EditObj.dialogVisible == false) {
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
    this.divEdit = Paper_Edit.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (Paper_Edit.times4TestShowDialog < 2) {
        Paper_Edit.times4TestShowDialog++;
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
      Paper_Edit.times4TestShowDialog = 0;
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
      const bolIsSuccess = await this.ShowDialog_Paper(this.opType);
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
    await this.SetDdl_LiteratureTypeIdInDiv(); //编辑区域

    await this.SetDdl_ShareIdInDiv(); //编辑区域

    await this.SetDdl_IdGradeInDiv(); //编辑区域
  }

  /** 添加新记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnAddNewRecordWithMaxId_Click)
   **/
  public async btnAddNewRecordWithMaxId_Click() {
    const strThisFuncName = this.btnAddNewRecordWithMaxId_Click.name;
    try {
      this.opType = 'AddWithMaxId';
      const bolIsSuccess = await this.ShowDialog_Paper(this.opType);
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
   * 设置绑定下拉框，针对字段:[LiteratureTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_LiteratureTypeIdInDiv() {
    await LiteratureType_BindDdl_LiteratureTypeIdInDivCache(this.divEdit, 'ddlLiteratureTypeId'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[ShareId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_ShareIdInDiv() {
    await gs_Share_BindDdl_ShareIdInDivCache(this.divEdit, 'ddlShareId'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[IdGrade]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdGradeInDiv() {
    await XzGrade_BindDdl_IdGradeInDivCache(this.divEdit, 'ddlIdGrade'); //
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
      const bolIsSuccess = await this.ShowDialog_Paper(this.opType);
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
  public async btnUpdateRecord_Click(strPaperId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(strPaperId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_Paper(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      const update = await this.UpdateRecord(strPaperId);
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
    const strCommandText: string = this.btnSubmitPaper;
    try {
      let returnBool = false;
      let returnKeyId = '';
      let strInfo = '';
      let strMsg = '';
      switch (strCommandText) {
        case '添加':
          this.btnSubmitPaper = '确认添加';
          this.btnCancelPaper = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            returnKeyId = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnKeyId) == false) {
              if (Paper_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01)
                this.HideDialog_Paper();
              this.iShowList.BindGv(clsPaperEN._CurrTabName, returnKeyId);
            }
          } else {
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (Paper_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                Paper_Edit.EditObj.hideDialog();
              }
              this.iShowList.BindGv(clsPaperEN._CurrTabName, this.keyId);
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功!' : '修改不成功!';
          strInfo += '(In Paper_Edit.btnSubmit_Click)';
          //显示信息框
          //console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (Paper_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              Paper_Edit.EditObj.hideDialog();
            }
            this.iShowList.BindGv(clsPaperEN._CurrTabName, this.keyId);
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
    $('#txtPaperId').attr('ReadOnly', bolReadonly.toString());
  }

  /**
   * 清除用户自定义控件中,所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    this.paperId = '';
    this.paperTitle = '';
    this.paperContent = '';
    this.periodical = '';
    this.author = '';
    this.researchQuestion = '';
    this.memo = '';
    this.keyword = '';
    this.literatureSources = '';
    this.literatureLink = '';
    this.uploadfileUrl = '';
    this.isQuotethesis = false;
    this.quoteId = '';
    this.isChecked = false;
    this.checker = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlLiteratureTypeId');
    this.browseNumber = 0;
    this.isSubmit = false;
    this.appraiseCount = 0;
    this.attachmentCount = 0;
    this.downloadCount = 0;
    this.okCount = 0;
    this.pcount = 0;
    this.score = 0;
    this.stuScore = 0;
    this.paperTypeId = '';
    this.teaScore = 0;
    this.paperStatusId = '';
    this.versionCount = 0;
    this.isPublic = false;
    this.askQuestion = '';
    this.researchStatus = '';
    this.innovationPoints = '';
    this.researchDesign = '';
    this.dimensionDataProcess = '';
    this.expectedConclusion = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlShareId');
    this.paperQCount = 0;
    this.subVCount = 0;
    this.tagsCount = 0;
    this.teaQCount = 0;
    this.createDate = '';
    this.updUser = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlCollectionCount');
    this.idStudyLevel = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlIdGrade');
  }

  /** 为插入记录做准备工作
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_AddNewRecord)
   **/
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucPaperB1.paperId = PaperGetMaxStrId_S();
    try {
      const returnString = await Paper_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表Paper的最大关键字为空,不成功,请检查!');
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

    //this.paperId = await Paper_GetMaxStrIdAsync();
    try {
      const returnString = await Paper_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = Format('获取表Paper的最大关键字为空,不成功,请检查!');
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
   * @param pobjPaperEN">数据传输的目的类对象</param>
   **/
  public async PutDataToPaperClass(pobjPaperEN: clsPaperEN) {
    pobjPaperEN.SetPaperId(this.paperId); // 论文Id
    pobjPaperEN.SetPaperTitle(this.paperTitle); // 论文标题
    pobjPaperEN.SetPaperContent(this.paperContent); // 主题内容
    pobjPaperEN.SetPeriodical(this.periodical); // 期刊
    pobjPaperEN.SetAuthor(this.author); // 作者
    pobjPaperEN.SetResearchQuestion(this.researchQuestion); // 研究问题
    pobjPaperEN.SetMemo(this.memo); // 备注
    pobjPaperEN.SetKeyword(this.keyword); // 关键字
    pobjPaperEN.SetLiteratureSources(this.literatureSources); // 文献来源
    pobjPaperEN.SetLiteratureLink(this.literatureLink); // 文献链接
    pobjPaperEN.SetUploadfileUrl(this.uploadfileUrl); // 文件地址
    pobjPaperEN.SetIsQuotethesis(this.isQuotethesis); // 是否引用论文
    pobjPaperEN.SetQuoteId(this.quoteId); // 引用Id
    pobjPaperEN.SetIsChecked(this.isChecked); // 是否检查
    pobjPaperEN.SetChecker(this.checker); // 审核人
    pobjPaperEN.SetLiteratureTypeId(this.literatureTypeId); // 文献类型Id
    pobjPaperEN.SetBrowseNumber(this.browseNumber); // 浏览量
    pobjPaperEN.SetIsSubmit(this.isSubmit); // 是否提交
    pobjPaperEN.SetAppraiseCount(this.appraiseCount); // 评论数
    pobjPaperEN.SetAttachmentCount(this.attachmentCount); // 附件计数
    pobjPaperEN.SetDownloadCount(this.downloadCount); // DownloadCount
    pobjPaperEN.SetOkCount(this.okCount); // 点赞统计
    pobjPaperEN.SetPcount(this.pcount); // Pcount
    pobjPaperEN.SetScore(this.score); // 评分
    pobjPaperEN.SetStuScore(this.stuScore); // 学生平均分
    pobjPaperEN.SetPaperTypeId(this.paperTypeId); // 论文类型Id
    pobjPaperEN.SetTeaScore(this.teaScore); // 教师评分
    pobjPaperEN.SetPaperStatusId(this.paperStatusId); // 论文状态Id
    pobjPaperEN.SetVersionCount(this.versionCount); // 版本统计
    pobjPaperEN.SetIsPublic(this.isPublic); // 是否公开
    pobjPaperEN.SetAskQuestion(this.askQuestion); // 问题提出
    pobjPaperEN.SetResearchStatus(this.researchStatus); // 目前研究的现状
    pobjPaperEN.SetInnovationPoints(this.innovationPoints); // 创新点
    pobjPaperEN.SetResearchDesign(this.researchDesign); // 研究设计
    pobjPaperEN.SetDimensionDataProcess(this.dimensionDataProcess); // 数据处理的维度
    pobjPaperEN.SetExpectedConclusion(this.expectedConclusion); // 预期结论
    pobjPaperEN.SetShareId(this.shareId); // 分享Id
    pobjPaperEN.SetPaperQCount(this.paperQCount); // 论文答疑数
    pobjPaperEN.SetSubVCount(this.subVCount); // 论文子观点数
    pobjPaperEN.SetTagsCount(this.tagsCount); // 论文标注数
    pobjPaperEN.SetTeaQCount(this.teaQCount); // 教师提问数
    pobjPaperEN.SetCreateDate(this.createDate); // 建立日期
    pobjPaperEN.SetUpdUser(this.updUser); // 修改人
    pobjPaperEN.SetCollectionCount(this.collectionCount); // 收藏数量
    pobjPaperEN.SetIdStudyLevel(this.idStudyLevel); // 学段流水号
    pobjPaperEN.SetIdGrade(this.idGrade); // 年级流水号
  }

  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objPaperEN = new clsPaperEN();
    try {
      await this.PutDataToPaperClass(objPaperEN);
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
      Paper_CheckPropertyNew(objPaperEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objPaperEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      const returnKeyId = await Paper_AddNewRecordWithMaxIdAsync(objPaperEN);
      if (IsNullOrEmpty(returnKeyId) == false) {
        this.keyId = returnKeyId;
        returnBool = true;
      }
      if (returnBool == true) {
        //Paper_ReFreshCache();
        const strInfo = Format('添加记录成功!');
        $('#lblResult46').val(strInfo);
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');
        $('#lblResult46').val(strInfo);
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
  public async CheckUniCond4Add(objPaperEN: clsPaperEN): Promise<boolean> {
    const strUniquenessCondition = Paper_GetUniCondStr(objPaperEN);
    const bolIsExistCondition = await Paper_IsExistRecordAsync(strUniquenessCondition);
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
  public async CheckUniCond4Update(objPaperEN: clsPaperEN): Promise<boolean> {
    const strUniquenessCondition = Paper_GetUniCondStr4Update(objPaperEN);
    const bolIsExistCondition = await Paper_IsExistRecordAsync(strUniquenessCondition);
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
    const objPaperEN = new clsPaperEN();
    try {
      await this.PutDataToPaperClass(objPaperEN);
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
      Paper_CheckPropertyNew(objPaperEN);
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
      const bolIsExistCond = await this.CheckUniCond4Add(objPaperEN);
      if (bolIsExistCond == false) {
        return '';
      }
      const responseKeyId = await Paper_AddNewRecordWithMaxIdAsync(objPaperEN);
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //Paper_ReFreshCache();
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
   * @param strPaperId: 表记录的关键字,显示该表关键字的内容
   **/
  public async ShowData(strPaperId: string) {
    const strThisFuncName = this.ShowData.name;
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objPaperEN = new clsPaperEN();
    try {
      const returnBool = await Paper_IsExistAsync(strPaperId);
      if (returnBool == false) {
        const strInfo = Format('关键字:[{0}] 的记录不存在!', strPaperId);
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
      const objPaperENConst = await Paper_GetObjByPaperIdAsync(strPaperId);
      if (objPaperENConst == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      objPaperEN = objPaperENConst;
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
    this.GetDataFromPaperClass(objPaperEN);
  }

  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjPaperEN">表实体类对象</param>
   **/
  public async GetDataFromPaperClass(pobjPaperEN: clsPaperEN) {
    this.paperId = pobjPaperEN.paperId; // 论文Id
    this.paperTitle = pobjPaperEN.paperTitle; // 论文标题
    this.paperContent = pobjPaperEN.paperContent; // 主题内容
    this.periodical = pobjPaperEN.periodical; // 期刊
    this.author = pobjPaperEN.author; // 作者
    this.researchQuestion = pobjPaperEN.researchQuestion; // 研究问题
    this.memo = pobjPaperEN.memo; // 备注
    this.keyword = pobjPaperEN.keyword; // 关键字
    this.literatureSources = pobjPaperEN.literatureSources; // 文献来源
    this.literatureLink = pobjPaperEN.literatureLink; // 文献链接
    this.uploadfileUrl = pobjPaperEN.uploadfileUrl; // 文件地址
    this.isQuotethesis = pobjPaperEN.isQuotethesis; // 是否引用论文
    this.quoteId = pobjPaperEN.quoteId; // 引用Id
    this.isChecked = pobjPaperEN.isChecked; // 是否检查
    this.checker = pobjPaperEN.checker; // 审核人
    this.literatureTypeId = pobjPaperEN.literatureTypeId; // 文献类型Id
    this.browseNumber = pobjPaperEN.browseNumber; // 浏览量
    this.isSubmit = pobjPaperEN.isSubmit; // 是否提交
    this.appraiseCount = pobjPaperEN.appraiseCount; // 评论数
    this.attachmentCount = pobjPaperEN.attachmentCount; // 附件计数
    this.downloadCount = pobjPaperEN.downloadCount; // DownloadCount
    this.okCount = pobjPaperEN.okCount; // 点赞统计
    this.pcount = pobjPaperEN.pcount; // Pcount
    this.score = pobjPaperEN.score; // 评分
    this.stuScore = pobjPaperEN.stuScore; // 学生平均分
    this.paperTypeId = pobjPaperEN.paperTypeId; // 论文类型Id
    this.teaScore = pobjPaperEN.teaScore; // 教师评分
    this.paperStatusId = pobjPaperEN.paperStatusId; // 论文状态Id
    this.versionCount = pobjPaperEN.versionCount; // 版本统计
    this.isPublic = pobjPaperEN.isPublic; // 是否公开
    this.askQuestion = pobjPaperEN.askQuestion; // 问题提出
    this.researchStatus = pobjPaperEN.researchStatus; // 目前研究的现状
    this.innovationPoints = pobjPaperEN.innovationPoints; // 创新点
    this.researchDesign = pobjPaperEN.researchDesign; // 研究设计
    this.dimensionDataProcess = pobjPaperEN.dimensionDataProcess; // 数据处理的维度
    this.expectedConclusion = pobjPaperEN.expectedConclusion; // 预期结论
    this.shareId = pobjPaperEN.shareId; // 分享Id
    this.paperQCount = pobjPaperEN.paperQCount; // 论文答疑数
    this.subVCount = pobjPaperEN.subVCount; // 论文子观点数
    this.tagsCount = pobjPaperEN.tagsCount; // 论文标注数
    this.teaQCount = pobjPaperEN.teaQCount; // 教师提问数
    this.createDate = pobjPaperEN.createDate; // 建立日期
    this.updUser = pobjPaperEN.updUser; // 修改人
    this.collectionCount = pobjPaperEN.collectionCount; // 收藏数量
    this.idStudyLevel = pobjPaperEN.idStudyLevel; // 学段流水号
    this.idGrade = pobjPaperEN.idGrade; // 年级流水号
  }

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async UpdateRecord(strPaperId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.keyId = strPaperId;
    try {
      const objPaperEN = await Paper_GetObjByPaperIdAsync(strPaperId);
      if (objPaperEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await this.GetDataFromPaperClass(objPaperEN);
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
    const objPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(this.keyId);
    await this.PutDataToPaperClass(objPaperEN);
    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      console.error('关键字不能为空!');
      throw '关键字不能为空!';
    }
    try {
      Paper_CheckProperty4Update(objPaperEN);
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
      const bolIsExistCond = await this.CheckUniCond4Update(objPaperEN);
      if (bolIsExistCond == false) {
        return false;
      }
      const returnBool = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        //Paper_ReFreshCache();
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
   * 问题提出 (Used In Clear())
   **/
  public set askQuestion(value: string) {
    SetTextAreaValueInDivObj(this.divEdit, 'txtAskQuestion', value);
  }
  /**
   * 问题提出 (Used In PutDataToClass())
   **/
  public get askQuestion(): string {
    const strValue = GetTextAreaValueInDivObj(this.divEdit, 'txtAskQuestion');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 附件计数 (Used In Clear())
   **/
  public set attachmentCount(value: number) {
    SetInputValueInDivObj(
      this.divEdit,
      'txtAttachmentCount',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 附件计数 (Used In PutDataToClass())
   **/
  public get attachmentCount(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtAttachmentCount');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
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
   * 浏览量 (Used In Clear())
   **/
  public set browseNumber(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtBrowseNumber', value !== null ? value.toString() : '');
  }
  /**
   * 浏览量 (Used In PutDataToClass())
   **/
  public get browseNumber(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtBrowseNumber');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 设置取消按钮的标题(Used In AddNewRecord())
   **/
  public set btnCancelPaper(value: string) {
    Paper_Edit.EditObj.SetButtonText('btnCancelPaper', value);
  }
  /**
   * 获取按钮的标题
   **/
  public get btnSubmitPaper(): string {
    const strValue = Paper_Edit.EditObj.GetButtonText('btnSubmitPaper');
    return strValue;
  }
  /**
   * 设置确定按钮的标题(Used In AddNewRecord())
   **/
  public set btnSubmitPaper(value: string) {
    Paper_Edit.EditObj.SetButtonText('btnSubmitPaper', value);
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
   * 收藏数量 (Used In Clear())
   **/
  public set collectionCount(value: number) {
    SetSelectValueByIdInDivObj(
      this.divEdit,
      'ddlCollectionCount',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 收藏数量 (Used In PutDataToClass())
   **/
  public get collectionCount(): number {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlCollectionCount');
    if (strValue == undefined) return 0;
    else if (strValue == '0') return 0;
    else return Number(strValue);
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
   * 数据处理的维度 (Used In Clear())
   **/
  public set dimensionDataProcess(value: string) {
    SetTextAreaValueInDivObj(this.divEdit, 'txtDimensionDataProcess', value);
  }
  /**
   * 数据处理的维度 (Used In PutDataToClass())
   **/
  public get dimensionDataProcess(): string {
    const strValue = GetTextAreaValueInDivObj(this.divEdit, 'txtDimensionDataProcess');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 下载数 (Used In Clear())
   **/
  public set downloadCount(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtDownloadCount', value !== null ? value.toString() : '');
  }
  /**
   * 下载数 (Used In PutDataToClass())
   **/
  public get downloadCount(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtDownloadCount');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 预期结论 (Used In Clear())
   **/
  public set expectedConclusion(value: string) {
    SetTextAreaValueInDivObj(this.divEdit, 'txtExpectedConclusion', value);
  }
  /**
   * 预期结论 (Used In PutDataToClass())
   **/
  public get expectedConclusion(): string {
    const strValue = GetTextAreaValueInDivObj(this.divEdit, 'txtExpectedConclusion');
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
   * 学段流水号 (Used In Clear())
   **/
  public set idStudyLevel(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtIdStudyLevel', value);
  }
  /**
   * 学段流水号 (Used In PutDataToClass())
   **/
  public get idStudyLevel(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtIdStudyLevel');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 创新点 (Used In Clear())
   **/
  public set innovationPoints(value: string) {
    SetTextAreaValueInDivObj(this.divEdit, 'txtInnovationPoints', value);
  }
  /**
   * 创新点 (Used In PutDataToClass())
   **/
  public get innovationPoints(): string {
    const strValue = GetTextAreaValueInDivObj(this.divEdit, 'txtInnovationPoints');
    if (strValue == undefined) return '';
    else return strValue.toString();
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
    SetSelectValueByIdInDivObj(this.divEdit, 'ddlLiteratureTypeId', value);
  }
  /**
   * 文献类型Id (Used In PutDataToClass())
   **/
  public get literatureTypeId(): string {
    const strValue = GetSelectValueInDivObj(this.divEdit, 'ddlLiteratureTypeId');
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
   * 主题内容 (Used In Clear())
   **/
  public set paperContent(value: string) {
    SetTextAreaValueInDivObj(this.divEdit, 'txtPaperContent', value);
  }
  /**
   * 主题内容 (Used In PutDataToClass())
   **/
  public get paperContent(): string {
    const strValue = GetTextAreaValueInDivObj(this.divEdit, 'txtPaperContent');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 论文Id (Used In Clear())
   **/
  public set paperId(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtPaperId', value);
  }
  /**
   * 论文Id (Used In PutDataToClass())
   **/
  public get paperId(): string {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPaperId');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 论文答疑数 (Used In Clear())
   **/
  public set paperQCount(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtPaperQCount', value !== null ? value.toString() : '');
  }
  /**
   * 论文答疑数 (Used In PutDataToClass())
   **/
  public get paperQCount(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPaperQCount');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
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
   * 读写数 (Used In Clear())
   **/
  public set pcount(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtPcount', value !== null ? value.toString() : '');
  }
  /**
   * 读写数 (Used In PutDataToClass())
   **/
  public get pcount(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtPcount');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
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
   * 研究设计 (Used In Clear())
   **/
  public set researchDesign(value: string) {
    SetTextAreaValueInDivObj(this.divEdit, 'txtResearchDesign', value);
  }
  /**
   * 研究设计 (Used In PutDataToClass())
   **/
  public get researchDesign(): string {
    const strValue = GetTextAreaValueInDivObj(this.divEdit, 'txtResearchDesign');
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
   * 目前研究的现状 (Used In Clear())
   **/
  public set researchStatus(value: string) {
    SetTextAreaValueInDivObj(this.divEdit, 'txtResearchStatus', value);
  }
  /**
   * 目前研究的现状 (Used In PutDataToClass())
   **/
  public get researchStatus(): string {
    const strValue = GetTextAreaValueInDivObj(this.divEdit, 'txtResearchStatus');
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
   * 论文子观点数 (Used In Clear())
   **/
  public set subVCount(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtSubVCount', value !== null ? value.toString() : '');
  }
  /**
   * 论文子观点数 (Used In PutDataToClass())
   **/
  public get subVCount(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtSubVCount');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 论文标注数 (Used In Clear())
   **/
  public set tagsCount(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtTagsCount', value !== null ? value.toString() : '');
  }
  /**
   * 论文标注数 (Used In PutDataToClass())
   **/
  public get tagsCount(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtTagsCount');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
  /**
   * 教师提问数 (Used In Clear())
   **/
  public set teaQCount(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtTeaQCount', value !== null ? value.toString() : '');
  }
  /**
   * 教师提问数 (Used In PutDataToClass())
   **/
  public get teaQCount(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtTeaQCount');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
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
  /**
   * 版本统计 (Used In Clear())
   **/
  public set versionCount(value: number) {
    SetInputValueInDivObj(this.divEdit, 'txtVersionCount', value !== null ? value.toString() : '');
  }
  /**
   * 版本统计 (Used In PutDataToClass())
   **/
  public get versionCount(): number {
    const strValue = GetInputValueInDivObj(this.divEdit, 'txtVersionCount');
    if (strValue == undefined) return 0;
    else if (IsNullOrEmpty(strValue) == true) return 0;
    else return Number(strValue);
  }
}
