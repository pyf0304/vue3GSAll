// import * as $ from 'jquery';
import axios from 'axios';
import { clsSysPara4WebApi, GetWebApiUrl } from '@/ts/PubConfig/clsSysPara4WebApi';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
// import { clsColumns } from '@/ts/L0Entity/clsColumns';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { clsColumns } from '@/ts/L0Entity/clsColumns';

export const sqlWApiController = 'SqlApi';
export const sqlWApiConstructorName = 'sqlWApi';

/**
 * 获取WebApi的地址
 * (AutoGCLib.WAAccess4TypeScript:Gen4WATsGetWebApiUrl)
 * @returns 返回当前文件中Web服务的地址
 */
export function SqlWApiGetWebApiUrl(strController: string, strAction: string): string {
  // const strThisFuncName = 'GetWebApiUrl';
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

/// <summary>
/// 根据条件获取相应的记录对象列表
/// (AutoGCLib.WAAccess4TypeScript:Gen4WATsGetDataTableAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function SqlWApi_GetDataTableAsync(
  strCurrPrjDataBaseId: string,
  strTabName: string,
  intRecNum: number,
  strWhereCond: string,
  strOrderBy: string,
): Promise<Array<object>> {
  const strThisFuncName = 'SqlWApi_GetDataTableAsync';

  //public JObject GetDataTable(string strCurrPrjDataBaseId, string strTabName, int intRecNum, string strWhereCond, string strOrderBy) {
  const strAction = 'GetDataTable';
  const strUrl = GetWebApiUrl(sqlWApiController, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCurrPrjDataBaseId,
      strTabName,
      intRecNum,
      strWhereCond,
      strOrderBy,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnDataTable = JSON.parse(data.returnDataTable);
      //console.log(returnDataTable);
      return returnDataTable;
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
        sqlWApiConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sqlWApiConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function SqlWApi_GetColumnObjList(
  strTabName: string,
  strCurrPrjDataBaseId: string,
): Promise<Array<clsColumns>> {
  const strThisFuncName = 'SqlWApi_GetColumnObjList';

  //public JObject GetDataTable(string strCurrPrjDataBaseId, string strTabName, int intRecNum, string strWhereCond, string strOrderBy) {
  const strAction = 'GetColumnObjList';
  const strUrl = GetWebApiUrl(sqlWApiController, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabName,
      strCurrPrjDataBaseId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnObjLst = data.returnObjLst;
      if (returnObjLst == null) {
        const strNullInfo = Format(
          '获取数据为null, 请注意!(in {0}.{1})',
          sqlWApiConstructorName,
          strThisFuncName,
        );
        console.error(strNullInfo);
        throw strNullInfo;
      }
      //console.log(returnObjLst);
      // const arrObjLst = AssociationMapping_GetObjLstByJSONObjLst(returnObjLst);
      return returnObjLst;
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
        sqlWApiConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sqlWApiConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function SqlWApi_IsExistTable(
  strTabName: string,
  strCurrPrjDataBaseId: string,
): Promise<boolean> {
  const strThisFuncName = 'SqlWApi_IsExistTable';

  //public JObject GetDataTable(string strCurrPrjDataBaseId, string strTabName, int intRecNum, string strWhereCond, string strOrderBy) {
  const strAction = 'IsExistTable';
  const strUrl = GetWebApiUrl(sqlWApiController, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strTabName,
      strCurrPrjDataBaseId,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
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
        sqlWApiConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sqlWApiConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}

export async function SqlWApi_GetDataTableByKeyAsync(
  strCurrPrjDataBaseId: string,
  strTabName: string,
  strKeyFldName: string,
  strKeyValue: string,
  bolIsNumurable: boolean,
): Promise<Array<object>> {
  const strThisFuncName = 'SqlWApi_GetDataTableByKeyAsync';

  //public JObject GetDataTableByKey(string strCurrPrjDataBaseId, string strTabName, string strKeyFldName, string strKeyValue, bool bolIsNumurable)

  const strAction = 'GetDataTableByKey';
  const strUrl = GetWebApiUrl(sqlWApiController, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCurrPrjDataBaseId,
      strTabName,
      strKeyFldName,
      strKeyValue,
      bolIsNumurable,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnDataTable = JSON.parse(data.returnDataTable);
      //console.log(returnDataTable);
      return returnDataTable;
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
        sqlWApiConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sqlWApiConstructorName,
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
/// 根据条件获取相应的记录对象列表
/// (AutoGCLib.WAAccess4TypeScript:Gen4WATsGetDataTableAsync)
/// </summary>
/// <param name = "strWhereCond">条件</param>
/// <returns>获取的相应对象列表</returns>
export async function SqlWApi_GetTableAndViewsByCond(
  strCurrPrjDataBaseId: string,
  strWhereCond: string,
): Promise<Array<object>> {
  const strThisFuncName = 'SqlWApi_GetTableAndViewsByCond';

  //public ActionResult GetTableAndViewsByCond(string strCurrPrjDataBaseId, string strWhereCond)

  const strAction = 'GetTableAndViewsByCond';
  const strUrl = GetWebApiUrl(sqlWApiController, strAction);

  const token = Storage.get(ACCESS_TOKEN_KEY);
  //console.error('token:', token);
  const config = {
    headers: {
      Authorization: `${token}`,
    },
    params: {
      strCurrPrjDataBaseId,
      strWhereCond,
    },
  };
  try {
    const response = await axios.get(strUrl, config);
    const data = response.data;
    if (data.errorId == 0) {
      const returnDataTable = JSON.parse(data.returnDataTable);
      //console.log(returnDataTable);
      return returnDataTable;
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
        sqlWApiConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else if (error.statusText == 'Not Found') {
      const strInfo = Format(
        '网络错误！访问地址:{0}可能不存在！(in {1}.{2})',
        strUrl,
        sqlWApiConstructorName,
        strThisFuncName,
      );
      console.error(strInfo);
      throw strInfo;
    } else {
      throw error.statusText;
    }
  }
}
