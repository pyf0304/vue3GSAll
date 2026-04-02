import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

import { BindDdl_ObjLst, BindDdl_ObjLst_V } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { clsvViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvViewpointEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  vCurrEduClsStu_GetObjLstAsync,
  vCurrEduClsStu_GetObjLstCache,
} from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';

import { vCurrEduClsTeacher_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';

import { gs_TotalDataType_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTools/clsgs_TotalDataTypeWApi';
import { ResearchTopic_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { vConcept_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTopic/clsvConceptWApi';
import { vTopicObjective_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTopic/clsvTopicObjectiveWApi';
import { vViewpoint_GetObjLstCache } from '@/ts/L3ForWApi/GradEduTopic/clsvViewpointWApi';

import { clsvTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN';
import { clsvConceptEN } from '@/ts/L0Entity/GradEduTopic/clsvConceptEN';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import { clsgs_TotalDataTypeEN } from '@/ts/L0Entity/GradEduTools/clsgs_TotalDataTypeEN';

import { clsvCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherEN';

import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';

import { PaperEx_GetObjLstByIdCurrEduCls_Cache } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { vPaperReadWrite_GetObjLstCache } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperReadWriteWApi';
import { vPaperSubViewpoint_GetObjLstCache } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsvPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperReadWriteEN';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { userStore } from '@/store/modulesShare/user';

export class clsDropDownList {
  /// <summary>
  /// 绑定基于论文缓存的专业下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public static async BindDdl_XzMajorInvPaper_Cache(
    strDdlName: string,

    strCourseId: string,
  ) {
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_idXzMajor_Cache');
    const arrvPaper = await PaperEx_GetObjExLstByIdCurrEduCls(strIdCurrEduCls, strCourseId);
    //得到论文用户
    const arrUserId_Set: Set<string> = new Set(arrvPaper.map((x) => x.updUser));
    console.log(arrUserId_Set);
    //得到论文数据缓存

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    let arrUsersList_Sel: Array<clsvUsersSimEN> = arrUsers.filter((x) =>
      arrUserId_Set.has(x.userId),
    );
    console.log(arrUsersList_Sel);
    arrUsersList_Sel = arrUsersList_Sel.sort((x) => x.GetFldValue(clsvUsersSimEN.con_UserName));
    //BindDdl_ObjLst_V(strDdlName, arrUsersList_Sel, clsvUsersSimEN.con_IdXzMajor, clsvUsersSimEN.con_MajorName, "专业");
  }

  public static XzMajorUniq(arr: Array<clsXzMajorEN>): Array<clsXzMajorEN> {
    const arrObjLst_New: Array<clsXzMajorEN> = new Array<clsXzMajorEN>();
    for (const x of arr) {
      if (clsDropDownList.XzMajorIsExist(arrObjLst_New, x) == false) {
        arrObjLst_New.push(x);
      }
    }
    return arrObjLst_New;
  }

  public static XzMajorIsExist(arr: Array<clsXzMajorEN>, key: clsXzMajorEN) {
    const arr_Sel = arr.filter((x) => x.idXzMajor == key.idXzMajor);
    if (arr_Sel.length > 0) return true;
    return false;
  }

  /// <summary>
  /// 绑定基于论文读写缓存的用户下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public static async BindDdl_UsersInvPaperReadWrite_Cache(strDdlName: string) {
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_UserId_Cache');
    const arrvPaperReadWrite: Array<clsvPaperReadWriteEN> = await vPaperReadWrite_GetObjLstCache(
      strIdCurrEduCls,
    );

    const arrUserId_Set: Set<string> = new Set(arrvPaperReadWrite.map((x) => x.updUser));
    console.log(arrUserId_Set);

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    let arrUsersList_Sel: Array<clsvUsersSimEN> = arrUsers.filter((x) =>
      arrUserId_Set.has(x.userId),
    );
    console.log(arrUsersList_Sel);
    arrUsersList_Sel = arrUsersList_Sel.sort((x) => x.GetFldValue(clsvUsersSimEN.con_UserName));
    BindDdl_ObjLst_V(
      strDdlName,
      arrUsersList_Sel,
      clsvUsersSimEN.con_UserId,
      clsvUsersSimEN.con_UserName,
      '用户',
    );
  }

  //public static UserUniq(arr: Array<clsvUsersSimEN>): Array<clsvUsersSimEN> {
  //    let arrObjLst_New: Array<clsvUsersSimEN> = new Array<clsvUsersSimEN>();
  //    for (let x of arr) {
  //        if (clsDropDownList.UserIsExist(arrObjLst_New, x) == false) {
  //            arrObjLst_New.push(x);
  //        }
  //    }
  //    return arrObjLst_New;
  //}

  //public static UserIsExist(arr: Array<clsvUsersSimEN>, key: clsvUsersSimEN) {
  //    let arr_Sel = arr.filter(x => x.userId == key.userId);
  //    if (arr_Sel.length > 0) return true;
  //    return false;
  //}

  public static GetUsersBvPaperReadWrite(objvPaperReadWrite: clsvPaperReadWriteEN): clsvUsersSimEN {
    const objUsers: clsvUsersSimEN = new clsvUsersSimEN();
    objUsers.userId = objvPaperReadWrite.updUser;
    //objUsers.userName = objvPaperReadWrite.userName;
    return objUsers;
  }

  /// <summary>
  /// 绑定基于Web的下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public static async BindDdl_UsersInvPaperSubviewpoint_Cache(strDdlName: string) {
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_UserId_Cache');
    const arrUser: Array<clsvPaperSubViewpointEN> = await vPaperSubViewpoint_GetObjLstCache(
      strIdCurrEduCls,
    );
    const arrUserId_Set: Set<string> = new Set(arrUser.map((x) => x.updUser));
    console.log(arrUserId_Set);
    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    let arrUsersList_Sel: Array<clsvUsersSimEN> = arrUsers.filter((x) =>
      arrUserId_Set.has(x.userId),
    );
    console.log(arrUsersList_Sel);
    arrUsersList_Sel = arrUsersList_Sel.sort((x) => x.GetFldValue(clsvUsersSimEN.con_UserName));
    BindDdl_ObjLst_V(
      strDdlName,
      arrUsersList_Sel,
      clsvUsersSimEN.con_UserId,
      clsvUsersSimEN.con_UserName,
      '用户',
    );
  }

  /// <summary>
  /// 绑定基于Web的下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public static async BindDdl_UsersInvPaper_Cache(strDdlName: string) {
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    if (strIdCurrEduCls == '') return;
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_UserId_Cache');
    const arrPaper = await PaperEx_GetObjLstByIdCurrEduCls_Cache(strIdCurrEduCls);
    const arrUserId_Set: Set<string> = new Set(arrPaper.map((x) => x.updUser));
    console.log(arrUserId_Set);

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    let arrUsersList_Sel: Array<clsvUsersSimEN> = arrUsers.filter((x) =>
      arrUserId_Set.has(x.userId),
    );
    console.log(arrUsersList_Sel);
    arrUsersList_Sel = arrUsersList_Sel.sort((x) => x.GetFldValue(clsvUsersSimEN.con_UserName));
    BindDdl_ObjLst_V(
      strDdlName,
      arrUsersList_Sel,
      clsvUsersSimEN.con_UserId,
      clsvUsersSimEN.con_UserName,
      '用户',
    );
  }
  //public static unique(arr: Array<string>): Array<string> {
  //    let arr_New: Array<string> = Array.from(new Set(arr));
  //    return arr_New;
  //}

  //从观点表表中得到专家观点用户数据
  /// <summary>
  /// 绑定基于Web的下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public static async BindDdl_UserIdInvExpertviewpoint_Cache(strDdlName: string) {
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_UserIdInvConcept_Cache');
    const arrvViewpointList: Array<clsvViewpointEN> = await vViewpoint_GetObjLstCache(
      clsPubLocalStorage.idCurrEduCls,
    );

    //获取个人观点数据；

    let arrvViewpoint: Array<clsvViewpointEN> = new Array<clsvViewpointEN>();
    arrvViewpoint = arrvViewpointList.filter((x) => x.userTypeId == '02'); //专家观点；

    const arrUserId_Set: Set<string> = new Set(arrvViewpoint.map((x) => x.updUser));
    console.log(arrUserId_Set);

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    let arrUsersList_Sel: Array<clsvUsersSimEN> = arrUsers.filter((x) =>
      arrUserId_Set.has(x.userId),
    );
    console.log(arrUsersList_Sel);
    arrUsersList_Sel = arrUsersList_Sel.sort((x) => x.GetFldValue(clsvUsersSimEN.con_UserName));
    BindDdl_ObjLst_V(
      strDdlName,
      arrUsersList_Sel,
      clsvUsersSimEN.con_UserId,
      clsvUsersSimEN.con_UserName,
      '编辑用户',
    );
  }

  //public static GetUsersByvViewpoint(objvViewpoint: clsvViewpointEN): clsvUsersSimEN {
  //    objUsers: clsvUsersSimEN = new clsvUsersSimEN();
  //    objUsers.userId = objvViewpoint.updUser;
  //    objUsers.userName = objvViewpoint.userName;
  //    return objUsers;
  //}

  //从观点表表中得到用户数据 通过参数判断个人、或专家；
  /// <summary>
  /// 绑定基于Web的下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public static async BindDdl_ViewpointUserIdByPara_Cache(
    strDdlName: string,

    strUserType: string,
  ) {
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_UserIdInvConcept_Cache');
    const arrvViewpointList: Array<clsvViewpointEN> = await vViewpoint_GetObjLstCache(
      clsPubLocalStorage.idCurrEduCls,
    );

    //获取个人观点数据；

    let arrvViewpoint: Array<clsvViewpointEN> = new Array<clsvViewpointEN>();
    arrvViewpoint = arrvViewpointList.filter((x) => x.userTypeId == strUserType); //01或02

    const arrUserId_Set: Set<string> = new Set(arrvViewpoint.map((x) => x.updUser));
    console.log(arrUserId_Set);

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    let arrUsersList_Sel: Array<clsvUsersSimEN> = arrUsers.filter((x) =>
      arrUserId_Set.has(x.userId),
    );
    console.log(arrUsersList_Sel);
    arrUsersList_Sel = arrUsersList_Sel.sort((x) => x.GetFldValue(clsvUsersSimEN.con_UserName));
    BindDdl_ObjLst_V(
      strDdlName,
      arrUsersList_Sel,
      clsvUsersSimEN.con_UserId,
      clsvUsersSimEN.con_UserName,
      '编辑用户',
    );
  }

  //从观点表表中得到个人观点用户数据
  /// <summary>
  /// 绑定基于Web的下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public static async BindDdl_UserIdInvViewpoint_Cache(strDdlName: string) {
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_UserIdInvConcept_Cache');
    const arrvViewpointList: Array<clsvViewpointEN> = await vViewpoint_GetObjLstCache(
      clsPubLocalStorage.idCurrEduCls,
    );

    //获取个人观点数据；

    let arrvViewpoint: Array<clsvViewpointEN> = new Array<clsvViewpointEN>();
    arrvViewpoint = arrvViewpointList.filter((x) => x.userTypeId == '01'); //个人观点；

    const arrUserId_Set: Set<string> = new Set(arrvViewpoint.map((x) => x.updUser));
    console.log(arrUserId_Set);

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    let arrUsersList_Sel: Array<clsvUsersSimEN> = arrUsers.filter((x) =>
      arrUserId_Set.has(x.userId),
    );
    console.log(arrUsersList_Sel);
    arrUsersList_Sel = arrUsersList_Sel.sort((x) => x.GetFldValue(clsvUsersSimEN.con_UserName));
    BindDdl_ObjLst_V(
      strDdlName,
      arrUsersList_Sel,
      clsvUsersSimEN.con_UserId,
      clsvUsersSimEN.con_UserName,
      '编辑用户',
    );
  }

  //从概念表中得到用户数据
  /// <summary>
  /// 绑定基于Web的下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public static async BindDdl_UserIdInvConcept_Cache(strDdlName: string) {
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_UserIdInvConcept_Cache');
    const arrvConcept: Array<clsvConceptEN> = await vConcept_GetObjLstCache(
      clsPubLocalStorage.idCurrEduCls,
    );

    const arrUserId_Set: Set<string> = new Set(arrvConcept.map((x) => x.updUser));
    console.log(arrUserId_Set);

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    let arrUsersList_Sel: Array<clsvUsersSimEN> = arrUsers.filter((x) =>
      arrUserId_Set.has(x.userId),
    );
    console.log(arrUsersList_Sel);
    arrUsersList_Sel = arrUsersList_Sel.sort((x) => x.GetFldValue(clsvUsersSimEN.con_UserName));
    BindDdl_ObjLst_V(
      strDdlName,
      arrUsersList_Sel,
      clsvUsersSimEN.con_UserId,
      clsvUsersSimEN.con_UserName,
      '编辑用户',
    );
  }
  public static GetUsersByvConcept(objvConcept: clsvConceptEN): clsvUsersSimEN {
    const objUsers: clsvUsersSimEN = new clsvUsersSimEN();
    objUsers.userId = objvConcept.updUser;
    const strUserName = '';

    objUsers.userName = strUserName;
    return objUsers;
  }

  //从客观事实表中得到用户数据
  /// <summary>
  /// 绑定基于Web的下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public static async BindDdl_UserIdInvTopicObjectiveFact_Cache(strDdlName: string) {
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_UserIdInvConcept_Cache');
    const arrvObjlist: Array<clsvTopicObjectiveEN> = await vTopicObjective_GetObjLstCache(
      clsPubLocalStorage.idCurrEduCls,
    );

    //获取客观事实
    let arrvclsvTopicObjectiveEN: Array<clsvTopicObjectiveEN> = new Array<clsvTopicObjectiveEN>();
    arrvclsvTopicObjectiveEN = arrvObjlist.filter((x) => x.objectiveType == '01'); //客观事实；

    const arrUserId_Set: Set<string> = new Set(arrvclsvTopicObjectiveEN.map((x) => x.updUser));
    console.log(arrUserId_Set);

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    let arrUsersList_Sel: Array<clsvUsersSimEN> = arrUsers.filter((x) =>
      arrUserId_Set.has(x.userId),
    );
    console.log(arrUsersList_Sel);
    arrUsersList_Sel = arrUsersList_Sel.sort((x) => x.GetFldValue(clsvUsersSimEN.con_UserName));
    BindDdl_ObjLst_V(
      strDdlName,
      arrUsersList_Sel,
      clsvUsersSimEN.con_UserId,
      clsvUsersSimEN.con_UserName,
      '编辑用户',
    );
  }

  //public static GetUsersByvTopicObjective(objvTopicObjective: clsvTopicObjectiveEN): clsvUsersSimEN {
  //    objUsers: clsvUsersSimEN = new clsvUsersSimEN();
  //    objUsers.userId = objvTopicObjective.updUser;
  //    objUsers.userName = objvTopicObjective.userName;
  //    return objUsers;
  //}
  //从客观数据表中得到用户数据
  /// <summary>
  /// 绑定基于Web的下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public static async BindDdl_UserIdInvTopicObjectiveBasis_Cache(strDdlName: string) {
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_UserIdInvConcept_Cache');
    const arrvObjList: Array<clsvTopicObjectiveEN> = await vTopicObjective_GetObjLstCache(
      clsPubLocalStorage.idCurrEduCls,
    );

    //获取客观数据
    let arrvclsvTopicObjectiveEN: Array<clsvTopicObjectiveEN> = new Array<clsvTopicObjectiveEN>();
    arrvclsvTopicObjectiveEN = arrvObjList.filter((x) => x.objectiveType == '02'); //客观数据；

    const arrUserId_Set: Set<string> = new Set(arrvclsvTopicObjectiveEN.map((x) => x.updUser));
    console.log(arrUserId_Set);

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    let arrUsersList_Sel: Array<clsvUsersSimEN> = arrUsers.filter((x) =>
      arrUserId_Set.has(x.userId),
    );
    console.log(arrUsersList_Sel);
    arrUsersList_Sel = arrUsersList_Sel.sort((x) => x.GetFldValue(clsvUsersSimEN.con_UserName));

    BindDdl_ObjLst_V(
      strDdlName,
      arrUsersList_Sel,
      clsvUsersSimEN.con_UserId,
      clsvUsersSimEN.con_UserName,
      '编辑用户',
    );
  }

  //教学班学生关系
  public static async BindDdl_CurrEduClsStuUser(ddlUserId_q: string) {
    //strWhereCond = " idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "' order by stuName Asc";
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    const objDdl = document.getElementById(ddlUserId_q);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlUserId_q} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      let arrObjLst_Sel: Array<clsvCurrEduClsStuEN> = await vCurrEduClsStu_GetObjLstCache(
        strIdCurrEducls,
      );

      arrObjLst_Sel = arrObjLst_Sel.sort((x) => x.GetFldValue(clsvCurrEduClsStuEN.con_StuId));
      BindDdl_ObjLst_V(
        ddlUserId_q,
        arrObjLst_Sel,
        clsvCurrEduClsStuEN.con_StuId,
        clsvCurrEduClsStuEN.con_StuName,
        '教学班学生',
      );
      console.log('完成BindDdl_vCurrEduClsStuId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //教学班主题
  public static async BindDdl_TopicId(ddlTopicId_q: string) {
    //strWhereCond = " idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "' order by topicName Asc";
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    const objDdl = document.getElementById(ddlTopicId_q);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlTopicId_q} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      let arrObjLst_Sel: Array<clsResearchTopicEN> = await ResearchTopic_GetObjLstCache(
        strIdCurrEducls,
      );

      arrObjLst_Sel = arrObjLst_Sel.sort((x) => x.GetFldValue(clsResearchTopicEN.con_TopicId));
      BindDdl_ObjLst(
        ddlTopicId_q,
        arrObjLst_Sel,
        clsResearchTopicEN.con_TopicId,
        clsResearchTopicEN.con_TopicName,
        '教学班主题',
      );
      console.log('完成BindDdl_ResearchTopicId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //总表类型数据
  public static async BindDdl_TotalTypeId(ddlTotalType_q: string) {
    const strWhereCond = " totalDataTypeId !='02'";
    const objDdl = document.getElementById(ddlTotalType_q);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlTotalType_q} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      let arrObjLst_Sel: Array<clsgs_TotalDataTypeEN> = await gs_TotalDataType_GetObjLstAsync(
        strWhereCond,
      );
      arrObjLst_Sel = arrObjLst_Sel.sort((x) =>
        x.GetFldValue(clsgs_TotalDataTypeEN.con_TotalDataTypeId),
      );
      BindDdl_ObjLst(
        ddlTotalType_q,
        arrObjLst_Sel,
        clsgs_TotalDataTypeEN.con_TotalDataTypeId,
        clsgs_TotalDataTypeEN.con_TotalDataTypeName,
        '问题回答',
      );
      console.log('完成BindDdl_ResearchTopicId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班学生关系
  public static async BindDdl_CurrEduClsStu(ddlCurrEduCls_q: string) {
    const strWhereCond = ` stuId='${userStore.getUserId}' order by modifyDate Desc`;
    const objDdl = document.getElementById(ddlCurrEduCls_q);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlCurrEduCls_q} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      let arrObjLst_Sel: Array<clsvCurrEduClsStuEN> = await vCurrEduClsStu_GetObjLstAsync(
        strWhereCond,
      );
      arrObjLst_Sel = arrObjLst_Sel.sort((x) =>
        x.GetFldValue(clsvCurrEduClsStuEN.con_IdCurrEduCls),
      );
      BindDdl_ObjLst_V(
        ddlCurrEduCls_q,
        arrObjLst_Sel,
        clsvCurrEduClsStuEN.con_IdCurrEduCls,
        clsvCurrEduClsStuEN.con_EduClsName,
        '其他教学班',
      );
      console.log('完成BindDdl_vCurrEduClsStuId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //教学班教师关系
  public static async BindDdl_CurrEduClsTea(ddlCurrEduCls_q: string) {
    const strWhereCond = ` teacherId='${userStore.getUserId}' order by updDate Desc`;
    const objDdl = document.getElementById(ddlCurrEduCls_q);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlCurrEduCls_q} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    try {
      let arrObjLst_Sel: Array<clsvCurrEduClsTeacherEN> = await vCurrEduClsTeacher_GetObjLstAsync(
        strWhereCond,
      );
      arrObjLst_Sel = arrObjLst_Sel.sort((x) =>
        x.GetFldValue(clsvCurrEduClsTeacherEN.con_IdCurrEduCls),
      );
      BindDdl_ObjLst_V(
        ddlCurrEduCls_q,
        arrObjLst_Sel,
        clsvCurrEduClsTeacherEN.con_IdCurrEduCls,
        clsvCurrEduClsTeacherEN.con_EduClsName,
        '其他教学班',
      );
      console.log('完成BindDdl_vCurrEduClsTeacherId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
}

function PaperEx_GetObjExLstByIdCurrEduCls(
  strIdCurrEduCls: string,
  strCourseId: string,
): clsPaperEN[] | PromiseLike<clsPaperEN[]> {
  console.log(strIdCurrEduCls, strCourseId);
  throw new Error('Function not implemented.');
}
