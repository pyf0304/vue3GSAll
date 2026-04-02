import $ from 'jquery';
import { gs_TeacherTaskCRUD } from '@/viewsBase/GradEduTopic/gs_TeacherTaskCRUD';
import { clsgs_TeacherTaskEN } from '@/ts/L0Entity/GradEduTopic/clsgs_TeacherTaskEN';
import {
  gs_TeacherTask_DelRecordAsync,
  gs_TeacherTask_GetObjLstByPagerAsync,
  gs_TeacherTask_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_TeacherTaskWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetA_Empty,
  GetBr_Empty,
  GetButton_Empty,
  GetCheckedKeyIdsInDivObj,
  GetDiv_Empty,
  GetI_Empty,
  GetInputValueInDivObjN,
  GetLi_Empty,
  GetSpan_Empty,
  GetUl_Empty,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { clsIcon } from '@/ts/PubFun/clsIcon';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

/* gs_TeacherTaskCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
//export class gs_TeacherTaskCRUDEx extends gs_TeacherTaskCRUD {
export class gs_TeacherTaskCRUDEx extends gs_TeacherTaskCRUD {
  public static vuebtn_Click: (strCommandName: string, strKeyId: string) => void;

  public static divLayOut: HTMLDivElement;
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortgs_TeacherTaskBy: string = "mId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }

  public recCount = 0;

  //布置任务
  public mstrListDivgs_TeacherTask = 'divDataLst4gs_TeacherTask';
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
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    console.log(strKeyId);
    const objPage: gs_TeacherTaskCRUDEx = new gs_TeacherTaskCRUDEx(divLayout);
    let objLayOut;
    if (gs_TeacherTaskCRUDEx.divLayOut != null) objLayOut = gs_TeacherTaskCRUDEx.divLayOut;
    else objLayOut = objPage.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;

    let divDataLst;
    const div1 = GetDivObjInDivObj(objLayOut, 'divDataLst4gs_TeacherTask');
    if (div1 != null) divDataLst = div1;
    else {
      const div2 = GetDivObjInDivObj(objLayOut, 'divDataLst');
      if (div2 != null) divDataLst = div2;
      else {
        const strMsg = `在当前界面，层:divDataLst, divDataLst4gs_TeacherTask都不存在！`;
        console.error(strMsg);
        alert(strMsg);
        return;
      }
    }
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);

    switch (strCommandName) {
      case 'Query': //查询记录
        //objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        //objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        break;
      // case 'Updategs_TeacherTask':
      //   // ------------------------------------
      //   break;
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
        //objPage.btnDelRecord_Click();
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
        AccessBtnClickDefault(strCommandName, 'gs_TeacherTaskCRUDExEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  //////////////////////////////////////------------------------------ 教师任务布置

  //教师任务
  public async liTeacherTaskClick(divLayout: HTMLDivElement, divDataLst: HTMLDivElement) {
    try {
      //教师布置任务
      await this.BindGv_gs_TeacherTask(divLayout, divDataLst);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取客观依据列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_gs_TeacherTask(objDivLayOut: HTMLDivElement, divDataLst: HTMLDivElement) {
    // const strListDiv: string = this.mstrListDivgs_TeacherTask;
    // const objDivLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objDivLayOut == null) return;
    if (divDataLst == null) return;

    // const divName = GetDivObjInDivObj(objDivLayOut, this.mstrListDivgs_TeacherTask);
    const strWhereCond = await this.Combinegs_TeacherTaskCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrgs_TeacherTaskObjLst: Array<clsgs_TeacherTaskEN> = [];
    try {
      this.recCount = await gs_TeacherTask_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: gs_TeacherTaskCRUD.sortgs_TeacherTaskBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      await gs_TeacherTask_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
        arrgs_TeacherTaskObjLst = <Array<clsgs_TeacherTaskEN>>jsonData;
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }

    try {
      this.BindTab_gs_TeacherTaskB(objDivLayOut, divDataLst, arrgs_TeacherTaskObjLst);
      console.log('完成BindGv_gs_TeacherTask!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  /* 显示gs_TeacherTask对象的所有属性值
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindTab)
 <param name = "divContainer">显示容器</param>
 <param name = "arrgs_TeacherTaskObjLst">需要绑定的对象列表</param>
*/
  public async BindTab_gs_TeacherTaskBB(
    objLayOut: HTMLDivElement,
    divContainer: HTMLDivElement,
    arrgs_TeacherTaskObjLst: Array<clsgs_TeacherTaskEN>,
  ) {
    // const objLayOut = this.getDivName(enumDivType.LayOut_01);
    // if (objLayOut == null) return;
    let strhtml = '';

    strhtml += '<div class="info" id="infoTeacherTask"><div class="title btn-4">';

    strhtml +=
      '<div style="float:left;"><a href="javascript:void(0)" title="任务布置">任务布置</a></div>';

    strhtml += '</div><ul class="artlist">';
    let v = 0; //给内容加个序号
    for (let i = 0; i < arrgs_TeacherTaskObjLst.length; i++) {
      //得到MId；
      // const strmId = arrgs_TeacherTaskObjLst[i].mId;
      v++;
      strhtml += `<li><span class="rowtit color4">${v}.[任务说明]：</span><span class="abstract-text">${arrgs_TeacherTaskObjLst[i].missionStatement}</span></li>`;

      strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[任务要求]：</span><span class="abstract-text">${arrgs_TeacherTaskObjLst[i].missionRequirement}</span></li>`;

      strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[操作]：';

      strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[发布时间]：${arrgs_TeacherTaskObjLst[i].updDate}</span>`;

      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="gsTeacherTaskDel" style="float:right;" title="删除" class="layui-btn-danger layui-btn layui-btn layui-btn-xs" onclick="btnDelgs_TeacherTask_Click(${arrgs_TeacherTaskObjLst[i].mId})" > <i class="layui-icon" >&#xe640;</i>移除</button>`;
        strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="gsTeacherTaskUpd" style="float:right;" title="修改" class="layui-btn layui-btn layui-btn layui-btn-xs" onclick=btn_Click('Updategs_TeacherTask','${arrgs_TeacherTaskObjLst[i].mId}') > ${clsIcon.faCommentDots}修改</button>`;
      } else if (userStore.getRoleId == '00620002') {
        //登录用户和upduser一致则显示；
        if (arrgs_TeacherTaskObjLst[i].updUser == userStore.getUserId) {
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="gsTeacherTaskDel" style="float:right;" title="删除" class="layui-btn-danger layui-btn layui-btn layui-btn-xs" onclick="btnDelgs_TeacherTask_Click(${arrgs_TeacherTaskObjLst[i].mId})" > <i class="layui-icon" >&#xe640;</i>移除</button>`;
          strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="gsTeacherTaskUpd" style="float:right;" title="修改" class="layui-btn layui-btn layui-btn layui-btn-xs" onclick=btnUpdategs_TeacherTask_Click("${arrgs_TeacherTaskObjLst[i].mId}") > ${clsIcon.faCommentDots}修改</button>`;
        }
      }
      strhtml += '</span></li>';

      strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
    }

    strhtml += '</ul></div>';

    //拼接；
    $('#divDataLst4gs_TeacherTask').html(strhtml);

    if (arrgs_TeacherTaskObjLst.length > 10) {
      $('#divgs_TeacherTask').show();
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
    }
  }
  public async BindTab_gs_TeacherTaskB(
    objLayOut: HTMLDivElement,
    divContainer: HTMLDivElement,
    arrgs_TeacherTaskObjLst: Array<clsgs_TeacherTaskEN>,
  ) {
    // const objLayOut = this.getDivName(enumDivType.LayOut_01);
    // if (objLayOut == null) return;
    // let strhtml = '';

    // strhtml += '<div class="info" id="infoTeacherTask"><div class="title btn-4">';
    const divInfo = GetDiv_Empty('info');
    divInfo.id = 'infoTeacherTask';
    const divRoot = GetDiv_Empty('title btn-4');
    divInfo.appendChild(divRoot);
    // strhtml += '<div style="float:left;"><a href="javascript:void(0)" title="任务布置">任务布置</a></div>';
    const divLeft = GetDiv_Empty('');
    divLeft.style.float = 'left';
    const aTask = GetA_Empty('');
    aTask.href = 'javascript:void(0)';
    aTask.title = '任务布置';
    aTask.innerText = '任务布置';
    divLeft.appendChild(aTask);
    divRoot.appendChild(divLeft);
    // strhtml += '</div><ul class="artlist">';
    const ulArtList = GetUl_Empty('artlist');
    let v = 0; //给内容加个序号
    for (let i = 0; i < arrgs_TeacherTaskObjLst.length; i++) {
      //得到MId；
      // const strmId = arrgs_TeacherTaskObjLst[i].mId;
      v++;
      // strhtml += `<li><span class="rowtit color4">${v}.[任务说明]：</span><span class="abstract-text">${arrgs_TeacherTaskObjLst[i].missionStatement}</span></li>`;
      const li1 = GetLi_Empty('');
      const spnMissionStatement0 = GetSpan_Empty('rowtit color4');
      spnMissionStatement0.innerText = `${v}.[任务说明]：`;
      const spnMissionStatement1 = GetSpan_Empty('abstract-text');
      spnMissionStatement1.innerText = arrgs_TeacherTaskObjLst[i].missionStatement;
      li1.appendChild(spnMissionStatement0);
      li1.appendChild(spnMissionStatement1);
      ulArtList.appendChild(li1);
      // strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[任务要求]：</span><span class="abstract-text">${arrgs_TeacherTaskObjLst[i].missionRequirement}</span></li>`;
      const li2 = GetLi_Empty('');
      const spnMissionRequirement0 = GetSpan_Empty('rowtit color4 ml-3');
      spnMissionRequirement0.innerText = `[任务要求]：`;
      const spnMissionRequirement1 = GetSpan_Empty('abstract-text');
      spnMissionRequirement1.innerText = arrgs_TeacherTaskObjLst[i].missionRequirement;
      li2.appendChild(spnMissionRequirement0);
      li2.appendChild(spnMissionRequirement1);
      ulArtList.appendChild(li2);
      // strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[操作]：';
      const li3 = GetLi_Empty('');
      const spnOp0 = GetSpan_Empty('rowtit color4 ml-3');
      spnOp0.innerText = `[操作]：`;
      li3.appendChild(spnOp0);
      // strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[发布时间]：${arrgs_TeacherTaskObjLst[i].updDate}</span>`;
      // const li4 = GetLi_Empty('');
      const spnUpdDate0 = GetSpan_Empty('rowtit color4 ml-3');
      spnUpdDate0.innerText = `[发布时间]：`;
      const spnUpdDate1 = GetSpan_Empty('abstract-text');
      spnUpdDate1.innerText = arrgs_TeacherTaskObjLst[i].updDate;
      li3.appendChild(spnUpdDate0);
      li3.appendChild(spnUpdDate1);
      const btnUpdate = GetButton_Empty('layui-btn layui-btn layui-btn layui-btn-xs');
      btnUpdate.title = '修改';
      btnUpdate.id = 'gsTeacherTaskUpd';
      btnUpdate.style.float = 'right';
      const iUpd = GetI_Empty('layui-icon'); //      ${clsIcon.faCommentDots}
      iUpd.innerHTML = '&#xe642;';
      btnUpdate.appendChild(iUpd);
      btnUpdate.innerText = '修改';

      const btnDelete = GetButton_Empty('layui-btn-danger layui-btn layui-btn layui-btn-xs');
      btnDelete.id = 'gsTeacherTaskDel';
      btnDelete.style.float = 'right';
      btnDelete.title = '删除';
      const iDel = GetI_Empty('layui-icon'); //      ${clsIcon.faCommentDots}
      iDel.innerHTML = '&#xe640;';
      btnDelete.appendChild(iUpd);
      btnDelete.innerText = '删除';

      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="gsTeacherTaskDel" style="float:right;" title="删除" class="layui-btn-danger layui-btn layui-btn layui-btn-xs" onclick="btnDelgs_TeacherTask_Click(${arrgs_TeacherTaskObjLst[i].mId})" > <i class="layui-icon" >&#xe640;</i>移除</button>`;
        (function (strKeyId: number, divLayout: HTMLDivElement) {
          btnDelete.onclick = function () {
            gs_TeacherTaskCRUDEx.DelRec(strKeyId, divLayout);
          };
        })(arrgs_TeacherTaskObjLst[i].mId, this.divLayout);
        // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="gsTeacherTaskUpd" style="float:right;" title="修改" class="layui-btn layui-btn layui-btn layui-btn-xs" onclick=btn_Click('Updategs_TeacherTask','${arrgs_TeacherTaskObjLst[i].mId}') > ${clsIcon.faCommentDots}修改</button>`;
        (function (strKeyId: number) {
          btnUpdate.onclick = function () {
            gs_TeacherTaskCRUDEx.UpdRec(strKeyId);
          };
        })(arrgs_TeacherTaskObjLst[i].mId);
      } else if (userStore.getRoleId == '00620002') {
        //登录用户和upduser一致则显示；
        if (arrgs_TeacherTaskObjLst[i].updUser == userStore.getUserId) {
          // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="gsTeacherTaskDel" style="float:right;" title="删除" class="layui-btn-danger layui-btn layui-btn layui-btn-xs" onclick="btnDelgs_TeacherTask_Click(${arrgs_TeacherTaskObjLst[i].mId})" > <i class="layui-icon" >&#xe640;</i>移除</button>`;
          // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="gsTeacherTaskUpd" style="float:right;" title="修改" class="layui-btn layui-btn layui-btn layui-btn-xs" onclick=btnUpdategs_TeacherTask_Click("${arrgs_TeacherTaskObjLst[i].mId}") > ${clsIcon.faCommentDots}修改</button>`;
        }
      }
      // strhtml += '</span></li>';
      li3.appendChild(btnDelete);
      li3.appendChild(btnUpdate);

      ulArtList.appendChild(li3);
      // strhtml += '</br><div style="border-bottom: 1px solid #eee;"></div></br>';
      const br1 = GetBr_Empty();
      const divBottom = GetDiv_Empty('');
      divBottom.style.borderBottom = 'border-bottom: 1px solid #eee;';
      ulArtList.appendChild(br1);
      ulArtList.appendChild(divBottom);
      const br2 = GetBr_Empty();
      ulArtList.appendChild(br2);
    }

    // strhtml += '</ul></div>';
    divRoot.appendChild(ulArtList);

    //拼接；
    const divName = GetDivObjInDivObj(objLayOut, 'divDataLst4gs_TeacherTask');
    divName.innerHTML = '';
    // $('#divDataLst4gs_TeacherTask').html(strhtml);
    divName.appendChild(divInfo);
    if (arrgs_TeacherTaskObjLst.length > 10) {
      $('#divgs_TeacherTask').show();
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
    }
  }
  public static async DelRec(strKeyId: number, divLayout: HTMLDivElement) {
    alert(`DelRec strKeyId:${strKeyId}`);
    const objPage: gs_TeacherTaskCRUDEx = new gs_TeacherTaskCRUDEx(divLayout);
    objPage.btnDelgs_TeacherTask_Click(strKeyId.toString());
  }
  public static async UpdRec(strKeyId: number) {
    alert('UpdRec');
    gs_TeacherTaskCRUDEx.vuebtn_Click('Updategs_TeacherTask', strKeyId.toString());
  }
  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async Combinegs_TeacherTaskCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1  and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond = ` 1=1 And ${clsgs_TeacherTaskEN.con_TopicId} = '${strTopicId}'`;
      }
      //判断角色
      //管理员
      if (
        userStore.getRoleId == enumQxRoles.System_Admin_00620001 ||
        userStore.getRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        $('#btnAddgs_TeacherTask').show();
      } else if (userStore.getRoleId == '00620002') {
        //教师
        $('#btnAddgs_TeacherTask').show();
      } else {
        //学生；
        $('#btnAddgs_TeacherTask').hide();
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combinegs_TeacherTaskCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  // /*
  //  * 设置排序字段-相当使用ViewState功能
  //  */
  // public set hidSortgs_TeacherTaskBy(value: string) {
  //   const divName = this.getDivName(enumDivType.LayOut_01);
  //   SetInputValueInDivObj(divName, 'hidSortgs_TeacherTaskBy', value);
  // }
  // /*
  //  * 设置排序字段
  //  */
  // public get hidSortgs_TeacherTaskBy(): string {
  //   const divName = this.getDivName(enumDivType.LayOut_01);
  //   return GetInputValueInDivObj(divName, 'hidSortgs_TeacherTaskBy');
  // }

  /* 
在数据表里删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
*/
  public async btnDelgs_TeacherTask_Click(strKeyId: string) {
    let objLayOut;
    if (gs_TeacherTaskCRUDEx.divLayOut != null) objLayOut = gs_TeacherTaskCRUDEx.divLayOut;
    else objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }

      //得到当前登录的教师角色
      const strRoleId = userStore.getRoleId;
      if (strRoleId == '00620003') {
        //提示学生不可删除数据；
        const strInfo = `您权限不够，不可删除`;
        //显示信息框
        alert(strInfo);
        return;
      } else {
        const lngKeyId = Number(strKeyId);
        await this.Delgs_TeacherTaskRecord(lngKeyId);

        const divName = GetDivObjInDivObj(objLayOut, this.mstrListDivgs_TeacherTask);
        await this.BindGv_gs_TeacherTask(objLayOut, divName);
      }
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
  public async Delgs_TeacherTaskRecord(lngmId: number) {
    try {
      const responseText = await gs_TeacherTask_DelRecordAsync(lngmId);
      const returnInt: number = responseText;
      if (returnInt > 0) {
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
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

  /*
   * 获取当前页序号
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }
}
