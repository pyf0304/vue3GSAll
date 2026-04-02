/**
 * 类名:RTViewpoint_Detail(界面:RTViewpointCRUD)
 * 表名:RTViewpoint(01120955)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:05:09
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { RTViewpoint_GetObjByKeyLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsRTViewpointWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsRTViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsRTViewpointEN';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* RTViewpoint_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class RTViewpoint_Detail {
  public static DetailObj: any;
  public divDetail: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)

  public static IdCurrEduClsCache = ''; //7、在查询区定义下拉框条件变量1
  public static TopicIdCache = ''; //2、界面主表的缓存分类字段变量1
  public static TopicIdStatic = ''; //7、在查询区定义下拉框条件变量1
  public static CourseIdStatic = ''; //6、定义下拉框条件变量1
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
  public HideDialog_RTViewpoint() {
    if (RTViewpoint_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      RTViewpoint_Detail.DetailObj.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_RTViewpoint(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_RTViewpoint.name;
    if (RTViewpoint_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (RTViewpoint_Detail.DetailObj == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await RTViewpoint_Detail.DetailObj.showDialog();
    }
    this.divDetail = RTViewpoint_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (RTViewpoint_Detail.times4TestShowDialog < 2) {
        RTViewpoint_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_RTViewpoint(strOp);
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
      RTViewpoint_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelRTViewpoint = '关闭';
    }
    return true;
  }

  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (RTViewpoint_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divDetail != null) return this.divDetail;
    } else {
      if (RTViewpoint_Detail.DetailObj.dialogVisible == false) {
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
    this.divDetail = RTViewpoint_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (RTViewpoint_Detail.times4TestShowDialog < 2) {
        RTViewpoint_Detail.times4TestShowDialog++;
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
      RTViewpoint_Detail.times4TestShowDialog = 0;
    }
    return this.divDetail;
  }

  /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
  public async btnDetailRecordInTab_Click(strTopicId: string, lngSubViewpointId: number) {
    const strThisFuncName = this.btnDetailRecordInTab_Click.name;
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_RTViewpoint('Detail');
    if (bolIsSuccess == false) return;
    try {
      if (IsNullOrEmpty(strTopicId) == true) {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      if (lngSubViewpointId == 0) {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      // const lngKeyId = Number(strKeyId);
      this.DetailRecord(strTopicId, lngSubViewpointId);
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
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord)
  <param name = "sender">参数列表</param>
*/
  public async DetailRecord(strTopicId: string, lngSubViewpointId: number): Promise<boolean> {
    const strThisFuncName = this.DetailRecord.name;
    this.btnCancelRTViewpoint = '关闭';
    try {
      const objRTViewpointEN = await RTViewpoint_GetObjByKeyLstAsync(strTopicId, lngSubViewpointId);
      if (objRTViewpointEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      this.ShowDetailDataFromRTViewpointClass(objRTViewpointEN);
      console.log('完成DetailRecord!');
    } catch (e) {
      const strMsg = Format(
        '显示详细信息不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true;
  }

  /* 修改记录
 (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
*/
  public async btnDetailRecord_Click(strTopicId: string, lngSubViewpointId: number) {
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_RTViewpoint('Detail');
    if (bolIsSuccess == false) return;
    if (IsNullOrEmpty(strTopicId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    if (lngSubViewpointId == 0) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    // 为编辑区绑定下拉框
    //const conBindDdl = await this.BindDdl4DetailRegion();
    this.bolIsLoadDetailRegion = true; //
    this.DetailRecord(strTopicId, lngSubViewpointId);
  }

  /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass)
  <param name = "pobjRTViewpointEN">表实体类对象</param>
*/
  public ShowDetailDataFromRTViewpointClass(pobjRTViewpointEN: clsRTViewpointEN) {
    this.topicId_d = pobjRTViewpointEN.topicId; // 主题Id
    this.proposePeople_d = pobjRTViewpointEN.proposePeople; // 提出人
    this.gsKnowledgeTypeId_d = pobjRTViewpointEN.gsKnowledgeTypeId; // 知识类型Id
    this.classificationId_d = pobjRTViewpointEN.classificationId; // 分类Id
    this.idCurrEduCls_d = pobjRTViewpointEN.idCurrEduCls; // 教学班流水号
    this.memo_d = pobjRTViewpointEN.memo; // 备注
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelRTViewpoint(value: string) {
    RTViewpoint_Detail.DetailObj.SetButtonText('btnCancelRTViewpoint', value);
  }
  /**
   * 分类Id (Used In ShowDetailDataFromClass())
   **/
  public set classificationId_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblClassificationId_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 知识类型Id (Used In ShowDetailDataFromClass())
   **/
  public set gsKnowledgeTypeId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblgsKnowledgeTypeId_d', value);
  }
  /**
   * 教学班流水号 (Used In ShowDetailDataFromClass())
   **/
  public set idCurrEduCls_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblIdCurrEduCls_d', value);
  }
  /**
   * 备注 (Used In ShowDetailDataFromClass())
   **/
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMemo_d', value);
  }
  /**
   * 提出人 (Used In ShowDetailDataFromClass())
   **/
  public set proposePeople_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblProposePeople_d', value);
  }
  /**
   * 主题Id (Used In ShowDetailDataFromClass())
   **/
  public set topicId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblTopicId_d', value);
  }
}
