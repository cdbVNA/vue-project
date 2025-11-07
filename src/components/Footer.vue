<template>
	<footer class="footer">
		<img src="/src/assets/footer.png" alt="Фон" class="footer-background" />
		<div class="footer-overlay">
			<div class="footer-top">
				<div class="footer-columns">
					<div class="column">
						<ul>
							<li><a href="#biography">Главная</a></li>
							<li><a href="#biography">Биография</a></li>
							<li><a href="#books">Книги</a></li>
							<li><a href="#territory">Территория Внукова</a></li>
						</ul>
					</div>
					<div class="column">
						<ul>
							<li><a href="#biography">песни перьев</a></li>
							<li><a href="#books">иллюстраторы</a></li>
							<li><a href="#territory">разработка занятий</a></li>
						</ul>
					</div>
					<div class="column">
						<ul>
							<li><a href="#biography">Биография</a></li>
							<li><a href="#books">Книги</a></li>
							<li><a href="#territory">Территория Внукова</a></li>
						</ul>
					</div>
				</div>
				<div class="social-icons">
					<a
						href="https://vk.com"
						target="_blank"
						rel="noopener"
						aria-label="VK"
						class="icon"
					>
						<svg viewBox="0 0 24 24" fill="#fff" width="24" height="24">
							<path
								d="M15.07294,2H8.9375C3.33331,2,2,3.33331,2,8.92706V15.0625C2,20.66663,3.32294,22,8.92706,22H15.0625C20.66669,22,22,20.67706,22,15.07288V8.9375C22,3.33331,20.67706,2,15.07294,2Zm3.07287,14.27081H16.6875c-.55206,0-.71875-.44793-1.70831-1.4375-.86463-.83331-1.22919-.9375-1.44794-.9375-.30206,0-.38544.08332-.38544.5v1.3125c0,.35419-.11456.5625-1.04162.5625a5.69214,5.69214,0,0,1-4.44794-2.66668A11.62611,11.62611,0,0,1,5.35419,8.77081c0-.21875.08331-.41668.5-.41668H7.3125c.375,0,.51044.16668.65625.55212.70831,2.08331,1.91669,3.89581,2.40625,3.89581.1875,0,.27081-.08331.27081-.55206V10.10413c-.0625-.97913-.58331-1.0625-.58331-1.41663a.36008.36008,0,0,1,.375-.33337h2.29169c.3125,0,.41662.15625.41662.53125v2.89587c0,.3125.13544.41663.22919.41663.1875,0,.33331-.10413.67706-.44788a11.99877,11.99877,0,0,0,1.79169-2.97919.62818.62818,0,0,1,.63544-.41668H17.9375c.4375,0,.53125.21875.4375.53125A18.20507,18.20507,0,0,1,16.41669,12.25c-.15625.23956-.21875.36456,0,.64581.14581.21875.65625.64582,1,1.05207a6.48553,6.48553,0,0,1,1.22912,1.70837C18.77081,16.0625,18.5625,16.27081,18.14581,16.27081Z"
							/>
						</svg>
					</a>
					<a href="mailto:example@mail.com" class="icon" aria-label="Email">
						<svg viewBox="0 0 24 24" fill="#fff" width="24" height="24">
							<path
								d="M15.07294,2H8.9375C3.33331,2,2,3.33331,2,8.92706V15.0625C2,20.66663,3.32294,22,8.92706,22H15.0625C20.66669,22,22,20.67706,22,15.07288V8.9375C22,3.33331,20.67706,2,15.07294,2Zm3.07287,14.27081H16.6875c-.55206,0-.71875-.44793-1.70831-1.4375-.86463-.83331-1.22919-.9375-1.44794-.9375-.30206,0-.38544.08332-.38544.5v1.3125c0,.35419-.11456.5625-1.04162.5625a5.69214,5.69214,0,0,1-4.44794-2.66668A11.62611,11.62611,0,0,1,5.35419,8.77081c0-.21875.08331-.41668.5-.41668H7.3125c.375,0,.51044.16668.65625.55212.70831,2.08331,1.91669,3.89581,2.40625,3.89581.1875,0,.27081-.08331.27081-.55206V10.10413c-.0625-.97913-.58331-1.0625-.58331-1.41663a.36008.36008,0,0,1,.375-.33337h2.29169c.3125,0,.41662.15625.41662.53125v2.89587c0,.3125.13544.41663.22919.41663.1875,0,.33331-.10413.67706-.44788a11.99877,11.99877,0,0,0,1.79169-2.97919.62818.62818,0,0,1,.63544-.41668H17.9375c.4375,0,.53125.21875.4375.53125A18.20507,18.20507,0,0,1,16.41669,12.25c-.15625.23956-.21875.36456,0,.64581.14581.21875.65625.64582,1,1.05207a6.48553,6.48553,0,0,1,1.22912,1.70837C18.77081,16.0625,18.5625,16.27081,18.14581,16.27081Z"
							/>
						</svg>
					</a>
				</div>
			</div>
			<!-- Нижняя часть с копирайтом -->
			<div class="footer-copy">&copy; {{ currentYear }}</div>
		</div>
	</footer>
</template>

<script>
import { ref } from 'vue'

export default {
	setup() {
		const currentYear = new Date().getFullYear()
		return { currentYear }
	},
}
</script>

<style scoped>
.footer {
	position: relative;
	width: 100%;
	overflow: hidden;
	min-height: 250px;
}
.footer-background {
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 0;
	object-fit: fill;
}
.footer-overlay {
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px;
}
.footer-top {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.footer-columns {
	display: flex;
	gap: 20px;
}
.column {
	width: 70%;
}
.column ul {
	list-style: none;
}
.column a {
	color: #000;
	text-decoration: none;
	font-size: 1em;
	text-transform: uppercase;
}
.column a:hover {
	text-decoration: underline;
}
.social-icons {
	display: flex;
	gap: 15px;
}
.icon svg {
	width: 24px;
	height: 24px;
	fill: #fff;
	transition: fill 0.3s;
}
.icon:hover svg {
	fill: #3498db;
}
.footer-copy {
	text-align: center;
	font-size: 0.9em;
	color: #fff;
	opacity: 0.8;
}
</style>
