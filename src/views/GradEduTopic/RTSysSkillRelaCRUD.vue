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
              id="lblSkillName_q"
              name="lblSkillName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >技能名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtSkillName_q"
              name="txtSkillName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblOperationTypeId_q"
              name="lblOperationTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >操作类型ID
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlOperationTypeId_q"
              name="ddlOperationTypeId_q"
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
            id="lblRTSysSkillRelaList"
            name="lblRTSysSkillRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >RTSysSkillRela列表
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
      <input id="hidSortvRTSysSkillBy" type="hidden" />
    </div>
    <!--编辑层-->
    <RTSysSkillRela_EditCom ref="RTSysSkillRela_EditRef"></RTSysSkillRela_EditCom>
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
  import { RTSysSkillRelaCRUDEx } from '@/views/GradEduTopic/RTSysSkillRelaCRUDEx';
  import { RTSysSkillRelaCRUD } from '@/viewsBase/GradEduTopic/RTSysSkillRelaCRUD';
  import RTSysSkillRela_EditCom from '@/views/GradEduTopic/RTSysSkillRela_Edit.vue';
  import { RTSysSkillRela_Edit } from '@/viewsBase/GradEduTopic/RTSysSkillRela_Edit';
  export default defineComponent({
    name: 'RTSysSkillRelaCRUD',
    components: {
      // 组件注册
      RTSysSkillRela_EditCom,
    },
    setup() {
      const strTitle = ref('RTSysSkillRela维护');
      const RTSysSkillRela_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new RTSysSkillRelaCRUDEx(refDivLayout.value);
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
            RTSysSkillRelaCRUD.EditObj = RTSysSkillRela_EditRef.value;
            RTSysSkillRela_Edit.EditObj = RTSysSkillRela_EditRef.value;
            break;
          default:
            break;
        }
        RTSysSkillRelaCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        RTSysSkillRela_EditRef,
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
