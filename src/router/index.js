import Vue from 'vue'
import Router from 'vue-router'
import  List from '@/components/List.vue'
import  Timer from '@/components/Timer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List,
      path: '/',
      name: 'Timer',
      component: Timer,
    }
  ]
})
