<template>
  <el-dialog v-model="dialogVisible" :width="dialogWidth" height="700px" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divLayout" ref="refDivLayout" class="divComContainer">
      <div id="divLoading" class="loading">
        <img src="@/assets/images/CirclePoint.gif" />
      </div>

      <div style="padding: 5px 5px 5px 5px; width: 100%; height: 500px">
        <div class="divleft">
          <div id="div_Viewpoint"></div>
        </div>
        <div class="divComment">
          <div id="J_Short" class="comment-short">
            <div class="comment-title" style="margin-top: 5px">
              <p class="comment-all" @click="HistoricalVersion_Click()">历史版本</p>
              <div id="J_CommentCenter" class="comment-center">
                <span class="comment-center-slash">/</span>
                <span class="comment-my J_userCenter" @click="MyVersion_Click()">我的版本</span>
              </div>
              <p class="comment-sort">
                <span
                  data-targetid="4760694256"
                  data-sort="1"
                  class="J_CommentSort comment-sort-cur"
                  @click="NewVersion_Click()"
                  >最近版本</span
                >
              </p>
            </div>
            <div id="J_ShortComment_HV"> </div>
          </div>
        </div>
      </div>

      <input id="hidKeyId" type="hidden" />
      <input id="hidTypeId" type="hidden" />
    </div>
    <!-- <template #footer>
      <el-button id="btnCancelqa_Answer" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitqa_Answer" type="primary" @click="btn_Click('Submit', '')">{{
        strSubmitButtonText
      }}</el-button>
    </template> -->
  </el-dialog>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/public.css';
  // import '@/assets/css/paperlist.css';
  import '@/assets/css/comment.css';
  // import '@/assets/css/SimpleTree.css';

  import '@/assets/lib/startnum-1.0/css/startnum.css';

  import { defineComponent, onMounted, ref } from 'vue';
  import $ from 'jquery';

  //   import { message } from '@/utils/myMessage';

  //   import { SysCommentEx } from '@/views/GradEduTools/SysCommentEx';
  //   import { SysComment_Edit } from '@/viewsBase/GradEduTools/SysComment_Edit';
  //   import SysComment_EditCom from '@/views/GradEduTools/SysComment_Edit.vue';
  import { HistoricalVersionEx } from '@/views/GradEduEx/HistoricalVersionEx';
  import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
  export default defineComponent({
    name: 'HistoricalVersion',
    components: {
      // 组件注册
      //   SysComment_EditCom,
    },
    props: {
      keyId: {
        type: String,
        default: '',
      },
      typeId: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      console.log(props);
      const strTitle = ref('系统评论');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');

      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        HistoricalVersionEx.vuebtn_Click = btn_Click;
        // HistoricalVersionEx.divLayout = refDivLayout.value;

        // window_onload();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            break;

          case 'SearchParentV':
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            // HistoricalVersionEx.EditObj = SysComment_EditRef.value;
            break;

          default:
            break;
        }
        HistoricalVersionEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      const dialogVisible = ref(false);
      const dialogWidth = ref('90%'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          HistoricalVersionEx.divLayout = refDivLayout.value;
          HistoricalVersionEx.vuebtn_Click = btn_Click;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
            HistoricalVersionEx.divLayout = refDivLayout.value;
            HistoricalVersionEx.vuebtn_Click = btn_Click;
          }, 500);
        });
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      // 方法定义

      function window_onload() {
        HistoricalVersionEx.divLayout = refDivLayout.value;
        HistoricalVersionEx.vuebtn_Click = btn_Click;
        GetRequestId_PageLoad(enumCommentOrder.AllComment_01);
      }

      //   function GetRequest() {
      //     const url = location.search; //获取url中"?"符后的字串
      //     const theRequest = new Object();
      //     if (url.indexOf('?') != -1) {
      //       const str = url.substring(1);
      //       const strs = str.split('&');
      //       for (let i = 0; i < strs.length; i++) {
      //         theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      //       }
      //     }
      //     return theRequest;
      //   }

      function GetRequestId_PageLoad(strCommentOrder: enumCommentOrder) {
        // const Request = new Object();
        // Request = GetRequest();

        const strKey = props.keyId; // Request['Key'];
        const strType = props.typeId; // Request['Type'];

        if (strKey != null) {
          $('#hidKeyId').val(strKey);
          $('#hidTypeId').val(strType);

          const objPage = new HistoricalVersionEx();
          objPage.PageLoad(strCommentOrder);
        }
      }

      //全部版本
      function HistoricalVersion_Click() {
        const objPage = new HistoricalVersionEx();
        objPage.Showdiv_Version(enumCommentOrder.AllComment_01);
      }

      //我的版本
      function MyVersion_Click() {
        // $('#h1idOrderbyId').val('2');

        const objPage = new HistoricalVersionEx();
        objPage.Showdiv_Version(enumCommentOrder.Personal_02);
      }

      //最新版本
      function NewVersion_Click() {
        // $('#h1idOrderbyId').val('3');

        const objPage = new HistoricalVersionEx();
        objPage.Showdiv_Version(enumCommentOrder.LatestComments_03);
      }

      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        btn_Click,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        window_onload,
        HistoricalVersion_Click,
        MyVersion_Click,
        NewVersion_Click,
      };
    },

    methods: {
      //锚点
    },
  });
</script>
<style scoped>
  .divleft {
    width: 45%;
    /* position: relative; */
    /*border-right: solid 1px #dededf;*/
    /*border-bottom: solid 1px #dbdcde;*/
    /*border-radius: 10px 8px 8px 4px;*/ /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    float: left;
    /*background: #fff;*/
    font-family: 'Microsoft YaHei';
    /* top: 10px;
    left: 10px; */
    /*bottom: 5%;*/
    z-index: 999;
  }

  /*右边内容区*/
  .divComment {
    margin-right: 10px;
    padding: 20px;
    width: 50%;
    float: right;
    overflow: hidden;
  }
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
