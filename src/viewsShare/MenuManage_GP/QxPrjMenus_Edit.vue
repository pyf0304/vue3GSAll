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
        <!-- <tr id="trMenuId">
          <td class="text-right">
            <label
              id="lblMenuId"
              name="lblMenuId"
              class="col-form-label text-right"
              style="width: 90px"
              >菜单Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMenuId"
              name="txtMenuId"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr> -->
        <tr id="trMenuName">
          <td class="text-right">
            <label
              id="lblMenuName"
              name="lblMenuName"
              class="col-form-label text-right"
              style="width: 90px"
              >菜单名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMenuName"
              name="txtMenuName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trMenuTitle">
          <td class="text-right">
            <label
              id="lblMenuTitle"
              name="lblMenuTitle"
              class="col-form-label text-right"
              style="width: 90px"
              >菜单标题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMenuTitle"
              name="txtMenuTitle"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trMenuControlName">
          <td class="text-right">
            <label
              id="lblMenuControlName"
              name="lblMenuControlName"
              class="col-form-label text-right"
              style="width: 90px"
              >菜单控件名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMenuControlName"
              name="txtMenuControlName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trUpMenuId">
          <td class="text-right">
            <label
              id="lblUpMenuId"
              name="lblUpMenuId"
              class="col-form-label text-right"
              style="width: 90px"
              >上级菜单Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlUpMenuId"
              name="ddlUpMenuId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trLinkFile">
          <td class="text-right">
            <label
              id="lblLinkFile"
              name="lblLinkFile"
              class="col-form-label text-right"
              style="width: 90px"
              >链接文件
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtLinkFile"
              name="txtLinkFile"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trqsParameters">
          <td class="text-right">
            <label
              id="lblqsParameters"
              name="lblqsParameters"
              class="col-form-label text-right"
              style="width: 90px"
              >qs参数
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtqsParameters"
              name="txtqsParameters"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trPageDispModeId">
          <td class="text-right">
            <label
              id="lblPageDispModeId"
              name="lblPageDispModeId"
              class="col-form-label text-right"
              style="width: 90px"
              >显示模式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPageDispModeId"
              name="ddlPageDispModeId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trImgFile">
          <td class="text-right">
            <label
              id="lblImgFile"
              name="lblImgFile"
              class="col-form-label text-right"
              style="width: 90px"
              >图像文件
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtImgFile"
              name="txtImgFile"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trOrderNum">
          <td class="text-right">
            <label
              id="lblOrderNum"
              name="lblOrderNum"
              class="col-form-label text-right"
              style="width: 90px"
              >排序号
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtOrderNum"
              name="txtOrderNum"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trIsLeafNode">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 400px">
              <input
                id="chkIsLeafNode"
                name="chkIsLeafNode"
                type="checkbox"
                Text="是否叶子"
              /><label for="chkIsLeafNode">是否叶子</label></span
            >
          </td>
        </tr>
        <tr id="trInUse">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 400px">
              <input id="chkInUse" name="chkInUse" type="checkbox" Text="是否在用" /><label
                for="chkInUse"
                >是否在用</label
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
              style="width: 400px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelQxPrjMenus" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitQxPrjMenus"
        type="primary"
        @click="btnQxPrjMenus_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { QxPrjMenusCRUDEx } from '@/viewsShare/MenuManage_GP/QxPrjMenusCRUDEx';
  import QxPrjMenus_EditEx from '@/viewsShare/MenuManage_GP/QxPrjMenus_EditEx';
  export default defineComponent({
    name: 'QxPrjMenusEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('工程菜单编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxPrjMenus':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitQxPrjMenus':
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
          case 'btnCancelQxPrjMenus':
            return strCancelButtonText.value;
          case 'btnSubmitQxPrjMenus':
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
        //QxPrjMenus_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnQxPrjMenus_Edit_Click(strCommandName: string, strKeyId: string) {
        QxPrjMenus_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_QxPrjMenus(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new QxPrjMenus_EditEx('QxPrjMenus_EditEx', new QxPrjMenusCRUDEx());
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
