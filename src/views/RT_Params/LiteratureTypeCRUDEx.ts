import $ from 'jquery';
import { LiteratureTypeCRUD } from '@/viewsBase/RT_Params/LiteratureTypeCRUD';
import { LiteratureType_EditEx } from '@/views/RT_Params/LiteratureType_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetDivObjInDivObj,
  GetFirstCheckedKeyIdInDivObj,
  HideDivInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { AccessBindGvDefault, AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
import {
  LiteratureType_GetObjLstByPagerAsync,
  LiteratureType_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
/** LiteratureTypeCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class LiteratureTypeCRUDEx extends LiteratureTypeCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortLiteratureTypeBy = "LiteratureTypeId";
  /**
   * 每页记录数,在扩展类可以修改
   **/
  public get pageSize(): number {
    return 10;
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
    this.BindGv_LiteratureType(this.thisDivList);
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'LiteratureType':
        this.BindGv_LiteratureTypeCache(this.thisDivList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btn_Click
   * (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:Gen_WApi_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: LiteratureTypeCRUDEx;
    let objPageEdit;
    if (LiteratureTypeCRUD.objPageCRUD == null) {
      LiteratureTypeCRUD.objPageCRUD = new LiteratureTypeCRUDEx(divLayout);
      objPage = <LiteratureTypeCRUDEx>LiteratureTypeCRUD.objPageCRUD;
    } else {
      objPage = <LiteratureTypeCRUDEx>LiteratureTypeCRUD.objPageCRUD;
    }

    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new LiteratureType_EditEx('LiteratureType_EditEx', objPage);

        LiteratureTypeCRUD.EditObj.btnLiteratureType_Edit_Click(strCommandName, strKeyId);
        break;

      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;

      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
      case 'UpdateRecordInTab': //修改记录InTab
        if (IsNullOrEmpty(strKeyId) == true) {
          const strMsg = '请选择需要修改的记录！';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        objPageEdit = new LiteratureType_EditEx('LiteratureType_EditEx', objPage);

        if (strCommandName == 'UpdateRecordInTab') {
          objPageEdit.btnUpdateRecordInTab_Click(strKeyId);
        } else {
          objPageEdit.btnUpdateRecord_Click(strKeyId);
        }
        break;
      case 'CopyRecord': //复制记录
      case 'Clone': //复制记录
        if (arrKeyIds.length == 0) {
          alert('请选择需要复制的记录！');
          return;
        }
        //objPage.btnCopyRecord_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'LiteratureTypeCRUDExEx.btn_Click');

        break;
    }
  }

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
        (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
      */
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;

      if (strUserId != '') {
        //1、为下拉框设置数据源,绑定列表数据
        LiteratureTypeCRUD.sortLiteratureTypeBy = 'literatureTypeId Asc';
        const strWhereCond = await this.CombineLiteratureTypeCondition();
        await LiteratureType_GetRecCountByCondAsync(strWhereCond).then((jsonData) => {
          this.recCount = jsonData;
        });
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_LiteratureType(this.thisDivList);

        $('#hidUserId').val(strUserId);
        //管理员 判断角色
        if ( strRoleId == enumQxRoles.System_Admin_00620001 ||
          strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018) {
          $('#btnDelRecord').show();
          $('#tab4Bind tr').find('td:eq(6)').show();
        } else {
          //学生00620003 教师
          $('#btnDelRecord').hide();
          $('#tab4Bind tr').find('td:eq(6)').hide();
        }

        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        //    reLogin();
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 根据条件获取相应的记录对象的列表
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
  */
  public async BindGv_LiteratureType(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombineLiteratureTypeCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrLiteratureTypeObjLst: Array<clsLiteratureTypeEN> = [];
    try {
      this.recCount = await LiteratureType_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: LiteratureTypeCRUD.sortLiteratureTypeBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      await LiteratureType_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
        arrLiteratureTypeObjLst = <Array<clsLiteratureTypeEN>>jsonData;
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    //if (arrLiteratureTypeObjLst.length == 0) {
    //    strIdCurrEduclsstrMsg: string = `根据条件获取的对象列表数为空！`;
    //    alert(strMsg);
    //    return;
    //}
    try {
      this.BindTab_LiteratureType(divList, arrLiteratureTypeObjLst);
      console.log('完成BindGv_LiteratureType!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }
}
