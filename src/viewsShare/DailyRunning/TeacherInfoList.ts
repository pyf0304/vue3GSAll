import $ from 'jquery';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
// import { TeacherInfoCRUD } from '@/viewsBase/UserManage/TeacherInfoCRUD';
import { clsCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherEN';

import {
  TeacherInfo_AddNewRecordAsync,
  TeacherInfo_DelRecordAsync,
  TeacherInfo_DelTeacherInfosAsync,
  TeacherInfo_GetObjByIdTeacherAsync,
  TeacherInfo_GetObjLstByIdTeacherLstAsync,
} from '@/ts/L3ForWApi/BaseInfo/clsTeacherInfoWApi';

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
import { TeacherInfoCRUD } from '@/viewsBase/BaseInfo/TeacherInfoCRUD';
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
  SetSpanHtmlInDivObj,
  GetDivObjInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { Ref } from 'vue';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
import { CurrEduCls_GetObjByIdCurrEduClsCache } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { clsvTeacherInfoEN } from '@/ts/L0Entity/BaseInfo/clsvTeacherInfoEN';
import { clsTeacherInfoEN } from '@/ts/L0Entity/BaseInfo/clsTeacherInfoEN';
import {
  CurrEduClsTeacher_AddNewRecordAsync,
  CurrEduClsTeacher_IsExistRecordAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsTeacherWApi';
import { userStore } from '@/store/modulesShare/user';
import {
  vTeacherInfo_GetObjLstAsync,
  vTeacherInfo_GetObjLstByPagerAsync,
  vTeacherInfo_GetObjLstByPagerCache,
  vTeacherInfo_GetRecCountByCondAsync,
  vTeacherInfo_GetRecCountByCondCache,
} from '@/ts/L3ForWApi/BaseInfo/clsvTeacherInfoWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

// declare function CloseWindow(): void;
/*
 * 宣布一个已经在其他地方定义存在的变量strUrl_Session_SetString，
 * 用于定义处理Session-设置String函数的地址
 */
declare let strUrl_Session_SetString: string;
/* TeacherInfoCRUD 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export default class TeacherInfoList extends TeacherInfoCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public static EditRef: Ref<any>;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public static strPageDispModeId = '01'; //PopupBox(弹出框)
  protected iShowList: IShowList;
  public static objPageEdit: TeacherInfoList;
  public static objPageEdit2: TeacherInfoList;
  public static objPageEdit3: TeacherInfoList;
  protected _className = 'Unknown'; // 基类中的实际字段
  // 定义虚拟属性
  get className(): string {
    return this._className;
  }
  constructor(strClassName: string, objShowList: IShowList, divLayout: HTMLDivElement) {
    super(divLayout);
    this._className = strClassName;
    this.iShowList = objShowList;
    if (TeacherInfoList.SetPageEdit(this, 1) == true) return;
    if (TeacherInfoList.SetPageEdit(this, 2) == true) return;
    if (TeacherInfoList.SetPageEdit(this, 3) == true) return;
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
    this.BindGv_vTeacherInfoCache();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'vTeacherInfo':
        alert('该类没有绑定该函数：[this.BindGv_vTeacherInfo_Cache]！');
        //this.BindGv_vTeacherInfoCache();;
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    // const objPage = new TeacherInfoList();
    const objPage: TeacherInfoList = <TeacherInfoList>(
      TeacherInfoList.GetPageEditObj('TeacherInfoList')
    );
    const divDataLst = GetDivObjInDivObj(divLayout, 'divDataLst');
    const arrKeyIds = GetCheckedKeyIdsInDivObj(divDataLst);
    strKeyId = GetFirstCheckedKeyIdInDivObj(divDataLst);
    //const objPageEdit: Ex = new Ex(objPage);
    switch (strCommandName) {
      case 'PageLoad':
        objPage.PageLoad();
        break;

      case 'AddTeacherToEduCls':
        objPage.btnAddTeacherToEduCls_Click();
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
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'SetDiv':
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'TeacherInfoList.btn_Click');

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

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   */
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      TeacherInfoList.times4TestShowDialog = 0;
      const bolIsSuccess = await this.ShowDialog_TeacherLst();
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
        $('#btnOkPushTeacherText').show();
      }

      this.hidSortvTeacherInfoBy = 'teacherId Asc';
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(objLayOut, this.divName4Pager);
        this.bolIsInitShow = true; //
      }
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vTeacherInfoCache();
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

      this.hidSortvTeacherInfoBy = 'teacherId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vTeacherInfoCache();
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
    await this.BindGv_vTeacherInfoCache();
  }

  /* 函数功能:为查询区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   */
  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
    await this.SetDdl_idXzCollegeInDiv();
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
      await this.BindGv_vTeacherInfoCache();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `复制记录不成功,${e}.`;
      alert(strMsg);
    }
  }

  public async btnAddTeacherToEduCls_Click() {
    try {
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert('请选择需要克隆的记录！');
        return '';
      }
      await this.AddTeacherToEduCls(arrKeyIds);
      await this.BindGv_vTeacherInfoCache();
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
      await this.BindGv_vTeacherInfoCache();
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
  public async DelRecord(strid_TeacherInfo: string) {
    try {
      const responseText = await TeacherInfo_DelRecordAsync(strid_TeacherInfo);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //TeacherInfo_ReFreshCache();
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
  public async SelectRecord(strid_TeacherInfo: string) {
    try {
      const objTeacherInfoEN = await TeacherInfo_GetObjByIdTeacherAsync(strid_TeacherInfo);

      console.log('完成SelectRecord!', objTeacherInfoEN);
      Redirect('/Index/Main_vTeacherInfo');
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
      await this.BindGv_vTeacherInfoCache();
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
      const arrvTeacherInfoObjLst: Array<clsvTeacherInfoEN> = await vTeacherInfo_GetObjLstAsync(
        strWhereCond,
      );
      this.BindTab_vTeacherInfo(this.thisDivList, arrvTeacherInfoObjLst);
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
  public async CombinevTeacherInfoCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.TeacherId_q != '') {
        strWhereCond += ` And ${clsvTeacherInfoEN.con_TeacherId} like '%${this.TeacherId_q}%'`;
      }
      if (this.TeacherName_q != '') {
        strWhereCond += ` And ${clsvTeacherInfoEN.con_TeacherName} like '%${this.TeacherName_q}%'`;
      }
      ////根据当前教学班来查询学生数据；
      if (IsNullOrEmpty(this.idCurrEduCls) == false) {
        strWhereCond += ` And IdTeacher not in (select IdTeacher from CurrEduClsTeacher where idCurrEduCls='${this.idCurrEduCls}' )`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0009)在组合查询条件(CombineTeacherInfoCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevTeacherInfoConditionObj(): Promise<clsvTeacherInfoEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const objvTeacherInfo_Cond: clsvTeacherInfoEN = new clsvTeacherInfoEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.TeacherId_q != '') {
        objvTeacherInfo_Cond.SetCondFldValue(
          clsvTeacherInfoEN.con_TeacherId,
          this.TeacherId_q,
          'like',
        );
      }
      if (this.TeacherName_q != '') {
        objvTeacherInfo_Cond.SetCondFldValue(
          clsvTeacherInfoEN.con_TeacherName,
          this.TeacherName_q,
          'like',
        );
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0010)在组合查询条件对象(CombineTeacherInfoConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objvTeacherInfo_Cond;
  }

  /* 显示vTeacherInfo对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
     <param name = "divContainer">显示容器</param>
     <param name = "arrTeacherInfoObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_vTeacherInfo(
    divContainer: HTMLDivElement,
    arrvTeacherInfoObjLst: Array<clsvTeacherInfoEN>,
  ) {
    const strThisFuncName = this.BindTab_vTeacherInfo.name;
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
        fldName: clsvTeacherInfoEN.con_TeacherId,
        sortBy: clsvTeacherInfoEN.con_TeacherId,
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
        fldName: clsvTeacherInfoEN.con_TeacherName,
        sortBy: clsvTeacherInfoEN.con_TeacherName,
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
        fldName: clsvTeacherInfoEN.con_SexDesc,
        sortBy: clsvTeacherInfoEN.con_SexDesc,
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
          btn1.setAttribute('onclick', `btnCurrEduClsInTab_Click('${strKeyId}');`);
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
    BindTab_V(divDataLst, arrvTeacherInfoObjLst, arrDataColumn, 'idTeacher', this);
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
    const strPagetype = GetInputValueInDivObj(divName, 'hidPagetype');
    if (strPagetype == '01') {
      await this.AddNewRecordSaveCurrEduClsTeacher(this.idCurrEduCls, strkeyId);
    } else {
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
      //    const responseText = await zx_TextEx_RequestPushDataToSingerTeacherAsync(strkeyId, strTextId, strIdCurrEduCls, strUpdUser);
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
    }
  }

  /* 添加新记录，保存函数
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSaveCurrEduClsTeacher(strCurrEduClsId: string, strIdTeacher: string) {
    const objCurrEduClsTeacherEN: clsCurrEduClsTeacherEN = new clsCurrEduClsTeacherEN();
    await this.PutDataToCurrEduClsTeacher(objCurrEduClsTeacherEN, strCurrEduClsId, strIdTeacher);
    try {
      //同一用户，同一主题 同一观点 只能添加一次；
      const strWhere = ` 1 = 1 And idCurrEduCls = '${strCurrEduClsId}' And IdTeacher = '${strIdTeacher}'`;
      const bolIsExist: boolean = await CurrEduClsTeacher_IsExistRecordAsync(strWhere);

      if (bolIsExist == true) {
        const strMsg = `您已经加入过该教学班了！`;
        alert(strMsg);
        return bolIsExist; //一定要有一个返回值，否则会出错！
      }
      const returnBool = await CurrEduClsTeacher_AddNewRecordAsync(objCurrEduClsTeacherEN);
      if (returnBool == true) {
        const strInfo = `添加教师到教学班成功!`;

        //显示信息框
        alert(strInfo);
        //关闭列表
        // CloseWindow();
      } else {
        const strInfo = `添加教师到教学班不成功!`;
        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加教师到教学班不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjCurrEduClsTeacherEN">数据传输的目的类对象</param>
*/
  public async PutDataToCurrEduClsTeacher(
    pobjCurrEduClsTeacherEN: clsCurrEduClsTeacherEN,
    strCurrEduClsId: string,
    strIdTeacher: string,
  ) {
    pobjCurrEduClsTeacherEN.SetIdCurrEduCls(strCurrEduClsId); // 教学班

    //获取用户，通过用户Id 查询学生表数据得到学生流水号；
    const strUserId = userStore.getUserId;
    // const strid_TeacherInfo = '';
    // const strSchoolTeam = '';
    // const strSchoolYear = '';
    pobjCurrEduClsTeacherEN.SetIdTeacher(strIdTeacher); // 老
    //pobjCurrEduClsTeacherEN.schoolTerm = this.schoolTerm;// 学期
    //pobjCurrEduClsTeacherEN.schoolYear = this.schoolYear;// 学年
    pobjCurrEduClsTeacherEN.SetUpdDate(clsPubFun4Web.getNowDate_ymd()); //
    pobjCurrEduClsTeacherEN.SetUpdUser(strUserId); //
    // pobjCurrEduClsTeacherEN.SetMemo(this.memo;// 备注
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
    await this.BindGv_vTeacherInfoCache();
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   */
  public async BindGv_vTeacherInfoCache() {
    if (this.hidSortvTeacherInfoBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortvTeacherInfoBy)为空，请检查！(In BindGv_vTeacherInfo)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divList = GetDivObjInDivObj(objLayOut, 'divList');
    if (divList == null) return;
    const strWhereCond = await this.CombinevTeacherInfoCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvTeacherInfoObjLst: Array<clsvTeacherInfoEN> = [];
    try {
      this.recCount = await vTeacherInfo_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvTeacherInfoBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvTeacherInfoObjLst = await vTeacherInfo_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }

    try {
      this.BindTab_vTeacherInfo(divList, arrvTeacherInfoObjLst);
      console.log('完成BindGv_vTeacherInfo!');
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
  public async BindGv_vTeacherInfoCacheV2(divList: HTMLDivElement) {
    if (this.hidSortvTeacherInfoBy == null) {
      const strMsg = `在显示列表时，排序字段(hidSortvTeacherInfoBy)为空，请检查！(In BindGv_vTeacherInfo_Cache)`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const objvTeacherInfo_Cond = await this.CombinevTeacherInfoConditionObj();
    const strWhereCond = JSON.stringify(objvTeacherInfo_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvTeacherInfoObjLst: Array<clsvTeacherInfoEN> = [];
    try {
      this.recCount = await vTeacherInfo_GetRecCountByCondCache(objvTeacherInfo_Cond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvTeacherInfoBy,
        sortFun: (x, y) => {
          x = x;
          y = y;

          return 0;
        },
      };
      arrvTeacherInfoObjLst = await vTeacherInfo_GetObjLstByPagerCache(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
      return;
    }
    if (arrvTeacherInfoObjLst.length == 0) {
      const strKey = `${clsTeacherInfoEN._CurrTabName}`;
      const strMsg = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=${strKey})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_vTeacherInfo(divList, arrvTeacherInfoObjLst);
      console.log('完成BindGv_vTeacherInfo!');
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
    $('#txtid_TeacherInfo').attr('ReadOnly', bolReadonly.toString());
  }

  /* 复制记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyRecord)
   */
  public async CopyRecord(arrid_TeacherInfo: Array<string>) {
    try {
      const arrTeacherInfoObjLst = await TeacherInfo_GetObjLstByIdTeacherLstAsync(
        arrid_TeacherInfo,
      );

      let intCount = 0;

      for (const objInFor of arrTeacherInfoObjLst) {
        const responseText2 = await TeacherInfo_AddNewRecordAsync(objInFor);
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

  public async AddTeacherToEduCls(arrid_TeacherInfo: Array<string>) {
    try {
      const arrTeacherInfoObjLst = await TeacherInfo_GetObjLstByIdTeacherLstAsync(
        arrid_TeacherInfo,
      );
      let intCount = 0;

      for (const objInFor of arrTeacherInfoObjLst) {
        const returnBool = await this.AddNewRecordSaveCurrEduClsTeacher(
          this.idCurrEduCls,
          objInFor.idTeacher,
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
  public async DelMultiRecord(arrid_TeacherInfo: Array<string>) {
    try {
      const responseText = await TeacherInfo_DelTeacherInfosAsync(arrid_TeacherInfo);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //TeacherInfo_ReFreshCache();
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
     <param name = "objTeacherInfo">需要显示的对象</param>
   */
  public ShowTeacherInfoObj(divContainer: HTMLDivElement, objTeacherInfo: clsTeacherInfoEN) {
    const strThisFuncName = this.ShowTeacherInfoObj.name;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const sstrKeys = GetObjKeys(objTeacherInfo);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objTeacherInfo.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = `${strKey}:${strValue}`;
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /* 函数功能:从界面列表中获取第一个关键字的值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
     <param name = "pobjTeacherInfoEN">表实体类对象</param>
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
  public set hidSortvTeacherInfoBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvTeacherInfoBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvTeacherInfoBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvTeacherInfoBy');
  }
  /*
   * 学号 (Used In CombineCondition())
   */
  public get TeacherId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtTeacherId_q');
  }
  /*
   * 姓名 (Used In CombineCondition())
   */
  public get TeacherName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtTeacherName_q');
  }
  public static GetPageEditObj(strClassName: string): any {
    if (TeacherInfoList.objPageEdit != null) {
      const strClassNameOld = TeacherInfoList.objPageEdit.className;
      if (strClassNameOld == strClassName) return TeacherInfoList.objPageEdit;
    }
    if (TeacherInfoList.objPageEdit2 != null) {
      const strClassNameOld = TeacherInfoList.objPageEdit2.className;
      if (strClassNameOld == strClassName) return TeacherInfoList.objPageEdit2;
    }
    if (TeacherInfoList.objPageEdit3 != null) {
      const strClassNameOld = TeacherInfoList.objPageEdit3.className;
      if (strClassNameOld == strClassName) return TeacherInfoList.objPageEdit3;
    }
    return null;
  }
  public static SetPageEdit(objDataLst: any, intIndex: number): boolean {
    const strNewClassName = objDataLst.className;
    switch (intIndex) {
      case 1:
        if (TeacherInfoList.objPageEdit == null) {
          TeacherInfoList.objPageEdit = objDataLst;
          return true;
        } else {
          const strClassNameOld = TeacherInfoList.objPageEdit.className;
          if (strClassNameOld == strNewClassName) {
            TeacherInfoList.objPageEdit = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 2:
        if (TeacherInfoList.objPageEdit2 == null) {
          TeacherInfoList.objPageEdit2 = objDataLst;
          return true;
        } else {
          const strClassNameOld = TeacherInfoList.objPageEdit2.className;
          if (strClassNameOld == strNewClassName) {
            TeacherInfoList.objPageEdit2 = objDataLst;
            return true;
          } else return false;
        }
        break;
      case 3:
        if (TeacherInfoList.objPageEdit3 == null) {
          TeacherInfoList.objPageEdit3 = objDataLst;
          return true;
        } else {
          const strClassNameOld = TeacherInfoList.objPageEdit3.className;
          if (strClassNameOld == strNewClassName) {
            TeacherInfoList.objPageEdit3 = objDataLst;
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
  public async ShowDialog_TeacherLst(): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_TeacherLst.name;
    if (TeacherInfoList.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (TeacherInfoList.EditObj == null) {
        const strMsg = Format(
          '当前编辑区的EditRef为空，请检查！(in {0}.{1})',
          this.className,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await TeacherInfoList.EditObj.showDialog();
    }
    this.divLayout = TeacherInfoList.EditObj.$refs.refDivLayout;
    if (this.divLayout == null) {
      if (TeacherInfoList.times4TestShowDialog < 2) {
        TeacherInfoList.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_TeacherLst();
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
      TeacherInfoList.times4TestShowDialog = 0;
      this.divList = GetDivObjInDivObjN(this.divLayout, 'divList');
      this.divQuery = GetDivObjInDivObjN(this.divLayout, 'divQuery');
      this.divFunction = GetDivObjInDivObjN(this.divLayout, 'divFunction');
    }
    TeacherInfoList.vuebtn_Click('SetDiv', '');
    return true;
  }

  /*
   * 学号 (Used In CombineCondition())
   */
  public get idCurrEduCls(): string {
    return TeacherInfoList.GetPropValue('idCurrEduCls');
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
      // const ddlIdXzCollege_q: HTMLSelectElement = GetSelectObjInDivObj(
      //   objDivQuery,
      //   'ddlIdXzCollege_q',
      // );
      // ddlIdXzCollege_q.addEventListener('change', (e: any) => {
      //   console.error(e);
      //   this.ddlIdXzCollege_q_SelectedIndexChanged();
      // });
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
  public get pageType(): string {
    return TeacherInfoList.GetPropValue('pageType');
  }
}
