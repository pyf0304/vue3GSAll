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
              id="lblMessagePushId_q"
              name="lblMessagePushId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >消息Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMessagePushId_q"
              name="txtMessagePushId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblMessagePushNumber_q"
              name="lblMessagePushNumber_q"
              class="col-form-label text-right"
              style="width: 90px"
              >消息编号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMessagePushNumber_q"
              name="txtMessagePushNumber_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblMessageTitle_q"
              name="lblMessageTitle_q"
              class="col-form-label text-right"
              style="width: 90px"
              >消息标题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMessageTitle_q"
              name="txtMessageTitle_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblMessageContent_q"
              name="lblMessageContent_q"
              class="col-form-label text-right"
              style="width: 90px"
              >消息内容
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMessageContent_q"
              name="txtMessageContent_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblReceivePeople_q"
              name="lblReceivePeople_q"
              class="col-form-label text-right"
              style="width: 90px"
              >接收人员
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtReceivePeople_q"
              name="txtReceivePeople_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblMessageTypeId_q"
              name="lblMessageTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >消息类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMessageTypeId_q"
              name="txtMessageTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 120px">
              <input
                id="chkIsAllpush_q"
                name="chkIsAllpush_q"
                type="checkbox"
                Text="是否全体推送"
              /><label for="chkIsAllpush_q">是否全体推送</label></span
            >
          </td>
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 120px">
              <input
                id="chkIsReceive_q"
                name="chkIsReceive_q"
                type="checkbox"
                Text="是否接收"
              /><label for="chkIsReceive_q">是否接收</label></span
            >
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblClientVersionTypeId_q"
              name="lblClientVersionTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >客户端版本类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtClientVersionTypeId_q"
              name="txtClientVersionTypeId_q"
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
            id="lblMessagePushList"
            name="lblMessagePushList"
            class="col-form-label text-info"
            style="width: 250px"
            >消息推送列表
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
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CreateWithMaxId', '')"
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
      <input id="hidSortMessagePushBy" type="hidden" />
    </div>
    <!--编辑层-->
    <MessagePush_EditCom ref="MessagePush_EditRef"></MessagePush_EditCom>
    <!--详细信息层-->
    <MessagePush_DetailCom ref="MessagePush_DetailRef"></MessagePush_DetailCom>
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
  import { MessagePushCRUDEx } from '@/views/NewsAnn/MessagePushCRUDEx';
  import { MessagePushCRUD } from '@/viewsBase/NewsAnn/MessagePushCRUD';
  import MessagePush_EditCom from '@/views/NewsAnn/MessagePush_Edit.vue';
  import MessagePush_DetailCom from '@/views/NewsAnn/MessagePush_Detail.vue';
  import { MessagePush_Edit } from '@/viewsBase/NewsAnn/MessagePush_Edit';
  import { MessagePush_Detail } from '@/viewsBase/NewsAnn/MessagePush_Detail';
  export default defineComponent({
    name: 'MessagePushCRUD',
    components: {
      // 组件注册
      MessagePush_EditCom,
      MessagePush_DetailCom,
    },
    setup() {
      const strTitle = ref('消息推送维护');
      const MessagePush_EditRef = ref();
      const MessagePush_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new MessagePushCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            MessagePushCRUD.DetailObj = MessagePush_DetailRef.value;
            MessagePush_Detail.DetailObj = MessagePush_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            MessagePushCRUD.EditObj = MessagePush_EditRef.value;
            MessagePush_Edit.EditObj = MessagePush_EditRef.value;
            break;
          default:
            break;
        }
        MessagePushCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        MessagePush_EditRef,
        MessagePush_DetailRef,
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
@/viewsShare/NewsAnn/MessagePushCRUDEx
