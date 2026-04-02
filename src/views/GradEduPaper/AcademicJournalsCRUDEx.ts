//import * as QQ from "q";
import $ from 'jquery';
import { AcademicJournals_EditEx } from './AcademicJournals_EditEx';
import { AcademicJournalsEx_ImportDataFromCsv } from '@/ts/L3ForWApiEx/GradEduPaper/clsAcademicJournalsExWApi';
import { AcademicJournalsCRUD } from '@/viewsBase/GradEduPaper/AcademicJournalsCRUD';
import { AcademicJournals_ReFreshCache } from '@/ts/L3ForWApi/GradEduPaper/clsAcademicJournalsWApi';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { confirm_del } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { userStore } from '@/store/modulesShare/user';

declare let strCsv: string;
/* AcademicJournalsCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class AcademicJournalsCRUDEx extends AcademicJournalsCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortAcademicJournalsBy: string = "journalId";
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
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_AcademicJournals]！');
    //this.BindGv_AcademicJournals();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'AcademicJournals':
        this.BindGv_AcademicJournals4Func(this.thisDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: AcademicJournalsCRUDEx;
    if (AcademicJournalsCRUD.objPageCRUD == null) {
      AcademicJournalsCRUD.objPageCRUD = new AcademicJournalsCRUDEx(divLayout);
      objPage = <AcademicJournalsCRUDEx>AcademicJournalsCRUD.objPageCRUD;
    } else {
      objPage = <AcademicJournalsCRUDEx>AcademicJournalsCRUD.objPageCRUD;
    }
    const objPageEdit: AcademicJournals_EditEx = new AcademicJournals_EditEx(
      'AcademicJournals_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    let strMsg = '';

    switch (strCommandName) {
      case 'CloseExcelDiv': //查询记录
        objPage.btnCloseExcelDiv_Click();
        break;
      case 'ImportData': //查询记录
        objPage.btnImportData_Click();
        break;
      case 'ImportDataFromExcel': //查询记录
        objPage.btnImportDataFromExcel_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
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
        objPage.btnCopyRecord_Click();
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
        AccessBtnClickDefault(strCommandName, 'AcademicJournalsCRUDExEx.btn_Click');

        break;
    }
  }

  public async btnCloseExcelDiv_Click() {
    //$("#divImportExcel").css("display", "block");
    $('#divImportExcel').css('display', 'none');
  }
  public async btnImportDataFromExcel_Click() {
    $('#divImportExcel').css('display', 'block');
    //$("#divImportExcel").css("display", "none");
  }
  public async btnImportData_Click() {
    //$("#divImportExcel").css("display", "block");
    //$("#divImportExcel").css("display", "none");

    //AcademicJournals.AcademicJournalsEx_ImportDataFromCsv(csv, strUserId);
    console.log('btnImportData_Click');
    const strCsv1 = strCsv;
    if (IsNullOrEmpty(strCsv1)) {
      const strMsg = `Excel数据为空，请选择一个Excel文件！`;
      console.error('Error: ', strMsg);
      alert(strMsg);
      return;
    }

    const strUserId = userStore.getUserId;

    try {
      const responseText = await AcademicJournalsEx_ImportDataFromCsv(strCsv1, strUserId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        AcademicJournals_ReFreshCache();
        await this.BindGv_AcademicJournals4Func(this.thisDivList);
        const strMsg = `已导入了:[${returnInt}]条记录.`;
        alert(strMsg);
      }
      return returnInt;
    } catch (e: any) {
      const strMsg = `导入Excel不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }
}
