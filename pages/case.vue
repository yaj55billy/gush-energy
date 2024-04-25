<script setup>
import { useAssetHandle } from "@/composables/useAssetHandle.js";
import { useCaseStore } from "@/stores/useCase.js";
const { useAsset } = useAssetHandle();
const caseStore = useCaseStore();

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
		delay: 6000,
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
		<PageKv
			title="實績案例"
			text="湧業為您提供專業的光電整合服務，伴您與綠能未來同行"
			picPath="case_kv.jpg"
		/>
		<div>
			<section
				v-for="caseItem in caseStore.caseData"
				:key="caseItem.sectionId"
				:id="caseItem.sectionId"
				class="case__section"
			>
				<div class="case__container">
					<div class="case__main">
						<div class="case__textarea">
							<h2 class="page__title">
								{{
									caseItem.buildType ? caseItem.buildType : "屋頂平鋪、棚架型"
								}}
							</h2>
							<div class="case__info">
								<img
									class="case__info__icon"
									src="~/assets/img/case_locaion_icon.png"
								/>
								<span class="case__info__city">
									{{ caseItem.city ? caseItem.city : "台灣" }}
								</span>
								<span class="case__info__place">
									{{ caseItem.place ? caseItem.place : "工廠" }}
								</span>
								<span class="case__info__line"></span>
								<span class="case__info__capacity" v-if="caseItem.capacity">
									{{ caseItem.capacity }}
								</span>
							</div>
							<div class="case__details">
								<p class="case__details__content" v-if="caseItem.content1">
									{{ caseItem.content1 }}
								</p>
								<p class="case__details__content" v-if="caseItem.content2">
									{{ caseItem.content2 }}
								</p>
								<p class="case__details__content" v-if="caseItem.content3">
									{{ caseItem.content3 }}
								</p>
							</div>
						</div>
						<div class="case__pic">
							<Swiper
								v-bind="swiperConfig"
								v-if="caseItem.caseImagePath.length !== 0"
							>
								<SwiperSlide
									v-for="(imagePath, index) in caseItem.caseImagePath"
									:key="imagePath + index"
								>
									<div
										class="case__pic__content"
										:style="{
											backgroundImage: `url(${useAsset(imagePath)})`,
										}"
									></div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<style>
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets
	.swiper-pagination-bullet {
	margin: 0 5px;
}
.swiper-pagination-bullet {
	width: 10px;
	height: 10px;
	background: rgba(255, 255, 255, 0.9);
}
.swiper-pagination-bullet-active {
	background: white;
}
</style>
