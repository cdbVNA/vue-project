<template>
	<div class="wrapper">
		<div class="container">
			<div class="container_title">
				<h1>Иллюстраторы</h1>
				<hr />
				<p>
					Однажды, когда я сорвался с крыши, упал на ящики, разодрал кожу на
					щеке от угла рта до самого глаза и выбил два зуба, он (отец) промыл
					мне рану, залепил пластырем и сказал
				</p>
			</div>
		</div>
		<div class="advice">
			<div class="advice_img">
				<img src="/src/assets/illustrators/reypolskiy/autor.png" alt="" />
			</div>
			<div class="advice_text">
				<p>
					Алексей Дмитриевич Рейпольский — художник, мастер книжной иллюстрации,
					член союза художников РФ. Родился 14 января 1945 года в Ленинграде. В
					1956 году поступил в среднюю художественную школу при Ленинградском
					институте живописи, скульптуры и архитектуры им. И. Е. Репина, а в
					1963 году — на графический факультет института. Занимался в мастерской
					книжной графики под руководством профессора М. А. Таранова. Его серия
					линогравюр к роману Ф. М. Достоевского «Игрок» была удостоена высшей
					оценки и попала в коллекцию музея-квартиры Ф. М. Достоевского в
					Санкт-Петербурге.
				</p>
			</div>
		</div>
		<ParallaxRight />
		<div class="advice">
			<div class="advice_text">
				<p>
					Рудольф Моисеевич ЯХНИН — советский художник, график, мастер
					исторической гравюры, член Союза художников СССР. Родился 4 мая 1938
					года в Ленинграде. В 1968 году окончил Институт живописи, скульптуры и
					архитектуры им. И.Е. Репина (мастерскую книжной графики у профессора
					М.А. Таранова). Работал в издательствах Ленинграда, Москвы и других
					городов. Оформил и проиллюстрировал более 50 книг, среди которых
					оказалась книга «Паруса над волнами» Николая Внукова.
				</p>
			</div>
			<div class="advice_img">
				<img src="/src/assets/illustrators/yahnin/autor.png" alt="" />
			</div>
		</div>
		<ParallaxLeft />
	</div>
</template>

<script setup>
import ParallaxRight from '../components/ParallaxRight.vue'
import ParallaxLeft from '../components/ParallaxLeft.vue'
</script>

<style scoped>
.container {
	padding-top: 200px;
	margin: 0 auto;
}
.advice {
	display: flex;
	margin: 0 auto;
	gap: 50px;
	padding: 100px 50px 0 50px;
	max-width: 1300px;
}

.advice_img img {
	max-height: 600px;
}

.advice_text p {
	text-align: justify;
}

p {
	font-size: 1.5em;
}
</style>
