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
            <span id="spnPaperId_d" name="spnPaperId_d" CssClass="col-form-label text-right"
              >论文Id</span
            >
          </td>
          <td class="text-left">
            <label id="lblPaperId_d" name="lblPaperId_d" class="text-primary" style="width: 150px">
            </label>
          </td>
          <td class="text-right">
            <span id="spnUserId_d" name="spnUserId_d" CssClass="col-form-label text-right"
              >用户ID</span
            >
          </td>
          <td class="text-left">
            <label id="lblUserId_d" name="lblUserId_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnPaperGroupId_d"
              name="spnPaperGroupId_d"
              CssClass="col-form-label text-right"
              >组Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblPaperGroupId_d"
              name="lblPaperGroupId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnMeno_d" name="spnMeno_d" CssClass="col-form-label text-right">备注</span>
          </td>
          <td class="text-left">
            <label id="lblMeno_d" name="lblMeno_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelgs_PaperAttention" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { gs_PaperAttention_DetailEx } from '@/views/GradEduPaper/gs_PaperAttention_DetailEx';
  export default defineComponent({
    name: 'gsPaperAttentionDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('论文关注详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelgs_PaperAttention':
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
          case 'btnCancelgs_PaperAttention':
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
      btngs_PaperAttention_Detail_Click(strCommandName: string, strKeyId: string) {
        gs_PaperAttention_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
