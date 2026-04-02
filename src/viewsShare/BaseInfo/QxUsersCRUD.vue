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
        style="width: 200px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
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
              style="width: 100px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblUserName_q"
              name="lblUserName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >用户名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUserName_q"
              name="txtUserName_q"
              class="form-control form-control-sm"
              style="width: 100px"
            />
          </td>
          <!-- <td class="text-right">
            <label
              id="lblDepartmentId_q"
              name="lblDepartmentId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >部门
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDepartmentId_q"
              name="ddlDepartmentId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td> -->
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
              style="width: 80px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblIdentityId_q"
              name="lblIdentityId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >身份
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdentityId_q"
              class="form-control form-control-sm"
              style="width: 80px"
            ></select>
          </td>
          <td class="text-left">
            <button
              id="btnQuery"
              name="btnQuery"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              class="btn btn-outline-warning btn-sm text-nowrap"
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
            id="lblQxUsersList"
            name="lblQxUsersList"
            class="col-form-label text-info"
            style="width: 250px"
            >Qx用户列表
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
          <select
            v-model="roleId"
            ref="ddlRoleId"
            id="ddlRoleId"
            class="form-control form-control-sm"
            style="width: 80px"
          ></select>
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnSetRole"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('SetRole', '')"
            >设置角色</button
          >
        </li>

        <li class="nav-item ml-3">
          <select
            v-model="detailInfoTab"
            ref="ddlDetailInfoTab"
            id="ddlDetailInfoTab"
            class="form-control form-control-sm"
            style="width: 100px"
          >
            <option value="unknown">未知</option>
            <option value="StudentInfo">学生信息表</option>
            <option value="TeacherInfo">教师信息表</option>
            <option value="CompanyInfo">公司信息表</option></select
          >
        </li>

        <li class="nav-item ml-3">
          <button
            id="btnSetDetailInfoTab"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('SetDetailInfoTab', '')"
            >设置详细信息表</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortQxUsersBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxUsers_EditCom ref="QxUsers_EditRef"></QxUsers_EditCom>
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
  import { QxUsersCRUDEx } from '@/viewsShare/BaseInfo/QxUsersCRUDEx';
  import { QxUsersCRUD } from '@/viewsBase/BaseInfo/QxUsersCRUD';
  import QxUsers_EditCom from '@/viewsShare/BaseInfo/QxUsers_Edit.vue';
  import { QxUsers_Edit } from '@/viewsBase/BaseInfo/QxUsers_Edit';
  import { message } from '@/utils/myMessage';
  export default defineComponent({
    name: 'QxUsersCRUD',
    components: {
      // 组件注册
      QxUsers_EditCom,
    },
    setup() {
      const detailInfoTab = ref('unknown');
      const roleId = ref('');
      const ddlRoleId = ref();
      const ddlDetailInfoTab = ref();

      const strTitle = ref('Qx用户维护');
      const QxUsers_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      onMounted(() => {
        QxUsersCRUDEx.vuebtn_Click = btn_Click;
        QxUsersCRUDEx.GetPropValue = GetPropValue;
        const objPage = new QxUsersCRUDEx(refDivLayout.value);
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
          case 'detailInfoTab':
            return detailInfoTab.value;
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
            QxUsersCRUD.EditObj = QxUsers_EditRef.value;
            QxUsers_Edit.EditObj = QxUsers_EditRef.value;
            break;

          case 'SetRole':
            if (roleId.value == '') {
              message.warning('请选择一个角色！');
              ddlRoleId.value.focus();
              return;
            }
            QxUsersCRUDEx.btn_Click(strCommandName, roleId.value, refDivLayout.value);
            return;
          case 'SetDetailInfoTab':
            if (detailInfoTab.value == '' || detailInfoTab.value == 'unknown') {
              message.warning('请选择一个合适的信息表！');
              ddlDetailInfoTab.value.focus();
              return;
            }
            QxUsersCRUDEx.btn_Click(strCommandName, detailInfoTab.value, refDivLayout.value);
            return;

          case 'DelRole':
            console.log(strCommandName, strKeyId);
            break;

          default:
            break;
        }
        QxUsersCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      function myTest() {
        alert('myTest');
      }
      return {
        strTitle,
        btn_Click,
        QxUsers_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        roleId,
        ddlRoleId,
        myTest,
        detailInfoTab,
        ddlDetailInfoTab,
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
