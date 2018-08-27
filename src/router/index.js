import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import WhyVideo from '@/components/WhyVideo'
import AboutUs from '@/components/AboutUs'
import LandingPage from '@/components/Landing Page/LandingPage'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'

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
        },
        {
            path: '/landing',
            name: 'LandingPage',
            component: LandingPage
        },
        {
            path: '/pricing',
            name: 'Pricing',
            component: Pricing
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }
    ]
})
