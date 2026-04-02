<template>

    <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="活动名称" prop="name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
    </el-form>

</template>
  
<script lang="ts">
import { ElForm } from 'element-plus';
import 'element-plus/lib/theme-chalk/el-form.css';
import { defineComponent } from 'vue';

export default defineComponent({
  
  data() {
    return {
      form: {
        name: '',
        age: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        age: [
          { required: true, message: 'Please input age', trigger: 'blur' },
          { type: 'number', message: 'Age must be a number', trigger: 'blur' }
        ]
      },
    };
  },
  setup() {
   
  },
  
})
</script>