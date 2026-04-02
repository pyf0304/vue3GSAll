/**
 * 类名:gs_VpClassificationRela_Detail(界面:gs_VpClassificationRelaCRUD)
 * 表名:gs_VpClassificationRela(01120777)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:04:59
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { gs_VpClassificationRela_GetObjByKeyLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationRelaWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { gs_VpClassificationRelaEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/GradEduTopic/clsgs_VpClassificationRelaExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsgs_VpClassificationRelaEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationRelaEN';
import { clsgs_VpClassificationRelaENEx } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationRelaENEx';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* gs_VpClassificationRela_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class gs_VpClassificationRela_Detail {
  public static DetailObj: any;
  public divDetail: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)

  public static TopicIdCache = ''; //2、界面主表的缓存分类字段变量1
  public static IdCurrEduClsStatic = ''; //6、定义下拉框条件变量1
  private iShowList: IShowList;
  public mstrListDiv = 'divDataLst';
  public bolIsLoadDetailRegion = false; //记录是否导入编辑区的变量
  public divName4Detail = 'divDetail'; //编辑区的Id
  /**
   * 获取当前组件的divEdit的层对象
   **/
  public get thisDivDetail(): HTMLDivElement {
    return this.divDetail;
  }
  /**
   * 获取当前组件的divEdit的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return this.divDetail;
  }
  constructor(objShowList: IShowList) {
    this.iShowList = objShowList;
    const divTemp = document.createElement('div');
    divTemp.id = 'temp';
    this.divDetail = divTemp;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_gs_VpClassificationRela() {
    if (gs_VpClassificationRela_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      gs_VpClassificationRela_Detail.DetailObj.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_gs_VpClassificationRela(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_gs_VpClassificationRela.name;
    if (gs_VpClassificationRela_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (gs_VpClassificationRela_Detail.DetailObj == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await gs_VpClassificationRela_Detail.DetailObj.showDialog();
    }
    this.divDetail = gs_VpClassificationRela_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (gs_VpClassificationRela_Detail.times4TestShowDialog < 2) {
        gs_VpClassificationRela_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_gs_VpClassificationRela(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前详细信息区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      gs_VpClassificationRela_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelgs_VpClassificationRela = '关闭';
    }
    return true;
  }

  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (gs_VpClassificationRela_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divDetail != null) return this.divDetail;
    } else {
      if (gs_VpClassificationRela_Detail.DetailObj.dialogVisible == false) {
        const strMsg = Format(
          '当前详细信息区的的对话框还没有打开，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
    }
    this.divDetail = gs_VpClassificationRela_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (gs_VpClassificationRela_Detail.times4TestShowDialog < 2) {
        gs_VpClassificationRela_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.getDivName();
        }, 100);
      } else {
        const strMsg = Format(
          '当前详细信息区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
      return null;
    } else {
      gs_VpClassificationRela_Detail.times4TestShowDialog = 0;
    }
    return this.divDetail;
  }

  /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
  public async btnDetailRecordInTab_Click(lngClassificationId: number, strTopicId: string) {
    const strThisFuncName = this.btnDetailRecordInTab_Click.name;
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_gs_VpClassificationRela('Detail');
    if (bolIsSuccess == false) return;
    try {
      if (lngClassificationId == 0) {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      if (IsNullOrEmpty(strTopicId) == true) {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      this.DetailRecord4Func(lngClassificationId, strTopicId);
    } catch (e) {
      const strMsg = Format(
        '详细信息记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 
 根据关键字详细信息记录
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord4Func)
  <param name = "sender">参数列表</param>
*/
  public async DetailRecord4Func(lngClassificationId: number, strTopicId: string) {
    const strThisFuncName = this.DetailRecord4Func.name;
    this.btnCancelgs_VpClassificationRela = '关闭';
    try {
      const objgs_VpClassificationRelaEN = await gs_VpClassificationRela_GetObjByKeyLstAsync(
        lngClassificationId,
        strTopicId,
      );
      const objgs_VpClassificationRelaENEx = new clsgs_VpClassificationRelaENEx();
      ObjectAssign(objgs_VpClassificationRelaENEx, objgs_VpClassificationRelaEN);
      await gs_VpClassificationRelaEx_FuncMapByFldName(
        clsgs_VpClassificationRelaENEx.con_ClassificationName,
        objgs_VpClassificationRelaENEx,
      );
      await gs_VpClassificationRelaEx_FuncMapByFldName(
        clsgs_VpClassificationRelaENEx.con_DateTimeSim,
        objgs_VpClassificationRelaENEx,
      );
      this.ShowDetailDataFromgs_VpClassificationRelaClass4Func(objgs_VpClassificationRelaENEx);
      console.log('完成DetailRecord4Func!');
    } catch (e) {
      const strMsg = Format(
        '显示详细信息4Func不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 修改记录
 (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
*/
  public async btnDetailRecord_Click(lngClassificationId: number, strTopicId: string) {
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_gs_VpClassificationRela('Detail');
    if (bolIsSuccess == false) return;
    if (lngClassificationId == 0) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    if (IsNullOrEmpty(strTopicId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    // 为编辑区绑定下拉框
    //const conBindDdl = await this.BindDdl4DetailRegion();
    this.bolIsLoadDetailRegion = true; //
    this.DetailRecord4Func(lngClassificationId, strTopicId);
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objgs_VpClassificationRelaENS">源对象</param>
  /// <returns>目标对象=>clsgs_VpClassificationRelaEN:objgs_VpClassificationRelaENT</returns>
  public CopyToEx(
    objgs_VpClassificationRelaENS: clsgs_VpClassificationRelaEN,
  ): clsgs_VpClassificationRelaENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objgs_VpClassificationRelaENT = new clsgs_VpClassificationRelaENEx();
    try {
      ObjectAssign(objgs_VpClassificationRelaENT, objgs_VpClassificationRelaENS);
      return objgs_VpClassificationRelaENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objgs_VpClassificationRelaENT;
    }
  }

  /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
  <param name = "pobjgs_VpClassificationRelaEN">表实体类对象</param>
*/
  public ShowDetailDataFromgs_VpClassificationRelaClass4Func(
    pobjgs_VpClassificationRelaENEx: clsgs_VpClassificationRelaENEx,
  ) {
    this.classificationId_d = pobjgs_VpClassificationRelaENEx.classificationId; // 分类Id
    this.topicId_d = pobjgs_VpClassificationRelaENEx.topicId; // 主题Id
    this.orderNum_d = pobjgs_VpClassificationRelaENEx.orderNum; // 序号
    this.updDate_d = pobjgs_VpClassificationRelaENEx.updDate; // 修改日期
    this.updUser_d = pobjgs_VpClassificationRelaENEx.updUser; // 修改人
    this.memo_d = pobjgs_VpClassificationRelaENEx.memo; // 备注
    this.classificationName_d = pobjgs_VpClassificationRelaENEx.classificationName; // 分类名称
    this.dateTimeSim_d = pobjgs_VpClassificationRelaENEx.dateTimeSim; // 简化日期时间
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelgs_VpClassificationRela(value: string) {
    gs_VpClassificationRela_Detail.DetailObj.SetButtonText(
      'btnCancelgs_VpClassificationRela',
      value,
    );
  }
  /**
   * 分类Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set classificationId_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblClassificationId_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 分类Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set classificationName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblClassificationName_d', value);
  }
  /**
   * 修改日期 (Used In ShowDetailDataFromClass4Func())
   **/
  public set dateTimeSim_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblDateTimeSim_d', value);
  }
  /**
   * 备注 (Used In ShowDetailDataFromClass4Func())
   **/
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMemo_d', value);
  }
  /**
   * 序号 (Used In ShowDetailDataFromClass4Func())
   **/
  public set orderNum_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblOrderNum_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 主题Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set topicId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblTopicId_d', value);
  }
  /**
   * 修改日期 (Used In ShowDetailDataFromClass4Func())
   **/
  public set updDate_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblUpdDate_d', value);
  }
  /**
   * 修改人 (Used In ShowDetailDataFromClass4Func())
   **/
  public set updUser_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblUpdUser_d', value);
  }
}
