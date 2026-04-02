<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 200px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblDiscussionTypeId_q"
              name="lblDiscussionTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >讨论类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDiscussionTypeId_q"
              name="ddlDiscussionTypeId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblTopicsTitle_q"
              name="lblTopicsTitle_q"
              class="col-form-label text-right"
              style="width: 90px"
              >主题标题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTopicsTitle_q"
              name="txtTopicsTitle_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblUpdDate_q"
              name="lblUpdDate_q"
              class="col-form-label text-right"
              style="width: 90px"
              >修改日期
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUpdDate_q"
              name="txtUpdDate_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblUpdUser_q"
              name="lblUpdUser_q"
              class="col-form-label text-right"
              style="width: 90px"
              >修改人
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUpdUser_q"
              name="txtUpdUser_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblDiscussionTopicsList"
            name="lblDiscussionTopicsList"
            class="col-form-label text-info"
            style="width: 250px"
            >讨论主题列表
          </label>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvDiscussionTopicsBy" type="hidden" />
    </div>
    <!--编辑层-->
    <DiscussionTopics_EditCom ref="DiscussionTopics_EditRef"></DiscussionTopics_EditCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { DiscussionTopicsCRUDEx } from '@/views/GradEduTools/DiscussionTopicsCRUDEx';
  import { DiscussionTopicsCRUD } from '@/viewsBase/GradEduTools/DiscussionTopicsCRUD';
  import DiscussionTopics_EditCom from '@/views/GradEduTools/DiscussionTopics_Edit.vue';
  import { DiscussionTopics_Edit } from '@/viewsBase/GradEduTools/DiscussionTopics_Edit';
  export default defineComponent({
    name: 'DiscussionTopicsCRUD',
    components: {
      // 组件注册
      DiscussionTopics_EditCom,
    },
    setup() {
      const strTitle = ref('讨论主题维护');
      const DiscussionTopics_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new DiscussionTopicsCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            DiscussionTopicsCRUD.EditObj = DiscussionTopics_EditRef.value;
            DiscussionTopics_Edit.EditObj = DiscussionTopics_EditRef.value;
            break;
          default:
            break;
        }
        DiscussionTopicsCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        DiscussionTopics_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
