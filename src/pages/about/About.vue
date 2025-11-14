<template>
	<div class="wrapper">
		<HeaderSlider />
		<div class="container">
			<div class="container_title">
				<h1>О нас</h1>
				<hr />
				<p>Центральная детская библиотека имени Николая Андреевича Внукова</p>
			</div>
		</div>
		<div class="about-container">
			<div class="about-text">
				<p>Центральная детская библиотека, которая раньше была известна как «Лесновская» и «Выборгская», начала свою историю в 1923 году. Для своих первых читателей библиотека открыла двери в районе второго Муринского проспекта, в небольшом деревянном доме, куда приходили юные пионеры Выборгской стороны.</p>
				<p>Особняк купца Дмитрия Алексеевича Котлова оставил след на страницах истории детской библиотеки – здесь она располагалась на протяжении всей Великой Отечественной войны и блокады Ленинграда, не прекращая ответственной работы. В послевоенное время библиотека сменила ещё два адреса, прежде чем переехать на проспект Просвещения.</p>
				<p>С 2017 года Центральная детская библиотека носит имя Николая Андреевича Внукова – автора приключенческих, фантастических, исторических книг для детей и подростков, жителя Выборгского района и большого друга библиотеки. К просмотру доступна постоянная экспозиция, призванная познакомить читателей с жизнью и творчеством Николая Андреевича.</p>
				<p>Центральная детская библиотека им. Н. А. Внукова сегодня – это семейный культурный центр, где на постоянной основе проходят циклы развивающих занятий для детей и подростков, клуб для молодых мам с малышами. В стенах библиотеки с размахом проходят тематические игры на любой вкус.</p>
				<p>Центральная детская библиотека им. Н. А. Внукова входит в одну из 14 библиотек <a href="https://cbsvib.ru/library/centralnaya-detskaya-biblioteka-im-n-vnukova">Санкт-Петербургского государственного бюджетного учреждения «Централизованной библиотечной системы Выборгского района»</a></p>
			</div>
		</div>
		<div class="video">
			<div class="video-container">
				<iframe src="https://vkvideo.ru/video_ext.php?oid=-44348240&id=456240323&hash=e7bd3f21753820a0" frameborder="0" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>
			</div>
		</div>
	</div>
</template>
<script>
import HeaderSlider from '@/pages/about/components/HeaderSlider.vue'

export default {
	components: {
		HeaderSlider,
	},
}
</script>
<style scoped>
.wrapper {
	padding: 0px;
}

.about-container {
	max-width: 1200px;
	margin: 0 auto;
	font-family: Arial, sans-serif;
	color: #000;
	padding: 0 20px;
}

p {
	margin: 30px auto;
}

.container_title {
	padding-top: 50px;
}

.video {
	display: flex;
	justify-content: center;
}
.video-container {
	width: 1200px;
	height: 800px;
	background: transparent;
	overflow: hidden;
	padding: 0 20px;
	position: relative;
}
.video-container iframe {
	width: 100%;
	height: 100%;
	transition: all 0.5s ease-in-out;
}
.video-container:hover {
	transform: scale(1.05);
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
@media screen and (max-width: 1600px) {
	.video-container {
		height: 500px;
	}
}

@media screen and (max-width: 1000px) {
	.video-container {
		height: 400px;
	}
}

@media screen and (max-width: 482px) {
	.container_title {
		padding-top: 40px;
	}
	.video-container {
		height: 250px;
	}
}
</style>
