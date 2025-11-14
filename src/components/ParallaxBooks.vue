<template>
	<div class="parallax-container">
		<!-- Первая строка -->
		<div class="row odd-row" :style="{ transform: 'translateX(' + offsetOdd + 'px)' }">
			<div v-for="book in books" :key="'odd-' + book.id" class="book" @click="goToPhoto(book.id)">
				<img :src="book.src" :alt="book.title" />
			</div>
			<div v-for="book in books" :key="'odd-copy-' + book.id" class="book" @click="goToPhoto(book.id)">
				<img :src="book.src" :alt="book.title" />
			</div>
		</div>

		<!-- Вторая строка -->
		<div class="row even-row" :style="{ transform: 'translateX(' + offsetEven + 'px)' }">
			<div v-for="book in books" :key="'even-' + book.id" class="book" @click="goToPhoto(book.id)">
				<img :src="book.src" :alt="book.title" />
			</div>
			<div v-for="book in books" :key="'even-copy-' + book.id" class="book" @click="goToPhoto(book.id)">
				<img :src="book.src" :alt="book.title" />
			</div>
		</div>

		<!-- Третья строка -->
		<div class="row odd-row" :style="{ transform: 'translateX(' + offsetOdd + 'px)' }">
			<div v-for="book in books" :key="'odd-' + book.id" class="book" @click="goToPhoto(book.id)">
				<img :src="book.src" :alt="book.title" />
			</div>
			<div v-for="book in books" :key="'odd-copy-' + book.id" class="book" @click="goToPhoto(book.id)">
				<img :src="book.src" :alt="book.title" />
			</div>
		</div>
	</div>
</template>

<script>
import books from '@/books.js'
export default {
	data() {
		return {
			books,
			offsetOdd: 0,
			offsetEven: 0,
			speed: 0.5,
		}
	},
	mounted() {
		this._animationFrame = this.animate.bind(this)
		this.animate()
	},
	beforeUnmount() {
		cancelAnimationFrame(this._animationFrame)
	},
	methods: {
		goToPhoto(id) {
			this.$router.push(`/book/${id}`).then(() => {
				window.scrollTo({ top: 0, behavior: 'instant' })
			})
		},
		animate() {
			this.offsetOdd -= this.speed
			this.offsetEven += this.speed

			const totalWidth = this.books.length * 160
			if (this.offsetOdd <= -totalWidth) {
				this.offsetOdd = 0
			}
			if (this.offsetEven >= totalWidth) {
				this.offsetEven = 0
			}

			requestAnimationFrame(this.animate.bind(this))
		},
	},
}
</script>

<style scoped>
.parallax-container {
	background-color: white;
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
.even-row {
	margin-left: -3500px;
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
@media screen and (max-width: 1600px) {
	.parallax-container {
		padding: 30px 0;
	}
	.row {
		gap: 5px;
		margin-bottom: 3px;
	}
	.even-row {
		margin-left: -2000px;
	}
	.book img {
		width: 120px;
		height: 165px;
	}
}

@media screen and (max-width: 1000px) {
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
	.even-row {
		margin-left: -1700px;
	}
}

@media screen and (max-width: 482px) {
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
		.even-row {
		margin-left: -1500px;
	}
}
</style>
