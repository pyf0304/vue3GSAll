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
        style="width: 1000px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblCurrEduClsId_q"
              name="lblCurrEduClsId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >教学班Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCurrEduClsId_q"
              name="txtCurrEduClsId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblEduClsName_q"
              name="lblEduClsName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >教学班
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
              id="lblTeacherID_q"
              name="lblTeacherID_q"
              class="col-form-label text-right"
              style="width: 90px"
              >教师工号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTeacherID_q"
              name="txtTeacherID_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblTeacherName_q"
              name="lblTeacherName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >教师姓名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTeacherName_q"
              name="txtTeacherName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
        <tr>
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
            id="lblCurrEduClsTeacherList"
            name="lblCurrEduClsTeacherList"
            class="col-form-label text-info"
            style="width: 250px"
            >当前教学班教师列表
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
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvCurrEduClsTeacherBy" type="hidden" />
    </div>
    <!--编辑层-->
    <CurrEduClsTeacher_EditCom ref="CurrEduClsTeacher_EditRef"></CurrEduClsTeacher_EditCom>
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
  import { CurrEduClsTeacherCRUDEx } from '@/viewsShare/DailyRunning/CurrEduClsTeacherCRUDEx';
  import { CurrEduClsTeacherCRUD } from '@/viewsBase/DailyRunning/CurrEduClsTeacherCRUD';
  import CurrEduClsTeacher_EditCom from '@/viewsShare/DailyRunning/CurrEduClsTeacher_Edit.vue';
  import { CurrEduClsTeacher_Edit } from '@/viewsBase/DailyRunning/CurrEduClsTeacher_Edit';
  export default defineComponent({
    name: 'CurrEduClsTeacherCRUD',
    components: {
      // 组件注册
      CurrEduClsTeacher_EditCom,
    },
    setup() {
      const strTitle = ref('当前教学班教师维护');
      const CurrEduClsTeacher_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      onMounted(() => {
        CurrEduClsTeacherCRUDEx.vuebtn_Click = btn_Click;
        CurrEduClsTeacherCRUDEx.GetPropValue = GetPropValue;
        const objPage = new CurrEduClsTeacherCRUDEx(refDivLayout.value);
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
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            CurrEduClsTeacherCRUD.EditObj = CurrEduClsTeacher_EditRef.value;
            CurrEduClsTeacher_Edit.EditObj = CurrEduClsTeacher_EditRef.value;
            break;
          default:
            break;
        }
        CurrEduClsTeacherCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        CurrEduClsTeacher_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
@/viewsShare/DailyRunning/CurrEduClsTeacherCRUDEx
