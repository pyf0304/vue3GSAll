import { Ref } from 'vue';
import $ from 'jquery';
import { clswxUserInfoExWApi } from '@/ts/L3ForWApiExShare/UserManage_GP/clswxUserInfoExWApi';

import { Format } from '@/ts/PubFun/clsString';
import { GetInputValueInDivObj, SetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
import {
  QxUsers_GetFirstObjAsync,
  QxUsers_UpdateRecordAsync,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi';

declare let strUrl_Session_SetString: string;
declare let window: any;
/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class wxUserInfo {
  public static EditObj: any;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public async PageLoad() {
    const divName = this.getDivName();
    if (divName == null) return;
    const strcode_Hid = GetInputValueInDivObj(divName, 'hidcode');

    try {
      if (strcode_Hid != '') {
        await clswxUserInfoExWApi.GetwxUserInfoAsync(strcode_Hid).then((jsonData) => {
          if (jsonData != null) {
            const strJson = eval(`[${jsonData}]`);

            this.openId = strJson[0].openid;
            this.nickName = strJson[0].nickname;
            //$('#imgheadimgUrl').str(strJson[0].headimgurl);
            $('#imgheadimgUrl').attr('src', strJson[0].headimgurl);
            $('#hidheadimgUrl').val(strJson[0].headimgurl);

            //for (let i = 0; i < strJson.length; i++) {}
          } else {
            window.location.href = '/GraduateStudyWebApp/WebApp/Login';
          }
        });

        if (this.openId != '') {
          const strWhereCond = `openId = '${this.openId}'`;

          const objUsers = await QxUsers_GetFirstObjAsync(strWhereCond);
          if (objUsers != null) {
            this.SetSessionAsync('userId', objUsers.userId);
            //window.location.href = "/GraduateStudyWebApp/CourseLearning/cc_CourseList";
            window.location.href = '/GraduateStudyWebApp/WebApp/Login';
          } else {
            window.location.href = '#pagetwo';
          }
        } else {
          const strMsg = `解析json数据不成功`;
          alert(strMsg);
        }
      } else {
        window.location.href = '/GraduateStudyWebApp/WebApp/Login';
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    //this.openId = "ofgZ8wfivfnjdEfvmRZ5TEQJvqrQ";
    //this.nickName = "没有昵称";
    ////$('#imgheadimgUrl').str(strJson[0].headimgurl);
    //$("#imgheadimgUrl").attr("src", "http:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/DYAIOgq83eqp5d9DJEhOxU1Hdt21C8Mdomq3dYBxWicFANV3uibWlADibYuTSWQZ6p6icjQibjh6Ao7yEvNAe967VicA\/132");
    //$('#hidheadimgUrl').val("http:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/DYAIOgq83eqp5d9DJEhOxU1Hdt21C8Mdomq3dYBxWicFANV3uibWlADibYuTSWQZ6p6icjQibjh6Ao7yEvNAe967VicA\/132");
    //window.location.href = "#pagetwo";
  }

  public async btnBind_Click() {
    let strWhereCond = '';
    try {
      if (this.userId != '') {
        strWhereCond += ` ${clsQxUsersEN.con_UserId} = '${this.userId}'`;
        if (this.password != '') {
          strWhereCond += ` And ${clsQxUsersEN.con_Password} = '${this.password}'`;
          const objUsers = await QxUsers_GetFirstObjAsync(strWhereCond);

          if (objUsers != null) {
            this.SetSessionAsync('userId', this.userId);

            //this.UpdateRecordSave();
            this.UpdateRecordSave();
          } else {
            alert('用户名或密码错误！');
          }
        } else {
          alert('请输入密码！');
        }
      } else {
        alert('请输入用户名！');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 修改记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   */
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;

    const objUsersEN: clsQxUsersEN = new clsQxUsersEN();

    objUsersEN.SetUserId(this.userId);
    objUsersEN.SetOpenId(this.openId);
    // objUsersEN.SetNickName(this.nickName);
    // objUsersEN.SetHeadimgUrl(this.headimgUrl);
    objUsersEN.SetMemo(`微信绑定${this.openId}`);

    objUsersEN.sfUpdFldSetStr = objUsersEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objUsersEN.userId == '' || objUsersEN.userId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await QxUsers_UpdateRecordAsync(objUsersEN);
      if (returnBool == true) {
        const strInfo = `微信绑定成功!`;
        //显示信息框
        alert(strInfo);
        //window.location.href = "/GraduateStudyWebApp/CourseLearning/cc_CourseList";
        window.location.href = '/GraduateStudyWebApp/WebApp/Login';
      } else {
        const strInfo = `绑定不成功!`;
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

  /*
   * 登录用户名
   */
  public set userId(value: string) {
    const divName = this.getDivName();
    if (divName == null) return;
    SetInputValueInDivObj(divName, 'txtUserId', value);
  }
  /*
   * 登录用户名
   */
  public get userId(): string {
    const divName = this.getDivName();

    return GetInputValueInDivObj(divName, 'txtUserId');
  }

  /*
   * 密码
   */
  public set password(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtPassword', value);
  }
  /*
   * 密码
   */
  public get password(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtPassword');
  }

  /*
   * 微信id
   */
  public set openId(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidOpenId', value);
  }
  /*
   * 微信id
   */
  public get openId(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'hidOpenId');
  }

  /*
   * 昵称
   */
  public set nickName(value: string) {
    $('#lbNickName').html(value);
  }
  /*
   * 昵称
   */
  public get nickName(): string {
    return $('#lbNickName').html();
  }

  /*
   * 头像
   */
  public set headimgUrl(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidheadimgUrl', value);
  }
  /*
   * 头像
   */
  public get headimgUrl(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'hidheadimgUrl');
  }
  /*
    设置Session
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetSessionAsync)
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
          const strKey = data.key;
          const strValue = data.value;
          console.log(`strKey, strValue=${strKey}${strValue}`);
        },
      });
    });
  }
  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    wxUserInfo.divEdit = wxUserInfo.EditObj.$refs.refDivEdit;
    if (wxUserInfo.divEdit == null) {
      if (wxUserInfo.times4TestShowDialog < 2) {
        wxUserInfo.times4TestShowDialog++;
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
      wxUserInfo.times4TestShowDialog = 0;
    }
    return wxUserInfo.divEdit;
  }
}
