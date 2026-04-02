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
        style="width: 200px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trObjectiveName">
          <td class="text-right">
            <label
              id="lblTopicObjectiveId"
              name="lblTopicObjectiveId"
              class="col-form-label text-right"
              style="width: 90px"
              >客观Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTopicObjectiveId"
              name="txtTopicObjectiveId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblObjectiveName"
              name="lblObjectiveName"
              class="col-form-label text-right"
              style="width: 90px"
              >客观名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtObjectiveName"
              name="txtObjectiveName"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trObjectiveType">
          <td class="text-right">
            <label
              id="lblObjectiveContent"
              name="lblObjectiveContent"
              class="col-form-label text-right"
              style="width: 90px"
              >客观内容
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtObjectiveContent"
              name="txtObjectiveContent"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblObjectiveType"
              name="lblObjectiveType"
              class="col-form-label text-right"
              style="width: 90px"
              >客观类型
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtObjectiveType"
              name="txtObjectiveType"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trConclusion">
          <td class="text-right">
            <label
              id="lblSourceId"
              name="lblSourceId"
              class="col-form-label text-right"
              style="width: 90px"
              >来源Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtSourceId"
              name="txtSourceId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblConclusion"
              name="lblConclusion"
              class="col-form-label text-right"
              style="width: 90px"
              >结论
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtConclusion"
              name="txtConclusion"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trUpdDate">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 200px">
              <input id="chkIsSubmit" name="chkIsSubmit" type="checkbox" Text="是否提交" /><label
                for="chkIsSubmit"
                >是否提交</label
              ></span
            >
          </td>
          <td class="text-right">
            <label
              id="lblUpdDate"
              name="lblUpdDate"
              class="col-form-label text-right"
              style="width: 90px"
              >修改日期
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUpdDate"
              name="txtUpdDate"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >备注
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMemo"
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelTopicObjective" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitTopicObjective"
        type="primary"
        @click="btnTopicObjective_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { TopicObjectiveCRUDEx } from '@/views/GradEduTopic/TopicObjectiveCRUDEx';
  import { TopicObjective_EditEx } from '@/views/GradEduTopic/TopicObjective_EditEx';
  export default defineComponent({
    name: 'TopicObjectiveEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('主题客观表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelTopicObjective':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitTopicObjective':
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
          case 'btnCancelTopicObjective':
            return strCancelButtonText.value;
          case 'btnSubmitTopicObjective':
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
        //TopicObjective_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnTopicObjective_Edit_Click(strCommandName: string, strKeyId: string) {
        TopicObjective_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_TopicObjective(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new TopicObjective_EditEx(
          'TopicObjective_EditEx',
          new TopicObjectiveCRUDEx(),
        );
        objPage.btnSubmit_Click();
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
