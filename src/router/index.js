import { createRouter, createWebHistory } from 'vue-router'
import Loading from '../views/Loading.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Experience from '../views/Experience.vue'
import Portfolio from '../views/Portfolio.vue'
import Project from '../views/Project.vue'

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
