<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层 -->
      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">用户管理</a>
          <a>
            <cite> 用户维护</cite>
          </a>
          <label id="lblMsg_List" name="lblMsg_List"></label>
        </span>
        <a
          class="layui-btn layui-btn-small"
          style="line-height: 1.6em; margin-top: 3px; float: right"
          @click="location_reload()"
          title="刷新"
        >
          <i class="layui-icon layui-icon-refresh" style="line-height: 30px"></i>
        </a>
      </div>
      <!-- 查询层 -->
      <div id="divQuery" ref="refDivQuery" class="div_query">
        <table
          id="tabQuery"
          name="tabQuery"
          style="width: 50%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td>
              <select
                id="ddlIdXzCollege_q"
                name="ddlIdXzCollege_q"
                class="form-control"
                style="width: 200px"
              />
            </td>

            <td>
              <select
                id="ddlIdXzMajor_q"
                name="ddlIdXzMajor_q"
                class="form-control"
                style="width: 200px"
              />
            </td>

            <td>
              <input
                id="txtUserName_q"
                name="txtUserName_q"
                placeholder="用户名"
                class="layui-input"
                style="width: 200px"
              />
            </td>
            <td>
              <button
                class="layui-btn"
                lay-submit=""
                lay-filter="sreach"
                @click="btn_Click('Query', '')"
              >
                <i class="layui-icon">&#xe615;</i>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <!-- 功能区 -->
      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lblUsersList"
              name="lblUsersList"
              class="col-form-label text-info"
              style="width: 250px"
            >
              用户列表
            </label>
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnAddNewRecord"
              name="btnAddNewRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('AddNewRecord', '')"
              >添加</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnUpdateRecord"
              name="btnUpdateRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('UpdateRecord', '')"
              >修改</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnDelRecord"
              name="btnDelRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('DelRecord', '')"
              >删除</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnAudit"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Audit', '')"
              >审核</button
            >
          </li>
        </ul>
      </div>
      <!-- 列表层 -->
      <div id="divList" ref="refDivList" class="div_List">
        <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
        <div id="divPager" class="pager" value="1"> </div>
      </div>
      <!-- 编辑层 -->
      <div
        class="modal fade"
        id="divEditRegion"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModallabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content" style="width: 800px">
            <div class="modal-header">
              <h4 class="modal-title" id="myModallabel">模态框（Modal）标题</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
              <table
                id="tabwucUsers"
                name="tabwucUsers"
                style="width: 600px; padding: 1px; border: 0px"
                class="table table-bordered table-hover"
              >
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblUserId"
                      name="lblUserId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      用户ID
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtUserId"
                      name="txtUserId"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblUserName"
                      name="lblUserName"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      用户名
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtUserName"
                      name="txtUserName"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblUserStateId"
                      name="lblUserStateId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      用户状态
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtUserStateId"
                      name="txtUserStateId"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblPassword"
                      name="lblPassword"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      Password
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtPassword"
                      name="txtPassword"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblid_GradeBase"
                      name="lblid_GradeBase"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      年级
                    </label>
                  </td>
                  <td class="ValueTD">
                    <select
                      id="ddlIdGradeBase"
                      name="ddlIdGradeBase"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblid_XzCollege"
                      name="lblid_XzCollege"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      学院
                    </label>
                  </td>
                  <td class="ValueTD">
                    <select
                      id="ddlid_XzCollege"
                      name="ddlid_XzCollege"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblid_XzMajor"
                      name="lblid_XzMajor"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      专业
                    </label>
                  </td>
                  <td class="ValueTD">
                    <select
                      id="ddlIdXzMajor"
                      name="ddlIdXzMajor"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblStuIdTeacherId"
                      name="lblStuIdTeacherId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      学工号
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtStuIdTeacherId"
                      name="txtStuIdTeacherId"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblEmail"
                      name="lblEmail"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      电子邮箱
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtEmail"
                      name="txtEmail"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblIdentityID"
                      name="lblIdentityID"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      身份编号
                    </label>
                  </td>
                  <td class="ValueTD">
                    <select
                      id="ddlIdentityId"
                      name="ddlIdentityId"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD"></td>
                  <td class="ValueTD">
                    <span class="form-control" style="width: 200px">
                      <input
                        type="checkbox"
                        id="chkIsRegister"
                        name="chkIsRegister"
                        Text="IsRegister"
                      /><label for="chkIsRegister">IsRegister</label>
                    </span>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblRegisterDate"
                      name="lblRegisterDate"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      RegisterDate
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtRegisterDate"
                      name="txtRegisterDate"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblMobilePhone"
                      name="lblMobilePhone"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      手机
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtMobilePhone"
                      name="txtMobilePhone"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblOpenId"
                      name="lblOpenId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      微信OpenId
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtOpenId"
                      name="txtOpenId"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblMemo"
                      name="lblMemo"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      备注
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input id="txtMemo" name="txtMemo" class="form-control" style="width: 200px" />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
            <div class="modal-footer">
              <button id="btnCancel" type="button" class="btn btn-default" data-dismiss="modal"
                >关闭</button
              >
              <button
                id="btnOKUpd"
                type="button"
                class="btn btn-primary"
                @click="btn_Click('mySubmit', '')"
                >添加</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal -->
      </div>
    </div>
    <Users_EditCom ref="Users_EditRef"></Users_EditCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidUserId" type="hidden" value="@Model.seUserId" />
    <input id="hidUserId1" type="hidden" value="@strUserId1_Value" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvUsersBy" type="hidden" value="" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/site.css';
  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { UsersCRUDEx } from '@/viewsShare/UserManage/UsersCRUDEx';
  import { UsersCRUD } from '@/viewsBase/UserManage/UsersCRUD';
  import Users_EditCom from '@/viewsShare/UserManage/Users_Edit.vue';
  import { Users_Edit } from '@/viewsBase/UserManage/Users_Edit';
  export default defineComponent({
    name: 'UsersCRUD',
    components: {
      // 组件注册
      Users_EditCom,
    },
    setup() {
      const strTitle = ref('用户维护');
      const Users_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new UsersCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoad();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'AddNewRecord':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            UsersCRUD.EditObj = Users_EditRef.value;
            Users_Edit.EditObj = Users_EditRef.value;
            break;
          default:
            break;
        }
        UsersCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        Users_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
      };
    },

    methods: {
      // 方法定义
      location_reload() {
        window.location.reload();
      },
    },
  });
</script>
<style scoped></style>
@/viewsShare/UserManage/UsersCRUDEx
