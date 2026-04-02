import $ from 'jquery';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
// import { StudentInfoCRUD } from '@/viewsBase/UserManage/StudentInfoCRUD';
import { clsCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsStuEN';
import { clsStudentInfoEN } from '@/ts/L0Entity/UserManage/clsStudentInfoEN';
import { clsvStudentInfoEN } from '@/ts/L0Entity/UserManage/clsvStudentInfoEN';
import {
  CurrEduClsStu_AddNewRecordAsync,
  CurrEduClsStu_IsExistRecordAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsStuWApi';
import {
  StudentInfo_AddNewRecordAsync,
  StudentInfo_DelRecordAsync,
  StudentInfo_DelStudentInfosAsync,
  StudentInfo_GetObjByIdStudentInfoAsync,
  StudentInfo_GetObjLstByIdStudentInfoLstAsync,
} from '@/ts/L3ForWApi/UserManage/clsStudentInfoWApi';
import {
  vStudentInfo_GetObjLstAsync,
  vStudentInfo_GetObjLstByPagerAsync,
  vStudentInfo_GetObjLstByPagerCache,
  vStudentInfo_GetRecCountByCondAsync,
  vStudentInfo_GetRecCountByCondCache,
} from '@/ts/L3ForWApi/UserManage/clsvStudentInfoWApi';
import {
  arrSelectedKeys,
  BindTab_V,
  GetCheckedKeyIds,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { StudentInfoCRUD } from '@/viewsBase/UserManage/StudentInfoCRUD';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
  SetLabelHtmlByIdInDivObj,
  GetSelectValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetSelectObjInDivObj,
  SetSpanHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { Ref } from 'vue';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { CurrEduCls_GetObjByIdCurrEduClsCache } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import {
  XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache,
  XzMajor_BindDdl_IdXzMajorInDivCache,
} from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { XzGradeBaseEx_BindDdl_idGradeBaseInDivCache } from '@/ts/L3ForWApiExShare/SysPara/clsvXzGradeBaseExWApi';
import { userStore } from '@/store/modulesShare/user';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

// declare function CloseWindow(): void;
/*
 * 宣布一个已经在其他地方定义存在的变量strUrl_Session_SetString，
 * 用于定义处理Session-设置String函数的地址
 */
declare let strUrl_Session_SetString: string;
/* StudentInfoCRUD 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export default class StudentInfoList extends StudentInfoCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static EditRef: Ref<any>;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
  protected iShowList: IShowList;
  public static objPageEdit: StudentInfoList;
  public static objPageEdit2: StudentInfoList;
  public static objPageEdit3: StudentInfoList;
  protected _className = 'Unknown'; // 基类中的实际字段
  // 定义虚拟属性
  get className(): string {
    return this._className;
  }
  constructor(strClassName: string, objShowList: IShowList, divLayout: HTMLDivElement) {
    super(divLayout);
    this._className = strClassName;
    this.iShowList = objShowList;
    if (StudentInfoList.SetPageEdit(this, 1) == true) return;
    if (StudentInfoList.SetPageEdit(this, 2) == true) return;
    if (StudentInfoList.SetPageEdit(this, 3) == true) return;
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
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvStudentInfoBy: string = "idStudentInfo";
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    this.BindGv_vStudentInfoCache();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'vStudentInfo':
        alert('该类没有绑定该函数：[this.BindGv_vStudentInfo_Cache]！');
        //this.BindGv_vStudentInfoCache();;
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    // const objPage = new StudentInfoList();
    const objPage: StudentInfoList = <StudentInfoList>(
      StudentInfoList.GetPageEditObj('StudentInfoList')
    );
    if (divLayout != null) {
      const divDataLst = GetDivObjInDivObj(divLayout, 'divDataLst');
      const arrKeyIds = GetCheckedKeyIdsInDivObj(divDataLst);
    }
    //const objPageEdit: Ex = new Ex(objPage);
    switch (strCommandName) {
      case 'CurrEduClsInTab':
        objPage.btnCurrEduClsInTab_Click(strKeyId);
        break;
      case 'PageLoad':
        if (objPage != null) {
          objPage.PageLoad();
        }
        break;

      case 'AddStuToEduCls':
        objPage.btnAddStuToEduCls_Click();
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
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        // strKeyId = GetFirstCheckedKeyIdInDivObj(divDataLst);
        // if (arrKeyIds.length == 0) {
        //   alert('请选择需要复制的记录！');
        //   return;
        // }
        //objPage.btnCopyRecord_Click();
        break;
      case 'SetDiv':
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'StudentInfoList.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  public mstrListDiv = 'divDataLst'; //列表区数据列表层id
  public bolIsLoadEditRegion = false; //记录是否导入编辑区的变量
  public bolIsLoadDetailRegion = false; //记录是否导入详细信息区的变量
  public divName4Edit = 'divEdit'; //编辑区的Id
  public divName4Detail = 'divDetail'; //详细信息区的Id
  //public objPager: clsPager = new clsPager();
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 15;
  }
  public recCount = 0;

  /*
   * 函数功能:页面导入,当页面开始运行时所发生的事件
   */
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      const bolIsSuccess = await this.ShowDialog_StudentLst();
      if (bolIsSuccess == false) return;
      const objLayOut = this.getDivName(enumDivType.LayOut_01);
      if (objLayOut == null) return;
      const strCourseId = clsPubLocalStorage.courseId;
      const objCurrEduCls = await CurrEduCls_GetObjByIdCurrEduClsCache(
        this.idCurrEduCls,
        strCourseId,
      );
      if (objCurrEduCls == null) {
        const strMsg = `当前教学班为空，请检查！`;
        SetLabelHtmlByIdInDivObj(objLayOut, 'lblViewTitle', strMsg);
        return;
      }

      const strMsg = `相关教学班:${objCurrEduCls.eduClsName}(${objCurrEduCls.idCurrEduCls})`;
      SetSpanHtmlInDivObj(objLayOut, 'spnEduClsName', strMsg);
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      this.SetEventFunc();
      const strRoleId = userStore.getRoleId;
      //判断角色
      //管理员

      if (strRoleId == '00620002') {
        $('#btnOkPushStuText').show();
      }

      this.hidSortvStudentInfoBy = 'stuId Asc';
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(objLayOut, this.divName4Pager);
        this.bolIsInitShow = true; //
      }
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vStudentInfoCache();
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad_Cache)
   */
  public async PageLoadCache() {
    // 在此处放置用户代码以初始化页面
    try {
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      this.hidSortvStudentInfoBy = 'stuId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vStudentInfoCache();
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   */
  public async btnQuery_Click() {
    await this.BindGv_vStudentInfoCache();
  }

  /* 函数功能:为查询区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   */
  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
    await this.SetDdl_idXzCollegeInDiv();
    await this.SetDdl_idGradeBaseInDiv();
  }

  /*
     添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnCopyRecord_Click)
    */
  public async btnCopyRecord_Click() {
    try {
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      await this.CopyRecord(arrKeyIds);
      await this.BindGv_vStudentInfoCache();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `复制记录不成功,${e}.`;
      alert(strMsg);
    }
  }

  public async btnAddStuToEduCls_Click() {
    try {
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      await this.AddStuToEduCls(arrKeyIds);
      await this.BindGv_vStudentInfoCache();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `复制记录不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 
    在数据表里删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
   */
  public async btnDelRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      await this.DelRecord(strKeyId);
      await this.BindGv_vStudentInfoCache();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
    在数据表里选择记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
   */
  public async btnSelectRecordInTab_Click1(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      this.SelectRecord(strKeyId);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `选择记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
    根据关键字删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   */
  public async DelRecord(strid_StudentInfo: string) {
    try {
      const responseText = await StudentInfo_DelRecordAsync(strid_StudentInfo);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //StudentInfo_ReFreshCache();
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
    根据关键字选择相应的记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
     <param name = "sender">参数列表</param>
   */
  public async SelectRecord(strid_StudentInfo: string) {
    try {
      const objStudentInfoEN = await StudentInfo_GetObjByIdStudentInfoAsync(strid_StudentInfo);

      console.log('完成SelectRecord!', objStudentInfoEN);
      Redirect('/Index/Main_vStudentInfo');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   */
  public async btnDelRecord_Click() {
    try {
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_vStudentInfoCache();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnExportExcel_Click)
   */
  public async btnExportExcel_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strWhereCond = ' 1=1 ';

    try {
      const arrvStudentInfoObjLst: Array<clsvStudentInfoEN> = await vStudentInfo_GetObjLstAsync(
        strWhereCond,
      );
      this.BindTab_vStudentInfo(this.thisDivList, arrvStudentInfoObjLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `导出Excel不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevStudentInfoCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.StuID_q != '') {
        strWhereCond += ` And ${clsvStudentInfoEN.con_StuId} like '%${this.StuID_q}%'`;
      }
      if (this.StuName_q != '') {
        strWhereCond += ` And ${clsvStudentInfoEN.con_StuName} like '%${this.StuName_q}%'`;
      }
      ////根据当前教学班来查询学生数据；
      if (IsNullOrEmpty(this.idCurrEduCls) == false) {
        strWhereCond += ` And IdStudentInfo not in (select IdStu from CurrEduClsStu where idCurrEduCls='${this.idCurrEduCls}' )`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0009)在组合查询条件(CombineStudentInfoCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevStudentInfoConditionObj(): Promise<clsvStudentInfoEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const objvStudentInfo_Cond: clsvStudentInfoEN = new clsvStudentInfoEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.StuID_q != '') {
        objvStudentInfo_Cond.SetCondFldValue(clsvStudentInfoEN.con_StuId, this.StuID_q, 'like');
      }
      if (this.StuName_q != '') {
        objvStudentInfo_Cond.SetCondFldValue(clsvStudentInfoEN.con_StuName, this.StuName_q, 'like');
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0010)在组合查询条件对象(CombineStudentInfoConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objvStudentInfo_Cond;
  }

  /* 显示vStudentInfo对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
     <param name = "divContainer">显示容器</param>
     <param name = "arrStudentInfoObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_vStudentInfo(
    divContainer: HTMLDivElement,
    arrvStudentInfoObjLst: Array<clsvStudentInfoEN>,
  ) {
    const strThisFuncName = this.BindTab_vStudentInfo.name;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
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
        funcName: () => {},
      },
      {
        fldName: clsvStudentInfoEN.con_StuId,
        sortBy: clsvStudentInfoEN.con_StuId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: () => {},
      },
      {
        fldName: 'stuName',
        sortBy: 'stuName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '姓名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: () => {},
      },
      {
        fldName: clsvStudentInfoEN.con_SexDesc,
        sortBy: clsvStudentInfoEN.con_SexDesc,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '性别',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: () => {},
      },
      {
        fldName: 'collegeName',
        sortBy: 'collegeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院名称',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: clsvStudentInfoEN.con_MajorName,
        sortBy: clsvStudentInfoEN.con_MajorName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: clsvStudentInfoEN.con_GradeBaseName,
        sortBy: clsvStudentInfoEN.con_GradeBaseName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '入学年级',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: () => {},
      },
      {
        fldName: clsvStudentInfoEN.con_AdminClsName,
        sortBy: clsvStudentInfoEN.con_AdminClsName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '班级',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
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
          // btn1.setAttribute('onclick', `btnCurrEduClsInTab_Click('${strKeyId}');`);
          (function (strKeyId: string) {
            btn1.onclick = function () {
              StudentInfoList.vuebtn_Click('CurrEduClsInTab', strKeyId);
            };
          })(strKeyId);

          return btn1;
        },
      },
      //{
      //    fldName: "",
      //    sortBy: "", sortFun: SortFun, getDataSource: "",
      //    colHeader: "修改",
      //    text: "修改",
      //    tdClass: "text-left",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btn_Click('UpdateRecordInTab', '${strKeyId}');`);
      //        return btn1;
      //    }
      //},
      //{
      //    fldName: "",
      //    sortBy: "", sortFun: SortFun, getDataSource: "",
      //    colHeader: "删除",
      //    text: "删除",
      //    tdClass: "text-left",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btn_Click('DelRecordInTab', '${strKeyId}');`);
      //        return btn1;
      //    }
      //},
    ];
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    BindTab_V(divDataLst, arrvStudentInfoObjLst, arrDataColumn, 'idStudentInfo', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  //确定选择 并添加到关系表中
  public async btnCurrEduClsInTab_Click(strkeyId: string) {
    //获取页面传入参数，判断调用哪个数据源放
    const divName = this.getDivName(enumDivType.LayOut_01);
    let strMsg;
    switch (this.pageType) {
      case 'CurrEduClsInfo':
        await this.AddNewRecordSaveCurrEduClsStu(this.idCurrEduCls, strkeyId);
        break;
      case 'TextRead':
        ////这里调用中学课文界面方法；
        ////获取课文Id；
        //const strTextId = GetInputValueInDivObj(divName, 'hidTextId');
        //strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
        //strUpdUser = userStore.getUserId;
        ////推送前查询该教学班是否已经有推送记录；
        //const strWhere = "pushTypeId = '02' And requesTypeId = '03' And tableKey= '" + strTextId + "' And receiveUser='" + strkeyId + "' And idCurrEduCls = '" + strIdCurrEduCls + "'";
        //const responseTextOne = await sys_RequestPush_GetFirstObjAsync(strWhere);
        //const objsys_RequestPushEN: clssys_RequestPushEN = <clssys_RequestPushEN>responseTextOne;
        //if (objsys_RequestPushEN != null) {
        //    strIdCurrEduclsstrInfo: string = `当前数据已经有推送`;
        //    //显示信息框
        //    alert(strInfo);
        //    return;
        //}
        //else {
        //    const responseText = await zx_TextEx_RequestPushDataToSingerStuAsync(strkeyId, strTextId, strIdCurrEduCls, strUpdUser);
        //    strIdCurrEduclsbolIsExist: boolean = responseText;
        //    if (bolIsExist == true) {
        //        strIdCurrEduclsstrMsg: string = `推送成功！`;
        //        alert(strMsg);
        //    }
        //    else {
        //        strIdCurrEduclsstrMsg: string = `推送失败！`;
        //        alert(strMsg);
        //    }
        //    return responseText;//一定要有一个返回值，否则会出错！
        //}
        break;
      default:
        strMsg = `this.pageType:[${this.pageType}]在switch中没有处理。(in btnCurrEduClsInTab_Click)`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /* 添加新记录，保存函数
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSaveCurrEduClsStu(strCurrEduClsId: string, strIdStu: string) {
    // this.DivName = "divAddNewRecordSave";
    const divName = this.getDivName(enumDivType.LayOut_01);
    // const strCurrEduClsId = GetInputValueInDivObj(divName, 'hidCurrEduClsId');
    // const strId_Teacher = strid_Teacher;
    const objCurrEduClsStuEN: clsCurrEduClsStuEN = new clsCurrEduClsStuEN();
    await this.PutDataToCurrEduClsStu(objCurrEduClsStuEN, strCurrEduClsId, strIdStu);
    try {
      //同一用户，同一主题 同一观点 只能添加一次；
      const strWhere = ` 1 = 1 And idCurrEduCls = '${strCurrEduClsId}' And idStu = '${strIdStu}'`;
      const bolIsExist: boolean = await CurrEduClsStu_IsExistRecordAsync(strWhere);

      if (bolIsExist == true) {
        const strMsg = `您已经加入过该教学班了！`;
        alert(strMsg);
        return bolIsExist; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await CurrEduClsStu_AddNewRecordAsync(objCurrEduClsStuEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
        //关闭列表
        // CloseWindow();
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjCurrEduClsStuEN">数据传输的目的类对象</param>
*/
  public async PutDataToCurrEduClsStu(
    pobjCurrEduClsStuEN: clsCurrEduClsStuEN,
    strCurrEduClsId: string,
    strid_Stu: string,
  ) {
    const divName = this.getDivName(enumDivType.LayOut_01);

    pobjCurrEduClsStuEN.SetIdCurrEduCls(strCurrEduClsId); // 教学班

    //获取用户，通过用户Id 查询学生表数据得到学生流水号；
    const strUserId = userStore.getUserId;
    // const strid_TeacherInfo = '';
    // const strSchoolTeam = '';
    // const strSchoolYear = '';
    pobjCurrEduClsStuEN.SetIdStu(strid_Stu); // 老
    //pobjCurrEduClsStuEN.schoolTerm = this.schoolTerm;// 学期
    //pobjCurrEduClsStuEN.schoolYear = this.schoolYear;// 学年
    pobjCurrEduClsStuEN.SetModifyDate(clsPubFun4Web.getNowDate_ymd()); //
    pobjCurrEduClsStuEN.SetModifyUserId(strUserId); //
    // pobjCurrEduClsStuEN.SetMemo(this.memo;// 备注
  }

  /* 函数功能:在数据 列表中跳转到某一页
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
     <param name = "intPageIndex">页序号</param>
   */
  public async IndexPage(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    await this.BindGv_vStudentInfoCache();
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   */
  public async BindGv_vStudentInfoCache() {
    if (this.hidSortvStudentInfoBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortvStudentInfoBy)为空，请检查！(In BindGv_vStudentInfo)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divList = GetDivObjInDivObj(objLayOut, 'divList');
    if (divList == null) return;
    const strWhereCond = await this.CombinevStudentInfoCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvStudentInfoObjLst: Array<clsvStudentInfoEN> = [];
    try {
      this.recCount = await vStudentInfo_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvStudentInfoBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvStudentInfoObjLst = await vStudentInfo_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }

    try {
      this.BindTab_vStudentInfo(divList, arrvStudentInfoObjLst);
      console.log('完成BindGv_vStudentInfo!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      //console.trace();
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv_Cache)
   */
  public async BindGv_vStudentInfoCacheV2(divList: HTMLDivElement) {
    if (this.hidSortvStudentInfoBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortvStudentInfoBy)为空，请检查！(In BindGv_vStudentInfo_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const objvStudentInfo_Cond = await this.CombinevStudentInfoConditionObj();
    const strWhereCond = JSON.stringify(objvStudentInfo_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvStudentInfoObjLst: Array<clsvStudentInfoEN> = [];
    try {
      this.recCount = await vStudentInfo_GetRecCountByCondCache(objvStudentInfo_Cond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvStudentInfoBy,
        sortFun: (x, y) => {
          x = x;
          y = y;

          return 0;
        },
      };
      arrvStudentInfoObjLst = await vStudentInfo_GetObjLstByPagerCache(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
      return;
    }
    if (arrvStudentInfoObjLst.length == 0) {
      const strKey = `${clsStudentInfoEN._CurrTabName}`;
      const strMsg = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_vStudentInfo(divList, arrvStudentInfoObjLst);
      console.log('完成BindGv_vStudentInfo!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 在用户自定义控件中，设置关键字的值，是否只读
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetKeyReadOnly)
  /// </summary>
  /// <param name = "bolReadonly">是否只读</param>
  public SetKeyReadOnly(bolReadonly: boolean) {
    $('#txtid_StudentInfo').attr('ReadOnly', bolReadonly.toString());
  }

  /* 复制记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   */
  public async CopyRecord(arrid_StudentInfo: Array<string>) {
    try {
      const responseText = await StudentInfo_GetObjLstByIdStudentInfoLstAsync(arrid_StudentInfo);
      console.log('responseText=');
      console.log(responseText);
      let intCount = 0;
      const arrStudentInfoObjLst: Array<clsStudentInfoEN> = <Array<clsStudentInfoEN>>responseText;
      for (const objInFor of arrStudentInfoObjLst) {
        const responseText2 = await StudentInfo_AddNewRecordAsync(objInFor);
        console.log('responseText2=');
        console.log(responseText2);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          // const strInfo = `克隆记录成功!`;
          intCount++;
        } else {
          const strInfo = `克隆记录不成功!`;
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = `共克隆了${intCount}条记录!`;
      alert(strInfo);
      console.log('完成！');
    } catch (e: any) {
      const strMsg = `复制记录不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  public async AddStuToEduCls(arrid_StudentInfo: Array<string>) {
    try {
      const arrStudentInfoObjLst = await StudentInfo_GetObjLstByIdStudentInfoLstAsync(
        arrid_StudentInfo,
      );
      let intCount = 0;

      for (const objInFor of arrStudentInfoObjLst) {
        const returnBool = await this.AddNewRecordSaveCurrEduClsStu(
          this.idCurrEduCls,
          objInFor.idStudentInfo,
        );

        if (returnBool == true) {
          // const strInfo = `克隆记录成功!`;
          intCount++;
        } else {
          const strInfo = `添加到教学班不成功!`;
          //显示信息框
          alert(strInfo);
        }
      }
      const strInfo = `共添加了${intCount}条记录!`;
      alert(strInfo);
      console.log('完成！');
    } catch (e: any) {
      const strMsg = `添加到教学班不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /* 根据关键字列表删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   */
  public async DelMultiRecord(arrid_StudentInfo: Array<string>) {
    try {
      const responseText = await StudentInfo_DelStudentInfosAsync(arrid_StudentInfo);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //StudentInfo_ReFreshCache();
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 显示{0}对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
     <param name = "divContainer">显示容器</param>
     <param name = "objStudentInfo">需要显示的对象</param>
   */
  public ShowStudentInfoObj(divContainer: HTMLDivElement, objStudentInfo: clsStudentInfoEN) {
    const strThisFuncName = this.ShowStudentInfoObj.name;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const sstrKeys = GetObjKeys(objStudentInfo);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objStudentInfo.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = `${strKey}:${strValue}`;
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /* 函数功能:从界面列表中获取第一个关键字的值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
     <param name = "pobjStudentInfoEN">表实体类对象</param>
    <returns>列表的第一个关键字值</returns>
   */
  public GetFirstKey(): string {
    if (arrSelectedKeys.length == 1) {
      return arrSelectedKeys[0];
    } else {
      alert(`请选择一个关键字！目前选择了:${arrSelectedKeys.length}个关键字。`);
      return '';
    }
  }

  /*
    设置Session
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetSessionAsync)
    <param name = "Key">关键字</param>
    <param name = "Value">值</param>
    */
  public SetSessionAsync(Key: string, Value: string): Promise<void> {
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: strUrl_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(`strKey, strValue=${strKey}${strValue}`);
        },
      });
    });
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }
  /*
   * 获取当前页序号(Used In BindGv_)
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvStudentInfoBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvStudentInfoBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvStudentInfoBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvStudentInfoBy');
  }
  /*
   * 学号 (Used In CombineCondition())
   */
  public get StuID_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtStuId_q');
  }
  /*
   * 姓名 (Used In CombineCondition())
   */
  public get StuName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtStuName_q');
  }
  public static GetPageEditObj(strClassName: string): any {
    if (StudentInfoList.objPageEdit != null) {
      const strClassNameOld = StudentInfoList.objPageEdit.className;
      if (strClassNameOld == strClassName) return StudentInfoList.objPageEdit;
    }
    if (StudentInfoList.objPageEdit2 != null) {
      const strClassNameOld = StudentInfoList.objPageEdit2.className;
      if (strClassNameOld == strClassName) return StudentInfoList.objPageEdit2;
    }
    if (StudentInfoList.objPageEdit3 != null) {
      const strClassNameOld = StudentInfoList.objPageEdit3.className;
      if (strClassNameOld == strClassName) return StudentInfoList.objPageEdit3;
    }
    return null;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (StudentInfoList.objPageEdit == null) {
          StudentInfoList.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = StudentInfoList.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            StudentInfoList.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (StudentInfoList.objPageEdit2 == null) {
          StudentInfoList.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = StudentInfoList.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            StudentInfoList.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (StudentInfoList.objPageEdit3 == null) {
          StudentInfoList.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = StudentInfoList.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            StudentInfoList.objPageEdit3 = objDataLst;
            return true;
          } else return false;
        }
        break;
      default:
        return false;
      // break;
    }
  }
  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_StudentLst(): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_StudentLst.name;
    if (StudentInfoList.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (StudentInfoList.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditRef为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await StudentInfoList.EditObj.showDialog();
    }
    this.divLayout = StudentInfoList.EditObj.$refs.refDivLayout;
    if (this.divLayout == null) {
      if (StudentInfoList.times4TestShowDialog < 2) {
        StudentInfoList.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_StudentLst();
        }, 100);
      } else {
        const strMsg = Format(
          '当前Layout的层(div)对象为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      StudentInfoList.times4TestShowDialog = 0;
    }
    StudentInfoList.vuebtn_Click('SetDiv', '');
    return true;
  }

  /*
   * 学号 (Used In CombineCondition())
   */
  public get idCurrEduCls(): string {
    return StudentInfoList.GetPropValue('idCurrEduCls');
  }
  public async SetDdl_idXzCollegeInDiv() {
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return;
    await XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache(
      objDivQuery,
      'ddlIdXzCollege_q',
      clsSysPara4WebApi.spIdSchool,
    ); //
  }
  public async SetDdl_idGradeBaseInDiv() {
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return;
    await XzGradeBaseEx_BindDdl_idGradeBaseInDivCache(objDivQuery, 'ddlIdGradeBase_q'); //
  }
  /**
   * 设置绑定下拉框，针对字段:[IdXzMajor]
   * (AGC.PureClassEx.clsASPDropDownListBLEx_Static:GC_SetBindDdl4TabFeature4QueryEdit_TS)
   **/

  public async SetDdl_IdXzMajorInDiv() {
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return;
    await XzMajor_BindDdl_IdXzMajorInDivCache(objDivQuery, 'ddlIdXzMajor_q'); //
  }
  /** 函数功能:系统生成的Change事件函数
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript+<>c__DisplayClass12_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
   **/
  public async ddlIdXzCollege_q_SelectedIndexChanged() {
    //alert('请在扩展层:UsersCRUDExEx中重写该函数！');
    if (IsNullOrEmpty(this.idXzCollege_q) == true) return;
    this.SetDdl_idXzMajorById_CollegeInDiv(this.idXzCollege_q);
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

  /**
   * 学院流水号 (Used In CombineCondition())
   **/
  public get idXzCollege_q(): string {
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return '';
    const strValue = GetSelectValueInDivObj(objDivQuery, 'ddlIdXzCollege_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 学院流水号 (Used In CombineCondition())
   **/
  public set idXzCollege_q(value: string) {
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return;
    SetSelectValueByIdInDivObj(objDivQuery, 'ddlIdXzCollege_q', value);
  }
  /**
   * 专业流水号 (Used In CombineCondition())
   **/
  public get idXzMajor_q(): string {
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return '';
    const strValue = GetSelectValueInDivObj(objDivQuery, 'ddlIdXzMajor_q');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /**
   * 专业流水号 (Used In CombineCondition())
   **/
  public set idXzMajor_q(value: string) {
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return;
    SetSelectValueByIdInDivObj(objDivQuery, 'ddlIdXzMajor_q', value);
  }
  /*
   * 年级流水号
   */
  public set idGradeBase(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    SetSelectValueByIdInDivObj(divName, 'ddlIdGradeBase', value);
  }
  /*
   * 年级流水号
   */
  public get idGradeBase(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetSelectValueInDivObj(divName, 'ddlIdGradeBase');
  }
  /** 函数功能:设置事件函数
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetEventFunc)
   **/
  public async SetEventFunc() {
    const strThisFuncName = this.SetEventFunc.name;
    const objDivQuery = this.getDivName(enumDivType.Query_02);
    if (objDivQuery == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      const ddlIdXzCollege_q: HTMLSelectElement = GetSelectObjInDivObj(
        objDivQuery,
        'ddlIdXzCollege_q',
      );
      ddlIdXzCollege_q.addEventListener('change', (e: any) => {
        console.error(e);
        this.ddlIdXzCollege_q_SelectedIndexChanged();
      });
    } catch (e: any) {
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
  public ddlIdXzCollegeq_SelectedIndexChanged(): void {} //
  public get pageType(): string {
    return StudentInfoList.GetPropValue('pageType');
  }
}
