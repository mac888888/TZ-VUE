import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Home/HelloWorld'
import Login from '@/components/Login/Login'
import Work from '@/components/Work/Work'
import WorkDetail from '@/components/Work/WorkDetail'
import Message from '@/components/Message/Message'
import My from '@/components/My/My'
import Notice from '@/components/Notice/Notice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
      meta: {tabShow: true}
    },
    {
      path: '/workDetail',
      name: 'WorkDetail',
      component: WorkDetail
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: {tabShow: true}
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      meta: {tabShow: true}
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice,
      meta: {tabShow: true}
    }
  ]
})
