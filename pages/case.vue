<script setup>
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const swiperConfig = {
	modules: [EffectFade, Navigation, Pagination, Autoplay],
	slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	pagination: {
		clickable: true,
	},
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	allowTouchMove: false,
};
</script>

<template>
	<div class="page case">
		<h2>實績案例頁面</h2>
		<div class="w-300 h-260 white">
			<Swiper v-bind="swiperConfig">
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide
					><img
						src="https://images.unsplash.com/photo-1713783508683-8ee05bca0521?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
				/></SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>

<style scoped>
.w-300 {
	width: 300px;
	margin: 0 auto;
}
.h-260 {
	height: 260px;
	overflow: hidden;
}
.white {
	color: #fff;
}
img {
	width: 100%;
	height: 260px;
	object-fit: cover;
}
</style>
