<template>
  <div ref="divLayoutRef" class="app-container">
    <header>
      <h1>{{ pageTitle }}</h1>
    </header>
    <div class="main-content">
      <aside class="sidebar">
        <!-- 菜单内容 -->
        <ul>
          <li v-for="module in menu" :key="module.name">
            {{ module.name }}
            <ul>
              <li v-for="item in module.items" :key="item.name">
                <button @click="addTab(module.name, item.name)">
                  {{ item.name }}
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
      <main class="content">
        <el-tabs v-model="currentTab">
          <el-tab-pane v-for="tab in tabs" :key="tab.name">
            <template v-slot:label>
              <span class="mr-2">{{ tab.label }}</span>
              <span>&nbsp;&nbsp;</span>
              <!-- <a href="#" @click="closeTab(tab)"><i class="el-icon-close"></i><span>删除</span></a> -->
              <a href="javascript:void(0)" class="ml-2" title="移除该页面" @click="closeTab(tab)">
                <font-awesome-icon icon="times" style="color: rgb(164, 207, 247)" />
              </a>
            </template>
            <component :is="tab.component"></component>
          </el-tab-pane>
        </el-tabs>
        <!-- 主要内容，包含多个标签页
        <el-tabs v-model="currentTab">
          <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label">
            <span slot="label">
              {{ tab.label }}
              <a href="#" @click="closeTab(tab)"><i class="el-icon-close"></i><span>删除</span></a>
            </span>
            <component :is="tab.component"></component>
          </el-tab-pane>
        </el-tabs> -->
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { markRaw, ref, resolveComponent } from 'vue';
  import About0 from '@/viewsShare/test/about.vue';
  import About20 from '@/viewsShare/test/about2.vue';
  import About30 from '@/viewsShare/test/about3.vue';
  import { GetDivObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  const About = markRaw(About0);
  const About2 = markRaw(About20);
  const About3 = markRaw(About30);
  const divLayoutRef = ref();
  // 页面标题
  const pageTitle = ref('Your Page Title');

  // 菜单数据
  const menu = ref([
    {
      name: 'ModuleA',
      items: [
        { name: 'About', component: About },
        { name: 'About2', component: About2 },
        // 更多 ModuleA 的菜单项
      ],
    },
    {
      name: 'ModuleB',
      items: [
        { name: 'About3', title: '', component: About3, paras: '' },
        { name: '', title: '', component: About3, paras: '' },
        // 更多 ModuleB 的菜单项
      ],
    },
  ]);

  // 标签页

  // const tabs = ref([
  //   {
  //     label: 'About',
  //     name: 'About',
  //     component: About,
  //   },
  //   // 其他初始标签页
  // ]);
  const tabs = ref<any[]>([]);

  // 当前标签页
  const currentTab = ref('');

  // 添加标签页
  const addTab = (moduleName: string, componentName: string) => {
    const existingTab = tabs.value.find((tab) => tab.name === componentName);
    if (!existingTab) {
      const selectedModule = menu.value.find((module) => module.name === moduleName);
      if (selectedModule) {
        const selectedComponent = selectedModule.items.find((item) => item.name === componentName);
        if (selectedComponent) {
          tabs.value.push({
            label: componentName,
            name: componentName,
            component: selectedComponent.component,
          });
          currentTab.value = componentName;
        }
      }
    } else {
      currentTab.value = componentName;
    }
    // console.log('currentTab:', currentTab);
    // console.log('currentTab.value:', currentTab.value);
    setTimeout(() => {
      SelectedTab(componentName);
    }, 500);
  };
  const SelectedTab = (componentName: string) => {
    for (let i = 0; i < tabs.value.length; i++) {
      if (tabs.value[i].name == componentName) {
        const divName = divLayoutRef.value;
        const divCurr = GetDivObjInDivObj(divName, `tab-${i}`);
        if (divCurr) divCurr.click();
      }
    }
  };
  const closeTab1 = (index: number) => {
    tabs.value.splice(index, 1); // 删除选定的标签页
    if (currentTab.value === tabs.value[index]?.name) {
      currentTab.value = ''; // 关闭当前标签页
    }
  };
  const closeTab = (tabName: string) => {
    let indexToRemove = tabs.value.indexOf(tabName); // 获取要移除的元素的索引

    tabs.value.splice(indexToRemove, 1);
    if (currentTab.value === tabs.value[indexToRemove]?.name) {
      currentTab.value = ''; // 关闭当前标签页
    }  
  };
</script>
<style>
  /* 样式可以根据需求进行修改 */
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  header {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
  }

  .main-content {
    display: flex;
    flex: 1;
  }

  .sidebar {
    background-color: #f0f0f0;
    width: 200px;
    padding: 20px;
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
  }

  .sidebar li {
    margin-bottom: 10px;
  }

  .content {
    flex: 1;
    padding: 20px;
  }
</style>
