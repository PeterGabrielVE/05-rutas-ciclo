import { createRouter, createWebHashHistory } from 'vue-router'

import ListPage from '../modules/pokemon/pages/ListPage'
import AboutPage from '../modules/pokemon/pages/AboutPage'
import PokemonPage from '../modules/pokemon/pages/PokemonPage'
import NoPageFound from '../modules/shared/components/pages/NoPageFound'

const routes = [
    { 
      path: '/', 
      component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')
    },
    { 
      path: '/about', 
      component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
    },
    { 
      path: '/id', 
      component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage')
    },
    { 
      path: '/:pathMatch(.*)*',
      component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/components/pages/NoPageFound') 
    },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  
  export default router;