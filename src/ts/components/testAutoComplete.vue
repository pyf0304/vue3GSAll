<template>
  <div>
    <Autocomplete ref="autocompleteRef" :suggestions="autocompleteSuggestions" />
    <button @click="getSelectedValue">Get Selected Value</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import Autocomplete from './autoComplete.vue';
  export default defineComponent({
    components: {
      Autocomplete,
    },
    setup() {
      const autocompleteSuggestions: string[] = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];
      // Define a ref for the Autocomplete component
      const autocompleteRef = ref<any>();
      // data() {
      //   return {
      //     suggestions: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
      //   };
      // },
      const getSelectedValue = () => {
        const selectedValue = autocompleteRef.value.getSelectedValue();
        console.log('Selected Value:', selectedValue);
        // Do something with the selected value
      };
      return {
        autocompleteSuggestions,
        autocompleteRef,
        getSelectedValue,
      };
    },
    methods: {
      getSelectedValueBak() {
        const selectedValue = this.autocompleteRef.value.getSelectedValue();
        console.log('Selected Value:', selectedValue);
        // Do something with the selected value
      },
    },
  });
</script>
