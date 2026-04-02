<template>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="Name" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input v-model.number="form.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">Submit</el-button>
        <el-button @click="resetForm('form')">Reset</el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
  import { useVuelidate } from '@vuelidate/core';
  import { required } from '@vuelidate/validators';
  
  export default defineComponent({
    name: 'MyForm',
    // components: {
    //   ElForm,
    //   ElFormItem,
    //   ElInput,
    //   ElButton,
    // },
    setup() {
      const form = ref({
        name: '',
        age: null,
      });
  
      const rules = {
        name: { required },
        age: { required },
      };
  
      const { meta, validate } = useVuelidate(rules, form);
  
      const submitForm = (formName:string) => {
        validate().then((result:any) => {
          if (!result) {
            console.log('error submit!!');
            return;
          }
          console.log('submit!!');
        });
      };
  
      const resetForm = (formName:string) => {
        meta.value.$reset();
      };
  
      return {
        form,
        rules,
        submitForm,
        resetForm,
      };
    },
  });