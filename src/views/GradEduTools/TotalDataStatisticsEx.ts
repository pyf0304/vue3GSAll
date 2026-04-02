import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { SysCommentEx_UpdateCommentWeekAsync } from '@/ts/L3ForWApiExShare/GraduateEdu/clsSysCommentExWApi';
import {
  gs_AnswerCountEx_GetAnswerCountByTableAsync,
  gs_AnswerCountEx_GetAnswerCountNumObjLstAsync,
  gs_AnswerCountEx_GetWeekAnswerCountNumObjLstAsync,
} from '@/ts/L3ForWApiEx/GradEduTools/clsgs_AnswerCountExWApi';
import { gs_TotalDataStatisticsEx_GetTotalStatisticsByTableAsync } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import {
  vgs_TotalDataStatisticsEx_GetObjLstCache,
  vgs_TotalDataStatisticsEx_GetUserNumObjLstAsync,
  vgs_TotalDataStatisticsEx_GetUser_WeekNumObjLstAsync,
  vgs_TotalDataStatisticsEx_GetWeekAVGTeaScoreObjLstAsync,
  vgs_TotalDataStatisticsEx_GetWeekNumObjLstAsync,
} from '@/ts/L3ForWApiEx/GradEduTools/clsvgs_TotalDataStatisticsExWApi';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import { clsgs_AnswerCountEN } from '@/ts/L0Entity/GradEduTools/clsgs_AnswerCountEN';
import { clsgs_TeachingDateEN } from '@/ts/L0Entity/DailyRunning/clsgs_TeachingDateEN';
import { clsgs_TotalDataTypeEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataTypeEN';
import { clsSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsSysCommentEN';
import { clsvgs_TotalDataStatisticsEN } from '@/ts/L0Entity/GradEduTools/clsvgs_TotalDataStatisticsEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import { vCurrEduClsStu_GetSubObjLstCache } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import { gs_AnswerCount_GetSubObjLstCache } from '@/ts/L3ForWApi/GradEduTools/clsgs_AnswerCountWApi';
import {
  gs_TeachingDate_GetFirstObjAsync,
  gs_TeachingDate_GetObjLstCache,
  gs_TeachingDate_IsExistRecordAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsgs_TeachingDateWApi';
import {
  gs_TotalDataType_BindDdl_TotalDataTypeIdInDivCache,
  gs_TotalDataType_GetObjLstCache,
} from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataTypeWApi';
import { SysComment_GetSubObjLstCache } from '@/ts/L3ForWApi/GradEduTools/clsSysCommentWApi';
import { vgs_TotalDataStatistics_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsvgs_TotalDataStatisticsWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { BindDdl_ObjLst_V } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { gs_TeachingDate_EditEx } from '@/viewsShare/DailyRunning/gs_TeachingDate_EditEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { gs_TotalDataStatisticsCRUD } from '@/viewsBase/GradEduTools/gs_TotalDataStatisticsCRUD';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

// declare let window: any;

/*
 * PaperSubViewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 */
export default class TotalDataStatisticsEx extends gs_TotalDataStatisticsCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => string;
  public static GetPropValue: (strPropName: string) => string;
  public queryStata = '0';
  public static Canvas1: (str1: string, str2: string) => void;

  public static Canvas3: (
    str1: string,
    str2: string,
    strCanvasNo: string,
    strUserIdorCurrEduClsId: string,
  ) => void; //图标方法

  public static Canvas2: (
    strlabelsJson: any,
    strdatasetsJson: any,
    strColorJson: string,
    strCanvasNo: string,
    strUserIdorCurrEduClsId: string,
  ) => void;
  public static Canvas4: (
    str1: string,
    str2: string,
    str3: string,
    strCanvasNo: string,
    strUserIdorCurrEduClsId: string,
  ) => void;

  public static Canvas5: (
    strlabelsJson: any,
    strdatasetsJson: any,
    strColorJson: any,
    strCanvasNo: string,
    strUserIdorCurrEduClsId: string,
  ) => void;
  public static Canvas6: (
    strlabelsJson: any,
    strdatasetsJson: any,
    strCanvasNo: string,
    strUserIdorCurrEduClsId: string,
  ) => void;
  public static Canvas7: (
    strlabelsJson: any,
    strdatasetsJson: any,
    strCanvasNo: string,
    strUserIdorCurrEduClsId: string,
  ) => void;

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
    //this.BindGv_vgs_TeachingDate();

    this.Bind_AllData();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'vgs_TeachingDate':
        alert('该类没有绑定该函数：[this.BindGv_vgs_TeachingDate_Cache]！');
        //this.BindGv_vgs_TeachingDateCache();;
        break;
    }
  }
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      const objDivQuery = this.getDivName(enumDivType.Query_02);
      if (objDivQuery == null) return;
      if (clsPubLocalStorage.idCurrEduCls != '') {
        //1、从教学班表内获取当前教学班学生

        await clsDropDownList.BindDdl_CurrEduClsStuUser('ddlUserId_q');
        //const ddl_UserId_q = await this.BindDdl_UserName("ddlUserId_q");

        await gs_TotalDataType_BindDdl_TotalDataTypeIdInDivCache(objLayOut, 'ddlTotalDataTypeId_q');

        // await clsDropDownList.BindDdl_TopicId('ddlTopicId_q');

        //获取教学班时间范围
        await this.GetEduDataRandge();

        //默认显示数据,因为是本界面调用，所以参数赋 空值；
        await this.Bind_AllData();
        //const gvResult1 = await this.Bind_AllData()
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        //    reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班学生关系
  public async BindDdl_UserName(ddlUserId_q: string) {
    //strWhereCond = " idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    const objDdl = document.getElementById(ddlUserId_q);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlUserId_q} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      const arrObjLst_Sel: Array<clsvgs_TotalDataStatisticsEN> =
        await vgs_TotalDataStatisticsEx_GetObjLstCache(strIdCurrEducls);

      const arrUserId_Set: Set<string> = new Set(arrObjLst_Sel.map((x) => x.updUser));
      console.log(arrUserId_Set);

      const strWhere_User = '1=1';
      const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

      let arrUsersList_Sel: Array<clsvUsersSimEN> = arrUsers.filter((x) =>
        arrUserId_Set.has(x.userId),
      );
      console.log(arrUsersList_Sel);
      arrUsersList_Sel = arrUsersList_Sel.sort((x) => x.GetFldValue(clsvUsersSimEN.con_UserName));

      BindDdl_ObjLst_V(
        ddlUserId_q,
        arrUsersList_Sel,
        clsvUsersSimEN.con_UserId,
        clsvUsersSimEN.con_UserName,
        '教学班用户',
      );

      //arrObjLst_Sel = arrObjLst_Sel.sort(x => x[clsvgs_TotalDataStatisticsEN.con_UpdUser]);

      //BindDdl_ObjLst(ddlUserId_q, arrObjLst_Sel, clsvCurrEduClsStuEN.con_StuId, clsvCurrEduClsStuEN.con_StuName, "教学班学生");

      console.log('完成BindDdl_vCurrEduClsStuId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //获取教学班时间范围
  public async GetEduDataRandge() {
    // strWhereCond: string = " 1 = 1 and idCurrEduCls=" + clsPubLocalStorage.idCurrEduCls;
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

    let arrgs_TeachingDateObjLst: Array<clsgs_TeachingDateEN> = [];
    arrgs_TeachingDateObjLst = await gs_TeachingDate_GetObjLstCache(strIdCurrEducls);

    //通过教学班得到教学班时间范围；、
    // const responseText1 = await gs_TeachingDate_GetFirstObjAsync(strWhereCond);
    const objgs_TeachingDateEN = arrgs_TeachingDateObjLst.find(
      (x) => x.idCurrEduCls == strIdCurrEducls,
    );
    //    const objgs_TeachingDateEN: clsgs_TeachingDateEN = <clsgs_TeachingDateEN>responseText1;
    if (objgs_TeachingDateEN != null) {
      $('#hidStartDate').val(objgs_TeachingDateEN.startDate);
      $('#hiEndDate').val(objgs_TeachingDateEN.endDate);
      this.StartDate_q = objgs_TeachingDateEN.startDate;
      this.EndDate_q = objgs_TeachingDateEN.endDate;
    }
  }

  //设置教学班范围时间；
  public async btnSetUpDateRecord_Click() {
    const objPage: TotalDataStatisticsEx = new TotalDataStatisticsEx();
    const objPageEdit: gs_TeachingDate_EditEx = new gs_TeachingDate_EditEx(
      'gs_TeachingDate_EditEx',
      objPage,
    );
    const strKeyId = clsPubLocalStorage.idCurrEduCls;
    //判断教学班数据是否已经被设置
    const strWhere = ` 1 = 1 And idCurrEduCls = '${strKeyId}'`;
    const responseText1 = await gs_TeachingDate_GetFirstObjAsync(strWhere);
    const objgs_TeachingDateEN: clsgs_TeachingDateEN = <clsgs_TeachingDateEN>responseText1;
    if (objgs_TeachingDateEN != null) {
      //赋值，弹出框
      //存放教学班日期范围表主键
      $('#hidgs_DateId').val(objgs_TeachingDateEN.mId);
      objPageEdit.btnUpdateRecordInTab_Click(objgs_TeachingDateEN.mId.toString());
    } else {
      //添加 需要清空下隐藏数据
      $('#hidgs_DateId').val('');
      objPageEdit.btnAddNewRecord_Click();
    }
  }
  //一个是教学班，一个是判断调用函数的类型参数；
  public async Bind_AllData() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    ////如果传入的教学班为空，那么则可以判断不是其他界面调用此函数；
    // strIdCurrEduclshQstata: string = "";
    // //如果等于空，则是 本界面调用，那么类型参数按照本界面执行，否则按照传入的参数调用执行；
    // if (strIdCurrEduCls != "") {
    //     hQstata = strPageStata;
    // }
    // else {
    //     hQstata = $("#hidQueryStata").val();
    // }

    const hQstata = GetInputValueInDivObj(divName, 'hidQueryStata');
    //赋值等于空，则是本界面调用，否则按照传入的参数调用执行
    const strIdCurrEduCls = '';
    const strCanvasNo = '0';
    const strUserIdorCurrEduClsId = '';
    switch (hQstata) {
      case '1':
        if (this.userId_q == '' || this.userId_q == '0') {
          $('select').prop('selectedIndex', 1);
        }
        await this.BindGv_UserNum(strIdCurrEduCls);
        await this.BindGv_UserNumTable();
        break;
      case '2':
        await this.BindGv_TeaClassNum(strIdCurrEduCls, strCanvasNo, strUserIdorCurrEduClsId);
        await this.BindGv_UserNumTable();
        break;
      case '3':
        await this.BindGv_TotalDataNum(strIdCurrEduCls, strCanvasNo, strUserIdorCurrEduClsId);
        await this.BindGv_TotalDataNumTable();
        break;
      case '4':
        await this.BindGv_AVGTeaScore(strIdCurrEduCls, strCanvasNo, strUserIdorCurrEduClsId);
        await this.BindGv_TeaClassAverageTab();
        break;
      case '5':
        await this.BindChart_TeaClassComment(strIdCurrEduCls, strCanvasNo, strUserIdorCurrEduClsId);
        break;
      case '6':
        await this.BindChart_UserCommentNum(strIdCurrEduCls, strCanvasNo, strUserIdorCurrEduClsId);
        break;
      case '7':
        await this.BindChart_UserDiscussNum(strIdCurrEduCls, strCanvasNo, strUserIdorCurrEduClsId);
        await this.BindGv_UserDiscussNumTable();
        break;
    }
  }

  //同步总数据统计
  public async btnSynTotalDataStatistics_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    ShowDivInDivObj(objLayOut, 'divLoading');
    const strUserId = userStore.getUserId;
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    try {
      const responseText1 = await gs_TeachingDate_IsExistRecordAsync(
        `idCurrEduCls =${strIdCurrEducls}`,
      );
      const returnBool1 = !!responseText1;
      if (returnBool1 == true) {
        const responseText2 = await gs_TotalDataStatisticsEx_GetTotalStatisticsByTableAsync(
          strIdCurrEducls,
          strUserId,
        );
        const returnBool2 = !!responseText2;
        if (returnBool2 == true) {
          await SysCommentEx_UpdateCommentWeekAsync(strIdCurrEducls, strUserId);
          const returnBool3 = !!responseText2;
          if (returnBool3 == true) {
            const strInfo = `同步数据成功!`;
            //
            //显示信息框
            //message.success(strInfo);
            alert(strInfo);
            HideDivInDivObj(objLayOut, 'divLoading');
          } else {
            const strInfo = `同步数据成功,但同步评论出错!`;
            //
            //显示信息框
            //message.success(strInfo);
            alert(strInfo);
            HideDivInDivObj(objLayOut, 'divLoading');
          }
        } else {
          const strInfo = `同步数据不成功!`;
          //
          //显示信息框
          //message.success(strInfo);
          alert(strInfo);
          HideDivInDivObj(objLayOut, 'divLoading');
        }

        return responseText2; //一定要有一个返回值，否则会出错！
      } else {
        HideDivInDivObj(objLayOut, 'divLoading');
        const strInfo = `当前教学班还没有添加教学班时间，请到教学班维护界面添加教学班时间!`;
        alert(strInfo);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `统计核算异常,${e}.`;
      alert(strMsg);
      HideDivInDivObj(objLayOut, 'divLoading');
    }
  }

  //同步总数据统计
  public async btnSynAnswerCount_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    ShowDivInDivObj(objLayOut, 'divLoading');
    const strUserId = userStore.getUserId;
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    try {
      const responseText1 = await gs_TeachingDate_IsExistRecordAsync(
        `idCurrEduCls =${strIdCurrEducls}`,
      );
      const returnBool1 = !!responseText1;
      if (returnBool1 == true) {
        const responseText2 = await gs_AnswerCountEx_GetAnswerCountByTableAsync(
          strIdCurrEducls,
          strUserId,
        );
        const returnBool2 = !!responseText2;
        if (returnBool2 == true) {
          const strInfo = `同步数据成功!`;
          alert(strInfo);
          HideDivInDivObj(objLayOut, 'divLoading');
        } else {
          const strInfo = `同步数据不成功!`;
          alert(strInfo);
          HideDivInDivObj(objLayOut, 'divLoading');
        }
        return responseText2; //一定要有一个返回值，否则会出错！
      } else {
        HideDivInDivObj(objLayOut, 'divLoading');
        const strInfo = `当前教学班还没有添加教学班时间，请到教学班维护界面添加教学班时间!`;
        alert(strInfo);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `统计核算异常,${e}.`;
      alert(strMsg);
      HideDivInDivObj(objLayOut, 'divLoading');
    }
  }

  /* 用户统计
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_liUserNum_Click)
*/
  public async liUserNum_Click() {
    try {
      const strid_CurrEdu = '';
      if (this.userId_q != '' && this.userId_q != '0') {
        await this.BindGv_UserNum(strid_CurrEdu);

        await this.BindGv_UserNumTable();
      } else {
        message.info('请先选择用户并查询！');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //用户统计列表
  public async BindGv_UserNumTable() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strid_CurrEdu = '';
    const strWhereCond = await this.CombineCondition1(strid_CurrEdu);
    //周合集、观点合集
    let arrvgs_TotalDataStatisticsObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];
    //所有观点详细
    let arrvgs_TotalDetailObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];
    //某一类型观点详细
    let ChildarrvSysCommentObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];
    //获取统计类型数据；
    let gs_TotalDataTypeObjLst: Array<clsgs_TotalDataTypeEN> = [];

    try {
      //获取周和观点数据
      arrvgs_TotalDataStatisticsObjLst = await vgs_TotalDataStatisticsEx_GetWeekNumObjLstAsync(
        strWhereCond,
      );
      console.log('获取周和观点数据成功');

      //获取观点详细数据；
      arrvgs_TotalDetailObjLst = await vgs_TotalDataStatistics_GetObjLstAsync(strWhereCond);
      console.log('获取详细数据成功');

      gs_TotalDataTypeObjLst = await gs_TotalDataType_GetObjLstCache();
      // arrObjLst_Sel = arrObjLst_Sel.filter(x => x.totalDataTypeId != "02");

      let strhtml = '';
      let cateid = 0;
      let cateid_ = 0;
      if (GetInputValueInDivObj(divName, 'hidQueryStata') == '1') {
        $('#tbListUserNum tr').remove();
      } else {
        $('#tbListTeaClassNum tr').remove();
      }

      if (arrvgs_TotalDataStatisticsObjLst.length > 0) {
        //得到数据源循环数据
        for (let i = 0; i < arrvgs_TotalDataStatisticsObjLst.length; i++) {
          cateid++;
          // intJ++;
          const fid = 0;
          //周；
          const strWeek = arrvgs_TotalDataStatisticsObjLst[i].week;
          //周日期范围
          const strWeekTimeFrame = arrvgs_TotalDataStatisticsObjLst[i].weekTimeRange;
          //记录数
          const strNum = arrvgs_TotalDataStatisticsObjLst[i].memo;

          //从详细数据中过滤 通过当前周作为条件；把数据存放到某一个类型观点详细；
          ChildarrvSysCommentObjLst = arrvgs_TotalDetailObjLst.filter((x) => x.week == strWeek);

          strhtml += `<tr cate-id="${cateid}" fid="${fid}">`;
          //周
          strhtml += `<td>${strWeek}</td>`;
          //周日期范围
          strhtml += `<td>${strWeekTimeFrame}</td>`;

          strhtml += `<td><i class="layui-icon x-show" status="true"></i>${strNum}</td>`;

          //结束
          strhtml += '</tr>';

          //父节点转化
          cateid_ = cateid;

          //子数据
          if (ChildarrvSysCommentObjLst.length > 0) {
            //因为有10个数据类型；需要分别判断读取，如果有数据则执行输出，没有则跳过；
            // 01	论文02	论文读写03	论文子观点04	个人观05	专家观点06	主题概念 07	客观事实08	客观数据09	技能10	社会关系
            //循环统计类型；
            for (let k = 0; k < gs_TotalDataTypeObjLst.length; k++) {
              const strTypeId = gs_TotalDataTypeObjLst[k].totalDataTypeId;
              const DetailTypeObjLst = ChildarrvSysCommentObjLst.filter(
                (x) => x.totalDataTypeId == strTypeId,
              );
              //如果大于0 ，说明有此类型数据，需要输出；
              if (DetailTypeObjLst.length > 0) {
                for (let j = 0; j < DetailTypeObjLst.length; j++) {
                  cateid++;
                  strhtml += `<tr cate-id="${cateid}" fid="${cateid_}" style="display:none;">`;
                  //周
                  strhtml += `<td>${strWeek}</td>`;
                  //周日期范围
                  strhtml += `<td>${strWeekTimeFrame}</td>`;
                  strhtml += `<td>${DetailTypeObjLst[j].totalDataTypeName}[${DetailTypeObjLst.length}]</td>`;

                  strhtml += '</tr>';
                  //因为统计一个类型数据量，所以直接break；
                  break;
                }
              }
            }
          }
        }
      }

      //拼接；
      if (GetInputValueInDivObj(divName, 'hidQueryStata') == '1') {
        $('#tbListUserNum').html(strhtml);
      } else {
        $('#tbListTeaClassNum').html(strhtml);
      }
      TotalDataStatisticsEx.vuebtn_Click('tbody', '');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取用户统计数据不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 教学班统计
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_liTeaClassNum_Click)
*/
  public async liTeaClassNum_Click() {
    try {
      const strid_CurrEdu = ''; //其他界面调用共参；
      const strCanvasNo = '0';
      const strUserIdorCurrEduClsId = '';
      await this.BindGv_TeaClassNum(strid_CurrEdu, strCanvasNo, strUserIdorCurrEduClsId);
      await this.BindGv_UserNumTable();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班平均分
  public async TeaClassAverage_Click() {
    try {
      const strIdCurrEduCls = '';
      const strCanvasNo = '0';
      const strUserIdorCurrEduClsId = '';
      await this.BindGv_AVGTeaScore(strIdCurrEduCls, strCanvasNo, strUserIdorCurrEduClsId);
      await this.BindGv_TeaClassAverageTab();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  // //教学班平均分 列表
  public async BindGv_TeaClassAverageTab() {
    const strid_CurrEdu = '';
    const strWhereCond = await this.CombineCondition1(strid_CurrEdu);
    let arrvgs_TotalDataStatisticsObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];
    //所有观点详细
    let arrvgs_TotalDetailObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];
    //某一类型观点详细
    let ChildarrvSysCommentObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];
    //获取统计类型数据；
    let gs_TotalDataTypeObjLst: Array<clsgs_TotalDataTypeEN> = [];

    try {
      arrvgs_TotalDataStatisticsObjLst =
        await vgs_TotalDataStatisticsEx_GetWeekAVGTeaScoreObjLstAsync(strWhereCond);
      console.log('获取统计平均分成功！');

      //获取观点详细数据；
      arrvgs_TotalDetailObjLst = await vgs_TotalDataStatistics_GetObjLstAsync(strWhereCond);
      console.log('获取详细数据成功');

      gs_TotalDataTypeObjLst = await gs_TotalDataType_GetObjLstCache();

      let strhtml = '';
      let cateid = 0;
      let cateid_ = 0;
      $('#tbListClassAverage tr').remove();

      //得到统计平均分 分类数据
      if (arrvgs_TotalDataStatisticsObjLst.length > 0) {
        //得到数据源循环数据
        for (let i = 0; i < arrvgs_TotalDataStatisticsObjLst.length; i++) {
          cateid++;
          // intJ++;
          const fid = 0;
          //周；
          const strWeek = arrvgs_TotalDataStatisticsObjLst[i].week;
          //平均分
          const strScore = arrvgs_TotalDataStatisticsObjLst[i].memo;
          //周日期范围
          const strWeekTimeFrame = arrvgs_TotalDataStatisticsObjLst[i].weekTimeRange;
          strhtml += `<tr cate-id="${cateid}" fid="${fid}">`;
          //周
          strhtml += `<td>${strWeek}</td>`;
          strhtml += `<td>${strWeekTimeFrame}</td>`;
          strhtml += `<td><i class="layui-icon x-show" status="true"></i>${strScore}</td>`;

          //结束
          strhtml += '</tr>';

          //父节点转化
          cateid_ = cateid;
          //如果平均分大于0 则查询子数据
          if (strScore != '0') {
            //从详细数据中过滤 通过当前周作为条件；把数据存放到某一个类型观点详细；
            ChildarrvSysCommentObjLst = arrvgs_TotalDetailObjLst.filter((x) => x.week == strWeek);
            //子数据
            if (ChildarrvSysCommentObjLst.length > 0) {
              //因为有10个数据类型；需要分别判断读取，如果有数据则执行输出，没有则跳过；
              // 01	论文02	论文读写03	论文子观点04	个人观05	专家观点06	主题概念 07	客观事实08	客观数据09	技能10	社会关系
              //循环统计类型；
              for (let k = 0; k < gs_TotalDataTypeObjLst.length; k++) {
                const strTypeId = gs_TotalDataTypeObjLst[k].totalDataTypeId;
                const strTypeName = gs_TotalDataTypeObjLst[k].totalDataTypeName;
                const DetailTypeObjLst = ChildarrvSysCommentObjLst.filter(
                  (x) => x.totalDataTypeId == strTypeId,
                );
                //如果大于0 ，说明有此类型数据，需要输出；
                if (DetailTypeObjLst.length > 0) {
                  //对象列表某一列求和
                  //strIdCurrEduclsScoreSum = DetailTypeObjLst.reduce((p, e) => p + e.teaScore, 0);
                  //获取只打分的观点数
                  const DetailNumObjLst = DetailTypeObjLst.filter((x) => x.teaScore != 0);
                  //for (let j = 0; j < DetailTypeObjLst.length; j++) {
                  cateid++;
                  strhtml += `<tr cate-id="${cateid}" fid="${cateid_}" style="display:none;">`;
                  //周
                  strhtml += `<td>${strWeek}</td>`;
                  strhtml += `<td>${strWeekTimeFrame}</td>`;
                  strhtml += `<td>${strTypeName}[${DetailNumObjLst.length}/${DetailTypeObjLst.length}]</td>`;

                  strhtml += '</tr>';
                  //因为只需要一个统计类型；
                  //    break;
                  //}
                }
              }
            }
          }
        }
      }
      $('#tbListClassAverage').html(strhtml);

      $('#Canvas2').removeClass('');
      TotalDataStatisticsEx.vuebtn_Click('tbody', '');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 总数统计
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async liTotalDataNum_Click() {
    try {
      const strIdCurrEduCls = '';
      const strCanvasNo = '0';
      const strUserIdorCurrEduClsId = '';
      await this.BindGv_TotalDataNum(strIdCurrEduCls, strCanvasNo, strUserIdorCurrEduClsId);
      await this.BindGv_TotalDataNumTable();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //所有学生教学班周统计；
  public async BindGv_TotalDataNumTable() {
    const strid_CurrEdu = '';
    const strWhereCond = await this.CombineCondition1(strid_CurrEdu);
    let arrvgs_TotalDataStatisticsObjLst3: Array<clsvgs_TotalDataStatisticsEN> = [];
    //所有观点详细
    let arrvgs_TotalDetailObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];
    //临时
    let arrvgs_TotalDataStatisticsObjLst4: Array<clsvgs_TotalDataStatisticsEN> = [];
    //获取统计类型数据；
    let gs_TotalDataTypeObjLst: Array<clsgs_TotalDataTypeEN> = [];

    try {
      //获取观点详细数据；
      arrvgs_TotalDetailObjLst = await vgs_TotalDataStatistics_GetObjLstAsync(strWhereCond);
      console.log('获取详细数据成功');

      //用户、周
      await vgs_TotalDataStatisticsEx_GetUser_WeekNumObjLstAsync(strWhereCond).then((jsonData) => {
        arrvgs_TotalDataStatisticsObjLst3 = <Array<clsvgs_TotalDataStatisticsEN>>jsonData;
        console.log('3-3');
      });

      gs_TotalDataTypeObjLst = await gs_TotalDataType_GetObjLstCache();

      const strWhere_User = '1=1';

      let strhtml = '';
      let cateid = 0;
      let cateid_ = 0;
      $('#tbListTotalDataNum tr').remove();
      //首先得到用户 周 观点统计
      if (arrvgs_TotalDataStatisticsObjLst3.length > 0) {
        //得到数据源循环数据
        for (let i = 0; i < arrvgs_TotalDataStatisticsObjLst3.length; i++) {
          cateid++;
          // intJ++;
          const fid = 0;
          //用户
          const strUserId = arrvgs_TotalDataStatisticsObjLst3[i].dataUser;
          //周；
          const strWeek = arrvgs_TotalDataStatisticsObjLst3[i].week;
          //记录数
          const strNum = arrvgs_TotalDataStatisticsObjLst3[i].memo;
          //用户名
          const strUserName = await vQxUsersSimStore.getUserName(strUserId);

          //周日期范围
          const strWeekTimeFrame = arrvgs_TotalDataStatisticsObjLst3[i].weekTimeRange;

          strhtml += `<tr cate-id="${cateid}" fid="${fid}">`;
          //周
          strhtml += `<td>${strWeek}</td>`;
          strhtml += `<td>${strWeekTimeFrame}</td>`;
          if (strUserName != '') {
            //用户
            strhtml += `<td>${strUserName}</td>`;
          } else {
            //用户
            strhtml += '<td></td>';
          }
          strhtml += `<td><i class="layui-icon x-show" status="true"></i>${strNum}</td>`;

          //结束
          strhtml += '</tr>';

          //父节点转化
          cateid_ = cateid;
          //先过滤当前循环用户的数据，再过滤当前数据周的数据 然后数据输出；
          arrvgs_TotalDataStatisticsObjLst4 = arrvgs_TotalDetailObjLst.filter(
            (x) => x.dataUser == strUserId && x.week == strWeek,
          );
          //子数据
          if (arrvgs_TotalDataStatisticsObjLst4.length > 0) {
            //因为有10个数据类型；需要分别判断读取，如果有数据则执行输出，没有则跳过；
            // 01	论文02	论文读写03	论文子观点04	个人观05	专家观点06	主题概念 07	客观事实08	客观数据09	技能10	社会关系
            //循环统计类型；
            for (let k = 0; k < gs_TotalDataTypeObjLst.length; k++) {
              const strTypeId = gs_TotalDataTypeObjLst[k].totalDataTypeId;
              const DetailTypeObjLst = arrvgs_TotalDataStatisticsObjLst4.filter(
                (x) => x.totalDataTypeId == strTypeId,
              );
              //如果大于0 ，说明有此类型数据，需要输出；
              if (DetailTypeObjLst.length > 0) {
                for (let j = 0; j < DetailTypeObjLst.length; j++) {
                  cateid++;
                  strhtml += `<tr cate-id="${cateid}" fid="${cateid_}" style="display:none;">`;
                  //周
                  strhtml += `<td>${strWeek}</td>`;
                  strhtml += `<td>${strWeekTimeFrame}</td>`;
                  //用户
                  if (strUserName != '') {
                    //用户
                    strhtml += `<td>${strUserName}</td>`;
                  } else {
                    //用户
                    strhtml += '<td></td>';
                  }
                  strhtml += `<td>${DetailTypeObjLst[j].totalDataTypeName}[${DetailTypeObjLst.length}]</td>`;

                  strhtml += '</tr>';
                  //因为统计一个类型数据量，所以直接break；
                  break;
                }
              }
            }
          }
        }
      }
      $('#tbListTotalDataNum').html(strhtml);
      TotalDataStatisticsEx.vuebtn_Click('tbody', '');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public CombineCondition1(strid_CurrEdu: string): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1';
    // strIdCurrEducls strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;

    let strIdCurrEduCls = '';
    if (strid_CurrEdu == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;

      //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
      try {
        if (this.StartDate_q != '') {
          strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_DataAddDate} >= '${this.StartDate_q}'`;
        }
        if (this.EndDate_q != '') {
          strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_DataAddDate} <= '${this.EndDate_q}'`;
        }
        if (this.TotalDataTypeId_q != '0' && this.TotalDataTypeId_q != '') {
          strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_TotalDataTypeId} = '${this.TotalDataTypeId_q}'`;
        }
        //管理员
        //if ($("#hidQueryStata").val() == "1") {
        // const hidQueryStata = GetInputValueInDivObj(divName, 'hidQueryStata');
        const hidQueryStata = this.queryStata;
        if (hidQueryStata == '3' || hidQueryStata == '7') {
          if (this.userId_q != '' && this.userId_q != '0') {
            strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_DataUser} = '${this.userId_q}'`;
          }
          if (this.TopicId_q != '0' && this.TopicId_q != '') {
            strWhereCond += ` And ${clsgs_AnswerCountEN.con_TopicId} = '${this.TopicId_q}'`;
          }
          if (this.isRecommend == true) {
            strWhereCond += ` And isRecommend=1`;
          }
        }
        //if ($("#hidRoleId").val() == "00620001") { }
        //教师
        //else if ($("#hidRoleId").val() == "00620002") {
        //    $("#td_UserId").hide();
        //    strWhereCond += " and dataUser='" + userStore.getUserId + "'";

        //}
        ////学生
        //else {
        //    $("#td_UserId").hide();
        //    strWhereCond += " and dataUser='" + userStore.getUserId + "'";

        //}
      } catch (objException) {
        const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
        throw strMsg;
      }
    } else {
      strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
    }

    //例如 1 = 1 && userName = '张三'
    strWhereCond += ` and idCurrEduCls='${strIdCurrEduCls}'`;

    //通过教学班得到教学班时间范围；、

    //if (this.EndDate_q == "") {
    //    if ($("#hidQueryStata").val() == "2" || $("#hidQueryStata").val() == "3" || $("#hidQueryStata").val() == "4") {
    //        if ($("#hidStartDate").val() != "" && $("#hiEndDate").val() != "") {
    //            strIdCurrEduclsstartDate = $("#hidStartDate").val();
    //            strIdCurrEduclsendDate = $("#hiEndDate").val();
    //            strWhereCond += " And dataAddDate >= '" + startDate + "' And dataAddDate <= '" + endDate + "'";
    //        }
    //    }
    //}

    return strWhereCond;
  }

  public CombineConditionObj1(strid_CurrEdu: string): clsvgs_TotalDataStatisticsEN {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    const objvgs_TotalDataStatistics_Cond: clsvgs_TotalDataStatisticsEN =
      new clsvgs_TotalDataStatisticsEN();
    let strIdCurrEduCls = '';
    if (strid_CurrEdu == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      try {
        if (this.StartDate_q != '') {
          // strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_DataAddDate} >= '${this.StartDate_q}'`;

          objvgs_TotalDataStatistics_Cond.SetCondFldValue(
            clsvgs_TotalDataStatisticsEN.con_DataAddDate,
            this.StartDate_q,
            '>=',
          );
        }
        if (this.EndDate_q != '') {
          // strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_DataAddDate} <= '${this.EndDate_q}'`;
          objvgs_TotalDataStatistics_Cond.SetCondFldValue(
            clsvgs_TotalDataStatisticsEN.con_DataAddDate,
            this.EndDate_q,
            '<=',
          );
        }
        if (this.TotalDataTypeId_q != '0' && this.TotalDataTypeId_q != '') {
          // strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_TotalDataTypeId} = '${this.TotalDataTypeId_q}'`;
          objvgs_TotalDataStatistics_Cond.SetCondFldValue(
            clsvgs_TotalDataStatisticsEN.con_DataAddDate,
            this.EndDate_q,
            '<=',
          );
        }
        //管理员
        //if ($("#hidQueryStata").val() == "1") {
        if (
          GetInputValueInDivObj(divName, 'hidQueryStata') == '3' ||
          $('#hidQueryStata').val() == '7'
        ) {
          if (this.userId_q != '' && this.userId_q != '0') {
            // strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_DataUser} = '${this.userId_q}'`;
            objvgs_TotalDataStatistics_Cond.SetCondFldValue(
              clsvgs_TotalDataStatisticsEN.con_DataAddDate,
              this.EndDate_q,
              '<=',
            );
          }
          if (this.TopicId_q != '0' && this.TopicId_q != '') {
            //  strWhereCond += ` And ${clsgs_AnswerCountEN.con_TopicId} = '${this.TopicId_q}'`;
            objvgs_TotalDataStatistics_Cond.SetCondFldValue(
              clsvgs_TotalDataStatisticsEN.con_DataAddDate,
              this.EndDate_q,
              '<=',
            );
          }
        }
      } catch (objException) {
        const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
        throw strMsg;
      }
    } else {
      strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
    }

    objvgs_TotalDataStatistics_Cond.SetCondFldValue(
      clsvgs_TotalDataStatisticsEN.con_IdCurrEduCls,
      strIdCurrEduCls,
      '=',
    );

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    return objvgs_TotalDataStatistics_Cond;
  }

  public CombineCondition2(strid_CurrEdu: string): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    let strIdCurrEduCls = '';
    if (strid_CurrEdu == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      try {
        if (this.userId_q != '' && this.userId_q != '0') {
          strWhereCond += ` And ${clsvCurrEduClsStuEN.con_StuId} = '${this.userId_q}'`;
        }
      } catch (objException) {
        const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
        throw strMsg;
      }
    } else {
      strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
    }
    strWhereCond += ` and idCurrEduCls='${strIdCurrEduCls}'`;
    strWhereCond += ' order by stuName Asc';
    return strWhereCond;
  }
  public CombineConditionObj2(strid_CurrEdu: string): clsvCurrEduClsStuEN {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const objvCurrEduClsStu_Cond: clsvCurrEduClsStuEN = new clsvCurrEduClsStuEN();

    let strIdCurrEduCls = '';
    if (strid_CurrEdu == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      try {
        if (this.userId_q != '' && this.userId_q != '0') {
          objvCurrEduClsStu_Cond.SetCondFldValue(clsvCurrEduClsStuEN.con_StuId, this.userId_q, '=');
        }
      } catch (objException) {
        const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
        throw strMsg;
      }
    } else {
      strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
    }

    objvCurrEduClsStu_Cond.SetCondFldValue(
      clsvCurrEduClsStuEN.con_IdCurrEduCls,
      strIdCurrEduCls,
      '=',
    );

    //  strWhereCond += " and idCurrEduCls='" + strIdCurrEduCls + "'";
    //strWhereCond += ' order by stuName Asc';
    return objvCurrEduClsStu_Cond;
  }

  public CombineCondition3(strid_CurrEdu: string): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1';
    let strIdCurrEduCls = '';
    if (strid_CurrEdu == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;

      //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
      try {
        if (this.StartDate_q != '') {
          strWhereCond += ` And ${clsSysCommentEN.con_UpdDate} >= '${this.StartDate_q}'`;
        }
        if (this.EndDate_q != '') {
          strWhereCond += ` And ${clsSysCommentEN.con_UpdDate} <= '${this.EndDate_q}'`;
        }
        if (this.userId_q != '' && this.userId_q != '0') {
          strWhereCond += ` And ${clsSysCommentEN.con_UpdUser} = '${this.userId_q}'`;
        }
      } catch (objException) {
        const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
        throw strMsg;
      }
    } else {
      strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
    }
    strWhereCond += ` and idCurrEduCls='${strIdCurrEduCls}'`;

    return strWhereCond;
  }
  public CombineConditionObj3(strid_CurrEdu: string): clsSysCommentEN {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,

    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    let strIdCurrEduCls = '';
    if (strid_CurrEdu == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    } else {
      strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
    }
    const objSysComment_Cond: clsSysCommentEN = new clsSysCommentEN();
    objSysComment_Cond.SetCondFldValue(clsSysCommentEN.con_IdCurrEduCls, strIdCurrEduCls, '=');

    //例如 1 = 1 && userName = '张三'
    //  strWhereCond: string = " 1 = 1 and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      // if (this.StartDate_q != '') {
      //   //    strWhereCond += ` And ${clsSysCommentEN.con_UpdDate} >= '${this.StartDate_q}'`;
      //   objSysComment_Cond.SetCondFldValue(clsSysCommentEN.con_UpdDate, this.StartDate_q, '>=');
      // }
      // if (this.EndDate_q != '') {
      //   //    strWhereCond += ` And ${clsSysCommentEN.con_UpdDate} <= '${this.EndDate_q}'`;
      //   objSysComment_Cond.SetCondFldValue(clsSysCommentEN.con_UpdDate, this.EndDate_q, '<=');
      // }
      // if (this.userId_q != '' && this.userId_q != '0') {
      //   //   strWhereCond += ` And ${clsSysCommentEN.con_UpdUser} = '${this.userId_q}'`;
      //   objSysComment_Cond.SetCondFldValue(clsSysCommentEN.con_UpdUser, this.userId_q, '=');
      // }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objSysComment_Cond;
  }

  //绑定学生数据统计
  public async BindGv_UserNum(strid_CurrEdu: string) {
    const strWhereCond = await this.CombineCondition1(strid_CurrEdu);
    let arrvgs_TotalDataStatisticsObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];
    // strIdCurrEduclsChildarrvSysCommentObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];

    try {
      arrvgs_TotalDataStatisticsObjLst = await vgs_TotalDataStatisticsEx_GetWeekNumObjLstAsync(
        strWhereCond,
      );
      console.log('1-0');

      let strIdCurrEduCls = '';
      if (strid_CurrEdu == '') {
        strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      } else {
        strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
      }
      const WeekNum = await this.GetTeachingDateWeek(strIdCurrEduCls);

      if (WeekNum != 0) {
        if (arrvgs_TotalDataStatisticsObjLst.length > 0) {
          let strWeek = '[';
          let strNum = '[';

          //for (let i = 0; i < arrvgs_TotalDataStatisticsObjLst.length; i++) {
          //    strWeek += '"第' + arrvgs_TotalDataStatisticsObjLst[i].week + '周",';
          //    strNum += arrvgs_TotalDataStatisticsObjLst[i].memo + ',';
          //}
          for (let i = 1; i <= WeekNum; i++) {
            //判断是否存在对等的周数据 ，存在则从列表中取，否则为0；
            //从详细数据中过滤 通过当前周作为条件；把数据存放到某一个类型观点详细；
            const ChildarrvSysCommentObjLst = arrvgs_TotalDataStatisticsObjLst.find(
              (x) => x.week == i,
            );
            if (ChildarrvSysCommentObjLst == null) {
              strWeek += `"第${i}周",`;
              strNum += '0' + ',';
            } else {
              strWeek += `"第${ChildarrvSysCommentObjLst.week}周",`;
              strNum += `${ChildarrvSysCommentObjLst.memo},`;
            }
          }
          strWeek = strWeek.substring(0, strWeek.length - 1);
          strNum = strNum.substring(0, strNum.length - 1);
          strWeek += ']';
          strNum += ']';
          const strLabelsJson = eval(strWeek);
          const strDatasetsJson = eval(strNum);
          TotalDataStatisticsEx.Canvas1(strLabelsJson, strDatasetsJson);
        } else {
          const strMsg = `当前无数据,请选择其他条件或切换教学班`;
          console.log(strMsg);
        }
      } else {
        const strMsg = `当前无数据,请选择其他条件或切换教学班`;
        console.log(strMsg);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //获取教学班周教师打分平均分
  public async BindGv_AVGTeaScore(
    strid_CurrEdu: string,
    strCanvasNo: string,
    strUserIdorCurrEduClsId: string,
  ) {
    const strWhereCond = await this.CombineCondition1(strid_CurrEdu);
    let arrvgs_TotalDataStatisticsObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];
    let strIdCurrEduCls = '';
    if (strid_CurrEdu == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    } else {
      strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
    }
    //const objvgs_TotalDataStatistics_Cond = this.CombineConditionObj1(strIdCurrEduCls);
    //strWhereCond = JSON.stringify(objvgs_TotalDataStatistics_Sim);

    try {
      //const responseText = await vgs_TotalDataStatisticsEx_GetWeekAVGTeaScoreSubObjLst_Cache(objvgs_TotalDataStatistics_Cond, strIdCurrEduCls).then((jsonData) => {
      arrvgs_TotalDataStatisticsObjLst =
        await vgs_TotalDataStatisticsEx_GetWeekAVGTeaScoreObjLstAsync(strWhereCond);
      console.log('1-0');

      //教学班
      //strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      //strIdCurrEduclsstrWhereEduCls = " 1 = 1 And idCurrEduCls = '" + strIdCurrEducls + "'";
      //const responseText1 = await gs_TeachingDate_GetFirstObjAsync(strWhereEduCls);
      //const objgs_TeachingDateEN: clsgs_TeachingDateEN = <clsgs_TeachingDateEN>responseText1;
      //if (objgs_TeachingDateEN != null) {
      //    strIdCurrEduclseventStartTime = new Date(objgs_TeachingDateEN.startDate);
      //    strIdCurrEduclseventEndTime = new Date(objgs_TeachingDateEN.endDate);
      //    strIdCurrEduclsduration = eventEndTime.valueOf() - eventStartTime.valueOf();

      //    //计算出相差天数
      //    strIdCurrEduclsdays = Math.floor(duration / (24 * 3600 * 1000));
      //    //天数除以7得到周；
      //    strIdCurrEduclsWeekNum = Math.ceil(days / 7);

      const WeekNum = await this.GetTeachingDateWeek(strIdCurrEduCls);

      if (WeekNum != 0) {
        if (arrvgs_TotalDataStatisticsObjLst.length > 0) {
          //strcolor = this.getRandomColor();
          let strWeek = '[';
          let strNum = '[';
          let strColor = '[';
          for (let i = 0; i < arrvgs_TotalDataStatisticsObjLst.length; i++) {
            strWeek += `"第${arrvgs_TotalDataStatisticsObjLst[i].week}周",`;
            strNum += `${arrvgs_TotalDataStatisticsObjLst[i].memo},`;
            strColor += `"${this.getRandomColor()}",`;
          }

          strWeek = strWeek.substring(0, strWeek.length - 1);
          strNum = strNum.substring(0, strNum.length - 1);
          strColor = strColor.substring(0, strColor.length - 1);
          strWeek += ']';
          strNum += ']';
          strColor += ']';

          const strLabelsJson = eval(strWeek);
          const strDatasetsJson = eval(strNum);
          const strColorJson = eval(strColor);
          TotalDataStatisticsEx.Canvas4(
            strLabelsJson,
            strDatasetsJson,
            strColorJson,
            strCanvasNo,
            strUserIdorCurrEduClsId,
          );
        } else {
          const strMsg = `当前无数据,请选择其他条件或切换教学班`;
          console.log(strMsg);
        }
      } else {
        const strMsg = `当前无数据,请选择其他条件或切换教学班`;
        console.log(strMsg);
      }
      //}
      //else {
      //    strIdCurrEduclsstrMsg: string = `当前教学班没有设置时间范围`;
      //console.error(strMsg);
      //    alert(strMsg);
      //}
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //绑定教学班统计
  public async BindGv_TeaClassNum(
    strid_CurrEdu: string,
    strCanvasNo: string,
    strUserIdorCurrEduClsId: string,
  ) {
    const strWhereCond = await this.CombineCondition1(strid_CurrEdu);
    let strIdCurrEduCls = '';
    if (strid_CurrEdu == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    } else {
      strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
    }

    //const objvgs_TotalDataStatistics_Cond = this.CombineConditionObj1(strIdCurrEduCls);
    //strWhereCond = JSON.stringify(objvgs_TotalDataStatistics_Sim);

    let arrvgs_TotalDataStatisticsObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];

    try {
      //const responseText = await vgs_TotalDataStatisticsEx_GetWeekNumSubObjLst_Cache(objvgs_TotalDataStatistics_Cond, strIdCurrEduCls).then((jsonData) => {
      arrvgs_TotalDataStatisticsObjLst = await vgs_TotalDataStatisticsEx_GetWeekNumObjLstAsync(
        strWhereCond,
      );
      console.log('1-0');

      const WeekNum = await this.GetTeachingDateWeek(strIdCurrEduCls);

      if (WeekNum != 0) {
        if (arrvgs_TotalDataStatisticsObjLst.length > 0) {
          //strcolor = this.getRandomColor();
          let strWeek = '[';
          let strNum = '[';
          let strColor = '[';

          for (let i = 1; i <= WeekNum; i++) {
            //判断是否存在对等的周数据 ，存在则从列表中取，否则为0；
            //从详细数据中过滤 通过当前周作为条件；把数据存放到某一个类型观点详细；
            const ChildarrvSysCommentObjLst = arrvgs_TotalDataStatisticsObjLst.find(
              (x) => x.week == i,
            );
            if (ChildarrvSysCommentObjLst == null) {
              strWeek += `"第${i}周",`;
              strNum += '0' + ',';
              strColor += `"${this.getRandomColor()}",`;
            } else {
              strWeek += `"第${ChildarrvSysCommentObjLst.week}周",`;
              strNum += `${ChildarrvSysCommentObjLst.memo},`;
              strColor += `"${this.getRandomColor()}",`;
            }
          }

          strWeek = strWeek.substring(0, strWeek.length - 1);
          strNum = strNum.substring(0, strNum.length - 1);
          strColor = strColor.substring(0, strColor.length - 1);
          strWeek += ']';
          strNum += ']';
          strColor += ']';

          const strLabelsJson = eval(strWeek);
          const strDatasetsJson = eval(strNum);
          const strColorJson = eval(strColor);
          TotalDataStatisticsEx.Canvas2(
            strLabelsJson,
            strDatasetsJson,
            strColorJson,
            strCanvasNo,
            strUserIdorCurrEduClsId,
          );
        } else {
          const strMsg = `当前无数据,请选择其他条件或切换教学班`;
          console.error(strMsg);
        }
      } else {
        const strMsg = `当前教学班没有设置时间范围`;
        console.error(strMsg);
        alert(strMsg);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //绑定所有学生数据统计

  public async BindGv_TotalDataNum(
    strid_CurrEdu: string,
    strCanvasNo: string,
    strUserIdorCurrEduClsId: string,
  ) {
    const strWhereCond = await this.CombineCondition1(strid_CurrEdu);
    let arrvgs_TotalDataStatisticsObjLst1: Array<clsvgs_TotalDataStatisticsEN> = [];
    let arrvgs_TotalDataStatisticsObjLst3: Array<clsvgs_TotalDataStatisticsEN> = [];

    //临时
    let arrvgs_TotalDataStatisticsObjLst4: Array<clsvgs_TotalDataStatisticsEN> = [];

    // let strIdCurrEduCls = '';
    // if (strid_CurrEdu == '') {
    //   strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    // } else {
    //   strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
    // }

    try {
      //用户
      //const responseText1 = await vgs_TotalDataStatisticsEx_GetUserNumSubObjLst_Cache(objvgs_TotalDataStatistics_Cond, strIdCurrEduCls).then((jsonData) => {
      arrvgs_TotalDataStatisticsObjLst1 = await vgs_TotalDataStatisticsEx_GetUserNumObjLstAsync(
        strWhereCond,
      );
      console.log('3-1');
      if (arrvgs_TotalDataStatisticsObjLst1.length == 0) {
        const strMsg = `当前无数据,请选择其他条件或切换教学班`;
        console.error(strMsg);
        return;
      }
      //周
      //const responseText2 = await vgs_TotalDataStatisticsEx_GetWeekNumObjLstAsync(strWhereCond).then((jsonData) => {
      //    arrvgs_TotalDataStatisticsObjLst2 = <Array<clsvgs_TotalDataStatisticsEN>>jsonData;
      //    console.log("3-2");
      //});

      //用户、周
      // const responseText3 = await vgs_TotalDataStatisticsEx_GetUser_WeekNumSubObjLst_Cache(objvgs_TotalDataStatistics_Cond, strIdCurrEduCls).then((jsonData) => {
      arrvgs_TotalDataStatisticsObjLst3 =
        await vgs_TotalDataStatisticsEx_GetUser_WeekNumObjLstAsync(strWhereCond);
      console.log('3-3');

      //教学班
      //strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      //strIdCurrEduclsstrWhereEduCls = " 1 = 1 And idCurrEduCls = '" + strIdCurrEducls + "'";
      //const responseText5 = await gs_TeachingDate_GetFirstObjAsync(strWhereEduCls);
      //const objgs_TeachingDateEN: clsgs_TeachingDateEN = <clsgs_TeachingDateEN>responseText5;

      //if (objgs_TeachingDateEN != null) {
      //    strIdCurrEduclseventStartTime = new Date(objgs_TeachingDateEN.startDate);
      //    strIdCurrEduclseventEndTime = new Date(objgs_TeachingDateEN.endDate);
      //    strIdCurrEduclsduration = eventEndTime.valueOf() - eventStartTime.valueOf();

      //    //计算出相差天数
      //    strIdCurrEduclsdays = Math.floor(duration / (24 * 3600 * 1000));
      //    //天数除以7得到周；
      //    strIdCurrEduclsWeekNum = Math.ceil(days / 7);

      let strIdCurrEduCls = '';
      if (strid_CurrEdu == '') {
        strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      } else {
        strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
      }
      const WeekNum = await this.GetTeachingDateWeek(strIdCurrEduCls);

      if (WeekNum == 0) {
        const strMsg = `当前教学班没有设置时间范围`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }

      /*********************************周列表*********************************/
      let strWeek = '[';
      //for (let j = 0; j < arrvgs_TotalDataStatisticsObjLst2.length; j++) {
      //    strWeek += '"第' + arrvgs_TotalDataStatisticsObjLst2[j].week + '周",';

      //}
      for (let j = 1; j <= WeekNum; j++) {
        //判断是否存在对等的周数据 ，存在则从列表中取，否则为0；
        //从详细数据中过滤 通过当前周作为条件；把数据存放到某一个类型观点详细；
        //strIdCurrEduclsChildarrvSysCommentObjLst = arrvgs_TotalDataStatisticsObjLst2.find(x => x.week == i);
        //if (ChildarrvSysCommentObjLst == null) {
        strWeek += `"第${j}周",`;

        //}
        //else {
        //    strWeek += '"第' + ChildarrvSysCommentObjLst.week + '周",';
        //}
      }

      strWeek = strWeek.substring(0, strWeek.length - 1);
      strWeek += ']';

      const strLabelsJson = eval(strWeek);

      /******************************************************************/

      //strIdCurrEduclsspanUserName1 = '<span style="font-weight: 500;"><i class="fa fa-square" style="color:'
      //strIdCurrEduclsspanUserName2 = ';font-size: 20px; padding-right: 5px; vertical-align: middle; margin-top: -3px;"></i>'
      //strIdCurrEduclsspanUserName3 = '</span>'
      //strIdCurrEduclsstrHtml = "";
      let strNum = '[';
      for (let i = 0; i < arrvgs_TotalDataStatisticsObjLst1.length; i++) {
        //获取色码
        const strcolor = this.getRandomColor();

        const strUserName = await vQxUsersSimStore.getUserName(
          arrvgs_TotalDataStatisticsObjLst1[i].dataUser,
        );
        if (strUserName != '') {
          //strHtml += spanUserName1 + strcolor + spanUserName2 + strUserName + spanUserName3;

          //strNum += "{ label: \"" + strUserName + "\",fillColor: \"rgba(220,220,220, 0.01)\",strokeColor: \"" + strcolor + "\",pointColor: \"" + strcolor + "\",pointStrokeColor: \"#fff\",pointHighlightFill: \"#fff\",pointHighlightStroke: \"" + strcolor + "\",data: [";
          strNum += `{ label: "${strUserName}",backgroundColor: "${strcolor}",borderColor: "${strcolor}",fill: false,data: [`;
          arrvgs_TotalDataStatisticsObjLst4 = arrvgs_TotalDataStatisticsObjLst3.filter(
            (x) => x.dataUser == arrvgs_TotalDataStatisticsObjLst1[i].dataUser,
          );

          //for (let j = 0; j < arrvgs_TotalDataStatisticsObjLst2.length; j++) {
          for (let j = 1; j <= WeekNum; j++) {
            if (arrvgs_TotalDataStatisticsObjLst4.length > 0) {
              //objWeek = arrvgs_TotalDataStatisticsObjLst4.find(x => x.week == arrvgs_TotalDataStatisticsObjLst2[j].week);
              const objWeek = arrvgs_TotalDataStatisticsObjLst4.find((x) => x.week == j);
              if (objWeek != null) {
                strNum += `${objWeek.memo},`;
              } else {
                strNum += '0,';
              }
            } else {
              strNum += '0,';
            }
          }
          strNum = strNum.substring(0, strNum.length - 1);
          strNum += ']},';
        }
      }

      strNum = strNum.substring(0, strNum.length - 1);
      strNum += ']';

      const strDatasetsJson = eval(strNum);

      TotalDataStatisticsEx.Canvas3(
        strLabelsJson,
        strDatasetsJson,
        strCanvasNo,
        strUserIdorCurrEduClsId,
      );

      //$("#divUserLst").html(strHtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //绑定教学班周评论统计
  public async BindChart_TeaClassComment(
    strid_CurrEdu: string,
    strCanvasNo: string,
    strUserIdorCurrEduClsId: string,
  ) {
    //strWhereCond = await this.CombineCondition3();

    const objclsSysComment_Cond = this.CombineConditionObj3(strid_CurrEdu);
    // const strWhereCond = JSON.stringify(objclsSysComment_Cond);

    let arrSysCommentObjLst0: Array<clsSysCommentEN> = [];
    let arrSysCommentObjLst: Array<clsSysCommentEN> = [];
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    let strIdCurrEduCls = '';
    if (strid_CurrEdu == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    } else {
      strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
    }

    try {
      await SysComment_GetSubObjLstCache(objclsSysComment_Cond, strIdCurrEduCls).then(
        (jsonData) => {
          //const responseText = await SysComment_GetObjLstAsync(strWhereCond).then((jsonData) => {
          arrSysCommentObjLst0 = <Array<clsSysCommentEN>>jsonData;
          console.log('5-0');
        },
      );
      //教学班
      //strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;

      //strIdCurrEduclsstrWhereEduCls = " 1 = 1 And idCurrEduCls = '" + strIdCurrEducls + "'";

      //const responseText1 = await gs_TeachingDate_GetFirstObjAsync(strWhereEduCls);
      //const objgs_TeachingDateEN: clsgs_TeachingDateEN = <clsgs_TeachingDateEN>responseText1;
      //if (objgs_TeachingDateEN != null) {
      //strIdCurrEduclseventStartTime = new Date(objgs_TeachingDateEN.startDate);
      //strIdCurrEduclseventEndTime = new Date(objgs_TeachingDateEN.endDate);
      //strIdCurrEduclsduration = eventEndTime.valueOf() - eventStartTime.valueOf();

      ////计算出相差天数
      //strIdCurrEduclsdays = Math.floor(duration / (24 * 3600 * 1000));
      ////天数除以7得到周；
      //strIdCurrEduclsWeekNum = Math.ceil(days / 7);

      const WeekNum = await this.GetTeachingDateWeek(strIdCurrEduCls);

      if (WeekNum != 0) {
        if (arrSysCommentObjLst0.length > 0) {
          let strWeek = '[';
          let strNum = '[';
          let strColor = '[';

          for (let i = 1; i <= WeekNum; i++) {
            //判断是否存在对等的周数据 ，存在则从列表中取，否则为0；
            //从详细数据中过滤 通过当前周作为条件；把数据存放到某一个类型观点详细；
            arrSysCommentObjLst = arrSysCommentObjLst0.filter((x) => x.week == i);
            strWeek += `"第${i}周",`;
            strNum += `${arrSysCommentObjLst.length},`;
            strColor += `"${this.getRandomColor()}",`;
          }

          strWeek = strWeek.substring(0, strWeek.length - 1);
          strNum = strNum.substring(0, strNum.length - 1);
          strColor = strColor.substring(0, strColor.length - 1);
          strWeek += ']';
          strNum += ']';
          strColor += ']';

          const strLabelsJson = eval(strWeek);
          const strDatasetsJson = eval(strNum);
          const strColorJson = eval(strColor);
          TotalDataStatisticsEx.Canvas5(
            strLabelsJson,
            strDatasetsJson,
            strColorJson,
            strCanvasNo,
            strUserIdorCurrEduClsId,
          );
        } else {
          const strMsg = `当前无数据,请选择其他条件或切换教学班`;
          console.log(strMsg);
        }
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //绑定当前教学班用户周期评论数据
  public async BindChart_UserCommentNum(
    strid_CurrEdu: string,
    strCanvasNo: string,
    strUserIdorCurrEduClsId: string,
  ) {
    //strWhereCond = await this.CombineCondition3(strid_CurrEdu);

    const objclsSysComment_Cond = this.CombineConditionObj3(strid_CurrEdu);
    // let strWhereCond = JSON.stringify(objclsSysComment_Cond);

    // strWhereCond2 = this.CombineCondition2(strid_CurrEdu);
    const objclsvCurrEduClsStu_Cond = this.CombineConditionObj2(strid_CurrEdu);
    // strWhereCond = JSON.stringify(objclsvCurrEduClsStu_Cond);

    let arrSysCommentObjLst0: Array<clsSysCommentEN> = [];
    let arrSysCommentObjLst1: Array<clsSysCommentEN> = [];
    let arrSysCommentObjLst2: Array<clsSysCommentEN> = [];

    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    let strIdCurrEduCls = '';
    if (strid_CurrEdu == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    } else {
      strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
    }

    try {
      //strWhereCond2 = " idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "' order by stuName Asc";
      const arrCurrEduClsUserObjLst: Array<clsvCurrEduClsStuEN> =
        await vCurrEduClsStu_GetSubObjLstCache(objclsvCurrEduClsStu_Cond, strIdCurrEduCls);
      //strIdCurrEduclsarrCurrEduClsUserObjLst: Array<clsvCurrEduClsStuEN> = await vCurrEduClsStu_GetObjLstAsync(strWhereCond2);
      console.log('6-1');

      console.log('6-2');
      await SysComment_GetSubObjLstCache(objclsSysComment_Cond, strIdCurrEduCls).then(
        (jsonData) => {
          //const responseText = await SysComment_GetObjLstAsync(strWhereCond).then((jsonData) => {
          arrSysCommentObjLst0 = <Array<clsSysCommentEN>>jsonData;
          console.log('6-3');
        },
      );
      //strIdCurrEduCls: string = "";
      //if (strid_CurrEdu == "") {
      //    strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      //}
      //else {
      //    strIdCurrEduCls = strid_CurrEdu;//传递过来教学班参数；
      //}

      const WeekNum = await this.GetTeachingDateWeek(strIdCurrEduCls);

      if (WeekNum != 0) {
        /*********************************周列表*********************************/

        let strWeek = '[';

        for (let j = 1; j <= WeekNum; j++) {
          strWeek += `"第${j}周",`;
        }

        strWeek = strWeek.substring(0, strWeek.length - 1);
        strWeek += ']';

        const strLabelsJson = eval(strWeek);

        /************************************用户和评论数******************************/

        let strNum = '[';
        for (let i = 0; i < arrCurrEduClsUserObjLst.length; i++) {
          //获取色码
          const strcolor = this.getRandomColor();
          strNum += `{ label: "${arrCurrEduClsUserObjLst[i].stuName}",backgroundColor: "${strcolor}",borderColor: "${strcolor}",fill: false,data: [`;
          arrSysCommentObjLst1 = arrSysCommentObjLst0.filter(
            (x) => x.updUser == arrCurrEduClsUserObjLst[i].stuId,
          );
          for (let j = 1; j <= WeekNum; j++) {
            arrSysCommentObjLst2 = arrSysCommentObjLst1.filter((x) => x.week == j);
            strNum += `${arrSysCommentObjLst2.length},`;
          }
          strNum = strNum.substring(0, strNum.length - 1);
          strNum += ']},';
        }

        strNum = strNum.substring(0, strNum.length - 1);
        strNum += ']';

        const strDatasetsJson = eval(strNum);

        TotalDataStatisticsEx.Canvas6(
          strLabelsJson,
          strDatasetsJson,
          strCanvasNo,
          strUserIdorCurrEduClsId,
        );
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public CombineConditionObjgs_AnswerCount(strid_CurrEdu: string): clsgs_AnswerCountEN {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    const objgs_AnswerCount_Cond: clsgs_AnswerCountEN = new clsgs_AnswerCountEN();
    let strIdCurrEduCls = '';
    if (strid_CurrEdu == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      try {
        if (this.StartDate_q != '') {
          // strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_DataAddDate} >= '${this.StartDate_q}'`;

          objgs_AnswerCount_Cond.SetCondFldValue(
            clsgs_AnswerCountEN.con_DataAddDate,
            this.StartDate_q,
            '>=',
          );
        }
        if (this.EndDate_q != '') {
          // strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_DataAddDate} <= '${this.EndDate_q}'`;
          objgs_AnswerCount_Cond.SetCondFldValue(
            clsgs_AnswerCountEN.con_DataAddDate,
            this.EndDate_q,
            '<=',
          );
        }
        if (this.TotalDataTypeId_q != '0' && this.TotalDataTypeId_q != '') {
          // strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_TotalDataTypeId} = '${this.TotalDataTypeId_q}'`;
          objgs_AnswerCount_Cond.SetCondFldValue(
            clsgs_AnswerCountEN.con_DataAddDate,
            this.EndDate_q,
            '<=',
          );
        }
        //管理员
        //if ($("#hidQueryStata").val() == "1") {
        if (
          GetInputValueInDivObj(divName, 'hidQueryStata') == '3' ||
          $('#hidQueryStata').val() == '7'
        ) {
          if (this.userId_q != '' && this.userId_q != '0') {
            // strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_DataUser} = '${this.userId_q}'`;
            objgs_AnswerCount_Cond.SetCondFldValue(
              clsgs_AnswerCountEN.con_DataAddDate,
              this.EndDate_q,
              '<=',
            );
          }
          if (this.TopicId_q != '0' && this.TopicId_q != '') {
            //  strWhereCond += ` And ${clsgs_AnswerCountEN.con_TopicId} = '${this.TopicId_q}'`;
            objgs_AnswerCount_Cond.SetCondFldValue(
              clsgs_AnswerCountEN.con_DataAddDate,
              this.EndDate_q,
              '<=',
            );
          }
        }
      } catch (objException) {
        const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
        throw strMsg;
      }
    } else {
      strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
    }

    objgs_AnswerCount_Cond.SetCondFldValue(
      clsgs_AnswerCountEN.con_IdCurrEduCls,
      strIdCurrEduCls,
      '=',
    );

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    return objgs_AnswerCount_Cond;
  }

  public CombineConditiongs_AnswerCountObj1(strid_CurrEdu: string): clsgs_AnswerCountEN {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    const objgs_AnswerCount_Cond: clsgs_AnswerCountEN = new clsgs_AnswerCountEN();
    let strIdCurrEduCls = '';
    if (strid_CurrEdu == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
      try {
        if (this.StartDate_q != '') {
          // strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_DataAddDate} >= '${this.StartDate_q}'`;

          objgs_AnswerCount_Cond.SetCondFldValue(
            clsgs_AnswerCountEN.con_DataAddDate,
            this.StartDate_q,
            '>=',
          );
        }
        if (this.EndDate_q != '') {
          // strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_DataAddDate} <= '${this.EndDate_q}'`;
          objgs_AnswerCount_Cond.SetCondFldValue(
            clsgs_AnswerCountEN.con_DataAddDate,
            this.EndDate_q,
            '<=',
          );
        }
        if (this.TotalDataTypeId_q != '0' && this.TotalDataTypeId_q != '') {
          // strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_TotalDataTypeId} = '${this.TotalDataTypeId_q}'`;
          objgs_AnswerCount_Cond.SetCondFldValue(
            clsgs_AnswerCountEN.con_DataAddDate,
            this.EndDate_q,
            '<=',
          );
        }
        //管理员
        //if ($("#hidQueryStata").val() == "1") {
        if (
          GetInputValueInDivObj(divName, 'hidQueryStata') == '3' ||
          $('#hidQueryStata').val() == '7'
        ) {
          if (this.userId_q != '' && this.userId_q != '0') {
            // strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_DataUser} = '${this.userId_q}'`;
            objgs_AnswerCount_Cond.SetCondFldValue(
              clsgs_AnswerCountEN.con_DataAddDate,
              this.EndDate_q,
              '<=',
            );
          }
          if (this.TopicId_q != '0' && this.TopicId_q != '') {
            //  strWhereCond += ` And ${clsgs_AnswerCountEN.con_TopicId} = '${this.TopicId_q}'`;
            objgs_AnswerCount_Cond.SetCondFldValue(
              clsgs_AnswerCountEN.con_DataAddDate,
              this.EndDate_q,
              '<=',
            );
          }
        }
      } catch (objException) {
        const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
        throw strMsg;
      }
    } else {
      strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
    }

    objgs_AnswerCount_Cond.SetCondFldValue(
      clsgs_AnswerCountEN.con_IdCurrEduCls,
      strIdCurrEduCls,
      '=',
    );

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。

    return objgs_AnswerCount_Cond;
  }

  //绑定当前教学班用户讨论回答统计数据
  public async BindChart_UserDiscussNum(
    strid_CurrEdu: string,
    strCanvasNo: string,
    strUserIdorCurrEduClsId: string,
  ) {
    const strWhereCond = await this.CombineCondition1(strid_CurrEdu);

    //strWhereCond = await this.CombineConditionObj1(strid_CurrEdu);

    let strIdCurrEduCls = '';
    if (strid_CurrEdu == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    } else {
      strIdCurrEduCls = strid_CurrEdu; //传递过来教学班参数；
    }

    const objgs_AnswerCount_Cond = this.CombineConditionObjgs_AnswerCount(strid_CurrEdu);

    try {
      //用户
      const arrgs_AnswerCountUserNum = await gs_AnswerCountEx_GetAnswerCountNumObjLstAsync(
        strWhereCond,
      );
      if (arrgs_AnswerCountUserNum.length == 0) {
        const strMsg = `当前无数据,请选择其他条件或切换教学班`;
        console.error(strMsg);
        return;
      }
      console.log('3-1');

      //用户、周
      const arrgs_AnswerCountObjLst1 = await gs_AnswerCount_GetSubObjLstCache(
        objgs_AnswerCount_Cond,
        strIdCurrEduCls,
      );
      console.log('3-3');

      //教学班
      const WeekNum = await this.GetTeachingDateWeek(strIdCurrEduCls);

      if (WeekNum == 0) {
        const strMsg = `当前教学班没有设置时间范围`;
        console.error(strMsg);
        return;
      }
      /*********************************周列表*********************************/
      let strWeek = '[';

      //}
      for (let j = 1; j <= WeekNum; j++) {
        //判断是否存在对等的周数据 ，存在则从列表中取，否则为0；
        //从详细数据中过滤 通过当前周作为条件；把数据存放到某一个类型观点详细；
        strWeek += `"第${j}周",`;
      }

      strWeek = strWeek.substring(0, strWeek.length - 1);
      strWeek += ']';

      const strLabelsJson = eval(strWeek);

      /******************************************************************/

      //strIdCurrEduclsspanUserName1 = '<span style="font-weight: 500;"><i class="fa fa-square" style="color:'
      //strIdCurrEduclsspanUserName2 = ';font-size: 20px; padding-right: 5px; vertical-align: middle; margin-top: -3px;"></i>'
      //strIdCurrEduclsspanUserName3 = '</span>'
      //strIdCurrEduclsstrHtml = "";
      let strNum = '[';
      for (let i = 0; i < arrgs_AnswerCountUserNum.length; i++) {
        //获取色码
        const strcolor = this.getRandomColor();

        //const objUser = arrUsers.find(x => x.userId == arrgs_AnswerCountUserNum[i].dataUser);
        //if (objUser != null) {
        //strHtml += spanUserName1 + strcolor + spanUserName2 + strUserName + spanUserName3;

        //strNum += "{ label: \"" + strUserName + "\",fillColor: \"rgba(220,220,220, 0.01)\",strokeColor: \"" + strcolor + "\",pointColor: \"" + strcolor + "\",pointStrokeColor: \"#fff\",pointHighlightFill: \"#fff\",pointHighlightStroke: \"" + strcolor + "\",data: [";
        strNum += `{ label: "${arrgs_AnswerCountUserNum[i].userName}",backgroundColor: "${strcolor}",borderColor: "${strcolor}",fill: false,data: [`;
        const arrgs_AnswerCountObjLst2 = arrgs_AnswerCountObjLst1.filter(
          (x) => x.dataUser == arrgs_AnswerCountUserNum[i].dataUser,
        );

        for (let j = 1; j <= WeekNum; j++) {
          if (arrgs_AnswerCountObjLst2.length > 0) {
            const arrgs_AnswerCountObjLst3 = arrgs_AnswerCountObjLst2.filter((x) => x.week == j);

            if (arrgs_AnswerCountObjLst3.length > 0) {
              strNum += `${arrgs_AnswerCountObjLst3.length},`;
            } else {
              strNum += '0,';
            }
          } else {
            strNum += '0,';
          }
        }
        strNum = strNum.substring(0, strNum.length - 1);
        strNum += ']},';

        //}
      }

      strNum = strNum.substring(0, strNum.length - 1);
      strNum += ']';

      const strDatasetsJson = eval(strNum);

      TotalDataStatisticsEx.Canvas7(
        strLabelsJson,
        strDatasetsJson,
        strCanvasNo,
        strUserIdorCurrEduClsId,
      );
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //用户统计列表
  public async BindGv_UserDiscussNumTable() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strIdCurrEduCls = '';
    const strWhereCond = await this.CombineCondition1(strIdCurrEduCls);
    // const arrgs_AnswerCountUserNum: Array<clsgs_AnswerCountEN> = [];
    let arrgs_WeekAnswerCountUserNum: Array<clsgs_AnswerCountEN> = [];

    // const arrgs_AnswerCountObjLst1: Array<clsgs_AnswerCountEN> = [];
    // //临时

    try {
      //用户
      //const responseText1 = await gs_AnswerCountEx_GetAnswerCountNumObjLstAsync(strWhereCond).then((jsonData) => {
      //    arrgs_AnswerCountUserNum = <Array<clsgs_AnswerCountEN>>jsonData;
      //    console.log("7-1");
      //});

      //周
      await gs_AnswerCountEx_GetWeekAnswerCountNumObjLstAsync(strWhereCond).then((jsonData) => {
        arrgs_WeekAnswerCountUserNum = <Array<clsgs_AnswerCountEN>>jsonData;
        console.log('7-1');
      });

      //用户、周

      //const responseText3 = await gs_AnswerCount_GetObjLstAsync(strWhereCond).then((jsonData) => {
      //    arrgs_AnswerCountObjLst1 = <Array<clsgs_AnswerCountEN>>jsonData;
      //    console.log("7-3");
      //});

      let strhtml = '';
      let cateid = 0;
      // const cateid_ = 0;
      if (GetInputValueInDivObj(divName, 'hidQueryStata') == '1') {
        $('#tbListUserNum tr').remove();
      } else {
        $('#tbListTeaClassNum tr').remove();
      }

      if (arrgs_WeekAnswerCountUserNum.length > 0) {
        //得到数据源循环数据
        for (let i = 0; i < arrgs_WeekAnswerCountUserNum.length; i++) {
          cateid++;
          // intJ++;
          const fid = 0;
          //周；
          const strWeek = arrgs_WeekAnswerCountUserNum[i].week;
          //周日期范围
          const strWeekTimeFrame = arrgs_WeekAnswerCountUserNum[i].weekTimeRange;
          //记录数
          const strNum = arrgs_WeekAnswerCountUserNum[i].memo;

          //从详细数据中过滤 通过当前周作为条件；把数据存放到某一个类型观点详细；
          //ChildarrvSysCommentObjLst = arrvgs_TotalDetailObjLst.filter(x => x.week == strWeek);

          strhtml += `<tr cate-id="${cateid}" fid="${fid}">`;
          //周
          strhtml += `<td>${strWeek}</td>`;
          //周日期范围
          strhtml += `<td>${strWeekTimeFrame}</td>`;

          strhtml += `<td><i class="layui-icon x-show" status="true"></i>${strNum}</td>`;

          //结束
          strhtml += '</tr>';

          ////父节点转化
          //cateid_ = cateid;

          ////子数据
          //if (ChildarrvSysCommentObjLst.length > 0) {
          //    //因为有10个数据类型；需要分别判断读取，如果有数据则执行输出，没有则跳过；
          //    // 01	论文02	论文读写03	论文子观点04	个人观05	专家观点06	主题概念 07	客观事实08	客观数据09	技能10	社会关系
          //    //循环统计类型；
          //    for (let k = 0; k < gs_TotalDataTypeObjLst.length; k++) {
          //        strTypeId = gs_TotalDataTypeObjLst[k].totalDataTypeId;
          //        strIdCurrEduclsDetailTypeObjLst = ChildarrvSysCommentObjLst.filter(x => x.totalDataTypeId == strTypeId);
          //        //如果大于0 ，说明有此类型数据，需要输出；
          //        if (DetailTypeObjLst.length > 0) {
          //            for (let j = 0; j < DetailTypeObjLst.length; j++) {
          //                cateid++;
          //                strhtml += '<tr cate-id="' + cateid + '" fid="' + cateid_ + '" style="display:none;">';
          //                //周
          //                strhtml += '<td>' + strWeek + '</td>';
          //                //周日期范围
          //                strhtml += '<td>' + strWeekTimeFrame + '</td>';
          //                strhtml += '<td>' + DetailTypeObjLst[j].totalDataTypeName + '[' + DetailTypeObjLst.length + ']</td>';

          //                strhtml += '</tr>';
          //                //因为统计一个类型数据量，所以直接break；
          //                break;
          //            }

          //        }
          //    }
          //}
        }
      }

      $('#tbListUserDiscussNum').html(strhtml);

      //      TotalDataStatisticsEx.vuebtn_Click('tbody', '');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取用户统计数据不成功,${e}.`;
      alert(strMsg);
    }
  }

  //获取教学班的时间得到周数
  public async GetTeachingDateWeek(strIdCurrEduCls: string): Promise<number> {
    let strIdCurrEducls = '';
    if (strIdCurrEduCls == '') {
      strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    } else {
      strIdCurrEducls = strIdCurrEduCls;
    }
    //教学班
    //strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    //    strIdCurrEduclsstrWhereEduCls = " 1 = 1 And idCurrEduCls = '" + strIdCurrEducls + "'";

    const arrgs_TeachingDateObjLst = await gs_TeachingDate_GetObjLstCache(strIdCurrEducls);
    if (arrgs_TeachingDateObjLst.length > 0) {
      // console.log('获取教学班日期成功');
    }

    //通过教学班得到教学班时间范围；、
    // const responseText1 = await gs_TeachingDate_GetFirstObjAsync(strWhereCond);
    const objgs_TeachingDateEN = arrgs_TeachingDateObjLst.find(
      (x) => x.idCurrEduCls == strIdCurrEducls,
    );

    //const responseText5 = await gs_TeachingDate_GetFirstObjAsync(strWhereEduCls);
    //const objgs_TeachingDateEN: clsgs_TeachingDateEN = <clsgs_TeachingDateEN>responseText5;

    if (objgs_TeachingDateEN != null) {
      const eventStartTime = new Date(objgs_TeachingDateEN.startDate);
      const eventEndTime = new Date(objgs_TeachingDateEN.endDate);
      const duration = eventEndTime.valueOf() - eventStartTime.valueOf();

      //计算出相差天数
      const days = Math.floor(duration / (24 * 3600 * 1000));
      //天数除以7得到周；
      const WeekNum = Math.ceil(days / 7);
      return WeekNum;
    } else {
      const strMsg = `当前教学班没有设置时间范围`;
      alert(strMsg);
      return 0;
    }
  }

  //获取不同色码
  public getRandomColor(): string {
    return `#${`00000${((Math.random() * 0x1000000) << 0).toString(16)}`.substring(-6)}`;
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
   * 用户
   */
  public get userId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }
  /*
   * 用户
   */
  public set userId_q(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlUserId_q', value);
  }

  /*
   * 数据类型
   */
  public get TotalDataTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlTotalDataTypeId_q');
  }
  /*
   * 数据类型
   */
  public set TotalDataTypeId_q(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlTotalDataTypeId_q', value);
  }

  /*
   * 是否推荐
   */
  public set isRecommend(value: boolean) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'chkIsRecommend', value.toString());
  }
  /*
   * 是否推荐
   */
  public get isRecommend(): boolean {
    return $('#chkIsRecommend').prop('checked');
  }

  /*
   * 主题
   */
  public get TopicId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlTopicId_q');
  }
  /*
   * 主题
   */
  public set TopicId_q(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlTopicId_q', value);
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        break;

      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PaperCollectionLogCRUDExEx.btn_Click');

        break;
    }
  }
}
