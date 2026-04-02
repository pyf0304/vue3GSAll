import $ from 'jquery';
import { Pub_PaperList } from '../GradEduPublicPage/Pub_PaperList';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsPaperWApiEx } from '@/ts/L3ForWApiEx/GraduateEdu/clsPaperWApiEx';
import { PaperEx_ReFreshThisCacheByIdCurrEduCls } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { clsgs_OriginalPaperLogEN } from '@/ts/L0Entity/GradEduPaper/clsgs_OriginalPaperLogEN';
import { clsPaperAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperAttachmentEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsgs_PaperStatusEN } from '@/ts/L0Entity/RT_Params/clsgs_PaperStatusEN';
import { clsgs_PaperTypeEN } from '@/ts/L0Entity/RT_Params/clsgs_PaperTypeEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import {
  gs_OriginalPaperLog_AddNewRecordAsync,
  gs_OriginalPaperLog_GetFirstObjAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_OriginalPaperLogWApi';
import {
  PaperAttachment_DelPaperAttachmentsByCondAsync,
  PaperAttachment_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperAttachmentWApi';
import {
  Paper_DelPapersAsync,
  Paper_GetObjByPaperIdAsync,
  Paper_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { vPaperReadWrite_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperReadWriteWApi';
import { RTPaperRela_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTPaperRelaWApi';
import {
  gs_PaperStatus_BindDdl_PaperStatusIdInDivCache,
  gs_PaperStatus_GetObjLstAsync,
} from '@/ts/L3ForWApi/RT_Params/clsgs_PaperStatusWApi';
import { gs_PaperType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsgs_PaperTypeWApi';
import {
  LiteratureType_BindDdl_LiteratureTypeIdInDivCache,
  LiteratureType_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { BindDdl_ObjLst, GetCheckedKeyIds } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputDisable,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { gs_PaperVerCRUD } from '@/viewsBase/GradEduPaper/gs_PaperVerCRUD';
import { GetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { PaperAttachmentEx_AddPaperAttachment } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperAttachmentExWApi';
import { UploadResponseData } from '@/ts/FunClass/UploadResponseData';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare function HideDialog(): void;
declare let window: any;
/* gs_PaperEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PaperEx extends gs_PaperVerCRUD {
  public static uploadResponseData: UploadResponseData = new UploadResponseData();
  public keyId = '';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvPaperBy: string = "paperId";

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
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
  */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        // 为查询区绑定下拉框
        await this.BindDdl4QueryRegion();

        //判断自研论文的步骤顺序 来改变按钮颜色；
        await this.ChangeBtnColorByTypeId();

        const strRoleId = userStore.getRoleId;
        //判断角色
        //管理员
        if (
          strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
          $('#btnDelRecord').show();
          $('#btnAudit').show();
          $('#btnSynPaperStatistics').show();
        } else if (strRoleId == '00620002') {
          $('#btnDelRecord').hide();
          $('#btnAudit').show();
        } else {
          $('#btnDelRecord').hide();
          $('#btnAudit').hide();
          $('#btnCancelSubmit').hide();
        }
        //2、显示无条件的表内容在GridView中
        const objPage_Paper = new Pub_PaperList(this.divLayout);
        await objPage_Paper.PageLoad();
        //await objPage_Paper.BindGv_vPaper();
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

  //根据论文进度步骤来显示按钮颜色 或置灰
  public async ChangeBtnColorByTypeId() {
    const strWhere = ' 1 = 1 order by logTypeId desc';

    await gs_OriginalPaperLog_GetFirstObjAsync(strWhere).then((jsonData) => {
      const objgs_OriginalPaperLog: clsgs_OriginalPaperLogEN = <clsgs_OriginalPaperLogEN>jsonData;
      if (objgs_OriginalPaperLog != null) {
        const logTypeId = objgs_OriginalPaperLog.logTypeId;
        let strMsg = '';
        switch (logTypeId) {
          case '01':
            $('#btnAddNewPaper').attr('disabled', 'false');
            $('#btnAddSubviewpointPaper').attr('disabled', 'false');
            $('#btnAddSubviewpointPaper').removeClass();
            $('#btnAddSubviewpointPaper').addClass('layui-btn');

            $('#btnAddFirstPaper').attr('disabled', 'true');
            $('#btnGroupDiscuss').attr('disabled', 'true');
            $('#btnUpdatePaper').attr('disabled', 'true');
            $('#btnCompanionProposal').attr('disabled', 'true');
            $('#btnEndPaper').attr('disabled', 'true');
            break;
          case '02':
            $('#btnAddNewPaper').attr('disabled', 'false');
            $('#btnAddSubviewpointPaper').attr('disabled', 'false');
            $('#btnAddSubviewpointPaper').removeClass();
            $('#btnAddSubviewpointPaper').addClass('btn btn-outline-info text-nowrap btn-sm');

            $('#btnAddFirstPaper').attr('disabled', 'false');
            $('#btnAddFirstPaper').removeClass();
            $('#btnAddFirstPaper').addClass('layui-btn');

            $('#btnGroupDiscuss').attr('disabled', 'true');
            $('#btnUpdatePaper').attr('disabled', 'true');
            $('#btnCompanionProposal').attr('disabled', 'true');
            $('#btnEndPaper').attr('disabled', 'true');
            break;
          case '03':
            $('#btnAddNewPaper').attr('disabled', 'false');
            $('#btnAddSubviewpointPaper').attr('disabled', 'true');
            $('#btnAddFirstPaper').attr('disabled', 'false');
            $('#btnAddFirstPaper').removeClass();
            $('#btnAddFirstPaper').addClass('btn btn-outline-info text-nowrap btn-sm');

            $('#btnGroupDiscuss').attr('disabled', 'false');
            $('#btnGroupDiscuss').removeClass();
            $('#btnGroupDiscuss').addClass('layui-btn');

            $('#btnUpdatePaper').attr('disabled', 'true');
            $('#btnCompanionProposal').attr('disabled', 'true');
            $('#btnEndPaper').attr('disabled', 'true');
            break;
          case '04':
            $('#btnAddNewPaper').attr('disabled', 'false');
            $('#btnAddSubviewpointPaper').attr('disabled', 'false');
            $('#btnAddFirstPaper').attr('disabled', 'false');
            $('#btnGroupDiscuss').attr('disabled', 'false');
            $('#btnGroupDiscuss').removeClass();
            $('#btnGroupDiscuss').addClass('btn btn-outline-info text-nowrap btn-sm');

            $('#btnUpdatePaper').attr('disabled', 'false');
            $('#btnUpdatePaper').removeClass();
            $('#btnUpdatePaper').addClass('layui-btn');

            $('#btnCompanionProposal').attr('disabled', 'true');
            $('#btnEndPaper').attr('disabled', 'true');
            break;
          case '05':
            $('#btnAddNewPaper').attr('disabled', 'false');
            $('#btnAddSubviewpointPaper').attr('disabled', 'false');
            $('#btnAddFirstPaper').attr('disabled', 'false');
            $('#btnGroupDiscuss').attr('disabled', 'false');
            $('#btnUpdatePaper').attr('disabled', 'false');
            $('#btnUpdatePaper').removeClass();
            $('#btnUpdatePaper').addClass('btn btn-outline-info text-nowrap btn-sm');

            $('#btnCompanionProposal').attr('disabled', 'false');
            $('#btnCompanionProposal').removeClass();
            $('#btnCompanionProposal').addClass('layui-btn');

            $('#btnEndPaper').attr('disabled', 'true');
            break;
          case '06':
            $('#btnAddNewPaper').attr('disabled', 'false');
            $('#btnAddSubviewpointPaper').attr('disabled', 'false');
            $('#btnAddFirstPaper').attr('disabled', 'false');
            $('#btnGroupDiscuss').attr('disabled', 'false');
            $('#btnUpdatePaper').attr('disabled', 'false');
            $('#btnCompanionProposal').attr('disabled', 'false');
            $('#btnCompanionProposal').removeClass();
            $('#btnCompanionProposal').addClass('btn btn-outline-info text-nowrap btn-sm');

            $('#btnEndPaper').attr('disabled', 'false');
            $('#btnEndPaper').removeClass();
            $('#btnEndPaper').addClass('layui-btn');
            break;
          case '07':
            $('#btnAddNewPaper').attr('disabled', 'false');
            $('#btnAddSubviewpointPaper').attr('disabled', 'false');
            $('#btnAddFirstPaper').attr('disabled', 'false');
            $('#btnGroupDiscuss').attr('disabled', 'false');
            $('#btnUpdatePaper').attr('disabled', 'false');
            $('#btnCompanionProposal').attr('disabled', 'false');
            $('#btnEndPaper').attr('disabled', 'false');
            $('#btnEndPaper').removeClass();
            $('#btnEndPaper').addClass('btn btn-outline-info text-nowrap btn-sm');

            break;
          default:
            strMsg = `没有数据处理！`;
            alert(strMsg);
            break;
        }
      } else {
        //等于空，那么新建则保持原样，其他按钮置灰
        $('#btnAddNewPaper').attr('disabled', 'false');
        $('#btnAddSubviewpointPaper').attr('disabled', 'true');
        $('#btnAddFirstPaper').attr('disabled', 'true');
        $('#btnGroupDiscuss').attr('disabled', 'true');
        $('#btnUpdatePaper').attr('disabled', 'true');
        $('#btnCompanionProposal').attr('disabled', 'true');
        $('#btnEndPaper').attr('disabled', 'true');
      }
    });
  }

  //统计核算
  public async btnSynPaperStatistics_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strUserId = userStore.getUserId;
    try {
      ShowDivInDivObj(objLayOut, 'divLoading');
      const responseText2 = await clsPaperWApiEx.SynPaperStatisticsAsync(strUserId);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `统计核算成功!`;

        //显示信息框
        alert(strInfo);
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        const strInfo = `统计核算不成功!`;

        //显示信息框
        alert(strInfo);
        HideDivInDivObj(objLayOut, 'divLoading');
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `统计核算异常,${e}.`;
      alert(strMsg);
      HideDivInDivObj(objLayOut, 'divLoading');
    }
  }

  //搜集子观点
  public async btnAddSubviewpointPaper_Click() {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    // const strLogId = GetInputValueInDivObj(divName, 'PaperLogTypeId');
    // const strPaperId = GetHidPaperId(divName);
    // const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    //  strIdCurrEduclsstrPaperTypeLogId = this.GetPapertypeLogId(strLogId);
    try {
      // //通过Id查询是否存在此记录，不存在则提示不能进行此步骤操作；
      ////收集子观点类型是02 ，那么就查询上一级步骤是否已经完成 所以需要 查询01；
      // const strWhere = " 1=1 And logTypeId='" + strPaperTypeLogId + "'";
      // const responseText = await gs_OriginalPaperLog_GetFirstObjAsync(strWhere).then((jsonData) => {
      //     const objgs_OriginalPaperLog: clsgs_OriginalPaperLogEN = <clsgs_OriginalPaperLogEN>jsonData;
      //     if (objgs_OriginalPaperLog != null) {
      //         //功能待完善
      //
      //         window.top.location.href = "xadmin.open('添加论文观点', '../GradEduPaper/OriginalPaperAddideas?paperId=" + strPaperId + "&topicId=" + strTopicId + "', '', '', true)";
      //     }
      //     else {
      //         //成员
      //         const strMsg = `上一步骤未完成，不可使用此功能！`;
      //         alert(strMsg);
      //         return;
      //     }
      // })
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `收集子观点方法不成功,${e}.`;
      alert(strMsg);
    }
  }

  //同伴建议
  public async btnCompanionProposal_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strLogId = GetInputValueInDivObj(divName, 'PaperLogTypeId');
    const strPaperTypeLogId = this.GetPapertypeLogId(strLogId);
    try {
      //通过Id查询是否存在此记录，不存在则提示不能进行此步骤操作；
      const strWhere = ` 1=1 And logTypeId='${strPaperTypeLogId}'`;

      await gs_OriginalPaperLog_GetFirstObjAsync(strWhere).then((jsonData) => {
        const objgs_OriginalPaperLog: clsgs_OriginalPaperLogEN = <clsgs_OriginalPaperLogEN>jsonData;
        if (objgs_OriginalPaperLog != null) {
          //功能待完善
        } else {
          //成员
          const strMsg = `上一步骤未完成，不可使用此功能！`;
          alert(strMsg);
          return;
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `收集子观点方法不成功,${e}.`;
      alert(strMsg);
    }
  }

  //通过获得步骤类型 返回上一步骤类型ID；
  public GetPapertypeLogId(logTypeId: string): string {
    let strLogTypeId = '';
    try {
      let strMsg = '';
      switch (logTypeId) {
        case '01':
          strLogTypeId = ''; //01第一个流程步骤，所以不用查询上一步骤；
          break;
        case '02':
          strLogTypeId = '01';
          break;
        case '03':
          strLogTypeId = '02';
          break;
        case '04':
          strLogTypeId = '03';
          break;
        case '05':
          strLogTypeId = '04';
          break;
        case '06':
          strLogTypeId = '05';
          break;
        case '07':
          strLogTypeId = '06';

          break;
        default:
          strMsg = `没有数据处理！`;
          alert(strMsg);
          break;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `收集子观点方法不成功,${e}.`;
      alert(strMsg);
    }
    return strLogTypeId;
  }

  public async BindDdl4QueryRegion() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q'); //用户查询区域

    //const objXzMajor_Cond: clsXzMajorEN = new clsXzMajorEN();//查询区域
    //const ddl_idXzMajor_q = await clsDropDownList.BindDdl_XzMajorInvPaper_Cache("ddlIdXzMajor_q", objXzMajor_Cond);//专业查询区域

    await LiteratureType_BindDdl_LiteratureTypeIdInDivCache(objLayOut, 'ddlLiteratureTypeId_q');
    //绑定编辑文献类型

    // const ddl_PaperTypeId_q = await this.BindDdl_gs_PaperType_Cache("ddlPaperTypeId_q");
    //绑定论文类型下拉框
    //  const ddl_PaperTypeId = await this.BindDdl_gs_PaperType_Cache("ddlPaperTypeId");

    //论文状态

    await gs_PaperStatus_BindDdl_PaperStatusIdInDivCache(objLayOut, 'ddlPaperStatusId');
    //

    //const ddl_UserId_q = await this.BindDdl_UserId("ddlUserId_q");
    //const ddl_idXzMajor_q = await this.BindDdl_idXzMajorNum("ddlIdXzMajor_q");
  }

  public async BindDdl_gs_PaperType_Cache(ddlgs_PaperTypeId: string) {
    const strWhereCond = ' 1=1 ';
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

  public async BindDdl_gs_PaperStatus_Cache(ddlgs_PaperStatusId: string) {
    const strWhereCond = ' 1=1 ';
    const objDdl = document.getElementById(ddlgs_PaperStatusId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlgs_PaperStatusId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrObjLst_Sel: Array<clsgs_PaperStatusEN> = await gs_PaperStatus_GetObjLstAsync(
        strWhereCond,
      );

      BindDdl_ObjLst(
        ddlgs_PaperStatusId,
        arrObjLst_Sel,
        clsgs_PaperStatusEN.con_PaperStatusId,
        clsgs_PaperStatusEN.con_PaperStatusName,
        '论文状态',
      );
      console.log('完成BindDdl_gs_PaperStatus_Cache!');
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
    try {
      ShowDivInDivObj(objLayOut, 'divLoading');
      const objPage_Paper = new Pub_PaperList(this.divLayout);
      await objPage_Paper.PageLoad();
      //await objPage_Paper.BindGv_vPaper();
      HideDivInDivObj(objLayOut, 'divLoading');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
  */
  public async btnDelRecord_Click() {
    try {
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的记录！`);
        return '';
      }
      let strKeyList;
      if (arrKeyIds.length == 0) return '';
      strKeyList = '';
      for (let i = 0; i < arrKeyIds.length; i++) {
        if (i == 0) strKeyList = `${strKeyList}'${arrKeyIds[i].toString()}'`;
        else strKeyList += `,` + `'${arrKeyIds[i].toString()}'`;
      }

      const strWhereCond = ` paperId in (${strKeyList})`;
      const intPaperRWCount = await vPaperReadWrite_GetRecCountByCondAsync(strWhereCond);
      if (intPaperRWCount != 0) {
        alert('请先删除该论文下阅读或写作数据！');
        return '';
      }

      const intRTPaperCount = await RTPaperRela_GetRecCountByCondAsync(strWhereCond);
      if (intRTPaperCount != 0) {
        alert('请先删除该论文和主题关系数据！');
        return '';
      }

      await this.DelRecordByWhere(strWhereCond);
      //刷新缓存
      PaperEx_ReFreshThisCacheByIdCurrEduCls(strIdCurrEducls);
      await this.DelMultiRecord(arrKeyIds);
      const objPage_Paper = new Pub_PaperList(this.divLayout);
      await objPage_Paper.PageLoad();
      //await objPage_Paper.BindGv_vPaper();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  /* 根据关键字列表删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
 */
  public async DelMultiRecord(arrPaperId: Array<string>) {
    try {
      const returnInt = await Paper_DelPapersAsync(arrPaperId);
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

  //添加论文流程日志
  public async Addgs_OriginalPaperLogSave() {
    const objgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN = new clsgs_OriginalPaperLogEN();
    this.PutDataTogs_OriginalPaperLog(objgs_OriginalPaperLogEN);

    try {
      const responseText2 = await gs_OriginalPaperLog_AddNewRecordAsync(objgs_OriginalPaperLogEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        console.log('添加新建论文日志成功');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加日志记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }
  public async PutDataTogs_OriginalPaperLog(pobjgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = GetHidPaperId(divName);
    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'PaperLogTypeId');
    pobjgs_OriginalPaperLogEN.SetPaperId(strPaperId);
    pobjgs_OriginalPaperLogEN.SetLogTypeId(strPaperLogTypeId);
    let strMsg = '';
    switch (strPaperLogTypeId) {
      case '01':
        pobjgs_OriginalPaperLogEN.SetLogDescription('新建论文');
        break;
      case '02':
        pobjgs_OriginalPaperLogEN.SetLogDescription('收集子观点');
        break;
      case '03':
        pobjgs_OriginalPaperLogEN.SetLogDescription('论文初稿');
        break;
      case '04':
        pobjgs_OriginalPaperLogEN.SetLogDescription('小组讨论');
        break;
      case '05':
        pobjgs_OriginalPaperLogEN.SetLogDescription('论文修改稿');
        break;
      case '06':
        pobjgs_OriginalPaperLogEN.SetLogDescription('同伴建议');
        break;
      case '07':
        pobjgs_OriginalPaperLogEN.SetLogDescription('论文终稿');

        break;
      default:
        strMsg = `没有数据处理！`;
        alert(strMsg);
        break;
    }
    //pobjgs_OriginalPaperLogEN.SetLogDescription( "新建论文";
    pobjgs_OriginalPaperLogEN.SetUpdUser(userStore.getUserId);
    pobjgs_OriginalPaperLogEN.SetUpdDate(clsPubFun4Web.getNowDate());
  }

  //public async GetPaperDataByPaperId() {

  //}

  //统计附件数量并添加到论文表
  public async AddAttachmentCount() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strThisFuncName = this.AddAttachmentCount.name;
    //添加记录的同时并记录论文的读写数
    const strPaperId = clsPrivateSessionStorage.paperId;

    const strWhereCond2 = ` 1=1 and paperId='${strPaperId}'`;
    const intAttachmentCount = await PaperAttachment_GetRecCountByCondAsync(strWhereCond2);

    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strPaperId);
    objPaperEN.SetAttachmentCount(intAttachmentCount);

    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    const responseText = await Paper_UpdateRecordAsync(objPaperEN);
    const returnBool = !!responseText;
    if (returnBool == true) {
      PaperEx_ReFreshThisCacheByIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
      HideDialog();
      const objPage_Paper = new Pub_PaperList(this.divLayout);
      await objPage_Paper.PageLoad();
      //await objPage_Paper.BindGv_vPaper();
      HideDivInDivObj(objLayOut, 'divLoading');
      //显示信息框
      console.log('添加统计数量成功');
    } else {
      const strInfo = `添加统计数量不成功!`;
      alert(strInfo);
      console.log('添加统计数量不成功');
    }
  }

  public async PutDataToPaperAttachmentClass(
    pobjPaperAttachmentEN: clsPaperAttachmentEN,
    filePath: string,
  ) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    pobjPaperAttachmentEN.SetPaperId(GetHidPaperId(divName)); // 论文Id
    let strfilePath = filePath;
    const index = strfilePath.lastIndexOf('/');
    strfilePath = strfilePath.substring(index + 1, strfilePath.length);
    pobjPaperAttachmentEN.SetFilePath(filePath);
    pobjPaperAttachmentEN.SetPaperAttachmentName(strfilePath);

    pobjPaperAttachmentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期

    pobjPaperAttachmentEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
  }

  //论文类型下拉框事件

  public ddlPaperTypeChange() {
    //判断下拉框是否有值，且值是否等于
    if (this.paperTypeId != '' && this.paperTypeId != '0') {
      if (this.paperTypeId == '01') {
        //引用论文
        $('#ddlPaperStatusId').attr('disabled', 'true');
      } else {
        //原创论文
        $('#ddlPaperStatusId').attr('disabled', 'false');
      }
    }
  }

  public async DelOldfileAddNewfile(strIdCurrEduCls: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      ////得到相关论文附件地址，判断是否为空   ---------------注释，因为是自研论文，所以每一次的附件需要保存不删除；
      //if ($("#hdnFileOne").val() != "" || $("#hdnFileTwo").val() != "" || $("#hdnFileThree").val() != "") {
      //    //根据Id删除附件
      //    strIdCurrEduclsstrwhere = "paperId ='" + this.keyId + "'";
      //    const responseText1 = await this.DelRecordByWhere(strwhere);

      //}
      //不管是否有数据删除 都需要执行附件添加功能

      //判断是否有返回的附件路径值
      if (gs_PaperEx.uploadResponseData.fileNameOne != '') {
        //第一个附件框判断
        const strPaperId = GetHidPaperId(divName);
        const returnBool_AddPaperAttach = await PaperAttachmentEx_AddPaperAttachment(
          strPaperId,
          strIdCurrEduCls,
          gs_PaperEx.uploadResponseData,
        );
      }
    } catch (e: any) {
      const strInfo = `修改记录不成功!`;

      //显示信息框
      alert(strInfo);
      console.log('完成UpdateRecordSave');
    }
  }

  /* 
   根据关键字删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
  */
  public async DelRecordByWhere(strWhere: string) {
    try {
      const returnInt: number = await PaperAttachment_DelPaperAttachmentsByCondAsync(strWhere);
      if (returnInt > 0) {
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
        console.log(`删除附件成功,共删除${returnInt}条记录!`);
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

  //public async GetPaperDataByPaperId() {

  //}

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

  //论文审核
  public async btnAudit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要审核的记录！');
      return;
    }

    this.SubmitRecord(strKeyId);
  }
  //审核判断；
  public async SubmitRecord(strPaperId: string) {
    this.keyId = strPaperId;

    try {
      const objPaperEN = await Paper_GetObjByPaperIdAsync(strPaperId);
      if (objPaperEN == null) return;

      //通过session 权限获取权限

      //判断角色 //学生00620003
      if (userStore.getRoleId == '00620003') {
        // //通过判断数据用户是否是当前登录用户；
        if (objPaperEN.updUser == userStore.getUserId) {
          //判断数据是否已审核
          if (objPaperEN.isChecked == false) {
            this.SubmitRecordSave();
          } else {
            alert('当前数据已审核！');
            return;
          }
        } else {
          alert('当前数据不是您所添加，不能修改！');
          return;
        }
      } else {
        //可以提交
        //判断数据是否已提交
        if (objPaperEN.isChecked == false) {
          this.SubmitRecordSave();
        } else {
          alert('当前数据已审核！');
          return;
        }
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 论文审核
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async SubmitRecordSave(): Promise<boolean> {
    const strThisFuncName = this.SubmitRecordSave.name;
    //
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(this.keyId);
    //设置提交状态；
    objPaperEN.SetIsChecked(true);
    this.PutDataToPaperClassAudit(objPaperEN);
    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        const strInfo = `论文审核成功!`;

        //显示信息框
        alert(strInfo);
        //刷新缓存
        //vPaper_ReFreshThisCache();
        HideDialog();
        const objPage_Paper = new Pub_PaperList(this.divLayout);
        await objPage_Paper.PageLoad();
        //await objPage_Paper.BindGv_vPaper();
      } else {
        const strInfo = `论文审核不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('审核失败');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }
  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjPaperReadWriteEN">数据传输的目的类对象</param>
*/
  public PutDataToPaperClassAudit(pobjPaperEN: clsPaperEN) {
    //pobjPaperReadWriteEN.SetPaperRWId(this.paperRWId;// 论文读写Id
    pobjPaperEN.SetIsChecked(true);
    pobjPaperEN.SetChecker(userStore.getUserId); //提交人；
  }
  /*
   * 主题内容
   */
  // public set paperContent(value: string) {
  //     $("#txtPaperContent").html(value);
  // }
  // /*
  // * 主题内容
  //*/
  // public get paperContent(): string {

  //     strIdCurrEduclseditors = textboxio.get('#txtPaperContent');
  //     strIdCurrEduclseditor = editors[0];
  //     return editor.content.get();

  //     return $("#txtPaperContent").html();
  // }

  ///* 函数功能:在数据 列表中跳转到某一页
  //   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
  //   <param name = "intPageIndex">页序号</param>
  // */
  //public IndexPageOne(intPageIndex: number) {
  //    if (intPageIndex == 0) {
  //        intPageIndex = this.objPager.pageCount;
  //    }
  //    console.log("跳转到" + intPageIndex + "页");
  //    this.setCurrPageIndex(intPageIndex, this.divName4Pager);
  //    this.BindGv_vXzMajorDirection();
  //}

  //论文提交
  public async btnIsSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    try {
      this.IsSubmitRecordSave(strKeyId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*提交论文
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async IsSubmitRecordSave(strKeyId: string) {
    const strThisFuncName = this.IsSubmitRecordSave.name;
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    //
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strKeyId);
    objPaperEN.SetIsSubmit(true);
    //objPaperEN..submitter = userStore.getUserId;//提交人；
    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        const strInfo = `提交成功!`;

        //显示信息框
        alert(strInfo);

        //刷新缓存
        PaperEx_ReFreshThisCacheByIdCurrEduCls(strIdCurrEducls);
        HideDialog();
        const objPage_Paper = new Pub_PaperList(this.divLayout);
        await objPage_Paper.PageLoad();
        //await objPage_Paper.BindGv_vPaper();
      } else {
        const strInfo = `提交不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('取消失败');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `提交不成功,${e}.`;
      alert(strMsg);
    }
  }

  //取消论文提交
  public async btnCancelSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
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

  /*取消提交论文
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async CancelSubmitRecordSave(strKeyId: string) {
    const strThisFuncName = this.CancelSubmitRecordSave.name;
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    //
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strKeyId);
    objPaperEN.SetIsSubmit(false);
    //objPaperEN..submitter = userStore.getUserId;//提交人；
    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        const strInfo = `取消成功!`;

        //显示信息框
        alert(strInfo);
        //刷新缓存
        PaperEx_ReFreshThisCacheByIdCurrEduCls(strIdCurrEducls);
        HideDialog();
        const objPage_Paper = new Pub_PaperList(this.divLayout);
        await objPage_Paper.PageLoad();
        //await objPage_Paper.BindGv_vPaper();
      } else {
        const strInfo = `取消不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('取消失败');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `取消记录不成功,${e}.`;
      alert(strMsg);
    }
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

  /*
   * 论文类型
   */
  public set paperTypeId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlPaperTypeId', value);
  }
  /*
   * 论文类型
   */
  public get paperTypeId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlPaperTypeId');
  }

  /*
   * 论文状态
   */
  public set paperStatusId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlPaperStatusId', value);
  }
  /*
   * 论文状态
   */
  public get paperStatusId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlPaperStatusId');
  }

  //屏蔽控件
  public Disabled_true() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    SetInputDisable(objLayOut, 'txtPaperTitle', true);
    $('#txtPaperContent').attr('disabled', 'true');

    $('#txtPeriodical').attr('disabled', 'true');
    $('#txtAuthor').attr('disabled', 'true');
    $('#txtResearchQuestion').attr('disabled', 'true');
    $('#txtKeyword').attr('disabled', 'true');
    $('#ddlLiteratureTypeId').attr('disabled', 'true');

    $('#txtLiteratureSources').attr('disabled', 'true');
    $('#txtLiteratureLink').attr('disabled', 'true');

    $('#txtLiteratureLink').attr('disabled', 'true');
    $('#txtLiteratureLink').attr('disabled', 'true');

    $('#ddlPaperTypeId').attr('disabled', 'true');
    $('#ddlPaperStatusId').attr('disabled', 'true');
  }

  //开放控件
  public Disabled_false() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    SetInputDisable(objLayOut, 'txtPaperTitle', false);
    SetInputDisable(objLayOut, 'txtPaperTitle', false);
    $('#txtPaperContent').attr('disabled', 'false');

    $('#txtPeriodical').attr('disabled', 'false');
    $('#txtAuthor').attr('disabled', 'false');
    $('#txtResearchQuestion').attr('disabled', 'false');
    $('#txtKeyword').attr('disabled', 'false');
    $('#ddlLiteratureTypeId').attr('disabled', 'false');

    $('#ddlPaperTypeId').attr('disabled', 'false');
    $('#ddlPaperStatusId').attr('disabled', 'true');

    $('#txtLiteratureSources').attr('disabled', 'false');
    $('#txtLiteratureLink').attr('disabled', 'false');

    $('#txtLiteratureLink').attr('disabled', 'false');
    $('#txtLiteratureLink').attr('disabled', 'false');
  }

  /*
   * 专业流水号
   */
  public get idXzMajor_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlIdXzMajor_q');
  }
  /*
   * 研究方向名
   */
  public get majorDirectionName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtMajorDirectionName_q');
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
}
