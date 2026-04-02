/**
 * 类名:MajorDirectionPaperRela_EditEx(界面:MajorDirectionPaperRelaCRUD)
 * 表名:MajorDirectionPaperRela(01120554)
 * 版本:2023.01.04.1(服务器:WIN-SRV103-116)
 * 日期:2023/01/06 22:44:01
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:WA_编辑区后台Ex_TS(TS)(WA_ViewScript_EditCSEx_TS)
 * 编程语言:TypeScript
 **/
import { clsPubFun4Web } from '@/ts/FunClass/clsPubFun4Web';
import { MajorDirectionPaperRela_Edit } from '@/viewsBase/GradEduPaper/MajorDirectionPaperRela_Edit';
import { clsMajorDirectionPaperRelaEN } from '@/ts/L0Entity/GradEduPaper/clsMajorDirectionPaperRelaEN';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { AccessBtnClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import {
  MajorDirectionPaperRela_AddNewRecordAsync,
  MajorDirectionPaperRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsMajorDirectionPaperRelaWApi';
import { GetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { userStore } from '@/store/modulesShare/user';
/* MajorDirectionPaperRela_EditEx 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:GeneCode)
*/
export class MajorDirectionPaperRela_EditEx extends MajorDirectionPaperRela_Edit {
  /**
  按钮单击,用于调用Js函数中btn_Click
 (AutoGCLib.WA_ViewScript_EditCSEx_TS4TypeScript:Gen_WApi_TS_btnEdit_Click)
 **/
  public static btnEdit_Click(strCommandName: string, strKeyId: string) {
    console.log(strKeyId);
    //const strThisFuncName = this.btnEdit_Click.name;

    const objPage: MajorDirectionPaperRela_EditEx = <MajorDirectionPaperRela_EditEx>(
      MajorDirectionPaperRela_Edit.GetPageEditObj('MajorDirectionPaperRela_EditEx')
    );
    if (objPage == null) {
      const strMsg = `当前编辑页面没有按关键字:'MajorDirectionPaperRela_EditEx'初始化过，请检查！`;
      alert(strMsg);
      console.error(strMsg);
      return;
    }

    switch (strCommandName) {
      case 'Submit': //提交
        objPage.btnSubmit_Click();
        break;
      default:
        AccessBtnClickDefault(strCommandName, 'MajorDirectionPaperRela_EditEx.btn_Click');

        break;
    }
  }
  /* 函数功能:把界面上的属性数据传到类对象中
   (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
   <param name = "pobjMajorDirectionPaperRelaEN">数据传输的目的类对象</param>
 */
  public async PutDataToMajorDirectionPaperRelaClass(
    pobjMajorDirectionPaperRelaEN: clsMajorDirectionPaperRelaEN,
  ) {
    pobjMajorDirectionPaperRelaEN.SetMajorDirectionId(this.majorDirectionId); // 研究方向Id
    pobjMajorDirectionPaperRelaEN.SetPaperId(this.paperId); // 论文Id
    pobjMajorDirectionPaperRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjMajorDirectionPaperRelaEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjMajorDirectionPaperRelaEN.SetMemo(this.memo); // 备注
  }
  /* 函数功能:把界面上的属性数据传到类对象中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
    <param name = "pobjMajorDirectionPaperRelaEN">数据传输的目的类对象</param>
  */
  public PutDataToMajorDirectionPaperRelaClassV2(
    pobjMajorDirectionPaperRelaEN: clsMajorDirectionPaperRelaEN,
  ) {
    const divName = this.getDivName();
    const strMajorDirectionId = GetInputValueInDivObj(divName, 'hidMajorDirectionId');
    //strViewpointId = $("#hidPaperId").val();
    // const strUserId = userStore.getUserId;

    pobjMajorDirectionPaperRelaEN.SetMajorDirectionId(strMajorDirectionId); // 研究方向Id
    pobjMajorDirectionPaperRelaEN.SetPaperId(GetHidPaperId(divName)); // 论文Id
    pobjMajorDirectionPaperRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjMajorDirectionPaperRelaEN.SetUpdUser(userStore.getUserId); // 修改人

    pobjMajorDirectionPaperRelaEN.SetMemo(this.memo); // 备注
  }
  /* 添加新记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
    */
  public async AddNewRecordSaveMajorDirection() {
    const divName = this.getDivName();
    const strMajorDirectionId = GetInputValueInDivObj(divName, 'hidMajorDirectionId'); //专业方向
    const strPaperId = GetHidPaperId(divName); //论文

    const objMajorDirectionPaperRelaEN: clsMajorDirectionPaperRelaEN =
      new clsMajorDirectionPaperRelaEN();
    this.PutDataToMajorDirectionPaperRelaClass(objMajorDirectionPaperRelaEN);
    try {
      //同一论文不能重复添加同一个专业方向；
      const strWhere = ` 1 = 1 And paperId = '${strPaperId}' And majorDirectionId = '${strMajorDirectionId}'`;
      const responseText = await MajorDirectionPaperRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一论文不能重复添加同一个专业方向！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      }

      const responseText2 = await MajorDirectionPaperRela_AddNewRecordAsync(
        objMajorDirectionPaperRelaEN,
      );
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strInfo = `添加记录成功!`;

        //显示信息框
        alert(strInfo);
        // HideDialogOne();
        //window.location.href = "../GradEduEx/PaperCRUD?paperTypeId=01";
        window.location.href = `../GraduateEdu/PaperAddXzmajorRela?paperId='${strPaperId}'`;
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return responseText2; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true; //一定要有一个返回值，否则会出错！
  }
  //用来选择专业记录方法；
  public btnOkInTab_Click(strKeyId: string) {
    $('#hidMajorDirectionId').val(strKeyId); //专业方向
    this.AddNewRecordSaveMajorDirection();
  }
}
