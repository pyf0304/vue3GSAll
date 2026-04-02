// import { QxUsersCRUD } from '@/viewsBase/BaseInfo/QxUsersCRUD';

import { QxUsersCRUD } from '@/viewsBase/BaseInfo/QxUsersCRUD';

declare let window: any;
/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class LoginmainEx extends QxUsersCRUD {
  //登录方法
  public async btnQuery_Click() {
    try {
      //跳转获取微信地址;
      window.location.href =
        'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc3a28c4bb53ddbbb&redirect_uri=https://www.sh-tz.com/GraduateStudyWebApp/WebApp/wxUserInfo&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';
    } catch (e:any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `登录失败,${e}.`;
      alert(strMsg);
    }
  }
}
