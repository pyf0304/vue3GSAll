import { IShowList } from '@/ts/PubFun/IShowList';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
// import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { gs_PaperReport_EditEx } from '@/views/GradEduTopic/gs_PaperReport_EditEx';
import { gs_PaperReportCRUD } from '@/viewsBase/GradEduTopic/gs_PaperReportCRUD';

export function gs_PaperReportCRUDExC_btn_Click(strCommandName: string, strKeyId: string) {
  const objPage: gs_PaperReportCRUDExC = new gs_PaperReportCRUDExC();
  const objPageEdit: gs_PaperReport_EditEx = new gs_PaperReport_EditEx(
    'gs_PaperReport_EditEx',
    objPage,
  );
  const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
  strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
  console.log(arrKeyIds, objPageEdit);
  switch (strCommandName) {
    case 'Query': //查询记录
      // objPage.btnQuery_Click();
      break;
    case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      //objPageEdit.btnAddNewRecordWithMaxId_Click();
      break;
    case 'CreateWithMaxId': //添加记录使用最大关键字
      //objPageEdit.btnAddNewRecordWithMaxId_Click();
      break;
    case 'AddNewRecord': //添加记录
    case 'Create': //添加记录
      // objPageEdit.btnAddNewRecord_Click();
      break;
    case 'UpdateRecord': //修改记录
    case 'Update': //修改记录
      if (strKeyId == '') {
        alert('请选择需要修改的记录！');
        return;
      }
      // objPageEdit.btnUpdateRecord_Click(strKeyId);
      break;

    default:
      // AccessBtnClickDefault(strCommandName, 'gs_PaperReportCRUDExEx.btn_Click');
      break;
  }
}

/* gs_PaperReportCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PaperReportCRUDExC extends gs_PaperReportCRUD implements IShowList {
  public divName4Pager_ReportEdit = 'divPaperReportEdit';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvgs_PaperReportBy: string = "reportId";
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
    // this.PageLoad();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'vgs_PaperReport':
        alert('该类没有绑定该函数：[this.BindGv_vgs_PaperReport_Cache]！');
        //this.BindGv_vgs_PaperReportCache();;
        break;
    }
  }

  //public GetPaperReport_PPT_PDF() {
  //    strIdCurrEduclsstrPapeId = $("#hidPaperId").val();
  //    //this.keyId = strPaperRWId;
  //    const strWhereCond = ` ${clsPaperAttachmentEN.con_PaperId} = '${strPapeId}'`;
  //    strIdCurrEduclsarrPaperAttachmentObjLst: Array<clsPaperAttachmentEN> = [];
  //    try {
  //        const responseText = PaperAttachment_GetObjLstAsync(strWhereCond).then((jsonData) => {
  //            arrPaperAttachmentObjLst = <Array<clsPaperAttachmentEN>>jsonData;
  //            for (let i = 0; i < arrPaperAttachmentObjLst.length; i++) {

  //                strfilepath = strAddressAndPort + arrPaperAttachmentObjLst[i].filePath;
  //                doDownLoad(strfilepath, arrPaperAttachmentObjLst[i].paperAttachmentName);
  //            }
  //        });

  //    }
  //    catch (e:any) {
  //        console.error(e);
  //        strIdCurrEduclsstrMsg: string = `根据关键字获取相应的记录的对象不成功,${e}.`;
  //        alert(strMsg);
  //    }
  //}

  // //论文汇报提交
  // public async UpdateIsSubmit_Click(strKeyId: string, stata: number) {
  //   const strThisFuncName = this.UpdateIsSubmit_Click.name;
  //   const objgs_PaperReportEN: clsgs_PaperReportEN = new clsgs_PaperReportEN();
  //   objgs_PaperReportEN.reportId = strKeyId;
  //   if (stata == 0) {
  //     objgs_PaperReportEN.SetIsSubmit(false);
  //   } else {
  //     objgs_PaperReportEN.SetIsSubmit(true);
  //   }
  //   objgs_PaperReportEN.sfUpdFldSetStr = objgs_PaperReportEN.updFldString; //设置哪些字段被修改(脏字段)
  //   if (objgs_PaperReportEN.reportId == '' || objgs_PaperReportEN.reportId == undefined) {
  //     throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
  //   }
  //   try {
  //     const responseText = await gs_PaperReport_UpdateRecordAsync(objgs_PaperReportEN);
  //     const returnBool = !!responseText;
  //     if (returnBool == true) {
  //       if (stata == 0) {
  //         message.success('提交撤销成功！');
  //       } else {
  //         message.success('会议提交成功！');
  //       }
  //       await this.Bind_PaperReportList();
  //       //gs_PaperReport_ReFreshCache();
  //     }
  //     return returnBool;
  //   } catch (e:any) {
  //     console.error('catch(e)=');
  //     console.error(e);
  //     const strMsg = `会议提交不成功,${e}.`;
  //     alert(strMsg);
  //     return false;
  //   }
  // }

  // /*
  //  在数据表里删除记录
  //  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
  // */
  // public async btnDelRecordInTab_Click(strKeyId: string) {
  //   try {
  //     if (strKeyId == '') {
  //       alert(`请选择需要删除的${objPage.thisTabName}记录！`);
  //       return '';
  //     }

  //     await this.DelRecord(strKeyId);
  //     await this.Bind_PaperReportList();
  //   } catch (e:any) {
  //     console.error('catch(e)=');
  //     console.error(e);
  //     const strMsg = `删除记录不成功. ${e}.`;
  //     alert(strMsg);
  //   }
  // }

  // /*
  //  根据关键字删除记录
  //   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
  // */
  // public async DelRecord(strReportId: string) {
  //   try {
  //     const responseText = await gs_PaperReport_DelRecordAsync(strReportId);
  //     const returnInt: number = responseText;
  //     if (returnInt > 0) {
  //       //gs_PaperReport_ReFreshCache();
  //       const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
  //       //显示信息框
  //       //alert();
  //       message.success(strInfo);
  //     } else {
  //       const strInfo = `删除记录不成功!`;
  //       //显示信息框
  //       alert(strInfo);
  //     }
  //     console.log('完成DelRecord!');
  //   } catch (e:any) {
  //     console.error('catch(e)=');
  //     console.error(e);
  //     const strMsg = `删除记录不成功. ${e}.`;
  //     alert(strMsg);
  //   }
  // }
}
