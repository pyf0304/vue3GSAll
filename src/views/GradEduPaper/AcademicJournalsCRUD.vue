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
              id="lblJournalId_q"
              name="lblJournalId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >期刊Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtJournalId_q"
              name="txtJournalId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblJournalName_q"
              name="lblJournalName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >期刊名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtJournalName_q"
              name="txtJournalName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblJournalSubjectCategoryId_q"
              name="lblJournalSubjectCategoryId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >期刊学科门类Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlJournalSubjectCategoryId_q"
              name="ddlJournalSubjectCategoryId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblJournalSubjectId_q"
              name="lblJournalSubjectId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >期刊学科Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlJournalSubjectId_q"
              name="ddlJournalSubjectId_q"
              class="form-control form-control-sm"
              style="width: 120px"
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
            id="lblAcademicJournalsList"
            name="lblAcademicJournalsList"
            class="col-form-label text-info"
            style="width: 250px"
            >学术期刊列表
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
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CreateWithMaxId', '')"
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
        <li class="nav-item ml-3">
          <button
            id="btnClone"
            name="btnClone"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Clone', '')"
            >复制</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortAcademicJournalsBy" type="hidden" />
    </div>
    <!--编辑层-->
    <AcademicJournals_EditCom ref="AcademicJournals_EditRef"></AcademicJournals_EditCom>
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
  import { AcademicJournalsCRUDEx } from '@/views/GradEduPaper/AcademicJournalsCRUDEx';
  import { AcademicJournalsCRUD } from '@/viewsBase/GradEduPaper/AcademicJournalsCRUD';
  import AcademicJournals_EditCom from '@/views/GradEduPaper/AcademicJournals_Edit.vue';
  import { AcademicJournals_Edit } from '@/viewsBase/GradEduPaper/AcademicJournals_Edit';
  export default defineComponent({
    name: 'AcademicJournalsCRUD',
    components: {
      // 组件注册
      AcademicJournals_EditCom,
    },
    setup() {
      const strTitle = ref('学术期刊维护');
      const AcademicJournals_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new AcademicJournalsCRUDEx(refDivLayout.value);
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
            AcademicJournalsCRUD.EditObj = AcademicJournals_EditRef.value;
            AcademicJournals_Edit.EditObj = AcademicJournals_EditRef.value;
            break;
          default:
            break;
        }
        AcademicJournalsCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        AcademicJournals_EditRef,
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
