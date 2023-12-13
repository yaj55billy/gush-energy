<script setup>
import { useAssetHandle } from "@/composables/useAssetHandle.js";

const { useAsset } = useAssetHandle();

// const serviceApplyList = ref(null);
// const serviceApplyItem = ref(null);
// const serviceApplyLineWidth = ref(0);
// const serviceApplyLineHeight = ref(0);

// const cal = () => {
// 	// temp
// 	serviceApplyLineWidth.value =
// 		serviceApplyList.value?.clientWidth -
// 		serviceApplyItem.value?.clientWidth +
// 		"px";

// 	serviceApplyLineHeight.value =
// 		serviceApplyList.value?.clientHeight -
// 		serviceApplyItem.value?.clientHeight +
// 		"px";
// };

onMounted(() => {
	// cal();
	// window.addEventListener("resize", cal);
});
onUnmounted(() => {
	// window.removeEventListener("resize", cal);
});
</script>

<template>
	<div class="page service">
		<PageKv
			title="服務項目"
			text="湧業為您提供專業的光電整合服務，伴您與綠能未來同行"
			picPath="qa_kv.jpg"
		/>
		<section class="service__info">
			<div class="service__info__container"></div>
		</section>
		<section class="service__epc">
			<div class="service__epc__container">
				<div class="service__epc__info">
					<h2 class="page__title service__epc__title">光電工程EPC</h2>
					<p class="service__epc__text">
						湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。湧業從設計規劃、送件、設備採購到工程管理都累積多年經驗，以品質為先，建置安全可靠的系統，保障客戶的權益。
					</p>
				</div>
			</div>
		</section>

		<section class="service__apply">
			<div class="service__apply__container">
				<h2 class="page__title">申請流程</h2>
				<div class="service__apply__content">
					<!-- :style="{
							width: serviceApplyLineWidth,
							height: serviceApplyLineHeight,
						}" -->
					<svg
						class="service__apply__line"
						ref="serviceApplyLine"
						xmlns="http://www.w3.org/2000/svg"
						width="405"
						height="401"
						viewBox="0 0 405 401"
						fill="none"
					>
						<path
							d="M1 0.5H392C398.627 0.5 404 5.87258 404 12.5V98.5C404 105.127 398.627 110.5 392 110.5H13C6.37259 110.5 1 115.873 1 122.5V190C1 196.627 6.37258 202 13 202H392C398.627 202 404 207.373 404 214V292.5C404 299.127 398.627 304.5 392 304.5H13C6.37259 304.5 1 309.873 1 316.5V388C1 394.627 6.37258 400 13 400H404"
							stroke="white"
							stroke-opacity="0.35"
							stroke-dasharray="4 4"
						/>
					</svg>
					<ul class="service__apply__list" ref="serviceApplyList">
						<li class="service__apply__item" ref="serviceApplyItem">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img src="~/assets/img/service_apply_icon1.png" alt="" />
								</div>
								<span class="service__apply__num">1</span>
							</div>
							<h5 class="service__apply__head">現地勘查</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img src="~/assets/img/service_apply_icon2.png" alt="" />
								</div>
								<span class="service__apply__num">2</span>
							</div>
							<h5 class="service__apply__head">設計規劃</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img src="~/assets/img/service_apply_icon3.png" alt="" />
								</div>
								<span class="service__apply__num">3</span>
							</div>
							<h5 class="service__apply__head">簽約</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img src="~/assets/img/service_apply_icon4.png" alt="" />
								</div>
								<span class="service__apply__num">4</span>
							</div>
							<h5 class="service__apply__head">施工規劃</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img src="~/assets/img/service_apply_icon5.png" alt="" />
								</div>
								<span class="service__apply__num">5</span>
							</div>
							<h5 class="service__apply__head">工程施工</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img src="~/assets/img/service_apply_icon6.png" alt="" />
								</div>
								<span class="service__apply__num">6</span>
							</div>
							<h5 class="service__apply__head">併聯掛錶</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img src="~/assets/img/service_apply_icon7.png" alt="" />
								</div>
								<span class="service__apply__num">7</span>
							</div>
							<h5 class="service__apply__head">O&M</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img src="~/assets/img/service_apply_icon8.png" alt="" />
								</div>
								<span class="service__apply__num">8</span>
							</div>
							<h5 class="service__apply__head">驗收</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img src="~/assets/img/service_apply_icon9.png" alt="" />
								</div>
								<span class="service__apply__num">9</span>
							</div>
							<h5 class="service__apply__head">保固維運</h5>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section class="service__work">
			<div class="service__work__container">
				<div class="service__work__content">
					<div class="service__work__contentinfo">
						<h2 class="page__title service__work__title">施工維運</h2>
						<p class="service__work__text">
							選用一級廠設備及材料，支架設計經結構技師出具結構計算書及簽證，確保安全性。透過優化器精準監測每片模組發電狀況。監控系統提供即時數據分析，自動彙整各式報告，專職維運人員監看案場，即時發現問題，解決問題。
						</p>
					</div>
					<div class="service__work__contentpic">
						<img src="~/assets/img/service_work_pic.jpg" />
					</div>
				</div>
				<div class="service__work__videoframe">
					<video class="service__work__video" controls>
						<source src="video/service.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</section>
	</div>
</template>

<style></style>
