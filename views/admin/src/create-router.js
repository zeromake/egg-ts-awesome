import Router from 'vue-router';

export default function createRouter() {
  const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [

    ],
  });
  return router;
}
