import { userStore } from '@/store/modulesShare/user';
import { clsgs_TeachingDateEN } from '@/ts/L0Entity/DailyRunning/clsgs_TeachingDateEN';
import { clsvgs_TeachingDateEN } from '@/ts/L0Entity/DailyRunning/clsvgs_TeachingDateEN';
import { CurrEduCls_GetObjByIdCurrEduClsCache } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
import {
  gs_TeachingDate_GetObjBymIdAsync,
  gs_TeachingDate_UpdateRecordAsync,
} from '@/ts/L3ForWApi/DailyRunning/clsgs_TeachingDateWApi';
import {
  gs_TeachingDateEx_AddEmptyRecord,
  gs_TeachingDateEx_GetObjByIdCurrEduCls,
} from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TeachingDateExWApi';
import { gs_TotalDataStatisticsEx_GetTotalStatisticsByTableAsync } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { SysCommentEx_UpdateCommentWeekAsync } from '@/ts/L3ForWApiExShare/GraduateEdu/clsSysCommentExWApi';
import {
  GetInputValueInDivObj,
  HideDivInDivObj,
  SetSpanHtmlInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { clsDateTime } from '@/ts/PubFun/clsDateTime';
import { AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { gs_TeachingDate_Edit } from '@/viewsBase/DailyRunning/gs_TeachingDate_Edit';

/* gs_TeachingDate_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class gs_TeachingDate_EditEx extends gs_TeachingDate_Edit {
  /**
  按钮单击,用于调用Js函数中btnClick
 (AutoGCLib.Vue_ViewScript_EditCSEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    const strThisFuncName = this.btnEdit_Click.name;
    const objPage: gs_TeachingDate_EditEx = <gs_TeachingDate_EditEx>(
      gs_TeachingDate_Edit.GetPageEditObj('gs_TeachingDate_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'gs_TeachingDate_EditEx'初始化过，请检查！`;
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
        objPage.btnAddNewRecord_Click();
        break;

      case 'ResetEduClsDate':
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }

        objPage.btnResetEduClsDate_Click(strKeyId);
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

  /** 根据关键字获取相应的记录的对象
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_UpdateRecord)
   * @param sender">参数列表</param>
   **/
  public async ResetEduClsDate(strIdCurrEduCls: string): Promise<boolean> {
    const strThisFuncName = this.UpdateRecord.name;
    let lngmId = 0;
    try {
      const strCourseId = clsPubLocalStorage.courseId;
      const objCurrEduCls = await CurrEduCls_GetObjByIdCurrEduClsCache(
        strIdCurrEduCls,
        strCourseId,
      );
      if (objCurrEduCls == null) return false;
      gs_TeachingDate_Edit.IdCurrEduClsCache = strIdCurrEduCls;
      const strCurrEduClsName = objCurrEduCls.eduClsName;
      SetSpanHtmlInDivObj(
        this.divEdit,
        'spnEduClsName',
        `${strCurrEduClsName}(${strIdCurrEduCls})`,
      );

      let objgs_TeachingDateEN = await gs_TeachingDateEx_GetObjByIdCurrEduCls(strIdCurrEduCls);
      if (objgs_TeachingDateEN == null) {
        const strMid = await gs_TeachingDateEx_AddEmptyRecord(clsPubLocalStorage.idCurrEduCls);
        if (strMid == '') {
          const strMsg = Format(
            '重置教学班开始结束时间时，添加空记录出错.(in {0}.{1})',
            this.className,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return false;
        }
        lngmId = Number(strMid);
        objgs_TeachingDateEN = await gs_TeachingDate_GetObjBymIdAsync(Number(lngmId));
        if (objgs_TeachingDateEN == null) {
          const strMsg = Format(
            '重置教学班开始结束时间时，添加空记录出错.(in {0}.{1})',
            this.className,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return false;
        }
      } else {
        lngmId = objgs_TeachingDateEN.mId;
      }
      this.keyId = lngmId.toString();
      await this.GetDataFromgs_TeachingDateClass(objgs_TeachingDateEN);
      console.log('完成UpdateRecord!');
      return true;
    } catch (e: any) {
      const strMsg = Format(
        '根据关键字获取相应的记录的对象不成功,{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
  }
  public async GetDataFromgs_TeachingDateClass(pobjgs_TeachingDateEN: clsgs_TeachingDateEN) {
    // this.idCurrEduCls = pobjgs_TeachingDateEN.idCurrEduCls; // 当前教学班流水号
    this.startDate = pobjgs_TeachingDateEN.startDate; // 开始日期
    this.endDate = pobjgs_TeachingDateEN.endDate; // 截止日期
    // this.updDate = pobjgs_TeachingDateEN.updDate; // 修改日期
    // this.updUser = pobjgs_TeachingDateEN.updUser; // 修改人
    this.memo = pobjgs_TeachingDateEN.memo; // 备注
  }
  public async btnResetEduClsDate_Click(strKeyId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_gs_TeachingDate(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();

      const update = await this.ResetEduClsDate(strKeyId);
      if (update == false) {
        const strMsg = Format('在修改记录时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
    } catch (e: any) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }
  /** 修改记录
   * (AutoGCLib.Vue_ViewScript_EditCS_TS4TypeScript:Gen_Vue_Ts_btnUpdateRecord_Click)
   **/
  public async btnUpdateRecord_Click(strKeyId: string) {
    const strThisFuncName = this.btnUpdateRecord_Click.name;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '修改记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
      return;
    }
    try {
      this.opType = 'Update';
      const bolIsSuccess = await this.ShowDialog_gs_TeachingDate(this.opType);
      if (bolIsSuccess == false) return;
      await this.BindDdl4EditRegionInDiv();
      this.SetEventFunc();
      this.bolIsLoadEditRegion = true; //
      const lngKeyId = Number(strKeyId);
      const update = await this.UpdateRecord(lngKeyId);
      if (update == false) {
        const strMsg = Format('在修改记录时,显示记录数据不成功!');
        console.error(strMsg);
        alert(strMsg);
        return;
      }
    } catch (e: any) {
      const strMsg = Format(
        '(errid: WiTsCs0034)在修改记录时出错!请联系管理员!{0}.(in {1}.{2})',
        e,
        this.className,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /** 函数功能:把界面上的属性数据传到类对象中
   * (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   * @param pobjgs_TeachingDateEN">数据传输的目的类对象</param>
   **/
  public async PutDataTogs_TeachingDateClass(pobjgs_TeachingDateEN: clsgs_TeachingDateEN) {
    pobjgs_TeachingDateEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); // 当前教学班流水号
    pobjgs_TeachingDateEN.SetStartDate(this.startDate); // 开始日期
    pobjgs_TeachingDateEN.SetEndDate(this.endDate); // 截止日期
    pobjgs_TeachingDateEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(0)); // 修改日期
    pobjgs_TeachingDateEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjgs_TeachingDateEN.SetMemo(this.memo); // 备注
  }
  //---------------------------

  /*
     按钮单击,用于调用Js函数中btn_Click
  
    */

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
 (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnSubmit_Click() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmitgs_TeachingDate;
    //判断如果教学班文本框没有数据，那么就取标题栏下拉框的缓存数据
    let strIdCurrEduCls = '';
    if (GetInputValueInDivObj(divName, 'txtidCurrEduCls') == '') {
      strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    } else {
      strIdCurrEduCls = GetInputValueInDivObj(divName, 'txtidCurrEduCls');
    }

    try {
      //判断session是否失效
      if (userStore.getUserId != '') {
        switch (strCommandText) {
          case '添加':
            await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,
            if (this.opType == 'AddWithMaxId') {
              //const responseText3 = await this.AddNewRecordWithMaxIdSave().then((jsonData)=>{
              //strIdCurrEduclsreturnKeyId: string = <string>jsonData;
              //if (IsNullOrEmpty(returnKeyId) == false)
              //{
              //HideDialog_gs_TeachingDate();
              //this.iShowList.BindGvCache(clsvgs_TeachingDateEN._CurrTabName);
              //}
              //});
            } else {
              await this.AddNewRecordSave().then((jsonData) => {
                const returnBool: boolean = jsonData;
                if (returnBool == true) {
                  this.HideDialog_gs_TeachingDate();
                  this.iShowList.BindGv(clsvgs_TeachingDateEN._CurrTabName, '');
                  //数据同步；
                  const responseText4 = gs_TotalDataStatisticsEx_GetTotalStatisticsByTableAsync(
                    strIdCurrEduCls,
                    userStore.getUserId,
                  );
                  const returnBool3 = !!responseText4;
                  if (returnBool3 == true) {
                    const responseText5 = SysCommentEx_UpdateCommentWeekAsync(
                      strIdCurrEduCls,
                      userStore.getUserId,
                    );
                    const returnBool5 = !!responseText5;
                    if (returnBool5 == true) {
                      console.log('同步成功');
                    } else {
                      console.log('同步数据成功,但同步评论出错');
                    }
                  } else {
                    console.log('同步失败');
                  }
                }
              });
            }
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            await this.UpdateRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              let strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
              strInfo += '(In gs_TeachingDate_Edit.btnSubmit_Click)';

              //显示信息框
              console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                this.HideDialog_gs_TeachingDate();
                this.iShowList.BindGv(clsvgs_TeachingDateEN._CurrTabName, '');
                //数据同步；
                const responseText4 = gs_TotalDataStatisticsEx_GetTotalStatisticsByTableAsync(
                  strIdCurrEduCls,
                  userStore.getUserId,
                );
                const returnBool3 = !!responseText4;
                if (returnBool3 == true) {
                  console.log('同步成功');
                } else {
                  console.log('同步失败');
                }
              }
            });
            break;
          default:
            AccessSubmitClickDefault(strCommandText, 'btnSubmit_Click');

            break;
        }
      } else {
        alert('登录超时，请重新登录');
        //    reLogin();
      }
      HideDivInDivObj(divName, 'divLoading');
      //去掉提交按钮不可用状态
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }

  /* 在数据表里修改记录
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecordInTab_Click)
  */
  public async btnUpdateRecordInTab_Click(strKeyId: string) {
    this.keyId = strKeyId;
    this.opType = 'Update';
    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }

    const bolIsSuccess = await this.ShowDialog_gs_TeachingDate(this.opType);
    if (bolIsSuccess == false) return;
    // 为编辑区绑定下拉框
    await this.BindDdl4EditRegionInDiv();
    this.SetEventFunc();
    this.ShowDialog_gs_TeachingDate('Update');
    this.bolIsLoadEditRegion = true; //
    const lngKeyId = Number(strKeyId);
    this.UpdateRecord(lngKeyId);

    //关键字存放
    $('#hidgs_DateId').val(strKeyId);
  }

  /* 修改记录
   (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
 */
  public async UpdateRecordSave() {
    const divName = this.getDivName();
    const strThisFuncName = this.UpdateRecordSave.name;
    //
    const objgs_TeachingDateEN: clsgs_TeachingDateEN = new clsgs_TeachingDateEN();
    const strKeyId = GetInputValueInDivObj(divName, 'hidgs_DateId');
    objgs_TeachingDateEN.SetmId(Number(strKeyId));
    this.PutDataTogs_TeachingDateClass(objgs_TeachingDateEN);
    objgs_TeachingDateEN.sfUpdFldSetStr = objgs_TeachingDateEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objgs_TeachingDateEN.mId == 0 || objgs_TeachingDateEN.mId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await gs_TeachingDate_UpdateRecordAsync(objgs_TeachingDateEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        //gs_TeachingDate_ReFreshCache(gs_TeachingDate_Edit.stridCurrEduCls_Cache);
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

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
  (AutoGCLib.WA_ViewScript_EditCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
*/
  public async PageLoad() {
    const divName = this.getDivName();
    if (divName == null) return;

    // 在此处放置用户代码以初始化页面
    try {
      this.SetEventFunc();
      HideDivInDivObj(divName, 'divLoading');
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }
}
