//import * as QQ from "q";
import { CacheUseStateCRUD } from '@/viewsBase/SystemSet/CacheUseStateCRUD';
import { CacheUseState_EditEx } from '@/viewsShare/SystemSet/CacheUseState_EditEx';
import { GetFirstCheckedKeyIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import { IShowList } from '@/ts/PubFun/IShowList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import {
  CacheUseStateEx_ClearLocalStorage,
  CacheUseStateEx_ClearSessionStorage,
  CacheUseStateEx_GetCacheUseState,
  CacheUseStateEx_Subtotals,
} from '@/ts/L3ForWApiExShare/SystemSet/clsCacheUseStateExWApi';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { userStore } from '@/store/modulesShare/user';
/** CacheUseStateCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class CacheUseStateCRUDEx extends CacheUseStateCRUD implements IShowList {
  //public static mstrListDiv=  "divDataLst";
  //public static mstrSortvCacheUseStateBy=  "mId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  /*
   按钮单击,用于调用Js函数中btn_Click
  (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
  */
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    const objPage: CacheUseStateCRUDEx = new CacheUseStateCRUDEx(divLayout);
    const objPageEdit: CacheUseState_EditEx = new CacheUseState_EditEx(
      'CacheUseState_EditEx',
      objPage,
    );
    let strMsg = '';

    switch (strCommandName) {
      case 'GetCacheUseState': //查询记录
        objPage.GetCacheUseState();
        break;

      case 'ClearLocalStorage': //查询记录
        objPage.ClearLocalStorage();
        break;
      case 'ClearSessionStorage': //查询记录
        objPage.ClearSessionStorage();
        break;

      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'CreateWithMaxId': //添加记录使用最大关键字
        //objPageEdit.btnAddNewRecordWithMaxId_Click();
        break;
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit.btnAddNewRecord_Click();
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
        if (IsNullOrEmpty(strKeyId) == true) {
          strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit.btnUpdateRecord_Click(strKeyId);

        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        //objPage.btnCopyRecord_Click();
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        objPage.btnDelRecord_Click();
        break;
      case 'DelRecordBySign': //按标志删除记录
      case 'DeleteBySign': //按标志删除记录
        //objPage.btnDelRecordBySign_Click();
        break;
      case 'UnDelRecordBySign': //按标志恢复删除记录
      case 'UnDeleteBySign': //按标志恢复删除记录
        //objPage.btnUnDelRecordBySign_Click();
        break;
      case 'GoTop': //置顶记录
        //objPage.btnGoTop_Click();
        break;
      case 'GoBottum': //移底记录
        //objPage.btnGoBottum_Click();
        break;
      case 'UpMove': //上移记录
        //objPage.btnUpMove_Click();
        break;
      case 'DownMove': //下移记录
        //objPage.btnDownMove_Click();
        break;
      case 'ReOrder': //重序记录
        //objPage.btnReOrder_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'CacheUseStateCRUDEx.btn_Click');
        alert(strMsg);
        break;
      case 'ExportExcel': //导出Excel
        alert('导出Excel功能还没有开通！');
        break;
    }
  }

  /**
   * 函数功能:初始设置，用来初始化一些变量值
   **/
  public async InitVarSet(): Promise<void> {
    console.log('InitVarSet in TeacherInfoCRUDEx');
  }
  /**
   * 函数功能:初始化界面控件值，放在绑定下拉框之后
   **/
  public async InitCtlVar(): Promise<void> {
    console.log('InitCtlVar in TeacherInfoCRUDEx');
  }
  BindGv(strType: string, strPara: string) {
    console.log(strType, strPara);
    alert('该类没有绑定该函数：[this.BindGv_vCacheUseState]！');
    //this.BindGv_vCacheUseState();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log(strType, strPara);

    switch (strType) {
      case 'vCacheUseState':
        this.BindGv_CacheUseState4Func(this.thisDivList);
        break;
      default:
        AccessBindGvDefault(strType);

        break;
    }
  }

  /** 函数功能:页面导入,当页面开始运行时所发生的事件
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_Page_LoadCache)
*/
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      CacheUseStateCRUD.UserIdStatic = userStore.getUserId;
      CacheUseStateCRUD.UserIdCache = userStore.getUserId;

      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      if (this.bolIsInitShow == false) {
        //
        this.objPager.InitShow(this.divList, this.divName4Pager);
        this.bolIsInitShow = true; //
      }
      CacheUseStateCRUD.sortCacheUseStateBy = 'mId Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_CacheUseState4Func(this.thisDivList);
      await CacheUseStateEx_Subtotals(userStore.getUserId);
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.(in ${this.constructor.name}.${strThisFuncName})`;
      console.error(strMsg);
      alert(strMsg);
    }
  }
  public async BindDdl4QueryRegion() {
    const BoolTrue = true; //在switch中未找到相关类型: tsDefaultValue(in AGC.PureClassEx.FuncParaType:GetTsTypeStr)

    await this.SetDdl_CacheModeIdInDiv(BoolTrue); //查询区域
  }
  public async GetCacheUseState() {
    await CacheUseStateEx_GetCacheUseState(CacheUseStateCRUD.UserIdStatic);
    await this.BindGv_CacheUseState4Func(this.thisDivList);
    await CacheUseStateEx_Subtotals(CacheUseStateCRUD.UserIdStatic);
  }
  public ClearLocalStorage() {
    CacheUseStateEx_ClearLocalStorage();
  }
  public ClearSessionStorage() {
    CacheUseStateEx_ClearSessionStorage();
  }
}
