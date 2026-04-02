/**
 * 类名:CurrEduClsTeacherCRUDEx(界面:CurrEduClsTeacherCRUD)
 * 表名:CurrEduClsTeacher(01120124)
 * 版本:2023.10.12.1(服务器:PYF-THINKPAD)
 * 日期:2023/11/03 16:27:22
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
import { CurrEduClsTeacherCRUD } from '@/viewsBase/DailyRunning/CurrEduClsTeacherCRUD';
import { CurrEduClsTeacher_EditEx } from '@/viewsShare/DailyRunning/CurrEduClsTeacher_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsvCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherEN';
import { Format } from '@/ts/PubFun/clsString';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { GetCurrPageIndex, ShowEmptyRecNumInfoByDiv } from '@/ts/PubFun/clsOperateList';
import { clsCurrEduClsTeacherEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsTeacherEN';
import { clsvCurrEduClsTeacherENEx } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsTeacherENEx';
import { vCurrEduClsTeacher_GetRecCountByCondCache } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { vCurrEduClsTeacherEx_GetObjExLstByPagerCache } from '@/ts/L3ForWApiExShare/DailyRunning/clsvCurrEduClsTeacherExWApi';
import { BindTab_V, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
/** CurrEduClsTeacherCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class CurrEduClsTeacherCRUDEx extends CurrEduClsTeacherCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrSortvCurrEduClsTeacherBy = "IdEduClsTeacher";
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
    alert(`该类没有绑定该函数：[this.BindGv_vCurrEduClsTeacher]!${strType}${strPara}`);
    //this.BindGv_vCurrEduClsTeacherCache();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'vCurrEduClsTeacher':
        this.BindGv_vCurrEduClsTeacherCache(this.divList);
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
    let objPage: CurrEduClsTeacherCRUDEx;
    let objPageEdit;
    if (CurrEduClsTeacherCRUD.objPageCRUD == null) {
      CurrEduClsTeacherCRUD.objPageCRUD = new CurrEduClsTeacherCRUDEx(divLayout);
      objPage = <CurrEduClsTeacherCRUDEx>CurrEduClsTeacherCRUD.objPageCRUD;
    } else {
      objPage = <CurrEduClsTeacherCRUDEx>CurrEduClsTeacherCRUD.objPageCRUD;
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
        objPageEdit = new CurrEduClsTeacher_EditEx('CurrEduClsTeacher_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        CurrEduClsTeacherCRUD.EditObj.btnCurrEduClsTeacher_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new CurrEduClsTeacher_EditEx('CurrEduClsTeacher_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        CurrEduClsTeacherCRUD.EditObj.btnCurrEduClsTeacher_Edit_Click(strCommandName, strKeyId);
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
        strMsg = `命令:${strCommandName}在函数(CurrEduClsTeacherCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async CombinevCurrEduClsTeacherConditionObj(): Promise<clsvCurrEduClsTeacherEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objvCurrEduClsTeacherCond = new clsvCurrEduClsTeacherEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      objvCurrEduClsTeacherCond.SetCondFldValue(
        clsvCurrEduClsTeacherEN.con_IdCurrEduCls,
        clsPubLocalStorage.idCurrEduCls,
        'like',
      );
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(CombineCurrEduClsTeacherConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objvCurrEduClsTeacherCond.whereCond = strWhereCond;
    return objvCurrEduClsTeacherCond;
  }
  /** 根据条件获取相应的对象列表
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGvCache)
   **/
  public async BindGv_vCurrEduClsTeacherCache(divList: HTMLDivElement) {
    const strThisFuncName = this.BindGv_vCurrEduClsTeacherCache.name;
    if (CurrEduClsTeacherCRUD.sortvCurrEduClsTeacherBy == null) {
      const strMsg = Format(
        '在显示列表时,排序字段(sortvCurrEduClsTeacherBy)为空,请检查!(In BindGv_vCurrEduClsTeacherCache)',
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    CurrEduClsTeacherCRUD.IdCurrEduClsCache = clsPubLocalStorage.idCurrEduCls;

    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const objvCurrEduClsTeacherCond = await this.CombinevCurrEduClsTeacherConditionObj();
    const strWhereCond = JSON.stringify(objvCurrEduClsTeacherCond);
    let intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvCurrEduClsTeacherExObjLst: Array<clsvCurrEduClsTeacherENEx> = [];
    try {
      this.recCount = await vCurrEduClsTeacher_GetRecCountByCondCache(
        objvCurrEduClsTeacherCond,
        CurrEduClsTeacherCRUD.IdCurrEduClsCache,
      );
      if (this.recCount == 0) {
        const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
        lblMsg.innerHTML = Format(
          '根据条件:[{0}]获取的对象列表数为0!',
          objvCurrEduClsTeacherCond.whereCond,
        );
        const divDataLst: HTMLDivElement = <HTMLDivElement>document.getElementById('divDataLst');
        if (divDataLst != null) {
          divDataLst.innerText = '';
          divDataLst.appendChild(lblMsg);
        }
        const strMsg = Format(
          '在绑定GvCache过程中,根据条件:[{0}]获取的对象列表数为0!',
          objvCurrEduClsTeacherCond.whereCond,
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
        x = x;
        y = y;
        return 0;
      };
      if (CurrEduClsTeacherCRUD.sortFunStatic != undefined) {
        strSortFun = CurrEduClsTeacherCRUD.sortFunStatic(CurrEduClsTeacherCRUD.ascOrDesc4SortFun);
      }
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: CurrEduClsTeacherCRUD.sortvCurrEduClsTeacherBy,
        sortFun: strSortFun,
      };
      arrvCurrEduClsTeacherExObjLst = await vCurrEduClsTeacherEx_GetObjExLstByPagerCache(
        objPagerPara,
        CurrEduClsTeacherCRUD.IdCurrEduClsCache,
      );
    } catch (e) {
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
    const divPager: HTMLDivElement = <HTMLDivElement>document.getElementById('divPager');
    if (this.recCount <= this.pageSize) {
      if (divPager != null) {
        divPager.style.display = 'none';
      }
    } else {
      if (divPager != null) {
        divPager.style.display = 'block';
      }
    }
    if (arrvCurrEduClsTeacherExObjLst.length == 0) {
      const lblMsg: HTMLSpanElement = <HTMLSpanElement>document.createElement('span');
      lblMsg.innerHTML = '根据条件获取的对象列表数为0!';
      if (divDataLst != null) {
        divDataLst.innerText = '';
        divDataLst.appendChild(lblMsg);
      }
      const strKey = Format(
        '{0}_{1}',
        clsCurrEduClsTeacherEN._CurrTabName,
        CurrEduClsTeacherCRUD.IdCurrEduClsCache,
      );
      const strMsg = Format('根据条件获取的记录数为0!(Key={0})', strKey);
      console.error('Error: ', strMsg);
      //console.trace();
      ShowEmptyRecNumInfoByDiv(divList, strMsg);
      this.objPager.Hide(divList, this.divName4Pager);
      return;
    }
    try {
      await this.BindTab_vCurrEduClsTeacher(divList, arrvCurrEduClsTeacherExObjLst);
      //console.log("完成BindGv_vCurrEduClsTeacherCache!");
    } catch (e) {
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
  /** 显示vCurrEduClsTeacher对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
   * @param divContainer:显示容器
   * @param arrCurrEduClsTeacherObjLst:需要绑定的对象列表
   **/
  public async BindTab_vCurrEduClsTeacher(
    divContainer: HTMLDivElement,
    arrvCurrEduClsTeacherObjLst: Array<clsvCurrEduClsTeacherEN>,
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
      //   fldName: clsvCurrEduClsTeacherEN.con_EduClsName,
      //   sortBy: 'eduClsName',
      //   sortFun: SortFun,
      //   getDataSource: '',
      //   colHeader: '教学班名',
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
        fldName: clsvCurrEduClsTeacherEN.con_TeacherId,
        sortBy: clsvCurrEduClsTeacherEN.con_TeacherId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '工号',
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
        fldName: clsvCurrEduClsTeacherEN.con_TeacherName,
        sortBy: 'teacherName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '教师姓名',
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
        fldName: clsvCurrEduClsTeacherEN.con_CollegeName,
        sortBy: 'collegeName',
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学院名',
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
        fldName: clsvCurrEduClsTeacherEN.con_SchoolTerm,
        sortBy: clsvCurrEduClsTeacherEN.con_SchoolTerm,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学期',
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
        fldName: clsvCurrEduClsTeacherEN.con_SchoolYear,
        sortBy: clsvCurrEduClsTeacherEN.con_SchoolYear,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '学年',
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
        fldName: clsvCurrEduClsTeacherEN.con_UpdDate,
        sortBy: clsvCurrEduClsTeacherEN.con_UpdDate,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '编辑日期',
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
        fldName: clsvCurrEduClsTeacherEN.con_UpdUser,
        sortBy: clsvCurrEduClsTeacherEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '编辑人',
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
      arrvCurrEduClsTeacherObjLst,
      arrDataColumn,
      clsvCurrEduClsTeacherEN.con_IdEduClsTeacher,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
}
