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
        <tr id="trMyRoleId">
          <td class="text-right">
            <label
              id="lblMyRoleId"
              name="lblMyRoleId"
              class="col-form-label text-right"
              style="width: 90px"
              >主角色
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlMyRoleId"
              name="ddlMyRoleId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trRoleId">
          <td class="text-right">
            <label
              id="lblRoleId"
              name="lblRoleId"
              class="col-form-label text-right"
              style="width: 90px"
              >角色
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlRoleId"
              name="ddlRoleId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trQxPrjId">
          <td class="text-right">
            <label
              id="lblQxPrjId"
              name="lblQxPrjId"
              class="col-form-label text-right"
              style="width: 90px"
              >工程
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlQxPrjId"
              name="ddlQxPrjId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
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
              style="width: 400px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelQxRoleRightRelation" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitQxRoleRightRelation"
        type="primary"
        @click="btnQxRoleRightRelation_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { QxRoleRightRelationCRUDEx } from '@/viewsShare/UserManage/QxRoleRightRelationCRUDEx';
  import { QxRoleRightRelation_EditEx } from '@/viewsShare/UserManage/QxRoleRightRelation_EditEx';
  export default defineComponent({
    name: 'QxRoleRightRelationEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('角色赋权关系编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxRoleRightRelation':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitQxRoleRightRelation':
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
          case 'btnCancelQxRoleRightRelation':
            return strCancelButtonText.value;
          case 'btnSubmitQxRoleRightRelation':
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
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //QxRoleRightRelation_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnQxRoleRightRelation_Edit_Click(strCommandName: string, strKeyId: string) {
        QxRoleRightRelation_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_QxRoleRightRelation(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new QxRoleRightRelation_EditEx(
          'QxRoleRightRelation_EditEx',
          new QxRoleRightRelationCRUDEx(),
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
