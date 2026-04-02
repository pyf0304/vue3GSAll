<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <!--标题层-->

    <div id="divFunction" style="float: right; margin-right: 0px; margin-top: 10px">
      <ul class="nav">
        <li class="nav-item">
          <label id="lblThesisList" class="col-form-label text-info" style="width: 100%"> </label>
        </li>
        <li class="nav-item ml-3" style="float: right">
          <button class="layui-btn" @click="btn_Click('AddNewPaperRela', '')"
            ><font-awesome-icon icon="square-plus" />添加论文</button
          >
        </li>
        <li class="nav-item ml-3" style="float: right">
          <button class="layui-btn" @click="btn_Click('AddRelaPaper', '')"
            ><font-awesome-icon icon="square-plus" />选择引用论文</button
          >
        </li>
      </ul>
    </div>
    <div id="divRtPaperRela00" class="div_List">
      <div id="divRtCitedPaperRelaDataLst">
        <div class="layui-row layui-col-space15">
          <div class="layui-col-md12">
            <div id="divRtPaperRela" class="layui-card">
              <div class="layui-card-body">
                <table class="layui-table layui-form">
                  <thead>
                    <tr>
                      <th width="50">标识</th>
                      <th width="320">论文子资源</th>
                      <th width="160">资源类型</th>
                      <th width="110">编辑日期</th>
                      <th width="80">编辑用户</th>
                      <th width="100">统计</th>
                      <th width="80">操作</th>
                    </tr>
                  </thead>
                  <tbody id="tbPaperRelaDataLst" class="x-cate"></tbody>
                </table>
              </div>
              <div id="divPager" class="pager" value="1"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <P_Paper_EditV2Com ref="P_Paper_EditV2Ex_EditRef"></P_Paper_EditV2Com>
    <PaperLstSelCom ref="PapersLst_EditRef" :topicId="topicId"></PaperLstSelCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { RTPaperRelaListInEx } from '@/views/GradEduTopic/RTPaperRelaListInEx';
  import { RTPaperRelaCRUD } from '@/viewsBase/GradEduTopic/RTPaperRelaCRUD';
  import RTPaperRela_EditCom from '@/views/GradEduTopic/RTPaperRela_Edit.vue';
  import { RTPaperRela_Edit } from '@/viewsBase/GradEduTopic/RTPaperRela_Edit';
  import { Paper_Edit } from '@/viewsBase/GradEduPaper/Paper_Edit';
  import { PaperLstSel } from '@/views/GradEduTopic/PaperLstSel';
  import P_Paper_EditV2Com from '@/views/GradEduPublicPage/P_Paper_EditV2.vue';
  import PaperLstSelCom from '@/views/GradEduTopic/PaperLstSel.vue';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  export default defineComponent({
    name: 'RTPaperRelaListIn',
    components: {
      // 组件注册
      RTPaperRela_EditCom,
      P_Paper_EditV2Com,
      PaperLstSelCom,
    },
    setup() {
      const topicId = ref('');
      const P_Paper_EditV2Ex_EditRef = ref();
      const PapersLst_EditRef = ref();
      const strTitle = ref('RTPaperRela维护');
      const RTPaperRela_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        if (clsPrivateSessionStorage.topicIdInTree != '')
          topicId.value = clsPrivateSessionStorage.topicIdInTree;
        RTPaperRelaCRUD.vuebtn_Click = btn_Click;
        RTPaperRelaCRUD.GetPropValue = GetPropValue;
        const objPage = new RTPaperRelaListInEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        // objPage.PageLoadCache();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            RTPaperRelaCRUD.EditObj = RTPaperRela_EditRef.value;
            RTPaperRela_Edit.EditObj = RTPaperRela_EditRef.value;
            break;
          case 'AddNewPaperRela':
            // P_Paper_EditV2Ex.EditObj = P_Paper_EditV2Ex_EditRef.value;
            Paper_Edit.EditObj = P_Paper_EditV2Ex_EditRef.value;
            console.log('Paper_Edit.EditRef:', Paper_Edit.EditObj);
            break;
          case 'AddRelaPaper':
            PaperLstSel.EditObj = PapersLst_EditRef.value;
            console.log('PaperLstSel.EditRef:', PaperLstSel.EditRef);
            break;
          default:
            break;
        }
        RTPaperRelaListInEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'idCurrEduCls':
            return ''; //idCurrEduCls.value;
          case 'topicId':
            if (topicId.value == '') {
              if (clsPrivateSessionStorage.topicIdInTree != '')
                topicId.value = clsPrivateSessionStorage.topicIdInTree;
            }
            return topicId.value;
          default:
            return '';
        }
        return '';
      }
      return {
        strTitle,
        btn_Click,
        RTPaperRela_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        P_Paper_EditV2Com,
        P_Paper_EditV2Ex_EditRef,
        PapersLst_EditRef,
        topicId,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
