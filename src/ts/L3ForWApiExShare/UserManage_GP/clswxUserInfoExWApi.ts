import { GetWebApiUrl } from '../../PubConfig/clsSysPara4WebApi';
import { Dictionary } from '../../PubFun/tzDictionary';

// strIdCurrEduclsReCallFunc = null;
export class clswxUserInfoExWApi {
  public static mstrController = 'wxUserInfoExApi';
  public Param;
  public NameSpace = 'http://tempuri.org/';
  public MethodName = '';
  public WEB_SERVICE_URL = '';
  public soapAction = '';

  constructor(strMethod: string, mapParam: any) {
    this.Param = new Dictionary();
    // ReCallFunc = pReCallFunc;
    this.MethodName = strMethod;
    this.Param = mapParam;
    if (this.Param.length() === 0) {
      this.Param = new Dictionary();
    }
  }

  /// <summary>
  /// 获取微信信息
  /// (AGC.BusinessLogicEx.clsFunction4CodeBLEx:GeneCode)
  //   /// </summary>
  //   /// <returns>获取的相应对象列表</returns>
  public static GetwxUserInfoAsync(strcode: string): Promise<string> {
    const strAction = 'GetwxUserInfo';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('strcode', strcode);
    const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'Get',
        dataType: 'json',
        data: strData,
        success(data) {
          resolve(data);
        },
        error: (e: any) => {
          console.error(e);
          //   strIdCurrEduclsstrErrMsg = decodeURIComponent(e.responseText);
          reject(e);
        },
      });
    });
  }
}
