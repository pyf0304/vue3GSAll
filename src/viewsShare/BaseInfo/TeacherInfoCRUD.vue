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
              id="lblTeacherId_q"
              name="lblTeacherId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >教师工号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTeacherId_q"
              name="txtTeacherId_q"
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
          <td class="text-right">
            <label
              id="lblIdXzCollege_q"
              name="lblIdXzCollege_q"
              class="col-form-label text-right"
              style="width: 90px"
              >学院
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdXzCollege_q"
              name="ddlIdXzCollege_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIdStaffType_q"
              name="lblIdStaffType_q"
              class="col-form-label text-right"
              style="width: 90px"
              >职工类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdStaffType_q"
              name="ddlIdStaffType_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr>
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
            id="lblTeacherInfoList"
            name="lblTeacherInfoList"
            class="col-form-label text-info"
            style="width: 250px"
            >教师列表
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
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortTeacherInfoBy" type="hidden" />
    </div>
    <!--编辑层-->
    <TeacherInfo_EditCom ref="TeacherInfo_EditRef"></TeacherInfo_EditCom>
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
  import { TeacherInfoCRUDEx } from '@/viewsShare/BaseInfo/TeacherInfoCRUDEx';
  import { TeacherInfoCRUD } from '@/viewsBase/BaseInfo/TeacherInfoCRUD';
  import TeacherInfo_EditCom from '@/viewsShare/BaseInfo/TeacherInfo_Edit.vue';
  import { TeacherInfo_Edit } from '@/viewsBase/BaseInfo/TeacherInfo_Edit';
  export default defineComponent({
    name: 'TeacherInfoCRUD',
    components: {
      // 组件注册
      TeacherInfo_EditCom,
    },
    setup() {
      const strTitle = ref('教师维护');
      const TeacherInfo_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      onMounted(() => {
        TeacherInfoCRUDEx.vuebtn_Click = btn_Click;
        TeacherInfoCRUDEx.GetPropValue = GetPropValue;
        const objPage = new TeacherInfoCRUDEx(refDivLayout.value);
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
            TeacherInfoCRUD.EditObj = TeacherInfo_EditRef.value;
            TeacherInfo_Edit.EditObj = TeacherInfo_EditRef.value;
            break;
          default:
            break;
        }
        TeacherInfoCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        TeacherInfo_EditRef,
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
