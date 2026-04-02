<template>
  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
      <!-- 详细信息层 -->

      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <span id="spnTopicId_d" name="spnTopicId_d" CssClass="col-form-label text-right"
              >主题Id</span
            >
          </td>
          <td class="text-left">
            <label id="lblTopicId_d" name="lblTopicId_d" class="text-primary" style="width: 150px">
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnProposePeople_d"
              name="spnProposePeople_d"
              CssClass="col-form-label text-right"
              >提出人</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblProposePeople_d"
              name="lblProposePeople_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spngsKnowledgeTypeId_d"
              name="spngsKnowledgeTypeId_d"
              CssClass="col-form-label text-right"
              >知识类型Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblgsKnowledgeTypeId_d"
              name="lblgsKnowledgeTypeId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnClassificationId_d"
              name="spnClassificationId_d"
              CssClass="col-form-label text-right"
              >分类Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblClassificationId_d"
              name="lblClassificationId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnIdCurrEduCls_d"
              name="spnIdCurrEduCls_d"
              CssClass="col-form-label text-right"
              >教学班流水号</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblIdCurrEduCls_d"
              name="lblIdCurrEduCls_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">备注</span>
          </td>
          <td class="text-left">
            <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelRTViewpoint" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { RTViewpoint_DetailEx } from '@/views/GradEduTopic/RTViewpoint_DetailEx';
  export default defineComponent({
    name: 'RTViewpointDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('主题观点关系详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelRTViewpoint':
            strCancelButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelRTViewpoint':
            return strCancelButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        hideDialog,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
      };
    },

    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
      },

      /**
       *按钮单击,用于调用Js函数中btnDetail_Click
       *(AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_JS_btnDetail_Click)
       **/
      btnRTViewpoint_Detail_Click(strCommandName: string, strKeyId: string) {
        RTViewpoint_DetailEx.btnDetail_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
