/*-- -- -- -- -- -- -- -- -- -- --
类名:clsPaperWApi
表名:Paper(01120547)
生成代码版本:2020.01.02.1
生成日期:2020/01/02 16:12:20
生成者:
生成服务器IP:192.168.1.10
工程名称:问卷调查
工程ID:0112
相关数据库:tzar.tpddns.cn,19433EduHigh_Jsie
PrjDataBaseId:0122
模块中文名:研究生培养
模块英文名:GraduateEdu
框架-层名:WA_访问层(WA_Access)
编程语言:TypeScript
注意:1、需要数据底层(PubDataBase.dll)的版本:2019.03.07.01
       2、需要公共函数层(TzPubFunction.dll)的版本:2017.12.21.01
== == == == == == == == == == == == 
*/

/// <summary>
/// 论文读写表(Paper)
/// (AutoGCLib.WA_Access4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2020年01月02日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

//import * as QQ from "q";
import axios from 'axios';
import { GetWebApiUrl, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';

export class clsIndexExWApi {
  public static mstrController = 'IndexExApi';

  /// <summary>
  /// 根据条件获取相应的记录对象列表
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
  /// </summary>
  /// <param name = "strWhereCond">条件</param>
  /// <returns>返回的第一条记录的关键字值</returns>
  public static async GetAllCountAsync(strUserId: string): Promise<string> {
    const strThisFuncName = 'GetAllCountAsync';
    const strAction = 'GetAllCount';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    //strIdCurrEduclsmapParam: Dictionary = new Dictionary();
    //mapParam.add("strUserId", strUserId);
    //let strData = mapParam.getParamText();// "例如: strIdentityID =01";
    try {
      const response = await axios.get(strUrl, {
        params: { strUserId },
      });
      const data = response.data;
      if (data.errorId == 0) {
        const returnStr = data.returnStr;
        if (returnStr == null) {
          const strNullInfo = Format(
            '获取数据为null, 请注意!(in {0}.{1})',
            this.mstrController,
            strThisFuncName,
          );
          console.error(strNullInfo);
          throw strNullInfo;
        }
        //console.log(returnObjLst);
        //const arrObjLst = returnStr;
        return returnStr;
      } else {
        console.error(data.errorMsg);
        throw data.errorMsg;
      }
    } catch (error: any) {
      console.error(error);
      if (error.statusText == undefined) {
        throw error;
      }
      if (error.statusText == 'error') {
        const strInfo = Format(
          '网络错误！访问地址:{0}不成功！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else if (error.statusText == 'Not Found') {
        const strInfo = Format(
          '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
          strUrl,
          this.mstrController,
          strThisFuncName,
        );
        console.error(strInfo);
        throw strInfo;
      } else {
        throw error.statusText;
      }
    }
  }

}
