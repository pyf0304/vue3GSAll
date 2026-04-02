import $ from 'jquery';
import { PaperReadWrite_EditEx } from '../GradEduPaper/PaperReadWrite_EditEx';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsPaperReadWriteWApiEx } from '@/ts/L3ForWApiEx/GraduateEdu/clsPaperReadWriteWApiEx';
import { vPaperReadWriteEx_CopyToEx } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperReadWriteExWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { PaperReadWriteCRUD } from '@/viewsBase/GradEduPaper/PaperReadWriteCRUD';
import { clsPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsPaperReadWriteEN';
import { clsvPaperReadWriteEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperReadWriteEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  vPaperReadWrite_GetObjLstByPagerCache,
  vPaperReadWrite_GetRecCountByCondCache,
  vPaperReadWrite_ReFreshThisCache,
} from '@/ts/L3ForWApi/GradEduPaper/clsvPaperReadWriteWApi';
import { clsvPaperReadWriteENEx } from '@/ts/L0Entity/GradEduPaper/clsvPaperReadWriteENEx';
import { PaperReadWrite_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperReadWriteWApi';
import { vPaperSubViewpoint_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';

import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { BindTab_V, GetCheckedKeyIds, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  ShowDivInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { vUsersSimEx_func } from '@/ts/L3ForWApiExShare/UserManage_GP/clsvUsersSimExWApi';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare function HideDialog(): void;
declare let window: any;
/* PaperReadWrite_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PaperReadList extends PaperReadWriteCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvPaperReadWriteBy: string = "paperRWId";
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
    console.log(strType, strPara);
    this.BindGv_vPaperReadWrite(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vPaperReadWrite':
        alert('该类没有绑定该函数：[this.BindGv_vPaperReadWrite_Cache]！');
        //this.BindGv_vPaperReadWriteCache();;
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
    let objPage: PaperReadList;
    if (PaperReadWriteCRUD.objPageCRUD == null) {
      PaperReadWriteCRUD.objPageCRUD = new PaperReadList(divLayout);
      objPage = <PaperReadList>PaperReadWriteCRUD.objPageCRUD;
    } else {
      objPage = <PaperReadList>PaperReadWriteCRUD.objPageCRUD;
    }
    const objPageEdit: PaperReadWrite_EditEx = new PaperReadWrite_EditEx(
      'PaperReadWrite_EditEx',
      objPage,
    );

    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
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
        AccessBtnClickDefault(strCommandName, 'PaperReadList.btn_Click');

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
      if (userStore.getUserId != '') {
        //加载页面所需数据源到缓存
        //const arrvPaperReadWrite_Cache = await vPaperReadWrite_GetObjLstAsync("1=1");

        //1、为下拉框设置数据源,绑定列表数据
        // const ddl_PaperId = await this.BindDdl_PaperId("ddlPaperId");

        //const ddl_OperationTypeId_q = await this.BindDdl_OperationTypeId("ddlOperationTypeId_q");
        // const ddl_OperationTypeId = await this.BindDdl_OperationTypeId("ddlOperationTypeId");
        //const ddl_UserId_q = await this.BindDdl_UserId("ddlUserId_q");

        const objUsers_Cond: clsvUsersSimEN = new clsvUsersSimEN(); //查询区域
        objUsers_Cond.SetCondFldValue(clsvPaperReadWriteEN.con_OperationTypeId, '01', '=');
        await clsDropDownList.BindDdl_UsersInvPaperReadWrite_Cache('ddlUserId_q'); //用户查询区域

        PaperReadWriteCRUD.sortvPaperReadWriteBy = 'updDate Desc';

        //strWhereCond = await this.CombinevPaperReadWriteCondition();

        //this.recCount= await vPaperReadWrite_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {
        //
        //});

        //存放userId
        $('#hidUserId').val(userStore.getUserId);
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }

        //2、显示无条件的表内容在GridView中
        await this.BindGv_vPaperReadWrite(this.thisDivList);
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

  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async btnQuery_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    //strWhereCond = await this.CombinevPaperReadWriteCondition();
    try {
      ShowDivInDivObj(objLayOut, 'divLoading');
      await this.BindGv_vPaperReadWrite(this.thisDivList);
      HideDivInDivObj(objLayOut, 'divLoading');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  //统计核算
  public async btnSynPaperRWStatistics_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strUserId = userStore.getUserId;
    try {
      ShowDivInDivObj(objLayOut, 'divLoading');
      const responseText2 = await clsPaperReadWriteWApiEx.SynPaperRWStatisticsAsync(strUserId);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `统计核算成功!`;

        //显示信息框
        alert(strInfo);
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        const strInfo = `统计核算不成功!`;

        //显示信息框
        alert(strInfo);
        HideDivInDivObj(objLayOut, 'divLoading');
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `统计核算异常,${e}.`;
      alert(strMsg);
      HideDivInDivObj(objLayOut, 'divLoading');
    }
  }
  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevPaperReadWriteCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const strReadWriteTypeId = GetInputValueInDivObj(divName, 'hidReadWriteTypeId');
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsvPaperReadWriteEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }
      //if (this.updDate_q != "") {
      //    strWhereCond += ` And ${clsvPaperReadWriteEN.con_UpdDate} like '%${this.updDate_q}%'`;
      //}
      //用户
      if (this.readUser_q != '' && this.readUser_q != '0') {
        strWhereCond += ` And ${clsvPaperReadWriteEN.con_UpdUser} = '${this.readUser_q}'`;
      }
      //if (this.readUser_q != "") {
      //    strWhereCond += ` And ${clsvPaperReadWriteEN.con_UpdUser} like '%${this.readUser_q}%'`;
      //}
      ////01代表论文阅读；
      //if (strReadWriteTypeId != "") {
      strWhereCond += ` And ${clsvPaperReadWriteEN.con_OperationTypeId} = '01'`;
      //}

      //if (this.operationTypeId_q != "" && this.operationTypeId_q != "0") {
      //    strWhereCond += ` And ${clsvPaperReadWriteEN.con_OperationTypeId} = '${this.operationTypeId_q}'`;
      //}
      //if (this.updUser_q != "") {
      //    strWhereCond += ` And ${clsvPaperReadWriteEN.con_UpdUser} like '%${this.updUser_q}%'`;
      //}

      //如果是阅读 则需要判断当前用户  01 阅读 03查看；

      if (strReadWriteTypeId == '01') {
        const strUserId = userStore.getUserId;
        const strRoleId = userStore.getRoleId;

        if (
          strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
          $('#btnDelRecord').show();
          $('#btnCancelSubmit').show();
          //可以查看所有；管理员
        }

        //判断角色 //教师00620003
        else if (strRoleId == '00620002') {
          $('#btnDelRecord').show();
          $('#btnCancelSubmit').show();
          //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
          strWhereCond += `And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='${strUserId}' And isEffective='1') And isEffective='1')`;
        } else {
          $('#btnDelRecord').hide();
          $('#btnCancelSubmit').hide();
          $('#ddlUserId_q').hide();
          //学生
          //只能查看自己的数据；或公开的数据；
          //strWhereCond += ` And ${clsvSubViewpointEN.con_UpdUser} = '${strUserId}'`;
          strWhereCond += ` And updUser = '${strUserId}'`;
        }
      }
      //else {

      //    //是查看那么可以显示所有无需控制；
      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperReadWriteCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  public CombinevPaperReadWriteConditionobj(): clsvPaperReadWriteEN {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const strReadWriteTypeId = GetInputValueInDivObj(divName, 'hidReadWriteTypeId');
    const objvPaperReadWrite_Cond: clsvPaperReadWriteEN = new clsvPaperReadWriteEN();

    objvPaperReadWrite_Cond.SetCondFldValue(
      clsvPaperReadWriteEN.con_IdCurrEduCls,
      clsPubLocalStorage.idCurrEduCls,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        objvPaperReadWrite_Cond.SetCondFldValue(
          clsvPaperReadWriteEN.con_PaperTitle,
          this.paperTitle_q,
          'like',
        );
      }
      //if (this.updDate_q != "") {
      //    strWhereCond += ` And ${clsvPaperReadWriteEN.con_UpdDate} like '%${this.updDate_q}%'`;
      //    objvPaperReadWrite_Cond.SetCondFldValue(clsvPaperReadWriteEN.con_UpdDate, this.updDate_q, "like");
      //}
      //用户
      if (this.readUser_q != '' && this.readUser_q != '0') {
        objvPaperReadWrite_Cond.SetCondFldValue(
          clsvPaperReadWriteEN.con_UpdUser,
          this.readUser_q,
          '=',
        );
      }

      objvPaperReadWrite_Cond.SetCondFldValue(clsvPaperReadWriteEN.con_OperationTypeId, '01', '=');

      if (strReadWriteTypeId == '01') {
        const strUserId = userStore.getUserId;
        const strRoleId = userStore.getRoleId;

        if (
          strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
          $('#btnDelRecord').show();
          $('#btnCancelSubmit').show();
          //可以查看所有；管理员
        }

        //判断角色 //教师00620003
        else if (strRoleId == '00620002') {
          $('#btnDelRecord').show();
          $('#btnCancelSubmit').show();

          //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
          //strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + strUserId + "' And isEffective='1') And isEffective='1')";
        } else {
          $('#btnCancelSubmit').hide();
          $('#ddlUserId_q').hide();
          $('#btnDelRecord').show();
          //学生
          //只能查看自己的数据；或公开的数据；
          //strWhereCond += ` And ${clsvSubViewpointEN.con_UpdUser} = '${strUserId}'`;

          objvPaperReadWrite_Cond.SetCondFldValue(clsvPaperReadWriteEN.con_UpdUser, strUserId, '=');
        }
      } else {
        //strWhereCond += ` And updUser = '${objvUserRoleRelation.userId}'`;
        //objvPaperReadWrite_Cond.SetCondFldValue(clsvPaperReadWriteEN.con_UpdUser, objvUserRoleRelation.userId, "=");
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineUsersConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objvPaperReadWrite_Cond;
  }

  /* 显示vPaperReadWrite对象的所有属性值
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   <param name = "divContainer">显示容器</param>
   <param name = "arrPaperReadWriteObjLst">需要绑定的对象列表</param>
 */
  public async BindTab_vPaperReadWrite(
    divContainer: HTMLDivElement,
    arrvPaperReadWriteObjLst: Array<clsvPaperReadWriteEN>,
  ) {
    const strThisFuncName = this.BindTab_vPaperReadWrite.name;
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
        fldName: 'paperTitle',
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
      //{
      //    fldName: "paperContent",
      //    colHeader: "主题内容",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
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
      //{
      //    fldName: "researchQuestion",
      //    colHeader: "研究问题",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "operationTypeName",
      //    colHeader: "操作类型名",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'userName',
        colHeader: '阅读者',
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
        fldName: 'updDate',
        colHeader: '阅读日期',
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
        fldName: 'isSubmit',
        colHeader: '是否提交',
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
        fldName: 'subVCount',
        colHeader: '观点数',
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
        fldName: 'teaCount',
        colHeader: '教师分',
        text: '',
        tdClass: 'text-left',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      //{
      //    fldName: "",
      //    colHeader: "修改",
      //    text: "修改",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info";
      //        btn1.setAttribute("onclick", `btnUpdateRecordInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},
      //{
      //    fldName: "",
      //    colHeader: "子观点",
      //    Text: "子观点",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btnSubviewPointRecordInTab_Click("${strKeyId}");`);
      //        return btn1;
      //    }
      //},

      {
        fldName: '',
        colHeader: 'pdf子观点',
        text: 'pdf子观点',
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
          //btn1.setAttribute("onclick", `btnSubviewPointRecordInTab_Click("${strKeyId}");`);
          btn1.setAttribute('onclick', `btnSubviewPointRecord_Click("${strKeyId}");`);
          return btn1;
        },
      },
      //{
      //    fldName: "",
      //    colHeader: "详细",
      //    Text: "详细",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info";
      //        btn1.setAttribute("onclick", `btnDetailRecordInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},
      //{
      //    fldName: "",
      //    colHeader: "删除",
      //    text: "删除",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info";
      //        btn1.setAttribute("onclick", `btnDelRecordInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},
    ];
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvPaperReadWriteObjLst, arrDataColumn, 'paperRWId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /* 删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
  */
  public async btnDelRecord_Click() {
    try {
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      let strKeyList;
      if (arrKeyIds.length == 0) return '';
      strKeyList = '';
      for (let i = 0; i < arrKeyIds.length; i++) {
        //先删除总表数据更新总表
        const strPaperId = arrKeyIds[i].toString();
        const responseText5 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
          strPaperId,
          '02',
          '3',
          clsPubLocalStorage.idCurrEduCls,
        );
        const returnBool5 = !!responseText5;
        if (returnBool5 == true) {
          console.log(`${strPaperId}论文读写数据总表删除成功；`);
        } else {
          console.log(`${strPaperId}论文读写数据总表删除失败；`);
        }

        if (i == 0) strKeyList = `${strKeyList}'${arrKeyIds[i].toString()}'`;
        else strKeyList += `,` + `'${arrKeyIds[i].toString()}'`;
      }
      //
      const strWhereCond = ` paperRWId in (${strKeyList})`;

      const intSubVCount = await vPaperSubViewpoint_GetRecCountByCondAsync(strWhereCond);

      if (intSubVCount != 0) {
        alert('请先删除该论文下子观点！');
        return '';
      } else {
        this.DelMultiRecord(arrKeyIds);

        //刷新缓存
        vPaperReadWrite_ReFreshThisCache(strIdCurrEducls);
        this.BindGv_vPaperReadWrite(this.thisDivList);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 根据关键字列表删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   */
  public async DelMultiRecord(arrPaperRWId: Array<string>) {
    try {
      const returnInt = await clsPaperReadWriteWApiEx.DelPaperReadWritesExAsync(arrPaperRWId);
      if (returnInt > 0) {
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

  //取消论文提交
  public async btnCancelSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    try {
      this.CancelSubmitRecordSave(strKeyId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*取消提交论文
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async CancelSubmitRecordSave(strKeyId: string) {
    const strThisFuncName = this.CancelSubmitRecordSave.name;

    //
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    const objPaperReadWriteEN: clsPaperReadWriteEN = new clsPaperReadWriteEN();
    objPaperReadWriteEN.SetPaperRWId(strKeyId);
    objPaperReadWriteEN.SetIsSubmit(false);
    objPaperReadWriteEN.SetSubmitter(userStore.getUserId); //提交人；
    objPaperReadWriteEN.sfUpdFldSetStr = objPaperReadWriteEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperReadWriteEN.paperRWId == '' || objPaperReadWriteEN.paperRWId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      PaperReadWrite_UpdateRecordAsync(objPaperReadWriteEN).then((jsonData) => {
        const returnBool: boolean = jsonData;
        if (returnBool == true) {
          const strInfo = `取消成功!`;

          //显示信息框
          alert(strInfo);
          //刷新缓存
          vPaperReadWrite_ReFreshThisCache(strIdCurrEducls);
          HideDialog();
          this.BindGv_vPaperReadWrite(this.thisDivList);
        } else {
          const strInfo = `取消不成功!`;

          //显示信息框
          alert(strInfo);
          console.log('取消失败');
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `取消记录不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的记录对象的列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
  */
  public async BindGv_vPaperReadWrite(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    //strWhereCond = await this.CombinevPaperReadWriteCondition();

    const objvPaperReadWrite_Cond: clsvPaperReadWriteEN = this.CombinevPaperReadWriteConditionobj();
    const strWhereCond = JSON.stringify(objvPaperReadWrite_Cond);

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvPaperReadWriteObjLst: Array<clsvPaperReadWriteEN> = [];
    let arrvPaperReadWriteExObjLst: Array<clsvPaperReadWriteENEx> = [];
    try {
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: PaperReadWriteCRUD.sortvPaperReadWriteBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      this.recCount = await vPaperReadWrite_GetRecCountByCondCache(
        objvPaperReadWrite_Cond,
        strIdCurrEducls,
      );
      console.log('完成计数!');
      arrvPaperReadWriteObjLst = await vPaperReadWrite_GetObjLstByPagerCache(
        objPagerPara,
        strIdCurrEducls,
      );
      console.log('完成对象列表获取!');

      arrvPaperReadWriteExObjLst = arrvPaperReadWriteObjLst.map(this.CopyToEx);

      for (const objInFor of arrvPaperReadWriteExObjLst) {
        await this.FuncMap(objInFor);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    try {
      this.BindTab_vPaperReadWrite(divList, arrvPaperReadWriteExObjLst);
      console.log('完成BindGv_vPaperReadWrite!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objzx_ConceptS">源对象</param>
  public async FuncMap(objvPaperReadWrite: clsvPaperReadWriteENEx) {
    try {
      {
        const vUsersSim_UserId = objvPaperReadWrite.updUser;

        const vUsersSim_UserName = await vUsersSimEx_func(
          clsvUsersSimEN.con_UserId,
          clsvUsersSimEN.con_UserName,
          vUsersSim_UserId,
        );
        objvPaperReadWrite.userName = vUsersSim_UserName;
        const updDate = objvPaperReadWrite.updDate;
        objvPaperReadWrite.updDate = updDate.substring(2, 14);
      }
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
  public CopyToEx(objzx_ConceptENS: clsvPaperReadWriteEN): clsvPaperReadWriteENEx {
    let objzx_ConceptENT = new clsvPaperReadWriteENEx();
    try {
      objzx_ConceptENT = vPaperReadWriteEx_CopyToEx(objzx_ConceptENS);
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

  /*
   * 用户
   */
  //public get readUser_q(): string {
  //    return $("#txtReadUser_q").val();
  //}
  public get readUser_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }
}
