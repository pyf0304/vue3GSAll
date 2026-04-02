import { SysScoreWeightCRUD } from '@/viewsBase/GradEduTools/SysScoreWeightCRUD';
import { clsvSysScoreWeightEN } from '@/ts/L0Entity/GradEduTools/clsvSysScoreWeightEN';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import { CurrEduCls_GetSubObjLstCache } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { Format } from '@/ts/PubFun/clsString';

/* SysScoreWeightCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class SysScoreWeightCRUDEx extends SysScoreWeightCRUD {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortSysScoreWeightBy: string = "scoreWeightId";
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
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: SysScoreWeightCRUDEx;
    if (SysScoreWeightCRUD.objPageCRUD == null) {
      SysScoreWeightCRUD.objPageCRUD = new SysScoreWeightCRUDEx(divLayout);
      objPage = <SysScoreWeightCRUDEx>SysScoreWeightCRUD.objPageCRUD;
    } else {
      objPage = <SysScoreWeightCRUDEx>SysScoreWeightCRUD.objPageCRUD;
    }
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);

    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
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
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
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
        AccessBtnClickDefault(strCommandName, 'SysScoreWeightCRUDExEx.btn_Click');

        break;
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_Load)
   **/
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      this.SetEventFunc();
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();

      SysScoreWeightCRUD.sortvSysScoreWeightBy = 'scoreWeightValue Asc';
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(this.divList, this.divName4Pager);
        this.bolIsInitShow = true; //
      }
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vSysScoreWeightCache(this.thisDivList);
    } catch (e) {
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

  /** 函数功能:为查询区绑定下拉框
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4QueryRegion)
   **/
  public async BindDdl4QueryRegion() {
    const CourseIdCache = clsPubLocalStorage.courseId; //缓存分类变量;//在switch中未找到相关类型: tsCache(in AGC.PureClassEx.FuncParaType:GetTsTypeStr)
    await this.SetDdl_IdCurrEduClsInDiv(CourseIdCache); //查询区域
  }

  public async CombinevSysScoreWeightConditionObj(): Promise<clsvSysScoreWeightEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvSysScoreWeightCond = new clsvSysScoreWeightEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      // if (this.isPublic_q == true) {
      //   strWhereCond += Format(" And {0} = '1'", clsvSysScoreWeightEN.con_IsPublic);
      //   objvSysScoreWeightCond.SetCondFldValue(clsvSysScoreWeightEN.con_IsPublic, true, '=');
      // } else {
      //   strWhereCond += Format(" And {0} = '0'", clsvSysScoreWeightEN.con_IsPublic);
      //   objvSysScoreWeightCond.SetCondFldValue(clsvSysScoreWeightEN.con_IsPublic, false, '=');
      // }
      // if (this.idCurrEduCls_q != '' && this.idCurrEduCls_q != '0') {
      //   strWhereCond += Format(
      //     " And {0} = '{1}'",
      //     clsvSysScoreWeightEN.con_IdCurrEduCls,
      //     this.idCurrEduCls_q,
      //   );
      //   objvSysScoreWeightCond.SetCondFldValue(
      //     clsvSysScoreWeightEN.con_IdCurrEduCls,
      //     this.idCurrEduCls_q,
      //     '=',
      //   );
      // }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineSysScoreWeightConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvSysScoreWeightCond.whereCond = strWhereCond;
    return objvSysScoreWeightCond;
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async CombinevSysScoreWeightCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //if (this.IsPublic_q == true) {
      //    strWhereCond += ` And ${clsvSysScoreWeightEN.con_IsPublic} = '1'`;
      //}
      //else {
      //    strWhereCond += ` And ${clsvSysScoreWeightEN.con_IsPublic} = '0'`;
      //}

      if (this.idCurrEduCls_q != null && this.idCurrEduCls_q != '0') {
        strWhereCond += ` And ${clsvSysScoreWeightEN.con_IdCurrEduCls} = '${this.idCurrEduCls_q}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysScoreWeightCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /// <summary>
  /// 绑定基于Web的下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public static async BindDdl_idCurrEduCls_Cache(
    strDdlName: string,
    objCurrEduCls_Cond: clsCurrEduClsEN,
  ) {
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框：${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始：BindDdl_idCurrEduCls_Cache');
    const arrObjLst_Sel: Array<clsCurrEduClsEN> = await CurrEduCls_GetSubObjLstCache(
      objCurrEduCls_Cond,
      clsPubLocalStorage.courseId,
    );
    BindDdl_ObjLst(
      strDdlName,
      arrObjLst_Sel,
      clsCurrEduClsEN.con_IdCurrEduCls,
      clsCurrEduClsEN.con_EduClsName,
      '教学班',
    );
  }
}
