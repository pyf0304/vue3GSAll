// import { XzMajorDirection_Edit } from '@/viewsBase/BaseInfo/XzMajorDirection_Edit';
import $ from 'jquery';
import { clsXzMajorDirectionEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorDirectionEN';
import {
  XzMajorDirection_AddNewRecordAsync,
  XzMajorDirection_GetMaxStrIdAsync,
  XzMajorDirection_GetObjByMajorDirectionIdAsync,
  XzMajorDirection_ReFreshCache,
} from '@/ts/L3ForWApi/BaseInfo/clsXzMajorDirectionWApi';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { XzMajorDirection_Edit } from '@/viewsBase/BaseInfo/XzMajorDirection_Edit';
import { HideDivInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { userStore } from '@/store/modulesShare/user';
/* XzMajorDirection_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class XzMajorDirection_EditEx extends XzMajorDirection_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;

    const objPage: XzMajorDirection_EditEx = <XzMajorDirection_EditEx>(
      XzMajorDirection_Edit.GetPageEditObj('XzMajorDirection_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'XzMajorDirection_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'XzMajorDirection_EditEx.btn_Click');

        break;
    }
  }

  public async btnOKUpd_Click() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmitXzMajorDirection;
    try {
      let returnBool;
      switch (strCommandText) {
        case '添加':
          await this.AddNewRecord();
          break;
        case '确认添加':
          //这是一个单表的插入的代码,由于逻辑层太简单,
          //就把逻辑层合并到控制层,
          if (this.opType == 'AddWithMaxId') {
            const returnBool2: string = await this.AddNewRecordWithMaxIdSave();
            if (IsNullOrEmpty(returnBool2) == false) {
              this.HideDialog_XzMajorDirection();
              this.iShowList.BindGvCache(clsXzMajorDirectionEN._CurrTabName, '');
            }
          } else {
            const returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              this.HideDialog_XzMajorDirection();
              //this.BindGv_vXzMajorDirection();
              this.iShowList.BindGvCache(clsXzMajorDirectionEN._CurrTabName, '');
            }
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          returnBool = await this.UpdateRecordSave();
          if (returnBool == true) {
            XzMajorDirection_ReFreshCache(userStore.getIdXzMajor);
            this.HideDialog_XzMajorDirection();
            this.iShowList.BindGvCache(clsXzMajorDirectionEN._CurrTabName, '');
          }

          break;
        default:
          AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');
          break;
      }

      HideDivInDivObj(divName, 'divLoading');
      //去掉提交按钮不可用状态
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
  /* 根据关键字获取相应的记录的对象
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async UpdateRecord(strMajorDirectionId: string): Promise<boolean> {
    this.btnSubmitXzMajorDirection = '确认修改';
    this.btnCancelXzMajorDirection = '取消修改';
    this.keyId = strMajorDirectionId;
    const strUserId = userStore.getUserId;

    try {
      const objXzMajorDirectionEN = await XzMajorDirection_GetObjByMajorDirectionIdAsync(
        strMajorDirectionId,
      );
      if (objXzMajorDirectionEN == null) return false;
      // //通过判断数据用户是否是当前登录用户；
      if (objXzMajorDirectionEN.updUser == strUserId) {
        this.ShowDialog_XzMajorDirection('Update');
        this.GetDataFromXzMajorDirectionClass(objXzMajorDirectionEN);
        console.log('完成UpdateRecord!');
        //resolve(jsonData);
        return true;
      } else {
        alert('当前数据不是您所添加，不能修改！');
        return false;
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSave() {
    try {
      const returnString: string = await XzMajorDirection_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = `获取表XzMajorDirection的最大关键字为空，不成功，请检查!`;
        //显示信息框
        alert(strInfo);
      } else {
        $('#txtMajorDirectionId').val(returnString);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }

    const objXzMajorDirectionEN: clsXzMajorDirectionEN = new clsXzMajorDirectionEN();
    this.PutDataToXzMajorDirectionClass(objXzMajorDirectionEN);
    try {
      //const responseText = await XzMajorDirection_IsExistAsync(objXzMajorDirectionEN.majorDirectionId);
      //strIdCurrEduclsbolIsExist: boolean = responseText;
      //if (bolIsExist == true) {
      //    strIdCurrEduclsstrMsg: string = `添加记录时，关键字：${objXzMajorDirectionEN.majorDirectionId}已经存在！`;
      //    alert(strMsg);
      //    return responseText;//一定要有一个返回值，否则会出错！
      //}
      const responseText2 = await XzMajorDirection_AddNewRecordAsync(objXzMajorDirectionEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
        XzMajorDirection_ReFreshCache(userStore.getIdXzMajor);
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
    }
    return true; //一定要有一个返回值，否则会出错！
  }
}
