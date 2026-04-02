<template>
    <div class="login-container">
        <el-form ref="formRef" class="login-form" :rules="rules" :model="user" size="large">
            <div class="login-form__header">
                SHOP ADMIN
            </div>
            <el-form-item prop="account">
                <el-input v-model="user.account" placeholder="请输入用户名" prefix-icon="user" />
            </el-form-item>
            <el-form-item prop="pwd">
                <el-input v-model="user.pwd" type="password" placeholder="请输入密码" prefix-icon="lock" />
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="handleSubmit">Login</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>
  
<script lang="ts">

// import { login } from '../../api/common.ts'
import { useRouter } from 'vue-router';

import { defineComponent, onMounted, ref } from 'vue'
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'


// import { login } from '../../api/common';
export default defineComponent({
    components: {
        ElForm,
        ElFormItem,
        ElInput,
        ElButton,
    },
    setup() {
        const router = useRouter()
        // 获取表单组件实例
        // const formRef = ref<FormInstance>()
        const formRef = ref(null)

        // 表单数据
        const user = ref({
            account: 'admin',
            pwd: '123456',
            imgcode: ''
        })

        //     const loginForm = ref({
        //     username: '',
        //     password: '',
        //   })

        // // 表单提交状态
        // const loading = ref(false)
        // // 验证码图片地址
        // const captchaSrc = ref('')
        // 表单验证规则
        const rules2 = ref({
            account: [
                { required: true, message: '请输入账号', trigger: 'change' }
            ],
            pwd: [
                { required: true, message: '请输入密码', trigger: 'change' }
            ],
            // imgcode: [
            //     { required: true, message: '请输入验证码', trigger: 'change' }
            // ]
        })
        const rules = ref({
            account: [{ required: true, message: 'Please enter your username', trigger: 'blur' }],
            pwd: [{ required: true, message: 'Please enter your password', trigger: 'blur' }],
        })


        const handleSubmit = () => {
            
            console.error(formRef.value);
            if (!formRef.value) return;
            const myFormRefValue = formRef.value as any;
            myFormRefValue.validate((valid: any) => {
                if (valid) {
                    console.error(myFormRefValue);
                    console.log(user.value.account);
                    console.log(user.value.pwd);

                    console.log('validate is success!');
                    // handle login logic here
                } else {
                    console.log('Error: invalid login form')
                }
            })
        }
        // 表单提交
        const handleSubmit2 = async () => {
            // this.$refs.form.validate
            // console.error(formRef);

            console.error(formRef.value);
            if (!formRef.value) return

            // 表单验证
            const valid = await (formRef.value as any).validate()

            if (!valid) return false
            console.log(user);
            // 验证通过 展示 loading
            // loading.value = true

            // 请求提交
            // const data = await login(user).finally(() => {
            //     loading.value = false
            // })
            // console.log(data)

            // 处理响应
            router.replace({
                name: 'home'
            })
        }

        return {
            formRef,
            rules,
            user,
            handleSubmit,
            // captchaSrc,
            // loading
        }
    },
    methods:
    {
        // 表单提交
        async handleSubmit2() {

            // console.error(this.$refs);//.validate
            // const aa = this.$refs.formRef;
            // console.error(aa);
            console.error(this.$refs.formRef);//.validate
            // console.error(this.$refs.formRef.validate);//.validate

            // console.error(this.$refs.formRef.value);//.validate

            // console.error(this.$refs.form);//.validate
            // console.error(formRef);
            // console.error(formRef.value);
            // if (!formRef.value) return

            // // 表单验证
            // const valid = await formRef.value.validate()

            // if (!valid) return false

            // // 验证通过 展示 loading
            // loading.value = true

            // // 请求提交
            // const data = await login(user).finally(() => {
            //     loading.value = false
            // })
            // console.log(data)

            // // 处理响应
            // router.replace({
            //     name: 'home'
            // })
        }
    }
});
</script>
  
<style lang="scss" scoped>
.login-container {
    min-width: 400px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2d3a4b;
}

.login-form {
    padding: 30px;
    border-radius: 6px;
    background: #fff;
    min-width: 350px;

    .login-form__header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 30px;
    }

    .el-form-item:last-child {
        margin-bottom: 0;
    }

    .submit-button {
        width: 100%;
    }

    .imgcode-wrap {
        display: flex;
        align-items: center;

        .imgcode {
            width: 130px;
            height: 40px;
            cursor: pointer;
        }
    }
}
</style>
  
  