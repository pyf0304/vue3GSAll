import $ from 'jquery';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { PaperEx_ReFreshThisCacheByIdCurrEduCls } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { File_IsHasFile, File_UploadFile, clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { Paper_Edit } from '@/viewsBase/GradEduPaper/Paper_Edit';
import { clsgs_PaperAttentionEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperAttentionEN';
import { clsgs_PaperGroupEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperGroupEN';
import { clsgs_PaperVerEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperVerEN';
import { clsMajorDirectionPaperRelaEN } from '@/ts/L0Entity/GradEduPaper/clsMajorDirectionPaperRelaEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import {
  gs_PaperAttention_AddNewRecordAsync,
  gs_PaperAttention_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperAttentionWApi';
import {
  gs_PaperGroup_AddNewRecordWithReturnKeyAsync,
  gs_PaperGroup_GetFirstObjAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperGroupWApi';
import {
  gs_PaperVer_AddNewRecordAsync,
  gs_PaperVer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperVerWApi';
import {
  MajorDirectionPaperRela_AddNewRecordAsync,
  MajorDirectionPaperRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsMajorDirectionPaperRelaWApi';
import {
  PaperAttachment_DelPaperAttachmentsByCondAsync,
  PaperAttachment_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import {
  Paper_AddNewRecordAsync,
  Paper_AddNewRecordWithReturnKeyAsync,
  Paper_GetMaxStrIdAsync,
  Paper_GetObjByPaperIdAsync,
  Paper_GetRecCountByCondAsync,
  Paper_IsExistAsync,
  Paper_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputDisable,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  gs_OriginalPaperLog_AddNewRecordAsync,
  gs_OriginalPaperLog_GetFirstObjAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_OriginalPaperLogWApi';
import { RTPaperRela_AddNewRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTPaperRelaWApi';
import { clsgs_OriginalPaperLogEN } from '@/ts/L0Entity/GradEduPaper/clsgs_OriginalPaperLogEN';
import { clsRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTPaperRelaEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsgs_PaperStatusEN } from '@/ts/L0Entity/RT_Params/clsgs_PaperStatusEN';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import {
  gs_PaperStatus_BindDdl_PaperStatusIdInDivCache,
  gs_PaperStatus_GetObjLstAsync,
} from '@/ts/L3ForWApi/RT_Params/clsgs_PaperStatusWApi';
import {
  clsLiteratureTypeEN,
  enumLiteratureType,
} from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import {
  LiteratureType_BindDdl_LiteratureTypeIdInDivCache,
  LiteratureType_GetObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { clsgs_PaperTypeEN } from '@/ts/L0Entity/RT_Params/clsgs_PaperTypeEN';
import { gs_PaperType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsgs_PaperTypeWApi';
import { GetHidPaperId, SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { message } from '@/utils/myMessage';
import { UploadResponseData } from '@/ts/FunClass/UploadResponseData';
import { PaperAttachmentEx_AddPaperAttachment } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperAttachmentExWApi';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';
import { UserTypeMap } from '@/store/modules/types/userType';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  XzGrade_BindDdl_IdGradeInDivCache,
  XzGrade_GetObjByIdGradeCache,
} from '@/ts/L3ForWApi/BaseInfo/clsXzGradeWApi';
declare function setTextboxio(): void;
declare function HideDialogOne(): void;

/* Paper_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class Paper_EditEx extends Paper_Edit {
  public static uploadResponseData: UploadResponseData = new UploadResponseData();
  public static mySelectedFile: any;
  public paperTypeId0 = '';
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;

    const objPage: Paper_EditEx = <Paper_EditEx>Paper_Edit.GetPageEditObj('Paper_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'Paper_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'Paper_EditEx.btn_Click');

        break;
    }
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
      const divName = this.getDivName();
      if (divName == null) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.AddNewRecordWithMaxId();
      if (userStore.userType == UserTypeMap.middle_School) {
        this.literatureTypeId = '05';
      }
      //获取分享Id
      const strShareId = await gs_UserConfigEx_GetNewReturnShareIdEx('01', userStore.getUserId);

      //const returnBool: boolean = !!responseText2;
      if (strShareId != '') {
        this.shareId = strShareId;
      }

      //因为是初次添加所以只显示 基本信息；否则2个信息都显示；
      $('#liextendEdit').attr('style', 'display:none;');
      HideDivInDivObj(divName, 'divLoading');
    } catch (e: any) {
      const strMsg = Format(
        '添加新记录初始化不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 添加新记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
*/
  public async btnAddNewRecord_Click() {
    this.opType = 'Add';
    try {
      const bolIsSuccess = await this.ShowDialog_Paper(this.opType);
      if (bolIsSuccess == false) return;
      const divName = this.getDivName();
      if (divName == null) return;
      await this.BindDdl4EditRegionInDiv();
      await this.AddNewRecord();
      //获取分享Id
      const strShareId = await gs_UserConfigEx_GetNewReturnShareIdEx('01', userStore.getUserId);

      //const returnBool: boolean = !!responseText2;
      if (strShareId != '') {
        this.shareId = strShareId;
      }
      //因为是初次添加所以只显示 基本信息；否则2个信息都显示；
      $('#liextendEdit').attr('style', 'display:none;');
      HideDivInDivObj(divName, 'divLoading');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  public async BindDdl4EditRegionInDiv() {
    const divName = this.getDivName();
    if (divName == null) return;
    await this.SetDdl_ShareIdInDiv(); //编辑区域

    //绑定论文类型下拉框
    await this.BindDdl_gs_PaperType_Cache('ddlPaperTypeId');
    if (userStore.userType == UserTypeMap.middle_School) {
      await XzGrade_BindDdl_IdGradeInDivCache(this.divEdit, 'ddlIdGrade');
    }
    await this.BindDdl_gs_PaperType_Cache('ddlPaperTypeId');

    //论文状态

    await gs_PaperStatus_BindDdl_PaperStatusIdInDivCache(divName, 'ddlPaperStatusId');
    //绑定编辑文献类型
    await LiteratureType_BindDdl_LiteratureTypeIdInDivCache(divName, 'ddlLiteratureTypeId');
  }
  /*
   * 分享
   */
  public set shareId(value: string) {
    const divName = this.getDivName();
    SetSelectValueByIdInDivObj(divName, 'ddlShareId', value);
  }
  /*
   * 分享
   */
  public get shareId(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlShareId');
  }
  /* 为插入记录做准备工作 设置相关操作；
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
  */
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    this.btnSubmitPaper = '确认添加';
    this.btnCancelPaper = '取消添加';
    this.Clear();
    if (userStore.userType == UserTypeMap.middle_School) {
      this.literatureTypeId = '05';
    }
    // this.Disabled_false();
    //$('#btnOKUpd').attr("disabled", false);
    //wucPaperB1.paperId = clsPaperBL.GetMaxStrId_S();
  }

  //开放控件
  public Disabled_false() {
    const divName = this.getDivName();
    if (divName == null) return;

    SetInputDisable(divName, 'txtPaperTitle', false);

    $('#txtPeriodical').attr('disabled', 'false');

    $('#txtResearchQuestion').attr('disabled', 'false');
    $('#txtKeyword').attr('disabled', 'false');
    $('#ddlLiteratureTypeId').attr('disabled', 'false');

    $('#ddlPaperTypeId').attr('disabled', 'false');
    $('#ddlPaperStatusId').attr('disabled', 'true');

    $('#txtLiteratureSources').attr('disabled', 'false');
    $('#txtLiteratureLink').attr('disabled', 'false');

    $('#txtLiteratureLink').attr('disabled', 'false');
    $('#txtLiteratureLink').attr('disabled', 'false');
  }

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
*/
  public async AddNewRecordWithMaxIdSaveRetrunId(): Promise<string> {
    const divName = this.getDivName();
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetCreateDate(clsPubFun4Web.getNowDate_ymd());
    this.PutDataToPaperClass(objPaperEN);
    try {
      const strCondition = Format(
        " 1 = 1 and paperTitle = '{0}' and paperId in (select paperId from PaperEduClsRela where idCurrEduCls = '{1}')",
        this.paperTitle,
        clsPubLocalStorage.idCurrEduCls,
      );

      //先判断数据论文标题是否重名
      const intPaperCount = await Paper_GetRecCountByCondAsync(strCondition);
      if (intPaperCount != 0) {
        const strMsg = `添加记录时，当前教学班论文标题：${objPaperEN.paperTitle}已经存在，请重新命名！`;
        alert(strMsg);
        return ''; //一定要有一个返回值，否则会出错！
      }

      //const responseText2 = await SysSkill_AddNewRecordWithMaxIdAsync(objSysSkillEN);
      const strPaperId = await Paper_AddNewRecordWithReturnKeyAsync(objPaperEN);
      const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
        clsPrivateSessionStorage.topicIdInTree,
      );
      //const returnBool: boolean = !!responseText2;
      if (strPaperId != '' && Paper_EditEx.uploadResponseData.fileNameOne != '') {
        SetHidPaperId(divName, strPaperId);

        const returnBool_AddPaperAttach = await PaperAttachmentEx_AddPaperAttachment(
          strPaperId,
          strIdCurrEduCls,
          Paper_EditEx.uploadResponseData,
        );

        return strPaperId;
      }
      return strPaperId; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return '';
    }
    //return strSysPaperId;//一定要有一个返回值，否则会出错！
  }
  /*
             提交编辑
            (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_mySubmit)
            */
  public async UploadFile(pstrOp: string): Promise<UploadResponseData> {
    const divName = this.divEdit;
    const objUploadResponseData = new UploadResponseData();
    objUploadResponseData.errId = -1;
    console.log(`提交${pstrOp}`);

    const strLiteratureTypeId = $('#ddlLiteratureTypeId').val();
    console.log(strLiteratureTypeId);
    if ($('#txtPaperTitle').val() == '') {
      alert('论文标题不能为空!');
    }
    const txtPaperTitle = $('#txtPaperTitle').val();
    const txtPeriodical = $('#txtPeriodical').val();
    const txtAuthor = $('#txtAuthor').val();
    const txtResearchQuestion = $('#txtResearchQuestion').val();
    const txtLiteratureSources = $('#txtLiteratureSources').val();
    const txtLiteratureLink = $('#txtLiteratureLink').val();
    if (typeof txtPaperTitle === 'string' && txtPaperTitle.length > 100) {
      alert('论文标题长度不能超过100');

      return objUploadResponseData;
    } else if ($('#txtPeriodical').val() == '') {
      alert('期刊不能为空!');
      return objUploadResponseData;
    } else if (typeof txtPeriodical === 'string' && txtPeriodical.length > 50) {
      alert('期刊长度不能超过50!');
      return objUploadResponseData;
    } else if ($('#txtAuthor').val() == '') {
      alert('论文作者不能为空!');
      return objUploadResponseData;
    } else if (typeof txtAuthor === 'string' && txtAuthor.length > 100) {
      alert('论文作者长度不能超过100!');
      return objUploadResponseData;
    } else if (typeof txtResearchQuestion === 'string' && txtResearchQuestion.length > 500) {
      alert('研究问题长度不能超过500!');
      return objUploadResponseData;
    } else if (typeof txtLiteratureSources === 'string' && txtLiteratureSources.length > 500) {
      alert('文献来源长度不能超过500!');
      return objUploadResponseData;
    } else if (typeof txtLiteratureLink === 'string' && txtLiteratureLink.length > 500) {
      alert('文献链接长度不能超过500!');
      return objUploadResponseData;
    } else if ($('#ddlLiteratureTypeId').val() == 0) {
      alert('文献类型(论文类型)不能为空!');
      return objUploadResponseData;
    } else {
      $('#divLoading').show();
      //防止重复提交
      $('#btnOKUpd').attr('disabled', 'true');
      //判断文件格式；
      const bolIsHasFile = await File_IsHasFile(divName, '.pdf,.PDF');
      if (bolIsHasFile == true) {
        let strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir;
        let strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_Paper;
        const currHostname = window.location.hostname;

        if (currHostname == 'localhost' && clsSysPara4WebApi.bolIsLocalHost == true) {
          strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir_Local;
        }

        const strLiteratureTypeId = GetSelectValueInDivObj(this.divEdit, 'ddlLiteratureTypeId');

        if (strLiteratureTypeId == '05') {
          strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_ReadTraining;
        }
        // const divName = this.refDivEdit;
        const responseData = await File_UploadFile(
          strUploadWebMainDir,
          strUploadWebSubDir,
          Paper_EditEx.mySelectedFile,
        );
        return responseData;
      }
      objUploadResponseData.errId = 0;
      return objUploadResponseData;
    }
  }
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
  public async btnSubmit_Click() {
    const divName = this.getDivName();
    if (divName == null) return;

    if (userStore.getUserId == '') {
      $('#btnOKUpd').attr('disabled', 'false');
      alert('用户session丢失，请重新登录！');
      return;
    }
    const strCommandText: string = this.btnSubmitPaper;
    try {
      let returnBool = true;
      let returnBool2;
      let returnBool4;

      let strPaperId2;
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          const objUploadResponseData = await this.UploadFile('');
          if (objUploadResponseData.errId != 0) {
            alert('上传文件出错！');
            return;
          }
          Paper_EditEx.uploadResponseData = objUploadResponseData;

          strPaperId2 = await this.AddNewRecordWithMaxIdSaveRetrunId();
          if (strPaperId2.length == 0) return;

          //添加成功后统计附件数量到论文表
          await this.AddAttachmentCount(strPaperId2);

          //添加记录的同时添加历史版本 判断只有原创论文才记录历史版本
          if (this.paperTypeId0 == '02') {
            returnBool = await this.AddVersionRecordSave(strPaperId2);
            if (returnBool == true) {
              //alert("添加历史版本出问题！");
            }
          }
          //同时把数据同步到数据总表

          returnBool2 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
            strPaperId2,
            '01',
            '1',
            clsPubLocalStorage.idCurrEduCls,
          );

          if (returnBool2 == true) {
            console.log('论文数据总表同步成功；');
          } else {
            console.log('论文数据总表同步失败；');
          }

          //添加完自动关注该论文

          returnBool4 = await this.btnAttention_Click(strPaperId2);

          if (returnBool4 == true) {
            console.log('论文关注成功；');
          } else {
            console.log('论文关注失败；');
          }

          this.Clear();

          const strInfo = `添加记录成功!`;

          message.success(strInfo);
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,

          returnBool = await this.UpdateRecordSave();
          if (returnBool == true) {
            //判断只有原创论文才记录历史版本
            if (this.paperTypeId0 == '02') {
              const returnBool = await this.AddVersionRecordSave(this.keyId);
              if (returnBool == true) {
                //alert("添加历史版本出问题！");
              }
            }
            //把数据更新到总表

            returnBool2 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              this.keyId,
              '01',
              '2',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool2 == true) {
              console.log('论文数据总表同步成功；');
            } else {
              console.log('论文数据总表同步失败；');
            }

            //修改成功后删除附件并添加新的附件
            await this.DelOldfileAddNewfile();
            //修改成功后统计附件数量到论文表
            await this.AddAttachmentCount(this.keyId);
            const strInfo = `修改记录成功!`;
            alert(strInfo);
            this.Disabled_false();
            this.Clear();
            this.HideDialog_Paper();
          }
          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

          break;
      }
      //取消提交按钮不可用状态

      HideDivInDivObj(divName, 'divLoading');
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  //统计附件数量并添加到论文表
  public async AddAttachmentCount(strPaperId: string) {
    const divName = this.getDivName();
    if (divName == null) return;

    const strThisFuncName = this.AddAttachmentCount.name;

    //添加记录的同时并记录论文的读写数

    const strWhereCond2 = ` 1=1 and paperId='${strPaperId}'`;
    const intAttachmentCount = await PaperAttachment_GetRecCountByCondAsync(strWhereCond2);

    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strPaperId);
    objPaperEN.SetAttachmentCount(intAttachmentCount);

    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    const responseText = await Paper_UpdateRecordAsync(objPaperEN);
    const returnBool = !!responseText;
    if (returnBool == true) {
      PaperEx_ReFreshThisCacheByIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);

      this.iShowList.BindGv(clsPaperEN._CurrTabName, '');

      HideDivInDivObj(divName, 'divLoading');
      //显示信息框
      console.log('添加统计数量成功');
    } else {
      const strInfo = `添加统计数量不成功!`;
      alert(strInfo);
      console.log('添加统计数量不成功');
    }
  }

  /* 添加新记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
  */
  public async AddNewRecordSave() {
    const divName = this.getDivName();
    const strPaperId = this.keyId;
    try {
      await Paper_GetMaxStrIdAsync().then((jsonData) => {
        const returnString: string = jsonData.toString();
        if (returnString == '') {
          const strInfo = `获取表Paper的最大关键字为空，不成功，请检查!`;
          //显示信息框
          alert(strInfo);
        } else {
          $('#txtPaperId').val(returnString);
          SetHidPaperId(divName, returnString);
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }

    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strPaperId);
    //创建时间
    objPaperEN.SetCreateDate(clsPubFun4Web.getNowDate_ymd());
    await this.PutDataToPaperClass(objPaperEN);
    try {
      const bolIsExist = await Paper_IsExistAsync(objPaperEN.paperId);

      if (bolIsExist == true) {
        const strMsg = `添加记录时，关键字：${objPaperEN.paperId}已经存在！`;
        alert(strMsg);
        return bolIsExist; //一定要有一个返回值，否则会出错！
      }

      const strCondition = Format(
        " 1 = 1 and paperTitle = '{0}' and paperId in (select paperId from PaperEduClsRela where idCurrEduCls = '{1}')",
        this.paperTitle,
        clsPubLocalStorage.idCurrEduCls,
      );

      const intPaperCount = await Paper_GetRecCountByCondAsync(strCondition);
      if (intPaperCount != 0) {
        const strMsg = `添加记录时，当前教学班论文标题：${objPaperEN.paperTitle}已经存在，请重新命名！`;
        alert(strMsg);
        return false; //一定要有一个返回值，否则会出错！
      }
      const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
        clsPrivateSessionStorage.topicIdInTree,
      );
      const returnBool = await Paper_AddNewRecordAsync(objPaperEN);

      if (returnBool == true) {
        //判断是否有返回的附件路径值
        if (Paper_EditEx.uploadResponseData.fileNameOne != '') {
          //第一个附件框判断
          const returnBool_AddPaperAttach = await PaperAttachmentEx_AddPaperAttachment(
            strPaperId,
            strIdCurrEduCls,
            Paper_EditEx.uploadResponseData,
          );
        }
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  //添加历史版本
  public async AddVersionRecordSave(strPaperId: string) {
    const divName = this.getDivName();
    const strThisFuncName = this.AddVersionRecordSave.name;

    // const strPaperId = GetHidPaperId(divName);
    const objgs_PaperEN: clsgs_PaperVerEN = new clsgs_PaperVerEN();
    objgs_PaperEN.SetPaperId(strPaperId);
    this.PutDataToPaperVerClass(objgs_PaperEN);

    try {
      const responseText2 = await gs_PaperVer_AddNewRecordAsync(objgs_PaperEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1=1 and paperId='${strPaperId}'`;
        const intVersionCount = await gs_PaperVer_GetRecCountByCondAsync(strWhereCond2);

        const objPaperEN: clsPaperEN = new clsPaperEN();
        objPaperEN.SetPaperId(strPaperId);
        objPaperEN.SetVersionCount(intVersionCount);

        objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        Paper_UpdateRecordAsync(objPaperEN).then((jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == true) {
            return true;
          } else {
            const strInfo = `添加历史版本数不成功!`;
            alert(strInfo);
            console.log('添加历史版本数不成功');
            return false;
          }
        });
        return true;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加版本记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }
  //public async GetPaperDataByPaperId() {

  //}
  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjPaperEN">数据传输的目的类对象</param>
   */
  public async PutDataToPaperVerClass(pobjPaperEN: clsgs_PaperVerEN) {
    const divName = this.getDivName();
    const strPaperId = GetHidPaperId(divName);
    pobjPaperEN.SetPaperId(strPaperId); // 论文Id
    pobjPaperEN.SetPaperTitle(this.paperTitle); // 论文标题
    pobjPaperEN.SetPaperContent(this.paperContent); // 主题内容
    pobjPaperEN.SetPeriodical(this.periodical); // 期刊
    pobjPaperEN.SetAuthor(this.author); // 作者
    pobjPaperEN.SetResearchQuestion(this.researchQuestion); // 研究问题
    pobjPaperEN.SetUpdDate(clsPubFun4Web.getNowDate_ymd()); // 修改日期
    pobjPaperEN.SetUpdUser(userStore.getUserId); // 修改用户Id

    pobjPaperEN.SetMemo(this.memo); // 备注
    pobjPaperEN.SetKeyword(this.keyword); // 关键字
    pobjPaperEN.SetLiteratureSources(this.literatureSources); // 文献来源
    pobjPaperEN.SetLiteratureLink(this.literatureLink); // 文献链接
    pobjPaperEN.SetLiteratureTypeId(this.literatureTypeId); //文献类型
    pobjPaperEN.SetUploadfileUrl(Paper_EditEx.uploadResponseData.fileNamePic);
    pobjPaperEN.SetIsQuotethesis(this.isQuotethesis); // 是否引用论文
    pobjPaperEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjPaperEN.SetQuoteId(this.quoteId); // 引用Id
    pobjPaperEN.SetIsChecked(this.isChecked); // 是否检查
    pobjPaperEN.SetChecker(this.checker); // 审核人

    pobjPaperEN.SetPaperTypeId(this.paperTypeId); // 论文类型
    pobjPaperEN.SetPaperStatusId(this.paperStatusId); // 论文状态
    this.paperTypeId0 = this.paperTypeId;
  }

  /*
   * 论文类型
   */
  public set paperTypeId(value: string) {
    const divName = this.getDivName();
    SetSelectValueByIdInDivObj(divName, 'ddlPaperTypeId', value);
  }
  /*
   * 论文类型
   */
  public get paperTypeId(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlPaperTypeId');
  }

  /*
   * 论文状态
   */
  public set paperStatusId(value: string) {
    const divName = this.getDivName();
    SetSelectValueByIdInDivObj(divName, 'ddlPaperStatusId', value);
  }
  /*
   * 论文状态
   */
  public get paperStatusId(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlPaperStatusId');
  }

  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {
    this.paperId = '';
    this.paperTitle = '';
    this.paperContent = '';
    if (userStore.userType != UserTypeMap.middle_School) {
      this.periodical = '';
      this.isQuotethesis = false;
    }
    this.author = '';
    this.researchQuestion = '';
    //this.updDate = "";
    //this.updUser = "";
    this.memo = '';
    this.keyword = '';
    this.literatureSources = '';
    this.literatureLink = '';
    // this.uploadfileUrl = '';

    // this.quoteId = '';
    this.isChecked = false;
    this.checker = '';
    $('#ddlLiteratureTypeId option[0]').attr('selected', 'true');
    this.Uploadfile = '';

    $('#ddlPaperTypeId option[0]').attr('selected', 'true');
    $('#ddlPaperStatusId option[0]').attr('selected', 'true');
  }

  /*
   * 设置上传文件
   */
  public set Uploadfile(value: string) {
    const divName = this.divEdit;
    SetInputValueInDivObj(divName, 'txtUploadfile', value);
  }
  /*
   * 获取上传文件
   */
  public get Uploadfile(): string {
    return GetInputValueInDivObj(this.divEdit, 'txtUploadfile');
  }

  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjPaperEN">数据传输的目的类对象</param>
  */
  public async PutDataToPaperClass(pobjPaperEN: clsPaperEN) {
    const divName = this.divEdit;
    //pobjPaperEN.SetPaperId(this.paperId;// 论文Id
    pobjPaperEN.SetPaperTitle(this.paperTitle); // 论文标题
    pobjPaperEN.SetPaperContent(this.paperContent); // 主题内容
    pobjPaperEN.SetAuthor(this.author); // 作者
    pobjPaperEN.SetResearchQuestion(this.researchQuestion); // 研究问题
    pobjPaperEN.SetUpdDate(clsPubFun4Web.getNowDate_ymd()); // 修改日期
    pobjPaperEN.SetUpdUser(userStore.getUserId); // 修改用户Id

    if (userStore.userType == UserTypeMap.middle_School) {
      pobjPaperEN.SetIdGrade(this.idGrade); // 修改用户Id
      if (this.idGrade != '') {
        const objXzGrade = await XzGrade_GetObjByIdGradeCache(this.idGrade);
        if (objXzGrade != null) {
          pobjPaperEN.SetIdStudyLevel(objXzGrade.idStudyLevel); // 修改用户Id
        }
      }
      pobjPaperEN.SetLiteratureTypeId(enumLiteratureType.SecondarySchoolReading_05); //文献类型
    } else {
      pobjPaperEN.SetLiteratureTypeId(this.literatureTypeId); //文献类型
      pobjPaperEN.SetPeriodical(this.periodical); // 期刊
      pobjPaperEN.SetIsQuotethesis(this.isQuotethesis); // 是否引用论文
    }
    pobjPaperEN.SetMemo(this.memo); // 备注
    pobjPaperEN.SetKeyword(this.keyword); // 关键字
    pobjPaperEN.SetLiteratureSources(this.literatureSources); // 文献来源
    pobjPaperEN.SetLiteratureLink(this.literatureLink); // 文献链接

    pobjPaperEN.SetUploadfileUrl(Paper_EditEx.uploadResponseData.fileNamePic);
    //pobjPaperEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls;
    // pobjPaperEN.SetQuoteId(this.quoteId); // 引用Id
    pobjPaperEN.SetIsChecked(this.isChecked); // 是否检查
    pobjPaperEN.SetChecker(this.checker); // 审核人
    pobjPaperEN.SetShareId(this.shareId);
    if (userStore.userType == UserTypeMap.middle_School) {
      pobjPaperEN.SetPaperTypeId('03'); // 论文类型  该页面默认状态为01
    } else {
      pobjPaperEN.SetPaperTypeId('01'); // 论文类型  该页面默认状态为01
    }
    pobjPaperEN.SetPaperStatusId(this.paperStatusId); // 论文状态
    pobjPaperEN.SetIsPublic(true); //引用论文 默认为true
  }

  /* 函数功能:把类对象的属性内容显示到界面上
   注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
    如果在设置数据库时,就应该一级字段在前,二级字段在后
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
    <param name = "pobjPaperEN">表实体类对象</param>
  */
  public async GetDataFromPaperClass(pobjPaperEN: clsPaperEN) {
    this.paperId = pobjPaperEN.paperId; // 论文Id
    this.paperTitle = pobjPaperEN.paperTitle; // 论文标题
    this.paperContent = pobjPaperEN.paperContent; // 主题内容

    this.author = pobjPaperEN.author; // 作者
    this.researchQuestion = pobjPaperEN.researchQuestion; // 研究问题
    if (userStore.userType == UserTypeMap.middle_School) {
      this.idGrade = pobjPaperEN.idGrade; // 年级
    } else {
      this.periodical = pobjPaperEN.periodical; // 期刊
      this.literatureTypeId = pobjPaperEN.literatureTypeId; //文献类型；
      this.isQuotethesis = pobjPaperEN.isQuotethesis; // 是否引用论文
    }
    //this.updDate = pobjPaperEN.updDate;// 修改日期
    //this.updUser = pobjPaperEN.updUser;// 修改用户Id
    this.memo = pobjPaperEN.memo; // 备注
    this.keyword = pobjPaperEN.keyword; // 关键字
    this.literatureSources = pobjPaperEN.literatureSources; // 文献来源
    this.literatureLink = pobjPaperEN.literatureLink; // 文献链接

    Paper_EditEx.uploadResponseData.fileNamePic = pobjPaperEN.uploadfileUrl;

    // this.quoteId = pobjPaperEN.quoteId; // 引用Id
    this.isChecked = pobjPaperEN.isChecked; // 是否检查
    this.checker = pobjPaperEN.checker; // 审核人
    this.paperTypeId = pobjPaperEN.paperTypeId; // 论文类型
    this.paperStatusId = pobjPaperEN.paperStatusId; // 论文状态
    this.shareId = pobjPaperEN.shareId;

    if (pobjPaperEN.isSubmit == true) {
      this.Disabled_true();
    } else {
      this.Disabled_false();
    }

    if (pobjPaperEN.paperTypeId != '') {
      if (pobjPaperEN.paperTypeId == '02') {
        $('#ddlPaperTypeId').attr('disabled', 'true');
        $('#ddlPaperStatusId').attr('disabled', 'false'); //原创论文可以修改 论文状态；
      } else {
        $('#ddlPaperTypeId').attr('disabled', 'true');
        $('#ddlPaperStatusId').attr('disabled', 'true');
      }
    }
    setTextboxio();
  }

  //屏蔽控件
  public Disabled_true() {
    const divName = this.getDivName();
    if (divName == null) return;

    SetInputDisable(divName, 'txtPaperTitle', true);

    $('#txtPeriodical').attr('disabled', 'true');

    $('#txtResearchQuestion').attr('disabled', 'true');
    $('#txtKeyword').attr('disabled', 'true');
    $('#ddlLiteratureTypeId').attr('disabled', 'true');

    $('#txtLiteratureSources').attr('disabled', 'true');
    $('#txtLiteratureLink').attr('disabled', 'true');

    $('#txtLiteratureLink').attr('disabled', 'true');
    $('#txtLiteratureLink').attr('disabled', 'true');

    $('#ddlPaperTypeId').attr('disabled', 'true');
    $('#ddlPaperStatusId').attr('disabled', 'true');
  }
  public async DelOldfileAddNewfile() {
    let strPaperId = this.keyId;
    try {
      //得到相关论文附件地址，判断是否为空
      if (
        Paper_EditEx.uploadResponseData.fileNameOne != '' ||
        Paper_EditEx.uploadResponseData.fileNameTwo != '' ||
        Paper_EditEx.uploadResponseData.fileNameThree != ''
      ) {
        //根据Id删除附件
        const strwhere = `paperId ='${this.keyId}'`;
        await this.DelRecordByWhere(strwhere);
      }
      //不管是否有数据删除 都需要执行附件添加功能
      //判断是否有返回的附件路径值
      //判断是否有返回的附件路径值
      const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
        clsPrivateSessionStorage.topicIdInTree,
      );
      if (Paper_EditEx.uploadResponseData.fileNameOne != '') {
        //第一个附件框判断
        const returnBool_AddPaperAttach = await PaperAttachmentEx_AddPaperAttachment(
          strPaperId,
          strIdCurrEduCls,
          Paper_EditEx.uploadResponseData,
        );
      }
    } catch (e: any) {
      const strInfo = `修改记录不成功!`;

      //显示信息框
      alert(strInfo);
      console.log('完成UpdateRecordSave');
    }
  }

  /* 
   根据关键字删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
  */
  public async DelRecordByWhere(strWhere: string) {
    try {
      const returnInt = await PaperAttachment_DelPaperAttachmentsByCondAsync(strWhere);
      if (returnInt > 0) {
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
        console.log(`删除附件成功,共删除${returnInt}条记录!`);
      } else {
        // const strInfo = `删除记录不成功!`;
        //显示信息框
        //alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 根据关键字获取相应的记录的对象
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
    <param name = "sender">参数列表</param>
  */
  public async UpdateRecord(strPaperId: string): Promise<boolean> {
    const divName = this.getDivName();
    if (divName == null) return false;
    const strThisFuncName = this.UpdateRecord.name;
    this.btnSubmitPaper = '确认修改';
    this.btnCancelPaper = '取消修改';
    this.keyId = strPaperId;

    try {
      const objPaperEN = await Paper_GetObjByPaperIdAsync(strPaperId);

      if (objPaperEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }

      $('#btnOKUpd').show();
      $('#btnCancel').show();

      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_Paper(this.opType);
      if (bolIsSuccess == false) return false;
      this.GetDataFromPaperClass(objPaperEN);
      SetInputDisable(divName, 'txtPaperTitle', true);
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }

  //添加关注
  public async btnAttention_Click(strPaperId: string) {
    try {
      const strUserId = userStore.getUserId;
      const strWhereCond = ` 1 =1 and updUser='${strUserId}' and paperId='${strPaperId}'`;

      const responseText = await gs_PaperAttention_IsExistRecordAsync(strWhereCond);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `您已经关注过这条论文了，请关注其他论文！`;
        message.warning(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const strWhereCond1 = ` updUser='${strUserId}' and paperGroupName='${clsPubLocalStorage.eduClsName}'`;

      const objgs_PaperGroup = await gs_PaperGroup_GetFirstObjAsync(strWhereCond1);

      const objgs_PaperAttentionEN: clsgs_PaperAttentionEN = new clsgs_PaperAttentionEN();
      objgs_PaperAttentionEN.SetPaperId(strPaperId);
      objgs_PaperAttentionEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
      objgs_PaperAttentionEN.SetUpdUser(strUserId); // 修改用户Id
      objgs_PaperAttentionEN.SetUserId(strUserId); // 修改用户Id
      if (objgs_PaperGroup != null) {
        objgs_PaperAttentionEN.SetPaperGroupId(objgs_PaperGroup.paperGroupId);
      } else {
        const objgs_PaperGroupEN: clsgs_PaperGroupEN = new clsgs_PaperGroupEN();
        objgs_PaperGroupEN.SetPaperGroupName(clsPubLocalStorage.eduClsName);
        objgs_PaperGroupEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
        objgs_PaperGroupEN.SetUpdUser(strUserId); // 修改用户Id

        const strPaperGroupId = await gs_PaperGroup_AddNewRecordWithReturnKeyAsync(
          objgs_PaperGroupEN,
        );
        if (strPaperGroupId != '') {
          objgs_PaperAttentionEN.SetPaperGroupId(strPaperGroupId);
        }
      }

      const responseText3 = await gs_PaperAttention_AddNewRecordAsync(objgs_PaperAttentionEN);
      const returnBool = !!responseText3;
      if (returnBool == true) {
        this.iShowList.BindGv(clsPaperEN._CurrTabName, '');
        //    this.BindGv_vPaper();
        //     message.success('已关注！');
      } else {
        const strInfo = `关注不成功!`;

        //显示信息框
        alert(strInfo);
        //this.BindGv_vPaperSubViewpoint();
      }
      return responseText3; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `关注不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  /* 修改记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
  */
  public async btnUpdateRecord_Click(strKeyId: string) {
    const bolIsSuccess = await this.ShowDialog_Paper(this.opType);
    if (bolIsSuccess == false) return;

    const divName = this.getDivName();
    if (divName == null) return;

    await this.BindDdl4EditRegionInDiv();

    this.opType = 'Update';

    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }

    this.UpdateRecord(strKeyId);
    //因为是修改2个信息都显示；
    $('#liextendEdit').attr('style', 'display:block;');
    HideDivInDivObj(divName, 'divLoading');
  }

  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateRecordSave(): Promise<boolean> {
    const divName = this.getDivName();
    if (divName == null) return false;

    const strThisFuncName = this.UpdateRecordSave.name;

    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(this.keyId);
    SetHidPaperId(divName, this.keyId);
    await this.PutDataToPaperClass(objPaperEN);
    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      let returnBool = true;
      await Paper_UpdateRecordAsync(objPaperEN).then((jsonData) => {
        returnBool = jsonData;
      });
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  //审核判断；
  public async SubmitRecord(strPaperId: string) {
    this.keyId = strPaperId;

    try {
      const objPaperEN = await Paper_GetObjByPaperIdAsync(strPaperId);
      if (objPaperEN == null) return;
      //通过session 权限获取权限

      //判断角色 //学生00620003
      if (userStore.getRoleId == '00620003') {
        // //通过判断数据用户是否是当前登录用户；
        if (objPaperEN.updUser == userStore.getUserId) {
          //判断数据是否已审核
          if (objPaperEN.isChecked == false) {
            this.SubmitRecordSave();
          } else {
            alert('当前数据已审核！');
            return;
          }
        } else {
          alert('当前数据不是您所添加，不能修改！');
          return;
        }
      } else {
        //可以提交
        //判断数据是否已提交
        if (objPaperEN.isChecked == false) {
          this.SubmitRecordSave();
        } else {
          alert('当前数据已审核！');
          return;
        }
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 论文审核
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async SubmitRecordSave(): Promise<boolean> {
    const strThisFuncName = this.SubmitRecordSave.name;
    //
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(this.keyId);
    //设置提交状态；
    objPaperEN.SetIsChecked(true);
    this.PutDataToPaperClassAudit(objPaperEN);
    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        const strInfo = `论文审核成功!`;

        //显示信息框
        alert(strInfo);
        //刷新缓存
        PaperEx_ReFreshThisCacheByIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
        this.HideDialog_Paper();
        //this.BindGv_vPaper();
        this.iShowList.BindGv(clsPaperEN._CurrTabName, '');
      } else {
        const strInfo = `论文审核不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('审核失败');
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjPaperReadWriteEN">数据传输的目的类对象</param>
*/
  public PutDataToPaperClassAudit(pobjPaperEN: clsPaperEN) {
    //pobjPaperReadWriteEN.SetPaperRWId(this.paperRWId;// 论文读写Id
    pobjPaperEN.SetIsChecked(true);
    pobjPaperEN.SetChecker(userStore.getUserId); //提交人；
  }

  //论文审核
  public async btnAudit_Click(strKeyId: string) {
    if (IsNullOrEmpty(strKeyId) == true) {
      alert('请选择需要审核的记录！');
      return;
    }

    this.SubmitRecord(strKeyId);
  }

  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjMajorDirectionPaperRelaEN">数据传输的目的类对象</param>
  */
  public PutDataToMajorDirectionPaperRelaClass(
    pobjMajorDirectionPaperRelaEN: clsMajorDirectionPaperRelaEN,
  ) {
    const divName = this.getDivName();
    const strMajorDirectionId = GetInputValueInDivObj(divName, 'hidMajorDirectionId');
    //strViewpointId = $("#hidPaperId").val();
    // const strUserId = userStore.getUserId;

    pobjMajorDirectionPaperRelaEN.SetMajorDirectionId(strMajorDirectionId); // 研究方向Id
    pobjMajorDirectionPaperRelaEN.SetPaperId(GetHidPaperId(divName)); // 论文Id
    pobjMajorDirectionPaperRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjMajorDirectionPaperRelaEN.SetUpdUser(userStore.getUserId); // 修改人

    pobjMajorDirectionPaperRelaEN.SetMemo(this.memo); // 备注
  }

  /* 添加新记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 */
  public async AddNewRecordSaveMajorDirection() {
    const divName = this.getDivName();
    const strMajorDirectionId = GetInputValueInDivObj(divName, 'hidMajorDirectionId'); //专业方向
    const strPaperId = GetHidPaperId(divName); //论文

    const objMajorDirectionPaperRelaEN: clsMajorDirectionPaperRelaEN =
      new clsMajorDirectionPaperRelaEN();
    this.PutDataToMajorDirectionPaperRelaClass(objMajorDirectionPaperRelaEN);
    try {
      //同一论文不能重复添加同一个专业方向；
      const strWhere = ` 1 = 1 And paperId = '${strPaperId}' And majorDirectionId = '${strMajorDirectionId}'`;
      const responseText = await MajorDirectionPaperRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一论文不能重复添加同一个专业方向！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await MajorDirectionPaperRela_AddNewRecordAsync(
        objMajorDirectionPaperRelaEN,
      );
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
        HideDialogOne();
        //window.location.href = "../GradEduEx/PaperCRUD?paperTypeId=01";
        window.location.href = `../GraduateEdu/PaperAddXzmajorRela?paperId='${strPaperId}'`;
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  //用来选择专业记录方法；
  public btnOkInTab_Click(strKeyId: string) {
    $('#hidMajorDirectionId').val(strKeyId); //专业方向
    this.AddNewRecordSaveMajorDirection();
  }

  //--------------------------------
  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjPaperEN">数据传输的目的类对象</param>
   */
  public async PutDataToPaperClassV2(pobjPaperEN: clsPaperEN) {
    const divName = this.getDivName();
    //pobjPaperEN.SetPaperId(this.paperId;// 论文Id
    pobjPaperEN.SetPaperTitle(this.paperTitle); // 论文标题

    pobjPaperEN.SetPaperContent(this.paperContent); // 主题内容
    pobjPaperEN.SetPeriodical(this.periodical); // 期刊
    pobjPaperEN.SetAuthor(this.author); // 作者
    pobjPaperEN.SetResearchQuestion(this.researchQuestion); // 研究问题
    pobjPaperEN.SetUpdDate(clsPubFun4Web.getNowDate_ymd()); // 修改日期
    pobjPaperEN.SetUpdUser(userStore.getUserId); // 修改用户Id

    pobjPaperEN.SetMemo(this.memo); // 备注
    pobjPaperEN.SetKeyword(this.keyword); // 关键字
    pobjPaperEN.SetLiteratureSources(this.literatureSources); // 文献来源
    pobjPaperEN.SetLiteratureLink(this.literatureLink); // 文献链接
    pobjPaperEN.SetLiteratureTypeId(this.literatureTypeId); //文献类型
    pobjPaperEN.SetUploadfileUrl(Paper_EditEx.uploadResponseData.fileNamePic);
    pobjPaperEN.SetIsQuotethesis(this.isQuotethesis); // 是否引用论文
    //pobjPaperEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls;
    pobjPaperEN.SetQuoteId(this.quoteId); // 引用Id
    pobjPaperEN.SetIsChecked(this.isChecked); // 是否检查
    pobjPaperEN.SetChecker(this.checker); // 审核人

    pobjPaperEN.SetPaperTypeId('02'); // 论文类型----默认自研论文，02；
    pobjPaperEN.SetPaperStatusId(this.paperStatusId); // 论文状态
    pobjPaperEN.SetIsPublic(false); //原创论文默认为false
  }

  /* 函数功能:把类对象的属性内容显示到界面上
     注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
      如果在设置数据库时,就应该一级字段在前,二级字段在后
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
      <param name = "pobjPaperEN">表实体类对象</param>
    */
  public GetDataFromPaperClassV2(pobjPaperEN: clsPaperEN) {
    this.paperId = pobjPaperEN.paperId; // 论文Id
    this.paperTitle = pobjPaperEN.paperTitle; // 论文标题

    this.paperContent = pobjPaperEN.paperContent; // 主题内容
    this.periodical = pobjPaperEN.periodical; // 期刊
    this.author = pobjPaperEN.author; // 作者
    this.researchQuestion = pobjPaperEN.researchQuestion; // 研究问题
    // this.updDate = pobjPaperEN.updDate; // 修改日期
    this.updUser = pobjPaperEN.updUser; // 修改用户Id
    this.memo = pobjPaperEN.memo; // 备注
    this.keyword = pobjPaperEN.keyword; // 关键字
    this.literatureSources = pobjPaperEN.literatureSources; // 文献来源
    this.literatureLink = pobjPaperEN.literatureLink; // 文献链接
    this.literatureTypeId = pobjPaperEN.literatureTypeId; //文献类型；
    Paper_EditEx.uploadResponseData.fileNamePic = pobjPaperEN.uploadfileUrl;
    this.isQuotethesis = pobjPaperEN.isQuotethesis; // 是否引用论文
    this.quoteId = pobjPaperEN.quoteId; // 引用Id
    this.isChecked = pobjPaperEN.isChecked; // 是否检查
    this.checker = pobjPaperEN.checker; // 审核人
    this.paperTypeId = pobjPaperEN.paperTypeId; // 论文类型
    this.paperStatusId = pobjPaperEN.paperStatusId; // 论文状态

    setTextboxio();

    if (pobjPaperEN.isSubmit == true) {
      this.Disabled_true();
    } else {
      this.Disabled_false();
    }

    //if (pobjPaperEN.paperTypeId != "") {
    //    if (pobjPaperEN.paperTypeId == "02") {
    //        $("#ddlPaperTypeId").attr("disabled", true);
    //        $("#ddlPaperStatusId").attr("disabled", false); //原创论文可以修改 论文状态；
    //    }
    //    else {
    //        $("#ddlPaperTypeId").attr("disabled", true);
    //        $("#ddlPaperStatusId").attr("disabled", true);
    //    }

    //}
  }

  /*
   * 修改用户Id
   */
  public set updUser(value: string) {
    const divName = this.divEdit;
    SetInputValueInDivObj(divName, 'hidUserId', value);
  }
  /*
   * 修改用户Id
   */
  public get updUser(): string {
    return userStore.getUserId;
  }
  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public ClearV2() {
    this.paperId = '';
    this.paperTitle = '';
    this.paperContent = '';
    this.periodical = '';
    this.author = '';
    this.researchQuestion = '';
    // this.updDate = '';
    this.updUser = '';
    this.memo = '';
    this.keyword = '';
    this.literatureSources = '';
    this.literatureLink = '';
    this.uploadfileUrl = '';
    this.isQuotethesis = false;
    this.quoteId = '';
    this.isChecked = false;
    this.checker = '';
    $('#ddlLiteratureTypeId option[0]').attr('selected', 'true');
    this.Uploadfile = '';

    $('#ddlPaperTypeId option[0]').attr('selected', 'true');
    $('#ddlPaperStatusId option[0]').attr('selected', 'true');
  }
  //新建论文
  public async btnAddNewPaper_Click() {
    this.opType = 'Add';
    try {
      await this.AddNewRecord();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 添加新记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
 */
  public async btnAddNewRecord_ClickV2() {
    this.opType = 'Add';
    try {
      await this.AddNewRecord();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 为插入记录做准备工作 设置相关操作；
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
   */
  public async AddNewRecordV2() {
    //this.SetKeyReadOnly(false);
    // this.btnSubmitgs_PaperVer = '确认添加';
    // this.btnCancelgs_PaperVer = '取消添加';
    this.Clear();
    this.Disabled_false();
    //$('#btnOKUpd').attr("disabled", false);
    //wucPaperB1.paperId = clsPaperBL.GetMaxStrId_S();
  }
  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
*/
  public async AddNewRecordWithMaxIdSaveRetrunIdV2() {
    const divName = this.getDivName();
    const objPaperEN: clsPaperEN = new clsPaperEN();
    this.PutDataToPaperClass(objPaperEN);
    try {
      //先判断数据论文标题是否重名
      const intPaperCount = await Paper_GetRecCountByCondAsync(
        `1=1 and paperTitle='${this.paperTitle}' and idCurrEduCls ='${clsPubLocalStorage.idCurrEduCls}'`,
      );
      if (intPaperCount != 0) {
        const strMsg = `添加记录时，当前教学班论文标题：${objPaperEN.paperTitle}已经存在，请重新命名！`;
        alert(strMsg);
        return false; //一定要有一个返回值，否则会出错！
      }
      const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
        clsPrivateSessionStorage.topicIdInTree,
      );
      //const responseText2 = await SysSkill_AddNewRecordWithMaxIdAsync(objSysSkillEN);
      const responseText = await Paper_AddNewRecordWithReturnKeyAsync(objPaperEN);
      const strPaperId: string = responseText;
      //const returnBool: boolean = !!responseText2;
      if (strPaperId != '' && Paper_EditEx.uploadResponseData.fileNameOne != '') {
        const returnBool_AddPaperAttach = await PaperAttachmentEx_AddPaperAttachment(
          strPaperId,
          strIdCurrEduCls,
          Paper_EditEx.uploadResponseData,
        );

        return returnBool_AddPaperAttach;
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return strPaperId; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    //return strSysPaperId;//一定要有一个返回值，否则会出错！
  }
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
  具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnOKUpd_ClickV2() {
    const divName = this.getDivName();
    if (divName == null) return;

    if (userStore.getUserId != '') {
      const strCommandText = this.btnSubmitPaper; // gs_PaperVer;
      try {
        let returnBool = true;
        let returnId;
        switch (strCommandText) {
          case '添加':
            await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,

            returnId = await this.AddNewRecordWithMaxIdSaveRetrunId();
            if (returnId.length > 0) {
              //添加成功后统计附件数量到论文表
              await this.AddAttachmentCount(returnId);

              //添加主题论文关系 --添加时候需要添加，主题论文关系，修改时候，只是修改论文；
              await this.AddNewRecordSavePaperRela();

              //添加记录的同时添加历史版本 判断只有原创论文才记录历史版本
              await this.AddVersionRecordSave(returnId).then((jsonData) => {
                const returnBool: boolean = jsonData;
                if (returnBool == true) {
                  //alert("添加历史版本出问题！");
                }
              });

              //添加论文日志；
              await this.Addgs_OriginalPaperLogSave();

              const strInfo = `添加记录成功!`;
              alert(strInfo);
              this.Clear();
            }
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,

            await this.UpdateRecordSave().then((jsonData) => {
              returnBool = jsonData;
            });
            if (returnBool == true) {
              //判断只有原创论文才记录历史版本
              if (this.paperTypeId0 == '02') {
                await this.AddVersionRecordSave(this.keyId).then((jsonData) => {
                  const returnBool: boolean = jsonData;
                  if (returnBool == true) {
                    //alert("添加历史版本出问题！");
                  }
                });
              }

              //修改成功后删除附件并添加新的附件
              await this.DelOldfileAddNewfile();
              //修改成功后统计附件数量到论文表
              await this.AddAttachmentCount(this.keyId);

              //判断是初稿、修改稿、终稿；
              //添加论文日志；
              await this.Addgs_OriginalPaperLogSave();

              const strInfo = `修改记录成功!`;
              alert(strInfo);
              this.Disabled_false();
              this.Clear();
            }
            break;
          default:
            AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

            break;
        }
        //取消提交按钮不可用状态
        HideDivInDivObj(divName, 'divLoading');
        $('#btnOKUpd').attr('disabled', 'false');
      } catch (e: any) {
        const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
        alert(strMsg);
      }
    } else {
      $('#btnOKUpd').attr('disabled', 'false');
      alert('用户session丢失，请重新登录！');
    }
  }
  /* 添加新记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
  */
  public async AddNewRecordSaveV2() {
    const divName = this.getDivName();
    let strPaperId = '';
    try {
      const returnString: string = await Paper_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = `获取表Paper的最大关键字为空，不成功，请检查!`;
        //显示信息框
        alert(strInfo);
      } else {
        $('#txtPaperId').val(returnString);
        strPaperId = returnString;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }

    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(GetHidPaperId(divName));
    await this.PutDataToPaperClass(objPaperEN);
    try {
      const responseText03 = await Paper_IsExistAsync(objPaperEN.paperId);
      const bolIsExist: boolean = responseText03;
      if (bolIsExist == true) {
        const strMsg = `添加记录时，关键字：${objPaperEN.paperId}已经存在！`;
        alert(strMsg);
        return responseText03; //一定要有一个返回值，否则会出错！
      }

      const intPaperCount = await Paper_GetRecCountByCondAsync(
        `1=1 and paperTitle='${this.paperTitle}' and idCurrEduCls ='${clsPubLocalStorage.idCurrEduCls}'`,
      );
      if (intPaperCount != 0) {
        const strMsg = `添加记录时，当前教学班论文标题：${objPaperEN.paperTitle}已经存在，请重新命名！`;
        alert(strMsg);
        return false; //一定要有一个返回值，否则会出错！
      }

      const returnBool = await Paper_AddNewRecordAsync(objPaperEN);
      const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(
        clsPrivateSessionStorage.topicIdInTree,
      );
      if (returnBool == true) {
        //判断是否有返回的附件路径值
        if (Paper_EditEx.uploadResponseData.fileNameOne != '') {
          const returnBool_AddPaperAttach = await PaperAttachmentEx_AddPaperAttachment(
            strPaperId,
            strIdCurrEduCls,
            Paper_EditEx.uploadResponseData,
          );

          return returnBool_AddPaperAttach;
        }
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  /* 修改记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
  */
  public async btnUpdateRecord_ClickV2(strKeyId: string) {
    const divName = this.getDivName();
    if (divName == null) return;

    const strLogId = GetInputValueInDivObj(divName, 'PaperLogTypeId');
    const strPaperTypeLogId = this.GetPapertypeLogId(strLogId);
    try {
      //通过Id查询是否存在此记录，不存在则提示不能进行此步骤操作；
      //收集子观点类型是02 ，那么就查询上一级步骤是否已经完成 所以需要 查询01；
      const strWhere = ` 1=1 And logTypeId='${strPaperTypeLogId}'`;

      const objgs_OriginalPaperLog = await gs_OriginalPaperLog_GetFirstObjAsync(strWhere);
      if (objgs_OriginalPaperLog != null) {
        this.opType = 'Update';

        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        this.UpdateRecord1(strKeyId);
      } else {
        //成员
        const strMsg = `上一步骤未完成，不可使用此功能！`;
        alert(strMsg);
        return;
      }
      HideDivInDivObj(divName, 'divLoading');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `收集子观点方法不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateRecordSaveV2() {
    const strThisFuncName = this.UpdateRecordSave.name;

    const divName = this.getDivName();
    if (divName == null) return;

    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(this.keyId);
    SetHidPaperId(divName, this.keyId);
    await this.PutDataToPaperClass(objPaperEN);
    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      let returnBool = true;
      await Paper_UpdateRecordAsync(objPaperEN).then((jsonData) => {
        returnBool = jsonData;
      });
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
  /* 根据关键字获取相应的记录的对象
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
    <param name = "sender">参数列表</param>
  */
  public async UpdateRecord1(strPaperId: string) {
    const divName = this.getDivName();
    if (divName == null) return false;
    const strThisFuncName = this.UpdateRecord.name;
    // this.btnSubmitgs_PaperVer = '确认修改';
    // this.btnCancelgs_PaperVer = '取消修改';
    this.keyId = strPaperId;

    try {
      const objPaperEN = await Paper_GetObjByPaperIdAsync(strPaperId);
      if (objPaperEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      $('#btnOKUpd').show();
      $('#btnCancel').show();

      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_Paper(this.opType);
      if (bolIsSuccess == false) return;

      this.GetDataFromPaperClass(objPaperEN);
      SetInputDisable(divName, 'txtPaperTitle', true);
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  ///////////////////////////////////////////////----------------------------------------------------添加主题论文关系
  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSavePaperRela() {
    // const divName = this.getDivName();
    // const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    // const strPaperId = GetHidPaperId(divName);
    // const strUserId = userStore.getUserId;
    const objRTPaperRelaEN: clsRTPaperRelaEN = new clsRTPaperRelaEN();
    this.PutDataToRTPaperRelaClass(objRTPaperRelaEN);

    try {
      //// 同一主题 同一论文 只能添加一次；
      //const strWhere = " 1 = 1 And topicId = '" + strTopicId + "' And paperId = '" + strPaperId + "'";
      //const responseText = await RTPaperRela_IsExistRecordAsync(strWhere);
      //strIdCurrEduclsbolIsExist: boolean = responseText;
      //if (bolIsExist == true) {
      //    strIdCurrEduclsstrMsg: string = `同一主题不能重复添加同一个论文！`;
      //    alert(strMsg);
      //    return responseText;//一定要有一个返回值，否则会出错！
      //}

      const responseText2 = await RTPaperRela_AddNewRecordAsync(objRTPaperRelaEN);
      const returnBool = !!responseText2;
      if (returnBool == false) {
        const strInfo = `添加不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  //添加论文流程日志
  public async Addgs_OriginalPaperLogSave() {
    const objgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN = new clsgs_OriginalPaperLogEN();
    this.PutDataTogs_OriginalPaperLog(objgs_OriginalPaperLogEN);

    try {
      const responseText2 = await gs_OriginalPaperLog_AddNewRecordAsync(objgs_OriginalPaperLogEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        console.log('添加新建论文日志成功');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加日志记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }
  //通过获得步骤类型 返回上一步骤类型ID；
  public GetPapertypeLogId(logTypeId: string): string {
    let strLogTypeId = '';
    try {
      let strMsg = '';
      switch (logTypeId) {
        case '01':
          strLogTypeId = ''; //01第一个流程步骤，所以不用查询上一步骤；
          break;
        case '02':
          strLogTypeId = '01';
          break;
        case '03':
          strLogTypeId = '02';
          break;
        case '04':
          strLogTypeId = '03';
          break;
        case '05':
          strLogTypeId = '04';
          break;
        case '06':
          strLogTypeId = '05';
          break;
        case '07':
          strLogTypeId = '06';

          break;
        default:
          strMsg = `没有数据处理！`;
          alert(strMsg);
          break;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `收集子观点方法不成功,${e}.`;
      alert(strMsg);
    }
    return strLogTypeId;
  }
  public async PutDataTogs_OriginalPaperLog(pobjgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN) {
    const divName = this.getDivName();
    const strPaperId = GetHidPaperId(divName);
    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'PaperLogTypeId');
    pobjgs_OriginalPaperLogEN.SetPaperId(strPaperId);
    pobjgs_OriginalPaperLogEN.SetLogTypeId(strPaperLogTypeId);
    let strMsg = '';
    switch (strPaperLogTypeId) {
      case '01':
        pobjgs_OriginalPaperLogEN.SetLogDescription('新建论文');
        break;
      case '02':
        pobjgs_OriginalPaperLogEN.SetLogDescription('收集子观点');
        break;
      case '03':
        pobjgs_OriginalPaperLogEN.SetLogDescription('论文初稿');
        break;
      case '04':
        pobjgs_OriginalPaperLogEN.SetLogDescription('小组讨论');
        break;
      case '05':
        pobjgs_OriginalPaperLogEN.SetLogDescription('论文修改稿');
        break;
      case '06':
        pobjgs_OriginalPaperLogEN.SetLogDescription('同伴建议');
        break;
      case '07':
        pobjgs_OriginalPaperLogEN.SetLogDescription('论文终稿');

        break;
      default:
        strMsg = `没有数据处理！`;
        alert(strMsg);
        break;
    }
    //pobjgs_OriginalPaperLogEN.SetLogDescription( "新建论文";
    pobjgs_OriginalPaperLogEN.SetUpdUser(userStore.getUserId);
    pobjgs_OriginalPaperLogEN.SetUpdDate(clsPubFun4Web.getNowDate());
  }
  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjRTPaperRelaEN">数据传输的目的类对象</param>
*/
  public PutDataToRTPaperRelaClass(pobjRTPaperRelaEN: clsRTPaperRelaEN) {
    const divName = this.getDivName();
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strPaperId = GetHidPaperId(divName);

    pobjRTPaperRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTPaperRelaEN.SetPaperId(strPaperId); // 论文Id
    pobjRTPaperRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTPaperRelaEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjRTPaperRelaEN.SetMemo(this.memo); // 备注
  }
  //=================================
  //论文类型
  public async BindDdl_gs_PaperType_Cache(ddlgs_PaperTypeId: string) {
    const strWhereCond = ' 1 =1 ';
    const objDdl = document.getElementById(ddlgs_PaperTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlgs_PaperTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrObjLst_Sel: Array<clsgs_PaperTypeEN> = await gs_PaperType_GetObjLstAsync(
        strWhereCond,
      );

      BindDdl_ObjLst(
        ddlgs_PaperTypeId,
        arrObjLst_Sel,
        clsgs_PaperTypeEN.con_PaperTypeId,
        clsgs_PaperTypeEN.con_PaperTypeName,
        '论文类型',
      );
      console.log('完成BindDdl_gs_PaperType_Cache!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //论文状态
  public async BindDdl_gs_PaperStatus_Cache(ddlgs_PaperStatusId: string) {
    const strWhereCond = ' 1 =1 ';
    const objDdl = document.getElementById(ddlgs_PaperStatusId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlgs_PaperStatusId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrObjLst_Sel: Array<clsgs_PaperStatusEN> = await gs_PaperStatus_GetObjLstAsync(
        strWhereCond,
      );

      BindDdl_ObjLst(
        ddlgs_PaperStatusId,
        arrObjLst_Sel,
        clsgs_PaperStatusEN.con_PaperStatusId,
        clsgs_PaperStatusEN.con_PaperStatusName,
        '论文状态',
      );
      console.log('完成BindDdl_gs_PaperStatus_Cache!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async BindDdl_LiteratureTypeId_Cache(ddlLiteratureTypeId: string) {
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      let arrObjLst_Sel: Array<clsLiteratureTypeEN> = await LiteratureType_GetObjLstCache();
      arrObjLst_Sel = arrObjLst_Sel.sort((x) =>
        x.GetFldValue(clsLiteratureTypeEN.con_LiteratureTypeId),
      );
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrObjLst_Sel,
        clsLiteratureTypeEN.con_LiteratureTypeId,
        clsLiteratureTypeEN.con_LiteratureTypeName,
        '文献类型',
      );
      console.log('完成BindDdl_LiteratureTypeId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
}
