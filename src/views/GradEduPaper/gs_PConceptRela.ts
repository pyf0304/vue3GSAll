import $ from 'jquery';
import { Public_Concept } from '../GradEduPublicPage/Public_Concept';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { ConceptCRUD } from '@/viewsBase/GradEduTopic/ConceptCRUD';
import { clsgs_OriginalPaperLogEN } from '@/ts/L0Entity/GradEduPaper/clsgs_OriginalPaperLogEN';
import { clsgs_PConcepRelaEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PConcepRelaEN';
import { clsConceptEN } from '@/ts/L0Entity/GradEduTopic/clsConceptEN';
import { clsvConceptEN } from '@/ts/L0Entity/GradEduTopic/clsvConceptEN';
import {
  gs_OriginalPaperLog_AddNewRecordAsync,
  gs_OriginalPaperLog_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_OriginalPaperLogWApi';
import {
  gs_PConcepRela_AddNewRecordAsync,
  gs_PConcepRela_GetRecCountByCondAsync,
  gs_PConcepRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PConcepRelaWApi';
import { Concept_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsConceptWApi';
import {
  vConcept_GetObjLstByPagerAsync,
  vConcept_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvConceptWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { BindTabV2Where, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
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

declare function RefreshWindow(): void;
declare function HideDialogSeven(): void;
declare let window: any;
/* WApiConceptCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PConceptRela extends ConceptCRUD {
  //论文列表
  public mstrListDivPaper = 'divConceptDataLst';

  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortConceptBy: string = "conceptId";
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
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad_Cache)
*/
  public async PageLoadCache() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //const arrConcept_Cache = await vConcept_GetObjLstAsync("1=1");
        //1、为下拉框设置数据源,绑定列表数据

        //1、为下拉框设置数据源,绑定列表数据
        ConceptCRUD.sortConceptBy = 'updDate Desc';
        //const objConcept_Cond = await this.CombineConceptConditionObj();
        //this.recCount = await vConcept_GetRecCountByCondCache(objConcept_Cond);
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_ConceptCache();
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombineConceptCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    const strPaperId = GetHidPaperId(divName);
    // const strConceptId = GetInputValueInDivObj(divName, 'hidConceptId');

    const strUserId = userStore.getUserId;

    //获取用户缓存

    const strWhere_User = '1=1';
    const arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);

    const objConcept_Cond: clsConceptEN = new clsConceptEN();
    //只能查询提交的概念数据
    strWhereCond += ` And ${clsConceptEN.con_IsSubmit} = 'true'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      const strPageType = GetInputValueInDivObj(divName, 'hidPageType');
      if (strPageType == 'gs_TDR') {
        if (GetInputValueInDivObj(divName, 'txtViewpointName_q') != '') {
          strWhereCond += ` And ${clsConceptEN.con_ConceptName} like '%${$(
            '#txtViewpointName_q',
          ).val()}%'`;
        }
        if (GetInputValueInDivObj(divName, 'txtViewUpdName_q') != '') {
          const strUserName: string = GetInputValueInDivObj(divName, 'txtViewUpdName_q');
          const objUser = arrUsers.find((x) => x.userName == strUserName);
          if (objUser != null) {
            strWhereCond += ` And \${clsvConceptEN.con_UpdUser} = '${objUser.userId}'`;
          }

          //strWhereCond += ` And ${clsvConceptEN.con_UpdUser} like '%${$("#txtViewUpdName_q").val()}%'`;
        }

        //strWhereCond += ` And conceptId not in (select conceptId from RTConceptRela where paperId = '${strPaperId}' And updUser = '${strUserId}')`;
      } else {
        if (this.conceptName_q != '') {
          strWhereCond += ` And ${clsConceptEN.con_ConceptName} like '%${this.conceptName_q}%'`;
          objConcept_Cond.SetCondFldValue(clsConceptEN.con_ConceptName, this.conceptName_q, 'like');
        }
        const txtConceptUpdName_q = GetInputValueInDivObj(divName, 'txtConceptUpdName_q');
        if (txtConceptUpdName_q != '') {
          const objUser = arrUsers.find((x) => x.userName == txtConceptUpdName_q);
          if (objUser != null) {
            strWhereCond += ` And \${clsvConceptEN.con_UpdUser} = '${objUser.userId}'`;
            objConcept_Cond.SetCondFldValue(clsvConceptEN.con_UpdUser, objUser.userId, '=');
          }

          // strWhereCond += ` And ${clsvConceptEN.con_UserName} like '%${txtConceptUpdName_q}%'`;
          //objConcept_Cond.SetCondFldValue(clsvConceptEN.con_UserName, txtConceptUpdName_q, "like");
        }

        //排除获取已存在的关系数据 根据当前用户；
        strWhereCond += ` And conceptId not in (select conceptId from gs_PConcepRela where paperId = '${strPaperId}' And updUser = '${strUserId}')`;
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
  public async BindGv_ConceptCache() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // const strListDiv: string = this.mstrListDivPaper;
    const strWhereCond = await this.CombineConceptCondition();

    // strWhereCond = JSON.stringify(objConceptEN_Sim);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvConceptObjLst: Array<clsvPaperSubViewpointEN> = [];
    try {
      //this.recCount = Concept_GetRecCountByCond(objConcept_Cond);
      this.recCount = await vConcept_GetRecCountByCondAsync(strWhereCond);
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

      arrvConceptObjLst = await vPaperSubViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }

    try {
      const strHtml = await Public_Concept.BindList_vConcept('02', arrvConceptObjLst);
      //拼接；
      $('#divConceptDataLst').html(strHtml);

      if (arrvConceptObjLst.length > 10) {
        //$("#divPager2").show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }
      //this.BindTab_Concept(strListDiv, arrConceptObjLst);
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

      //{
      //    fldName: "isSubmit",
      //    colHeader: "是否提交",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'updDate',
        colHeader: '编辑日期',
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
          btn1.setAttribute('onclick', `btnOkConceptInTab_Click('${strKeyId}');`);
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
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    BindTabV2Where(divContainer, arrConceptObjLst, arrDataColumn, 'conceptId', 'TopicConcept');
    //BindTab(o, arrConceptObjLst, arrDataColumn, "conceptId");
    if (arrConceptObjLst.length > 10) {
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
    }
  }

  //概念查询按钮
  public async btnConceptQuery_Click() {
    await this.BindGv_ConceptCache();
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
    this.BindGv_ConceptCache();
  }

  //添加观点 展示观点列表数据
  public async btnAddConceptRela_Click() {
    await this.BindGv_ConceptCache();
  }
  //确定选择的观点 并添加到关系表中
  public btnOkConceptInTab_Click(strkeyId: string) {
    //存放Id
    $('#hidConceptId').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSave();
  }

  /* 添加新记录，保存函数
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSave() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.AddNewRecordSave.name;

    const strPaperId = GetHidPaperId(divName);
    const strConceptId = GetInputValueInDivObj(divName, 'hidConceptId');
    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'hidPaperLogTypeId'); //流程日志参数

    const objgs_PConcepRelaEN: clsgs_PConcepRelaEN = new clsgs_PConcepRelaEN();
    this.PutDataTogs_PConcepRelaClass(objgs_PConcepRelaEN);
    try {
      //同一主题 同一概念 只能添加一次；
      const strWhere = ` 1 = 1 And paperId = '${strPaperId}' And conceptId = '${strConceptId}'`;
      //const strWhere = " 1 = 1 And paperId = '" + strPaperId + "' And viewpointId = '" + strViewpointId + "'";
      const bolIsExist = await gs_PConcepRela_IsExistRecordAsync(strWhere);

      if (bolIsExist == true) {
        const strMsg = `同一主题同一个用户不能重复添加同一个观点！`;
        alert(strMsg);
        return bolIsExist; //一定要有一个返回值，否则会出错！
      } else {
        const responseText = await gs_PConcepRela_AddNewRecordAsync(objgs_PConcepRelaEN);
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
          const strWhereCond2 = ` 1 =1 and conceptId=${strConceptId}`;
          const intCitationCount = await gs_PConcepRela_GetRecCountByCondAsync(strWhereCond2);

          const objConceptEN: clsConceptEN = new clsConceptEN();
          objConceptEN.SetConceptId(strConceptId);
          objConceptEN.SetCitationCount(intCitationCount);

          objConceptEN.sfUpdFldSetStr = objConceptEN.updFldString; //设置哪些字段被修改(脏字段)
          if (objConceptEN.conceptId == '' || objConceptEN.conceptId == undefined) {
            throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
          }

          await Concept_UpdateRecordAsync(objConceptEN).then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == false) {
              const strInfo = `操作不成功!`;
              alert(strInfo);
              console.log('操作不成功');
            }
          });

          //显示信息框
          alert(strInfo);
          HideDialogSeven();
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
    const strPaperId = GetHidPaperId(divName);
    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'hidPaperLogTypeId'); //流程日志参数
    ////通过区分 是小组讨论还是同伴建议
    //strIdCurrEduclsstrPaperLogTypeId = GetInputValueInDivObj(divName, 'hidCommentTypeId');
    pobjgs_OriginalPaperLogEN.SetPaperId(strPaperId);
    pobjgs_OriginalPaperLogEN.SetLogTypeId(strPaperLogTypeId);
    pobjgs_OriginalPaperLogEN.SetLogDescription('添加子观点');
    //  $('#PaperLogTypeId').val("03");
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
     <param name = "pobjgs_PConcepRelaEN">数据传输的目的类对象</param>
   */
  public PutDataTogs_PConcepRelaClass(pobjgs_PConcepRelaEN: clsgs_PConcepRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strPaperId = GetHidPaperId(divName);
    const strConceptId = GetInputValueInDivObj(divName, 'hidConceptId');
    const strUserId = userStore.getUserId;

    pobjgs_PConcepRelaEN.SetPaperId(strPaperId); // 主题编号
    pobjgs_PConcepRelaEN.SetSectionId(GetSelectValueInDivObj(divName, 'ddlSectionId2')); // 主题编号
    pobjgs_PConcepRelaEN.SetConceptId(strConceptId); // 概念Id
    pobjgs_PConcepRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjgs_PConcepRelaEN.SetUpdUser(strUserId); // 修改用户Id
    pobjgs_PConcepRelaEN.SetMemo(this.memo); // 备注
  }

  /* 概念
   */
  public async SortByConcept(strSortByFld: string) {
    if (ConceptCRUD.sortConceptBy.indexOf(strSortByFld) >= 0) {
      if (ConceptCRUD.sortConceptBy.indexOf('Asc') >= 0) {
        ConceptCRUD.sortConceptBy = `${strSortByFld} Desc`;
      } else {
        ConceptCRUD.sortConceptBy = `${strSortByFld} Asc`;
      }
    } else {
      ConceptCRUD.sortConceptBy = `${strSortByFld} Asc`;
    }
    this.BindGv_ConceptCache();
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
   * 概念内容
   */
  public set conceptContent(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtConceptContent', value);
  }
  /*
   * 概念内容
   */
  public get conceptContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtConceptContent');
  }
  /*
   * 概念Id
   */
  public set conceptId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtConceptId', value);
  }
  /*
   * 概念Id
   */
  public get conceptId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtConceptId');
  }
  /*
   * 概念名称
   */
  public set conceptName(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtConceptName', value);
  }
  /*
   * 概念名称
   */
  public get conceptName(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtConceptName');
  }
  /*
   * 概念名称
   */
  public get conceptName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtConceptName_q');
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
  public set hidSortConceptBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortConceptBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortConceptBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortConceptBy');
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
   * 是否提交
   */
  public get IsSubmit_q(): boolean {
    return $('#chkIsSubmit_q').prop('checked');
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
}
