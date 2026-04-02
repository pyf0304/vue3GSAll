import { RTUserRela_EditEx } from './RTUserRela_EditEx';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { ResearchTopic_Edit } from '@/viewsBase/GradEduTopic/ResearchTopic_Edit';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import { enumPageDispMode } from '@/ts/L0Entity/PrjMenu/clsPageDispModeEN';
import {
  ResearchTopic_AddNewRecordWithReturnKeyAsync,
  ResearchTopic_GetObjByTopicIdAsync,
  ResearchTopic_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import {
  GetTextAreaValueInDivObj,
  HideDivInDivObj,
  SetTextAreaValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';
/* ResearchTopic_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class ResearchTopic_EditEx extends ResearchTopic_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: ResearchTopic_EditEx = <ResearchTopic_EditEx>(
      ResearchTopic_Edit.GetPageEditObj('ResearchTopic_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'ResearchTopic_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'ResearchTopic_EditEx.btn_Click');

        break;
    }
  }

  /** 函数功能:为编辑区绑定下拉框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
   **/
  public async BindDdl4EditRegionInDiv() {
    //const strThisFuncName = this.BindDdl4EditRegionInDiv.name;
    const divName = this.getDivName();
    if (divName == null) return;
    // 在此处放置用户代码以初始化页面
    await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');
  }
  /** 添加新记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   **/
  public async btnAddNewRecord_Click() {
    const strThisFuncName = this.btnAddNewRecord_Click.name;

    try {
      ResearchTopic_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
      const bolIsSuccess = await this.ShowDialog_ResearchTopic(this.opType);
      if (bolIsSuccess == false) return;
      this.opType = 'Add';
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      this.btnSubmitResearchTopic = '确认添加';
      this.btnCancelResearchTopic = '取消添加';
      this.AddNewRecord();
      if (ResearchTopic_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        this.ShowDialog_ResearchTopic('Add');
      }

      const responseText1 = await gs_UserConfigEx_GetNewReturnShareIdEx('12', userStore.getUserId);
      const strShareId: string = responseText1;
      if (strShareId != '') {
        this.shareId = strShareId;
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

  /* 添加新记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
  */
  public async btnAddNewRecord_ClickBak() {
    this.opType = 'Add';
    try {
      const divName = this.getDivName();
      if (divName == null) return;
      await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');
      await this.AddNewRecord();
      //获取分享Id
      const responseText1 = await gs_UserConfigEx_GetNewReturnShareIdEx('12', userStore.getUserId);
      const strShareId: string = responseText1;
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

  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSave(): Promise<boolean> {
    //this.DivName = "divAddNewRecordSave";

    //先验证界面数据
    if (this.topicName == '') {
      alert('栏目不能为空!');
      return false;
    } else if (this.topicName.length > 100) {
      alert('栏目不能超过100!');
      return false;
    } else if (this.topicContent == '') {
      alert('主题内容不能为空!');
      return false;
    } else if (this.shareId == '' || this.shareId == '0') {
      alert('分享不能为空!');
      return false;
    }
    const objResearchTopicEN: clsResearchTopicEN = new clsResearchTopicEN();
    await this.PutDataToResearchTopicClass(objResearchTopicEN);
    try {
      const strTopicId = await ResearchTopic_AddNewRecordWithReturnKeyAsync(objResearchTopicEN);
      if (strTopicId != '') {
        //这里默认添加一个用户数据 ，作为主题用户关系的组长；
        const objPageEdit = new RTUserRela_EditEx('RTUserRela_EditEx', this.iShowList);
        const bolAddRTUserRela = await objPageEdit.AddNewTopicAndRecordSaveUserRela(strTopicId);
        if (bolAddRTUserRela == true) {
          const strInfo = `添加记录成功!`;

          //显示信息框
          alert(strInfo);
          return true;
        } else {
          const strInfo = `添加研究主题与用户关系不成功!`;

          //显示信息框
          alert(strInfo);
          return false;
        }
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
        return false;
      }
      return true; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnOKUpd_Click() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmitResearchTopic;
    try {
      //判断session是否失效
      if (userStore.getUserId != '') {
        let returnBool;
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
                this.HideDialog_ResearchTopic();
                //树形数据源；
                //this.GetTopicData();
                this.iShowList.BindGv(clsResearchTopicEN._CurrTabName, returnBool.toString());
              }
            });
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            returnBool = await this.UpdateRecordSave();
            if (returnBool == true) {
              this.HideDialog_ResearchTopic();

              //树形数据源；
              //this.GetTopicData();
              this.iShowList.BindGv(clsResearchTopicEN._CurrTabName, returnBool.toString());
            }

            break;
          default:
            AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

            break;
        }
      } else {
        alert('登录超时，请重新登录');
        //window.top.location.href = "../Web/Login";
      }
      HideDivInDivObj(divName, 'divLoading');
      //去掉提交按钮不可用状态
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  /** 修改记录
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
   **/
  public async btnUpdateRecord_Click(strKeyId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    // divName = 'divEdit_ResearchTopic';
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '修改记录的关键字为空，请检查！';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      const bolIsSuccess = await this.ShowDialog_ResearchTopic(this.opType);
      if (bolIsSuccess == false) return;
      this.opType = 'Update';
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      this.btnSubmitResearchTopic = '确认修改';
      this.btnCancelResearchTopic = '取消修改';
      const update = await this.UpdateRecord(strKeyId);
      if (update == false) {
        const strMsg = Format('在修改记录时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      if (ResearchTopic_Edit.strPageDispModeId == enumPageDispMode.PopupBox_01) {
        this.ShowDialog_ResearchTopic('Update');
      }
    } catch (e: any) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 修改
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
  */
  public async btnUpdateRecord_ClickBak(strKeyId: string) {
    //判断主题id

    if (IsNullOrEmpty(strKeyId) == true) {
      alert('请选择需要修改的主题！');
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
  public async UpdateRecord(strTopicId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.btnSubmitResearchTopic = '确认修改';
    this.btnCancelResearchTopic = '取消修改';
    this.keyId = strTopicId;
    const strUserId = userStore.getUserId;

    try {
      const objResearchTopicEN = await ResearchTopic_GetObjByTopicIdAsync(strTopicId);
      if (objResearchTopicEN == null) {
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
      if (objResearchTopicEN.updUser == strUserId) {
        this.ShowDialog_ResearchTopic('Update');
        this.GetDataFromResearchTopicClass(objResearchTopicEN);
        console.log('完成UpdateRecord!');
        return true;
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
  }
  /* 函数功能:把类对象的属性内容显示到界面上
   注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
    如果在设置数据库时,就应该一级字段在前,二级字段在后
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
    <param name = "pobjResearchTopicEN">表实体类对象</param>
  */
  public async GetDataFromResearchTopicClass(pobjResearchTopicEN: clsResearchTopicEN) {
    this.topicId = pobjResearchTopicEN.topicId; // 主题编号
    this.topicName = pobjResearchTopicEN.topicName; // 栏目主题
    this.topicContent = pobjResearchTopicEN.topicContent; // 主题内容
    //this.topicProposePeople = pobjResearchTopicEN.topicProposePeople;// 主题提出人
    this.shareId = pobjResearchTopicEN.shareId; //
    this.orderNum = pobjResearchTopicEN.orderNum; // 序号
    //this.updDate = pobjResearchTopicEN.updDate;// 修改日期
    //this.updUser = pobjResearchTopicEN.updUser;// 修改人
    this.memo = pobjResearchTopicEN.memo; // 备注
  }

  /* 修改记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;

    //
    const objResearchTopicEN: clsResearchTopicEN = new clsResearchTopicEN();
    objResearchTopicEN.SetTopicId(this.keyId);
    await this.PutDataToResearchTopicClass(objResearchTopicEN);
    objResearchTopicEN.sfUpdFldSetStr = objResearchTopicEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objResearchTopicEN.topicId == '' || objResearchTopicEN.topicId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await ResearchTopic_UpdateRecordAsync(objResearchTopicEN);
      if (returnBool == true) {
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

  /**
   * 清除用户自定义控件中，所有控件的值
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_Clear)
   **/
  public Clear() {
    //const strThisFuncName = this.Clear.name;
    this.topicId = '';
    this.topicName = '';
    this.topicContent = '';
    //this.topicProposePeople = "";
    this.orderNum = 0;
    //this.updDate = "";
    //this.updUser = "";
    this.memo = '';
  }
  /**
   * 主题内容 (Used In Clear())
   **/
  public set topicContent(value: string) {
    const divName = this.getDivName();
    if (divName == null) return;
    SetTextAreaValueInDivObj(divName, 'txtTopicContent', value);
  }
  /**
   * 主题内容 (Used In PutDataToClass())
   **/
  public get topicContent(): string {
    const divName = this.getDivName();
    if (divName == null) return '';
    const strValue = GetTextAreaValueInDivObj(divName, 'txtTopicContent');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }
  /**
   * 备注 (Used In Clear())
   **/
  public set memo(value: string) {
    const divName = this.getDivName();
    if (divName == null) return;
    SetTextAreaValueInDivObj(divName, 'txtMemo', value);
  }
  /**
   * 备注 (Used In PutDataToClass())
   **/
  public get memo(): string {
    const divName = this.getDivName();
    if (divName == null) return '';
    const strValue = GetTextAreaValueInDivObj(divName, 'txtMemo');
    if (strValue == undefined) return '';
    else return strValue.toString();
  }

  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjResearchTopicEN">数据传输的目的类对象</param>
  */
  public async PutDataToResearchTopicClass(pobjResearchTopicEN: clsResearchTopicEN) {
    pobjResearchTopicEN.SetTopicId(this.topicId); // 主题编号
    pobjResearchTopicEN.SetTopicName(this.topicName); // 栏目主题
    pobjResearchTopicEN.SetTopicContent(this.topicContent); // 主题内容
    pobjResearchTopicEN.SetTopicProposePeople(userStore.getUserId); // 主题提出人
    if (this.orderNum == 0) {
      pobjResearchTopicEN.SetOrderNum(30); // 序号
    } else {
      pobjResearchTopicEN.SetOrderNum(this.orderNum); // 序号
    }

    pobjResearchTopicEN.SetShareId(this.shareId);

    pobjResearchTopicEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjResearchTopicEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjResearchTopicEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjResearchTopicEN.SetMemo(this.memo); // 备注
  }
}
