import {
  CheckControlExistInDivObj,
  CheckDivExistObj,
  GetArray,
  getTdObjByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { getElementByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Web';
import { AccessCtlTypeDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { Format } from '@/ts/PubFun/clsString';
//import { clsCommFunc4Web } from "@/ts/PubFun/clsCommFunc4Web';
//

export class clsPubFun4Visible {
  public static divVisualEffectsObj: HTMLDivElement; // = GetUniDivInDoc('divVisualEffects');
  //Array.prototype.contains = function (obj) {
  //    const i = this.length;
  //    while (i--) {
  //        if (this[i] === obj) {
  //            return true;
  //        }
  //    }
  //    return false;
  //}

  public static Update(strCtrlId: string) {
    const objDiv0 = document.getElementById('divFunction');
    if (objDiv0 == undefined) return;
    const objDiv: HTMLDivElement = <HTMLDivElement>objDiv0;
    const objLst = objDiv.getElementsByTagName('input');

    let arrElement = this.GetArray(objLst);
    let btnUpdate4Dg = arrElement.find((x) => x.id == 'btnUpdateRecord');
    if (btnUpdate4Dg == null) {
      const objLst2 = objDiv.getElementsByTagName('button');

      arrElement = this.GetArray(objLst2);

      //const btnUpdate4Dg = document.getElementById('btnUpdateRecord');
      btnUpdate4Dg = arrElement.find((x) => x.id == 'btnUpdateRecord');
      if (btnUpdate4Dg == null) {
        const strMsg = Format('在divFunction层内，没有修改按钮，请检查!');
        alert(strMsg);
        return;
      }
    }
    const arrInput0 = document.getElementsByTagName('input');
    const arrInput1: Array<HTMLElement> = this.GetArray(arrInput0);
    let arrInput: Array<HTMLInputElement> = <Array<HTMLInputElement>>arrInput1;

    arrInput = arrInput.filter((x) => x.type == 'hidden');
    arrInput = arrInput.filter((x) => x.id.indexOf('hidCtrlId') > -1);
    if (arrInput.length > 0) {
      const hidCtrlId: HTMLInputElement = arrInput[0];
      //console.log('hidCtrlId:');
      //console.log(hidCtrlId);
      hidCtrlId.value = strCtrlId;
    }
    if (btnUpdate4Dg != null) {
      btnUpdate4Dg.click();
    }
  }

  public static txt_Click(bolIsPressShift: boolean, thisChk: HTMLInputElement) {
    console.log(thisChk);
    console.log(bolIsPressShift);
    //alert("clsPubFun4Visible_txt_Click");
    const strCtrlId: string = thisChk.id;
    //console.log("strCtrlId", strCtrlId);
    // const strCtrlId2 = thisChk.getAttribute('ctrlId');
    //console.log("strCtrlId2", strCtrlId2);

    if (bolIsPressShift === true) {
      if (this.MultipleSelectGvCheck(strCtrlId, 'divDataLst') == true) {
        SelectOneCtrl(thisChk);
        this.Update(strCtrlId);
      } else {
        thisChk.className = 'form-control-sm';
      }
    } else {
      if (this.SingleSelectGvCheck(strCtrlId, 'divDataLst') == true) {
        SetAllNotCheckedItems4Visible(clsPubFun4Visible.divVisualEffectsObj);
        SelectOneCtrl(thisChk);

        this.Update(strCtrlId);
      } else {
        thisChk.className = 'form-control-sm';
      }
    }
  }
  public static btn_Click4Visible(bolIsPressShift: boolean, thisChk: HTMLInputElement) {
    //console.log(thisChk);
    //console.log(bolIsPressShift);
    //alert("clsPubFun4Visible_txt_Click");
    const strCtrlId: string = thisChk.id;
    //console.log("strCtrlId", strCtrlId);
    // const strCtrlId2 = thisChk.getAttribute('ctrlId');
    //console.log("strCtrlId2", strCtrlId2);

    if (bolIsPressShift === true) {
      if (this.MultipleSelectGvCheck(strCtrlId, 'divDataLst') == true) {
        SelectOneCtrl(thisChk);
        this.Update(strCtrlId);
      } else {
        thisChk.className = 'form-control-sm';
      }
    } else {
      if (this.SingleSelectGvCheck(strCtrlId, 'divDataLst') == true) {
        SetAllNotCheckedItems4Visible(clsPubFun4Visible.divVisualEffectsObj);
        SelectOneCtrl(thisChk);
        this.Update(strCtrlId);
      } else {
        thisChk.className = 'form-control-sm';
      }
    }
  }
  public static ddl_Click(bolIsPressShift: boolean, thisChk: HTMLInputElement) {
    //console.log(thisChk);
    //console.log(bolIsPressShift);
    //alert("clsPubFun4Visible_txt_Click");
    const strCtrlId: string = thisChk.id;
    //console.log("strCtrlId", strCtrlId);
    // const strCtrlId2 = thisChk.getAttribute('ctrlId');
    //console.log("strCtrlId2", strCtrlId2);

    if (bolIsPressShift === true) {
      if (this.MultipleSelectGvCheck(strCtrlId, 'divDataLst') == true) {
        SelectOneCtrl(thisChk);

        this.Update(strCtrlId);
      } else {
        thisChk.className = 'form-control-sm';
      }
    } else {
      if (this.SingleSelectGvCheck(strCtrlId, 'divDataLst') == true) {
        SetAllNotCheckedItems4Visible(clsPubFun4Visible.divVisualEffectsObj);
        SelectOneCtrl(thisChk);

        this.Update(strCtrlId);
      } else {
        thisChk.className = 'form-control-sm';
      }
    }
  }

  public static chk_Click(bolIsPressShift: boolean, thisChk: HTMLInputElement) {
    //console.log(thisChk);
    //console.log(bolIsPressShift);
    //alert("clsPubFun4Visible_txt_Click");
    const strCtrlId: string = thisChk.id;
    //console.log("strCtrlId", strCtrlId);
    // const strCtrlId2 = thisChk.getAttribute('ctrlId');
    //console.log("strCtrlId2", strCtrlId2);

    if (bolIsPressShift === true) {
      if (this.MultipleSelectGvCheck(strCtrlId, 'divDataLst') == true) {
        SelectOneCtrl(thisChk);

        this.Update(strCtrlId);
      } else {
        thisChk.className = 'form-control-sm';
      }
    } else {
      if (this.SingleSelectGvCheck(strCtrlId, 'divDataLst') == true) {
        SetAllNotCheckedItems4Visible(clsPubFun4Visible.divVisualEffectsObj);
        SelectOneCtrl(thisChk);

        this.Update(strCtrlId);
      } else {
        thisChk.className = 'form-control-sm';
      }
    }
  }

  /*
   * 把控件数组(arr[])变成控件列表(Array<HTMLElement>)。arr[]=>Array<HTMLElement>
   */
  public static GetArray(arr: any): Array<HTMLElement> {
    const arrLst: Array<HTMLElement> = new Array<HTMLElement>();
    for (let i = 0; i < arr.length; i++) {
      const chk: HTMLElement = arr[i]; // as HTMLElement;
      arrLst.push(chk);
    }
    return arrLst;
  }

  public static MultipleSelectGvCheck(strCtrlId: string, strDivId: string) {
    const objDiv0 = document.getElementById(strDivId);
    //console.log("objDiv0", objDiv0);
    if (objDiv0 == undefined) return;
    const objDiv: HTMLDivElement = <HTMLDivElement>objDiv0;
    const objLst = objDiv.getElementsByTagName('input');

    const arrElement = this.GetArray(objLst);
    const arrInput: Array<HTMLInputElement> = <Array<HTMLInputElement>>arrElement;
    const arrInput_Data: Array<HTMLInputElement> = arrInput.filter((x) => x.hasAttribute('ctrlid'));
    //console.log("arrInput_Data", arrInput_Data);
    const arrFind: Array<HTMLInputElement> = arrInput_Data.filter(
      (x) => x.getAttribute('ctrlid') == strCtrlId && x.type == 'checkbox',
    );
    //console.log("arrFind", arrFind);
    if (arrFind.length >= 1) {
      for (const chk1 of arrFind) {
        if (chk1.checked == true) {
          chk1.checked = false;
          return false;
        } else {
          chk1.checked = true;
          return true;
        }
      }
    }
  }

  public static SingleSelectGvCheck(strCtrlId: string, strDivId: string) {
    const objDiv0 = document.getElementById(strDivId);
    //console.log("objDiv0", objDiv0);
    if (objDiv0 == undefined) return;
    const objDiv: HTMLDivElement = <HTMLDivElement>objDiv0;

    const objLst = objDiv.getElementsByTagName('input');

    const arrElement = this.GetArray(objLst);
    //const spn1;
    this.SetAllNotCheckedItems4Gv(strDivId);
    const arrInput: Array<HTMLInputElement> = <Array<HTMLInputElement>>arrElement;
    const arrInput_Data: Array<HTMLInputElement> = arrInput.filter((x) => x.hasAttribute('ctrlid'));
    //console.log("arrInput_Data", arrInput_Data);
    const arrFind: Array<HTMLInputElement> = arrInput_Data.filter(
      (x) => x.getAttribute('ctrlid') == strCtrlId && x.type == 'checkbox',
    );
    //console.log("arrFind", arrFind);
    if (arrFind.length >= 1) {
      for (const chk1 of arrFind) {
        if (chk1.checked == true) {
          chk1.checked = false;
          return false;
        } else {
          chk1.checked = true;
          return true;
        }
      }
    }
  }

  public static GetCheckedItems4Gv(strDivId: string): Array<string> {
    const arrTable0 = document.getElementsByTagName('table');
    let arrTable = this.GetArray(arrTable0);
    arrTable = arrTable.filter((x) => x.id.indexOf(strDivId) > -1);
    if (arrTable.length == 0) {
      alert(`在当前界面中没有找到Div:${strDivId}`);
      return new Array<string>();
    }
    const tabContainer = arrTable[0];
    //console.log(tabContainer);

    const arrInput0 = tabContainer.getElementsByTagName('input');
    let arrInput: Array<HTMLInputElement> = <Array<HTMLInputElement>>this.GetArray(arrInput0);
    arrInput = arrInput.filter((x) => x.type == 'checkbox');
    arrInput = arrInput.filter((x) => x.checked == true);
    if (arrInput.length == 0) return new Array<string>();
    const arrSpan = arrInput.map((x) => x.parentNode);
    //arrSpan = arrSpan.filter(x=>x.);
    const arrCtrlId0 = arrSpan.filter((x) => x?.nodeValue != null).map((x) => x?.nodeValue);
    const arrCtrlId: Array<string> = <Array<string>>arrCtrlId0;

    return arrCtrlId;
  }

  //在GridView中选中一行或几行
  public static SetAllNotCheckedItems4Gv(strDivId: string) {
    const objDiv0 = document.getElementById(strDivId);
    //console.log("objDiv0", objDiv0);
    if (objDiv0 == undefined) return;
    const objDiv: HTMLDivElement = <HTMLDivElement>objDiv0;

    const objLst = objDiv.getElementsByTagName('input');

    const arrElement = this.GetArray(objLst);

    let arrInput: Array<HTMLInputElement> = <Array<HTMLInputElement>>arrElement;

    arrInput = arrInput.filter((x) => x.type == 'checkbox');
    arrInput = arrInput.filter((x) => x.checked == true);
    if (arrInput.length == 0) return null;
    arrInput.forEach((x) => (x.checked = false));
  }

  public static ReSelectCtrl() {
    const arrCtrlId = this.GetCheckedItems4Gv('gvDetailRegionFlds');
    if (arrCtrlId == null) {
      return;
    }
    const arrDiv0 = document.getElementsByTagName('div');
    let arrDiv = this.GetArray(arrDiv0);
    arrDiv = arrDiv.filter((x) => x.id.indexOf('pnlControlLst') > -1);
    if (arrDiv.length == 0) {
      alert('在当前界面中没有找到Div:pnlControlLst');
      return;
    }
    const divContainer = arrDiv[0];
    const arrInput0 = divContainer.getElementsByTagName('input');
    let arrInput = this.GetArray(arrInput0);
    //console.log(arrInput);
    if (arrInput == null) return;
    if (arrInput.length > 0) {
      arrInput = arrInput.filter((x) => arrCtrlId.indexOf(x.id) > -1);
      arrInput.forEach((x) => SelectOneCtrl(x));
    }
    const arrSelect0 = divContainer.getElementsByTagName('select');
    let arrSelect = this.GetArray(arrSelect0);
    //console.log(arrSelect);
    if (arrSelect == null) return;
    if (arrSelect.length > 0) {
      arrSelect = arrSelect.filter((x) => arrCtrlId.indexOf(x.id) > -1);
      arrSelect.forEach((x) => SelectOneCtrl(x));
    }

    const arrSpan0 = divContainer.getElementsByTagName('span');
    let arrSpan = this.GetArray(arrSpan0);
    //console.log(arrSpan);
    if (arrSpan == null) return;
    if (arrSpan.length > 0) {
      arrSpan = arrSpan.filter((x) => arrCtrlId.indexOf(x.id) > -1);
      arrSpan.forEach((x) => SelectOneCtrl(x));
    }
  }

  public static ReSelectCtrl4List(strDivName: string) {
    const arrCtrlId = this.GetCheckedItems4Gv(strDivName);
    if (arrCtrlId == null) {
      return;
    }

    const divContainer: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivName);
    const arrspan0 = divContainer.getElementsByTagName('span');
    let arrspan: Array<HTMLSpanElement> = <Array<HTMLSpanElement>>this.GetArray(arrspan0);
    console.log(arrspan);
    if (arrspan == null) return;
    arrspan = arrspan.filter((x) => arrCtrlId.indexOf(x.id) > -1);
    let arrTd: Array<HTMLTableCellElement> = new Array<HTMLTableCellElement>(); //  arrspan.map(x => x.parentNode);
    for (const objSpan of arrspan) {
      if (objSpan.parentNode != null) {
        const objTd = <HTMLTableCellElement>objSpan.parentNode;
        arrTd.push(objTd);
      }
    }
    arrTd = arrTd.filter((x) => x != null);
    arrTd.forEach((x) => (x.className = 'bg-primary'));

    const arrA0 = divContainer.getElementsByTagName('a');
    let arrA = this.GetArray(arrA0);
    console.log(arrA);
    if (arrA == null) return;
    arrA = arrA.filter((x) => arrCtrlId.indexOf(x.id) > -1);
    let arrTd1: Array<HTMLTableCellElement> = new Array<HTMLTableCellElement>();
    for (const objA of arrA) {
      if (objA.parentNode != null) {
        const objTd = <HTMLTableCellElement>objA.parentNode;
        arrTd1.push(objTd);
      }
    }
    arrTd1 = arrTd.filter((x) => x != null);
    arrTd1.forEach((x) => (x.className = 'bg-primary'));
  }
  //
  public static SingleSelectGvCheck4DG(strCtrlId: string, strDivId: string) {
    const objDiv0 = document.getElementById(strDivId);
    //console.log("objDiv0", objDiv0);
    if (objDiv0 == undefined) return;
    const objDiv: HTMLDivElement = <HTMLDivElement>objDiv0;

    const objLst = objDiv.getElementsByTagName('input');

    const arrElement = this.GetArray(objLst);
    //const spn1;
    this.SetAllNotCheckedItems4Gv(strDivId);
    const arrInput: Array<HTMLInputElement> = <Array<HTMLInputElement>>arrElement;
    const arrInput_Data: Array<HTMLInputElement> = arrInput.filter((x) => x.hasAttribute('ctrlid'));
    //console.log("arrInput_Data", arrInput_Data);
    const arrFind: Array<HTMLInputElement> = arrInput_Data.filter(
      (x) => x.getAttribute('ctrlid') == strCtrlId && x.type == 'checkbox',
    );
    //console.log("arrFind", arrFind);
    if (arrFind.length >= 1) {
      for (const chk1 of arrFind) {
        if (chk1.checked == true) {
          chk1.checked = false;
          return false;
        } else {
          chk1.checked = true;
          return true;
        }
      }
    }
  }
}

// 选择某一控件，使该控件处于选择状态
export function SelectOneCtrl(objCtrl: any) {
  let spn_parent;

  switch (objCtrl.localName) {
    case 'select':
      objCtrl.className = 'form-control-sm border-danger';
      break;
    case 'input':
      if (objCtrl.type == 'checkbox') {
        spn_parent = objCtrl.parentNode;
        if (spn_parent != null) {
          spn_parent.className = 'form-control border-danger';
        }
      } else if (objCtrl.type == 'button') {
        objCtrl.className = 'btn btn-info btn-sm text-nowrap border-danger';
      } else {
        objCtrl.className = 'form-control-sm border-danger';
      }
      break;
    case 'textarea':
      objCtrl.className = 'form-control-sm border-danger';
      break;
    case 'span':
      objCtrl.className = 'text-danger';
      break;
    case 'a':
      if (objCtrl.parentNode != null) {
        const objTd = objCtrl.parentNode;
        if (objTd.localName == 'td') {
          objTd.className = 'border border-danger text-center';
          objCtrl.class = 'text-primary font-weight-bold';
        }
      } else {
        objCtrl.className = 'form-control border-danger';
      }
      break;
    default:
      AccessCtlTypeDefault(objCtrl.localName, 'SelectOneCtrl');

      break;
  }
}

// 选择某一控件，使该控件处于选择状态
export function NoSelectOneCtrl(objCtrl: any) {
  let spn_parent;

  switch (objCtrl.localName) {
    case 'select':
      objCtrl.className = 'form-control-sm';
      break;
    case 'input':
      if (objCtrl.type == 'checkbox') {
        spn_parent = objCtrl.parentNode;
        if (spn_parent != null) {
          spn_parent.className = 'form-control-sm';
        }
      } else if (objCtrl.type == 'button') {
        objCtrl.className = 'btn btn-outline-info btn-sm text-nowrap ';
      } else {
        objCtrl.className = 'form-control-sm';
      }
      break;
    case 'span':
      objCtrl.className = 'text-primary';
      break;
    case 'a':
      if (objCtrl.parentNode != null) {
        const objTd = objCtrl.parentNode;
        if (objTd.localName == 'td') {
          objTd.className = 'text-center';
          objCtrl.class = 'text-primary';
        }
      } else {
        objCtrl.className = 'text-primary';
      }
      break;
    default:
      AccessCtlTypeDefault(objCtrl.localName, 'NoSelectOneCtrl');

      break;
  }
}

export function SelectOneTdByKeyId(divName: HTMLDivElement, strKeyId: string) {
  // const strKeyId = objElem.getAttribute('keyid');
  const objTd = getTdObjByIdInDivObj(divName, `td${strKeyId}`);
  objTd.classList.add('selected-td');
}

export function SelectOneTd(objTd: Element) {
  objTd.classList.add('selected-td');
}
export function NoSelectOneTdByKeyId(divName: HTMLDivElement, strKeyId: string) {
  // const strKeyId = objElem.getAttribute('keyid');
  const objTd = getTdObjByIdInDivObj(divName, `td${strKeyId}`);
  objTd.classList.remove('selected-td');
}

export function SingleChecked4VisibleBak(
  objDiv: HTMLDivElement,
  strControlType: string,
  strCtrlId: string,
) {
  try {
    CheckDivExistObj(objDiv);
    CheckControlExistInDivObj(objDiv, strControlType, strCtrlId);

    const objLst = objDiv.getElementsByTagName('input');
    let arrElement = GetArray(objLst);
    let objFind = arrElement.find((x) => x.id == strCtrlId);
    if (objFind != null) {
      SetAllNotCheckedItems4Visible(objDiv);
      SelectOneCtrl(objFind);
      return;
    }

    const objLst1 = objDiv.getElementsByTagName('select');
    arrElement = GetArray(objLst1);
    objFind = arrElement.find((x) => x.id == strCtrlId);
    if (objFind != null) {
      SetAllNotCheckedItems4Visible(objDiv);
      SelectOneCtrl(objFind);
      return;
    }
    const objA = objDiv.getElementsByTagName('a');
    arrElement = GetArray(objA);
    objFind = arrElement.find((x) => x.id == strCtrlId);
    if (objFind != null) {
      SetAllNotCheckedItems4Visible(objDiv);
      SelectOneCtrl(objFind);
      return;
    }
    const objSpan = objDiv.getElementsByTagName('span');
    arrElement = GetArray(objSpan);
    objFind = arrElement.find((x) => x.id == strCtrlId);
    if (objFind != null) {
      SetAllNotCheckedItems4Visible(objDiv);
      SelectOneCtrl(objFind);
      return;
    }
  } catch (e: any) {
    console.error(e);
  }
}
export function SetAllNotCheckedItems4Visible(objDiv: HTMLDivElement) {
  const objTdLst0 = objDiv.getElementsByTagName('td');
  const objTdLst = GetArray(objTdLst0);
  objTdLst.forEach((x) => NoSelectOneTd(x));

  const objLst = objDiv.getElementsByTagName('input');

  const arrElement = GetArray(objLst);

  const arrInput: Array<HTMLInputElement> = <Array<HTMLInputElement>>arrElement;

  const arrInput_Check: Array<HTMLInputElement> = arrInput.filter((x) => x.type == 'checkbox');
  if (arrInput_Check.length > 0) {
    arrInput_Check.forEach((x) => NoSelectOneCtrl(x));
  }
  const arrInput_Button: Array<HTMLInputElement> = arrInput.filter((x) => x.type == 'button');
  if (arrInput_Button.length > 0) {
    arrInput_Button.forEach((x) => NoSelectOneCtrl(x));
  }

  const arrInput_Text: Array<HTMLInputElement> = arrInput.filter((x) => x.type == 'text');
  if (arrInput_Text.length > 0) {
    arrInput_Text.forEach((x) => NoSelectOneCtrl(x));
  }

  const objLst_Select = objDiv.getElementsByTagName('select');
  //console.log("objLst_Select", objLst_Select);
  const arrElement_Select = GetArray(objLst_Select);
  if (arrElement_Select.length > 0) {
    arrElement_Select.forEach((x) => NoSelectOneCtrl(x));
  }

  const objLst_Span = objDiv.getElementsByTagName('span');
  //console.log("objLst_Select", objLst_Select);
  const arrElement_Span = GetArray(objLst_Span);
  if (arrElement_Span.length > 0) {
    arrElement_Span.forEach((x) => NoSelectOneCtrl(x));
  }
  const objLst_A = objDiv.getElementsByTagName('a');
  //console.log("objLst_Select", objLst_Select);
  const arrElement_A = GetArray(objLst_A);
  if (arrElement_A.length > 0) {
    arrElement_A.forEach((x) => NoSelectOneCtrl(x));
  }
}

export function NoSelectOneTd(objTd: HTMLElement) {
  objTd.classList.remove('selected-td');
}

export function SelectOneCtrlById(
  divName: HTMLDivElement,
  strControlType: string,
  strControlId: string,
) {
  try {
    console.info('SelectOneCtrlById');
    CheckDivExistObj(divName);
    CheckControlExistInDivObj(divName, strControlType, strControlId);
    const objElem = getElementByIdInDivObj(divName, strControlType, strControlId);
    SelectOneCtrl(objElem);
  } catch (e: any) {
    console.error(e);
  }
}

export function SelectManyCtrlByKeyId(divName: HTMLDivElement, arrKeyId: Array<string>) {
  try {
    // const controls = containerRef.value.querySelectorAll('[id*="aa"]');
    // if (controls.length > 0) {
    //   // Convert the NodeList to an array and do something with the controls
    //   const controlsArray = Array.from(controls);
    //   console.log('Controls array:', controlsArray);
    // } else {
    //   console.log('No controls found with id containing "aa".');
    // }
    console.info('SelectManyCtrlById');
    CheckDivExistObj(divName);
    for (const strKeyId of arrKeyId) {
      const strFindFormat = `[id*="${strKeyId}"]`;
      const controls = divName.querySelectorAll(strFindFormat);
      if (controls.length == 0) continue;
      const controlsArray = Array.from(controls);
      for (const objElem of controlsArray) {
        if (objElem == null) continue;
        if (objElem.localName == 'td') {
          SelectOneTd(objElem);
        } else {
          SelectOneCtrl(objElem);
        }
      }
    }
  } catch (e: any) {
    console.error(e);
  }
}
