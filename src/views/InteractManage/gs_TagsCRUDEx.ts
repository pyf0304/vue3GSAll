import { gs_TagsCRUD } from '@/viewsBase/InteractManage/gs_TagsCRUD';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsvgs_TagsEN } from '@/ts/L0Entity/InteractManage/clsvgs_TagsEN';
import {
  vgs_Tags_GetObjByTagsIdAsync,
} from '@/ts/L3ForWApi/InteractManage/clsvgs_TagsWApi';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetCheckedKeyIdsInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { clsgs_TagsENEx } from '@/ts/L0Entity/InteractManage/clsgs_TagsENEx';
import {
  gs_Tags_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/InteractManage/clsgs_TagsWApi';
import { clsgs_TagsEN } from '@/ts/L0Entity/InteractManage/clsgs_TagsEN';
import { Format } from '@/ts/PubFun/clsString';
import {
  gs_TagsEx_GetObjExLstByPagerAsync,
} from '@/ts/L3ForWApiEx/InteractManage/clsgs_TagsExWApi';

declare function xadminopen(str1: string, str2: string): void;

// import $ from 'jquery';
declare let window: any;
/* gs_TagsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_TagsCRUDEx extends gs_TagsCRUD {
  public static GetPropValue: (strPropName: string) => string;
  public static mstrListDiv = 'divDataLst';

  //论文列表

  public mstrListDivPaper = 'divPaperDataLst';
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        this.hidSortvgs_TagsBy = 'updDate Desc';
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_gs_Tags4Func(this.thisDivList);
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /****************************************************答疑邀请相关 End***************************************************/

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async Combinegs_TagsCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ' 1 = 1 ';
    //strWhereCond += " and isPublic=1";
    strWhereCond += ` and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsvgs_TagsEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }
      if (this.Tags_q != '') {
        strWhereCond += ` And ${clsvgs_TagsEN.con_TagsContent} like '%${this.Tags_q}%'`;
      }
      if (this.updDate_q != '') {
        strWhereCond += ` And ${clsvgs_TagsEN.con_UpdDate} like '%${this.updDate_q}%'`;
      }

      if (GetInputValueInDivObj(divName, 'hidTypeId') == '2') {
        strWhereCond += ` and updUser='${userStore.getUserId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combinevgs_TagsCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public async btnQuery_Click() {
    await this.BindGv_gs_Tags4Func(this.thisDivList);
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv4Func_NoCache)
   **/
  public async BindGv_gs_Tags4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_gs_Tags4Func.name;
    if (gs_TagsCRUD.sortgs_TagsBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortgs_TagsBy)为空,请检查!(In BindGv_gs_TagsCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const strWhereCond = await this.Combinegs_TagsCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrgs_TagsExObjLst: Array<clsgs_TagsENEx> = [];
    try {
      this.recCount = await gs_Tags_GetRecCountByCondAsync(strWhereCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format('在绑定Gv过程中,根据条件:[{0}]获取的对象列表数为0!', strWhereCond);
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: gs_TagsCRUD.sortgs_TagsBy, //如果该字段为空,就使用下面的排序函数
        sortFun: (x, y) => {
          console.log(x, y);
          return 0;
        },
      };
      arrgs_TagsExObjLst = await gs_TagsEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e) {
      const strMsg = `绑定GridView不成功,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrgs_TagsExObjLst.length == 0) {
      const strKey = Format('{0}', clsgs_TagsEN._CurrTabName);
      const strMsg = `根据条件获取的${this.thisTabName}记录数为0!(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_gs_Tags4Func(divList, arrgs_TagsExObjLst);
    } catch (e) {
      const strMsg = `绑定${this.thisTabName}对象列表不成功, ${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async BindTab_gs_Tags4Func(
    divContainer: HTMLDivElement,
    arrgs_TagsExObjLst: Array<clsgs_TagsENEx>,
  ) {
    const strThisFuncName = this.BindTab_gs_Tags4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsgs_TagsENEx.con_PaperTitle,
        sortBy: 'paperName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '论文标题',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsgs_TagsENEx.con_UserName,
        sortBy: 'userName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '标记用户',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsgs_TagsEN.con_TagsContent,
        sortBy: clsgs_TagsEN.con_TagsContent,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '标注内容',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsgs_TagsEN.con_PdfPageNum,
        sortBy: clsgs_TagsEN.con_PdfPageNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'Pdf页码',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsgs_TagsEN.con_VoteCount,
        sortBy: 'voteCount',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '点赞数',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsgs_TagsEN.con_OrderNum,
        sortBy: clsgs_TagsEN.con_OrderNum,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '序号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsgs_TagsEN.con_UpdUser,
        sortBy: clsgs_TagsEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },

      {
        fldName: clsgs_TagsEN.con_UpdDate,
        sortBy: clsgs_TagsEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrgs_TagsExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = `扩展字段值的映射出错,${e}.(in ${this.constructor.name}.${strThisFuncName}`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(divDataLst, arrgs_TagsExObjLst, arrDataColumn, clsgs_TagsEN.con_TagsId, this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /* 显示vgs_Tags对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
     <param name = "divContainer">显示容器</param>
     <param name = "arrvgs_TagsObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_vgs_TagsBak(
    divContainer: HTMLDivElement,
    arrgs_TagsExObjLst: Array<clsgs_TagsENEx>,
  ) {
    const strThisFuncName = this.BindTab_vgs_TagsBak.name;
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'paperTitle',
        colHeader: '论文标题',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'tagsContent',
        colHeader: '标记内容',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: clsgs_TagsENEx.con_UserName,
        colHeader: '标记用户',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'updDate',
        colHeader: '标记日期',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: '',
        colHeader: '查看',
        text: '查看',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Button',
        orderNum: 1,
        funcName: (strKeyId: string, strText: string) => {
          const btn1: HTMLElement = document.createElement('button');
          btn1.innerText = strText;
          btn1.className = 'btn btn-outline-info btn-sm';
          btn1.setAttribute('onclick', `btnAnswer_Click('${strKeyId}');`);
          return btn1;
        },
      },
      //{
      //    fldName: "",
      //    colHeader: "删除",
      //    text: "删除", tdClass: "text-left", sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btnDelRecordInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},
    ];
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab(divDataLst, arrgs_TagsExObjLst, arrDataColumn, 'tagsId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async btnAnswer_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      vgs_Tags_GetObjByTagsIdAsync(strKeyId).then((jsonData) => {
        const objvgs_TagsEN: clsvgs_TagsEN = <clsvgs_TagsEN>jsonData;
        if (objvgs_TagsEN != null) {
          const strPaperId = objvgs_TagsEN.paperId;

          const strIdCurrEducls = objvgs_TagsEN.idCurrEduCls;
          const strHref = `../GradEduEx/PaperSubViewpoint_pdf?Type=02&paperId=${strPaperId}&questionsTypeId=03&idCurrEduCls=${strIdCurrEducls}`;

          xadminopen('Pdf论文标注', strHref);
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    console.log(strKeyId);
    const objPage: gs_TagsCRUDEx = new gs_TagsCRUDEx(divLayout);
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);

    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;

      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;

      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'WA_Users_QUDI_CacheEx.btn_Click');

        break;
    }
  }
  /////////////论文部分/////////////////////////////////////////////////

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombinevPaperCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle}%'`;
      }

      if (this.literatureTypeId != '' && this.literatureTypeId != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId}'`;
      }
      //用户
      if (this.PaperUser != '' && this.PaperUser != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.PaperUser}'`;
      }
      //只查询提交后的论文数据
      strWhereCond += ` And ${clsPaperEN.con_IsSubmit} = 'true'`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombinevPaperConditionobj(): clsPaperEN {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    //strWhereCond: string = " 1 = 1 and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";

    const objvPaper_Cond: clsPaperEN = new clsPaperEN();

    //objvPaper_Cond.SetCondFldValue(clsPaperEN.con_IdCurrEduCls, clsPubLocalStorage.idCurrEduCls, "=");
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle != '') {
        objvPaper_Cond.SetCondFldValue(clsPaperEN.con_PaperTitle, this.paperTitle, 'like');
      }
      if (this.literatureTypeId != '' && this.literatureTypeId != '0') {
        objvPaper_Cond.SetCondFldValue(clsPaperEN.con_LiteratureTypeId, this.literatureTypeId, '=');
      }
      if (this.PaperUser != '' && this.PaperUser != '0') {
        objvPaper_Cond.SetCondFldValue(clsPaperEN.con_UpdUser, this.PaperUser, '=');
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineUsersConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objvPaper_Cond;
  }
  /* 根据条件获取相应的记录对象的列表
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/

  ////确定选择的论文 并添加到关系表中
  //public async btnPaperRecordInTab_Click(strkeyId: string) {
  //    //存放Id
  //    $("#hidPaperId").val(strkeyId)

  //    //判断是否选择分配权限；没选择给出提示；
  //    //需要提示选择角色
  //    if (this.shareId != "" && this.shareId != "0") {

  //        const responseText3 = await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
  //            const returnBool2: boolean = <boolean>jsonData;
  //            if (returnBool2 == true) {
  //                HideDialog();
  //                this.BindGv_vgs_Tags();
  //            }
  //        });
  //    }
  //    else {
  //        strIdCurrEduclsstrInfo: string = `请选择分配权限下拉框!`;

  //        //显示信息框
  //        alert(strInfo);
  //        return;
  //    }

  //}

  //////////////////////////////////////////////////////论文部分/////////////////////////////////////////////////

  /*
   * 论文标题
   */
  public get paperTitle(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperTitle');
  }
  ///////////////////////论文列表条件
  public get PaperUser(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlUserId');
  }
  /*
   * 文献类型Id
   */
  public get literatureTypeId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlLiteratureTypeId');
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvgs_TagsBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvgs_TagsBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvgs_TagsBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvgs_TagsBy');
  }
  /*
   * 分享
   */
  public set shareId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlShareId', value);
  }
  /*
   * 分享
   */
  public get shareId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlShareId');
  }

  /*
   * 论文标题
   */
  public get Tags_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtTags_q');
  }

  /*
   * 论文标题
   */
  public get paperTitle_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'txtPaperTitle_q');
  }

  /*
   * 修改日期
   */
  public get updDate_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUpdDate_q');
  }
  /*
   * 类型Id
   */
  public get typeId(): string {
    return gs_TagsCRUDEx.GetPropValue('typeId');
  }
}
