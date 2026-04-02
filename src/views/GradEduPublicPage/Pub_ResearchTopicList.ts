import $ from 'jquery';
import { AddViewpointEx } from './AddViewpointEx';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { ViewpointCRUD } from '@/viewsBase/GradEduTopic/ViewpointCRUD';
import { ResearchTopicCRUD } from '@/viewsBase/GradEduTopic/ResearchTopicCRUD';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsResearchTopicEN } from '@/ts/L0Entity/GradEduTopic/clsResearchTopicEN';
import { clsRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointRelaEN';
import { clsViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { clsViewpointTypeEN } from '@/ts/L0Entity/RT_Params/clsViewpointTypeEN';
import {
  ResearchTopic_GetFirstObjAsync,
  ResearchTopic_GetObjLstByPagerAsync,
  ResearchTopic_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import {
  RTViewpointRela_AddNewRecordAsync,
  RTViewpointRela_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTViewpointRelaWApi';
import { Viewpoint_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsViewpointWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { LiteratureType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { ViewpointType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsViewpointTypeWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { BindDdl_ObjLst, BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';

declare function HideDialogThree(): void;
declare let window: any;
/* Viewpoint_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class Pub_ResearchTopicList extends ResearchTopicCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvViewpointBy: string = "viewpointId";

  //论文列表
  public mstrListDivPaper = 'divPaperDataLst';
  //主题列表
  public mstrListdivTopicDataLst = 'divTopicDataLst';
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
  BindGv(strType: string) {
    console.log(strType);
    this.BindGv_ResearchTopic();
  }
  BindGvCache(strType: string) {
    switch (strType) {
      case 'ge_InspectionResults':
        alert('该类没有绑定该函数：[this.BindGv_ge_InspectionResults4Func]！');
        //this.BindGv_ge_InspectionResults4Func();
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
        (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
      */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      const objPage_Add = new AddViewpointEx('', this);
      if (userStore.getUserId != '') {
        if (clsPubLocalStorage.idCurrEduCls == '') {
          const objResearchTopic = await ResearchTopic_GetFirstObjAsync(
            ` topicId=${clsPrivateSessionStorage.topicIdInTree}`,
          ); //通过主题Id获取教学班ID
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
          ////const strThisFuncName = this.PageLoad.name;
          clsPubLocalStorage.idCurrEduCls = objResearchTopic.idCurrEduCls;
        }

        await gs_Share_BindDdl_ShareIdInDivCache(objLayOut, 'ddlShareId');
        await this.BindDdl_ViewpointTypeId('ddlViewpointTypeId');

        let userTypeId = GetInputValueInDivObj(objLayOut, 'hidUserTypeId');
        if (userTypeId == '01') {
          userTypeId = '04';
        } else {
          userTypeId = '05';
        }
        if (GetInputValueInDivObj(objLayOut, 'hidViewpointId') != '') {
          await objPage_Add.UpdateRecord(GetInputValueInDivObj(objLayOut, 'hidViewpointId'));

          //if ($("#hidIsRecommend").val() != "") {
          //    const RecommendRecord = await this.RecommendRecord($("#hidViewpointId").val());
          //}

          HideDivInDivObj(objLayOut, 'divLoading');
        } else {
          objPage_Add.AddNewRecord();
          //获取分享Id
          const responseText = await gs_UserConfigEx_GetNewReturnShareIdEx(
            userTypeId,
            userStore.getUserId,
          );
          const strShareId: string = responseText;
          //const returnBool: boolean = !!responseText2;
          if (strShareId != '') {
            this.shareId = strShareId;
          }
          HideDivInDivObj(objLayOut, 'divLoading');
        }

        //1、为下拉框设置数据源,绑定列表数据

        //const ddl_ViewpointTypeId_q = await this.BindDdl_ViewpointTypeId("ddlViewpointTypeId_q");
        ViewpointCRUD.sortvViewpointBy = 'updDate Desc';
        this.hidSortResearchTopicBy = 'updDate Desc';
        //论文
        //PaperCRUD.sortPaperBy = "updDate Desc";
        //用户下拉框绑定
        //const ddl_UserId_q = await this.BindDdl_UserId("ddlUserId_q");

        await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q'); //用户查询区域
        //文献类型；
        await this.BindDdl_LiteratureTypeId('ddlLiteratureTypeId_q');

        //论文
        this.hidSortvRTPaperRelaBy = 'updDate Desc';

        //strWhereCond = await this.CombinevViewpointCondition();
        //const responseText = await vViewpoint_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {

        //});
        //2、显示无条件的表内容在GridView中
        //await this.BindGv_vViewpoint();
        //获取传参的paperId
        const strPaperId = GetInputValueInDivObj(objLayOut, 'hidRequestPaperId');
        if (strPaperId != '') {
          $('#SelectPaper').hide();
          //存放Id
          $('#txtPaperId').val(strPaperId);
        } else {
          $('#SelectPaper').show();
        }
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 为插入记录做准备工作
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
  */

  /// <summary>
  /// 为下拉框获取数据,从表:[ViewpointType]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_ViewpointTypeId(ddlViewpointTypeId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlViewpointTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlViewpointTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrViewpointTypeObjLst = await ViewpointType_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlViewpointTypeId,
        arrViewpointTypeObjLst,
        clsViewpointTypeEN.con_ViewpointTypeId,
        clsViewpointTypeEN.con_ViewpointTypeName,
        '观点类型',
      );
      console.log('完成BindDdl_ViewpointTypeId!');
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
        '文献类型',
      );
      console.log('完成BindDdl_LiteratureTypeId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
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

  ////////////////////////////////////////////////////////////////////////////////// 添加主题关系部分

  /* 根据条件获取相应的记录对象的列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
  */
  public async BindGv_ResearchTopic() {
    // const strListDiv: string = this.mstrListdivTopicDataLst;
    const objDivLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objDivLayOut == null) return;
    const strListDiv = GetDivObjInDivObj(objDivLayOut, this.mstrListdivTopicDataLst);

    const strWhereCond = await this.CombineResearchTopicCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrResearchTopicObjLst: Array<clsResearchTopicEN> = [];
    try {
      this.recCount = await ResearchTopic_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortResearchTopicBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrResearchTopicObjLst = await ResearchTopic_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    //if (arrResearchTopicObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_ResearchTopic(strListDiv, arrResearchTopicObjLst);
      console.log('完成BindGv_ResearchTopic!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 显示ResearchTopic对象的所有属性值
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   <param name = "divContainer">显示容器</param>
   <param name = "arrResearchTopicObjLst">需要绑定的对象列表</param>
 */
  public async BindTab_ResearchTopic(
    divContainer: HTMLDivElement,
    arrResearchTopicObjLst: Array<clsResearchTopicEN>,
  ) {
    const strThisFuncName = this.BindTab_ResearchTopic.name;
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
        fldName: 'topicName',
        colHeader: '栏目主题',
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
        fldName: 'topicContent',
        colHeader: '主题内容',
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
      //    fldName: "topicProposePeople",
      //    colHeader: "主题提出人",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      //{
      //    fldName: "orderNum",
      //    colHeader: "序号",
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
          btn1.setAttribute('onclick', `btnOkInTab_Click('${strKeyId}');`);
          return btn1;
        },
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
    await BindTab(divDataLst, arrResearchTopicObjLst, arrDataColumn, 'topicId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /* 把所有的查询控件内容组合成一个条件串
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
  <returns>条件串(strWhereCond)</returns>
*/
  public async CombineResearchTopicCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId'); //观点
    // const strTopicId = clsPrivateSessionStorage.topicIdInTree; //主题
    const strUserId = userStore.getUserId;

    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.topicName_q != "") {
      //    strWhereCond += ` And ${clsResearchTopicEN.con_TopicName} like '%${this.topicName_q}%'`;
      //}
      //if (this.TopicProposePeople_q != "") {
      //    strWhereCond += ` And ${clsResearchTopicEN.con_TopicProposePeople} like '%${this.TopicProposePeople_q}%'`;
      //}
      //排除获取已存在的关系数据 根据当前用户；
      strWhereCond += ` And topicId not in (select topicId from RTViewpointRela where viewpointId = '${strViewpointId}' And updUser = '${strUserId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineResearchTopicCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //确定选择的主题 并添加到关系表中
  public btnOkInTab_Click(strkeyId: string) {
    //存放Id
    clsPrivateSessionStorage.topicIdInTree = strkeyId;
    //执行添加关系方法
    this.AddNewRecordSaveViewpointRela();
  }

  ///////////////////////////////////---------------------------------------------------------------------------添加主题观点关系

  /* 添加新记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 */
  public async AddNewRecordSaveViewpointRela() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    const strThisFuncName = this.AddNewRecordSaveViewpointRela.name;

    const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId'); //观点

    const objRTViewpointRelaEN: clsRTViewpointRelaEN = new clsRTViewpointRelaEN();
    await this.PutDataToRTViewpointRelaClass(objRTViewpointRelaEN);

    try {
      ////同一主题 同一观点 只能添加一次；
      //const strWhere = " 1 = 1 And topicId = '" + strTopicId + "' And viewpointId = '" + strViewpointId + "' And updUser = '" + strUserId + "'";
      ////const strWhere = " 1 = 1 And topicId = '" + strTopicId + "' And viewpointId = '" + strViewpointId + "'";
      //const responseText = await RTViewpointRela_IsExistRecordAsync(strWhere);
      //strIdCurrEduclsbolIsExist: boolean = responseText;
      //if (bolIsExist == true) {
      //    strIdCurrEduclsstrMsg: string = `同一观点不能重复添加同一个主题！`;
      //    alert(strMsg);
      //    return responseText;//一定要有一个返回值，否则会出错！
      //}

      const responseText2 = await RTViewpointRela_AddNewRecordAsync(objRTViewpointRelaEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        //根据ID获取最大数；
        const strWhereCond2 = ` 1 =1 and viewpointId=${strViewpointId}`;
        const intCitationCount = await RTViewpointRela_GetRecCountByCondAsync(strWhereCond2);

        const objViewpointEN: clsViewpointEN = new clsViewpointEN();
        objViewpointEN.SetViewpointId(strViewpointId);
        objViewpointEN.SetCitationCount(intCitationCount);

        objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        await Viewpoint_UpdateRecordAsync(objViewpointEN).then((jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == false) {
            const strInfo = `操作不成功!`;
            alert(strInfo);
            console.log('操作不成功');
          }
        });

        //strIdCurrEduclsstrInfo: string = `添加成功!`;
        //
        //HideDialogTwo();
        ////显示信息框
        //alert(strInfo);
        //window.location.href = "../GraduateEdu/ViewpointAdd?TopicRelaId=" + strViewpointId;

        ////执行之前需要判断是否有引用 ;有就添加论文、没有就添加附件；
        //if ($("#txtPaperId").val() == "") {
        //添加成功，则执行附件添加方法；
        //判断是否有返回的附件路径值
        //if ($("#hdnFileOne").val() != "") { //第一个附件框判断
        //    strIdCurrEduclsfileOne = $("#hdnFileOne").val();
        //    this.AddPaperSubAttachmentSave(fileOne, "first");
        //}
        //else {
        //    if ($("#hdnFileTwo").val() != "") {
        //        strIdCurrEduclsfileTwo = $("#hdnFileTwo").val();
        //        this.AddPaperSubAttachmentSave(fileTwo, "two");
        //    }
        //    else {
        //        if ($("#hdnFileThree").val() != "") {
        //            strIdCurrEduclsfileThree = $("#hdnFileThree").val();
        //            this.AddPaperSubAttachmentSave(fileThree, "three");
        //        }
        //    }

        //}
        //}
        //else {
        //    //1.这里执行添加观点引用论文；
        //    const objclsViewpointCitationEN: clsViewpointCitationEN = new clsViewpointCitationEN();
        //    this.PutDataToclsViewpointCitationClass(objclsViewpointCitationEN);
        //    //引用论文；
        //    const responseText3 = await ViewpointCitation_AddNewRecordAsync(objclsViewpointCitationEN);
        //    const returnBool: boolean = !!responseText3;

        //    if (returnBool == true) {

        //        //添加成功，则执行附件添加方法；
        //        //判断是否有返回的附件路径值
        //        if ($("#hdnFileOne").val() != "") { //第一个附件框判断
        //            strIdCurrEduclsfileOne = $("#hdnFileOne").val();
        //            this.AddPaperSubAttachmentSave(fileOne, "first");
        //        }
        //        else {
        //            if ($("#hdnFileTwo").val() != "") {
        //                strIdCurrEduclsfileTwo = $("#hdnFileTwo").val();
        //                this.AddPaperSubAttachmentSave(fileTwo, "two");
        //            }
        //            else {
        //                if ($("#hdnFileThree").val() != "") {
        //                    strIdCurrEduclsfileThree = $("#hdnFileThree").val();
        //                    this.AddPaperSubAttachmentSave(fileThree, "three");
        //                }
        //            }

        //        }

        //    }
        //    else {

        //    }

        //}
      } else {
        const strInfo = `添加不成功!`;

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
  <param name = "pobjRTViewpointRelaEN">数据传输的目的类对象</param>
*/
  public async PutDataToRTViewpointRelaClass(pobjRTViewpointRelaEN: clsRTViewpointRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    const strViewpointId = GetInputValueInDivObj(divName, 'hidViewpointId');
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strUserId = userStore.getUserId;
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);

    pobjRTViewpointRelaEN.SetIdCurrEduCls(strIdCurrEduCls);
    pobjRTViewpointRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTViewpointRelaEN.SetViewpointId(strViewpointId); // 观点Id
    pobjRTViewpointRelaEN.SetProposePeople(strUserId); // 提出人
    pobjRTViewpointRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTViewpointRelaEN.SetUpdUser(strUserId); // 修改用户Id// 修改用户Id
    pobjRTViewpointRelaEN.SetClassificationId('0000000000'); // 分类为000000
    //pobjRTViewpointRelaEN.SetMemo(this.memo;// 备注
  }
  /* 函数功能:从界面列表中根据某一个字段排序
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
      ResearchTopicCRUD.ascOrDesc4SortFun,
      ResearchTopicCRUD.sortResearchTopicBy,
      strSortExpress,
    );
    ResearchTopicCRUD.sortResearchTopicBy = sortBy;
    ResearchTopicCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    ResearchTopicCRUD.sortFunStatic = sortFun;
    await this.BindGv_ResearchTopic();
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortResearchTopicBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    SetInputValueInDivObj(divName, 'hidSortResearchTopicBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortResearchTopicBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    return GetInputValueInDivObj(divName, 'hidSortResearchTopicBy');
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
    this.BindGv_ResearchTopic();
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvPaperBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    SetInputValueInDivObj(divName, 'hidSortvPaperBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvPaperBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    return GetInputValueInDivObj(divName, 'hidSortvPaperBy');
  }
  /*
   * 论文标题
   */
  public get paperTitle_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    return GetInputValueInDivObj(divName, 'txtPaperTitle_q');
  }
  ///////////////////////论文列表条件
  public get readUser_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }

  /*
   * 文献类型Id
   */
  public get literatureTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    return GetSelectValueInDivObj(divName, 'ddlLiteratureTypeId_q');
  }
  /*
   * 论文Id
   */
  public set paperId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    SetInputValueInDivObj(divName, 'txtPaperId', value);
  }
  /*
   * 论文
   */
  public get paperId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    return GetInputValueInDivObj(divName, 'txtPaperId');
  }
  /*
   * 设置排序字段-相当使用ViewState功能  主题论文关系
   */
  public set hidSortvRTPaperRelaBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    SetInputValueInDivObj(divName, 'hidSortvRTPaperRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvRTPaperRelaBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    return GetInputValueInDivObj(divName, 'hidSortvRTPaperRelaBy');
  }
  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */
  public async CombinevPaperCondition(): Promise<string> {
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

  //选择论文

  ////查询用户数据
  //public async btnUserQuery_Click() {
  //    const responseObjList = await this.BindGv_vPaper();
  //}
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

  /*
   * 分享
   */
  public set shareId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    SetSelectValueByIdInDivObj(divName, 'ddlShareId', value);
  }
  /*
   * 分享
   */
  public get shareId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    // if (divName == null) return;
    return GetSelectValueInDivObj(divName, 'ddlShareId');
  }
}
