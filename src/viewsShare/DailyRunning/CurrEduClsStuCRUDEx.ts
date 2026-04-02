/**
 * 类名:CurrEduClsStuCRUDEx(界面:CurrEduClsStuCRUD)
 * 表名:CurrEduClsStu(01120125)
 * 版本:2023.08.27.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/28 10:11:51
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:日常运行(DailyRunning)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { CurrEduClsStuCRUD } from '@/viewsBase/DailyRunning/CurrEduClsStuCRUD';
import { CurrEduClsStu_EditEx } from '@/viewsShare/DailyRunning/CurrEduClsStu_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsvCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuEN';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { BindTab_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { clsCurrEduClsStuEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsStuEN';
import { vCurrEduClsStuEx_GetObjExLstByPagerCache } from '@/ts/L3ForWApiExShare/DailyRunning/clsvCurrEduClsStuExWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vCurrEduClsStu_GetRecCountByCondCache } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
import { clsvCurrEduClsStuENEx } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsStuENEx';
/** CurrEduClsStuCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class CurrEduClsStuCRUDEx extends CurrEduClsStuCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortvCurrEduClsStuBy = "IdEduClsStu";
  /**
   * 每页记录数,在扩展类可以修改
   **/
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
    alert(`该类没有绑定该函数：[this.BindGv_vCurrEduClsStu]!${strType}${strPara}`);
    //this.BindGv_vCurrEduClsStuCache();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'vCurrEduClsStu':
        this.BindGv_vCurrEduClsStuCache(this.divList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: CurrEduClsStuCRUDEx;
    let objPageEdit;
    if (CurrEduClsStuCRUD.objPageCRUD == null) {
      CurrEduClsStuCRUD.objPageCRUD = new CurrEduClsStuCRUDEx(divLayout);
      objPage = <CurrEduClsStuCRUDEx>CurrEduClsStuCRUD.objPageCRUD;
    } else {
      objPage = <CurrEduClsStuCRUDEx>CurrEduClsStuCRUD.objPageCRUD;
    }

    let strMsg = '';
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
        objPageEdit = new CurrEduClsStu_EditEx('CurrEduClsStu_EditEx', objPage);

        CurrEduClsStuCRUD.EditObj.btnCurrEduClsStu_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new CurrEduClsStu_EditEx('CurrEduClsStu_EditEx', objPage);

        CurrEduClsStuCRUD.EditObj.btnCurrEduClsStu_Edit_Click(strCommandName, strKeyId);
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:strCommandName在函数(CurrEduClsStuCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGvCache)
   **/
  public async BindGv_vCurrEduClsStuCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_vCurrEduClsStuCache.name;
    if (CurrEduClsStuCRUD.sortvCurrEduClsStuBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvCurrEduClsStuBy)为空,请检查!(In BindGv_vCurrEduClsStuCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    CurrEduClsStuCRUD.IdCurrEduClsCache = clsPubLocalStorage.idCurrEduCls;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');

    const objvCurrEduClsStuCond = await this.CombinevCurrEduClsStuConditionObj();
    const strWhereCond = JSON.stringify(objvCurrEduClsStuCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvCurrEduClsStuExObjLst: Array<clsvCurrEduClsStuENEx> = [];
    try {
      this.recCount = await vCurrEduClsStu_GetRecCountByCondCache(
        objvCurrEduClsStuCond,
        CurrEduClsStuCRUD.IdCurrEduClsCache,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objvCurrEduClsStuCond.whereCond,
        );

        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objvCurrEduClsStuCond.whereCond,
        );
        console.error('Error: ', strMsg);
        //console.trace();
        // alert(strMsg);
        return;
      }
      const intPageCount = this.objPager.GetPageCount(this.recCount, this.pageSize);
      if (intCurrPageIndex == 0) {
        if (intPageCount > 1) intCurrPageIndex = intPageCount;
        else intCurrPageIndex = 1;
        this.SetCurrPageIndex(intCurrPageIndex);
      } else if (intCurrPageIndex > intPageCount) {
        intCurrPageIndex = intPageCount;
        this.SetCurrPageIndex(intCurrPageIndex);
      }

      let strSortFun = (x: any, y: any) => {
        // x = x; y = y;
        x = x;
        y = y;
        return 0;
      };
      if (CurrEduClsStuCRUD.sortFunStatic != undefined) {
        strSortFun = CurrEduClsStuCRUD.sortFunStatic(CurrEduClsStuCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: CurrEduClsStuCRUD.sortvCurrEduClsStuBy,
        sortFun: strSortFun,
      };
      arrvCurrEduClsStuExObjLst = await vCurrEduClsStuEx_GetObjExLstByPagerCache(
        objPagerPara,
        CurrEduClsStuCRUD.IdCurrEduClsCache,
      );
    } catch (e: any) {
      const strMsg = Format(
        '绑定GridView不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }

    const divPager = GetDivObjInDivObj(divList, 'divPager');
    if (this.recCount <= this.pageSize) {
      if (divPager != null) {
        divPager.style.display = 'none';
      }
    } else {
      if (divPager != null) {
        divPager.style.display = 'block';
      }
    }
    if (arrvCurrEduClsStuExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';

      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format(
        '{0}_{1}',
        clsCurrEduClsStuEN._CurrTabName,
        CurrEduClsStuCRUD.IdCurrEduClsCache,
      );
      const strMsg = Format('根据条件获取的记录数为0!(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divDataLst, strMsg);
      this.objPager.Hide(this.getDivName(enumDivType.LayOut_01), this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_vCurrEduClsStu(divList, arrvCurrEduClsStuExObjLst);
      //console.log("完成BindGv_vCurrEduClsStuCache!");
    } catch (e: any) {
      const strMsg = Format(
        '绑定对象列表不成功, {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 显示vCurrEduClsStu对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器
   * @param arrCurrEduClsStuObjLst:需要绑定的对象列表
   **/
  public async BindTab_vCurrEduClsStu(
    divContainer: HTMLDivElement,
    arrvCurrEduClsStuObjLst: Array<clsvCurrEduClsStuEN>,
  ) {
    if (divContainer == null) {
      alert(Format('{0}不存在!', divContainer));
      return;
    }
    const divDataLst = GetDivObjInDivObj(divContainer, 'divDataLst');

    const arrDataColumn: Array<clsDataColumn> = [
      {
        fldName: '',
        sortBy: '',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '',
        text: '',
        tdClass: 'text-left',
        columnType: 'CheckBox',
        orderNum: 1,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      // {
      //   fldName: clsvCurrEduClsStuEN.con_EduClsName,
      //   sortBy: clsvCurrEduClsStuEN.con_EduClsName,
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '教学班',
      //   text: '',
      //   tdClass: 'text-left',
      //   columnType: 'Label',
      //   orderNum: 2,
      //   funcName: (strKey: string, strText: string) => {
      //     console.log(strKey, strText);
      //     return new HTMLElement();
      //   },
      // },
      {
        fldName: clsvCurrEduClsStuEN.con_StuId,
        sortBy: clsvCurrEduClsStuEN.con_StuId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学号',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvCurrEduClsStuEN.con_StuName,
        sortBy: clsvCurrEduClsStuEN.con_StuName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '姓名',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 3,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvCurrEduClsStuEN.con_MajorName,
        sortBy: clsvCurrEduClsStuEN.con_MajorName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '专业',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 4,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvCurrEduClsStuEN.con_CourseId,
        sortBy: clsvCurrEduClsStuEN.con_CourseId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程代码',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 5,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvCurrEduClsStuEN.con_CourseName,
        sortBy: clsvCurrEduClsStuEN.con_CourseName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 6,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvCurrEduClsStuEN.con_CourseTypeName,
        sortBy: clsvCurrEduClsStuEN.con_CourseTypeName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '课程类型',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 7,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvCurrEduClsStuEN.con_SchoolTerm,
        sortBy: clsvCurrEduClsStuEN.con_SchoolTerm,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学期',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsvCurrEduClsStuEN.con_SchoolYear,
        sortBy: clsvCurrEduClsStuEN.con_SchoolYear,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学年',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 9,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    await BindTab_V(
      divDataLst,
      arrvCurrEduClsStuObjLst,
      arrDataColumn,
      clsvCurrEduClsStuEN.con_IdEduClsStu,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevCurrEduClsStuConditionObj(): Promise<clsvCurrEduClsStuEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvCurrEduClsStuCond = new clsvCurrEduClsStuEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      objvCurrEduClsStuCond.SetCondFldValue(
        clsvCurrEduClsStuEN.con_IdCurrEduCls,
        clsPubLocalStorage.idCurrEduCls,
        '=',
      );
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineCurrEduClsStuConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvCurrEduClsStuCond.whereCond = strWhereCond;
    return objvCurrEduClsStuCond;
  }
  /** 函数功能:页面导入,当页面开始运行时所发生的事件
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
   **/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      CurrEduClsStuCRUD.CourseIdCache = clsPubLocalStorage.courseId;
      CurrEduClsStuCRUD.CourseIdStatic = clsPubLocalStorage.courseId;

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();
      this.SetEventFunc();
      CurrEduClsStuCRUD.sortvCurrEduClsStuBy = 'eduClsName Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_vCurrEduClsStuCache(this.divList);
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
}
