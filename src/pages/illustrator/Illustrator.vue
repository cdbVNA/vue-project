<template>
	<div class="wrapper">
		<div class="container">
			<div class="container_title">
				<h1>Иллюстраторы</h1>
				<hr />
				<p>Ни одна детская книга не обходится без красочных изображений. В этом разделе вы познакомитесь с художниками, которые нарисовали иллюстрации к книгам Николая Внукова</p>
			</div>
		</div>
		<div class="advice">
			<div class="advice_img">
				<img :src="reypolskiy" alt="" />
			</div>
			<div class="advice_text">
				<p>Алексей Дмитриевич Рейпольский — художник, мастер книжной иллюстрации, член союза художников РФ. Родился 14 января 1945 года в Ленинграде. В 1956 году поступил в среднюю художественную школу при Ленинградском институте живописи, скульптуры и архитектуры им. И. Е. Репина, а в 1963 году — на графический факультет института.</p>
				<p>Занимался в мастерской книжной графики под руководством профессора М. А. Таранова. Его серия линогравюр к роману Ф. М. Достоевского «Игрок» была удостоена высшей оценки и попала в коллекцию музея-квартиры Ф. М. Достоевского в Санкт-Петербурге.</p>
			</div>
		</div>
		<Parallax :images="images1" :rotation="6" width="100%" :initialOffset="0" />

		<div class="advice">
			<div class="advice_text">
				<p>Яхнин Рудольф Моисеевич — советский художник, график, мастер исторической гравюры, член Союза художников СССР. Родился 4 мая 1938 года в Ленинграде. В 1968 году окончил Институт живописи, скульптуры и архитектуры им. И.Е. Репина (мастерскую книжной графики у профессора М.А. Таранова).</p>
				<p>Работал в издательствах Ленинграда, Москвы и других городов. Оформил и проиллюстрировал более 50 книг, среди которых оказалась книга «Паруса над волнами» Николая Внукова.</p>
			</div>
			<div class="advice_img">
				<img :src="yahnin" alt="" />
			</div>
		</div>
		<Parallax :images="images2" :rotation="-6" width="100%" :initialOffset="0" />
		<div class="advice">
			<div class="advice_img">
				<img :src="lyamin" alt="" />
			</div>
			<div class="advice_text">
				<p>Лямин Николай Васильевич - художник-график, член союза художников СССР. В 1948 году поступил на графический факультет Института живописи, скульптуры и архитектуры им. И.Е. Репина и в 1954 году окончил институт по мастерской, у М.А. Таранова.</p>
				<p>Публиковался в Лениздате, Ленинградском газетно-журнальном и книжном издательстве, Художнике РСФСР, Государственном издательстве художественной литературы, Детгизе, Детской литературе; рисовал для журнала «Костёр».</p>
				<p>Художник был очень востребован и проиллюстрировал огромное количество книг. Среди которых есть сборник Н. Внукова «Четыре рассказа о войне».</p>
			</div>
		</div>
		<Parallax :images="images3" :rotation="6" width="100%" :initialOffset="0" />
		<div class="advice">
			<div class="advice_text">
				<p>Кочергин Николай Михайлович. Любовь к искусству привела его в 1908 году в Строгановское художественно-промышленное училище. Летом 1918 года он вступил добровольцем в Красную Армию.</p>
				<p>Кочергин создавал советский плакат, внеся в него свой оригинальный вклад. К этому необходимо добавить его обширную деятельность для газет и журналов двадцатых-сороковых годов в карикатуре, в оформлении периодических изданий «Красная панорама», «Огонек», «Вокруг света» и «Мир приключений». В блокадном Ленинграде тяжело больной Кочергин принимал участие в создании «Окон ТАСС».</p>
				<p>Послевоенный период творчества отмечен крупными успехами в иллюстрировании детской книги. Для Николая Внукова нарисовал иллюстрации к книге «Старая гильза» 1972 года выпуска.</p>
			</div>
			<div class="advice_img">
				<img :src="kochegin" alt="" />
			</div>
		</div>
		<Parallax :images="images4" :rotation="-6" width="100%" :initialOffset="0" />
		<div class="advice">
			<div class="advice_img">
				<img :src="selizarov" alt="" />
			</div>
			<div class="advice_text">
				<p>Селизаров Леонтий Филиппович – советский художник, иллюстратор. Член Союза художников СССР. График. Работы находятся в Картинной галерее города Красноармейска. Наиболее известен как иллюстратор детских книг. Среди его работ: «Пингвинёнок Пиня» Л. Семёнова-Спасского, «Повесть об Атлантиде» Ю. Томина, «Горячий камень» А. Гайдара, «Пять плюс три» и «Нитка кораллов» А.</p>
				<p>Котовщиковой, «Фотография Архимеда» и «Динамис мобилис» Н. Внукова, «Маленький оборвыш» Дж. Гринвуда, «Рассказы о весёлых людях и хорошей погоде» Р. Погодина.</p>
			</div>
		</div>
		<Parallax :images="images5" :rotation="6" width="100%" :initialOffset="0" />
		<div class="advice">
			<div class="advice_text">
				<p>Книга «На чужих крыльях», хранящаяся в нашей библиотеке, была подарена Н. А. Внуковым тёте со словами «…на добрую память о Николе, которого Андрюша Пахомов нарисовал здесь». Следовательно, Алексеев А. - это псевдоним Андрея Алексеевича Пахомова (1947 – 2015), сына известного художника-иллюстратора А. Ф. Пахомова.</p>
				<p>В 1965–1971гг. учился в Институте живописи, скульптуры и архитектуры им. И.Е. Репина на факультете графики. С 1965г. – сотрудник редакции журнала «Нева». Заслуженный художник Российской Федерации. Являлся членом-корреспондентом Российской академии художеств. Заведовал кафедрой графики.</p>
			</div>
			<div class="advice_img">
				<img :src="pahomov" alt="" />
			</div>
		</div>
		<Parallax :images="images6" :rotation="-6" width="100%" :initialOffset="0" />
		<div class="advice">
			<div class="advice_img">
				<img :src="shabanov" alt="" />
			</div>
			<div class="advice_text">
				<p>Шабанов Юрий Михайлович - график. Член Союза художников СССР. Дипломная работа в Академии художеств — оформление и иллюстрации к повести К. Паустовского «Судьба Шарля Лонсевиля». Иллюстрировал произведения К. Сенака, В. Арро, В. Астафьева, В. Ляленкова.</p>
				<p>Работал в журналах «Нева», «Аврора», «Костёр», «Искорка». К числу лучших работ сам художник относил оформленные им сборники рассказов Ф. Писемского, Г. Успенского, «Донские рассказы» М. Шолохова. В своем творчестве Шабанов продолжал традиции реалистической школы графики, в иллюстрациях соединял технику акварельной живописи и карандашного рисунка.</p>
			</div>
		</div>
		<Parallax :images="images7" :rotation="6" width="100%" :initialOffset="0" />
	</div>
</template>

<script setup>
import Parallax from './components/Parallax.vue'
import reypolskiy from '@/assets/illustrator/reypolskiy.png'
import yahnin from '@/assets/illustrator/yahnin.png'
import lyamin from '@/assets/illustrator/lyamin.png'
import kochegin from '@/assets/illustrator/kochegin.png'
import selizarov from '@/assets/illustrator/selizarov.png'
import pahomov from '@/assets/illustrator/pahomov.png'
import shabanov from '@/assets/illustrator/shabanov.png'

const images1 = ['https://sun9-48.userapi.com/c11269/u36187777/137190193/y_36a007e7.jpg', 'https://sun9-44.userapi.com/c11269/u36187777/137190193/y_601e5ecb.jpg', 'https://sun9-44.userapi.com/c11269/u36187777/137190193/y_97d50ecf.jpg', 'https://sun9-69.userapi.com/c11269/u36187777/137190193/y_859cfd82.jpg', 'https://sun9-87.userapi.com/c11269/u36187777/137190193/y_77d503b9.jpg', 'https://sun9-42.userapi.com/c11269/u36187777/137190193/y_14b704b1.jpg', 'https://sun9-15.userapi.com/c11269/u36187777/137190193/y_3fc047a1.jpg']

const images2 = ['https://avatars.mds.yandex.net/i?id=d0ef91cfe12756980552b3f4a3ed4009_l-6966967-images-thumbs&n=13', 'https://i.pinimg.com/736x/05/1a/b9/051ab9b5a40f4b39301213932fbfa4a5.jpg', 'https://litmir.club/BookBinary/846086/1692305626/i_022.jpg/0', 'https://станико.рф/thumb/2/SbMeIXqWwoG6BJBxjhhAvA/692r860/d/1_Носовая_фигура.jpg', 'https://станико.рф/thumb/2/gM9UWLosWd9-0QzBv_IssA/r/d/8_КаттиСарк-2.jpg', 'https://станико.рф/thumb/2/XndADgN9V_DoankCaELpXw/580r450/d/3_бой__2.jpg']

const images3 = ['/illustrator/lyamin/1.webp', '/illustrator/lyamin/1.png', '/illustrator/lyamin/2.png', '/illustrator/lyamin/3.png', '/illustrator/lyamin/4.png', '/illustrator/lyamin/5.png', '/illustrator/lyamin/1.png']

const images4 = ['/illustrator/kochegin/1.jpg', '/illustrator/kochegin/2.jpg', '/illustrator/kochegin/5.jpg', '/illustrator/kochegin/4.jpg', '/illustrator/kochegin/3.jpg']

const images5 = ['https://avatars.mds.yandex.net/i?id=65b47fc35ff4ab4b8000ba32ffb826d3_l-5185690-images-thumbs&n=13', 'https://avatars.mds.yandex.net/i?id=0d697a482a392cfc9eae47dc57bf762b_l-5869063-images-thumbs&n=13', 'https://img-fotki.yandex.ru/get/195518/154981744.1e2/0_1387a7_92885e90_XL.jpg', 'https://sun9-54.userapi.com/s/v1/if1/cFCixIWQ4vN2vjXsz6IMAs15dp8cz2MpAT1As2q0GC8NU6BqVffWBGegosAgsgOxmvKs8-dQ.jpg?quality=96&as=32x22,48x32,72x49,108x73,160x108,240x162,360x244,480x325,540x365,640x433,720x487,1080x731,1200x812&from=bu&cs=1200x0']

const images6 = ['https://img-fotki.yandex.ru/get/6301/164062309.20/0_f5ac3_772ac5c_L.jpg', 'https://img-fotki.yandex.ru/get/4700/164062309.20/0_f5ac4_7b0a70db_L.jpg', 'https://img-fotki.yandex.ru/get/5206/164062309.1f/0_f5aaf_f306f9a_L.jpg', 'https://img-fotki.yandex.ru/get/5206/164062309.1f/0_f5ab0_902bcee2_L.jpg', 'https://img-fotki.yandex.ru/get/5206/164062309.1f/0_f5ab1_5522999d_L.jpg', 'https://img-fotki.yandex.ru/get/5206/164062309.20/0_f5ab5_c8efd765_L.jpg', 'https://img-fotki.yandex.ru/get/4702/164062309.20/0_f5aba_8dd2ec51_L.jpg']

const images7 = ['/illustrator/shabanov/0.jpg', '/illustrator/shabanov/1.jpg', '/illustrator/shabanov/2.jpg', '/illustrator/shabanov/5.jpg', '/illustrator/shabanov/4.jpg', '/illustrator/shabanov/3.jpg']
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
