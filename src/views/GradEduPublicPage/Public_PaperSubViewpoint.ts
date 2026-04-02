import $ from 'jquery';
import { vRTPaperRelaEx_CopyToEx } from '@/ts/L3ForWApiEx/GradEduTopic/clsvRTPaperRelaExWApi';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
import { clsPaperSubAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachmentEN';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsvRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN';
import { clsvRTPaperRelaENEx } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaENEx';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { clsSubViewpointTypeEN } from '@/ts/L0Entity/RT_Params/clsSubViewpointTypeEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { PaperSubAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubAttachmentWApi';
import { vPaperSubViewpoint_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import {
  vRTPaperRela_GetObjBymIdAsync,
  vRTPaperRela_GetObjLstByPagerAsync,
  vRTPaperRela_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTPaperRelaWApi';
import { vRTUserRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import { SubViewpointType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsSubViewpointTypeWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { BindTabV2Where_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { GetAddressAndPort } from '@/ts/PubConfig/clsSysPara4WebApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
  GetButtonObjLstInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { vUsersSimEx_func } from '@/ts/L3ForWApiExShare/UserManage_GP/clsvUsersSimExWApi';
import { vPaperEx_BindDdl_PaperIdByTopicId } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
import { clsRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointEN';
import { RTViewpointEx_AddRecord } from '@/ts/L3ForWApiEx/GradEduTopic/clsRTViewpointExWApi';
import { message } from '@/utils/myMessage';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { vPaperSubViewpointEx_DetailShow_Topic } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSubViewpointExWApi';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare function HideDialogPaperSubViewpoint(): void;
declare let window: any;
/* PaperSubViewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Public_PaperSubViewpoint extends PaperCRUD {
  public static GetPropValue: (strPropName: string) => string;
  public static thisDivLayout: HTMLDivElement;
  public static thisPaperId: string;
  public static paperTypeId = '';

  public mstrListDivPaper = 'divTopicPaperDataLst';
  public sortvRTPaperRelaBy = '';
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
    console.log('InitVarSet in QxPrjMenusCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPrjMenusCRUDEx');
  }
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        this.sortvRTPaperRelaBy = 'updDate Desc';

        //  strPaperId = $("#hidPaperId").val();

        // const gvResult2 = await this.Bind_PaperSubViewpoint();

        //const gvResult3 = await this.Bind_PaperQA();

        //  $("#divLoading").hide();
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //////////////////////////////////////论文子观点//////////////////////////////////////

  //论文子观点
  public async liPaperSubViewpoint(objLayOut: HTMLDivElement, strTopicId: string) {
    try {
      await vPaperEx_BindDdl_PaperIdByTopicId('ddlPaperId_q', strTopicId);
      const strPaperId = GetSelectValueInDivObj(objLayOut, 'ddlPaperId_q');
      await this.BindListPaperSubViewpoint(objLayOut, strPaperId, strTopicId);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //论文子观点列表
  public async BindListPaperSubViewpoint(
    objLayOut: HTMLDivElement,
    strPaperId: string,
    strTopicId: string,
  ) {
    const strUserId = userStore.getUserId;
    const strHtml = await this.Bind_PaperSubViewpoint(objLayOut, strUserId, strPaperId, strTopicId);
    if (strHtml == null) return;
    //拼接；
    $('#tbList').html(strHtml);
    this.SetEventForViewPoint(objLayOut);
  }
  public SetEventForViewPoint(objLayOut: HTMLDivElement) {
    {
      const arrbtnAddToCurrTopicId = GetButtonObjLstInDivObjN(objLayOut, 'btnAddToCurrTopicId');
      for (const btnAddToCurrTopicId of arrbtnAddToCurrTopicId) {
        if (btnAddToCurrTopicId != null) {
          const strKeyId = btnAddToCurrTopicId.getAttribute('keyid');

          if (strKeyId != null) {
            const strTopicId = clsPrivateSessionStorage.topicIdInTree;
            const arr = strKeyId.split('|');
            if (arr.length != 2) continue;
            // const objData = { userId: arr[0], idCurrEduCls: arr[1] };
            (function (
              strTopicId,
              strSubViewpointId,
              strgsKnowledgeTypeId,
              divLayout: HTMLDivElement,
            ) {
              btnAddToCurrTopicId.onclick = function () {
                Public_PaperSubViewpoint.AddRTViewpoint(
                  strTopicId,
                  strSubViewpointId,
                  strgsKnowledgeTypeId,
                  divLayout,
                );
              };
            })(strTopicId, Number(arr[0]), arr[1], this.divLayout);
          }
        }
      }
    }
  }
  //选择论文
  public async SelectPaperForViewpoint(
    divName: HTMLDivElement,
    strTopicId: string,
    strPaperId: string,
  ) {
    try {
      Public_PaperSubViewpoint.thisDivLayout = divName;
      Public_PaperSubViewpoint.thisPaperId = strPaperId;

      await this.BindListPaperSubViewpoint(divName, strPaperId, strTopicId);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }
  public async SelectPaper(divName: HTMLDivElement, strTopicId: string, strPaperId: string) {
    try {
      Public_PaperSubViewpoint.thisDivLayout = divName;
      const divName4Pager = 'divPager_TopicPaperLst';
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(divName, divName4Pager);
        this.bolIsInitShow = true; //
      }
      await this.BindGv_vRTPaperRela_pyf(divName, strTopicId);
      // await this.BindGv_Sub(divName, strTopicId);
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  public CombinevPaperSubViewpointCondition_Topic(strTopicId: string): string {
    console.log(strTopicId);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and ${clsRTViewpointEN.con_SubViewpointId} in (select ${clsRTViewpointEN.con_SubViewpointId} from ${clsRTViewpointEN._CurrTabName} where ${clsRTViewpointEN.con_TopicId} = '${strTopicId}')`;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      strWhereCond += ' order by orderNum Asc';
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperSubViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombinevPaperSubViewpointCondition_Topic_Paper(
    objLayOut: HTMLDivElement,
    strPaperId: string,
    strTopicId: string,
  ): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1=1 ';

    // const strPaperId = clsPrivateSessionStorage.paperId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (strTopicId != '') {
        strWhereCond += ` And ${clsRTViewpointEN.con_SubViewpointId} in (select ${clsRTViewpointEN.con_SubViewpointId} from ${clsRTViewpointEN._CurrTabName} where ${clsRTViewpointEN.con_TopicId} = '${strTopicId}')`;
      }
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_PaperId} = '${strPaperId}'`;
      }

      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      if (
        strRoleId == enumQxRoles.System_Admin_00620001 ||
        strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        //$("#btnDelRecord").show();
      } else if (strRoleId == '00620002') {
        //可以查看所有；
      } else {
        if (this.readWriteTypeId == '01') {
          strWhereCond += ` And updUser = '${strUserId}'`;
        }
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperSubViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombinevPaperSubViewpointCondition_Paper(
    objLayOut: HTMLDivElement,
    strPaperId: string,
  ): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1=1 ';

    // const strPaperId = clsPrivateSessionStorage.paperId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_PaperId} = '${strPaperId}'`;
      }

      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      if (
        strRoleId == enumQxRoles.System_Admin_00620001 ||
        strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        //$("#btnDelRecord").show();
      } else if (strRoleId == '00620002') {
        //可以查看所有；
      } else {
        if (this.readWriteTypeId == '01') {
          strWhereCond += ` And updUser = '${strUserId}'`;
        }
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperSubViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombinevPaperSubViewpointCondition_Topic_Self(strTopicId: string): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    const strUserId = userStore.getUserId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (strTopicId != '') {
        strWhereCond += ` And ${clsRTViewpointEN.con_SubViewpointId} in (select ${clsRTViewpointEN.con_SubViewpointId} from ${clsRTViewpointEN._CurrTabName} where ${clsRTViewpointEN.con_TopicId} = '${strTopicId}')`;
      }
      //if (strPaperId != "") {
      //    strWhereCond += ` And ${clsvPaperSubViewpointEN.con_PaperId} = '${strPaperId}'`;
      //}

      if (this.readWriteTypeId == '01') {
        strWhereCond += ` And updUser = '${strUserId}'`;
      }

      strWhereCond += ' order by orderNum Asc';
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperSubViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //绑定论文子观点内容
  public async Bind_PaperSubViewpoint(
    objLayOut: HTMLDivElement,
    strUserId: string,
    strPaperId: string,
    strTopicId: string,
  ) {
    const strWhereCond_Topic = this.CombinevPaperSubViewpointCondition_Topic(strTopicId);
    const strWhereCond_Topic_Paper = this.CombinevPaperSubViewpointCondition_Topic_Paper(
      objLayOut,
      strPaperId,
      strTopicId,
    );
    const strWhereCond_Paper = this.CombinevPaperSubViewpointCondition_Paper(objLayOut, strPaperId);

    // const strWhereCond4 = this.CombinevPaperSubViewpointCondition4(strTopicId);
    const strWhereCond_CurrEduCls = ` 1=1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;

    //strWhereCond6 = ` ${clsvSysVoteEN.con_TableKey} = '${strPaperRWId}' And ${clsvSysVoteEN.con_UpdUser} = '${strUserId}'`;
    //strWhereCond6 = " 1 =1 and updUser='" + strUserId + "' and voteTypeId='02' and pubParentId='" + strPaperRWId + "'";
    // const strWhereCond6 = ` 1 =1 and updUser='${strUserId}' and voteTypeId='02' `;
    //intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页

    // const arrSectionObjLst: Array<clsSectionEN> = [];

    let arrSubViewpointTypeObjLst: Array<clsSubViewpointTypeEN> = [];

    let arrvPaperSubViewpointObjLst: Array<clsvPaperSubViewpointEN> = [];

    //主题用户关系
    let arrRTUserRelaObjLst: Array<clsvRTUserRelaEN> = [];
    try {
      //获取用户缓存数据

      const strWhere = '1=1';
      arrSubViewpointTypeObjLst = await SubViewpointType_GetObjLstAsync(strWhere);

      const arrvPaperSubViewpointObjLst_Topic_Paper = await vPaperSubViewpoint_GetObjLstAsync(
        strWhereCond_Topic_Paper,
      );
      const arrvPaperSubViewpointObjLst_Paper = await vPaperSubViewpoint_GetObjLstAsync(
        strWhereCond_Paper,
      );

      //获取主题用户关系数据得到用户色码
      const strWhereCondUser = ` 1=1 And ${clsvRTUserRelaEN.con_TopicId} = '${strTopicId}'`;
      arrRTUserRelaObjLst = await vRTUserRela_GetObjLstAsync(strWhereCondUser);

      let strhtml = '';
      let cateid = 0;
      let cateid_ = 0;
      let intJ = 0;

      for (let j = 0; j < arrSubViewpointTypeObjLst.length; j++) {
        cateid++;
        intJ++;
        const fid = 0;
        const strsubTypeId = arrSubViewpointTypeObjLst[j].subViewpointTypeId;
        //先创建子模块类型
        //strhtml += '<li data-role="list-divider" role="heading" class="ui-li-has-alt ui-li-divider ui-bar-inherit ui-first-child"><a><H1>' + this.SubViewpointTypeObjLst[j].subViewpointTypeName + ' </H1></a><span class="ui-li-count ui-body-inherit" ><a href="javascript:void(0)" title = "添加" onclick=btnAddRecordInTab_Click("' + strsubTypeId + '");>添加</a></span></li>';

        strhtml += `<tr cate-id="${cateid}" fid="${fid}"><td>`;

        strhtml += `<div style="float:left;"><h3>${intJ}.${arrSubViewpointTypeObjLst[j].subViewpointTypeName}</h3></div>`;

        strhtml += '</div></td></tr>';
        //<td>' + cateid + ' </td>
        //strhtml += '<td class="td-manage"></td>';

        //子类型数据
        let strSubViewpointId = 0;
        cateid_ = cateid;
        let intK = 0;

        arrvPaperSubViewpointObjLst = arrvPaperSubViewpointObjLst_Paper.filter(
          (x) => x.subViewpointTypeId == strsubTypeId,
        );

        for (let k = 0; k < arrvPaperSubViewpointObjLst.length; k++) {
          const objvPaperSubViewpoint = arrvPaperSubViewpointObjLst[k];
          strSubViewpointId = objvPaperSubViewpoint.subViewpointId;
          //是否是当前主题的观点
          let bolIsCurrTopicViewpoint = false;

          const arrvPaperSubViewpointObjLst_Exist = arrvPaperSubViewpointObjLst_Topic_Paper.filter(
            (x) => x.subViewpointId == strSubViewpointId,
          );
          if (arrvPaperSubViewpointObjLst_Exist.length > 0) {
            bolIsCurrTopicViewpoint = true;
          }

          //先判断子模块类型数据ID和子观点知否匹配；
          //if (strsubTypeId == objvPaperSubViewpoint.subViewpointTypeId) {
          cateid++;
          intK++;

          strhtml += `<tr cate-id="${cateid}" fid="${cateid_}" ><td>`;
          const strDetailShow = await vPaperSubViewpointEx_DetailShow_Topic(
            objvPaperSubViewpoint,
            strTopicId,
            bolIsCurrTopicViewpoint,
            intK,
          );
          strhtml += strDetailShow;

          strhtml += '</td></tr>';
        }
      }
      //拼接；

      //  $("#tbList").html(strhtml);
      return strhtml;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////主题论文关系
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevRTPaperRelaCondition(strTopicId: string): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id

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
  public async BindGv_vRTPaperRela_pyf(divName: HTMLDivElement, strTopicId: string) {
    const strPaperTypeId = Public_PaperSubViewpoint.paperTypeId;
    let strListDiv; // = '';
    let strWhereCond = await this.CombinevRTPaperRelaCondition(strTopicId);

    // const divName = GetDivObjInDivObj(objDivLayOut, this.mstrListDivMajorDirection);
    if (strPaperTypeId == '01') {
      strListDiv = GetDivObjInDivObj(divName, this.mstrListDivPaper);
      strWhereCond += ` and paperTypeId='${strPaperTypeId}'`;
    } else {
      strListDiv = GetDivObjInDivObj(divName, this.mstrListDivPaper);
      strWhereCond += ` and paperTypeId='${strPaperTypeId}'`;
    }

    const intCurrPageIndex = this.CurrPageIndexPaper; //获取当前页
    let arrvRTPaperRelaObjLst: Array<clsvRTPaperRelaEN> = [];
    let arrvRTPaperRelaENExObjLst: Array<clsvRTPaperRelaENEx> = [];
    try {
      this.recCount = await vRTPaperRela_GetRecCountByCondAsync(strWhereCond);

      //如果记录数小于10,
      if (this.recCount < 10) {
        $('#divPager4Paper').attr('style', 'display:none;');
      }

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.sortvRTPaperRelaBy,
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
      //if (strPaperTypeId == "01") {
      this.BindTab_vRTPaperRela(strListDiv, arrvRTPaperRelaENExObjLst);
      // }
      console.log('完成BindGv_vRTPaperRela(in Public_PaperSubViewpoint)!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objzx_ConceptS">源对象</param>
  public async FuncMap(objvRTPaperRela: clsvRTPaperRelaENEx) {
    try {
      {
        const vUsersSim_UserId = objvRTPaperRela.updUser;
        const vUsersSim_UserName = await vUsersSimEx_func(
          clsvUsersSimEN.con_UserId,
          clsvUsersSimEN.con_UserName,
          vUsersSim_UserId,
        );
        objvRTPaperRela.userName = vUsersSim_UserName;
      }
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
        fldName: 'updDate',
        colHeader: '编辑日期',
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
        colHeader: '进入子观点',
        text: '进入子观点',
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
          btn1.setAttribute('onclick', `btnPaperSubViewpoint_Click("${strKeyId}");`);
          return btn1;
        },
      },
      //{
      //    fldName: "",
      //    colHeader: "删除",
      //    text: "删除", tdClass: "text-left", sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btnDelPaperRelaRecordInTab_Click("${strKeyId}");`);
      //        return btn1;
      //    }
      //},
    ];

    const divName4Pager = 'divPager_TopicPaperLst';
    BindTabV2Where_V(divContainer, arrvRTPaperRelaObjLst, arrDataColumn, 'mId', 'TopicRTPaper');
    //BindTab(o, arrvRTPaperRelaObjLst, arrDataColumn, "mId");
    if (this.recCount > 10) {
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(divContainer, this, divName4Pager);
    }
  }

  //选择论文
  public async btnPaperSubViewpoint_Click(strKeyId: string) {
    //通过ID得到论文ID
    const keyId = Number(strKeyId);
    await vRTPaperRela_GetObjBymIdAsync(keyId).then((jsonData) => {
      const objvRTPaperRelaEN: clsvRTPaperRelaEN = <clsvRTPaperRelaEN>jsonData;
      if (objvRTPaperRelaEN != null) {
        $('#hidTopicPaperId').val(objvRTPaperRelaEN.paperId);
        HideDialogPaperSubViewpoint();
      }
    });
  }

  /*
   * 获取当前页序号  -------论文
   */
  public get CurrPageIndexPaper(): number {
    const divName = Public_PaperSubViewpoint.thisDivLayout;
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndexPaper');
  }
  /*
   * 设置当前页序号-------论文
   */
  public set CurrPageIndexPaper(value: number) {
    const divName = Public_PaperSubViewpoint.thisDivLayout;
    SetInputValueInDivObj(divName, 'hidCurrPageIndexPaper', value);
  }
  public static async AddRTViewpoint(
    strTopicId: string,
    strSubViewpointId: number,
    strgsKnowledgeTypeId: string,
    divLayout: HTMLDivElement,
  ) {
    await RTViewpointEx_AddRecord(strTopicId, strSubViewpointId, strgsKnowledgeTypeId);
    const objPage = new Public_PaperSubViewpoint(divLayout);
    await objPage.SelectPaperForViewpoint(
      Public_PaperSubViewpoint.thisDivLayout,
      strTopicId,
      Public_PaperSubViewpoint.thisPaperId,
    );
    message.success('已经添加到当前主题！');
  }
  public get readWriteTypeId(): string {
    return Public_PaperSubViewpoint.GetPropValue('readWriteTypeId');
  }
}
