import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Noticias from '@/components/Noticias'
import CreateNoticias from '@/components/CreateNoticias'
import ViewNoticia from '@/components/ViewNoticia'
import Home from '@/components/Home'
import EditNoticias from "@/components/EditNoticias"
import noticiasLista from "@/components/noticiasLista"
import resultado from "@/components/resultado"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
    },
    
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/gnoticias',
      name: 'gnoticias',
      component: Noticias
    },
    {
      path: '/gnoticias/add',
      name: 'noticias-create',
      component: CreateNoticias
    },
    {
      path: '/noticia/:noticiaId/edit',
      name: 'noticia-edit',
      component: EditNoticias
    },
    {
      path: '/noticia/:noticiaId',
      name: 'noticia',
      component: ViewNoticia
    },
    {
      path: '/noticias/:nome',
      name: 'noticiasLista',
      component: noticiasLista
    },
    {
      path: '/resultado/:nome',
      name: 'resultado',
      component: resultado
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
