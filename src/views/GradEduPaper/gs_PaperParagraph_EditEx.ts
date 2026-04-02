//import * as QQ from "q";
import $ from 'jquery';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsPublicParagraph } from '@/ts/FunClass/clsPublicParagraph';
import { gs_PaperParagraphCRUD } from '@/viewsBase/GradEduPaper/gs_PaperParagraphCRUD';
import { gs_PaperParagraph_Edit } from '@/viewsBase/GradEduPaper/gs_PaperParagraph_Edit';
import { clsgs_PaperParagraphEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperParagraphEN';
import { clsgs_PaperParagraphVerEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperParagraphVerEN';
import { clsvgs_PaperParagraphEN } from '@/ts/L0Entity/GradEduPaper/clsvgs_PaperParagraphEN';
import {
  gs_PaperParagraphVer_AddNewRecordAsync,
  gs_PaperParagraphVer_GetFirstObjAsync,
  gs_PaperParagraphVer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperParagraphVerWApi';
import {
  gs_PaperParagraph_AddNewRecordWithMaxIdAsync,
  gs_PaperParagraph_ReOrderAsync,
  gs_PaperParagraph_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperParagraphWApi';
import { clsOrderByData } from '@/ts/PubFun/clsOrderByData';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsStackTrace } from '@/ts/PubFun/clsStackTrace';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { GetInputValueInDivObj, GetInputValueInDivObjN } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { GetHidPaperId, SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { userStore } from '@/store/modulesShare/user';

declare function startCompare(): void; //比较段落

declare function setTextboxio(): void;
/* gs_PaperParagraph_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PaperParagraph_EditEx extends gs_PaperParagraph_Edit {
  /*
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    */
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    const objPage: gs_PaperParagraph_EditEx = <gs_PaperParagraph_EditEx>(
      gs_PaperParagraph_Edit.GetPageEditObj('gs_PaperParagraph_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_PaperParagraph_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        objPage.btnAddNewRecordWithMaxId_Click();
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
        AccessBtnClickDefault(strCommandName, 'gs_PaperParagraph_EditEx.btn_Click');

        break;
    }
  }
  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnSubmit_Click() {
    const strCommandText: string = this.btnSubmitgs_PaperParagraph;
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
                this.HideDialog_gs_PaperParagraph();
                this.iShowList.BindGv(clsvgs_PaperParagraphEN._CurrTabName, '');
              }
            });
          } else {
            await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
              const returnKeyId: string = <string>jsonData;
              if (IsNullOrEmpty(returnKeyId) == false) {
                //存放返回主键
                $('#hidParagraphId').val(returnKeyId);
                this.keyId = returnKeyId;
                //HideDialog_gs_PaperParagraph();
                this.btnReOrder_Click();
                //this.iShowList.BindGv(clsvgs_PaperParagraphEN._CurrTabName);
              }
            });

            //添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                this.HideDialog_gs_PaperParagraph();
                this.iShowList.BindGv(clsvgs_PaperParagraphEN._CurrTabName, '');
              }
            });
          }
          break;
        case '确认修改':
          //这是一个单表的修改的代码,由于逻辑层太简单,
          await this.UpdateRecordSave().then((jsonData) => {
            const returnBool: boolean = jsonData;
            let strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
            strInfo += '(In gs_PaperParagraph_Edit.btnSubmit_Click)';

            //显示信息框
            console.log(strInfo);
            alert(strInfo);
            if (returnBool == true) {
              //HideDialog_gs_PaperParagraph();
              //this.iShowList.BindGv(clsvgs_PaperParagraphEN._CurrTabName);
            }
          });

          //修改记录的同时添加历史版本
          await this.AddVersionRecordSave().then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == true) {
              this.HideDialog_gs_PaperParagraph();
              this.iShowList.BindGv(clsvgs_PaperParagraphEN._CurrTabName, '');
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
  /*
重序
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnReOrder_Click)
*/
  public async btnReOrder_Click() {
    const divName = this.getDivName();
    if (this.PreCheck4Order() == false) return;
    //strSectionId: string = gs_PaperParagraphCRUD.SectionIdOrderNum;

    const strSectionId: string = GetInputValueInDivObj(divName, 'hidSectionId');
    const strPaperId: string = GetHidPaperId(divName);
    try {
      const objOrderByData: clsOrderByData = new clsOrderByData();
      const jsonObject = {
        sectionId: strSectionId,
        paperId: strPaperId,
      };
      const jsonStr: string = JSON.stringify(jsonObject);
      objOrderByData.ClassificationFieldValueLst = jsonStr;
      await gs_PaperParagraph_ReOrderAsync(objOrderByData);
      //gs_PaperParagraph_ReFreshCache();
    } catch (e: any) {
      const strMsg = `重序出错。错误:${e}.(In ${clsStackTrace.GetCurrClassFunction()})`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return;
    }
    this.iShowList.BindGv(clsvgs_PaperParagraphEN._CurrTabName, '');
  }
  /*
移动记录序号时的预检查函数
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PreCheck4Order)
*/
  public PreCheck4Order(): boolean {
    const strSectionId: string = gs_PaperParagraphCRUD.SectionIdOrderNum;
    if (strSectionId == '') {
      const strMsg = `请输入sectionId!`;
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
      return false;
    }
    return true;
  }
  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
   */
  public async AddNewRecordWithMaxIdSave(): Promise<string> {
    const divName = this.getDivName();

    const objgs_PaperParagraphEN: clsgs_PaperParagraphEN = new clsgs_PaperParagraphEN();
    objgs_PaperParagraphEN.SetCreateDate(clsPubFun4Web.getNowDate_ymd()); // 修改日期
    objgs_PaperParagraphEN.SetCreateUser(userStore.getUserId); //用户
    const strUserId = userStore.getUserId;

    const strColorCode = GetInputValueInDivObj(divName, 'hidUserColorCode');
    //如果是添加段落，那么肯定是第一条记录，只需要把当前用户的色码块通过html标签加入到段落内容；

    this.paragraphContent = `<span style='color:${strColorCode}' name='${strUserId}'>${this.paragraphContent}</span>`;

    this.PutDataTogs_PaperParagraphClass(objgs_PaperParagraphEN);
    try {
      const responseKeyId = await gs_PaperParagraph_AddNewRecordWithMaxIdAsync(
        objgs_PaperParagraphEN,
      );
      const returnKeyId: string = responseKeyId;
      if (IsNullOrEmpty(returnKeyId) == false) {
        //gs_PaperParagraph_ReFreshCache();
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseKeyId; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      throw strMsg; //一定要有一个返回值，否则会出错！
    }
    return ''; //一定要有一个返回值，否则会出错！
  }
  /* 函数功能:把界面上的属性数据传到类对象中
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   <param name = "pobjgs_PaperParagraphEN">数据传输的目的类对象</param>
 */
  public async PutDataTogs_PaperParagraphClass(pobjgs_PaperParagraphEN: clsgs_PaperParagraphEN) {
    const divName = this.getDivName();
    //存放论文ID
    const strPaperId = GetHidPaperId(divName);
    //节点Id
    const strSectionId = GetInputValueInDivObj(divName, 'hidSectionId');
    pobjgs_PaperParagraphEN.SetPaperId(strPaperId);
    pobjgs_PaperParagraphEN.SetSectionId(strSectionId);
    pobjgs_PaperParagraphEN.SetParagraphTypeId(this.paragraphTypeId); // 段落类型
    //根据下拉框的选择值 来判断存内容还是图片
    if (this.paragraphTypeId == '01') {
      pobjgs_PaperParagraphEN.SetParagraphContent(this.paragraphContent); // 段落内容
    } else {
      //图片，那么需要获取隐藏图片的返回字段
      const strfileNamePic = GetInputValueInDivObj(divName, 'hdnFileOne');
      pobjgs_PaperParagraphEN.SetParagraphContent(strfileNamePic); // 段落内容
    }
    const orderNum = GetInputValueInDivObjN(divName, 'hidOrderNum');
    if (orderNum != 0) {
      pobjgs_PaperParagraphEN.SetOrderNum(orderNum);
    } else {
      pobjgs_PaperParagraphEN.SetOrderNum(30);
    }

    pobjgs_PaperParagraphEN.SetParagraphStateId('01'); //01未编辑 02 编辑中
    pobjgs_PaperParagraphEN.SetUpdDate(clsPubFun4Web.getNowDate_ymd()); // 修改日期
    pobjgs_PaperParagraphEN.SetUpdUser(userStore.getUserId); //用户

    pobjgs_PaperParagraphEN.SetMemo(this.memo); // 备注
  }
  /* 修改记录
(AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async UpdateRecordSave() {
    const divName = this.getDivName();
    const strThisFuncName = this.UpdateRecordSave.name;
    //
    const objgs_PaperParagraphEN: clsgs_PaperParagraphEN = new clsgs_PaperParagraphEN();
    objgs_PaperParagraphEN.SetParagraphId(this.keyId);
    // let strHisToryUserId = '';

    //修改段落，那么首先需要查询该段落的最后一条历史记录，得到段落数据，然后取出来与当前段落数据比较，返回更改的段落数据
    const strWhereCond2 = ` 1=1 and paragraphId=${this.keyId} order by ParagraphVId desc `;
    // intVersionCount = await gs_PaperParagraphVer_GetRecCountByCondAsync(strWhereCond2);
    await gs_PaperParagraphVer_GetFirstObjAsync(strWhereCond2).then((jsonData) => {
      const objgs_PaperParagraphVerEN: clsgs_PaperParagraphVerEN = <clsgs_PaperParagraphVerEN>(
        jsonData
      );

      if (objgs_PaperParagraphVerEN != null) {
        //需要去标签的更改数据存放
        $('#inpLeft').val(objgs_PaperParagraphVerEN.paragraphContent);
        //存放老的带标签的数据不更改
        $('#inpOldData').val(objgs_PaperParagraphVerEN.paragraphContent);
        // const strHisToryUserId = objgs_PaperParagraphVerEN.updUser;
      }
    });
    ////如果当前修改的编辑人和获取的历史编辑人一致，那么则不用比对数据
    //if (strHisToryUserId != strUserId) {
    //    //调用比较方法
    //    startCompare();
    //    //比较之后，把返回结果赋值给操作段落控件
    //    this.paragraphContent = $("#inpRight").val();
    //}
    //else {

    //}

    //调用比较方法，得到有差别的字符串；
    startCompare();

    //返回比对后的字符串数据；
    //strIdCurrEduclsstrOld = $("#inpLeft").val();
    const strInputNewContent = GetInputValueInDivObj(divName, 'txtParagraphContent');
    const strCheckBackNew = GetInputValueInDivObj(divName, 'inpRight');
    const strNewTextContent = clsPublicParagraph.GetNewStringList(
      strInputNewContent,
      strCheckBackNew,
    );
    //把得到新的数据存入编辑控件
    $('#txtParagraphContent').val(strNewTextContent);

    this.PutDataTogs_PaperParagraphClass(objgs_PaperParagraphEN);
    objgs_PaperParagraphEN.sfUpdFldSetStr = objgs_PaperParagraphEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objgs_PaperParagraphEN.paragraphId == '' ||
      objgs_PaperParagraphEN.paragraphId == undefined
    ) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await gs_PaperParagraph_UpdateRecordAsync(objgs_PaperParagraphEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        //gs_PaperParagraph_ReFreshCache();
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

  /* 函数功能:把类对象的属性内容显示到界面上
   注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
    如果在设置数据库时,就应该一级字段在前,二级字段在后
    (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
    <param name = "pobjgs_PaperParagraphEN">表实体类对象</param>
  */
  public async GetDataFromgs_PaperParagraphClass(pobjgs_PaperParagraphEN: clsgs_PaperParagraphEN) {
    const divName = this.getDivName();
    if (divName == null) return;

    //存放论文ID
    SetHidPaperId(divName, pobjgs_PaperParagraphEN.paperId);
    //节点Id
    $('#hidSectionId').val(pobjgs_PaperParagraphEN.sectionId);
    this.paragraphTypeId = pobjgs_PaperParagraphEN.paragraphTypeId; // 段落类型
    $('#hidParagraphId').val(pobjgs_PaperParagraphEN.paragraphId);
    $('#hidOrderNum').val(pobjgs_PaperParagraphEN.orderNum);
    //根据下拉框的选择值 来判断存内容还是图片
    if (this.paragraphTypeId == '01') {
      $('#trParagraphContent').show();
      this.paragraphContent = pobjgs_PaperParagraphEN.paragraphContent; // 段落内容
    } else {
      $('#trParagraphPic').show();
      //图片，那么需要获取隐藏图片的返回字段
      $('#hdnFileOne').val(pobjgs_PaperParagraphEN.paragraphContent); // 段落内容图片
    }

    //this.paragraphContent = pobjgs_PaperParagraphEN.paragraphContent;// 段落内容
    this.memo = pobjgs_PaperParagraphEN.memo; // 备注
    setTextboxio();
  }

  /* 添加新记录
(AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
*/
  public async btnAddNewParagraph_Click(
    strPaperId: string,
    strSectionId: string,
    orderNum: string,
    colorCode: string,
  ) {
    const divName = this.getDivName();
    if (divName == null) return;

    try {
      await this.btnAddNewRecordWithMaxId_Click();
      this.opType = 'AddWithMaxId';
      //存放论文ID
      SetHidPaperId(divName, strPaperId);
      //节点Id
      $('#hidSectionId').val(strSectionId);
      $('#hidOrderNum').val(orderNum);
      $('#hidUserColorCode').val(colorCode);
      $('#hidUserId').val(userStore.getUserId);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  public async btnUpdategs_PaperParagraph_Click(paragraphId: string, colorCode: string) {
    try {
      this.keyId = paragraphId;
      await this.btnUpdateRecordInTab_Click(paragraphId);
      $('#hidParagraphId').val(paragraphId);
      $('#hidUserColorCode').val(colorCode);
      $('#hidUserId').val(userStore.getUserId);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  //添加或修改时 历史记录；

  //添加历史版本
  public async AddVersionRecordSave() {
    const divName = this.getDivName();
    const strThisFuncName = this.AddVersionRecordSave.name;

    //
    const objgs_PaperParagraphVerEN: clsgs_PaperParagraphVerEN = new clsgs_PaperParagraphVerEN();
    const strParagraphId = GetInputValueInDivObj(divName, 'hidParagraphId');
    objgs_PaperParagraphVerEN.SetParagraphId(strParagraphId);
    this.PutDataTogs_PaperParagraphVClass(objgs_PaperParagraphVerEN);

    try {
      const responseText2 = await gs_PaperParagraphVer_AddNewRecordAsync(objgs_PaperParagraphVerEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1=1 and paragraphId=${strParagraphId}`;
        const intVersionCount = await gs_PaperParagraphVer_GetRecCountByCondAsync(strWhereCond2);

        const objgs_PaperParagraphEN: clsgs_PaperParagraphEN = new clsgs_PaperParagraphEN();
        objgs_PaperParagraphEN.SetParagraphId(strParagraphId);
        objgs_PaperParagraphEN.SetVersionCount(intVersionCount);

        objgs_PaperParagraphEN.sfUpdFldSetStr = objgs_PaperParagraphEN.updFldString; //设置哪些字段被修改(脏字段)
        if (
          objgs_PaperParagraphEN.paragraphId == '' ||
          objgs_PaperParagraphEN.paragraphId == undefined
        ) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        gs_PaperParagraph_UpdateRecordAsync(objgs_PaperParagraphEN).then((jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == true) {
            return true;
          } else {
            const strInfo = `添加历史版本数不成功!`;
            alert(strInfo);
            console.log('添加历史版本数不成功');
            return false;
          }
        });
        return true;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加版本记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjgs_PaperParagraphEN">数据传输的目的类对象</param>
*/
  public PutDataTogs_PaperParagraphVClass(pobjgs_PaperParagraphEN: clsgs_PaperParagraphVerEN) {
    const divName = this.getDivName();
    //存放论文ID
    const strPaperId = GetHidPaperId(divName);
    //段落ID
    //const strParagraphId = $("#hidParagraphId").val();
    //pobjgs_PaperParagraphEN.SetParagraphId(strParagraphId);//段落Id
    pobjgs_PaperParagraphEN.SetPaperId(strPaperId);
    //节点Id
    const strSectionId = GetInputValueInDivObj(divName, 'hidSectionId');
    pobjgs_PaperParagraphEN.SetParagraphTypeId(this.paragraphTypeId); // 段落类型
    //根据下拉框的选择值 来判断存内容还是图片
    if (this.paragraphTypeId == '01') {
      pobjgs_PaperParagraphEN.SetParagraphContent(this.paragraphContent); // 段落内容
    } else {
      //图片，那么需要获取隐藏图片的返回字段
      const strfileNamePic = GetInputValueInDivObj(divName, 'hdnFileOne');
      pobjgs_PaperParagraphEN.SetParagraphContent(strfileNamePic); // 段落内容
    }

    pobjgs_PaperParagraphEN.SetUpdDate(clsPubFun4Web.getNowDate_ymd()); // 修改日期
    pobjgs_PaperParagraphEN.SetUpdUser(userStore.getUserId); //用户
    pobjgs_PaperParagraphEN.SetSectionId(strSectionId); // 修改日期
    pobjgs_PaperParagraphEN.SetMemo(this.memo); // 备注
  }

  /*
   /*
      * 设置关键字的值(Used In UpdateRecord())
     */
  //public set keyId(value: string) {
  //    $("#hidKeyId").val(value);
  //}
  /*
   * 设置关键字的值
   */
  //public get keyId(): string {
  //    return $("#hidKeyId").val();
  //}
}
