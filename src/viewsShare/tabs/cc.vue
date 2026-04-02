<template>

    <span class="text-primary h4">cc页面:</span>
    <span>cc页面:</span>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";
// defineProps<{ msg: string }>()
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";

export default defineComponent({
  name: "cc",
  props: { msg: String },
  setup(props) {
    // const msg = ref(props);
    const prop1 = ref("");
    const prop2 = ref("");
    let { msg } = toRefs(props);
    const btn_Click = (strCommandName: string, strKeyId: string): void => {
      alert(`"命令:${strCommandName}, 关键字:${strKeyId}.`);
    };
    function GetPropValue() {
      alert(prop1.value);
    }
    return {
      btn_Click,
      msg,
      prop1,
      prop2,
      GetPropValue,
    };
  },
  methods: {},
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
