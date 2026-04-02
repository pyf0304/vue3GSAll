import $ from 'jquery';
import { Public_SysSocialRelations } from '../GradEduPublicPage/Public_SysSocialRelations';
import { SysSocialRelations_EditEx_gs_PSocialRela } from './SysSocialRelations_EditEx_gs_PSocialRela';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { SysSocialRelationsCRUD } from '@/viewsBase/GradEduTopic/SysSocialRelationsCRUD';
import { clsgs_OriginalPaperLogEN } from '@/ts/L0Entity/GradEduPaper/clsgs_OriginalPaperLogEN';
import { clsgs_PSocialRelaEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PSocialRelaEN';
import { clsSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsSysSocialRelationsEN';
import { clsvSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsEN';

import {
  gs_OriginalPaperLog_AddNewRecordAsync,
  gs_OriginalPaperLog_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_OriginalPaperLogWApi';
import {
  gs_PSocialRela_AddNewRecordAsync,
  gs_PSocialRela_GetRecCountByCondAsync,
  gs_PSocialRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PSocialRelaWApi';
import { vSysSocialRelations_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvSysSocialRelationsWApi';
import { SysSecurityLevel_BindDdl_LevelIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsSysSecurityLevelWApi';
import {
  SysSocialRelations_AddNewRecordWithMaxIdAsync,
  SysSocialRelations_GetMaxStrIdAsync,
  SysSocialRelations_GetObjBySocialIdAsync,
  SysSocialRelations_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsSysSocialRelationsWApi';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { BindTab_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { vSysSocialRelationsEx_GetObjExLstByPagerAsync } from '@/ts/L3ForWApiEx/GradEduTopic/clsvSysSocialRelationsExWApi';
import { clsvSysSocialRelationsENEx } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsENEx';
import { GetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { clsvPaperSubViewpointENEx } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointENEx';
import { vPaperSubViewpointEx_GetObjExLstByPagerAsync } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSubViewpointExWApi';
import { userStore } from '@/store/modulesShare/user';

declare function ShowDialog(strOpType: string): void;
declare function RefreshWindow(): void;
declare function HideDialog(): void;
declare function HideDialogTen(): void;
declare let window: any;
/* SysSocialRelationsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PSocialRela extends SysSocialRelationsCRUD implements IShowList {
  public mstrListDiv = 'divDataLst';
  public bolIsLoadEditRegion = false; //记录是否导入编辑区的变量
  public divName4Edit = 'divEdit'; //记录是否导入编辑区的变量

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
    this.BindGv_vSysSocialRelations(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vSysSocialRelations':
        alert('该类没有绑定该函数：[this.BindGv_vSysSocialRelations_Cache]！');
        //this.BindGv_vSysSocialRelationsCache();;
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: gs_PSocialRela;
    if (SysSocialRelationsCRUD.objPageCRUD == null) {
      SysSocialRelationsCRUD.objPageCRUD = new gs_PSocialRela(divLayout);
      objPage = <gs_PSocialRela>SysSocialRelationsCRUD.objPageCRUD;
    } else {
      objPage = <gs_PSocialRela>SysSocialRelationsCRUD.objPageCRUD;
    }
    const objPageEdit: SysSocialRelations_EditEx_gs_PSocialRela =
      new SysSocialRelations_EditEx_gs_PSocialRela(
        'SysSocialRelations_EditEx_gs_PSocialRela',
        objPage,
      );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);

    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        ShowDialog('AddWithMaxId');
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        ShowDialog('AddWithMaxId');
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
          return;
        }
        objPage.btnDelRecord_Click();
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
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'WA_Users_QUDI_CacheEx.btn_Click');

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
        //建立缓存

        // 为查询区绑定下拉框
        await this.BindDdl4QueryRegion();

        this.hidSortvSysSocialRelationsBy = 'fullName Asc';
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vSysSocialRelations(this.thisDivList);

        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:为查询区绑定下拉框
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Js_BindDdl4QueryRegion)
  */
  public async BindDdl4QueryRegion() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    const divDataLst = GetDivObjInDivObj(objLayOut, 'divDataLst');
    await SysSecurityLevel_BindDdl_LevelIdInDivCache(divDataLst, 'ddlLevelId_q'); //查询区域
  }

  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vSysSocialRelations(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombinevSysSocialRelationsCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvSysSocialRelationsExObjLst: Array<clsvPaperSubViewpointENEx> = [];
    try {
      this.recCount = await vSysSocialRelations_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvSysSocialRelationsBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvSysSocialRelationsExObjLst = await vPaperSubViewpointEx_GetObjExLstByPagerAsync(
        objPagerPara,
      );
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }

    try {
      const strHtml = await Public_SysSocialRelations.BindList_vSysSocialRelations(
        '02',
        arrvSysSocialRelationsExObjLst,
      );
      //拼接；
      $('#divSysSocialDataLst').html(strHtml);

      if (arrvSysSocialRelationsExObjLst.length > 10) {
        //$("#divPagerSysSocialRela").show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
      console.log('完成BindGv_vSysSocialRelations!');
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
  public async CombinevSysSocialRelationsCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strPaperId = GetHidPaperId(divName);
    const strUserId = userStore.getUserId;
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //只能查询提交的技能数据
      strWhereCond += ` And ${clsvSysSocialRelationsEN.con_IsSubmit} = 'true'`;

      const strPageType = GetInputValueInDivObj(divName, 'hidPageType');
      if (strPageType == 'gs_TDR') {
        if (GetInputValueInDivObj(divName, 'txtViewpointName_q') != '') {
          strWhereCond += ` And ${clsvSysSocialRelationsEN.con_FullName} like '%${$(
            '#txtViewpointName_q',
          ).val()}%'`;
        }
        if (GetInputValueInDivObj(divName, 'txtViewUpdName_q') != '') {
          strWhereCond += ` And ${clsvSysSocialRelationsEN.con_UpdUser} like '%${$(
            '#txtViewUpdName_q',
          ).val()}%'`;
        }

        //strWhereCond += ` And socialId not in (select socialId from RTSysSocialRela where paperId = '${strPaperId}' And updUser = '${strUserId}')`;
      } else {
        if (this.fullName_q != '') {
          strWhereCond += ` And ${clsvSysSocialRelationsEN.con_FullName} like '%${this.fullName_q}%'`;
        }
        if (this.levelId_q != '' && this.levelId_q != '0') {
          strWhereCond += ` And ${clsvSysSocialRelationsEN.con_LevelId} = '${this.levelId_q}'`;
        }

        //排除获取已存在的关系数据 根据当前用户；
        strWhereCond += ` And socialId not in (select socialId from gs_PSocialRela where paperId = '${strPaperId}' And updUser = '${strUserId}')`;
      }
      // const strUserId = userStore.getUserId;
      //strIdCurrEduclsstrRoleId = userStore.getRoleId;
      //$("#hidUserId").val(strUserId);
      ////判断角色
      ////管理员
      //if (strRoleId == "00620001") {

      //    $("#btnDelRecord").show();
      //    $("#btnCancelSubmit").show();

      //}
      //else if (strRoleId == "00620002") {
      //    //教师
      //    $("#btnDelRecord").hide();
      //    $("#btnCancelSubmit").show();

      //}
      //else {
      //    //学生 教师；
      //    $("#btnDelRecord").hide();
      //    $("#btnCancelSubmit").hide();
      //    //学生00620003 00620002教师

      //    strWhereCond += ` And ${clsvSysSocialRelationsEN.con_UpdUser} = '${strUserId}'`;
      //    //strWhereCond += ` And ${clsvViewpointEN.con_VPProposePeople} = '${objvUserRoleRelation.userId}'`;

      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysSocialRelationsCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 显示vSysSocialRelations对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
 <param name = "divContainer">显示容器</param>
 <param name = "arrSysSocialRelationsObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_vSysSocialRelations(
    divContainer: HTMLDivElement,
    arrvSysSocialRelationsObjLst: Array<clsvSysSocialRelationsEN>,
  ) {
    const strThisFuncName = this.BindTab_vSysSocialRelations.name;
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
        fldName: 'fullName',
        colHeader: '姓名',
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
        fldName: 'nationality',
        colHeader: '国籍',
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
        fldName: 'workUnit',
        colHeader: '工作单位',
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
        fldName: 'major',
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
        fldName: 'achievement',
        colHeader: '成就',
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
        fldName: 'detailedDescription',
        colHeader: '详细说明',
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
        fldName: 'levelName',
        colHeader: '级别名称',
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
    BindTab_V(divDataLst, arrvSysSocialRelationsObjLst, arrDataColumn, 'socialId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjSysSocialRelationsEN">数据传输的目的类对象</param>
*/
  public PutDataToSysSocialRelationsClass(pobjSysSocialRelationsEN: clsSysSocialRelationsEN) {
    pobjSysSocialRelationsEN.SetSocialId(this.socialId); // 社会Id
    pobjSysSocialRelationsEN.SetFullName(this.fullName); // 姓名
    pobjSysSocialRelationsEN.SetNationality(this.nationality); // 国籍
    pobjSysSocialRelationsEN.SetLevelId(this.levelId); // 级别Id
    pobjSysSocialRelationsEN.SetWorkUnit(this.workUnit); // 工作单位
    pobjSysSocialRelationsEN.SetMajor(this.major); // 专业
    pobjSysSocialRelationsEN.SetAchievement(this.achievement); // 成就
    pobjSysSocialRelationsEN.SetDetailedDescription(this.detailedDescription); // 详细说明
    pobjSysSocialRelationsEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjSysSocialRelationsEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjSysSocialRelationsEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjSysSocialRelationsEN.SetIsSubmit(this.isSubmit); // 是否提交
    pobjSysSocialRelationsEN.SetMemo(this.memo); // 备注
  }

  //概念提交审核
  public async btnIsSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    this.SubmitRecord(strKeyId);
  }
  //提交判断；
  public async SubmitRecord(strSocialId: string) {
    this.keyId = strSocialId;

    try {
      const objSysSocialRelationsEN = await SysSocialRelations_GetObjBySocialIdAsync(strSocialId);
      if (objSysSocialRelationsEN == null) return;
      //通过session 权限获取权限
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色 //学生00620003
      if (strRoleId == '00620003') {
        // //通过判断数据用户是否是当前登录用户；
        if (objSysSocialRelationsEN.updUser == strUserId) {
          //判断数据是否已审核
          if (objSysSocialRelationsEN.isSubmit == false) {
            this.SubmitRecordSave();
          } else {
            alert('当前数据已提交！');
            return;
          }
        } else {
          alert('当前数据不是您所添加，不能提交！');
          return;
        }
      } else {
        //可以提交
        //判断数据是否已提交
        if (objSysSocialRelationsEN.isSubmit == false) {
          this.SubmitRecordSave();
        } else {
          alert('当前数据已提交！');
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
    const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
    objSysSocialRelationsEN.SetSocialId(this.keyId);
    objSysSocialRelationsEN.SetIsSubmit(true);
    objSysSocialRelationsEN.sfUpdFldSetStr = objSysSocialRelationsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objSysSocialRelationsEN.socialId == '' || objSysSocialRelationsEN.socialId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await SysSocialRelations_UpdateRecordAsync(
        objSysSocialRelationsEN,
      );
      if (returnBool == true) {
        const strInfo = `提交成功!`;

        //显示信息框
        alert(strInfo);

        HideDialog();
        this.BindGv_vSysSocialRelations(this.thisDivList); // BindGv_vSysSkillCache();;
      } else {
        const strInfo = `提交不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('提交失败');
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

  //取消提交
  public async btnCancelSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要取消的记录！');
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

  /*取消
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async CancelSubmitRecordSave(strKeyId: string) {
    const strThisFuncName = this.CancelSubmitRecordSave.name;
    //
    const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
    objSysSocialRelationsEN.SetSocialId(strKeyId);
    objSysSocialRelationsEN.SetIsSubmit(false);
    objSysSocialRelationsEN.sfUpdFldSetStr = objSysSocialRelationsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objSysSocialRelationsEN.socialId == '' || objSysSocialRelationsEN.socialId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      SysSocialRelations_UpdateRecordAsync(objSysSocialRelationsEN).then((jsonData) => {
        const returnBool: boolean = jsonData;
        if (returnBool == true) {
          const strInfo = `取消成功!`;

          //显示信息框
          alert(strInfo);

          //HideDialog();
          this.BindGv_vSysSocialRelations(this.thisDivList);
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
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnOKUpd_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strCommandText: string = this.btnOKUpd;
    try {
      if (userStore.getUserId != '') {
        switch (strCommandText) {
          case '添加':
            await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,
            if (this.opType == 'AddWithMaxId') {
              await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
                const returnBool2: boolean = <boolean>jsonData;
                if (returnBool2 == true) {
                  HideDialog();
                  this.BindGv_vSysSocialRelations(this.thisDivList);
                }
              });
            } else {
              await this.AddNewRecordSave().then((jsonData) => {
                const returnBool: boolean = jsonData;
                if (returnBool == true) {
                  HideDialog();
                  this.BindGv_vSysSocialRelations(this.thisDivList);
                }
              });
            }
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            await this.UpdateRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              let strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
              strInfo += '(In SysSocialRelationsCRUD.btnOKUpd_Click)';

              //显示信息框
              console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                HideDialog();
                this.BindGv_vSysSocialRelations(this.thisDivList);
              }
            });
            break;
          default:
            AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

            break;
        }
      } else {
        alert('登录超时，请重新登录');
        reLogin();
      }
      HideDivInDivObj(objLayOut, 'divLoading');

      //去掉提交按钮不可用状态
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   */
  public async AddNewRecordWithMaxIdSave() {
    const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
    this.PutDataToSysSocialRelationsClass(objSysSocialRelationsEN);
    try {
      const SysSocialId = await SysSocialRelations_AddNewRecordWithMaxIdAsync(
        objSysSocialRelationsEN,
      );

      if (IsNullOrEmpty(SysSocialId) == false) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return SysSocialId; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 修改记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   */
  public async UpdateRecordSave() {
    const strThisFuncName = this.UpdateRecordSave.name;

    const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
    objSysSocialRelationsEN.SetSocialId(this.keyId);
    this.PutDataToSysSocialRelationsClass(objSysSocialRelationsEN);
    objSysSocialRelationsEN.sfUpdFldSetStr = objSysSocialRelationsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objSysSocialRelationsEN.socialId == '' || objSysSocialRelationsEN.socialId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await SysSocialRelations_UpdateRecordAsync(objSysSocialRelationsEN);
      const returnBool = !!responseText;

      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
  /* 为插入记录做准备工作
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
*/
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    $('#btnOKUpd').attr('disabled', 'false');
    this.opType = 'AddWithMaxId';

    this.btnOKUpd = '确认添加';
    this.btnCancel = '取消添加';
    this.Clear();
    //wucSysSocialRelationsB1.socialId = clsSysSocialRelationsBL.GetMaxStrId_S();
    try {
      const responseText = await SysSocialRelations_GetMaxStrIdAsync();
      const returnString: string = responseText;
      if (returnString == '') {
        const strInfo = `获取表SysSocialRelations的最大关键字为空，不成功，请检查!`;
        //显示信息框
        alert(strInfo);
      } else {
        $('#txtSocialId').val(returnString);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
   */
  public AddNewRecordWithMaxId() {
    this.SetKeyReadOnly(false);
    $('#btnOKUpd').attr('disabled', 'false');
    this.opType = 'AddWithMaxId';

    this.btnOKUpd = '确认添加';
    this.btnCancel = '取消添加';
    this.Clear();
    //wucSysSocialRelationsB1.socialId = clsSysSocialRelationsBL.GetMaxStrId_S();
  }

  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {}

  //添加技能
  public async btnAddgs_PSocialRelaInTab_Click() {
    // 为查询区绑定下拉框
    await this.BindDdl4QueryRegion();
    await this.BindGv_vSysSocialRelations(this.thisDivList);
  }
  //确定选择的观点 并添加到关系表中
  public btnOkgs_PSocialRelaInTab_Click(strkeyId: string) {
    //存放Id
    $('#hidSocialId').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSave();
  }
  //查询技能
  public async btnQuerygs_PSocialRela_Click() {
    await this.BindGv_vSysSocialRelations(this.thisDivList);
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjgs_PSocialRelaEN">数据传输的目的类对象</param>
*/
  public PutDataTogs_PSocialRelaClass(pobjgs_PSocialRelaEN: clsgs_PSocialRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = GetHidPaperId(divName);
    const strUserId = userStore.getUserId;
    const strSocialId = GetInputValueInDivObj(divName, 'hidSocialId');
    pobjgs_PSocialRelaEN.SetPaperId(strPaperId); // 主题编号
    pobjgs_PSocialRelaEN.SetSectionId(GetSelectValueInDivObj(divName, 'ddlSectionId5')); // 论文章节id
    pobjgs_PSocialRelaEN.SetSocialId(strSocialId); // 社会Id
    pobjgs_PSocialRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjgs_PSocialRelaEN.SetUpdUser(strUserId); // 修改人
    pobjgs_PSocialRelaEN.SetMemo(this.memo); // 备注
  }

  /* 添加新记录，保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSave() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.AddNewRecordSave.name;

    const strPaperId = GetHidPaperId(divName);
    const strSocialId = GetInputValueInDivObj(divName, 'hidSocialId');
    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'hidPaperLogTypeId'); //流程日志参数

    const objgs_PSocialRelaEN: clsgs_PSocialRelaEN = new clsgs_PSocialRelaEN();
    this.PutDataTogs_PSocialRelaClass(objgs_PSocialRelaEN);
    let returnBool;
    try {
      //同一主题 同一技能 只能添加一次；
      const strWhere = ` 1 = 1 And paperId = '${strPaperId}' And socialId = '${strSocialId}'`;
      const bolIsExist = await gs_PSocialRela_IsExistRecordAsync(strWhere);

      if (bolIsExist == true) {
        const strMsg = `同一主题同一个用户不能重复添加同一个关系！`;
        alert(strMsg);
        return bolIsExist; //一定要有一个返回值，否则会出错！
      } else {
        returnBool = await gs_PSocialRela_AddNewRecordAsync(objgs_PSocialRelaEN);

        if (returnBool == true) {
          const strInfo = `添加记录成功!`;

          //查询 论文、日志类型是否存在；
          const strWhere = ` 1 = 1 And paperId = '${strPaperId}' And logTypeId = '${strPaperLogTypeId}'`;
          const bolIsExist = await gs_OriginalPaperLog_IsExistRecordAsync(strWhere);

          if (bolIsExist == true) {
            return bolIsExist; //一定要有一个返回值，否则会出错！
          } else {
            //添加论文日志；
            await this.Addgs_OriginalPaperLogSave();
          }

          //根据ID获取最大数；
          const strWhereCond2 = ` 1 =1 and socialId=${strSocialId}`;
          const intCitationCount = await gs_PSocialRela_GetRecCountByCondAsync(strWhereCond2);

          const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
          objSysSocialRelationsEN.SetSocialId(strSocialId);
          objSysSocialRelationsEN.SetCitationCount(intCitationCount);

          objSysSocialRelationsEN.sfUpdFldSetStr = objSysSocialRelationsEN.updFldString; //设置哪些字段被修改(脏字段)
          if (
            objSysSocialRelationsEN.socialId == '' ||
            objSysSocialRelationsEN.socialId == undefined
          ) {
            throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
          }

          returnBool = await SysSocialRelations_UpdateRecordAsync(objSysSocialRelationsEN);
          if (returnBool == false) {
            const strInfo = `操作不成功!`;
            alert(strInfo);
            console.log('操作不成功');
          }

          //显示信息框
          alert(strInfo);
          HideDialogTen();
          RefreshWindow();
        } else {
          const strInfo = `添加记录不成功!`;

          //显示信息框
          alert(strInfo);
        }
      }

      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }
  //添加论文流程日志
  public async Addgs_OriginalPaperLogSave() {
    const objgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN = new clsgs_OriginalPaperLogEN();
    this.PutDataTogs_OriginalPaperLog(objgs_OriginalPaperLogEN);

    try {
      const responseText2 = await gs_OriginalPaperLog_AddNewRecordAsync(objgs_OriginalPaperLogEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        console.log('添加新建论文日志成功');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加日志记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }
  public async PutDataTogs_OriginalPaperLog(pobjgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = GetHidPaperId(divName);
    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'hidPaperLogTypeId'); //流程日志参数
    ////通过区分 是小组讨论还是同伴建议
    //strIdCurrEduclslogTypeId = GetInputValueInDivObj(divName, 'hidCommentTypeId');
    pobjgs_OriginalPaperLogEN.SetPaperId(strPaperId);
    pobjgs_OriginalPaperLogEN.SetLogTypeId(strPaperLogTypeId);
    pobjgs_OriginalPaperLogEN.SetLogDescription('添加子观点');
    //$('#PaperLogTypeId').val("03");
    //switch (strPaperLogTypeId) {
    //    case "01":
    //        pobjgs_OriginalPaperLogEN.SetLogDescription( "添加子观点";
    //        break;
    //    case "02":
    //        pobjgs_OriginalPaperLogEN.SetLogDescription( "同伴建议";
    //        break;

    //    default:
    //        const strMsg = `没有数据处理！`;
    //        alert(strMsg);
    //        break;
    //}
    //pobjgs_OriginalPaperLogEN.SetLogDescription( "新建论文";
    pobjgs_OriginalPaperLogEN.SetUpdUser(userStore.getUserId);
    pobjgs_OriginalPaperLogEN.SetUpdDate(clsPubFun4Web.getNowDate());
  }
  /// <summary>
  /// 在用户自定义控件中，设置关键字的值，是否只读
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetKeyReadOnly)
  /// </summary>
  /// <param name = "bolReadonly">是否只读</param>
  public SetKeyReadOnly(bolReadonly: boolean) {
    $('#txtSocialId').attr('ReadOnly', bolReadonly.toString());
  }
  /*
   * 成就
   */
  public set achievement(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtAchievement', value);
  }
  /*
   * 成就
   */
  public get achievement(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtAchievement');
  }
  /*
   * 成就
   */
  public get achievement_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtAchievement_q');
  }
  /*
   * 设置取消按钮的标题
   */
  public set btnCancel(value: string) {
    $('#btnCancel').html(value);
  }
  /*
   * 设置确定按钮的标题
   */
  public set btnOKUpd(value: string) {
    $('#btnOKUpd').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnOKUpd(): string {
    return $('#btnOKUpd').html();
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }
  /*
   * 获取当前页序号
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 详细说明
   */
  public set detailedDescription(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtDetailedDescription', value);
  }
  /*
   * 详细说明
   */
  public get detailedDescription(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtDetailedDescription');
  }
  /*
   * 添加、修改用的层名
   */
  public set DivName(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidDivName', value);
  }
  /*
   * 姓名
   */
  public set fullName(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtFullName', value);
  }
  /*
   * 姓名
   */
  public get fullName(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtFullName');
  }
  /*
   * 姓名
   */
  public get fullName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtFullName_q');
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvSysSocialRelationsBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvSysSocialRelationsBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvSysSocialRelationsBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvSysSocialRelationsBy');
  }
  /*
   * 用户Id
   */
  public get hidUserId(): string {
    return userStore.getUserId;
  }
  /*
   * 是否提交
   */
  public set isSubmit(value: boolean) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'chkIsSubmit', value.toString());
  }
  /*
   * 是否提交
   */
  public get isSubmit(): boolean {
    return $('#chkIsSubmit').prop('checked');
  }
  /*
   * 设置关键字的值
   */
  public set keyId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidKeyId', value);
  }
  /*
   * 设置关键字的值
   */
  public get keyId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidKeyId');
  }
  /*
   * 级别Id
   */
  public set levelId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlLevelId', value);
  }
  /*
   * 级别Id
   */
  public get levelId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlLevelId');
  }
  /*
   * 级别Id
   */
  public get levelId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlLevelId_q');
  }
  /*
   * 专业
   */
  public set major(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtMajor', value);
  }
  /*
   * 专业
   */
  public get major(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtMajor');
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
   * 国籍
   */
  public set nationality(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtNationality', value);
  }
  /*
   * 国籍
   */
  public get nationality(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtNationality');
  }
  /*
   * 设置操作类型：Add||Update||Detail
   */
  public set opType(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidOpType', value);
  }
  /*
   * 设置操作类型：Add||Update||Detail
   */
  public get opType(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidOpType');
  }
  /*
   * 社会Id
   */
  public set socialId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtSocialId', value);
  }
  /*
   * 社会Id
   */
  public get socialId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtSocialId');
  }
  /*
   * 修改日期
   */
  public set updDate(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtUpdDate', value);
  }
  /*
   * 修改日期
   */
  public get updDate(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUpdDate');
  }
  /*
   * 修改人
   */
  public set updUser(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtUpdUser', value);
  }
  /*
   * 修改人
   */
  public get updUser(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUpdUser');
  }
  /*
   * 工作单位
   */
  public set workUnit(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtWorkUnit', value);
  }
  /*
   * 工作单位
   */
  public get workUnit(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtWorkUnit');
  }
}
