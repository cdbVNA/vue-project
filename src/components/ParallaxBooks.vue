<template>
	<div class="parallax-container">
		<!-- Нечетный ряд -->
		<div
			class="row odd-row"
			:style="{ transform: 'translateX(' + offsetOdd + 'px)' }"
		>
			<div
				v-for="(book, index) in books"
				:key="'odd-' + index"
				class="book"
				@click="goToPhoto(book.id)"
			>
				<img :src="book.src" :alt="book.title" />
			</div>
			<!-- Дублируем для бесконечности -->
			<div
				v-for="(book, index) in books"
				:key="'odd-copy-' + index"
				class="book"
				@click="goToPhoto(book.id)"
			>
				<img :src="book.src" :alt="book.title" />
			</div>
		</div>
		<!-- Четный ряд -->
		<div
			class="row even-row"
			:style="{
				transform: 'translateX(' + offsetEven + 'px)',
				marginLeft: '-4000px',
			}"
		>
			<div
				v-for="(book, index) in books"
				:key="'even-' + index"
				class="book"
				@click="goToPhoto(book.id)"
			>
				<img :src="book.src" :alt="book.title" />
			</div>
			<!-- Дублируем для бесконечности -->
			<div
				v-for="(book, index) in books"
				:key="'even-copy-' + index"
				class="book"
				@click="goToPhoto(book.id)"
			>
				<img :src="book.src" :alt="book.title" />
			</div>
		</div>
		<!-- Нечетный ряд -->
		<div
			class="row odd-row"
			:style="{ transform: 'translateX(' + offsetOdd + 'px)' }"
		>
			<div
				v-for="(book, index) in books"
				:key="'odd-' + index"
				class="book"
				@click="goToPhoto(book.id)"
			>
				<img :src="book.src" :alt="book.title" />
			</div>
			<!-- Дублируем для бесконечности -->
			<div
				v-for="(book, index) in books"
				:key="'odd-copy-' + index"
				class="book"
				@click="goToPhoto(book.id)"
			>
				<img :src="book.src" :alt="book.title" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			books: [
				{ id: 1, src: 'src/assets/book/book1.png', title: 'Книга 1' },
				{ id: 2, src: 'src/assets/book/book2.webp', title: 'Книга 2' },
				{ id: 3, src: 'src/assets/book/book3.png', title: 'Книга 3' },
				{ id: 4, src: 'src/assets/book/book4.png', title: 'Книга 4' },
				{ id: 5, src: 'src/assets/book/book5.webp', title: 'Книга 4' },
				{ id: 6, src: 'src/assets/book/book6.png', title: 'Книга 4' },
				{ id: 7, src: 'src/assets/book/book7.png', title: 'Книга 4' },
				{ id: 8, src: 'src/assets/book/book8.webp', title: 'Книга 4' },
				{ id: 9, src: 'src/assets/book/book9.png', title: 'Книга 4' },
				{ id: 10, src: 'src/assets/book/book10.webp', title: 'Книга 4' },
				{ id: 11, src: 'src/assets/book/book11.png', title: 'Книга 4' },
				{ id: 12, src: 'src/assets/book/book12.png', title: 'Книга 4' },
				{ id: 13, src: 'src/assets/book/book13.png', title: 'Книга 4' },
				{ id: 14, src: 'src/assets/book/book14.webp', title: 'Книга 4' },
				{ id: 15, src: 'src/assets/book/book15.png', title: 'Книга 4' },
				{ id: 16, src: 'src/assets/book/book16.png', title: 'Книга 4' },
				{ id: 17, src: 'src/assets/book/book17.png', title: 'Книга 4' },
				{ id: 18, src: 'src/assets/book/book18.png', title: 'Книга 4' },
				{ id: 19, src: 'src/assets/book/book19.png', title: 'Книга 4' },
				{ id: 0, src: 'src/assets/book/book.png', title: 'Книга 4' },
				{ id: 1, src: 'src/assets/book/book1.png', title: 'Книга 1' },
				{ id: 2, src: 'src/assets/book/book2.webp', title: 'Книга 2' },
				{ id: 3, src: 'src/assets/book/book3.png', title: 'Книга 3' },
				{ id: 4, src: 'src/assets/book/book4.png', title: 'Книга 4' },
				{ id: 5, src: 'src/assets/book/book5.webp', title: 'Книга 4' },
				{ id: 6, src: 'src/assets/book/book6.png', title: 'Книга 4' },
				{ id: 7, src: 'src/assets/book/book7.png', title: 'Книга 4' },
				{ id: 8, src: 'src/assets/book/book8.webp', title: 'Книга 4' },
				{ id: 9, src: 'src/assets/book/book9.png', title: 'Книга 4' },
				{ id: 10, src: 'src/assets/book/book10.webp', title: 'Книга 4' },
				{ id: 11, src: 'src/assets/book/book11.png', title: 'Книга 4' },
				{ id: 12, src: 'src/assets/book/book12.png', title: 'Книга 4' },
				{ id: 13, src: 'src/assets/book/book13.png', title: 'Книга 4' },
				{ id: 14, src: 'src/assets/book/book14.webp', title: 'Книга 4' },
				{ id: 15, src: 'src/assets/book/book15.png', title: 'Книга 4' },
				{ id: 16, src: 'src/assets/book/book16.png', title: 'Книга 4' },
				{ id: 17, src: 'src/assets/book/book17.png', title: 'Книга 4' },
				{ id: 18, src: 'src/assets/book/book18.png', title: 'Книга 4' },
				{ id: 19, src: 'src/assets/book/book19.png', title: 'Книга 4' },

				// добавьте больше книг по желанию
			],
			offsetOdd: 0,
			offsetEven: 0,
			speed: 0.5, // скорость прокрутки
		}
	},
	mounted() {
		this.animate()
	},
	methods: {
		goToPhoto(id) {
			this.$router.push({ path: `/book/${id}` })
		},
		animate() {
			// Обновляем смещение
			this.offsetOdd -= this.speed
			this.offsetEven += this.speed

			// Обнуляем, чтобы цикл был бесконечным
			const totalWidth = this.books.length * 160 // ширина + gap
			if (this.offsetOdd <= -totalWidth) {
				this.offsetOdd = 0
			}
			if (this.offsetEven >= totalWidth) {
				this.offsetEven = 0
			}

			requestAnimationFrame(this.animate)
		},
	},
}
</script>

<style scoped>
.parallax-container {
	overflow: hidden;
	padding: 50px 0;
}
.row {
	display: flex;
	justify-content: start;
	gap: 10px;
	margin-bottom: 5px;
	will-change: transform;
}
.book img {
	width: 150px;
	height: 220px;
	object-fit: cover;
	filter: grayscale(100%);
	transition: all 0.3s ease;
	cursor: pointer;
	border-radius: 4px;
}
.book img:hover {
	filter: grayscale(0%);
	transform: scale(1.1);
}
</style>
