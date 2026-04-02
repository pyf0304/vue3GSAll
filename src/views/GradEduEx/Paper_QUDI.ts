import $ from 'jquery';
import { message } from '@/utils/myMessage';
import { Paper_EditEx } from '../GradEduPaper/Paper_EditEx';
import { Paper_QUDI_AllPaper } from './Paper_QUDI_AllPaper';
import { Paper_QUDI_CurrEduCls } from './Paper_QUDI_CurrEduCls';
import { Paper_QUDI_Direction } from './Paper_QUDI_Direction';
import { Paper_QUDI_Major } from './Paper_QUDI_Major';
import { PaperEx_ReFreshThisCacheByIdCurrEduCls } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';
import { PaperEduClsRelaEx_SetIdCurrEduCls } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperEduClsRelaExWApi';
import { MajorDirectionPaperRelaEx_SetMajorDirectionId } from '@/ts/L3ForWApiEx/GradEduPaper/clsMajorDirectionPaperRelaExWApi';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';

import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import {
  LiteratureType_BindDdl_LiteratureTypeIdInDivCache,
  LiteratureType_GetSubObjLstCache,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';

import {
  Paper_GetObjByPaperIdAsync,
  Paper_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
import {
  XzMajorDirection_BindDdl_MajorDirectionIdByIdXzMajorInDivCache,
  XzMajorDirection_GetObjByMajorDirectionIdCache,
  XzMajorDirection_GetObjLstCache,
} from '@/ts/L3ForWApi/BaseInfo/clsXzMajorDirectionWApi';
import {
  GetCheckedKeyIdsInDiv,
  GetCheckedKeyIdsInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectObjInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  ShowDivInDivObj,
  GetDivObjInDivObj,
  GetDivObjInDivObjN,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst, BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetSortBy } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';

import { gs_PaperType_BindDdl_PaperTypeIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_PaperTypeWApi';
import { Section_QUDI_TSEx } from '@/views/GradEduPaper/Section_QUDI_TSEx';
import { clsPaperWApiEx } from '@/ts/L3ForWApiEx/GraduateEdu/clsPaperWApiEx';
import enumPaperRange from '@/ts/FunClass/enumPaperRange';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { UserTypeMap } from '@/store/modules/types/userType';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare let window: any;
/* Paper_QUDI 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Paper_QUDI extends PaperCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvPaperBy: string = "paperId";
  public static GetPropValue: (strPropName: string) => string;
  public mstrListDiv = 'divDataLst';
  public paperId = '';
  public static CurrTabName = 'AllPaper';
  public static paperTypeId = '';
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  public recCount = 0;

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
    this.getDivList(this);

    switch (this.activeTabId) {
      case 'MyDirection': //查询记录
        this.liMajorDirection_Click();
        break;
      case 'CurrEduClsPaper': //查询记录
        this.liCurrEduCls_Click(this.divLayout);
        break;
      case 'AllPaper': //查询记录
        this.liAllPaper_Click(this.divLayout);
        break;
      case 'MyMajor': //查询记录
        this.liMajor_Click();
        break;
    }
    message.success('已关注！');
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    this.getDivList(this);
    let strMsg = '';
    switch (strType) {
      case 'vPaper':
        //alert('该类没有绑定该函数：[this.BindGv_Paper_Cache]！');
        switch (this.activeTabId) {
          case 'MyDirection': //查询记录
            this.liMajorDirection_Click();
            break;
          case 'CurrEduClsPaper': //查询记录
            this.liCurrEduCls_Click(this.divLayout);
            break;
          case 'AllPaper': //查询记录
            this.liAllPaper_Click(this.divLayout);
            break;
          case 'MyMajor': //查询记录
            this.liMajor_Click();
            break;
        }
        message.success('已关注！');
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public getDivList(objPage: PaperCRUD) {
    if (objPage == null) {
      alert('获取divList时页面对象为null, 请检查！');
      return;
    }
    if (objPage.divLayout == null) {
      alert('获取divList时页面对象的divLayout为null, 请检查！');
      return;
    }
    let strMsg;
    switch (this.activeTabId) {
      case 'MyDirection': //查询记录
        objPage.divList = GetDivObjInDivObjN(objPage.divLayout, 'divList_Direction');
        break;

      case 'CurrEduClsPaper': //查询记录
        objPage.divList = GetDivObjInDivObjN(objPage.divLayout, 'divList_CurrEduCls');

        break;
      case 'AllPaper': //查询记录
        objPage.divList = GetDivObjInDivObjN(objPage.divLayout, 'divList_AllPaper');

        break;
      case 'MyMajor': //查询记录
        objPage.divList = GetDivObjInDivObjN(objPage.divLayout, 'divList_Major');

        break;
      default:
        strMsg = `获取divList时,当前页面:${this.activeTabId}在getDivList函数的switch中没有被处理！`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async SetMajorDirectionName(stridXzMajor: string) {
    let arrObjLst_Sel = await XzMajorDirection_GetObjLstCache(stridXzMajor);
    if (arrObjLst_Sel == null) return;
    arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.idXzMajor == stridXzMajor);

    for (let i = 0; i < arrObjLst_Sel.length; i++) {
      if (i == 0) {
        let strMajorDirectionName;
        if (IsNullOrEmpty(clsPubLocalStorage.majorDirectionId) == true) {
          strMajorDirectionName = Format(
            "<span class='text-nowrap'><span class='font-weight-bold'>[{0}]</span>方向论文</span>",
            arrObjLst_Sel[i].majorDirectionName,
          );
          $('#aMajorDirectionName').html(strMajorDirectionName);
        } else {
          strMajorDirectionName = Format(
            "<span class='text-nowrap'><span class='font-weight-bold'>[{0}]</span>方向论文</span>",
            clsPubLocalStorage.majorDirectionName,
          );
          $('#aMajorDirectionName').html(strMajorDirectionName);
        }
      }
    }
  }

  public async SetDl_MajorDirection(stridXzMajor: string) {
    let strhtml = '';
    let arrObjLst_Sel = await XzMajorDirection_GetObjLstCache(userStore.getIdXzMajor);
    if (arrObjLst_Sel == null) return;
    arrObjLst_Sel = arrObjLst_Sel.filter((x) => x.idXzMajor == stridXzMajor);

    for (let i = 0; i < arrObjLst_Sel.length; i++) {
      if (i == 0) {
        if (IsNullOrEmpty(clsPubLocalStorage.majorDirectionId) == true) {
          $('#spnMajorDirectionName').html(arrObjLst_Sel[i].majorDirectionName);
        } else {
          $('#spnMajorDirectionName').html(clsPubLocalStorage.majorDirectionName);
        }
      }
      strhtml += `<dd><a onclick=btn_Click('MajorDirectChange', "${arrObjLst_Sel[i].majorDirectionId}")> ${arrObjLst_Sel[i].majorDirectionName}</a></dd>`;
    }
    $('#dlMajorDirection').html(strhtml);
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
  */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName4Pager = 'divPager';
    // 在此处放置用户代码以初始化页面
    try {
      const objDivLayOut = this.getDivName(enumDivType.LayOut_01);
      if (objDivLayOut == null) return;
      this.SetEventFunc();
      if (userStore.getUserId != '') {
        // 为查询区绑定下拉框
        await this.BindDdl4QueryRegion();
        if (userStore.getIdXzMajor.length > 0) {
          if (userStore.userType == UserTypeMap.university) {
            await XzMajorDirection_BindDdl_MajorDirectionIdByIdXzMajorInDivCache(
              objDivLayOut,
              'ddlMajorDirectionId_SetFldValue',
              userStore.getIdXzMajor,
            );
          }
          //await XzMajorDirection_BindDdl_MajorDirectionIdByIdXzMajorInDivCache(this.divName4List, "ddlMajorDirectionId_SetFldValue", userStore.getIdXzMajor);
          this.SetMajorDirectionName(userStore.getIdXzMajor);
        }
        // SetSpanHtmlInDivObj(
        //   objDivLayOut,
        //   'spnMajorName',
        //   Format('[{0}]', userStore.getMajorName),
        // );

        PaperCRUD.sortPaperBy = 'updDate Desc';

        const strRoleId = userStore.getRoleId;
        //判断角色
        //管理员
        if (
          strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
          $('#btnDelRecord').show();
          $('#btnAudit').show();
          $('#btnSynPaperStatistics').show();
        } else if (strRoleId == '00620002') {
          $('#btnDelRecord').hide();
          $('#btnAudit').show();
        } else {
          $('#btnDelRecord').hide();
          $('#btnAudit').hide();
          $('#btnCancelSubmit').hide();
        }
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        const activeTabId = Paper_QUDI.GetPropValue('activeTabId');
        switch (activeTabId) {
          case enumPaperRange.MyDirection: //查询记录
            this.liMajorDirection_Click();
            break;

          case enumPaperRange.CurrEduClsPaper: //查询记录
            this.liCurrEduCls_Click(this.divLayout);
            break;
          case enumPaperRange.AllPaper: //查询记录
            this.liAllPaper_Click(this.divLayout);
            break;
          case enumPaperRange.MyMajor: //查询记录
            this.liMajor_Click();
            break;
        }

        // await this.BindGv_Paper();
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        //    reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async BindDdl4QueryRegion() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q'); //用户查询区域

    //const ddl_ddlUserId_q = await this.BindDdl_UserId("ddlUserId_q");

    await LiteratureType_BindDdl_LiteratureTypeIdInDivCache(objLayOut, 'ddlLiteratureTypeId_q');
    //绑定编辑文献类型
    //const ddl_LiteratureTypeId = await this.BindDdl_LiteratureTypeId_Cache("ddlLiteratureTypeId", new clsLiteratureTypeEN);

    await gs_PaperType_BindDdl_PaperTypeIdInDivCache(objLayOut, 'ddlPaperTypeId_q');
    //绑定论文类型下拉框
    //const ddl_PaperTypeId = await this.BindDdl_gs_PaperType_Cache("ddlPaperTypeId");

    //论文状态
    //const ddl_PaperStatusId_q = await this.BindDdl_gs_PaperStatus_Cache("ddlPaperStatusId");
    //

    //const ddl_UserId_q = await this.BindDdl_UserId("ddlUserId_q");
    //const ddl_idXzMajor_q = await this.BindDdl_idXzMajorNum("ddlIdXzMajor_q");
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

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevPaperCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    //strWhereCond: string = " 1 = 1 and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
    let strWhereCond = ' 1 = 1 ';
    const strPaperTypeId = Paper_QUDI.paperTypeId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }
      if (this.updDate_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_UpdDate} like '%${this.updDate_q}%'`;
      }
      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      }
      //论文类型
      if (this.PaperTypeId_q != '' && this.PaperTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTypeId} = '${this.PaperTypeId_q}'`;
      }

      //用户
      if (this.User_q != '' && this.User_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.User_q}'`;
      }

      //论文维护
      if (strPaperTypeId == '01') {
        if (userStore.getUserId != '') {
          //判断角色
          //管理员
          const strUserId = userStore.getUserId;
          const strRoleId = userStore.getRoleId;
          if (
            strRoleId == enumQxRoles.System_Admin_00620001 ||
            strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
          ) {
            //可以查看所有；
            $('#btnDelRecord').show();
            $('#btnAudit').show();
            $('#btnCancelSubmit').show();
            //strWhereCond += " and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
          } else if (strRoleId == '00620002') {
            $('#btnDelRecord').show();
            $('#btnAudit').show();
            $('#btnCancelSubmit').show();
            //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
            //strWhereCond += "And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='" + strUserId + "' And isEffective='1') And isEffective='1')";
            //strWhereCond += " and idCurrEduCls='" + clsPubLocalStorage.idCurrEduCls + "'";
          } else {
            $('#btnDelRecord').show();
            $('#btnAudit').hide();
            $('#btnCancelSubmit').hide();
            //学生00620003
            //只能查看自己的数据；或公开的数据；
            //strWhereCond += ` And ${clsvSubViewpointEN.con_UpdUser} = '${strUserId}'`;
            strWhereCond += ` And updUser = '${strUserId}'`;
          }
        } else {
          reLogin();
        }
      } else {
        //查看无需做控制；可以看到所有；
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
 */
  public async BindGv_Paper(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    try {
      switch (this.activeTabId) {
        case 'MyDirection': //查询记录
          this.liMajorDirection_Click();
          break;
        case 'CurrEduClsPaper': //查询记录
          this.liCurrEduCls_Click(this.divLayout);
          break;
        case 'AllPaper': //查询记录
          this.liAllPaper_Click(this.divLayout);
          break;
        case 'MyMajor': //查询记录
          this.liMajor_Click();
          break;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
    }
  }

  /* 显示vPaper对象的所有属性值
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   <param name = "divContainer">显示容器</param>
   <param name = "arrPaperObjLst">需要绑定的对象列表</param>
 */
  public async BindTab_vPaper(divContainer: HTMLDivElement, arrPaperExObjLst: Array<clsPaperENEx>) {
    const strThisFuncName = this.BindTab_vPaper.name;
    const divName4Pager = 'divPager';
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
        sortBy: 'paperTitle',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      //{
      //    fldName: "paperTitle",
      //    colHeader: "论文标题",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsa1: HTMLElement = document.createElement("Label");
      //        a1.innerText = strText;
      //        a1.className = "btn btn-outline-info";
      //        a1.setAttribute("onclick", `btnDetailRecordInTab_Click('${strKeyId}');`);
      //        return a1;
      //    }
      //},
      {
        fldName: 'periodical',
        colHeader: '期刊',
        text: '',
        tdClass: 'text-left',
        sortBy: 'periodical',
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
        sortBy: 'author',
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

      {
        fldName: 'keyword',
        colHeader: '关键字',
        text: '',
        tdClass: 'text-left',
        sortBy: 'keyword',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'literatureSources',
        colHeader: '文献来源',
        text: '',
        tdClass: 'text-left',
        sortBy: 'literatureSources',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
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
      //    fldName: "checker",
      //    colHeader: "审核人",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'isSubmit',
        colHeader: '是否提交',
        text: '',
        tdClass: 'text-left',
        sortBy: 'isSubmit',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: 'isChecked',
        colHeader: '是否审核',
        text: '',
        tdClass: 'text-left',
        sortBy: 'isChecked',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      //{
      //    fldName: "isQuotethesis",
      //    colHeader: "是否引用论文",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'updDate',
        colHeader: '提交日期',
        text: '',
        tdClass: 'text-left',
        sortBy: 'updDate',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: clsPaperENEx.con_UpdUserName,
        colHeader: '提交用户',
        text: '',
        tdClass: 'text-left',
        sortBy: 'userName',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      //{
      //    fldName: "pcount",
      //    colHeader: "读写数",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'attachmentCount',
        colHeader: '附件数',
        text: '',
        tdClass: 'text-left',
        sortBy: 'attachmentCount',
        sortFun: SortFun,
        getDataSource: '',
        columnType: 'Label',
        orderNum: 1,
        funcName: () => {},
      },
      {
        fldName: '',
        colHeader: '详情',
        text: '详情',
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
          btn1.setAttribute('onclick', `btnDetailRecordInTab_Click("${strKeyId}");`);
          return btn1;
        },
      },
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
    await BindTab(divDataLst, arrPaperExObjLst, arrDataColumn, 'paperId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, divName4Pager);
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
    await this.BindGv_Paper(this.thisDivList);
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
   * 添加、修改用的层名
   */
  public set DivName(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidDivName', value);
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvPaperBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvPaperBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvPaperBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvPaperBy');
  }

  /*
   * 是否检查
   */
  public get IsChecked_q(): boolean {
    return $('#chkIsChecked_q').prop('checked');
  }

  /*
   * 是否引用论文
   */
  public get IsQuotethesis_q(): boolean {
    return $('#chkIsQuotethesis_q').prop('checked');
  }

  /*
   * 设置操作类型：Add||Update||Detail
   */
  public set opType(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidOpType', value);
  }

  /*
   * 主题名称
   */
  public get updDate_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUpdDate_q');
  }

  /*
   * 论文标题
   */
  public get paperTitle_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperTitle_q');
  }

  /*
   * 文献类型Id
   */
  public get literatureTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlLiteratureTypeId_q');
  }

  /*
   * 论文类型查询
   */
  public set PaperTypeId_q(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlPaperTypeId_q', value);
  }
  /*
   * 论文类型查询
   */
  public get PaperTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlPaperTypeId_q');
  }

  /*
   * 用户
   */
  //public get readUser_q(): string {
  //    return $("#txtReadUser_q").val();
  //}
  public get User_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }

  /** 函数功能:设置事件函数
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetEventFunc)
   **/
  public async SetEventFunc() {
    const strThisFuncName = this.SetEventFunc.name;
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      //没有定义相关事件
      const ddlMajorDirectionId_SetFldValue: HTMLSelectElement = GetSelectObjInDivObj(
        divName,
        'ddlMajorDirectionId_SetFldValue',
      );
      ddlMajorDirectionId_SetFldValue.addEventListener('change', (e: any) => {
        console.log(e);
        this.ddlMajorDirectionId_SetFldValue_SelectedIndexChanged();
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

  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    console.log(strCommandName, strKeyId);
    const strTabId = strKeyId;
    const objPage = new Paper_QUDI(divLayout);
    //if (PaperCRUD.objPageCRUD == null) {
    //    PaperCRUD.objPageCRUD = new Paper_QUDI();
    //    objPage = <Paper_QUDI>PaperCRUD.objPageCRUD;
    //}
    //else {
    //    objPage = <Paper_QUDI>PaperCRUD.objPageCRUD;
    //}
    const objPageEdit: Paper_EditEx = new Paper_EditEx('Paper_EditEx', objPage);
    const objLayOut = objPage.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    objPage.getDivList(objPage);
    let arrKeyIds;
    // strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    // const objSection_QUDI_TSEx = new Section_QUDI_TSEx(divLayout);
    switch (strCommandName) {
      case 'changeTab':
        switch (strTabId) {
          case 'MyDirection': //查询记录
            objPage.divList = GetDivObjInDivObjN(objPage.divLayout, 'divList_Direction');
            objPage.liMajorDirection_Click();
            break;

          case 'CurrEduClsPaper': //查询记录
            objPage.divList = GetDivObjInDivObjN(objPage.divLayout, 'divList_CurrEduCls');
            objPage.liCurrEduCls_Click(divLayout);
            break;
          case 'AllPaper': //查询记录
            objPage.divList = GetDivObjInDivObjN(objPage.divLayout, 'divList_AllPaper');
            objPage.liAllPaper_Click(divLayout);
            break;
          case 'MyMajor': //查询记录
            objPage.divList = GetDivObjInDivObjN(objPage.divLayout, 'divList_Major');
            objPage.liMajor_Click();
            break;
        }
        break;
      case 'SynPaperStatistics':
        objPage.btnSynPaperStatistics_Click();
        break;

      case 'Submit':
        strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要提交的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPage.btnIsSubmit_Click(strKeyId);
        break;
      case 'Audit':
        strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要提交的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPage.btnAudit_Click(strKeyId);
        break;
      // case 'AddSection':
      //   Section_QUDI_TSEx.strPaperId = strKeyId;
      //   objSection_QUDI_TSEx.PageLoad();
      //   break;
      case 'SetCurrMajorDirection': //查询记录
        objPage.btnSetCurrMajorDirection_Click();
        break;

      case 'SetCurrEduCls': //查询记录
        objPage.btnSetCurrEduCls_Click();
        break;

      //case "SetCurrMajor":    //查询记录
      //    objPage.btnSetCurrMajor_Click();
      //    break;
      case 'MajorDirection': //查询记录
        objPage.liMajorDirection_Click();
        break;

      case 'CurrEduCls': //查询记录
        objPage.liCurrEduCls_Click(divLayout);
        break;
      case 'AllPaper': //查询记录
        objPage.liAllPaper_Click(divLayout);
        break;
      case 'Major': //查询记录
        objPage.liMajor_Click();
        break;

      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        // objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
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
        arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);

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
        arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);

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
        arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);

        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);

        if (arrKeyIds.length == 0) {
          alert('请选择需要恢复删除的记录！');
          return;
        }
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);

        if (arrKeyIds.length == 0) {
          alert('请选择需要置顶的记录！');
          return;
        }
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);

        if (arrKeyIds.length == 0) {
          alert('请选择需要移底的记录！');
          return;
        }
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);

        if (arrKeyIds.length == 0) {
          alert('请选择需要上移的记录！');
          return;
        }
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
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
        AccessBtnClickDefault(strCommandName, 'PaperCRUDExEx.btn_Click');

        break;
    }
  }
  //统计核算
  public async btnSynPaperStatistics_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strUserId = userStore.getUserId;
    try {
      ShowDivInDivObj(objLayOut, 'divLoading');
      const responseText2 = await clsPaperWApiEx.SynPaperStatisticsAsync(strUserId);
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
  //论文提交
  public async btnIsSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    try {
      this.IsSubmitRecordSave(strKeyId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*提交论文
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async IsSubmitRecordSave(strKeyId: string) {
    const strThisFuncName = this.IsSubmitRecordSave.name;
    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    //
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strKeyId);
    objPaperEN.SetIsSubmit(true);

    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        const strInfo = `提交成功!`;

        //显示信息框
        alert(strInfo);

        //刷新缓存
        PaperEx_ReFreshThisCacheByIdCurrEduCls(strIdCurrEducls);

        this.BindGv_Paper(this.thisDivList);
      } else {
        const strInfo = `提交不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('取消失败');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `提交不成功,${e}.`;
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

    const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
    //
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(strKeyId);
    objPaperEN.SetIsSubmit(false);

    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        const strInfo = `取消成功!`;

        //显示信息框
        alert(strInfo);
        //刷新缓存
        PaperEx_ReFreshThisCacheByIdCurrEduCls(strIdCurrEducls);

        this.BindGv_Paper(this.thisDivList);
      } else {
        const strInfo = `取消不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('取消失败');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `取消记录不成功,${e}.`;
      alert(strMsg);
    }
  }

  //论文审核
  public async btnAudit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要审核的记录！');
      return;
    }

    this.SubmitRecord(strKeyId);
  }
  //审核判断；
  public async SubmitRecord(strPaperId: string) {
    this.paperId = strPaperId;

    try {
      const objPaperEN = await Paper_GetObjByPaperIdAsync(strPaperId);
      if (objPaperEN == null) return;
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色 //学生00620003
      if (strRoleId == '00620003') {
        // //通过判断数据用户是否是当前登录用户；
        if (objPaperEN.updUser == strUserId) {
          //判断数据是否已审核
          if (objPaperEN.isChecked == false) {
            this.SubmitRecordSave();
          } else {
            alert('当前数据已审核！');
            return;
          }
        } else {
          alert('当前数据不是您所添加，不能修改！');
          return;
        }
      } else {
        //可以提交
        //判断数据是否已提交
        if (objPaperEN.isChecked == false) {
          this.SubmitRecordSave();
        } else {
          alert('当前数据已审核！');
          return;
        }
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async SubmitRecordSave(): Promise<boolean> {
    const strThisFuncName = this.SubmitRecordSave.name;

    //
    const objPaperEN: clsPaperEN = new clsPaperEN();
    objPaperEN.SetPaperId(this.paperId);
    //设置提交状态；
    objPaperEN.SetIsChecked(true);
    this.PutDataToPaperClassAudit(objPaperEN);
    objPaperEN.sfUpdFldSetStr = objPaperEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objPaperEN.paperId == '' || objPaperEN.paperId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool = await Paper_UpdateRecordAsync(objPaperEN);
      if (returnBool == true) {
        const strInfo = `论文审核成功!`;

        //显示信息框
        alert(strInfo);

        this.BindGv_Paper(this.thisDivList);
      } else {
        const strInfo = `论文审核不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('审核失败');
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
  /* 函数功能:把界面上的属性数据传到类对象中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
<param name = "pobjPaperReadWriteEN">数据传输的目的类对象</param>
*/
  public PutDataToPaperClassAudit(pobjPaperEN: clsPaperEN) {
    //pobjPaperReadWriteEN.SetPaperRWId(this.paperRWId;// 论文读写Id
    pobjPaperEN.SetIsChecked(true);
    pobjPaperEN.SetChecker(userStore.getUserId); //提交人；
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   **/
  public async btnQuery_Click() {
    const strThisFuncName = this.btnQuery_Click.name;
    this.SetCurrPageIndex(1);
    let objPage_Sub;

    let strMsg = '';
    switch (Paper_QUDI.CurrTabName) {
      case 'AllPaper':
        objPage_Sub = new Paper_QUDI_AllPaper(this.divLayout);
        await objPage_Sub.PageLoad();
        break;
      case 'CurrEduCls':
        objPage_Sub = new Paper_QUDI_CurrEduCls(this.divLayout);
        await objPage_Sub.PageLoad();
        break;
      case 'Major':
        objPage_Sub = new Paper_QUDI_Major(this.divLayout);
        await objPage_Sub.PageLoad();
        break;
      case 'Direction':
        objPage_Sub = new Paper_QUDI_Direction(this.divLayout);
        await objPage_Sub.PageLoad();
        break;
      default:
        strMsg = `当前Tab:${Paper_QUDI.CurrTabName}在函数(${strThisFuncName})中没有被处理！`;
        alert(strMsg);
        console.error(strMsg);
        break;
    }
  }

  /* 所有论文
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async liAllPaper_Click(divLayout: HTMLDivElement) {
    try {
      Paper_QUDI.CurrTabName = 'AllPaper';
      const objPage = new Paper_QUDI_AllPaper(divLayout);
      await objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 所有论文
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
 */
  public async liCurrEduCls_Click(divLayout: HTMLDivElement) {
    try {
      Paper_QUDI.CurrTabName = 'CurrEduCls';
      const objPage = new Paper_QUDI_CurrEduCls(divLayout);
      await objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 本专业
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async liMajor_Click() {
    try {
      Paper_QUDI.CurrTabName = 'Major';
      //绑定专业论文
      const objPage = new Paper_QUDI_Major(this.divLayout);
      objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 本专业方向
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async liMajorDirection_Click() {
    try {
      Paper_QUDI.CurrTabName = 'Direction';
      //绑定方向论文
      const objPage = new Paper_QUDI_Direction(this.divLayout);
      objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:从界面列表中根据某一个字段排序
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
   * @param objAnchorElement:带有排序字段的Anchors
   **/
  public async SortBy(objAnchorElement: any) {
    //const strThisFuncName = this.SortBy.name;
    console.log('objAnchorElement(In SetAllCkechedKeysV2):', objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      PaperCRUD.ascOrDesc4SortFun,
      PaperCRUD.sortPaperBy,
      strSortExpress,
    );
    PaperCRUD.sortPaperBy = sortBy;
    PaperCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    PaperCRUD.sortFunStatic = sortFun;
    await this.btnQuery_Click();
  }

  /* 所有论文
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
 */
  public async btnSetCurrEduCls_Click() {
    const strThisFuncName = this.btnSetCurrEduCls_Click.name;
    try {
      const strIdCurrEducls = clsPubLocalStorage.idCurrEduCls;
      let arrKeyIds: Array<string> = [];
      let objPage_Sub;

      let strMsg = '';
      switch (Paper_QUDI.CurrTabName) {
        case 'AllPaper':
          objPage_Sub = new Paper_QUDI_AllPaper(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        case 'CurrEduCls':
          objPage_Sub = new Paper_QUDI_CurrEduCls(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        case 'Major':
          objPage_Sub = new Paper_QUDI_Major(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        case 'Direction':
          objPage_Sub = new Paper_QUDI_Direction(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        default:
          strMsg = `当前Tab:${Paper_QUDI.CurrTabName}在函数(${strThisFuncName})中没有被处理！`;
          alert(strMsg);

          break;
      }

      if (arrKeyIds.length == 0) {
        alert('请选择需要设置当前教学班的记录！');
        return '';
      }

      await PaperEduClsRelaEx_SetIdCurrEduCls(arrKeyIds, strIdCurrEducls);

      Paper_QUDI.CurrTabName = 'CurrEduCls';
      const objPage = new Paper_QUDI_CurrEduCls(this.divLayout);
      await objPage.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `设置当前教学班不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 所有论文
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
 */
  public async btnSetCurrMajorDirection_Click() {
    const strThisFuncName = this.btnSetCurrEduCls_Click.name;
    try {
      const strMajorDirectionId = GetSelectValueInDivObj(
        this.divFunction,
        'ddlMajorDirectionId_SetFldValue',
      );
      if (strMajorDirectionId == '') {
        const strMsg = '请输入研究方向Id(MajorDirectionId)!';
        console.error('Error: ', strMsg);
        //console.trace();
        alert(strMsg);
        return;
      }
      let arrKeyIds: Array<string> = [];
      let objPage_Sub;

      let strMsg = '';
      switch (Paper_QUDI.CurrTabName) {
        case 'AllPaper':
          objPage_Sub = new Paper_QUDI_AllPaper(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        case 'CurrEduCls':
          objPage_Sub = new Paper_QUDI_CurrEduCls(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        case 'Major':
          objPage_Sub = new Paper_QUDI_Major(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        case 'Direction':
          objPage_Sub = new Paper_QUDI_Direction(this.divLayout);
          arrKeyIds = GetCheckedKeyIdsInDiv(objPage_Sub.divName4DataList);
          break;
        default:
          strMsg = `当前Tab:${Paper_QUDI.CurrTabName}在函数(${strThisFuncName})中没有被处理！`;
          alert(strMsg);

          break;
      }

      if (arrKeyIds.length == 0) {
        alert('请选择需要设置专业方向的记录！');
        return '';
      }

      await MajorDirectionPaperRelaEx_SetMajorDirectionId(arrKeyIds, strMajorDirectionId);

      Paper_QUDI.CurrTabName = 'Direction';
      const objPage = new Paper_QUDI_Direction(this.divLayout);
      await objPage.PageLoad();
      //const objPage2 = new Paper_QUDI_Major();
      //await objPage2.PageLoad();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `设置当前专业研究方向不成功,${e}.`;
      alert(strMsg);
    }
  }

  /** 函数功能:系统生成的Change事件函数
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript+<>c__DisplayClass13_0:<Gen_WApi_Ts_GeneEventFuncEx>b__1)
*/
  public async ddlMajorDirectionId_SetFldValue_SelectedIndexChanged() {
    const strThisFuncName = this.ddlMajorDirectionId_SetFldValue_SelectedIndexChanged.name;
    const strMajorDirectionId = GetSelectValueInDivObj(
      this.divFunction,
      'ddlMajorDirectionId_SetFldValue',
    );
    if (IsNullOrEmpty(strMajorDirectionId) == true) return;
    clsPubLocalStorage.majorDirectionId = strMajorDirectionId;
    const objXzMajorDirection = await XzMajorDirection_GetObjByMajorDirectionIdCache(
      strMajorDirectionId,
      userStore.getIdXzMajor,
    );
    if (objXzMajorDirection == null) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    clsPubLocalStorage.majorDirectionName = objXzMajorDirection.majorDirectionName;
    const strMajorDirectionName = Format(
      "<span class='text-nowrap'><span class='font-weight-bold'>[{0}]</span>方向论文</span>",
      objXzMajorDirection.majorDirectionName,
    );
    $('#aMajorDirectionName').html(strMajorDirectionName);
    const objPage = new Paper_QUDI_Direction(this.divLayout);
    await objPage.PageLoad();
  }
  public get activeTabId() {
    const strActiveTabId = Paper_QUDI.GetPropValue('activeTabId');
    return strActiveTabId;
  }
}
