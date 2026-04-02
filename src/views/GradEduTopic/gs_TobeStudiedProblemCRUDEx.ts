import { message } from '@/utils/myMessage';
import { gs_TobeStudiedProblem_EditEx } from './gs_TobeStudiedProblem_EditEx';
import { gs_TobeStudiedProblemEx_GetProblemDateNumObjLstAsync } from '@/ts/L3ForWApiEx/GradEduTopic/clsgs_TobeStudiedProblemExWApi';
import { gs_TobeStudiedProblemCRUD } from '@/viewsBase/GradEduTopic/gs_TobeStudiedProblemCRUD';
import { gs_TobeStudiedProblem_Edit } from '@/viewsBase/GradEduTopic/gs_TobeStudiedProblem_Edit';
import { clsgs_TobeStudiedProblemEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TobeStudiedProblemEN';
import { clsvgs_TobeStudiedProblemEN } from '@/ts/L0Entity/GradEduTopic/clsvgs_TobeStudiedProblemEN';
import { clsvRTUserRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTUserRelaEN';
import { gs_TobeStudiedProblemVer_Delgs_TobeStudiedProblemVersByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_TobeStudiedProblemVerWApi';
import {
  gs_TobeStudiedProblem_DelRecordAsync,
  gs_TobeStudiedProblem_GetObjLstAsync,
  gs_TobeStudiedProblem_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_TobeStudiedProblemWApi';
import { vRTUserRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTUserRelaWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetButtonObjLstInDivObjN,
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  SetUlHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { userStore } from '@/store/modulesShare/user';
import { vQxUsersSimStore } from '@/store/modulesShare/vQxUserSim';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

/* gs_TobeStudiedProblemCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_TobeStudiedProblemCRUDEx extends gs_TobeStudiedProblemCRUD implements IShowList {
  public static GetPropValue: (strPropName: string) => string;
  public static vuebtn_Click: (strCommandName: string, strKeyId: any) => void;
  public static objLayOut: HTMLDivElement;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvgs_TobeStudiedProblemBy: string = "problemId";
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
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    console.log(strType, strPara);
    this.PageLoad(objLayOut);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'vgs_TobeStudiedProblem':
        alert('该类没有绑定该函数：[this.BindGv_vgs_TobeStudiedProblem_Cache]！');
        //this.BindGv_vgs_TobeStudiedProblemCache();;
        break;
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: gs_TobeStudiedProblemCRUDEx = new gs_TobeStudiedProblemCRUDEx(divLayout);
    const objPageEdit: gs_TobeStudiedProblem_EditEx = new gs_TobeStudiedProblem_EditEx(
      'gs_TobeStudiedProblem_EditEx',
      objPage,
    );
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
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
        AccessBtnClickDefault(strCommandName, 'gs_TobeStudiedProblemCRUDExEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  public async PageLoad(objLayOut: HTMLDivElement) {
    if (objLayOut == null) return;
    gs_TobeStudiedProblemCRUDEx.objLayOut = objLayOut;
    // 在此处放置用户代码以初始化页面
    try {
      // this.divName4List = 'divTobeStudiedProblem';

      // const objDivQuery = GetDivObjInDivObj(objDivLayOut, 'divTobeStudiedProblem');

      gs_TobeStudiedProblem_Edit.IdCurrEduClsStatic = clsPubLocalStorage.idCurrEduCls;
      //if (this.bolIsInitShow == false)  //
      //{
      //    this.objPager.InitShow(this.divName4Pager);
      //    this.bolIsInitShow = true;  //
      //}
      await this.Bind_TobeStudiedProblemList(objLayOut);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
    <returns>条件串(strWhereCond)</returns>
  */
  public async Combinevgs_TobeStudiedProblemCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    let strWhereCond = ` 1 = 1 and topicId='${strTopicId}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.problemTitle_q != '') {
        strWhereCond += ` And ${clsvgs_TobeStudiedProblemEN.con_ProblemTitle} like '%${this.problemTitle_q}%'`;
      }
      if (this.problemDate_q != '') {
        strWhereCond += ` And ${clsvgs_TobeStudiedProblemEN.con_ProblemDate} like '%${this.problemDate_q}%'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0009)在组合查询条件(Combinegs_TobeStudiedProblemCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //待研究问题列表绑定
  public async Bind_TobeStudiedProblemList(objLayOut: HTMLDivElement) {
    const strRoleId = userStore.getRoleId;
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strWhereCond = await this.Combinevgs_TobeStudiedProblemCondition();
    //strWhereCond = " topicId='" + strTopicId + "' and year='" + $("#hidYear").val() + "' and month='" + $("#hidMonth").val() + "'";

    //声明主题变量
    let arrgs_ProblemDateNumObjLst: Array<clsgs_TobeStudiedProblemEN> = [];
    let arrgs_TobeStudiedProblemObjLst1: Array<clsgs_TobeStudiedProblemEN> = [];
    let arrgs_TobeStudiedProblemObjLst2: Array<clsgs_TobeStudiedProblemEN> = [];

    let arrRTUserRelaObjLst: Array<clsvRTUserRelaEN> = [];
    await gs_TobeStudiedProblemEx_GetProblemDateNumObjLstAsync(strWhereCond).then((jsonData) => {
      arrgs_ProblemDateNumObjLst = <Array<clsgs_TobeStudiedProblemEN>>jsonData;
    });

    await gs_TobeStudiedProblem_GetObjLstAsync(strWhereCond).then((jsonData) => {
      arrgs_TobeStudiedProblemObjLst1 = <Array<clsgs_TobeStudiedProblemEN>>jsonData;
    });

    const strWhereCond2 = `topicId ='${strTopicId}'`;
    arrRTUserRelaObjLst = await vRTUserRela_GetObjLstAsync(strWhereCond2);

    let strhtml = '';

    //循环数据源
    strhtml += '<div><th colspan="2">';
    for (let y = 0; y < arrRTUserRelaObjLst.length; y++) {
      const strUserName = arrRTUserRelaObjLst[y].userName;
      const strColorCode = arrRTUserRelaObjLst[y].colorCode;
      //得到显示用户的色码块
      strhtml += `<label style="background: ${strColorCode}">&nbsp;&nbsp;&nbsp;&nbsp;</label>&nbsp;&nbsp;<span>${strUserName}</span>&nbsp;&nbsp;&nbsp;`;
    }
    strhtml += '</th></div>';

    for (let i = 0; i < arrgs_ProblemDateNumObjLst.length; i++) {
      const strProblemDate = arrgs_ProblemDateNumObjLst[i].problemDate;
      strhtml += '<li class="layui-timeline-item">';
      strhtml += '<i class="layui-icon layui-timeline-axis"></i>';
      strhtml += '<div class="layui-timeline-content layui-text">';
      strhtml += `<h3 class="layui-timeline-title">${strProblemDate}</h3>`;

      arrgs_TobeStudiedProblemObjLst2 = arrgs_TobeStudiedProblemObjLst1.filter(
        (x) => x.problemDate == strProblemDate,
      );
      for (let j = 0; j < arrgs_TobeStudiedProblemObjLst2.length; j++) {
        const strKeyId = arrgs_TobeStudiedProblemObjLst2[j].problemId;
        const strProblemTitle = arrgs_TobeStudiedProblemObjLst2[j].problemTitle;
        const strProblemContent = arrgs_TobeStudiedProblemObjLst2[j].problemContent;
        ////处理换行
        //strProblemContent = strProblemContent.replace(/\r\n/g, strBr);
        //strProblemContent = strProblemContent.replace(/\n/g, strBr);

        const strUpdUser = arrgs_TobeStudiedProblemObjLst2[j].updUser;
        const isSubmit = arrgs_TobeStudiedProblemObjLst2[j].isSubmit;
        const versionCount = arrgs_TobeStudiedProblemObjLst2[j].versionCount;
        const strParticipant = arrgs_TobeStudiedProblemObjLst2[j].participant;

        //strhtml += '<h3>' + strProblemTitle + '</h3>';
        //strhtml += '<div>' + strProblemContent + '</div>';
        //strhtml += '<h3><span class="rowtit color1">[问题标题]：</span>' + strProblemTitle + '</h3>';
        strhtml += `<span class="rowtit color1">[问题名称]：</span>${strProblemTitle}`;
        strhtml += '<br/>';
        strhtml += `<span class="rowtit color2">[问题说明]：</span>${strProblemContent}`;
        //strhtml += '<div><span class="rowtit color2">[问题说明]：</span>' + strProblemContent + '</div>';

        strhtml += '<div style="width:100%;height:40px;">';
        strhtml += '<div style="float:left;">';
        const strUserName = await vQxUsersSimStore.getUserName(strUpdUser);
        if (strUserName != '') {
          strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color1">[编辑用户]：</span>${strUserName}`;
        }
        strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color1">[参与者]：</span>${strParticipant}`;
        strhtml += '</div>';
        strhtml += '<div style="float:right;">';
        if (isSubmit == false) {
          strhtml += '&nbsp;<span class="rowtit color2">未提交</span>&nbsp;&nbsp;';
          if (strRoleId != '00620003') {
            //删除
            // onclick=Update_ProblemIsSubmit_Click("${strKeyId}",1)
            const strKeyId0 = `${strKeyId}|1`;
            strhtml += `<button id="Update_ProblemIsSubmit" keyId="${strKeyId0}" title="提交待研究问题" class="layui-btn layui-btn-danger layui-btn-xs"  href="javascript:;"><i class="layui-icon">&#x1005;</i>提交</button>`;
            //删除
            // onclick=btnDelgs_TobeStudiedProblem_Click("${strKeyId}")
            strhtml += `<button id="btnDelgs_TobeStudiedProblem" keyId="${strKeyId}" title="删除待研究问题" class="btn-danger btn btn-sm"  href="javascript:;">${clsIcon.faTrash}</button>`;
          }
          //编辑
          // onclick=btnUpdategs_TobeStudiedProblem_Click("${strKeyId}")
          strhtml += `<button id="btnUpdategs_TobeStudiedProblem" keyId="${strKeyId}" title="编辑待研究问题" class="btn btn-info btn-sm" >${clsIcon.faPenToSquare}</button>`;
        } else {
          strhtml += '&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[已提交]：</span>';
          if ( strRoleId == enumQxRoles.System_Admin_00620001 ||
            strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018) {
            //删除
            // onclick=Update_ProblemIsSubmit_Click("${strKeyId}",0)
            const strKeyId0 = `${strKeyId}|0`;
            strhtml += `<button id="Update_ProblemIsSubmit" keyId="${strKeyId0}" title="撤销提交" class="layui-btn layui-btn-danger layui-btn-xs"  href="javascript:;"><i class="layui-icon">&#xe9aa;</i>撤销提交</button>`;
          }
        }
        strhtml += `&nbsp;&nbsp;<button class="layui-btn layui-btn-warm layui-btn-xs btnRight" onclick="xadmin.open('待研究问题历史版本', '../GradEduEx/HistoricalVersion?Key=${strKeyId}&Type=14')"> ${clsIcon.faCommentDots}历史版本<span class="badge text-bg-info">${versionCount}</span></button >`;
        //判断角色
        //不等于学生，其他角色都可以添加问题
        strhtml += '</div>';

        strhtml += '</div>';
        //strhtml += '</br>';
        strhtml += '<div style="border-bottom: 1px solid #eee;"></div>';
      }
      strhtml += '</div>';
      strhtml += '</li>';
    }

    SetUlHtmlInDivObj(objLayOut, 'TobeStudiedProblemList', strhtml);
    this.SetEventForButtonEvent(objLayOut);
  }
  public SetEventForButtonEvent(objLayOut: HTMLDivElement) {
    {
      const arrBtnSysComment = GetButtonObjLstInDivObjN(objLayOut, 'Update_ProblemIsSubmit');
      for (const Update_ProblemIsSubmit of arrBtnSysComment) {
        if (Update_ProblemIsSubmit != null) {
          const strKeyId = Update_ProblemIsSubmit.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;
          const arr = strKeyId.split('|');
          if (arr.length != 2) continue;
          const objData = { keyId: arr[0], stata: arr[1] };

          (function (objData: any) {
            Update_ProblemIsSubmit.onclick = function () {
              gs_TobeStudiedProblemCRUDEx.vuebtn_Click('Update_ProblemIsSubmit', objData);
            };
          })(objData);
        }
      }
    }
    {
      const arrBtnAddQA = GetButtonObjLstInDivObjN(objLayOut, 'btnDelgs_TobeStudiedProblem');
      for (const btnDelgs_TobeStudiedProblem of arrBtnAddQA) {
        if (btnDelgs_TobeStudiedProblem != null) {
          const strKeyId = btnDelgs_TobeStudiedProblem.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;

          (function (strKeyId: any) {
            btnDelgs_TobeStudiedProblem.onclick = function () {
              gs_TobeStudiedProblemCRUDEx.vuebtn_Click('Delgs_TobeStudiedProblem', strKeyId);
            };
          })(strKeyId);
        }
      }
    }

    {
      const arrBtnAddQA = GetButtonObjLstInDivObjN(objLayOut, 'btnUpdategs_TobeStudiedProblem');
      for (const btnUpdategs_TobeStudiedProblem of arrBtnAddQA) {
        if (btnUpdategs_TobeStudiedProblem != null) {
          const strKeyId = btnUpdategs_TobeStudiedProblem.getAttribute('keyid');
          if (strKeyId == null) continue;
          // const strKeyId = `${strSubViewpointId}|02|${objvPaperSubViewpoint.updUser}|${clsPrivateSessionStorage.paperId}`;

          (function (strKeyId: any) {
            btnUpdategs_TobeStudiedProblem.onclick = function () {
              gs_TobeStudiedProblemCRUDEx.vuebtn_Click('Updategs_TobeStudiedProblem', strKeyId);
            };
          })(strKeyId);
        }
      }
    }
  }
  //待研究问题提交
  public async Update_ProblemIsSubmit_Click(strKeyId: string, stata: number) {
    const strThisFuncName = this.Update_ProblemIsSubmit_Click.name;

    const objgs_TobeStudiedProblemEN: clsgs_TobeStudiedProblemEN = new clsgs_TobeStudiedProblemEN();
    objgs_TobeStudiedProblemEN.problemId = strKeyId;
    if (stata == 0) {
      objgs_TobeStudiedProblemEN.SetIsSubmit(false);
    } else {
      objgs_TobeStudiedProblemEN.SetIsSubmit(true);
    }
    objgs_TobeStudiedProblemEN.sfUpdFldSetStr = objgs_TobeStudiedProblemEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objgs_TobeStudiedProblemEN.problemId == '' ||
      objgs_TobeStudiedProblemEN.problemId == undefined
    ) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await gs_TobeStudiedProblem_UpdateRecordAsync(
        objgs_TobeStudiedProblemEN,
      );
      const returnBool = !!responseText;
      if (returnBool == true) {
        if (stata == 0) {
          message.success('提交撤销成功！');
        } else {
          message.success('待研究问题提交成功！');
        }
        await this.Bind_TobeStudiedProblemList(gs_TobeStudiedProblemCRUDEx.objLayOut);
        //gs_TobeStudiedProblem_ReFreshCache();
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `待研究问题提交不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 
   在数据表里删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
  */
  public async btnDelRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }

      await this.VDelRecord(strKeyId);
      await this.DelRecord(strKeyId);
      await this.Bind_TobeStudiedProblemList(gs_TobeStudiedProblemCRUDEx.objLayOut);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 
   根据关键字删除记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
  */
  public async DelRecord(strProblemId: string) {
    try {
      const responseText = await gs_TobeStudiedProblem_DelRecordAsync(strProblemId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        //gs_TobeStudiedProblem_ReFreshCache();
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        //alert();
        message.success(strInfo);
      } else {
        const strInfo = `删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  //历史版本删除
  public async VDelRecord(arrProblemId: string) {
    try {
      const returnInt: number =
        await gs_TobeStudiedProblemVer_Delgs_TobeStudiedProblemVersByCondAsync(
          `problemId='${arrProblemId}'`,
        );
      if (returnInt > 0) {
        const strInfo = `删除历史版本成功!`;
        ////显示信息框
        //alert(strInfo);
        console.log(strInfo);
      } else {
        const strInfo = `历史版本删除记录不成功!`;
        //显示信息框
        alert(strInfo);
      }
      console.log('完成DelMultiRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
}
