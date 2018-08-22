import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import WhyVideo from '@/components/WhyVideo'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/why-video',
      name: 'WhyVideo',
      component: WhyVideo
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
})
