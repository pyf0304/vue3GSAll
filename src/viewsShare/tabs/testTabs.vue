<template>
  <div>
    <p>moduleB-items: {{ tabsRef }}</p>

    <!-- <p>countRef: {{ countRef }}</p>
        <p>message: {{ message }}</p>  -->
    <!-- <p>this.store.getter.count: {{ this.$store.getters.getCount }}</p> -->
    <span class="h5">测试动态tabs</span>
    <button @click="addTab('aaCom')">addItem-aa</button>
    <button @click="addTab('bbCom')">addItem-bb</button>
    <button @click="addTab('ccCom')">addItem-cc</button>

    <button @click="removeTab('aaCom')">removeItem-aa</button>
    <!-- <ul>
      <li v-for="(tab, index) in tabs" :key="index" @click="changeTab(tab)">
        {{ tab }}
      </li>
    </ul> -->

    <ul class="tabs">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="changeTab(tab)"
      >
        {{ tab }}
        <a href="javascript:void(0)" class="ml-2" title="移除该页面" @click="removeTab(tab)">
          <font-awesome-icon icon="times" style="color: rgb(164, 207, 247)" />
        </a>
      </li>
    </ul>
    <component :is="currentTabComponent" />
    <!-- <router-view /> -->
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from 'vue';
  //   import { useStore } from 'vuex'

  import aaCom from '@/viewsShare/tabs/aa.vue';
  import bbCom from '@/viewsShare/tabs/bb.vue';
  import ccCom from '@/viewsShare/tabs/cc.vue';
  import { useTabsStore } from '@/store/modules/tabs';

  // 组件中使用 Store

  export default defineComponent({
    name: 'testTabs',

    setup() {
      const tabsStore = useTabsStore();
      const components = {
        aaCom,
        bbCom,
        ccCom,
      };
      const activeTab = ref(0);
      // const activeTabLast = ref(1);
      const currentTabComponent = computed(() => {
        // const intActiveTab = activeTabLast.value;
        // if (intActiveTab > 0) {
        //   activeTab.value = intActiveTab;
        // }
        const myTabs = tabsStore.myTabs;
        const tabName = myTabs[activeTab.value];
        // return tabName;
        // return `${tabName}Com`;
        switch (tabName) {
          case 'aaCom':
            return aaCom;
          case 'bbCom':
            return bbCom;
          case 'ccCom':
            return ccCom;
        }
        // const arrEntries = Object.entries(components);
        // const objCom = arrEntries[activeTab.value];
        // return objCom;
        // const strIndex: any = `${tabName}Com`;
        // return components[tabName];
      });
      onMounted(() => {
        console.log('components list:', components);
        const componentNames = Object.keys(components);
        const arrEntries = Object.entries(components);
        for (let i = 0; i < arrEntries.length; i++) {
          const objCom = arrEntries[i];
          console.log(`arrEntries [${i}]:`, objCom);
          console.log(`typeof objCom [${i}]:`, typeof objCom);
        }

        // const arrProps = Object.entries(components);
        // for (let i = 0; i < arrEntries.length; i++) {
        //   const objCom = arrEntries[i];
        //   console.log(`arrEntries [${i}]:`, objCom);
        //   console.log(`typeof objCom [${i}]:`, typeof objCom);
        // }

        console.log('arrEntries:', arrEntries);
        // 遍历组件列表
        componentNames.forEach((componentName) => {
          // 对每个组件进行操作或其他处理
          console.log(componentName);
        });
        for (let i = 0; i < 3; i++) {
          console.log(`components [${i}]:`, components['aaCom']);
        }
        // components.forEach((component) => {
        //   console.log(component);
        // });
      });

      // const textRef = ref(store.state.moduleA.text);
      const tabsRef = ref(tabsStore.myTabs);

      function addTab(tabName: string): void {
        tabsStore.addTab(tabName);
        tabsRef.value = tabsStore.myTabs;
        let indexToActive = tabsStore.myTabs.indexOf(tabName); // 获取要移除的元素的索引
        if (indexToActive !== -1) {
          activeTab.value = indexToActive;
        }
      }
      function removeTab(tabName: string): void {
        let indexToActive = tabsStore.myTabs.indexOf(tabName); // 获取要移除的元素的索引

        tabsStore.removeTab(tabName);
        tabsRef.value = tabsStore.myTabs;
        if (indexToActive > 0) {
          activeTab.value = indexToActive - 1;
        } else {
          activeTab.value = 0;
        }
      }

      return {
        addTab,

        removeTab,
        tabsRef,

        activeTab,
        currentTabComponent,
        tabsStore,
      };
    },
    computed: {
      tabs() {
        // 这里是从 Vuex store 获取 tabs 状态
        // return this.$store.state.tabs;
        this.tabsRef = this.tabsStore.myTabs;

        return this.tabsRef;
      },
    },
    methods: {
      // addTab(componentName: any) {
      //   // 更新 Vuex store 中的 tabs 状态
      //   // this.$store.commit("addTab", componentName);
      //   store.commit("tabs/addTabs", componentName);
      //   this.tabsRef = store.state.tabs.myTabs;
      // },
      changeTab(tabName: string) {
        const indexToActive = this.tabsStore.myTabs.indexOf(tabName); // 获取要移除的元素的索引
        if (indexToActive != -1) this.activeTab = indexToActive;
        // 切换当前显示的组件
        // this.$router.push({ name: tabName });
      },
    },
  });
</script>
<style scoped>
  .moduleTitle {
    font-size: 20px;
    font-weight: bold;
  }

  .tabs-container {
    display: flex;
    flex-direction: row;
  }

  .tabs {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tabs li {
    cursor: pointer;
    padding: 10px 20px;
    background-color: #eee;
  }

  .tabs li.active {
    font-weight: bold;
    background-color: #ccc;
  }

  .tab-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #f0f0f0;
  }

  .page-content {
    position: absolute;
    top: 45px;
    right: 0;
    /*bottom: 42px;*/
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    z-index: 1;
  }

  #TopicName {
    font-size: 18px;
    font-style: italic;
    /*font-weight: bold;*/
  }

  .container {
    width: 100%;
    height: 45px;
    background-color: #007fff;
  }

  .container .logo a {
    float: left;
    font-size: 18px;
    padding-left: 10px;
    line-height: 45px;
    /* background: url(@/assets/css/index/img/logo_tz2.png) no-repeat; */
    /* width: 200px; */
  }

  .page-content-bg {
    /* position: absolute; */
    position: relative;
    top: 45px;
    right: 0;
    /*bottom: 42px;*/
    bottom: 0px;
    left: 220px;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    z-index: 100;
    display: none;
  }

  .layui-tab-content {
    padding: 5px;
  }
</style>
