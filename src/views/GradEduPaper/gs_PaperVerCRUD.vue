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
          <td class="text-right">
            <label
              id="lblPaperContent_q"
              name="lblPaperContent_q"
              class="col-form-label text-right"
              style="width: 90px"
              >主题内容
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPaperContent_q"
              name="txtPaperContent_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblPeriodical_q"
              name="lblPeriodical_q"
              class="col-form-label text-right"
              style="width: 90px"
              >期刊
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPeriodical_q"
              name="txtPeriodical_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblAuthor_q"
              name="lblAuthor_q"
              class="col-form-label text-right"
              style="width: 90px"
              >作者
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtAuthor_q"
              name="txtAuthor_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblResearchQuestion_q"
              name="lblResearchQuestion_q"
              class="col-form-label text-right"
              style="width: 90px"
              >研究问题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtResearchQuestion_q"
              name="txtResearchQuestion_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblKeyword_q"
              name="lblKeyword_q"
              class="col-form-label text-right"
              style="width: 90px"
              >关键字
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtKeyword_q"
              name="txtKeyword_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblLiteratureSources_q"
              name="lblLiteratureSources_q"
              class="col-form-label text-right"
              style="width: 90px"
              >文献来源
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLiteratureSources_q"
              name="txtLiteratureSources_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblLiteratureLink_q"
              name="lblLiteratureLink_q"
              class="col-form-label text-right"
              style="width: 90px"
              >文献链接
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLiteratureLink_q"
              name="txtLiteratureLink_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblUploadfileUrl_q"
              name="lblUploadfileUrl_q"
              class="col-form-label text-right"
              style="width: 90px"
              >文件地址
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUploadfileUrl_q"
              name="txtUploadfileUrl_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 120px">
              <input
                id="chkIsQuotethesis_q"
                name="chkIsQuotethesis_q"
                type="checkbox"
                Text="是否引用论文"
              /><label for="chkIsQuotethesis_q">是否引用论文</label></span
            >
          </td>
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 120px">
              <input
                id="chkIsSubmit_q"
                name="chkIsSubmit_q"
                type="checkbox"
                Text="是否提交"
              /><label for="chkIsSubmit_q">是否提交</label></span
            >
          </td>
        </tr>
        <tr>
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 120px">
              <input
                id="chkIsChecked_q"
                name="chkIsChecked_q"
                type="checkbox"
                Text="是否检查"
              /><label for="chkIsChecked_q">是否检查</label></span
            >
          </td>
          <td class="text-right">
            <label
              id="lblQuoteId_q"
              name="lblQuoteId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >引用Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtQuoteId_q"
              name="txtQuoteId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblChecker_q"
              name="lblChecker_q"
              class="col-form-label text-right"
              style="width: 90px"
              >审核人
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtChecker_q"
              name="txtChecker_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblLiteratureTypeId_q"
              name="lblLiteratureTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >作文类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLiteratureTypeId_q"
              name="txtLiteratureTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblIdCurrEduCls_q"
              name="lblIdCurrEduCls_q"
              class="col-form-label text-right"
              style="width: 90px"
              >教学班流水号
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
              id="lblPaperTypeId_q"
              name="lblPaperTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >论文类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPaperTypeId_q"
              name="txtPaperTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblPaperStatusId_q"
              name="lblPaperStatusId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >论文状态Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPaperStatusId_q"
              name="txtPaperStatusId_q"
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
            id="lblgs_PaperVerList"
            name="lblgs_PaperVerList"
            class="col-form-label text-info"
            style="width: 250px"
            >论文历史版本表列表
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
      <div id="divDataLst" ref="refDivDataLst" class="divdiv_DataList_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortgs_PaperVerBy" type="hidden" />
    </div>
    <!--编辑层-->
    <gs_PaperVer_EditCom ref="gs_PaperVer_EditRef"></gs_PaperVer_EditCom>
    <!--详细信息层-->
    <gs_PaperVer_DetailCom ref="gs_PaperVer_DetailRef"></gs_PaperVer_DetailCom>
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
  import { gs_PaperVerCRUD } from '@/viewsBase/GradEduPaper/gs_PaperVerCRUD';

  import gs_PaperVer_EditCom from '@/views/GradEduPaper/gs_PaperVer_Edit.vue';
  import gs_PaperVer_DetailCom from '@/views/GradEduPaper/gs_PaperVer_Detail.vue';
  import { gs_PaperVer_Edit } from '@/viewsBase/GradEduPaper/gs_PaperVer_Edit';
  import { gs_PaperVer_Detail } from '@/viewsBase/GradEduPaper/gs_PaperVer_Detail';
  export default defineComponent({
    name: 'GsPaperVerCRUD',
    components: {
      // 组件注册
      gs_PaperVer_EditCom,
      gs_PaperVer_DetailCom,
    },
    setup() {
      const strTitle = ref('论文历史版本表维护');
      const gs_PaperVer_EditRef = ref();
      const gs_PaperVer_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
 
        const objPage = new gs_PaperVerCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            gs_PaperVerCRUD.DetailObj = gs_PaperVer_DetailRef.value;
            gs_PaperVer_Detail.DetailObj = gs_PaperVer_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            gs_PaperVerCRUD.EditObj = gs_PaperVer_EditRef.value;
            gs_PaperVer_Edit.EditObj = gs_PaperVer_EditRef.value;
            break;
          default:
            break;
        }
        gs_PaperVerCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        gs_PaperVer_EditRef,
        gs_PaperVer_DetailRef,
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
