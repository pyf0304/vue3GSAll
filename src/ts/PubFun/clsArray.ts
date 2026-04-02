import { Format, IsNullOrEmpty } from './clsString';

/**
 * 根据列表获取SQL中的IN串
 * @param arrValues:关键字列表
 * @param bolIsHaveQuote:是否有引号
 */
export function GetSqlInStrByArray(arrValues: Array<string>, bolIsHaveQuote: boolean): string {
  let sbInStr = '';
  if (bolIsHaveQuote == true) {
    let bolIsFirst = true;
    for (const strValue of arrValues) {
      if (IsNullOrEmpty(strValue) == false) {
        if (bolIsFirst == true) {
          sbInStr += Format("'{0}'", strValue);
          bolIsFirst = false;
        } else {
          sbInStr += Format(",'{0}'", strValue);
        }
      }
    }
  } else {
    let bolIsFirst = true;
    for (const strValue of arrValues) {
      if (bolIsFirst == true) {
        sbInStr += Format('{0}', strValue);
        bolIsFirst = false;
      } else {
        sbInStr += Format(',{0}', strValue);
      }
    }
  }

  return sbInStr;
}

/**
 * 根据关键字连接串获取关键字列表，并按升序排序
 * @param strKeyFldStr:关键字连接串
 * @return 关键字列表
 */
export function GetKeyLstByKeyFldStr(strKeyFldStr: string): Array<string> {
  const arrKeyLst = strKeyFldStr.split('|');
  const arrKeyLstSort = arrKeyLst.sort();
  return arrKeyLstSort;
}

/**
 * 根据关键字列表获取关键字连接串
 * @param arrKeyLst:关键字列表
 * @return 关键字连接串
 */
export function GetKeyFldStrByKeyLst(arrKeyLst: Array<string>): string {
  const arrKeyLstSort = arrKeyLst.sort();
  const strKeyFldStr = arrKeyLstSort.join('|');
  return strKeyFldStr;
}
