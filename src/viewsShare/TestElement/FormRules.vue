<template>
  <div>
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="Name" prop="name" :rules="formRules.isNotNull">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input v-model.number="form.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { FormRules } from 'element-plus'
//   import type { useElement } from 'element-plus'
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
export default defineComponent({   
  setup() {
    const form = ref({
      name: '',
      age: ''
    })
    const rules = ref({
      name: [
        { required: true, message: 'Please input name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
      ],
      age: [
        { required: true, message: 'Please input age', trigger: 'blur' },
        { type: 'number', message: 'Age must be a number', trigger: 'blur' }
      ]
    })

    return {
      form,    
      rules
    }
  },
  methods:
  {
    submitForm(formName: string) {
      const form = this.$refs[formName]
      form.validate((valid: any) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
})
</script>