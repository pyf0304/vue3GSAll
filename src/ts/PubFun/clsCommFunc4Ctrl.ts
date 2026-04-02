import { clsCboObject } from './clsCboObject';
import { Format, IsNullOrEmpty } from './clsString';

export function GetCheckedObjLstInDiv(strDivId: string): Array<HTMLInputElement> {
  const divList: HTMLDivElement = document.getElementById(strDivId) as HTMLDivElement;

  const arrInput = divList.getElementsByTagName('input');
  const arrElements = <Array<HTMLInputElement>>GetArray(arrInput);
  const arrCheckBox = arrElements.filter((x) => x.type == 'checkbox' && x.checked == true);
  if (arrCheckBox == null) {
    const strMsg = Format('在层:[{0}]内，不存在复选框, 请检查！', strDivId);
    console.error(strMsg);
    throw strMsg;
  }
  return arrCheckBox;
}

export function GetCheckedKeyIdsInDiv(strDivName4List: string): Array<string> {
  const divList: HTMLDivElement = document.getElementById(strDivName4List) as HTMLDivElement;
  const chkItems: HTMLCollectionOf<Element> = divList.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
  const arrChkLitems: Array<HTMLInputElement> = GetArray(chkItems) as Array<HTMLInputElement>;

  const chkCheckedItems: Array<HTMLInputElement> = arrChkLitems.filter((x) => x.checked == true);

  const arrSelectedKeys: Array<string> = chkCheckedItems
    .filter((x) => x.id != 'chkTabHead')
    .map((x) => {
      const strId = x.id;
      const strKey = strId.substring(3);
      return strKey;
    });
  return arrSelectedKeys;
}

/*
 * 把控件数组(arr[])变成控件列表(Array<HTMLElement>)。arr[]=>Array<HTMLElement>
 */
export function GetArray(arr: any): Array<HTMLElement> {
  const arrLst: Array<HTMLElement> = new Array<HTMLElement>();
  for (let i = 0; i < arr.length; i++) {
    const chk: HTMLElement = arr[i]; // as HTMLElement;
    arrLst.push(chk);
  }
  return arrLst;
}
/**
 * 获取在层下Select控件的值
 * @param strDivId : 层Id
 * @param strSelectId 下拉框Id
 * @returns 字符型
 **/
export function GetSelectValueInDiv(strDivId: string, strSelectId: string): string {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrSelect = objDiv.getElementsByTagName('select');
  const arrElements = GetArray(arrSelect);
  const sltDdl: HTMLSelectElement = <HTMLSelectElement>arrElements.find((x) => x.id == strSelectId);
  if (sltDdl == null) {
    const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', strDivId, strSelectId);
    console.error(strMsg);
    throw strMsg;
  }
  if (sltDdl.selectedIndex < 0) return '';
  const objOptionSel = sltDdl.options[sltDdl.selectedIndex];
  const strValue = objOptionSel.value;
  return strValue;
}
export function SetSelectValueByIdInDiv(strDivId: string, strSelectId: string, strValue: string) {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);

  const arrSelect = objDiv.getElementsByTagName('select');
  const arrElements = GetArray(arrSelect);
  const sltDdl: HTMLSelectElement = <HTMLSelectElement>arrElements.find((x) => x.id == strSelectId);
  if (sltDdl == null) {
    const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', strDivId, strSelectId);
    console.error(strMsg);
    throw strMsg;
  }

  //    const objSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strSelectId);
  //    if (objSelect == null) {
  //        console.error(`在设置下拉框值时，控件：${strSelectId}不存在！`);
  //        return;
  //    }
  if (sltDdl.options.length == 0) {
    if (IsNullOrEmpty(strValue) == true) return;
    const strMsg = Format(
      '在层:[{0}]内，下拉框:[{1}]可能还没有绑定, 请检查！',
      strDivId,
      strSelectId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  for (let i = 0; i < sltDdl.options.length; i++) {
    if (sltDdl.options[i].value == strValue) {
      sltDdl.selectedIndex = i;
      return;
    }
  }
  if (IsNullOrEmpty(strValue) == false) {
    const strMsg = Format(
      '在层:[{0}]内，下拉框:[{1}]不能赋值:[{2}], 请检查！',
      strDivId,
      strSelectId,
      strValue,
    );
    console.error(strMsg);
    throw strMsg;
  }
}
export function GetTextAreaValueInDiv(strDivId: string, strInputId: string): string {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrInput = objDiv.getElementsByTagName('textarea');
  const arrElements = GetArray(arrInput);
  const objInput: HTMLTextAreaElement = <HTMLTextAreaElement>(
    arrElements.find((x) => x.id == strInputId)
  );
  if (objInput == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在文本框(textarea):[{1}], 请检查！',
      strDivId,
      strInputId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strValue = objInput.value;
  return strValue;
}

export function SetTextAreaValueByIdInDiv(strDivId: string, strInputId: string, strValue: string) {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrInput = objDiv.getElementsByTagName('textarea');
  const arrElements = GetArray(arrInput);
  const objInput: HTMLTextAreaElement = <HTMLTextAreaElement>(
    arrElements.find((x) => x.id == strInputId)
  );
  if (objInput == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在文本框(textarea):[{1}], 请检查！',
      strDivId,
      strInputId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  objInput.value = strValue;
}
export function GetInputValue(strInputId: string): string {
  const objInput: HTMLInputElement = <HTMLInputElement>document.getElementById(strInputId);

  if (objInput == null) {
    const strMsg = Format('在document内，不存在文本框:[{0}], 请检查！', strInputId);
    console.error(strMsg);
    throw strMsg;
  }
  const strValue = objInput.value;
  return strValue;
}

export function GetInputValueInDiv(strDivId: string, strInputId: string): string {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objInput: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strInputId);
  if (objInput == null) {
    const strMsg = Format('在层:[{0}]内，不存在文本框:[{1}], 请检查！', strDivId, strInputId);
    console.error(strMsg);
    throw strMsg;
  }
  const strValue = objInput.value;
  return strValue;
}

export function SetInputValueByIdInDiv(strDivId: string, strInputId: string, strValue: string) {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objInput: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strInputId);
  if (objInput == null) {
    const strMsg = Format('在层:[{0}]内，不存在文本框:[{1}], 请检查！', strDivId, strInputId);
    console.error(strMsg);
    throw strMsg;
  }
  objInput.value = strValue;
}

export function SetInputValueInDivObj(
  objDiv: HTMLDivElement | null,
  strInputId: string,
  strValue: string | number,
) {
  CheckDivExistObj(objDiv);
  if (objDiv == null) {
    return;
  }
  if (strValue == null) return;
  if (strValue == null) return;

  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objInput: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strInputId);
  if (objInput == null) {
    const strMsg = Format('在层:[{0}]内，不存在文本框:[{1}], 请检查！', objDiv.id, strInputId);
    console.error(strMsg);
    throw strMsg;
  }
  if (typeof strValue == 'string') {
    objInput.value = strValue;
  } else {
    objInput.value = strValue.toString();
  }
}
export function SetLabelHtmlByIdInDiv(strDivId: string, strLabelId: string, strValue: string) {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrLabel = objDiv.getElementsByTagName('label');
  const arrElements = GetArray(arrLabel);
  const objLabel: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strLabelId);
  if (objLabel == null) {
    const strMsg = Format('在层:[{0}]内，不存在Label框:[{1}], 请检查！', strDivId, strLabelId);
    console.error(strMsg);
    throw strMsg;
  }
  objLabel.innerHTML = strValue;
}

export function SetSpanHtmlByIdInDiv(strDivId: string, strSpanId: string, strValue: string) {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrLabel = objDiv.getElementsByTagName('span');
  const arrElements = GetArray(arrLabel);
  const objLabel: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strSpanId);
  if (objLabel == null) {
    const strMsg = Format('在层:[{0}]内，不存在Span框:[{1}], 请检查！', strDivId, strSpanId);
    console.error(strMsg);
    throw strMsg;
  }
  objLabel.innerHTML = strValue;
}

export function SetH4HtmlByIdInDiv(strDivId: string, strH4Id: string, strValue: string) {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrLabel = objDiv.getElementsByTagName('h4');
  const arrElements = GetArray(arrLabel);
  const objLabel: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strH4Id);
  if (objLabel == null) {
    const strMsg = Format('在层:[{0}]内，不存在h4标题框:[{1}], 请检查！', strDivId, strH4Id);
    console.error(strMsg);
    throw strMsg;
  }
  objLabel.innerHTML = strValue;
}

export function GetLabelHtmlInDiv(strDivId: string, strLabelId: string): string {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrlabel = objDiv.getElementsByTagName('label');
  const arrElements = GetArray(arrlabel);
  const objLabel: HTMLLabelElement = <HTMLLabelElement>arrElements.find((x) => x.id == strLabelId);
  if (objLabel == null) {
    const strMsg = Format('在层:[{0}]内，不存在Label:[{1}], 请检查！', strDivId, strLabelId);
    console.error(strMsg);
    throw strMsg;
  }
  const strValue = objLabel.innerHTML;
  return strValue;
}
export function GetCheckBoxValueInDiv(strDivId: string, strCheckId: string): boolean {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objCheck: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strCheckId);
  if (objCheck == null) {
    const strMsg = Format('在层:[{0}]内，不存在复选框:[{1}], 请检查！', strDivId, strCheckId);
    console.error(strMsg);
    throw strMsg;
  }
  const bolValue = objCheck.checked;
  return bolValue;
}

export function GetCheckBoxObjInDiv(strDivId: string, strCheckId: string): HTMLInputElement {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objCheck: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strCheckId);
  return objCheck;
}

export function GetButtonHtmlInDiv(strDivId: string, strButtonId: string): string {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrButton = objDiv.getElementsByTagName('button');
  const arrElements = GetArray(arrButton);
  const objButton: HTMLButtonElement = <HTMLButtonElement>(
    arrElements.find((x) => x.id == strButtonId)
  );
  if (objButton == null) {
    const strMsg = Format('在层:[{0}]内，不存在按钮:[{1}], 请检查！', strDivId, strButtonId);
    console.error(strMsg);
    throw strMsg;
  }
  const strValue = objButton.innerHTML;
  return strValue;
}
export function GetButtonHtml(strButtonId: string): string {
  const objButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById(strButtonId);

  if (objButton == null) {
    const strMsg = Format('在文档内，不存在按钮:[{0}], 请检查！', strButtonId);
    console.error(strMsg);
    throw strMsg;
  }
  const strValue = objButton.innerHTML;
  return strValue;
}
export function SetCheckBoxValueByIdInDiv(strDivId: string, strCheckId: string, bolValue: boolean) {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objCheck: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strCheckId);
  if (objCheck == null) {
    const strMsg = Format('在层:[{0}]内，不存在复选框:[{1}], 请检查！', strDivId, strCheckId);
    console.error(strMsg);
    throw strMsg;
  }
  objCheck.checked = bolValue;
}

export function CheckControlExist(
  divName: string,
  strControlType: string,
  strControlId: string,
): void {
  if (IsNullOrEmpty(strControlType) == true) {
    const strMsg = Format('在层:{0}中查找控件:[{1}]时, 类型不能为空！', divName, strControlId);
    console.error(strMsg);
    throw strMsg;
  }
  const objDiv = <HTMLDivElement>document.getElementById(divName);
  if (objDiv == null) {
    const strMsg = Format('层:{0}不存在, 请检查！', divName);
    console.error(strMsg);
    throw strMsg;
  }
  const arrInput = objDiv.getElementsByTagName(strControlType);
  const arrElements = GetArray(arrInput);
  const arrElementsSel = arrElements.filter((x) => x.id == strControlId);

  if (arrElementsSel.length == 0) {
    const strMsg = Format(
      '在层:{0}中, 类型为:{1}的控件:{2}不存在, 请检查！',
      divName,
      strControlType,
      strControlId,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

/*
 * 检查层是否存在？
 */
export function CheckDivExist(divName: string): void {
  const objDiv = <HTMLDivElement>document.getElementById(divName);
  if (objDiv == null) {
    const strMsg = Format('层:{0}不存在, 请检查！', divName);
    console.error(strMsg);
    throw strMsg;
  }
}

export function SetButtonHtmlInDiv(strDivId: string, strButtonId: string, strValue: string) {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrButton = objDiv.getElementsByTagName('button');
  const arrElements = GetArray(arrButton);
  const objButton: HTMLInputElement = <HTMLInputElement>(
    arrElements.find((x) => x.id == strButtonId)
  );
  if (objButton == null) {
    const strMsg = Format('在层:[{0}]内，不存在按钮:[{1}], 请检查！', strDivId, strButtonId);
    console.error(strMsg);
    throw strMsg;
  }
  objButton.innerHTML = strValue;
}

export function getTdObjByIdInDiv(strDivName: string, strTdId: string): HTMLTableColElement {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
  const arrElements0 = objDiv.getElementsByTagName('td');
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLTableColElement = <HTMLTableColElement>(
    arrElements.find((x) => x.id == strTdId)
  );
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[td]的元素:[{1}], 请检查！',
      strDivName,
      strTdId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}
export function getTrObjByIdInDiv(strDivName: string, strTrId: string): HTMLTableRowElement {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
  const arrElements0 = objDiv.getElementsByTagName('tr');
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLTableRowElement = <HTMLTableRowElement>(
    arrElements.find((x) => x.id == strTrId)
  );
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[tr]的元素:[{1}], 请检查！',
      strDivName,
      strTrId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}
export function GetCheckObjInDiv(strDivName: string, strCheckId: string): HTMLInputElement {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objInput: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strCheckId);
  if (objInput == null) {
    const strMsg = Format('在层:[{0}]内，不存在Input控件:[{1}], 请检查！', strDivName, strCheckId);
    console.error(strMsg);
    throw strMsg;
  }
  return objInput;
}
/**
 * 在层中根据Select对象的Id获取相关对象
 * @param strDivName: 层名
 * @param strSelectId: Select元素的Id
 * @returns 返回获取的对象，如果不存在就抛出错误信息
 */
export function GetSelectObjInDiv(strDivName: string, strSelectId: string): HTMLSelectElement {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
  const arrSelect = objDiv.getElementsByTagName('select');
  const arrElements = GetArray(arrSelect);
  const sltDdl: HTMLSelectElement = <HTMLSelectElement>arrElements.find((x) => x.id == strSelectId);
  if (sltDdl == null) {
    const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', strDivName, strSelectId);
    console.error(strMsg);
    throw strMsg;
  }
  return sltDdl;
}

/*
 * 设置使特定关键字的复选框被选
 * strKeyId:关键字
 */
export function SetCheckedItem4KeyId(divList: HTMLDivElement, strKeyId: string) {
  //获取指定数据列表层

  //根据className获取数据列表层中的所有复选框
  const chkItems: HTMLCollectionOf<Element> = divList.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
  //把集合转换成Array
  const arrChkLitems: Array<HTMLInputElement> = GetArray(chkItems) as Array<HTMLInputElement>;
  //根据关键字(strKeyId)获取相应的控件id
  const strCtrlId = `chk${strKeyId}`;
  //在控件Array中查找第一个id为strCtrlId的复选框
  const chk4KeyId = arrChkLitems.find((x) => x.id == strCtrlId);

  //let chk4KeyId: HTMLInputElement = document.getElementById(strCtrlId);
  console.log(chk4KeyId);
  if (chk4KeyId == null) {
    const strMsg = `关键字:${strCtrlId}没有找到，请联系管理员！`;
    console.log(strMsg);
    //alert(strMsg);
    return;
  }
  chk4KeyId.checked = true;
}
export function GetLabelValueInDiv(strDivId: string, strLabelId: string): string {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrlabel = objDiv.getElementsByTagName('label');
  const arrElements = GetArray(arrlabel);
  const objLabel: HTMLLabelElement = <HTMLLabelElement>arrElements.find((x) => x.id == strLabelId);
  if (objLabel == null) {
    const strMsg = Format('在层:[{0}]内，不存在Label:[{1}], 请检查！', strDivId, strLabelId);
    console.error(strMsg);
    throw strMsg;
  }
  const strValue = objLabel.innerText;
  return strValue;
}

/**
 * 在层中根据Button对象的Id获取相关对象
 * @param strDivName: 层名
 * @param strButtonId: Button元素的Id
 * @returns 返回获取的对象，如果不存在就抛出错误信息
 */
export function GetButtonObjInDiv(strDivName: string, strButtonId: string): HTMLButtonElement {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
  const arrButton = objDiv.getElementsByTagName('button');
  const arrElements = GetArray(arrButton);
  const objButton: HTMLButtonElement = <HTMLButtonElement>(
    arrElements.find((x) => x.id == strButtonId)
  );
  if (objButton == null) {
    const strMsg = Format('在层:[{0}]内，不存在按钮:[{1}], 请检查！', strDivName, strButtonId);
    console.error(strMsg);
    throw strMsg;
  }
  return objButton;
}

export function HideButtonInDiv(strDivName: string, strButtonId: string) {
  const objButton = getButtonObjByIdInDiv(strDivName, strButtonId);
  objButton.style.visibility = 'hidden';
  objButton.style.display = 'none';
}
export function ShowDivInDivV2(strDivName: string, strDivIdIn: string) {
  const objDiv = getDivObjByIdInDiv(strDivName, strDivIdIn);
  objDiv.style.visibility = 'visible';
  objDiv.style.display = 'table-row';
}
export function HideDivInDiv(strDivName: string, strDivIdIn: string) {
  const objDiv = getDivObjByIdInDiv(strDivName, strDivIdIn);
  objDiv.style.visibility = 'hidden';
  objDiv.style.display = 'none';
}
export function HideDivInDivObj(objDiv: HTMLDivElement, strDivIdIn: string) {
  CheckDivExistObj(objDiv);
  const objDiv1 = GetDivObjInDivObj(objDiv, strDivIdIn);

  objDiv1.style.visibility = 'hidden';
  objDiv1.style.display = 'none';
}

export function ShowDivInDivObj(objDiv: HTMLDivElement, strDivIdIn: string) {
  CheckDivExistObj(objDiv);
  const objDiv1 = GetDivObjInDivObj(objDiv, strDivIdIn);
  objDiv1.style.visibility = 'visible';
  objDiv1.style.display = 'block';
}

export function getButtonObjByIdInDiv(strDivName: string, strButtonId: string): HTMLButtonElement {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
  const arrElements0 = objDiv.getElementsByTagName('button');
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLButtonElement = <HTMLButtonElement>(
    arrElements.find((x) => x.id == strButtonId)
  );
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[button]的元素:[{1}], 请检查！',
      strDivName,
      strButtonId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}

export function getDivObjById(strDivName: string): HTMLDivElement {
  const objDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivName);
  if (objDiv == null) {
    const strMsg = Format('层:[{0}]在该界面不存在！', strDivName);
    console.error(strMsg);
    throw strMsg;
  }
  return objDiv;
}
export function getDivObjByIdInDiv(strDivName: string, strDivIdIn: string): HTMLDivElement {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
  const arrElements0 = objDiv.getElementsByTagName('div');
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLDivElement = <HTMLDivElement>arrElements.find((x) => x.id == strDivIdIn);
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[div]的元素:[{1}], 请检查！',
      strDivName,
      strDivIdIn,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}

export function getDivObjLstInDiv(strDivName: string, strDivIdIn: string): Array<HTMLDivElement> {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
  const arrElements0 = objDiv.getElementsByTagName('div');
  const arrElements = GetArray(arrElements0);
  const arrElement_Sel = <Array<HTMLDivElement>>arrElements.filter((x) => x.id == strDivIdIn);
  if (arrElement_Sel == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[div]的元素:[{1}], 请检查！',
      strDivName,
      strDivIdIn,
    );
    console.error(strMsg);
  }
  return arrElement_Sel;
}
export function ShowDivInDiv(strDivName: string, strDivIdIn: string) {
  const objDiv = getDivObjByIdInDiv(strDivName, strDivIdIn);
  objDiv.style.visibility = 'visible';
  objDiv.style.display = 'block';
}

export function ShowButtonInDiv(strDivName: string, strButtonId: string) {
  const objButton = getButtonObjByIdInDiv(strDivName, strButtonId);
  objButton.style.visibility = 'visible';
  objButton.style.display = 'block';
}
/*
 * 获取列表中第一个选中的复选框的关键字
 */
export function GetFirstCheckedKeyIdInDiv(divListName: string): string {
  const divList: HTMLDivElement = document.getElementById(divListName) as HTMLDivElement;
  const chkItems: HTMLCollectionOf<Element> = divList.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
  const arrChkLitems: Array<HTMLInputElement> = GetArray(chkItems) as Array<HTMLInputElement>;

  const chkCheckedItems: Array<HTMLInputElement> = arrChkLitems.filter((x) => x.checked == true);

  const intCheckedCount = chkCheckedItems.length;
  for (let i = 0; i < intCheckedCount; i++) {
    const chkItem: HTMLInputElement = chkCheckedItems[i] as HTMLInputElement;
    if (chkItem.id == 'chkTabHead') continue;
    const strId = chkItem.id;
    const strKey = strId.substring(3);
    return strKey;
  }
  //    alert(intCount.toString() + "::" + intCheckedCount.toString());
  return '';
}
export function getAObjByIdInDiv(strDivName: string, strAId: string): HTMLAnchorElement {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
  const arrElements0 = objDiv.getElementsByTagName('a');
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLAnchorElement = <HTMLAnchorElement>arrElements.find((x) => x.id == strAId);
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[a]的元素:[{1}], 请检查！',
      strDivName,
      strAId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}
export function getLiObjByIdInDiv(strDivName: string, strLiId: string): HTMLLIElement {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
  const arrElements0 = objDiv.getElementsByTagName('li');
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLLIElement = <HTMLLIElement>arrElements.find((x) => x.id == strLiId);
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[li]的元素:[{1}], 请检查！',
      strDivName,
      strLiId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}
export function SetInputReadOnly(
  strDivName: string,
  strControlId: string,
  bolIsReadOnly: boolean,
): void {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
  const arrElements0 = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLInputElement = <HTMLInputElement>(
    arrElements.find((x) => x.id == strControlId)
  );
  if (objElement == null) {
    const strMsg = Format('在层:[{0}]内，不存在元素:[{1}], 请检查！', strDivName, strControlId);
    console.error(strMsg);
    return;
  }
  objElement.readOnly = bolIsReadOnly;
}
export function SetInputDisable(
  objDiv: HTMLDivElement,
  strControlId: string,
  bolIsDisabled: boolean,
): void {
  CheckDivExistObj(objDiv);
  const arrElements0 = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLInputElement = <HTMLInputElement>(
    arrElements.find((x) => x.id == strControlId)
  );
  if (objElement == null) {
    const strMsg = Format('在层:[{0}]内，不存在元素:[{1}], 请检查！', objDiv.id, strControlId);
    console.error(strMsg);
    return;
  }
  objElement.disabled = bolIsDisabled;
}
/*
 * 把字符串列表转换成唯一性字符串列表
 *
 */
export function GetDistinctArray(arrStrLst: Array<string>): Array<string> {
  const setStrLst = new Set(arrStrLst);
  const arrStrLstNew: Array<string> = Array.from(setStrLst);
  return arrStrLstNew;
}
/*
 * 集合的交
 */
export function intersectSets(arrA: Array<string>, arrB: Array<string>): Array<string> {
  const intersection = new Set<string>();
  const setA = new Set(arrA);
  const setB = new Set(arrB);

  for (const ele of setB) {
    if (setA.has(ele)) {
      intersection.add(ele);
    }
  }
  return Array.from(intersection);
}

/*
 * 集合的并
 */
export function unionSet(setA: Array<string>, setB: Array<string>) {
  const union = new Set(setA);
  //const setA = new Set(arrA);
  //const setB = new Set(arrB);

  for (const elem of setB) {
    union.add(elem);
  }
  return union;
}
/*
 * 集合的差
 */
export function differenceSet(setA: Array<string>, setB: Array<string>) {
  const difference = new Set(setA);
  for (const ele of setB) {
    difference.delete(ele);
  }
  return difference;
}

/*
 * 是否超集
 */
export function isSuperset(arrA: Array<string>, arrSubset: Array<string>) {
  const setA = new Set(arrA);
  const subset = new Set(arrSubset);

  for (const elem of subset) {
    if (!setA.has(elem)) {
      return false;
    }
  }
  return true;
}

/**
 * 在层中根据Input对象的Id获取相关对象
 * @param strDivName: 层名
 * @param strInputId: Input元素的Id
 * @returns 返回获取的对象，如果不存在就抛出错误信息
 */
export function GetUniDivInDoc(strDivName: string): HTMLDivElement {
  const arrDiv0 = document.getElementsByTagName('div');
  const arrDiv = GetArray(arrDiv0);
  const arrDiv_Sel = arrDiv.filter((x) => x.id == strDivName);
  if (arrDiv_Sel.length == 0) {
    const strMsg = Format('层:[{0}]在该界面不存在！', strDivName);
    console.error(strMsg);
    throw strMsg;
  }
  if (arrDiv_Sel.length > 1) {
    const strMsg = Format('层:[{0}]在该界面有多个，请检查！', strDivName);
    console.error(strMsg);
    throw strMsg;
  }
  const objDiv = arrDiv0[0];
  return objDiv;
}

/**
 * 在层中根据Input对象的Id获取相关对象
 * @param strDivName: 层名
 * @param strInputId: Input元素的Id
 * @returns 返回获取的对象，如果不存在就抛出错误信息
 */
export function GetInputObjInDiv(strDivName: string, strInputId: string): HTMLInputElement {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objInput: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strInputId);
  if (objInput == null) {
    const strMsg = Format('在层:[{0}]内，不存在Input控件:[{1}], 请检查！', strDivName, strInputId);
    console.error(strMsg);
    throw strMsg;
  }
  return objInput;
}

export function GetLi_Empty(strClassName: string): HTMLLIElement {
  const objLi = document.createElement('li');
  objLi.className = strClassName;
  return objLi;
}

export function GetUl_Empty(strClassName: string): HTMLUListElement {
  const objUl = document.createElement('ul');
  objUl.className = strClassName;
  return objUl;
}

export function GetI_Empty(strClassName: string): HTMLElement {
  const objI = document.createElement('i');
  objI.className = strClassName;
  return objI;
}

export function GetSpan_Empty(strClassName: string): HTMLSpanElement {
  const objSpan: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
  if (IsNullOrEmpty(strClassName) == false) {
    if (strClassName.indexOf(' ') > -1) {
      objSpan.className = strClassName;
    } else {
      objSpan.classList.add(strClassName);
    }
  }
  return objSpan;
}

//export function GetLabel_Empty(strClassName: string): HTMLLabelElement {
//    const objSpan: HTMLLabelElement = <HTMLLabelElement>document.createElement("label");
//    if (IsNullOrEmpty(strClassName) == false) {
//        if (strClassName.indexOf(' ') > -1) {
//            objSpan.className = strClassName;
//        }
//        else {
//            objSpan.classList.add(strClassName);
//        }
//    }
//    return objSpan;
//}
export function GetBr_Empty(): HTMLBRElement {
  const objBr: HTMLBRElement = <HTMLBRElement>document.createElement('br');

  return objBr;
}

export function GetB_Empty(strClassName: string): HTMLElement {
  const objB = document.createElement('b');
  if (IsNullOrEmpty(strClassName) == false) {
    if (strClassName.length > 0) {
      objB.className = strClassName;
    }
  }
  return objB;
}
//export function GetBr_Empty(strClassName: string): HTMLBRElement {
//    const objBr = document.createElement("br");
//    objBr.className = strClassName;
//    return objBr;
//}

export function GetTextAreaEmpty(strClassName: string): HTMLTextAreaElement {
  const objTextArea = document.createElement('textarea');
  objTextArea.className = strClassName;
  return objTextArea;
}
export function GetTextBox_Empty(strClassName: string): HTMLInputElement {
  const objTextBox = document.createElement('input');
  objTextBox.type = 'text';
  objTextBox.className = strClassName;
  return objTextBox;
}
export function GetSelect_Empty(strClassName: string): HTMLSelectElement {
  const objSelect = document.createElement('select');
  objSelect.className = strClassName;
  return objSelect;
}

export function GetTable_Empty(strClassName: string): HTMLTableElement {
  const objTable = document.createElement('table');
  objTable.className = strClassName;
  return objTable;
}
export function GetTr_Empty(strClassName: string): HTMLTableRowElement {
  const objTableRow = document.createElement('tr');
  objTableRow.className = strClassName;
  return objTableRow;
}

export function GetTd_Empty(strClassName: string): HTMLTableCellElement {
  const objTableCell = document.createElement('td');
  objTableCell.className = strClassName;
  return objTableCell;
}
export function GetDiv_Empty(strClassName: string): HTMLDivElement {
  const objDiv = document.createElement('div');
  if (IsNullOrEmpty(strClassName) == false) {
    objDiv.className = strClassName;
  }
  return objDiv;
}
export function GetTh_Empty(strClassName: string): HTMLTableCellElement {
  const objTh = document.createElement('th');
  if (IsNullOrEmpty(strClassName) == false) {
    objTh.className = strClassName;
  }
  return objTh;
}

export function GetImg_Empty(strClassName: string): HTMLImageElement {
  const objImg = document.createElement('img');
  if (IsNullOrEmpty(strClassName) == false) {
    objImg.className = strClassName;
  }
  return objImg;
}

export function GetP_Empty(strClassName: string): HTMLParagraphElement {
  const objP = document.createElement('p');
  if (IsNullOrEmpty(strClassName) == false) {
    objP.className = strClassName;
  }
  return objP;
}

export function GetDList_Empty(strClassName: string): HTMLDListElement {
  const objDList = document.createElement('dl');
  if (IsNullOrEmpty(strClassName) == false) {
    objDList.className = strClassName;
  }
  return objDList;
}

export function GetDd_Empty(strClassName: string): HTMLElement {
  const objDd = document.createElement('dd');
  if (IsNullOrEmpty(strClassName) == false) {
    objDd.className = strClassName;
  }
  return objDd;
}
export function GetHeading_Empty(strClassName: string): HTMLHeadingElement {
  const objHeading = document.createElement('h6');
  if (IsNullOrEmpty(strClassName) == false) {
    objHeading.className = strClassName;
  }
  return objHeading;
}
export function GetLabel_Empty(strClassName: string): HTMLLabelElement {
  const objLabel = document.createElement('label');
  if (IsNullOrEmpty(strClassName) == false) {
    objLabel.className = strClassName;
  }
  return objLabel;
}

export function GetButton_Empty(strClassName: string): HTMLButtonElement {
  const objButton = document.createElement('button');
  if (IsNullOrEmpty(strClassName) == false) {
    objButton.className = strClassName;
  }
  return objButton;
}

export function GetA_Empty(strClassName: string): HTMLAnchorElement {
  const objA = document.createElement('a');
  if (IsNullOrEmpty(strClassName) == false) {
    objA.className = strClassName;
  }
  return objA;
}

export function GetEm_Empty(strClassName: string): HTMLElement {
  const objEm = document.createElement('em');
  if (IsNullOrEmpty(strClassName) == false) {
    objEm.className = strClassName;
  }
  return objEm;
}
export function GetCheckedKeyLstsInDiv(strDivName4List: string): Array<string> {
  const divList: HTMLDivElement = document.getElementById(strDivName4List) as HTMLDivElement;
  const chkItems: HTMLCollectionOf<Element> = divList.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
  const arrChkLitems: Array<HTMLInputElement> = GetArray(chkItems) as Array<HTMLInputElement>;

  const chkCheckedItems: Array<HTMLInputElement> = arrChkLitems.filter((x) => x.checked == true);

  const arrSelectedKeys: Array<string> = chkCheckedItems
    .filter((x) => x.id != 'chkTabHead')
    .map((x) => {
      const strId = x.id;
      const strKey = strId.substring(3);
      const strKeyLst = x.getAttribute('keyValueLst');
      if (strKeyLst == null) return strKey;
      return strKeyLst;
    });
  return arrSelectedKeys;
}

export function GetFirstCheckedKeyLstInDiv(divListName: string): string {
  const divList: HTMLDivElement = document.getElementById(divListName) as HTMLDivElement;
  const chkItems: HTMLCollectionOf<Element> = divList.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
  const arrChkLitems: Array<HTMLInputElement> = GetArray(chkItems) as Array<HTMLInputElement>;

  const chkCheckedItems: Array<HTMLInputElement> = arrChkLitems.filter((x) => x.checked == true);

  const intCheckedCount = chkCheckedItems.length;
  for (let i = 0; i < intCheckedCount; i++) {
    const chkItem: HTMLInputElement = chkCheckedItems[i] as HTMLInputElement;
    if (chkItem.id == 'chkTabHead') continue;
    const strId = chkItem.id;
    const strKey = strId.substring(3);
    const strKeyLst = chkItem.getAttribute('keyValueLst');
    if (strKeyLst == null) return strKey;
    return strKeyLst;
  }
  //    alert(intCount.toString() + "::" + intCheckedCount.toString());
  return '';
}

export function GetFirstCheckedKeyLstInDivObj(objDiv: HTMLDivElement): string {
  // const divList: HTMLDivElement = document.getElementById(divListName) as HTMLDivElement;
  CheckDivExistObj(objDiv);
  const chkItems: HTMLCollectionOf<Element> = objDiv.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
  const arrChkLitems: Array<HTMLInputElement> = GetArray(chkItems) as Array<HTMLInputElement>;

  const chkCheckedItems: Array<HTMLInputElement> = arrChkLitems.filter((x) => x.checked == true);

  const intCheckedCount = chkCheckedItems.length;
  for (let i = 0; i < intCheckedCount; i++) {
    const chkItem: HTMLInputElement = chkCheckedItems[i] as HTMLInputElement;
    if (chkItem.id == 'chkTabHead') continue;
    const strId = chkItem.id;
    const strKey = strId.substring(3);
    const strKeyLst = chkItem.getAttribute('keyValueLst');
    if (strKeyLst == null) return strKey;
    return strKeyLst;
  }
  //    alert(intCount.toString() + "::" + intCheckedCount.toString());
  return '';
}
/**
 * 获取在层下Select控件的值
 * @param strDivId : 层Id
 * @param strSelectId 下拉框Id
 * @returns 字符型
 **/
export function IsExistDiv(strDivId: string): boolean {
  const objDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivId);
  if (objDiv == null) {
    return false;
  }
  return true;
}

export function GetArraySvg(arr: any): Array<SVGTextElement> {
  const arrLst: Array<SVGTextElement> = new Array<SVGTextElement>();
  for (let i = 0; i < arr.length; i++) {
    const chk: SVGTextElement = arr[i]; // as HTMLElement;
    arrLst.push(chk);
  }
  return arrLst;
}

export function GetInputValueInDivObj(objDiv: HTMLDivElement | null, strInputId: string): string {
  if (objDiv == null) return '';
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objInput: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strInputId);
  if (objInput == null) {
    const strMsg = Format('在层:[{0}]内，不存在文本框:[{1}], 请检查！', objDiv.id, strInputId);
    console.error(strMsg);
    throw strMsg;
  }
  const strValue = objInput.value;
  return strValue;
}

export function GetInputValueInDivObjN(objDiv: HTMLDivElement | null, strInputId: string): number {
  if (objDiv == null) return 0;
  const strValue = GetInputValueInDivObj(objDiv, strInputId);
  if (strValue == '') return 0;
  const intValue = Number(strValue);
  return intValue;
}

export function GetCheckBoxValueInDivObj(objDiv: HTMLDivElement, strCheckId: string): boolean {
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objCheck: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strCheckId);
  if (objCheck == null) {
    const strMsg = Format('在层:[{0}]内，不存在复选框:[{1}], 请检查！', objDiv.id, strCheckId);
    console.error(strMsg);
    throw strMsg;
  }
  const bolValue = objCheck.checked;
  return bolValue;
}

export function SetCheckBoxValueByIdInDivObj(
  objDiv: HTMLDivElement,
  strCheckId: string,
  bolValue: boolean,
) {
  CheckDivExistObj(objDiv);
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objCheck: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strCheckId);
  if (objCheck == null) {
    const strMsg = Format('在层:[{0}]内，不存在复选框:[{1}], 请检查！', objDiv.id, strCheckId);
    console.error(strMsg);
    throw strMsg;
  }
  objCheck.checked = bolValue;
}

/**
 * 获取在层下Select控件的值
 * @param strDivId : 层Id
 * @param strSelectId 下拉框Id
 * @returns 字符型
 **/
export function GetSelectValueInDivObj(objDiv: HTMLDivElement | null, strSelectId: string): string {
  if (objDiv == null) {
    const strMsg = Format('所给层为空, 请检查！');
    console.error(strMsg);
    throw strMsg;
  }
  const arrSelect = objDiv.getElementsByTagName('select');
  const arrElements = GetArray(arrSelect);
  const sltDdl: HTMLSelectElement = <HTMLSelectElement>arrElements.find((x) => x.id == strSelectId);
  if (sltDdl == null) {
    const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', objDiv.id, strSelectId);
    console.error(strMsg);
    throw strMsg;
  }
  if (sltDdl.selectedIndex < 0) return '';
  const objOptionSel = sltDdl.options[sltDdl.selectedIndex];
  const strValue = objOptionSel.value;
  return strValue;
}

export function SetSelectValueByIdInDivObj(
  objDiv: HTMLDivElement | null,
  strSelectId: string,
  strValue: string,
) {
  if (objDiv == null) {
    const strMsg = Format('层不存在, 请检查！');
    console.error(strMsg);
    throw strMsg;
  }
  const arrSelect = objDiv.getElementsByTagName('select');
  const arrElements = GetArray(arrSelect);
  const sltDdl: HTMLSelectElement = <HTMLSelectElement>arrElements.find((x) => x.id == strSelectId);
  if (sltDdl == null) {
    const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', objDiv.id, strSelectId);
    console.error(strMsg);
    throw strMsg;
  }

  //    const objSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strSelectId);
  //    if (objSelect == null) {
  //        console.error(`在设置下拉框值时，控件：${strSelectId}不存在！`);
  //        return;
  //    }
  if (sltDdl.options.length == 0) {
    if (IsNullOrEmpty(strValue) == true) return;
    const strMsg = Format(
      '在层:[{0}]内，下拉框:[{1}]可能还没有绑定, 请检查！',
      objDiv.id,
      strSelectId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(strValue) == true) {
    sltDdl.options[0].selected = true;
  }
  for (let i = 0; i < sltDdl.options.length; i++) {
    if (sltDdl.options[i].value == strValue) {
      sltDdl.selectedIndex = i;
      return;
    }
  }
  if (IsNullOrEmpty(strValue) == false) {
    const strMsg = Format(
      '在层:[{0}]内，下拉框:[{1}]不能赋值:[{2}], 请检查！',
      objDiv.id,
      strSelectId,
      strValue,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

export function ClearSelectValueByIdInDivObj(objDiv: HTMLDivElement, strSelectId: string) {
  const arrSelect = objDiv.getElementsByTagName('select');
  const arrElements = GetArray(arrSelect);
  const sltDdl: HTMLSelectElement = <HTMLSelectElement>arrElements.find((x) => x.id == strSelectId);
  if (sltDdl == null) {
    const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', objDiv.id, strSelectId);
    console.error(strMsg);
    throw strMsg;
  }

  if (sltDdl.options.length == 0) {
    const strMsg = Format(
      '在层:[{0}]内，下拉框:[{1}]可能还没有绑定, 请检查！',
      objDiv.id,
      strSelectId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  sltDdl.selectedIndex = 0;
}
/**
 * 在层中根据Select对象的Id获取相关对象
 * @param strDivName: 层名
 * @param strSelectId: Select元素的Id
 * @returns 返回获取的对象，如果不存在就抛出错误信息
 */
export function GetSelectObjInDivObj(
  objDiv: HTMLDivElement,
  strSelectId: string,
): HTMLSelectElement {
  CheckDivExistObj(objDiv);
  const arrSelect = objDiv.getElementsByTagName('select');
  const arrElements = GetArray(arrSelect);
  const sltDdl: HTMLSelectElement = <HTMLSelectElement>arrElements.find((x) => x.id == strSelectId);
  if (sltDdl == null) {
    const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', objDiv.id, strSelectId);
    console.error(strMsg);
    throw strMsg;
  }
  return sltDdl;
}
/**
 * 在层中根据Select对象的Id获取相关对象
 * @param strDivName: 层名
 * @param strSelectId: Select元素的Id
 * @returns 返回获取的对象，如果不存在就抛出错误信息
 */
export function GetSelectedIndexInDivObj(objDiv: HTMLDivElement, strSelectId: string): number {
  const arrSelect = objDiv.getElementsByTagName('select');
  const arrElements = GetArray(arrSelect);
  const sltDdl: HTMLSelectElement = <HTMLSelectElement>arrElements.find((x) => x.id == strSelectId);
  if (sltDdl == null) {
    const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', objDiv.id, strSelectId);
    console.error(strMsg);
    throw strMsg;
  }
  return sltDdl.selectedIndex;
}
export function SetLabelHtmlByIdInDivObj(
  objDiv: HTMLDivElement,
  strLabelId: string,
  strValue: string,
) {
  CheckDivExistObj(objDiv);
  const arrLabel = objDiv.getElementsByTagName('label');
  const arrElements = GetArray(arrLabel);
  const objLabel: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strLabelId);
  if (objLabel == null) {
    const strMsg = Format('在层:[{0}]内，不存在Label框:[{1}], 请检查！', objDiv.id, strLabelId);
    console.error(strMsg);
    throw strMsg;
  }
  objLabel.innerHTML = strValue;
}

export function SetImgSrcInDivObj(objDiv: HTMLDivElement, strImgId: string, strSrc: string) {
  CheckDivExistObj(objDiv);
  const arrImg = objDiv.getElementsByTagName('img');
  const arrElements = GetArray(arrImg);
  const objImg: HTMLImageElement = <HTMLImageElement>arrElements.find((x) => x.id == strImgId);
  if (objImg == null) {
    const strMsg = Format('在层:[{0}]内，不存在Image元素:[{1}], 请检查！', objDiv.id, strImgId);
    console.error(strMsg);
    throw strMsg;
  }
  objImg.src = strSrc;
}

export function GetLabelHtmlInDivObj(objDiv: HTMLDivElement, strLabelId: string): string {
  const arrlabel = objDiv.getElementsByTagName('label');
  const arrElements = GetArray(arrlabel);
  const objLabel: HTMLLabelElement = <HTMLLabelElement>arrElements.find((x) => x.id == strLabelId);
  if (objLabel == null) {
    const strMsg = Format('在层:[{0}]内，不存在Label:[{1}], 请检查！', objDiv.id, strLabelId);
    console.error(strMsg);
    throw strMsg;
  }
  const strValue = objLabel.innerHTML;
  return strValue;
}

/**
 * 获取在层下Select控件的值
 * @param strDivId : 层Id
 * @param strSelectId 下拉框Id
 * @returns 字符型
 **/
export function GetSelectSelectedIndexInDivObj(
  objDiv: HTMLDivElement,
  strSelectId: string,
): number {
  CheckDivExistObj(objDiv);
  const arrSelect = objDiv.getElementsByTagName('select');
  const arrElements = GetArray(arrSelect);
  const sltDdl: HTMLSelectElement = <HTMLSelectElement>arrElements.find((x) => x.id == strSelectId);
  if (sltDdl == null) {
    const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', objDiv.id, strSelectId);
    console.error(strMsg);
    throw strMsg;
  }
  return sltDdl.selectedIndex;
}

export function SetButtonHtmlInDivObj(
  objDiv: HTMLDivElement,
  strButtonId: string,
  strValue: string,
) {
  CheckDivExistObj(objDiv);
  const arrButton = objDiv.getElementsByTagName('button');
  const arrElements = GetArray(arrButton);
  const objButton: HTMLInputElement = <HTMLInputElement>(
    arrElements.find((x) => x.id == strButtonId)
  );
  if (objButton == null) {
    const strMsg = Format('在层:[{0}]内，不存在按钮:[{1}], 请检查！', objDiv.id, strButtonId);
    console.error(strMsg);
    throw strMsg;
  }
  objButton.innerHTML = strValue;
}

export function GetCheckedKeyIdsInDivObj(divList: HTMLDivElement): Array<string> {
  CheckDivExistObj(divList);
  const chkItems: HTMLCollectionOf<Element> = divList.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
  const arrChkLitems: Array<HTMLInputElement> = GetArray(chkItems) as Array<HTMLInputElement>;

  const chkCheckedItems: Array<HTMLInputElement> = arrChkLitems.filter((x) => x.checked == true);

  const arrSelectedKeys: Array<string> = chkCheckedItems
    .filter((x) => x.id != 'chkTabHead')
    .map((x) => {
      const strId = x.id;
      const strKey = strId.substring(3);
      return strKey;
    });
  return arrSelectedKeys;
}

/*
 * 设置使特定关键字的复选框被选
 * strKeyId:关键字
 */
export function SetCheckedItem4KeyIdInDiv(divList: HTMLDivElement, strKeyId: string) {
  //根据className获取数据列表层中的所有复选框
  const chkItems: HTMLCollectionOf<Element> = divList.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
  //把集合转换成Array
  const arrChkLitems: Array<HTMLInputElement> = GetArray(chkItems) as Array<HTMLInputElement>;
  //根据关键字(strKeyId)获取相应的控件id
  const strCtrlId = `chk${strKeyId}`;
  //在控件Array中查找第一个id为strCtrlId的复选框
  const chk4KeyId = arrChkLitems.find((x) => x.id == strCtrlId);

  //let chk4KeyId: HTMLInputElement = document.getElementById(strCtrlId);
  console.log(chk4KeyId);
  if (chk4KeyId == null) {
    const strMsg = `关键字:${strCtrlId}没有找到，请联系管理员！`;
    console.log(strMsg);
    //alert(strMsg);
    return;
  }
  chk4KeyId.checked = true;
}

export function getTdObjByIdInDivObj(objDiv: HTMLDivElement, strTdId: string): HTMLTableColElement {
  const arrElements0 = objDiv.getElementsByTagName('td');
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLTableColElement = <HTMLTableColElement>(
    arrElements.find((x) => x.id == strTdId)
  );
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[td]的元素:[{1}], 请检查！',
      objDiv.id,
      strTdId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}

export function getTrObjByIdInDivObj(objDiv: HTMLDivElement, strTrId: string): HTMLTableRowElement {
  const arrElements0 = objDiv.getElementsByTagName('tr');
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLTableRowElement = <HTMLTableRowElement>(
    arrElements.find((x) => x.id == strTrId)
  );
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[tr]的元素:[{1}], 请检查！',
      objDiv.id,
      strTrId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}

export function getTrObjLstInDivObj(
  objDiv: HTMLDivElement,
  strTrId: string,
): Array<HTMLTableRowElement> {
  const arrElements0 = objDiv.getElementsByTagName('tr');
  const arrElements = GetArray(arrElements0);
  const objElement_Sel = <Array<HTMLTableRowElement>>arrElements.filter((x) => x.id == strTrId);
  if (objElement_Sel.length == 0) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[tr]的元素:[{1}], 请检查！',
      objDiv.id,
      strTrId,
    );
    console.error(strMsg);
  }
  return objElement_Sel;
}
export function getTrObjLstInDivObjN(
  objDiv: HTMLDivElement,
  strTrId: string,
): Array<HTMLTableRowElement> {
  const arrElements0 = objDiv.getElementsByTagName('tr');
  const arrElements = GetArray(arrElements0);
  const objElement_Sel = <Array<HTMLTableRowElement>>arrElements.filter((x) => x.id == strTrId);
  if (objElement_Sel.length == 0) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[tr]的元素:[{1}], 请检查！',
      objDiv.id,
      strTrId,
    );
    // console.error(strMsg);
  }
  return objElement_Sel;
}
/*
 * 检查层是否存在？
 */
export function CheckDivExistObj(objDiv: HTMLDivElement | null): void {
  if (objDiv == null) {
    const strMsg = Format('层不存在, 请检查！');
    console.error(strMsg);
    throw strMsg;
  }
}

/**
 * 在层中根据Input对象的Id获取相关对象
 * @param strDivName: 层名
 * @param strInputId: Input元素的Id
 * @returns 返回获取的对象，如果不存在就抛出错误信息
 */
export function GetInputObjInDivObj(objDiv: HTMLDivElement, strInputId: string): HTMLInputElement {
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objInput: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strInputId);
  if (objInput == null) {
    const strMsg = Format('在层:[{0}]内，不存在Input控件:[{1}], 请检查！', objDiv.id, strInputId);
    console.error(strMsg);
    throw strMsg;
  }
  return objInput;
}

export function GetInputObjInDivObjN(objDiv: HTMLDivElement, strInputId: string): HTMLInputElement {
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objInput: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strInputId);
  if (objInput == null) {
    const strMsg = Format('在层:[{0}]内，不存在Input控件:[{1}], 请检查！', objDiv.id, strInputId);
    console.log(strMsg);
  }
  return objInput;
}

export function CheckControlExistInDivObj(
  objDiv: HTMLDivElement | null,
  strControlType: string,
  strControlId: string,
): void {
  if (objDiv == null) {
    const strMsg = Format('层不存在, 请检查！');
    console.error(strMsg);
    throw strMsg;
  }
  if (IsNullOrEmpty(strControlType) == true) {
    const strMsg = Format('在层:{0}中查找控件:[{1}]时, 类型不能为空！', objDiv.id, strControlId);
    console.error(strMsg);
    throw strMsg;
  }
  const arrInput = objDiv.getElementsByTagName(strControlType);
  const arrElements = GetArray(arrInput);
  const arrElementsSel = arrElements.filter((x) => x.id == strControlId);

  if (arrElementsSel.length == 0) {
    const strMsg = Format(
      '在层:{0}中, 类型为:{1}的控件:{2}不存在, 请检查！',
      objDiv.id,
      strControlType,
      strControlId,
    );
    console.error(strMsg);
    throw strMsg;
  }
}

export function GetLabelValueInDivObj(objDiv: HTMLDivElement, strLabelId: string): string {
  const arrlabel = objDiv.getElementsByTagName('label');
  const arrElements = GetArray(arrlabel);
  const objLabel: HTMLLabelElement = <HTMLLabelElement>arrElements.find((x) => x.id == strLabelId);
  if (objLabel == null) {
    const strMsg = Format('在层:[{0}]内，不存在Label:[{1}], 请检查！', objDiv.id, strLabelId);
    console.error(strMsg);
    throw strMsg;
  }
  const strValue = objLabel.innerText;
  return strValue;
}

export function IsExistDivObj(objDiv: HTMLDivElement): boolean {
  if (objDiv == null) {
    return false;
  }
  return true;
}

export function HideButtonInDivObj(objDiv: HTMLDivElement, strButtonId: string) {
  const objButton = getButtonObjByIdInDivObj(objDiv, strButtonId);
  objButton.style.visibility = 'hidden';
  objButton.style.display = 'none';
}

export function HideSelectInDivObj(objDiv: HTMLDivElement, strSelectId: string) {
  const objSelect = GetSelectObjInDivObj(objDiv, strSelectId);
  objSelect.style.visibility = 'hidden';
  objSelect.style.display = 'none';
}

export function getButtonObjByIdInDivObj(
  objDiv: HTMLDivElement,
  strButtonId: string,
): HTMLButtonElement {
  CheckDivExistObj(objDiv);
  const arrElements0 = objDiv.getElementsByTagName('button');
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLButtonElement = <HTMLButtonElement>(
    arrElements.find((x) => x.id == strButtonId)
  );
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[button]的元素:[{1}], 请检查！',
      objDiv.id,
      strButtonId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}

export function GetButtonObjLstInDivObj(
  objDiv: HTMLDivElement,
  strButtonId: string,
): Array<HTMLButtonElement> {
  CheckDivExistObj(objDiv);
  const arrElements0 = objDiv.getElementsByTagName('button');
  const arrElements = GetArray(arrElements0);
  const arrElement_Sel = <Array<HTMLButtonElement>>arrElements.filter((x) => x.id == strButtonId);
  if (arrElement_Sel.length == 0) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[button]的元素:[{1}], 请检查！',
      objDiv.id,
      strButtonId,
    );
    console.error(strMsg);
  }
  return arrElement_Sel;
}
export function GetButtonObjLstInDivObjN(
  objDiv: HTMLDivElement,
  strButtonId: string,
): Array<HTMLButtonElement> {
  CheckDivExistObj(objDiv);
  const arrElements0 = objDiv.getElementsByTagName('button');
  const arrElements = GetArray(arrElements0);
  const arrElement_Sel = <Array<HTMLButtonElement>>arrElements.filter((x) => x.id == strButtonId);
  if (arrElement_Sel.length == 0) {
    // const strMsg = Format(
    //   '在层:[{0}]内，不存在类型为:[button]的元素:[{1}], 请检查！',
    //   objDiv.id,
    //   strButtonId,
    // );
    // console.error(strMsg);
  }
  return arrElement_Sel;
}

export function GetSpanObjLstInDivObjN(
  objDiv: HTMLDivElement,
  strSpanId: string,
): Array<HTMLSpanElement> {
  CheckDivExistObj(objDiv);
  const arrElements0 = objDiv.getElementsByTagName('span');
  const arrElements = GetArray(arrElements0);
  const arrElement_Sel = <Array<HTMLButtonElement>>arrElements.filter((x) => x.id == strSpanId);
  if (arrElement_Sel.length == 0) {
    // const strMsg = Format(
    //   '在层:[{0}]内，不存在类型为:[button]的元素:[{1}], 请检查！',
    //   objDiv.id,
    //   strButtonId,
    // );
    // console.error(strMsg);
  }
  return arrElement_Sel;
}

export function ShowButtonInDivObj(objDiv: HTMLDivElement, strButtonId: string) {
  const objButton = getButtonObjByIdInDivObj(objDiv, strButtonId);
  objButton.style.visibility = 'visible';
  objButton.style.display = 'block';
}

export function GetButtonObjInDivObj(
  objDiv: HTMLDivElement,
  strButtonId: string,
): HTMLButtonElement {
  CheckDivExistObj(objDiv);
  const arrButton = objDiv.getElementsByTagName('button');
  const arrElements = GetArray(arrButton);
  const objButton: HTMLButtonElement = <HTMLButtonElement>(
    arrElements.find((x) => x.id == strButtonId)
  );
  if (objButton == null) {
    const strMsg = Format('在层:[{0}]内，不存在按钮:[{1}], 请检查！', objDiv.id, strButtonId);
    console.error(strMsg);
    throw strMsg;
  }
  return objButton;
}

export function SetSpanHtmlInDivObj(objDiv: HTMLDivElement, strSpanId: string, strValue: string) {
  CheckDivExistObj(objDiv);
  const arrLabel = objDiv.getElementsByTagName('span');
  const arrElements = GetArray(arrLabel);
  const arrLabel_Sel = arrElements.filter((x) => x.id == strSpanId);
  if (arrLabel_Sel == null || arrLabel_Sel.length == 0) {
    const strMsg = Format('在层:[{0}]内，不存在Span框:[{1}], 请检查！', objDiv.id, strSpanId);
    console.error(strMsg);
    throw strMsg;
  }
  if (arrLabel_Sel.length > 1) {
    const strMsg = Format('在层:[{0}]内，存在多个Span框:[{1}], 请检查！', objDiv.id, strSpanId);
    console.error(strMsg);
    throw strMsg;
  }
  const objLabel = arrLabel_Sel[0] as HTMLSpanElement;
  if (objLabel == null) {
    const strMsg = Format('在层:[{0}]内，不存在Span框:[{1}], 请检查！', objDiv.id, strSpanId);
    console.error(strMsg);
    throw strMsg;
  }
  objLabel.innerHTML = strValue;
}

export function SetAHtmlInDivObj(objDiv: HTMLDivElement, strSpanId: string, strValue: string) {
  CheckDivExistObj(objDiv);
  const arrA = objDiv.getElementsByTagName('a');
  const arrElements = GetArray(arrA);
  const arrLabel_Sel = arrElements.filter((x) => x.id == strSpanId);
  if (arrLabel_Sel == null || arrLabel_Sel.length == 0) {
    const strMsg = Format('在层:[{0}]内，不存在A超链接:[{1}], 请检查！', objDiv.id, strSpanId);
    console.error(strMsg);
    throw strMsg;
  }
  if (arrLabel_Sel.length > 1) {
    const strMsg = Format('在层:[{0}]内，存在多个A超链接:[{1}], 请检查！', objDiv.id, strSpanId);
    console.error(strMsg);
    throw strMsg;
  }
  const objA = arrLabel_Sel[0] as HTMLAnchorElement;
  if (objA == null) {
    const strMsg = Format('在层:[{0}]内，不存在超链接:[{1}], 请检查！', objDiv.id, strSpanId);
    console.error(strMsg);
    throw strMsg;
  }
  objA.innerHTML = strValue;
}
export function SetPHtmlInDivObj(objDiv: HTMLDivElement, strSpanId: string, strValue: string) {
  CheckDivExistObj(objDiv);
  const arrP = objDiv.getElementsByTagName('p');
  const arrElements = GetArray(arrP);
  const objP: HTMLParagraphElement = <HTMLParagraphElement>(
    arrElements.find((x) => x.id == strSpanId)
  );
  if (objP == null) {
    const strMsg = Format('在层:[{0}]内，不存在P段落:[{1}], 请检查！', objDiv.id, strSpanId);
    console.error(strMsg);
    throw strMsg;
  }
  objP.innerHTML = strValue;
}

export function SetDivHtmlInDivObj(objDiv: HTMLDivElement, strDivId: string, strValue: string) {
  CheckDivExistObj(objDiv);
  const arrDiv = objDiv.getElementsByTagName('div');
  const arrElements = GetArray(arrDiv);
  const objP: HTMLDivElement = <HTMLDivElement>arrElements.find((x) => x.id == strDivId);
  if (objP == null) {
    const strMsg = Format('在层:[{0}]内，不存在Div:[{1}], 请检查！', objDiv.id, strDivId);
    console.error(strMsg);
    throw strMsg;
  }
  objP.innerHTML = strValue;
}

export function SetUlHtmlInDivObj(objDiv: HTMLDivElement, strUlId: string, strValue: string) {
  CheckDivExistObj(objDiv);
  const arrUl = objDiv.getElementsByTagName('ul');
  const arrElements = GetArray(arrUl);
  const objP: HTMLUListElement = <HTMLUListElement>arrElements.find((x) => x.id == strUlId);
  if (objP == null) {
    const strMsg = Format('在层:[{0}]内，不存在Ul:[{1}], 请检查！', objDiv.id, strUlId);
    console.error(strMsg);
    throw strMsg;
  }
  objP.innerHTML = strValue;
}
export function SetPHtmlInDivObj4Exist(
  objDiv: HTMLDivElement,
  strSpanId: string,
  strValue: string,
) {
  CheckDivExistObj(objDiv);
  const arrP = objDiv.getElementsByTagName('p');
  const arrElements = GetArray(arrP);
  const objP: HTMLParagraphElement = <HTMLParagraphElement>(
    arrElements.find((x) => x.id == strSpanId)
  );
  if (objP == null) {
    return;
  }
  objP.innerHTML = strValue;
}
export function findAllDivs(element: any) {
  const divs = new Array<HTMLDivElement>();
  const childElements0 = element.children;
  const childElements = GetArray(childElements0);
  for (let i = 0; i < childElements.length; i++) {
    const childElement = childElements[i];
    if (childElement.tagName === 'DIV') {
      const objEle = childElement as HTMLDivElement;
      divs.push(objEle);
    }
    // 递归调用，查找子元素的子元素
    const nestedDivs = findAllDivs(childElement);
    divs.push(...nestedDivs);
  }
  return divs;
}

export function findAllTBodys(element: any) {
  const divs = new Array<HTMLTableSectionElement>();
  const childElements0 = element.children;
  const childElements = GetArray(childElements0);
  for (let i = 0; i < childElements.length; i++) {
    const childElement = childElements[i];
    if (childElement.tagName === 'TBODY') {
      const objEle = childElement as HTMLTableSectionElement;
      divs.push(objEle);
    }
    // 递归调用，查找子元素的子元素
    const nestedDivs = findAllTBodys(childElement);
    divs.push(...nestedDivs);
  }
  return divs;
}

export function GetDivObjInDivObj(
  objDiv: HTMLDivElement | null,
  strDivIdIn: string,
): HTMLDivElement {
  if (objDiv == null) {
    const strMsg = Format('提供的层对象为空(null), 请检查！');
    console.error(strMsg);
    throw strMsg;
  }
  const arrElements0 = objDiv.getElementsByTagName('div');
  // const arrElements0 = findAllDivs(objDiv);
  const arrElements = GetArray(arrElements0);

  const objElement: HTMLDivElement = <HTMLDivElement>arrElements.find((x) => x.id == strDivIdIn);
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[div]的元素:[{1}], 请检查！',
      objDiv.id,
      strDivIdIn,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}
export function GetDivObjInDivObjN(
  objDiv: HTMLDivElement | null,
  strDivIdIn: string,
): HTMLDivElement {
  if (objDiv == null) {
    const strMsg = Format('提供的层对象为空(null), 请检查！');
    console.error(strMsg);
    throw strMsg;
  }
  //  const arrElements0 =  objDiv.getElementsByTagName('div');
  const arrElements0 = findAllDivs(objDiv);
  const arrElements = GetArray(arrElements0);

  const objElement: HTMLDivElement = <HTMLDivElement>arrElements.find((x) => x.id == strDivIdIn);
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[div]的元素:[{1}], 请检查！',
      objDiv.id,
      strDivIdIn,
    );
    console.log(strMsg);
    // throw strMsg;
  }
  return objElement;
}
export function getDivObjLstInDivObj(
  objDiv: HTMLDivElement | null,
  strDivIdIn: string,
): Array<HTMLDivElement> {
  if (objDiv == null) {
    const strMsg = Format('提供的层对象为空(null), 请检查！');
    console.error(strMsg);
    throw strMsg;
  }
  //  const arrElements0 =  objDiv.getElementsByTagName('div');
  const arrElements0 = findAllDivs(objDiv);
  const arrElements = GetArray(arrElements0);

  const arrElement_Sel = <Array<HTMLDivElement>>arrElements.filter((x) => x.id == strDivIdIn);
  if (arrElement_Sel == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[div]的元素:[{1}], 请检查！',
      objDiv.id,
      strDivIdIn,
    );
    console.error(strMsg);
  }
  return arrElement_Sel;
}

export function getSpanObjLstInDivObj(
  objDiv: HTMLDivElement | null,
  strSpanIdIn: string,
): Array<HTMLSpanElement> {
  if (objDiv == null) {
    const strMsg = Format('提供的层对象为空(null), 请检查！');
    console.error(strMsg);
    throw strMsg;
  }
  const arrElements0 = objDiv.getElementsByTagName('span');

  const arrElements = GetArray(arrElements0);

  const arrElement_Sel = <Array<HTMLSpanElement>>arrElements.filter((x) => x.id == strSpanIdIn);
  if (arrElement_Sel == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[span]的元素:[{1}], 请检查！',
      objDiv.id,
      strSpanIdIn,
    );
    console.error(strMsg);
  }
  return arrElement_Sel;
}

export function GetTBodyObjInDivObj(
  objDiv: HTMLDivElement | null,
  strDivIdIn: string,
): HTMLTableSectionElement {
  if (objDiv == null) {
    const strMsg = Format('提供的层对象为空(null), 请检查！');
    console.error(strMsg);
    throw strMsg;
  }
  const arrElements0 = objDiv.getElementsByTagName('tbody');
  // const arrElements01 = document.createElement('tbody');
  // const arrElements0 = findAllDivs(objDiv);
  const arrElements = GetArray(arrElements0);

  const objElement: HTMLTableSectionElement = <HTMLTableSectionElement>(
    arrElements.find((x) => x.id == strDivIdIn)
  );
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[tbody]的元素:[{1}], 请检查！',
      objDiv.id,
      strDivIdIn,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}

export function GetCheckObjInDivObj(objDiv: HTMLDivElement, strCheckId: string): HTMLInputElement {
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objInput: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strCheckId);
  if (objInput == null) {
    const strMsg = Format('在层:[{0}]内，不存在Input控件:[{1}], 请检查！', objDiv.id, strCheckId);
    console.error(strMsg);
    throw strMsg;
  }
  return objInput;
}

export function GetButtonHtmlInDivObj(objDiv: HTMLDivElement, strButtonId: string): string {
  const arrButton = objDiv.getElementsByTagName('button');
  const arrElements = GetArray(arrButton);
  const objButton: HTMLButtonElement = <HTMLButtonElement>(
    arrElements.find((x) => x.id == strButtonId)
  );
  if (objButton == null) {
    const strMsg = Format('在层:[{0}]内，不存在按钮:[{1}], 请检查！', objDiv.id, strButtonId);
    console.error(strMsg);
    throw strMsg;
  }
  const strValue = objButton.innerHTML;
  return strValue;
}

export function GetCheckedKeyLstsInDivObj(divList: HTMLDivElement): Array<string> {
  const chkItems: HTMLCollectionOf<Element> = divList.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
  const arrChkLitems: Array<HTMLInputElement> = GetArray(chkItems) as Array<HTMLInputElement>;

  const chkCheckedItems: Array<HTMLInputElement> = arrChkLitems.filter((x) => x.checked == true);

  const arrSelectedKeys: Array<string> = chkCheckedItems
    .filter((x) => x.id != 'chkTabHead')
    .map((x) => {
      const strId = x.id;
      const strKey = strId.substring(3);
      const strKeyLst = x.getAttribute('keyValueLst');
      if (strKeyLst == null) return strKey;
      return strKeyLst;
    });
  return arrSelectedKeys;
}

export function GetCheckBoxObjInDivObj(
  objDiv: HTMLDivElement,
  strCheckId: string,
): HTMLInputElement {
  CheckDivExistObj(objDiv);
  const arrInput = objDiv.getElementsByTagName('input');
  const arrElements = GetArray(arrInput);
  const objCheck: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strCheckId);
  return objCheck;
}

export function getAObjInDivObj(objDiv: HTMLDivElement, strAId: string): HTMLAnchorElement {
  const arrElements0 = objDiv.getElementsByTagName('a');
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLAnchorElement = <HTMLAnchorElement>arrElements.find((x) => x.id == strAId);
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[a]的元素:[{1}], 请检查！',
      objDiv.id,
      strAId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}

export function GetAObjLstInDivObj(
  objDiv: HTMLDivElement,
  strAId: string,
): Array<HTMLAnchorElement> {
  const arrElements0 = objDiv.getElementsByTagName('a');
  const arrElements = GetArray(arrElements0);
  const arrElement_Sel = <Array<HTMLAnchorElement>>arrElements.filter((x) => x.id == strAId);
  if (arrElement_Sel == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[a]的元素:[{1}], 请检查！',
      objDiv.id,
      strAId,
    );
    console.error(strMsg);
  }
  return arrElement_Sel;
}
export function GetLiObjInDivObj(objDiv: HTMLDivElement, strLiId: string): HTMLLIElement {
  const arrElements0 = objDiv.getElementsByTagName('li');
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLLIElement = <HTMLLIElement>arrElements.find((x) => x.id == strLiId);
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[li]的元素:[{1}], 请检查！',
      objDiv.id,
      strLiId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}

export function GetLiObjLstInDivObj(objDiv: HTMLDivElement, strLiId: string): Array<HTMLLIElement> {
  const arrElements0 = objDiv.getElementsByTagName('li');
  const arrElements = <Array<HTMLLIElement>>GetArray(arrElements0);
  if (strLiId == '') return arrElements;
  const arrElement_Sel = <Array<HTMLLIElement>>arrElements.filter((x) => x.id == strLiId);
  if (arrElement_Sel == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[li]的元素:[{1}], 请检查！',
      objDiv.id,
      strLiId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return arrElement_Sel;
}
/*
 * 获取列表中第一个选中的复选框的关键字
 */
export function GetFirstCheckedKeyIdInDivObj(divList: HTMLDivElement): string {
  // const divList: HTMLDivElement = document.getElementById(divListName) as HTMLDivElement;
  const chkItems: HTMLCollectionOf<Element> = divList.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
  const arrChkLitems: Array<HTMLInputElement> = GetArray(chkItems) as Array<HTMLInputElement>;

  const chkCheckedItems: Array<HTMLInputElement> = arrChkLitems.filter((x) => x.checked == true);

  const intCheckedCount = chkCheckedItems.length;
  for (let i = 0; i < intCheckedCount; i++) {
    const chkItem: HTMLInputElement = chkCheckedItems[i] as HTMLInputElement;
    if (chkItem.id == 'chkTabHead') continue;
    const strId = chkItem.id;
    const strKey = strId.substring(3);
    return strKey;
  }
  //    alert(intCount.toString() + "::" + intCheckedCount.toString());
  return '';
}

export function SetTextAreaValueInDivObj(
  objDiv: HTMLDivElement,
  strInputId: string,
  strValue: string,
) {
  CheckDivExistObj(objDiv);
  // const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
  const arrInput = objDiv.getElementsByTagName('textarea');
  const arrElements = GetArray(arrInput);
  const objInput: HTMLInputElement = <HTMLInputElement>arrElements.find((x) => x.id == strInputId);
  if (objInput == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在文本框(textarea):[{1}], 请检查！',
      objDiv.id,
      strInputId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  objInput.value = strValue;
}

export function GetUlObjInDivObj(objDiv: HTMLDivElement, strUlId: string): HTMLUListElement {
  const arrUl = objDiv.getElementsByTagName('ul');
  const arrElements = GetArray(arrUl);
  const objUl = <HTMLUListElement>arrElements.find((x) => x.id == strUlId);
  if (objUl == null) {
    const strMsg = Format('在层:[{0}]内，不存在Ul:[{1}], 请检查！', objDiv.id, strUlId);
    console.error(strMsg);
    throw strMsg;
  }
  return objUl;
}
export function GetUlObjInDivObjN(objDiv: HTMLDivElement, strUlId: string): HTMLUListElement {
  const arrUl = objDiv.getElementsByTagName('ul');
  const arrElements = GetArray(arrUl);
  const objUl = <HTMLUListElement>arrElements.find((x) => x.id == strUlId);
  if (objUl == null) {
    const strMsg = Format('在层:[{0}]内，不存在Ul:[{1}], 请检查！', objDiv.id, strUlId);
    console.error(strMsg);
  }
  return objUl;
}
export function GetDlObjInDivObj(objDiv: HTMLDivElement, strDlId: string): HTMLDListElement {
  const arrUl = objDiv.getElementsByTagName('dl');
  const arrElements = GetArray(arrUl);
  const objUl = <HTMLDListElement>arrElements.find((x) => x.id == strDlId);
  if (objUl == null) {
    const strMsg = Format('在层:[{0}]内，不存在Ul:[{1}], 请检查！', objDiv.id, strDlId);
    console.error(strMsg);
    throw strMsg;
  }
  return objUl;
}

export function GetAllElementPropValueInDivObj(
  objDiv: HTMLDivElement,
  arrControlType: Array<string>,
  strPropName: string,
): Array<string> {
  try {
    CheckDivExistObj(objDiv);
    const arrValue = new Array<string>();
    for (const strControlType of arrControlType) {
      const objLst = objDiv.getElementsByTagName(strControlType);
      const arrElement = GetArray(objLst);
      for (const objElement of arrElement) {
        const strValue = objElement.getAttribute(strPropName);
        if (strValue != null) arrValue.push(strValue);
      }
    }
    return arrValue;
  } catch (e: any) {
    console.error(e);
    return [];
  }
}

/**
 * 隐藏表格行 (tr))
 **/
export function HideTrInDivObj(strDivName: HTMLDivElement, strTr: string) {
  const objTr = getTrObjByIdInDivObj(strDivName, strTr);
  objTr.style.visibility = 'hidden';
  objTr.style.display = 'none';
}

export function HideTd(strDivName: string, strTd: string) {
  const objTd = getTdObjByIdInDiv(strDivName, strTd);
  objTd.style.visibility = 'hidden';
  objTd.style.display = 'none';
}
/**
 * 显示表格行 (tr))
 **/
export function ShowTr(strDivName: string, strTr: string) {
  const objTr = getTrObjByIdInDiv(strDivName, strTr);
  objTr.style.visibility = 'visible';
  objTr.style.display = 'table-row';
}

export function HideTdObj(strDivName: string, objTd: HTMLTableRowElement) {
  objTd.style.visibility = 'hidden';
  objTd.style.display = 'none';
}
/**
 * 显示表格行 (tr))
 **/
export function ShowTrObj(objTr: HTMLTableRowElement) {
  objTr.style.visibility = 'visible';
  objTr.style.display = 'table-row';
}
export function HideTrObj(objTr: HTMLTableRowElement) {
  objTr.style.visibility = 'hidden';
  objTr.style.display = 'none';
}
export function ShowTrInDivObj(objDiv: HTMLDivElement, strTr: string) {
  const objTr = getTrObjByIdInDivObj(objDiv, strTr);
  objTr.style.visibility = 'visible';
  objTr.style.display = 'table-row';
}

export function ShowTrInDiv(strDivName: HTMLDivElement, strTr: string) {
  const objTr = getTrObjByIdInDivObj(strDivName, strTr);
  objTr.style.visibility = 'visible';
  objTr.style.display = 'table-row';
}

export function HideDivObj(objDiv: HTMLDivElement) {
  if (objDiv == null) {
    const strMsg = Format('层在该界面不存在！');
    console.error(strMsg);
    throw strMsg;
  }
  objDiv.style.display = 'none';
  objDiv.style.visibility = 'hidden'; //隐藏
  //alert(objDiv4SelectFile);
}

export function ShowDivObj(objDiv: HTMLDivElement) {
  if (objDiv == null) {
    const strMsg = Format('层在该界面不存在！');
    console.error(strMsg);
    throw strMsg;
  }
  //objDiv4SelectFile.style.float = "center";
  //objDiv4SelectFile.style.border = "1px";
  objDiv.style.display = 'block';
  objDiv.style.visibility = 'visible'; //显示
  //alert(objDiv4SelectFile);
}

export function getTableObjByIdInDivObj(
  objDiv: HTMLDivElement,
  strTabId: string,
): HTMLTableElement {
  CheckDivExistObj(objDiv);
  const arrElements0 = objDiv.getElementsByTagName('table');
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLTableElement = <HTMLTableElement>arrElements.find((x) => x.id == strTabId);
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[tr]的元素:[{1}], 请检查！',
      objDiv.id,
      strTabId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}

export function GetTextAreaValueInDivObj(objDiv: HTMLDivElement, strInputId: string): string {
  const arrInput = objDiv.getElementsByTagName('textarea');
  const arrElements = GetArray(arrInput);
  const objInput: HTMLTextAreaElement = <HTMLTextAreaElement>(
    arrElements.find((x) => x.id == strInputId)
  );
  if (objInput == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在文本框(textarea):[{1}], 请检查！',
      objDiv.id,
      strInputId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  const strValue = objInput.value;
  return strValue;
}

export function GetTextAreaObjInDivObj(
  objDiv: HTMLDivElement,
  strInputId: string,
): HTMLTextAreaElement {
  const arrInput = objDiv.getElementsByTagName('textarea');
  const arrElements = GetArray(arrInput);
  const objInput: HTMLTextAreaElement = <HTMLTextAreaElement>(
    arrElements.find((x) => x.id == strInputId)
  );
  if (objInput == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在文本框(textarea):[{1}], 请检查！',
      objDiv.id,
      strInputId,
    );
    console.error(strMsg);
    throw strMsg;
  }

  return objInput;
}
export function GetSpanObjInDivObj(objDiv: HTMLDivElement, strSpanId: string): HTMLSpanElement {
  CheckDivExistObj(objDiv);
  const arrSpan = objDiv.getElementsByTagName('span');
  const arrElements = GetArray(arrSpan);
  const objSpan: HTMLSpanElement = <HTMLSpanElement>arrElements.find((x) => x.id == strSpanId);
  if (objSpan == null) {
    const strMsg = Format('在层:[{0}]内，不存在Span控件:[{1}], 请检查！', objDiv.id, strSpanId);
    console.error(strMsg);
    throw strMsg;
  }
  return objSpan;
}

export function GetPObjInDivObj(objDiv: HTMLDivElement, strSpanId: string): HTMLParagraphElement {
  CheckDivExistObj(objDiv);
  const arrSpan = objDiv.getElementsByTagName('p');
  const arrElements = GetArray(arrSpan);
  const objSpan: HTMLParagraphElement = <HTMLParagraphElement>(
    arrElements.find((x) => x.id == strSpanId)
  );
  if (objSpan == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在Paragraph控件:[{1}], 请检查！',
      objDiv.id,
      strSpanId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objSpan;
}

export function GetSpanHtmlInDivObj(objDiv: HTMLDivElement, strSpanId: string): string {
  CheckDivExistObj(objDiv);
  const arrSpan = objDiv.getElementsByTagName('span');
  const arrElements = GetArray(arrSpan);
  const objSpan: HTMLSpanElement = <HTMLSpanElement>arrElements.find((x) => x.id == strSpanId);
  if (objSpan == null) {
    const strMsg = Format('在层:[{0}]内，不存在Span控件:[{1}], 请检查！', objDiv.id, strSpanId);
    console.error(strMsg);
    throw strMsg;
  }
  return objSpan.innerHTML;
}

export function GetSpanObjLstInDivObj(
  objDiv: HTMLDivElement,
  strSpanId: string,
): Array<HTMLSpanElement> {
  CheckDivExistObj(objDiv);
  const arrSpan = objDiv.getElementsByTagName('span');
  const arrElements = GetArray(arrSpan);
  const arrSpan_Sel = <Array<HTMLSpanElement>>arrElements.filter((x) => x.id == strSpanId);
  if (arrSpan_Sel == null) {
    const strMsg = Format('在层:[{0}]内，不存在Span控件:[{1}], 请检查！', objDiv.id, strSpanId);
    console.error(strMsg);
  }
  return arrSpan_Sel;
}

/**
 * 在层中根据Span对象的Id获取相关对象
 * @param strDivName: 层名
 * @param strSpanId: Span元素的Id
 * @returns 返回获取的对象，如果不存在就抛出错误信息
 */
export function GetSpanObjInDiv(strDivName: string, strSpanId: string): HTMLSpanElement {
  const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
  const arrSpan = objDiv.getElementsByTagName('span');
  const arrElements = GetArray(arrSpan);
  const objSpan: HTMLSpanElement = <HTMLSpanElement>arrElements.find((x) => x.id == strSpanId);
  if (objSpan == null) {
    const strMsg = Format('在层:[{0}]内，不存在Span控件:[{1}], 请检查！', strDivName, strSpanId);
    console.error(strMsg);
    throw strMsg;
  }
  return objSpan;
}

export class clsCommFunc4CtrlBak {
  public static insertAfter(newElement: HTMLElement, targetElement: HTMLElement) {
    const parent = targetElement.parentNode; //获取目标节点的父级标签
    if (parent == null) {
      console.error('当前结点没有父结点！', targetElement);
      return;
    }
    if (parent.lastChild == targetElement) {
      //如果目标节点正好是最后一个节点，使用appendChild插入
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement, targetElement.nextSibling); //一般情况下要取得目标节点的下一个节点，再使用insertBefore()方法。
    }
  }

  public static getHiddenValue(strDivName: string, strControlId: string): string {
    //if (IsNullOrEmpty(strControlType) == true) {
    //    const strMsg = Format("在层:{0}中查找控件:[{1}]时, 类型不能为空！", strDivName, strControlId);
    //    console.error(strMsg);
    //    throw (strMsg);
    //}

    const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
    const arrElements0 = objDiv.getElementsByTagName('input');
    const arrElements = GetArray(arrElements0);
    const objElement: HTMLInputElement = <HTMLInputElement>(
      arrElements.find((x) => x.id == strControlId)
    );
    if (objElement == null) {
      const strMsg = Format('在层:[{0}]内，不存在元素:[{1}], 请检查！', strDivName, strControlId);
      console.error(strMsg);
      return '';
    }
    return objElement.value;
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

  public static CheckControlExistInDivObj(
    divName: string,
    strControlType: string,
    strControlId: string,
  ): void {
    if (IsNullOrEmpty(strControlType) == true) {
      const strMsg = Format('在层:{0}中查找控件:[{1}]时, 类型不能为空！', divName, strControlId);
      console.error(strMsg);
      throw strMsg;
    }
    const objDiv = <HTMLDivElement>document.getElementById(divName);
    if (objDiv == null) {
      const strMsg = Format('层:{0}不存在, 请检查！', divName);
      console.error(strMsg);
      throw strMsg;
    }
    const arrInput = objDiv.getElementsByTagName(strControlType);
    const arrElements = GetArray(arrInput);
    const arrElementsSel = arrElements.filter((x) => x.id == strControlId);

    if (arrElementsSel.length == 0) {
      const strMsg = Format(
        '在层:{0}中, 类型为:{1}的控件:{2}不存在, 请检查！',
        divName,
        strControlType,
        strControlId,
      );
      console.error(strMsg);
      throw strMsg;
    }
  }
  public static SetSelectValueByIdInDivObj(
    strDivId: string,
    strSelectId: string,
    strValue: string,
  ) {
    const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
    const arrSelect = objDiv.getElementsByTagName('select');
    const arrElements = GetArray(arrSelect);
    const sltDdl: HTMLSelectElement = <HTMLSelectElement>(
      arrElements.find((x) => x.id == strSelectId)
    );
    if (sltDdl == null) {
      const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', strDivId, strSelectId);
      console.error(strMsg);
      throw strMsg;
    }

    //    const objSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strSelectId);
    //    if (objSelect == null) {
    //        console.error(`在设置下拉框值时，控件：${strSelectId}不存在！`);
    //        return;
    //    }
    if (sltDdl.options.length == 0) {
      if (IsNullOrEmpty(strValue) == true) return;
      const strMsg = Format(
        '在层:[{0}]内，下拉框:[{1}]可能还没有绑定, 请检查！',
        strDivId,
        strSelectId,
      );
      console.error(strMsg);
      throw strMsg;
    }
    for (let i = 0; i < sltDdl.options.length; i++) {
      if (sltDdl.options[i].value == strValue) {
        sltDdl.selectedIndex = i;
        return;
      }
    }
    if (IsNullOrEmpty(strValue) == false) {
      const strMsg = Format(
        '在层:[{0}]内，下拉框:[{1}]不能赋值:[{2}], 请检查！',
        strDivId,
        strSelectId,
        strValue,
      );
      console.error(strMsg);
      throw strMsg;
    }
  }
  public static SetCheckBoxValueByIdInDivObj(
    strDivId: string,
    strCheckId: string,
    bolValue: boolean,
  ) {
    const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
    const arrInput = objDiv.getElementsByTagName('input');
    const arrElements = GetArray(arrInput);
    const objCheck: HTMLInputElement = <HTMLInputElement>(
      arrElements.find((x) => x.id == strCheckId)
    );
    if (objCheck == null) {
      const strMsg = Format('在层:[{0}]内，不存在复选框:[{1}], 请检查！', strDivId, strCheckId);
      console.error(strMsg);
      throw strMsg;
    }
    objCheck.checked = bolValue;
  }

  public static SetInputValueInDivObj(strDivId: string, strInputId: string, strValue: string) {
    const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
    const arrInput = objDiv.getElementsByTagName('input');
    const arrElements = GetArray(arrInput);
    const objInput: HTMLInputElement = <HTMLInputElement>(
      arrElements.find((x) => x.id == strInputId)
    );
    if (objInput == null) {
      const strMsg = Format('在层:[{0}]内，不存在文本框:[{1}], 请检查！', strDivId, strInputId);
      console.error(strMsg);
      throw strMsg;
    }
    objInput.value = strValue;
  }
  public static SetLabelHtmlByIdInDivObj(strDivId: string, strLabelId: string, strValue: string) {
    const objDiv: HTMLDivElement = GetUniDivInDoc(strDivId);
    const arrLabel = objDiv.getElementsByTagName('label');
    const arrElements = GetArray(arrLabel);
    const objLabel: HTMLInputElement = <HTMLInputElement>(
      arrElements.find((x) => x.id == strLabelId)
    );
    if (objLabel == null) {
      const strMsg = Format('在层:[{0}]内，不存在Label框:[{1}], 请检查！', strDivId, strLabelId);
      console.error(strMsg);
      throw strMsg;
    }
    objLabel.innerHTML = strValue;
  }

  public static GetCheckedObjLstInDiv(strDivId: string): Array<HTMLInputElement> {
    const divList: HTMLDivElement = document.getElementById(strDivId) as HTMLDivElement;

    const arrInput = divList.getElementsByTagName('input');
    const arrElements = <Array<HTMLInputElement>>GetArray(arrInput);
    const arrCheckBox = arrElements.filter((x) => x.type == 'checkbox' && x.checked == true);
    if (arrCheckBox == null) {
      const strMsg = Format('在层:[{0}]内，不存在复选框, 请检查！', strDivId);
      console.error(strMsg);
      throw strMsg;
    }
    return arrCheckBox;
  }
  public static GetCheckedKeyIdsInDiv(strDivName4List: string): Array<string> {
    const divList: HTMLDivElement = document.getElementById(strDivName4List) as HTMLDivElement;
    const chkItems: HTMLCollectionOf<Element> = divList.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
    const arrChkLitems: Array<HTMLInputElement> = this.GetArray(
      chkItems,
    ) as Array<HTMLInputElement>;

    const chkCheckedItems: Array<HTMLInputElement> = arrChkLitems.filter((x) => x.checked == true);

    const arrSelectedKeys: Array<string> = chkCheckedItems
      .filter((x) => x.id != 'chkTabHead')
      .map((x) => {
        const strId = x.id;
        const strKey = strId.substring(3);
        return strKey;
      });
    return arrSelectedKeys;
  }

  //    /*
  //* 根据Id获取元素,在层(Div)内查找相应元素
  //*/
  //    public static getElementByIdInDivObj(strDivName: string, strControlType: string, strControlId: string): HTMLElement {
  //        if (IsNullOrEmpty(strControlType) == true) {
  //            const strMsg = Format("在层:{0}中查找控件:[{1}]时, 类型不能为空！", strDivName, strControlId);
  //            console.error(strMsg);
  //            throw (strMsg);
  //        }

  //   const objDiv: HTMLDivElement = GetUniDivInDoc(strDivName);
  //        if (objDiv == null) {
  //            const strMsg = Format("层:[{0}]在该界面不存在！", strDivName);
  //            throw (strMsg);
  //        }
  //        const arrElements0 = objDiv.getElementsByTagName(strControlType);
  //        const arrElements = GetArray(arrElements0);
  //        const objElement: HTMLElement = <HTMLElement>arrElements.find(x => x.id == strControlId);
  //        if (objElement == null) {
  //            const strMsg = Format("在层:[{0}]内，不存在类型为:[{1}]的元素:[{2}], 请检查！", strDivName, strControlType, strControlId);
  //console.error(strMsg);
  //            throw (strMsg);
  //        }
  //        return objElement;

  //    }

  /*
   * 绑定下拉框
   */
  public static BindDdl_CboObject(
    strDdlName: string,
    arrObjLst: Array<clsCboObject>,
    strValueFldName: string,
    strTextFldName: string,
    strTabCnName: string,
  ) {
    const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
    sltDdl.options.length = 0;
    const strText = `选${strTabCnName}...`;

    //const objArrayItem: HTMLOptionElement = new HTMLOptionElement();
    //objArrayItem.text = strText;
    //objArrayItem.value = "0";
    //sltDdl.options.add(objArrayItem);
    sltDdl.options.add(new Option(strText, '0'));

    let i = 0;
    for (i = 0; i < arrObjLst.length; i++) {
      const objCurr = arrObjLst[i];
      sltDdl.options.add(
        new Option(
          clsCboObject.GetFldValue(objCurr, strTextFldName),
          clsCboObject.GetFldValue(objCurr, strValueFldName),
        ),
      );
    }
  }

  public static HideA(strAName: string) {
    const objA: HTMLAnchorElement = <HTMLAnchorElement>document.getElementById(strAName);
    if (objA == null) {
      const strMsg = Format('超链接:[{0}]在该界面不存在！', strAName);
      console.error(strMsg);
      throw strMsg;
    }
    objA.style.display = 'none';
    objA.style.visibility = 'hidden'; //隐藏
    //alert(objDiv4SelectFile);
  }

  public static ShowA(strAName: string) {
    const objA: HTMLAnchorElement = <HTMLAnchorElement>document.getElementById(strAName);
    if (objA == null) {
      const strMsg = Format('超链接:[{0}]在该界面不存在！', strAName);
      console.error(strMsg);
      throw strMsg;
    }
    objA.style.display = 'block';
    objA.style.visibility = 'visible'; //显示
  }
}
