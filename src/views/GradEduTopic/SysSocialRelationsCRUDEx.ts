import $ from 'jquery';
import { Public_SysSocialRelations } from '../GradEduPublicPage/Public_SysSocialRelations';
import { SysSocialRelations_EditEx } from './SysSocialRelations_EditEx';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { SysSocialRelationsCRUD } from '@/viewsBase/GradEduTopic/SysSocialRelationsCRUD';
import { clsRTSysSocialRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTSysSocialRelaEN';
import { clsSysSocialRelationsVerEN } from '@/ts/L0Entity/GradEduTopic/clsSysSocialRelationsVerEN';
import { clsvSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsEN';
import { SysComment_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTools/clsSysCommentWApi';
import { RTSysSocialRela_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTSysSocialRelaWApi';
import {
  SysSocialRelationsVer_DelSysSocialRelationsVersAsync,
  SysSocialRelationsVer_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsSysSocialRelationsVerWApi';
import {
  vSysSocialRelations_GetObjLstByPagerAsync,
  vSysSocialRelations_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvSysSocialRelationsWApi';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';

import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { BindTab_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { vSysSocialRelationsEx_CopyToEx } from '@/ts/L3ForWApiEx/GradEduTopic/clsvSysSocialRelationsExWApi';
import { clsvSysSocialRelationsENEx } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsENEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { clsvPaperSubViewpointENEx } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointENEx';
import { vPaperSubViewpoint_GetObjLstByPagerAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { vPaperSubViewpointEx_CopyToEx } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSubViewpointExWApi';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare function ShowDialog(strOpType: string): void;
declare let window: any;
/* SysSocialRelationsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class SysSocialRelationsCRUDEx extends SysSocialRelationsCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvSysSocialRelationsBy: string = "socialId";
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
    let objPage: SysSocialRelationsCRUDEx;
    let objPageEdit;
    if (SysSocialRelationsCRUD.objPageCRUD == null) {
      SysSocialRelationsCRUD.objPageCRUD = new SysSocialRelationsCRUDEx(divLayout);
      objPage = <SysSocialRelationsCRUDEx>SysSocialRelationsCRUD.objPageCRUD;
    } else {
      objPage = <SysSocialRelationsCRUDEx>SysSocialRelationsCRUD.objPageCRUD;
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
        objPageEdit = new SysSocialRelations_EditEx('SysSocialRelations_EditEx', objPage);

        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        objPageEdit = new SysSocialRelations_EditEx('SysSocialRelations_EditEx', objPage);

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
      default:
        AccessBtnClickDefault(strCommandName, 'WA_Users_QUDI_CacheEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
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
      this.divName4Pager = 'divPager1'; //列表中的分页区的层Id
      if (userStore.getUserId != '') {
        //建立缓存
        //首次加载默认个人观点
        const strViewType = '01';
        $('#hidViewType').val(strViewType);
        // 为查询区绑定下拉框
        await this.BindDdl4QueryRegion();

        SysSocialRelationsCRUD.sortvSysSocialRelationsBy = 'fullName Asc';
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

  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vSysSocialRelations(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName = this.getDivName(enumDivType.LayOut_01);
    this.divName4Pager = 'divPager1'; //列表中的分页区的层Id

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
        orderBy: SysSocialRelationsCRUD.sortvSysSocialRelationsBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      const arrvSysSocialRelationsObjLst = await vPaperSubViewpoint_GetObjLstByPagerAsync(
        objPagerPara,
      );
      arrvSysSocialRelationsExObjLst = arrvSysSocialRelationsObjLst.map(
        vPaperSubViewpointEx_CopyToEx,
      );
      const strHtml = await Public_SysSocialRelations.BindList_vSysSocialRelations(
        '01',
        arrvSysSocialRelationsExObjLst,
      );
      //拼接；
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
    //if (arrvSysSocialRelationsObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
    //    alert(strMsg);
    //    return;
    //}
    //try {
    //    this.BindTab_vSysSocialRelations(strListDiv, arrvSysSocialRelationsObjLst);
    //    console.log("完成BindGv_vSysSocialRelations!");
    //}
    //catch (e:any) {
    //    console.error('catch(e)=');
    //    console.error(e);
    //    strIdCurrEduclsstrMsg: string = `绑定对象列表不成功.Error Massage:${e}.`;
    //    alert(strMsg);
    //}
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevSysSocialRelationsCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.fullName_q != '') {
        strWhereCond += ` And ${clsvSysSocialRelationsEN.con_FullName} like '%${this.fullName_q}%'`;
      }
      if (this.achievement_q != '') {
        strWhereCond += ` And ${clsvSysSocialRelationsEN.con_Achievement} like '%${this.achievement_q}%'`;
      }
      if (this.levelId_q != '' && this.levelId_q != '0') {
        strWhereCond += ` And ${clsvSysSocialRelationsEN.con_LevelId} = '${this.levelId_q}'`;
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
      } else if (strRoleId == '00620002') {
        //教师
        $('#btnDelRecord').hide();
        $('#btnCancelSubmit').show();
      } else {
        //学生
        $('#btnDelRecord').hide();
        $('#btnCancelSubmit').hide();
        //学生00620003 00620002教师
        //这里判断--如果类型为01 个人观点、否则是他人观点；
        const strViewType = GetInputValueInDivObj(divName, 'hidViewType');
        if (strViewType == '01') {
          strWhereCond += ` And ${clsvSysSocialRelationsEN.con_UpdUser} = '${strUserId}'`;
        } else {
          strWhereCond += ` And ${clsvSysSocialRelationsEN.con_UpdUser} <> '${strUserId}'`;
        }

        //strWhereCond += ` And ${clsvViewpointEN.con_VPProposePeople} = '${objvUserRoleRelation.userId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysSocialRelationsCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
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
      const strWhere1 = ` 1=1 And ${clsRTSysSocialRelaEN.con_SocialId} = '${strKeyId}'`;
      let RTVCount = 0;
      await RTSysSocialRela_GetRecCountByCondAsync(strWhere1).then((jsonData) => {
        RTVCount = jsonData;
      });

      //查询和id相关的评论评分是否存在10
      const strWhere2 = ` 1=1 And tableKey ='${strKeyId}' and commentTypeId='10'`;
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
        const strSocialVWhereCond = ` SocialIdvId='${strKeyId}' order by updDate Asc`;
        let arrSysSocialRelationsVWObjLst: Array<clsSysSocialRelationsVerEN> = [];
        await SysSocialRelationsVer_GetObjLstAsync(strSocialVWhereCond).then((jsonData) => {
          arrSysSocialRelationsVWObjLst = <Array<clsSysSocialRelationsVerEN>>jsonData;
        });
        const arrSelectedKeys: Array<string> = arrSysSocialRelationsVWObjLst.map((x) => {
          const strId = x.socialVId.toString();
          //strIdCurrEduclsstrKey = strId.substring(3);
          return strId;
        });
        //更新总表3个参数 主键、子表类型、页面操作类型；
        const strSocialId = strKeyId;
        const responseText6 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
          strSocialId,
          '10',
          '3',
          clsPubLocalStorage.idCurrEduCls,
        );
        const returnBool6 = !!responseText6;
        if (returnBool6 == true) {
          console.log('社会关系数据总表删除成功；');
        } else {
          console.log('社会关系数据总表删除失败；');
        }
        await this.VDelMultiRecord(arrSelectedKeys);
        await this.DelRecord(strKeyId);
        await this.BindGv_vSysSocialRelations(this.thisDivList);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  //批量删除
  public async VDelMultiRecord(arrSocialVId: Array<string>) {
    try {
      const returnInt: number = await SysSocialRelationsVer_DelSysSocialRelationsVersAsync(
        arrSocialVId,
      );
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
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvSysSocialRelationsObjLst, arrDataColumn, 'socialId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
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
