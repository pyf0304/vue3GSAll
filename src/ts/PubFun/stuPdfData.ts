/*
 * 功能:用于分页获取对象列表的参数结构
 * 版本:2019-07-24-01
 * 作者:潘以锋
 * */
import { Dictionary } from './tzDictionary';

// funcName: strFunctionName,// '一些数据可以发送给父窗口';
// selectText: strSelectText,
// pdfDivTop:strpdfDiv_top,
// pdfDivLeft:strpdfDiv_left,
// pdfPageNum:pageNum,
export class stuPdfData {
  /*
   * 函数名
   **/
  public funcName = '';

  /*
   * 选择文本
   **/
  public selectText = '';
  /*
   * 当前pdf页码
   **/
  public pdfPageNum = 1;
  /*
   * pdf相关层顶
   **/

  public pdfDivTop = '';

  /*
   * pdf相关层左
   **/
  public pdfDivLeft = '';

  /*
   * 选择Span的范围
   **/
  public selectSpanRange = '';

  public static GetMapParam(objPdfData: stuPdfData): Dictionary {
    //Array < string > arrLst = new Array<string>(objPdfData.pageSize);
    const mapParam: Dictionary = new Dictionary();
    mapParam.add('funcName', objPdfData.funcName);
    mapParam.add('selectText', objPdfData.selectText);
    mapParam.add('pdfPageNum', objPdfData.pdfPageNum.toString());
    mapParam.add('pdfDivTop', objPdfData.pdfDivTop);
    mapParam.add('pdfDivLeft', objPdfData.pdfDivLeft);
    mapParam.add('selectSpanRange', objPdfData.selectSpanRange);

    return mapParam;
  }
  public static InitObj: stuPdfData = {
    funcName: '',
    selectText: '',
    pdfPageNum: 1,
    pdfDivTop: '',
    pdfDivLeft: '',
    selectSpanRange: '',
  };
}
