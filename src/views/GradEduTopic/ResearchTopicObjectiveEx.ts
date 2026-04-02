import $ from 'jquery';
import { Public_TopicObjective } from '../GradEduPublicPage/Public_TopicObjective';
import { RTTopicObjectiveRela_EditEx } from './RTTopicObjectiveRela_EditEx';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { TopicObjectiveCRUD } from '@/viewsBase/GradEduTopic/TopicObjectiveCRUD';
import { RTTopicObjectiveRelaCRUD } from '@/viewsBase/GradEduTopic/RTTopicObjectiveRelaCRUD';
import { clsRTTopicObjectiveRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTTopicObjectiveRelaEN';
import { clsvRTTopicObjectiveRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTTopicObjectiveRelaEN';
import { clsvTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN';
import {
  RTTopicObjectiveRela_DelRecordAsync,
  RTTopicObjectiveRela_GetObjBymIdAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTTopicObjectiveRelaWApi';
import { vTopicObjective_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvTopicObjectiveWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetButtonObjLstInDivObjN,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTabV2Where_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
import {
  vRTViewpoint_GetObjLstByPagerAsync,
  vRTViewpoint_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointWApi';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { vPaperSubViewpoint_GetObjLstByPagerAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { clsRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointEN';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';

declare let window: any;
/* WApiTopicObjective_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ResearchTopicObjectiveEx extends RTTopicObjectiveRelaCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public sortvRTTopicObjectiveRelaBy = '';
  //客观数据列表
  public mstrListDivObjective = 'divObjectiveDataLst';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvTopicObjectiveBy: string = "topicObjectiveId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 30;
  }
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
  //客观事实
  public mstrListTopicObjectiveDivPaper = 'divRtTopicObjectiveDataLst';
  //客观依据

  public mstrListBasisTopicObjectiveDivPaper = 'divBasisRtTopicObjectiveDataLst';

  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    this.BindGv_vRTTopicObjectiveRela(divName);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vRTTopicObjectiveRela':
        alert('该类没有绑定该函数：[this.BindGv_vRTTopicObjectiveRela_Cache]！');
        //this.BindGv_vRTTopicObjectiveRelaCache();;
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
    let objPage: ResearchTopicObjectiveEx;
    let objPageEdit;
    if (RTTopicObjectiveRelaCRUD.objPageCRUD == null) {
      RTTopicObjectiveRelaCRUD.objPageCRUD = new ResearchTopicObjectiveEx(divLayout);
      objPage = <ResearchTopicObjectiveEx>RTTopicObjectiveRelaCRUD.objPageCRUD;
    } else {
      objPage = <ResearchTopicObjectiveEx>RTTopicObjectiveRelaCRUD.objPageCRUD;
    }

    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new RTTopicObjectiveRela_EditEx('RTTopicObjectiveRela_EditEx', objPage);

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
        objPageEdit = new RTTopicObjectiveRela_EditEx('RTTopicObjectiveRela_EditEx', objPage);

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
        AccessBtnClickDefault(strCommandName, 'ResearchTopicObjectiveExEx.btn_Click');

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
        TopicObjectiveCRUD.sortvTopicObjectiveBy = 'updDate Desc';

        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vTopicObjective();
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  //客观事实
  public async liObjectiveFactClick(divName: HTMLDivElement) {
    try {
      //主题客观关系
      this.sortvRTTopicObjectiveRelaBy = 'classificationId Asc,updDate Desc';
      //客观
      TopicObjectiveCRUD.sortvTopicObjectiveBy = 'updDate Desc';

      await this.BindGv_vRTTopicObjectiveRela(divName);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取客观事实列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //客观依据
  public async liObjectiveBasisClick(divName: HTMLDivElement) {
    try {
      //主题客观关系
      this.sortvRTTopicObjectiveRelaBy = 'classificationId Asc,updDate Desc';
      //客观
      TopicObjectiveCRUD.sortvTopicObjectiveBy = 'updDate Desc';
      await this.BasisBindGv_vRTTopicObjectiveRela(divName);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取客观依据列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevTopicObjectiveCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1=1';
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strUserId = userStore.getUserId;

    const txtObjUpdName_q = GetInputValueInDivObj(divName, 'txtObjUpdName_q');

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.objectiveName_q != '') {
        strWhereCond += ` And ${clsvTopicObjectiveEN.con_ObjectiveName} like '%${this.objectiveName_q}%'`;
      }

      if (clsPubLocalStorage.eduClsTypeId == '0001') {
        $('#ddlCurrEduCls_q3').hide();
        $('#ddlPublicViewPoint').show();
        if ($('#ddlPublicViewPoint').val() == '1') {
          strWhereCond += ` And ${clsvTopicObjectiveEN.con_UpdUser} in('${clsPubLocalStorage.TopicUserList}')`;
        } else {
          strWhereCond += ` And ${clsvTopicObjectiveEN.con_ShareId} ='03'`;
        }
      } else {
        //用户
        if (txtObjUpdName_q != '') {
          const strUserName = txtObjUpdName_q;
          const objUser = arrUsers.find((x) => x.userName == strUserName);

          if (objUser != null) {
            strWhereCond += ` And ${clsvTopicObjectiveEN.con_UpdUser} = '${objUser.userId}'`;
          }
        }
      }

      if (
        GetSelectValueInDivObj(divName, 'ddlCurrEduCls_q3') != '' &&
        $('#ddlCurrEduCls_q3').val() != '0'
      ) {
        strWhereCond += ` And idCurrEduCls='${GetSelectValueInDivObj(
          divName,
          'ddlCurrEduCls_q3',
        )}'`;
      } else {
        strWhereCond += ` And idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
      }

      //根据类型来查询；
      //根据传入的hidObjectiveTypeId 来区分是事实或依据
      const strhidObjectvieTypeId = GetInputValueInDivObj(divName, 'hidObjectiveTypeId');
      if (strhidObjectvieTypeId != '') {
        strWhereCond += ` And ${clsvTopicObjectiveEN.con_ObjectiveType} = '${strhidObjectvieTypeId}'`;
      }

      //只能查询提交的客观数据
      strWhereCond += ` And ${clsvTopicObjectiveEN.con_IsSubmit} = 'true'`;

      //排除获取已存在的关系数据 根据当前用户；
      strWhereCond += ` And topicObjectiveId not in (select topicObjectiveId from vRTTopicObjectiveRela where topicId = '${strTopicId}' And updUser = '${strUserId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineTopicObjectiveCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vTopicObjective() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strWhereCond = await this.CombinevTopicObjectiveCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvTopicObjectiveObjLst: Array<clsvPaperSubViewpointEN> = [];
    try {
      this.recCount = await vTopicObjective_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: TopicObjectiveCRUD.sortvTopicObjectiveBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvTopicObjectiveObjLst = await vPaperSubViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }

    try {
      const strPageType = GetInputValueInDivObj(divName, 'hidObjectiveTypeId'); //页面参数
      const strHtml = await Public_TopicObjective.BindList_vTopicObjective(
        '02',
        strPageType,
        arrvTopicObjectiveObjLst,
      );
      //拼接；
      $('#divObjectiveDataLst').html(strHtml);

      if (arrvTopicObjectiveObjLst.length > 10) {
        //$("#divPager3").show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
      console.log('完成BindGv_vTopicObjective!');
      //this.BindTab_vTopicObjective(strListDiv, arrvTopicObjectiveObjLst);
      //console.log("完成BindGv_vTopicObjective!");
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 显示vTopicObjective对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
     <param name = "divContainer">显示容器</param>
     <param name = "arrTopicObjectiveObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_vTopicObjective(
    divContainer: HTMLDivElement,
    arrvTopicObjectiveObjLst: Array<clsvTopicObjectiveEN>,
  ) {
    const strThisFuncName = this.BindTab_vTopicObjective.name;
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
        fldName: 'objectiveName',
        colHeader: '客观名称',
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
        fldName: 'objectiveContent',
        colHeader: '客观内容',
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
        fldName: 'objectiveTypeName',
        colHeader: '客观类型名称',
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
        colHeader: '编辑人',
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
        colHeader: '确定',
        text: '确定',
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
          btn1.setAttribute('onclick', `btnOkObjectiveInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
    ];
    //BindTab(o, arrvTopicObjectiveObjLst, arrDataColumn, "topicObjectiveId");
    BindTabV2Where_V(
      divContainer,
      arrvTopicObjectiveObjLst,
      arrDataColumn,
      'topicObjectiveId',
      'TopicObjectiveFact',
    );
    if (arrvTopicObjectiveObjLst.length > 10) {
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
    }
  }

  //概念查询按钮
  public async btnQueryObjective_Click() {
    //查询客观列表
    await this.BindGv_vTopicObjective();
  }
  //分页数据
  /* 函数功能:在数据 列表中跳转到某一页 观点列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
 <param name = "intPageIndex">页序号</param>
*/
  public IndexPageSeven(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_vTopicObjective();
  }

  //添加客观关系弹出客观列表按钮
  public async btnAddTopicObjectiveRela_Click() {
    const strRoleId = userStore.getRoleId;
    if (strRoleId == '00620003') {
      await clsDropDownList.BindDdl_CurrEduClsStu('ddlCurrEduCls_q3');
    } else {
      await clsDropDownList.BindDdl_CurrEduClsTea('ddlCurrEduCls_q3');
    }
    await this.BindGv_vTopicObjective();
  }

  public async SortByObjectiveFact(strSortByFld: string) {
    if (TopicObjectiveCRUD.sortvTopicObjectiveBy.indexOf(strSortByFld) >= 0) {
      if (TopicObjectiveCRUD.sortvTopicObjectiveBy.indexOf('Asc') >= 0) {
        TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Desc`;
      } else {
        TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Asc`;
      }
    } else {
      TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_vTopicObjective();
  }

  //////////////////////////////////////客观事实关系//////////////////////////////////////
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevRTTopicObjectiveRelaCondition(): Promise<string> {
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTTopicObjectiveRelaEN.con_TopicId} = '${strTopicId}'`;
      }
      const strClassificationId = this.classificationId;
      if (strClassificationId != '') {
        strWhereCond += ` And ${clsvRTTopicObjectiveRelaEN.con_ClassificationId} = '${strClassificationId}'`;
      }
      const strViewsId = this.viewsId;
      if (strViewsId != '') {
        strWhereCond += ` And ${clsvRTTopicObjectiveRelaEN.con_mId} = ${strViewsId}`;
      }

      //查询客观事实
      strWhereCond += ` And ${clsRTViewpointEN.con_gsKnowledgeTypeId} = '${enumgs_KnowledgeType.ObjectiveFact_04}'`;
      //读取session角色 来判断绑定不同数据列表
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTTopicObjectiveRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vRTTopicObjectiveRela(divName: HTMLDivElement) {
    // const strListDiv: string = this.mstrListTopicObjectiveDivPaper;
    const strWhereCond = await this.CombinevRTTopicObjectiveRelaCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvRTTopicObjectiveRelaObjLst: Array<clsvRTViewpointEN> = [];
    try {
      this.recCount = await vRTViewpoint_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.sortvRTTopicObjectiveRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvRTTopicObjectiveRelaObjLst = await vRTViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    try {
      this.BindList_vRTTopicObjectiveRela(divName, '01', arrvRTTopicObjectiveRelaObjLst);
      console.log('完成BindGv_vRTTopicObjectiveRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  public async BindList_vRTTopicObjectiveRela(
    divName: HTMLDivElement,
    strType: string,
    arrvRTTopicObjectiveRelaObjLst: Array<clsvRTViewpointEN>,
  ) {
    const divDataLst = GetDivObjInDivObj(divName, 'divDataLst');

    $('#hidPageType').val(strType);
    const strPageType = strType; //页面参数
    const strHtml = await Public_TopicObjective.BindList_vRTTopicObjectiveRela(
      '06',
      strPageType,
      arrvRTTopicObjectiveRelaObjLst,
    );

    if (strPageType == '01') {
      divDataLst.innerHTML = strHtml;

      if (arrvRTTopicObjectiveRelaObjLst.length > 10) {
        $('#divPagerObjective').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(divName, this, this.divName4Pager);
      }
    } else if (strPageType == '02') {
      divDataLst.innerHTML = strHtml;

      if (arrvRTTopicObjectiveRelaObjLst.length > 10) {
        $('#divPagerBasis').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(divName, this, this.divName4Pager);
      }
    }
    this.SetEventForObjective(divName);
    //拼接；
  }
  public SetEventForObjective(objLayOut: HTMLDivElement) {
    {
      const arrbtnAddToCurrTopicId = GetButtonObjLstInDivObjN(objLayOut, 'btnUpdObjective');
      for (const btnUpdObjective of arrbtnAddToCurrTopicId) {
        if (btnUpdObjective != null) {
          const strKeyId = btnUpdObjective.getAttribute('keyid');

          if (strKeyId != null) {
            const strTopicId = clsPrivateSessionStorage.topicIdInTree;

            btnUpdObjective.setAttribute('keyId2', strKeyId);
            const arr = strKeyId.split('|');
            if (arr.length != 2) continue;
            const objData = { subViewpointId: arr[0], paperId: arr[1], topicId: strTopicId };
            (function (objData) {
              btnUpdObjective.onclick = function () {
                ResearchTopicObjectiveEx.vuebtn_Click('UpdObjective', objData);
              };
            })(objData);
          }
        }
      }
    }
    {
      const arrbtnAddToCurrTopicId = GetButtonObjLstInDivObjN(
        objLayOut,
        'btnAddClassificationRecordInTab',
      );
      for (const btnAddClassificationRecordInTab of arrbtnAddToCurrTopicId) {
        if (btnAddClassificationRecordInTab != null) {
          const strKeyId = btnAddClassificationRecordInTab.getAttribute('keyid');

          if (strKeyId != null) {
            btnAddClassificationRecordInTab.setAttribute('keyId2', strKeyId);

            (function (strKeyId) {
              btnAddClassificationRecordInTab.onclick = function () {
                ResearchTopicObjectiveEx.vuebtn_Click('AddClassificationRecordInTab', strKeyId);
              };
            })(strKeyId);
          }
        }
      }
    }
    {
      const arrbtnAddToCurrTopicId = GetButtonObjLstInDivObjN(
        objLayOut,
        'btnUpdateClassificationRecordInTab',
      );
      for (const btnUpdateClassificationRecordInTab of arrbtnAddToCurrTopicId) {
        if (btnUpdateClassificationRecordInTab != null) {
          const strKeyId = btnUpdateClassificationRecordInTab.getAttribute('keyid');

          if (strKeyId != null) {
            const strTopicId = clsPrivateSessionStorage.topicIdInTree;
            const arr = strKeyId.split('|');
            if (arr.length != 2) continue;
            // const strKeyId = `${objvConceptEx.subViewpointId}|${objvConceptEx.memo}`;
            btnUpdateClassificationRecordInTab.setAttribute('keyId2', strKeyId);
            const objData = { subViewpointId: arr[0], strClassificationId: arr[1] };
            (function (objData) {
              btnUpdateClassificationRecordInTab.onclick = function () {
                ResearchTopicObjectiveEx.vuebtn_Click('UpdateClassificationRecordInTab', objData);
              };
            })(objData);
          }
        }
      }
    }
  }
  /* 
在数据表里删除记录 删除客观事实
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
*/
  public async btnDelObjectiveRecordInTab_Click(strKeyId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      const strUserId = userStore.getUserId;
      //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
      RTTopicObjectiveRela_GetObjBymIdAsync(lngKeyId).then((jsonData) => {
        const objRTTopicObjectiveEN: clsRTTopicObjectiveRelaEN = <clsRTTopicObjectiveRelaEN>(
          jsonData
        );
        if (objRTTopicObjectiveEN != null) {
          if (objRTTopicObjectiveEN.updUser == strUserId) {
            if (GetInputValueInDivObj(divName, 'hidPageType') == '01') {
              this.DelObjectiveRecord(lngKeyId, '01');
            } else if (GetInputValueInDivObj(divName, 'hidPageType') == '02') {
              this.DelObjectiveRecord(lngKeyId, '02');
            }
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

  //删除客观依据
  public async btnDelBasisObjectiveRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      const strUserId = userStore.getUserId;
      //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
      await RTTopicObjectiveRela_GetObjBymIdAsync(lngKeyId).then((jsonData) => {
        const objRTTopicObjectiveBasisEN: clsRTTopicObjectiveRelaEN = <clsRTTopicObjectiveRelaEN>(
          jsonData
        );
        if (objRTTopicObjectiveBasisEN != null) {
          if (objRTTopicObjectiveBasisEN.updUser == strUserId) {
            //01 客观依据
            this.DelObjectiveRecord(lngKeyId, '02');
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
  public async DelObjectiveRecord(lngmId: number, TypeId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    try {
      const responseText = await RTTopicObjectiveRela_DelRecordAsync(lngmId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        if (TypeId == '01') {
          //客观事实
          this.BindGv_vRTTopicObjectiveRela(divName);
        } else {
          //客观依据
          this.BasisBindGv_vRTTopicObjectiveRela(divName);
        }
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

  //////////////////////////////////////。。。。。。。。。。。。。。。。。。。客观依据关系
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public BasisCombinevRTTopicObjectiveRelaCondition(): string {
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTTopicObjectiveRelaEN.con_TopicId} = '${strTopicId}'`;
      }

      const strClassificationId = this.classificationId;
      if (strClassificationId != '') {
        strWhereCond += ` And ${clsvRTTopicObjectiveRelaEN.con_ClassificationId} = '${strClassificationId}'`;
      }
      const strViewsId = this.viewsId;
      if (strViewsId != '') {
        strWhereCond += ` And ${clsvRTTopicObjectiveRelaEN.con_mId} = ${strViewsId}`;
      }

      //查询客观依据
      //      strWhereCond += ` And ${clsvRTTopicObjectiveRelaEN.con_ObjectiveType} = '02'`;
      strWhereCond += ` And ${clsvRTViewpointEN.con_gsKnowledgeTypeId} = '${enumgs_KnowledgeType.ObjectiveData_05}'`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTTopicObjectiveRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /*  客观依据
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BasisBindGv_vRTTopicObjectiveRela(divName: HTMLDivElement) {
    // const strListDiv: string = this.mstrListBasisTopicObjectiveDivPaper;
    const strWhereCond = this.BasisCombinevRTTopicObjectiveRelaCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvRTTopicObjectiveRelaObjLst: Array<clsvRTViewpointEN> = [];
    try {
      this.recCount = await vRTViewpoint_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.sortvRTTopicObjectiveRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvRTTopicObjectiveRelaObjLst = await vRTViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    try {
      this.BindList_vRTTopicObjectiveRela(divName, '02', arrvRTTopicObjectiveRelaObjLst);
      console.log('完成BindGv_vRTTopicObjectiveRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 主题客观事实
   */
  public async SortByRTObjectiveFact(strSortByFld: string) {
    if (TopicObjectiveCRUD.sortvTopicObjectiveBy.indexOf(strSortByFld) >= 0) {
      if (TopicObjectiveCRUD.sortvTopicObjectiveBy.indexOf('Asc') >= 0) {
        TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Desc`;
      } else {
        TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Asc`;
      }
    } else {
      TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Asc`;
    }
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    await this.BindGv_vRTTopicObjectiveRela(divName);
  }

  /* 主题客观依据
   */
  public async SortByRTObjectiveBasis(strSortByFld: string) {
    if (TopicObjectiveCRUD.sortvTopicObjectiveBy.indexOf(strSortByFld) >= 0) {
      if (TopicObjectiveCRUD.sortvTopicObjectiveBy.indexOf('Asc') >= 0) {
        TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Desc`;
      } else {
        TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Asc`;
      }
    } else {
      TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Asc`;
    }
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    await this.BasisBindGv_vRTTopicObjectiveRela(divName);
  }
  public get classificationId(): string {
    return ResearchTopicObjectiveEx.GetPropValue('classificationId');
  }

  public get viewsId(): string {
    return ResearchTopicObjectiveEx.GetPropValue('viewsId');
  }
}
