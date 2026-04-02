/**
 *随机生成n位字符
 */
export function MakeRandom2(): string {
  const randomchars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //			int pwdlen=5;
  let tmpstr = '';
  let iRandNum: number = Math.random() * randomchars.length;
  //Random rnd = new Random();
  for (let i = 0; i < 5; i++) {
    iRandNum = Math.random() * randomchars.length;
    tmpstr += randomchars[iRandNum];
  }
  return tmpstr;
}
export function IsNullOrEmpty(strValue: string | null): boolean {
  if (strValue == null) return true;
  if (strValue.length == 0) return true;
  //使用字符截取指定字符
  return false;
}
export function Format(strFormat: string, ...theArgs: any): string {
  if (arguments.length === 0) return '';

  let str = strFormat;
  for (let i = 0; i < theArgs.length; i++) {
    const re = new RegExp(`\\{${i}\\}`, 'gm');
    str = str.replace(re, theArgs[i]);
  }
  return str;
}
export function TransToBool(strValue: string) {
  const strValueLower = strValue.toLowerCase();
  if (strValueLower === 'true') return true;
  if (strValueLower === 'false') return false;
  if (strValueLower === '1') return true;
  if (strValueLower === '0') return false;
  return false;
}
const gettype = Object.prototype.toString;
export const tzDataType = {
  isObj(o: any) {
    return gettype.call(o) == '[object Object]';
  },
  isArray(o: any) {
    return gettype.call(o) == '[object Array]';
  },
  isNULL(o: any) {
    return gettype.call(o) == '[object Null]';
  },
  isDocument(o: any) {
    return gettype.call(o) == '[object Document]' || '[object HTMLDocument]';
  },
  isNumber(o: any) {
    return gettype.call(o) == '[object Number]';
  },
  isString(o: any) {
    return gettype.call(o) == '[object String]';
  },
  isBoolean(o: any) {
    return gettype.call(o) == '[object Boolean]';
  },
  // ........
};

/// <summary>
/// 随机生成n位字符
/// </summary>
/// <param name="intNumOfCharacters">字符数</param>
/// <param name="intAdditionalSeed">附加种子</param>
/// <returns>返回n位字符</returns>
export function MakeRandom(intNumOfCharacters: number, intAdditionalSeed: number): string {
  const randomchars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //			int pwdlen=5;
  let tmpstr = '';

  const jsTicks = new Date().getTime();
  const intSeed = jsTicks;
  let iRandNum: number = Math.random() * (intSeed + intAdditionalSeed);

  for (let i = 0; i < intNumOfCharacters; i++) {
    iRandNum = Math.random() * randomchars.length;
    tmpstr += randomchars[iRandNum];
  }
  return tmpstr;
}
/// <summary>
/// 把单词的第一个字母变成大写
/// </summary>
/// <param name="mStr"></param>
/// <returns></returns>
export function FirstUcaseS(mStr: string): string {
  if (mStr.length == 0) return '';
  let strResult = '';
  if (mStr.length > 1) {
    strResult = mStr.substring(0, 1).toUpperCase() + mStr.substring(1, mStr.length);
  } else {
    strResult = mStr.substring(0, 1).toUpperCase();
  }
  return strResult;
}

/// <summary>
/// 把单词的第一个字母变成小写
/// </summary>
/// <param name="mStr"></param>
/// <returns></returns>
export function FstLcaseS(mStr: string): string {
  if (mStr.length == 0) return '';
  let strResult = '';
  if (mStr.length > 1) {
    strResult = mStr.substring(0, 1).toLowerCase() + mStr.substring(1, mStr.length);
  } else {
    mStr = mStr.substring(0, 1).toLowerCase();
  }
  return strResult;
}

export function getBytes(str: string): number {
  const len = str.length;
  let bytes = len;
  for (let i = 0; i < len; i++) {
    if (str.charCodeAt(i) > 255) bytes++;
  }
  return bytes;
}

export function GetStrLen(strTemp: string) {
  //->Int
  //byte[] sarr = System.text.Encoding.Default.GetBytes(strTemp);
  const len = strTemp.length; //.characters.count; //will output as 3+3*2=9
  return len;
}

/**
 * HTML编码
 * @param txtstr源串
 * @returns 生成不能进行HTML解释的字符串
 */
export function HtmlEncode(txtstr: string): string {
  if (IsNullOrEmpty(txtstr) == false) {
    txtstr = txtstr.replace('>', '&gt;');
    txtstr = txtstr.replace('<', '&lt;');
    txtstr = txtstr.replace(' ', '&nbsp;');
    txtstr = txtstr.replace('"', '&quot;');
    txtstr = txtstr.replace('\r\n', '<br>');
  }
  return txtstr;
}
/**
 *  Html代码的解码
 * @param txtstr 源串
 * @returns 生成可以解释的HTML代码
 */
export function HtmlDecode(txtstr: string): string {
  if (IsNullOrEmpty(txtstr) == false) {
    txtstr = txtstr.replace('&gt;', '>');
    txtstr = txtstr.replace('&lt;', '<');
    txtstr = txtstr.replace('&nbsp;', ' ');
    txtstr = txtstr.replace('&quot;', '"');
    txtstr = txtstr.replace('<br>', '\r\n');
  }
  return txtstr;
}
/// <summary>
/// 组装字符串，
/// </summary>
/// <param name="mStr">原来的字符串</param>
/// <param name="count">该字符串的重复次数</param>
/// <returns>组装好的字符串</returns>
export function CombineStrS(mStr: string, count: number): string {
  let strTemp = '';
  for (let i = 0; i < count; i++) strTemp += mStr;
  return strTemp;
}

export function GetStrByNumWithLen(intNum: number, intLen: number): string {
  const strTemp = intNum.toString();
  const intLenTemp = strTemp.length;
  if (intLenTemp > intLen) {
    // const int1 = intLenTemp - intLen;
    return strTemp.substring(0, intLen);
  } else if (intLenTemp == intLen) {
    return strTemp;
  } else {
    const int1 = intLen - intLenTemp;
    const mStr = Format('{0}{1}', CombineStrS('0', int1), strTemp);
    return mStr;
  }
}

export function extractValues(queryString: string, strPropName: string): string {
  const params = new URLSearchParams(queryString);
  // 要提取的属性名数组
  const propertiesToExtract = ['aa', 'bb', 'cc'];

  if (params.has(strPropName)) {
    const result = params.get(strPropName);
    if (result == null) return '';
    return result;
  } else return '';
}
