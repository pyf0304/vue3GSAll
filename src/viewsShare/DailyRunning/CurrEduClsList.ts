import $ from 'jquery';
import { vCurrEduClsEx_CopyToEx } from '@/ts/L3ForWApiExShare/DailyRunning/clsvCurrEduClsExWApi';
import { CurrEduClsCRUD } from '@/viewsBase/DailyRunning/CurrEduClsCRUD';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';

import { clsvCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsEN';
import { clsvCurrEduClsENEx } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsENEx';
import {
  CurrEduCls_DelCurrEduClssAsync,
  CurrEduCls_DelRecordAsync,
  CurrEduCls_GetMaxStrIdAsync,
  CurrEduCls_GetObjByIdCurrEduClsAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';

import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  vCurrEduCls_GetObjLstByPagerAsync,
  vCurrEduCls_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsWApi';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
  GetDivObjInDivObj,
  GetSelectObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetCurrPageIndex, GetSortBy } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import {
  arrSelectedKeys,
  BindTab_V,
  GetCheckedKeyIds,
  GetObjKeys,
  Redirect,
  SortFun,
} from '@/ts/PubFun/clsCommFunc4Web';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { vUsersSimEx_func } from '@/ts/L3ForWApiExShare/UserManage_GP/clsvUsersSimExWApi';
import { userStore } from '@/store/modulesShare/user';

/*
 * 宣布一个已经在其他地方定义存在的变量strUrl_Session_SetString，
 * 用于定义处理Session-设置String函数的地址
 */
declare let strUrl_Session_SetString: string;
declare let strUrl_Session_GetString: string;
/* CurrEduClsCRUD 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class CurrEduClsList extends CurrEduClsCRUD {
  public mstrListDiv = 'divDataLst';
  public bolIsLoadEditRegion = false; //记录是否导入编辑区的变量
  public divName4Edit = 'divEdit'; //记录是否导入编辑区的变量

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
    //this.BindGv_vgs_TeachingDate();
    this.BindGv_vCurrEduCls(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'vgs_TeachingDate':
        alert('该类没有绑定该函数：[this.BindGv_vgs_TeachingDate_Cache]！');
        //this.BindGv_vgs_TeachingDateCache();;
        break;
    }
  }
  /*
   按钮单击,用于调用Js函数中btn_Click
  (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
  */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: CurrEduClsList = new CurrEduClsList(divLayout);

    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        CurrEduClsCRUD.EditObj.btnCurrEduCls_Edit_Click(strCommandName, strKeyId);
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
      //建立缓存

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      this.hidSortvCurrEduClsBy = 'currEduClsId Asc';
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(objLayOut, this.divName4Pager);
        this.bolIsInitShow = true; //
      }
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vCurrEduCls(this.thisDivList);
      HideDivInDivObj(objLayOut, 'divLoading');
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 把所有的查询控件内容组合成一个条件串
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
  <returns>条件串(strWhereCond)</returns>
*/
  public async CombinevCurrEduClsCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const strUserId = userStore.getUserId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.currEduClsId_q != '') {
        strWhereCond += ` And ${clsvCurrEduClsEN.con_CurrEduClsId} like '%${this.currEduClsId_q}%'`;
      }
      if (this.eduClsName_q != '') {
        strWhereCond += ` And ${clsvCurrEduClsEN.con_EduClsName} like '%${this.eduClsName_q}%'`;
      }
      //获取当前登陆者的角色；
      const strRoleId = userStore.getRoleId;
      //判断角色
      //管理员
      if (strRoleId == '00620002') {
        strWhereCond += ` And idCurrEduCls in ( select idCurrEduCls from vCurrEduClsTeacher where teacherId='${strUserId}' And isEffective='1')`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineCurrEduClsCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vCurrEduCls(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombinevCurrEduClsCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvCurrEduClsObjLst: Array<clsvCurrEduClsEN> = [];
    let arrvCurrEduClsExObjLst: Array<clsvCurrEduClsENEx> = [];
    try {
      this.recCount = await vCurrEduCls_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvCurrEduClsBy,
        sortFun: (x, y) => {
          x = x;
          y = y;

          return 0;
        },
      };
      arrvCurrEduClsObjLst = await vCurrEduCls_GetObjLstByPagerAsync(objPagerPara);

      arrvCurrEduClsExObjLst = arrvCurrEduClsObjLst.map(this.CopyToExV2);
      for (const objInFor of arrvCurrEduClsExObjLst) {
        await this.FuncMap(objInFor);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }

    try {
      this.BindTab_vCurrEduCls(divList, arrvCurrEduClsExObjLst);
      console.log('完成BindGv_vCurrEduCls!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  ///// <summary>
  ///// 把同一个类的对象,复制到另一个对象
  ///// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  ///// </summary>
  ///// <param name = "objvCurrEduClsENS">源对象</param>
  ///// <returns>目标对象=>clsvCurrEduClsEN:objvCurrEduClsENT</returns>
  public CopyToExV2(objvCurrEduClsENS: clsvCurrEduClsEN): clsvCurrEduClsENEx {
    let objvCurrEduClsENT = new clsvCurrEduClsENEx();
    try {
      objvCurrEduClsENT = vCurrEduClsEx_CopyToEx(objvCurrEduClsENS);
      return objvCurrEduClsENT;
    } catch (e: any) {
      const strMsg: string = Format(
        '(errid:WiTsCs0011)Copy表对象数据出错,${e}.({0})',
        clsStackTrace.GetCurrClassFunction(),
      );
      alert(strMsg);
      return objvCurrEduClsENT;
    }
  }
  /// <summary>
  /// 把一个扩展类的部分属性进行函数转换
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_FuncMap)
  /// </summary>
  /// <param name = "objvCurrEduClsS">源对象</param>
  public async FuncMap(objvCurrEduCls: clsvCurrEduClsENEx) {
    try {
      {
        const vUsersSim_UserId = objvCurrEduCls.modifyUserId;
        const vUsersSim_UserName = await vUsersSimEx_func(
          clsvUsersSimEN.con_UserId,
          clsvUsersSimEN.con_UserName,
          vUsersSim_UserId,
        );
        objvCurrEduCls.userName = vUsersSim_UserName;
      }
    } catch (e: any) {
      const strMsg = `(errid:WiTsCs0012)函数映射表对象数据出错,${e}.(${clsStackTrace.GetCurrClassFunction()})`;
      alert(strMsg);
    }
  }
  /* 显示vCurrEduCls对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
 <param name = "divContainer">显示容器</param>
 <param name = "arrCurrEduClsObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_vCurrEduCls(
    divContainer: HTMLDivElement,
    arrvCurrEduClsObjLst: Array<clsvCurrEduClsENEx>,
  ) {
    const strThisFuncName = this.BindTab_vCurrEduCls.name;
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
        fldName: 'currEduClsId',
        colHeader: '教学班Id',
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
        fldName: 'eduClsName',
        colHeader: '教学班',
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
      //    fldName: "courseCode",
      //    colHeader: "课程代码",
      //    text: "",tdClass: "text-left",sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Label",
      //    orderNum: 1,
      //    funcName: () => { }
      //},
      {
        fldName: 'courseName',
        colHeader: '课程',
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
        fldName: 'collegeName',
        colHeader: '学院',
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
        fldName: 'schoolYear',
        colHeader: '学年',
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
        fldName: 'schoolTerm',
        colHeader: '学期',
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
        fldName: 'memo',
        colHeader: '时间范围',
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
        sortBy: 'userName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '编辑人',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 21,
        funcName: () => {},
      },
      //{
      //    fldName: "",
      //    colHeader: "确定推送",
      //    Text: "确定推送", tdClass: "text-left", sortBy: "", sortFun: SortFun, getDataSource: "",
      //    columnType: "Button",
      //    orderNum: 1,
      //    funcName: (strKeyId: string, strText: string) => {
      //        strIdCurrEduclsbtn1: HTMLElement = document.createElement("button");
      //        btn1.innerText = strText;
      //        btn1.className = "btn btn-outline-info btn-sm";
      //        btn1.setAttribute("onclick", `btnPushEduClsTextInTab_Click('${strKeyId}');`);
      //        return btn1;
      //    }
      //},
    ];
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvCurrEduClsObjLst, arrDataColumn, 'idCurrEduCls', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }

  /// <summary>
  /// 在当前界面中，导入编辑区域
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
  /// </summary>
  /// <returns></returns>
  public async AddDPV_Edit(divName4Edit: string) {
    const strUrl = './WA_CurrEduCls_Edit/';
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

  // /* 函数功能:页面导入,当页面开始运行时所发生的事件
  //  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad_Cache)
  //*/
  // public async PageLoadCache() {
  //     // 在此处放置用户代码以初始化页面
  //     try {

  //         // 为查询区绑定下拉框
  //         await this.BindDdl4QueryRegion();

  //         this.hidSortvCurrEduClsBy = "currEduClsId Asc";
  //         //2、显示无条件的表内容在GridView中
  //         await this.BindGv_vCurrEduClsCache();;
  //     }
  //     catch (e:any) {
  //         strIdCurrEduclsstrMsg: string = `页面启动不成功,${e}.`;
  //         alert(strMsg);
  //     }
  // }

  /* 根据条件获取相应的对象列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
   */
  public async btnQuery_Click() {
    await this.BindGv_vCurrEduCls(this.thisDivList);
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
      await this.DelRecord(strKeyId);
      await this.BindGv_vCurrEduCls(this.thisDivList);
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
  public async DelRecord(strIdCurrEducls: string) {
    try {
      const responseText = await CurrEduCls_DelRecordAsync(strIdCurrEducls);
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
  public async SelectRecord(strIdCurrEducls: string) {
    try {
      await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEducls);

      console.log('完成SelectRecord!');
      Redirect('/Index/Main_vCurrEduCls');
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
      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_vCurrEduCls(this.thisDivList);
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
  public async CombinevCurrEduClsConditionObj(): Promise<clsvCurrEduClsEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const objvCurrEduCls_Cond: clsvCurrEduClsEN = new clsvCurrEduClsEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.currEduClsId_q != '') {
        objvCurrEduCls_Cond.SetCondFldValue(
          clsvCurrEduClsEN.con_CurrEduClsId,
          this.currEduClsId_q,
          'like',
        );
      }
      if (this.eduClsName_q != '') {
        objvCurrEduCls_Cond.SetCondFldValue(
          clsvCurrEduClsEN.con_EduClsName,
          this.eduClsName_q,
          'like',
        );
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0005)在组合查询条件对象(CombineCurrEduClsConditionObj)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objvCurrEduCls_Cond;
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
    this.BindGv_vCurrEduCls(this.thisDivList);
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
      CurrEduClsCRUD.ascOrDesc4SortFun,
      CurrEduClsCRUD.sortCurrEduClsBy,
      strSortExpress,
    );
    CurrEduClsCRUD.sortCurrEduClsBy = sortBy;
    CurrEduClsCRUD.ascOrDesc4SortFun = ascOrDesc4SortFun;
    CurrEduClsCRUD.sortFunStatic = sortFun;
    await this.BindGv_vCurrEduCls(this.thisDivList);
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
      const responseText = await CurrEduCls_GetMaxStrIdAsync();
      const returnString: string = responseText.toString();
      if (returnString == '') {
        const strInfo = `获取表CurrEduCls的最大关键字为空，不成功，请检查!`;

        //显示信息框
        alert(strInfo);
        $(strKeyCtrlName).val(returnString);
      } else {
        const strInfo = `获取表CurrEduCls的最大关键字为：${returnString}!`;

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

  /* 根据关键字列表删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   */
  public async DelMultiRecord(arridCurrEduCls: Array<string>) {
    try {
      const responseText = await CurrEduCls_DelCurrEduClssAsync(arridCurrEduCls);
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
     <param name = "objCurrEduCls">需要显示的对象</param>
   */
  public ShowCurrEduClsObj(divContainer: HTMLDivElement, objCurrEduCls: clsCurrEduClsEN) {
    const strThisFuncName = this.ShowCurrEduClsObj.name;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const sstrKeys = GetObjKeys(objCurrEduCls);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objCurrEduCls.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = `${strKey}:${strValue}`;
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /* 函数功能:从界面列表中获取第一个关键字的值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
     <param name = "pobjCurrEduClsEN">表实体类对象</param>
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
      const strUserId_Value2 = this.hidUserId;
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
   * 课程Id
   */
  public set courseId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    SetSelectValueByIdInDivObj(divName, 'ddlCourseId', value);
  }
  /*
   * 课程Id
   */
  public get courseId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetSelectValueInDivObj(divName, 'ddlCourseId');
  }
  /*
   * 当前教学班Id
   */
  public set currEduClsId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);

    SetInputValueInDivObj(divName, 'txtCurrEduClsId', value);
  }
  /*
   * 当前教学班Id
   */
  public get currEduClsId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'txtCurrEduClsId');
  }
  /*
   * 当前教学班Id
   */
  public get currEduClsId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'txtCurrEduClsId_q');
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
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
    if (divName == null) return;
    SetInputValueInDivObj(divName, 'hidDivName', value);
  }
  /*
   * 教学班名称
   */
  public set eduClsName(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    SetInputValueInDivObj(divName, 'txteduClsName', value);
  }
  /*
   * 教学班名称
   */
  public get eduClsName(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'txteduClsName');
  }
  /*
   * 教学班名称
   */
  public get eduClsName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'txteduClsName_q');
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvCurrEduClsBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    SetInputValueInDivObj(divName, 'hidSortvCurrEduClsBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvCurrEduClsBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'hidSortvCurrEduClsBy');
  }
  /*
   * 用户Id
   */
  public get hidUserId(): string {
    return userStore.getUserId;
  }
  /*
   * 年级流水号
   */
  public set idGradeBase(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    SetSelectValueByIdInDivObj(divName, 'ddlIdGradeBase', value);
  }
  /*
   * 年级流水号
   */
  public get idGradeBase(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetSelectValueInDivObj(divName, 'ddlIdGradeBase');
  }
  /*
   * 学院流水号
   */
  public set idXzCollege(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    SetSelectValueByIdInDivObj(divName, 'ddlIdXzCollege', value);
  }
  /*
   * 学院流水号
   */
  public get idXzCollege(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetSelectValueInDivObj(divName, 'ddlIdXzCollege');
  }
  /*
   * 是否有效
   */
  public set isEffective(value: boolean) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    SetInputValueInDivObj(divName, 'chkIsEffective', value.toString());
  }
  /*
   * 是否有效
   */
  public get isEffective(): boolean {
    return $('#chkIsEffective').prop('checked');
  }
  /*
   * 设置关键字的值
   */
  public set keyId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
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
    if (divName == null) return;
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
   * 修改人
   */
  public get modifyUserId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetInputValueInDivObj(divName, 'txtModifyUserId');
  }
  /*
   * 设置操作类型：Add||Update||Detail
   */
  public set opType(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
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
   * 学期
   */
  public set schoolTerm(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    SetSelectValueByIdInDivObj(divName, 'ddlSchoolTerm', value);
  }
  /*
   * 学期
   */
  public get schoolTerm(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetSelectValueInDivObj(divName, 'ddlSchoolTerm');
  }
  /*
   * 学年
   */
  public set schoolYear(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    SetSelectValueByIdInDivObj(divName, 'ddlSchoolYear', value);
  }
  /*
   * 学年
   */
  public get schoolYear(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);

    return GetSelectValueInDivObj(divName, 'ddlSchoolYear');
  }
}
