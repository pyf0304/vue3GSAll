<template>
  <div>
    <button @click="doDownload">下载文件</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'DownloadFile',
    setup() {
      async function downloadFile() {
        const downloadUrl =
          'http://localhost:8090/gsall/UploadFiles/PaperUploadFile/设计思维理念下的STEM课程设计...院REDlab STEM课程为例_吴昭20220107033454.pdf';
        const response = await fetch(downloadUrl);
        const blob = await response.blob();

        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = '文件名.pdf';

        // 阻止默认导航事件
        link.addEventListener('click', (e) => {
          e.preventDefault();
        });

        // 触发下载
        link.click();
      }

      function doDownLoadBak() {
        const downloadUrl =
          'http://localhost:8090/gsall/UploadFiles/PaperUploadFile/设计思维理念下的STEM课程设计...院REDlab STEM课程为例_吴昭20220107033454.pdf';

        const aLink = document.createElement('a');
        aLink.download = '文件名.pdf';
        aLink.href = downloadUrl;
        console.log(downloadUrl);
        // document.body.appendChild(aLink);
        aLink.click();
        // document.body.removeChild(aLink);
      }
      function doDownload() {
        const downloadUrl =
          'http://localhost:8090/gsall/UploadFiles/PaperUploadFile/设计思维理念下的STEM课程设计...院REDlab STEM课程为例_吴昭20220107033454.pdf';
        const fileName = '文件名.pdf';

        fetch(downloadUrl)
          .then((response) => response.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch((error) => {
            console.error('下载出错', error);
          });
      }
      return {
        doDownload,
      };
    },
  });
</script>
