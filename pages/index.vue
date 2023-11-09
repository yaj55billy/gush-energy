<script setup>
// import xxx from "@/components/xxx"
import { ref, computed, onMounted } from "vue";
import { useIndexAbout } from "@/composables/useIndexAbout.js";
import { useIndexKv } from "@/composables/useIndexKv.js";

const useAsset = (path) => {
	const assetsImg = import.meta.glob("~/assets/img/\*", {
		eager: true,
		import: "default",
	});
	return assetsImg["/assets/img/" + path];
};

const {
	kvData,
	kvDataActive,
	nowKvData,
	nowKvPath,
	kvTimer,
	changeKvDataActive,
	kvTimerHandler,
	startKvTimer,
} = useIndexKv();

const {
	aboutData,
	aboutDataActive,
	nowAboutData,
	nowAboutTitle,
	nowAboutDescription,
	nowAboutLink,
	nowAboutPath,
	aboutTimer,
	changeAboutDataActive,
	aboutTimerHandler,
	startAboutTimer,
	stopAboutTimer,
} = useIndexAbout();

onMounted(() => {
	if (aboutData.value.length > 1) {
		startAboutTimer();
	}
	if (kvData.value.length > 1) {
		startKvTimer();
	}
});
onUnmounted(() => {
	clearTimeout(aboutTimer);
	clearTimeout(kvTimer);
});
</script>

<template>
	<div class="index">
		<section class="index__kv">
			<div class="index__kv__pic">
				<Transition name="scale-kv">
					<div
						class="index__kv__image"
						:key="nowKvPath"
						:style="{
							backgroundImage: `url(${useAsset(nowKvPath)})`,
						}"
					></div>
				</Transition>
			</div>

			<div class="index__kv__container">
				<h1 class="index__kv__title">與湧業能源<br />共創永續家園</h1>
				<p class="index__kv__description">看不見的能源 看得見的改變</p>
				<div class="index__kv__btn">
					<NuxtLink to="/about" class="btn">深入了解</NuxtLink>
				</div>
			</div>
		</section>
		<section class="index__about">
			<div class="index__about__info">
				<div class="index__about__container">
					<h2 class="index__about__title">最新消息</h2>
					<!-- <Transition name="fade">
						<h3 class="index__about__subtitle" :key="nowAboutTitle">
							<span>{{ nowAboutTitle }}</span>
						</h3>
					</Transition> -->
					<h3
						class="index__about__subtitle"
						@mouseover="stopAboutTimer"
						@mouseleave="startAboutTimer"
					>
						{{ nowAboutTitle }}
					</h3>
					<p
						class="index__about__text"
						@mouseover="stopAboutTimer"
						@mouseleave="startAboutTimer"
					>
						{{ nowAboutDescription }}
					</p>
					<NuxtLink :to="nowAboutLink" class="index__about__link"
						>瞭解更多
						<img
							src="~/assets/img/index_about_arrow.png"
							class="index__about__icon"
						/>
					</NuxtLink>
					<ul class="index__about__pagination">
						<li
							class="index__about__pagination__item"
							v-for="(item, index) in aboutData"
							:key="item.id"
							:class="{ active: index === aboutDataActive }"
							@click="changeAboutDataActive(index)"
						></li>
					</ul>
				</div>
			</div>
			<div class="index__about__pic">
				<Transition name="fade-about">
					<div
						class="index__about__image"
						:key="nowAboutPath"
						:style="{
							backgroundImage: `url(${useAsset(nowAboutPath)})`,
						}"
					></div>
				</Transition>
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
						<div class="index__service__itemtextarea">
							<h3 class="index__service__itemtitle">申設流程</h3>
							<p class="index__service__itemtext">這裡可以放一點基本簡述說明</p>
						</div>
						<NuxtLink to="/service" class="index__service__itemlink"></NuxtLink>
					</li>
					<li class="index__service__item">
						<div class="index__service__itempic">
							<img
								src="~/assets/img/index_service_icon2.png"
								alt="光電工程EPC"
							/>
						</div>
						<div class="index__service__itemtextarea">
							<h3 class="index__service__itemtitle">光電工程EPC</h3>
							<p class="index__service__itemtext">這裡可以放一點基本簡述說明</p>
						</div>
						<NuxtLink to="/service" class="index__service__itemlink"></NuxtLink>
					</li>
					<li class="index__service__item">
						<div class="index__service__itempic">
							<img src="~/assets/img/index_service_icon3.png" alt="施工維運" />
						</div>
						<div class="index__service__itemtextarea">
							<h3 class="index__service__itemtitle">施工維運</h3>
							<p class="index__service__itemtext">這裡可以放一點基本簡述說明</p>
						</div>
						<NuxtLink to="/service" class="index__service__itemlink"></NuxtLink>
					</li>
					<li class="index__service__item">
						<div class="index__service__itempic">
							<img src="~/assets/img/index_service_icon4.png" alt="電廠投資" />
						</div>
						<div class="index__service__itemtextarea">
							<h3 class="index__service__itemtitle">電廠投資</h3>
							<p class="index__service__itemtext">這裡可以放一點基本簡述說明</p>
						</div>
						<NuxtLink to="/service" class="index__service__itemlink"></NuxtLink>
					</li>
					<li class="index__service__item">
						<div class="index__service__itempic">
							<img src="~/assets/img/index_service_icon4.png" alt="儲能系統" />
						</div>
						<div class="index__service__itemtextarea">
							<h3 class="index__service__itemtitle">儲能系統</h3>
							<p class="index__service__itemtext">這裡可以放一點基本簡述說明</p>
						</div>
						<NuxtLink to="/service" class="index__service__itemlink"></NuxtLink>
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

<style scoped lang="sass"></style>
