<!-- <template>
    <div class="login-container">
      <el-card class="login-card">
        <h3 class="login-title">Login</h3>
        <el-form class="login-form" :model="form" :rules="rules" ref="form">
          <el-form-item prop="username">
            <el-input v-model="form.username" prefix-icon="el-icon-user" placeholder="Username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" type="password" prefix-icon="el-icon-lock" placeholder="Password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-btn" @click="submitForm">Login</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { ElButton, ElCard, ElForm, ElFormItem, ElInput } from 'element-plus';
  import { required } from '@vuelidate/validators';
  import { useVuelidate } from '@vuelidate/core';
  
  interface Form {
    username: string;
    password: string;
  }
  
  export default defineComponent({
    name: 'Login',
    components: {
      ElButton,
      ElCard,
      ElForm,
      ElFormItem,
      ElInput,
    },
    setup() {
      const rules = {
        username: { required },
        password: { required },
      };
  
      const form = useVuelidate<Form>({ rules });
  
      function submitForm() {
        if (form.$v.$invalid) return;
  
        // Here you can perform any necessary login logic,
        // such as sending a request to a server to verify the user's credentials
        console.log(`Username: ${form.username}, Password: ${form.password}`);
      }
  
      return {
        form,
        rules,
        submitForm,
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
    background-color: #f5f7fa;
  }
  
  .login-card {
    width: 400px;
  }
  
  .login-title {
    text-align: center;
  }
  
  .login-form {
    margin-top: 20px;
  }
  
  .login-btn {
    width: 100%;
  }
  </style>
   -->