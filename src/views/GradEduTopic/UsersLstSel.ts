import { Ref } from 'vue';
import $ from 'jquery';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import {
  CurrEduClsStuEx_BindDdl_IdCurrEduClsByStuIdInDivCache,
  CurrEduClsStuEx_GetStuIDLstByIdCurrEduCls,
} from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsStuExWApi';

import { RTUserRelaEx_AddUserId } from '@/ts/L3ForWApiEx/GradEduTopic/clsRTUserRelaExWApi';
import { vRTUserRelaEx_CopyToEx } from '@/ts/L3ForWApiEx/GradEduTopic/clsvRTUserRelaExWApi';
import { UsersCRUD } from '@/viewsBase/UserManage/UsersCRUD';
import { QxUsersCRUD } from '@/viewsBase/BaseInfo/QxUsersCRUD';
import { clsRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTUserRelaEN';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { clsvRTUserRelaENEx } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaENEx';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { clsTopicUserRoleEN } from '@/ts/L0Entity/RT_Params/clsTopicUserRoleEN';
import { clsvUsersEN } from '@/ts/L0Entity/UserManage/clsvUsersEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  RTUserRela_GetFirstObjAsync,
  RTUserRela_GetObjBymIdAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTUserRelaWApi';
import {
  LiteratureType_GetObjLstAsync,
  LiteratureType_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { TopicUserRole_GetObjLstCache } from '@/ts/L3ForWApi/RT_Params/clsTopicUserRoleWApi';
import {
  vUsersSim_GetObjLstByPagerAsync,
  vUsersSim_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';

import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import {
  CheckControlExistInDivObj,
  GetArray,
  GetCheckedKeyIdsInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst, BindTabV2Where_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  CurrEduClsTeacherEx_BindDdl_IdCurrEduClsByTeacherIdInDivCache,
  CurrEduClsTeacherEx_GetTeacherIdLstByIdCurrEduCls,
} from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsTeacherExWApi'; //参与答疑
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { vUsersSimEx_func } from '@/ts/L3ForWApiExShare/UserManage_GP/clsvUsersSimExWApi';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare function ShowDialogFour(): void; //添加用户关系；

declare function ParticipateQA_Click(strKey: string): void;
declare let window: any;
/* WApiRTUserRela_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class UsersLstSel extends QxUsersCRUD {
  public static EditRef: Ref<any>;
  public divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
  public opType = '';

  public mstrListDivUser = 'divDataLst';
  public divName4Query = 'divQuery'; //查询区的层Id
  public bolIsLoadEditRegion = false; //记录是否导入编辑区的变量
  public divName4Edit = 'divEdit_Sel'; //编辑区的Id
  public static objPageEdit: UsersLstSel;
  protected iShowList: IShowList;

  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvRTUserRelaBy: string = "mId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  //论文列表
  public mstrListDivUsers = 'divUsersDataLst';

  //主题自研论文关系
  public mstrListDivRtOriginalUsersRela = 'divRtOriginalUsersRelaDataLst';

  //主题引用论文关系
  //public mstrListDivRtUsersRela: string = "divRtUsersRelaDataLst";
  public mstrListDivRtCitedUsersRela = 'divRtCitedUsersRelaDataLst';

  public get pageSize(): number {
    return 10;
  }

  constructor(objShowList: IShowList, divLayout: HTMLDivElement) {
    super(divLayout);
    this.iShowList = objShowList;
    const divTemp = document.createElement('div');
    divTemp.id = 'temp';
    this.divEdit = divTemp;
    UsersLstSel.objPageEdit = this;
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
  //添加论文关系
  //public async btnAddUsersRela_Click(strType: string) {
  //    //存放类型区分 论文相关条件；
  //    $("#hidstrType").val(strType);

  //    objUsersLstSel = new UsersLstSel();
  //    const responseObjList = await objUsersLstSel.PageLoad();

  //}

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
*/
  public async PageLoad() {
    const objLayOut = this.divEdit;
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      this.divName4Pager = 'divPager';
      if (userStore.getUserId != '') {
        //用户
        UsersCRUD.sortUsersBy = 'userName Desc';

        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_QxUsers();

        $('#hidUserId').val(userStore.getUserId);
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
  //添加论文关系
  public async btnAddUsersRela_ClickBak(strType: string) {
    //存放类型区分 论文相关条件；
    $('#hidstrType').val(strType);

    await this.BindGv_QxUsers();
  }

  //添加用户关系
  public async btnAddUserRela_ClickBak() {
    const strUserId = userStore.getUserId;
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strWhereCond = ` 1=1 And ${clsRTUserRelaEN.con_TopicId} = '${strTopicId}' And ${clsRTUserRelaEN.con_UserId} ='${strUserId}'`;

    //根据当前登录人和主题Id 查询主题用户角色是组长还是成员；
    await RTUserRela_GetFirstObjAsync(strWhereCond).then((jsonData) => {
      const objRtUsersEN: clsRTUserRelaEN = <clsRTUserRelaEN>jsonData;
      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        ShowDialogFour();

        this.BindGv_QxUsers();
      } else {
        if (objRtUsersEN != null) {
          if (objRtUsersEN.topicUserRoleId == '0003') {
            //成员
            const strMsg = `您当前是成员不能添加用户！`;
            alert(strMsg);
            return;
          } else {
            //指导员0001 //组长0002
            ShowDialogFour();
            this.BindGv_QxUsers();
          }
        }
      }
    });
  }
  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_divUserList(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_divUserList.name;
    if (UsersLstSel.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      await UsersLstSel.EditObj.showDialog();
    }
    this.divEdit = UsersLstSel.EditObj.$refs.refDivEdit;
    if (this.divEdit == null) {
      if (UsersLstSel.times4TestShowDialog < 2) {
        UsersLstSel.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_divUserList(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      UsersLstSel.times4TestShowDialog = 0;
      this.divList = GetDivObjInDivObjN(this.divEdit, 'divList');
      this.divQuery = GetDivObjInDivObjN(this.divEdit, 'divQuery');
      this.divFunction = GetDivObjInDivObjN(this.divEdit, 'divFunction');
    }
    // if (strOp === 'Add' || strOp === 'AddWithMaxId') {
    //   this.btnSubmitTopicObjective = '确认添加';
    //   this.btnCancelTopicObjective = '取消添加';
    // } else if (strOp === 'Update') {
    //   this.btnSubmitTopicObjective = '确认修改';
    //   this.btnCancelTopicObjective = '取消修改';
    // }
    return true;
  }
  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_divUserList() {
    if (UsersLstSel.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      UsersLstSel.EditObj.hideDialog();
    }
  }
  public async btnAddUserRela_Click() {
    this.opType = 'Add';
    try {
      this.divName4Pager = 'divPager';

      const bolIsSuccess = await this.ShowDialog_divUserList(this.opType);
      if (bolIsSuccess == false) return;

      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegion();
      this.SetEventFunc();
      // this.ShowDialog_divUserList('');
      this.bolIsLoadEditRegion = true; //
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(this.divEdit, this.divName4Pager);
        this.bolIsInitShow = true; //
      }
      await this.BindGv_QxUsers();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `为主题添加新用户初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:设置事件函数
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_SetEventFunc)
   */
  public async SetEventFunc() {
    // 在此处放置用户代码以初始化页面
    try {
      const objDiv0 = document.getElementById('divUserList');
      if (objDiv0 == undefined) return;
      const objDiv: HTMLDivElement = <HTMLDivElement>objDiv0;
      const objLst = objDiv.getElementsByTagName('button');
      //console.log("objLst", objLst);
      const arrElement = GetArray(objLst);

      //strIdCurrEduclsbtnUpdate4Dg = document.getElementById('btnUpdateRecord');
      const btnQuery = arrElement.find((x) => x.id == 'btnQuery');
      if (btnQuery == null) return;

      btnQuery.addEventListener('click', (e: any) => {
        console.log(e);
        this.btnQuery_Click();
      });
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 函数功能:为编辑区绑定下拉框
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
   */
  public async BindDdl4EditRegion() {
    //主题用户角色下拉框
    const objDivLayOut = this.divEdit;
    if (objDivLayOut == null) return;
    const objDivQuery = GetDivObjInDivObj(objDivLayOut, 'divQuery');
    this.divQuery = objDivQuery;
    await this.BindDdl_TopicUserRole_q('ddlTopicUserRole_q');
    try {
      if (userStore.getRoleName.indexOf('学生') > -1) {
        await CurrEduClsStuEx_BindDdl_IdCurrEduClsByStuIdInDivCache(
          objDivQuery,
          'ddlidCurrEduCls',
          userStore.getUserId,
        ); //编辑区域
      } else {
        await CurrEduClsTeacherEx_BindDdl_IdCurrEduClsByTeacherIdInDivCache(
          objDivQuery,
          'ddlidCurrEduCls',
          userStore.getUserId,
        ); //编辑区域
      }
    } catch (e: any) {
      console.error(e);
      alert(e);
    }
  }

  //相关论文
  public async liUsersClick() {
    try {
      //主题论文
      this.hidSortvRTUserRelaBy = 'updDate Desc';

      await this.BindGv_QxUsers();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取主题相关论文列表不成功,${e}.`;
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

  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objzx_ConceptS">源对象</param>
  public async FuncMap(objvRTUserRela: clsvRTUserRelaENEx) {
    try {
      const vUsersSim_UserId = objvRTUserRela.updUser;
      const vUsersSim_UserName = await vUsersSimEx_func(
        clsvUsersSimEN.con_UserId,
        clsvUsersSimEN.con_UserName,
        vUsersSim_UserId,
      );
      objvRTUserRela.userName = vUsersSim_UserName;
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
  public CopyToEx2(objzx_ConceptENS: clsvRTUserRelaEN): clsvRTUserRelaENEx {
    let objzx_ConceptENT = new clsvRTUserRelaENEx();
    try {
      objzx_ConceptENT = vRTUserRelaEx_CopyToEx(objzx_ConceptENS);
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

  public async btnParticipateQA_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      RTUserRela_GetObjBymIdAsync(lngKeyId).then((jsonData) => {
        const objRTUserRelaEN: clsRTUserRelaEN = <clsRTUserRelaEN>jsonData;
        if (objRTUserRelaEN != null) {
          const strUserId = objRTUserRelaEN.userId;
          ParticipateQA_Click(strUserId);
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //////////////////////////////////////////////////////论文部分//////////////////////////////////////////

  /// <summary>
  /// 为下拉框获取数据,从表:[Users]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_LiteratureTypeId(ddlLiteratureTypeId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrLiteratureTypeObjLst = await LiteratureType_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrLiteratureTypeObjLst,
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

  //确定选择的用户 并添加到关系表中
  public static CheckUserRole(): boolean {
    ////主题用户角色下拉框
    //const ddl_TopicUserRole_q = await this.BindDdl_TopicUserRole_q("ddlTopicUserRole_q");
    //需要提示选择角色

    if (IsNullOrEmpty(UsersLstSel.objPageEdit.TopicUserRole_q) == true) {
      const strInfo = `请选择用户角色!`;

      //显示信息框
      alert(strInfo);
      return false;
    }
    return true;
  }

  public static btnReturnClick(strKeyId: string) {
    if (UsersLstSel.CheckUserRole() == false) return;

    // UsersLstSel.objPageEdit.HideDialog_divUserList();
    console.log('btnReturnClick(strKeyId:string) ', strKeyId);
    UsersLstSel.objPageEdit.iShowList.BindGvCache(clsRTUserRelaEN._CurrTabName, strKeyId);
  }
  public async BindTab_vUsersQA(divContainer: HTMLDivElement, arrvUsersObjLst: Array<clsvUsersEN>) {
    const strThisFuncName = this.BindTab_vUsersQA.name;
    const objLayOut = this.divEdit;
    if (objLayOut == null) return;
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
        fldName: 'UsersTitle',
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
        fldName: 'periodical',
        colHeader: '期刊',
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
        fldName: 'keyword',
        colHeader: '关键字',
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
        colHeader: '用户',
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
        colHeader: '添加',
        text: '添加',
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
          btn1.setAttribute('onclick', `btnUsersQARecordInTab_Click("${strKeyId}");`);
          return btn1;
        },
      },
    ];
    BindTabV2Where_V(divContainer, arrvUsersObjLst, arrDataColumn, 'userId', 'TopicUsers');
    //BindTab(o, arrvUsersObjLst, arrDataColumn, "userId");
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
  }

  ///////////////////////////////////////////////////用户数据部分

  //查询用户数据
  public async btnQuery_Click() {
    await this.BindGv_QxUsers();
  }
  ////查询论列表
  //public async btnUsersQuery_Click() {
  //    const responseObjList = await this.BindGv_QxUsers();
  //}
  //确定选择的论文 并添加到关系表中
  public btnUsersRecordInTab_Click(strkeyId: string) {
    const divName = this.divEdit;
    //存放Id
    $('#hidUserId').val(strkeyId);

    //获取论文条件 02代表 小组成员论文数据；
    const strType = GetInputValueInDivObj(divName, 'hidstrType');
    if (strType == '01') {
      //执行添加关系方法
      //this.AddNewRecordSaveUsersRela();//所有论文
    } else {
      //小组成员论文；
      //this.AddNewRecordSaveResearchResult();
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjRTUserRelaEN">数据传输的目的类对象</param>
*/
  public PutDataToRTUserRelaClass(pobjRTUserRelaEN: clsRTUserRelaEN) {
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strUserId = userStore.getUserId;

    pobjRTUserRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTUserRelaEN.SetUserId(strUserId); // 论文Id
    pobjRTUserRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTUserRelaEN.SetUpdUser(strUserId); // 修改人
    //pobjRTUserRelaEN.SetMemo(this.memo;// 备注
  }

  /* 函数功能:在数据 列表中跳转到某一页 论文列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
<param name = "intPageIndex">页序号</param>
*/
  public IndexPageTwo(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_QxUsers();
  }

  ///////////////////////论文列表条件
  public get readUser_q(): string {
    const divName = this.divEdit;
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }
  /*
   * 文献类型Id
   */
  public get literatureTypeId_q(): string {
    const divName = this.divEdit;
    return GetSelectValueInDivObj(divName, 'ddlLiteratureTypeId_q');
  }

  /*
   * 设置排序字段-相当使用ViewState功能  主题论文关系
   */
  public set hidSortvRTUserRelaBy(value: string) {
    const divName = this.divEdit;
    SetInputValueInDivObj(divName, 'hidSortvRTUserRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvRTUserRelaBy(): string {
    const divName = this.divEdit;
    return GetInputValueInDivObj(divName, 'hidSortvRTUserRelaBy');
  }

  /*
   * 获取当前页序号  -------论文
   */
  public get CurrPageIndexUsers(): number {
    const divName = this.divEdit;
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndexUsers');
  }
  /*
   * 设置当前页序号-------论文
   */
  public set CurrPageIndexUsers(value: number) {
    const divName = this.divEdit;
    SetInputValueInDivObj(divName, 'hidCurrPageIndexUsers', value);
  }

  /* 根据条件获取相应的记录对象的列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
  */
  public async BindGv_QxUsers() {
    const objDivLayOut = this.divEdit;
    if (objDivLayOut == null) return;
    const strListDiv = GetDivObjInDivObj(objDivLayOut, this.mstrListDivUser);
    const strWhereCond = await this.CombineUsersCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvUsersSimObjLst: Array<clsvUsersSimEN> = [];

    try {
      this.recCount = await vUsersSim_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: 10,
        whereCond: strWhereCond,
        orderBy: UsersCRUD.sortUsersBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      await vUsersSim_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
        arrvUsersSimObjLst = <Array<clsvUsersSimEN>>jsonData;
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    //if (arrQxUsersObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_vUsersSim(strListDiv, arrvUsersSimObjLst);
      console.log('完成BindGv_QxUsers!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 显示QxUsers对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
     <param name = "divContainer">显示容器</param>
     <param name = "arrQxUsersObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_vUsersSim(
    divContainer: HTMLDivElement,
    arrvUsersSimObjLst: Array<clsvUsersSimEN>,
  ) {
    const strThisFuncName = this.BindTab_vUsersSim.name;
    const objLayOut = this.divEdit;
    if (objLayOut == null) return;
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
        fldName: 'userId',
        colHeader: '用户ID',
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
        colHeader: '用户名',
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
        fldName: 'majorName',
        colHeader: '专业',
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
        colHeader: '确定',
        text: '确定',
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
          //btn1.setAttribute("onclick", `btnUserRecordInTab_Click('${strKeyId}');`);
          (function (strKeyId1) {
            btn1.onclick = function () {
              UsersLstSel.btnReturnClick(strKeyId1);
            };
          })(strKeyId);
          return btn1;
        },
      },
    ];
    BindTabV2Where_V(divContainer, arrvUsersSimObjLst, arrDataColumn, 'userId', 'TopicUser');
    //BindTab(o, arrQxUsersObjLst, arrDataColumn, "userId");
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombineUsersCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const strTopicId: string = clsPrivateSessionStorage.topicIdInTree;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.userId_q != '') {
        strWhereCond += ` And ${clsvUsersSimEN.con_UserId} like '%${this.userId_q}%'`;
      }
      if (this.userName_q != '') {
        strWhereCond += ` And ${clsvUsersSimEN.con_UserName} like '%${this.userName_q}%'`;
      }
      if (IsNullOrEmpty(this.idCurrEduCls) == false && this.idCurrEduCls != '0') {
        const arrStuId = await CurrEduClsStuEx_GetStuIDLstByIdCurrEduCls(this.idCurrEduCls);
        const arrTeacherId = await CurrEduClsTeacherEx_GetTeacherIdLstByIdCurrEduCls(
          this.idCurrEduCls,
        );
        const arrUserId = arrStuId.concat(arrTeacherId).map((x) => `'${x}'`);
        const strUserIdLst = arrUserId.join(',');
        console.error(arrStuId);
        console.error(arrTeacherId);
        console.error(arrUserId);
        console.error(strUserIdLst);

        strWhereCond += ` And ${clsvUsersSimEN.con_UserId} in (${strUserIdLst})`;
      }

      strWhereCond += ` And isGSuser = 1`;
      //排除获取已存在的关系数据
      strWhereCond += ` And userId not in (select userId from RTUserRela where topicId = '${strTopicId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineQxUsersCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvUsersBy(value: string) {
    const divName = this.divEdit;
    SetInputValueInDivObj(divName, 'hidSortvUsersBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvUsersBy(): string {
    const divName = this.divEdit;
    return GetInputValueInDivObj(divName, 'hidSortvUsersBy');
  }

  /* 用户列表表头排序；
   */
  /* 函数功能:从界面列表中根据某一个字段排序
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
    <param name = "strSortByFld">排序的字段</param>
  */
  public async SortByUser(strSortByFld: string) {
    if (UsersCRUD.sortUsersBy.indexOf(strSortByFld) >= 0) {
      if (UsersCRUD.sortUsersBy.indexOf('Asc') >= 0) {
        UsersCRUD.sortUsersBy = `${strSortByFld} Desc`;
      } else {
        UsersCRUD.sortUsersBy = `${strSortByFld} Asc`;
      }
    } else {
      UsersCRUD.sortUsersBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_QxUsers();
  }

  /* 函数功能:在数据 列表中跳转到某一页 用户列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
<param name = "intPageIndex">页序号</param>
*/
  public IndexPageThree(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_QxUsers();
  }

  //主题用户角色
  /// <summary>
  /// 为下拉框获取数据,从表:[OperationType]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_TopicUserRole_q(ddlTopicUserRole_q: string) {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlTopicUserRole_q);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlTopicUserRole_q} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrTopicUserRoleObjLst = await TopicUserRole_GetObjLstCache();
      BindDdl_ObjLst(
        ddlTopicUserRole_q,
        arrTopicUserRoleObjLst,
        clsTopicUserRoleEN.con_TopicUserRoleId,
        clsTopicUserRoleEN.con_TopicUserRoleName,
        '角色',
      );
      console.log('完成BindDdl_TopicUserRole_q!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /**
   * 表ID (Used In CombineCondition())
   **/
  public get idCurrEduCls(): string {
    const objDivQuery = this.divEdit;

    CheckControlExistInDivObj(objDivQuery, 'select', 'ddlidCurrEduCls');
    const strValue = GetSelectValueInDivObj(objDivQuery, 'ddlidCurrEduCls');
    return strValue;
  }
  /**
   * 表ID (Used In CombineCondition())
   **/
  public set idCurrEduCls(value: string) {
    const objDivQuery = this.divEdit;
    if (objDivQuery == null) return;
    SetSelectValueByIdInDivObj(objDivQuery, 'ddlidCurrEduCls', value);
  }
  //主题用户角色
  public get TopicUserRole_q(): string {
    const objDivQuery = this.divEdit;

    const strRoleId = GetSelectValueInDivObj(objDivQuery, 'ddlTopicUserRole_q');
    if (strRoleId == '0') return '';
    return strRoleId;
  }
  /*
   * 主题用户角色
   */
  public set TopicUserRole_q(value: string) {
    const divName = this.divEdit;
    SetSelectValueByIdInDivObj(divName, 'ddlTopicUserRole_q', value);
  }

  /** 删除记录
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   **/
  public async btnAddUsersToTopic_Click() {
    const strThisFuncName = this.btnAddUsersToTopic_Click.name;
    try {
      if (IsNullOrEmpty(UsersLstSel.objPageEdit.TopicUserRole_q) == true) {
        const strInfo = `请选择用户角色!`;

        //显示信息框
        alert(strInfo);
        return false;
      }

      const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要添加的用户！');
        return '';
      }
      for (const strUserId of arrKeyIds) {
        await RTUserRelaEx_AddUserId(
          clsPrivateSessionStorage.topicIdInTree,
          strUserId,
          UsersLstSel.objPageEdit.TopicUserRole_q,
          clsPubLocalStorage.idCurrEduCls,
        );
      }
      this.HideDialog_divUserList();
      UsersLstSel.objPageEdit.iShowList.BindGvCache(clsRTUserRelaEN._CurrTabName, arrKeyIds[0]);
    } catch (e: any) {
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
  /*
    按钮单击,用于调用Js函数中btn_Click
   (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    console.log(strKeyId);
    //        const objShowList: IShowList
    const objPage: UsersLstSel = UsersLstSel.objPageEdit;

    switch (strCommandName) {
      case 'AddUsersToTopic': //删除研究主题AddgsReflectLog
        objPage.btnAddUsersToTopic_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'ResearchTopic_QUDIEx.btn_Click');

        break;
    }
  }

  // /**
  //  * 显示对话框
  //  * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_TS_ShowDialog)
  //  **/
  // public ShowDialog_divUserList(strOp: string) {
  //   //const strThisFuncName = this.ShowDialog_divUserList.name;
  //   //检查相关控件是否存在

  //   CheckControlExist(divName, 'div', 'divUserList');
  //   CheckControlExist(divName, 'h4', 'lblDialogTitle_divUserList');
  //   if (strOp === 'Add' || strOp === 'AddWithMaxId') {
  //     $('#lblDialogTitle_divUserList').html('添加记录');
  //     //divUserList_EditEx.GetMaxStrId('#txtMeetingId');
  //   } else if (strOp === 'Update') {
  //     $('#lblDialogTitle_divUserList').html('修改记录');
  //   } else if (strOp === 'Detail') {
  //     // $('#btnSubmit_divUserList').hide();
  //     $('#lblDialogTitle_divUserList').html('详细信息');
  //   }
  //   ShowDialog('#divUserList');
  // }

  /**
   * 隐藏对话框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_TS_HideDialog)
   **/
  // public HideDialog_divUserList() {
  //   //const strThisFuncName = this.HideDialog_divUserList.name;
  //   CheckControlExist(divName, 'div', 'divUserList');
  //   HideDialog('#divUserList');
  // }
}
