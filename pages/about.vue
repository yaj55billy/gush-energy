<script setup>
const featuresActive = ref(1);
const changeFeaturesActive = (num) => {
	featuresActive.value = num;
};

const featuresContent = ref(null);
const featuresMarkFontSize = ref(0);

const calculatedFontSize = () => {
	featuresMarkFontSize.value =
		featuresContent?.value?.clientHeight * 1.4 + "px";
};

onMounted(() => {
	calculatedFontSize();
	window.addEventListener("resize", calculatedFontSize);
});
onUnmounted(() => {
	window.removeEventListener("resize", calculatedFontSize);
});
</script>

<template>
	<div class="page about">
		<PageKv
			title="關於我們"
			text="還有更多問題嗎？可以看看我們的Q&A問答集"
			picPath="qa_kv.jpg"
		/>
		<section class="about__vision">
			<div class="about__vision__container">
				<h2 class="about__vision__title page__title">湧業願景</h2>
				<p class="about__vision__text">
					「湧業能源」成立於2020年，主力太陽能系統建置與投資開發之相關領域。致力於以太陽能光電協助企業邁向永續能源轉型，為台灣2050年淨零排碳目標盡一份心力。我們為業主提供可靠、永續的全方位光電解決方案，公司經營項目包含：光電工程EPC、電廠維運管理、電廠投資以及儲能系統規劃建置。為台灣打造乾淨永續的綠能未來。
				</p>
				<!-- <div class="about__vision__pic">
					<img src="~/assets/img/about_vision_pic.jpg" alt="湧業願景" />
				</div> -->
			</div>
		</section>
		<section class="about__features">
			<div class="about__features__container">
				<div class="about__features__content" ref="featuresContent">
					<Transition name="fade">
						<span
							class="about__features__mark"
							:key="featuresActive"
							:style="{ fontSize: featuresMarkFontSize }"
							>{{ featuresActive }}</span
						>
					</Transition>
					<div class="about__features__head">
						<ul class="about__features__headlist">
							<li
								class="about__features__headitem"
								:class="{ active: featuresActive === 1 }"
								@click="changeFeaturesActive(1)"
								@mouseenter="changeFeaturesActive(1)"
							>
								<div class="about__features__headcontent">
									<span class="about__features__headnum">1</span>
									<span class="about__features__headtitle">經驗豐富</span>
								</div>
							</li>
							<li
								class="about__features__headitem"
								:class="{ active: featuresActive === 2 }"
								@click="changeFeaturesActive(2)"
								@mouseenter="changeFeaturesActive(2)"
							>
								<div class="about__features__headcontent">
									<span class="about__features__headnum">2</span>
									<span class="about__features__headtitle">資源整合</span>
								</div>
							</li>
							<li
								class="about__features__headitem"
								:class="{ active: featuresActive === 3 }"
								@click="changeFeaturesActive(3)"
								@mouseenter="changeFeaturesActive(3)"
							>
								<div class="about__features__headcontent">
									<span class="about__features__headnum">3</span>
									<span class="about__features__headtitle">深耕地方</span>
								</div>
							</li>
							<li
								class="about__features__headitem"
								:class="{ active: featuresActive === 4 }"
								@click="changeFeaturesActive(4)"
								@mouseenter="changeFeaturesActive(4)"
							>
								<div class="about__features__headcontent">
									<span class="about__features__headnum">4</span>
									<span class="about__features__headtitle">專業採購</span>
								</div>
							</li>
						</ul>
					</div>

					<div class="about__features__body">
						<div
							class="about__features__bodycontent"
							v-show="featuresActive === 1"
						>
							<h2 class="page__title about__features__bodytitle">經驗豐富</h2>
							<p class="about__features__bodytext">
								公司主要幹部皆從民國99年投入太陽能系統建置產業，除了有施工經驗，所有專業人員皆具備5~10年的產業經驗。
							</p>
						</div>
						<div
							class="about__features__bodycontent"
							v-show="featuresActive === 2"
						>
							<h2 class="page__title about__features__bodytitle">資源整合</h2>
							<p class="about__features__bodytext">
								熟捻再生能源相關規範，評估投資方案時能提供最完善的建議。
							</p>
						</div>
						<div
							class="about__features__bodycontent"
							v-show="featuresActive === 3"
						>
							<h2 class="page__title about__features__bodytitle">深耕地方</h2>
							<p class="about__features__bodytext">
								於雲林、台南皆成立辦事處，方便快速反應並處理系統異常。深耕地方，加強地方關係，使施工及申請更快速。
							</p>
						</div>
						<div
							class="about__features__bodycontent"
							v-show="featuresActive === 4"
						>
							<h2 class="page__title about__features__bodytitle">專業採購</h2>
							<p class="about__features__bodytext">
								與多家設備材料供應商長期配合，依據客戶需求提供國內外設備，並通過嚴格的材料審查機制，確保客戶權益。
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="about__cooperate">
			<div class="about__cooperate__container">
				<h2 class="about__cooperate__title page__title">合作夥伴</h2>
				<ul class="about__cooperate__list">
					<li class="about__cooperate__item">
						<img src="~/assets/img/cooperate_logo_1.png" alt="元晶太陽能" />
					</li>
					<li class="about__cooperate__item">
						<img src="~/assets/img/cooperate_logo_2.png" alt="安集科技" />
					</li>
					<li class="about__cooperate__item">
						<img src="~/assets/img/cooperate_logo_3.png" alt="solarvest" />
					</li>
					<li class="about__cooperate__item">
						<img src="~/assets/img/cooperate_logo_4.png" alt="solaredge" />
					</li>
					<li class="about__cooperate__item">
						<img src="~/assets/img/cooperate_logo_5.png" alt="台達" />
					</li>
					<li class="about__cooperate__item">
						<img src="~/assets/img/cooperate_logo_6.png" alt="璟元光電" />
					</li>
					<li class="about__cooperate__item">
						<img src="~/assets/img/cooperate_logo_7.png" alt="ure" />
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<style lang="sass" scoped>
.fade-enter-active,.fade-leave-active
	transition: opacity .4s ease-in-out
.fade-enter-from,.fade-leave-to
	opacity: 0
</style>
