import $ from 'jquery';
import { RTPaperRela_EditEx } from './RTPaperRela_EditEx';
import { vRTPaperRelaEx_CopyToEx } from '@/ts/L3ForWApiEx/GradEduTopic/clsvRTPaperRelaExWApi';
import { RTPaperRelaCRUD } from '@/viewsBase/GradEduTopic/RTPaperRelaCRUD';
import { clsgs_OriginalPaperLogEN } from '@/ts/L0Entity/GradEduPaper/clsgs_OriginalPaperLogEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';
import { clsRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTPaperRelaEN';
import { clsvRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN';
import { clsvRTPaperRelaENEx } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaENEx';
import { clsqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsqa_QuestionsEN';
import { clsvqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsvqa_AnswerEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { gs_OriginalPaperLog_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsgs_OriginalPaperLogWApi';
import {
  RTPaperRela_DelRecordAsync,
  RTPaperRela_GetObjBymIdAsync,
  RTPaperRela_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTPaperRelaWApi';
import {
  vRTPaperRela_GetObjLstByPagerAsync,
  vRTPaperRela_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTPaperRelaWApi';
import { qa_Questions_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_QuestionsWApi';
import { vqa_Answer_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsvqa_AnswerWApi';
import {
  LiteratureType_GetObjLstAsync,
  LiteratureType_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetDivHtmlInDivObj,
  GetDivObjInDivObj,
  GetButtonObjLstInDivObjN,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst, BindTabV2Where, BindTab_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx'; //参与答疑
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { vUsersSimEx_func } from '@/ts/L3ForWApiExShare/UserManage_GP/clsvUsersSimExWApi';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import router from '@/router';
import { paperStore } from '@/store/modules/paper';
import { PaperLstSel } from '@/views/GradEduTopic/PaperLstSel';
import { P_Paper_EditV2Ex } from '@/views/GradEduPublicPage/P_Paper_EditV2Ex';

// declare function ParticipateQA_Click(strKey: string): void;
declare let window: any;
/* WApiRTPaperRela_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class RTPaperRelaListInEx extends RTPaperRelaCRUD implements IShowList {
  // public static GetPropValue: (strPropName: string) => string;
  // public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public divName4Pager_Paper = 'divPager';
  public static paperTypeId = '';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvRTPaperRelaBy: string = "mId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  //论文列表
  public mstrListDivPaper = 'divPaperDataLst';

  //主题自研论文关系
  public mstrListDivRtOriginalPaperRela = 'divDataLst4RtOriginalPaperRela';

  //主题引用论文关系
  //public mstrListDivRtPaperRela: string = "divRtPaperRelaDataLst";
  public mstrListDivRtCitedPaperRela = 'divRtCitedPaperRelaDataLst';
  //public divName4Pager_PaperLst: string = "divPager_PaperLst";
  //public bolIsInitShow_PaperLst: boolean = false;
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
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    console.log(strType, strPara);
    this.BindGv_vRTPaperRela(objLayOut, '01');
  }
  async BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    let objPageEdit;
    switch (strType) {
      case clsRTPaperRelaEN._CurrTabName:
      case clsPaperEN._CurrTabName:
        liPaperClick('01', this.divLayout);
        break;
      case 'unknown':
        if (IsNullOrEmpty(strPara) == false) {
          const objPager_CRUD = new RTPaperRelaListInEx(this.divLayout);
          const objRTPaperRela_Edit = new RTPaperRela_EditEx('', objPager_CRUD);
          const strPaperId = strPara;
          const bolIsSuccess = await objRTPaperRela_Edit.AddNewRecordSavePaperRela(strPaperId);
          if (bolIsSuccess == true) {
            const objPage = new RTPaperRelaListInEx(this.divLayout);
            objPage.divName4Pager = 'divPager4Paper';
            objPage.liPaperClick(this.divLayout, false);

            //const objPage_RTPaperRela = new Pub_RTPaperRelaList();
            //objPage_RTPaperRela.divName4Pager = "divPager4Paper";
            //objPage_RTPaperRela.PageLoad();
          }
          //await objPage_RTPaperRela.BindGv_vRTPaperRela();
        }
        break;
      case 'vRTPaperRela':
        //alert('该类没有绑定该函数：[this.BindGv_vRTPaperRela_Cache]！');
        //this.BindGv_vRTPaperRelaCache();;
        objPageEdit = new RTPaperRela_EditEx('', this);
        objPageEdit.btnPaperRecordInTab_Click(strType);
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
    let objPage: RTPaperRelaListInEx;

    if (RTPaperRelaCRUD.objPageCRUD == null) {
      RTPaperRelaCRUD.objPageCRUD = new RTPaperRelaListInEx(divLayout);
      objPage = <RTPaperRelaListInEx>RTPaperRelaCRUD.objPageCRUD;
    } else {
      objPage = <RTPaperRelaListInEx>RTPaperRelaCRUD.objPageCRUD;
    }
    const objPageEdit_PaperSel = new PaperLstSel(objPage, divLayout);
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    // strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);

    switch (strCommandName) {
      case 'AddNewPaperRela': //删除研究主题AddgsReflectLog
        objPage.btnAddNewPaperRela_Click(objPage);
        break;
      case 'AddRelaPaper': //查询记录
        objPageEdit_PaperSel.btnAddPaperRela_Click();
        break;
      case 'ParticipateQA':
        objPage.btnParticipateQA_Click(strKeyId);
        break;
      case 'DelPaperRelaRecordInTab':
        objPage.btnDelPaperRelaRecordInTab_Click(strKeyId);
        break;
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
        AccessBtnClickDefault(strCommandName, 'RTPaperRelaCRUDExEx.btn_Click');

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
      this.divName4Pager = 'divPager_TopicPaperLst';
      if (userStore.getUserId != '') {
        //1、为下拉框设置数据源,绑定列表数据
        //const ddl_TopicId = await this.BindDdl_TopicId("ddlTopicId");
        //const ddl_PaperId = await this.BindDdl_PaperId("ddlPaperId");
        RTPaperRelaCRUD.sortvRTPaperRelaBy = 'updDate Desc';
        const strWhereCond = await this.CombinevRTPaperRelaCondition();
        await vRTPaperRela_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {
          this.recCount = jsonData;
        });
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager_Paper);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vRTPaperRela(objLayOut, '01');

        $('#hidUserId').val(userStore.getUserId);
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

  //相关论文
  public async liPaperClick(objLayOut: HTMLDivElement, bolIsSelfWrite: boolean) {
    if (objLayOut == null) return;
    try {
      //用户下拉框绑定

      if (bolIsSelfWrite == true) {
        this.divName4Pager_Paper = 'divPager'; //自写论文
      } else {
        this.divName4Pager_Paper = 'divPager'; //引用论文
      }
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(objLayOut, this.divName4Pager_Paper);
        this.bolIsInitShow = true; //
      }
      //主题论文
      RTPaperRelaCRUD.sortvRTPaperRelaBy = 'updDate Desc';

      await this.BindGv_vRTPaperRela(objLayOut, bolIsSelfWrite ? '02' : '01');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
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

  /* 显示vRTPaperRela对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
 <param name = "divContainer">显示容器</param>
 <param name = "arrRTPaperRelaObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_vRTPaperRela(
    divContainer: HTMLDivElement,
    arrvRTPaperRelaObjLst: Array<clsvRTPaperRelaEN>,
  ) {
    const strThisFuncName = this.BindTab_vRTPaperRela.name;
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
        fldName: 'topicName',
        colHeader: '栏目主题',
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
        fldName: 'topicProposePeople',
        colHeader: '主题提出人',
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
        fldName: 'author',
        colHeader: '作者',
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
        fldName: 'periodical',
        colHeader: '期刊',
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
        fldName: 'userName',
        colHeader: '用户名',
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
        fldName: 'userName',
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
        fldName: '',
        colHeader: '详情',
        text: '详情',
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
          btn1.setAttribute('onclick', `btnDetailInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
      //{
      //    fldName: "",
      //    colHeader: "修改",
      //    text: "修改",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btnUpdateRecordInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},
      //{
      //    fldName: "",
      //    colHeader: "删除",
      //    text: "删除",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
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
    BindTab_V(divDataLst, arrvRTPaperRelaObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager_Paper);
  }

  ////////////////////////////////////////////////////////////////////////////////////主题论文关系
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevRTPaperRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTPaperRelaEN.con_TopicId} = '${strTopicId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTPaperRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的记录对象的列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   */
  public async BindGv_vRTPaperRela(objLayOut: HTMLDivElement, strPaperTypeId: string) {
    if (objLayOut == null) return;

    let strWhereCond = await this.CombinevRTPaperRelaCondition();

    if (strPaperTypeId == '01') {
      strWhereCond += ` and paperTypeId='${strPaperTypeId}'`;
    } else {
      strWhereCond += ` and paperTypeId='${strPaperTypeId}'`;
    }

    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvRTPaperRelaObjLst: Array<clsvRTPaperRelaEN> = [];
    let arrvRTPaperRelaENExObjLst: Array<clsvRTPaperRelaENEx> = [];
    try {
      this.recCount = await vRTPaperRela_GetRecCountByCondAsync(strWhereCond);

      //如果记录数小于10,
      if (this.recCount < 10) {
        $('#divPager4Paper').attr('style', 'display:none;');
      }

      const intPageCount = this.objPager.GetPageCount(this.recCount, this.pageSize);
      if (intCurrPageIndex == 0) {
        if (intPageCount > 1) intCurrPageIndex = intPageCount;
        else intCurrPageIndex = 1;
        this.SetCurrPageIndex(intCurrPageIndex);
      } else if (intCurrPageIndex > intPageCount) {
        intCurrPageIndex = intPageCount;
        this.SetCurrPageIndex(intCurrPageIndex);
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: RTPaperRelaCRUD.sortvRTPaperRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvRTPaperRelaObjLst = await vRTPaperRela_GetObjLstByPagerAsync(objPagerPara);

      arrvRTPaperRelaENExObjLst = arrvRTPaperRelaObjLst.map(this.CopyToEx);
      for (const objInFor of arrvRTPaperRelaENExObjLst) {
        await this.FuncMap(objInFor);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    try {
      if (strPaperTypeId == '01') {
        //this.BindTab_vRTPaperRela(strListDiv, arrvRTPaperRelaENExObjLst);
        this.BindTab_vRTPaperRelaList1(objLayOut, arrvRTPaperRelaENExObjLst);
      } else {
        ///获取论文步骤状态
        const strWhere = '1=1';
        let arrvgs_OriginalPaperLogLst: Array<clsgs_OriginalPaperLogEN> = [];

        await gs_OriginalPaperLog_GetObjLstAsync(strWhere).then((jsonData) => {
          arrvgs_OriginalPaperLogLst = <Array<clsgs_OriginalPaperLogEN>>jsonData;
        });
        //获取用户缓存；

        const strWhere_User = '1=1';
        const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

        this.BindTab_vRTPaperRelaList(
          objLayOut,
          arrvRTPaperRelaObjLst,
          arrvgs_OriginalPaperLogLst,
          arrUsers,
        );
      }
      console.log('完成BindGv_vRTPaperRela(in RTPaperRelaListInEx)!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //绑定主题论文关系表
  public async BindTab_vRTPaperRelaList1(
    objLayOut: HTMLDivElement,
    arrvRTPaperRelaENExObjLst: Array<clsvRTPaperRelaENEx>,
  ) {
    if (objLayOut == null) return;
    try {
      const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      //strWhereCond1 = "idCurrEduCls='" + strIdCurrEduCls + "' and paperTypeId='" + strPaperTypeId + "'";
      const strWhereCond2 = `idCurrEduCls='${strIdCurrEduCls}'`;
      let arrRTPaperRelaObjLst0: Array<clsRTPaperRelaEN> = [];
      let arrRTPaperRelaObjLst: Array<clsRTPaperRelaEN> = [];
      await RTPaperRela_GetObjLstAsync(strWhereCond2).then((jsonData) => {
        arrRTPaperRelaObjLst0 = <Array<clsRTPaperRelaEN>>jsonData;
      });

      //strWhereCond = "idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
      let arrqa_QuestionsObjLst0: Array<clsqa_QuestionsEN> = [];
      let arrqa_QuestionsObjLst: Array<clsqa_QuestionsEN> = [];
      await qa_Questions_GetObjLstAsync(strWhereCond2).then((jsonData) => {
        arrqa_QuestionsObjLst0 = <Array<clsqa_QuestionsEN>>jsonData;
      });

      //strWhereCond = "idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
      let arrvqa_AnswerObjLst0: Array<clsvqa_AnswerEN> = [];
      let arrvqa_AnswerObjLst1: Array<clsvqa_AnswerEN> = [];
      let arrvqa_AnswerObjLst2: Array<clsvqa_AnswerEN> = [];
      //strIdCurrEduclsarrvqa_AnswerObjLst: Array<clsvqa_AnswerEN> = [];
      await vqa_Answer_GetObjLstAsync(strWhereCond2).then((jsonData) => {
        arrvqa_AnswerObjLst0 = <Array<clsvqa_AnswerEN>>jsonData;
      });

      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      //arrvqa_AnswerObjLst = arrvqa_AnswerObjLst0.filter(x => x.topicId == strTopicId);
      const strUserId = userStore.getUserId;

      //获取用户缓存数据

      let strhtml = '';
      for (let j = 0; j < arrvRTPaperRelaENExObjLst.length; j++) {
        const intNum: number = j + 1;

        const strmId = arrvRTPaperRelaENExObjLst[j].mId;
        const strPaperId = arrvRTPaperRelaENExObjLst[j].paperId;

        arrRTPaperRelaObjLst = arrRTPaperRelaObjLst0.filter((x) => x.paperId == strPaperId);
        arrqa_QuestionsObjLst = arrqa_QuestionsObjLst0.filter((x) => x.paperId == strPaperId);

        arrvqa_AnswerObjLst1 = arrvqa_AnswerObjLst0.filter((x) => x.paperId == strPaperId);
        arrvqa_AnswerObjLst2 = arrvqa_AnswerObjLst1.filter((x) => x.topicId == strTopicId);

        strhtml += '<tr>';
        strhtml += `<td>${intNum}</td>`;
        strhtml += `<td>${arrvRTPaperRelaENExObjLst[j].paperTitle}</td>`;
        strhtml += `<td>${arrvRTPaperRelaENExObjLst[j].author}</td>`;
        strhtml += `<td>${arrvRTPaperRelaENExObjLst[j].updDate}</td>`;

        strhtml += `<td>${arrvRTPaperRelaENExObjLst[j].userName}</td>`;
        //引用小组数
        //问题数
        //本小组回答数
        //共回答数
        strhtml += '<td>';
        strhtml += `<span id="QuoteNum" class="badge badge-pill badge-primary" title="引用数">${arrRTPaperRelaObjLst.length}</span>`;
        strhtml += `&nbsp;<span id="QNum" class="badge badge-pill badge-warning" title="问题数">${arrqa_QuestionsObjLst.length}</span>`;
        strhtml += `&nbsp;<span id="TopicANum" class="badge badge-pill badge-info" title="本主题回答数">${arrvqa_AnswerObjLst2.length}</span>`;
        strhtml += `&nbsp;<span id="AllANum" class="badge badge-pill badge-success" title="共回答数">${arrvqa_AnswerObjLst1.length}</span>`;
        strhtml += '</td>';

        strhtml += '<td>';
        //编辑
        //strhtml += '<button title="回答教师问题" class="layui-btn layui-btn layui-btn-xs" onclick=btnParticipateQA_Click("' + strmId + '")>${clsIcon.spanCircleQuestion}</button>';
        // onclick=ParticipateQA_Click("${strPaperId}")
        strhtml += `<button id="ParticipateQA" keyId="${strPaperId}" title="回答教师问题" class="layui-btn layui-btn layui-btn-xs" >${clsIcon.spanCircleQuestion}</button>`;
        //删除
        if (arrvRTPaperRelaENExObjLst[j].updUser == strUserId) {
          // onclick=btnDelPaperRelaRecordInTab_Click("${strmId}")
          strhtml += `<button id="btnDelPaperRelaRecordInTab" keyId="${strmId}" title="删除论文引用" class="btn-danger btn btn-sm" >${clsIcon.faTrash}</button>`;
        }
        strhtml += '</td>';

        strhtml += '</tr>';
      }
      $('#tbPaperRelaDataLst').html(strhtml);
      this.SetEventForButtonEvent();
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager_Paper);
    } catch (e: any) {
      const strMsg = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.(${clsStackTrace.GetCurrClassFunction()})`;
      alert(strMsg);
    }
  }
  public SetEventForButtonEvent() {
    {
      const arrBtnSysComment = GetButtonObjLstInDivObjN(
        this.divLayout,
        'btnDelPaperRelaRecordInTab',
      );
      for (const btnDelPaperRelaRecordInTab of arrBtnSysComment) {
        if (btnDelPaperRelaRecordInTab != null) {
          const strKeyId = btnDelPaperRelaRecordInTab.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          // const arr = strKeyId.split('|');
          // if (arr.length != 4) continue;
          // const objData = { keyId: arr[0], type: arr[1], user: arr[2], pubParentId: arr[3] };

          (function (strKeyId: any) {
            btnDelPaperRelaRecordInTab.onclick = function () {
              RTPaperRelaCRUD.vuebtn_Click('DelPaperRelaRecordInTab', strKeyId);
            };
          })(strKeyId);
        }
      }
    }
    {
      const arrBtnSysComment = GetButtonObjLstInDivObjN(this.divLayout, 'ParticipateQA');
      for (const ParticipateQA of arrBtnSysComment) {
        if (ParticipateQA != null) {
          const strKeyId = ParticipateQA.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          // const arr = strKeyId.split('|');
          // if (arr.length != 4) continue;
          // const objData = { keyId: arr[0], type: arr[1], user: arr[2], pubParentId: arr[3] };

          (function (strKeyId: any) {
            ParticipateQA.onclick = function () {
              RTPaperRelaCRUD.vuebtn_Click('ParticipateQA', strKeyId);
            };
          })(strKeyId);
        }
      }
    }
  }
  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objzx_ConceptS">源对象</param>
  public async FuncMap(objvRTPaperRela: clsvRTPaperRelaENEx) {
    try {
      const vUsersSim_UserId = objvRTPaperRela.updUser;
      const vUsersSim_UserName = await vUsersSimEx_func(
        clsvUsersSimEN.con_UserId,
        clsvUsersSimEN.con_UserName,
        vUsersSim_UserId,
      );
      objvRTPaperRela.userName = vUsersSim_UserName;
    } catch (e: any) {
      const strMsg = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.(${clsStackTrace.GetCurrClassFunction()})`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objzx_ConceptENS">源对象</param>
  /// <returns>目标对象=>clszx_ConceptEN:objzx_ConceptENT</returns>
  public CopyToEx(objzx_ConceptENS: clsvRTPaperRelaEN): clsvRTPaperRelaENEx {
    let objzx_ConceptENT = new clsvRTPaperRelaENEx();
    try {
      objzx_ConceptENT = vRTPaperRelaEx_CopyToEx(objzx_ConceptENS);
      return objzx_ConceptENT;
    } catch (e: any) {
      const strMsg: string = Format(
        '(errid:WiTsCs0011)Copy表对象数据出错,${e}.({0})',
        clsStackTrace.GetCurrClassFunction(),
      );
      alert(strMsg);
      return objzx_ConceptENT;
    }
  }

  public async btnParticipateQA_Click(strPaperId: string) {
    try {
      if (strPaperId == '') {
        alert(`请选择需要回答问题的论文！`);
        return '';
      }

      ParticipateQA_Click(strPaperId);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  public async BindTab_vRTPaperRelaList(
    objLayOut: HTMLDivElement,
    arrvRTPaperRelaObjLst: Array<clsvRTPaperRelaEN>,
    arrvgs_OriginalPaperLogLst: Array<clsgs_OriginalPaperLogEN>,
    arrUsers: Array<clsvUsersSimEN>,
  ) {
    if (objLayOut == null) return;
    const strUserId = userStore.getUserId;

    //论文流程日志
    let arrgs_OriginalLst: Array<clsgs_OriginalPaperLogEN> = [];
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;

    let strhtml = '';
    strhtml +=
      '<div class="info" id="infoPaper"><div class="title btn-2"><a href="javascript:void(0)" title="小组论文写作">小组论文写作</a></div><ul class="artlist">';
    let p = 0; //给内容加个序号
    for (let i = 0; i < arrvRTPaperRelaObjLst.length; i++) {
      p++;
      const strPaperId = arrvRTPaperRelaObjLst[i].paperId;
      //strhtml += p + "." + arrvRTPaperRelaObjLst[i].paperTitle + "&nbsp;&nbsp;所属主题：" + arrvRTPaperRelaObjLst[i].topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>";
      strhtml += `<li><span class="rowtit color2">${p}.[标题]：</span><span class="abstract-text">${
        arrvRTPaperRelaObjLst[i].paperTitle
      } <span class="ml-1 text-primary">作者：</span>${
        arrvRTPaperRelaObjLst[i].author ?? ''
      }</span>`;
      //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑人：</span><span class="abstract-text">' + arrvRTPaperRelaObjLst[i].userName + '</span>';
      //strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑时间：</span><span class="abstract-text">' + arrvRTPaperRelaObjLst[i].updDate + '</span></li>';
      //strhtml += "<span class=\"colorRed\" style=\"padding-left:50px;\" onclick=\"xadmin.open('pdf查看', '../GradEduEx/PdfDetail?paperId=" + arrvRTPaperRelaObjLst2[i].paperId + "')\">pdf查看</span></li>";
      //<a href=\"#\" onclick=\"xadmin.open('pdf查看', '../GradEduEx/PdfDetail?paperId=" + arrvRTPaperRelaObjLst[i].paperId + "')\">pdf查看</a>

      strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：';
      const strUserName = await vQxUsersSimStore.getUserName(arrvRTPaperRelaObjLst[i].updUser);
      if (strUserName != '') {
        strhtml += `&nbsp;&nbsp;&nbsp;引用人：${strUserName}`;
      }

      strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;引用时间：${arrvRTPaperRelaObjLst[i].updDate}`;

      if (arrvRTPaperRelaObjLst[i].versionCount != 0) {
        strhtml += `&nbsp;&nbsp;&nbsp;历史版本数：${arrvRTPaperRelaObjLst[i].versionCount}`;
      }

      let result = '';
      //strIdCurrEduclsresult = Math.max(...lists.map(x => x.id));  arrObjLst_Sel = arrObjLst_Sel.sort(x => x.GetFldValue(clsvUsersSimEN.con_UserName));
      //获取id比较得到论文步骤日志；
      arrgs_OriginalLst = arrvgs_OriginalPaperLogLst.filter((x) => x.paperId == strPaperId);
      arrgs_OriginalLst = arrgs_OriginalLst.sort((x) =>
        x.GetFldValue(clsgs_OriginalPaperLogEN.con_LogTypeId),
      );
      for (let j = 0; j < arrgs_OriginalLst.length; j++) {
        if (j + 1 == arrgs_OriginalLst.length) {
          result = arrgs_OriginalLst[j].logTypeId;
        }
      }

      if (strUserId == arrvRTPaperRelaObjLst[i].updUser) {
        // onclick="btnDelViewPointRelaRecordInTab_Click(${arrvRTPaperRelaObjLst[i].mId})"
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnDelViewPointRelaRecordInTab" keyId="${arrvRTPaperRelaObjLst[i].mId}" style="float:right;" title="移除引用" class="layui-btn-danger layui-btn layui-btn layui-btn-xs"  > <i class="layui-icon" >&#xe640;</i>移除</button>`;
      }
      //日志8个流程
      if (arrgs_OriginalLst.length == 8) {
        //等于7 说明步骤流程已经完成，那么可以提交
        strhtml += `&nbsp;&nbsp;<button  style="float:right;" title="数据提交" class="layui-btn layui-btn layui-btn-xs" onclick=btnIsSubmitPaper_Click("${arrvRTPaperRelaObjLst[i].paperId}")> ${clsIcon.faCommentDots}数据提交</button>`;
        strhtml += `&nbsp;&nbsp;<button  style="float:right;" title="是否公开" class="layui-btn layui-btn layui-btn-xs" onclick=btnIsPublicPaper_Click("${arrvRTPaperRelaObjLst[i].paperId}")> ${clsIcon.faCommentDots}数据公开</button>`;
      }
      if (
        arrvRTPaperRelaObjLst[i].versionCount > 0 &&
        arrvRTPaperRelaObjLst[i].versionCount != null
      ) {
        strhtml += `&nbsp;&nbsp;<button style="float:right;" class="layui-btn layui-btn-warm layui-btn-xs" onclick="xadmin.open('小组论文历史版本', '../GradEduEx/HistoricalVersion?Key=${arrvRTPaperRelaObjLst[i].paperId}&Type=10')"> ${clsIcon.faCommentDots}历史版本</button >`;
      }
      ////添加论文节
      //strhtml += "&nbsp;&nbsp;<button style=\"float:right;\" class=\"layui-btn layui-btn-warm layui-btn-xs\" onclick=\"xadmin.open('添加论文节', '../RT_Params/SectionCRUD?paperId=" + arrvRTPaperRelaObjLst[i].paperId + "')\"> <i class=\"layui-icon\" >&#xe642;</i>添加论文节</button >";

      //论文写作
      strhtml += `&nbsp;&nbsp;<button style="float:right;" class="layui-btn layui-btn-warm layui-btn-xs" onclick="xadmin.open('论文写作', '../GradEduPaper/gs_PaperParagraph?paperId=${arrvRTPaperRelaObjLst[i].paperId}&topicId=${clsPrivateSessionStorage.topicIdInTree}')",'', '', true> ${clsIcon.faCommentDots}论文写作</button >`;
      //测试静态树
      //   strhtml += "&nbsp;&nbsp;<button style=\"float:right;\" class=\"layui-btn layui-btn-warm layui-btn-xs\" onclick=\"xadmin.open('测试静态树', '../GradEduPaper/TestTree?paperId=" + arrvRTPaperRelaObjLst[i].paperId + "')\"> <i class=\"layui-icon\" >&#xe642;</i>测试静态树</button >";
      strhtml += '</li>';
      strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[流程步骤]：';

      //判断数据是否提交，如果提交，那么所有的按钮都置灰；
      if (arrvRTPaperRelaObjLst[i].isSubmit == true) {
        strhtml += '<div class="layui-btn-group">';
        //论文思路
        strhtml += `&nbsp;&nbsp;&nbsp<button disabled="disabled" id="btnAddFirst${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文思路', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=02&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文思路</button >`;
        strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnAddSubviewpointPaper${p}" title="添加论文观点" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=btnAddNewPaperViewpointRela_Click("${arrvRTPaperRelaObjLst[i].paperId}") > ${clsIcon.faCommentDots}添加论文观点</button>`;
        //论文流程步骤

        strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnAddFirstPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文初稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=04&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文初稿</button >`;
        strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnGroupDiscuss${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('小组讨论', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=01&PaperLogTypeId=05&pubParentId=${strTopicId}')"> ${clsIcon.faCommentDots}小组讨论</button >`;
        strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnUpdatePaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文修改稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=06&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文修改稿</button >`;
        strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnCompanionProposal${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('同伴建议', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=02&PaperLogTypeId=07&pubParentId=${strTopicId}')"> ${clsIcon.faCommentDots}同伴建议</button >`;
        strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnEndPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文终稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=08&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文终稿</button >`;
      } else {
        const logTypeId = result.toString();
        switch (logTypeId) {
          case '01':
            strhtml += '<div class="layui-btn-group">';
            //论文思路
            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddFirst${p}" class="layui-btn layui-btn layui-btn-xs" onclick=" xadmin.open('论文思路', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=02&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文思路</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnAddSubviewpointPaper${p}" title="添加论文观点" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=btnAddNewPaperViewpointRela_Click("${arrvRTPaperRelaObjLst[i].paperId}") > ${clsIcon.faCommentDots}添加论文观点</button>`;
            //论文流程步骤
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnAddFirstPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文初稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=04&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文初稿</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnGroupDiscuss${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('小组讨论', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=01&PaperLogTypeId=05&pubParentId=${strTopicId}')"> ${clsIcon.faCommentDots}小组讨论</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnUpdatePaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文修改稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=06&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文修改稿</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnCompanionProposal${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('同伴建议', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=02&PaperLogTypeId=07&pubParentId=${strTopicId}')"> ${clsIcon.faCommentDots}同伴建议</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnEndPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文终稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=08&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文终稿</button >`;

            break;
          case '02':
            strhtml += '<div class="layui-btn-group">';
            //论文思路
            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddFirst${p}" class="layui-btn layui-btn layui-btn-xs" onclick=" xadmin.open('论文思路', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=02&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文思路</button >`;
            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddSubviewpointPaper${p}" title="添加论文观点" class="layui-btn-xs layui-btn layui-btn-normal" onclick=btnAddNewPaperViewpointRela_Click("${arrvRTPaperRelaObjLst[i].paperId}") > ${clsIcon.faCommentDots}添加论文观点</button>`;
            //论文流程步骤
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnAddFirstPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文初稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=04&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文初稿</button >`;
            strhtml += `&nbsp;&nbsp;<button  disabled="disabled" id="btnGroupDiscuss${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('小组讨论', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=01&PaperLogTypeId=05&pubParentId=${strTopicId}')"> ${clsIcon.faCommentDots}小组讨论</button >`;
            strhtml += `&nbsp;&nbsp;<button  disabled="disabled" id="btnUpdatePaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文修改稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=06&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文修改稿</button >`;
            strhtml += `&nbsp;&nbsp;<button  disabled="disabled" id="btnCompanionProposal${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('同伴建议', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=02&PaperLogTypeId=07&pubParentId=${strTopicId}')"> ${clsIcon.faCommentDots}同伴建议</button >`;
            strhtml += `&nbsp;&nbsp;<button  disabled="disabled" id="btnEndPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文终稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=08&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文终稿</button >`;
            strhtml += '</div>';

            break;
          case '03':
            strhtml += '<div class="layui-btn-group">';
            //论文思路
            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddFirst${p}" class="layui-btn layui-btn layui-btn-xs" onclick=" xadmin.open('论文思路', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=02&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文思路</button >`;
            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddSubviewpointPaper${p}" title="添加论文观点" class="layui-btn-xs layui-btn layui-btn-normal" onclick=btnAddNewPaperViewpointRela_Click("${arrvRTPaperRelaObjLst[i].paperId}") > ${clsIcon.faCommentDots}添加论文观点</button>`;
            //论文流程步骤
            strhtml += `&nbsp;&nbsp;<button id="btnAddFirstPaper${p}" class="layui-btn layui-btn layui-btn-xs" onclick=" xadmin.open('论文初稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=04&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文初稿</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnGroupDiscuss${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('小组讨论', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=01&PaperLogTypeId=05&pubParentId=${strTopicId}')"> ${clsIcon.faCommentDots}小组讨论</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnUpdatePaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文修改稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=06&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文修改稿</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnCompanionProposal${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('同伴建议', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=02&PaperLogTypeId=07&pubParentId=${strTopicId}')"> ${clsIcon.faCommentDots}同伴建议</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnEndPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文终稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=08&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文终稿</button >`;

            break;
          case '04':
            strhtml += '<div class="layui-btn-group">';
            //论文思路
            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddFirst${p}" class="layui-btn layui-btn layui-btn-xs" onclick=" xadmin.open('论文思路', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=02&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文思路</button >`;

            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddSubviewpointPaper${p}" title="添加论文观点" class="layui-btn-xs layui-btn layui-btn-normal" onclick=btnAddNewPaperViewpointRela_Click("${arrvRTPaperRelaObjLst[i].paperId}") > ${clsIcon.faCommentDots}添加论文观点</button>`;
            //论文流程步骤
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnAddFirstPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文初稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=04&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文初稿</button >`;
            strhtml += `&nbsp;&nbsp;<button id="btnGroupDiscuss${p}" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('小组讨论', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=01&PaperLogTypeId=05&pubParentId=${strTopicId}','','',true)"> ${clsIcon.faCommentDots}小组讨论</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnUpdatePaper${p}" class="layui-btn-disabled layui-btn layui-btn-xs" onclick=" xadmin.open('论文修改稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=06&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文修改稿</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnCompanionProposal${p}" class="layui-btn-disabled layui-btn layui-btn-xs" onclick=" xadmin.open('同伴建议', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=02&PaperLogTypeId=07&pubParentId=${strTopicId}')"> ${clsIcon.faCommentDots}同伴建议</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnEndPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文终稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=08&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文终稿</button >`;

            break;
          case '05':
            strhtml += '<div class="layui-btn-group">';
            //论文思路
            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddFirst${p}" class="layui-btn layui-btn layui-btn-xs" onclick=" xadmin.open('论文思路', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=02&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文思路</button >`;

            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddSubviewpointPaper${p}" title="添加论文观点" class="layui-btn-xs layui-btn layui-btn-normal" onclick=btnAddNewPaperViewpointRela_Click("${arrvRTPaperRelaObjLst[i].paperId}") > ${clsIcon.faCommentDots}添加论文观点</button>`;
            //论文流程步骤
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnAddFirstPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文初稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=04&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文初稿</button >`;
            strhtml += `&nbsp;&nbsp;<button id="btnGroupDiscuss${p}" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('小组讨论', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=01&PaperLogTypeId=05&pubParentId=${strTopicId}','','',true)"> ${clsIcon.faCommentDots}小组讨论</button >`;
            strhtml += `&nbsp;&nbsp;<button id="btnUpdatePaper${p}" class="layui-btn-xs layui-btn layui-btn" onclick=" xadmin.open('论文修改稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=06&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文修改稿</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled"  id="btnCompanionProposal${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('同伴建议', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=02&PaperLogTypeId=07&pubParentId=${strTopicId}')"> ${clsIcon.faCommentDots}同伴建议</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnEndPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文终稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=08&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文终稿</button >`;

            break;
          case '06':
            strhtml += '<div class="layui-btn-group">';
            //论文思路
            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddFirst${p}" class="layui-btn layui-btn layui-btn-xs" onclick=" xadmin.open('论文思路', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=02&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文思路</button >`;

            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddSubviewpointPaper${p}" title="添加论文观点" class="layui-btn-xs layui-btn layui-btn-normal" onclick=btnAddNewPaperViewpointRela_Click("${arrvRTPaperRelaObjLst[i].paperId}") > ${clsIcon.faCommentDots}添加论文观点</button>`;
            //论文流程步骤
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnAddFirstPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文初稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=04&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文初稿</button >`;
            strhtml += `&nbsp;&nbsp;<button id="btnGroupDiscuss${p}" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('小组讨论', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=01&PaperLogTypeId=05&pubParentId=${strTopicId}','','',true)"> ${clsIcon.faCommentDots}小组讨论</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnUpdatePaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文修改稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=06&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文修改稿</button >`;
            strhtml += `&nbsp;&nbsp;<button id="btnCompanionProposal${p}" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('同伴建议', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=02&PaperLogTypeId=07&pubParentId=${strTopicId}','','',true)"> ${clsIcon.faCommentDots}同伴建议</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnEndPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文终稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=08&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文终稿</button >`;

            break;
          case '07':
            strhtml += '<div class="layui-btn-group">';
            //论文思路
            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddFirst${p}" class="layui-btn layui-btn layui-btn-xs" onclick=" xadmin.open('论文思路', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=02&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文思路</button >`;

            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddSubviewpointPaper${p}" title="添加论文观点" class="layui-btn-xs layui-btn layui-btn-normal" onclick=btnAddNewPaperViewpointRela_Click("${arrvRTPaperRelaObjLst[i].paperId}") > ${clsIcon.faCommentDots}添加论文观点</button>`;
            //论文流程步骤
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnAddFirstPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文初稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=04&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文初稿</button >`;
            strhtml += `&nbsp;&nbsp;<button id="btnGroupDiscuss${p}" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('小组讨论', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=01&PaperLogTypeId=05&pubParentId=${strTopicId}','','',true)"> ${clsIcon.faCommentDots}小组讨论</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnUpdatePaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文修改稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=06&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文修改稿</button >`;
            strhtml += `&nbsp;&nbsp;<button id="btnCompanionProposal${p}" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('同伴建议', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=02&PaperLogTypeId=07&pubParentId=${strTopicId}','','',true)"> ${clsIcon.faCommentDots}同伴建议</button >`;
            strhtml += `&nbsp;&nbsp;<button id="btnEndPaper${p}" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('论文终稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=08&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文终稿</button >`;

            break;
          case '08':
            strhtml += '<div class="layui-btn-group">';
            //论文思路
            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddFirst${p}" class="layui-btn layui-btn layui-btn-xs" onclick=" xadmin.open('论文思路', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=02&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文思路</button >`;

            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddSubviewpointPaper${p}" title="添加论文观点" class="layui-btn-xs layui-btn layui-btn-normal" onclick=btnAddNewPaperViewpointRela_Click("${arrvRTPaperRelaObjLst[i].paperId}") > ${clsIcon.faCommentDots}添加论文观点</button>`;
            //论文流程步骤
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnAddFirstPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文初稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=04&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文初稿</button >`;
            strhtml += `&nbsp;&nbsp;<button id="btnGroupDiscuss${p}" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('小组讨论', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=01&PaperLogTypeId=05&pubParentId=${strTopicId}','','',true)"> ${clsIcon.faCommentDots}小组讨论</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnUpdatePaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文修改稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=06&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文修改稿</button >`;
            strhtml += `&nbsp;&nbsp;<button id="btnCompanionProposal${p}" class="layui-btn-xs layui-btn layui-btn-normal" onclick=" xadmin.open('同伴建议', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=02&PaperLogTypeId=07&pubParentId=${strTopicId}','','',true)"> ${clsIcon.faCommentDots}同伴建议</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnEndPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文终稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=08&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文终稿</button >`;

            break;
          default:
            strhtml += '<div class="layui-btn-group">';
            //论文思路
            strhtml += `&nbsp;&nbsp;&nbsp<button id="btnAddFirst${p}" class="layui-btn layui-btn layui-btn-xs" onclick=" xadmin.open('论文思路', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=02&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文思路</button >`;

            strhtml += `&nbsp;&nbsp;&nbsp<button disabled="disabled" id="btnAddSubviewpointPaper${p}" title="添加论文观点" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=btnAddNewPaperViewpointRela_Click("${arrvRTPaperRelaObjLst[i].paperId}") > ${clsIcon.faCommentDots}添加论文观点</button>`;
            //论文流程步骤
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnAddFirstPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文初稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=03&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文初稿</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnGroupDiscuss${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('小组讨论', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=01&PaperLogTypeId=04&pubParentId=${strTopicId}')"> ${clsIcon.faCommentDots}小组讨论</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnUpdatePaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文修改稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=05&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文修改稿</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnCompanionProposal${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('同伴建议', '../GradEduPaper/gs_PaperDiscuss?Key=${strPaperId}&Type=02&PaperLogTypeId=06&pubParentId=${strTopicId}')"> ${clsIcon.faCommentDots}同伴建议</button >`;
            strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnEndPaper${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文终稿', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=07&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文终稿</button >`;

            break;
        }
      }
      strhtml += '</li>';
    }
    strhtml += '</ul></div>';

    SetDivHtmlInDivObj(objLayOut, 'divDataLst4RtOriginalPaperRela', strhtml);

    if (this.recCount > 10) {
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager_Paper);
    }
  }

  public async btnDelPaperRelaRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的记录！`);
        console.error(`请选择需要删除的记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      // 只有删除的数据也当前登录用户一致时，才可以删除；

      const strUserId = userStore.getUserId;
      //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
      RTPaperRela_GetObjBymIdAsync(lngKeyId).then((jsonData) => {
        const objRPaperEN: clsRTPaperRelaEN = <clsRTPaperRelaEN>jsonData;
        if (objRPaperEN != null) {
          if (objRPaperEN.updUser == strUserId) {
            this.DelPaperRelaRecord(lngKeyId);
            // const responseText2 = await this.BindGv_vRTPaperRela();
          } else {
            //成员
            const strMsg = `您只能删除自己添加的数据！`;
            alert(strMsg);
            return;
          }
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
根据关键字删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelPaperRelaRecord(lngmId: number) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    try {
      const returnInt: number = await RTPaperRela_DelRecordAsync(lngmId);
      if (returnInt > 0) {
        this.BindGv_vRTPaperRela(objLayOut, '01');
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //分页数据
  /* 函数功能:在数据 列表中跳转到某一页 观点列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
 <param name = "intPageIndex">页序号</param>
*/
  public IndexPageFive(intPageIndex: number) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_vRTPaperRela(objLayOut, '01');
  }

  //////////////////////////////////////////////////////论文部分//////////////////////////////////////////

  /// <summary>
  /// 为下拉框获取数据,从表:[Paper]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_LiteratureTypeId(ddlLiteratureTypeId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrLiteratureTypeObjLst = await LiteratureType_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrLiteratureTypeObjLst,
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
  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombinevPaperCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    const strTopicId: string = clsPrivateSessionStorage.topicIdInTree;
    //论文条件教学班
    //strWhereCond += ` And ${clsPaperEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;

    //strWhereCond += ` And ${clsPaperEN.con_IdCurrEduCls} <> '00000050'`;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }
      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      }

      //if (clsPubLocalStorage.eduClsTypeId == "0001") {
      //    strWhereCond += ` And ${clsPaperEN.con_UpdUser} in('${clsPubLocalStorage.TopicUserList}')`;
      //} else {
      //    //用户
      //    if (this.readUser_q != "" && this.readUser_q != "0") {
      //        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.readUser_q}'`;
      //    }
      //}
      //用户
      if (this.readUser_q != '' && this.readUser_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.readUser_q}'`;
      }

      const strPaperTypeId = RTPaperRelaListInEx.paperTypeId;
      if (strPaperTypeId == '01') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTypeId} = '${strPaperTypeId}'`;
      } else if (strPaperTypeId == '02') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTypeId} = '${strPaperTypeId}'`;
      }

      //只查询提交后的论文数据
      //strWhereCond += ` And ${clsPaperEN.con_IsSubmit} = 'true'`;

      //获取论文条件 02代表 小组成员论文数据；
      const strType = GetInputValueInDivObj(divName, 'hidstrType');

      if (strType == '01') {
        //排除获取已存在的关系数据
        strWhereCond += ` And paperId not in (select paperId from RTPaperRela where topicId = '${strTopicId}')`;
      } else if (strType == '02') {
        //小组成员的论文数据；
        strWhereCond += ` And updUser in (select UserID from RTUserRela where topicId = '${strTopicId}')`;
        //排除获取已存在的关系数据
        strWhereCond += ` And paperId not in (select paperId from RTResearchResult where topicId = '${strTopicId}')`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public async BindTab_vPaperQA(
    divContainer: HTMLDivElement,
    arrPaperExObjLst: Array<clsPaperENEx>,
  ) {
    const strThisFuncName = this.BindTab_vPaperQA.name;
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
        fldName: 'periodical',
        colHeader: '期刊',
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
        fldName: 'author',
        colHeader: '作者',
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
        fldName: 'keyword',
        colHeader: '关键字',
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
        fldName: 'userName',
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
        fldName: '',
        colHeader: '添加',
        text: '添加',
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
          btn1.setAttribute('onclick', `btnPaperQARecordInTab_Click("${strKeyId}");`);
          return btn1;
        },
      },
    ];

    BindTabV2Where(divContainer, arrPaperExObjLst, arrDataColumn, 'paperId', 'TopicPaper');
    //BindTab(o, arrPaperExObjLst, arrDataColumn, "paperId");
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager_Paper);
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvPaperBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvPaperBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvPaperBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvPaperBy');
  }

  ///////////////////////论文列表条件
  public get readUser_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }
  /*
   * 文献类型Id
   */
  public get literatureTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlLiteratureTypeId_q');
  }

  /*
   * 获取当前页序号  -------论文
   */
  public get CurrPageIndexPaper(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndexPaper');
  }
  /*
   * 设置当前页序号-------论文
   */
  public set CurrPageIndexPaper(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndexPaper', value);
  }

  /* 
    主题论文
*/
  public async SortByRTPaper(strSortByFld: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    if (RTPaperRelaCRUD.sortvRTPaperRelaBy.indexOf(strSortByFld) >= 0) {
      if (RTPaperRelaCRUD.sortvRTPaperRelaBy.indexOf('Asc') >= 0) {
        RTPaperRelaCRUD.sortvRTPaperRelaBy = `${strSortByFld} Desc`;
      } else {
        RTPaperRelaCRUD.sortvRTPaperRelaBy = `${strSortByFld} Asc`;
      }
    } else {
      RTPaperRelaCRUD.sortvRTPaperRelaBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_vRTPaperRela(objLayOut, '01');
  }
  //添加主题论文关系
  public btnAddNewPaperRela_Click(objPage: RTPaperRelaListInEx) {
    const strKeyId = this.topicId;

    if (strKeyId == '') {
      alert('请选择需要添加关系的主题！');
      return;
    } else {
      //存放选择id
      //strIdCurrEduclsstrObjectiveType = "02";
      //$('#hidObjectiveTypeId').val(strObjectiveType);
      // xadminOpen('添加主题论文', `../GradEduPublicPage/P_Paper_EditV2?TopicId=${strKeyId}`);
      P_Paper_EditV2Ex.topicId = strKeyId;
      const objPage_Edit = new P_Paper_EditV2Ex('P_Paper_EditV2Ex', objPage);
      // objPage_Edit.btnAddNewRecordWithMaxId_Click();
      objPage_Edit.PageLoad();
    }
  }
  public get topicId(): string {
    return RTPaperRelaCRUD.GetPropValue('topicId');
  }
}

async function ParticipateQA_Click(strPaperId: string) {
  // var strTopicId = $('#hidTopicRelaId').val();
  // xadminOpen(
  //   '教师提问',
  //   '../GraduateEduEx/PaperSubViewpoint_pdf?Type=01&PaperId=' +
  //   strPaperId +
  //   '&TopicId=' +
  //   strTopicId +
  //   '&QuestionsTypeId=02',
  // );
  let myRouter;
  const strType = '01';
  const strQuestionsTypeId = '02';
  const strTopicId = clsPrivateSessionStorage.topicIdInTree;
  const objPaper = await paperStore.getObj(strPaperId);
  if (objPaper == null) return;
  if (objPaper.literatureTypeId == '05') {
    myRouter = `/ReadTraining?paperId=${objPaper.paperId}&type=${strType}&QuestionsTypeId=${strQuestionsTypeId}&TopicId=${strTopicId}`;
  } else {
    myRouter = `/PaperSubViewpoint?paperId=${objPaper.paperId}&type=${strType}&QuestionsTypeId=${strQuestionsTypeId}&TopicId=${strTopicId}`;
  }

  router.push(myRouter);
}

export function liPaperClick(strKeyId: string, divLayout: HTMLDivElement) {
  let strnum = '';
  if (strKeyId == '01') {
    strnum = '2';
  } else {
    strnum = '12';
  }

  RTPaperRelaListInEx.paperTypeId = strKeyId;
  // $('#h1idTabNum').val(strnum);
  const objPage0 = new RTPaperRelaListInEx(divLayout);
  const objLayOut = objPage0.getDivName(enumDivType.LayOut_01);
  let divRtPaperRela;
  if (objLayOut == null) return;
  let bolIsSelfWrite = false;
  if (strKeyId == '02') {
    bolIsSelfWrite = true;
    divRtPaperRela = GetDivObjInDivObjN(objLayOut, 'divRtPaperRela_OriginalPaper');
  } else {
    divRtPaperRela = GetDivObjInDivObjN(objLayOut, 'divRtPaperRela');
  }
  if (divRtPaperRela == null) {
    setTimeout(() => {
      liPaperClick(strKeyId, divLayout);
    }, 100);
  } else {
    // RTPaperRelaCRUD.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;
    const objPage = new RTPaperRelaListInEx(divLayout);
    objPage.liPaperClick(divRtPaperRela, bolIsSelfWrite);
  }
}
