import $ from 'jquery';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { SysSocialRelations_Edit } from '@/viewsBase/GradEduTopic/SysSocialRelations_Edit';
import { clsSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsSysSocialRelationsEN';
import { clsvSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsEN';
import {
  SysSocialRelations_AddNewRecordWithReturnKeyAsync,
  SysSocialRelations_GetMaxStrIdAsync,
  SysSocialRelations_GetObjBySocialIdAsync,
  SysSocialRelations_GetRecCountByCondAsync,
  SysSocialRelations_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsSysSocialRelationsWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { SysSecurityLevel_BindDdl_LevelIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsSysSecurityLevelWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsSysSocialRelationsVerEN } from '@/ts/L0Entity/GradEduTopic/clsSysSocialRelationsVerEN';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsRTSysSocialRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTSysSocialRelaEN';
import {
  SysSocialRelationsVer_AddNewRecordAsync,
  SysSocialRelationsVer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsSysSocialRelationsVerWApi';
import {
  RTSysSocialRela_AddNewRecordAsync,
  RTSysSocialRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTSysSocialRelaWApi';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';
declare let window: any;
/* SysSocialRelations_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class SysSocialRelations_EditEx extends SysSocialRelations_Edit {
  public IdCurrEduCls = '';

  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: SysSocialRelations_EditEx = <SysSocialRelations_EditEx>(
      SysSocialRelations_Edit.GetPageEditObj('SysSocialRelations_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'SysSocialRelations_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'SysSocialRelations_EditEx.btn_Click');
    }
  }

  /* 函数功能:为编辑区绑定下拉框
        (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
      */
  public async BindDdl4EditRegion() {
    // 在此处放置用户代码以初始化页面
    const divName = this.getDivName();
    if (divName == null) return;
    await SysSecurityLevel_BindDdl_LevelIdInDivCache(divName, 'ddlLevelId'); //编辑区域

    await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');
  }
  /* 添加新记录
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
  */
  public async btnAddNewRecord_Click() {
    this.opType = 'Add';
    try {
      const bolIsSuccess = await this.ShowDialog_SysSocialRelations(this.opType);
      if (bolIsSuccess == false) return;
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegion();
      this.ShowDialog_SysSocialRelations('Add');
      this.bolIsLoadEditRegion = true; //
      //获取分享Id
      const responseText1 = await gs_UserConfigEx_GetNewReturnShareIdEx('10', userStore.getUserId);
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
  /*取消
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async CancelSubmitRecordSave(strKeyId: string) {
    const strThisFuncName = this.CancelSubmitRecordSave.name;

    //
    const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
    objSysSocialRelationsEN.SetSocialId(strKeyId);
    objSysSocialRelationsEN.SetIsSubmit(false);
    objSysSocialRelationsEN.sfUpdFldSetStr = objSysSocialRelationsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objSysSocialRelationsEN.socialId == '' || objSysSocialRelationsEN.socialId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      SysSocialRelations_UpdateRecordAsync(objSysSocialRelationsEN).then((jsonData) => {
        const returnBool: boolean = jsonData;
        if (returnBool == true) {
          const strInfo = `取消成功!`;

          //显示信息框
          alert(strInfo);

          //HideDialog();
          this.iShowList.BindGv(clsvSysSocialRelationsEN._CurrTabName, returnBool.toString());
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
        const strSocialId = GetInputValueInDivObj(divName, 'hidSocialId');
        let returnBool8;
        let returnBool9;

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
              //        this.iShowList.BindGv(clsvSysSocialRelationsEN._CurrTabName, returnBool.toString());
              //    }
              //});
              await this.AddNewRecordWithReturnKeyAsync();
              this.HideDialog_SysSocialRelations();
              this.iShowList.BindGv(clsvSysSocialRelationsEN._CurrTabName, '');
            } else {
              await this.AddNewRecordSave().then((jsonData) => {
                const returnBool: boolean = jsonData;
                if (returnBool == true) {
                  this.HideDialog_SysSocialRelations();
                  this.iShowList.BindGv(
                    clsvSysSocialRelationsEN._CurrTabName,
                    returnBool.toString(),
                  );
                }
              });
            }
            //更新总表3个参数 主键、子表类型、页面操作类型；

            returnBool8 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strSocialId,
              '10',
              '1',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool8 == true) {
              console.log('社会关系数据总表同步成功；');
            } else {
              console.log('社会关系数据总表同步失败；');
            }
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            await this.UpdateRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              let strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
              strInfo += '(In SysSocialRelationsCRUD.btnOKUpd_Click)';

              //显示信息框
              console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                this.HideDialog_SysSocialRelations();
                this.iShowList.BindGv(clsvSysSocialRelationsEN._CurrTabName, returnBool.toString());
              }
            });
            //更新总表3个参数 主键、子表类型、页面操作类型；

            returnBool9 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strSocialId,
              '10',
              '2',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool9 == true) {
              console.log('社会关系数据总表同步成功；');
            } else {
              console.log('社会关系数据总表同步失败；');
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

    const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
    objSysSocialRelationsEN.SetSocialId(this.keyId);
    $('#hidSocialId').val(this.keyId);
    this.PutDataToSysSocialRelationsClass(objSysSocialRelationsEN);
    objSysSocialRelationsEN.sfUpdFldSetStr = objSysSocialRelationsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objSysSocialRelationsEN.socialId == '' || objSysSocialRelationsEN.socialId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await SysSocialRelations_UpdateRecordAsync(objSysSocialRelationsEN);
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
    const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
    objSysSocialRelationsEN.SetCreateDate(clsPubFun4Web.getNowDate_ymd());
    this.PutDataToSysSocialRelationsClass(objSysSocialRelationsEN);
    try {
      const responseText2 = await SysSocialRelations_AddNewRecordWithReturnKeyAsync(
        objSysSocialRelationsEN,
      ); //.AddNewRecordWithMaxIdAsync(objSysSocialRelationsEN);
      const strSocialId: string = responseText2.toString();
      if (strSocialId != '') {
        $('#hidSocialId').val(strSocialId);
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
        return true;
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return strSocialId; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    // return true;//一定要有一个返回值，否则会出错！
  }
  /* 为插入记录做准备工作
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
*/
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    $('#btnOKUpd').attr('disabled', 'false');
    this.opType = 'AddWithMaxId';

    this.btnSubmitSysSocialRelations = '确认添加';
    this.btnCancelSysSocialRelations = '取消添加';
    this.Clear();
    //wucSysSocialRelationsB1.socialId = clsSysSocialRelationsBL.GetMaxStrId_S();
    try {
      const responseText = await SysSocialRelations_GetMaxStrIdAsync();
      const returnString: string = responseText;
      if (returnString == '') {
        const strInfo = `获取表SysSocialRelations的最大关键字为空，不成功，请检查!`;
        //显示信息框
        alert(strInfo);
      } else {
        $('#txtSocialId').val(returnString);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 为插入记录做准备工作
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
   */
  public async AddNewRecordWithMaxIdV2() {
    this.SetKeyReadOnly(false);
    $('#btnOKUpd').attr('disabled', 'false');
    this.opType = 'AddWithMaxId';

    this.btnSubmitSysSocialRelations = '确认添加';
    this.btnCancelSysSocialRelations = '取消添加';
    this.Clear();
    //wucSysSocialRelationsB1.socialId = clsSysSocialRelationsBL.GetMaxStrId_S();
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjSysSocialRelationsEN">数据传输的目的类对象</param>
*/
  public async PutDataToSysSocialRelationsClass(pobjSysSocialRelationsEN: clsSysSocialRelationsEN) {
    pobjSysSocialRelationsEN.SetSocialId(this.socialId); // 社会Id
    pobjSysSocialRelationsEN.SetFullName(this.fullName); // 姓名
    pobjSysSocialRelationsEN.SetNationality(this.nationality); // 国籍
    pobjSysSocialRelationsEN.SetLevelId(this.levelId); // 级别Id
    pobjSysSocialRelationsEN.SetWorkUnit(this.workUnit); // 工作单位
    pobjSysSocialRelationsEN.SetMajor(this.major); // 专业
    pobjSysSocialRelationsEN.SetAchievement(this.achievement); // 成就
    pobjSysSocialRelationsEN.SetShareId(this.shareId);
    pobjSysSocialRelationsEN.SetDetailedDescription(this.detailedDescription); // 详细说明
    pobjSysSocialRelationsEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjSysSocialRelationsEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjSysSocialRelationsEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjSysSocialRelationsEN.SetIsSubmit(this.isSubmit); // 是否提交
    pobjSysSocialRelationsEN.SetMemo(this.memo); // 备注
  }
  /* 函数功能:把类对象的属性内容显示到界面上
   注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
    如果在设置数据库时,就应该一级字段在前,二级字段在后
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
    <param name = "pobjSysSocialRelationsEN">表实体类对象</param>
  */
  public async GetDataFromSysSocialRelationsClass(
    pobjSysSocialRelationsEN: clsSysSocialRelationsEN,
  ) {
    this.socialId = pobjSysSocialRelationsEN.socialId; // 社会Id
    this.fullName = pobjSysSocialRelationsEN.fullName; // 姓名
    this.nationality = pobjSysSocialRelationsEN.nationality; // 国籍
    this.levelId = pobjSysSocialRelationsEN.levelId; // 级别Id
    this.workUnit = pobjSysSocialRelationsEN.workUnit; // 工作单位
    this.major = pobjSysSocialRelationsEN.major; // 专业
    this.achievement = pobjSysSocialRelationsEN.achievement; // 成就
    this.detailedDescription = pobjSysSocialRelationsEN.detailedDescription; // 详细说明
    this.shareId = pobjSysSocialRelationsEN.shareId;
    this.updUser = pobjSysSocialRelationsEN.updUser; // 修改人
    this.updDate = pobjSysSocialRelationsEN.updDate; // 修改日期
    this.isSubmit = pobjSysSocialRelationsEN.isSubmit; // 是否提交
    this.memo = pobjSysSocialRelationsEN.memo; // 备注
  }

  //概念提交审核
  public async btnIsSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    this.SubmitRecord(strKeyId);
  }
  //提交判断；
  public async SubmitRecord(strSocialId: string) {
    this.keyId = strSocialId;

    try {
      const objSysSocialRelationsEN = await SysSocialRelations_GetObjBySocialIdAsync(strSocialId);
      if (objSysSocialRelationsEN == null) return;
      //通过session 权限获取权限
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色 //学生00620003
      if (strRoleId == '00620003') {
        // //通过判断数据用户是否是当前登录用户；
        if (objSysSocialRelationsEN.updUser == strUserId) {
          //判断数据是否已审核
          if (objSysSocialRelationsEN.isSubmit == false) {
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
        if (objSysSocialRelationsEN.isSubmit == false) {
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
    const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
    objSysSocialRelationsEN.SetSocialId(this.keyId);
    objSysSocialRelationsEN.SetIsSubmit(true);
    objSysSocialRelationsEN.sfUpdFldSetStr = objSysSocialRelationsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objSysSocialRelationsEN.socialId == '' || objSysSocialRelationsEN.socialId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await SysSocialRelations_UpdateRecordAsync(
        objSysSocialRelationsEN,
      );
      if (returnBool == true) {
        const strInfo = `提交成功!`;

        //显示信息框
        alert(strInfo);

        this.HideDialog_SysSocialRelations();
        this.iShowList.BindGv(clsvSysSocialRelationsEN._CurrTabName, returnBool.toString());
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

  //-----------------------------------------------------
  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateRecord_Click(strKeyId: string) {
    this.opType = 'Update';

    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }

    const bolIsSuccess = await this.ShowDialog_SysSocialRelations(this.opType);
    if (bolIsSuccess == false) return;
    // 为编辑区绑定下拉框
    await this.BindDdl4EditRegion();
    this.ShowDialog_SysSocialRelations('Update');

    this.UpdateRecord(strKeyId);
  }

  /* 函数功能:把类对象的属性内容显示到界面上
注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
 如果在设置数据库时,就应该一级字段在前,二级字段在后
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
 <param name = "pobjSysSocialRelationsEN">表实体类对象</param>
*/
  public GetDataFromSysSocialRelationsClassV2(pobjSysSocialRelationsEN: clsSysSocialRelationsEN) {
    this.socialId = pobjSysSocialRelationsEN.socialId; // 社会Id
    this.fullName = pobjSysSocialRelationsEN.fullName; // 姓名
    this.nationality = pobjSysSocialRelationsEN.nationality; // 国籍
    this.levelId = pobjSysSocialRelationsEN.levelId; // 级别Id
    this.workUnit = pobjSysSocialRelationsEN.workUnit; // 工作单位
    this.major = pobjSysSocialRelationsEN.major; // 专业
    this.achievement = pobjSysSocialRelationsEN.achievement; // 成就
    this.detailedDescription = pobjSysSocialRelationsEN.detailedDescription; // 详细说明
    this.shareId = pobjSysSocialRelationsEN.shareId;
    //this.updUser = pobjSysSocialRelationsEN.updUser;// 修改人
    //this.updDate = pobjSysSocialRelationsEN.updDate;// 修改日期
    this.isSubmit = pobjSysSocialRelationsEN.isSubmit; // 是否提交
    this.memo = pobjSysSocialRelationsEN.memo; // 备注
  }

  /* 根据关键字获取相应的记录的对象
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async UpdateRecord(strSocialId: string): Promise<boolean> {
    this.btnSubmitSysSocialRelations = '确认修改';
    this.btnCancelSysSocialRelations = '取消修改';
    this.keyId = strSocialId;
    try {
      const responseText = await SysSocialRelations_GetObjBySocialIdAsync(strSocialId);
      const objSysSocialRelationsEN: clsSysSocialRelationsEN = <clsSysSocialRelationsEN>(
        responseText
      );
      this.GetDataFromSysSocialRelationsClass(objSysSocialRelationsEN);
      console.log('完成UpdateRecord!');
      return true;
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
    return true;
  }

  /* 修改记录
       (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
     */
  public async UpdateRecordSaveV2() {
    const strThisFuncName = this.UpdateRecordSave.name;

    const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
    objSysSocialRelationsEN.SetSocialId(this.keyId);
    this.PutDataToSysSocialRelationsClass(objSysSocialRelationsEN);
    objSysSocialRelationsEN.sfUpdFldSetStr = objSysSocialRelationsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objSysSocialRelationsEN.socialId == '' || objSysSocialRelationsEN.socialId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await SysSocialRelations_UpdateRecordAsync(objSysSocialRelationsEN);
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

  /* 函数功能:为编辑区绑定下拉框
        (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
      */
  public async BindDdl4EditRegionV2() {
    // 在此处放置用户代码以初始化页面
    const divName = this.getDivName();
    if (divName == null) return;
    await SysSecurityLevel_BindDdl_LevelIdInDivCache(divName, 'ddlLevelId'); //编辑区域
  }

  /* 函数功能:把界面上的属性数据传到类对象中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
<param name = "pobjSysSocialRelationsEN">数据传输的目的类对象</param>
*/
  public PutDataToSysSocialRelationsVClass(
    pobjSysSocialRelationsVerEN: clsSysSocialRelationsVerEN,
  ) {
    const divName = this.getDivName();
    const strSocialId = GetInputValueInDivObj(divName, 'hidSocialId');
    pobjSysSocialRelationsVerEN.SetSocialId(strSocialId); // 社会Id
    pobjSysSocialRelationsVerEN.SetFullName(this.fullName); // 姓名
    pobjSysSocialRelationsVerEN.SetNationality(this.nationality); // 国籍
    pobjSysSocialRelationsVerEN.SetLevelId(this.levelId); // 级别Id
    pobjSysSocialRelationsVerEN.SetWorkUnit(this.workUnit); // 工作单位
    pobjSysSocialRelationsVerEN.SetMajor(this.major); // 专业
    pobjSysSocialRelationsVerEN.SetAchievement(this.achievement); // 成就
    pobjSysSocialRelationsVerEN.SetDetailedDescription(this.detailedDescription); // 详细说明
    pobjSysSocialRelationsVerEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjSysSocialRelationsVerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjSysSocialRelationsVerEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    //pobjSysSocialRelationsVerEN.SetIsSubmit(this.isSubmit;// 是否提交
    pobjSysSocialRelationsVerEN.SetMemo(this.memo); // 备注
  }

  /* 函数功能:把界面上的属性数据传到类对象中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
<param name = "pobjSysSocialRelationsEN">数据传输的目的类对象</param>
*/
  public async PutDataToSysSocialRelationsClassV2(
    pobjSysSocialRelationsEN: clsSysSocialRelationsEN,
  ) {
    const divName = this.getDivName();
    //pobjSysSocialRelationsEN.SetSocialId(this.socialId;// 社会Id
    pobjSysSocialRelationsEN.SetFullName(this.fullName); // 姓名
    pobjSysSocialRelationsEN.SetNationality(this.nationality); // 国籍
    pobjSysSocialRelationsEN.SetLevelId(this.levelId); // 级别Id
    pobjSysSocialRelationsEN.SetWorkUnit(this.workUnit); // 工作单位
    pobjSysSocialRelationsEN.SetMajor(this.major); // 专业
    pobjSysSocialRelationsEN.SetAchievement(this.achievement); // 成就
    pobjSysSocialRelationsEN.SetDetailedDescription(this.detailedDescription); // 详细说明
    pobjSysSocialRelationsEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjSysSocialRelationsEN.SetShareId(this.shareId);
    pobjSysSocialRelationsEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjSysSocialRelationsEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjSysSocialRelationsEN.SetIsSubmit(this.isSubmit); // 是否提交
    pobjSysSocialRelationsEN.SetCitationId(GetInputValueInDivObj(divName, 'hidRequestPaperId')); // 引用论文

    pobjSysSocialRelationsEN.SetMemo(this.memo); // 备注

    const strPdfPageNum = GetInputValueInDivObjN(divName, 'hidPdfPageNum');
    if (strPdfPageNum != 0) {
      pobjSysSocialRelationsEN.SetPdfPageNum(strPdfPageNum);
    } else {
      pobjSysSocialRelationsEN.SetPdfPageNum(1);
    }
  }

  //概念提交审核
  public async btnIsSubmit_ClickV2(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    this.SubmitRecord(strKeyId);
  }
  //提交判断；
  public async SubmitRecordV2(strSocialId: string) {
    this.keyId = strSocialId;

    try {
      const objSysSocialRelationsEN = await SysSocialRelations_GetObjBySocialIdAsync(strSocialId);
      if (objSysSocialRelationsEN == null) return;
      //通过session 权限获取权限
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      //判断角色 //学生00620003
      if (strRoleId == '00620003') {
        // //通过判断数据用户是否是当前登录用户；
        if (objSysSocialRelationsEN.updUser == strUserId) {
          //判断数据是否已审核
          if (objSysSocialRelationsEN.isSubmit == false) {
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
        if (objSysSocialRelationsEN.isSubmit == false) {
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
  public async SubmitRecordSaveV2(): Promise<boolean> {
    const strThisFuncName = this.SubmitRecordSave.name;

    //
    const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
    objSysSocialRelationsEN.SetSocialId(this.keyId);
    objSysSocialRelationsEN.SetIsSubmit(true);
    objSysSocialRelationsEN.sfUpdFldSetStr = objSysSocialRelationsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objSysSocialRelationsEN.socialId == '' || objSysSocialRelationsEN.socialId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool: boolean = await SysSocialRelations_UpdateRecordAsync(
        objSysSocialRelationsEN,
      );
      if (returnBool == true) {
        const strInfo = `提交成功!`;

        //显示信息框
        alert(strInfo);

        // HideDialog();
        this.iShowList.BindGv(clsvSysSocialRelationsEN._CurrTabName, returnBool.toString());
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
  public async btnCancelSubmit_ClickV2(strKeyId: string) {
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
  public async CancelSubmitRecordSaveV2(strKeyId: string) {
    const strThisFuncName = this.CancelSubmitRecordSave.name;
    //
    const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
    objSysSocialRelationsEN.SetSocialId(strKeyId);
    objSysSocialRelationsEN.SetIsSubmit(false);
    objSysSocialRelationsEN.sfUpdFldSetStr = objSysSocialRelationsEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objSysSocialRelationsEN.socialId == '' || objSysSocialRelationsEN.socialId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      SysSocialRelations_UpdateRecordAsync(objSysSocialRelationsEN).then((jsonData) => {
        const returnBool: boolean = jsonData;
        if (returnBool == true) {
          const strInfo = `取消成功!`;

          //显示信息框
          alert(strInfo);

          //HideDialog();
          this.iShowList.BindGv(clsvSysSocialRelationsEN._CurrTabName, returnBool.toString());
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

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnOKUpd_ClickV2() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmit_Click.name;
    try {
      if (userStore.getUserId != '') {
        let strSocialId;
        let returnBool8;
        let returnBool9;
        switch (strCommandText) {
          case '添加':
            await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,
            if (this.opType == 'AddWithMaxId') {
              await this.AddNewRecordWithMaxIdSaveRetrunId();
            } else {
              await this.AddNewRecordSave().then((jsonData) => {
                const returnBool: boolean = jsonData;
                if (returnBool == true) {
                  //HideDialog();
                  this.iShowList.BindGv(
                    clsvSysSocialRelationsEN._CurrTabName,
                    returnBool.toString(),
                  );
                }
              });
            }
            //更新总表3个参数 主键、子表类型、页面操作类型；

            strSocialId = GetInputValueInDivObj(divName, 'hidSocialId');
            returnBool8 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strSocialId,
              '10',
              '1',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool8 == true) {
              console.log('社会关系数据总表同步成功；');
            } else {
              console.log('社会关系数据总表同步失败；');
            }
            //添加记录的同时添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                // CloseWindow();
                //alert("添加历史版本出问题！");
              }
            });
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            await this.UpdateRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              let strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
              strInfo += '(In SysSocialRelationsCRUD.btnOKUpd_Click)';

              //显示信息框
              console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                //HideDialog();
                this.iShowList.BindGv(clsvSysSocialRelationsEN._CurrTabName, returnBool.toString());
              }
            });
            //更新总表3个参数 主键、子表类型、页面操作类型；

            strSocialId = GetInputValueInDivObj(divName, 'hidSocialId');
            returnBool9 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strSocialId,
              '10',
              '2',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool9 == true) {
              console.log('社会关系数据总表同步成功；');
            } else {
              console.log('社会关系数据总表同步失败；');
            }
            //添加记录的同时添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                // CloseWindow();
                //alert("添加历史版本出问题！");
              }
            });
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
  //添加历史版本
  public async AddVersionRecordSave() {
    const divName = this.getDivName();
    const strThisFuncName = this.AddVersionRecordSave.name;
    //
    const strSocialId = GetInputValueInDivObj(divName, 'hidSocialId');
    const objSysSocialRelationsVerEN: clsSysSocialRelationsVerEN = new clsSysSocialRelationsVerEN();

    objSysSocialRelationsVerEN.SetSocialId(strSocialId);
    this.PutDataToSysSocialRelationsVClass(objSysSocialRelationsVerEN);

    try {
      const responseText2 = await SysSocialRelationsVer_AddNewRecordAsync(
        objSysSocialRelationsVerEN,
      );
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1 =1 and socialId=${strSocialId}`;
        const intVersionCount = await SysSocialRelationsVer_GetRecCountByCondAsync(strWhereCond2);

        const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
        objSysSocialRelationsEN.SetSocialId(strSocialId);
        objSysSocialRelationsEN.SetVersionCount(intVersionCount);

        objSysSocialRelationsEN.sfUpdFldSetStr = objSysSocialRelationsEN.updFldString; //设置哪些字段被修改(脏字段)
        if (
          objSysSocialRelationsEN.socialId == '' ||
          objSysSocialRelationsEN.socialId == undefined
        ) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        SysSocialRelations_UpdateRecordAsync(objSysSocialRelationsEN).then((jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == true) {
            return true;
          } else {
            const strInfo = `添加历史版本数不成功!`;
            alert(strInfo);
            console.log('添加历史版本数不成功');
            // CloseWindow();
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

  /* 为插入记录做准备工作
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
*/
  public async AddNewRecordV2() {
    this.SetKeyReadOnly(false);
    $('#btnOKUpd').attr('disabled', 'false');
    this.opType = 'AddWithMaxId';

    this.btnSubmitSysSocialRelations = '确认添加';
    this.btnCancelSysSocialRelations = '取消添加';
    this.Clear();
    //wucSysSocialRelationsB1.socialId = clsSysSocialRelationsBL.GetMaxStrId_S();
    try {
      const responseText = await SysSocialRelations_GetMaxStrIdAsync();
      const returnString: string = responseText;
      if (returnString == '') {
        const strInfo = `获取表SysSocialRelations的最大关键字为空，不成功，请检查!`;
        //显示信息框
        alert(strInfo);
      } else {
        $('#txtSocialId').val(returnString);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 为插入记录做准备工作
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
 */
  public async AddNewRecordWithMaxId() {
    this.SetKeyReadOnly(false);
    $('#btnOKUpd').attr('disabled', 'false');
    this.opType = 'AddWithMaxId';

    this.btnSubmitSysSocialRelations = '确认添加';
    this.btnCancelSysSocialRelations = '取消添加';
    this.Clear();
    //wucSysSocialRelationsB1.socialId = clsSysSocialRelationsBL.GetMaxStrId_S();
  }

  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
*/
  public async AddNewRecordWithMaxIdSaveRetrunId() {
    const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
    objSysSocialRelationsEN.SetCreateDate(clsPubFun4Web.getNowDate_ymd());
    this.PutDataToSysSocialRelationsClass(objSysSocialRelationsEN);
    try {
      const responseText = await SysSocialRelations_AddNewRecordWithReturnKeyAsync(
        objSysSocialRelationsEN,
      );
      const strSocialId: string = responseText;
      if (strSocialId != '') {
        //const returnBool: boolean = !!responseText2;
        //if (returnBool == true) {

        $('#hidSocialId').val(strSocialId);

        //添加社会-主题 关系
        await this.AddNewRecordSaveRtSysSocial();

        //strIdCurrEduclsstrInfo: string = `添加记录成功!`;
        //
        ////显示信息框
        //alert(strInfo);
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  /* 函数功能:把界面上的属性数据传到类对象中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
<param name = "pobjRTSysSocialRelaEN">数据传输的目的类对象</param>
*/
  public async PutDataToRTSysSocialRelaClass(pobjRTSysSocialRelaEN: clsRTSysSocialRelaEN) {
    const divName = this.getDivName();
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strSocialId = GetInputValueInDivObj(divName, 'hidSocialId');
    const strUserId = userStore.getUserId;
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);
    pobjRTSysSocialRelaEN.SetIdCurrEduCls(strIdCurrEduCls);
    pobjRTSysSocialRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTSysSocialRelaEN.SetSocialId(strSocialId); // 社会Id
    pobjRTSysSocialRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTSysSocialRelaEN.SetUpdUser(strUserId); // 修改人
    pobjRTSysSocialRelaEN.SetMemo(this.memo); // 备注
    pobjRTSysSocialRelaEN.SetClassificationId('0000000000'); // 分类为000000
  }

  /* 添加新记录，保存函数
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
 */
  public async AddNewRecordSaveRtSysSocial() {
    const divName = this.getDivName();
    const strThisFuncName = this.AddNewRecordSaveRtSysSocial.name;

    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strSocialId = GetInputValueInDivObj(divName, 'hidSocialId');
    const strUserId = userStore.getUserId;
    const objRTSysSocialRelaEN: clsRTSysSocialRelaEN = new clsRTSysSocialRelaEN();
    await this.PutDataToRTSysSocialRelaClass(objRTSysSocialRelaEN);
    try {
      //同一用户，同一主题 同一社会关系 只能添加一次；
      //const strWhere = " 1 = 1 And topicId = '" + strTopicId + "' And socialId = '" + strSocialId + "' And updUser = '" + strUserId + "'";
      const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And socialId = '${strSocialId}' And updUser = '${strUserId}'`;
      const responseText = await RTSysSocialRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一主题同一个用户不能重复添加同一个社会关系！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      } else {
        const responseText2 = await RTSysSocialRela_AddNewRecordAsync(objRTSysSocialRelaEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          const strInfo = `添加记录成功!`;

          //根据ID获取最大数；
          const strWhereCond2 = ` 1 =1 and socialId=${strSocialId}`;
          const intCitationCount = await SysSocialRelations_GetRecCountByCondAsync(strWhereCond2);

          const objSysSocialRelationsEN: clsSysSocialRelationsEN = new clsSysSocialRelationsEN();
          objSysSocialRelationsEN.SetSocialId(strSocialId);
          objSysSocialRelationsEN.SetCitationCount(intCitationCount);

          objSysSocialRelationsEN.sfUpdFldSetStr = objSysSocialRelationsEN.updFldString; //设置哪些字段被修改(脏字段)
          if (
            objSysSocialRelationsEN.socialId == '' ||
            objSysSocialRelationsEN.socialId == undefined
          ) {
            throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
          }

          await SysSocialRelations_UpdateRecordAsync(objSysSocialRelationsEN).then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == false) {
              const strInfo = `操作不成功!`;
              alert(strInfo);
              console.log('操作不成功');
            }
          });
          //显示信息框
          alert(strInfo);
        } else {
          const strInfo = `添加记录不成功!`;

          //显示信息框
          alert(strInfo);
        }
      }
      return responseText; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }

  /* 添加新记录
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
   */
  public async btnAddNewRecord_ClickV2() {
    this.opType = 'AddWithMaxId';
    try {
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegion();

      this.bolIsLoadEditRegion = true; //
      this.AddNewRecord();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  //==========================================
}
