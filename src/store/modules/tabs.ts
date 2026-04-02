import { defineStore } from 'pinia';
// 定义 TabsState
export interface TabsState {
  myTabs: string[];
}
// import { SET1_TEXT } from './mutations';

// 定义 ModuleA mutations
export const useTabsStore = defineStore({
  id: 'tabs',

  state(): TabsState {
    return {
      myTabs: [],
    };
  },

  actions: {
    addTab(tabName: string): void {
      if (this.myTabs.indexOf(tabName) == -1) {
        this.myTabs.push(tabName);
      }
    },
    removeTab(tabName: string): void {
      let indexToRemove = this.myTabs.indexOf(tabName); // 获取要移除的元素的索引
      if (indexToRemove !== -1) {
        this.myTabs.splice(indexToRemove, 1); // 从数组中移除一个元素
      }
    },
  },
});
