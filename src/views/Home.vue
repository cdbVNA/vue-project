<template>
	<div class="wrapper">
		<header>
			<div class="main">
				<div class="header">
					<div class="top-menu">
						<nav class="nav-top">
							<a href="#biography">Биография</a>
							<a href="#books">Книги</a>
						</nav>
					</div>
				</div>
			</div>
			<Figure />
		</header>
		<div class="stats">
			<div class="stat-item">
				<div class="number">34</div>
				<div class="label">книги</div>
			</div>
			<div class="stat-item">
				<div class="number">5</div>
				<div class="label">награда</div>
			</div>
			<div class="stat-item">
				<div class="number">20</div>
				<div class="label">стран</div>
			</div>
		</div>

		<div class="container">
			<div class="container_title">
				<h1 id="biography">биография писателя</h1>
				<hr />
				<p>
					Однажды, когда я сорвался с крыши, упал на ящики, разодрал кожу на
					щеке от угла рта до самого глаза и выбил два зуба, он (отец) промыл
					мне рану, залепил пластырем и сказал
				</p>
			</div>
			<PhotoGallery />

			<div class="quote">
				<div class="quote_text">
					<q
						>Хороший писатель горек снаружи и сладок внутри. Плохой-как пилюля
						сверху обсыпан сахаром.</q
					>
					<p>Николай Внуков</p>
				</div>
				<img src="/src/assets/quote.png" alt="" />
			</div>
		</div>
		<div class="container_title">
			<h1 id="books">книги писателя</h1>
			<hr />
			<p>
				Однажды, когда я сорвался с крыши, упал на ящики, разодрал кожу на щеке
				от угла рта до самого глаза и выбил два зуба, он (отец) промыл мне рану,
				залепил пластырем и сказал
			</p>
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
import Header from '@/components/Header.vue'
import Figure from '@/components/Figure.vue'
import ParallaxBooks from '@/components/ParallaxBooks.vue'
import PhotoGallery from '../components/PhotoGallery.vue'

export default {
	components: {
		Header,
		Figure,
		ParallaxBooks,
		PhotoGallery
	},
	
}
</script>

<style scoped>
/* фигура */

/*Шапка*/
header {
	width: 100%;
}
.main {
	position: fixed;
	width: 100%;
	height: 70px;
	right: 50px;
	position: fixed;
	margin: 0 auto;
	z-index: 999;
}

.top-menu {
	padding: 20px 30px;
	display: flex;
	justify-content: space-between;
	flex-direction: row-reverse;
}
.nav-top a {
	margin-right: 20px;
	text-decoration: none;
	color: #000;
	font-size: 1.3em;
	text-transform: uppercase;
}

section {
	margin: auto;
}
section .main-title h1 {
	font-size: 10em;
}

/*Блок после шапки*/
.stats {
	background-image: url(/src/assets/fon2.png);
	max-width: 1000px;
	display: flex;
	justify-content: center;
	gap: 150px;
	margin: 200px auto;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
}
.stat-item {
	padding: 20px;
	width: 160px;
	text-align: center;
}
.number {
	font-size: 3em;
	font-weight: bold;
}
.label {
	font-size: 2.5em;
	margin-top: 10px;
}

.quote {
	max-width: 1000px;
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
	font-size: 2.5em;
}
.quote_text p {
	font-size: 1.5em;
	padding-top: 20px;
	text-align: right;
}
</style>
