<template>
	<div v-if="book">
		<div class="book-page">
			<div class="content">
				<div class="cover">
					<img :src="book.src" :alt="book.title" />
				</div>
				<div class="text-block">
					<h2 class="title">{{ book.title }}</h2>
					<p class="annotation-text">{{ book.annotation.slice(0, 230) + (book.annotation.length > 200 ? '...'
						: '') }}</p>
					<div class="annotation-button"><button @click.prevent="scrollToAnnotation">Полная аннотация</button>
					</div>
					<h2 class="title">Характеристики</h2>
					<ul class="characteristics">
						<li><strong>Автор:</strong> {{ book.author }}</li>
						<li><strong>Художник:</strong> {{ book.artist }}</li>
						<li><strong>Издательство:</strong> {{ book.publisher }}</li>
						<li><strong>Год:</strong> {{ book.year }}</li>
						<li><strong>Жанр:</strong> {{ book.genre }}</li>
					</ul>
				</div>
				<div id="quote"> 
					<h2 class="title">Цитаты</h2>
					<div class="quote-text">
						<img src="assets/forging.png" alt="" />
						<p>{{ book.quote_one }}</p>
					</div>
					<div class="quote-text">
						<img src="assets/forging.png" alt="" />
						<p>{{ book.quote_two }}</p>
					</div>
					<div class="quote-text">
						<img src="assets/forging.png" alt="" />
						<p>{{ book.quote_tree }}</p>
					</div>
				</div>
				<div id="annotation">
					<h2 class="title">Аннотация</h2>
					<p class="annotation-text">{{ book.annotation }}</p>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		<p>Книга не найдена</p>
	</div>
	<div class="navigation" v-if="book">
		<div class="nav-button" @click.prevent="goBack">
			<div class="arrow-left"><img src="assets/back.png" alt="" /></div>
			<span class="nav-title">{{ prevTitle }}</span>
		</div>
		<div class="nav-button" @click.prevent="goNext">
			<span class="nav-title">{{ nextTitle }}</span>
			<div class="arrow-right"><img src="assets/back.png" alt="" /></div>
		</div>
	</div>
</template>

<script>
import books from '@/books.js'

export default {
	props: {
		id: {
			type: [String, Number],
			required: true,
		},
	},
	computed: {
		book() {
			const bookId = String(this.id)
			return books.find(b => String(b.id) === bookId)
		},
		currentIndex() {
			return books.findIndex(b => String(b.id) === String(this.id))
		},
		prevTitle() {
			const prevIdx = (this.currentIndex - 1 + books.length) % books.length
			return books[prevIdx].title
		},
		nextTitle() {
			const nextIdx = (this.currentIndex + 1) % books.length
			return books[nextIdx].title
		},
	},

	methods: {
		goNext() {
			const nextIdx = (this.currentIndex + 1) % books.length
			const nextId = books[nextIdx].id
			this.$router.push({ path: `/book/${nextId}` }).then(() => {
				window.scrollTo({ top: 0, behavior: 'auto' })
			})
		},
		goBack() {
			const prevIdx = (this.currentIndex - 1 + books.length) % books.length
			const prevId = books[prevIdx].id
			this.$router.push({ path: `/book/${prevId}` }).then(() => {
				window.scrollTo({ top: 0, behavior: 'auto' })
			})
		},
		scrollToAnnotation() {
			document.getElementById('annotation').scrollIntoView({ behavior: 'auto' })
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
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
	max-width: 250px;
	height: auto;
}

/* Текстовая часть */
.text-block {
	flex: 1;
}

.title {
	font-size: 1.7em;
	margin-bottom: 10px;
	font-weight: 700;
	color: #222;
	padding: 10px 0;
	text-align: left;
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
	color: rgb(141, 164, 182);
	font-weight: 400;
}

.characteristics li {
	margin-bottom: 8px;
	font-size: 1.1em;
}

.quote-text {
	display: flex;
	align-items: flex-start;
	padding: 30px 30px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	margin: 20px 0;
	gap: 10px;
	background-color: rgba(141, 164, 182, 0.43);
}

.quote-text img {
	width: 2%;
}

.annotation-title {
	font-size: 1.5em;
	margin-top: 20px;
	margin-bottom: 10px;
}

.annotation-text,
.quote-text p {
	font-size: 1.2em;
	text-align: justify;
	line-height: 1.5;
}

.annotation-text {
	color: #555;
}

.annotation-button {
	margin-bottom: 20px;
}

button {
	padding: 8px 16px;
	font-size: 1em;
	cursor: pointer;
	border: none;
	color: #000000;
}

@media screen and (max-width: 768px) {
	.book-page {
		padding: 20px;
	}

	.content {
		margin-top: 30px;
		flex-direction: column;
	}

	.cover {
		margin: 0 auto;
	}

	.characteristics {
		margin-bottom: 40px;
	}

	p {
		margin: 5px auto;
	}

	.annotation-button {
		margin: 20px 0 40px;
	}
}

@media screen and (max-width: 482px) {
	.book-page {
		padding: 20px;
	}

	.content {
		margin-top: 20px;
	}

	.characteristics {
		margin-bottom: 40px;
	}

	.annotation-text,
	.quote-text p {
		font-size: 1em;
		line-height: 1;
	}

	.annotation-button {
		margin: 20px 0;
	}
}
</style>
