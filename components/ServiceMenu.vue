<script setup>
import { ref } from "vue";
import { useServiceStore } from "@/stores/useService.js";
import { useAssetHandle } from "@/composables/useAssetHandle.js";
import { useCommon } from "@/composables/useCommon.js";

const store = useServiceStore();
const { useAsset } = useAssetHandle();
const { isMobileDevice, scrollToTarget } = useCommon();
const router = useRouter();
const route = useRoute();
const nowPage = ref("");
if (route.name === "index") {
	nowPage.value = "index";
}
if (route.name === "service") {
	nowPage.value = "service";
}

const props = defineProps({
	serviceEpc: {
		type: Object,
	},
});

const serviceClickHandle = (index) => {
	store.activeServiceChange(index);
	scrollToTarget(props.serviceEpc);
};

const serviceMousemoveHandle = (index) => {
	if (isMobileDevice()) {
		return false;
	} else {
		store.activeServiceChange(index);
	}
};
const indexServiceClickHandle = (index) => {
	store.activeServiceChange(index);
	router.push("/service#epc");
	// if (isMobileDevice()) {
	// } else {
	// 	router.push("/service");
	// }
};
</script>

<template>
	<ul class="service__list">
		<li
			class="service__item"
			v-for="(item, index) in store.services"
			:class="{
				active: store.activeServiceIndex === index && nowPage === 'service',
			}"
			:key="item.id"
		>
			<div class="service__itempic">
				<img :src="`${useAsset(item.iconPath)}`" :alt="item.title" />
			</div>
			<div class="service__itemtextarea">
				<h3 class="service__itemtitle">{{ item.title }}</h3>
			</div>
			<template v-if="nowPage === 'index'">
				<a
					href="#"
					class="service__itemlink"
					@click.prevent="indexServiceClickHandle(index)"
				></a>
			</template>
			<template v-else-if="nowPage === 'service'">
				<a
					href="#"
					class="service__itemlink"
					@click.prevent="serviceClickHandle(index)"
					@mouseover.prevent="serviceMousemoveHandle(index)"
				></a>
			</template>
		</li>
	</ul>
</template>

<style></style>
