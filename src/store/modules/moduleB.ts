
import { defineStore } from 'pinia';
// 定义 ModuleBState
export interface ModuleBState {
  items: string[]
}
// 定义 ModuleB mutations,mutation
export const useModuleBStore = defineStore({
  id: 'moduleB',

  state(): ModuleBState {
    return {
      items: ['aa', 'bb'],
    };
  },

  actions: {
    async addItem(item: string) {
      // const json = payload
      this.items.push(item);
    },
  },
});
