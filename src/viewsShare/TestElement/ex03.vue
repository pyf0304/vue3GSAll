<template>
    <div id="loginContainer">
      <el-form
        label-position="left"
        label-width="formWidth"
        ref="loginForm"
        :model="inputValue"
        :rules="rules"
      >
        <el-form-item label="用户名" prop="uname" ref="formItemName">
          <el-input v-model="inputValue.uname"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="psword" ref="formItemPassword">
          <el-input v-model="inputValue.psword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" plain @click="goLogin">确定</el-button>
          <el-button type="primary" plain @click="goReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  <script lang='ts'>
  import { defineComponent, reactive, toRefs, ref } from 'vue';
  import { ElFormItemContext } from 'element-plus/es/tokens';
   
  export default defineComponent({
    name: 'login',
    setup() {
      const loginForm = ref<ElFormItemContext>();
      const state = reactive({
        inputValue:{
          uname:'',
          psword:''
        },
        rules:{
          uname:[
            {
              required:true,
              message:'用户名不能为空',
              trigger:'blur'
            }
          ],
          psword:[
            {
              required:true,
              message:'密码不能为空',
              trigger:'blur'
            },
            {
              min:6,
              max:18,
              message:'密码长度需要在6-18位之间',
              trigger:'change'
            }
          ]
        },
        formWidth:'120px',
      });
   
      const goLogin = async ()=>{
        if (!loginForm.value) return;
        else 
        try {
          await loginForm.value.validate('blur');
          console.log(state.inputValue.uname);
        } catch (error) {
          throw new Error('表单验证失败？')
        }
      }
      const goReset = ()=>{
        loginForm.value?.resetField();
      }
      return {
        ...toRefs(state),
        goLogin,
        goReset,
        loginForm
      }
    },
  });
  </script>