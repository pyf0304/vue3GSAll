/*
 * 功能：一些公共的功能函数
 * 版本：2019-07-24-01
 * 作者：潘以锋
 * */

declare let window: any;

export let btnQuery4SelectFileId = '';

//js获取网站根路径(站点及虚拟目录)，获得网站的根目录或虚拟目录的根地址
export function getRootPath() {
  const strFullPath = window.document.location.href;
  const strPath = window.document.location.pathname;
  const pos = strFullPath.indexOf(strPath);
  const prePath = strFullPath.substring(0, pos);
  const postPath = strPath.substring(0, strPath.substring(1).indexOf('/') + 1);
  return prePath + postPath;
}

export function SetQuery4SelectFileId(strValue: string) {
  btnQuery4SelectFileId = strValue;
}
export function btnQuery4SelectFileIdClick() {
  const hidbtnQueryClientID: HTMLInputElement = getObjByTagAndId(
    'input',
    'hidbtnQueryClientID',
  ) as HTMLInputElement;
  if (hidbtnQueryClientID !== null) {
    const btnQuery = getObjByTagAndId('input', hidbtnQueryClientID.value);
    if (btnQuery === null) return;
    btnQuery.click();
  }
}

//在当前页面中，获取某名称开始的，某类型（type），某标签(TagName)的对象列表
export function GetObjectLstByTypeTagNameAndStartName(
  strType: string,
  strTagName: string,
  strStartName: string,
) {
  const objLst = document.getElementsByTagName(strTagName);
  const arrLst: Array<HTMLInputElement> = GetArray(objLst) as Array<HTMLInputElement>;
  const arrFind: Array<HTMLInputElement> = arrLst.filter(
    (x) => x.name.indexOf(strStartName) > -1 && x.type == strType,
  );

  //const objTargetObjLst = new Array();
  //for (let i = 0; i < objLst.length; i++) {
  //    const objT = objLst[i];
  //    strIdCurrEduclsstrObjName = objT.name;
  //    if (strObjName.indexOf(strStartName) > -1) {
  //        if (objT.type === strType) {
  //            objTargetObjLst.push(objT);
  //        }
  //    }
  //}
  //    alert("0000" + objTargetObjLst.length);
  return arrFind;
}

//在当前页面中，获取某名称开始的，某类型（type），某标签(TagName)的对象列表
export function GetObjectLstByTypeTagNameAndStartIdName(
  strType: string,
  strTagName: string,
  strStartIdName: string,
) {
  const objLst = document.getElementsByTagName(strTagName);
  const arrLst: Array<HTMLInputElement> = GetArray(objLst) as Array<HTMLInputElement>;
  const arrFind: Array<HTMLInputElement> = arrLst.filter(
    (x) => x.id.indexOf(strStartIdName) > -1 && x.type == strType,
  );
  //if (arrFind.length > 0) return arrFind[0].value;

  //const objTargetObjLst = new Array();
  //for (let i = 0; i < objLst.length; i++) {
  //    const objT = objLst[i];
  //    strIdCurrEduclsstrObjId = objT.id;
  //    if (strObjId.indexOf(strStartIdName) > -1) {
  //        if (objT.type === strType) {
  //            objTargetObjLst.push(objT);
  //        }
  //    }
  //}
  //    alert("0000" + objTargetObjLst.length);
  return arrFind;
}

//在当前页面中，获取某名称，某标签(TagName)的对象值
export function getValueByTagAndName(TagType: string, varName: string) {
  const ObjList = document.getElementsByTagName(TagType);
  const arrLst: Array<HTMLInputElement> = GetArray(ObjList) as Array<HTMLInputElement>;
  const arrFind: Array<HTMLInputElement> = arrLst.filter((x) => x.name.indexOf(varName));
  if (arrFind.length > 0) return arrFind[0].value;
  return '';
}

//在当前页面中，获取某名称，某标签(TagName)的对象值
export function getValueByTagAndName2(TagType: string, varName1: string, varName2: string) {
  const ObjList = document.getElementsByTagName(TagType);
  const arrLst: Array<HTMLInputElement> = GetArray(ObjList) as Array<HTMLInputElement>;
  const arrFind: Array<HTMLInputElement> = arrLst.filter(
    (x) => x.name.indexOf(varName1) && x.name.indexOf(varName2),
  );
  if (arrFind.length > 0) return arrFind[0].value;
  //for (let i = 0; i < ObjList.length; i++) {
  //    varObjName = ObjList[i].name;
  //    if (varObjName.indexOf(varName1) >= 0 && varObjName.indexOf(varName2) >= 0) {
  //        varValue = ObjList[i].value;
  //        return varValue;
  //    }
  //}
  return '';
}

//在当前页面中，获取某名称，某标签(TagName)的对象值
export function getValueByObjListAndName(ObjList: any, varName: string) {
  //strIdCurrEduclsObjList = document.getElementsByTagName(TagType);

  for (let i = 0; i < ObjList.length; i++) {
    const varObjName = ObjList[i].name;
    if (varObjName.indexOf(varName) >= 0) {
      const varValue = ObjList[i].value;
      return varValue;
    }
  }
  return '';
}

function GetArray(arr: any): Array<HTMLElement> {
  const arrLst: Array<HTMLElement> = new Array<HTMLElement>();
  for (let i = 0; i < arr.length; i++) {
    const chk: HTMLElement = arr[i]; // as HTMLElement;
    arrLst.push(chk);
  }
  return arrLst;
}

//在当前页面中，获取某名称Id，某标签(TagName)的对象
export function getObjByTagAndId(TagType: string, varId: string) {
  const ObjList = document.getElementsByTagName(TagType);
  const arrLst: Array<HTMLElement> = GetArray(ObjList);
  const arrFind: Array<HTMLElement> = arrLst.filter((x) => x.id == varId);
  if (arrFind.length > 0) return arrFind[0];
  return null;
  //for (let i = 0; i < ObjList.length; i++) {
  //    varObjId = ObjList[i].id;
  //    if (varObjId.indexOf(varId) >= 0) {
  //        return ObjList[i];
  //    }
  //}
  //return null;
}
export function getObjByClassAndId(className: string, varId: string) {
  const ObjList = document.getElementsByClassName(className);
  const arrLst: Array<HTMLElement> = GetArray(ObjList);
  const arrFind: Array<HTMLElement> = arrLst.filter((x) => x.id.indexOf(varId));
  if (arrFind.length > 0) return arrFind[0];
  return null;
}
export function getObjLstByClass(className: string): HTMLCollectionOf<Element> {
  const ObjList = document.getElementsByClassName(className);
  return ObjList;
}
//在当前页面中，获取某名称Id，某标签(TagName)的对象
export function getObjByTagAndId2(TagType: string, varId1: string, varId2: string) {
  const ObjList = document.getElementsByTagName(TagType);
  const arrLst: Array<HTMLElement> = GetArray(ObjList);
  const arrFind: Array<HTMLElement> = arrLst.filter(
    (x) => x.id.indexOf(varId1) && x.id.indexOf(varId2),
  );
  if (arrFind.length > 0) return arrFind[0];
  return null;
}
//在当前页面中，在对象列表中获取某名称Id的对象名
export function getObjByObjListAndId(ObjList: any, varId: string) {
  //strIdCurrEduclsObjList = document.getElementsByTagName(TagType);

  for (let i = 0; i < ObjList.length; i++) {
    const varObjId = ObjList[i].id;
    if (varObjId.indexOf(varId) >= 0) {
      return ObjList[i];
    }
  }
  return null;
}

export function IsContainByID(strOrigin: string, strSub: string) {
  let result = false;
  try {
    if (strOrigin !== '' && strSub !== '') {
      if (strOrigin.toString().indexOf(strSub) > -1) {
        result = true;
      }
    }
  } catch (e: any) {}
  return result;
}

export function getOsInfo4Page() {
  const objBrowserInfo: HTMLInputElement = getObjByTagAndId(
    'input',
    'hidBrowserInfo',
  ) as HTMLInputElement;
  if (objBrowserInfo !== null) {
    objBrowserInfo.value = getBrowserInfo();
  }
}
export function getBrowserInfo() {
  let OsObject = '';
  let OsVersion = '';
  let MachineName = '';
  let IsMobile = '';
  let BrowserInfo = '';
  let iLen = 0;
  let ii = -1;
  let strSS = '';

  const isSafari = navigator.userAgent.indexOf('Safari');
  const isMozilla = navigator.userAgent.indexOf('Gecko/');
  const isFirefox = navigator.userAgent.indexOf('Firefox');
  const isCamino = navigator.userAgent.indexOf('Camino');
  const iMachineName = navigator.userAgent.indexOf('Android');
  const iMachineNameArm = navigator.userAgent.indexOf('ARM');
  const iTouch = navigator.userAgent.indexOf('Touch');
  const iMachineNameIphone = navigator.userAgent.indexOf('iPhone');
  const iMachineNameiPad = navigator.userAgent.indexOf('iPad');
  const iMobile = navigator.userAgent.indexOf('Mobile');
  if (navigator.userAgent.indexOf('MSIE') > 0) {
    OsObject = 'MSIE';
    if (navigator.userAgent.indexOf('MSIE 6.0') > 0) {
      OsVersion = '6.0';
    } else if (navigator.userAgent.indexOf('MSIE 7.0') > 0) {
      OsVersion = '7.0';
    } else if (navigator.userAgent.indexOf('MSIE 8.0') > 0) {
      OsVersion = '8.0';
    } else if (navigator.userAgent.indexOf('MSIE 9.0') > 0) {
      OsVersion = '9.0';
    } else if (navigator.userAgent.indexOf('MSIE 10.0') > 0) {
      OsVersion = '10.0';
    } else if (navigator.userAgent.indexOf('MSIE 11.0') > 0) {
      OsVersion = '11.0';
    } else if (navigator.userAgent.indexOf('MSIE 12.0') > 0) {
      OsVersion = '12.0';
    } else {
      OsVersion = 'other version';
    }
    //navigator.appVersion.match(/6./i) == "6." ? 'IE6' : 'other version';//：在已知是IE浏览器的情况下，可以通过此方法判断是否是IE6；
    //navigator.userAgent.indexOf("MSIE 6.0") > 0 ? 'IE7' : 'other version';//：同上；
    //navigator.appVersion.match(/7./i) == "7." ? 'IE7' : 'other version';//：在已知是IE浏览器的情况下，可以通过此方法判断是否是IE7；
    //navigator.userAgent.indexOf("MSIE 7.0") > 0 ? 'IE7' : 'other version';//：同上；
    //navigator.appVersion.match(/8./i) == "8." ? 'IE8' : 'other version';//：在已知是IE浏览器的情况下，可以通过此方法判断是否是IE8；
    //navigator.userAgent.indexOf("MSIE 8.0") > 0 ? 'IE8' : 'other version';//：同上。
    //OsObject = "MSIE" + navigator.appVersion;
  } else if (isSafari > 0) {
    OsObject = 'Safari';
    ii = navigator.userAgent.indexOf('Safari');
    iLen = navigator.userAgent.length;
    strSS = navigator.userAgent.substring(ii, iLen);
    OsVersion = strSS.substring(7, strSS.length);
  } else if (isFirefox > 0) {
    OsObject = 'Firefox';
    ii = navigator.userAgent.indexOf('Firefox');
    iLen = navigator.userAgent.length;
    strSS = navigator.userAgent.substring(ii, iLen);
    OsVersion = strSS.substring(8, strSS.length);
  } else if (isCamino > 0) {
    OsObject = 'Camino';
    ii = navigator.userAgent.indexOf('Camino');
    iLen = navigator.userAgent.length;
    strSS = navigator.userAgent.substring(ii, iLen);
    OsVersion = strSS.substring(7, strSS.length);
  } else if (isMozilla > 0) {
    OsObject = 'Gecko';
    ii = navigator.userAgent.indexOf('Gecko');
    iLen = navigator.userAgent.length;
    strSS = navigator.userAgent.substring(ii, iLen);
    OsVersion = strSS.substring(6, strSS.length);
  }
  if (iMachineNameIphone > 0) {
    MachineName = 'iPhone';
  } else if (iMachineNameiPad > 0) {
    MachineName = 'iPad';
  } else if (iMachineName > 0) {
    MachineName = 'Android';
  } else if (iMachineNameArm > 0 && iTouch > 0) {
    MachineName = 'Surface';
  } else {
    MachineName = 'PC';
  }

  if (iMobile > 0) {
    IsMobile = 'true';
  } else {
    IsMobile = 'false';
  }

  BrowserInfo = `${OsObject}|${OsVersion}|${MachineName}|${IsMobile}`;
  return BrowserInfo;
}

//关闭父窗口
export function ParentClose() {
  //   parent.window.opener = null;
  parent.window.close();
}

//关闭当前窗口
export function WindowClose() {
  window.opener = null;
  window.close();
}

export function ShowSelectFileDiv(TextBox4SelectFile: string) {
  //strTextBox4SelectFile = TextBox4SelectFile;
  const hidFileName: HTMLInputElement = getObjByTagAndId(
    'input',
    'hidFileName',
  ) as HTMLInputElement;
  if (hidFileName === null) return;
  hidFileName.value = TextBox4SelectFile;
  const objDiv4SelectFile: HTMLDivElement = getObjByTagAndId(
    'div',
    'divSelectFile',
  ) as HTMLDivElement;
  if (objDiv4SelectFile === null) return;

  if (objDiv4SelectFile) {
    if (objDiv4SelectFile.style.display === 'block') {
      Tz_HideDiv4Element(objDiv4SelectFile);
    } else {
      Tz_ShowDiv4Element(objDiv4SelectFile);
    }
  }
  const divMsg: HTMLDivElement = getObjByTagAndId('div', 'divMsg') as HTMLDivElement;
  if (divMsg !== null) {
    // const strType = 'BindFileList';
    //CallServer("BindData|" + strType + "!none" , divMsg);
  }
  //alert(objDiv4SelectFile);
}

export function ShowSelectFileDiv2() {
  const objDiv4SelectFile: HTMLDivElement = getObjByTagAndId(
    'div',
    'divSelectFile',
  ) as HTMLDivElement;
  if (objDiv4SelectFile === null) return;

  if (objDiv4SelectFile) {
    //objDiv4SelectFile.style.float = "center";
    //objDiv4SelectFile.style.border = "1px";
    objDiv4SelectFile.style.display = 'block';
    objDiv4SelectFile.style.visibility = 'visible'; //显示
  }
}

export function SetShowSelectFileDiv(NewValue: string) {
  const hidFileName: HTMLInputElement = getObjByTagAndId(
    'input',
    'hidFileName',
  ) as HTMLInputElement;
  if (hidFileName === null) return;
  const strTextBox4SelectFile1 = hidFileName.value;
  const objTextBox4SelectFile: HTMLInputElement = getObjByTagAndId(
    'input',
    strTextBox4SelectFile1,
  ) as HTMLInputElement;
  if (objTextBox4SelectFile === null) return;

  objTextBox4SelectFile.value = NewValue;
}

export function Tz_ShowDiv(strDivName: string) {
  const objDiv: HTMLDivElement = getObjByTagAndId('div', strDivName) as HTMLDivElement;
  if (objDiv === null) return;

  if (objDiv) {
    //objDiv4SelectFile.style.float = "center";
    //objDiv4SelectFile.style.border = "1px";
    objDiv.style.display = 'block';
    objDiv.style.visibility = 'visible'; //显示
  }
  //alert(objDiv4SelectFile);
}

export function Tz_HideDiv(strDivName: string) {
  const objDiv: HTMLDivElement = getObjByTagAndId('div', strDivName) as HTMLDivElement;
  if (objDiv === null) return;
  if (objDiv) {
    objDiv.style.display = 'none';
    objDiv.style.visibility = 'hidden'; //隐藏
  }
  //alert(objDiv4SelectFile);
}

export function Tz_ShowDiv4Element(objDiv: HTMLDivElement) {
  //const objDiv = getObjByTagAndId("div", strDivName);
  if (objDiv === null) return;

  if (objDiv) {
    //objDiv4SelectFile.style.float = "center";
    //objDiv4SelectFile.style.border = "1px";
    objDiv.style.display = 'block';
    objDiv.style.visibility = 'visible'; //显示
  }
  //alert(objDiv4SelectFile);
}

export function Tz_HideDiv4Element(objDiv: HTMLDivElement) {
  //const objDiv = getObjByTagAndId("div", strDivName);
  if (objDiv === null) return;
  if (objDiv) {
    objDiv.style.display = 'none';
    objDiv.style.visibility = 'hidden'; //隐藏
  }
  //alert(objDiv4SelectFile);
}

export function ReceiveServerData(result: any, con_Text: any) {
  if (result !== '') {
    con_Text.innerHTML = result;
  }
}

export function OnlyShowDiv(divName4Disp: string, parentClassName: string, subClassName: string) {
  const ObjLst = getObjLstByClass(parentClassName);
  //intCount;
  //intCount = ObjLst.length;
  for (let i = 0; i < ObjLst.length; i++) {
    const divCurr = ObjLst[i];
    const varObjId = divCurr.id;
    if (varObjId === divName4Disp) {
      const subDivLst = divCurr.getElementsByClassName(subClassName);
      for (let j = 0; j < subDivLst.length; j++) {
        const divInFor: HTMLDivElement = subDivLst[j] as HTMLDivElement;
        Tz_ShowDiv4Element(divInFor);
      }
    } else {
      const subDivLst = divCurr.getElementsByClassName(subClassName);
      for (let j = 0; j < subDivLst.length; j++) {
        const divInFor: HTMLDivElement = subDivLst[j] as HTMLDivElement;
        Tz_HideDiv4Element(divInFor);
      }
    }
  }
  //alert(intCount.toString());
  //Tz_HideDiv("a1");
}
export function myShowErrorMsg(strErrInfo: string) {
  let funCurrFunction = arguments.callee; //获取函数定义的全部内容
  const arrFuncName = new Array<string>();
  while (funCurrFunction !== null) {
    arrFuncName.push(funCurrFunction.name);
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

  const strErrorMsg = `出错信息:${strErrInfo} (错误来自于函数：${strPath})`;
  alert(strErrorMsg);
}

export function GetCurrClassFunc(): string {
  let funCurrFunction = arguments.callee; //获取函数定义的全部内容
  const arrFuncName = new Array<string>();
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
  return strPath;
}

export function GetStrLen(strTemp: string) {
  //->Int

  //byte[] sarr = System.text.Encoding.Default.GetBytes(strTemp);
  const len = strTemp.length; //.characters.count; //will output as 3+3*2=9
  return len;
}

//获取不带“Http的”根目录
export function getVirtualRootPathWeb() {
  //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
  //strIdCurrEduclscurWwwPath = window.document.location.href;
  //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
  const pathName = window.document.location.pathname;
  //strIdCurrEduclspos = curWwwPath.indexOf(pathName);
  //获取主机地址，如： http://localhost:8083
  //strIdCurrEduclslocalhostPath = curWwwPath.substring(0, pos);
  //获取带"/"的项目名，如：/uimcardprj
  const projectName = pathName.substring(0, pathName.substring(1).indexOf('/') + 1);
  return projectName;
}

//获取带“Http的”根目录
export function getRootPathWeb() {
  //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
  const curWwwPath = window.document.location.href;
  //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
  const pathName = window.document.location.pathname;
  const pos = curWwwPath.indexOf(pathName);
  //获取主机地址，如： http://localhost:8083
  const localhostPath = curWwwPath.substring(0, pos);
  //获取带"/"的项目名，如：/uimcardprj
  const projectName = pathName.substring(0, pathName.substring(1).indexOf('/') + 1);
  return localhostPath + projectName;
}

//获取带“Http的”主机地址.例如
export function getHostAddressWeb() {
  //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
  const curWwwPath = window.document.location.href;
  //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
  const pathName = window.document.location.pathname;
  const pos = curWwwPath.indexOf(pathName);
  //获取主机地址，如： http://localhost:8083
  const localhostPath = curWwwPath.substring(0, pos);
  //获取带"/"的项目名，如：/uimcardprj
  //strIdCurrEduclsprojectName = pathName.substring(0, pathName.substring(1).indexOf('/') + 1);
  return localhostPath;
}

export function LogError(objException: any) {
  //Log the error information to the Application Log
  //   let strLogMsg;
  console.log(objException);
}
