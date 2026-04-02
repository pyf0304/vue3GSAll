<template>
  <div>
    <!-- <h3>基于vue3 vite ts 的Web编程-教学样例</h3> -->
    <router-view />
  </div>
</template>

<script lang="ts">
  import HelloWorld from './components/HelloWorld.vue';
  import { defineComponent, watch } from 'vue';
  import { useRoute } from 'vue-router';
  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld: HelloWorld,
    },
    setup() {
      const route = useRoute();
      console.debug(`current route name on component setup init: ${route}`);
      // You could use computed property which re-evaluates on route name updates
      // const routeName = computed(() => route.name);
      // You can watch the property for triggering some other action on change
      watch(
        () => route.name,
        () => {
          console.debug(`MyCoolComponent - watch route.name changed to ${route}`);
          // Do something here...
          console.log(route.path);
          console.log(route);
          // Optionally you can set immediate: true config for the watcher to run on init
          //}, { immediate: true });
        },
      );
      const btn_Click = (strCommandName: string): void => {
        const strKeyId = '';
        alert(`"命令:${strCommandName}, 关键字:${strKeyId}.`);
      };
      return {
        route,
        btn_Click,
      };
    },
    methods: {
      click() {
        this.$router.push({
          path: '/about',
          query: {
            id: Math.ceil(Math.random() * 100),
          },
        });
      },
    },
  });
</script>
<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
