<template>
	<Header />
	<ScrollTop />
	<router-view></router-view>
	<Footer />
</template>

<script>
import Header from '@components/Header.vue'
import Footer from '@components/Footer.vue'
import ScrollTop from '@components/ScrollTop.vue'

export default {
	components: { Header, ScrollTop, Footer },
}
</script>
