/*
 * 功能:为Web提供一些公共的功能函数
 * 版本:2021-06-06-01
 * 作者:潘以锋
 * */

// import 'bootstrap';
// import $ from "jquery";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { clsCboObject } from './clsCboObject';
import { GetArray, SetSpanHtmlByIdInDiv, getTrObjByIdInDivObj } from './clsCommFunc4Ctrl';
import { clsDataColumn } from './clsDataColumn';
import { clsGeneralTab } from './clsGeneralTab';
import { clsGeneralTabV } from './clsGeneralTabV';
import { clsOperateList } from './clsOperateList';
import { Format, IsNullOrEmpty } from './clsString';
import { stuPagerPara } from './stuPagerPara';

// import * as bootstrap from 'bootstrap';

export const arrSelectedKeys: Array<string> = new Array<string>();
export function ChkClick1(myThis: any) {
  const strId = myThis.id;
  if (strId == 'chkTabHead') return '';
  const strKey = strId.substring(3);
  if (myThis.checked == true) {
    if (arrSelectedKeys.indexOf(strKey) < 0) {
      arrSelectedKeys.push(strKey);
    }
  } else {
    const index = arrSelectedKeys.indexOf(strKey);
    if (index > -1) {
      arrSelectedKeys.splice(index, 1);
    }
  }
  let sstrKey = '';
  for (const strK of arrSelectedKeys) {
    sstrKey += `${strK},`;
  }
  SetSpanHtmlByIdInDiv('', 'spanResult', sstrKey);
}
// declare function ChkClick(myThis: any): void;
declare function SetAllCkechedKeys(myThis: any): void;
declare const document: any;
//declare const strWebRoot: string;

export class clsCommFunc4WebBak {
  public static BindEvent_Select(strSelectId: string, strEventName: string, func: () => void) {
    const objSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strSelectId);
    if (strEventName == 'onchange') {
      objSelect.onchange = function (this) {
        //alert("inner objSelect.onchange");
        func.call(this);
      };
    }
  }

  public static BindEvent_Input(strInputId: string, strEventName: string, func: () => void) {
    const objInput: HTMLInputElement = <HTMLInputElement>document.getElementById(strInputId);
    if (strEventName == 'onblur') {
      objInput.onblur = function (this) {
        //alert("inner objSelect.onchange");
        func.call(this);
      };
    }
  }
  //js获取网站根路径(站点及虚拟目录)，获得网站的根目录或虚拟目录的根地址
  public static getRootPath() {
    const strFullPath = document.location.href;
    const strPath = document.location.pathname;
    const pos = strFullPath.indexOf(strPath);
    const prePath = strFullPath.substring(0, pos);
    const postPath = strPath.substring(0, strPath.substring(1).indexOf('/') + 1);
    return prePath + postPath;
  }

  /*
   * 重新转向本项目新的Url地址
   */
  public static Redirect(LocUrl: string) {
    const strWebRoot = this.getRootPath();
    //console.log(strWebRoot);
    if (strWebRoot.indexOf('http://') >= 0 || strWebRoot.indexOf('https://') >= 0) {
      let strShortUrl = '';
      if (LocUrl.substring(0, 1) == '/') {
        strShortUrl = strWebRoot + LocUrl;
      } else {
        strShortUrl = `${strWebRoot}/${LocUrl}`;
      }

      //显示信息框
      //console.log(strShortUrl);
      window.location.href = strShortUrl;
      return;
    }
    const strProtocol = location.protocol;
    const strHost = location.host;
    // const strPathName = location.pathname;
    let strShortUrl = `/${strWebRoot}/${LocUrl}`;
    strShortUrl = strShortUrl.replace('//', '/');
    strShortUrl = strShortUrl.replace('//', '/');
    //显示信息框
    const strNewLink = `${strProtocol}//${strHost}${strShortUrl}`;

    console.log(strNewLink);
    window.location.href = strNewLink;
  }

  /*
   * 绑定下拉框
   */
  public static BindDdl_ObjLstWithSet(
    strDdlName: string,
    arrObjLst: Set<string>,
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

    // const i = 0;
    // arrObjLst.forEach(function (element, index, array) {
    arrObjLst.forEach(function (element) {
      // element: 指向当前元素的值
      // index: 指向当前索引
      // array: 指向Array对象本身
      //alert(element);
      sltDdl.options.add(new Option(element, element));
    });
  }

  /*
   * 绑定下拉框
   */
  public static BindDdl_ObjLst_V2(
    sltDdl: HTMLSelectElement,
    arrObjLst: Array<clsGeneralTab>,
    strValueFldName: string,
    strTextFldName: string,
    strTabCnName: string,
  ) {
    //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
    sltDdl.options.length = 0;
    const strText = strTabCnName;

    //const objArrayItem: HTMLOptionElement = new HTMLOptionElement();
    //objArrayItem.text = strText;
    //objArrayItem.value = "0";
    //sltDdl.options.add(objArrayItem);
    sltDdl.options.add(new Option(strText, '0'));
    let i = 0;
    for (i = 0; i < arrObjLst.length; i++) {
      const objCurr = arrObjLst[i];

      sltDdl.options.add(
        new Option(objCurr.GetFldValue(strTextFldName), objCurr.GetFldValue(strValueFldName)),
      );
    }
  }

  /*
   * 获取对象的所有属性名列表
   */
  public static GetObjKeys(myObj: object): Array<string> {
    const sstrKeys: Array<string> = [];
    for (const p1 in myObj) {
      if (Object.prototype.hasOwnProperty.call(myObj, p1)) sstrKeys.push(p1);
    }
    return sstrKeys;
  }

  /*
   * 把对象列表绑定到列表控件中，即把对象列表的值显示出来，这是一个老版本(V2)
   */
  public static BindTabBak(
    divContainer: HTMLDivElement,
    arrObjLst: Array<clsGeneralTab>,
    sstrFldName: Array<string>,
    sstrColHeader: Array<string>,
    strKey: string,
  ) {
    //const o = document.getElementById("divResult13");
    //if (o == null) {
    //    alert("divResult13不存在！");
    //    return;
    //}
    //const sstrFldName: Array<string> = new Array<string>();
    //const sstrColHeader: Array<string> = new Array<string>();
    //sstrFldName.push("identityID"); sstrColHeader.push("身份Id");
    //sstrFldName.push("identityDesc"); sstrColHeader.push("身份名");
    //sstrFldName.push("memo"); sstrColHeader.push("备注");
    const table: HTMLTableElement = document.createElement('table');
    table.id = 'tab4Bind';
    table.className = 'table table-striped table-condensed table-bordered';
    const tbody = document.createElement('tbody');

    //table.width = intWidth;
    //table.height = h;
    //table.border = 1;
    //table.height = h;
    table.border = '1';
    const intRowNum = arrObjLst.length;
    const intColNum = sstrFldName.length;
    const trHead: HTMLTableRowElement = document.createElement('tr');
    trHead.className = 'row-height';
    const td00: HTMLTableDataCellElement = document.createElement('td');
    const check00: HTMLInputElement = document.createElement('input');
    check00.type = 'checkbox';
    check00.id = `chkTabHead`;
    check00.name = 'chkTabHead';
    check00.className = 'CheckInTab';
    check00.onclick = function () {
      SetAllCkechedKeys(divContainer);
    };
    td00.appendChild(check00);
    trHead.appendChild(td00);
    for (let j = 0; j < intColNum; j++) {
      const td = document.createElement('td');
      td.id = Format('td{0}', sstrFldName[j]);
      const a1: HTMLAnchorElement = document.createElement('a');
      a1.nodeValue = sstrColHeader[j]; //i + "" + j;
      a1.text = sstrColHeader[j]; //i + "" + j;
      a1.href = `javascript:sortBy('${sstrFldName[j]}');`;
      //                td.innerHTML = objEN["identityDesc"];//i + "" + j;
      td.appendChild(a1);
      //td.appendChild(document.createTextNode(i + "" + j));
      //td.style.color = "#FF0000";
      td.className = 'text-center';
      trHead.appendChild(td);
    }
    tbody.appendChild(trHead);
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsGeneralTab = arrObjLst[i];
      const tr: HTMLTableRowElement = document.createElement('tr');
      tr.className = 'row-height';
      const td0: HTMLTableDataCellElement = document.createElement('td');
      const check: HTMLInputElement = document.createElement('input');
      check.type = 'checkbox';
      const strKeyValue = objEN.GetFldValue(strKey);
      check.id = `chk${strKeyValue}`;
      check.name = 'chkInTab';
      check.className = 'CheckInTab';
      td0.appendChild(check);
      tr.appendChild(td0);

      for (let j = 0; j < intColNum; j++) {
        const td = document.createElement('td');
        //                td.innerHTML = objEN["identityDesc"];//i + "" + j;
        td.id = Format('td{0}', sstrFldName[j]);
        td.innerHTML = objEN.GetFldValue(sstrFldName[j]); //i + "" + j;
        //td.appendChild(document.createTextNode(i + "" + j));
        //td.style.color = "#FF0000";
        td.className = 'text-center';
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    while (divContainer.childNodes.length > 0) {
      divContainer.removeChild(divContainer.childNodes[0]);
    }
    divContainer.appendChild(table);
    arrSelectedKeys.splice(0);
  }
  /*
   * 把对象列表绑定到列表控件中，即把对象列表的值显示出来，这是一个新的版本(V2)
   */
  public static BindTab(
    divContainer: HTMLDivElement,
    arrObjLst: Array<clsGeneralTab>,
    arrDataColumn: Array<clsDataColumn>,
    strKey: string,
  ) {
    //const o = document.getElementById("divResult13");
    //if (o == null) {
    //    alert("divResult13不存在！");
    //    return;
    //}
    //const sstrFldName: Array<string> = new Array<string>();
    //const sstrColHeader: Array<string> = new Array<string>();
    //sstrFldName.push("identityID"); sstrColHeader.push("身份Id");
    //sstrFldName.push("identityDesc"); sstrColHeader.push("身份名");
    //sstrFldName.push("memo"); sstrColHeader.push("备注");
    const table: HTMLTableElement = document.createElement('table');
    table.id = 'tab4Bind';
    table.className = 'table table-striped table-condensed table-bordered';
    const tbody = document.createElement('tbody');

    //table.width = intWidth;
    //table.height = h;
    //table.border = 1;
    //table.height = h;
    table.border = '1';
    const intRowNum = arrObjLst.length;
    const intColNum = arrDataColumn.length;
    const trHead: HTMLTableRowElement = document.createElement('tr');
    trHead.className = 'row-height';
    let check00: HTMLInputElement;
    let a1: HTMLAnchorElement;
    for (let j = 0; j < intColNum; j++) {
      const td = document.createElement('td');
      switch (arrDataColumn[j].columnType) {
        case 'CheckBox':
          check00 = document.createElement('input');
          check00.type = 'checkbox';
          check00.id = `chkTabHead`;
          check00.name = 'chkTabHead';
          check00.className = 'CheckInTab';
          check00.onclick = function () {
            SetAllCkechedKeys(divContainer);
          };
          td.appendChild(check00);

          break;
        case 'Label':
          a1 = document.createElement('a');
          a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
          a1.text = arrDataColumn[j].colHeader; //i + "" + j;
          a1.href = `javascript:sortBy('${arrDataColumn[j].sortBy}');`;
          //                td.innerHTML = objEN["identityDesc"];//i + "" + j;
          td.appendChild(a1);
          //td.appendChild(document.createTextNode(i + "" + j));
          //td.style.color = "#FF0000";

          td.className = 'text-center';
          break;
        case 'Button':
          try {
            const span1: HTMLSpanElement = document.createElement('span');
            //console.log(arrDataColumn[j].colHeader);
            span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;
            //                td.innerHTML = objEN["identityDesc"];//i + "" + j;
            td.appendChild(span1);
            //td.appendChild(document.createTextNode(i + "" + j));
            //td.style.color = "#FF0000";
            td.className = 'text-center';
          } catch (e: any) {
            const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
            throw strMsg;
          }
          break;
        case 'LinkButton':
          try {
            const a1: HTMLAnchorElement = document.createElement('a');
            a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            a1.text = arrDataColumn[j].colHeader; //i + "" + j;
            a1.href = `javascript:sortBy('${arrDataColumn[j].fldName}');`;
            //                td.innerHTML = objUserIdentityEN["identityDesc"];//i + "" + j;
            td.appendChild(a1);
            //td.appendChild(document.createTextNode(i + "" + j));
            //td.style.color = "#FF0000";
            td.className = 'text-center';
          } catch (e: any) {
            const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
            throw strMsg;
          }
          break;
      }
      trHead.appendChild(td);
    }
    tbody.appendChild(trHead);
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsGeneralTab = arrObjLst[i];
      const strKeyValue = objEN.GetFldValue(strKey);
      const tr: HTMLTableRowElement = document.createElement('tr');
      tr.className = 'row-height';
      tr.id = `tr${strKeyValue}`;
      let check: HTMLInputElement;
      for (let j = 0; j < intColNum; j++) {
        const td: HTMLTableDataCellElement = document.createElement('td');
        td.className = arrDataColumn[j].tdClass;
        switch (arrDataColumn[j].columnType) {
          case 'CheckBox':
            check = document.createElement('input');
            check.type = 'checkbox';

            check.id = `chk${strKeyValue}`;
            check.name = 'chkInTab';
            check.className = 'CheckInTab';
            if (IsNullOrEmpty(objEN.GetFldValue('CtrlId')) == false) {
              check.setAttribute('ctrlId', objEN.GetFldValue('CtrlId'));
            }
            td.appendChild(check);
            break;
          case 'Label':
            td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
            //td.appendChild(document.createTextNode(i + "" + j));
            //td.style.color = "#FF0000";
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
            tr.appendChild(td);
            break;
          case 'Button':
            try {
              const strKeyValue = objEN.GetFldValue(strKey);
              const btn1: HTMLElement = arrDataColumn[j].funcName(
                strKeyValue,
                arrDataColumn[j].text,
              );
              td.appendChild(btn1);
              //const btn1: HTMLButtonElement = document.createElement("Button");
              //btn1.innerText = arrDataColumn[j].text;
              //btn1.className = "btn btn-outline-info";
              //td.appendChild(btn1);
              ////td.appendChild(document.createTextNode(i + "" + j));
              ////td.style.color = "#FF0000";
              //td.className = "text-center";
            } catch (e: any) {
              console.error(e);
              const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
              throw strMsg;
            }
            break;
          case 'LinkButton':
            try {
              const strKeyValue = objEN.GetFldValue(strKey);
              const strText = objEN.GetFldValue(arrDataColumn[j].fldName);
              const btn1: HTMLElement = arrDataColumn[j].funcName(strKeyValue, strText);
              td.appendChild(btn1);
              //const btn1: HTMLButtonElement = document.createElement("Button");
              //btn1.innerText = arrDataColumn[j].text;
              //btn1.className = "btn btn-outline-info";
              //td.appendChild(btn1);
              ////td.appendChild(document.createTextNode(i + "" + j));
              ////td.style.color = "#FF0000";
              //td.className = "text-center";
            } catch (e: any) {
              console.error(e);
              const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
              throw strMsg;
            }
            break;
        }
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    while (divContainer.childNodes.length > 0) {
      divContainer.removeChild(divContainer.childNodes[0]);
    }
    divContainer.appendChild(table);
    arrSelectedKeys.splice(0);
  }

  /*
   * 把对象列表绑定到列表控件中，即把对象列表的值显示出来，这是一个新的版本(V3)
   */
  public static BindTabV3(
    divContainer: HTMLDivElement,
    arrObjLst: Array<clsGeneralTab>,
    arrDataColumn: Array<clsDataColumn>,
    strKey: string,
    objOperateList: clsOperateList,
  ) {
    //const o = document.getElementById("divResult13");
    //if (o == null) {
    //    alert("divResult13不存在！");
    //    return;
    //}
    //const sstrFldName: Array<string> = new Array<string>();
    //const sstrColHeader: Array<string> = new Array<string>();
    //sstrFldName.push("identityID"); sstrColHeader.push("身份Id");
    //sstrFldName.push("identityDesc"); sstrColHeader.push("身份名");
    //sstrFldName.push("memo"); sstrColHeader.push("备注");
    const table: HTMLTableElement = document.createElement('table');
    table.id = 'tab4Bind';
    table.className = 'table table-striped table-condensed table-bordered';
    const tbody = document.createElement('tbody');

    //table.width = intWidth;
    //table.height = h;
    //table.border = 1;
    //table.height = h;
    table.border = '1';
    const intRowNum = arrObjLst.length;
    const intColNum = arrDataColumn.length;
    const trHead: HTMLTableRowElement = document.createElement('tr');
    trHead.className = 'row-height';
    let check00: HTMLInputElement;
    let strSortExpress;
    for (let j = 0; j < intColNum; j++) {
      const td = document.createElement('td');
      td.id = Format('td{0}', arrDataColumn[j].fldName);
      switch (arrDataColumn[j].columnType) {
        case 'CheckBox':
          check00 = document.createElement('input');
          check00.type = 'checkbox';
          check00.id = `chkTabHead`;
          check00.name = 'chkTabHead';
          check00.className = 'CheckInTab';
          check00.onclick = function (this) {
            SetAllCkechedKeysV2(divContainer, this);
          };
          td.appendChild(check00);

          break;
        case 'Label':
          strSortExpress = arrDataColumn[j].sortBy;
          if (IsNullOrEmpty(strSortExpress) == true) {
            //如果没有排序字段，就不用超链接A

            const span1: HTMLSpanElement = document.createElement('span');
            span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;

            td.appendChild(span1);
          } else {
            const a1: HTMLAnchorElement = document.createElement('a');
            a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            a1.text = arrDataColumn[j].colHeader; //i + "" + j;

            a1.setAttribute('fldName', strSortExpress);

            a1.href = 'javascript:';

            a1.onclick = function (this) {
              objOperateList.SortBy(this);
            };
            td.appendChild(a1);
            //td.appendChild(document.createTextNode(i + "" + j));
            //td.style.color = "#FF0000";
          }

          td.className = 'text-center';
          break;
        case 'Button':
          try {
            const span1: HTMLSpanElement = document.createElement('span');
            //console.log(arrDataColumn[j].colHeader);
            span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;
            //                td.innerHTML = objEN["identityDesc"];//i + "" + j;
            td.appendChild(span1);
            //td.appendChild(document.createTextNode(i + "" + j));
            //td.style.color = "#FF0000";
            td.className = 'text-center';
          } catch (e: any) {
            const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
            throw strMsg;
          }
          break;
        case 'LinkButton':
          try {
            const a1: HTMLAnchorElement = document.createElement('a');
            a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            a1.text = arrDataColumn[j].colHeader; //i + "" + j;
            a1.href = `javascript:sortBy('${arrDataColumn[j].fldName}');`;
            //                td.innerHTML = objUserIdentityEN["identityDesc"];//i + "" + j;
            td.appendChild(a1);
            //td.appendChild(document.createTextNode(i + "" + j));
            //td.style.color = "#FF0000";
            td.className = 'text-center';
          } catch (e: any) {
            const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
            throw strMsg;
          }
          break;
      }
      trHead.appendChild(td);
    }
    tbody.appendChild(trHead);
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsGeneralTab = arrObjLst[i];
      const strKeyValue = objEN.GetFldValue(strKey);
      const tr: HTMLTableRowElement = document.createElement('tr');
      tr.className = 'row-height';
      tr.id = `tr${strKeyValue}`;
      let check: HTMLInputElement;
      for (let j = 0; j < intColNum; j++) {
        const td: HTMLTableDataCellElement = document.createElement('td');
        td.className = arrDataColumn[j].tdClass;
        switch (arrDataColumn[j].columnType) {
          case 'CheckBox':
            check = document.createElement('input');
            check.type = 'checkbox';

            check.id = `chk${strKeyValue}`;
            check.name = 'chkInTab';
            check.className = 'CheckInTab';
            if (IsNullOrEmpty(objEN.GetFldValue('CtrlId')) == false) {
              check.setAttribute('ctrlId', objEN.GetFldValue('CtrlId'));
            }
            td.appendChild(check);
            break;
          case 'Label':
            if (IsNullOrEmpty(arrDataColumn[j].fldName) == false) {
              td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
              if (IsNullOrEmpty(td.className)) {
                td.className = 'text-center';
              }
            } else {
              //调用外面的函数生成一个层放在该单元格中
              const div1 = arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text);
              if (div1 != null) {
                td.appendChild(div1);
              }
            }
            tr.appendChild(td);
            break;
          case 'Button':
            try {
              const strKeyValue = objEN.GetFldValue(strKey);
              const btn1: HTMLElement = arrDataColumn[j].funcName(
                strKeyValue,
                arrDataColumn[j].text,
              );
              td.appendChild(btn1);
              //const btn1: HTMLButtonElement = document.createElement("Button");
              //btn1.innerText = arrDataColumn[j].text;
              //btn1.className = "btn btn-outline-info";
              //td.appendChild(btn1);
              ////td.appendChild(document.createTextNode(i + "" + j));
              ////td.style.color = "#FF0000";
              //td.className = "text-center";
            } catch (e: any) {
              console.error(e);
              const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
              throw strMsg;
            }
            break;
          case 'LinkButton':
            try {
              const strKeyValue = objEN.GetFldValue(strKey);
              const strText = objEN.GetFldValue(arrDataColumn[j].fldName);
              const btn1: HTMLElement = arrDataColumn[j].funcName(strKeyValue, strText);
              td.appendChild(btn1);
              //const btn1: HTMLButtonElement = document.createElement("Button");
              //btn1.innerText = arrDataColumn[j].text;
              //btn1.className = "btn btn-outline-info";
              //td.appendChild(btn1);
              ////td.appendChild(document.createTextNode(i + "" + j));
              ////td.style.color = "#FF0000";
              //td.className = "text-center";
            } catch (e: any) {
              console.error(e);
              const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
              throw strMsg;
            }
            break;
        }
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    while (divContainer.childNodes.length > 0) {
      divContainer.removeChild(divContainer.childNodes[0]);
    }
    divContainer.appendChild(table);
    arrSelectedKeys.splice(0);
  }
  public static async BindTabV4(
    divContainer: HTMLDivElement,
    arrObjLst: Array<clsGeneralTab>,
    arrDataColumn: Array<clsDataColumn>,
    strKey: string,
    objOperateList: clsOperateList,
  ) {
    //const o = document.getElementById("divResult13");
    //if (o == null) {
    //    alert("divResult13不存在！");
    //    return;
    //}
    //const sstrFldName: Array<string> = new Array<string>();
    //const sstrColHeader: Array<string> = new Array<string>();
    //sstrFldName.push("identityID"); sstrColHeader.push("身份Id");
    //sstrFldName.push("identityDesc"); sstrColHeader.push("身份名");
    //sstrFldName.push("memo"); sstrColHeader.push("备注");
    const table: HTMLTableElement = document.createElement('table');
    table.id = 'tab4Bind';
    if (objOperateList.bolIsTableSm == true) {
      table.className = 'table table-striped table-condensed table-bordered table-sm';
    } else {
      table.className = 'table table-striped table-condensed table-bordered';
    }
    const tbody = document.createElement('tbody');

    //table.width = intWidth;
    //table.height = h;
    //table.border = 1;
    //table.height = h;
    table.border = '1';
    const intRowNum = arrObjLst.length;
    const intColNum = arrDataColumn.length;
    const trHead: HTMLTableRowElement = document.createElement('tr');
    trHead.className = 'row-height';
    let check00: HTMLInputElement;
    let strSortExpress;
    for (let j = 0; j < intColNum; j++) {
      const td = document.createElement('td');
      td.id = Format('td{0}', arrDataColumn[j].fldName);
      switch (arrDataColumn[j].columnType) {
        case 'CheckBox':
          check00 = document.createElement('input');
          check00.type = 'checkbox';
          check00.id = `chkTabHead`;
          check00.name = 'chkTabHead';
          check00.className = 'CheckInTab';
          check00.onclick = function (this) {
            SetAllCkechedKeysV2(divContainer, this);
          };
          td.appendChild(check00);

          break;
        case 'Label':
        case 'LabelOrDiv':
        case 'Label4Bool':
        case 'a':
          strSortExpress = arrDataColumn[j].sortBy;
          if (IsNullOrEmpty(strSortExpress) == true) {
            //如果没有排序字段，就不用超链接A

            //console.error(arrDataColumn[j].sortFun);
            if (arrDataColumn[j].sortFun.name != 'sortFun') {
              const a2: HTMLAnchorElement = document.createElement('a');
              a2.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
              a2.text = arrDataColumn[j].colHeader; //i + "" + j;

              a2.setAttribute('fldName', strSortExpress);

              a2.href = 'javascript:';

              (function (sortFun1) {
                a2.onclick = function (this) {
                  objOperateList.SortBy(sortFun1);
                };
              })(arrDataColumn[j].sortFun);

              td.appendChild(a2);
            } else {
              const span1: HTMLSpanElement = document.createElement('span');
              span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
              span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;

              td.appendChild(span1);
            }
          } else {
            const a1: HTMLAnchorElement = document.createElement('a');
            a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            a1.text = arrDataColumn[j].colHeader; //i + "" + j;

            a1.setAttribute('fldName', strSortExpress);

            a1.href = 'javascript:';

            a1.onclick = function (this) {
              objOperateList.SortBy(this);
            };
            td.appendChild(a1);
            //td.appendChild(document.createTextNode(i + "" + j));
            //td.style.color = "#FF0000";
          }

          td.className = 'text-center';
          break;
        case 'Button':
          try {
            const span1: HTMLSpanElement = document.createElement('span');
            //console.log(arrDataColumn[j].colHeader);
            span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;
            //                td.innerHTML = objEN["identityDesc"];//i + "" + j;
            td.appendChild(span1);
            //td.appendChild(document.createTextNode(i + "" + j));
            //td.style.color = "#FF0000";
            td.className = 'text-center';
          } catch (e: any) {
            const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
            throw strMsg;
          }
          break;
        case 'LinkButton':
          try {
            const strSortExpress = arrDataColumn[j].sortBy;
            if (IsNullOrEmpty(strSortExpress) == true) {
              //如果没有排序字段，就不用超链接A

              const span1: HTMLSpanElement = document.createElement('span');
              span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
              span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;

              td.appendChild(span1);
            } else {
              const a1: HTMLAnchorElement = document.createElement('a');
              a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
              a1.text = arrDataColumn[j].colHeader; //i + "" + j;

              a1.setAttribute('fldName', strSortExpress);

              a1.href = 'javascript:';

              a1.onclick = function (this) {
                objOperateList.SortBy(this);
              };
              td.appendChild(a1);
            }
            td.className = 'text-center';
          } catch (e: any) {
            const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
            throw strMsg;
          }
          break;
      }
      trHead.appendChild(td);
    }
    tbody.appendChild(trHead);
    for (let i = 0; i < intRowNum; i++) {
      const objEN: clsGeneralTab = arrObjLst[i];
      const strKeyValue = objEN.GetFldValue(strKey);
      const tr: HTMLTableRowElement = document.createElement('tr');
      tr.className = 'row-height';
      tr.id = `tr${strKeyValue}`;
      let check: HTMLInputElement;
      let div1: HTMLDivElement;
      for (let j = 0; j < intColNum; j++) {
        const td = document.createElement('td');
        td.className = arrDataColumn[j].tdClass;
        td.id = `td${strKeyValue}_${arrDataColumn[j].fldName}`;
        switch (arrDataColumn[j].columnType) {
          case 'CheckBox':
            check = document.createElement('input');
            check.type = 'checkbox';

            check.id = `chk${strKeyValue}`;
            check.name = 'chkInTab';
            check.className = 'CheckInTab';
            //if (IsNullOrEmpty(objEN.GetFldValue("CtrlId")) == false) {
            //    check.setAttribute("ctrlId", objEN.GetFldValue("CtrlId"));
            //}
            td.appendChild(check);
            break;
          case 'Label':
            if (IsNullOrEmpty(arrDataColumn[j].fldName) == false) {
              td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
              if (IsNullOrEmpty(td.className)) {
                td.className = 'text-center';
              }
            } else {
              //调用外面的函数生成一个层放在该单元格中
              const div1 = await arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text);
              if (div1 != null) {
                td.appendChild(div1);
              }
            }
            tr.appendChild(td);
            break;
          case 'LabelOrDiv':
            div1 = await arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text);
            if (div1.innerHTML == '') {
              td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
              if (IsNullOrEmpty(td.className)) {
                td.className = 'text-center';
              }
            } else {
              td.appendChild(div1);
            }
            tr.appendChild(td);
            break;
          case 'Label4Bool':
            if (IsNullOrEmpty(arrDataColumn[j].fldName) == false) {
              const bolFldValue = objEN.GetFldValue(arrDataColumn[j].fldName);
              if (bolFldValue == true) {
                const spnBoolTrue = GetSpan4BoolTrue();
                td.appendChild(spnBoolTrue);
              } else {
                const spnBoolFalse = GetSpan4BoolFalse();
                td.appendChild(spnBoolFalse);
              }
              if (IsNullOrEmpty(td.className)) {
                td.className = 'text-center';
              }
            } else {
              //调用外面的函数生成一个层放在该单元格中
              const div1 = await arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text);
              if (div1 != null) {
                td.appendChild(div1);
              }
            }
            tr.appendChild(td);
            break;
          case 'Button':
            try {
              const strKeyValue = objEN.GetFldValue(strKey);
              const btn1: HTMLElement = await arrDataColumn[j].funcName(
                strKeyValue,
                arrDataColumn[j].text,
              );
              td.appendChild(btn1);
              //const btn1: HTMLButtonElement = document.createElement("Button");
              //btn1.innerText = arrDataColumn[j].text;
              //btn1.className = "btn btn-outline-info";
              //td.appendChild(btn1);
              ////td.appendChild(document.createTextNode(i + "" + j));
              ////td.style.color = "#FF0000";
              //td.className = "text-center";
            } catch (e: any) {
              console.error(e);
              const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
              throw strMsg;
            }
            break;
          case 'LinkButton':
            try {
              const strKeyValue = objEN.GetFldValue(strKey);
              const strText = objEN.GetFldValue(arrDataColumn[j].fldName);
              const btn1: HTMLElement = await arrDataColumn[j].funcName(strKeyValue, strText);
              td.appendChild(btn1);
              //const btn1: HTMLButtonElement = document.createElement("Button");
              //btn1.innerText = arrDataColumn[j].text;
              //btn1.className = "btn btn-outline-info";
              //td.appendChild(btn1);
              ////td.appendChild(document.createTextNode(i + "" + j));
              ////td.style.color = "#FF0000";
              //td.className = "text-center";
            } catch (e: any) {
              console.error(e);
              const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
              throw strMsg;
            }
            break;
          case 'a':
            try {
              const strKeyValue = objEN.GetFldValue(strKey);
              const strText = objEN.GetFldValue(arrDataColumn[j].fldName);
              const objA: HTMLAnchorElement = await arrDataColumn[j].funcName(strKeyValue, strText);
              if (objA != null) {
                td.appendChild(objA);
              }
            } catch (e: any) {
              console.error(e);
              const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
              throw strMsg;
            }
            break;
        }
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    while (divContainer.childNodes.length > 0) {
      divContainer.removeChild(divContainer.childNodes[0]);
    }
    divContainer.appendChild(table);
    arrSelectedKeys.splice(0);
  }

  /*
   * 根据列表的左上角的复选框值，全选或全不选列表中所有复选框
   */
  public static SetAllCkechedKeys(tabName: HTMLDivElement, thisChk: HTMLInputElement) {
    const arrKeys = tabName.getElementsByClassName('CheckInTab');
    //const thisChk = EventTarget;//
    //const thisChk: HTMLInputElement = e.target as HTMLInputElement;  tabName.getElementsByClassName;// EventTarget as HTMLInputElement;
    const bolIsCheck = thisChk.checked;
    console.log(bolIsCheck);
    const arrKeyLst: Array<HTMLInputElement> = this.GetArray(arrKeys) as Array<HTMLInputElement>;

    arrKeyLst.forEach((e) => (e.checked = bolIsCheck));
    alert(arrKeys.length.toString());
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
  public static Test1(): string {
    return 'Test1';
  }
  public static CheckControlExistInDivObj(
    objDiv: HTMLDivElement,
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

    const controlElement = objDiv.querySelector(`#${strControlId}`);
    if (controlElement) {
      // 控件存在
      console.log('控件存在');
    } else {
      // 控件不存在
      // console.log('控件不存在');
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

  /*
   * 绑定下拉框
   */
  public static BindDdl_ObjLstWithSetInDiv(
    strDivName: string,
    strDdlName: string,
    arrObjLst: Set<string>,
    strTabCnName: string,
  ) {
    let sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
    const objDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivName);
    if (objDiv == null) {
      const strMsg = Format('层:[{0}]在该界面不存在！', strDivName);
      console.error(strMsg);
      throw strMsg;
    } else {
      const arrSelect = objDiv.getElementsByTagName('select');
      const arrElements = GetArray(arrSelect);
      sltDdl = <HTMLSelectElement>arrElements.find((x) => x.id == strDdlName);
      if (sltDdl == null) {
        const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', strDivName, strDdlName);
        console.error(strMsg);
        sltDdl = document.getElementById(strDdlName);
      }
    }
    if (sltDdl == null) {
      const strMsg = Format('在界面内，不存在下拉框:[{1}], 请检查！', strDivName, strDdlName);
      console.error(strMsg);
      throw strMsg;
    }

    sltDdl.options.length = 0;
    const strText = `选${strTabCnName}...`;

    sltDdl.options.add(new Option(strText, '0'));

    // const i = 0;
    arrObjLst.forEach(function (element) {
      // element: 指向当前元素的值
      // index: 指向当前索引
      // array: 指向Array对象本身
      //alert(element);
      sltDdl.options.add(new Option(element, element));
    });
  }
  /*
   * 确认删除函数
   */
  public static confirmDel(intCount: number) {
    let strMsg = Format('你真的确定要删除记录吗?');
    if (intCount > 0) {
      strMsg = Format('你真的确定要删除{0}条记录吗?', intCount);
    }
    const gnl = confirm(strMsg);
    if (gnl == true) {
      return true;
    } else {
      return false;
    }
  }
}

/*
 * 专门针对有多个关键字段的表的绑定
 */
export async function BindTab_KeyLst(
  divContainer: HTMLDivElement,
  arrObjLst: Array<clsGeneralTab>,
  arrDataColumn: Array<clsDataColumn>,
  arrKeyLst: Array<string>,
  objOperateList: clsOperateList,
) {
  const table: HTMLTableElement = document.createElement('table');
  table.id = 'tab4Bind';
  if (objOperateList.bolIsTableSm == true) {
    table.className = 'table table-striped table-condensed table-bordered table-sm';
  } else {
    table.className = 'table table-striped table-condensed table-bordered';
  }
  const tbody = document.createElement('tbody');

  //table.width = intWidth;
  //table.height = h;
  //table.border = 1;
  //table.height = h;
  table.border = '1';
  const intRowNum = arrObjLst.length;
  const intColNum = arrDataColumn.length;
  const trHead: HTMLTableRowElement = document.createElement('tr');
  trHead.className = 'row-height';
  let check00: HTMLInputElement;
  let strSortExpress;
  for (let j = 0; j < intColNum; j++) {
    const td = document.createElement('td');
    td.id = Format('td{0}', arrDataColumn[j].fldName);
    switch (arrDataColumn[j].columnType) {
      case 'CheckBox':
        check00 = document.createElement('input');
        check00.type = 'checkbox';
        check00.id = `chkTabHead`;
        check00.name = 'chkTabHead';
        check00.className = 'CheckInTab';
        check00.onclick = function (this) {
          SetAllCkechedKeysV2(divContainer, this);
        };
        td.appendChild(check00);

        break;
      case 'Label':
      case 'LabelOrDiv':
      case 'Label4Bool':
      case 'a':
        strSortExpress = arrDataColumn[j].sortBy;
        if (IsNullOrEmpty(strSortExpress) == true) {
          //如果没有排序字段，就不用超链接A

          //console.error(arrDataColumn[j].sortFun);
          if (arrDataColumn[j].sortFun.name != 'sortFun') {
            const a2: HTMLAnchorElement = document.createElement('a');
            a2.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            a2.text = arrDataColumn[j].colHeader; //i + "" + j;

            a2.setAttribute('fldName', strSortExpress);

            a2.href = 'javascript:';

            (function (sortFun1) {
              a2.onclick = function (this) {
                objOperateList.SortBy(sortFun1);
              };
            })(arrDataColumn[j].sortFun);

            td.appendChild(a2);
          } else {
            const span1: HTMLSpanElement = document.createElement('span');
            span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;

            td.appendChild(span1);
          }
        } else {
          const a1: HTMLAnchorElement = document.createElement('a');
          a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
          a1.text = arrDataColumn[j].colHeader; //i + "" + j;

          a1.setAttribute('fldName', strSortExpress);

          a1.href = 'javascript:';

          a1.onclick = function (this) {
            objOperateList.SortBy(this);
          };
          td.appendChild(a1);
        }

        td.className = 'text-center';
        break;
      case 'Button':
        try {
          const span1: HTMLSpanElement = document.createElement('span');
          //console.log(arrDataColumn[j].colHeader);
          span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
          span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;
          //                td.innerHTML = objEN["identityDesc"];//i + "" + j;
          td.appendChild(span1);
          //td.appendChild(document.createTextNode(i + "" + j));
          //td.style.color = "#FF0000";
          td.className = 'text-center';
        } catch (e: any) {
          const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
          throw strMsg;
        }
        break;
      case 'LinkButton':
        try {
          const strSortExpress = arrDataColumn[j].sortBy;
          if (IsNullOrEmpty(strSortExpress) == true) {
            //如果没有排序字段，就不用超链接A

            const span1: HTMLSpanElement = document.createElement('span');
            span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;

            td.appendChild(span1);
          } else {
            const a1: HTMLAnchorElement = document.createElement('a');
            a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            a1.text = arrDataColumn[j].colHeader; //i + "" + j;

            a1.setAttribute('fldName', strSortExpress);

            a1.href = 'javascript:';

            a1.onclick = function (this) {
              objOperateList.SortBy(this);
            };
            td.appendChild(a1);
          }
          td.className = 'text-center';
        } catch (e: any) {
          const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
          throw strMsg;
        }
        break;
    }
    trHead.appendChild(td);
  }
  tbody.appendChild(trHead);
  for (let i = 0; i < intRowNum; i++) {
    const objEN: clsGeneralTab = arrObjLst[i];
    let strKeyValueLst = '';
    let strKeyValueLstId = '';
    // let bolIsErrorKey = false;
    let intIndex = 0;
    for (const strKey of arrKeyLst) {
      const strTemp = objEN.GetFldValue(strKey);
      //   if (IsNullOrEmpty(strTemp) == true) {
      //     bolIsErrorKey = true;
      //   }
      if (intIndex == 0) {
        strKeyValueLst = strTemp;
        strKeyValueLstId = strTemp;
      } else {
        strKeyValueLst += Format('|{0}', strTemp);
        strKeyValueLstId += Format('_{0}', strTemp);
      }
      intIndex++;
    }
    const tr: HTMLTableRowElement = document.createElement('tr');
    tr.className = 'row-height';
    tr.id = `tr${strKeyValueLstId}`;
    let check: HTMLInputElement;
    let div1: HTMLDivElement;
    for (let j = 0; j < intColNum; j++) {
      const td = document.createElement('td');
      td.className = arrDataColumn[j].tdClass;
      td.id = `td${strKeyValueLstId}_${arrDataColumn[j].fldName}`;
      switch (arrDataColumn[j].columnType) {
        case 'CheckBox':
          check = document.createElement('input');
          check.type = 'checkbox';

          check.id = `chk${strKeyValueLstId}`;
          check.setAttribute('keyValueLst', strKeyValueLst);
          check.name = 'chkInTab';
          check.className = 'CheckInTab';
          //if (IsNullOrEmpty(objEN.GetFldValue("CtrlId")) == false) {
          //    check.setAttribute("ctrlId", objEN.GetFldValue("CtrlId"));
          //}
          td.appendChild(check);
          break;
        case 'Label':
          if (IsNullOrEmpty(arrDataColumn[j].fldName) == false) {
            td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
          } else {
            //调用外面的函数生成一个层放在该单元格中
            const div1 = await arrDataColumn[j].funcName(strKeyValueLst, arrDataColumn[j].text);
            if (div1 != null) {
              td.appendChild(div1);
            }
          }
          tr.appendChild(td);
          break;
        case 'LabelOrDiv':
          div1 = await arrDataColumn[j].funcName(strKeyValueLst, arrDataColumn[j].text);
          if (div1.innerHTML == '') {
            td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
          } else {
            td.appendChild(div1);
          }
          tr.appendChild(td);
          break;
        case 'Label4Bool':
          if (IsNullOrEmpty(arrDataColumn[j].fldName) == false) {
            const bolFldValue = objEN.GetFldValue(arrDataColumn[j].fldName);
            if (bolFldValue == true) {
              const spnBoolTrue = GetSpan4BoolTrue();
              td.appendChild(spnBoolTrue);
            } else {
              const spnBoolFalse = GetSpan4BoolFalse();
              td.appendChild(spnBoolFalse);
            }
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
          } else {
            //调用外面的函数生成一个层放在该单元格中
            const div1 = await arrDataColumn[j].funcName(strKeyValueLst, arrDataColumn[j].text);
            if (div1 != null) {
              td.appendChild(div1);
            }
          }
          tr.appendChild(td);
          break;
        case 'Button':
          try {
            //const strKeyValue = objEN.GetFldValue(strKey);
            const btn1: HTMLElement = await arrDataColumn[j].funcName(
              strKeyValueLst,
              arrDataColumn[j].text,
            );
            td.appendChild(btn1);
            //const btn1: HTMLButtonElement = document.createElement("Button");
            //btn1.innerText = arrDataColumn[j].text;
            //btn1.className = "btn btn-outline-info";
            //td.appendChild(btn1);
            ////td.appendChild(document.createTextNode(i + "" + j));
            ////td.style.color = "#FF0000";
            //td.className = "text-center";
          } catch (e: any) {
            console.error(e);
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
        case 'LinkButton':
          try {
            //const strKeyValue = objEN.GetFldValue(strKey);
            const strText = objEN.GetFldValue(arrDataColumn[j].fldName);
            const btn1: HTMLElement = await arrDataColumn[j].funcName(strKeyValueLst, strText);
            td.appendChild(btn1);
            //const btn1: HTMLButtonElement = document.createElement("Button");
            //btn1.innerText = arrDataColumn[j].text;
            //btn1.className = "btn btn-outline-info";
            //td.appendChild(btn1);
            ////td.appendChild(document.createTextNode(i + "" + j));
            ////td.style.color = "#FF0000";
            //td.className = "text-center";
          } catch (e: any) {
            console.error(e);
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
        case 'a':
          try {
            //const strKeyValue = objEN.GetFldValue(strKey);
            const strText = objEN.GetFldValue(arrDataColumn[j].fldName);
            const objA: HTMLAnchorElement = await arrDataColumn[j].funcName(
              strKeyValueLst,
              strText,
            );
            if (objA != null) {
              td.appendChild(objA);
            }
            //const btn1: HTMLButtonElement = document.createElement("Button");
            //btn1.innerText = arrDataColumn[j].text;
            //btn1.className = "btn btn-outline-info";
            //td.appendChild(btn1);
            ////td.appendChild(document.createTextNode(i + "" + j));
            ////td.style.color = "#FF0000";
            //td.className = "text-center";
          } catch (e: any) {
            console.error(e);
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  while (divContainer.childNodes.length > 0) {
    divContainer.removeChild(divContainer.childNodes[0]);
  }
  divContainer.appendChild(table);
  arrSelectedKeys.splice(0);
}

/*
 * 专门针对有多个关键字段的表的绑定
 */
export async function BindTab_KeyLst_V(
  divContainer: HTMLDivElement,
  arrObjLst: Array<clsGeneralTabV>,
  arrDataColumn: Array<clsDataColumn>,
  arrKeyLst: Array<string>,
  objOperateList: clsOperateList,
) {
  const table: HTMLTableElement = document.createElement('table');
  table.id = 'tab4Bind';
  if (objOperateList.bolIsTableSm == true) {
    table.className = 'table table-striped table-condensed table-bordered table-sm';
  } else {
    table.className = 'table table-striped table-condensed table-bordered';
  }
  const tbody = document.createElement('tbody');

  //table.width = intWidth;
  //table.height = h;
  //table.border = 1;
  //table.height = h;
  table.border = '1';
  const intRowNum = arrObjLst.length;
  const intColNum = arrDataColumn.length;
  const trHead: HTMLTableRowElement = document.createElement('tr');
  trHead.className = 'row-height';
  let check00: HTMLInputElement;
  let strSortExpress;
  for (let j = 0; j < intColNum; j++) {
    const td = document.createElement('td');
    td.id = Format('td{0}', arrDataColumn[j].fldName);
    switch (arrDataColumn[j].columnType) {
      case 'CheckBox':
        check00 = document.createElement('input');
        check00.type = 'checkbox';
        check00.id = `chkTabHead`;
        check00.name = 'chkTabHead';
        check00.className = 'CheckInTab';
        check00.onclick = function (this) {
          SetAllCkechedKeysV2(divContainer, this);
        };
        td.appendChild(check00);

        break;
      case 'Label':
      case 'LabelOrDiv':
      case 'Label4Bool':
      case 'a':
        strSortExpress = arrDataColumn[j].sortBy;
        if (IsNullOrEmpty(strSortExpress) == true) {
          //如果没有排序字段，就不用超链接A

          //console.error(arrDataColumn[j].sortFun);
          if (arrDataColumn[j].sortFun.name != 'sortFun') {
            const a2: HTMLAnchorElement = document.createElement('a');
            a2.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            a2.text = arrDataColumn[j].colHeader; //i + "" + j;

            a2.setAttribute('fldName', strSortExpress);

            a2.href = 'javascript:';

            (function (sortFun1) {
              a2.onclick = function (this) {
                objOperateList.SortBy(sortFun1);
              };
            })(arrDataColumn[j].sortFun);

            td.appendChild(a2);
          } else {
            const span1: HTMLSpanElement = document.createElement('span');
            span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;

            td.appendChild(span1);
          }
        } else {
          const a1: HTMLAnchorElement = document.createElement('a');
          a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
          a1.text = arrDataColumn[j].colHeader; //i + "" + j;

          a1.setAttribute('fldName', strSortExpress);

          a1.href = 'javascript:';

          a1.onclick = function (this) {
            objOperateList.SortBy(this);
          };
          td.appendChild(a1);
        }

        td.className = 'text-center';
        break;
      case 'Button':
        try {
          const span1: HTMLSpanElement = document.createElement('span');
          //console.log(arrDataColumn[j].colHeader);
          span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
          span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;
          //                td.innerHTML = objEN["identityDesc"];//i + "" + j;
          td.appendChild(span1);
          //td.appendChild(document.createTextNode(i + "" + j));
          //td.style.color = "#FF0000";
          td.className = 'text-center';
        } catch (e: any) {
          const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
          throw strMsg;
        }
        break;
      case 'LinkButton':
        try {
          const strSortExpress = arrDataColumn[j].sortBy;
          if (IsNullOrEmpty(strSortExpress) == true) {
            //如果没有排序字段，就不用超链接A

            const span1: HTMLSpanElement = document.createElement('span');
            span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;

            td.appendChild(span1);
          } else {
            const a1: HTMLAnchorElement = document.createElement('a');
            a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            a1.text = arrDataColumn[j].colHeader; //i + "" + j;

            a1.setAttribute('fldName', strSortExpress);

            a1.href = 'javascript:';

            a1.onclick = function (this) {
              objOperateList.SortBy(this);
            };
            td.appendChild(a1);
          }
          td.className = 'text-center';
        } catch (e: any) {
          const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
          throw strMsg;
        }
        break;
    }
    trHead.appendChild(td);
  }
  tbody.appendChild(trHead);
  for (let i = 0; i < intRowNum; i++) {
    const objEN: clsGeneralTabV = arrObjLst[i];
    let strKeyValueLst = '';
    let strKeyValueLstId = '';
    // let bolIsErrorKey = false;
    let intIndex = 0;
    for (const strKey of arrKeyLst) {
      const strTemp = objEN.GetFldValue(strKey);
      //   if (IsNullOrEmpty(strTemp) == true) {
      //     bolIsErrorKey = true;
      //   }
      if (intIndex == 0) {
        strKeyValueLst = strTemp;
        strKeyValueLstId = strTemp;
      } else {
        strKeyValueLst += Format('|{0}', strTemp);
        strKeyValueLstId += Format('_{0}', strTemp);
      }
      intIndex++;
    }
    const tr: HTMLTableRowElement = document.createElement('tr');
    tr.className = 'row-height';
    tr.id = `tr${strKeyValueLstId}`;
    let check: HTMLInputElement;
    let div1: HTMLDivElement;
    for (let j = 0; j < intColNum; j++) {
      const td = document.createElement('td');
      td.className = arrDataColumn[j].tdClass;
      td.id = `td${strKeyValueLstId}_${arrDataColumn[j].fldName}`;
      switch (arrDataColumn[j].columnType) {
        case 'CheckBox':
          check = document.createElement('input');
          check.type = 'checkbox';

          check.id = `chk${strKeyValueLstId}`;
          check.setAttribute('keyValueLst', strKeyValueLst);
          check.name = 'chkInTab';
          check.className = 'CheckInTab';
          //if (IsNullOrEmpty(objEN.GetFldValue("CtrlId")) == false) {
          //    check.setAttribute("ctrlId", objEN.GetFldValue("CtrlId"));
          //}
          td.appendChild(check);
          break;
        case 'Label':
          if (IsNullOrEmpty(arrDataColumn[j].fldName) == false) {
            td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
          } else {
            //调用外面的函数生成一个层放在该单元格中
            const div1 = await arrDataColumn[j].funcName(strKeyValueLst, arrDataColumn[j].text);
            if (div1 != null) {
              td.appendChild(div1);
            }
          }
          tr.appendChild(td);
          break;
        case 'LabelOrDiv':
          div1 = await arrDataColumn[j].funcName(strKeyValueLst, arrDataColumn[j].text);
          if (div1.innerHTML == '') {
            td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
          } else {
            td.appendChild(div1);
          }
          tr.appendChild(td);
          break;
        case 'Label4Bool':
          if (IsNullOrEmpty(arrDataColumn[j].fldName) == false) {
            const bolFldValue = objEN.GetFldValue(arrDataColumn[j].fldName);
            if (bolFldValue == true) {
              const spnBoolTrue = GetSpan4BoolTrue();
              td.appendChild(spnBoolTrue);
            } else {
              const spnBoolFalse = GetSpan4BoolFalse();
              td.appendChild(spnBoolFalse);
            }
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
          } else {
            //调用外面的函数生成一个层放在该单元格中
            const div1 = await arrDataColumn[j].funcName(strKeyValueLst, arrDataColumn[j].text);
            if (div1 != null) {
              td.appendChild(div1);
            }
          }
          tr.appendChild(td);
          break;
        case 'Button':
          try {
            //const strKeyValue = objEN.GetFldValue(strKey);
            const btn1: HTMLElement = await arrDataColumn[j].funcName(
              strKeyValueLst,
              arrDataColumn[j].text,
            );
            td.appendChild(btn1);
            //const btn1: HTMLButtonElement = document.createElement("Button");
            //btn1.innerText = arrDataColumn[j].text;
            //btn1.className = "btn btn-outline-info";
            //td.appendChild(btn1);
            ////td.appendChild(document.createTextNode(i + "" + j));
            ////td.style.color = "#FF0000";
            //td.className = "text-center";
          } catch (e: any) {
            console.error(e);
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
        case 'LinkButton':
          try {
            //const strKeyValue = objEN.GetFldValue(strKey);
            const strText = objEN.GetFldValue(arrDataColumn[j].fldName);
            const btn1: HTMLElement = await arrDataColumn[j].funcName(strKeyValueLst, strText);
            td.appendChild(btn1);
            //const btn1: HTMLButtonElement = document.createElement("Button");
            //btn1.innerText = arrDataColumn[j].text;
            //btn1.className = "btn btn-outline-info";
            //td.appendChild(btn1);
            ////td.appendChild(document.createTextNode(i + "" + j));
            ////td.style.color = "#FF0000";
            //td.className = "text-center";
          } catch (e: any) {
            console.error(e);
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
        case 'a':
          try {
            //const strKeyValue = objEN.GetFldValue(strKey);
            const strText = objEN.GetFldValue(arrDataColumn[j].fldName);
            const objA: HTMLAnchorElement = await arrDataColumn[j].funcName(
              strKeyValueLst,
              strText,
            );
            if (objA != null) {
              td.appendChild(objA);
            }
            //const btn1: HTMLButtonElement = document.createElement("Button");
            //btn1.innerText = arrDataColumn[j].text;
            //btn1.className = "btn btn-outline-info";
            //td.appendChild(btn1);
            ////td.appendChild(document.createTextNode(i + "" + j));
            ////td.style.color = "#FF0000";
            //td.className = "text-center";
          } catch (e: any) {
            console.error(e);
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  while (divContainer.childNodes.length > 0) {
    divContainer.removeChild(divContainer.childNodes[0]);
  }
  divContainer.appendChild(table);
  arrSelectedKeys.splice(0);
}

export async function BindTab(
  divContainer: HTMLDivElement,
  arrObjLst: Array<clsGeneralTab>,
  arrDataColumn: Array<clsDataColumn>,
  strKey: string,
  objOperateList: clsOperateList,
) {
  const table: HTMLTableElement = document.createElement('table');
  table.id = 'tab4Bind';
  if (objOperateList.bolIsTableSm == true) {
    table.className = 'table table-striped table-condensed table-bordered table-sm';
  } else {
    table.className = 'table table-striped table-condensed table-bordered';
  }
  const tbody = document.createElement('tbody');

  //table.width = intWidth;
  //table.height = h;
  //table.border = 1;
  //table.height = h;
  table.border = '1';
  const intRowNum = arrObjLst.length;
  const intColNum = arrDataColumn.length;
  const trHead: HTMLTableRowElement = document.createElement('tr');
  trHead.className = 'row-height';
  let check00: HTMLInputElement;
  let strSortExpress;
  for (let j = 0; j < intColNum; j++) {
    const td = document.createElement('td');
    td.id = Format('td{0}', arrDataColumn[j].fldName);
    switch (arrDataColumn[j].columnType) {
      case 'CheckBox':
        check00 = document.createElement('input');
        check00.type = 'checkbox';
        check00.id = `chkTabHead`;
        check00.name = 'chkTabHead';
        check00.className = 'CheckInTab';
        check00.onclick = function (this) {
          SetAllCkechedKeysV2(divContainer, this);
        };
        td.appendChild(check00);

        break;
      case 'Label':
      case 'LabelOrDiv':
      case 'Label4Bool':
      case 'Icon':
      case 'a':
        strSortExpress = arrDataColumn[j].sortBy;
        if (IsNullOrEmpty(strSortExpress) == true) {
          //如果没有排序字段，就不用超链接A

          //console.error(arrDataColumn[j].sortFun);
          if (arrDataColumn[j].sortFun.name != 'sortFun') {
            const a2: HTMLAnchorElement = document.createElement('a');
            a2.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            a2.text = arrDataColumn[j].colHeader; //i + "" + j;

            a2.setAttribute('fldName', strSortExpress);

            a2.href = 'javascript:';

            (function (sortFun1) {
              a2.onclick = function (this) {
                objOperateList.SortBy(sortFun1);
              };
            })(arrDataColumn[j].sortFun);

            td.appendChild(a2);
          } else {
            const span1: HTMLSpanElement = document.createElement('span');
            span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;

            td.appendChild(span1);
          }
        } else {
          const a1: HTMLAnchorElement = document.createElement('a');
          a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
          a1.text = arrDataColumn[j].colHeader; //i + "" + j;

          a1.setAttribute('fldName', strSortExpress);

          a1.href = 'javascript:';

          a1.onclick = function (this) {
            objOperateList.SortBy(this);
          };
          td.appendChild(a1);
          //td.appendChild(document.createTextNode(i + "" + j));
          //td.style.color = "#FF0000";
        }

        td.className = 'text-center';
        break;
      case 'Button':
        try {
          const span1: HTMLSpanElement = document.createElement('span');
          //console.log(arrDataColumn[j].colHeader);
          span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
          span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;
          //                td.innerHTML = objEN["identityDesc"];//i + "" + j;
          td.appendChild(span1);
          //td.appendChild(document.createTextNode(i + "" + j));
          //td.style.color = "#FF0000";
          td.className = 'text-center';
        } catch (e: any) {
          const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
          throw strMsg;
        }
        break;
      case 'LinkButton':
        try {
          const strSortExpress = arrDataColumn[j].sortBy;
          if (IsNullOrEmpty(strSortExpress) == true) {
            //如果没有排序字段，就不用超链接A

            const span1: HTMLSpanElement = document.createElement('span');
            span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;

            td.appendChild(span1);
          } else {
            const a1: HTMLAnchorElement = document.createElement('a');
            a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            a1.text = arrDataColumn[j].colHeader; //i + "" + j;

            a1.setAttribute('fldName', strSortExpress);

            a1.href = 'javascript:';

            a1.onclick = function (this) {
              objOperateList.SortBy(this);
            };
            td.appendChild(a1);
          }
          td.className = 'text-center';
        } catch (e: any) {
          const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
          throw strMsg;
        }
        break;
    }
    trHead.appendChild(td);
  }
  tbody.appendChild(trHead);
  for (let i = 0; i < intRowNum; i++) {
    const objEN: clsGeneralTab = arrObjLst[i];
    const strKeyValue = objEN.GetFldValue(strKey);
    const tr: HTMLTableRowElement = document.createElement('tr');
    tr.className = 'row-height';
    tr.id = `tr${strKeyValue}`;
    let check: HTMLInputElement;
    let div1: HTMLDivElement;
    for (let j = 0; j < intColNum; j++) {
      const td = document.createElement('td');
      td.className = arrDataColumn[j].tdClass;
      td.id = `td${strKeyValue}_${arrDataColumn[j].fldName}`;
      switch (arrDataColumn[j].columnType) {
        case 'CheckBox':
          check = document.createElement('input');
          check.type = 'checkbox';

          check.id = `chk${strKeyValue}`;
          check.name = 'chkInTab';
          check.className = 'CheckInTab';
          //if (IsNullOrEmpty(objEN.GetFldValue("CtrlId")) == false) {
          //    check.setAttribute("ctrlId", objEN.GetFldValue("CtrlId"));
          //}
          td.appendChild(check);
          break;
        case 'Label':
          if (IsNullOrEmpty(arrDataColumn[j].fldName) == false) {
            td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
          } else {
            //调用外面的函数生成一个层放在该单元格中
            const div1 = await arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text);
            if (div1 != null) {
              td.appendChild(div1);
            }
          }
          tr.appendChild(td);
          break;
        case 'LabelOrDiv':
          div1 = await arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text);
          if (div1.innerHTML == '') {
            td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
          } else {
            td.appendChild(div1);
          }
          tr.appendChild(td);
          break;
        case 'Label4Bool':
          if (IsNullOrEmpty(arrDataColumn[j].fldName) == false) {
            const bolFldValue = objEN.GetFldValue(arrDataColumn[j].fldName);
            if (bolFldValue == true) {
              const spnBoolTrue = GetSpan4BoolTrue();
              td.appendChild(spnBoolTrue);
            } else {
              const spnBoolFalse = GetSpan4BoolFalse();
              td.appendChild(spnBoolFalse);
            }
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
          } else {
            //调用外面的函数生成一个层放在该单元格中
            const div1 = await arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text);
            if (div1 != null) {
              td.appendChild(div1);
            }
          }
          tr.appendChild(td);
          break;
        case 'Icon':
          if (IsNullOrEmpty(arrDataColumn[j].fldName) == false) {
            const bolFldValue = objEN.GetFldValue(arrDataColumn[j].fldName);
            if (bolFldValue == true) {
              const spnBoolTrue = GetSpan4BoolTrue();
              td.appendChild(spnBoolTrue);
            } else {
              const spnBoolFalse = GetSpan4BoolFalse();
              td.appendChild(spnBoolFalse);
            }
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
          } else {
            //调用外面的函数生成一个层放在该单元格中
            const div1 = await arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text);
            if (div1 != null) {
              td.appendChild(div1);
            }
          }
          tr.appendChild(td);
          break;
        case 'Button':
          try {
            const strKeyValue = objEN.GetFldValue(strKey);
            const btn1: HTMLElement = await arrDataColumn[j].funcName(
              strKeyValue,
              arrDataColumn[j].text,
            );
            td.appendChild(btn1);
            //const btn1: HTMLButtonElement = document.createElement("Button");
            //btn1.innerText = arrDataColumn[j].text;
            //btn1.className = "btn btn-outline-info";
            //td.appendChild(btn1);
            ////td.appendChild(document.createTextNode(i + "" + j));
            ////td.style.color = "#FF0000";
            //td.className = "text-center";
          } catch (e: any) {
            console.error(e);
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
        case 'LinkButton':
          try {
            const strKeyValue = objEN.GetFldValue(strKey);
            const strText = objEN.GetFldValue(arrDataColumn[j].fldName);
            const btn1: HTMLElement = await arrDataColumn[j].funcName(strKeyValue, strText);
            td.appendChild(btn1);
            //const btn1: HTMLButtonElement = document.createElement("Button");
            //btn1.innerText = arrDataColumn[j].text;
            //btn1.className = "btn btn-outline-info";
            //td.appendChild(btn1);
            ////td.appendChild(document.createTextNode(i + "" + j));
            ////td.style.color = "#FF0000";
            //td.className = "text-center";
          } catch (e: any) {
            console.error(e);
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
        case 'a':
          try {
            const strKeyValue = objEN.GetFldValue(strKey);
            const strText = objEN.GetFldValue(arrDataColumn[j].fldName);
            const objA: HTMLAnchorElement = await arrDataColumn[j].funcName(strKeyValue, strText);
            if (objA != null) {
              td.appendChild(objA);
            }
            //const btn1: HTMLButtonElement = document.createElement("Button");
            //btn1.innerText = arrDataColumn[j].text;
            //btn1.className = "btn btn-outline-info";
            //td.appendChild(btn1);
            ////td.appendChild(document.createTextNode(i + "" + j));
            ////td.style.color = "#FF0000";
            //td.className = "text-center";
          } catch (e: any) {
            console.error(e);
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  while (divContainer.childNodes.length > 0) {
    divContainer.removeChild(divContainer.childNodes[0]);
  }
  divContainer.appendChild(table);
  arrSelectedKeys.splice(0);
}

export async function BindTab_V(
  divContainer: HTMLDivElement,
  arrObjLst: Array<clsGeneralTabV>,
  arrDataColumn: Array<clsDataColumn>,
  strKey: string,
  objOperateList: clsOperateList,
) {
  const table: HTMLTableElement = document.createElement('table');
  table.id = 'tab4Bind';
  if (objOperateList.bolIsTableSm == true) {
    table.className = 'table table-striped table-condensed table-bordered table-sm';
  } else {
    table.className = 'table table-striped table-condensed table-bordered';
  }
  const tbody = document.createElement('tbody');

  //table.width = intWidth;
  //table.height = h;
  //table.border = 1;
  //table.height = h;
  table.border = '1';
  const intRowNum = arrObjLst.length;
  const intColNum = arrDataColumn.length;
  const trHead: HTMLTableRowElement = document.createElement('tr');
  trHead.className = 'row-height';
  let check00: HTMLInputElement;
  let strSortExpress;
  for (let j = 0; j < intColNum; j++) {
    const td = document.createElement('td');
    td.id = Format('td{0}', arrDataColumn[j].fldName);
    switch (arrDataColumn[j].columnType) {
      case 'CheckBox':
        check00 = document.createElement('input');
        check00.type = 'checkbox';
        check00.id = `chkTabHead`;
        check00.name = 'chkTabHead';
        check00.className = 'CheckInTab';
        check00.onclick = function (this) {
          SetAllCkechedKeysV2(divContainer, this);
        };
        td.appendChild(check00);

        break;
      case 'Label':
      case 'LabelOrDiv':
      case 'Label4Bool':
      case 'a':
        strSortExpress = arrDataColumn[j].sortBy;
        if (IsNullOrEmpty(strSortExpress) == true) {
          //如果没有排序字段，就不用超链接A

          //console.error(arrDataColumn[j].sortFun);
          if (arrDataColumn[j].sortFun.name != 'sortFun') {
            const a2: HTMLAnchorElement = document.createElement('a');
            a2.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            a2.text = arrDataColumn[j].colHeader; //i + "" + j;

            a2.setAttribute('fldName', strSortExpress);

            a2.href = 'javascript:';

            (function (sortFun1) {
              a2.onclick = function (this) {
                objOperateList.SortBy(sortFun1);
              };
            })(arrDataColumn[j].sortFun);

            td.appendChild(a2);
          } else {
            const span1: HTMLSpanElement = document.createElement('span');
            span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;

            td.appendChild(span1);
          }
        } else {
          const a1: HTMLAnchorElement = document.createElement('a');
          a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
          a1.text = arrDataColumn[j].colHeader; //i + "" + j;

          a1.setAttribute('fldName', strSortExpress);

          a1.href = 'javascript:';

          a1.onclick = function (this) {
            objOperateList.SortBy(this);
          };
          td.appendChild(a1);
          //td.appendChild(document.createTextNode(i + "" + j));
          //td.style.color = "#FF0000";
        }

        td.className = 'text-center';
        break;
      case 'Button':
        try {
          const span1: HTMLSpanElement = document.createElement('span');
          //console.log(arrDataColumn[j].colHeader);
          span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
          span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;
          //                td.innerHTML = objEN["identityDesc"];//i + "" + j;
          td.appendChild(span1);
          //td.appendChild(document.createTextNode(i + "" + j));
          //td.style.color = "#FF0000";
          td.className = 'text-center';
        } catch (e: any) {
          const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
          throw strMsg;
        }
        break;
      case 'LinkButton':
        try {
          const strSortExpress = arrDataColumn[j].sortBy;
          if (IsNullOrEmpty(strSortExpress) == true) {
            //如果没有排序字段，就不用超链接A

            const span1: HTMLSpanElement = document.createElement('span');
            span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;

            td.appendChild(span1);
          } else {
            const a1: HTMLAnchorElement = document.createElement('a');
            a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
            a1.text = arrDataColumn[j].colHeader; //i + "" + j;

            a1.setAttribute('fldName', strSortExpress);

            a1.href = 'javascript:';

            a1.onclick = function (this) {
              objOperateList.SortBy(this);
            };
            td.appendChild(a1);
          }
          td.className = 'text-center';
        } catch (e: any) {
          const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
          throw strMsg;
        }
        break;
    }
    trHead.appendChild(td);
  }
  tbody.appendChild(trHead);
  for (let i = 0; i < intRowNum; i++) {
    const objEN: clsGeneralTabV = arrObjLst[i];
    const strKeyValue = objEN.GetFldValue(strKey);
    const tr: HTMLTableRowElement = document.createElement('tr');
    tr.className = 'row-height';
    tr.id = `tr${strKeyValue}`;
    let check: HTMLInputElement;
    let div1: HTMLDivElement;
    for (let j = 0; j < intColNum; j++) {
      const td = document.createElement('td');
      td.className = arrDataColumn[j].tdClass;
      td.id = `td${strKeyValue}_${arrDataColumn[j].fldName}`;
      switch (arrDataColumn[j].columnType) {
        case 'CheckBox':
          check = document.createElement('input');
          check.type = 'checkbox';

          check.id = `chk${strKeyValue}`;
          check.name = 'chkInTab';
          check.className = 'CheckInTab';
          //if (IsNullOrEmpty(objEN.GetFldValue("CtrlId")) == false) {
          //    check.setAttribute("ctrlId", objEN.GetFldValue("CtrlId"));
          //}
          td.appendChild(check);
          break;
        case 'Label':
          if (IsNullOrEmpty(arrDataColumn[j].fldName) == false) {
            td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
          } else {
            //调用外面的函数生成一个层放在该单元格中
            const div1 = await arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text);
            if (div1 != null) {
              td.appendChild(div1);
            }
          }
          tr.appendChild(td);
          break;
        case 'LabelOrDiv':
          div1 = await arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text);
          if (div1.innerHTML == '') {
            td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
          } else {
            td.appendChild(div1);
          }
          tr.appendChild(td);
          break;
        case 'Label4Bool':
          if (IsNullOrEmpty(arrDataColumn[j].fldName) == false) {
            const bolFldValue = objEN.GetFldValue(arrDataColumn[j].fldName);
            if (bolFldValue == true) {
              const spnBoolTrue = GetSpan4BoolTrue();
              td.appendChild(spnBoolTrue);
            } else {
              const spnBoolFalse = GetSpan4BoolFalse();
              td.appendChild(spnBoolFalse);
            }
            if (IsNullOrEmpty(td.className)) {
              td.className = 'text-center';
            }
          } else {
            //调用外面的函数生成一个层放在该单元格中
            const div1 = await arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text);
            if (div1 != null) {
              td.appendChild(div1);
            }
          }
          tr.appendChild(td);
          break;
        case 'Button':
          try {
            const strKeyValue = objEN.GetFldValue(strKey);
            const btn1: HTMLElement = await arrDataColumn[j].funcName(
              strKeyValue,
              arrDataColumn[j].text,
            );
            td.appendChild(btn1);
            //const btn1: HTMLButtonElement = document.createElement("Button");
            //btn1.innerText = arrDataColumn[j].text;
            //btn1.className = "btn btn-outline-info";
            //td.appendChild(btn1);
            ////td.appendChild(document.createTextNode(i + "" + j));
            ////td.style.color = "#FF0000";
            //td.className = "text-center";
          } catch (e: any) {
            console.error(e);
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
        case 'LinkButton':
          try {
            const strKeyValue = objEN.GetFldValue(strKey);
            const strText = objEN.GetFldValue(arrDataColumn[j].fldName);
            const btn1: HTMLElement = await arrDataColumn[j].funcName(strKeyValue, strText);
            td.appendChild(btn1);
            //const btn1: HTMLButtonElement = document.createElement("Button");
            //btn1.innerText = arrDataColumn[j].text;
            //btn1.className = "btn btn-outline-info";
            //td.appendChild(btn1);
            ////td.appendChild(document.createTextNode(i + "" + j));
            ////td.style.color = "#FF0000";
            //td.className = "text-center";
          } catch (e: any) {
            console.error(e);
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
        case 'a':
          try {
            const strKeyValue = objEN.GetFldValue(strKey);
            const strText = objEN.GetFldValue(arrDataColumn[j].fldName);
            const objA: HTMLAnchorElement = await arrDataColumn[j].funcName(strKeyValue, strText);
            if (objA != null) {
              td.appendChild(objA);
            }
            //const btn1: HTMLButtonElement = document.createElement("Button");
            //btn1.innerText = arrDataColumn[j].text;
            //btn1.className = "btn btn-outline-info";
            //td.appendChild(btn1);
            ////td.appendChild(document.createTextNode(i + "" + j));
            ////td.style.color = "#FF0000";
            //td.className = "text-center";
          } catch (e: any) {
            console.error(e);
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  while (divContainer.childNodes.length > 0) {
    divContainer.removeChild(divContainer.childNodes[0]);
  }
  divContainer.appendChild(table);
  arrSelectedKeys.splice(0);
}

/**
 * 隐藏对话框
 **/
export function HideDialog(strDialogName: string) {
  console.log(`隐藏对话框${strDialogName}`);
  //$(strDialogName).modal('hide');
}

/**
 * 显示对话框
 **/
export function ShowDialog(strDialogName: string) {
  console.log(`显示对话框${strDialogName}`);
  // ($(strDialogName) as any).modal("show");
  // $(strDialogName).modal('show');
}

export function ShowDiv(strDivName: string) {
  const objDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivName);
  if (objDiv == null) {
    const strMsg = Format('层:[{0}]在该界面不存在！', strDivName);
    console.error(strMsg);
    throw strMsg;
  }
  //objDiv4SelectFile.style.float = "center";
  //objDiv4SelectFile.style.border = "1px";
  objDiv.style.display = 'block';
  objDiv.style.visibility = 'visible'; //显示
  //alert(objDiv4SelectFile);
}

export function HideDiv(strDivName: string) {
  const objDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivName);
  if (objDiv == null) {
    const strMsg = Format('层:[{0}]在该界面不存在！', strDivName);
    console.error(strMsg);
    throw strMsg;
  }
  objDiv.style.display = 'none';
  objDiv.style.visibility = 'hidden'; //隐藏
  //alert(objDiv4SelectFile);
}
export function GetSpan4BoolFalse(): HTMLSpanElement {
  const objSpan: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
  objSpan.classList.add('text-danger');
  objSpan.innerHTML = '×';
  return objSpan;
}
export function GetSpan4BoolTrue(): HTMLSpanElement {
  const objSpan: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
  objSpan.classList.add('text-primary');
  objSpan.innerHTML = '√';
  return objSpan;
}

/*
 * 获取对象的所有属性名列表
 */
export function ObjectAssign(myObjT: any, myObjS: any): boolean {
  Object.assign(myObjT, myObjS);
  return true;
  //const objTypeNameS = myObjS.constructor.name;
  //const objTypeNameT = myObjT.constructor.name;

  //const sstrKeysS: Array<string> = [];

  //if (objTypeNameS.endsWith("EN") == true) {
  //    const temp = myObjS.constructor.AttributeName;
  //    for (const strKey of temp) {
  //        sstrKeysS.push(strKey);
  //    }
  //    sstrKeysS.push("sfUpdFldSetStr");
  //    sstrKeysS.push("sfFldComparisonOp");

  //}
  //else if (objTypeNameS.endsWith("ENEx") == true
  //    || objTypeNameS.indexOf("ENEx") > -1) {
  //    const temp = myObjS.constructor.AttributeName;
  //    for (const strKey of temp) {
  //        sstrKeysS.push(strKey);
  //    }
  //    for (const p1 in myObjS) {
  //        if (Object.prototype.hasOwnProperty.call(myObjS, p1)) {
  //            if (sstrKeysS.indexOf(p1) == -1) {
  //                sstrKeysS.push(p1);
  //            }
  //        }
  //    }
  //    sstrKeysS.push("sfUpdFldSetStr");
  //    sstrKeysS.push("sfFldComparisonOp");
  //}
  //else {
  //    for (const p1 in myObjS) {
  //        if (Object.prototype.hasOwnProperty.call(myObjS, p1))
  //            sstrKeysS.push(p1);
  //    }
  //}

  //const sstrKeysT: Array<string> = [];
  //if (objTypeNameT.endsWith("EN") == true) {
  //    const temp = myObjT.constructor.AttributeName;
  //    for (const strKey of temp) {
  //        sstrKeysT.push(strKey);
  //    }
  //    sstrKeysT.push("sfUpdFldSetStr");
  //    sstrKeysT.push("sfFldComparisonOp");
  //}
  //else if (objTypeNameT.endsWith("ENEx") == true || objTypeNameT.indexOf("ENEx") > -1) {
  //    const temp = myObjT.constructor.AttributeName;
  //    for (const strKey of temp) {
  //        sstrKeysT.push(strKey);
  //    }
  //    for (const p1 in myObjT) {
  //        if (Object.prototype.hasOwnProperty.call(myObjT, p1)) {
  //            if (sstrKeysT.indexOf(p1) == -1) {
  //                sstrKeysT.push(p1);
  //            }
  //        }
  //    }
  //    sstrKeysT.push("sfUpdFldSetStr");
  //    sstrKeysT.push("sfFldComparisonOp");
  //}
  //else {
  //    for (const p1 in myObjT) {
  //        if (Object.prototype.hasOwnProperty.call(myObjT, p1))
  //            sstrKeysT.push(p1);
  //    }
  //}

  ////for (const p1 in myObjT) {
  ////    if (Object.prototype.hasOwnProperty.call(myObjT, p1))
  ////        sstrKeysT.push(p1);
  ////}

  //let valueS
  //for (const strKey of sstrKeysS) {
  //    if (sstrKeysT.indexOf(strKey) == -1) continue;
  //    if (objTypeNameS.endsWith("_Sim") == true) {
  //        valueS = myObjS[strKey];
  //    }
  //    else if (objTypeNameS.endsWith("EN") == true) {
  //        valueS = myObjS.GetFldValue(strKey);
  //    }
  //    else if (objTypeNameS.endsWith("ENEx") == true) {
  //        valueS = myObjS.GetFldValue(strKey);
  //    }
  //    else if (objTypeNameS.indexOf("ENEx") > -1) {
  //        valueS = myObjS.GetFldValue(strKey);
  //    }
  //    else {
  //        valueS = myObjS[strKey];
  //    }

  //    if (objTypeNameT.endsWith("_Sim") == true) {
  //        myObjT[strKey] = valueS;
  //    }
  //    else if (objTypeNameT.endsWith("EN") == true) {
  //        myObjT.SetFldValue(strKey, valueS);
  //    }
  //    else if (objTypeNameT.endsWith("ENEx") == true) {
  //        myObjT.SetFldValue(strKey, valueS);
  //    }
  //    else if (objTypeNameT.indexOf("ENEx") > -1) {
  //        myObjT.SetFldValue(strKey, valueS);
  //    }
  //    else {
  //        myObjT[strKey] = valueS
  //    }
  //}
  //return true;
}

export function ObjectAssignV2(myObjT: any, myObjS: any): boolean {
  //Object.assign(myObjT, myObjS);
  //return true;
  const objTypeNameS = myObjS.constructor.name;
  const objTypeNameT = myObjT.constructor.name;

  const sstrKeysS: Array<string> = [];

  if (objTypeNameS.endsWith('EN') == true) {
    const temp = myObjS.constructor.AttributeName;
    for (const strKey of temp) {
      sstrKeysS.push(strKey);
    }
    sstrKeysS.push('sfUpdFldSetStr');
    sstrKeysS.push('sfFldComparisonOp');
  } else if (objTypeNameS.endsWith('ENEx') == true || objTypeNameS.indexOf('ENEx') > -1) {
    const temp = myObjS.constructor.AttributeName;
    for (const strKey of temp) {
      sstrKeysS.push(strKey);
    }
    //for (const p1 in myObjS) {
    //    if (Object.prototype.hasOwnProperty.call(myObjS, p1)) {
    //        if (sstrKeysS.indexOf(p1) == -1) {
    //            sstrKeysS.push(p1);
    //        }
    //    }
    //}
    sstrKeysS.push('sfUpdFldSetStr');
    sstrKeysS.push('sfFldComparisonOp');
  } else {
    for (const p1 in myObjS) {
      if (Object.prototype.hasOwnProperty.call(myObjS, p1)) sstrKeysS.push(p1);
    }
  }

  const sstrKeysT: Array<string> = [];
  if (objTypeNameT.endsWith('EN') == true) {
    const temp = myObjT.constructor.AttributeName;
    for (const strKey of temp) {
      sstrKeysT.push(strKey);
    }
    sstrKeysT.push('sfUpdFldSetStr');
    sstrKeysT.push('sfFldComparisonOp');
  } else if (objTypeNameT.endsWith('ENEx') == true || objTypeNameT.indexOf('ENEx') > -1) {
    const temp = myObjT.constructor.AttributeName;
    for (const strKey of temp) {
      sstrKeysT.push(strKey);
    }
    sstrKeysT.push('sfUpdFldSetStr');
    sstrKeysT.push('sfFldComparisonOp');
  } else {
    for (const p1 in myObjT) {
      if (Object.prototype.hasOwnProperty.call(myObjT, p1)) sstrKeysT.push(p1);
    }
  }

  let valueS;
  for (const strKey of sstrKeysS) {
    if (sstrKeysT.indexOf(strKey) == -1) continue;
    if (objTypeNameS.endsWith('_Sim') == true) {
      valueS = myObjS[strKey];
    } else if (objTypeNameS.endsWith('EN') == true) {
      valueS = myObjS.GetFldValue(strKey);
    } else if (objTypeNameS.endsWith('ENEx') == true) {
      valueS = myObjS.GetFldValue(strKey);
    } else if (objTypeNameS.indexOf('ENEx') > -1) {
      valueS = myObjS.GetFldValue(strKey);
    } else {
      valueS = myObjS[strKey];
    }

    if (objTypeNameT.endsWith('_Sim') == true) {
      myObjT[strKey] = valueS;
    } else if (objTypeNameT.endsWith('EN') == true) {
      myObjT.SetFldValue(strKey, valueS);
    } else if (objTypeNameT.endsWith('ENEx') == true) {
      myObjT.SetFldValue(strKey, valueS);
    } else if (objTypeNameT.indexOf('ENEx') > -1) {
      myObjT.SetFldValue(strKey, valueS);
    } else {
      myObjT[strKey] = valueS;
    }
  }
  return true;
}

export function GetSortExpress(objPagerPara: stuPagerPara): string {
  if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
    const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
    // let strSortType = 'asc';
    const strSortFld = sstrSplit[0];
    // if (sstrSplit.length > 1) strSortType = sstrSplit[1];
    //arrPrjTab_Sel = arrPrjTab_Sel.sort(PrjTabEx_SortFunByKey(strSortFld, strSortType));
    return strSortFld;
  }
  return '';
}
export function GetSortExpressInfo(objPagerPara: stuPagerPara) {
  if (objPagerPara.orderBy != null && objPagerPara.orderBy.length > 0) {
    const sstrSplit: string[] = objPagerPara.orderBy.split(' ');
    let strSortType = 'asc';
    const strSortFld = sstrSplit[0];
    if (sstrSplit.length > 1) strSortType = sstrSplit[1];
    //arrPrjTab_Sel = arrPrjTab_Sel.sort(PrjTabEx_SortFunByKey(strSortFld, strSortType));
    return {
      SortFld: strSortFld,
      SortType: strSortType,
    };
  }
  return {
    SortFld: '',
    SortType: '',
  };
}

/*
 * 根据字符串的长度决定显示的宽度
 */
export function GetWidthByWordStr(strWord: string): number {
  if (strWord.length < 3) return 40;
  else if (strWord.length < 4) return 50;
  else if (strWord.length < 5) return 60;
  else if (strWord.length < 6) return 70;
  else if (strWord.length < 7) return 80;
  else if (strWord.length < 8) return 90;
  else if (strWord.length < 9) return 100;
  else if (strWord.length < 10) return 110;
  else if (strWord.length < 11) return 120;
  else return 150;
}

export function SetAllNotCkechedItem(divList: HTMLDivElement) {
  //获取指定数据列表层

  //根据className获取数据列表层中的所有复选框
  const chkItems: HTMLCollectionOf<Element> = divList.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
  //把集合转换成Array
  const arrChkLitems: Array<HTMLInputElement> = GetArray(chkItems) as Array<HTMLInputElement>;
  for (const chkItem of arrChkLitems) {
    chkItem.checked = false;
  }
}
export function GetObjValueOfKeyV2(myObj: object, strKey: string): string {
  //   const { keys, values, entries } = Object;
  const arrEntries = Object.entries(myObj);

  for (const [key, value] of arrEntries) {
    if (strKey == key) return value;
  }
  return '';
}
export function GetObjValueOfKey(myObj: object, strKey: string): string {
  //let { keys, values, entries } = Object;
  const arrEntries = Object.entries(myObj);
  const map = new Map(arrEntries);
  const strValue = map.get(strKey);
  return strValue;
}

export function confirmDel4Msg(strMsg: string) {
  const gnl = confirm(strMsg);
  if (gnl == true) {
    return true;
  } else {
    return false;
  }
}
/*
 * 绑定下拉框
 */
export function BindDdl_CboObject(
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

export function BindDdl_CboObjectInDiv(
  strDivName: string,
  strDdlName: string,
  arrObjLst: Array<clsCboObject>,
  strValueFldName: string,
  strTextFldName: string,
  strTabCnName: string,
) {
  let sltDdl: HTMLSelectElement;
  const objDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivName);
  if (objDiv == null) {
    const strMsg = Format('层:[{0}]在该界面不存在！', strDivName);
    console.error(strMsg);
    sltDdl = document.getElementById(strDdlName);
  } else {
    const arrSelect = objDiv.getElementsByTagName('select');
    const arrElements = GetArray(arrSelect);
    sltDdl = <HTMLSelectElement>arrElements.find((x) => x.id == strDdlName);
    if (sltDdl == null) {
      const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', strDivName, strDdlName);
      console.error(strMsg);
      sltDdl = document.getElementById(strDdlName);
    }
  }
  if (sltDdl == null) {
    const strMsg = Format('在界面内，不存在下拉框:[{1}], 请检查！', strDivName, strDdlName);
    console.error(strMsg);
    throw strMsg;
  }
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
/*
 *为下拉框绑定布尔型的值，"是","否"
 */
export function BindDdl_TrueAndFalse(ddlTrueAndFalse: string) {
  //const strWhereCond = " 1 =1 ";
  const objDdl = document.getElementById(ddlTrueAndFalse);
  if (objDdl == null) {
    const strMsg = `下拉框:${ddlTrueAndFalse} 不存在！`;
    alert(strMsg);
    throw strMsg;
  }
  const arrTrueFalseLst: Array<clsCboObject> = [
    {
      text: '是',
      value: '01',
    },
    {
      text: '否',
      value: '02',
    },
  ];
  //在一行代码中不能同时使用两个其他类名
  //     BindDdl_ObjLst(ddlTrueAndFalse, arrTrueFalseLst, clsCboObject.con_Value, clsCboObject.con_Text, "是/否");
  BindDdl_CboObject(ddlTrueAndFalse, arrTrueFalseLst, 'value', 'text', '是/否');
  //console.log("1完成BindDdl_TrueAndFalse!");
}

/*
 *为下拉框绑定布尔型的值，"是","否"
 */
export function BindDdl_TrueAndFalseInDiv(strDivName: string, ddlTrueAndFalse: string) {
  let sltDdl: HTMLSelectElement;
  const objDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivName);
  if (objDiv == null) {
    const strMsg = Format('层:[{0}]在该界面不存在！', strDivName);
    console.error(strMsg);
    sltDdl = document.getElementById(ddlTrueAndFalse);
  } else {
    const arrSelect = objDiv.getElementsByTagName('select');
    const arrElements = GetArray(arrSelect);
    sltDdl = <HTMLSelectElement>arrElements.find((x) => x.id == ddlTrueAndFalse);
    if (sltDdl == null) {
      const strMsg = Format(
        '在层:[{0}]内，不存在下拉框:[{1}], 请检查！',
        strDivName,
        ddlTrueAndFalse,
      );
      console.error(strMsg);
      sltDdl = document.getElementById(ddlTrueAndFalse);
    }
  }
  if (sltDdl == null) {
    const strMsg = Format('在界面内，不存在下拉框:[{1}], 请检查！', strDivName, ddlTrueAndFalse);
    console.error(strMsg);
    throw strMsg;
  }
  const arrTrueFalseLst: Array<clsCboObject> = [
    {
      text: '是',
      value: '01',
    },
    {
      text: '否',
      value: '02',
    },
  ];
  //在一行代码中不能同时使用两个其他类名
  //     clsCommFunc4Ctrl.BindDdl_ObjLst(ddlTrueAndFalse, arrTrueFalseLst, clsCboObject.con_Value, clsCboObject.con_Text, "是/否");
  BindDdl_CboObject(ddlTrueAndFalse, arrTrueFalseLst, 'value', 'text', '是/否');
  //console.log("1完成BindDdl_TrueAndFalse!");
}

/*
 * 根据Id获取元素,在层(Div)内查找相应元素
 */
export function getElementByIdInDiv(
  strDivName: string,
  strControlType: string,
  strControlId: string,
): HTMLElement {
  if (IsNullOrEmpty(strControlType) == true) {
    const strMsg = Format('在层:{0}中查找控件:[{1}]时, 类型不能为空！', strDivName, strControlId);
    console.error(strMsg);
    throw strMsg;
  }

  const objDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivName);
  if (objDiv == null) {
    const strMsg = Format('层:[{0}]在该界面不存在！', strDivName);
    console.error(strMsg);
    throw strMsg;
  }
  const arrElements0 = objDiv.getElementsByTagName(strControlType);
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLElement = <HTMLElement>arrElements.find((x) => x.id == strControlId);
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[{1}]的元素:[{2}], 请检查！',
      strDivName,
      strControlType,
      strControlId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}
export function myShowErrorMsg(strErrInfo: string) {
  let funCurrFunction = arguments.callee; //获取函数定义的全部内容
  const arrFuncName: Array<string> = [];
  while (funCurrFunction !== null) {
    arrFuncName.push((<any>funCurrFunction).name);
    //arrFuncName.push(funCurrFunction.toString());
    funCurrFunction = funCurrFunction.caller;
  }
  let strPath = '';
  let strTop = arrFuncName.pop();
  while (arrFuncName.length >= 0) {
    if (strTop === '') {
      strTop = '匿名';
    }
    if (strPath === '') {
      strPath = `${strTop}()`;
    } else {
      if (strTop !== '匿名') {
        strPath = `${strPath}->${strTop}()`;
      }
    }
    if (arrFuncName.length === 0) {
      break;
    }
    strTop = arrFuncName.pop();
  }

  const strErrorMsg = `出错信息:${strErrInfo} (错误来自于函数:${strPath})`;
  console.error(strErrorMsg);
  alert(strErrorMsg);
}
/*
 * 绑定下拉框,在层(Div)内查找相应下拉框
 */
export function BindDdl_ObjLstInDiv(
  strDivName: string,
  strDdlName: string,
  arrObjLst: Array<clsGeneralTab>,
  strValueFldName: string,
  strTextFldName: string,
  strTabCnName: string,
) {
  let sltDdl: HTMLSelectElement;
  const objDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivName);
  if (objDiv == null) {
    const strMsg = Format('层:[{0}]在该界面不存在！', strDivName);
    console.error(strMsg);
    sltDdl = document.getElementById(strDdlName);
  } else {
    const arrSelect = objDiv.getElementsByTagName('select');
    const arrElements = GetArray(arrSelect);
    sltDdl = <HTMLSelectElement>arrElements.find((x) => x.id == strDdlName);
    if (sltDdl == null) {
      const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', strDivName, strDdlName);
      console.error(strMsg);
      sltDdl = document.getElementById(strDdlName);
    }
  }
  if (sltDdl == null) {
    const strMsg = Format('在界面内，不存在下拉框:[{1}], 请检查！', strDivName, strDdlName);
    console.error(strMsg);
    throw strMsg;
  }
  //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
  sltDdl.options.length = 0;
  const strText = `选${strTabCnName}...`;

  sltDdl.options.add(new Option(strText, '0'));
  let i = 0;
  for (i = 0; i < arrObjLst.length; i++) {
    const objCurr = arrObjLst[i];

    sltDdl.options.add(
      new Option(objCurr.GetFldValue(strTextFldName), objCurr.GetFldValue(strValueFldName)),
    );
  }
}
export function BindDdl_ObjLstInDivObj(
  objDiv: HTMLDivElement,
  strDdlName: string,
  arrObjLst: Array<clsGeneralTab>,
  strValueFldName: string,
  strTextFldName: string,
  strTabCnName: string,
) {
  let sltDdl: HTMLSelectElement;
  if (objDiv == null) {
    sltDdl = document.getElementById(strDdlName);
  } else {
    const arrSelect = objDiv.getElementsByTagName('select');
    const arrElements = GetArray(arrSelect);
    sltDdl = <HTMLSelectElement>arrElements.find((x) => x.id == strDdlName);
    if (sltDdl == null) {
      const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', objDiv.id, strDdlName);
      console.error(strMsg);
      sltDdl = document.getElementById(strDdlName);
    }
  }
  if (sltDdl == null) {
    const strMsg = Format('在界面内，不存在下拉框:[{1}], 请检查！', objDiv.id, strDdlName);
    console.error(strMsg);
    throw strMsg;
  }
  //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
  sltDdl.options.length = 0;
  const strText = `选${strTabCnName}...`;

  sltDdl.options.add(new Option(strText, '0'));
  let i = 0;
  for (i = 0; i < arrObjLst.length; i++) {
    const objCurr = arrObjLst[i];

    sltDdl.options.add(
      new Option(objCurr.GetFldValue(strTextFldName), objCurr.GetFldValue(strValueFldName)),
    );
  }
}
/*
 * 绑定下拉框,在层(Div)内查找相应下拉框
 */
export function BindDdl_ObjLstInDiv_V(
  strDivName: string,
  strDdlName: string,
  arrObjLst: Array<clsGeneralTabV>,
  strValueFldName: string,
  strTextFldName: string,
  strTabCnName: string,
) {
  let sltDdl: HTMLSelectElement;
  const objDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(strDivName);
  if (objDiv == null) {
    const strMsg = Format('层:[{0}]在该界面不存在！', strDivName);
    console.error(strMsg);
    sltDdl = document.getElementById(strDdlName);
  } else {
    const arrSelect = objDiv.getElementsByTagName('select');
    const arrElements = GetArray(arrSelect);
    sltDdl = <HTMLSelectElement>arrElements.find((x) => x.id == strDdlName);
    if (sltDdl == null) {
      const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', strDivName, strDdlName);
      console.error(strMsg);
      sltDdl = document.getElementById(strDdlName);
    }
  }
  if (sltDdl == null) {
    const strMsg = Format('在界面内，不存在下拉框:[{1}], 请检查！', strDivName, strDdlName);
    console.error(strMsg);
    throw strMsg;
  } //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
  sltDdl.options.length = 0;
  const strText = `选${strTabCnName}...`;

  sltDdl.options.add(new Option(strText, '0'));
  let i = 0;
  for (i = 0; i < arrObjLst.length; i++) {
    const objCurr = arrObjLst[i];

    sltDdl.options.add(
      new Option(objCurr.GetFldValue(strTextFldName), objCurr.GetFldValue(strValueFldName)),
    );
  }
}
/*
 * 绑定下拉框
 */
export function BindDdl_ObjLst(
  strDdlName: string,
  arrObjLst: Array<clsGeneralTab>,
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
      new Option(objCurr.GetFldValue(strTextFldName), objCurr.GetFldValue(strValueFldName)),
    );
  }
}

/*
 * 绑定下拉框
 */
export function BindDdl_ObjLst_V(
  strDdlName: string,
  arrObjLst: Array<clsGeneralTabV>,
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
      new Option(objCurr.GetFldValue(strTextFldName), objCurr.GetFldValue(strValueFldName)),
    );
  }
}
/*
 * 设置使特定关键字的复选框被选
 * strKeyId:关键字
 */
export function SetNotCkechedItem4KeyId(divList: HTMLDivElement, strKeyId: string) {
  if (divList == null) {
    const strMsg = Format('使关键字:[{0}]不选择所在的层在该界面不存在！', strKeyId);
    console.error(strMsg);
    throw strMsg;
  }
  //获取指定数据列表层
  // const divList: HTMLDivElement = document.getElementById(strArrayDiv) as HTMLDivElement;
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
  chk4KeyId.checked = false;
}

export function SetCkechedItem4KeyId(strArrayDiv: string, strKeyId: string) {
  //获取指定数据列表层
  const divList: HTMLDivElement = document.getElementById(strArrayDiv) as HTMLDivElement;
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

///*
// * 获取对象的所有属性名列表
// */
//export function GetObjKeys(myObj: clsGeneralTab_Sim): Array<string> {
//    const sstrKeys: Array<string> = [];
//    for (const p1 in myObj) {
//        if (Object.prototype.hasOwnProperty.call(myObj, p1))
//            sstrKeys.push(p1);
//    }
//    return sstrKeys;
//}
export function SetAllCkechedKeysV2(tabName: HTMLDivElement, thisChk: any) {
  console.log('thisChk(In SetAllCkechedKeysV2):', thisChk);
  //event = window.event || event;
  const thisEventObj: HTMLInputElement = thisChk;

  const arrKeys = tabName.getElementsByClassName('CheckInTab');
  const bolIsCheck = thisEventObj.checked;

  const arrKeyLst: Array<HTMLInputElement> = GetArray(arrKeys) as Array<HTMLInputElement>;

  arrKeyLst.forEach((e) => (e.checked = bolIsCheck));
  console.log('所选记录的个数:', arrKeys.length.toString());
}
export function GetExceptionStr(objException: any) {
  let strEx = '';
  if (typeof objException == 'string') {
    strEx = objException;
  } else if (typeof objException == 'number') {
    strEx = objException.toString();
  } else if (typeof objException == 'boolean') {
    strEx = objException.toString();
  } else {
    strEx = '';
  }
  return strEx;
}

//js获取网站根路径(站点及虚拟目录)，获得网站的根目录或虚拟目录的根地址
export function getRootPath() {
  const strFullPath = document.location.href;
  const strPath = document.location.pathname;
  const pos = strFullPath.indexOf(strPath);
  const prePath = strFullPath.substring(0, pos);
  const postPath = strPath.substring(0, strPath.substring(1).indexOf('/') + 1);
  return prePath + postPath;
}
/*
 * 获取对象的所有属性名列表
 */
export function GetObjKeys(myObj: object): Array<string> {
  const sstrKeys: Array<string> = [];
  for (const p1 in myObj) {
    if (Object.prototype.hasOwnProperty.call(myObj, p1)) sstrKeys.push(p1);
  }
  return sstrKeys;
}

export function sortFun() {}
/*
 * 重新转向本项目新的Url地址
 */
export function Redirect(LocUrl: string) {
  const strWebRoot = getRootPath();
  //console.log(strWebRoot);
  if (strWebRoot.indexOf('http://') >= 0 || strWebRoot.indexOf('https://') >= 0) {
    let strShortUrl = '';
    if (LocUrl.substring(0, 1) == '/') {
      strShortUrl = strWebRoot + LocUrl;
    } else {
      strShortUrl = `${strWebRoot}/${LocUrl}`;
    }

    //显示信息框
    //console.log(strShortUrl);
    window.location.href = strShortUrl;
    return;
  }
  const strProtocol = location.protocol;
  const strHost = location.host;
  //   const strPathName = location.pathname;
  let strShortUrl = `/${strWebRoot}/${LocUrl}`;
  strShortUrl = strShortUrl.replace('//', '/');
  strShortUrl = strShortUrl.replace('//', '/');
  //显示信息框
  const strNewLink = `${strProtocol}//${strHost}${strShortUrl}`;

  console.log(strNewLink);
  window.location.href = strNewLink;
}
/*
 * 确认删除函数
 */
export function confirmDel(intCount: number) {
  let strMsg = Format('你真的确定要删除记录吗?');
  if (intCount > 0) {
    strMsg = Format('你真的确定要删除{0}条记录吗?', intCount);
  }
  const gnl = confirm(strMsg);
  if (gnl == true) {
    return true;
  } else {
    return false;
  }
}

export function SortFun() {}

/*
 * 获取列表中所有被选的复选框的关键字值，以列表方式(Array<string>)返回
 */
export function GetCheckedKeyIds(): Array<string> {
  const divList: HTMLDivElement = document.getElementById('divList') as HTMLDivElement;
  const chkItems: HTMLCollectionOf<Element> = divList.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
  const arrChkLitems: Array<HTMLInputElement> = GetArray(chkItems) as Array<HTMLInputElement>;

  const chkCheckedItems: Array<HTMLInputElement> = arrChkLitems.filter((x) => x.checked == true);

  const arrSelectedKeys: Array<string> = chkCheckedItems.map((x) => {
    const strId = x.id;
    const strKey = strId.substring(3);
    return strKey;
  });

  //intCheckedCount = chkCheckedItems.length;
  //for (let i = 0; i < intCheckedCount; i++) {
  //    strIdCurrEduclschkItem: HTMLInputElement = chkCheckedItems[i] as HTMLInputElement;
  //    strIdCurrEduclsstrId = chkItem.id;
  //    strIdCurrEduclsstrKey = strId.substring(3);
  //    arrSelectedKeys.push(strKey);
  //}
  //    alert(intCount.toString() + "::" + intCheckedCount.toString());
  return arrSelectedKeys;
}

export function GetCheckedKeyIdsInDiv(strDivName: string): Array<string> {
  const divList: HTMLDivElement = document.getElementById(strDivName) as HTMLDivElement;
  const chkItems: HTMLCollectionOf<Element> = divList.getElementsByClassName('CheckInTab'); // as Array<HTMLInputElement>;
  const arrChkLitems: Array<HTMLInputElement> = GetArray(chkItems) as Array<HTMLInputElement>;

  const chkCheckedItems: Array<HTMLInputElement> = arrChkLitems.filter((x) => x.checked == true);

  const arrSelectedKeys: Array<string> = chkCheckedItems.map((x) => {
    const strId = x.id;
    const strKey = strId.substring(3);
    return strKey;
  });

  //intCheckedCount = chkCheckedItems.length;
  //for (let i = 0; i < intCheckedCount; i++) {
  //    strIdCurrEduclschkItem: HTMLInputElement = chkCheckedItems[i] as HTMLInputElement;
  //    strIdCurrEduclsstrId = chkItem.id;
  //    strIdCurrEduclsstrKey = strId.substring(3);
  //    arrSelectedKeys.push(strKey);
  //}
  //    alert(intCount.toString() + "::" + intCheckedCount.toString());
  return arrSelectedKeys;
}

/*
 * 获取列表中第一个选中的复选框的关键字
 */
export function GetFirstCheckedKeyId(): string {
  const divListName = 'divDataLst';
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

/*
 * 把对象列表绑定到列表控件中，即把对象列表的值显示出来，这是一个新的版本(V2)
 */
export function BindTabV2Where(
  divContainer: HTMLDivElement,
  arrObjLst: Array<clsGeneralTab>,
  arrDataColumn: Array<clsDataColumn>,
  strKey: string,
  strWhere: string,
) {
  //strIdCurrEduclso = document.getElementById("divResult13");
  //if (o == null) {
  //    alert("divResult13不存在！");
  //    return;
  //}
  //strIdCurrEduclssstrFldName: Array<string> = new Array<string>();
  //strIdCurrEduclssstrColHeader: Array<string> = new Array<string>();
  //sstrFldName.push("IdentityID"); sstrColHeader.push("身份Id");
  //sstrFldName.push("IdentityDesc"); sstrColHeader.push("身份名");
  //sstrFldName.push("memo"); sstrColHeader.push("备注");
  const table: HTMLTableElement = document.createElement('table');
  table.id = 'tab4Bind';
  table.className = 'table table-striped table-condensed table-bordered';
  const tbody = document.createElement('tbody');

  //table.width = intWidth;
  //table.height = h;
  //table.border = 1;
  //table.height = h;
  table.border = '1';
  const intRowNum = arrObjLst.length;
  const intColNum = arrDataColumn.length;
  const trHead: HTMLTableRowElement = document.createElement('tr');
  trHead.className = 'row-height';

  for (let j = 0; j < intColNum; j++) {
    const td = document.createElement('td');
    const check00 = document.createElement('input');
    const a1: HTMLAnchorElement = document.createElement('a');
    switch (arrDataColumn[j].columnType) {
      case 'CheckBox':
        check00.type = 'checkbox';
        check00.id = `chkHead`;
        check00.name = 'chkHead';
        check00.className = 'CheckInTab';
        //check00.attributes["onclick"] = "SetAllCkechedKeys('tab4Bind')";
        check00.onclick = function () {
          SetAllCkechedKeys(divContainer);
        };
        td.appendChild(check00);

        break;
      case 'Label':
        a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
        a1.text = arrDataColumn[j].colHeader; //i + "" + j;
        //判断传入的值，然后显示调用不同的方法
        if (strWhere == 'TopicUser') {
          //用户
          a1.href = `javascript:SortByUser('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTUser') {
          //主题用户关系
          a1.href = `javascript:SortByRTUser('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicPaper') {
          //论文
          a1.href = `javascript:SortByPaper('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTPaper') {
          //主题论文关系
          a1.href = `javascript:SortByRTPaper('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicViewpoint') {
          //个人观点
          a1.href = `javascript:SortByViewpoint('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTViewpoint') {
          //主题个人观点关系
          a1.href = `javascript:SortByRTViewpoint('${arrDataColumn[j].fldName}');`;
        }
        //else if (strWhere == "TopicExpertViewpoint") {
        //    //专家观点
        //    a1.href = `javascript:SortByExpertViewpoint('${arrDataColumn[j].fldName}');`;
        //}
        else if (strWhere == 'TopicRTExpertViewpoint') {
          //主题专家观点关系
          a1.href = `javascript:SortByRTExpertViewpoint('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicConcept') {
          //概念
          a1.href = `javascript:SortByConcept('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTConcept') {
          //主题概念关系
          a1.href = `javascript:SortByRTConcept('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicObjectiveFact') {
          //客观事实
          a1.href = `javascript:SortByObjectiveFact('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTObjectiveFact') {
          //主题客观事实关系
          a1.href = `javascript:SortByRTObjectiveFact('${arrDataColumn[j].fldName}');`;
        }
        //else if (strWhere == "TopicObjectiveBasis") {
        //    //客观依据
        //    a1.href = `javascript:SortByObjectiveBasis('${arrDataColumn[j].fldName}');`;
        //}
        else if (strWhere == 'TopicRTObjectiveBasis') {
          //主题客观依据关系
          a1.href = `javascript:SortByRTObjectiveBasis('${arrDataColumn[j].fldName}');`;
        }
        //else if (strWhere == "TopicPaperList") {
        //    //论文列表
        //    a1.href = `javascript:SortByPaperList('${arrDataColumn[j].fldName}');`;
        //}
        else {
          a1.href = `javascript:SortBy('${arrDataColumn[j].fldName}');`;
        }

        //                td.innerHTML = objEN["IdentityDesc"];//i + "" + j;
        td.appendChild(a1);
        //td.appendChild(document.createTextNode(i + "" + j));
        //td.style.color = "#FF0000";
        td.className = 'text-center';
        break;

      case 'Button':
        try {
          const span1: HTMLSpanElement = document.createElement('span');
          console.log(arrDataColumn[j].colHeader);
          span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
          span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;
          //                td.innerHTML = objEN["IdentityDesc"];//i + "" + j;
          td.appendChild(span1);
          //td.appendChild(document.createTextNode(i + "" + j));
          //td.style.color = "#FF0000";
          td.className = 'text-center';
        } catch (e: any) {
          const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
          throw strMsg;
        }
        break;
    }
    trHead.appendChild(td);
  }
  tbody.appendChild(trHead);
  for (let i = 0; i < intRowNum; i++) {
    const objEN: clsGeneralTab = arrObjLst[i];
    const tr: HTMLTableRowElement = document.createElement('tr');
    tr.className = 'row-height';

    for (let j = 0; j < intColNum; j++) {
      const td = document.createElement('td');
      const check: HTMLInputElement = document.createElement('input');
      const strKeyValue = objEN.GetFldValue(strKey);
      switch (arrDataColumn[j].columnType) {
        case 'CheckBox':
          check.type = 'checkbox';
          check.id = `chk${strKeyValue}`;
          check.name = 'chkInTab';
          check.className = 'CheckInTab';
          //            check.attributes["onclick"] = `ChkClick(this, '${strKeyValue}')`;
          //check.onclick = (function () {
          //    ChkClick(this);
          //});
          td.appendChild(check);
          break;
        case 'Label':
          td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
          //td.appendChild(document.createTextNode(i + "" + j));
          //td.style.color = "#FF0000";
          td.className = 'text-center';
          tr.appendChild(td);
          break;

        case 'Button':
          try {
            const btn1: HTMLElement = arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text);
            td.appendChild(btn1);
          } catch (e: any) {
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  while (divContainer.childNodes.length > 0) {
    divContainer.removeChild(divContainer.childNodes[0]);
  }
  divContainer.appendChild(table);
  arrSelectedKeys.splice(0);
}

/*
 * 把对象列表绑定到列表控件中，即把对象列表的值显示出来，这是一个新的版本(V2)
 */
export function BindTabV2WhereV(
  divContainer: HTMLDivElement,
  arrObjLst: Array<clsGeneralTabV>,
  arrDataColumn: Array<clsDataColumn>,
  strKey: string,
  strWhere: string,
) {
  //strIdCurrEduclso = document.getElementById("divResult13");
  //if (o == null) {
  //    alert("divResult13不存在！");
  //    return;
  //}
  //strIdCurrEduclssstrFldName: Array<string> = new Array<string>();
  //strIdCurrEduclssstrColHeader: Array<string> = new Array<string>();
  //sstrFldName.push("IdentityID"); sstrColHeader.push("身份Id");
  //sstrFldName.push("IdentityDesc"); sstrColHeader.push("身份名");
  //sstrFldName.push("memo"); sstrColHeader.push("备注");
  const table: HTMLTableElement = document.createElement('table');
  table.id = 'tab4Bind';
  table.className = 'table table-striped table-condensed table-bordered';
  const tbody = document.createElement('tbody');

  //table.width = intWidth;
  //table.height = h;
  //table.border = 1;
  //table.height = h;
  //   table.border = '1';
  const intRowNum = arrObjLst.length;
  const intColNum = arrDataColumn.length;
  const trHead: HTMLTableRowElement = document.createElement('tr');
  trHead.className = 'row-height';

  for (let j = 0; j < intColNum; j++) {
    const td = document.createElement('td');
    const a1 = document.createElement('a');
    const check00: HTMLInputElement = document.createElement('input');
    switch (arrDataColumn[j].columnType) {
      case 'CheckBox':
        check00.type = 'checkbox';
        check00.id = `chkHead`;
        check00.name = 'chkHead';
        check00.className = 'CheckInTab';
        //check00.attributes["onclick"] = "SetAllCkechedKeys('tab4Bind')";
        check00.onclick = function () {
          SetAllCkechedKeys(divContainer);
        };
        td.appendChild(check00);

        break;
      case 'Label':
        a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
        a1.text = arrDataColumn[j].colHeader; //i + "" + j;
        //判断传入的值，然后显示调用不同的方法
        if (strWhere == 'TopicUser') {
          //用户
          a1.href = `javascript:SortByUser('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTUser') {
          //主题用户关系
          a1.href = `javascript:SortByRTUser('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicPaper') {
          //论文
          a1.href = `javascript:SortByPaper('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTPaper') {
          //主题论文关系
          a1.href = `javascript:SortByRTPaper('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicViewpoint') {
          //个人观点
          a1.href = `javascript:SortByViewpoint('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTViewpoint') {
          //主题个人观点关系
          a1.href = `javascript:SortByRTViewpoint('${arrDataColumn[j].fldName}');`;
        }
        //else if (strWhere == "TopicExpertViewpoint") {
        //    //专家观点
        //    a1.href = `javascript:SortByExpertViewpoint('${arrDataColumn[j].fldName}');`;
        //}
        else if (strWhere == 'TopicRTExpertViewpoint') {
          //主题专家观点关系
          a1.href = `javascript:SortByRTExpertViewpoint('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicConcept') {
          //概念
          a1.href = `javascript:SortByConcept('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTConcept') {
          //主题概念关系
          a1.href = `javascript:SortByRTConcept('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicObjectiveFact') {
          //客观事实
          a1.href = `javascript:SortByObjectiveFact('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTObjectiveFact') {
          //主题客观事实关系
          a1.href = `javascript:SortByRTObjectiveFact('${arrDataColumn[j].fldName}');`;
        }
        //else if (strWhere == "TopicObjectiveBasis") {
        //    //客观依据
        //    a1.href = `javascript:SortByObjectiveBasis('${arrDataColumn[j].fldName}');`;
        //}
        else if (strWhere == 'TopicRTObjectiveBasis') {
          //主题客观依据关系
          a1.href = `javascript:SortByRTObjectiveBasis('${arrDataColumn[j].fldName}');`;
        }
        //else if (strWhere == "TopicPaperList") {
        //    //论文列表
        //    a1.href = `javascript:SortByPaperList('${arrDataColumn[j].fldName}');`;
        //}
        else {
          a1.href = `javascript:SortBy('${arrDataColumn[j].fldName}');`;
        }

        //                td.innerHTML = objEN["IdentityDesc"];//i + "" + j;
        td.appendChild(a1);
        //td.appendChild(document.createTextNode(i + "" + j));
        //td.style.color = "#FF0000";
        td.className = 'text-center';
        break;

      case 'Button':
        try {
          const span1: HTMLSpanElement = document.createElement('span');
          console.log(arrDataColumn[j].colHeader);
          span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
          span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;
          //                td.innerHTML = objEN["IdentityDesc"];//i + "" + j;
          td.appendChild(span1);
          //td.appendChild(document.createTextNode(i + "" + j));
          //td.style.color = "#FF0000";
          td.className = 'text-center';
        } catch (e: any) {
          const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
          throw strMsg;
        }
        break;
    }
    trHead.appendChild(td);
  }
  tbody.appendChild(trHead);
  for (let i = 0; i < intRowNum; i++) {
    const objEN: clsGeneralTabV = arrObjLst[i];
    const tr: HTMLTableRowElement = document.createElement('tr');
    tr.className = 'row-height';

    for (let j = 0; j < intColNum; j++) {
      const td = document.createElement('td');
      const check: HTMLInputElement = document.createElement('input');
      const strKeyValue = objEN.GetFldValue(strKey);
      switch (arrDataColumn[j].columnType) {
        case 'CheckBox':
          check.type = 'checkbox';
          check.id = `chk${strKeyValue}`;
          check.name = 'chkInTab';
          check.className = 'CheckInTab';
          //            check.attributes["onclick"] = `ChkClick(this, '${strKeyValue}')`;
          //check.onclick = (function () {
          //    ChkClick(this);
          //});
          td.appendChild(check);
          break;
        case 'Label':
          td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
          //td.appendChild(document.createTextNode(i + "" + j));
          //td.style.color = "#FF0000";
          td.className = 'text-center';
          tr.appendChild(td);
          break;

        case 'Button':
          try {
            const strKeyValue = objEN.GetFldValue(strKey);
            const btn1: HTMLElement = arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text);
            td.appendChild(btn1);
          } catch (e: any) {
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  while (divContainer.childNodes.length > 0) {
    divContainer.removeChild(divContainer.childNodes[0]);
  }
  divContainer.appendChild(table);
  arrSelectedKeys.splice(0);
}

/*
 * 确认删除函数
 */
export function confirm_del(intCount: number) {
  let strMsg = Format('你真的确定要删除记录吗?');
  if (intCount > 0) {
    strMsg = Format('你真的确定要删除{0}条记录吗?', intCount);
  }
  const gnl = confirm(strMsg);
  if (gnl == true) {
    return true;
  } else {
    return false;
  }
}

export function confirm_del4Msg(strMsg: string) {
  const gnl = confirm(strMsg);
  if (gnl == true) {
    return true;
  } else {
    return false;
  }
}

/*
 * 绑定下拉框,在层(Div)内查找相应下拉框
 */
export function BindDdl_ObjLstInDivObj_V(
  objDiv: HTMLDivElement,
  strDdlName: string,
  arrObjLst: Array<clsGeneralTabV>,
  strValueFldName: string,
  strTextFldName: string,
  strTabCnName: string,
) {
  let sltDdl: HTMLSelectElement;

  if (objDiv == null) {
    // const strMsg = Format('层:[{0}]在该界面不存在！', objDiv.id);
    // console.error(strMsg);
    sltDdl = document.getElementById(strDdlName);
  } else {
    const arrSelect = objDiv.getElementsByTagName('select');
    const arrElements = GetArray(arrSelect);
    sltDdl = <HTMLSelectElement>arrElements.find((x) => x.id == strDdlName);
    if (sltDdl == null) {
      const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', objDiv.id, strDdlName);
      console.error(strMsg);
      sltDdl = document.getElementById(strDdlName);
    }
  }
  if (sltDdl == null) {
    const strMsg = Format('在界面内，不存在下拉框:[{1}], 请检查！', objDiv.id, strDdlName);
    console.error(strMsg);
    throw strMsg;
  } //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
  sltDdl.options.length = 0;
  const strText = `选${strTabCnName}...`;

  sltDdl.options.add(new Option(strText, '0'));
  let i = 0;
  for (i = 0; i < arrObjLst.length; i++) {
    const objCurr = arrObjLst[i];

    sltDdl.options.add(
      new Option(objCurr.GetFldValue(strTextFldName), objCurr.GetFldValue(strValueFldName)),
    );
  }
}

/*
 *为下拉框绑定布尔型的值，"是","否"
 */
export function BindDdl_TrueAndFalseInDivObj(objDiv: HTMLDivElement, ddlTrueAndFalse: string) {
  let sltDdl: HTMLSelectElement;

  if (objDiv == null) {
    sltDdl = document.getElementById(ddlTrueAndFalse);
  } else {
    const arrSelect = objDiv.getElementsByTagName('select');
    const arrElements = GetArray(arrSelect);
    sltDdl = <HTMLSelectElement>arrElements.find((x) => x.id == ddlTrueAndFalse);
    if (sltDdl == null) {
      const strMsg = Format(
        '在层:[{0}]内，不存在下拉框:[{1}], 请检查！',
        objDiv.id,
        ddlTrueAndFalse,
      );
      console.error(strMsg);
      sltDdl = document.getElementById(ddlTrueAndFalse);
    }
  }
  if (sltDdl == null) {
    const strMsg = Format('在界面内，不存在下拉框:[{1}], 请检查！', objDiv.id, ddlTrueAndFalse);
    console.error(strMsg);
    throw strMsg;
  }
  const arrTrueFalseLst: Array<clsCboObject> = [
    {
      text: '是',
      value: '01',
    },
    {
      text: '否',
      value: '02',
    },
  ];
  //在一行代码中不能同时使用两个其他类名
  //     clsCommFunc4Ctrl.BindDdl_ObjLst(ddlTrueAndFalse, arrTrueFalseLst, clsCboObject.con_Value, clsCboObject.con_Text, "是/否");
  BindDdl_CboObjectInDivObj(objDiv, ddlTrueAndFalse, arrTrueFalseLst, 'value', 'text', '是/否');
  //console.log("1完成BindDdl_TrueAndFalse!");
}

/*
 * 根据Id获取元素,在层(Div)内查找相应元素
 */
export function getElementByIdInDivObj(
  objDiv: HTMLDivElement,
  strControlType: string,
  strControlId: string,
): HTMLElement {
  if (IsNullOrEmpty(strControlType) == true) {
    const strMsg = Format('在层:{0}中查找控件:[{1}]时, 类型不能为空！', objDiv.id, strControlId);
    console.error(strMsg);
    throw strMsg;
  }

  const arrElements0 = objDiv.getElementsByTagName(strControlType);
  const arrElements = GetArray(arrElements0);
  const objElement: HTMLElement = <HTMLElement>arrElements.find((x) => x.id == strControlId);
  if (objElement == null) {
    const strMsg = Format(
      '在层:[{0}]内，不存在类型为:[{1}]的元素:[{2}], 请检查！',
      objDiv.id,
      strControlType,
      strControlId,
    );
    console.error(strMsg);
    throw strMsg;
  }
  return objElement;
}

export function HideTrInDiv1(strDivName: HTMLDivElement, strTr: string) {
  const objTr = getTrObjByIdInDivObj(strDivName, strTr);
  objTr.style.visibility = 'hidden';
  objTr.style.display = 'none';
}

export function SetNotCkechedItem4KeyIdObj(divList: HTMLDivElement, strKeyId: string) {
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
  chk4KeyId.checked = false;
}

export function BindDdl_CboObjectInDivObj(
  objDiv: HTMLDivElement,
  strDdlName: string,
  arrObjLst: Array<clsCboObject>,
  strValueFldName: string,
  strTextFldName: string,
  strTabCnName: string,
) {
  let sltDdl: HTMLSelectElement;

  if (objDiv == null) {
    const strMsg = Format('层在该界面不存在！');
    console.error(strMsg);
    sltDdl = document.getElementById(strDdlName);
  } else {
    const arrSelect = objDiv.getElementsByTagName('select');
    const arrElements = GetArray(arrSelect);
    sltDdl = <HTMLSelectElement>arrElements.find((x) => x.id == strDdlName);
    if (sltDdl == null) {
      const strMsg = Format('在层:[{0}]内，不存在下拉框:[{1}], 请检查！', objDiv.id, strDdlName);
      console.error(strMsg);
      sltDdl = document.getElementById(strDdlName);
    }
  }
  if (sltDdl == null) {
    const strMsg = Format('在界面内，不存在下拉框:[{1}], 请检查！', objDiv.id, strDdlName);
    console.error(strMsg);
    throw strMsg;
  }
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

/*
 * 把对象列表绑定到列表控件中，即把对象列表的值显示出来，这是一个新的版本(V2)
 */
export function BindTabV2Where_V(
  divContainer: HTMLDivElement,
  arrObjLst: Array<clsGeneralTabV>,
  arrDataColumn: Array<clsDataColumn>,
  strKey: string,
  strWhere: string,
) {
  //strIdCurrEduclso = document.getElementById("divResult13");
  //if (o == null) {
  //    alert("divResult13不存在！");
  //    return;
  //}
  //strIdCurrEduclssstrFldName: Array<string> = new Array<string>();
  //strIdCurrEduclssstrColHeader: Array<string> = new Array<string>();
  //sstrFldName.push("IdentityID"); sstrColHeader.push("身份Id");
  //sstrFldName.push("IdentityDesc"); sstrColHeader.push("身份名");
  //sstrFldName.push("memo"); sstrColHeader.push("备注");
  const table: HTMLTableElement = document.createElement('table');
  table.id = 'tab4Bind';
  table.className = 'table table-striped table-condensed table-bordered';
  const tbody = document.createElement('tbody');

  //table.width = intWidth;
  //table.height = h;
  //table.border = 1;
  //table.height = h;
  table.border = '1';
  const intRowNum = arrObjLst.length;
  const intColNum = arrDataColumn.length;
  const trHead: HTMLTableRowElement = document.createElement('tr');
  trHead.className = 'row-height';

  for (let j = 0; j < intColNum; j++) {
    const td = document.createElement('td');
    let check00;
    let a1;
    switch (arrDataColumn[j].columnType) {
      case 'CheckBox':
        check00 = document.createElement('input');
        check00.type = 'checkbox';
        check00.id = `chkHead`;
        check00.name = 'chkHead';
        check00.className = 'CheckInTab';
        //check00.attributes["onclick"] = "SetAllCkechedKeys('tab4Bind')";
        check00.onclick = function () {
          SetAllCkechedKeys(divContainer);
        };
        td.appendChild(check00);

        break;
      case 'Label':
        a1 = document.createElement('a');
        a1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
        a1.text = arrDataColumn[j].colHeader; //i + "" + j;
        //判断传入的值，然后显示调用不同的方法
        if (strWhere == 'TopicUser') {
          //用户
          a1.href = `javascript:SortByUser('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTUser') {
          //主题用户关系
          a1.href = `javascript:SortByRTUser('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicPaper') {
          //论文
          a1.href = `javascript:SortByPaper('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTPaper') {
          //主题论文关系
          a1.href = `javascript:SortByRTPaper('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicViewpoint') {
          //个人观点
          a1.href = `javascript:SortByViewpoint('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTViewpoint') {
          //主题个人观点关系
          a1.href = `javascript:SortByRTViewpoint('${arrDataColumn[j].fldName}');`;
        }
        //else if (strWhere == "TopicExpertViewpoint") {
        //    //专家观点
        //    a1.href = `javascript:SortByExpertViewpoint('${arrDataColumn[j].fldName}');`;
        //}
        else if (strWhere == 'TopicRTExpertViewpoint') {
          //主题专家观点关系
          a1.href = `javascript:SortByRTExpertViewpoint('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicConcept') {
          //概念
          a1.href = `javascript:SortByConcept('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTConcept') {
          //主题概念关系
          a1.href = `javascript:SortByRTConcept('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicObjectiveFact') {
          //客观事实
          a1.href = `javascript:SortByObjectiveFact('${arrDataColumn[j].fldName}');`;
        } else if (strWhere == 'TopicRTObjectiveFact') {
          //主题客观事实关系
          a1.href = `javascript:SortByRTObjectiveFact('${arrDataColumn[j].fldName}');`;
        }
        //else if (strWhere == "TopicObjectiveBasis") {
        //    //客观依据
        //    a1.href = `javascript:SortByObjectiveBasis('${arrDataColumn[j].fldName}');`;
        //}
        else if (strWhere == 'TopicRTObjectiveBasis') {
          //主题客观依据关系
          a1.href = `javascript:SortByRTObjectiveBasis('${arrDataColumn[j].fldName}');`;
        }
        //else if (strWhere == "TopicPaperList") {
        //    //论文列表
        //    a1.href = `javascript:SortByPaperList('${arrDataColumn[j].fldName}');`;
        //}
        else {
          a1.href = `javascript:SortBy('${arrDataColumn[j].fldName}');`;
        }

        //                td.innerHTML = objEN["IdentityDesc"];//i + "" + j;
        td.appendChild(a1);
        //td.appendChild(document.createTextNode(i + "" + j));
        //td.style.color = "#FF0000";
        td.className = 'text-center';
        break;

      case 'Button':
        try {
          const span1: HTMLSpanElement = document.createElement('span');
          console.log(arrDataColumn[j].colHeader);
          span1.nodeValue = arrDataColumn[j].colHeader; //i + "" + j;
          span1.innerText = arrDataColumn[j].colHeader; //i + "" + j;
          //                td.innerHTML = objEN["IdentityDesc"];//i + "" + j;
          td.appendChild(span1);
          //td.appendChild(document.createTextNode(i + "" + j));
          //td.style.color = "#FF0000";
          td.className = 'text-center';
        } catch (e: any) {
          const strMsg = `建立表头不成功。类型:${arrDataColumn[j].columnType},列头:${arrDataColumn[j].colHeader}`;
          throw strMsg;
        }
        break;
    }
    trHead.appendChild(td);
  }
  tbody.appendChild(trHead);
  for (let i = 0; i < intRowNum; i++) {
    const objEN: clsGeneralTabV = arrObjLst[i];
    const tr: HTMLTableRowElement = document.createElement('tr');
    tr.className = 'row-height';

    for (let j = 0; j < intColNum; j++) {
      const td = document.createElement('td');
      let check;
      let strKeyValue;
      switch (arrDataColumn[j].columnType) {
        case 'CheckBox':
          check = document.createElement('input');
          check.type = 'checkbox';
          strKeyValue = objEN.GetFldValue(strKey);
          check.id = `chk${strKeyValue}`;
          check.name = 'chkInTab';
          check.className = 'CheckInTab';
          //            check.attributes["onclick"] = `ChkClick(this, '${strKeyValue}')`;
          //check.onclick = (function () {
          //    ChkClick(this);
          //});
          td.appendChild(check);
          break;
        case 'Label':
          td.innerHTML = objEN.GetFldValue(arrDataColumn[j].fldName); //i + "" + j;
          //td.appendChild(document.createTextNode(i + "" + j));
          //td.style.color = "#FF0000";
          td.className = 'text-center';
          tr.appendChild(td);
          break;

        case 'Button':
          try {
            const strKeyValue = objEN.GetFldValue(strKey);
            const btn1: HTMLElement = arrDataColumn[j].funcName(strKeyValue, arrDataColumn[j].text);
            td.appendChild(btn1);
          } catch (e: any) {
            const strMsg = `绑定表行不成功。类型:${arrDataColumn[j].columnType},文本:${arrDataColumn[j].text}`;
            throw strMsg;
          }
          break;
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  while (divContainer.childNodes.length > 0) {
    divContainer.removeChild(divContainer.childNodes[0]);
  }
  divContainer.appendChild(table);
  arrSelectedKeys.splice(0);
}
