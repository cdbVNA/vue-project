<template>
		<div class="parallax-section">
			<div
				class="images-container"
				:style="{ transform: `translateX(-${offset}px)` }"
			>
				<div v-for="book in books" :key="book.id" class="cover">
					<img :src="book.src" />
				</div>
			</div>
		</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const books = [
	{ id: 1, src: '/src/assets/illustrators/yahnin/3.jpg' },
	{ id: 2, src: '/src/assets/illustrators/yahnin/1.jpg' },
	{ id: 3, src: '/src/assets/illustrators/yahnin/4.jpg' },
	{ id: 4, src: '/src/assets/illustrators/yahnin/2.jpg' },
	{ id: 5, src: '/src/assets/illustrators/yahnin/6.jpg' },
	{ id: 6, src: '/src/assets/illustrators/yahnin/7.jpg' },
]

const offset = ref(0)

const handleScroll = () => {
	offset.value = window.scrollY * 0.5
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.parallax-section {
	position: relative;
	transform: rotate(3deg);
	height: 363px;
	overflow: hidden;
	margin-bottom: 20px;
}

.images-container {
	display: flex;
	height: 100%;
	transition: transform 0.3s ease-out;
}

.cover {
	height: 363px;
	flex-shrink: 0;
	margin-right: 10px;
}

.cover img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
