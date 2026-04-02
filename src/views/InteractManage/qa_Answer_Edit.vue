<template>
  <!-- 编辑层 -->
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
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trAnswerContent">
          <td class="text-right">
            <label id="lblAnswerContent" class="col-form-label text-right" style="width: 90px"
              >问题:
            </label>
          </td>
          <td class="text-left">
            <span
              id="spnQuestionContent"
              placeholder="问题内容"
              class="form-control form-control-sm"
              style="width: 100%; height: 40px"
            ></span>
          </td>
        </tr>

        <tr id="trAnswerContent">
          <td class="text-right">
            <label id="lblAnswerContent" class="col-form-label text-right" style="width: 90px"
              >答案内容
            </label>
          </td>
          <td class="text-left">
            <textarea
              id="txtAnswerContent"
              placeholder="内容"
              class="form-control form-control-sm"
              style="width: 100%; height: 200px"
            ></textarea>
          </td>
        </tr>

        <tr style="display: none">
          <td colspan="2">
            <button
              type="button"
              class="layui-btn layui-btn-sm layui-btn-radius layui-btn-normal"
              @click="InviteOthers_Click('2')"
            >
              <font-awesome-icon icon="user-plus" />邀请其他人来回答
            </button>
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelqa_Answer" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitqa_Answer"
        type="primary"
        @click="btnqa_Answer_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { qa_AnswerCRUDEx } from '@/views/InteractManage/qa_AnswerCRUDEx';
  import { qa_Answer_EditEx } from '@/views/InteractManage/qa_Answer_EditEx';
  export default defineComponent({
    name: 'QaAnswerEdit',
    components: {
      // 组件注册
    },
    setup() {
      const refDivEdit = ref();
      const strTitle = ref('答疑回答编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelqa_Answer':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitqa_Answer':
            strSubmitButtonText.value = strNewValue;
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
          case 'btnSubmitqa_Answer':
            return strSubmitButtonText.value;
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
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      //邀请其他同学回答
      function InviteOthers_Click(key: string) {
        $('#hidInviteKey').val(key);
        //message.info('hi，功能还在搭建中....');

        // const objPage = new TeaTest_QA();
        // objPage.InviteOthers_Click();

        //atOthers();
      }
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        InviteOthers_Click,
        refDivEdit,
      };
    },

    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //qa_Answer_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnqa_Answer_Edit_Click(strCommandName: string, strKeyId: string) {
        qa_Answer_EditEx.btnEdit_Click(strCommandName, strKeyId, this.refDivEdit);
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
