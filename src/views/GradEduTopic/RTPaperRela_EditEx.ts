import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { PaperEx_ReFreshThisCacheByIdCurrEduCls } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { RTPaperRela_Edit } from '@/viewsBase/GradEduTopic/RTPaperRela_Edit';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTPaperRelaEN';
import {
  Paper_GetObjByPaperIdAsync,
  Paper_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import {
  RTPaperRela_AddNewRecordAsync,
  RTPaperRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTPaperRelaWApi';
import { vRTPaperRela_GetObjBymIdAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTPaperRelaWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { GetHidPaperId, SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

/* RTPaperRela_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class RTPaperRela_EditEx extends RTPaperRela_Edit {
  public static Paper_Static = '';

  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: RTPaperRela_EditEx = <RTPaperRela_EditEx>(
      RTPaperRela_Edit.GetPageEditObj('RTPaperRela_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'RTPaperRela_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'RTPaperRela_EditEx.btn_Click');

        break;
    }
  }

  /* 根据关键字获取相应的记录的对象
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
<param name = "sender">参数列表</param>
*/
  public async RtPaperRelaDetailRecord(lngmId: number) {
    this.keyId = lngmId.toString();

    try {
      const objRTPaperRelaEN = await vRTPaperRela_GetObjBymIdAsync(lngmId);
      if (objRTPaperRelaEN == null) return;
      // //显示当前数据；
      $('#txtTopicNameDetail').html(objRTPaperRelaEN.topicName);
      $('#txtTopicContentDetail').html(objRTPaperRelaEN.topicContent);

      $('#txtTopicProposePeopleDetail').html(objRTPaperRelaEN.topicProposePeople);
      $('#txtPaperTitleDetail').html(objRTPaperRelaEN.paperTitle);
      $('#txtPaperContentDetail').html(objRTPaperRelaEN.paperContent);
      $('#txtAuthorDetail').html(objRTPaperRelaEN.author);
      $('#txtPeriodicalDetail').html(objRTPaperRelaEN.periodical);
      const strUserName = await vQxUsersSimStore.getUserName(objRTPaperRelaEN.updUser);
      if (strUserName != '') {
        $('#txtUserNameDetail').html(strUserName);
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjRTPaperRelaEN">数据传输的目的类对象</param>
*/
  public async PutDataToRTPaperRelaClass(pobjRTPaperRelaEN: clsRTPaperRelaEN) {
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strPaperId = RTPaperRela_EditEx.Paper_Static;
    const strUserId = userStore.getUserId;
    pobjRTPaperRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTPaperRelaEN.SetPaperId(strPaperId); // 论文Id
    pobjRTPaperRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTPaperRelaEN.SetUpdUser(strUserId); // 修改人
    pobjRTPaperRelaEN.SetMemo('sys add'); // 备注
  }

  public async SubmitPaperRecord(strPaperId: string) {
    this.keyId = strPaperId;

    try {
      const objPaperEN = await Paper_GetObjByPaperIdAsync(strPaperId);
      if (objPaperEN == null) return;
      // //通过判断数据用户是否是当前登录用户；
      if (objPaperEN.updUser == userStore.getUserId) {
        //判断数据是否已审核
        if (objPaperEN.isSubmit == false) {
          this.SubmitPaperRecordSave();
        } else {
          alert('当前数据已审核！');
          return;
        }
      } else {
        alert('当前数据不是您所添加，不能修改！');
        return;
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
  public async SubmitPaperRecordSave(): Promise<boolean> {
    const strThisFuncName = this.SubmitPaperRecordSave.name;

    //
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(this.keyId);
    //设置提交状态；
    objPaperEN.SetIsSubmit(true);
    //this.PutDataToPaperClassAudit(objPaperEN);
    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        const strInfo = `操作成功!`;

        //显示信息框
        alert(strInfo);
        //刷新缓存
        //vPaper_ReFreshThisCache();
        //刷新缓存
        PaperEx_ReFreshThisCacheByIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
        this.HideDialog_RTPaperRela();

        this.iShowList.BindGv(clsRTPaperRelaEN._CurrTabName, returnBool.toString());
      } else {
        const strInfo = `操作不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('操作失败');
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

  public async PublicPaperRecord(strPaperId: string) {
    this.keyId = strPaperId;

    try {
      const objPaperEN = await Paper_GetObjByPaperIdAsync(strPaperId);
      if (objPaperEN == null) return;
      // //通过判断数据用户是否是当前登录用户；
      if (objPaperEN.updUser == userStore.getUserId) {
        //判断数据是否已审核
        if (objPaperEN.isSubmit == false) {
          this.PublicRecordSave();
        } else {
          alert('当前数据已审核！');
          return;
        }
      } else {
        alert('当前数据不是您所添加，不能修改！');
        return;
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 论文公开
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async PublicRecordSave(): Promise<boolean> {
    const strThisFuncName = this.PublicRecordSave.name;

    //
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(this.keyId);
    //设置提交状态；
    objPaperEN.SetIsPublic(true);
    //this.PutDataToPaperClassAudit(objPaperEN);
    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        const strInfo = `操作成功!`;

        //显示信息框
        alert(strInfo);
        //刷新缓存
        //vPaper_ReFreshThisCache();
        //刷新缓存
        PaperEx_ReFreshThisCacheByIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
        this.HideDialog_RTPaperRela();
        this.iShowList.BindGv(clsRTPaperRelaEN._CurrTabName, returnBool.toString());
      } else {
        const strInfo = `操作不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('操作失败');
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

  public async btnIsSubmitPaper_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }
    this.SubmitPaperRecord(strKeyId);
  }

  //小组论文写作 公开
  public async btnIsPublicPaper_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }
    this.PublicPaperRecord(strKeyId);
  }
  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSavePaperRela(strPaperId: string): Promise<boolean> {
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    RTPaperRela_EditEx.Paper_Static = strPaperId;
    // const strUserId = userStore.getUserId;
    const objRTPaperRelaEN: clsRTPaperRelaEN = new clsRTPaperRelaEN();
    this.PutDataToRTPaperRelaClass(objRTPaperRelaEN);

    try {
      // 同一主题 同一论文 只能添加一次；
      const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And paperId = '${strPaperId}'`;
      const bolIsExist = await RTPaperRela_IsExistRecordAsync(strWhere);
      if (bolIsExist == true) {
        const strMsg = `同一主题不能重复添加同一个论文！`;
        alert(strMsg);
        return false; //一定要有一个返回值，否则会出错！
      }

      const returnBool = await RTPaperRela_AddNewRecordAsync(objRTPaperRelaEN);
      if (returnBool == true) {
        // const strInfo = `添加成功!`;

        //HideDialogThree();
        //显示信息框
        //alert(strInfo);
        //this.iShowList.BindGv(clsRTPaperRelaEN._CurrTabName, returnBool.toString());
        return true;
      } else {
        const strInfo = `添加不成功!`;
        //显示信息框
        alert(strInfo);
        return false;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  //确定选择的论文 并添加到关系表中
  public btnPaperRecordInTab_Click(strkeyId: string) {
    const divName = this.getDivName();
    if (divName == null) return;

    //存放Id
    SetHidPaperId(divName, strkeyId);
    console.error('btnPaperRecordInTab_Click');
    //获取论文条件 02代表 小组成员论文数据；
    // const strType = GetInputValueInDivObj(divName, 'hidstrType');
    //if (strType == "01") {
    //执行添加关系方法
    this.AddNewRecordSavePaperRela(strkeyId); //所有论文
    //}
    //else {

    //    //小组成员论文；
    //    //this.AddNewRecordSaveResearchResult();
    //}
  }
  //----------------------------
  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjRTPaperRelaEN">数据传输的目的类对象</param>
*/
  public PutDataToRTPaperRelaClassV2(pobjRTPaperRelaEN: clsRTPaperRelaEN) {
    const divName = this.getDivName();
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strPaperId = GetHidPaperId(divName);

    //$('#hidUserId').val(objvUserRoleRelation.userId);
    pobjRTPaperRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTPaperRelaEN.SetPaperId(strPaperId); // 论文Id
    pobjRTPaperRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTPaperRelaEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjRTPaperRelaEN.SetMemo(this.memo); // 备注
  }
  ///////////////////////////////////////////////----------------------------------------------------添加主题论文关系
  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSavePaperRelaV2() {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    // const strTopicId = clsPrivateSessionStorage.topicIdInTree;

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

  //============================

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjRTPaperRelaEN">数据传输的目的类对象</param>
*/
  // public async PutDataToRTPaperRelaClass(pobjRTPaperRelaEN: clsRTPaperRelaEN) {
  //   const divName = this.getDivName(enumDivType.LayOut_01);
  //   const strTopicId = clsPrivateSessionStorage.topicIdInTree;
  //   const strPaperId = GetHidPaperId(divName);
  //   const strUserId = userStore.getUserId;
  //   pobjRTPaperRelaEN.SetTopicId(strTopicId); // 主题编号
  //   pobjRTPaperRelaEN.SetPaperId(strPaperId); // 论文Id
  //   pobjRTPaperRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
  //   pobjRTPaperRelaEN.SetUpdUser(strUserId); // 修改人
  //   pobjRTPaperRelaEN.SetMemo(this.memo); // 备注
  // }
  /* 添加新记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  // public async AddNewRecordSavePaperRela() {
  //   const divName = this.getDivName(enumDivType.LayOut_01);
  //   const strTopicId = clsPrivateSessionStorage.topicIdInTree;
  //   const strPaperId = GetHidPaperId(divName);
  //   const objRTPaperRelaEN: clsRTPaperRelaEN = new clsRTPaperRelaEN();
  //   this.PutDataToRTPaperRelaClass(objRTPaperRelaEN);

  //   try {
  //     // 同一主题 同一论文 只能添加一次；
  //     const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And paperId = '${strPaperId}'`;
  //     const responseText = await RTPaperRela_IsExistRecordAsync(strWhere);
  //     const bolIsExist: boolean = responseText;
  //     if (bolIsExist == true) {
  //       const strMsg = `同一主题不能重复添加同一个论文！`;
  //       alert(strMsg);
  //       return responseText; //一定要有一个返回值，否则会出错！
  //     }

  //     const responseText2 = await RTPaperRela_AddNewRecordAsync(objRTPaperRelaEN);
  //     const returnBool = !!responseText2;
  //     if (returnBool == true) {
  //       const strInfo = `添加成功!`;

  //       HideDialogThree();
  //       //显示信息框
  //       alert(strInfo);
  //       //this.BindGv_vRTPaperRela();
  //       const objPage_RTPaperRela = new Pub_RTPaperRelaList();
  //       await objPage_RTPaperRela.PageLoad();
  //       //await objPage_RTPaperRela.BindGv_vRTPaperRela();
  //       ////主题Id
  //       //window.location.href = "../GraduateEdu/WApiRTPaperRela_QUDI_TS?TopicRelaId='01'";
  //     } else {
  //       const strInfo = `添加不成功!`;

  //       //显示信息框
  //       alert(strInfo);
  //     }
  //     return responseText2; //一定要有一个返回值，否则会出错！
  //   } catch (e: any) {
  //     console.error('catch(e)=');
  //     console.error(e);
  //     const strMsg = `添加记录不成功,${e}.`;
  //     alert(strMsg);
  //     return false;
  //   }
  //   return true; //一定要有一个返回值，否则会出错！
  // }
  //确定选择的论文 并添加到关系表中
  // public btnPaperRecordInTab_Click(strkeyId: string) {
  //   const divName = this.getDivName(enumDivType.LayOut_01);
  //   if (divName == null) return;

  //   //存放Id
  //   SetHidPaperId(divName, strkeyId);
  //   //执行添加关系方法
  //   this.AddNewRecordSavePaperRela();
  // }
}
