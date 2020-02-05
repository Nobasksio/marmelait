/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');

require('bootstrap')

import Vue from 'vue'

import VueRouter from 'vue-router'

var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

import {routes} from "../routes/routes";

Vue.use(VueRouter)

import BootstrapVue from 'bootstrap-vue'

import mainSubHeader from '../components/main-sub-header'
Vue.component('main-sub-header',mainSubHeader)

import mainheader from '../components/header-my'
Vue.component('main-header',mainheader)

import sliderBrand from '../components/slider-brand'
Vue.component('slider-brand',sliderBrand)

import mainSlider from '../components/main-slider'
Vue.component('main-slider',mainSlider)

import mainNewsSlider from '../components/main-news-slider'
Vue.component('main-news-slider',mainNewsSlider)

import subscribeForm from '../components/subsribe-form'
Vue.component('subscribe-form',subscribeForm)

import newsPage from '../components/news-page2'
Vue.component('news-page',newsPage)

import actionDetailPage from '../components/action-detail-page'
Vue.component('action-detail-page',actionDetailPage)

import newsDetailPage from '../pages/promotions/news-detail-page'
Vue.component('news-detail-page',newsDetailPage)


import departmentList from '../components/department-list'
Vue.component('department-list',departmentList)

import contacts from '../components/contacts'
Vue.component('contacts',contacts)

import footermy from '../components/footer'
Vue.component('footer-my',footermy)

import ourMap from '../components/our-map'
Vue.component('our-map',ourMap)

import renterPage from '../pages/other/renter-page'
Vue.component('renter-page',renterPage)

import breadCrumbs from '../components/bread_crumbs'
Vue.component('bread-crumbs',breadCrumbs)

import plainPage from '../pages/other/plain-page'
Vue.component('plain-page',plainPage)

import weCool from '../components/we-cool/we-cool'
Vue.component('we-cool',weCool)

import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
})


Vue.use(BootstrapVue)

const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    mode:'history'
})

const axios = require('axios');
new Vue({
    el: '#app',
    router,
    mounted(){
        axios.get('/api/app_state' )
            .then((response)=> {
                this.app_state = response.data
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    data: {
        app_state: {
            renters:[],
        }
    }
})
