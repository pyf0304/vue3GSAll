import { GetInputObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
export class clsPubFun4Feature {
  public static arrSelCtrlId: Array<string> = [];
  public static divName4Feature: HTMLDivElement;
  public static selCtrlId = '';
  public static btnSel_ClickBak20220224(strCtrlId: string, thisChk: HTMLInputElement) {
    const hidSelCtrlId: HTMLInputElement = <HTMLInputElement>(
      document.getElementById('hidSelCtrlId')
    );
    if (hidSelCtrlId == null) {
      alert('存放已选的功能Id列表的控件(hidSelCtrlId)不存在，请检查！');
    }
    if (clsPubFun4Feature.arrSelCtrlId.indexOf(strCtrlId) > -1) {
      clsPubFun4Feature.arrSelCtrlId = clsPubFun4Feature.arrSelCtrlId.filter((x) => x != strCtrlId);
      thisChk.className = 'btn btn-outline-info btn-sm';
    } else {
      clsPubFun4Feature.arrSelCtrlId.push(strCtrlId);
      thisChk.className = 'btn btn-info btn-sm border-danger';
    }
    hidSelCtrlId.value = clsPubFun4Feature.arrSelCtrlId.join(',');
  }
  public static btnSel_Click(strCtrlId: string, thisChk: HTMLInputElement) {
    const hidSelCtrlId: HTMLInputElement = <HTMLInputElement>(
      document.getElementById('hidSelCtrlId')
    );
    if (hidSelCtrlId == null) {
      alert('存放已选的功能Id列表的控件(hidSelCtrlId)不存在，请检查！');
    }
    if (clsPubFun4Feature.arrSelCtrlId.indexOf(strCtrlId) > -1) {
      //clsPubFun4Feature.arrSelCtrlId.remove(strCtrlId);
      clsPubFun4Feature.arrSelCtrlId = clsPubFun4Feature.arrSelCtrlId.filter((x) => x != strCtrlId);
      thisChk.className = 'btn btn-outline-info btn-sm';
    } else {
      clsPubFun4Feature.arrSelCtrlId.push(strCtrlId);
      thisChk.className = 'btn btn-info btn-sm border-danger';
    }
    hidSelCtrlId.value = clsPubFun4Feature.arrSelCtrlId.join(',');
  }
  public static btnSel_Click1(strCtrlId: string): void {
    console.log(`btnSel_Click1${strCtrlId}`);
    const thisChk = GetInputObjInDivObj(clsPubFun4Feature.divName4Feature, strCtrlId);
    if (clsPubFun4Feature.arrSelCtrlId.indexOf(strCtrlId) > -1) {
      //clsPubFun4Feature.arrSelCtrlId.remove(strCtrlId);
      clsPubFun4Feature.arrSelCtrlId = clsPubFun4Feature.arrSelCtrlId.filter((x) => x != strCtrlId);
      thisChk.className = 'btn btn-outline-info btn-sm';
      //btn btn - outline - info btn - sm text - nowrap
    } else {
      clsPubFun4Feature.arrSelCtrlId.push(strCtrlId);
      thisChk.className = 'btn btn-info btn-sm border-danger';
    }
    clsPubFun4Feature.selCtrlId = clsPubFun4Feature.arrSelCtrlId.join(',');
  }
}
