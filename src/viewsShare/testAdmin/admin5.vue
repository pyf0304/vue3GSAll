<template>
  <div ref="divLayoutRef" class="app-container">
    <header>
      <h1>{{ pageTitle }}</h1>
    </header>
    <div class="main-content">
      <aside class="sidebar">
        <!-- 菜单内容 -->
        <div>
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Your Website</a>
            </div>
          </nav>
          <div class="container-fluid">
            <div class="row">
              <!-- 左侧垂直菜单栏 -->
              <div class="col-md-3">
                <ul class="nav flex-column">
                  <li class="nav-item" v-for="(module, index) in menu" :key="index">
                    <a
                      class="nav-link"
                      :class="{ active: module.active }"
                      href="javascript:void"
                      @click="toggleActive(module)"
                    >
                      {{ module.name }}
                    </a>
                    <ul class="nav flex-column ml-3" v-if="module.active">
                      <li class="nav-item" v-for="(item, idx) in module.items" :key="idx">
                        <a
                          class="nav-link"
                          href="javascript:void"
                          @click="addTab(module.name, item.name)"
                          >{{ item.name }}</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main class="content">
        <!-- 主要内容，包含多个标签页 -->
        <el-tabs v-model="currentTab">
          <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label">
            <i class="el-icon-close"></i>
            <component :is="tab.component"></component>
          </el-tab-pane>
        </el-tabs>
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
      active: true,
      items: [
        { name: 'About', component: About },
        { name: 'About2', component: About2 },
        // 更多 ModuleA 的菜单项
      ],
    },
    {
      name: 'ModuleB',
      active: false,
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
  // 切换菜单状态
  const toggleActive = (module: any) => {
    menu.value.forEach((m) => {
      if (m !== module) {
        m.active = false;
      }
    });
    module.active = !module.active;
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
</script>
<style>
  .nav-link {
    cursor: pointer;
  }

  .nav-link.active {
    font-weight: bold;
  }
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
    width: 250px;
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
