/// (AutoGCLib.WA_Access4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2019年12月25日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

import axios from 'axios';
//import * as QQ from "q";
import { GetWebApiUrl, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';

export class clsPaperWApiEx {
  public static mstrController = 'PaperExApi';
  public objPaperEN: clsPaperEN = new clsPaperEN();
  constructor(pobjPaperEN: clsPaperEN) {
    this.objPaperEN = pobjPaperEN;
  }

  /// <summary>
  /// 调用WebApi来添加记录，数据传递使用JSON串
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_AddNewRecordAsync)
  /// </summary>
  /// <param name = "objPaperEN">需要添加的对象</param>
  /// <returns>获取相应的记录的对象</returns>
  public static AddNewRecordAsyncEx(objPaperEN: clsPaperEN): Promise<boolean> {
    // const strMsg = '';
    const strAction = 'AddNewRecordEx';
    //strIdCurrEduclsstrJSON = JSON.stringify(objPaperEN_Sim);
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'POST',
        dataType: 'json',
        data: objPaperEN,
        success(data) {
          resolve(data);
        },
        error: (e:any) => {
          console.error(e);
          //   const strErrMsg = decodeURIComponent(e.responseText);
          reject(e);
        },
      });
    });
  }

  /// <summary>
  /// 同步核算
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
  /// </summary>
  /// <param name = "strWhereCond">条件</param>
  /// <returns>返回的第一条记录的关键字值</returns>
  public static async SynPaperStatisticsAsync(TeaUserId: string): Promise<boolean> {
    const strThisFuncName = '';
    const strAction = 'SynPaperStatistics';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);

    try {
      const response = await axios.get(strUrl, {
        params: { updUser: TeaUserId },
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
