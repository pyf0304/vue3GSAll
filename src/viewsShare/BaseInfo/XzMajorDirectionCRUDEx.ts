//import * as QQ from "q";
import $ from 'jquery';
import { XzMajorDirection_EditEx } from './XzMajorDirection_EditEx';
import { XzMajorEx_SortFun_MajorName } from '@/ts/L3ForWApiExShare/BaseInfo/clsXzMajorExWApi';
// import { XzMajorDirectionCRUD } from '@/viewsBase/BaseInfo/XzMajorDirectionCRUD';
import { clsvXzMajorDirectionEN } from '@/ts/L0Entity/BaseInfo/clsvXzMajorDirectionEN';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import {
  vXzMajorDirection_GetObjLstAsync,
  vXzMajorDirection_GetObjLstByPagerCache,
  vXzMajorDirection_GetRecCountByCondCache,
} from '@/ts/L3ForWApi/BaseInfo/clsvXzMajorDirectionWApi';
import { XzMajor_GetObjLstAsync } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  HideDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { BindDdl_ObjLst, BindTab_V, confirm_del, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { XzMajorDirectionCRUD } from '@/viewsBase/BaseInfo/XzMajorDirectionCRUD';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { clsvXzMajorDirectionENEx } from '@/ts/L0Entity/BaseInfo/clsvXzMajorDirectionENEx';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare let window: any;
/* WApiXzMajorDirectionCRUD_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class XzMajorDirectionCRUDEx extends XzMajorDirectionCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvXzMajorDirectionBy: string = "majorDirectionId";
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
    alert(`该类没有绑定该函数：[this.BindGv_XzMajorDirection]！${strType}${strPara}`);
    //this.BindGv_XzMajorDirection();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    let strMsg = '';
    switch (strType) {
      case 'XzMajorDirection':
        this.BindGv_vXzMajorDirectionCache(this.thisDivList);
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
    let objPage: XzMajorDirectionCRUDEx;
    if (XzMajorDirectionCRUD.objPageCRUD == null) {
      XzMajorDirectionCRUD.objPageCRUD = new XzMajorDirectionCRUDEx(divLayout);
      objPage = <XzMajorDirectionCRUDEx>XzMajorDirectionCRUD.objPageCRUD;
    } else {
      objPage = <XzMajorDirectionCRUDEx>XzMajorDirectionCRUD.objPageCRUD;
    }
    const objPageEdit: XzMajorDirection_EditEx = new XzMajorDirection_EditEx(
      'XzMajorDirection_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    let strMsg = '';
    switch (strCommandName) {
      case 'Query': //查询记录
        //objPage.btnQuery_Click(this.li);
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        //objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnUpdateRecord_Click(strKeyId);
        break;
      case 'UpdateRecordInTab': //修改记录InTab
        objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
          return;
        }
        if (confirm_del(arrKeyIds.length) == false) {
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordInTab': //删除记录InTab
        objPage.btnDelRecordInTab_Click(strKeyId);
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
        AccessBtnClickDefault(strCommandName, 'XzMajorDirectionCRUDExEx.btn_Click');

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
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;
      if (strUserId != '') {
        //加载所需缓存

        //加载页面所需数据源到缓存
        await XzMajor_GetObjLstAsync('1=1');
        await vXzMajorDirection_GetObjLstAsync('1=1');

        //管理员 判断角色
        if ( strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018) {
          $('#btnDelRecord').show();
        } else {
          //学生00620003 教师
          $('#btnDelRecord').hide();
        }
        $('#hidUserId').val(strUserId);
        //1、为下拉框设置数据源,绑定列表数据

        //const ddl_idXzMajor = await this.BindDdl_idXzMajor_Catche("ddlIdXzMajor", new clsXzMajorEN);
        //const ddl_idXzMajor_q = await this.BindDdl_idXzMajor_Catche("ddlIdXzMajor_q", new clsXzMajorEN);

        await this.BindDdl_idXzMajor('ddlIdXzMajor');
        await this.BindDdl_idXzMajor('ddlIdXzMajor_q');

        XzMajorDirectionCRUD.sortXzMajorDirectionBy = 'updDate Desc';
        // strWhereCond = await this.CombinevXzMajorDirectionCondition();

        const objvXzMajorDirection_Cond: clsvXzMajorDirectionEN =
          this.CombinevXzMajorDirectionConditionobj();

        this.recCount = await vXzMajorDirection_GetRecCountByCondCache(objvXzMajorDirection_Cond);

        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vXzMajorDirectionCache(this.thisDivList);

        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public async BindDdl_idXzMajor(ddlIdXzMajor: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlIdXzMajor);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlIdXzMajor} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      let arrXzMajorObjLst = await XzMajor_GetObjLstAsync(strWhereCond);
      arrXzMajorObjLst = arrXzMajorObjLst.sort(XzMajorEx_SortFun_MajorName);
      BindDdl_ObjLst(
        ddlIdXzMajor,
        arrXzMajorObjLst,
        clsXzMajorEN.con_IdXzMajor,
        clsXzMajorEN.con_MajorName,
        '专业',
      );
      console.log('完成BindDdl_idXzMajor!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  // /* 函数功能:把界面上的属性数据传到类对象中
  //  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
  //  <param name = "pobjXzMajorDirectionEN">数据传输的目的类对象</param>
  //*/
  // public PutDataToXzMajorDirectionClass(pobjXzMajorDirectionEN: clsXzMajorDirectionEN) {
  //     pobjXzMajorDirectionEN.SetMajorDirectionId(this.majorDirectionId;// 研究方向Id
  //     pobjXzMajorDirectionEN.SetIdXzMajor(this.idXzMajor;// 专业流水号
  //     pobjXzMajorDirectionEN.majorDirectionName = this.majorDirectionName;// 研究方向名
  //     pobjXzMajorDirectionEN.majorDirectionENName = this.MajorDirectionENName;// 研究方向英文名
  //     pobjXzMajorDirectionEN.majorDirectionExplain = this.MajorDirectionExplain;// 专业方向说明
  //     pobjXzMajorDirectionEN.SetIsVisible(this.isVisible;// 是否显示
  //     pobjXzMajorDirectionEN.SetUpdDate(clsPubFun4Web.getNowDate();// 修改日期
  //     pobjXzMajorDirectionEN.SetUpdUser(userStore.getUserId;// 修改人
  //     pobjXzMajorDirectionEN.SetMemo(this.memo;// 备注
  // }

  public async btnQuery_Click() {
    try {
      await this.BindGv_vXzMajorDirectionCache(this.thisDivList);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `查询不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的记录对象的列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
  */
  public async BindGv_vXzMajorDirectionCache(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    // strWhereCond = await this.CombinevXzMajorDirectionCondition();
    const objvXzMajorDirection_Cond: clsvXzMajorDirectionEN =
      this.CombinevXzMajorDirectionConditionobj();

    const strWhereCond = JSON.stringify(objvXzMajorDirection_Cond);

    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvXzMajorDirectionObjLst: Array<clsvXzMajorDirectionEN> = [];
    try {
      this.recCount = await vXzMajorDirection_GetRecCountByCondCache(objvXzMajorDirection_Cond);
      console.log('完成vXzMajorDirection计数!');

      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: XzMajorDirectionCRUD.sortXzMajorDirectionBy,
        sortFun: (x, y) => {
          x = x;
          y = y;

          return 0;
        },
      };
      arrvXzMajorDirectionObjLst = await vXzMajorDirection_GetObjLstByPagerCache(objPagerPara);
      console.log('完成vXzMajorDirection对象列表!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    //if (arrvXzMajorDirectionObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //console.error(strMsg);
    //    alert(strMsg);
    //    return;
    //}
    try {
      await this.BindTab_vXzMajorDirection(divList, arrvXzMajorDirectionObjLst);
      console.log('完成BindGv_vXzMajorDirection!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */
  public CombinevXzMajorDirectionConditionobj(): clsvXzMajorDirectionEN {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'

    const objvXzMajorDirectionCond: clsvXzMajorDirectionEN = new clsvXzMajorDirectionEN();

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.idXzMajor_q != '' && this.idXzMajor_q != '0') {
        objvXzMajorDirectionCond.SetCondFldValue(
          clsvXzMajorDirectionEN.con_IdXzMajor,
          this.idXzMajor_q,
          '=',
        );
      }
      if (this.majorDirectionName_q != '') {
        objvXzMajorDirectionCond.SetCondFldValue(
          clsvXzMajorDirectionEN.con_MajorDirectionName,
          this.majorDirectionName_q,
          '=',
        );
      }

      if (userStore.getUserId != '') {
        $('#hidUserId').val(userStore.getUserId);
        //判断角色
        //管理员
        if (
          userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
          userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
        ) {
          $('#btnDelRecord').show();
        }
        //else if (objvUserRoleRelation.roleId == "00620002") {
        //    //教师
        //    $("#btnDelRecord").hide();

        //    //可以查看所有；
        //}
        else {
          //学生；
          $('#btnDelRecord').hide();

          //学生00620003
          //只能查看自己的数据

          objvXzMajorDirectionCond.SetCondFldValue(
            clsvXzMajorDirectionEN.con_UpdUser,
            userStore.getUserId,
            '=',
          );
        }
      } else {
        reLogin();
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineXzMajorDirectionCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return objvXzMajorDirectionCond;
  }

  /* 显示vXzMajorDirection对象的所有属性值
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   <param name = "divContainer">显示容器</param>
   <param name = "arrXzMajorDirectionObjLst">需要绑定的对象列表</param>
 */
  public async BindTab_vXzMajorDirection(
    divContainer: HTMLDivElement,
    arrvXzMajorDirectionObjLst: Array<clsvXzMajorDirectionEN>,
  ) {
    const strThisFuncName = this.BindTab_vXzMajorDirection.name;
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
        fldName: 'majorDirectionId',
        colHeader: '研究方向Id',
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
        colHeader: '专业名称',
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
        fldName: 'majorDirectionName',
        colHeader: '研究方向名',
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
        fldName: clsvXzMajorDirectionEN.con_MajorDirectionENName,
        colHeader: '研究方向英文名',
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
        fldName: clsvXzMajorDirectionEN.con_UpdUser,
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
    ];
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');
    BindTab_V(divDataLst, arrvXzMajorDirectionObjLst, arrDataColumn, 'majorDirectionId', this);
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
}
