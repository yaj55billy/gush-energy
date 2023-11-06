<script setup>
// import xxx from "@/components/xxx"
import "vue3-carousel/dist/carousel.css";
import { ref, onMounted } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

const kvImgData = ref([
	{
		id: "kv1",
		url: "../assets/img/kv.jpg",
	},
	{
		id: "kv2",
		url: "../assets/img/kv.jpg",
	},
]);
</script>

<template>
	<div class="index">
		<!-- 主視覺區塊 -->
		<!-- <section class="index__kv">
			<div class="index__kv__content">
				<h1 class="index__kv__title">與湧業能源<br />共創永續家園</h1>
				<p class="index__kv__description">看不見的能源 看得見的改變</p>
				<NuxtLink to="/about" class="index__kv__btn">深入了解</NuxtLink>
			</div>
		</section> -->
		<section class="index__kv">
			<Carousel>
				<Slide key="kv1" class="kv1"></Slide>
				<Slide key="kv2" class="kv2"></Slide>
			</Carousel>
			<div class="index__kv__content">
				<h1 class="index__kv__title">與湧業能源<br />共創永續家園</h1>
				<p class="index__kv__description">看不見的能源 看得見的改變</p>
				<NuxtLink to="/about" class="index__kv__btn">深入了解</NuxtLink>
			</div>
		</section>
	</div>
</template>

<style scoped></style>
