<template>
    <div class="login-container">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px" class="login-form">
        <el-form-item label="Username" prop="username">
          <el-input v-model="form.username" placeholder="Please enter your username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="form.password" placeholder="Please enter your password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
  
  export default defineComponent({
    name: 'Login',
    components: {
      ElForm,
      ElFormItem,
      ElInput,
      ElButton,
    },
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: 'Please enter your username', trigger: 'blur' },
            { min: 3, max: 10, message: 'Length should be between 3 and 10 characters', trigger: 'blur' },
          ],
          password: [
            { required: true, message: 'Please enter your password', trigger: 'blur' },
            { min: 6, max: 20, message: 'Length should be between 6 and 20 characters', trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission here
        // this.$refs.form.validate((valid:any) => {
        //   if (valid) {
        //     console.log('Form is valid');
        //   } else {
        //     console.log('Form is invalid');
        //   }
        // });
      },
    },
  });
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .login-form {
    width: 300px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  