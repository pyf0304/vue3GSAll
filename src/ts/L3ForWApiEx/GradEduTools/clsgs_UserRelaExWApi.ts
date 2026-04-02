//import * as QQ from "q";
import axios from 'axios';
import { GetWebApiUrl, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';

export class clsgs_UserRelaExWApi {
  public static mstrController = 'gs_UserRelaExApi';

  /// <summary>
  /// 同步用户关系
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistRecordAsync)
  /// </summary>
  /// <param name = "strWhereCond">条件</param>
  /// <returns>是否存在记录？</returns>
  public static async SynUserRelaNumAsync(
    strIdCurrEducls: string,
    strUpdUser: string,
  ): Promise<boolean> {
    const strThisFuncName = '';
    const strAction = 'SynUserRelaNum';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    // const mapParam: Dictionary = new Dictionary();

    // let strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    try {
      const response = await axios.get(strUrl, {
        params: {
          strIdCurrEducls,
          strUpdUser,
        },
      });
      const data = response.data;
      if (data.errorId == 0) {
        return data.returnBool;
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
