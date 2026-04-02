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
        <tr id="trSkillName">
          <td class="text-right">
            <label
              id="lblSkillId"
              name="lblSkillId"
              class="col-form-label text-right"
              style="width: 90px"
              >技能Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtSkillId"
              name="txtSkillId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblSkillName"
              name="lblSkillName"
              class="col-form-label text-right"
              style="width: 90px"
              >技能名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtSkillName"
              name="txtSkillName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trLevelId">
          <td class="text-right">
            <label
              id="lblOperationTypeId"
              name="lblOperationTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >操作类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlOperationTypeId"
              name="ddlOperationTypeId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblLevelId"
              name="lblLevelId"
              class="col-form-label text-right"
              style="width: 90px"
              >级别Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlLevelId"
              name="ddlLevelId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trProcess">
          <td class="text-right">
            <label
              id="lblProcess"
              name="lblProcess"
              class="col-form-label text-right"
              style="width: 90px"
              >实施过程
            </label>
          </td>
          <td class="text-left" ColSpan="5">
            <input
              id="txtProcess"
              name="txtProcess"
              class="form-control form-control-sm"
              style="width: 350px"
            />
          </td>
        </tr>
        <tr id="trUpdDate">
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
        <tr id="trCitationId">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsSubmit" name="chkIsSubmit" type="checkbox" Text="是否提交" /><label
                for="chkIsSubmit"
                >是否提交</label
              ></span
            >
          </td>
          <td class="text-right">
            <label
              id="lblCitationId"
              name="lblCitationId"
              class="col-form-label text-right"
              style="width: 90px"
              >引用Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCitationId"
              name="txtCitationId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >备注
            </label>
          </td>
          <td class="text-left" ColSpan="5">
            <input
              id="txtMemo"
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 350px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelSysSkill" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitSysSkill"
        type="primary"
        @click="btnSysSkill_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { SysSkillCRUDEx } from '@/views/GradEduTopic/SysSkillCRUDEx';
  import { SysSkill_EditEx } from '@/views/GradEduTopic/SysSkill_EditEx';
  export default defineComponent({
    name: 'SysSkillEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('技能表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelSysSkill':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitSysSkill':
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
          case 'btnCancelSysSkill':
            return strCancelButtonText.value;
          case 'btnSubmitSysSkill':
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
        //SysSkill_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnSysSkill_Edit_Click(strCommandName: string, strKeyId: string) {
        SysSkill_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_SysSkill(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new SysSkill_EditEx(new SysSkillCRUDEx());
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
