/**
 * 类名:QxUsersCRUDEx(界面:QxUsersCRUD)
 * 表名:QxUsers(01120258)
 * 版本:2023.12.07.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/13 12:41:26
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { QxUsersCRUD } from '@/viewsBase/BaseInfo/QxUsersCRUD';
import { QxUsers_EditEx } from '@/viewsShare/BaseInfo/QxUsers_EditEx';
import {
  GetAObjLstInDivObj,
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { XzGradeBase_BindDdl_IdGradeBaseInDivCache } from '@/ts/L3ForWApi/SysPara/clsXzGradeBaseWApi';

import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';

import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  QxUserRoleRelationEx_AddRecord,
  QxUserRoleRelationEx_DelRecord,
} from '@/ts/L3ForWApiExShare/UsersRight/clsQxUserRoleRelationExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { userRoleRelationStore } from '@/store/modulesShare/qxUserRoleRelation';
import { clsQxUsersExWApi } from '@/ts/L3ForWApiExShare/UserManage_GP/clsQxUsersExWApi';
import { message } from '@/utils/myMessage';
import { QxUserIdentity_BindDdl_IdentityIdInDivCache } from '@/ts/L3ForWApi/UserManage/clsQxUserIdentityWApi';
import { QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxRolesWApi';
import { clsQxUsersENEx } from '@/ts/L0Entity/UserManage_GP/clsQxUsersENEx';
import { clsQxUsersEN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersEN';
import {
  QxUsers_GetObjByUserIdAsync,
  QxUsers_GetRecCountByCondAsync,
  QxUsers_UpdateRecordAsync,
} from '@/ts/L3ForWApi/UserManage_GP/clsQxUsersWApi';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
/** QxUsersCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class QxUsersCRUDEx extends QxUsersCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrSortQxUsersBy = "UserId";
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 15;
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
    alert(`该类没有绑定该函数：[this.BindGv_QxUsers]!${strType}${strPara}`);
    //this.BindGv_QxUsers4Func();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'QxUsers':
        this.BindGv_QxUsers4Func(this.divList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: any, divLayout: HTMLDivElement) {
    let objPage: QxUsersCRUDEx;
    const objData = strKeyId;
    let objPageEdit;
    if (QxUsersCRUD.objPageCRUD == null) {
      QxUsersCRUD.objPageCRUD = new QxUsersCRUDEx(divLayout);
      objPage = <QxUsersCRUDEx>QxUsersCRUD.objPageCRUD;
    } else {
      objPage = <QxUsersCRUDEx>QxUsersCRUD.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'SetRole':
        objPage.btnSetRole_Click(strKeyId);
        break;
      case 'SetDetailInfoTab':
        objPage.btnSetDetailInfoTab_Click(strKeyId);
        break;

      case 'DelRole':
        // const sstrSplit: string[] = objData.split('|');
        // if (sstrSplit.length != 2) {
        //   message.warning(`传递参数个数不正确！${objData}`);
        // }

        objPage.btnDelRole_Click(objData.userId, objData.roleId);
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new QxUsers_EditEx('QxUsers_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        QxUsersCRUD.EditObj.btnQxUsers_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);

        objPageEdit = new QxUsers_EditEx('QxUsers_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        QxUsersCRUD.EditObj.btnQxUsers_Edit_Click(strCommandName, strKeyId);
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(QxUsersCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
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
      clsQxUsersExWApi.vuebtn_Click = QxUsersCRUDEx.vuebtn_Click;
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      if (strUserId != '') {
        //1、为下拉框设置数据源,绑定列表数据

        //管理员 判断角色
        if (
          strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
          $('#btnDelRecord').show();
          $('#tab4Bind tr').find('td:eq(19)').show();
        } else {
          //学生00620003 教师
          $('#btnDelRecord').hide();
          $('#tab4Bind tr').find('td:eq(19)').hide();
        }

        //1、为下拉框设置数据源,绑定列表数据
        //const ddl_DepartmentId = await this.BindDdl_DepartmentId("ddlDepartmentId");
        await this.SetDdl_idXzCollegeInDiv();
        await this.SetDdl_idGradeBaseInDiv();
        await this.SetDdl_IdentityIDInDiv();
        QxUsersCRUD.sortQxUsersBy = 'userId Asc';
        const strWhereCond = await this.CombineQxUsersCondition();
        this.recCount = await QxUsers_GetRecCountByCondAsync(strWhereCond);
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_QxUsers4Func(this.divList);
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async SetDdl_idXzCollegeInDiv() {
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return;
    await XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache(
      objDivQuery,
      'ddlIdXzCollege',
      clsSysPara4WebApi.spIdSchool,
    ); //
  }
  public async SetDdl_idGradeBaseInDiv() {
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return;
    await XzGradeBase_BindDdl_IdGradeBaseInDivCache(objDivQuery, 'ddlIdGradeBase'); //
  }
  public async SetDdl_IdentityIDInDiv() {
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return;
    await QxUserIdentity_BindDdl_IdentityIdInDivCache(objDivQuery, 'ddlIdentityId'); //
  }
  public async SetDdl_RoleIdInDiv() {
    const objDivFunction = this.getDivName(enumDivType.Function_03);
    if (objDivFunction == null) return;
    await QxRoles_BindDdl_RoleIdByQxPrjIdInDivCache(
      objDivFunction,
      'ddlRoleId',
      clsSysPara4WebApi.currSelPrjId,
    ); //
  }
  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    // await this.SetDdl_DepartmentIdInDiv(); //查询区域
    await this.SetDdl_RoleIdInDiv();
    await this.SetDdl_IdXzCollegeInDiv(); //查询区域

    await this.SetDdl_IdGradeBaseInDiv(); //查询区域

    await this.SetDdl_IdentityIdInDiv(); //查询区域
  }
  /** 显示QxUsers对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrQxUsersExObjLst:需要绑定的对象列表
   **/
  public async BindTab_QxUsers4Func(
    divContainer: HTMLDivElement,
    arrQxUsersExObjLst: Array<clsQxUsersENEx>,
  ) {
    const strThisFuncName = this.BindTab_QxUsers4Func.name;
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersEN.con_UserId,
        sortBy: clsQxUsersEN.con_UserId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户ID',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersEN.con_UserName,
        sortBy: clsQxUsersEN.con_UserName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersENEx.con_CollegeName,
        sortBy: 'collegeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersENEx.con_GradeBaseName,
        sortBy: 'gradeBaseName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '年级',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersEN.con_Email,
        sortBy: clsQxUsersEN.con_Email,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '电子邮箱',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersEN.con_PhoneNumber,
        sortBy: clsQxUsersEN.con_PhoneNumber,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '电话',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersEN.con_EffitiveBeginDate,
        sortBy: clsQxUsersEN.con_EffitiveBeginDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '有效开始',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersEN.con_EffitiveEndDate,
        sortBy: clsQxUsersEN.con_EffitiveEndDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '有效结束',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersENEx.con_RoleNames,
        sortBy: clsQxUsersENEx.con_RoleNames,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '角色',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersEN.con_DetailInfoTab,
        sortBy: clsQxUsersEN.con_DetailInfoTab,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '详细信息表',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersENEx.con_DateTimeSim,
        sortBy: clsQxUsersENEx.con_DateTimeSim,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 11,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxUsersEN.con_UpdUser,
        sortBy: clsQxUsersEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 12,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrQxUsersExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(divDataLst, arrQxUsersExObjLst, arrDataColumn, clsQxUsersEN.con_UserId, this);
    this.SetEventForDel();
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnSetRole_Click(strRoleId: string) {
    const strThisFuncName = this.btnSetRole_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      for (const strUserId of arrKeyIds) {
        await QxUserRoleRelationEx_AddRecord(strUserId, strRoleId, userStore.getUserId);
        userRoleRelationStore.delUser(strUserId, clsSysPara4WebApi.currSelPrjId);
      }
      await this.BindGv_QxUsers4Func(this.divList);
    } catch (e) {
      const strMsg = Format(
        '删除记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async btnSetDetailInfoTab_Click(strDetailInfoTab: string) {
    const strThisFuncName = this.btnSetDetailInfoTab_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录!`);
        return '';
      }
      for (const strUserId of arrKeyIds) {
        const objQxUsers = await QxUsers_GetObjByUserIdAsync(strUserId);
        if (objQxUsers == null) continue;
        objQxUsers.SetUserId(strUserId);
        objQxUsers.SetDetailInfoTab(strDetailInfoTab);
        await QxUsers_UpdateRecordAsync(objQxUsers);
      }
      await this.BindGv_QxUsers4Func(this.divList);
    } catch (e) {
      const strMsg = Format(
        '删除记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnDelRole_Click(strUserId: string, strRoleId: string) {
    const strThisFuncName = this.btnSetRole_Click.name;
    try {
      await QxUserRoleRelationEx_DelRecord(strUserId, strRoleId);
      userRoleRelationStore.delUser(strUserId, clsSysPara4WebApi.currSelPrjId);

      await this.BindGv_QxUsers4Func(this.divList);
    } catch (e) {
      const strMsg = Format(
        '删除记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public SetEventForDel() {
    {
      const arrALst = GetAObjLstInDivObj(this.divList, 'aDel');
      for (const aDel of arrALst) {
        if (aDel != null) {
          const strKeyId = aDel.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${objResearchTopic.topicId}|${objResearchTopic.idCurrEduCls}|${objResearchTopic.topicName}|${strEduClsTypeId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = {
            userId: arr[0],
            roleId: arr[1],
          };

          (function (objData: any) {
            aDel.onclick = function () {
              QxUsersCRUDEx.vuebtn_Click('DelRole', objData);
            };
          })(objData);
        }
      }
    }
  }
}
