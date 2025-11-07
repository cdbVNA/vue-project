<template>
	<div class="book-page">
		<div class="content">
			<div class="cover">
				<img :src="book.src" :alt="book.title" />
			</div>
			<div class="text-block">
				<h1 class="title">{{ book.title }}</h1>
				<p class="description">{{ book.description }}</p>
				<h2 class="characteristics-title">Характеристики</h2>
				<ul class="characteristics">
					<li><strong>Автор:</strong> {{ book.author }}</li>
					<li><strong>Художник:</strong> {{ book.artist }}</li>
					<li><strong>Издательство:</strong> {{ book.publisher }}</li>
					<li><strong>Год:</strong> {{ book.year }}</li>
					<li><strong>Серия:</strong> {{ book.series }}</li>
					<li><strong>Жанр:</strong> {{ book.genre }}</li>
				</ul>
				<h2 class="annotation-title">Аннотация</h2>
				<p class="annotation">{{ book.annotation }}</p>
			</div>
		</div>
	</div>
	<button class="back-button" @click="$router.back()">← Назад</button>
</template>

<script>
export default {
	data() {
		return {
			books: [
				{
					id: 1,
					src: '/src/assets/book/book.jpg',
					title: 'ОДИН',
					description:
						'Что делать, когда твой родной город оккупирован вражескими войсками, а мама не разрешает даже выходить на улицу? Но друзья Гриша и Серёга находят способ помочь нашим сапёрам. Для младшего школьного возраста.',
					author: 'Внуков Николай Андреевич',
					artist: 'Лямин Николай',
					publisher: 'Детская литература, 2022',
					year: '1988',
					series: 'Детям о Великой Отечественной войне',
					genre: 'Молодежная литература',
					annotation:
						'Что делать, когда твой родной город оккупирован вражескими войсками, а мама не разрешает даже выходить на улицу? Но друзья Гриша и Серёга находят способ помочь нашим сапёрам. Для младшего школьного возраста.',
				},
				{
					id: 2,
					src: 'src/assets/writer/2.png',
					title: 'Книга 2',
					description: 'Описание книги 2...',
				},
				{
					id: 3,
					src: 'src/assets/writer/3.png',
					title: 'Книга 3',
					description: 'Описание книги 3...',
				},
				{
					id: 4,
					src: 'src/assets/writer/4.png',
					title: 'Книга 4',
					description: 'Описание книги 4...',
				},
				// добавьте больше книг
			],
		}
	},
	computed: {
		book() {
			const id = parseInt(this.$route.params.id)
			return this.books.find(b => b.id === id) || {}
		},
	},
}
</script>

<style scoped>
.book-page {
	margin: 0 auto;
	padding: 40px;
	font-family: 'Georgia', serif;
}

/* Кнопка назад */
.back-button {
	top: 20px;
	left: 20px;
	background-color: #007bff;
	color: #fff;
	border: none;
	padding: 10px 15px;
	border-radius: 6px;
	cursor: pointer;
	font-size: 1em;
	transition: background-color 0.3s;
}
.back-button:hover {
	background-color: #0056b3;
}

/* Основной контент */
.content {
	display: flex;
	margin: 0 auto;
	max-width: 1000px;
	margin-top: 60px;
	gap: 20px;
	flex-wrap: wrap;
	align-items: flex-start;
}

/* Обложка книги */
.cover {
	flex: 0 0 350px;
}
.cover img {
	width: 100%;
	border-radius: 8px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	max-width: 350px;
	height: auto;
}

/* Текстовая часть */
.text-block {
	flex: 1;
}
.title {
	font-size: 2em;
	margin-bottom: 10px;
	font-weight: bold;
	color: #222;
	text-align: left;
}

.description {
	font-size: 1.2em;
	line-height: 1.5;
	margin-bottom: 20px;
	color: #555;
	text-align: justify;
}
.characteristics-title {
	font-size: 1.5em;
	margin-top: 20px;
	margin-bottom: 10px;
}
.characteristics {
	list-style: none;
	padding: 0;
	margin: 0 0 20px 0;
}
.characteristics strong {
	color: rgb(141, 164, 182, 0.8);
}
.characteristics li {
	margin-bottom: 8px;
	font-size: 1.1em;
}
.annotation-title {
	font-size: 1.5em;
	margin-top: 20px;
	margin-bottom: 10px;
}
.annotation {
	font-size: 1.2em;
	line-height: 1.5;
	color: #555;
}
</style>
