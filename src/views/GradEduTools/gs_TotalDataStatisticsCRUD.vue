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
              id="lblIdCurrEduCls_q"
              name="lblIdCurrEduCls_q"
              class="col-form-label text-right"
              style="width: 90px"
              >当前教学班流水号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdCurrEduCls_q"
              name="ddlIdCurrEduCls_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblEduClsName_q"
              name="lblEduClsName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >教学班名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtEduClsName_q"
              name="txtEduClsName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblSchoolYear_q"
              name="lblSchoolYear_q"
              class="col-form-label text-right"
              style="width: 90px"
              >学年
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlSchoolYear_q"
              name="ddlSchoolYear_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblSchoolTerm_q"
              name="lblSchoolTerm_q"
              class="col-form-label text-right"
              style="width: 90px"
              >学期
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlSchoolTerm_q"
              name="ddlSchoolTerm_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblTotalDataTypeId_q"
              name="lblTotalDataTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >总数据类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTotalDataTypeId_q"
              name="txtTotalDataTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblTotalDataTypeName_q"
              name="lblTotalDataTypeName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >总数据类型名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTotalDataTypeName_q"
              name="txtTotalDataTypeName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblDataTable_q"
              name="lblDataTable_q"
              class="col-form-label text-right"
              style="width: 90px"
              >数据表
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDataTable_q"
              name="txtDataTable_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblDataTableId_q"
              name="lblDataTableId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >数据表Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDataTableId_q"
              name="txtDataTableId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblTableKey_q"
              name="lblTableKey_q"
              class="col-form-label text-right"
              style="width: 90px"
              >表主键
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTableKey_q"
              name="txtTableKey_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblDataUser_q"
              name="lblDataUser_q"
              class="col-form-label text-right"
              style="width: 90px"
              >数据用户
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDataUser_q"
              name="txtDataUser_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblDataAddDate_q"
              name="lblDataAddDate_q"
              class="col-form-label text-right"
              style="width: 90px"
              >数据添加日期
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDataAddDate_q"
              name="txtDataAddDate_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblMonth_q"
              name="lblMonth_q"
              class="col-form-label text-right"
              style="width: 90px"
              >月
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMonth_q"
              name="txtMonth_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblWeek_q"
              name="lblWeek_q"
              class="col-form-label text-right"
              style="width: 90px"
              >周
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtWeek_q"
              name="txtWeek_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
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
            id="lblgs_TotalDataStatisticsList"
            name="lblgs_TotalDataStatisticsList"
            class="col-form-label text-info"
            style="width: 250px"
            >总数据统计列表
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
      <input id="hidSortvgs_TotalDataStatisticsBy" type="hidden" />
    </div>
    <!--编辑层-->
    <gs_TotalDataStatistics_EditCom
      ref="gs_TotalDataStatistics_EditRef"
    ></gs_TotalDataStatistics_EditCom>
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
  import { gs_TotalDataStatisticsCRUDEx } from '@/views/GradEduTools/gs_TotalDataStatisticsCRUDEx';
  import { gs_TotalDataStatisticsCRUD } from '@/viewsBase/GradEduTools/gs_TotalDataStatisticsCRUD';
  import gs_TotalDataStatistics_EditCom from '@/views/GradEduTools/gs_TotalDataStatistics_Edit.vue';
  import { gs_TotalDataStatistics_Edit } from '@/viewsBase/GradEduTools/gs_TotalDataStatistics_Edit';
  export default defineComponent({
    name: 'GsTotalDataStatisticsCRUD',
    components: {
      // 组件注册
      gs_TotalDataStatistics_EditCom,
    },
    setup() {
      const strTitle = ref('总数据统计维护');
      const gs_TotalDataStatistics_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new gs_TotalDataStatisticsCRUDEx(refDivLayout.value);
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
            gs_TotalDataStatisticsCRUD.EditObj = gs_TotalDataStatistics_EditRef.value;
            gs_TotalDataStatistics_Edit.EditObj = gs_TotalDataStatistics_EditRef.value;
            break;
          default:
            break;
        }
        gs_TotalDataStatisticsCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        gs_TotalDataStatistics_EditRef,
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
