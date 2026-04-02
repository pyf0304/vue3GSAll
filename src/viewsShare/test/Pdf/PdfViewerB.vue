<template>
  <div>
    <button @click="loadPdf">加载 PDF 文件</button>
    <div ref="pdfContainer"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  // import pdfjs from 'pdfjs-dist';

  import pdfjs from 'pdfjs-dist';
  // import pdfjs from 'pdfjs-dist/build/pdf';
  // import * as pdfjs from 'pdfjs-dist/build/pdf';
  // declare module 'pdfjs-dist/build/pdf' {
  //   const pdfjs: any;
  //   export = pdfjs;
  // }

  export default defineComponent({
    name: 'PdfViewerB',
    setup() {
      const pdfContainer = ref<HTMLElement | null>(null);

      const loadPdf = async () => {
        if (!pdfContainer.value) return;

        // PDF 文件的 URL
        const pdfUrl = 'http://localhost:5173/pdffiles/汇报论文.pdf';

        // 创建一个 PDF 文档实例
        const pdf = await pdfjs.getDocument(pdfUrl).promise;

        // 获取第一页
        const page = await pdf.getPage(1);

        // 设置缩放比例
        const scale = 1.5;

        // 获取页面视图
        const viewport = page.getViewport({ scale });

        // 创建 Canvas 元素
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // 获取 Canvas 2D 上下文
        // const context = canvas.getContext('2d');
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;
        // if (canvasContext == null) return;
        // 渲染 PDF 到 Canvas
        await page.render({ canvasContext: context, viewport }).promise;

        // 将 Canvas 添加到容器
        pdfContainer.value.appendChild(canvas);
      };

      onMounted(() => {
        // 在组件挂载后加载 PDF 文件
        loadPdf();
      });

      return { pdfContainer, loadPdf };
    },
  });
</script>

<style scoped>
  /* 添加样式 */
</style>
