/*
 * 功能:为Web提供一些几个公共的功能函数
 * 版本:2019-08-07-01
 * 作者:潘以锋
 * */

import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

declare const document: any;

export class clsPubFun4Button {
  /*
   * 重新转向本项目新的Url地址
   */
  public static GetButton_Add(strCommandName = ''): HTMLButtonElement {
    const btn1: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    btn1.title = '添加界面';
    btn1.className = 'btn btn-sm';

    if (IsNullOrEmpty(strCommandName)) {
      btn1.setAttribute('onclick', "btn_Click('AddNewRecord')");
    } else {
      btn1.setAttribute('onclick', strCommandName);
    }
    //btn1.style.height = "20px";
    //btn1.style.width = "20px";
    const img1: HTMLImageElement = <HTMLImageElement>document.createElement('img');
    img1.src = '../images/001_01.png';

    img1.width = 20;
    img1.height = 20;
    btn1.appendChild(img1);
    return btn1;
  }

  public static GetButton_Update(strCommandName = ''): HTMLButtonElement {
    const btn1: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    btn1.title = '修改界面属性';
    btn1.className = 'btn btn-sm';

    if (IsNullOrEmpty(strCommandName)) {
      btn1.setAttribute('onclick', "btn_Click('Update')");
    } else {
      btn1.setAttribute('onclick', strCommandName);
    }
    //btn1.style.height = "20px";
    //btn1.style.width = "20px";
    const img1: HTMLImageElement = <HTMLImageElement>document.createElement('img');
    img1.src = '../images/001_45.png';

    img1.width = 20;
    img1.height = 20;
    btn1.appendChild(img1);
    return btn1;
  }
  public static GetButton_Delete(strCommandName = ''): HTMLButtonElement {
    const btn1: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
    btn1.className = 'btn btn-sm';
    btn1.title = '删除界面';
    if (IsNullOrEmpty(strCommandName)) {
      btn1.setAttribute('onclick', "btn_Click('Delete')");
    } else {
      btn1.setAttribute('onclick', strCommandName);
    }
    //btn1.style.height = "20px";
    //btn1.style.width = "20px";
    const img1: HTMLImageElement = <HTMLImageElement>document.createElement('img');
    img1.src = '../images/001_29.png';

    img1.width = 20;
    img1.height = 20;
    btn1.appendChild(img1);
    return btn1;
  }
  public static GetImage_Delete(strCommandName = ''): HTMLImageElement {
    const img1: HTMLImageElement = <HTMLImageElement>document.createElement('img');
    img1.src = '../images/001_29.png';
    img1.title = '删除记录';
    img1.width = 20;
    img1.height = 20;
    if (IsNullOrEmpty(strCommandName)) {
      img1.setAttribute('onclick', "btn_Click('Delete')");
    } else {
      img1.setAttribute('onclick', strCommandName);
    }

    return img1;
  }
  public static GetImage_DeleteNoCommand(): HTMLImageElement {
    const img1: HTMLImageElement = <HTMLImageElement>document.createElement('img');
    img1.src = '../images/001_29.png';
    img1.title = '删除记录';
    img1.width = 20;
    img1.height = 20;

    return img1;
  }
  public static GetImage_KeyNoCommand(): HTMLImageElement {
    const img1: HTMLImageElement = <HTMLImageElement>document.createElement('img');
    img1.src = '../images/key.png';
    img1.title = '关键字';
    img1.width = 11;
    img1.height = 20;

    return img1;
  }
  public static GetImage_Update(strCommandName = ''): HTMLImageElement {
    const img1: HTMLImageElement = <HTMLImageElement>document.createElement('img');
    img1.src = '../images/001_45.png';
    img1.title = '修改记录';
    img1.width = 20;
    img1.height = 20;
    if (IsNullOrEmpty(strCommandName)) {
      img1.setAttribute('onclick', "btn_Click('Update')");
    } else {
      img1.setAttribute('onclick', strCommandName);
    }

    return img1;
  }
  public static GetImage_UpdateNoCommand(): HTMLImageElement {
    const img1: HTMLImageElement = <HTMLImageElement>document.createElement('img');
    img1.src = '../images/001_45.png';
    img1.title = '修改记录';
    img1.width = 20;
    img1.height = 20;

    return img1;
  }
}
