import Vue from 'vue'
import Router from 'vue-router'
import {db} from './firebasedb'

import Home from './views/Home'
import About from './views/About'
import ViewProduct from './views/ViewProduct'
import Cart from './views/Cart'
import Profile from './views/Profile'
import SellerSignUp from './views/SellerSignUp'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/view-product',
      name: 'view-product',
      component: ViewProduct
    },
    {
      path: '/seller-signup',
      name: 'seller-signup',
      component: SellerSignUp
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta:{
        requiresAuth: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
    var requiresAuth = to.matched.some( record => record.meta.requiresAuth );
    var currentUser = db.auth().currentUser;
    // when route requires auth and there's no current user, reidrect to '/login'
    if(requiresAuth && !currentUser){
      next('/home');
    // when we go to login route and are already logged in, we can skip this page
    // so we redirect to the homepage
    }else {
      next(); // you called `next('/')` which redirected to the homepage over and over again.
    }
  });

export default router;