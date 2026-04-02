import $ from 'jquery';
import { Public_SysSkill } from '../GradEduPublicPage/Public_SysSkill';
import { Pub_PaperList } from '../GradEduPublicPage/Pub_PaperList';
import { SysSkill_EditEx } from './SysSkill_EditEx';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { SysSkillCRUD } from '@/viewsBase/GradEduTopic/SysSkillCRUD';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { BindTab_V, GetCheckedKeyIds, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import { clsSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsSysSkillEN';
import { clsvSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSkillEN';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

import { clsRTSysSkillRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTSysSkillRelaEN';
import { clsSysSkillVerEN } from '@/ts/L0Entity/GradEduTopic/clsSysSkillVerEN';
import { SysComment_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTools/clsSysCommentWApi';
import { RTSysSkillRela_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTSysSkillRelaWApi';
import {
  SysSkillVer_DelSysSkillVersAsync,
  SysSkillVer_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsSysSkillVerWApi';
import { SysSkill_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsSysSkillWApi';
import {
  vSysSkill_GetObjLstByPagerAsync,
  vSysSkill_GetObjLstByPagerCache,
  vSysSkill_GetRecCountByCondAsync,
  vSysSkill_GetRecCountByCondCache,
} from '@/ts/L3ForWApi/GradEduTopic/clsvSysSkillWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { vPaperSubViewpoint_GetObjLstByPagerAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare function ShowDialog(strOpType: string): void;
declare let window: any;

declare function HideDialogThree(): void;
/* SysSkillCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class SysSkillCRUDEx extends SysSkillCRUD implements IShowList {
  public static stridCurrEduCls_Cache = '';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvSysSkillBy: string = "skillId";
  //论文列表
  public mstrListDivPaper = 'divPaperDataLst';
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
    this.BindGv_vSysSkill(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vSysSkill':
        alert('该类没有绑定该函数：[this.BindGv_vSysSkill_Cache]！');
        //this.BindGv_vSysSkillCache();;
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
    let objPage: SysSkillCRUDEx;
    let objPageEdit;
    if (SysSkillCRUD.objPageCRUD == null) {
      SysSkillCRUD.objPageCRUD = new SysSkillCRUDEx(divLayout);
      objPage = <SysSkillCRUDEx>SysSkillCRUD.objPageCRUD;
    } else {
      objPage = <SysSkillCRUDEx>SysSkillCRUD.objPageCRUD;
    }
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
        objPageEdit = new SysSkill_EditEx('SysSkill_EditEx', objPage);

        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        objPageEdit = new SysSkill_EditEx('SysSkill_EditEx', objPage);

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
        const strViewType = '01';
        $('#hidViewType').val(strViewType);
        // 为查询区绑定下拉框
        await this.BindDdl4QueryRegion();

        SysSkillCRUD.sortvSysSkillBy = 'skillName Asc';
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vSysSkill(this.thisDivList);
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad_Cache)
   */
  public async PageLoadCache() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        HideDivInDivObj(objLayOut, 'divLoading');
        //论文
        //PaperCRUD.sortPaperBy = "updDate Desc";

        // 为查询区绑定下拉框
        await this.BindDdl4QueryRegion();

        SysSkillCRUD.sortvSysSkillBy = 'skillName Asc';
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vSysSkillCache(this.thisDivList);
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
 <returns>条件串(strWhereCond)</returns>
*/
  public async CombinevSysSkillCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.skillName_q != '') {
        strWhereCond += ` And ${clsvSysSkillEN.con_SkillName} like '%${this.skillName_q}%'`;
      }
      if (this.operationTypeId_q != '' && this.operationTypeId_q != '0') {
        strWhereCond += ` And ${clsvSysSkillEN.con_OperationTypeId} = '${this.operationTypeId_q}'`;
      }

      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;
      $('#hidUserId').val(strUserId);
      //判断角色
      //管理员
      if ( strRoleId == enumQxRoles.System_Admin_00620001 ||
        strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018) {
        $('#btnDelRecord').show();
        $('#btnCancelSubmit').show();
        if (this.updUser_q != '') {
          strWhereCond += ` And ${clsvSysSkillEN.con_UpdUser} like '%${this.updUser_q}%'`;
        }
      } else if (strRoleId == '00620002') {
        //教师
        $('#btnDelRecord').hide();
        $('#btnCancelSubmit').show();
        if (this.updUser_q != '') {
          strWhereCond += ` And ${clsvSysSkillEN.con_UpdUser} like '%${this.updUser_q}%'`;
        }
      } else {
        //学生 教师；
        $('#btnDelRecord').hide();
        $('#btnCancelSubmit').hide();
        //学生00620003 00620002教师
        const strViewType = GetInputValueInDivObj(divName, 'hidViewType');
        if (strViewType == '01') {
          strWhereCond += ` And ${clsvSysSkillEN.con_UpdUser} = '${strUserId}'`;
        } else {
          strWhereCond += ` And ${clsvSysSkillEN.con_UpdUser} <> '${strUserId}'`;
        }

        //strWhereCond += ` And ${clsvViewpointEN.con_VPProposePeople} = '${objvUserRoleRelation.userId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysSkillCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vSysSkill(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName = this.getDivName(enumDivType.LayOut_01);
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombinevSysSkillCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvSysSkillObjLst: Array<clsvPaperSubViewpointEN> = [];

    try {
      this.recCount = await vSysSkill_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: SysSkillCRUD.sortvSysSkillBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvSysSkillObjLst = await vPaperSubViewpoint_GetObjLstByPagerAsync(objPagerPara);

      const strHtml = await Public_SysSkill.BindList_vSysSkill('01', arrvSysSkillObjLst);

      const strViewType = GetInputValueInDivObj(divName, 'hidViewType');
      if (strViewType == '01') {
        //拼接；
        $('#divDataLst').html(strHtml);
      } else {
        //拼接；
        $('#divOtherDataLst').html(strHtml);
      }

      if (this.recCount >= 10) {
        $('#divPager1').show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvSysSkillObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
    //    alert(strMsg);
    //    return;
    //}
    //try {
    //    this.BindTab_vSysSkill(strListDiv, arrvSysSkillObjLst);
    //    console.log("完成BindGv_vSysSkill!");
    //}
    //catch (e:any) {
    //    console.error('catch(e)=');
    //    console.error(e);
    //    strIdCurrEduclsstrMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
    //    alert(strMsg);
    //}
  }

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
 <returns>条件串(strWhereCond)</returns>
*/
  public async CombinevSysSkillConditionObj(): Promise<clsvSysSkillEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const objvSysSkill_Cond: clsvSysSkillEN = new clsvSysSkillEN();
    objvSysSkill_Cond.SetCondFldValue(
      clsvSysSkillEN.con_IdCurrEduCls,
      clsPubLocalStorage.idCurrEduCls,
      '=',
    );
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.skillName_q != '') {
        objvSysSkill_Cond.SetCondFldValue(clsvSysSkillEN.con_SkillName, this.skillName_q, 'like');
      }
      if (this.operationTypeId_q != '' && this.operationTypeId_q != '0') {
        objvSysSkill_Cond.SetCondFldValue(
          clsvSysSkillEN.con_OperationTypeId,
          this.operationTypeId_q,
          '=',
        );
      }
      //if (this.updUser_q != "") {
      //    strWhereCond += ` And ${clsvSysSkillEN.con_UpdUser} like '%${this.updUser_q}%'`;
      //    objvSysSkill_Cond.SetCondFldValue(clsvSysSkillEN.con_UpdUser, this.updUser_q, "like");
      //}

      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色
      //管理员
      if ( strRoleId == enumQxRoles.System_Admin_00620001 ||
        strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018) {
        $('#btnCancelSubmit').show();
        if (this.updUser_q != '') {
          objvSysSkill_Cond.SetCondFldValue(clsvSysSkillEN.con_UpdUser, this.updUser_q, 'like');
        }
      } else if (strRoleId == '00620002') {
        $('#btnCancelSubmit').show();
        if (this.updUser_q != '') {
          objvSysSkill_Cond.SetCondFldValue(clsvSysSkillEN.con_UpdUser, this.updUser_q, 'like');
        }
      } else {
        $('#btnCancelSubmit').hide();
        //学生；

        objvSysSkill_Cond.SetCondFldValue(clsvSysSkillEN.con_UpdUser, strUserId, '=');
      }
      $('#hidUserId').val(strUserId);
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineSysSkillConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objvSysSkill_Cond;
  }

  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv_Cache)
*/
  public async BindGv_vSysSkillCache(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objvSysSkill_Cond = await this.CombinevSysSkillConditionObj();
    objvSysSkill_Cond.SetCondFldValue(
      clsvSysSkillEN.con_IdCurrEduCls,
      SysSkillCRUDEx.stridCurrEduCls_Cache,
      '=',
    );
    const strWhereCond = JSON.stringify(objvSysSkill_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvSysSkillObjLst: Array<clsvSysSkillEN> = [];
    try {
      this.recCount = await vSysSkill_GetRecCountByCondCache(
        objvSysSkill_Cond,
        SysSkillCRUDEx.stridCurrEduCls_Cache,
      );
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: SysSkillCRUD.sortvSysSkillBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvSysSkillObjLst = await vSysSkill_GetObjLstByPagerCache(
        objPagerPara,
        SysSkillCRUDEx.stridCurrEduCls_Cache,
      );
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvSysSkillObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=SysSkill_${SysSkillCRUD.stridCurrEduCls_Cache})`;
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_vSysSkill(divList, arrvSysSkillObjLst);
      console.log('完成BindGv_vSysSkill!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  /* 显示vSysSkill对象的所有属性值
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
  <param name = "divContainer">显示容器</param>
  <param name = "arrSysSkillObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_vSysSkill(
    divContainer: HTMLDivElement,
    arrvSysSkillObjLst: Array<clsvSysSkillEN>,
  ) {
    const strThisFuncName = this.BindTab_vSysSkill.name;
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
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
        fldName: 'skillName',
        colHeader: '技能名称',
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
        fldName: 'process',
        colHeader: '实施过程',
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
      //    fldName: "okCount",
      //    colHeader: "点赞统计",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "appraiseCount",
      //    colHeader: "评论数",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "score",
      //    colHeader: "评分",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "stuScore",
      //    colHeader: "学生平均分",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "teaScore",
      //    colHeader: "教师评分",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "pdfContent",
      //    colHeader: "Pdf内容",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "pdfPageNum",
      //    colHeader: "Pdf页码",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "citationCount",
      //    colHeader: "引用统计",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "versionCount",
      //    colHeader: "版本统计",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
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
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvSysSkillObjLst, arrDataColumn, 'skillId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
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

      //查询和id相关的关系数据是否存在
      const strWhere1 = ` 1=1 And ${clsRTSysSkillRelaEN.con_SkillId} = '${strKeyId}'`;
      let RTVCount = 0;
      await RTSysSkillRela_GetRecCountByCondAsync(strWhere1).then((jsonData) => {
        RTVCount = jsonData;
      });

      //查询和id相关的评论评分是否存在09
      const strWhere2 = ` 1=1 And tableKey ='${strKeyId}' and commentTypeId='09'`;
      let commentCount = 0;
      await SysComment_GetRecCountByCondAsync(strWhere2).then((jsonData) => {
        commentCount = jsonData;
      });

      if (RTVCount > 0) {
        alert('当前数据已被引用,不能删除！');
        return;
      } else if (commentCount > 0) {
        alert('当前数据已被人评论打分,不能删除！');
        return;
      } else {
        //先获取历史版本再删除；
        const strSkillVWhereCond = ` SkillvId='${strKeyId}' order by updDate Asc`;
        let arrSkillVWObjLst: Array<clsSysSkillVerEN> = [];
        await SysSkillVer_GetObjLstAsync(strSkillVWhereCond).then((jsonData) => {
          arrSkillVWObjLst = <Array<clsSysSkillVerEN>>jsonData;
        });
        const arrSelectedKeys: Array<string> = arrSkillVWObjLst.map((x) => {
          const strId = x.skillVId.toString();
          //strIdCurrEduclsstrKey = strId.substring(3);
          return strId;
        });

        //更新总表3个参数 主键、子表类型、页面操作类型；
        const strSkillId = strKeyId;
        const responseText6 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
          strSkillId,
          '09',
          '3',
          clsPubLocalStorage.idCurrEduCls,
        );
        const returnBool6 = !!responseText6;
        if (returnBool6 == true) {
          console.log('技能数据总表删除成功；');
        } else {
          console.log('技能数据总表删除失败；');
        }
        await this.VDelMultiRecord(arrSelectedKeys);
        await this.DelRecord(strKeyId);
        await this.BindGv_vSysSkill(this.thisDivList);
      }

      ////const responseText = await this.DelRecord(strKeyId);
      ////const responseText2 = await this.BindGv_vSysSkill();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  //批量删除
  public async VDelMultiRecord(arrSkillIdVId: Array<string>) {
    try {
      const returnInt: number = await SysSkillVer_DelSysSkillVersAsync(arrSkillIdVId);
      if (returnInt > 0) {
        const strInfo = `删除历史版本成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
        console.log(strInfo);
      } else {
        const strInfo = `历史版本删除记录不成功!`;
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

      //需要判断当前数据中是否包含已提交数据、如果有则不能删除
      let strKeyList;
      if (arrKeyIds.length == 0) return '';
      strKeyList = '';
      for (let i = 0; i < arrKeyIds.length; i++) {
        if (i == 0) strKeyList = `${strKeyList}'${arrKeyIds[i].toString()}'`;
        else strKeyList += `,` + `'${arrKeyIds[i].toString()}'`;
      }
      //
      const strWhereCond = ` skillId in (${strKeyList})`;
      let arrSysSkillObjLst: Array<clsSysSkillEN> = [];
      await SysSkill_GetObjLstAsync(strWhereCond).then((jsonData) => {
        arrSysSkillObjLst = <Array<clsSysSkillEN>>jsonData;
        //查询是否有提交的数据
        arrSysSkillObjLst = arrSysSkillObjLst.filter((x) => x.isSubmit == true);
        if (arrSysSkillObjLst.length > 0) {
          alert('包含有已提交数据，不能删除！');
          return '';
        }
      });

      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_vSysSkill(this.thisDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  //----------------------------------------------------------------论文部分

  /* 函数功能:在数据 列表中跳转到某一页 论文列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
<param name = "intPageIndex">页序号</param>
*/
  //public IndexPageTwo(intPageIndex: number) {
  //    if (intPageIndex == 0) {
  //        intPageIndex = this.objPager.pageCount;
  //    }
  //    console.log("跳转到" + intPageIndex + "页");
  //    this.setCurrPageIndex(intPageIndex, this.divName4Pager);
  //    this.BindGv_vPaper();
  //}
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
   * 论文标题
   */
  public get paperTitle_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperTitle_q');
  }
  ///////////////////////论文列表条件
  public get readUser_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }
  /*
   * 文献类型Id
   */
  public get literatureTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlLiteratureTypeId_q');
  }
  /*
   * 论文Id
   */
  public set paperId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtPaperId', value);
  }
  /*
   * 论文
   */
  public get paperId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperId');
  }
  /* 把所有的查询控件内容组合成一个条件串
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
  <returns>条件串(strWhereCond)</returns>
*/
  public CombinevPaperCondition(): string {
    // const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }

      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      }
      //用户
      if (this.readUser_q != '' && this.readUser_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.readUser_q}'`;
      }

      //只查询提交的论文数据
      strWhereCond += ` And ${clsPaperEN.con_IsSubmit} = 'true'`;

      //排除获取已被当前观点引用过的论文数据；
      //strWhereCond += ` And paperId not in (select paperId from RTPaperRela where viewpointId = '${strTopicId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //选择论文弹出列表数据；
  public async selectPaper_Click() {
    //论文用户

    await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q'); //用户查询区域
    const objPage_Paper = new Pub_PaperList(this.divLayout);
    await objPage_Paper.BindGv_vPaper();
  }
  //查询论文列表
  public async btnPaperQuery_Click() {
    const objPage_Paper = new Pub_PaperList(this.divLayout);
    await objPage_Paper.BindGv_vPaper();
  }
  //确定选择的论文 并添加到关系表中
  public btnPaperRecordInTab_Click(strkeyId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;

    //存放Id
    SetHidPaperId(divName, strkeyId);
    $('#txtCitationId').val(strkeyId);
    //设置只读属性；
    $('#txtCitationId').attr('disabled', 'disabled');
    //关闭列表
    HideDialogThree();
  }

  /*
   * 分享
   */
  public set shareId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlShareId', value);
  }
  /*
   * 分享
   */
  public get shareId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlShareId');
  }
}
