import $ from 'jquery';
import { gs_ResearchPlanCRUD } from '@/viewsBase/GradEduTopic/gs_ResearchPlanCRUD';
import { clsgs_ResearchPlanEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ResearchPlanEN';
import { clsvgs_ResearchPlanEN } from '@/ts/L0Entity/GradEduTopic/clsvgs_ResearchPlanEN';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import {
  arrSelectedKeys,
  BindTab_V,
  GetCheckedKeyIds,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { ResearchTopic_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import {
  vgs_ResearchPlan_GetObjLstAsync,
  vgs_ResearchPlan_GetObjLstByPagerAsync,
  vgs_ResearchPlan_GetObjLstByPagerCache,
  vgs_ResearchPlan_GetRecCountByCondAsync,
  vgs_ResearchPlan_GetRecCountByCondCache,
} from '@/ts/L3ForWApi/GradEduTopic/clsvgs_ResearchPlanWApi';
import {
  gs_ResearchPlan_AddNewRecordAsync,
  gs_ResearchPlan_AddNewRecordWithMaxIdAsync,
  gs_ResearchPlan_Delgs_ResearchPlansAsync,
  gs_ResearchPlan_DelRecordAsync,
  gs_ResearchPlan_GetMaxStrIdAsync,
  gs_ResearchPlan_GetObjByPlanIdAsync,
  gs_ResearchPlan_IsExistAsync,
  gs_ResearchPlan_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_ResearchPlanWApi';
import { gs_TopicTaskStatus_BindDdl_StatusIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_TopicTaskStatusWApi';
import { GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
import { Format } from '@/ts/PubFun/clsString';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';

/*
 * 宣布一个已经在其他地方定义存在的变量strUrl_Session_SetString，
 * 用于定义处理Session-设置String函数的地址
 */
declare let strUrl_Session_SetString: string;
declare let strUrl_Session_GetString: string;
// declare let window: any;
/* gs_ResearchPlanCRUD 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class AddResearchPlanEx extends gs_ResearchPlanCRUD {
  public mstrListDiv = 'divDataLst';
  public bolIsLoadEditRegion = false; //记录是否导入编辑区的变量
  public bolIsLoadDetailRegion = false; //记录是否导入详细信息区的变量
  public divName4Edit = 'divEdit'; //编辑区的Id
  public divName4Detail = 'divDetail'; //详细信息区的Id

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;
  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in QxPrjMenusCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPrjMenusCRUDEx');
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   */
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      //通过主题Id获取教学班ID
      if (clsPubLocalStorage.idCurrEduCls == '') {
        const objResearchTopic = await ResearchTopic_GetFirstObjAsync(
          ` topicId=${clsPrivateSessionStorage.topicIdInTree}`,
        );
        if (objResearchTopic == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
          ////const strThisFuncName = this.PageLoad.name;
        }
        clsPubLocalStorage.idCurrEduCls = objResearchTopic.idCurrEduCls;
      }

      // const strPlanId = GetInputValueInDivObj(divName, 'hidPlanId');
      // if (strPlanId != '') {
      //   //如果是修改，那么部分控件需要置灰； 开始、结束日期
      //   $('#txtStartDate').attr('disabled', 'true');
      //   $('#txtEndDate').attr('disabled', 'true');

      //   await this.BindDdl4EditRegion();
      //   await this.UpdateRecord(strPlanId);
      //   HideDivInDivObj(objLayOut, 'divLoading');
      // } else {
      //   ////2、显示无条件的表内容在GridView中
      //   //await this.BindGv_vSysSkill();

      //   //this.btnAddNewRecord_Click();
      //   this.btnAddNewRecordWithMaxId_Click();
      //   HideDivInDivObj(objLayOut, 'divLoading');
      // }

      gs_ResearchPlanCRUD.sortvgs_ResearchPlanBy = 'topicName Asc';
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
 按钮单击,用于调用Js函数中btn_Click
(AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
*/
  public btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: AddResearchPlanEx = new AddResearchPlanEx(divLayout);
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'Query': //查询记录
        this.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        gs_ResearchPlanCRUD.EditObj.btngs_ResearchPlan_Edit_Click(strCommandName, strKeyId);
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
        this.btnDelRecord_Click();
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
  /// <summary>
  /// 在当前界面中，导入编辑区域
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
  /// </summary>
  /// <returns></returns>
  public async AddDPV_Edit(divName4Edit: string) {
    const strUrl = './gs_ResearchPlan_Edit/';
    console.log(`divName4Edit:(In AddDPV_Edit)${divName4Edit}`);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'GET',
        dataType: 'html',
        data: {},
        success(data) {
          console.log(`已经成功获取页面:${strUrl}  字节数: ${data.length.toString()}`);
          $(`#${divName4Edit}`).html(data);
          resolve(true);
          //setTimeout(() => { clsEditObj.BindTab(); }, 100);
          //clsEditObj.BindTab();
        },
        error: (e: any) => {
          console.error(e);
          reject(e);
        },
      });
    });
  }

  /// <summary>
  /// 在当前界面中，导入编辑区域
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddDPVer_Detail)
  /// </summary>
  /// <returns></returns>
  public async AddDPVer_Detail(divName4Detail: string) {
    const strUrl = './gs_ResearchPlan_Detail/';
    console.log(`divName4Detail:(In AddDPVer_Detail)${divName4Detail}`);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'GET',
        dataType: 'html',
        data: {},
        success(data) {
          console.log(`已经成功获取页面:${strUrl}  字节数: ${data.length.toString()}`);
          $(`#${divName4Detail}`).html(data);
          resolve(true);
          //setTimeout(() => { clsDetailObj.BindTab(); }, 100);
          //clsDetailObj.BindTab();
        },
        error: (e: any) => {
          console.error(e);
          reject(e);
        },
      });
    });
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad_Cache)
   */
  public async PageLoadCache() {
    // 在此处放置用户代码以初始化页面
    try {
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      gs_ResearchPlanCRUD.sortvgs_ResearchPlanBy = 'topicName Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vgs_ResearchPlanCache(this.thisDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   */
  public async btnQuery_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    const strWhereCond = await this.Combinevgs_ResearchPlanCondition();
    try {
      this.recCount = await vgs_ResearchPlan_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: 1,
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
        const arrvgs_ResearchPlanObjLst: Array<clsvgs_ResearchPlanEN> = <
          Array<clsvgs_ResearchPlanEN>
        >jsonData;
        this.BindTab_vgs_ResearchPlan(this.thisDivList, arrvgs_ResearchPlanObjLst);
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `查询不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:为查询区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Js_BindDdl4QueryRegion)
   */
  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
    const objDivLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objDivLayOut == null) return;
    await gs_TopicTaskStatus_BindDdl_StatusIdInDivCache(objDivLayOut, 'ddlStatusId_q'); //查询区域
  }

  /* 
    在数据表里删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   */
  public async btnDelRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      await this.DelRecord(strKeyId);
      await this.BindGv_vgs_ResearchPlan(this.thisDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
    在数据表里选择记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
   */
  public async btnSelectRecordInTab_Click1(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      this.SelectRecord(strKeyId);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `选择记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
    根据关键字删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   */
  public async DelRecord(strPlanId: string) {
    try {
      const responseText = await gs_ResearchPlan_DelRecordAsync(strPlanId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
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

  /* 
    根据关键字选择相应的记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
     <param name = "sender">参数列表</param>
   */
  public async SelectRecord(strPlanId: string) {
    try {
      await gs_ResearchPlan_GetObjByPlanIdAsync(strPlanId);

      console.log('完成SelectRecord!');
      Redirect('/Index/Main_vgs_ResearchPlan');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   */
  public async btnDelRecord_Click() {
    try {
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_vgs_ResearchPlan(this.thisDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnExportExcel_Click)
   */
  public async btnExportExcel_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    const strWhereCond = ' 1=1 ';
    try {
      await vgs_ResearchPlan_GetObjLstAsync(strWhereCond).then((jsonData) => {
        const arrvgs_ResearchPlanObjLst: Array<clsvgs_ResearchPlanEN> = <
          Array<clsvgs_ResearchPlanEN>
        >jsonData;
        this.BindTab_vgs_ResearchPlan(this.thisDivList, arrvgs_ResearchPlanObjLst);
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `导出Excel不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async Combinevgs_ResearchPlanCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.topicName_q != '') {
        strWhereCond += ` And ${clsvgs_ResearchPlanEN.con_TopicName} like '%${this.topicName_q}%'`;
      }
      if (this.StatusId_q != '' && this.StatusId_q != '0') {
        strWhereCond += ` And ${clsvgs_ResearchPlanEN.con_StatusId} = '${this.StatusId_q}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combinegs_ResearchPlanCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
     <returns>条件串(strWhereCond)</returns>
   */
  public async Combinevgs_ResearchPlanConditionObj(): Promise<clsvgs_ResearchPlanEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const objvgs_ResearchPlan_Cond: clsvgs_ResearchPlanEN = new clsvgs_ResearchPlanEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.topicName_q != '') {
        objvgs_ResearchPlan_Cond.SetCondFldValue(
          clsvgs_ResearchPlanEN.con_TopicName,
          this.topicName_q,
          'like',
        );
      }
      if (this.StatusId_q != '' && this.StatusId_q != '0') {
        objvgs_ResearchPlan_Cond.SetCondFldValue(
          clsvgs_ResearchPlanEN.con_StatusId,
          this.StatusId_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0008)在组合查询条件对象(Combinegs_ResearchPlanConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objvgs_ResearchPlan_Cond;
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
      arrvgs_ResearchPlanObjLst = await vgs_ResearchPlan_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    if (arrvgs_ResearchPlanObjLst.length == 0) {
      const strMsg = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
      alert(strMsg);
      return;
    }
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

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv_Cache)
   */
  public async BindGv_vgs_ResearchPlanCache(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const objvgs_ResearchPlan_Cond = await this.Combinevgs_ResearchPlanConditionObj();
    const strWhereCond = JSON.stringify(objvgs_ResearchPlan_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvgs_ResearchPlanObjLst: Array<clsvgs_ResearchPlanEN> = [];
    try {
      this.recCount = await vgs_ResearchPlan_GetRecCountByCondCache(
        objvgs_ResearchPlan_Cond,
        clsPubLocalStorage.idCurrEduCls,
      );
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
      arrvgs_ResearchPlanObjLst = await vgs_ResearchPlan_GetObjLstByPagerCache(
        objPagerPara,
        clsPubLocalStorage.idCurrEduCls,
      );
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
      return;
    }
    if (arrvgs_ResearchPlanObjLst.length == 0) {
      const strMsg = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=gs_ResearchPlan)`;
      alert(strMsg);
      return;
    }
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

  public async SortBy(objAnchorElement: any) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      gs_ResearchPlanCRUD.ascOrDesc4SortFun,
      gs_ResearchPlanCRUD.sortvgs_ResearchPlanBy,
      strSortExpress,
    );
    gs_ResearchPlanCRUD.sortvgs_ResearchPlanBy = sortBy;
    gs_ResearchPlanCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    gs_ResearchPlanCRUD.sortFunStatic = sortFun;
    await this.BindGv_vgs_ResearchPlan(this.thisDivList);
  }
  /// <summary>
  /// 在用户自定义控件中，设置关键字的值，是否只读
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetKeyReadOnly)
  /// </summary>
  /// <param name = "bolReadonly">是否只读</param>
  public SetKeyReadOnly(bolReadonly: boolean) {
    $('#txtPlanId').attr('ReadOnly', bolReadonly.toString());
  }

  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {}

  /* 获取当前表关键字值的最大值,再加1,避免重复
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetMaxStrId)
   */
  public async GetMaxStrId(strKeyCtrlName: string) {
    this.DivName = 'divGetMaxStrId';
    try {
      const responseText = await gs_ResearchPlan_GetMaxStrIdAsync();
      const returnString: string = responseText.toString();
      if (returnString == '') {
        const strInfo = `获取表gs_ResearchPlan的最大关键字为空，不成功，请检查!`;

        //显示信息框
        alert(strInfo);
        $(strKeyCtrlName).val(returnString);
      } else {
        const strInfo = `获取表gs_ResearchPlan的最大关键字为：${returnString}!`;

        //显示信息框
        alert(strInfo);
        $(strKeyCtrlName).val(returnString);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
   */
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    this.btnOKUpd = '确认添加';
    this.btnCancel = '取消添加';
    this.Clear();
    //wucgs_ResearchPlanB1.planId = clsgs_ResearchPlanBL.GetMaxStrId_S();
  }

  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
   */
  public async AddNewRecordWithMaxId() {
    this.SetKeyReadOnly(false);
    this.btnOKUpd = '确认添加';
    this.btnCancel = '取消添加';
    this.Clear();
    //wucgs_ResearchPlanB1.planId = clsgs_ResearchPlanBL.GetMaxStrId_S();
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjgs_ResearchPlanEN">数据传输的目的类对象</param>
   */
  public async PutDataTogs_ResearchPlanClass(pobjgs_ResearchPlanEN: clsgs_ResearchPlanEN) {
    pobjgs_ResearchPlanEN.SetPlanId(this.planId); // 计划Id
    pobjgs_ResearchPlanEN.SetStatusId(this.statusId); // 状态
    pobjgs_ResearchPlanEN.planTypeId = this.planTypeId; // 类型
    const strTopicId = clsPrivateSessionStorage.topicIdInTree; //
    pobjgs_ResearchPlanEN.SetTopicId(strTopicId); // 主题
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);

    pobjgs_ResearchPlanEN.SetIdCurrEduCls(strIdCurrEduCls); // 教学班

    pobjgs_ResearchPlanEN.SetPlanContent(this.planContent); // 计划内容
    pobjgs_ResearchPlanEN.SetResponsibleUser(this.responsibleUser); // 负责人/小组
    pobjgs_ResearchPlanEN.SetStartDate(this.startDate); // 开始日期
    pobjgs_ResearchPlanEN.SetEndDate(this.endDate); // 截止日期
    pobjgs_ResearchPlanEN.SetIsSubmit(false); // 是否提交
    pobjgs_ResearchPlanEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjgs_ResearchPlanEN.SetUpdDate(this.updDate); // 修改日期
    pobjgs_ResearchPlanEN.SetMemo(this.memo); // 备注
  }

  /* 添加新记录，保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSave() {
    this.DivName = 'divAddNewRecordSave';
    const objgs_ResearchPlanEN: clsgs_ResearchPlanEN = new clsgs_ResearchPlanEN();
    await this.PutDataTogs_ResearchPlanClass(objgs_ResearchPlanEN);
    try {
      const responseText = await gs_ResearchPlan_IsExistAsync(objgs_ResearchPlanEN.planId);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `添加记录时，关键字：${objgs_ResearchPlanEN.planId}已经存在！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }
      const responseText2 = await gs_ResearchPlan_AddNewRecordAsync(objgs_ResearchPlanEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   */
  public async AddNewRecordWithMaxIdSave() {
    const objgs_ResearchPlanEN: clsgs_ResearchPlanEN = new clsgs_ResearchPlanEN();
    await this.PutDataTogs_ResearchPlanClass(objgs_ResearchPlanEN);
    try {
      const responseText2 = await gs_ResearchPlan_AddNewRecordWithMaxIdAsync(objgs_ResearchPlanEN);
      const strPlanId: string = responseText2;
      // const returnBool: boolean = !!responseText2;
      if (strPlanId != '') {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把以该关键字的记录内容显示在界面上,
          在这里是把值传到表控件中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowData)
     <param name = "strPlanId">表记录的关键字,显示该表关键字的内容</param>
   */
  public async ShowData(strPlanId: string) {
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objgs_ResearchPlanEN: clsgs_ResearchPlanEN = new clsgs_ResearchPlanEN();
    try {
      const responseText = await gs_ResearchPlan_IsExistAsync(strPlanId);
      const returnBool: boolean = responseText;
      if (returnBool == false) {
        const strInfo = `关键字:[${strPlanId}] 的记录不存在!`;
        //$('#lblResult1').val(strInfo);
        //显示信息框
        alert(strInfo);
      }
    } catch (e: any) {
      const strMsg = `检查相应关键字的记录存在不成功, ${e}.`;
      alert(strMsg);
    }
    try {
      const responseText = await gs_ResearchPlan_GetObjByPlanIdAsync(strPlanId);
      objgs_ResearchPlanEN = <clsgs_ResearchPlanEN>responseText;
    } catch (e: any) {
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
    //3、用提供的关键字初始化一个类对象；
    this.GetDataFromgs_ResearchPlanClass(objgs_ResearchPlanEN);
  }

  /* 函数功能:把类对象的属性内容显示到界面上
    注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
     如果在设置数据库时,就应该一级字段在前,二级字段在后
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
     <param name = "pobjgs_ResearchPlanEN">表实体类对象</param>
   */
  public GetDataFromgs_ResearchPlanClass(pobjgs_ResearchPlanEN: clsgs_ResearchPlanEN) {
    this.planId = pobjgs_ResearchPlanEN.planId; // 计划Id
    this.statusId = pobjgs_ResearchPlanEN.statusId; // 状态
    this.planTypeId = pobjgs_ResearchPlanEN.planTypeId; // 类型
    //  this.topicId = pobjgs_ResearchPlanEN.topicId;// 主题
    this.planContent = pobjgs_ResearchPlanEN.planContent; // 计划内容
    this.responsibleUser = pobjgs_ResearchPlanEN.responsibleUser; // 负责人/小组
    this.startDate = pobjgs_ResearchPlanEN.startDate; // 开始日期
    this.endDate = pobjgs_ResearchPlanEN.endDate; // 截止日期
    // this.isSubmit = pobjgs_ResearchPlanEN.isSubmit;// 是否提交
    this.updUser = pobjgs_ResearchPlanEN.updUser; // 修改人
    this.updDate = pobjgs_ResearchPlanEN.updDate; // 修改日期
    this.memo = pobjgs_ResearchPlanEN.memo; // 备注
  }

  /* 根据关键字获取相应的记录的对象
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async UpdateRecord(strPlanId: string) {
    this.btnOKUpd = '确认修改';
    this.btnCancel = '取消修改';
    this.keyId = strPlanId;
    try {
      const responseText = await gs_ResearchPlan_GetObjByPlanIdAsync(strPlanId);
      const objgs_ResearchPlanEN: clsgs_ResearchPlanEN = <clsgs_ResearchPlanEN>responseText;
      this.GetDataFromgs_ResearchPlanClass(objgs_ResearchPlanEN);
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 修改记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   */
  public async UpdateRecordSave() {
    const strThisFuncName = this.UpdateRecordSave.name;

    const objgs_ResearchPlanEN: clsgs_ResearchPlanEN = new clsgs_ResearchPlanEN();
    objgs_ResearchPlanEN.SetPlanId(this.keyId);
    await this.PutDataTogs_ResearchPlanClass(objgs_ResearchPlanEN);
    objgs_ResearchPlanEN.sfUpdFldSetStr = objgs_ResearchPlanEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objgs_ResearchPlanEN.planId == '' || objgs_ResearchPlanEN.planId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await gs_ResearchPlan_UpdateRecordAsync(objgs_ResearchPlanEN);
      const returnBool = !!responseText;

      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 根据关键字列表删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   */
  public async DelMultiRecord(arrPlanId: Array<string>) {
    try {
      const responseText = await gs_ResearchPlan_Delgs_ResearchPlansAsync(arrPlanId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 显示{0}对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
     <param name = "divContainer">显示容器</param>
     <param name = "objgs_ResearchPlan">需要显示的对象</param>
   */
  public Showgs_ResearchPlanObj(
    divContainer: HTMLDivElement,
    objgs_ResearchPlan: clsgs_ResearchPlanEN,
  ) {
    const strThisFuncName = this.Showgs_ResearchPlanObj.name;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const sstrKeys = GetObjKeys(objgs_ResearchPlan);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objgs_ResearchPlan.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = `${strKey}:${strValue}`;
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /* 函数功能:从界面列表中获取第一个关键字的值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
     <param name = "pobjgs_ResearchPlanEN">表实体类对象</param>
    <returns>列表的第一个关键字值</returns>
   */
  public GetFirstKey(): string {
    if (arrSelectedKeys.length == 1) {
      return arrSelectedKeys[0];
    } else {
      alert(`请选择一个关键字！目前选择了:${arrSelectedKeys.length}个关键字。`);
      return '';
    }
  }

  /*
    演示Session 操作
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Demo_Session)
    */
  public async Demo_Session() {
    try {
      //设置Session
      const strUserId = 'TestUserId';
      await this.SetSessionAsync('userId', strUserId);
      //获取Session
      const strUserId_Value1 = await this.GetSessionAsync('userId');
      console.log(`strUserId_Value1:${strUserId_Value1}`);
      //获取Session方法2：直接读取页面中的hidUserId
      const strUserId_Value2 = this.hidUserId;
      console.log(`strUserId_Value2:${strUserId_Value2}`);
    } catch (e: any) {
      const strMsg = `演示Session不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
    设置Session
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetSessionAsync)
    <param name = "Key">关键字</param>
    <param name = "Value">值</param>
    */
  public SetSessionAsync(Key: string, Value: string): Promise<void> {
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: strUrl_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(`strKey, strValue=${strKey}${strValue}`);
        },
      });
    });
  }

  /*
    获取Session 关键字的值
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetSessionAsync)
    <param name = "Key">关键字</param>
     <return>值</return>
    */
  public GetSessionAsync(Key: string): Promise<string> {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl_Session_GetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
        },
        success(data) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(`strKey, strValue=${strKey}${strValue}`);
          resolve(data);
        },
        error(result) {
          console.log(result);
          console.log(JSON.stringify(result));
          if (result.statusText == 'error') {
            const strInfo = `网络错误！访问网络不成功！`;
            reject(strInfo);
          } else {
            reject(result.statusText);
          }
        },
      });
    });
  }
  /*
   * 设置取消按钮的标题
   */
  public set btnCancel(value: string) {
    $('#btnCancel').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnOKUpd(): string {
    return $('#btnOKUpd').html();
  }
  /*
   * 设置确定按钮的标题
   */
  public set btnOKUpd(value: string) {
    $('#btnOKUpd').html(value);
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }
  /*
   * 获取当前页序号
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 添加、修改用的层名
   */
  public set DivName(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidDivName', value);
  }
  /*
   * 截止日期
   */
  public set endDate(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtEndDate', value);
  }
  /*
   * 截止日期
   */
  public get endDate(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtEndDate');
  }
  // /*
  //  * 设置排序字段-相当使用ViewState功能
  //  */
  // public set hidSortvgs_ResearchPlanBy(value: string) {
  //   const divName = this.getDivName(enumDivType.LayOut_01);
  //   SetInputValueInDivObj(divName, 'hidSortvgs_ResearchPlanBy', value);
  // }
  // /*
  //  * 设置排序字段
  //  */
  // public get hidSortvgs_ResearchPlanBy(): string {
  //   const divName = this.getDivName(enumDivType.LayOut_01);
  //   return GetInputValueInDivObj(divName, 'hidSortvgs_ResearchPlanBy');
  // }
  /*
   * 用户Id
   */
  public get hidUserId(): string {
    return userStore.getUserId;
  }
  // /*
  // * 是否提交
  //*/
  // public set isSubmit(value: boolean) {
  //     $("#chkIsSubmit").attr("checked", value);
  // }
  // /*
  // * 是否提交
  //*/
  // public get isSubmit(): boolean {
  //     return $("#chkIsSubmit").prop("checked");
  // }
  /*
   * 设置关键字的值
   */
  public set keyId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidKeyId', value);
  }
  /*
   * 设置关键字的值
   */
  public get keyId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidKeyId');
  }
  /*
   * 备注
   */
  public set memo(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtMemo', value);
  }
  /*
   * 备注
   */
  public get memo(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtMemo');
  }
  /*
   * 设置操作类型：Add||Update||Detail
   */
  public set opType(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidOpType', value);
  }
  /*
   * 设置操作类型：Add||Update||Detail
   */
  public get opType(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidOpType');
  }
  /*
   * 计划内容
   */
  public set planContent(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtPlanContent', value);
  }
  /*
   * 计划内容
   */
  public get planContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPlanContent');
  }
  /*
   * 计划Id
   */
  public set planId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtPlanId', value);
  }
  /*
   * 计划Id
   */
  public get planId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPlanId');
  }
  /*
   * 负责人/小组
   */
  public set responsibleUser(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtResponsibleUser', value);
  }
  /*
   * 负责人/小组
   */
  public get responsibleUser(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtResponsibleUser');
  }
  /*
   * 开始日期
   */
  public set startDate(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtStartDate', value);
  }
  /*
   * 开始日期
   */
  public get startDate(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtStartDate');
  }
  /*
   * 状态Id
   */
  public set statusId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlStatusId', value);
  }
  /*
   * 状态Id
   */
  public get statusId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlStatusId');
  }
  /*
   * 状态Id
   */
  public get StatusId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlStatusId_q');
  }
  // /*
  // * 主题编号
  //*/
  // public set topicId(value: string) {
  //     $("#ddlTopicId").val(value);
  // }
  // /*
  // * 主题编号
  //*/
  // public get topicId(): string {
  //     return $("#ddlTopicId").val();
  // }
  /*
   * 栏目主题
   */
  public get topicName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtTopicName_q');
  }
  /*
   * 修改日期
   */
  public set updDate(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtUpdDate', value);
  }
  /*
   * 修改日期
   */
  public get updDate(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUpdDate');
  }
  /*
   * 修改人
   */
  public set updUser(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtUpdUser', value);
  }
  /*
   * 修改人
   */
  public get updUser(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUpdUser');
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
