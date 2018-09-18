import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import WhyVideo from '@/components/WhyVideo'
import AboutUs from '@/components/AboutUs'
import LandingPage2 from '@/components/Landing Page/LandingPage2'
import LandingPage from '@/components/Landing Page/LandingPage'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import TermsOfUse from '@/components/TermsOfUse'
import PrivacyPolicy from '@/components/PrivacyPolicy'

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
            path: '/discount-logo-24680210',
            name: 'LandingPage',
            component: LandingPage
        },
        {
            path: '/animatedlogo',
            name: 'LandingPage2',
            component: LandingPage2
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
        },
        {
            path: '/terms',
            name: 'TermsOfUse',
            component: TermsOfUse
        },
        {
            path: '/privacy-policy',
            name: 'PrivacyPolicy',
            component: PrivacyPolicy
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }

})
