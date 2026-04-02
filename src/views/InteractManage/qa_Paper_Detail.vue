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
            <span
              id="spnQuestionsCount_d"
              name="spnQuestionsCount_d"
              CssClass="col-form-label text-right"
              >提问计数</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblQuestionsCount_d"
              name="lblQuestionsCount_d"
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
            <span id="spnUpdUser_d" name="spnUpdUser_d" CssClass="col-form-label text-right"
              >修改人</span
            >
          </td>
          <td class="text-left">
            <label id="lblUpdUser_d" name="lblUpdUser_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">备注</span>
          </td>
          <td class="text-left">
            <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
            </label>
          </td>
          <td class="text-right">
            <span id="spnPaperTitle_d" name="spnPaperTitle_d" CssClass="col-form-label text-right"
              >论文标题</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblPaperTitle_d"
              name="lblPaperTitle_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnAttachmentCount_d"
              name="spnAttachmentCount_d"
              CssClass="col-form-label text-right"
              >附件计数</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblAttachmentCount_d"
              name="lblAttachmentCount_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnPaperContent_d"
              name="spnPaperContent_d"
              CssClass="col-form-label text-right"
              >主题内容</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblPaperContent_d"
              name="lblPaperContent_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnPeriodical_d" name="spnPeriodical_d" CssClass="col-form-label text-right"
              >期刊</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblPeriodical_d"
              name="lblPeriodical_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnAuthor_d" name="spnAuthor_d" CssClass="col-form-label text-right"
              >作者</span
            >
          </td>
          <td class="text-left">
            <label id="lblAuthor_d" name="lblAuthor_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnResearchQuestion_d"
              name="spnResearchQuestion_d"
              CssClass="col-form-label text-right"
              >研究问题</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblResearchQuestion_d"
              name="lblResearchQuestion_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnLiteratureSources_d"
              name="spnLiteratureSources_d"
              CssClass="col-form-label text-right"
              >文献来源</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblLiteratureSources_d"
              name="lblLiteratureSources_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnUploadfileUrl_d"
              name="spnUploadfileUrl_d"
              CssClass="col-form-label text-right"
              >文件地址</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblUploadfileUrl_d"
              name="lblUploadfileUrl_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnMajorName_d" name="spnMajorName_d" CssClass="col-form-label text-right"
              >专业名称</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblMajorName_d"
              name="lblMajorName_d"
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
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelqa_Paper" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { qa_Paper_DetailEx } from '@/views/InteractManage/qa_Paper_DetailEx';
  export default defineComponent({
    name: 'QaPaperDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('论文答疑表详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelqa_Paper':
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
          case 'btnCancelqa_Paper':
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
      btnqa_Paper_Detail_Click(strCommandName: string, strKeyId: string) {
        qa_Paper_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
