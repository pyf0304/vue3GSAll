/**
 * 类名:clsPlatDefaRoleExWApi
 * 表名:PlatDefaRole(01120231)
 * 生成代码版本:2021.09.17.1
 * 生成日期:2021/09/20 16:16:37
 * 生成者:pyf
 * 生成服务器IP:103.116.76.183
 * 工程名称:问卷调查
 * 工程ID:0112
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:系统参数
 * 模块英文名:SysPara
 * 框架-层名:WA_访问扩展层(WA_AccessEx)
 * 编程语言:TypeScript
 * 注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
 *      2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
 **/

/**
 * 平台默认角色(PlatDefaRole)
 * (AutoGCLib.WA_AccessEx4TypeScript:GeneCode)
 * Created by pyf on 2021年09月20日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 **/
//import $ from "jquery";
import { clsSysPara4WebApi } from '../../PubConfig/clsSysPara4WebApi';

import { Format } from '../../PubFun/clsString';
import { PlatDefaRole_CopyObjTo } from '@/ts/L3ForWApi/SysPara/clsPlatDefaRoleWApi';
import { clsPlatDefaRoleENEx } from '@/ts/L0Entity/SysPara/clsPlatDefaRoleENEx';
import { clsPlatDefaRoleEN } from '@/ts/L0Entity/SysPara/clsPlatDefaRoleEN';
export class clsPlatDefaRoleExWApi {
  public static mstrController = 'PlatDefaRoleExApi';
  public objPlatDefaRoleEN = new clsPlatDefaRoleEN();

  /**
   * 获取WebApi的地址
   * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_GetWebApiUrl)
   * @returns 返回当前文件中Web服务的地址
   **/
  public static GetWebApiUrl(strController: string, strAction: string): string {
    let strServiceUrl: string;
    if (clsSysPara4WebApi.bolIsLocalHost == false) {
      strServiceUrl = Format(
        '{0}/{1}/{2}/{3}',
        clsSysPara4WebApi.CurrIPAddressAndPort,
        clsSysPara4WebApi.CurrPrx,
        strController,
        strAction,
      );
    } else {
      strServiceUrl = Format(
        '{0}/{1}/{2}/{3}',
        clsSysPara4WebApi.CurrIPAddressAndPort_Local,
        clsSysPara4WebApi.CurrPrx,
        strController,
        strAction,
      );
    }
    return strServiceUrl;
  }

  /**
   * 把同一个类的对象,复制到另一个对象
   * (AutoGCLib.WA_AccessEx4TypeScript:Gen_4WAEx_Ts_CopyToEx)
   * @param objPlatDefaRoleENS:源对象
   * @returns 目标对象=>clsPlatDefaRoleEN:objPlatDefaRoleENT
   **/
  public static CopyToEx(objPlatDefaRoleENS: clsPlatDefaRoleEN): clsPlatDefaRoleENEx {
    const objPlatDefaRoleENT = new clsPlatDefaRoleENEx();
    try {
      PlatDefaRole_CopyObjTo(objPlatDefaRoleENS, objPlatDefaRoleENT);
      return objPlatDefaRoleENT;
    } catch (e:any) {
      const strMsg = Format('(errid:Watl000066)Copy表对象数据出错,{0}.', e);
      console.error(strMsg);
      alert(strMsg);
      return objPlatDefaRoleENT;
    }
  }
}
