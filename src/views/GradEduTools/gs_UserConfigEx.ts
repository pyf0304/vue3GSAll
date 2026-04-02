import $ from 'jquery';
import { gs_UserConfigEx_GetAddConfig } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { gs_UserConfigCRUD } from '@/viewsBase/ExamMan/gs_UserConfigCRUD';
import { clsgs_UserConfigEN } from '@/ts/L0Entity/ExamMan/clsgs_UserConfigEN';
import { clsvgs_UserConfigEN } from '@/ts/L0Entity/ExamMan/clsvgs_UserConfigEN';
import { clsgs_ShareEN } from '@/ts/L0Entity/RT_Params/clsgs_ShareEN';
import { clsvUsersSimEN } from '@/ts/L0Entity/UserManage/clsvUsersSimEN';
import {
  gs_UserConfig_GetObjByConfigIdAsync,
  gs_UserConfig_UpdateRecordAsync,
} from '@/ts/L3ForWApi/ExamMan/clsgs_UserConfigWApi';
import { vgs_UserConfig_GetObjLstAsync } from '@/ts/L3ForWApi/ExamMan/clsvgs_UserConfigWApi';
import {
  gs_Share_GetObjByShareIdAsync,
  gs_Share_GetObjLstAsync,
} from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { vUsersSim_GetObjLstAsync } from '@/ts/L3ForWApi/UserManage/clsvUsersSimWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { userStore } from '@/store/modulesShare/user';

/* gs_UserConfigCRUD 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class gs_UserConfigEx extends gs_UserConfigCRUD {
  public mstrListDiv = 'divDataLst';
  public bolIsLoadEditRegion = false; //记录是否导入编辑区的变量
  public bolIsLoadDetailRegion = false; //记录是否导入详细信息区的变量
  public divName4Edit = 'divEdit'; //编辑区的Id
  public divName4Detail = 'divDetail'; //详细信息区的Id

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;

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
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      //// 为查询区绑定下拉框
      //await this.BindDdl4QueryRegion();
      //获取当前用户 查询配置表，不存在数据则默认赋值等；
      await this.SelectConfigAddSave();
      this.hidSortvgs_UserConfigBy = 'configTypeName Asc';
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(objLayOut, this.divName4Pager);
        this.bolIsInitShow = true; //
      }
      ////2、显示无条件的表内容在GridView中
      await this.BindGv_gs_UserConfig();
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  //用户查询当前用户是否有配置信息 没有则默认赋值等；
  public async SelectConfigAddSave() {
    try {
      const responseText2 = await gs_UserConfigEx_GetAddConfig(userStore.getUserId);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        console.log('配置查询完成');
      } else {
        console.error('配置查询失败');
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
   <returns>条件串(strWhereCond)</returns>
 */
  public Combinevgs_UserConfig(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //学生 判断角色
      if (userStore.getRoleId == '00620003') {
        strWhereCond += ` and updUser ='${userStore.getUserId}'`;
      } else {
        //管理员 教师
        //strWhereCond += ` And ${clsvgs_UserConfigEN.con_ con_IdCurrEduCls} = '${clsPubLocalStorage.idCurrEduCls}'`;
      }

      strWhereCond += ' order by updDate Desc';
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(Combinevgs_UserConfig)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 根据条件获取相应的对象列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   */
  public async BindGv_gs_UserConfig() {
    const strWhereCond = await this.Combinevgs_UserConfig();
    // const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrgs_UserConfigObjLst: Array<clsvgs_UserConfigEN> = [];
    let arrgs_ShareObjLst: Array<clsgs_ShareEN> = [];
    let arrUsers: Array<clsvUsersSimEN> = [];
    try {
      arrgs_UserConfigObjLst = await vgs_UserConfig_GetObjLstAsync(strWhereCond);

      //获取分享权限的下拉框
      arrgs_ShareObjLst = await gs_Share_GetObjLstAsync('1=1');

      //获取用户名称；根据id；
      const strWhere_User = '1=1';
      arrUsers = await vUsersSim_GetObjLstAsync(strWhere_User);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }
    try {
      let strhtml = '';
      // const cateid = 0;
      //$('#tbList tr').remove();

      for (let i = 0; i < arrgs_UserConfigObjLst.length; i++) {
        const configId = arrgs_UserConfigObjLst[i].configId;
        const strConfigTypeId: string = arrgs_UserConfigObjLst[i].configTypeId;
        const strConfigTypeName: string = arrgs_UserConfigObjLst[i].configTypeName;
        const strShareId = arrgs_UserConfigObjLst[i].shareId;
        const strShareName: string = arrgs_UserConfigObjLst[i].shareName;
        const strDataTableId: string = arrgs_UserConfigObjLst[i].dataTableId;
        const strDataTable: string = arrgs_UserConfigObjLst[i].dataTable;

        const strUpdUser = arrgs_UserConfigObjLst[i].updUser;
        const strUpdDate: string = arrgs_UserConfigObjLst[i].updDate;

        strhtml += '<tr>';
        strhtml += `<td>${strConfigTypeId}</td>`;
        strhtml += `<td>${strConfigTypeName}</td>`;

        const gs_ShareObj = arrgs_ShareObjLst.find((x) => x.shareId == strShareId);
        if (gs_ShareObj != null) {
          //strhtml += '<td> <select id="ddlShardId' + configId + '" name = "ddlShardId" class="form-control" style = "width:170px;" onchange="ddlShardIdfunc(' + configId + ')" >';
          //strhtml += '<td> <div class="TopNameMenu" style = "width:25%;float:left;border:1px solid #dee2e6;line-height: 2.5;margin-top:5px;margin-left:1px;" >';
          strhtml += '<td>';
          strhtml += '<ul class="layui-nav left fast-add" lay - filter="" id = "paperId" >';
          strhtml += '<li class="layui-nav-item" >';
          strhtml += '<a href="javascript:;" >';
          strhtml += `<div style="width:100%;  line-height: 2.5;margin-top:10px;" onclick=ShardIdfunc("${configId}","${strShareId}") >`;
          strhtml += `<span id = "paperTitle${configId}" >${strShareName}</span>`;
          strhtml += ' </div></a>';

          strhtml += `<select id="ddlShardId${configId}" name ="ddlShardId" class="form-control" style = "width:170px;display:none;" onchange=BtnShardName_Click("${configId}",this.options[this.options.selectedIndex].value)>`;
          //for循环共享对象
          for (let k = 0; k < arrgs_ShareObjLst.length; k++) {
            //如果过滤的shardId 和循环的id匹配，那么则默认显示当前循环的Id
            //if (gs_ShareObj.shareId == arrgs_ShareObjLst[k].shareId) {
            //    //strhtml += ' <option value=' + arrgs_ShareObjLst[k].shareId + ' onclick="ShardIdfunc(' + arrgs_ShareObjLst[k].shareId + ',' + configId + ')" >' + arrgs_ShareObjLst[k].shareName + '</option>';
            //    strhtml += ' <option value=' + arrgs_ShareObjLst[k].shareId + '>' + arrgs_ShareObjLst[k].shareName + '</option>';
            //    // $('#ddlShardId' + configId + ').find("option[value=' + arrgs_ShareObjLst[k].shareId + ']").prop("selected",true);

            //    // $('#selectId' + configId + ' option[value=' + arrgs_ShareObjLst[k].shareId + ']').prop("selected", true);

            //}
            //else {
            //    strhtml += ' <option value=' + arrgs_ShareObjLst[k].shareId + '>' + arrgs_ShareObjLst[k].shareName + '</option>';
            //}
            strhtml += ` <option value=${arrgs_ShareObjLst[k].shareId}>${arrgs_ShareObjLst[k].shareName}</option>`;

            //  strhtml += '<dd><a onclick=BtnShardName_Click("' + arrgs_ShareObjLst[k].shareId + '","' + configId + '","'+arrgs_ShareObjLst[k].shareName+'")> ' + arrgs_ShareObjLst[k].shareName + '</a></dd>';
          }
          strhtml += '</li></ul>';
          //strhtml += '</dl></li></ul>';
          //strhtml += '</select></td>';
          //  $('#selectId' + configId + ').prop(selectedIndex', k);
        }
        // strhtml += '<td>' + strShareId + '</td>';
        //strhtml += '<td>' + strShareName + '</td>';
        strhtml += `<td>${strDataTableId}</td>`;
        strhtml += `<td>${strDataTable}</td>`;
        //获取用户名；
        const arrUserName = arrUsers.filter((x) => x.userId == strUpdUser); //专家观点；
        for (let j = 0; j < arrUserName.length; j++) {
          strhtml += `<td>${arrUserName[j].userName}</td>`;
          break;
        }
        strhtml += `<td>${strUpdDate}</td>`;

        strhtml += '</tr>';
      }
      //拼接；
      $('#tbList1').html(strhtml);

      console.log('完成BindGv_gs_UserConfig!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
  //点击下拉框
  public async BtnShardName_Click(strkey: string, strShardId: string) {
    //$("#hidshardIdId").val(strShardId);
    $('#hidConfigId').val(strkey);
    //通过ID查询得到修改实体数据；
    const responseObj1 = await gs_Share_GetObjByShareIdAsync(strShardId);
    const objgs_ShareEN: clsgs_ShareEN = <clsgs_ShareEN>responseObj1;
    if (objgs_ShareEN != null) {
      $(`#paperTitle${strkey}`).val(objgs_ShareEN.shareName);
    }

    //通过ID查询得到修改实体数据；
    const responseObj = await gs_UserConfig_GetObjByConfigIdAsync(Number(strkey));
    const objgs_UserConfigEN: clsgs_UserConfigEN = <clsgs_UserConfigEN>responseObj;
    if (objgs_UserConfigEN != null) {
      //获取下拉框选中的值

      const objgs_UserConfigUpdEN: clsgs_UserConfigEN = new clsgs_UserConfigEN();
      objgs_UserConfigUpdEN.configId = Number(strkey);
      objgs_UserConfigUpdEN.SetShareId(strShardId);
      objgs_UserConfigUpdEN.sfUpdFldSetStr = objgs_UserConfigUpdEN.updFldString; //设置哪些字段被修改(脏字段)
      const responseText3 = await gs_UserConfig_UpdateRecordAsync(objgs_UserConfigUpdEN);
      const returnBool = !!responseText3;
      if (returnBool == true) {
        const strInfo = '操作成功';
        alert(strInfo);
        //再次绑定
        await this.BindGv_gs_UserConfig();
        return true;
      } else {
        const strInfo = '操作失败';
        alert(strInfo);
        return false;
      }
    }
  }

  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }
  /*
   * 获取当前页序号
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvgs_UserConfigBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvgs_UserConfigBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvgs_UserConfigBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvgs_UserConfigBy');
  }
  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: gs_UserConfigEx;

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        break;

      case 'ExportExcel': //导出Excel
        //objPage.btnExportExcel_Click();
        //alert("导出Excel功能还没有开通！");
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'PaperCollectionLogCRUDExEx.btn_Click');

        break;
    }
  }
}
