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
              id="lblFullName_q"
              name="lblFullName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >姓名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFullName_q"
              name="txtFullName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblAchievement_q"
              name="lblAchievement_q"
              class="col-form-label text-right"
              style="width: 90px"
              >成就
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtAchievement_q"
              name="txtAchievement_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblLevelId_q"
              name="lblLevelId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >级别Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlLevelId_q"
              name="ddlLevelId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-left">
            <button
              id="btnQuery"
              name="btnQuery"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
        </tr>
        <tr>
          <td class="text-left">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('ExportExcel', '')"
              >导出Excel</button
            >
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblSysSocialRelationsList"
            name="lblSysSocialRelationsList"
            class="col-form-label text-info"
            style="width: 250px"
            >社会关系表列表
          </label>
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
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvSysSocialRelationsBy" type="hidden" />
    </div>
    <!--编辑层-->
    <SysSocialRelations_EditCom ref="SysSocialRelations_EditRef"></SysSocialRelations_EditCom>
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
  import { SysSocialRelationsCRUDEx } from '@/views/GradEduTopic/SysSocialRelationsCRUDEx';
  import { SysSocialRelationsCRUD } from '@/viewsBase/GradEduTopic/SysSocialRelationsCRUD';
  import SysSocialRelations_EditCom from '@/views/GradEduTopic/SysSocialRelations_Edit.vue';
  import { SysSocialRelations_Edit } from '@/viewsBase/GradEduTopic/SysSocialRelations_Edit';
  export default defineComponent({
    name: 'SysSocialRelationsCRUD',
    components: {
      // 组件注册
      SysSocialRelations_EditCom,
    },
    setup() {
      const strTitle = ref('社会关系表维护');
      const SysSocialRelations_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new SysSocialRelationsCRUDEx(refDivLayout.value);
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
            SysSocialRelationsCRUD.EditObj = SysSocialRelations_EditRef.value;
            SysSocialRelations_Edit.EditObj = SysSocialRelations_EditRef.value;
            break;
          default:
            break;
        }
        SysSocialRelationsCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        SysSocialRelations_EditRef,
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
