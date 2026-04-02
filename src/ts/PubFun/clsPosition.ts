export class clsPos {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
export function PositionGetObjPos(ATarget: HTMLElement) {
  const target = ATarget;

  const pos = new clsPos(target.offsetLeft, target.offsetTop);

  let parTarget = target.offsetParent; //(1)
  if (parTarget == null) return pos;
  while (parTarget) {
    const objTarget = <HTMLElement>parTarget;
    pos.x += objTarget.offsetLeft;
    pos.y += objTarget.offsetTop;
    parTarget = objTarget.offsetParent; //(2)
  }
  return pos;
}
/*
 * 设置一个div从当前位置，设置高度到屏幕底部
 */
export function Position_SetDiv_Bottom(strDivScroll: string) {
  const divScroll = <HTMLDivElement>document.getElementById(strDivScroll);
  //console.log(divScroll);
  if (divScroll == null) return;
  const objPos = PositionGetObjPos(divScroll);
  //console.log(pos);
  //intclientHeight = document.body.clientHeight
  const intavailHeight = window.screen.availHeight;
  const divHeight = intavailHeight - objPos.y - 170;
  console.log('divHeight', divHeight);
  divScroll.style.height = `${divHeight}px`;
  //intclientTop = divScroll.clientTop;
  //intclientLeft = divScroll.clientLeft;
  //console.error('intclientTop', intclientTop);
  //console.error('intclientLeft', intclientLeft);
  //strIdCurrEduclslblbMsg = document.getElementById("lblMsg");
  //const strMsg = `clientTop:${divScroll.clientTop}<br/>`;
  //strMsg += `clientLeft:${divScroll.clientLeft}<br/>`;
  //lblbMsg.innerHTML = strMsg;
}

export function Position_SetDiv_Bottom_FeatureRegion(strDivScroll: string) {
  const divScroll = <HTMLDivElement>document.getElementById(strDivScroll);
  //console.log(divScroll);
  if (divScroll == null) return;
  const objPos = PositionGetObjPos(divScroll);
  //console.log(pos);
  //intclientHeight = document.body.clientHeight
  const intavailHeight = window.screen.availHeight;
  const divHeight = intavailHeight - objPos.y - 150;
  console.log('divHeight', divHeight);
  divScroll.style.height = `${divHeight}px`;
  //intclientTop = divScroll.clientTop;
  //intclientLeft = divScroll.clientLeft;
  //console.error('intclientTop', intclientTop);
  //console.error('intclientLeft', intclientLeft);
  //strIdCurrEduclslblbMsg = document.getElementById("lblMsg");
  //const strMsg = `clientTop:${divScroll.clientTop}<br/>`;
  //strMsg += `clientLeft:${divScroll.clientLeft}<br/>`;
  //lblbMsg.innerHTML = strMsg;
}

/*
 * 设置一个div从当前位置，设置高度到屏幕底部
 */
export function Position_SetDiv_Right(strDivScroll: string) {
  const divScroll = <HTMLDivElement>document.getElementById(strDivScroll);
  //console.log(divScroll);
  const objPos = PositionGetObjPos(divScroll);
  //console.log(pos);
  //intclientHeight = document.body.clientHeight
  const intavailWidth = window.screen.availWidth;
  const divWidth = intavailWidth - objPos.x - 170;
  console.log('divWidth', divWidth);
  divScroll.style.width = `${divWidth}px`;
  //intclientTop = divScroll.clientTop;
  //intclientLeft = divScroll.clientLeft;
  //console.error('intclientTop', intclientTop);
  //console.error('intclientLeft', intclientLeft);
  //strIdCurrEduclslblbMsg = document.getElementById("lblMsg");
  //const strMsg = `clientTop:${divScroll.clientTop}<br/>`;
  //strMsg += `clientLeft:${divScroll.clientLeft}<br/>`;
  //lblbMsg.innerHTML = strMsg;
}
