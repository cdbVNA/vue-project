<template>
	<div class="gallery">
		<div class="photo" v-for="(photo, index) in photos" :key="index" @click="goToPhoto(index)">
			<div class="photo-container">
				<img :src="photo.src" :alt="photo.title" />
				<div class="overlay">
					<div class="title">{{ photo.title }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { ref } from 'vue'
export default {
	setup() {
		const photos = ref([
			{
				src: '/src/assets/writer/2.jpg',
				title: 'НАЛЬЧИК: \nдетство на Кавказе',
			},
			{
				src: '/src/assets/writer/1.png',
				title: 'ЯПОНИЯ:\nпутешествие на Восток',
			},
			{
				src: '/src/assets/writer/8.jpg',
				title: 'Путешествие начинается',
				title: 'МОЙ ДРУГ ИНДЕЕЦ: \nистория Сат Ока',
			},
			{
				src: '/src/assets/writer/3.png',
				title: 'БОЕВОЙ ПУТЬ: \nот Эльхотово до Мукдена',
			},
			{
				src: '/src/assets/writer/4.png',
				title: 'Путешествие начинается',
			},
			{
				src: '/src/assets/writer/5.png',
				title: 'РЕДАКЦИЯ: \nпубликации в журналах и газетах',
			},
		])
		const goToPhoto = id => {
			router.push({ path: `/photo/${id}` })
		}
		return {
			photos,
			goToPhoto,
		}
	},
}
</script>
<style>
/*Галерея фото */
.gallery {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1px;
	max-width: 1800px;
	margin: 0 auto;
}
.photo {
	width: 100%;
	position: relative;
	margin: 5px;
	width: 99%;
	overflow: hidden;
	cursor: pointer;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s;
}

.photo:hover {
	transform: scale(1.01);
	z-index: 555;
}

.photo-container {
	width: 100%;
	height: 100%;
	position: relative;
}
.photo-container img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
}

/*Заголовок к фото*/
.overlay {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 0;
	background-color: rgb(141, 164, 182, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	transition: height 0.5s ease;
}
.photo:hover .overlay {
	height: 100%;
}
.title {
	color: #000000;
	font-size: 3em;
	font-weight: 500;
	padding: 10px;
	white-space: pre-line;
}
</style>
