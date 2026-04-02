<template>
  <el-dialog
    v-model="dialogVisible"
    :width="dialogWidth"
    :show-close="false"
    @close="handleDialogClose"
  >
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
      <video controls ref="videoPlayer" width="960" height="540" @ended="handleVideoEnded">
        <source :src="strSrc" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <template #footer>
      <el-button id="btnCancelPaperSubRes" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts">
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import { defineComponent, onMounted, ref, watch } from 'vue';

  // import pdfUrl from '/1人力资源管理服务外包协议2.0.pdf'
  export default defineComponent({
    name: 'Mp4Player',
    props: {
      filePath: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const strSrc = ref(`/video/sample.mp4`);
      const videoPlayer = ref<HTMLVideoElement | null>(null);
      onMounted(() => {
        // 在窗口关闭时，停止视频播放
        window.addEventListener('beforeunload', () => {
          if (videoPlayer.value) {
            videoPlayer.value.pause();
          }
        });
      });
      function handleDialogClose() {
        // 停止视频播放的逻辑
        // const videoPlayer = document.getElementById('videoPlayer') as HTMLVideoElement | null;
        if (videoPlayer.value) {
          videoPlayer.value.pause();
        }
      }
      watch(
        () => props.filePath,
        (newFilePath, oldFilePath) => {
          console.log('Options changed:', newFilePath, oldFilePath);
          if (newFilePath.length > 0) {
            strSrc.value = props.filePath;
          }
        },
      );
      const currentPage = ref(1);
      setTimeout(() => {
        currentPage.value = 2;
      }, 5000);
      // 在视频播放结束时调用
      function handleVideoEnded() {
        console.log('视频播放结束');
      }
      function pdfLoaded(data: any) {
        console.log('function pdfLoaded(data: any) ');
        console.log(data);
        // alert('pdfLoaded');
      }
      const strTitle = ref('pdf文件显示');
      const strCancelButtonText = ref('关闭');
      const refDivEdit = ref();
      const dialogVisible = ref(false);
      const dialogWidth = ref('980px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log(`'对话框已经显示!文件名:${props.filePath}`);
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
        refDivEdit,
        pdfLoaded,
        // pdfUrl,
        currentPage,
        strCancelButtonText,
        strSrc,
        videoPlayer,
        handleVideoEnded,
        handleDialogClose,
      };
    },
    methods: {
      pdfLoaded2(data: any) {
        console.log(data);
        alert('pdfLoaded');
      },
    },
  });
  //const pdfUrl = new URL("/1人力资源管理服务外包协议2.0.pdf", import.meta.url);
  // const pdfUrl = new URL("/pdffiles/汇报论文.pdf", import.meta.url);

  // Computer-supported collaborative concept mapping The effects of differentinstructional designs on conceptual understanding and knowledge co-construction
  // "http://localhost:5173/pdffiles/汇报论文.pdf", //本地PDF文件路径放在/public中
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
