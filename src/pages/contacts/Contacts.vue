<template>
	<div class="wrapper">
		<div class="container">
			<div class="container_title">
				<h1>Контакты</h1>
				<hr />
				<p>Интерактивная площадка, основанная на книгах писателя.</p>
			</div>
		</div>
		<div class="contacts-page">
			<section class="contacts-info">
				<div class="contact-item">
					<h3 style='margin-bottom: 18px;'>График работы</h3>
					<div class="item-row">
						<p>Понедельник</p>
						<p class="item-value">выходной</p>
					</div>
					<div class="item-row">
						<p>Вторник</p>
						<p class="item-value">11:00 - 20:00</p>
					</div>
					<div class="item-row">
						<p>Среда</p>
						<p class="item-value">11:00 - 20:00</p>
					</div>
					<div class="item-row">
						<p>Четверг</p>
						<p class="item-value">11:00 - 20:00</p>
					</div>
					<div class="item-row">
						<p>Пятница</p>
						<p class="item-value">11:00 - 20:00</p>
					</div>
					<div class="item-row">
						<p>Суббота</p>
						<p class="item-value">11:00 - 19:00</p>
					</div>
					<div class="item-row">
						<p>Воскресенье</p>
						<p class="item-value">11:00 - 19:00</p>
					</div>
				</div>
				<div class="contact-item">
					<div class="library-info">
						<div class="info-row">
							<h3>Адрес библиотеки</h3>
							<p class="info-value">пр. Просвещения, д. 36/141</p>
						</div>
						<div class="info-row">
							<h3>Заведующий библиотекой:</h3>
							<div>
								<p>Терехова Марина Владимировна</p>
								<p>+7 (812) 246-93-12(1201)</p>
								<a href="mailto:m.terekhova@cbsvib.ru">m.terekhova@cbsvib.ru</a>
							</div>
						</div>
						<div class="info-row">
							<h3>Отдел обслуживания</h3>
							<div class="info-value">
								<p>+7 (812) 246-93-12</p>
							</div>
						</div>
						<div class="info-row">
							<h3>Социальные сети</h3>
							<div class="info-value"><a href="https://vk.com/spb_cdb" target="_blank">Группа
									ВКонтакте</a></div>
						</div>
					</div>
				</div>
			</section>
			<section class="map-section">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.123456789!2d37.529999!3d55.700000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a123456789%3A0xabcdef123456789!2sПроспект+Просвещения+36/141!5e0!3m2!1sru!2sru!4v1610000000000"
					width="100%" height="400" style="border: 0; filter: grayscale(100%) contrast(100%) brightness(100%)"
					allowfullscreen="" loading="lazy"></iframe>
			</section>
		</div>
	</div>
</template>

<script></script>

<style scoped>
.contacts-page {
	max-width: 1200px;
	margin: 0 auto;
	padding: 50px 20px;
	font-family: Arial, sans-serif;
	color: #000;
}

/* Стиль для информации */
.contacts-info {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 70px;
	margin-bottom: 50px;
}

.contact-item {
	align-items: center;
	gap: 20px;
	min-width: 250px;
}

.icon {
	width: 10%;
}

.library-info {
	max-width: 700px;
	margin: 0 auto;
}

.info-row {
	display: flex;
	margin-bottom: 18px;
}

.item-row {
	margin-bottom: 12px;
	display: flex;
}

.info-row h3 {
	width: 300px;
}

.info-value,
.item-value {
	flex: 1;
}

.item-value {
	text-align: right;
}

a {
	color: #222;
	text-decoration: underline;
}

/* Карта */
.map-section iframe {
	width: 100%;
	height: 600px;
}

p {
	margin: 0;
	font-size: 1.2em;
}


@media(max-width: 482px) {
	p {
		font-size: 1em;
	}
	.info-row {
		flex-direction: column;
	}
	.container_title{
		padding-top: 40px;
	}
}
</style>
