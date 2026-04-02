import $ from 'jquery';
import { Public_SysSocialRelations } from '../GradEduPublicPage/Public_SysSocialRelations';

import { SysSocialRelationsCRUDEx } from '../GradEduTopic/SysSocialRelationsCRUDEx';
import { SysSocialRelations_EditEx_Research } from './SysSocialRelations_EditEx_Research';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { SysSocialRelationsCRUD } from '@/viewsBase/GradEduTopic/SysSocialRelationsCRUD';
import { clsvRTSysSocialRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTSysSocialRelaEN';
import { clsvSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsEN';
import { RTSysSocialRela_DelRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTSysSocialRelaWApi';
import {
  vRTSysSocialRela_GetObjLstByPagerAsync,
  vRTSysSocialRela_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTSysSocialRelaWApi';
import {
  vSysSocialRelations_GetObjLstByPagerAsync,
  vSysSocialRelations_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvSysSocialRelationsWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
  GetButtonObjLstInDivObj,
  GetButtonObjLstInDivObjN,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { vSysSocialRelationsEx_CopyToEx } from '@/ts/L3ForWApiEx/GradEduTopic/clsvSysSocialRelationsExWApi';
import { clsvSysSocialRelationsENEx } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsENEx';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsvRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointEN';
import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
import {
  vRTViewpoint_GetObjLstByPagerAsync,
  vRTViewpoint_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointWApi';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { clsvPaperSubViewpointENEx } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointENEx';
import { vPaperSubViewpoint_GetObjLstByPagerAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { vPaperSubViewpointEx_CopyToEx } from '@/ts/L3ForWApiEx/GradEduPaper/clsvPaperSubViewpointExWApi';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';

declare function ShowDialog(strOpType: string): void;
declare let window: any;
/* SysSocialRelationsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class ResearchTopicSysSocialRelaEx extends SysSocialRelationsCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  public sortvRTSysSocialRelaBy = '';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvSysSocialRelationsBy: string = "socialId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  //社会关系
  public mstrListSysSocialRelaDivPaper = 'divRtSysSocialRelaLst';

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
    let objPage: ResearchTopicSysSocialRelaEx;
    if (SysSocialRelationsCRUD.objPageCRUD == null) {
      SysSocialRelationsCRUD.objPageCRUD = new SysSocialRelationsCRUDEx(divLayout);
      objPage = <ResearchTopicSysSocialRelaEx>SysSocialRelationsCRUD.objPageCRUD;
    } else {
      objPage = <ResearchTopicSysSocialRelaEx>SysSocialRelationsCRUD.objPageCRUD;
    }
    const objPageEdit: SysSocialRelations_EditEx_Research = new SysSocialRelations_EditEx_Research(
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
      if (userStore.getUserId != '') {
        //建立缓存

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

  //社会关系；
  public async liSysSocialRelationsClick(divName: HTMLDivElement) {
    try {
      //主题社会关系
      this.sortvRTSysSocialRelaBy = 'classificationId Asc,updDate Desc';

      await this.BindGv_vRTSysSocialRela(divName);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取客观依据列表不成功,${e}.`;
      alert(strMsg);
    }
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
    let arrvSysSocialRelationsObjLst: Array<clsvPaperSubViewpointEN> = [];
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
      arrvSysSocialRelationsObjLst = await vPaperSubViewpoint_GetObjLstByPagerAsync(objPagerPara);
      arrvSysSocialRelationsExObjLst = arrvSysSocialRelationsObjLst.map(
        vPaperSubViewpointEx_CopyToEx,
      );
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
    try {
      //this.BindTab_vSysSkill(strListDiv, arrvSysSkillObjLst);
      //strhtml = "";
      ////个人观点
      //strhtml += '<div class="info" id="infoConcept"><div class="title btn-4">';

      //strhtml += '<div><a href="javascript:void(0)" title="当前相关社会关系">当前相关社会关系</a></div>';
      ////strhtml += '<div style="float:right; margin-right:20px;"><button style="color:#666" title="添加相关概念" class="layui-btn layui-btn-warm layui-btn-xs" onclick = btnAddNewRecord_Click();> <i class="layui-icon" ></i>添加相关概念</button></div>';

      //strhtml += '</div><ul class="artlist">';
      //v = 0;//给内容加个序号
      //for (let i = 0; i < arrvSysSocialRelationsObjLst.length; i++) {
      //    //得到socialId；
      //    strSocialId = arrvSysSocialRelationsObjLst[i].socialId;
      //    v++;
      //    strhtml += '<li><span class="rowtit color4">' + v + '.[姓名]：</span><span class="abstract-text">' + arrvSysSocialRelationsObjLst[i].fullName + '</span>';
      //    strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[国籍]：</span><span class="abstract-text">' + arrvSysSocialRelationsObjLst[i].nationality + '</span>';
      //    strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[工作单位]：</span><span class="abstract-text">' + arrvSysSocialRelationsObjLst[i].workUnit + '</span>';
      //    strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[专业]：</span><span class="abstract-text">' + arrvSysSocialRelationsObjLst[i].major + '</span></li>';

      //    strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[成就]：</span><span class="abstract-text">' + arrvSysSocialRelationsObjLst[i].achievement + '</span></li>';
      //    strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[详细说明]：</span><span class="abstract-text">' + arrvSysSocialRelationsObjLst[i].detailedDescription + '</span></li>';

      //    strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑用户]：</span>' + arrvSysSocialRelationsObjLst[i].updUser;
      //    strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[编辑时间]：</span>' + arrvSysSocialRelationsObjLst[i].updDate;
      //    //strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color5">[操作]：';

      //    //引用数
      //    strhtml += '&nbsp;&nbsp;被引用数:' + arrvSysSocialRelationsObjLst[i].citationCount;

      //    strhtml += '&nbsp;&nbsp;<button title="引用相关关系" class="layui-btn layui-btn layui-btn-xs" onclick=btnOkRTSysSocialRelaInTab_Click("' + arrvSysSocialRelationsObjLst[i].socialId + '")> ${clsIcon.faCommentDots}引用该相关关系</button>';

      //    strhtml += '</li>';

      //    strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      //}
      //strhtml += '</ul></div>';

      const strHtml = await Public_SysSocialRelations.BindList_vSysSocialRelations(
        '02',
        arrvSysSocialRelationsObjLst,
      );
      //拼接；
      $('#divSysSocialRelationsDataLst').html(strHtml);

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
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strUserId = userStore.getUserId;
    let strWhereCond = ' 1=1';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.fullName_q != '') {
        strWhereCond += ` And ${clsvSysSocialRelationsEN.con_FullName} like '%${this.fullName_q}%'`;
      }
      //if (this.achievement_q != "") {
      //    strWhereCond += ` And ${clsvSysSocialRelationsEN.con_Achievement} like '%${this.achievement_q}%'`;
      //}
      if (this.levelId_q != '' && this.levelId_q != '0') {
        strWhereCond += ` And ${clsvSysSocialRelationsEN.con_LevelId} = '${this.levelId_q}'`;
      }

      if (clsPubLocalStorage.eduClsTypeId == '0001') {
        $('#ddlCurrEduCls_q5').hide();
        $('#ddlPublicViewPoint').show();
        if ($('#ddlPublicViewPoint').val() == '1') {
          strWhereCond += ` And ${clsvSysSocialRelationsEN.con_UpdUser} in('${clsPubLocalStorage.TopicUserList}')`;
        } else {
          strWhereCond += ` And ${clsvSysSocialRelationsEN.con_ShareId} ='03'`;
        }
      }

      if (
        GetSelectValueInDivObj(divName, 'ddlCurrEduCls_q5') != '' &&
        $('#ddlCurrEduCls_q5').val() != '0'
      ) {
        strWhereCond += ` And idCurrEduCls='${GetSelectValueInDivObj(
          divName,
          'ddlCurrEduCls_q5',
        )}'`;
      } else {
        strWhereCond += ` And idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
      }
      //只能查询提交的技能数据
      strWhereCond += ` And ${clsvSysSocialRelationsEN.con_IsSubmit} = 'true'`;

      //排除获取已存在的关系数据 根据当前用户；
      strWhereCond += ` And socialId not in (select socialId from RTSysSocialRela where topicId = '${strTopicId}' And updUser = '${strUserId}')`;
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

    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvSysSocialRelationsObjLst, arrDataColumn, 'socialId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  //查询技能
  public async btnQuerySysSocialRelations_Click() {
    await this.BindGv_vSysSocialRelations(this.thisDivList);
  }

  /////////////////////////////////////////////////////社会关系////////////////////////////////////////////////
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
 <returns>条件串(strWhereCond)</returns>
*/
  public CombinevRTSysSocialRelaCondition(): string {
    let strWhereCond = ` 1 = 1 `;
    strWhereCond += ` And ${clsvRTViewpointEN.con_gsKnowledgeTypeId} = ${enumgs_KnowledgeType.SocialRelationships_07}`;

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTViewpointEN.con_TopicId} = '${strTopicId}'`;
      }

      const strClassificationId = this.classificationId;
      if (strClassificationId != '') {
        strWhereCond += ` And ${clsvRTViewpointEN.con_ClassificationId} = '${strClassificationId}'`;
      }

      const strViewsId = this.viewsId;
      // if (strViewsId != '') {
      //   strWhereCond += ` And ${clsvRTSysSocialRelaEN.con_mId} = ${strViewsId}`;
      // }

    
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTSysSocialRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vRTSysSocialRela(divName: HTMLDivElement) {
    // const strListDiv: string = this.mstrListSysSocialRelaDivPaper;
    const strWhereCond = await this.CombinevRTSysSocialRelaCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvRTSysSocialRelaObjLst: Array<clsvRTViewpointEN> = [];
    //arrvUsersObjLst: Array<clsvUsersSimEN> = [];
    try {
      this.recCount = await vRTViewpoint_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.sortvRTSysSocialRelaBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvRTSysSocialRelaObjLst = await vRTViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    try {
      //this.BindTab_vRTSysSocialRela(arrvRTSysSocialRelaObjLst, arrvUsersObjLst);
      const strHtml = await Public_SysSocialRelations.BindList_vRTSysSocialRela(
        '06',
        arrvRTSysSocialRelaObjLst,
      );
      const divDataLst = GetDivObjInDivObj(divName, 'divDataLst');

      //拼接；
      divDataLst.innerHTML = strHtml;

      this.SetEventForSysSocial(divName);
      if (arrvRTSysSocialRelaObjLst.length > 10) {
        // $("#divSysSocialRelationsDataLst").show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(divName, this, this.divName4Pager);
      }
      console.log('完成BindGv_vRTSysSocialRela!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public SetEventForSysSocial(objLayOut: HTMLDivElement) {
    {
      const arrbtnAddToCurrTopicId = GetButtonObjLstInDivObjN(objLayOut, 'btnUpdSyssocial');
      for (const btnUpdSyssocial of arrbtnAddToCurrTopicId) {
        if (btnUpdSyssocial != null) {
          const strKeyId = btnUpdSyssocial.getAttribute('keyid');

          if (strKeyId != null) {
            const strTopicId = clsPrivateSessionStorage.topicIdInTree;

            btnUpdSyssocial.setAttribute('keyId2', strKeyId);
            const arr = strKeyId.split('|');
            if (arr.length != 2) continue;
            const objData = { subViewpointId: arr[0], paperId: arr[1], topicId: strTopicId };
            (function (objData) {
              btnUpdSyssocial.onclick = function () {
                ResearchTopicSysSocialRelaEx.vuebtn_Click('UpdSyssocial', objData);
              };
            })(objData);
          }
        }
      }
    }
    {
      const arrbtnAddToCurrTopicId = GetButtonObjLstInDivObjN(
        objLayOut,
        'btnUpdateClassificationRecordInTab',
      );
      for (const btnUpdateClassificationRecordInTab of arrbtnAddToCurrTopicId) {
        if (btnUpdateClassificationRecordInTab != null) {
          const strKeyId = btnUpdateClassificationRecordInTab.getAttribute('keyid');

          if (strKeyId != null) {
            const strTopicId = clsPrivateSessionStorage.topicIdInTree;
            const arr = strKeyId.split('|');
            if (arr.length != 2) continue;
            // const strKeyId = `${objvConceptEx.subViewpointId}|${objvConceptEx.memo}`;
            const objData = { subViewpointId: arr[0], strClassificationId: arr[1] };
            (function (objData) {
              btnUpdateClassificationRecordInTab.onclick = function () {
                ResearchTopicSysSocialRelaEx.vuebtn_Click(
                  'UpdateClassificationRecordInTab',
                  objData,
                );
              };
            })(objData);
          }
        }
      }
    }
  }
  /* 函数功能:在数据 列表中跳转到某一页
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
<param name = "intPageIndex">页序号</param>
*/
  //public IndexPageEleven(intPageIndex: number) {
  //    if (intPageIndex == 0) {
  //        intPageIndex = this.objPager.pageCount;
  //    }
  //    console.log("跳转到" + intPageIndex + "页");
  //    this.setCurrPageIndex(intPageIndex, this.divName4Pager);
  //    this.BindGv_vRTSysSocialRela();
  //}

  /* 
在数据表里删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
*/
  public async btnDelRTSysSocialRelaRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const divName = this.getDivName(enumDivType.LayOut_01);
      if (divName == null) return;
      const lngKeyId = Number(strKeyId);
      await this.DelRTSysSocialRelaRecord(lngKeyId);
      await this.BindGv_vRTSysSocialRela(divName);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  /* 
根据关键字删除记录
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRTSysSocialRelaRecord(lngmId: number) {
    try {
      const responseText = await RTSysSocialRela_DelRecordAsync(lngmId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
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

  //添加技能
  public async btnAddRTSysSocialRelaInTab_Click() {
    // 为查询区绑定下拉框
    await this.BindDdl4QueryRegion();
    const strRoleId = userStore.getRoleId;
    if (strRoleId == '00620003') {
      await clsDropDownList.BindDdl_CurrEduClsStu('ddlCurrEduCls_q5');
    } else {
      await clsDropDownList.BindDdl_CurrEduClsTea('ddlCurrEduCls_q5');
    }
    await this.BindGv_vSysSocialRelations(this.thisDivList);
  }

  public get classificationId(): string {
    return ResearchTopicSysSocialRelaEx.GetPropValue('classificationId');
  }

  public get viewsId(): string {
    return ResearchTopicSysSocialRelaEx.GetPropValue('viewsId');
  }
}
