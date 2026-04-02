import $ from 'jquery';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { MajorDirectionPaperRelaCRUD } from '@/viewsBase/GradEduPaper/MajorDirectionPaperRelaCRUD';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { clsMajorDirectionPaperRelaEN } from '@/ts/L0Entity/GradEduPaper/clsMajorDirectionPaperRelaEN';
import { clsvMajorDirectionPaperRelaEN } from '@/ts/L0Entity/GradEduPaper/clsvMajorDirectionPaperRelaEN';
import { XzMajor_GetObjLstAsync } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import {
  MajorDirectionPaperRela_AddNewRecordAsync,
  MajorDirectionPaperRela_DelMajorDirectionPaperRelasAsync,
  MajorDirectionPaperRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsMajorDirectionPaperRelaWApi';
import {
  vMajorDirectionPaperRela_GetObjLstByPagerAsync,
  vMajorDirectionPaperRela_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsvMajorDirectionPaperRelaWApi';
import { BindDdl_ObjLst, BindTab_V, GetCheckedKeyIds, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare let window: any;
/* WApiXzMajorDirectionCRUD_TS 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class PaperAddXzmajorRela extends MajorDirectionPaperRelaCRUD {
  public mstrListDiv = 'divDataLst';

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;

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
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
  */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;
      if (strUserId != '') {
        //读取session角色 来判断绑定不同数据列表
        //获取用户角色来判断显示不同的列表数据；

        //管理员 判断角色
        if (
          strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
          $('#btnDelRecord').show();
        } else {
          //学生00620003 教师
          $('#btnDelRecord').hide();
        }
        $('#hidUserId').val(strUserId);
        //1、为下拉框设置数据源,绑定列表数据
        await this.BindDdl_idXzMajor('ddlIdXzMajor_q');
        this.hidSortvMajorDirectionPaperRelaBy = 'updDate Desc';

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
      const strMsg = `根据条件获取不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async btnQuery_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    const strWhereCond = await this.CombinevMajorDirectionPaperRelaCondition();
    try {
      this.recCount = await vMajorDirectionPaperRela_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: 1,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvMajorDirectionPaperRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      const arrvMajorDirectionPaperRelaObjLst: Array<clsvMajorDirectionPaperRelaEN> =
        await vMajorDirectionPaperRela_GetObjLstByPagerAsync(objPagerPara);
      this.BindTab_vMajorDirectionPaperRela(this.thisDivList, arrvMajorDirectionPaperRelaObjLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根据条件获取不成功,${e}.`;
      alert(strMsg);
    }
  }
  public async CombinevMajorDirectionPaperRelaCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);

    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const strPaperId = GetHidPaperId(divName); //论文
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

      //paperId
      if (strPaperId != '') {
        strWhereCond += ` And ${clsvMajorDirectionPaperRelaEN.con_PaperId} = '${strPaperId}'`;
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
        if (
          strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
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
          //查询的数据就已经是自己的数据，所以查看关系时候，不需要再做控制；
          // strWhereCond += ` And updUser = '${objvUserRoleRelation.userId}'`;
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

  /* 根据条件获取相应的记录对象的列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
  */
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
        orderBy: this.hidSortvMajorDirectionPaperRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvMajorDirectionPaperRelaObjLst = await vMajorDirectionPaperRela_GetObjLstByPagerAsync(
        objPagerPara,
      );
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
        colHeader: '专业方向名',
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
        colHeader: '专业方向英文',
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
    BindTab_V(divDataLst, arrvMajorDirectionPaperRelaObjLst, arrDataColumn, 'mId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public btnokRecord_Click() {
    this.AddNewRecordSave();
  }
  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSave() {
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
        window.location.href = '../GradEduEx/PaperCRUD?paperTypeId=01';
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
    pobjMajorDirectionPaperRelaEN.SetMemo(this.memo); // 备注
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
  /* 根据关键字列表删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
 */
  public async DelMultiRecord(arrmId: Array<string>) {
    try {
      const returnInt = await MajorDirectionPaperRela_DelMajorDirectionPaperRelasAsync(arrmId);
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
    this.BindGv_vMajorDirectionPaperRela(this.thisDivList);
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
   * 备注
   */
  public set memo(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);

    SetInputValueInDivObj(divName, 'txtMemo', value);
  }
  /*
   * 备注
   */
  public get memo(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'txtMemo');
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvMajorDirectionPaperRelaBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);

    SetInputValueInDivObj(divName, 'hidSortvMajorDirectionPaperRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvMajorDirectionPaperRelaBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'hidSortvMajorDirectionPaperRelaBy');
  }
  /*
   * 获取当前页序号
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);

    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }
  /*
   * 研究方向名
   */
  public get majorDirectionName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'txtMajorDirectionName_q');
  }
  /*
   * 论文标题
   */
  public get paperTitle_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'txtPaperTitle_q');
  }
  /*
   * 专业流水号
   */
  public get idXzMajor_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetSelectValueInDivObj(divName, 'ddlIdXzMajor_q');
  }
}
