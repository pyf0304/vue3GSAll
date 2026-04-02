<template>
  <el-row>
    <el-col :span="12">col-12-pyf</el-col>
    <el-col :span="12">col-12</el-col>
  </el-row>
  <span class="example">上海师范大学-测试scss(如果为蓝颜色就对了)</span>
  <br />
  <span class="example2">上海师范大学-这是用css定义的红颜色</span>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TElement",
  setup() {
    return {};
  },
});
</script>
<style lang="less">
.example {
  color: @primary-color;
}
.example2 {
  color: red;
}
</style>
