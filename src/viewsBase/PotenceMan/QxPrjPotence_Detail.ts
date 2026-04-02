/**
 * 类名:QxPrjPotence_Detail(界面:QxPrjPotenceCRUD)
 * 表名:QxPrjPotence(00140005)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:17:31
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:权限管理(PotenceMan)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { QxPrjPotence_GetObjByPotenceIdAsync } from '@/ts/L3ForWApi/PotenceMan/clsQxPrjPotenceWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { QxPrjPotenceEx_FuncMapByFldName } from '@/ts/L3ForWApiExShare/PotenceMan/clsQxPrjPotenceExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxPrjPotenceEN } from '@/ts/L0Entity/PotenceMan/clsQxPrjPotenceEN';
import { clsQxPrjPotenceENEx } from '@/ts/L0Entity/PotenceMan/clsQxPrjPotenceENEx';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* QxPrjPotence_Detail 的摘要说明。其中Q代表查询,U代表修改
   (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
 */
export abstract class QxPrjPotence_Detail {
  public static DetailObj: any;
  public divDetail: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)

  public static QxPrjIdCache = ''; //2、界面主表的缓存分类字段变量1
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
  public HideDialog_QxPrjPotence() {
    if (QxPrjPotence_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      QxPrjPotence_Detail.DetailObj.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_QxPrjPotence(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_QxPrjPotence.name;
    if (QxPrjPotence_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (QxPrjPotence_Detail.DetailObj == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await QxPrjPotence_Detail.DetailObj.showDialog();
    }
    this.divDetail = QxPrjPotence_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (QxPrjPotence_Detail.times4TestShowDialog < 2) {
        QxPrjPotence_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_QxPrjPotence(strOp);
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
      QxPrjPotence_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelQxPrjPotence = '关闭';
    }
    return true;
  }

  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (QxPrjPotence_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divDetail != null) return this.divDetail;
    } else {
      if (QxPrjPotence_Detail.DetailObj.dialogVisible == false) {
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
    this.divDetail = QxPrjPotence_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (QxPrjPotence_Detail.times4TestShowDialog < 2) {
        QxPrjPotence_Detail.times4TestShowDialog++;
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
      QxPrjPotence_Detail.times4TestShowDialog = 0;
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
    const bolIsSuccess = await this.ShowDialog_QxPrjPotence('Detail');
    if (bolIsSuccess == false) return;
    try {
      if (strKeyId == '') {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      this.DetailRecord4Func(strKeyId);
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
  public async DetailRecord4Func(strPotenceId: string) {
    const strThisFuncName = this.DetailRecord4Func.name;
    this.btnCancelQxPrjPotence = '关闭';
    try {
      const objQxPrjPotenceEN = await QxPrjPotence_GetObjByPotenceIdAsync(strPotenceId);
      const objQxPrjPotenceENEx = new clsQxPrjPotenceENEx();
      ObjectAssign(objQxPrjPotenceENEx, objQxPrjPotenceEN);
      await QxPrjPotenceEx_FuncMapByFldName(
        clsQxPrjPotenceENEx.con_FuncModuleName,
        objQxPrjPotenceENEx,
      );
      await QxPrjPotenceEx_FuncMapByFldName(
        clsQxPrjPotenceENEx.con_PotenceTypeName,
        objQxPrjPotenceENEx,
      );
      await QxPrjPotenceEx_FuncMapByFldName(
        clsQxPrjPotenceENEx.con_DateTimeSim,
        objQxPrjPotenceENEx,
      );
      await QxPrjPotenceEx_FuncMapByFldName(clsQxPrjPotenceENEx.con_MenuName, objQxPrjPotenceENEx);
      this.ShowDetailDataFromQxPrjPotenceClass4Func(objQxPrjPotenceENEx);
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
  public async btnDetailRecord_Click(strKeyId: string) {
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_QxPrjPotence('Detail');
    if (bolIsSuccess == false) return;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    // 为编辑区绑定下拉框
    //const conBindDdl = await this.BindDdl4DetailRegion();
    this.bolIsLoadDetailRegion = true; //
    this.DetailRecord4Func(strKeyId);
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objQxPrjPotenceENS">源对象</param>
  /// <returns>目标对象=>clsQxPrjPotenceEN:objQxPrjPotenceENT</returns>
  public CopyToEx(objQxPrjPotenceENS: clsQxPrjPotenceEN): clsQxPrjPotenceENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objQxPrjPotenceENT = new clsQxPrjPotenceENEx();
    try {
      ObjectAssign(objQxPrjPotenceENT, objQxPrjPotenceENS);
      return objQxPrjPotenceENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objQxPrjPotenceENT;
    }
  }

  /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
   (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
   <param name = "pobjQxPrjPotenceEN">表实体类对象</param>
 */
  public ShowDetailDataFromQxPrjPotenceClass4Func(pobjQxPrjPotenceENEx: clsQxPrjPotenceENEx) {
    this.potenceName_d = pobjQxPrjPotenceENEx.potenceName; // 权限名称
    this.qxPrjId_d = pobjQxPrjPotenceENEx.qxPrjId; // 项目Id
    this.funcModuleId_d = pobjQxPrjPotenceENEx.funcModuleId; // 模块Id
    this.potenceTypeId_d = pobjQxPrjPotenceENEx.potenceTypeId; // 权限类型Id
    this.menuId_d = pobjQxPrjPotenceENEx.menuId; // 菜单Id
    this.menuId4Win_d = pobjQxPrjPotenceENEx.menuId4Win; // 菜单Id4Win
    this.memo_d = pobjQxPrjPotenceENEx.memo; // 备注
    this.funcModuleName_d = pobjQxPrjPotenceENEx.funcModuleName; // 模块名
    this.potenceTypeName_d = pobjQxPrjPotenceENEx.potenceTypeName; // 权限类型名
    this.dateTimeSim_d = pobjQxPrjPotenceENEx.dateTimeSim; // 简化日期时间
    this.menuName_d = pobjQxPrjPotenceENEx.menuName; // 菜单名
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelQxPrjPotence(value: string) {
    QxPrjPotence_Detail.DetailObj.SetButtonText('btnCancelQxPrjPotence', value);
  }
  /**
   * 修改日期 (Used In ShowDetailDataFromClass4Func())
   **/
  public set dateTimeSim_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblDateTimeSim_d', value);
  }
  /**
   * 模块Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set funcModuleId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblFuncModuleId_d', value);
  }
  /**
   * 模块Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set funcModuleName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblFuncModuleName_d', value);
  }
  /**
   * 备注 (Used In ShowDetailDataFromClass4Func())
   **/
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMemo_d', value);
  }
  /**
   * 菜单Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set menuId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMenuId_d', value);
  }
  /**
   * 菜单Id4Win (Used In ShowDetailDataFromClass4Func())
   **/
  public set menuId4Win_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMenuId4Win_d', value);
  }
  /**
   * 菜单Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set menuName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMenuName_d', value);
  }
  /**
   * 权限名称 (Used In ShowDetailDataFromClass4Func())
   **/
  public set potenceName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPotenceName_d', value);
  }
  /**
   * 权限类型Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set potenceTypeId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPotenceTypeId_d', value);
  }
  /**
   * 权限类型Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set potenceTypeName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPotenceTypeName_d', value);
  }
  /**
   * 项目Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set qxPrjId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblQxPrjId_d', value);
  }
}
