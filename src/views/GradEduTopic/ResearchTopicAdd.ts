import $ from 'jquery';
import { Pub_RTViewpointRelaList } from '../GradEduPublicPage/Pub_RTViewpointRelaList';
import { ViewpointCRUD } from '@/viewsBase/GradEduTopic/ViewpointCRUD';
import { clsvRTViewpointRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTViewpointRelaEN';
import { clsViewpointTypeEN } from '@/ts/L0Entity/RT_Params/clsViewpointTypeEN';
import { RTViewpointRela_DelRTViewpointRelasAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTViewpointRelaWApi';
import {
  vRTViewpointRela_GetObjBymIdAsync,
  vRTViewpointRela_GetObjLstAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvRTViewpointRelaWApi';
import { ViewpointType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsViewpointTypeWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { BindDdl_ObjLst, GetCheckedKeyIds } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';

declare let window: any;
/* Viewpoint_QUDI_TS 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class ResearchTopicAdd extends ViewpointCRUD {
  public mstrListDiv = 'divDataLst';
  //public objPager: clsPager = new clsPager();
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  public recCount = 0;

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in QxPrjMenusCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in QxPrjMenusCRUDEx');
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
        (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
      */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      const strUserId = userStore.getUserId;

      if (strUserId != '') {
        $('#hidUserId').val(strUserId);
        //1、为下拉框设置数据源,绑定列表数据
        //const ddl_ViewpointTypeId = await this.BindDdl_ViewpointTypeId("ddlViewpointTypeId");
        //const ddl_ViewpointTypeId_q = await this.BindDdl_ViewpointTypeId("ddlViewpointTypeId_q");
        this.hidSortvViewpointBy = 'viewpointName Asc';
        this.hidSortvRTViewpointRelaBy = 'viewpointName Asc';
        //strWhereCond = await this.CombinevViewpointCondition();
        //const responseText = await vViewpoint_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {

        //});
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        const objPage_RTViewpointRela = new Pub_RTViewpointRelaList();
        await objPage_RTViewpointRela.PageLoad();
        //await objPage_RTViewpointRela.BindGv_vRTViewpointRela();
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /* 根据条件获取相应的记录对象的列表
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnQuery_Click)
  */
  public async btnQuery_Click() {
    // const strWhereCond = await this.CombinevRTViewpointRelaCondition();
    try {
      const objPage_RTViewpointRela = new Pub_RTViewpointRelaList();
      await objPage_RTViewpointRela.PageLoad();
      //await objPage_RTViewpointRela.BindGv_vRTViewpointRela();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /// <summary>
  /// 为下拉框获取数据,从表:[ViewpointType]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_ViewpointTypeId(ddlViewpointTypeId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlViewpointTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlViewpointTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrViewpointTypeObjLst: Array<clsViewpointTypeEN> = await ViewpointType_GetObjLstAsync(
        strWhereCond,
      );
      BindDdl_ObjLst(
        ddlViewpointTypeId,
        arrViewpointTypeObjLst,
        clsViewpointTypeEN.con_ViewpointTypeId,
        clsViewpointTypeEN.con_ViewpointTypeName,
        '观点类型',
      );
      console.log('完成BindDdl_ViewpointTypeId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  public btnokRecord_Click_pyf() {
    //this.AddNewRecordSave();
  }

  /* 把所有的查询控件内容组合成一个条件串
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
  <returns>条件串(strWhereCond)</returns>
*/
  public async CombinevRTViewpointRelaCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const strTopicId: string = clsPrivateSessionStorage.topicIdInTree; //得到主题id
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.viewpointName_q != '') {
        strWhereCond += ` And ${clsvRTViewpointRelaEN.con_ViewpointName} like '%${this.viewpointName_q}%'`;
      }
      //if (this.viewpointTypeId_q != "" && this.viewpointTypeId_q != "0") {
      //    strWhereCond += ` And ${clsvRTViewpointRelaEN.con_ViewpointTypeId} = '${this.viewpointTypeId_q}'`;
      //}
      if (this.topicName_q != '') {
        strWhereCond += ` And ${clsvRTViewpointRelaEN.con_TopicName} like '%${this.topicName_q}%'`;
      }

      //根据主题查询观点关系;
      if (strTopicId != '') {
        strWhereCond += ` And ${clsvRTViewpointRelaEN.con_TopicId} = '${strTopicId}'`;
      }

      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色
      //管理员
      if (
        strRoleId == enumQxRoles.System_Admin_00620001 ||
        strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        $('#btnDelRecord').show();
      } else {
        //学生； //教师
        $('#btnDelRecord').show();
        strWhereCond += ` And ${clsvRTViewpointRelaEN.con_UpdUser} = '${strUserId}'`;
        //学生00620003

        // strWhereCond += ` And ${clsResearchTopicEN.con_TopicProposePeople} = '${strUserId}'`;
      }
      $('#hidUserId').val(strUserId);
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineRTViewpointRelaCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /* 删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecord_Click)
*/
  public async btnDelRecord_Click() {
    try {
      const arrKeyIds = GetCheckedKeyIds();
      if (arrKeyIds.length == 0) {
        alert(`请选择需要删除的${this.thisTabName}记录！`);
        return '';
      }
      // let bolResult = false;
      let strKeyList;
      if (arrKeyIds.length == 0) return '';
      strKeyList = '';
      for (let i = 0; i < arrKeyIds.length; i++) {
        if (i == 0) strKeyList = `${strKeyList}${arrKeyIds[i].toString()}`;
        else strKeyList += `,` + `${arrKeyIds[i].toString()}`;
      }
      // 删除RTViewpointRela本表中与当前对象有关的记录

      const strWhereCond = ` mId in (${strKeyList})`;

      const arrvRTViewpointRelaObjLst = await vRTViewpointRela_GetObjLstAsync(strWhereCond);

      //循环列表，判断数据是否是当前用户 ，是则可以删除；
      //判断权限、管理员教师可以删除、
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //管理员 判断角色
      if (strRoleId == '00620001' || strRoleId == '00620002') {
        this.DelMultiRecord(arrKeyIds);
        const objPage_RTViewpointRela = new Pub_RTViewpointRelaList();
        await objPage_RTViewpointRela.PageLoad();
        //await objPage_RTViewpointRela.BindGv_vRTViewpointRela();
      } else {
        //学生00620003
        let objvRTViewpointRela: clsvRTViewpointRelaEN = new clsvRTViewpointRelaEN();
        //循环判断数据用户不是登录用户则提示不可以删除
        for (objvRTViewpointRela of arrvRTViewpointRelaObjLst) {
          //如果存在不相同就提示不可删除；
          if (objvRTViewpointRela.updUser != strUserId) {
            alert('不能删除别人主题观点关系！');
            // bolResult = true;
            return;
          }
        }
        this.DelMultiRecord(arrKeyIds);
        const objPage_RTViewpointRela = new Pub_RTViewpointRelaList();
        await objPage_RTViewpointRela.PageLoad();
        //await objPage_RTViewpointRela.BindGv_vRTViewpointRela();
      }

      //const responseText = await this.DelMultiRecord(arrKeyIds);
      //const responseText2 = await this.BindGv_vRTViewpointRela();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
  /* 根据关键字列表删除记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
 */
  public async DelMultiRecord(arrmId: Array<string>) {
    try {
      const returnInt = await RTViewpointRela_DelRTViewpointRelasAsync(arrmId);
      if (returnInt > 0) {
        const strInfo = `删除记录成功,共删除${returnInt}条记录!`;
        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `删除记录不成功!`;
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

  public btnDetailInTab_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要查看的记录！');
      return;
    }
    const lngKeyId = Number(strKeyId);
    this.RtViewpointRelaDetailRecord(lngKeyId);
  }

  /* 根据关键字获取相应的记录的对象
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
  <param name = "sender">参数列表</param>
*/
  public async RtViewpointRelaDetailRecord(lngmId: number) {
    //this.keyId = lngmId.toString();

    try {
      const objvRTViewpointRelaEN = await vRTViewpointRela_GetObjBymIdAsync(lngmId);
      if (objvRTViewpointRelaEN == null) return;
      // //显示当前数据；
      $('#txtTopicNameDetail').html(objvRTViewpointRelaEN.topicName);
      $('#txtTopicContentDetail').html(objvRTViewpointRelaEN.topicContent);

      $('#txtViewpointNameDetail').html(objvRTViewpointRelaEN.viewpointName);
      $('#txtViewpointTypeNameDetail').html(objvRTViewpointRelaEN.viewpointTypeName);
      $('#txtViewpointContentDetail').html(objvRTViewpointRelaEN.viewpointContent);
      $('#txtReasonDetail').html(objvRTViewpointRelaEN.reason);
      $('#txtSourceDetail').html(objvRTViewpointRelaEN.source);
    } catch (e: any) {
      console.error(e);
      const strMsg = `当前无数据获取失败,${e}.`;
      alert(strMsg);
    }
  }

  /*
   * 获取年月日
   */
  public getNowDate(): string {
    const date = new Date();
    let month: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();
    if (month <= 9) {
      month = `0${month}`;
    }
    if (strDate <= 9) {
      strDate = `0${strDate}`;
    }

    return `${date
      .getFullYear()
      .toString()}-${month}-${strDate} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvPaperBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    SetInputValueInDivObj(divName, 'hidSortvPaperBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvPaperBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    return GetInputValueInDivObj(divName, 'hidSortvPaperBy');
  }

  /*
   * 获取当前页序号
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }

  public set hidSortvViewpointBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    SetInputValueInDivObj(divName, 'hidSortvViewpointBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvViewpointBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    return GetInputValueInDivObj(divName, 'hidSortvViewpointBy');
  }

  /*
   * 观点名称
   */
  public set viewpointName(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    SetInputValueInDivObj(divName, 'txtViewpointName', value);
  }
  /*
   * 观点名称
   */
  public get viewpointName(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    return GetInputValueInDivObj(divName, 'txtViewpointName');
  }
  /*
   * 观点名称
   */
  public get viewpointName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    return GetInputValueInDivObj(divName, 'txtViewpointName_q');
  }
  /*
   * 观点类型Id
   */
  public set viewpointTypeId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    SetSelectValueByIdInDivObj(divName, 'ddlViewpointTypeId', value);
  }
  /*
   * 观点类型Id
   */
  public get viewpointTypeId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    return GetSelectValueInDivObj(divName, 'ddlViewpointTypeId');
  }
  /*
   * 观点类型Id
   */
  public get viewpointTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    return GetSelectValueInDivObj(divName, 'ddlViewpointTypeId_q');
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvRTViewpointRelaBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    SetInputValueInDivObj(divName, 'hidSortvRTViewpointRelaBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvRTViewpointRelaBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    return GetInputValueInDivObj(divName, 'hidSortvRTViewpointRelaBy');
  }

  /*
   * 栏目主题
   */
  public get topicName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    //if (divName == null) return;
    return GetInputValueInDivObj(divName, 'txtTopicName_q');
  }
}
