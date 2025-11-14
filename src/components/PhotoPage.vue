<template>
	<div v-if="photo">
		<div class="photo-page">
			<div class="photo-container">
				<div class="photo-img">
					<img :src="photo.src" :alt="photo.title" :class="{ photo1: photo.id === 1 }" />
				</div>
				<div class="photo-text">
					<div class="photo-title">
						<h2>{{ photo.title }}</h2>
					</div>
					<div class="photo-description">
						<p>{{ photo.text }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		<p>Страница не найдена</p>
	</div>
	<div class="navigation" v-if="photo">
		<div class="nav-button" @click.prevent="goBack">
			<div class="arrow-left"><img :src="back" alt="" /></div>
			<p class="nav-title" style='text-align: left;'>{{ prevTitle }}</p>
		</div>
		<div class="nav-button" @click.prevent="goNext">
			<p class="nav-title" style='text-align: right;'>{{ nextTitle }}</p>
			<div class="arrow-right"><img :src="back" alt="" /></div>
		</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import back from '@/assets/back.png'
import photos from '@/photos'
import { defineComponent } from 'vue'
export default defineComponent({
	props: {
		id: {
			type: [String, Number],
			required: true,
		},
	},
	setup(props) {
		const router = useRouter()

		const photo = computed(() => {
			const photoId = String(props.id)
			return photos.find(p => String(p.id) === photoId)
		})

		const currentIndex = computed(() => {
			return photos.findIndex(p => String(p.id) === String(props.id))
		})

		const prevTitle = computed(() => {
			const prevIdx = (currentIndex.value - 1 + photos.length) % photos.length
			return photos[prevIdx].title
		})

		const nextTitle = computed(() => {
			const nextIdx = (currentIndex.value + 1) % photos.length
			return photos[nextIdx].title
		})

		const goNext = () => {
			const nextIdx = (currentIndex.value + 1) % photos.length
			const nextId = photos[nextIdx].id
			router.push({ path: `/photo/${nextId}` })
		}

		const goBack = () => {
			const prevIdx = (currentIndex.value - 1 + photos.length) % photos.length
			const prevId = photos[prevIdx].id
			router.push({ path: `/photo/${prevId}` })
		}

		return {
			photo,
			prevTitle,
			nextTitle,
			goNext,
			goBack,
			back
		}
	},
})
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
.photo-title {
	flex: 1;
	padding-bottom: 20px;
	white-space: pre-line;
}
h2 {
	text-align: left;
	width: 70%;
}
.photo-description {
	white-space: pre-line;
	flex: 1;
}

@media screen and (max-width: 1000px) {
	.photo-container {
		text-align: center;
	}

	.photo-img {
		width: 100%;
		height: 500px;
		margin: 0 auto;
	}

	.photo-text {
		display: flex;
		padding: 40px;
		flex-direction: column;
		margin-top: 10px;
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
