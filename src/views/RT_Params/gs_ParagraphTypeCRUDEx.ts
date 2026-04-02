/**
 * 类名:gs_ParagraphTypeCRUDEx(界面:gs_ParagraphTypeCRUD)
 * 表名:gs_ParagraphType(01120746)
 * 版本:2023.08.23.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/26 11:09:33
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培参数(RT_Params)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { gs_ParagraphTypeCRUD } from '@/viewsBase/RT_Params/gs_ParagraphTypeCRUD';
import { gs_ParagraphType_EditEx } from '@/views/RT_Params/gs_ParagraphType_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** gs_ParagraphTypeCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class gs_ParagraphTypeCRUDEx extends gs_ParagraphTypeCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortgs_ParagraphTypeBy = "ParagraphTypeId";
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
    alert(`该类没有绑定该函数：[this.BindGv_gs_ParagraphType]!${strType}${strPara}`);
    //this.BindGv_gs_ParagraphTypeCache();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'gs_ParagraphType':
        this.BindGv_gs_ParagraphTypeCache(this.thisDivList);
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
    let objPage: gs_ParagraphTypeCRUDEx;
    let objPageEdit;
    if (gs_ParagraphTypeCRUD.objPageCRUD == null) {
      gs_ParagraphTypeCRUD.objPageCRUD = new gs_ParagraphTypeCRUDEx(divLayout);
      objPage = <gs_ParagraphTypeCRUDEx>gs_ParagraphTypeCRUD.objPageCRUD;
    } else {
      objPage = <gs_ParagraphTypeCRUDEx>gs_ParagraphTypeCRUD.objPageCRUD;
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
        objPageEdit = new gs_ParagraphType_EditEx('gs_ParagraphType_EditEx', objPage);

        gs_ParagraphTypeCRUD.EditObj.btngs_ParagraphType_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new gs_ParagraphType_EditEx('gs_ParagraphType_EditEx', objPage);

        gs_ParagraphTypeCRUD.EditObj.btngs_ParagraphType_Edit_Click(strCommandName, strKeyId);
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
        strMsg = `命令:strCommandName在函数(gs_ParagraphTypeCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
