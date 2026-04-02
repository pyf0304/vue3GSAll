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
            <span id="spnQuestionsId_d" name="spnQuestionsId_d" CssClass="col-form-label text-right"
              >提问Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblQuestionsId_d"
              name="lblQuestionsId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnPaperId_d" name="spnPaperId_d" CssClass="col-form-label text-right"
              >论文Id</span
            >
          </td>
          <td class="text-left">
            <label id="lblPaperId_d" name="lblPaperId_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnIsSubmit_d" name="spnIsSubmit_d" CssClass="col-form-label text-right"
              >是否提交</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblIsSubmit_d"
              name="lblIsSubmit_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnQaPaperId_d" name="spnQaPaperId_d" CssClass="col-form-label text-right"
              >论文答疑Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblQaPaperId_d"
              name="lblQaPaperId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnQuestionsContent_d"
              name="spnQuestionsContent_d"
              CssClass="col-form-label text-right"
              >提问内容</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblQuestionsContent_d"
              name="lblQuestionsContent_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnPdfContent_d" name="spnPdfContent_d" CssClass="col-form-label text-right"
              >Pdf内容</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblPdfContent_d"
              name="lblPdfContent_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnPdfPageNum_d" name="spnPdfPageNum_d" CssClass="col-form-label text-right"
              >Pdf页码</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblPdfPageNum_d"
              name="lblPdfPageNum_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnIsDelete_d" name="spnIsDelete_d" CssClass="col-form-label text-right"
              >是否删除</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblIsDelete_d"
              name="lblIsDelete_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnIsPublic_d" name="spnIsPublic_d" CssClass="col-form-label text-right"
              >是否公开</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblIsPublic_d"
              name="lblIsPublic_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnIsEnd_d" name="spnIsEnd_d" CssClass="col-form-label text-right"
              >是否结束</span
            >
          </td>
          <td class="text-left">
            <label id="lblIsEnd_d" name="lblIsEnd_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnVoteCount_d" name="spnVoteCount_d" CssClass="col-form-label text-right"
              >点赞计数</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblVoteCount_d"
              name="lblVoteCount_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnAnswerCount_d" name="spnAnswerCount_d" CssClass="col-form-label text-right"
              >回答计数</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblAnswerCount_d"
              name="lblAnswerCount_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnOrderNum_d" name="spnOrderNum_d" CssClass="col-form-label text-right"
              >序号</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblOrderNum_d"
              name="lblOrderNum_d"
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
        <tr>
          <td class="text-right">
            <span id="spnUserName_d" name="spnUserName_d" CssClass="col-form-label text-right"
              >用户名</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblUserName_d"
              name="lblUserName_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnIdCurrEduCls_d"
              name="spnIdCurrEduCls_d"
              CssClass="col-form-label text-right"
              >当前教学班流水号</span
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
        </tr>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelqa_Questions" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { qa_Questions_DetailEx } from '@/views/InteractManage/qa_Questions_DetailEx';
  export default defineComponent({
    name: 'QaQuestionsDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('答疑提问表详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelqa_Questions':
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
          case 'btnCancelqa_Questions':
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
      btnqa_Questions_Detail_Click(strCommandName: string, strKeyId: string) {
        qa_Questions_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
