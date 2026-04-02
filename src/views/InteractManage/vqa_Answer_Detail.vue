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
            <span id="spnAnswerId_d" name="spnAnswerId_d" CssClass="col-form-label text-right"
              >回答Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblAnswerId_d"
              name="lblAnswerId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
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
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnAnswerContent_d"
              name="spnAnswerContent_d"
              CssClass="col-form-label text-right"
              >答案内容</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblAnswerContent_d"
              name="lblAnswerContent_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnScore_d" name="spnScore_d" CssClass="col-form-label text-right">评分</span>
          </td>
          <td class="text-left">
            <label id="lblScore_d" name="lblScore_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnScoreType_d" name="spnScoreType_d" CssClass="col-form-label text-right"
              >评分类型</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblScoreType_d"
              name="lblScoreType_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnIsRight_d" name="spnIsRight_d" CssClass="col-form-label text-right"
              >是否正确</span
            >
          </td>
          <td class="text-left">
            <label id="lblIsRight_d" name="lblIsRight_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnParentId_d" name="spnParentId_d" CssClass="col-form-label text-right"
              >父节点Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblParentId_d"
              name="lblParentId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
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
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnUpdUser_d" name="spnUpdUser_d" CssClass="col-form-label text-right"
              >修改人</span
            >
          </td>
          <td class="text-left">
            <label id="lblUpdUser_d" name="lblUpdUser_d" class="text-primary" style="width: 150px">
            </label>
          </td>
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
        </tr>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelqa_Answer" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { vqa_Answer_DetailEx } from '@/views/InteractManage/vqa_Answer_DetailEx';
  export default defineComponent({
    name: 'VqaAnswerDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('答疑回答详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelqa_Answer':
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
          case 'btnCancelqa_Answer':
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
      btnqa_Answer_Detail_Click(strCommandName: string, strKeyId: string) {
        vqa_Answer_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
