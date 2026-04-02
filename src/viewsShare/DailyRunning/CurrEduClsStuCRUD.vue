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
        style="width: 1100px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblIdCurrEduCls_q"
              name="lblIdCurrEduCls_q"
              class="col-form-label text-right"
              style="width: 90px"
              >教学班
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdCurrEduCls_q"
              name="ddlIdCurrEduCls_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblEduClsName_q"
              name="lblEduClsName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >教学班名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtEduClsName_q"
              name="txtEduClsName_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblCourseName_q"
              name="lblCourseName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >课程名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCourseName_q"
              name="txtCourseName_q"
              class="form-control form-control-sm"
              style="width: 200px"
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
            id="lblCurrEduClsStuList"
            name="lblCurrEduClsStuList"
            class="col-form-label text-info"
            style="width: 250px"
            >教学班与学生关系列表
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
      <input id="hidSortvCurrEduClsStuBy" type="hidden" />
    </div>
    <!--编辑层-->
    <CurrEduClsStu_EditCom ref="CurrEduClsStu_EditRef"></CurrEduClsStu_EditCom>
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
  import { CurrEduClsStuCRUDEx } from '@/viewsShare/DailyRunning/CurrEduClsStuCRUDEx';
  //   import { CurrEduClsStuCRUD } from '@/viewsBase/DailyRunning/CurrEduClsStuCRUD';
  import CurrEduClsStu_EditCom from '@/viewsShare/DailyRunning/CurrEduClsStu_Edit.vue';
  import { CurrEduClsStu_Edit } from '@/viewsBase/DailyRunning/CurrEduClsStu_Edit';
  import { CurrEduClsStuCRUD } from '@/viewsBase/DailyRunning/CurrEduClsStuCRUD';
  export default defineComponent({
    name: 'CurrEduClsStuCRUD',
    components: {
      // 组件注册
      CurrEduClsStu_EditCom,
    },
    setup() {
      const strTitle = ref('教学班与学生关系维护');
      const CurrEduClsStu_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new CurrEduClsStuCRUDEx(refDivLayout.value);
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
            CurrEduClsStuCRUD.EditObj = CurrEduClsStu_EditRef.value;
            CurrEduClsStu_Edit.EditObj = CurrEduClsStu_EditRef.value;
            break;
          default:
            break;
        }
        CurrEduClsStuCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        CurrEduClsStu_EditRef,
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
@/viewsBase/DailyRunning/CurrEduClsStu_Edit@/viewsBase/DailyRunning/CurrEduClsStuCRUD
@/viewsShare/DailyRunning/CurrEduClsStuCRUDEx
