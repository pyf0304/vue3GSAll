import $ from 'jquery';
import { userStore } from '@/store/modulesShare/user';
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
import { clsgs_TeachingDateEN } from '@/ts/L0Entity/DailyRunning/clsgs_TeachingDateEN';
import { clsvCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsvCurrEduClsEN';
import {
  CurrEduCls_GetMaxStrIdAsync,
  CurrEduCls_GetObjByIdCurrEduClsAsync,
  CurrEduCls_UpdateRecordAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import {
  gs_TeachingDate_AddNewRecordAsync,
  gs_TeachingDate_UpdateRecordAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsgs_TeachingDateWApi';
import { gs_TotalDataStatisticsEx_GetTotalStatisticsByTableAsync } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  SetInputValueInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { CurrEduCls_Edit } from '@/viewsBase/DailyRunning/CurrEduCls_Edit';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
/* CurrEduCls_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class CurrEduCls_EditEx extends CurrEduCls_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: CurrEduCls_EditEx = <CurrEduCls_EditEx>(
      CurrEduCls_Edit.GetPageEditObj('CurrEduCls_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'CurrEduCls_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    let strMsg = '';
    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPage.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
      case 'NewEduCls':
        CurrEduCls_Edit.CourseIdCache = clsPubLocalStorage.courseId;
        objPage.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          objPage.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPage.btnUpdateRecord_Click(strKeyId);
        }
        break;
      default:
        strMsg = Format(
          '命令:{0}, 关键字: {1}, 在函数({2}.{3})中没有被处理!',
          strCommandName,
          strKeyId,
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnOKUpd_Click() {
    var strCommandText: string = this.btnSubmit_Click.name;
    try {
      //判断session是否失效
      if (userStore.getUserId != '') {
        switch (strCommandText) {
          case '添加':
            const responseText1 = await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,
            if (this.opType == 'AddWithMaxId') {
              const responseText3 = await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
                var returnKeyId: string = <string>jsonData;
                if (IsNullOrEmpty(returnKeyId) == false) {
                  this.HideDialog_CurrEduCls();
                  this.iShowList.BindGv(clsvCurrEduClsEN._CurrTabName, returnKeyId);
                }
              });
            } else {
              const responseText2 = await this.AddNewRecordSave().then((jsonData) => {
                var returnBool: boolean = jsonData;
                if (returnBool == true) {
                  this.HideDialog_CurrEduCls();
                  this.iShowList.BindGv(clsvCurrEduClsEN._CurrTabName, returnBool.toString());
                }
              });
            }
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            const responseText3 = await this.UpdateRecordSave().then((jsonData) => {
              var returnBool: boolean = jsonData;
              var strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
              strInfo += '(In CurrEduClsCRUD.btnOKUpd_Click)';
              $('#lblResult51').val(strInfo);
              //显示信息框
              console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                this.HideDialog_CurrEduCls();
                this.iShowList.BindGv(clsvCurrEduClsEN._CurrTabName, returnBool.toString());
              }
            });
            break;
          default:
            var strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnOKUpd_Click())`;
            alert(strMsg);
            break;
        }
      } else {
        alert('登录超时，请重新登录');
        //    reLogin();
      }
      $('#divLoading').hide();
      //去掉提交按钮不可用状态
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e) {
      var strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
  /* 为插入记录做准备工作
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
*/
  public async AddNewSetDate() {
    //去掉提交按钮不可用状态
    $('#btnOKUpd').attr('disabled', 'false');
    this.opType = 'AddWithMaxId';
    //this.SetKeyReadOnly(false);
    this.btnSubmitCurrEduCls = '确认添加';
    this.btnCancelCurrEduCls = '取消添加';
    this.Clear();
  }

  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateRecord_Click(strKeyId: string) {
    this.opType = 'Update';
    //var strKeyId = GetFirstCheckedKeyIdInDiv(objPage.divName4List);;
    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }
    //读取session角色 来判断绑定不同数据列表
    //获取用户角色来判断显示不同的列表数据；
    var strUserId = userStore.getUserId;
    var strRoleId = userStore.getRoleId;
    this.opType = 'Update';
    const bolIsSuccess = await this.ShowDialog_CurrEduCls(this.opType);
    if (bolIsSuccess == false) return;
    //判断角色
    //管理员
    if (
      strRoleId == enumQxRoles.System_Admin_00620001 ||
      strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
    ) {
      // 为编辑区绑定下拉框
      const conBindDdl = await this.BindDdl4EditRegionInDiv();

      this.UpdateRecord(strKeyId);
    } else if (
      strRoleId == enumQxRoles.Regular_Teacher_00620002 ||
      strRoleId == enumQxRoles.K_12_Teacher_00620013
    ) {
      //教师
      //修改前需要判断 数据是否是当前用户添加 是则可以修改，否则不可修改；
      const responseText = await CurrEduCls_GetObjByIdCurrEduClsAsync(strKeyId);
      var objCurrEduClsEN: clsCurrEduClsEN = <clsCurrEduClsEN>responseText;
      if (objCurrEduClsEN.modifyUserId == strUserId) {
        // 为编辑区绑定下拉框
        const conBindDdl = await this.BindDdl4EditRegionInDiv();

        this.bolIsLoadEditRegion = true; //
        this.UpdateRecord(strKeyId);
      } else {
        var strInfo: string = `当前数据不是您添加，不可修改`;
        //显示信息框
        alert(strInfo);
        this.HideDialog_CurrEduCls();
        return;
      }
    }
  }

  /* 为插入记录做准备工作
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
*/
  public async AddNewRecord() {
    //去掉提交按钮不可用状态
    $('#btnOKUpd').attr('disabled', 'false');
    this.opType = 'AddWithMaxId';
    //this.SetKeyReadOnly(false);
    this.btnSubmitCurrEduCls = '确认添加';
    this.btnCancelCurrEduCls = '取消添加';
    this.Clear();
    //wucCurrEduClsB1.id_CurrEduCls = clsCurrEduClsBL.GetMaxStrId_S();
    try {
      const responseText = await CurrEduCls_GetMaxStrIdAsync();
      var returnString: string = responseText;
      if (returnString == '') {
        var strInfo: string = `获取表CurrEduCls的最大关键字为空，不成功，请检查!`;
        //显示信息框
        alert(strInfo);
      } else {
        $('#txtid_CurrEduCls').val(returnString);
      }
    } catch (e) {
      console.error('catch(e)=');
      console.error(e);
      var strMsg: string = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
  }

  /* 为插入记录做准备工作
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxId)
*/
  public async AddNewRecordWithMaxId() {
    //去掉提交按钮不可用状态
    $('#btnOKUpd').attr('disabled', 'false');
    this.opType = 'AddWithMaxId';
    //this.SetKeyReadOnly(false);
    this.btnSubmitCurrEduCls = '确认添加';
    this.btnCancelCurrEduCls = '取消添加';
    this.Clear();
    //wucCurrEduClsB1.id_CurrEduCls = clsCurrEduClsBL.GetMaxStrId_S();
  }

  //设置日期；
  public async SetUpDate() {
    var strId_CurrEduCls = this.keyId; // $('#txtid_CurrEduCls').val();

    var strCommandText: string = this.btnSubmit_Click.name;
    try {
      if (userStore.getUserId != '') {
        switch (strCommandText) {
          case '添加':
            const responseText1 = await this.AddNewRecord();
            break;
          case '确认添加':
            var objgs_TeachingDateEN: clsgs_TeachingDateEN = new clsgs_TeachingDateEN();
            objgs_TeachingDateEN.SetIdCurrEduCls(strId_CurrEduCls);
            objgs_TeachingDateEN.SetStartDate(this.startDate);
            objgs_TeachingDateEN.SetEndDate(this.endDate);
            objgs_TeachingDateEN.SetUpdDate(clsPubFun4Web.getNowDate());
            objgs_TeachingDateEN.SetUpdUser(userStore.getUserId);
            // this.PutDataToConceptClass(objConceptEN);
            objgs_TeachingDateEN.sfUpdFldSetStr = objgs_TeachingDateEN.updFldString; //设置哪些字段被修改(脏字段)

            try {
              const responseText2 = await gs_TeachingDate_AddNewRecordAsync(objgs_TeachingDateEN);
              var returnBool: boolean = !!responseText2;
              if (returnBool == true) {
                //更新教学班日期范围；把备注字段存放日期
                var objCurrEduClsEN: clsCurrEduClsEN = new clsCurrEduClsEN();
                objCurrEduClsEN.SetIdCurrEduCls(strId_CurrEduCls);
                objCurrEduClsEN.SetMemo(this.startDate + '-' + this.endDate);
                objCurrEduClsEN.sfUpdFldSetStr = objCurrEduClsEN.updFldString; //设置哪些字段被修改(脏字段)
                const responseText3 = await CurrEduCls_UpdateRecordAsync(objCurrEduClsEN);
                var returnBool: boolean = !!responseText3;
                if (returnBool == true) {
                  console.log('教学班更新成功');
                  //数据同步；
                  const responseText2 =
                    await gs_TotalDataStatisticsEx_GetTotalStatisticsByTableAsync(
                      strId_CurrEduCls,
                      userStore.getUserId,
                    );
                  var returnBool2: boolean = !!responseText2;
                  if (returnBool2 == true) {
                    console.log('同步成功');
                  } else {
                    console.log('同步失败');
                  }
                }

                var strInfo: string = `设置成功!`;

                //显示信息框
                alert(strInfo);
                // HideDialogOne();
              } else {
                var strInfo: string = `设置失败!`;

                //显示信息框
                alert(strInfo);
              }
              return responseText2; //一定要有一个返回值，否则会出错！
            } catch (e) {
              console.error('catch(e)=');
              console.error(e);
              var strMsg: string = `添加记录不成功,${e}.`;
              alert(strMsg);
              return false; //一定要有一个返回值，否则会出错！
            }

            break;
          case '确认修改':
            var mId = GetInputValueInDivObjN(this.divEdit, 'hidgs_DateId');
            if (mId != 0) {
              //更新教学班日期表
              var objgs_TeachingDateEN: clsgs_TeachingDateEN = new clsgs_TeachingDateEN();
              objgs_TeachingDateEN.SetmId(mId);
              objgs_TeachingDateEN.SetIdCurrEduCls(strId_CurrEduCls);
              objgs_TeachingDateEN.SetStartDate(this.startDate);
              objgs_TeachingDateEN.SetEndDate(this.endDate);
              objgs_TeachingDateEN.SetUpdDate(clsPubFun4Web.getNowDate());
              objgs_TeachingDateEN.SetUpdUser(userStore.getUserId);

              objgs_TeachingDateEN.sfUpdFldSetStr = objgs_TeachingDateEN.updFldString; //设置哪些字段被修改(脏字段)
              const responseText2 = await gs_TeachingDate_UpdateRecordAsync(objgs_TeachingDateEN);
              var returnBool: boolean = !!responseText2;
              if (returnBool == true) {
                console.log('教学班日期表更新成功');

                //更新教学班日期范围字段
                var objCurrEduClsEN: clsCurrEduClsEN = new clsCurrEduClsEN();
                objCurrEduClsEN.SetIdCurrEduCls(strId_CurrEduCls);
                objCurrEduClsEN.SetMemo(this.startDate + '-' + this.endDate);
                objCurrEduClsEN.sfUpdFldSetStr = objCurrEduClsEN.updFldString; //设置哪些字段被修改(脏字段)
                const responseText3 = await CurrEduCls_UpdateRecordAsync(objCurrEduClsEN);
                var returnBool: boolean = !!responseText3;
                if (returnBool == true) {
                  console.log('教学班更新范围成功');
                  //数据同步；
                  const responseText4 =
                    await gs_TotalDataStatisticsEx_GetTotalStatisticsByTableAsync(
                      strId_CurrEduCls,
                      userStore.getUserId,
                    );
                  var returnBool2: boolean = !!responseText4;
                  if (returnBool2 == true) {
                    console.log('同步成功');
                  } else {
                    console.log('同步失败');
                  }
                } else {
                  console.log('教学班更新范围失败');
                }

                var strInfo: string = `设置成功!`;

                //显示信息框
                alert(strInfo);
                // HideDialogOne();
              } else {
                console.log('教学班日期范围更新失败');
                var strInfo: string = `设置失败!`;

                //显示信息框
                alert(strInfo);
              }
            } else {
              console.log('教学班日期范围更新失败');
            }

            break;
          default:
            var strMsg = `strCommandText:${strCommandText}在switch中没有处理！(In btnOKUpd_Click())`;
            alert(strMsg);
            break;
        }
      } else {
        alert('登录超时，请重新登录');
        //    reLogin();
      }
      $('#divLoading').hide();

      //去掉提交按钮不可用状态
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e) {
      var strMsg: string = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }

    $('#divLoading').hide();
  }

  /*
   * 开始时间
   */
  public set startDate(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtStartDate', value);
  }
  /*
   * 开始时间
   */
  public get startDate(): string {
    return GetInputValueInDivObj(this.divEdit, 'txtStartDate');
  }

  /*
   * 结束时间
   */
  public set endDate(value: string) {
    SetInputValueInDivObj(this.divEdit, 'txtEndDate', value);
  }
  /*
   * 结束时间
   */
  public get endDate(): string {
    return GetInputValueInDivObj(this.divEdit, 'txtEndDate');
  }

  /** 函数功能:为编辑区绑定下拉框
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegionInDiv)
   **/
  public async BindDdl4EditRegionInDiv() {
    await this.SetDdl_CourseIdInDiv(); //编辑区域

    await this.SetDdl_IdXzCollegeInDiv(); //编辑区域

    await this.SetDdl_IdGradeBaseInDiv(); //编辑区域

    await this.SetDdl_SchoolYearInDiv(); //编辑区域

    await this.SetDdl_SchoolTermInDiv(); //编辑区域

    // await this.SetDdl_UserTypeInDiv(); //编辑区域
  }
}
