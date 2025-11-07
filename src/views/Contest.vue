<template>
	<div class="wrapper">
		<div class="container">
			<div class="container_title">
				<h1>Песни перьев</h1>
				<hr />
				<p>Литературный конкурс для юных писателей и поэтов</p>
			</div>
		</div>
		<div class="advice">
			<div class="advice_text">
				<p>
					В ноябре 2025 года стартует третий сезон Детского литературного
					конкурса имени Н.А. Внукова «Песни перьев». Если ты мечтаешь
					рассказать историю своего мира, отправить читателей в удивительные
					миры и с удовольствием переводишь художественные произведения с других
					языков, то этот конкурс для тебя. Принять участие могут дети от 10 до
					18 лет, которые любят писать и мечтают стать настоящими писателями.
					Подробные условия участия и
					<a href="#">Положение Конкурса</a> опубликуем осенью 2025 года.
				</p>
			</div>
			<div class="advice_img"><img src="/src/assets/Song.png" alt="" /></div>
		</div>
		
		<div class="container">
			<div class="container_title">
				<h1>Cоветы начинающим писателям</h1>
				<hr />
				<p>Литературный конкурс для юных писателей и поэтов</p>
			</div>
		</div>
		<AdviceLinks :videos="videos" />

		<div class="container">
			<div class="container_title">
				<h1>Положение конкурса</h1>
				<hr />
				<p>Литературный конкурс для юных писателей и поэтов</p>
			</div>
		</div>
		<div class="regulations">
			<div class="regulation">
				<a href="/path/to/your/file2024.docx" download>
					<img src="/src/assets/icon.png" alt="" class="icon" />
					<p>
						Положение детского литературного конкурса имени Н.А. Внукова “Песни
						перьев” 2024г.
					</p>
				</a>
			</div>
			<div class="regulation">
				<a href="/path/to/your/file2023.docx" download>
					<img src="/src/assets/icon.png" alt="" class="icon" />
					<p>
						Положение детского литературного конкурса имени Н.А. Внукова “Песни
						перьев” 2023г.
					</p>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
import { ref } from 'vue'
import AdviceLinks from '@/components/AdviceLinks.vue'
export default {
	components: { AdviceLinks },
	setup() {
		const videos = ref([
			{
				link: 'https://www.youtube.com/watch?v=rAVDUYXRrtE',
				thumbnail: '/src/assets/contest/2.png',
			},
			{
				link: 'https://vk.com/video-44348240_456240351?list=d1050d4f8e438f5dae',
				thumbnail: '/src/assets/contest/1.png',
			},
			{
				link: 'https://www.youtube.com/watch?v=yHwBat7dE28',
				thumbnail: '/src/assets/contest/3.png',
			},
		])
		return { videos }
	},
}
</script>
<style scoped>
.container {
	padding-top: 200px;
	margin: 0 auto;
}
.advice {
	display: flex;
	margin: 0 auto;
	gap: 40px;
	padding: 0 50px;
}
p {
	font-size: 1.5em;
}
.regulation {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
}
.regulation a{
	text-decoration: none;
	color: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
}
.regulation img {
	width: 2%;
}
</style>
