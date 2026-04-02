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
              id="lblLoginLogNumber_q"
              name="lblLoginLogNumber_q"
              class="col-form-label text-right"
              style="width: 90px"
              >LoginLogNumber
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLoginLogNumber_q"
              name="txtLoginLogNumber_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblLoginIP_q"
              name="lblLoginIP_q"
              class="col-form-label text-right"
              style="width: 90px"
              >LoginIP
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLoginIP_q"
              name="txtLoginIP_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblFailReason_q"
              name="lblFailReason_q"
              class="col-form-label text-right"
              style="width: 90px"
              >FailReason
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFailReason_q"
              name="txtFailReason_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblLoginResult_q"
              name="lblLoginResult_q"
              class="col-form-label text-right"
              style="width: 90px"
              >LoginResult
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLoginResult_q"
              name="txtLoginResult_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblLoginTime_q"
              name="lblLoginTime_q"
              class="col-form-label text-right"
              style="width: 90px"
              >LoginTime
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLoginTime_q"
              name="txtLoginTime_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblLoginUserId_q"
              name="lblLoginUserId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >LoginUserId
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLoginUserId_q"
              name="txtLoginUserId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblOnlineTime_q"
              name="lblOnlineTime_q"
              class="col-form-label text-right"
              style="width: 90px"
              >OnlineTime
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtOnlineTime_q"
              name="txtOnlineTime_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblOutTime_q"
              name="lblOutTime_q"
              class="col-form-label text-right"
              style="width: 90px"
              >OutTime
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtOutTime_q"
              name="txtOutTime_q"
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
            id="lblLoginLogList"
            name="lblLoginLogList"
            class="col-form-label text-info"
            style="width: 250px"
            >登录日志列表
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
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortLoginLogBy" type="hidden" />
    </div>
    <!--编辑层-->
    <LoginLog_EditCom ref="LoginLog_EditRef"></LoginLog_EditCom>
    <!--详细信息层-->
    <LoginLog_DetailCom ref="LoginLog_DetailRef"></LoginLog_DetailCom>
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
  import { LoginLogCRUDEx } from '@/viewsShare/LogManage/LoginLogCRUDEx';
  import { LoginLogCRUD } from '@/viewsBase/LogManage/LoginLogCRUD';
  import LoginLog_EditCom from '@/viewsShare/LogManage/LoginLog_Edit.vue';
  import LoginLog_DetailCom from '@/viewsShare/LogManage/LoginLog_Detail.vue';
  import { LoginLog_Edit } from '@/viewsBase/LogManage/LoginLog_Edit';
  import { LoginLog_Detail } from '@/viewsBase/LogManage/LoginLog_Detail';
  export default defineComponent({
    name: 'LoginLogCRUD',
    components: {
      // 组件注册
      LoginLog_EditCom,
      LoginLog_DetailCom,
    },
    setup() {
      const strTitle = ref('登录日志维护');
      const LoginLog_EditRef = ref();
      const LoginLog_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new LoginLogCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            LoginLogCRUD.DetailObj = LoginLog_DetailRef.value;
            LoginLog_Detail.DetailObj = LoginLog_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            LoginLogCRUD.EditObj = LoginLog_EditRef.value;
            LoginLog_Edit.EditObj = LoginLog_EditRef.value;
            break;
          default:
            break;
        }
        LoginLogCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        LoginLog_EditRef,
        LoginLog_DetailRef,
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
@/viewsShare/LogManage/LoginLogCRUDEx
