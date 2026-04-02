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
        <tr id="trKeSubId">
          <td class="text-right">
            <label
              id="lblKeSubId"
              name="lblKeSubId"
              class="col-form-label text-right"
              style="width: 90px"
              >知识经济子类Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtKeSubId"
              name="txtKeSubId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trKeSuperId">
          <td class="text-right">
            <label
              id="lblKeSuperId"
              name="lblKeSuperId"
              class="col-form-label text-right"
              style="width: 90px"
              >知识经济父类Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlKeSuperId"
              name="ddlKeSuperId"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
        <tr id="trKeSubNameCn">
          <td class="text-right">
            <label
              id="lblKeSubNameCn"
              name="lblKeSubNameCn"
              class="col-form-label text-right"
              style="width: 90px"
              >知识经济子类名称cn
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtKeSubNameCn"
              name="txtKeSubNameCn"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trKeSubNameEn">
          <td class="text-right">
            <label
              id="lblKeSubNameEn"
              name="lblKeSubNameEn"
              class="col-form-label text-right"
              style="width: 90px"
              >知识经济子类名称en
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtKeSubNameEn"
              name="txtKeSubNameEn"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr id="trKeSubDescribeCn">
          <td class="text-right">
            <label
              id="lblKeSubDescribeCn"
              name="lblKeSubDescribeCn"
              class="col-form-label text-right"
              style="width: 90px"
              >知识经济子类描述cn
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtKeSubDescribeCn"
              name="txtKeSubDescribeCn"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trKeSubDescribeEn">
          <td class="text-right">
            <label
              id="lblKeSubDescribeEn"
              name="lblKeSubDescribeEn"
              class="col-form-label text-right"
              style="width: 90px"
              >知识经济子类描述en
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtKeSubDescribeEn"
              name="txtKeSubDescribeEn"
              class="form-control form-control-sm"
              style="width: 400px"
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
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trLink">
          <td class="text-right">
            <label id="lblLink" name="lblLink" class="col-form-label text-right" style="width: 90px"
              >相应链接
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLink"
              name="txtLink"
              class="form-control form-control-sm"
              style="width: 300px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelke_Sub" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitke_Sub" type="primary" @click="btnke_Sub_Edit_Click('Submit', '')">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { ke_SubCRUDEx } from '@/views/GradEduTopic/ke_SubCRUDEx';
  import { ke_Sub_EditEx } from '@/views/GradEduTopic/ke_Sub_EditEx';
  export default defineComponent({
    name: 'KeSubEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('知识经济子类编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelke_Sub':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitke_Sub':
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
          case 'btnCancelke_Sub':
            return strCancelButtonText.value;
          case 'btnSubmitke_Sub':
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
        //ke_Sub_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnke_Sub_Edit_Click(strCommandName: string, strKeyId: string) {
        ke_Sub_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_ke_Sub(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new ke_Sub_EditEx(new ke_SubCRUDEx());
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
