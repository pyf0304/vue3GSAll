/**
 * 类名:Viewpoint_Detail(界面:ViewpointCRUD)
 * 表名:Viewpoint(01120542)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:05:25
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { Viewpoint_GetObjByViewpointIdAsync } from '@/ts/L3ForWApi/GradEduTopic/clsViewpointWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsViewpointEN } from '@/ts/L0Entity/GradEduTopic/clsViewpointEN';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* Viewpoint_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class Viewpoint_Detail {
  public static DetailObj: any;
  public divDetail: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)

  public static IdCurrEduClsCache = ''; //2、界面主表的缓存分类字段变量1
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
  public HideDialog_Viewpoint() {
    if (Viewpoint_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      Viewpoint_Detail.DetailObj.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_Viewpoint(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_Viewpoint.name;
    if (Viewpoint_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (Viewpoint_Detail.DetailObj == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await Viewpoint_Detail.DetailObj.showDialog();
    }
    this.divDetail = Viewpoint_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (Viewpoint_Detail.times4TestShowDialog < 2) {
        Viewpoint_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_Viewpoint(strOp);
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
      Viewpoint_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelViewpoint = '关闭';
    }
    return true;
  }

  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (Viewpoint_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divDetail != null) return this.divDetail;
    } else {
      if (Viewpoint_Detail.DetailObj.dialogVisible == false) {
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
    this.divDetail = Viewpoint_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (Viewpoint_Detail.times4TestShowDialog < 2) {
        Viewpoint_Detail.times4TestShowDialog++;
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
      Viewpoint_Detail.times4TestShowDialog = 0;
    }
    return this.divDetail;
  }

  /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
  public async btnDetailRecordInTab_Click(strKeyId: string) {
    const strThisFuncName = this.btnDetailRecordInTab_Click.name;
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_Viewpoint('Detail');
    if (bolIsSuccess == false) return;
    try {
      if (strKeyId == '') {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      this.DetailRecord(strKeyId);
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
  public async DetailRecord(strViewpointId: string): Promise<boolean> {
    const strThisFuncName = this.DetailRecord.name;
    this.btnCancelViewpoint = '关闭';
    try {
      const objViewpointEN = await Viewpoint_GetObjByViewpointIdAsync(strViewpointId);
      if (objViewpointEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      this.ShowDetailDataFromViewpointClass(objViewpointEN);
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
  public async btnDetailRecord_Click(strKeyId: string) {
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_Viewpoint('Detail');
    if (bolIsSuccess == false) return;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    // 为编辑区绑定下拉框
    //const conBindDdl = await this.BindDdl4DetailRegion();
    this.bolIsLoadDetailRegion = true; //
    this.DetailRecord(strKeyId);
  }

  /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass)
  <param name = "pobjViewpointEN">表实体类对象</param>
*/
  public ShowDetailDataFromViewpointClass(pobjViewpointEN: clsViewpointEN) {
    this.viewpointId_d = pobjViewpointEN.viewpointId; // 观点Id
    this.viewpointName_d = pobjViewpointEN.viewpointName; // 观点名称
    this.viewpointContent_d = pobjViewpointEN.viewpointContent; // 观点内容
    this.reason_d = pobjViewpointEN.reason; // 理由
    this.source_d = pobjViewpointEN.source; // 来源
    this.vPProposePeople_d = pobjViewpointEN.vPProposePeople; // 观点提出人
    this.memo_d = pobjViewpointEN.memo; // 备注
    this.isSubmit_d = pobjViewpointEN.isSubmit; // 是否提交
    this.appraiseCount_d = pobjViewpointEN.appraiseCount; // 评论数
    this.score_d = pobjViewpointEN.score; // 评分
    this.okCount_d = pobjViewpointEN.okCount; // 点赞统计
    this.citationId_d = pobjViewpointEN.citationId; // 引用Id
    this.citationCount_d = pobjViewpointEN.citationCount; // 引用统计
    this.stuScore_d = pobjViewpointEN.stuScore; // 学生平均分
    this.teaScore_d = pobjViewpointEN.teaScore; // 教师评分
    this.viewpointId_d = pobjViewpointEN.viewpointId; // 观点Id
    this.idCurrEduCls_d = pobjViewpointEN.idCurrEduCls; // 教学班流水号
    this.viewpointName_d = pobjViewpointEN.viewpointName; // 观点名称
    this.pdfContent_d = pobjViewpointEN.pdfContent; // Pdf内容
    this.viewpointContent_d = pobjViewpointEN.viewpointContent; // 观点内容
    this.pdfPageNum_d = pobjViewpointEN.pdfPageNum; // Pdf页码
    this.viewpointTypeId_d = pobjViewpointEN.viewpointTypeId; // 观点类型Id
    this.versionCount_d = pobjViewpointEN.versionCount; // 版本统计
    this.reason_d = pobjViewpointEN.reason; // 理由
    this.createDate_d = pobjViewpointEN.createDate; // 建立日期
    this.source_d = pobjViewpointEN.source; // 来源
    this.shareId_d = pobjViewpointEN.shareId; // 分享Id
    this.vPProposePeople_d = pobjViewpointEN.vPProposePeople; // 观点提出人
    this.isRecommend_d = pobjViewpointEN.isRecommend; // 是否推荐
    this.updDate_d = pobjViewpointEN.updDate; // 修改日期
    this.memo_d = pobjViewpointEN.memo; // 备注
    this.isSubmit_d = pobjViewpointEN.isSubmit; // 是否提交
    this.userTypeId_d = pobjViewpointEN.userTypeId; // 用户类型Id
    this.citationId_d = pobjViewpointEN.citationId; // 引用Id
    this.appraiseCount_d = pobjViewpointEN.appraiseCount; // 评论数
    this.okCount_d = pobjViewpointEN.okCount; // 点赞统计
    this.score_d = pobjViewpointEN.score; // 评分
    this.stuScore_d = pobjViewpointEN.stuScore; // 学生平均分
    this.teaScore_d = pobjViewpointEN.teaScore; // 教师评分
    this.idCurrEduCls_d = pobjViewpointEN.idCurrEduCls; // 教学班流水号
    this.pdfContent_d = pobjViewpointEN.pdfContent; // Pdf内容
    this.pdfPageNum_d = pobjViewpointEN.pdfPageNum; // Pdf页码
    this.citationCount_d = pobjViewpointEN.citationCount; // 引用统计
    this.versionCount_d = pobjViewpointEN.versionCount; // 版本统计
    this.createDate_d = pobjViewpointEN.createDate; // 建立日期
    this.shareId_d = pobjViewpointEN.shareId; // 分享Id
    this.isRecommend_d = pobjViewpointEN.isRecommend; // 是否推荐
  }
  /**
   * 评论数 (Used In ShowDetailDataFromClass())
   **/
  public set appraiseCount_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblAppraiseCount_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelViewpoint(value: string) {
    Viewpoint_Detail.DetailObj.SetButtonText('btnCancelViewpoint', value);
  }
  /**
   * 引用统计 (Used In ShowDetailDataFromClass())
   **/
  public set citationCount_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblCitationCount_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 引用Id (Used In ShowDetailDataFromClass())
   **/
  public set citationId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblCitationId_d', value);
  }
  /**
   * 建立日期 (Used In ShowDetailDataFromClass())
   **/
  public set createDate_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblCreateDate_d', value);
  }
  /**
   * 教学班流水号 (Used In ShowDetailDataFromClass())
   **/
  public set idCurrEduCls_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblIdCurrEduCls_d', value);
  }
  /**
   * 是否推荐 (Used In ShowDetailDataFromClass())
   **/
  public set isRecommend_d(value: boolean) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblIsRecommend_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 是否提交 (Used In ShowDetailDataFromClass())
   **/
  public set isSubmit_d(value: boolean) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblIsSubmit_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 备注 (Used In ShowDetailDataFromClass())
   **/
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMemo_d', value);
  }
  /**
   * 点赞统计 (Used In ShowDetailDataFromClass())
   **/
  public set okCount_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblOkCount_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * Pdf内容 (Used In ShowDetailDataFromClass())
   **/
  public set pdfContent_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPdfContent_d', value);
  }
  /**
   * Pdf页码 (Used In ShowDetailDataFromClass())
   **/
  public set pdfPageNum_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblPdfPageNum_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 理由 (Used In ShowDetailDataFromClass())
   **/
  public set reason_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblReason_d', value);
  }
  /**
   * 评分 (Used In ShowDetailDataFromClass())
   **/
  public set score_d(value: number) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblScore_d', value !== null ? value.toString() : '');
  }
  /**
   * 分享Id (Used In ShowDetailDataFromClass())
   **/
  public set shareId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblShareId_d', value);
  }
  /**
   * 来源 (Used In ShowDetailDataFromClass())
   **/
  public set source_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblSource_d', value);
  }
  /**
   * 学生平均分 (Used In ShowDetailDataFromClass())
   **/
  public set stuScore_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblStuScore_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 教师评分 (Used In ShowDetailDataFromClass())
   **/
  public set teaScore_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblTeaScore_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 修改日期 (Used In ShowDetailDataFromClass())
   **/
  public set updDate_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblUpdDate_d', value);
  }
  /**
   * 用户类型Id (Used In ShowDetailDataFromClass())
   **/
  public set userTypeId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblUserTypeId_d', value);
  }
  /**
   * 版本统计 (Used In ShowDetailDataFromClass())
   **/
  public set versionCount_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblVersionCount_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 观点内容 (Used In ShowDetailDataFromClass())
   **/
  public set viewpointContent_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblViewpointContent_d', value);
  }
  /**
   * 观点Id (Used In ShowDetailDataFromClass())
   **/
  public set viewpointId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblViewpointId_d', value);
  }
  /**
   * 观点名称 (Used In ShowDetailDataFromClass())
   **/
  public set viewpointName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblViewpointName_d', value);
  }
  /**
   * 观点类型Id (Used In ShowDetailDataFromClass())
   **/
  public set viewpointTypeId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblViewpointTypeId_d', value);
  }
  /**
   * 观点提出人 (Used In ShowDetailDataFromClass())
   **/
  public set vPProposePeople_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblVPProposePeople_d', value);
  }
}
