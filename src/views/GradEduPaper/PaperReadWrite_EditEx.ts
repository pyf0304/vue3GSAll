import { clsPaperReadWriteWApiEx } from '@/ts/L3ForWApiEx/GraduateEdu/clsPaperReadWriteWApiEx';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { PaperReadWrite_Edit } from '@/viewsBase/GradEduPaper/PaperReadWrite_Edit';
import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { clsPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsPaperReadWriteEN';
import { PaperAttachment_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import {
  PaperReadWrite_GetFirstObjAsync,
  PaperReadWrite_GetMaxStrIdAsync,
  PaperReadWrite_GetObjByPaperRWIdAsync,
  PaperReadWrite_IsExistAsync,
  PaperReadWrite_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperReadWriteWApi';
import { vPaperReadWrite_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperReadWriteWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetHidPaperRWId, SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { userStore } from '@/store/modulesShare/user';

/* PaperReadWrite_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class PaperReadWrite_EditEx extends PaperReadWrite_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;

    const objPage: PaperReadWrite_EditEx = <PaperReadWrite_EditEx>(
      PaperReadWrite_Edit.GetPageEditObj('PaperReadWrite_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'PaperReadWrite_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PaperReadWrite_EditEx.btn_Click');

        break;
    }
  }

  //跳转到pdf维护子观点页面
  public async btnSubviewPointRecord_Click() {
    const divName = this.getDivName();
    this.opType = 'Update';

    const strKeyId = GetHidPaperRWId(divName);
    const strReadWriteTypeId = GetInputValueInDivObj(divName, 'hidReadWriteTypeId');
    let objPaperReadWrite: clsPaperReadWriteEN;
    let objPaperAttachment: clsPaperAttachmentEN;

    const strWhereCond1 = ` 1=1 and paperRWId ='${strKeyId}'`;

    try {
      const responseText1 = await PaperReadWrite_GetFirstObjAsync(strWhereCond1);
      objPaperReadWrite = <clsPaperReadWriteEN>responseText1;

      const strWhereCond2 = ` 1=1 and paperId ='${objPaperReadWrite.paperId}'`;

      const responseText2 = await PaperAttachment_GetFirstObjAsync(strWhereCond2);
      objPaperAttachment = <clsPaperAttachmentEN>responseText2;
      if (strReadWriteTypeId == '02') {
        if (objPaperAttachment != null) {
          const strfilepath = GetAddressAndPort() + objPaperAttachment.filePath;
          window.location.href = `../GradEduEx/PaperSubViewpoint_pdf?Type=01&paperRWId=${strKeyId}&file=${strfilepath}`;
        } else {
          window.location.href = `../GradEduEx/PaperSubViewpoint_pdf?Type=01&paperRWId=${strKeyId}`;
        }
      } else if (strReadWriteTypeId == '04') {
        if (objPaperAttachment != null) {
          const strfilepath = GetAddressAndPort() + objPaperAttachment.filePath;
          window.location.href = `../GradEduEx/PaperSubViewpoint_pdf?Type=02&paperRWId=${strKeyId}&file=${strfilepath}`;
        } else {
          window.location.href = `../GradEduEx/PaperSubViewpoint_pdf?Type=02&paperRWId=${strKeyId}`;
        }
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:把类对象的属性内容显示到界面上
  注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   如果在设置数据库时,就应该一级字段在前,二级字段在后
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   <param name = "pobjPaperReadWriteEN">表实体类对象</param>
 */
  public GetDataFromPaperReadWriteClassV2(pobjPaperReadWriteEN: clsPaperReadWriteEN) {
    const divName = this.getDivName();
    if (divName == null) return;
    this.paperRWId = pobjPaperReadWriteEN.paperRWId; // 论文读写Id
    this.readerId = pobjPaperReadWriteEN.readerId; // 阅读者Id
    SetHidPaperId(divName, pobjPaperReadWriteEN.paperId);
    //this.paperId = pobjPaperReadWriteEN.paperId;// 论文Id
    this.researchQuestion = pobjPaperReadWriteEN.researchQuestion; // 研究问题
    this.shareId = pobjPaperReadWriteEN.shareId;
    this.operationTypeId = pobjPaperReadWriteEN.operationTypeId; // 操作类型ID
    this.updDate = pobjPaperReadWriteEN.updDate; // 修改日期
    //this.updUser = pobjPaperReadWriteEN.updUser;// 修改用户Id
    this.memo = pobjPaperReadWriteEN.memo; // 备注
  }
  /* 函数功能:把界面上的属性数据传到类对象中
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   <param name = "pobjPaperReadWriteEN">数据传输的目的类对象</param>
 */
  public async PutDataToPaperReadWriteClass(pobjPaperReadWriteEN: clsPaperReadWriteEN) {
    const divName = this.getDivName();
    pobjPaperReadWriteEN.SetPaperRWId(this.paperRWId); // 论文读写Id
    pobjPaperReadWriteEN.SetReaderId(userStore.getUserId); // 阅读者Id
    pobjPaperReadWriteEN.SetPaperId(clsPrivateSessionStorage.paperId); // 论文Id
    pobjPaperReadWriteEN.SetResearchQuestion(this.researchQuestion); // 研究问题

    pobjPaperReadWriteEN.SetOperationTypeId(GetInputValueInDivObj(divName, 'hidReadWriteTypeId')); // 操作类型ID
    pobjPaperReadWriteEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    // pobjPaperReadWriteEN.SetOperationTypeId(this.operationTypeId;// 操作类型ID
    pobjPaperReadWriteEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjPaperReadWriteEN.SetUpdUser(userStore.getUserId); // 修改用户Id// 修改用户Id
    pobjPaperReadWriteEN.SetMemo(this.memo); // 备注
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
  public async btnOKUpd_Click() {
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    const strCommandText: string = this.btnSubmitPaperReadWrite;
    try {
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          await this.AddNewRecordSave().then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == true) {
              //刷新缓存
              vPaperReadWrite_ReFreshThisCache(strIdCurrEducls);
              this.HideDialog_PaperReadWrite();
              this.iShowList.BindGv(clsPaperReadWriteEN._CurrTabName, returnBool.toString());
            }
          });
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          await this.UpdateRecordSave().then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == true) {
              //刷新缓存
              vPaperReadWrite_ReFreshThisCache(strIdCurrEducls);
              this.HideDialog_PaperReadWrite();
              this.iShowList.BindGv(clsPaperReadWriteEN._CurrTabName, returnBool.toString());
            }
          });
          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

          break;
      }
      //取消提交按钮不可用状态
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  /* 添加新记录
       (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
      */
  public async AddNewRecordSave() {
    try {
      PaperReadWrite_GetMaxStrIdAsync().then((jsonData) => {
        const returnString: string = jsonData.toString();
        if (returnString == '') {
          const strInfo = `获取表PaperReadWrite的最大关键字为空，不成功，请检查!`;
          //显示信息框
          alert(strInfo);
        } else {
          $('#txtPaperRWId').val(returnString);
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }

    const objPaperReadWriteEN: clsPaperReadWriteEN = new clsPaperReadWriteEN();
    //创建时间
    objPaperReadWriteEN.SetCreateDate(clsPubFun4Web.getNowDate_ymd());
    this.PutDataToPaperReadWriteClass(objPaperReadWriteEN);
    try {
      //const responseText = await PaperReadWrite_IsExistAsync(objPaperReadWriteEN.paperRWId);
      //strIdCurrEduclsbolIsExist: boolean = responseText;
      //if (bolIsExist == true) {
      //    strIdCurrEduclsstrMsg: string = `添加记录时，关键字：${objPaperReadWriteEN.paperRWId}已经存在！`;
      //    alert(strMsg);
      //    return responseText;//一定要有一个返回值，否则会出错！
      //}
      const responseText2 = await clsPaperReadWriteWApiEx.AddNewRecordAsyncEx(objPaperReadWriteEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!同一用户同一论文只能添加一次`;

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

  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateRecord_Click(strKeyId: string) {
    this.opType = 'Update';

    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }
    const divName = this.getDivName();
    if (divName == null) return;
    await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');
    this.UpdateRecord(strKeyId);
  }
  /* 根据关键字获取相应的记录的对象
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
    <param name = "sender">参数列表</param>
  */
  public async UpdateRecord(strPaperRWId: string) {
    const strThisFuncName = this.UpdateRecord.name;
    this.btnSubmitPaperReadWrite = '确认修改';
    this.btnCancelPaperReadWrite = '取消修改';
    this.keyId = strPaperRWId;
    const strUserId = userStore.getUserId;

    try {
      const objPaperReadWriteEN = await PaperReadWrite_GetObjByPaperRWIdAsync(strPaperRWId);
      if (objPaperReadWriteEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      // //通过判断数据用户是否是当前登录用户；
      if (objPaperReadWriteEN.updUser == strUserId) {
        this.ShowDialog_PaperReadWrite('Update');
        this.GetDataFromPaperReadWriteClass(objPaperReadWriteEN);
        console.log('完成UpdateRecord!');
      } else {
        alert('当前数据不是您所添加，不能修改！');
        return false;
      }
      return true;
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
      return false;
    }
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
  //提交函数
  public async SubmitRecord(strPaperRWId: string) {
    this.keyId = strPaperRWId;
    const strUserId = userStore.getUserId;

    try {
      const objPaperReadWriteEN = await PaperReadWrite_GetObjByPaperRWIdAsync(strPaperRWId);
      if (objPaperReadWriteEN == null) return;
      //判断角色 //学生00620003
      if (userStore.getRoleId == '00620003') {
        // //通过判断数据用户是否是当前登录用户；
        if (objPaperReadWriteEN.updUser == strUserId) {
          //判断数据是否已提交
          if (objPaperReadWriteEN.isSubmit == false) {
            this.SubmitRecordSave();
          } else {
            alert('当前数据已提交！');
            return;
          }
        } else {
          alert('当前数据不是您所添加，不能修改！');
          return;
        }
      } else {
        //可以提交
        //判断数据是否已提交
        if (objPaperReadWriteEN.isSubmit == false) {
          this.SubmitRecordSave();
        } else {
          alert('当前数据已提交！');
          return;
        }
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  //论文提交
  public async btnSubmit_Click() {
    const strKeyId = this.keyId; // GetFirstCheckedKeyIdInDiv(objPage.divName4List);;
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    this.SubmitRecord(strKeyId);
  }

  /* 函数功能:把界面上的属性数据传到类对象中
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
  <param name = "pobjPaperReadWriteEN">数据传输的目的类对象</param>
*/
  public PutDataToPaperReadWriteClassSubmit(pobjPaperReadWriteEN: clsPaperReadWriteEN) {
    // pobjPaperReadWriteEN.SetPaperRWId(this.paperRWId;// 论文读写Id
    pobjPaperReadWriteEN.SetIsSubmit(true);
    pobjPaperReadWriteEN.submitter = userStore.getUserId; //提交人；
  }

  /* 修改记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async SubmitRecordSave(): Promise<boolean> {
    const strThisFuncName = this.SubmitRecordSave.name;

    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

    const objPaperReadWriteEN: clsPaperReadWriteEN = new clsPaperReadWriteEN();
    objPaperReadWriteEN.SetPaperRWId(this.keyId);
    this.PutDataToPaperReadWriteClassSubmit(objPaperReadWriteEN);
    objPaperReadWriteEN.sfUpdFldSetStr = objPaperReadWriteEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperReadWriteEN.paperRWId == '' || objPaperReadWriteEN.paperRWId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await PaperReadWrite_UpdateRecordAsync(objPaperReadWriteEN);
      if (returnBool == true) {
        const strInfo = `论文提交成功!`;

        //显示信息框
        alert(strInfo);

        //刷新缓存
        vPaperReadWrite_ReFreshThisCache(strIdCurrEducls);
        this.HideDialog_PaperReadWrite();

        this.iShowList.BindGv(clsPaperReadWriteEN._CurrTabName, '');
      } else {
        const strInfo = `论文提交不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('提交失败');
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

  //---------------------------
  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjPaperReadWriteEN">数据传输的目的类对象</param>
  */
  public PutDataToPaperReadWriteClassV2(pobjPaperReadWriteEN: clsPaperReadWriteEN) {
    const divName = this.getDivName();
    pobjPaperReadWriteEN.SetPaperRWId(this.paperRWId); // 论文读写Id
    pobjPaperReadWriteEN.SetReaderId(userStore.getUserId); // 阅读者Id
    pobjPaperReadWriteEN.SetPaperId(clsPrivateSessionStorage.paperId); // 论文Id
    pobjPaperReadWriteEN.SetResearchQuestion(this.researchQuestion); // 研究问题

    pobjPaperReadWriteEN.SetOperationTypeId(GetInputValueInDivObj(divName, 'hidReadWriteTypeId')); // 操作类型ID
    pobjPaperReadWriteEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjPaperReadWriteEN.SetUpdUser(userStore.getUserId); // 修改用户Id// 修改用户Id
    pobjPaperReadWriteEN.SetMemo(this.memo); // 备注
  }
  /* 添加新记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
  */
  public async AddNewRecordSaveV2() {
    //this.DivName = "divAddNewRecordSave";
    const objPaperReadWriteEN: clsPaperReadWriteEN = new clsPaperReadWriteEN();
    this.PutDataToPaperReadWriteClass(objPaperReadWriteEN);
    try {
      const responseText = await PaperReadWrite_IsExistAsync(objPaperReadWriteEN.paperRWId);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `添加记录时，关键字：${objPaperReadWriteEN.paperRWId}已经存在！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }
      const responseText2 = await clsPaperReadWriteWApiEx.AddNewRecordAsyncEx(objPaperReadWriteEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
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
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
  public async btnOKUpd_ClickV2() {
    const strCommandText: string = this.btnSubmitPaperReadWrite;
    try {
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          await this.AddNewRecordSave().then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == true) {
              //HideDialog();
              window.location.href = '../GraduateEdu/PaperReadWriteCRUD';
              //this.BindGv_vPaperReadWrite();
            }
          });
          break;
        //case "确认修改":
        //    //这是一个单表的修改的代码,由于逻辑层太简单,
        //    const responseText3 = await this.UpdateRecordSave().then((jsonData) => {
        //        const returnBool: boolean = jsonData;
        //        if (returnBool == true) {
        //            HideDialog();
        //            this.BindGv_vPaperReadWrite();
        //        }
        //    });
        //    break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

          break;
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
  //============================
}
