<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <button @click="uploadFile">上传文件</button>
  </div>
</template>

<script lang="ts">
  import axios from 'axios';

  export default {
    data() {
      return {
        selectedFile: null,
      };
    },
    methods: {
      handleFileChange(event: any) {
        // 当文件选择框的值发生变化时触发
        this.selectedFile = event.target.files[0]; // 获取选择的文件
      },
      async uploadFile() {
        if (!this.selectedFile) {
          alert('请选择一个文件');
          return;
        }

        // 创建 FormData 对象
        const formData = new FormData();
        formData.append('file', this.selectedFile); // 将文件添加到 FormData
        console.log(formData.get('file')); // 输出选定的文件
        try {
          // 使用 axios 发送 POST 请求上传文件

          const strUrl = 'http://localhost:28524/ExamLibWA/testUploadPic/UploadFile/';
          const response = await axios.post(strUrl, formData, {
            headers: {
              'Content-Type': 'multipart/form-data', // 设置请求头，必须为multipart/form-data
            },
          });

          // 处理上传成功后的响应
          console.log('文件上传成功', response.data);
        } catch (error) {
          // 处理上传失败时的错误
          console.error('文件上传失败', error);
        }
      },
    },
  };
</script>
