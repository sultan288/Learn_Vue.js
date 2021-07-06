import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";

Vue.use(VueRouter)

const router = new VueRouter({
   routes: [
     {
       path: '/',
       component: Home
     },
     {
       path: '/about-us',
       component: About
     },
     {
       path: '/contact',
       component: Contact
     },
     {
        path: '/pricing',
        component: Pricing
     },
     {
       path: '/faq',
       component: Faq
     }
   ]
})

export default router
