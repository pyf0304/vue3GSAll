import $ from 'jquery';
import { Pub_PaperList } from './Pub_PaperList';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';

import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { TopicObjective_Edit } from '@/viewsBase/GradEduTopic/TopicObjective_Edit';
import { TopicObjectiveCRUD } from '@/viewsBase/GradEduTopic/TopicObjectiveCRUD';
import { clsObjectiveAttachmentEN } from '@/ts/L0Entity/GradEduTopic/clsObjectiveAttachmentEN';
import { clsTopicObjectiveEN } from '@/ts/L0Entity/GradEduTopic/clsTopicObjectiveEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';

import { clsTopicObjectiveVerEN } from '@/ts/L0Entity/GradEduTopic/clsTopicObjectiveVerEN';
import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import {
  ObjectiveAttachment_AddNewRecordAsync,
  ObjectiveAttachment_DelObjectiveAttachmentsByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsObjectiveAttachmentWApi';
import { ResearchTopic_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import {
  TopicObjectiveVer_AddNewRecordAsync,
  TopicObjectiveVer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsTopicObjectiveVerWApi';
import {
  TopicObjective_AddNewRecordAsync,
  TopicObjective_GetMaxStrIdAsync,
  TopicObjective_GetObjByTopicObjectiveIdAsync,
  TopicObjective_IsExistAsync,
  TopicObjective_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsTopicObjectiveWApi';
import { LiteratureType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { userStore } from '@/store/modulesShare/user';

declare function HideDialog(): void;
declare function HideDialogThree(): void;
declare function CloseWindow(): void;
declare let window: any;
/* WApiTopicObjective_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class AddObjectiveFactEx extends TopicObjective_Edit {
  //论文列表
  public mstrListDivPaper = 'divPaperDataLst';
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvTopicObjectiveBy: string = "topicObjectiveId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  /* 函数功能:页面导入,当页面开始运行时所发生的事件
  (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
*/
  public async PageLoad() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //通过主题Id获取教学班ID
        if (clsPubLocalStorage.idCurrEduCls == '') {
          const objResearchTopic = await ResearchTopic_GetFirstObjAsync(
            ` topicId=${clsPrivateSessionStorage.topicIdInTree}`,
          );
          if (objResearchTopic == null) {
            const strMsg = Format(
              '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
              this.constructor.name,
              strThisFuncName,
            );
            console.error(strMsg);
            alert(strMsg);
            return;
            //const strThisFuncName = this.ShowData.name;
          }
          clsPubLocalStorage.idCurrEduCls = objResearchTopic.idCurrEduCls;
        }

        //const arrvTopicObjective_Cache = await vTopicObjective_GetObjLstAsync("1=1");

        //const ddl_gs_Share = await gs_Share_BindDdl_ShareIdInDivCache(this.divName4List, "ddlShareId");
        if (GetInputValueInDivObj(divName, 'hidObjectiveId') != '') {
          await this.UpdateRecord(GetInputValueInDivObj(divName, 'hidObjectiveId'));
          HideDivInDivObj(divName, 'divLoading');
        } else {
          this.AddNewRecord();
          let configTypeId;
          const strhidObjectiveTypeId = GetInputValueInDivObj(divName, 'hidObjectiveTypeId');
          if (strhidObjectiveTypeId == '01') {
            configTypeId = '07';
          } else {
            configTypeId = '08';
          }
          //获取分享Id
          const responseText = await gs_UserConfigEx_GetNewReturnShareIdEx(
            configTypeId,
            userStore.getUserId,
          );
          const strShareId: string = responseText;
          //const returnBool: boolean = !!responseText2;
          if (strShareId != '') {
            this.shareId = strShareId;
          }
          HideDivInDivObj(divName, 'divLoading');
        }
        ////建立缓存
        //

        TopicObjectiveCRUD.sortvTopicObjectiveBy = 'updDate Desc';

        //用户下拉框绑定
        //const ddl_UserId_q = await this.BindDdl_UserId("ddlUserId_q");
        await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q'); //用户查询区域
        //文献类型；
        await this.BindDdl_LiteratureTypeId('ddlLiteratureTypeId_q');

        //strWhereCond = await this.CombinevTopicObjectiveCondition();
        //const responseText = await vTopicObjective_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {

        //});
        ////2、显示无条件的表内容在GridView中
        //await this.BindGv_vTopicObjective();
        //$('#divEditRegion').modal('show');
        //ShowDialog("Add");
        //进来默认添加界面设置；

        //读取session角色 来判断绑定不同数据列表
        //获取用户角色来判断显示不同的列表数据；

        //获取传参的paperId
        const strPaperId = GetInputValueInDivObj(divName, 'hidRequestPaperId');
        if (strPaperId != '') {
          $('#SelectPaper').hide();
          //存放Id
          $('#txtSourceId').val(strPaperId);
        } else {
          $('#SelectPaper').show();
        }
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }

  /// <summary>
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

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
*/
  public async btnOKUpd_Click() {
    const divName = this.getDivName();
    if (divName == null) return;

    const strCommandText: string = this.btnSubmitTopicObjective;
    try {
      //判断session是否失效
      if (userStore.getUserId != '') {
        const strTopicObjectiveId = GetInputValueInDivObj(divName, 'hidObjectiveId');
        let configTypeId;

        const strhidObjectiveTypeId = GetInputValueInDivObj(divName, 'hidObjectiveTypeId');
        let strInfo;
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
            //            this.BindGv_vTopicObjective();
            //        }
            //    });
            //}
            //else {

            //}
            returnBool = await this.AddNewRecordSave();
            if (returnBool == true) {
              //HideDialog();
              //this.BindGv_vTopicObjective();
              //CloseWindow();
            }

            //更新总表3个参数 主键、子表类型、页面操作类型；
            if (strhidObjectiveTypeId == '01') {
              configTypeId = '07';
            } else {
              configTypeId = '08';
            }

            returnBool6 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strTopicObjectiveId,
              configTypeId,
              '1',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool6 == true) {
              console.log('客观数据总表同步成功；');
            } else {
              console.log('客观数据总表同步失败；');
            }
            //修改记录的同时添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                CloseWindow();
                //alert("添加历史版本出问题！");
              }
            });
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            returnBool = await this.UpdateRecordSave();
            strInfo = returnBool ? '修改成功！' : '修改不成功！';
            //strInfo += "(In WApiTopicObjective_QUDI_TS.btnOKUpd_Click)";

            //显示信息框
            console.log(strInfo);
            alert(strInfo);
            if (returnBool == true) {
              //HideDialog();
              //this.BindGv_vTopicObjective();
            }

            //更新总表3个参数 主键、子表类型、页面操作类型；

            if (strhidObjectiveTypeId == '01') {
              configTypeId = '07';
            } else {
              configTypeId = '08';
            }

            returnBool7 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strTopicObjectiveId,
              configTypeId,
              '2',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool7 == true) {
              console.log('客观数据总表同步成功；');
            } else {
              console.log('客观数据总表同步失败；');
            }
            //修改记录的同时添加历史版本
            returnBool = await this.AddVersionRecordSave();
            if (returnBool == true) {
              CloseWindow();
              //HideDialog();
              //this.BindGv_vTopicObjective();
              //alert("添加历史版本出问题！");
            }

            break;
          default:
            AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

            break;
        }
      } else {
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

  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
*/
  public async btnAddNewRecord_Click() {
    this.opType = 'Add';
    try {
      await this.AddNewRecord();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    this.btnSubmitTopicObjective = '确认添加';
    this.btnCancelTopicObjective = '取消添加';
    this.Clear();
    //去掉提交按钮不可用状态
    $('#btnOKUpd').attr('disabled', 'false');
  }
  public Clear() {
    $('#hdnFileOne').val('');
    $('#hdnFileTwo').val('');
    $('#hdnFileThree').val('');
  }

  /* 添加新记录，保存函数
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
*/
  public async AddNewRecordSave(): Promise<boolean> {
    const divName = this.getDivName();
    if (divName == null) return false;

    try {
      await TopicObjective_GetMaxStrIdAsync().then((jsonData) => {
        const returnString: string = jsonData.toString();
        if (returnString == '') {
          const strInfo = `获取表TopicObjective的最大关键字为空，不成功，请检查!`;
          //显示信息框
          alert(strInfo);
        } else {
          $('#txtTopicObjectiveId').val(returnString);
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
    //判断Id是否为空
    if (GetInputValueInDivObj(divName, 'txtTopicObjectiveId') != '') {
      const strTopicObjectiveId = GetInputValueInDivObj(divName, 'txtTopicObjectiveId');
      //存放Id
      $('#hidObjectiveId').val(strTopicObjectiveId);

      const objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
      objTopicObjectiveEN.SetCreateDate(clsPubFun4Web.getNowDate_ymd());
      this.PutDataToTopicObjectiveClass(objTopicObjectiveEN);
      try {
        const responseText = await TopicObjective_IsExistAsync(
          objTopicObjectiveEN.topicObjectiveId,
        );
        const bolIsExist: boolean = responseText;
        if (bolIsExist == true) {
          const strMsg = `添加记录时，关键字：${objTopicObjectiveEN.topicObjectiveId}已经存在！`;
          alert(strMsg);
          return responseText; //一定要有一个返回值，否则会出错！
        }
        const responseText2 = await TopicObjective_AddNewRecordAsync(objTopicObjectiveEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          //strIdCurrEduclsstrInfo: string = `添加记录成功!`;
          //
          ////显示信息框
          //alert(strInfo);
          //添加主题客观关系；
          //this.AddObjectiveNewRecordSave();
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
    } else {
      const strInfo = `获取最大关键字为空，不成功!`;
      //显示信息框
      alert(strInfo);
    }
    return true; //一定要有一个返回值，否则会出错！
  }

  //添加历史版本
  public async AddVersionRecordSave() {
    const strThisFuncName = this.AddVersionRecordSave.name;

    const objTopicObjectiveVerEN: clsTopicObjectiveVerEN = new clsTopicObjectiveVerEN();
    objTopicObjectiveVerEN.SetTopicObjectiveId(this.topicObjectiveId);
    this.PutDataToTopicObjectiveVClass(objTopicObjectiveVerEN);

    try {
      const responseText2 = await TopicObjectiveVer_AddNewRecordAsync(objTopicObjectiveVerEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1 =1 and topicObjectiveId=${this.topicObjectiveId}`;
        const intVersionCount = await TopicObjectiveVer_GetRecCountByCondAsync(strWhereCond2);

        const objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
        objTopicObjectiveEN.SetTopicObjectiveId(this.topicObjectiveId);
        objTopicObjectiveEN.SetVersionCount(intVersionCount);

        objTopicObjectiveEN.sfUpdFldSetStr = objTopicObjectiveEN.updFldString; //设置哪些字段被修改(脏字段)
        if (
          objTopicObjectiveEN.topicObjectiveId == '' ||
          objTopicObjectiveEN.topicObjectiveId == undefined
        ) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        const returnBool = await TopicObjective_UpdateRecordAsync(objTopicObjectiveEN);
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

  //////////////////////////////////////////////////////////////////////附件添加
  //添加上传论文附件方法
  public async AddPaperSubAttachmentSave(filePath: string, strfileNum: string) {
    const divName = this.getDivName();
    if (divName == null) return;

    const objObjectiveAttachmentEN: clsObjectiveAttachmentEN = new clsObjectiveAttachmentEN();
    this.PutDataToPaperAttachmentClass(objObjectiveAttachmentEN, filePath);
    try {
      const responseText2 = await ObjectiveAttachment_AddNewRecordAsync(objObjectiveAttachmentEN);
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
    pobjObjectiveAttachmentEN: clsObjectiveAttachmentEN,
    filePath: string,
  ) {
    const divName = this.getDivName();
    if (divName == null) return;

    pobjObjectiveAttachmentEN.SetTopicObjectiveId(
      GetInputValueInDivObj(divName, 'txtTopicObjectiveId'),
    ); // 概念Id

    let strfilePath = filePath;
    //判断地址不为空则执行截取操作
    if (strfilePath != '') {
      const index = strfilePath.lastIndexOf('/');
      strfilePath = strfilePath.substring(index + 1, strfilePath.length);
      pobjObjectiveAttachmentEN.SetFilePath(filePath);

      pobjObjectiveAttachmentEN.SetObjectiveAttachmentName(strfilePath);
    }
    pobjObjectiveAttachmentEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期

    pobjObjectiveAttachmentEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls); //教学班
    pobjObjectiveAttachmentEN.SetUpdUserId(userStore.getUserId); // 修改用户Id
  }
  ///////////////////////////////////////////////////////////////////数据提交；
  //客观提交审核
  public async btnIsSubmit_Click(strKeyId: string) {
    if (strKeyId == '') {
      alert('请选择需要提交的记录！');
      return;
    }

    this.SubmitRecord(strKeyId);
  }
  //提交判断；
  public async SubmitRecord(strTopicObjectiveId: string) {
    this.keyId = strTopicObjectiveId;

    try {
      const objTopicObjectiveEN = await TopicObjective_GetObjByTopicObjectiveIdAsync(
        strTopicObjectiveId,
      );
      if (objTopicObjectiveEN == null) return;
      //通过session 权限获取权限

      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;
      //判断角色 //学生00620003
      if (strRoleId == '00620003') {
        // //通过判断数据用户是否是当前登录用户；
        if (objTopicObjectiveEN.updUser == strUserId) {
          //判断数据是否已审核
          if (objTopicObjectiveEN.isSubmit == false) {
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
        if (objTopicObjectiveEN.isSubmit == false) {
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
  /* 提交权限修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
*/
  public async SubmitRecordSave(): Promise<boolean> {
    const strThisFuncName = this.SubmitRecordSave.name;

    const objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
    objTopicObjectiveEN.SetTopicObjectiveId(this.keyId);
    objTopicObjectiveEN.SetIsSubmit(true);
    this.PutDataToTopicObjectiveClass(objTopicObjectiveEN);
    objTopicObjectiveEN.sfUpdFldSetStr = objTopicObjectiveEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objTopicObjectiveEN.topicObjectiveId == '' ||
      objTopicObjectiveEN.topicObjectiveId == undefined
    ) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }

    try {
      const returnBool = await TopicObjective_UpdateRecordAsync(objTopicObjectiveEN);
      if (returnBool == true) {
        const strInfo = `提交成功!`;

        //显示信息框
        alert(strInfo);

        HideDialog();
        this.iShowList.BindGv(clsTopicObjectiveEN._CurrTabName, returnBool.toString());
      } else {
        const strInfo = `提交不成功!`;

        //显示信息框
        alert(strInfo);
        console.log('提交失败');
      }
      return true;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
    }
    return true;
  }

  ////////////////////////////////////////////////////修改数据

  //修改权限判断是否提交 提交则不可修改；
  /* 根据关键字获取相应的记录的对象
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
 <param name = "sender">参数列表</param>
*/
  public async UpdateRecord(strTopicObjectiveId: string): Promise<boolean> {
    this.btnSubmitTopicObjective = '确认修改';
    this.btnCancelTopicObjective = '取消修改';
    this.keyId = strTopicObjectiveId;
    // const strUserId = userStore.getUserId;
    try {
      const responseText = await TopicObjective_GetObjByTopicObjectiveIdAsync(strTopicObjectiveId);
      const objTopicObjectiveEN: clsTopicObjectiveEN = <clsTopicObjectiveEN>responseText;

      // //通过判断数据用户是否是当前登录用户；
      //if (objTopicObjectiveEN.updUser == strUserId) {

      //    //判断数据是否提交，提交则不可修改；
      //    if (objTopicObjectiveEN.isSubmit == false) {
      //        //ShowDialog('Update');

      //    }
      //    else {
      //        alert("当前数据已提交,不能修改！");
      //        return;
      //    }

      //}
      //else {
      //    alert("当前数据不是您所添加，不能修改！");
      //    return;
      //}

      this.GetDataFromTopicObjectiveClass(objTopicObjectiveEN);
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
  public async UpdateRecordSave(): Promise<boolean> {
    const divName = this.getDivName();
    if (divName == null) return false;

    const strThisFuncName = this.UpdateRecordSave.name;

    const objTopicObjectiveEN: clsTopicObjectiveEN = new clsTopicObjectiveEN();
    objTopicObjectiveEN.SetTopicObjectiveId(this.keyId);
    this.PutDataToTopicObjectiveClass(objTopicObjectiveEN);
    objTopicObjectiveEN.sfUpdFldSetStr = objTopicObjectiveEN.updFldString; //设置哪些字段被修改(脏字段)
    if (
      objTopicObjectiveEN.topicObjectiveId == '' ||
      objTopicObjectiveEN.topicObjectiveId == undefined
    ) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await TopicObjective_UpdateRecordAsync(objTopicObjectiveEN);
      const returnBool = !!responseText;
      if (returnBool == true) {
        //如果等于空，那么就去判断附件是否为空；
        //得到相关论文附件地址，判断是否为空 只要有一个不为空都执行附件清除功能；
        if (
          (GetInputValueInDivObj(divName, 'hdnFileOne') != '' && $('#hdnFileOne') != undefined) ||
          (GetInputValueInDivObj(divName, 'hdnFileTwo') != '' && $('#hdnFileTwo') != undefined) ||
          (GetInputValueInDivObj(divName, 'hdnFileThree') != '' && $('#hdnFileThree') != undefined)
        ) {
          //根据Id删除附件
          const strwhere = `topicObjectiveId ='${objTopicObjectiveEN.topicObjectiveId}'`;
          this.DelRecordByWhere(strwhere);
        }
      }
      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
    }
    return true;
  }

  //删除观点附件
  /* 
根据关键字删除记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DelRecord)
*/
  public async DelRecordByWhere(strWhere: string) {
    const divName = this.getDivName();
    if (divName == null) return;

    try {
      const returnInt = await ObjectiveAttachment_DelObjectiveAttachmentsByCondAsync(strWhere);
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
      return returnInt;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `删除记录不成功. ${e}.`;
      alert(strMsg);
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjTopicObjectiveEN">数据传输的目的类对象</param>
  */
  public PutDataToTopicObjectiveVClass(pobjTopicObjectiveVerEN: clsTopicObjectiveVerEN) {
    const divName = this.getDivName();
    if (divName == null) return;

    const strUserId = userStore.getUserId;
    pobjTopicObjectiveVerEN.SetTopicObjectiveId(this.topicObjectiveId); // 客观Id
    pobjTopicObjectiveVerEN.SetObjectiveName(this.objectiveName); // 客观名称
    pobjTopicObjectiveVerEN.SetObjectiveContent(this.objectiveContent); // 客观内容
    //判断客观类型
    const strhidObjectiveTypeId = GetInputValueInDivObj(divName, 'hidObjectiveTypeId');
    if (strhidObjectiveTypeId != '') {
      pobjTopicObjectiveVerEN.SetObjectiveType(strhidObjectiveTypeId);
    }
    //pobjTopicObjectiveEEN.SetObjectiveType(this.objectiveType;// 客观类型
    pobjTopicObjectiveVerEN.SetSourceId(this.sourceId); // 来源Id
    pobjTopicObjectiveVerEN.SetConclusion(this.conclusion); // 结论
    pobjTopicObjectiveVerEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);

    pobjTopicObjectiveVerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjTopicObjectiveVerEN.SetUpdUser(strUserId); // 修改用户Id
    pobjTopicObjectiveVerEN.SetMemo(this.memo); // 备注

    const strPdfPageNum = GetInputValueInDivObjN(divName, 'hidPdfPageNum');
    if (strPdfPageNum != 0) {
      pobjTopicObjectiveVerEN.SetPdfPageNum(strPdfPageNum);
    } else {
      pobjTopicObjectiveVerEN.SetPdfPageNum(1);
    }
  }

  /* 函数功能:把界面上的属性数据传到类对象中
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
     <param name = "pobjTopicObjectiveEN">数据传输的目的类对象</param>
   */
  public async PutDataToTopicObjectiveClass(pobjTopicObjectiveEN: clsTopicObjectiveEN) {
    const divName = this.getDivName();
    if (divName == null) return;

    const strUserId = userStore.getUserId;
    pobjTopicObjectiveEN.SetTopicObjectiveId(this.topicObjectiveId); // 客观Id
    pobjTopicObjectiveEN.SetObjectiveName(this.objectiveName); // 客观名称
    pobjTopicObjectiveEN.SetObjectiveContent(this.objectiveContent); // 客观内容
    //判断客观类型
    const strhidObjectiveTypeId = GetInputValueInDivObj(divName, 'hidObjectiveTypeId');
    if (strhidObjectiveTypeId != '') {
      pobjTopicObjectiveEN.SetObjectiveType(strhidObjectiveTypeId);
    }
    //pobjTopicObjectiveEEN.SetObjectiveType(this.objectiveType;// 客观类型
    pobjTopicObjectiveEN.SetSourceId(this.sourceId); // 来源Id
    pobjTopicObjectiveEN.SetConclusion(this.conclusion); // 结论
    pobjTopicObjectiveEN.SetShareId(this.shareId); //分享；
    pobjTopicObjectiveEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjTopicObjectiveEN.SetIsSubmit(false); // 是否提交 //因为是个人数据，所以状态直接为false；
    pobjTopicObjectiveEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    if (this.btnSubmitTopicObjective == '确认添加') {
      pobjTopicObjectiveEN.SetUpdUser(strUserId); // 修改用户Id
    }

    pobjTopicObjectiveEN.SetMemo(this.memo); // 备注
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvPaperBy(value: string) {
    const divName = this.getDivName();

    SetInputValueInDivObj(divName, 'hidSortvPaperBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvPaperBy(): string {
    const divName = this.getDivName();

    return GetInputValueInDivObj(divName, 'hidSortvPaperBy');
  }
  /*
   * 论文标题
   */
  public get paperTitle_q(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtPaperTitle_q');
  }
  ///////////////////////论文列表条件
  public get readUser_q(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }

  /*
   * 文献类型Id
   */
  public get literatureTypeId_q(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlLiteratureTypeId_q');
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
  /* 把所有的查询控件内容组合成一个条件串
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
  <returns>条件串(strWhereCond)</returns>
*/
  public async CombinevPaperCondition(): Promise<string> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }

      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      }
      //用户
      if (this.readUser_q != '' && this.readUser_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.readUser_q}'`;
      }
      //只查询提交的论文数据
      strWhereCond += ` And ${clsPaperEN.con_IsSubmit} = 'true'`;

      //排除获取已被当前观点引用过的论文数据；
      //strWhereCond += ` And paperId not in (select paperId from RTPaperRela where viewpointId = '${strTopicId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //选择论文弹出列表数据；
  public async selectPaper_Click() {
    const objPage_Paper = new Pub_PaperList();
    await objPage_Paper.BindGv_vPaper();
  }
  //查询论文列表
  public async btnPaperQuery_Click() {
    const objPage_Paper = new Pub_PaperList();
    await objPage_Paper.BindGv_vPaper();
  }
  //确定选择的论文 并添加到关系表中
  public btnPaperRecordInTab_Click(strkeyId: string) {
    const divName = this.getDivName();
    if (divName == null) return;

    //存放Id
    SetHidPaperId(divName, strkeyId);

    $('#txtSourceId').val(strkeyId);
    //设置只读属性；
    $('#txtSourceId').attr('disabled', 'disabled');
    //$("#txtPaperId").val(strkeyId);
    ////设置只读属性；
    //$("#txtPaperId").attr("disabled", "disabled");
    //关闭列表
    HideDialogThree();
  }

  /*
   * 文献类型
   */
  public set objectiveType(value: string) {
    const divName = this.getDivName();

    SetSelectValueByIdInDivObj(divName, 'ddlObjectiveType', value);
  }
  /*
   * 文献类型
   */
  public get objectiveType(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlObjectiveType');
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
}
