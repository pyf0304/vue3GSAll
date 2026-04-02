/*
 * 功能：与字符串相关的功能函数
 * 版本：2019-08-01-01
 * 作者：潘以锋
 * */

//export function TransToBool(strValue: string) {
//    strIdCurrEduclsstrValue_Lower = strValue.toLowerCase();
//    if (strValue_Lower === "true") return true;
//    if (strValue_Lower === "false") return false;
//    if (strValue_Lower === "1") return true;
//    if (strValue_Lower === "0") return false;
//    return false;
//}
export function TestDataType() {
  const gettype = Object.prototype.toString;
  console.log(gettype.call('aaaa')); // 输出 [object String]
  console.log(gettype.call(2222)); // 输出 [object Number]
  console.log(gettype.call(true)); // 输出 [object Boolean]
  console.log(gettype.call(undefined)); // 输出 [object Undefined]
  console.log(gettype.call(null)); //输出 [object Null]
  console.log(gettype.call({})); // 输出 [object Object]
  console.log(gettype.call([])); //输出 [object Array]
  console.log(gettype.call(function () {})); // 输出 [object Function]
  //console.log(typeof s ===.isNumber(22));
  const ss = 'AA';
  console.log(typeof ss === 'number');
}

export function encodeHtml(str: string) {
  let encodedStr = '';
  if (str == '') return encodedStr;
  else {
    for (let i = 0; i < str.length; i++) {
      encodedStr += `&#${str
        .substring(i, i + 1)
        .charCodeAt(0)
        .toString(10)};`;
    }
  }
  return encodedStr;
}
