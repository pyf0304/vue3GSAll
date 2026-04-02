// import { XzMajor_Edit } from '@/viewsBase/BaseInfo/XzMajor_Edit';
import $ from 'jquery';
import { clsXzMajorEN } from '@/ts/L0Entity/BaseInfo/clsXzMajorEN';
import { XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache } from '@/ts/L3ForWApi/UserManage/clsXzClgWApi';
import { XzMajor_GetObjByIdXzMajorAsync } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { XzMajor_Edit } from '@/viewsBase/BaseInfo/XzMajor_Edit';
import { userStore } from '@/store/modulesShare/user';
import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';

/* XzMajor_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class XzMajor_EditEx extends XzMajor_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;

    const objPage: XzMajor_EditEx = <XzMajor_EditEx>XzMajor_Edit.GetPageEditObj('XzMajor_EditEx');
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'XzMajor_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'XzMajor_EditEx.btn_Click');

        break;
    }
  }

  public async btnAddNewRecord_Click() {
    this.opType = 'Add';
    try {
      const bolIsSuccess = await this.ShowDialog_XzMajor(this.opType);
      if (bolIsSuccess == false) return;
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegionInDiv();
      this.ShowDialog_XzMajor('Add');
      this.bolIsLoadEditRegion = true; //
      this.AddNewRecord();

      //读取session角色 来判断绑定不同数据列表
      //获取用户角色来判断显示不同的列表数据；
      const strUserId = userStore.getUserId;
      const strRoleId = userStore.getRoleId;
      $('#hidUserId').val(strUserId);

      //判断角色
      //管理员
      if (
        strRoleId == enumQxRoles.System_Admin_00620001 ||
        strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
      ) {
        $('#trvisible').show();
      } else if (strRoleId == '00620002') {
        //教师
        $('#trvisible').hide();
        //根据登录人的Id查询教学班关系表得到教学班id 通过id得到学生数据；然后反向查询得到学生数据；
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 函数功能:把界面上的属性数据传到类对象中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
<param name = "pobjXzMajorEN">数据传输的目的类对象</param>
*/
  public async PutDataToXzMajorClass(pobjXzMajorEN: clsXzMajorEN) {
    //通过角色判断，教师和管理员的区别；
    //读取session角色 来判断绑定不同数据列表
    //获取用户角色来判断显示不同的列表数据；
    const strUserId = userStore.getUserId;
    const strRoleId = userStore.getRoleId;
    $('#hidUserId').val(strUserId);

    //判断角色
    //管理员
    if (
      strRoleId == enumQxRoles.System_Admin_00620001 ||
      strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
    ) {
      pobjXzMajorEN.SetIdXzMajorShoolType(this.idXzMajorShoolType); // 专业类型
      pobjXzMajorEN.SetIdXzCollege(this.idXzCollege); // 学院
    } else if (strRoleId == '00620002') {
      //教师
      pobjXzMajorEN.SetIdXzMajorShoolType('0001'); // 专业类型 0001代表非学院专业
      pobjXzMajorEN.SetIdXzCollege('0000'); // 学院 0000代表未知
    }
    pobjXzMajorEN.SetMajorID(this.majorID); // 专业ID
    pobjXzMajorEN.SetMajorName(this.majorName); // 专业名称
    pobjXzMajorEN.SetIsVisible(this.isVisible); // 是否显示
    pobjXzMajorEN.SetMajorEnglishName(this.majorEnglishName); // 英文名
    pobjXzMajorEN.SetMajorExplain(this.majorExplain); // 专业说明

    pobjXzMajorEN.SetMajorDirection(this.majorDirection); // 专业方向
    pobjXzMajorEN.SetMemo(this.memo); // 备注
    pobjXzMajorEN.SetModifyUserId(userStore.getUserId.toString()); // userId;// 修改人
  }

  //只有选择了专业类型，才能选择学院；
  public async ddlIdXzMajorShoolTypeClick() {
    try {
      const divName = this.getDivName();
      if (divName == null) return;
      //只有选择了专业类型，才能选择学院；
      if (this.idXzMajorShoolType == '0002') {
        //学院专业

        await XzClg_BindDdl_IdXzCollegeByIdSchoolInDivCache(
          divName,
          'ddlIdXzCollege',
          clsSysPara4WebApi.spIdSchool,
        ); //编辑区域

        //去掉提交按钮不可用状态
        $('#ddlIdXzCollege').attr('disabled', 'false');
      } else {
        //非学院专业；
        $('#ddlIdXzCollege').attr('disabled', 'true');
      }
    } catch (e: any) {
      const strMsg = `获取数据有问题,${e}.`;
      alert(strMsg);
    }
  }

  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateRecord_Click(strKeyId: string) {
    this.opType = 'Update';

    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }

    //读取session角色 来判断绑定不同数据列表
    //获取用户角色来判断显示不同的列表数据；
    const strUserId = userStore.getUserId;
    const strRoleId = userStore.getRoleId;

    //判断角色
    //管理员
    if (
      strRoleId == enumQxRoles.System_Admin_00620001 ||
      strRoleId == enumQxRoles.Secondary_School_System_Admin_00620018
    ) {
      const bolIsSuccess = await this.ShowDialog_XzMajor(this.opType);
      if (bolIsSuccess == false) return;
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegionInDiv();
      this.ShowDialog_XzMajor('Update');
      this.bolIsLoadEditRegion = true; //
      this.UpdateRecord(strKeyId);
    } else if (strRoleId == '00620002') {
      //教师
      //修改前需要判断 数据是否是当前用户添加 是则可以修改，否则不可修改；
      const responseText = await XzMajor_GetObjByIdXzMajorAsync(strKeyId);
      const objXzMajorEN: clsXzMajorEN = <clsXzMajorEN>responseText;
      if (objXzMajorEN.modifyUserId == strUserId) {
        const bolIsSuccess = await this.ShowDialog_XzMajor(this.opType);
        if (bolIsSuccess == false) return;
        // 为编辑区绑定下拉框
        await this.BindDdl4EditRegionInDiv();
        this.ShowDialog_XzMajor('Update');
        this.bolIsLoadEditRegion = true; //
        this.UpdateRecord(strKeyId);
      } else {
        const strInfo = `当前数据不是您添加，不可修改`;
        //显示信息框
        alert(strInfo);
        return;
      }
    }
  }
}
