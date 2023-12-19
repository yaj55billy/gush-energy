<script setup>
import { ref, computed, onMounted } from "vue";
import { useIndexAbout } from "@/composables/useIndexAbout.js";
import { useIndexKv } from "@/composables/useIndexKv.js";
import { useAssetHandle } from "@/composables/useAssetHandle.js";

const { useAsset } = useAssetHandle();

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
				<ServiceMenu></ServiceMenu>
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
								<h3 class="index__case__title">屋頂平舖型</h3>
								<p class="index__case__text">
									雲林縣<br />
									工廠<br />
									13MW
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
								<h3 class="index__case__title">屋頂棚架型</h3>
								<p class="index__case__text">
									雲林縣<br />
									工廠<br />
									XXMW
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
								<h3 class="index__case__title">地面型</h3>
								<p class="index__case__text">
									XX縣<br />
									XXX<br />
									XXMW
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
