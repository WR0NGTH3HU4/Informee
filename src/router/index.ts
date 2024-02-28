import { useUserStore } from '@/stores/user';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    //Kezdőlap
    {
      path:'/Kezdolap',
      name: 'Kezdolap',
      component: () => import('../views/Kezdolap.vue'),
      meta: {
        public: true
      }
    },
    //Rólunk
    {
      path:'/Rolunk',
      name: 'Rolunk',
      component: () => import('../views/Rolunk.vue'),
      meta: {
        public: true
      }
    },
    //Posztok
    {
      path:'/Posztok',
      name: 'Posztok',
      component: () => import('../views/Posztok.vue')
    },
    //Saját posztok
    {
      path:'/SajatPosztok',
      name: 'SajatPosztok',
      component: () => import('../views/SajatPosztok.vue')
    },
    //Bejelentkezés
    {
      path:'/Login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    //Regisztráció
    {
      path:'/Registration',
      name: 'Registration',
      component: () => import('../views/Registration.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
});

router.beforeEach((to, from) =>{
  const userStore= useUserStore();

  if (to.meta['public'] || userStore.loggedIn()){
    return; // Ha publikus a route vagy a bejelentkezve fgv true akkor a route megjelenik
  }

  router.push('login') // "else" -> küldje a login oldalra
})

export default router
