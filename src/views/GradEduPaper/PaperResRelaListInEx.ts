import $ from 'jquery';
import { PaperResRela_EditEx } from './PaperResRela_EditEx';

import { clsPaperSubResEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubResEN';
import { clsPaperSubResENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperSubResENEx';

import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  PaperResRela_DelRecKeyLstAsync,
  PaperResRela_GetObjByKeyLstAsync,
  PaperResRela_GetObjLstAsync,
  PaperResRela_GetObjLstByPagerAsync,
  PaperResRela_GetRecCountByCondAsync,
  PaperResRela_SplitKeyLst,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperResRelaWApi';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  SetInputValueInDivObj,
  SetDivHtmlInDivObj,
  GetDivObjInDivObj,
  GetButtonObjLstInDivObjN,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab, BindTabV2Where, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
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
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';

import { clsPaperResRelaEN } from '@/ts/L0Entity/GradEduPaper/clsPaperResRelaEN';
import { PaperResRelaCRUD } from '@/viewsBase/GradEduPaper/PaperResRelaCRUD';
import { PaperSubResLstSel } from '@/views/GradEduPaper/PaperSubResLstSel';
import { clsPaperResRelaENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperResRelaENEx';
import {
  PaperResRelaEx_CopyToEx,
  PaperResRelaEx_FuncMapByFldName,
} from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperResRelaExWApi';
import { PaperSubRes_EditEx } from '@/views/GradEduPaper/PaperSubRes_EditEx';

import { paperSubResStore } from '@/store/modules/paperSubRes';
import { enumPaperSubResType } from '@/ts/L0Entity/ResourceMan/clsPaperSubResTypeEN';
import { GetAddressAndPort, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  PaperSubResType_GetObjByPaperSubResTypeIdCache,
  PaperSubResType_GetObjLstCache,
} from '@/ts/L3ForWApi/ResourceMan/clsPaperSubResTypeWApi';

// declare function ParticipateQA_Click(strKey: string): void;
declare let window: any;
/* WApiPaperResRela_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 
*/
export class PaperResRelaListInEx extends PaperResRelaCRUD implements IShowList {
  // public static GetPropValue: (strPropName: string) => string;
  // public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public divName4Pager_Paper = 'divPager';
  public static paperSubResTypeId = '';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortPaperResRelaBy: string = "mId";
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
    this.BindGv_PaperResRela(objLayOut);
  }
  async BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    let objPageEdit;
    let objKeyLst;
    const strKeyLst = strPara;
    switch (strType) {
      case clsPaperResRelaEN._CurrTabName:
      case clsPaperSubResEN._CurrTabName:
        liPaperClick('01', this.divLayout);
        break;
      case 'unknown':
        if (IsNullOrEmpty(strPara) == false) {
          const objPager_CRUD = new PaperResRelaListInEx(this.divLayout);
          const objPaperResRela_Edit = new PaperResRela_EditEx('', objPager_CRUD);

          objKeyLst = PaperResRela_SplitKeyLst(strKeyLst);
          const bolIsSuccess = await objPaperResRela_Edit.AddNewRecordSavePaperRela(
            objKeyLst.paperId,
            objKeyLst.paperSubResId,
          );
          if (bolIsSuccess == true) {
            const objPage = new PaperResRelaListInEx(this.divLayout);
            objPage.divName4Pager = 'divPager4Paper';
            objPage.liPaperClick(this.divLayout);

            //const objPage_PaperResRela = new Pub_PaperResRelaList();
            //objPage_PaperResRela.divName4Pager = "divPager4Paper";
            //objPage_PaperResRela.PageLoad();
          }
          //await objPage_PaperResRela.BindGv_PaperResRela();
        }
        break;
      case 'PaperResRela':
        //alert('该类没有绑定该函数：[this.BindGv_PaperResRela_Cache]！');
        //this.BindGv_PaperResRelaCache();;
        objPageEdit = new PaperResRela_EditEx('', this);
        // objPageEdit.btnPaperRecordInTab_Click(strType);
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

   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: PaperResRelaListInEx;

    if (PaperResRelaCRUD.objPageCRUD == null) {
      PaperResRelaCRUD.objPageCRUD = new PaperResRelaListInEx(divLayout);
      objPage = <PaperResRelaListInEx>PaperResRelaCRUD.objPageCRUD;
    } else {
      objPage = <PaperResRelaListInEx>PaperResRelaCRUD.objPageCRUD;
    }
    const objPageEdit_PaperSel = new PaperSubResLstSel(objPage, divLayout);
    // const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    // strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    let objKeyLst;
    const strKeyLst = strKeyId;
    switch (strCommandName) {
      case 'AddNewPaperRela': //删除研究主题AddgsReflectLog
        objPage.btnAddNewPaperRela_Click(objPage);
        break;
      case 'AddRelaPaper': //查询记录
        objPageEdit_PaperSel.btnAddPaperSubResRela_Click();
        break;
      case 'ParticipateQA':
        objPage.btnParticipateQA_Click(Number(strKeyId));
        break;
      case 'DelPaperRelaRecordInTab':
        objPage.btnDelPaperRelaRecordInTab_Click(strKeyId);
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;

      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;

      case 'DelRecordInTab': //删除记录InTab
        objKeyLst = PaperResRela_SplitKeyLst(strKeyLst);
        objPage.btnDelRecordInTab_Click(objKeyLst.paperId, objKeyLst.paperSubResId);
        break;

      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PaperResRelaCRUDExEx.btn_Click');

        break;
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
 
*/
  public async PageLoadCache() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      this.divName4Pager = 'divPager_TopicPaperLst';
      if (userStore.getUserId != '') {
        //1、为下拉框设置数据源,绑定列表数据
        //const ddl_TopicId = await this.BindDdl_TopicId("ddlTopicId");
        //const ddl_PaperId = await this.BindDdl_PaperId("ddlPaperId");
        PaperResRelaCRUD.sortPaperResRelaBy = 'updDate Desc';
        const strWhereCond = await this.CombinePaperResRelaCondition();
        await PaperResRela_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {
          this.recCount = jsonData;
        });
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager_Paper);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_PaperResRela(objLayOut);
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
  public async liPaperClick(objLayOut: HTMLDivElement) {
    if (objLayOut == null) return;
    try {
      //用户下拉框绑定

      this.divName4Pager_Paper = 'divPager'; //引用论文

      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(objLayOut, this.divName4Pager_Paper);
        this.bolIsInitShow = true; //
      }
      //主题论文
      PaperResRelaCRUD.sortPaperResRelaBy = 'updDate Desc';

      await this.BindGv_PaperResRela(objLayOut);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 显示PaperResRela对象的所有属性值
 
 <param name = "divContainer">显示容器</param>
 <param name = "arrPaperResRelaObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_PaperResRela(
    divContainer: HTMLDivElement,
    arrPaperResRelaExObjLst: Array<clsPaperResRelaENEx>,
  ) {
    const strThisFuncName = this.BindTab_PaperResRela.name;
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
        fldName: clsPaperResRelaENEx.con_PaperSubResName,
        sortBy: clsPaperResRelaENEx.con_PaperSubResName,
        colHeader: '论文子资源名',
        text: '',
        tdClass: 'text-left',

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
    ];

    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab(divDataLst, arrPaperResRelaExObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager_Paper);
  }

  ////////////////////////////////////////////////////////////////////////////////////主题论文关系
  /* 把所有的查询控件内容组合成一个条件串

<returns>条件串(strWhereCond)</returns>
*/
  public async CombinePaperResRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strPaperId = this.paperId;
      if (strPaperId != '') {
        strWhereCond += ` And ${clsPaperResRelaEN.con_PaperId} = '${strPaperId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperResRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的记录对象的列表
     
   */
  public async BindGv_PaperResRela(objLayOut: HTMLDivElement) {
    if (objLayOut == null) return;

    let strWhereCond = await this.CombinePaperResRelaCondition();

    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrPaperResRelaObjLst: Array<clsPaperResRelaEN> = [];
    let arrPaperResRelaENExObjLst: Array<clsPaperResRelaENEx> = [];
    try {
      this.recCount = await PaperResRela_GetRecCountByCondAsync(strWhereCond);

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
        orderBy: PaperResRelaCRUD.sortPaperResRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrPaperResRelaObjLst = await PaperResRela_GetObjLstByPagerAsync(objPagerPara);

      arrPaperResRelaENExObjLst = arrPaperResRelaObjLst.map(this.CopyToEx);
      await this.ExtendFldFuncMap(arrPaperResRelaENExObjLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    try {
      this.BindTab_PaperResRelaList1(objLayOut, arrPaperResRelaENExObjLst);

      console.log('完成BindGv_PaperResRela(in PaperResRelaListInEx)!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public async ExtendFldFuncMap(arrPaperResRelaExObjLst: Array<clsPaperResRelaENEx>) {
    const arrFldName = [
      clsPaperResRelaENEx.con_UserName,
      clsPaperResRelaENEx.con_PaperSubResName,
      clsPaperResRelaENEx.con_PaperSubResTypeName,
    ];

    for (const strFldName of arrFldName) {
      if (IsNullOrEmpty(strFldName) == true) continue;

      for (const objInFor of arrPaperResRelaExObjLst) {
        await PaperResRelaEx_FuncMapByFldName(strFldName, objInFor);
      }
    }
  }
  //绑定主题论文关系表
  public async BindTab_PaperResRelaList1(
    objLayOut: HTMLDivElement,
    arrPaperResRelaENExObjLst: Array<clsPaperResRelaENEx>,
  ) {
    if (objLayOut == null) return;
    try {
      const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      //strWhereCond1 = "idCurrEduCls='" + strIdCurrEduCls + "' and paperTypeId='" + strpaperSubResTypeId + "'";
      const strWhereCond2 = `idCurrEduCls='${strIdCurrEduCls}'`;
      let arrPaperResRelaObjLst0: Array<clsPaperResRelaEN> = [];
      let arrPaperResRelaObjLst: Array<clsPaperResRelaEN> = [];
      await PaperResRela_GetObjLstAsync(strWhereCond2).then((jsonData) => {
        arrPaperResRelaObjLst0 = <Array<clsPaperResRelaEN>>jsonData;
      });

      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      //arrvqa_AnswerObjLst = arrvqa_AnswerObjLst0.filter(x => x.topicId == strTopicId);
      const strUserId = userStore.getUserId;

      //获取用户缓存数据

      let strhtml = '';
      for (let j = 0; j < arrPaperResRelaENExObjLst.length; j++) {
        const objPaperResRelaEx = arrPaperResRelaENExObjLst[j];
        const intNum: number = j + 1;

        const intPaperSubResId = objPaperResRelaEx.paperSubResId;
        const strPaperId = objPaperResRelaEx.paperId;

        arrPaperResRelaObjLst = arrPaperResRelaObjLst0.filter((x) => x.paperId == strPaperId);

        strhtml += '<tr>';
        strhtml += `<td>${intNum}</td>`;
        strhtml += `<td>${objPaperResRelaEx.paperSubResName}</td>`;
        strhtml += `<td>${objPaperResRelaEx.paperSubResTypeName}</td>`;
        strhtml += `<td>${objPaperResRelaEx.updDate}</td>`;

        strhtml += `<td>${objPaperResRelaEx.userName}</td>`;

        strhtml += '<td>';
        strhtml += `<span id="QuoteNum" class="badge badge-pill badge-primary" title="引用数">${arrPaperResRelaObjLst.length}</span>`;
        strhtml += '</td>';
        strhtml += '<td style="width:60px">';
        strhtml += '<div style="display: inline-block;">';
        //编辑
        strhtml += `<button id="ParticipateQA" keyId="${intPaperSubResId}" title="显示详细信息" class="btn-info btn btn-sm" >${clsIcon.faRectangleList}</button>`;
        //删除
        if (objPaperResRelaEx.updUser == strUserId) {
          strhtml += `<button id="btnDelPaperRelaRecordInTab" keyId="${strPaperId}|${intPaperSubResId}" title="删除论文子资源引用" class="btn-danger btn btn-sm" >${clsIcon.faTrash}</button>`;
        }
        strhtml += '</div>';
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
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = { paperId: arr[0], paperSubResId: arr[1] };

          (function (objData: any) {
            btnDelPaperRelaRecordInTab.onclick = function () {
              PaperResRelaCRUD.vuebtn_Click('DelPaperRelaRecordInTab', objData);
            };
          })(objData);
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
              PaperResRelaCRUD.vuebtn_Click('ParticipateQA', strKeyId);
            };
          })(strKeyId);
        }
      }
    }
  }
  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换

  /// </summary>
  /// <param name = "objzx_ConceptS">源对象</param>
  // public async FuncMap(objPaperResRela: clsPaperResRelaENEx) {
  //   try {
  //     const vUsersSim_UserId = objPaperResRela.updUser;
  //     const vUsersSim_UserName = await vUsersSimEx_func(
  //       clsvUsersSimEN.con_UserId,
  //       clsvUsersSimEN.con_UserName,
  //       vUsersSim_UserId,
  //     );
  //     objPaperResRela.userName = vUsersSim_UserName;
  //   } catch (e: any) {
  //     const strMsg = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.(${clsStackTrace.GetCurrClassFunction()})`;
  //     alert(strMsg);
  //   }
  // }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象

  /// </summary>
  /// <param name = "objzx_ConceptENS">源对象</param>
  /// <returns>目标对象=>clszx_ConceptEN:objzx_ConceptENT</returns>
  public CopyToEx(objzx_ConceptENS: clsPaperResRelaEN): clsPaperResRelaENEx {
    let objzx_ConceptENT = new clsPaperResRelaENEx();
    try {
      objzx_ConceptENT = PaperResRelaEx_CopyToEx(objzx_ConceptENS);
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

  public async btnParticipateQA_Click(strPaperSubResId: number) {
    try {
      if (strPaperSubResId == 0) {
        alert(`请选择需要选择需要显示详细信息的论文子资源！`);
        return '';
      }

      ParticipateQA_Click(strPaperSubResId);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  public async BindTab_PaperResRelaList(
    objLayOut: HTMLDivElement,
    arrPaperResRelaExObjLst: Array<clsPaperResRelaENEx>,

    arrUsers: Array<clsvUsersSimEN>,
  ) {
    if (objLayOut == null) return;
    const strUserId = userStore.getUserId;

    //论文流程日志

    const strTopicId = clsPrivateSessionStorage.topicIdInTree;

    let strhtml = '';
    strhtml +=
      '<div class="info" id="infoPaper"><div class="title btn-2"><a href="javascript:void(0)" title="小组论文写作">小组论文写作</a></div><ul class="artlist">';
    let p = 0; //给内容加个序号
    for (let i = 0; i < arrPaperResRelaExObjLst.length; i++) {
      const objPaperResRelaEx = arrPaperResRelaExObjLst[i];
      p++;
      const strPaperId = objPaperResRelaEx.paperId;
      //strhtml += p + "." + objPaperResRelaEx.paperTitle + "&nbsp;&nbsp;所属主题：" + objPaperResRelaEx.topicName + "</br><hr size=1 style=color:blue;border-style:dotted;width:100%>";
      strhtml += `<li><span class="rowtit color2">${p}.[标题]：</span><span class="abstract-text">${
        objPaperResRelaEx.paperTitle
      } <span class="ml-1 text-primary">作者：</span>${objPaperResRelaEx.author ?? ''}</span>`;
      //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑人：</span><span class="abstract-text">' + objPaperResRelaEx.userName + '</span>';
      //strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color3">编辑时间：</span><span class="abstract-text">' + objPaperResRelaEx.updDate + '</span></li>';
      //strhtml += "<span class=\"colorRed\" style=\"padding-left:50px;\" onclick=\"xadmin.open('pdf查看', '../GradEduEx/PdfDetail?paperId=" + arrPaperResRelaObjLst2[i].paperId + "')\">pdf查看</span></li>";
      //<a href=\"#\" onclick=\"xadmin.open('pdf查看', '../GradEduEx/PdfDetail?paperId=" + objPaperResRelaEx.paperId + "')\">pdf查看</a>

      strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：';

      let result = '';
      //strIdCurrEduclsresult = Math.max(...lists.map(x => x.id));  arrObjLst_Sel = arrObjLst_Sel.sort(x => x.GetFldValue(clsvUsersSimEN.con_UserName));
      //获取id比较得到论文步骤日志；

      if (strUserId == objPaperResRelaEx.updUser) {
        // onclick="btnDelViewPointRelaRecordInTab_Click(${objPaperResRelaEx.mId})"
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnDelViewPointRelaRecordInTab" keyId="${objPaperResRelaEx.paperId}|${objPaperResRelaEx.paperSubResId}" style="float:right;" title="移除引用" class="layui-btn-danger layui-btn layui-btn layui-btn-xs"  > <i class="layui-icon" >&#xe640;</i>移除</button>`;
      }

      //论文写作
      strhtml += `&nbsp;&nbsp;<button style="float:right;" class="layui-btn layui-btn-warm layui-btn-xs" onclick="xadmin.open('论文写作', '../GradEduPaper/gs_PaperParagraph?paperId=${objPaperResRelaEx.paperId}&topicId=${clsPrivateSessionStorage.topicIdInTree}')",'', '', true> ${clsIcon.faCommentDots}论文写作</button >`;
      //测试静态树
      //   strhtml += "&nbsp;&nbsp;<button style=\"float:right;\" class=\"layui-btn layui-btn-warm layui-btn-xs\" onclick=\"xadmin.open('测试静态树', '../GradEduPaper/TestTree?paperId=" + objPaperResRelaEx.paperId + "')\"> <i class=\"layui-icon\" >&#xe642;</i>测试静态树</button >";
      strhtml += '</li>';
      strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[流程步骤]：';

      //判断数据是否提交，如果提交，那么所有的按钮都置灰；

      strhtml += '<div class="layui-btn-group">';
      //论文思路
      strhtml += `&nbsp;&nbsp;&nbsp<button disabled="disabled" id="btnAddFirst${p}" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=" xadmin.open('论文思路', '../GradEduPublicPage/P_Paper_Edit?paperId=${strPaperId}&PaperLogTypeId=02&topicId=${strTopicId}')"> ${clsIcon.faCommentDots}论文思路</button >`;
      strhtml += `&nbsp;&nbsp;<button disabled="disabled" id="btnAddSubviewpointPaper${p}" title="添加论文观点" class="layui-btn-xs layui-btn layui-btn-disabled" onclick=btnAddNewPaperViewpointRela_Click("${objPaperResRelaEx.paperId}") > ${clsIcon.faCommentDots}添加论文观点</button>`;
      //论文流程步骤

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

  public async btnDelPaperRelaRecordInTab_Click(objKeyLst: any) {
    try {
      if (objKeyLst.paperId == '') {
        alert(`请选择需要删除的记录！`);
        console.error(`请选择需要删除的记录！`);
        return '';
      }
      if (objKeyLst.paperSubResId == 0) {
        alert(`请选择需要删除的记录！`);
        console.error(`请选择需要删除的记录！`);
        return '';
      }

      // 只有删除的数据也当前登录用户一致时，才可以删除；

      // const strKeyLst = strKeyId;
      // const objKeyLst = PaperResRela_SplitKeyLst(strKeyLst);
      let { paperId, paperSubResId } = objKeyLst;
      const strUserId = userStore.getUserId;
      //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
      const objPaperResRela = await PaperResRela_GetObjByKeyLstAsync(paperId, paperSubResId);
      if (objPaperResRela != null) {
        if (objPaperResRela.updUser == strUserId) {
          const strKeyLst = `${paperId}|${paperSubResId}`;
          this.DelPaperRelaRecord(strKeyLst);
          // const responseText2 = await this.BindGv_PaperResRela();
        } else {
          //成员
          const strMsg = `您只能删除自己添加的数据！`;
          alert(strMsg);
          return;
        }
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  /* 
根据关键字删除记录
 
*/
  public async DelPaperRelaRecord(strKeyLst: string) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    try {
      const objKeyLst = PaperResRela_SplitKeyLst(strKeyLst);
      const returnInt: number = await PaperResRela_DelRecKeyLstAsync(
        objKeyLst.paperId,
        objKeyLst.paperSubResId,
      );
      if (returnInt > 0) {
        this.BindGv_PaperResRela(objLayOut);
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
    this.BindGv_PaperResRela(objLayOut);
  }

  /* 把所有的查询控件内容组合成一个条件串   
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombinevPaperCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    const strTopicId: string = clsPrivateSessionStorage.topicIdInTree;
    //论文条件教学班
    //strWhereCond += ` And ${clsPaperSubResEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;

    //strWhereCond += ` And ${clsPaperSubResEN.con_IdCurrEduCls} <> '00000050'`;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      // if (this.paperTitle_q != '') {
      //   strWhereCond += ` And ${clsPaperSubResEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      // }
      if (this.paperSubResTypeId_q != '' && this.paperSubResTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperSubResEN.con_PaperSubResTypeId} = '${this.paperSubResTypeId_q}'`;
      }

      const strPaperSubResTypeId = PaperResRelaListInEx.paperSubResTypeId;
      if (strPaperSubResTypeId == '01') {
        strWhereCond += ` And ${clsPaperSubResEN.con_PaperSubResTypeId} = '${strPaperSubResTypeId}'`;
      } else if (strPaperSubResTypeId == '02') {
        strWhereCond += ` And ${clsPaperSubResEN.con_PaperSubResTypeId} = '${strPaperSubResTypeId}'`;
      }

      //只查询提交后的论文数据
      //strWhereCond += ` And ${clsPaperSubResEN.con_IsSubmit} = 'true'`;

      //获取论文条件 02代表 小组成员论文数据；
      const strType = GetInputValueInDivObj(divName, 'hidstrType');

      if (strType == '01') {
        //排除获取已存在的关系数据
        strWhereCond += ` And paperId not in (select paperId from PaperResRela where topicId = '${strTopicId}')`;
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
    arrPaperExObjLst: Array<clsPaperSubResENEx>,
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
        fldName: clsPaperResRelaENEx.con_PaperSubResName,
        sortBy: clsPaperResRelaENEx.con_PaperSubResName,
        colHeader: '论文子资源名',
        text: '',
        tdClass: 'text-left',

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
  public get paperSubResTypeId_q(): string {
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
    if (PaperResRelaCRUD.sortPaperResRelaBy.indexOf(strSortByFld) >= 0) {
      if (PaperResRelaCRUD.sortPaperResRelaBy.indexOf('Asc') >= 0) {
        PaperResRelaCRUD.sortPaperResRelaBy = `${strSortByFld} Desc`;
      } else {
        PaperResRelaCRUD.sortPaperResRelaBy = `${strSortByFld} Asc`;
      }
    } else {
      PaperResRelaCRUD.sortPaperResRelaBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_PaperResRela(objLayOut);
  }
  //添加主题论文关系
  public btnAddNewPaperRela_Click(objPage: PaperResRelaListInEx) {
    if (this.paperId == '') {
      alert('请选择需要添加资源的论文！');
      return;
    } else {
      //存放选择id
      //strIdCurrEduclsstrObjectiveType = "02";
      //$('#hidObjectiveTypeId').val(strObjectiveType);
      // xadminOpen('添加主题论文', `../GradEduPublicPage/P_Paper_EditV2?TopicId=${strKeyId}`);

      const objPage_Edit = new PaperSubRes_EditEx('PaperSubRes_EditEx', objPage);
      objPage_Edit.paperId = this.paperId;
      objPage_Edit.btnAddNewRecordWithMaxId_Click();
      // objPage_Edit.PageLoad();
    }
  }
  public get paperId(): string {
    return PaperResRelaCRUD.GetPropValue('paperId');
  }
}

async function ParticipateQA_Click(strPaperSubResId: number) {
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

  // const strPaperId = this.paperId;
  const objPaperSubRes = await paperSubResStore.getObj(strPaperSubResId);
  if (objPaperSubRes == null) return;
  const currHostname = window.location.hostname;
  const currPort = window.location.port;
  const pathName = clsSysPara4WebApi.spVirtualDirectory; // window.location.pathname;
  let strfilepath;
  if (currHostname == 'localhost') {
    strfilepath = `http://${currHostname}:${currPort}${pathName}${objPaperSubRes.filePath}`;
  } else {
    strfilepath = GetAddressAndPort() + objPaperSubRes.filePath;
  }
  console.log(strfilepath);
  let strMsg;
  let objPaperSubResType;
  switch (objPaperSubRes.paperSubResTypeId) {
    case enumPaperSubResType.Pdf_0005:
      PaperResRelaListInEx.vuebtn_Click('showPdfViewer', strfilepath);
      break;
    case enumPaperSubResType.Video_0001:
      // strfilepath =
      //   'https://www.sh-tz.com/gsall/UploadFiles/PaperSubRes/3adcf18cd4540b7106d19cbcc9fdefaa20240325022548.mp4';
      PaperResRelaListInEx.vuebtn_Click('showMp4Player', strfilepath);
      break;
    case enumPaperSubResType.Picture_0004:
      PaperResRelaListInEx.vuebtn_Click('showPicShower', strfilepath);
      break;
    default:
      objPaperSubResType = await PaperSubResType_GetObjByPaperSubResTypeIdCache(
        objPaperSubRes.paperSubResTypeId,
      );
      strMsg = `资源类型:[${objPaperSubResType?.paperSubResTypeName}]在switch中没有被处理!(in 函数:[ParticipateQA_Click])`;
      console.error(strMsg);
      break;
  }
  // alert(
  //   `显示详细信息:${objPaperSubRes.paperSubResName}-${objPaperSubRes.paperSubResTypeId}-${objPaperSubRes.filePath}`,
  // );
  // const strfilepath = 'http://localhost:8090/gsall/pdffiles/汇报论文.pdf';
  // const strfilepath = 'http://localhost:8090/gsall/pdffiles/AAA.pdf';
}

export function liPaperClick(strKeyId: string, divLayout: HTMLDivElement) {
  let strnum = '';
  if (strKeyId == '01') {
    strnum = '2';
  } else {
    strnum = '12';
  }

  PaperResRelaListInEx.paperSubResTypeId = strKeyId;
  // $('#h1idTabNum').val(strnum);
  const objPage0 = new PaperResRelaListInEx(divLayout);
  const objLayOut = objPage0.getDivName(enumDivType.LayOut_01);

  if (objLayOut == null) return;
  const divRtPaperRela = GetDivObjInDivObjN(objLayOut, 'divRtPaperRela');

  if (divRtPaperRela == null) {
    setTimeout(() => {
      liPaperClick(strKeyId, divLayout);
    }, 100);
  } else {
    // PaperResRelaCRUD.vuebtn_Click = ResearchTopic_QUDIExB.vuebtn_Click;
    const objPage = new PaperResRelaListInEx(divLayout);
    objPage.liPaperClick(divRtPaperRela);
  }
}
