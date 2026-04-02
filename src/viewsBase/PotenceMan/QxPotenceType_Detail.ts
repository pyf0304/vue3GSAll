/**
 * 类名:QxPotenceType_Detail(界面:QxPotenceTypeCRUD)
 * 表名:QxPotenceType(00140003)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:14:18
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:权限管理(PotenceMan)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { QxPotenceType_GetObjByPotenceTypeIdAsync } from '@/ts/L3ForWApi/PotenceMan/clsQxPotenceTypeWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxPotenceTypeEN } from '@/ts/L0Entity/PotenceMan/clsQxPotenceTypeEN';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* QxPotenceType_Detail 的摘要说明。其中Q代表查询,U代表修改
   (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
 */
export abstract class QxPotenceType_Detail {
  public static DetailObj: any;
  public divDetail: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)

  public QxPrjId = ''; //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
  public static QxPrjId4PrefixStatic = ''; //3、前缀变量
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
  public HideDialog_QxPotenceType() {
    if (QxPotenceType_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      QxPotenceType_Detail.DetailObj.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_QxPotenceType(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_QxPotenceType.name;
    if (QxPotenceType_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (QxPotenceType_Detail.DetailObj == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await QxPotenceType_Detail.DetailObj.showDialog();
    }
    this.divDetail = QxPotenceType_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (QxPotenceType_Detail.times4TestShowDialog < 2) {
        QxPotenceType_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_QxPotenceType(strOp);
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
      QxPotenceType_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelQxPotenceType = '关闭';
    }
    return true;
  }

  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (QxPotenceType_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divDetail != null) return this.divDetail;
    } else {
      if (QxPotenceType_Detail.DetailObj.dialogVisible == false) {
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
    this.divDetail = QxPotenceType_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (QxPotenceType_Detail.times4TestShowDialog < 2) {
        QxPotenceType_Detail.times4TestShowDialog++;
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
      QxPotenceType_Detail.times4TestShowDialog = 0;
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
    const bolIsSuccess = await this.ShowDialog_QxPotenceType('Detail');
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
  public async DetailRecord(strPotenceTypeId: string): Promise<boolean> {
    const strThisFuncName = this.DetailRecord.name;
    this.btnCancelQxPotenceType = '关闭';
    try {
      const objQxPotenceTypeEN = await QxPotenceType_GetObjByPotenceTypeIdAsync(strPotenceTypeId);
      if (objQxPotenceTypeEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      this.ShowDetailDataFromQxPotenceTypeClass(objQxPotenceTypeEN);
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
    const bolIsSuccess = await this.ShowDialog_QxPotenceType('Detail');
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
   <param name = "pobjQxPotenceTypeEN">表实体类对象</param>
 */
  public ShowDetailDataFromQxPotenceTypeClass(pobjQxPotenceTypeEN: clsQxPotenceTypeEN) {
    this.potenceTypeName_d = pobjQxPotenceTypeEN.potenceTypeName; // 权限类型名
    this.qxPrjId_d = pobjQxPotenceTypeEN.qxPrjId; // 项目Id
    this.funcModuleId_d = pobjQxPotenceTypeEN.funcModuleId; // 模块Id
    this.menuId_d = pobjQxPotenceTypeEN.menuId; // 菜单Id
    this.viewId_d = pobjQxPotenceTypeEN.viewId; // 界面编号
    this.isVisible_d = pobjQxPotenceTypeEN.isVisible; // 是否显示
    this.memo_d = pobjQxPotenceTypeEN.memo; // 备注
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelQxPotenceType(value: string) {
    QxPotenceType_Detail.DetailObj.SetButtonText('btnCancelQxPotenceType', value);
  }
  /**
   * 模块Id (Used In ShowDetailDataFromClass())
   **/
  public set funcModuleId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblFuncModuleId_d', value);
  }
  /**
   * 是否显示 (Used In ShowDetailDataFromClass())
   **/
  public set isVisible_d(value: boolean) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblIsVisible_d',
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
   * 菜单Id (Used In ShowDetailDataFromClass())
   **/
  public set menuId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMenuId_d', value);
  }
  /**
   * 权限类型名 (Used In ShowDetailDataFromClass())
   **/
  public set potenceTypeName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPotenceTypeName_d', value);
  }
  /**
   * 项目Id (Used In ShowDetailDataFromClass())
   **/
  public set qxPrjId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblQxPrjId_d', value);
  }
  /**
   * 界面编号 (Used In ShowDetailDataFromClass())
   **/
  public set viewId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblViewId_d', value);
  }
}
