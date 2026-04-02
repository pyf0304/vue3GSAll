/*import $ from "jquery";*/
import { Ref } from 'vue';
import { clsCboObject } from './clsCboObject';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  GetUniDivInDoc,
  SetButtonHtmlInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from './clsCommFunc4Ctrl';
import { BindDdl_CboObject } from './clsCommFunc4Web';

// import { clsDataColumn } from './clsDataColumn';
import { Format } from './clsString';

/*
 * 功能:为Web提供下拉框对象类
 * 版本:2019-08-03-01
 * 作者:潘以锋
 * */
/*
 * 宣布一个已经在存在的函数HideDialog，用于隐藏对象框，
 */
declare function HideDialog(): void;
//declare function GetObjLstFromParent(): Array<clsFldComparisonObj>;

/// <summary>
/// 下拉框对象类
/// </summary>
export class clsFldComparisonObj {
  public static EditRef: Ref<any>;
  public static divEdit: HTMLDivElement;
  public static times4TestShowDialog = 0;

  public static divName4Query = 'divQuery';
  public static divQuery = GetUniDivInDoc('divQuery');
  public static arrFldComparisonObj: Array<clsFldComparisonObj> = new Array<clsFldComparisonObj>();
  public static arrFldNameLst: Array<string>;
  public static divFldComparisonObj = GetUniDivInDoc('divList4FldComparisonObj');
  /*
    /// <param name="strFldValue"></param>
    /// <param name="strFldName"></param>
    */
  constructor(strFldName: string, strComparisonOperator: string, strFldValue: string) {
    this.FldValue = strFldValue;
    this.fldName = strFldName;
    this.ComparisonOperator = strComparisonOperator;
  }

  /// <summary>
  /// 字段值
  /// </summary>
  public FldValue = '';
  /// <summary>
  /// 字段名
  /// </summary>
  public fldName = '';

  /// <summary>
  /// 比较操作符
  /// </summary>
  public ComparisonOperator = '';
  /// <summary>
  /// 常量:"fldName"
  /// </summary>
  public static get conFldName(): string {
    return 'fldName';
  } //文本
  /// <summary>
  /// 常量:"ComparisonOperator"
  /// </summary>
  public static get conComparisonOperator(): string {
    return 'ComparisonOperator';
  } //值
  /// <summary>
  /// 常量:"FldValue"
  /// </summary>
  public static get conFldValue(): string {
    return 'FldValue';
  } //值

  public static GetLocalObjLst(): Array<clsFldComparisonObj> {
    const divName = this.getDivName();
    const strFldComparisonObjLst = GetInputValueInDivObj(divName, 'hidFldComparisonObjLst');
    if (strFldComparisonObjLst == null || strFldComparisonObjLst == '') {
      return new Array<clsFldComparisonObj>();
    }
    const arrFldComparisonObj = JSON.parse(strFldComparisonObjLst.toString());
    console.log(`当前记录数:${arrFldComparisonObj.length}.(In clsFldComparisonObj.GetLocalObjLst)`);
    return arrFldComparisonObj;
  }
  public static SetLocalObjLst() {
    const strFldComparisonObjLst: string = JSON.stringify(clsFldComparisonObj.arrFldComparisonObj);

    SetInputValueInDivObj(
      clsFldComparisonObj.divEdit,
      'hidFldComparisonObjLst',
      strFldComparisonObjLst,
    );
    console.log(
      `当前记录数:${clsFldComparisonObj.arrFldComparisonObj.length}.(In clsFldComparisonObj.SetLocalObjLst)`,
    );
  }
  public static BindTab() {
    //if (clsFldComparisonObj.arrFldComparisonObj.length == 0) {
    clsFldComparisonObj.arrFldComparisonObj = clsFldComparisonObj.GetLocalObjLst();
    //}
    clsFldComparisonObj.BindTab_FldComparisonObj(clsFldComparisonObj.divFldComparisonObj);
  }

  public static BindTab_FldComparisonObj(divContainer: HTMLDivElement) {
    console.log(divContainer);
    const sstrFldName: Array<string> = new Array<string>();
    const sstrColHeader: Array<string> = new Array<string>();
    sstrFldName.push(clsFldComparisonObj.conFldName);
    sstrColHeader.push('字段名');
    sstrFldName.push(clsFldComparisonObj.conComparisonOperator);
    sstrColHeader.push('操作符');
    sstrFldName.push(clsFldComparisonObj.conFldValue);
    sstrColHeader.push('字段值');
  }

  /// <summary>
  /// 绑定基于Web的下拉框
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_TabFeature_DdlBindFunction)
  /// </summary>
  /// <param name = "objDDL">需要绑定当前表的下拉框</param>
  public static BindDdlFldName(strDdlName: string, arrFldNameLst: Array<string>): void {
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框:${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始:BindDdlFldName');

    const arrCboObject: Array<clsCboObject> = arrFldNameLst.map((x) => new clsCboObject(x, x));
    BindDdl_CboObject(
      strDdlName,
      arrCboObject,
      clsCboObject.con_Text,
      clsCboObject.con_Value,
      '字段名',
    );
  }
  public static BindDdlComparisonOperator(strDdlName: string): void {
    const objDdl = document.getElementById(strDdlName);
    if (objDdl == null) {
      const strMsg = `下拉框:${strDdlName} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }
    //为数据源于表的下拉框设置内容
    console.log('开始:BindDdlFldName');
    const arrComparisonOperatorLst: Array<string> = new Array<string>(
      '=',
      '!=',
      'like',
      '>=',
      '>',
      '<=',
      '<',
    );
    const arrCboObject: Array<clsCboObject> = arrComparisonOperatorLst.map(
      (x) => new clsCboObject(x, x),
    );
    BindDdl_CboObject(
      strDdlName,
      arrCboObject,
      clsCboObject.con_Text,
      clsCboObject.con_Value,
      '字段名',
    );
  }

  public static AddNewRecordSave(): boolean {
    //this.DivName = "divAddNewRecordSave";
    const objFldComparisonObj: clsFldComparisonObj = new clsFldComparisonObj(
      clsFldComparisonObj.FldName4Ctl,
      clsFldComparisonObj.ComparisonOperator4Ctl,
      clsFldComparisonObj.FldValue4Ctl,
    );

    try {
      const responseText = clsFldComparisonObj.IsExist(objFldComparisonObj.fldName);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `添加记录时，字段名:${objFldComparisonObj.fldName}已经存在！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }
      clsFldComparisonObj.arrFldComparisonObj.push(objFldComparisonObj);
      clsFldComparisonObj.SetLocalObjLst();
      clsFldComparisonObj.BindTab();
      return true; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,$${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  /// <summary>
  /// 根据关键字判断是否存在记录, 从本地缓存中判断.
  /// (AutoGCLib.WA_Access4TypeScript:Gen_4WA_Ts_IsExistCache)
  /// </summary>
  /// <param name = "strFldName">所给的关键字</param>
  /// <returns>对象</returns>
  public static IsExist(strFldName: string): boolean {
    try {
      const arrFldComparisonObjSel = clsFldComparisonObj.arrFldComparisonObj.filter(
        (x) => x.fldName == strFldName,
      );
      // const objFldComparisonObj: clsFldComparisonObj;
      if (arrFldComparisonObjSel.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (e: any) {
      const strMsg = `根据关键字:[${strFldName}]判断是否存在不成功!`;
      alert(strMsg);
    }
    return false;
  }
  /* 
在数据表里删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnDelRecordInTab_Click)
*/
  public static btnDelRecordInTab_Click(strKeyId: string) {
    try {
      if (strKeyId == '') {
        alert(`请选择需要删除的${objPage.thisTabName}记录！`);
        return '';
      }
      const index = clsFldComparisonObj.arrFldComparisonObj.findIndex((x) => x.fldName == strKeyId);
      if (index > -1) {
        clsFldComparisonObj.arrFldComparisonObj.splice(index, 1);
        clsFldComparisonObj.SetLocalObjLst();
      }
      this.BindTab();
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. $${e}.`;
      alert(strMsg);
    }
  }

  /* 在数据表里修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecordInTab_Click)
*/
  public static btnUpdateRecordInTab_Click(strKeyId: string) {
    //this.opType = "Update";
    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }
    clsFldComparisonObj.UpdateRecord(strKeyId);
  }
  /* 根据关键字获取相应的记录的对象
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
 <param name = "sender">参数列表</param>
*/
  public static UpdateRecord(strFldName: string) {
    clsFldComparisonObj.btnOKUpd = '确认修改';
    clsFldComparisonObj.btnCancel = '取消修改';
    clsFldComparisonObj.keyId = strFldName;
    try {
      const objFldComparisonObj: clsFldComparisonObj =
        clsFldComparisonObj.GetObjByFldNameCache(strFldName);

      clsFldComparisonObj.GetDataFromFldComparisonObjClass(objFldComparisonObj);
      console.log('完成UpdateRecord!');
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,$${e}.`;
      alert(strMsg);
    }
  }
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中

*/
  public static async btnOKUpd_Click() {
    let returnBool: boolean;
    const strCommandText: string = clsFldComparisonObj.btnOKUpd;
    let strMsg = '';
    try {
      switch (strCommandText) {
        case '添加':
          //const responseText1 = clsFldComparisonObj.AddNewRecord();

          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          //FldComparisonObj.clsFldComparisonObj.AddNewRecordSave();

          returnBool = clsFldComparisonObj.AddNewRecordSave();

          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = clsFldComparisonObj.UpdateRecordSave();

          if (returnBool == true) {
            HideDialog();
            //clsFldComparisonObj.BindGv_vUsers();
          }

          break;
        default:
          strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnOKUpd_Click())`;
          alert(strMsg);
          break;
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
  /// <summary>
  /// 根据关键字获取相关对象, 从缓存中获取.
  /// </summary>
  /// <param name = "strFldName">所给的关键字</param>
  /// <returns>对象</returns>
  public static GetObjByFldNameCache(strFldName: string): clsFldComparisonObj {
    const arrFldComparisonObjObjLstCache: Array<clsFldComparisonObj> =
      clsFldComparisonObj.arrFldComparisonObj;
    const obj: clsFldComparisonObj = new clsFldComparisonObj('', '', '');
    try {
      const arrFldComparisonObjSel: Array<clsFldComparisonObj> =
        arrFldComparisonObjObjLstCache.filter((x) => x.fldName == strFldName);
      let objFldComparisonObj: clsFldComparisonObj;
      if (arrFldComparisonObjSel.length > 0) {
        objFldComparisonObj = arrFldComparisonObjSel[0];
        return objFldComparisonObj;
      } else {
        return obj;
      }
    } catch (e: any) {
      const strMsg = `根据关键字:[${strFldName}]获取相应的对象不成功!`;
      alert(strMsg);
    }
    return obj;
  }

  /* 函数功能:把类对象的属性内容显示到界面上
 <param name = "pobjFldComparisonObj">表实体类对象</param>
*/
  public static GetDataFromFldComparisonObjClass(pobjFldComparisonObj: clsFldComparisonObj) {
    clsFldComparisonObj.FldName4Ctl = pobjFldComparisonObj.fldName; // 学院
    clsFldComparisonObj.ComparisonOperator4Ctl = pobjFldComparisonObj.ComparisonOperator; // 学院名称
    clsFldComparisonObj.FldValue4Ctl = pobjFldComparisonObj.FldValue; // 排序
  }

  /* 修改记录
   */
  public static UpdateRecordSave(): boolean {
    const strThisFuncName = this.UpdateRecordSave.name;
    //
    const objFldComparisonObj: clsFldComparisonObj = new clsFldComparisonObj('', '', '');
    objFldComparisonObj.fldName = clsFldComparisonObj.keyId;
    clsFldComparisonObj.PutDataToFldComparisonObjClass(objFldComparisonObj);
    if (objFldComparisonObj.fldName == '' || objFldComparisonObj.fldName == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    const objFldComparisonObjLib: clsFldComparisonObj = this.GetObjByFldNameCache(
      clsFldComparisonObj.keyId,
    );
    if (objFldComparisonObjLib.fldName == '') {
      const strInfo = `字段名:[${clsFldComparisonObj.keyId}]在缓存中不存在!`;
      //显示信息框
      alert(strInfo);
      return false;
    }

    objFldComparisonObjLib.ComparisonOperator = objFldComparisonObj.ComparisonOperator;
    objFldComparisonObjLib.FldValue = objFldComparisonObj.FldValue;
    clsFldComparisonObj.SetLocalObjLst();
    const strInfo = `修改记录成功!`;
    //显示信息框
    alert(strInfo);
    this.BindTab();
    return true;
  }
  /* 函数功能:把界面上的属性数据传到类对象中
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
  <param name = "pobjFldComparisonObj">数据传输的目的类对象</param>
*/
  public static PutDataToFldComparisonObjClass(pobjFldComparisonObj: clsFldComparisonObj) {
    pobjFldComparisonObj.fldName = clsFldComparisonObj.FldName4Ctl; // 用户ID
    pobjFldComparisonObj.FldValue = clsFldComparisonObj.FldValue4Ctl; // 用户名
    pobjFldComparisonObj.ComparisonOperator = clsFldComparisonObj.ComparisonOperator4Ctl; // 用户状态号
  }

  /// <summary>
  /// 在用户自定义控件中，设置关键字的值，是否只读
  /// </summary>
  /// <param name = "bolReadonly">是否只读</param>
  public static SetKeyReadOnly(bolReadonly: boolean) {
    $('#ddlFldName').prop('ReadOnly', bolReadonly);
  }
  /// <summary>
  /// 清除用户自定义控件中，所有控件的值
  /// </summary>
  public static Clear() {
    clsFldComparisonObj.FldName4Ctl = '';
    clsFldComparisonObj.FldValue4Ctl = '';
    clsFldComparisonObj.ComparisonOperator4Ctl = '';
  }

  /* 为插入记录做准备工作
   */
  public static AddNewRecord() {
    clsFldComparisonObj.SetKeyReadOnly(false);
    clsFldComparisonObj.btnOKUpd = '确认添加';
    clsFldComparisonObj.btnCancel = '取消添加';
    clsFldComparisonObj.Clear();
    //wucUsersB1.userId = clsUsersDnPathFuncMapRela_GetMaxStrId_S();
  }

  /* 添加新记录
   */
  public static btnAddNewRecord_Click() {
    clsFldComparisonObj.OpType = 'Add';
    try {
      console.log('clsFldComparisonObj.arrFldNameLst:(In clsFldComparisonObj)');
      console.log(clsFldComparisonObj.arrFldNameLst);
      clsFldComparisonObj.BindDdlComparisonOperator('ddlComparisonOperator');
      clsFldComparisonObj.BindDdlFldName('ddlFldName', clsFldComparisonObj.arrFldNameLst);
      clsFldComparisonObj.AddNewRecord();
    } catch (e: any) {
      console.log('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*
   * 用户状态号
   */
  public static set FldName4Ctl(value: string) {
    const divName = this.getDivName();
    if (value == '') return;
    SetSelectValueByIdInDivObj(divName, 'ddlFldName', value);
  }
  /*
   * 用户状态号
   */
  public static get FldName4Ctl(): string {
    const strValue = GetSelectValueInDivObj(clsFldComparisonObj.divQuery, 'ddlFldName');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  /*
   * 用户名
   */
  public static get FldValue4Ctl(): string {
    const strValue = GetInputValueInDivObj(clsFldComparisonObj.divQuery, 'txtFldValue');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }
  /*
   * 用户名
   */
  public static set FldValue4Ctl(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtFldValue', value);
  }

  /*
   * 用户状态号
   */
  public static set ComparisonOperator4Ctl(value: string) {
    const divName = this.getDivName();
    if (value == '') return;
    SetSelectValueByIdInDivObj(divName, 'ddlComparisonOperator', value);
  }
  /*
   * 用户状态号
   */
  public static get ComparisonOperator4Ctl(): string {
    const strValue = GetSelectValueInDivObj(clsFldComparisonObj.divQuery, 'ddlComparisonOperator');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  /*
   * 设置取消按钮的标题
   */
  public static set btnCancel(value: string) {
    SetButtonHtmlInDivObj(clsFldComparisonObj.divEdit, 'btnCancel', value);
  }
  /*
   * 设置确定按钮的标题
   */
  public static set btnOKUpd(value: string) {
    SetButtonHtmlInDivObj(clsFldComparisonObj.divEdit, 'btnOKUpd_FC', value);
  }
  /*
   * 获取按钮的标题
   */
  public static get btnOKUpd(): string {
    return $('#btnOKUpd_FC').html();
  }
  /*
   * 设置关键字的值
   */
  public static set keyId(value: string) {
    SetInputValueInDivObj(clsFldComparisonObj.divEdit, 'hidKeyId_FC', value);
  }
  /*
   * 设置关键字的值
   */
  public static get keyId(): string {
    const strValue = GetInputValueInDivObj(clsFldComparisonObj.divQuery, 'hidKeyId_FC');
    if (strValue == undefined) return '';
    else if (strValue == '0') return '';
    else return strValue;
  }

  /*
   * 设置操作类型:Add||Update||Detail
   */
  public static set OpType(value: string) {
    SetInputValueInDivObj(clsFldComparisonObj.divEdit, 'hidOpType_FC', value);
  }
  /**
   * 获取编辑div对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public static getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    clsFldComparisonObj.divEdit = clsFldComparisonObj.EditObj.$refs.refDivEdit;
    if (clsFldComparisonObj.divEdit == null) {
      if (clsFldComparisonObj.times4TestShowDialog < 2) {
        clsFldComparisonObj.times4TestShowDialog++;
        setTimeout(() => {
          this.getDivName();
        }, 100);
      } else {
        const strMsg = Format(
          '当前编辑区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
      return null;
    } else {
      clsFldComparisonObj.times4TestShowDialog = 0;
    }
    return clsFldComparisonObj.divEdit;
  }
}
