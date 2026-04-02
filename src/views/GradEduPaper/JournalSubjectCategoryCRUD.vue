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
              id="lblJournalSubjectCategoryId_q"
              name="lblJournalSubjectCategoryId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >期刊学科门类Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtJournalSubjectCategoryId_q"
              name="txtJournalSubjectCategoryId_q"
              class="form-control form-control-sm"
              style="width: 100px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblJournalSubjectCategoryName_q"
              name="lblJournalSubjectCategoryName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >期刊学科门类名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtJournalSubjectCategoryName_q"
              name="txtJournalSubjectCategoryName_q"
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
            id="lblJournalSubjectCategoryList"
            name="lblJournalSubjectCategoryList"
            class="col-form-label text-info"
            style="width: 250px"
            >期刊学科门类列表
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
      <input id="hidSortJournalSubjectCategoryBy" type="hidden" />
    </div>
    <!--编辑层-->
    <JournalSubjectCategory_EditCom
      ref="JournalSubjectCategory_EditRef"
    ></JournalSubjectCategory_EditCom>
    <!--详细信息层-->
    <JournalSubjectCategory_DetailCom
      ref="JournalSubjectCategory_DetailRef"
    ></JournalSubjectCategory_DetailCom>
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
  import { JournalSubjectCategoryCRUDEx } from '@/views/GradEduPaper/JournalSubjectCategoryCRUDEx';
  import { JournalSubjectCategoryCRUD } from '@/viewsBase/GradEduPaper/JournalSubjectCategoryCRUD';
  import JournalSubjectCategory_EditCom from '@/views/GradEduPaper/JournalSubjectCategory_Edit.vue';
  import JournalSubjectCategory_DetailCom from '@/views/GradEduPaper/JournalSubjectCategory_Detail.vue';
  import { JournalSubjectCategory_Edit } from '@/viewsBase/GradEduPaper/JournalSubjectCategory_Edit';
  import { JournalSubjectCategory_Detail } from '@/viewsBase/GradEduPaper/JournalSubjectCategory_Detail';
  export default defineComponent({
    name: 'JournalSubjectCategoryCRUD',
    components: {
      // 组件注册
      JournalSubjectCategory_EditCom,
      JournalSubjectCategory_DetailCom,
    },
    setup() {
      const strTitle = ref('期刊学科门类维护');
      const JournalSubjectCategory_EditRef = ref();
      const JournalSubjectCategory_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new JournalSubjectCategoryCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            JournalSubjectCategoryCRUD.DetailObj = JournalSubjectCategory_DetailRef.value;
            JournalSubjectCategory_Detail.DetailObj = JournalSubjectCategory_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            JournalSubjectCategoryCRUD.EditObj = JournalSubjectCategory_EditRef.value;
            JournalSubjectCategory_Edit.EditObj = JournalSubjectCategory_EditRef.value;
            break;
          default:
            break;
        }
        JournalSubjectCategoryCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        JournalSubjectCategory_EditRef,
        JournalSubjectCategory_DetailRef,
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
