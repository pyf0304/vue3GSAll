import $ from 'jquery';
import { gs_ReflectLogCRUD } from '@/viewsBase/GradEduTopic/gs_ReflectLogCRUD';
import { clsgs_ReflectLogEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ReflectLogEN';
import {
  gs_ReflectLog_DelRecordAsync,
  gs_ReflectLog_GetObjBymIdAsync,
  gs_ReflectLog_GetObjLstByPagerAsync,
  gs_ReflectLog_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_ReflectLogWApi';
import { ResearchTopic_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
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
import { enumDivType } from '@/ts/PubFun/enumDivType';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { userStore } from '@/store/modulesShare/user';

// /*
//  * 宣布一个已经在存在的函数ShowDialog，用于显示对象框，
//  * strOpType：是操作类型，是三种类型之一：Add, Update, Detail
//  */
// declare function ShowDialog_gs_TeacherTask(strOpType: string): void;

/*
 * 宣布一个已经在其他地方定义存在的变量strUrl_Session_SetString，
 * 用于定义处理Session-设置String函数的地址
 */
declare let strUrl_Session_SetString: string;
declare let strUrl_Session_GetString: string;
// declare let window: any;
/* gs_TeacherTaskCRUD 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class Addgs_ReflectLogEx extends gs_ReflectLogCRUD {
  public mstrListDiv = 'divDataLst';
  public bolIsLoadEditRegion = false; //记录是否导入编辑区的变量
  public bolIsLoadDetailRegion = false; //记录是否导入详细信息区的变量
  public divName4Edit = 'divEdit'; //编辑区的Id
  public divName4Detail = 'divDetail'; //详细信息区的Id

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
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
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
          //const strThisFuncName = this.ShowData.name;
        }
        clsPubLocalStorage.idCurrEduCls = objResearchTopic.idCurrEduCls;
      }

      const strmId = GetInputValueInDivObj(divName, 'hidKeyId');
      if (strmId != '') {
        // await this.BindDdl4EditRegion();
        // await this.UpdateRecord(strmId);
        // HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        ////2、显示无条件的表内容在GridView中
        //await this.BindGv_vSysSkill();
        // this.btnAddNewRecord_Click();
        // HideDivInDivObj(objLayOut, 'divLoading');
      }

      //// 为查询区绑定下拉框
      // await this.BindDdl4QueryRegion();

      this.hidSortgs_TeacherTaskBy = 'missionStatement Asc';
      ////2、显示无条件的表内容在GridView中
      //await this.BindGv_gs_TeacherTask();
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  ///// <summary>
  ///// 在当前界面中，导入编辑区域
  ///// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
  ///// </summary>
  ///// <returns></returns>
  //public async AddDPV_Edit(divName4Edit: string) {
  //    strIdCurrEduclsstrUrl: string = "./gs_TeacherTask_Edit/";
  //    console.log("divName4Edit:(In AddDPV_Edit)" + divName4Edit);
  //    return new Promise(function (resolve, reject) {
  //        $.ajax({
  //            url: strUrl,
  //            method: "GET",
  //            dataType: "html",
  //            data: {},
  //            success: function (data) {
  //                console.log("已经成功获取页面:" + strUrl + "  字节数: " + data.length.toString());
  //                $('#' + divName4Edit).html(data);
  //                resolve(true);
  //                //setTimeout(() => { clsEditObj.BindTab(); }, 100);
  //                //clsEditObj.BindTab();
  //            },
  //            error: (e:any) => {
  //                console.error(e);
  //                reject(e);
  //            }
  //        });
  //    });
  //};

  ///// <summary>
  ///// 在当前界面中，导入编辑区域
  ///// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddDPVer_Detail)
  ///// </summary>
  ///// <returns></returns>
  //public async AddDPVer_Detail(divName4Detail: string) {
  //    strIdCurrEduclsstrUrl: string = "./gs_TeacherTask_Detail/";
  //    console.log("divName4Detail:(In AddDPVer_Detail)" + divName4Detail);
  //    return new Promise(function (resolve, reject) {
  //        $.ajax({
  //            url: strUrl,
  //            method: "GET",
  //            dataType: "html",
  //            data: {},
  //            success: function (data) {
  //                console.log("已经成功获取页面:" + strUrl + "  字节数: " + data.length.toString());
  //                $('#' + divName4Detail).html(data);
  //                resolve(true);
  //                //setTimeout(() => { clsDetailObj.BindTab(); }, 100);
  //                //clsDetailObj.BindTab();
  //            },
  //            error: (e:any) => {
  //                console.error(e);
  //                reject(e);
  //            }
  //        });
  //    });
  //};

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad_Cache)
   */
  public async PageLoadCache() {
    // 在此处放置用户代码以初始化页面
    try {
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      this.hidSortgs_TeacherTaskBy = 'missionStatement Asc';
      //2、显示无条件的表内容在GridView中
      //await this.BindGv_gs_TeacherTaskCache();;
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async Combinegs_ReflectLogCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.MissionStatement_q != "") {
      //    strWhereCond += ` And ${clsgs_ReflectLogEN.con_MissionStatement} like '%${this.MissionStatement_q}%'`;
      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combinegs_TeacherTaskCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的对象列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   */
  public async btnQuery_Click() {
    const strWhereCond = await this.Combinegs_ReflectLogCondition();
    try {
      this.recCount = await gs_ReflectLog_GetRecCountByCondAsync(strWhereCond);
      // const objPagerPara: stuPagerPara = {
      //   pageIndex: 1,
      //   pageSize: this.pageSize,
      //   whereCond: strWhereCond,
      //   orderBy: this.hidSortgs_TeacherTaskBy,
      //   sortFun: (x, y) => {
      //     x = x; y = y;
      //     x = x; y = y;
      //     x = x; y = y;
      //     return 0;
      //   },
      // };
      // const arrgs_ReflectLogObjLst = await gs_ReflectLog_GetObjLstByPagerAsync(objPagerPara);
      // this.BindTab_gs_ReflectLog(this.mstrListDiv, arrgs_TeacherTaskObjLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `查询不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:为查询区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Js_BindDdl4QueryRegion)
   */
  public async BindDdl4QueryRegion() {
    // 在此处放置用户代码以初始化页面
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
      const lngKeyId = Number(strKeyId);
      await this.DelRecord(lngKeyId);
      await this.BindGv_gs_TeacherTask(this.thisDivList);
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
  //public async btnSelectRecordInTab_Click(strKeyId: string) {
  //    try {
  //        if (strKeyId == "") {
  //            alert("请选择需要删除的记录！");
  //            return '';
  //        }
  //        const lngKeyId = Number(strKeyId);
  //        this.SelectRecord(lngKeyId);
  //    }
  //    catch (e:any) {
  //        console.error('catch(e)=');
  //        console.error(e);
  //        strIdCurrEduclsstrMsg: string = `选择记录不成功. ${e}.`;
  //        alert(strMsg);
  //    }
  //}

  /* 
    根据关键字删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   */
  public async DelRecord(lngmId: number) {
    try {
      const responseText = await gs_ReflectLog_DelRecordAsync(lngmId);
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
  public async SelectRecord(lngmId: number) {
    try {
      const objgs_ReflectLogEN = await gs_ReflectLog_GetObjBymIdAsync(lngmId);
      console.log('完成SelectRecord!', objgs_ReflectLogEN);
      Redirect('/Index/Main_gs_TeacherTask');
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
    try {
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      //  const responseText = await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_gs_TeacherTask(this.thisDivList);
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
  public async btnExportExcel_Click() {
    // const strWhereCond = ' 1=1 ';
    try {
      // const arrgs_TeacherTaskObjLst = await gs_ReflectLog_GetObjLstAsync(strWhereCond);
      //  this.BindTab_gs_TeacherTask(this.mstrListDiv, arrgs_TeacherTaskObjLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `导出Excel不成功,${e}.`;
      alert(strMsg);
    }
  }

  // /* 把所有的查询控件内容组合成一个条件串
  // (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
  //  <returns>条件串(strWhereCond)</returns>
  //*/
  // public Combinegs_TeacherTaskConditionObj(): clsgs_ReflectLogEN {
  //     //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
  //     //例如 1 = 1 && userName = '张三'
  //     strWhereCond: string = " 1 = 1 ";
  //     const objgs_TeacherTask_Cond: clsgs_ReflectLogEN = new clsgs_ReflectLogEN();
  //     //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
  //     try {
  //         if (this.MissionStatement_q != "") {
  //             strWhereCond += ` And ${clsgs_ReflectLogEN.con_MissionStatement} like '%${this.MissionStatement_q}%'`;
  //             objgs_TeacherTask_Cond.SetCondFldValue(clsgs_ReflectLogEN.con_MissionStatement, this.MissionStatement_q, "like");
  //         }
  //     }
  //     catch (objException) {
  //         strIdCurrEduclsstrMsg: string = `(errid:WiTsCs0008)在组合查询条件对象(Combinegs_TeacherTaskConditionObj)时出错!请联系管理员!${objException}`;
  //         throw strMsg;
  //     }
  //     return objgs_TeacherTask_Cond;
  // }

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
    this.BindGv_gs_TeacherTask(this.thisDivList);
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   */
  public async BindGv_gs_TeacherTask(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.Combinegs_ReflectLogCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrgs_ReflectLogObjLst: Array<clsgs_ReflectLogEN> = [];
    try {
      this.recCount = await gs_ReflectLog_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortgs_TeacherTaskBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrgs_ReflectLogObjLst = await gs_ReflectLog_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    if (arrgs_ReflectLogObjLst.length == 0) {
      const strMsg = `在绑定Gv_Cache过程中，根据条件获取的对象列表数为0！`;
      alert(strMsg);
      return;
    }
    try {
      //this.BindTab_gs_TeacherTask(strListDiv, arrgs_TeacherTaskObjLst);
      console.log('完成BindGv_gs_TeacherTask!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
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
      gs_ReflectLogCRUD.ascOrDesc4SortFun,
      gs_ReflectLogCRUD.sortgs_ReflectLogBy,
      strSortExpress,
    );
    gs_ReflectLogCRUD.sortgs_ReflectLogBy = sortBy;
    gs_ReflectLogCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    gs_ReflectLogCRUD.sortFunStatic = sortFun;
    await this.BindGv_gs_TeacherTask(this.thisDivList);
  }
  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {}

  // /* 获取当前表关键字值的最大值,再加1,避免重复
  //  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetMaxStrId)
  //*/
  // public async GetMaxStrId(strKeyCtrlName: string) {
  //     this.DivName = "divGetMaxStrId";
  //     try {
  //         const responseText = await gs_ReflectLog_GetMaxStrIdAsync();
  //         strIdCurrEduclsreturnString: string = responseText.toString();
  //         if (returnString == "") {
  //             strIdCurrEduclsstrInfo: string = `获取表gs_TeacherTask的最大关键字为空，不成功，请检查!`;
  //
  //             //显示信息框
  //             alert(strInfo);
  //             $(strKeyCtrlName).val(returnString);
  //         }
  //         else {
  //             strIdCurrEduclsstrInfo: string = `获取表gs_TeacherTask的最大关键字为：${returnString}!`;
  //
  //             //显示信息框
  //             alert(strInfo);
  //             $(strKeyCtrlName).val(returnString);
  //         }
  //     }
  //     catch (e:any) {
  //         console.error('catch(e)=');
  //         console.error(e);
  //         strIdCurrEduclsstrMsg: string = `获取表关键字的最大值不成功,${e}.`;
  //         alert(strMsg);
  //     }
  // }

  // /* 根据关键字列表删除记录
  //  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
  //*/
  // public async DelMultiRecord(arrmId: Array<string>) {
  //     try {
  //         const responseText = await gs_ReflectLog_Delgs_TeacherTasksAsync(arrmId);
  //         strIdCurrEduclsreturnInt: number = responseText;
  //         if (returnInt > 0) {
  //             strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
  //             //显示信息框
  //             alert(strInfo);
  //         }
  //         else {
  //             strIdCurrEduclsstrInfo: string = `删除记录不成功!`;
  //             //显示信息框
  //             alert(strInfo);
  //         }
  //         console.log("完成DelMultiRecord!");
  //     }
  //     catch (e:any) {
  //         console.error('catch(e)=');
  //         console.error(e);
  //         strIdCurrEduclsstrMsg: string = `删除记录不成功. ${e}.`;
  //         alert(strMsg);
  //     }
  // }

  /* 显示{0}对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
     <param name = "divContainer">显示容器</param>
     <param name = "objgs_TeacherTask">需要显示的对象</param>
   */
  public Showgs_TeacherTaskObj(
    divContainer: HTMLDivElement,
    objgs_TeacherTask: clsgs_ReflectLogEN,
  ) {
    const strThisFuncName = this.Showgs_TeacherTaskObj.name;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const sstrKeys = GetObjKeys(objgs_TeacherTask);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objgs_TeacherTask.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = `${strKey}:${strValue}`;
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /* 函数功能:从界面列表中获取第一个关键字的值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
     <param name = "pobjgs_ReflectLogEN">表实体类对象</param>
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
      const strUserId_Value2 = userStore.getUserId;
      console.log(`strUserId_Value2:${strUserId_Value2}`);
    } catch (e: any) {
      const strMsg = `演示Session不成功,${e}.`;
      alert(strMsg);
    }
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
  /*
   * 设置取消按钮的标题
   */
  public set btnCancel_gs_TeacherTask(value: string) {
    $('#btnCancel_gs_TeacherTask').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnSubmit_gs_TeacherTask(): string {
    return $('#btnSubmit_gs_TeacherTask').html();
  }
  /*
   * 设置确定按钮的标题
   */
  public set btnSubmit_gs_TeacherTask(value: string) {
    $('#btnSubmit_gs_TeacherTask').html(value);
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
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortgs_TeacherTaskBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortgs_TeacherTaskBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortgs_TeacherTaskBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortgs_TeacherTaskBy');
  }

  /*
   * 当前教学班流水号
   */
  public set idCurrEduCls(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtidCurrEduCls', value);
  }
  /*
   * 当前教学班流水号
   */
  public get idCurrEduCls(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtidCurrEduCls');
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
   * 任务说明
   */
  public get MissionStatement_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtMissionStatement_q');
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
   * 主题编号
   */
  public set topicId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtTopicId', value);
  }
  /*
   * 主题编号
   */
  public get topicId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtTopicId');
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
}
