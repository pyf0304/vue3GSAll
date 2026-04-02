import $ from 'jquery';
import { MajorDirectionPaperRela_EditEx } from './MajorDirectionPaperRela_EditEx';
import { MajorDirectionPaperRelaCRUD } from '@/viewsBase/GradEduPaper/MajorDirectionPaperRelaCRUD';
import { clsXzMajorDirectionEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorDirectionEN';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsvMajorDirectionPaperRelaEN } from '@/ts/L0Entity/GradEduPaper/clsvMajorDirectionPaperRelaEN';
import { XzMajorDirection_GetObjLstAsync } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorDirectionWApi';
import { XzMajor_GetObjLstAsync } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { Paper_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import {
  vMajorDirectionPaperRela_GetObjLstByPagerAsync,
  vMajorDirectionPaperRela_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsvMajorDirectionPaperRelaWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  HideDivInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst, BindTab_V, GetCheckedKeyIds, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare let window: any;
/* MajorDirectionPaperRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class MajorDirectionPaperRelaCRUDEx
  extends MajorDirectionPaperRelaCRUD
  implements IShowList
{
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvMajorDirectionPaperRelaBy: string = "mId";
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
    this.BindGv_vMajorDirectionPaperRela(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vMajorDirectionPaperRela':
        alert('该类没有绑定该函数：[this.BindGv_vMajorDirectionPaperRela_Cache]！');
        //this.BindGv_vMajorDirectionPaperRelaCache();;
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
    let objPage: MajorDirectionPaperRelaCRUDEx;
    if (MajorDirectionPaperRelaCRUD.objPageCRUD == null) {
      MajorDirectionPaperRelaCRUD.objPageCRUD = new MajorDirectionPaperRelaCRUDEx(divLayout);
      objPage = <MajorDirectionPaperRelaCRUDEx>MajorDirectionPaperRelaCRUD.objPageCRUD;
    } else {
      objPage = <MajorDirectionPaperRelaCRUDEx>MajorDirectionPaperRelaCRUD.objPageCRUD;
    }
    const objPageEdit: MajorDirectionPaperRela_EditEx = new MajorDirectionPaperRela_EditEx(
      '',
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

      default:
        AccessBtnClickDefault(strCommandName, 'MajorDirectionPaperRela_QUDIExEx.btn_Click');

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
        const strUserId = userStore.getUserId;
        const strRoleId = userStore.getRoleId;

        //管理员 判断角色
        if ( strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018) {
          $('#btnDelRecord').show();
        } else {
          //学生00620003 教师
          $('#btnDelRecord').show();
        }
        $('#hidUserId').val(strUserId);
        //1、为下拉框设置数据源,绑定列表数据
        await this.BindDdl_MajorDirectionId('ddlMajorDirectionId');
        await this.BindDdl_PaperId('ddlPaperId');
        await this.BindDdl_idXzMajor('ddlIdXzMajor_q');
        MajorDirectionPaperRelaCRUD.sortvMajorDirectionPaperRelaBy = 'MajorDirectionENName Asc';
        const strWhereCond = await this.CombinevMajorDirectionPaperRelaCondition();
        await vMajorDirectionPaperRela_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {
          this.recCount = jsonData;
        });
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vMajorDirectionPaperRela(this.thisDivList);
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
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind4QueryRegion)
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
      const arrXzMajorObjLst = await XzMajor_GetObjLstAsync(strWhereCond);
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
  /// <summary>
  /// 为下拉框获取数据,从表:[Paper]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_PaperId(ddlPaperId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlPaperId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlPaperId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrPaperObjLst = await Paper_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlPaperId,
        arrPaperObjLst,
        clsPaperEN.con_PaperId,
        clsPaperEN.con_PaperTitle,
        '',
      );
      console.log('完成BindDdl_PaperId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /// <summary>
  /// 为下拉框获取数据,从表:[XzMajorDirection]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_MajorDirectionId(ddlMajorDirectionId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlMajorDirectionId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlMajorDirectionId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrXzMajorDirectionObjLst = await XzMajorDirection_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlMajorDirectionId,
        arrXzMajorDirectionObjLst,
        clsXzMajorDirectionEN.con_MajorDirectionId,
        clsXzMajorDirectionEN.con_MajorDirectionName,
        '专业方向',
      );
      console.log('完成BindDdl_MajorDirectionId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async CombinevMajorDirectionPaperRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.idXzMajor_q != '' && this.idXzMajor_q != '0') {
        strWhereCond += ` And ${clsvMajorDirectionPaperRelaEN.con_IdXzMajor} = '${this.idXzMajor_q}'`;
      }
      if (this.majorDirectionName_q != '') {
        strWhereCond += ` And ${clsvMajorDirectionPaperRelaEN.con_MajorDirectionName} like '%${this.majorDirectionName_q}%'`;
      }
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsvMajorDirectionPaperRelaEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }

      //if (this.IsQuotethesis_q == true) {
      //    strWhereCond += ` And ${clsvMajorDirectionPaperRelaEN.con_IsQuotethesis} = '1'`;
      //}
      //else {
      //    strWhereCond += ` And ${clsvMajorDirectionPaperRelaEN.con_IsQuotethesis} = '0'`;
      //}

      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      if (strUserId != '') {
        $('#hidUserId').val(strUserId);

        //判断角色 管理员
        if ( strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018) {
          $('#btnDelRecord').show();
        }
        ////判断角色 教师
        //else if (objvUserRoleRelation.roleId == "00620002") {
        //    $("#btnDelRecord").hide();
        //    //可以查看所有；
        //}
        else {
          $('#btnDelRecord').show();
          //学生00620003
          //只能查看自己的数据；或公开的数据；
          strWhereCond += ` And updUser = '${strUserId}'`;
        }
      } else {
        reLogin();
        //window.location.href = "/GraduateStudyWebApp/WebApp/Login";
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineMajorDirectionPaperRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 显示vMajorDirectionPaperRela对象的所有属性值
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
  <param name = "divContainer">显示容器</param>
  <param name = "arrMajorDirectionPaperRelaObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_vMajorDirectionPaperRela(
    divContainer: HTMLDivElement,
    arrvMajorDirectionPaperRelaObjLst: Array<clsvMajorDirectionPaperRelaEN>,
  ) {
    const strThisFuncName = this.BindTab_vMajorDirectionPaperRela.name;
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
        fldName: clsvMajorDirectionPaperRelaEN.con_MajorDirectionENName,
        colHeader: '研究方向英文',
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
      //{
      //    fldName: "isVisible",
      //    colHeader: "是否显示",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
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
      //    fldName: "researchQuestion",
      //    colHeader: "研究问题",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "keyword",
      //    colHeader: "关键字",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "literatureSources",
      //    colHeader: "文献来源",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "literatureLink",
      //    colHeader: "文献链接",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "uploadfileUrl",
      //    colHeader: "文件地址",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "isQuotethesis",
      //    colHeader: "是否引用论文",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "checker",
      //    colHeader: "审核人",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "isChecked",
      //    colHeader: "是否检查",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
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
        fldName: 'userName',
        colHeader: '编辑人',
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
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btnUpdateRecordInTab_Click('${strKeyId}');`);
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
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btnDelRecordInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},
    ];
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvMajorDirectionPaperRelaObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
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

  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
 */
  public async BindGv_vMajorDirectionPaperRela(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombinevMajorDirectionPaperRelaCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvMajorDirectionPaperRelaObjLst: Array<clsvMajorDirectionPaperRelaEN> = [];
    try {
      this.recCount = await vMajorDirectionPaperRela_GetRecCountByCondAsync(strWhereCond);
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
      await vMajorDirectionPaperRela_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
        arrvMajorDirectionPaperRelaObjLst = <Array<clsvMajorDirectionPaperRelaEN>>jsonData;
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    //if (arrvMajorDirectionPaperRelaObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_vMajorDirectionPaperRela(divList, arrvMajorDirectionPaperRelaObjLst);
      console.log('完成BindGv_vMajorDirectionPaperRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
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
      await this.BindGv_vMajorDirectionPaperRela(this.thisDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
}
