<template>
	<div class="infinite-carousel">
		<div class="images-wrapper" :style="{ '--animation-duration': duration + 's' }">
			<img v-for="(img, index) in duplicatedImages" :key="index" :src="img" />
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	images: Array,
	speed: {
		type: Number,
		default: 50,
	},
})

const duplicatedImages = computed(() => [...props.images, ...props.images])

const duration = computed(() => {
	const totalWidth = props.images.length * 150 + (props.images.length - 1) * 10
	return totalWidth / props.speed
})
</script>

<style scoped>
.infinite-carousel {
	overflow: hidden;
	width: 100%;
	height: 200px;
	position: relative;
	margin: 50px auto;
}
.images-wrapper {
	display: flex;
	width: calc(200%); /* ширина в два раза больше */
	animation: scroll var(--animation-duration) linear infinite;
}
.images-wrapper img {
	height: 180px;
	margin-right: 10px;
	object-fit: cover;
}
@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-50%);
	}
}
@media screen and (max-width: 1000px) {
	.infinite-carousel {
		width: 100%;
		height: 130px;
	}
	.images-wrapper img {
		height: 130px;
	}
}
@media screen and (max-width: 482px) {
	.infinite-carousel {
		width: 100%;
		height: 150px;
		margin: 20px 0;
	}
	.images-wrapper img {
		height: 130px;
	}
}

</style>
