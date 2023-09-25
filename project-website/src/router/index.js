import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MetricsView from '../views/MetricsView.vue'
import TeamView from '../views/TeamView.vue'
import TimeTrackingView from '../views/TimeTrackingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/metrics',
    name: 'metrics',
    component: MetricsView
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  },
  {
    path: '/time-tracking',
    name: 'time-tracking',
    component: TimeTrackingView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
