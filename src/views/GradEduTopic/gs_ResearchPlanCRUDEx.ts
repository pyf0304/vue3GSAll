import { gs_ResearchPlan_EditEx } from './gs_ResearchPlan_EditEx';
import { gs_ResearchPlanCRUD } from '@/viewsBase/GradEduTopic/gs_ResearchPlanCRUD';
import { clsvgs_ResearchPlanEN } from '@/ts/L0Entity/GradEduTopic/clsvgs_ResearchPlanEN';
import {
  vgs_ResearchPlan_GetObjLstByPagerAsync,
  vgs_ResearchPlan_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvgs_ResearchPlanWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

// import $ from 'jquery';

/* gs_ResearchPlanCRUDEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_ResearchPlanCRUDEx extends gs_ResearchPlanCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvgs_ResearchPlanBy: string = "planId";
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
    this.BindGv_vgs_ResearchPlan(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vgs_ResearchPlan':
        alert('该类没有绑定该函数：[this.BindGv_vgs_ResearchPlan_Cache]！');
        //this.BindGv_vgs_ResearchPlanCache();;
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
 */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: gs_ResearchPlanCRUDEx;
    if (gs_ResearchPlanCRUD.objPageCRUD == null) {
      gs_ResearchPlanCRUD.objPageCRUD = new gs_ResearchPlanCRUDEx(divLayout);
      objPage = <gs_ResearchPlanCRUDEx>gs_ResearchPlanCRUD.objPageCRUD;
    } else {
      objPage = <gs_ResearchPlanCRUDEx>gs_ResearchPlanCRUD.objPageCRUD;
    }
    const objPageEdit: gs_ResearchPlan_EditEx = new gs_ResearchPlan_EditEx(
      'gs_ResearchPlan_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);

    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        objPageEdit.btnUpdateRecord_Click(strKeyId);
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
      default:
        AccessBtnClickDefault(strCommandName, 'WA_Users_QUDI_CacheEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
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
      //建立缓存

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      gs_ResearchPlanCRUD.sortvgs_ResearchPlanBy = 'topicName Asc';
      this.divName4Pager = 'divPager_ResearchPlan'; //列表中的分页区的层Id

      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(objLayOut, this.divName4Pager);
        this.bolIsInitShow = true; //
      }

      //2、显示无条件的表内容在GridView中
      await this.BindGv_vgs_ResearchPlan(this.thisDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  //    /* 函数功能:把界面上的属性数据传到类对象中
  //  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
  //  <param name = "pobjgs_ResearchPlanEN">数据传输的目的类对象</param>
  //*/
  //    public PutDataTogs_ResearchPlanClass(pobjgs_ResearchPlanEN: clsgs_ResearchPlanEN) {
  //        pobjgs_ResearchPlanEN.SetPlanId(this.planId;// 计划Id
  //        pobjgs_ResearchPlanEN.SetStatusId(this.statusId;// 状态
  //        pobjgs_ResearchPlanEN.planTypeId = this.planTypeId;// 类型
  //        pobjgs_ResearchPlanEN.SetTopicId(this.topicId;// 主题
  //        pobjgs_ResearchPlanEN.SetplanContent(this.planContent;// 计划内容
  //        pobjgs_ResearchPlanEN.SetResponsibleUser(this.responsibleUser;// 负责人/小组
  //        pobjgs_ResearchPlanEN.SetStartDate(this.startDate;// 开始日期
  //        pobjgs_ResearchPlanEN.SetEndDate(this.endDate;// 截止日期
  //        pobjgs_ResearchPlanEN.SetIsSubmit(this.isSubmit;// 是否提交
  //        pobjgs_ResearchPlanEN.SetUpdUser(userStore.getUserId;// 修改人
  //        pobjgs_ResearchPlanEN.SetUpdDate(clsPubFun4Web.getNowDate();// 修改日期
  //        pobjgs_ResearchPlanEN.SetMemo(this.memo;// 备注
  //    }
  /* 函数功能:把类对象的属性内容显示到界面上
     注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
      如果在设置数据库时,就应该一级字段在前,二级字段在后
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
      <param name = "pobjgs_ResearchPlanEN">表实体类对象</param>
    */
  //public GetDataFromgs_ResearchPlanClass(pobjgs_ResearchPlanEN: clsgs_ResearchPlanEN) {
  //    this.planId = pobjgs_ResearchPlanEN.planId;// 计划Id
  //    this.statusId = pobjgs_ResearchPlanEN.statusId;// 状态
  //    this.planTypeId = pobjgs_ResearchPlanEN.planTypeId;// 类型
  //    this.topicId = pobjgs_ResearchPlanEN.topicId;// 主题
  //    this.planContent = pobjgs_ResearchPlanEN.planContent;// 计划内容
  //    this.responsibleUser = pobjgs_ResearchPlanEN.responsibleUser;// 负责人/小组
  //    this.startDate = pobjgs_ResearchPlanEN.startDate;// 开始日期
  //    this.endDate = pobjgs_ResearchPlanEN.endDate;// 截止日期
  //    this.isSubmit = pobjgs_ResearchPlanEN.isSubmit;// 是否提交
  //    this.updUser = pobjgs_ResearchPlanEN.updUser;// 修改人
  //    this.updDate = pobjgs_ResearchPlanEN.updDate;// 修改日期
  //    this.memo = pobjgs_ResearchPlanEN.memo;// 备注
  //}

  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vgs_ResearchPlan(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.Combinevgs_ResearchPlanCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvgs_ResearchPlanObjLst: Array<clsvgs_ResearchPlanEN> = [];
    try {
      this.recCount = await vgs_ResearchPlan_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: gs_ResearchPlanCRUD.sortvgs_ResearchPlanBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      await vgs_ResearchPlan_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
        arrvgs_ResearchPlanObjLst = <Array<clsvgs_ResearchPlanEN>>jsonData;
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvgs_ResearchPlanObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_vgs_ResearchPlan(divList, arrvgs_ResearchPlanObjLst);
      console.log('完成BindGv_vgs_ResearchPlan!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 显示vgs_ResearchPlan对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
 <param name = "divContainer">显示容器</param>
 <param name = "arrgs_ResearchPlanObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_vgs_ResearchPlan(
    divContainer: HTMLDivElement,
    arrvgs_ResearchPlanObjLst: Array<clsvgs_ResearchPlanEN>,
  ) {
    const strThisFuncName = this.BindTab_vgs_ResearchPlan.name;
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
        fldName: 'statusName',
        colHeader: '状态名称',
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
        fldName: 'planContent',
        colHeader: '计划内容',
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
        fldName: 'responsibleUser',
        colHeader: '负责人/小组',
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
        fldName: 'startDate',
        colHeader: '开始日期',
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
        fldName: 'endDate',
        colHeader: '截止日期',
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
        fldName: 'actualFinishingDate',
        colHeader: '实际完成日期',
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
        fldName: 'acceptanceUser',
        colHeader: '验收用户',
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
        fldName: 'updUser',
        colHeader: '修改人',
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
        fldName: '',
        colHeader: '修改',
        text: '修改',
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
          btn1.setAttribute('onclick', `btnUpdateRecordInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
      {
        fldName: '',
        colHeader: '删除',
        text: '删除',
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
          btn1.setAttribute('onclick', `btnDelRecordInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
    ];

    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvgs_ResearchPlanObjLst, arrDataColumn, 'planId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /*
   * 类型Id
   */
  public set planTypeId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlPlanTypeId', value);
  }
  /*
   * 计划类型Id
   */
  public get planTypeId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlPlanTypeId');
  }
}
