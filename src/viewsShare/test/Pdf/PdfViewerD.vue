<template>
  <div v-if="pdfDoc">
    <template v-for="index in pdfDoc._pdfInfo.numPages" :key="index">
      <canvas v-show="currentPage <= 0 || index == currentPage" class="pdf-page"></canvas>
    </template>
  </div>
</template>
<script setup>
  import { onMounted, ref } from 'vue';
  import * as pdfjsDist from 'pdfjs-dist';
  import * as pdfWorkerMin from 'pdfjs-dist/build/pdf.worker.min?url';
  console.log(pdfjsDist, pdfWorkerMin.default);
  const props = defineProps({
    src: {
      type: Object,
      required: true,
      // default: new URL('/1人力资源管理服务外包协议2.0.pdf', import.meta.url),
    },
    currentPage: {
      type: Number,
      default: 0,
    },
  });
  const emit = defineEmits(['loaded']);

  const pdfDoc = ref(null);

  onMounted(() => {
    pdfjsDist.GlobalWorkerOptions.workerSrc = pdfWorkerMin.default;
    pdfjsDist.getDocument(props.src).promise.then((pdf) => {
      pdfDoc.value = pdf;
      const pdfPages = document.getElementsByClassName('pdf-page');
      for (let i = 0; i < pdf._pdfInfo.numPages - 1; i++) {
        pdf.getPage(i + 1).then((page) => {
          const viewport = page.getViewport({ scale: 1 });
          const context = pdfPages[i].getContext('2d');
          pdfPages[i].height = viewport.height;
          pdfPages[i].width = viewport.width;
          page.render({
            canvasContext: context,
            viewport,
          });
        });
      }
      emit('loaded', pdf);
    });
  });
</script>
