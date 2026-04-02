/**
 * 类名:CacheUseState_Detail(界面:CacheUseStateCRUD)
 * 表名:CacheUseState(00050566)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:19:52
 * 生成者:
 工程名称:AGC(0005)
 CM工程:AgcSpa前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:系统设置(SystemSet)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { CacheUseState_GetObjBymIdAsync } from '@/ts/L3ForWApi/SystemSet/clsCacheUseStateWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { CacheUseStateEx_FuncMapByFldName } from '@/ts/L3ForWApiExShare/SystemSet/clsCacheUseStateExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsCacheUseStateEN } from '@/ts/L0Entity/SystemSet/clsCacheUseStateEN';
import { clsCacheUseStateENEx } from '@/ts/L0Entity/SystemSet/clsCacheUseStateENEx';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* CacheUseState_Detail 的摘要说明。其中Q代表查询,U代表修改
   (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
 */
export abstract class CacheUseState_Detail {
  public static DetailObj: any;
  public divDetail: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)

  public static UserIdCache = ''; //2、界面主表的缓存分类字段变量1
  public static UserIdStatic = ''; //5、处理添加、修改记录时PutData所用的界面静态变量, 用于在界面编辑函数中信息交互
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
  public HideDialog_CacheUseState() {
    if (CacheUseState_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      CacheUseState_Detail.DetailObj.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_CacheUseState(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_CacheUseState.name;
    if (CacheUseState_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (CacheUseState_Detail.DetailObj == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await CacheUseState_Detail.DetailObj.showDialog();
    }
    this.divDetail = CacheUseState_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (CacheUseState_Detail.times4TestShowDialog < 2) {
        CacheUseState_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_CacheUseState(strOp);
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
      CacheUseState_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelCacheUseState = '关闭';
    }
    return true;
  }

  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (CacheUseState_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divDetail != null) return this.divDetail;
    } else {
      if (CacheUseState_Detail.DetailObj.dialogVisible == false) {
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
    this.divDetail = CacheUseState_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (CacheUseState_Detail.times4TestShowDialog < 2) {
        CacheUseState_Detail.times4TestShowDialog++;
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
      CacheUseState_Detail.times4TestShowDialog = 0;
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
    const bolIsSuccess = await this.ShowDialog_CacheUseState('Detail');
    if (bolIsSuccess == false) return;
    try {
      if (strKeyId == '') {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      const lngKeyId = Number(strKeyId);
      this.DetailRecord4Func(lngKeyId);
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
  public async DetailRecord4Func(lngmId: number) {
    const strThisFuncName = this.DetailRecord4Func.name;
    this.btnCancelCacheUseState = '关闭';
    try {
      const objCacheUseStateEN = await CacheUseState_GetObjBymIdAsync(lngmId);
      const objCacheUseStateENEx = new clsCacheUseStateENEx();
      ObjectAssign(objCacheUseStateENEx, objCacheUseStateEN);
      await CacheUseStateEx_FuncMapByFldName(
        clsCacheUseStateENEx.con_CacheModeName,
        objCacheUseStateENEx,
      );
      this.ShowDetailDataFromCacheUseStateClass4Func(objCacheUseStateENEx);
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
    const bolIsSuccess = await this.ShowDialog_CacheUseState('Detail');
    if (bolIsSuccess == false) return;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    // 为编辑区绑定下拉框
    //const conBindDdl = await this.BindDdl4DetailRegion();
    this.bolIsLoadDetailRegion = true; //
    const lngKeyId = Number(strKeyId);
    this.DetailRecord4Func(lngKeyId);
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objCacheUseStateENS">源对象</param>
  /// <returns>目标对象=>clsCacheUseStateEN:objCacheUseStateENT</returns>
  public CopyToEx(objCacheUseStateENS: clsCacheUseStateEN): clsCacheUseStateENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objCacheUseStateENT = new clsCacheUseStateENEx();
    try {
      ObjectAssign(objCacheUseStateENT, objCacheUseStateENS);
      return objCacheUseStateENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objCacheUseStateENT;
    }
  }

  /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
   (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
   <param name = "pobjCacheUseStateEN">表实体类对象</param>
 */
  public ShowDetailDataFromCacheUseStateClass4Func(pobjCacheUseStateENEx: clsCacheUseStateENEx) {
    this.userId_d = pobjCacheUseStateENEx.userId; // 用户Id
    this.cacheKey_d = pobjCacheUseStateENEx.cacheKey; // 缓存关键字
    this.cacheSize_d = pobjCacheUseStateENEx.cacheSize; // 缓存大小
    this.memo_d = pobjCacheUseStateENEx.memo; // 说明
    this.cacheModeId_d = pobjCacheUseStateENEx.cacheModeId; // 缓存方式
    this.cacheModeId_d = pobjCacheUseStateENEx.cacheModeId; // 缓存方式英文名
    this.cacheModeName_d = pobjCacheUseStateENEx.cacheModeName; // 缓存方式名
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelCacheUseState(value: string) {
    CacheUseState_Detail.DetailObj.SetButtonText('btnCancelCacheUseState', value);
  }
  /**
   * 缓存关键字 (Used In ShowDetailDataFromClass4Func())
   **/
  public set cacheKey_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblCacheKey_d', value);
  }
  /**
   * 缓存方式Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set cacheModeId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblCacheModeId_d', value);
  }
  /**
   * 缓存方式Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set cacheModeName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblCacheModeName_d', value);
  }
  /**
   * 缓存大小 (Used In ShowDetailDataFromClass4Func())
   **/
  public set cacheSize_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblCacheSize_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 说明 (Used In ShowDetailDataFromClass4Func())
   **/
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMemo_d', value);
  }
  /**
   * 用户Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set userId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblUserId_d', value);
  }
}
