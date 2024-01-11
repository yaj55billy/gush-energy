<script setup>
import { useAssetHandle } from "@/composables/useAssetHandle.js";

const props = defineProps({
	title: String,
	text: String,
	textMobileSnap: String,
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
			<p class="page__kv__text">
				{{ props.text
				}}<span
					v-if="props.textMobileSnap"
					class="page__kv__text--mobilesnap"
					>{{ props.textMobileSnap }}</span
				>
			</p>
		</div>
	</div>
</template>

<style></style>
