<template> 
	<div class="wrapper">
		<div class="container">
			<div class="container_title">
				<h1>Конкурс открыток</h1>
				<hr />
				<p>В этом разделе вы найдёте рисунки учащихся школ Выборгского района. Ребята участвовали в конкурсе
					открыток и рисовали сюжеты из книг Николая Внукова. Работы победителей будут использованы в качестве
					иллюстраций на памятных открытках.</p>
			</div>
		</div>
		<div class="section">
			<div class="section-text">
				<p>Главной задачей конкурса было привлечь внимание к творчеству автора, чьё имя с 2017 года носит
					Центральная детская библиотека Выборгского района Санкт-Петербурга.
					По итогам конкурса были определены победители, чьи работы были напечатаны на памятных открытках.</p>
			</div>
		</div>
		<div class="winners-section">
			<h2>Победители конкурса</h2>

			<div class="age-group">
				<h3>Возрастная группа 6-8 лет</h3>
				<ul>
					<li><strong>1 место:</strong> коллективная работа: Костомаров Матвей, Фенько Дмитрий, Фомин Арсений
					</li>
					<li><strong>2 место:</strong> Филлипов Илья</li>
					<li><strong>3 место:</strong> Смолев Савелий</li>
				</ul>
			</div>

			<div class="age-group">
				<h3>Возрастная группа 9-11 лет</h3>
				<ul>
					<li><strong>1 место:</strong> Дзюба София</li>
					<li><strong>2 место:</strong> Абрамова Анна</li>
					<li><strong>3 место:</strong> Мурысов Алексей</li>
				</ul>
			</div>
		</div>
		<div class="container-image">
			<div class="image-grid">
				<div class="image-item" v-for="(img, index) in images" :key="index">
					<img :src="img.src" :alt="img.name" />
					<div class="image-text">{{ img.name }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const images = [
	{ src: 'drawing/img/АбрамоваАннаМихайловна_9лет_Можно погладить льва!.jpg', name: 'Абрамова Анна, 9 лет' },
	{ src: 'drawing/img/БарабашСофияАнтоновна_8лет_ ИЛы - темно-зеленые стрелы взмыли в небо.jpg', name: 'Барабаш София, 8 лет' },
	{ src: 'drawing/img/ГоловнякАлисаГеоргиевна_9лет_Очень странные птицы.jpg', name: 'Головняк Алиса, 9 лет' },
	{ src: 'drawing/img/ИвановаПолинаАлександровна_10лет_Кладбище-лучшее место для выведения бородавок.jpg', name: 'Иванова Полина, 10 лет' },
	{ src: 'drawing/img/ИвановСтасАлександрович_8лет_В бою дорога каждая секунда.jpg', name: 'Иванов Стас, 8 лет' },
	{ src: 'drawing/img/КнязькинаСофияДмитриевна_7лет_Летающий танк.jpg', name: 'Князькина София, 7 лет' },
	{ src: 'drawing/img/Костомаров Матвей 6 лет _Фомин Арсений  6 лет _Фенко Дмитрий 6 лет _Штурмовики.jpg', name: 'Костомаров Матвей, 6 лет, Фомин Арсений, 6 лет, Фенко Дмитрий, 6 лет' },
	{ src: 'drawing/img/ЛесинаЕсенияЕвгеньевна_8лет_На военных аэродромах.jpg', name: 'Лесина Есения, 8 лет' },
	{ src: 'drawing/img/МурскийАлександрСергеевич_7лет_ИЛы в небе.jpg', name: 'Мурский Александр, 7 лет' },
	{ src: 'drawing/img/МурысовАлексейАндреевич_10лет_Шкаф-машина путешествий.jpg', name: 'Мурысов Алексей, 10 лет' },
	{ src: 'drawing/img/РайненМаксимАртёмович_8лет_Карта.jpg', name: 'Райнен Максим, 8 лет' },
	{ src: 'drawing/img/СаркисовМихаилРантикович_9лет_Обед льва.jpg', name: 'Саркисов Михаил, 9 лет' },
	{ src: 'drawing/img/СилковМатвейАлександрович_7лет_Осмотр своего друга.jpg', name: 'Силков Матвей, 7 лет' },
	{ src: 'drawing/img/СмирноваАнастасияКонстантиновна_11лет_Путешествие в Африку.jpg', name: 'Смирнова Анастасия, 11 лет' },
	{ src: 'drawing/img/СмолевСавелийНиколаевич_8лет_На посадку.jpg', name: 'Смолев Савелий, 8 лет' },
	{ src: 'drawing/img/ФиллиповИльяМаксимович_7лет_Ну милый пошли!.jpg', name: 'Филлипов Илья, 7 лет' },
	{ src: 'drawing/img/ХрамовЕлисейВадимович_10лет_Не теряй время у телевизора.jpg', name: 'Храмов Елисей, 10 лет' },
	{ src: 'drawing/img/ШушинИгорьМихайлович_10лет_В Африке тигры не водятся.jpg', name: 'Шушин Игорь, 10 лет' },
	{ src: 'drawing/img/ЭсолайненМихаилИгоревич_7лет_Темная змея -ИЛам непочем.jpg', name: 'Эсолайнен Михаил, 7 лет' },
	{ src: 'drawing/img/ДзюбаСофияСергеевна_9лет_Индейцы все делают молча.jpg', name: 'Дзюба София, 9 лет' },
]
</script>

<style scoped>
.wrapper{
	padding: 0 20px;
}
.section {
	max-width: 1200px;
	margin: 20px auto;
}

.container-image {
	margin: 0 auto;
	gap: 30px;
	max-width: 1500px;
}

.image-grid {
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
	justify-content: center;
}

.image-item {
	max-width: 450px;
	align-items: center;
	flex-direction: column;
	display: flex;
}

img {
	width: 100%;
}

.image-text {
	margin-top: 8px;
	text-align: center;
	font-size: 0.9em;
}

.container-image img {
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.winners-section {
	max-width: 800px;
	margin: 40px auto;
	padding: 20px;
}

h2 {
	text-align: center;
	margin-bottom: 30px;
	font-size: 2em;
	color: #000000;
}

.age-group {
	margin-bottom: 30px;
}

h3 {
	font-size: 1.5em;
	color: rgb(118, 157, 187);
}

ul {
	list-style: none;
	padding: 0;
}

li {
	margin-bottom: 10px;
	font-size: 1.1em;
}

strong {
	color: rgb(141, 164, 182);
}

@media(max-width: 768px) {
	.container_title {
		padding-top: 40px;
	}
}


</style>
