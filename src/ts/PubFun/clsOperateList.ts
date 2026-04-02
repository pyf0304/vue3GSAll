/*
 * 功能：用于显示列表具有分页功能的函数
 * 版本：2022-02-26-01
 * 作者：潘以锋
 * */

import { clsPager } from './clsPager';
import { Format, IsNullOrEmpty } from './clsString';

export interface clsOperateList {
  /*currPageIndex: number;*/
  // divName4List: string; //列表区的层Id
  // divName4DataList: string; //列表中数据区的层Id
  //divName4Pager: string; //列表中的分页区的层Id
  bolIsInitShow: boolean; //记录是否导入分页区的变量
  bolIsTableSm: boolean; //是否窄行的小表，即表中加样式： table-sm
  // divName4List: string = "divDataLst";//列表区数据列表层id
  objPager: clsPager;
  SortBy(objAnchorElement: any): void;
  BindInDiv(divBind: HTMLDivElement): void;
  IndexPage(intPageIndex: number): void;

  PrevPage(strDivName4Pager: string): void;

  NextPage(strDivName4Pager: string): void;

  // GetCurrPageIndex(strDivName4Pager: string): number

  SetCurrPageIndex(value: number, strDivName4Pager: string): void;

  // ShowEmptyRecNumInfoByDiv(strListDiv: string, strInfo: string): void
}

export function ShowEmptyRecNumInfo(strListDiv: string, strInfo: string) {
  const o: HTMLDivElement = document.getElementById(strListDiv) as HTMLDivElement;
  if (o == null) {
    alert(`用于显示列表的层:${strListDiv}不存在！`);
    return;
  }
  o.innerHTML = '';
  const objSpanInfo = document.createElement('span');
  objSpanInfo.setAttribute('class', 'text-warning font-weight-bold mt-2');
  objSpanInfo.innerHTML = strInfo;
  o.appendChild(objSpanInfo);
}
// export function SetCurrPageIndex(value: number, strDivName4Pager: string) {
//     this.objPager.currPageIndex = value;
// }
export function GetCurrPageIndex(intCurrPageIndex: number): number {
  if (intCurrPageIndex == 0) {
    return 1;
  }
  if (intCurrPageIndex < 1) return 1;
  return intCurrPageIndex;
}

/** 函数功能:从界面列表中根据某一个字段排序
 * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
 * @param objAnchorElement:带有排序字段的Anchors
 **/
export function GetSortBy(
  objAnchorElement: any,
  strAscOrDesc4SortFun: string,
  strSortBy: string,
  strSortExpress: string,
) {
  //   const strThisFuncName = 'GetSortBy';
  // console.log('1objAnchorElement(In SetAllCkechedKeysV2):', objAnchorElement);
  //event = window.event || event;
  let sortFun0 = (ascOrDesc: string) => (x: any, y: any) => {
    console.log(ascOrDesc, x, y);
    return 0;
  };
  let ascOrDesc4SortFun0 = '';
  let sortBy0 = '';
  if (typeof objAnchorElement == 'function') {
    sortFun0 = objAnchorElement;
    if (strAscOrDesc4SortFun.indexOf('Asc') >= 0) {
      ascOrDesc4SortFun0 = 'Desc';
    } else {
      ascOrDesc4SortFun0 = 'Asc';
    }
    sortBy0 = '';
  } else {
    // const thisEventObj: HTMLInputElement = objAnchorElement;
    // const strFldName: string = thisEventObj.getAttribute("fldName") as string;
    if (IsNullOrEmpty(strSortExpress) == false) {
      const strSortByFld: string = strSortExpress;
      if (strSortBy.indexOf(strSortByFld) >= 0) {
        if (strSortBy.indexOf('Asc') >= 0) {
          sortBy0 = Format('{0} Desc', strSortByFld);
        } else {
          sortBy0 = Format('{0} Asc', strSortByFld);
        }
      } else {
        sortBy0 = Format('{0} Asc', strSortByFld);
      }
    }
  }
  return {
    sortFun: sortFun0,
    ascOrDesc4SortFun: ascOrDesc4SortFun0,
    sortBy: sortBy0,
  };
  // return [
  //   sortFun0,
  //   ascOrDesc4SortFun0,
  //   sortBy0  ];
}

export function ShowEmptyRecNumInfoByDiv(divContainer: HTMLDivElement, strInfo: string) {
  divContainer.innerHTML = '';
  const objSpanInfo = document.createElement('span');
  objSpanInfo.setAttribute('class', 'text-warning font-weight-bold mt-2');
  objSpanInfo.innerHTML = strInfo;
  divContainer.appendChild(objSpanInfo);
}
