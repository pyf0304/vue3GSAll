import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { vPaperSubViewpointEx_GetSubViewpointTypeNumObjLstAsync } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSubViewpointExWApi';
import { vgs_PaperAttentionEx_GetPaperIdNumObjLstAsync } from '@/ts/L3ForWApiEx/GradEduPaper/clsvgs_PaperAttentionExWApi';
import { PaperEx_ReFreshThisCacheByIdCurrEduCls } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsgs_PaperAttentionEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperAttentionEN';
import { clsgs_PaperGroupEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperGroupEN';
import { clsPaperSubAttachmentEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubAttachmentEN';
import { clsPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsPaperSubViewpointEN';
import { clsvgs_PaperAttentionEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PaperAttentionEN';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsgs_TagsTypeEN } from '@/ts/L0Entity/GradEduTools/clsgs_TagsTypeEN';
import { clsgs_TagsEN } from '@/ts/L0Entity/InteractManage/clsgs_TagsEN';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { clsvqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsvqa_AnswerEN';
import { clsvqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsvqa_QuestionsEN';
import { clsSubViewpointTypeEN } from '@/ts/L0Entity/RT_Params/clsSubViewpointTypeEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  gs_PaperAttention_DelRecordAsync,
  gs_PaperAttention_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperAttentionWApi';
import {
  gs_PaperGroup_AddNewRecordWithReturnKeyAsync,
  gs_PaperGroup_GetObjLstCache,
  gs_PaperGroup_ReFreshCache,
  gs_PaperGroup_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperGroupWApi';
import { PaperSubAttachment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubAttachmentWApi';
import { PaperSubViewpoint_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperSubViewpointWApi';
import { Section_BindDdl_SectionIdByPaperIdInDivCache } from '@/ts/L3ForWApi/GradEduPaper/clsSectionWApi';
import {
  vgs_PaperAttention_GetObjLstAsync,
  vgs_PaperAttention_GetObjLstCache,
  vgs_PaperAttention_ReFreshThisCache,
} from '@/ts/L3ForWApi/GradEduPaper/clsvgs_PaperAttentionWApi';
import { vPaperSubViewpoint_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { gs_TagsType_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsgs_TagsTypeWApi';
import { gs_Tags_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsgs_TagsWApi';
import {
  SysVote_AddNewRecordAsync,
  SysVote_GetObjLstAsync,
  SysVote_GetRecCountByCondAsync,
  SysVote_IsExistRecordAsync,
} from '@/ts/L3ForWApi/InteractManage/clsSysVoteWApi';
import { vqa_Answer_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsvqa_AnswerWApi';
import { vqa_Questions_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsvqa_QuestionsWApi';
import { SubViewpointType_GetObjLstCache } from '@/ts/L3ForWApi/RT_Params/clsSubViewpointTypeWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { GetAddressAndPort, clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetAObjLstInDivObj,
  GetA_Empty,
  GetButtonObjLstInDivObjN,
  GetCheckedKeyIdsInDivObj,
  GetDiv_Empty,
  GetI_Empty,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetLi_Empty,
  GetSelectValueInDivObj,
  GetSpan_Empty,
  GetUlObjInDivObj,
  GetUl_Empty,
  HideDivInDivObj,
  GetDivObjInDivObj,
  GetTBodyObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import enumSubViewPointTabs from '@/ts/FunClass/enumSubViewPointTabs';
import { userStore } from '@/store/modulesShare/user';
import { paperSubAttachmentStore } from '@/store/modules/paperSubAttachment';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { sysVoteStore } from '@/store/modules/sysVote';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare let window: any;
/* PaperSubViewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PaperAttention {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => string;
  public static GetPropValue: (strPropName: string) => string;
  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divLayout: HTMLDivElement; //界面布局的层对象
  public static divEditGroup: HTMLDivElement; //界面布局的层对象
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvPaperSubViewpointBy: string = "subViewpointId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 50;
  }

  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName = this.getDivName(enumDivType.LayOut_01);

    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        await this.PaperAttentionTree();

        const strPaperId = clsPrivateSessionStorage.paperId;
        await Section_BindDdl_SectionIdByPaperIdInDivCache(
          PaperAttention.divLayout,
          'ddlSectionId_q',
          strPaperId,
        );
        await this.BindDdl_SubViewpointTypeId('ddlSubViewpointTypeId_q');

        // await this.BindDdl_PaperGroupId('ddlPaperGroupId');

        await this.li_PaperAttentionTab_Click();

        //const gvResult2 = await this.Bind_PaperSubViewpoint();

        //const gvResult3 = await this.Bind_PaperQA();

        HideDivInDivObj(objLayOut, 'divLoading');
        //刷新缓存
        PaperEx_ReFreshThisCacheByIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async li_PaperAttentionTab_Click() {
    //如果是点击了树菜单、或者是刷新，那么需要做样式控制；
    //首先要去掉ul下 li a 样式
    //$("#myTab li a").removeClass();
    //$("#myTab li").removeClass();
    //判断根据序号显示不同的数据源
    const strPaperId = clsPrivateSessionStorage.paperId;
    if (strPaperId != '') {
      // const strnum = GetInputValueInDivObj(divName, 'h1idTabNum');
      const activeTabId = PaperAttention.GetPropValue('activeTabId');
      switch (activeTabId) {
        case enumSubViewPointTabs.Paper_SubViewpoint: // (strnum == '1') {
          await this.Bind_PaperSubViewpoint();
          break;
        case enumSubViewPointTabs.Paper_QA: // case '2':
          await this.Bind_PaperQA();
          break;
        case enumSubViewPointTabs.Paper_Tags: // case '3':
          await this.Bind_PaperTags();
          break;
        case enumSubViewPointTabs.Tea_QA: // case '4':
          await this.Bind_TeaQA();
          break;
        default:
          await this.Bind_PaperSubViewpoint();
          break;
      }
    }
  }

  /// <summary>
  /// 为下拉框获取数据,从表:[SubViewpointType]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_SubViewpointTypeId(ddlSubViewpointTypeId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    // console.log(strWhereCond);
    const objDdl = document.getElementById(ddlSubViewpointTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlSubViewpointTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
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

  //论文组
  public async BindDdl_PaperGroupId(ddlPaperGroupId: string) {
    //strWhereCond = " updUser='" + userStore.getUserId + "' order by updDate Asc";
    const strUserId = userStore.getUserId;
    const objDdl = document.getElementById(ddlPaperGroupId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlPaperGroupId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      let arrObjLst_Sel: Array<clsgs_PaperGroupEN> = await gs_PaperGroup_GetObjLstCache(strUserId);
      arrObjLst_Sel = arrObjLst_Sel.sort((x) => x.GetFldValue(clsgs_PaperGroupEN.con_PaperGroupId));
      BindDdl_ObjLst(
        ddlPaperGroupId,
        arrObjLst_Sel,
        clsgs_PaperGroupEN.con_PaperGroupId,
        clsgs_PaperGroupEN.con_PaperGroupName,
        '论文组',
      );
      console.log('完成BindDdl_gs_PaperGroupId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*查询*/
  public async btnQueryEx_Click() {
    try {
      //const gvResult = await this.Bind_PaperSubViewpoint();
      await this.li_PaperAttentionTab_Click();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //关注论文树
  public async PaperAttentionTree() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strUserId = userStore.getUserId;
    const strWhereCond1 = ` updUser='${strUserId}'`;
    // const strWhereCond2 = ` userId='${strUserId}'`;
    //声明主题变量

    let arrgs_PaperGroupObjLst: Array<clsgs_PaperGroupEN> = [];
    let arrvgs_PaperAttentionObjLst0: Array<clsvgs_PaperAttentionEN> = [];
    let arrvgs_PaperIdNumObjLst: Array<clsvgs_PaperAttentionEN> = [];
    let arrvgs_PaperAttentionObjLst: Array<clsvgs_PaperAttentionEN> = [];

    arrgs_PaperGroupObjLst = await gs_PaperGroup_GetObjLstCache(strUserId);

    if (GetInputValueInDivObj(objLayOut, 'hidMyResearch') == '1') {
      arrvgs_PaperIdNumObjLst = await vgs_PaperAttentionEx_GetPaperIdNumObjLstAsync(strWhereCond1);

      let arrPaperId = '';
      if (arrvgs_PaperIdNumObjLst.length > 0) {
        for (let i = 0; i < arrvgs_PaperIdNumObjLst.length; i++) {
          arrPaperId += `${arrvgs_PaperIdNumObjLst[i].paperId},`;
        }
        arrPaperId = arrPaperId.substring(0, arrPaperId.length - 1);

        const strWhereCond3 = ` paperId in(${arrPaperId}) and userId='${userStore.getUserId}'`;

        arrvgs_PaperAttentionObjLst0 = await vgs_PaperAttention_GetObjLstAsync(strWhereCond3);
      }
    } else {
      arrvgs_PaperAttentionObjLst0 = await vgs_PaperAttention_GetObjLstCache(strUserId);
    }
    const TreeBind = GetUlObjInDivObj(objLayOut, 'TreeBind');
    TreeBind.innerHTML = '';
    // let strhtml = '';
    if (arrgs_PaperGroupObjLst.length > 0) {
      for (let i = 0; i < arrgs_PaperGroupObjLst.length; i++) {
        // strhtml += '<li class="li">';
        const li1 = GetLi_Empty('li');
        // strhtml += `<a style="float:left;" href="javascript:void(0)" id="${arrgs_PaperGroupObjLst[i].paperGroupId}" class="main" title="分组:${arrgs_PaperGroupObjLst[i].paperGroupName}" o1nclick=main_Click("${arrgs_PaperGroupObjLst[i].paperGroupId}")>${arrgs_PaperGroupObjLst[i].paperGroupName}</a>`;
        {
          const a1 = GetA_Empty('main');
          a1.style.float = 'left';
          a1.href = 'javascript:void(0)';
          a1.id = arrgs_PaperGroupObjLst[i].paperGroupId;
          a1.title = `分组:${arrgs_PaperGroupObjLst[i].paperGroupName}`;
          a1.innerText = arrgs_PaperGroupObjLst[i].paperGroupName;
          li1.appendChild(a1);
        }
        const dataGroup = {
          paperGroupId: arrgs_PaperGroupObjLst[i].paperGroupId,
          paperGroupName: arrgs_PaperGroupObjLst[i].paperGroupName,
        };

        {
          const a2 = GetA_Empty('');

          a2.href = 'javascript:void(0)';
          a2.id = arrgs_PaperGroupObjLst[i].paperGroupId;
          a2.title = `分组:${arrgs_PaperGroupObjLst[i].paperGroupName}`;
          // a2.innerText = arrgs_PaperGroupObjLst[i].paperGroupName;

          (function (dataGroup) {
            a2.onclick = function () {
              PaperAttention.vuebtn_Click('UpdateGroupName', dataGroup);
            };
          })(dataGroup);

          // const i2 = GetI_Empty('layui-icon layui-icon-edit');
          // i2.style.fontSize = '16px';
          // i2.style.color = '#0080ff';
          // i2.title = '编辑组名';
          const spn2 = GetSpan_Empty('ml-1');
          spn2.style.fontSize = '16px';
          spn2.style.color = '#0080ff';
          spn2.title = '编辑组名';
          spn2.innerHTML = clsIcon.faPenToSquare;
          // const svg1 = document.createElement('svg');
          // svg1.outerHTML = clsIcon.faPlay;
          a2.appendChild(spn2);

          li1.appendChild(a2);
        }
        // strhtml += `<ul class="submenu" id="ul${arrgs_PaperGroupObjLst[i].paperGroupId}">`;
        const ulSubMenu = GetUl_Empty('submenu');
        ulSubMenu.id = `ul${arrgs_PaperGroupObjLst[i].paperGroupId}`;

        arrvgs_PaperAttentionObjLst = arrvgs_PaperAttentionObjLst0.filter(
          (x) => x.paperGroupId == arrgs_PaperGroupObjLst[i].paperGroupId,
        );
        //循环数据
        for (let j = 0; j < arrvgs_PaperAttentionObjLst.length; j++) {
          const objvgs_PaperAttention = arrvgs_PaperAttentionObjLst[j];
          let strPaperTitle = objvgs_PaperAttention.paperTitle;
          if (strPaperTitle == '') continue;
          const strPaperId = objvgs_PaperAttention.paperId;

          if (strPaperTitle.length > 20) {
            strPaperTitle = `${strPaperTitle.substring(0, 20)}...`;
          }

          // strhtml += `<li id="li${strPaperId}" o1nclick=btnSelectPaper("${strPaperId}",${objvgs_PaperAttention.paperAttentionId},"${clsPubLocalStorage.idCurrEduCls}")>`;

          const li2 = GetLi_Empty('li');
          li2.id = strPaperId;

          (function (strKeyId, mId, idCurrEduCls) {
            li2.onclick = function () {
              PaperAttention.btnSelectPaper(strKeyId, mId, idCurrEduCls);
            };
          })(strPaperId, objvgs_PaperAttention.paperAttentionId, clsPubLocalStorage.idCurrEduCls);

          //默认存放第一条数据显示；
          //判断存放的id控件是否为空；

          if (GetInputValueInDivObj(objLayOut, 'hidPaperId') == '') {
            //存放Id

            clsPrivateSessionStorage.paperId = strPaperId;
            // strhtml += `<a style="float:left;" href="javascript:void(0)" title="${objvgs_PaperAttention.paperTitle}" class="selected">${strPaperTitle}</a>`;
            {
              const a3 = GetA_Empty('selected');
              a3.style.float = 'left';
              a3.href = 'javascript:void(0)';

              a3.title = objvgs_PaperAttention.paperTitle;
              a3.innerText = strPaperTitle;
              li2.appendChild(a3);
            }
          } else {
            // strhtml += `<a style="float:left;" href="javascript:void(0)" title="${objvgs_PaperAttention.paperTitle}">${strPaperTitle}</a>`;
            {
              const a4 = GetA_Empty('');
              a4.style.float = 'left';
              a4.href = 'javascript:void(0)';

              a4.title = objvgs_PaperAttention.paperTitle;
              a4.innerText = strPaperTitle;
              li2.appendChild(a4);
            }
          }
          // strhtml += '<div>';
          const div1 = GetDiv_Empty('');

          {
            const a5 = GetA_Empty('');
            a5.style.float = 'left';
            a5.href = 'javascript:void(0)';

            (function (strKey, PaperGroupId) {
              a5.onclick = function () {
                PaperAttention.UpdatePaperGroup_Click(strKey, PaperGroupId);
              };
            })(
              objvgs_PaperAttention.paperAttentionId.toString(),
              objvgs_PaperAttention.paperGroupId,
            );
            const i5 = GetI_Empty('layui-icon layui-icon-edit');
            i5.style.fontSize = '16px';
            i5.style.color = '#0080ff';
            i5.title = '调整论文组';
            a5.appendChild(i5);
            div1.appendChild(a5);
          }

          // strhtml += `&nbsp;&nbsp;&nbsp;<span class="badge badge-primary" title="论文子观点${objvgs_PaperAttention.subVCount}条">${objvgs_PaperAttention.subVCount}</span>`;
          {
            const spn1 = GetSpan_Empty('text-primary ml-2');
            spn1.title = `论文子观点${objvgs_PaperAttention.subVCount}条`;
            spn1.innerText = objvgs_PaperAttention.subVCount?.toString() || '0';
            div1.appendChild(spn1);
          }
          // strhtml += `&nbsp;&nbsp;<span class="badge badge-success" title="论文答疑${objvgs_PaperAttention.paperQCount}条" >${objvgs_PaperAttention.paperQCount}</span>`;
          {
            const spn2 = GetSpan_Empty('text-success ml-2');
            spn2.title = `论文答疑${objvgs_PaperAttention.paperQCount}条`;
            spn2.innerText = objvgs_PaperAttention.paperQCount?.toString() || '0';
            div1.appendChild(spn2);
          }
          // strhtml += `&nbsp;&nbsp;<span class="badge badge-warning" title="论文标注${objvgs_PaperAttention.tagsCount}条">${objvgs_PaperAttention.tagsCount}</span>`;
          {
            const spn3 = GetSpan_Empty('text-warning ml-2');
            spn3.title = `论文标注${objvgs_PaperAttention.tagsCount}条`;
            spn3.innerText = objvgs_PaperAttention.tagsCount?.toString() || '0';
            div1.appendChild(spn3);
          }
          // strhtml += `&nbsp;&nbsp;<span class="badge badge-info" title="教师提问${objvgs_PaperAttention.teaQCount}条" >${objvgs_PaperAttention.teaQCount}</span>`;
          {
            const spn4 = GetSpan_Empty('text-info ml-2');
            spn4.title = `教师提问${objvgs_PaperAttention.teaQCount}条`;
            spn4.innerText = objvgs_PaperAttention.teaQCount?.toString() || '0';
            div1.appendChild(spn4);
          }
          //strhtml += '<a href="javascript:void(0)" o1nclick=UpdatePaperSubView_Click("' + objvgs_PaperAttention.paperId + '","' + objvgs_PaperAttention.idCurrEduCls + '","02")><i class="layui-icon layui-icon-list" style="font-size:16px; color: #219167;" title="pdf查看论文子观点" ></i></a>';
          // strhtml += '</div>';
          // strhtml += '</li>';
          li2.appendChild(div1);
          ulSubMenu.appendChild(li2);
        }
        // strhtml += '</ul>';
        // strhtml += '</li>';
        li1.appendChild(ulSubMenu);
        TreeBind.appendChild(li1);
      }
    }
    // $('#TreeBind').h1tml(strhtml);
  }
  //点击树菜单事件；
  public static async btnSelectPaper(strKeyId: string, mId: number, idCurrEduCls: string) {
    console.log('btnSelectPaper');
    //先清除背景色
    $('.submenu li a').removeClass('selected');
    //添加背景色
    $(`#${strKeyId} a`).addClass('selected');
    //存储点击的id

    clsPrivateSessionStorage.paperId = strKeyId;
    $('#hidPaperAttentionId').val(mId);
    clsPubLocalStorage.idCurrEduCls = idCurrEduCls;

    //点击后调整关系表数据方法；

    const objPage = new PaperAttention();
    await objPage.li_PaperAttentionTab_Click();
  }
  public static async UpdatePaperGroup_Click(strKey: string, PaperGroupId: string) {
    console.log('UpdatePaperGroup_Click');
    $('#hidPaperAttentionId').val(strKey);
    $('#ddlPaperGroupId').val(PaperGroupId);

    // this.ShowDialogTwo();
    //require(["../js/GraduateEduEx/PaperAttention.js"], function (paper) {
    //    var objPage = new paper.PaperAttention();
    //    objPage.SubmitUpdateGroup_Click();
    //});
  }
  /* 
  在数据表里删除记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
 */
  public async btnDelRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert('请选择需要取消的关注！');
        return '';
      }
      const lngKeyId = Number(strKeyId);
      await this.DelRecord(lngKeyId);
      await this.PaperAttentionTree();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `关注不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
   根据关键字删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
  */
  public async DelRecord(lngPaperAttentionId: number) {
    try {
      const returnInt: number = await gs_PaperAttention_DelRecordAsync(lngPaperAttentionId);
      if (returnInt > 0) {
        const strInfo = `取消关注成功!`;
        //显示信息框
        alert(strInfo);
        const strUserId = userStore.getUserId;
        vgs_PaperAttention_ReFreshThisCache(strUserId); //刷新论文关注
      } else {
        const strInfo = `关注不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `关注不成功. ${e}.`;
      alert(strMsg);
    }
  }

  public async SubmitUpdateGroup_Click() {
    const strCommandText = PaperAttention.vuebtn_Click('GetButtonText', 'btnSubmit_Group');
    try {
      switch (strCommandText) {
        case '确认添加':
          await this.AddGroup_Click();
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          await this.UpdateGroup_Click();
          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'SubmitUpdateGroup_Click');

          break;
      }
      //取消提交按钮不可用状态
      //$("#divLoading").hide();
      //$("#btnOKUpd").attr("disabled", false);
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
  //添加组名
  public async AddGroup_Click() {
    try {
      const strUserId = userStore.getUserId;
      const divName = PaperAttention.divEditGroup;
      const objgs_PaperGroupEN: clsgs_PaperGroupEN = new clsgs_PaperGroupEN();
      objgs_PaperGroupEN.SetPaperGroupName(GetInputValueInDivObj(divName, 'txtPaperGroupName'));
      objgs_PaperGroupEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
      objgs_PaperGroupEN.SetUpdUser(strUserId); // 修改用户Id

      const strPaperGroupId = await gs_PaperGroup_AddNewRecordWithReturnKeyAsync(
        objgs_PaperGroupEN,
      );
      if (strPaperGroupId != '') {
        //刷新缓存
        //                const objOrderByData: clsOrderByData = [
        //order                ];
        //gs_PaperGroup_ReOrderAsync(strUserId);//刷新论文组
        gs_PaperGroup_ReFreshCache(strUserId); //刷新论文组
        await this.PaperAttentionTree();
        message.success('组名添加成功!');
        console.log('组名添加成功！');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `组名添加不成功. ${e}.`;
      alert(strMsg);
    }
  }
  //修改组名
  public async UpdateGroup_Click() {
    const strThisFuncName = this.UpdateGroup_Click.name;
    const divName = PaperAttention.divEditGroup;
    try {
      const strPaperGroupId = GetInputValueInDivObj(divName, 'hidPaperGroupId');
      const strUserId = userStore.getUserId;
      const objgs_PaperGroupEN: clsgs_PaperGroupEN = new clsgs_PaperGroupEN();
      objgs_PaperGroupEN.SetPaperGroupId(strPaperGroupId);
      objgs_PaperGroupEN.SetPaperGroupName(GetInputValueInDivObj(divName, 'txtPaperGroupName'));
      objgs_PaperGroupEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
      objgs_PaperGroupEN.SetUpdUser(strUserId); // 修改用户Id

      objgs_PaperGroupEN.sfUpdFldSetStr = objgs_PaperGroupEN.updFldString; //设置哪些字段被修改(脏字段)
      if (objgs_PaperGroupEN.paperGroupId == '' || objgs_PaperGroupEN.paperGroupId == undefined) {
        throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
      }

      const responseText = await gs_PaperGroup_UpdateRecordAsync(objgs_PaperGroupEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        //刷新缓存
        gs_PaperGroup_ReFreshCache(strUserId); //刷新论文组
        await this.PaperAttentionTree();
        message.success('组名修改成功!');
        console.log('组名修改成功！');
      } else {
        message.success('组名修改失败!');
        console.log('组名修改失败！');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `组名修改不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //提交调整关注的论文组
  public async SubmitPaperGroup_Click() {
    const strThisFuncName = this.SubmitPaperGroup_Click.name;
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      const strPaperAttentionId = GetInputValueInDivObjN(divName, 'hidPaperAttentionId');

      const objgs_PaperAttentionEN: clsgs_PaperAttentionEN = new clsgs_PaperAttentionEN();
      objgs_PaperAttentionEN.SetPaperAttentionId(strPaperAttentionId);
      objgs_PaperAttentionEN.SetPaperGroupId(GetSelectValueInDivObj(divName, 'ddlPaperGroupId'));

      objgs_PaperAttentionEN.sfUpdFldSetStr = objgs_PaperAttentionEN.updFldString; //设置哪些字段被修改(脏字段)
      if (
        objgs_PaperAttentionEN.paperAttentionId == 0 ||
        objgs_PaperAttentionEN.paperAttentionId == undefined
      ) {
        throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
      }

      const responseText = await gs_PaperAttention_UpdateRecordAsync(objgs_PaperAttentionEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        //刷新缓存
        const strUserId = userStore.getUserId;
        vgs_PaperAttention_ReFreshThisCache(strUserId); //刷新论文关注

        await this.PaperAttentionTree();
        message.success('调整论文组成功!');
        console.log('调整论文组成功！');
      } else {
        message.success('调整论文组失败!');
        console.log('调整论文组失败！');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `调整论文组不成功. ${e}.`;
      alert(strMsg);
    }
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

    const strPaperId = clsPrivateSessionStorage.paperId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.sectionId_q != '' && this.sectionId_q != '0') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_SectionId} = '${this.sectionId_q}'`;
      }
      //if (strPaperRWId != "") {
      //    strWhereCond += ` And ${clsPaperReadWriteEN.con_PaperRWId} = '${strPaperRWId}'`;
      //}
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_PaperId} = '${strPaperId}'`;
      }

      if (this.subViewpointTypeId_q != '' && this.subViewpointTypeId_q != '0') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_SubViewpointTypeId} = '${this.subViewpointTypeId_q}'`;
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

        //学生00620003
        //只能查看自己的数据；或公开的数据；
        //strWhereCond += ` And ${clsvSubViewpointEN.con_UpdUser} = '${strUserId}'`;

        //strWhereCond += ` And updUser = '${objvUserRoleRelation.userId}'`;
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

    const strPaperId = clsPrivateSessionStorage.paperId;
    const strUserId = userStore.getUserId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.sectionId_q != '' && this.sectionId_q != '0') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_SectionId} = '${this.sectionId_q}'`;
      }
      //if (strPaperRWId != "") {
      //    strWhereCond += ` And ${clsPaperReadWriteEN.con_PaperRWId} = '${strPaperRWId}'`;
      //}
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvPaperSubViewpointEN.con_PaperId} = '${strPaperId}'`;
      }

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
  public async Bind_PaperSubViewpoint() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    const strUserId = userStore.getUserId;

    const strWhereCond2 = this.CombinevPaperSubViewpointCondition3();
    const strWhereCond3 = this.CombinevPaperSubViewpointCondition3();

    //strWhereCond6 = ` ${clsvSysVoteEN.con_TableKey} = '${strPaperRWId}' And ${clsvSysVoteEN.con_UpdUser} = '${strUserId}'`;
    //strWhereCond6 = " 1 =1 and updUser='" + strUserId + "' and voteTypeId='02' and pubParentId='" + strPaperRWId + "'";
    // const strWhereCond6 = ` 1 =1 and updUser='${strUserId}' and voteTypeId='02' `;
    //intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页

    // const arrSectionObjLst: Array<clsSectionEN> = [];

    let arrvPaperSubVTypeNumObjLst: Array<clsvPaperSubViewpointEN> = [];

    let arrvPaperSubViewpointObjLst: Array<clsvPaperSubViewpointEN> = [];

    let arrvPaperSubViewpointObjLst2: Array<clsvPaperSubViewpointEN> = [];

    try {
      arrvPaperSubVTypeNumObjLst = await vPaperSubViewpointEx_GetSubViewpointTypeNumObjLstAsync(
        strWhereCond2,
      );

      arrvPaperSubViewpointObjLst2 = await vPaperSubViewpoint_GetObjLstAsync(strWhereCond3);
      const strVoteType = '02';
      const strUserId = userStore.getUserId;

      let strhtml = '';
      let cateid = 0;
      let cateid_ = 0;
      let intJ = 0;

      strhtml += `<tr cate-id="${cateid}" ><td>`;

      //strhtml += '<div style="float:left;"><h3>' + intJ + '.' + arrSubViewpointTypeObjLst[j].subViewpointTypeName + '</h3></div>';
      strhtml += '<div style="float:left;"><h3>论文子观点</h3></div>';
      strhtml += '<div style="float:right;">';

      // // o1nclick=UpdatePaperSubView_Click("01")
      // strhtml +=
      //   '<a style="float:left;" href="javascript:void(0)" id="aUpdatePaperSubView" keyId="01" ><i class="layui-icon layui-icon-edit" style="font-size:16px; color: #0080ff;" title="维护论文子观点" ></i>维护论文子观点</a>';
      // // o1nclick=UpdatePaperSubView_Click("02")
      // strhtml +=
      //   '<a href="javascript:void(0)" id="aUpdatePaperSubView" keyId="02" ><i class="layui-icon layui-icon-list" style="font-size:16px; color: #219167;" title="查看论文子观点" ></i>查看论文子观点</a>';

      // o1nclick=UpdatePaperSubView_Click("01")
      strhtml += `<a style="float:left;" href="javascript:void(0)" id="aUpdatePaperSubView" keyId="01" ><span style="font-size:16px; color: #0080ff;" title="维护论文子观点" >${clsIcon.faPenToSquare}</span>维护论文子观点</a>`;
      // o1nclick=UpdatePaperSubView_Click("02")
      strhtml += `<a href="javascript:void(0)" id="aUpdatePaperSubView" keyId="02" class="ml-2" ><span style="font-size:16px; color: #219167;" title="查看论文子观点">${clsIcon.faRectangleList}</span>查看论文子观点</a>`;

      strhtml += '</div></td></tr>';

      for (let j = 0; j < arrvPaperSubVTypeNumObjLst.length; j++) {
        cateid++;
        intJ++;
        const fid = 0;
        const strsubTypeId = arrvPaperSubVTypeNumObjLst[j].subViewpointTypeId;
        //先创建子模块类型

        strhtml += `<tr cate-id="${cateid}" fid="${fid}"><th>`;

        strhtml += `<div style="float:left;font-size:22px;font-weight:bold;">${intJ}.${arrvPaperSubVTypeNumObjLst[j].subViewpointTypeName}</div>`;
        strhtml += `<span style="float:left;" class="badge text-bg-info" id="SubVTypeCount">${arrvPaperSubVTypeNumObjLst[j].memo}</span>`;

        strhtml += '</th></tr>';

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

          strhtml += `<tr cate-id="${cateid}" fid="${cateid_}" ><td>`;

          if (objvPaperSubViewpoint.attitudesName == null)
            objvPaperSubViewpoint.attitudesName = '未知';
          strhtml += `&nbsp;&nbsp;<span class="color3">${intK}</span>.&nbsp;${clsIcon.faPlay}【${objvPaperSubViewpoint.attitudesName}】${objvPaperSubViewpoint.subViewpointContent}`;
          //根据子观点id 得到附件
          if (IsNullOrEmpty(objvPaperSubViewpoint.sectionName) == false) {
            strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【论文节】${objvPaperSubViewpoint.sectionName}`;
          }

          const arrPaperSubAttachments = await paperSubAttachmentStore.getObjLst(strSubViewpointId);
          if (arrPaperSubAttachments != null && arrPaperSubAttachments.length > 0) {
            for (let y = 0; y < arrPaperSubAttachments.length; y++) {
              const strAddressAndPortfull =
                GetAddressAndPort() + arrPaperSubAttachments[y].filePath;
              strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="${strAddressAndPortfull}" alt="" id="txtImgPath${arrPaperSubAttachments[y].paperSubAttachmentId}"/>`;
            }
          }

          if (IsNullOrEmpty(objvPaperSubViewpoint.explainContent) == false) {
            strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【${objvPaperSubViewpoint.explainTypeName}】${objvPaperSubViewpoint.explainContent}`;
          }

          //if (objvPaperSubViewpoint.literatureSourcesId != "") {

          //    strhtml += '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${clsIcon.faPlay}【引用文献】' + objvPaperSubViewpoint.PaperTitleEx + '(作者：' + objvPaperSubViewpoint.AuthorEx + ')';
          //}

          if (
            objvPaperSubViewpoint.paperPageNum != null &&
            objvPaperSubViewpoint.paperPageNum != 0
          ) {
            strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="color3" >${clsIcon.faPlay}【pdf页码】第${objvPaperSubViewpoint.paperPageNum}页</a>`;
          }
          const strUserName = await vQxUsersSimStore.getUserName(objvPaperSubViewpoint.updUser);
          if (strUserName != '') {
            strhtml += `<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="color2">${clsIcon.faPlay}【编辑时间】${objvPaperSubViewpoint.updDate}【编辑用户】${strUserName}</span>`;
          }
          //最底一行编辑
          strhtml += '<br/><div style="float:right;">';
          const objLike = sysVoteStore.getObj(strVoteType, strUserId, strSubViewpointId.toString());
          // o1nclick=btnAddVote_Click("${strSubViewpointId}","${ objvPaperSubViewpoint.updUser }"
          let strKeyId = `${strSubViewpointId}|${objvPaperSubViewpoint.updUser}`;
          if (objLike == null) {
            strhtml += `&nbsp;&nbsp;<a id="btnAddVote" keyId="${strKeyId}" href="javascript:void(0)" ) ><img src="/img/vote.png" width = "20px" height = "18px" title = "点赞" >&nbsp;赞${
              objvPaperSubViewpoint.okCount ?? 0
            }</a>`;
          } else {
            strhtml += `&nbsp;&nbsp;<a href="javascript:void(0)" id="btnAddVote" keyId="${strKeyId}") ><img src="/img/vote2.png" width = "20px" height = "18px" title = "已点赞" >&nbsp;已赞${objvPaperSubViewpoint.okCount}</a>`;
          }

          strhtml += `&nbsp;&nbsp;<span style="color:royalblue" >评论数:${
            objvPaperSubViewpoint.appraiseCount ?? 0
          }</span>`;

          if (objvPaperSubViewpoint.score != 0) {
            strhtml += `&nbsp;&nbsp;综合评分:${objvPaperSubViewpoint.score ?? 0}`;
          }
          if (objvPaperSubViewpoint.teaScore != 0) {
            strhtml += `&nbsp;&nbsp;教师评分:${objvPaperSubViewpoint.teaScore ?? 0}`;
          }
          if (objvPaperSubViewpoint.stuScore != 0) {
            strhtml += `&nbsp;&nbsp;学生评分:${objvPaperSubViewpoint.stuScore ?? 0}`;
          }
          // o1nclick="xadmin.open('论文子观点评论', '../GradEduTools/SysComment?Key=${strSubViewpointId}&Type=02&User=${
          //   objvPaperSubViewpoint.updUser
          // }&pubParentId=${GetHidPaperId(            objLayOut,          )}')
          const objData = {
            keyId: strSubViewpointId,
            type: '02',
            user: objvPaperSubViewpoint.updUser,
            pubParentId: clsPrivateSessionStorage.paperId,
          };
          strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          strhtml += `&nbsp;&nbsp;<button id="btnSysComment" keyId="${strKeyId}" class="layui-btn layui-btn layui-btn-xs"> ${clsIcon.faCommentDots}添加评论</button >`;

          strhtml += '</div></td></tr>';

          //strhtml += '<td class="td-manage"></td>';
        }
      }
      //拼接；

      // $('#tbList').h1tml(strhtml);
      const tbList = GetTBodyObjInDivObj(PaperAttention.divLayout, 'tbList');
      tbList.innerHTML = strhtml;
      this.SetEventForButtonEvent();
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

  public SetEventForButtonEvent() {
    {
      const arrBtnSysComment = GetButtonObjLstInDivObjN(PaperAttention.divLayout, 'btnSysComment');
      for (const btnSysComment of arrBtnSysComment) {
        if (btnSysComment != null) {
          const strKeyId = btnSysComment.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 4) continue;
          const objData = { keyId: arr[0], type: arr[1], user: arr[2], pubParentId: arr[3] };

          (function (objData: any) {
            btnSysComment.onclick = function () {
              PaperAttention.vuebtn_Click('SysComment', objData);
            };
          })(objData);
        }
      }
    }

    {
      const arrAUpdatePaperSubView = GetAObjLstInDivObj(
        PaperAttention.divLayout,
        'aUpdatePaperSubView',
      );
      for (const aUpdatePaperSubView of arrAUpdatePaperSubView) {
        if (aUpdatePaperSubView != null) {
          const strKeyId = aUpdatePaperSubView.getAttribute('keyid');
          if (strKeyId == null) continue;

          (function (strKeyId: any) {
            aUpdatePaperSubView.onclick = function () {
              PaperAttention.vuebtn_Click('UpdatePaperSubView', strKeyId);
            };
          })(strKeyId);
        }
      }
    }

    {
      const arrAAddVote = GetAObjLstInDivObj(PaperAttention.divLayout, 'btnAddVote');
      for (const btnAddVote of arrAAddVote) {
        if (btnAddVote != null) {
          const strKeyId = btnAddVote.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = { strSubViewpointId: arr[0], updUser: arr[1] };

          (function (objData: any) {
            btnAddVote.onclick = function () {
              PaperAttention.vuebtn_Click('AddVote', objData);
            };
          })(objData);
        }
      }
    }
  }
  //添加点赞
  public async btnAddVote_Click(strSubViewpointId: number, strUserId: string) {
    const strThisFuncName = this.btnAddVote_Click.name;

    //this.DivName = "divAddNewRecordSave";
    const objSysVoteEN: clsSysVoteEN = new clsSysVoteEN();
    objSysVoteEN.SetTableKey(strSubViewpointId.toString());
    objSysVoteEN.SetVoteTypeId('02');
    objSysVoteEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objSysVoteEN.SetUpdUser(userStore.getUserId); // 修改用户Id
    objSysVoteEN.SetLikedUserId(strUserId); //被点赞用户
    objSysVoteEN.SetPubParentId(clsPrivateSessionStorage.paperId);
    objSysVoteEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);

    const strWhereCond = ` 1 =1 and updUser='${userStore.getUserId}' and tableKey='${strSubViewpointId}'`;
    try {
      const bolIsExist = await SysVote_IsExistRecordAsync(strWhereCond);

      if (bolIsExist == true) {
        const strMsg = `您已经点赞过这条论文了，请给其他论文点赞一下吧！`;
        //alert(strMsg);
        message.success(strMsg);
        return bolIsExist; //一定要有一个返回值，否则会出错！
      }

      const returnBool = await SysVote_AddNewRecordAsync(objSysVoteEN);

      if (returnBool == true) {
        const strWhereCond2 = ` 1=1 and voteTypeId='02' and tableKey='${strSubViewpointId}'`;
        const intVoteCount = await SysVote_GetRecCountByCondAsync(strWhereCond2);

        const objPaperSubViewpointEN: clsPaperSubViewpointEN = new clsPaperSubViewpointEN();
        objPaperSubViewpointEN.SetSubViewpointId(strSubViewpointId);
        objPaperSubViewpointEN.SetOkCount(intVoteCount);
        objPaperSubViewpointEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);

        objPaperSubViewpointEN.sfUpdFldSetStr = objPaperSubViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
        if (
          objPaperSubViewpointEN.subViewpointId == 0 ||
          objPaperSubViewpointEN.subViewpointId == undefined
        ) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        const returnBool2 = await PaperSubViewpoint_UpdateRecordAsync(objPaperSubViewpointEN);
        if (returnBool2 == true) {
          //await this.BindGv_vPaper();
          const strMsg = `已点赞!`;
          message.success(strMsg);
          this.Bind_PaperSubViewpoint();
        } else {
          const strMsg = `点赞不成功!`;
          //alert(strInfo);
          message.warning(strMsg);
        }
      } else {
        const strInfo = `点赞不成功!`;
        //显示信息框
        alert(strInfo);
        //this.DetailRecord();
        //this.BindGv_vPaperSubViewpoint();
      }

      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `点赞不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  //绑定论文答疑
  public async Bind_PaperQA() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //问题
    let arrvqa_QuestionsObjLst: Array<clsvqa_QuestionsEN> = [];
    //绑定答案数据
    let arrvqa_AnswerObjLst0: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst1: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst2: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst3: Array<clsvqa_AnswerEN> = [];

    let strWhereCond1 = '';
    let strWhereCond2 = '';

    const strPaperId = clsPrivateSessionStorage.paperId;

    //最新评论
    const strWhereCond = `1=1 and questionsTypeId='01' and paperId='${strPaperId}' order by updDate Desc`;

    strWhereCond1 = ` parentId='root' and questionsTypeId='01' and  paperId='${strPaperId}' order by updDate Desc`;
    strWhereCond2 = ` parentId<>'root' and questionsTypeId='01' and  paperId='${strPaperId}' order by updDate Desc`;
    //}
    //strIdCurrEduclsstrVateWhereCond = " 1 =1 and updUser='" + strUserId + "' and voteTypeId='12' and idCurrEduCls='" + strIdCurrEducls + "'";

    //strIdCurrEduclsstrQWhereCond = "questionsId='" + strQuestionsId + "'";
    try {
      arrvqa_QuestionsObjLst = await vqa_Questions_GetObjLstAsync(strWhereCond);

      arrvqa_AnswerObjLst0 = await vqa_Answer_GetObjLstAsync(strWhereCond1);
      arrvqa_AnswerObjLst2 = await vqa_Answer_GetObjLstAsync(strWhereCond2);

      let strhtml = '';

      // o1nclick = btnAddQA_Click("01");
      strhtml +=
        '<div style="text-align:right; margin-right:20px;"><button title="添加问题" id="btnAddQA" keyId="01" class="layui-btn layui-btn-normal layui-btn-xs" ;> <i class="layui-icon" ></i>添加问题</button></div>';

      let varQNum = 0;
      //   const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      // J_ShortComment.innerHTML = '';
      for (let y = 0; y < arrvqa_QuestionsObjLst.length; y++) {
        const objvqa_Questions = arrvqa_QuestionsObjLst[y];
        varQNum++;
        strhtml += '<div class="comment-title" style="margin-top:5px;">';
        strhtml += `<p class="comment-all" id="Questions_Name">${varQNum}、${objvqa_Questions.questionsContent}`;
        // o1nclick=btnQAnswer_Click("${objvqa_Questions.paperId}","${objvqa_Questions.questionsId}","${objvqa_Questions.questionsTypeId}","${objvqa_Questions.idCurrEduCls}"
        const strKeyId = `${objvqa_Questions.paperId}|${objvqa_Questions.questionsId}|${objvqa_Questions.questionsTypeId}|${objvqa_Questions.idCurrEduCls}`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnQAnswer" keyId="${strKeyId}" title="解答" class="layui-btn layui-btn layui-btn-xs" )>${clsIcon.spanCircleQuestion}</button>`;
        strhtml += '</p>';
        strhtml += '</div>';
        strhtml += '<div id="J_ShortComment">';
        arrvqa_AnswerObjLst1 = arrvqa_AnswerObjLst0.filter(
          (x) => x.questionsId == objvqa_Questions.questionsId,
        );
        let varANum = 0;
        for (let i = 0; i < arrvqa_AnswerObjLst1.length; i++) {
          const objvqa_Answer = arrvqa_AnswerObjLst1[i];
          varANum++;
          strhtml += '<div class="comment" >';
          strhtml +=
            '<div class="common-avatar J_User" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
          strhtml += '<div class="comment-block">';
          if (GetInputValueInDivObj(divName, 'hidQuestionsUser') == objvqa_Answer.updUser) {
            strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:red;" > 题主：${objvqa_Answer.userName}</span>`;
          } else {
            strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvqa_Answer.userName}</span>`;
          }
          strhtml += `<span class="comment-time">${objvqa_Answer.updDate}</span>`;
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment-username J_User">${varANum}楼</span></p>`;
          //strhtml += '<div class="comment-content J_CommentContent">评分：' + arrvPaperAppraiseObjLst[i].AppraiseScore + '</div>';
          strhtml += `<div class="comment-content J_CommentContent">${objvqa_Answer.answerContent}</div>`;

          //回复区

          arrvqa_AnswerObjLst3 = arrvqa_AnswerObjLst2.filter(
            (x) => x.parentId == objvqa_Answer.answerId,
          );
          if (arrvqa_AnswerObjLst3.length > 0) {
            strhtml += '<div class="reply J_ReplyBlock">';
            for (let j = 0; j < arrvqa_AnswerObjLst3.length; j++) {
              strhtml += '<div class="reply-block">';

              strhtml += '<div class="reply-content">';
              if (
                GetInputValueInDivObj(divName, 'hidQuestionsUser') ==
                arrvqa_AnswerObjLst3[j].updUser
              ) {
                strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" style="color:red;"> 题主(${arrvqa_AnswerObjLst3[j].userName})</b>：</span>`;
              } else {
                strhtml += `<span class="reply-user"><b class="reply-user-nick J_User">${arrvqa_AnswerObjLst3[j].userName}</b>：</span>`;
              }
              strhtml += `${arrvqa_AnswerObjLst3[j].answerContent}</div>`;

              strhtml += '<div class="reply-operate reply-operate--hot">';

              strhtml += `<span class="J_Vote reply-operate-item reply-up operate-visited" >赞<i>${arrvqa_AnswerObjLst3[j].voteCount}</i></span >`;

              strhtml += `<i class="reply-dot">·</i><span>${arrvqa_AnswerObjLst3[j].updDate}</span>`;

              strhtml += '</div>';

              strhtml += '</div>';
            }
            strhtml += '</div>';
          }
          ///评论区
          strhtml += '<div class="comment-operate J_CommentOperate clearfix">';

          strhtml += `<span class="J_Vote comment-operate-item comment-operate-up operate-visited">赞<i>${objvqa_Answer.voteCount}</i></span>`;

          strhtml += '</div>';

          strhtml += '</div></div>';
        }
        strhtml += ' </div>';
      }

      // $('#J_Short').h1tml(strhtml);
      const J_Short = GetDivObjInDivObj(PaperAttention.divLayout, 'J_Short');
      J_Short.innerHTML = strhtml;
      this.SetEventForPaperQA();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取数据不成功,${e}.`;
      alert(strMsg);
    }
  }
  public SetEventForPaperQA() {
    {
      const arrBtnAddQA = GetButtonObjLstInDivObjN(PaperAttention.divLayout, 'btnAddQA');
      for (const btnAddQA of arrBtnAddQA) {
        if (btnAddQA != null) {
          const strKeyId = btnAddQA.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;

          (function (strKeyId: any) {
            btnAddQA.onclick = function () {
              PaperAttention.vuebtn_Click('AddQA', strKeyId);
            };
          })(strKeyId);
        }
      }
    }

    {
      const arrBtnQAnswer = GetButtonObjLstInDivObjN(PaperAttention.divLayout, 'btnQAnswer');
      for (const btnQAnswer of arrBtnQAnswer) {
        if (btnQAnswer != null) {
          const strKeyId = btnQAnswer.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 4) continue;
          const objData = {
            paperId: arr[0],
            questionsId: arr[1],
            questionsTypeId: arr[2],
            idCurrEduCls: arr[3],
          };

          (function (objData: any) {
            btnQAnswer.onclick = function () {
              PaperAttention.vuebtn_Click('QAnswer', objData);
            };
          })(objData);
        }
      }
    }
    {
      const arrAUpdatePaperSubView = GetAObjLstInDivObj(
        PaperAttention.divLayout,
        'aUpdatePaperSubView',
      );
      for (const aUpdatePaperSubView of arrAUpdatePaperSubView) {
        if (aUpdatePaperSubView != null) {
          const strKeyId = aUpdatePaperSubView.getAttribute('keyid');
          if (strKeyId == null) continue;

          (function (strKeyId: any) {
            aUpdatePaperSubView.onclick = function () {
              PaperAttention.vuebtn_Click('UpdatePaperSubView', strKeyId);
            };
          })(strKeyId);
        }
      }
    }
  }
  //绑定论文标注
  public async Bind_PaperTags() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = clsPrivateSessionStorage.paperId;
    if (strPaperId == '') {
      const strMsg = `论文Id不能为空！`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const strWhereCond = `1=1 and paperId='${strPaperId}' order by updDate Asc`;

    let arrgs_TagsObjLst: Array<clsgs_TagsEN> = [];
    let arrgs_TagsObjLst0: Array<clsgs_TagsEN> = [];
    let arrgs_TagsTypeObjLst: Array<clsgs_TagsTypeEN> = [];

    try {
      //获取标注数据
      arrgs_TagsObjLst = await gs_Tags_GetObjLstAsync(strWhereCond);
      arrgs_TagsTypeObjLst = await gs_TagsType_GetObjLstAsync('1=1');
      let strhtml = '';
      // o1nclick=btnAddPaperTags_Click()
      strhtml +=
        '<div style="text-align:right; margin-right:20px; margin-top:10px;"><button id="btnAddPaperTags" title="添加标注" class="layui-btn layui-btn-normal layui-btn-xs" ;> <i class="layui-icon" ></i>添加标注</button></div>';
      if (arrgs_TagsObjLst.length > 0) {
        strhtml += '<div class="info" id="infoTages">';
        //strhtml += '<div class="title btn-1">';
        //strhtml += '<a href="javascript:void(0)" title="pdf标注">pdf标注</a>';
        //strhtml += '</div><ul class="artlist">';
        strhtml += '<ul class="artlist">';

        let k = 0;
        for (let i = 0; i < arrgs_TagsObjLst.length; i++) {
          const objgs_Tags = arrgs_TagsObjLst[i];
          k++;
          const strTagsId = objgs_Tags.tagsId;
          strhtml += '<li>';

          strhtml += `<div id="T${strTagsId}" style="text-align:left; float:left; width:65%;">`;
          strhtml += `<span class="rowtit color1">${k}.</span>`;

          const objTagsType = arrgs_TagsTypeObjLst.find(
            (x) => x.tagsTypeId == objgs_Tags.tagsTypeId,
          );
          if (objTagsType != null) {
            strhtml += `<span class="rowtit color3">[${objTagsType.tagsTypeName}]</span>`;
          }
          // o1nclick=btnShowTags_Click("${strTagsId}",${objgs_Tags.pdfPageNum},"${objgs_Tags.pdfContent}");
          const strKeyId = `${strTagsId}|${objgs_Tags.pdfPageNum}|${objgs_Tags.pdfContent}`;
          strhtml += `<span class="title btn-2"><a href="javascript:void(0)" id="btnShowTags" keyId="${strKeyId}" class="abstract-text">${objgs_Tags.tagsContent}</a></span>`;
          strhtml += `&nbsp;<span  style="font-style:italic;" class="rowtit color2" title="第${objgs_Tags.pdfPageNum}页标记">P${objgs_Tags.pdfPageNum}</span>`;
          strhtml += '</div>';

          strhtml += '<div style="text-align:right; float:right; width:34%;">';

          const strUserName = await vQxUsersSimStore.getUserName(objgs_Tags.updUser);
          if (strUserName != '') {
            let strUpdDate = objgs_Tags.updDate;
            strUpdDate = strUpdDate.substring(2, strUpdDate.length - 11);

            strhtml += `&nbsp;<span class="rowtit color4">${strUserName}/${strUpdDate}</span>&nbsp;&nbsp;`;

            //strhtml += '&nbsp;&nbsp;&nbsp;(' + strUserName + '&nbsp;/&nbsp;' + objgs_Tags.updDate + ')&nbsp;&nbsp;&nbsp;';
          }
          strhtml += '</div>';

          strhtml += '</li>';
          //strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div>';
          //strhtml += '<li> <div style="border-bottom: 1px solid #eee;"></div></li>';
        }
        strhtml += '<li>';
        strhtml += '<div style="text-align:left; float:left; width:99%;">';
        for (let j = 0; j < arrgs_TagsTypeObjLst.length; j++) {
          arrgs_TagsObjLst0 = arrgs_TagsObjLst.filter(
            (x) => x.tagsTypeId == arrgs_TagsTypeObjLst[j].tagsTypeId,
          );
          if (arrgs_TagsObjLst0.length > 0) {
            strhtml += `${arrgs_TagsTypeObjLst[j].tagsTypeName}:${arrgs_TagsObjLst0.length}个标注;&nbsp;`;
          }
        }
        strhtml += '</div>';
        strhtml += '</li>';
        strhtml += '</ul>';
        strhtml += '</div>';

        //拼接；
        // $('#Paper_Tags').h1tml(strhtml);
        const Paper_Tags = GetDivObjInDivObj(PaperAttention.divLayout, 'Paper_Tags');
        Paper_Tags.innerHTML = strhtml;
        this.SetEventForPaper_Tags();
      }
      //else {
      //    $("#list_Tags").hide();
      //}
      console.log('完成BindGv_gs_Tags!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public SetEventForPaper_Tags() {
    {
      const arrBtnSysComment = GetButtonObjLstInDivObjN(PaperAttention.divLayout, 'btnSysComment');
      for (const btnSysComment of arrBtnSysComment) {
        if (btnSysComment != null) {
          const strKeyId = btnSysComment.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 4) continue;
          const objData = { keyId: arr[0], type: arr[1], user: arr[2], pubParentId: arr[3] };

          (function (objData: any) {
            btnSysComment.onclick = function () {
              PaperAttention.vuebtn_Click('SysComment', objData);
            };
          })(objData);
        }
      }
    }

    {
      const arrBtnShowTags = GetButtonObjLstInDivObjN(PaperAttention.divLayout, 'btnShowTags');
      for (const btnShowTags of arrBtnShowTags) {
        if (btnShowTags != null) {
          const strKeyId = btnShowTags.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 3) continue;
          const objData = { strTagsId: arr[0], pdfPageNum: arr[1], pdfContent: arr[2] };

          (function (objData: any) {
            btnShowTags.onclick = function () {
              PaperAttention.vuebtn_Click('ShowTags', objData);
            };
          })(objData);
        }
      }
    }

    {
      const arrAUpdatePaperSubView = GetAObjLstInDivObj(
        PaperAttention.divLayout,
        'aUpdatePaperSubView',
      );
      for (const aUpdatePaperSubView of arrAUpdatePaperSubView) {
        if (aUpdatePaperSubView != null) {
          const strKeyId = aUpdatePaperSubView.getAttribute('keyid');
          if (strKeyId == null) continue;

          (function (strKeyId: any) {
            aUpdatePaperSubView.onclick = function () {
              PaperAttention.vuebtn_Click('UpdatePaperSubView', strKeyId);
            };
          })(strKeyId);
        }
      }
    }
  }
  //绑定教师提问
  public async Bind_TeaQA() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //问题
    let arrvqa_QuestionsObjLst: Array<clsvqa_QuestionsEN> = [];
    //绑定答案数据
    let arrvqa_AnswerObjLst0: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst1: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst2: Array<clsvqa_AnswerEN> = [];
    let arrvqa_AnswerObjLst3: Array<clsvqa_AnswerEN> = [];

    let strWhereCond1 = '';
    let strWhereCond2 = '';

    // const strUserId = userStore.getUserId;
    //strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    const strPaperId = clsPrivateSessionStorage.paperId;

    //最新评论
    const strWhereCond = `1=1 and questionsTypeId='02' and paperId='${strPaperId}' order by orderNum Asc`;

    strWhereCond1 = ` parentId='root' and questionsTypeId='02' and answerTypeId='01' and  paperId='${strPaperId}' and  isSubmit=1 order by updDate Desc`;
    strWhereCond2 = ` parentId<>'root' and questionsTypeId='02' and answerTypeId='01' and  paperId='${strPaperId}' and  isSubmit=1 order by updDate Desc`;
    //}
    //strIdCurrEduclsstrVateWhereCond = " 1 =1 and updUser='" + strUserId + "' and voteTypeId='12' and idCurrEduCls='" + strIdCurrEducls + "'";

    //strIdCurrEduclsstrQWhereCond = "questionsId='" + strQuestionsId + "'";
    try {
      arrvqa_QuestionsObjLst = await vqa_Questions_GetObjLstAsync(strWhereCond);

      arrvqa_AnswerObjLst0 = await vqa_Answer_GetObjLstAsync(strWhereCond1);
      arrvqa_AnswerObjLst2 = await vqa_Answer_GetObjLstAsync(strWhereCond2);

      let strhtml = '';
      let varQNum = 0;
      const strRoleName = userStore.getRoleName;
      if (strRoleName.indexOf('学生') == -1) {
        // o1nclick=btnAddQA_Click("02");
        strhtml +=
          '<div style="text-align:right; margin-right:20px;"><button id="btnAddQA" keyId="02" title="添加问题" class="layui-btn layui-btn-normal layui-btn-xs" > <i class="layui-icon" ></i>添加问题</button></div>';
      }
      //   const J_ShortComment = GetDivObjInDivObj(divName, 'J_ShortComment');
      // J_ShortComment.innerHTML = '';
      for (let y = 0; y < arrvqa_QuestionsObjLst.length; y++) {
        const objvqa_Questions = arrvqa_QuestionsObjLst[y];
        varQNum++;
        strhtml += '<div class="comment-title" style="margin-top:5px;">';
        strhtml += `<p class="comment-all" id="Questions_Name">${varQNum}、${objvqa_Questions.questionsContent}`;
        // o1nclick=btnQAnswer_Click("${objvqa_Questions.paperId}","${objvqa_Questions.questionsId}","${objvqa_Questions.questionsTypeId}","${objvqa_Questions.idCurrEduCls}")
        const strKeyId = `${objvqa_Questions.paperId}|${objvqa_Questions.questionsId}|${objvqa_Questions.questionsTypeId}|${objvqa_Questions.idCurrEduCls}`;

        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="btnQAnswer" keyId="${strKeyId}" title="解答" class="layui-btn layui-btn layui-btn-xs" >${clsIcon.spanCircleQuestion}</button>`;
        strhtml += '</p>';
        strhtml += '</div>';
        strhtml += '<div id="J_ShortComment">';
        arrvqa_AnswerObjLst1 = arrvqa_AnswerObjLst0.filter(
          (x) => x.questionsId == objvqa_Questions.questionsId,
        );
        let varANum = 0;
        for (let i = 0; i < arrvqa_AnswerObjLst1.length; i++) {
          const objvqa_Answer = arrvqa_AnswerObjLst1[i];
          varANum++;
          strhtml += '<div class="comment" >';
          strhtml +=
            '<div class="common-avatar J_User" ><img src="/img/avatar5.png" width="100%" height="100%"></div>';
          strhtml += '<div class="comment-block">';
          if (GetInputValueInDivObj(divName, 'hidQuestionsUser') == objvqa_Answer.updUser) {
            strhtml += `<p class="comment-user" ><span class="comment-username J_User" style="color:red;" > 题主：${objvqa_Answer.userName}</span>`;
          } else {
            strhtml += `<p class="comment-user" ><span class="comment-username J_User" >${objvqa_Answer.userName}</span>`;
          }
          strhtml += `<span class="comment-time">${objvqa_Answer.updDate}</span>`;
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment-username J_User">${varANum}楼</span></p>`;
          //strhtml += '<div class="comment-content J_CommentContent">评分：' + arrvPaperAppraiseObjLst[i].AppraiseScore + '</div>';
          strhtml += `<div class="comment-content J_CommentContent">${objvqa_Answer.answerContent}</div>`;

          //回复区

          arrvqa_AnswerObjLst3 = arrvqa_AnswerObjLst2.filter(
            (x) => x.parentId == objvqa_Answer.answerId,
          );
          if (arrvqa_AnswerObjLst3.length > 0) {
            strhtml += '<div class="reply J_ReplyBlock">';
            for (let j = 0; j < arrvqa_AnswerObjLst3.length; j++) {
              strhtml += '<div class="reply-block">';

              strhtml += '<div class="reply-content">';
              if (
                GetInputValueInDivObj(divName, 'hidQuestionsUser') ==
                arrvqa_AnswerObjLst3[j].updUser
              ) {
                strhtml += `<span class="reply-user"><b class="reply-user-nick J_User" style="color:red;"> 题主(${arrvqa_AnswerObjLst3[j].userName})</b>：</span>`;
              } else {
                strhtml += `<span class="reply-user"><b class="reply-user-nick J_User">${arrvqa_AnswerObjLst3[j].userName}</b>：</span>`;
              }
              strhtml += `${arrvqa_AnswerObjLst3[j].answerContent}</div>`;

              strhtml += '<div class="reply-operate reply-operate--hot">';

              strhtml += `<span class="J_Vote reply-operate-item reply-up operate-visited" >赞<i>${arrvqa_AnswerObjLst3[j].voteCount}</i></span >`;

              strhtml += `<i class="reply-dot">·</i><span>${arrvqa_AnswerObjLst3[j].updDate}</span>`;

              strhtml += '</div>';

              strhtml += '</div>';
            }
            strhtml += '</div>';
          }
          ///评论区
          strhtml += '<div class="comment-operate J_CommentOperate clearfix">';

          strhtml += `<span class="J_Vote comment-operate-item comment-operate-up operate-visited">赞<i>${objvqa_Answer.voteCount}</i></span>`;

          strhtml += '</div>';
          strhtml += '</div></div>';
        }
        strhtml += ' </div>';
      }

      // $('#J_Short_TeaQA').h1tml(strhtml);
      const J_Short_TeaQA = GetDivObjInDivObj(PaperAttention.divLayout, 'J_Short_TeaQA');
      J_Short_TeaQA.innerHTML = strhtml;
      this.SetEventForTeaQA();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取数据不成功,${e}.`;
      alert(strMsg);
    }
  }
  public SetEventForTeaQA() {
    {
      const arrBtnAddQA = GetButtonObjLstInDivObjN(PaperAttention.divLayout, 'btnAddQA');
      for (const btnAddQA of arrBtnAddQA) {
        if (btnAddQA != null) {
          const strKeyId = btnAddQA.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;

          (function (strKeyId: any) {
            btnAddQA.onclick = function () {
              PaperAttention.vuebtn_Click('AddQA', strKeyId);
            };
          })(strKeyId);
        }
      }
    }

    {
      const arrBtnQAnswer = GetButtonObjLstInDivObjN(PaperAttention.divLayout, 'btnQAnswer');
      for (const btnQAnswer of arrBtnQAnswer) {
        if (btnQAnswer != null) {
          const strKeyId = btnQAnswer.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 4) continue;
          const objData = {
            paperId: arr[0],
            questionsId: arr[1],
            questionsTypeId: arr[2],
            idCurrEduCls: arr[3],
          };

          (function (objData: any) {
            btnQAnswer.onclick = function () {
              PaperAttention.vuebtn_Click('QAnswer', objData);
            };
          })(objData);
        }
      }
    }

    {
      const arrBtnSysComment = GetButtonObjLstInDivObjN(PaperAttention.divLayout, 'btnSysComment');
      for (const btnSysComment of arrBtnSysComment) {
        if (btnSysComment != null) {
          const strKeyId = btnSysComment.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 4) continue;
          const objData = { keyId: arr[0], type: arr[1], user: arr[2], pubParentId: arr[3] };

          (function (objData: any) {
            btnSysComment.onclick = function () {
              PaperAttention.vuebtn_Click('SysComment', objData);
            };
          })(objData);
        }
      }
    }

    {
      const arrAUpdatePaperSubView = GetAObjLstInDivObj(
        PaperAttention.divLayout,
        'aUpdatePaperSubView',
      );
      for (const aUpdatePaperSubView of arrAUpdatePaperSubView) {
        if (aUpdatePaperSubView != null) {
          const strKeyId = aUpdatePaperSubView.getAttribute('keyid');
          if (strKeyId == null) continue;

          (function (strKeyId: any) {
            aUpdatePaperSubView.onclick = function () {
              PaperAttention.vuebtn_Click('UpdatePaperSubView', strKeyId);
            };
          })(strKeyId);
        }
      }
    }
  }
  /*
   * 节Id
   */
  public get sectionId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlSectionId_q');
  }

  /*
   * 类型Id
   */
  public get subViewpointTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlSubViewpointTypeId_q');
  }
  /**
   * 获取div对象，根据不同的div类型
   * (AutoGCLib.Vue_ViewScriptCS_TS4TypeScript:Gen_Vue_Ts_GetDivName)
   **/
  public getDivName(strDivType: enumDivType): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    let divName;
    let divTypeName;
    let strMsg;
    switch (strDivType) {
      case enumDivType.LayOut_01:
        divName = PaperAttention.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = PaperAttention.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = PaperAttention.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = PaperAttention.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = PaperAttention.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = PaperAttention.divPager;
        divTypeName = 'divPager';
        break;
      default:
        strMsg = `获取div对象时，DivType =${strDivType}没有被处理，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        alert(strMsg);
        return null;
        break;
    }
    if (divName == null) {
      strMsg = `当前${divTypeName}层(div)对象为空，请检查！(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
      return null;
    }
    return divName;
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(
    strCommandName: string,
    strKeyId: any,
    divLayout: HTMLDivElement,
  ): string {
    const strTabId = strKeyId;
    const objPage = new PaperAttention();
    console.log(strKeyId, objPage);
    let arrKeyIds: Array<string> = [];
    if (PaperAttention.divDataLst != null) {
      arrKeyIds = GetCheckedKeyIdsInDivObj(PaperAttention.divDataLst);
    }
    // strKeyId = GetFirstCheckedKeyIdInDivObj(PaperAttention.divDataLst);
    let arr;
    let strMsg;
    let strAnswerId;
    let strUserId;
    let strKey;
    let strType;
    let strUser;
    let strQuestionsId;
    let strPubParentId;
    let objData = strKeyId;
    switch (strCommandName) {
      case 'changeTab':
        switch (strTabId) {
          case 'Paper_SubViewpoint': //查询记录
            objPage.li_PaperAttentionTab_Click();
            break;

          case 'Paper_QA': //查询记录
            objPage.li_PaperAttentionTab_Click();
            break;
          case 'Paper_Tags': //查询记录
            objPage.li_PaperAttentionTab_Click();
            break;
          case 'Tea_QA': //查询记录
            objPage.li_PaperAttentionTab_Click();
            break;
        }
        break;
      case 'SysComment':
        strKey = objData.keyId;
        strType = objData.type;
        strUser = objData.user;
        strPubParentId = objData.pubParentId;
        objPage.SysComment(strKey, strUser, strPubParentId);
        break;
      case 'AddVote':
        objPage.btnAddVote_Click(objData.strSubViewpointId, objData.updUser);
        break;
      case 'QAnswer':
        // objPage.btnq
        break;
      case 'AddQA':
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return '';
        }
      case 'Query': //导出Excel
        objPage.btnQueryEx_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;

      default:
        AccessBtnClickDefault(strCommandName, 'PaperAttention.btn_Click');
        break;
    }
    return '';
  }
  public async SysComment(strAnswerId: string, strUserId: string, strQuestionsId: string) {
    try {
      // 使用动态导入加载函数代码块
      const { CommQuestionAnswer } = await import('../InteractManage/CommQuestionAnswer');
      // console.error('CommQuestionAnswer');
      // 调用加载的函数
      CommQuestionAnswer.divLayout = PaperAttention.divLayout;
      const objPage = new CommQuestionAnswer();
      // const objLayOut = objPage.getDivName(enumDivType.LayOut_01);
      // if (objLayOut == null) return;

      await objPage.SysComment(strAnswerId, strUserId, strQuestionsId);
    } catch (error) {
      console.error('加载函数:[CommQuestionAnswer]时出现错误:', error);
    }
  }
  public get readWriteTypeId(): string {
    return PaperAttention.GetPropValue('readWriteTypeId');
  }
}
