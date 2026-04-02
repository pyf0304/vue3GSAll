import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { Viewpoint_Edit } from '@/viewsBase/GradEduTopic/Viewpoint_Edit';
import { clsViewpointAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointAttachmentEN';
import { clsViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointEN';
import { clsViewpointVerEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointVerEN';
import {
  ViewpointAttachment_AddNewRecordAsync,
  ViewpointAttachment_DelViewpointAttachmentsByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsViewpointAttachmentWApi';
import {
  ViewpointVer_AddNewRecordAsync,
  ViewpointVer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsViewpointVerWApi';
import {
  Viewpoint_AddNewRecordAsync,
  Viewpoint_GetMaxStrIdAsync,
  Viewpoint_GetObjByViewpointIdAsync,
  Viewpoint_IsExistAsync,
  Viewpoint_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsViewpointWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { userStore } from '@/store/modulesShare/user';
declare let window: any;

/* Viewpoint_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class Viewpoint_EditEx extends Viewpoint_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: Viewpoint_EditEx = <Viewpoint_EditEx>(
      Viewpoint_Edit.GetPageEditObj('Viewpoint_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'Viewpoint_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'Viewpoint_EditEx.btn_Click');

        break;
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjViewpointEN">数据传输的目的类对象</param>
  */
  public PutDataToViewpointVerClass(pobjViewpointVerEN: clsViewpointVerEN) {
    const divName = this.getDivName();
    pobjViewpointVerEN.SetViewpointId(this.viewpointId); // 观点Id
    pobjViewpointVerEN.SetViewpointName(this.viewpointName); // 观点名称
    pobjViewpointVerEN.SetViewpointContent(this.viewpointContent); // 观点内容
    pobjViewpointVerEN.SetViewpointTypeId(this.viewpointTypeId); // 观点类型Id
    pobjViewpointVerEN.SetReason(this.reason); // 理由
    pobjViewpointVerEN.SetSource(this.source); // 来源
    pobjViewpointVerEN.SetCitationId(this.paperId); //引用论文id；
    //判断用户类型，然后添加数据
    const strhidUserTypeId = GetInputValueInDivObj(divName, 'hidUserTypeId');
    if (strhidUserTypeId != '') {
      pobjViewpointVerEN.SetUserTypeId(strhidUserTypeId);
    }
    pobjViewpointVerEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjViewpointVerEN.SetVPProposePeople(userStore.getUserId); // 观点提出人
    pobjViewpointVerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjViewpointVerEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjViewpointVerEN.SetMemo(this.memo); // 备注
  }

  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjViewpointEN">数据传输的目的类对象</param>
  */
  public async PutDataToViewpointClass(pobjViewpointEN: clsViewpointEN) {
    const divName = this.getDivName();
    pobjViewpointEN.SetViewpointId(this.viewpointId); // 观点Id
    pobjViewpointEN.SetViewpointName(this.viewpointName); // 观点名称
    pobjViewpointEN.SetViewpointContent(this.viewpointContent); // 观点内容
    pobjViewpointEN.SetViewpointTypeId(this.viewpointTypeId); // 观点类型Id
    pobjViewpointEN.SetReason(this.reason); // 理由
    pobjViewpointEN.SetSource(this.source); // 来源
    pobjViewpointEN.SetIsSubmit(false); //是否提交；
    pobjViewpointEN.SetCitationId(this.paperId); //引用论文id；
    //判断用户类型，然后添加数据
    const strhidUserTypeId = GetInputValueInDivObj(divName, 'hidUserTypeId');
    if (strhidUserTypeId != '') {
      pobjViewpointEN.SetUserTypeId(strhidUserTypeId);
    }
    pobjViewpointEN.SetShareId(this.shareId);
    pobjViewpointEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjViewpointEN.SetVPProposePeople(userStore.getUserId); // 观点提出人
    pobjViewpointEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期

    pobjViewpointEN.SetUpdUser(userStore.getUserId); // 修改人

    pobjViewpointEN.SetMemo(this.memo); // 备注
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
    this.UpdateRecord(strKeyId);
  }
  /* 根据关键字获取相应的记录的对象
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
    <param name = "sender">参数列表</param>
  */
  public async UpdateRecord(strViewpointId: string): Promise<boolean> {
    this.btnSubmitViewpoint = '确认修改';
    this.btnCancelViewpoint = '取消修改';
    this.keyId = strViewpointId;
    const strUserId = userStore.getUserId;

    try {
      Viewpoint_GetObjByViewpointIdAsync(strViewpointId).then((jsonData) => {
        const objViewpointEN: clsViewpointEN = <clsViewpointEN>jsonData;

        // //通过判断数据用户是否是当前登录用户；
        if (objViewpointEN.updUser == strUserId) {
          //判断数据是否提交，提交则不可修改；
          if (objViewpointEN.isSubmit == false) {
            this.ShowDialog_Viewpoint('Update');
            this.GetDataFromViewpointClass(objViewpointEN);
            console.log('完成UpdateRecord!');
            //resolve(jsonData);
          } else {
            alert('当前数据已提交,不能修改！');
            return false;
          }
        } else {
          alert('当前数据不是您所添加，不能修改！');
          return false;
        }
      });
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }

  /* 函数功能:把类对象的属性内容显示到界面上
   注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
    如果在设置数据库时,就应该一级字段在前,二级字段在后
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
    <param name = "pobjViewpointEN">表实体类对象</param>
  */
  public async GetDataFromViewpointClass(pobjViewpointEN: clsViewpointEN) {
    this.viewpointId = pobjViewpointEN.viewpointId; // 观点Id
    this.viewpointName = pobjViewpointEN.viewpointName; // 观点名称
    this.viewpointContent = pobjViewpointEN.viewpointContent; // 观点内容
    this.viewpointTypeId = pobjViewpointEN.viewpointTypeId; // 观点类型Id
    this.reason = pobjViewpointEN.reason; // 理由
    this.source = pobjViewpointEN.source; // 来源
    this.isSubmit = pobjViewpointEN.isSubmit; //是否提交；
    this.vPProposePeople = pobjViewpointEN.vPProposePeople; // 观点提出人
    this.shareId = pobjViewpointEN.shareId;
    this.paperId = pobjViewpointEN.citationId; //引用Id;
    this.updDate = pobjViewpointEN.updDate; // 修改日期
    // this.updUser = pobjViewpointEN.updUser; // 修改人
    this.memo = pobjViewpointEN.memo; // 备注
  }
  /*
   * 论文Id
   */
  public set paperId(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtPaperId', value);
  }
  /*
   * 论文
   */
  public get paperId(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtPaperId');
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
  //提交判断；
  public async SubmitRecord(strViewpointId: string) {
    this.keyId = strViewpointId;

    try {
      const objViewpointEN = await Viewpoint_GetObjByViewpointIdAsync(strViewpointId);
      if (objViewpointEN == null) return;
      //通过session 权限获取权限
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色 //学生00620003
      if (strRoleId == '00620003') {
        // //通过判断数据用户是否是当前登录用户；
        if (objViewpointEN.updUser == strUserId) {
          //判断数据是否已审核
          if (objViewpointEN.isSubmit == false) {
            this.SubmitRecordSave();
          } else {
            alert('当前数据已提交！');
            return;
          }
        } else {
          alert('当前数据不是您所添加，不能提交！');
          return;
        }
      } else {
        //可以提交
        //判断数据是否已提交
        if (objViewpointEN.isSubmit == false) {
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
  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async SubmitRecordSave(): Promise<boolean> {
    const strThisFuncName = this.SubmitRecordSave.name;

    //
    const objViewpointEN: clsViewpointEN = new clsViewpointEN();
    objViewpointEN.SetViewpointId(this.keyId);
    objViewpointEN.SetIsSubmit(true);
    //this.PutDataToViewpointClass(objViewpointEN);
    objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool = await Viewpoint_UpdateRecordAsync(objViewpointEN);

      if (returnBool == true) {
        const strInfo = `提交成功!`;
        //显示信息框
        alert(strInfo);
        this.HideDialog_Viewpoint();
        //this.BindGv_vViewpoint();
        this.iShowList.BindGv(clsViewpointEN._CurrTabName, returnBool.toString());
      } else {
        const strInfo = `提交不成功!`;
        //显示信息框
        alert(strInfo);
        console.log('提交失败');
      }

      $('#btnIsSubmit').attr('disabled', 'false');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }

  //观点提交审核
  public async btnIsSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    this.SubmitRecord(strKeyId);
  }
  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
*/
  public async btnAddNewRecord_Click() {
    const divName = this.getDivName();
    if (divName == null) return;
    this.opType = 'Add';
    try {
      await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');
      await this.AddNewRecord();
      //获取分享Id
      const responseText1 = await gs_UserConfigEx_GetNewReturnShareIdEx('04', userStore.getUserId);
      const strShareId: string = responseText1;
      //const returnBool: boolean = !!responseText2;
      if (strShareId != '') {
        this.shareId = strShareId;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 在数据表里修改记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecordInTab_Click)
 */
  public async btnUpdateRecordInTab_Click(strKeyId: string) {
    const divName = this.getDivName();
    if (divName == null) return;
    this.opType = 'Update';
    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }

    await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');
    this.UpdateRecord(strKeyId);
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
 */
  public async btnOKUpd_Click() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmitViewpoint;
    try {
      //判断session是否失效
      if (userStore.getUserId != '') {
        const strTopicObjectiveId = GetInputValueInDivObj(divName, 'hidViewpointId');
        let returnBool;
        let returnBool6;
        let returnBool7;
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
                //this.BindGv_vViewpoint();
              }
            });
            //更新总表3个参数 主键、子表类型、页面操作类型；

            returnBool6 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strTopicObjectiveId,
              '04',
              '1',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool6 == true) {
              console.log('客观数据总表同步成功；');
            } else {
              console.log('客观数据总表同步失败；');
            }
            //添加记录的同时添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                this.HideDialog_Viewpoint();
                this.iShowList.BindGv(clsViewpointEN._CurrTabName, '');
                //alert("添加历史版本出问题！");
              }
            });
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            returnBool = await this.UpdateRecordSave();

            //更新总表3个参数 主键、子表类型、页面操作类型；

            returnBool7 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strTopicObjectiveId,
              '04',
              '2',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool7 == true) {
              console.log('专家观点数据总表同步成功；');
            } else {
              console.log('专家观点数据总表同步失败；');
            }
            //修改记录的同时添加历史版本
            returnBool = await this.AddVersionRecordSave();
            if (returnBool == true) {
              this.HideDialog_Viewpoint();
              this.iShowList.BindGv(clsViewpointEN._CurrTabName, '');
              //alert("添加历史版本出问题！");
            }

            break;
          default:
            AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

            break;
        }
      } else {
        alert('登录超时，请重新登录');
        reLogin();
      }

      HideDivInDivObj(divName, 'divLoading');
      //去掉提交按钮不可用状态
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
    const divName = this.getDivName();
    try {
      await Viewpoint_GetMaxStrIdAsync().then((jsonData) => {
        const returnString: string = jsonData.toString();
        if (returnString == '') {
          const strInfo = `获取表ViewPoint的最大关键字为空，不成功，请检查!`;
          //显示信息框
          alert(strInfo);
        } else {
          $('#txtViewpointId').val(returnString);
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
    const txtViewpointId = GetInputValueInDivObj(divName, 'txtViewpointId');
    if (txtViewpointId != '') {
      const objViewpointEN: clsViewpointEN = new clsViewpointEN();
      //objViewpointEN.SetViewpointId(GetInputValueInDivObj(divName, 'txtViewpointId');

      SetInputValueInDivObj(divName, 'hidViewpointId', txtViewpointId);
      objViewpointEN.SetCreateDate(clsPubFun4Web.getNowDate_ymd());
      this.PutDataToViewpointClass(objViewpointEN);
      try {
        const responseText = await Viewpoint_IsExistAsync(objViewpointEN.viewpointId);
        const bolIsExist: boolean = responseText;
        if (bolIsExist == true) {
          const strMsg = `添加记录时，关键字：${objViewpointEN.viewpointId}已经存在！`;
          alert(strMsg);
          return responseText; //一定要有一个返回值，否则会出错！
        }
        //const responseText2 = await Viewpoint_AddNewRecordWithMaxIdAsync(objViewpointEN);
        const responseText2 = await Viewpoint_AddNewRecordAsync(objViewpointEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          //执行之前需要判断是否有引用 ;有就添加论文、没有就添加附件；
          //  if ($("#txtPaperId").val() == "") {
          //添加成功，则执行附件添加方法；
          //判断是否有返回的附件路径值
          if (GetInputValueInDivObj(divName, 'hdnFileOne') != '') {
            //第一个附件框判断
            const fileOne = GetInputValueInDivObj(divName, 'hdnFileOne');
            this.AddPaperSubAttachmentSave(fileOne, 'first');
          } else {
            if (GetInputValueInDivObj(divName, 'hdnFileTwo') != '') {
              const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
              this.AddPaperSubAttachmentSave(fileTwo, 'two');
            } else {
              if (GetInputValueInDivObj(divName, 'hdnFileThree') != '') {
                const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
                this.AddPaperSubAttachmentSave(fileThree, 'three');
              }
            }
          }
          // }
          //else {
          //    //1.这里执行添加观点引用论文；
          //    const objclsViewpointCitationEN: clsViewpointCitationEN = new clsViewpointCitationEN();
          //    this.PutDataToclsViewpointCitationClass(objclsViewpointCitationEN);
          //    //引用论文；
          //    const responseText3 = await ViewpointCitation_AddNewRecordAsync(objclsViewpointCitationEN);
          //    const returnBool: boolean = !!responseText3;

          //    if (returnBool == true) {

          //        //添加成功，则执行附件添加方法；
          //        //判断是否有返回的附件路径值
          //        if ($("#hdnFileOne").val() != "") { //第一个附件框判断
          //            strIdCurrEduclsfileOne = $("#hdnFileOne").val();
          //            this.AddPaperSubAttachmentSave(fileOne, "first");
          //        }
          //        else {
          //            if ($("#hdnFileTwo").val() != "") {
          //                strIdCurrEduclsfileTwo = $("#hdnFileTwo").val();
          //                this.AddPaperSubAttachmentSave(fileTwo, "two");
          //            }
          //            else {
          //                if ($("#hdnFileThree").val() != "") {
          //                    strIdCurrEduclsfileThree = $("#hdnFileThree").val();
          //                    this.AddPaperSubAttachmentSave(fileThree, "three");
          //                }
          //            }

          //        }

          //    }
          //    else {

          //    }

          //}

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
        return false;
      }
    } else {
      const strInfo = `获取最大关键字为空，不成功!`;
      //显示信息框
      alert(strInfo);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  //添加历史版本
  public async AddVersionRecordSave() {
    const strThisFuncName = this.AddVersionRecordSave.name;

    const objViewpointVerEN: clsViewpointVerEN = new clsViewpointVerEN();
    objViewpointVerEN.SetViewpointId(this.viewpointId);
    this.PutDataToViewpointVerClass(objViewpointVerEN);

    try {
      const responseText2 = await ViewpointVer_AddNewRecordAsync(objViewpointVerEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1 =1 and viewpointId=${this.viewpointId}`;
        const intVersionCount = await ViewpointVer_GetRecCountByCondAsync(strWhereCond2);

        const objViewpointEN: clsViewpointEN = new clsViewpointEN();
        objViewpointEN.SetViewpointId(this.viewpointId);
        objViewpointEN.SetVersionCount(intVersionCount);

        objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        Viewpoint_UpdateRecordAsync(objViewpointEN).then((jsonData) => {
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

  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {
    this.viewpointId = '';
    this.viewpointName = '';
    this.viewpointContent = '';
    $('#ddlViewpointTypeId option[0]').attr('selected', 'true');
    this.reason = '';
    this.source = '';
    this.vPProposePeople = '';
    this.updDate = '';
    // this.updUser = '';
    this.memo = '';
    this.paperId = '';

    $('#hdnFileOne').val('');
    $('#hdnFileTwo').val('');
    $('#hdnFileThree').val('');
  }

  ////////////////////////////////////////////////修改时的方法
  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateRecordSave(): Promise<boolean> {
    const divName = this.getDivName();
    const strThisFuncName = this.UpdateRecordSave.name;

    const objViewpointEN: clsViewpointEN = new clsViewpointEN();
    objViewpointEN.SetViewpointId(this.keyId);
    $('#hidViewpointId').val(this.keyId);
    this.PutDataToViewpointClass(objViewpointEN);
    objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await Viewpoint_UpdateRecordAsync(objViewpointEN);
      if (returnBool == true) {
        ////判断引用的论文ID是否为空
        //strPaperId = $("#txtPaperId").val();
        //if (strPaperId != "") {
        //    //，如果不为空，根据Id删除引用文件
        //    strIdCurrEduclsstrwhere = "viewpointId ='" + objViewpointEN.viewpointId + "'";
        //    this.DelRecordViewpointCitationByWhere(strwhere);

        //}
        //else {

        //如果等于空，那么就去判断附件是否为空；
        //得到相关论文附件地址，判断是否为空 只要有一个不为空都执行附件清除功能；
        if (
          (GetInputValueInDivObj(divName, 'hdnFileOne') != '' && $('#hdnFileOne') != undefined) ||
          (GetInputValueInDivObj(divName, 'hdnFileTwo') != '' && $('#hdnFileTwo') != undefined) ||
          (GetInputValueInDivObj(divName, 'hdnFileThree') != '' && $('#hdnFileThree') != undefined)
        ) {
          //根据Id删除附件
          const strwhere = `viewpointId ='${objViewpointEN.viewpointId}'`;
          this.DelRecordByWhere(strwhere);
        }
        //  }

        const strInfo = `修改记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `修改记录不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('完成UpdateRecordSave');
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
  //////////////////////////////////////////////////////////////////////附件添加
  //添加上传论文附件方法
  public async AddPaperSubAttachmentSave(filePath: string, strfileNum: string) {
    const divName = this.getDivName();
    const objViewpointAttachmentEN: clsViewpointAttachmentEN = new clsViewpointAttachmentEN();
    this.PutDataToPaperAttachmentClass(objViewpointAttachmentEN, filePath);
    try {
      const responseText2 = await ViewpointAttachment_AddNewRecordAsync(objViewpointAttachmentEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        //第一个附件
        if (strfileNum == 'first') {
          //如果第二个附件不等于空，那么执行添加函数；
          if (GetInputValueInDivObj(divName, 'hdnFileTwo') != '' && $('#hdnFileTwo') != undefined) {
            const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
            this.AddPaperSubAttachmentSave(fileTwo, 'two');
          } else {
            //为空则判断第三个附件值；
            if (
              GetInputValueInDivObj(divName, 'hdnFileThree') != '' &&
              $('#hdnFileThree') != undefined
            ) {
              const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
              this.AddPaperSubAttachmentSave(fileThree, 'three');
            }
          }
        } else if (strfileNum == 'two') {
          //为空则判断第三个附件值；
          if (
            GetInputValueInDivObj(divName, 'hdnFileThree') != '' &&
            $('#hdnFileThree') != undefined
          ) {
            const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
            this.AddPaperSubAttachmentSave(fileThree, 'three');
          }
        }
      } else {
        const strInfo = `论文附件添加不成功!`;

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
  //观点附件数据存放
  public PutDataToPaperAttachmentClass(
    pobjViewpointAttachmentEN: clsViewpointAttachmentEN,
    filePath: string,
  ) {
    const divName = this.getDivName();
    pobjViewpointAttachmentEN.SetViewpointId(GetInputValueInDivObj(divName, 'txtViewpointId')); // 观点Id

    let strfilePath = filePath;
    //判断地址不为空则执行截取操作
    if (strfilePath != '') {
      const index = strfilePath.lastIndexOf('/');
      strfilePath = strfilePath.substring(index + 1, strfilePath.length);
      pobjViewpointAttachmentEN.SetFilePath(filePath);

      pobjViewpointAttachmentEN.SetViewpointAttachmentName(strfilePath);
    }
    pobjViewpointAttachmentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期

    if (clsPubLocalStorage.idCurrEduCls != '') {
      pobjViewpointAttachmentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    } else {
      pobjViewpointAttachmentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    }
    //pobjViewpointAttachmentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls;//教学班
    pobjViewpointAttachmentEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
  }

  //删除观点附件
  /* 
根据关键字删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecordByWhere(strWhere: string) {
    const divName = this.getDivName();

    try {
      const returnInt: number = await ViewpointAttachment_DelViewpointAttachmentsByCondAsync(
        strWhere,
      );
      if (returnInt > 0) {
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
      } else {
        //显示信息框
        //alert(strInfo);
      }

      //在修改时候，不管是否有附件数据被清除； 都需要执行附件添加功能
      //判断是否有返回的附件路径值
      const fileOne = GetInputValueInDivObj(divName, 'hdnFileOne');
      if (fileOne != '' && fileOne != undefined) {
        //第一个附件框判断

        this.AddPaperSubAttachmentSave(fileOne, 'first');
      } else {
        const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
        if (fileTwo != '' && fileTwo != undefined) {
          this.AddPaperSubAttachmentSave(fileTwo, 'two');
        } else {
          const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
          if (fileThree != '' && fileThree != undefined) {
            this.AddPaperSubAttachmentSave(fileThree, 'three');
          }
        }
      }

      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
}
