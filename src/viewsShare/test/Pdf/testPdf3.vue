<template>
  <iframe
    src="/pdf/qaPdf.html?zoom=1.1&file=http://localhost:8090/pdffiles/AAA.pdf"
    width="800"
    height="600"
    frameborder="0"
    scrolling="auto"
  ></iframe>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  // import pdfUrl from '/1人力资源管理服务外包协议2.0.pdf'
  export default defineComponent({
    name: 'AboutPyf',

    setup() {
      // const pdfUrl = new URL(
      //   '/pdffiles/Computer-supported collaborative concept mapping The effects of differentinstructional designs on conceptual understanding and knowledge co-construction.pdf',
      //   import.meta.url,
      // );
      const pdfUrl = new URL('/pdffiles/AAA.pdf', import.meta.url);

      const currentPage = ref(1);
      setTimeout(() => {
        currentPage.value = 2;
      }, 5000);

      function pdfLoaded(data: any) {
        console.log('function pdfLoaded(data: any) ');
        console.log(data);
        // alert('pdfLoaded');
      }
      return {
        pdfLoaded,
        pdfUrl,
        currentPage,
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
