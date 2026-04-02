import { DiscussionSubContentCRUD } from '@/viewsBase/GradEduTools/DiscussionSubContentCRUD';

/* DiscussionSubContent_QUDI_TSEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class DiscussionSubContent_QUDI_TSEx extends DiscussionSubContentCRUD {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvDiscussionSubContentBy: string = "subContentId";
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
}
