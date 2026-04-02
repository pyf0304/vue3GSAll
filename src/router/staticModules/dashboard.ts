import type { RouteRecordRaw } from 'vue-router';
import RouterView from '@/layout/routerView/index.vue';
const moduleName = 'dashboard';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: moduleName,
    redirect: '/dashboard/welcome',
    component: RouterView,
    meta: {
      title: 'dashboard',
      icon: 'icon-yibiaopan',
    },
    children: [
      {
        path: 'welcome',
        name: `${moduleName}-welcome`,
        meta: {
          title: 'workbench',
          icon: 'icon-shouye',
        },
        component: () =>
          import(/* webpackChunkName: "dashboard-welcome" */ '@/views/dashboard/welcome/index.vue'),
      },
    ],
  },
];
export default routes;
