import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { sys_RequestPushCRUD } from '@/viewsBase/GradEduTools/sys_RequestPushCRUD';
import { clsPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsPaperReadWriteEN';
import { clssys_RequestPushEN } from '@/ts/L0Entity/GradEduTools/clssys_RequestPushEN';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import { clsRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaEN';
import { clsvResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsvResearchTopicEN';
import { clsgs_ColorEN } from '@/ts/L0Entity/RT_Params/clsgs_ColorEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { CurrEduCls_GetObjByIdCurrEduClsCache } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import {
  sys_RequestPush_AddNewRecordAsync,
  sys_RequestPush_GetObjLstAsync,
  sys_RequestPush_GetRecCountByCondAsync,
  sys_RequestPush_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTools/clssys_RequestPushWApi';
import { ResearchTopic_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import {
  RTUserRela_AddNewRecordAsync,
  RTUserRela_GetFirstObjAsync,
  RTUserRela_GetObjLstAsync,
  RTUserRela_IsExistRecordAsync,
  RTUserRela_ReOrderAsync,
  RTUserRela_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTUserRelaWApi';
import { vResearchTopic_GetObjLstByPagerAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvResearchTopicWApi';
import { gs_Color_GetObjLstCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ColorWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { Format } from '@/ts/PubFun/clsString';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  HideDivInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

//declare function tbody(): void;

declare let window: any;
/* PaperSubViewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ApplyTopic extends sys_RequestPushCRUD {
  public static requestStata = '';
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
    // 在此处放置用户代码以初始化页面
    try {
      //1、为下拉框设置数据源,绑定列表数据
      if (userStore.getUserId != '') {
        this.hidSortBy = 'updDate Desc';
        //绑定主题
        await this.BindGv_Topic();

        await this.Bind_RequestPushCount();

        //请求
        ApplyTopic.requestStata = '1';
        await this.BindGv_sys_RequestPush();
        //通知
        ApplyTopic.requestStata = '2';
        await this.BindGv_sys_RequestPush();

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

  /* 查询
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async btnQuery_Click() {
    try {
      await this.BindGv_Topic();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*历史请求*/
  public async history_Request_Click() {
    try {
      //请求
      ApplyTopic.requestStata = '3';
      await this.BindGv_sys_RequestPush();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*历史通知*/
  public async history_Notice_Click() {
    try {
      //历史通知
      ApplyTopic.requestStata = '4';
      await this.BindGv_sys_RequestPush();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public CombineCondition1(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    strWhereCond += ` and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;

    try {
      if (this.topicName_q != '') {
        strWhereCond += ` And ${clsvResearchTopicEN.con_TopicName} like '%${this.topicName_q}%'`;
      }
      if (this.TopicProposePeople_q != '') {
        strWhereCond += ` And ${clsvResearchTopicEN.con_UserName} like '%${this.TopicProposePeople_q}%'`;
      }

      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_UpdDate} < '${this.EndDate_q}'`;
      }
      if (clsPubLocalStorage.idCurrEduCls == '00000050') {
        strWhereCond += ` and updUser='${userStore.getUserId}'`;
      } else {
        strWhereCond += ` and topicId not in(select topicId from RTUserRela where UserID='${userStore.getUserId}')`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombineCondition2(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_UpdDate} < '${this.EndDate_q}'`;
      }

      strWhereCond += ` And updUser = '${userStore.getUserId}'`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //主题讨论评论
  public async BindGv_Topic() {
    const strCourseId = clsPubLocalStorage.courseId;
    const strWhereCond = await this.CombineCondition1();

    let arrvResearchTopicObjLst: Array<clsvResearchTopicEN> = [];
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    try {
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };

      arrvResearchTopicObjLst = await vResearchTopic_GetObjLstByPagerAsync(objPagerPara);
      if (arrvResearchTopicObjLst.length == 0) {
        const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
        const objCurrEduCls = await CurrEduCls_GetObjByIdCurrEduClsCache(
          strIdCurrEducls,
          strCourseId,
        );
        const strMsg = Format('没有可申请的研究主题。当前教学班:[{0}].', objCurrEduCls?.eduClsName);
        alert(strMsg);
        return;
      }

      let arrTopicId = '';
      for (let i = 0; i < arrvResearchTopicObjLst.length; i++) {
        arrTopicId += `${arrvResearchTopicObjLst[i].topicId},`;
      }
      arrTopicId = arrTopicId.substring(0, arrTopicId.length - 1);

      //主题用户关系
      const strWhereCond2 = `topicId in(${arrTopicId})`;
      //strWhereCond3 = "UserID ='" + userStore.getUserId + "'";
      let arrRTUserRelaObjLst: Array<clsRTUserRelaEN> = [];
      let arrRTUserRelaObjLst2: Array<clsRTUserRelaEN> = [];
      arrRTUserRelaObjLst = await RTUserRela_GetObjLstAsync(strWhereCond2);

      let strhtml = '';
      // const cateid = 0;
      //$('#tbList tr').remove();

      for (let i = 0; i < arrvResearchTopicObjLst.length; i++) {
        const strTopicName: string = arrvResearchTopicObjLst[i].topicName;
        //strIdCurrEduclsstrAppraiseScore: number = arrvResearchTopicObjLst[i].AppraiseScore;
        let strTopicContent: string = arrvResearchTopicObjLst[i].topicContent;
        if (strTopicContent.length > 15) {
          strTopicContent = `${strTopicContent.substring(0, 15)}...`;
        }

        const html_TopicContent = `<a style="color:#436EEE;" title="${arrvResearchTopicObjLst[i].topicContent}">${strTopicContent}</a>`;

        const strUserName = `${arrvResearchTopicObjLst[i].updUser}(${arrvResearchTopicObjLst[i].userName})`;
        arrRTUserRelaObjLst2 = arrRTUserRelaObjLst.filter(
          (x) => x.topicId == arrvResearchTopicObjLst[i].topicId,
        );
        const strUserNum = arrRTUserRelaObjLst2.length;

        const streduClsName = clsPubLocalStorage.eduClsName;

        const html_ApplyTopic = `<button title="申请加入" class="layui-btn layui-btn-warm layui-btn-xs" onclick=btnApplyTopic_Click("${arrvResearchTopicObjLst[i].topicId}","${arrvResearchTopicObjLst[i].updUser}");><font-awesome-icon :icon="['fas', 'plus']" />申请加入</button>`;

        strhtml += `<tr><td>${strTopicName}</td><td>${html_TopicContent}</td><td>${strUserName}</td><td>${strUserNum}</td><td>${streduClsName}</td><td>${html_ApplyTopic}</td></tr>`;
      }
      //拼接；
      //$("#tbList").append(strhtml);
      $('#tbApplyTopicList').html(strhtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //申请加入主题
  public async btnApplyTopic_Click(topicId: string, updUser: string) {
    const strUserId = userStore.getUserId;

    const objsys_RequestPushEN: clssys_RequestPushEN = new clssys_RequestPushEN();
    //this.PutDataTosys_RequestPushClass(objsys_RequestPushEN);
    objsys_RequestPushEN.SetTableKey(topicId);
    objsys_RequestPushEN.SetRequesTypeId('02');
    //objsys_RequestPushEN.SetParentId($("#hidParentId").val();
    //objsys_RequestPushEN.SetPubParentId($("#hidPubParentId").val();
    objsys_RequestPushEN.SetReceiveUser(updUser); //接收用户

    objsys_RequestPushEN.SetRequestUser(strUserId); //请求用户
    objsys_RequestPushEN.SetIsReply(false); //请求用户
    objsys_RequestPushEN.SetRequestStata('请求中'); //请求用户
    objsys_RequestPushEN.SetRequestDate(clsPubFun4Web.getNowDate()); //请求日期

    objsys_RequestPushEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);

    try {
      const responseText2 = await sys_RequestPush_AddNewRecordAsync(objsys_RequestPushEN);
      //const responseText2 = await sys_RequestPush_AddNewRecordWithMaxIdAsync(objsys_RequestPushEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `申请成功,请等待主题负责人通过申请才可加入!`;
        ////
        ////显示信息框
        //alert(strInfo);
        message.success(strInfo);
        ApplyTopic.requestStata = '1';
        await this.BindGv_sys_RequestPush();
        //CloseWindow();
      } else {
        const strInfo = `申请失败!`;
        //
        //显示信息框
        message.success(strInfo);
      }

      //$("#J_PostBtn").attr("disabled", false);
      //$("#btnOKUpdAppraise").attr("disabled", false);
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      //$("#J_PostBtn").attr("disabled", false);
      //$("#btnOKUpdAppraise").attr("disabled", false);
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加评论不成功,${e}.`;
      alert(strMsg);
    }

    return true; //一定要有一个返回值，否则会出错！
  }

  /****************************************************答疑邀请相关 Start***************************************************/

  //请求
  public Combinesys_RequestPushCondition1(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //strWhereCond += " and idCurrEduCls=" + clsPubLocalStorage.idCurrEduCls;
      strWhereCond += ` and requesTypeId='02' and requestUser='${userStore.getUserId}' `;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combineqa_PaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //接收
  public Combinesys_RequestPushCondition2(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //strWhereCond += " and idCurrEduCls=" + clsPubLocalStorage.idCurrEduCls;
      strWhereCond += ` and requesTypeId='02' and receiveUser='${userStore.getUserId}' `;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combineqa_PaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //申请请求接收推送统计
  public async Bind_RequestPushCount() {
    try {
      let strWhereCond1 = this.Combinesys_RequestPushCondition1();
      strWhereCond1 += ' and isReply=0';
      let strWhereCond2 = this.Combinesys_RequestPushCondition2();
      strWhereCond2 += ' and isReply=0';
      const int_requestCount = await sys_RequestPush_GetRecCountByCondAsync(strWhereCond1);
      const int_noticeCount = await sys_RequestPush_GetRecCountByCondAsync(strWhereCond2);

      $('#requestCount').html(int_requestCount.toString());
      $('#noticeCount').html(int_noticeCount.toString());

      const int_RequestPushCount = int_requestCount + int_noticeCount;

      $('#RequestPushCount').html(int_RequestPushCount.toString());
      $('#hidRequestPushCount').val(int_RequestPushCount);
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //请求列表
  public async BindGv_sys_RequestPush() {
    //    public async BindGv_sys_RequestPush(requestStata: string) {

    let strWhereCond = '';
    switch (ApplyTopic.requestStata) {
      case '1':
        strWhereCond += this.Combinesys_RequestPushCondition1();
        strWhereCond += ' and isReply=0';
        break;
      case '2':
        strWhereCond += this.Combinesys_RequestPushCondition2();
        strWhereCond += ' and isReply=0';
        break;
      case '3':
        strWhereCond += this.Combinesys_RequestPushCondition1();
        strWhereCond += ' and isReply=1';
        break;
      case '4':
        strWhereCond += this.Combinesys_RequestPushCondition2();
        strWhereCond += ' and isReply=1';
        break;
    }
    //if (requestStata == "1") {
    //    strWhereCond += this.Combinesys_RequestPushCondition1();
    //    strWhereCond += " and isReply=0";
    //} else {
    //    strWhereCond += this.Combinesys_RequestPushCondition2();
    //    strWhereCond += " and isReply=0";
    //}

    //strWhereCond += " order by requestDate Asc";

    //intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex);//获取当前页
    let arrsys_RequestPushObjLst: Array<clssys_RequestPushEN> = [];
    let arrResearchTopicObjLst: Array<clsResearchTopicEN> = [];
    let arrUsers: Array<clsvUsersSimEN> = [];

    try {
      arrsys_RequestPushObjLst = await sys_RequestPush_GetObjLstAsync(strWhereCond);

      if (arrsys_RequestPushObjLst.length > 0) {
        //通过主题id获取到对应的主题对象
        let arrTopicId = '';
        for (let i = 0; i < arrsys_RequestPushObjLst.length; i++) {
          arrTopicId += `${arrsys_RequestPushObjLst[i].tableKey},`;
        }
        arrTopicId = arrTopicId.substring(0, arrTopicId.length - 1);

        const strWhereCond2 = `topicId in(${arrTopicId})`;
        //声明主题变量
        arrResearchTopicObjLst = await ResearchTopic_GetObjLstAsync(strWhereCond2);
      }
      //获取用户缓存数据

      const strWhere_User = '1=1';
      arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定推送数据不成功,${e}.`;
      alert(strMsg);
    }

    try {
      let strhtml = '';
      if (ApplyTopic.requestStata == '1') {
        //请求
        strhtml += '<div class="info" id="infoRequest">';
      } else {
        //通知
        strhtml += '<div class="info" id="infonotice">';
      }
      strhtml += '<ul class="artlist">';

      let k = 0;
      for (let i = 0; i < arrsys_RequestPushObjLst.length; i++) {
        k++;
        const strUserName = await vQxUsersSimStore.getUserName(
          arrsys_RequestPushObjLst[i].requestUser,
        );
        if (strUserName != '') {
          strhtml += `<li id="li${arrsys_RequestPushObjLst[i].requestId}">`;
          strhtml += '<div style="text-align:left; float:left; width:65%;">';
          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color1">${k}、</span>`;
          const objResearchTopic = arrResearchTopicObjLst.find(
            (x) => x.topicId == arrsys_RequestPushObjLst[i].tableKey,
          );
          if (objResearchTopic != null) {
            if (ApplyTopic.requestStata == '1') {
              //请求
              strhtml += `<span class="title btn-1"><a href="javascript:void(0)"  class="abstract-text">${strUserName}申请参加"${objResearchTopic.topicName}"主题！</a></span>`;
            } else {
              //通知
              strhtml += `<span class="title btn-1"><a href="javascript:void(0)"  class="abstract-text">${strUserName}申请参加"${objResearchTopic.topicName}"主题，您是否同意？</a></span>`;
            }
          }
          //}
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="badge badge-pill badge-success" title="${arrsys_RequestPushObjLst[i].requestStata}">${arrsys_RequestPushObjLst[i].requestStata}</span>`;

          if (ApplyTopic.requestStata == '2') {
            //同意
            strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button title="同意" class="layui-btn layui-btn layui-btn-xs" onclick=btn_OK_Click(${arrsys_RequestPushObjLst[i].requestId},"${arrsys_RequestPushObjLst[i].tableKey}","${arrsys_RequestPushObjLst[i].requestUser}")><font-awesome-icon icon="floppy-disk" /></button>`;
            //拒绝
            strhtml += `&nbsp;<button title="拒绝" class="layui-btn-danger layui-btn layui-btn-xs" onclick=btn_NO_Click(${arrsys_RequestPushObjLst[i].requestId}) href="javascript:;"><i class="layui-icon">&#x1006;</i></button>`;
          }
          strhtml += '</div>';
          //strhtml += '</li>';
          //strhtml += '<li style="text-align:right;>';
          strhtml += '<div style="text-align:right; float:right; width:34%;">';

          strhtml += `<span class="rowtit color5"></span>${strUserName}<span class="rowtit color5">&nbsp;/&nbsp;</span>${arrsys_RequestPushObjLst[i].requestDate}`;
          //}
          strhtml += '</div>';
          strhtml += '</li>';
        }
      }
      strhtml += '</ul>';
      strhtml += '</div>';

      //if (requestStata == "1") {
      //    //请求
      //    $("#Request").html(strhtml);
      //    console.log("完成BindGv_request!");
      //} else {
      //    //通知
      //    $("#Notice").html(strhtml);
      //    console.log("完成BindGv_notice!");
      //}

      switch (ApplyTopic.requestStata) {
        case '1':
          //请求
          $('#Request').html(strhtml);
          console.log('完成BindGv_request!');
          break;
        case '2':
          //通知
          $('#Notice').html(strhtml);
          console.log('完成BindGv_notice!');
          break;
        case '3':
          //历史请求
          $('#history_Request').html(strhtml);
          console.log('完成BindGv_history_Request!');
          break;
        case '4':
          //历史通知
          $('#history_Notice').html(strhtml);
          console.log('完成BindGv_history_Notice!');
          break;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定推送列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 同意
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async btn_OK_Click(requestId: number, strTopicId: string, strRequestUser: string) {
    const strThisFuncName = this.btn_OK_Click.name;
    const objsys_RequestPushEN: clssys_RequestPushEN = new clssys_RequestPushEN();
    objsys_RequestPushEN.SetRequestId(requestId);

    objsys_RequestPushEN.SetIsReply(true);
    objsys_RequestPushEN.SetReplyDate(clsPubFun4Web.getNowDate());
    objsys_RequestPushEN.SetRequestStata('同意');
    objsys_RequestPushEN.sfUpdFldSetStr = objsys_RequestPushEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objsys_RequestPushEN.requestId == 0 || objsys_RequestPushEN.requestId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await sys_RequestPush_UpdateRecordAsync(objsys_RequestPushEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        //message.success("当前申请已同意！");
        ////通知
        //const gvResult4 = await this.BindGv_sys_RequestPush("2");
        console.log('完成请求推送的修改!');
        //增加主题用户关系
        const responseText2 = await this.AddNewTopicAndRecordSaveUserRela(
          strTopicId,
          strRequestUser,
        );
        const returnBool2 = !!responseText2;
        if (returnBool2 == true) {
          message.success('当前申请已同意！');
          //通知
          ApplyTopic.requestStata = '2';
          await this.BindGv_sys_RequestPush();
        }
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 添加主题同时把用户作为组长存放到主题用户关系表*/
  public async AddNewTopicAndRecordSaveUserRela(strTopicId: string, strRequestUser: string) {
    const objRTUserRelaEN: clsRTUserRelaEN = new clsRTUserRelaEN();
    objRTUserRelaEN.SetTopicId(strTopicId);
    objRTUserRelaEN.SetUserId(strRequestUser);
    objRTUserRelaEN.SetTopicUserRoleId('0003'); //主题成员
    objRTUserRelaEN.SetOrderNum(30);
    objRTUserRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    objRTUserRelaEN.SetUpdUser(userStore.getUserId); // 修改用户

    try {
      // 同一主题 同一用户 只能添加一次；
      const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And userId = '${strRequestUser}'`;
      const responseText = await RTUserRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一主题不能重复添加同一个用户！`;
        //alert(strMsg);
        message.info(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await RTUserRela_AddNewRecordAsync(objRTUserRelaEN);
      const returnBool = !!responseText2;
      //if (returnBool == true) {
      //    console.log("完成主题用户关系!");

      //}
      if (returnBool == true) {
        console.log('完成主题用户关系!');

        await this.btnReOrder_Click(strTopicId);

        //获取缓存色码表；
        let arrGs_ColorObjLst: Array<clsgs_ColorEN> = [];
        //获取色码数据
        arrGs_ColorObjLst = await gs_Color_GetObjLstCache();
        //添加完成后把根据用户排序号得到色码表 样式把样式更新到主题用户关系表；
        const strWhereUserRela = ` 1 = 1 And topicId = '${strTopicId}' And userId = '${strRequestUser}'`;
        //const responseText = await RTUserRela_GetFirstObjAsync(strWhere);
        await RTUserRela_GetFirstObjAsync(strWhereUserRela).then((jsonData) => {
          const objRTUserRelaEN: clsRTUserRelaEN = <clsRTUserRelaEN>jsonData;

          if (objRTUserRelaEN != null) {
            //得到用户排序号
            const Objgs_Color = arrGs_ColorObjLst.find((x) => x.userNo == objRTUserRelaEN.orderNum);
            if (Objgs_Color != null) {
              //得到色码

              const objUpdateRTUserRelaEN: clsRTUserRelaEN = new clsRTUserRelaEN();
              objUpdateRTUserRelaEN.SetmId(objRTUserRelaEN.mId);
              objUpdateRTUserRelaEN.SetColorId(Objgs_Color.colorId);

              objUpdateRTUserRelaEN.sfUpdFldSetStr = objUpdateRTUserRelaEN.updFldString; //设置哪些字段被修改(脏字段)

              RTUserRela_UpdateRecordAsync(objUpdateRTUserRelaEN).then((jsonData) => {
                const returnBool: boolean = jsonData;
                if (returnBool == true) {
                  return true;
                } else {
                  const strInfo = `修改用户色码不成功!`;
                  alert(strInfo);
                  console.log('修改用户色码不成功');
                  return false;
                }
              });
            }
          }
        });
      } else {
        const strInfo = `添加主题用户关系不成功!`;

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
    //return true;//一定要有一个返回值，否则会出错！
  }

  public async btnReOrder_Click(strTopicId: string) {
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        topicId: strTopicId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await RTUserRela_ReOrderAsync(objOrderByData);
      //gs_PaperParagraph_ReFreshCache();
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
  }

  /* 拒绝
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async btn_NO_Click(requestId: number) {
    const strThisFuncName = this.btn_NO_Click.name;

    const objsys_RequestPushEN: clssys_RequestPushEN = new clssys_RequestPushEN();
    objsys_RequestPushEN.SetRequestId(requestId);
    objsys_RequestPushEN.SetIsReply(true);
    objsys_RequestPushEN.SetReplyDate(clsPubFun4Web.getNowDate());
    objsys_RequestPushEN.SetRequestStata('拒绝');
    objsys_RequestPushEN.sfUpdFldSetStr = objsys_RequestPushEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objsys_RequestPushEN.requestId == 0 || objsys_RequestPushEN.requestId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await sys_RequestPush_UpdateRecordAsync(objsys_RequestPushEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        message.success('当前申请已拒绝！');

        console.log('当前申请已拒绝!');
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `拒绝不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /*
   * 获取当前页序号
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortBy');
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

  /*
   * 栏目主题
   */
  public get topicName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtTopicName_q');
  }

  /*
   * 主题提出人
   */
  public get TopicProposePeople_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtTopicProposePeople_q');
  }
}
