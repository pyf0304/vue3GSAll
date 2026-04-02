import $ from 'jquery';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { SysSocialRelations_Edit } from '@/viewsBase/GradEduTopic/SysSocialRelations_Edit';
import { clsRTSysSocialRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTSysSocialRelaEN';
import { clsSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsSysSocialRelationsEN';
import { clsvSysSocialRelationsEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSocialRelationsEN';
import {
  RTSysSocialRela_AddNewRecordAsync,
  RTSysSocialRela_GetRecCountByCondAsync,
  RTSysSocialRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTSysSocialRelaWApi';
import {
  SysSocialRelations_GetMaxStrIdAsync,
  SysSocialRelations_GetObjBySocialIdAsync,
  SysSocialRelations_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsSysSocialRelationsWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { AccessBtnClickDefault, AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { GetInputValueInDivObj, HideDivInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { fa } from 'element-plus/es/locale';
import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { userStore } from '@/store/modulesShare/user';
declare function HideDialog(): void;
declare function HideDialogTen(): void;

declare let window: any;
/* SysSocialRelations_EditEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class SysSocialRelations_EditEx_Research extends SysSocialRelations_Edit {
  /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
    **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;
    const objPage: SysSocialRelations_EditEx_Research = <SysSocialRelations_EditEx_Research>(
      SysSocialRelations_Edit.GetPageEditObj('SysSocialRelations_EditEx_Research')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'SysSocialRelations_EditEx_Research'初始化过，请检查！`;
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

        break;
    }
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
    pobjSysSocialRelationsEN.SetDetailedDescription(this.detailedDescription); // 详细说明
    pobjSysSocialRelationsEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjSysSocialRelationsEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjSysSocialRelationsEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjSysSocialRelationsEN.SetIsSubmit(this.isSubmit); // 是否提交
    pobjSysSocialRelationsEN.SetMemo(this.memo); // 备注
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

        HideDialog();
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
        switch (strCommandText) {
          case '添加':
            await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,
            if (this.opType == 'AddWithMaxId') {
              await this.AddNewRecordWithMaxIdSave().then((jsonData) => {
                const returnBool2: string = <string>jsonData;
                if (IsNullOrEmpty(returnBool2) == false) {
                  HideDialog();
                  this.iShowList.BindGv(clsvSysSocialRelationsEN._CurrTabName, returnBool2);
                }
              });
            } else {
              await this.AddNewRecordSave().then((jsonData) => {
                const returnBool: boolean = jsonData;
                if (returnBool == true) {
                  HideDialog();
                  this.iShowList.BindGv(
                    clsvSysSocialRelationsEN._CurrTabName,
                    returnBool.toString(),
                  );
                }
              });
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
                HideDialog();
                this.iShowList.BindGv(clsvSysSocialRelationsEN._CurrTabName, returnBool.toString());
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
  public async AddNewRecordWithMaxId() {
    this.SetKeyReadOnly(false);
    $('#btnOKUpd').attr('disabled', 'false');
    this.opType = 'AddWithMaxId';

    this.btnSubmitSysSocialRelations = '确认添加';
    this.btnCancelSysSocialRelations = '取消添加';
    this.Clear();
    //wucSysSocialRelationsB1.socialId = clsSysSocialRelationsBL.GetMaxStrId_S();
  }

  //确定选择的观点 并添加到关系表中
  public btnOkRTSysSocialRelaInTab_Click(strkeyId: string) {
    //存放Id
    $('#hidSocialId').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSave();
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjRTSysSocialRelaEN">数据传输的目的类对象</param>
*/
  public async PutDataToRTSysSocialRelaClass(pobjRTSysSocialRelaEN: clsRTSysSocialRelaEN) {
    const divName = this.getDivName();
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strUserId = userStore.getUserId;
    const strSocialId = GetInputValueInDivObj(divName, 'hidSocialId');
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
  public async AddNewRecordSave() {
    const divName = this.getDivName();
    const strThisFuncName = this.AddNewRecordSave.name;

    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strSocialId = GetInputValueInDivObj(divName, 'hidSocialId');
    const strUserId = userStore.getUserId;
    const objRTSysSocialRelaEN: clsRTSysSocialRelaEN = new clsRTSysSocialRelaEN();
    await this.PutDataToRTSysSocialRelaClass(objRTSysSocialRelaEN);
    try {
      //同一用户，同一主题 同一技能 只能添加一次；
      const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And socialId = '${strSocialId}' And updUser = '${strUserId}'`;
      const responseText = await RTSysSocialRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一主题同一个用户不能重复添加同一个关系！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      } else {
        const responseText2 = await RTSysSocialRela_AddNewRecordAsync(objRTSysSocialRelaEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          const strInfo = `添加记录成功!`;

          //根据ID获取最大数；
          const strWhereCond2 = ` 1 =1 and socialId=${strSocialId}`;
          const intCitationCount = await RTSysSocialRela_GetRecCountByCondAsync(strWhereCond2);

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
          HideDialogTen();
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
}
