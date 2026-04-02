// import { stuLoginPara } from '@/ts/PubFun/stuLoginPara';
// import { Login_UserLoginAsync } from '@/ts/L3ForWApiExShare/UserManage_GP/LoginWApi';
// import { System_Login } from '@/ts/L3ForWApiExShare/UserManage_GP/SystemLoginExWApi';
// import {
//   GetInputValueInDivObj,
//   GetUniDivInDoc,
//   SetSpanHtmlInDivObj,
// } from '@/ts/PubFun/clsCommFunc4Ctrl';
// import { Redirect } from '@/ts/PubFun/clsCommFunc4Web';
// import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
// /// <summary>
// /// WApiCollege_UT_TS 的摘要说明。其中Q代表查询,U代表修改
// /// (AutoGCLib.WA_ViewUTScriptCS_TS4TypeScript:GeneCode)
// /// </summary>
// export class Login {
//   public static divLogin = GetUniDivInDoc('divName4Login');
//   /// <summary>
//   /// 根据关键字列表获取相应的记录对象的列表
//   /// (AutoGCLib.WA_ViewUTScriptCS_TS4TypeScript:Gen_WApi_Ts_btnClickGetObjLstByKeyLst)
//   /// </summary>
//   /// <param name = "sender">事件发送者</param>
//   /// <returns></returns>
//   public static async btnLogin_Click() {
//     const strUserId: string = GetInputValueInDivObj(Login.divLogin, 'txtUserId');
//     const strPassword: string = GetInputValueInDivObj(Login.divLogin, 'txtPassword');
//     await System_Login(strUserId, strPassword);

//     const objLoginPara: stuLoginPara = {
//       loginName: strUserId,
//       userPassword: strPassword,
//       qxPrjId: '',
//       effectiveDate: '',
//     };
//     try {
//       const returnBool = await Login_UserLoginAsync(objLoginPara);
//       if (returnBool == false) {
//         const strInfo = `用户:[${strUserId}] 登录不成功!`;
//         SetSpanHtmlInDivObj(this.divLogin, 'lblResult', strInfo);
//         //显示信息框
//         alert(strInfo);
//       } else {
//         // const strInfo = `用户:[${strUserId}]登录成功!`;
//         //SetSpanHtmlInDivObj(this.divName4Login, 'lblResult1', strInfo);
//         userStore.getUserId = strUserId;
//         Redirect('/AuthorityManage/SelectProject');
//       }
//     } catch (e: any) {
//       const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
//       alert(strMsg);
//     }
//   }
// }
