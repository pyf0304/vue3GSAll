
import { defineStore } from 'pinia';

// 定义 ModuleAState
export interface ModuleAState {
  text: string
}
export const useModuleAStore = defineStore({
  id: 'moduleA',
  state(): ModuleAState {
    return {
      text: 'Hello from ModuleA',
    };
  },
  actions: {
    async SetText(payload: string) {
      const json = payload;
      this.text = json;
    },
  },
});
