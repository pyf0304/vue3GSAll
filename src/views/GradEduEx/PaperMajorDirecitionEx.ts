//
//import * as QQ from "q";

import $ from 'jquery';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { PaperEx_GetObjExLstByPagerAsync } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
import { MajorDirectionPaperRelaCRUD } from '@/viewsBase/GradEduPaper/MajorDirectionPaperRelaCRUD';
import { clsvXzMajorDirectionEN } from '@/ts/L0Entity/BaseInfo/clsvXzMajorDirectionEN';

import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { clsMajorDirectionPaperRelaEN } from '@/ts/L0Entity/GradEduPaper/clsMajorDirectionPaperRelaEN';
import { clsvMajorDirectionPaperRelaEN } from '@/ts/L0Entity/GradEduPaper/clsvMajorDirectionPaperRelaEN';

import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  vXzMajorDirection_GetObjLstByPagerAsync,
  vXzMajorDirection_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/BaseInfo/clsvXzMajorDirectionWApi';
import { XzMajor_GetObjLstAsync } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { LiteratureType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import {
  MajorDirectionPaperRela_AddNewRecordAsync,
  MajorDirectionPaperRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsMajorDirectionPaperRelaWApi';
import { vMajorDirectionPaperRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvMajorDirectionPaperRelaWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { Paper_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';
import { GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { BindDdl_ObjLst, BindTab_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare function HideDialogOne(): void;
declare let window: any;
/* PaperMajorDirecition 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class PaperMajorDirecitionEx extends MajorDirectionPaperRelaCRUD {
  public static mstrListDiv = 'divDataLst';
  //public static mstrSortvPaperBy: string = "paperId";

  //public objPager: clsPager = new clsPager();
  //专业方向
  public mstrListDivMajorDirection = 'divMajorDirectionDataLst';

  /*
   * 每页记录数，在扩展类可以修改
   */
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
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: PaperMajorDirecitionEx;
    if (MajorDirectionPaperRelaCRUD.objPageCRUD == null) {
      MajorDirectionPaperRelaCRUD.objPageCRUD = new PaperMajorDirecitionEx(divLayout);
      objPage = <PaperMajorDirecitionEx>MajorDirectionPaperRelaCRUD.objPageCRUD;
    } else {
      objPage = <PaperMajorDirecitionEx>MajorDirectionPaperRelaCRUD.objPageCRUD;
    }
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
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    this.SetCurrPageIndex(1);
    await this.BindGv_vPaperLoad(this.thisDivList);
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
*/
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      //查询文献类型绑定；
      if (userStore.getUserId != '') {
        // const ddl_UserId_q = await this.BindDdl_UserId("ddlUserId_q");

        await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q'); //用户查询区域
        //const ddl_LiteratureTypeId_q = await this.BindDdl_LiteratureTypeId("ddlLiteratureTypeId_q");
        //const ddl_LiteratureTypeId_q = await this.BindDdl_LiteratureTypeId_Cache("ddlLiteratureTypeId_q", new clsLiteratureTypeEN);

        //绑定 专业下拉框
        await this.BindDdl_idXzMajor('ddlIdXzMajor_q');
        MajorDirectionPaperRelaCRUD.sortvMajorDirectionPaperRelaBy = 'paperTitle Asc';
        this.hidSortvXzMajorDirectionBy = 'majorDirectionId Asc';
        const strWhereCond = await this.CombinevPaperCondition();
        this.recCount = await Paper_GetRecCountByCondAsync(strWhereCond);

        //2、显示无条件的表内容在GridView中
        //await this.BindGv_vPaper();

        const strUserId = userStore.getUserId;
        const strRoleId = userStore.getRoleId;

        $('#hidUserId').val(strUserId);
        //判断角色
        //管理员
        if (strRoleId != '00620001' && strRoleId != '00620002') {
          //如果是学生则 不可以选择用户下拉框
          //$("#ddlUserId_q").disabled = false;
          $('#ddlUserId_q').attr('disabled', 'disabled');
        }
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        await this.BindGv_vPaperLoad(this.thisDivList);
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

  /// <summary>
  /// 为下拉框获取数据,从表:[XzMajor]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_idXzMajor(ddlIdXzMajor: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlIdXzMajor);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlIdXzMajor} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrXzMajorObjLst: Array<clsXzMajorEN> = await XzMajor_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlIdXzMajor,
        arrXzMajorObjLst,
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        '专业',
      );
      console.log('完成BindDdl_idXzMajor!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async BindDdl_LiteratureTypeId(ddlLiteratureTypeId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrPaperObjLst: Array<clsLiteratureTypeEN> = await LiteratureType_GetObjLstAsync(
        strWhereCond,
      );
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrPaperObjLst,
        clsLiteratureTypeEN.con_LiteratureTypeId,
        clsLiteratureTypeEN.con_LiteratureTypeName,
        '',
      );
      console.log('完成BindDdl_LiteratureTypeId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 根据条件获取相应论文数据
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   */
  public async BindGv_vPaperLoad(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strWhereCond = await this.CombinevPaperCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrPaperExObjLst: Array<clsPaperENEx> = [];

    try {
      this.recCount = await Paper_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: MajorDirectionPaperRelaCRUD.sortvMajorDirectionPaperRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrPaperExObjLst = await PaperEx_GetObjExLstByPagerAsync(objPagerPara);

      //组合新的数据
      this.GetNewArrayList(divList, arrPaperExObjLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    try {
      //this.BindTab_vPaper(strListDiv, arrPaperExObjLst);

      console.log('完成BindGv_vPaper!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevPaperCondition(): Promise<string> {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }
      //if (this.updDate_q != "") {
      //    strWhereCond += ` And ${clsPaperEN.con_UpdDate} like '%${this.updDate_q}%'`;
      //}
      //if (this.literatureTypeId_q != "" && this.literatureTypeId_q != "0") {
      //    strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      //}

      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      if (strUserId != '') {
        $('#hidUserId').val(strUserId);
        //判断角色
        //管理员
        if (
          strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
          //$("#btnDelRecord").show();
          //$("#btnAudit").show();
        } else if (strRoleId == '00620002') {
          //$("#btnDelRecord").hide();
          //$("#btnAudit").show();
          //可以查看所属教学班下面的学生数据；
          //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
          strWhereCond += `And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='${strUserId}' And isEffective='1') And isEffective='1')`;
        } else {
          //$("#btnDelRecord").hide();
          //$("#btnAudit").hide();
          //学生00620003
          //只能查看自己的数据；或公开的数据；
          strWhereCond += ` And updUser = '${strUserId}'`;
        }
      } else {
        reLogin();
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
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
    this.BindGv_vPaperLoad(this.thisDivList);
  }
  /* 函数功能:从界面列表中根据某一个字段排序    
    <param name = "strSortByFld">排序的字段</param>
  */
  public async SortBy(objAnchorElement: any) {
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      MajorDirectionPaperRelaCRUD.ascOrDesc4SortFun,
      MajorDirectionPaperRelaCRUD.sortvMajorDirectionPaperRelaBy,
      strSortExpress,
    );
    MajorDirectionPaperRelaCRUD.sortvMajorDirectionPaperRelaBy = sortBy;
    MajorDirectionPaperRelaCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    MajorDirectionPaperRelaCRUD.sortFunStatic = sortFun;
    await this.BindGv_vPaperLoad(this.thisDivList);
  }

  //查看专业关系；
  public async btnMajorDirection_Click() {
    await this.BindGv_vXzMajorDirection();
  }
  /* 查询专业方向条件
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
*/
  public async btnQueryMajorDirection_Click() {
    const strWhereCond = await this.CombinevXzMajorDirectionCondition();
    try {
      this.recCount = await vXzMajorDirection_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: 1,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvXzMajorDirectionBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      const arrvXzMajorDirectionObjLst: Array<clsvXzMajorDirectionEN> =
        await vXzMajorDirection_GetObjLstByPagerAsync(objPagerPara);
      const objDivLayOut = this.getDivName(enumDivType.LayOut_01);
      if (objDivLayOut == null) return;
      const divName = GetDivObjInDivObj(objDivLayOut, this.mstrListDivMajorDirection);

      this.BindTab_vXzMajorDirection(divName, arrvXzMajorDirectionObjLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取记录列表不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 根据条件获取相应的记录对象的列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vXzMajorDirection() {
    const objDivLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objDivLayOut == null) return;
    const divName = GetDivObjInDivObj(objDivLayOut, this.mstrListDivMajorDirection);

    const strWhereCond = await this.CombinevXzMajorDirectionCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvXzMajorDirectionObjLst: Array<clsvXzMajorDirectionEN> = [];
    try {
      this.recCount = await vXzMajorDirection_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvXzMajorDirectionBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvXzMajorDirectionObjLst = await vXzMajorDirection_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }

    try {
      this.BindTab_vXzMajorDirection(divName, arrvXzMajorDirectionObjLst);
      console.log('完成BindGv_vXzMajorDirection!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public CombinevXzMajorDirectionCondition(): string {
    const objDivLayOut = this.getDivName(enumDivType.LayOut_01);

    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strPaperId = GetHidPaperId(objDivLayOut); //论文
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.idXzMajor_q != '' && this.idXzMajor_q != '0') {
        strWhereCond += ` And ${clsvXzMajorDirectionEN.con_IdXzMajor} = '${this.idXzMajor_q}'`;
      }
      if (this.majorDirectionName_q != '') {
        strWhereCond += ` And ${clsvXzMajorDirectionEN.con_MajorDirectionName} like '%${this.majorDirectionName_q}%'`;
      }

      strWhereCond += ` And  majorDirectionId not in (select majorDirectionId from MajorDirectionPaperRela where  paperId = '${strPaperId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineXzMajorDirectionCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 显示vXzMajorDirection对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
 <param name = "divContainer">显示容器</param>
 <param name = "arrXzMajorDirectionObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_vXzMajorDirection(
    divContainer: HTMLDivElement,
    arrvXzMajorDirectionObjLst: Array<clsvXzMajorDirectionEN>,
  ) {
    const strThisFuncName = this.BindTab_vXzMajorDirection.name;
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
        fldName: 'majorDirectionId',
        colHeader: '研究方向Id',
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
        colHeader: '专业名称',
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
        fldName: 'majorDirectionName',
        colHeader: '研究方向名',
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
        fldName: 'MajorDirectionENName',
        colHeader: '研究方向英文名',
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
        colHeader: '修改日期',
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
        fldName: 'updUser',
        colHeader: '修改人',
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
          btn1.className = 'btn btn-outline-info';
          btn1.setAttribute('onclick', `btnOkInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
    ];
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvXzMajorDirectionObjLst, arrDataColumn, 'majorDirectionId', this);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  //用来选择专业记录方法；
  public btnOkInTab_Click(strKeyId: string) {
    $('#hidMajorDirectionId').val(strKeyId); //专业方向
    this.AddNewRecordSaveMajorDirection();
  }
  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSaveMajorDirection() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strMajorDirectionId = GetInputValueInDivObj(divName, 'hidMajorDirectionId'); //专业方向
    const strPaperId = GetHidPaperId(divName); //论文

    const objMajorDirectionPaperRelaEN: clsMajorDirectionPaperRelaEN =
      new clsMajorDirectionPaperRelaEN();
    this.PutDataToMajorDirectionPaperRelaClass(objMajorDirectionPaperRelaEN);
    try {
      //同一论文不能重复添加同一个专业方向；
      const strWhere = ` 1 = 1 And paperId = '${strPaperId}' And majorDirectionId = '${strMajorDirectionId}'`;
      const responseText = await MajorDirectionPaperRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一论文不能重复添加同一个专业方向！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await MajorDirectionPaperRela_AddNewRecordAsync(
        objMajorDirectionPaperRelaEN,
      );
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
        HideDialogOne();
        //window.location.href = "../GradEduEx/PaperCRUD?paperTypeId=01";
        window.location.href = `../GradEduEx/PaperAddXzmajorRela?paperId='${strPaperId}'`;
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
    <param name = "pobjMajorDirectionPaperRelaEN">数据传输的目的类对象</param>
  */
  public PutDataToMajorDirectionPaperRelaClass(
    pobjMajorDirectionPaperRelaEN: clsMajorDirectionPaperRelaEN,
  ) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strMajorDirectionId = GetInputValueInDivObj(divName, 'hidMajorDirectionId');
    const strViewpointId = GetHidPaperId(divName);

    pobjMajorDirectionPaperRelaEN.SetMajorDirectionId(strMajorDirectionId); // 研究方向Id
    pobjMajorDirectionPaperRelaEN.SetPaperId(strViewpointId); // 论文Id
    pobjMajorDirectionPaperRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjMajorDirectionPaperRelaEN.SetUpdUser(userStore.getUserId); // 修改人
    //pobjMajorDirectionPaperRelaEN.SetMemo(this.memo;// 备注
  }

  /*
   * 获取年月日
   */
  public getNowDate(): string {
    const date = new Date();
    let month: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();
    if (month <= 9) {
      month = `0${month}`;
    }
    if (strDate <= 9) {
      strDate = `0${strDate}`;
    }

    return `${date
      .getFullYear()
      .toString()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  /*
   * 专业流水号
   */
  public get idXzMajor_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlIdXzMajor_q');
  }

  /*
   * 研究方向名
   */
  public get majorDirectionName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtMajorDirectionName_q');
  }
  /* 函数功能:在数据 列表中跳转到某一页
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
    <param name = "intPageIndex">页序号</param>
  */
  public IndexPageOne(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_vXzMajorDirection();
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvXzMajorDirectionBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvXzMajorDirectionBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvXzMajorDirectionBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvXzMajorDirectionBy');
  }

  //组合获取新的数据源，通过论文 和专业方向；
  public async GetNewArrayList(divList: HTMLDivElement, arrPaperExObjLst: Array<clsPaperENEx>) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // const strWhereCond = await this.CombinevPaperCondition();
    const strWhereCond1 = this.CombinevXzMajorDirectionCondition();

    let arrvMajorDirectionPaperRelaObjLst: Array<clsvMajorDirectionPaperRelaEN> = [];
    //新对象列表
    const arrPaperMajorObjList: Array<clsvMajorDirectionPaperRelaEN> = [];
    try {
      //获取用户缓存数据
      const strWhere_User = '1=1';

      arrvMajorDirectionPaperRelaObjLst = await vMajorDirectionPaperRela_GetObjLstAsync(
        strWhereCond1,
      );

      //根据数据源组合新对象
      //1.循环论文
      let objPaperMajor: clsvMajorDirectionPaperRelaEN;
      for (let i = 0; i < arrPaperExObjLst.length; i++) {
        const objPaperEx = arrPaperExObjLst[i];
        //new
        objPaperMajor = new clsvMajorDirectionPaperRelaEN();
        //得到相关数据；
        objPaperMajor.paperId = objPaperEx.paperId;
        objPaperMajor.paperTitle = objPaperEx.paperTitle;
        objPaperMajor.updDate = objPaperEx.updDate;
        objPaperMajor.updUser = objPaperEx.updUser;
        const strUserName = await vQxUsersSimStore.getUserName(objPaperEx.updUser);
        if (strUserName != '') {
          objPaperMajor.userName = strUserName;
        }
        //2得到专业方向；
        //3比对得到剩下的数据
        arrvMajorDirectionPaperRelaObjLst = arrvMajorDirectionPaperRelaObjLst.filter(
          (x) => x.paperId == objPaperEx.paperId,
        );
        //4循环的插入数据表
        let k = 0;
        for (let j = 0; j < arrvMajorDirectionPaperRelaObjLst.length; j++) {
          k++;
          //5专业方向
          objPaperMajor.majorDirectionName += `${k}.${arrvMajorDirectionPaperRelaObjLst[j].majorDirectionName}</br>`;
        }
        //6存入对象列表；
        if (IsNullOrEmpty(objPaperMajor.paperTitle) == false)
          arrPaperMajorObjList.push(objPaperMajor);
      }

      try {
        this.BindTab_PaperMajor(divList, arrPaperMajorObjList);

        console.log('完成BindGv_PaperMajor!');
      } catch (e: any) {
        console.error('catch(e)=');
        console.error(e);
        const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
        alert(strMsg);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 显示vPaper对象的所有属性值
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
    <param name = "divContainer">显示容器</param>
    <param name = "arrPaperObjLst">需要绑定的对象列表</param>
  */
  public async BindTab_PaperMajor(
    divContainer: HTMLDivElement,
    arrPaperExObjLst: Array<clsvMajorDirectionPaperRelaEN>,
  ) {
    const strThisFuncName = this.BindTab_PaperMajor.name;
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
        fldName: clsvMajorDirectionPaperRelaEN.con_PaperTitle,
        colHeader: '论文标题',
        text: '',
        tdClass: 'text-left',
        sortBy: clsvMajorDirectionPaperRelaEN.con_PaperTitle,
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },

      {
        fldName: clsvMajorDirectionPaperRelaEN.con_MajorDirectionName,
        colHeader: '专业方向',
        text: '',
        tdClass: 'text-left',
        sortBy: clsvMajorDirectionPaperRelaEN.con_MajorDirectionName,
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: clsvMajorDirectionPaperRelaEN.con_UpdDate,
        colHeader: '日期',
        text: '',
        tdClass: 'text-left',
        sortBy: clsvMajorDirectionPaperRelaEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: clsvMajorDirectionPaperRelaEN.con_UserName,
        colHeader: '用户',
        text: '',
        tdClass: 'text-left',
        sortBy: clsvMajorDirectionPaperRelaEN.con_UserName,
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
    ];
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrPaperExObjLst, arrDataColumn, 'paperId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
}

//新建类存放数据；
export class PaperMajorBak extends clsGeneralTab {
  public paperId = ''; //论文Id
  public paperTitle = ''; //论文标题
  public updDate = ''; //修改日期
  public updUser = ''; //修改用户Id
  public majorDecription = ''; //专业方向；
  public userName = ''; //用户名
  ////论文id
  //public paperId: string,
  ////论文标题
  //public paperTitle: string,
  ////专业方向名
  //public MajorDecription: string,
  ////时间
  //public updDate: string,
  ////人
  //public updUser: string
}
