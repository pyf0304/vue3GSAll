/// (AutoGCLib.WA_Access4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2019年12月25日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

//import * as QQ from "q";
import axios from 'axios';
import { clsgs_RTqa_PaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsgs_RTqa_PaperRelaEN';
import { GetWebApiUrl, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Dictionary } from '@/ts/PubFun/tzDictionary';
import { Format } from '@/ts/PubFun/clsString';

export class clsgs_RTqa_PaperRelaExWApi {
  public static mstrController = 'gs_RTqa_PaperRelaExApi';
  public objgs_RTqa_PaperRelaEN: clsgs_RTqa_PaperRelaEN = new clsgs_RTqa_PaperRelaEN();
  constructor(pobjgs_RTqa_PaperRelaEN: clsgs_RTqa_PaperRelaEN) {
    this.objgs_RTqa_PaperRelaEN = pobjgs_RTqa_PaperRelaEN;
  }

  /// <summary>
  /// 同步核算
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetFirstIdAsync)
  /// </summary>
  /// <param name = "strWhereCond">条件</param>
  /// <returns>返回的第一条记录的关键字值</returns>
  public static async SynTopicPaperQAAsync(
    strIdCurrEducls: string,
    strTopicId: string,
    strUpdUser: string,
  ): Promise<boolean> {
    const strThisFuncName = '';
    const strAction = 'SynTopicPaperQA';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('strIdCurrEducls', strIdCurrEducls);
    mapParam.add('strTopicId', strTopicId);
    mapParam.add('strUpdUser', strUpdUser);
    // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    try {
      const response = await axios.get(strUrl, {
        params: {
          strIdCurrEducls,
          strTopicId,
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
