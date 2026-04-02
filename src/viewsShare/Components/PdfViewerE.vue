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
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <!-- <iframe id='iframe_qaPdf' scrolling='auto' src='${pathName}pdf/qaPdf.html?zoom=1.1&file=${strfilepath}' style="width:100%; height:${divContent_H}px; "></iframe> -->
      <!-- /pdf/qaPdf.html?zoom=1.1&file=http://localhost:8090/gsall/pdffiles/AAA.pdf -->
      <iframe :src="strSrc" width="1180" height="700" frameborder="0" scrolling="auto"></iframe>
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
  import { defineComponent, ref, watch } from 'vue';

  // import pdfUrl from '/1人力资源管理服务外包协议2.0.pdf'
  export default defineComponent({
    name: 'PdfViewerE',
    props: {
      filePath: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      // const pdfUrl = new URL(
      //   '/pdffiles/Computer-supported collaborative concept mapping The effects of differentinstructional designs on conceptual understanding and knowledge co-construction.pdf',
      //   import.meta.url,
      // );

      const pathName = clsSysPara4WebApi.spVirtualDirectory; // window.location.pathname;
      const strfilepath = props.filePath; // 'http://localhost:8090/gsall/pdffiles/AAA.pdf';
      const strSrc = ref(`${pathName}pdf/qaPdf.html?zoom=1.1&file=${strfilepath}`);
      // const pdfUrl = new URL('/pdffiles/AAA.pdf', import.meta.url);
      watch(
        () => props.filePath,
        (newFilePath, oldFilePath) => {
          console.log('Options changed:', newFilePath, oldFilePath);
          if (newFilePath.length > 0) {
            strSrc.value = `${pathName}pdf/qaPdf.html?zoom=1.1&file=${props.filePath}`;
          }
        },
      );
      const currentPage = ref(1);
      setTimeout(() => {
        currentPage.value = 2;
      }, 5000);

      function pdfLoaded(data: any) {
        console.log('function pdfLoaded(data: any) ');
        console.log(data);
        // alert('pdfLoaded');
      }
      const strTitle = ref('pdf文件显示');
      const strCancelButtonText = ref('关闭');
      const refDivEdit = ref();
      const dialogVisible = ref(false);
      const dialogWidth = ref('1200px'); // 设置对话框的宽度
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
