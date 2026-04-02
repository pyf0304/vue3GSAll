import $ from 'jquery';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { SysSkill_Edit } from '@/viewsBase/GradEduTopic/SysSkill_Edit';
import { clsSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsSysSkillEN';
import { clsvSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSkillEN';
import {
  SysSkill_AddNewRecordWithReturnKeyAsync,
  SysSkill_GetObjBySkillIdAsync,
  SysSkill_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsSysSkillWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetInputValueInDivObj,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { LiteratureType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { SysOperationType_BindDdl_OperationTypeIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsSysOperationTypeWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { SysSecurityLevel_BindDdl_LevelIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsSysSecurityLevelWApi';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { userStore } from '@/store/modulesShare/user';
declare let window: any;

/* SysSkill_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class SysSkill_EditEx extends SysSkill_Edit {
  public IdCurrEduCls = '';

  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: SysSkill_EditEx = <SysSkill_EditEx>(
      SysSkill_Edit.GetPageEditObj('SysSkill_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'SysSkill_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'SysSkill_EditEx.btn_Click');

        break;
    }
  }

  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
*/
  public async btnAddNewRecord_Click() {
    this.opType = 'Add';
    try {
      const bolIsSuccess = await this.ShowDialog_SysSkill(this.opType);
      if (bolIsSuccess == false) return;
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegionInDiv();
      this.ShowDialog_SysSkill('Add');
      this.bolIsLoadEditRegion = true; //
      //获取分享Id
      const responseText1 = await gs_UserConfigEx_GetNewReturnShareIdEx('09', userStore.getUserId);
      const strShareId: string = responseText1;
      //const returnBool: boolean = !!responseText2;
      if (strShareId != '') {
        this.shareId = strShareId;
      }
      this.AddNewRecord();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
     具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
   */
  public async btnOKUpd_Click() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmit_Click.name;
    try {
      if (userStore.getUserId != '') {
        const strSysskillId = GetInputValueInDivObj(divName, 'hidSkillId');
        let returnBool9;
        let returnBool8;

        switch (strCommandText) {
          case '添加':
            await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,
            if (this.opType == 'AddWithMaxId') {
              //const responseText3 = await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
              //    const returnBool2: boolean = jsonData;
              //    if (returnBool2 == true) {
              //        HideDialog();
              //        this.iShowList.BindGv(clsvSysSkillEN._CurrTabName, returnKeyId);
              //    }
              //});
              await this.AddNewRecordWithReturnKeyAsync().then((jsonData) => {
                const returnKeyId = jsonData;
                this.HideDialog_SysSkill();
                this.iShowList.BindGv(clsvSysSkillEN._CurrTabName, returnKeyId);
              });
            } else {
              await this.AddNewRecordSave().then((jsonData) => {
                const returnBool: boolean = jsonData;
                if (returnBool == true) {
                  this.HideDialog_SysSkill();
                  this.iShowList.BindGv(clsvSysSkillEN._CurrTabName, returnBool.toString());
                }
              });
            }
            //更新总表3个参数 主键、子表类型、页面操作类型；

            returnBool8 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strSysskillId,
              '09',
              '1',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool8 == true) {
              console.log('技能数据总表同步成功；');
            } else {
              console.log('技能数据总表同步失败；');
            }
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            await this.UpdateRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              let strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
              strInfo += '(In SysSkillCRUD.btnOKUpd_Click)';

              //显示信息框
              console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                this.HideDialog_SysSkill();
                this.iShowList.BindGv(clsvSysSkillEN._CurrTabName, returnBool.toString());
              }
            });
            //更新总表3个参数 主键、子表类型、页面操作类型；

            returnBool9 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strSysskillId,
              '09',
              '2',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool9 == true) {
              console.log('技能数据总表同步成功；');
            } else {
              console.log('技能数据总表同步失败；');
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
  /* 修改记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
  */
  public async UpdateRecordSave() {
    const strThisFuncName = this.UpdateRecordSave.name;

    const objSysSkillEN: clsSysSkillEN = new clsSysSkillEN();
    objSysSkillEN.SetSkillId(this.keyId);
    $('#hidSkillId').val(this.keyId);
    this.PutDataToSysSkillClass(objSysSkillEN);
    objSysSkillEN.sfUpdFldSetStr = objSysSkillEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objSysSkillEN.skillId == '' || objSysSkillEN.skillId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await SysSkill_UpdateRecordAsync(objSysSkillEN);
      const returnBool = !!responseText;

      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }
  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
  */
  public async AddNewRecordWithReturnKeyAsync() {
    const objSysSkillEN: clsSysSkillEN = new clsSysSkillEN();
    objSysSkillEN.SetCreateDate(clsPubFun4Web.getNowDate_ymd());
    this.PutDataToSysSkillClass(objSysSkillEN);
    try {
      const responseText2 = await SysSkill_AddNewRecordWithReturnKeyAsync(objSysSkillEN); //.AddNewRecordWithMaxIdAsync(objSysSkillEN);
      const strSysSkillId: string = responseText2;
      if (strSysSkillId != '') {
        $('#hidSkillId').val(strSysSkillId);
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return strSysSkillId; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      throw strMsg;
    }
    return ''; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjSysSkillEN">数据传输的目的类对象</param>
*/
  public async PutDataToSysSkillClass(pobjSysSkillEN: clsSysSkillEN) {
    pobjSysSkillEN.SetSkillId(this.skillId); // 技能Id
    pobjSysSkillEN.SetSkillName(this.skillName); // 技能名称
    pobjSysSkillEN.SetOperationTypeId(this.operationTypeId); // 操作类型
    pobjSysSkillEN.SetLevelId(this.levelId); // 级别Id
    pobjSysSkillEN.SetProcess(this.process); // 实施过程
    pobjSysSkillEN.SetShareId(this.shareId);
    pobjSysSkillEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjSysSkillEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjSysSkillEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjSysSkillEN.SetIsSubmit(this.isSubmit); // 是否提交
    pobjSysSkillEN.SetCitationId(this.citationId); // 引用Id
    pobjSysSkillEN.SetMemo(this.memo); // 备注
  }

  //提交判断；
  public async SubmitRecord(strSkillId: string) {
    this.keyId = strSkillId;

    try {
      const objSysSkillEN = await SysSkill_GetObjBySkillIdAsync(strSkillId);
      if (objSysSkillEN == null) return;
      //通过session 权限获取权限
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色 //学生00620003
      if (strRoleId == '00620003') {
        // //通过判断数据用户是否是当前登录用户；
        if (objSysSkillEN.updUser == strUserId) {
          //判断数据是否已审核
          if (objSysSkillEN.isSubmit == false) {
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
        if (objSysSkillEN.isSubmit == false) {
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
    const objSysSkillEN: clsSysSkillEN = new clsSysSkillEN();
    objSysSkillEN.SetSkillId(this.keyId);
    objSysSkillEN.SetIsSubmit(true);
    objSysSkillEN.sfUpdFldSetStr = objSysSkillEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objSysSkillEN.skillId == '' || objSysSkillEN.skillId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await SysSkill_UpdateRecordAsync(objSysSkillEN);
      if (returnBool == true) {
        const strInfo = `提交成功!`;

        //显示信息框
        alert(strInfo);

        //HideDialog();
        this.iShowList.BindGv(clsvSysSkillEN._CurrTabName, returnBool.toString());
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

  /*取消
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async CancelSubmitRecordSave(strKeyId: string) {
    const strThisFuncName = this.CancelSubmitRecordSave.name;

    //
    const objSysSkillEN: clsSysSkillEN = new clsSysSkillEN();
    objSysSkillEN.SetSkillId(strKeyId);
    objSysSkillEN.SetIsSubmit(false);
    objSysSkillEN.sfUpdFldSetStr = objSysSkillEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objSysSkillEN.skillId == '' || objSysSkillEN.skillId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      SysSkill_UpdateRecordAsync(objSysSkillEN).then((jsonData) => {
        const returnBool: boolean = jsonData;
        if (returnBool == true) {
          const strInfo = `取消成功!`;

          //显示信息框
          alert(strInfo);

          //HideDialog();
          this.iShowList.BindGv(clsvSysSkillEN._CurrTabName, returnBool.toString());
        } else {
          const strInfo = `取消不成功!`;

          //显示信息框
          alert(strInfo);
          console.log('取消失败');
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `取消记录不成功,${e}.`;
      alert(strMsg);
    }
  }

  //技能提交审核
  public async btnIsSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    this.SubmitRecord(strKeyId);
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

    const bolIsSuccess = await this.ShowDialog_SysSkill(this.opType);
    if (bolIsSuccess == false) return;
    // 为编辑区绑定下拉框
    await this.BindDdl4EditRegionInDiv();
    this.ShowDialog_SysSkill('Update');
    this.bolIsLoadEditRegion = true; //
    this.UpdateRecord(strKeyId);
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

    const bolIsSuccess = await this.ShowDialog_SysSkill(this.opType);
    if (bolIsSuccess == false) return;
    // 为编辑区绑定下拉框
    await this.BindDdl4EditRegionInDiv();
    //ShowDialog('Update');
    this.bolIsLoadEditRegion = true; //
    this.UpdateRecord(strKeyId);
  }
  /* 根据关键字获取相应的记录的对象
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
<param name = "sender">参数列表</param>
*/
  public async UpdateRecord(strSkillId: string): Promise<boolean> {
    this.btnSubmitSysSkill = '确认修改';
    this.btnCancelSysSkill = '取消修改';
    this.keyId = strSkillId;
    const strUserId = userStore.getUserId;
    try {
      const responseText = await SysSkill_GetObjBySkillIdAsync(strSkillId);
      const objSysSkillEN: clsSysSkillEN = <clsSysSkillEN>responseText;
      // //通过判断数据用户是否是当前登录用户；
      if (objSysSkillEN.updUser == strUserId) {
        //判断数据是否提交，提交则不可修改；
        if (objSysSkillEN.isSubmit == false) {
          this.ShowDialog_SysSkill('Update');
          this.GetDataFromSysSkillClass(objSysSkillEN);
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
    }
    return true;
  }
  /* 函数功能:把类对象的属性内容显示到界面上
  注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
   如果在设置数据库时,就应该一级字段在前,二级字段在后
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
   <param name = "pobjSysSkillEN">表实体类对象</param>
 */
  public async GetDataFromSysSkillClass(pobjSysSkillEN: clsSysSkillEN) {
    this.skillId = pobjSysSkillEN.skillId; // 技能Id
    this.skillName = pobjSysSkillEN.skillName; // 技能名称
    this.operationTypeId = pobjSysSkillEN.operationTypeId; // 操作类型
    this.levelId = pobjSysSkillEN.levelId; // 级别Id
    this.process = pobjSysSkillEN.process; // 实施过程
    this.shareId = pobjSysSkillEN.shareId;
    this.updUser = pobjSysSkillEN.updUser; // 修改人
    this.updDate = pobjSysSkillEN.updDate; // 修改日期
    this.isSubmit = pobjSysSkillEN.isSubmit; // 是否提交
    this.citationId = pobjSysSkillEN.citationId; // 引用Id
    this.memo = pobjSysSkillEN.memo; // 备注
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

  //-------------------------------
  /* 函数功能:为编辑区绑定下拉框
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
*/
  public async BindDdl4EditRegion() {
    const divName = this.getDivName();
    if (divName == null) return;
    // 在此处放置用户代码以初始化页面

    await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');

    await SysOperationType_BindDdl_OperationTypeIdInDivCache(divName, 'ddlOperationTypeId'); //编辑区域
    await SysSecurityLevel_BindDdl_LevelIdInDivCache(divName, 'ddlLevelId'); //编辑区域
    //文献类型；
    await this.BindDdl_LiteratureTypeId('ddlLiteratureTypeId_q');
  }
  // <summary>
  /// 为下拉框获取数据,从表:[Paper]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_LiteratureTypeId(ddlLiteratureTypeId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrPaperObjLst = await LiteratureType_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrPaperObjLst,
        clsLiteratureTypeEN.con_LiteratureTypeId,
        clsLiteratureTypeEN.con_LiteratureTypeName,
        '文献类型',
      );
      console.log('完成BindDdl_LiteratureTypeId!');
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  //===============================
}
