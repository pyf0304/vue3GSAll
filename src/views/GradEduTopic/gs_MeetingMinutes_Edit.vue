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
        style="width: 800px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trTopicId" style="display: none">
          <td class="text-right">
            <label
              id="lblMeetingId"
              name="lblMeetingId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              会议Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMeetingId"
              name="txtMeetingId"
              class="form-control"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblTopicId"
              name="lblTopicId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              主题编号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTopicId"
              name="ddlTopicId"
              class="form-control"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-left" style="display: none">
            <span class="form-control" style="width: 150px">
              <input type="checkbox" id="chkIsSubmit" name="chkIsSubmit" Text="是否提交" /><label
                for="chkIsSubmit"
                >是否提交</label
              >
            </span>
          </td>
        </tr>
        <tr>
          <td class="text-left" style="">
            <input
              id="txtMeetingDate"
              name="txtMeetingDate"
              placeholder="会议日期"
              class="form-control"
              style="width: 150px"
            />
          </td>
          <td class="text-left">
            <input
              id="txtParticipants"
              name="txtParticipants"
              placeholder="参会者，请用逗号隔开"
              class="form-control"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trMeetingContent">
          <td class="text-left" colspan="2">
            <textarea
              id="txtMeetingContent"
              name="txtMeetingContent"
              placeholder="请输入会议纪要"
              class="form-control"
              style="width: 100%; height: 200px"
            />
          </td>
        </tr>

        <tr>
          <td class="text-left" colspan="2">
            <input
              id="txtMemo"
              name="txtMemo"
              placeholder="备注"
              class="form-control"
              style="width: 550px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
      <input id="hidColorCode" type="hidden" />

      <input id="hidOldColorCode" type="hidden" />
      <input id="hidNewColorCode" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelgs_MeetingMinutes" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitgs_MeetingMinutes"
        type="primary"
        @click="btngs_MeetingMinutes_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { gs_MeetingMinutesCRUDEx } from '@/views/GradEduTopic/gs_MeetingMinutesCRUDEx';
  import { gs_MeetingMinutes_EditEx } from '@/views/GradEduTopic/gs_MeetingMinutes_EditEx';
  export default defineComponent({
    name: 'GsMeetingMinutesEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('会议纪要编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelgs_MeetingMinutes':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitgs_MeetingMinutes':
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
          case 'btnCancelgs_MeetingMinutes':
            return strCancelButtonText.value;
          case 'btnSubmitgs_MeetingMinutes':
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
        //gs_MeetingMinutes_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btngs_MeetingMinutes_Edit_Click(strCommandName: string, strKeyId: string) {
        gs_MeetingMinutes_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_gs_MeetingMinutes(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new gs_MeetingMinutes_EditEx('', new gs_MeetingMinutesCRUDEx());
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
