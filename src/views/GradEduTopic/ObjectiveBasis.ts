import $ from 'jquery';
import { TopicObjectiveCRUD } from '@/viewsBase/GradEduTopic/TopicObjectiveCRUD';
import { clsTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsTopicObjectiveEN';

import { clsvTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsvTopicObjectiveEN';
import {
  TopicObjective_AddNewRecordAsync,
  TopicObjective_AddNewRecordWithMaxIdAsync,
  TopicObjective_DelRecordAsync,
  TopicObjective_DelTopicObjectivesAsync,
  TopicObjective_GetMaxStrIdAsync,
  TopicObjective_GetObjByTopicObjectiveIdAsync,
  TopicObjective_IsExistAsync,
  TopicObjective_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsTopicObjectiveWApi';
import {
  vTopicObjective_GetObjLstAsync,
  vTopicObjective_GetObjLstByPagerAsync,
  vTopicObjective_GetObjLstByPagerCache,
  vTopicObjective_GetRecCountByCondAsync,
  vTopicObjective_GetRecCountByCondCache,
} from '@/ts/L3ForWApi/GradEduTopic/clsvTopicObjectiveWApi';
import {
  arrSelectedKeys,
  BindTab_V,
  GetCheckedKeyIds,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { userStore } from '@/store/modulesShare/user';

/*
 * 宣布一个已经在存在的函数HideDialog，用于隐藏对象框，
 */
declare function HideDialog(): void;
/*
 * 宣布一个已经在其他地方定义存在的变量strUrl_Session_SetString，
 * 用于定义处理Session-设置String函数的地址
 */
declare let strUrl_Session_SetString: string;
declare let strUrl_Session_GetString: string;

/* WApiTopicObjective_QUDI_TS 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class ObjectiveBasis extends TopicObjectiveCRUD {
  public mstrListDiv = 'divDataLst';
  //public objPager: clsPager = new clsPager();
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
  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
   */
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    this.btnOKUpd = '确认添加';
    this.btnCancel = '取消添加';
    this.Clear();
    //wucTopicObjectiveB1.topicObjectiveId = clsTopicObjectiveBL.GetMaxStrId_S();
  }

  /* 添加新记录，保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSave() {
    this.DivName = 'divAddNewRecordSave';
    const objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
    this.PutDataToTopicObjectiveClass(objTopicObjectiveEN);
    try {
      const responseText = await TopicObjective_IsExistAsync(objTopicObjectiveEN.topicObjectiveId);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `添加记录时，关键字：${objTopicObjectiveEN.topicObjectiveId}已经存在！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }
      const responseText2 = await TopicObjective_AddNewRecordAsync(objTopicObjectiveEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

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

  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
   */
  public AddNewRecordWithMaxId() {
    this.SetKeyReadOnly(false);
    this.btnOKUpd = '确认添加';
    this.btnCancel = '取消添加';
    this.Clear();
    //wucTopicObjectiveB1.topicObjectiveId = clsTopicObjectiveBL.GetMaxStrId_S();
  }

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   */
  public async AddNewRecordWithMaxIdSave() {
    const objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
    this.PutDataToTopicObjectiveClass(objTopicObjectiveEN);
    try {
      const responseText2 = await TopicObjective_AddNewRecordWithMaxIdAsync(objTopicObjectiveEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

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

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   */
  public async BindGv_vTopicObjective(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombinevTopicObjectiveCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvTopicObjectiveObjLst: Array<clsvTopicObjectiveEN> = [];
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
      await vTopicObjective_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
        arrvTopicObjectiveObjLst = <Array<clsvTopicObjectiveEN>>jsonData;
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    if (arrvTopicObjectiveObjLst.length == 0) {
      const strMsg = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_vTopicObjective(divList, arrvTopicObjectiveObjLst);
      console.log('完成BindGv_vTopicObjective!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv_Cache)
   */
  public async BindGv_vTopicObjectiveCache(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objvTopicObjective_Cond = await this.CombinevTopicObjectiveConditionObj();
    const strWhereCond = JSON.stringify(objvTopicObjective_Cond);
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvTopicObjectiveObjLst: Array<clsvTopicObjectiveEN> = [];
    try {
      this.recCount = await vTopicObjective_GetRecCountByCondCache(
        objvTopicObjective_Cond,
        clsPubLocalStorage.idCurrEduCls,
      );
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
      arrvTopicObjectiveObjLst = await vTopicObjective_GetObjLstByPagerCache(
        objPagerPara,
        clsPubLocalStorage.idCurrEduCls,
      );
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    if (arrvTopicObjectiveObjLst.length == 0) {
      const strMsg = `在BindGv_Cache过程中，根据条件对象获取的对象列表数为0！(Key=TopicObjective)`;
      alert(strMsg);
      return;
    }
    try {
      this.BindTab_vTopicObjective(divList, arrvTopicObjectiveObjLst);
      console.log('完成BindGv_vTopicObjective!');
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
        fldName: 'objectiveType',
        colHeader: '客观类型',
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
      {
        fldName: 'objectiveTypeName',
        colHeader: 'objectiveTypeName',
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
        colHeader: '修改',
        text: '修改',
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
          btn1.setAttribute('onclick', `btnUpdateRecordInTab_Click('${strKeyId}');`);
          return btn1;
        },
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
    ];

    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvTopicObjectiveObjLst, arrDataColumn, 'topicObjectiveId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   */
  public async btnAddNewRecord_Click() {
    this.opType = 'Add';
    try {
      await this.AddNewRecord();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
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
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_vTopicObjective(this.thisDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
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
      await this.DelRecord(strKeyId);
      await this.BindGv_vTopicObjective(this.thisDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
    在数据表里详细信息记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
   */
  public async btnDetailRecordInTab_Click(strKeyId: string) {
    this.opType = 'Detail';
    try {
      if (strKeyId == '') {
        alert('请选择需要详细信息的记录！');
        return '';
      }
      this.DetailRecord(strKeyId);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `详细信息记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnExportExcel_Click)
   */
  public async btnExportExcel_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    const strWhereCond = ' 1=1 ';
    try {
      await vTopicObjective_GetObjLstAsync(strWhereCond).then((jsonData) => {
        const arrvTopicObjectiveObjLst: Array<clsvTopicObjectiveEN> = <Array<clsvTopicObjectiveEN>>(
          jsonData
        );
        this.BindTab_vTopicObjective(this.thisDivList, arrvTopicObjectiveObjLst);
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `导出Excel不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnOKUpd_Click() {
    const strCommandText: string = this.btnOKUpd;
    try {
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
              const returnBool2: string = <string>jsonData;
              if (IsNullOrEmpty(returnBool2) == false) {
                HideDialog();
                this.BindGv_vTopicObjective(this.thisDivList);
              }
            });
          } else {
            await this.AddNewRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                HideDialog();
                this.BindGv_vTopicObjective(this.thisDivList);
              }
            });
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          await this.UpdateRecordSave().then((jsonData) => {
            const returnBool: boolean = jsonData;
            let strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
            strInfo += '(In WApiTopicObjective_QUDI_TS.btnOKUpd_Click)';

            //显示信息框
            console.log(strInfo);
            alert(strInfo);
            if (returnBool == true) {
              HideDialog();
              this.BindGv_vTopicObjective(this.thisDivList);
            }
          });
          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

          break;
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   */
  public async btnQuery_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    const strWhereCond = await this.CombinevTopicObjectiveCondition();
    try {
      this.recCount = await vTopicObjective_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: 1,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: TopicObjectiveCRUD.sortvTopicObjectiveBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      await vTopicObjective_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
        const arrvTopicObjectiveObjLst: Array<clsvTopicObjectiveEN> = <Array<clsvTopicObjectiveEN>>(
          jsonData
        );
        this.BindTab_vTopicObjective(this.thisDivList, arrvTopicObjectiveObjLst);
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `查询不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 
    在数据表里选择记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
   */
  public async btnSelectRecordInTab_Click1(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      this.SelectRecord(strKeyId);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `选择记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
   */
  public btnUpdateRecord_Click(strKeyId: string) {
    this.opType = 'Update';

    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }
    this.UpdateRecord(strKeyId);
  }

  /* 在数据表里修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecordInTab_Click)
   */
  public btnUpdateRecordInTab_Click(strKeyId: string) {
    this.opType = 'Update';
    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }
    this.UpdateRecord(strKeyId);
  }

  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {}

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevTopicObjectiveCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.objectiveName_q != '') {
        strWhereCond += ` And ${clsvTopicObjectiveEN.con_ObjectiveName} like '%${this.objectiveName_q}%'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineTopicObjectiveCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevTopicObjectiveConditionObj(): Promise<clsvTopicObjectiveEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const objvTopicObjective_Cond: clsvTopicObjectiveEN = new clsvTopicObjectiveEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.objectiveName_q != '') {
        objvTopicObjective_Cond.SetCondFldValue(
          clsvTopicObjectiveEN.con_ObjectiveName,
          this.objectiveName_q,
          'like',
        );
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineTopicObjectiveConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objvTopicObjective_Cond;
  }

  /* 根据关键字列表删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   */
  public async DelMultiRecord(arrTopicObjectiveId: Array<string>) {
    try {
      const responseText = await TopicObjective_DelTopicObjectivesAsync(arrTopicObjectiveId);
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
      console.log('完成DelMultiRecord!');
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
  public async DelRecord(strTopicObjectiveId: string) {
    try {
      const responseText = await TopicObjective_DelRecordAsync(strTopicObjectiveId);
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

  /*
    演示Session 操作
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Demo_Session)
    */
  public async Demo_Session() {
    try {
      //设置Session
      const strUserId = 'TestUserId';
      await this.SetSessionAsync('userId', strUserId);
      //获取Session
      const strUserId_Value1 = await this.GetSessionAsync('userId');
      console.log(`strUserId_Value1:${strUserId_Value1}`);
      //获取Session方法2：直接读取页面中的hidUserId
      const strUserId_Value2 = this.hidUserId;
      console.log(`strUserId_Value2:${strUserId_Value2}`);
    } catch (e: any) {
      const strMsg = `演示Session不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 
    根据关键字详细信息记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord)
     <param name = "sender">参数列表</param>
   */
  public async DetailRecord(strTopicObjectiveId: string) {
    this.btnOKUpd = '';
    this.btnCancel = '关闭';
    try {
      const responseText = await TopicObjective_GetObjByTopicObjectiveIdAsync(strTopicObjectiveId);
      const objTopicObjectiveEN: clsTopicObjectiveEN = <clsTopicObjectiveEN>responseText;
      this.GetDataFromTopicObjectiveClass(objTopicObjectiveEN);
      console.log('完成DetailRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:把类对象的属性内容显示到界面上
    注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
     如果在设置数据库时,就应该一级字段在前,二级字段在后
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
     <param name = "pobjTopicObjectiveEN">表实体类对象</param>
   */
  public GetDataFromTopicObjectiveClass(pobjTopicObjectiveEN: clsTopicObjectiveEN) {
    this.topicObjectiveId = pobjTopicObjectiveEN.topicObjectiveId; // 客观Id
    this.objectiveName = pobjTopicObjectiveEN.objectiveName; // 客观名称
    this.objectiveContent = pobjTopicObjectiveEN.objectiveContent; // 客观内容
    this.objectiveType = pobjTopicObjectiveEN.objectiveType; // 客观类型
    this.sourceId = pobjTopicObjectiveEN.sourceId; // 来源Id
    this.conclusion = pobjTopicObjectiveEN.conclusion; // 结论
    this.isSubmit = pobjTopicObjectiveEN.isSubmit; // 是否提交
    this.updDate = pobjTopicObjectiveEN.updDate; // 修改日期
    this.updUser = pobjTopicObjectiveEN.updUser; // 修改用户Id
    this.memo = pobjTopicObjectiveEN.memo; // 备注
  }

  /* 函数功能:从界面列表中获取第一个关键字的值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
     <param name = "pobjTopicObjectiveEN">表实体类对象</param>
    <returns>列表的第一个关键字值</returns>
   */
  public GetFirstKey(): string {
    if (arrSelectedKeys.length == 1) {
      return arrSelectedKeys[0];
    } else {
      alert(`请选择一个关键字！目前选择了:${arrSelectedKeys.length}个关键字。`);
      return '';
    }
  }

  /* 获取当前表关键字值的最大值,再加1,避免重复
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetMaxStrId)
   */
  public async GetMaxStrId(strKeyCtrlName: string) {
    this.DivName = 'divGetMaxStrId';
    try {
      const responseText = await TopicObjective_GetMaxStrIdAsync();
      const returnString: string = responseText.toString();
      if (returnString == '') {
        const strInfo = `获取表TopicObjective的最大关键字为空，不成功，请检查!`;

        //显示信息框
        alert(strInfo);
        $(strKeyCtrlName).val(returnString);
      } else {
        const strInfo = `获取表TopicObjective的最大关键字为：${returnString}!`;

        //显示信息框
        alert(strInfo);
        $(strKeyCtrlName).val(returnString);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
    获取Session 关键字的值
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetSessionAsync)
    <param name = "Key">关键字</param>
     <return>值</return>
    */
  public GetSessionAsync(Key: string): Promise<string> {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl_Session_GetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
        },
        success(data) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(`strKey, strValue=${strKey}${strValue}`);
          resolve(data);
        },
        error(result) {
          console.log(result);
          console.log(JSON.stringify(result));
          if (result.statusText == 'error') {
            const strInfo = `网络错误！访问网络不成功！`;
            reject(strInfo);
          } else {
            reject(result.statusText);
          }
        },
      });
    });
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
    this.BindGv_vTopicObjective(this.thisDivList);
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   */
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      //建立缓存

      await vTopicObjective_GetObjLstAsync('1=1');

      TopicObjectiveCRUD.sortvTopicObjectiveBy = 'paperTitle Asc';
      const strWhereCond = await this.CombinevTopicObjectiveCondition();
      await vTopicObjective_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {
        this.recCount = jsonData;
      });
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vTopicObjective(this.thisDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad_Cache)
   */
  public async PageLoadCache() {
    // 在此处放置用户代码以初始化页面
    try {
      await vTopicObjective_GetObjLstAsync('1=1');

      TopicObjectiveCRUD.sortvTopicObjectiveBy = 'paperTitle Asc';
      const objvTopicObjective_Cond = await this.CombinevTopicObjectiveConditionObj();
      this.recCount = await vTopicObjective_GetRecCountByCondCache(
        objvTopicObjective_Cond,
        clsPubLocalStorage.idCurrEduCls,
      );
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vTopicObjectiveCache(this.thisDivList);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjTopicObjectiveEN">数据传输的目的类对象</param>
   */
  public PutDataToTopicObjectiveClass(pobjTopicObjectiveEN: clsTopicObjectiveEN) {
    pobjTopicObjectiveEN.SetTopicObjectiveId(this.topicObjectiveId); // 客观Id
    pobjTopicObjectiveEN.SetObjectiveName(this.objectiveName); // 客观名称
    pobjTopicObjectiveEN.SetObjectiveContent(this.objectiveContent); // 客观内容
    pobjTopicObjectiveEN.SetObjectiveType(this.objectiveType); // 客观类型
    pobjTopicObjectiveEN.SetSourceId(this.sourceId); // 来源Id
    pobjTopicObjectiveEN.SetConclusion(this.conclusion); // 结论
    pobjTopicObjectiveEN.SetIsSubmit(this.isSubmit); // 是否提交
    pobjTopicObjectiveEN.SetUpdDate(this.updDate); // 修改日期
    pobjTopicObjectiveEN.SetUpdUser(this.updUser); // 修改用户Id
    pobjTopicObjectiveEN.SetMemo(this.memo); // 备注
  }

  /* 
    根据关键字选择相应的记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
     <param name = "sender">参数列表</param>
   */
  public async SelectRecord(strTopicObjectiveId: string) {
    try {
      const objTopicObjectiveEN = await TopicObjective_GetObjByTopicObjectiveIdAsync(
        strTopicObjectiveId,
      );

      console.log('完成SelectRecord!', objTopicObjectiveEN);
      Redirect('/Index/Main_vTopicObjective');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 在用户自定义控件中，设置关键字的值，是否只读
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetKeyReadOnly)
  /// </summary>
  /// <param name = "bolReadonly">是否只读</param>
  public SetKeyReadOnly(bolReadonly: boolean) {
    $('#txtTopicObjectiveId').attr('ReadOnly', bolReadonly.toString());
  }

  /*
    设置Session
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetSessionAsync)
    <param name = "Key">关键字</param>
    <param name = "Value">值</param>
    */
  public SetSessionAsync(Key: string, Value: string): Promise<void> {
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: strUrl_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(`strKey, strValue=${strKey}${strValue}`);
        },
      });
    });
  }

  /* 函数功能:把以该关键字的记录内容显示在界面上,
          在这里是把值传到表控件中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowData)
     <param name = "strTopicObjectiveId">表记录的关键字,显示该表关键字的内容</param>
   */
  public async ShowData(strTopicObjectiveId: string) {
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
    try {
      const responseText = await TopicObjective_IsExistAsync(strTopicObjectiveId);
      const returnBool: boolean = responseText;
      if (returnBool == false) {
        const strInfo = `关键字:[${strTopicObjectiveId}] 的记录不存在!`;
        //$('#lblResult1').val(strInfo);
        //显示信息框
        alert(strInfo);
      }
    } catch (e: any) {
      const strMsg = `检查相应关键字的记录存在不成功, ${e}.`;
      alert(strMsg);
    }
    try {
      const responseText = await TopicObjective_GetObjByTopicObjectiveIdAsync(strTopicObjectiveId);
      objTopicObjectiveEN = <clsTopicObjectiveEN>responseText;
    } catch (e: any) {
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
    //3、用提供的关键字初始化一个类对象；
    this.GetDataFromTopicObjectiveClass(objTopicObjectiveEN);
  }

  /* 显示{0}对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
     <param name = "divContainer">显示容器</param>
     <param name = "objTopicObjective">需要显示的对象</param>
   */
  public ShowTopicObjectiveObj(
    divContainer: HTMLDivElement,
    objTopicObjective: clsTopicObjectiveEN,
  ) {
    const strThisFuncName = this.ShowTopicObjectiveObj.name;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const sstrKeys = GetObjKeys(objTopicObjective);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objTopicObjective.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = `${strKey}:${strValue}`;
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /* 函数功能:从界面列表中根据某一个字段排序
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
     <param name = "strSortByFld">排序的字段</param>
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
      TopicObjectiveCRUD.ascOrDesc4SortFun,
      TopicObjectiveCRUD.sortvTopicObjectiveBy,
      strSortExpress,
    );
    TopicObjectiveCRUD.sortvTopicObjectiveBy = sortBy;
    TopicObjectiveCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    TopicObjectiveCRUD.sortFunStatic = sortFun;
    await this.BindGv_vTopicObjective(this.thisDivList);
  }
  /* 根据关键字获取相应的记录的对象
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async UpdateRecord(strTopicObjectiveId: string) {
    this.btnOKUpd = '确认修改';
    this.btnCancel = '取消修改';
    this.keyId = strTopicObjectiveId;
    try {
      const responseText = await TopicObjective_GetObjByTopicObjectiveIdAsync(strTopicObjectiveId);
      const objTopicObjectiveEN: clsTopicObjectiveEN = <clsTopicObjectiveEN>responseText;
      this.GetDataFromTopicObjectiveClass(objTopicObjectiveEN);
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 修改记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   */
  public async UpdateRecordSave() {
    const strThisFuncName = this.UpdateRecordSave.name;

    const objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
    objTopicObjectiveEN.SetTopicObjectiveId(this.keyId);
    this.PutDataToTopicObjectiveClass(objTopicObjectiveEN);
    objTopicObjectiveEN.sfUpdFldSetStr = objTopicObjectiveEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objTopicObjectiveEN.topicObjectiveId == '' ||
      objTopicObjectiveEN.topicObjectiveId == undefined
    ) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await TopicObjective_UpdateRecordAsync(objTopicObjectiveEN);
      const returnBool = !!responseText;

      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
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
