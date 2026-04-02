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
        style="width: 200px"
        class="table table-bordered table-hover table td table-sm"
      >
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
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblOperationTypeId_q"
              name="lblOperationTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >操作类型ID
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlOperationTypeId_q"
              name="ddlOperationTypeId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblPaperReadWriteList"
            name="lblPaperReadWriteList"
            class="col-form-label text-info"
            style="width: 250px"
            >论文读写表列表
          </label>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvPaperReadWriteBy" type="hidden" />
    </div>
    <!--编辑层-->
    <PaperReadWrite_EditCom ref="PaperReadWrite_EditRef"></PaperReadWrite_EditCom>
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
  import { PaperReadWriteCRUDEx } from '@/views/GradEduPaper/PaperReadWriteCRUDEx';
  import { PaperReadWriteCRUD } from '@/viewsBase/GradEduPaper/PaperReadWriteCRUD';
  import PaperReadWrite_EditCom from '@/views/GradEduPaper/PaperReadWrite_Edit.vue';
  import { PaperReadWrite_Edit } from '@/viewsBase/GradEduPaper/PaperReadWrite_Edit';
  export default defineComponent({
    name: 'PaperReadWriteCRUD',
    components: {
      // 组件注册
      PaperReadWrite_EditCom,
    },
    setup() {
      const strTitle = ref('论文读写表维护');
      const PaperReadWrite_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new PaperReadWriteCRUDEx(refDivLayout.value);
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
            PaperReadWriteCRUD.EditObj = PaperReadWrite_EditRef.value;
            PaperReadWrite_Edit.EditObj = PaperReadWrite_EditRef.value;
            break;
          default:
            break;
        }
        PaperReadWriteCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        PaperReadWrite_EditRef,
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
