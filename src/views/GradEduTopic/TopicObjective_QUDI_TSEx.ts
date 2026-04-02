import $ from 'jquery';
import { Public_TopicObjective } from '../GradEduPublicPage/Public_TopicObjective';
import { Pub_PaperList } from '../GradEduPublicPage/Pub_PaperList';
import { TopicObjective_EditEx } from './TopicObjective_EditEx';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { TopicObjectiveCRUD } from '@/viewsBase/GradEduTopic/TopicObjectiveCRUD';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsObjectiveAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsObjectiveAttachmentEN';
import { clsRTTopicObjectiveRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTTopicObjectiveRelaEN';
import { clsTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsTopicObjectiveEN';
import { clsvTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { LiteratureType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { BindDdl_ObjLst, BindTab_V, GetCheckedKeyIds, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { clsTopicObjectiveVerEN } from '@/ts/L0Entity/GradEduTopic/clsTopicObjectiveVerEN';
import { SysComment_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTools/clsSysCommentWApi';
import {
  ObjectiveAttachment_AddNewRecordAsync,
  ObjectiveAttachment_DelObjectiveAttachmentsByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsObjectiveAttachmentWApi';
import { RTTopicObjectiveRela_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTTopicObjectiveRelaWApi';
import {
  TopicObjectiveVer_DelTopicObjectiveVersAsync,
  TopicObjectiveVer_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsTopicObjectiveVerWApi';
import {
  TopicObjective_GetObjLstAsync,
  TopicObjective_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsTopicObjectiveWApi';
import {
  vTopicObjective_GetObjLstByPagerAsync,
  vTopicObjective_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvTopicObjectiveWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { vPaperSubViewpoint_GetObjLstByPagerAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare function HideDialogThree(): void;
declare let window: any;
/* WApiTopicObjective_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class TopicObjective_QUDI_TSEx extends TopicObjectiveCRUD implements IShowList {
  //论文列表
  public mstrListDivPaper = 'divPaperDataLst';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvTopicObjectiveBy: string = "topicObjectiveId";
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
    console.log('InitVarSet in QxPrjMenusCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPrjMenusCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    this.BindGv_vTopicObjective(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vTopicObjective':
        alert('该类没有绑定该函数：[this.BindGv_vTopicObjective_Cache]！');
        //this.BindGv_vTopicObjectiveCache();;
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
    let objPage: TopicObjective_QUDI_TSEx;
    // let objPageEdit;
    if (TopicObjectiveCRUD.objPageCRUD == null) {
      TopicObjectiveCRUD.objPageCRUD = new TopicObjective_QUDI_TSEx(divLayout);
      objPage = <TopicObjective_QUDI_TSEx>TopicObjectiveCRUD.objPageCRUD;
    } else {
      objPage = <TopicObjective_QUDI_TSEx>TopicObjectiveCRUD.objPageCRUD;
    }

    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);

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
        AccessBtnClickDefault(strCommandName, 'TopicObjectiveCRUDExEx.btn_Click');

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
      this.divName4Pager = 'divPager1'; //列表中的分页区的层Id
      if (userStore.getUserId != '') {
        ////建立缓存
        const strViewType = '01';
        $('#hidViewType').val(strViewType);
        //const arrvTopicObjective_Cache = await vTopicObjective_GetObjLstAsync("1=1");

        TopicObjectiveCRUD.sortvTopicObjectiveBy = 'updDate Desc';

        //用户下拉框绑定
        //const ddl_UserId_q = await this.BindDdl_UserId("ddlUserId_q");

        await clsDropDownList.BindDdl_UserIdInvTopicObjectiveFact_Cache('ddlObjectiveUserId_q');

        //论文用户下拉框绑定
        await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q'); //用户查询区域

        //文献类型；
        await this.BindDdl_LiteratureTypeId('ddlLiteratureTypeId_q');
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vTopicObjective(this.thisDivList);
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }
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
      const arrPaperObjLst = await LiteratureType_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrPaperObjLst,
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

  ////获取客观事实用户
  //public BindDdl_UserId(ddlUserId: string, strWhereCond: string = "1=1 And objectiveType ='01'") {
  //    //strWhereCond = " 1 =1 ";
  //    const objDdl = document.getElementById(ddlUserId);
  //    if (objDdl == null) {
  //        const strMsg = `下拉框：${ddlUserId} 不存在！`;
  //        alert(strMsg);
  //        throw (strMsg);
  //    }
  //    return new Promise((resolve, reject) => {
  //        try {
  //            const responseText = vTopicObjectiveEx_GetTopicObjectiveUserObjLstAsync(strWhereCond).then((jsonData) => {
  //                strIdCurrEduclsarrUserObjLst: Array<clsvTopicObjectiveEN> = <Array<clsvTopicObjectiveEN>>jsonData;
  //                BindDdl_ObjLst(ddlUserId, arrUserObjLst, clsvTopicObjectiveEN.con_UpdUser, clsvTopicObjectiveEN.con_UserName, "编辑用户");
  //                console.log("完成BindDdl_UserId!");
  //                resolve(jsonData);
  //            });
  //        }
  //        catch (e:any) {
  //            strIdCurrEduclsstrMsg: string = ` const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;   console.error(strMsg);
  //            alert(strMsg);
  //        }
  //    });
  //}
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
 <returns>条件串(strWhereCond)</returns>
*/
  public async CombinevTopicObjectiveCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.objectiveName_q != '') {
        strWhereCond += ` And ${clsvTopicObjectiveEN.con_ObjectiveName} like '%${this.objectiveName_q}%'`;
      }
      //if (this.userName_q != "") {
      //    strWhereCond += ` And ${clsvTopicObjectiveEN.con_UserName} like '%${this.userName_q}%'`;
      //}
      if (this.User_q != '' && this.User_q != '0') {
        strWhereCond += ` And ${clsvTopicObjectiveEN.con_UpdUser} = '${this.User_q}'`;
      }
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsvTopicObjectiveEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsvTopicObjectiveEN.con_UpdDate} < '${this.EndDate_q}'`;
      }

      //判断客观类型 区分是客观事实、客观依据
      const strhidObjectiveTypeId = GetInputValueInDivObj(divName, 'hidObjectiveTypeId');
      if (strhidObjectiveTypeId != '') {
        strWhereCond += ` And ${clsvTopicObjectiveEN.con_ObjectiveType} = '${strhidObjectiveTypeId}'`;
      }

      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      $('#hidUserId').val(strUserId);
      //$('#lnkUserName').html(objvUserRoleRelation.userName + '(' + objvUserRoleRelation.roleName + ')');

      //判断角色
      //管理员
      if (
        strRoleId == enumQxRoles.System_Admin_00620001 ||
        strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        $('#btnCancelSubmit').show();
      } else if (strRoleId == '00620002') {
        $('#btnCancelSubmit').show();
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        //strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + objvUserRoleRelation.userId + "' And isEffective='1') And isEffective='1')";
        //strWhereCond += " and updUser in (select stuId from vCurrEduClsStu where idCurrEduCls = '" + clsPubLocalStorage.idCurrEduCls + "') or updUser = '" + strUserId + "'";
        //strWhereCond += " and updUser in (select stuId from vCurrEduClsStu where idCurrEduCls = '" + clsPubLocalStorage.idCurrEduCls + "')";
        //strWhereCond += ` And ${clsvTopicObjectiveEN.con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;
        //strIdCurrEduclsstrhidObjectiveTypeId = $("#hidObjectiveTypeId").val();
        //if (strhidObjectiveTypeId != "") {
        //    strWhereCond += ` And ${clsvTopicObjectiveEN.con_ObjectiveType} = '${strhidObjectiveTypeId}'`;
        //}
        //$("#btnCancelSubmit").hide();
      } else {
        //学生；
        const strViewType = GetInputValueInDivObj(divName, 'hidViewType');
        if (strViewType == '01') {
          strWhereCond += ` And ${clsvTopicObjectiveEN.con_UpdUser} = '${strUserId}'`;
        } else {
          strWhereCond += ` And ${clsvTopicObjectiveEN.con_UpdUser} <> '${strUserId}'`;
        }
        //学生00620003
        $('#btnCancelSubmit').hide();
        // strWhereCond += ` And ${clsResearchTopicEN.con_TopicProposePeople} = '${objvUserRoleRelation.userId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineTopicObjectiveCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async btnQuery_Click() {
    try {
      this.BindGv_vTopicObjective(this.thisDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `查询不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vTopicObjective(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName = this.getDivName(enumDivType.LayOut_01);
    this.divName4Pager = 'divPager1'; //列表中的分页区的层Id
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
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

      const strhidObjectiveTypeId = GetInputValueInDivObj(divName, 'hidObjectiveTypeId');
      const strHtml = await Public_TopicObjective.BindList_vTopicObjective(
        '01',
        strhidObjectiveTypeId,
        arrvTopicObjectiveObjLst,
      );

      const strViewType = GetInputValueInDivObj(divName, 'hidViewType');
      if (strViewType == '01') {
        //拼接；
        $('#divDataLst').html(strHtml);
      } else {
        //拼接；
        $('#divOtherDataLst').html(strHtml);
      }

      if (this.recCount >= 10) {
        $('#divPager1').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvTopicObjectiveObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
    //    alert(strMsg);
    //    return;
    //}
    //try {
    //    this.BindTab_vTopicObjective(strListDiv, arrvTopicObjectiveObjLst);
    //    console.log("完成BindGv_vTopicObjective!");
    //}
    //catch (e:any) {
    //    console.error('catch(e)=');
    //    console.error(e);
    //    strIdCurrEduclsstrMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
    //    alert(strMsg);
    //}
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
        fldName: 'objectiveType',
        colHeader: '客观类型',
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
    BindTab_V(divDataLst, arrvTopicObjectiveObjLst, arrDataColumn, 'topicObjectiveId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  ///////////////////////////////////////////////////////////////////删除数据控制；

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

      //查询和id相关的关系数据是否存在
      const strWhere1 = ` 1=1 And ${clsRTTopicObjectiveRelaEN.con_TopicObjectiveId} = '${strKeyId}'`;
      let RTVCount = 0;
      await RTTopicObjectiveRela_GetRecCountByCondAsync(strWhere1).then((jsonData) => {
        RTVCount = jsonData;
      });

      //查询和id相关的评论评分是否存在
      const strWhere2 = ` 1=1 And tableKey ='${strKeyId}' and commentTypeId='06'`;
      let commentCount = 0;
      await SysComment_GetRecCountByCondAsync(strWhere2).then((jsonData) => {
        commentCount = jsonData;
      });

      if (RTVCount > 0) {
        alert('当前数据已被引用,不能删除！');
        return;
      } else if (commentCount > 0) {
        alert('当前数据已被人评论打分,不能删除！');
        return;
      } else {
        const strTopicObjectiveVWhereCond = ` topicObjectiveId='${strKeyId}' order by updDate Asc`;
        let arrTopicObjectiveVObjLst: Array<clsTopicObjectiveVerEN> = [];
        await TopicObjectiveVer_GetObjLstAsync(strTopicObjectiveVWhereCond).then((jsonData) => {
          arrTopicObjectiveVObjLst = <Array<clsTopicObjectiveVerEN>>jsonData;
        });
        const arrSelectedKeys: Array<string> = arrTopicObjectiveVObjLst.map((x) => {
          const strId = x.topicObjectiveVId.toString();
          //strIdCurrEduclsstrKey = strId.substring(3);
          return strId;
        });

        //更新总表3个参数 主键、子表类型、页面操作类型；
        const strTopicObjectiveId = strKeyId;
        const responseText6 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
          strTopicObjectiveId,
          '07',
          '3',
          clsPubLocalStorage.idCurrEduCls,
        );
        const returnBool6 = !!responseText6;
        if (returnBool6 == true) {
          console.log('客观数据总表同步成功；');
        } else {
          console.log('客观数据总表同步失败；');
        }
        await this.VDelMultiRecord(arrSelectedKeys);
        await this.DelRecord(strKeyId);
        await this.BindGv_vTopicObjective(this.thisDivList);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //批量删除
  public async VDelMultiRecord(arrTopicObjectiveVId: Array<string>) {
    try {
      const returnInt: number = await TopicObjectiveVer_DelTopicObjectiveVersAsync(
        arrTopicObjectiveVId,
      );
      if (returnInt > 0) {
        const strInfo = `删除历史版本成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
        console.log(strInfo);
      } else {
        const strInfo = `历史版本删除记录不成功!`;
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
      //需要判断当前数据中是否包含已提交数据、如果有则不能删除
      let strKeyList;
      if (arrKeyIds.length == 0) return '';
      strKeyList = '';
      for (let i = 0; i < arrKeyIds.length; i++) {
        if (i == 0) strKeyList = `${strKeyList}'${arrKeyIds[i].toString()}'`;
        else strKeyList += `,` + `'${arrKeyIds[i].toString()}'`;
      }
      //
      const strWhereCond = ` topicObjectiveId in (${strKeyList})`;
      let arrTopicObjectiveObjLst: Array<clsTopicObjectiveEN> = [];
      await TopicObjective_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrTopicObjectiveObjLst = <Array<clsTopicObjectiveEN>>jsonData;
        //查询是否有提交的数据
        arrTopicObjectiveObjLst = arrTopicObjectiveObjLst.filter((x) => x.isSubmit == true);
        if (arrTopicObjectiveObjLst.length > 0) {
          alert('包含有已提交数据，不能删除！');
          return '';
        }
      });

      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_vTopicObjective(this.thisDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //删除观点附件
  /* 
根据关键字删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecordByWhere(strWhere: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);

    try {
      const returnInt: number = await ObjectiveAttachment_DelObjectiveAttachmentsByCondAsync(
        strWhere,
      );
      if (returnInt > 0) {
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
      } else {
        // const strInfo = `删除记录不成功!`;
        //显示信息框
        //alert(strInfo);
      }

      //在修改时候，不管是否有附件数据被清除； 都需要执行附件添加功能
      //判断是否有返回的附件路径值
      const fileOne = GetInputValueInDivObj(divName, 'hdnFileOne');
      if (fileOne != '' && fileOne != undefined) {
        //第一个附件框判断

        this.AddPaperSubAttachmentSave(fileOne, 'first');
      } else {
        const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
        if (fileTwo != '' && fileTwo != undefined) {
          this.AddPaperSubAttachmentSave(fileTwo, 'two');
        } else {
          const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
          if (fileThree != '' && fileThree != undefined) {
            this.AddPaperSubAttachmentSave(fileThree, 'three');
          }
        }
      }

      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //    ///////////////////////////////////////////////////////////////论文

  //    /* 函数功能:在数据 列表中跳转到某一页 论文列表
  //(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
  //<param name = "intPageIndex">页序号</param>
  //*/
  //    public IndexPageTwo(intPageIndex: number) {
  //        if (intPageIndex == 0) {
  //            intPageIndex = this.objPager.pageCount;
  //        }
  //        console.log("跳转到" + intPageIndex + "页");
  //        this.SetCurrPageIndex(intPageIndex);
  //        this.BindGv_vPaper();
  //    }
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
  /*
   * 论文标题
   */
  public get paperTitle_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperTitle_q');
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
   * 论文Id
   */
  public set paperId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtPaperId', value);
  }
  /*
   * 论文
   */
  public get paperId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperId');
  }
  /* 把所有的查询控件内容组合成一个条件串
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
  <returns>条件串(strWhereCond)</returns>
*/
  public async CombinevPaperCondition(): Promise<string> {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }

      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      }
      //用户
      if (this.readUser_q != '' && this.readUser_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.readUser_q}'`;
      }

      //只查询提交的论文数据
      strWhereCond += ` And ${clsPaperEN.con_IsSubmit} = 'true'`;
      //排除获取已被当前观点引用过的论文数据；
      //strWhereCond += ` And paperId not in (select paperId from RTPaperRela where viewpointId = '${strTopicId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //选择论文弹出列表数据；
  public async selectPaper_Click() {
    const objPage_Paper = new Pub_PaperList(this.divLayout);
    await objPage_Paper.PageLoad();
    //await objPage_Paper.BindGv_vPaper();
  }
  //查询论文列表
  public async btnPaperQuery_Click() {
    const objPage_Paper = new Pub_PaperList(this.divLayout);
    await objPage_Paper.PageLoad();
    //await objPage_Paper.BindGv_vPaper();
  }
  //确定选择的论文 并添加到关系表中
  public btnPaperRecordInTab_Click(strkeyId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    //存放Id
    SetHidPaperId(divName, strkeyId);

    $('#txtSourceId').val(strkeyId);
    //设置只读属性；
    $('#txtSourceId').attr('disabled', 'disabled');
    //$("#txtPaperId").val(strkeyId);
    ////设置只读属性；
    //$("#txtPaperId").attr("disabled", "disabled");
    //关闭列表
    HideDialogThree();
  }

  /*
   * 文献类型
   */
  public set objectiveType(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlObjectiveType', value);
  }
  /*
   * 文献类型
   */
  public get objectiveType(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlObjectiveType');
  }

  //取消提交
  public async btnCancelSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要取消的记录！');
      return;
    }

    try {
      this.CancelSubmitRecordSave(strKeyId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*取消
  
 */
  public async CancelSubmitRecordSave(strKeyId: string) {
    const strThisFuncName = this.CancelSubmitRecordSave.name;

    //
    const objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
    objTopicObjectiveEN.SetTopicObjectiveId(strKeyId);
    objTopicObjectiveEN.SetIsSubmit(false);
    //objPaperEN..submitter = userStore.getUserId;//提交人；
    objTopicObjectiveEN.sfUpdFldSetStr = objTopicObjectiveEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objTopicObjectiveEN.topicObjectiveId == '' ||
      objTopicObjectiveEN.topicObjectiveId == undefined
    ) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      TopicObjective_UpdateRecordAsync(objTopicObjectiveEN).then((jsonData) => {
        const returnBool: boolean = jsonData;
        if (returnBool == true) {
          const strInfo = `取消成功!`;

          //显示信息框
          alert(strInfo);

          //HideDialog();
          this.BindGv_vTopicObjective(this.thisDivList);
        } else {
          const strInfo = `取消不成功!`;

          //显示信息框
          alert(strInfo);
          console.log('取消失败');
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `取消记录不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
   * 用户名
   */
  public get userName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUserName_q');
  }
  /*
   * 起始时间
   */
  public get StartDate_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtStartDate_q');
  }
  /*
   * 起始时间
   */
  public set StartDate_q(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtStartDate_q', value);
  }

  /*
   * 结束时间
   */
  public get EndDate_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtEndDate_q');
  }
  /*
   * 结束时间
   */
  public set EndDate_q(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtEndDate_q', value);
  }
  public get User_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlObjectiveUserId_q');
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

  //添加上传论文附件方法
  public async AddPaperSubAttachmentSave(filePath: string, strfileNum: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const objObjectiveAttachmentEN: clsObjectiveAttachmentEN = new clsObjectiveAttachmentEN();
    this.PutDataToPaperAttachmentClass(objObjectiveAttachmentEN, filePath);
    try {
      const responseText2 = await ObjectiveAttachment_AddNewRecordAsync(objObjectiveAttachmentEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        //第一个附件
        if (strfileNum == 'first') {
          //如果第二个附件不等于空，那么执行添加函数；
          if (GetInputValueInDivObj(divName, 'hdnFileTwo') != '' && $('#hdnFileTwo') != undefined) {
            const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
            this.AddPaperSubAttachmentSave(fileTwo, 'two');
          } else {
            //为空则判断第三个附件值；
            if (
              GetInputValueInDivObj(divName, 'hdnFileThree') != '' &&
              $('#hdnFileThree') != undefined
            ) {
              const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
              this.AddPaperSubAttachmentSave(fileThree, 'three');
            }
          }
        } else if (strfileNum == 'two') {
          //为空则判断第三个附件值；
          if (
            GetInputValueInDivObj(divName, 'hdnFileThree') != '' &&
            $('#hdnFileThree') != undefined
          ) {
            const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
            this.AddPaperSubAttachmentSave(fileThree, 'three');
          }
        }
      } else {
        const strInfo = `论文附件添加不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  //观点附件数据存放
  public PutDataToPaperAttachmentClass(
    pobjObjectiveAttachmentEN: clsObjectiveAttachmentEN,
    filePath: string,
  ) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    pobjObjectiveAttachmentEN.SetTopicObjectiveId(
      GetInputValueInDivObj(divName, 'txtTopicObjectiveId'),
    ); // 概念Id

    let strfilePath = filePath;
    //判断地址不为空则执行截取操作
    if (strfilePath != '') {
      const index = strfilePath.lastIndexOf('/');
      strfilePath = strfilePath.substring(index + 1, strfilePath.length);
      pobjObjectiveAttachmentEN.SetFilePath(filePath);

      pobjObjectiveAttachmentEN.SetObjectiveAttachmentName(strfilePath);
    }
    pobjObjectiveAttachmentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期

    pobjObjectiveAttachmentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班
    pobjObjectiveAttachmentEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
  }
}
