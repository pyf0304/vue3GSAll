<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
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
              id="lblPaperSubResName_q"
              name="lblPaperSubResName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >子资源名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPaperSubResName_q"
              name="txtPaperSubResName_q"
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
            id="lblPaperSubResList"
            name="lblPaperSubResList"
            class="col-form-label text-info"
            style="width: 250px"
            >论文子资源列表
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
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortPaperSubResBy" type="hidden" />
    </div>
    <!--编辑层-->
    <PaperSubRes_EditCom ref="refPaperSubRes_Edit"></PaperSubRes_EditCom>
    <!--详细信息层-->
    <PaperSubRes_DetailCom ref="refPaperSubRes_Detail"></PaperSubRes_DetailCom>
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
  import { PaperSubResCRUDEx } from '@/views/GradEduPaper/PaperSubResCRUDEx';
  import { PaperSubResCRUD } from '@/viewsBase/GradEduPaper/PaperSubResCRUD';
  import PaperSubRes_EditCom from '@/views/GradEduPaper/PaperSubRes_Edit.vue';
  import PaperSubRes_DetailCom from '@/views/GradEduPaper/PaperSubRes_Detail.vue';
  import { PaperSubRes_Edit } from '@/viewsBase/GradEduPaper/PaperSubRes_Edit';
  import { PaperSubRes_Detail } from '@/viewsBase/GradEduPaper/PaperSubRes_Detail';
  export default defineComponent({
    name: 'PaperSubResCRUD',
    components: {
      // 组件注册
      PaperSubRes_EditCom,
      PaperSubRes_DetailCom,
    },
    setup() {
      const strTitle = ref('论文子资源维护');
      const refPaperSubRes_Edit = ref();
      const refPaperSubRes_Detail = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      onMounted(() => {
        PaperSubResCRUDEx.vuebtn_Click = btn_Click;
        PaperSubResCRUDEx.GetPropValue = GetPropValue;
        const objPage = new PaperSubResCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            PaperSubResCRUD.DetailObj = refPaperSubRes_Detail;
            PaperSubRes_Detail.DetailObj = refPaperSubRes_Detail;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            PaperSubResCRUD.EditObj = refPaperSubRes_Edit.value;
            PaperSubRes_Edit.EditObj = refPaperSubRes_Edit.value;
            break;
          default:
            break;
        }
        PaperSubResCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        refPaperSubRes_Edit,
        refPaperSubRes_Detail,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
