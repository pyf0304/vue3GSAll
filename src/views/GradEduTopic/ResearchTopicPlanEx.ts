import $ from 'jquery';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { gs_ResearchPlanCRUD } from '@/viewsBase/GradEduTopic/gs_ResearchPlanCRUD';
import { clsgs_ResearchPlanEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ResearchPlanEN';
import { clsvgs_ResearchPlanEN } from '@/ts/L0Entity/GradEduTopic/clsvgs_ResearchPlanEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  gs_ResearchPlan_AddNewRecordAsync,
  gs_ResearchPlan_AddNewRecordWithMaxIdAsync,
  gs_ResearchPlan_Delgs_ResearchPlansAsync,
  gs_ResearchPlan_DelRecordAsync,
  gs_ResearchPlan_GetMaxStrIdAsync,
  gs_ResearchPlan_GetObjByPlanIdAsync,
  gs_ResearchPlan_IsExistAsync,
  gs_ResearchPlan_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_ResearchPlanWApi';
import {
  vgs_ResearchPlan_GetObjLstByPagerAsync,
  vgs_ResearchPlan_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvgs_ResearchPlanWApi';
import { gs_TopicTaskStatus_BindDdl_StatusIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_TopicTaskStatusWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetA_Empty,
  GetBr_Empty,
  GetButton_Empty,
  GetCheckedKeyIdsInDivObj,
  GetDiv_Empty,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetI_Empty,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetLi_Empty,
  GetSelectValueInDivObj,
  GetSpan_Empty,
  GetUl_Empty,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  arrSelectedKeys,
  GetCheckedKeyIds,
  GetObjKeys,
  Redirect,
} from '@/ts/PubFun/clsCommFunc4Web';
import { GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { vgs_ResearchPlanEx_SortFunByKey } from '@/ts/L3ForWApiEx/GradEduTopic/clsvgs_ResearchPlanExWApi';
import { userStore } from '@/store/modulesShare/user';
import { researchTopicStore } from '@/store/modules/researchTopic';

/*
 * 宣布一个已经在存在的函数HideDialog，用于隐藏对象框，
 */
declare function HideDialog(): void;

/* gs_ResearchPlanCRUD 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class ResearchTopicPlanEx extends gs_ResearchPlanCRUD {
  public static vuebtn_Click: (strCommandName: string, strKeyId: string) => void;
  public mstrListDiv = 'divDataLst';
  public bolIsLoadEditRegion = false; //记录是否导入编辑区的变量
  public bolIsLoadDetailRegion = false; //记录是否导入详细信息区的变量
  public divName4Edit = 'divEdit'; //编辑区的Id
  public divName4Detail = 'divDetail'; //详细信息区的Id
  public divName4Pager_ResearchPlan = 'divPager4ResearchPlan';
  public static objLayOut: HTMLDivElement;
  //public objPager: clsPager = new clsPager();
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  public recCount = 0;

  //研究计划
  public mstrListDivResearchPlan = 'divDataLst4ResearchPlan';

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
      //建立缓存

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      gs_ResearchPlanCRUD.sortvgs_ResearchPlanBy = 'topicName Asc';
      //this.divName4Pager = "divPager4ResearchPlan";
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(objLayOut, this.divName4Pager_ResearchPlan);
        this.bolIsInitShow = true; //
      }
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vgs_ResearchPlan(objLayOut, this.divName4Pager_ResearchPlan);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
 按钮单击,用于调用Js函数中btn_Click
(AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
*/
  public btn_Click(strCommandName: string, strKeyId: string) {
    const objPage: ResearchTopicPlanEx = new ResearchTopicPlanEx(this.divLayout);
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'Query': //查询记录
        //this.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        gs_ResearchPlanCRUD.EditObj.btngs_ResearchPlan_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        gs_ResearchPlanCRUD.EditObj.btngs_ResearchPlan_Edit_Click(strCommandName, strKeyId);

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
        this.btnDelRecord_Click();
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
  /// <summary>
  /// 在当前界面中，导入编辑区域
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
  /// </summary>
  /// <returns></returns>
  public async AddDPV_Edit(divName4Edit: string) {
    const strUrl = './gs_ResearchPlan_Edit/';
    console.log(`divName4Edit:(In AddDPV_Edit)${divName4Edit}`);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'GET',
        dataType: 'html',
        data: {},
        success(data) {
          console.log(`已经成功获取页面:${strUrl}  字节数: ${data.length.toString()}`);
          $(`#${divName4Edit}`).html(data);
          resolve(true);
          //setTimeout(() => { clsEditObj.BindTab(); }, 100);
          //clsEditObj.BindTab();
        },
        error: (e: any) => {
          console.error(e);
          reject(e);
        },
      });
    });
  }

  /// <summary>
  /// 在当前界面中，导入编辑区域
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddDPVer_Detail)
  /// </summary>
  /// <returns></returns>
  public async AddDPVer_Detail(divName4Detail: string) {
    const strUrl = './gs_ResearchPlan_Detail/';
    console.log(`divName4Detail:(In AddDPVer_Detail)${divName4Detail}`);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'GET',
        dataType: 'html',
        data: {},
        success(data) {
          console.log(`已经成功获取页面:${strUrl}  字节数: ${data.length.toString()}`);
          $(`#${divName4Detail}`).html(data);
          resolve(true);
          //setTimeout(() => { clsDetailObj.BindTab(); }, 100);
          //clsDetailObj.BindTab();
        },
        error: (e: any) => {
          console.error(e);
          reject(e);
        },
      });
    });
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad_Cache)
   */
  public async PageLoadCache() {
    // 在此处放置用户代码以初始化页面
    try {
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      gs_ResearchPlanCRUD.sortvgs_ResearchPlanBy = 'topicName Asc';
      //2、显示无条件的表内容在GridView中
      //await this.BindGv_vgs_ResearchPlanCache();;
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   */
  //public async btnQuery_Click() {
  //    strWhereCond = await this.Combinevgs_ResearchPlanCondition();
  //    try {
  //        this.recCount = await vgs_ResearchPlan_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {

  //        });
  //        const objPagerPara: stuPagerPara = {
  //            pageIndex: 1,
  //            pageSize: this.pageSize,
  //            whereCond: strWhereCond,
  //            orderBy: this.hidSortvgs_ResearchPlanBy,
  //            sortFun: (x, y) => {  x = x; y = y; return 0; }
  //        };
  //        const responseObjLst = await vgs_ResearchPlan_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
  //            const arrvgs_ResearchPlanObjLst: Array<clsvgs_ResearchPlanEN> = <Array<clsvgs_ResearchPlanEN>>jsonData;
  //            this.BindTab_vgs_ResearchPlan(this.mstrListDiv, arrvgs_ResearchPlanObjLst);
  //        });
  //    }
  //    catch (e:any) {
  //        console.error('catch(e)=');
  //        console.error(e);
  //        strIdCurrEduclsstrMsg: string = `查询不成功,${e}.`;
  //        alert(strMsg);
  //    }
  //}

  /* 函数功能:为查询区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Js_BindDdl4QueryRegion)
   */
  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    await gs_TopicTaskStatus_BindDdl_StatusIdInDivCache(divName, 'ddlStatusId_q'); //查询区域
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

      const objLayOut = this.getDivName(enumDivType.LayOut_01);
      if (objLayOut == null) return;

      await this.BindGv_vgs_ResearchPlan(objLayOut, this.divName4Pager_ResearchPlan);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
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

  /* 
    根据关键字删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   */
  public async DelRecord(strPlanId: string) {
    try {
      const responseText = await gs_ResearchPlan_DelRecordAsync(strPlanId);
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
    根据关键字选择相应的记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
     <param name = "sender">参数列表</param>
   */
  public async SelectRecord(strPlanId: string) {
    try {
      const objgs_ResearchPlanEN = await gs_ResearchPlan_GetObjByPlanIdAsync(strPlanId);

      console.log('完成SelectRecord!', objgs_ResearchPlanEN);
      Redirect('/Index/Main_vgs_ResearchPlan');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
   */
  public async btnDelRecord_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    try {
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_vgs_ResearchPlan(objLayOut, this.divName4Pager_ResearchPlan);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnExportExcel_Click)
   */
  //public async btnExportExcel_Click() {
  //    strWhereCond = " 1=1 ";
  //    try {
  //        const responseText = await vgs_ResearchPlan_GetObjLstAsync(strWhereCond).then((jsonData) => {
  //            const arrvgs_ResearchPlanObjLst: Array<clsvgs_ResearchPlanEN> = <Array<clsvgs_ResearchPlanEN>>jsonData;
  //            this.BindTab_vgs_ResearchPlan(this.mstrListDiv, arrvgs_ResearchPlanObjLst);
  //        });
  //    }
  //    catch (e:any) {
  //        console.error('catch(e)=');
  //        console.error(e);
  //        strIdCurrEduclsstrMsg: string = `导出Excel不成功,${e}.`;
  //        alert(strMsg);
  //    }
  //}

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnOKUpd_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
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
              const returnBool2: boolean = <boolean>jsonData;
              if (returnBool2 == true) {
                HideDialog();
                this.BindGv_vgs_ResearchPlan(objLayOut, this.divName4Pager_ResearchPlan);
              }
            });
          } else {
            await this.AddNewRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                HideDialog();
                this.BindGv_vgs_ResearchPlan(objLayOut, this.divName4Pager_ResearchPlan);
              }
            });
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          await this.UpdateRecordSave().then((jsonData) => {
            const returnBool: boolean = jsonData;
            let strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
            strInfo += '(In gs_ResearchPlanCRUD.btnOKUpd_Click)';

            //显示信息框
            console.log(strInfo);
            alert(strInfo);
            if (returnBool == true) {
              HideDialog();
              this.BindGv_vgs_ResearchPlan(objLayOut, this.divName4Pager_ResearchPlan);
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

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  //public async Combinevgs_ResearchPlanCondition():Promise<string> {
  //    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //    //例如 1 = 1 && userName = '张三'
  //    strWhereCond: string = " 1 = 1 ";
  //    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  //    try {
  //        if (this.topicName_q != "") {
  //            strWhereCond += ` And ${clsvgs_ResearchPlanEN.con_TopicName} like '%${this.topicName_q}%'`;
  //        }
  //        if (this.StatusId_q != "" && this.StatusId_q != "0") {
  //            strWhereCond += ` And ${clsvgs_ResearchPlanEN.con_StatusId} = '${this.StatusId_q}'`;
  //        }
  //    }
  //    catch (objException) {
  //        strIdCurrEduclsstrMsg: string = `(errid:WiTsCs0002)在组合查询条件(Combinegs_ResearchPlanCondition)时出错!请联系管理员!${objException}`;
  //        throw strMsg;
  //    }
  //    return strWhereCond;
  //}

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
     <returns>条件串(strWhereCond)</returns>
   */
  public async Combinevgs_ResearchPlanConditionObj(): Promise<clsvgs_ResearchPlanEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const objvgs_ResearchPlan_Cond: clsvgs_ResearchPlanEN = new clsvgs_ResearchPlanEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.topicName_q != '') {
        objvgs_ResearchPlan_Cond.SetCondFldValue(
          clsvgs_ResearchPlanEN.con_TopicName,
          this.topicName_q,
          'like',
        );
      }
      if (this.StatusId_q != '' && this.StatusId_q != '0') {
        objvgs_ResearchPlan_Cond.SetCondFldValue(
          clsvgs_ResearchPlanEN.con_StatusId,
          this.StatusId_q,
          '=',
        );
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0008)在组合查询条件对象(Combinegs_ResearchPlanConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objvgs_ResearchPlan_Cond;
  }

  /* 函数功能:从界面列表中根据某一个字段排序
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SortBy)
     <param name = "strSortByFld">排序的字段</param>
   */

  public async SortBy(objAnchorElement: any) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    //console.log("objAnchorElement(In SetAllCkechedKeysV2):", objAnchorElement);
    let strSortExpress = '';
    //event = window.event || event;
    if (typeof objAnchorElement != 'function') {
      const thisEventObj: HTMLInputElement = objAnchorElement;
      strSortExpress = thisEventObj.getAttribute('FldName') as string;
    }
    const { sortFun, ascOrDesc4SortFun, sortBy } = GetSortBy(
      objAnchorElement,
      gs_ResearchPlanCRUD.ascOrDesc4SortFun,
      gs_ResearchPlanCRUD.sortvgs_ResearchPlanBy,
      strSortExpress,
    );
    gs_ResearchPlanCRUD.sortvgs_ResearchPlanBy = sortBy;
    gs_ResearchPlanCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    gs_ResearchPlanCRUD.sortFunStatic = sortFun;
    await this.BindGv_vgs_ResearchPlan(objLayOut, this.divName4Pager_ResearchPlan);
  }
  /// <summary>
  /// 在用户自定义控件中，设置关键字的值，是否只读
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetKeyReadOnly)
  /// </summary>
  /// <param name = "bolReadonly">是否只读</param>
  public SetKeyReadOnly(bolReadonly: boolean) {
    $('#txtPlanId').attr('ReadOnly', bolReadonly.toString());
  }

  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {}

  /* 获取当前表关键字值的最大值,再加1,避免重复
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetMaxStrId)
   */
  public async GetMaxStrId(strKeyCtrlName: string) {
    this.DivName = 'divGetMaxStrId';
    try {
      const responseText = await gs_ResearchPlan_GetMaxStrIdAsync();
      const returnString: string = responseText.toString();
      if (returnString == '') {
        const strInfo = `获取表gs_ResearchPlan的最大关键字为空，不成功，请检查!`;

        //显示信息框
        alert(strInfo);
        $(strKeyCtrlName).val(returnString);
      } else {
        const strInfo = `获取表gs_ResearchPlan的最大关键字为：${returnString}!`;

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

  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
   */
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    this.btnOKUpd = '确认添加';
    this.btnCancel = '取消添加';
    this.Clear();
    //wucgs_ResearchPlanB1.planId = clsgs_ResearchPlanBL.GetMaxStrId_S();
  }

  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
   */
  public AddNewRecordWithMaxId() {
    this.SetKeyReadOnly(false);
    this.btnOKUpd = '确认添加';
    this.btnCancel = '取消添加';
    this.Clear();
    //wucgs_ResearchPlanB1.planId = clsgs_ResearchPlanBL.GetMaxStrId_S();
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjgs_ResearchPlanEN">数据传输的目的类对象</param>
   */
  public async PutDataTogs_ResearchPlanClass(pobjgs_ResearchPlanEN: clsgs_ResearchPlanEN) {
    pobjgs_ResearchPlanEN.SetPlanId(this.planId); // 计划Id
    pobjgs_ResearchPlanEN.SetStatusId(this.statusId); // 状态
    pobjgs_ResearchPlanEN.SetTopicId(this.topicId); // 主题
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(this.topicId);

    pobjgs_ResearchPlanEN.SetIdCurrEduCls(strIdCurrEduCls);
    pobjgs_ResearchPlanEN.SetPlanContent(this.planContent); // 计划内容
    pobjgs_ResearchPlanEN.SetResponsibleUser(this.responsibleUser); // 负责人/小组
    pobjgs_ResearchPlanEN.SetStartDate(this.startDate); // 开始日期
    pobjgs_ResearchPlanEN.SetEndDate(this.endDate); // 截止日期
    pobjgs_ResearchPlanEN.SetIsSubmit(this.isSubmit); // 是否提交
    pobjgs_ResearchPlanEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjgs_ResearchPlanEN.SetUpdDate(this.updDate); // 修改日期
    pobjgs_ResearchPlanEN.SetMemo(this.memo); // 备注
  }

  /* 添加新记录，保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSave() {
    this.DivName = 'divAddNewRecordSave';
    const objgs_ResearchPlanEN: clsgs_ResearchPlanEN = new clsgs_ResearchPlanEN();
    this.PutDataTogs_ResearchPlanClass(objgs_ResearchPlanEN);
    try {
      const responseText = await gs_ResearchPlan_IsExistAsync(objgs_ResearchPlanEN.planId);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `添加记录时，关键字：${objgs_ResearchPlanEN.planId}已经存在！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }
      const responseText2 = await gs_ResearchPlan_AddNewRecordAsync(objgs_ResearchPlanEN);
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
      return false; //一定要有一个返回值，否则会出错！
    }
  }

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   */
  public async AddNewRecordWithMaxIdSave() {
    const objgs_ResearchPlanEN: clsgs_ResearchPlanEN = new clsgs_ResearchPlanEN();
    this.PutDataTogs_ResearchPlanClass(objgs_ResearchPlanEN);
    try {
      const responseText2 = await gs_ResearchPlan_AddNewRecordWithMaxIdAsync(objgs_ResearchPlanEN);
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

  /* 函数功能:把以该关键字的记录内容显示在界面上,
          在这里是把值传到表控件中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowData)
     <param name = "strPlanId">表记录的关键字,显示该表关键字的内容</param>
   */
  public async ShowData(strPlanId: string) {
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objgs_ResearchPlanEN: clsgs_ResearchPlanEN = new clsgs_ResearchPlanEN();
    try {
      const responseText = await gs_ResearchPlan_IsExistAsync(strPlanId);
      const returnBool: boolean = responseText;
      if (returnBool == false) {
        const strInfo = `关键字:[${strPlanId}] 的记录不存在!`;
        //$('#lblResult1').val(strInfo);
        //显示信息框
        alert(strInfo);
      }
    } catch (e: any) {
      const strMsg = `检查相应关键字的记录存在不成功, ${e}.`;
      alert(strMsg);
    }
    try {
      const responseText = await gs_ResearchPlan_GetObjByPlanIdAsync(strPlanId);
      objgs_ResearchPlanEN = <clsgs_ResearchPlanEN>responseText;
    } catch (e: any) {
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
    //3、用提供的关键字初始化一个类对象；
    this.GetDataFromgs_ResearchPlanClass(objgs_ResearchPlanEN);
  }

  /* 函数功能:把类对象的属性内容显示到界面上
    注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
     如果在设置数据库时,就应该一级字段在前,二级字段在后
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
     <param name = "pobjgs_ResearchPlanEN">表实体类对象</param>
   */
  public GetDataFromgs_ResearchPlanClass(pobjgs_ResearchPlanEN: clsgs_ResearchPlanEN) {
    this.planId = pobjgs_ResearchPlanEN.planId; // 计划Id
    this.statusId = pobjgs_ResearchPlanEN.statusId; // 状态
    this.topicId = pobjgs_ResearchPlanEN.topicId; // 主题
    this.planContent = pobjgs_ResearchPlanEN.planContent; // 计划内容
    this.responsibleUser = pobjgs_ResearchPlanEN.responsibleUser; // 负责人/小组
    this.startDate = pobjgs_ResearchPlanEN.startDate; // 开始日期
    this.endDate = pobjgs_ResearchPlanEN.endDate; // 截止日期
    this.isSubmit = pobjgs_ResearchPlanEN.isSubmit; // 是否提交
    this.updUser = pobjgs_ResearchPlanEN.updUser; // 修改人
    this.updDate = pobjgs_ResearchPlanEN.updDate; // 修改日期
    this.memo = pobjgs_ResearchPlanEN.memo; // 备注
  }

  /* 根据关键字获取相应的记录的对象
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async UpdateRecord(strPlanId: string) {
    this.btnOKUpd = '确认修改';
    this.btnCancel = '取消修改';
    this.keyId = strPlanId;
    try {
      const responseText = await gs_ResearchPlan_GetObjByPlanIdAsync(strPlanId);
      const objgs_ResearchPlanEN: clsgs_ResearchPlanEN = <clsgs_ResearchPlanEN>responseText;
      this.GetDataFromgs_ResearchPlanClass(objgs_ResearchPlanEN);
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

    const objgs_ResearchPlanEN: clsgs_ResearchPlanEN = new clsgs_ResearchPlanEN();
    objgs_ResearchPlanEN.SetPlanId(this.keyId);
    this.PutDataTogs_ResearchPlanClass(objgs_ResearchPlanEN);
    objgs_ResearchPlanEN.sfUpdFldSetStr = objgs_ResearchPlanEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objgs_ResearchPlanEN.planId == '' || objgs_ResearchPlanEN.planId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await gs_ResearchPlan_UpdateRecordAsync(objgs_ResearchPlanEN);
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

  /* 根据关键字列表删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   */
  public async DelMultiRecord(arrPlanId: Array<string>) {
    try {
      const responseText = await gs_ResearchPlan_Delgs_ResearchPlansAsync(arrPlanId);
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

  /* 显示{0}对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
     <param name = "divContainer">显示容器</param>
     <param name = "objgs_ResearchPlan">需要显示的对象</param>
   */
  public Showgs_ResearchPlanObj(
    divContainer: HTMLDivElement,
    objgs_ResearchPlan: clsgs_ResearchPlanEN,
  ) {
    const strThisFuncName = this.Showgs_ResearchPlanObj.name;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const sstrKeys = GetObjKeys(objgs_ResearchPlan);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objgs_ResearchPlan.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = `${strKey}:${strValue}`;
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /* 函数功能:从界面列表中获取第一个关键字的值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
     <param name = "pobjgs_ResearchPlanEN">表实体类对象</param>
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

  /*
   * 设置取消按钮的标题
   */
  public set btnCancel(value: string) {
    $('#btnCancel').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnOKUpd(): string {
    return $('#btnOKUpd').html();
  }
  /*
   * 设置确定按钮的标题
   */
  public set btnOKUpd(value: string) {
    $('#btnOKUpd').html(value);
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
   * 添加、修改用的层名
   */
  public set DivName(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidDivName', value);
  }
  /*
   * 截止日期
   */
  public set endDate(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtEndDate', value);
  }
  /*
   * 截止日期
   */
  public get endDate(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtEndDate');
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  // public set hidSortvgs_ResearchPlanBy(value: string) {
  //     $("#hidSortvgs_ResearchPlanBy").val(value);
  // }
  // /*
  // * 设置排序字段
  //*/
  // public get hidSortvgs_ResearchPlanBy(): string {
  //     return $("#hidSortvgs_ResearchPlanBy").val();
  // }
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
    $('#chkIsSubmit').attr('checked', value.toString());
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
   * 计划内容
   */
  public set planContent(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtPlanContent', value);
  }
  /*
   * 计划内容
   */
  public get planContent(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPlanContent');
  }
  /*
   * 计划Id
   */
  public set planId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtPlanId', value);
  }
  /*
   * 计划Id
   */
  public get planId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtPlanId');
  }
  /*
   * 负责人/小组
   */
  public set responsibleUser(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtResponsibleUser', value);
  }
  /*
   * 负责人/小组
   */
  public get responsibleUser(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtResponsibleUser');
  }
  /*
   * 开始日期
   */
  public set startDate(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtStartDate', value);
  }
  /*
   * 开始日期
   */
  public get startDate(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtStartDate');
  }
  /*
   * 状态Id
   */
  public set statusId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlStatusId', value);
  }
  /*
   * 状态Id
   */
  public get statusId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlStatusId');
  }
  /*
   * 状态Id
   */
  public get StatusId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlStatusId_q');
  }
  /*
   * 主题编号
   */
  public set topicId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlTopicId', value);
  }
  /*
   * 主题编号
   */
  public get topicId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlTopicId');
  }
  /*
   * 栏目主题
   */
  public get topicName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtTopicName_q');
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

  //研究计划
  public async liResearchPlanClick(divName: HTMLDivElement, strDivName4Pager: string) {
    // const objLayOut = this.getDivName(enumDivType.LayOut_01);
    // if (objLayOut == null) return;
    try {
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(divName, strDivName4Pager);
        this.bolIsInitShow = true; //
      }
      ////教师布置任务
      //await this.BindGv_gs_TeacherTask();
      //研究计划
      await this.BindGv_vgs_ResearchPlan(divName, strDivName4Pager);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取客观依据列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:在数据 列表中跳转到某一页
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
    <param name = "intPageIndex">页序号</param>
  */
  public async IndexPage(intPageIndex: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    if (intPageIndex == 0) {
      intPageIndex = this.objPager.pageCount;
    }
    console.log(`跳转到${intPageIndex}页`);
    this.SetCurrPageIndex(intPageIndex);

    const strnum = GetInputValueInDivObj(divName, 'hidTabNum');
    //11代表研究计划 否则就是主题；
    if (strnum == '11') {
      this.BindGv_vgs_ResearchPlan(divName, this.divName4Pager_ResearchPlan);
    }
    //else {
    //    this.BindGv_ResearchTopic();
    //}
  }

  /////////////////////////////////////////////////////////////////////////////研究计划
  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async Combinevgs_ResearchPlanCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond = ` 1=1 And ${clsvgs_ResearchPlanEN.con_TopicId} = '${strTopicId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combinegs_ResearchPlanCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的对象列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
  */
  public async BindGv_vgs_ResearchPlan(divName: HTMLDivElement, strDivName4Pager: string) {
    // const strListDiv: string = this.mstrListDivResearchPlan; //研究计划
    const strWhereCond = await this.Combinevgs_ResearchPlanCondition();
    //intCurrPageIndex = this.getCurrPageIndex(this.divName4Pager_ResearchPlan);//获取当前页
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvgs_ResearchPlanObjLst: Array<clsvgs_ResearchPlanEN> = [];
    let arrvUsersObjLst: Array<clsvUsersSimEN> = [];
    try {
      this.recCount = await vgs_ResearchPlan_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: gs_ResearchPlanCRUD.sortvgs_ResearchPlanBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvgs_ResearchPlanObjLst = await vgs_ResearchPlan_GetObjLstByPagerAsync(objPagerPara);
      arrvgs_ResearchPlanObjLst = arrvgs_ResearchPlanObjLst.sort(
        vgs_ResearchPlanEx_SortFunByKey(clsvgs_ResearchPlanEN.con_UpdDate, 'desc'),
      );
      //获取用户缓存数据；

      const strWhere_User = '1=1';
      arrvUsersObjLst = await vUsersSim_GetObjLstAsync(strWhere_User);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    try {
      this.BindTab_vgs_ResearchPlan_pyf(
        divName,
        strDivName4Pager,
        arrvgs_ResearchPlanObjLst,
        arrvUsersObjLst,
      );
      console.log('完成BindGv_vgs_ResearchPlan!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //页面动态绑定
  public async BindTab_vgs_ResearchPlan_pyf(
    objLayOut: HTMLDivElement,
    strDivName4Pager: string,
    arrvgs_ResearchPlanObjLst: Array<clsvgs_ResearchPlanEN>,
    arrvUsersObjLst: Array<clsvUsersSimEN>,
  ) {
    // let strhtml = '';

    // strhtml += '<div class="info1" id="infoResearchPlan"><div class="title btn-4">';
    const divInfo = GetDiv_Empty('info');
    divInfo.id = 'infoResearchPlan';
    const divRoot = GetDiv_Empty('title btn-4');
    divInfo.appendChild(divRoot);
    // strhtml += '<div style="float:left;"><a href="javascript:void(0)" title="研究计划">研究计划</a></div>';
    const divLeft = GetDiv_Empty('');
    divLeft.style.float = 'left';
    const aTask = GetA_Empty('');
    aTask.href = 'javascript:void(0)';
    aTask.title = '研究计划';
    aTask.innerText = '研究计划';
    divLeft.appendChild(aTask);
    divRoot.appendChild(divLeft);

    // strhtml += '</div><ul class="artlist">';
    const ulArtList = GetUl_Empty('artlist');

    let v = 0; //给内容加个序号
    for (let i = 0; i < arrvgs_ResearchPlanObjLst.length; i++) {
      //得到planId；
      const objvgs_ResearchPlan = arrvgs_ResearchPlanObjLst[i];
      v++;
      // strhtml += `<li><span class="rowtit color4">${v}.[研究状态]：</span><span class="abstract-text">${arrvgs_ResearchPlanObjLst[i].statusName}</span></li>`;
      const li1 = GetLi_Empty('');
      const spnStatusName0 = GetSpan_Empty('rowtit color4');
      spnStatusName0.innerText = `${v}.[研究状态]：`;
      const spnStatusName1 = GetSpan_Empty('abstract-text');
      spnStatusName1.innerText = objvgs_ResearchPlan.statusName;
      li1.appendChild(spnStatusName0);
      li1.appendChild(spnStatusName1);
      ulArtList.appendChild(li1);

      const li2 = GetLi_Empty('');
      const spnPlanTypeId0 = GetSpan_Empty('rowtit color4 ml-3');
      spnPlanTypeId0.innerText = `[计划类型]：`;
      const spnPlanTypeId1 = GetSpan_Empty('abstract-text');
      // spnPlanTypeId1.innerText = objvgs_ResearchPlan.planTypeId;

      //判断计划类型
      if (arrvgs_ResearchPlanObjLst[i].planTypeId == '01') {
        // strhtml +=
        //   '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[计划类型]：</span><span class="abstract-text">个人计划</span></li>';
        spnPlanTypeId1.innerText = '个人计划';
      } else {
        // strhtml +=
        //   '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[计划类型]：</span><span class="abstract-text">小组计划</span></li>';
        spnPlanTypeId1.innerText = '小组计划';
      }
      li2.appendChild(spnPlanTypeId0);
      li2.appendChild(spnPlanTypeId1);
      ulArtList.appendChild(li2);
      // strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[负责人/小组]：</span><span class="abstract-text">${arrvgs_ResearchPlanObjLst[i].responsibleUser}</span></li>`;
      const li3 = GetLi_Empty('');
      const spnResponsibleUser0 = GetSpan_Empty('rowtit color4');
      spnResponsibleUser0.innerText = `[负责人/小组]：`;
      const spnResponsibleUser1 = GetSpan_Empty('abstract-text');
      spnResponsibleUser1.innerText = objvgs_ResearchPlan.responsibleUser;
      li3.appendChild(spnResponsibleUser0);
      li3.appendChild(spnResponsibleUser1);
      ulArtList.appendChild(li3);
      // strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[计划内容]：</span><span class="abstract-text">${arrvgs_ResearchPlanObjLst[i].planContent}</span></li>`;
      const li4 = GetLi_Empty('');
      const spnPlanContentr0 = GetSpan_Empty('rowtit color4');
      spnPlanContentr0.innerText = `[计划内容]：`;
      const spnPlanContentr1 = GetSpan_Empty('abstract-text');
      spnPlanContentr1.innerText = objvgs_ResearchPlan.planContent;
      li4.appendChild(spnPlanContentr0);
      li4.appendChild(spnPlanContentr1);
      ulArtList.appendChild(li4);

      // strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[操作]：';
      const li5 = GetLi_Empty('');
      const spnOp0 = GetSpan_Empty('rowtit color4 ml-3');
      spnOp0.innerText = `[操作]：`;
      li5.appendChild(spnOp0);

      // strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[开始日期]：${arrvgs_ResearchPlanObjLst[i].startDate}</span>`;
      const spnStartDate0 = GetSpan_Empty('rowtit color4 ml-3');
      spnStartDate0.innerText = `[开始日期]：`;
      const spnStartDate1 = GetSpan_Empty('abstract-text');
      spnStartDate1.innerText = objvgs_ResearchPlan.startDate;
      li5.appendChild(spnStartDate0);
      li5.appendChild(spnStartDate1);

      // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[结束日期]：</span>${arrvgs_ResearchPlanObjLst[i].endDate}`;
      const spnEndDate0 = GetSpan_Empty('rowtit color4 ml-3');
      spnEndDate0.innerText = `[结束日期]：`;
      const spnEndDate1 = GetSpan_Empty('abstract-text');
      spnEndDate1.innerText = objvgs_ResearchPlan.endDate;
      li5.appendChild(spnEndDate0);
      li5.appendChild(spnEndDate1);

      // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[完成日期]：</span>${arrvgs_ResearchPlanObjLst[i].actualFinishingDate}`;
      const spnActualFinishingDate0 = GetSpan_Empty('rowtit color4 ml-3');
      spnActualFinishingDate0.innerText = `[完成日期]：`;
      const spnActualFinishingDate1 = GetSpan_Empty('abstract-text');
      spnActualFinishingDate1.innerText = objvgs_ResearchPlan.actualFinishingDate;
      li5.appendChild(spnActualFinishingDate0);
      li5.appendChild(spnActualFinishingDate1);
      //获取引用人；编辑人、用户名称
      //strIdCurrEduclsarrUsers: Array<clsvUsersSimEN> = await Users_GetObjLstAsync("1=1");
      let arrvUsers: Array<clsvUsersSimEN> = [];
      let UpdUserName = ''; //编辑人

      //获取技能编辑人；
      arrvUsers = arrvUsersObjLst.filter(
        (x) => x.userId == arrvgs_ResearchPlanObjLst[i].acceptanceUser,
      ); //技能编辑人
      for (let j = 0; j < arrvUsers.length; j++) {
        UpdUserName = arrvUsers[j].userName;
        break;
      }
      // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[验收用户]：</span>${UpdUserName}`;
      const spnUpdUserName0 = GetSpan_Empty('rowtit color4 ml-3');
      spnUpdUserName0.innerText = `[验收用户]：`;
      const spnUpdUserName1 = GetSpan_Empty('abstract-text');
      spnUpdUserName1.innerText = UpdUserName;
      li5.appendChild(spnUpdUserName0);
      li5.appendChild(spnUpdUserName1);

      const spnIsSubmit0 = GetSpan_Empty('rowtit color4 ml-3');

      if (arrvgs_ResearchPlanObjLst[i].isSubmit == true) {
        // strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color5">已提交</span>';
      } else {
        // strhtml += '&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit colorRed">未提交</span>';
      }
      spnIsSubmit0.innerText = objvgs_ResearchPlan.isSubmit == true ? `已提交` : `未提交`;
      li5.appendChild(spnIsSubmit0);

      if (arrvgs_ResearchPlanObjLst[i].isSubmit != true) {
        // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="删除" class="layui-btn-danger layui-btn layui-btn layui-btn-xs" onclick="btnDelResearchPlan_Click('${arrvgs_ResearchPlanObjLst[i].planId}')" > <i class="layui-icon" >&#xe640;</i>移除</button>`;
        // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="修改" class="layui-btn layui-btn layui-btn layui-btn-xs" onclick=btnUpdateResearchPlan_Click("${arrvgs_ResearchPlanObjLst[i].planId}") > ${clsIcon.faCommentDots}修改</button>`;
        // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style="float:right;" title="提交" class="layui-btn layui-btn layui-btn layui-btn-xs" onclick=btnSubmitResearchPlan_Click("${arrvgs_ResearchPlanObjLst[i].planId}") > ${clsIcon.faCommentDots}提交</button>`;
        const btnUpdate = GetButton_Empty('layui-btn layui-btn layui-btn layui-btn-xs');
        btnUpdate.title = '修改';

        btnUpdate.style.float = 'right';
        const iUpd = GetI_Empty('layui-icon'); //      ${clsIcon.faCommentDots}
        iUpd.innerHTML = '&#xe642;';
        btnUpdate.appendChild(iUpd);
        btnUpdate.innerText = '修改';
        (function (strKeyId: string) {
          btnUpdate.onclick = function () {
            ResearchTopicPlanEx.UpdRec(strKeyId);
          };
        })(objvgs_ResearchPlan.planId);

        const btnDelete = GetButton_Empty('layui-btn-danger layui-btn layui-btn layui-btn-xs');

        btnDelete.style.float = 'right';
        btnDelete.title = '删除';
        const iDel = GetI_Empty('layui-icon'); //      ${clsIcon.faCommentDots}
        iDel.innerHTML = '&#xe640;';
        btnDelete.appendChild(iDel);
        btnDelete.innerText = '删除';
        (function (strKeyId: string, divLayout: HTMLDivElement) {
          btnDelete.onclick = function () {
            ResearchTopicPlanEx.DelRec(strKeyId, divLayout);
          };
        })(objvgs_ResearchPlan.planId, this.divLayout);

        const btnSubmit = GetButton_Empty('layui-btn layui-btn layui-btn layui-btn-xs');

        btnSubmit.style.float = 'right';
        btnSubmit.title = '提交';
        const iSubmit = GetI_Empty('layui-icon'); //      ${clsIcon.faCommentDots}
        iSubmit.innerHTML = '&#xe642;';
        btnSubmit.appendChild(iSubmit);
        btnSubmit.innerText = '提交';
        (function (strKeyId: string, divLayout: HTMLDivElement) {
          btnSubmit.onclick = function () {
            ResearchTopicPlanEx.SubmitRec(strKeyId, divLayout);
          };
        })(objvgs_ResearchPlan.planId, this.divLayout);

        li5.appendChild(btnDelete);
        li5.appendChild(btnUpdate);
        li5.appendChild(btnSubmit);
      }
      // strhtml += '</span></li>';
      ulArtList.appendChild(li5);

      // strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      const br1 = GetBr_Empty();
      const divBottom = GetDiv_Empty('');
      divBottom.style.borderBottom = 'border-bottom: 1px solid #eee;';
      ulArtList.appendChild(br1);
      ulArtList.appendChild(divBottom);
      const br2 = GetBr_Empty();
      ulArtList.appendChild(br2);
    }
    // strhtml += '</ul></div>';
    divRoot.appendChild(ulArtList);
    //拼接；
    // $('#divDataLst4ResearchPlan').html(strhtml);

    const divName = GetDivObjInDivObj(objLayOut, 'divDataLst4ResearchPlan');
    divName.innerHTML = '';

    divName.appendChild(divInfo);

    if (arrvgs_ResearchPlanObjLst.length > 10) {
      $('#divPager4ResearchPlan').show();
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(divName, this, strDivName4Pager);
    }
  }

  public static async DelRec(strKeyId: string, divLayout: HTMLDivElement) {
    alert(`DelRec strKeyId:${strKeyId}`);
    const objPage: ResearchTopicPlanEx = new ResearchTopicPlanEx(divLayout);
    objPage.btnDelResearchPlan_Click(strKeyId.toString());
  }
  public static async UpdRec(strKeyId: string) {
    alert('UpdRec');
    ResearchTopicPlanEx.vuebtn_Click('UpdResearchPlan', strKeyId.toString());
  }

  public static async SubmitRec(strKeyId: string, divLayout: HTMLDivElement) {
    alert('SubmitRec');

    const objPage: ResearchTopicPlanEx = new ResearchTopicPlanEx(divLayout);
    objPage.btnSubmitResearchPlan_Click(strKeyId.toString());
  }

  //研究计划提交
  public async btnSubmitResearchPlan_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }
    this.SubmitRecord(strKeyId);
  }
  //提交判断；
  public async SubmitRecord(strPlanId: string) {
    this.keyId = strPlanId;

    try {
      const objgs_ResearchPlanEN = await gs_ResearchPlan_GetObjByPlanIdAsync(strPlanId);
      if (objgs_ResearchPlanEN == null) return;
      //可以提交
      //判断数据是否已提交
      if (objgs_ResearchPlanEN.isSubmit == false) {
        this.SubmitRecordSave();
      } else {
        alert('当前数据已提交！');
        return;
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
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return false;
    //
    const objgs_ResearchPlanEN: clsgs_ResearchPlanEN = new clsgs_ResearchPlanEN();
    objgs_ResearchPlanEN.SetPlanId(this.keyId);
    objgs_ResearchPlanEN.SetIsSubmit(true);
    objgs_ResearchPlanEN.SetTopicId(clsPrivateSessionStorage.topicIdInTree);
    const strIdCurrEduCls = await researchTopicStore.getIdCurrEduCls(
      clsPrivateSessionStorage.topicIdInTree,
    );
    objgs_ResearchPlanEN.SetIdCurrEduCls(strIdCurrEduCls);
    objgs_ResearchPlanEN.SetActualFinishingDate(clsPubFun4Web.getNowDate());
    objgs_ResearchPlanEN.SetAcceptanceUser(userStore.getUserId); //验收用户
    objgs_ResearchPlanEN.sfUpdFldSetStr = objgs_ResearchPlanEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objgs_ResearchPlanEN.planId == '' || objgs_ResearchPlanEN.planId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await gs_ResearchPlan_UpdateRecordAsync(objgs_ResearchPlanEN);
      if (returnBool == true) {
        const strInfo = `提交成功!`;

        //显示信息框
        alert(strInfo);

        // HideDialog();
        this.BindGv_vgs_ResearchPlan(objLayOut, this.divName4Pager_ResearchPlan);
      } else {
        const strInfo = `提交不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('提交失败');
      }
      return true;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
  /* 删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
  */
  public async btnDelResearchPlan_Click(strKeyId: string) {
    const objLayOut = this.divLayout;
    if (objLayOut == null) return;
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      //得到当前登录的教师角色
      const strRoleId = userStore.getRoleId;
      if (strRoleId == '00620003') {
        //提示学生不可删除数据；
        const strInfo = `您权限不够，不可删除`;
        //显示信息框
        alert(strInfo);
        return;
      } else {
        await this.DelPlanRecord(strKeyId);
        await this.BindGv_vgs_ResearchPlan(objLayOut, this.divName4Pager_ResearchPlan);
      }
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
  public async DelPlanRecord(strPlanId: string) {
    try {
      const responseText = await gs_ResearchPlan_DelRecordAsync(strPlanId);
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

  // /*
  //  * 设置排序字段-相当使用ViewState功能
  //  */
  // public set hidSortvgs_ResearchPlanBy(value: string) {
  //   const divName = this.getDivName(enumDivType.LayOut_01);
  //   SetInputValueInDivObj(divName, 'hidSortvgs_ResearchPlanBy', value);
  // }
  // /*
  //  * 设置排序字段
  //  */
  // public get hidSortvgs_ResearchPlanBy(): string {
  //   const divName = this.getDivName(enumDivType.LayOut_01);
  //   return GetInputValueInDivObj(divName, 'hidSortvgs_ResearchPlanBy');
  // }
}
