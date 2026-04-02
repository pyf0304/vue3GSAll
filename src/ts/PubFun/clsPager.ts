/*
 * 功能：用于分页的功能函数
 * 版本：2022-12-13-01
 * 作者：潘以锋
 * */
// import $ from "jquery";
import $ from 'jquery';
import { clsDateTime } from './clsDateTime';
import { clsOperateList } from './clsOperateList';
import { GetArray, GetDivObjInDivObj, getAObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';

export class clsPager {
  constructor(objOperateList: clsOperateList) {
    this.initDate = clsDateTime.getTodayDateTimeStr(1);
    this.ListPage = objOperateList;
  }
  public initDate = '';
  private mintCurrPageIndex = 1;
  private mintPageIndex = 1;
  private mintPageCount = 0;
  /// <summary>
  /// 专门用于记录GridView中的每页记录数
  /// (AutoGCLib.WebCtlControlCode4Gv4CSharp:GenPageSizeViewState)
  /// </summary>
  public pageSize = 15;
  //public static ListPage: clsOperateList;
  public ListPage: clsOperateList;
  //public strDivName4Pager: string = "";
  /// <summary>
  /// 设置GridView中的页序号
  /// (AutoGCLib.WebCtlControlCode4Gv4CSharp:Gen_PageIndex)
  /// </summary>
  public get pageIndex(): number {
    return this.mintPageIndex;
  }
  public set pageIndex(value: number) {
    this.mintPageIndex = value;
  }

  public get currPageIndex(): number {
    return this.mintCurrPageIndex;
  }
  public set currPageIndex(value: number) {
    this.mintCurrPageIndex = value;
  }
  /// <summary>
  /// 设置GridView中的总页数
  /// (AutoGCLib.WebCtlControlCode4Gv4CSharp:Gen_PageCount)
  /// </summary>
  public get pageCount(): number {
    return this.mintPageCount;
  }

  public set pageCount(value: number) {
    this.mintPageCount = value;
  }

  /// <summary>
  /// 设置GridView中的总页数
  /// (AutoGCLib.WebCtlControlCode4Gv4CSharp:Gen_RecCount)
  /// </summary>
  public recCount = 0;

  /// <summary>
  /// 函数功能:计算当前页数，根据记录数和每页记录数
  /// (AutoGCLib.WebCtlControlCode4Gv4CSharp:GenGetPageCount)
  /// </summary>
  /// <param name = "intRecCount">总记录数</param>
  /// <param name = "intPageSize">每页记录数</param>
  public GetPageCount(intRecCount: number, intPageSize: number): number {
    if (intRecCount == 0) return 0;
    const intPageCount: number = Math.ceil(intRecCount / intPageSize);
    if (intRecCount % intPageSize == 0) return intPageCount;
    return intPageCount;
  }
  public NextPage(strDivName4Pager: string) {
    console.log('clsPager:NextPage()');
    this.ListPage.NextPage(strDivName4Pager);
  }
  public PrevPage(strDivName4Pager: string) {
    console.log('clsPager:NextPage()');
    this.ListPage.PrevPage(strDivName4Pager);
  }
  public IndexPage(intPageIndex: number) {
    this.pageIndex = intPageIndex;
    this.currPageIndex = intPageIndex;
    //this.ShowPager();
    this.ListPage.IndexPage(intPageIndex);
  }

  public PageNum(thisA: any) {
    // const thisEvent = <HTMLAnchorElement>thisA;
    this.pageIndex = Number(thisA.getAttribute('pageIndex'));
    this.currPageIndex = this.pageIndex;
    this.ListPage.IndexPage(this.pageIndex);
  }
  public JumpToPage(divName: HTMLDivElement, strDivName4Pager: string) {
    const objDiv: HTMLDivElement = GetDivObjInDivObj(divName, strDivName4Pager);
    if (objDiv == null) {
      const strMsg = `层:[${strDivName4Pager}]在该界面不存在！in (clsPager.JumpToPage)`;
      console.error(strMsg);
      throw strMsg;
    }
    const arrInput = objDiv.getElementsByTagName('input');
    const arrElements = clsPager.GetArray(arrInput);
    const txtInputNumber: HTMLInputElement = <HTMLInputElement>(
      arrElements.find((x) => x.id == 'txtInputNumber')
    );
    if (txtInputNumber == null) {
      const strMsg = `在层:[${strDivName4Pager}]内，不存在输入文本框:[txtInputNumber], 请检查！in (clsPager.JumpToPage)`;
      throw strMsg;
    }
    const intPageIndex = Number(txtInputNumber.value);
    this.pageIndex = intPageIndex;
    this.currPageIndex = intPageIndex;
    this.ListPage.IndexPage(intPageIndex);
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
  public SetEvent(divName: HTMLDivElement, strDivName4Pager: string, thisPager: clsPager) {
    //const btnNextPage = doc
    const objDiv: HTMLDivElement = GetDivObjInDivObj(divName, strDivName4Pager);
    if (objDiv == null) {
      const strMsg = `层:[${strDivName4Pager}]在该界面不存在！in (clsPager.SetEvent)`;
      console.error(strMsg);
      throw strMsg;
    }
    const arrA = objDiv.getElementsByTagName('a');
    const arrElements = clsPager.GetArray(arrA);
    const btnNextPage: HTMLAnchorElement = <HTMLAnchorElement>(
      arrElements.find((x) => x.id == 'btnNextPage')
    );
    if (btnNextPage == null) {
      const strMsg = `在层:[${strDivName4Pager}]内，不存在超链接:[btnNextPage], 请检查！(clsPager.SetEvent)`;
      throw strMsg;
    }
    //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
    btnNextPage.onclick = function () {
      thisPager.NextPage(strDivName4Pager);
    };
    const btnPrevPage: HTMLAnchorElement = <HTMLAnchorElement>(
      arrElements.find((x) => x.id == 'btnPrevPage')
    );
    if (btnPrevPage == null) {
      const strMsg = `在层:[${strDivName4Pager}]内，不存在超链接:[btnPrevPage], 请检查！(clsPager.SetEvent)`;
      throw strMsg;
    }
    //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
    btnPrevPage.onclick = function () {
      thisPager.PrevPage(strDivName4Pager);
    };

    const btnFirstPage: HTMLAnchorElement = <HTMLAnchorElement>(
      arrElements.find((x) => x.id == 'btnFirstPage')
    );
    if (btnFirstPage == null) {
      const strMsg = `在层:[${strDivName4Pager}]内，不存在超链接:[btnFirstPage], 请检查！(clsPager.SetEvent)`;
      throw strMsg;
    }
    //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
    btnFirstPage.onclick = function () {
      thisPager.IndexPage(1);
    };
    const btnLastPage: HTMLAnchorElement = <HTMLAnchorElement>(
      arrElements.find((x) => x.id == 'btnLastPage')
    );
    if (btnLastPage == null) {
      const strMsg = `在层:[${strDivName4Pager}]内，不存在超链接:[btnLastPage], 请检查！(clsPager.SetEvent)`;
      throw strMsg;
    }
    //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
    btnLastPage.onclick = function () {
      thisPager.IndexPage(0);
    };

    const btnJumpToPage: HTMLAnchorElement = <HTMLAnchorElement>(
      arrElements.find((x) => x.id == 'btnJumpToPage')
    );
    if (btnJumpToPage == null) {
      const strMsg = `在层:[${strDivName4Pager}]内，不存在超链接:[btnJumpToPage], 请检查！(clsPager.SetEvent)`;
      throw strMsg;
    }
    //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
    btnJumpToPage.onclick = function () {
      thisPager.JumpToPage(divName, strDivName4Pager);
    };

    const btnOne: HTMLAnchorElement = <HTMLAnchorElement>arrElements.find((x) => x.id == 'One');
    if (btnOne == null) {
      const strMsg = `在层:[${strDivName4Pager}]内，不存在超链接:[One], 请检查！(clsPager.SetEvent)`;
      throw strMsg;
    }
    //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
    btnOne.onclick = function (this) {
      thisPager.PageNum(this);
    };

    const btnTwo: HTMLAnchorElement = <HTMLAnchorElement>arrElements.find((x) => x.id == 'Two');
    if (btnTwo == null) {
      const strMsg = `在层:[${strDivName4Pager}]内，不存在超链接:[Two], 请检查！(clsPager.SetEvent)`;
      throw strMsg;
    }
    //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
    btnTwo.onclick = function (this) {
      thisPager.PageNum(this);
    };

    const btnThree: HTMLAnchorElement = <HTMLAnchorElement>arrElements.find((x) => x.id == 'Three');
    if (btnThree == null) {
      const strMsg = `在层:[${strDivName4Pager}]内，不存在超链接:[Three], 请检查！(clsPager.SetEvent)`;
      throw strMsg;
    }
    //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
    btnThree.onclick = function (this) {
      thisPager.PageNum(this);
    };

    const btnFour: HTMLAnchorElement = <HTMLAnchorElement>arrElements.find((x) => x.id == 'Four');
    if (btnFour == null) {
      const strMsg = `在层:[${strDivName4Pager}]内，不存在超链接:[Four], 请检查！(clsPager.SetEvent)`;
      throw strMsg;
    }
    //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
    btnFour.onclick = function (this) {
      thisPager.PageNum(this);
    };

    const btnFive: HTMLAnchorElement = <HTMLAnchorElement>arrElements.find((x) => x.id == 'Five');
    if (btnFive == null) {
      const strMsg = `在层:[${strDivName4Pager}]内，不存在超链接:[Five], 请检查！(clsPager.SetEvent)`;
      throw strMsg;
    }
    //const sltDdl: HTMLSelectElement = <HTMLSelectElement>document.getElementById(strDdlName);
    btnFive.onclick = function (this) {
      thisPager.PageNum(this);
    };
  }
  public ShowPagerV2(
    divName: HTMLDivElement,
    objListPage: clsOperateList,
    strDivName4Pager: string,
  ) {
    // const objDiv = $(`#${strDivName4Pager}`);

    const objDiv = GetDivObjInDivObj(divName, strDivName4Pager);
    this.Show(divName, strDivName4Pager);
    this.ListPage = objListPage;
    //const padingnum = 100;
    // const strprojectlist = `input[id ^= "projectlist"]`;
    const spnCountPage = objDiv.querySelector('#spnCountPage') as HTMLSpanElement;
    const spnNumber = objDiv.querySelector('#spnNumber');
    if (spnNumber == null) return;
    const One = objDiv.querySelector('#One') as HTMLAnchorElement;
    const Two = objDiv.querySelector('#Two') as HTMLAnchorElement;
    const Three = objDiv.querySelector('#Three') as HTMLAnchorElement;
    const Four = objDiv.querySelector('#Four') as HTMLAnchorElement;
    const Five = objDiv.querySelector('#Five') as HTMLAnchorElement;
    const liFirstPage = objDiv.querySelector('#liFirstPage') as HTMLLIElement;
    const liLastPage = objDiv.querySelector('#liLastPage') as HTMLLIElement;
    const btnNextPage = objDiv.querySelector('#btnNextPage') as HTMLAnchorElement;
    const btnLastPage = objDiv.querySelector('#btnLastPage') as HTMLAnchorElement;
    const btnPrevPage = objDiv.querySelector('#btnPrevPage') as HTMLAnchorElement;
    const btnFirstPage = objDiv.querySelector('#btnFirstPage') as HTMLAnchorElement;
    // objDiv.find(strprojectlist).find('li').remove();

    //$('#projectlist').find("li").remove();

    //<br>//开始是分页的核心了
    if (this.recCount > 0) {
      //设置页码
      //     const pading =  data[0].padingnum;//总页码
      this.pageCount = this.GetPageCount(this.recCount, this.pageSize);
      //$('#totalpage').val(this.pageCount);
      // const totalpage = objDiv.querySelector('#totalpage') as HTMLSpanElement;
      // totalpage.innerHTML = this.pageCount.toString();

      const page = this.ListPage.objPager.currPageIndex;
      //$('#spnCountPage').html("第<b id='currentPageNo'> " + page + "</b>页 ");

      spnCountPage.innerHTML = `第<b id='currentPageNo'> ${page}</b>页 `;
      //$('#spnNumber').html("共" + this.pageCount + "页&nbsp;共" + this.recCount + "记录&nbsp;到第");

      spnNumber.innerHTML = `共${this.pageCount}页&nbsp;共${this.recCount}记录&nbsp;到第`;
    } else {
      //$('#spnCountPage').html("<b id='currentPageNo'>" + 0 + "</b>");

      spnCountPage.innerHTML = `<b id='currentPageNo'>${0}</b>`;
    }
    //设置分页的底部 就是 首页  1   2   3   4   5   6   尾页
    this.pageCount = this.GetPageCount(this.recCount, this.pageSize); //总页码href="javascript:void(0);"

    this.pageIndex = this.ListPage.objPager.currPageIndex; //当前页
    //one  two  three five fore<br>//下面代码看着是比较麻烦，但是也不难理解  全是一样的代码，只不过是加了些判断
    if (this.pageIndex < 5) {
      One.innerText = '1';
      One.setAttribute('pageIndex', '1');

      Two.text = '2';
      Two.setAttribute('pageIndex', '2');
      Three.text = '3';
      Three.setAttribute('pageIndex', '3');
      Four.text = '4';
      Four.setAttribute('pageIndex', '4');
      Five.text = '5';
      Five.setAttribute('pageIndex', '5');
      this.ShowLi('Four', objDiv);
      this.ShowLi('Five', objDiv);
    } else {
      //alert("已经不是第五页了");
      //设置中间的为当前页
      One.text = (this.pageIndex - 2).toString();
      One.setAttribute('pageIndex', (this.pageIndex - 2).toString());
      Two.text = (this.pageIndex - 1).toString();
      Two.setAttribute('pageIndex', (this.pageIndex - 1).toString());
      Three.text = this.pageIndex.toString();
      Three.setAttribute('pageIndex', this.pageIndex.toString());
      this.ShowLi('Four', objDiv);
      this.ShowLi('Five', objDiv);
      //判断下一页是否超过了总页数
      if (this.pageIndex + 1 > this.pageCount) {
        this.HideLi('Four', objDiv);
        //const liFive: HTMLLIElement = $('#five').parent() as HTMLLIElement;
        //liFive.hidden = true;
        this.HideLi('Five', objDiv);
      } else {
        this.ShowLi('Four', objDiv);
        Four.text = (this.pageIndex + 1).toString();
        Four.setAttribute('pageIndex', (this.pageIndex + 1).toString());
      }
      //判断下一页的第二页是否超过了总页数
      if (this.pageIndex + 2 > this.pageCount) {
        this.HideLi('Five', objDiv);
      } else {
        this.ShowLi('Five', objDiv);
        Five.text = (this.pageIndex + 2).toString();
        Five.setAttribute('pageIndex', (this.pageIndex + 2).toString());
      }
    }
    //如果总页数小于5，这块代码主要就是设置  1  2  3  4  5  这些的显示和隐藏的
    if (this.pageCount == 0) {
      this.HideLi('One', objDiv);
      this.HideLi('Two', objDiv);
      this.HideLi('Three', objDiv);
      this.HideLi('Four', objDiv);
      this.HideLi('Five', objDiv);
    } else if (this.pageCount == 1) {
      liFirstPage.hidden = true;
      liLastPage.hidden = true;
      this.HideLi('One', objDiv);
      this.HideLi('Two', objDiv);
      this.HideLi('Three', objDiv);
      this.HideLi('Four', objDiv);
      this.HideLi('Five', objDiv);
    } else if (this.pageCount == 2) {
      this.ShowLi('One', objDiv);
      this.ShowLi('Two', objDiv);
      this.HideLi('Three', objDiv);
      this.HideLi('Four', objDiv);
      this.HideLi('Five', objDiv);
    } else if (this.pageCount == 3) {
      this.ShowLi('One', objDiv);
      this.ShowLi('Two', objDiv);
      this.ShowLi('Three', objDiv);
      this.HideLi('Four', objDiv);
      this.HideLi('Five', objDiv);
    } else if (this.pageCount == 4) {
      this.ShowLi('One', objDiv);
      this.ShowLi('Two', objDiv);
      this.ShowLi('Three', objDiv);
      this.ShowLi('Four', objDiv);
      this.HideLi('Five', objDiv);
    } else {
      if (this.pageIndex <= this.pageCount) {
        this.ShowLi('One', objDiv);
        this.ShowLi('Two', objDiv);
        this.ShowLi('Three', objDiv);
        this.ShowLi('Four', objDiv);
        this.ShowLi('Five', objDiv);
      }
      //判断下一页是否超过了总页数
      if (this.pageIndex + 1 > this.pageCount) {
        this.HideLi('Four', objDiv);
        //const liFive: HTMLLIElement = $('#five').parent() as HTMLLIElement;
        //liFive.hidden = true;
        this.HideLi('Five', objDiv);
      } else {
        this.ShowLi('Five', objDiv);
      }
      //判断下一页的第二页是否超过了总页数
      if (this.pageIndex + 2 > this.pageCount) {
        this.HideLi('Five', objDiv);
      } else {
        this.ShowLi('Five', objDiv);
      }
    }
    if (this.pageIndex + 1 > this.pageCount) {
      btnNextPage.classList.add('disabled');
      btnLastPage.classList.add('disabled');
    } else {
      btnNextPage.classList.remove('disabled');
      btnLastPage.classList.remove('disabled');
    }
    if (this.pageIndex == 1) {
      btnPrevPage.classList.add('disabled');
      btnFirstPage.classList.add('disabled');
    } else {
      btnPrevPage.classList.remove('disabled');
      btnFirstPage.classList.remove('disabled');
    }
    this.SetCurrPageStatus(divName, strDivName4Pager, this.pageIndex);
    this.SetEvent(divName, strDivName4Pager, this);
    //设置高亮显示的，就是是第一页时，1亮，第二页时  2亮

    //分页完返回页面顶端
    $('html,body').animate({ scrollTop: 0 }, 500);
    //最后，给当前页码加1
    this.ListPage.objPager.currPageIndex = this.pageIndex;
  }

  public ShowPagerV3(
    divName: HTMLDivElement,
    objListPage: clsOperateList,
    strDivName4Pager: string,
  ) {
    this.ListPage = objListPage;
    // const objDiv4Pager = <HTMLDivElement>document.getElementById(strDivName4Pager);
    const objUl: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
    objUl.className = 'nav';
    objUl.id = 'page';

    const objliFirstPage: HTMLLIElement = <HTMLLIElement>document.createElement('li');
    objliFirstPage.className = 'nav-item p-prev disabled';
    objliFirstPage.id = 'liFirstPage';
    const btnFirstPage: HTMLAnchorElement = <HTMLAnchorElement>document.createElement('a');
    btnFirstPage.className = 'btn btn-outline-info btn-sm';
    btnFirstPage.id = 'btnFirstPage';
    objliFirstPage.appendChild(btnFirstPage);

    //const padingnum = 100;
    $('#projectlist').find('li').remove();

    //<br>//开始是分页的核心了
    if (this.recCount > 0) {
      //设置页码
      //     const pading =  data[0].padingnum;//总页码
      this.pageCount = this.GetPageCount(this.recCount, this.pageSize);
      $('#totalpage').val(this.pageCount);
      const page = this.ListPage.objPager.currPageIndex; //当前页
      $('#spnCountPage').html(`第<b id='currentPageNo'> ${page}</b>页 `);

      //$('#spnNumber').html("共"+this.pageCount+"页 到第<input type='text' id='input_number' class='page-txtbox' />页<input name='' value='确定' type='button' onclick='IndexPage(-2)' /goods/ajaxqueryGoodsList.do.html','','goodsListContainer','"+pading+"', listPageCallback);' class='page-btn'/>")
      $('#spnNumber').html(
        `共${this.pageCount}页 共${this.recCount}记录 到第<input type='text' id='input_number' class='page-txtbox' />页<input name='' value='确定' type='button' onclick='JumpToPage()' class='page-btn' />`,
      );
    } else {
      $('#spnCountPage').html(`<b id='currentPageNo'>${0}</b>`);
    }
    //设置分页的底部 就是 首页  1   2   3   4   5   6   尾页
    this.pageCount = this.GetPageCount(this.recCount, this.pageSize); //总页码href="javascript:void(0);"
    this.pageIndex = this.ListPage.objPager.currPageIndex; //当前页
    //one  two  three five fore<br>//下面代码看着是比较麻烦，但是也不难理解  全是一样的代码，只不过是加了些判断
    if (this.pageIndex < 5) {
      $('#one').text('1');
      $('#one').attr('href', `javascript:PageNum("${1}");`);
      $('#two').text('2');
      $('#two').attr('href', `javascript:PageNum("${2}");`);
      $('#three').text('3');
      $('#three').attr('href', `javascript:PageNum("${3}");`);
      $('#five').text('4');
      $('#five').attr('href', `javascript:PageNum("${4}");`);
      $('#fore').text('5');
      $('#fore').attr('href', `javascript:PageNum("${5}");`);
      this.ShowLi('five', divName);
      this.ShowLi('fore', divName);
    } else {
      //alert("已经不是第五页了");
      //设置中间的为当前页
      $('#one').text((this.pageIndex - 2).toString());
      $('#one').attr('href', `javascript:IndexPage("${this.pageIndex - 2}");`);
      $('#two').text(this.pageIndex - 1);
      $('#two').attr('href', `javascript:IndexPage("${this.pageIndex - 1}");`);
      $('#three').text(this.pageIndex.toString());
      $('#three').attr('href', `javascript:IndexPage("${this.pageIndex}");`);
      this.ShowLi('five', divName);
      this.ShowLi('fore', divName);
      //判断下一页是否超过了总页数
      if (this.pageIndex + 1 > this.pageCount) {
        this.HideLi('five', divName);
        //const liFive: HTMLLIElement = $('#five').parent() as HTMLLIElement;
        //liFive.hidden = true;
        this.HideLi('fore', divName);
      } else {
        this.ShowLi('five', divName);
        $('#five').text(this.pageIndex + 1);
        $('#five').attr('href', `javascript:IndexPage("${this.pageIndex + 1}");`);
      }
      //判断下一页的第二页是否超过了总页数
      if (this.pageIndex + 2 > this.pageCount) {
        this.HideLi('fore', divName);
      } else {
        this.ShowLi('fore', divName);
        $('#fore').text(this.pageIndex + 2);
        $('#fore').attr('href', `javascript:IndexPage("${this.pageIndex + 2}");`);
      }
    }
    //如果总页数小于5，这块代码主要就是设置  1  2  3  4  5  这些的显示和隐藏的
    if (this.pageCount == 0) {
      this.HideLi('one', divName);
      this.HideLi('two', divName);
      this.HideLi('three', divName);
      this.HideLi('five', divName);
      this.HideLi('fore', divName);
    } else if (this.pageCount == 1) {
      $('#liFirstPage').hide();
      $('#liLastPage').hide();
      this.HideLi('one', divName);
      this.HideLi('two', divName);
      this.HideLi('three', divName);
      this.HideLi('five', divName);
      this.HideLi('fore', divName);
    } else if (this.pageCount == 2) {
      this.ShowLi('one', divName);
      this.ShowLi('two', divName);
      this.HideLi('three', divName);
      this.HideLi('five', divName);
      this.HideLi('fore', divName);
    } else if (this.pageCount == 3) {
      this.ShowLi('one', divName);
      this.ShowLi('two', divName);
      this.ShowLi('three', divName);
      this.HideLi('five', divName);
      this.HideLi('fore', divName);
    } else if (this.pageCount == 4) {
      this.ShowLi('one', divName);
      this.ShowLi('two', divName);
      this.ShowLi('three', divName);
      this.ShowLi('five', divName);
      this.HideLi('fore', divName);
    } else {
      if (this.pageIndex <= this.pageCount) {
        this.ShowLi('one', divName);
        this.ShowLi('two', divName);
        this.ShowLi('three', divName);
        this.ShowLi('five', divName);
        this.ShowLi('fore', divName);
      }
      //判断下一页是否超过了总页数
      if (this.pageIndex + 1 > this.pageCount) {
        this.HideLi('five', divName);
        //const liFive: HTMLLIElement = $('#five').parent() as HTMLLIElement;
        //liFive.hidden = true;
        this.HideLi('fore', divName);
      } else {
        this.ShowLi('five', divName);
      }
      //判断下一页的第二页是否超过了总页数
      if (this.pageIndex + 2 > this.pageCount) {
        this.HideLi('fore', divName);
      } else {
        this.ShowLi('fore', divName);
      }
    }
    if (this.pageIndex + 1 > this.pageCount) {
      $('#btnNextPage').addClass('disabled');
      $('#btnLastPage').addClass('disabled');
    } else {
      $('#btnNextPage').removeClass('disabled');
      $('#btnLastPage').removeClass('disabled');
    }
    if (this.pageIndex == 1) {
      $('#btnPrevPage').addClass('disabled');
      $('#btnFirstPage').addClass('disabled');
    } else {
      $('#btnPrevPage').removeClass('disabled');
      $('#btnFirstPage').removeClass('disabled');
    }
    this.SetCurrPageStatus(divName, strDivName4Pager, this.pageIndex);
    this.SetEvent(divName, strDivName4Pager, this);
    //设置高亮显示的，就是是第一页时，1亮，第二页时  2亮

    //分页完返回页面顶端
    $('html,body').animate({ scrollTop: 0 }, 500);
    //最后，给当前页码加1
    this.ListPage.objPager.currPageIndex = this.pageIndex;
  }

  public get_liFirstPage(): HTMLLIElement {
    const objliFirstPage: HTMLLIElement = <HTMLLIElement>document.createElement('li');
    objliFirstPage.className = 'nav-item p-prev disabled';
    objliFirstPage.id = 'liFirstPage';
    const btnFirstPage: HTMLAnchorElement = <HTMLAnchorElement>document.createElement('a');
    btnFirstPage.className = 'btn btn-outline-info btn-sm';
    btnFirstPage.id = 'btnFirstPage';
    btnFirstPage.href = 'javascript:void(0);';
    btnFirstPage.innerText = '首 页';
    objliFirstPage.appendChild(btnFirstPage);
    return objliFirstPage;
  }
  public get_liPrevPage(): HTMLLIElement {
    const objliPrevPage: HTMLLIElement = <HTMLLIElement>document.createElement('li');
    objliPrevPage.className = 'nav-item p-prev disabled';
    objliPrevPage.id = 'liPrevPage';
    const btnPrevPage: HTMLAnchorElement = <HTMLAnchorElement>document.createElement('a');
    btnPrevPage.className = 'btn btn-outline-info btn-sm';
    btnPrevPage.id = 'btnPrevPage';
    btnPrevPage.href = 'javascript:void(0);';
    btnPrevPage.innerText = '上一页';
    objliPrevPage.appendChild(btnPrevPage);
    return objliPrevPage;
  }

  public get_liOne(): HTMLLIElement {
    const objliOne: HTMLLIElement = <HTMLLIElement>document.createElement('li');
    objliOne.className = 'nav-item';
    objliOne.id = 'liOne';
    const btnOne: HTMLAnchorElement = <HTMLAnchorElement>document.createElement('a');
    btnOne.className = 'btn btn-outline-info btn-sm';
    btnOne.id = 'One';
    btnOne.href = 'javascript:void(0);';
    btnOne.innerText = '1';
    objliOne.appendChild(btnOne);
    return objliOne;
  }

  public get_liTwo(): HTMLLIElement {
    const objliTwo: HTMLLIElement = <HTMLLIElement>document.createElement('li');
    objliTwo.className = 'nav-item';
    objliTwo.id = 'liTwo';
    const btnTwo: HTMLAnchorElement = <HTMLAnchorElement>document.createElement('a');
    btnTwo.className = 'btn btn-outline-info btn-sm';
    btnTwo.id = 'Two';
    btnTwo.href = 'javascript:void(0);';
    btnTwo.innerText = '2';
    objliTwo.appendChild(btnTwo);
    return objliTwo;
  }

  public get_liThree(): HTMLLIElement {
    const objliThree: HTMLLIElement = <HTMLLIElement>document.createElement('li');
    objliThree.className = 'nav-item';
    objliThree.id = 'liThree';
    const btnThree: HTMLAnchorElement = <HTMLAnchorElement>document.createElement('a');
    btnThree.className = 'btn btn-outline-info btn-sm';
    btnThree.id = 'Three';
    btnThree.href = 'javascript:void(0);';
    btnThree.innerText = '3';
    objliThree.appendChild(btnThree);
    return objliThree;
  }

  public get_liFour(): HTMLLIElement {
    const objliFour: HTMLLIElement = <HTMLLIElement>document.createElement('li');
    objliFour.className = 'nav-item';
    objliFour.id = 'liFour';
    const btnFour: HTMLAnchorElement = <HTMLAnchorElement>document.createElement('a');
    btnFour.className = 'btn btn-outline-info btn-sm';
    btnFour.id = 'Four';
    btnFour.href = 'javascript:void(0);';
    btnFour.innerText = '4';
    objliFour.appendChild(btnFour);
    return objliFour;
  }

  public get_liFive(): HTMLLIElement {
    const objliFive: HTMLLIElement = <HTMLLIElement>document.createElement('li');
    objliFive.className = 'nav-item';
    objliFive.id = 'liFive';
    const btnFive: HTMLAnchorElement = <HTMLAnchorElement>document.createElement('a');
    btnFive.className = 'btn btn-outline-info btn-sm';
    btnFive.id = 'Five';
    btnFive.href = 'javascript:void(0);';
    btnFive.innerText = '5';
    objliFive.appendChild(btnFive);
    return objliFive;
  }

  public get_liNextPage(): HTMLLIElement {
    const objliNextPage: HTMLLIElement = <HTMLLIElement>document.createElement('li');
    objliNextPage.className = 'nav-item p-prev disabled';
    objliNextPage.id = 'liNextPage';
    const btnNextPage: HTMLAnchorElement = <HTMLAnchorElement>document.createElement('a');
    btnNextPage.className = 'btn btn-outline-info btn-sm';
    btnNextPage.id = 'btnNextPage';
    btnNextPage.href = 'javascript:void(0);';
    btnNextPage.innerText = '下一页';
    objliNextPage.appendChild(btnNextPage);
    return objliNextPage;
  }

  public get_liLastPage(): HTMLLIElement {
    const objliLastPage: HTMLLIElement = <HTMLLIElement>document.createElement('li');
    objliLastPage.className = 'nav-item p-prev disabled';
    objliLastPage.id = 'liLastPage';
    const btnLastPage: HTMLAnchorElement = <HTMLAnchorElement>document.createElement('a');
    btnLastPage.className = 'btn btn-outline-info btn-sm';
    btnLastPage.id = 'btnLastPage';
    btnLastPage.href = 'javascript:void(0);';
    btnLastPage.innerText = '尾 页';
    objliLastPage.appendChild(btnLastPage);
    return objliLastPage;
  }

  public get_liCountPage(): HTMLLIElement {
    const objliCountPage: HTMLLIElement = <HTMLLIElement>document.createElement('li');
    objliCountPage.className = 'nav-item';
    objliCountPage.id = 'liCountPage';
    const spnCountPage: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
    //spnNumber.className = "btn btn-outline-info btn-sm";
    spnCountPage.id = 'spnCountPage';
    spnCountPage.innerText = ' 2/13855';
    objliCountPage.appendChild(spnCountPage);
    return objliCountPage;
  }

  public get_liNumber(): HTMLLIElement {
    const objliNumber: HTMLLIElement = <HTMLLIElement>document.createElement('li');
    objliNumber.className = 'nav-item total';
    objliNumber.id = 'liNumber';
    const spnCountPage: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
    //spnNumber.className = "btn btn-outline-info btn-sm";
    spnCountPage.id = 'spnCountPage';
    spnCountPage.innerText = ' 2/13855';
    objliNumber.appendChild(spnCountPage);
    const spnNumber: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
    //spnNumber.className = "btn btn-outline-info btn-sm";
    spnNumber.id = 'spnNumber';
    spnNumber.innerText = '共13855页 到第';
    objliNumber.appendChild(spnNumber);

    const txtInputNumber: HTMLInputElement = <HTMLInputElement>document.createElement('input');
    txtInputNumber.className = 'page-txtbox';
    txtInputNumber.id = 'txtInputNumber';
    txtInputNumber.style.width = '50px';

    objliNumber.appendChild(txtInputNumber);
    const spnYe: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
    //spnNumber.className = "btn btn-outline-info btn-sm";
    spnYe.id = 'spnYe';
    spnYe.innerText = '页';
    objliNumber.appendChild(spnYe);

    const btnJumpToPage: HTMLAnchorElement = <HTMLAnchorElement>document.createElement('a');
    btnJumpToPage.className = 'btn btn-outline-info btn-sm';
    btnJumpToPage.id = 'btnJumpToPage';
    btnJumpToPage.href = 'javascript:void(0);';
    btnJumpToPage.innerText = '确定';
    objliNumber.appendChild(btnJumpToPage);
    return objliNumber;
  }

  public get_hidCurrPageIndex(): HTMLInputElement {
    const objhidCurrPageIndex: HTMLInputElement = <HTMLInputElement>document.createElement('input');

    objhidCurrPageIndex.id = 'hidCurrPageIndex';
    objhidCurrPageIndex.type = 'hidden';
    objhidCurrPageIndex.value = '1';
    return objhidCurrPageIndex;
  }
  public IsInit(divName: HTMLDivElement, strDivName4Pager: string): boolean {
    const objDiv4Pager: HTMLDivElement = GetDivObjInDivObj(divName, strDivName4Pager);
    if (objDiv4Pager == null) {
      const strMsg = `层:[${strDivName4Pager}]在该界面不存在！in (clsPager.InitShow)`;
      console.error(strMsg);
      throw strMsg;
    }
    const arrButton = objDiv4Pager.getElementsByTagName('button');
    const arrElements = GetArray(arrButton);
    const strButtonId = 'btnFirstPage';
    const objButton: HTMLButtonElement = <HTMLButtonElement>(
      arrElements.find((x) => x.id == strButtonId)
    );
    if (objButton == null) {
      return false;
    }
    return true;
  }
  public InitShow(divName: HTMLDivElement, strDivName4Pager: string) {
    const objDiv4Pager: HTMLDivElement = GetDivObjInDivObj(divName, strDivName4Pager);
    if (objDiv4Pager == null) {
      const strMsg = `层:[${strDivName4Pager}]在该界面不存在！in (clsPager.InitShow)`;
      console.error(strMsg);
      throw strMsg;
    }
    objDiv4Pager.innerHTML = '';
    const objUl: HTMLUListElement = <HTMLUListElement>document.createElement('ul');
    objUl.className = 'nav';
    objUl.id = 'page';

    const objliFirstPage: HTMLLIElement = this.get_liFirstPage();
    objUl.appendChild(objliFirstPage);

    const objliPrevPage: HTMLLIElement = this.get_liPrevPage();
    objUl.appendChild(objliPrevPage);

    const objliOne: HTMLLIElement = this.get_liOne();
    objUl.appendChild(objliOne);

    const objliTwo: HTMLLIElement = this.get_liTwo();
    objUl.appendChild(objliTwo);

    const objliThree: HTMLLIElement = this.get_liThree();
    objUl.appendChild(objliThree);

    const objliFour: HTMLLIElement = this.get_liFour();
    objUl.appendChild(objliFour);

    const objliFive: HTMLLIElement = this.get_liFive();
    objUl.appendChild(objliFive);

    const objliNextPage: HTMLLIElement = this.get_liNextPage();
    objUl.appendChild(objliNextPage);

    const objliLastPage: HTMLLIElement = this.get_liLastPage();
    objUl.appendChild(objliLastPage);

    //const objliCountPage: HTMLLIElement = this.get_liCountPage();
    //objUl.appendChild(objliCountPage);

    const objliNumber: HTMLLIElement = this.get_liNumber();
    objUl.appendChild(objliNumber);
    objDiv4Pager.appendChild(objUl);

    const hidCurrPageIndex: HTMLInputElement = this.get_hidCurrPageIndex();
    objDiv4Pager.appendChild(hidCurrPageIndex);

    this.SetEvent(divName, strDivName4Pager, this);
  }

  /*
   *设置当前页的状态，当前页，显示特殊颜色
   */
  public SetCurrPageStatusBak(intPageIndex: number): void {
    //console.log('SetCurrPageStatus:');
    //console.log(intPageIndex);
    //设置高亮显示的，就是是第一页时，1亮，第二页时  2亮
    $('#page a').each(function (this: any) {
      const evt: HTMLAnchorElement = this as HTMLAnchorElement; // window.event || arguments[0];
      const LinkA: HTMLAnchorElement = evt as HTMLAnchorElement;
      if (LinkA == null) return;
      const lnkParent: HTMLLIElement = LinkA.parentNode as HTMLLIElement;
      if (lnkParent == null) return;
      //            console.log(lnkParent);
      LinkA.classList.remove('btn-outline-warning');
      LinkA.classList.remove('btn-outline-info'); //btn btn - outline - info btn - sm
      if (Number(LinkA.innerText) == intPageIndex) {
        //lnkParent.classList.add("btn-info");
        LinkA.classList.add('btn-outline-warning');
      } else {
        //lnkParent.classList.add("btn-outline-info");
        LinkA.classList.add('btn-outline-info');
      }
      //console.log(lnkParent);
      //console.log(LinkA.innerText);
    });
  }
  public SetCurrPageStatus(
    divName: HTMLDivElement,
    strDivName4Pager: string,
    intPageIndex: number,
  ): void {
    //console.log('SetCurrPageStatus:');
    //console.log(intPageIndex);
    const objDiv4Pager: HTMLDivElement = GetDivObjInDivObj(divName, strDivName4Pager);
    if (objDiv4Pager == null) {
      const strMsg = `层:[${strDivName4Pager}]在该界面不存在！in (clsPager.InitShow)`;
      console.error(strMsg);
      throw strMsg;
    }
    //设置高亮显示的，就是是第一页时，1亮，第二页时  2亮
    const arrA = objDiv4Pager.getElementsByTagName('a');
    for (let i = 0; i < arrA.length; i++) {
      const objInFor = arrA[i];
      const evt: HTMLAnchorElement = objInFor as HTMLAnchorElement; // window.event || arguments[0];
      const LinkA: HTMLAnchorElement = evt as HTMLAnchorElement;
      if (LinkA == null) return;
      const lnkParent: HTMLLIElement = LinkA.parentNode as HTMLLIElement;
      if (lnkParent == null) return;
      //            console.log(lnkParent);
      LinkA.classList.remove('btn-outline-warning');
      LinkA.classList.remove('btn-outline-info'); //btn btn - outline - info btn - sm
      if (Number(LinkA.innerText) == intPageIndex) {
        //lnkParent.classList.add("btn-info");
        LinkA.classList.add('btn-outline-warning');
      } else {
        //lnkParent.classList.add("btn-outline-info");
        LinkA.classList.add('btn-outline-info');
      }
      //console.log(lnkParent);
      //console.log(LinkA.innerText);
    }
  }

  public Hide(divName: HTMLDivElement | null, strDivName4Pager: string) {
    const objDiv = GetDivObjInDivObj(divName, strDivName4Pager);

    objDiv.style.display = 'none';
  }
  public Show(divName: HTMLDivElement, strDivName4Pager: string) {
    const objDiv = GetDivObjInDivObj(divName, strDivName4Pager);
    objDiv.style.display = 'block';
  }
  public HideLiBak(strAnchor: string, strDivName4Pager: string) {
    const objDiv = $(`#${strDivName4Pager}`);
    const objAnchor = objDiv.find(`a[id ^= "${strAnchor}"]`);
    const thisLi = objAnchor.parent();
    thisLi.hide();
    //thisLi.css("visibility", "hidden");
    thisLi.css('display', 'none');
    //console.log(strAnchor);
    //console.log(thisLi);
  }

  public HideLi(strAnchor: string, objDiv4Pager: HTMLDivElement) {
    // const objDiv = $(`#${strDivName4Pager}`);
    const objAnchor = getAObjInDivObj(objDiv4Pager, strAnchor);
    const thisLi = objAnchor.parentNode as HTMLLIElement;
    thisLi.style.visibility = 'hidden';
    thisLi.style.display = 'none';
    //console.log(strAnchor);
    //console.log(thisLi);
  }
  public ShowLiBak(strAnchor: string, strDivName4Pager: string) {
    const objDiv = $(`#${strDivName4Pager}`);
    const objAnchor = objDiv.find(`a[id ^= "${strAnchor}"]`);
    const thisLi = objAnchor.parent();
    thisLi.show();
    //thisLi.css("visibility", "visible");
    thisLi.css('display', 'block');
    //console.log(strAnchor);
    //console.log(thisLi);
  }
  public ShowLi(strAnchor: string, objDiv4Pager: HTMLDivElement) {
    const objAnchor = getAObjInDivObj(objDiv4Pager, strAnchor);
    const thisLi = objAnchor.parentNode as HTMLLIElement;
    thisLi.style.visibility = 'visible';
    thisLi.style.display = 'block';
    //console.log(strAnchor);
    //console.log(thisLi);
  }
}
