import { userStore } from '@/store/modulesShare/user';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import { clsgs_ResearchPlanEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ResearchPlanEN';
import {
  ResearchTopic_GetFirstObjAsync,
  ResearchTopic_GetObjLstsessionStorage,
} from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import {
  gs_ResearchPlan_AddNewRecordAsync,
  gs_ResearchPlan_AddNewRecordWithMaxIdAsync,
  gs_ResearchPlan_IsExistAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_ResearchPlanWApi';
import { gs_TopicTaskStatus_BindDdl_StatusIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_TopicTaskStatusWApi';
import {
  ResearchTopicEx_Bind_TopicList,
  ResearchTopicEx_GetIdCurrEduClsByTopicId,
} from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  ClearSelectValueByIdInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { gs_ResearchPlan_Edit } from '@/viewsBase/GradEduTopic/gs_ResearchPlan_Edit';

declare let window: any;

/* gs_ResearchPlan_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_ResearchPlan_EditEx extends gs_ResearchPlan_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: gs_ResearchPlan_EditEx = <gs_ResearchPlan_EditEx>(
      gs_ResearchPlan_Edit.GetPageEditObj('gs_ResearchPlan_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_ResearchPlan_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPage.btnAddNewRecordWithMaxId_Click();

        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        // this.btnUpdateRecord_Click('');
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'gs_ResearchPlan_EditEx.btn_Click');

        break;
    }
  }

  //----------------------

  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
   */
  public async btnUpdateRecord_Click(strKeyId: string) {
    this.opType = 'Update';

    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }

    const bolIsSuccess = await this.ShowDialog_gs_ResearchPlan(this.opType);
    if (bolIsSuccess == false) return;
    // 为编辑区绑定下拉框
    await this.BindDdl4EditRegion();
    this.ShowDialog_gs_ResearchPlan('Update');
    this.bolIsLoadEditRegion = true; //
    this.UpdateRecord(strKeyId);
  }
  public async GetDataFromgs_ResearchPlanClass(pobjgs_ResearchPlanEN: clsgs_ResearchPlanEN) {
    this.planId = pobjgs_ResearchPlanEN.planId; // 计划Id
    this.statusId = pobjgs_ResearchPlanEN.statusId; // 状态
    this.planTypeId = pobjgs_ResearchPlanEN.planTypeId; // 类型
    //  this.topicId = pobjgs_ResearchPlanEN.topicId;// 主题
    this.planContent = pobjgs_ResearchPlanEN.planContent; // 计划内容
    this.responsibleUser = pobjgs_ResearchPlanEN.responsibleUser; // 负责人/小组
    this.startDate = pobjgs_ResearchPlanEN.startDate; // 开始日期
    this.endDate = pobjgs_ResearchPlanEN.endDate; // 截止日期
    // this.isSubmit = pobjgs_ResearchPlanEN.isSubmit;// 是否提交
    // this.updUser = pobjgs_ResearchPlanEN.updUser; // 修改人
    // this.updDate = pobjgs_ResearchPlanEN.updDate; // 修改日期
    this.memo = pobjgs_ResearchPlanEN.memo; // 备注
  }
  /* 函数功能:为编辑区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
   */
  public async BindDdl4EditRegion() {
    // 在此处放置用户代码以初始化页面
    const divName = this.getDivName();
    if (divName == null) return;
    await gs_TopicTaskStatus_BindDdl_StatusIdInDivCache(divName, 'ddlStatusId'); //编辑区域
    //定义条件字段
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

    const bolIsSuccess = await this.ShowDialog_gs_ResearchPlan(this.opType);
    if (bolIsSuccess == false) return;

    // 为编辑区绑定下拉框
    await this.BindDdl4EditRegion();
    this.ShowDialog_gs_ResearchPlan('Update');
    this.bolIsLoadEditRegion = true; //
    this.UpdateRecord(strKeyId);
  }

  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   */
  public async btnAddNewRecord_Click() {
    this.opType = 'Add';
    try {
      const bolIsSuccess = await this.ShowDialog_gs_ResearchPlan(this.opType);
      if (bolIsSuccess == false) return;
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegion();
      this.ShowDialog_gs_ResearchPlan('Add');
      this.bolIsLoadEditRegion = true; //
      this.AddNewRecord();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  /**
   * 清除用户自定义控件中,所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    this.planId = '';
    ClearSelectValueByIdInDivObj(this.divEdit, 'ddlStatusId');
    // ClearSelectValueByIdInDivObj(this.divEdit, 'ddlTopicId');
    this.planContent = '';
    this.responsibleUser = '';
    this.startDate = '';
    this.endDate = '';
    // this.isSubmit = false;
    this.memo = '';
  }
  /* 添加新记录
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecordWithMaxId_Click)
     */
  public async btnAddNewRecordWithMaxId_Click() {
    this.opType = 'AddWithMaxId';
    try {
      const bolIsSuccess = await this.ShowDialog_gs_ResearchPlan(this.opType);
      if (bolIsSuccess == false) return;
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegion();
      //  ShowDialog('Add');
      this.bolIsLoadEditRegion = true; //
      this.AddNewRecordWithMaxId();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnOKUpd_Click() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmitgs_ResearchPlan;
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
              await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
                const strPlanId: string = <string>jsonData;
                // const returnBool2: boolean = jsonData;
                if (strPlanId != '') {
                  this.HideDialog_gs_ResearchPlan();
                  //this.BindGv_vgs_ResearchPlan();
                  // CloseWindow();
                }
              });
            } else {
              await this.AddNewRecordSave().then((jsonData) => {
                const returnBool: boolean = jsonData;
                if (returnBool == true) {
                  this.HideDialog_gs_ResearchPlan();
                  //this.BindGv_vgs_ResearchPlan();
                  // CloseWindow();
                }
              });
            }
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            await this.UpdateRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              let strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
              strInfo += '(In gs_ResearchPlanCRUD.btnOKUpd_Click)';

              //显示信息框
              console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                // CloseWindow();
                this.HideDialog_gs_ResearchPlan();
                //this.BindGv_vgs_ResearchPlan();
              }
            });
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
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   */
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
          ////const strThisFuncName = this.PageLoad.name;
        }
        clsPubLocalStorage.idCurrEduCls = objResearchTopic.idCurrEduCls;
      }
      //// 为查询区绑定下拉框
      //await this.BindDdl4QueryRegion();

      //this.hidSortvgs_ResearchPlanBy = "topicName Asc";
      ////2、显示无条件的表内容在GridView中
      //await this.BindGv_vgs_ResearchPlan();

      const strPlanId = GetInputValueInDivObj(divName, 'hidPlanId');
      if (strPlanId != '') {
        //如果是修改，那么部分控件需要置灰； 开始、结束日期
        $('#txtStartDate').attr('disabled', 'true');
        $('#txtEndDate').attr('disabled', 'true');

        await this.BindDdl4EditRegion();
        await this.UpdateRecord(strPlanId);
        HideDivInDivObj(divName, 'divLoading');
      } else {
        ////2、显示无条件的表内容在GridView中
        //await this.BindGv_vSysSkill();

        //this.btnAddNewRecord_Click();
        this.btnAddNewRecordWithMaxId_Click();
        HideDivInDivObj(divName, 'divLoading');
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 函数功能:为编辑区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
   */
  public async BindDdl4EditRegionV2() {
    // 在此处放置用户代码以初始化页面
    const divName = this.getDivName();
    if (divName == null) return;
    await gs_TopicTaskStatus_BindDdl_StatusIdInDivCache(divName, 'ddlStatusId'); //编辑区域
    //定义条件字段
  }

  /* 函数功能:为编辑区绑定下拉框
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
*/
  public async BindDdl4EditRegionV3() {
    const divName = this.getDivName();
    if (divName == null) return;
    // 在此处放置用户代码以初始化页面

    await gs_TopicTaskStatus_BindDdl_StatusIdInDivCache(divName, 'ddlStatusId'); //编辑区域
    //定义条件字段
    //strIdCurrEducls = "";//定义条件字段
    await this.BindDdl_TopicId_Cache('ddlTopicId', clsPubLocalStorage.idCurrEduCls); //编辑区域
  }

  /// <summary>
  /// 绑定基于Web的下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public async BindDdl_TopicId_Cache(strDdlName: string, idCurrEduCls: string) {
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_ResearchTopicCache');
    const arrObjLst_Sel: Array<clsResearchTopicEN> = await ResearchTopic_GetObjLstsessionStorage(
      idCurrEduCls,
    );
    BindDdl_ObjLst(
      strDdlName,
      arrObjLst_Sel,
      clsResearchTopicEN.con_TopicId,
      clsResearchTopicEN.con_TopicName,
      '主题',
    );
  }

  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   */
  public async btnAddNewRecord_ClickV2() {
    this.opType = 'Add';
    try {
      const bolIsSuccess = await this.ShowDialog_gs_ResearchPlan(this.opType);
      if (bolIsSuccess == false) return;
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegion();
      this.ShowDialog_gs_ResearchPlan('Add');
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
  public async btnAddNewRecordWithMaxId_ClickV2() {
    this.opType = 'AddWithMaxId';
    try {
      const bolIsSuccess = await this.ShowDialog_gs_ResearchPlan(this.opType);
      if (bolIsSuccess == false) return;
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegion();
      this.ShowDialog_gs_ResearchPlan('Add');
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
  public async btnUpdateRecordInTab_ClickV2(strKeyId: string) {
    this.opType = 'Update';
    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }

    const bolIsSuccess = await this.ShowDialog_gs_ResearchPlan(this.opType);
    if (bolIsSuccess == false) return;
    // 为编辑区绑定下拉框
    await this.BindDdl4EditRegion();
    this.ShowDialog_gs_ResearchPlan('Update');
    this.bolIsLoadEditRegion = true; //
    this.UpdateRecord(strKeyId);
  }

  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
   */
  public async btnUpdateRecord_ClickV2(strKeyId: string) {
    this.opType = 'Update';

    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }

    const bolIsSuccess = await this.ShowDialog_gs_ResearchPlan(this.opType);
    if (bolIsSuccess == false) return;
    // 为编辑区绑定下拉框
    await this.BindDdl4EditRegion();
    this.ShowDialog_gs_ResearchPlan('Update');
    this.bolIsLoadEditRegion = true; //
    this.UpdateRecord(strKeyId);
  }
  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjgs_ResearchPlanEN">数据传输的目的类对象</param>
   */
  public async PutDataTogs_ResearchPlanClass(pobjgs_ResearchPlanEN: clsgs_ResearchPlanEN) {
    pobjgs_ResearchPlanEN.SetPlanId(this.planId); // 计划Id
    pobjgs_ResearchPlanEN.SetStatusId(this.statusId); // 状态
    pobjgs_ResearchPlanEN.planTypeId = this.planTypeId; // 类型
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);
    pobjgs_ResearchPlanEN.SetTopicId(strTopicId); // 主题
    pobjgs_ResearchPlanEN.SetIdCurrEduCls(strIdCurrEduCls); // 教学班

    pobjgs_ResearchPlanEN.SetPlanContent(this.planContent); // 计划内容
    pobjgs_ResearchPlanEN.SetResponsibleUser(this.responsibleUser); // 负责人/小组
    pobjgs_ResearchPlanEN.SetStartDate(this.startDate); // 开始日期
    pobjgs_ResearchPlanEN.SetEndDate(this.endDate); // 截止日期
    pobjgs_ResearchPlanEN.SetIsSubmit(false); // 是否提交
    pobjgs_ResearchPlanEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjgs_ResearchPlanEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0)); // 修改日期
    pobjgs_ResearchPlanEN.SetMemo(this.memo); // 备注
  }

  /* 添加新记录，保存函数
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
     */
  public async AddNewRecordSave() {
    // this.DivName = 'divAddNewRecordSave';
    const objgs_ResearchPlanEN: clsgs_ResearchPlanEN = new clsgs_ResearchPlanEN();
    await this.PutDataTogs_ResearchPlanClass(objgs_ResearchPlanEN);
    try {
      const responseText = await gs_ResearchPlan_IsExistAsync(objgs_ResearchPlanEN.planId);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `添加记录时，关键字：${objgs_ResearchPlanEN.planId}已经存在！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }
      const responseText2 = await gs_ResearchPlan_AddNewRecordAsync(objgs_ResearchPlanEN);
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

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
     */
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const objgs_ResearchPlanEN = new clsgs_ResearchPlanEN();
    await this.PutDataTogs_ResearchPlanClass(objgs_ResearchPlanEN);
    try {
      const strPlanId = await gs_ResearchPlan_AddNewRecordWithMaxIdAsync(objgs_ResearchPlanEN);

      // const returnBool: boolean = !!responseText2;
      if (strPlanId != '') {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return strPlanId; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return '';
    }
    // return true; //一定要有一个返回值，否则会出错！
  }
  // /*
  //  * 计划Id
  //  */
  // public set planId(value: string) {
  //   const divName = this.getDivName();
  //   SetInputValueInDivObj(divName, 'txtPlanId', value);
  // }
  // /*
  //  * 计划Id
  //  */
  // public get planId(): string {
  //   const divName = this.getDivName();
  //   return GetInputValueInDivObj(divName, 'txtPlanId');
  // }
  /*
   * 类型Id
   */
  public set planTypeId(value: string) {
    const divName = this.getDivName();
    SetSelectValueByIdInDivObj(divName, 'ddlPlanTypeId', value);
  }
  /*
   * 计划类型Id
   */
  public get planTypeId(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlPlanTypeId');
  }
  //======================
}
