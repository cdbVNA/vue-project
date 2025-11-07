<template>
	<div class="wrapper">
		<div class="container">
			<div class="container_title">
				<h1>Территория Внукова</h1>
				<hr />
				<p>Интерактивная площадка, основанная на книгах писателя.</p>
			</div>
		</div>
		<div class="text">
			<p>
				8 ноября 2023 года Николаю Андреевичу Внукову исполнилось бы 98 лет. Эта
				дата – отличный повод рассказать о писателе, имя которого носит
				библиотека и начать подготовку к грядущему столетнему юбилею,
				инициировав масштабный проект «Территория Внукова». В рамках этого
				проекта библиотека провела серию различных мероприятий (выставок,
				семинаров, занятий), связанных с именем Внукова и открыла 8 ноября 2025
				года одноименную интерактивную площадку, основанную на книгах писателя.
			</p>
			<p>
				Выставка состоит из 8 стендов, размещенных в зале для мероприятий и
				интерактивной инсталляции «Рабочий стол Николая Внукова», где размещена
				его печатная машинка, на которой желающие могут печатать фрагменты его
				произведений – они также находятся на столе или рядом на стеллаже или
				полке. Документы Внукова используются как иллюстративный материал для
				стендов. Возле каждого стенда может быть небольшая полка с книгами,
				упомянутыми в данном стенде. Если такой возможности нет, то можно
				поставить все книги на один стеллаж.
			</p>
		</div>
		<div class="gallery">
			<div class="row-images">
				<img src="/src/assets/territory/1.png" alt="Image 1" />
				<img src="/src/assets/territory/2.png" alt="Image 2" />
				<img src="/src/assets/territory/3.png" alt="Image 3" />
			</div>

			<!-- Одна большая картинка -->
			<div class="single-image">
				<img src="/src/assets/territory/4.png" alt="Main Image" />
			</div>

			<!-- Две картинки в ряд -->
			<div class="row-images">
				<img src="/src/assets/territory/5.png" alt="Image 5" />
				<img src="/src/assets/territory/6.png" alt="Image 6" />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Territory',
}
</script>

<style scoped>
.container {
	padding-top: 200px;
	margin: 0 auto;
}
.row-images {
	display: flex;
	justify-content: center;
	gap: 20px;
	margin-bottom: 30px;
	flex-wrap: wrap;
}
.row-images img {
	height: auto;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.single-image {
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
}
.single-image img {
	height: auto;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.row-images:nth-of-type(2) {
	margin-top: 30px;
}
</style>
