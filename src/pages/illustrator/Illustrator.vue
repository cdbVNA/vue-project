<template>
	<div class="wrapper">
		<div class="container">
			<div class="container_title">
				<h1>Иллюстраторы</h1>
				<hr />
				<p>Ни одна детская книга не обходится без красочных изображений. В этом разделе вы познакомитесь с
					художниками, которые нарисовали иллюстрации к книгам Николая Внукова</p>
			</div>
		</div>
		<div class="advice">
			<div class="advice_img">
				<img src="/src/pages/illustrator/assets/reypolskiy/autor.png" alt="" />
			</div>
			<div class="advice_text">
				<p>Алексей Дмитриевич Рейпольский — художник, мастер книжной иллюстрации, член союза художников РФ.
					Родился 14 января 1945 года в Ленинграде. В 1956 году поступил в среднюю художественную школу при
					Ленинградском институте живописи, скульптуры и архитектуры им. И. Е. Репина, а в 1963 году — на
					графический факультет института.</p>
				<p>Занимался в мастерской книжной графики под руководством профессора М. А. Таранова. Его серия
					линогравюр к роману Ф. М. Достоевского «Игрок» была удостоена высшей оценки и попала в коллекцию
					музея-квартиры Ф. М. Достоевского в Санкт-Петербурге.</p>
			</div>
		</div>
		<Parallax :images="images1" :rotation="6" width="100%" :initialOffset="0" />

		<div class="advice">
			<div class="advice_text">
				<p>Яхнин Рудольф Моисеевич — советский художник, график, мастер исторической гравюры, член Союза
					художников СССР. Родился 4 мая 1938 года в Ленинграде. В 1968 году окончил Институт живописи,
					скульптуры и архитектуры им. И.Е. Репина (мастерскую книжной графики у профессора М.А. Таранова).
				</p>
				<p>Работал в издательствах Ленинграда, Москвы и других городов. Оформил и проиллюстрировал более 50
					книг, среди которых оказалась книга «Паруса над волнами» Николая Внукова.</p>
			</div>
			<div class="advice_img">
				<img src="/src/pages/illustrator/assets/yahnin/autor.png" alt="" />
			</div>
		</div>
		<Parallax :images="images2" :rotation="-6" width="100%" :initialOffset="0" />
		<div class="advice">
			<div class="advice_img">
				<img src="/src/pages/illustrator/assets/lyamin/autor.png" alt="" />
			</div>
			<div class="advice_text">
				<p>Лямин Николай Васильевич - художник-график, член союза художников СССР. В 1948 году поступил на
					графический факультет Института живописи, скульптуры и архитектуры им. И.Е. Репина и в 1954 году
					окончил институт по мастерской, у М.А. Таранова.</p>
				<p>Публиковался в Лениздате, Ленинградском газетно-журнальном и книжном издательстве, Художнике РСФСР,
					Государственном издательстве художественной литературы, Детгизе, Детской литературе; рисовал для
					журнала «Костёр».</p>
				<p>Художник был очень востребован и проиллюстрировал огромное количество книг. Среди которых есть
					сборник Н. Внукова «Четыре рассказа о войне».</p>
			</div>
		</div>
		<Parallax :images="images3" :rotation="6" width="100%" :initialOffset="0" />
		<div class="advice">
			<div class="advice_text">
				<p>Кочергин Николай Михайлович. Любовь к искусству привела его в 1908 году в Строгановское
					художественно-промышленное училище. Летом 1918 года он вступил добровольцем в Красную Армию.</p>
				<p>Кочергин создавал советский плакат, внеся в него свой оригинальный вклад. К этому необходимо добавить
					его обширную деятельность для газет и журналов двадцатых-сороковых годов в карикатуре, в оформлении
					периодических изданий «Красная панорама», «Огонек», «Вокруг света» и «Мир приключений». В блокадном
					Ленинграде тяжело больной Кочергин принимал участие в создании «Окон ТАСС».</p>
				<p>Послевоенный период творчества отмечен крупными успехами в иллюстрировании детской книги. Для Николая
					Внукова нарисовал иллюстрации к книге «Старая гильза» 1972 года выпуска.</p>
			</div>
			<div class="advice_img">
				<img src="/src/pages/illustrator/assets/kochegin/autor.png" alt="" />
			</div>
		</div>
		<Parallax :images="images4" :rotation="-6" width="100%" :initialOffset="0" />
		<div class="advice">
			<div class="advice_img">
				<img src="/src/pages/illustrator/assets/selizarov/autor.png" alt="" />
			</div>
			<div class="advice_text">
				<p>Селизаров Леонтий Филиппович – советский художник, иллюстратор. Член Союза художников СССР. График.
					Работы находятся в Картинной галерее города Красноармейска. Наиболее известен как иллюстратор
					детских книг. Среди его работ: «Пингвинёнок Пиня» Л. Семёнова-Спасского, «Повесть об Атлантиде» Ю.
					Томина, «Горячий камень» А. Гайдара, «Пять плюс три» и «Нитка кораллов» А.</p>
				<p>Котовщиковой, «Фотография Архимеда» и «Динамис мобилис» Н. Внукова, «Маленький оборвыш» Дж. Гринвуда,
					«Рассказы о весёлых людях и хорошей погоде» Р. Погодина.</p>
			</div>
		</div>
		<Parallax :images="images5" :rotation="6" width="100%" :initialOffset="0" />
		<div class="advice">
			<div class="advice_text">
				<p>Книга «На чужих крыльях», хранящаяся в нашей библиотеке, была подарена Н. А. Внуковым тёте со словами
					«…на добрую память о Николе, которого Андрюша Пахомов нарисовал здесь». Следовательно, Алексеев А. -
					это псевдоним Андрея Алексеевича Пахомова (1947 – 2015), сына известного художника-иллюстратора А.
					Ф. Пахомова.</p>
				<p>В 1965–1971гг. учился в Институте живописи, скульптуры и архитектуры им. И.Е. Репина на факультете
					графики. С 1965г. – сотрудник редакции журнала «Нева». Заслуженный художник Российской Федерации.
					Являлся членом-корреспондентом Российской академии художеств. Заведовал кафедрой графики.</p>
			</div>
			<div class="advice_img">
				<img src="/src/pages/illustrator/assets/pahomov/autor.png" alt="" />
			</div>
		</div>
		<Parallax :images="images6" :rotation="-6" width="100%" :initialOffset="0" />
		<div class="advice">
			<div class="advice_img">
				<img src="/src/pages/illustrator/assets/shabanov/autor.png" alt="" />
			</div>
			<div class="advice_text">
				<p>Шабанов Юрий Михайлович - график. Член Союза художников СССР. Дипломная работа в Академии художеств —
					оформление и иллюстрации к повести К. Паустовского «Судьба Шарля Лонсевиля». Иллюстрировал
					произведения К. Сенака, В. Арро, В. Астафьева, В. Ляленкова.
				</p>
				<p>Работал в журналах «Нева», «Аврора», «Костёр», «Искорка». К числу лучших работ сам художник относил
					оформленные им сборники рассказов Ф. Писемского, Г. Успенского, «Донские рассказы» М. Шолохова. В
					своем творчестве Шабанов продолжал традиции реалистической школы графики, в иллюстрациях соединял
					технику акварельной живописи и карандашного рисунка.</p>
			</div>
		</div>
		<Parallax :images="images7" :rotation="6" width="100%" :initialOffset="0" />
	</div>
</template>

<script setup>
import Parallax from './components/Parallax.vue'

const images1 = [
	'/src/pages/illustrator/assets/reypolskiy/1.jpg',
	'/src/pages/illustrator/assets/reypolskiy/2.jpg',
	'/src/pages/illustrator/assets/reypolskiy/5.jpg',
	'/src/pages/illustrator/assets/reypolskiy/4.jpg',
	'/src/pages/illustrator/assets/reypolskiy/3.jpg',
	'/src/pages/illustrator/assets/reypolskiy/6.jpg',
	'/src/pages/illustrator/assets/reypolskiy/7.jpg',
]


const images2 = [
	'/src/pages/illustrator/assets/yahnin/7.jpg',
	'/src/pages/illustrator/assets/yahnin/1.jpg',
	'/src/pages/illustrator/assets/yahnin/6.jpg',
	'/src/pages/illustrator/assets/yahnin/2.jpg',
	'/src/pages/illustrator/assets/yahnin/4.jpg',
	'/src/pages/illustrator/assets/yahnin/3.jpg',
]

const images3 = [
	'/src/pages/illustrator/assets/lyamin/1.webp',
	'/src/pages/illustrator/assets/lyamin/1.png',
	'/src/pages/illustrator/assets/lyamin/2.png',
	'/src/pages/illustrator/assets/lyamin/3.png',
	'/src/pages/illustrator/assets/lyamin/4.png',
	'/src/pages/illustrator/assets/lyamin/5.png',
	'/src/pages/illustrator/assets/lyamin/1.png',
]
const images4 = [
	'/src/pages/illustrator/assets/kochegin/1.jpg',
	'/src/pages/illustrator/assets/kochegin/2.jpg',
	'/src/pages/illustrator/assets/kochegin/5.jpg',
	'/src/pages/illustrator/assets/kochegin/4.jpg',
	'/src/pages/illustrator/assets/kochegin/3.jpg',
]

const images5 = [
	'/src/pages/illustrator/assets/selizarov/1.png',
	'/src/pages/illustrator/assets/selizarov/1.jpg',
	'/src/pages/illustrator/assets/selizarov/2.jpg',
	'/src/pages/illustrator/assets/selizarov/3.jpg',
	'/src/pages/illustrator/assets/selizarov/4.jpg',
	'/src/pages/illustrator/assets/selizarov/5.jpg',
	'/src/pages/illustrator/assets/selizarov/6.jpg',
]

const images6 = [
	'/src/pages/illustrator/assets/pahomov/1.jpg',
	'/src/pages/illustrator/assets/pahomov/1.png',
	'/src/pages/illustrator/assets/pahomov/2.png',
	'/src/pages/illustrator/assets/pahomov/5.png',
	'/src/pages/illustrator/assets/pahomov/4.png',
	'/src/pages/illustrator/assets/pahomov/3.png',
]

const images7 = [
	'/src/pages/illustrator/assets/shabanov/0.jpg',
	'/src/pages/illustrator/assets/shabanov/1.jpg',
	'/src/pages/illustrator/assets/shabanov/2.jpg',
	'/src/pages/illustrator/assets/shabanov/5.jpg',
	'/src/pages/illustrator/assets/shabanov/4.jpg',
	'/src/pages/illustrator/assets/shabanov/3.jpg',
]

</script>

<style scoped>
.advice {
	display: flex;
	margin: 50px auto;
	gap: 50px;
	padding: 100px 50px 0 50px;
	max-width: 1300px;
}

.advice_img img {
	max-height: 600px;
}

p {
	margin: 30px auto;
}

@media screen and (max-width: 482px) {
	.advice {
		flex-direction: column;
		margin: 50px auto;
		gap: 20px;
		padding: 0px 50px;
	}

	.advice_img {
		margin: 0 auto;
	}

	.advice_img img {
		max-height: 300px;
	}

	p {
		margin: 10px auto;
	}
}
</style>
