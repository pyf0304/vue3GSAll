import $ from 'jquery';
import { gs_ReflectLog_EditEx } from './gs_ReflectLog_EditEx';
import { gs_ReflectLogCRUD } from '@/viewsBase/GradEduTopic/gs_ReflectLogCRUD';
import { clsgs_ReflectLogEN } from '@/ts/L0Entity/GradEduTopic/clsgs_ReflectLogEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  gs_ReflectLog_GetObjLstByPagerAsync,
  gs_ReflectLog_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsgs_ReflectLogWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetA_Empty,
  GetBr_Empty,
  GetButton_Empty,
  GetCheckedKeyIdsInDivObj,
  GetDiv_Empty,
  GetFirstCheckedKeyIdInDivObj,
  GetI_Empty,
  GetLi_Empty,
  GetSpan_Empty,
  GetUl_Empty,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IShowList } from '@/ts/PubFun/IShowList';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { userStore } from '@/store/modulesShare/user';

/* gs_ReflectLogCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_ReflectLogCRUDEx extends gs_ReflectLogCRUD implements IShowList {
  public static vuebtn_Click: (strCommandName: string, strKeyId: string) => void;
  public divName4Pager_ReflectLog = 'divPager4gsReflectLog';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortgs_ReflectLogBy: string = "mId";
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
    this.BindGv_gs_ReflectLog(objLayOut);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);
    switch (strType) {
      case 'gs_ReflectLog':
        alert('该类没有绑定该函数：[this.BindGv_gs_ReflectLog_Cache]！');
        this.BindGv_gs_ReflectLogCache(this.thisDivList);
        break;
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_Old_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
 <returns>条件串(strWhereCond)</returns>
*/
  public async Combinegs_ReflectLogCondition(): Promise<string> {
    //if (this.ReflectLogName_q != "") {
    //    strWhereCond += ` And ${clsgs_ReflectLogEN.con_ReflectLogName} like '%${this.ReflectLogName_q}%'`;
    //}
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //判断主题id
      const strTopicId = clsPrivateSessionStorage.topicIdInTree;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsgs_ReflectLogEN.con_TopicId} = '${strTopicId}'`;
      }
      //判断角色
      //管理员
      if (userStore.getRoleId == '00620002') {
        //教师
      } else {
        //学生；
        strWhereCond += ` And ${clsgs_ReflectLogEN.con_UpdUser} = '${userStore.getUserId}'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combinegs_ResearchPlanCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }

    return strWhereCond;
  }

  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_Old_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_gs_ReflectLog(objLayOut: HTMLDivElement) {
    if (objLayOut == null) return;
    if (this.bolIsInitShow == false) {
      //
      this.objPager.InitShow(objLayOut, this.divName4Pager_ReflectLog);
      this.bolIsInitShow = true; //
    }

    const strWhereCond = await this.Combinegs_ReflectLogCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrgs_ReflectLogObjLst: Array<clsgs_ReflectLogEN> = [];
    let arrvUsersObjLst: Array<clsvUsersSimEN> = [];
    try {
      this.recCount = await gs_ReflectLog_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: gs_ReflectLogCRUD.sortgs_ReflectLogBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      await gs_ReflectLog_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
        arrgs_ReflectLogObjLst = <Array<clsgs_ReflectLogEN>>jsonData;
      });

      //获取用户缓存数据；

      const strWhere_User = '1=1';
      arrvUsersObjLst = await vUsersSim_GetObjLstAsync(strWhere_User);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    try {
      this.Bindgs_ReflectLog(objLayOut, arrgs_ReflectLogObjLst, arrvUsersObjLst);
      console.log('完成BindGv_gs_ReflectLog!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  public async Bindgs_ReflectLog(
    objLayOut: HTMLDivElement,
    arrgs_ReflectLogObjLst: Array<clsgs_ReflectLogEN>,
    arrvUsersObjLst: Array<clsvUsersSimEN>,
  ) {
    if (objLayOut == null) return;
    // let strhtml = '';
    // strhtml += '<div class="info1" id="infogs_ReflectLog"><div class="title btn-4">';
    const divInfo = GetDiv_Empty('info');
    divInfo.id = 'infogs_ReflectLog';
    const divRoot = GetDiv_Empty('title btn-4');
    divInfo.appendChild(divRoot);

    // strhtml += '<div style="float:left;"><a href="javascript:void(0)" title="反思">反思</a></div>';
    const divLeft = GetDiv_Empty('');
    divLeft.style.float = 'left';
    const aTask = GetA_Empty('');
    aTask.href = 'javascript:void(0)';
    aTask.title = '反思';
    aTask.innerText = '反思';
    divLeft.appendChild(aTask);
    divRoot.appendChild(divLeft);

    // strhtml += '</div><ul class="artlist">';
    const ulArtList = GetUl_Empty('artlist');
    let v = 0; //给内容加个序号
    for (let i = 0; i < arrgs_ReflectLogObjLst.length; i++) {
      const objgs_ReflectLog = arrgs_ReflectLogObjLst[i];
      //得到MId；
      // const strmId = arrgs_ReflectLogObjLst[i].mId;
      v++;
      // strhtml += `<li><span class="rowtit color4">${v}.[名称]：</span><span class="abstract-text">${arrgs_ReflectLogObjLst[i].reflectLogName}</span></li>`;
      const li1 = GetLi_Empty('');
      const spnReflectLogName0 = GetSpan_Empty('rowtit color4');
      spnReflectLogName0.innerText = `${v}.[名称]：`;
      const spnReflectLogName1 = GetSpan_Empty('abstract-text');
      spnReflectLogName1.innerText = objgs_ReflectLog.reflectLogName;
      li1.appendChild(spnReflectLogName0);
      li1.appendChild(spnReflectLogName1);
      ulArtList.appendChild(li1);

      // strhtml += `<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color4">[内容]：</span><span class="abstract-text">${arrgs_ReflectLogObjLst[i].reflectLogContent}</span></li>`;
      const li2 = GetLi_Empty('');
      const spnReflectLogContent0 = GetSpan_Empty('rowtit color4');
      spnReflectLogContent0.innerText = `${v}.[内容]：`;
      const spnReflectLogContent1 = GetSpan_Empty('abstract-text');
      spnReflectLogContent1.innerText = objgs_ReflectLog.reflectLogContent;
      li2.appendChild(spnReflectLogContent0);
      li2.appendChild(spnReflectLogContent1);
      ulArtList.appendChild(li2);

      //获取引用人；编辑人、用户名称
      //strIdCurrEduclsarrUsers: Array<clsvUsersSimEN> = await Users_GetObjLstAsync("1=1");
      let arrvUsers: Array<clsvUsersSimEN> = [];
      let UpdUserName = ''; //编辑人

      //获取技能编辑人；
      arrvUsers = arrvUsersObjLst.filter((x) => x.userId == arrgs_ReflectLogObjLst[i].updUser); //编辑人
      for (let j = 0; j < arrvUsers.length; j++) {
        UpdUserName = arrvUsers[j].userName;
        break;
      }

      // strhtml += '<li>&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[操作]：';
      const li5 = GetLi_Empty('');
      const spnOp0 = GetSpan_Empty('rowtit color4 ml-3');
      spnOp0.innerText = `[操作]：`;
      li5.appendChild(spnOp0);

      // strhtml += `&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[操作时间]：${arrgs_ReflectLogObjLst[i].updDate}</span>`;
      const spnUpdDate0 = GetSpan_Empty('rowtit color4 ml-3');
      spnUpdDate0.innerText = `[操作时间]：`;
      const spnUpdDate1 = GetSpan_Empty('abstract-text');
      spnUpdDate1.innerText = objgs_ReflectLog.updDate;
      li5.appendChild(spnUpdDate0);
      li5.appendChild(spnUpdDate1);

      // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="rowtit color3">[用户]：</span>${UpdUserName}`;
      const spnUpdUser0 = GetSpan_Empty('rowtit color4 ml-3');
      spnUpdUser0.innerText = `[操作时间]：`;
      const spnUpdUser1 = GetSpan_Empty('abstract-text');
      spnUpdUser1.innerText = UpdUserName;
      li5.appendChild(spnUpdUser0);
      li5.appendChild(spnUpdUser1);
      // --
      const btnUpdate = GetButton_Empty('layui-btn layui-btn layui-btn layui-btn-xs');
      btnUpdate.title = '修改';
      btnUpdate.id = 'gsReflectLogUpd';
      btnUpdate.style.float = 'right';
      const iUpd = GetI_Empty('layui-icon'); //      ${clsIcon.faCommentDots}
      iUpd.innerHTML = '&#xe642;';
      btnUpdate.appendChild(iUpd);
      btnUpdate.innerText = '修改';
      (function (strKeyId: number) {
        btnUpdate.onclick = function () {
          gs_ReflectLogCRUDEx.UpdRec(strKeyId);
        };
      })(objgs_ReflectLog.mId);

      const btnDelete = GetButton_Empty('layui-btn-danger layui-btn layui-btn layui-btn-xs');
      btnDelete.id = 'gsReflectLogDel';
      btnDelete.style.float = 'right';
      btnDelete.title = '删除';
      const iDel = GetI_Empty('layui-icon'); //      ${clsIcon.faCommentDots}
      iDel.innerHTML = '&#xe640;';
      btnDelete.appendChild(iUpd);
      btnDelete.innerText = '删除';
      (function (strKeyId: number, objLayOut: HTMLDivElement) {
        btnDelete.onclick = function () {
          gs_ReflectLogCRUDEx.DelRec(strKeyId, objLayOut);
        };
      })(objgs_ReflectLog.mId, objLayOut);

      if (userStore.getRoleId == '00620003') {
        //登录用户和upduser一致则显示；
        if (arrgs_ReflectLogObjLst[i].updUser == userStore.getUserId) {
          // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="gsTeacherTaskDel" style="float:right;" title="删除" class="layui-btn-danger layui-btn layui-btn layui-btn-xs" onclick="btnDelgs_ReflectLog_Click(${arrgs_ReflectLogObjLst[i].mId})" > <i class="layui-icon" >&#xe640;</i>移除</button>`;
          // strhtml += Format(
          //   '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="gsTeacherTaskUpd" style="float:right;" title="修改" class="layui-btn layui-btn layui-btn layui-btn-xs" onclick=btn_Click(\'{0}\',\'{1}\') > <i class="layui-icon" >& #xe642; </i>修改</button > ',
          //   'Updategs_ReflectLog',
          //   arrgs_ReflectLogObjLst[i].mId,
          // );
        }
      } else {
        // strhtml += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="gsTeacherTaskDel" style="float:right;" title="删除" class="layui-btn-danger layui-btn layui-btn layui-btn-xs" onclick="btnDelgs_ReflectLog_Click(${arrgs_ReflectLogObjLst[i].mId})" > <i class="layui-icon" >&#xe640;</i>移除</button>`;
        // strhtml += Format(
        //   '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id="gsTeacherTaskUpd" style="float: right; " title="修改" class="layui-btn layui-btn layui-btn layui-btn-xs" onclick=btn_Click(\'{0}\',\'{1}\') > ${clsIcon.faCommentDots}修改</button>',
        //   'Updategs_ReflectLog',
        //   arrgs_ReflectLogObjLst[i].mId,
        // );
      }

      // strhtml += '</span></li>';
      li5.appendChild(btnDelete);
      li5.appendChild(btnUpdate);
      ulArtList.appendChild(li5);
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
    // $('#divDataLst4gsReflectLog').html(strhtml);
    const divName = GetDivObjInDivObj(objLayOut, 'divDataLst4gsReflectLog');
    divName.innerHTML = '';
    divName.appendChild(divInfo);

    if (arrgs_ReflectLogObjLst.length > 10) {
      $('#divPager4gsReflectLog').show();
      this.objPager.recCount = this.recCount;
      this.objPager.pageSize = this.pageSize;
      this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager_ReflectLog);
    }
  }

  public static async DelRec(strKeyId: number, divLayout: HTMLDivElement) {
    // alert(`DelRec strKeyId:${strKeyId}`);
    const objPage: gs_ReflectLogCRUDEx = new gs_ReflectLogCRUDEx(divLayout);
    objPage.btnDelRecordInTab_Click(strKeyId.toString());
  }
  public static async UpdRec(strKeyId: number) {
    // alert('UpdRec');
    gs_ReflectLogCRUDEx.vuebtn_Click('Updategs_ReflectLog', strKeyId.toString());
  }
  /* 
在数据表里删除记录
(AutoGCLib.WA_ViewScriptCS_Old_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
*/
  public async btnDelRecordInTab_Click(strKeyId: string) {
    let objLayOut = this.divLayout;
    if (objLayOut == null) {
      const objLayOut0 = this.getDivName(enumDivType.LayOut_01);
      if (objLayOut0 == null) return;
      objLayOut = objLayOut0;
    }
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      const lngKeyId = Number(strKeyId);
      await this.DelRecord(lngKeyId);
      await this.BindGv_gs_ReflectLog(objLayOut);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
    */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: gs_ReflectLogCRUDEx = new gs_ReflectLogCRUDEx(divLayout);
    const objPageEdit: gs_ReflectLog_EditEx = new gs_ReflectLog_EditEx(
      'gs_ReflectLog_EditEx',
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
        AccessBtnClickDefault(strCommandName, 'gs_ReflectLogCRUDExEx.btn_Click');

        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }
}
