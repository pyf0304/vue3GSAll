/// (AutoGCLib.WA_Access4TypeScript:GeneCode)
/// </summary>
/**
 * Created by  on 2019年12月25日.
 * 注意:该类必须与调用界面处于同一个包，否则调用不成功!
 */

//import * as QQ from "q";
import axios from 'axios';

import { gs_ResearchResult_GetObjLstByJSONObjLst } from '@/ts/L3ForWApi/GradEduTopic/clsgs_ResearchResultWApi';
import { clsgs_ResearchResultEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ResearchResultEN';
import { GetWebApiUrl, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Format } from '@/ts/PubFun/clsString';
import { Dictionary } from '@/ts/PubFun/tzDictionary';

export class clsgs_ResearchResultExWApi {
  public static mstrController = 'gs_ResearchResultExApi';
  public objgs_ResearchResultEN: clsgs_ResearchResultEN = new clsgs_ResearchResultEN();
  constructor(pobjgs_ResearchResultEN: clsgs_ResearchResultEN) {
    this.objgs_ResearchResultEN = pobjgs_ResearchResultEN;
  }

  /// <summary>
  /// 获取会议年数量
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
  /// </summary>
  /// <param name = "strWhereCond">条件</param>
  /// <returns>获取的相应对象列表</returns>
  public static async GetResultYearNumObjLstAsync(
    strWhereCond: string,
  ): Promise<Array<clsgs_ResearchResultEN>> {
    const strThisFuncName = 'GetResultYearNumObjLstAsync';
    const strAction = 'GetResultYearNumObjLst';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('strWhereCond', strWhereCond);
    // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    try {
      const response = await axios.get(strUrl, {
        params: { strWhereCond },
      });
      const data = response.data;
      if (data.errorId == 0) {
        const returnObjLst = data.returnObjLst;
        if (returnObjLst == null) {
          const strNullInfo = Format(
            '获取数据为null, 请注意!(in {0}.{1})',
            this.mstrController,
            strThisFuncName,
          );
          console.error(strNullInfo);
          throw strNullInfo;
        }
        //console.log(returnObjLst);
        const arrObjLst = gs_ResearchResult_GetObjLstByJSONObjLst(returnObjLst);
        return arrObjLst;
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

  /// <summary>
  /// 获取会议月份数量
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
  /// </summary>
  /// <param name = "strWhereCond">条件</param>
  /// <returns>获取的相应对象列表</returns>
  public static async GetResultMonthNumObjLstAsync(
    strWhereCond: string,
  ): Promise<Array<clsgs_ResearchResultEN>> {
    const strThisFuncName = 'GetResultMonthNumObjLstAsync';
    const strAction = 'GetResultMonthNumObjLst';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('strWhereCond', strWhereCond);
    // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    try {
      const response = await axios.get(strUrl, {
        params: { strWhereCond },
      });
      const data = response.data;
      if (data.errorId == 0) {
        const returnObjLst = data.returnObjLst;
        if (returnObjLst == null) {
          const strNullInfo = Format(
            '获取数据为null, 请注意!(in {0}.{1})',
            this.mstrController,
            strThisFuncName,
          );
          console.error(strNullInfo);
          throw strNullInfo;
        }
        //console.log(returnObjLst);
        const arrObjLst = gs_ResearchResult_GetObjLstByJSONObjLst(returnObjLst);
        return arrObjLst;
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

  /// <summary>
  /// 获取会议日期数量
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_GetObjLstAsync)
  /// </summary>
  /// <param name = "strWhereCond">条件</param>
  /// <returns>获取的相应对象列表</returns>
  public static async GetResultDateNumObjLstAsync(
    strWhereCond: string,
  ): Promise<Array<clsgs_ResearchResultEN>> {
    const strThisFuncName = 'GetResultDateNumObjLstAsync';
    const strAction = 'GetResultDateNumObjLst';
    const strUrl = GetWebApiUrl(this.mstrController, strAction);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('strWhereCond', strWhereCond);
    // const strData = mapParam.getParamText(); // "例如: strIdentityID =01";
    try {
      const response = await axios.get(strUrl, {
        params: { strWhereCond },
      });
      const data = response.data;
      if (data.errorId == 0) {
        const returnObjLst = data.returnObjLst;
        if (returnObjLst == null) {
          const strNullInfo = Format(
            '获取数据为null, 请注意!(in {0}.{1})',
            this.mstrController,
            strThisFuncName,
          );
          console.error(strNullInfo);
          throw strNullInfo;
        }
        //console.log(returnObjLst);
        const arrObjLst = gs_ResearchResult_GetObjLstByJSONObjLst(returnObjLst);
        return arrObjLst;
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
