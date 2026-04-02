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
        <tr id="trMajorDirectionId">
          <td class="text-right">
            <label
              id="lblMajorDirectionId"
              name="lblMajorDirectionId"
              class="col-form-label text-right"
              style="width: 90px"
              >研究方向Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMajorDirectionId"
              name="txtMajorDirectionId"
              class="form-control form-control-sm"
              style="width: 300px"
            />
          </td>
        </tr>
        <tr id="trIdXzMajor">
          <td class="text-right">
            <label
              id="lblIdXzMajor"
              name="lblIdXzMajor"
              class="col-form-label text-right"
              style="width: 90px"
              >专业流
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlIdXzMajor"
              name="ddlIdXzMajor"
              class="form-control form-control-sm"
              style="width: 300px"
            ></select>
          </td>
        </tr>
        <tr id="trMajorDirectionName">
          <td class="text-right">
            <label
              id="lblMajorDirectionName"
              name="lblMajorDirectionName"
              class="col-form-label text-right"
              style="width: 90px"
              >研究方向名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMajorDirectionName"
              name="txtMajorDirectionName"
              class="form-control form-control-sm"
              style="width: 300px"
            />
          </td>
        </tr>
        <tr id="trMajorDirectionENName">
          <td class="text-right">
            <label
              id="lblMajorDirectionENName"
              name="lblMajorDirectionENName"
              class="col-form-label text-right"
              style="width: 90px"
              >研究方向英文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMajorDirectionENName"
              name="txtMajorDirectionENName"
              class="form-control form-control-sm"
              style="width: 300px"
            />
          </td>
        </tr>
        <tr id="trMajorDirectionExplain">
          <td class="text-right">
            <label
              id="lblMajorDirectionExplain"
              name="lblMajorDirectionExplain"
              class="col-form-label text-right"
              style="width: 90px"
              >专业方向说明
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMajorDirectionExplain"
              name="txtMajorDirectionExplain"
              class="form-control form-control-sm"
              style="width: 300px"
            />
          </td>
        </tr>
        <tr id="trIsVisible">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 300px">
              <input id="chkIsVisible" name="chkIsVisible" type="checkbox" Text="是否显示" /><label
                for="chkIsVisible"
                >是否显示</label
              ></span
            >
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
              style="width: 300px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelXzMajorDirection" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitXzMajorDirection"
        type="primary"
        @click="btnXzMajorDirection_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { XzMajorDirectionCRUDEx } from '@/viewsShare/BaseInfo/XzMajorDirectionCRUDEx';
  import { XzMajorDirection_EditEx } from '@/viewsShare/BaseInfo/XzMajorDirection_EditEx';
  export default defineComponent({
    name: 'XzMajorDirectionEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('专业方向编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelXzMajorDirection':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitXzMajorDirection':
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
          case 'btnCancelXzMajorDirection':
            return strCancelButtonText.value;
          case 'btnSubmitXzMajorDirection':
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
        //XzMajorDirection_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnXzMajorDirection_Edit_Click(strCommandName: string, strKeyId: string) {
        XzMajorDirection_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_XzMajorDirection(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new XzMajorDirection_EditEx('', new XzMajorDirectionCRUDEx());
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
