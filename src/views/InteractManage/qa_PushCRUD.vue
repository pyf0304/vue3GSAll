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
              id="lblQuestionsId_q"
              name="lblQuestionsId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >提问Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtQuestionsId_q"
              name="txtQuestionsId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblQuestionsContent_q"
              name="lblQuestionsContent_q"
              class="col-form-label text-right"
              style="width: 90px"
              >提问内容
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtQuestionsContent_q"
              name="txtQuestionsContent_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblReceiveUser_q"
              name="lblReceiveUser_q"
              class="col-form-label text-right"
              style="width: 90px"
              >接收用户
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtReceiveUser_q"
              name="txtReceiveUser_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblReceiveDate_q"
              name="lblReceiveDate_q"
              class="col-form-label text-right"
              style="width: 90px"
              >接收日期
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtReceiveDate_q"
              name="txtReceiveDate_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
        <tr>
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
              style="width: 120px"
            />
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
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 120px">
              <input id="chkIsEnd_q" name="chkIsEnd_q" type="checkbox" Text="是否结束" /><label
                for="chkIsEnd_q"
                >是否结束</label
              ></span
            >
          </td>
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
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblPdfContent_q"
              name="lblPdfContent_q"
              class="col-form-label text-right"
              style="width: 90px"
              >Pdf内容
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPdfContent_q"
              name="txtPdfContent_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblQaPaperId_q"
              name="lblQaPaperId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >论文答疑Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtQaPaperId_q"
              name="txtQaPaperId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 120px">
              <input
                id="chkIsPublic_q"
                name="chkIsPublic_q"
                type="checkbox"
                Text="是否公开"
              /><label for="chkIsPublic_q">是否公开</label></span
            >
          </td>
          <td class="text-right">
            <label
              id="lblPaperId_q"
              name="lblPaperId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >论文Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPaperId_q"
              name="ddlPaperId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblPaperTitle_q"
              name="lblPaperTitle_q"
              class="col-form-label text-right"
              style="width: 90px"
              >论文标题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPaperTitle_q"
              name="txtPaperTitle_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 120px">
              <input id="chkIsReply_q" name="chkIsReply_q" type="checkbox" Text="是否回复" /><label
                for="chkIsReply_q"
                >是否回复</label
              ></span
            >
          </td>
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 120px">
              <input
                id="chkIsRequestReply_q"
                name="chkIsRequestReply_q"
                type="checkbox"
                Text="是否要求回复"
              /><label for="chkIsRequestReply_q">是否要求回复</label></span
            >
          </td>
          <td class="text-right">
            <label
              id="lblReplyDate_q"
              name="lblReplyDate_q"
              class="col-form-label text-right"
              style="width: 90px"
              >回复日期
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtReplyDate_q"
              name="txtReplyDate_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
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
            id="lblqa_PushList"
            name="lblqa_PushList"
            class="col-form-label text-info"
            style="width: 250px"
            >答疑推送列表
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
      <input id="hidSortvqa_PushBy" type="hidden" />
    </div>
    <!--编辑层-->
    <qa_Push_EditCom ref="qa_Push_EditRef"></qa_Push_EditCom>
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
  import { qa_PushCRUDEx } from '@/views/InteractManage/qa_PushCRUDEx';

  import qa_Push_EditCom from '@/views/InteractManage/qa_Push_Edit.vue';
  import { qa_Push_Edit } from '@/viewsBase/InteractManage/qa_Push_Edit';
  export default defineComponent({
    name: 'QaPushCRUD',
    components: {
      // 组件注册
      qa_Push_EditCom,
    },
    setup() {
      const strTitle = ref('答疑推送维护');
      const qa_Push_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new qa_PushCRUDEx(refDivLayout.value);
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
            qa_Push_Edit.EditObj = qa_Push_EditRef.value;
            break;
          default:
            break;
        }
        qa_PushCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        qa_Push_EditRef,
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
