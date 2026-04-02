//import * as QQ from "q";
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsSubViewpointTypeEN } from '@/ts/L0Entity/RT_Params/clsSubViewpointTypeEN';

export class clsSubViewpointTypeWApiEx {
  public static mstrController = 'SubViewpointTypeExApi';
  public objSubViewpointTypeEN: clsSubViewpointTypeEN = new clsSubViewpointTypeEN();
  constructor(pobjSubViewpointTypeEN: clsSubViewpointTypeEN) {
    this.objSubViewpointTypeEN = pobjSubViewpointTypeEN;
  }

  /// <summary>
  /// 调用WebApi来添加记录，数据传递使用JSON串
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
  /// </summary>
  /// <param name = "objSubViewpointTypeEN">需要添加的对象</param>
  /// <returns>获取相应的记录的对象</returns>
  public static AddNewRecordAsyncEx(
    objSubViewpointTypeEN: clsSubViewpointTypeEN,
  ): Promise<boolean> {
    const strAction = 'AddNewRecordEx';
    //if (objSubViewpointTypeEN.subViewpointTypeId === null || objSubViewpointTypeEN.subViewpointTypeId === "") {
    //    strMsg = "需要的对象的关键字为空，不能添加!";
    //    throw strMsg;
    //}
    //strIdCurrEduclsstrJSON = JSON.stringify(objSubViewpointTypeEN_Sim);
    const strUrl = this.GetWebApiUrl(this.mstrController, strAction);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'POST',
        dataType: 'json',
        data: objSubViewpointTypeEN,
        success(data) {
          resolve(data);
        },
        error: (e:any) => {
          console.error(e);

          reject(e);
        },
      });
    });
  }

  /// <summary>
  /// 获取WebApi的地址
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetWebApiUrl)
  /// </summary>
  /// <returns>返回当前文件中Web服务的地址</returns>
  public static GetWebApiUrl(strController: string, strAction: string): string {
    let strServiceUrl: string;
    if (clsSysPara4WebApi.bolIsLocalHost == false) {
      strServiceUrl = `${clsSysPara4WebApi.CurrIPAddressAndPort}/${clsSysPara4WebApi.CurrPrx3}/${strController}/${strAction}`;
    } else {
      strServiceUrl = `${clsSysPara4WebApi.CurrIPAddressAndPort_Local}/${clsSysPara4WebApi.CurrPrx3}/${strController}/${strAction}`;
    }
    return strServiceUrl;
  }
}
