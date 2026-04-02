import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { TopicObjective_Edit } from '@/viewsBase/GradEduTopic/TopicObjective_Edit';
import { clsObjectiveAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsObjectiveAttachmentEN';
import { clsTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsTopicObjectiveEN';
import { clsTopicObjectiveVerEN } from '@/ts/L0Entity/GradEduTopic/clsTopicObjectiveVerEN';
import {
  ObjectiveAttachment_AddNewRecordAsync,
  ObjectiveAttachment_DelObjectiveAttachmentsByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsObjectiveAttachmentWApi';
import {
  TopicObjectiveVer_AddNewRecordAsync,
  TopicObjectiveVer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsTopicObjectiveVerWApi';
import {
  TopicObjective_AddNewRecordAsync,
  TopicObjective_GetMaxStrIdAsync,
  TopicObjective_GetObjByTopicObjectiveIdAsync,
  TopicObjective_IsExistAsync,
  TopicObjective_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsTopicObjectiveWApi';
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
/* TopicObjective_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class TopicObjective_EditEx extends TopicObjective_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: TopicObjective_EditEx = <TopicObjective_EditEx>(
      TopicObjective_Edit.GetPageEditObj('TopicObjective_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'TopicObjective_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'TopicObjective_EditEx.btn_Click');

        break;
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

    const strCommandText: string = this.btnSubmitTopicObjective;
    try {
      //判断session是否失效
      if (userStore.getUserId != '') {
        const strTopicObjectiveId = GetInputValueInDivObj(divName, 'hidObjectiveId');
        let returnBool;
        let returnBool7;
        let returnBool6;
        let strInfo;
        switch (strCommandText) {
          case '添加':
            await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,
            //if (this.opType == "AddWithMaxId") {
            //    const responseText3 = await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
            //        const returnBool2: boolean = jsonData;
            //        if (returnBool2 == true) {
            //            HideDialog();
            //            this.BindGv_vTopicObjective();
            //        }
            //    });
            //}
            //else {

            //}
            await this.AddNewRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                //HideDialog();
                //this.BindGv_vTopicObjective();
              }
            });
            //更新总表3个参数 主键、子表类型、页面操作类型；

            returnBool6 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strTopicObjectiveId,
              '07',
              '1',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool6 == true) {
              console.log('客观数据总表同步成功；');
            } else {
              console.log('客观数据总表同步失败；');
            }
            //修改记录的同时添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                this.HideDialog_TopicObjective();
                this.iShowList.BindGv(clsTopicObjectiveEN._CurrTabName, returnBool.toString());
                //alert("添加历史版本出问题！");
              }
            });
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            returnBool = await this.UpdateRecordSave();

            strInfo = returnBool ? '修改成功！' : '修改不成功！';
            //strInfo += "(In WApiTopicObjective_QUDI_TS.btnOKUpd_Click)";
            //$('#lblResult51').val(strInfo);
            //显示信息框
            console.log(strInfo);
            alert(strInfo);

            returnBool7 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strTopicObjectiveId,
              '07',
              '2',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool7 == true) {
              console.log('客观数据总表同步成功；');
            } else {
              console.log('客观数据总表同步失败；');
            }
            //修改记录的同时添加历史版本
            returnBool = await this.AddVersionRecordSave();
            if (returnBool == true) {
              this.HideDialog_TopicObjective();
              this.iShowList.BindGv(clsTopicObjectiveEN._CurrTabName, returnBool.toString());
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

  //////////////////////////////添加数据
  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
*/
  public async btnAddNewRecord_Click() {
    const divName = this.getDivName();
    if (divName == null) return;
    this.opType = 'Add';
    try {
      await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');
      //获取分享Id
      const responseText1 = await gs_UserConfigEx_GetNewReturnShareIdEx('07', userStore.getUserId);
      const strShareId: string = responseText1;
      //const returnBool: boolean = !!responseText2;
      if (strShareId != '') {
        this.shareId = strShareId;
      }
      await this.AddNewRecord();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    this.btnSubmitTopicObjective = '确认添加';
    this.btnCancelTopicObjective = '取消添加';
    this.Clear();
    //去掉提交按钮不可用状态
    $('#btnOKUpd').attr('disabled', 'false');
  }

  /* 添加新记录，保存函数
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSave() {
    const divName = this.getDivName();
    try {
      await TopicObjective_GetMaxStrIdAsync().then((jsonData) => {
        const returnString: string = jsonData.toString();
        if (returnString == '') {
          const strInfo = `获取表TopicObjective的最大关键字为空，不成功，请检查!`;
          //显示信息框
          alert(strInfo);
        } else {
          $('#txtTopicObjectiveId').val(returnString);
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
    //判断Id是否为空
    const txtTopicObjectiveId = GetInputValueInDivObj(divName, 'txtTopicObjectiveId');
    if (txtTopicObjectiveId != '') {
      SetInputValueInDivObj(divName, 'hidObjectiveId', txtTopicObjectiveId);
      const objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
      objTopicObjectiveEN.SetCreateDate(clsPubFun4Web.getNowDate_ymd());
      this.PutDataToTopicObjectiveClass(objTopicObjectiveEN);
      try {
        const responseText = await TopicObjective_IsExistAsync(
          objTopicObjectiveEN.topicObjectiveId,
        );
        const bolIsExist: boolean = responseText;
        if (bolIsExist == true) {
          const strMsg = `添加记录时，关键字：${objTopicObjectiveEN.topicObjectiveId}已经存在！`;
          alert(strMsg);
          return responseText; //一定要有一个返回值，否则会出错！
        }
        const responseText2 = await TopicObjective_AddNewRecordAsync(objTopicObjectiveEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          //strIdCurrEduclsstrInfo: string = `添加记录成功!`;
          //
          ////显示信息框
          //alert(strInfo);

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

  //////////////////////////////////////////////////////////////////////附件添加
  //添加上传论文附件方法
  public async AddPaperSubAttachmentSave(filePath: string, strfileNum: string) {
    const divName = this.getDivName();
    const objObjectiveAttachmentEN: clsObjectiveAttachmentEN = new clsObjectiveAttachmentEN();
    this.PutDataToPaperAttachmentClass(objObjectiveAttachmentEN, filePath);
    try {
      const responseText2 = await ObjectiveAttachment_AddNewRecordAsync(objObjectiveAttachmentEN);
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
    pobjObjectiveAttachmentEN: clsObjectiveAttachmentEN,
    filePath: string,
  ) {
    const divName = this.getDivName();
    pobjObjectiveAttachmentEN.SetTopicObjectiveId(
      GetInputValueInDivObj(divName, 'txtTopicObjectiveId'),
    ); // 概念Id

    let strfilePath = filePath;
    //判断地址不为空则执行截取操作
    if (strfilePath != '') {
      const index = strfilePath.lastIndexOf('/');
      strfilePath = strfilePath.substring(index + 1, strfilePath.length);
      pobjObjectiveAttachmentEN.SetFilePath(filePath);

      pobjObjectiveAttachmentEN.SetObjectiveAttachmentName(strfilePath);
    }
    pobjObjectiveAttachmentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期

    pobjObjectiveAttachmentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班
    pobjObjectiveAttachmentEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
  }
  ///////////////////////////////////////////////////////////////////数据提交；
  //客观提交审核
  public async btnIsSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    this.SubmitRecord(strKeyId);
  }
  //提交判断；
  public async SubmitRecord(strTopicObjectiveId: string) {
    this.keyId = strTopicObjectiveId;

    try {
      const objTopicObjectiveEN = await TopicObjective_GetObjByTopicObjectiveIdAsync(
        strTopicObjectiveId,
      );
      if (objTopicObjectiveEN == null) return;
      //通过session 权限获取权限
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色 //学生00620003
      if (strRoleId == '00620003') {
        // //通过判断数据用户是否是当前登录用户；
        if (objTopicObjectiveEN.updUser == strUserId) {
          //判断数据是否已审核
          if (objTopicObjectiveEN.isSubmit == false) {
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
        if (objTopicObjectiveEN.isSubmit == false) {
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
  /* 提交权限修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async SubmitRecordSave(): Promise<boolean> {
    const strThisFuncName = this.SubmitRecordSave.name;

    //
    const objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
    objTopicObjectiveEN.SetTopicObjectiveId(this.keyId);
    objTopicObjectiveEN.SetIsSubmit(true);
    //this.PutDataToTopicObjectiveClass(objTopicObjectiveEN);
    objTopicObjectiveEN.sfUpdFldSetStr = objTopicObjectiveEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objTopicObjectiveEN.topicObjectiveId == '' ||
      objTopicObjectiveEN.topicObjectiveId == undefined
    ) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool = await TopicObjective_UpdateRecordAsync(objTopicObjectiveEN);
      if (returnBool == true) {
        const strInfo = `提交成功!`;

        //显示信息框
        alert(strInfo);

        this.HideDialog_TopicObjective();
        this.iShowList.BindGv(clsTopicObjectiveEN._CurrTabName, returnBool.toString());
      } else {
        const strInfo = `提交不成功!`;

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

  ////////////////////////////////////////////////////修改数据

  //修改权限判断是否提交 提交则不可修改；
  /* 根据关键字获取相应的记录的对象
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
 <param name = "sender">参数列表</param>
*/
  public async UpdateRecord(strTopicObjectiveId: string): Promise<boolean> {
    this.btnSubmitTopicObjective = '确认修改';
    this.btnCancelTopicObjective = '取消修改';
    this.keyId = strTopicObjectiveId;
    const strUserId = userStore.getUserId;
    try {
      const responseText = await TopicObjective_GetObjByTopicObjectiveIdAsync(strTopicObjectiveId);
      const objTopicObjectiveEN: clsTopicObjectiveEN = <clsTopicObjectiveEN>responseText;

      // //通过判断数据用户是否是当前登录用户；
      if (objTopicObjectiveEN.updUser == strUserId) {
        //判断数据是否提交，提交则不可修改；
        if (objTopicObjectiveEN.isSubmit == false) {
          this.ShowDialog_TopicObjective('Update');
          this.GetDataFromTopicObjectiveClass(objTopicObjectiveEN);
          console.log('完成UpdateRecord!');
        } else {
          alert('当前数据已提交,不能修改！');
          return false;
        }
      } else {
        alert('当前数据不是您所添加，不能修改！');
        return false;
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }

  /* 修改记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async UpdateRecordSave() {
    const divName = this.getDivName();
    const strThisFuncName = this.UpdateRecordSave.name;

    const objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
    objTopicObjectiveEN.SetTopicObjectiveId(this.keyId);
    $('#hidObjectiveId').val(this.keyId);
    this.PutDataToTopicObjectiveClass(objTopicObjectiveEN);
    objTopicObjectiveEN.sfUpdFldSetStr = objTopicObjectiveEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objTopicObjectiveEN.topicObjectiveId == '' ||
      objTopicObjectiveEN.topicObjectiveId == undefined
    ) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await TopicObjective_UpdateRecordAsync(objTopicObjectiveEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        //如果等于空，那么就去判断附件是否为空；
        //得到相关论文附件地址，判断是否为空 只要有一个不为空都执行附件清除功能；
        if (
          (GetInputValueInDivObj(divName, 'hdnFileOne') != '' && $('#hdnFileOne') != undefined) ||
          (GetInputValueInDivObj(divName, 'hdnFileTwo') != '' && $('#hdnFileTwo') != undefined) ||
          (GetInputValueInDivObj(divName, 'hdnFileThree') != '' && $('#hdnFileThree') != undefined)
        ) {
          //根据Id删除附件
          const strwhere = `topicObjectiveId ='${objTopicObjectiveEN.topicObjectiveId}'`;
          this.DelRecordByWhere(strwhere);
        }
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }

  //添加历史版本
  public async AddVersionRecordSave() {
    const strThisFuncName = this.AddVersionRecordSave.name;

    const objTopicObjectiveVerEN: clsTopicObjectiveVerEN = new clsTopicObjectiveVerEN();
    objTopicObjectiveVerEN.SetTopicObjectiveId(this.topicObjectiveId);
    this.PutDataToTopicObjectiveVClass(objTopicObjectiveVerEN);

    try {
      const responseText2 = await TopicObjectiveVer_AddNewRecordAsync(objTopicObjectiveVerEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1 =1 and topicObjectiveId=${this.topicObjectiveId}`;
        const intVersionCount = await TopicObjectiveVer_GetRecCountByCondAsync(strWhereCond2);

        const objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
        objTopicObjectiveEN.SetTopicObjectiveId(this.topicObjectiveId);
        objTopicObjectiveEN.SetVersionCount(intVersionCount);

        objTopicObjectiveEN.sfUpdFldSetStr = objTopicObjectiveEN.updFldString; //设置哪些字段被修改(脏字段)
        if (
          objTopicObjectiveEN.topicObjectiveId == '' ||
          objTopicObjectiveEN.topicObjectiveId == undefined
        ) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        TopicObjective_UpdateRecordAsync(objTopicObjectiveEN).then((jsonData) => {
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

  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjTopicObjectiveEN">数据传输的目的类对象</param>
  */
  public PutDataToTopicObjectiveVClass(pobjTopicObjectiveVerEN: clsTopicObjectiveVerEN) {
    const divName = this.getDivName();
    const strUserId = userStore.getUserId;
    pobjTopicObjectiveVerEN.SetTopicObjectiveId(this.topicObjectiveId); // 客观Id
    pobjTopicObjectiveVerEN.SetObjectiveName(this.objectiveName); // 客观名称
    pobjTopicObjectiveVerEN.SetObjectiveContent(this.objectiveContent); // 客观内容
    //判断客观类型
    const strhidObjectiveTypeId = GetInputValueInDivObj(divName, 'hidObjectiveTypeId');
    if (strhidObjectiveTypeId != '') {
      pobjTopicObjectiveVerEN.SetObjectiveType(strhidObjectiveTypeId);
    }
    //pobjTopicObjectiveVerEEN.SetObjectiveType(this.objectiveType;// 客观类型
    pobjTopicObjectiveVerEN.SetSourceId(this.sourceId); // 来源Id
    pobjTopicObjectiveVerEN.SetConclusion(this.conclusion); // 结论

    pobjTopicObjectiveVerEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjTopicObjectiveVerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjTopicObjectiveVerEN.SetUpdUser(strUserId); // 修改用户Id
    pobjTopicObjectiveVerEN.SetMemo(this.memo); // 备注
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjTopicObjectiveEN">数据传输的目的类对象</param>
   */
  public async PutDataToTopicObjectiveClass(pobjTopicObjectiveEN: clsTopicObjectiveEN) {
    const divName = this.getDivName();
    const strUserId = userStore.getUserId;
    pobjTopicObjectiveEN.SetTopicObjectiveId(this.topicObjectiveId); // 客观Id
    pobjTopicObjectiveEN.SetObjectiveName(this.objectiveName); // 客观名称
    pobjTopicObjectiveEN.SetObjectiveContent(this.objectiveContent); // 客观内容
    //判断客观类型
    const strhidObjectiveTypeId = GetInputValueInDivObj(divName, 'hidObjectiveTypeId');
    if (strhidObjectiveTypeId != '') {
      pobjTopicObjectiveEN.SetObjectiveType(strhidObjectiveTypeId);
    }
    //pobjTopicObjectiveEEN.SetObjectiveType(this.objectiveType;// 客观类型
    pobjTopicObjectiveEN.SetSourceId(this.sourceId); // 来源Id
    pobjTopicObjectiveEN.SetConclusion(this.conclusion); // 结论
    pobjTopicObjectiveEN.SetIsSubmit(false); //是否提交；
    pobjTopicObjectiveEN.SetShareId(this.shareId);
    pobjTopicObjectiveEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjTopicObjectiveEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjTopicObjectiveEN.SetUpdUser(strUserId); // 修改用户Id
    pobjTopicObjectiveEN.SetMemo(this.memo); // 备注
  }

  /* 函数功能:把类对象的属性内容显示到界面上
注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
如果在设置数据库时,就应该一级字段在前,二级字段在后
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
<param name = "pobjTopicObjectiveEN">表实体类对象</param>
*/
  public async GetDataFromTopicObjectiveClass(pobjTopicObjectiveEN: clsTopicObjectiveEN) {
    this.topicObjectiveId = pobjTopicObjectiveEN.topicObjectiveId; // 客观Id
    this.objectiveName = pobjTopicObjectiveEN.objectiveName; // 客观名称
    this.objectiveContent = pobjTopicObjectiveEN.objectiveContent; // 客观内容
    this.objectiveType = pobjTopicObjectiveEN.objectiveType; // 客观类型
    this.sourceId = pobjTopicObjectiveEN.sourceId; // 来源Id
    this.conclusion = pobjTopicObjectiveEN.conclusion; // 结论
    this.shareId = pobjTopicObjectiveEN.shareId;
    this.isSubmit = pobjTopicObjectiveEN.isSubmit; // 是否提交
    this.updDate = pobjTopicObjectiveEN.updDate; // 修改日期
    //this.updUser = pobjTopicObjectiveEN.updUser;// 修改用户Id
    this.memo = pobjTopicObjectiveEN.memo; // 备注
  }

  //删除观点附件
  /* 
根据关键字删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecordByWhere(strWhere: string) {
    const divName = this.getDivName();

    try {
      const returnInt: number = await ObjectiveAttachment_DelObjectiveAttachmentsByCondAsync(
        strWhere,
      );
      if (returnInt > 0) {
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
      } else {
        // const strInfo = `删除记录不成功!`;
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
}
