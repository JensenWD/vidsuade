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
import Services from '@/components/Services'
import LandingPage3 from '@/components/Landing Page/LandingPage3'

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
            path: '/services',
            name: 'Services',
            component: Services
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
        },
        {
          path: '/mobileapps',
          name: 'LandingPage3',
          component: LandingPage3
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        return {x: 0, y: 0}
    }

})
