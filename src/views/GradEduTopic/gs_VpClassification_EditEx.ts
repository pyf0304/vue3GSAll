import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';

import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import { userStore } from '@/store/modulesShare/user';
import { gs_VpClassification_Edit } from '@/viewsBase/GradEduTopic/gs_VpClassification_Edit';
import {
  gs_VpClassification_AddNewRecordAsync,
  gs_VpClassification_CheckPropertyNew,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationWApi';
import { gs_VpClassificationStore } from '@/store/modules/gs_VpClassification';

// import $ from 'jquery';
// declare let window: any;
/* gs_VpClassification_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_VpClassification_EditEx extends gs_VpClassification_Edit {
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: gs_VpClassification_EditEx = <gs_VpClassification_EditEx>(
      gs_VpClassification_Edit.GetPageEditObj('gs_VpClassification_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_VpClassification_EditEx'初始化过，请检查！`;
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
      case 'Update': //添加记录
        objPage.btnUpdateRecord_Click(strKeyId);
        break;

      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'gs_VpClassification_EditEx.btn_Click');

        break;
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjgs_VpClassificationEN">数据传输的目的类对象</param>
  */
  public async PutDataTogs_VpClassificationClass(
    pobjgs_VpClassificationEN: clsgs_VpClassificationEN,
  ) {
    //pobjgs_VpClassificationEN.SetClassificationId(this.classificationId;// 分类Id
    pobjgs_VpClassificationEN.SetClassificationName(this.classificationName); // 分类名称
    // pobjgs_VpClassificationEN.SetTopicId(clsPrivateSessionStorage.topicIdInTree); // 主题编号
    pobjgs_VpClassificationEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjgs_VpClassificationEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjgs_VpClassificationEN.SetMemo(this.memo); // 备注
    pobjgs_VpClassificationEN.SetOrderNum(this.orderNum); // 序号
  }

  /* 函数功能:把类对象的属性内容显示到界面上
   注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
    如果在设置数据库时,就应该一级字段在前,二级字段在后
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
    <param name = "pobjgs_VpClassificationEN">表实体类对象</param>
  */
  public async GetDataFromgs_VpClassificationClass(
    pobjgs_VpClassificationEN: clsgs_VpClassificationEN,
  ) {
    //this.classificationId = pobjgs_VpClassificationEN.classificationId;// 分类Id
    this.classificationName = pobjgs_VpClassificationEN.classificationName; // 分类名称
    //this.topicId = pobjgs_VpClassificationEN.topicId;// 主题编号
    //this.updDate = pobjgs_VpClassificationEN.updDate;// 修改日期
    //this.updUser = pobjgs_VpClassificationEN.updUser;// 修改人
    this.memo = pobjgs_VpClassificationEN.memo; // 备注
    this.orderNum = pobjgs_VpClassificationEN.orderNum; // 序号
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnSubmit_Click() {
    const strCommandText: string = this.btnSubmitgs_VpClassification;
    try {
      let returnBool;
      let strInfo;
      let returnKeyId;
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          //if (this.opType == "AddWithMaxId") {
          // returnKeyId = await this.AddNewRecordWithMaxIdSave();
          // if (IsNullOrEmpty(returnKeyId) == false) {
          //   this.HideDialog_gs_VpClassification();
          //   this.iShowList.BindGv(clsgs_VpClassificationEN._CurrTabName, '');
          // }

          // }
          // else {
          returnBool = await this.AddNewRecordSave();
          if (returnBool == true) {
            this.HideDialog_gs_VpClassification();
            this.iShowList.BindGv(clsgs_VpClassificationEN._CurrTabName, '');
          }

          // }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          strInfo = returnBool ? '修改成功！' : '修改不成功！';
          strInfo += '(In gs_VpClassification_Edit.btnSubmit_Click)';
          //显示信息框
          console.log(strInfo);
          alert(strInfo);
          if (returnBool == true) {
            this.HideDialog_gs_VpClassification();
            this.iShowList.BindGv(clsgs_VpClassificationEN._CurrTabName, '');
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
  /** 函数功能:为编辑区绑定下拉框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
   **/
  public async BindDdl4EditRegionInDiv() {
    //const strThisFuncName = this.BindDdl4EditRegionInDiv.name;
    // 在此处放置用户代码以初始化页面
    // const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    // await this.SetDdl_TopicIdInDiv(strIdCurrEducls); //编辑区域
  }
  /** 修改记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnUpdateRecord_Click)
   **/
  public async btnUpdateRecord_Click(strKeyId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_gs_VpClassification(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      const lngKeyId = Number(strKeyId);
      const update = await this.UpdateRecord(lngKeyId);

      if (update == false) {
        const strMsg = Format('在修改记录时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
    } catch (e: any) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public Clear() {
    // this.classificationId = '';
    this.classificationName = '';
    // ClearSelectValueByIdInDivObj(this.divEdit, 'ddlTopicId');
    // this.updDate = '';
    // this.updUser = '';
    this.memo = '';
    this.orderNum = 0;
  }
  public async AddNewRecord() {
    const strThisFuncName = this.AddNewRecord.name;
    console.log('strThisFuncName1', strThisFuncName);
    this.Clear();
    //wucgs_VpClassificationB1.classificationId = gs_VpClassificationGetMaxStrId_S();
    try {
      // const returnString = await gs_VpClassification_GetMaxStrIdAsync();
      // if (returnString == '') {
      //   const strInfo = Format('获取表gs_VpClassification的最大关键字为空,不成功,请检查!');
      //   //显示信息框
      //   alert(strInfo);
      // } else {
      //   this.keyId = returnString;
      // }
    } catch (e: any) {
      const strMsg = Format(
        '获取表关键字的最大值不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 添加新记录,保存函数
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   **/
  public async AddNewRecordSave(): Promise<boolean> {
    const strThisFuncName = this.AddNewRecordSave.name;
    const objgs_VpClassificationEN = new clsgs_VpClassificationEN();
    try {
      const objgs_VpClassification = await gs_VpClassificationStore.getObjByName(
        this.classificationName,
      );
      if (objgs_VpClassification != null) {
      }
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }

    try {
      await this.PutDataTogs_VpClassificationClass(objgs_VpClassificationEN);
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
    } catch (e) {
      const strMsg = Format(
        '从界面获取数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
      gs_VpClassification_CheckPropertyNew(objgs_VpClassificationEN);
    } catch (e) {
      const strMsg = Format(
        '检查数据不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
    try {
      //检查唯一性条件
      const bolIsExistCond = await this.CheckUniCond4Add(objgs_VpClassificationEN);
      if (bolIsExistCond == false) {
        return false;
      }
      let returnBool = false;
      returnBool = await gs_VpClassification_AddNewRecordAsync(objgs_VpClassificationEN);
      if (returnBool == true) {
        //gs_VpClassification_ReFreshCache();
        const strInfo = Format('添加记录成功!');

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('添加记录不成功!');

        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值,否则会出错!
    } catch (e) {
      const strMsg = Format(
        '添加记录不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false; //一定要有一个返回值,否则会出错!
    }
  }
}
