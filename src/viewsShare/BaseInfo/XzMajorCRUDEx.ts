/*-- -- -- -- -- -- -- -- -- -- --
 类名:XzMajorCRUDEx
 表名:XzMajor(01120065)
 生成代码版本:2020.05.06.1
 生成日期:2020/05/07 20:53:31
 生成者:
 工程名称:问卷调查
 工程ID:0112
 相关数据库:tzar.tpddns.cn,19433EduHigh_Jsie
 PrjDataBaseId:0122
 模块中文名:基本信息维护
 模块英文名:BaseInfo
 框架-层名:WA_界面后台Ex_TS(WA_ViewScriptCSEx_TS)
 编程语言:TypeScript
 == == == == == == == == == == == == 
 */
// import $ from 'jquery';
import { XzMajor_EditEx } from './XzMajor_EditEx';
// import { XzMajorCRUD } from '@/viewsBase/BaseInfo/XzMajorCRUD';
import { clsvXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsvXzMajorEN';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { XzMajor_GetObjLstAsync } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  HideDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindTab_V, GetCheckedKeyIds, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';

import { IShowList } from '@/ts/PubFun/IShowList';
import { XzMajorCRUD } from '@/viewsBase/BaseInfo/XzMajorCRUD';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { userStore } from '@/store/modulesShare/user';

declare function ShowDialog(strOpType: any): void;

/* XzMajorCRUDEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class XzMajorCRUDEx extends XzMajorCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvXzMajorBy: string = "idXzMajor";
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
    this.BindGv_vXzMajorCache(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'vXzMajor':
        alert('该类没有绑定该函数：[this.BindGv_vXzMajor_Cache]！');
        //this.BindGv_vXzMajorCache();;
        break;
      default:
        strMsg = Format('类型(strType):{0}在BindGv_Cache函数的switch中没有被处理！', strType);
        console.error(strMsg);
        alert(strMsg);
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

      XzMajorCRUD.sortvXzMajorBy = 'majorID Asc';
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(objLayOut, this.divName4Pager);
        this.bolIsInitShow = true; //
      }
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vXzMajorCache(this.thisDivList);
      HideDivInDivObj(objLayOut, 'divLoading');
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
 */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: XzMajorCRUDEx;
    if (XzMajorCRUD.objPageCRUD == null) {
      XzMajorCRUD.objPageCRUD = new XzMajorCRUDEx(divLayout);
      objPage = <XzMajorCRUDEx>XzMajorCRUD.objPageCRUD;
    } else {
      objPage = <XzMajorCRUDEx>XzMajorCRUD.objPageCRUD;
    }
    const objPageEdit: XzMajor_EditEx = new XzMajor_EditEx('XzMajor_EditEx', objPage);
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
        if (arrKeyIds.length == 0) {
          alert('请选择需要按标志删除的记录！');
          return;
        }
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
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

  /* 为插入记录做准备工作
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
*/
  //public async AddNewRecord() {
  //    //去掉提交按钮不可用状态
  //    $('#btnOKUpd').attr("disabled", false);
  //    this.opType = "AddWithMaxId";
  //  //  this.SetKeyReadOnly(false);
  //    this.btnOKUpd = "确认添加";
  //    this.btnCancel = "取消添加";
  //    this.Clear();

  //    //wucXzMajorB1.idXzMajor = clsXzMajorBL.GetMaxStrId_S();
  //    try {
  //        const responseText = await XzMajor_GetMaxStrIdAsync();
  //        strIdCurrEduclsreturnString: string = responseText;
  //        if (returnString == "") {
  //            strIdCurrEduclsstrInfo: string = `获取表XzMajor的最大关键字为空，不成功，请检查!`;
  //            //显示信息框
  //            alert(strInfo);
  //        }
  //        else {
  //            $('#txtidXzMajor').val(returnString);
  //        }
  //    }
  //    catch (e:any) {
  //        console.error('catch(e)=');
  //        console.error(e);
  //        strIdCurrEduclsstrMsg: string = `获取表关键字的最大值不成功,${e}.`;
  //        alert(strMsg);
  //    }
  //}

  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
   */
  //public AddNewRecordWithMaxId() {
  //    //去掉提交按钮不可用状态
  //    $('#btnOKUpd').attr("disabled", false);
  //    this.opType = "AddWithMaxId";
  // //   this.SetKeyReadOnly(false);
  //    this.btnOKUpd = "确认添加";
  //    this.btnCancel = "取消添加";
  //    this.Clear();
  //    //wucXzMajorB1.idXzMajor = clsXzMajorBL.GetMaxStrId_S();
  //}

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
 <returns>条件串(strWhereCond)</returns>
*/
  public async CombinevXzMajorCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.majorID_q != '') {
        strWhereCond += ` And ${clsvXzMajorEN.con_MajorID} like '%${this.majorID_q}%'`;
      }
      if (this.majorName_q != '') {
        strWhereCond += ` And ${clsvXzMajorEN.con_MajorName} like '%${this.majorName_q}%'`;
      }
      if (this.idXzCollege_q != null && this.idXzCollege_q != '0') {
        strWhereCond += ` And ${clsvXzMajorEN.con_IdXzCollege} = '${this.idXzCollege_q}'`;
      }
      ////读取session角色 来判断绑定不同数据列表
      ////获取用户角色来判断显示不同的列表数据；
      // const strUserId = userStore.getUserId;
      //strIdCurrEduclsstrRoleId = userStore.getRoleId;

      ////判断角色
      ////管理员
      //if (strRoleId == "00620001") {

      //}
      //else if (strRoleId == "00620002") {
      //    //教师

      //    //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
      //    strWhereCond += ` And ${clsvXzMajorEN.con_ModifyDate} = '${strUserId}'`;
      //    //strWhereCond += " and updUser in (select stuId from vCurrEduClsStu where idCurrEduCls = '" + clsPubLocalStorage.idCurrEduCls + "') or updUser = '" + strUserId + "'";
      //}
      //else {
      //    ////学生；
      //    //strWhereCond += ` And ${clsvXzMajorEN.con_ModifyDate} = '${strUserId}'`;
      //    ////学生00620003

      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineXzMajorCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 添加新记录 需要 通过权限判断  管理员登录可以添加学院专业，教师只能添加非学院专业
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   */

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
      //获取用户角色来判断显示不同的列表数据；
      const strUserId = userStore.getUserId;
      const strWhereCond = ` idXzMajor in (${strKeyList})`;
      let arrXzmajorObjLst: Array<clsXzMajorEN> = [];
      arrXzmajorObjLst = await XzMajor_GetObjLstAsync(strWhereCond);
      //查询是否有提交的数据
      arrXzmajorObjLst = arrXzmajorObjLst.filter((x) => x.modifyUserId != strUserId);
      if (arrXzmajorObjLst.length > 0) {
        alert('包含其他用户添加数据，不能删除！');
        return '';
      }

      await this.DelMultiRecord(arrKeyIds);
      await this.BindGv_vXzMajorCache(this.thisDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 显示vXzMajor对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
 <param name = "divContainer">显示容器</param>
 <param name = "arrXzMajorObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_vXzMajor(
    divContainer: HTMLDivElement,
    arrvXzMajorObjLst: Array<clsvXzMajorEN>,
  ) {
    const strThisFuncName = this.BindTab_vXzMajor.name;
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
        fldName: 'majorID',
        colHeader: '专业ID',
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
        fldName: 'majorName',
        colHeader: '专业名',
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
        fldName: 'majorEnglishName',
        colHeader: '英文名',
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
        colHeader: '学院名',
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
        fldName: 'majorDirection',
        colHeader: '专业方向',
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
        fldName: 'modifyDate',
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
        fldName: clsvXzMajorEN.con_ModifyUserId,
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
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvXzMajorObjLst, arrDataColumn, 'idXzMajor', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
}
