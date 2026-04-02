import $ from 'jquery';
import { PaperSubViewpoint_EditEx } from '../GradEduPaper/PaperSubViewpoint_EditEx';
import { PaperSubViewpointEx_DelRecordAsyncEx } from '@/ts/L3ForWApiEx/GraduateEdu/clsPaperSubViewpointExWApi';
import { clsPubFun4Web, doDownLoad, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { PaperSubViewpointCRUD } from '@/viewsBase/GradEduPaper/PaperSubViewpointCRUD';
import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { clsPaperDownloadLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperDownloadLogEN';
import { clsPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsPaperReadWriteEN';
import { clsPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubViewpointEN';
import { clsvPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperReadWriteEN';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsExplainTypeEN } from '@/ts/L0Entity/RT_Params/clsExplainTypeEN';
import { clsSubViewpointTypeEN } from '@/ts/L0Entity/RT_Params/clsSubViewpointTypeEN';
import { PaperAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import { PaperDownloadLog_AddNewRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperDownloadLogWApi';
import { PaperSubAttachment_DelPaperSubAttachmentsByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubAttachmentWApi';
import {
  PaperSubViewpoint_DownMoveAsync,
  PaperSubViewpoint_ReOrderAsync,
  PaperSubViewpoint_UpdateRecordAsync,
  PaperSubViewpoint_UpMoveAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubViewpointWApi';
import { Section_BindDdl_SectionIdByPaperIdInDivCache } from '@/ts/L3ForWApi/GradEduPaper/clsSectionWApi';
import { vPaperReadWrite_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperReadWriteWApi';
import {
  vPaperSubViewpoint_GetObjLstByPagerAsync,
  vPaperSubViewpoint_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { ExplainType_GetObjLstCache } from '@/ts/L3ForWApi/RT_Params/clsExplainTypeWApi';
import {
  SubViewpointType_GetObjLstAsync,
  SubViewpointType_GetObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsSubViewpointTypeWApi';
import { Paper_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { GetHidPaperId, SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { userStore } from '@/store/modulesShare/user';
import { paperSubAttachmentStore } from '@/store/modules/paperSubAttachment';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare let window: any;
/* PaperSubViewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PaperSubViewpoint_QUDIEx extends PaperSubViewpointCRUD {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvPaperSubViewpointBy: string = "subViewpointId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 50;
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
    this.BindGv_vPaperSubViewpoint();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vPaperSubViewpoint':
        //alert('该类没有绑定该函数：[this.BindGv_vPaperSubViewpoint_Cache]！');
        this.btnReOrder_Click();
        this.BindGv_vPaperSubViewpoint();
        //this.BindGv_vPaperSubViewpointCache();;
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
    let objPage: PaperSubViewpoint_QUDIEx;
    if (PaperSubViewpointCRUD.objPageCRUD == null) {
      PaperSubViewpointCRUD.objPageCRUD = new PaperSubViewpoint_QUDIEx(divLayout);
      objPage = <PaperSubViewpoint_QUDIEx>PaperSubViewpointCRUD.objPageCRUD;
    } else {
      objPage = <PaperSubViewpoint_QUDIEx>PaperSubViewpointCRUD.objPageCRUD;
    }
    const objPageEdit: PaperSubViewpoint_EditEx = new PaperSubViewpoint_EditEx(
      'PaperSubViewpoint_EditEx',
      objPage,
    );

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
        if (strCommandName == 'UpdateRecordInTab') {
          objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPageEdit.btnUpdateRecord_Click(Number(strKeyId));
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
        objPage.btnDelRecordInTab_Click(Number(strKeyId));
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
        AccessBtnClickDefault(strCommandName, 'PaperSubViewpointCRUDExEx.btn_Click');

        break;
    }
  }

  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      const strUserId = userStore.getUserId;

      if (strUserId != '') {
        //1、为下拉框设置数据源,绑定列表数据
        const strWhereCond1 = this.CombinevPaperSubViewpointCondition1();
        let objvPaperReadWrite: clsvPaperReadWriteEN = new clsvPaperReadWriteEN();
        await vPaperReadWrite_GetFirstObjAsync(strWhereCond1).then((jsonData) => {
          objvPaperReadWrite = <clsvPaperReadWriteEN>jsonData;
        });

        await Section_BindDdl_SectionIdByPaperIdInDivCache(
          this.divLayout,
          'ddlSectionId',
          objvPaperReadWrite.paperId,
        );
        await Section_BindDdl_SectionIdByPaperIdInDivCache(
          this.divLayout,
          'ddlSectionId_q',
          objvPaperReadWrite.paperId,
        );

        await this.BindDdl_SubViewpointTypeId('ddlSubViewpointTypeId_q');
        //const ddl_ExplainTypeId_q = await this.BindDdl_ExplainTypeId("ddlExplainTypeId_q");
        await this.BindDdl_SubViewpointTypeId('ddlSubViewpointTypeId');
        await this.BindDdl_ExplainTypeId('ddlExplainTypeId');

        //PaperSubViewpointCRUD.sortvPaperSubViewpointBy = "subViewpointTypeName Asc";

        //strWhereCond = await this.CombinevPaperSubViewpointCondition();

        //this.recCount= await vPaperSubViewpoint_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {
        //
        //});
        //2、显示无条件的表内容在GridView中
        await this.GetReadWriteData(objvPaperReadWrite);

        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        await this.BindGv_vPaperSubViewpoint();
        //tbody();

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

  //

  /// <summary>
  /// 为下拉框获取数据,从表:[SubViewpointType]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_SubViewpointTypeId(ddlSubViewpointTypeId: string, strWhereCond = '1 =1') {
    // console.log(strWhereCond);
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlSubViewpointTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlSubViewpointTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      //const responseText = SubViewpointType_GetObjLstAsync(strWhereCond).then((jsonData) => {
      const arrSubViewpointTypeObjLst = await SubViewpointType_GetObjLstCache();
      BindDdl_ObjLst(
        ddlSubViewpointTypeId,
        arrSubViewpointTypeObjLst,
        clsSubViewpointTypeEN.con_SubViewpointTypeId,
        clsSubViewpointTypeEN.con_SubViewpointTypeName,
        '子观点类型',
      );
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /// <summary>
  /// 为下拉框获取数据,从表:[ExplainType]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_ExplainTypeId(ddlExplainTypeId: string, strWhereCond = '1 =1') {
    // console.log(strWhereCond);
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlExplainTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlExplainTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      //const responseText = ExplainType_GetObjLstAsync(strWhereCond).then((jsonData) => {
      const arrExplainTypeObjLst = await ExplainType_GetObjLstCache();
      BindDdl_ObjLst(
        ddlExplainTypeId,
        arrExplainTypeObjLst,
        clsExplainTypeEN.con_ExplainTypeId,
        clsExplainTypeEN.con_ExplainTypeName,
        '说明类型',
      );
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async DetailRecord() {
    //this.keyId = strPaperRWId;
    const strWhereCond = await this.CombinevPaperSubViewpointCondition1();

    try {
      const objvPaperReadWriteEN = await vPaperReadWrite_GetFirstObjAsync(strWhereCond);
      if (objvPaperReadWriteEN == null) return;
      this.GetReadWriteData(objvPaperReadWriteEN);
      console.log('完成Detail!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  public GetReadWriteData(pobjvPaperReadWriteEN: clsvPaperReadWriteEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetHidPaperId(divName, pobjvPaperReadWriteEN.paperId); //论文ID

    $('#txtPaperTitle').html(pobjvPaperReadWriteEN.paperTitle); //论文标题
    $('#txtKeyword').html(pobjvPaperReadWriteEN.keyword); //关键字Id
    $('#txtPeriodical').html(pobjvPaperReadWriteEN.periodical); //
    $('#txtAuthor').html(pobjvPaperReadWriteEN.author); //作者
    $('#txtResearchQuestion').html(pobjvPaperReadWriteEN.researchQuestion); //研究问题
    $('#txtPaperContent').html(pobjvPaperReadWriteEN.paperContent); //论文内容

    $('#hidIsSubmit').val(pobjvPaperReadWriteEN.isSubmit.toString()); //是否提交

    console.log(GetInputValueInDivObj(divName, 'hidIsSubmit'));
    //$("#txtMemo").html(pobjvPaperReadWriteEN.memo);//备注
    this.DetailRecordDownload(pobjvPaperReadWriteEN.paperId);
  }

  public async DetailRecordDownload(strPaperId: string) {
    const strThisFuncName = this.DetailRecordDownload.name;
    //this.keyId = strPaperRWId;
    const strWhereCond = ` paperId ='${strPaperId}'`;

    try {
      const objvPaperEN = await Paper_GetFirstObjAsync(strWhereCond);
      if (objvPaperEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      if (objvPaperEN.attachmentCount > 0) {
        $('#btnDownLoadFile').show();
        $('#lblDownLoadFile').hide();
      } else {
        $('#btnDownLoadFile').hide();
        $('#lblDownLoadFile').show();
      }

      console.log('完成Detail!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  public CombinevPaperSubViewpointCondition1(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const strPaperRWId = clsPrivateSessionStorage.paperRWId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (strPaperRWId != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_PaperRWId} = '${strPaperRWId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperSubViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombinevPaperSubViewpointCondition2(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.subViewpointTypeId_q != '' && this.subViewpointTypeId_q != '0') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_SubViewpointTypeId} = '${this.subViewpointTypeId_q}'`;
      }

      strWhereCond += ' order by orderNum Asc';
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperSubViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombinevPaperSubViewpointCondition3(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1=1 ';
    const strPaperRWId = clsPrivateSessionStorage.paperRWId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.sectionId_q != '' && this.sectionId_q != '0') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_SectionId} = '${this.sectionId_q}'`;
      }
      if (strPaperRWId != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_PaperRWId} = '${strPaperRWId}'`;
      }
      if (this.subViewpointTypeId_q != '' && this.subViewpointTypeId_q != '0') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_SubViewpointTypeId} = '${this.subViewpointTypeId_q}'`;
      }

      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      if (strUserId != '') {
        $('#hidUserId').val(strUserId);
        //判断角色 教师

        if (
          strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
          //$("#btnDelRecord").show();
        } else if (strRoleId == '00620002') {
          //可以查看所有；
        } else {
          strWhereCond += ` And updUser = '${strUserId}'`;
          //学生00620003
          //只能查看自己的数据；或公开的数据；
          //strWhereCond += ` And ${clsvSubViewpointEN.con_UpdUser} = '${strUserId}'`;

          //strWhereCond += ` And updUser = '${objvUserRoleRelation.userId}'`;
        }
      } else {
        reLogin();
      }
      //if (this.ExplainTypeId_q != "" && this.ExplainTypeId_q != "0") {
      //    strWhereCond += ` And ${clsvPaperSubViewpointEN.con_ExplainTypeId} = '${this.ExplainTypeId_q}'`;
      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperSubViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombinevPaperSubViewpointCondition4(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const strPaperRWId = clsPrivateSessionStorage.paperRWId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.sectionId_q != '' && this.sectionId_q != '0') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_SectionId} = '${this.sectionId_q}'`;
      }
      if (strPaperRWId != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_PaperRWId} = '${strPaperRWId}'`;
      }

      strWhereCond += ' order by orderNum Asc';
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperSubViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombinevPaperSubViewpointCondition5(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strWhereCond = ' 1 = 1 ';
    return strWhereCond;
  }
  public async BindGv_vPaperSubViewpoint() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;

    const strWhereCond2 = this.CombinevPaperSubViewpointCondition2();
    const strWhereCond3 = this.CombinevPaperSubViewpointCondition3();
    // const strWhereCond4 = this.CombinevPaperSubViewpointCondition4();
    const strWhereCond5 = this.CombinevPaperSubViewpointCondition5();

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    // const arrSectionObjLst: Array<clsSectionEN> = [];

    let arrSubViewpointTypeObjLst: Array<clsSubViewpointTypeEN> = [];

    let arrvPaperSubViewpointObjLst: Array<clsvPaperSubViewpointEN> = [];

    let arrvPaperSubViewpointObjLst2: Array<clsvPaperSubViewpointEN> = [];

    try {
      arrSubViewpointTypeObjLst = await SubViewpointType_GetObjLstAsync(strWhereCond2);
      this.recCount = await vPaperSubViewpoint_GetRecCountByCondAsync(strWhereCond3);
      PaperSubViewpointCRUD.sortvPaperSubViewpointBy = 'orderNum Asc';
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond3,
        orderBy: PaperSubViewpointCRUD.sortvPaperSubViewpointBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      await vPaperSubViewpoint_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
        arrvPaperSubViewpointObjLst2 = <Array<clsvPaperSubViewpointEN>>jsonData;
      });

      let strhtml = '';
      //$('#divTwo li').remove();
      let cateid = 0;
      let cateid_ = 0;

      let intJ = 0;

      $('#tbList tr').remove();

      for (let j = 0; j < arrSubViewpointTypeObjLst.length; j++) {
        cateid++;
        intJ++;
        const fid = 0;
        const strsubTypeId = arrSubViewpointTypeObjLst[j].subViewpointTypeId;
        //先创建子模块类型
        //strhtml += '<li data-role="list-divider" role="heading" class="ui-li-has-alt ui-li-divider ui-bar-inherit ui-first-child"><a><H1>' + this.SubViewpointTypeObjLst[j].subViewpointTypeName + ' </H1></a><span class="ui-li-count ui-body-inherit" ><a href="javascript:void(0)" title = "添加" onclick=btnAddRecordInTab_Click("' + strsubTypeId + '");>添加</a></span></li>';

        strhtml += `<tr cate-id="${cateid}" fid="${fid}"><td>${cateid}</td><td></td><td><h3>${intJ}.${arrSubViewpointTypeObjLst[j].subViewpointTypeName}</h3></td><td></td><td></td><td class="td-manage">`;

        if (GetInputValueInDivObj(divName, 'hidIsSubmit') == 'true') {
          strhtml += '</td></tr>';
        } else {
          strhtml += `<button class="btn btn-info btn-sm" onclick=btnAddNewRecord_Click("${strsubTypeId}");>${clsIcon.faPenToSquare}添加子栏目</button>`;
          strhtml += `<button class="btn btn-info btn-sm" onclick=btnReOrder_Click("${strsubTypeId}")>${clsIcon.faPenToSquare}重序</button>`;
          strhtml += '</td></tr>';
        }

        //子类型数据
        let strSubViewpointId = 0;
        cateid_ = cateid;
        let intK = 0;

        arrvPaperSubViewpointObjLst = arrvPaperSubViewpointObjLst2.filter(
          (x) => x.subViewpointTypeId == strsubTypeId,
        );

        for (let k = 0; k < arrvPaperSubViewpointObjLst.length; k++) {
          const objvPaperSubViewpoint = arrvPaperSubViewpointObjLst[k];
          strSubViewpointId = objvPaperSubViewpoint.subViewpointId;
          //先判断子模块类型数据ID和子观点知否匹配；
          //if (strsubTypeId == objvPaperSubViewpoint.subViewpointTypeId) {
          cateid++;
          intK++;
          //if (arrSectionObjLst.length != 0) {
          //for (let i = 0; i < arrSectionObjLst.length; i++) {

          //strSectionId: string = arrSectionObjLst[i].sectionId;
          //strIdCurrEduclsstrSectionName: string = arrSectionObjLst[i].sectionName;
          //strhtml += '<li class="ui-li-has-alt ui-first-child"><a href="javascript:void(0)" onclick="btnUpdateRecordInTab_Click(' + this.vSubViewpointObjLst[k].subViewpointId + ')" class="ui-btn" ><p>' + this.vSubViewpointObjLst[k].subViewpointContent + '</p></a><a href="javascript:void(0)" class="ui-btn ui-btn-icon-notext ui-icon-delete" title="删除" onclick="btnDeleteRecordInTab_Click(' + this.vSubViewpointObjLst[k].subViewpointId + ')"></a></li>';
          strhtml += `<tr cate-id="${cateid}" fid="${cateid_}"><td>${cateid}</td><td>${objvPaperSubViewpoint.sectionName}</td><td>&nbsp;&nbsp;&nbsp;&nbsp;${intK}.${clsIcon.faPlay}【${objvPaperSubViewpoint.rWTitle}】${objvPaperSubViewpoint.subViewpointContent}`;

          //根据子观点id 得到附件

          const arrPaperSubAttachments = await paperSubAttachmentStore.getObjLst(strSubViewpointId);
          if (arrPaperSubAttachments != null && arrPaperSubAttachments.length > 0) {
            for (let y = 0; y < arrPaperSubAttachments.length; y++) {
              const strAddressAndPortfull =
                GetAddressAndPort() + arrPaperSubAttachments[y].filePath;
              strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" style="margin-left: 10px; " alt="" id="txtImgPath${arrPaperSubAttachments[y].paperSubAttachmentId}"/>`;
            }
          }

          if (objvPaperSubViewpoint.explainContent != '') {
            strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【${objvPaperSubViewpoint.explainTypeName}】${objvPaperSubViewpoint.explainContent}`;
          }

          strhtml += `</td><td><input id="txt_OrderNum${cateid}" type="text" class="layui-input x-sort" style="width:40px;" name="order" value="${objvPaperSubViewpoint.orderNum}" onBlur=btnUpdateOrderNum_Click("${strSubViewpointId}","txt_OrderNum${cateid}");>`;
          //上移
          strhtml += `<button class="layui-btn layui-btn layui-btn-xs" onclick=btnUpMove_Click("${strSubViewpointId}",${objvPaperSubViewpoint.orderNum},"${strsubTypeId}") href="javascript:;"><i class="iconfont">&#xe6a5;</i></button>`;
          //下移
          strhtml += `<button class="layui-btn layui-btn layui-btn-xs" onclick=btnDownMove_Click("${strSubViewpointId}",${objvPaperSubViewpoint.orderNum},"${strsubTypeId}") href="javascript:;"><i class="iconfont">&#xe6a6;</i></button>`;

          strhtml += `</td><td>${objvPaperSubViewpoint.updDate}</td><td class="td-manage">`;

          if (GetInputValueInDivObj(divName, 'hidIsSubmit') == 'true') {
            strhtml += `${objvPaperSubViewpoint.okCount}&nbsp;&nbsp;<img src="/img/vote.png" width = "20px" height = "20px" title = "点赞数" >`;
            strhtml += `&nbsp;&nbsp;评论数：<a href="javascript:void(0)" onclick=btnShowAppraise_Click("${strSubViewpointId}")>${objvPaperSubViewpoint.appraiseCount}</a>`;
            if (objvPaperSubViewpoint.score == null) {
              strhtml += '&nbsp;&nbsp;评分：0';
            } else {
              strhtml += `&nbsp;&nbsp;评分：${objvPaperSubViewpoint.score}`;
            }

            //strhtml += '&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick = "btnAddAppraise_Click(' + strSubViewpointId + ')" > ${clsIcon.faCommentDots}添加评论</button >';
          } else {
            strhtml += `<button class="btn btn-info btn-sm" onclick=btnUpdateRecordInTab_Click("${strSubViewpointId}")>${clsIcon.faPenToSquare}编辑</button>`;
            strhtml += `<button class="btn-danger btn btn-sm" onclick=btnDelRecordInTab_Click("${strSubViewpointId}") href="javascript:;">${clsIcon.faTrash}删除</button>`;
          }

          //if (userStore.getUserId == objvPaperSubViewpoint.updUser && objvPaperSubViewpoint.IsPublicEx == false) {

          //} else {
          //    if (objvPaperSubViewpoint.literatureSourcesId == null || objvPaperSubViewpoint.literatureSourcesId == "") {

          //        strhtml += '</td><td>' + objvPaperSubViewpoint.orderNum + '</td><td>' + objvPaperSubViewpoint.userName + '</td><td>' + objvPaperSubViewpoint.updDate + '</td><td class="td-manage">' + objvPaperSubViewpoint.okCount + '&nbsp;&nbsp;<a href="javascript:void(0)" onclick="btnAddLikeLog_Click(' + strSubViewpointId + ')"><img src="/img/vote.png" width="20px" height="20px"  title="点赞"></a>&nbsp;&nbsp;评论数：<a href="javascript:void(0)" onclick="btnShowAppraise_Click(' + strSubViewpointId + ')">' + objvPaperSubViewpoint.appraiseCount + '</a>&nbsp;&nbsp;<button class="btn btn-info btn-sm" onclick="btnAddAppraise_Click(' + strSubViewpointId + ')">${clsIcon.faPenToSquare}添加评论</button></td></tr>';
          //    }
          //    else {

          strhtml += '</td></tr>';

          //}
          //}

          //}
        }
      }
      //拼接；
      $('#tbList').append(strhtml);

      //调用拼接方法
      //this.GetHtmlByDataSource();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*查询*/
  public async btnQueryEx_Click() {
    try {
      await this.BindGv_vPaperSubViewpoint();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*
   重序
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
   */
  public async btnReOrder_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (this.PreCheck4Order() == false) return;
    const strSubViewpointTypeId: string = GetInputValueInDivObj(divName, 'hidSubViewpointTypeId');
    const strPaperRWId: string = clsPrivateSessionStorage.paperRWId;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        subViewpointTypeId: strSubViewpointTypeId,
        paperRWId: strPaperRWId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await PaperSubViewpoint_ReOrderAsync(objOrderByData);
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
      alert(strMsg);
      return;
    }
    await this.BindGv_vPaperSubViewpoint();
  }

  /*
    上移
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpMove_Click)
    */
  public async btnUpMove_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (GetInputValueInDivObj(divName, 'hidOrderNum') == '0') {
      await this.btnReOrder_Click();
    }
    if (this.PreCheck4Order() == false) return;
    const strSubViewpointTypeId: string = GetInputValueInDivObj(divName, 'hidSubViewpointTypeId');
    const strPaperRWId: string = clsPrivateSessionStorage.paperRWId;
    const arrKeyIds = GetInputValueInDivObj(divName, 'hidKeyId') as any;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        subViewpointTypeId: strSubViewpointTypeId,
        paperRWId: strPaperRWId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await PaperSubViewpoint_UpMoveAsync(objOrderByData);
    } catch (e: any) {
      const strMsg = `上1移记录出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await this.BindGv_vPaperSubViewpoint();
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    //arrKeyIds.forEach((e) => clsCommonFunc4Web.SetCkechedItem4KeyId(strListDiv, e));
  }

  /*
    下移
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDownMove_Click)
    */
  public async btnDownMove_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (GetInputValueInDivObj(divName, 'hidOrderNum') == '0') {
      await this.btnReOrder_Click();
    }
    if (this.PreCheck4Order() == false) return;
    const strSubViewpointTypeId: string = GetInputValueInDivObj(divName, 'hidSubViewpointTypeId');
    const strPaperRWId: string = clsPrivateSessionStorage.paperRWId;
    const arrKeyIds = GetInputValueInDivObj(divName, 'hidKeyId') as any;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      objOrderByData.KeyIdLst = arrKeyIds;
      const jsonObject = {
        subViewpointTypeId: strSubViewpointTypeId,
        paperRWId: strPaperRWId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await PaperSubViewpoint_DownMoveAsync(objOrderByData);
    } catch (e: any) {
      const strMsg = `下移记录出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await this.BindGv_vPaperSubViewpoint();
    //await this.BindGv_vPaperSubViewpoint();
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    //arrKeyIds.forEach((e) => clsCommonFunc4Web.SetCkechedItem4KeyId(strListDiv, e));
  }

  /* 在数据表里修改排序记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecordInTab_Click)
  */
  public async btnUpdateOrderNum_Click(strKeyId: number, strOrderNum: string) {
    const strThisFuncName = this.btnUpdateOrderNum_Click.name;
    //const lngKeyId = Number(strKeyId);

    const objPaperSubViewpointEN: clsPaperSubViewpointEN = new clsPaperSubViewpointEN();
    objPaperSubViewpointEN.SetSubViewpointId(strKeyId);
    objPaperSubViewpointEN.SetOrderNum(Number($(`#${strOrderNum}`).val()));
    objPaperSubViewpointEN.sfUpdFldSetStr = objPaperSubViewpointEN.updFldString; //设置哪些字段被修改(脏字段)

    if (
      objPaperSubViewpointEN.subViewpointId == 0 ||
      objPaperSubViewpointEN.subViewpointId == undefined
    ) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await PaperSubViewpoint_UpdateRecordAsync(objPaperSubViewpointEN);
      if (returnBool == true) {
        //strIdCurrEduclsstrInfo: string = `修改排序号成功!`;
        //
        ////显示信息框
        //alert(strInfo);
        this.BindGv_vPaperSubViewpoint();
      } else {
        //strIdCurrEduclsstrInfo: string = `修改排序号不成功!`;
        //
        ////显示信息框
        //alert(strInfo);
        //console.log("完成UpdateRecordSave");
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
    }
  }

  public async btnIsDisplay_Click() {
    if (this.IsDisplay == '显示论文') {
      this.IsDisplay = '隐藏论文';
      $('#tabwucPaperReadWrite').show();
    } else if (this.IsDisplay == '隐藏论文') {
      this.IsDisplay = '显示论文';
      $('#tabwucPaperReadWrite').hide();
    }
  }

  /* 
    在数据表里删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   */
  public async btnDelRecordInTab_Click(strKeyId: number) {
    try {
      if (strKeyId == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      await this.DelRecord(lngKeyId);
      await this.BindGv_vPaperSubViewpoint();
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
  public async DelRecord(strSubViewpointId: number) {
    try {
      const returnInt = await PaperSubViewpointEx_DelRecordAsyncEx(strSubViewpointId);
      if (returnInt > 0) {
        //删除子观点时，需要同时去删除附件；
        //根据Id删除附件
        const strwhere = `subViewpointId ='${strSubViewpointId}'`;
        this.DelAttactmentRecordByWhere(strwhere);

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
根据关键字删除记录 附件
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelAttactmentRecordByWhere(strWhere: string) {
    try {
      const returnInt: number = await PaperSubAttachment_DelPaperSubAttachmentsByCondAsync(
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

      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //下载文件
  public btnDownLoadFile_Click() {
    this.GetPaperAttachmentRecord();
    this.btnAddDownload_Click();
  }

  public async GetPaperAttachmentRecord() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPapeId = GetHidPaperId(divName);
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

  //添加下载量
  public async btnAddDownload_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //this.DivName = "divAddNewRecordSave";
    const objPaperDownloadLogEN: clsPaperDownloadLogEN = new clsPaperDownloadLogEN();

    //this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);

    objPaperDownloadLogEN.SetPaperId(GetHidPaperId(divName));
    objPaperDownloadLogEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objPaperDownloadLogEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    // const strWhereCond = ` 1 =1 and updUser='${objPaperDownloadLogEN.updUser}' and paperId=${objPaperDownloadLogEN.paperId}`;
    try {
      //const responseText = await PaperDownloadLog_IsExistRecordAsync(strWhereCond);
      //strIdCurrEduclsbolIsExist: boolean = responseText;
      //if (bolIsExist == true) {
      //    //strIdCurrEduclsstrMsg: string = `您已经收藏过这条论文了！`;
      //    //alert(strMsg);
      //    return responseText;//一定要有一个返回值，否则会出错！
      //}

      const responseText2 = await PaperDownloadLog_AddNewRecordAsync(objPaperDownloadLogEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        //strIdCurrEduclsstrInfo: string = `收藏成功!`;
        //
        ////显示信息框
        //alert(strInfo);
        //this.BindGv_vPaperSubViewpoint();
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

  /*
   * 设置上传文件
   */
  public set Uploadfile(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtUploadfile', value);
  }
  /*
   * 获取上传文件
   */
  public get Uploadfile(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUploadfile');
  }

  /*
   * 设置是否隐藏显示
   */
  public set IsDisplay(value: string) {
    $('#btnIsDisplay').html(value);
  }
  /*
   * 获取是否隐藏显示
   */
  public get IsDisplay(): string {
    return $('#btnIsDisplay').html();
  }

  /*
   移动记录序号时的预检查函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PreCheck4Order)
   */
  public PreCheck4Order(): boolean {
    const strSubViewpointTypeId: string = this.SubViewpointTypeId_OrderNum;
    if (strSubViewpointTypeId == '') {
      const strMsg = `请输入subViewpointTypeId!`;
      alert(strMsg);
      return false;
    }
    const strPaperRWId: string = this.PaperRWId_OrderNum;
    if (strPaperRWId == '') {
      const strMsg = `请输入paperRWId!`;
      alert(strMsg);
      return false;
    }
    return true;
  }
  /*
   * 论文读写Id
   */
  public get paperRWId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperRWId');
  }
  /*
   * paperRWId
   */
  public get PaperRWId_OrderNum(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperRWId_OrderNum');
  }
  /*
   * 论文读写Id
   */
  public get PaperRWId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperRWId_q');
  }

  /*
   * subViewpointTypeId
   */
  public get SubViewpointTypeId_OrderNum(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlSubViewpointTypeId_OrderNum');
  }
}
