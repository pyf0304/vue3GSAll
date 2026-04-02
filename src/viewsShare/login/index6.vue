Sure! Here’s a sample code for a login form using Vue3 with Vite and TypeScript based on ElementPlus:

<template>
  <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="80px">
    <el-form-item label="Username" prop="username">
      <el-input v-model="loginForm.username"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input type="password" v-model="loginForm.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

export default defineComponent({
  name: 'LoginForm',
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
  },
  setup() {
    const loginForm = ref({
      username: '',
      password: '',
    });

    const loginRules = ref({
      username: [{ required: true, message: 'Please input your username', trigger: 'blur' }],
      password: [{ required: true, message: 'Please input your password', trigger: 'blur' }],
    });

    // const submitForm = (formName:string) => {
    //   const form = this.$refs[formName];
    //   form.validate((valid:any) => {
    //     if (valid) {
    //       console.log('submit!');
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // };

    return {
      loginForm,
      loginRules,
    //   submitForm,
    };
  },
  methods:{
     submitForm (formName:string)  {
      const form = this.$refs[formName] as any;
      form.validate((valid:any) => {
        if (valid) {
          console.log('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
});
</script>
