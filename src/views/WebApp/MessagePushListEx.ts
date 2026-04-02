import $ from 'jquery';
import { MessagePushCRUD } from '@/viewsBase/NewsAnn/MessagePushCRUD';
import { clsvMessagePushEN } from '@/ts/L0Entity/NewsAnn/clsvMessagePushEN';
import {
  vMessagePush_GetObjLstByPagerAsync,
  vMessagePush_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/NewsAnn/clsvMessagePushWApi';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  SetInputValueInDivObj,
  GetDivObjInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { userStore } from '@/store/modulesShare/user';

/*
 * 宣布一个已经在其他地方定义存在的变量strUrl_Session_SetString，
 * 用于定义处理Session-设置String函数的地址
 */
declare let strUrl_Session_SetString: string;
declare let window: any;
/* MessagePush_QUDI_TS 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class MessagePushListEx extends MessagePushCRUD {
  public mstrListDiv = 'divDataLst';

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;

  public async PageLoad() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    try {
      const strUserInfo_Hid = GetInputValueInDivObj(divName, 'hidUserInfo');
      if (strUserInfo_Hid != '') {
        await this.BindGv_vMessagePush(this.thisDivList);
      } else {
        window.location.href = '/ExamLibWebApp/WebApp/Login';
      }
    } catch (e: any) {
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 获取消息数据列表
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
   */
  public async BindGv_vMessagePush(divList: HTMLDivElement) {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    const divDataLst = GetDivObjInDivObj(divList, 'divDataLst');
    const strWhereCond = await this.CombinevMessagePushCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvMessagePushObjLst: Array<clsvMessagePushEN> = [];
    try {
      this.recCount = await vMessagePush_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: 'updDate Desc',
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      await vMessagePush_GetObjLstByPagerAsync(objPagerPara).then((jsonData) => {
        arrvMessagePushObjLst = <Array<clsvMessagePushEN>>jsonData;

        for (let i = 0; i < arrvMessagePushObjLst.length; i++) {
          $('#PrjList').append(
            `<li class="ui-li-has-alt ui-first-child"><p style="width: 100%;height: 90%;padding:20px 20px 0px 20px;">${arrvMessagePushObjLst[i].updDate}</p><div style="width: 100%;height: 90%;padding:20px 20px 0px 20px;"><h6 class="jxz-title">${arrvMessagePushObjLst[i].messageContent}</h6></div></li>`,
          );
        }
      });
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `根1据条件获取相应的记录对象的列表不成功,${e}.`;
      console.error(strMsg);
      alert(strMsg);
    }
    if (arrvMessagePushObjLst.length == 0) {
      const strMsg = `根据条件获取的对象列表数为空！`;
      console.error(strMsg);
      alert(strMsg);
      return;
    }
  }

  /* 把所有的查询控件内容组合成一个条件串
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
     <returns>条件串(strWhereCond)</returns>
   */
  public CombinevMessagePushCondition(): string {
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    const strUserId_Hid = userStore.getUserId;
    try {
      if (strUserId_Hid != '') {
        strWhereCond += ` And ${clsvMessagePushEN.con_MessageTypeId} in ('00000001','00000002') And isAllpush='1'`;
      }
      //if (this.ReceivePeople_q != "") {
      //    strWhereCond += ` And ${clsvMessagePushEN.con_ReceivePeople} like '%${this.ReceivePeople_q}%'`;
      //}
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineMessagePushCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  /*
    设置Session
      (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_SetSessionAsync)
    <param name = "Key">关键字</param>
    <param name = "Value">值</param>
    */
  public static SetSessionAsync(Key: string, Value: string): Promise<void> {
    return new Promise(function (resolve, reject) {
      console.log(resolve, reject);
      $.ajax({
        url: strUrl_Session_SetString,
        cache: false,
        async: false,
        type: 'get',
        dataType: 'json',
        data: {
          Key,
          Value,
        },
        success(data) {
          const strKey = data.key;
          const strValue = data.value;
          console.log(strKey + strValue);
        },
      });
    });
  }

  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvMessagePushBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvMessagePushBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvMessagePushBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvMessagePushBy');
  }
  /*
   * 获取当前页序号
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }
}
