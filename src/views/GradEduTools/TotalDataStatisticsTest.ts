import $ from 'jquery';
import { message } from '@/utils/myMessage';

import { gs_TotalDataStatisticsEx_GetTotalStatisticsByTableAsync } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import {
  vgs_TotalDataStatisticsEx_GetUserNumObjLstAsync,
  vgs_TotalDataStatisticsEx_GetUser_WeekNumObjLstAsync,
  vgs_TotalDataStatisticsEx_GetWeekAVGTeaScoreObjLstAsync,
  vgs_TotalDataStatisticsEx_GetWeekNumObjLstAsync,
} from '@/ts/L3ForWApiEx/GradEduTools/clsvgs_TotalDataStatisticsExWApi';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { gs_TotalDataStatisticsCRUD } from '@/viewsBase/GradEduTools/gs_TotalDataStatisticsCRUD';
import { clsgs_TeachingDateEN } from '@/ts/L0Entity/DailyRunning/clsgs_TeachingDateEN';
import { clsgs_TotalDataTypeEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataTypeEN';
import { clsvgs_TotalDataStatisticsEN } from '@/ts/L0Entity/GradEduTools/clsvgs_TotalDataStatisticsEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  gs_TeachingDate_GetFirstObjAsync,
  gs_TeachingDate_IsExistRecordAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsgs_TeachingDateWApi';
import {
  gs_TotalDataType_BindDdl_TotalDataTypeIdInDivCache,
  gs_TotalDataType_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataTypeWApi';
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
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';

declare function Canvas1(str1: string, str2: string): void;
declare function Canvas2(str1: string, str2: string, str3: string): void;
declare function Canvas3(str1: string, str2: string): void;
declare function Canvas4(str1: string, str2: string, str3: string): void;

declare function tbody(): void;

/* PaperSubViewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class TotalDataStatisticsTest extends gs_TotalDataStatisticsCRUD implements IShowList {
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
    this.bindAllData();
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

        await gs_TotalDataType_BindDdl_TotalDataTypeIdInDivCache(
          objDivQuery,
          'ddlTotalDataTypeId_q',
        );
        $('#hidIdCurrEduCls').val(clsPubLocalStorage.idCurrEduCls);

        //await this.BindGv_vTotalDataStatistics();
        //tbody();
        //$(this).val($(this).find("option:first-child").val()).trigger('change')
        //$("#sex").find("option[value='男']").attr("selected", true);
        //$("select").find("option:first").prop("selected", true);
        //$('selector').find('option:eq(1)').attr('selected', 'selected');

        if (this.userId_q != '' && this.userId_q != '0') {
          // const gvResult1 = await this.BindGv_UserNum();
        } else {
          //默认显示第3个；参数可以变换；
          $('#ddlUserId_q').prop('selectedIndex', 2);
        }

        //const gvResult2 = await this.BindGv_TeaClassNum();
        //const gvResult3 = await this.BindGv_TotalDataNum();
        //await this.BindGv_TotalDataNum();
        //获取教学班时间范围
        await this.GetEduDataRandge();

        //默认显示数据
        await this.bindAllData();
        //const gvResult1 = await this.Bind_AllData()
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

  //教学班学生关系
  public async BindDdl_UserName(ddlUserId_q: string) {
    const strWhereCond = ` idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    const objDdl = document.getElementById(ddlUserId_q);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlUserId_q} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      const arrObjLst_Sel: Array<clsvgs_TotalDataStatisticsEN> =
        await vgs_TotalDataStatisticsEx_GetUserNumObjLstAsync(strWhereCond);

      //arrvclsvTopicObjectiveEN = arrvObjList.filter(x => x.objectiveType == "02");//客观数据；

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
    const strWhereCond = ` 1 = 1 and idCurrEduCls=${clsPubLocalStorage.idCurrEduCls}`;
    //通过教学班得到教学班时间范围；、
    const responseText1 = await gs_TeachingDate_GetFirstObjAsync(strWhereCond);
    const objgs_TeachingDateEN: clsgs_TeachingDateEN = <clsgs_TeachingDateEN>responseText1;
    if (objgs_TeachingDateEN != null) {
      $('#hidStartDate').val(objgs_TeachingDateEN.startDate);
      $('#hiEndDate').val(objgs_TeachingDateEN.endDate);
    }
  }

  //设置教学班范围时间；
  public async btnSetUpDateRecord_Click() {
    const objPage: TotalDataStatisticsTest = new TotalDataStatisticsTest();
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

  public async Bind_AllData() {
    await this.BindGv_TotalDataNum();
    await this.BindGv_TotalDataNumTable();

    await this.BindGv_UserNum();
    await this.BindGv_UserNumTable();

    await this.BindGv_TeaClassNum();
    await this.BindGv_UserNumTable();

    await this.BindGv_AVGTeaScore();
    await this.BindGv_TeaClassAverageTab();
  }

  public async bindAllData() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (GetInputValueInDivObj(divName, 'hidQueryStata') == '1') {
      if (this.userId_q == '' || this.userId_q == '0') {
        $('select').prop('selectedIndex', 1);
      }

      await this.BindGv_UserNum();
      await this.BindGv_UserNumTable();
    } else if (GetInputValueInDivObj(divName, 'hidQueryStata') == '2') {
      await this.BindGv_TeaClassNum();
      await this.BindGv_UserNumTable();
    } else if (GetInputValueInDivObj(divName, 'hidQueryStata') == '3') {
      await this.BindGv_TotalDataNum();
      await this.BindGv_TotalDataNumTable();
    } else {
      await this.BindGv_AVGTeaScore();
      await this.BindGv_TeaClassAverageTab();
    }
  }

  /* 查询
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async btnQuery_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      if (GetInputValueInDivObj(divName, 'hidQueryStata') == '1') {
        if (this.userId_q != '' && this.userId_q != '0') {
          await this.BindGv_UserNum();
          await this.BindGv_UserNumTable();
        } else {
          message.info('请先选择用户并查询！');
        }
      } else if (GetInputValueInDivObj(divName, 'hidQueryStata') == '2') {
        await this.BindGv_TeaClassNum();
        await this.BindGv_UserNumTable();
      } else if (GetInputValueInDivObj(divName, 'hidQueryStata') == '3') {
        await this.BindGv_TotalDataNum();
        await this.BindGv_TotalDataNumTable();
      } else {
        await this.BindGv_AVGTeaScore();
        await this.BindGv_TeaClassAverageTab();
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
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
          const strInfo = `同步数据成功!`;
          //
          //显示信息框
          //message.success(strInfo);
          alert(strInfo);
          HideDivInDivObj(objLayOut, 'divLoading');
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

  /* 用户统计
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async liUserNum_Click() {
    try {
      if (this.userId_q != '' && this.userId_q != '0') {
        await this.BindGv_UserNum();

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
    const strWhereCond = await this.CombineCondition1();
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

      //获取统计类型数据；
      gs_TotalDataTypeObjLst = await gs_TotalDataType_GetObjLstAsync('1=1');
      console.log('获取统计类型数据成功');

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

      tbody();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取用户统计数据不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 教学班统计
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async liTeaClassNum_Click() {
    try {
      await this.BindGv_TeaClassNum();
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
      await this.BindGv_AVGTeaScore();
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
    const strWhereCond = await this.CombineCondition1();
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

      //获取统计类型数据；
      gs_TotalDataTypeObjLst = await gs_TotalDataType_GetObjLstAsync('1=1');
      console.log('获取统计类型数据成功');

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
      tbody();
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
      await this.BindGv_TotalDataNum();
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
    const strWhereCond = await this.CombineCondition1();
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
      //获取统计类型数据；
      gs_TotalDataTypeObjLst = await gs_TotalDataType_GetObjLstAsync('1=1');
      console.log('获取统计类型数据成功');

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
      tbody();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public CombineCondition1(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //通过教学班得到教学班时间范围；、

    if (GetInputValueInDivObj(divName, 'hidStartDate') != '' && $('#hiEndDate').val() != '') {
      const startDate = GetInputValueInDivObj(divName, 'hidStartDate');
      const endDate = GetInputValueInDivObj(divName, 'hiEndDate');
      strWhereCond += ` And dataAddDate > '${startDate}' And dataAddDate < '${endDate}'`;
    }

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_UpdDate} < '${this.EndDate_q}'`;
      }
      if (this.TotalDataTypeId_q != '0' && this.TotalDataTypeId_q != '') {
        strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_TotalDataTypeId} = '${this.TotalDataTypeId_q}'`;
      }
      //管理员
      if (GetInputValueInDivObj(divName, 'hidQueryStata') == '1') {
        if (this.userId_q != '' && this.userId_q != '0') {
          strWhereCond += ` And ${clsvgs_TotalDataStatisticsEN.con_DataUser} = '${this.userId_q}'`;
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
    return strWhereCond;
  }

  //绑定学生数据统计
  public async BindGv_UserNum() {
    const strWhereCond = await this.CombineCondition1();
    let arrvgs_TotalDataStatisticsObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];
    // strIdCurrEduclsChildarrvSysCommentObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];

    try {
      arrvgs_TotalDataStatisticsObjLst = await vgs_TotalDataStatisticsEx_GetWeekNumObjLstAsync(
        strWhereCond,
      );
      console.log('1-0');

      //教学班
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      const strWhereEduCls = ` 1 = 1 And idCurrEduCls = '${strIdCurrEducls}'`;
      const responseText1 = await gs_TeachingDate_GetFirstObjAsync(strWhereEduCls);
      const objgs_TeachingDateEN: clsgs_TeachingDateEN = <clsgs_TeachingDateEN>responseText1;
      if (objgs_TeachingDateEN != null) {
        const eventStartTime = new Date(objgs_TeachingDateEN.startDate);
        const eventEndTime = new Date(objgs_TeachingDateEN.endDate);
        const duration = eventEndTime.valueOf() - eventStartTime.valueOf();

        //计算出相差天数
        const days = Math.floor(duration / (24 * 3600 * 1000));
        //天数除以7得到周；
        const WeekNum = Math.ceil(days / 7);

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
          Canvas1(strLabelsJson, strDatasetsJson);
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
  public async BindGv_AVGTeaScore() {
    const strWhereCond = await this.CombineCondition1();
    let arrvgs_TotalDataStatisticsObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];

    try {
      arrvgs_TotalDataStatisticsObjLst =
        await vgs_TotalDataStatisticsEx_GetWeekAVGTeaScoreObjLstAsync(strWhereCond);
      console.log('1-0');

      //教学班
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      const strWhereEduCls = ` 1 = 1 And idCurrEduCls = '${strIdCurrEducls}'`;
      const responseText1 = await gs_TeachingDate_GetFirstObjAsync(strWhereEduCls);
      const objgs_TeachingDateEN: clsgs_TeachingDateEN = <clsgs_TeachingDateEN>responseText1;
      if (objgs_TeachingDateEN != null) {
        const eventStartTime = new Date(objgs_TeachingDateEN.startDate);
        const eventEndTime = new Date(objgs_TeachingDateEN.endDate);
        const duration = eventEndTime.valueOf() - eventStartTime.valueOf();

        //计算出相差天数
        const days = Math.floor(duration / (24 * 3600 * 1000));
        //天数除以7得到周；
        const WeekNum = Math.ceil(days / 7);

        if (arrvgs_TotalDataStatisticsObjLst.length > 0) {
          //strcolor = this.getRandomColor();
          let strWeek = '[';
          let strNum = '[';
          let strColor = '[';
          //for (let i = 0; i < arrvgs_TotalDataStatisticsObjLst.length; i++) {
          //    strWeek += '"第' + arrvgs_TotalDataStatisticsObjLst[i].week + '周",';
          //    strNum += arrvgs_TotalDataStatisticsObjLst[i].memo + ',';
          //    strColor += '"' + this.getRandomColor() + '",';
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
          Canvas4(strLabelsJson, strDatasetsJson, strColorJson);
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

  //绑定教学班统计
  public async BindGv_TeaClassNum() {
    const strWhereCond = await this.CombineCondition1();
    let arrvgs_TotalDataStatisticsObjLst: Array<clsvgs_TotalDataStatisticsEN> = [];

    try {
      arrvgs_TotalDataStatisticsObjLst = await vgs_TotalDataStatisticsEx_GetWeekNumObjLstAsync(
        strWhereCond,
      );
      console.log('1-0');

      //教学班
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      const strWhereEduCls = ` 1 = 1 And idCurrEduCls = '${strIdCurrEducls}'`;
      const responseText1 = await gs_TeachingDate_GetFirstObjAsync(strWhereEduCls);
      const objgs_TeachingDateEN: clsgs_TeachingDateEN = <clsgs_TeachingDateEN>responseText1;
      if (objgs_TeachingDateEN != null) {
        const eventStartTime = new Date(objgs_TeachingDateEN.startDate);
        const eventEndTime = new Date(objgs_TeachingDateEN.endDate);
        const duration = eventEndTime.valueOf() - eventStartTime.valueOf();

        //计算出相差天数
        const days = Math.floor(duration / (24 * 3600 * 1000));
        //天数除以7得到周；
        const WeekNum = Math.ceil(days / 7);

        if (arrvgs_TotalDataStatisticsObjLst.length > 0) {
          //strcolor = this.getRandomColor();
          let strWeek = '[';
          let strNum = '[';
          let strColor = '[';

          //for (let i = 0; i < arrvgs_TotalDataStatisticsObjLst.length; i++) {
          //    strWeek += '"第' + arrvgs_TotalDataStatisticsObjLst[i].week + '周",';
          //    strNum += arrvgs_TotalDataStatisticsObjLst[i].memo + ',';
          //    strColor += '"' + this.getRandomColor() + '",';
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
          Canvas2(strLabelsJson, strDatasetsJson, strColorJson);
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

  public async BindGv_TotalDataNum() {
    const strWhereCond = await this.CombineCondition1();
    let arrvgs_TotalDataStatisticsObjLst1: Array<clsvgs_TotalDataStatisticsEN> = [];
    //arrvgs_TotalDataStatisticsObjLst2: Array<clsvgs_TotalDataStatisticsEN> = [];
    let arrvgs_TotalDataStatisticsObjLst3: Array<clsvgs_TotalDataStatisticsEN> = [];

    //临时
    let arrvgs_TotalDataStatisticsObjLst4: Array<clsvgs_TotalDataStatisticsEN> = [];

    try {
      //用户
      await vgs_TotalDataStatisticsEx_GetUserNumObjLstAsync(strWhereCond).then((jsonData) => {
        arrvgs_TotalDataStatisticsObjLst1 = <Array<clsvgs_TotalDataStatisticsEN>>jsonData;
        console.log('3-1');
      });

      //周
      //const responseText2 = await vgs_TotalDataStatisticsEx_GetWeekNumObjLstAsync(strWhereCond).then((jsonData) => {
      //    arrvgs_TotalDataStatisticsObjLst2 = <Array<clsvgs_TotalDataStatisticsEN>>jsonData;
      //    console.log("3-2");
      //});

      //用户、周
      await vgs_TotalDataStatisticsEx_GetUser_WeekNumObjLstAsync(strWhereCond).then((jsonData) => {
        arrvgs_TotalDataStatisticsObjLst3 = <Array<clsvgs_TotalDataStatisticsEN>>jsonData;
        console.log('3-3');
      });
      //教学班
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      const strWhereEduCls = ` 1 = 1 And idCurrEduCls = '${strIdCurrEducls}'`;
      const responseText5 = await gs_TeachingDate_GetFirstObjAsync(strWhereEduCls);
      const objgs_TeachingDateEN: clsgs_TeachingDateEN = <clsgs_TeachingDateEN>responseText5;

      if (objgs_TeachingDateEN != null) {
        const eventStartTime = new Date(objgs_TeachingDateEN.startDate);
        const eventEndTime = new Date(objgs_TeachingDateEN.endDate);
        const duration = eventEndTime.valueOf() - eventStartTime.valueOf();

        //计算出相差天数
        const days = Math.floor(duration / (24 * 3600 * 1000));
        //天数除以7得到周；
        const WeekNum = Math.ceil(days / 7);

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

        if (arrvgs_TotalDataStatisticsObjLst1.length > 0) {
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

          Canvas3(strLabelsJson, strDatasetsJson);
        } else {
          const strMsg = `当前无数据,请选择其他条件或切换教学班`;
          console.error(strMsg);
        }
      } else {
        const strMsg = `当前教学班没有设置时间范围`;
        console.error(strMsg);
        alert(strMsg);
      }

      //$("#divUserLst").html(strHtml);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
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
}
