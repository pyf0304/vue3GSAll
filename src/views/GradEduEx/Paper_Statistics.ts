import $ from 'jquery';
import { clsvPaperReadWriteWApiEx } from '@/ts/L3ForWApiEx/GraduateEdu/clsvPaperReadWriteWApiEx';
import { PaperEx_GetUserNumObjLstAsync } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { vPaperSubViewpointEx_GetSubViewpointNumObjLstAsync } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSubViewpointExWApi';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsPaperEduClsRelaEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEduClsRelaEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsPaperReadWriteEN';
import { clsvPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperReadWriteEN';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsvSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsvSysCommentEN';
import { clsvSysVoteEN } from '@/ts/L0Entity/InteractManage/clsvSysVoteEN';
import { vSysComment_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsvSysCommentWApi';
import { vSysVote_GetObjLstAsync } from '@/ts/L3ForWApi/InteractManage/clsvSysVoteWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  GetDivObjInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  GetTBodyObjInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { userStore } from '@/store/modulesShare/user';

declare function Canvas1(strJson: string): void;
declare function Canvas2(strJson: string): void;
declare function Canvas3(strJson: string): void;
declare let window: any;
/* PaperSubViewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export default class Paper_Statistics {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => string;
  public static GetPropValue: (strPropName: string) => string;

  public static divList: HTMLDivElement; //列表区的层对象
  public static divDataLst: HTMLDivElement; //列表中数据区的层对象
  public static divPager: HTMLDivElement; //列表中的分页区的层对象
  public static divQuery: HTMLDivElement; //查询区的层对象
  public static divFunction: HTMLDivElement; //功能区的层对象
  public static divLayout: HTMLDivElement; //界面布局的层对象
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
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;
      if (strUserId != '') {
        $('#hidUserId').val(strUserId);
        $('#hidRoleId').val(strRoleId);

        //1、为下拉框设置数据源,绑定列表数据
        //const ddl_UserId_q = await this.BindDdl_UserId1("ddlUserId_q");
        await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q');
        await this.BindGv_vPaperReadWrite_Statistics();
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

  /* 查询
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async btnQuery_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      if (GetInputValueInDivObj(divName, 'hidQueryStata') == '1') {
        await this.BindGv_vPaperReadWrite_Statistics();
      } else if (GetInputValueInDivObj(divName, 'hidQueryStata') == '2') {
        await this.BindGv_vPaper_Statistics();
      } else {
        await this.BindGv_vPaperSubViewpoint_Statistics();
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 论文读写统计
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async liPaperReadWriteStatistics_Click() {
    try {
      await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q');
      //const ddl_UserId_q = await this.BindDdl_UserId1("ddlUserId_q");
      await this.BindGv_vPaperReadWrite_Statistics();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 论文统计
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async liPaperStatistics_Click() {
    try {
      await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q');
      //const ddl_UserId_q = await this.BindDdl_UserId2("ddlUserId_q");
      await this.BindGv_vPaper_Statistics();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 论文子观点统计
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async liPaperSubViewpointStatistics_Click() {
    try {
      await clsDropDownList.BindDdl_UsersInvPaperSubviewpoint_Cache('ddlUserId_q');
      // const ddl_UserId_q = await this.BindDdl_UserId3("ddlUserId_q");
      await this.BindGv_vPaperSubViewpoint_Statistics();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public CombineCondition1(): string {
    const divLayout = this.getDivName(enumDivType.LayOut_01);

    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;

    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_UpdDate} < '${this.EndDate_q}'`;
      }
      //管理员
      if (GetInputValueInDivObj(divLayout, 'hidRoleId') == '00620001') {
        if (this.userId_q != '' && this.userId_q != '0') {
          strWhereCond += ` And ${clsPaperReadWriteEN.con_UpdUser} = '${this.userId_q}'`;
        }
      }
      //教师
      else if (GetInputValueInDivObj(divLayout, 'hidRoleId') == '00620002') {
        $('#td_UserId').hide();
        strWhereCond += Format(
          " and {0}='{1}'",
          clsvPaperReadWriteEN.con_IdCurrEduCls,
          strIdCurrEduCls,
        );
      }
      //学生
      else {
        $('#td_UserId').hide();
        strWhereCond += ` and updUser='${userStore.getUserId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombineCondition_Paper(): string {
    const divLayout = this.getDivName(enumDivType.LayOut_01);

    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;

    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsPaperReadWriteEN.con_UpdDate} < '${this.EndDate_q}'`;
      }
      //管理员
      if (GetInputValueInDivObj(divLayout, 'hidRoleId') == '00620001') {
        if (this.userId_q != '' && this.userId_q != '0') {
          strWhereCond += ` And ${clsPaperReadWriteEN.con_UpdUser} = '${this.userId_q}'`;
        }
      }
      //教师
      else if (GetInputValueInDivObj(divLayout, 'hidRoleId') == '00620002') {
        $('#td_UserId').hide();
        strWhereCond += Format(
          " and {0} in (Select {0} From {1} Where {2}='{3}')",
          clsPaperEN.con_PaperId,
          clsPaperEduClsRelaEN._CurrTabName,
          clsPaperEduClsRelaEN.con_IdCurrEduCls,
          strIdCurrEduCls,
        );
      }
      //学生
      else {
        $('#td_UserId').hide();
        strWhereCond += ` and updUser='${userStore.getUserId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //public CombineCondition3(): string {
  //    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //    //例如 1 = 1 && userName = '张三'
  //    strWhereCond: string = " 1 = 1 ";

  //    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  //    try {
  //        if (this.StartDate_q != "") {
  //            strWhereCond += ` And ${clsvPaperSubViewpointEN.con_UpdDate} > '${this.StartDate_q}'`;
  //        }
  //        if (this.EndDate_q != "") {
  //            strWhereCond += ` And ${clsvPaperSubViewpointEN.con_UpdDate} < '${this.EndDate_q}'`;
  //        }

  //        if (this.userId_q != "" && this.userId_q != "0") {
  //            strWhereCond += ` And ${clsvPaperSubViewpointEN.con_UpdUser} = '${this.userId_q}'`;
  //        }

  //    }
  //    catch (objException) {
  //        strIdCurrEduclsstrMsg: string = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
  //        throw strMsg;
  //    }
  //    return strWhereCond;
  //}

  //绑定论文读写统计
  public async BindGv_vPaperReadWrite_Statistics() {
    const objLayout = this.getDivName(enumDivType.LayOut_01);
    const divName4Activetab = Paper_Statistics.vuebtn_Click('getDivNameByActiveTabId', '');
    const divName = GetDivObjInDivObj(objLayout, divName4Activetab);
    if (divName == null) return;
    const strCon = this.CombineCondition1();
    const strWhereCond = strCon;
    const strWhereCond1 = `${strCon}and operationTypeId='01'`;
    const strWhereCond2 = `${strCon}and operationTypeId='02'`;

    //strWhereCond3 = strCon + "and operationTypeId='01' and pcount > 5 ";
    //strWhereCond4 = strCon + "and operationTypeId='02' and pcount > 5 ";
    const strWhereCond3 = `${strCon}and operationTypeId='01' and subVCount > 5 `; //新0605
    const strWhereCond4 = `${strCon}and operationTypeId='02' and subVCount > 5 `; //新0605

    try {
      const arrvGroupPaperReadWriteObjLst = await clsvPaperReadWriteWApiEx.GetUserNumObjLstAsync(
        strWhereCond,
      );

      console.log('1-0');

      const arrvGroupPaperReadWrite01ObjLst = await clsvPaperReadWriteWApiEx.GetUserNumObjLstAsync(
        strWhereCond1,
      );

      console.log('1-1');

      const arrvGroupPaperReadWrite02ObjLst = await clsvPaperReadWriteWApiEx.GetUserNumObjLstAsync(
        strWhereCond2,
      );
      console.log('1-2');

      const arrvGroupPaperReadWrite03ObjLst = await clsvPaperReadWriteWApiEx.GetUserNumObjLstAsync(
        strWhereCond3,
      );
      console.log('1-3');

      const arrvGroupPaperReadWrite04ObjLst = await clsvPaperReadWriteWApiEx.GetUserNumObjLstAsync(
        strWhereCond4,
      );

      console.log('1-4');

      //获取用户缓存数据
      const strWhere_User = '1=1';
      const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

      //const responseText5 = await this.BindList_Statistics(arrvGroupPaperReadWriteObjLst, arrvGroupPaperReadWrite01ObjLst, arrvGroupPaperReadWrite02ObjLst, arrvGroupPaperReadWrite03ObjLst, arrvGroupPaperReadWrite04ObjLst);

      //arrvGroupPaperReadWrite03ObjLst = arrvGroupPaperReadWrite01ObjLst.filter(x => x.pcount > 5);
      //arrvGroupPaperReadWrite04ObjLst = arrvGroupPaperReadWrite02ObjLst.filter(x => x.pcount > 5);

      let strhtml = '';
      let cateid = 0;
      //$('#tbList tr').remove();

      let strNum = '';
      let strNum1 = 0;
      let strNum2 = 0;
      let strNum3 = 0;
      let strNum4 = 0;
      let strUserName = '';
      let strcollegeName = '';
      let strmajorName = '';

      for (let i = 0; i < arrvGroupPaperReadWriteObjLst.length; i++) {
        const strUpdUser = arrvGroupPaperReadWriteObjLst[i].updUser;

        const objUser = arrUsers.find((x) => x.userId == arrvGroupPaperReadWriteObjLst[i].updUser);
        if (objUser != null) {
          strUserName = objUser.userName;
          strcollegeName = objUser.collegeName;
          strmajorName = objUser.majorName;
        }

        strNum = arrvGroupPaperReadWriteObjLst[i].memo;

        cateid++;

        const objPaperReadWrite01 = arrvGroupPaperReadWrite01ObjLst.find(
          (x) => x.updUser == strUpdUser,
        );
        if (objPaperReadWrite01 != null) {
          strNum1 = parseInt(objPaperReadWrite01.memo);
        }

        const objPaperReadWrite02 = arrvGroupPaperReadWrite02ObjLst.find(
          (x) => x.updUser == strUpdUser,
        );
        if (objPaperReadWrite02 != null) {
          strNum2 = parseInt(objPaperReadWrite02.memo);
        }

        const objPaperReadWrite03 = arrvGroupPaperReadWrite03ObjLst.find(
          (x) => x.updUser == strUpdUser,
        );
        if (objPaperReadWrite03 != null) {
          strNum3 = parseInt(objPaperReadWrite03.memo);
        }

        const objPaperReadWrite04 = arrvGroupPaperReadWrite04ObjLst.find(
          (x) => x.updUser == strUpdUser,
        );
        if (objPaperReadWrite04 != null) {
          strNum4 = parseInt(objPaperReadWrite04.memo);
        }

        strhtml += `<tr><td><input type="checkbox" name="" lay-skin="primary"></td><td>${cateid}</td><td>${strUserName}</td><td>${strcollegeName}</td><td>${strmajorName}</td><td>${strNum}</td><td>${strNum1}</td><td>${strNum2}</td><td>${strNum3}</td><td>${strNum4}</td></tr>`;
      }
      //拼接；

      const tbody = GetTBodyObjInDivObj(divName, 'tbList');
      tbody.innerHTML = strhtml;

      console.log(strNum);
      let strJson;
      //不等于管理员
      if (GetInputValueInDivObj(objLayout, 'hidRoleId') != '00620001') {
        $('#div_Canvas1').show();
        const obj = `[${strNum},${strNum1},${strNum2},${strNum3},${strNum4}]`;
        strJson = eval(obj);
        Canvas1(strJson);
      } else {
        if (this.userId_q != '' && this.userId_q != '0') {
          $('#div_Canvas1').show();
          const obj = `[${strNum},${strNum1},${strNum2},${strNum3},${strNum4}]`;
          strJson = eval(obj);
          Canvas1(strJson);
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

  //绑定个性化论文列表
  //public async BindList_Statistics(arrvGroupPaperReadWriteObjLst: Array<clsvPaperReadWriteEN>, arrvGroupPaperReadWrite01ObjLst: Array<clsvPaperReadWriteEN>, arrvGroupPaperReadWrite02ObjLst: Array<clsvPaperReadWriteEN>, arrvGroupPaperReadWrite03ObjLst: Array<clsvPaperReadWriteEN>, arrvGroupPaperReadWrite04ObjLst: Array<clsvPaperReadWriteEN>) {
  //    try {
  //        strhtml = "";
  //        strIdCurrEduclscateid: number = 0;
  //        //$('#tbList tr').remove();

  //        for (let i = 0; i < arrvGroupPaperReadWriteObjLst.length; i++) {

  //            const strUpdUser= arrvGroupPaperReadWriteObjLst[i].updUser;
  //            strUserName: string = arrvGroupPaperReadWriteObjLst[i].userName;

  //            strIdCurrEduclsstrcollegeName: string = arrvGroupPaperReadWriteObjLst[i].collegeName;
  //            strIdCurrEduclsstrmajorName: string = arrvGroupPaperReadWriteObjLst[i].majorName;

  //            strNum: string = arrvGroupPaperReadWriteObjLst[i].memo;

  //            strNum1: number = 0;
  //            strNum2: number = 0;
  //            strNum3: number = 0;
  //            strNum4: number = 0;
  //            cateid++;

  //            const objPaperReadWrite01 = arrvGroupPaperReadWrite01ObjLst.find(x => x.updUser == strUpdUser);
  //            if (objPaperReadWrite01 != null) {
  //                strNum1 = parseInt(objPaperReadWrite01.memo);
  //            }

  //            const objPaperReadWrite02 = arrvGroupPaperReadWrite02ObjLst.find(x => x.updUser == strUpdUser);
  //            if (objPaperReadWrite02 != null) {
  //                strNum2 = parseInt(objPaperReadWrite02.memo);
  //            }

  //            const objPaperReadWrite03 = arrvGroupPaperReadWrite03ObjLst.find(x => x.updUser == strUpdUser);
  //            if (objPaperReadWrite03 != null) {
  //                strNum3 = parseInt(objPaperReadWrite03.memo);
  //            }

  //            const objPaperReadWrite04 = arrvGroupPaperReadWrite04ObjLst.find(x => x.updUser == strUpdUser);
  //            if (objPaperReadWrite04 != null) {
  //                strNum4 = parseInt(objPaperReadWrite04.memo);
  //            }

  //            strhtml += '<tr><td><input type="checkbox" name="" lay-skin="primary"></td><td>' + cateid + '</td><td>' + strUserName + '</td><td>' + strcollegeName + '</td><td>' + strmajorName + '</td><td>' + strNum + '</td><td>' + strNum1 + '</td><td>' + strNum2 + '</td><td>' + strNum3 + '</td><td>' + strNum4 + '</td></tr>';

  //        }
  //        //拼接；
  //        //$("#tbList").append(strhtml);
  //        $("#tbList1").html(strhtml);

  //        console.log("5");
  //    }
  //    catch (e:any) {
  //        console.error('catch(e)=');
  //        console.error(e);
  //        strIdCurrEduclsstrMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
  //        alert(strMsg);
  //    }
  //}

  public CombineCondition2(): string {
    const divLayout = this.getDivName(enumDivType.LayOut_01);

    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsvSysVoteEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsvSysVoteEN.con_UpdDate} < '${this.EndDate_q}'`;
      }

      //管理员
      if (GetInputValueInDivObj(divLayout, 'hidRoleId') == '00620001') {
        if (this.userId_q != '' && this.userId_q != '0') {
          strWhereCond += ` And ${clsvSysVoteEN.con_UpdUser} = '${this.userId_q}'`;
        }
      }
      //教师
      else if (GetInputValueInDivObj(divLayout, 'hidRoleId') == '00620002') {
        $('#td_UserId').hide();

        strWhereCond += Format(
          " and {0}='{1}'",
          clsvPaperReadWriteEN.con_IdCurrEduCls,
          strIdCurrEduCls,
        );
      }
      //学生
      else {
        $('#td_UserId').hide();
        strWhereCond += ` and updUser='${userStore.getUserId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  // 绑定论文统计数据

  public async BindGv_vPaper_Statistics() {
    const divLayout = this.getDivName(enumDivType.LayOut_01);
    const divName4Activetab = Paper_Statistics.vuebtn_Click('getDivNameByActiveTabId', '');
    const divName = GetDivObjInDivObj(divLayout, divName4Activetab);
    if (divName == null) return;

    const strCon_Paper = this.CombineCondition_Paper();
    const strCon2 = this.CombineCondition2();

    try {
      const arrPaperExObjLst = await PaperEx_GetUserNumObjLstAsync(strCon_Paper);

      console.log('2-1');

      const strVote = `${strCon2} And voteTypeId ='01' `; //论文
      const arrvSysVoteObjLst = await vSysVote_GetObjLstAsync(strVote);
      console.log('2-2');

      const strComment = `${strCon2} And commentTypeId ='01' `; //论文
      const arrvSysCommentObjLst = await vSysComment_GetObjLstAsync(strComment);
      console.log('2-3');

      let strhtml = '';
      let cateid = 0;

      let strNum;
      let strOkCount;
      let strAppraiseCount;
      let strNum1 = 0;
      let strNum2 = 0;

      for (let i = 0; i < arrPaperExObjLst.length; i++) {
        const objPaperEx = arrPaperExObjLst[i];

        const strUpdUser = objPaperEx.updUser;
        const strUserName = await vQxUsersSimStore.getUserName(objPaperEx.updUser);

        strNum = objPaperEx.memo;
        strOkCount = objPaperEx.okCount;
        strAppraiseCount = objPaperEx.appraiseCount;

        cateid++;

        //点赞
        let arrVoteObjLst: Array<clsvSysVoteEN> = [];

        arrVoteObjLst = arrvSysVoteObjLst.filter((x) => x.updUser == strUpdUser);
        if (arrVoteObjLst.length > 0) {
          strNum1 = parseInt(arrVoteObjLst.length.toString());
        } else {
          strNum1 = 0;
        }
        //if (objvPaperLikeLog != null) {
        //    strNum1 = parseInt(objvPaperLikeLog.memo);
        //}
        //评论
        let arrCommentObjLst: Array<clsvSysCommentEN> = [];

        arrCommentObjLst = arrvSysCommentObjLst.filter((x) => x.updUser == strUpdUser);
        if (arrCommentObjLst.length > 0) {
          strNum2 = parseInt(arrCommentObjLst.length.toString());
        } else {
          strNum2 = 0;
        }
        strhtml += `<tr><td><input type="checkbox" name="" lay-skin="primary"></td><td>${cateid}</td><td>${strUserName}</td><td>${strNum}</td><td>${strOkCount}</td><td>${strAppraiseCount}</td><td>${strNum1}</td><td>${strNum2}</td></tr>`;
      }
      //拼接；

      const tbody = GetTBodyObjInDivObj(divName, 'tbList');
      tbody.innerHTML = strhtml;

      console.log('2-4');
      let strJson;
      //不等于管理员
      if (GetInputValueInDivObj(divLayout, 'hidRoleId') != '00620001') {
        $('#div_Canvas2').show();
        const obj = `[${strNum},${strOkCount},${strAppraiseCount},${strNum1},${strNum2}]`;
        strJson = eval(obj);
        Canvas2(strJson);
      } else {
        if (this.userId_q != '' && this.userId_q != '0') {
          $('#div_Canvas2').show();
          const obj = `[${strNum},${strOkCount},${strAppraiseCount},${strNum1},${strNum2}]`;
          strJson = eval(obj);
          Canvas2(strJson);
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

  //绑定子观点统计数据
  public async BindGv_vPaperSubViewpoint_Statistics() {
    const divLayout = this.getDivName(enumDivType.LayOut_01);
    const divName4Activetab = Paper_Statistics.vuebtn_Click('getDivNameByActiveTabId', '');
    const divName = GetDivObjInDivObj(divLayout, divName4Activetab);
    if (divName == null) return;

    const strCon1 = this.CombineCondition1();
    const strCon2 = this.CombineCondition2();

    let arrvPaperSubViewpointObjLst: Array<clsvPaperSubViewpointEN> = [];

    //点赞
    let arrvSysVoteObjLst: Array<clsvSysVoteEN> = [];
    //评论
    let arrvSysCommentObjLst: Array<clsvSysCommentEN> = [];

    try {
      arrvPaperSubViewpointObjLst = await vPaperSubViewpointEx_GetSubViewpointNumObjLstAsync(
        strCon1,
      );
      console.log('3-1');

      const strVote = `${strCon2} And voteTypeId ='02' `; //论文
      arrvSysVoteObjLst = await vSysVote_GetObjLstAsync(strVote);
      console.log('2-2');

      const strComment = `${strCon2} And commentTypeId ='02' `; //论文
      arrvSysCommentObjLst = await vSysComment_GetObjLstAsync(strComment);
      console.log('2-3');

      let strhtml = '';
      let cateid = 0;

      let strNum;
      let strOkCount;
      let strAppraiseCount;
      let strNum1 = 0;
      let strNum2 = 0;

      for (let i = 0; i < arrvPaperSubViewpointObjLst.length; i++) {
        const strUpdUser = arrvPaperSubViewpointObjLst[i].updUser;
        const strUserName = await vQxUsersSimStore.getUserName(
          arrvPaperSubViewpointObjLst[i].updUser,
        );

        strNum = arrvPaperSubViewpointObjLst[i].memo;
        strOkCount = arrvPaperSubViewpointObjLst[i].okCount;
        strAppraiseCount = arrvPaperSubViewpointObjLst[i].appraiseCount;

        cateid++;
        //const objvPaperSubViewpointLikeLog = arrvPaperSubViewpointLikeLogObjLst.find(x => x.updUser == strUpdUser);
        //if (objvPaperSubViewpointLikeLog != null) {
        //    strNum1 = parseInt(objvPaperSubViewpointLikeLog.memo);
        //}

        //const objvPaperSubViewpointAppraise = arrvPaperSubViewpointAppraiseObjLst.find(x => x.updUser == strUpdUser);
        //if (objvPaperSubViewpointAppraise != null) {
        //    strNum2 = parseInt(objvPaperSubViewpointAppraise.meno);
        //}

        //点赞
        let arrVoteObjLst: Array<clsvSysVoteEN> = [];

        arrVoteObjLst = arrvSysVoteObjLst.filter((x) => x.updUser == strUpdUser);
        if (arrVoteObjLst.length > 0) {
          strNum1 = parseInt(arrVoteObjLst.length.toString());
        } else {
          strNum1 = 0;
        }
        //if (objvPaperLikeLog != null) {
        //    strNum1 = parseInt(objvPaperLikeLog.memo);
        //}
        //评论
        let arrCommentObjLst: Array<clsvSysCommentEN> = [];

        arrCommentObjLst = arrvSysCommentObjLst.filter((x) => x.updUser == strUpdUser);
        if (arrCommentObjLst.length > 0) {
          strNum2 = parseInt(arrCommentObjLst.length.toString());
        } else {
          strNum2 = 0;
        }

        strhtml += `<tr><td><input type="checkbox" name="" lay-skin="primary"></td><td>${cateid}</td><td>${strUserName}</td><td>${strNum}</td><td>${strOkCount}</td><td>${strAppraiseCount}</td><td>${strNum1}</td><td>${strNum2}</td></tr>`;
      }
      //拼接；
      const tbody = GetTBodyObjInDivObj(divName, 'tbList');
      tbody.innerHTML = strhtml;

      console.log('3-4');
      let strJson;
      //不等于管理员
      if (GetInputValueInDivObj(divLayout, 'hidRoleId') != '00620001') {
        $('#div_Canvas3').show();
        const obj = `[${strNum},${strOkCount},${strAppraiseCount},${strNum1},${strNum2}]`;
        strJson = eval(obj);
        Canvas3(strJson);
      } else {
        if (this.userId_q != '' && this.userId_q != '0') {
          $('#div_Canvas3').show();
          const obj = `[${strNum},${strOkCount},${strAppraiseCount},${strNum1},${strNum2}]`;
          strJson = eval(obj);
          Canvas3(strJson);
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
        divName = Paper_Statistics.divLayout;
        divTypeName = 'divLayout';
        break;
      case enumDivType.Query_02:
        divName = Paper_Statistics.divQuery;
        divTypeName = 'divQuery';
        break;
      case enumDivType.Function_03:
        divName = Paper_Statistics.divFunction;
        divTypeName = 'divFunction';
        break;
      case enumDivType.DataList_04:
        divName = Paper_Statistics.divDataLst;
        divTypeName = 'divDataLst';
        break;
      case enumDivType.List_05:
        divName = Paper_Statistics.divList;
        divTypeName = 'divList';
        break;
      case enumDivType.Paper_06:
        divName = Paper_Statistics.divPager;
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
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: Paper_Statistics;
    objPage = new Paper_Statistics();
    switch (strCommandName) {
      case 'changeTab':
        objPage.ChangeTab(strKeyId);
        break;
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
  public async ChangeTab(strTabId: string): Promise<boolean> {
    // alert(strTabId);
    let strMsg;
    switch (strTabId) {
      case 'PaperReadWriteStatistics': // '小组成员' },
        await this.liPaperReadWriteStatistics_Click();
        break;
      case 'PaperStatistics': //, label: '计划' },
        await this.liPaperStatistics_Click();
        break;
      case 'PaperSubViewpointStatistics': //, label: '计划' },
        await this.liPaperSubViewpointStatistics_Click();
        break;

      default:
        strMsg = `Tab类型:${strTabId}在函数(function ChangeTab in SysCommentCRUDEx)中没有被处理！`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
    return true;
  }
}
