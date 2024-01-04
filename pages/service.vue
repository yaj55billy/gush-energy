<script setup>
import { ref } from "vue";
import { useServiceStore } from "@/stores/useService.js";
const store = useServiceStore();
const serviceEpc = ref(null);

defineExpose({
	serviceEpc,
});
</script>

<template>
	<div class="page service">
		<PageKv
			title="服務項目"
			text="湧業為您提供專業的光電整合服務，"
			textMobileSnap="伴您與綠能未來同行"
			picPath="qa_kv.jpg"
		/>
		<section class="service__info">
			<div class="service__info__container">
				<ServiceMenu :serviceEpc="serviceEpc"></ServiceMenu>
			</div>
		</section>
		<section class="service__epc" ref="serviceEpc">
			<span class="service__epc--top" id="epc"></span>
			<div class="service__epc__container">
				<div class="service__epc__info">
					<h2 class="page__title service__epc__title">
						{{ store.activeService.title }}
					</h2>
					<p class="service__epc__text">
						{{ store.activeService.content }}
					</p>
				</div>
			</div>
		</section>
		<section class="service__apply">
			<div class="service__apply__container">
				<h2 class="page__title service__apply__title">光電案件執行流程</h2>
				<div>
					<img src="~/assets/img/test.png" alt="" />
					<img src="~/assets/img/test2.png" alt="" />
					<img src="~/assets/img/test3.png" alt="" />
					<img src="~/assets/img/test4.png" alt="" />
				</div>
				<div class="service__apply__content">
					<ul class="service__apply__list" ref="serviceApplyList">
						<li class="service__apply__item" ref="serviceApplyItem">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img
										class="service__apply__icon--origin"
										src="~/assets/img/service_apply_icon1.png"
										alt="現地勘查"
									/>
									<img
										class="service__apply__icon--hover"
										src="~/assets/img/service_apply_icon1_hover.png"
										alt="現地勘查"
									/>
								</div>
								<span class="service__apply__num">1</span>
							</div>
							<h5 class="service__apply__head">現地勘查</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img
										class="service__apply__icon--origin"
										src="~/assets/img/service_apply_icon2.png"
										alt="設計規劃"
									/>
									<img
										class="service__apply__icon--hover"
										src="~/assets/img/service_apply_icon2_hover.png"
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
									<img
										class="service__apply__icon--origin"
										src="~/assets/img/service_apply_icon3.png"
										alt="簽約"
									/>
									<img
										class="service__apply__icon--hover"
										src="~/assets/img/service_apply_icon3_hover.png"
										alt="簽約"
									/>
								</div>
								<span class="service__apply__num">3</span>
								<div class="service__apply__extend">
									<div class="service__apply__extendcontent">
										<div class="service__apply__extendicon">
											<img
												src="~/assets/img/service_apply_icon_extend.png"
												alt="送件"
											/>
										</div>
										<h6 class="service__apply__extendhead">送件</h6>
									</div>
								</div>
							</div>
							<h5 class="service__apply__head">簽約</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img
										class="service__apply__icon--origin"
										src="~/assets/img/service_apply_icon4.png"
										alt="施工規劃"
									/>
									<img
										class="service__apply__icon--hover"
										src="~/assets/img/service_apply_icon4_hover.png"
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
										class="service__apply__icon--origin"
										src="~/assets/img/service_apply_icon5.png"
										alt="工程施工"
									/>
									<!-- <img
										class="service__apply__icon--hover"
										src="~/assets/img/service_apply_icon5_hover.png"
										alt="工程施工"
									/> -->
									<img
										class="service__apply__icon--hover"
										src="~/assets/img/test.png"
										alt=""
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
										class="service__apply__icon--origin"
										src="~/assets/img/service_apply_icon6.png"
										alt="併聯掛錶"
									/>
									<img
										class="service__apply__icon--hover"
										src="~/assets/img/service_apply_icon6_hover.png"
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
									<img
										class="service__apply__icon--origin"
										src="~/assets/img/service_apply_icon7.png"
										alt="O&M"
									/>
									<img
										class="service__apply__icon--hover"
										src="~/assets/img/service_apply_icon7_hover.png"
										alt="O&M"
									/>
								</div>
								<span class="service__apply__num">7</span>
							</div>
							<h5 class="service__apply__head">O&M</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img
										class="service__apply__icon--origin"
										src="~/assets/img/service_apply_icon8.png"
										alt="驗收"
									/>
									<img
										class="service__apply__icon--hover"
										src="~/assets/img/service_apply_icon8_hover.png"
										alt="驗收"
									/>
								</div>
								<span class="service__apply__num">8</span>
							</div>
							<h5 class="service__apply__head">驗收</h5>
						</li>
						<li class="service__apply__item">
							<div class="service__apply__body">
								<div class="service__apply__icon">
									<img
										class="service__apply__icon--origin"
										src="~/assets/img/service_apply_icon9.png"
										alt="保固維運"
									/>
									<img
										class="service__apply__icon--hover"
										src="~/assets/img/service_apply_icon9_hover.png"
										alt="保固維運"
									/>
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
						<source src="/video/service.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</section>
	</div>
</template>

<style></style>
