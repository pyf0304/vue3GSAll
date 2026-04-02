import $ from 'jquery';
import { gs_TeacherTask_Edit } from '@/viewsBase/GradEduTopic/gs_TeacherTask_Edit';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import {
  CheckDivExist,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  HideDivInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsgs_ReflectLogEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ReflectLogEN';
import { ResearchTopic_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import {
  gs_TeacherTask_AddNewRecordAsync,
  gs_TeacherTask_GetObjBymIdAsync,
  gs_TeacherTask_IsExistAsync,
  gs_TeacherTask_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_TeacherTaskWApi';
import { clsgs_TeacherTaskEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TeacherTaskEN';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';

declare let window: any;
/* gs_TeacherTask_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_TeacherTask_EditEx extends gs_TeacherTask_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: gs_TeacherTask_EditEx = <gs_TeacherTask_EditEx>(
      gs_TeacherTask_Edit.GetPageEditObj('gs_TeacherTask_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_TeacherTask_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_TeacherTask_EditEx.btn_Click');

        break;
    }
  }
  /**
   * 在当前界面中，导入编辑区域
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
   * @returns
   **/
  public async AddDPV_Edit(divName4Edit: string) {
    //const strThisFuncName = this.AddDPV_Edit.name;
    CheckDivExist(divName4Edit);
    const strUrl = '../GradEduTopic/gs_TeacherTask_Edit';
    //console.log("divName4Edit:(In AddDPV_Edit)" + divName4Edit);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'GET',
        dataType: 'html',
        data: {},
        success(data: any) {
          console.log(`已经成功获取页面:${strUrl}  字节数: ${data.length.toString()}`);
          $(`#${divName4Edit}`).html(data);
          resolve(true);
          //setTimeout(() => { clsEditObj.BindTab(); }, 100);
          //clsEditObj.BindTab();
        },
        error: (e: any) => {
          console.error(e);
          reject(e);
        },
      });
    });
  }

  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   **/
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;
    try {
      const bolIsSuccess = await this.ShowDialog_gs_TeacherTask(this.opType);
      if (bolIsSuccess == false) return;
      this.opType = 'Add';
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      this.btnSubmitgs_TeacherTask = '确认添加';
      this.btnCancelgs_TeacherTask = '取消添加';
      this.AddNewRecord();
      if (gs_TeacherTask_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        this.ShowDialog_gs_TeacherTask('Add');
      }
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

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnSubmit_Click() {
    const divName = this.getDivName();
    if (divName == null) return;
    const strCommandText: string = this.btnSubmitgs_TeacherTask;
    try {
      if (userStore.getUserId != '') {
        switch (strCommandText) {
          case '添加':
            await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,
            if (this.opType == 'AddWithMaxId') {
              //const responseText3 = await this.AddNewRecordWithMaxIdSave().then((jsonData)=>{
              //const returnBool2: boolean = jsonData;
              //if (returnBool2 == true)
              //{
              //HideDialog_gs_TeacherTask();
              //this.BindGv_gs_TeacherTask();
              //}
              //});
            } else {
              const returnBool = await this.AddNewRecordSave();
              if (returnBool == true) {
                this.HideDialog_gs_TeacherTask();
                //this.BindGv_gs_TeacherTask();
                this.iShowList.BindGvCache(clsgs_TeacherTaskEN._CurrTabName, '');
              }
            }
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            await this.UpdateRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              let strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
              strInfo += '(In gs_TeacherTaskCRUD.btnSubmit_Click)';

              //显示信息框
              console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                this.HideDialog_gs_TeacherTask();
                //this.BindGv_gs_TeacherTask();

                this.iShowList.BindGvCache(clsgs_TeacherTaskEN._CurrTabName, '');
              }
            });
            break;
          default:
            AccessSubmitClickDefault(strCommandText, 'btnSubmit_Click');

            break;
        }
      } else {
        alert('登录超时，请重新登录');
        reLogin();
      }
      // HideDivInDivObj(divName, 'divLoading');

      //去掉提交按钮不可用状态
      $('#btnSubmit_gs_TeacherTask').attr('disabled', 'false');
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
   */
  public async AddNewRecord() {
    this.btnSubmitgs_TeacherTask = '确认添加';
    this.btnCancelgs_TeacherTask = '取消添加';
    this.Clear();
    //wucgs_TeacherTaskB1.mId = clsgs_TeacherTaskBL.GetMaxStrId_S();
  }

  /* 为插入记录做准备工作
       (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
     */
  public async AddNewRecordWithMaxId() {
    this.btnSubmitgs_TeacherTask = '确认添加';
    this.btnCancelgs_TeacherTask = '取消添加';
    this.Clear();
    //wucgs_TeacherTaskB1.mId = clsgs_TeacherTaskBL.GetMaxStrId_S();
  }

  /* 函数功能:把界面上的属性数据传到类对象中
       (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
       <param name = "pobjgs_ReflectLogEN">数据传输的目的类对象</param>
     */
  public async PutDataTogs_TeacherTaskClass(pobjgs_TeacherTaskEN: clsgs_TeacherTaskEN) {
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    pobjgs_TeacherTaskEN.SetTopicId(strTopicId); // 主题编号
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);
    pobjgs_TeacherTaskEN.SetIdCurrEduCls(strIdCurrEduCls); // 当前教学班流水号
    pobjgs_TeacherTaskEN.SetMissionStatement(this.missionStatement); // 任务说明
    pobjgs_TeacherTaskEN.SetMissionRequirement(this.missionRequirement); // 任务要求
    pobjgs_TeacherTaskEN.SetUpdDate(clsPubFun4Web.getNowDate_ymd()); // 修改日期
    pobjgs_TeacherTaskEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjgs_TeacherTaskEN.SetMemo(this.memo); // 备注
  }

  public async PageLoad() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      //通过主题Id获取教学班ID
      if (clsPubLocalStorage.idCurrEduCls == '') {
        const objResearchTopic = await ResearchTopic_GetFirstObjAsync(
          ` topicId=${clsPrivateSessionStorage.topicIdInTree}`,
        );
        if (objResearchTopic == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
          //const strThisFuncName = this.ShowData.name;
        }
        clsPubLocalStorage.idCurrEduCls = objResearchTopic.idCurrEduCls;
      }

      const strmId = GetInputValueInDivObjN(divName, 'hidKeyId');
      if (strmId != 0) {
        await this.BindDdl4EditRegion();
        await this.UpdateRecord(strmId);
        HideDivInDivObj(divName, 'divLoading');
      } else {
        ////2、显示无条件的表内容在GridView中
        //await this.BindGv_vSysSkill();

        this.btnAddNewRecord_Click();

        HideDivInDivObj(divName, 'divLoading');
      }

      ////2、显示无条件的表内容在GridView中
      //await this.BindGv_gs_TeacherTask();
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }
  /*
   * 名称
   */
  public set reflectLogName(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtReflectLogName', value);
  }
  /*
   * 名称
   */
  public get reflectLogName(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtReflectLogName');
  }
  /*
   * 内容
   */
  public set reflectLogContent(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtReflectLogContent', value);
  }
  /*
   * 内容
   */
  public get reflectLogContent(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtReflectLogContent');
  }

  //----------------------------

  /* 函数功能:把类对象的属性内容显示到界面上
          注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
           如果在设置数据库时,就应该一级字段在前,二级字段在后
           (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
           <param name = "pobjgs_ReflectLogEN">表实体类对象</param>
         */
  public GetDataFromgs_TeacherTaskClassV2(pobjgs_ReflectLogEN: clsgs_ReflectLogEN) {
    this.topicId = pobjgs_ReflectLogEN.topicId; // 主题编号
    this.reflectLogName = pobjgs_ReflectLogEN.reflectLogName; // 名称
    this.reflectLogContent = pobjgs_ReflectLogEN.reflectLogContent; // 内容
    // this.updDate = pobjgs_ReflectLogEN.updDate; // 修改日期
    // this.updUser = pobjgs_ReflectLogEN.updUser; // 修改人
    this.memo = pobjgs_ReflectLogEN.memo; // 备注
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

    const bolIsSuccess = await this.ShowDialog_gs_TeacherTask(this.opType);
    if (bolIsSuccess == false) return;
    // 为编辑区绑定下拉框
    await this.BindDdl4EditRegion();
    // ShowDialog_gs_TeacherTask('Update');
    this.bolIsLoadEditRegion = true; //
    const lngKeyId = Number(strKeyId);
    this.UpdateRecord(lngKeyId);
  }
  /* 函数功能:为编辑区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
   */
  public async BindDdl4EditRegion() {
    // 在此处放置用户代码以初始化页面
  }
  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   */
  public async btnAddNewRecord_ClickV2() {
    this.opType = 'Add';
    try {
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegion();
      //  ShowDialog_gs_TeacherTask('Add');
      this.bolIsLoadEditRegion = true; //
      this.AddNewRecord();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecordWithMaxId_Click)
   */
  public async btnAddNewRecordWithMaxId_Click() {
    this.opType = 'AddWithMaxId';
    try {
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegion();
      //  ShowDialog_gs_TeacherTask('Add');
      this.bolIsLoadEditRegion = true; //
      this.AddNewRecordWithMaxId();
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
    this.opType = 'Update';
    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }

    const bolIsSuccess = await this.ShowDialog_gs_TeacherTask(this.opType);
    if (bolIsSuccess == false) return;
    // 为编辑区绑定下拉框
    await this.BindDdl4EditRegion();
    // ShowDialog_gs_TeacherTask('Update');
    this.bolIsLoadEditRegion = true; //
    const lngKeyId = Number(strKeyId);
    this.UpdateRecord(lngKeyId);
  }
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnSubmit_ClickV2() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmitgs_TeacherTask;
    try {
      if (userStore.getUserId != '') {
        switch (strCommandText) {
          case '添加':
            await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,
            if (this.opType == 'AddWithMaxId') {
              //const responseText3 = await this.AddNewRecordWithMaxIdSave().then((jsonData)=>{
              //const returnBool2: boolean = jsonData;
              //if (returnBool2 == true)
              //{
              //HideDialog_gs_TeacherTask();
              //this.BindGv_gs_TeacherTask();
              //}
              //});
            } else {
              const returnBool = await this.AddNewRecordSave();
              if (returnBool == true) {
                this.HideDialog_gs_TeacherTask();
                //this.BindGv_gs_TeacherTask();

                this.iShowList.BindGvCache(clsgs_TeacherTaskEN._CurrTabName, '');
              }
            }
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            await this.UpdateRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              let strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
              strInfo += '(In gs_TeacherTaskCRUD.btnSubmit_Click)';

              //显示信息框
              console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                this.HideDialog_gs_TeacherTask();
                //this.BindGv_gs_TeacherTask();

                this.iShowList.BindGvCache(clsgs_TeacherTaskEN._CurrTabName, '');
              }
            });
            break;
          default:
            AccessSubmitClickDefault(strCommandText, 'btnSubmit_Click');

            break;
        }
      } else {
        alert('登录超时，请重新登录');
        reLogin();
      }
      HideDivInDivObj(divName, 'divLoading');

      //去掉提交按钮不可用状态
      $('#btnSubmit_gs_TeacherTask').attr('disabled', 'false');
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {}

  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
   */
  public async AddNewRecordV2() {
    this.btnSubmitgs_TeacherTask = '确认添加';
    this.btnCancelgs_TeacherTask = '取消添加';
    this.Clear();
    //wucgs_TeacherTaskB1.mId = clsgs_TeacherTaskBL.GetMaxStrId_S();
  }

  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
   */
  public async AddNewRecordWithMaxIdV2() {
    this.btnSubmitgs_TeacherTask = '确认添加';
    this.btnCancelgs_TeacherTask = '取消添加';
    this.Clear();
    //wucgs_TeacherTaskB1.mId = clsgs_TeacherTaskBL.GetMaxStrId_S();
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjgs_TeacherTaskEN">数据传输的目的类对象</param>
   */
  public async PutDataTogs_TeacherTaskClassV3(pobjgs_TeacherTaskEN: clsgs_TeacherTaskEN) {
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    pobjgs_TeacherTaskEN.SetTopicId(strTopicId); // 主题编号
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);

    pobjgs_TeacherTaskEN.SetIdCurrEduCls(strIdCurrEduCls); // 当前教学班流水号
    pobjgs_TeacherTaskEN.SetMissionStatement(this.missionStatement); // 任务说明
    pobjgs_TeacherTaskEN.SetMissionRequirement(this.missionRequirement); // 任务要求
    pobjgs_TeacherTaskEN.SetUpdDate(clsPubFun4Web.getNowDate_ymd()); // 修改日期
    pobjgs_TeacherTaskEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjgs_TeacherTaskEN.SetMemo(this.memo); // 备注
  }

  /* 添加新记录，保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSaveV2() {
    // this.DivName = 'divAddNewRecordSave';
    const objgs_TeacherTaskEN: clsgs_TeacherTaskEN = new clsgs_TeacherTaskEN();
    await this.PutDataTogs_TeacherTaskClass(objgs_TeacherTaskEN);
    try {
      const responseText2 = await gs_TeacherTask_AddNewRecordAsync(objgs_TeacherTaskEN);
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
      return false; //一定要有一个返回值，否则会出错！
    }
  }

  /* 函数功能:把以该关键字的记录内容显示在界面上,
          在这里是把值传到表控件中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowData)
     <param name = "lngmId">表记录的关键字,显示该表关键字的内容</param>
   */
  public async ShowDataV2(lngmId: number) {
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objgs_TeacherTaskEN: clsgs_TeacherTaskEN = new clsgs_TeacherTaskEN();
    try {
      const responseText = await gs_TeacherTask_IsExistAsync(lngmId);
      const returnBool: boolean = responseText;
      if (returnBool == false) {
        const strInfo = `关键字:[${lngmId}] 的记录不存在!`;
        //$('#lblResult1').val(strInfo);
        //显示信息框
        alert(strInfo);
      }
    } catch (e: any) {
      const strMsg = `检查相应关键字的记录存在不成功, ${e}.`;
      alert(strMsg);
    }
    try {
      const responseText = await gs_TeacherTask_GetObjBymIdAsync(lngmId);
      objgs_TeacherTaskEN = <clsgs_TeacherTaskEN>responseText;
    } catch (e: any) {
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
    //3、用提供的关键字初始化一个类对象；
    this.GetDataFromgs_TeacherTaskClass(objgs_TeacherTaskEN);
  }

  /* 函数功能:把类对象的属性内容显示到界面上
    注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
     如果在设置数据库时,就应该一级字段在前,二级字段在后
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
     <param name = "pobjgs_TeacherTaskEN">表实体类对象</param>
   */
  public async GetDataFromgs_TeacherTaskClass(pobjgs_TeacherTaskEN: clsgs_TeacherTaskEN) {
    // this.topicId = pobjgs_TeacherTaskEN.topicId; // 主题编号
    // this.idCurrEduCls = pobjgs_TeacherTaskEN.idCurrEduCls; // 当前教学班流水号
    this.missionStatement = pobjgs_TeacherTaskEN.missionStatement; // 任务说明
    this.missionRequirement = pobjgs_TeacherTaskEN.missionRequirement; // 任务要求
    // this.updDate = pobjgs_TeacherTaskEN.updDate; // 修改日期
    // this.updUser = pobjgs_TeacherTaskEN.updUser; // 修改人
    this.memo = pobjgs_TeacherTaskEN.memo; // 备注
  }

  /* 根据关键字获取相应的记录的对象
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async UpdateRecordV3(lngmId: number) {
    this.btnSubmitgs_TeacherTask = '确认修改';
    this.btnCancelgs_TeacherTask = '取消修改';
    this.keyId = lngmId.toString();
    try {
      const responseText = await gs_TeacherTask_GetObjBymIdAsync(lngmId);
      const objgs_TeacherTaskEN: clsgs_TeacherTaskEN = <clsgs_TeacherTaskEN>responseText;
      this.GetDataFromgs_TeacherTaskClass(objgs_TeacherTaskEN);
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 修改记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   */
  public async UpdateRecordSaveV2() {
    const strThisFuncName = this.UpdateRecordSave.name;

    const objgs_TeacherTaskEN: clsgs_TeacherTaskEN = new clsgs_TeacherTaskEN();
    objgs_TeacherTaskEN.SetmId(Number(this.keyId));
    await this.PutDataTogs_TeacherTaskClass(objgs_TeacherTaskEN);
    objgs_TeacherTaskEN.sfUpdFldSetStr = objgs_TeacherTaskEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objgs_TeacherTaskEN.mId == 0 || objgs_TeacherTaskEN.mId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await gs_TeacherTask_UpdateRecordAsync(objgs_TeacherTaskEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        //gs_TeacherTask_ReFreshCache();
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

  //===========================
}
