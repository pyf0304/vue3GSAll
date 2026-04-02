//import * as QQ from "q";
import { gs_UserConfigCRUD } from '@/viewsBase/ExamMan/gs_UserConfigCRUD';
import { gs_UserConfig_EditEx } from '@/views/ExamMan/gs_UserConfig_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
/** gs_UserConfigCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class gs_UserConfigCRUDEx extends gs_UserConfigCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortvgs_UserConfigBy = "ConfigId";
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
    alert(`该类没有绑定该函数：[this.BindGv_vgs_UserConfig]!${strType}${strPara}`);
    //this.BindGv_vgs_UserConfigCache();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'vgs_UserConfig':
        this.BindGv_vgs_UserConfigCache(this.thisDivList);
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
    let objPage: gs_UserConfigCRUDEx;
    let objPageEdit;
    if (gs_UserConfigCRUD.objPageCRUD == null) {
      gs_UserConfigCRUD.objPageCRUD = new gs_UserConfigCRUDEx(divLayout);
      objPage = <gs_UserConfigCRUDEx>gs_UserConfigCRUD.objPageCRUD;
    } else {
      objPage = <gs_UserConfigCRUDEx>gs_UserConfigCRUD.objPageCRUD;
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
        objPageEdit = new gs_UserConfig_EditEx('gs_UserConfig_EditEx', objPage);

        gs_UserConfigCRUD.EditObj.btngs_UserConfig_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new gs_UserConfig_EditEx('gs_UserConfig_EditEx', objPage);

        gs_UserConfigCRUD.EditObj.btngs_UserConfig_Edit_Click(strCommandName, strKeyId);
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
        strMsg = `命令:strCommandName在函数(gs_UserConfigCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
}
