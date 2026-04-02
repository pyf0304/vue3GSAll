<template>
  <div>
    <p>UserId: {{ UserId }}</p>
    <span> this a about2 page!</span>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'AboutPyf2',
    setup() {
      const UserId = ref('0001');
      return {
        UserId,
      };
    },
  });
</script>
