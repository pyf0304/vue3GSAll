<!-- src\views\login\index.vue -->
<template>
    <div class="login-container">
        <el-form ref="formRef" class="login-form" :rules="rules" :model="user" size="large" @submit.prevent="handleSubmit">
            <div class="login-form__header">
                SHOP ADMIN
            </div>
            <el-form-item prop="account">
                <el-input v-model="user.account" placeholder="请输入用户名" prefix-icon="user" />
            </el-form-item>
            <el-form-item prop="pwd">
                <el-input v-model="user.pwd" type="password" placeholder="请输入密码" prefix-icon="lock" />
            </el-form-item>
            <el-form-item prop="imgcode">
                <div class="imgcode-wrap">
                    <el-input v-model="user.imgcode" placeholder="请输入验证码" prefix-icon="key" />
                    <img class="imgcode" alt="验证码" :src="captchaSrc" @click="loadCaptcha">
                </div>
            </el-form-item>
            <el-form-item>
                <el-button class="submit-button" type="primary" :loading="loading" native-type="submit">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script lang="ts">
import type { FormInstance, FormItemRule } from 'element-plus'
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
  
import { login } from '../../api/common'
import { useRouter } from 'vue-router';
import { defineComponent, onMounted, reactive, ref } from 'vue';
export default defineComponent({
    name: "Lsn_0101",
    setup() {
        const router = useRouter()
        // 获取表单组件实例
        const formRef = ref<FormInstance>()
        // 表单数据
        const user = reactive({
            account: 'admin',
            pwd: '123456',
            imgcode: ''
        })
        // 表单提交状态
        const loading = ref(false)
        // 验证码图片地址
        const captchaSrc = ref('')
        // 表单验证规则
        const rules = ref<Record<string, FormItemRule[]>>({
            account: [
                { required: true, message: '请输入账号', trigger: 'change' }
            ],
            pwd: [
                { required: true, message: '请输入密码', trigger: 'change' }
            ],
            imgcode: [
                { required: true, message: '请输入验证码', trigger: 'change' }
            ]
        })

        // 获取验证码图片地址
        const loadCaptcha = () => {
            captchaSrc.value = import.meta.env.VITE_API_BASEURL + '/captcha?' + Date.now()
        }

        // 表单提交
        const handleSubmit = async () => {
            if (!formRef.value) return

            // 表单验证
            const valid = await formRef.value.validate()

            if (!valid) return false

            // 验证通过 展示 loading
            loading.value = true

            // 请求提交
            const data = await login(user).finally(() => {
                loading.value = false
            })
            console.log(data)

            // 处理响应
            router.replace({
                name: 'home'
            })
        }

        onMounted(() => {
            loadCaptcha()
        })
        return{
            rules,
            user,
            handleSubmit,
            captchaSrc,
            loading,
            loadCaptcha
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
  
  