import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Contest from './views/Contest.vue'
import Illustrator from './views/Illustrator.vue'
import Territory from './views/Territory.vue'
import PhotoPage from './components/PhotoPage.vue'
import BookPage from './components/BookPage.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/contest', component: Contest },
	{ path: '/illustrator', component: Illustrator },
	{ path: '/territory', component: Territory },
	{ path: '/photo/:id', component: PhotoPage, props: true },
	{ path: '/book/:id', component: BookPage, props: true },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
