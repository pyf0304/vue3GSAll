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
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblTopicId_q"
              name="lblTopicId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >主题编号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTopicId_q"
              name="ddlTopicId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblYear_q"
              name="lblYear_q"
              class="col-form-label text-right"
              style="width: 90px"
              >年
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtYear_q"
              name="txtYear_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblMonth_q"
              name="lblMonth_q"
              class="col-form-label text-right"
              style="width: 90px"
              >月
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMonth_q"
              name="txtMonth_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblMeetingDate_q"
              name="lblMeetingDate_q"
              class="col-form-label text-right"
              style="width: 90px"
              >会议日期
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMeetingDate_q"
              name="txtMeetingDate_q"
              class="form-control form-control-sm"
              style="width: 120px"
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
            id="lblgs_MeetingMinutesList"
            name="lblgs_MeetingMinutesList"
            class="col-form-label text-info"
            style="width: 250px"
            >会议纪要列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnQuery"
            name="btnQuery"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Query', '')"
            >查询</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnExportExcel"
            name="btnExportExcel"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('ExportExcel', '')"
            >导出Excel</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvgs_MeetingMinutesBy" type="hidden" />
    </div>
    <!--编辑层-->
    <gs_MeetingMinutes_EditCom ref="gs_MeetingMinutes_EditRef"></gs_MeetingMinutes_EditCom>
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
  import { gs_MeetingMinutesCRUDEx } from '@/views/GradEduTopic/gs_MeetingMinutesCRUDEx';
  import { gs_MeetingMinutesCRUD } from '@/viewsBase/GradEduTopic/gs_MeetingMinutesCRUD';
  import gs_MeetingMinutes_EditCom from '@/views/GradEduTopic/gs_MeetingMinutes_Edit.vue';
  import { gs_MeetingMinutes_Edit } from '@/viewsBase/GradEduTopic/gs_MeetingMinutes_Edit';
  export default defineComponent({
    name: 'GsMeetingMinutesCRUD',
    components: {
      // 组件注册
      gs_MeetingMinutes_EditCom,
    },
    setup() {
      const strTitle = ref('会议纪要维护');
      const gs_MeetingMinutes_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new gs_MeetingMinutesCRUDEx(refDivLayout.value);
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
            gs_MeetingMinutesCRUD.EditObj = gs_MeetingMinutes_EditRef.value;
            gs_MeetingMinutes_Edit.EditObj = gs_MeetingMinutes_EditRef.value;
            break;
          default:
            break;
        }
        gs_MeetingMinutesCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        gs_MeetingMinutes_EditRef,
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
