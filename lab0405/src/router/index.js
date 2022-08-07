import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventDetails from "../views/event/EventDetail.vue";
import Airlines from "../views/event/EventAirline.vue";
import EventLayout from "../views/event/EventLayout.vue";
import NotFoundView from "../views/NotFoundView.vue";
import NProgress from "nprogress";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      perPage: parseInt(route.query.perPage) || 3,
    }),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    children: [
      {
        path: "passenger/:id",
        name: "EventDetails",
        component: EventDetails,
        props: true,
      },
      {
        path: "airline/:id",
        name: "airlines",
        component: Airlines,
        prop: true,
      },
    ],
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFoundView,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
