import { Ref } from 'vue';
import $ from 'jquery';
import { stuUserLoginInfo } from '@/ts/FunClass/stuUserLoginInfo';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsFeedBackEN } from '@/ts/L0Entity/NewsAnn/clsFeedBackEN';
import { FeedBack_AddNewRecordAsync } from '@/ts/L3ForWApi/NewsAnn/clsFeedBackWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { GetInputValueInDivObj, SetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format } from '@/ts/PubFun/clsString';
import { userStore } from '@/store/modulesShare/user';

declare let strUrl_Session_SetString: string;
declare let window: any;
/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class User {
  public static EditRef: Ref<any>;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public async PageLoad() {
    const divName = this.getDivName();
    if (divName == null) return;
    // 在此处放置用户代码以初始化页面

    try {
      const strUserInfo_Hid = GetInputValueInDivObj(divName, 'hidUserInfo');

      const objvUserRoleRelation = stuUserLoginInfo.GetObjByHtmlString2(strUserInfo_Hid);
      $('#lnkUserName').html(`${userStore.getUserName}(${userStore.getRoleName})`);
      //$('#PrjName').html('当前工程：' + objvUserRoleRelation.PrjName);
      $('#hidUserId').val(objvUserRoleRelation.userId);
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnOKUpd_Click() {
    const strCommandText: string = this.btnOKUpd;
    try {
      //这是一个单表的插入的代码,由于逻辑层太简单,
      //就把逻辑层合并到控制层,
      await this.AddNewRecordSave().then((jsonData) => {
        const returnBool: boolean = jsonData;
        if (returnBool == true) {
          //HideDialog();
          //this.BindGv_FeedBack();
          window.location.href = '#pageone';
        }
      });
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  /* 添加新记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
  */
  public async AddNewRecordSave() {
    //this.DivName = "divAddNewRecordSave";
    const objFeedBackEN: clsFeedBackEN = new clsFeedBackEN();
    this.PutDataToFeedBackClass(objFeedBackEN);
    try {
      const responseText2 = await FeedBack_AddNewRecordAsync(objFeedBackEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `提交成功，您的反馈我们会尽快查阅处理!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `提交不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `提交记录不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjFeedBackEN">数据传输的目的类对象</param>
   */
  public PutDataToFeedBackClass(pobjFeedBackEN: clsFeedBackEN) {
    pobjFeedBackEN.SetNickName(this.nickName); // 接收者称谓
    pobjFeedBackEN.SetEmail(this.EMail); // EMail
    pobjFeedBackEN.SetFeedBackNumber(this.getNowDateNunber());
    pobjFeedBackEN.SetTelephone(this.telephone); // telephone
    pobjFeedBackEN.SetFeedBackContent(this.feedBackContent); // feedBackContent
    pobjFeedBackEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjFeedBackEN.SetUpdUser(userStore.getUserId); // 修改人
  }

  /*
     设置Session    
     <param name = "Key">关键字</param>
     <param name = "Value">值</param>
    */
  public SetSessionAsync(Key: string, Value: string): Promise<void> {
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: strUrl_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data) {
          //$('#myValue').val(text);
          const strKey = data.key;
          const strValue = data.value;

          //$('#myKey').html(strKey);
          //$('#myValue').html(strValue);
          console.log(strKey + strValue);
        },
      });
    });
  }

  /*
获取Session 关键字的值
<param name = "Key">关键字</param>
<return>值</return>
*/
  public GetSessionAsync(Key: string): Promise<string> {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: '/Session/GetString',
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
        },
        success(data) {
          const strValue = data.value;

          console.log(Key + strValue);
          resolve(data);
        },
        error: (e: any) => {
          // const strErrMsg = decodeURIComponent(e.responseText);
          reject(e);
        },
      });
    });
  }

  /*
   * 获取年月日
   */
  public getNowDate(): string {
    const date = new Date();
    let month: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();
    if (month <= 9) {
      month = `0${month}`;
    }
    if (strDate <= 9) {
      strDate = `0${strDate}`;
    }

    return `${date
      .getFullYear()
      .toString()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
  /*
   * 获取年月日数据串
   */
  public getNowDateNunber(): string {
    const date = new Date();
    let month: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();
    if (month <= 9) {
      month = `0${month}`;
    }
    if (strDate <= 9) {
      strDate = `0${strDate}`;
    }

    return (
      date.getFullYear().toString() +
      month +
      strDate +
      date.getHours() +
      date.getMinutes() +
      date.getSeconds()
    );
  }

  /*
   * 设置确定按钮的标题
   */
  public set btnOKUpd(value: string) {
    $('#btnOKUpd').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnOKUpd(): string {
    return $('#btnOKUpd').html();
  }
  /*
   * EMail
   */
  public set EMail(value: string) {
    const divName = this.getDivName();
    if (divName == null) return;
    SetInputValueInDivObj(divName, 'txtEMail', value);
  }
  /*
   * EMail
   */
  public get EMail(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtEMail');
  }
  /*
   * feedBackContent
   */
  public set feedBackContent(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtFeedBackContent', value);
  }
  /*
   * feedBackContent
   */
  public get feedBackContent(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtFeedBackContent');
  }

  /*
   * 接收者称谓
   */
  public set nickName(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtNickName', value);
  }
  /*
   * 接收者称谓
   */
  public get nickName(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtNickName');
  }

  /*
   * telephone
   */
  public set telephone(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtTelephone', value);
  }
  /*
   * telephone
   */
  public get telephone(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtTelephone');
  }

  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    User.divEdit = User.EditObj.$refs.refDivEdit;
    if (User.divEdit == null) {
      if (User.times4TestShowDialog < 2) {
        User.times4TestShowDialog++;
        setTimeout(() => {
          this.getDivName();
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
      return null;
    } else {
      User.times4TestShowDialog = 0;
    }
    return User.divEdit;
  }
}
