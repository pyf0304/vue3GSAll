import $ from 'jquery';
import { SysCommentCRUD } from '@/viewsBase/GradEduTools/SysCommentCRUD';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsSysCommentEN';
import { clsvSysCommentEN } from '@/ts/L0Entity/GradEduTools/clsvSysCommentEN';
import { clsConceptEN } from '@/ts/L0Entity/GradEduTopic/clsConceptEN';
import { clsTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsTopicObjectiveEN';
import { clsvConceptEN } from '@/ts/L0Entity/GradEduTopic/clsvConceptEN';
import { clsViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointEN';
import { clsvTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN';
import { clsvViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvViewpointEN';
import { Paper_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { vPaperSubViewpoint_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import {
  SysComment_DelRecordAsync,
  SysComment_GetFirstObjAsync,
  SysComment_GetObjByCommentIdAsync,
} from '@/ts/L3ForWApi/GradEduTools/clsSysCommentWApi';
import {
  vSysComment_GetObjLstByPagerAsync,
  vSysComment_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTools/clsvSysCommentWApi';
import { vConcept_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvConceptWApi';
import { vTopicObjective_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvTopicObjectiveWApi';
import { vViewpoint_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvViewpointWApi';
import { GetCurrPageIndex, ShowEmptyRecNumInfo } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetDivObjInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  GetTBodyObjInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { SysComment_EditEx } from '@/views/GradEduTools/SysComment_EditEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import enumCommentType from '@/ts/FunClass/enumCommentType';

import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare let window: any;
/* SysCommentCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class SysCommentCRUDEx extends SysCommentCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => string;
  public static GetPropValue: (strPropName: string) => string;
  // public static arrDivName4Pager = [
  //   'divPager_PaperComment',
  //   'divPager_PaperSubViewpointComment',
  //   'divPager_ViewpointComment',
  //   'divPager_ExpertViewpointComment',
  //   'divPager_ConceptComment',
  //   'divPager_ObjectiveFactComment',
  //   'divPager_ObjectiveBasisComment',
  // ];
  public static arrDivDataLst = [
    'divDataLst_PaperComment',
    'divDataLst_PaperSubViewpointComment',
    'divDataLst_ViewpointComment',
    'divDataLst_ExpertViewpointComment',
    'divDataLst_ConceptComment',
    'divDataLst_ObjectiveFactComment',
    'divDataLst_ObjectiveBasisComment',
  ];

  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvSysCommentBy: string = "commentId";
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
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_vSysComment]!${strType}${strPara}`);
    //this.BindGv_vSysCommentCache();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'vSysComment':
        this.BindGv_vSysCommentCache(this.divList);
        break;
      default:
        AccessBindGvDefault(strType);
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
      //建立缓存
      //
      //const arrvSysComment_Cache = await vSysComment_GetObjLstAsync("1=1");
      if (userStore.getUserId != '') {
        SysCommentCRUD.sortvSysCommentBy = 'updDate Desc';
        //strWhereCond = await this.CombinevSysCommentCondition();
        //const responseText = await vSysComment_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {
        const myTabContent = GetDivObjInDivObj(objLayOut, 'myTabContent');
        //});
        // if (this.bolIsInitShow == false) {
        //   //
        //   for (let i = 0; i < 7; i++) {
        //     this.objPager.InitShow(myTabContent, SysCommentCRUDEx.arrDivName4Pager[i]);
        //   }
        //   this.bolIsInitShow = true; //
        // }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vSysComment();

        $('#hidUserId').val(userStore.getUserId);
        // HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 查询
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async btnQuery_Click() {
    try {
      this.BindGv_vSysComment();
      //if ($("#hidQueryStata").val() == "1") {
      //    const gvResult1 = await this.BindGv_PaperComment();
      //} else if ($("#hidQueryStata").val() == "2") {
      //    const gvResult2 = await this.BindGv_PaperSubViewpointComment();
      //} else if ($("#hidQueryStata").val() == "3") {
      //    const gvResult3 = await this.BindGv_ViewpointComment();
      //} else if ($("#hidQueryStata").val() == "4") {
      //    const gvResult3 = await this.BindGv_ViewpointComment();
      //} else if ($("#hidQueryStata").val() == "5") {
      //    const gvResult3 = await this.BindGv_ViewpointComment();
      //} else if ($("#hidQueryStata").val() == "6") {
      //    const gvResult3 = await this.BindGv_ViewpointComment();
      //}
      //else {
      //    const gvResult4 = await this.BindGv_DiscussionTopicsComment();
      //}
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 论文评论
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async li_PaperComment_Click(strListDiv: string) {
    console.log(strListDiv);
    try {
      await this.BindGv_vSysComment();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 论文子观点评论
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async li_PaperSubViewpointComment_Click(strListDiv: string) {
    console.log(strListDiv);
    try {
      await this.BindGv_vSysComment();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 个人观点评论
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async li_ViewpointComment_Click(strListDiv: string) {
    console.log(strListDiv);
    try {
      await this.BindGv_vSysComment();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*
专家观点评论
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
*/
  public async li_ExpertViewpointComment_Click(strListDiv: string) {
    console.log(strListDiv);
    try {
      await this.BindGv_vSysComment();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*
    概念评论
    (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
    */
  public async li_ConceptComment_Click(strListDiv: string) {
    console.log(strListDiv);
    try {
      await this.BindGv_vSysComment();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*
    客观事实评论
    (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
    */
  public async li_ObjectiveFactComment_Click(strListDiv: string) {
    console.log(strListDiv);
    try {
      await this.BindGv_vSysComment();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /*
    客观数据评论
    (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
    */
  public async li_ObjectiveBasisComment_Click(strListDiv: string) {
    console.log(strListDiv);
    try {
      await this.BindGv_vSysComment();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //查询条件
  /* 
     <returns>论文条件串(strWhereCond)</returns>
   */
  public async CombinevSysCommentCondition1(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //获取用户缓存数据

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    let strUserId = this.userId_q;
    //   const strUserName = await vQxUsersSimStore.getUserName( this.userId_q);
    // if (objUser != null) {
    //   strUserId = objUser.userId;
    // }
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.userId_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdUser} = '${strUserId}'`;
      }
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdDate} < '${this.EndDate_q}'`;
      }
      if (this.scoreType != '' && this.scoreType != '0') {
        strWhereCond += ` And ${clsvSysCommentEN.con_ScoreType} = '${this.scoreType}'`;
      }
      //查询论文；
      strWhereCond += ` And ${clsvSysCommentEN.con_CommentTypeId} = '01'`;

      const strRoleId = userStore.getRoleId;

      //判断角色
      //管理员
      if (strRoleId == '00620002' || strRoleId == '00620001') {
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        strWhereCond += `And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='${strUserId}' And isEffective='1') And isEffective='1')`;
      } else {
        //学生；
        strUserId = userStore.getUserId;
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdUser} = '${strUserId}'`;
      }
      $('#hidUserId').val(strUserId);
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysCommentCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 
    <returns>论文子观点条件串(strWhereCond)</returns>
  */
  public async CombinevSysCommentCondition2(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //获取用户缓存数据

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    let strUserId = this.userId_q;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.userId_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdUser} = '${strUserId}'`;
      }
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdDate} < '${this.EndDate_q}'`;
      }
      if (this.scoreType != '' && this.scoreType != '0') {
        strWhereCond += ` And ${clsvSysCommentEN.con_ScoreType} = '${this.scoreType}'`;
      }
      //查询论文子观点；
      strWhereCond += ` And ${clsvSysCommentEN.con_CommentTypeId} = '02'`;

      strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;
      //判断角色
      //管理员
      if (strRoleId == '00620002' || strRoleId == '00620001') {
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        strWhereCond += `And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='${strUserId}' And isEffective='1') And isEffective='1')`;
      } else {
        //学生；
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdUser} = '${strUserId}'`;
      }
      $('#hidUserId').val(strUserId);
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysCommentCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 
   <returns>个人观点条件串(strWhereCond)</returns>
 */
  public async CombinevSysCommentCondition3(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //获取用户缓存数据

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    let strUserId = this.userId_q;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.userId_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdUser} = '${strUserId}'`;
      }
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdDate} < '${this.EndDate_q}'`;
      }
      if (this.scoreType != '' && this.scoreType != '0') {
        strWhereCond += ` And ${clsvSysCommentEN.con_ScoreType} = '${this.scoreType}'`;
      }
      //查询个人观点；
      strWhereCond += ` And ${clsvSysCommentEN.con_CommentTypeId} = '03'`;
      //同时查询观点类型是个人的
      strWhereCond += ` And tableKey in (select viewpointId from Viewpoint where userTypeId='01')`;

      strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;
      //判断角色
      //管理员
      if (strRoleId == '00620002' || strRoleId == '00620001') {
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        strWhereCond += `And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='${strUserId}' And isEffective='1') And isEffective='1')`;
      } else {
        //学生；
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdUser} = '${strUserId}'`;
      }
      $('#hidUserId').val(strUserId);
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysCommentCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 
  <returns>专家观点条件串(strWhereCond)</returns>
*/
  public async CombinevSysCommentCondition4(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //获取用户缓存数据

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    let strUserId = this.userId_q;

    try {
      if (this.userId_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdUser} = '${strUserId}'`;
      }
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdDate} < '${this.EndDate_q}'`;
      }
      if (this.scoreType != '' && this.scoreType != '0') {
        strWhereCond += ` And ${clsvSysCommentEN.con_ScoreType} = '${this.scoreType}'`;
      }
      //查询专家观点；
      strWhereCond += ` And ${clsvSysCommentEN.con_CommentTypeId} = '04'`;
      //同时查询观点类型是专家的
      strWhereCond += ` And tableKey in (select viewpointId from Viewpoint where userTypeId='02')`;

      strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色
      //管理员
      if (strRoleId == '00620002' || strRoleId == '00620001') {
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        strWhereCond += `And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='${strUserId}' And isEffective='1') And isEffective='1')`;
      } else {
        //学生；
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdUser} = '${strUserId}'`;
      }
      $('#hidUserId').val(strUserId);
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysCommentCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 
 <returns>概念条件串(strWhereCond)</returns>
*/
  public async CombinevSysCommentCondition5(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //获取用户缓存数据

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    let strUserId = this.userId_q;

    try {
      if (this.userId_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdUser} = '${strUserId}'`;
      }
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdDate} < '${this.EndDate_q}'`;
      }
      if (this.scoreType != '' && this.scoreType != '0') {
        strWhereCond += ` And ${clsvSysCommentEN.con_ScoreType} = '${this.scoreType}'`;
      }
      //查询概念；
      strWhereCond += ` And ${clsvSysCommentEN.con_CommentTypeId} = '05'`;

      strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色
      //管理员
      if (strRoleId == '00620002' || strRoleId == '00620001') {
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        strWhereCond += `And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='${strUserId}' And isEffective='1') And isEffective='1')`;
      } else {
        //学生；
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdUser} = '${strUserId}'`;
      }
      $('#hidUserId').val(strUserId);
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysCommentCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 
<returns>客观事实条件串(strWhereCond)</returns>
*/
  public async CombinevSysCommentCondition6(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //获取用户缓存数据

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    let strUserId = this.userId_q;

    try {
      if (this.userId_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdUser} = '${strUserId}'`;
      }
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdDate} < '${this.EndDate_q}'`;
      }
      if (this.scoreType != '' && this.scoreType != '0') {
        strWhereCond += ` And ${clsvSysCommentEN.con_ScoreType} = '${this.scoreType}'`;
      }
      //查询客观事实；
      strWhereCond += ` And ${clsvSysCommentEN.con_CommentTypeId} = '06'`;
      strWhereCond += ` And tableKey in (select topicObjectiveId from TopicObjective where objectiveType = '01')`;

      strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色
      //管理员
      if (strRoleId == '00620002' || strRoleId == '00620001') {
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        strWhereCond += `And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='${strUserId}' And isEffective='1') And isEffective='1')`;
      } else {
        //学生；
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdUser} = '${strUserId}'`;
      }
      $('#hidUserId').val(strUserId);
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysCommentCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 
<returns>客观数据条件串(strWhereCond)</returns>
*/
  public async CombinevSysCommentCondition7(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //获取用户缓存数据

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    let strUserId = this.userId_q;
    try {
      if (this.userId_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdUser} = '${strUserId}'`;
      }
      if (this.StartDate_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdDate} > '${this.StartDate_q}'`;
      }
      if (this.EndDate_q != '') {
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdDate} < '${this.EndDate_q}'`;
      }
      if (this.scoreType != '' && this.scoreType != '0') {
        strWhereCond += ` And ${clsvSysCommentEN.con_ScoreType} = '${this.scoreType}'`;
      }
      //查询数据事实；
      strWhereCond += ` And ${clsvSysCommentEN.con_CommentTypeId} = '07'`;
      strWhereCond += ` And tableKey in (select topicObjectiveId from TopicObjective where objectiveType = '02')`;

      strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色
      //管理员
      if (strRoleId == '00620002' || strRoleId == '00620001') {
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        strWhereCond += `And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='${strUserId}' And isEffective='1') And isEffective='1')`;
      } else {
        //学生；
        strWhereCond += ` And ${clsvSysCommentEN.con_UpdUser} = '${strUserId}'`;
      }
      $('#hidUserId').val(strUserId);
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysCommentCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   */
  public async BindGv_vSysComment() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName4Activetab = SysCommentCRUDEx.vuebtn_Click('getDivNameByActiveTabId', '');
    const divName = GetDivObjInDivObj(objLayOut, divName4Activetab);
    if (divName == null) return;
    //strIdCurrEduclsstrListDiv: string = this.mstrListDiv;
    let strWhereCond: string;

    let arrPaperObjLst: Array<clsPaperEN> = []; //论文
    let arrPaperSubviewpointObjLst: Array<clsvPaperSubViewpointEN> = []; //论文子观点；
    let arrViewPointObjLst: Array<clsvViewpointEN> = []; //主题观点、个人；
    let arrExpertViewPointObjLst: Array<clsvViewpointEN> = []; //主题观点、专家；
    let arrConceptObjLst: Array<clsvConceptEN> = []; //主题概念；
    let arrTopicObjectiveFactObjLst: Array<clsvTopicObjectiveEN> = []; //主题客观、事实；
    let arrTopicObjectiveBasisObjLst: Array<clsvTopicObjectiveEN> = []; //主题客观、数据；
    let intRecNum = 0;
    let strWhere = ` 1=1 `;
    const activeTabId = SysCommentCRUDEx.GetPropValue('activeTabId');
    let intQueryStata = 0;
    switch (activeTabId) {
      case enumCommentType.PaperComment:
        strWhereCond = await this.CombinevSysCommentCondition1();
        //获取论文数据源; 必须是提交论文
        strWhere = ` 1=1 And ${clsPaperEN.con_IsSubmit} = 'true'`;
        arrPaperObjLst = await Paper_GetObjLstAsync(strWhere);
        intRecNum = arrPaperObjLst.length;
        break;
      case enumCommentType.PaperSubViewpointComment:
        intQueryStata = 1;
        strWhereCond = await this.CombinevSysCommentCondition2();

        //获取论文子观点; 必须是提交论文

        arrPaperSubviewpointObjLst = await vPaperSubViewpoint_GetObjLstAsync(strWhere);
        intRecNum = arrPaperSubviewpointObjLst.length;
        break;
      case enumCommentType.ViewpointComment:
        intQueryStata = 2;
        strWhereCond = await this.CombinevSysCommentCondition3();
        //获取主题个人观点 必须是提交
        strWhere = ` 1=1 And ${clsViewpointEN.con_UserTypeId} ='01' And ${clsViewpointEN.con_IsSubmit} = 'true'`;
        arrViewPointObjLst = await vViewpoint_GetObjLstAsync(strWhere);
        intRecNum = arrViewPointObjLst.length;
        break;
      case enumCommentType.ExpertViewpointComment:
        intQueryStata = 3;
        strWhereCond = await this.CombinevSysCommentCondition4();
        //获取主题专家观点 必须是提交
        strWhere = ` 1=1 And ${clsViewpointEN.con_UserTypeId} ='02' And ${clsViewpointEN.con_IsSubmit} = 'true'`;
        arrExpertViewPointObjLst = await vViewpoint_GetObjLstAsync(strWhere);
        intRecNum = arrExpertViewPointObjLst.length;
        break;
      case enumCommentType.ConceptComment:
        intQueryStata = 4;
        strWhereCond = await this.CombinevSysCommentCondition5();
        //获取主题概念
        strWhere = ` 1=1 And ${clsConceptEN.con_IsSubmit} = 'true'`;
        arrConceptObjLst = await vConcept_GetObjLstAsync(strWhere);
        intRecNum = arrConceptObjLst.length;
        break;
      case enumCommentType.ObjectiveBasisComment:
        intQueryStata = 5;
        strWhereCond = await this.CombinevSysCommentCondition6();
        //获取客观事实
        strWhere = ` 1=1 And ${clsTopicObjectiveEN.con_ObjectiveType} = '01' And ${clsTopicObjectiveEN.con_IsSubmit} = 'true'`;
        arrTopicObjectiveFactObjLst = await vTopicObjective_GetObjLstAsync(strWhere);
        intRecNum = arrTopicObjectiveFactObjLst.length;
        break;
      default:
        intQueryStata = 6;
        strWhereCond = await this.CombinevSysCommentCondition7();
        //获取客观数据
        strWhere = ` 1=1 And ${clsTopicObjectiveEN.con_ObjectiveType} = '02' And ${clsTopicObjectiveEN.con_IsSubmit} = 'true'`;
        arrTopicObjectiveBasisObjLst = await vTopicObjective_GetObjLstAsync(strWhere);
        intRecNum = arrTopicObjectiveBasisObjLst.length;
        break;
    }
    console.log(intRecNum);
    //if (intRecNum == 0) {

    //    const strMsg = Format("根据条件获取的记录数为0！");
    //    console.error("Error: ", strMsg);
    //    //console.trace();
    //    this.ShowEmptyRecNumInfo(SysCommentCRUDEx.arrDivDataLst[intQueryStata], strMsg);
    //    this.objPager.Hide(SysCommentCRUDEx.arrDivName4Pager[intQueryStata]);
    //    return;
    //}
    //根节点
    let ParentarrvSysCommentObjLst: Array<clsvSysCommentEN> = [];
    //获取不是父节点的所有子节点数据
    let NotParentarrvSysCommentObjLst: Array<clsvSysCommentEN> = [];
    //父节点下子节点
    let ChildarrvSysCommentObjLst: Array<clsvSysCommentEN> = [];
    //用来获取排除父节点下子节点的剩余数据；
    let RemainDatavSysCommentObjLst: Array<clsvSysCommentEN> = [];

    //intCurrPageIndex = this.getCurrPageIndex(SysCommentCRUDEx.arrDivName4Pager[intQueryStata]);//获取当前页
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvSysCommentObjLst: Array<clsvSysCommentEN> = [];
    try {
      this.recCount = await vSysComment_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: SysCommentCRUD.sortvSysCommentBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvSysCommentObjLst = await vSysComment_GetObjLstByPagerAsync(objPagerPara);

      let strhtml = '';
      let cateid = 0;
      let cateid_ = 0;

      //获取父节点
      ParentarrvSysCommentObjLst = arrvSysCommentObjLst.filter((x) => x.parentId == 'root');
      //获取不是父节点数据；
      NotParentarrvSysCommentObjLst = arrvSysCommentObjLst.filter((x) => x.parentId != 'root');
      //先把不是父节点数据赋值给剩余数据，用于数据的每次筛选；
      RemainDatavSysCommentObjLst = NotParentarrvSysCommentObjLst;

      if (ParentarrvSysCommentObjLst.length > 0) {
        //得到数据源循环数据
        for (let i = 0; i < ParentarrvSysCommentObjLst.length; i++) {
          cateid++;
          // intJ++;
          const fid = 0;
          //评论内容；
          const strCommentContent = ParentarrvSysCommentObjLst[i].comment;
          //获取主键作为父节点
          const strParentId = ParentarrvSysCommentObjLst[i].commentId;

          //读取子节点 从不是父节点的数据中读取，这样可以减少资源浪费；strParentId 主键作为父节点
          //ChildarrvSysCommentObjLst = arrvSysCommentObjLst.filter(x => x.parentId == strParentId);
          ChildarrvSysCommentObjLst = NotParentarrvSysCommentObjLst.filter(
            (x) => x.parentId == strParentId,
          );
          //先把不是root数据源赋值给剩余数据；每次筛选除开父节点的数据；过滤自身数据
          RemainDatavSysCommentObjLst = RemainDatavSysCommentObjLst.filter(
            (x) => x.parentId != strParentId,
          );

          strhtml += `<tr cate-id="${cateid}" fid="${fid}"><td>`;
          strhtml += `<i class="layui-icon x-show" status="true"></i>${strCommentContent}</td>`;
          //打分
          strhtml += `<td>${ParentarrvSysCommentObjLst[i].score}</td>`;

          //评分类型
          if (ParentarrvSysCommentObjLst[i].scoreType == '1') {
            const strStu = '学生';
            strhtml += `<td>${strStu}</td>`;
          } else {
            const strTeach = '教师';
            strhtml += `<td>${strTeach}</td>`;
          }
          //获取tablekey查询过滤；
          const strTablekey = ParentarrvSysCommentObjLst[i].tableKey;
          let pubarrPaperObjLst;
          let pubarrPaperSubviewpointObjLst;
          let pubarrViewPointObjLst;
          let pubarrExpertViewPointObjLst;
          let pubarrConceptObjLst;
          let pubarrTopicObjectiveFactObjLst;
          let pubarrTopicObjectiveBasisObjLst;

          //根据不同的模块查询 比对得到不同的名称和被评论人；
          switch (activeTabId) {
            case enumCommentType.PaperComment:
              pubarrPaperObjLst = arrPaperObjLst.filter((x) => x.paperId == strTablekey);

              for (const item of pubarrPaperObjLst) {
                console.log(item.paperTitle);
                //名称
                strhtml += `<td>${item.paperTitle}</td>`;
                const strUserName = await vQxUsersSimStore.getUserName(item.updUser);

                //被评论人
                strhtml += `<td>${strUserName}</td>`;
              }

              break;
            case enumCommentType.PaperSubViewpointComment:
              intQueryStata = 1;
              pubarrPaperSubviewpointObjLst = arrPaperSubviewpointObjLst.filter(
                (x) => x.subViewpointId.toString() == strTablekey,
              );

              for (const item of pubarrPaperSubviewpointObjLst) {
                console.log(item.subViewpointContent);
                //名称
                strhtml += `<td>${item.subViewpointContent}</td>`;
                //被评论人
                const strUserName = await vQxUsersSimStore.getUserName(item.updUser);

                strhtml += `<td>${strUserName}</td>`;
              }
              break;
            case enumCommentType.ViewpointComment:
              intQueryStata = 2;
              pubarrViewPointObjLst = arrViewPointObjLst.filter(
                (x) => x.viewpointId == strTablekey,
              );

              for (const item of pubarrViewPointObjLst) {
                console.log(item.viewpointName);
                //名称
                strhtml += `<td>${item.viewpointName}</td>`;
                const strUserName = await vQxUsersSimStore.getUserName(item.updUser);

                strhtml += `<td>${strUserName}</td>`;
              }
              break;
            case enumCommentType.ExpertViewpointComment:
              intQueryStata = 3;
              pubarrExpertViewPointObjLst = arrExpertViewPointObjLst.filter(
                (x) => x.viewpointId == strTablekey,
              );

              for (const item of pubarrExpertViewPointObjLst) {
                console.log(item.viewpointName);
                //名称
                strhtml += `<td>${item.viewpointName}</td>`;

                const strUserName = await vQxUsersSimStore.getUserName(item.updUser);

                strhtml += `<td>${strUserName}</td>`;
              }
              break;
            case enumCommentType.ConceptComment:
              intQueryStata = 4;
              pubarrConceptObjLst = arrConceptObjLst.filter((x) => x.conceptId == strTablekey);

              for (const item of pubarrConceptObjLst) {
                console.log(item.conceptName);
                //名称
                strhtml += `<td>${item.conceptName}</td>`;

                const strUserName = await vQxUsersSimStore.getUserName(item.updUser);

                strhtml += `<td>${strUserName}</td>`;

                //被评论人
                //  strhtml += '<td>' + item.userName + '</td>';
              }
              break;
            case enumCommentType.ObjectiveBasisComment:
              intQueryStata = 5;
              pubarrTopicObjectiveFactObjLst = arrTopicObjectiveFactObjLst.filter(
                (x) => x.topicObjectiveId == strTablekey,
              );

              for (const item of pubarrTopicObjectiveFactObjLst) {
                console.log(item.objectiveName);
                //名称
                strhtml += `<td>${item.objectiveName}</td>`;

                const strUserName = await vQxUsersSimStore.getUserName(item.updUser);

                strhtml += `<td>${strUserName}</td>`;
              }
              break;
            default:
              intQueryStata = 6;
              pubarrTopicObjectiveBasisObjLst = arrTopicObjectiveBasisObjLst.filter(
                (x) => x.topicObjectiveId == strTablekey,
              );

              for (const item of pubarrTopicObjectiveBasisObjLst) {
                // console.log(item.objectiveName);
                //名称
                strhtml += `<td>${item.objectiveName}</td>`;

                const strUserName = await vQxUsersSimStore.getUserName(item.updUser);

                strhtml += `<td>${strUserName}</td>`;
              }
              break;
          }

          //评论时间
          strhtml += `<td>${ParentarrvSysCommentObjLst[i].updDate}</td>`;

          const strUserName = await vQxUsersSimStore.getUserName(
            ParentarrvSysCommentObjLst[i].updUser,
          );

          strhtml += `<td>${strUserName}</td>`;

          //回复数
          ///评论人
          if (ChildarrvSysCommentObjLst.length > 0) {
            strhtml += `<td>${ChildarrvSysCommentObjLst.length}</td>`;
          } else {
            strhtml += '<td>0</td>';
          }

          //删除
          strhtml += `<td class="td-manage"><button class="layui-btn-danger layui-btn layui-btn-xs" onclick=btnDelSysComment("${ParentarrvSysCommentObjLst[i].commentId}") href = "javascript:;" > <i class="layui-icon" ></i>删除</button ></td>`;
          //结束
          strhtml += '</tr>';

          //父节点转化
          cateid_ = cateid;

          //子数据
          if (ChildarrvSysCommentObjLst.length > 0) {
            for (let j = 0; j < ChildarrvSysCommentObjLst.length; j++) {
              cateid++;
              strhtml += `<tr cate-id="${cateid}" fid="${cateid_}" style="display:none;"><td>`;
              //strhtml += '<i class="layui-icon x-show" status = "true" ></i>' + ChildarrvSysCommentObjLst[j].comment + '</td>';
              strhtml += `${ChildarrvSysCommentObjLst[j].comment}</td>`;
              //打分
              strhtml += `<td>${ChildarrvSysCommentObjLst[j].score}</td>`;

              //评分类型
              if (ChildarrvSysCommentObjLst[j].scoreType == '1') {
                const strStu = '学生';
                strhtml += `<td>${strStu}</td>`;
              } else {
                const strTeach = '教师';
                strhtml += `<td>${strTeach}</td>`;
              }

              //名称
              strhtml += '<td></td>';
              //被评论人
              strhtml += '<td></td>';

              //评论时间
              strhtml += `<td>${ChildarrvSysCommentObjLst[j].updDate}</td>`;

              const strUserName = await vQxUsersSimStore.getUserName(
                ChildarrvSysCommentObjLst[j].updUser,
              );

              strhtml += `<td>${strUserName}</td>`;
              //回复数
              strhtml += '<td></td>';
              //删除
              strhtml += `<td class="td-manage"><button class="layui-btn-danger layui-btn layui-btn-xs" onclick=btnDelSysComment("${ChildarrvSysCommentObjLst[j].commentId}") href = "javascript:;" > <i class="layui-icon" ></i>删除</button ></td>`;

              //结束

              strhtml += '</tr>';
            }
          }
        }
      } else {
        //如果剩余数据大于0 ，那么则绑定；
        if (RemainDatavSysCommentObjLst.length > 0) {
          for (let j = 0; j < RemainDatavSysCommentObjLst.length; j++) {
            cateid++;
            strhtml += `<tr cate-id="${cateid}" fid="${cateid_}"><td>`; //这里就不用隐藏显示了，因为没有root根数据；
            //strhtml += '<i class="layui-icon x-show" status = "true" ></i>' + RemainDatavSysCommentObjLst[j].comment + '</td>';
            strhtml += `${RemainDatavSysCommentObjLst[j].comment}</td>`;
            //打分
            strhtml += `<td>${RemainDatavSysCommentObjLst[j].score}</td>`;

            //评分类型
            if (RemainDatavSysCommentObjLst[j].scoreType == '1') {
              const strStu = '学生';
              strhtml += `<td>${strStu}</td>`;
            } else {
              const strTeach = '教师';
              strhtml += `<td>${strTeach}</td>`;
            }
            //名称
            strhtml += '<td></td>';
            //被评论人
            strhtml += '<td></td>';
            //评论时间
            strhtml += `<td>${RemainDatavSysCommentObjLst[j].updDate}</td>`;

            const strUserName = await vQxUsersSimStore.getUserName(
              RemainDatavSysCommentObjLst[j].updUser,
            );

            strhtml += `<td>${strUserName}</td>`;
            //回复数
            strhtml += '<td></td>';
            //删除
            strhtml += `<td class="td-manage"><button class="layui-btn-danger layui-btn layui-btn-xs" onclick=btnDelSysComment("${RemainDatavSysCommentObjLst[j].commentId}") href = "javascript:;" > <i class="layui-icon" ></i>删除</button ></td>`;
            //结束
            strhtml += '</tr>';
          }
        } else {
          const strMsg = Format('根据条件获取的记录数为0！');
          console.error('Error: ', strMsg);
          //console.trace();
          ShowEmptyRecNumInfo(SysCommentCRUDEx.arrDivDataLst[intQueryStata], strMsg);
          this.objPager.Hide(divName, this.divName4Pager);
          return;
        }
      }
      const tbody = GetTBodyObjInDivObj(divName, 'tbList');
      tbody.innerHTML = strhtml;
      //拼接；

      SysCommentCRUDEx.vuebtn_Click('tbody', '');

      if (arrvSysCommentObjLst.length > 0) {
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(divName, this, this.divName4Pager);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
  }

  //删除数据方法

  /* 
   在数据表里删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
  */
  public async btnDelSysComment(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }

      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //根据当前得到主键作为父节点来查询是否包含子节点数据
      const strWhereCond = ` 1=1 And ${clsSysCommentEN.con_ParentId} = '${strKeyId}'`;
      //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
      SysComment_GetFirstObjAsync(strWhereCond).then((jsonData) => {
        const objSysCommenEN: clsSysCommentEN = <clsSysCommentEN>jsonData;
        if (objSysCommenEN != null) {
          //有数据，那么需要提示先删除子节点数据
          //成员
          const strMsg = `该数据还包含了其它子数据，不可删除！`;
          alert(strMsg);
          return;
        } else {
          //根据当前登录人；
          SysComment_GetObjByCommentIdAsync(strKeyId).then((jsonData) => {
            const objSysCommenEN: clsSysCommentEN = <clsSysCommentEN>jsonData;
            if (objSysCommenEN != null) {
              //判断角色
              //管理员
              if ( strRoleId == enumQxRoles.System_Admin_00620001 ||
                strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018) {
                this.DelRecord(strKeyId);
              } else if (strRoleId == '00620002') {
                this.DelRecord(strKeyId);
              } else {
                if (objSysCommenEN.updUser == strUserId) {
                  //
                  this.DelRecord(strKeyId);
                } else {
                  //成员
                  const strMsg = `您只能删除自己添加的数据！`;
                  alert(strMsg);
                  return;
                }
              }

              //if (objSysCommenEN.updUser == strUserId) {
              //    //
              //    const responseText = this.DelRecord(strKeyId);

              //}
              //else {

              //    //成员
              //    const strMsg = `您只能删除自己添加的数据！`;
              //    alert(strMsg);
              //    return;
              //}
            }
          });
        }
      });

      //const responseText = await this.DelRecord(strKeyId);
      //await this.BindGv_vSysComment();
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
  public async DelRecord(strCommentId: string) {
    try {
      const responseText = await SysComment_DelRecordAsync(strCommentId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        await this.BindGv_vSysComment();
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
   * 评分类型
   */
  public set scoreType(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlScoreType', value);
  }
  /*
   * 评分类型
   */
  public get scoreType(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlScoreType');
  }
  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: SysCommentCRUDEx;
    let objPageEdit;
    if (SysCommentCRUD.objPageCRUD == null) {
      SysCommentCRUD.objPageCRUD = new SysCommentCRUDEx(divLayout);
      objPage = <SysCommentCRUDEx>SysCommentCRUD.objPageCRUD;
    } else {
      objPage = <SysCommentCRUDEx>SysCommentCRUD.objPageCRUD;
    }
    let strMsg = '';
  
    switch (strCommandName) {
      case 'changeTab':
        objPage.ChangeTab(strKeyId);
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new SysComment_EditEx('SysComment_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        SysCommentCRUD.EditObj.btnSysComment_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new SysComment_EditEx('SysComment_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        SysCommentCRUD.EditObj.btnSysComment_Edit_Click(strCommandName, strKeyId);
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        // if (arrKeyIds.length == 0) {
        //   alert(`请选择需要删除的${objPage.thisTabName}记录!`);
        //   return;
        // }
        // objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(SysCommentCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async ChangeTab(strTabId: string): Promise<boolean> {
    // alert(strTabId);
    let strMsg;
    switch (strTabId) {
      case enumCommentType.PaperComment: // '小组成员' },
        await this.li_PaperComment_Click('');
        break;
      case enumCommentType.PaperSubViewpointComment: //, label: '计划' },
        this.li_PaperSubViewpointComment_Click('');
        break;
      case enumCommentType.ViewpointComment: //, label: '计划' },
        this.li_ViewpointComment_Click('');
        break;

      case enumCommentType.ExpertViewpointComment: //, label: '反思' },
        this.li_ExpertViewpointComment_Click('');
        break;
      case enumCommentType.ConceptComment: //, label: '反思' },
        this.li_ConceptComment_Click('');
        break;
      case enumCommentType.ObjectiveFactComment: //, label: '论文' },
        this.li_ObjectiveFactComment_Click('');
        break;

      case enumCommentType.ObjectiveBasisComment: // 'liAllViewpoint': //, label: '主题各观点' },
        this.li_ObjectiveBasisComment_Click('');
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
