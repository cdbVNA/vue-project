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
					id: 0,
					src: '/src/assets/book/book.jpg',
					title: 'Приказ по шестому полку',
					author: 'Внуков Николай Андреевич',
					artist: 'Лямин Николай',
					publisher: 'Детская литература, 2022',
					year: '1988',
					genre: 'Молодежная литература',
					annotation: 'Что делать, когда твой родной город оккупирован вражескими войсками, а мама не разрешает даже выходить на улицу? Но друзья Гриша и Серёга находят способ помочь нашим сапёрам. Для младшего школьного возраста.',
				},
				{
					id: 3,
					src: '/src/assets/book/book3.jpg',
					title: 'Главный экспонат',
					author: 'Внуков Николай Андреевич, Вольф Сергей Евгеньевич, Голявкин Виктор Владимирович, Длуголенский Яков Ноевич, Васильев Павел Александрович, Котовщикова Аделаида Александровна, Погодин Радий Петрович, Раевский Борис Маркович',
					artist: 'Петров Л., Петрова Валентина',
					publisher: 'Детская литература',
					year: '1972',
					genre: '',
					annotation: 'Герои этих рассказов - такие же, как и вы, мальчишки и девчонки. В их жизни, наверное, так же, как и у вас, бывают трудные минуты. Минуты, которые ставят серьёзный вопрос: кто ты? Мужественный человек или трус, честный или лгун, настоящий друг или просто так, случайный попутчик...',
				},
				{
					id: 13,
					src: '/src/assets/book/book13.png',
					title: 'Четыре рассказа о войне (сборник)',
					author: 'Внуков Николай Андреевич',
					artist: '',
					publisher: 'Детская литература',
					year: '1975',
					genre: 'Детские книги, Детская проза, Историческая проза',
					annotation: 'В книгу вошли четыре рассказа о войне русского советского детского писателя Николая Андреевича Внукова, написанные по собственным воспоминаниям.',
				},
				{
					id: 14,
					src: '/src/assets/book/book14.webp',
					title: 'Москва за нами',
					author: 'Внуков Николай Андреевич',
					artist: ' С. Рудакова, И. Рудакова',
					publisher: 'Детская литература',
					year: '1985',
					genre: '',
					annotation: '',
				},
				
				{
					id: 16,
					src: '/src/assets/book/book16.png',
					title: 'Старая гильза',
					author: 'Внуков Николай Андреевич',
					artist: 'Н. Кочергина',
					publisher: 'Детская литература. Ленинград',
					year: '1972',
					genre: 'Детская проза',
					annotation: '',
				},
				
				{
					id: 18,
					src: '/src/assets/book/book18.png',
					title: 'Путешествие не кончается',
					author: 'Внуков Николай Андреевич',
					artist: 'Рудаков Сергей Константинович',
					publisher: 'Речь, 2017',
					year: '',
					genre: 'Приключения. Детективы',
					annotation: 'Если мама ушла в магазин, а по телевизору нет ничего интересного, можно… к примеру, отправиться в Африку. Или на острова Тихого океана, в Америку XIX века и даже в гости к канадским индейцам. А ведь раньше Андрей и не догадывался о том, что такие необыкновенные путешествия возможны! Но теперь-то он знает, что нужно всего лишь открыть книгу, и приключения не заставят себя долго ждать! Где мальчик побывает в следующий раз?.. Текст печатается по изданию: Внуков Н. Путешествие не кончается : повесть. Л.: Детская литература, 1977.',
				},
				{
					id: 19,
					src: '/src/assets/book/book19.png',
					title: 'На чужих крыльях',
					author: 'Внуков Николай Андреевич',
					artist: 'Н. Лямина',
					publisher: 'Детская литература. Ленинград',
					year: '1983',
					genre: '',
					annotation: '',
				},
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
	flex: 0 0 300px;
}
.cover img {
	width: 100%;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	max-width: 250px;
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
	text-align: justify;
	line-height: 1.5;
	color: #555;
}
</style>
