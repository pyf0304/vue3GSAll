<template>
  <div class="aa">
    <div id="div1">
      <button @click="toggleDropdown($event)">Toggle Dropdown1</button>
      <ul id="ul1" style="display: none" class="myDropdown-menu">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    <div id="div2">
      <button @click="toggleDropdown($event)">Toggle Dropdown2</button>
      <ul id="ul2" style="display: none" class="myDropdown-menu">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>

    <!-- <ul v-if="isOpen">
      <li>Item 11</li>
      <li>Item 22</li>
      <li>Item 33</li>
    </ul> -->
  </div>
</template>

<script lang="ts">
  import { ref, computed } from 'vue';

  export default {
    name: 'aa',
    setup() {
      const isOpen = ref(false);
      const currDivId = ref('');
      const toggleDropdown = (event: any) => {
        // 当文件选择框的值发生变化时触发
        console.log('event.target:', event.target); // 获取选择的文件
        const divParent = event.target.parentNode as HTMLDivElement;
        const arrUl = divParent.getElementsByTagName('ul');

        if (arrUl.length > 0) {
          const objUl = arrUl[0];
          if (objUl.style.display == 'none') {
            objUl.style.display = 'block';
          } else {
            objUl.style.display = 'none';
          }
        }
        currDivId.value = divParent.id;
        console.log('toggleDropdown, currDivId.value', currDivId.value);
        isOpen.value = !isOpen.value;
      };
      const isOpen4Div = (divId: string) => {
        if (divId == currDivId.value && isOpen.value == true) return true;
        else return false;
      };
      return {
        isOpen,
        currDivId,
        toggleDropdown,
        isOpen4Div,
      };
    },
  };
</script>

<style scoped>
  .myDropdown-menu {
    position: relative;
  }

  .myDropdown-menu ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
  }

  .myDropdown-menu li {
    list-style: none;
    margin-bottom: 5px;
  }

  .myDropdown-menu li:hover {
    background-color: #f2f2f2;
  }

  .myDropdown-menu.show ul {
    display: block;
  }
</style>
