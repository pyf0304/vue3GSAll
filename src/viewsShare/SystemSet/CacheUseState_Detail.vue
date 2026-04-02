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
    <div id="divDetailLayout" class="tab_layout">
      <!-- 详细信息层 -->

      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <span id="spnmId_d" name="spnmId_d" CssClass="col-form-label text-right">mId</span>
          </td>
          <td class="text-left">
            <label id="lblmId_d" name="lblmId_d" class="text-primary" style="width: 300px"> </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnUserId_d" name="spnUserId_d" CssClass="col-form-label text-right"
              >用户Id</span
            >
          </td>
          <td class="text-left">
            <label id="lblUserId_d" name="lblUserId_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnCacheKey_d" name="spnCacheKey_d" CssClass="col-form-label text-right"
              >缓存关键字</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblCacheKey_d"
              name="lblCacheKey_d"
              class="text-primary"
              style="width: 300px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnCacheSize_d" name="spnCacheSize_d" CssClass="col-form-label text-right"
              >缓存大小</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblCacheSize_d"
              name="lblCacheSize_d"
              class="text-primary"
              style="width: 300px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">说明</span>
          </td>
          <td class="text-left">
            <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 300px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnCacheModeId_d" name="spnCacheModeId_d" CssClass="col-form-label text-right"
              >缓存方式</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblCacheModeId_d"
              name="lblCacheModeId_d"
              class="text-primary"
              style="width: 100px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnCacheModeId_d" name="spnCacheModeId_d" CssClass="col-form-label text-right"
              >缓存方式英文名</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblCacheModeId_d"
              name="lblCacheModeId_d"
              class="text-primary"
              style="width: 100px"
            >
            </label>
          </td>
        </tr>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelCacheUseState" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { CacheUseState_DetailEx } from '@/viewsShare/SystemSet/CacheUseState_DetailEx';
  export default defineComponent({
    name: 'CacheUseStateDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('缓存使用状态详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelCacheUseState':
            strCancelButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelCacheUseState':
            return strCancelButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理！`;
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

    mounted() {
      // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
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
      btnCacheUseState_Detail_Click(strCommandName: string, strKeyId: string) {
        CacheUseState_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
