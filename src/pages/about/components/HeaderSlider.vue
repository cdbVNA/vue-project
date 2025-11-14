<template>
	<div class="header-slider">
		<transition-group name="slide" tag="div" class="slides">
			<img v-for="(img, index) in [currentImage]" :key="index" :src="img" alt="Slide" class="slide-image" />
		</transition-group>
	</div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import photo090523 from '@/pages/about/assets/09.05.23-4.jpg'
import photo170523 from '@/pages/about/assets/17.05.23-2.jpg'
import photo220423 from '@/pages/about/assets/22.04.23-37.jpg'
import photo280423 from '@/pages/about/assets/28.04.23-31.jpg'
import photo0923 from '@/pages/about/assets/880O4hykSBudN4WT8foqprEw_utB6UL_32ZNmq9ACZmckpFApZsLrOPca6J1phxbzIxeUMB0Y1lNUD8s5tF_XOHs.jpg'

export default {
	setup() {
		const images = [photo090523, photo170523, photo220423, photo280423, photo0923]
		const currentIndex = ref(0)
		const currentImage = ref(images[currentIndex.value])
		let intervalId = null

		const nextSlide = () => {
			currentIndex.value = (currentIndex.value + 1) % images.length
			currentImage.value = images[currentIndex.value]
		}

		onMounted(() => {
			intervalId = setInterval(nextSlide, 4000) // смена каждые 4 сек
		})

		onUnmounted(() => {
			clearInterval(intervalId)
		})

		return {
			currentImage,
		}
	},
}
</script>

<style scoped>
.header-slider {
	position: relative;
	width: 100%;
	height: 800px;
	overflow: hidden;
}

.slides {
	position: relative;
	height: 100%;
}

.slide-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	pointer-events: none;
	user-select: none;
}
.slide-enter-active,
.slide-leave-active {
	transition: opacity 1s ease, transform 1s ease;
}
.slide-enter-from {
	opacity: 0;
	transform: translateX(100%);
}
.slide-enter-to {
	opacity: 1;
	transform: translateX(0);
}
.slide-leave-to {
	opacity: 0;
	transform: translateX(-100%);
}
@media screen and (max-width: 1600px) {
	.header-slider {
		height: 700px;
	}
}

@media screen and (max-width: 1000px) {
	.header-slider {
		height: 500px;
	}
}

@media screen and (max-width: 482px) {
	.header-slider {
		height: 300px;
	}
}
</style>
