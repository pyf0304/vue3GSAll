import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { Concept_Edit } from '@/viewsBase/GradEduTopic/Concept_Edit';
import { clsConceptAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsConceptAttachmentEN';
import { clsConceptEN } from '@/ts/L0Entity/GradEduTopic/clsConceptEN';
import { clsConceptVerEN } from '@/ts/L0Entity/GradEduTopic/clsConceptVerEN';
import {
  ConceptAttachment_AddNewRecordAsync,
  ConceptAttachment_DelConceptAttachmentsByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsConceptAttachmentWApi';
import {
  ConceptVer_AddNewRecordAsync,
  ConceptVer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsConceptVerWApi';
import {
  Concept_AddNewRecordAsync,
  Concept_GetMaxStrIdAsync,
  Concept_GetObjByConceptIdAsync,
  Concept_IsExistAsync,
  Concept_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsConceptWApi';
import { vConcept_ReFreshThisCache } from '@/ts/L3ForWApi/GradEduTopic/clsvConceptWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { userStore } from '@/store/modulesShare/user';
declare let window: any;

/* Concept_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class Concept_EditEx extends Concept_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: Concept_EditEx = <Concept_EditEx>Concept_Edit.GetPageEditObj('Concept_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'Concept_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'Concept_EditEx.btn_Click');

        break;
    }
  }

  /* 添加新记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
  */
  public async btnAddNewRecord_Click() {
    const divName = this.getDivName();
    if (divName == null) return;
    this.opType = 'Add';
    try {
      await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');
      await this.AddNewRecord();
      //获取分享Id
      const responseText1 = await gs_UserConfigEx_GetNewReturnShareIdEx('06', userStore.getUserId);
      const strShareId: string = responseText1;
      //const returnBool: boolean = !!responseText2;
      if (strShareId != '') {
        this.shareId = strShareId;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 为插入记录做准备工作
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
 */
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    this.btnSubmitConcept = '确认添加';
    this.btnCancelConcept = '取消添加';
    this.Clear();
    //去掉提交按钮不可用状态
    $('#btnOKUpd').attr('disabled', 'false');
    //wucConceptB1.conceptId = clsConceptBL.GetMaxStrId_S();
  }
  /* 添加新记录，保存函数
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 */
  public async AddNewRecordSave() {
    const divName = this.getDivName();
    try {
      const returnString = await Concept_GetMaxStrIdAsync();
      if (returnString == '') {
        const strInfo = `获取表ViewPoint的最大关键字为空，不成功，请检查!`;
        //显示信息框
        alert(strInfo);
      } else {
        $('#txtConceptId').val(returnString);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    if (GetInputValueInDivObj(divName, 'txtConceptId') != '') {
      const objConceptEN: clsConceptEN = new clsConceptEN();
      objConceptEN.SetCreateDate(clsPubFun4Web.getNowDate_ymd());
      const strConceptId = GetInputValueInDivObj(divName, 'txtConceptId');
      $('#hidConceptId').val(strConceptId);

      this.PutDataToConceptClass(objConceptEN);
      try {
        const responseText = await Concept_IsExistAsync(objConceptEN.conceptId);
        const bolIsExist: boolean = responseText;
        if (bolIsExist == true) {
          const strMsg = `添加记录时，关键字：${objConceptEN.conceptId}已经存在！`;
          alert(strMsg);
          return responseText; //一定要有一个返回值，否则会出错！
        }
        const responseText2 = await Concept_AddNewRecordAsync(objConceptEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          ////添加引用论文之前需要判断是否有引用论文；有则执行论文添加、没有则执行附件；
          //if ($("#txtPaperId").val() == "") {
          //添加成功，则执行附件添加方法；
          //判断是否有返回的附件路径值
          if (GetInputValueInDivObj(divName, 'hdnFileOne') != '') {
            //第一个附件框判断
            const fileOne = GetInputValueInDivObj(divName, 'hdnFileOne');
            this.AddPaperSubAttachmentSave(fileOne, 'first');
          } else {
            if (GetInputValueInDivObj(divName, 'hdnFileTwo') != '') {
              const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
              this.AddPaperSubAttachmentSave(fileTwo, 'two');
            } else {
              if (GetInputValueInDivObj(divName, 'hdnFileThree') != '') {
                const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
                this.AddPaperSubAttachmentSave(fileThree, 'three');
              }
            }
          }
          //}
          //else {

          //    //1.这里执行添加观点引用论文；
          //    const objclsConceptCitationEN: clsConceptCitationEN = new clsConceptCitationEN();
          //    this.PutDataToclsConceptCitationClass(objclsConceptCitationEN);
          //    //引用论文；
          //    const responseText3 = await ConceptCitation_AddNewRecordAsync(objclsConceptCitationEN);
          //    const returnBool: boolean = !!responseText3;

          //    if (returnBool == true) {

          //    }
          //    else {

          //    }
          //}
          this.iShowList.BindGvCache(clsConceptEN._CurrTabName, '');
          // Concept_ReFreshCache();
          //const arrConcept_Cache = await Concept_GetObjLstAsync("1=1");
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
    } else {
      const strInfo = `获取最大关键字为空，不成功!`;
      //显示信息框
      alert(strInfo);
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjConceptEN">数据传输的目的类对象</param>
   */
  public PutDataToConceptVClass(pobjConceptVerEN: clsConceptVerEN) {
    const strUserId = userStore.getUserId;
    pobjConceptVerEN.SetConceptId(this.conceptId); // 概念Id
    pobjConceptVerEN.SetConceptContent(this.conceptContent); // 概念内容
    pobjConceptVerEN.SetConceptName(this.conceptName); // 概念名称

    pobjConceptVerEN.SetCitationId(this.paperId); //引用论文Id；
    pobjConceptVerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjConceptVerEN.SetUpdUser(strUserId); // 修改用户Id
    pobjConceptVerEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjConceptVerEN.SetMemo(this.memo); // 备注
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjConceptEN">数据传输的目的类对象</param>
   */
  public async PutDataToConceptClass(pobjConceptEN: clsConceptEN) {
    const strUserId = userStore.getUserId;
    pobjConceptEN.SetConceptId(this.conceptId); // 概念Id
    pobjConceptEN.SetConceptContent(this.conceptContent); // 概念内容
    pobjConceptEN.SetConceptName(this.conceptName); // 概念名称
    pobjConceptEN.SetIsSubmit(false); // 是否提交
    pobjConceptEN.SetCitationId(this.paperId); //引用论文Id；
    pobjConceptEN.SetShareId(this.shareId);
    pobjConceptEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjConceptEN.SetUpdUser(strUserId); // 修改用户Id
    pobjConceptEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjConceptEN.SetMemo(this.memo); // 备注
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////修改时的方法
  /* 修改记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async UpdateRecordSave(): Promise<boolean> {
    const divName = this.getDivName();
    const strThisFuncName = this.UpdateRecordSave.name;

    const objConceptEN: clsConceptEN = new clsConceptEN();
    objConceptEN.SetConceptId(this.keyId);

    $('#hidConceptId').val(this.keyId);

    this.PutDataToConceptClass(objConceptEN);
    objConceptEN.sfUpdFldSetStr = objConceptEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objConceptEN.conceptId == '' || objConceptEN.conceptId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool = await Concept_UpdateRecordAsync(objConceptEN);
      if (returnBool == true) {
        ////判断引用的论文ID是否为空
        //strPaperId = $("#txtPaperId").val();
        //if (strPaperId != "") {
        //    //，如果不为空，根据Id删除引用文件
        //    strIdCurrEduclsstrwhere = "conceptId ='" + objConceptEN.conceptId + "'";
        //    this.DelRecordViewpointCitationByWhere(strwhere);

        //}
        //else {

        //如果等于空，那么就去判断附件是否为空；
        //得到相关论文附件地址，判断是否为空 只要有一个不为空都执行附件清除功能；
        if (
          (GetInputValueInDivObj(divName, 'hdnFileOne') != '' && $('#hdnFileOne') != undefined) ||
          (GetInputValueInDivObj(divName, 'hdnFileTwo') != '' && $('#hdnFileTwo') != undefined) ||
          (GetInputValueInDivObj(divName, 'hdnFileThree') != '' && $('#hdnFileThree') != undefined)
        ) {
          //根据Id删除附件
          const strwhere = `conceptId ='${objConceptEN.conceptId}'`;
          this.DelRecordByWhere(strwhere);
        }
        //}

        const strInfo = `修改记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `修改记录不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('完成UpdateRecordSave');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }

  //添加历史版本
  public async AddVersionRecordSave() {
    const strThisFuncName = this.AddVersionRecordSave.name;

    const objConceptVerEN: clsConceptVerEN = new clsConceptVerEN();
    objConceptVerEN.SetConceptId(this.conceptId);
    this.PutDataToConceptVClass(objConceptVerEN);

    try {
      const responseText2 = await ConceptVer_AddNewRecordAsync(objConceptVerEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1 =1 and conceptId=${this.conceptId}`;
        const intVersionCount = await ConceptVer_GetRecCountByCondAsync(strWhereCond2);

        const objConceptEN: clsConceptEN = new clsConceptEN();
        objConceptEN.SetConceptId(this.conceptId);
        objConceptEN.SetVersionCount(intVersionCount);

        objConceptEN.sfUpdFldSetStr = objConceptEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objConceptEN.conceptId == '' || objConceptEN.conceptId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        const returnBool = await Concept_UpdateRecordAsync(objConceptEN);
        if (returnBool == true) {
          return true;
        } else {
          const strInfo = `添加历史版本数不成功!`;
          alert(strInfo);
          console.log('添加历史版本数不成功');
          return false;
        }

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

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
   具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
 */
  public async btnOKUpd_Click() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmitConcept;
    try {
      if (userStore.getUserId != '') {
        const strSubViewpointId = GetInputValueInDivObj(divName, 'hidConceptId');
        let returnBool6;
        let returnBool7;
        let returnBool;
        switch (strCommandText) {
          case '添加':
            await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,
            //if (this.opType == "AddWithMaxId") {
            //    const responseText3 = await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
            //        const returnBool2: boolean = jsonData;
            //        if (returnBool2 == true) {
            //            HideDialog();
            //            this.BindGv_ConceptCache();;
            //        }
            //    });
            //}
            //else {

            //}
            returnBool = await this.AddNewRecordSave();
            //更新总表3个参数 主键、子表类型、页面操作类型；

            returnBool6 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strSubViewpointId,
              '06',
              '1',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool6 == true) {
              console.log('论文子观点数据总表同步成功；');
            } else {
              console.log('论文子观点数据总表同步失败；');
            }
            //修改记录的同时添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                vConcept_ReFreshThisCache(clsPubLocalStorage.idCurrEduCls);
                this.HideDialog_Concept();
                this.iShowList.BindGvCache(clsConceptEN._CurrTabName, '');
                //alert("添加历史版本出问题！");
              }
            });
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            await this.UpdateRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                //Concept_ReFreshCache();
                //const arrConcept_Cache = Concept_GetObjLstAsync("1=1");
              }
            });
            //更新总表3个参数 主键、子表类型、页面操作类型；

            returnBool7 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strSubViewpointId,
              '06',
              '2',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool7 == true) {
              console.log('论文子观点数据总表同步成功；');
            } else {
              console.log('论文子观点数据总表同步失败；');
            }
            //修改记录的同时添加历史版本
            returnBool = await this.AddVersionRecordSave();
            if (returnBool == true) {
              this.HideDialog_Concept();
              vConcept_ReFreshThisCache(clsPubLocalStorage.idCurrEduCls);
              this.iShowList.BindGvCache(clsConceptEN._CurrTabName, '');
              //alert("添加历史版本出问题！");
            }

            break;
          default:
            AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

            break;
        }
      } else {
        alert('登录超时，请重新登录');
        reLogin();
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
  public async UpdateRecord(strConceptId: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    this.btnSubmitConcept = '确认修改';
    this.btnCancelConcept = '取消修改';
    this.keyId = strConceptId;
    const strUserId = userStore.getUserId;

    try {
      const objConceptEN = await Concept_GetObjByConceptIdAsync(strConceptId);
      if (objConceptEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }

      // //通过判断数据用户是否是当前登录用户；
      if (objConceptEN.updUser == strUserId) {
        //判断数据是否提交，提交则不可修改；
        if (objConceptEN.isSubmit == false) {
          this.ShowDialog_Concept('Update');
          this.GetDataFromConceptClass(objConceptEN);
          console.log('完成UpdateRecord!');
        } else {
          alert('当前数据已提交,不能修改！');
          return false;
        }
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
    return true;
  }
  /* 函数功能:把类对象的属性内容显示到界面上
  注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   如果在设置数据库时,就应该一级字段在前,二级字段在后
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   <param name = "pobjConceptEN">表实体类对象</param>
 */
  public async GetDataFromConceptClass(pobjConceptEN: clsConceptEN) {
    this.conceptId = pobjConceptEN.conceptId; // 概念Id
    this.conceptContent = pobjConceptEN.conceptContent; // 概念内容
    this.conceptName = pobjConceptEN.conceptName; // 概念名称
    this.isSubmit = pobjConceptEN.isSubmit; // 是否提交
    this.paperId = pobjConceptEN.citationId; //引用论文Id
    this.shareId = pobjConceptEN.shareId;
    this.updDate = pobjConceptEN.updDate; // 修改日期
    this.updUser = pobjConceptEN.updUser; // 修改用户Id
    this.memo = pobjConceptEN.memo; // 备注
  }
  //概念提交审核
  public async btnIsSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    await this.SubmitRecord(strKeyId);
    this.iShowList.BindGvCache(clsConceptEN._CurrTabName, strKeyId);
  }
  //提交判断；
  public async SubmitRecord(strConceptId: string) {
    this.keyId = strConceptId;

    try {
      const objConceptEN = await Concept_GetObjByConceptIdAsync(strConceptId);
      if (objConceptEN == null) return;
      //通过session 权限获取权限
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色 //学生00620003
      if (strRoleId == '00620003') {
        // //通过判断数据用户是否是当前登录用户；
        if (objConceptEN.updUser == strUserId) {
          //判断数据是否已审核
          if (objConceptEN.isSubmit == false) {
            this.SubmitRecordSave();
          } else {
            alert('当前数据已提交！');
            return;
          }
        } else {
          alert('当前数据不是您所添加，不能提交！');
          return;
        }
      } else {
        //可以提交
        //判断数据是否已提交
        if (objConceptEN.isSubmit == false) {
          this.SubmitRecordSave();
        } else {
          alert('当前数据已提交！');
          return;
        }
      }
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async SubmitRecordSave(): Promise<boolean> {
    const strThisFuncName = this.SubmitRecordSave.name;
    //
    const objConceptEN: clsConceptEN = new clsConceptEN();
    objConceptEN.SetConceptId(this.keyId);
    objConceptEN.SetIsSubmit(true);
    // this.PutDataToConceptClass(objConceptEN);
    objConceptEN.sfUpdFldSetStr = objConceptEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objConceptEN.conceptId == '' || objConceptEN.conceptId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool = await Concept_UpdateRecordAsync(objConceptEN);
      if (returnBool == true) {
        const strInfo = `提交成功!`;

        //显示信息框
        alert(strInfo);

        this.HideDialog_Concept();
        vConcept_ReFreshThisCache(clsPubLocalStorage.idCurrEduCls);
        this.iShowList.BindGvCache(clsConceptEN._CurrTabName, '');
      } else {
        const strInfo = `提交不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('提交失败');
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
  //取消提交
  public async btnCancelSubmit_Click(strKeyId: string) {
    // const strUserId = userStore.getUserId;

    if (strKeyId == '') {
      alert('请选择需要取消的记录！');
      return;
    }

    try {
      this.CancelSubmitRecordSave(strKeyId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
  }

  /*取消论文
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async CancelSubmitRecordSave(strKeyId: string) {
    const strThisFuncName = this.CancelSubmitRecordSave.name;
    //
    const objConceptEN: clsConceptEN = new clsConceptEN();
    objConceptEN.SetConceptId(strKeyId);
    objConceptEN.SetIsSubmit(false);
    //objPaperEN..submitter = userStore.getUserId;//提交人；
    objConceptEN.sfUpdFldSetStr = objConceptEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objConceptEN.conceptId == '' || objConceptEN.conceptId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool = await Concept_UpdateRecordAsync(objConceptEN);
      if (returnBool == true) {
        const strInfo = `取消成功!`;

        //显示信息框
        alert(strInfo);
        vConcept_ReFreshThisCache(clsPubLocalStorage.idCurrEduCls);
        //HideDialog();
        this.iShowList.BindGvCache(clsConceptEN._CurrTabName, '');
      } else {
        const strInfo = `取消不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('取消失败');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `取消记录不成功,${e}.`;
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
    const divName = this.getDivName();
    if (divName == null) return;
    this.opType = 'Update';
    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }

    await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');
    this.UpdateRecord(strKeyId);
  }

  /*
   * 分享
   */
  public set shareId(value: string) {
    const divName = this.getDivName();
    SetSelectValueByIdInDivObj(divName, 'ddlShareId', value);
  }
  /*
   * 分享
   */
  public get shareId(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlShareId');
  }

  //////////////////////////////////////////////////////////////////////附件添加
  //添加上传论文附件方法
  public async AddPaperSubAttachmentSave(filePath: string, strfileNum: string) {
    const divName = this.getDivName();
    const objConceptAttachmentEN: clsConceptAttachmentEN = new clsConceptAttachmentEN();
    this.PutDataToPaperAttachmentClass(objConceptAttachmentEN, filePath);
    try {
      const responseText2 = await ConceptAttachment_AddNewRecordAsync(objConceptAttachmentEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        //第一个附件
        if (strfileNum == 'first') {
          //如果第二个附件不等于空，那么执行添加函数；
          if (GetInputValueInDivObj(divName, 'hdnFileTwo') != '' && $('#hdnFileTwo') != undefined) {
            const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
            this.AddPaperSubAttachmentSave(fileTwo, 'two');
          } else {
            //为空则判断第三个附件值；
            if (
              GetInputValueInDivObj(divName, 'hdnFileThree') != '' &&
              $('#hdnFileThree') != undefined
            ) {
              const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
              this.AddPaperSubAttachmentSave(fileThree, 'three');
            }
          }
        } else if (strfileNum == 'two') {
          //为空则判断第三个附件值；
          if (
            GetInputValueInDivObj(divName, 'hdnFileThree') != '' &&
            $('#hdnFileThree') != undefined
          ) {
            const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
            this.AddPaperSubAttachmentSave(fileThree, 'three');
          }
        }
      } else {
        const strInfo = `论文附件添加不成功!`;

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

  //观点附件数据存放
  public PutDataToPaperAttachmentClass(
    pobjConceptAttachmentEN: clsConceptAttachmentEN,
    filePath: string,
  ) {
    const divName = this.getDivName();
    pobjConceptAttachmentEN.SetConceptId(GetInputValueInDivObj(divName, 'txtConceptId')); // 概念Id

    let strfilePath = filePath;
    //判断地址不为空则执行截取操作
    if (strfilePath != '') {
      const index = strfilePath.lastIndexOf('/');
      strfilePath = strfilePath.substring(index + 1, strfilePath.length);
      pobjConceptAttachmentEN.SetFilePath(filePath);

      pobjConceptAttachmentEN.SetConceptAttachmentName(strfilePath);
    }
    pobjConceptAttachmentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期

    pobjConceptAttachmentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班
    pobjConceptAttachmentEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
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
  //删除观点附件
  /* 
根据关键字删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecordByWhere(strWhere: string) {
    const divName = this.getDivName();

    try {
      const returnInt: number = await ConceptAttachment_DelConceptAttachmentsByCondAsync(strWhere);
      if (returnInt > 0) {
        //strIdCurrEduclsstrInfo: string = `删除记录成功,共删除${returnInt}条记录!`;
        ////显示信息框
        //alert(strInfo);
      } else {
        // const strInfo = `删除记录不成功!`;
        //显示信息框
        //alert(strInfo);
      }

      //在修改时候，不管是否有附件数据被清除； 都需要执行附件添加功能
      //判断是否有返回的附件路径值
      const fileOne = GetInputValueInDivObj(divName, 'hdnFileOne');
      if (fileOne != '' && fileOne != undefined) {
        //第一个附件框判断

        this.AddPaperSubAttachmentSave(fileOne, 'first');
      } else {
        const fileTwo = GetInputValueInDivObj(divName, 'hdnFileTwo');
        if (fileTwo != '' && fileTwo != undefined) {
          this.AddPaperSubAttachmentSave(fileTwo, 'two');
        } else {
          const fileThree = GetInputValueInDivObj(divName, 'hdnFileThree');
          if (fileThree != '' && fileThree != undefined) {
            this.AddPaperSubAttachmentSave(fileThree, 'three');
          }
        }
      }

      console.log('完成DelRecord!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }
}
