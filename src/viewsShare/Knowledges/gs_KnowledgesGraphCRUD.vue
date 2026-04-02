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
              id="lblKnowledgeGraphName_q"
              name="lblKnowledgeGraphName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >知识点图名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtKnowledgeGraphName_q"
              name="txtKnowledgeGraphName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblCourseId_q"
              name="lblCourseId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >课程
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCourseId_q"
              name="ddlCourseId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblCreateUser_q"
              name="lblCreateUser_q"
              class="col-form-label text-right"
              style="width: 90px"
              >建立用户
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCreateUser_q"
              name="txtCreateUser_q"
              class="form-control form-control-sm"
              style="width: 120px"
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
            id="lblgs_KnowledgesGraphList"
            name="lblgs_KnowledgesGraphList"
            class="col-form-label text-info"
            style="width: 250px"
            >知识点逻辑图列表
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
      <input id="hidSortgs_KnowledgesGraphBy" type="hidden" />
    </div>
    <!--编辑层-->
    <gs_KnowledgesGraph_EditCom ref="gs_KnowledgesGraph_EditRef"></gs_KnowledgesGraph_EditCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { gs_KnowledgesGraphCRUDEx } from '@/viewsShare/Knowledges/gs_KnowledgesGraphCRUDEx';
  import { gs_KnowledgesGraphCRUD } from '@/viewsBase/Knowledges/gs_KnowledgesGraphCRUD';
  import gs_KnowledgesGraph_EditCom from '@/viewsShare/Knowledges/gs_KnowledgesGraph_Edit.vue';
  import { gs_KnowledgesGraph_Edit } from '@/viewsBase/Knowledges/gs_KnowledgesGraph_Edit';
  export default defineComponent({
    name: 'GsKnowledgesGraphCRUD',
    components: {
      // 组件注册
      gs_KnowledgesGraph_EditCom,
    },
    setup() {
      const strTitle = ref('知识点逻辑图维护');
      const gs_KnowledgesGraph_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new gs_KnowledgesGraphCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoad();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            gs_KnowledgesGraphCRUD.EditObj = gs_KnowledgesGraph_EditRef.value;
            gs_KnowledgesGraph_Edit.EditObj = gs_KnowledgesGraph_EditRef.value;
            break;
          default:
            break;
        }
        gs_KnowledgesGraphCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        gs_KnowledgesGraph_EditRef,
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
