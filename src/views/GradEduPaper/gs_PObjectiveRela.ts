import $ from 'jquery';
import { Public_TopicObjective } from '../GradEduPublicPage/Public_TopicObjective';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { TopicObjectiveCRUD } from '@/viewsBase/GradEduTopic/TopicObjectiveCRUD';
import { clsgs_OriginalPaperLogEN } from '@/ts/L0Entity/GradEduPaper/clsgs_OriginalPaperLogEN';
import { clsgs_PTopicObjectiveRelaEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PTopicObjectiveRelaEN';
import { clsTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsTopicObjectiveEN';
import { clsvTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN';
import {
  gs_OriginalPaperLog_AddNewRecordAsync,
  gs_OriginalPaperLog_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_OriginalPaperLogWApi';
import {
  gs_PTopicObjectiveRela_AddNewRecordAsync,
  gs_PTopicObjectiveRela_GetRecCountByCondAsync,
  gs_PTopicObjectiveRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PTopicObjectiveRelaWApi';
import { TopicObjective_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsTopicObjectiveWApi';
import {
  vTopicObjective_GetObjLstByPagerAsync,
  vTopicObjective_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvTopicObjectiveWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { BindTabV2Where_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { GetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { vPaperSubViewpoint_GetObjLstByPagerAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';
import { userStore } from '@/store/modulesShare/user';

declare function HideDialogEight(): void;
declare function RefreshWindow(): void;
declare let window: any;
/* WApiTopicObjective_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PObjectiveRela extends TopicObjectiveCRUD {
  //客观数据列表
  public mstrListDivObjective = 'divObjectiveDataLst';

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
      if (userStore.getUserId != '') {
        ////建立缓存
        //
        //const arrvTopicObjective_Cache = await vTopicObjective_GetObjLstAsync("1=1");

        TopicObjectiveCRUD.sortvTopicObjectiveBy = 'updDate Desc';

        ////用户下拉框绑定
        //const ddl_UserId_q = await this.BindDdl_UserId("ddlUserId_q");
        ////文献类型；
        //const ddl_LiteratureTypeId_q = await this.BindDdl_LiteratureTypeId("ddlLiteratureTypeId_q");

        //strWhereCond = await this.CombinevTopicObjectiveCondition();
        //const responseText = await vTopicObjective_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {

        //});
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vTopicObjective();
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
  public async CombinevTopicObjectiveCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return '';
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    const strPaperId = GetHidPaperId(divName);
    const strUserId = userStore.getUserId;

    const txtObjUpdName_q = GetInputValueInDivObj(divName, 'txtObjUpdName_q');

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //只能查询提交的客观数据
      strWhereCond += ` And ${clsvTopicObjectiveEN.con_IsSubmit} = 'true'`;

      const strPageType = GetInputValueInDivObj(divName, 'hidPageType');
      if (strPageType == 'gs_TDR') {
        if (GetInputValueInDivObj(divName, 'txtViewpointName_q') != '') {
          strWhereCond += ` And ${clsvTopicObjectiveEN.con_ObjectiveName} like '%${$(
            '#txtViewpointName_q',
          ).val()}%'`;
        }
        if (GetInputValueInDivObj(divName, 'txtViewUpdName_q') != '') {
          const strUserName = GetInputValueInDivObj(divName, 'txtViewUpdName_q');
          const objUser = arrUsers.find((x) => x.userName == strUserName);
          if (objUser != null) {
            strWhereCond += ` And ${clsvTopicObjectiveEN.con_UpdUser} = '${objUser.userId}'`;
          }
        }
        const strhidObjectvieTypeId = GetInputValueInDivObj(divName, 'hidObjectiveTypeId');
        if (strhidObjectvieTypeId != '') {
          strWhereCond += ` And ${clsvTopicObjectiveEN.con_ObjectiveType} = '${strhidObjectvieTypeId}'`;
        }
        //strWhereCond += ` And topicObjectiveId not in (select topicObjectiveId from RTTopicObjectiveRela where paperId = '${strPaperId}' And updUser = '${strUserId}')`;
      } else {
        if (this.objectiveName_q != '') {
          strWhereCond += ` And ${clsvTopicObjectiveEN.con_ObjectiveName} like '%${this.objectiveName_q}%'`;
        }
        if (txtObjUpdName_q != '') {
          const strUserName = txtObjUpdName_q;
          const objUser = arrUsers.find((x) => x.userName == strUserName);
          if (objUser != null) {
            strWhereCond += ` And ${clsvTopicObjectiveEN.con_UpdUser} = '${objUser.userId}'`;
          }
        }
        //根据类型来查询；
        //根据传入的hidObjectiveTypeId 来区分是事实或依据
        const strhidObjectvieTypeId = GetInputValueInDivObj(divName, 'hidObjectiveTypeId');
        if (strhidObjectvieTypeId != '') {
          strWhereCond += ` And ${clsvTopicObjectiveEN.con_ObjectiveType} = '${strhidObjectvieTypeId}'`;
        }
        //排除获取已存在的关系数据 根据当前用户；
        strWhereCond += ` And topicObjectiveId not in (select topicObjectiveId from gs_PTopicObjectiveRela where paperId = '${strPaperId}' And updUser = '${strUserId}')`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineTopicObjectiveCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vTopicObjective() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    // const strListDiv: string = this.mstrListDivObjective;
    const strWhereCond = await this.CombinevTopicObjectiveCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvTopicObjectiveObjLst: Array<clsvPaperSubViewpointEN> = [];
    try {
      this.recCount = await vTopicObjective_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: TopicObjectiveCRUD.sortvTopicObjectiveBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvTopicObjectiveObjLst = await vPaperSubViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    //if (arrvTopicObjectiveObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
    //    alert(strMsg);
    //    return;
    //}
    try {
      const strPageType = GetInputValueInDivObj(divName, 'hidObjectiveTypeId'); //页面参数
      const strHtml = await Public_TopicObjective.BindList_vTopicObjective(
        '02',
        strPageType,
        arrvTopicObjectiveObjLst,
      );
      //拼接；
      $('#divObjectiveDataLst').html(strHtml);

      if (arrvTopicObjectiveObjLst.length > 10) {
        //$("#divPager3").show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
      console.log('完成BindGv_vTopicObjective!');
      //this.BindTab_vTopicObjective(strListDiv, arrvTopicObjectiveObjLst);
      //console.log("完成BindGv_vTopicObjective!");
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 显示vTopicObjective对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
     <param name = "divContainer">显示容器</param>
     <param name = "arrTopicObjectiveObjLst">需要绑定的对象列表</param>
   */
  public async BindTab_vTopicObjective(
    divContainer: HTMLDivElement,
    arrvTopicObjectiveObjLst: Array<clsvTopicObjectiveEN>,
  ) {
    const strThisFuncName = this.BindTab_vTopicObjective.name;
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
        fldName: 'objectiveName',
        colHeader: '客观名称',
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
        fldName: 'objectiveContent',
        colHeader: '客观内容',
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
        fldName: 'objectiveTypeName',
        colHeader: '客观类型名称',
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
          btn1.setAttribute('onclick', `btnOkObjectiveInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },
    ];
    //BindTab(o, arrvTopicObjectiveObjLst, arrDataColumn, "topicObjectiveId");
    BindTabV2Where_V(
      divContainer,
      arrvTopicObjectiveObjLst,
      arrDataColumn,
      'topicObjectiveId',
      'TopicObjectiveFact',
    );
    if (arrvTopicObjectiveObjLst.length > 10) {
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
    }
  }

  //概念查询按钮
  public async btnQueryObjective_Click() {
    //查询客观列表
    await this.BindGv_vTopicObjective();
  }
  //分页数据
  /* 函数功能:在数据 列表中跳转到某一页 观点列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
 <param name = "intPageIndex">页序号</param>
*/
  public IndexPageSeven(intPageIndex: number) {
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);
    this.BindGv_vTopicObjective();
  }

  //添加客观关系弹出客观列表按钮
  public async btnAddTopicObjectiveRela_Click() {
    await this.BindGv_vTopicObjective();
  }

  //确定选择的客观观点 并添加到关系表中
  public btnOkObjectiveInTab_Click(strkeyId: string) {
    //存放Id
    $('#hidObjectiveId').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSave();
  }
  /* 添加新记录，保存函数
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSave() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    const strThisFuncName = this.AddNewRecordSave.name;
    const strObjectiveId = GetInputValueInDivObj(divName, 'hidObjectiveId');
    const strPaperId = GetHidPaperId(divName);
    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'hidPaperLogTypeId'); //流程日志参数
    // const strUserId = userStore.getUserId;
    this.DivName = 'divAddNewRecordSave';
    const objgs_PTopicObjectiveRelaEN: clsgs_PTopicObjectiveRelaEN =
      new clsgs_PTopicObjectiveRelaEN();
    this.PutDataTogs_PTopicObjectiveRelaClass(objgs_PTopicObjectiveRelaEN);
    try {
      //同一主题 同一客观事实 数据 只能添加一次；
      const strWhere = ` 1 = 1 And paperId = '${strPaperId}' And topicObjectiveId = '${strObjectiveId}'`;
      //const strWhere = " 1 = 1 And paperId = '" + strPaperId + "' And viewpointId = '" + strViewpointId + "'";
      const bolIsExist = await gs_PTopicObjectiveRela_IsExistRecordAsync(strWhere);

      if (bolIsExist == true) {
        const strMsg = `同一主题同一用户不能重复添加同一个客观事实数据！`;
        alert(strMsg);
        return bolIsExist; //一定要有一个返回值，否则会出错！
      } else {
        const responseText = await gs_PTopicObjectiveRela_AddNewRecordAsync(
          objgs_PTopicObjectiveRelaEN,
        );
        const returnBool = !!responseText;
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
          const strWhereCond2 = ` 1 =1 and topicObjectiveId=${strObjectiveId}`;
          const intCitationCount = await gs_PTopicObjectiveRela_GetRecCountByCondAsync(
            strWhereCond2,
          );

          const objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
          objTopicObjectiveEN.SetTopicObjectiveId(strObjectiveId);
          objTopicObjectiveEN.SetCitationCount(intCitationCount);

          objTopicObjectiveEN.sfUpdFldSetStr = objTopicObjectiveEN.updFldString; //设置哪些字段被修改(脏字段)
          if (
            objTopicObjectiveEN.topicObjectiveId == '' ||
            objTopicObjectiveEN.topicObjectiveId == undefined
          ) {
            throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
          }

          await TopicObjective_UpdateRecordAsync(objTopicObjectiveEN).then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == false) {
              const strInfo = `操作不成功!`;
              alert(strInfo);
              console.log('操作不成功');
            }
          });

          //显示信息框
          alert(strInfo);
          HideDialogEight();
          RefreshWindow();
        } else {
          const strInfo = `添加记录不成功!`;

          //显示信息框
          alert(strInfo);
        }
      }

      return bolIsExist; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
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
    if (divName == null) return;
    const strPaperId = GetHidPaperId(divName);
    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'hidPaperLogTypeId'); //流程日志参数
    ////通过区分 是小组讨论还是同伴建议
    //strIdCurrEduclsstrPaperLogTypeId = GetInputValueInDivObj(divName, 'hidCommentTypeId');
    pobjgs_OriginalPaperLogEN.SetPaperId(strPaperId);
    pobjgs_OriginalPaperLogEN.SetLogTypeId(strPaperLogTypeId);
    pobjgs_OriginalPaperLogEN.SetLogDescription('添加子观点');
    //$('#PaperLogTypeId').val("02");
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
  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjgs_PTopicObjectiveRelaEN">数据传输的目的类对象</param>
*/
  public PutDataTogs_PTopicObjectiveRelaClass(
    pobjgs_PTopicObjectiveRelaEN: clsgs_PTopicObjectiveRelaEN,
  ) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    const strPaperId = GetHidPaperId(divName);
    const strObjectiveId = GetInputValueInDivObj(divName, 'hidObjectiveId');
    const strUserId = userStore.getUserId;

    pobjgs_PTopicObjectiveRelaEN.SetPaperId(strPaperId); // 主题编号
    pobjgs_PTopicObjectiveRelaEN.SetSectionId(GetSelectValueInDivObj(divName, 'ddlSectionId3')); // 论文章节id
    pobjgs_PTopicObjectiveRelaEN.SetTopicObjectiveId(strObjectiveId); // 客观Id
    pobjgs_PTopicObjectiveRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjgs_PTopicObjectiveRelaEN.SetUpdUser(strUserId); // 修改人
    pobjgs_PTopicObjectiveRelaEN.SetMemo(this.memo); // 备注
  }

  public async SortByObjectiveFact(strSortByFld: string) {
    if (TopicObjectiveCRUD.sortvTopicObjectiveBy.indexOf(strSortByFld) >= 0) {
      if (TopicObjectiveCRUD.sortvTopicObjectiveBy.indexOf('Asc') >= 0) {
        TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Desc`;
      } else {
        TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Asc`;
      }
    } else {
      TopicObjectiveCRUD.sortvTopicObjectiveBy = `${strSortByFld} Asc`;
    }
    await this.BindGv_vTopicObjective();
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
   * 结论
   */
  public set conclusion(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtconclusion', value);
  }
  /*
   * 结论
   */
  public get conclusion(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'txtconclusion');
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
  public set hidSortvTopicObjectiveBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvTopicObjectiveBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvTopicObjectiveBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvTopicObjectiveBy');
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
   * 客观内容
   */
  public set objectiveContent(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtObjectiveContent', value);
  }
  /*
   * 客观内容
   */
  public get objectiveContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtObjectiveContent');
  }
  /*
   * 客观名称
   */
  public set objectiveName(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtObjectiveName', value);
  }
  /*
   * 客观名称
   */
  public get objectiveName(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtObjectiveName');
  }
  /*
   * 客观名称
   */
  public get objectiveName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtObjectiveName_q');
  }
  /*
   * 客观类型
   */
  public set objectiveType(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtObjectiveType', value);
  }
  /*
   * 客观类型
   */
  public get objectiveType(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtObjectiveType');
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
   * 来源Id
   */
  public set sourceId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtSourceId', value);
  }
  /*
   * 来源Id
   */
  public get sourceId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtSourceId');
  }
  /*
   * 客观Id
   */
  public set topicObjectiveId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtTopicObjectiveId', value);
  }
  /*
   * 客观Id
   */
  public get topicObjectiveId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtTopicObjectiveId');
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
   * 修改用户Id
   */
  public set updUser(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtUpdUser', value);
  }
  /*
   * 修改用户Id
   */
  public get updUser(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUpdUser');
  }
}
