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
        <tr id="trTopicId">
          <td class="text-right">
            <label
              id="lblTopicRoleId"
              name="lblTopicRoleId"
              class="col-form-label text-right"
              style="width: 90px"
              >主题权限Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTopicRoleId"
              name="txtTopicRoleId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblTopicId"
              name="lblTopicId"
              class="col-form-label text-right"
              style="width: 90px"
              >主题编号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTopicId"
              name="txtTopicId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trMenuName">
          <td class="text-right">
            <label
              id="lblMenuNum"
              name="lblMenuNum"
              class="col-form-label text-right"
              style="width: 90px"
              >菜单编号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMenuNum"
              name="txtMenuNum"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblMenuName"
              name="lblMenuName"
              class="col-form-label text-right"
              style="width: 90px"
              >菜单名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMenuName"
              name="txtMenuName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trUpdDate">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input
                id="chkMenuIsHide"
                name="chkMenuIsHide"
                type="checkbox"
                Text="菜单是否隐藏"
              /><label for="chkMenuIsHide">菜单是否隐藏</label></span
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
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trUpdUser">
          <td class="text-right">
            <label
              id="lblUpdUser"
              name="lblUpdUser"
              class="col-form-label text-right"
              style="width: 90px"
              >修改人
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUpdUser"
              name="txtUpdUser"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelgs_TopicRole" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitgs_TopicRole"
        type="primary"
        @click="btngs_TopicRole_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { gs_TopicRoleCRUDEx } from '@/views/GradEduTopic/gs_TopicRoleCRUDEx';
  import { gs_TopicRole_EditEx } from '@/views/GradEduTopic/gs_TopicRole_EditEx';
  export default defineComponent({
    name: 'GsTopicRoleEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('主题权限表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelgs_TopicRole':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitgs_TopicRole':
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
          case 'btnCancelgs_TopicRole':
            return strCancelButtonText.value;
          case 'btnSubmitgs_TopicRole':
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
        //gs_TopicRole_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btngs_TopicRole_Edit_Click(strCommandName: string, strKeyId: string) {
        gs_TopicRole_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_gs_TopicRole(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new gs_TopicRole_EditEx(new gs_TopicRoleCRUDEx());
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
