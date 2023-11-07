<script setup>
// import xxx from "@/components/xxx"
import { ref, computed, onMounted } from "vue";

const useAsset = (path) => {
	const assetsImg = import.meta.glob("~/assets/img/\*", {
		eager: true,
		import: "default",
	});
	return assetsImg["/assets/img/" + path];
};

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

let timer = null;

// index about
const aboutDataActive = ref(0);
const nowAboutData = computed(() => aboutData.value[aboutDataActive.value]);
const nowAboutTitle = computed(() => nowAboutData.value.title);
const nowAboutDescription = computed(() => nowAboutData.value.description);
const nowAboutLink = computed(() => nowAboutData.value.link);
const nowAboutPath = computed(() => nowAboutData.value.path);

// const setTimer = () => {
// 	clearTimeout(timer);
// 	timer = setTimeout(() => {
// 		console.log("執行");
// 		aboutDataActive.value + 1;
// 	}, 3000);
// };
const aboutData = ref([
	{
		id: "about1",
		title: "湧業能源與企業合作",
		description:
			"湧業能源與電力將會聯手合作，在未來的3年內共同打造5個發電廠，並將整合相關技術以達到2050淨零排碳的目標",
		link: "/about",
		path: "pic1.jpg",
	},
	{
		id: "about2",
		title: "湧業能源與企業合作2",
		description:
			"湧業能源與電力將會聯手合作，在未來的3年內共同打造5個發電廠，並將整合相關技術以達到2050淨零排碳的目標",
		link: "/about",
		path: "testpic.png",
	},
	{
		id: "about3",
		title: "湧業能源與企業合作3",
		description:
			"湧業能源與電力將會聯手合作，在未來的3年內共同打造5個發電廠，並將整合相關技術以達到2050淨零排碳的目標",
		link: "/about",
		path: "pic1.jpg",
	},
	{
		id: "about4",
		title: "湧業能源與企業合作4",
		description:
			"湧業能源與電力將會聯手合作，在未來的3年內共同打造5個發電廠，並將整合相關技術以達到2050淨零排碳的目標",
		link: "/about",
		path: "testpic2.png",
	},
]);
onMounted(() => {
	// if (aboutData.value.length > 1) {
	// 	setTimer();
	// }
});
</script>

<template>
	<div class="index">
		<!-- 主視覺區塊 -->
		<section class="index__kv" style="min-height: 400px">
			<div class="index__kv__content">
				<h1 class="index__kv__title">與湧業能源<br />共創永續家園</h1>
				<p class="index__kv__description">看不見的能源 看得見的改變</p>
				<NuxtLink to="/about" class="index__kv__btn">深入了解</NuxtLink>
			</div>
		</section>
		<!-- <section class="index__kv">
			<Carousel>
				<Slide key="kv1" class="kv1"></Slide>
				<Slide key="kv2" class="kv2"></Slide>
			</Carousel>
			<div class="index__kv__content">
				<h1 class="index__kv__title">與湧業能源<br />共創永續家園</h1>
				<p class="index__kv__description">看不見的能源 看得見的改變</p>
				<NuxtLink to="/about" class="index__kv__btn">深入了解</NuxtLink>
			</div>
		</section> -->
		<!-- <transition-group tag="div" name="fade" class="container" mode="out-in">
				<div
					class="pic"
					v-for="(item, index) in list"
					v-show="index === active"
					:style="getBackground(index)"
					:key="item.id"
				>
					<h2>{{ item.text }}</h2>
				</div>
			</transition-group> -->
		<section class="index__about">
			<div class="index__about__info">
				<div class="index__about__container">
					<h2 class="index__about__title">最新消息</h2>
					<transition name="fade">
						<h3 class="index__about__subtitle" style="">
							{{ nowAboutTitle }}
						</h3>
					</transition>
					<transition name="fade">
						<p class="index__about__text">
							{{ nowAboutDescription }}
						</p>
					</transition>
					<NuxtLink :to="nowAboutLink" class="index__about__link"
						>瞭解更多></NuxtLink
					>
					<ul class="index__about__pagination">
						<li
							class="index__about__pagination__item"
							v-for="(item, index) in aboutData"
							:key="item.id"
							:class="{ active: index === aboutDataActive }"
							@click="aboutDataActive = index"
						></li>
					</ul>
				</div>
			</div>
			<div class="index__about__pic">
				<transition name="fade">
					<div
						class="index__about__image"
						:style="{
							backgroundImage: `url(${useAsset(nowAboutPath)})`,
						}"
					></div>
				</transition>
			</div>
		</section>
		<section class="index__service">
			<div class="index__service__container">
				<h2 class="index__service__title">我們的服務</h2>
				<p class="index__service__text">更多服務請見解決方案單元</p>
				<ul class="index__service__list">
					<li class="index__service__item">
						<div class="index__service__itempic">
							<img src="~/assets/img/index_service_icon1.png" alt="申設流程" />
						</div>
						<h3 class="index__service__itemtitle">申設流程</h3>
						<p class="index__service__itemtext">這裡可以放一點基本簡述說明</p>
					</li>
					<li class="index__service__item">
						<div class="index__service__itempic">
							<img
								src="~/assets/img/index_service_icon2.png"
								alt="光電工程EPC"
							/>
						</div>
						<h3 class="index__service__itemtitle">光電工程EPC</h3>
						<p class="index__service__itemtext">這裡可以放一點基本簡述說明</p>
					</li>
					<li class="index__service__item">
						<div class="index__service__itempic">
							<img src="~/assets/img/index_service_icon3.png" alt="施工維運" />
						</div>
						<h3 class="index__service__itemtitle">施工維運</h3>
						<p class="index__service__itemtext">這裡可以放一點基本簡述說明</p>
					</li>
					<li class="index__service__item">
						<div class="index__service__itempic">
							<img src="~/assets/img/index_service_icon4.png" alt="電廠投資" />
						</div>
						<h3 class="index__service__itemtitle">電廠投資</h3>
						<p class="index__service__itemtext">這裡可以放一點基本簡述說明</p>
					</li>
					<li class="index__service__item">
						<div class="index__service__itempic">
							<img src="~/assets/img/index_service_icon4.png" alt="儲能系統" />
						</div>
						<h3 class="index__service__itemtitle">儲能系統</h3>
						<p class="index__service__itemtext">這裡可以放一點基本簡述說明</p>
					</li>
				</ul>
			</div>
		</section>
		<section class="index__case">
			<div class="index__case__container">
				<ul class="index__case__main">
					<li class="index__case__item">
						<div
							class="index__case__image"
							:style="{
								backgroundImage: `url(${useAsset('index_case_pic1.jpg')})`,
							}"
						>
							<div class="index__case__textarea">
								<h3 class="index__case__title">地面型光電發電系統</h3>
								<p class="index__case__text">
									湧業能源成功完成南部地區的一個MＷ地面型發電系統。該系統項目覆蓋面積達30平方公里，可以為當地居民提供乾淨、穩定的電力供應
								</p>
							</div>
						</div>
					</li>
					<li class="index__case__item">
						<div
							class="index__case__image"
							:style="{
								backgroundImage: `url(${useAsset('index_case_pic2.jpg')})`,
							}"
						>
							<div class="index__case__textarea">
								<h3 class="index__case__title">地面型光電發電系統</h3>
								<p class="index__case__text">
									湧業能源成功完成南部地區的一個MＷ地面型發電系統。該系統項目覆蓋面積達30平方公里，可以為當地居民提供乾淨、穩定的電力供應
								</p>
							</div>
						</div>
					</li>
					<li class="index__case__item">
						<div
							class="index__case__image"
							:style="{
								backgroundImage: `url(${useAsset('index_case_pic3.jpg')})`,
							}"
						>
							<div class="index__case__textarea">
								<h3 class="index__case__title">地面型光電發電系統</h3>
								<p class="index__case__text">
									湧業能源成功完成南部地區的一個MＷ地面型發電系統。該系統項目覆蓋面積達30平方公里，可以為當地居民提供乾淨、穩定的電力供應
								</p>
							</div>
						</div>
					</li>
				</ul>
				<div class="index__case__btn">
					<NuxtLink to="/case" class="btn">更多案例</NuxtLink>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
