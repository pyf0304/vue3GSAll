import { UsersCRUD } from '@/viewsBase/UserManage/UsersCRUD';
import { XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsvUsersEN } from '@/ts/L0Entity/UserManage/clsvUsersEN';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { XzClgEx_BindDdl_IdXzCollegeForvUsersSimInDivCacheEx } from '@/ts/L3ForWApiExShare/BaseInfo/clsXzClgExWApi';
import { XzMajorEx_BindDdl_IdXzMajorForvUsersSimInDivCacheEx } from '@/ts/L3ForWApiExShare/BaseInfo/clsXzMajorExWApi';
import { Users_EditEx } from '@/viewsShare/UserManage/Users_EditEx';
import { clsUsersEN } from '@/ts/L0Entity/UserManage/clsUsersEN';

import { clsUsersENEx } from '@/ts/L0Entity/UserManage/clsUsersENEx';
import {
  Users_GetObjByUserIdAsync,
  Users_GetRecCountByCondCache,
  Users_ReFreshCache,
  Users_UpdateRecordAsync,
} from '@/ts/L3ForWApi/UserManage/clsUsersWApi';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import {
  UsersEx_GetObjExLstByPagerCache,
  UsersEx_SynchUsersToStudentAndPlatform,
} from '@/ts/L3ForWApiExShare/UserManage_GP/clsUsersExWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import {
  StudentInfoEx_GetIdStudentInfoByStuId,
  StudentInfoEx_SynchStudentToPlatform,
} from '@/ts/L3ForWApiExShare/UserManage_GP/clsStudentInfoExWApi';
import { QxUserIdentity_GetNameByIdentityIdCache } from '@/ts/L3ForWApi/UserManage/clsQxUserIdentityWApi';
import { message } from '@/utils/myMessage';
import { userStore } from '@/store/modulesShare/user';
//import $ from "jquery";
/** UsersCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class UsersCRUDEx extends UsersCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortvUsersBy = "UserId";
  /**
   * 每页记录数，在扩展类可以修改
   **/
  public get pageSize(): number {
    return 20;
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
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    this.BindGv_Users4Func(this.divList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vUsers':
      case 'Users':
        this.BindGv_Users4Func(this.divList);
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: UsersCRUDEx;
    let objPageEdit;
    if (UsersCRUD.objPageCRUD == null) {
      UsersCRUD.objPageCRUD = new UsersCRUDEx(divLayout);
      objPage = <UsersCRUDEx>UsersCRUD.objPageCRUD;
    } else {
      objPage = <UsersCRUDEx>UsersCRUD.objPageCRUD;
    }

    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'Audit':
        objPage.btnAudit_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new Users_EditEx('Users_EditEx', objPage);

        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit = new Users_EditEx('Users_EditEx', objPage);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPageEdit.btnUpdateRecord_Click(strKeyId);
        }
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要下移的记录！');
          return;
        }
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'UsersCRUDExEx.btn_Click');

        break;
    }
  }

  public async SetDdl_idXzMajorById_CollegeInDiv(stridXzCollege: string) {
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return;
    await XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache(
      objDivQuery,
      'ddlIdXzMajor_q',
      stridXzCollege,
    ); //
  }
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      this.SetEventFunc();
      //1、为下拉框设置数据源,绑定列表数据

      //1、为下拉框设置数据源,绑定列表数据

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      UsersCRUD.sortUsersBy = 'userId Asc';

      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(objLayOut, this.divName4Pager);
        this.bolIsInitShow = true; //
      }
      //2、显示无条件的表内容在GridView中
      await this.BindGv_Users4Func(this.divList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevUsersCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (IsNullOrEmpty(this.idXzCollege_q) == false && this.idXzCollege_q != '0') {
        strWhereCond += ` And ${clsvUsersEN.con_IdXzCollege} = '${this.idXzCollege_q}'`;
      }
      if (IsNullOrEmpty(this.idXzMajor_q) == false && this.idXzMajor_q != '0') {
        strWhereCond += ` And ${clsvUsersEN.con_IdXzMajor} = '${this.idXzMajor_q}'`;
      }
      if (IsNullOrEmpty(this.userName_q) == false) {
        strWhereCond += ` And ${clsvUsersEN.con_UserName} like '%${this.userName_q}%'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineUsersCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的对象列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
  */
  public async BindGv_Users4Func(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_Users4Func.name;
    if (UsersCRUD.sortUsersBy == null) {
      const strMsg = Format('在显示列表时,排序字段(sortUsersBy)为空,请检查!(In BindGv_UsersCache)');
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objUsersCond = await this.CombineUsersConditionObj();
    const strWhereCond = JSON.stringify(objUsersCond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrUsersExObjLst: Array<clsUsersENEx> = [];
    try {
      this.recCount = await Users_GetRecCountByCondCache(objUsersCond);
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format('根据条件:[{0}]获取的对象列表数为0!', objUsersCond.whereCond);
        const divDataLst: HTMLDivElement = <HTMLDivElement>document.getElementById('divDataLst');
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objUsersCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }

      let strSortFun = (x: any, y: any) => {
        console.log(x, y);
        return 0;
      };
      if (UsersCRUD.sortFunStatic != undefined) {
        strSortFun = UsersCRUD.sortFunStatic(UsersCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: UsersCRUD.sortUsersBy,
        sortFun: strSortFun,
      };
      arrUsersExObjLst = await UsersEx_GetObjExLstByPagerCache(objPagerPara);
    } catch (e) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    if (arrUsersExObjLst.length == 0) {
      const strKey = Format('{0}', clsUsersEN._CurrTabName);
      const strMsg = Format('根据条件获取的记录数为0!(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_Users4Func(divList, arrUsersExObjLst);
      //console.log("完成BindGv_Users4Func!");
    } catch (e) {
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:系统生成的Change事件函数
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass12_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   **/

  public async ddlid_XzCollege_q_SelectedIndexChanged() {
    //alert('请在扩展层:UsersCRUDExEx中重写该函数！');
    if (IsNullOrEmpty(this.idXzCollege_q) == true) return;
    this.SetDdl_idXzMajorById_CollegeInDiv(this.idXzCollege_q);
  }

  /**
   * 设置绑定下拉框，针对字段:[idXzCollege]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion4TabFeature1B)
   **/

  public async SetDdl_idXzCollegeInDiv() {
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return;

    await XzClgEx_BindDdl_IdXzCollegeForvUsersSimInDivCacheEx(objDivQuery, 'ddlIdXzCollege_q'); //
  }

  /**
   * 设置绑定下拉框，针对字段:[idXzMajor]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl_TS4QryRegion4TabFeature1B)
   **/

  public async SetDdl_IdXzMajorInDiv() {
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return;
    await XzMajorEx_BindDdl_IdXzMajorForvUsersSimInDivCacheEx(
      objDivQuery,
      'ddlIdXzMajor_q',
      clsSysPara4WebApi.cmPrjId,
    ); //
  }
  public async BindTab_Users4Func(
    divContainer: HTMLDivElement,
    arrUsersExObjLst: Array<clsUsersENEx>,
  ) {
    const strThisFuncName = this.BindTab_Users4Func.name;
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
        fldName: clsUsersEN.con_UserId,
        sortBy: clsUsersEN.con_UserId,
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
        fldName: clsUsersEN.con_UserName,
        sortBy: clsUsersEN.con_UserName,
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
        fldName: clsUsersEN.con_Password,
        sortBy: clsUsersEN.con_Password,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '口令',
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
        fldName: clsUsersENEx.con_GradeBaseName,
        sortBy: 'gradeBaseName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '年级名称',
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
        fldName: clsUsersENEx.con_CollegeName,
        sortBy: 'collegeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院名称',
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
        fldName: clsUsersENEx.con_MajorName,
        sortBy: 'majorName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业名称',
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
        fldName: clsUsersENEx.con_IdentityDesc,
        sortBy: 'identityDesc',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '身份描述',
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
        fldName: clsUsersENEx.con_RoleNames,
        sortBy: clsUsersENEx.con_RoleNames,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '角色s',
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
        fldName: clsUsersEN.con_IsAudit,
        sortBy: clsUsersEN.con_IsAudit,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '审核?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Icon',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsUsersEN.con_Email,
        sortBy: clsUsersEN.con_Email,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '电子邮箱',
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
        fldName: clsUsersENEx.con_DateTimeSim,
        sortBy: clsUsersENEx.con_DateTimeSim,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '日期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 10,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrUsersExObjLst, arrDataColumn);
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
    await BindTab(divDataLst, arrUsersExObjLst, arrDataColumn, clsUsersEN.con_UserId, this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /**
   * 审核用户
   **/
  public async btnAudit_Click() {
    const strThisFuncName = this.btnAudit_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要审核的用户!');
        return '';
      }

      await UsersEx_SynchUsersToStudentAndPlatform(
        arrKeyIds,
        clsSysPara4WebApi.spIdSchool,
        userStore.getUserId,
      );
      let intCount = 0;
      for (const strUserId of arrKeyIds) {
        const strIdStudentInfo = await StudentInfoEx_GetIdStudentInfoByStuId(strUserId);
        if (strIdStudentInfo == '') continue;
        const objUsers = await Users_GetObjByUserIdAsync(strUserId);
        if (objUsers == null) continue;
        const strIdentityDesc = await QxUserIdentity_GetNameByIdentityIdCache(objUsers.identityId);
        await StudentInfoEx_SynchStudentToPlatform(
          strIdStudentInfo,
          clsSysPara4WebApi.spIdSchool,
          strIdentityDesc,
          userStore.getUserId,
        );
        objUsers.SetIsAudit(true);
        objUsers.SetUserId(objUsers.userId);
        await Users_UpdateRecordAsync(objUsers);
        userStore.getAvatar;
        intCount++;
      }
      Users_ReFreshCache();
      await this.BindGv_Users4Func(this.divList);
      message.success(`审核成功！共审核了${intCount}个用户`);
    } catch (e) {
      const strMsg = Format(
        '审核用户不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
}
