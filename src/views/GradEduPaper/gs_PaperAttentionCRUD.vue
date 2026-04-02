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
              id="lblPaperId_q"
              name="lblPaperId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >论文Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPaperId_q"
              name="ddlPaperId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
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
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblPaperGroupId_q"
              name="lblPaperGroupId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >组Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPaperGroupId_q"
              name="ddlPaperGroupId_q"
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
            id="lblgs_PaperAttentionList"
            name="lblgs_PaperAttentionList"
            class="col-form-label text-info"
            style="width: 250px"
            >论文关注列表
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
      <input id="hidSortgs_PaperAttentionBy" type="hidden" />
    </div>
    <!--编辑层-->
    <gs_PaperAttention_EditCom ref="gs_PaperAttention_EditRef"></gs_PaperAttention_EditCom>
    <!--详细信息层-->
    <gs_PaperAttention_DetailCom ref="gs_PaperAttention_DetailRef"></gs_PaperAttention_DetailCom>
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
  import { gs_PaperAttentionCRUDEx } from '@/views/GradEduPaper/gs_PaperAttentionCRUDEx';
  import { gs_PaperAttentionCRUD } from '@/viewsBase/GradEduPaper/gs_PaperAttentionCRUD';
  import gs_PaperAttention_EditCom from '@/views/GradEduPaper/gs_PaperAttention_Edit.vue';
  import gs_PaperAttention_DetailCom from '@/views/GradEduPaper/gs_PaperAttention_Detail.vue';
  import { gs_PaperAttention_Edit } from '@/viewsBase/GradEduPaper/gs_PaperAttention_Edit';
  import { gs_PaperAttention_Detail } from '@/viewsBase/GradEduPaper/gs_PaperAttention_Detail';
  export default defineComponent({
    name: 'GsPaperAttentionCRUD',
    components: {
      // 组件注册
      gs_PaperAttention_EditCom,
      gs_PaperAttention_DetailCom,
    },
    setup() {
      const strTitle = ref('论文关注维护');
      const gs_PaperAttention_EditRef = ref();
      const gs_PaperAttention_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new gs_PaperAttentionCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            gs_PaperAttentionCRUD.DetailObj = gs_PaperAttention_DetailRef.value;
            gs_PaperAttention_Detail.DetailObj = gs_PaperAttention_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            gs_PaperAttentionCRUD.EditObj = gs_PaperAttention_EditRef.value;
            gs_PaperAttention_Edit.EditObj = gs_PaperAttention_EditRef.value;
            break;
          default:
            break;
        }
        gs_PaperAttentionCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        gs_PaperAttention_EditRef,
        gs_PaperAttention_DetailRef,
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
