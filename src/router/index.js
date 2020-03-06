import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import ca from '@/components/ca'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/ca',
      name: 'ca',
      component: ca
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: details
    }
  ]
})
