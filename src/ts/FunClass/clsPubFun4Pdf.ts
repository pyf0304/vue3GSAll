import $ from 'jquery';
/*
 * Pdf内容
 */
export function set_pdfContent(strIFrameId: string, strPdfContent: string, value: string) {
  //$("#hidPdfContent").val(value);
  //$("#iframe_qaPdf").contents().find("#hidPdfContent").val(value);
  //$(window.parent.$("#iframe_qaPdf")).contents().find("#hidPdfContent").val(value);
  $(`#${strIFrameId}`, parent.document).contents().find(`#${strPdfContent}`).val(value);
}
/*
 * Pdf内容
 */
export function get_pdfContent(strIFrameId: string, strPdfContent: string): string {
  //return $("#hidPdfContent").val();
  //return $("#iframe_qaPdf").contents().find("#hidPdfContent").val();
  const strValue = $(`#${strIFrameId}`, parent.document).contents().find(`#${strPdfContent}`).val();
  if (typeof strValue == 'string') return strValue;
  return '';
}

/*
 * Pdf页码
 */
export function set_pdfPageNum(strIFrameId: string, strPdfPageNum: string, value: number) {
  //$("#hidPdfPageNum").val(value);
  //$("#iframe_qaPdf").contents().find("#hidPdfPageNum").val(value);
  $(`#${strIFrameId}`, parent.document).contents().find(`#${strPdfPageNum}`).val(value);
}
/*
 * Pdf页码
 */
export function get_pdfPageNum(strIFrameId: string): number {
  //return $("#hidPdfPageNum").val();
  console.log(strIFrameId);
  // const strValue = $('#iframe_qaPdf').contents().find('#hidPdfPageNum').val();

  const iframeElement = $(`#${strIFrameId}`)[0] as HTMLIFrameElement;
  if (iframeElement != null) {
    if (iframeElement.contentWindow != null) {
      const strValue = (iframeElement.contentWindow as any).btnGetPdfPageNum_Click();
      console.log('strValue', strValue);
      if (typeof strValue == 'string') return Number(strValue);
      else if (typeof strValue == 'number') return strValue;
    }
  }

  // return strValue;
  // const strValue = $(`#${strIFrameId}`, parent.document).contents().find(`#${strPdfPageNum}`).val();
  // if (typeof strValue == 'string') return Number(strValue);
  // else if (typeof strValue == 'number') return strValue;

  return 0;
}

/*
 * PdfTop
 */
export function set_page_top(strIFrameId: string, strPageTop: string, value: number) {
  //$("#hidPdfPageNum").val(value);
  //$("#iframe_qaPdf").contents().find("#page_top").val(value);
  $(`#${strIFrameId}`, parent.document).contents().find(`#${strPageTop}`).val(value);
}
/*
 * PdfTop
 */
export function get_page_top(strIFrameId: string, strPageTop: string): number {
  //return $("#hidPdfPageNum").val();
  //return $("#iframe_qaPdf").contents().find("#page_top").val();
  const strValue = $(`#${strIFrameId}`, parent.document).contents().find(`#${strPageTop}`).val();
  if (typeof strValue == 'string') return Number(strValue);
  else if (typeof strValue == 'number') return strValue;

  return 0;
}

/*
 * page_cache
 */
export function set_page_cache(strIFrameId: string, strPageCache: string, value: string) {
  //$("#hidPdfPageNum").val(value);
  //$("#iframe_qaPdf").contents().find("#page_cache").val(value);
  $(`#${strIFrameId}`, parent.document).contents().find(`#${strPageCache}`).val(value);
}
/*
 * page_cache
 */
export function get_page_cache(strIFrameId: string, strPageCache: string): string {
  //return $("#hidPdfPageNum").val();
  //return $("#iframe_qaPdf").contents().find("#page_cache").val();
  const strValue = $(`#${strIFrameId}`, parent.document).contents().find(`#${strPageCache}`).val();
  if (typeof strValue == 'string') return strValue;
  return '';
}

/*
 * pdf_zoom
 */
export function set_pdf_zoom(strIFrameId: string, strPdfZoom: string, value: string) {
  //$("#hidPdfPageNum").val(value);
  //$("#iframe_qaPdf").contents().find("#pdf_zoom").val(value);
  $(`#${strIFrameId}`, parent.document).contents().find(`#${strPdfZoom}`).val(value);
}
/*
 * pdf_zoom
 */
export function get_pdf_zoom(strIFrameId: string, strPdfZoom: string): string {
  //return $("#hidPdfPageNum").val();
  //return $("#iframe_qaPdf").contents().find("#pdf_zoom").val();
  const strValue = $(`#${strIFrameId}`, parent.document).contents().find(`#${strPdfZoom}`).val();
  if (typeof strValue == 'string') return strValue;
  return '';
}

/*
 * pdfDiv_top
 */
export function set_pdfDiv_top(strPdfDiv_top: string, value: string) {
  $(`#${strPdfDiv_top}`).val(value);
}
/*
 * pdfDiv_top
 */
export function get_pdfDiv_top(strPdfDiv_top: string): string {
  const strValue = $(`#${strPdfDiv_top}`).val();
  if (typeof strValue == 'string') return strValue;
  return '';
}

/*
 * pdfDiv_left
 */
export function set_pdfDiv_left(strPdfDiv_left: string, value: string) {
  $(`#${strPdfDiv_left}`).val(value);
}
/*
 * pdfDiv_left
 */
export function get_pdfDiv_left(strPdfDiv_left: string): string {
  const strValue = $(`#${strPdfDiv_left}`).val();
  if (typeof strValue == 'string') return strValue;
  return '';
}
export function pdf_ClearHighLightText() {
  const iframeElement = $('#iframe_qaPdf')[0] as HTMLIFrameElement;
  if (iframeElement == null) return;
  if (iframeElement.contentWindow == null) return;
  try {
    (iframeElement.contentWindow as any).ClearHighLightText();
  } catch (e: any) {
    // console.error(e);
  }
}
export function pdf_ClearSelectedText() {
  const iframeElement = $('#iframe_qaPdf')[0] as HTMLIFrameElement;
  if (iframeElement == null) return;
  if (iframeElement.contentWindow == null) return;
  try {
    (iframeElement.contentWindow as any).ClearSelectedText();
  } catch (e: any) {
    console.error(e);
  }
}
export function pdf_SetClientType(strClientType: string) {
  const iframeElement = $('#iframe_qaPdf')[0] as HTMLIFrameElement;
  if (iframeElement == null) return;
  if (iframeElement.contentWindow == null) return;
  try {
    (iframeElement.contentWindow as any).SetClientType(strClientType);
  } catch (e: any) {
    console.error(e);
  }
}
export function pdf_removeElementsByClass(strClassName: string) {
  const iframeElement = $('#iframe_qaPdf')[0] as HTMLIFrameElement;
  if (iframeElement == null) return;
  if (iframeElement.contentWindow == null) return;
  try {
    (iframeElement.contentWindow as any).removeElementsByClass(strClassName);
  } catch (e: any) {
    console.error(e);
  }
}
export function pdf_GetEndElementPos(intPdfPageNum: number, strSelectSpanRange: string) {
  const iframeElement = $('#iframe_qaPdf')[0] as HTMLIFrameElement;
  if (iframeElement == null) return;
  if (iframeElement.contentWindow == null) return;
  try {
    const endPos = (iframeElement.contentWindow as any).GetEndElementPos(
      intPdfPageNum,
      strSelectSpanRange,
    );
    return endPos;
  } catch (e: any) {
    console.error(e);
  }
}
export function pdf_HighLightText(intPdfPageNum: number, strSelectSpanRange: string) {
  const iframeElement = $('#iframe_qaPdf')[0] as HTMLIFrameElement;
  if (iframeElement == null) return;
  if (iframeElement.contentWindow == null) return;
  try {
    const endPos = (iframeElement.contentWindow as any).HighLightText(
      intPdfPageNum,
      strSelectSpanRange,
    );
    return endPos;
  } catch (e: any) {
    console.error(e);
  }
}
export function pdf_getPdfPages() {
  const iframeElement = $('#iframe_qaPdf')[0] as HTMLIFrameElement;
  if (iframeElement == null) return;
  if (iframeElement.contentWindow == null) return;
  try {
    const intPdfPages = (iframeElement.contentWindow as any).getPdfPages();
    return intPdfPages;
  } catch (e: any) {
    console.error(e);
  }
}
export function pdf_LocationPdfPageNum(intPageNum: number, strPdfContent: string) {
  const iframeElement = $('#iframe_qaPdf')[0] as HTMLIFrameElement;
  if (iframeElement == null) return;
  if (iframeElement.contentWindow == null) return;
  try {
    const intPdfPages = (iframeElement.contentWindow as any).btnLocationPdfPageNum_Click(
      intPageNum,
      strPdfContent,
    );
    return intPdfPages;
  } catch (e: any) {
    console.error(e);
  }
}
