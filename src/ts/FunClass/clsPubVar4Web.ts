/*
 * 功能:为Web提供一些几个公共的功能函数
 * 版本:2019-08-07-01
 * 作者:潘以锋
 * */

import { ResearchTopicEx_GetIdCurrEduClsByTopicId } from '@/ts/L3ForWApiEx/GradEduTopic/clsResearchTopicExWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

// declare const document: any;

export class clsPubVar4Web {
  public static SortFun() { }
  
  public static async GetIdCurrEduClsByTopicId(): Promise<string> {
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strIdCurrEduCls = await ResearchTopicEx_GetIdCurrEduClsByTopicId(strTopicId);
    return strIdCurrEduCls;
  }
  /*
   * 重新转向本项目新的Url地址
   */
  public static GetRegionId(strViewId: string, strRegionTypeId: string): number {
    console.log(strViewId, strRegionTypeId);
    return 0;
  }
  public static async GetTabId(qsTabId: string) {
    if (IsNullOrEmpty(qsTabId) == false) {
      if (clsPrivateSessionStorage.tabId != qsTabId) {
        clsPrivateSessionStorage.tabId = qsTabId;
        //    const strTabName = await vPrjTab_SimEx_GetNameByTabIdCache(qsTabId, clsPrivateSessionStorage.cmPrjId);
        //    clsPrivateSessionStorage.tabName = strTabName;
      }
      return qsTabId;
    } else {
      if (IsNullOrEmpty(clsPrivateSessionStorage.tabId) == true) {
        console.error('在获取[tabId]时，值为空！');
      }
      return clsPrivateSessionStorage.tabId;
    }
  }

  public static async GetViewId(qsViewId: string) {
    if (IsNullOrEmpty(qsViewId) == false) {
      if (clsPrivateSessionStorage.viewId != qsViewId) {
        clsPrivateSessionStorage.viewId = qsViewId;
        //    const strTabName = await vPrjTab_SimEx_GetNameByTabIdCache(qsViewId, clsPrivateSessionStorage.cmPrjId);
        //    clsPrivateSessionStorage.tabName = strTabName;
      }
      return qsViewId;
    } else {
      if (IsNullOrEmpty(clsPrivateSessionStorage.viewId) == true) {
        console.error('在获取[viewId]时，值为空！');
      }
      return clsPrivateSessionStorage.viewId;
    }
  }
  public static async SetTabId(strTabId: string) {
    if (IsNullOrEmpty(strTabId) == false) {
      if (clsPrivateSessionStorage.tabId != strTabId) {
        clsPrivateSessionStorage.tabId = strTabId;
        //    const strTabName = await vPrjTab_SimEx_GetNameByTabIdCache(strTabId, clsPrivateSessionStorage.cmPrjId);
        //    clsPrivateSessionStorage.tabName = strTabName;
      }
    }
  }
}
export function GetLst_TabCacheAdditionCondition() {
  const arrTabCacheAdditionCondition = [
    {
      tabName: 'vFieldTab_Sim',
      cacheAdditionCondition: 'FldId in (select fldid from prjtabfld)',
    },
    {
      tabName: 'vPrjTab_Sim',
      cacheAdditionCondition: "TabStateId='01'",
    },
  ];
  return arrTabCacheAdditionCondition;
}
