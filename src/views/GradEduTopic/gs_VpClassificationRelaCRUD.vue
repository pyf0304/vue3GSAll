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
              id="lblTopicId_q"
              name="lblTopicId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >主题Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTopicId_q"
              name="txtTopicId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblClassificationName_q"
              name="lblClassificationName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >分类名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtClassificationName_q"
              name="txtClassificationName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblDateTimeSim_q"
              name="lblDateTimeSim_q"
              class="col-form-label text-right"
              style="width: 90px"
              >简化日期时间
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDateTimeSim_q"
              name="txtDateTimeSim_q"
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
            id="lblgs_VpClassificationRelaList"
            name="lblgs_VpClassificationRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >观点分类主题关系表列表
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
      <input id="hidSortgs_VpClassificationRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    <gs_VpClassificationRela_EditCom
      ref="gs_VpClassificationRela_EditRef"
    ></gs_VpClassificationRela_EditCom>
    <!--详细信息层-->
    <gs_VpClassificationRela_DetailCom
      ref="gs_VpClassificationRela_DetailRef"
    ></gs_VpClassificationRela_DetailCom>
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
  import { gs_VpClassificationRelaCRUDEx } from '@/views/GradEduTopic/gs_VpClassificationRelaCRUDEx';
  import { gs_VpClassificationRelaCRUD } from '@/viewsBase/GradEduTopic/gs_VpClassificationRelaCRUD';
  import gs_VpClassificationRela_EditCom from '@/views/GradEduTopic/gs_VpClassificationRela_Edit.vue';
  import gs_VpClassificationRela_DetailCom from '@/views/GradEduTopic/gs_VpClassificationRela_Detail.vue';
  import { gs_VpClassificationRela_Edit } from '@/viewsBase/GradEduTopic/gs_VpClassificationRela_Edit';
  import { gs_VpClassificationRela_Detail } from '@/viewsBase/GradEduTopic/gs_VpClassificationRela_Detail';
  export default defineComponent({
    name: 'GsVpClassificationRelaCRUD',
    components: {
      // 组件注册
      gs_VpClassificationRela_EditCom,
      gs_VpClassificationRela_DetailCom,
    },
    setup() {
      const strTitle = ref('观点分类主题关系表维护');
      const gs_VpClassificationRela_EditRef = ref();
      const gs_VpClassificationRela_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      onMounted(() => {
        const objPage = new gs_VpClassificationRelaCRUDEx(refDivLayout.value);
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
        return '';
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            gs_VpClassificationRelaCRUD.DetailObj = gs_VpClassificationRela_DetailRef.value;
            gs_VpClassificationRela_Detail.DetailObj = gs_VpClassificationRela_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            gs_VpClassificationRelaCRUD.EditObj = gs_VpClassificationRela_EditRef.value;
            gs_VpClassificationRela_Edit.EditObj = gs_VpClassificationRela_EditRef.value;
            break;
          default:
            break;
        }
        gs_VpClassificationRelaCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        gs_VpClassificationRela_EditRef,
        gs_VpClassificationRela_DetailRef,
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
