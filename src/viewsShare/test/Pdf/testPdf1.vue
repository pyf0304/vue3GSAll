<template>
  <pdf-viewer :current-page="currentPage" :src="pdfUrl"></pdf-viewer>
</template>

<script setup>
  import { ref } from 'vue';
  import PdfViewer from './PdfViewerE.vue';
  // import pdfUrl from '/1人力资源管理服务外包协议2.0.pdf'

  //const pdfUrl = new URL("/1人力资源管理服务外包协议2.0.pdf", import.meta.url);
  const pdfUrl = new URL('/pdffiles/汇报论文.pdf', import.meta.url);
  // const pdfUrl = new URL(
  //   '/pdffiles/Computer-supported collaborative concept mapping The effects of differentinstructional designs on conceptual understanding and knowledge co-construction.pdf',
  //   import.meta.url,
  // );

  // const pdfUrl = new URL(
  //   'https://www.sh-tz.com/GraduateStudyWebApp/UploadFiles/PaperUploadFile/test20210516113936.pdf',
  //   import.meta.url,
  // );

  // Computer-supported collaborative concept mapping The effects of differentinstructional designs on conceptual understanding and knowledge co-construction
  // "http://localhost:5173/pdffiles/汇报论文.pdf", //本地PDF文件路径放在/public中
  const currentPage = ref(1);
  setTimeout(() => {
    currentPage.value = 2;
  }, 5000);
</script>
