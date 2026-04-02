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
              id="lblUserId_q"
              name="lblUserId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >用户ID
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUserId_q"
              name="txtUserId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblTopicName_q"
              name="lblTopicName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >栏目主题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTopicName_q"
              name="txtTopicName_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblIdXzCollege_q"
              name="lblIdXzCollege_q"
              class="col-form-label text-right"
              style="width: 90px"
              >学院流水号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdXzCollege_q"
              name="ddlIdXzCollege_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIdXzMajor_q"
              name="lblIdXzMajor_q"
              class="col-form-label text-right"
              style="width: 90px"
              >专业流水号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdXzMajor_q"
              name="ddlIdXzMajor_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblRTUserRelaList"
            name="lblRTUserRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >主题用户关系列表
          </label>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvRTUserRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    <RTUserRela_EditCom ref="RTUserRela_EditRef"></RTUserRela_EditCom>
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
  import { RTUserRelaCRUDEx } from '@/views/GradEduTopic/RTUserRelaCRUDEx';

  import RTUserRela_EditCom from '@/views/GradEduTopic/RTUserRela_Edit.vue';
  import { RTUserRela_Edit } from '@/viewsBase/GradEduTopic/RTUserRela_Edit';
  export default defineComponent({
    name: 'RTUserRelaCRUD',
    components: {
      // 组件注册
      RTUserRela_EditCom,
    },
    setup() {
      const strTitle = ref('主题用户关系维护');
      const RTUserRela_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new RTUserRelaCRUDEx(refDivLayout.value);
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
            RTUserRela_Edit.EditObj = RTUserRela_EditRef.value;
            break;
          default:
            break;
        }
        RTUserRelaCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        RTUserRela_EditRef,
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
