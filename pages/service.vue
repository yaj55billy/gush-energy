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
									<img
										src="~/assets/img/service_apply_icon1.png"
										alt="現地勘查"
									/>
								</div>
								<span class="service__apply__num">1</span>
								<span class="service__apply__start">START</span>
							</div>
							<h5 class="service__apply__head">現地勘查</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img
										src="~/assets/img/service_apply_icon2.png"
										alt="設計規劃"
									/>
								</div>
								<span class="service__apply__num">2</span>
							</div>
							<h5 class="service__apply__head">設計規劃</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img src="~/assets/img/service_apply_icon3.png" alt="簽約" />
								</div>
								<span class="service__apply__num">3</span>
								<svg
									class="service__apply__arrow"
									xmlns="http://www.w3.org/2000/svg"
									width="33"
									height="22"
									viewBox="0 0 33 22"
									fill="none"
								>
									<path
										d="M33 1.58349e-06L27.2359 0.329821L30.4036 5.15675L33 1.58349e-06ZM1.27433 21.418L2.87433 20.368L2.32567 19.532L0.725672 20.582L1.27433 21.418ZM6.07433 18.268L9.27433 16.168L8.72567 15.332L5.52567 17.432L6.07433 18.268ZM12.4743 14.068L15.6743 11.968L15.1257 11.132L11.9257 13.232L12.4743 14.068ZM18.8743 9.86803L22.0743 7.76803L21.5257 6.93198L18.3257 9.03198L18.8743 9.86803ZM25.2743 5.66802L28.4743 3.56803L27.9257 2.73198L24.7257 4.83198L25.2743 5.66802ZM33 1.58349e-06L21.4719 0.659641L27.8072 10.3135L33 1.58349e-06ZM1.54866 21.836L3.14866 20.786L2.05134 19.114L0.451344 20.164L1.54866 21.836ZM6.34866 18.686L9.54866 16.586L8.45134 14.914L5.25134 17.014L6.34866 18.686ZM12.7487 14.486L15.9487 12.386L14.8513 10.714L11.6513 12.814L12.7487 14.486ZM19.1487 10.286L22.3487 8.18605L21.2513 6.51395L18.0513 8.61395L19.1487 10.286ZM25.5487 6.08605L28.7487 3.98605L27.6513 2.31395L24.4513 4.41395L25.5487 6.08605Z"
										fill="#FB910B"
									/>
								</svg>
								<svg
									class="service__apply__arrow--m"
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="19"
									viewBox="0 0 12 19"
									fill="none"
								>
									<path
										d="M6 -7.7486e-07L3.11325 5L8.88675 5L6 -7.7486e-07ZM6.5 19L6.5 18.05L5.5 18.05L5.5 19L6.5 19ZM6.5 16.15L6.5 14.25L5.5 14.25L5.5 16.15L6.5 16.15ZM6.5 12.35L6.5 10.45L5.5 10.45L5.5 12.35L6.5 12.35ZM6.5 8.55L6.5 6.65L5.5 6.65L5.5 8.55L6.5 8.55ZM6.5 4.75L6.5 2.85L5.5 2.85L5.5 4.75L6.5 4.75ZM6 -7.7486e-07L0.226498 10L11.7735 10L6 -7.7486e-07ZM7 19L7 18.05L5 18.05L5 19L7 19ZM7 16.15L7 14.25L5 14.25L5 16.15L7 16.15ZM7 12.35L7 10.45L5 10.45L5 12.35L7 12.35ZM7 8.55L7 6.65L5 6.65L5 8.55L7 8.55ZM7 4.75L7 2.85L5 2.85L5 4.75L7 4.75Z"
										fill="#FB910B"
									/>
								</svg>
								<div class="service__apply__extend">
									<div class="service__apply__extendbody">
										<div class="service__apply__extendicon">
											<img
												src="~/assets/img/service_apply_icon3.png"
												alt="送件"
											/>
										</div>
									</div>
									<h6 class="service__apply__extendhead">送件</h6>
								</div>
							</div>
							<h5 class="service__apply__head">簽約</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img
										src="~/assets/img/service_apply_icon4.png"
										alt="施工規劃"
									/>
								</div>
								<span class="service__apply__num">4</span>
							</div>
							<h5 class="service__apply__head">施工規劃</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img
										src="~/assets/img/service_apply_icon5.png"
										alt="工程施工"
									/>
								</div>
								<span class="service__apply__num">5</span>
							</div>
							<h5 class="service__apply__head">工程施工</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img
										src="~/assets/img/service_apply_icon6.png"
										alt="併聯掛錶"
									/>
								</div>
								<span class="service__apply__num">6</span>
							</div>
							<h5 class="service__apply__head">併聯掛錶</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img src="~/assets/img/service_apply_icon7.png" alt="O&M" />
								</div>
								<span class="service__apply__num">7</span>
							</div>
							<h5 class="service__apply__head">O&M</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img src="~/assets/img/service_apply_icon8.png" alt="驗收" />
								</div>
								<span class="service__apply__num">8</span>
							</div>
							<h5 class="service__apply__head">驗收</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img
										src="~/assets/img/service_apply_icon9.png"
										alt="保固維運"
									/>
								</div>
								<span class="service__apply__num">9</span>
								<span class="service__apply__end">END</span>
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
