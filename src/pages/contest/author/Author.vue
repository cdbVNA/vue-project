<template>
	<div class="wrapper">
		<div class="container">
			<div class="container_title">
				<h1>Конкурс «Песни Перьев»</h1>
				<hr />
				<p>Литературный конкурс для юных писателей и поэтов</p>
			</div>
		</div>
		<div class="advice">
			<div class="advice_text">
				<p>В ноябре 2025 года стартует третий сезон Детского литературного конкурса имени Н.А. Внукова «Песни перьев». Если ты мечтаешь рассказать историю своего мира, отправить читателей в удивительные миры и с удовольствием переводишь художественные произведения с других языков, то этот конкурс для тебя. Принять участие могут дети от 10 до 18 лет, которые любят писать и мечтают стать настоящими писателями. Подробные условия участия и <a href="#">Положение Конкурса</a> опубликуем осенью 2025 года.</p>
			</div>
			<div class="advice_img"><img :src="Song" alt="" /></div>
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
					<img :src="Icon" alt="" class="icon" />
					<p>Положение детского литературного конкурса имени Н.А. Внукова “Песни перьев” 2024г.</p>
				</a>
			</div>
			<div class="regulation">
				<a href="/path/to/your/file2023.docx" download>
					<img :src="Icon" alt="" class="icon" />
					<p>Положение детского литературного конкурса имени Н.А. Внукова “Песни перьев” 2023г.</p>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
import { ref } from 'vue'
import AdviceLinks from '@/pages/contest/author/components/AdviceLinks.vue'
import Icon from '@/pages/contest/author/assets/icon.png'
import Song from '@/pages/contest/author/assets/Song.png'

export default {
	components: { AdviceLinks },
	setup() {
		const videos = ref([{ link: 'https://vkvideo.ru/video_ext.php?oid=-44348240&id=456240440&hash=df70987d68d11d3d' }, { link: 'https://vkvideo.ru/video_ext.php?oid=-44348240&id=456240439&hash=6506210ab0f44df0' }, { link: 'https://vkvideo.ru/video_ext.php?oid=-44348240&id=456240438&hash=cab492643618e37f' }])
		return { videos, Song, Icon }
	},
}
</script>
<style scoped>
.wrapper {
	padding: 0 20px;
}

.advice {
	display: flex;
	flex-wrap: wrap;
	margin: 20px auto;
	gap: 30px;
	align-items: center;
	max-width: 1200px;
	padding: 0 20px;
}

.advice_text {
	flex: 1 1 60%;
	font-size: 1em;
}

.advice_img {
	flex: 1 1 35%;
	display: flex;
	justify-content: center;
}

.advice_img img {
	width: 100%;
	max-width: 400px;
	height: auto;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

p {
	margin: 0;
	font-size: 1.5em;
}

.regulation {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px 0;
	gap: 20px;
}

.regulation a {
	text-decoration: none;
	color: #333;
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 10px 20px;
	background-color: #f0f0f0;
	transition: background-color 0.3s;
}

.regulation a:hover {
	background-color: #e0e0e0;
}

.regulation img {
	width: 24px;
	height: 24px;
}

.regulation p {
	text-align: left;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
	.advice {
		flex-direction: column;
		align-items: center;
	}

	.advice_text {
		flex: 1 1 100%;
		font-size: 1em;
		text-align: center;
	}

	.advice_img {
		flex: 1 1 100%;
		margin-top: 20px;
	}

	.advice_img img {
		max-width: 90%;
	}

	.regulation {
		width: 100%;
	}

	.regulation a {
		width: 90%;
		justify-content: center;
	}

	.container_title {
		padding-top: 40px;
	}
}
</style>
