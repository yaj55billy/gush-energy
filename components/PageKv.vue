<script setup>
import { useAssetHandle } from "@/composables/useAssetHandle.js";

const props = defineProps({
	title: String,
	text: String,
	picPath: String,
});
const { useAsset } = useAssetHandle();
</script>

<template>
	<div
		class="page__kv"
		:style="{
			backgroundImage: `url(${useAsset(props.picPath)})`,
		}"
	>
		<div class="page__kv__content">
			<h2 class="page__kv__title">{{ props.title }}</h2>
			<p class="page__kv__text">{{ props.text }}</p>
		</div>
	</div>
</template>

<style></style>
