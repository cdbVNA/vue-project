<template>
	<div class="wrapper">
		<div class="container">
			<div class="container_title">
				<h1>Журналы и Газеты</h1>
				<hr /> 
				<p>Николай Внуков входил в редакционную коллегию детского журнала «Костёр», печатался в газетах «Смена»,
					«Ленинские искры», журнале «Аврора», «Искорка», «Юный следопыт». В этом разделе вы найдёте архив
					публикаций писателя: рассказы, очерки, повести и много интересных заметок.</p>
			</div>
		</div>
		<div class="fire">
			<div class="fire-container">
				<div class="fire-item">
					<div class="item-pdf">
						<VPdfViewer src="journal/assets/fire1958.pdf" />
					</div>
					<h2>Костер №05, 1968</h2>
				</div>
				<div class="fire-item">
					<div class="item-pdf">
						<VPdfViewer src="journal/assets/fire1968.pdf" />
					</div>
					<h2>Костер №06, 1968</h2>
				</div>
				<div class="fire-item">
					<div class="item-pdf">
						<VPdfViewer src="journal/assets/fire.pdf" />
					</div>
					<h2>Костер №10, 1968</h2>
				</div>
				<div class="fire-item">
					<div class="item-pdf">
						<VPdfViewer src="journal/assets/fire1974.pdf" />
					</div>
					<h2>Костер №11, 1974</h2>
				</div>
				<div class="fire-item">
					<div class="item-pdf">
						<VPdfViewer src="journal/assets/fire19961.pdf" />
					</div>
					<h2>Костер №10, 1996</h2>
				</div>
				<div class="fire-item">
					<div class="item-pdf">
						<VPdfViewer src="journal/assets/fire19964.pdf" />
					</div>
					<h2>Костер №10, 1968</h2>
				</div>
				<div class="fire-item">
					<div class="item-pdf">
						<VPdfViewer src="journal/assets/fire1996.pdf" />
					</div>
					<h2>Костер №10, 1968</h2>
				</div>
				<div class="fire-item">
					<div class="item-pdf">
						<VPdfViewer src="journal/assets/fire2001.pdf" />
					</div>
					<h2>Костер №10, 1968</h2>
				</div> 
				<div class="fire-item">
					<div class="item-pdf">
						<VPdfViewer src="journal/assets/fire2004.pdf" />
					</div>
					<h2>Костер №10, 1968</h2>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { VPdfViewer } from '@vue-pdf-viewer/viewer'
</script>

<style scoped>
.wrapper {
	padding: 0 10px;
}

:deep(.vpv-variables) {
	--vpv-container-width-sm: 600px;
}

:deep(.vpv-variables) {
	--vpv-container-border-color: lightblue;
	--vpv-toolbar-background-color: mintcream;
	--vpv-toolbar-color: black;
	--vpv-toolbar-border-color: lightblue;
	--vpv-icon-active-background: grey;
	--vpv-sidebar-content-background-color: mintcream;
	--vpv-sidebar-content_thumbnail-page-number-font-size: 10px;
	--vpv-sidebar-content_thumbnail-focused-border-color: darkslategrey;
	--vpv-pages-container-background: mintcream;
}

/* Чтобы переопределить переменные в темном режиме */
:deep(.vpv-variables.vpv-variables__dark) {
	--vpv-container-border-color: blue;
	--vpv-toolbar-background-color: darkgrey;
	--vpv-toolbar-color: white;
	--vpv-toolbar-border-color: blue;
	--vpv-icon-active-background: grey;
	--vpv-sidebar-content-background-color: darkgrey;
	--vpv-sidebar-content_thumbnail-focused-border-color: white;
	--vpv-pages-container-background: darkgrey;
}

.fire {
	margin: 0 auto;
	width: 70%;
	margin-bottom: 150px;
}

.fire-container {
	display: flex;
	flex-wrap: wrap;
	gap: 50px;
}

.fire-item {
	display: flex;
	margin: 0 auto;
	max-width: 400px;
	flex-direction: column;
	align-items: center;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.item-pdf {
	width: 350px;
	height: 400px;
	margin: 0 auto;
}

h2 {
	margin: 10px;
}

@media screen and (max-width: 482px) {
	.fire {
		width: 50%;
		margin: auto;
	}

	.fire-container {
		gap: 30px;
	}

	.fire-item {
		display: flex;
		margin: 0 auto;
		max-width: 250px;
		flex-direction: column;
		align-items: center;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	}

	.item-pdf {
		width: 200px;
		height: 250px;
	}

	h2 {
		font-size: 1em;
	}

	.container_title {
		padding-top: 30px;
	}
}
</style>
