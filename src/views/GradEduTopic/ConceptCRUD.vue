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
              id="lblConceptName_q"
              name="lblConceptName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >概念名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtConceptName_q"
              name="txtConceptName_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-left">
            <span class="form-control form-control-sm" style="width: 200px">
              <input
                id="chkIsSubmit_q"
                name="chkIsSubmit_q"
                type="checkbox"
                Text="是否提交"
              /><label for="chkIsSubmit_q">是否提交</label></span
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
            id="lblConceptList"
            name="lblConceptList"
            class="col-form-label text-info"
            style="width: 250px"
            >观点概念列表
          </label>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortConceptBy" type="hidden" />
    </div>
    <!--编辑层-->
    <Concept_EditCom ref="Concept_EditRef"></Concept_EditCom>
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
  import { ConceptCRUDEx } from '@/views/GradEduTopic/ConceptCRUDEx';
  import { ConceptCRUD } from '@/viewsBase/GradEduTopic/ConceptCRUD';
  import Concept_EditCom from '@/views/GradEduTopic/Concept_Edit.vue';
  import { Concept_Edit } from '@/viewsBase/GradEduTopic/Concept_Edit';
  export default defineComponent({
    name: 'ConceptCRUD',
    components: {
      // 组件注册
      Concept_EditCom,
    },
    setup() {
      const strTitle = ref('观点概念维护');
      const Concept_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new ConceptCRUDEx(refDivLayout.value);
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
            ConceptCRUD.EditObj = Concept_EditRef.value;
            Concept_Edit.EditObj = Concept_EditRef.value;
            break;
          default:
            break;
        }
        ConceptCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        Concept_EditRef,
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
