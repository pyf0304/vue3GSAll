import { IsNullOrEmpty } from './clsString';

export class conErrType {
  public static get conQryRegion(): string {
    return '查询区错误';
  } //类Id
  public static get conEditRegion(): string {
    return '编辑区错误';
  } //类Id
  public static get conDetailRegion(): string {
    return '详细区错误';
  } //类Id
  public static get conExcelExportRegion(): string {
    return 'Excel导出区错误';
  } //类Id
  public static get conFeatureRegion(): string {
    return '功能区错误';
  } //类Id
  public static get conListRegion(): string {
    return '列表区错误';
  } //类Id
  public static get conTabField(): string {
    return '表字段错误';
  } //类Id
  public static get conCmClassId(): string {
    return 'cmClassId';
  } //类Id
}
export class clsErrMsgENEx {
  public ErrType = '';
  public ErrNum = 0;
  public toString(): string {
    if (IsNullOrEmpty(this.ErrType) == true) return '';
    if (this.ErrNum == 0) return '';
    return `${this.ErrType}: ${this.ErrNum.toString()}`;
  }
  public static GetObjByErrMsg(strErrMsg: string) {
    const objErrMsg = new clsErrMsgENEx('', 0);
    const arr = strErrMsg.split(':');
    if (arr.length == 0) throw '错误信息不能为空！';
    if (arr.length >= 1) {
      objErrMsg.ErrType = arr[0];
    }
    if (arr.length >= 2) {
      try {
        objErrMsg.ErrNum = Number(arr[1]);
      } catch {
        objErrMsg.ErrNum = 0;
      }
    }
    return objErrMsg;
  }
  constructor(strErrType: string, intErrNum: number) {
    this.ErrType = strErrType;
    this.ErrNum = intErrNum;
  }
}
export class clsErrMsgBLEx {
  public static GetErrMsgObjLstByErrMsg(strErrMsgLst: string): Array<clsErrMsgENEx> {
    const arrErrMsg = new Array<clsErrMsgENEx>();
    const arrErrMsgLst = strErrMsgLst.split(';');
    if (arrErrMsgLst.length == 0) return arrErrMsg;
    for (const strErrMsg in arrErrMsgLst) {
      const objErrMsg = clsErrMsgENEx.GetObjByErrMsg(strErrMsg);
      if (objErrMsg != null) arrErrMsg.push(objErrMsg);
    }
    return arrErrMsg;
  }
  public static GetErrMsgByObjLst(arrErrMsg: Array<clsErrMsgENEx>): string {
    const arrErrMsgLst = arrErrMsg.map((x) => x.toString());
    const strErrMsgLst = arrErrMsgLst.join(';');
    return strErrMsgLst;
  }

  public static AddObj(arrErrMsg: Array<clsErrMsgENEx>, objErrMsgNew: clsErrMsgENEx): boolean {
    if (arrErrMsg.filter((x) => x.ErrType == objErrMsgNew.ErrType).length == 0) {
      arrErrMsg.push(objErrMsgNew);
      return true;
    }
    const arrErrMsgDel = arrErrMsg.filter((x) => x.ErrType == objErrMsgNew.ErrType);
    arrErrMsgDel.push(objErrMsgNew);
    return true;
  }
}

export function AccessBtnClickDefault(strCommandName: string, strFuncName: string) {
  const strMsg = `命令:${strCommandName}在函数(${strFuncName})中没有被处理！`;
  console.error(strMsg);
  alert(strMsg);
}
export function AccessSubmitClickDefault(strCommandText: string, strFuncName: string) {
  const strMsg = `按钮文本:${strCommandText}在switch中没有处理！(In ${strFuncName})`;
  console.error(strMsg);
  alert(strMsg);
}

export function AccessBindGvDefault(strType: string) {
  const strMsg = `类型(strType):${strType}在BindGvCache函数的switch中没有被处理！`;
  console.error(strMsg);
  alert(strMsg);
}

export function AccessCtlTypeDefault(strCtlTypeName: string, strFuncName: string) {
  const strMsg = `控件类型:${strCtlTypeName}在函数(${strFuncName})中没有被处理！`;
  console.error(strMsg);
  alert(strMsg);
}

export function AccessBtnEditClickDefault(
  strCommandName: string,
  strKeyId: string,
  strFuncName: string,
) {
  const strMsg = `命令:${strCommandName}, 关键字:${strKeyId}在函数(${strFuncName})中没有被处理！`;
  console.error(strMsg);
  alert(strMsg);
}
