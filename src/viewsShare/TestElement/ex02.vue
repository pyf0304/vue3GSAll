<template>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { ElForm, ElFormItem } from 'element-plus';
  
  export default defineComponent({
    components: {
      ElForm,
      ElFormItem,
    },
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
      };
    },
  });
  </script>