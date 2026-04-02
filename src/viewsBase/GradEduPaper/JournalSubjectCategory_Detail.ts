/**
 * 类名:JournalSubjectCategory_Detail(界面:JournalSubjectCategoryCRUD)
 * 表名:JournalSubjectCategory(01120931)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:05:30
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { JournalSubjectCategory_GetObjByJournalSubjectCategoryIdAsync } from '@/ts/L3ForWApi/GradEduPaper/clsJournalSubjectCategoryWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsJournalSubjectCategoryEN } from '@/ts/L0Entity/GradEduPaper/clsJournalSubjectCategoryEN';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* JournalSubjectCategory_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class JournalSubjectCategory_Detail {
  public static DetailObj: any;
  public divDetail: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)

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
  public HideDialog_JournalSubjectCategory() {
    if (JournalSubjectCategory_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      JournalSubjectCategory_Detail.DetailObj.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_JournalSubjectCategory(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_JournalSubjectCategory.name;
    if (JournalSubjectCategory_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (JournalSubjectCategory_Detail.DetailObj == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await JournalSubjectCategory_Detail.DetailObj.showDialog();
    }
    this.divDetail = JournalSubjectCategory_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (JournalSubjectCategory_Detail.times4TestShowDialog < 2) {
        JournalSubjectCategory_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_JournalSubjectCategory(strOp);
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
      JournalSubjectCategory_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelJournalSubjectCategory = '关闭';
    }
    return true;
  }

  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (JournalSubjectCategory_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divDetail != null) return this.divDetail;
    } else {
      if (JournalSubjectCategory_Detail.DetailObj.dialogVisible == false) {
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
    this.divDetail = JournalSubjectCategory_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (JournalSubjectCategory_Detail.times4TestShowDialog < 2) {
        JournalSubjectCategory_Detail.times4TestShowDialog++;
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
      JournalSubjectCategory_Detail.times4TestShowDialog = 0;
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
    const bolIsSuccess = await this.ShowDialog_JournalSubjectCategory('Detail');
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
  public async DetailRecord(strJournalSubjectCategoryId: string): Promise<boolean> {
    const strThisFuncName = this.DetailRecord.name;
    this.btnCancelJournalSubjectCategory = '关闭';
    try {
      const objJournalSubjectCategoryEN =
        await JournalSubjectCategory_GetObjByJournalSubjectCategoryIdAsync(
          strJournalSubjectCategoryId,
        );
      if (objJournalSubjectCategoryEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      this.ShowDetailDataFromJournalSubjectCategoryClass(objJournalSubjectCategoryEN);
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
    const bolIsSuccess = await this.ShowDialog_JournalSubjectCategory('Detail');
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
  <param name = "pobjJournalSubjectCategoryEN">表实体类对象</param>
*/
  public ShowDetailDataFromJournalSubjectCategoryClass(
    pobjJournalSubjectCategoryEN: clsJournalSubjectCategoryEN,
  ) {
    this.journalSubjectCategoryName_d = pobjJournalSubjectCategoryEN.journalSubjectCategoryName; // 期刊学科门类名称
    this.memo_d = pobjJournalSubjectCategoryEN.memo; // 备注
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelJournalSubjectCategory(value: string) {
    JournalSubjectCategory_Detail.DetailObj.SetButtonText('btnCancelJournalSubjectCategory', value);
  }
  /**
   * 期刊学科门类名称 (Used In ShowDetailDataFromClass())
   **/
  public set journalSubjectCategoryName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblJournalSubjectCategoryName_d', value);
  }
  /**
   * 备注 (Used In ShowDetailDataFromClass())
   **/
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMemo_d', value);
  }
}
