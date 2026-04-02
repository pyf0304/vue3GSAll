<template>
    <el-form :model="formData" :rules="formRules" label-width="100px">
    </el-form>
</template>

<script  lang="ts">
import { FormRulesMap } from 'element-plus/es/components/form/src/form.type';
import { defineComponent, reactive } from 'vue';

export default defineComponent({
    name: "TElement",
    
    setup() {
        const formRules = reactive<FormRulesMap>({
            phone: [
                {
                    validator: (rule: any, value: any, callback: any) => {
                        return callback()
                    },
                    trigger: 'blur'
                }
            ]
        });
   
        return {
        };
    },
});


</script>
