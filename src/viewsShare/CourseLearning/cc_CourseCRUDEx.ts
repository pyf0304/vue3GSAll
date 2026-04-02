/**
 * 类名:cc_CourseCRUDEx(界面:cc_CourseCRUD)
 * 表名:cc_Course(01120056)
 * 版本:2023.08.27.1(服务器:WIN-SRV103-116)
 * 日期:2023/08/28 10:08:16
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:课程学习(CourseLearning)
 * 框架-层名:Vue_界面后台Ex_TS(TS)(Vue_ViewScriptCSEx_TS)
 * 编程语言:TypeScript
 **/
//import * as QQ from "q";
import { cc_CourseCRUD } from '@/viewsBase/CourseLearning/cc_CourseCRUD';
import { cc_Course_EditEx } from '@/viewsShare/CourseLearning/cc_Course_EditEx';
import {
  GetCheckedKeyIdsInDivObj,
  GetFirstCheckedKeyIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl.js';
import { AccessBindGvDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { IShowList } from '@/ts/PubFun/IShowList';
import { Format } from '@/ts/PubFun/clsString';
import { clscc_CourseEN } from '@/ts/L0Entity/CourseLearning/clscc_CourseEN';
import { clscc_CourseENEx } from '@/ts/L0Entity/CourseLearning/clscc_CourseENEx';
/** cc_CourseCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:GeneCode)
 **/
export class cc_CourseCRUDEx extends cc_CourseCRUD implements IShowList {
  //public static mstrListDiv = "divDataLst";
  //public static mstrSortvcc_CourseBy = "CourseId";
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
    alert(`该类没有绑定该函数：[this.BindGv_vcc_Course]!${strType}${strPara}`);
    //this.BindGv_cc_Course4Func();
  }
  BindGvCache(strType: string, strPara: string) {
    console.log('strPara', strPara);
    switch (strType) {
      case 'vcc_Course':
        this.BindGv_cc_Course4Func(this.thisDivList);
        break;
      default:
        AccessBindGvDefault(strType);
        break;
    }
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * (AutoGCLib.Vue_ViewScriptCSEx_TS4TypeScript:Gen_Vue_TS_btn_Click)
   **/
  public static btn_Click(strCommandName: string, strKeyId: string, divLayout: HTMLDivElement) {
    let objPage: cc_CourseCRUDEx;
    let objPageEdit;
    if (cc_CourseCRUD.objPageCRUD == null) {
      cc_CourseCRUD.objPageCRUD = new cc_CourseCRUDEx(divLayout);
      objPage = <cc_CourseCRUDEx>cc_CourseCRUD.objPageCRUD;
    } else {
      objPage = <cc_CourseCRUDEx>cc_CourseCRUD.objPageCRUD;
    }

    let strMsg = '';
    const arrKeyIds = GetCheckedKeyIdsInDivObj(objPage.divList);
    strKeyId = GetFirstCheckedKeyIdInDivObj(objPage.divList);
    switch (strCommandName) {
      case 'Query': //查询记录
        objPage.btnQuery_Click();
        break;
      case 'AddNewRecordWithMaxId': //添加记录使用最大关键字
      case 'CreateWithMaxId': //添加记录使用最大关键字
      case 'AddNewRecord': //添加记录
      case 'Create': //添加记录
        objPageEdit = new cc_Course_EditEx('cc_Course_EditEx', objPage);
        cc_CourseCRUD.EditObj.btncc_Course_Edit_Click(strCommandName, strKeyId);
        break;
      case 'UpdateRecord': //修改记录
      case 'Update': //修改记录
        objPageEdit = new cc_Course_EditEx('cc_Course_EditEx', objPage);
        cc_CourseCRUD.EditObj.btncc_Course_Edit_Click(strCommandName, strKeyId);
        break;
      case 'DelRecord': //删除记录
      case 'Delete': //删除记录
        if (arrKeyIds.length == 0) {
          alert(`请选择需要删除的${objPage.thisTabName}记录!`);
          return;
        }
        objPage.btnDelRecord_Click();
        break;
      default:
        strMsg = `命令:strCommandName在函数(cc_CourseCRUDEx.btnClick)中没有被处理!`;
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }
  public async PageLoadCache() {
    const strThisFuncName = this.PageLoadCache.name;
    // 在此处放置用户代码以初始化页面
    try {
      // 为查询区绑定下拉框
      await this.BindDdl4QueryRegion();
      // 为功能区绑定下拉框
      await this.BindDdl4FeatureRegion();
      this.SetEventFunc();
      cc_CourseCRUD.sortcc_CourseBy = 'courseCode Asc';
      //2、显示无条件的表内容在GridView中
      await this.BindGv_cc_Course4Func(this.thisDivList);
    } catch (e: any) {
      const strMsg = Format(
        '页面启动不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error('Error: ', strMsg);
      //console.trace();
      alert(strMsg);
    }
  }
  /** 把所有的查询控件内容组合成一个条件串
   * (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineConditionObj)
   * @returns 条件串(strWhereCond)
   **/
  public async Combinecc_CourseConditionObj(): Promise<clscc_CourseEN> {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && UserName = '张三'
    let strWhereCond = ' 1 = 1 ';
    const objcc_CourseCond = new clscc_CourseEN();
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.courseCode_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clscc_CourseEN.con_CourseCode,
          this.courseCode_q,
        );
        objcc_CourseCond.SetCondFldValue(clscc_CourseEN.con_CourseCode, this.courseCode_q, 'like');
      }
      if (this.courseName_q != '') {
        strWhereCond += Format(
          " And {0} like '%{1}%'",
          clscc_CourseEN.con_CourseName,
          this.courseName_q,
        );
        objcc_CourseCond.SetCondFldValue(clscc_CourseEN.con_CourseName, this.courseName_q, 'like');
      }
      // if (this.majorName_q != '') {
      //   strWhereCond += Format(
      //     " And {0} like '%{1}%'",
      //     clscc_CourseENEx.con_MajorName,
      //     this.majorName_q,
      //   );
      //   objcc_CourseCond.SetCondFldValue(clscc_CourseENEx.con_MajorName, this.majorName_q, 'like');
      // }
    } catch (objException) {
      const strMsg: string = Format(
        '(errid:WiTsCs0018)在组合查询条件对象(Combinecc_CourseConditionObj)时出错!请联系管理员!{0}',
        objException,
      );
      throw strMsg;
    }
    objcc_CourseCond.whereCond = strWhereCond;
    return objcc_CourseCond;
  }
}
