<template>
	<div class="parallax-container">
		<div class="row odd-row" :style="{ transform: 'translateX(' + offsetOdd + 'px)' }">
			<div v-for="(book, index) in books" :key="'odd-' + index" class="book" @click="goToPhoto(book.id)">
				<img :src="book.src" :alt="book.title" />
			</div>
			<div v-for="(book, index) in books" :key="'odd-copy-' + index" class="book" @click="goToPhoto(book.id)">
				<img :src="book.src" :alt="book.title" />
			</div>
		</div>

		<div
			class="row even-row"
			:style="{
				transform: 'translateX(' + offsetEven + 'px)',
				marginLeft: '-4000px',
			}"
		>
			<div v-for="(book, index) in books" :key="'even-' + index" class="book" @click="goToPhoto(book.id)">
				<img :src="book.src" :alt="book.title" />
			</div>
			<div v-for="(book, index) in books" :key="'even-copy-' + index" class="book" @click="goToPhoto(book.id)">
				<img :src="book.src" :alt="book.title" />
			</div>
		</div>
	
		<div class="row odd-row" :style="{ transform: 'translateX(' + offsetOdd + 'px)' }">
			<div v-for="(book, index) in books" :key="'odd-' + index" class="book" @click="goToPhoto(book.id)">
				<img :src="book.src" :alt="book.title" />
			</div>
			<div v-for="(book, index) in books" :key="'odd-copy-' + index" class="book" @click="goToPhoto(book.id)">
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
				{ id: 14, src: 'src/assets/book/book14.webp', title: 'Книга 4' },
				{ id: 16, src: 'src/assets/book/book16.png', title: 'Книга 4' },
				{ id: 18, src: 'src/assets/book/book18.png', title: 'Книга 4' },
				{ id: 19, src: 'src/assets/book/book19.png', title: 'Книга 4' },
				{ id: 0, src: 'src/assets/book/book.png', title: 'Книга 4' },
				
			],
			offsetOdd: 0,
			offsetEven: 0,
			speed: 0.5, 
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
}
.book img:hover {
	filter: grayscale(0%);
	transform: scale(1.1);
}
@media (min-width: 480px) and (max-width: 768px) {
	.parallax-container {
		padding: 20px 0;
	}
	.row {
		gap: 7px;
		margin-bottom: 3px;
	}
	.book img {
		width: 100px;
		height: 145px;
	}
}

@media (min-width: 360px) and (max-width: 480px) {
	.parallax-container {
		padding: 10px 0;
	}
	.row {
		gap: 5px;
		margin-bottom: 3px;
	}
	.book img {
		width: 75px;
		height: 110px;
	}
}
</style>
