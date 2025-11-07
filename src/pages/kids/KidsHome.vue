<template>
	<div class="page-container">
		<header class="header">
			<video class="banner-video" autoplay muted loop playsinline>
				<source src="/kids/ship.mp4" type="video/mp4" />
				Ваш браузер не поддерживает видео.
			</video> 
			<div class="overlay-text">
				<h1>Внуков</h1>
				<p>Николай Андреевич</p>
			</div>
		</header>

		<div class="childrens-thoughts">
			<div class="childrens-thoughts_container">
				<div class="container-text">
					<q>Никто из нас не был так начитан, как Внуков. У его дяди была уникальная библиотека, поэтому, рано пристрастившись к чтению, он знал столько удивительного, что мы с нескрываемой завистью слушали его рассказы о книгах</q>
					<p>Виталий Лесев</p>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="container_title">
				<h1>детские книги</h1>
				<hr />
				<p>Произведения Николая Внукова для детей 6+</p>
			</div>
		</div>
		<div class="book-container"> 
			<main id="carousel">
				<img class="book-item" v-for="book in books" :key="book.id" @click="openBookPage(book.id)" :src="book.src" alt="" />
			</main>
		</div>
	</div>
	<!-- <div class="ship">
    <div class="ship-container">
      <div class="ship-img">
        <img src="kids/ship.png" alt="" />
      </div>
      <div class="ship-text">
        <p>Книжка-раскраска «Военные корабли» — это совместная работа писателя Николая Внукова и художника Владимира
          Алексеева. Здесь вы найдёте рисунки известных российских кораблей и их описание. Раскраску можно скачать и
          распечатать. Подходит для младшего школьного возраста.</p>
      </div>
    </div>
  </div>-->
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Массив книг с путями к изображениям
const books = ref([
	{ id: 10, src: '/assets/book/book10.webp' },
	{ id: 16, src: '/assets/book/book16.png' },
	{ id: 3, src: '/assets/book/book3.png' },
	{ id: 14, src: '/assets/book/book14.webp' },
	{ id: 0, src: '/assets/book/book.jpg' },
])

const router = useRouter()

function openBookPage(id) {
	router.push({ path: `/book/${id}` }).then(() => {
		window.scrollTo({ top: 0, behavior: 'instant' })
	})
}
</script>

<style scoped>
.page-container {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.header {
	position: relative;
	width: 100%;
	overflow: hidden;
}

.banner-video {
	width: 110%;
	background-color: #f0f8ff;
	position: relative;
	left: -120px;
	height: 100%;
	object-fit: cover;
}

.overlay-text {
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: rgb(0, 0, 0);
	text-align: center;
	padding: 20px;
	border-radius: 10px;
}

.overlay-text h1 {
	font-size: 7em;
	font-weight: 600;
}

.overlay-text p {
	font-size: 1.5rem;
	margin: 0;
	position: relative;
	top: -40px;
	text-transform: uppercase;
	font-family: 'Vollkorn';
}

.wrapper {
	padding: 0;
	margin: 0;
}

.childrens-thoughts {
	background-color: rgb(141, 180, 203);
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
	margin-top: -50px;
	z-index: 2;
}

.childrens-thoughts_container {
	display: flex;
	max-width: 900px;
	margin: 200px auto;
	gap: 100px;
}

.container-text q {
	font-size: 2em;
}

.container-text p {
	text-align: right;
}

.ship {
	width: 100%;
	padding: 50px;
	background-color: rgb(133, 165, 190);
}

.ship-container {
	display: flex;
	max-width: 1200px;
	margin: 0 auto;
	justify-content: space-evenly;
}

.ship-img {
	max-width: 300px;
}

.ship-text {
	max-width: 600px;
}

.ship-img img {
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
	width: 100%;
}

.book-container {
	margin: 50px 0;
	position: relative;
	height: 600px;
}

#carousel {
	grid-row: 1 / 2;
	grid-column: 1 / 8;
	width: 100vw;
	height: 500px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	transform-style: preserve-3d;
	perspective: 600px;
	--items: 5;
	--middle: 3;
	--position: 3;
}

.book-item {
	position: absolute;
	width: 300px;
	height: 400px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	--r: calc(var(--position) - var(--offset));
	--abs: max(calc(var(--r) * -1), var(--r));
	transition: all 0.25s linear;
	transform: rotateY(calc(-10deg * var(--r))) translateX(calc(-300px * var(--r)));
	z-index: calc((var(--position) - var(--abs)));
}

.book-item img {
	width: 100%;
	background-size: cover;
}

.book-item:nth-of-type(1) {
	--offset: 1;
}

.book-item:nth-of-type(2) {
	--offset: 2;
}

.book-item:nth-of-type(3) {
	--offset: 3;
}

.book-item:nth-of-type(4) {
	--offset: 4;
}

.book-item:nth-of-type(5) {
	--offset: 5;
}

@media (max-width: 1240px) {
	.banner-video {
		width: 120%;
		left: -60;
	}
}

@media (max-width: 768px) {
	.banner-video {
		width: 120%;
	}

	.overlay-text h1 {
		font-size: 4em;
	}

	.overlay-text p {
		font-size: 1.2rem;
		top: -20px;
	}

	.childrens-thoughts_container {
		flex-direction: column;
		gap: 50px;
		margin: 150px auto;
	}

	.container-text {
		max-width: 90%;
		margin: 0 auto;
		padding: 0 20px;
	}

	.container-text q {
		font-size: 1.2em;
	}

	.container-text p {
		font-size: 1.2em;
	}

	.book-container {
		height: auto;
		padding: 20px;
	}

	#carousel {
		height: auto;
		flex-wrap: nowrap;
		overflow-x: auto;
		justify-content: flex-start;
	}

	.book-container {
		margin: 0 auto;
		padding: 0;
		margin-bottom: 100px;
	}

	.book-item {
		position: relative;
		width: 200px;
		height: 300px;
		margin: 0 10px;
		transform: none;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	.book-item img {
		width: 100%;
		height: 100%;
	}

	.ship-container {
		flex-direction: column;
		align-items: center;
	}

	.ship-img {
		max-width: 200px;
	}

	.ship-text {
		max-width: 90%;
		text-align: center;
	}
}

@media (max-width: 480px) {
	.banner-video {
		width: 110%;
		left: -30px;
	}

	.overlay-text h1 {
		font-size: 3em;
	}

	.overlay-text p {
		font-size: 1em;
	}

	.childrens-thoughts {
		margin-top: -40px;
		z-index: 2;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
	}

	.childrens-thoughts_container {
		width: 100%;
		margin: 100px auto;
	}

	.container-text {
		padding: 0 20px;
	}

	.container-text q {
		font-size: 1em;
	}

	.container-text p {
		font-size: 1em;
	}

	.book-container {
		margin: 0 auto;
		padding: 0;
	}

	#carousel {
		flex-direction: column;
		height: auto;
	}

	.book-item {
		width: 60%;
		height: auto;
		margin: 10px auto;
	}

	.ship-container {
		padding: 20px 0;
	}

	.ship-img {
		max-width: 150px;
	}

	.ship-text {
		max-width: 90%;
	}
}
</style>
