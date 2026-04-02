import $ from 'jquery';
import { PaperSubViewpoint_EditEx } from '../GradEduPaper/PaperSubViewpoint_EditEx';
import { clsPubFun4Web, doDownLoad, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { PaperSubViewpointCRUD } from '@/viewsBase/GradEduPaper/PaperSubViewpointCRUD';
import { clsPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsPaperReadWriteEN';
import { clsPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubViewpointEN';
import { clsvPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperReadWriteEN';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsSubViewpointTypeEN } from '@/ts/L0Entity/RT_Params/clsSubViewpointTypeEN';
import { vPaperReadWrite_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperReadWriteWApi';

import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { clsPaperDownloadLogEN } from '@/ts/L0Entity/GradEduPaper/clsPaperDownloadLogEN';
import { clsPaperSubAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachmentEN';
import { PaperAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import { vPaperSubViewpoint_GetObjLstByPagerAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import {
  ExplainType_BindDdl_ExplainTypeIdInDivCache,
  ExplainType_GetObjLstAsync,
} from '@/ts/L3ForWApi/RT_Params/clsExplainTypeWApi';
import { PaperSubViewpoint_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubViewpointWApi';
import {
  PaperSubAttachment_AddNewRecordAsync,
  PaperSubAttachment_DelPaperSubAttachmentsByCondAsync,
  PaperSubAttachment_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubAttachmentWApi';

import { PaperDownloadLog_AddNewRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperDownloadLogWApi';
import { Section_BindDdl_SectionIdByPaperIdInDivCache } from '@/ts/L3ForWApi/GradEduPaper/clsSectionWApi';
import {
  SubViewpointType_BindDdl_SubViewpointTypeIdInDivCache,
  SubViewpointType_GetFirstObjAsync,
  SubViewpointType_GetObjLstAsync,
  SubViewpointType_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsSubViewpointTypeWApi';
import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { Paper_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
  GetInputValueInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { GetHidPaperId, SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { userStore } from '@/store/modulesShare/user';
import { paperSubAttachmentStore } from '@/store/modules/paperSubAttachment';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare let window: any;
/* PaperSubViewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PaperSubViewpoint extends PaperSubViewpointCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvPaperSubViewpointBy: string = "subViewpointId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 100;
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
        alert('该类没有绑定该函数：[this.BindGv_vPaperSubViewpoint_Cache]！');
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
    let objPage: PaperSubViewpoint;
    if (PaperSubViewpointCRUD.objPageCRUD == null) {
      PaperSubViewpointCRUD.objPageCRUD = new PaperSubViewpoint(divLayout);
      objPage = <PaperSubViewpoint>PaperSubViewpointCRUD.objPageCRUD;
    } else {
      objPage = <PaperSubViewpoint>PaperSubViewpointCRUD.objPageCRUD;
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
      const strRoleId = userStore.getRoleId;
      if (strUserId != '') {
        //加载页面所需数据源到缓存
        await SubViewpointType_GetObjLstAsync('1=1');
        await ExplainType_GetObjLstAsync('1=1');
        //const arrvPaperSubViewpoint_Cache = await vPaperSubViewpoint_GetObjLstAsync("1=1");

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

        SubViewpointType_BindDdl_SubViewpointTypeIdInDivCache(
          this.divLayout,
          'ddlSubViewpointTypeId_q',
        );
        SubViewpointType_BindDdl_SubViewpointTypeIdInDivCache(
          this.divLayout,
          'ddlSubViewpointTypeId',
        );
        ExplainType_BindDdl_ExplainTypeIdInDivCache(this.divLayout, 'ddlExplainTypeId');

        //const ddl_SubViewpointTypeId_q = await this.BindDdl_SubViewpointTypeId("ddlSubViewpointTypeId_q");
        ////const ddl_ExplainTypeId_q = await this.BindDdl_ExplainTypeId("ddlExplainTypeId_q");
        //const ddl_SubViewpointTypeId = await this.BindDdl_SubViewpointTypeId("ddlSubViewpointTypeId");
        //const ddl_ExplainTypeId = await this.BindDdl_ExplainTypeId("ddlExplainTypeId");

        //PaperSubViewpointCRUD.sortvPaperSubViewpointBy = "subViewpointTypeName Asc";
        PaperSubViewpointCRUD.sortvPaperSubViewpointBy = 'orderNum Asc';

        $('#hidUserId').val(strUserId);
        //判断角色 教师

        if (
          strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
          //$("#btnDelRecord").show();
        } else if (strRoleId == '00620002') {
          //可以查看所有；
        }

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
  /// 绑定基于Web的下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public async BindDdl_SubViewpointTypeId_Cache(
    strDdlName: string,
    objSubViewpointType_Cond: clsSubViewpointTypeEN,
  ) {
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_SubViewpointTypeId_Cache');
    const arrObjLst_Sel: Array<clsSubViewpointTypeEN> = await SubViewpointType_GetSubObjLstCache(
      objSubViewpointType_Cond,
    );
    BindDdl_ObjLst(
      strDdlName,
      arrObjLst_Sel,
      clsSubViewpointTypeEN.con_SubViewpointTypeId,
      clsSubViewpointTypeEN.con_SubViewpointTypeName,
      '',
    );
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

  public async GetReadWriteData(pobjvPaperReadWriteEN: clsvPaperReadWriteEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    SetHidPaperId(divName, pobjvPaperReadWriteEN.paperId); //论文ID

    $('#txtPaperTitle').html(pobjvPaperReadWriteEN.paperTitle); //论文标题
    $('#txtKeyword').html(pobjvPaperReadWriteEN.keyword); //关键字Id
    $('#txtPeriodical').html(pobjvPaperReadWriteEN.periodical); //
    $('#txtAuthor').html(pobjvPaperReadWriteEN.author); //作者
    $('#txtResearchQuestion').html(pobjvPaperReadWriteEN.researchQuestion); //研究问题
    $('#txtPaperContent').html(pobjvPaperReadWriteEN.paperContent); //论文内容
    this.DetailRecordDownload(pobjvPaperReadWriteEN.paperId);

    $('#hidViewpointUserId').val(pobjvPaperReadWriteEN.updUser); //作者
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

  //添加上传论文附件方法
  public async AddPaperSubAttachmentSave(filePath: string, strfileNum: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const objPaperSubAttachmentEN: clsPaperSubAttachmentEN = new clsPaperSubAttachmentEN();
    this.PutDataToPaperAttachmentClass(objPaperSubAttachmentEN, filePath);
    try {
      const responseText2 = await PaperSubAttachment_AddNewRecordAsync(objPaperSubAttachmentEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        //strIdCurrEduclsreturnKeyId: string = responseText2;
        //if (returnKeyId != "") {
        //存放返回主键
        //  $("#hidKeyId").val(returnKeyId);
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
  public PutDataToPaperAttachmentClass(
    pobjPaperSubAttachmentEN: clsPaperSubAttachmentEN,
    filePath: string,
  ) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    pobjPaperSubAttachmentEN.SetSubViewpointId(GetInputValueInDivObjN(divName, 'hidKeyId')); // 论文Id

    let strfilePath = filePath;
    const index = strfilePath.lastIndexOf('/');
    strfilePath = strfilePath.substring(index + 1, strfilePath.length);
    pobjPaperSubAttachmentEN.SetFilePath(filePath);
    pobjPaperSubAttachmentEN.SetPaperSubAttachmentName(strfilePath);

    pobjPaperSubAttachmentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期

    pobjPaperSubAttachmentEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
  }

  /* 
 根据关键字删除记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecordByWhere(strWhere: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
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

      //不管是否有数据删除 都需要执行附件添加功能
      //判断是否有返回的附件路径值
      //判断是否有返回的附件路径值
      if (GetInputValueInDivObj(divName, 'hdnFileOne') != '') {
        //第一个附件框判断
        const fileOne = GetInputValueInDivObj(divName, 'hdnFileOne');
        this.AddPaperSubAttachmentSave(fileOne, 'first');
      } else {
        if (GetInputValueInDivObj(divName, 'hdnFileTwo') != '') {
          const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
          this.AddPaperSubAttachmentSave(fileTwo, 'two');
        } else {
          if (GetInputValueInDivObj(divName, 'hdnFileThree') != '') {
            const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
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
      return false;
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
      if (this.sectionId_q != '' && this.sectionId_q != '0' && this.sectionId_q != null) {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_SectionId} = '${this.sectionId_q}'`;
      }
      if (strPaperRWId != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_PaperRWId} = '${strPaperRWId}'`;
      }
      if (
        this.subViewpointTypeId_q != '' &&
        this.subViewpointTypeId_q != '0' &&
        this.subViewpointTypeId_q != null
      ) {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_SubViewpointTypeId} = '${this.subViewpointTypeId_q}'`;
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

  public CombinevPaperSubViewpointCondition3Obj(): clsvPaperSubViewpointEN {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const strPaperRWId = clsPrivateSessionStorage.paperRWId;
    const objvPaperSubViewpoint_Cond: clsvPaperSubViewpointEN = new clsvPaperSubViewpointEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.sectionId_q != '' && this.sectionId_q != '0') {
        objvPaperSubViewpoint_Cond.SetCondFldValue(
          clsvPaperSubViewpointEN.con_SectionId,
          this.sectionId_q,
          '=',
        );
      }
      if (this.subViewpointTypeId_q != '' && this.subViewpointTypeId_q != '0') {
        objvPaperSubViewpoint_Cond.SetCondFldValue(
          clsvPaperSubViewpointEN.con_SubViewpointTypeId,
          this.subViewpointTypeId_q,
          '=',
        );
      }
      objvPaperSubViewpoint_Cond.SetCondFldValue(
        clsvPaperSubViewpointEN.con_PaperRWId,
        strPaperRWId,
        '=',
      );
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombinePaperSubViewpointConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objvPaperSubViewpoint_Cond;
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

  public async BindGv_vPaperSubViewpoint() {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    // const strUserId = userStore.getUserId;
    // const strPaperRWId = clsPrivateSessionStorage.paperRWId;

    //strWhereCond2 = this.CombinevPaperSubViewpointCondition2();
    const strWhereCond3 = this.CombinevPaperSubViewpointCondition3();

    // const strWhereCond4 = this.CombinevPaperSubViewpointCondition4();
    const strPaperId = clsPrivateSessionStorage.paperId;

    //strWhereCond6 = ` ${clsvPaperSubViewpointLikeLogEN.con_PaperRWId} = '${strPaperRWId}' And ${clsvPaperSubViewpointLikeLogEN.con_UpdUser} = '${strUserId}'`;

    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页

    let arrSubViewpointTypeObjLst: Array<clsSubViewpointTypeEN> = [];

    let arrvPaperSubViewpointObjLst: Array<clsvPaperSubViewpointEN> = [];
    let arrvPaperSubViewpointObjLst2: Array<clsvPaperSubViewpointEN> = [];

    //获取点赞数据

    try {
      const objSubViewpointTypet_Cond: clsSubViewpointTypeEN = new clsSubViewpointTypeEN();
      if (this.subViewpointTypeId_q != '' && this.subViewpointTypeId_q != '0') {
        objSubViewpointTypet_Cond.SetCondFldValue(
          clsSubViewpointTypeEN.con_SubViewpointTypeId,
          this.subViewpointTypeId_q,
          '=',
        );
      }
      arrSubViewpointTypeObjLst = await SubViewpointType_GetSubObjLstCache(
        objSubViewpointTypet_Cond,
      );

      const objPagerPara: stuPagerPara = {
        pageIndex: 1,
        pageSize: this.pageSize,
        whereCond: strWhereCond3,
        orderBy: PaperSubViewpointCRUD.sortvPaperSubViewpointBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      //arrvPaperSubViewpointObjLst2 = vPaperSubViewpoint_GetObjLstByPager_WA_CacheAsync(objPagerPara);

      //const responseObjLst3 = await vPaperSubViewpoint_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
      //    arrvPaperSubViewpointObjLst2 = <Array<clsvPaperSubViewpointEN>>jsonData;
      //});

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
        strhtml += `<tr cate-id="${cateid}" fid="${fid}"><td>${cateid}</td><td></td><td><h3>${intJ}.${arrSubViewpointTypeObjLst[j].subViewpointTypeName}</h3></td><td></td><td></td><td class="td-manage"></td></tr>`;

        //子类型数据
        let strSubviewPointId = 0;
        cateid_ = cateid;
        let intK = 0;

        arrvPaperSubViewpointObjLst = arrvPaperSubViewpointObjLst2.filter(
          (x) => x.subViewpointTypeId == strsubTypeId,
        );

        for (let k = 0; k < arrvPaperSubViewpointObjLst.length; k++) {
          const objvPaperSubViewpoint = arrvPaperSubViewpointObjLst[k];
          strSubviewPointId = objvPaperSubViewpoint.subViewpointId;
          //先判断子模块类型数据ID和子观点知否匹配；
          //if (strsubTypeId == objvPaperSubViewpoint.subViewpointTypeId) {
          cateid++;
          intK++;

          //strhtml += '<tr cate-id="' + cateid + '" fid="' + cateid_ + '"><td><input type="checkbox" name="" lay-skin="primary"></td>';
          strhtml += `<tr cate-id="${cateid}" fid="${cateid_}">`;
          strhtml += `<td>${cateid}</td><td>${objvPaperSubViewpoint.sectionName}</td><td>&nbsp;&nbsp;&nbsp;&nbsp;${intK}.${clsIcon.faPlay}【${objvPaperSubViewpoint.rWTitle}】${objvPaperSubViewpoint.subViewpointContent}`;
          const arrPaperSubAttachments = await paperSubAttachmentStore.getObjLst(strSubviewPointId);
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

          //if (objvPaperSubViewpoint.literatureSourcesId != "") {

          //strhtml += '</td><td><input id="txt_OrderNum' + cateid + '" type="text" class="layui-input x-sort" name="order" value="' + objvPaperSubViewpoint.orderNum + '" onBlur=btnUpdateOrderNum_Click(' + objvPaperSubViewpoint.subViewpointId + ',"txt_OrderNum' + cateid + '");></td>';
          const strUserName = await vQxUsersSimStore.getUserName(objvPaperSubViewpoint.updUser);
          if (strUserName != '') {
            strhtml += `</td><td> ${strUserName} </td><td>${objvPaperSubViewpoint.updDate}</td><td class="td-manage" > `;
          }

          strhtml += `&nbsp;&nbsp;<a href="javascript:void(0)" style="color:royalblue" onclick="btnShowAppraise_Click(${objvPaperSubViewpoint.subViewpointId})">评论数：${objvPaperSubViewpoint.appraiseCount}</a >`;

          if (objvPaperSubViewpoint.score == null) {
            strhtml += '&nbsp;&nbsp;评分：0';
          } else {
            strhtml += `&nbsp;&nbsp;评分：${objvPaperSubViewpoint.score}`;
          }

          strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn layui-btn-xs" onclick = "btnShowAppraise_Click(${objvPaperSubViewpoint.subViewpointId})" > ${clsIcon.faCommentDots}添加评论</button >`;

          strhtml += '</td></tr>';

          //}
        }
      }
      //拼接；
      $('#tbList').append(strhtml);
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

  /* 在数据表里修改记录
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

    //this.BindGv_vPaperSubViewpoint();
    await this.BindGv_vPaperSubViewpoint();
  }

  public async selectTitle_Click() {
    const strThisFuncName = this.selectTitle_Click.name;
    try {
      const strWhereCond = ` subViewpointTypeId='${this.subViewpointTypeId}'`;
      const objSubViewpointType = await SubViewpointType_GetFirstObjAsync(strWhereCond);
      if (objSubViewpointType == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return;
      }
      this.rWTitle = objSubViewpointType.defaTitle;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取记录不成功,${e}.`;
      alert(strMsg);
    }
  }

  //通过得到的值判断，得到分数
  public GetScorebyText(sValue: string) {
    let Score = '';
    if (sValue == '1') {
      Score = '2';
    } else if (sValue == '2') {
      Score = '4';
    } else if (sValue == '一3') {
      Score = '6';
    } else if (sValue == '4') {
      Score = '8';
    } else {
      Score = '10';
    }
    return Score;
  }

  //是否显示

  public async btnIsDisplay_Click() {
    if (this.IsDisplay == '显示论文') {
      this.IsDisplay = '隐藏论文';
      $('#tabwucPaperReadWrite').show();
    } else if (this.IsDisplay == '隐藏论文') {
      this.IsDisplay = '显示论文';
      $('#tabwucPaperReadWrite').hide();
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
    //this.DivName = "divAddNewRecordSave";
    const objPaperDownloadLogEN: clsPaperDownloadLogEN = new clsPaperDownloadLogEN();

    //this.PutDataToPaperSubViewpointClass(objPaperSubViewpointEN);

    objPaperDownloadLogEN.SetPaperId(clsPrivateSessionStorage.paperId);
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
   * 获取年月日
   */
  public getNowDate(): string {
    const date = new Date();
    let month: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();
    if (month <= 9) {
      month = `0${month}`;
    }
    if (strDate <= 9) {
      strDate = `0${strDate}`;
    }

    return `${date
      .getFullYear()
      .toString()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  /*
   * 设置排序
   */
  public set IsDisplay(value: string) {
    $('#btnIsDisplay').html(value);
  }
  /*
   * 获取排序
   */
  public get IsDisplay(): string {
    return $('#btnIsDisplay').html();
  }
  /*
   * 类型Id
   */
  public set subViewpointTypeId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlSubViewpointTypeId', value);
  }
  /*
   * 类型Id
   */
  public get subViewpointTypeId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlSubViewpointTypeId');
  }
  /*
   * 读写标题
   */
  public set rWTitle(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtRWTitle', value);
  }
  /*
   * 读写标题
   */
  public get rWTitle(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtRWTitle');
  }
}
