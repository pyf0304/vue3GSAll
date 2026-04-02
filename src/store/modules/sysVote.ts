import { clsSysVote } from '@/ts/L0Entity/InteractManage/clsSysVote';
import { clsSysVoteEN } from '@/ts/L0Entity/InteractManage/clsSysVoteEN';
import { gs_Color_GetObjByColorIdCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ColorWApi';
import {
  SysVoteEx_GetObjByUpdUser,
  SysVoteEx_GetObjLstByTableKey,
} from '@/ts/L3ForWApiEx/InteractManage/clsSysVoteExWApi';

import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { Format } from '@/ts/PubFun/clsString';

import { defineStore } from 'pinia';

export function SysVoteEx_CopyTo(objSysVoteENS: clsSysVoteEN): clsSysVote {
  const strThisFuncName = SysVoteEx_CopyTo.name;
  const objSysVoteENT = new clsSysVote();
  try {
    ObjectAssign(objSysVoteENT, objSysVoteENS);
    return objSysVoteENT;
  } catch (e: any) {
    const strMsg = Format('(errid:Watl000067)Copy表对象数据出错,{0}.(in {1})', e, strThisFuncName);
    console.error(strMsg);
    alert(strMsg);
    return objSysVoteENT;
  }
}

// export interface roleMenuNames {
//   voteTypeId: string;
//   menuSetId: string;
//   updUser: string;
//   menuNames: string;
//   voteTypeIds: string;
// }
// 定义 TabsState
export interface SysVoteState {
  sysVoteLst: clsSysVote[];

  // roleMenuNamesLst: roleMenuNames[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useSysVoteStore = defineStore({
  id: 'SysVote',

  state(): SysVoteState {
    return {
      sysVoteLst: [],

      // roleMenuNamesLst: [],
    };
  },

  actions: {
    async getObj(
      strVoteTypeId: string,
      strUpdUser: string,
      strTableKey: string,
    ): Promise<clsSysVote | null> {
      // if (strVoteTypeId == null || strVoteTypeId == '') return null;
      if (strUpdUser == null || strUpdUser == '') return null;
      if (strTableKey == null || strTableKey == '') return null;
      let objUser;
      if (strVoteTypeId == '') {
        objUser = this.sysVoteLst.find((x) => x.updUser == strUpdUser && x.tableKey == strTableKey);
      } else {
        objUser = this.sysVoteLst.find(
          (x) =>
            x.voteTypeId === strVoteTypeId && x.updUser == strUpdUser && x.tableKey == strTableKey,
        );
      }
      if (objUser != null && objUser != undefined) return objUser;

      let objSysVoteEN = await SysVoteEx_GetObjByUpdUser(strVoteTypeId, strUpdUser, strTableKey);
      if (objSysVoteEN == null) {
        if (objSysVoteEN == null) {
          const strMsg = `VoteTypeId=${strVoteTypeId}, UpdUser=${strUpdUser}, TableKey=${strTableKey} 的SysVote中不存在，请检查！`;
          console.error(strMsg);
          return null;
        }
      }
      const objSysVote = SysVoteEx_CopyTo(objSysVoteEN);
      this.sysVoteLst.push(objSysVote);
      return objSysVote;
    },

    delObj(strVoteTypeId: string, strUpdUser: string, strTableKey: string): boolean {
      if (strVoteTypeId == null) return true;
      if (strVoteTypeId == '') return true;
      const intIndex = this.sysVoteLst.findIndex(
        (x) => !(x.voteTypeId == strVoteTypeId && x.updUser == strUpdUser),
      );

      this.sysVoteLst = this.sysVoteLst.filter(
        (item) =>
          !(
            item.voteTypeId == strVoteTypeId &&
            item.updUser == strUpdUser &&
            item.tableKey == strTableKey
          ),
      );

      if (intIndex > -1) {
        console.log(
          `菜单Id:${strVoteTypeId},TopicId=${strUpdUser}, TableKey=${strTableKey}在菜单角色关系列表中已经移除！`,
        );
        return true;
      } else {
        console.error(
          `菜单Id:${strVoteTypeId},TopicId=${strUpdUser}, TableKey=${strTableKey}在菜单角色关系列表中不存在！`,
        );
        return false;
      }
    },
    async getUserIdsByTableKey(strTableKey: string): Promise<Array<string>> {
      if (strTableKey == null || strTableKey == '') return [];

      let arrRoleMenus = this.sysVoteLst.filter((x) => x.tableKey === strTableKey);
      if (arrRoleMenus.length == 0) {
        let arrObjLst = await SysVoteEx_GetObjLstByTableKey(strTableKey);
        arrRoleMenus = arrObjLst.map(SysVoteEx_CopyTo);
        arrRoleMenus.forEach((x) => {
          this.sysVoteLst.push(x);
        });
      }

      const arrUserIds = arrRoleMenus.map((x) => x.updUser);

      return arrUserIds;
    },
  },
});

export const sysVoteStore = useSysVoteStore();
