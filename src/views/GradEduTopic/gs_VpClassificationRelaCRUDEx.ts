/**
 * 类名:gs_VpClassificationRelaCRUDEx(界面:gs_VpClassificationRelaCRUD)
 * 表名:gs_VpClassificationRela(01120777)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/23 18:09:28
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { gs_VpClassificationRelaCRUD } from '@/viewsBase/GradEduTopic/gs_VpClassificationRelaCRUD';
import { gs_VpClassificationRela_EditEx } from '@/views/GradEduTopic/gs_VpClassificationRela_EditEx';
import {
  GetCheckedKeyLstsInDiv,
  GetCheckedKeyLstsInDivObj,
  GetFirstCheckedKeyLstInDiv,
  GetFirstCheckedKeyLstInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { gs_VpClassificationRela_SplitKeyLst } from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationRelaWApi';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** gs_VpClassificationRelaCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class gs_VpClassificationRelaCRUDEx
  extends gs_VpClassificationRelaCRUD
  implements IShowList
{
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static GetPropValue: (strPropName: string) => string;
  //public static mstrSortgs_VpClassificationRelaBy = "TopicId";
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
    console.log('InitVarSet in gs_VpClassificationRelaCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in gs_VpClassificationRelaCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    alert(`该类没有绑定该函数：[this.BindGv_gs_VpClassificationRela]!${strType}${strPara}`);
    
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'gs_VpClassificationRela':
        this.BindGv_gs_VpClassificationRela4Func(this.divList);
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
    let objPage: gs_VpClassificationRelaCRUDEx;
    let objPageEdit;
    if (gs_VpClassificationRelaCRUD.objPageCRUD == null) {
      gs_VpClassificationRelaCRUD.objPageCRUD = new gs_VpClassificationRelaCRUDEx(divLayout);
      objPage = <gs_VpClassificationRelaCRUDEx>gs_VpClassificationRelaCRUD.objPageCRUD;
    } else {
      objPage = <gs_VpClassificationRelaCRUDEx>gs_VpClassificationRelaCRUD.objPageCRUD;
    }
    let strMsg = '';
    const arrKeyLsts = GetCheckedKeyLstsInDivObj(objPage.divList);
    let objKeyLst;
    let strKeyLst = '';
    strKeyLst = GetFirstCheckedKeyLstInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new gs_VpClassificationRela_EditEx('gs_VpClassificationRela_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        gs_VpClassificationRelaCRUD.EditObj.btngs_VpClassificationRela_Edit_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'Detail': //详细信息
        gs_VpClassificationRelaCRUD.DetailObj.btngs_VpClassificationRela_Detail_Click(
          strCommandName,
          strKeyId,
        );
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new gs_VpClassificationRela_EditEx('gs_VpClassificationRela_EditEx', objPage); //初始化编辑类,设置当前类为编辑类的父类，编辑返回的类
        console.log(objPageEdit);
        gs_VpClassificationRelaCRUD.EditObj.btngs_VpClassificationRela_Edit_Click(
          strCommandName,
          strKeyLst,
        );
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
        strMsg = `命令:${strCommandName}在函数(gs_VpClassificationRelaCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
