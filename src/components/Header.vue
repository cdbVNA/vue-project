<template>
	<header class="header">
		<div class="top-menu">
			<div class="burger" @click="toggleMenu">
				<div :class="{ line: true, active: isMenuOpen }"></div>
				<div :class="{ line: true, active: isMenuOpen }"></div>
				<div :class="{ line: true, active: isMenuOpen }"></div>
			</div>
		</div>
		<div
			class="full-screen-menu"
			:class="{ open: isMenuOpen }"
			@click.self="closeMenu"
		>
			<div class="menu-content">
				<div class="logo">
					<img src="/src/assets/logo.png" alt="" />
					<hr />
				</div>
				<ul class='content_text'>
					<li>
						<a href="/" @click.native="closeMenu">
							<div>Главная</div>
						</a>
						<hr />
					</li>
					<li>
						<a href="/illustrator" @click.native="closeMenu">
							<div>Иллюстраторы</div>
						</a>
						<hr />
					</li>
					<li>
						<a href="/territory" @click.native="closeMenu">
							<div>Территория Внукова</div>
						</a>
						<hr />
					</li>
					<li>
						<button @click="togglePhoto" class="has-submenu">Биография ↓</button>
						<div>
							<ul v-if="isPhotoOpen" class="submenu">
								<li><a href="/photo/0" @click.native="closeMenu">ЯПОНИЯ: путешествие на Восток</a></li>
								<li><a href="/photo/1" @click.native="closeMenu">НАЛЬЧИК: детство на Кавказе</a></li>
								<li><a href="/photo/2" @click.native="closeMenu">БОЕВОЙ ПУТЬ: от Эльхотово до Мукдена</a></li>
								<li><a href="/photo/3" @click.native="closeMenu">МОЙ ДРУГ ИНДЕЕЦ: история Сат Ока</a></li>
								<li><a href="/photo/4" @click.native="closeMenu">РЕДАКЦИЯ: публикации в журналах и газетах</a></li>
								<li><a href="/photo/5" @click.native="closeMenu">ПУТЕШЕСТВИЕ НА СЕВЕР: геологоразведка
								</a></li>
							</ul>
						</div>
						<hr />
					</li>
					<li to="/page5" @click.native="closeMenu">
						setest
						<hr />
					</li>
					<li>
						<button @click="toggleBooks" class="has-submenu">Книги ↓</button>
						<ul v-if="isBooksOpen" class="submenu">
							<li><a href="/book/1" @click.native="closeMenu">Книга 1</a></li>
							<li><a href="/book/2" @click.native="closeMenu">Книга 2</a></li>
							<!-- добавьте сюда другие страницы по id -->
						</ul>
						<hr />
					</li>
					<li></li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			isMenuOpen: false,
			isPhotoOpen: false,
			isBooksOpen: false,
		}
	},
	methods: {
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen
		},
		closeMenu() {
			this.isMenuOpen = false
			this.isPhotoOpen = false
			this.isBooksOpen = false
		},
		toggleBio() {
			this.isPhotoOpen = !this.isPhotoOpen
		},
		toggleBooks() {
			this.isBooksOpen = !this.isBooksOpen
		},
	},
}
</script>

<style scoped>
.header {
	position: fixed;
	width: 100%;
	height: 70px;
	background-color: rgb(141, 164, 182, 0.8);
	position: fixed;
	margin: 0 auto;
	z-index: 999;
	transition: background-color 0.3s;
}
header::after {
	content: '';
	position: absolute;
	bottom: -40px;
	transform: rotate(180deg);
	width: 100%;
	height: 40px;
	background-color: rgb(141, 164, 182, 0.8);
	clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.top-menu {
	padding: 20px 30px;
	display: flex;
	justify-content: space-between;
	flex-direction: row-reverse;
}
.burger {
	width: 30px;
	height: 25px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
	z-index: 999;
}
.line {
	height: 3px;
	background-color: #000;
	transition: 0.3s;
}
.line.active:nth-child(1) {
	transform: rotate(45deg) translate(5px, 5px);
}
.line.active:nth-child(2) {
	opacity: 0;
}
.line.active:nth-child(3) {
	transform: rotate(-45deg) translate(10px, -10px);
}

.full-screen-menu {
	position: fixed;
	top: 0;
	overflow: auto;
	left: 0;
	width: 100%;
	height: 0;
	background-color: rgb(141, 164, 182);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	transition: height 0.4s ease, padding 0.5s ease;
	z-index: 997;
	align-items: flex-start;
	padding: 0;
}
.full-screen-menu::-webkit-scrollbar {
	width: 0px;
}

.full-screen-menu.open {
	height: 100vh;
	padding: 50px 20px;
}

.menu-content {
	display: flex;
	flex-direction: column;
	margin-top: auto;
	opacity: 0;
	transition: opacity 0.9s ease, transform 0.9s ease;
}
.logo {
	margin: 0;
}
.logo img {
	max-height: 100%;
	width: auto;
}
.content_text {
	padding-top: 40px;
	display: flex;
	gap: 40px;
	flex-direction: column;
}
.full-screen-menu.open .menu-content {
	opacity: 1;
	transform: translateY(0);
}

/* Ссылки меню */
li {
	color: #000;
	text-decoration: none;
	text-transform: uppercase;
	font-weight: 500;
	font-size: 5em;
	padding: 8px 12px;
	transition: background 0.5s;
}
li a {
	text-decoration: none;
	color: #000;
}

.has-submenu {
	cursor: pointer;
	position: relative;
	font-weight: 500;
	text-transform: uppercase;
	border: none;
	background-color: rgb(141, 164, 182, 0.8);
	font-size: 1em;
	font-family: 'Vollkorn', serif;
}

.has-submenu > .submenu {
	margin-left: 20px;
	display: flex;
	gap: 10px;
	flex-direction: column;
	font-size: 0.5em;
	transition: line-height 0.5s, color 0.9s;
}

.submenu li {
	font-size: 0.5em;
	padding: 8px 12px;
	list-style: none;
	border-radius: 4px;
	transition: background 0.3s;
}
hr {
	margin: 0;
	width: 100%;
}
</style>
