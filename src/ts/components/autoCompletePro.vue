<template>
  <div class="autocomplete">
    <input
      ref="input"
      v-model="searchTerm"
      @input="filterSuggestions"
      @keydown="handleKeyDown"
      @blur="hideSuggestions"
    />

    <!-- Display suggestions only when there are matching items -->
    <ul v-if="showSuggestions" class="suggestions">
      <li
        v-for="(suggestion, index) in filteredSuggestions"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click="selectSuggestion(suggestion)"
        @mouseover="setActiveIndex(index)"
      >
        {{ suggestion }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { ref, computed, onMounted, onUnmounted, defineComponent } from 'vue';
  import { clsCboObject } from '@/ts/PubFun/clsCboObject';
  export default defineComponent({
    name: 'Autocomplete',
    props: {
      suggestions: {
        type: Array<clsCboObject>,
        required: true,
      },
    },
    emits: ['on-finish-input'],
    setup(props, { emit }) {
      let IsInput = false;
      const searchTerm = ref('');
      const showSuggestions = ref(false);
      const activeIndex = ref(-1);
      const suggestionsText = props.suggestions.map((x) => x.text);
      const filteredSuggestions = computed(() => {
        IsInput = true;
        const term = searchTerm.value.toLowerCase();
        return suggestionsText.filter((suggestion) => suggestion.toLowerCase().includes(term));
      });

      const filterSuggestions = () => {
        showSuggestions.value = true;
        activeIndex.value = -1;
      };

      const selectSuggestion = (suggestion: string) => {
        searchTerm.value = suggestion;
        showSuggestions.value = false;
        console.error('准备弹出事件(in selectSuggestion)');
        const returnValue = getSelectedValue();
        emit('on-finish-input', {
          fldId: returnValue.value,
          fldName: returnValue.text,
          content: '这是自动完成输入框的返回字段值',
        });
      };

      const setActiveIndex = (index: number) => {
        if (index < 0) {
          activeIndex.value = filteredSuggestions.value.length - 1;
        } else if (index >= filteredSuggestions.value.length) {
          activeIndex.value = 0;
        } else {
          activeIndex.value = index;
        }
      };

      const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
          case 'ArrowUp':
            event.preventDefault();
            setActiveIndex(activeIndex.value - 1);
            break;
          case 'ArrowDown':
            event.preventDefault();
            setActiveIndex(activeIndex.value + 1);
            break;
          case 'Enter':
            if (activeIndex.value >= 0 && activeIndex.value < filteredSuggestions.value.length) {
              selectSuggestion(filteredSuggestions.value[activeIndex.value]);
              console.error('准备弹出事件(in handleKeyDown Enter)');
              const returnValue = getSelectedValue();
              emit('on-finish-input', {
                fldId: returnValue.value,
                fldName: returnValue.text,
                content: '这是自动完成输入框的返回字段值',
              });
            }
            break;
          case 'Escape':
            showSuggestions.value = false;
            break;
        }

        if (activeIndex.value >= 0 && activeIndex.value < filteredSuggestions.value.length) {
          searchTerm.value = filteredSuggestions.value[activeIndex.value];
        }
      };
      const getSelectedValue = () => {
        // Implement the logic to get the selected value
        // ...
        const objCboObject = props.suggestions.find((x) => x.text == searchTerm.value);
        if (objCboObject == null) {
          const obj: clsCboObject = { value: '', text: searchTerm.value };
          return obj;
        }
        return objCboObject; //'Selected Value';
      };
      const hideSuggestions = () => {
        
        setTimeout(() => {
          showSuggestions.value = false;
          if (IsInput == false) return;

          console.error('光标离开事件(in hideSuggestions)');
          const returnValue = getSelectedValue();
          emit('on-finish-input', {
            fldId: returnValue.value,
            fldName: returnValue.text,
            content: '这是自动完成输入框的返回字段值',
          });
          IsInput = false;
        }, 200);
      };

      onMounted(() => {
        document.addEventListener('click', hideSuggestions);
      });

      onUnmounted(() => {
        document.removeEventListener('click', hideSuggestions);
      });
      return {
        searchTerm,
        filterSuggestions,
        handleKeyDown,
        hideSuggestions,
        showSuggestions,
        filteredSuggestions,
        activeIndex,
        selectSuggestion,
        setActiveIndex,
        getSelectedValue,
      };
    },
  });
</script>

<style scoped>
  /* Styles remain the same */
</style>
