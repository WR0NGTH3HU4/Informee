import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'
import Kezdolap from '@/views/Kezdolap.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Kezdolap',
      component: Kezdolap,
      meta: {
        public: true
      }
    },
    {
      path: '/rolunk',
      name: 'Rolunk',
      component: () => import('../views/Rolunk.vue'),
      meta: {
        public: true
      }
    },
    {
      path: '/posztok',
      name: 'Posztok',
      component: () => import('../views/Posztok.vue'),
      //Ideiglenesen, teszteléshez !!!
      meta: {
        public: false
      }
    },
    {
      path: '/posztszerkeszto',
      name: 'PosztSzerkeszto',
      component: () => import('../views/PosztSzerkeszto.vue'),
      //Ideiglenesen, teszteléshez
      meta: {
        public: true
      }
    },
    {
      path: '/poszt',
      name: 'Poszt',
      component: () => import('../views/Poszt.vue'),
      //Ideiglenesen, teszteléshez
      meta: {
        public: false
      }
    },
    {
      path: '/sajatposztok',
      name: 'SajatPosztok',
      component: () => import('../views/SajatPosztok.vue'),
      meta: { public: false}
    },
    {
      path: '/bejelentkezes',
      name: 'Bejelentkezes',
      component: () => import('../views/Bejelentkezes.vue'),
      meta: {
        public: true
      }
    },
    {
      path: '/regisztracio',
      name: 'Regisztracio',
      component: () => import('../views/Regisztracio.vue'),
      meta: {
        public: true
      }
    },

    {
      path:'/faq',
      name:'Faq',
      component:() => import('../views/GyakranIsmetelt.vue'),
      meta:{
        public: true
      }
    },
    {
      path:'/profil',
      name:'Profil',
      component:() => import('../views/Profile.vue'),
      meta:{
        public:false
      }
    }
]
});

function getNavLinks() {
  
}

router.beforeEach((to, from) => {
  const userStore = useUserStore()

  if (to.meta['public'] || userStore.loggedIn()) {
    return // Ha publikus a route vagy a bejelentkezve fgv true akkor a route megjelenik
  }

  router.push('login') // "else" -> küldje a login oldalra
})

export default router
