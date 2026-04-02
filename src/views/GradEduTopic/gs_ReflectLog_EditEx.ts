import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { gs_ReflectLog_Edit } from '@/viewsBase/GradEduTopic/gs_ReflectLog_Edit';
import { clsgs_ReflectLogEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ReflectLogEN';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';

// import $ from 'jquery';
// declare let window: any;
/* gs_ReflectLog_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_ReflectLog_EditEx extends gs_ReflectLog_Edit {
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    // const objgs_ReflectLogCRUD: gs_ReflectLogCRUDEx = new gs_ReflectLogCRUDEx();
    //const objPage: gs_ReflectLog_EditEx = new gs_ReflectLog_EditEx(objgs_ReflectLogCRUD);
    const objPage: gs_ReflectLog_EditEx = <gs_ReflectLog_EditEx>(
      gs_ReflectLog_Edit.GetPageEditObj('gs_ReflectLog_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_ReflectLog_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;

      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_ReflectLog_EditEx.btn_Click');

        break;
    }
  }
  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjgs_ReflectLogEN">数据传输的目的类对象</param>
*/
  public async PutDataTogs_ReflectLogClass(pobjgs_ReflectLogEN: clsgs_ReflectLogEN) {
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    pobjgs_ReflectLogEN.SetTopicId(strTopicId); // 主题编号
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);

    pobjgs_ReflectLogEN.SetIdCurrEduCls(strIdCurrEduCls);
    pobjgs_ReflectLogEN.SetUserId(userStore.getUserId); // 用户ID
    pobjgs_ReflectLogEN.SetReflectLogName(this.reflectLogName); // 标题
    pobjgs_ReflectLogEN.SetReflectLogContent(this.reflectLogContent); // 内容
    pobjgs_ReflectLogEN.SetUpdDate(clsPubFun4Web.getNowDate_ymd()); // 修改日期
    pobjgs_ReflectLogEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjgs_ReflectLogEN.SetMemo(this.memo); // 备注
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnSubmit_Click() {
    const strCommandText: string = this.btnSubmitgs_ReflectLog;
    try {
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
            //HideDialog_gs_ReflectLog();
            //this.iShowList.BindGvCache(clsgs_ReflectLogEN._CurrTabName);
            //}
            //});
          } else {
            const returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              if (gs_ReflectLog_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                this.HideDialog_gs_ReflectLog();
              }
              this.iShowList.BindGvCache(clsgs_ReflectLogEN._CurrTabName, '');
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          const returnBool = await this.UpdateRecordSave();
          let strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In gs_ReflectLog_Edit.btnSubmit_Click)';

          //显示信息框
          console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            if (gs_ReflectLog_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
              this.HideDialog_gs_ReflectLog();
            }
            this.iShowList.BindGvCache(clsgs_ReflectLogEN._CurrTabName, '');
          }

          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnSubmit_Click');

          break;
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   */
  public async btnAddNewRecord_Click() {
    this.opType = 'Add';
    try {
      const bolIsSuccess = await this.ShowDialog_gs_ReflectLog(this.opType);
      if (bolIsSuccess == false) return;
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
      const bolIsSuccess = await this.ShowDialog_gs_ReflectLog(this.opType);
      if (bolIsSuccess == false) return;
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegion();
      //  ShowDialog_gs_TeacherTask('Add');
      this.bolIsLoadEditRegion = true; //
      // this.AddNewRecordWithMaxId();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:为编辑区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
   */
  public async BindDdl4EditRegion() {
    // 在此处放置用户代码以初始化页面
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
    const bolIsSuccess = await this.ShowDialog_gs_ReflectLog(this.opType);
    if (bolIsSuccess == false) return;
    // 为编辑区绑定下拉框
    await this.BindDdl4EditRegion();
    // ShowDialog_gs_TeacherTask('Update');
    this.bolIsLoadEditRegion = true; //
    const lngKeyId = Number(strKeyId);
    this.UpdateRecord(lngKeyId);
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
    const bolIsSuccess = await this.ShowDialog_gs_ReflectLog(this.opType);
    if (bolIsSuccess == false) return;
    // 为编辑区绑定下拉框
    await this.BindDdl4EditRegion();
    // ShowDialog_gs_TeacherTask('Update');
    this.bolIsLoadEditRegion = true; //
    const lngKeyId = Number(strKeyId);
    this.UpdateRecord(lngKeyId);
  }
}
