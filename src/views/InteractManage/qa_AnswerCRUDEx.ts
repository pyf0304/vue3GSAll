import { qa_Answer_EditEx } from './qa_Answer_EditEx';
import { qa_AnswerCRUD } from '@/viewsBase/InteractManage/qa_AnswerCRUD';
import { clsvqa_AnswerEN } from '@/ts/L0Entity/InteractManage/clsvqa_AnswerEN';
import {
  vqa_Answer_GetObjByAnswerIdAsync,
  vqa_Answer_GetObjLstByPagerAsync,
  vqa_Answer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/InteractManage/clsvqa_AnswerWApi';
import { BindTab_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { userStore } from '@/store/modulesShare/user';
declare function ShowDialog(strOpType: string): void;

declare function xadminopen(str1: string, str2: string): void;

// import $ from 'jquery';

/* qa_AnswerCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class qa_AnswerCRUDEx extends qa_AnswerCRUD implements IShowList {
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvqa_AnswerBy: string = "answerId";
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
    this.BindGv_vqa_Answer(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vqa_Answer':
        alert('该类没有绑定该函数：[this.BindGv_vqa_Answer_Cache]！');
        //this.BindGv_vqa_AnswerCache();;
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
    let objPage: qa_AnswerCRUDEx;
    if (qa_AnswerCRUD.objPageCRUD == null) {
      qa_AnswerCRUD.objPageCRUD = new qa_AnswerCRUDEx(divLayout);
      objPage = <qa_AnswerCRUDEx>qa_AnswerCRUD.objPageCRUD;
    } else {
      objPage = <qa_AnswerCRUDEx>qa_AnswerCRUD.objPageCRUD;
    }
    const objPageEdit: qa_Answer_EditEx = new qa_Answer_EditEx('qa_Answer_EditEx', objPage);
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

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    qa_AnswerCRUD.TopicIdCache = clsPrivateSessionStorage.topicIdInTree;
    // 在此处放置用户代码以初始化页面
    try {
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();
      this.SetEventFunc();
      qa_AnswerCRUD.sortvqa_AnswerBy = 'answerContent Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vqa_Answer(this.thisDivList);
    } catch (e: any) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async Combinevqa_AnswerCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.QuestionsId_q != "") {
      //    strWhereCond += ` And ${clsvqa_AnswerEN.con_QuestionsId} like '%${this.QuestionsId_q}%'`;
      //}
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsvqa_AnswerEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }
      if (this.questionsContent != '') {
        strWhereCond += ` And ${clsvqa_AnswerEN.con_QuestionsContent} like '%${this.questionsContent}%'`;
      }
      if (this.userName_q != '') {
        strWhereCond += ` And ${clsvqa_AnswerEN.con_QuestUserName} like '%${this.userName_q}%'`;
      }
      if (this.updDate_q != '') {
        strWhereCond += ` And ${clsvqa_AnswerEN.con_UpdDate} like '%${this.updDate_q}%'`;
      }

      strWhereCond += ` and updUser='${userStore.getUserId}'`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combineqa_AnswerCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   */
  public async BindGv_vqa_Answer(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.Combinevqa_AnswerCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvqa_AnswerObjLst: Array<clsvqa_AnswerEN> = [];
    try {
      this.recCount = await vqa_Answer_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: qa_AnswerCRUD.sortvqa_AnswerBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      await vqa_Answer_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
        arrvqa_AnswerObjLst = <Array<clsvqa_AnswerEN>>jsonData;
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    if (arrvqa_AnswerObjLst.length == 0) {
      const strMsg = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_vqa_Answer(divList, arrvqa_AnswerObjLst);
      console.log('完成BindGv_vqa_Answer!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 显示vqa_Answer对象的所有属性值
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
    <param name = "divContainer">显示容器</param>
    <param name = "arrqa_AnswerObjLst">需要绑定的对象列表</param>
  */
  public async BindTab_vqa_Answer(
    divContainer: HTMLDivElement,
    arrvqa_AnswerObjLst: Array<clsvqa_AnswerEN>,
  ) {
    const strThisFuncName = this.BindTab_vqa_Answer.name;
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
        fldName: 'questionsContent',
        colHeader: '问题',
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
        fldName: 'QuestUserName',
        colHeader: '提问人',
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
        fldName: 'answerContent',
        colHeader: '回答',
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
        colHeader: '回答日期',
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
        colHeader: '删除',
        text: '删除',
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
          btn1.setAttribute('onclick', `btnDelRecordInTab_Click('${strKeyId}');`);
          return btn1;
        },
      },

      {
        fldName: '',
        colHeader: '进入答疑',
        text: '问题',
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
          btn1.setAttribute('onclick', `btnAnswer_Click('${strKeyId}');`);
          return btn1;
        },
      },
    ];
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvqa_AnswerObjLst, arrDataColumn, 'answerId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  public async btnAnswer_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      vqa_Answer_GetObjByAnswerIdAsync(strKeyId).then((jsonData) => {
        const objvqa_AnswerEN: clsvqa_AnswerEN = <clsvqa_AnswerEN>jsonData;
        if (objvqa_AnswerEN != null) {
          const strPaperId = objvqa_AnswerEN.paperId;
          const strQuestionsId = objvqa_AnswerEN.questionsId;
          //strIdCurrEducls = objvqa_AnswerEN.idCurrEduCls;
          const strHref = `../GradEduEx/PaperSubViewpoint_pdf?Type=02&paperId=${strPaperId}&questionsId=${strQuestionsId}&questionsTypeId=01&idCurrEduCls=`;

          xadminopen('Pdf论文答疑', strHref);
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /*
   * 论文标题
   */
  public get paperTitle_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPaperTitle_q');
  }

  /*
   * 论文标题
   */
  public get questionsContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtQuestionsContent_q');
  }

  /*
   * 用户名
   */
  public get userName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUserName_q');
  }

  /*
   * 修改日期
   */
  public get updDate_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUpdDate_q');
  }
  /*
   * 类型Id
   */
  public get typeId(): string {
    return qa_AnswerCRUDEx.GetPropValue('typeId');
  }
}
