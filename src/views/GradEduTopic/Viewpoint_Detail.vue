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
    <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
      <!-- 详细信息层 -->

      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <span id="spnViewpointId_d" name="spnViewpointId_d" CssClass="col-form-label text-right"
              >观点Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblViewpointId_d"
              name="lblViewpointId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnViewpointName_d"
              name="spnViewpointName_d"
              CssClass="col-form-label text-right"
              >观点名称</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblViewpointName_d"
              name="lblViewpointName_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnViewpointContent_d"
              name="spnViewpointContent_d"
              CssClass="col-form-label text-right"
              >观点内容</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblViewpointContent_d"
              name="lblViewpointContent_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnReason_d" name="spnReason_d" CssClass="col-form-label text-right"
              >理由</span
            >
          </td>
          <td class="text-left">
            <label id="lblReason_d" name="lblReason_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnSource_d" name="spnSource_d" CssClass="col-form-label text-right"
              >来源</span
            >
          </td>
          <td class="text-left">
            <label id="lblSource_d" name="lblSource_d" class="text-primary" style="width: 150px">
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnVPProposePeople_d"
              name="spnVPProposePeople_d"
              CssClass="col-form-label text-right"
              >观点提出人</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblVPProposePeople_d"
              name="lblVPProposePeople_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">备注</span>
          </td>
          <td class="text-left">
            <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
            </label>
          </td>
          <td class="text-right">
            <span id="spnIsSubmit_d" name="spnIsSubmit_d" CssClass="col-form-label text-right"
              >是否提交</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblIsSubmit_d"
              name="lblIsSubmit_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnAppraiseCount_d"
              name="spnAppraiseCount_d"
              CssClass="col-form-label text-right"
              >评论数</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblAppraiseCount_d"
              name="lblAppraiseCount_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnScore_d" name="spnScore_d" CssClass="col-form-label text-right">评分</span>
          </td>
          <td class="text-left">
            <label id="lblScore_d" name="lblScore_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnOkCount_d" name="spnOkCount_d" CssClass="col-form-label text-right"
              >点赞统计</span
            >
          </td>
          <td class="text-left">
            <label id="lblOkCount_d" name="lblOkCount_d" class="text-primary" style="width: 150px">
            </label>
          </td>
          <td class="text-right">
            <span id="spnCitationId_d" name="spnCitationId_d" CssClass="col-form-label text-right"
              >引用Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblCitationId_d"
              name="lblCitationId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnCitationCount_d"
              name="spnCitationCount_d"
              CssClass="col-form-label text-right"
              >引用统计</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblCitationCount_d"
              name="lblCitationCount_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnStuScore_d" name="spnStuScore_d" CssClass="col-form-label text-right"
              >学生平均分</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblStuScore_d"
              name="lblStuScore_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnTeaScore_d" name="spnTeaScore_d" CssClass="col-form-label text-right"
              >教师评分</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblTeaScore_d"
              name="lblTeaScore_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnViewpointId_d" name="spnViewpointId_d" CssClass="col-form-label text-right"
              >观点Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblViewpointId_d"
              name="lblViewpointId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnIdCurrEduCls_d"
              name="spnIdCurrEduCls_d"
              CssClass="col-form-label text-right"
              >教学班流水号</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblIdCurrEduCls_d"
              name="lblIdCurrEduCls_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnViewpointName_d"
              name="spnViewpointName_d"
              CssClass="col-form-label text-right"
              >观点名称</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblViewpointName_d"
              name="lblViewpointName_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnPdfContent_d" name="spnPdfContent_d" CssClass="col-form-label text-right"
              >Pdf内容</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblPdfContent_d"
              name="lblPdfContent_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnViewpointContent_d"
              name="spnViewpointContent_d"
              CssClass="col-form-label text-right"
              >观点内容</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblViewpointContent_d"
              name="lblViewpointContent_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnPdfPageNum_d" name="spnPdfPageNum_d" CssClass="col-form-label text-right"
              >Pdf页码</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblPdfPageNum_d"
              name="lblPdfPageNum_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnViewpointTypeId_d"
              name="spnViewpointTypeId_d"
              CssClass="col-form-label text-right"
              >观点类型Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblViewpointTypeId_d"
              name="lblViewpointTypeId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnVersionCount_d"
              name="spnVersionCount_d"
              CssClass="col-form-label text-right"
              >版本统计</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblVersionCount_d"
              name="lblVersionCount_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnReason_d" name="spnReason_d" CssClass="col-form-label text-right"
              >理由</span
            >
          </td>
          <td class="text-left">
            <label id="lblReason_d" name="lblReason_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnCreateDate_d" name="spnCreateDate_d" CssClass="col-form-label text-right"
              >建立日期</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblCreateDate_d"
              name="lblCreateDate_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnSource_d" name="spnSource_d" CssClass="col-form-label text-right"
              >来源</span
            >
          </td>
          <td class="text-left">
            <label id="lblSource_d" name="lblSource_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnShareId_d" name="spnShareId_d" CssClass="col-form-label text-right"
              >分享Id</span
            >
          </td>
          <td class="text-left">
            <label id="lblShareId_d" name="lblShareId_d" class="text-primary" style="width: 150px">
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnVPProposePeople_d"
              name="spnVPProposePeople_d"
              CssClass="col-form-label text-right"
              >观点提出人</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblVPProposePeople_d"
              name="lblVPProposePeople_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnIsRecommend_d" name="spnIsRecommend_d" CssClass="col-form-label text-right"
              >是否推荐</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblIsRecommend_d"
              name="lblIsRecommend_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnUpdDate_d" name="spnUpdDate_d" CssClass="col-form-label text-right"
              >修改日期</span
            >
          </td>
          <td class="text-left">
            <label id="lblUpdDate_d" name="lblUpdDate_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">备注</span>
          </td>
          <td class="text-left">
            <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
            </label>
          </td>
          <td class="text-right">
            <span id="spnIsSubmit_d" name="spnIsSubmit_d" CssClass="col-form-label text-right"
              >是否提交</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblIsSubmit_d"
              name="lblIsSubmit_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnUserTypeId_d" name="spnUserTypeId_d" CssClass="col-form-label text-right"
              >用户类型Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblUserTypeId_d"
              name="lblUserTypeId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnCitationId_d" name="spnCitationId_d" CssClass="col-form-label text-right"
              >引用Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblCitationId_d"
              name="lblCitationId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnAppraiseCount_d"
              name="spnAppraiseCount_d"
              CssClass="col-form-label text-right"
              >评论数</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblAppraiseCount_d"
              name="lblAppraiseCount_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnOkCount_d" name="spnOkCount_d" CssClass="col-form-label text-right"
              >点赞统计</span
            >
          </td>
          <td class="text-left">
            <label id="lblOkCount_d" name="lblOkCount_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnScore_d" name="spnScore_d" CssClass="col-form-label text-right">评分</span>
          </td>
          <td class="text-left">
            <label id="lblScore_d" name="lblScore_d" class="text-primary" style="width: 150px">
            </label>
          </td>
          <td class="text-right">
            <span id="spnStuScore_d" name="spnStuScore_d" CssClass="col-form-label text-right"
              >学生平均分</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblStuScore_d"
              name="lblStuScore_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnTeaScore_d" name="spnTeaScore_d" CssClass="col-form-label text-right"
              >教师评分</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblTeaScore_d"
              name="lblTeaScore_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnIdCurrEduCls_d"
              name="spnIdCurrEduCls_d"
              CssClass="col-form-label text-right"
              >教学班流水号</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblIdCurrEduCls_d"
              name="lblIdCurrEduCls_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnPdfContent_d" name="spnPdfContent_d" CssClass="col-form-label text-right"
              >Pdf内容</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblPdfContent_d"
              name="lblPdfContent_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnPdfPageNum_d" name="spnPdfPageNum_d" CssClass="col-form-label text-right"
              >Pdf页码</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblPdfPageNum_d"
              name="lblPdfPageNum_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnCitationCount_d"
              name="spnCitationCount_d"
              CssClass="col-form-label text-right"
              >引用统计</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblCitationCount_d"
              name="lblCitationCount_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnVersionCount_d"
              name="spnVersionCount_d"
              CssClass="col-form-label text-right"
              >版本统计</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblVersionCount_d"
              name="lblVersionCount_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnCreateDate_d" name="spnCreateDate_d" CssClass="col-form-label text-right"
              >建立日期</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblCreateDate_d"
              name="lblCreateDate_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnShareId_d" name="spnShareId_d" CssClass="col-form-label text-right"
              >分享Id</span
            >
          </td>
          <td class="text-left">
            <label id="lblShareId_d" name="lblShareId_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnIsRecommend_d" name="spnIsRecommend_d" CssClass="col-form-label text-right"
              >是否推荐</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblIsRecommend_d"
              name="lblIsRecommend_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelViewpoint" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { Viewpoint_DetailEx } from '@/views/GradEduTopic/Viewpoint_DetailEx';
  export default defineComponent({
    name: 'ViewpointDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('观点表详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelViewpoint':
            strCancelButtonText.value = strNewValue;
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
          case 'btnCancelViewpoint':
            return strCancelButtonText.value;
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

    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
      },

      /**
       *按钮单击,用于调用Js函数中btnDetail_Click
       *(AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_JS_btnDetail_Click)
       **/
      btnViewpoint_Detail_Click(strCommandName: string, strKeyId: string) {
        Viewpoint_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
