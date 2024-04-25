<script setup>
import { onMounted } from "vue";
import { useIndexAbout } from "@/composables/useIndexAbout.js";
import { useIndexKv } from "@/composables/useIndexKv.js";
import { useAssetHandle } from "@/composables/useAssetHandle.js";
import { useCaseStore } from "@/stores/useCase.js";
const { useAsset } = useAssetHandle();
const caseStore = useCaseStore();

const { kvData, nowKvPath, kvTimer, startKvTimer } = useIndexKv();

const {
	aboutData,
	aboutDataActive,
	nowAboutTitle,
	nowAboutDescription,
	nowAboutPath,
	aboutTimer,
	changeAboutDataActive,
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
					<ul class="index__about__pagination" v-if="aboutData.length > 1">
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
								backgroundImage: `url(${useAsset(
									caseStore.caseData[0].indexImagePath
								)})`,
							}"
						>
							<div class="index__case__textarea">
								<h3 class="index__case__title">
									{{
										caseStore.caseData[0].buildType
											? caseStore.caseData[0].buildType
											: "屋頂平鋪、棚架型"
									}}
								</h3>
								<p class="index__case__text">
									{{
										caseStore.caseData[0].city
											? caseStore.caseData[0].city
											: "台灣"
									}}
									<br />
									{{
										caseStore.caseData[0].place
											? caseStore.caseData[0].place
											: "工廠"
									}}
									<br />
									<span v-if="caseStore.caseData[0].capacity">
										{{ caseStore.caseData[0].capacity }}</span
									>
								</p>
							</div>
							<NuxtLink
								v-if="caseStore.caseData[0].sectionId"
								:to="'/case#' + caseStore.caseData[0].sectionId"
								class="index__case__link"
							></NuxtLink>
						</div>
					</li>
					<li class="index__case__item">
						<div
							class="index__case__image"
							:style="{
								backgroundImage: `url(${useAsset(
									caseStore.caseData[1].indexImagePath
								)})`,
							}"
						>
							<div class="index__case__textarea">
								<h3 class="index__case__title">
									{{
										caseStore.caseData[1].buildType
											? caseStore.caseData[1].buildType
											: "屋頂平鋪、棚架型"
									}}
								</h3>
								<p class="index__case__text">
									{{
										caseStore.caseData[1].city
											? caseStore.caseData[1].city
											: "台灣"
									}}
									<br />
									{{
										caseStore.caseData[1].place
											? caseStore.caseData[1].place
											: "工廠"
									}}
									<br />
									<span v-if="caseStore.caseData[1].capacity">
										{{ caseStore.caseData[1].capacity }}</span
									>
								</p>
							</div>
							<NuxtLink
								v-if="caseStore.caseData[1].sectionId"
								:to="'/case#' + caseStore.caseData[1].sectionId"
								class="index__case__link"
							></NuxtLink>
						</div>
					</li>
					<li class="index__case__item">
						<div
							class="index__case__image"
							:style="{
								backgroundImage: `url(${useAsset(
									caseStore.caseData[2].indexImagePath
								)})`,
							}"
						>
							<div class="index__case__textarea">
								<h3 class="index__case__title">
									{{
										caseStore.caseData[2].buildType
											? caseStore.caseData[2].buildType
											: "屋頂平鋪、棚架型"
									}}
								</h3>
								<p class="index__case__text">
									{{
										caseStore.caseData[2].city
											? caseStore.caseData[2].city
											: "台灣"
									}}
									<br />
									{{
										caseStore.caseData[2].place
											? caseStore.caseData[2].place
											: "工廠"
									}}
									<br />
									<span v-if="caseStore.caseData[2].capacity">
										{{ caseStore.caseData[2].capacity }}</span
									>
								</p>
							</div>
							<NuxtLink
								v-if="caseStore.caseData[2].sectionId"
								:to="'/case#' + caseStore.caseData[2].sectionId"
								class="index__case__link"
							></NuxtLink>
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
