import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/components/Login.vue'
import registerUserView from '@/components/registerUser.vue'
import dashaboardView from '@/components/dashaboard.vue'
import HomeView from '@/components/Home.vue'
import AreasView from '@/components/area.vue'
import EmpleadoView from '@/components/empleado.vue'
import HorarioView from '@/components/horario.vue'
import InstructoresView from '@/components/instructor.vue'
import PuestoView from '@/components/puesto.vue'
import PersonaView from '@/components/persona.vue'
import UsuarioView from '@/components/usuario.vue'
import piePaginaView  from '@/components/piePagina.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: registerUserView
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: UsuarioView
    },
    {
      path: '/persona',
      name: 'persona',
      component: PersonaView
    },
    {
      path: '/dashaboard',
      name: 'dashaboard',
      component: dashaboardView,
      children:[
        {path: "/persona",name:"personas", component: registerUserView},
        {path:'/Home', name:'home', component:HomeView},
        {path:'/area', name:'areas', component:AreasView},
        {path:'/empleado', name:'empleado', component:EmpleadoView},
        {path:'/horario', name:'horario', component:HorarioView},
        {path:'/instructor', name:'instructores', component:InstructoresView},
        {path:'/puesto', name:'puesto', component:PuestoView},
        {path:'/piePagina', name:'piePagina', component:piePaginaView}

      
      ]
    }
  ]
})

export default router
