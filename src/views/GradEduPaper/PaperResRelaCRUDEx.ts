/**
 * 类名:PaperResRelaCRUDEx(界面:PaperResRelaCRUD)
 * 表名:PaperResRela(01120964)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/22 00:49:30
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { PaperResRelaCRUD } from '@/viewsBase/GradEduPaper/PaperResRelaCRUD';
import { PaperResRela_EditEx } from '@/views/GradEduPaper/PaperResRela_EditEx';
import {
  GetCheckedKeyLstsInDiv,
  GetCheckedKeyLstsInDivObj,
  GetFirstCheckedKeyLstInDiv,
  GetFirstCheckedKeyLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { PaperResRela_SplitKeyLst } from '@/ts/L3ForWApi/GradEduPaper/clsPaperResRelaWApi';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** PaperResRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class PaperResRelaCRUDEx extends PaperResRelaCRUD implements IShowList {
  //public static mstrSortPaperResRelaBy = "PaperId";
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
    console.log('InitVarSet in PaperResRelaCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in PaperResRelaCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType + strPara);
    this.BindGv_PaperResRela4Func(this.divList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'PaperResRela':
        alert('该类没有绑定该函数：[this.BindGv_PaperResRela4Func]!');
        //this.BindGv_PaperResRela4Func(this.divList);
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
    let objPage: PaperResRelaCRUDEx;
    let objPageEdit;
    if (PaperResRelaCRUD.objPageCRUD == null) {
      PaperResRelaCRUD.objPageCRUD = new PaperResRelaCRUDEx(divLayout);
      objPage = <PaperResRelaCRUDEx>PaperResRelaCRUD.objPageCRUD;
    } else {
      objPage = <PaperResRelaCRUDEx>PaperResRelaCRUD.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyLsts = GetCheckedKeyLstsInDivObj(objPage.divList);
    let objKeyLst;
    let strKeyLst = '';
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new PaperResRela_EditEx('PaperResRela_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        PaperResRelaCRUD.EditObj.btnPaperResRela_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new PaperResRela_EditEx('PaperResRela_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        strKeyLst = GetFirstCheckedKeyLstInDivObj(objPage.divList);
        PaperResRelaCRUD.EditObj.btnPaperResRela_Edit_Click(strCommandName, strKeyLst);
        break;
      case 'ExportExcel': //导出Excel
        objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通!");
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyLsts.length == 0) {
          alert(`请选择需要删除的[${objPage.thisTabName}]记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:${strCommandName}在函数(PaperResRelaCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
