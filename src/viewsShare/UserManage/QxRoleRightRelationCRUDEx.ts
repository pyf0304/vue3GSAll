/**
 * 类名:QxRoleRightRelationCRUDEx(界面:QxRoleRightRelationCRUD)
 * 表名:QxRoleRightRelation(01120957)
 * 版本:2023.12.26.1(服务器:WIN-SRV103-116)
 * 日期:2023/12/29 16:21:38
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { QxRoleRightRelationCRUD } from '@/viewsBase/UserManage/QxRoleRightRelationCRUD';
import { QxRoleRightRelation_EditEx } from '@/viewsShare/UserManage/QxRoleRightRelation_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsQxRoleRightRelationEN } from '@/ts/L0Entity/UserManage/clsQxRoleRightRelationEN';
import { BindTab, SortFun } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { clsQxRoleRightRelationENEx } from '@/ts/L0Entity/UserManage/clsQxRoleRightRelationENEx';
import { clsDataColumn } from '@/ts/PubFun/clsDataColumn';
/** QxRoleRightRelationCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class QxRoleRightRelationCRUDEx extends QxRoleRightRelationCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrSortQxRoleRightRelationBy = "mId";
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
    console.log(strType + strPara);
    this.BindGv_QxRoleRightRelation4Func(this.divList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'QxRoleRightRelation':
        alert('该类没有绑定该函数：[this.BindGv_QxRoleRightRelation4Func]!');
        this.BindGv_QxRoleRightRelation4Func(this.divList);
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
    let objPage: QxRoleRightRelationCRUDEx;
    let objPageEdit;
    if (QxRoleRightRelationCRUD.objPageCRUD == null) {
      QxRoleRightRelationCRUD.objPageCRUD = new QxRoleRightRelationCRUDEx(divLayout);
      objPage = <QxRoleRightRelationCRUDEx>QxRoleRightRelationCRUD.objPageCRUD;
    } else {
      objPage = <QxRoleRightRelationCRUDEx>QxRoleRightRelationCRUD.objPageCRUD;
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
        objPageEdit = new QxRoleRightRelation_EditEx('QxRoleRightRelation_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        QxRoleRightRelationCRUD.EditObj.btnQxRoleRightRelation_Edit_Click(strCommandName, strKeyId);
        break;
      case 'Detail': //详细信息
        QxRoleRightRelationCRUD.DetailObj.btnQxRoleRightRelation_Detail_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new QxRoleRightRelation_EditEx('QxRoleRightRelation_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        QxRoleRightRelationCRUD.EditObj.btnQxRoleRightRelation_Edit_Click(strCommandName, strKeyId);
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
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
        strMsg = `命令:${strCommandName}在函数(QxRoleRightRelationCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  /** 显示QxRoleRightRelation对象的所有属性值
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab4Func)
   * @param divContainer:显示容器
   * @param arrQxRoleRightRelationExObjLst:需要绑定的对象列表
   **/
  public async BindTab_QxRoleRightRelation4Func(
    divContainer: HTMLDivElement,
    arrQxRoleRightRelationExObjLst: Array<clsQxRoleRightRelationENEx>,
  ) {
    const strThisFuncName = this.BindTab_QxRoleRightRelation4Func.name;
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
      {
        fldName: clsQxRoleRightRelationEN.con_mId,
        sortBy: clsQxRoleRightRelationEN.con_mId,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'mId',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 2,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
      {
        fldName: clsQxRoleRightRelationENEx.con_MyRoleName,
        sortBy: clsQxRoleRightRelationENEx.con_MyRoleName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '主角色名',
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
        fldName: clsQxRoleRightRelationENEx.con_RoleName,
        sortBy: clsQxRoleRightRelationENEx.con_RoleName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '角色名',
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
        fldName: clsQxRoleRightRelationENEx.con_PrjName,
        sortBy: clsQxRoleRightRelationENEx.con_PrjName,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: 'PrjName',
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
        fldName: clsQxRoleRightRelationENEx.con_DateTimeSim,
        sortBy: clsQxRoleRightRelationENEx.con_DateTimeSim,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改日期',
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
        fldName: clsQxRoleRightRelationEN.con_UpdUser,
        sortBy: clsQxRoleRightRelationEN.con_UpdUser,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '修改人',
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
        fldName: clsQxRoleRightRelationEN.con_Memo,
        sortBy: clsQxRoleRightRelationEN.con_Memo,
        sortFun: SortFun,
        getDataSource: '',
        colHeader: '备注',
        text: '',
        tdClass: 'text-left',
        columnType: 'Label',
        orderNum: 8,
        funcName: (strKey: string, strText: string) => {
          console.log(strKey, strText);
          return new HTMLElement();
        },
      },
    ];
    try {
      await this.ExtendFldFuncMap(arrQxRoleRightRelationExObjLst, arrDataColumn);
    } catch (e) {
      const strMsg = Format(
        '扩展字段值的映射出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    await BindTab(
      divDataLst,
      arrQxRoleRightRelationExObjLst,
      arrDataColumn,
      clsQxRoleRightRelationEN.con_mId,
      this,
    );
    if (this.objPager.IsInit(divContainer, this.divName4Pager) == false)
      this.objPager.InitShow(divContainer, this.divName4Pager);
    this.objPager.recCount = this.recCount;
    this.objPager.pageSize = this.pageSize;
    this.objPager.ShowPagerV2(divContainer, this, this.divName4Pager);
  }
}
