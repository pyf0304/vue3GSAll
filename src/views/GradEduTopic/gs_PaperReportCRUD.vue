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
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblgs_PaperReportList"
            name="lblgs_PaperReportList"
            class="col-form-label text-info"
            style="width: 250px"
            >论文汇报表列表
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
      <input id="hidSortvgs_PaperReportBy" type="hidden" />
    </div>
    <!--编辑层-->
    <!-- <gs_PaperReport_EditCom ref="gs_PaperReport_EditRef"></gs_PaperReport_EditCom> -->
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
  // import { gs_PaperReportCRUDEx } from '@/views/GradEduTopic/gs_PaperReportCRUDEx';
  import { gs_PaperReportCRUD } from '@/viewsBase/GradEduTopic/gs_PaperReportCRUD';
  // import gs_PaperReport_EditCom from '@/views/GradEduTopic/gs_PaperReport_Edit.vue';
  import { gs_PaperReport_Edit } from '@/viewsBase/GradEduTopic/gs_PaperReport_Edit';
  import { gs_PaperReport_EditEx } from '@/views/GradEduTopic/gs_PaperReport_EditEx';

  import { gs_PaperReportCRUDExC_btn_Click } from '@/views/GradEduTopic/gs_PaperReportCRUDExC';
  import { gs_PaperReportCRUDEx_PageLoad } from '@/views/GradEduTopic/gs_PaperReportCRUDExG';

  export default defineComponent({
    name: 'GsPaperReportCRUD',
    components: {
      // 组件注册
      // gs_PaperReport_EditCom,
    },
    setup() {
      const strTitle = ref('论文汇报表维护');
      const gs_PaperReport_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
       
        gs_PaperReportCRUDEx_PageLoad();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            gs_PaperReportCRUD.EditObj = gs_PaperReport_EditRef.value;
            gs_PaperReport_Edit.EditObj = gs_PaperReport_EditRef.value;
            break;
          default:
            break;
        }
        gs_PaperReport_EditEx.btnEdit_Click(strCommandName, strKeyId);
        gs_PaperReportCRUDExC_btn_Click(strCommandName, strKeyId);
      }
      return {
        strTitle,
        btn_Click,
        gs_PaperReport_EditRef,
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
