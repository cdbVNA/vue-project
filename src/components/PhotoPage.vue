<template>
	<div v-if="photo">
		<div class="photo-page">
			<div class="photo-container">
				<div class="photo-img">
					<img :src="photo.src" :alt="photo.title" :class="{ photo1: photo.id === 1 }" />
				</div>
				<div class="photo-text">
					<h2>{{ photo.title }}</h2>
					<p>{{ photo.text }}</p>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		<p>Страница не найдена</p>
	</div>
	<div class="navigation" v-if="photo">
		<div class="nav-button" @click.prevent="goBack">
			<div class="arrow-left"><img src="/src/assets/back.png" alt="" /></div>
			<span class="nav-title">{{ prevTitle }}</span>
		</div>
		<div class="nav-button" @click.prevent="goNext">
			<span class="nav-title">{{ nextTitle }}</span>
			<div class="arrow-right"><img src="/src/assets/back.png" alt="" /></div>
		</div>
	</div>
</template>

<script>
import photos from '@/photos'

export default {
	props: {
		id: {
			type: [String, Number],
			required: true,
		},
	},
	computed: {
		photo() {
			const photoId = String(this.id)
			return photos.find(p => String(p.id) === photoId)
		},
		currentIndex() {
			return photos.findIndex(p => String(p.id) === String(this.id))
		},
		prevTitle() {
			const prevIdx = (this.currentIndex - 1 + photos.length) % photos.length
			return photos[prevIdx].title
		},
		nextTitle() {
			const nextIdx = (this.currentIndex + 1) % photos.length
			return photos[nextIdx].title
		},
	},
	methods: {
		goNext() {
			const nextIdx = (this.currentIndex + 1) % photos.length
			const nextId = photos[nextIdx].id
			this.$router.push({ path: `/photo/${nextId}` }).then(() => {
				window.scrollTo({ top: 0, behavior: 'instant' });
			});
		},
		goBack() {
			const prevIdx = (this.currentIndex - 1 + photos.length) % photos.length
			const prevId = photos[prevIdx].id
			this.$router.push({ path: `/photo/${prevId}` }).then(() => {
				window.scrollTo({ top: 0, behavior: 'instant' });
			});
		},
	},
}
</script>

<style scoped>
.photo-page {
	max-width: 1920px;
	margin: 0 auto;
}

.photo-container {
	text-align: center;
}

.photo-img {
	max-width: 1920px;
	height: 800px;
	margin: 0 auto;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
}

.photo1 {
	object-position: bottom;
}

.photo-img img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: top;
	display: block;
}

.photo-text {
	display: flex;
	padding: 100px;
	flex-direction: row;
	justify-content: space-between;
}

h2 {
	font-size: 4em;
	text-align: left;
	flex: 1;
	white-space: pre-line;
}

p {
	font-size: 1.5em;
	flex: 1;
	width: 50%;
	white-space: pre-line;
}

@media screen and (max-width: 768px) {
	.photo-page {
		min-width: 360px;
	}


	.photo-container {
		text-align: center;
	}

	.photo-img {
		width: 100%;
		height: auto;
		margin: 0 auto;
	}

	.photo-text {
		display: flex;
		padding: 40px;
		flex-direction: column;
		margin-top: 10px;
	}

	h2 {
		font-size: 1.5em;
		line-height: 1;
	}

	p {
		font-size: 0.7em;
		width: 100%;
	}

}

@media screen and (max-width: 482px) {
	.photo-page {
		width: 100%;
		height: auto;
	}

	.back-button {
		padding: 10px 20px;
		margin-bottom: 20px;
		cursor: pointer;
	}

	.photo-container {
		text-align: center;
	}

	.photo-img {
		max-width: 480px;
		height: 200px;
		margin: 0 auto;
	}

	.photo-text {
		display: flex;
		padding: 40px;
		flex-direction: column;
		margin-top: 10px;
	}

	h2 {
		font-size: 1.5em;
		line-height: 1;
	}

	p {
		font-size: 0.7em;
		width: 100%;
	}
}
</style>
