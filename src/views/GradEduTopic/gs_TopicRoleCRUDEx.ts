import $ from 'jquery';
import { gs_TopicRole_EditEx } from './gs_TopicRole_EditEx';
import { gs_TopicRoleEx_AddDefaultSettingsAsync } from '@/ts/L3ForWApiEx/GradEduTopic/clsgs_TopicRoleExWApi';
import { gs_TopicRoleCRUD } from '@/viewsBase/GradEduTopic/gs_TopicRoleCRUD';
import { clsgs_TopicRoleEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TopicRoleEN';
import {
  gs_TopicRole_GetObjLstAsync,
  gs_TopicRole_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_TopicRoleWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  GetInputValueInDivObj,
  HideDivInDivObj,
  ShowDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { gs_TopicRoleCRUDExB_TopicMenuIsHide } from '@/views/GradEduTopic/gs_TopicRoleCRUDExB';
import { userStore } from '@/store/modulesShare/user';

declare function ShowDialogTopicRole(): void;

/* gs_TopicRoleCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_TopicRoleCRUDEx extends gs_TopicRoleCRUD implements IShowList {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortgs_TopicRoleBy: string = "topicRoleId";
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
    this.BindGv_gs_TopicRoleCache(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'gs_TopicRole':
        alert('该类没有绑定该函数：[this.BindGv_gs_TopicRole_Cache]！');
        //this.BindGv_gs_TopicRoleCache();;
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: gs_TopicRoleCRUDEx = new gs_TopicRoleCRUDEx(divLayout);
    const objPageEdit: gs_TopicRole_EditEx = new gs_TopicRole_EditEx(
      'gs_TopicRole_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
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
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
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
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录！`);
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
        AccessBtnClickDefault(strCommandName, 'gs_TopicRoleCRUDExEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  //主题权限设置
  public async btnRoleTool_Click() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    ShowDivInDivObj(objLayOut, 'divLoading');
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strUserId = userStore.getUserId;

    let arrgs_TopicRoleObjLst: Array<clsgs_TopicRoleEN> = [];
    await gs_TopicRole_GetObjLstAsync(`topicId='${strTopicId}' and menuNum not like'%6_%'`).then(
      (jsonData) => {
        arrgs_TopicRoleObjLst = <Array<clsgs_TopicRoleEN>>jsonData;
      },
    );

    if (arrgs_TopicRoleObjLst.length > 0) {
      let strHtml = '';
      strHtml += '<ul>';
      for (let i = 0; i < arrgs_TopicRoleObjLst.length; i++) {
        const strTopicRoleId = arrgs_TopicRoleObjLst[i].topicRoleId;
        const strMenuNum = arrgs_TopicRoleObjLst[i].menuNum;
        const strMenuName = arrgs_TopicRoleObjLst[i].menuName;
        if (arrgs_TopicRoleObjLst[i].menuIsHide == true) {
          strHtml += `<li><input type="checkbox" id="ckb${strMenuNum}" checked="checked" onclick=SubmitTopicRole_Click(this,"${strTopicRoleId}")>${strMenuName}</li>`;
        } else {
          strHtml += `<li><input type="checkbox" id="ckb${strMenuNum}" onclick=SubmitTopicRole_Click(this,"${strTopicRoleId}")>${strMenuName}</li>`;
        }
      }
      strHtml += '</ul>';
      $('#editTopicRoleList').html(strHtml);

      ShowDialogTopicRole();
      HideDivInDivObj(objLayOut, 'divLoading');
    } else {
      try {
        const responseText1 = await gs_TopicRoleEx_AddDefaultSettingsAsync(strTopicId, strUserId);
        const returnBool3 = !!responseText1;
        if (returnBool3 == true) {
          const strInfo = `添加权限设置成功!`;
          //
          //显示信息框
          //message.success(strInfo);
          //alert(strInfo);
          console.log(strInfo);
          this.btnRoleTool_Click();
        } else {
          const strInfo = `添加权限设置出错!`;
          //
          //显示信息框
          //message.success(strInfo);
          alert(strInfo);
          //console.log(strInfo);
          //$("#divLoading").hide();
        }
      } catch (e: any) {
        console.error('catch(e)=');
        console.error(e);
        const strMsg = `添加权限设置异常,${e}.`;
        alert(strMsg);
        HideDivInDivObj(objLayOut, 'divLoading');
      }
    }
  }

  //提交主题权限设置
  public async SubmitTopicRole_Click() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    const strThisFuncName = this.SubmitTopicRole_Click.name;
    const objgs_TopicRoleEN: clsgs_TopicRoleEN = new clsgs_TopicRoleEN();
    objgs_TopicRoleEN.topicRoleId = GetInputValueInDivObj(divName, 'hidTopicRoleId');
    objgs_TopicRoleEN.menuIsHide = Boolean(GetInputValueInDivObj(divName, 'hidMenuIsHide'));
    objgs_TopicRoleEN.sfUpdFldSetStr = objgs_TopicRoleEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objgs_TopicRoleEN.topicRoleId == '' || objgs_TopicRoleEN.topicRoleId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await gs_TopicRole_UpdateRecordAsync(objgs_TopicRoleEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        await this.btnRoleTool_Click();
        await gs_TopicRoleCRUDExB_TopicMenuIsHide();
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  //得到3个关系列表数据；
  public async TopicListMenuIsHide() {
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;

    let arrgs_TopicRoleObjLst: Array<clsgs_TopicRoleEN> = [];
    await gs_TopicRole_GetObjLstAsync(`topicId='${strTopicId}' and menuNum not like'%6_%'`).then(
      (jsonData) => {
        arrgs_TopicRoleObjLst = <Array<clsgs_TopicRoleEN>>jsonData;
      },
    );

    if (arrgs_TopicRoleObjLst.length > 0) {
      for (let i = 0; i < arrgs_TopicRoleObjLst.length; i++) {
        //strIdCurrEduclsstrTopicRoleId = arrgs_TopicRoleObjLst[i].topicRoleId;
        const strMenuNum = arrgs_TopicRoleObjLst[i].menuNum;
        const menuIsHide = arrgs_TopicRoleObjLst[i].menuIsHide;

        switch (strMenuNum) {
          case '1':
            if (menuIsHide == true) {
              $('#liUser').show();
              $('#infoUser').show();
            } else {
              $('#liUser').hide();
              $('#infoUser').hide();
            }
            break;
          case '2':
            if (menuIsHide == true) {
              $('#liResearchPlan').show();
              $('#infoResearchPlan').show();
            } else {
              $('#liResearchPlan').hide();
              $('#infoResearchPlan').hide();
            }
            break;
          case '3':
            if (menuIsHide == true) {
              $('#ligs_ReflectLog').show();
              $('#infogs_ReflectLog').show();
            } else {
              $('#ligs_ReflectLog').hide();
              $('#infogs_ReflectLog').hide();
            }
            break;
          case '4':
            if (menuIsHide == true) {
              $('#liPaper').show();
              $('#infoPaper').show();
            } else {
              $('#liPaper').hide();
              $('#infoPaper').hide();
            }
            break;
          case '6':
            if (menuIsHide == true) {
              $('#divContent_menu2').show();

              $('#infoViewpoint').show();
              $('#infoExpert').show();
              $('#infoConcept').show();
              $('#infoFacts').show();
              $('#infoBasis').show();
              $('#infoSysskill').show();
              $('#infoSysSocialRelations').show();
            } else {
              $('#divContent_menu2').hide();

              $('#infoViewpoint').hide();
              $('#infoExpert').hide();
              $('#infoConcept').hide();
              $('#infoFacts').hide();
              $('#infoBasis').hide();
              $('#infoSysskill').hide();
              $('#infoSysSocialRelations').hide();
            }
            break;
          case '7':
            if (menuIsHide == true) {
              $('#liOriginalPaper').show();
              $('#infoPaper2').show();
            } else {
              $('#liOriginalPaper').hide();
              $('#infoPaper2').hide();
            }
            break;
          //case "8":
          //    if (menuIsHide == true) {
          //        $("#liMeetingMinutes").show();
          //    } else {
          //        $("#liMeetingMinutes").hide();
          //    }
          //    break;
          //case "9":
          //    if (menuIsHide == true) {
          //        $("#liPaperReport").show();
          //    } else {
          //        $("#liPaperReport").hide();
          //    }
          //    break;
          //case "10":
          //    if (menuIsHide == true) {
          //        $("#liTobeStudiedProblem").show();
          //    } else {
          //        $("#liTobeStudiedProblem").hide();
          //    }
          //    break;
          //case "11":
          //    if (menuIsHide == true) {
          //        $("#liResearchResult").show();
          //    } else {
          //        $("#liResearchResult").hide();
          //    }
          //    break;
        }
      }
    } else {
      $('#liUser').show();
      $('#infoUser').show();

      $('#liResearchPlan').show();
      $('#infoResearchPlan').show();

      $('#ligs_ReflectLog').show();
      $('#infogs_ReflectLog').show();

      $('#liPaper').show();
      $('#infoPaper').show();

      $('#divContent_menu2').show();
      $('#infoViewpoint').show();
      $('#infoExpert').show();
      $('#infoConcept').show();
      $('#infoFacts').show();
      $('#infoBasis').show();
      $('#infoSysskill').show();
      $('#infoSysSocialRelations').show();

      $('#liOriginalPaper').show();
      $('#infoPaper2').show();
    }
  }
}
