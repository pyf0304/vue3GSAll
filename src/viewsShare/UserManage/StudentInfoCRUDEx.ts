import { StudentInfo_EditEx } from './StudentInfo_EditEx';
import { StudentInfoCRUD } from '@/viewsBase/UserManage/StudentInfoCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
import { clsStudentInfoENEx } from '@/ts/L0Entity/UserManage/clsStudentInfoENEx';
import {
  StudentInfo_GetObjByIdStudentInfoAsync,
  StudentInfo_ReFreshCache,
  StudentInfo_UpdateRecordAsync,
} from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';
import {
  StudentInfoEx_DelStudentInfoEx,
  StudentInfoEx_SynchStudentToPlatform,
} from '@/ts/L3ForWApiExShare/UserManage_GP/clsStudentInfoExWApi';
import { userStore } from '@/store/modulesShare/user';
import { Users_GetObjByUserIdAsync } from '@/ts/L3ForWApi/UserManage/clsUsersWApi';
import { QxUserIdentity_GetNameByIdentityIdCache } from '@/ts/L3ForWApi/UserManage/clsQxUserIdentityWApi';

import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { message } from '@/utils/myMessage';
import { userRoleRelationStore } from '@/store/modulesShare/qxUserRoleRelation';
//import $ from "jquery";
/** StudentInfoCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class StudentInfoCRUDEx extends StudentInfoCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortvStudentInfoBy = "idStudentInfo";
  /**
   * 每页记录数，在扩展类可以修改
   **/
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
    console.log(strType, strPara);
    this.BindGv_StudentInfoCache(this.divList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vStudentInfo':
        alert('该类没有绑定该函数：[this.BindGv_vStudentInfo_Cache]！');
        //this.BindGv_vStudentInfoCache();;
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
    let objPage: StudentInfoCRUDEx;
    let objPageEdit;
    if (StudentInfoCRUD.objPageCRUD == null) {
      StudentInfoCRUD.objPageCRUD = new StudentInfoCRUDEx(divLayout);
      objPage = <StudentInfoCRUDEx>StudentInfoCRUD.objPageCRUD;
    } else {
      objPage = <StudentInfoCRUDEx>StudentInfoCRUD.objPageCRUD;
    }

    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'SynchToPlat':
        objPage.btnSynchToPlat_Click();
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
        objPageEdit = new StudentInfo_EditEx('StudentInfo_EditEx', objPage);

        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit = new StudentInfo_EditEx('StudentInfo_EditEx', objPage);
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
        objPage.btnExportExcel_Click();
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
        AccessBtnClickDefault(strCommandName, 'StudentInfoCRUDExEx.btn_Click');

        break;
    }
  }

  /** 显示StudentInfo对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrStudentInfoExObjLst:需要绑定的对象列表
   **/
  public async BindTab_StudentInfo4Func(
    divContainer: HTMLDivElement,
    arrStudentInfoExObjLst: Array<clsStudentInfoENEx>,
  ) {
    const strThisFuncName = this.BindTab_StudentInfo4Func.name;
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
        fldName: clsStudentInfoEN.con_StuId,
        sortBy: clsStudentInfoEN.con_StuId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学号',
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
        fldName: clsStudentInfoEN.con_StuName,
        sortBy: clsStudentInfoEN.con_StuName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '姓名',
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
        fldName: clsStudentInfoENEx.con_CollegeName,
        sortBy: 'collegeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院名称',
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
        fldName: clsStudentInfoENEx.con_MajorName,
        sortBy: 'majorName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业名称',
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
        fldName: clsStudentInfoENEx.con_GradeBaseName,
        sortBy: 'gradeBaseName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '入学年级',
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
        fldName: clsStudentInfoENEx.con_GradeName,
        sortBy: 'gradeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '年级',
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
        fldName: clsStudentInfoEN.con_UserType,
        sortBy: clsStudentInfoEN.con_UserType,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '用户类型',
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
        fldName: clsStudentInfoENEx.con_IsGpUser,
        sortBy: clsStudentInfoENEx.con_IsGpUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '平台用户?',
        text: '',
        tdClass: 'text-left',
        columnType: 'Icon',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsStudentInfoENEx.con_DateTimeSim,
        sortBy: 'dateTimeSim',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '简化日期时间',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrStudentInfoExObjLst, arrDataColumn);
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
    await BindTab(
      divDataLst,
      arrStudentInfoExObjLst,
      arrDataColumn,
      clsStudentInfoEN.con_IdStudentInfo,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  public async DelMultiRecord(arrIdStudentInfo: Array<string>) {
    const strThisFuncName = this.DelMultiRecord.name;
    try {
      const returnBool = await StudentInfoEx_DelStudentInfoEx(arrIdStudentInfo);
      if (returnBool == true) {
        StudentInfo_ReFreshCache();
        const strInfo = Format('删除记录成功!');
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = Format('删除记录不成功!');
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
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
  /** 函数功能:系统生成的Change事件函数
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass9_0:<Gen_Vue_Ts_GeneEventFuncEx>b__1)
   **/
  public async ddlIdXzCollegeq_SelectedIndexChanged() {
    alert('请在扩展层:StudentInfoCRUDExEx中重写该函数!');
  }
  public async SetEventFunc() {
    const strThisFuncName = this.SetEventFunc.name;
    // 在此处放置用户代码以初始化页面
    try {
      // const ddlIdXzCollege_q: HTMLSelectElement = GetSelectObjInDivObj(
      //   StudentInfoCRUD.divQuery,
      //   'ddlIdXzCollege_q',
      // );
      // ddlIdXzCollege_q.addEventListener('change', (e) => {
      //   console.error(e);
      //   this.ddlIdXzCollegeq_SelectedIndexChanged();
      // });
    } catch (e) {
      const strMsg = Format(
        '设置事件函数不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      StudentInfoCRUD.UserTypeStatic = await userStore.getUserType;
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();
      this.SetEventFunc();
      StudentInfoCRUD.sortStudentInfoBy = 'stuId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_StudentInfo4Func(this.divList);
    } catch (e) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    const UserTypeStatic = StudentInfoCRUD.UserTypeStatic; //静态变量;//静态变量
    // const IdXzCollegeStatic = StudentInfoCRUD.IdXzCollegeStatic; //静态变量;//静态变量

    await this.SetDdl_IdXzCollegeInDiv(UserTypeStatic); //查询区域

    // await this.SetDdl_IdXzMajorInDiv(IdXzCollegeStatic); //查询区域

    await this.SetDdl_IdGradeBaseInDiv(); //查询区域

    await this.SetDdl_IdGradeInDiv(); //查询区域
  }

  /**
   * 审核用户
   **/
  public async btnSynchToPlat_Click() {
    const strThisFuncName = this.btnSynchToPlat_Click.name;
    try {
      const arrKeyIds = GetCheckedKeyIdsInDivObj(this.divList);
      if (arrKeyIds.length == 0) {
        alert('请选择需要同步平台的用户!');
        return '';
      }

      let intCount = 0;
      for (const strIdStu of arrKeyIds) {
        const objStudentInfo = await StudentInfo_GetObjByIdStudentInfoAsync(strIdStu);
        if (objStudentInfo == null) continue;
        const objUsers = await Users_GetObjByUserIdAsync(objStudentInfo.stuId);
        if (objUsers == null) continue;
        const strIdentityDesc = await QxUserIdentity_GetNameByIdentityIdCache(objUsers.identityId);
        await StudentInfoEx_SynchStudentToPlatform(
          strIdStu,
          clsSysPara4WebApi.spIdSchool,
          strIdentityDesc,
          userStore.getUserId,
        );
        await userRoleRelationStore.delUser(objStudentInfo.stuId, clsSysPara4WebApi.currSelPrjId);
        intCount++;
      }
      StudentInfo_ReFreshCache();
      await this.BindGv_StudentInfo4Func(this.divList);
      message.success(`同步用户到平台成功！共同步了${intCount}个用户`);
    } catch (e) {
      const strMsg = Format(
        '同步用户到平台不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
}
