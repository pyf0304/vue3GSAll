//import $ from "jquery";
import { message } from '@/utils/myMessage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { PaperSubRes_Edit } from '@/viewsBase/GradEduPaper/PaperSubRes_Edit';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { clsPaperSubResEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubResEN';
import { File_IsHasFile, File_UploadFile, clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { UploadResponseData } from '@/ts/FunClass/UploadResponseData';
import { userStore } from '@/store/modulesShare/user';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import {
  PaperSubRes_AddNewRecordWithReturnKeyAsync,
  PaperSubRes_CheckPropertyNew,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubResWApi';
import { clsPaperResRelaEN } from '@/ts/L0Entity/GradEduPaper/clsPaperResRelaEN';
import { PaperResRela_AddNewRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperResRelaWApi';
import { PaperSubResTypeEx_BindDdl_PaperSubResTypeIdInDivCache } from '@/ts/L3ForWApiEx/ResourceMan/clsPaperSubResTypeExWApi';
import { PaperSubResType_GetObjByPaperSubResTypeIdCache } from '@/ts/L3ForWApi/ResourceMan/clsPaperSubResTypeWApi';
import { enumPaperSubResType } from '@/ts/L0Entity/ResourceMan/clsPaperSubResTypeEN';
/* PaperSubRes_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class PaperSubRes_EditEx extends PaperSubRes_Edit {
  public static uploadResponseData: UploadResponseData = new UploadResponseData();
  public static mySelectedFile: any;
  public paperId = '';
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string, divEdit: HTMLDivElement) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: PaperSubRes_EditEx = <PaperSubRes_EditEx>(
      PaperSubRes_Edit.GetPageEditObj('PaperSubRes_EditEx')
    );
    if (objPage == null) {
      const strMsg = `从预存编辑类获取关键字:[PaperSubRes_EditEx]的对象为空，请在调用编辑类(父类)的定义一下！`;
      console.error(strMsg);
      message.warning(strMsg);
      return;
    }
    if (objPage.divEdit.id == 'temp') {
      objPage.divEdit = divEdit;
    }
    let strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPage.btnUpdateRecord_Click(Number(strKeyId));
        }
        break;
      default:
        strMsg = Format(
          '命令:{0}, 关键字: {1}, 在函数({2}.{3})中没有被处理!',
          strCommandName,
          strKeyId,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
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
      let objPaperSubResType;
      switch (strCommandText) {
        case '添加':
          this.btnSubmitPaperSubRes = '确认添加';
          this.btnCancelPaperSubRes = '取消添加';
          await this.AddNewRecord();
          break;
        case '确认添加':
          //添加文件
          if (this.paperSubResTypeId == '' || this.paperSubResTypeId == '0') {
            alert(`请先选择一个资源类型！`);
            return;
          }
          objPaperSubResType = await PaperSubResType_GetObjByPaperSubResTypeIdCache(
            this.paperSubResTypeId,
          );
          if (objPaperSubResType == null) return;
          const bolIsExist = await File_IsHasFile(
            this.divEdit,
            objPaperSubResType.fileExtentNameLst,
          );
          if (bolIsExist == true) {
            let strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir;
            let strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_PaperSubRes;
            const currHostname = window.location.hostname;

            if (currHostname == 'localhost') {
              strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir_Local;
            }

            // const divName = this.refDivEdit;
            const responseData = await File_UploadFile(
              strUploadWebMainDir,
              strUploadWebSubDir,
              PaperSubRes_EditEx.mySelectedFile,
            );
            PaperSubRes_EditEx.uploadResponseData = responseData;
          }
          if (PaperSubRes_EditEx.uploadResponseData.success == false) {
            alert('上传文件不成功，请联系管理员！');
            return;
          }
          console.error('bolIsExist:', bolIsExist);
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            const returnKeyId = await this.AddNewRecordSaveWithReturnKey();
            if (returnKeyId != '') {
              this.keyId = Number(returnKeyId);
              returnBool = await this.AddPaperResRelaSave();
              if (returnBool == true) {
                PaperSubRes_Edit.EditObj.hideDialog();
                this.iShowList.BindGvCache(clsPaperSubResEN._CurrTabName, '');
              }
            }
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
  /** 函1数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjPaperSubResEN">数据传输的目的类对象</param>
   **/
  public async PutDataToPaperSubResClass(pobjPaperSubResEN: clsPaperSubResEN) {
    pobjPaperSubResEN.SetPaperSubResName(this.paperSubResName); // 子资源名称
    // switch (this.paperSubResTypeId) {
    //   case enumPaperSubResType.Picture_0004:
    //     pobjPaperSubResEN.SetFilePath(PaperSubRes_EditEx.uploadResponseData.fileNamePic); // 文件路径
    //     break;
    //   default:
    pobjPaperSubResEN.SetFilePath(PaperSubRes_EditEx.uploadResponseData.fileNameOne); // 文件路径
    //     break;
    // }

    // pobjPaperSubResEN.SetUploadfileUrl(GetInputValueInDivObj(divName, 'hdnpic'));
    pobjPaperSubResEN.SetIdCurrEduCls(PaperSubRes_Edit.IdCurrEduClsStatic); // 教学班流水号
    pobjPaperSubResEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
    pobjPaperSubResEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
    pobjPaperSubResEN.SetMemo(this.memo); // 备注
    pobjPaperSubResEN.SetPaperSubResTypeId(this.paperSubResTypeId); // 论文子资源类型Id
  }
  /** 函数功能:把类对象的属性内容显示到界面上
   * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   * 如果在设置数据库时,就应该一级字段在前,二级字段在后
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   * @param pobjPaperSubResEN">表实体类对象</param>
   **/
  public async GetDataFromPaperSubResClass(pobjPaperSubResEN: clsPaperSubResEN) {
    this.paperSubResName = pobjPaperSubResEN.paperSubResName; // 子资源名称
    // this.filePath = pobjPaperSubResEN.filePath; // 文件路径
    $('#hdnpic').val(pobjPaperSubResEN.filePath);
    this.memo = pobjPaperSubResEN.memo; // 备注
    this.paperSubResTypeId = pobjPaperSubResEN.paperSubResTypeId; // 论文子资源类型Id
  }
  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSaveWithReturnKey(): Promise<string> {
    const strThisFuncName = this.AddNewRecordSaveWithReturnKey.name;
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
      return ''; //一定要有一个返回值,否则会出错!
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
      return ''; //一定要有一个返回值,否则会出错!
    }
    try {
      //检查唯一性条件
      const bolIsExistCond = await this.CheckUniCond4Add(objPaperSubResEN);
      if (bolIsExistCond == false) {
        return '';
      }
      let returnKeyId = '';
      returnKeyId = await PaperSubRes_AddNewRecordWithReturnKeyAsync(objPaperSubResEN);
      if (returnKeyId != '') {
        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return returnKeyId; //一定要有一个返回值,否则会出错!
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return ''; //一定要有一个返回值,否则会出错!
    }
  }
  //---------------------添加主题论文关系
  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddPaperResRelaSave(): Promise<boolean> {
    const objPaperResRelaEN: clsPaperResRelaEN = new clsPaperResRelaEN();
    this.PutDataToPaperResRelaClass(objPaperResRelaEN);

    try {
      const returnBool = await PaperResRela_AddNewRecordAsync(objPaperResRelaEN);

      if (returnBool == false) {
        const strInfo = `添加不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  /* 函数功能:把界面上的属性数据传到类对象中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
<param name = "pobjPaperResRelaEN">数据传输的目的类对象</param>
*/
  public PutDataToPaperResRelaClass(pobjPaperResRelaEN: clsPaperResRelaEN) {
    //$('#hidUserId').val(objvUserRoleRelation.userId);
    pobjPaperResRelaEN.SetPaperSubResId(this.keyId); // 主题编号
    pobjPaperResRelaEN.SetPaperId(this.paperId); // 论文Id
    pobjPaperResRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjPaperResRelaEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjPaperResRelaEN.SetMemo(this.memo); // 备注
  }

  /**
   * 设置绑定下拉框，针对字段:[PaperSubResTypeId]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_PaperSubResTypeIdInDiv() {
    await PaperSubResTypeEx_BindDdl_PaperSubResTypeIdInDivCache(
      this.divEdit,
      'ddlPaperSubResTypeId',
    ); //
  }
}
