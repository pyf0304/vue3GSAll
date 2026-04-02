// import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
// import { SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
// import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
// declare let strUrl_Session_SetString: string;
// // declare let strUrl_Session_GetString: string;

// // declare let strWebRoot: string;

// /// <summary>
// /// WApiCollege_UT_TS 的摘要说明。其中Q代表查询,U代表修改
// /// (AutoGCLib.WA_ViewUTScriptCS_TS4TypeScript:GeneCode)
// /// </summary>
// export class Main {
//   public static divName4LayoutHead = 'divName4LayoutHead';
//   public static DispUserInfo() {
//     //let objUserLoginInfo = clsPubSessionStorage.UserLoginInfo;
//     SetSpanHtmlInDivObj(Main.divName4LayoutHead, 'spnUserId', userStore.getUserId);
//     SetSpanHtmlInDivObj(Main.divName4LayoutHead, 'spnRoleName', userStore.getRoleName);
//     SetSpanHtmlInDivObj(
//       Main.divName4LayoutHead,
//       'spnCurrSelPrjId',
//       clsPrivateSessionStorage.currSelPrjId,
//     );
//     SetSpanHtmlInDivObj(
//       Main.divName4LayoutHead,
//       'spnCurrSelPrjName',
//       clsPrivateSessionStorage.currSelPrjName,
//     );
//     SetSpanHtmlInDivObj(
//       Main.divName4LayoutHead,
//       'spnPrjDataBaseName',
//       clsPrivateSessionStorage.prjDataBaseName,
//     );
//   }

//   /*
//      演示Session 操作
//     */
//   public static async Demo_Session() {
//     try {
//       //设置Session
//       const strUserId = 'TestUserId';
//       await this.SetSessionAsync('userId', strUserId);
//       //获取Session
//       const strUserId_Value1 = await this.GetSessionAsync('userId');
//       console.log(`strUserId_Value1:${strUserId_Value1}`);
//       //获取Session方法2:直接读取页面中的hidUserId
//       // const strUserId_Value2 = GetInputValueInDivObj(divName, 'hidUserId');
//       // console.log(`strUserId_Value2:${strUserId_Value2}`);
//     } catch (e: any) {
//       const strMsg = `演示Session不成功,${e}.`;
//       alert(strMsg);
//     }
//   }
//   /*
//      设置Session
//      <param name = "Key">关键字</param>
//      <param name = "Value">值</param>
//     */
//   public static SetSessionAsync(Key: string, Value: string): Promise<void> {
//     return new Promise(function (resolve, reject) {
//       console.log(resolve, reject);
//       $.ajax({
//         url: strUrl_Session_SetString,
//         cache: false,
//         async: false,
//         type: 'get',
//         dataType: 'json',
//         data: {
//           Key,
//           Value,
//         },
//         success(data: any) {
//           //$('#myValue').val(text);
//           const strKey = data.key;
//           const strValue = data.value;

//           //$('#myKey').html(strKey);
//           //$('#myValue').html(strValue);
//           console.log(strKey + strValue);
//         },
//       });
//     });
//   }

//   /*
//  获取Session 关键字的值
//  <param name = "Key">关键字</param>
//  <return>值</return>
// */
//   public static GetSessionAsync(Key: string): Promise<string> {
//     return new Promise(function (resolve, reject) {
//       $.ajax({
//         url: '/Session/GetString',
//         cache: false,
//         async: false,
//         type: 'get',
//         dataType: 'json',
//         data: {
//           Key,
//         },
//         success(data: any) {
//           const strValue = data.value;

//           console.log(Key + strValue);
//           resolve(data);
//         },
//         error: (e: any) => {
//           // const strErrMsg = e.responseText;
//           reject(e);
//         },
//       });
//     });
//   }
// }
