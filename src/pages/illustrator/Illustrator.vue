<template>
	<div class="wrapper">
		<div class="container">
			<div class="container_title">
				<h1>Иллюстраторы</h1>
				<hr />
				<p>Ни одна детская книга не обходится без красочных изображений. В этом разделе вы познакомитесь с художниками, которые нарисовали иллюстрации к книгам Николая Внукова</p>
			</div>
		</div>
		<div v-if="artists && artists.length" class="container_advice">
			<div v-for="(artist, index) in artists" :key="artist.id" :class="['advice', { 'even-index': index % 2 === 0 }]">
				<div class="advice_img">
					<img :src="artist.src" :alt="artist.name" />
				</div>
				<div class="advice_text">
					<div class="text_title">
						<h2>{{ artist.name }}</h2>
					</div>
					<div class="text_description">
						<p>{{ artist.description }}</p>
					</div>
					<div class="parallax">
						<InfiniteCarousel :images="imagesSets[index]" :speed="50" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import InfiniteCarousel from './components/InfiniteCarousel.vue'
import illustratorsData from '@/illustrators.js'
const { artists, images1, images2, images3, images4, images5, images6, images7 } = illustratorsData
const imagesSets = [images1, images2, images3, images4, images5, images6, images7]
</script>

<style scoped>
.container_advice {
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	gap: 50px;
}

.advice,
.even-index {
	display: flex;
	padding: 20px;
	margin: 0 auto;
	align-items: center;
	max-width: 1300px;
}
.advice {
	flex-direction: row-reverse;
}
.even-index {
	flex-direction: row;
}
.advice_text {
	flex: 1;
	padding: 20px 40px;
	display: flex;
	margin: 0 auto;
	flex-direction: column;
}
.parallax {
	max-width: 650px;
		margin: 0 auto;
}
.advice_img {
	flex: 1;
	margin: 0 auto;
}
.advice_img img {
	max-height: 600px;
}

@media screen and (max-width: 1600px) {
	.advice,
	.even-index {
		width: 100%;
		padding: 0px 40px;
	}

	.advice_img img {
		width: 100%;
	}
}
@media screen and (max-width: 1000px) {
	.advice,
	.even-index {
		width: 100%;
		flex-direction: column;
		padding: 0px 50px;
	}

	.advice_img img {
		width: 100%;
	}
}
@media screen and (max-width: 800px){
	.advice,
	.even-index {
		padding: 10px;
	}
	.parallax {
		max-width: 540px;
		margin: 0 auto;
	}
		.advice_text {
		padding: 10px 0px;
		margin: 0 auto;
	}
}
@media screen and (max-width: 482px) {
	.container_title{
		padding-top: 30px;
	}
	.container_advice {
		width: 100%;
	}
	.advice,
	.even-index {
		padding: 20px 0;
	}
	.advice_img {
		margin: 0 auto;
	}
	.advice_text {
		padding: 5px 0px;
		margin: 0 auto;
	}
	.parallax {
		max-width: 300px;
		margin: 0 auto;
	}
	.advice_img img {
		max-height: 300px;
	}
}
@media screen and (max-width: 360px) {
	.parallax {
		max-width: 200px;
		margin: 0 auto;
	}
}
</style>
