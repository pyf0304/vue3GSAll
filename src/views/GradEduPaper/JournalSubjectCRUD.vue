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
              id="lblJournalSubjectId_q"
              name="lblJournalSubjectId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >学科Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtJournalSubjectId_q"
              name="txtJournalSubjectId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblJournalSubjectCode_q"
              name="lblJournalSubjectCode_q"
              class="col-form-label text-right"
              style="width: 90px"
              >学科代码
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtJournalSubjectCode_q"
              name="txtJournalSubjectCode_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblJournalSubjectName_q"
              name="lblJournalSubjectName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >学科名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtJournalSubjectName_q"
              name="txtJournalSubjectName_q"
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
              >学科门类
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
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblJournalSubjectList"
            name="lblJournalSubjectList"
            class="col-form-label text-info"
            style="width: 250px"
            >期刊学科列表
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortJournalSubjectBy" type="hidden" />
    </div>
    <!--编辑层-->
    <JournalSubject_EditCom ref="JournalSubject_EditRef"></JournalSubject_EditCom>
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
  import { JournalSubjectCRUDEx } from '@/views/GradEduPaper/JournalSubjectCRUDEx';
  import { JournalSubjectCRUD } from '@/viewsBase/GradEduPaper/JournalSubjectCRUD';
  import JournalSubject_EditCom from '@/views/GradEduPaper/JournalSubject_Edit.vue';
  import { JournalSubject_Edit } from '@/viewsBase/GradEduPaper/JournalSubject_Edit';
  export default defineComponent({
    name: 'JournalSubjectCRUD',
    components: {
      // 组件注册
      JournalSubject_EditCom,
    },
    setup() {
      const strTitle = ref('期刊学科维护');
      const JournalSubject_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new JournalSubjectCRUDEx(refDivLayout.value);
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
            JournalSubjectCRUD.EditObj = JournalSubject_EditRef.value;
            JournalSubject_Edit.EditObj = JournalSubject_EditRef.value;
            break;
          default:
            break;
        }
        JournalSubjectCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        JournalSubject_EditRef,
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
