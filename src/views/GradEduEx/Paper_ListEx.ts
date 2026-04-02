import $ from 'jquery';
import { gs_PaperAttention_EditEx } from '../GradEduPaper/gs_PaperAttention_EditEx';
import { Paper_ListEx_AllPaper } from './Paper_ListEx_AllPaper';
import { Paper_ListEx_CurrEduCls } from './Paper_ListEx_CurrEduCls';
import { Paper_ListEx_Direction } from './Paper_ListEx_Direction';
import { Paper_ListEx_Major } from './Paper_ListEx_Major';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsPubFun4Web, doDownLoad, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { PaperCollectionLogEx_btnAddCollection_Click } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperCollectionLogExWApi';
import {
  PaperEx_BindList_Paper,
  PaperEx_GetObjExLstByPagerAsync,
  PaperEx_ReFreshThisCacheByIdCurrEduCls,
  clsPaperExWApi,
} from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { SysVoteEx_btnAddVote_Click_PaperId } from '@/ts/L3ForWApiEx/InteractManage/clsSysVoteExWApi';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
import { clsgs_PaperAttentionEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperAttentionEN';
import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { clsPaperCollectionLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperCollectionLogEN';
import { clsPaperDownloadLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperDownloadLogEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';
import { clsvPaperCountEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperCountEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { clsgs_PaperTypeEN } from '@/ts/L0Entity/RT_Params/clsgs_PaperTypeEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import {
  XzMajorDirection_BindDdl_MajorDirectionIdByIdXzMajorInDivCache,
  XzMajorDirection_GetObjByMajorDirectionIdCache,
  XzMajorDirection_GetObjLstCache,
} from '@/ts/L3ForWApi/BaseInfo/clsXzMajorDirectionWApi';
import { gs_PaperAttention_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperAttentionWApi';
import { PaperAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import { PaperCollectionLog_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperCollectionLogWApi';
import {
  PaperDownloadLog_AddNewRecordAsync,
  PaperDownloadLog_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperDownloadLogWApi';
import {
  Paper_GetObjByPaperIdAsync,
  Paper_GetRecCountByCondAsync,
  Paper_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { vPaperCount_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperCountWApi';
import { SysVote_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import {
  gs_PaperType_BindDdl_PaperTypeIdInDivCache,
  gs_PaperType_GetObjLstAsync,
} from '@/ts/L3ForWApi/RT_Params/clsgs_PaperTypeWApi';
import {
  LiteratureType_BindDdl_LiteratureTypeIdInDivCache,
  LiteratureType_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetSelectObjInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  ShowDivInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import router from '@/router';
import enumPaperRange from '@/ts/FunClass/enumPaperRange';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { sysVoteStore } from '@/store/modules/sysVote';

declare let window: any;
/* Paper_ListEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Paper_ListEx extends PaperCRUD implements IShowList {
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrsortPaperBy: string = "paperId";
  public static CurrTabName = 'AllPaper';

  //专业方向
  public mstrListDivMajorDirection = 'divMajorDirectionDataLst';

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
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    this.BindGv_Paper(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'QxUsers':
        alert('该类没有绑定该函数：[this.BindGv_QxUsers_Cache]！');
        //this.BindGv_QxUsersCache();;
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
    const objPage: Paper_ListEx = new Paper_ListEx(divLayout);
    const strTabId = strKeyId;
    const strPaperId = strKeyId;
    clsPaperExWApi.btn_Click = Paper_ListEx.btn_Click;
    //if (PaperCRUD.objPageCRUD == null) {
    //    PaperCRUD.objPageCRUD = new Paper_ListEx();
    //    objPage = <Paper_ListEx>PaperCRUD.objPageCRUD;
    //}
    //else {
    //    objPage = <Paper_ListEx>PaperCRUD.objPageCRUD;
    //}
    const objLayOut = objPage.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(objLayOut, 'divDataLst');
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);

    switch (strCommandName) {
      case 'PaperSubVer':
        console.log('PaperSubVer, to /gs_PaperReportCRUD');
        router.push('/gs_PaperReportCRUD');
        break;
      case 'changeTab':
        switch (strTabId) {
          case 'MyDirection': //查询记录
            objPage.liMajorDirection_Click();
            break;

          case 'CurrEduClsPaper': //查询记录
            objPage.liCurrEduCls_Click();
            break;
          case 'AllPaper': //查询记录
            objPage.liAllPaper_Click();
            break;
          case 'MyMajor': //查询记录
            objPage.liMajor_Click();
            break;
        }
        break;
      case 'MajorDirection': //查询记录
        objPage.liMajorDirection_Click();
        break;

      case 'CurrEduCls': //查询记录
        objPage.liCurrEduCls_Click();
        break;
      case 'AllPaper': //查询记录
        objPage.liAllPaper_Click();
        break;
      case 'Major': //查询记录
        objPage.liMajor_Click();
        break;

      case 'AddCollection': //查询记录
        objPage.btnAddCollection_Click(strKeyId);
        break;
      case 'AddVote': //查询记录
        objPage.btnAddVote_Click(strKeyId);
        break;
      case 'AddAttention': //查询记录
        objPage.btnAddAttention_Click(objPage, strPaperId);
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'DownLoadFile':
        objPage.btnDownLoadFile_Click(strPaperId);
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
        //objPage.btnExportExcel_Click();
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
        AccessBtnClickDefault(strCommandName, 'Paper_ListExEx.btn_Click');

        break;
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
  */
  public async PageLoad() {
    const strThisFuncName = 'PageLoad';
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return;
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName4Pager = 'divPager';
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        this.SetEventFunc();
        //加载页面所需数据源到缓存
        // 为查询区绑定下拉框
        await this.BindDdl4QueryRegion();
        if (userStore.getIdXzMajor.length > 0) {
          await XzMajorDirection_BindDdl_MajorDirectionIdByIdXzMajorInDivCache(
            objLayOut,
            'ddlMajorDirectionId_SetFldValue',
            userStore.getIdXzMajor,
          );

          //绑定编辑文献类型
          this.SetMajorDirectionName(userStore.getIdXzMajor);
        }
        // SetSpanHtmlInDivObj(
        //   objLayOut,
        //   'spnMajorName',
        //   Format('[{0}]', userStore.getMajorName),
        // );

        PaperCRUD.sortPaperBy = 'updDate Desc';
        this.hidSortvXzMajorDirectionBy = 'majorDirectionId Asc';

        $('#hidUserId').val(userStore.getUserId);
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(this.divList, divName4Pager);
          this.bolIsInitShow = true; //
        }
        clsPaperExWApi.btn_Click = Paper_ListEx.btn_Click;
        const activeTabId = Paper_ListEx.GetPropValue('activeTabId');

        let objPage_Sub;
        let strMsg = '';
        switch (activeTabId) {
          case enumPaperRange.MyDirection: //查询记录
            objPage_Sub = new Paper_ListEx_Direction(this.divLayout);
            await objPage_Sub.PageLoad();
            break;

          case enumPaperRange.CurrEduClsPaper: //查询记录
            objPage_Sub = new Paper_ListEx_CurrEduCls(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          case enumPaperRange.AllPaper: //查询记录
            objPage_Sub = new Paper_ListEx_AllPaper(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          case enumPaperRange.MyMajor: //查询记录
            objPage_Sub = new Paper_ListEx_Major(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          default:
            strMsg = `当前Tab:${Paper_ListEx.CurrTabName}在函数(${strThisFuncName})中没有被处理！`;
            alert(strMsg);

            break;
        }

        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async Refresh_Click() {
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    PaperEx_ReFreshThisCacheByIdCurrEduCls(strIdCurrEducls);
    location.reload();
  }

  public async BindDdl4QueryRegion() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q'); //用户查询区域

    //const objXzMajor_Cond: clsXzMajorEN = new clsXzMajorEN();//查询区域
    //const ddl_idXzMajor_q = await clsDropDownList.BindDdl_XzMajorInvPaper_Cache("ddlIdXzMajor_q", objXzMajor_Cond);//专业查询区域

    await LiteratureType_BindDdl_LiteratureTypeIdInDivCache(objLayOut, 'ddlLiteratureTypeId_q');

    await gs_PaperType_BindDdl_PaperTypeIdInDivCache(objLayOut, 'ddlPaperTypeId_q');

    //const ddl_UserId_q = await this.BindDdl_UserId("ddlUserId_q");
    //const ddl_idXzMajor_q = await this.BindDdl_idXzMajorNum("ddlIdXzMajor_q");
  }

  public async BindDdl_gs_PaperType_Cache(ddlgs_PaperTypeId: string) {
    const strWhereCond = ' 1 =1 ';
    const objDdl = document.getElementById(ddlgs_PaperTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlgs_PaperTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrObjLst_Sel: Array<clsgs_PaperTypeEN> = await gs_PaperType_GetObjLstAsync(
        strWhereCond,
      );

      BindDdl_ObjLst(
        ddlgs_PaperTypeId,
        arrObjLst_Sel,
        clsgs_PaperTypeEN.con_PaperTypeId,
        clsgs_PaperTypeEN.con_PaperTypeName,
        '论文类型',
      );
      console.log('完成BindDdl_gs_PaperType_Cache!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
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
  /* 查询
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async btnQuery_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strThisFuncName = this.btnQuery_Click.name;
    try {
      ShowDivInDivObj(objLayOut, 'divLoading');
      let objPage_Sub;
      let strMsg = '';
      clsPaperExWApi.btn_Click = Paper_ListEx.btn_Click;
      switch (Paper_ListEx.CurrTabName) {
        case 'AllPaper':
          objPage_Sub = new Paper_ListEx_AllPaper(this.divLayout);
          await objPage_Sub.PageLoad();
          break;
        case 'CurrEduCls':
          objPage_Sub = new Paper_ListEx_CurrEduCls(this.divLayout);
          await objPage_Sub.PageLoad();
          break;
        case 'Major':
          objPage_Sub = new Paper_ListEx_Major(this.divLayout);
          await objPage_Sub.PageLoad();
          break;
        case 'Direction':
          objPage_Sub = new Paper_ListEx_Direction(this.divLayout);
          await objPage_Sub.PageLoad();
          break;
        default:
          strMsg = `当前Tab:${Paper_ListEx.CurrTabName}在函数(${strThisFuncName})中没有被处理！`;
          alert(strMsg);

          break;
      }

      HideDivInDivObj(objLayOut, 'divLoading');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 所有论文
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async liAllPaper_Click() {
    try {
      clsPaperExWApi.btn_Click = Paper_ListEx.btn_Click;
      Paper_ListEx.CurrTabName = 'AllPaper';
      const objPage = new Paper_ListEx_AllPaper(this.divLayout);
      await objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 所有论文
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
 */
  public async liCurrEduCls_Click() {
    try {
      clsPaperExWApi.btn_Click = Paper_ListEx.btn_Click;
      Paper_ListEx.CurrTabName = 'CurrEduCls';
      const objPage = new Paper_ListEx_CurrEduCls(this.divLayout);
      await objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 本专业
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async liMajor_Click() {
    try {
      clsPaperExWApi.btn_Click = Paper_ListEx.btn_Click;
      Paper_ListEx.CurrTabName = 'Major';
      //绑定专业论文
      const objPage = new Paper_ListEx_Major(this.divLayout);
      objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 本专业方向
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async liMajorDirection_Click() {
    try {
      clsPaperExWApi.btn_Click = Paper_ListEx.btn_Click;
      Paper_ListEx.CurrTabName = 'Direction';
      //绑定方向论文
      const objPage = new Paper_ListEx_Direction(this.divLayout);
      objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //排序事件
  public async PaperSort_Click() {
    try {
      if (this.PaperSort == '1') {
        PaperCRUD.sortPaperBy = 'updDate Desc';
      } else if (this.PaperSort == '2') {
        PaperCRUD.sortPaperBy = 'paperTitle Asc';
      } else if (this.PaperSort == '3') {
        PaperCRUD.sortPaperBy = 'appraiseCount Desc';
      } else if (this.PaperSort == '4') {
        PaperCRUD.sortPaperBy = 'score Desc';
      } else if (this.PaperSort == '5') {
        PaperCRUD.sortPaperBy = 'pcount Desc';
      } else if (this.PaperSort == '6') {
        PaperCRUD.sortPaperBy = 'downloadCount Desc';
      } else if (this.PaperSort == '7') {
        PaperCRUD.sortPaperBy = 'okCount Desc';
      }
      this.btnQuery_Click();
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

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
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }
      if (this.updDate_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_UpdDate} like '%${this.updDate_q}%'`;
      }
      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      }
      if (this.User_q != '' && this.User_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.User_q}'`;
      }
      //论文类型
      if (this.PaperTypeId_q != '' && this.PaperTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTypeId} = '${this.PaperTypeId_q}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombinevPaperCondition_EduCLs(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    try {
      //if ($("#hidTabPaper").val() == "1") {
      //    strWhereCond += " and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
      //}
      //if ($("#hidTabPaper").val() == "2") {
      //    strWhereCond += " and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
      //}
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }
      if (this.updDate_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_UpdDate} like '%${this.updDate_q}%'`;
      }
      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      }
      if (this.User_q != '' && this.User_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.User_q}'`;
      }
      //论文类型
      if (this.PaperTypeId_q != '' && this.PaperTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTypeId} = '${this.PaperTypeId_q}'`;
      }

      //if (this.User_q != "" && this.User_q != "0") {
      //    strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.User_q}'`;
      //}
      //if (this.idXzMajor_q != "" && this.idXzMajor_q != "0") {
      //    strWhereCond += ` And ${clsPaperEN.con_IdXzMajor} = '${this.idXzMajor_q}'`;

      //    //if (this.MajorDirectionId_q != "" && this.MajorDirectionId_q != "0") {
      //    //    strWhereCond += " and paperId in (select paperId from vMajorDirectionPaperRela where majorDirectionId='" + this.MajorDirectionId_q + "')";
      //    //}
      //}
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
      if (this.paperTitle_q != '') {
        objvPaper_Cond.SetCondFldValue(clsPaperEN.con_PaperTitle, this.paperTitle_q, 'like');
      }
      if (this.updDate_q != '') {
        objvPaper_Cond.SetCondFldValue(clsPaperEN.con_UpdDate, this.updDate_q, 'like');
      }
      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        objvPaper_Cond.SetCondFldValue(
          clsPaperEN.con_LiteratureTypeId,
          this.literatureTypeId_q,
          '=',
        );
      }
      if (this.User_q != '' && this.User_q != '0') {
        objvPaper_Cond.SetCondFldValue(clsPaperEN.con_UpdUser, this.User_q, '=');
      }
      //if (this.idXzMajor_q != "" && this.idXzMajor_q != "0") {
      //    objvPaper_Cond.SetCondFldValue(clsPaperEN.con_IdXzMajor, this.idXzMajor_q, "=");
      //}
      //论文类型
      if (this.PaperTypeId_q != '' && this.PaperTypeId_q != '0') {
        objvPaper_Cond.SetCondFldValue(clsPaperEN.con_PaperTypeId, this.PaperTypeId_q, '=');
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
  public async BindGv_vPaperBak() {
    const strWhereCond = await this.CombinevPaperCondition();
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

    //strWhereCond2: string = "";
    //const objvPaper_Cond: clsPaperEN = this.CombinevPaperConditionobj();

    ////objvPaper_Cond.SetCondFldValue(clsPaperEN.con_IdXzMajor, this.idXzMajor_q, "=");

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvPaperObjLst0: Array<clsPaperENEx> = [];

    const objPagerPara: stuPagerPara = {
      pageIndex: intCurrPageIndex,
      pageSize: this.pageSize,
      whereCond: strWhereCond,
      orderBy: PaperCRUD.sortPaperBy,
      sortFun: (x, y) => {
        x = x;
        y = y;
        return 0;
      },
    };

    try {
      //this.recCount = await vPaper_GetRecCountByCondCache(objvPaper_Cond, strIdCurrEducls);
      //console.log("完成计数!");
      //arrvPaperObjLst0 = await vPaper_GetObjLstByPagerCache(objPagerPara, strIdCurrEducls);
      //console.log("完成对象列表获取!");

      this.recCount = await Paper_GetRecCountByCondAsync(strWhereCond);

      arrvPaperObjLst0 = await PaperEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根据条件获取论文视图的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrPaperExObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    try {
      if (strIdCurrEducls == '00000050') {
        //私有空间
        //arrPaperExObjLst = arrvPaperObjLst0.filter(x => x.idCurrEduCls != "00000050");

        //const gvResultPaper = await this.BindList_vPaper("1", arrPaperExObjLst);
        await this.BindList_vPaperBak('1', arrvPaperObjLst0);
      } else {
        await this.BindList_vPaperBak('1', arrvPaperObjLst0);
      }

      $('#divPager').show();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定论文视图对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public async BindGv_Paper000(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_Paper000.name;
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    let objPage_Sub;
    const activeTabId = Paper_ListEx.GetPropValue('activeTabId');
    let strMsg;
    switch (activeTabId) {
      case enumPaperRange.MyDirection: //查询记录
        objPage_Sub = new Paper_ListEx_Direction(this.divLayout);
        await objPage_Sub.PageLoad();
        break;

      case enumPaperRange.CurrEduClsPaper: //查询记录
        objPage_Sub = new Paper_ListEx_CurrEduCls(this.divLayout);
        await objPage_Sub.PageLoad();
        break;
      case enumPaperRange.AllPaper: //查询记录
        objPage_Sub = new Paper_ListEx_AllPaper(this.divLayout);
        await objPage_Sub.PageLoad();
        break;
      case enumPaperRange.MyMajor: //查询记录
        objPage_Sub = new Paper_ListEx_Major(this.divLayout);
        await objPage_Sub.PageLoad();
        break;
      default:
        strMsg = `当前Tab:${Paper_ListEx.CurrTabName}在函数(${strThisFuncName})中没有被处理！`;
        alert(strMsg);

        break;
    }
  }
  public async BindGv_Paper0(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const divName4Pager = 'divPager';

    const strWhereCond = await this.CombinevPaperCondition();
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

    //strWhereCond2: string = "";
    //const objvPaper_Cond: clsPaperEN = this.CombinevPaperConditionobj();

    ////objvPaper_Cond.SetCondFldValue(clsPaperEN.con_IdXzMajor, this.idXzMajor_q, "=");

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrPaperObjLst0: Array<clsPaperENEx> = [];

    const objPagerPara: stuPagerPara = {
      pageIndex: intCurrPageIndex,
      pageSize: this.pageSize,
      whereCond: strWhereCond,
      orderBy: PaperCRUD.sortPaperBy,
      sortFun: (x, y) => {
        x = x;
        y = y;
        return 0;
      },
    };

    try {
      this.recCount = await Paper_GetRecCountByCondAsync(strWhereCond);

      arrPaperObjLst0 = await PaperEx_GetObjExLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根据条件获取论文视图的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrPaperExObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    try {
      if (strIdCurrEducls == '00000050') {
        await PaperEx_BindList_Paper('1', divList, arrPaperObjLst0, this.divLayout);
      } else {
        await PaperEx_BindList_Paper('1', divList, arrPaperObjLst0, this.divLayout);
      }

      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, divName4Pager);
      $('#divPager').show();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定论文视图对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //绑定个性化论文列表
  public async BindList_vPaperBak(strTypeId: string, arrPaperExObjLst: Array<clsPaperENEx>) {
    const divName = this.getDivName(enumDivType.LayOut_01);

    let arrPaperCollectionLogObjLst: Array<clsPaperCollectionLogEN> = [];
    let arrgs_PaperAttentionObjLst: Array<clsgs_PaperAttentionEN> = [];

    let arrvPaperCountObjLst: Array<clsvPaperCountEN> = [];
    let strhtml = '';
    // const strWhereCond1 = ` 1 =1 and updUser='${userStore.getUserId}' and voteTypeId='01'`;
    const strWhereCond2 = ` 1 =1 and updUser='${userStore.getUserId}'`;

    //strWhereCond3 = " 1 =1 and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
    const strWhereCond3 = await this.CombinevPaperCondition();

    try {
      const strVoteType = '01';
      const strUserId = userStore.getUserId;

      arrPaperCollectionLogObjLst = await PaperCollectionLog_GetObjLstAsync(strWhereCond2);

      arrvPaperCountObjLst = await vPaperCount_GetObjLstAsync(strWhereCond3);

      arrgs_PaperAttentionObjLst = await gs_PaperAttention_GetObjLstAsync(strWhereCond2);

      for (let i = 0; i < arrPaperExObjLst.length; i++) {
        const objvPaperEx = arrPaperExObjLst[i];

        const objCount = arrvPaperCountObjLst.find((x) => x.paperId == objvPaperEx.paperId); //使用find必须通过if判断不能为空后才能调用属性

        if (objCount != null) {
          strhtml += '<div class="main-w1 fl" ><dl class="detail-list dbpage" ><dd>';
          //strhtml += '<h6><a href="../GradEduEx/PaperDetail?paperId=' + objPaperEx.paperId + '">' + objPaperEx.paperTitle + '</a>';
          //判断引用论文，自研论文
          if (objvPaperEx.paperTypeId == '02') {
            //自研论文
            strhtml += `<h6><a href="javascript:void(0)" onclick="xadmin.open('论文查看(原创论文)', '../GradEduEx/PaperDetail?paperId=${objvPaperEx.paperId}')"><span class='text-info'>${objvPaperEx.paperTitle}(${objvPaperEx.paperTypeName})</a>`;
          } else {
            strhtml += `<h6><a href="javascript:void(0)" onclick="xadmin.open('论文查看(引用论文)', '../GradEduEx/PaperDetail?paperId=${objvPaperEx.paperId}')">${objvPaperEx.paperTitle}(${objvPaperEx.paperTypeName})</a>`;
          }

          //if (objCount.attachmentCount > 0) {
          //    strhtml += "<span class=\"btn-2\" style=\"padding-left:50px;\"><a style=\"font-size:15px; color:#f98c51\" href=\"#\" onclick=\"xadmin.open('pdf查看', '../GradEduEx/PdfDetail?paperId=" + objPaperEx.paperId + "')\">pdf查看</a></span>";
          //}

          strhtml += `<span class="btn-2" style="padding-left:50px;"><a style="font-size:15px; color:#f98c51" href="javascript:void(0)" onclick=PaperSubVer_Click("${objvPaperEx.paperId}")>pdf论文子观点查看</a></span>`;

          //只有自研论文才有历史版本
          if (objvPaperEx.paperTypeId == '02') {
            if (objvPaperEx.versionCount > 0 && objvPaperEx.versionCount != null) {
              strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('自研论文历史版本', '../GradEduEx/HistoricalVersion?Key=${objvPaperEx.paperId}&Type=10')"> ${clsIcon.faCommentDots}历史版本</button >`;
            }
          }

          strhtml += '</h6>';
          strhtml += `<div class="baseinfo"><span><a href="javascript:void(0)">${objvPaperEx.author}</a></span><span><a href="javascript:void(0)">${objvPaperEx.literatureSources}</a></span>`;
          strhtml += `<span>${objvPaperEx.periodical}</span><em>${objvPaperEx.keyword}</em>`;
          strhtml += '</div>';
          strhtml += `<div class="abstract">${objvPaperEx.paperContent}</div>`;
          strhtml += '<div class="opts"><ul class="opts-count">';
          strhtml += `<li>评论数:<em>${objCount.appraiseCount}</em></li><li>综合评分:<em>${objCount.score}</em></li>`;
          if (objCount.teaScore != null) {
            strhtml += `<li>教师评分:<em>${objCount.teaScore}</em></li>`;
          }
          if (objCount.stuScore != null) {
            strhtml += `<li>学生评分:<em>${objCount.stuScore}</em></li>`;
          }
          strhtml += `<li>读写数:<em>${objCount.pcount}</em></li><li>浏览量:<em>${objvPaperEx.browseNumber}</em></li>`;
          //strhtml += '<li>:<em>' + objPaperEx.pcount + '</em></li>';
          const strUserName = await vQxUsersSimStore.getUserName(objvPaperEx.updUser);
          if (strUserName != '') {
            strhtml += `<li class="date">编辑用户：${strUserName}</li><li class="date">发表日期：${objvPaperEx.updDate}</li></ul>`;
          }

          strhtml += '<ul class="opts-btn">';

          const objAttention = arrgs_PaperAttentionObjLst.find(
            (x) => x.paperId == objvPaperEx.paperId,
          );

          if (objAttention == null) {
            strhtml += `<li><a href="javascript:void(0)" onclick=btnAttention_Click("${objvPaperEx.paperId}")><i class="layui-icon layui-icon-face-smile-b" style="font-size: 20px;"></i><b>关注</b></a></li>`;
          } else {
            strhtml += `<li><a href="javascript:void(0)" onclick=btnAttention_Click("${objvPaperEx.paperId}")><i class="layui-icon layui-icon-face-smile-b" style="font-size: 20px; color: #1E9FFF;"></i><b>已关注</b></a></li>`;
          }

          const objLike = sysVoteStore.getObj(strVoteType, strUserId, objvPaperEx.paperId);

          //if (objLike == null) {
          //    strhtml += '<li class="btn-quote">' + objCount.okCount + '<a class="icon-zan" href="javascript:void(0)" onclick=btnAddVote_Click("' + objPaperEx.paperId + '","' + objPaperEx.updUser + '")><i></i>点赞</a></li>';
          //    //console.log("null!");
          //} else {
          //    strhtml += '<li class="btn-quote">' + objCount.okCount + '<a class="icon-zan_" href="javascript:void(0)" onclick=btnAddVote_Click("' + objPaperEx.paperId + '","' + objPaperEx.updUser + '")><i></i>已点赞</a></li>';
          //    //console.log(objLike.paperId);
          //}
          if (objLike == null) {
            strhtml += `<li>${objCount.okCount}<a href="javascript:void(0)" onclick=btnAddVote_Click("${objvPaperEx.paperId}","${objvPaperEx.updUser}")><i class="layui-icon layui-icon-praise" style="font-size: 24px; "></i>点赞</a></li>`;
            //console.log("null!");
          } else {
            strhtml += `<li>${objCount.okCount}<a href="javascript:void(0)" onclick=btnAddVote_Click("${objvPaperEx.paperId}","${objvPaperEx.updUser}")><i class="layui-icon layui-icon-praise" style="font-size: 24px; color: #1E9FFF;"></i>已点赞</a></li>`;
            //console.log(objLike.paperId);
          }

          const objCollection = arrPaperCollectionLogObjLst.find(
            (x) => x.paperId == objvPaperEx.paperId,
          );
          //const objSysVoteObjLst: Array<clsvSysVoteEN> = [];
          //objSysVoteObjLst = arrvSysVoteObjLst.filter(x => x.updUser == "2020/02/18");

          //if (objCollection == null) {
          //    strhtml += '<li class="btn-collect"><a class="icon-collect" href="javascript:void(0)" onclick=btnAddCollection_Click("' + objPaperEx.paperId + '")><i></i><b>收藏</b></a></li>';
          //    //console.log("null!");
          //} else {
          //    strhtml += '<li class="btn-collect"><a class="icon-collect_" href="javascript:void(0)" onclick=btnAddCollection_Click("' + objPaperEx.paperId + '")><i></i><b>已收藏</b></a></li>';
          //    //console.log(objCollection.paperId);
          //}
          if (objCollection == null) {
            strhtml += `<li><a href="javascript:void(0)" onclick=btnAddCollection_Click("${objvPaperEx.paperId}")><i class="layui-icon layui-icon-rate" style="font-size: 22px; "></i><b>收藏</b></a></li>`;
            //console.log("null!");
          } else {
            strhtml += `<li><a href="javascript:void(0)" onclick=btnAddCollection_Click("${objvPaperEx.paperId}")><i class="layui-icon layui-icon-rate-solid" style="font-size: 22px; color: #1E9FFF;"></i><b>已收藏</b></a></li>`;
            //console.log(objCollection.paperId);
          }

          if (objCount.attachmentCount > 0) {
            strhtml += `<li>${objCount.downloadCount}<a id="btnDownLoadFile"  href="javascript:void(0)" onclick=btnDownLoadFile_Click("${objvPaperEx.paperId}")> <i class="layui-icon layui-icon-download-circle" style="font-size: 24px; "></i><b>点击下载</b></a></li>`;
          } else {
            strhtml +=
              '<li><a id="btnDownLoadFile" href="javascript:void(0)" title="暂无下载文件"><i class="layui-icon layui-icon-download-circle" style="font-size: 24px; color: #1E9FFF;"></i><b>无下载文件</b></a></li>';
          }
        }

        strhtml += '</ul></div>';

        strhtml += '</dd></dl></div>';
      }
      if (strTypeId == '1') {
        if (GetInputValueInDivObj(divName, 'hidTabPaper') == '1') {
          $('#divDataLst').html(strhtml);
        } else {
          $('#divCurrEduClsDataLst').html(strhtml);
        }
      } else if (strTypeId == '2') {
        $('#divDataLstMajor').html(strhtml);
      } else if (strTypeId == '3') {
        $('#divDataLstDirection').html(strhtml);
      }

      //if (strTypeId == "1") {
      //    $("#divDataLst").append(strhtml);
      //} else if (strTypeId == "2") {
      //    $('#divDataLstMajor').append(strhtml);
      //} else if (strTypeId == "3") {
      //    $('#divDataLstDirection').append(strhtml);
      //}
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:在数据 列表中跳转到某一页
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
   <param name = "intPageIndex">页序号</param>
 */
  public async IndexPage(intPageIndex: number) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName4Pager = 'divPager';
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);

    await this.BindGv_Paper000(this.thisDivList);

    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(objLayOut, this, divName4Pager);
  }

  /* 函数功能:在数据 列表中跳转到某一页
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
   <param name = "intPageIndex">页序号</param>
 */
  public IndexPageOne(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    //this.BindGv_vXzMajorDirection();
  }

  /*
   * 修改用户Id
   */
  public set updUser(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidUserId', value);
  }
  /*
   * 修改用户Id
   */
  public get updUser(): string {
    return userStore.getUserId;
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvXzMajorDirectionBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvXzMajorDirectionBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvXzMajorDirectionBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvXzMajorDirectionBy');
  }

  /*
   * 用户
   */
  //public get readUser_q(): string {
  //    return $("#txtReadUser_q").val();
  //}
  public get User_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }

  public get PaperSort(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlPaperSort');
  }

  //  /*
  // * 专业流水号
  //*/
  //  public set idXzMajor_q(value: string) {
  //      $("#ddlIdXzMajor_q").val(value);
  //  }
  //  /*
  //  * 专业流水号
  // */
  //  public get idXzMajor_q(): string {
  //      return $("#ddlIdXzMajor_q").val();
  //  }

  /*
   * 专业方向号
   */
  // public set MajorDirectionId_q(value: string) {
  //     $("#ddlMajorDirectionId_q").val(value);
  // }
  // /*
  // * 专业方向号
  //*/
  // public get MajorDirectionId_q(): string {
  //     return $("#ddlMajorDirectionId_q").val();
  // }

  //添加点赞

  //添加下载量
  public async btnAddDownload_Click(strPaperId: string) {
    const strThisFuncName = this.btnAddDownload_Click.name;
    //this.DivName = "divAddNewRecordSave";
    const objPaperDownloadLogEN: clsPaperDownloadLogEN = new clsPaperDownloadLogEN();

    //this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);

    objPaperDownloadLogEN.SetPaperId(strPaperId);
    objPaperDownloadLogEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objPaperDownloadLogEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    // const strWhereCond = ` 1 =1 and updUser='${objPaperDownloadLogEN.updUser}' and paperId='${strPaperId}'`;
    try {
      const responseText2 = await PaperDownloadLog_AddNewRecordAsync(objPaperDownloadLogEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` paperId='${strPaperId}'`;
        const intDownloadCount = await PaperDownloadLog_GetRecCountByCondAsync(strWhereCond2);
        const objPaperEN: clsPaperEN = new clsPaperEN();
        objPaperEN.SetPaperId(strPaperId);
        objPaperEN.SetDownloadCount(intDownloadCount);

        objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }
        const returnBool = await Paper_UpdateRecordAsync(objPaperEN);

        if (returnBool == true) {
          //await this.BindGv_Paper();
          this.BindGv_Paper000(this.thisDivList);
        } else {
          const strInfo = `添加下载量不成功!`;
          alert(strInfo);
          console.log('添加下载量不成功');
        }
      } else {
        const strInfo = `添加下载量不成功!`;

        //显示信息框
        alert(strInfo);
        //this.BindGv_vPaperSubViewpoint();
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加下载量不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  //下载文件
  public btnDownLoadFile_Click(strPaperId: string) {
    //下载函数
    this.GetPaperAttachmentRecord(strPaperId);
    //添加下载记录
    this.btnAddDownload_Click(strPaperId);
  }

  //下载函数
  public async GetPaperAttachmentRecord(strPaperId: string) {
    const strPapeId = strPaperId;
    //this.keyId = strPaperRWId;
    const strWhereCond = ` ${clsPaperAttachmentEN.con_PaperId} = '${strPapeId}'`;
    let arrPaperAttachmentObjLst: Array<clsPaperAttachmentEN> = [];
    try {
      arrPaperAttachmentObjLst = await PaperAttachment_GetObjLstAsync(strWhereCond);
      for (let i = 0; i < arrPaperAttachmentObjLst.length; i++) {
        const strfilepath = GetAddressAndPort() + arrPaperAttachmentObjLst[i].filePath;
        doDownLoad(strfilepath, arrPaperAttachmentObjLst[i].paperAttachmentName);
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
   * 论文类型查询
   */
  public set PaperTypeId_q(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlPaperTypeId_q', value);
  }
  /*
   * 论文类型查询
   */
  public get PaperTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlPaperTypeId_q');
  }

  //添加收藏
  public async btnAddAttention_Click(objPage: Paper_ListEx, strPaperId: string) {
    const strThisFuncName = this.btnAddAttention_Click.name;
    try {
      if (strPaperId == '') {
        const strMsg = `关注的论文不能为空！`;
        console.error(strMsg);
        alert(strMsg);
        return '';
      }
      const objPageEdit = new gs_PaperAttention_EditEx('gs_PaperAttention_EditEx', objPage);
      const returnBool = await objPageEdit.btnAttention_Click(strPaperId);
      let objPage_Sub;
      let strMsg = '';
      if (returnBool == true) {
        clsPaperExWApi.btn_Click = Paper_ListEx.btn_Click;
        switch (Paper_ListEx.CurrTabName) {
          case 'AllPaper':
            objPage_Sub = new Paper_ListEx_AllPaper(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          case 'CurrEduCls':
            objPage_Sub = new Paper_ListEx_CurrEduCls(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          case 'Major':
            objPage_Sub = new Paper_ListEx_Major(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          case 'Direction':
            objPage_Sub = new Paper_ListEx_Direction(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          default:
            strMsg = `当前Tab:${Paper_ListEx.CurrTabName}在函数(${strThisFuncName})中没有被处理！`;
            alert(strMsg);

            break;
        }
      } else {
        const strInfo = `收藏不成功!`;

        //显示信息框
        alert(strInfo);
        //this.BindGv_vPaperSubViewpoint();
      }
      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `关注不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  public async btnAddCollection_Click(strPaperId: string) {
    const strThisFuncName = this.btnAddAttention_Click.name;
    try {
      const returnBool = await PaperCollectionLogEx_btnAddCollection_Click(
        strPaperId,
        userStore.getUserId,
      );
      let objPage_Sub;
      let strMsg = '';
      if (returnBool == true) {
        clsPaperExWApi.btn_Click = Paper_ListEx.btn_Click;
        switch (Paper_ListEx.CurrTabName) {
          case 'AllPaper':
            objPage_Sub = new Paper_ListEx_AllPaper(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          case 'CurrEduCls':
            objPage_Sub = new Paper_ListEx_CurrEduCls(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          case 'Major':
            objPage_Sub = new Paper_ListEx_Major(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          case 'Direction':
            objPage_Sub = new Paper_ListEx_Direction(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          default:
            strMsg = `当前Tab:${Paper_ListEx.CurrTabName}在函数(${strThisFuncName})中没有被处理！`;
            alert(strMsg);

            break;
        }
      } else {
        const strInfo = `收藏不成功!`;

        //显示信息框
        alert(strInfo);
        //this.BindGv_vPaperSubViewpoint();
      }
      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `关注不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  public async btnAddVote_Click(strPaperId: string) {
    const strThisFuncName = this.btnAddAttention_Click.name;
    try {
      const objPaper = await Paper_GetObjByPaperIdAsync(strPaperId);
      if (objPaper == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      const returnBool = await SysVoteEx_btnAddVote_Click_PaperId(
        strPaperId,
        userStore.getUserId,
        objPaper.updUser,
      );
      let objPage_Sub;
      let strMsg = '';
      if (returnBool == true) {
        clsPaperExWApi.btn_Click = Paper_ListEx.btn_Click;
        switch (Paper_ListEx.CurrTabName) {
          case 'AllPaper':
            objPage_Sub = new Paper_ListEx_AllPaper(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          case 'CurrEduCls':
            objPage_Sub = new Paper_ListEx_CurrEduCls(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          case 'Major':
            objPage_Sub = new Paper_ListEx_Major(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          case 'Direction':
            objPage_Sub = new Paper_ListEx_Direction(this.divLayout);
            await objPage_Sub.PageLoad();
            break;
          default:
            strMsg = `当前Tab:${Paper_ListEx.CurrTabName}在函数(${strThisFuncName})中没有被处理！`;
            alert(strMsg);

            break;
        }
      } else {
        const strInfo = `收藏不成功!`;

        //显示信息框
        alert(strInfo);
        //this.BindGv_vPaperSubViewpoint();
      }
      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `关注不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }
  public async SetMajorDirectionName(stridXzMajor: string) {
    let arrObjLst_Sel = await XzMajorDirection_GetObjLstCache(stridXzMajor);
    if (arrObjLst_Sel == null) return;
    arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.idXzMajor == stridXzMajor);

    for (let i = 0; i < arrObjLst_Sel.length; i++) {
      if (i == 0) {
        let strMajorDirectionName;
        if (IsNullOrEmpty(clsPubLocalStorage.majorDirectionId) == true) {
          strMajorDirectionName = Format(
            "<span class='text-nowrap'><span class='font-weight-bold'>[{0}]</span>方向论文</span>",
            arrObjLst_Sel[i].majorDirectionName,
          );
          $('#aMajorDirectionName').html(strMajorDirectionName);
        } else {
          strMajorDirectionName = Format(
            "<span class='text-nowrap'><span class='font-weight-bold'>[{0}]</span>方向论文</span>",
            clsPubLocalStorage.majorDirectionName,
          );
          $('#aMajorDirectionName').html(strMajorDirectionName);
        }
      }
    }
  }
  /** 函数功能:设置事件函数
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetEventFunc)
   **/
  public async SetEventFunc() {
    const strThisFuncName = this.SetEventFunc.name;

    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      //没有定义相关事件
      const ddlMajorDirectionId_SetFldValue: HTMLSelectElement = GetSelectObjInDivObj(
        objLayOut,
        'ddlMajorDirectionId_SetFldValue',
      );
      ddlMajorDirectionId_SetFldValue.addEventListener('change', (e: any) => {
        console.log(e);
        this.ddlMajorDirectionId_SetFldValue_SelectedIndexChanged();
      });
    } catch (e: any) {
      const strMsg = Format(
        '设置事件函数不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:系统生成的Change事件函数
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
*/
  public async ddlMajorDirectionId_SetFldValue_SelectedIndexChanged() {
    const strThisFuncName = this.ddlMajorDirectionId_SetFldValue_SelectedIndexChanged.name;
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return;
    const strMajorDirectionId = GetSelectValueInDivObj(
      objDivQuery,
      'ddlMajorDirectionId_SetFldValue',
    );
    if (IsNullOrEmpty(strMajorDirectionId) == true) return;
    clsPubLocalStorage.majorDirectionId = strMajorDirectionId;
    const objXzMajorDirection = await XzMajorDirection_GetObjByMajorDirectionIdCache(
      strMajorDirectionId,
      userStore.getIdXzMajor,
    );
    if (objXzMajorDirection == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    clsPubLocalStorage.majorDirectionName = objXzMajorDirection.majorDirectionName;
    const strMajorDirectionName = Format(
      "<span class='text-nowrap'><span class='font-weight-bold'>[{0}]</span>方向论文</span>",
      objXzMajorDirection.majorDirectionName,
    );
    $('#aMajorDirectionName').html(strMajorDirectionName);
    clsPaperExWApi.btn_Click = Paper_ListEx.btn_Click;
    const objPage = new Paper_ListEx_Direction(this.divLayout);
    await objPage.PageLoad();
  }
  /**
   * 获取当前组件的divList的层对象
   **/
  public get thisDivList(): HTMLDivElement {
    const divLayOut = this.getDivName(enumDivType.LayOut_01);
    const divList = GetDivObjInDivObj(divLayOut, 'divList_AllPaper');
    return divList;
  }
}
