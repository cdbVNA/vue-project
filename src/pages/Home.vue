<template>
	<div class="wrapper">
		<header>
			<div class="header">
				<div class="header-text">
					<div class="section-text">
						<h2 class="text_title">Петербургский писатель, чьи слова живут вечно</h2>
						<p class="text_description">Откройте его мир, наполненный смелыми историями, настоящими героями и яркими мечтами.</p>
					</div>
				</div>
				<div class="section_img"><img :src="Vnukov" alt="" /></div>
			</div>
			<div class="section-about">
				<h1 class="about-title">О Писателе</h1>
				<hr />
				<p class="about-info">Николай Андреевич Внуков (8 ноября 1925 — 16 июля 2011) — русский советский писатель, автор приключенческих, фантастических и исторических произведений.</p>
			</div>
		</header>

		<div class="container">
			<div class="container_title">
				<h1 id="biography">биография писателя</h1>
				<hr />
				<p>Жизнь Николая Внукова — это целое приключение. Будущий писатель начал путешествовать ещё в детстве. Нажимайте на фотографию и знакомьтесь с автором</p>
			</div>
		</div>
		<div class="gallery">
			<div class="photo" v-for="photo in photos" :key="photo.id" @click="goToPhoto(photo.id)">
				<div class="photo-container">
					<img :src="photo.src" :alt="photo.title" />
					<div class="overlay">
						<div class="title">{{ photo.title }}</div>
					</div>
				</div>
			</div>
		</div>

		<div class="quote">
			<div class="quote_text">
				<q>Мы с приятелем никак не могли достать не очень известную сейчас книгу Марка Твена «Том Сойер — разбойник», а прочитать, побыть Томом ужасно хотелось. И тогда мы сочинили её сами... Так что, о ком я ни пишу, я всё-таки пишу и о себе</q>
				<p>Николай Внуков</p>
			</div>
			<img :src="quote" alt="" />
		</div>
		<div class="container_title">
			<h1 id="books">книги писателя</h1>
			<hr />
			<p>В своих произведениях Николай Внуков рассказывает о путешествиях и подвигах. Здесь вы найдете увлекательные истории, посвященные настоящим героям и их невероятным приключениям</p>
		</div>
		<ParallaxBooks />
		<footer>
			<nav>
				<section></section>
			</nav>
		</footer>
	</div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ParallaxBooks from '@/components/ParallaxBooks.vue'
import photosData from '@/photos.js'
import Vnukov from '@/assets/vnukov.jpg'
import quote from '@/assets/quote.png'

export default {
	components: {
		ParallaxBooks,
	},
	setup() {
		const photos = ref(photosData)
		const router = useRouter()

		// Переход на страницу фото и прокрутка вверх
		const goToPhoto = id => {
			router.push(`/photo/${id}`).then(() => {
				window.scrollTo({ top: 0, behavior: 'instant' })
			})
		}

		return {
			photos,
			goToPhoto,
			quote,
			Vnukov,
		}
	},
}
</script>

<style scoped>
.wrapper {
	padding: 0;
}

.arrow-up {
	width: 0;
	height: 0;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-bottom: 12px solid #000;
	/* цвет стрелки */
	margin: 10px auto;
	transition: transform 0.3s;
}

/* Стрелка вниз */
.arrow-down {
	width: 0;
	height: 0;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-top: 12px solid #000;
	/* цвет стрелки */
	margin: 10px auto;
	transition: transform 0.3s;
}

/* Вращение стрелки при активном состоянии (например, при раскрытии) */
.rotate {
	transform: rotate(180deg);
}

/*Шапка*/
header {
	width: 100%;
}

.header {
	display: flex;
	flex-wrap: wrap;
	padding-top: 100px;
	background-color: rgb(141, 164, 182);
	align-items: center;
	justify-content: space-between;
}

.header-text {
	width: 50%;
}

.section-text {
	padding: 110px;
	margin-top: 200px;
}

.section_img {
	flex: 1;
	padding: 10px;
	top: 350px;
	position: absolute;
	right: 250px;
	max-width: 600px;
	display: flex;
	justify-content: center;
}

.section_img img {
	max-width: 100%;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	height: auto;
	filter: grayscale(100%);
}

.text_title {
	font-weight: bold;
	font-size: 4em;
	margin-bottom: 10px;
}

.text_description {
	font-size: 2em;
	font-family: 'Mulish';
}

.section-about {
	padding: 110px;
	width: 50%;
}

.about-title {
	font-size: 4em;
	margin-bottom: 8px;
}

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

.quote {
	max-width: 1200px;
	margin: 120px auto;
	display: flex;
	justify-content: center;
	align-items: center;
}

.quote img {
	max-width: 1000px;
}

.quote_text {
	padding: 20px;
	width: 45%;
	position: absolute;
}

.quote_text q {
	flex: 1;
	font-size: 1.5em;
	line-height: 1.4;
	margin-bottom: 20px;
}

.quote_text p {
	font-size: 1.4em;
	padding-top: 20px;
	font-weight: 600;
	text-align: right;
	margin-top: 10px;
}

@media screen and (max-width: 1600px) {
	.header-text {
		padding: 30px;
	}

	.section-text {
		padding: 70px;
	}

	.section_img {
		right: 10px;
	}

	.section_img img {
		max-width: 70%;
		height: auto;
		margin: 0 auto;
	}

	.text_title {
		font-size: 2.5em;
	}

	.text_description {
		font-size: 1em;
	}

	.section-about {
		padding: 20px;
	}

	.about-title {
		font-size: 2.5em;
	}

	.photo {
		width: 100%;
	}

	.overlay {
		height: 170px;
		justify-content: flex-start;
	}
	.title {
		font-size: 2em;
	}

	.quote {
		flex-direction: row;
		margin: 40px auto;
		padding: 10px;
	}

	.quote_text {
		width: 50%;
		padding: 15px;
	}

	.quote_text q {
		font-size: 1.2em;
	}

	.quote_text p {
		font-size: 1.2em;
	}
}

@media screen and (max-width: 1000px) {
	.header {
		flex-direction: column;
		padding-top: 70px;
	}

	.header-text {
		width: 100%;
		padding: 30px;
	}

	.section-text {
		padding: 70px 30px 550px;
		margin-top: 0;
	}

	.section_img {
		position: absolute;
		max-width: 100%;
		margin: 0px auto;
		right: 10px;
		padding: 0 40px;
		top: 480px;
	}

	.section_img img {
		max-width: 70%;
		height: auto;
		margin: 0 auto;
	}

	.text_title {
		font-size: 3em;
	}

	.text_description {
		font-size: 1.8em;
	}

	.section-about {
		padding: 350px 30px 20px;
		width: 100%;
	}

	.about-title {
		font-size: 3.5em;
	}


	.gallery {
		grid-template-columns: 1fr;
		gap: 10px;
		padding: 10px;
	}

	.photo {
		width: 100%;
		margin: 0 auto;
	}
	.overlay {
		height: 120px;
		justify-content: flex-start;
	}
	.title {
		font-size: 1.75em;
		line-height: 1;
	}
	.quote {
		flex-direction: row;
		margin: 100px auto 20px;
		padding: 10px;
	}

	.quote_text {
		width: 50%;
		padding: 15px;
	}

	.quote_text q,
	.quote_text p {
		font-size: 0.9em;
	}

	.quote img {
		max-width: 700px;
	}
}

@media screen and (max-width: 482px) {
	.header {
		flex-direction: column;
		padding-top: 50px;
	}

	.header-text {
		width: 100%;
		padding: 0 20px;
		margin-top: 0;
	}

	.section-text {
		padding: 50px 20px 200px;
		margin-top: 0;
	}

	.section_img {
		position: absolute;
		margin: 20px 0;
		padding: 0 40px;
		top: 270px;
		right: 10px;
	}

	.section_img img {
		width: 100%;
		height: auto;
	}

	.text_title {
		font-size: 1.4em;
	}

	.text_description {
		font-size: 1em;
	}

	.section-about {
		padding: 200px 20px 20px;
		width: 100%;
	}

	.about-title {
		font-size: 1.4em;
	}

	.gallery {
		grid-template-columns: 1fr;
		gap: 10px;
		padding: 10px;
	}

	.photo {
		width: 100%;
	}
	.overlay {
		height: 60px;
		justify-content: flex-start;
	}
	.title {
		font-size: 1em;
		font-weight: 500;
		line-height: 1;
		padding: 10px;
	}
	.quote {
		flex-direction: column;
		margin: 40px 0 20px;
		padding: 10px;
	}

	.quote_text {
		width: 100%;
		padding: 40px 30px;
		line-height: 1;
	}

	.quote_text q,
	.quote_text p {
		font-size: 0.85em;
		padding: 0;
	}

	.quote img {
		width: 100%;
	}
	.container_title {
		padding-top: 40px;
	}
}
</style>
