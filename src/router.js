import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Contacts from '@/pages/contacts/Contacts.vue'
import Illustrator from '@/pages/illustrator/Illustrator.vue'
import Territory from '@/pages/territory/Territory.vue'
import PhotoPage from '@/components/PhotoPage.vue'
import BookPage from '@/components/BookPage.vue'
import KidsHome from '@/pages/kids/KidsHome.vue'
import About from '@/pages/about/About.vue'
import Journal from '@/pages/journal/Journal.vue'
import Author from '@/pages/contest/author/Author.vue'
import Drawing from '@/pages/contest/drawing/Drawing.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/contest/autor', component: Author },
	{ path: '/contest/drawing', component: Drawing },
	{ path: '/contacts', component: Contacts },
	{ path: '/illustrator', component: Illustrator },
	{ path: '/journal', component: Journal },
	{ path: '/territory', component: Territory },
	{ path: '/photo/:id', name: 'Photo', component: PhotoPage, props: true },
	{ path: '/book/:id', component: BookPage, props: true },
	{ path: '/about', component: About },
	{ path: '/kids', component: KidsHome },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
