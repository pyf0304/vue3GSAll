<template>
  <div class="login-container">
    <h2 class="login-title">Login</h2>
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      label-width="80px"
      class="login-form"
    >
      <el-form-item
        label="Username"
        prop="username"
        :rules="[{ required: true, message: 'Please enter your username', trigger: 'blur' }]"
      >
        <el-input v-model="loginForm.username" placeholder="Enter username"></el-input>
      </el-form-item>
      <el-form-item
        label="Password"
        prop="password"
        :rules="[{ required: true, message: 'Please enter your password', trigger: 'blur' }]"
      >
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="Enter password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

  export default defineComponent({
    components: {
      ElForm,
      ElFormItem,
      ElInput,
      ElButton,
    },
    setup() {
      const loginFormRef = ref(null);

      const loginForm = ref({
        username: '',
        password: '',
      });

      const loginRules = ref({
        username: [{ required: true, message: 'Please enter your username', trigger: 'blur' }],
        password: [{ required: true, message: 'Please enter your password', trigger: 'blur' }],
      });

      const handleSubmit = () => {
        if (!loginFormRef.value) return;
        const myFormRefValue = loginFormRef.value as any;
        myFormRefValue.validate((valid: any) => {
          if (valid) {
            console.error(myFormRefValue);
            console.log(loginForm.value.username);
            console.log(loginForm.value.password);

            console.log('validate is success!');
            // handle login logic here
          } else {
            console.log('Error: invalid login form');
          }
        });
      };

      return {
        loginFormRef,
        loginForm,
        loginRules,
        handleSubmit,
      };
    },
  });
</script>

<style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .login-title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
  }

  .login-form {
    width: 400px;
  }
</style>
