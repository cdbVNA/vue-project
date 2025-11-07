<template>
	<div class="kids-section">
		<div class="video-wrapper">
			<video ref="videoRef" :src="videoSrc" class="intro-video" @ended="onVideoEnded" @loadedmetadata="onLoadedMetadata" playsinline autoplay muted></video>
			<div v-if="showText" class="overlay-text">
				<h1>Добро пожаловать в детский раздел!</h1>
				<p>Здесь вы найдете интересные материалы, игры и задания.</p>
			</div>
		</div>
		<!-- Здесь может быть остальной контент страницы -->
	</div>
</template>

<script setup>
import { ref } from 'vue'

const videoSrc = '/src/assets/kids-section-intro.mp4' // путь к вашему видео
const showText = ref(false)
const videoRef = ref(null)

const onVideoEnded = () => {
	showText.value = true
	// Останавливаем видео на последнем кадре (замораживаем)
	if (videoRef.value) {
		videoRef.value.pause()
		// Устанавливаем время на последний кадр, если нужно
		// videoRef.value.currentTime = videoRef.value.duration
	}
}

// Если видео длиннее 7 секунд, ограничим воспроизведение
const onLoadedMetadata = () => {
	if (videoRef.value && videoRef.value.duration > 6) {
		setTimeout(() => {
			if (!showText.value) onVideoEnded()
		}, 6000)
	}
}
</script>

<style scoped>
.kids-section {
	min-height: 100vh;
	background: #f6faff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
}

.video-wrapper {
	position: relative;
	width: 100vw;
	max-width: 100%;
	height: 350px;
	overflow: hidden;
	background: #000;
	display: flex;
	align-items: center;
	justify-content: center;
}

.intro-video {
	width: 100vw;
	max-width: 100%;
	height: 350px;
	object-fit: cover;
	display: block;
}

.overlay-text {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.85) 60%, rgba(255, 255, 255, 0.5) 100%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding-top: 60px;
	z-index: 2;
	animation: fadeIn 1s;
}

.overlay-text h1 {
	font-size: 2.5em;
	color: #2a4d7a;
	margin-bottom: 20px;
	text-align: center;
}
.overlay-text p {
	font-size: 1.3em;
	color: #444;
	text-align: center;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
