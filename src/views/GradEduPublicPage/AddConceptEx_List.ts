import $ from 'jquery';
import { AddConceptEx } from './AddConceptEx';
import { AddConceptEx_PaperList } from './AddConceptEx_PaperList';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { ConceptCRUD } from '@/viewsBase/GradEduTopic/ConceptCRUD';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsPaperENEx } from '@/ts/L0Entity/GradEduPaper/clsPaperENEx';
import { clsConceptAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsConceptAttachmentEN';
import { clsConceptCitationEN } from '@/ts/L0Entity/GradEduTopic/clsConceptCitationEN';
import { clsConceptEN } from '@/ts/L0Entity/GradEduTopic/clsConceptEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import {
  ConceptAttachment_AddNewRecordAsync,
  ConceptAttachment_DelConceptAttachmentsByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsConceptAttachmentWApi';
import {
  ConceptCitation_AddNewRecordAsync,
  ConceptCitation_DelConceptCitationsByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsConceptCitationWApi';
import {
  Concept_GetObjLstAsync,
  Concept_GetObjLstByPagerAsync,
  Concept_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsConceptWApi';
import { ResearchTopic_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { LiteratureType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  BindDdl_ObjLst,
  BindTab,
  BindTabV2Where,
  GetCheckedKeyIds,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';

import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare function HideDialogThree(): void;
declare let window: any;
/* WApiConceptCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class AddConceptEx_List extends ConceptCRUD implements IShowList {
  //论文列表
  public mstrListDivPaper = 'divPaperDataLst';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortConceptBy: string = "conceptId";
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
    alert(`该类没有绑定该函数：[this.BindGv_Concept]！${strType}${strPara}`);
    //this.BindGv_Concept();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'Concept':
        this.BindGv_ConceptCache(this.thisDivList);
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad_Cache)
 */
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    // 在此处放置用户代码以初始化页面
    try {
      const objPage_Concept = new AddConceptEx('AddConceptEx', this);
      if (userStore.getUserId != '') {
        //通过主题Id获取教学班ID
        if (clsPubLocalStorage.idCurrEduCls == '') {
          const objResearchTopic = await ResearchTopic_GetFirstObjAsync(
            ` topicId=${clsPrivateSessionStorage.topicIdInTree}`,
          );
          if (objResearchTopic == null) {
            const strMsg = Format(
              '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
          }
          clsPubLocalStorage.idCurrEduCls = objResearchTopic.idCurrEduCls;
        }

        //1、为下拉框设置数据源,绑定列表数据

        await gs_Share_BindDdl_ShareIdInDivCache(objLayOut, 'ddlShareId');

        if (GetInputValueInDivObj(objLayOut, 'hidConceptId') != '') {
          await objPage_Concept.UpdateRecord(GetInputValueInDivObj(objLayOut, 'hidConceptId'));
          HideDivInDivObj(objLayOut, 'divLoading');
        } else {
          objPage_Concept.AddNewRecord();
          //获取分享Id
          const responseText = await gs_UserConfigEx_GetNewReturnShareIdEx(
            '06',
            userStore.getUserId,
          );
          const strShareId: string = responseText;
          //const returnBool: boolean = !!responseText2;
          if (strShareId != '') {
            this.shareId = strShareId;
          }

          HideDivInDivObj(objLayOut, 'divLoading');
        }
        //
        ConceptCRUD.sortConceptBy = 'updDate Desc';

        //用户下拉框绑定
        //const ddl_UserId_q = await this.BindDdl_UserId("ddlUserId_q");

        await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q'); //用户查询区域
        //文献类型；
        await this.BindDdl_LiteratureTypeId('ddlLiteratureTypeId_q');

        //获取传参的paperId
        const strPaperId = GetInputValueInDivObj(objLayOut, 'hidRequestPaperId');
        if (strPaperId != '') {
          $('#SelectPaper').hide();
          $('#txtPaperId').val(strPaperId);
        } else {
          $('#SelectPaper').show();
        }
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }
  /// <summary>
  /// 为下拉框获取数据,从表:[Paper]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_LiteratureTypeId(ddlLiteratureTypeId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrPaperObjLst = await LiteratureType_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrPaperObjLst,
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

  /* 根据条件获取相应的对象列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async btnQuery_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    const strWhereCond = await this.CombineConceptCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrConceptObjLst: Array<clsConceptEN> = [];
    try {
      this.recCount = await Concept_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: ConceptCRUD.sortConceptBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrConceptObjLst = await Concept_GetObjLstByPagerAsync(objPagerPara);
      this.BindTab_Concept(this.thisDivList, arrConceptObjLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `查询不成功,${e}.`;
      alert(strMsg);
    }
    // }
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
      const strWhereCond = ` conceptId in (${strKeyList})`;
      let arrConceptObjLst: Array<clsConceptEN> = [];
      arrConceptObjLst = await Concept_GetObjLstAsync(strWhereCond);
      //查询是否有提交的数据
      arrConceptObjLst = arrConceptObjLst.filter((x) => x.isSubmit == true);
      if (arrConceptObjLst.length > 0) {
        alert('包含有已提交数据，不能删除！');
        return '';
      }

      await this.DelMultiRecord(arrKeyIds);
      //Concept_ReFreshThisCache();
      //const arrConcept_Cache = await Concept_GetObjLstAsync("1=1");
      this.BindGv_ConceptCache(this.thisDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombineConceptCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    // const objConcept_Cond: clsConceptEN = new clsConceptEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.conceptName_q != '') {
        strWhereCond += ` And ${clsConceptEN.con_ConceptName} like '%${this.conceptName_q}%'`;
        // objConcept_Cond.SetCondFldValue(clsConceptEN.con_ConceptName, this.conceptName_q, "like");
      }
      //if (this.IsSubmit_q == true) {
      //    strWhereCond += ` And ${clsConceptEN.con_IsSubmit} = '1'`;
      //    objConcept_Cond.SetCondFldValue(clsConceptEN.con_IsSubmit, true, "=");
      //}
      //else {
      //    strWhereCond += ` And ${clsConceptEN.con_IsSubmit} = '0'`;
      //    objConcept_Cond.SetCondFldValue(clsConceptEN.con_IsSubmit, false, "=");
      //}
      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；

      //$('#lnkUserName').html(objvUserRoleRelation.userName + '(' + objvUserRoleRelation.roleName + ')');
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;
      //判断角色
      //管理员
      if (
        strRoleId == enumQxRoles.System_Admin_00620001 ||
        strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        console.log('00620001');
      } else if (strRoleId == '00620002') {
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
        strWhereCond += `And updUser in ( select stuId from vCurrEduClsStu where idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='${strUserId}' And isEffective='1') And isEffective='1')`;
      } else {
        //学生；
        strWhereCond += ` And ${clsConceptEN.con_UpdUser} ='${strUserId}'`;
        //学生00620003

        // strWhereCond += ` And ${clsResearchTopicEN.con_TopicProposePeople} = '${objvUserRoleRelation.userId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineConceptConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv_Cache)
*/
  public async BindGv_ConceptCache(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombineConceptCondition();
    //strWhereCond = JSON.stringify(objConceptEN_Sim);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrConceptObjLst: Array<clsConceptEN> = [];
    try {
      //this.recCount = Concept_GetRecCountByCondCache(objConcept_Cond);
      this.recCount = await Concept_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: ConceptCRUD.sortConceptBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };

      arrConceptObjLst = await Concept_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrConceptObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=Concept)`;
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_Concept(divList, arrConceptObjLst);
      console.log('完成BindGv_Concept!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 显示Concept对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
     <param name = "divContainer">显示容器</param>
     <param name = "arrConceptObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_Concept(
    divContainer: HTMLDivElement,
    arrConceptObjLst: Array<clsConceptEN>,
  ) {
    const strThisFuncName = this.BindTab_Concept.name;
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
        fldName: 'conceptName',
        colHeader: '概念名称',
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
        fldName: 'conceptContent',
        colHeader: '概念内容',
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
        colHeader: '修改用户Id',
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
    await BindTab(divDataLst, arrConceptObjLst, arrDataColumn, 'conceptId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {
    $('#hdnFileOne').val('');
    $('#hdnFileTwo').val('');
    $('#hdnFileThree').val('');
  }

  /* 函数功能:把界面上的属性数据传到类对象中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
<param name = "pobjRTViewpointRelaEN">数据传输的目的类对象</param>
*/
  public PutDataToclsConceptCitationClass(pobjConceptCitationEN: clsConceptCitationEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = GetInputValueInDivObj(divName, 'txtPaperId');
    const strConceptId = GetInputValueInDivObj(divName, 'txtConceptId');
    const strUserId = userStore.getUserId;
    pobjConceptCitationEN.SetPaperId(strPaperId); // 论文编号
    pobjConceptCitationEN.SetConceptId(strConceptId); // 概念Id
    pobjConceptCitationEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjConceptCitationEN.SetUpdUserId(strUserId); // 修改用户Id// 修改用户Id
    //pobjRTViewpointRelaEN.SetMemo(this.memo;// 备注
  }

  //添加引用论文
  public async AddNewRecordConceptCitationSave() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //1.这里执行添加观点引用论文；
    const objConceptCitationEN: clsConceptCitationEN = new clsConceptCitationEN();
    this.PutDataToclsConceptCitationClass(objConceptCitationEN);
    //引用论文；
    const responseText3 = await ConceptCitation_AddNewRecordAsync(objConceptCitationEN);
    const returnBool = !!responseText3;

    if (returnBool == true) {
      //在修改时候，不管是否有附件数据被清除； 都需要执行附件添加功能
      //判断是否有返回的附件路径值
      const fileOne = GetInputValueInDivObj(divName, 'hdnFileOne');
      if (fileOne != '' && fileOne != undefined) {
        //第一个附件框判断

        this.AddPaperSubAttachmentSave(fileOne, 'first');
      } else {
        const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
        if (fileTwo != '' && fileTwo != undefined) {
          this.AddPaperSubAttachmentSave(fileTwo, 'two');
        } else {
          const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
          if (fileThree != '' && fileThree != undefined) {
            this.AddPaperSubAttachmentSave(fileThree, 'three');
          }
        }
      }
    }
  }

  //删除论文引用附件
  public async DelRecordViewpointCitationByWhere(strWhere: string) {
    try {
      const returnInt: number = await ConceptCitation_DelConceptCitationsByCondAsync(strWhere);
      if (returnInt > 0) {
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
      } else {
        // const strInfo = `删除记录不成功!`;
        //显示信息框
        //alert(strInfo);
      }
      //清除后、添加新的论文数据；
      this.AddNewRecordConceptCitationSave();

      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  //观点附件数据存放
  public PutDataToPaperAttachmentClass(
    pobjConceptAttachmentEN: clsConceptAttachmentEN,
    filePath: string,
  ) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    pobjConceptAttachmentEN.SetConceptId(GetInputValueInDivObj(divName, 'txtConceptId')); // 概念Id

    let strfilePath = filePath;
    //判断地址不为空则执行截取操作
    if (strfilePath != '') {
      const index = strfilePath.lastIndexOf('/');
      strfilePath = strfilePath.substring(index + 1, strfilePath.length);
      pobjConceptAttachmentEN.SetFilePath(filePath);

      pobjConceptAttachmentEN.SetConceptAttachmentName(strfilePath);
    }
    pobjConceptAttachmentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期

    pobjConceptAttachmentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班
    pobjConceptAttachmentEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
  }

  //////////////////////////////////////////////////////////////////////附件添加
  //添加上传论文附件方法
  public async AddPaperSubAttachmentSave(filePath: string, strfileNum: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const objConceptAttachmentEN: clsConceptAttachmentEN = new clsConceptAttachmentEN();
    this.PutDataToPaperAttachmentClass(objConceptAttachmentEN, filePath);
    try {
      const responseText2 = await ConceptAttachment_AddNewRecordAsync(objConceptAttachmentEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        //第一个附件
        if (strfileNum == 'first') {
          //如果第二个附件不等于空，那么执行添加函数；
          if (GetInputValueInDivObj(divName, 'hdnFileTwo') != '' && $('#hdnFileTwo') != undefined) {
            const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
            this.AddPaperSubAttachmentSave(fileTwo, 'two');
          } else {
            //为空则判断第三个附件值；
            if (
              GetInputValueInDivObj(divName, 'hdnFileThree') != '' &&
              $('#hdnFileThree') != undefined
            ) {
              const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
              this.AddPaperSubAttachmentSave(fileThree, 'three');
            }
          }
        } else if (strfileNum == 'two') {
          //为空则判断第三个附件值；
          if (
            GetInputValueInDivObj(divName, 'hdnFileThree') != '' &&
            $('#hdnFileThree') != undefined
          ) {
            const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
            this.AddPaperSubAttachmentSave(fileThree, 'three');
          }
        }
      } else {
        const strInfo = `论文附件添加不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  //删除观点附件
  /* 
根据关键字删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecordByWhere(strWhere: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);

    try {
      const returnInt: number = await ConceptAttachment_DelConceptAttachmentsByCondAsync(strWhere);
      if (returnInt > 0) {
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
      } else {
        // const strInfo = `删除记录不成功!`;
        //显示信息框
        //alert(strInfo);
      }

      //在修改时候，不管是否有附件数据被清除； 都需要执行附件添加功能
      //判断是否有返回的附件路径值
      const fileOne = GetInputValueInDivObj(divName, 'hdnFileOne');
      if (fileOne != '' && fileOne != undefined) {
        //第一个附件框判断

        this.AddPaperSubAttachmentSave(fileOne, 'first');
      } else {
        const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
        if (fileTwo != '' && fileTwo != undefined) {
          this.AddPaperSubAttachmentSave(fileTwo, 'two');
        } else {
          const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
          if (fileThree != '' && fileThree != undefined) {
            this.AddPaperSubAttachmentSave(fileThree, 'three');
          }
        }
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

  /* 显示vPaper对象的所有属性值
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   <param name = "divContainer">显示容器</param>
   <param name = "arrPaperObjLst">需要绑定的对象列表</param>
 */
  public async BindTab_vPaper(divContainer: HTMLDivElement, arrPaperExObjLst: Array<clsPaperENEx>) {
    const strThisFuncName = this.BindTab_vPaper.name;
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
      {
        fldName: 'updDate',
        colHeader: '提交日期',
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
        colHeader: '提交用户',
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
          btn1.className = 'btn btn-outline-info btn-sm';
          btn1.setAttribute('onclick', `btnPaperRecordInTab_Click("${strKeyId}");`);
          return btn1;
        },
      },
    ];

    BindTabV2Where(divContainer, arrPaperExObjLst, arrDataColumn, 'paperId', 'TopicPaper');
    //BindTab(o, arrPaperExObjLst, arrDataColumn, "paperId");
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  //选择论文弹出列表数据；
  public async selectPaper_Click() {
    const objPage = new AddConceptEx_PaperList(this.divLayout);
    await objPage.BindGv_vPaper();
  }
  //查询论文列表
  public async btnPaperQuery_Click() {
    const objPage = new AddConceptEx_PaperList(this.divLayout);
    await objPage.BindGv_vPaper();
  }
  //确定选择的论文 并添加到关系表中
  public btnPaperRecordInTab_Click(strkeyId: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    //存放Id
    SetHidPaperId(divName, strkeyId);
    $('#txtPaperId').val(strkeyId);
    //设置只读属性；
    $('#txtPaperId').attr('disabled', 'disabled');
    //关闭列表
    HideDialogThree();
  }

  //提交判断；
  //public async SubmitRecord(strConceptId: string) {

  //    this.keyId = strConceptId;
  //    return new Promise((resolve, reject) => {
  //        try {
  //            const responseText = Concept_GetObjByConceptIdAsync(strConceptId).then((jsonData) => {
  //                const objConceptEN: clsConceptEN = <clsConceptEN>jsonData;

  //                //通过session 权限获取权限

  //                 const strUserId = userStore.getUserId;
  //                strIdCurrEduclsstrRoleId = userStore.getRoleId;
  //                //判断角色 //学生00620003
  //                if (strRoleId == "00620003") {

  //                    // //通过判断数据用户是否是当前登录用户；
  //                    if (objConceptEN.updUser == strUserId) {

  //                        //判断数据是否已审核
  //                        if (objConceptEN.isSubmit == false) {

  //                            const responseText3 = this.SubmitRecordSave().then((jsonData) => {

  //                            });
  //                        }
  //                        else {
  //                            alert("当前数据已提交！");
  //                            return;
  //                        }
  //                    }
  //                    else {
  //                        alert("当前数据不是您所添加，不能提交！");
  //                        return;
  //                    }
  //                }
  //                else {

  //                    //可以提交
  //                    //判断数据是否已提交
  //                    if (objConceptEN.isSubmit == false) {

  //                        const responseText3 = this.SubmitRecordSave().then((jsonData) => {
  //                        });
  //                    }
  //                    else {
  //                        alert("当前数据已提交！");
  //                        return;
  //                    }
  //                }

  //            });
  //        }
  //        catch (e:any) {
  //            console.error(e);
  //            strIdCurrEduclsstrMsg: string = `根据关键字获取相应的记录的对象不成功,${e}.`;
  //            alert(strMsg);
  //        }
  //    });
  //}
  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  //public async SubmitRecordSave(): Promise<boolean> {
  //    //
  //    const objConceptEN: clsConceptEN = new clsConceptEN();
  //    objConceptEN.SetConceptId(this.keyId;
  //    objConceptEN.SetIsSubmit(true;
  //    this.PutDataToConceptClass(objConceptEN);
  //    objConceptEN.sfUpdFldSetStr = objConceptEN.updFldString;//设置哪些字段被修改(脏字段)
  //    if (objConceptEN.conceptId == "" || objConceptEN.conceptId == undefined) {
  //         throw Format("关键字不能为空!(in {0}.{1})", this.constructor.name, strThisFuncName);
  //    }
  //    return new Promise((resolve, reject) => {
  //        try {
  //            const responseText = Concept_UpdateRecordAsync(objConceptEN).then((jsonData) => {
  //                const returnBool: boolean = jsonData;
  //                if (returnBool == true) {
  //                    strIdCurrEduclsstrInfo: string = `提交成功!`;
  //
  //                    //显示信息框
  //                    alert(strInfo);

  //                    HideDialog();
  //                    this.BindGv_ConceptCache();;
  //                }
  //                else {
  //                    strIdCurrEduclsstrInfo: string = `提交不成功!`;
  //
  //                    //显示信息框
  //                    alert(strInfo);
  //                    console.log("提交失败");
  //                }
  //                resolve(jsonData);
  //            });
  //        }
  //        catch (e:any) {
  //            console.error('catch(e)=');
  //            console.error(e);
  //            strIdCurrEduclsstrMsg: string = `修改记录不成功,${e}.`;
  //            alert(strMsg);
  //        }
  //    });
  //}

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
