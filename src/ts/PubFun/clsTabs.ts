/*
 * 功能：用于分页的功能函数
 * 版本：2021-06-05-01
 * 作者：潘以锋
 * */

import { clsOperateList } from './clsOperateList';
import { Format } from './clsString';

export class clsTabs {
  constructor() {}
  public TabLst: Array<clsTabInfo> = [];
  private mintPageIndex = 1;
  private mintPageCount = 0;
  /// <summary>
  /// 专门用于记录GridView中的每页记录数
  /// (AutoGCLib.WebCtlControlCode4Gv4CSharp:GenPageSizeViewState)
  /// </summary>
  public PageNum = 2;
  public DivName = '';
  public RootDivClassName = '';
  public static ListPage: clsOperateList;
  //public strDivName4Pager: string = "";
  /// <summary>
  /// 设置GridView中的页序号
  /// (AutoGCLib.WebCtlControlCode4Gv4CSharp:Gen_PageIndex)
  /// </summary>
  public get PageIndex(): number {
    return this.mintPageIndex;
  }
  public set PageIndex(value: number) {
    this.mintPageIndex = value;
  }
  public CreateTabs(): HTMLDivElement {
    const divRoot = this.GetDiv_Root();
    const ulField = this.GetUl_Tabs();
    const divTabContent: HTMLDivElement = this.GetDiv_TabContent();
    divRoot.appendChild(ulField);
    divRoot.appendChild(divTabContent);

    return divRoot;
  }
  public GetDiv_Root(): HTMLDivElement {
    const divRoot: HTMLDivElement = document.createElement('div');
    divRoot.className = this.RootDivClassName;
    //divRoot.style.width = "100%";

    divRoot.id = this.DivName;
    return divRoot;
  }
  public GetUl_Tabs() {
    const ulField: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
    //ulField.id = Format("ul{0}", objTabFeature.tabId);
    ulField.className = 'nav nav-tabs';
    ulField.setAttribute('role', 'navigation');
    for (const objTabInfo of this.TabLst) {
      //<li class="nav-item " > <a class="nav-link active" href = "#tab1" onclick = "btnClick('Tab', '0173')" data - toggle="tab" role = "tab" > 绑定下拉框 < /a></li >

      const liField: HTMLLIElement = this.GetLi_TabInfo(objTabInfo);
      ulField.appendChild(liField);
    }
    return ulField;
  }
  public GetLi_TabInfo(objTabInfo: clsTabInfo) {
    const liField: HTMLLIElement = document.createElement('li');
    liField.className = 'nav-item';
    const AField = this.GetA_TabInfo(objTabInfo);
    liField.appendChild(AField);
    return liField;
  }
  public GetA_TabInfo(objTabInfo: clsTabInfo): HTMLAnchorElement {
    //<a class="nav-link active" href = "#tab1" onclick = "btnClick('Tab', '0173')" data - toggle="tab" role = "tab" > 绑定下拉框 < /a>
    const AField: HTMLAnchorElement = document.createElement('a');
    AField.className = 'nav-link';
    if (objTabInfo.IsActive) {
      AField.className = 'nav-link active';
    }
    AField.href = Format('#{0}', objTabInfo.tabId);
    AField.setAttribute('onclick', objTabInfo.TabClick);
    AField.setAttribute('data-toggle', 'tab');
    AField.setAttribute('role', 'tab');
    AField.innerText = objTabInfo.TabTitle;
    return AField;
  }

  public GetDiv_TabContent(): HTMLDivElement {
    const divTabContent: HTMLDivElement = document.createElement('div');
    divTabContent.className = 'tab-content';
    //divRoot.style.width = "100%";
    for (const objTabInfo of this.TabLst) {
      //<li class="nav-item " > <a class="nav-link active" href = "#tab1" onclick = "btnClick('Tab', '0173')" data - toggle="tab" role = "tab" > 绑定下拉框 < /a></li >

      const divSubTab: HTMLDivElement = this.GetDiv_SubTab(objTabInfo);
      divTabContent.appendChild(divSubTab);
    }
    return divTabContent;
  }

  public GetDiv_SubTab(objTabInfo: clsTabInfo): HTMLDivElement {
    //<div class="tab-pane active" id = "tab1" >
    const divSubTab: HTMLDivElement = document.createElement('div');
    divSubTab.className = 'tab-pane';
    //divRoot.style.width = "100%";
    if (objTabInfo.IsActive) {
      divSubTab.className = 'tab-pane active';
    }
    divSubTab.id = objTabInfo.tabId;
    divSubTab.appendChild(objTabInfo.DivContent);
    return divSubTab;
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
}
export class clsTabInfo {
  constructor() {}
  public tabId = '';
  public TabClick = '';
  public TabTitle = '';

  public IsActive = false;
  public DivContent: HTMLDivElement = <HTMLDivElement>document.createElement('div');
}
