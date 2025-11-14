<template>
	<div class="advice-list">
		<div v-for="(video, index) in videos" :key="index" class="video-item">
			<iframe :src="video.link" frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AdviceLinks',
	props: {
		videos: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style scoped>
.advice-list {
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	align-items: center;
}
.video-item {
	width: 1462px;
	height: 800px;
	background: transparent;
	overflow: hidden;
	padding: 0 20px;
	position: relative;
	transition: transform 0.3s, box-shadow 0.3s;
}
.video-item iframe {
	width: 100%;
	height: 100%;
	transition: all 0.5s ease-in-out;
}
.video-item:hover {
	transform: scale(1.05);
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
@media screen and (max-width: 1600px) {
	.video-item {
		width: 1000px;
		height: 500px;
	}
}

@media screen and (max-width: 1000px) {
	.video-item {
		height: 250px;
		width: 500px;
	}
}

@media screen and (max-width: 482px) {
	.video-item {
		height: 180px;
		width: 360px;
	}
}
</style>
