//import * as QQ from "q";
import $ from 'jquery';
import { Section_Edit } from '@/viewsBase/GradEduPaper/Section_Edit';
import { clsSectionEN } from '@/ts/L0Entity/GradEduPaper/clsSectionEN';
import { clsvSectionEN } from '@/ts/L0Entity/GradEduPaper/clsvSectionEN';
import {
  Section_AddNewRecordAsync,
  Section_CheckPropertyNew,
  Section_GetMaxStrIdAsync,
  Section_ReOrderAsync,
  Section_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsSectionWApi';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { GetInputValueInDivObjN } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { userStore } from '@/store/modulesShare/user';
import { sectionStore } from '@/store/modules/section';

/* Section_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class Section_EditEx extends Section_Edit {
  public paperId = '';
  public static parentId = '';
  public static answerTypeId = '';
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: Section_EditEx = <Section_EditEx>Section_Edit.GetPageEditObj('Section_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'Section_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPage.btnAddNewRecord_Click();
        break;

      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'Section_EditEx.btn_Click');

        break;
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnSubmit_Click() {
    const strCommandText: string = this.btnSubmitSection;
    try {
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'Add') {
            await this.AddNewRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                sectionStore.delObjLstByPaperId(this.paperId);
                this.HideDialog_Section();
                this.iShowList.BindGv(clsvSectionEN._CurrTabName, '');
              }
            });
          } else {
            await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
              const returnKeyId: string = <string>jsonData;
              if (IsNullOrEmpty(returnKeyId) == false) {
                sectionStore.delObjLstByPaperId(this.paperId);
                this.HideDialog_Section();
                this.btnReOrder_Click();
                this.iShowList.BindGv(clsvSectionEN._CurrTabName, '');
              }
            });
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          await this.UpdateRecordSave().then((jsonData) => {
            const returnBool: boolean = jsonData;
            let strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
            strInfo += '(In Section_Edit.btnSubmit_Click)';

            //显示信息框
            console.log(strInfo);
            alert(strInfo);
            if (returnBool == true) {
              sectionStore.delObjLstByPaperId(this.paperId);
              this.HideDialog_Section();
              this.btnReOrder_Click();
              this.iShowList.BindGv(clsvSectionEN._CurrTabName, '');
            }
          });
          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnSubmit_Click');

          break;
      }
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
  /* 函数功能:把界面上的属性数据传到类对象中
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   <param name = "pobjSectionEN">数据传输的目的类对象</param>
 */
  public async PutDataToSectionClass(pobjSectionEN: clsSectionEN) {
    const divName = this.getDivName();
    //存放论文ID
    const strPaperId = this.paperId;
    //父节点Id
    const parentId = Section_EditEx.parentId;
    //排序号
    const orderNum = GetInputValueInDivObjN(divName, 'hidOrderNum');
    if (orderNum != 0) {
      pobjSectionEN.SetOrderNum(orderNum);
    } else {
      pobjSectionEN.SetOrderNum(30);
    }

    pobjSectionEN.SetSectionName(this.sectionName); // 节名
    pobjSectionEN.SetPaperId(strPaperId);
    pobjSectionEN.SetParentId(parentId);
    pobjSectionEN.SetUpdUser(userStore.getUserId); // 修改人
  }
  /* 函数功能:把类对象的属性内容显示到界面上
   注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
    如果在设置数据库时,就应该一级字段在前,二级字段在后
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
    <param name = "pobjSectionEN">表实体类对象</param>
  */
  public async GetDataFromSectionClass(pobjSectionEN: clsSectionEN) {
    const divName = this.getDivName();
    if (divName == null) return;
    //存放论文ID
    SetHidPaperId(divName, pobjSectionEN.paperId);
    //父节点Id
    Section_EditEx.answerTypeId = pobjSectionEN.parentId;
    //排序号
    $('#hidOrderNum').val(pobjSectionEN.orderNum);

    this.sectionName = pobjSectionEN.sectionName; // 节名
  }

  /* 添加新记录
(AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
*/
  public async btnAddNewSection_Click(strPaperId: string, parentId: string) {
    const divName = this.getDivName();
    if (divName == null) return;
    try {
      await this.btnAddNewRecordWithMaxId_Click();
      this.opType = 'AddWithMaxId';
      //存放论文ID
      SetHidPaperId(divName, strPaperId);
      //父节点Id
      Section_EditEx.answerTypeId = parentId;
      //判断传入的父节点，然后显示不同的提示名称；例如 root 显示章名称；否则就是添加节名称；
      if (parentId == 'root') {
        $('#lblSectionName').html('章名称');
      } else {
        $('#lblSectionName').html('节名称');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  public async btnUpdateSection_Click(sectionId: string) {
    try {
      this.keyId = sectionId;
      await this.btnUpdateRecordInTab_Click(sectionId);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 修改记录
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateRecordSave() {
    const strThisFuncName = this.UpdateRecordSave.name;

    //
    const objSectionEN: clsSectionEN = new clsSectionEN();
    objSectionEN.SetSectionId(this.keyId);
    this.PutDataToSectionClass(objSectionEN);
    objSectionEN.sfUpdFldSetStr = objSectionEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objSectionEN.sectionId == '' || objSectionEN.sectionId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await Section_UpdateRecordAsync(objSectionEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        //Section_ReFreshCache();
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
重序
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
*/
  public async btnReOrder_Click() {
    // if (this.PreCheck4Order() == false) return;
    const strSectionId: string = Section_EditEx.parentId;
    const strPaperId: string = this.paperId;
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        parentId: strSectionId,
        paperId: strPaperId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await Section_ReOrderAsync(objOrderByData);
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
      alert(strMsg);
      return;
    }
    this.iShowList.BindGv(clsvSectionEN._CurrTabName, '');
  }

  // /*
  // /*
  //    * 设置关键字的值(Used In UpdateRecord())
  //   */
  // public set keyId(value: string) {
  //     $("#hidKeyId").val(value);
  // }
  // /*
  // * 设置关键字的值
  //*/
  // public get keyId(): string {
  //     return $("#hidKeyId").val();
  // }

  /* 添加新记录
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 */
  public async AddNewRecordSave() {
    const strThisFuncName = this.AddNewRecordSave.name;
    try {
      Section_GetMaxStrIdAsync().then((jsonData) => {
        const returnString: string = jsonData.toString();
        if (returnString == '') {
          const strInfo = `获取表Section的最大关键字为空，不成功，请检查!`;
          //显示信息框
          alert(strInfo);
        } else {
          $('#txtSectionId').val(returnString);
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }

    const objSectionEN: clsSectionEN = new clsSectionEN();
    this.PutDataToSectionClass(objSectionEN);
    try {
      //const responseText = await Section_IsExistAsync(objSectionEN.sectionId);
      //strIdCurrEduclsbolIsExist: boolean = responseText;
      //if (bolIsExist == true) {
      //    strIdCurrEduclsstrMsg: string = `添加记录时，关键字：${objSectionEN.sectionId}已经存在！`;
      //    alert(strMsg);
      //    return responseText;//一定要有一个返回值，否则会出错！
      //}
      try {
        Section_CheckPropertyNew(objSectionEN);
      } catch (e: any) {
        const strMsg = Format(
          '检查数据不成功,{0}.(in {1}.{2})',
          e,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false; //一定要有一个返回值,否则会出错!
      }
      const returnBool = await Section_AddNewRecordAsync(objSectionEN);

      if (returnBool == true) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return returnBool; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
    }
    return true; //一定要有一个返回值，否则会出错！
  }
}
