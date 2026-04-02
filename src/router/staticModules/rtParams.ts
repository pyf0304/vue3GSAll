import type { RouteRecordRaw } from 'vue-router';
// import RouterView from '@/layout/routerView/index.vue';
const moduleName = 'rtparams';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/rtparams',
    // component: RouterView,
    // redirect: '/rtparams/settings',
    component: () => import('@/views/RT_Params/ExplainTypeCRUD.vue'),
    meta: {
      title: '研培参数',
      hideInMenu: true,
    },
    children: [
      {
        path: 'settings',
        name: `${moduleName}-settings`,
        component: () => import('@/views/account/settings.vue'),
        meta: { title: 'settings', hideInMenu: true },
      },
    ],
  },
  {
    path: '/about3',
    name: 'myabout3',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/testMyDropButton.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  },
  {
    path: '/explainType2',
    name: `ExplainType2`,
    component: () => import('@/views/RT_Params/ExplainTypeCRUD.vue'),
    meta: { title: 'ExplainType', hideInMenu: true },
  },
];
export default routes;
