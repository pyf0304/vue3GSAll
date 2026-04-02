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
              id="lblStuId_q"
              name="lblStuId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >学号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtStuId_q"
              name="txtStuId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblStuName_q"
              name="lblStuName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >姓名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtStuName_q"
              name="txtStuName_q"
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
              v-model="idXzCollege"
              id="ddlIdXzCollege_q"
              name="ddlIdXzCollege_q"
              class="form-control form-control-sm"
              style="width: 120px"
              @change="ddlIdXzCollege_SelectedIndexChanged"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIdXzMajor_q"
              name="lblIdXzMajor_q"
              class="col-form-label text-right"
              style="width: 90px"
              >专业
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdXzMajor_q"
              name="ddlIdXzMajor_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblIdGradeBase_q"
              name="lblIdGradeBase_q"
              class="col-form-label text-right"
              style="width: 90px"
              >年级
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdGradeBase_q"
              name="ddlIdGradeBase_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIdGrade_q"
              name="lblIdGrade_q"
              class="col-form-label text-right"
              style="width: 90px"
              >中小学年级
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdGrade_q"
              name="ddlIdGrade_q"
              class="form-control form-control-sm"
              style="width: 200px"
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
            id="lblStudentInfoList"
            name="lblStudentInfoList"
            class="col-form-label text-info"
            style="width: 250px"
            >学生列表
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
        <li class="nav-item ml-3">
          <button
            id="btnSynchToPlat"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('SynchToPlat', '')"
            >同步到平台</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvStudentInfoBy" type="hidden" />
    </div>
    <!--编辑层-->
    <StudentInfo_EditCom ref="StudentInfo_EditRef"></StudentInfo_EditCom>
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
  import { StudentInfoCRUDEx } from '@/viewsShare/UserManage/StudentInfoCRUDEx';
  import { StudentInfoCRUD } from '@/viewsBase/UserManage/StudentInfoCRUD';
  import StudentInfo_EditCom from '@/viewsShare/UserManage/StudentInfo_Edit.vue';
  import { StudentInfo_Edit } from '@/viewsBase/UserManage/StudentInfo_Edit';
  import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache } from '@/ts/L3ForWApi/BaseInfo/clsXzMajorWApi';
  export default defineComponent({
    name: 'StudentInfoCRUD',
    components: {
      // 组件注册
      StudentInfo_EditCom,
    },
    setup() {
      const idXzCollege = ref('');
      const strTitle = ref('学生维护');
      const StudentInfo_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new StudentInfoCRUDEx(refDivLayout.value);
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
            StudentInfoCRUD.EditObj = StudentInfo_EditRef.value;
            StudentInfo_Edit.EditObj = StudentInfo_EditRef.value;
            break;
          case 'SynchToPlat':
            break;
          default:
            break;
        }
        StudentInfoCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        StudentInfo_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        idXzCollege,
      };
    },

    methods: {
      // 方法定义
      async ddlIdXzCollege_SelectedIndexChanged() {
        const strId_college = this.idXzCollege;
        if (IsNullOrEmpty(strId_college) == false) {
          await XzMajor_BindDdl_IdXzMajorByIdXzCollegeInDivCache(
            this.refDivQuery,
            'ddlIdXzMajor_q',
            strId_college,
          );
        }
        //            SetDdl_id_Major();
      },
    },
  });
</script>
<style scoped></style>
@/viewsShare/UserManage/StudentInfoCRUDEx
