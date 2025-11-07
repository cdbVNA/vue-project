<template>
  <a v-if="showButton" href="#top" class="scroll-top" @click.prevent="scrollToTop">
    <img src="https://img.icons8.com/?size=100&id=70IXP2au0nm2&format=png&color=000000" alt="Наверх" />
  </a>
</template>

<script>
export default {
  data() {
    return {
      showButton: false, 
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    handleScroll() {
      this.showButton = window.scrollY > 1000; 
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
}
.scroll-top img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
