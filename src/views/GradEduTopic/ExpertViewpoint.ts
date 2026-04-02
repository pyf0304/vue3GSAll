import $ from 'jquery';
import { Viewpoint_Edit } from '@/viewsBase/GradEduTopic/Viewpoint_Edit';
import { clsViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointEN';
import { clsvViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsvViewpointEN';
import { clsViewpointTypeEN } from '@/ts/L0Entity/RT_Params/clsViewpointTypeEN';
import {
  Viewpoint_AddNewRecordAsync,
  Viewpoint_DelRecordAsync,
  Viewpoint_DelViewpointsAsync,
  Viewpoint_GetMaxStrIdAsync,
  Viewpoint_GetObjByViewpointIdAsync,
  Viewpoint_IsExistAsync,
  Viewpoint_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsViewpointWApi';
import { vViewpoint_GetRecCountByCondAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvViewpointWApi';
import { ViewpointType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsViewpointTypeWApi';
import { arrSelectedKeys, BindDdl_ObjLst, GetObjKeys, Redirect } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { fa } from 'element-plus/es/locale';
import { userStore } from '@/store/modulesShare/user';

/*
 * 宣布一个已经在存在的函数HideDialog，用于隐藏对象框，
 */
declare function HideDialog(): void;
/*
 * 宣布一个已经在其他地方定义存在的变量strUrl_Session_SetString，
 * 用于定义处理Session-设置String函数的地址
 */
declare let strUrl_Session_SetString: string;
declare let strUrl_Session_GetString: string;

/* Viewpoint_QUDI_TS 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class ExpertViewpoint extends Viewpoint_Edit {
  public mstrListDiv = 'divDataLst';
  //public objPager: clsPager = new clsPager();
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;

  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
   */
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    this.btnOKUpd = '确认添加';
    this.btnCancel = '取消添加';
    this.Clear();
    //去掉提交按钮不可用状态
    $('#btnOKUpd').attr('disabled', 'false');
    //wucViewpointB1.viewpointId = clsViewpointBL.GetMaxStrId_S();
    //return new Promise((resolve, reject) => {
    //    try {
    //        const responseText = Viewpoint_GetMaxStrIdAsync().then((jsonData) => {
    //            strIdCurrEduclsreturnString: string = jsonData.toString();
    //            if (returnString == "") {
    //                strIdCurrEduclsstrInfo: string = `获取表Paper的最大关键字为空，不成功，请检查!`;
    //                //显示信息框
    //                alert(strInfo);
    //            }
    //            else {
    //                $('#txtViewpointId').val(returnString);
    //            }
    //        });
    //    }
    //    catch (e:any) {
    //        console.error('catch(e)=');
    //        console.error(e);
    //        strIdCurrEduclsstrMsg: string = `获取表关键字的最大值不成功,${e}.`;
    //        alert(strMsg);
    //    }
    //});
  }

  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSave() {
    try {
      Viewpoint_GetMaxStrIdAsync().then((jsonData) => {
        const returnString: string = jsonData.toString();
        if (returnString == '') {
          const strInfo = `获取表Paper的最大关键字为空，不成功，请检查!`;
          //显示信息框
          alert(strInfo);
        } else {
          $('#txtViewpointId').val(returnString);
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
    this.DivName = 'divAddNewRecordSave';
    const objViewpointEN: clsViewpointEN = new clsViewpointEN();
    this.PutDataToViewpointClass(objViewpointEN);
    try {
      //const responseText = await Viewpoint_IsExistAsync(objViewpointEN.viewpointId);
      //strIdCurrEduclsbolIsExist: boolean = responseText;
      //if (bolIsExist == true) {
      //    strIdCurrEduclsstrMsg: string = `添加记录时，关键字：${objViewpointEN.viewpointId}已经存在！`;
      //    alert(strMsg);
      //    return responseText;//一定要有一个返回值，否则会出错！
      //}
      const responseText2 = await Viewpoint_AddNewRecordAsync(objViewpointEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   */
  public async btnAddNewRecord_Click() {
    this.opType = 'Add';
    try {
      await this.AddNewRecord();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 
    在数据表里详细信息记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
   */
  public async btnDetailRecordInTab_Click(strKeyId: string) {
    this.opType = 'Detail';
    try {
      if (strKeyId == '') {
        alert('请选择需要详细信息的记录！');
        return '';
      }
      this.DetailRecord(strKeyId);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `详细信息记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnOKUpd_Click() {
    const strCommandText: string = this.btnOKUpd;
    try {
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          await this.AddNewRecordSave().then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == true) {
              HideDialog();
              this.iShowList.BindGv(clsViewpointEN._CurrTabName, returnBool.toString());
            }
          });
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          await this.UpdateRecordSave().then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == true) {
              HideDialog();
              this.iShowList.BindGv(clsViewpointEN._CurrTabName, returnBool.toString());
            }
          });
          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

          break;
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  /* 
    在数据表里选择记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnSelectRecordInTab_Click)
   */
  public async btnSelectRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的记录！`);
        return '';
      }
      this.SelectRecord(strKeyId);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `选择记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
   */
  public async btnUpdateRecord_Click(strKeyId: string) {
    this.opType = 'Update';

    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }
    this.UpdateRecord(strKeyId);
  }

  /* 在数据表里修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecordInTab_Click)
   */
  public async btnUpdateRecordInTab_Click(strKeyId: string) {
    this.opType = 'Update';
    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }
    this.UpdateRecord(strKeyId);
  }

  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Clear)
  /// </summary>
  public Clear() {
    this.viewpointId = '';
    this.viewpointName = '';
    this.viewpointContent = '';
    $('#ddlViewpointTypeId option[0]').attr('selected', 'true');
    this.reason = '';
    this.source = '';
    this.vPProposePeople = '';
    this.updDate = '';
    this.updUser = '';
    this.memo = '';
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public async CombinevViewpointCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.viewpointName_q != '') {
        strWhereCond += ` And ${clsvViewpointEN.con_ViewpointName} like '%${this.viewpointName_q}%'`;
      }
      if (this.viewpointTypeId_q != '' && this.viewpointTypeId_q != '0') {
        strWhereCond += ` And ${clsvViewpointEN.con_ViewpointTypeId} = '${this.viewpointTypeId_q}'`;
      }
      //if (this.Reason_q != "") {
      //    strWhereCond += ` And ${clsvViewpointEN.con_Reason} like '%${this.Reason_q}%'`;
      //}
      if (this.VPProposePeople_q != '') {
        strWhereCond += ` And ${clsvViewpointEN.con_VPProposePeople} like '%${this.VPProposePeople_q}%'`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineViewpointCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
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
      const arrViewpointTypeObjLst = await ViewpointType_GetObjLstAsync(strWhereCond);
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

  /* 根据关键字列表删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelMultiRecord)
   */
  public async DelMultiRecord(arrViewpointId: Array<string>) {
    try {
      const returnInt = await Viewpoint_DelViewpointsAsync(arrViewpointId);
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

  /* 
    根据关键字删除记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
   */
  public async DelRecord(strViewpointId: string) {
    try {
      const returnInt: number = await Viewpoint_DelRecordAsync(strViewpointId);
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
    演示Session 操作
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Demo_Session)
    */
  public async Demo_Session() {
    try {
      //设置Session
      const strUserId = 'TestUserId';
      await this.SetSessionAsync('userId', strUserId);
      //获取Session
      const strUserId_Value1 = await this.GetSessionAsync('userId');
      console.log(`strUserId_Value1:${strUserId_Value1}`);
      //获取Session方法2：直接读取页面中的hidUserId
      const strUserId_Value2 = userStore.getUserId;
      console.log(`strUserId_Value2:${strUserId_Value2}`);
    } catch (e: any) {
      const strMsg = `演示Session不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 
    根据关键字详细信息记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord)
     <param name = "sender">参数列表</param>
   */
  public async DetailRecord(strViewpointId: string) {
    this.btnOKUpd = '';
    this.btnCancel = '关闭';

    try {
      const objViewpointEN = await Viewpoint_GetObjByViewpointIdAsync(strViewpointId);
      if (objViewpointEN == null) return;
      this.GetDataFromViewpointClass(objViewpointEN);
      console.log('完成DetailRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:把类对象的属性内容显示到界面上
    注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
     如果在设置数据库时,就应该一级字段在前,二级字段在后
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
     <param name = "pobjViewpointEN">表实体类对象</param>
   */
  public async GetDataFromViewpointClass(pobjViewpointEN: clsViewpointEN) {
    this.viewpointId = pobjViewpointEN.viewpointId; // 观点Id
    this.viewpointName = pobjViewpointEN.viewpointName; // 观点名称
    this.viewpointContent = pobjViewpointEN.viewpointContent; // 观点内容
    this.viewpointTypeId = pobjViewpointEN.viewpointTypeId; // 观点类型Id
    this.reason = pobjViewpointEN.reason; // 理由
    this.source = pobjViewpointEN.source; // 来源
    this.isSubmit = pobjViewpointEN.isSubmit; //是否提交；
    this.paperId = pobjViewpointEN.citationId; //引用Id；
    this.vPProposePeople = pobjViewpointEN.vPProposePeople; // 观点提出人
    this.updDate = pobjViewpointEN.updDate; // 修改日期
    this.updUser = pobjViewpointEN.updUser; // 修改人
    this.memo = pobjViewpointEN.memo; // 备注
  }

  /* 函数功能:从界面列表中获取第一个关键字的值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetFirstKey)
     <param name = "pobjViewpointEN">表实体类对象</param>
    <returns>列表的第一个关键字值</returns>
   */
  public GetFirstKey(): string {
    if (arrSelectedKeys.length == 1) {
      return arrSelectedKeys[0];
    } else {
      alert(`请选择一个关键字！目前选择了:${arrSelectedKeys.length}个关键字。`);
      return '';
    }
  }

  /* 获取当前表关键字值的最大值,再加1,避免重复
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetMaxStrId)
   */
  public async GetMaxStrId(strKeyCtrlName: string) {
    this.DivName = 'divGetMaxStrId';
    try {
      const responseText = await Viewpoint_GetMaxStrIdAsync();
      const returnString: string = responseText.toString();
      if (returnString == '') {
        const strInfo = `获取表Viewpoint的最大关键字为空，不成功，请检查!`;
        $('#lblResult35').val(strInfo);
        //显示信息框
        alert(strInfo);
        $(strKeyCtrlName).val(returnString);
      } else {
        const strInfo = `获取表Viewpoint的最大关键字为：${returnString}!`;
        $('#lblResult35').val(strInfo);
        //显示信息框
        alert(strInfo);
        $(strKeyCtrlName).val(returnString);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
    获取Session 关键字的值
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetSessionAsync)
    <param name = "Key">关键字</param>
     <return>值</return>
    */
  public GetSessionAsync(Key: string): Promise<string> {
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl_Session_GetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
        },
        success(data) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(`strKey, strValue=${strKey}${strValue}`);
          resolve(data);
        },
        error: (e: any) => {
          // const strErrMsg = decodeURIComponent(e.responseText);
          reject(e);
        },
      });
    });
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   */
  public async PageLoad() {
    // 在此处放置用户代码以初始化页面
    try {
      //1、为下拉框设置数据源,绑定列表数据
      await this.BindDdl_ViewpointTypeId('ddlViewpointTypeId');
      await this.BindDdl_ViewpointTypeId('ddlViewpointTypeId_q');
      this.hidSortvViewpointBy = 'viewpointName Asc';
      const strWhereCond = await this.CombinevViewpointCondition();
      await vViewpoint_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {
        this.recCount = jsonData;
      });
      //2、显示无条件的表内容在GridView中
      //await this.BindGv_vViewpoint();
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjViewpointEN">数据传输的目的类对象</param>
   */
  public async PutDataToViewpointClass(pobjViewpointEN: clsViewpointEN) {
    pobjViewpointEN.SetViewpointId(this.viewpointId); // 观点Id
    pobjViewpointEN.SetViewpointName(this.viewpointName); // 观点名称
    pobjViewpointEN.SetViewpointContent(this.viewpointContent); // 观点内容
    pobjViewpointEN.SetViewpointTypeId(this.viewpointTypeId); // 观点类型Id
    pobjViewpointEN.SetReason(this.reason); // 理由
    pobjViewpointEN.SetSource(this.source); // 来源
    pobjViewpointEN.SetVPProposePeople(this.vPProposePeople); // 观点提出人
    pobjViewpointEN.SetUpdDate(this.updDate); // 修改日期
    pobjViewpointEN.SetUpdUser(this.updUser); // 修改人
    pobjViewpointEN.SetMemo(this.memo); // 备注
  }

  /* 
    根据关键字选择相应的记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SelectRecord)
     <param name = "sender">参数列表</param>
   */
  public async SelectRecord(strViewpointId: string) {
    try {
      const objViewpointEN = await Viewpoint_GetObjByViewpointIdAsync(strViewpointId);

      console.log('完成SelectRecord!', objViewpointEN);
      Redirect('/Index/Main_vViewpoint');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
  /// 在用户自定义控件中，设置关键字的值，是否只读
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetKeyReadOnly)
  /// </summary>
  /// <param name = "bolReadonly">是否只读</param>
  public SetKeyReadOnly(bolReadonly: boolean) {
    $('#txtViewpointId').attr('ReadOnly', bolReadonly.toString());
  }

  /*
    设置Session
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetSessionAsync)
    <param name = "Key">关键字</param>
    <param name = "Value">值</param>
    */
  public SetSessionAsync(Key: string, Value: string): Promise<void> {
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: strUrl_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(`strKey, strValue=${strKey}${strValue}`);
        },
      });
    });
  }

  /* 函数功能:把以该关键字的记录内容显示在界面上,
          在这里是把值传到表控件中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowData)
     <param name = "strViewpointId">表记录的关键字,显示该表关键字的内容</param>
   */
  public async ShowData(strViewpointId: string) {
    //操作步骤:
    //1、检查关键字是否为空；
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    //3、用提供的关键字初始化一个类对象；
    //4、获取类对象的所有属性；
    //5、把该对象的所有属性显示在界面上,在这里显示在表控件中
    //2、检查该关键字的记录是否存在,如果不存在就返回不显示；
    let objViewpointEN: clsViewpointEN = new clsViewpointEN();
    try {
      const responseText = await Viewpoint_IsExistAsync(strViewpointId);
      const returnBool: boolean = responseText;
      if (returnBool == false) {
        const strInfo = `关键字:[${strViewpointId}] 的记录不存在!`;
        //$('#lblResult1').val(strInfo);
        //显示信息框
        alert(strInfo);
      }
    } catch (e: any) {
      const strMsg = `检查相应关键字的记录存在不成功, ${e}.`;
      alert(strMsg);
    }
    try {
      const responseText = await Viewpoint_GetObjByViewpointIdAsync(strViewpointId);
      objViewpointEN = <clsViewpointEN>responseText;
    } catch (e: any) {
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
    //3、用提供的关键字初始化一个类对象；
    this.GetDataFromViewpointClass(objViewpointEN);
  }

  /* 显示{0}对象的所有属性值
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_ShowTabObj)
     <param name = "divContainer">显示容器</param>
     <param name = "objViewpoint">需要显示的对象</param>
   */
  public ShowViewpointObj(divContainer: HTMLDivElement, objViewpoint: clsViewpointEN) {
    const strThisFuncName = this.ShowViewpointObj.name;
    if (divContainer == null) {
      const strMsg = `所给层divContainer不存在！(in ${strThisFuncName})`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    const sstrKeys = GetObjKeys(objViewpoint);
    const ul: HTMLUListElement = document.createElement('ul');
    for (const strKey of sstrKeys) {
      const strValue = objViewpoint.GetFldValue(strKey);
      const li: HTMLLIElement = document.createElement('li');
      li.innerHTML = `${strKey}:${strValue}`;
      ul.appendChild(li);
    }
    divContainer.appendChild(ul);
  }

  /* 根据关键字获取相应的记录的对象
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async UpdateRecord(strViewpointId: string): Promise<boolean> {
    this.btnOKUpd = '确认修改';
    this.btnCancel = '取消修改';
    this.keyId = strViewpointId;

    try {
      const objViewpointEN = await Viewpoint_GetObjByViewpointIdAsync(strViewpointId);
      if (objViewpointEN == null) return false;
      this.GetDataFromViewpointClass(objViewpointEN);
      console.log('完成UpdateRecord!');
      //resolve(jsonData);
      return true;
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 修改记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   */
  public async UpdateRecordSave(): Promise<boolean> {
    const strThisFuncName = this.UpdateRecordSave.name;

    const objViewpointEN: clsViewpointEN = new clsViewpointEN();
    objViewpointEN.SetViewpointId(this.keyId);
    this.PutDataToViewpointClass(objViewpointEN);
    objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objViewpointEN.viewpointId == '' || objViewpointEN.viewpointId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await Viewpoint_UpdateRecordAsync(objViewpointEN);
      if (returnBool == true) {
        const strInfo = `修改记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `修改记录不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('完成UpdateRecordSave');
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
  /*
   * 设置取消按钮的标题
   */
  public set btnCancel(value: string) {
    $('#btnCancel').html(value);
  }
  /*
   * 设置确定按钮的标题
   */
  public set btnOKUpd(value: string) {
    $('#btnOKUpd').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnOKUpd(): string {
    return $('#btnOKUpd').html();
  }
  /*
   * 获取当前页序号
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName();
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }
  /*
   * 添加、修改用的层名
   */
  public set DivName(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidDivName', value);
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvViewpointBy(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidSortvViewpointBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvViewpointBy(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'hidSortvViewpointBy');
  }

  // /*
  // * 设置关键字的值
  //*/
  // public set keyId(value: string) {
  //     $("#hidKeyId").val(value);
  // }
  // /*
  // * 设置关键字的值
  //*/
  // public get keyId(): string {
  //     return $("#hidKeyId").val();
  // }
  /*
   * 备注
   */
  public set memo(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtMemo', value);
  }
  /*
   * 备注
   */
  public get memo(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtMemo');
  }
  // /*
  // * 设置操作类型：Add||Update||Detail
  //*/
  // public set opType(value: string) {
  //     $("#hidOpType").val(value);
  // }

  // /*
  // * 理由
  //*/
  // public get Reason_q(): string {
  //     return $("#txtReason_q").val();
  // }
  /*
   * 来源
   */
  public set source(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtSource', value);
  }
  /*
   * 来源
   */
  public get source(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtSource');
  }
  /*
   * 修改日期
   */
  public set updDate(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtUpdDate', value);
  }
  /*
   * 修改日期
   */
  public get updDate(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtUpdDate');
  }
  /*
   * 修改人
   */
  public set updUser(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtUpdUser', value);
  }
  /*
   * 修改人
   */
  public get updUser(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtUpdUser');
  }
  /*
   * 观点内容
   */
  public set viewpointContent(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtViewpointContent', value);
  }
  /*
   * 观点内容
   */
  public get viewpointContent(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtViewpointContent');
  }
  /*
   * 观点Id
   */
  public set viewpointId(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtViewpointId', value);
  }
  /*
   * 观点Id
   */
  public get viewpointId(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtViewpointId');
  }
  /*
   * 观点名称
   */
  public set viewpointName(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtViewpointName', value);
  }
  /*
   * 观点名称
   */
  public get viewpointName(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtViewpointName');
  }
  /*
   * 观点名称
   */
  public get viewpointName_q(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtViewpointName_q');
  }
  /*
   * 观点类型Id
   */
  public set viewpointTypeId(value: string) {
    const divName = this.getDivName();
    SetSelectValueByIdInDivObj(divName, 'ddlViewpointTypeId', value);
  }
  /*
   * 观点类型Id
   */
  public get viewpointTypeId(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlViewpointTypeId');
  }
  /*
   * 观点类型Id
   */
  public get viewpointTypeId_q(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlViewpointTypeId_q');
  }
  /*
   * 观点提出人
   */
  public set vPProposePeople(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtVPProposePeople', value);
  }
  /*
   * 观点提出人
   */
  public get vPProposePeople(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtVPProposePeople');
  }
  /*
   * 观点提出人
   */
  public get VPProposePeople_q(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtVPProposePeople_q');
  }
  /*
   * 是否提交
   */
  public set isSubmit(value: boolean) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'chkIsSubmit', value.toString());
  }
  /*
   * 是否提交
   */
  public get isSubmit(): boolean {
    return $('#chkIsSubmit').prop('checked');
  }
  /*
   * 论文Id
   */
  public set paperId(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtPaperId', value);
  }
  /*
   * 论文
   */
  public get paperId(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtPaperId');
  }
}
