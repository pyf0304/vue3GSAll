import $ from 'jquery';
import { qa_Paper_EditEx } from '../InteractManage/qa_Paper_EditEx';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsgs_RTqa_PaperRelaExWApi } from '@/ts/L3ForWApiEx/GradEduTopic/clsgs_RTqa_PaperRelaExWApi';
import { qa_PaperCRUD } from '@/viewsBase/InteractManage/qa_PaperCRUD';
import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { clsvgs_RTqa_PaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvgs_RTqa_PaperRelaEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { PaperAttachment_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import {
  vgs_RTqa_PaperRela_GetFirstObjAsync,
  vgs_RTqa_PaperRela_GetObjLstByPagerAsync,
  vgs_RTqa_PaperRela_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvgs_RTqa_PaperRelaWApi';
import {
  LiteratureType_BindDdl_LiteratureTypeIdInDivCache,
  LiteratureType_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst, BindTab_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { GetAddressAndPort, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';

declare function xadminopen(strFile: string): void;
declare let window: any;

/* WApiConceptCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ResearchTopicQAEx extends qa_PaperCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvgs_RTqa_PaperRelaBy: string = "qaPaperId";

  //答疑列表
  public mstrListDiv = 'divRTqa_PaperRelaDataLst';
  //论文列表

  public mstrListDivPaper = 'divPaperDataLst';
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 20;
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
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    this.BindGv_vqa_PaperCache(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vqa_Paper':
        alert('该类没有绑定该函数：[this.BindGv_vqa_Paper_Cache]！');
        //this.BindGv_vqa_PaperCache();;
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: ResearchTopicQAEx;
    let objPageEdit;
    if (qa_PaperCRUD.objPageCRUD == null) {
      qa_PaperCRUD.objPageCRUD = new ResearchTopicQAEx(divLayout);
      objPage = <ResearchTopicQAEx>qa_PaperCRUD.objPageCRUD;
    } else {
      objPage = <ResearchTopicQAEx>qa_PaperCRUD.objPageCRUD;
    }

    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
        objPageEdit = new qa_Paper_EditEx('qa_Paper_EditEx', objPage);

        objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;

      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new qa_Paper_EditEx('qa_Paper_EditEx', objPage);

        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit = new qa_Paper_EditEx('qa_Paper_EditEx', objPage);

        if (strCommandName == 'UpdateRecordInTab') {
          objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPageEdit.btnUpdateRecord_Click(strKeyId);
        }
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
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
      default:
        AccessBtnClickDefault(strCommandName, 'ResearchTopicQAExEx.btn_Click');

        break;
    }
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
        //建立缓存
        //
        // 为查询区绑定下拉框
        //await this.BindDdl4QueryRegion();

        this.hidSortvgs_RTqa_PaperRelaBy = 'updDate Desc';
        //PaperCRUD.sortPaperBy = "updDate Desc";
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.SynTopicPaperQA();
        await this.BindGv_vgs_RTqa_PaperRela(this.thisDivList);
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  //同步论文和论文答疑
  public async SynTopicPaperQA() {
    try {
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      const strUserId = userStore.getUserId;

      const responseText = await clsgs_RTqa_PaperRelaExWApi.SynTopicPaperQAAsync(
        strIdCurrEducls,
        strTopicId,
        strUserId,
      );
      const returnBool = !!responseText;
      if (returnBool == false) {
        // const strMsg = `同步论文答疑不成功！`;
      } else {
        console.log('同步论文答疑成功!');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `同步论文答疑不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public Combinevgs_RTqa_PaperRelaCondition(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      strWhereCond += ` and idCurrEduCls=${clsPubLocalStorage.idCurrEduCls}`;
      //strWhereCond += " and isPublic=0";
      strWhereCond += ` and topicId=${clsPrivateSessionStorage.topicIdInTree}`;

      //if (this.paperTitle_q != "") {
      //    strWhereCond += ` And ${clsvgs_RTqa_PaperRelaEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      //}
      //if (this.userName_q != "") {
      //    strWhereCond += ` And ${clsvgs_RTqa_PaperRelaEN.con_UserName} like '%${this.userName_q}%'`;
      //}
      //if (this.updDate_q != "") {
      //    strWhereCond += ` And ${clsvgs_RTqa_PaperRelaEN.con_UpdDate} like '%${this.updDate_q}%'`;
      //}

      //if (GetInputValueInDivObj(divName, 'hidTypeId') == "2") {
      //    $('#FunInfo').show();
      //    $('#btnAddNewRecord').show();
      //    $('#btnDelRecord').show();
      //    strWhereCond += " and updUser=" + userStore.getUserId;
      //}
      //else {

      //    $('#FunInfo').hide();
      //    $('#btnDelRecord').hide();
      //    $('#btnAddNewRecord').hide();
      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combineqa_PaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public async btnQuery_Click() {
    await this.BindGv_vgs_RTqa_PaperRela(this.thisDivList);
  }

  /* 根据条件获取相应的对象列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
 */
  public async BindGv_vgs_RTqa_PaperRela(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.Combinevgs_RTqa_PaperRelaCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvgs_RTqa_PaperRelaObjLst: Array<clsvgs_RTqa_PaperRelaEN> = [];
    try {
      this.recCount = await vgs_RTqa_PaperRela_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvgs_RTqa_PaperRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      await vgs_RTqa_PaperRela_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
        arrvgs_RTqa_PaperRelaObjLst = <Array<clsvgs_RTqa_PaperRelaEN>>jsonData;
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    if (arrvgs_RTqa_PaperRelaObjLst.length > 20) {
      $('#divRTqa_PaperRela').show();
    }
    try {
      this.BindTab_vgs_RTqa_PaperRela(divList, arrvgs_RTqa_PaperRelaObjLst);
      console.log('完成BindGv_vgs_RTqa_PaperRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 显示vgs_RTqa_PaperRela对象的所有属性值
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
    <param name = "divContainer">显示容器</param>
    <param name = "arrqa_PaperObjLst">需要绑定的对象列表</param>
  */
  public async BindTab_vgs_RTqa_PaperRela(
    divContainer: HTMLDivElement,
    arrvgs_RTqa_PaperRelaObjLst: Array<clsvgs_RTqa_PaperRelaEN>,
  ) {
    const strThisFuncName = this.BindTab_vgs_RTqa_PaperRela.name;
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
      //{
      //    fldName: "isPublic",
      //    colHeader: "是否公开",
      //    text: "", tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'isSubmit',
        colHeader: '是否提交',
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
        fldName: 'qaUserName',
        colHeader: '用户',
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
        colHeader: '修改日期',
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
        fldName: 'attachmentCount',
        colHeader: '附件计数',
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
        fldName: 'tagsCount',
        colHeader: '标注数',
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
        fldName: 'questionsCount',
        colHeader: '提问数',
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
        fldName: 'answerCount',
        colHeader: '回答数',
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
        colHeader: '参与答疑',
        text: '参与答疑',
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
          btn1.setAttribute('onclick', `btnQARecord_Click(${strKeyId});`);
          return btn1;
        },
      },
    ];

    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvgs_RTqa_PaperRelaObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  //正常跳转到pdf答疑页面
  public async btnQARecord_Click(strKeyId: string) {
    let objvgs_RTqa_PaperRela: clsvgs_RTqa_PaperRelaEN;
    let objPaperAttachment: clsPaperAttachmentEN;

    const strWhereCond1 = ` 1=1 and mId=${strKeyId}`;

    try {
      const responseText1 = await vgs_RTqa_PaperRela_GetFirstObjAsync(strWhereCond1);
      objvgs_RTqa_PaperRela = <clsvgs_RTqa_PaperRelaEN>responseText1;

      const strWhereCond2 = ` 1=1 and paperId ='${objvgs_RTqa_PaperRela.paperId}' order by updDate Desc`;

      const responseText2 = await PaperAttachment_GetFirstObjAsync(strWhereCond2);
      objPaperAttachment = <clsPaperAttachmentEN>responseText2;

      let strHref = '';
      if (objPaperAttachment != null) {
        const strfilepath = GetAddressAndPort() + objPaperAttachment.filePath;
        strHref = `../InteractManage/Pdf_QA?zoom=1.1&topicId=${objvgs_RTqa_PaperRela.topicId}&qaPaperId=${objvgs_RTqa_PaperRela.qaPaperId}&paperId=${objvgs_RTqa_PaperRela.paperId}&file=${strfilepath}`;
      } else {
        strHref = `../InteractManage/Pdf_QA?zoom=1.1&topicId=${objvgs_RTqa_PaperRela.topicId}&qaPaperId=${objvgs_RTqa_PaperRela.qaPaperId}&paperId=${objvgs_RTqa_PaperRela.paperId}`;
      }
      //window.location.href = "xadmin.open('添加论文观点', '" + strHref + "', '', '', true)";
      xadminopen(strHref);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //////////////////////////////////////////////////////论文部分/////////////////////////////////////////////////

  /* 函数功能:为编辑区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
   */
  public async BindDdl4EditRegion() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面

    await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId'); //用户查询区域

    await LiteratureType_BindDdl_LiteratureTypeIdInDivCache(objLayOut, 'ddlLiteratureTypeId');
  }

  public async BindDdl_LiteratureTypeId_Cache(
    ddlLiteratureTypeId: string,
    objLiteratureType_Cond: clsLiteratureTypeEN,
  ) {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      let arrObjLst_Sel: Array<clsLiteratureTypeEN> = await LiteratureType_GetSubObjLstCache(
        objLiteratureType_Cond,
      );
      arrObjLst_Sel = arrObjLst_Sel.sort((x) =>
        x.GetFldValue(clsLiteratureTypeEN.con_LiteratureTypeId),
      );
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrObjLst_Sel,
        clsLiteratureTypeEN.con_LiteratureTypeId,
        clsLiteratureTypeEN.con_LiteratureTypeName,
        '文献类型',
      );
      console.log('完成BindDdl_LiteratureTypeId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //////////////////////////////////////////////////////论文部分/////////////////////////////////////////////////

  // /*
  // * 论文标题
  //*/
  // public get paperTitle(): string {
  //     return $("#txtPaperTitle").val();
  // }
  // ///////////////////////论文列表条件
  // public get PaperUser(): string {
  //     return $("#ddlUserId").val();
  // }
  // /*
  // * 文献类型Id
  //*/
  // public get literatureTypeId(): string {
  //     return $("#ddlLiteratureTypeId").val();
  // }

  //  /*
  // * 设置排序字段-相当使用ViewState功能
  //*/
  //  public set hidSortvPaperBy(value: string) {
  //      $("#hidSortvPaperBy").val(value);
  //  }
  //  /*
  //  * 设置排序字段
  // */
  //  public get hidSortvPaperBy(): string {
  //      return $("#hidSortvPaperBy").val();
  //  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvgs_RTqa_PaperRelaBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvgs_RTqa_PaperRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvgs_RTqa_PaperRelaBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvgs_RTqa_PaperRelaBy');
  }
}
