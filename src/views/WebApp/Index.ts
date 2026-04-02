import $ from 'jquery';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

//declare strIdCurrEduclsstrcourseID_Hid;

declare let strUrl_Session_SetString: string;
declare let window: any;
/* WApiUsers_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Index {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortUsersBy: string = "userId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public static async PageLoad() {
    // 在此处放置用户代码以初始化页面

    const strUserId_Hid = userStore.getUserId;
    // strIdCurrEduclsstrcourseID_Hid = $("#hidCourseID").val();

    try {
      if (strUserId_Hid != '') {
        ////把课程ID存入session
      } else {
        window.location.href = '/GraduateStudyWebApp/WebApp/Login';
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*
     设置Session    
     <param name = "Key">关键字</param>
     <param name = "Value">值</param>
    */
  public static SetSessionAsync(Key: string, Value: string): Promise<void> {
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
  public static GetSessionAsync(Key: string): Promise<string> {
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
}
