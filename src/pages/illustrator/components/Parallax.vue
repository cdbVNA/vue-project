<template>
	<div class="parallax-wrapper" :style="{ width: width }">
		<div class="parallax-strip"
			:style="{ transform: `rotate(${rotation}deg) translateX(${currentOffset.value}px)` }">
			<img v-for="(img, i) in images" :key="i" :src="img" :alt="`img-${i}`" />
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: Array,
  rotation: Number,
  width: String,
  initialOffset: Number,
})

const currentOffset = ref(props.initialOffset || 0)
const targetOffset = ref(0)
let animationFrame

const lerp = (start, end, amt) => (1 - amt) * start + amt * end

const animate = () => {
  currentOffset.value = lerp(currentOffset.value, targetOffset.value, 0.1)
  animationFrame = requestAnimationFrame(animate)
}

const onScroll = () => {
  targetOffset.value = window.scrollY / 6
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  animate() 
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  cancelAnimationFrame(animationFrame)
})
</script>

<style scoped>
.parallax-wrapper {
	overflow: visible;
	margin: 10px 0 30px;
	display: flex;
	justify-content: center;
	perspective: 800px;
	width: 100%;
}

.parallax-strip {
	display: flex;
	gap: 10px;
	will-change: transform;
	transition: none;
}

.parallax-strip img {
	height: 250px;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
	background: #fff;
	display: block;
	width: auto;
}

@media screen and  (max-width: 768px) {
	.parallax-wrapper {
		width: 100%;
	}

	.parallax-strip img {
		height: 150px;
	}
}

@media screen and  (max-width: 480px) {

	.parallax-strip img {
		height: 100px;
	}
}
</style>