/*
 * 功能:用于WebApi的参数定义
 * 版本:2019-07-24-01
 * 作者:潘以锋
 * */

import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

export class clsSysPara4WebApi {
  public static bolIsLocalHost = false; //true,,,false
  public static bolIsLocalHost_GP = false; //true,,,false

  //const CurrIPAddressAndPort = "http://Localhost:2408";
  //    public static CurrIPAddressAndPort:string = getHostAddressweb();// "http://Localhost:2408";

  public static CurrPrx = 'ExamLibWAVue';
  //  public static CurrPrx = 'ExamLibWA';
  // public static CurrPrx = '';

  public static CurrPrx_GP = 'GpWAJsie';
  // public static CurrPrx_GP = '';

  public static CurrPrx2 = 'ExamLibApi/Api';
  public static CurrPrx3 = 'ExamLibApi/Api';
  //本地图片
  public static CurrPrx_Local = 'gsall';
  public static spVirtualDirectory = '/gsall/';
  //public static CurrPrx: string = VirtualRootPath + "/WebApi";
  //public static CurrPrx = "";
  // http://localhost:28523/ExamLibWA
  //192.168.1.15
  //public static CurrIPAddressAndPort = "http://192.168.1.15";// getHostAddressweb();// "http://Localhost:2408";
  //public static CurrIPAddressAndPort_GP = "http://192.168.1.15";// getHostAddressweb();// "http://Localhost:2408";
  //public static CurrIPAddressAndPort_Local_GP = "http://192.168.1.15";// getHostAddressweb();// "http://Localhost:2408";

  //tzar.tpddns.net:5080
  //public static CurrIPAddressAndPort = "http://tzar.tpddns.cn:5080";// getHostAddressweb();// "http://Localhost:2408";
  //public static CurrIPAddressAndPort_GP: string = "http://tzar.tpddns.cn:5080";// getHostAddressweb();// "http://Localhost:2408";
  //public static CurrIPAddressAndPort_Local_GP = "http://tzar.tpddns.cn:5080";// getHostAddressweb();// "http://Localhost:2408";

  //www.sh-tz.com
  public static CurrIPAddressAndPort = 'https://www.sh-tz.com'; // getHostAddressweb();// "http://Localhost:2408";
  public static CurrIPAddressAndPort_GP = 'https://www.sh-tz.com'; // getHostAddressweb();// "http://Localhost:2408";
  public static CurrIPAddressAndPort_GPBak = 'http://103.116.76.183:8080'; // getHostAddressweb();// "http://Localhost:2408";

  //  public static CurrIPAddressAndPort_Local_GP = 'https://www.sh-tz.com'; // getHostAddressweb();// "http://Localhost:2408";
  public static CurrIPAddressAndPort_Local_GP = 'http://192.168.1.15:7111'; // getHostAddressweb();// "http://Localhost:2408";

  //localhost
  //    public static CurrIPAddressAndPort_Local: string = "http://localhost:39541";// getHostAddressweb();// "http://Localhost:2408";
  //  public static CurrIPAddressAndPort_Local = 'http://localhost:28524'; // getHostAddressweb();// "http://Localhost:2408";
  public static CurrIPAddressAndPort_Local = 'http://192.168.1.15:7110'; // getHostAddressweb();// "http://Localhost:2408";

  //public static CurrIPAddressAndPort_Local_GP: string = "http://localhost:49540";// getHostAddressweb();// "http://Localhost:2408";

  //public static CurrPrx: string = VirtualRootPath + "/WebApi";
  public static Url_Session_SetString = '';

  public static spSetRefreshCacheOn = true;
  // public static menuSetId_BackGroung = '0017';
  public static cmPrjId = '000012';

  public static currSelPrjId = '0062';
  //"http://localhost:2408/ExamLib/WebService/MyTest1Service.asmx";
  public static spUploadWebMainDir_Local = 'E:/Vue3Prj/vue3GSAll/public';
  public static spUploadWebMainDir = 'E:/VueApp/gsall/';

  public static spUploadWebSubDir_Paper = 'PaperUploadFile';
  public static spUploadWebSubDir_PaperSubRes = 'PaperSubRes';
  public static spUploadWebSubDir_ReadTraining = 'ReadTraining';
  public static spUploadWebSubDir_UserCanvasPic = 'UserCanvasPic';
  public static spUploadWebSubDir_PaperSubViewpoint = 'PaperSubUploadFile';
  public static spUploadWebSubDir_ReadTrainingSubViewpoint = 'ReadTrainingSubImg';
  public static spIsAutoAudit4Register = true;
  public static spDefaIdCurrEduCls = '00000000';
  public static spIdSchool = '0002';
  /**
   * 获取WebApi的地址
   * (AutoGCLib.WAAccess4TypeScript:Gen4WATsGetWebApiUrl)
   * @returns 返回当前文件中Web服务的地址
   */
}

export function GetAddressAndPort(): string {
  //   const strThisFuncName = 'GetWebApiUrl';
  const currHostname = window.location.hostname;
  const currPort = window.location.port;
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = `${currHostname}:${currPort}`;
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = `https://${currHostname}:${currPort}`;
  } else {
    strCurrIPAddressAndPort = `http://${currHostname}:${currPort}`;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.spVirtualDirectory) == true) {
    strServiceUrl = Format('{0}', strCurrIPAddressAndPort);
  } else {
    strServiceUrl = Format('{0}{1}', strCurrIPAddressAndPort, clsSysPara4WebApi.spVirtualDirectory);
  }
  return strServiceUrl;
}

export function GetWebApiUrl(strController: string, strAction: string): string {
  //   const strThisFuncName = 'GetWebApiUrl';

  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx,
      strController,
      strAction,
    );
  }
  return strServiceUrl;
}
export function GetWebApiUrl_GP(strController: string, strAction: string): string {
  let strServiceUrl: string;
  let strCurrIPAddressAndPort = '';
  if (clsSysPara4WebApi.bolIsLocalHost_GP == false) {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_GP;
  } else {
    strCurrIPAddressAndPort = clsSysPara4WebApi.CurrIPAddressAndPort_Local_GP;
  }
  if (IsNullOrEmpty(clsSysPara4WebApi.CurrPrx_GP) == true) {
    strServiceUrl = Format('{0}/{1}/{2}', strCurrIPAddressAndPort, strController, strAction);
  } else {
    strServiceUrl = Format(
      '{0}/{1}/{2}/{3}',
      strCurrIPAddressAndPort,
      clsSysPara4WebApi.CurrPrx_GP,
      strController,
      strAction,
    );
  }

  return strServiceUrl;
}
/// <summary>
/// 获取WebApi的地址
/// (AutoGCLib.WAAccess4TypeScript:Gen4WATsGetWebApiUrl)
/// </summary>
/// <returns>返回当前文件中Web服务的地址</returns>
export function LoginGetWebApiUrl(strController: string, strAction: string): string {
  let strServiceUrl: string;
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strServiceUrl = `${clsSysPara4WebApi.CurrIPAddressAndPort_GP}/${clsSysPara4WebApi.CurrPrx_GP}/${strController}/${strAction}`;
  } else {
    strServiceUrl = `${clsSysPara4WebApi.CurrIPAddressAndPort_Local_GP}/${clsSysPara4WebApi.CurrPrx_GP}/${strController}/${strAction}`;
  }
  return strServiceUrl;
}
export function LoginGetWebApiUrlVue(strController: string, strAction: string): string {
  let strServiceUrl: string;
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strServiceUrl = `/${clsSysPara4WebApi.CurrPrx_GP}/${strController}/${strAction}`;
  } else {
    strServiceUrl = `/${clsSysPara4WebApi.CurrPrx_GP}/${strController}/${strAction}`;
  }
  return strServiceUrl;
}
