<template>
	<div class="rectangle">
		<a class="logo"><img src="/src/assets/logo.png" alt="" /></a>
	</div>
</template>

<script></script>

<style>
.rectangle {
  width: 100%;
  height: 700px;
  background-color: rgb(141, 164, 182);
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;


  transition: all 0.2s ease;
}

/* Треугольник ::after */
.rectangle::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
  width: 100%;
  height: 100px;
  background-color: rgb(141, 164, 182);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transition: all 0.2s ease;
}

.logo{
  margin: 0 auto;
}
.logo img{
 max-width: 600px;
}
</style>
