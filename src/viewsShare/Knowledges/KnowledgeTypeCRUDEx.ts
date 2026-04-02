import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { KnowledgeType_EditEx } from '@/viewsShare/Knowledges/KnowledgeType_EditEx';
import { KnowledgeTypeCRUD } from '@/viewsBase/Knowledges/KnowledgeTypeCRUD';
/** KnowledgeTypeCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export default class KnowledgeTypeCRUDEx extends KnowledgeTypeCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortKnowledgeTypeBy = "KnowledgeTypeId";
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
    alert(`该类没有绑定该函数：[this.BindGv_KnowledgeType]!${strType}${strPara}`);
    //this.BindGv_KnowledgeType4Func();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'KnowledgeType':
        this.BindGv_KnowledgeType4Func(this.thisDivList);
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
    let objPage: KnowledgeTypeCRUDEx;
    let objPageEdit;
    if (KnowledgeTypeCRUD.objPageCRUD == null) {
      KnowledgeTypeCRUD.objPageCRUD = new KnowledgeTypeCRUDEx(divLayout);
      objPage = <KnowledgeTypeCRUDEx>KnowledgeTypeCRUD.objPageCRUD;
    } else {
      objPage = <KnowledgeTypeCRUDEx>KnowledgeTypeCRUD.objPageCRUD;
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
        objPageEdit = new KnowledgeType_EditEx('KnowledgeType_EditEx', objPage);

        KnowledgeTypeCRUD.EditObj.btnKnowledgeType_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new KnowledgeType_EditEx('KnowledgeType_EditEx', objPage);

        KnowledgeTypeCRUD.EditObj.btnKnowledgeType_Edit_Click(strCommandName, strKeyId);
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
        strMsg = `命令:strCommandName在函数(KnowledgeTypeCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
