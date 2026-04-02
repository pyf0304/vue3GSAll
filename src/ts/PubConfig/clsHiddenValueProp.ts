import { GetInputValueInDivObj, SetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
export function GetHidPaperRWId(objDiv: HTMLDivElement | null): string {
  if (objDiv == null) {
    const strMsg = `在获取hidPaperRWId过程中, objDiv为空,请检查!(in GetHidPaperRWId)`;
    console.error(strMsg);
    return '';
  }
  try {
    const strPaperRWId = GetInputValueInDivObj(objDiv, 'hidPaperRWId');
    return strPaperRWId;
  } catch (e: any) {
    return '';
  }
}
export function SetHidPaperRWId(objDiv: HTMLDivElement | null, strValue: string) {
  if (objDiv == null) {
    const strMsg = `在获取hidPaperRWId过程中, objDiv为空,请检查!(in GetHidPaperRWId)`;
    console.error(strMsg);
    return '';
  }

  SetInputValueInDivObj(objDiv, 'hidPaperRWId', strValue);
}
export function GetHidPaperId(objDiv: HTMLDivElement | null): string {
  if (objDiv == null) {
    const strMsg = `在获取hidPaperId过程中, objDiv为空,请检查!(in GetHidPaperId)`;
    console.error(strMsg);
    return '';
  }
  try {
    const strPaperId = GetInputValueInDivObj(objDiv, 'hidPaperId');
    return strPaperId;
  } catch (e: any) {
    return '';
  }
}
export function SetHidPaperId(objDiv: HTMLDivElement | null, strValue: string) {
  if (objDiv == null) {
    const strMsg = `在获取hidPaperId过程中, objDiv为空,请检查!(in GetHidPaperId)`;
    console.error(strMsg);
    return '';
  }

  SetInputValueInDivObj(objDiv, 'hidPaperId', strValue);
}
